import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "../button/Button";
import * as i2 from "@angular/common";
import * as i3 from "../common/typography/title/title.component";
import * as i4 from "../icon/Icon";
const _c0 = ["*"];
function NovoHeaderComponent_ng_container_2_novo_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-icon", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.icon);
} }
function NovoHeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoHeaderComponent_ng_container_2_novo_icon_1_Template, 2, 1, "novo-icon", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "novo-title", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "novo-title", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.subTitle);
} }
function NovoHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵprojection(3, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
const _c1 = [[["section"]], [["utils"]], [["novo-action"], ["", "novo-action", ""]], "*", [["novo-icon"], ["", "novo-icon", ""]], [["h1"], ["h2"], ["h3"], ["h4"], ["h5"], ["h6"], ["small"], ["novo-title"], ["", "novo-title", ""], ["", "novo-subtitle", ""]]];
const _c2 = ["section", "utils", "novo-action,[novo-action]", "*", "novo-icon, [novo-icon]", "h1, h2, h3, h4, h5, h6, small, novo-title, [novo-title], [novo-subtitle]"];
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
                template: `<ng-content></ng-content>`,
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
                template: `<ng-content></ng-content>`,
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
    get hb_isSizeSmall() {
        return this.size === 'small';
    }
    get hb_isSizeLarge() {
        return this.size === 'large';
    }
    get hb_isSizeDefault() {
        return !['small', 'large'].includes(this.size);
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
NovoHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoHeaderComponent, selectors: [["novo-header"], ["header", "theme", ""]], hostVars: 11, hostBindings: function NovoHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("theme", ctx.theme);
        i0.ɵɵclassMap(ctx.headerClass);
        i0.ɵɵclassProp("condensed", ctx.condensed)("header-size-small", ctx.hb_isSizeSmall)("header-size-large", ctx.hb_isSizeLarge)("header-size-default", ctx.hb_isSizeDefault);
    } }, inputs: { condensed: "condensed", title: "title", subTitle: "subTitle", size: "size", theme: "theme", icon: "icon" }, ngContentSelectors: _c2, decls: 10, vars: 2, consts: [[1, "header-title"], [4, "ngIf"], [1, "spacer"], [1, "header-actions"], ["class", "header-icon", 4, "ngIf"], [1, "header-titles"], ["size", "large"], ["size", "small"], [1, "header-icon"]], template: function NovoHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, NovoHeaderComponent_ng_container_2_Template, 7, 3, "ng-container", 1);
        i0.ɵɵtemplate(3, NovoHeaderComponent_ng_container_3_Template, 4, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(4);
        i0.ɵɵelement(5, "span", 2);
        i0.ɵɵprojection(6, 1);
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵprojection(8, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(9, 3);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.title);
    } }, directives: [i2.NgIf, i3.NovoTitle, i4.NovoIconComponent], encapsulation: 2 });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoHeaderComponent.prototype, "condensed", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'novo-header,header[theme]',
                template: `
    <section>
      <div class="header-title">
        <ng-container *ngIf="title">
          <novo-icon class="header-icon" *ngIf="icon">{{ icon }}</novo-icon>
          <div class="header-titles">
            <novo-title size="large">{{ title }}</novo-title>
            <novo-title size="small">{{ subTitle }}</novo-title>
          </div>
        </ng-container>
        <ng-container *ngIf="!title">
          <ng-content select="novo-icon, [novo-icon]"></ng-content>
          <div class="header-titles">
            <ng-content select="h1, h2, h3, h4, h5, h6, small, novo-title, [novo-title], [novo-subtitle]"></ng-content>
          </div>
        </ng-container>
      </div>
      <ng-content select="section"></ng-content>
      <span class="spacer"></span>
      <ng-content select="utils"></ng-content>
      <div class="header-actions">
        <ng-content select="novo-action,[novo-action]"></ng-content>
      </div>
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
        }], size: [{
            type: Input
        }], hb_isSizeSmall: [{
            type: HostBinding,
            args: ['class.header-size-small']
        }], hb_isSizeLarge: [{
            type: HostBinding,
            args: ['class.header-size-large']
        }], hb_isSizeDefault: [{
            type: HostBinding,
            args: ['class.header-size-default']
        }], theme: [{
            type: HostBinding,
            args: ['attr.theme']
        }, {
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvaGVhZGVyL0hlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7O0lBcUNqQyxvQ0FBNEM7SUFBQSxZQUFVO0lBQUEsaUJBQVk7OztJQUF0QixlQUFVO0lBQVYsaUNBQVU7OztJQUR4RCw2QkFDRTtJQUFBLCtGQUE0QztJQUM1Qyw4QkFDRTtJQUFBLHFDQUF5QjtJQUFBLFlBQVc7SUFBQSxpQkFBYTtJQUNqRCxxQ0FBeUI7SUFBQSxZQUFjO0lBQUEsaUJBQWE7SUFDdEQsaUJBQU07SUFDUiwwQkFBZTs7O0lBTGtCLGVBQVk7SUFBWixrQ0FBWTtJQUVoQixlQUFXO0lBQVgsa0NBQVc7SUFDWCxlQUFjO0lBQWQscUNBQWM7OztJQUczQyw2QkFDRTtJQUFBLHFCQUE0QztJQUM1Qyw4QkFDRTtJQUFBLHFCQUE4RjtJQUNoRyxpQkFBTTtJQUNSLDBCQUFlOzs7O0FBMUN2QixNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7O1FBRmhCLGtCQUFZOztrREFFWixnQkFBZ0I7Y0FKNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztBQU9ELE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7dURBQWxCLGtCQUFrQjs7UUFGbEIsa0JBQVk7O2tEQUVaLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7O0FBV0QsTUFBTSxPQUFPLHVCQUF1Qjs7OEZBQXZCLHVCQUF1Qjs0REFBdkIsdUJBQXVCOztRQUxoQyxpQ0FDRTtRQUFBLGtCQUFZO1FBQ2QsaUJBQVM7O1FBRlksK0JBQWEsMEJBQUE7UUFBQyxzQ0FBd0I7O2tEQUtsRCx1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7Z0JBR1EsSUFBSTtrQkFEVixLQUFLO1lBR0MsT0FBTztrQkFEYixLQUFLO1lBR0MsUUFBUTtrQkFEZCxLQUFLOztBQWlDUixNQUFNLE9BQU8sbUJBQW1CO0lBN0JoQztRQStCUyxnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUlwQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSzNCLFlBQU8sR0FBVyxTQUFTLENBQUM7S0EwQ3BDO0lBckNDLElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELElBRUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekcsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFDSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOztzRkFqRFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7Ozs7OztRQTFCNUIsK0JBQ0U7UUFBQSw4QkFDRTtRQUFBLHNGQUNFO1FBTUYsc0ZBQ0U7UUFLSixpQkFBTTtRQUNOLGtCQUE2QjtRQUM3QiwwQkFBNEI7UUFDNUIscUJBQTJCO1FBQzNCLDhCQUNFO1FBQUEscUJBQStDO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQVU7UUFDVixxQkFBWTs7UUFyQk0sZUFBYTtRQUFiLGdDQUFhO1FBT2IsZUFBYztRQUFkLGlDQUFjOztBQXVCbEM7SUFEQyxZQUFZLEVBQUU7O3NEQUNtQjtrREFOdkIsbUJBQW1CO2NBN0IvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0Y7Z0JBR1EsV0FBVztrQkFEakIsV0FBVzttQkFBQyxPQUFPO1lBS2IsU0FBUztrQkFIZixXQUFXO21CQUFDLGlCQUFpQjs7a0JBQzdCLEtBQUs7WUFJQyxLQUFLO2tCQURYLEtBQUs7WUFHQyxRQUFRO2tCQURkLEtBQUs7WUFLQyxJQUFJO2tCQURWLEtBQUs7WUFJRixjQUFjO2tCQURqQixXQUFXO21CQUFDLHlCQUF5QjtZQU1sQyxjQUFjO2tCQURqQixXQUFXO21CQUFDLHlCQUF5QjtZQU1sQyxnQkFBZ0I7a0JBRG5CLFdBQVc7bUJBQUMsMkJBQTJCO1lBT3BDLEtBQUs7a0JBRlIsV0FBVzttQkFBQyxZQUFZOztrQkFDeEIsS0FBSztZQVdGLElBQUk7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlci1zcGFjZXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGVhZGVyU3BhY2VyIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V0aWxzJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1V0aWxzQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V0aWwtYWN0aW9uLCBub3ZvLWFjdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBbaWNvbl09XCJpY29uXCIgW2F0dHIuaW52ZXJzZV09XCJpbnZlcnNlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9idXR0b24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1oZWFkZXIsaGVhZGVyW3RoZW1lXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxub3ZvLWljb24gY2xhc3M9XCJoZWFkZXItaWNvblwiICpuZ0lmPVwiaWNvblwiPnt7IGljb24gfX08L25vdm8taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlc1wiPlxuICAgICAgICAgICAgPG5vdm8tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3sgdGl0bGUgfX08L25vdm8tdGl0bGU+XG4gICAgICAgICAgICA8bm92by10aXRsZSBzaXplPVwic21hbGxcIj57eyBzdWJUaXRsZSB9fTwvbm92by10aXRsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGl0bGVcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWljb24sIFtub3ZvLWljb25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVzXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBzbWFsbCwgbm92by10aXRsZSwgW25vdm8tdGl0bGVdLCBbbm92by1zdWJ0aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJzZWN0aW9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ1dGlsc1wiPjwvbmctY29udGVudD5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYWN0aW9uc1wiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWFjdGlvbixbbm92by1hY3Rpb25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hlYWRlckNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgaGVhZGVyQ2xhc3M6IHN0cmluZyA9ICdub3ZvLWhlYWRlcic7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29uZGVuc2VkJylcbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIHB1YmxpYyBjb25kZW5zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdWJUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaW52ZXJzZTogc3RyaW5nID0gJ2ludmVyc2UnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaXplOiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGVhZGVyLXNpemUtc21hbGwnKVxuICBnZXQgaGJfaXNTaXplU21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGVhZGVyLXNpemUtbGFyZ2UnKVxuICBnZXQgaGJfaXNTaXplTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGVhZGVyLXNpemUtZGVmYXVsdCcpXG4gIGdldCBoYl9pc1NpemVEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhWydzbWFsbCcsICdsYXJnZSddLmluY2x1ZGVzKHRoaXMuc2l6ZSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGhlbWUnKVxuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5pbnZlcnNlID0gdGhlbWUgPT09ICd3aGl0ZScgfHwgdGhlbWUgPT09ICdvZmYtd2hpdGUnIHx8IHRoZW1lID09PSAnbGlnaHQnID8gdW5kZWZpbmVkIDogJ2ludmVyc2UnO1xuICB9XG5cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IGBiaGktJHtpY29ufWA7XG4gIH1cblxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xufVxuIl19