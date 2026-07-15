# Project Plan

> **Metadata**
>
> - last-updated-by: opencode (design-redesign)
> - last-verified-against-code: 2026-07-08
> - staleness-policy: re-verify if project scope or phase changes

> **Overview:** High-level feature checklist organized by development phase. See `planning/task-queue.md` for granular, sprint-level tasks.

---

## Phase 1 — Foundation

- [x] Repository structure and folder conventions established
- [x] Configuration system implemented (env vars, config files)
- [x] CI/CD pipeline (GitHub Actions)
- [x] ai-system bootstrapped

---

## Phase 2 — Portfolio Revamp (Design)

- [x] OD-1: Home page design contract (`ai-system/designs/od-1-home.html`)
- [x] OD-2: About page design contract
- [x] OD-3: Experience page design contract
- [x] OD-4: Projects page design contract
- [x] OD-5: Automation page design contract
- [x] OD-6: Certificates page design contract
- [x] OD-7: Shared shell design contract
- [x] **Complete visual redesign** (all 7 OD files + od-system.html) inspired by yasffiralmeida.com and wegems.co
  - New accent: `#d4a040` (gold), new typefaces: Inter + Playfair Display + JetBrains Mono
  - Horizontal gallery sliders, marquee, 3D card tilt, parallax sections, back-to-top
  - `od-system.html` created as canonical design system reference

---

## Phase 3 — Portfolio Revamp (Implementation)

- [x] Content module (`src/app/content/`) with types, configs, ContentService
- [x] Hero + stat strip (home component)
- [x] Tech-stack marquee + pills (home component)
- [x] Featured project card + quick-nav cards (home component)
- [x] New Experience page + route
- [x] New Automation page + route
- [x] Projects page tiered layout
- [x] About page rewrite (philosophy-first, how-I-build, contact, currently)
- [x] Certificates page restyle
- [x] Shared nav/footer update (all 6 links, footer driven by ContentService)
- [x] Angular 18→19 upgrade + FontAwesome 1.x migration
- [x] Theme tokens synced between tailwind.config.js, styles.scss, and OD-7
- [x] Enrichment script (scripts/enrichment.js) for GitHub API data

---

## Phase 4 — Quality & Polish

- [ ] Unit test coverage for content module
- [ ] Responsive design verification
- [ ] Accessibility audit
- [ ] Performance optimization

---

## Phase 5 — Launch Preparation

- [ ] Production environment configured
- [ ] Security audit
- [ ] Documentation complete
- [ ] Deployment pipeline tested

---

## Completed

- [x] ai-system bootstrap
- [x] All 7 OD design contracts (OD-1 through OD-7)
- [x] od-system.html design system reference
- [x] Phase 2 redesign — all 8 files updated with new visual system (gold accent, Inter+Playfair+JetBrains, marquee, sliders, 3D cards)
- [x] Phase 3 full implementation (content architecture, all 6 pages, enrichment script)
- [x] Angular 19 upgrade + FontAwesome 1.x
- [x] OD design tokens synced to actual code (tailwind.config.js, styles.scss)
