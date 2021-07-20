import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "../button/Button";
import * as i2 from "@angular/common";
import * as i3 from "../common/typography/title/title.component";
import * as i4 from "../icon/Icon";
const _c0 = ["*"];
function NovoHeaderComponent_ng_container_3_novo_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-icon", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.icon);
} }
function NovoHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoHeaderComponent_ng_container_3_novo_icon_1_Template, 2, 1, "novo-icon", 4);
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
function NovoHeaderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 6);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵprojection(3, 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
const _c1 = [[["", "prefix", ""]], [["section"]], [["utils"]], [["", "suffix", ""]], [["novo-action"], ["", "novo-action", ""]], "*", [["novo-icon"], ["", "novo-icon", ""]], [["h1"], ["h2"], ["h3"], ["h4"], ["h5"], ["h6"], ["small"], ["novo-title"], ["", "novo-title", ""], ["", "novo-subtitle", ""]]];
const _c2 = ["[prefix]", "section", "utils", "[suffix]", "novo-action,[novo-action]", "*", "novo-icon, [novo-icon]", "h1, h2, h3, h4, h5, h6, small, novo-title, [novo-title], [novo-subtitle]"];
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
NovoHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoHeaderComponent, selectors: [["novo-header"], ["header", "theme", ""]], hostVars: 12, hostBindings: function NovoHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.heading)("theme", ctx.theme);
        i0.ɵɵclassMap(ctx.headerClass);
        i0.ɵɵclassProp("condensed", ctx.condensed)("header-size-small", ctx.hb_isSizeSmall)("header-size-large", ctx.hb_isSizeLarge)("header-size-default", ctx.hb_isSizeDefault);
    } }, inputs: { condensed: "condensed", title: "title", subTitle: "subTitle", size: "size", theme: "theme", icon: "icon" }, ngContentSelectors: _c2, decls: 12, vars: 2, consts: [[1, "header-title"], [4, "ngIf"], [1, "spacer"], [1, "header-actions"], ["class", "header-icon", 4, "ngIf"], [1, "header-titles"], ["size", "large"], ["size", "small"], [1, "header-icon"]], template: function NovoHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵprojection(2);
        i0.ɵɵtemplate(3, NovoHeaderComponent_ng_container_3_Template, 7, 3, "ng-container", 1);
        i0.ɵɵtemplate(4, NovoHeaderComponent_ng_container_4_Template, 4, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelement(6, "span", 2);
        i0.ɵɵprojection(7, 2);
        i0.ɵɵprojection(8, 3);
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵprojection(10, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(11, 5);
    } if (rf & 2) {
        i0.ɵɵadvance(3);
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
                host: {
                    '[attr.role]': 'heading',
                },
                template: `
    <section>
      <div class="header-title">
        <ng-content select="[prefix]"></ng-content>
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
      <ng-content select="[suffix]"></ng-content>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7OztJQXlDakMsb0NBQTRDO0lBQUEsWUFBVTtJQUFBLGlCQUFZOzs7SUFBdEIsZUFBVTtJQUFWLGlDQUFVOzs7SUFEeEQsNkJBQ0U7SUFBQSwrRkFBNEM7SUFDNUMsOEJBQ0U7SUFBQSxxQ0FBeUI7SUFBQSxZQUFXO0lBQUEsaUJBQWE7SUFDakQscUNBQXlCO0lBQUEsWUFBYztJQUFBLGlCQUFhO0lBQ3RELGlCQUFNO0lBQ1IsMEJBQWU7OztJQUxrQixlQUFZO0lBQVosa0NBQVk7SUFFaEIsZUFBVztJQUFYLGtDQUFXO0lBQ1gsZUFBYztJQUFkLHFDQUFjOzs7SUFHM0MsNkJBQ0U7SUFBQSxxQkFBNEM7SUFDNUMsOEJBQ0U7SUFBQSxxQkFBOEY7SUFDaEcsaUJBQU07SUFDUiwwQkFBZTs7OztBQTlDdkIsTUFBTSxPQUFPLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjtxREFBaEIsZ0JBQWdCOztRQUZoQixrQkFBWTs7a0RBRVosZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7QUFPRCxNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FBRmxCLGtCQUFZOztrREFFWixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFkZXItc3BhY2VyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hlYWRlclNwYWNlciB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1dGlscycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9VdGlsc0NvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1dGlsLWFjdGlvbiwgbm92by1hY3Rpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiIFthdHRyLmludmVyc2VdPVwiaW52ZXJzZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvYnV0dG9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVXRpbEFjdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8taGVhZGVyLGhlYWRlclt0aGVtZV0nLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnJvbGVdJzogJ2hlYWRpbmcnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcHJlZml4XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRpdGxlXCI+XG4gICAgICAgICAgPG5vdm8taWNvbiBjbGFzcz1cImhlYWRlci1pY29uXCIgKm5nSWY9XCJpY29uXCI+e3sgaWNvbiB9fTwvbm92by1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVzXCI+XG4gICAgICAgICAgICA8bm92by10aXRsZSBzaXplPVwibGFyZ2VcIj57eyB0aXRsZSB9fTwvbm92by10aXRsZT5cbiAgICAgICAgICAgIDxub3ZvLXRpdGxlIHNpemU9XCJzbWFsbFwiPnt7IHN1YlRpdGxlIH19PC9ub3ZvLXRpdGxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8taWNvbiwgW25vdm8taWNvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZXNcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHNtYWxsLCBub3ZvLXRpdGxlLCBbbm92by10aXRsZV0sIFtub3ZvLXN1YnRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInNlY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInV0aWxzXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3N1ZmZpeF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFjdGlvbnNcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1hY3Rpb24sW25vdm8tYWN0aW9uXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9IZWFkZXJDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIGhlYWRlckNsYXNzOiBzdHJpbmcgPSAnbm92by1oZWFkZXInO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbmRlbnNlZCcpXG4gIEBJbnB1dCgpXG4gIEBCb29sZWFuSW5wdXQoKVxuICBwdWJsaWMgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3ViVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGludmVyc2U6IHN0cmluZyA9ICdpbnZlcnNlJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhlYWRlci1zaXplLXNtYWxsJylcbiAgZ2V0IGhiX2lzU2l6ZVNtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhlYWRlci1zaXplLWxhcmdlJylcbiAgZ2V0IGhiX2lzU2l6ZUxhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhlYWRlci1zaXplLWRlZmF1bHQnKVxuICBnZXQgaGJfaXNTaXplRGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIVsnc21hbGwnLCAnbGFyZ2UnXS5pbmNsdWRlcyh0aGlzLnNpemUpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRoZW1lJylcbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuaW52ZXJzZSA9IHRoZW1lID09PSAnd2hpdGUnIHx8IHRoZW1lID09PSAnb2ZmLXdoaXRlJyB8fCB0aGVtZSA9PT0gJ2xpZ2h0JyA/IHVuZGVmaW5lZCA6ICdpbnZlcnNlJztcbiAgfVxuXG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKGljb246IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSBgYmhpLSR7aWNvbn1gO1xuICB9XG5cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbn1cbiJdfQ==