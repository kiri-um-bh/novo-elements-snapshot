// NG2
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icon/Icon";
function NonIdealStateElement_novo_icon_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-icon", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r0.theme);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.icon);
} }
function NonIdealStateElement_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function NonIdealStateElement_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.description);
} }
const _c0 = ["*"];
export class NonIdealStateElement {
    constructor() {
        this.theme = 'light';
    }
}
NonIdealStateElement.ɵfac = function NonIdealStateElement_Factory(t) { return new (t || NonIdealStateElement)(); };
NonIdealStateElement.ɵcmp = i0.ɵɵdefineComponent({ type: NonIdealStateElement, selectors: [["novo-non-ideal-state"]], inputs: { theme: "theme", icon: "icon", title: "title", description: "description" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[3, "color", 4, "ngIf"], [4, "ngIf"], [3, "color"]], template: function NonIdealStateElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NonIdealStateElement_novo_icon_0_Template, 2, 2, "novo-icon", 0);
        i0.ɵɵtemplate(1, NonIdealStateElement_h4_1_Template, 2, 1, "h4", 1);
        i0.ɵɵtemplate(2, NonIdealStateElement_p_2_Template, 2, 1, "p", 1);
        i0.ɵɵprojection(3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.description);
    } }, directives: [i1.NgIf, i2.NovoIconComponent], styles: ["[_nghost-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:20px;text-align:center}[_nghost-%COMP%]  novo-icon{font-size:xx-large}[_nghost-%COMP%]  novo-icon i{margin:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{display:inline-block}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NonIdealStateElement, [{
        type: Component,
        args: [{
                selector: 'novo-non-ideal-state',
                styleUrls: ['./NonIdealState.scss'],
                template: `
    <novo-icon *ngIf="icon" [color]="theme">{{ icon }}</novo-icon>
    <h4 *ngIf="title">{{ title }}</h4>
    <p *ngIf="description">{{ description }}</p>
    <ng-content></ng-content>
  `,
            }]
    }], null, { theme: [{
            type: Input
        }], icon: [{
            type: Input
        }], title: [{
            type: Input
        }], description: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uSWRlYWxTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL25vbi1pZGVhbC1zdGF0ZS9Ob25JZGVhbFN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFNN0Msb0NBQXdDO0lBQUEsWUFBVTtJQUFBLGlCQUFZOzs7SUFBdEMsb0NBQWU7SUFBQyxlQUFVO0lBQVYsaUNBQVU7OztJQUNsRCwwQkFBa0I7SUFBQSxZQUFXO0lBQUEsaUJBQUs7OztJQUFoQixlQUFXO0lBQVgsa0NBQVc7OztJQUM3Qix5QkFBdUI7SUFBQSxZQUFpQjtJQUFBLGlCQUFJOzs7SUFBckIsZUFBaUI7SUFBakIsd0NBQWlCOzs7QUFJNUMsTUFBTSxPQUFPLG9CQUFvQjtJQVZqQztRQVlFLFVBQUssR0FBVyxPQUFPLENBQUM7S0FPekI7O3dGQVRZLG9CQUFvQjt5REFBcEIsb0JBQW9COztRQU43QixpRkFBd0M7UUFDeEMsbUVBQWtCO1FBQ2xCLGlFQUF1QjtRQUN2QixrQkFBWTs7UUFIRCwrQkFBWTtRQUNuQixlQUFhO1FBQWIsZ0NBQWE7UUFDZCxlQUFtQjtRQUFuQixzQ0FBbUI7O2tEQUliLG9CQUFvQjtjQVZoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7R0FLVDthQUNGO2dCQUdDLEtBQUs7a0JBREosS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5vbi1pZGVhbC1zdGF0ZScsXG4gIHN0eWxlVXJsczogWycuL05vbklkZWFsU3RhdGUuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWljb24gKm5nSWY9XCJpY29uXCIgW2NvbG9yXT1cInRoZW1lXCI+e3sgaWNvbiB9fTwvbm92by1pY29uPlxuICAgIDxoNCAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxuICAgIDxwICpuZ0lmPVwiZGVzY3JpcHRpb25cIj57eyBkZXNjcmlwdGlvbiB9fTwvcD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vbklkZWFsU3RhdGVFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cbiJdfQ==