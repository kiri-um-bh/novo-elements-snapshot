import { Component, Input, TemplateRef } from '@angular/core';
import { BreadcrumbService } from './Breadcrumb.service';
import * as i0 from "@angular/core";
import * as i1 from "./Breadcrumb.service";
function BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r3.link, i0.ɵɵsanitizeUrl)("target", item_r3.target ? item_r3.target : "_self");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3.title);
} }
function BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.navigateTo($event, item_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("target", item_r3.target)("href", item_r3.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3.title);
} }
function BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3.title);
} }
function BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-breadcrumb-item", 2);
    i0.ɵɵtemplate(1, BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_a_1_Template, 2, 3, "a", 3);
    i0.ɵɵtemplate(2, BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_a_2_Template, 2, 3, "a", 4);
    i0.ɵɵtemplate(3, BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_span_3_Template, 2, 1, "span", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("showMenu", item_r3.showMenu)("isSearch", item_r3.isSearch)("menuList", item_r3.menuList)("customMenuTemplate", item_r3.customMenuTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r3.noNavigation && (!item_r3.linkType || item_r3.linkType === "hrefLink"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r3.noNavigation && item_r3.linkType === "routerLink");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3.noNavigation);
} }
function BreadcrumbElement_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BreadcrumbElement_ng_container_0_novo_breadcrumb_item_1_Template, 4, 7, "novo-breadcrumb-item", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.source);
} }
function BreadcrumbElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
const _c0 = ["*"];
export class BreadcrumbElement {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.source = [];
    }
    navigateTo($event, item) {
        this.breadcrumbService.navigateTo($event, item);
    }
}
BreadcrumbElement.ɵfac = function BreadcrumbElement_Factory(t) { return new (t || BreadcrumbElement)(i0.ɵɵdirectiveInject(i1.BreadcrumbService)); };
BreadcrumbElement.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbElement, selectors: [["novo-breadcrumb"]], inputs: { separatorIcon: "separatorIcon", source: "source" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "showMenu", "isSearch", "menuList", "customMenuTemplate", 4, "ngFor", "ngForOf"], [3, "showMenu", "isSearch", "menuList", "customMenuTemplate"], ["rel", "noopener", 3, "href", "target", 4, "ngIf"], ["rel", "noopener", 3, "target", "href", "click", 4, "ngIf"], ["rel", "noopener", 3, "href", "target"], ["rel", "noopener", 3, "target", "href", "click"]], template: function BreadcrumbElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, BreadcrumbElement_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, BreadcrumbElement_ng_container_1_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.source && ctx.source.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.source && ctx.source.length));
    } }, styles: ["[_nghost-%COMP%]{align-items:center;display:flex}[_nghost-%COMP%]     novo-breadcrumb-item:last-child .novo-breadcrumb-separator{display:none}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbElement, [{
        type: Component,
        args: [{
                selector: 'novo-breadcrumb',
                templateUrl: './Breadcrumb.html',
                styleUrls: ['./Breadcrumb.scss'],
            }]
    }], function () { return [{ type: i1.BreadcrumbService }]; }, { separatorIcon: [{
            type: Input
        }], source: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRjcnVtYi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2JyZWFkY3J1bWJzL0JyZWFkY3J1bWIudHMiLCJlbGVtZW50cy9icmVhZGNydW1icy9CcmVhZGNydW1iLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lDRXJELDRCQUNpRDtJQUFBLFlBQWdCO0lBQUEsaUJBQUk7OztJQUQ0QixxREFBa0IscURBQUE7SUFDbEUsZUFBZ0I7SUFBaEIsbUNBQWdCOzs7O0lBQ2pFLDRCQUN3RDtJQUFuQyx3UkFBa0M7SUFBQyxZQUFnQjtJQUFBLGlCQUFJOzs7SUFERyx1Q0FBc0Isd0NBQUE7SUFDN0MsZUFBZ0I7SUFBaEIsbUNBQWdCOzs7SUFDeEUsNEJBQWdDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTzs7O0lBQXZCLGVBQWdCO0lBQWhCLG1DQUFnQjs7O0lBTmxELCtDQUVFO0lBQUEsb0dBQ2lEO0lBQ2pELG9HQUN3RDtJQUN4RCwwR0FBZ0M7SUFDbEMsaUJBQXVCOzs7SUFQMkIsMkNBQTBCLDhCQUFBLDhCQUFBLGtEQUFBO0lBRXZFLGVBQThFO0lBQTlFLHNHQUE4RTtJQUU5RSxlQUE0RDtJQUE1RCxpRkFBNEQ7SUFFekQsZUFBeUI7SUFBekIsMkNBQXlCOzs7SUFQbkMsNkJBQ0U7SUFBQSxtSEFFRTtJQU1KLDBCQUFlOzs7SUFSUyxlQUEyQjtJQUEzQix1Q0FBMkI7OztJQVNuRCw2QkFDRTtJQUFBLGtCQUFZO0lBQ2QsMEJBQWU7OztBREhmLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFGL0MsV0FBTSxHQUF3QixFQUFFLENBQUM7SUFFaUIsQ0FBQztJQUU1RCxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7a0ZBUlUsaUJBQWlCO3NEQUFqQixpQkFBaUI7O1FDVDlCLG9GQUNFO1FBU0Ysb0ZBQ0U7O1FBWFksc0RBQStCO1FBVS9CLGVBQWtDO1FBQWxDLHlEQUFrQzs7a0RERG5DLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakM7b0VBRVUsYUFBYTtrQkFBckIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vQnJlYWRjcnVtYi5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZUNvbmZpZyB9IGZyb20gJy4vQnJlYWRjcnVtYi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9CcmVhZGNydW1iLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9CcmVhZGNydW1iLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkVsZW1lbnQge1xuICBASW5wdXQoKSBzZXBhcmF0b3JJY29uOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBzb3VyY2U6IEFycmF5PFNvdXJjZUNvbmZpZz4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFkY3J1bWJTZXJ2aWNlOiBCcmVhZGNydW1iU2VydmljZSkge31cblxuICBuYXZpZ2F0ZVRvKCRldmVudCwgaXRlbSkge1xuICAgIHRoaXMuYnJlYWRjcnVtYlNlcnZpY2UubmF2aWdhdGVUbygkZXZlbnQsIGl0ZW0pO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwic291cmNlICYmIHNvdXJjZS5sZW5ndGhcIj5cbiAgPG5vdm8tYnJlYWRjcnVtYi1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvdXJjZVwiIFtzaG93TWVudV09XCJpdGVtLnNob3dNZW51XCIgW2lzU2VhcmNoXT1cIml0ZW0uaXNTZWFyY2hcIlxuICAgIFttZW51TGlzdF09XCJpdGVtLm1lbnVMaXN0XCIgW2N1c3RvbU1lbnVUZW1wbGF0ZV09XCJpdGVtLmN1c3RvbU1lbnVUZW1wbGF0ZVwiPlxuICAgIDxhICpuZ0lmPVwiIWl0ZW0ubm9OYXZpZ2F0aW9uICYmICghaXRlbS5saW5rVHlwZSB8fCBpdGVtLmxpbmtUeXBlID09PSAnaHJlZkxpbmsnKVwiIHJlbD1cIm5vb3BlbmVyXCIgW2hyZWZdPVwiaXRlbS5saW5rXCJcbiAgICAgIFt0YXJnZXRdPVwiaXRlbS50YXJnZXQgPyBpdGVtLnRhcmdldCA6ICdfc2VsZidcIj57eyBpdGVtLnRpdGxlIH19PC9hPlxuICAgIDxhICpuZ0lmPVwiIWl0ZW0ubm9OYXZpZ2F0aW9uICYmIGl0ZW0ubGlua1R5cGUgPT09ICdyb3V0ZXJMaW5rJ1wiIHJlbD1cIm5vb3BlbmVyXCIgW3RhcmdldF09XCJpdGVtLnRhcmdldFwiXG4gICAgICBbaHJlZl09XCJpdGVtLmxpbmtcIiAoY2xpY2spPVwibmF2aWdhdGVUbygkZXZlbnQsIGl0ZW0pXCI+e3sgaXRlbS50aXRsZSB9fTwvYT5cbiAgICA8c3BhbiAqbmdJZj1cIml0ZW0ubm9OYXZpZ2F0aW9uXCI+e3sgaXRlbS50aXRsZSB9fTwvc3Bhbj5cbiAgPC9ub3ZvLWJyZWFkY3J1bWItaXRlbT5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiEoc291cmNlICYmIHNvdXJjZS5sZW5ndGgpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctY29udGFpbmVyPiJdfQ==