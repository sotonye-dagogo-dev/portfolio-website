import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header reveal">
      <span class="section-header__line"></span>
      <span class="section-header__label">{{ label }}</span>
      <span class="section-header__line"></span>
    </div>
  `,
  styles: [':host { display: contents; }']
})
export class SectionHeaderComponent {
  @Input({ required: true }) label!: string;
}
