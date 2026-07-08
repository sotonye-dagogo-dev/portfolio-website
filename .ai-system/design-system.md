# Design System

> **Metadata**
> - last-updated-by: opencode (design-redesign)
> - last-verified-against-code: 2026-07-08
> - staleness-policy: re-verify if UI components or styling dependencies change

> **Overview:** Visual language, component patterns, and UX principles. Agents building UI must read this before writing any frontend code. The colour, typography, and spacing tables below are the **single source of truth** for design tokens (per `standards/engineering-principles.md` §5) — components must consume these tokens rather than redeclaring values.

---

## Visual Language

### Colour Palette (Light)

| Token | Value | Usage |
|-------|-------|-------|
| accent | #d4a040 | Buttons, links, CTAs, highlights, tags, decorative borders |
| accent-hover | #c49030 | Accent hover state |
| bg | #fafafa | Page background |
| bg-alt | #f0f0f0 | Alternate sections |
| surface | #ffffff | Cards, modals |
| surface-hover | #f5f5f5 | Card hover state |
| text | #0a0a0a | Main body text |
| text-secondary | #555555 | Secondary body text |
| text-muted | #888888 | Labels, captions |
| border | #e8e8e8 | Borders and dividers |
| border-hover | #d0d0d0 | Border hover state |
| success / available | #22c55e | "Available" indicator, current role dots |

### Colour Palette (Dark)

| Token | Value | Usage |
|-------|-------|-------|
| accent | #d4a040 | Buttons, links, CTAs, highlights, tags, decorative borders |
| accent-hover | #e0b050 | Accent hover state |
| bg | #0a0a0a | Page background |
| bg-alt | #141414 | Alternate sections |
| surface | #1a1a1a | Cards, modals |
| surface-hover | #242424 | Card hover state |
| text | #f0f0f0 | Main body text |
| text-secondary | #a0a0a0 | Secondary body text |
| text-muted | #666666 | Labels, captions |
| border | #2a2a2a | Borders and dividers |
| border-hover | #3a3a3a | Border hover state |
| success / available | #22c55e | "Available" indicator, current role dots |

### Typography

| Style | Font Family | Token |
|-------|-------------|-------|
| Body / UI | Inter | --font-sans |
| Headings (decorative) | Playfair Display | --font-serif |
| Tech labels / code | JetBrains Mono | --font-mono |

### Spacing Scale

| Token | Value |
|-------|-------|
| --space-2xs | 2px |
| --space-xs | 4px |
| --space-sm | 8px |
| --space-md | 16px |
| --space-lg | 24px |
| --space-xl | 32px |
| --space-2xl | 48px |
| --space-3xl | 64px |
| --space-4xl | 96px |
| --space-5xl | 128px |

### Border Radius

| Token | Value |
|-------|-------|
| --radius-sm | 6px |
| --radius | 8px |
| --radius-lg | 12px |
| --radius-xl | 16px |
| --radius-2xl | 24px |

---

## Component Patterns

### Buttons
- Primary: Filled background with --color-accent, #0a0a0a text, rounded-8px, hover:translateY(-2px) + glow
- Secondary (outline): Transparent bg, 1px --color-border, hover:border-accent + hover:color-accent
- Animated-border: `::before` pseudo with conic-gradient, `animation: border-spin 4s linear infinite`, 2px inset offset for content

### Navigation (Top Nav Bar)
- Horizontal bar, links centered, backdrop-filter:blur(16px), border-bottom
- Active link: underline pseudo-element full width, font-weight 600
- Inactive link: color-text-muted, hover:color-text, underline animates on hover
- Fixed top, z-index 999, height 72px

### Cards / Containers
- Cards: bg-surface, border 1px solid --color-border, rounded-xl (--radius-xl: 16px), transition on hover
- Hover: translateY(-3px), border-color-hover, shadow-md
- Flagship-tier cards: additional `animated-border` pseudo-element (conic-gradient via ::before)
- 3D hover: perspective(800px) on container, rotateX/Y on inner element

### Accordion (Archive Projects)
- Collapsed by default, toggle with aria-expanded
- Count badge on collapsed state showing number of hidden items
- Smooth max-height transition on open

### Marquee
- Overflow hidden, mask-image gradient (transparent edges)
- Infinite scroll via `transform: translateX(-50%)`, pause on hover

### Horizontal Gallery / Slider
- `display: flex; overflow-x: auto; scroll-snap-type: x mandatory`
- Hidden scrollbar, nav buttons (prev/next) using scrollBy
- Items: min-width 320px, scroll-snap-align: start

### Back-to-Top
- Fixed bottom-right, 44x44px, circular, opacity 0 → 1 past 400px scroll
- Backdrop-filter blur, hover: translateY(-3px) + accent border

### Theme Toggle
- Fixed top-right (40x40px circular button)
- Toggles `data-theme` attribute on `<html>` element
- CSS custom properties switch via `:root` / `[data-theme="dark"]` selectors

### Image Viewer
- cursor:zoom-in, hover:filter:brightness(0.85)
- Arrow icon (↔) appears on hover overlay bottom-right

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
