/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     * @return {?}
     */
    TooltipDirective.prototype.getPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var strategy;
        /** @type {?} */
        var originPosition;
        /** @type {?} */
        var overlayPosition;
        /** @type {?} */
        var offsetX;
        /** @type {?} */
        var offsetY;
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
    };
    /**
     * @private
     * @param {?} strategy
     * @return {?}
     */
    TooltipDirective.prototype.withFallbackStrategy = /**
     * @private
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBYSxnQkFBZ0IsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUNMLE9BQU8sRUFFUCxhQUFhLEdBSWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRDtJQW1DRSwwQkFBc0IsT0FBZ0IsRUFBVSxnQkFBa0MsRUFBVSxVQUFzQjtRQUE1RixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUF6QmxILGFBQVEsR0FBVyxLQUFLLENBQUM7UUFFekIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQVl4QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBSXZCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBS3VGLENBQUM7Ozs7O0lBQ3RILHFDQUFVOzs7O0lBQVYsVUFBVyxRQUFnQjtRQUN6QixPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxpQ0FBTTs7OztJQUFOLFVBQU8sSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMs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Q2dCOztJQUNoQixvQ0FDeUI7O0lBQ3pCLGdDQUN3Qjs7SUFDeEIsZ0NBQ2E7O0lBQ2Isa0NBQ2U7O0lBQ2YscUNBQ21COztJQUNuQixtQ0FDaUI7O0lBQ2pCLGtDQUNnQjs7SUFDaEIsa0NBQ3VCOztJQUN2QixtQ0FDaUI7O0lBQ2pCLHVDQUM2Qjs7SUFDN0Isd0NBQzhCOzs7OztJQUM5QiwyQ0FBNEM7Ozs7O0lBQzVDLGtDQUE2Qzs7Ozs7SUFDN0Msc0NBQStCOzs7OztJQUVuQixtQ0FBMEI7Ozs7O0lBQUUsNENBQTBDOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5UmVmLFxuICBPdmVybGF5Q29uZmlnLFxuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sXG4gIE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmRhdGEtaGludF0nOiAndG9vbHRpcCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwUG9zaXRpb24nKVxuICBwb3NpdGlvbjogc3RyaW5nID0gJ3RvcCc7XG4gIEBJbnB1dCgndG9vbHRpcFR5cGUnKVxuICB0eXBlOiBzdHJpbmcgPSAnbm9ybWFsJztcbiAgQElucHV0KCd0b29sdGlwU2l6ZScpXG4gIHNpemU6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwQm91bmNlJylcbiAgYm91bmNlOiBzdHJpbmc7XG4gIEBJbnB1dCgndG9vbHRpcE5vQW5pbWF0ZScpXG4gIG5vQW5pbWF0ZTogYm9vbGVhbjtcbiAgQElucHV0KCd0b29sdGlwUm91bmRlZCcpXG4gIHJvdW5kZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndG9vbHRpcEFsd2F5cycpXG4gIGFsd2F5czogYm9vbGVhbjtcbiAgQElucHV0KCd0b29sdGlwQWN0aXZlJylcbiAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCd0b29sdGlwUHJlbGluZScpXG4gIHByZWxpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgncmVtb3ZlVG9vbHRpcEFycm93JylcbiAgcmVtb3ZlQXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd0b29sdGlwQXV0b1Bvc2l0aW9uJylcbiAgYXV0b1Bvc2l0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgdG9vbHRpcEluc3RhbmNlOiBOb3ZvVG9vbHRpcCB8IG51bGw7XG4gIHByaXZhdGUgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Tm92b1Rvb2x0aXA+O1xuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuICBpc1Bvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcG9zaXRpb24udG9Mb3dlckNhc2UoKSA9PT0gKHRoaXMucG9zaXRpb24gfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gKHRoaXMudHlwZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlzU2l6ZShzaXplOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc2l6ZS50b0xvd2VyQ2FzZSgpID09PSAodGhpcy5zaXplIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuYWN0aXZlICYmICF0aGlzLmFsd2F5cykge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLmFsd2F5cykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5hbHdheXMgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMuYWx3YXlzKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJsYXlTdGF0ZSA9IG5ldyBPdmVybGF5Q29uZmlnKCk7XG4gICAgb3ZlcmxheVN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5hbHdheXMpIHtcbiAgICAgIG92ZXJsYXlTdGF0ZS5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKTtcbiAgICB9XG4gICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xuXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5U3RhdGUpO1xuXG4gICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMucG9ydGFsID0gdGhpcy5wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbChOb3ZvVG9vbHRpcCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblxuICAgIGxldCB0b29sdGlwSW5zdGFuY2UgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKS5pbnN0YW5jZTtcbiAgICB0b29sdGlwSW5zdGFuY2UubWVzc2FnZSA9IHRoaXMudG9vbHRpcDtcbiAgICB0b29sdGlwSW5zdGFuY2UudG9vbHRpcFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgdG9vbHRpcEluc3RhbmNlLnJvdW5kZWQgPSB0aGlzLnJvdW5kZWQ7XG4gICAgdG9vbHRpcEluc3RhbmNlLnNpemUgPSB0aGlzLnNpemU7XG4gICAgdG9vbHRpcEluc3RhbmNlLnByZWxpbmUgPSB0aGlzLnByZWxpbmU7XG4gICAgdG9vbHRpcEluc3RhbmNlLm5vQW5pbWF0ZSA9IHRoaXMubm9BbmltYXRlO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5wb3NpdGlvbiA9IHRoaXMucmVtb3ZlQXJyb3cgPyAnbm8tYXJyb3cnIDogdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3NpdGlvbigpOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBsZXQgc3RyYXRlZ3k6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gICAgbGV0IG9yaWdpblBvc2l0aW9uOiBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb247XG4gICAgbGV0IG92ZXJsYXlQb3NpdGlvbjogT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbjtcbiAgICBsZXQgb2Zmc2V0WDogbnVtYmVyO1xuICAgIGxldCBvZmZzZXRZOiBudW1iZXI7XG5cbiAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicgfTtcbiAgICAgICAgb2Zmc2V0WCA9IDg7XG4gICAgICAgIG9mZnNldFkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ2JvdHRvbScgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAndG9wJyB9O1xuICAgICAgICBvZmZzZXRYID0gMDtcbiAgICAgICAgb2Zmc2V0WSA9IDg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAndG9wJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICdib3R0b20nIH07XG4gICAgICAgIG9mZnNldFggPSAwO1xuICAgICAgICBvZmZzZXRZID0gLTg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdjZW50ZXInIH07XG4gICAgICAgIG9mZnNldFggPSAtODtcbiAgICAgICAgb2Zmc2V0WSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLWxlZnQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9O1xuICAgICAgICBvZmZzZXRYID0gODtcbiAgICAgICAgb2Zmc2V0WSA9IC04O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfTtcbiAgICAgICAgb2Zmc2V0WCA9IDg7XG4gICAgICAgIG9mZnNldFkgPSA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH07XG4gICAgICAgIG9mZnNldFggPSAtODtcbiAgICAgICAgb2Zmc2V0WSA9IC04O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH07XG4gICAgICAgIG9mZnNldFggPSAtODtcbiAgICAgICAgb2Zmc2V0WSA9IDg7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5lbGVtZW50UmVmLCBvcmlnaW5Qb3NpdGlvbiwgb3ZlcmxheVBvc2l0aW9uKVxuICAgICAgLndpdGhPZmZzZXRYKG9mZnNldFgpXG4gICAgICAud2l0aE9mZnNldFkob2Zmc2V0WSk7XG5cbiAgICByZXR1cm4gdGhpcy5hdXRvUG9zaXRpb24gPyB0aGlzLndpdGhGYWxsYmFja1N0cmF0ZWd5KHN0cmF0ZWd5KSA6IHN0cmF0ZWd5O1xuICB9XG4gIHByaXZhdGUgd2l0aEZhbGxiYWNrU3RyYXRlZ3koc3RyYXRlZ3k6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBzdHJhdGVneVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ3RvcCcgfSwgMCwgOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0sIDAsIDgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH0sIDgsIDApXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdjZW50ZXInIH0sIC04LCAwKVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScgfSwgMCwgLTgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSwgMCwgOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LCAwLCAtOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0sIDAsIC04KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LCA4LCAtOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSwgOCwgOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSwgLTgsIC04KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LCAtOCwgOCk7XG5cbiAgICByZXR1cm4gc3RyYXRlZ3k7XG4gIH1cbn1cbiJdfQ==