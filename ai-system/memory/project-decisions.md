# Project Decisions

> **Metadata**
>
> - last-updated-by: opencode (fa-icon-config-polish-sprint)
> - last-verified-against-code: 2026-07-15 (verified during this sprint)
> - staleness-policy: each entry has its own staleness — check supersedes links

> **Overview:** Log of significant architectural, technical, and product decisions. Agents consult this before proposing changes to avoid contradicting prior reasoning. Uses supersedes/superseded-by links so contradictory entries are explicitly resolved rather than both appearing equally valid.

---

## Decision Format

```
## [Decision Title]

**Decision:** [What was decided]
**Date:** [YYYY-MM-DD]
**Made by:** [Role / Agent / Developer]
**Supersedes:** [link to any prior decision this replaces, or None]
**Superseded by:** [link to any newer decision that replaces this, or None]

**Reason:**
[Why this choice was made]

**Alternatives Considered:**
[What else was evaluated and why it was rejected]

**Implications:**
[What this decision affects going forward]
```

---

## Decisions

## Design-Contract-First Workflow

**Decision:** Create standalone HTML visual contracts (OD files) before any Angular implementation code. Each contract serves as the single source of truth for the page's layout, spacing, colour usage, and copy.
**Date:** 2026-07-07
**Made by:** oc-design (Open Design)
**Supersedes:** None
**Superseded by:** None

**Reason:**
The portfolio revamp package specifies this exact workflow — design in Open Design, save HTML to `ai-system/designs/`, then Open Code implements from those contracts. This separates visual decisions from implementation decisions, reduces back-and-forth, and keeps a permanent visual record.

**Alternatives Considered:**

- Directly editing Angular components — rejected because it conflates visual design with implementation, making iteration slower.
- Using a design tool outside the repo — rejected because the HTML contracts live version-controlled alongside the code.

**Implications:**

- Every OD file must be self-contained (no external CSS/JS deps) so it renders in any browser without a build step.
- Angular implementation must not introduce visual tokens that aren't in the OD file's CSS custom properties.
- Implementation agents must reference both the OD file and the existing directive source when building a page.

## Effects Adapted From Yasffiralmeida.com

**Decision:** Adapt loading screen (percentage counter + bar), magnetic button effect, image fade-on-load, and blur-reveal scroll animation from yasffiralmeida.com as reusable Angular directives and CSS classes.
**Date:** 2026-07-15
**Made by:** Developer
**Supersedes:** None
**Superseded by:** None

**Reason:**
The full visual redesign (2026-07-08) was inspired by yasffiralmeida.com as the primary reference. These four effects complete the interaction parity with the inspiration site while keeping implementation self-contained as Angular standalone directives and a global CSS class.

**Alternatives Considered:**

- Using a library (e.g., GSAP, AOS) — rejected because standalone directives avoid extra dependencies and keep the bundle lean; the effects are simple enough for native JS/CSS.
- Hardcoding the loading overlay in each component — rejected because `initLoader()` in `app.component.ts` runs once on bootstrap, independent of routing.

**Implications:**

- `ImageFadeDirective` is a `selector: 'img[appImageFade]'` standalone directive — applied to any `<img>` for fade-in on load.
- `MagneticBtnDirective` is a `selector: '[appMagneticBtn]'` standalone directive — applied to buttons/links for sticky mouse-follow; touch devices automatically skip via `matchMedia('(pointer:fine)')`.
- `.reveal-blur` is a CSS class (not a directive) that transitions `filter: blur(8px)` to `blur(0)` when `.visible` is added by the IntersectionObserver.
- Loading overlay (`#loader`) is in `index.html` and removed from DOM after fade-out.

## Tighter Spacing Scale for More Polished Layout

**Decision:** Reduced all large spacing tokens by 15–35%: `--space-2xl` 48→40px, `--space-3xl` 64→48px, `--space-4xl` 96→64px, `--space-5xl` 128→80px. Page-header padding reduced from `-5xl/-3xl` to `-4xl/-2xl` (mobile similarly adjusted).
**Date:** 2026-07-15
**Made by:** Developer
**Supersedes:** None
**Superseded by:** None

**Reason:**
The original spacing scale was generous-to-a-fault, creating excess whitespace that pushed content below the fold and reduced visual density. The revised values keep the design airy while fitting more content above the fold and reducing total page scroll length.

**Alternatives Considered:**
- Keeping the original scale — rejected because it wasted vertical space, especially on hero and page headers.
- Using a CSS clamp-based responsive scale — rejected for now as the static reduction already achieves the goal; can revisit if responsive issues arise.

**Implications:**
- Affects all pages using `--space-*` tokens, page-header padding, section margins, and card padding.
- No component layout breaks expected since values scale uniformly.

## Hero + Stats Integrated Layout

**Decision:** Home page hero now uses `.hero-layout` CSS grid (`grid-template-columns: 1fr auto`) with content on the left and stats as a vertical sticky sidebar on the right. Stats removed from their own standalone section.
**Date:** 2026-07-15
**Made by:** Developer
**Supersedes:** Previous hero layout where stats were in a separate section below the hero.
**Superseded by:** None

