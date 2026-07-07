# System Architecture

> **Metadata**
> - last-updated-by: bootstrap-project
> - last-verified-against-code: (set when architecture matches actual code)
> - staleness-policy: re-verify before trusting if any architecture-affecting commits have been made since last-verified-against-code

> **Overview:** How the system is structured — layers, modules, data flow, and configuration. Agents designing or changing structure must read this first.

---

## Architecture Diagram

```
Client (Browser)
        ↓
    Angular App (SSR)
        ↓
    Express API Server
        ↓
    Static Assets / External APIs
```

---

## Module Breakdown

| Module | Responsibility | Key Files | Dependencies |
|--------|---------------|-----------|--------------|
| App Component | Root layout and routing | `src/app/app.component.*` | All child components |
| Navbar | Site navigation | `src/app/components/navbar/` | Angular Router |
| Projects | Project showcase page | `src/app/pages/projects/` | Animation services |
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

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Angular | Latest |
| Backend | Node.js / Express | Latest |
| Styling | Tailwind CSS + SCSS | Latest |
| Animations | Angular Animations | — |

---

## Known Constraints & Technical Debt

- Static images stored in /public directory
- No database — fully static portfolio content

---

## Architecture History

See `memory/architecture-history.md` for full chronology.
