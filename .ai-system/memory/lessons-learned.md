# Lessons Learned

> **Metadata**
> - last-updated-by: oc-design (OD-1 home)
> - last-verified-against-code: 2026-07-07
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
