# Development History

> **Metadata**
>
> - last-updated-by: opencode (blur-reveal-dynamic-stats-sprint)
> - last-verified-against-code: 2026-07-15 (verified during this sprint)
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

- `ai-system/designs/od-1-home.html` — full home page visual contract
- Updated `ai-system/designs/README.md` with OD file index and interaction reference table
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

- `ai-system/designs/od-3-experience.html` — full Experience page visual contract (vertical timeline)
- Updated `ai-system/designs/README.md` — OD-3 marked Done
- Updated project-plan.md — OD-3 marked complete

**Key Changes:**

- OD-3 design contract added to `ai-system/designs/`
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

- `ai-system/designs/od-4-projects.html` — full Projects page visual contract (tiered layout)
- Updated `ai-system/designs/README.md` — OD-4 marked Done
- Updated project-plan.md — OD-4 marked complete
- Updated repo-map, dependency-graph, system-architecture, dev-history, and lessons-learned per `update-ai-system.md`

**Key Changes:**

- OD-4 design contract added to `ai-system/designs/`
- Four-tier layout pattern established for project showcase
- All interaction affordances annotated ([image-viewer], [animated-border], [pulsating-effect])
- Archive accordion with JS toggle and aria-expanded state for accessibility
- All copy wrapped in `[CONFIG:*]` markers for the Projects config object schema

**Next Sprint Focus:**
OD-5: Automation & AI Systems page design contract

---

## 2026-07-07 — OD-5: Automation & AI Systems Page Design

**Summary:**
Created the Automation & AI Systems page visual contract (OD-5) — a dedicated page for engineering tooling and AI-assisted development workflow. The top section features a horizontal flow diagram (PRD → Roadmap → Design → Prompts → Open Design → Open Code) with monospace-styled nodes and arrow connectors, the "Open Design" node marked as active with [pulsating-effect] annotation. Below, three feature cards (ai-system-template, default-template, .github-workflows) presented in a compact, code-like grid with prominent monospace labels, tech-stack pill tags, and GitHub repo links. Style is deliberately more technical/diagrammatic than the Projects page. Matches OD-1/OD-2/OD-3/OD-4 visual system exactly.

**Completed:**

- `ai-system/designs/od-5-automation.html` — full Automation & AI Systems page visual contract
- Updated `ai-system/designs/README.md` — OD-5 marked Done
- Updated project-plan.md — OD-5 marked complete
- Updated dev-history.md per `update-ai-system.md`

**Key Changes:**

- OD-5 design contract added to `ai-system/designs/`
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

- `ai-system/designs/od-6-certificates.html` — full Certificates page visual contract
- Updated `ai-system/designs/README.md` — OD-6 marked Done
- Updated project-plan.md — OD-6 marked complete
- Updated dev-history.md, repo-map.md per `update-ai-system.md`

**Key Changes:**

- OD-6 design contract added to `ai-system/designs/`
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

- `ai-system/designs/od-7-shell.html` — shared shell visual contract with nav, footer, theme toggle, token tables, and directive reference
- Updated `ai-system/designs/README.md` — OD-7 marked Done

**Key Changes:**

- OD-7 design contract added to `ai-system/designs/`
- Theme tokens formally documented with light/dark comparison tables and visual swatches
- Interaction directives formally documented with per-OD usage tags
- Spacing scale and type scale added as CSS custom properties (--space-_, --type-_) for consistency across all future OD files
- All copy wrapped in `[CONFIG:*]` markers for the Shell config object schema

**Next Sprint Focus:**
Begin Angular implementation of the shared shell (nav component, footer component, theme service, and theme-toggle component)

---

## 2026-07-07 — OD-2: About Page Design

