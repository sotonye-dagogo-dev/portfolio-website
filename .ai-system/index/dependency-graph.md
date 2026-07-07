# Dependency Graph

> **Metadata**
> - last-updated-by: oc-design (OD-7 shell)
> - last-verified-against-code: 2026-07-07
> - staleness-policy: auto-regenerable — can be derived from import analysis tools. Manual content only for conventions and rules that cannot be inferred from code.

> **Overview:** Maps how modules depend on each other. Agents use this to understand the impact of changes. This file is **auto-regenerable** — prefer tool-based import analysis for ground truth, and treat manual entries as supplementary.

---

## Module Dependency Map

```
AppComponent
  → NavbarComponent
  → RouterOutlet (Home | About | Projects | Certificates)
  → Animation Services
  → ThemeToggleComponent

HomeComponent
  → CardComponent
  → TechStackComponent
  → TypingEffectDirective
  → AnimatedBorderDirective
  → PulsatingEffectDirective
  → ImageViewerDirective
  → ContentService (planned)

NavbarComponent
  → ThemeToggleComponent
  → Angular Router (navigation)
  → Routes (Home, About, Experience, Projects, Automation, Certificates)

ProjectsComponent
  → GalleryAnimation
  → FadeAnimation
  → SlideAnimation
  → ContentService (planned)

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
| @angular/common | Common directives, platform check | All components |
| @fortawesome/angular-fontawesome | Icons | Theme toggle, contact links |
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
