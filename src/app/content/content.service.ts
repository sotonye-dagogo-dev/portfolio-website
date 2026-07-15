import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ContentData, TechItem, ProjectEntry, ExperienceEntry, CertificateCategory, QuickNavItem, StatItem } from './types';
import { siteConfig, statsConfig, quickNavConfig } from './site.config';
import { techStackConfig } from './tech-stack.config';
import { experienceConfig } from './experience.config';
import { flagshipConfig, appliedConfig, archiveConfig, allProjects } from './projects.config';
import { certificateConfig } from './certificates.config';
import { philosophyConfig, bioParagraphs, howIBuildConfig, contactLinksConfig, currentlyConfig } from './about.config';
import { automationFlow, automationFeatures, automationPhilosophy } from './automation.config';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private generated: Partial<ContentData> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadGenerated();
    }
  }

  private async loadGenerated(): Promise<void> {
    try {
      const resp = await fetch('/content/content.generated.json');
      if (resp.ok) {
        const data: Partial<ContentData> = await resp.json();
        if (data && typeof data === 'object') {
          this.generated = data;
        }
      }
    } catch {
      // Generated file not available — use static config as fallback
    }
  }

  private overrideField<T>(staticVal: T, key: keyof ContentData): T {
    return this.generated && this.generated[key] !== undefined
      ? (this.generated[key] as T)
      : staticVal;
  }

  private overrideArray<T>(staticVal: T[], key: keyof ContentData): T[] {
    return this.generated && Array.isArray(this.generated[key])
      ? (this.generated[key] as T[])
      : staticVal;
  }

  get site() {
    return { ...siteConfig, ...(this.generated?.site || {}) };
  }

  get stats(): StatItem[] {
    const base = this.overrideArray(statsConfig, 'stats');
    return base.map(s => {
      if (s.dynamic && s.label === 'Years Experience' && siteConfig.experienceStartYear) {
        const years = new Date().getFullYear() - siteConfig.experienceStartYear;
        return { ...s, value: years + '+' };
      }
      return s;
    });
  }

  get quickNav(): QuickNavItem[] {
    return this.overrideArray(quickNavConfig, 'quickNav');
  }

  get techStack(): TechItem[] {
    return this.overrideArray(techStackConfig, 'techStack');
  }

  get featuredProject(): ProjectEntry | null {
    return this.overrideField<ProjectEntry | null>(
      flagshipConfig[0] || null,
      'featuredProject'
    );
  }

  get flagship(): ProjectEntry[] {
    return this.overrideArray(flagshipConfig, 'flagship');
  }

  get applied(): ProjectEntry[] {
    return this.overrideArray(appliedConfig, 'applied');
  }

  get archive(): ProjectEntry[] {
    return this.overrideArray(archiveConfig, 'archive');
  }

  get projects(): ProjectEntry[] {
    return this.overrideArray(allProjects, 'projects');
  }

  get experiences(): ExperienceEntry[] {
    return this.overrideArray(experienceConfig, 'experiences');
  }

  get certificates(): CertificateCategory[] {
    return this.overrideArray(certificateConfig, 'certificates');
  }

  get about() {
    return {
      philosophy: this.overrideArray(philosophyConfig, 'about')?.length
        ? this.overrideArray(philosophyConfig, 'about')
        : philosophyConfig,
      bioParagraphs: this.overrideArray(bioParagraphs, 'about')?.length
        ? this.overrideArray(bioParagraphs, 'about')
        : bioParagraphs,
      howIBuild: this.overrideArray(howIBuildConfig, 'about')?.length
        ? this.overrideArray(howIBuildConfig, 'about')
        : howIBuildConfig,
      contactLinks: this.overrideArray(contactLinksConfig, 'about')?.length
        ? this.overrideArray(contactLinksConfig, 'about')
        : contactLinksConfig,
      currently: this.overrideArray(currentlyConfig, 'about')?.length
        ? this.overrideArray(currentlyConfig, 'about')
        : currentlyConfig,
    };
  }

  get automation() {
    return {
      flow: this.overrideArray(automationFlow, 'automation')?.length
        ? this.overrideArray(automationFlow, 'automation')
        : automationFlow,
      features: this.overrideArray(automationFeatures, 'automation')?.length
        ? this.overrideArray(automationFeatures, 'automation')
        : automationFeatures,
      philosophy: this.generated?.automation?.philosophy || automationPhilosophy,
    };
  }
}
