import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../content/content.service';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CommonModule,
    ImageViewerDirective,
    AnimatedBorderDirective,
    TypingEffectDirective,
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  constructor(public content: ContentService) {}

  scrollGallery(index: number, amount: number): void {
    const el = document.getElementById('cert-gallery-' + index);
    if (el) {
      el.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }
}
