# Repair System — Error Knowledge Base

> **Metadata**
> - last-updated-by: opencode (scroll-driven-section-level-sprint)
> - last-verified-against-code: 2026-07-15
> - staleness-policy: individual entries may be stale if the code has changed around them — verify fix still applies before reusing

> **Overview:** Living knowledge base of errors encountered during development, their root causes, and how they were fixed. Agents must search this before diagnosing new errors and log every fixed bug to prevent recurrence.

---

## How to Use

- **Before debugging:** Search this file for patterns matching the current error
- **After fixing a bug:** Add an entry using the template below
- **If a fix no longer applies:** Mark the entry as `[SUPERSEDED]` and link to the new entry

---

## Error Log

### [TEMPLATE]

```
## [Error Title]

**Symptom:**
[What the developer or user sees]

**Root Cause:**
[The actual technical reason]

**Fix Applied:**
[What change was made]

**Prevention:**
[How to avoid this in future]

**Files Affected:**
[list of files]

**Date:** [YYYY-MM-DD]
**Status:** [Active / Superseded]
```

---

## Known Error Patterns

### Angular

**Hydration Mismatch**
- Symptom: `Hydration failed because the initial UI does not match what was rendered on the server`
- Cause: Browser-only logic (window, localStorage, Date.now()) running during server render
- Fix: Wrap in `ngAfterViewInit` or use `isPlatformBrowser` check
- Prevention: Never access browser APIs outside lifecycle hooks in Angular components

**Missing Module Import**
- Symptom: `NG0304: 'component' is not a known element`
- Cause: Component/directive used without importing its module
- Fix: Add the module to imports array of the parent module
- Prevention: Always check module imports when adding new components

### Node.js / Backend

**Unhandled Promise Rejection**
- Symptom: Server crashes silently or logs `UnhandledPromiseRejectionWarning`
- Cause: async function missing try/catch or `.catch()` not attached to promise
- Fix: Wrap async route handlers in try/catch; use a global async error wrapper
- Prevention: Always release connections in finally, not just success path

### Angular Template Type Mismatch

**NG5: Type 'number' not assignable to 'string' in template expression**
- Symptom: `NG5: Argument of type 'number' is not assignable to parameter of type 'string'` in Angular template compilation
- Cause: Template passed `let ci = index` (number) to method typed as `(id: string, amount: number)` — method expected string for gallery ID
- Fix: Changed method signature to `scrollGallery(index: number, amount: number)` and construct element ID string internally
- Prevention: When using `*ngFor` index as a parameter, ensure the receiving method accepts `number` or uses `string(index)` coercion
- Files Affected: `src/app/pages/certificates/certificates.component.ts`
- Date: 2026-07-15
- Status: Active

### Angular Unused Directive Import

**TS-998113: Directive not used within the template**
- Symptom: `TS-998113: DirectiveName is not used within the template of ComponentName` in Angular build
- Cause: Directive imported but never used in that component's template
- Fix: Remove the unused directive from the component's `imports: [...]` array and its `import` statement
- Prevention: Only import directives that are actually referenced in the component's template
- Files Affected: `src/app/pages/automation/automation.component.ts`, `src/app/pages/projects/projects.component.ts`
- Date: 2026-07-15
- Status: Active
- Additional Instance: `src/app/pages/experience/experience.component.ts` — unused `MagneticBtnDirective` removed from imports

### FontAwesome Icon Type Mismatch

**NG2: IconDefinition | null not assignable to IconProp**
- Symptom: `NG2: Type 'IconDefinition | null' is not assignable to type 'IconProp'` in Angular template compilation — every `<fa-icon [icon]="fa(...)">` fails
- Root Cause: `fa()` helper function returned `IconDefinition | null` (nullable), but FontAwesome's `[icon]` input expects `IconProp` which does not accept `null`
- Fix: Changed return type to `IconDefinition` (non-nullable) by providing `faCircle` as fallback when icon name not found in the map
- Prevention: Ensure icon resolver functions never return `null` — always provide a sensible fallback icon. The type signature should reflect the actual usage (non-nullable for template binding)
- Files Affected: `src/app/shared/icon-utils.ts`
- Date: 2026-07-15
- Status: Active

### Flow Arrow Vertical Alignment

**Automation flow arrows not centered between node boxes**
- Symptom: Arrows in the Development Pipeline flow diagram were vertically centered between the full node (box + label + status) rather than between just the boxes. This made arrows appear lower than expected when labels had varying text lengths.
- Root Cause: The flow diagram used a single flex row with `align-items: center`. Each `.flow-node` was a flex column with box + label, so the arrow centered to the full composite height.
- Fix: Split into two flex tracks (`.flow-track--boxes` and `.flow-track--labels`) stacked via `flex-direction: column` on `.flow-tracks`. Boxes + arrows share one row, labels + spacers share another. Arrows now center perfectly between boxes.
- Prevention: When mixing content of different visual weights (labels below boxes), split into separate rows so alignment references only sibling elements of equal visual weight.
- Files Affected: `src/app/pages/automation/automation.component.html`, `src/app/pages/automation/automation.component.scss`
- Date: 2026-07-15
- Status: Active

### Configuration / Environment

**Missing Environment Variable**
- Symptom: `undefined` values in production, features silently broken
- Cause: Variable defined in `.env.local` but not in production environment
- Fix: Add to deployment environment variables
- Prevention: Add a startup validation check that throws if required env vars are missing

### Flow Arrows Not Stretching Edge-to-Edge

