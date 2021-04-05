import { ChangeDetectionStrategy, Component, forwardRef, Inject, Input } from '@angular/core';
import { NovoStepHeader } from './step-header.component';
import { NovoStepper } from './stepper.component';
import * as i0 from "@angular/core";
import * as i1 from "./stepper.component";
import * as i2 from "./step-header.component";
import * as i3 from "@angular/common";
import * as i4 from "../icon/Icon";
function NovoStepStatus_novo_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-icon", 4);
    i0.ɵɵtext(1, "check-circle");
    i0.ɵɵelementEnd();
} }
function NovoStepStatus_novo_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-icon", 4);
    i0.ɵɵtext(1, "check-circle-filled");
    i0.ɵɵelementEnd();
} }
function NovoStepStatus_novo_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-icon", 4);
    i0.ɵɵtext(1, "circle-o");
    i0.ɵɵelementEnd();
} }
export class NovoStepStatus {
    constructor(stepper, step) { }
}
NovoStepStatus.ɵfac = function NovoStepStatus_Factory(t) { return new (t || NovoStepStatus)(i0.ɵɵdirectiveInject(forwardRef(() => NovoStepper)), i0.ɵɵdirectiveInject(forwardRef(() => NovoStepHeader))); };
NovoStepStatus.ɵcmp = i0.ɵɵdefineComponent({ type: NovoStepStatus, selectors: [["novo-step-status"]], hostAttrs: [1, "novo-step-status"], inputs: { state: "state" }, decls: 5, vars: 4, consts: [[1, "novo-stepper-status-line", 3, "ngClass"], [1, "novo-stepper-status-icon", 3, "ngSwitch"], ["size", "small", "color", "positive", 4, "ngSwitchCase"], ["size", "small", "color", "positive", 4, "ngSwitchDefault"], ["size", "small", "color", "positive"]], template: function NovoStepStatus_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, NovoStepStatus_novo_icon_2_Template, 2, 0, "novo-icon", 2);
        i0.ɵɵtemplate(3, NovoStepStatus_novo_icon_3_Template, 2, 0, "novo-icon", 2);
        i0.ɵɵtemplate(4, NovoStepStatus_novo_icon_4_Template, 2, 0, "novo-icon", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "edit");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "done");
    } }, directives: [i3.NgClass, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i4.NovoIconComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoStepStatus, [{
        type: Component,
        args: [{
                selector: 'novo-step-status',
                templateUrl: 'step-status.component.html',
                // encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'novo-step-status',
                },
            }]
    }], function () { return [{ type: i1.NovoStepper, decorators: [{
                type: Inject,
                args: [forwardRef(() => NovoStepper)]
            }] }, { type: i2.NovoStepHeader, decorators: [{
                type: Inject,
                args: [forwardRef(() => NovoStepHeader)]
            }] }]; }, { state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3RlcHBlci9zdGVwLXN0YXR1cy5jb21wb25lbnQudHMiLCJlbGVtZW50cy9zdGVwcGVyL3N0ZXAtc3RhdHVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztJQ0FoRCxvQ0FBZ0U7SUFBQSw0QkFBWTtJQUFBLGlCQUFZOzs7SUFDeEYsb0NBQWdFO0lBQUEsbUNBQW1CO0lBQUEsaUJBQVk7OztJQUMvRixvQ0FBMEQ7SUFBQSx3QkFBUTtJQUFBLGlCQUFZOztBRFVoRixNQUFNLE9BQU8sY0FBYztJQUl6QixZQUN5QyxPQUFvQixFQUNqQixJQUFvQixJQUM3RCxDQUFDOzs0RUFQTyxjQUFjLHVCQUtmLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsd0JBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7bURBTi9CLGNBQWM7UUNkM0IseUJBQThEO1FBQzlELDhCQUNFO1FBQUEsMkVBQWdFO1FBQ2hFLDJFQUFnRTtRQUNoRSwyRUFBMEQ7UUFDNUQsaUJBQU07O1FBTGdDLG1DQUFpQjtRQUNsRCxlQUFrQjtRQUFsQixvQ0FBa0I7UUFDb0IsZUFBc0I7UUFBdEIscUNBQXNCO1FBQ3RCLGVBQXNCO1FBQXRCLHFDQUFzQjs7a0REV3BELGNBQWM7Y0FWMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLHlDQUF5QztnQkFDekMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO2lCQUMxQjthQUNGOztzQkFNSSxNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7O3NCQUNwQyxNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0JBSjFDLEtBQUs7a0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9TdGVwSGVhZGVyIH0gZnJvbSAnLi9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b1N0ZXBwZXIgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zdGVwLXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC1zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tc3RlcC1zdGF0dXMnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcFN0YXR1cyB7XG4gIEBJbnB1dCgpXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwcGVyKSkgc3RlcHBlcjogTm92b1N0ZXBwZXIsXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwSGVhZGVyKSkgc3RlcDogTm92b1N0ZXBIZWFkZXIsXG4gICkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJub3ZvLXN0ZXBwZXItc3RhdHVzLWxpbmVcIiBbbmdDbGFzc109XCJzdGF0ZVwiPjwvZGl2PlxuPGRpdiBbbmdTd2l0Y2hdPVwic3RhdGVcIiBjbGFzcz1cIm5vdm8tc3RlcHBlci1zdGF0dXMtaWNvblwiPlxuICA8bm92by1pY29uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicG9zaXRpdmVcIiAqbmdTd2l0Y2hDYXNlPVwiJ2VkaXQnXCI+Y2hlY2stY2lyY2xlPC9ub3ZvLWljb24+XG4gIDxub3ZvLWljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwb3NpdGl2ZVwiICpuZ1N3aXRjaENhc2U9XCInZG9uZSdcIj5jaGVjay1jaXJjbGUtZmlsbGVkPC9ub3ZvLWljb24+XG4gIDxub3ZvLWljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwb3NpdGl2ZVwiICpuZ1N3aXRjaERlZmF1bHQ+Y2lyY2xlLW88L25vdm8taWNvbj5cbjwvZGl2PlxuIl19