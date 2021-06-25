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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBeUNwRCx1QkFBeUQ7OztJQUFyQixxQ0FBZ0I7OztJQUdsRCw2QkFBd0I7SUFBQSxZQUFjO0lBQUEsaUJBQVE7OztJQUF0QixlQUFjO0lBQWQscUNBQWM7OztJQUoxQyw2QkFDRTtJQUFBLCtFQUFxRDtJQUNyRCw4QkFDRTtJQUFBLDBCQUFJO0lBQUEsWUFBVztJQUFBLGlCQUFLO0lBQ3BCLHVGQUF3QjtJQUMxQixpQkFBTTtJQUNSLDBCQUFlOzs7SUFMVixlQUFZO0lBQVosa0NBQVk7SUFFVCxlQUFXO0lBQVgsa0NBQVc7SUFDUixlQUFnQjtJQUFoQixzQ0FBZ0I7OztJQUczQiw2QkFDRTtJQUFBLHFCQUE0QztJQUM1Qyw4QkFDRTtJQUFBLHFCQUFrRjtJQUNwRixpQkFBTTtJQUNSLDBCQUFlOzs7O0FBNUN2QixNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7O1FBSHpCLGtCQUFZOztrREFHSCxnQkFBZ0I7Y0FONUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFTRCxNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FBSDNCLGtCQUFZOztrREFHSCxrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFXRCxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCOzREQUF2Qix1QkFBdUI7O1FBTGhDLGlDQUNFO1FBQUEsa0JBQVk7UUFDZCxpQkFBUzs7UUFGWSwrQkFBYSwwQkFBQTtRQUFDLHNDQUF3Qjs7a0RBS2xELHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjtnQkFHUSxJQUFJO2tCQURWLEtBQUs7WUFHQyxPQUFPO2tCQURiLEtBQUs7WUFHQyxRQUFRO2tCQURkLEtBQUs7O0FBK0JSLE1BQU0sT0FBTyxtQkFBbUI7SUEzQmhDO1FBNkJTLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBR3BDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFLM0IsWUFBTyxHQUFXLFNBQVMsQ0FBQztLQXdCcEM7SUF0QkMsSUFFSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLElBQUksQ0FBQyxJQUFZO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O3NGQTlCVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7Ozs7O1FBeEI1QiwrQkFDRTtRQUFBLDhCQUNFO1FBQUEsc0ZBQ0U7UUFNRixzRkFDRTtRQUtKLGlCQUFNO1FBQ04sa0JBQTZCO1FBQzdCLDBCQUFrQjtRQUNsQixxQkFBMkI7UUFDM0IscUJBQWlDO1FBQ25DLGlCQUFVO1FBQ1YscUJBQVk7O1FBbkJNLGVBQWE7UUFBYixnQ0FBYTtRQU9iLGVBQWM7UUFBZCxpQ0FBYzs7a0RBZXZCLG1CQUFtQjtjQTNCL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2FBQ0Y7Z0JBR1EsV0FBVztrQkFEakIsV0FBVzttQkFBQyxPQUFPO1lBSWIsU0FBUztrQkFGZixXQUFXO21CQUFDLGlCQUFpQjs7a0JBQzdCLEtBQUs7WUFHQyxLQUFLO2tCQURYLEtBQUs7WUFHQyxRQUFRO2tCQURkLEtBQUs7WUFNRixLQUFLO2tCQUZSLFdBQVc7bUJBQUMsWUFBWTs7a0JBQ3hCLEtBQUs7WUFXRixJQUFJO2tCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFkZXItc3BhY2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9IZWFkZXJTcGFjZXIge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXRpbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1V0aWxzQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V0aWwtYWN0aW9uLCBub3ZvLWFjdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBbaWNvbl09XCJpY29uXCIgW2F0dHIuaW52ZXJzZV09XCJpbnZlcnNlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9idXR0b24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyW3RoZW1lXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwiaGVhZGVyLWljb25cIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVzXCI+XG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwic3ViVGl0bGVcIj57eyBzdWJUaXRsZSB9fTwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRpdGxlXCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1pY29uLCBbbm92by1pY29uXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgc21hbGwsIFtub3ZvLXRpdGxlXSwgW25vdm8tc3VidGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICAgIDxzcGFuIGZsZXg+PC9zcGFuPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidXRpbHNcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWFjdGlvblwiPjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGVhZGVyQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyBoZWFkZXJDbGFzczogc3RyaW5nID0gJ25vdm8taGVhZGVyJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb25kZW5zZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3ViVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGludmVyc2U6IHN0cmluZyA9ICdpbnZlcnNlJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGhlbWUnKVxuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5pbnZlcnNlID0gdGhlbWUgPT09ICd3aGl0ZScgfHwgdGhlbWUgPT09ICdvZmYtd2hpdGUnIHx8IHRoZW1lID09PSAnbGlnaHQnID8gdW5kZWZpbmVkIDogJ2ludmVyc2UnO1xuICB9XG5cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IGBiaGktJHtpY29ufWA7XG4gIH1cblxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xufVxuIl19