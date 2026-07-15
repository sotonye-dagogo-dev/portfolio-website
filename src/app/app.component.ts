import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
      this.initCursor();
      this.initScrollReveal();
    }
  }

  private initTheme(): void {
    const stored = localStorage.getItem('theme');
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }

  private initCursor(): void {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseover', (e) => {
      const t = (e.target as HTMLElement).closest('a,button,.btn,.pill,.gallery-nav-btn,.project-card,.quick-nav-card,.feature-card');
      cursor.classList.toggle('hover', !!t);
    }, true);
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach((el) => {
      observer.observe(el);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const btn = document.getElementById('back-to-top');
    if (btn) {
      btn.classList.toggle('visible', window.scrollY > 400);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
