# Repair System — Error Knowledge Base

> **Metadata**
> - last-updated-by: (set on first entry)
> - last-verified-against-code: (set after fix verification)
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

### Configuration / Environment

**Missing Environment Variable**
- Symptom: `undefined` values in production, features silently broken
- Cause: Variable defined in `.env.local` but not in production environment
- Fix: Add to deployment environment variables
- Prevention: Add a startup validation check that throws if required env vars are missing