**Reason:**
The standalone stat strip felt disconnected from the hero. Integrating stats as a sidebar places metrics alongside the introduction, creating a dashboard-like first impression and reclaiming vertical space. Sticky positioning keeps stats accessible during scroll.

**Alternatives Considered:**
- Stats below hero — original layout, felt like an afterthought.
- Stats inline with hero text — too cluttered for the hero's typographic focus.

**Implications:**
- Mobile breakpoint at 900px collapses the sidebar to a horizontal row below hero content.
- Stats sidebar uses `border-left` divider on desktop, `border-top` on mobile.

## Full-Width About Page with Zigzag Bio

**Decision:** Changed About page from `page-sm` (900px constrained) to `page` (1200px full width). Bio text gets `max-width: 900px` with zigzag paragraph alternation (70% width, alternating left/right alignment).
**Date:** 2026-07-15
**Made by:** Developer
**Supersedes:** Previous narrow-column About layout.
**Superseded by:** None

**Reason:**
The constrained layout of `page-sm` made the About page feel cramped for both the philosophy cards grid and the bio content. Full width gives the philosophy grid room to breathe while the zigzag paragraphs add editorial rhythm to the bio.

**Alternatives Considered:**
- Keeping `page-sm` — too narrow for the 3-column philosophy grid.
- Symmetrical centered paragraphs — felt too formal; zigzag adds visual interest.

**Implications:**
- Philosophy grid now has full 1200px width for 3-column layout.
- Bio paragraphs use `.bio-paragraph--right` class for alternating alignment.
- No breakage expected since all spacing is relative to container width.

## FontAwesome Icon System via Central Resolver

**Decision:** Replaced all text/mono icon labels with FontAwesome icon definitions resolved through a central `icon-utils.ts` map. Created `src/app/shared/icon-utils.ts` with a `fa()` function that takes a string name and returns an `IconDefinition`. All templates use `<fa-icon [icon]="fa(iconName)">`. Config `icon` fields now store FA string names (e.g., `'user'`, `'briefcase'`, `'folder'`, `'gears'`, `'certificate'`, `'cube'`, `'hashtag'`, `'code'`, `'robot'`).
**Date:** 2026-07-15
**Made by:** Developer
**Supersedes:** Emoji-Free Icon System for Configs (mono labels).
**Superseded by:** None

**Reason:**
Mono text labels (`[A]`, `{ }`, `#`, `~`) were visually sterile and did not provide immediate semantic recognition. FontAwesome icons are universally recognised, theme-consistent (respect currentColor), and already available as a dependency from the earlier 1.x migration. A central resolver avoids importing individual icons in every component and keeps the icon catalog in one place with a simple string API.

**Alternatives Considered:**
- Keeping mono text labels — visually sterile, low information density.
- Inline SVGs — no shared catalog, harder to maintain.
- Individual FA icon imports per component — lots of boilerplate; changing icons requires updating imports everywhere.

**Implications:**
- Config `icon` fields changed from text/mono labels to FA icon string names.
- All icon-consuming components import `FontAwesomeModule` and use `<fa-icon>`.
- `icon-utils.ts` is the single source of truth for which icons are available.
- Icon containers restyled: `display: inline-flex`, fixed 48×48px box, accent background/border.
- Automation flow arrows use `fa-chevron-right` instead of HTML entity `▶`.
- `font-family: var(--font-mono)` removed from icon container CSS.

## CV Download Button (Config-Driven)

**Decision:** Added `cvUrl?: string` to `SiteConfig` type with a download button on the About page's contact row. The button only renders when `cvUrl` is set, styled as a filled accent button with a download FA icon.
**Date:** 2026-07-15
**Made by:** Developer
**Supersedes:** None
**Superseded by:** None

**Reason:**
Recruiters visiting the About page commonly look for a CV/resume download. Making it config-driven avoids hardcoding a URL and lets the enrichment script or deployment build overwrite the value without touching the component code.

**Alternatives Considered:**
- Placing it in the nav — too prominent; the About page is the natural context.
- Hardcoding in About component — violates config-driven principle.

**Implications:**
- Uses `*ngIf="content.site.cvUrl"` to conditionally render.
- Styled as a filled button with `fa-download` icon, consistent with contact row pill style.

## Auto-Calculated Years Experience

**Decision:** Added `dynamic?: boolean` to `StatItem` and `experienceStartYear?: number` to `SiteConfig`. The `content.service.ts` stats getter computes years experience as `new Date().getFullYear() - startYear + '+'` when `dynamic: true` and the label matches `'Years Experience'`.
**Date:** 2026-07-15
**Made by:** Developer
**Supersedes:** Previously static `'6+'` value in site.config.ts.
**Superseded by:** None

**Reason:**
The years experience value needs to stay current without manual updates. Computing it from a start year ensures it auto-increments every calendar year without a deployment change.

**Alternatives Considered:**
- Static value updated yearly — forgettable, often stale.
- Server-side computation — over-engineered for a static portfolio.

**Implications:**
- Set `experienceStartYear: 2020` in site.config.ts.
- Stats with `dynamic: true` are resolved at runtime in the getter.
- Static fallback label `'6+'` remains for contexts that don't use the dynamic path.
