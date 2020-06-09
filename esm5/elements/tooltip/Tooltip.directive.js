// NG
import { Directive, Input, HostListener, ViewContainerRef, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// APP
import { NovoTooltip } from './Tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
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
    TooltipDirective.prototype.isPosition = function (position) {
        return position.toLowerCase() === (this.position || '').toLowerCase();
    };
    TooltipDirective.prototype.isType = function (type) {
        return type.toLowerCase() === (this.type || '').toLowerCase();
    };
    TooltipDirective.prototype.isSize = function (size) {
        return size.toLowerCase() === (this.size || '').toLowerCase();
    };
    TooltipDirective.prototype.onMouseEnter = function () {
        if (this.tooltip && this.active && !this.always) {
            this.show();
        }
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    };
    TooltipDirective.prototype.ngOnInit = function () {
        if (this.tooltip && this.always && this.active) {
            this.show();
        }
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    };
    TooltipDirective.prototype.show = function () {
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
        var tooltipInstance = this.overlayRef.attach(this.portal).instance;
        tooltipInstance.message = this.tooltip;
        tooltipInstance.tooltipType = this.type;
        tooltipInstance.rounded = this.rounded;
        tooltipInstance.size = this.size;
        tooltipInstance.preline = this.preline;
        tooltipInstance.noAnimate = this.noAnimate;
        tooltipInstance.position = this.removeArrow ? 'no-arrow' : this.position;
    };
    TooltipDirective.prototype.hide = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
    };
    TooltipDirective.prototype.getPosition = function () {
        var strategy;
        var originPosition;
        var overlayPosition;
        var offsetX;
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
    TooltipDirective.prototype.withFallbackStrategy = function (strategy) {
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
    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    TooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""]], hostVars: 1, hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } if (rf & 2) {
            i0.ɵɵattribute("data-hint", ctx.tooltip);
        } }, inputs: { tooltip: "tooltip", position: ["tooltipPosition", "position"], type: ["tooltipType", "type"], size: ["tooltipSize", "size"], bounce: ["tooltipBounce", "bounce"], noAnimate: ["tooltipNoAnimate", "noAnimate"], rounded: ["tooltipRounded", "rounded"], always: ["tooltipAlways", "always"], active: ["tooltipActive", "active"], preline: ["tooltipPreline", "preline"], removeArrow: ["removeTooltipArrow", "removeArrow"], autoPosition: ["tooltipAutoPosition", "autoPosition"] } });
    return TooltipDirective;
}());
export { TooltipDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tooltip]',
                host: {
                    '[attr.data-hint]': 'tooltip',
                },
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i0.ElementRef }]; }, { tooltip: [{
            type: Input
        }], position: [{
            type: Input,
            args: ['tooltipPosition']
        }], type: [{
            type: Input,
            args: ['tooltipType']
        }], size: [{
            type: Input,
            args: ['tooltipSize']
        }], bounce: [{
            type: Input,
            args: ['tooltipBounce']
        }], noAnimate: [{
            type: Input,
            args: ['tooltipNoAnimate']
        }], rounded: [{
            type: Input,
            args: ['tooltipRounded']
        }], always: [{
            type: Input,
            args: ['tooltipAlways']
        }], active: [{
            type: Input,
            args: ['tooltipActive']
        }], preline: [{
            type: Input,
            args: ['tooltipPreline']
        }], removeArrow: [{
            type: Input,
            args: ['removeTooltipArrow']
        }], autoPosition: [{
            type: Input,
            args: ['tooltipAutoPosition']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLGdCQUFnQixFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQ0wsT0FBTyxFQUVQLGFBQWEsR0FJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxNQUFNO0FBQ04sT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFbEQ7SUFtQ0UsMEJBQXNCLE9BQWdCLEVBQVUsZ0JBQWtDLEVBQVUsVUFBc0I7UUFBNUYsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekJsSCxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBRXpCLFNBQUksR0FBVyxRQUFRLENBQUM7UUFZeEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUl2QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUt1RixDQUFDO0lBQ3RILHFDQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN6QixPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEUsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FB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M0IsWUFBWTttQkFBQyxZQUFZOztrQkFPekIsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE92ZXJsYXksXG4gIE92ZXJsYXlSZWYsXG4gIE92ZXJsYXlDb25maWcsXG4gIENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Ub29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuZGF0YS1oaW50XSc6ICd0b29sdGlwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoJ3Rvb2x0aXBQb3NpdGlvbicpXG4gIHBvc2l0aW9uOiBzdHJpbmcgPSAndG9wJztcbiAgQElucHV0KCd0b29sdGlwVHlwZScpXG4gIHR5cGU6IHN0cmluZyA9ICdub3JtYWwnO1xuICBASW5wdXQoJ3Rvb2x0aXBTaXplJylcbiAgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoJ3Rvb2x0aXBCb3VuY2UnKVxuICBib3VuY2U6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwTm9BbmltYXRlJylcbiAgbm9BbmltYXRlOiBib29sZWFuO1xuICBASW5wdXQoJ3Rvb2x0aXBSb3VuZGVkJylcbiAgcm91bmRlZDogYm9vbGVhbjtcbiAgQElucHV0KCd0b29sdGlwQWx3YXlzJylcbiAgYWx3YXlzOiBib29sZWFuO1xuICBASW5wdXQoJ3Rvb2x0aXBBY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3Rvb2x0aXBQcmVsaW5lJylcbiAgcHJlbGluZTogYm9vbGVhbjtcbiAgQElucHV0KCdyZW1vdmVUb29sdGlwQXJyb3cnKVxuICByZW1vdmVBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3Rvb2x0aXBBdXRvUG9zaXRpb24nKVxuICBhdXRvUG9zaXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwSW5zdGFuY2U6IE5vdm9Ub29sdGlwIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOb3ZvVG9vbHRpcD47XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4gIGlzUG9zaXRpb24ocG9zaXRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpID09PSAodGhpcy5wb3NpdGlvbiB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlzVHlwZSh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZS50b0xvd2VyQ2FzZSgpID09PSAodGhpcy50eXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaXNTaXplKHNpemU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzaXplLnRvTG93ZXJDYXNlKCkgPT09ICh0aGlzLnNpemUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5hY3RpdmUgJiYgIXRoaXMuYWx3YXlzKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMuYWx3YXlzKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmFsd2F5cyAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5hbHdheXMpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3coKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheVN0YXRlID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBvdmVybGF5U3RhdGUucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcblxuICAgIGlmICh0aGlzLmFsd2F5cykge1xuICAgICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdmVybGF5U3RhdGUuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpO1xuICAgIH1cbiAgICBvdmVybGF5U3RhdGUuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XG5cbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlTdGF0ZSk7XG5cbiAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5wb3J0YWwgPSB0aGlzLnBvcnRhbCB8fCBuZXcgQ29tcG9uZW50UG9ydGFsKE5vdm9Ub29sdGlwLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXG4gICAgY29uc3QgdG9vbHRpcEluc3RhbmNlID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCkuaW5zdGFuY2U7XG4gICAgdG9vbHRpcEluc3RhbmNlLm1lc3NhZ2UgPSB0aGlzLnRvb2x0aXA7XG4gICAgdG9vbHRpcEluc3RhbmNlLnRvb2x0aXBUeXBlID0gdGhpcy50eXBlO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5yb3VuZGVkID0gdGhpcy5yb3VuZGVkO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5zaXplID0gdGhpcy5zaXplO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5wcmVsaW5lID0gdGhpcy5wcmVsaW5lO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5ub0FuaW1hdGUgPSB0aGlzLm5vQW5pbWF0ZTtcbiAgICB0b29sdGlwSW5zdGFuY2UucG9zaXRpb24gPSB0aGlzLnJlbW92ZUFycm93ID8gJ25vLWFycm93JyA6IHRoaXMucG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9zaXRpb24oKTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG4gICAgbGV0IHN0cmF0ZWd5OiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuICAgIGxldCBvcmlnaW5Qb3NpdGlvbjogT3JpZ2luQ29ubmVjdGlvblBvc2l0aW9uO1xuICAgIGxldCBvdmVybGF5UG9zaXRpb246IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb247XG4gICAgbGV0IG9mZnNldFg6IG51bWJlcjtcbiAgICBsZXQgb2Zmc2V0WTogbnVtYmVyO1xuXG4gICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH07XG4gICAgICAgIG9mZnNldFggPSA4O1xuICAgICAgICBvZmZzZXRZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICdib3R0b20nIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ3RvcCcgfTtcbiAgICAgICAgb2Zmc2V0WCA9IDA7XG4gICAgICAgIG9mZnNldFkgPSA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ3RvcCcgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAnYm90dG9tJyB9O1xuICAgICAgICBvZmZzZXRYID0gMDtcbiAgICAgICAgb2Zmc2V0WSA9IC04O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9O1xuICAgICAgICBvZmZzZXRYID0gLTg7XG4gICAgICAgIG9mZnNldFkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfTtcbiAgICAgICAgb2Zmc2V0WCA9IDg7XG4gICAgICAgIG9mZnNldFkgPSAtODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH07XG4gICAgICAgIG9mZnNldFggPSA4O1xuICAgICAgICBvZmZzZXRZID0gODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtcmlnaHQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9O1xuICAgICAgICBvZmZzZXRYID0gLTg7XG4gICAgICAgIG9mZnNldFkgPSAtODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9O1xuICAgICAgICBvZmZzZXRYID0gLTg7XG4gICAgICAgIG9mZnNldFkgPSA4O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudFJlZiwgb3JpZ2luUG9zaXRpb24sIG92ZXJsYXlQb3NpdGlvbilcbiAgICAgIC53aXRoT2Zmc2V0WChvZmZzZXRYKVxuICAgICAgLndpdGhPZmZzZXRZKG9mZnNldFkpO1xuXG4gICAgcmV0dXJuIHRoaXMuYXV0b1Bvc2l0aW9uID8gdGhpcy53aXRoRmFsbGJhY2tTdHJhdGVneShzdHJhdGVneSkgOiBzdHJhdGVneTtcbiAgfVxuICBwcml2YXRlIHdpdGhGYWxsYmFja1N0cmF0ZWd5KHN0cmF0ZWd5OiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG4gICAgc3RyYXRlZ3lcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnIH0sIDAsIDgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9LCAwLCA4KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9LCA4LCAwKVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9LCAtOCwgMClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICdib3R0b20nIH0sIDAsIC04KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0sIDAsIDgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSwgMCwgLTgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LCAwLCAtOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSwgOCwgLTgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0sIDgsIDgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sIC04LCAtOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSwgLTgsIDgpO1xuXG4gICAgcmV0dXJuIHN0cmF0ZWd5O1xuICB9XG59XG4iXX0=