import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../content/content.service';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';

@Component({
  selector: 'app-automation',
  standalone: true,
  imports: [CommonModule, RouterModule, TypingEffectDirective, PulsatingEffectDirective],
  templateUrl: './automation.component.html',
  styleUrl: './automation.component.scss',
})
export class AutomationComponent {
  constructor(public content: ContentService) {}
}
