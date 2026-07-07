# Dependency Graph

> **Metadata**
> - last-updated-by: (set on first update)
> - last-verified-against-code: (set after graph review)
> - staleness-policy: auto-regenerable — can be derived from import analysis tools. Manual content only for conventions and rules that cannot be inferred from code.

> **Overview:** Maps how modules depend on each other. Agents use this to understand the impact of changes. This file is **auto-regenerable** — prefer tool-based import analysis for ground truth, and treat manual entries as supplementary.

---

## Module Dependency Map

```
AppComponent
  → NavbarComponent
  → ProjectsComponent
  → Animation Services

NavbarComponent
  → Angular Router (navigation)

ProjectsComponent
  → GalleryAnimation
  → FadeAnimation
  → SlideAnimation

Express Server (server.ts)
  → Angular SSR engine
  → Static file serving

Angular SSR
  → AppComponent
  → Server-side rendering
```

---

## External Dependencies

| Package | Purpose | Used In |
|---------|---------|---------|
| @angular/core | Frontend framework | All components |
| @angular/router | Client-side routing | Navbar, pages |
| @angular/animations | Animation support | animations/ |
| express | Backend server | server.ts |
| tailwindcss | Utility CSS | Global styles |

---

## Circular Dependency Warnings

None detected.

---

## Dependency Rules

- Components may depend on services/animations — not the other way around
- Pages may depend on components — not the other way around
- Animations must have no dependencies on application components
- Config module must not depend on any application code
