import { ChangeDetectionStrategy, Component, Input, Inject, forwardRef } from '@angular/core';
import { NovoStepper } from './stepper.component';
import { NovoStepHeader } from './step-header.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1zdGF0dXMuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvc3RlcHBlci9zdGVwLXN0YXR1cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7SUNBdkQsb0NBQWdFO0lBQUEsNEJBQVk7SUFBQSxpQkFBWTs7O0lBQ3hGLG9DQUFnRTtJQUFBLG1DQUFtQjtJQUFBLGlCQUFZOzs7SUFDL0Ysb0NBQTBEO0lBQUEsd0JBQVE7SUFBQSxpQkFBWTs7QURVaEYsTUFBTSxPQUFPLGNBQWM7SUFJekIsWUFDeUMsT0FBb0IsRUFDakIsSUFBb0IsSUFDN0QsQ0FBQzs7NEVBUE8sY0FBYyx1QkFLZixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLHdCQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO21EQU4vQixjQUFjO1FDZDNCLHlCQUE4RDtRQUM5RCw4QkFDRTtRQUFBLDJFQUFnRTtRQUNoRSwyRUFBZ0U7UUFDaEUsMkVBQTBEO1FBQzVELGlCQUFNOztRQUxnQyxtQ0FBaUI7UUFDbEQsZUFBa0I7UUFBbEIsb0NBQWtCO1FBQ29CLGVBQXNCO1FBQXRCLHFDQUFzQjtRQUN0QixlQUFzQjtRQUF0QixxQ0FBc0I7O2tERFdwRCxjQUFjO2NBVjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6Qyx5Q0FBeUM7Z0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtpQkFDMUI7YUFDRjs7c0JBTUksTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDOztzQkFDcEMsTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDOztrQkFMekMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9TdGVwcGVyIH0gZnJvbSAnLi9zdGVwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvU3RlcEhlYWRlciB9IGZyb20gJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zdGVwLXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC1zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tc3RlcC1zdGF0dXMnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcFN0YXR1cyB7XG4gIEBJbnB1dCgpXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwcGVyKSkgc3RlcHBlcjogTm92b1N0ZXBwZXIsXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwSGVhZGVyKSkgc3RlcDogTm92b1N0ZXBIZWFkZXIsXG4gICkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJub3ZvLXN0ZXBwZXItc3RhdHVzLWxpbmVcIiBbbmdDbGFzc109XCJzdGF0ZVwiPjwvZGl2PlxuPGRpdiBbbmdTd2l0Y2hdPVwic3RhdGVcIiBjbGFzcz1cIm5vdm8tc3RlcHBlci1zdGF0dXMtaWNvblwiPlxuICA8bm92by1pY29uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicG9zaXRpdmVcIiAqbmdTd2l0Y2hDYXNlPVwiJ2VkaXQnXCI+Y2hlY2stY2lyY2xlPC9ub3ZvLWljb24+XG4gIDxub3ZvLWljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwb3NpdGl2ZVwiICpuZ1N3aXRjaENhc2U9XCInZG9uZSdcIj5jaGVjay1jaXJjbGUtZmlsbGVkPC9ub3ZvLWljb24+XG4gIDxub3ZvLWljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwb3NpdGl2ZVwiICpuZ1N3aXRjaERlZmF1bHQ+Y2lyY2xlLW88L25vdm8taWNvbj5cbjwvZGl2PlxuIl19