import { Directive, ElementRef, Inject, PLATFORM_ID, HostListener, Renderer2, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appMagneticBtn]',
  standalone: true,
})
export class MagneticBtnDirective implements OnDestroy {
  private rafId: number | null = null;
  private boundX = 0;
  private boundY = 0;
  private isHovering = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('mouseenter', ['$event'])
  onEnter(e: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!window.matchMedia('(pointer:fine)').matches) return;
    this.isHovering = true;
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.boundX = rect.left + rect.width / 2;
    this.boundY = rect.top + rect.height / 2;
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform .08s ease-out');
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    if (!this.isHovering) return;
    const dx = e.clientX - this.boundX;
    const dy = e.clientY - this.boundY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 80;
    const strength = Math.min(dist / maxDist, 1);
    const pullX = dx * 0.2 * strength;
    const pullY = dy * 0.2 * strength;
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate(${pullX}px, ${pullY}px)`);
  }

  @HostListener('mouseleave')
  onLeave(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isHovering = false;
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform .3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0,0)');
  }

  ngOnDestroy(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }
}
