import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentService } from '../../content/content.service';
import { fa } from '../../shared/icon-utils';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { PillListComponent } from '../../components/pill-list/pill-list.component';

@Component({
  selector: 'app-automation',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, TypingEffectDirective, PageHeaderComponent, SectionHeaderComponent, PillListComponent],
  templateUrl: './automation.component.html',
  styleUrl: './automation.component.scss',
})
export class AutomationComponent {
  fa = fa;

  constructor(public content: ContentService) {}
}
