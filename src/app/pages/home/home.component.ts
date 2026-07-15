import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentService } from '../../content/content.service';
import { fa } from '../../shared/icon-utils';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { ImageFadeDirective } from '../../directives/image-fade/image-fade.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    TypingEffectDirective,
    AnimatedBorderDirective,
    PulsatingEffectDirective,
    ImageViewerDirective,
    ImageFadeDirective,
    MagneticBtnDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  fa = fa;

  constructor(public content: ContentService) {}
}
