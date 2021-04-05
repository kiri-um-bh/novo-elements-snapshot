// NG2
import { Component } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PercentageCell_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "percent");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r0.value, "1.0-2"));
} }
export class PercentageCell extends BaseRenderer {
}
PercentageCell.ɵfac = function PercentageCell_Factory(t) { return ɵPercentageCell_BaseFactory(t || PercentageCell); };
PercentageCell.ɵcmp = i0.ɵɵdefineComponent({ type: PercentageCell, selectors: [["percentage-cell"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "percentage", 4, "ngIf"], [1, "percentage"]], template: function PercentageCell_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PercentageCell_div_0_Template, 3, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.value || ctx.value === 0);
    } }, directives: [i1.NgIf], pipes: [i1.PercentPipe], encapsulation: 2 });
const ɵPercentageCell_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(PercentageCell);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PercentageCell, [{
        type: Component,
        args: [{
                selector: 'percentage-cell',
                template: ` <div class="percentage" *ngIf="value || value === 0">{{ value | percent: '1.0-2' }}</div> `,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyY2VudGFnZUNlbGwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGVyY2VudGFnZS1jZWxsL1BlcmNlbnRhZ2VDZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7SUFJL0MsOEJBQXFEO0lBQUEsWUFBOEI7O0lBQUEsaUJBQU07OztJQUFwQyxlQUE4QjtJQUE5QixpRUFBOEI7O0FBRWpHLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTs7bUdBQW5DLGNBQWM7bURBQWQsY0FBYztRQUZiLCtEQUFxRDs7UUFBN0IsbURBQTRCOzsyRUFFckQsY0FBYztrREFBZCxjQUFjO2NBSjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsNkZBQTZGO2FBQ3hHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZXJjZW50YWdlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwicGVyY2VudGFnZVwiICpuZ0lmPVwidmFsdWUgfHwgdmFsdWUgPT09IDBcIj57eyB2YWx1ZSB8IHBlcmNlbnQ6ICcxLjAtMicgfX08L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgUGVyY2VudGFnZUNlbGwgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge31cbiJdfQ==