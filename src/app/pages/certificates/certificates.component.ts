import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../content/content.service';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { PillListComponent } from '../../components/pill-list/pill-list.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CommonModule,
    TypingEffectDirective,
    PageHeaderComponent,
    PillListComponent,
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  constructor(public content: ContentService) {}
}
