# Repository Map

> **Metadata**
> - last-updated-by: (set on first update)
> - last-verified-against-code: (set after map review)
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
│   │   ├── components/      → Reusable UI components (navbar)
│   │   ├── pages/           → Route-level page components (projects)
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
├── .ai-system/              → AI-assisted development system
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
| `src/app/components/` | Reusable UI components | navbar/ |
| `src/app/pages/` | Route-level page components | projects/ |
| `src/app/animations/` | Animation utilities | fade.animation.ts, slide.animation.ts |
| `public/` | Static assets and images | Various project/certificate images |
| `.ai-system/` | AI development framework | protocols/, agents/, commands/ |

---

## Entry Points

| Purpose | File |
|---------|------|
| Frontend app | `src/main.ts` |
| SSR server | `src/main.server.ts` |
| Express server | `server.ts` |
| Config loading | `angular.json`, `tailwind.config.js` |
