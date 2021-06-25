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
                template: `
        <div class="percentage" *ngIf="value || value === 0">{{ value | percent:'1.0-2' }}</div>
    `,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyY2VudGFnZUNlbGwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3BlcmNlbnRhZ2UtY2VsbC9QZXJjZW50YWdlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0lBS3JELDhCQUFxRDtJQUFBLFlBQTZCOztJQUFBLGlCQUFNOzs7SUFBbkMsZUFBNkI7SUFBN0IsaUVBQTZCOztBQUcxRixNQUFNLE9BQU8sY0FBZSxTQUFRLFlBQVk7O21HQUFuQyxjQUFjO21EQUFkLGNBQWM7UUFIbkIsK0RBQXFEOztRQUE3QixtREFBNEI7OzJFQUcvQyxjQUFjO2tEQUFkLGNBQWM7Y0FOMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7S0FFUDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZXJjZW50YWdlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVyY2VudGFnZVwiICpuZ0lmPVwidmFsdWUgfHwgdmFsdWUgPT09IDBcIj57eyB2YWx1ZSB8IHBlcmNlbnQ6JzEuMC0yJyB9fTwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBlcmNlbnRhZ2VDZWxsIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHt9XG4iXX0=