**Summary:**
Created the About page visual contract (OD-2) following the portfolio revamp plan. The design features a philosophy-first bio section (metadata-driven, config-first, AI-assisted delivery pillars as cards), biography details paragraph area, a "how I build" 2x2 grid (OOP services, universal wrappers, single-source-of-truth config, plus one extra slot), contact/social links row with pill-style buttons, and a "currently" strip with availability dot (+ pulsating-effect annotation), role, and location. Matches OD-1 visual system exactly — same theme tokens, spacing scale, nav, footer, and theme toggle.

**Completed:**

- `ai-system/designs/od-2-about.html` — full About page visual contract
- Updated `ai-system/designs/README.md` — OD-2 marked Done

**Key Changes:**

- OD-2 design contract added to `ai-system/designs/`
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

## 2026-07-07 — Implementation Verification & Design Alignment

**Summary:**
Verified the full Angular implementation against the 7 OD design contracts. Fixed the `private-repo` workaround in the image-gallery component (replaced with proper `isCaseStudy` check). Refactored the navbar styling to match OD-7's simpler centered nav with underline hover effects. Refactored the footer to match OD-7's minimal design (copyright + built-with). All 6 pages already consume ContentService correctly. Build verified with 6 prerendered static routes and zero errors.

**Completed:**

- Removed `private-repo` string workaround from image-gallery component
- Navbar restyled to match OD-7 (centered links, underline hover, active state)
- Footer simplified to match OD-7 (copyright + built-with, scroll-to-top removed)
- Build verified with zero errors
- Updated ai-system/designs/README.md with verification status

**Key Changes:**

- Navbar: removed glass-morphism Tailwind classes, added clean centered nav with underline animation
- Footer: removed social links and scroll-to-top, simplified to match OD-7 contract
- image-gallery: replaced `githubLink !== 'private-repo'` with simple existence check

**Next Sprint Focus:**
Feature complete — future work: responsive polish, accessibility audit, test coverage.

---

## 2026-07-08 — Full Visual Redesign (Design System Refresh)

**Summary:**
Completed a comprehensive visual redesign of all 7 OD design contracts and created `od-system.html` as a canonical design system reference, inspired by yasffiralmeida.com (primary) and wegems.co (supporting). The new visual system features a gold accent (`#d4a040`), three-typeface hierarchy (Inter for body/UI, Playfair Display for decorative headings, JetBrains Mono for tech labels), generous whitespace, horizontal gallery sliders with scroll-snap navigation, marquee tracks for tech stacks, 3D card tilt on hover, parallax sections, scrolling text effects, and a back-to-top button. Dark/light theme toggle via `[data-theme]` CSS custom properties with system-style transition. All four existing interaction affordances (typing-effect, animated-border, pulsating-effect, image-viewer) preserved and annotated in each file. Every copy string remains wrapped in `[CONFIG:*]` markers for 1:1 config mapping.

**Completed:**

- `od-system.html` — design system reference (tokens, components, directives table, theme demo)
- `od-1-home.html` — redesigned hero, stat strip, tech marquee, featured project, quick-nav cards
- `od-2-about.html` — redesigned philosophy grid, how-I-build list, contact row, currently strip
- `od-3-experience.html` — redesigned vertical timeline with current-role pulsing dots
- `od-4-projects.html` — redesigned four-tier project layout with horizontal slider gallery
- `od-5-automation.html` — redesigned flow diagram with active node, 3-column feature cards
- `od-6-certificates.html` — redesigned horizontal slider galleries per category
- `od-7-shell.html` — updated shell with new tokens, directives reference table
- Updated `ai-system/designs/README.md` — od-system.html added, directive reference updated
- Updated `repo-map.md`, `design-system.md`, `project-plan.md`, `task-queue.md`, `dev-history.md`, `session-log.md` per `update-ai-system.md`

**Key Changes:**

- New accent color: `#d4a040` (gold), replacing `#daa520`
- New typefaces: Inter (body), Playfair Display (headings), JetBrains Mono (tech labels) — replaces Roboto-only
- New design system file: `od-system.html` with live theme demo
- New components documented: marquee, horizontal gallery/sliders, back-to-top, 3D card tilt, parallax
- Revised spacing scale: `--space-2xs` (2px) through `--space-5xl` (128px)
- Revised border radii: `--radius-sm` (6px), `--radius` (8px), `--radius-lg` (12px), `--radius-xl` (16px), `--radius-2xl` (24px)

