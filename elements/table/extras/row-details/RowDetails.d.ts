import { ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { ComponentUtils } from './../../../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
export declare class RowDetails implements OnInit {
    private element;
    private componentUtils;
    container: ViewContainerRef;
    data: any;
    renderer: any;
    value: any;
    constructor(element: ElementRef, componentUtils: ComponentUtils);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<RowDetails, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RowDetails, "novo-row-details", never, { "data": "data"; "renderer": "renderer"; }, {}, never, never>;
}
