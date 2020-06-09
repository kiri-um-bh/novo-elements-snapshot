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
var NovoStepStatus = /** @class */ (function () {
    function NovoStepStatus(stepper, step) {
    }
    NovoStepStatus.ɵfac = function NovoStepStatus_Factory(t) { return new (t || NovoStepStatus)(i0.ɵɵdirectiveInject(forwardRef(function () { return NovoStepper; })), i0.ɵɵdirectiveInject(forwardRef(function () { return NovoStepHeader; }))); };
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
    return NovoStepStatus;
}());
export { NovoStepStatus };
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
                args: [forwardRef(function () { return NovoStepper; })]
            }] }, { type: i2.NovoStepHeader, decorators: [{
                type: Inject,
                args: [forwardRef(function () { return NovoStepHeader; })]
            }] }]; }, { state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1zdGF0dXMuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvc3RlcHBlci9zdGVwLXN0YXR1cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7SUNBdkQsb0NBQWdFO0lBQUEsNEJBQVk7SUFBQSxpQkFBWTs7O0lBQ3hGLG9DQUFnRTtJQUFBLG1DQUFtQjtJQUFBLGlCQUFZOzs7SUFDL0Ysb0NBQTBEO0lBQUEsd0JBQVE7SUFBQSxpQkFBWTs7QURBaEY7SUFjRSx3QkFDeUMsT0FBb0IsRUFDakIsSUFBb0I7SUFDN0QsQ0FBQztnRkFQTyxjQUFjLHVCQUtmLFVBQVUsQ0FBQyxjQUFNLE9BQUEsV0FBVyxFQUFYLENBQVcsQ0FBQyx3QkFDN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxDQUFDO3VEQU4vQixjQUFjO1lDZDNCLHlCQUE4RDtZQUM5RCw4QkFDRTtZQUFBLDJFQUFnRTtZQUNoRSwyRUFBZ0U7WUFDaEUsMkVBQTBEO1lBQzVELGlCQUFNOztZQUxnQyxtQ0FBaUI7WUFDbEQsZUFBa0I7WUFBbEIsb0NBQWtCO1lBQ29CLGVBQXNCO1lBQXRCLHFDQUFzQjtZQUN0QixlQUFzQjtZQUF0QixxQ0FBc0I7O3lCREhqRTtDQXNCQyxBQWxCRCxJQWtCQztTQVJZLGNBQWM7a0RBQWQsY0FBYztjQVYxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMseUNBQXlDO2dCQUN6QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7aUJBQzFCO2FBQ0Y7O3NCQU1JLE1BQU07dUJBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxXQUFXLEVBQVgsQ0FBVyxDQUFDOztzQkFDcEMsTUFBTTt1QkFBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGNBQWMsRUFBZCxDQUFjLENBQUM7O2tCQUx6QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1N0ZXBwZXIgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9TdGVwSGVhZGVyIH0gZnJvbSAnLi9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXN0ZXAtc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwLXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1zdGVwLXN0YXR1cycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TdGVwU3RhdHVzIHtcbiAgQElucHV0KClcbiAgc3RhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTm92b1N0ZXBwZXIpKSBzdGVwcGVyOiBOb3ZvU3RlcHBlcixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTm92b1N0ZXBIZWFkZXIpKSBzdGVwOiBOb3ZvU3RlcEhlYWRlcixcbiAgKSB7fVxufVxuIiwiPGRpdiBjbGFzcz1cIm5vdm8tc3RlcHBlci1zdGF0dXMtbGluZVwiIFtuZ0NsYXNzXT1cInN0YXRlXCI+PC9kaXY+XG48ZGl2IFtuZ1N3aXRjaF09XCJzdGF0ZVwiIGNsYXNzPVwibm92by1zdGVwcGVyLXN0YXR1cy1pY29uXCI+XG4gIDxub3ZvLWljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwb3NpdGl2ZVwiICpuZ1N3aXRjaENhc2U9XCInZWRpdCdcIj5jaGVjay1jaXJjbGU8L25vdm8taWNvbj5cbiAgPG5vdm8taWNvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInBvc2l0aXZlXCIgKm5nU3dpdGNoQ2FzZT1cIidkb25lJ1wiPmNoZWNrLWNpcmNsZS1maWxsZWQ8L25vdm8taWNvbj5cbiAgPG5vdm8taWNvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInBvc2l0aXZlXCIgKm5nU3dpdGNoRGVmYXVsdD5jaXJjbGUtbzwvbm92by1pY29uPlxuPC9kaXY+XG4iXX0=