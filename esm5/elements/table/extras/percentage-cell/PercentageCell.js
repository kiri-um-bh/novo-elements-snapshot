import { __extends } from "tslib";
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
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r0.value, "1.0-2"));
} }
var PercentageCell = /** @class */ (function (_super) {
    __extends(PercentageCell, _super);
    function PercentageCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentageCell.ɵfac = function PercentageCell_Factory(t) { return ɵPercentageCell_BaseFactory(t || PercentageCell); };
    PercentageCell.ɵcmp = i0.ɵɵdefineComponent({ type: PercentageCell, selectors: [["percentage-cell"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "percentage", 4, "ngIf"], [1, "percentage"]], template: function PercentageCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PercentageCell_div_0_Template, 3, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.value || ctx.value === 0);
        } }, directives: [i1.NgIf], pipes: [i1.PercentPipe], encapsulation: 2 });
    return PercentageCell;
}(BaseRenderer));
export { PercentageCell };
var ɵPercentageCell_BaseFactory = i0.ɵɵgetInheritedFactory(PercentageCell);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PercentageCell, [{
        type: Component,
        args: [{
                selector: 'percentage-cell',
                template: "\n        <div class=\"percentage\" *ngIf=\"value || value === 0\">{{ value | percent:'1.0-2' }}</div>\n    ",
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyY2VudGFnZUNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3BlcmNlbnRhZ2UtY2VsbC9QZXJjZW50YWdlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztJQUtyRCw4QkFBcUQ7SUFBQSxZQUE2Qjs7SUFBQSxpQkFBTTs7O0lBQW5DLGVBQTZCO0lBQTdCLGlFQUE2Qjs7QUFIMUY7SUFNb0Msa0NBQVk7SUFOaEQ7O0tBTW1EO3VHQUF0QyxjQUFjO3VEQUFkLGNBQWM7WUFIbkIsK0RBQXFEOztZQUE3QixtREFBNEI7O3lCQVI1RDtDQVdtRCxBQU5uRCxDQU1vQyxZQUFZLEdBQUc7U0FBdEMsY0FBYzsyREFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FOMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSw4R0FFUDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZXJjZW50YWdlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVyY2VudGFnZVwiICpuZ0lmPVwidmFsdWUgfHwgdmFsdWUgPT09IDBcIj57eyB2YWx1ZSB8IHBlcmNlbnQ6JzEuMC0yJyB9fTwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBlcmNlbnRhZ2VDZWxsIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHt9XG4iXX0=