**Next Sprint Focus:**
Sync new design tokens into actual codebase (styles.scss, tailwind.config.js) — update accent to #d4a040, replace Roboto with Inter + Playfair Display, implement marquee, horizontal sliders, 3D card tilt, scroll reveal animations, and back-to-top button.

---

## 2026-07-07 — Project Initialization

**Summary:**
Project repository created and ai-system documentation structure initialized. Bootstrap prompt run to establish initial architecture understanding. Task queue populated with first sprint tasks.

**Completed:**

- ai-system directory created with all template files
- Initial project scan completed
- .ai-context.md populated with project details

**Key Changes:**

- ai-system framework installed
- Deployment via Netlify UI (connected to GitHub repo; no `.github/workflows/` directory)

**Next Sprint Focus:**
Begin first development tasks from task-queue.md

---

## 2026-07-15 — Netlify Deployment Fixes & Build Error Resolution

**Summary:**
Debugged and resolved three Netlify build failures identified from the deploy log. Fixed an NG5 type mismatch in the certificates scroll gallery, removed unused PulsatingEffectDirective imports from the automation and projects components, and resolved a hero background image clipping issue. Updated all AI system documentation to accurately reflect Netlify-based deployment (UI config, no GitHub Actions workflows, no netlify.toml).

**Completed:**

- Fixed NG5 type mismatch in `certificates.scrollGallery` — resolved type error causing build failure
- Removed unused `PulsatingEffectDirective` imports from `automation.component.ts` and `projects.component.ts`
- Fixed hero background image: added `padding: 10vh 10vw` and changed to `object-fit: contain` for full image visibility
- Added parallax scroll effect on hero background image (`scrollY * 0.35` translateY via `@HostListener('window:scroll')`)
- Fixed typing effect text clipping: removed `overflow: hidden` and `white-space: nowrap` from `.typing-text`, added `word-wrap`, `overflow-wrap`, `white-space: pre-wrap` for responsive wrapping
- Updated `ai-system/planning/project-plan.md` — CI/CD pipeline changed from "GitHub Actions" to "Netlify UI"
- Updated `ai-system/index/repo-map.md` — removed `.github/workflows/` entry, added Netlify deployment note
- Updated `ai-system/system-architecture.md` — added Netlify deployment section with full config details
- Updated `ai-system/summaries/dev-history.md` — corrected initial GitHub Actions reference
- Logged all fixes in `repair-system.md`

**Key Changes:**

- Deployment model corrected: Netlify UI (no `.github/workflows/`, no `netlify.toml`). Build: `npm run build`, publish: `dist/portfolio-website/browser`, plugin: `@netlify/angular-runtime@4.0.0`, Node 24.18.0, framework auto-detected as Angular
- Hero image now fully visible with responsive padding and object-fit:contain
- Typing effect now supports multi-line wrapping instead of a single clipped line
- Parallax effect added to hero background via HostListener scroll binding

**Next Sprint Focus:**
Continue responsive polish, accessibility audit, and test coverage.

---

## 2026-07-15 — FontAwesome Icon System & Layout Polish Sprint

**Summary:**
Replaced all text/mono icon labels (`[A]`, `{ }`, `#`, `~`, `'</>'`) across config files and templates with FontAwesome icon definitions via a central `icon-utils.ts` resolver. Created `src/app/shared/icon-utils.ts` with a string-to-IconDefinition map (18 icons) and `fa()` resolver function. Updated 4 pages (home, about, automation, projects) to use `<fa-icon [icon]="fa(iconName)">`. Restyled icon containers with fixed 48×48px boxes, accent background/border. Replaced HTML entity `▶` with `fa-chevron-right` in the automation flow diagram. Contact links now use FA icons instead of mono labels.

