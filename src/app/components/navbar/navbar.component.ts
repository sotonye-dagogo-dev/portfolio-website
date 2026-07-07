import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { Router, RouterModule } from '@angular/router';
import routeConfig from '../../app.routes';

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
  constructor(private elementRef: ElementRef, private router: Router) {}

  routes = routeConfig.filter( route => { route.title !== undefined; return route.title; });

  toggleMenu() {
    const btn = this.elementRef.nativeElement.querySelector('#menu-btn');
    const nav = this.elementRef.nativeElement.querySelector('#mobile-menu');

    btn.classList.toggle('open');

    if (nav.classList.contains('hidden')) {
      nav.classList.remove('hidden');
      nav.classList.remove('slide-out');
      nav.classList.add('slide-in');
    } else {
      nav.classList.remove('slide-in');
      nav.classList.add('slide-out');
      setTimeout(() => {
        nav.classList.add('hidden');
      }, 300); // Wait for the animation to finish
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const btn = this.elementRef.nativeElement.querySelector('#menu-btn');
    const nav = this.elementRef.nativeElement.querySelector('#mobile-menu');
    if (!nav.classList.contains('hidden')) {
      btn.classList.remove('open');
      nav.classList.remove('slide-in');
      nav.classList.add('slide-out');
      setTimeout(() => {
        nav.classList.add('hidden');
      }, 300); // Wait for the animation to finish
    }
  }
}
