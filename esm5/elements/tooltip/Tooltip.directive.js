/**
 * @fileoverview added by tsickle
 * Generated from: elements/tooltip/Tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG
import { Directive, Input, HostListener, ViewContainerRef, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// APP
import { NovoTooltip } from './Tooltip.component';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(overlay, viewContainerRef, elementRef) {
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
    TooltipDirective.prototype.isPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        return position.toLowerCase() === (this.position || '').toLowerCase();
    };
    /**
     * @param {?} type
     * @return {?}
     */
    TooltipDirective.prototype.isType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type.toLowerCase() === (this.type || '').toLowerCase();
    };
    /**
     * @param {?} size
     * @return {?}
     */
    TooltipDirective.prototype.isSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return size.toLowerCase() === (this.size || '').toLowerCase();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.tooltip && this.active && !this.always) {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.tooltip && this.always && this.active) {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayState = new OverlayConfig();
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
        var tooltipInstance = this.overlayRef.attach(this.portal).instance;
        tooltipInstance.message = this.tooltip;
        tooltipInstance.tooltipType = this.type;
        tooltipInstance.rounded = this.rounded;
        tooltipInstance.size = this.size;
        tooltipInstance.preline = this.preline;
        tooltipInstance.noAnimate = this.noAnimate;
        tooltipInstance.position = this.removeArrow ? 'no-arrow' : this.position;
    };
    /**
     * @private
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
    };
    /**
     * @private
     * @param {?} position
     * @param {?} origin
     * @return {?}
     */
    TooltipDirective.prototype.getPosition = /**
     * @private
     * @param {?} position
     * @param {?} origin
     * @return {?}
     */
    function (position, origin) {
        /** @type {?} */
        var preferedPosition = this.POSITIONS[position];
        /** @type {?} */
        var positions = preferedPosition ? tslib_1.__spread([preferedPosition], this.DEFAULT_POSITIONS) : this.DEFAULT_POSITIONS;
        return this.overlay
            .position()
            .flexibleConnectedTo(origin)
            .withPositions(positions)
            .withPush(false);
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tooltip]',
                    host: {
                        '[attr.data-hint]': 'tooltip',
                    },
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: Overlay },
        { type: ViewContainerRef },
        { type: ElementRef }
    ]; };
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
    return TooltipDirective;
}());
export { TooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLGdCQUFnQixFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQ0wsT0FBTyxFQUVQLGFBQWEsR0FJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSWxEO0lBK0NFLDBCQUFzQixPQUFnQixFQUFVLGdCQUFrQyxFQUFVLFVBQXNCO1FBQTVGLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXhDMUcsY0FBUyxHQUFtRDtZQUNsRSxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzNHLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQzNHLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQzVHLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDM0csVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtZQUM5RyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUNoSCxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDaEgsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtTQUNuSCxDQUFDO1FBQ00sc0JBQWlCLEdBQTZCO1lBQ3BELEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDckcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUMvRixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQ3BHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUNyRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdEcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUNuRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDcEcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUs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Q3JCLEtBQUssU0FBQyxlQUFlOzBCQUNyQixLQUFLLFNBQUMsZ0JBQWdCOzhCQUN0QixLQUFLLFNBQUMsb0JBQW9COytCQUMxQixLQUFLLFNBQUMscUJBQXFCOytCQWtCM0IsWUFBWSxTQUFDLFlBQVk7K0JBT3pCLFlBQVksU0FBQyxZQUFZOztJQThENUIsdUJBQUM7Q0FBQSxBQWxJRCxJQWtJQztTQTVIWSxnQkFBZ0I7Ozs7OztJQUMzQixxQ0FTRTs7Ozs7SUFDRiw2Q0FhRTs7SUFFRixtQ0FBeUI7O0lBQ3pCLG9DQUFnRTs7SUFDaEUsZ0NBQXNDOztJQUN0QyxnQ0FBbUM7O0lBQ25DLGtDQUF1Qzs7SUFDdkMscUNBQThDOztJQUM5QyxtQ0FBMEM7O0lBQzFDLGtDQUF3Qzs7SUFDeEMsa0NBQXNDOztJQUN0QyxtQ0FBMEM7O0lBQzFDLHVDQUFpRDs7SUFDakQsd0NBQW1EOzs7OztJQUNuRCxrQ0FBNkM7Ozs7O0lBQzdDLHNDQUErQjs7Ozs7SUFFbkIsbUNBQTBCOzs7OztJQUFFLDRDQUEwQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheVJlZixcbiAgT3ZlcmxheUNvbmZpZyxcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lPcmlnaW4sXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOb3ZvVG9vbHRpcFBvc2l0aW9uID0gJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAndG9wLWxlZnQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1yaWdodCcgfCBzdHJpbmc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuZGF0YS1oaW50XSc6ICd0b29sdGlwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHJpdmF0ZSBQT1NJVElPTlM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gPSB7XG4gICAgdG9wOiB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScsIG9mZnNldFg6IDAsIG9mZnNldFk6IC04IH0sXG4gICAgcmlnaHQ6IHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdjZW50ZXInLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInLCBvZmZzZXRYOiA4LCBvZmZzZXRZOiAwIH0sXG4gICAgYm90dG9tOiB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJywgb2Zmc2V0WDogMCwgb2Zmc2V0WTogOCB9LFxuICAgIGxlZnQ6IHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdjZW50ZXInLCBvZmZzZXRYOiAtOCwgb2Zmc2V0WTogMCB9LFxuICAgICd0b3AtbGVmdCc6IHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nLCBvZmZzZXRYOiA4LCBvZmZzZXRZOiAtOCB9LFxuICAgICdib3R0b20tbGVmdCc6IHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnLCBvZmZzZXRYOiA4LCBvZmZzZXRZOiA4IH0sXG4gICAgJ3RvcC1yaWdodCc6IHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nLCBvZmZzZXRYOiAtOCwgb2Zmc2V0WTogLTggfSxcbiAgICAnYm90dG9tLXJpZ2h0JzogeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcsIG9mZnNldFg6IC04LCBvZmZzZXRZOiA4IH0sXG4gIH07XG4gIHByaXZhdGUgREVGQVVMVF9QT1NJVElPTlM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcbiAgICB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ3RvcCcsIG9mZnNldFg6IDAsIG9mZnNldFk6IDggfSxcbiAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcsIG9mZnNldFg6IDAsIG9mZnNldFk6IDggfSxcbiAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnY2VudGVyJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJywgb2Zmc2V0WDogOCwgb2Zmc2V0WTogMCB9LFxuICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdjZW50ZXInLCBvZmZzZXRYOiAtOCwgb2Zmc2V0WTogMCB9LFxuICAgIHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAnYm90dG9tJywgb2Zmc2V0WDogMCwgb2Zmc2V0WTogLTggfSxcbiAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiA4IH0sXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJywgb2Zmc2V0WDogMCwgb2Zmc2V0WTogLTggfSxcbiAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScsIG9mZnNldFg6IDAsIG9mZnNldFk6IC04IH0sXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScsIG9mZnNldFg6IDgsIG9mZnNldFk6IC04IH0sXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcsIG9mZnNldFg6IDgsIG9mZnNldFk6IDggfSxcbiAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJywgb2Zmc2V0WDogLTgsIG9mZnNldFk6IC04IH0sXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcsIG9mZnNldFg6IC04LCBvZmZzZXRZOiA4IH0sXG4gIF07XG5cbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoJ3Rvb2x0aXBQb3NpdGlvbicpIHBvc2l0aW9uOiBOb3ZvVG9vbHRpcFBvc2l0aW9uID0gJ3RvcCc7XG4gIEBJbnB1dCgndG9vbHRpcFR5cGUnKSB0eXBlID0gJ25vcm1hbCc7XG4gIEBJbnB1dCgndG9vbHRpcFNpemUnKSBzaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgndG9vbHRpcEJvdW5jZScpIGJvdW5jZTogc3RyaW5nO1xuICBASW5wdXQoJ3Rvb2x0aXBOb0FuaW1hdGUnKSBub0FuaW1hdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgndG9vbHRpcFJvdW5kZWQnKSByb3VuZGVkOiBib29sZWFuO1xuICBASW5wdXQoJ3Rvb2x0aXBBbHdheXMnKSBhbHdheXM6IGJvb2xlYW47XG4gIEBJbnB1dCgndG9vbHRpcEFjdGl2ZScpIGFjdGl2ZSA9IHRydWU7XG4gIEBJbnB1dCgndG9vbHRpcFByZWxpbmUnKSBwcmVsaW5lOiBib29sZWFuO1xuICBASW5wdXQoJ3JlbW92ZVRvb2x0aXBBcnJvdycpIHJlbW92ZUFycm93ID0gZmFsc2U7XG4gIEBJbnB1dCgndG9vbHRpcEF1dG9Qb3NpdGlvbicpIGF1dG9Qb3NpdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPE5vdm9Ub29sdGlwPjtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBpc1Bvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcG9zaXRpb24udG9Mb3dlckNhc2UoKSA9PT0gKHRoaXMucG9zaXRpb24gfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gKHRoaXMudHlwZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlzU2l6ZShzaXplOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc2l6ZS50b0xvd2VyQ2FzZSgpID09PSAodGhpcy5zaXplIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuYWN0aXZlICYmICF0aGlzLmFsd2F5cykge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLmFsd2F5cykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5hbHdheXMgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMuYWx3YXlzKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJsYXlTdGF0ZSA9IG5ldyBPdmVybGF5Q29uZmlnKCk7XG4gICAgb3ZlcmxheVN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHRoaXMuZWxlbWVudFJlZik7XG5cbiAgICBpZiAodGhpcy5hbHdheXMpIHtcbiAgICAgIG92ZXJsYXlTdGF0ZS5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKTtcbiAgICB9XG4gICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xuXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5U3RhdGUpO1xuXG4gICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMucG9ydGFsID0gdGhpcy5wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbChOb3ZvVG9vbHRpcCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblxuICAgIGNvbnN0IHRvb2x0aXBJbnN0YW5jZSA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpLmluc3RhbmNlO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5tZXNzYWdlID0gdGhpcy50b29sdGlwO1xuICAgIHRvb2x0aXBJbnN0YW5jZS50b29sdGlwVHlwZSA9IHRoaXMudHlwZTtcbiAgICB0b29sdGlwSW5zdGFuY2Uucm91bmRlZCA9IHRoaXMucm91bmRlZDtcbiAgICB0b29sdGlwSW5zdGFuY2Uuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB0b29sdGlwSW5zdGFuY2UucHJlbGluZSA9IHRoaXMucHJlbGluZTtcbiAgICB0b29sdGlwSW5zdGFuY2Uubm9BbmltYXRlID0gdGhpcy5ub0FuaW1hdGU7XG4gICAgdG9vbHRpcEluc3RhbmNlLnBvc2l0aW9uID0gdGhpcy5yZW1vdmVBcnJvdyA/ICduby1hcnJvdycgOiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBvc2l0aW9uKHBvc2l0aW9uOiBOb3ZvVG9vbHRpcFBvc2l0aW9uLCBvcmlnaW46IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneU9yaWdpbik6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3QgcHJlZmVyZWRQb3NpdGlvbiA9IHRoaXMuUE9TSVRJT05TW3Bvc2l0aW9uXTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBwcmVmZXJlZFBvc2l0aW9uID8gW3ByZWZlcmVkUG9zaXRpb24sIC4uLnRoaXMuREVGQVVMVF9QT1NJVElPTlNdIDogdGhpcy5ERUZBVUxUX1BPU0lUSU9OUztcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8ob3JpZ2luKVxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxuICAgICAgLndpdGhQdXNoKGZhbHNlKTtcbiAgfVxufVxuIl19