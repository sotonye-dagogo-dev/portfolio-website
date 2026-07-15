import { Directive, ElementRef, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'img[appImageFade]',
  standalone: true,
})
export class ImageFadeDirective implements AfterViewInit {
  constructor(
    private el: ElementRef<HTMLImageElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const img = this.el.nativeElement;

    // If already loaded/completed, fade in immediately
    if (img.complete) {
      img.style.opacity = '1';
      return;
    }

    // Start transparent, fade in on load
    img.style.opacity = '0';
    img.style.transition = 'opacity .4s ease';

    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });

    img.addEventListener('error', () => {
      img.style.opacity = '1';
    });
  }
}
