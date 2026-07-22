# Dependency Graph

> **Metadata**
> - last-updated-by: opencode (execute-feature)
> - last-verified-against-code: 2026-07-22
> - staleness-policy: auto-regenerable — can be derived from import analysis tools. Manual content only for conventions and rules that cannot be inferred from code.

> **Overview:** Maps how modules depend on each other. Agents use this to understand the impact of changes. This file is **auto-regenerable** — prefer tool-based import analysis for ground truth, and treat manual entries as supplementary.

---

## Module Dependency Map

```
AppComponent
  → NavbarComponent
  → FooterComponent
  → RouterOutlet (Home | About | Experience | Projects | Automation | Certificates)
  → provideAnimations (app.config.ts)
  → ContentService

HomeComponent
  → ContentService (featuredProjects array, site, stats, techStack, quickNav)
  → TypingEffectDirective (hero tagline)
  → AnimatedBorderDirective (primary CTA)
  → PulsatingEffectDirective (availability badge)
  → ImageViewerDirective (featured project images)
  → ImageFadeDirective (images)
  → MagneticBtnDirective (CTAs, quick-nav cards)
  → PillListComponent
  → LinksRowComponent

AboutComponent
  → ContentService
  → PulsatingEffectDirective
  → PageHeaderComponent

ExperienceComponent
  → ContentService
  → PulsatingEffectDirective
  → AnimatedBorderDirective
  → PageHeaderComponent
  → PillListComponent

ProjectsComponent
  → ContentService
  → AnimatedBorderDirective
  → PulsatingEffectDirective
  → ImageViewerDirective
  → PageHeaderComponent
  → SectionHeaderComponent
  → MediaCardComponent
  → GalleryNavComponent

AutomationComponent
  → ContentService
  → PulsatingEffectDirective
  → AnimatedBorderDirective
  → PageHeaderComponent
  → SectionHeaderComponent
  → PillListComponent

CertificatesComponent
  → ContentService
  → ImageViewerDirective
  → MagneticBtnDirective
  → AnimatedBorderDirective
  → ImageFadeDirective
  → PageHeaderComponent
  → PillListComponent
  → scrollGallery(index, amount) method (inline)

NavbarComponent
  → Angular Router (navigation)
  → Routes (Home, About, Experience, Projects, Automation, Certificates)

ContentService
  → Static config imports (site.config, experience.config, projects.config, etc.)
  → HttpClient (generated.json enrichment merge, optional)

FooterComponent
  → ContentService

PageHeaderComponent
  → ContentService

SectionHeaderComponent
  → (none — pure presentational)

PillListComponent
  → (none — pure presentational, renders pill tag arrays)

LinksRowComponent
  → (none — pure presentational, renders link button arrays)

MediaCardComponent
  → AnimatedBorderDirective
  → ImageViewerDirective
  → PillListComponent (internal composition)
  → LinksRowComponent (internal composition)

GalleryNavComponent
  → (none — pure DOM scroll-snap navigation)

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
| @angular/animations | Animation support | app.config.ts (provideAnimations) |
| @angular/common | Common directives, platform check | All components |
| @fortawesome/angular-fontawesome | Icons | Theme toggle, contact links |
| @fortawesome/fontawesome-svg-core | Core FA | |
| @fortawesome/free-brands-svg-icons | Brand icons | Social/contact links |
| express | Backend server | server.ts |
| tailwindcss | Utility CSS | tailwind.config.js, styles.scss |
| @angular/platform-browser/animations | SSR animation support | app.config.ts |

---

## Circular Dependency Warnings

None detected.

---

## Dependency Rules

- Components may depend on services/animations — not the other way around
- Pages may depend on components — not the other way around
- Animations must have no dependencies on application components
- Config module must not depend on any application code
