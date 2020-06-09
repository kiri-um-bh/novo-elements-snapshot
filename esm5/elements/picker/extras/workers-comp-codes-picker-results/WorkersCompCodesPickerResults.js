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
function WorkersCompCodesPickerResults_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelement(1, "novo-loading", 3);
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return { year: "numeric", month: "numeric", day: "numeric" }; };
function WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 7);
    i0.ɵɵlistener("click", function WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.selectMatch($event); })("mouseenter", function WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r6); var match_r4 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectActive(match_r4); });
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
    i0.ɵɵelementStart(15, "item-content", 9);
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵelementStart(17, "span", 10);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p");
    i0.ɵɵelementStart(22, "span", 10);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r4 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", match_r4 === ctx_r2.activeMatch)("disabled", ctx_r2.preselected(match_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHtml", ctx_r2.sanitizeHTML(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.compensation == null ? null : match_r4.data.compensation.code, match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.compensation == null ? null : match_r4.data.compensation.name), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.state, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.compensation == null ? null : match_r4.data.compensation.state);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.rate, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatCurrency(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.rate));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.startDate, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatDateWithFormat(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.startDate, i0.ɵɵpureFunction0(13, _c0)));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.endDate, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatDateWithFormat(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.endDate, i0.ɵɵpureFunction0(14, _c0)));
} }
function WorkersCompCodesPickerResults_novo_list_1_novo_loading_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 3);
} }
function WorkersCompCodesPickerResults_novo_list_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list", 4);
    i0.ɵɵtemplate(1, WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template, 26, 15, "novo-list-item", 5);
    i0.ɵɵtemplate(2, WorkersCompCodesPickerResults_novo_list_1_novo_loading_2_Template, 1, 0, "novo-loading", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading && (ctx_r1.matches == null ? null : ctx_r1.matches.length) > 0);
} }
var WorkersCompCodesPickerResults = /** @class */ (function (_super) {
    __extends(WorkersCompCodesPickerResults, _super);
    function WorkersCompCodesPickerResults(element, sanitizer, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.sanitizer = sanitizer;
        _this.labels = labels;
        _this.active = true;
        _this.sanitizer = sanitizer;
        return _this;
    }
    Object.defineProperty(WorkersCompCodesPickerResults.prototype, "isHidden", {
        get: function () {
            return this.matches.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    WorkersCompCodesPickerResults.prototype.getListElement = function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    WorkersCompCodesPickerResults.prototype.sanitizeHTML = function (compCode, name) {
        return this.sanitizer.bypassSecurityTrustHtml(compCode + " | " + name);
    };
    WorkersCompCodesPickerResults.ɵfac = function WorkersCompCodesPickerResults_Factory(t) { return new (t || WorkersCompCodesPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    WorkersCompCodesPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: WorkersCompCodesPickerResults, selectors: [["workers-comp-codes-picker-results"]], hostVars: 3, hostBindings: function WorkersCompCodesPickerResults_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("hidden", ctx.isHidden);
            i0.ɵɵclassProp("active", ctx.active);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "picker-loading", 4, "ngIf"], ["direction", "vertical", 4, "ngIf"], [1, "picker-loading"], ["theme", "line"], ["direction", "vertical"], [3, "active", "disabled", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["theme", "line", 4, "ngIf"], [3, "click", "mouseenter"], [3, "innerHtml"], ["direction", "horizontal"], [1, "label"]], template: function WorkersCompCodesPickerResults_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, WorkersCompCodesPickerResults_section_0_Template, 2, 0, "section", 0);
            i0.ɵɵtemplate(1, WorkersCompCodesPickerResults_novo_list_1_Template, 3, 2, "novo-list", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading && !(ctx.matches == null ? null : ctx.matches.length));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.matches == null ? null : ctx.matches.length) > 0 && !ctx.hasError);
        } }, directives: [i3.NgIf, i4.NovoLoadingElement, i5.NovoListElement, i3.NgForOf, i5.NovoListItemElement, i5.NovoItemHeaderElement, i5.NovoItemTitleElement, i5.NovoItemContentElement], encapsulation: 2 });
    return WorkersCompCodesPickerResults;
}(BasePickerResults));
export { WorkersCompCodesPickerResults };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WorkersCompCodesPickerResults, [{
        type: Component,
        args: [{
                selector: 'workers-comp-codes-picker-results',
                template: "\n    <section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\">\n      <novo-loading theme=\"line\"></novo-loading>\n    </section>\n    <novo-list direction=\"vertical\" *ngIf=\"matches?.length > 0 && !hasError\">\n      <novo-list-item\n        *ngFor=\"let match of matches\"\n        (click)=\"selectMatch($event)\"\n        [class.active]=\"match === activeMatch\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.disabled]=\"preselected(match)\"\n      >\n        <item-header>\n          <item-title>\n            <span [innerHtml]=\"sanitizeHTML(match?.data?.compensation?.code, match?.data?.compensation?.name)\"></span>\n          </item-title>\n        </item-header>\n        <item-content direction=\"horizontal\">\n          <p>\n            <span class=\"label\">{{ labels.state }}: </span><span>{{ match?.data?.compensation?.state }}</span>\n          </p>\n          <p>\n            <span class=\"label\">{{ labels.rate }}: </span><span>{{ labels.formatCurrency(match?.data?.rate) }}</span>\n          </p>\n        </item-content>\n        <item-content direction=\"horizontal\">\n          <p>\n            <span class=\"label\">{{ labels.startDate }}: </span\n            ><span>{{ labels.formatDateWithFormat(match?.data?.startDate, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>\n          </p>\n          <p>\n            <span class=\"label\">{{ labels.endDate }}: </span\n            ><span>{{ labels.formatDateWithFormat(match?.data?.endDate, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>\n          </p>\n        </item-content>\n      </novo-list-item>\n      <novo-loading theme=\"line\" *ngIf=\"isLoading && matches?.length > 0\"></novo-loading>\n    </novo-list>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: i2.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { active: [{
            type: HostBinding,
            args: ['class.active']
        }], isHidden: [{
            type: HostBinding,
            args: ['hidden']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy93b3JrZXJzLWNvbXAtY29kZXMtcGlja2VyLXJlc3VsdHMvV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELFNBQVM7QUFDVCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7SUFLdkUsa0NBQ0U7SUFBQSxrQ0FBMEM7SUFDNUMsaUJBQVU7Ozs7O0lBRVIseUNBT0U7SUFMQSw0T0FBNkIsb1FBQUE7SUFLN0IsbUNBQ0U7SUFBQSxrQ0FDRTtJQUFBLDBCQUEwRztJQUM1RyxpQkFBYTtJQUNmLGlCQUFjO0lBQ2QsdUNBQ0U7SUFBQSx5QkFDRTtJQUFBLGdDQUFvQjtJQUFBLFlBQW9CO0lBQUEsaUJBQU87SUFBQSw0QkFBTTtJQUFBLFlBQXNDO0lBQUEsaUJBQU87SUFDcEcsaUJBQUk7SUFDSiwwQkFDRTtJQUFBLGlDQUFvQjtJQUFBLGFBQW1CO0lBQUEsaUJBQU87SUFBQSw2QkFBTTtJQUFBLGFBQThDO0lBQUEsaUJBQU87SUFDM0csaUJBQUk7SUFDTixpQkFBZTtJQUNmLHdDQUNFO0lBQUEsMEJBQ0U7SUFBQSxpQ0FBb0I7SUFBQSxhQUF3QjtJQUFBLGlCQUMzQztJQUFBLDZCQUFNO0lBQUEsYUFBZ0g7SUFBQSxpQkFBTztJQUNoSSxpQkFBSTtJQUNKLDBCQUNFO0lBQUEsaUNBQW9CO0lBQUEsYUFBc0I7SUFBQSxpQkFDekM7SUFBQSw2QkFBTTtJQUFBLGFBQThHO0lBQUEsaUJBQU87SUFDOUgsaUJBQUk7SUFDTixpQkFBZTtJQUNqQixpQkFBaUI7Ozs7SUEzQmYseURBQXNDLDBDQUFBO0lBTTVCLGVBQTRGO0lBQTVGLDhVQUE0RjtJQUs5RSxlQUFvQjtJQUFwQixvREFBb0I7SUFBYSxlQUFzQztJQUF0QywySkFBc0M7SUFHdkUsZUFBbUI7SUFBbkIsbURBQW1CO0lBQWEsZUFBOEM7SUFBOUMsK0hBQThDO0lBSzlFLGVBQXdCO0lBQXhCLHdEQUF3QjtJQUNyQyxlQUFnSDtJQUFoSCx1S0FBZ0g7SUFHbkcsZUFBc0I7SUFBdEIsc0RBQXNCO0lBQ25DLGVBQThHO0lBQTlHLHFLQUE4Rzs7O0lBSTNILGtDQUFtRjs7O0lBaENyRixvQ0FDRTtJQUFBLGtIQU9FO0lBd0JGLDRHQUFvRTtJQUN0RSxpQkFBWTs7O0lBL0JSLGVBQTZCO0lBQTdCLHdDQUE2QjtJQThCSixlQUF3QztJQUF4QyxzR0FBd0M7O0FBdEN6RTtJQTBDbUQsaURBQWlCO0lBUWxFLHVDQUFZLE9BQW1CLEVBQVUsU0FBdUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQXpILFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUVwQjtRQUh3QyxlQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFOakcsWUFBTSxHQUFZLElBQUksQ0FBQztRQVFyQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7SUFDN0IsQ0FBQztJQVJELHNCQUNJLG1EQUFRO2FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQU9ELHNEQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsb0RBQVksR0FBWixVQUFhLFFBQWdCLEVBQUUsSUFBWTtRQUN6QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUksUUFBUSxXQUFNLElBQU0sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OEdBbkJVLDZCQUE2QjtzRUFBN0IsNkJBQTZCOzs7O1lBdkN0QyxzRkFDRTtZQUVGLDBGQUNFOztZQUo4QiwwRkFBcUM7WUFHckMsZUFBd0M7WUFBeEMsNkZBQXdDOzt3Q0FiNUU7Q0FxRUMsQUE5REQsQ0EwQ21ELGlCQUFpQixHQW9CbkU7U0FwQlksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0ExQ3pDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxRQUFRLEVBQUUsdXVEQXNDVDthQUNGOztrQkFFRSxXQUFXO21CQUFDLGNBQWM7O2tCQUUxQixXQUFXO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3b3JrZXJzLWNvbXAtY29kZXMtcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGlja2VyLWxvYWRpbmdcIiAqbmdJZj1cImlzTG9hZGluZyAmJiAhbWF0Y2hlcz8ubGVuZ3RoXCI+XG4gICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgKm5nSWY9XCJtYXRjaGVzPy5sZW5ndGggPiAwICYmICFoYXNFcnJvclwiPlxuICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgID5cbiAgICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICAgIDxpdGVtLXRpdGxlPlxuICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJzYW5pdGl6ZUhUTUwobWF0Y2g/LmRhdGE/LmNvbXBlbnNhdGlvbj8uY29kZSwgbWF0Y2g/LmRhdGE/LmNvbXBlbnNhdGlvbj8ubmFtZSlcIj48L3NwYW4+XG4gICAgICAgICAgPC9pdGVtLXRpdGxlPlxuICAgICAgICA8L2l0ZW0taGVhZGVyPlxuICAgICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBsYWJlbHMuc3RhdGUgfX06IDwvc3Bhbj48c3Bhbj57eyBtYXRjaD8uZGF0YT8uY29tcGVuc2F0aW9uPy5zdGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgbGFiZWxzLnJhdGUgfX06IDwvc3Bhbj48c3Bhbj57eyBsYWJlbHMuZm9ybWF0Q3VycmVuY3kobWF0Y2g/LmRhdGE/LnJhdGUpIH19PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGxhYmVscy5zdGFydERhdGUgfX06IDwvc3BhblxuICAgICAgICAgICAgPjxzcGFuPnt7IGxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChtYXRjaD8uZGF0YT8uc3RhcnREYXRlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSkgfX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGxhYmVscy5lbmREYXRlIH19OiA8L3NwYW5cbiAgICAgICAgICAgID48c3Bhbj57eyBsYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQobWF0Y2g/LmRhdGE/LmVuZERhdGUsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9KSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcz8ubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDwvbm92by1saXN0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBXb3JrZXJzQ29tcENvZGVzUGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXG4gIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICAgIHRoaXMuc2FuaXRpemVyID0gc2FuaXRpemVyO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdCcpO1xuICB9XG5cbiAgc2FuaXRpemVIVE1MKGNvbXBDb2RlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChgJHtjb21wQ29kZX0gfCAke25hbWV9YCk7XG4gIH1cbn1cbiJdfQ==