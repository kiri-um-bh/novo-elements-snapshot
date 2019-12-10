/**
 * @fileoverview added by tsickle
 * Generated from: elements/tooltip/Tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { Directive, Input, HostListener, ViewContainerRef, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// APP
import { NovoTooltip } from './Tooltip.component';
export class TooltipDirective {
    /**
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} elementRef
     */
    constructor(overlay, viewContainerRef, elementRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.POSITIONS = {
            top: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetX: 0, offsetY: -8 },
            right: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: 8, offsetY: 0 },
            bottom: { originX: 'center', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetX: 0, offsetY: 8 },
            left: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -8, offsetY: 0 },
            'top-left': { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetX: 8, offsetY: -8 },
            'bottom-left': { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetX: 8, offsetY: 8 },
            'top-right': { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetX: -8, offsetY: -8 },
            'bottom-right': { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetX: -8, offsetY: 8 },
        };
        this.DEFAULT_POSITIONS = [
            { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetX: 0, offsetY: 8 },
            { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetX: 0, offsetY: 8 },
            { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: 8, offsetY: 0 },
            { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -8, offsetY: 0 },
            { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetX: 0, offsetY: -8 },
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetX: 0, offsetY: 8 },
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetX: 0, offsetY: -8 },
            { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetX: 0, offsetY: -8 },
            { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetX: 8, offsetY: -8 },
            { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetX: 8, offsetY: 8 },
            { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetX: -8, offsetY: -8 },
            { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetX: -8, offsetY: 8 },
        ];
        this.position = 'top';
        this.type = 'normal';
        this.active = true;
        this.removeArrow = false;
        this.autoPosition = false;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    isPosition(position) {
        return position.toLowerCase() === (this.position || '').toLowerCase();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isType(type) {
        return type.toLowerCase() === (this.type || '').toLowerCase();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    isSize(size) {
        return size.toLowerCase() === (this.size || '').toLowerCase();
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.tooltip && this.active && !this.always) {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.tooltip && this.always && this.active) {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    }
    /**
     * @private
     * @return {?}
     */
    show() {
        /** @type {?} */
        const overlayState = new OverlayConfig();
        overlayState.positionStrategy = this.getPosition(this.position, this.elementRef);
        if (this.always) {
            overlayState.scrollStrategy = this.overlay.scrollStrategies.reposition();
        }
        else {
            overlayState.scrollStrategy = this.overlay.scrollStrategies.close();
        }
        overlayState.scrollStrategy.enable();
        this.overlayRef = this.overlay.create(overlayState);
        this.overlayRef.detach();
        this.portal = this.portal || new ComponentPortal(NovoTooltip, this.viewContainerRef);
        /** @type {?} */
        const tooltipInstance = this.overlayRef.attach(this.portal).instance;
        tooltipInstance.message = this.tooltip;
        tooltipInstance.tooltipType = this.type;
        tooltipInstance.rounded = this.rounded;
        tooltipInstance.size = this.size;
        tooltipInstance.preline = this.preline;
        tooltipInstance.noAnimate = this.noAnimate;
        tooltipInstance.position = this.removeArrow ? 'no-arrow' : this.position;
    }
    /**
     * @private
     * @return {?}
     */
    hide() {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
    }
    /**
     * @private
     * @param {?} position
     * @param {?} origin
     * @return {?}
     */
    getPosition(position, origin) {
        /** @type {?} */
        const preferedPosition = this.POSITIONS[position];
        /** @type {?} */
        const positions = preferedPosition ? [preferedPosition, ...this.DEFAULT_POSITIONS] : this.DEFAULT_POSITIONS;
        return this.overlay
            .position()
            .flexibleConnectedTo(origin)
            .withPositions(positions)
            .withPush(false);
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip]',
                host: {
                    '[attr.data-hint]': 'tooltip',
                },
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef },
    { type: ElementRef }
];
TooltipDirective.propDecorators = {
    tooltip: [{ type: Input }],
    position: [{ type: Input, args: ['tooltipPosition',] }],
    type: [{ type: Input, args: ['tooltipType',] }],
    size: [{ type: Input, args: ['tooltipSize',] }],
    bounce: [{ type: Input, args: ['tooltipBounce',] }],
    noAnimate: [{ type: Input, args: ['tooltipNoAnimate',] }],
    rounded: [{ type: Input, args: ['tooltipRounded',] }],
    always: [{ type: Input, args: ['tooltipAlways',] }],
    active: [{ type: Input, args: ['tooltipActive',] }],
    preline: [{ type: Input, args: ['tooltipPreline',] }],
    removeArrow: [{ type: Input, args: ['removeTooltipArrow',] }],
    autoPosition: [{ type: Input, args: ['tooltipAutoPosition',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.POSITIONS;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.DEFAULT_POSITIONS;
    /** @type {?} */
    TooltipDirective.prototype.tooltip;
    /** @type {?} */
    TooltipDirective.prototype.position;
    /** @type {?} */
    TooltipDirective.prototype.type;
    /** @type {?} */
    TooltipDirective.prototype.size;
    /** @type {?} */
    TooltipDirective.prototype.bounce;
    /** @type {?} */
    TooltipDirective.prototype.noAnimate;
    /** @type {?} */
    TooltipDirective.prototype.rounded;
    /** @type {?} */
    TooltipDirective.prototype.always;
    /** @type {?} */
    TooltipDirective.prototype.active;
    /** @type {?} */
    TooltipDirective.prototype.preline;
    /** @type {?} */
    TooltipDirective.prototype.removeArrow;
    /** @type {?} */
    TooltipDirective.prototype.autoPosition;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQWEsZ0JBQWdCLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFDTCxPQUFPLEVBRVAsYUFBYSxHQUlkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFVbEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBeUMzQixZQUFzQixPQUFnQixFQUFVLGdCQUFrQyxFQUFVLFVBQXNCO1FBQTVGLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXhDMUcsY0FBUyxHQUFtRDtZQUNsRSxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzNHLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQzNHLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQzVHLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDM0csVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtZQUM5RyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUNoSCxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDaEgsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtTQUNuSCxDQUFDO1FBQ00sc0JBQWlCLEdBQTZCO1lBQ3BELEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDckcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUMvRixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQ3BHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUNyRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdEcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUNuRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDcEcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFF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LG9CQUFvQjsyQkFDMUIsS0FBSyxTQUFDLHFCQUFxQjsyQkFrQjNCLFlBQVksU0FBQyxZQUFZOzJCQU96QixZQUFZLFNBQUMsWUFBWTs7Ozs7OztJQTdEMUIscUNBU0U7Ozs7O0lBQ0YsNkNBYUU7O0lBRUYsbUNBQXlCOztJQUN6QixvQ0FBZ0U7O0lBQ2hFLGdDQUFzQzs7SUFDdEMsZ0NBQW1DOztJQUNuQyxrQ0FBdUM7O0lBQ3ZDLHFDQUE4Qzs7SUFDOUMsbUNBQTBDOztJQUMxQyxrQ0FBd0M7O0lBQ3hDLGtDQUFzQzs7SUFDdEMsbUNBQTBDOztJQUMxQyx1Q0FBaUQ7O0lBQ2pELHdDQUFtRDs7Ozs7SUFDbkQsa0NBQTZDOzs7OztJQUM3QyxzQ0FBK0I7Ozs7O0lBRW5CLG1DQUEwQjs7Ozs7SUFBRSw0Q0FBMEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE92ZXJsYXksXG4gIE92ZXJsYXlSZWYsXG4gIE92ZXJsYXlDb25maWcsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5T3JpZ2luLFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1Rvb2x0aXAgfSBmcm9tICcuL1Rvb2x0aXAuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTm92b1Rvb2x0aXBQb3NpdGlvbiA9ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3RvcC1sZWZ0JyB8ICdib3R0b20tbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tcmlnaHQnIHwgc3RyaW5nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmRhdGEtaGludF0nOiAndG9vbHRpcCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgUE9TSVRJT05TOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9ID0ge1xuICAgIHRvcDogeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICdib3R0b20nLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAtOCB9LFxuICAgIHJpZ2h0OiB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnY2VudGVyJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJywgb2Zmc2V0WDogOCwgb2Zmc2V0WTogMCB9LFxuICAgIGJvdHRvbTogeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcsIG9mZnNldFg6IDAsIG9mZnNldFk6IDggfSxcbiAgICBsZWZ0OiB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInLCBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnY2VudGVyJywgb2Zmc2V0WDogLTgsIG9mZnNldFk6IDAgfSxcbiAgICAndG9wLWxlZnQnOiB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJywgb2Zmc2V0WDogOCwgb2Zmc2V0WTogLTggfSxcbiAgICAnYm90dG9tLWxlZnQnOiB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJywgb2Zmc2V0WDogOCwgb2Zmc2V0WTogOCB9LFxuICAgICd0b3AtcmlnaHQnOiB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJywgb2Zmc2V0WDogLTgsIG9mZnNldFk6IC04IH0sXG4gICAgJ2JvdHRvbS1yaWdodCc6IHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnLCBvZmZzZXRYOiAtOCwgb2Zmc2V0WTogOCB9LFxuICB9O1xuICBwcml2YXRlIERFRkFVTFRfUE9TSVRJT05TOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXG4gICAgeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiA4IH0sXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiA4IH0sXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicsIG9mZnNldFg6IDgsIG9mZnNldFk6IDAgfSxcbiAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInLCBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnY2VudGVyJywgb2Zmc2V0WDogLTgsIG9mZnNldFk6IDAgfSxcbiAgICB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScsIG9mZnNldFg6IDAsIG9mZnNldFk6IC04IH0sXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJywgb2Zmc2V0WDogMCwgb2Zmc2V0WTogOCB9LFxuICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScsIG9mZnNldFg6IDAsIG9mZnNldFk6IC04IH0sXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAtOCB9LFxuICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nLCBvZmZzZXRYOiA4LCBvZmZzZXRZOiAtOCB9LFxuICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnLCBvZmZzZXRYOiA4LCBvZmZzZXRZOiA4IH0sXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScsIG9mZnNldFg6IC04LCBvZmZzZXRZOiAtOCB9LFxuICAgIHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnLCBvZmZzZXRYOiAtOCwgb2Zmc2V0WTogOCB9LFxuICBdO1xuXG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwUG9zaXRpb24nKSBwb3NpdGlvbjogTm92b1Rvb2x0aXBQb3NpdGlvbiA9ICd0b3AnO1xuICBASW5wdXQoJ3Rvb2x0aXBUeXBlJykgdHlwZSA9ICdub3JtYWwnO1xuICBASW5wdXQoJ3Rvb2x0aXBTaXplJykgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoJ3Rvb2x0aXBCb3VuY2UnKSBib3VuY2U6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwTm9BbmltYXRlJykgbm9BbmltYXRlOiBib29sZWFuO1xuICBASW5wdXQoJ3Rvb2x0aXBSb3VuZGVkJykgcm91bmRlZDogYm9vbGVhbjtcbiAgQElucHV0KCd0b29sdGlwQWx3YXlzJykgYWx3YXlzOiBib29sZWFuO1xuICBASW5wdXQoJ3Rvb2x0aXBBY3RpdmUnKSBhY3RpdmUgPSB0cnVlO1xuICBASW5wdXQoJ3Rvb2x0aXBQcmVsaW5lJykgcHJlbGluZTogYm9vbGVhbjtcbiAgQElucHV0KCdyZW1vdmVUb29sdGlwQXJyb3cnKSByZW1vdmVBcnJvdyA9IGZhbHNlO1xuICBASW5wdXQoJ3Rvb2x0aXBBdXRvUG9zaXRpb24nKSBhdXRvUG9zaXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOb3ZvVG9vbHRpcD47XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgaXNQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICh0aGlzLnBvc2l0aW9uIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaXNUeXBlKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICh0aGlzLnR5cGUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpc1NpemUoc2l6ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHNpemUudG9Mb3dlckNhc2UoKSA9PT0gKHRoaXMuc2l6ZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmFjdGl2ZSAmJiAhdGhpcy5hbHdheXMpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5hbHdheXMpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuYWx3YXlzICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLmFsd2F5cykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdygpOiB2b2lkIHtcbiAgICBjb25zdCBvdmVybGF5U3RhdGUgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuICAgIG92ZXJsYXlTdGF0ZS5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCB0aGlzLmVsZW1lbnRSZWYpO1xuXG4gICAgaWYgKHRoaXMuYWx3YXlzKSB7XG4gICAgICBvdmVybGF5U3RhdGUuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG92ZXJsYXlTdGF0ZS5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCk7XG4gICAgfVxuICAgIG92ZXJsYXlTdGF0ZS5zY3JvbGxTdHJhdGVneS5lbmFibGUoKTtcblxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheVN0YXRlKTtcblxuICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB0aGlzLnBvcnRhbCA9IHRoaXMucG9ydGFsIHx8IG5ldyBDb21wb25lbnRQb3J0YWwoTm92b1Rvb2x0aXAsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG5cbiAgICBjb25zdCB0b29sdGlwSW5zdGFuY2UgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKS5pbnN0YW5jZTtcbiAgICB0b29sdGlwSW5zdGFuY2UubWVzc2FnZSA9IHRoaXMudG9vbHRpcDtcbiAgICB0b29sdGlwSW5zdGFuY2UudG9vbHRpcFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgdG9vbHRpcEluc3RhbmNlLnJvdW5kZWQgPSB0aGlzLnJvdW5kZWQ7XG4gICAgdG9vbHRpcEluc3RhbmNlLnNpemUgPSB0aGlzLnNpemU7XG4gICAgdG9vbHRpcEluc3RhbmNlLnByZWxpbmUgPSB0aGlzLnByZWxpbmU7XG4gICAgdG9vbHRpcEluc3RhbmNlLm5vQW5pbWF0ZSA9IHRoaXMubm9BbmltYXRlO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5wb3NpdGlvbiA9IHRoaXMucmVtb3ZlQXJyb3cgPyAnbm8tYXJyb3cnIDogdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3NpdGlvbihwb3NpdGlvbjogTm92b1Rvb2x0aXBQb3NpdGlvbiwgb3JpZ2luOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lPcmlnaW4pOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHByZWZlcmVkUG9zaXRpb24gPSB0aGlzLlBPU0lUSU9OU1twb3NpdGlvbl07XG4gICAgY29uc3QgcG9zaXRpb25zID0gcHJlZmVyZWRQb3NpdGlvbiA/IFtwcmVmZXJlZFBvc2l0aW9uLCAuLi50aGlzLkRFRkFVTFRfUE9TSVRJT05TXSA6IHRoaXMuREVGQVVMVF9QT1NJVElPTlM7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKG9yaWdpbilcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcbiAgICAgIC53aXRoUHVzaChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==