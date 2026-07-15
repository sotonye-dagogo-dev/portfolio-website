import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, TypingEffectDirective],
  template: `
    <header class="page-header">
      <p class="page-header__label reveal">{{ label }}</p>
      <h1 class="page-header__title reveal-left">{{ title }}</h1>
      <p class="page-header__subtitle reveal" style="transition-delay:.1s" appTypingEffect *ngIf="subtitle">{{ subtitle }}</p>
    </header>
  `,
  styles: [':host { display: contents; }']
})
export class PageHeaderComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
}
