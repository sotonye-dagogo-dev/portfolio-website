import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pill-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="items?.length">
      <span class="pill" *ngFor="let item of items">{{ item }}</span>
    </ng-container>
  `,
  styles: [':host { display: inline-flex; flex-wrap: wrap; gap: var(--space-sm); align-items: center; }']
})
export class PillListComponent {
  @Input() items?: string[] | null;
}