**Connector lines between flow nodes still fixed-width, not spanning gap**
- Symptom: Arrow lines in the Development Pipeline flow diagram were fixed at 36px between boxes, leaving a gap when the diagram was wider than the sum of node + arrow widths. Labels track had the same issue.
- Root Cause: `.flow-arrow` and `.flow-spacer` had `width: 36px; flex-shrink: 0` — they could not grow to fill available space, so the connector line `::before` at `width: 100%` only spanned 36px.
- Fix: Changed both to `flex: 1; min-width: 36px` so they stretch to fill remaining space equally. The `min-width` preserves a baseline arrow at narrow widths. Wrapped label + status in a `.flow-label-cell` div with `min-width: 80px; flex-shrink: 0` to match `.flow-node` dimensions, ensuring both tracks align correctly.
- Prevention: When using flex to build connector tracks, both connecting and fixed-width elements must have matching `min-width` / `flex-shrink` behavior so the two tracks distribute remaining space identically.
- Files Affected: `src/app/pages/automation/automation.component.html`, `src/app/pages/automation/automation.component.scss`
- Date: 2026-07-15
- Status: Active

### scrollDriven Blur Reveal Mode

**BlurReveal only timer-driven, no scroll-based bidirectional reveal**
- Symptom: Bio paragraphs with blur effect would always self-reveal on a fixed timer regardless of scroll position. User could not control the reveal speed by scrolling, and the effect never reversed when scrolling back up.
- Root Cause: `startBlurReveal()` used `setInterval` to progressively unblur characters, with no option for scroll-driven behavior.
- Fix: Added `scrollDriven?: boolean` to `TypingEffectConfig`. When `true` and `mode: 'blurReveal'`, `startBlurReveal()` delegates to `startScrollDrivenBlurReveal()` which creates spanning characters and uses a passive scroll listener with `requestAnimationFrame` to map element viewport progress (0→1 as element scrolls from bottom-entering to top-exiting) to character reveal count. Characters re-blur when scrolling back up. Cleaned up via `ngOnDestroy()`.
- Prevention: When adding scroll-driven effects, always store the scroll handler reference for cleanup in `ngOnDestroy` and use `{ passive: true }` for performance.
- Files Affected: `src/app/directives/typing-effect/typing-effect.directive.ts`
- Date: 2026-07-15
- Status: Active

### Bidirectional reveal-blur Observer

**CSS-only reveal-blur elements only fade in once, never re-blur on scroll out**
- Symptom: Elements using just `.reveal-blur` CSS class (no directive) — like featured project descriptions, principle cards, how-i-build descriptions — would blur in once via `IntersectionObserver` but never re-blur when scrolled back out of view.
- Root Cause: `initScrollReveal()` unobserved every element after the first `isIntersecting` event, so scrolling away and back would not re-trigger the blur transition.
- Fix: In the observer callback, skip `unobserve()` for elements with `.reveal-blur` class. When a `.reveal-blur` element leaves the viewport (`!entry.isIntersecting`), remove the `.visible` class (which triggers the blur transition). All other reveal classes (`.reveal`, `.reveal-left`, `.reveal-right`, `.stagger-children`) remain one-time reveal as before.
- Prevention: Different reveal behaviors (one-time vs bidirectional) should share the same observer but branch on a CSS class selector rather than using separate observers.
- Files Affected: `src/app/app.component.ts`
- Date: 2026-07-15
- Status: Active

### Bio Paragraph Wordwrap

**Bio paragraphs with blur reveal overflow on long unbroken strings**
- Symptom: Bio paragraph text with `appTypingEffect` in `blurReveal` mode would overflow its container, especially on narrow viewports, because the character-span approach didn't force word breaks.
- Root Cause: The directive sets `word-break: break-word` on the element via renderer, but the parent `.bio-paragraph p` had no additional overflow protection.
- Fix: Added `word-break: break-word; overflow-wrap: break-word` to `.bio-paragraph p` in `about.component.scss`.
- Prevention: Components using the typing-effect directive should ensure their containers have explicit word-break / overflow-wrap to handle narrow viewports.
- Files Affected: `src/app/pages/about/about.component.scss`
- Date: 2026-07-15
- Status: Active

### Section-Level Scroll-Driven Blur Reveal (DOM Structure Preservation)

**Applying scrollDriven blur reveal to a container section (not single element) destroyed child element structure**
- Symptom: Putting `appTypingEffect` with `mode:'blurReveal',scrollDriven:true` on `<section class="bio-text">` replaced the entire section innerHTML with flat character spans, destroying the `.bio-paragraph` divs with zigzag alignment (`bio-paragraph--right` class). The "zigzag" layout of alternating left/right-aligned paragraphs was lost.
- Root Cause: The original `startScrollDrivenBlurReveal()` used `element.innerHTML = ''` + flat loop over `this.originalText`, which discards all DOM structure.
- Fix: Rewrote `startScrollDrivenBlurReveal()` to use `document.createTreeWalker()` to find all text nodes inside the element, wrap each character in a `<span>` while preserving the parent element, class, and nesting structure. Uses `document.createDocumentFragment()` to batch-replace text nodes with character spans. No `innerHTML` replacement. Also changed progress calculation: faster reveal window (element fully reveals after traversing half a viewport, `vh * 0.5` instead of `vh + element.height`), and sticky max progress (once revealed, characters never re-blur on scroll up) — addresses "user couldn't finish reading" feedback.
- Prevention: When applying scroll-driven effects to container elements, never use `innerHTML` replacement — walk the existing DOM tree and wrap text nodes individually to preserve layout.
- Files Affected: `src/app/directives/typing-effect/typing-effect.directive.ts`
- Date: 2026-07-15
- Status: Active
