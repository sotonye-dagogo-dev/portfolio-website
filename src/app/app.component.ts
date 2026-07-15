import { Component, OnInit, Inject, PLATFORM_ID, HostListener, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterModule, NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio-website';
  private revealObserver: IntersectionObserver | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
      this.initLoader();
      this.initCursor();
      this.initScrollReveal();

      // Re-observe reveal elements after each navigation
      this.router.events
        .pipe(
          filter((e): e is NavigationEnd => e instanceof NavigationEnd),
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          setTimeout(() => this.observeRevealElements(), 250);
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.revealObserver) this.revealObserver.disconnect();
  }

  private initLoader(): void {
    const el = document.getElementById('loader');
    const countEl = document.getElementById('loader-count');
    const fillEl = document.getElementById('loader-bar-fill');
    if (!el) return;

    let progress = 0;
    const duration = 1500;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      progress = Math.min(elapsed / duration, 1);
      const pct = Math.round(progress * 100);
      if (countEl) countEl.textContent = pct + '%';
      if (fillEl) fillEl.style.width = pct + '%';
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        Promise.all([
          document.fonts ? document.fonts.ready : Promise.resolve(),
          new Promise(r => setTimeout(r, 200))
        ]).then(() => {
          el.classList.add('hide');
          setTimeout(() => el.remove(), 600);
        });
      }
    };
    requestAnimationFrame(frame);
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
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observeRevealElements();
  }

  private observeRevealElements(): void {
    if (!this.revealObserver) return;
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children, .reveal-blur').forEach((el) => {
      this.revealObserver!.observe(el);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const btn = document.getElementById('back-to-top');
    if (btn) {
      btn.classList.toggle('visible', window.scrollY > 400);
    }
    const bg = document.getElementById('hero-bg');
    if (bg) {
      const scrollY = window.scrollY;
      const translateY = scrollY * -0.15;
      const tilt = Math.min(scrollY * 0.02, 8);
      bg.style.transform = `translateY(${translateY}px) rotate(${tilt}deg)`;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
