# Development History

> **Metadata**
> - last-updated-by: oc-design (OD-7 shell)
> - last-verified-against-code: 2026-07-07
> - staleness-policy: historical entries do not go stale

> **Overview:** Chronological log of completed development work. Each sprint ends with a summary entry. Agents add entries after completing tasks. Useful for understanding what has been built, when decisions were made, and what patterns have emerged.

---

## Entry Format

```
## [Date] — [Sprint or Session Title]

**Summary:**
[2-4 sentence overview of what was accomplished]

**Completed:**
- [task 1]
- [task 2]

**Key Changes:**
- [important architectural or behavioural change]

**Next Sprint Focus:**
[What comes next]
```

---

## History

---

## 2026-07-07 — OD-1: Home Page Design

**Summary:**
Created the first visual design contract (OD-1 Home) following the portfolio revamp plan. The design features hero with name/tagline/availability badge, stat strip, tech-stack marquee, featured project card, and quick-nav cards. All copy is wrapped in `[CONFIG:*]` markers for 1:1 config mapping. Dark/light theme toggle included via CSS custom properties. Existing interaction directives (typing-effect, animated-border, pulsating-effect) annotated as CSS equivalents.

**Completed:**
- `.ai-system/designs/od-1-home.html` — full home page visual contract
- Updated `.ai-system/designs/README.md` with OD file index and interaction reference table
- Updated repo-map, dependency-graph, project-plan, task-queue, and dev-history per `update-ai-system.md`

**Key Changes:**
- Portfolio revamp phase initiated (Phase 2 in project-plan)
- Designs directory created with README and first OD file

**Next Sprint Focus:**
OD-3: Experience page design contract

---

## 2026-07-07 — OD-3: Experience Page Design

