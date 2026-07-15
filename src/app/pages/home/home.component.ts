import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../content/content.service';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TypingEffectDirective,
    AnimatedBorderDirective,
    PulsatingEffectDirective,
    ImageViewerDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public content: ContentService) {}
}
