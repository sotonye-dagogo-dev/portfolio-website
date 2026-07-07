# Fix Build Command

> **Metadata**
> - last-updated-by: bootstrap-project
> - last-verified-against-code: (set on first run)
> - staleness-policy: re-verify if diagnostic processes change

> **Overview:** Self-healing loop. Diagnoses build and test failures, applies the minimal fix, verifies resolution, and logs in the repair system. Merges the old fix-build and self-heal into one command.

---

## Contract

| Guarantees | Does NOT |
|------------|----------|
| Diagnoses root cause before applying a fix | Does not refactor unrelated code |
| Produces the minimal fix for the identified problem | Does not add new features during the fix loop |
| Verifies the fix resolves the error | Does not skip documenting the fix in repair-system.md |
| Logs error, root cause, fix, and prevention | Does not make assumptions about specific AI tools |

---

## Required Inputs

An error description, test failure output, or build error message.

## Optional Directives

```
Execute command: fix-build.md
Directive: [error description]

Directive: TypeError: Cannot read properties of undefined reading 'map' in UserList component
Directive: Database connection pool exhausted under load — fix and add connection limit config
Directive: Next.js hydration mismatch on the dashboard page
```

---

## Execution

1. **Write in-progress.md.** Record the error being diagnosed, steps planned, and files expected to touch.

2. Read `repair-system.md` for known patterns matching the error.

3. **Diagnose** — trace the actual execution path. Do not guess. Use available tools (test runner, linter, debug output) to pinpoint root cause.

4. **Fix** — implement the minimal change. Do not refactor unrelated code.

5. **Verify** — re-run tests or build to confirm resolution.

6. **Log** — update `repair-system.md` with:
   - Error description and symptom
   - Root cause
   - Fix applied
   - Prevention strategy
   - Files affected

7. **Update** — `testing/test-results.md`, `checkpoints/session-log.md`.

8. **If the error is complex** — break into sub-problems, solve each one, log each fix.

9. **If the fix introduces assumptions** — log them in `memory/project-decisions.md`.

10. **Clear in-progress.md** on clean completion.
