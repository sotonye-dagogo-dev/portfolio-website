import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { imageExpandAnimation } from '../../animations/gallery.animation';

@Component({
    selector: 'app-card',
    imports: [CommonModule],
    animations: [imageExpandAnimation],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() title?: string;

  isExpanded = false;
  isBrowser!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  toggleExpand() {
    if (this.imageSrc && this.isBrowser) {
      this.isExpanded = !this.isExpanded;
      if (this.isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
}
