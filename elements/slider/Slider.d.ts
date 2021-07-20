import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
export declare class NovoSliderElement implements OnInit, OnDestroy {
    private element;
    labels: NovoLabelService;
    slides: any;
    currentSlide: number;
    start: boolean;
    end: boolean;
    currSlides: Array<any>;
    handleKeyDownFunc: any;
    currentClass: string;
    constructor(element: ElementRef, labels: NovoLabelService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleKeyDown(event: KeyboardEvent): void;
    changeSlide(direction: any): void;
    static ɵfac: i0.ɵɵFactoryDef<NovoSliderElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoSliderElement, "novo-slider", never, { "slides": "slides"; }, {}, never, ["div[slide]", "button"]>;
}
