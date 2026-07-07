#!/usr/bin/env node
/**
 * Enrichment Script
 * 
 * Reads repo slugs from projects.config.ts, calls the GitHub API for each,
 * and writes refreshed data (stars, last-updated, language, description)
 * to public/content/content.generated.json.
 * 
 * Usage: node scripts/enrichment.js
 * 
 * Does not add any repo not already present in the static config.
 */

const fs = require('fs');
const path = require('path');

const GITHUB_API = 'https://api.github.com/repos';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'content', 'content.generated.json');
const SOURCE_PATH = path.join(__dirname, '..', 'src', 'app', 'content', 'projects.config.ts');

// Parse repo slugs from the config file
function extractRepos(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const pattern = /githubLink:\s*'https:\/\/github\.com\/([^']+)'/g;
  const repos = new Set();
  let match;
  while ((match = pattern.exec(content)) !== null) {
    repos.add(match[1]);
  }
  return [...repos];
}

async function fetchRepoData(repoSlug) {
  try {
    const resp = await fetch(`${GITHUB_API}/${repoSlug}`);
    if (!resp.ok) {
      console.warn(`  [WARN] Failed to fetch ${repoSlug}: ${resp.status}`);
      return null;
    }
    const data = await resp.json();
    return {
      stars: data.stargazers_count,
      lastUpdated: data.updated_at,
      language: data.language,
      description: data.description || '',
    };
  } catch (err) {
    console.warn(`  [WARN] Network error for ${repoSlug}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('Enrichment Script — GitHub API Sync\n');

  if (!fs.existsSync(SOURCE_PATH)) {
    console.error(`[ERROR] Source config not found: ${SOURCE_PATH}`);
    process.exit(1);
  }

  const repos = extractRepos(SOURCE_PATH);
  console.log(`Found ${repos.length} repo(s) in config:\n`);

  const enriched = {};
  for (const repo of repos) {
    console.log(`  Fetching ${repo}...`);
    const data = await fetchRepoData(repo);
    if (data) {
      enriched[repo] = data;
      console.log(`    -> ★ ${data.stars} | ${data.language || 'N/A'} | ${data.lastUpdated}`);
    }
  }

  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const output = { repoEnrichment: enriched, generatedAt: new Date().toISOString() };
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`\nWritten to ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
