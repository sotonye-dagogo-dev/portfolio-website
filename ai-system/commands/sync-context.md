# Sync Context Command

> **Metadata**
>
> - last-updated-by: bootstrap-project
> - last-verified-against-code: (set on first run)
> - staleness-policy: re-verify if sync triggers change

> **Overview:** Lightweight mid-work documentation sync. Invoked _during_ work (not just at sprint end) whenever the agent notices docs and code diverging. Prevents context-rot accumulation across long sessions. Commands like `execute-feature.md` and `dev-cycle.md` explicitly invoke this at internal checkpoints.

---

## Contract

| Guarantees                                                     | Does NOT                                                  |
| -------------------------------------------------------------- | --------------------------------------------------------- |
| Detects and flags drift between ai-system docs and actual code | Does not deep-verify every doc (use audit-drift for that) |
| Updates freshness metadata on changed files                    | Does not rewrite architecture from scratch                |
| Logs what was updated and why                                  | Does not make assumptions about specific AI tools         |

---

## Required Inputs

None — operates on the current session state.

## Optional Directives

```
Execute command: sync-context.md
Directive: [focus area]

Directive: Specifically check repo-map.md and dependency-graph.md for accuracy
Directive: Only update if code changes affected system-architecture.md claims
```

---

## Execution

1. Check which `ai-system/` docs may have drifted from the actual code:
   - Compare `index/repo-map.md` with current folder structure
   - Compare `index/dependency-graph.md` with actual imports/dependencies
   - Compare `system-architecture.md` module claims with actual module boundaries
   - Compare `planning/task-queue.md` state with recent git activity
   - Check `repair-system.md` entries — is the fix still in place?

2. For each drift found:
   - If the doc is clearly wrong, update it to match the code
   - If the drift indicates code should change to match the doc, flag it (do not change code here)
   - Update `last-verified-against-code` metadata

3. Log: what was synced, what was flagged, and what (if anything) was left intentionally out of sync.

4. This command is **not** a substitute for `update-ai-system.md` (the sprint-end deep sync). It is a lighter, faster check.
