# Verification Rules

> **Metadata**
> - last-updated-by: bootstrap-project
> - last-verified-against-code: (set on first run)
> - staleness-policy: this file changes rarely — trust unless explicitly flagged

> **Overview:** Pre-emptive verification procedures to run *before* declaring work complete. These are the concrete mechanisms behind the quality gate — how to actually check each criterion.

---

## How to Verify Each QA Criterion

### Requirement Match
- Re-read the original directive verbatim
- List the requirements implied by the directive
- Check each requirement against the implementation
- If any requirement is unmet, the work is not complete

### Generalization Check
- Identify test inputs beyond the example given
- Trace the implementation path for each alternative input
- If the logic special-cases the original example, refactor to generalize
- If you added a configuration point, verify it is documented

### Scope Discipline
- Run: `git diff --name-only` (if available) to list changed files
- For each file, state whether it was in-scope or out-of-scope
- Out-of-scope files must have a written justification
- If justification is weak, revert the out-of-scope change

### Architecture Consistency
- Check the modified code against `system-architecture.md` layer rules
- Verify no layer-skipping (UI→DB direct, Service→Service without interface)
- Verify naming conventions match existing patterns
- If a pattern from `design-system.md` exists for the task, verify it was used

### Error-Path Completeness
- For every function/modified block, identify 3 failure modes
- Check at least one is handled (try/catch, guard clause, fallback)
- If error surfaces to user, verify it is understandable

### Self-Verification
- Run the actual test suite: `npm test` / `pytest` / `cargo test` or equivalent
- If no test suite exists, run the linter and type checker
- If neither exists, manually trace the execution path for one success and one failure case
- Document which verification was performed and the result

### Pattern Adherence
- Grep for repeated magic values across files that should be config-driven
- Check whether new types/interfaces duplicate an existing shape defined elsewhere (grep for the concept name)
- Check whether new UI elements could have reused an existing universal component from the component library
- Verify that third-party SDK calls use a wrapper/adapter layer, not direct imports
- For every config-driven value, check that a fallback default is documented
- Verify that any new dependency or wrapper creation is logged in `memory/project-decisions.md`