**Completed:**

- Created `src/app/shared/icon-utils.ts` — central icon map + `fa()` resolver
- Updated config icon fields from mono text labels to FA string names (`user`, `briefcase`, `folder`, `gears`, `certificate`, `cube`, `hashtag`, `code`, `robot`)
- Updated home, about, automation, projects templates to use `<fa-icon>` with `fa()` resolver
- Restyled icon containers: `.quick-nav-card__icon`, `.principle-card__icon`, `.feature-card__icon`, `.how-i-build__icon` — inline-flex, 48×48px, accent bg/border
- Automation flow arrows: replaced `▶` with `fa-chevron-right`
- Contact link icons: replaced text mono labels with FA icons
- Cleaned `font-family: var(--font-mono)` from all icon container CSS

**Key Changes:**

- FontAwesome now used for all icons across the site via a single resolver function
- Config `icon` fields now use FA icon string names (not emoji or mono labels)
- All templates use `<fa-icon>` with `FontAwesomeModule` imported per component
- Icon containers visually consistent: fixed square, accent styling

**Next Sprint Focus:**
CV link config integration, dynamic years experience calculation, availability glow CSS animation.

---

## 2026-07-15 — Configuration & Visual Polish Sprint (CV, Dynamics, Visual Tuning)

**Summary:**
Added `cvUrl` and `experienceStartYear` to SiteConfig, auto-calculating years experience from a start year, and implemented CSS-only availability glow as a fallback animation. Refined dark mode surface/border contrast, reduced footer spacing, tuned hero background opacity and parallax, improved light mode navbar contrast, and added glassmorphism to mobile drawer/nav overlay. Increased blur-reveal setTimeout from 50→250ms for reliable post-navigation observation.

**Completed:**

- Added `cvUrl?: string` and `experienceStartYear?: number` to `SiteConfig` type
- Added `cvUrl` and `experienceStartYear: 2020` to `site.config.ts`
- About page: CV download button added to contact row (accent button with download FA icon)
- Added `dynamic?: boolean` to `StatItem` type; content.service.ts computes years from `experienceStartYear`
- Added `@keyframes availability-glow` CSS animation on `.availability-dot` and `.currently-dot`
- Dark mode: surface changed from `oklch(12%)` → `16%` (more contrast against `7%` bg); border `18%` → `22%`
- Footer: `margin-top` reduced from `--space-4xl` to `--space-3xl`; padding `--space-3xl` → `--space-2xl`
- Mobile footer links: `1fr 1fr` → `repeat(3, 1fr)`
- Page-header mobile padding: `--space-2xl` top / `--space-lg` bottom (768px); `--space-xl` / `--space-md` (480px)
- Home: section padding reduced to `--space-2xl` on mobile
- Hero background opacity: light `0.12`→`0.14`, dark `0.2`→`0.23`
- Scroll parallax moved from `home.component.ts` to `app.component.ts`; `translateY(scrollY * -0.15)` + tilt up to 8deg
- Home component: removed `HostListener`, `Inject`, `Renderer2`
- Light mode nav link color: `rgba(0,0,0,0.65)` (was too-light `var(--muted)` → `oklch(50%)`)
- Mobile drawer: light mode bg `rgba(250,249,244,0.85)` with `backdrop-filter`; dark mode `rgba(7,7,10,0.85)`
- Nav overlay: light mode `rgba(0,0,0,0.15)` (was uniform `rgba(0,0,0,0.4)`)
- Blur reveal `setTimeout` after `NavigationEnd`: 50ms → 250ms

**Key Changes:**

- CV download button on About page (config-driven via `cvUrl`)
- Years experience auto-calculated from config's `experienceStartYear` when `dynamic: true`
- Availability glow entirely replicable via CSS (existing directive runs alongside)
- Hero parallax centralised in `app.component.ts` instead of per-page
- Dark mode surface/border contrast improved (less muddy)
- Navbar light mode readability fixed
- Mobile drawer and overlay now use glassmorphism

