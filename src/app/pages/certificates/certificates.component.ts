import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../content/content.service';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { PillListComponent } from '../../components/pill-list/pill-list.component';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { ImageFadeDirective } from '../../directives/image-fade/image-fade.directive';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    PillListComponent,
    ImageViewerDirective,
    MagneticBtnDirective,
    AnimatedBorderDirective,
    ImageFadeDirective,
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
