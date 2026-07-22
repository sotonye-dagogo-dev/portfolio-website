import { FlowNode, AutomationFeature } from './types';

export const automationFlow: FlowNode[] = [
  { label: 'PRD', title: 'Requirements', status: '', active: false },
  { label: 'Roadmap', title: 'Planning', status: '', active: false },
  { label: 'Design', title: 'Architecture', status: '', active: false },
  { label: 'Prompts', title: 'AI Generation', status: '', active: false },
  { label: 'Visual Contract', title: 'Design Output', status: '', active: false },
  { label: 'Implementation', title: 'Code', status: '', active: false },
];

export const automationFeatures: AutomationFeature[] = [
  {
    icon: 'gears',
    name: 'ai-system-template',
    purpose: 'Standardized AI system directory structure for consistent agent handoff and documentation across all projects.',
    tags: ['Template', 'AI', 'Documentation'],
    repo: 'Sotonye0808/ai-system-template',
    repoUrl: 'https://github.com/Sotonye0808/ai-system-template',
  },
  {
    icon: 'cube',
    name: 'default-template',
    purpose: 'Zero-config starter template with pre-configured AI agent instructions, CI/CD, and design system integration.',
    tags: ['Starter', 'Boilerplate', 'CLI'],
    repo: 'Sotonye0808/default-template',
    repoUrl: 'https://github.com/Sotonye0808/default-template',
  },
  {
    icon: 'code',
    name: '.github-workflows',
    purpose: 'Reusable CI/CD workflows for automated testing, deployment, and AI-assisted code review pipelines.',
    tags: ['CI/CD', 'GitHub Actions', 'Automation'],
    repo: 'Sotonye0808/.github-workflows',
    repoUrl: 'https://github.com/Sotonye0808/.github-workflows',
  },
];

export const automationPhilosophy = 'Engineering systems should be metadata-driven, config-first, and AI-assistable: building the factory that builds the product.';
