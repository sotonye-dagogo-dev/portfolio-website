import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';

@Component({
  selector: 'app-links-row',
  standalone: true,
  imports: [CommonModule, MagneticBtnDirective],
  template: `
    <div class="links-row">
      <a *ngIf="item?.liveLink" [href]="item!.liveLink" target="_blank" rel="noopener" class="links-row__link" appMagneticBtn>
        &rarr; Live Demo
      </a>
      <a *ngIf="item?.githubLink && !item?.isCaseStudy" [href]="item!.githubLink" target="_blank" rel="noopener" class="links-row__link" appMagneticBtn>
        &rarr; GitHub
      </a>
      <span *ngIf="!item?.githubLink || item?.isCaseStudy" class="links-row__link links-row__link--disabled">
        &rarr; Case Study (no public repo)
      </span>
    </div>
  `,
  styles: [`
    .links-row { display: flex; gap: var(--space-md); flex-wrap: wrap; align-items: center; margin-top: var(--space-md); }
    .links-row__link { font-size: var(--type-sm); font-weight: 600; font-family: var(--font-mono); color: var(--accent); text-decoration: none; transition: gap .3s; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
    .links-row__link:hover { gap: 12px; }
    .links-row__link--disabled { opacity: .5; pointer-events: none; cursor: default; color: var(--muted); }
  `]
})
export class LinksRowComponent {
  @Input() item?: { liveLink?: string | null; githubLink?: string | null; isCaseStudy?: boolean | null } | null;
}
