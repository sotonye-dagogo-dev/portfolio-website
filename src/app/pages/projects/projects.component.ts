import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../content/content.service';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ImageViewerDirective,
    AnimatedBorderDirective,
    PulsatingEffectDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  archiveOpen = false;

  constructor(public content: ContentService) {}

  toggleArchive(): void {
    this.archiveOpen = !this.archiveOpen;
  }
}
