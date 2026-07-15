import { FlowNode, AutomationFeature } from './types';

export const automationFlow: FlowNode[] = [
  { label: 'PRD', title: 'Requirements', status: '', active: false },
  { label: 'Roadmap', title: 'Planning', status: '', active: false },
  { label: 'Design', title: 'Architecture', status: '', active: false },
  { label: 'Prompts', title: 'AI Generation', status: '', active: false },
  { label: 'Open Design', title: 'Visual Contract', status: '', active: false },
  { label: 'Open Code', title: 'Implementation', status: '', active: false },
];

export const automationFeatures: AutomationFeature[] = [
  {
    icon: '&#9881;',
    name: 'ai-system-template',
    purpose: 'Standardized AI system directory structure for consistent agent handoff and documentation across all projects.',
    tags: ['Template', 'AI', 'Documentation'],
    repo: 'Sotonye0808/ai-system-template',
    repoUrl: 'https://github.com/Sotonye0808/ai-system-template',
  },
  {
    icon: '&#9632;',
    name: 'default-template',
    purpose: 'Zero-config starter template with pre-configured AI agent instructions, CI/CD, and design system integration.',
    tags: ['Starter', 'Boilerplate', 'CLI'],
    repo: 'Sotonye0808/default-template',
    repoUrl: 'https://github.com/Sotonye0808/default-template',
  },
  {
    icon: '&#9881;',
    name: '.github-workflows',
    purpose: 'Reusable CI/CD workflows for automated testing, deployment, and AI-assisted code review pipelines.',
    tags: ['CI/CD', 'GitHub Actions', 'Automation'],
    repo: 'Sotonye0808/.github-workflows',
    repoUrl: 'https://github.com/Sotonye0808/.github-workflows',
  },
];

export const automationPhilosophy = 'Engineering systems should be metadata-driven, config-first, and AI-assistable — building the factory that builds the product.';
