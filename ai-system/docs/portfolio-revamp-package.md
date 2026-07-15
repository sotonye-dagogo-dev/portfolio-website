# Portfolio Revamp Package — sotonye-dagogo.is-a.dev [Link](https://sotonye-dagogo.is-a.dev)

## 1. What's there now (observed from `sotonye-dagogo-dev/portfolio-website`)

- **Stack:** Angular 18 (standalone components), SCSS + TailwindCSS, FontAwesome, SSR config present (`app.config.server.ts`).
- **Pages:** Home, About, Projects, Certificates. No dedicated Experience/timeline page — work history only exists as a flat string array (`workExperiences`) inside `about.component.ts`.
- **Shared components:** `navbar`, `card`, `footer`, `section`, `tech-stack`, `image-gallery`, `theme-toggle`.
- **Directives:** `pulsating-effect`, `typing-effect`, `animated-border`, `image-viewer` — nice interaction layer already in place, worth keeping.
- **Data model — the core issue:** every content set (`projects`, `techStackVariable`, `bioParagraphs`, `ContactLinks`, `certificates`) is a hardcoded `const` array sitting directly inside the page/component `.ts` file. There's no config layer, no fallback strategy, and no separation between "content" and "presentation" — exactly what you flagged wanting to fix.
- **Project taxonomy today:** Enterprise / Frameworks & Libraries / Basic HTML-CSS-JS / Python / Mini-projects. It's dominated by early learning exercises (drum machine, palindrome checker, penguin CSS animation, etc.) and doesn't reflect the Harvesters digital estate, convorchestrate, cis_backend, or any of the `ai-system` tooling.
- **About bio** still frames you as a generic "fullstack web developer" — it undersells the technical-lead/founder/architecture-systems profile you actually operate at now.

## 2. Proposed information architecture

| Section                     | Status       | Change                                                                                                                           |
| --------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Home                        | Keep         | Refresh stats/featured project to pull from new config                                                                           |
| About                       | Keep         | Rewrite bio around engineering philosophy (config-driven, metadata-driven, AI-assisted delivery), not just "fullstack developer" |
| **Experience**              | **New page** | Timeline: Harvesters → Liquiditti (NYSC) → Along → Transact Store → Julius Berger → Roxo's → NPA                                 |
| Projects                    | Restructure  | Re-tiered (see §4) instead of skill-level categories                                                                             |
| **Automation & AI Systems** | **New page** | `ai-system-template`, `default-template`, `.github-workflows`, your Open Design → Open Code pipeline                             |
| Certificates                | Keep         | No change needed                                                                                                                 |

Giving Automation its own top-level nav item (not a Projects sub-tab) is deliberate — it's the thing that actually differentiates you from most full-stack portfolios, so it deserves first-class placement, not a buried tab.

## 3. Metadata-driven / config-driven architecture proposal

New `src/app/content/` domain, one config file per content type:

```
src/app/content/
  types.ts                  ← shared interfaces (ExperienceEntry, ProjectEntry, AutomationEntry, TechItem, SiteConfig)
  site.config.ts            ← name, tagline, socials, availability, stat formulas
  experience.config.ts      ← ExperienceEntry[]
  projects.config.ts        ← ProjectEntry[] (with a `tier` field — see §4)
  automation.config.ts      ← AutomationEntry[]
  tech-stack.config.ts      ← formalizes the existing techStackVariable pattern
  content.service.ts        ← single injectable source of truth
```

**`ContentService` contract (this is the part that removes the hardcoded-fallback problem):**

1. On init, loads the bundled static config above as the **default/fallback** — the site always renders correctly even with zero network calls.
2. Optionally fetches `public/content/content.generated.json` at runtime (see §5) for freshened metadata (stars, last-updated, live-status).
3. Merges generated data over the static config **field-by-field**, never wholesale — if a generated field is missing/malformed, that one field silently falls back to the static value instead of breaking the card.
4. Components (`home`, `about`, `experience`, `projects`, `automation`) only ever consume `ContentService` — no component defines its own data array again.

This gives you exactly the "config-first, single-source-of-truth, admin-configurable, hardcoded-fallback" pattern you use elsewhere (Alogn, `ai-system`, etc.), applied to the portfolio itself.

## 4. Project tiering (replaces skill-level categories)