**Summary:**
Created the Experience page visual contract (OD-3) following the portfolio revamp plan. The design features a vertical timeline with 7 entries (HICC → Liquiditti → Along → Roxo's Ornaments → Julius Berger → Transact Store → NPA), each showing role, organization, date range, 2-3 line description, and tech/scope tag pills. Active roles (Along, Transact Store) carry a [pulsating-effect] green dot indicator with "CURRENT" badge. The timeline uses a vertical line with gold-accent dots that expand on hover, card-style entries with hover elevation, and a monospace-styled date badge. Matches OD-1/OD-2 visual system exactly — same theme tokens, spacing scale, nav, footer, and theme toggle.

**Completed:**
- `.ai-system/designs/od-3-experience.html` — full Experience page visual contract (vertical timeline)
- Updated `.ai-system/designs/README.md` — OD-3 marked Done
- Updated project-plan.md — OD-3 marked complete

**Key Changes:**
- OD-3 design contract added to `.ai-system/designs/`
- 7 timeline entries with config-driven placeholders for all copy
- [pulsating-effect] annotated on current-role indicators
- All copy wrapped in `[CONFIG:*]` markers for the Experience config object schema

**Next Sprint Focus:**
OD-4: Projects page design contract (tiered layout)

---

## 2026-07-07 — OD-4: Projects Page Design

**Summary:**
Created the Projects page visual contract (OD-4) with four distinct visual tiers: Flagship Platforms (animated-border cards with [animated-border] annotation), Automation & AI Systems teaser card (linking to a dedicated page, with [pulsating-effect] badge), Applied Engineering (standard cards), and a collapsed Archive/Early Projects accordion (collapsed by default with a count badge showing hidden item count). Each project card includes image/thumbnail slot with [image-viewer] annotation (click-to-expand), title, 2-line description, tech-stack pills, and GitHub + live-demo links (with disabled styling for case studies with no public link). Matches OD-1/OD-2/OD-3 visual system exactly.

**Completed:**
- `.ai-system/designs/od-4-projects.html` — full Projects page visual contract (tiered layout)
- Updated `.ai-system/designs/README.md` — OD-4 marked Done
- Updated project-plan.md — OD-4 marked complete
- Updated repo-map, dependency-graph, system-architecture, dev-history, and lessons-learned per `update-ai-system.md`

**Key Changes:**
- OD-4 design contract added to `.ai-system/designs/`
- Four-tier layout pattern established for project showcase
- All interaction affordances annotated ([image-viewer], [animated-border], [pulsating-effect])
- Archive accordion with JS toggle and aria-expanded state for accessibility
- All copy wrapped in `[CONFIG:*]` markers for the Projects config object schema

**Next Sprint Focus:**
OD-5: Automation & AI Systems page design contract

---

## 2026-07-07 — OD-5: Automation & AI Systems Page Design

**Summary:**
Created the Automation & AI Systems page visual contract (OD-5) — a dedicated page for engineering tooling and AI-assisted development workflow. The top section features a horizontal flow diagram (PRD → Roadmap → Design → Prompts → Open Design → Open Code) with monospace-styled nodes and arrow connectors, the "Open Design" node marked as active with [pulsating-effect] annotation. Below, three feature cards (.ai-system-template, default-template, .github-workflows) presented in a compact, code-like grid with prominent monospace labels, tech-stack pill tags, and GitHub repo links. Style is deliberately more technical/diagrammatic than the Projects page. Matches OD-1/OD-2/OD-3/OD-4 visual system exactly.

**Completed:**
- `.ai-system/designs/od-5-automation.html` — full Automation & AI Systems page visual contract
- Updated `.ai-system/designs/README.md` — OD-5 marked Done
- Updated project-plan.md — OD-5 marked complete
- Updated dev-history.md per `update-ai-system.md`

**Key Changes:**
- OD-5 design contract added to `.ai-system/designs/`
- Flow diagram pattern established (6-step workflow with active-node [pulsating-effect])
- Feature card pattern established (compact 3-column grid with monospace-heavy styling)
- [typing-effect] annotated on philosophy strip, [pulsating-effect] annotated on active flow node
- All copy wrapped in `[CONFIG:*]` markers for the Automation config object schema

**Next Sprint Focus:**
OD-6: Certificates page design contract

---

## 2026-07-07 — OD-6: Certificates Page Design

**Summary:**
Created the Certificates page visual contract (OD-6), restyling the existing gallery/grid behavior to match the OD-1 through OD-5 visual system. The design features a page header with label, title, and [typing-effect] subtitle, followed by three category sections (Frontend, Backend, Fullstack) each with carousel navigation buttons and an item count badge. Certificate cards are arranged in a responsive 3-column grid with image thumbnails annotated with [image-viewer] (click-to-expand overlay), title, 2-line description, tech-stack pills, and [animated-border] "View Certificate" action buttons. Matches the established visual system exactly — same theme tokens, spacing scale, nav with active state, footer, and theme toggle.

**Completed:**
- `.ai-system/designs/od-6-certificates.html` — full Certificates page visual contract
- Updated `.ai-system/designs/README.md` — OD-6 marked Done
- Updated project-plan.md — OD-6 marked complete
- Updated dev-history.md, repo-map.md per `update-ai-system.md`

**Key Changes:**
- OD-6 design contract added to `.ai-system/designs/`
- Three-tier category layout (Frontend/Backend/Fullstack) with carousel navigation
- [image-viewer] annotated on certificate thumbnails
- [animated-border] annotated on action buttons
- [typing-effect] annotated on page subtitle
- All copy wrapped in `[CONFIG:*]` markers for the Certificates config object schema

**Next Sprint Focus:**
OD-7: Shared Shell design contract (nav / footer / theme)

---

## 2026-07-07 — OD-7: Shared Shell Design (Nav / Footer / Theme)

**Summary:**
Created the Shared Shell visual contract (OD-7) — the canonical reference for the nav bar, footer, and theme token system used across all pages. The file documents the complete CSS custom property set (colors with light/dark variants, spacing scale, type scale, radius, shadows, font faces) in visual table form so every OD file stays consistent. Also includes a comprehensive interaction-directives reference table listing the four existing Angular affordances (typing-effect, animated-border, pulsating-effect, image-viewer) with their OD usage locations.

**Completed:**
- `.ai-system/designs/od-7-shell.html` — shared shell visual contract with nav, footer, theme toggle, token tables, and directive reference
- Updated `.ai-system/designs/README.md` — OD-7 marked Done

**Key Changes:**
- OD-7 design contract added to `.ai-system/designs/`
- Theme tokens formally documented with light/dark comparison tables and visual swatches
- Interaction directives formally documented with per-OD usage tags
- Spacing scale and type scale added as CSS custom properties (--space-*, --type-*) for consistency across all future OD files
- All copy wrapped in `[CONFIG:*]` markers for the Shell config object schema

**Next Sprint Focus:**
Begin Angular implementation of the shared shell (nav component, footer component, theme service, and theme-toggle component)

---

## 2026-07-07 — OD-2: About Page Design

**Summary:**
Created the About page visual contract (OD-2) following the portfolio revamp plan. The design features a philosophy-first bio section (metadata-driven, config-first, AI-assisted delivery pillars as cards), biography details paragraph area, a "how I build" 2x2 grid (OOP services, universal wrappers, single-source-of-truth config, plus one extra slot), contact/social links row with pill-style buttons, and a "currently" strip with availability dot (+ pulsating-effect annotation), role, and location. Matches OD-1 visual system exactly — same theme tokens, spacing scale, nav, footer, and theme toggle.

**Completed:**
- `.ai-system/designs/od-2-about.html` — full About page visual contract
- Updated `.ai-system/designs/README.md` — OD-2 marked Done

**Key Changes:**
- OD-2 design contract added to `.ai-system/designs/`
- All copy wrapped in `[CONFIG:*]` markers for the About config object schema

**Next Sprint Focus:**
OD-3: Experience page design contract

---

## 2026-07-07 — Implementation Sprint: Content Architecture + All 6 Pages

**Summary:**
Full implementation of the portfolio revamp based on the 7 OD design contracts. Created a config-driven content layer (ContentService with static configs + optional generated.json merge), added two new pages (Experience, Automation) with routes, and refactored the remaining four pages (Home, About, Projects, Certificates) to consume the ContentService. Also performed Angular 18→19 upgrade, FontAwesome 0.x→1.x migration, and synced OD-7 theme tokens to tailwind.config.js and styles.scss. Created an enrichment script at `scripts/enrichment.js` that reads project repo slugs from config and fetches GitHub stats. Build succeeds with 6 prerendered static routes and zero errors.

**Completed:**
- Angular 18.0.0 → 19.2.25 upgrade (ng update @angular/cli@19 @angular/core@19)
- FontAwesome 0.15.0 → 1.x migration
- ContentService with 7 config files and types
- Home page refactored (hero, stats, tech marquee, featured project, quick-nav cards — OD-1)
- About page refactored (philosophy-first, how-I-build grid, contact, currently strip — OD-2)
- Experience page created (vertical timeline, 7 entries, current-role pulsating dot — OD-3)
- Projects page refactored (4 tiers: flagship/automation teaser/applied/archive accordion — OD-4)
- Automation page created (flow diagram, 3 feature cards, philosophy strip — OD-5)
- Certificates page refactored (three category sections, image gallery — OD-6)
- Nav/footer updated with all 6 nav links, ContentService-driven (OD-7)
- Theme tokens synced: tailwind.config.js + styles.scss CSS custom properties (OD-7)
- Enrichment script at `scripts/enrichment.js`
- `public/content/` directory created for generated.json output

**Key Changes:**
- ContentService established as single source of truth for all page content (static config fallback + HTTP enrichment merge, never throws)
- Projects page uses 4-tier layout matching OD-4 (flagship with [animated-border], teaser with [pulsating-effect], archive accordion)
- Four existing directives preserved and correctly imported across all pages
- provideAnimations() added to app.config.ts for route animations

**Next Sprint Focus:**
Phase 4: Quality & Polish (responsive design, accessibility, tests, performance)

---

## 2026-07-07 — Project Initialization

**Summary:**
Project repository created and .ai-system documentation structure initialized. Bootstrap prompt run to establish initial architecture understanding. Task queue populated with first sprint tasks.

**Completed:**
- .ai-system directory created with all template files
- Initial project scan completed
- .ai-context.md populated with project details

**Key Changes:**
- .ai-system framework installed
- GitHub Actions workflow for opencode integrated

**Next Sprint Focus:**
Begin first development tasks from task-queue.md
