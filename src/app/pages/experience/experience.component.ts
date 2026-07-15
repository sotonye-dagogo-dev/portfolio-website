import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../content/content.service';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, PulsatingEffectDirective, MagneticBtnDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  constructor(public content: ContentService) {}
}