- **Flagship Platforms** — Along (public repo, real link — see note), Harvesters digital estate (case-study entry, see note below), convorchestrate, cis_backend, homewolves, palace_os_prototype, company-mgmt
- **Automation & AI Systems** (own page, not a project tier) — ai-system-template, default-template, .github-workflows
- **Applied Engineering** — weather-app, task-tracker-2, DBM_package, ann-project (Yorùbá sentiment analysis — keep, it's a real ML signal)
- **Archive / Early Projects** — collapsed accordion, collapsed by default: all the basic HTML/CSS/JS and mini-projects (drum machine, penguin transforms, bar/heat charts, etc.). Keep them for continuity, but don't let them compete for attention with flagship work.

**Note on Harvesters:** the digital-estate platforms are client/organizational work and likely don't have a public repo, so list it as a **case study** (description, role, tech stack, outcome — no repo link). **Along** (`Sotonye0808/along-app`) is public, so it can carry a normal GitHub + live-demo link like any other flagship project — no case-study treatment needed there.

## 5. On auto-pulling projects from GitHub

Your instinct is right — full auto-discovery can't distinguish "show this" from "don't show this," so it's the wrong default. Recommended hybrid, still fully config-driven:

- `projects.config.ts` stays **manually curated** — you explicitly list which repo slugs appear. This is the only thing that controls inclusion, ever.
- A small **build-time enrichment script** (Node, run as a step in `.github-workflows`) takes only the slugs already in your config, hits the GitHub API for just those repos, and writes refreshed stars / last-commit-date / primary-language / README-derived blurb into `public/content/content.generated.json`.
- `ContentService` reads that generated file for freshness, falling back to the static config for anything missing.

Net effect: inclusion is 100% manual and safe (nothing leaks before you're ready), but you never have to hand-edit a star count or "last updated" date again. This is also a legitimate reusable job for `.github-workflows`.

## 6. Automation & AI Systems section — content to feature

- **`ai-system-template`** — your personal AI-assisted development framework: vendor/model decoupling, protocol-plus-role agent layer, interruption-safe state tracking, anti-slop quality gate.
- **`default-template`** — default repo template bootstrapping `ai-system` + the OpenCode Action workflow, so every new project starts automation-ready.
- **`.github-workflows`** — centralized, reusable GitHub Actions for triggering the OpenCode pipeline remotely (including on-the-go from a phone via issue/PR comments).
- Frame this section around your actual workflow: **PRD → Roadmap → Design → Prompts → Open Design → Open Code**, with a short diagram or numbered flow rather than a wall of text.

---

## 7. Open Design prompts (feed to Open Designer → save HTML to `ai-system/designs/`)

Use these exactly like your existing OD-1…OD-7 convention. Each one below is self-contained and copy-pasteable.

### OD-1 — Home

```
Design the home page for a senior full-stack developer & technical lead's portfolio.
Output as a single named HTML file (visual contract only, no framework code).

Sections: hero (name, tagline "Full-Stack Developer & Technical Lead", availability
badge, primary CTA to Projects, secondary CTA to Experience), stat strip (projects,
technologies, years experience, certificates — values are placeholders driven by
config), tech-stack marquee/pills, featured flagship project card, quick-nav cards
to About / Experience / Projects / Automation / Certificates.

Style: dark/light theme toggle support, confident and technical (not playful-junior),
generous whitespace, one accent color, monospace accents for tech-stack labels only.
Keep all copy in clearly labeled placeholder slots so it maps 1:1 to a config object.

Reuse existing interaction affordances (already implemented as Angular directives, so
design them as visual states/annotations rather than new effects): a typing-effect on
the hero tagline, an animated-border treatment on the primary CTA button, and a subtle
pulsating-effect on the "available for work" badge. Note in the file where each applies.
```

### OD-2 — About

```
Design the About page. Sections: bio (engineering philosophy first — metadata-driven,
config-first, AI-assisted delivery — before biography details), a "how I build" list
(OOP class-based services, universal component wrappers, single-source-of-truth config),
contact/social links row, and a small "currently" strip (current roles/availability).
Same visual system as OD-1. Output as a single named HTML file to the same designs folder.
```

### OD-3 — Experience (new page)

```
Design a vertical timeline/Experience page. Each entry: role, organization, date range,
2-3 line description, and a small tag list (tech or scope). Entries, most recent first:
Harvesters International Christian Centre (Technical Lead), Liquiditti Platforms &
Solutions (Software Developer, NYSC), Along (Founder & Technical Lead, 2024-Present),
Roxo's Ornaments (Fullstack Developer), Julius Berger (Trainee), Transact Store
(Founder, 2022-Present), NPA (Intern). Support a "current" indicator on active roles.
Output as a single named HTML file to the designs folder.
```

### OD-4 — Projects (tiered)

```
Design the Projects page with four tiers as distinct visual groups (not a flat grid):
Flagship Platforms, Automation & AI Systems teaser card linking to its own page,
Applied Engineering, and a collapsed "Archive / Early Projects" accordion (collapsed by
default, count badge showing how many items are hidden). Each project card: image/
thumbnail slot, title, 2-line description, tech-stack pills, GitHub + live-demo links
(optional per card — some are case studies with no public link). Output as a single
named HTML file to the designs folder.

Reuse existing interaction affordances: thumbnails should be annotated as using the
image-viewer directive (click-to-expand), and Flagship-tier cards should carry the
animated-border treatment to visually distinguish them from Applied Engineering /
Archive cards. Note in the file where each applies.
```

### OD-5 — Automation & AI Systems (new page)

```
Design a page dedicated to engineering tooling and AI-assisted development workflow.
Top: a simple horizontal flow diagram — PRD -> Roadmap -> Design -> Prompts -> Open
Design -> Open Code. Below: three feature cards for ai-system-template,
default-template, and .github-workflows (name, one-line purpose, tech tags, GitHub
link). Style should read as "engineering systems," more technical/diagrammatic than the
Projects page. Output as a single named HTML file to the designs folder.
```

### OD-6 — Certificates

```
Design/refresh the Certificates page to match the new visual system established in
OD-1 through OD-5 (same nav, footer, theme tokens, spacing scale). Keep the existing
gallery/grid behavior; only restyle to match. Output as a single named HTML file to the
designs folder.
```

### OD-7 — Shared shell (nav / footer / theme tokens)

```
Design the shared navigation bar and footer used across all pages, plus a documented
theme-token reference (colors, spacing scale, type scale, radius, shadow) so every other
OD file stays visually consistent. Nav items: Home, About, Experience, Projects,
Automation, Certificates. Include the dark/light theme toggle affordance. Output as a
single named HTML file to the designs folder.

Also document, as a short reference table alongside the theme tokens, the four existing
interaction directives already implemented in the codebase and where each is used across
the site: typing-effect (hero tagline), animated-border (primary CTAs, flagship project
cards), pulsating-effect (availability badge), and image-viewer (project thumbnails,
click-to-expand). This keeps every OD file and OpenCode referencing the same set of
effects instead of inventing new ones per page.
```

---

## 8. Open Code implementation prompt (feed to OpenCode after designs are saved)

```
Implement the portfolio redesign in the existing Angular 18 project
(Sotonye0808/portfolio-website) using the HTML design contracts saved in
ai-system/designs/ (OD-1 through OD-7). Requirements:

0. DEPENDENCY AUDIT (do this first, before any feature work): run `ng update` and
   `npm outdated` to check Angular CLI/core, TailwindCSS, FontAwesome, and all other
   dependencies against current stable releases — this project hasn't been touched
   in a while. Upgrade to the latest LTS-compatible Angular version and update other
   packages to current stable versions, resolving any breaking changes (deprecated
   APIs, changed standalone-component syntax, updated Tailwind config format, etc.)
   before proceeding to section 1. Commit this as its own PR/step, separate from the
   redesign work, so a dependency issue doesn't get tangled up with a design issue.

1. ARCHITECTURE: create src/app/content/ with types.ts, site.config.ts,
   experience.config.ts, projects.config.ts (projects carry a `tier` field:
   'flagship' | 'applied' | 'archive'), automation.config.ts, tech-stack.config.ts,
   and content.service.ts. content.service.ts must load the static config as the
   default/fallback, optionally merge public/content/content.generated.json
   field-by-field if present and valid, and never throw or blank a section if the
   generated file is missing or malformed.

2. NEW PAGES: add an Experience page/route (src/app/pages/experience/) and an
   Automation page/route (src/app/pages/automation/), following the same
   standalone-component + SectionComponent pattern already used by
   about/projects/certificates. Add both to app.routes.ts and the shared navbar.

3. REFACTOR EXISTING PAGES: home, about, projects, certificates must stop defining
   data inline — they consume ContentService only. Preserve all existing directives
   (typing-effect, animated-border, pulsating-effect, image-viewer) and the
   theme-toggle behavior exactly as they work today.

4. PROJECTS PAGE: implement the four-tier layout from OD-4, including the collapsed
   "Archive" accordion. Case-study entries (no public repo, e.g. Harvesters
   platforms) must render without a broken/missing GitHub link — use an
   `isCaseStudy` flag in ProjectEntry that hides the GitHub button instead of
   pointing it at 'private-repo' as a string (that's the current workaround in
   projects.component.ts — replace it).

5. ENRICHMENT SCRIPT (optional, separate PR): a Node script under scripts/ that
   reads the repo slugs already present in projects.config.ts, calls the GitHub API
   for just those repos, and writes public/content/content.generated.json with
   refreshed stars/last-updated/language/description. Do not add any repo not
   already present in the static config.

6. Match the visual system exactly as specified in the OD files (colors, spacing,
   type scale) — do not introduce new tokens ad hoc.

7. Verify by building and running the dev server; confirm all five nav destinations
   (Home, About, Experience, Projects, Automation, Certificates) render with zero
   console errors before committing.
```

---

## Quick note on next steps

1. Decide the initial curated project list per tier (I proposed one in §4 — trim/add as you see fit before it goes into `projects.config.ts`).
2. Bootstrap `ai-system` in the portfolio repo, drop OD-1…OD-7 into `ai-system/designs/` as you generate them, then run the dependency-audit step (OC prompt, step 0) before the rest of the OC prompt.
