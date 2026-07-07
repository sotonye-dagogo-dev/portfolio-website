# Design System

> **Metadata**
> - last-updated-by: opencode (implementation sprint)
> - last-verified-against-code: 2026-07-07
> - staleness-policy: re-verify if UI components or styling dependencies change

> **Overview:** Visual language, component patterns, and UX principles. Agents building UI must read this before writing any frontend code. The colour, typography, and spacing tables below are the **single source of truth** for design tokens (per `standards/engineering-principles.md` §5) — components must consume these tokens rather than redeclaring values.

---

## Visual Language

### Colour Palette (Light)

| Token | Value | Usage |
|-------|-------|-------|
| primary | #ff6b6b | Buttons, links, CTAs |
| accent | #daa520 | Highlights, tags, decorative borders |
| background | #fafafa | Page background |
| surface | #ffffff | Cards, modals |
| surface-alt | #f5f5f5 | Alternate surfaces |
| text-primary | #1a1a2e | Main body text |
| text-muted | #6b7280 | Labels, captions |
| border | #e5e7eb | Borders and dividers |
| success | #10b981 | "Available" indicator, confirmations |

### Colour Palette (Dark)

| Token | Value | Usage |
|-------|-------|-------|
| primary | #ff6b6b | Buttons, links, CTAs |
| accent | #daa520 | Highlights, tags, decorative borders |
| background | #0f0f1a | Page background |
| surface | #1a1a2e | Cards, modals |
| surface-alt | #16162a | Alternate surfaces |
| text-primary | #e5e7eb | Main body text |
| text-muted | #9ca3af | Labels, captions |
| border | #2d2d44 | Borders and dividers |
| success | #10b981 | "Available" indicator, confirmations |

### Typography

| Style | Font | Size | Weight |
|-------|------|------|--------|
| Heading 1 | Inter | 2.25rem (36px) | 700 |
| Heading 2 | Inter | 1.5rem (24px) | 600 |
| Body | Inter | 0.9375rem (15px) | 400 |
| Small / Label | Inter | 0.75rem (12px) | 500 |
| Mono | JetBrains Mono | 0.8125rem (13px) | 400 |
| Mono (heading/small) | JetBrains Mono | 0.75rem (12px) | 500 |

### Spacing Scale

| Token | Value |
|-------|-------|
| --space-1 | 0.25rem (4px) |
| --space-2 | 0.5rem (8px) |
| --space-3 | 0.75rem (12px) |
| --space-4 | 1rem (16px) |
| --space-5 | 1.25rem (20px) |
| --space-6 | 1.5rem (24px) |
| --space-8 | 2rem (32px) |
| --space-10 | 2.5rem (40px) |
| --space-12 | 3rem (48px) |
| --space-16 | 4rem (64px) |
| --space-20 | 5rem (80px) |
| --space-24 | 6rem (96px) |

### Border Radius

| Token | Value |
|-------|-------|
| --radius-sm | 0.25rem (4px) |
| --radius-md | 0.5rem (8px) |
| --radius-lg | 0.75rem (12px) |
| --radius-xl | 1rem (16px) |
| --radius-full | 9999px |

---

## Component Patterns

### Buttons
- Primary: Filled background with --color-primary, white text, rounded-lg, hover:brightness-110
- Secondary: Outlined with --color-primary, transparent bg, hover:bg-primary/10
- Ghost: No background or border, hover:bg-surface-alt

### Navigation (Top Nav Bar)
- Horizontal bar with site logo left, nav links center, theme toggle right
- Active link: bottom border or text-primary
- Inactive link: text-muted, hover:text-primary
- Fixed/sticky top on desktop, hamburger menu on mobile

### Cards / Containers
- Cards: bg-surface, rounded-xl (--radius-xl), shadow-sm, p-6 (--space-6)
- Hover: shadow-md, optional border or translateY(-2px)
- Flagship-tier cards: additional `animated-border` pseudo-element (conic-gradient via ::before)

### Accordion (Archive Projects)
- Collapsed by default, toggle with aria-expanded
- Count badge on collapsed state showing number of hidden items
- Smooth max-height transition on open

### Theme Toggle
- Icon-based button (sun/moon) in nav bar
- Toggles `dark` class on `<html>` element
- CSS custom properties switch via `:root` / `:root.dark` selectors

---

## UX Principles

1. Content-first: the page must render (with static defaults) even if enrichment/API calls fail
2. Typography hierarchy: headings use Inter semi-bold, monospace labels use JetBrains Mono
3. Generous whitespace: sections separated by --space-16 (4rem) or more
4. Four existing directives are the only interaction affordances — do not invent new effects

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
