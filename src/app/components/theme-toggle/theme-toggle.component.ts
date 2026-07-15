import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrl: './theme-toggle.component.scss',
    imports: [FontAwesomeModule]
})
export class ThemeToggleComponent implements OnInit {
  darkMode = false;
  faIcon = faMoon;
  faMoon = faMoon;
  faSun = faSun;

  private prefersDarkScheme: MediaQueryList | undefined;
  private localStorageKey = 'theme';

   isBrowser!: boolean;

    constructor (@Inject(PLATFORM_ID) private platformId: Object) {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }

  ngOnInit() {
    if ( this.isBrowser) {
      this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      if (this.isLocalStorageAvailable()) {
        this.initializeTheme();
        this.listenToSystemThemeChanges();
      }
    }
  }
  
  isLocalStorageAvailable(): boolean {
    if ( this.isBrowser) {
      try {
        const test = '__localStorageTest__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    return false;
  }
  
  initializeTheme() {
    const storedTheme = localStorage.getItem(this.localStorageKey);
    if (storedTheme) {
      this.applyTheme(storedTheme === 'dark');
    } else if (this.prefersDarkScheme) {
      this.applyTheme(this.prefersDarkScheme.matches);
    } else {
      const current = document.documentElement.getAttribute('data-theme');
      if (current) {
        this.darkMode = current === 'dark';
        this.faIcon = this.darkMode ? this.faSun : this.faMoon;
      }
    }
  }
  
  applyTheme(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    this.faIcon = isDarkMode ? this.faSun : this.faMoon;
  }
  
  listenToSystemThemeChanges() {
    if (this.prefersDarkScheme) {
      this.prefersDarkScheme.addEventListener('change', (event) => {
        const storedTheme = localStorage.getItem(this.localStorageKey);
        if (!storedTheme) {
          this.applyTheme(event.matches);
        } else {
          const currentTheme = storedTheme === 'dark';
          const systemPreferenceChanged = this.prefersDarkScheme!.matches !== currentTheme;
          if (systemPreferenceChanged) {
            if (this.prefersDarkScheme) {
              this.applyTheme(this.prefersDarkScheme.matches);
            localStorage.removeItem(this.localStorageKey);
            }
          }
        }
      });
    }
  }
  
  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.applyTheme(this.darkMode);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.localStorageKey, this.darkMode ? 'dark' : 'light');
    }
  }
}
