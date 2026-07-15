# Project Decisions

> **Metadata**
>
> - last-updated-by: opencode (interaction-effects-sprint)
> - last-verified-against-code: 2026-07-15
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
