export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  availability: string;
  firstName: string;
  lastName: string;
  cvUrl?: string;
  experienceStartYear?: number;
  cta: {
    primary: { label: string; route: string };
    secondary: { label: string; route: string };
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export interface StatItem {
  label: string;
  value: string;
  dynamic?: boolean;
}

export interface QuickNavItem {
  title: string;
  description: string;
  route: string;
  icon: string;
}

export interface TechItem {
  name: string;
  color: string;
  icon?: string;
}

export interface ProjectEntry {
  image: string;
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  techStack: string[];
  featured?: boolean;
  isCaseStudy?: boolean;
  tier: 'flagship' | 'applied' | 'archive';
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  dateRange: string;
  description: string[];
  tags: string[];
  isCurrent: boolean;
}

export interface AutomationFeature {
  icon: string;
  name: string;
  purpose: string;
  tags: string[];
  repo: string;
  repoUrl: string;
}

export interface FlowNode {
  label: string;
  title: string;
  status: string;
  active?: boolean;
}

export interface CertificateItem {
  image: string;
  title: string;
  description: string;
  link: string;
  techStack?: string[];
}

export interface CertificateCategory {
  title: string;
  items: CertificateItem[];
}

export interface PhilosophyPrinciple {
  icon: string;
  title: string;
  description: string;
}

export interface HowIBuildItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}

export interface CurrentlyItem {
  label: string;
  value: string;
}

export interface ContentData {
  site: SiteConfig;
  stats: StatItem[];
  quickNav: QuickNavItem[];
  techStack: TechItem[];
  featuredProjects: ProjectEntry[];
  flagship: ProjectEntry[];
  applied: ProjectEntry[];
  archive: ProjectEntry[];
  projects: ProjectEntry[];
  experiences: ExperienceEntry[];
  certificates: CertificateCategory[];
  about: {
    philosophy: PhilosophyPrinciple[];
    bioParagraphs: string[];
    howIBuild: HowIBuildItem[];
    contactLinks: ContactLink[];
    currently: CurrentlyItem[];
  };
  automation: {
    flow: FlowNode[];
    features: AutomationFeature[];
    philosophy: string;
  };
}
