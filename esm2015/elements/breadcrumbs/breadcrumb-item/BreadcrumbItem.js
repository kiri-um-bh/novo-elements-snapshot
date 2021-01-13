import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BreadcrumbElement } from '../Breadcrumb';
import { BreadcrumbService } from '../Breadcrumb.service';
import * as i0 from "@angular/core";
import * as i1 from "../Breadcrumb";
import * as i2 from "../Breadcrumb.service";
import * as i3 from "@angular/common";
import * as i4 from "../../dropdown/Dropdown";
import * as i5 from "../../button/Button";
import * as i6 from "../../search/SearchBox";
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
function BreadcrumbItemElement_ng_container_0_item_8_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r14.link, i0.ɵɵsanitizeUrl)("target", item_r14.target ? item_r14.target : "_self");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.name);
} }
function BreadcrumbItemElement_ng_container_0_item_8_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵlistener("click", function BreadcrumbItemElement_ng_container_0_item_8_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const item_r14 = i0.ɵɵnextContext().$implicit; const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.navigateTo($event, item_r14); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("target", item_r14.target)("href", item_r14.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.name);
} }
function BreadcrumbItemElement_ng_container_0_item_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item", 15);
    i0.ɵɵtemplate(1, BreadcrumbItemElement_ng_container_0_item_8_a_1_Template, 2, 3, "a", 16);
    i0.ɵɵtemplate(2, BreadcrumbItemElement_ng_container_0_item_8_a_2_Template, 2, 3, "a", 17);
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
    i0.ɵɵelementStart(6, "list", 10);
    i0.ɵɵtemplate(7, BreadcrumbItemElement_ng_container_0_div_7_Template, 2, 2, "div", 11);
    i0.ɵɵtemplate(8, BreadcrumbItemElement_ng_container_0_item_8_Template, 3, 3, "item", 12);
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
    } }, directives: [i3.NgIf, i3.NgTemplateOutlet, i3.NgClass, i4.NovoDropdownElement, i5.NovoButtonElement, i4.NovoDropdownListElement, i3.NgForOf, i6.NovoSearchBoxElement, i4.NovoItemElement], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}.novo-breadcrumb-font-style[_ngcontent-%COMP%], [_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a, [_nghost-%COMP%]   .novo-breadcrumb-separator[_ngcontent-%COMP%]{color:#3d464d;font-size:1rem}[_nghost-%COMP%], [_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:row nowrap}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]{cursor:auto}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a:hover{color:#3d464d;text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a{cursor:pointer}[_nghost-%COMP%]   .novo-breadcrumb-item[_ngcontent-%COMP%]     a:focus{text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-down-icon[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;height:16px;margin-right:-5px;outline:none;text-align:center;vertical-align:middle;width:16px}[_nghost-%COMP%]   .novo-breadcrumb-down-icon[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#3d464d}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]{color:#3d464d}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]     a{color:#3d464d;text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#3d464d}[_nghost-%COMP%]   .novo-breadcrumb-item-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d464d}[_nghost-%COMP%]   .novo-breadcrumb-separator[_ngcontent-%COMP%]{margin:0 3px}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]{max-width:200px;padding:10px 0}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;font-size:12px;line-height:36px;overflow:hidden;padding:0 15px;text-overflow:ellipsis;white-space:nowrap;width:200px}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3d464d;display:inline-block;line-height:36px;width:170px}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{text-decoration:none}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#d9dadc}[_nghost-%COMP%]   .novo-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{text-decoration:none}[_nghost-%COMP%]   .novo-search-container[_ngcontent-%COMP%]{max-width:200px}[_nghost-%COMP%]   span.novo-breadcrumb-dropdown-origin[_ngcontent-%COMP%]{display:inline-flex;min-width:unset;padding:0}[_nghost-%COMP%]   novo-search[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRjcnVtYkl0ZW0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0vQnJlYWRjcnVtYkl0ZW0udHMiLCJlbGVtZW50cy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0vQnJlYWRjcnVtYkl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7O0lDS2xELCtCQUNFO0lBQUEsdUNBQTZHO0lBQTlFLG9PQUFnQztJQUFnQyxpQkFBYztJQUMvRyxpQkFBTTs7SUFENEQsZUFBOEI7SUFBOUIsbUNBQThCOzs7SUFHOUYsNkJBQ2lEO0lBQUEsWUFBZTtJQUFBLGlCQUFJOzs7SUFEVixzREFBa0IsdURBQUE7SUFDM0IsZUFBZTtJQUFmLG1DQUFlOzs7O0lBQ2hFLDZCQUNxQztJQUFuQyxpUkFBa0M7SUFBQyxZQUFlO0lBQUEsaUJBQUk7OztJQURDLHdDQUFzQix5Q0FBQTtJQUMxQyxlQUFlO0lBQWYsbUNBQWU7OztJQUp0RCxnQ0FDRTtJQUFBLHlGQUNpRDtJQUNqRCx5RkFDcUM7SUFDdkMsaUJBQU87OztJQUxvQyxnREFBdUI7SUFDN0QsZUFBc0Q7SUFBdEQsNkVBQXNEO0lBRXRELGVBQXNDO0lBQXRDLHlEQUFzQzs7OztJQWJuRCw2QkFDRTtJQUFBLGtDQUVFO0lBQUEscUdBQXVEO0lBQ3ZELHFDQUNFO0lBQUEsNEJBQTJEO0lBQzNELGdDQUNFO0lBQUEsc0ZBQ0U7SUFFRix3RkFDRTtJQUtKLGlCQUFPO0lBQ1QsaUJBQWdCO0lBQ2xCLGlCQUFPO0lBQ1QsMEJBQWU7Ozs7SUFsQlAsZUFBcUQ7SUFBckQsbUVBQXFEO0lBRTVDLGVBQXlDO0lBQXpDLHNDQUF5QztJQUk3QyxlQUFnQjtJQUFoQixzQ0FBZ0I7SUFHZixlQUFvQztJQUFwQyxnREFBb0M7OztJQVloRCxnQ0FDRTtJQUFBLGtCQUFZO0lBQ2QsaUJBQU87OztJQUlQLDJCQUFLO0lBQUEsb0JBQUk7SUFBQSxpQkFBTTs7OztJQWNmLCtCQUNFO0lBQUEsbUJBQ0Y7SUFBQSxpQkFBTzs7OztBRGpDVCxNQUFNLE9BQU8scUJBQXFCO0lBVWhDLFlBQW1CLG1CQUFzQyxFQUFVLGlCQUFvQztRQUFwRix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVQ5RixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUt1QyxDQUFDO0lBQzNHLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUNELFFBQVEsQ0FBQyxNQUFNO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9HO0lBQ0gsQ0FBQztJQUNELFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSTtRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDOzswRkF6QlUscUJBQXFCOzBEQUFyQixxQkFBcUI7O1FDWGxDLHdGQUNFO1FBb0JGLHVIQUNFO1FBS0YsdUhBQ0U7UUFJRiwrQkFDRTtRQUFBLHNGQUtBO1FBQ0YsaUJBQU87UUFFUCx1SEFDRTs7OztRQTFDWSxtQ0FBMkMsaUJBQUE7UUFrQ3JELGVBQTZHO1FBQTdHLHNIQUE2Ryw0REFBQTs7a0REdkJwRyxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQztvR0FFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iRWxlbWVudCB9IGZyb20gJy4uL0JyZWFkY3J1bWInO1xuaW1wb3J0IHsgQnJlYWRjcnVtYlNlcnZpY2UgfSBmcm9tICcuLi9CcmVhZGNydW1iLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVudUNvbmZpZyB9IGZyb20gJy4uL0JyZWFkY3J1bWIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbm92by1icmVhZGNydW1iLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vQnJlYWRjcnVtYkl0ZW0uaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL0JyZWFkY3J1bWJJdGVtLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkl0ZW1FbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvd01lbnUgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tTWVudVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBtZW51TGlzdDogQXJyYXk8TWVudUNvbmZpZz47XG4gIEBJbnB1dCgpIGlzU2VhcmNoID0gZmFsc2U7XG4gIEBPdXRwdXQoKSB0b2dnbGVFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBtZW51TGlzdERpc3BsYXk6IEFycmF5PE1lbnVDb25maWc+O1xuICBpc09wZW46IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGJyZWFkY3J1bWJDb21wb25lbnQ6IEJyZWFkY3J1bWJFbGVtZW50LCBwcml2YXRlIGJyZWFkY3J1bWJTZXJ2aWNlOiBCcmVhZGNydW1iU2VydmljZSkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51TGlzdERpc3BsYXkgPSB0aGlzLm1lbnVMaXN0O1xuICB9XG4gIG9uVG9nZ2xlKCRldmVudCkge1xuICAgIHRoaXMuaXNPcGVuID0gJGV2ZW50O1xuICAgIHRoaXMudG9nZ2xlRXZlbnQuZW1pdCgkZXZlbnQpO1xuICB9XG4gIHNlYXJjaEV2ZW50KCRldmVudCkge1xuICAgIGlmICh0aGlzLm1lbnVMaXN0KSB7XG4gICAgICB0aGlzLm1lbnVMaXN0RGlzcGxheSA9IHRoaXMubWVudUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygkZXZlbnQudG9Mb3dlckNhc2UoKSkpO1xuICAgIH1cbiAgfVxuICBuYXZpZ2F0ZVRvKCRldmVudCwgaXRlbSkge1xuICAgIHRoaXMuYnJlYWRjcnVtYlNlcnZpY2UubmF2aWdhdGVUbygkZXZlbnQsIGl0ZW0pO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd01lbnU7IGVsc2UgYnJlYWRjcnVtYkNvbnRlbnRUcGxcIj5cbiAgPHNwYW4gW25nQ2xhc3NdPVwieyAnbm92by1icmVhZGNydW1iLWl0ZW0tYWN0aXZlJzogaXNPcGVuIH1cIiAjb3JpZ2luXG4gICAgY2xhc3M9XCJub3ZvLWRyb3Bkb3duLW5vLWJvcmRlciBub3ZvLWRyb3Bkb3duLW9yaWdpbiBub3ZvLWJyZWFkY3J1bWItZHJvcGRvd24tb3JpZ2luXCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJyZWFkY3J1bWJDb250ZW50VHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8bm92by1kcm9wZG93bj5cbiAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cImNvbGxhcHNlXCIgc2l6ZT1cInNtYWxsXCI+PC9idXR0b24+XG4gICAgICA8bGlzdCBjbGFzcz1cIm5vdm8tYnJlYWRjcnVtYi1kcm9wZG93bi1tZW51XCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc1NlYXJjaFwiIGNsYXNzPVwiZHJvcGRvd24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxub3ZvLXNlYXJjaCBhbHdheXNPcGVuPVwidHJ1ZVwiIChzZWFyY2hGbik9XCJzZWFyY2hFdmVudCgkZXZlbnQpXCIgW2NsYXNzXT1cIidzZWFyY2gtaW4tZHJvcGRvd24nXCI+PC9ub3ZvLXNlYXJjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1lbnVMaXN0RGlzcGxheVwiIHRpdGxlPVwie3sgaXRlbS5uYW1lIH19XCI+XG4gICAgICAgICAgPGEgKm5nSWY9XCIhaXRlbS5saW5rVHlwZSB8fCBpdGVtLmxpbmtUeXBlID09PSAnaHJlZkxpbmsnXCIgW2hyZWZdPVwiaXRlbS5saW5rXCIgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgICAgW3RhcmdldF09XCJpdGVtLnRhcmdldCA/IGl0ZW0udGFyZ2V0IDogJ19zZWxmJ1wiPnt7IGl0ZW0ubmFtZSB9fTwvYT5cbiAgICAgICAgICA8YSAqbmdJZj1cIml0ZW0ubGlua1R5cGUgPT09ICdyb3V0ZXJMaW5rJ1wiIHJlbD1cIm5vb3BlbmVyXCIgW3RhcmdldF09XCJpdGVtLnRhcmdldFwiIFtocmVmXT1cIml0ZW0ubGlua1wiXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2aWdhdGVUbygkZXZlbnQsIGl0ZW0pXCI+e3sgaXRlbS5uYW1lIH19PC9hPlxuICAgICAgICA8L2l0ZW0+XG4gICAgICA8L2xpc3Q+XG4gICAgPC9ub3ZvLWRyb3Bkb3duPlxuICA8L3NwYW4+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNicmVhZGNydW1iQ29udGVudFRwbD5cbiAgPHNwYW4gY2xhc3M9XCJub3ZvLWJyZWFkY3J1bWItaXRlbVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkcm9wRG93bk1lbnVUcGw+XG4gIDxkaXY+dGVzdDwvZGl2PlxuXG48L25nLXRlbXBsYXRlPlxuXG48c3BhbiBjbGFzcz1cIm5vdm8tYnJlYWRjcnVtYi1zZXBhcmF0b3JcIj5cbiAgPG5nLXRlbXBsYXRlXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnJlYWRjcnVtYkNvbXBvbmVudC5zZXBhcmF0b3JJY29uID8gYnJlYWRjcnVtYkNvbXBvbmVudC5zZXBhcmF0b3JJY29uIDogZGVmYXVsdFNlcGFyYXRvclwiXG4gICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAkaW1wbGljaXQ6IHRoaXNcbiAgfVwiPlxuICA8L25nLXRlbXBsYXRlPlxuPC9zcGFuPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRTZXBhcmF0b3I+XG4gIDxzcGFuIGNsYXNzPVwibm92by1icmVhZGNydW1iLXNlcGFyYXRvclwiPlxuICAgIC9cbiAgPC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT4iXX0=