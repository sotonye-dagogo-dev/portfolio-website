# Lessons Learned

> **Metadata**
> - last-updated-by: opencode (update-ai-system)
> - last-verified-against-code: 2026-07-18
> - staleness-policy: each entry has its own staleness — check supersedes links

> **Overview:** Practical knowledge accumulated during development — things that worked well, things that didn't, and patterns worth repeating. Different from `repair-system.md` (tracks errors); this file tracks development process insights and architectural wisdom. Uses supersedes/superseded-by links for evolving practices.

---

## Entry Format

```
## [Lesson Title]

**Context:**
[What situation this came from]

**What We Learned:**
[The insight or pattern discovered]

**Apply When:**
[When future agents/developers should use this knowledge]

**Supersedes:** [link to any prior lesson this replaces, or None]
**Superseded by:** [link to any newer lesson that replaces this, or None]
```

---

## Lessons

## Design Contracts Should Use Explicit Placeholder Markers

**Context:**
Creating OD-1 home page design and anticipating the config-driven refactor.

**What We Learned:**
Wrapping every copy string in `[CONFIG:path]` markers makes the mapping between visual designs and the config layer unambiguous. Future agents or developers can scan a design file and instantly know which config keys need to exist. This prevents "where does this text come from?" confusion during implementation.

**Apply When:**
Creating any new visual design contract — always wrap display text in `[CONFIG:path]` markers.

**Supersedes:** None
**Superseded by:** None

## Tiered Project Layout With Distinct Visual Treatments

**Context:**
Creating OD-4 projects page with four tiers (Flagship, Automation teaser, Applied Engineering, Archive accordion).

**What We Learned:**
Giving each tier a distinct visual treatment (animated-border for Flagship, teaser card with badge for Automation, standard cards for Applied, collapsible accordion for Archive) creates clear visual hierarchy without relying on a flat grid that conflates projects of different scope and maturity. The accordion pattern with a count badge communicates "there's more here" without overwhelming the page. Annotating existing Angular directives ([image-viewer] on thumbnails, [animated-border] on Flagship cards, [pulsating-effect] on teaser badge) keeps the design contract aligned with the implemented interaction system.

**Apply When:**
Designing any list/showcase page where items differ significantly in scope or maturity — use tiered sections rather than a homogeneous grid. Always annotate existing interaction affordances by directive name in the design contract.

**Supersedes:** None
**Superseded by:** None

## Static Config Fallback + JSON Enrichment Merge

**Context:**
Implementing the content architecture for the portfolio revamp. Needed to ship with compile-time default content while allowing an optional runtime-generated.json to enrich specific fields without forking the entire config.

**What We Learned:**
Loading static configs via TypeScript imports gives type safety and compile-time guarantees. Adding a `mergeWithGenerated()` method that does a field-by-field deep merge from `public/content/content.generated.json` (fetched via HttpClient) allows enrichment without breaking the static defaults. The merge is lenient — if the file is missing, malformed, or a fetch fails, the service silently falls back to static configs. This pattern avoids the "all-or-nothing" problem of a single JSON file and keeps the type system intact.

**Apply When:**
Any project where you need both compile-time default content and optional runtime enrichment. Use static TypeScript objects for the defaults, then layer enrichment on top via a non-throwing merge function. Never let a missing enrichment file break the page.

**Supersedes:** None
**Superseded by:** None

## IntersectionObserver Must Re-observe After Angular Route Changes

**Context:**
Implementing `.reveal`, `.reveal-left`, `.reveal-right`, and `.reveal-blur` scroll-reveal effects using `IntersectionObserver` in `app.component.ts`. After navigating between pages, the old page's DOM is removed and the new page's elements need to be observed.

**What We Learned:**
In an Angular SPA, `IntersectionObserver` instances created in the root component only observe elements that exist at initialization time. After a route change via Angular router, the new page's DOM content is inserted, but the observer still points to the old (detached) elements. You must subscribe to `Router.events`, filter for `NavigationEnd`, and re-run `observeRevealElements()` (which re-queries the DOM for scroll-reveal classes) inside a `setTimeout(..., 50)` to allow the new view to render. This applies to any scroll-reveal class observed by the root component — including `.reveal-blur`.

**Apply When:**
Using `IntersectionObserver` in a root-level Angular component for scroll-reveal effects on route-level content. Always subscribe to `NavigationEnd` and re-observe after a short delay. If new scroll-reveal classes are added (e.g., `.reveal-blur`), update the query selector in `observeRevealElements()` to include them.

**Supersedes:** None
**Superseded by:** None

## Verify Observer Query Selector After Adding New Reveal Classes

**Context:**
During the design token polish sprint, we added `opacity: 0` to `.reveal-blur` CSS and verified the IntersectionObserver selector. The selector was initially `'.reveal, .reveal-left, .reveal-right, .stagger-children'` — `.reveal-blur` was missing from the query, meaning elements with *only* the `.reveal-blur` class would never become visible.

**What We Learned:**
When adding a new CSS scroll-reveal class, you must update both the CSS transition definition **and** the IntersectionObserver query selector in `app.component.ts`'s `observeRevealElements()` method. The selector must explicitly include the new class. Elements with only the new reveal class (no other `.reveal*` class) will be invisible until the selector is updated.

