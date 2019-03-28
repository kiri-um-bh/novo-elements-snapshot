import { ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
export declare class NovoTooltip {
    private overlay;
    private containerRef;
    message: string;
    hidden: boolean;
    tooltipType: string;
    rounded: boolean;
    size: string;
    positionStrategy: any;
    preline: boolean;
    noAnimate: boolean;
    position: string;
    constructor(overlay: Overlay, containerRef: ViewContainerRef);
}
