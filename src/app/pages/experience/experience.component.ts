import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../content/content.service';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { PillListComponent } from '../../components/pill-list/pill-list.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, PulsatingEffectDirective, PageHeaderComponent, PillListComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  constructor(public content: ContentService) {}
}
