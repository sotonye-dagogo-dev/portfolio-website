import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appImageViewer]',
    standalone: true
})
export class ImageViewerDirective {
    @Input() fullImage: string = '';
    private viewer: HTMLElement | null = null;

    constructor(private el: ElementRef) { }

    @HostListener('click')
    onClick() {
        this.openViewer();
    }

    private openViewer() {
        // Create viewer container
    this.viewer = document.createElement('div');
    this.viewer.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center';
    this.viewer.style.zIndex = '99999';

        // Create image element
        const img = document.createElement('img');
        img.src = this.fullImage;
        img.className = 'max-h-[90vh] max-w-[90vw] object-contain';

        // Add close functionality
        this.viewer.addEventListener('click', () => this.closeViewer());

        this.viewer.appendChild(img);
        document.body.appendChild(this.viewer);
    }

    private closeViewer() {
        if (this.viewer) {
            document.body.removeChild(this.viewer);
            this.viewer = null;
        }
    }
}