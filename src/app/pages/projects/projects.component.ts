import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../content/content.service';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { GalleryNavComponent } from '../../components/gallery-nav/gallery-nav.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TypingEffectDirective,
    MagneticBtnDirective,
    PageHeaderComponent,
    SectionHeaderComponent,
    MediaCardComponent,
    GalleryNavComponent,
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
