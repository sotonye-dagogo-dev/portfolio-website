import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';

@Component({
  selector: 'app-gallery-nav',
  standalone: true,
  imports: [CommonModule, MagneticBtnDirective],
  template: `
    <div class="gallery-nav reveal">
      <button class="gallery-nav-btn" (click)="scroll(-1)" appMagneticBtn>&larr;</button>
      <button class="gallery-nav-btn" (click)="scroll(1)" appMagneticBtn>&rarr;</button>
    </div>
  `,
  styles: [':host { display: contents; }']
})
export class GalleryNavComponent {
  @Input({ required: true }) targetId!: string;
  @Input() scrollAmount = 420;

  scroll(dir: number): void {
    const el = document.getElementById(this.targetId);
    if (el) el.scrollBy({ left: dir * this.scrollAmount, behavior: 'smooth' });
  }
}
