import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, AfterViewInit, Inject, PLATFORM_ID, OnChanges, SimpleChanges } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface TypingEffectConfig {
  typingSpeed?: number; // Duration in seconds
  blinkSpeed?: number; // Blink duration in seconds
  cursorColor?: string;
  cursorWidth?: string;
  fontSize?: string;
  fontFamily?: string;
  autoStart?: boolean;
  loop?: boolean;
  loopDelay?: number; // Delay between loops in seconds
  mode?: 'typewriter' | 'blurReveal';
  revealGroup?: number; // characters per reveal step (default 3)
  blurAmount?: string; // max blur amount (default '10px')
}

@Directive({
  selector: '[appTypingEffect]',
  standalone: true
})
export class TypingEffectDirective implements OnInit, AfterViewInit, OnDestroy, OnChanges {
 
  @Input() config: TypingEffectConfig = {}

  defaultConfig: TypingEffectConfig = {
    typingSpeed: 2, 
    blinkSpeed: 0.5,
    cursorColor: 'currentColor',
    cursorWidth: '3px',
    fontSize: '', // Will be set from element's computed style
    fontFamily: '', // Will be set from element's computed style
    autoStart: true,
    loop: false,
    loopDelay: 5,
    mode: 'typewriter',
    revealGroup: 3,
    blurAmount: '10px'
  }

  activeConfig: TypingEffectConfig = {};

  private originalText: string = '';
  private textLength: number = 0;
  private styleElement: HTMLStyleElement | null = null;
  private animationName: string = '';
  private blinkAnimationName: string = '';
  private isInitialized: boolean = false;
  private originalFontSize: string = '';
  private originalFontFamily: string = '';
  private restartDelay: number = 1; // Fixed 1s delay between untype and type again
  private cursorElement: HTMLElement | null = null;
  private animationInterval: any = null;
  private containerWidth: number = 0;
  private maxVisibleChars: number = 0;

  isBrowser!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // Generate unique animation names to avoid conflicts
    const uniqueId = Math.random().toString(36).substr(2, 9);
    this.animationName = `typing-${uniqueId}`;
    this.blinkAnimationName = `blink-${uniqueId}`;
  }

  ngOnInit() {    
    if (!this.isBrowser) return;
    this.captureOriginalStyles();
    this.setupConfig();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.isBrowser) return;
    
    if (changes['config']) {
      this.setupConfig();
      this.updateTextContent();
      
      if (this.isInitialized && this.activeConfig.autoStart) {
        this.startTypingEffect();
      }
    }
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    
    this.updateTextContent();
    this.calculateContainerConstraints();
    this.isInitialized = true;
    
    if (this.activeConfig.autoStart && this.textLength > 0) {
      // Small delay to ensure DOM is fully ready
      setTimeout(() => {
        this.startTypingEffect();
      }, 0);
    }
  }

  ngOnDestroy() {
    if (this.styleElement && this.isBrowser) {
      this.renderer.removeChild(document.head, this.styleElement);
    }
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  private captureOriginalStyles() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    const computedStyle = window.getComputedStyle(element);
    
    this.originalFontSize = computedStyle.fontSize;
    this.originalFontFamily = computedStyle.fontFamily;
  }

  private setupConfig() {
    this.activeConfig = {
      typingSpeed: this.config.typingSpeed ?? this.defaultConfig.typingSpeed, 
      blinkSpeed: this.config.blinkSpeed ?? this.defaultConfig.blinkSpeed,
      cursorColor: this.config.cursorColor ?? this.defaultConfig.cursorColor,
      cursorWidth: this.config.cursorWidth ?? this.defaultConfig.cursorWidth,
      fontSize: this.config.fontSize ?? this.originalFontSize,
      fontFamily: this.config.fontFamily ?? this.originalFontFamily,
      autoStart: this.config.autoStart ?? this.defaultConfig.autoStart,
      loop: this.config.loop ?? this.defaultConfig.loop,
      loopDelay: this.config.loopDelay ?? this.defaultConfig.loopDelay,
      mode: this.config.mode ?? this.defaultConfig.mode,
      revealGroup: this.config.revealGroup ?? this.defaultConfig.revealGroup,
      blurAmount: this.config.blurAmount ?? this.defaultConfig.blurAmount
    }
  }

  private updateTextContent() {
    const element = this.el.nativeElement;
    this.originalText = element.textContent?.trim() || '';
    this.textLength = this.originalText.length;
  }

  private calculateContainerConstraints() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    const computedStyle = window.getComputedStyle(element);
    
    // Get container width (accounting for padding)
    const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
    const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
    this.containerWidth = element.clientWidth - paddingLeft - paddingRight;

    // Calculate average character width using a sample
    const testString = 'M'.repeat(10); // Use 'M' as it's typically the widest character
    const tempSpan = this.renderer.createElement('span');
    this.renderer.setStyle(tempSpan, 'visibility', 'hidden');
    this.renderer.setStyle(tempSpan, 'position', 'absolute');
    this.renderer.setStyle(tempSpan, 'font-family', this.activeConfig.fontFamily);
    this.renderer.setStyle(tempSpan, 'font-size', this.activeConfig.fontSize);
    this.renderer.setStyle(tempSpan, 'white-space', 'nowrap');
    this.renderer.appendChild(tempSpan, this.renderer.createText(testString));
    this.renderer.appendChild(document.body, tempSpan);
    
    const avgCharWidth = tempSpan.offsetWidth / 10;
    this.renderer.removeChild(document.body, tempSpan);

    // Calculate maximum visible characters per line (with some buffer for cursor)
    const cursorWidth = parseFloat(this.activeConfig.cursorWidth?.replace('px', '') || '3');
    this.maxVisibleChars = Math.floor((this.containerWidth - cursorWidth) / avgCharWidth);
  }

  public startTypingEffect() {
    if (!this.isBrowser || this.textLength === 0) {
      console.warn('Cannot start typing effect: no text content or not in browser');
      return;
    }

    if (this.activeConfig.mode === 'blurReveal') {
      this.startBlurReveal();
      return;
    }
    
    this.setupElementStyles();
    this.createCursor();
    this.startAdaptiveAnimation();
  }

  public resetEffect() {
    if (!this.isBrowser) return;

    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }

    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'animation', 'none');
    element.innerHTML = '';
    
    // Force reflow
    element.offsetHeight;
    
    setTimeout(() => {
      this.startTypingEffect();
    }, 10);
  }

  private setupElementStyles() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    
    // Apply font styles if provided in config
    if (this.config.fontFamily) {
      this.renderer.setStyle(element, 'font-family', this.activeConfig.fontFamily);
    }
    if (this.config.fontSize) {
      this.renderer.setStyle(element, 'font-size', this.activeConfig.fontSize);
    }

    // Set up for character-based animation with wrapping
    element.innerHTML = '';
    this.renderer.setStyle(element, 'word-wrap', 'break-word');
    this.renderer.setStyle(element, 'overflow-wrap', 'break-word');
    
    // Remove any width constraints that might interfere with wrapping
    this.renderer.removeStyle(element, 'white-space');
    this.renderer.removeStyle(element, 'overflow');
    this.renderer.removeStyle(element, 'width');
  }

  private createCursor() {
    if (!this.isBrowser) return;

    // Remove existing cursor if any
    if (this.cursorElement) {
      this.renderer.removeChild(this.el.nativeElement, this.cursorElement);
    }

    // Create cursor element
    this.cursorElement = this.renderer.createElement('span');
    this.renderer.addClass(this.cursorElement, 'typing-cursor');
    
    // Apply cursor styles
    this.renderer.setStyle(this.cursorElement, 'border-right', `${this.activeConfig.cursorWidth} solid ${this.activeConfig.cursorColor}`);
    this.renderer.setStyle(this.cursorElement, 'animation', `${this.blinkAnimationName} ${this.activeConfig.blinkSpeed}s step-end infinite`);
    this.renderer.setStyle(this.cursorElement, 'display', 'inline-block');
    this.renderer.setStyle(this.cursorElement, 'width', '0'); // Changed from cursorWidth to '0'
    this.renderer.setStyle(this.cursorElement, 'height', '1em'); // Add height to ensure visibility
  
    // Inject cursor blink animation
    this.injectCursorStyles();
  }

  private injectCursorStyles() {
    if (!this.isBrowser) return;

    // Only inject cursor styles if not already injected
    if (document.querySelector(`#cursor-style-${this.blinkAnimationName}`)) return;

    const cursorStyle = this.renderer.createElement('style');
    this.renderer.setAttribute(cursorStyle, 'id', `cursor-style-${this.blinkAnimationName}`);
    
    const styles = `
      @keyframes ${this.blinkAnimationName} {
        0%, 50% {
          border-color: ${this.activeConfig.cursorColor};
        }
        51%, 100% {
          border-color: transparent;
        }
      }
    `;
    
    this.renderer.appendChild(cursorStyle, this.renderer.createText(styles));
    this.renderer.appendChild(document.head, cursorStyle);
  }

  private startAdaptiveAnimation() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    let currentIndex = 0;
    let displayBuffer: string[] = [];
    const typingSpeed = (this.activeConfig.typingSpeed! * 1000) / this.textLength; // Convert to ms per character

    const typeCharacter = () => {
      if (currentIndex <= this.textLength) {
        if (currentIndex < this.textLength) {
          const newChar = this.originalText[currentIndex];
          displayBuffer.push(newChar);

          // Check if we need to handle overflow
          if (this.shouldManageOverflow()) {
            displayBuffer = this.manageTextOverflow(displayBuffer);
          }
        }

        // Update display
        const displayText = displayBuffer.join('');
        element.innerHTML = this.formatTextForDisplay(displayText);
        
        if (this.cursorElement) {
          this.renderer.appendChild(element, this.cursorElement);
        }
        
        currentIndex++;
      } else {
        // Typing complete
        clearInterval(this.animationInterval);
        
        if (this.activeConfig.loop) {
          // Start delay phase
          setTimeout(() => {
            this.startUntypingAnimation(displayBuffer);
          }, this.activeConfig.loopDelay! * 1000);
        }
      }
    };

    this.animationInterval = setInterval(typeCharacter, typingSpeed);
  }

  private startUntypingAnimation(displayBuffer: string[]) {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    const typingSpeed = (this.activeConfig.typingSpeed! * 1000) / this.textLength;

    const untypeCharacter = () => {
      if (displayBuffer.length > 0) {
        displayBuffer.pop();
        
        // Update display
        const displayText = displayBuffer.join('');
        element.innerHTML = this.formatTextForDisplay(displayText);
        
        if (this.cursorElement) {
          this.renderer.appendChild(element, this.cursorElement);
        }
      } else {
        // Untyping complete
        clearInterval(this.animationInterval);
        
        // Start restart delay then type again
        setTimeout(() => {
          this.startAdaptiveAnimation();
        }, this.restartDelay * 1000);
      }
    };

    this.animationInterval = setInterval(untypeCharacter, typingSpeed);
  }

  private startBlurReveal() {
    if (!this.isBrowser) return;
    const element = this.el.nativeElement;
    const groupSize = this.activeConfig.revealGroup!;
    const blurAmount = this.activeConfig.blurAmount!;
    const totalMs = this.activeConfig.typingSpeed! * 1000;
    const stepMs = totalMs / Math.ceil(this.textLength / groupSize);

    element.innerHTML = '';
    this.renderer.setStyle(element, 'white-space', 'pre-wrap');
    this.renderer.setStyle(element, 'word-break', 'break-word');

    const chars: HTMLSpanElement[] = [];
    for (const ch of this.originalText) {
      const span = this.renderer.createElement('span');
      this.renderer.appendChild(span, this.renderer.createText(ch === ' ' ? '\u00A0' : ch));
      this.renderer.setStyle(span, 'display', 'inline');
      this.renderer.setStyle(span, 'transition', 'filter 0.35s ease, opacity 0.35s ease');
      this.renderer.setStyle(span, 'filter', `blur(${blurAmount})`);
      this.renderer.setStyle(span, 'opacity', '0.3');
      this.renderer.appendChild(element, span);
      chars.push(span);
    }

    this.createCursor();
    if (this.cursorElement) this.renderer.appendChild(element, this.cursorElement);

    let revealIndex = 0;
    const reveal = () => {
      if (revealIndex >= this.textLength) {
        clearInterval(this.animationInterval);
        if (this.activeConfig.loop) {
          setTimeout(() => this.startBlurUntype(chars), this.activeConfig.loopDelay! * 1000);
        }
        return;
      }
      const end = Math.min(revealIndex + groupSize, this.textLength);
      for (let i = revealIndex; i < end; i++) {
        this.renderer.setStyle(chars[i], 'filter', 'blur(0)');
        this.renderer.setStyle(chars[i], 'opacity', '1');
      }
      revealIndex = end;
    };
    this.animationInterval = setInterval(reveal, stepMs);
  }

  private startBlurUntype(chars: HTMLSpanElement[]) {
    if (!this.isBrowser) return;
    const groupSize = this.activeConfig.revealGroup!;
    const blurAmount = this.activeConfig.blurAmount!;
    const totalMs = this.activeConfig.typingSpeed! * 1000;
    const stepMs = totalMs / Math.ceil(this.textLength / groupSize);

    let revealIndex = this.textLength;
    const untype = () => {
      if (revealIndex <= 0) {
        clearInterval(this.animationInterval);
        setTimeout(() => this.startBlurReveal(), 1000);
        return;
      }
      const start = Math.max(revealIndex - groupSize, 0);
      for (let i = start; i < revealIndex; i++) {
        this.renderer.setStyle(chars[i], 'filter', `blur(${blurAmount})`);
        this.renderer.setStyle(chars[i], 'opacity', '0.3');
      }
      revealIndex = start;
    };
    this.animationInterval = setInterval(untype, stepMs);
  }

  private shouldManageOverflow(): boolean {
    // Check if container has overflow hidden or if text would exceed reasonable bounds
    const element = this.el.nativeElement;
    const computedStyle = window.getComputedStyle(element);
    
    return computedStyle.overflow === 'hidden' || 
           computedStyle.overflowX === 'hidden' ||
           element.scrollWidth > element.clientWidth;
  }

  private manageTextOverflow(buffer: string[]): string[] {
    if (buffer.length <= this.maxVisibleChars) {
      return buffer;
    }

    // Implement sliding window effect - remove characters from the beginning
    // as new ones are added to maintain readable flow
    const visibleChars = Math.max(this.maxVisibleChars - 10, 20); // Keep some buffer
    return buffer.slice(-visibleChars);
  }

  private formatTextForDisplay(text: string): string {
    // Handle line breaks and word wrapping
    return text.replace(/\n/g, '<br>');
  }
}

/*
<!-- Basic usage - handles wrapping automatically -->
<div appTypingEffect>This is a long typing demo that will wrap to multiple lines if needed.</div>

<!-- In a constrained container with overflow hidden -->
<div style="width: 200px; overflow: hidden;" appTypingEffect>
  This text will use sliding window effect when it exceeds container width.
</div>

<!-- Multi-line text with line breaks -->
<div appTypingEffect>
  This is line one
  This is line two
  This is line three
</div>

<!-- With custom properties -->
<h1 
  appTypingEffect
  [config]="{
    typingSpeed: 3,
    blinkSpeed: 0.8,
    cursorColor: '#ff0000'
  }">
  Custom typing effect that adapts to content!
</h1>

<!-- Looping animation -->
<p 
  appTypingEffect
  [config]="{
    loop: true,
    loopDelay: 2,
    typingSpeed: 1.5
  }">
  This text will loop continuously with smart wrapping.
</p>
 */