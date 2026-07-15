import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [
        CommonModule,
        ThemeToggleComponent,
        RouterModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
