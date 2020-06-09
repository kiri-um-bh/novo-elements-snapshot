import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../button/Button";
import * as i2 from "@angular/common";
const _c0 = ["*"];
const _c1 = ["theme", ""];
function NovoHeaderComponent_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r2.icon);
} }
function NovoHeaderComponent_ng_container_2_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.subTitle);
} }
function NovoHeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoHeaderComponent_ng_container_2_i_1_Template, 1, 1, "i", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NovoHeaderComponent_ng_container_2_small_5_Template, 2, 1, "small", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.subTitle);
} }
function NovoHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 4);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵprojection(3, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
const _c2 = [[["section"]], [["utils"]], [["novo-action"]], "*", [["novo-icon"], ["", "novo-icon", ""]], [["h1"], ["h2"], ["h3"], ["h4"], ["h5"], ["h6"], ["small"], ["", "novo-title", ""], ["", "novo-subtitle", ""]]];
const _c3 = ["section", "utils", "novo-action", "*", "novo-icon, [novo-icon]", "h1, h2, h3, h4, h5, h6, small, [novo-title], [novo-subtitle]"];
export class NovoHeaderSpacer {
}
NovoHeaderSpacer.ɵfac = function NovoHeaderSpacer_Factory(t) { return new (t || NovoHeaderSpacer)(); };
NovoHeaderSpacer.ɵcmp = i0.ɵɵdefineComponent({ type: NovoHeaderSpacer, selectors: [["header-spacer"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoHeaderSpacer_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderSpacer, [{
        type: Component,
        args: [{
                selector: 'header-spacer',
                template: `
    <ng-content></ng-content>
  `,
            }]
    }], null, null); })();
export class NovoUtilsComponent {
}
NovoUtilsComponent.ɵfac = function NovoUtilsComponent_Factory(t) { return new (t || NovoUtilsComponent)(); };
NovoUtilsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoUtilsComponent, selectors: [["utils"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoUtilsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoUtilsComponent, [{
        type: Component,
        args: [{
                selector: 'utils',
                template: `
    <ng-content></ng-content>
  `,
            }]
    }], null, null); })();
export class NovoUtilActionComponent {
}
NovoUtilActionComponent.ɵfac = function NovoUtilActionComponent_Factory(t) { return new (t || NovoUtilActionComponent)(); };
NovoUtilActionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoUtilActionComponent, selectors: [["util-action"], ["novo-action"]], inputs: { icon: "icon", inverse: "inverse", disabled: "disabled" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [["theme", "icon", 3, "icon", "disabled"]], template: function NovoUtilActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("icon", ctx.icon)("disabled", ctx.disabled);
        i0.ɵɵattribute("inverse", ctx.inverse);
    } }, directives: [i1.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoUtilActionComponent, [{
        type: Component,
        args: [{
                selector: 'util-action, novo-action',
                template: `
    <button theme="icon" [icon]="icon" [attr.inverse]="inverse" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
            }]
    }], null, { icon: [{
            type: Input
        }], inverse: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
export class NovoHeaderComponent {
    constructor() {
        this.headerClass = 'novo-header';
        this.condensed = false;
        this.inverse = 'inverse';
    }
    set theme(theme) {
        this._theme = theme;
        this.inverse = theme === 'white' || theme === 'off-white' || theme === 'light' ? undefined : 'inverse';
    }
    get theme() {
        return this._theme;
    }
    set icon(icon) {
        this._icon = `bhi-${icon}`;
    }
    get icon() {
        return this._icon;
    }
}
NovoHeaderComponent.ɵfac = function NovoHeaderComponent_Factory(t) { return new (t || NovoHeaderComponent)(); };
NovoHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoHeaderComponent, selectors: [["header", "theme", ""]], hostVars: 5, hostBindings: function NovoHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("theme", ctx.theme);
        i0.ɵɵclassMap(ctx.headerClass);
        i0.ɵɵclassProp("condensed", ctx.condensed);
    } }, inputs: { condensed: "condensed", title: "title", subTitle: "subTitle", theme: "theme", icon: "icon" }, attrs: _c1, ngContentSelectors: _c3, decls: 9, vars: 2, consts: [[1, "header-title"], [4, "ngIf"], ["flex", ""], ["class", "header-icon", 3, "ngClass", 4, "ngIf"], [1, "header-titles"], [1, "header-icon", 3, "ngClass"]], template: function NovoHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, NovoHeaderComponent_ng_container_2_Template, 6, 3, "ng-container", 1);
        i0.ɵɵtemplate(3, NovoHeaderComponent_ng_container_3_Template, 4, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(4);
        i0.ɵɵelement(5, "span", 2);
        i0.ɵɵprojection(6, 1);
        i0.ɵɵprojection(7, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(8, 3);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.title);
    } }, directives: [i2.NgIf, i2.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'header[theme]',
                template: `
    <section>
      <div class="header-title">
        <ng-container *ngIf="title">
          <i *ngIf="icon" class="header-icon" [ngClass]="icon"></i>
          <div class="header-titles">
            <h1>{{ title }}</h1>
            <small *ngIf="subTitle">{{ subTitle }}</small>
          </div>
        </ng-container>
        <ng-container *ngIf="!title">
          <ng-content select="novo-icon, [novo-icon]"></ng-content>
          <div class="header-titles">
            <ng-content select="h1, h2, h3, h4, h5, h6, small, [novo-title], [novo-subtitle]"></ng-content>
          </div>
        </ng-container>
      </div>
      <ng-content select="section"></ng-content>
      <span flex></span>
      <ng-content select="utils"></ng-content>
      <ng-content select="novo-action"></ng-content>
    </section>
    <ng-content></ng-content>
  `,
            }]
    }], null, { headerClass: [{
            type: HostBinding,
            args: ['class']
        }], condensed: [{
            type: HostBinding,
            args: ['class.condensed']
        }, {
            type: Input
        }], title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }], theme: [{
            type: HostBinding,
            args: ['attr.theme']
        }, {
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBeUNwRCx1QkFBeUQ7OztJQUFyQixxQ0FBZ0I7OztJQUdsRCw2QkFBd0I7SUFBQSxZQUFjO0lBQUEsaUJBQVE7OztJQUF0QixlQUFjO0lBQWQscUNBQWM7OztJQUoxQyw2QkFDRTtJQUFBLCtFQUFxRDtJQUNyRCw4QkFDRTtJQUFBLDBCQUFJO0lBQUEsWUFBVztJQUFBLGlCQUFLO0lBQ3BCLHVGQUF3QjtJQUMxQixpQkFBTTtJQUNSLDBCQUFlOzs7SUFMVixlQUFZO0lBQVosa0NBQVk7SUFFVCxlQUFXO0lBQVgsa0NBQVc7SUFDUixlQUFnQjtJQUFoQixzQ0FBZ0I7OztJQUczQiw2QkFDRTtJQUFBLHFCQUE0QztJQUM1Qyw4QkFDRTtJQUFBLHFCQUFrRjtJQUNwRixpQkFBTTtJQUNSLDBCQUFlOzs7O0FBNUN2QixNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7O1FBSHpCLGtCQUFZOztrREFHSCxnQkFBZ0I7Y0FONUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFTRCxNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FBSDNCLGtCQUFZOztrREFHSCxrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFXRCxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCOzREQUF2Qix1QkFBdUI7O1FBTGhDLGlDQUNFO1FBQUEsa0JBQVk7UUFDZCxpQkFBUzs7UUFGWSwrQkFBYSwwQkFBQTtRQUFDLHNDQUF3Qjs7a0RBS2xELHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7QUErQlIsTUFBTSxPQUFPLG1CQUFtQjtJQTNCaEM7UUE2QlMsZ0JBQVcsR0FBVyxhQUFhLENBQUM7UUFHcEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUszQixZQUFPLEdBQVcsU0FBUyxDQUFDO0tBd0JwQztJQXRCQyxJQUVJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pHLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7c0ZBOUJVLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7Ozs7UUF4QjVCLCtCQUNFO1FBQUEsOEJBQ0U7UUFBQSxzRkFDRTtRQU1GLHNGQUNFO1FBS0osaUJBQU07UUFDTixrQkFBNkI7UUFDN0IsMEJBQWtCO1FBQ2xCLHFCQUEyQjtRQUMzQixxQkFBaUM7UUFDbkMsaUJBQVU7UUFDVixxQkFBWTs7UUFuQk0sZUFBYTtRQUFiLGdDQUFhO1FBT2IsZUFBYztRQUFkLGlDQUFjOztrREFldkIsbUJBQW1CO2NBM0IvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7YUFDRjs7a0JBRUUsV0FBVzttQkFBQyxPQUFPOztrQkFFbkIsV0FBVzttQkFBQyxpQkFBaUI7O2tCQUM3QixLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFJTCxXQUFXO21CQUFDLFlBQVk7O2tCQUN4QixLQUFLOztrQkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyLXNwYWNlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGVhZGVyU3BhY2VyIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V0aWxzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9VdGlsc0NvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1dGlsLWFjdGlvbiwgbm92by1hY3Rpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiIFthdHRyLmludmVyc2VdPVwiaW52ZXJzZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvYnV0dG9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVXRpbEFjdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlclt0aGVtZV0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGl0bGVcIj5cbiAgICAgICAgICA8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cImhlYWRlci1pY29uXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlc1wiPlxuICAgICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cInN1YlRpdGxlXCI+e3sgc3ViVGl0bGUgfX08L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8taWNvbiwgW25vdm8taWNvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZXNcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHNtYWxsLCBbbm92by10aXRsZV0sIFtub3ZvLXN1YnRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInNlY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8c3BhbiBmbGV4Pjwvc3Bhbj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInV0aWxzXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1hY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hlYWRlckNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgaGVhZGVyQ2xhc3M6IHN0cmluZyA9ICdub3ZvLWhlYWRlcic7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29uZGVuc2VkJylcbiAgQElucHV0KClcbiAgcHVibGljIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIHN1YlRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBpbnZlcnNlOiBzdHJpbmcgPSAnaW52ZXJzZSc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRoZW1lJylcbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuaW52ZXJzZSA9IHRoZW1lID09PSAnd2hpdGUnIHx8IHRoZW1lID09PSAnb2ZmLXdoaXRlJyB8fCB0aGVtZSA9PT0gJ2xpZ2h0JyA/IHVuZGVmaW5lZCA6ICdpbnZlcnNlJztcbiAgfVxuXG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKGljb246IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSBgYmhpLSR7aWNvbn1gO1xuICB9XG5cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbn1cbiJdfQ==