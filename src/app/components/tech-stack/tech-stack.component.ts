import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';

const imageDir = "techStackIcons";

export const techStackVariable: TechItem[] = [
    { icon: `${imageDir}/angular-original.svg`, name: "Angular" },
    { icon: `${imageDir}/react-original-wordmark.svg`, name: "React" },
    { icon: `${imageDir}/redux-original.svg`, name: "Redux" },
    { icon: `${imageDir}/css3-plain-wordmark.svg`, name: "CSS" },
    { icon: `${imageDir}/html5-original.svg`, name: "HTML5" },
    { icon: `${imageDir}/javascript-original.svg`, name: "JavaScript" },
    { icon: `${imageDir}/typescript-original.svg`, name: "TypeScript" },
    { icon: `${imageDir}/firebase-plain-wordmark.svg`, name: "Firebase" },
    { icon: `${imageDir}/mongodb-original-wordmark.svg`, name: "MongoDB" },
    { icon: `${imageDir}/mongoose-original-wordmark.svg`, name: "Mongoose" },
    { icon: `${imageDir}/express-original-wordmark.svg`, name: "Express" },
    { icon: `${imageDir}/mysql-original-wordmark.svg`, name: "MySQL" },
    { icon: `${imageDir}/bootstrap-original-wordmark.svg`, name: "Bootstrap" },
    { icon: `${imageDir}/tailwindcss-original.svg`, name: "Tailwind" },
    { icon: `${imageDir}/nodejs-original-wordmark.svg`, name: "NodeJS" },
    { icon: `${imageDir}/nextjs-original-wordmark.svg`, name: "NextJS" },
    { icon: `${imageDir}/githubactions-original-wordmark.svg`, name: "GitHub Actions" },
    { icon: `${imageDir}/git-original-wordmark.svg`, name: "Git" },
    { icon: `${imageDir}/python-original-wordmark.svg`, name: "Python" },
    { icon: `${imageDir}/apache-plain-wordmark.svg`, name: "Apache" },
    { icon: `${imageDir}/java-original-wordmark.svg`, name: "Java" },
    { icon: `${imageDir}/vscode-original.svg`, name: "VSCode" },
    { icon: `${imageDir}/django-plain-wordmark.svg`, name: "Django" },
    { icon: `${imageDir}/graphql-plain-wordmark.svg`, name: "GraphQL" },
    { icon: `${imageDir}/d3js-original.svg`, name: "D3JS" }
];

export interface TechItem {
    icon: string;
    name: string;
    color?: string;
    category?: 'frontend' | 'backend' | 'database' | 'devtools';
}

export interface TechCategory {
    title: string;
    items: TechItem[];
}

@Component({
    selector: 'app-tech-stack',
    imports: [CommonModule, ImageViewerDirective],
    templateUrl: './tech-stack.component.html',
    styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
    @Input() techStack: TechItem[] = techStackVariable;
    @Input() categories: TechCategory[] = [];
    @Input() displayMode: 'pills' | 'cards' | 'bar' = 'pills';
    @Input() techNames: string[] = []; // For bar mode - array of tech names to display

    get categorizedTech(): TechCategory[] {
        if (this.categories.length > 0) {
            return this.categories;
        }

        // Auto-categorize based on tech items
        const frontend = this.techStack.filter(tech =>
            ['Angular', 'React', 'Redux', 'CSS', 'HTML5', 'JavaScript', 'TypeScript', 'NextJS', 'Bootstrap', 'Tailwind', 'D3JS'].includes(tech.name)
        );

        const backend = this.techStack.filter(tech =>
            ['NodeJS', 'Express', 'Django', 'Python', 'Java', 'Apache'].includes(tech.name)
        );

        const database = this.techStack.filter(tech =>
            ['MongoDB', 'Mongoose', 'MySQL', 'Firebase', 'GraphQL'].includes(tech.name)
        );

        const devtools = this.techStack.filter(tech =>
            ['Git', 'GitHub Actions'].includes(tech.name)
        );

        return [
            { title: 'Frontend', items: frontend },
            { title: 'Backend', items: backend },
            { title: 'DB/Services', items: database },
            { title: 'DevTools', items: devtools }
        ].filter(category => category.items.length > 0);
    }

    get barTechItems(): TechItem[] {
        if (!this.techNames || this.techNames.length === 0) {
            return [];
        }

        return this.techNames
            .map(name => this.techStack.find(tech => tech.name === name))
            .filter(tech => tech !== undefined) as TechItem[];
    }
}
