// NG
import { Directive, Input, HostListener, ViewContainerRef, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// APP
import { NovoTooltip } from './Tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class TooltipDirective {
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
    isPosition(position) {
        return position.toLowerCase() === (this.position || '').toLowerCase();
    }
    isType(type) {
        return type.toLowerCase() === (this.type || '').toLowerCase();
    }
    isSize(size) {
        return size.toLowerCase() === (this.size || '').toLowerCase();
    }
    onMouseEnter() {
        if (this.tooltip && this.active && !this.always) {
            this.show();
        }
    }
    onMouseLeave() {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    }
    ngOnInit() {
        if (this.tooltip && this.always && this.active) {
            this.show();
        }
    }
    ngOnDestroy() {
        if (this.overlayRef && !this.always) {
            this.hide();
            this.overlayRef.dispose();
        }
    }
    show() {
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
        const tooltipInstance = this.overlayRef.attach(this.portal).instance;
        tooltipInstance.message = this.tooltip;
        tooltipInstance.tooltipType = this.type;
        tooltipInstance.rounded = this.rounded;
        tooltipInstance.size = this.size;
        tooltipInstance.preline = this.preline;
        tooltipInstance.noAnimate = this.noAnimate;
        tooltipInstance.position = this.removeArrow ? 'no-arrow' : this.position;
    }
    hide() {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
    }
    getPosition() {
        let strategy;
        let originPosition;
        let overlayPosition;
        let offsetX;
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
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
TooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""]], hostVars: 1, hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } if (rf & 2) {
        i0.ɵɵattribute("data-hint", ctx.tooltip);
    } }, inputs: { tooltip: "tooltip", position: ["tooltipPosition", "position"], type: ["tooltipType", "type"], size: ["tooltipSize", "size"], bounce: ["tooltipBounce", "bounce"], noAnimate: ["tooltipNoAnimate", "noAnimate"], rounded: ["tooltipRounded", "rounded"], always: ["tooltipAlways", "always"], active: ["tooltipActive", "active"], preline: ["tooltipPreline", "preline"], removeArrow: ["removeTooltipArrow", "removeArrow"], autoPosition: ["tooltipAutoPosition", "autoPosition"] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLGdCQUFnQixFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQ0wsT0FBTyxFQUVQLGFBQWEsR0FJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxNQUFNO0FBQ04sT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFRbEQsTUFBTSxPQUFPLGdCQUFnQjtJQTZCM0IsWUFBc0IsT0FBZ0IsRUFBVSxnQkFBa0MsRUFBVSxVQUFzQjtRQUE1RixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUF6QmxILGFBQVEsR0FBVyxLQUFLLENBQUM7UUFFekIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQVl4QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBSXZCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBS3VGLENBQUM7SUFDdEgsVUFBVSxDQUFDLFFBQWdCO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4RSxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FB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IElucHV0LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5UmVmLFxuICBPdmVybGF5Q29uZmlnLFxuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sXG4gIE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmRhdGEtaGludF0nOiAndG9vbHRpcCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwUG9zaXRpb24nKVxuICBwb3NpdGlvbjogc3RyaW5nID0gJ3RvcCc7XG4gIEBJbnB1dCgndG9vbHRpcFR5cGUnKVxuICB0eXBlOiBzdHJpbmcgPSAnbm9ybWFsJztcbiAgQElucHV0KCd0b29sdGlwU2l6ZScpXG4gIHNpemU6IHN0cmluZztcbiAgQElucHV0KCd0b29sdGlwQm91bmNlJylcbiAgYm91bmNlOiBzdHJpbmc7XG4gIEBJbnB1dCgndG9vbHRpcE5vQW5pbWF0ZScpXG4gIG5vQW5pbWF0ZTogYm9vbGVhbjtcbiAgQElucHV0KCd0b29sdGlwUm91bmRlZCcpXG4gIHJvdW5kZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndG9vbHRpcEFsd2F5cycpXG4gIGFsd2F5czogYm9vbGVhbjtcbiAgQElucHV0KCd0b29sdGlwQWN0aXZlJylcbiAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCd0b29sdGlwUHJlbGluZScpXG4gIHByZWxpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgncmVtb3ZlVG9vbHRpcEFycm93JylcbiAgcmVtb3ZlQXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd0b29sdGlwQXV0b1Bvc2l0aW9uJylcbiAgYXV0b1Bvc2l0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgdG9vbHRpcEluc3RhbmNlOiBOb3ZvVG9vbHRpcCB8IG51bGw7XG4gIHByaXZhdGUgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Tm92b1Rvb2x0aXA+O1xuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuICBpc1Bvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcG9zaXRpb24udG9Mb3dlckNhc2UoKSA9PT0gKHRoaXMucG9zaXRpb24gfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gKHRoaXMudHlwZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlzU2l6ZShzaXplOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc2l6ZS50b0xvd2VyQ2FzZSgpID09PSAodGhpcy5zaXplIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuYWN0aXZlICYmICF0aGlzLmFsd2F5cykge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLmFsd2F5cykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5hbHdheXMgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMuYWx3YXlzKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJsYXlTdGF0ZSA9IG5ldyBPdmVybGF5Q29uZmlnKCk7XG4gICAgb3ZlcmxheVN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5hbHdheXMpIHtcbiAgICAgIG92ZXJsYXlTdGF0ZS5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKTtcbiAgICB9XG4gICAgb3ZlcmxheVN0YXRlLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xuXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5U3RhdGUpO1xuXG4gICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMucG9ydGFsID0gdGhpcy5wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbChOb3ZvVG9vbHRpcCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblxuICAgIGNvbnN0IHRvb2x0aXBJbnN0YW5jZSA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpLmluc3RhbmNlO1xuICAgIHRvb2x0aXBJbnN0YW5jZS5tZXNzYWdlID0gdGhpcy50b29sdGlwO1xuICAgIHRvb2x0aXBJbnN0YW5jZS50b29sdGlwVHlwZSA9IHRoaXMudHlwZTtcbiAgICB0b29sdGlwSW5zdGFuY2Uucm91bmRlZCA9IHRoaXMucm91bmRlZDtcbiAgICB0b29sdGlwSW5zdGFuY2Uuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB0b29sdGlwSW5zdGFuY2UucHJlbGluZSA9IHRoaXMucHJlbGluZTtcbiAgICB0b29sdGlwSW5zdGFuY2Uubm9BbmltYXRlID0gdGhpcy5ub0FuaW1hdGU7XG4gICAgdG9vbHRpcEluc3RhbmNlLnBvc2l0aW9uID0gdGhpcy5yZW1vdmVBcnJvdyA/ICduby1hcnJvdycgOiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGxldCBzdHJhdGVneTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgICBsZXQgb3JpZ2luUG9zaXRpb246IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbjtcbiAgICBsZXQgb3ZlcmxheVBvc2l0aW9uOiBPdmVybGF5Q29ubmVjdGlvblBvc2l0aW9uO1xuICAgIGxldCBvZmZzZXRYOiBudW1iZXI7XG4gICAgbGV0IG9mZnNldFk6IG51bWJlcjtcblxuICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdjZW50ZXInIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9O1xuICAgICAgICBvZmZzZXRYID0gODtcbiAgICAgICAgb2Zmc2V0WSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAnYm90dG9tJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnIH07XG4gICAgICAgIG9mZnNldFggPSAwO1xuICAgICAgICBvZmZzZXRZID0gODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICd0b3AnIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScgfTtcbiAgICAgICAgb2Zmc2V0WCA9IDA7XG4gICAgICAgIG9mZnNldFkgPSAtODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH07XG4gICAgICAgIG92ZXJsYXlQb3NpdGlvbiA9IHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2NlbnRlcicgfTtcbiAgICAgICAgb2Zmc2V0WCA9IC04O1xuICAgICAgICBvZmZzZXRZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtbGVmdCc6XG4gICAgICAgIG9yaWdpblBvc2l0aW9uID0geyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH07XG4gICAgICAgIG9mZnNldFggPSA4O1xuICAgICAgICBvZmZzZXRZID0gLTg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxuICAgICAgICBvcmlnaW5Qb3NpdGlvbiA9IHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfTtcbiAgICAgICAgb3ZlcmxheVBvc2l0aW9uID0geyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9O1xuICAgICAgICBvZmZzZXRYID0gODtcbiAgICAgICAgb2Zmc2V0WSA9IDg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfTtcbiAgICAgICAgb2Zmc2V0WCA9IC04O1xuICAgICAgICBvZmZzZXRZID0gLTg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcbiAgICAgICAgb3JpZ2luUG9zaXRpb24gPSB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9O1xuICAgICAgICBvdmVybGF5UG9zaXRpb24gPSB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfTtcbiAgICAgICAgb2Zmc2V0WCA9IC04O1xuICAgICAgICBvZmZzZXRZID0gODtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnRSZWYsIG9yaWdpblBvc2l0aW9uLCBvdmVybGF5UG9zaXRpb24pXG4gICAgICAud2l0aE9mZnNldFgob2Zmc2V0WClcbiAgICAgIC53aXRoT2Zmc2V0WShvZmZzZXRZKTtcblxuICAgIHJldHVybiB0aGlzLmF1dG9Qb3NpdGlvbiA/IHRoaXMud2l0aEZhbGxiYWNrU3RyYXRlZ3koc3RyYXRlZ3kpIDogc3RyYXRlZ3k7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRmFsbGJhY2tTdHJhdGVneShzdHJhdGVneTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHN0cmF0ZWd5XG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAndG9wJyB9LCAwLCA4KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSwgMCwgOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicgfSwgOCwgMClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2NlbnRlcicgfSwgLTgsIDApXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAnYm90dG9tJyB9LCAwLCAtOClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LCAwLCA4KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sIDAsIC04KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSwgMCwgLTgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0sIDgsIC04KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9LCA4LCA4KVxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LCAtOCwgLTgpXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0sIC04LCA4KTtcblxuICAgIHJldHVybiBzdHJhdGVneTtcbiAgfVxufVxuIl19