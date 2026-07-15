# Lessons Learned

> **Metadata**
> - last-updated-by: opencode (design-redesign)
> - last-verified-against-code: 2026-07-08
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
