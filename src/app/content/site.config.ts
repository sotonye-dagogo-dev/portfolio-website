import { SiteConfig, StatItem, QuickNavItem } from './types';

export const siteConfig: SiteConfig = {
  name: 'Sotonye Dagogo',
  title: 'Sotonye Dagogo · Portfolio',
  tagline: 'Full-Stack Developer & Technical Lead',
  availability: 'Available for new opportunities',
  firstName: 'Sotonye',
  lastName: 'Dagogo',
  cvUrl: 'https://1drv.ms/b/c/740863ef2517674a/IQBpInWKaA5rQpHZjxn4NmxOAR0-p4-8pCfOrkjFRvlCLzE', /* REPLACE with actual CV URL */
  experienceStartYear: 2020,
  cta: {
    primary: { label: 'View My Work', route: '/projects' },
    secondary: { label: 'My Journey', route: '/experience' },
  },
  footer: {
    copyright: '2026 Sotonye Dagogo',
    builtWith: 'Angular + Tailwind CSS + AI-Assisted Delivery',
  },
};

export const statsConfig: StatItem[] = [
  { label: 'Projects', value: '20+', dynamic: true  },
  { label: 'Technologies', value: '20+', dynamic: true  },
  { label: 'Years Experience', value: '6+', dynamic: true },
  { label: 'Certificates', value: '6+', dynamic: true  },
];

export const quickNavConfig: QuickNavItem[] = [
  { title: 'About', description: 'Engineering philosophy & background', route: '/about', icon: 'user' },
  { title: 'Experience', description: 'Career timeline & leadership', route: '/experience', icon: 'briefcase' },
  { title: 'Projects', description: 'Platforms, tools & experiments', route: '/projects', icon: 'folder' },
  { title: 'Automation', description: 'AI-assisted delivery systems', route: '/automation', icon: 'gears' },
  { title: 'Certificates', description: 'Professional certifications', route: '/certificates', icon: 'certificate' },
];
