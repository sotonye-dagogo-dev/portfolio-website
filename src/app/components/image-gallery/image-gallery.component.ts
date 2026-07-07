import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { galleryAnimation, imageExpandAnimation } from '../../animations/gallery.animation';

export interface GalleryCategory {
    title: string;
    items: any[];
}

@Component({
    selector: 'app-image-gallery',
    imports: [
        CommonModule,
        FontAwesomeModule,
        ImageViewerDirective,
        AnimatedBorderDirective,
        TechStackComponent
    ],
    animations: [imageExpandAnimation, galleryAnimation],
    templateUrl: './image-gallery.component.html',
    styleUrl: './image-gallery.component.scss'
})

export class ImageGalleryComponent implements OnInit {
    @Input() categories: GalleryCategory[] = [];
    faArrowLeft = faArrowLeft;
    faArrowRight = faArrowRight;
    faGithub = faGithub;

    // Change from single index to array of indexes
    currentIndexes: number[] = [];

    constructor() { }

    ngOnInit() {
        // Initialize indexes array when categories are loaded
        this.currentIndexes = new Array(this.categories.length).fill(0);
    }

    prevItem(categoryIndex: number) {
        const itemsLength = this.categories[categoryIndex]?.items.length || 0;
        if (itemsLength > 0) {
            this.currentIndexes[categoryIndex] = (this.currentIndexes[categoryIndex] - 1 + itemsLength) % itemsLength;
        }
    }

    nextItem(categoryIndex: number) {
        const itemsLength = this.categories[categoryIndex]?.items.length || 0;
        if (itemsLength > 0) {
            this.currentIndexes[categoryIndex] = (this.currentIndexes[categoryIndex] + 1) % itemsLength;
        }
    }

    getCurrentIndex(categoryIndex: number): number {
        return this.currentIndexes[categoryIndex] || 0;
    }
}