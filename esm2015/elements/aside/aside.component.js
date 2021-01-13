import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { NovoAsideRef } from './aside-ref';
import { slideInOut } from './aside.animation';
import * as i0 from "@angular/core";
import * as i1 from "./aside-ref";
import * as i2 from "@angular/cdk/portal";
function AsideComponent_ng_template_1_Template(rf, ctx) { }
export class AsideComponent {
    constructor(injector, asideRef) {
        this.injector = injector;
        this.asideRef = asideRef;
        this.animationStateChanged = new EventEmitter();
        this.animationState = 'enter';
        this.component = new ComponentPortal(asideRef.component, null, injector);
    }
    onAnimationStart(event) {
        this.animationStateChanged.emit(event);
    }
    onAnimationDone(event) {
        this.animationStateChanged.emit(event);
    }
    startExitAnimation() {
        this.animationState = 'leave';
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i1.NovoAsideRef)); };
AsideComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AsideComponent, selectors: [["novo-aside"]], outputs: { animationStateChanged: "animationStateChanged" }, decls: 2, vars: 2, consts: [[1, "aside-panel"], [3, "cdkPortalOutlet"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("@slideInOut.start", function AsideComponent_Template_div_animation_slideInOut_start_0_listener($event) { return ctx.onAnimationStart($event); })("@slideInOut.done", function AsideComponent_Template_div_animation_slideInOut_done_0_listener($event) { return ctx.onAnimationDone($event); });
        i0.ɵɵtemplate(1, AsideComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@slideInOut", ctx.animationState);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.component);
    } }, directives: [i2.CdkPortalOutlet], styles: ["[_nghost-%COMP%]   .aside-panel[_ngcontent-%COMP%]{align-items:stretch;background-color:#fff;display:flex;height:100vh;justify-content:stretch;max-width:540px;min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content;padding:0;position:absolute;right:0;top:0;width:50%}"], data: { animation: [slideInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AsideComponent, [{
        type: Component,
        args: [{
                selector: 'novo-aside',
                templateUrl: './aside.component.html',
                styleUrls: ['./aside.component.scss'],
                animations: [slideInOut],
            }]
    }], function () { return [{ type: i0.Injector }, { type: i1.NovoAsideRef }]; }, { animationStateChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvYXNpZGUvYXNpZGUuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvYXNpZGUvYXNpZGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBUS9DLE1BQU0sT0FBTyxjQUFjO0lBT3pCLFlBQW9CLFFBQWtCLEVBQVUsUUFBc0I7UUFBbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWM7UUFONUQsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFckUsbUJBQWMsR0FBK0IsT0FBTyxDQUFDO1FBS25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQXFCO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFxQjtRQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDaEMsQ0FBQzs7NEVBckJVLGNBQWM7bURBQWQsY0FBYztRQ1ozQiw4QkFFRTtRQUZzRCwrSEFBcUIsNEJBQXdCLElBQUMsZ0hBQ2hGLDJCQUF1QixJQUR5RDtRQUVwRywrRUFBMkM7UUFDN0MsaUJBQU07O1FBSG1CLGdEQUE4QjtRQUV4QyxlQUE2QjtRQUE3QiwrQ0FBNkI7OFdEUTlCLENBQUMsVUFBVSxDQUFDO2tEQUViLGNBQWM7Y0FOMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQ3pCO3NGQUVXLHFCQUFxQjtrQkFBOUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9Bc2lkZVJlZiB9IGZyb20gJy4vYXNpZGUtcmVmJztcbmltcG9ydCB7IHNsaWRlSW5PdXQgfSBmcm9tICcuL2FzaWRlLmFuaW1hdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYXNpZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXNpZGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hc2lkZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbc2xpZGVJbk91dF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG5cbiAgYW5pbWF0aW9uU3RhdGU6ICd2b2lkJyB8ICdlbnRlcicgfCAnbGVhdmUnID0gJ2VudGVyJztcblxuICBjb21wb25lbnQ6IFBvcnRhbDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGFzaWRlUmVmOiBOb3ZvQXNpZGVSZWYpIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRQb3J0YWwoYXNpZGVSZWYuY29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XG4gIH1cblxuICBvbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc3RhcnRFeGl0QW5pbWF0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnbGVhdmUnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYXNpZGUtcGFuZWxcIiBbQHNsaWRlSW5PdXRdPVwiYW5pbWF0aW9uU3RhdGVcIiAoQHNsaWRlSW5PdXQuc3RhcnQpPVwib25BbmltYXRpb25TdGFydCgkZXZlbnQpXCJcbiAgKEBzbGlkZUluT3V0LmRvbmUpPVwib25BbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiY29tcG9uZW50XCI+PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiJdfQ==