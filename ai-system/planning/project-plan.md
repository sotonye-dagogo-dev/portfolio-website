# Project Plan

> **Metadata**
>
> - last-updated-by: opencode (execute-feature)
> - last-verified-against-code: 2026-07-22
> - staleness-policy: re-verify if project scope or phase changes

> **Overview:** High-level feature checklist organized by development phase. See `planning/task-queue.md` for granular, sprint-level tasks.

---

## Phase 1 — Foundation

- [x] Repository structure and folder conventions established
- [x] Configuration system implemented (env vars, config files)
- [x] CI/CD pipeline (Netlify UI — connected to GitHub repo)
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

## Phase 8 — FontAwesome Icon System Migration

- [x] Created `src/app/shared/icon-utils.ts` — central icon map + `fa()` resolver with 18 icons
- [x] Config icon fields changed from mono text labels to FA string names
- [x] Home, about, automation, projects templates updated to `<fa-icon>` with `fa()` resolver
- [x] Icon containers restyled (inline-flex, 48×48px, accent bg/border)
- [x] Automation flow arrows: HTML `▶` replaced with `fa-chevron-right`
- [x] Contact link icons: mono labels replaced with FA icons
- [x] CSS cleaned: `font-family: var(--font-mono)` removed from icon containers

---

## Phase 9 — Configuration & Visual Polish

- [x] Added `cvUrl?: string` + `experienceStartYear?: number` to `SiteConfig`
- [x] About CV download button (config-driven, accent button + FA icon)
- [x] Auto-calculate years experience (`dynamic` flag + `experienceStartYear`)
- [x] CSS `@keyframes availability-glow` animation on availability dots
- [x] Dark mode: surface `12%`→`16%`, border `18%`→`22%`
- [x] Footer spacing reduced (margin-top `--space4xl`→`--space-3xl`, padding `--space-3xl`→`--space-2xl`)
- [x] Mobile footer links grid: `1fr 1fr` → `repeat(3, 1fr)`
- [x] Page-header mobile padding reduced (768px: `--space-2xl`/`--space-lg`, 480px: `--space-xl`/`--space-md`)
- [x] Home section padding reduced to `--space-2xl` on mobile
- [x] Hero background opacity increased (light `0.12`→`0.14`, dark `0.2`→`0.23`)
- [x] Scroll parallax moved from home → app component (`translateY(scrollY * -0.15)` + 8deg tilt)
- [x] Home component cleaned up (removed HostListener, Inject, Renderer2)
- [x] Light mode nav link color: `rgba(0,0,0,0.65)` (was too-light `var(--muted)`)
- [x] Light mode nav bg: `rgba(250,249,244,0.65)`
- [x] Mobile drawer glassmorphism (light `rgba(250,249,244,0.85)`, dark `rgba(7,7,10,0.85)`)
- [x] Nav overlay light mode: `rgba(0,0,0,0.15)` (was uniform `rgba(0,0,0,0.4)`)
- [x] Blur reveal setTimeout 50ms → 250ms after NavigationEnd

---

## Phase 4 — Quality & Polish

- [ ] Unit test coverage for content module
- [ ] Responsive design verification
- [ ] Accessibility audit
- [ ] Performance optimization

---

## Phase 10 — Interaction Effects: Blur Reveal & Dynamic Stats

- [x] `TypingEffectDirective`: added `mode: 'typewriter' | 'blurReveal'` with `revealGroup` and `blurAmount` config
- [x] `startBlurReveal()` / `startBlurUntype()` — character-level blur reveal with loop support
- [x] Hero tagline configured with `mode:'blurReveal'`
- [x] `content.service.ts`: Projects/Technologies/Certificates stats computed from actual config arrays
- [x] `content.service.ts`: footer copyright year dynamically set from `new Date().getFullYear()`

---

## Phase 7 — Design Token Refinements & Layout Polish

- [x] Spacing scale tightened (space-2xl through space-5xl reduced 15–35%)
- [x] Page-header padding reduced (desktop + mobile)
- [x] Home hero: `.hero-layout` grid with integrated stats sidebar
- [x] About page: full-width layout, zigzag bio paragraphs
- [x] Hero background opacity increased + scroll parallax with rotate tilt
- [x] Navbar glassmorphism tuned (opacity, blur, saturate)
- [x] Mobile menu drawer: glassmorphism instead of solid surface
- [x] `.reveal-blur` CSS `opacity: 0` + observer query updated
- [x] Image viewer z-index: inline style `99999` to stay above navbar
- [x] Emoji-to-mono-label migration across all config files
- [x] Copy updates: automation flow labels, footer builtWith, projects teaser, about philosophy
- [x] About contact links: icon rendering with mono box styling

---

## Phase 6 — Interaction Effects

- [x] Loading overlay (percentage counter + bar, font-ready wait, fade-out)
- [x] `ImageFadeDirective` — fade images in on load
- [x] `MagneticBtnDirective` — sticky mouse-follow on buttons/links
- [x] `.reveal-blur` scroll-reveal class (blur → clear)
- [x] Footer responsive link wrapping on mobile
- [x] Theme toggle spacing (nav-actions gap `var(--space-sm)` → `var(--space-lg)`)

---

## Phase 11 — Featured Carousel, New Projects & Content Quality

- [x] Fixed Netlify build failures (missing methods, missing imports, corrupted node_modules)
- [x] Removed emdashes from config content (about, automation, projects) — AI-generated text indicator
- [x] Added §10 "No Emdashes in Config Content" to engineering principles
- [x] Added Along App (featured, flagship) and HR ID Card Automata (flagship) to projects config
- [x] Refactored `ContentData.featuredProject` (single) → `featuredProjects: ProjectEntry[]` (array)
- [x] Implemented auto-sliding featured carousel on Home page (track-based, prev/next, dots, pause-on-interaction)
- [x] Guarded carousel `setInterval` with `isPlatformBrowser` for SSR compatibility
- [x] Build verifies cleanly

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
