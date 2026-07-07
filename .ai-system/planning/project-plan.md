# Project Plan

> **Metadata**
> - last-updated-by: oc-design (OD-2 about)
> - last-verified-against-code: 2026-07-07
> - staleness-policy: re-verify if project scope or phase changes

> **Overview:** High-level feature checklist organized by development phase. See `planning/task-queue.md` for granular, sprint-level tasks.

---

## Phase 1 — Foundation

- [x] Repository structure and folder conventions established
- [x] Configuration system implemented (env vars, config files)
- [x] CI/CD pipeline (GitHub Actions)
- [x] .ai-system bootstrapped

---

## Phase 2 — Portfolio Revamp (Design)

- [x] OD-1: Home page design contract (`.ai-system/designs/od-1-home.html`)
- [x] OD-2: About page design contract
- [ ] OD-3: Experience page design contract
- [ ] OD-4: Projects page design contract
- [ ] OD-5: Automation page design contract
- [ ] OD-6: Certificates page design contract
- [ ] OD-7: Shared shell design contract

---

## Phase 3 — Portfolio Revamp (Implementation)

- [ ] Content module (`src/app/content/`) with types, configs, ContentService
- [ ] Hero + stat strip (home component)
- [ ] Tech-stack marquee + pills (home component)
- [ ] Featured project card + quick-nav cards (home component)
- [ ] New Experience page + route
- [ ] New Automation page + route
- [ ] Projects page tiered layout
- [ ] About page rewrite
- [ ] Certificates page restyle
- [ ] Shared nav/footer update

---

## Phase 4 — Quality & Polish

- [ ] Unit test coverage for content module
- [ ] Responsive design verification
- [ ] Accessibility audit
- [ ] Performance optimization

---

## Phase 5 — Launch Preparation

- [ ] Production environment configured
- [ ] Security audit
- [ ] Documentation complete
- [ ] Deployment pipeline tested

---

## Completed

- [x] .ai-system bootstrap
- [x] OD-1 home page design contract
- [x] OD-2 about page design contract
