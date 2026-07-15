import { ExperienceEntry } from './types';

export const experienceConfig: ExperienceEntry[] = [
  {
    role: 'Technical Lead',
    organization: 'HICC',
    dateRange: '2026 - Present',
    description: [
      'Leading development teams building enterprise platforms with Angular, Node.js, and cloud infrastructure.',
      'Architected micro-frontend system serving 10k+ daily active users with CI/CD automation.',
    ],
    tags: ['Angular', 'Node.js', 'TypeScript', 'CI/CD', 'Team Leadership'],
    isCurrent: true,
  },
  {
    role: 'Software Developer (NYSC)',
    organization: 'Liquiditti Platforms & Solutions',
    dateRange: '2026 - Present',
    description: [
      'Developed full-stack web applications for client projects using Angular and Django.',
      'Integrated third-party APIs and built RESTful services for data processing pipelines.',
    ],
    tags: ['Angular', 'Django', 'Python', 'REST APIs'],
    isCurrent: true,
  },
  {
    role: 'Founder & Technical Lead',
    organization: 'Along',
    dateRange: '2024 - Present',
    description: [
      'Building an AI-assisted engineering platform that streamlines the software delivery lifecycle.',
      'Designed and implemented ai-system template architecture for metadata-driven development.',
    ],
    tags: ['System Design', 'AI/LLM', 'Automation', 'TypeScript'],
    isCurrent: true,
  },
  {
    role: 'Fullstack Developer',
    organization: "Roxo's Ornaments",
    dateRange: '2023 - 2024',
    description: [
      'Built and maintained the e-commerce platform serving custom jewellery and accessories.',
      'Implemented payment integration, inventory management, and admin dashboard.',
    ],
    tags: ['Angular', 'Node.js', 'Firebase', 'Stripe'],
    isCurrent: false,
  },
  {
    role: 'Trainee',
    organization: 'Julius Berger',
    dateRange: '2022 - 2023',
    description: [
      'Completed intensive training in software engineering practices and enterprise systems.',
      'Contributed to internal tooling for project management and resource tracking.',
    ],
    tags: ['JavaScript', 'Python', 'SQL', 'Project Management'],
    isCurrent: false,
  },
  {
    role: 'Founder',
    organization: 'Transact Store',
    dateRange: '2022 - Present',
    description: [
      'Launched and scaled a multi-vendor e-commerce platform connecting buyers to premium products.',
      'Built the entire platform from scratch using Angular, Firebase, and Node.js.',
    ],
    tags: ['Angular', 'Firebase', 'Node.js', 'E-commerce', 'Product Management'],
    isCurrent: true,
  },
  {
    role: 'Intern',
    organization: 'NPA (Nigerian Ports Authority)',
    dateRange: '2021 - 2022',
    description: [
      'Assisted in maintaining internal IT systems and network infrastructure.',
      'Developed small automation scripts for data entry and report generation.',
    ],
    tags: ['IT Support', 'Python', 'Automation'],
    isCurrent: false,
  },
];
