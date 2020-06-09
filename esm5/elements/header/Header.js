import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../button/Button";
import * as i2 from "@angular/common";
var _c0 = ["*"];
var _c1 = ["theme", ""];
function NovoHeaderComponent_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r2.icon);
} }
function NovoHeaderComponent_ng_container_2_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
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
    var ctx_r0 = i0.ɵɵnextContext();
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
var _c2 = [[["section"]], [["utils"]], [["novo-action"]], "*", [["novo-icon"], ["", "novo-icon", ""]], [["h1"], ["h2"], ["h3"], ["h4"], ["h5"], ["h6"], ["small"], ["", "novo-title", ""], ["", "novo-subtitle", ""]]];
var _c3 = ["section", "utils", "novo-action", "*", "novo-icon, [novo-icon]", "h1, h2, h3, h4, h5, h6, small, [novo-title], [novo-subtitle]"];
var NovoHeaderSpacer = /** @class */ (function () {
    function NovoHeaderSpacer() {
    }
    NovoHeaderSpacer.ɵfac = function NovoHeaderSpacer_Factory(t) { return new (t || NovoHeaderSpacer)(); };
    NovoHeaderSpacer.ɵcmp = i0.ɵɵdefineComponent({ type: NovoHeaderSpacer, selectors: [["header-spacer"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoHeaderSpacer_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoHeaderSpacer;
}());
export { NovoHeaderSpacer };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderSpacer, [{
        type: Component,
        args: [{
                selector: 'header-spacer',
                template: "\n    <ng-content></ng-content>\n  ",
            }]
    }], null, null); })();
var NovoUtilsComponent = /** @class */ (function () {
    function NovoUtilsComponent() {
    }
    NovoUtilsComponent.ɵfac = function NovoUtilsComponent_Factory(t) { return new (t || NovoUtilsComponent)(); };
    NovoUtilsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoUtilsComponent, selectors: [["utils"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoUtilsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoUtilsComponent;
}());
export { NovoUtilsComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoUtilsComponent, [{
        type: Component,
        args: [{
                selector: 'utils',
                template: "\n    <ng-content></ng-content>\n  ",
            }]
    }], null, null); })();
var NovoUtilActionComponent = /** @class */ (function () {
    function NovoUtilActionComponent() {
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
    return NovoUtilActionComponent;
}());
export { NovoUtilActionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoUtilActionComponent, [{
        type: Component,
        args: [{
                selector: 'util-action, novo-action',
                template: "\n    <button theme=\"icon\" [icon]=\"icon\" [attr.inverse]=\"inverse\" [disabled]=\"disabled\">\n      <ng-content></ng-content>\n    </button>\n  ",
            }]
    }], null, { icon: [{
            type: Input
        }], inverse: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
var NovoHeaderComponent = /** @class */ (function () {
    function NovoHeaderComponent() {
        this.headerClass = 'novo-header';
        this.condensed = false;
        this.inverse = 'inverse';
    }
    Object.defineProperty(NovoHeaderComponent.prototype, "theme", {
        get: function () {
            return this._theme;
        },
        set: function (theme) {
            this._theme = theme;
            this.inverse = theme === 'white' || theme === 'off-white' || theme === 'light' ? undefined : 'inverse';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoHeaderComponent.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (icon) {
            this._icon = "bhi-" + icon;
        },
        enumerable: true,
        configurable: true
    });
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
    return NovoHeaderComponent;
}());
export { NovoHeaderComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'header[theme]',
                template: "\n    <section>\n      <div class=\"header-title\">\n        <ng-container *ngIf=\"title\">\n          <i *ngIf=\"icon\" class=\"header-icon\" [ngClass]=\"icon\"></i>\n          <div class=\"header-titles\">\n            <h1>{{ title }}</h1>\n            <small *ngIf=\"subTitle\">{{ subTitle }}</small>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"!title\">\n          <ng-content select=\"novo-icon, [novo-icon]\"></ng-content>\n          <div class=\"header-titles\">\n            <ng-content select=\"h1, h2, h3, h4, h5, h6, small, [novo-title], [novo-subtitle]\"></ng-content>\n          </div>\n        </ng-container>\n      </div>\n      <ng-content select=\"section\"></ng-content>\n      <span flex></span>\n      <ng-content select=\"utils\"></ng-content>\n      <ng-content select=\"novo-action\"></ng-content>\n    </section>\n    <ng-content></ng-content>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBeUNwRCx1QkFBeUQ7OztJQUFyQixxQ0FBZ0I7OztJQUdsRCw2QkFBd0I7SUFBQSxZQUFjO0lBQUEsaUJBQVE7OztJQUF0QixlQUFjO0lBQWQscUNBQWM7OztJQUoxQyw2QkFDRTtJQUFBLCtFQUFxRDtJQUNyRCw4QkFDRTtJQUFBLDBCQUFJO0lBQUEsWUFBVztJQUFBLGlCQUFLO0lBQ3BCLHVGQUF3QjtJQUMxQixpQkFBTTtJQUNSLDBCQUFlOzs7SUFMVixlQUFZO0lBQVosa0NBQVk7SUFFVCxlQUFXO0lBQVgsa0NBQVc7SUFDUixlQUFnQjtJQUFoQixzQ0FBZ0I7OztJQUczQiw2QkFDRTtJQUFBLHFCQUE0QztJQUM1Qyw4QkFDRTtJQUFBLHFCQUFrRjtJQUNwRixpQkFBTTtJQUNSLDBCQUFlOzs7O0FBbER2QjtJQUFBO0tBTWdDO29GQUFuQixnQkFBZ0I7eURBQWhCLGdCQUFnQjs7WUFIekIsa0JBQVk7OzJCQUxoQjtDQVFnQyxBQU5oQyxJQU1nQztTQUFuQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQU41QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxxQ0FFVDthQUNGOztBQUdEO0lBQUE7S0FNa0M7d0ZBQXJCLGtCQUFrQjsyREFBbEIsa0JBQWtCOztZQUgzQixrQkFBWTs7NkJBYmhCO0NBZ0JrQyxBQU5sQyxJQU1rQztTQUFyQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQU45QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxxQ0FFVDthQUNGOztBQUdEO0lBQUE7S0FlQztrR0FQWSx1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7WUFMaEMsaUNBQ0U7WUFBQSxrQkFBWTtZQUNkLGlCQUFTOztZQUZZLCtCQUFhLDBCQUFBO1lBQUMsc0NBQXdCOztrQ0FyQi9EO0NBaUNDLEFBZkQsSUFlQztTQVBZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBUm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsc0pBSVQ7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7QUFJUjtJQUFBO1FBNkJTLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBR3BDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFLM0IsWUFBTyxHQUFXLFNBQVMsQ0FBQztLQXdCcEM7SUF0QkMsc0JBRUksc0NBQUs7YUFLVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBVEQsVUFFVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pHLENBQUM7OztPQUFBO0lBTUQsc0JBQ0kscUNBQUk7YUFJUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBUEQsVUFDUyxJQUFZO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBTyxJQUFNLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7MEZBMUJVLG1CQUFtQjs0REFBbkIsbUJBQW1COzs7Ozs7WUF4QjVCLCtCQUNFO1lBQUEsOEJBQ0U7WUFBQSxzRkFDRTtZQU1GLHNGQUNFO1lBS0osaUJBQU07WUFDTixrQkFBNkI7WUFDN0IsMEJBQWtCO1lBQ2xCLHFCQUEyQjtZQUMzQixxQkFBaUM7WUFDbkMsaUJBQVU7WUFDVixxQkFBWTs7WUFuQk0sZUFBYTtZQUFiLGdDQUFhO1lBT2IsZUFBYztZQUFkLGlDQUFjOzs4QkEvQ3BDO0NBZ0dDLEFBN0RELElBNkRDO1NBbENZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBM0IvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSx3NEJBdUJUO2FBQ0Y7O2tCQUVFLFdBQVc7bUJBQUMsT0FBTzs7a0JBRW5CLFdBQVc7bUJBQUMsaUJBQWlCOztrQkFDN0IsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBSUwsV0FBVzttQkFBQyxZQUFZOztrQkFDeEIsS0FBSzs7a0JBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlci1zcGFjZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hlYWRlclNwYWNlciB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1dGlscycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVXRpbHNDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXRpbC1hY3Rpb24sIG5vdm8tYWN0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIFtpY29uXT1cImljb25cIiBbYXR0ci5pbnZlcnNlXT1cImludmVyc2VcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1V0aWxBY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFkZXJbdGhlbWVdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRpdGxlXCI+XG4gICAgICAgICAgPGkgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJoZWFkZXItaWNvblwiIFtuZ0NsYXNzXT1cImljb25cIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZXNcIj5cbiAgICAgICAgICAgIDxoMT57eyB0aXRsZSB9fTwvaDE+XG4gICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJzdWJUaXRsZVwiPnt7IHN1YlRpdGxlIH19PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGl0bGVcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWljb24sIFtub3ZvLWljb25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVzXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBzbWFsbCwgW25vdm8tdGl0bGVdLCBbbm92by1zdWJ0aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJzZWN0aW9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgPHNwYW4gZmxleD48L3NwYW4+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ1dGlsc1wiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tYWN0aW9uXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9IZWFkZXJDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIGhlYWRlckNsYXNzOiBzdHJpbmcgPSAnbm92by1oZWFkZXInO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbmRlbnNlZCcpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb25kZW5zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdWJUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaW52ZXJzZTogc3RyaW5nID0gJ2ludmVyc2UnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50aGVtZScpXG4gIEBJbnB1dCgpXG4gIHNldCB0aGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLmludmVyc2UgPSB0aGVtZSA9PT0gJ3doaXRlJyB8fCB0aGVtZSA9PT0gJ29mZi13aGl0ZScgfHwgdGhlbWUgPT09ICdsaWdodCcgPyB1bmRlZmluZWQgOiAnaW52ZXJzZSc7XG4gIH1cblxuICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaWNvbihpY29uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gYGJoaS0ke2ljb259YDtcbiAgfVxuXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBwcml2YXRlIF90aGVtZTogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG59XG4iXX0=