**Apply When:**
Adding any new scroll-reveal class (e.g., a new `.reveal-*` variant). Always update `observeRevealElements()` selector in the same commit that adds the CSS. Check whether existing elements use only the new class or are paired with an already-observed class — only the former will break.

**Supersedes:** None
**Superseded by:** None

## Central Icon Resolver Avoids Import Boilerplate

**Context:**
Migrating from text/mono icon labels to FontAwesome icons across home, about, automation, and projects pages. Each component would have needed individual FA icon imports for every icon it uses.

**What We Learned:**
Creating a single `src/app/shared/icon-utils.ts` with a `fa(iconName: string): IconDefinition | null` resolver function centralises all icon imports in one file. Components only import the resolver and call `fa('iconName')` in templates. This eliminates per-component icon import boilerplate and makes icon catalogue changes a single-file edit. The pattern also enables config-driven icons — the config file stores a string name that maps directly through the resolver.

**Apply When:**
Any Angular project using FontAwesome across multiple components. Create a central icon map file with a resolver function, import `FontAwesomeModule` per component, and use `<fa-icon [icon]="fa(name)">` in templates. Keep the resolver path consistent so all components import from the same source.

**Supersedes:** None
**Superseded by:** None

## Character-Level Blur Reveal as a Mode, Not a Separate Directive

**Context:**
Adding a blur-reveal entrance animation for the hero tagline. Considered building a standalone `BlurRevealDirective` vs. adding a `mode` option to the existing `TypingEffectDirective`.

**What We Learned:**
Adding a `mode` option to an existing directive is cleaner than a separate directive when: (a) the new effect operates on the same element (text content), (b) it shares the same lifecycle hooks (`ngOnInit`, `ngAfterViewInit`, `ngOnDestroy`), and (c) it shares configuration fields (`autoStart`, `loop`, `typingSpeed`, `loopDelay`). The blur reveal branches at the top of `startTypingEffect()`, which keeps the typewriter path untouched. The cursor element is reused. Wrapping each character in a `<span>` with inline transitions (`filter` + `opacity`) gives fine-grained control without external animation libraries. For loop mode, `startBlurUntype()` reverses the reveal by re-applying blur/opacity group by group — symmetric with the forward pass.

**Apply When:**
Adding a new text animation variant that operates on the same element type and shares most of the config/lifecycle with an existing directive. Prefer a `mode` option over a new standalone directive to avoid duplicating lifecycle boilerplate, cursor logic, and config plumbing.

**Supersedes:** None
**Superseded by:** None

## Compute Stats From Source Arrays, Not Static Values

**Context:**
Stats for Projects, Technologies, and Certificates were static placeholders (`'12+'`, `'15+'`, etc.) in `site.config.ts`. Every time a project or certificate was added, the stats had to be manually updated.

**What We Learned:**
Computing stat values directly from the source config arrays guarantees accuracy. `allProjects.length` for Projects, `new Set<string>()` across all project tech stacks for Technologies, and a `.reduce()` sum of certificate category items for Certificates. This eliminates staleness entirely — adding a new project or certificate to its config automatically updates the corresponding stat. The pattern is "single source of truth" applied to metrics: the config arrays are the truth, not the stat display values.

**Apply When:**
Any dashboard, stats section, or summary that counts items from a defined data set. Derive the count from the source array rather than maintaining a separate static number. For categories where the source is computed (e.g., unique technologies), use a `Set` or similar dedup structure in a private getter.

**Supersedes:** None
**Superseded by:** None

## Dynamic Footer Year Avoids Outdated Copyright

**Context:**
Footer copyright displayed `2025 Sotonye Dagogo` statically. Would need a config update every January.

**What We Learned:**
Overriding the footer copyright in the `site` getter of `content.service.ts` with `` `${new Date().getFullYear()} Sotonye Dagogo` `` makes it evergreen. The static config value becomes a fallback that is never reached (the getter always overrides). This is zero-maintenance — no config changes needed for the year to stay current.

**Apply When:**
Any footer or display element that shows the current year. Compute it at runtime via `new Date().getFullYear()` in a service getter rather than storing it in config. Works for both CSR and SSR (the year is accurate at render time).

**Supersedes:** None
**Superseded by:** None

## Add CSS Fallbacks Even When a Directive Exists

**Context:**
The pulsating effect on the availability badge was implemented as an Angular directive (`PulsatingEffectDirective`). During the visual polish sprint, we added a pure CSS `@keyframes availability-glow` animation on the same elements as a visual fallback that runs immediately, without waiting for Angular bootstrapping.

**What We Learned:**
Directives run after Angular bootstraps and may not fire during SSR/prerendering or on slow connections. A CSS `@keyframes` animation on the same element provides instant visual feedback regardless of framework state. The directive can add additional behaviour on top (e.g., dynamic intensity), but the base effect should live in CSS when possible. For the availability glow specifically, both the CSS animation and the directive now coexist — CSS handles the glow loop, directive handles any programmatic extras.

**Apply When:**
Adding any visual effect that is also implemented as an Angular directive. Consider whether a pure CSS equivalent would work as a fallback or baseline. If so, define the `@keyframes` in the component's SCSS and let the directive add enhancements rather than own the effect outright.

**Supersedes:** None
**Superseded by:** None
