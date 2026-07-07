# Project Context

> **Metadata**
> - last-updated-by: (set on first run)
> - last-verified-against-code: (set after validation)
> - staleness-policy: re-verify if >10 sessions old or after major scope changes

> **Overview:** Why this project exists, who it serves, and what constraints govern development. Agents should read this to understand the "why" behind the work.

---

## Project Purpose

Personal portfolio website showcasing software development projects, certifications, and technical skills. Built with Angular for the frontend and Express for the backend server.

---

## Target Users

| User Type | Needs | Key Interactions |
|-----------|-------|-----------------|
| Recruiters | View portfolio, assess skills | Browse projects, view certifications |
| Visitors | Learn about developer | Navigate pages, view contact info |

---

## Business Constraints

- Must be statically deployable via GitHub Pages or similar
- Must load quickly on mobile connections
- Must be SEO-friendly for discoverability

---

## Current Project Phase

Phase: Active Development

Active sprint focus: Bootstrap .ai-system and establish AI-assisted development workflow

---

## Tech Decisions Already Made

| Decision | Reason |
|----------|--------|
| Angular with SSR | Server-side rendering for SEO and performance |
| Tailwind CSS + SCSS | Utility-first styling with custom component styles |
| Express backend | API server for dynamic content if needed |

---

## Out of Scope

- E-commerce functionality
- User authentication / accounts
- Blog / CMS system

---

## External Integrations

| Service | Purpose | Auth Method |
|---------|---------|------------|
| GitHub Actions | CI/CD deployment | GITHUB_TOKEN |
