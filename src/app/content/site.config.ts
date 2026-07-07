import { SiteConfig, StatItem, QuickNavItem } from './types';

export const siteConfig: SiteConfig = {
  name: 'Sotonye Dagogo',
  title: 'Sotonye Dagogo · Portfolio',
  tagline: 'Full-Stack Developer & Technical Lead',
  availability: 'Available for new opportunities',
  firstName: 'Sotonye',
  lastName: 'Dagogo',
  cta: {
    primary: { label: 'View My Work', route: '/projects' },
    secondary: { label: 'My Journey', route: '/experience' },
  },
  footer: {
    copyright: '2026 Sotonye Dagogo',
    builtWith: 'Angular + Tailwind CSS + Open Design',
  },
};

export const statsConfig: StatItem[] = [
  { label: 'Projects', value: '10+' },
  { label: 'Technologies', value: '25+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Certificates', value: '6+' },
];

export const quickNavConfig: QuickNavItem[] = [
  { title: 'About', description: 'Engineering philosophy & background', route: '/about', icon: '👨‍💻' },
  { title: 'Experience', description: 'Career timeline & leadership', route: '/experience', icon: '💼' },
  { title: 'Projects', description: 'Platforms, tools & experiments', route: '/projects', icon: '🚀' },
  { title: 'Automation', description: 'AI-assisted delivery systems', route: '/automation', icon: '⚙️' },
  { title: 'Certificates', description: 'Professional certifications', route: '/certificates', icon: '🏆' },
];
