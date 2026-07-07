# Repository Map

> **Metadata**
> - last-updated-by: opencode (implementation sprint)
> - last-verified-against-code: 2026-07-07
> - staleness-policy: auto-regenerable — can be derived from `tree` command. Manual content only where intent cannot be derived from structure.

> **Overview:** Visual map of the project folder structure with purpose descriptions. Updated when the folder structure changes. This file is **auto-regenerable** — use tool-based discovery for ground truth, and treat manual entries here as supplementary context, not primary navigation.

---

## Folder Structure

```
portfolio-website/
│
├── src/                     → Angular frontend source code
│   ├── app/
│   │   ├── animations/      → Reusable Angular animations
│   │   ├── components/      → Reusable UI components (navbar, card, tech-stack, section, footer)
│   │   ├── directives/      → Custom Angular directives (typing-effect, animated-border, pulsating-effect, image-viewer)
│   │   ├── pages/           → Route-level page components (home, about, experience, projects, automation, certificates)
│   │   ├── content/         → Config-driven content layer (types.ts, *.config.ts, content.service.ts)
│   │   └── app.component.*  → Root application component
│   ├── main.ts              → Angular app bootstrap
│   ├── main.server.ts       → Angular SSR server entry
│   ├── index.html           → Single HTML entry point
│   └── styles.scss          → Global styles
│
├── public/                  → Static assets
│   ├── techStackIcons/      → Technology icons
│   ├── enterpriseProjects/   → Enterprise project screenshots
│   ├── frameworksLibrariesProjects/ → Framework/library project images
│   ├── basicHtmlCssJsProjects/ → Basic web project images
│   ├── frontendCertificates/ → Frontend certification images
│   ├── backendCertificates/  → Backend certification images
│   ├── miniProjects/        → Mini project images
│   ├── pythonProjects/      → Python project images
│   └── favicon_io/          → Favicon assets
│
├── scripts/                 → Standalone utility scripts
│   └── enrichment.js        → GitHub API enrichment script (feeds content.generated.json)
│
├── .ai-system/              → AI-assisted development system
│   ├── designs/             → Visual design contracts (OD-1 through OD-7 done, HTML)
│   ├── docs/                → Design/planning docs (portfolio-revamp-package.md)
├── .github/workflows/       → GitHub Actions CI/CD workflows
├── server.ts                → Express server
├── package.json             → Dependencies and scripts
├── angular.json             → Angular configuration
├── tailwind.config.js       → Tailwind CSS configuration
└── tsconfig*.json           → TypeScript configuration files
```

---

## Directory Descriptions

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `src/app/` | Angular application source | app.component.ts, main.ts |
| `src/app/components/` | Reusable UI components | navbar/, card/, tech-stack/, section/, footer/ |
| `src/app/directives/` | Custom interaction directives | typing-effect/, animated-border/, pulsating-effect/, image-viewer/ |
| `src/app/pages/` | Route-level page components | home/, about/, experience/, projects/, automation/, certificates/ |
| `src/app/content/` | Config-driven content layer (static + enrichment merge) | types.ts, *.config.ts, content.service.ts |
| `scripts/` | Standalone utility scripts | enrichment.js |
| `src/app/animations/` | Animation utilities | fade.animation.ts, slide.animation.ts |
| `public/` | Static assets and images | Various project/certificate images |
| `.ai-system/` | AI development framework | protocols/, agents/, commands/ |
| `.ai-system/designs/` | Visual design contracts (HTML) | od-1-home.html → od-7-shell.html |

---

## Entry Points

| Purpose | File |
|---------|------|
| Frontend app | `src/main.ts` |
| SSR server | `src/main.server.ts` |
| Express server | `server.ts` |
| Config loading | `angular.json`, `tailwind.config.js` |
