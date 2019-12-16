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
        overlayState.positionStrategy = this.getPosition();
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
        let tooltipInstance = this.overlayRef.attach(this.portal).instance;
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
     * @return {?}
     */
    getPosition() {
        /** @type {?} */
        let strategy;
        /** @type {?} */
        let originPosition;
        /** @type {?} */
        let overlayPosition;
        /** @type {?} */
        let offsetX;
        /** @type {?} */
        let offsetY;
        switch (this.position) {
            case 'right':
                originPosition = { originX: 'end', originY: 'center' };
                overlayPosition = { overlayX: 'start', overlayY: 'center' };
                offsetX = 8;
                offsetY = 0;
                break;
            case 'bottom':
                originPosition = { originX: 'center', originY: 'bottom' };
                overlayPosition = { overlayX: 'center', overlayY: 'top' };
                offsetX = 0;
                offsetY = 8;
                break;
            case 'top':
                originPosition = { originX: 'center', originY: 'top' };
                overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
                offsetX = 0;
                offsetY = -8;
                break;
            case 'left':
                originPosition = { originX: 'start', originY: 'center' };
                overlayPosition = { overlayX: 'end', overlayY: 'center' };
                offsetX = -8;
                offsetY = 0;
                break;
            case 'top-left':
                originPosition = { originX: 'start', originY: 'top' };
                overlayPosition = { overlayX: 'end', overlayY: 'bottom' };
                offsetX = 8;
                offsetY = -8;
                break;
            case 'bottom-left':
                originPosition = { originX: 'start', originY: 'bottom' };
                overlayPosition = { overlayX: 'end', overlayY: 'top' };
                offsetX = 8;
                offsetY = 8;
                break;
            case 'top-right':
                originPosition = { originX: 'end', originY: 'top' };
                overlayPosition = { overlayX: 'start', overlayY: 'bottom' };
                offsetX = -8;
                offsetY = -8;
                break;
            case 'bottom-right':
                originPosition = { originX: 'end', originY: 'bottom' };
                overlayPosition = { overlayX: 'start', overlayY: 'top' };
                offsetX = -8;
                offsetY = 8;
                break;
            default:
                break;
        }
        strategy = this.overlay
            .position()
            .connectedTo(this.elementRef, originPosition, overlayPosition)
            .withOffsetX(offsetX)
            .withOffsetY(offsetY);
        return this.autoPosition ? this.withFallbackStrategy(strategy) : strategy;
    }
    /**
     * @private
     * @param {?} strategy
     * @return {?}
     */
    withFallbackStrategy(strategy) {
        strategy
            .withFallbackPosition({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }, 0, 8)
            .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }, 0, 8)
            .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }, 8, 0)
            .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }, -8, 0)
            .withFallbackPosition({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }, 0, -8)
            .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }, 0, 8)
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, 0, -8)
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }, 0, -8)
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }, 8, -8)
            .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }, 8, 8)
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, -8, -8)
            .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }, -8, 8);
        return strategy;
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
    TooltipDirective.prototype.tooltipInstance;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQWEsZ0JBQWdCLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFDTCxPQUFPLEVBRVAsYUFBYSxHQUlkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRbEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBNkIzQixZQUFzQixPQUFnQixFQUFVLGdCQUFrQyxFQUFVLFVBQXNCO1FBQTVGLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXpCbEgsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUV6QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBWXhCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFJdkIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFLdUYsQ0FBQzs7Ozs7SUFDdEgsVUFBVSxDQUFDLFFBQWdCO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMs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QUNpQjs7SUFDakIsdUNBQzZCOztJQUM3Qix3Q0FDOEI7Ozs7O0lBQzlCLDJDQUE0Qzs7Ozs7SUFDNUMsa0NBQTZDOzs7OztJQUM3QyxzQ0FBK0I7Ozs7O0lBRW5CLG1DQUEwQjs7Ozs7SUFBRSw0Q0FBMEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE92ZXJsYXksXG4gIE92ZXJsYXlSZWYsXG4gIE92ZXJsYXlDb25maWcsXG4gIENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Ub29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuZGF0YS1oaW50XSc6ICd0b29sdGlwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoJ3Rvb2x0aXBQb3NpdGlvbicpXG4gIHBvc2l0aW9uOiBzdHJpbmcgPSAndG9wJztcbiAgQElucHV0KCd0b29sdGlwVHlwZScpXG4gIHR5cGU6IHN0cmluZyA9ICdub3JtYWwnO1xuICBASW5wdXQoJ3Rvb2x0aXBTaXplJylcbiAgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoJ3Rvb2x0aXBCb3VuY2UnKVxuICBib3VuY2U6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwTm9BbmltYXRlJylcbiAgbm9BbmltYXRlOiBib29sZWFuO1xuICBASW5wdXQoJ3Rvb2x0aXBSb3VuZGVkJylcbiAgcm91bmRlZDogYm9vbGVhbjtcbiAgQElucHV0KCd0b29sdGlwQWx3YXlzJylcbiAgYWx3YXlzOiBib29sZWFuO1xuICBASW5wdXQoJ3Rvb2x0aXBBY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3Rvb2x0aXBQcmVsaW5lJylcbiAgcHJlbGluZTogYm9vbGVhbjtcbiAgQElucHV0KCdyZW1vdmVUb29sdGlwQXJyb3cnKVxuICByZW1vdmVBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3Rvb2x0aXBBdXRvUG9zaXRpb24nKVxuICBhdXRvUG9zaXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwSW5zdGFuY2U6IE5vdm9Ub29sdGlwIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOb3ZvVG9vbHRpcD47XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4gIGlzUG9zaXRpb24ocG9zaXRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpID09PSAodGhpcy5wb3NpdGlvbiB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlzVHlwZSh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZS50b0xvd2VyQ2FzZSgpID09PSAodGhpcy50eXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaXNTaXplKHNpemU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzaXplLnRvTG93ZXJDYXNlKCkgPT09ICh0aGlzLnNpemUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5hY3RpdmUgJiYgIXRoaXMuYWx3YXlzKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMuYWx3YXlzKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmFsd2F5cyAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5hbHdheXMpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3coKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheVN0YXRlID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBvdmVybGF5U3RhdGUucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcblxuICAgIGlmICh0aGlzLmFsd2F5cykge1xuICAgICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdmVybGF5U3RhdGUuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpO1xuICAgIH1cbiAgICBvdmVybGF5U3RhdGUuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XG5cbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlTdGF0ZSk7XG5cbiAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5wb3J0YWwgPSB0aGlzLnBvcnRhbCB8fCBuZXcgQ29tcG9uZW50UG9ydGFsKE5vdm9Ub29sdGlwLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXG4gICAgbGV0IHRvb2x0aXBJbnN0YW5jZSA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpLmluc3RhbmNlO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5tZXNzYWdlID0gdGhpcy50b29sdGlwO1xuICAgIHRvb2x0aXBJbnN0YW5jZS50b29sdGlwVHlwZSA9IHRoaXMudHlwZTtcbiAgICB0b29sdGlwSW5zdGFuY2Uucm91bmRlZCA9IHRoaXMucm91bmRlZDtcbiAgICB0b29sdGlwSW5zdGFuY2Uuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB0b29sdGlwSW5zdGFuY2UucHJlbGluZSA9IHRoaXMucHJlbGluZTtcbiAgICB0b29sdGlwSW5zdGFuY2Uubm9BbmltYXRlID0gdGhpcy5ub0FuaW1hdGU7XG4gICAgdG9vbHRpcEluc3RhbmNlLnBvc2l0aW9uID0gdGhpcy5yZW1vdmVBcnJvdyA/ICduby1hcnJvdycgOiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGxldCBzdHJhdGVneTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgICBsZXQgb3JpZ2luUG9zaXRpb246IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbjtcbiAgICBsZXQgb3ZlcmxheVBvc2l0aW9uOiBPdmVybGF5Q29ubmVjdGlvblBvc2l0aW9uO1xuICAgIGxldCBvZmZzZXRYOiBudW1iZXI7XG4gICAgbGV0IG9mZnNldFk6IG51bWJlcjtcblxuICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdjZW50ZXInIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9O1xuICAgICAgICBvZmZzZXRYID0gODtcbiAgICAgICAgb2Zmc2V0WSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAnYm90dG9tJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnIH07XG4gICAgICAgIG9mZnNldFggPSAwO1xuICAgICAgICBvZmZzZXRZID0gODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICd0b3AnIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScgfTtcbiAgICAgICAgb2Zmc2V0WCA9IDA7XG4gICAgICAgIG9mZnNldFkgPSAtODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2NlbnRlcicgfTtcbiAgICAgICAgb2Zmc2V0WCA9IC04O1xuICAgICAgICBvZmZzZXRZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtbGVmdCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH07XG4gICAgICAgIG9mZnNldFggPSA4O1xuICAgICAgICBvZmZzZXRZID0gLTg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9O1xuICAgICAgICBvZmZzZXRYID0gODtcbiAgICAgICAgb2Zmc2V0WSA9IDg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfTtcbiAgICAgICAgb2Zmc2V0WCA9IC04O1xuICAgICAgICBvZmZzZXRZID0gLTg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfTtcbiAgICAgICAgb2Zmc2V0WCA9IC04O1xuICAgICAgICBvZmZzZXRZID0gODtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnRSZWYsIG9yaWdpblBvc2l0aW9uLCBvdmVybGF5UG9zaXRpb24pXG4gICAgICAud2l0aE9mZnNldFgob2Zmc2V0WClcbiAgICAgIC53aXRoT2Zmc2V0WShvZmZzZXRZKTtcblxuICAgIHJldHVybiB0aGlzLmF1dG9Qb3NpdGlvbiA/IHRoaXMud2l0aEZhbGxiYWNrU3RyYXRlZ3koc3RyYXRlZ3kpIDogc3RyYXRlZ3k7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRmFsbGJhY2tTdHJhdGVneShzdHJhdGVneTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHN0cmF0ZWd5XG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAndG9wJyB9LCAwLCA4KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSwgMCwgOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicgfSwgOCwgMClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2NlbnRlcicgfSwgLTgsIDApXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAnYm90dG9tJyB9LCAwLCAtOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LCAwLCA4KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sIDAsIC04KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSwgMCwgLTgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0sIDgsIC04KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9LCA4LCA4KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LCAtOCwgLTgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0sIC04LCA4KTtcblxuICAgIHJldHVybiBzdHJhdGVneTtcbiAgfVxufVxuIl19