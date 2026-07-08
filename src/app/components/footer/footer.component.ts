import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../content/content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public content: ContentService) {}
}
