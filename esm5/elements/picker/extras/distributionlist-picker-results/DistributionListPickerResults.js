import { __extends } from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../services/novo-label-service";
import * as i3 from "@angular/common";
import * as i4 from "../../../loading/Loading";
import * as i5 from "../../../list/List";
function DistributionListPickerResults_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelement(1, "novo-loading", 3);
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return { year: "numeric", month: "numeric", day: "numeric" }; };
function DistributionListPickerResults_novo_list_1_novo_list_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 7);
    i0.ɵɵlistener("click", function DistributionListPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.selectMatch($event); })("mouseenter", function DistributionListPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r6); var match_r4 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectActive(match_r4); });
    i0.ɵɵelementStart(1, "item-header");
    i0.ɵɵelementStart(2, "item-title");
    i0.ɵɵelement(3, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "item-content", 9);
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵelementStart(6, "span", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵelementStart(11, "span", 10);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r4 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", match_r4 === ctx_r2.activeMatch)("disabled", ctx_r2.preselected(match_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHtml", ctx_r2.sanitizeHTML(match_r4.label), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.distributionListOwner, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.owner == null ? null : match_r4.data.owner.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.dateAdded, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatDateWithFormat(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.dateAdded, i0.ɵɵpureFunction0(9, _c0)));
} }
function DistributionListPickerResults_novo_list_1_novo_loading_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 3);
} }
function DistributionListPickerResults_novo_list_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list", 4);
    i0.ɵɵtemplate(1, DistributionListPickerResults_novo_list_1_novo_list_item_1_Template, 15, 10, "novo-list-item", 5);
    i0.ɵɵtemplate(2, DistributionListPickerResults_novo_list_1_novo_loading_2_Template, 1, 0, "novo-loading", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading && (ctx_r1.matches == null ? null : ctx_r1.matches.length) > 0);
} }
var DistributionListPickerResults = /** @class */ (function (_super) {
    __extends(DistributionListPickerResults, _super);
    function DistributionListPickerResults(element, sanitizer, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.sanitizer = sanitizer;
        _this.labels = labels;
        _this.active = true;
        _this.sanitizer = sanitizer;
        return _this;
    }
    Object.defineProperty(DistributionListPickerResults.prototype, "isHidden", {
        get: function () {
            return this.matches.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    DistributionListPickerResults.prototype.getListElement = function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    DistributionListPickerResults.prototype.sanitizeHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    DistributionListPickerResults.ɵfac = function DistributionListPickerResults_Factory(t) { return new (t || DistributionListPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    DistributionListPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: DistributionListPickerResults, selectors: [["distribution-list-picker-results"]], hostVars: 3, hostBindings: function DistributionListPickerResults_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("hidden", ctx.isHidden);
            i0.ɵɵclassProp("active", ctx.active);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "picker-loading", 4, "ngIf"], ["direction", "vertical", 4, "ngIf"], [1, "picker-loading"], ["theme", "line"], ["direction", "vertical"], [3, "active", "disabled", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["theme", "line", 4, "ngIf"], [3, "click", "mouseenter"], [3, "innerHtml"], ["direction", "horizontal"], [1, "label"]], template: function DistributionListPickerResults_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DistributionListPickerResults_section_0_Template, 2, 0, "section", 0);
            i0.ɵɵtemplate(1, DistributionListPickerResults_novo_list_1_Template, 3, 2, "novo-list", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading && !(ctx.matches == null ? null : ctx.matches.length));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.matches == null ? null : ctx.matches.length) > 0 && !ctx.hasError);
        } }, directives: [i3.NgIf, i4.NovoLoadingElement, i5.NovoListElement, i3.NgForOf, i5.NovoListItemElement, i5.NovoItemHeaderElement, i5.NovoItemTitleElement, i5.NovoItemContentElement], encapsulation: 2 });
    return DistributionListPickerResults;
}(BasePickerResults));
export { DistributionListPickerResults };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DistributionListPickerResults, [{
        type: Component,
        args: [{
                selector: 'distribution-list-picker-results',
                template: "\n        <section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\">\n            <novo-loading theme=\"line\"></novo-loading>\n        </section>\n        <novo-list direction=\"vertical\" *ngIf=\"matches?.length > 0 && !hasError\">\n            <novo-list-item *ngFor=\"let match of matches\" (click)=\"selectMatch($event)\" [class.active]=\"match === activeMatch\" (mouseenter)=\"selectActive(match)\" [class.disabled]=\"preselected(match)\">\n                <item-header>\n                    <item-title>\n                        <span [innerHtml]=\"sanitizeHTML(match.label)\"></span>\n                    </item-title>\n                </item-header>\n                <item-content direction=\"horizontal\">\n                    <p>\n                        <span class='label'>{{ labels.distributionListOwner }}: </span><span>{{ match?.data?.owner?.name }}</span>\n                    </p>\n                    <p>\n                        <span class='label'>{{ labels.dateAdded }}: </span><span>{{ labels.formatDateWithFormat(match?.data?.dateAdded, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>\n                    </p>\n                </item-content>\n            </novo-list-item>\n            <novo-loading theme=\"line\" *ngIf=\"isLoading && matches?.length > 0\"></novo-loading>\n        </novo-list>\n    ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: i2.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { active: [{
            type: HostBinding,
            args: ['class.active']
        }], isHidden: [{
            type: HostBinding,
            args: ['hidden']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9kaXN0cmlidXRpb25saXN0LXBpY2tlci1yZXN1bHRzL0Rpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxTQUFTO0FBQ1QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7O0lBS25FLGtDQUNJO0lBQUEsa0NBQTBDO0lBQzlDLGlCQUFVOzs7OztJQUVOLHlDQUNJO0lBRDBDLDRPQUE2QixvUUFBQTtJQUN2RSxtQ0FDSTtJQUFBLGtDQUNJO0lBQUEsMEJBQXFEO0lBQ3pELGlCQUFhO0lBQ2pCLGlCQUFjO0lBQ2QsdUNBQ0k7SUFBQSx5QkFDSTtJQUFBLGdDQUFvQjtJQUFBLFlBQW9DO0lBQUEsaUJBQU87SUFBQSw0QkFBTTtJQUFBLFlBQThCO0lBQUEsaUJBQU87SUFDOUcsaUJBQUk7SUFDSiwwQkFDSTtJQUFBLGlDQUFvQjtJQUFBLGFBQXdCO0lBQUEsaUJBQU87SUFBQSw2QkFBTTtJQUFBLGFBQWdIO0lBQUEsaUJBQU87SUFDcEwsaUJBQUk7SUFDUixpQkFBZTtJQUNuQixpQkFBaUI7Ozs7SUFkMkQseURBQXNDLDBDQUFBO0lBR2hHLGVBQXVDO0lBQXZDLGtGQUF1QztJQUt6QixlQUFvQztJQUFwQyxvRUFBb0M7SUFBYSxlQUE4QjtJQUE5Qiw0SUFBOEI7SUFHL0UsZUFBd0I7SUFBeEIsd0RBQXdCO0lBQWEsZUFBZ0g7SUFBaEgsc0tBQWdIOzs7SUFJckwsa0NBQW1GOzs7SUFoQnZGLG9DQUNJO0lBQUEsa0hBQ0k7SUFjSiw0R0FBb0U7SUFDeEUsaUJBQVk7OztJQWhCUSxlQUE2QjtJQUE3Qix3Q0FBNkI7SUFlbEIsZUFBd0M7SUFBeEMsc0dBQXdDOztBQXRCL0U7SUEwQm1ELGlEQUFpQjtJQVFsRSx1Q0FBWSxPQUFtQixFQUFVLFNBQXVCLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUF6SCxZQUNFLGtCQUFNLE9BQU8sRUFBRSxHQUFHLENBQUMsU0FFcEI7UUFId0MsZUFBUyxHQUFULFNBQVMsQ0FBYztRQUFTLFlBQU0sR0FBTixNQUFNLENBQWtCO1FBTmpHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFRckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0lBQzdCLENBQUM7SUFSRCxzQkFDSSxtREFBUTthQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFPRCxzREFBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELG9EQUFZLEdBQVosVUFBYSxJQUFTO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDOzhHQW5CVSw2QkFBNkI7c0VBQTdCLDZCQUE2Qjs7OztZQXZCbEMsc0ZBQ0k7WUFFSiwwRkFDSTs7WUFKNEIsMEZBQXFDO1lBR3JDLGVBQXdDO1lBQXhDLDZGQUF3Qzs7d0NBYmhGO0NBcURDLEFBOUNELENBMEJtRCxpQkFBaUIsR0FvQm5FO1NBcEJZLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBMUJ6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsUUFBUSxFQUFFLGsxQ0FzQlA7YUFDSjs7a0JBRUUsV0FBVzttQkFBQyxjQUFjOztrQkFFMUIsV0FBVzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlzdHJpYnV0aW9uLWxpc3QtcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXM/Lmxlbmd0aFwiPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgKm5nSWY9XCJtYXRjaGVzPy5sZW5ndGggPiAwICYmICFoYXNFcnJvclwiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCIgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIiBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIiBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwic2FuaXRpemVIVE1MKG1hdGNoLmxhYmVsKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2xhYmVsJz57eyBsYWJlbHMuZGlzdHJpYnV0aW9uTGlzdE93bmVyIH19OiA8L3NwYW4+PHNwYW4+e3sgbWF0Y2g/LmRhdGE/Lm93bmVyPy5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2xhYmVsJz57eyBsYWJlbHMuZGF0ZUFkZGVkIH19OiA8L3NwYW4+PHNwYW4+e3sgbGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KG1hdGNoPy5kYXRhPy5kYXRlQWRkZWQsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcz8ubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXG4gIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICAgIHRoaXMuc2FuaXRpemVyID0gc2FuaXRpemVyO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzYW5pdGl6ZUhUTUwoaHRtbDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gIH1cbn1cbiJdfQ==