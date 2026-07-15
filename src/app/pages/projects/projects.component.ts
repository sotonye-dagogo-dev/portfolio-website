import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../content/content.service';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { ImageFadeDirective } from '../../directives/image-fade/image-fade.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ImageViewerDirective,
    AnimatedBorderDirective,
    TypingEffectDirective,
    ImageFadeDirective,
    MagneticBtnDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  archiveOpen = false;

  constructor(public content: ContentService) {}

  toggleArchive(): void {
    this.archiveOpen = !this.archiveOpen;
  }

  scrollGallery(id: string, amount: number): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }
}
