import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentService } from '../../content/content.service';
import { fa } from '../../shared/icon-utils';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { ImageFadeDirective } from '../../directives/image-fade/image-fade.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';
import { PillListComponent } from '../../components/pill-list/pill-list.component';
import { LinksRowComponent } from '../../components/links-row/links-row.component';
import { ProjectEntry } from '../../content/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    TypingEffectDirective,
    AnimatedBorderDirective,
    PulsatingEffectDirective,
    ImageViewerDirective,
    ImageFadeDirective,
    MagneticBtnDirective,
    PillListComponent,
    LinksRowComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  fa = fa;
  currentIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private readonly slideInterval = 5000;

  private isBrowser: boolean;

  constructor(
    public content: ContentService,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  get featuredProjects(): ProjectEntry[] {
    return this.content.featuredProjects;
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    if (this.featuredProjects.length <= 1) return;
    this.intervalId = setInterval(() => {
      this.next();
    }, this.slideInterval);
  }

  stopAutoSlide(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  pause(): void {
    this.stopAutoSlide();
  }

  resume(): void {
    this.startAutoSlide();
  }

  next(): void {
    if (this.featuredProjects.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.featuredProjects.length;
  }

  prev(): void {
    if (this.featuredProjects.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.featuredProjects.length) % this.featuredProjects.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
