import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AutomationComponent } from './pages/automation/automation.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    data: { animation: 'HomePage' },
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'experience',
    title: 'Experience',
    component: ExperienceComponent,
    data: { animation: 'ExperiencePage' },
  },
  {
    path: 'projects',
    title: 'Projects',
    component: ProjectsComponent,
    data: { animation: 'ProjectsPage' },
  },
  {
    path: 'automation',
    title: 'Automation',
    component: AutomationComponent,
    data: { animation: 'AutomationPage' },
  },
  {
    path: 'certificates',
    title: 'Certificates',
    component: CertificatesComponent,
    data: { animation: 'CertificatesPage' },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export const routes = routeConfig;
export default routeConfig;
