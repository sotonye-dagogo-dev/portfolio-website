# Brand Spec — Yasffir × Wegems fusion

Extracted from yasffiralmeida.com (primary) and wegems.co (secondary).

## Color tokens

| Token | Light | Dark |
|-------|-------|------|
| `--bg` | `#faf9f4` (warm off-white) | `#0f0f0f` (near-black) |
| `--surface` | `#ffffff` | `#1a1a1a` |
| `--fg` | `#0f1c21` (ink) | `#faf8f3` (warm white) |
| `--muted` | `#6b7280` | `#9ca3af` |
| `--border` | `#e5e7eb` | `#2a2a2a` |
| `--accent` | `#ff4800` (orange) | `#d3e97a` (chartreuse) |

## Font stacks

- **Display:** Ampersand (custom), `Georgia`, serif — massive scale, heroic headings
- **Body/serif:** Canela (custom), `Iowan Old Style`, Georgia, serif — comfortable reading
- **System/sans:** Inter (system), `-apple-system`, BlinkMacSystemFont, `Segoe UI`
- **Mono:** `JetBrains Mono`, `ui-monospace`, Menlo

## Layout posture (from yasffiralmeida.com)

1. **Massive scale typography** — display text at clamp(60px, 10vw, 200px), negative tracking on large sizes
2. **Generous whitespace** — sections breathe, content blocks have padding
3. **Horizontal scroll galleries** — projects and certificates use overflow-x scroll with snap points, not stacked grids
4. **Marquee elements** — infinite horizontal scroll for logos, tech stacks, testimonials
5. **Custom cursor** — small dot (15px), orange in light mode, chartreuse in dark, hidden on touch
6. **Scroll-triggered reveals** — content slides up on intersection
7. **No rounded-card-with-left-border** — use clean borders or full-radius pills, never the AI-trope card
8. **One accent per view** — accent color used at most 2x per screen (typically a CTA + one decorative element)

## Key UX patterns

- Smooth scroll via lenis (or `scroll-behavior: smooth` + custom easing)
- Back-to-top button
- Project overlay on hover (zoom-in cursor)
- Parallax scrolling text
- SVG iconography with `currentColor` (no emoji as icons)
- Sticky frosted nav with transparent-to-solid transition
- Theme toggle persists to `data-theme` and `localStorage`
