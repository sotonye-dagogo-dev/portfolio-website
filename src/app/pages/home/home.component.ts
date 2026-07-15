import { Component, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../content/content.service';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { ImageFadeDirective } from '../../directives/image-fade/image-fade.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TypingEffectDirective,
    AnimatedBorderDirective,
    PulsatingEffectDirective,
    ImageViewerDirective,
    ImageFadeDirective,
    MagneticBtnDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private isBrowser: boolean;

  constructor(
    public content: ContentService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.isBrowser) return;
    const heroBg = document.querySelector('.hero-bg') as HTMLElement;
    if (!heroBg) return;
    const offset = window.scrollY * 0.35;
    heroBg.style.transform = 'translateY(' + offset + 'px)';
  }
}
