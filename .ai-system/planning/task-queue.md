# Development Task Queue

> **Metadata**
> - last-updated-by: (set on first update)
> - last-verified-against-code: (set after task-list review)
> - staleness-policy: re-verify before each session

> **Overview:** Sprint-level task queue with complexity tagging. Agents execute tasks top to bottom within the current sprint. Each task is sized so it can be completed in a single session.

---

## Complexity Tags

Tags help agents self-select whether a task needs the full `execute-feature.md` pipeline or a lighter `dev-cycle.md`:

| Tag | Meaning | Recommended Command |
|-----|---------|-------------------|
| `[XS]` | Trivial — single file, known pattern | dev-cycle.md |
| `[S]` | Small — 1-3 files, well-understood | dev-cycle.md |
| `[M]` | Medium — 3-8 files, some planning needed | dev-cycle.md with plan-feature pre-read |
| `[L]` | Large — feature spanning modules | execute-feature.md |
| `[XL]` | Very large — architecture-affecting | execute-feature.md, requires architect role |
| `[BUG]` | Bug fix | fix-build.md |

---

## Current Sprint

| Size | Task | Status |
|------|------|--------|
| [M] | Bootstrap .ai-system from template | [x] |
| [S] | Populate .ai-context.md with project details | [x] |
| [S] | Review and populate project-context.md | [ ] |
| [M] | Audit existing components and update repo-map.md | [ ] |

---

## Up Next

| Size | Task |
|------|------|
| [S] | Review design-system.md and fill in project tokens |
| [M] | Run initial test suite and populate test-results.md |

---

## Backlog

| Size | Task |
|------|------|
| [M] | Add new portfolio project component |
| [S] | Improve mobile responsive layout |
| [L] | Add animations to page transitions |

---

## Completed This Sprint

| Task | Completed |
|------|-----------|
| Bootstrap .ai-system from template | [x] |
| Populate .ai-context.md with project details | [x] |

---

## Notes

Initial sprint focused on establishing the .ai-system framework and project documentation.
