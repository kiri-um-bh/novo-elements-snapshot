import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BreadcrumbElement } from '../Breadcrumb';
import { BreadcrumbService } from '../Breadcrumb.service';
import * as i0 from "@angular/core";
import * as i1 from "../Breadcrumb";
import * as i2 from "../Breadcrumb.service";
import * as i3 from "@angular/common";
import * as i4 from "../../dropdown/Dropdown";
import * as i5 from "../../button/Button";
import * as i6 from "../../common/option/optgroup.component";
import * as i7 from "../../search/SearchBox";
import * as i8 from "../../common/option/option.component";
function BreadcrumbItemElement_ng_container_0_ng_template_3_Template(rf, ctx) { }
function BreadcrumbItemElement_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "novo-search", 14);
    i0.ɵɵlistener("searchFn", function BreadcrumbItemElement_ng_container_0_div_7_Template_novo_search_searchFn_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.searchEvent($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("search-in-dropdown");
} }
function BreadcrumbItemElement_ng_container_0_novo_option_8_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r14.link, i0.ɵɵsanitizeUrl)("target", item_r14.target ? item_r14.target : "_self");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.name);
} }
function BreadcrumbItemElement_ng_container_0_novo_option_8_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵlistener("click", function BreadcrumbItemElement_ng_container_0_novo_option_8_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const item_r14 = i0.ɵɵnextContext().$implicit; const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.navigateTo($event, item_r14); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("target", item_r14.target)("href", item_r14.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.name);
} }
function BreadcrumbItemElement_ng_container_0_novo_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-option", 15);
    i0.ɵɵtemplate(1, BreadcrumbItemElement_ng_container_0_novo_option_8_a_1_Template, 2, 3, "a", 16);
    i0.ɵɵtemplate(2, BreadcrumbItemElement_ng_container_0_novo_option_8_a_2_Template, 2, 3, "a", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", item_r14.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r14.linkType || item_r14.linkType === "hrefLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r14.linkType === "routerLink");
} }
const _c0 = function (a0) { return { "novo-breadcrumb-item-active": a0 }; };
function BreadcrumbItemElement_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 6, 7);
    i0.ɵɵtemplate(3, BreadcrumbItemElement_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementStart(4, "novo-dropdown");
    i0.ɵɵelement(5, "button", 9);
    i0.ɵɵelementStart(6, "novo-optgroup", 10);
    i0.ɵɵtemplate(7, BreadcrumbItemElement_ng_container_0_div_7_Template, 2, 2, "div", 11);
    i0.ɵɵtemplate(8, BreadcrumbItemElement_ng_container_0_novo_option_8_Template, 3, 3, "novo-option", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r0.isOpen));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.isSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.menuListDisplay);
} }
function BreadcrumbItemElement_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
function BreadcrumbItemElement_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "test");
    i0.ɵɵelementEnd();
} }
function BreadcrumbItemElement_ng_template_6_Template(rf, ctx) { }
function BreadcrumbItemElement_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1, " / ");
    i0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
