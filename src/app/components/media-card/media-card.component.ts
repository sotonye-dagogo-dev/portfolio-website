import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { ImageFadeDirective } from '../../directives/image-fade/image-fade.directive';
import { MagneticBtnDirective } from '../../directives/magnetic-btn/magnetic-btn.directive';
import { PillListComponent } from '../pill-list/pill-list.component';
import { LinksRowComponent } from '../links-row/links-row.component';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedBorderDirective,
    ImageViewerDirective,
    ImageFadeDirective,
    MagneticBtnDirective,
    PillListComponent,
    LinksRowComponent,
  ],
  template: `
    <div class="media-card"
         [class.media-card--flagship]="tier === 'flagship'"
         [class.media-card--cert]="isCert"
         appAnimatedBorder
         *ngIf="item">
      <div class="media-card__image" appImageViewer [fullImage]="item.image">
        <img [src]="item.image" [alt]="item.title" appImageFade />
      </div>
      <div class="media-card__body">
        <span class="media-card__flag" *ngIf="tier === 'flagship' || isCert">Flagship</span>
        <h2 class="media-card__title">{{ item.title }}</h2>
        <p class="media-card__desc">{{ item.description }}</p>
        <app-pill-list [items]="item.techStack"></app-pill-list>
        <app-links-row *ngIf="!isCert" [item]="item"></app-links-row>
        <div class="media-card__actions" *ngIf="isCert">
          <a [href]="item.link" target="_blank" rel="noopener" class="media-card__btn" appAnimatedBorder appMagneticBtn>
            View Certificate &rarr;
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .media-card {
      display: flex;
      flex-direction: column;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-2xl);
      overflow: hidden;
      transition: all .4s var(--ease-expo);
      position: relative;
    }
    .media-card:hover { border-color: var(--accent); box-shadow: var(--shadow-md); transform: translateY(-4px); }
    .media-card--cert .media-card__image { aspect-ratio: 16/10; }
    .media-card__image { overflow: hidden; cursor: zoom-in; aspect-ratio: 16/10; position: relative; }
    .media-card__image img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s var(--ease-expo); }
    .media-card:hover .media-card__image img { transform: scale(1.05); }
    .media-card__body { padding: var(--space-lg); display: flex; flex-direction: column; gap: var(--space-sm); flex: 1; }
    .media-card__flag { font-size: var(--type-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--accent); }
    .media-card__title { font-size: var(--type-base); font-weight: 700; }
    .media-card__desc { font-size: var(--type-sm); color: var(--muted); line-height: 1.7; flex: 1; }
    .media-card__actions { margin-top: auto; }
    .media-card__btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: var(--radius-full); background: var(--accent); color: var(--bg); font-weight: 600; font-size: var(--type-sm); text-decoration: none; transition: background .3s; cursor: pointer; }
    .media-card__btn:hover { background: var(--accent-hover); }
  `]
})
export class MediaCardComponent {
  @Input({ required: true }) item!: { image: string; title: string; description: string; techStack?: string[]; liveLink?: string; githubLink?: string; isCaseStudy?: boolean; link?: string } | null;
  @Input() tier?: 'flagship' | 'applied' | 'archive';
  @Input() isCert = false;
}
