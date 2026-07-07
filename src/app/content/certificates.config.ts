import { CertificateCategory } from './types';

const imageDirs = {
  frontend: 'frontendCertificates',
  backend: 'backendCertificates',
  fullstack: 'fullstackCertificates',
};

export const certificateConfig: CertificateCategory[] = [
  {
    title: 'Frontend',
    items: [
      {
        image: `${imageDirs.frontend}/frontend-cert1.jpg`,
        title: 'Responsive Web Design',
        description: 'Comprehensive training on building responsive web pages using HTML, CSS, and media queries.',
        link: 'https://www.freecodecamp.org/certification/Sotonye/responsive-web-design',
      },
      {
        image: `${imageDirs.frontend}/frontend-cert2.jpg`,
        title: 'JavaScript Algorithms and Data Structures',
        description: 'In-depth knowledge of JavaScript fundamentals, algorithms, and data structures.',
        link: 'https://www.freecodecamp.org/certification/Sotonye/javascript-algorithms-and-data-structures-v8',
      },
      {
        image: `${imageDirs.frontend}/frontend-cert3.jpg`,
        title: 'Front End Development Libraries',
        description: 'Proficiency in popular front end libraries such as React, Bootstrap, and jQuery.',
        link: 'https://www.freecodecamp.org/certification/Sotonye/front-end-development-libraries',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        image: `${imageDirs.backend}/backend-cert1.jpg`,
        title: 'Back End Development and APIs',
        description: 'Expertise in building back end applications and RESTful APIs using Node.js and Express.',
        link: 'https://www.freecodecamp.org/certification/Sotonye/back-end-development-and-apis',
      },
      {
        image: `${imageDirs.backend}/backend-cert2.jpg`,
        title: 'Quality Assurance',
        description: 'Skills in quality assurance and testing using Chai and Mocha.',
        link: 'https://www.freecodecamp.org/certification/Sotonye/quality-assurance-v7',
      },
    ],
  },
  {
    title: 'Fullstack',
    items: [
      {
        image: `${imageDirs.fullstack}/fullstack-cert1.jpg`,
        title: 'Data Visualization',
        description: 'Ability to create dynamic and interactive data visualizations using D3.js.',
        link: 'https://www.freecodecamp.org/certification/Sotonye/data-visualization',
      },
    ],
  },
];