const _c2 = ["*"];
export class BreadcrumbItemElement {
    constructor(breadcrumbComponent, breadcrumbService) {
        this.breadcrumbComponent = breadcrumbComponent;
        this.breadcrumbService = breadcrumbService;
        this.showMenu = false;
        this.isSearch = false;
        this.toggleEvent = new EventEmitter();
    }
    ngOnInit() {
        this.menuListDisplay = this.menuList;
    }
    onToggle($event) {
        this.isOpen = $event;
        this.toggleEvent.emit($event);
    }
    searchEvent($event) {
        if (this.menuList) {
            this.menuListDisplay = this.menuList.filter((item) => item.name.toLowerCase().includes($event.toLowerCase()));
        }
    }
    navigateTo($event, item) {
        this.breadcrumbService.navigateTo($event, item);
    }
}
BreadcrumbItemElement.ɵfac = function BreadcrumbItemElement_Factory(t) { return new (t || BreadcrumbItemElement)(i0.ɵɵdirectiveInject(i1.BreadcrumbElement), i0.ɵɵdirectiveInject(i2.BreadcrumbService)); };
BreadcrumbItemElement.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbItemElement, selectors: [["novo-breadcrumb-item"]], inputs: { showMenu: "showMenu", customMenuTemplate: "customMenuTemplate", menuList: "menuList", isSearch: "isSearch" }, outputs: { toggleEvent: "toggleEvent" }, ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[4, "ngIf", "ngIfElse"], ["breadcrumbContentTpl", ""], ["dropDownMenuTpl", ""], [1, "novo-breadcrumb-separator"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultSeparator", ""], [1, "novo-dropdown-no-border", "novo-dropdown-origin", "novo-breadcrumb-dropdown-origin", 3, "ngClass"], ["origin", ""], [3, "ngTemplateOutlet"], ["theme", "icon", "icon", "collapse", "size", "small"], [1, "novo-breadcrumb-dropdown-menu"], ["class", "dropdown-search-container", 4, "ngIf"], [3, "title", 4, "ngFor", "ngForOf"], [1, "dropdown-search-container"], ["alwaysOpen", "true", 3, "searchFn"], [3, "title"], ["rel", "noopener", 3, "href", "target", 4, "ngIf"], ["rel", "noopener", 3, "target", "href", "click", 4, "ngIf"], ["rel", "noopener", 3, "href", "target"], ["rel", "noopener", 3, "target", "href", "click"], [1, "novo-breadcrumb-item"]], template: function BreadcrumbItemElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, BreadcrumbItemElement_ng_container_0_Template, 9, 6, "ng-container", 0);
        i0.ɵɵtemplate(1, BreadcrumbItemElement_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, BreadcrumbItemElement_ng_template_3_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(5, "span", 3);
        i0.ɵɵtemplate(6, BreadcrumbItemElement_ng_template_6_Template, 0, 0, "ng-template", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, BreadcrumbItemElement_ng_template_7_Template, 2, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r6 = i0.ɵɵreference(8);
        i0.ɵɵproperty("ngIf", ctx.showMenu)("ngIfElse", _r1);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.breadcrumbComponent.separatorIcon ? ctx.breadcrumbComponent.separatorIcon : _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c1, ctx));
    } }, directives: [i3.NgIf, i3.NgTemplateOutlet, i3.NgClass, i4.NovoDropdownElement, i5.NovoButtonElement, i6.NovoOptgroup, i3.NgForOf, i7.NovoSearchBoxElement, i8.NovoOption], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}.novo-breadcrumb-font-style[_ngcontent-%COMP%], [_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a, [_nghost-%COMP%]   .novo-breadcrumb-separator[_ngcontent-%COMP%]{color:inherit;display:inline;font-size:1.2rem;font-weight:400}[_nghost-%COMP%], [_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:row nowrap}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]{cursor:auto}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a:hover{text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a{color:#4a89dc;cursor:pointer}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a:focus{text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-down-icon[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;height:16px;margin-right:-5px;outline:none;text-align:center;vertical-align:middle;width:16px}[_nghost-%COMP%]   .novo-breadcrumb-down-icon[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--text-main,#3d464d)}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]{color:var(--text-main,#3d464d)}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]     a{color:var(--text-main,#3d464d);text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--text-main,#3d464d)}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-main,#3d464d)}[_nghost-%COMP%]   .novo-breadcrumb-separator[_ngcontent-%COMP%]{margin:0 3px}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]{max-width:200px;padding:10px 0}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;font-size:12px;line-height:36px;overflow:hidden;padding:0 15px;text-overflow:ellipsis;white-space:nowrap;width:200px}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3d464d;display:inline-block;line-height:36px;width:170px}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#dbdbdb}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{text-decoration:none}[_nghost-%COMP%]   .novo-search-container[_ngcontent-%COMP%]{max-width:200px}[_nghost-%COMP%]   span.novo-breadcrumb-dropdown-origin[_ngcontent-%COMP%]{display:inline-flex;min-width:unset;padding:0}[_nghost-%COMP%]   novo-search[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbItemElement, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'novo-breadcrumb-item',
                templateUrl: './BreadcrumbItem.html',
                styleUrls: ['./BreadcrumbItem.scss'],
            }]
    }], function () { return [{ type: i1.BreadcrumbElement }, { type: i2.BreadcrumbService }]; }, { showMenu: [{
            type: Input
        }], customMenuTemplate: [{
            type: Input
        }], menuList: [{
            type: Input
        }], isSearch: [{
            type: Input
        }], toggleEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRjcnVtYkl0ZW0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtL0JyZWFkY3J1bWJJdGVtLnRzIiwiZWxlbWVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtL0JyZWFkY3J1bWJJdGVtLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7O0lDS2xELCtCQUNFO0lBQUEsdUNBQTZHO0lBQTlFLG9PQUFnQztJQUFnQyxpQkFBYztJQUMvRyxpQkFBTTs7SUFENEQsZUFBOEI7SUFBOUIsbUNBQThCOzs7SUFHOUYsNkJBQ2lEO0lBQUEsWUFBZTtJQUFBLGlCQUFJOzs7SUFEVixzREFBa0IsdURBQUE7SUFDM0IsZUFBZTtJQUFmLG1DQUFlOzs7O0lBQ2hFLDZCQUNxQztJQUFuQyx3UkFBa0M7SUFBQyxZQUFlO0lBQUEsaUJBQUk7OztJQURDLHdDQUFzQix5Q0FBQTtJQUMxQyxlQUFlO0lBQWYsbUNBQWU7OztJQUp0RCx1Q0FDRTtJQUFBLGdHQUNpRDtJQUNqRCxnR0FDcUM7SUFDdkMsaUJBQWM7OztJQUxvQyxnREFBdUI7SUFDcEUsZUFBc0Q7SUFBdEQsNkVBQXNEO0lBRXRELGVBQXNDO0lBQXRDLHlEQUFzQzs7OztJQWJuRCw2QkFDRTtJQUFBLGtDQUVFO0lBQUEscUdBQXVEO0lBQ3ZELHFDQUNFO0lBQUEsNEJBQTJEO0lBQzNELHlDQUNFO0lBQUEsc0ZBQ0U7SUFFRixzR0FDRTtJQUtKLGlCQUFnQjtJQUNsQixpQkFBZ0I7SUFDbEIsaUJBQU87SUFDVCwwQkFBZTs7OztJQWxCUCxlQUFxRDtJQUFyRCxtRUFBcUQ7SUFFNUMsZUFBeUM7SUFBekMsc0NBQXlDO0lBSTdDLGVBQWdCO0lBQWhCLHNDQUFnQjtJQUdSLGVBQW9DO0lBQXBDLGdEQUFvQzs7O0lBWXZELGdDQUNFO0lBQUEsa0JBQVk7SUFDZCxpQkFBTzs7O0lBSVAsMkJBQUs7SUFBQSxvQkFBSTtJQUFBLGlCQUFNOzs7O0lBY2YsK0JBQ0U7SUFBQSxtQkFDRjtJQUFBLGlCQUFPOzs7O0FEakNULE1BQU0sT0FBTyxxQkFBcUI7SUFVaEMsWUFBbUIsbUJBQXNDLEVBQVUsaUJBQW9DO1FBQXBGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVDlGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBS3VDLENBQUM7SUFDM0csUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsUUFBUSxDQUFDLE1BQU07UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLE1BQU07UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0c7SUFDSCxDQUFDO0lBQ0QsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7OzBGQXpCVSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7UUNYbEMsd0ZBQ0U7UUFvQkYsdUhBQ0U7UUFLRix1SEFDRTtRQUlGLCtCQUNFO1FBQUEsc0ZBS0E7UUFDRixpQkFBTztRQUVQLHVIQUNFOzs7O1FBMUNZLG1DQUEyQyxpQkFBQTtRQWtDckQsZUFBNkc7UUFBN0csc0hBQTZHLDREQUFBOztrRER2QnBHLHFCQUFxQjtjQU5qQyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDO29HQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJFbGVtZW50IH0gZnJvbSAnLi4vQnJlYWRjcnVtYic7XG5pbXBvcnQgeyBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4uL0JyZWFkY3J1bWIuc2VydmljZSc7XG5pbXBvcnQgeyBNZW51Q29uZmlnIH0gZnJvbSAnLi4vQnJlYWRjcnVtYi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdub3ZvLWJyZWFkY3J1bWItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9CcmVhZGNydW1iSXRlbS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vQnJlYWRjcnVtYkl0ZW0uc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iSXRlbUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93TWVudSA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21NZW51VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIG1lbnVMaXN0OiBBcnJheTxNZW51Q29uZmlnPjtcbiAgQElucHV0KCkgaXNTZWFyY2ggPSBmYWxzZTtcbiAgQE91dHB1dCgpIHRvZ2dsZUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG1lbnVMaXN0RGlzcGxheTogQXJyYXk8TWVudUNvbmZpZz47XG4gIGlzT3BlbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYnJlYWRjcnVtYkNvbXBvbmVudDogQnJlYWRjcnVtYkVsZW1lbnQsIHByaXZhdGUgYnJlYWRjcnVtYlNlcnZpY2U6IEJyZWFkY3J1bWJTZXJ2aWNlKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVMaXN0RGlzcGxheSA9IHRoaXMubWVudUxpc3Q7XG4gIH1cbiAgb25Ub2dnbGUoJGV2ZW50KSB7XG4gICAgdGhpcy5pc09wZW4gPSAkZXZlbnQ7XG4gICAgdGhpcy50b2dnbGVFdmVudC5lbWl0KCRldmVudCk7XG4gIH1cbiAgc2VhcmNoRXZlbnQoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubWVudUxpc3QpIHtcbiAgICAgIHRoaXMubWVudUxpc3REaXNwbGF5ID0gdGhpcy5tZW51TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCRldmVudC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgfVxuICB9XG4gIG5hdmlnYXRlVG8oJGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5icmVhZGNydW1iU2VydmljZS5uYXZpZ2F0ZVRvKCRldmVudCwgaXRlbSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93TWVudTsgZWxzZSBicmVhZGNydW1iQ29udGVudFRwbFwiPlxuICA8c3BhbiBbbmdDbGFzc109XCJ7ICdub3ZvLWJyZWFkY3J1bWItaXRlbS1hY3RpdmUnOiBpc09wZW4gfVwiICNvcmlnaW5cbiAgICBjbGFzcz1cIm5vdm8tZHJvcGRvd24tbm8tYm9yZGVyIG5vdm8tZHJvcGRvd24tb3JpZ2luIG5vdm8tYnJlYWRjcnVtYi1kcm9wZG93bi1vcmlnaW5cIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnJlYWRjcnVtYkNvbnRlbnRUcGxcIj48L25nLXRlbXBsYXRlPlxuICAgIDxub3ZvLWRyb3Bkb3duPlxuICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwiY29sbGFwc2VcIiBzaXplPVwic21hbGxcIj48L2J1dHRvbj5cbiAgICAgIDxub3ZvLW9wdGdyb3VwIGNsYXNzPVwibm92by1icmVhZGNydW1iLWRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImlzU2VhcmNoXCIgY2xhc3M9XCJkcm9wZG93bi1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5vdm8tc2VhcmNoIGFsd2F5c09wZW49XCJ0cnVlXCIgKHNlYXJjaEZuKT1cInNlYXJjaEV2ZW50KCRldmVudClcIiBbY2xhc3NdPVwiJ3NlYXJjaC1pbi1kcm9wZG93bidcIj48L25vdm8tc2VhcmNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5vdm8tb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1lbnVMaXN0RGlzcGxheVwiIHRpdGxlPVwie3sgaXRlbS5uYW1lIH19XCI+XG4gICAgICAgICAgPGEgKm5nSWY9XCIhaXRlbS5saW5rVHlwZSB8fCBpdGVtLmxpbmtUeXBlID09PSAnaHJlZkxpbmsnXCIgW2hyZWZdPVwiaXRlbS5saW5rXCIgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgICAgW3RhcmdldF09XCJpdGVtLnRhcmdldCA/IGl0ZW0udGFyZ2V0IDogJ19zZWxmJ1wiPnt7IGl0ZW0ubmFtZSB9fTwvYT5cbiAgICAgICAgICA8YSAqbmdJZj1cIml0ZW0ubGlua1R5cGUgPT09ICdyb3V0ZXJMaW5rJ1wiIHJlbD1cIm5vb3BlbmVyXCIgW3RhcmdldF09XCJpdGVtLnRhcmdldFwiIFtocmVmXT1cIml0ZW0ubGlua1wiXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2aWdhdGVUbygkZXZlbnQsIGl0ZW0pXCI+e3sgaXRlbS5uYW1lIH19PC9hPlxuICAgICAgICA8L25vdm8tb3B0aW9uPlxuICAgICAgPC9ub3ZvLW9wdGdyb3VwPlxuICAgIDwvbm92by1kcm9wZG93bj5cbiAgPC9zcGFuPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjYnJlYWRjcnVtYkNvbnRlbnRUcGw+XG4gIDxzcGFuIGNsYXNzPVwibm92by1icmVhZGNydW1iLWl0ZW1cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZHJvcERvd25NZW51VHBsPlxuICA8ZGl2PnRlc3Q8L2Rpdj5cblxuPC9uZy10ZW1wbGF0ZT5cblxuPHNwYW4gY2xhc3M9XCJub3ZvLWJyZWFkY3J1bWItc2VwYXJhdG9yXCI+XG4gIDxuZy10ZW1wbGF0ZVxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJyZWFkY3J1bWJDb21wb25lbnQuc2VwYXJhdG9ySWNvbiA/IGJyZWFkY3J1bWJDb21wb25lbnQuc2VwYXJhdG9ySWNvbiA6IGRlZmF1bHRTZXBhcmF0b3JcIlxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgJGltcGxpY2l0OiB0aGlzXG4gIH1cIj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvc3Bhbj5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0U2VwYXJhdG9yPlxuICA8c3BhbiBjbGFzcz1cIm5vdm8tYnJlYWRjcnVtYi1zZXBhcmF0b3JcIj5cbiAgICAvXG4gIDwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+Il19