import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentService } from '../../content/content.service';
import { fa } from '../../shared/icon-utils';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, PulsatingEffectDirective, MagneticBtnDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  fa = fa;

  constructor(public content: ContentService) {}
}
