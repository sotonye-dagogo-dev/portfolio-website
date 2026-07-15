# Engineering Principles

> **Metadata**
> - last-updated-by: bootstrap-project
> - last-verified-against-code: (set on first run)
> - staleness-policy: this file changes rarely — trust unless explicitly flagged

> **Overview:** The canonical doctrine for how code should be written and structured in any project using this system. Distinct from `protocols/quality-gate.md` (which governs verification of finished work) and `design-system.md` (which governs visual/UX specifics per project). This file is checked — see §10 for how it is enforced.

---

## 1. Config-Driven Over Hardcoded

Behavior, limits, feature flags, and business rules live in configuration (env vars, config files, database-backed settings, feature-flag services), not inline in logic.

**The test:** If a non-engineer might reasonably want to change this value without a code deploy, it belongs in config.

**Fallback discipline:** Hardcoded values are acceptable only as fallback defaults layered beneath config — never as the sole source of truth. Every config-driven value must have a documented, safe fallback so the system degrades gracefully (not crashes) if config is missing or malformed.

**Example:**
```python
# Bad: hardcoded with no fallback path
MAX_UPLOAD_SIZE = 10 * 1024 * 1024

# Good: config-backed with a documented fallback
MAX_UPLOAD_SIZE = config.get("uploads.max_size_mb", fallback=10) * 1024 * 1024
```

---

## 2. Metadata-Driven Structure

Where it is a good fit (admin-editable content types, dynamic forms, permission systems, navigation/menus), define structure as data/metadata rather than hardcoded markup or branching logic — so new instances of a "thing" (a new content type, a new field, a new role) can be added by changing data, not by writing new code paths.

**Trade-off:** This adds indirection, so use it where variability is real and expected, not applied reflexively to everything. If the set of variants is fixed and unlikely to grow, hardcoded is simpler and preferable.

**Example:**
```python
# Bad: hardcoded branching for each role
if role == "admin":
    permissions = ["read", "write", "delete"]
elif role == "editor":
    permissions = ["read", "write"]

# Good: role-permissions defined as data
ROLE_PERMISSIONS = {
    "admin": ["read", "write", "delete"],
    "editor": ["read", "write"],
}
permissions = ROLE_PERMISSIONS.get(role, ["read"])
```

---

## 3. Admin-Editability With Hardcoded Fallbacks

Anything public-facing or operationally significant that a non-engineer would plausibly need to change (copy, global variables/settings, feature toggles, pricing, contact info, banner content) should be editable through an admin surface or config layer — backed by a hardcoded fallback value or constant in code so the system never breaks or shows blank/broken content if the admin-editable value is unset, deleted, or the data layer is unavailable.

This is the same fallback discipline as §1, applied specifically to operator/admin-facing content.

**Example:**
```python
# Bad: fetches from DB with no fallback — returns None/blank if missing
banner_text = db.get_setting("homepage_banner")

# Good: DB-backed with a code fallback
banner_text = db.get_setting("homepage_banner") or "Welcome"
```

---

## 4. Universal Components & Wrappers

Prefer a small set of well-designed, reusable, configurable base components/wrappers over many bespoke one-off implementations. New UI elements or service wrappers should default to extending or composing existing universal components before a new one is created — and creating a new one should be a deliberate, justified decision (logged in `memory/project-decisions.md`), not the default path.

Wrappers around third-party libraries/SDKs (auth providers, payment processors, UI kits) should isolate the third-party API behind a stable internal interface, so swapping the underlying provider does not ripple through the whole codebase.

**Example:**
```python
# Bad: direct coupling to a specific provider
from sendgrid import SendGridAPIClient

def send_email(to, subject, body):
    client = SendGridAPIClient(api_key)
    client.send(...)

# Good: internal interface isolates the provider
from app.notifications import EmailSender

def send_email(to, subject, body):
    EmailSender().send(to=to, subject=subject, body=body)
```

---

## 5. Global Definitions: Styling, Config, Types/Interfaces

Single source of truth for:
- **Design tokens** — colors, spacing, typography (defined once, consumed everywhere, never re-declared per component)
- **Global configuration shape** — the expected schema of config values
- **Shared type definitions** — TypeScript interfaces, Python type aliases, or language equivalent

**The rule:** If two modules need to agree on the shape of something, that shape is defined in exactly one place and imported, never copy-pasted or redefined.

---

## 6. Modularization & Separation of Concerns

Each module, class, or function has one clear responsibility. Favor composition over deep inheritance chains. Apply standard encapsulation discipline where the language supports it (interface-first design, dependency injection over hard-coded instantiation) without forcing OOP patterns onto code that is naturally functional or data-oriented — match the paradigm to the problem, do not apply a hammer everywhere.

**The test:** If you cannot describe what a module does in one sentence without using "and," it likely has too many responsibilities.

---

## 7. Containerization & Environment Parity

Where applicable, favor containerized, reproducible environments (Docker or equivalent) so "works on my machine" issues are structurally prevented, and config/environment differences between local, staging, and production are explicit and versioned rather than tribal knowledge.

**Minimum standard:** The project must document how to set up and run in each environment (local, CI, staging, production), whether via containers, scripts, or platform tooling.

---

## 8. Lean, Efficient, Dynamic, Maintainable Code

- **Lean:** No speculative abstraction for requirements that do not exist yet (YAGNI) — but also no copy-pasted duplication that should be a shared function (DRY). Both extremes are smells.
- **Efficient:** Be conscious of algorithmic complexity, unnecessary re-renders/re-computation, and N+1 query patterns — but do not micro-optimize at the cost of readability where performance is not actually a constraint.
- **Dynamic:** Code should accommodate reasonable variation (different environments, scales, locales, tenants if multi-tenant) without requiring a code change for each variation — this connects back to §1 (config-driven) and §2 (metadata-driven).
- **Maintainable:** A developer unfamiliar with this specific change should be able to understand it from the code plus its documentation without needing to ask the original author.

---

## 9. Documentation: Concise, Clear, and Exists

- Every non-trivial function/module gets a short doc comment: what it does, why (if not obvious), and any non-obvious constraints or gotchas — not a restatement of the function signature in prose.
- Prefer self-documenting names over comments explaining bad names.
- README and architecture docs stay in sync with code. Documentation drift is itself a quality-gate failure (per `protocols/quality-gate.md` and `commands/sync-context.md`), not a separate concern.
- No long comment blocks explaining "how" when the code itself could be made clear enough to not need it. Comments are for "why," not "what."

**Example:**
```python
# Bad: explains what (obvious from code)
# Increment the counter by 1
counter += 1

# Good: explains why (non-obvious)
# Bump the counter before the async check to prevent a race with the webhook
counter += 1
```

---

## 10. How This Gets Enforced

This document is not aspirational — it is checked. Here is exactly where:

| Role/Command | When |
|-------------|------|
| **Architect** role (`agents/architect.md`) | Consults this when designing structure; proposed architecture must align with it |
| **Implementer** role (`agents/implementer.md`) | Consults this during coding; violations are flagged before completion |
| **Quality Gate** (`protocols/quality-gate.md`) | Includes a "Pattern Adherence" criterion (criterion #9) that checks against these principles |
| **Verification Rules** (`protocols/verification-rules.md`) | Provides concrete how-to checks for each principle (grep for repeated magic values, check for duplicate type definitions, etc.) |
| **Verify Work** (`commands/verify-work.md`) | Runs the full quality gate including pattern adherence for anything beyond a trivial change |
