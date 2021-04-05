import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { NovoModalRef } from './modal-ref';
import { zoomInOut } from './modal.animation';
import * as i0 from "@angular/core";
import * as i1 from "./modal-ref";
import * as i2 from "@angular/cdk/portal";
function NovoModalContainerComponent_ng_template_1_Template(rf, ctx) { }
export class NovoModalContainerComponent {
    constructor(injector, modalRef) {
        this.injector = injector;
        this.modalRef = modalRef;
        this.animationStateChanged = new EventEmitter();
        this.animationState = 'enter';
        this.component = new ComponentPortal(modalRef.component, null, injector);
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
NovoModalContainerComponent.ɵfac = function NovoModalContainerComponent_Factory(t) { return new (t || NovoModalContainerComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i1.NovoModalRef)); };
NovoModalContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoModalContainerComponent, selectors: [["novo-modal-container"]], outputs: { animationStateChanged: "animationStateChanged" }, decls: 2, vars: 2, consts: [[1, "modal-container"], [3, "cdkPortalOutlet"]], template: function NovoModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("@zoomInOut.start", function NovoModalContainerComponent_Template_div_animation_zoomInOut_start_0_listener($event) { return ctx.onAnimationStart($event); })("@zoomInOut.done", function NovoModalContainerComponent_Template_div_animation_zoomInOut_done_0_listener($event) { return ctx.onAnimationDone($event); });
        i0.ɵɵtemplate(1, NovoModalContainerComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@zoomInOut", ctx.animationState);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.component);
    } }, directives: [i2.CdkPortalOutlet], styles: ["[_nghost-%COMP%]{background:rgba(0,0,0,.25)}[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1001}"], data: { animation: [zoomInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'novo-modal-container',
                templateUrl: './modal-container.component.html',
                styleUrls: ['./modal-container.component.scss'],
                animations: [zoomInOut],
            }]
    }], function () { return [{ type: i0.Injector }, { type: i1.NovoModalRef }]; }, { animationStateChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJlbGVtZW50cy9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBUTlDLE1BQU0sT0FBTywyQkFBMkI7SUFPdEMsWUFBb0IsUUFBa0IsRUFBVSxRQUFzQjtRQUFsRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQU41RCwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUVyRSxtQkFBYyxHQUErQixPQUFPLENBQUM7UUFLbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBcUI7UUFDcEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQXFCO1FBQ25DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDOztzR0FyQlUsMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNaeEMsOEJBRUU7UUFGeUQsMElBQW9CLDRCQUF3QixJQUFDLDJIQUNuRiwyQkFBdUIsSUFENEQ7UUFFdEcsNEZBQTJDO1FBQzdDLGlCQUFNOztRQUh1QiwrQ0FBNkI7UUFFM0MsZUFBNkI7UUFBN0IsK0NBQTZCO2dTRFE5QixDQUFDLFNBQVMsQ0FBQztrREFFWiwyQkFBMkI7Y0FOdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUM7YUFDeEI7c0ZBRVcscUJBQXFCO2tCQUE5QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b01vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgem9vbUluT3V0IH0gZnJvbSAnLi9tb2RhbC5hbmltYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3pvb21Jbk91dF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbENvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFuaW1hdGlvbkV2ZW50PigpO1xuXG4gIGFuaW1hdGlvblN0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2xlYXZlJyA9ICdlbnRlcic7XG5cbiAgY29tcG9uZW50OiBQb3J0YWw8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50UG9ydGFsKG1vZGFsUmVmLmNvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0RXhpdEFuaW1hdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ2xlYXZlJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiIFtAem9vbUluT3V0XT1cImFuaW1hdGlvblN0YXRlXCIgKEB6b29tSW5PdXQuc3RhcnQpPVwib25BbmltYXRpb25TdGFydCgkZXZlbnQpXCJcbiAgKEB6b29tSW5PdXQuZG9uZSk9XCJvbkFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiPlxuICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJjb21wb25lbnRcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+Il19