import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingEffectDirective, TypingEffectConfig } from '../../directives/typing-effect/typing-effect.directive';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
    selector: 'app-section',
    imports: [CommonModule, TypingEffectDirective],
    animations: [fadeAnimation],
    templateUrl: './section.component.html',
    styleUrl: './section.component.scss'
})
export class SectionComponent {
    @Input() title?: string;
    @Input() subtitle?: string;
    @Input() tip: string = ''
    
    // Typing effect properties for title
    @Input() titleTypingEffect: boolean = false;
    @Input() titleTypingEffectConfig: TypingEffectConfig = {
        typingSpeed: 2,
        blinkSpeed: 0.5,
        cursorColor: 'currentColor',
        autoStart: true,
        loop: false,
    }

    // Typing effect properties for subtitle
    @Input() subtitleTypingEffect: boolean = false;
    @Input() subtitleTypingEffectConfig: TypingEffectConfig = {
        typingSpeed: 2,
        blinkSpeed: 0.5,
        cursorColor: 'currentColor',
        autoStart: true,
        loop: false,
        fontFamily: 'Courier New, Courier, monospace'
    }
}