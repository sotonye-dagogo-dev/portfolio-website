import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../content/content.service';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TypingEffectDirective, PulsatingEffectDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  constructor(public content: ContentService) {}
}