**Next Sprint Focus:**
Continue responsive polish, accessibility audit, test coverage, and deployment verification.

---

## 2026-07-15 — Interaction Effects Sprint: Loading Screen, Image Fade, Magnetic Btn, Blur Reveal

**Summary:**
Added four new interaction effects inspired by yasffiralmeida.com — a loading overlay with percentage counter and bar, an image-fade directive for smooth opacity transitions on load, a magnetic button directive with sticky mouse-follow effect, and a `.reveal-blur` scroll-reveal class (blur → clear transition). Applied the new directives and class across all 6 pages. Also fixed footer responsive link wrapping on mobile and increased nav-actions gap for theme toggle spacing.

**Completed:**

- Created `src/app/directives/image-fade/image-fade.directive.ts` — `ImageFadeDirective` (fade-in on load, handles complete/error cases)
- Created `src/app/directives/magnetic-btn/magnetic-btn.directive.ts` — `MagneticBtnDirective` (mouse-follow pull with strength falloff, touch-device skip)
- Added `initLoader()` to `app.component.ts` — smooth 0–100% counter over 1500ms, waits for `document.fonts.ready`, fades out overlay
- Added loading overlay HTML/CSS to `src/index.html` (loader element, percentage count, bar fill)
- Added `.reveal-blur` class to `src/styles.scss` (blur 8px → 0 on `.visible` with 800ms ease-expo transition)
- Updated navbar `nav-actions` gap from `var(--space-sm)` to `var(--space-lg)` for theme toggle spacing
- Updated footer with responsive link wrapping on mobile
- Home page: `appImageFade` on images, `appMagneticBtn` on buttons/links, `reveal-blur` on descriptions
- About page: `reveal-blur` on paragraphs/descriptions, `appMagneticBtn` on contact links
- Projects page: `appImageFade` on images, `appMagneticBtn` on buttons/links, `reveal-blur` on descriptions
- Certificates page: `appImageFade` on images, `appMagneticBtn` on buttons, `reveal-blur` on descriptions
- Experience page: `reveal-blur` on description paragraphs
- Automation page: `reveal-blur` on descriptions, `appMagneticBtn` on feature cards

**Key Changes:**

- Two new standalone directives added: `ImageFadeDirective` and `MagneticBtnDirective`
- New interaction pattern: `reveal-blur` class for blur-to-clear scroll-reveal (complements existing `.reveal`, `.reveal-left`, `.reveal-right`)
- Loading overlay provides perceived performance improvement with smooth counter and font-ready wait
- Touch devices automatically skip magnetic-btn effect (checked via `matchMedia('(pointer:fine)')`)

**Next Sprint Focus:**
Ensure `.reveal-blur` elements are observed by the IntersectionObserver after route changes (confirm `observeRevealElements` selector includes them).

---

## 2026-07-15 — Design Token Polish & Layout Refinements

**Summary:**
Applied a comprehensive polish pass across all pages. Reduced spacing scale (space-2xl through space-5xl tightened by 15–35%), page-header padding reduced. Home page hero layout formalized as `.hero-layout` grid (1fr auto) with stats as a sticky sidebar. About page switched to full-width layout with zigzag bio paragraphs at 70% width. Hero background opacity increased, scroll parallax enhanced with rotate (capped at 8deg). Navbar glassmorphism tuned (opacity 0.6, blur 20px, saturate 1.4). Mobile menu drawer also uses glassmorphism. Image viewer z-index changed to inline style to stay above navbar. `.reveal-blur` CSS transition now includes `opacity: 0` and observer query confirmed includes `.reveal-blur`. Removed all emoji icons from config files, replaced with mono labels and structural symbols. Updated About philosophy text references to "AI design tools/AI coding agents". Updated Automation flow labels to "Visual Contract"/"Implementation". Updated footer builtWith to "AI-Assisted Delivery". Added contact-link icons in About component with mono box styling.

