import { ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class NovoIconComponent implements AfterViewInit {
    element: ElementRef;
    private cdr;
    raised: boolean;
    size: string;
    theme: string;
    color: string;
    role: string;
    ariaLabel: string;
    alt: string;
    name: string;
    iconName: string;
    constructor(element: ElementRef, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
