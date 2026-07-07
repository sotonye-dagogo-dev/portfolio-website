# Development Task Queue

> **Metadata**
> - last-updated-by: oc-design (OD-1 home)
> - last-verified-against-code: 2026-07-07
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
| [M] | OD-1: Design home page (`.ai-system/designs/od-1-home.html`) | [x] |
| [S] | Review design-system.md and fill in project tokens | [ ] |
| [M] | Audit existing components and update repo-map.md | [x] |

---

## Up Next

| Size | Task |
|------|------|
| [M] | OD-2: Design About page |
| [M] | OD-3: Design Experience page |
| [M] | OD-4: Design Projects page |
| [M] | OD-5: Design Automation page |
| [S] | OD-6: Design Certificates page |
| [M] | OD-7: Design shared shell (nav/footer/theme) |

---

## Backlog

| Size | Task |
|------|------|
| [L] | Phase 3 implementation — content module, page refactors |
| [M] | Run initial test suite and populate test-results.md |
| [S] | Improve mobile responsive layout |
| [L] | Add page transition animations |

---

## Completed This Sprint

| Task | Completed |
|------|-----------|
| Bootstrap .ai-system from template | [x] |
| Populate .ai-context.md with project details | [x] |
| OD-1: Design home page | [x] |
| Audit existing components and update repo-map.md | [x] |

---

## Notes

Sprint 2 focused on creating the first Open Design contract (OD-1 Home).
Remaining OD-2 through OD-7 are queued for upcoming sprints.
Implementation phase starts after all design contracts are finalised.