**Completed:**

- Spacing scale tightened: space-2xl 48→40, space-3xl 64→48, space-4xl 96→64, space-5xl 128→80
- Page-header padding reduced from -5xl/-3xl to -4xl/-2xl (mobile similarly reduced)
- Home hero: `.hero-layout` grid (1fr auto) with stats as sticky sidebar; mobile collapses to horizontal row
- About page: full-width layout, `.bio-text` max-width 900px, zigzag paragraphs (70% width, alternating margin-left auto + text-align right)
- Hero background opacity: 0.06→0.12 (dark 0.08→0.2)
- Scroll parallax now applies rotate(tilt_deg) capped at 8deg
- Navbar glassmorphism: background opacity 0.85→0.6, blur 16→20px, saturate 1.2→1.4
- Mobile menu drawer: now glassmorphism (rgba + backdrop-filter) instead of solid surface
- `.reveal-blur` CSS: includes `opacity: 0` transition; observer query includes `.reveal-blur`
- Image viewer: z-index changed from Tailwind z-50 class to inline `style.zIndex = '99999'`
- All emoji icons replaced with mono labels across site.config.ts, about.config.ts, automation.config.ts
- About bio text: "Open Design/Open Code" → "AI design tools/AI coding agents"
- About how-i-build: description cleanup
- Automation flow labels: "Open Design"/"Open Code" → "Visual Contract"/"Implementation"
- Automation component subtitle: "Open Design to Open Code" → "visual contract to implementation"
- Projects teaser text: "ai-system tooling" → "system tooling"
- Footer builtWith: "Open Design" → "AI-Assisted Delivery"
- About component: contact links now render icon in a mono box before label text

**Key Changes:**

- Spacing scale reduced across the board for a tighter, more polished layout
- Hero layout formalized as named grid pattern (`.hero-layout`) with integrated stats sidebar
- Parallax enhanced with rotational component for added depth
- Glassmorphism applied to mobile menu drawer for visual consistency with navbar
- All emoji/HTML-entity icons systematically replaced with text-based mono labels
- Contact links enriched with custom icon rendering matching the mono-box design system

**Next Sprint Focus:**
Continue responsive polish, accessibility audit, and test coverage.

---

## 2026-07-15 — Blur Reveal Effect, Dynamic Stats & Footer Year

**Summary:**
Added `blurReveal` mode to `TypingEffectDirective` — each character wraps in a `<span>` with `filter: blur(10px)` / `opacity: 0.3`, revealed 3 at a time transitioning to `blur(0)` / `opacity: 1`. On loop reverse, characters re-blur progressively. Applied to hero tagline with `[config]="{mode:'blurReveal', loop:true, typingSpeed:4}"`. Made all stats computed from actual config arrays in `content.service.ts`: Projects count from `allProjects.length`, Technologies count from unique tech names (`Set<string>`), Certificates count from sum of items across categories. Footer copyright year now dynamically uses `new Date().getFullYear()`.

**Completed:**

- `TypingEffectDirective`: added `mode: 'typewriter' | 'blurReveal'`, `revealGroup` (default 3), `blurAmount` (default `'10px'`)
- `startBlurReveal()` — wraps each character in `<span>` with blur+opacity, reveals in groups
- `startBlurUntype()` — reverses the reveal on loop, re-blurs characters progressively
- Hero tagline: `[config]="{mode:'blurReveal', loop:true, typingSpeed:4}"`
- `content.service.ts`: stats for Projects, Technologies, Certificates now computed from actual config arrays
- `content.service.ts`: `site` getter overrides `footer.copyright` with current year

**Key Changes:**

- `TypingEffectConfig` interface extended with `mode`, `revealGroup`, `blurAmount`
- All stats are now dynamic / computed — no stale placeholder values
- Footer year auto-updates without manual config edits

**Next Sprint Focus:**
Continue responsive polish, accessibility audit, and test coverage.
