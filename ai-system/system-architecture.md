# System Architecture

> **Metadata**
> - last-updated-by: opencode (design-redesign)
> - last-verified-against-code: 2026-07-08
> - staleness-policy: re-verify before trusting if any architecture-affecting commits have been made since last-verified-against-code

> **Overview:** How the system is structured — layers, modules, data flow, and configuration. Agents designing or changing structure must read this first.

---

## Architecture Diagram

```
Client (Browser)
        ↓
    Angular App (SSR)
        ↓
    ContentService (static config + enrichment merge)
        ↓
    Express API Server
        ↓
    Static Assets / External APIs

Content Data Flow:
  Static *.config.ts — compile-time defaults
        +
  public/content/content.generated.json — runtime enrichment (GitHub API)
        ↓
  ContentService.mergeWithGenerated() — field-by-field merge, never throws
        ↓
  Page components consume via ContentService.getConfig()
```

---

## Module Breakdown

| Module | Responsibility | Key Files | Dependencies |
|--------|---------------|-----------|--------------|
| App Component | Root layout and routing | `src/app/app.component.*` | NavbarComponent, FooterComponent, RouterOutlet |
| ContentService | Config-driven content layer | `src/app/content/` | Static configs, HttpClient (optional) |
| Navbar | Site navigation | `src/app/components/navbar/` | Angular Router |
| Home | Hero, stats, tech marquee, featured project, quick-nav cards | `src/app/pages/home/` | ContentService, directives |
| About | Philosophy-first bio, how-I-build, contact, currently strip | `src/app/pages/about/` | ContentService, PulsatingEffect |
| Experience | Vertical timeline with entries | `src/app/pages/experience/` | ContentService, PulsatingEffect, AnimatedBorder |
| Projects | Four-tier project showcase (flagship/teaser/applied/archive) | `src/app/pages/projects/` | ContentService, directives |
| Automation | Flow diagram + feature cards | `src/app/pages/automation/` | ContentService, directives |
| Certificates | Certificate gallery grid | `src/app/pages/certificates/` | ContentService, directives |
| Animations | Reusable animations | `src/app/animations/` | Angular animations |
| Server | Express backend | `server.ts` | Express, Angular SSR |

---

## Data Flow

### Standard Request Flow
```
Browser → Angular SSR → Express Server → Static File or API Response
```

### Static Content Flow
```
Browser → Angular Router → Component → Template → Rendered View
```

---

## Configuration Points

| Config Key | Purpose | Location | Default |
|-----------|---------|----------|---------|
| PORT | Server port | .env / env var | 4000 |
| NODE_ENV | Environment mode | .env / env var | development |
| site.config.ts | Site-wide copy + social links | `src/app/content/site.config.ts` | static |
| experience.config.ts | Timeline entries | `src/app/content/experience.config.ts` | static |
| projects.config.ts | Project list (tiered) | `src/app/content/projects.config.ts` | static |
| automation.config.ts | Flow steps + feature cards | `src/app/content/automation.config.ts` | static |
| tech-stack.config.ts | Technology list | `src/app/content/tech-stack.config.ts` | static |
| certificates.config.ts | Certificate categories | `src/app/content/certificates.config.ts` | static |
| about.config.ts | About page sections | `src/app/content/about.config.ts` | static |
| content.generated.json | GitHub enrichment overrides | `public/content/content.generated.json` | generated |

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Angular | 19.2.x |
| Backend | Node.js / Express | Latest |
| Styling | Tailwind CSS v3.4 + SCSS | Latest |
| Animations | Angular Animations | — |
| Enrichment | Node.js script (scripts/enrichment.js) | — |

---

## Known Constraints & Technical Debt

- Static images stored in /public directory
- No database — fully static portfolio content

---

## Architecture History

See `memory/architecture-history.md` for full chronology.
