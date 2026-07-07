# Design System

> **Metadata**
> - last-updated-by: (set on first run)
> - last-verified-against-code: (set after visual audit)
> - staleness-policy: re-verify if UI components or styling dependencies change

> **Overview:** Visual language, component patterns, and UX principles. Agents building UI must read this before writing any frontend code. The colour, typography, and spacing tables below are the **single source of truth** for design tokens (per `standards/engineering-principles.md` §5) — components must consume these tokens rather than redeclaring values.

---

## Visual Language

### Colour Palette

| Token | Value | Usage |
|-------|-------|-------|
| primary | [#hex] | [buttons, links, CTAs] |
| secondary | [#hex] | [accents, highlights] |
| background | [#hex] | [page background] |
| surface | [#hex] | [cards, modals] |
| text-primary | [#hex] | [main body text] |
| text-muted | [#hex] | [labels, captions] |
| danger | [#hex] | [errors, destructive actions] |
| success | [#hex] | [confirmations] |

### Typography

| Style | Font | Size | Weight |
|-------|------|------|--------|
| Heading 1 | [font] | [size] | [weight] |
| Body | [font] | [size] | [weight] |
| Code | [font] | [size] | [weight] |

### Spacing Scale

[e.g. 4px base unit: 4, 8, 12, 16, 24, 32, 48, 64]

---

## Component Patterns

### Buttons
- Primary: [style and usage]
- Secondary: [style and usage]
- Destructive: [describe]
- Disabled state: [describe]

### Forms
- Input fields: [style and validation rules]
- Error messages: [placement and style]

### Navigation
- [sidebar / topnav / tabs — describe pattern]

### Cards / Containers
- [shadow, border radius, padding]

### Modals / Dialogs
- [confirmation, form-in-modal, alert patterns]

---

## UX Principles

1. [e.g. Always show loading state for async actions]
2. [e.g. Destructive actions require confirmation]
3. [e.g. Error messages must explain what the user can do]

---

## Responsive Breakpoints

| Breakpoint | Value | Target |
|------------|-------|--------|
| sm | 640px | Mobile |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Wide screens |

---

## Accessibility Requirements

- All interactive elements must have keyboard focus states
- Colour contrast must meet WCAG AA (4.5:1 for text)
- Images must have alt text
- Forms must have associated labels
