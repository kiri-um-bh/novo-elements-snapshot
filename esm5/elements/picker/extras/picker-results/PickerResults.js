import { __extends } from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../../../list/List";
import * as i4 from "../../../loading/Loading";
function PickerResults_novo_list_0_novo_list_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 7);
    i0.ɵɵlistener("click", function PickerResults_novo_list_0_novo_list_item_1_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectMatch($event); })("mouseenter", function PickerResults_novo_list_0_novo_list_item_1_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8); var match_r6 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.selectActive(match_r6); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelement(2, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r6 = ctx.$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", match_r6 === ctx_r4.activeMatch)("disabled", ctx_r4.preselected(match_r6));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.highlight(match_r6.label, ctx_r4.term), i0.ɵɵsanitizeHtml);
} }
function PickerResults_novo_list_0_novo_loading_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 9);
} }
function PickerResults_novo_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list", 4);
    i0.ɵɵtemplate(1, PickerResults_novo_list_0_novo_list_item_1_Template, 3, 5, "novo-list-item", 5);
    i0.ɵɵtemplate(2, PickerResults_novo_list_0_novo_loading_2_Template, 1, 0, "novo-loading", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.matches);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isLoading && ctx_r0.matches.length > 0);
} }
function PickerResults_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "novo-loading", 9);
    i0.ɵɵelementEnd();
} }
function PickerResults_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.pickerError);
} }
function PickerResults_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.getEmptyMessage());
} }
var PickerResults = /** @class */ (function (_super) {
    __extends(PickerResults, _super);
    function PickerResults(element, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.labels = labels;
        return _this;
    }
    Object.defineProperty(PickerResults.prototype, "hasNonErrorMessage", {
        get: function () {
            return !this.isLoading && !this.matches.length && !this.hasError;
        },
        enumerable: true,
        configurable: true
    });
    PickerResults.prototype.getEmptyMessage = function () {
        if (this.shouldShowMessageForZeroLengthSearch()) {
            // this property comes from Field Interactions
            return this.config.emptyPickerMessage;
        }
        else {
            return this.term === '' ? this.labels.pickerTextFieldEmpty : this.labels.pickerEmpty;
        }
    };
    PickerResults.prototype.shouldShowMessageForZeroLengthSearch = function () {
        return this.config && this.config.minSearchLength === 0 && this.term === '' && this.config.emptyPickerMessage;
    };
    PickerResults.prototype.getListElement = function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    PickerResults.ɵfac = function PickerResults_Factory(t) { return new (t || PickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: PickerResults, selectors: [["picker-results"]], hostAttrs: [1, "active"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [["direction", "vertical", 4, "ngIf"], ["class", "picker-loader", 4, "ngIf"], ["class", "picker-error", 4, "ngIf"], ["class", "picker-null-results", 4, "ngIf"], ["direction", "vertical"], [3, "active", "disabled", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["theme", "line", 4, "ngIf"], [3, "click", "mouseenter"], [3, "innerHtml"], ["theme", "line"], [1, "picker-loader"], [1, "picker-error"], [1, "picker-null-results"]], template: function PickerResults_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PickerResults_novo_list_0_Template, 3, 2, "novo-list", 0);
            i0.ɵɵtemplate(1, PickerResults_div_1_Template, 2, 0, "div", 1);
            i0.ɵɵtemplate(2, PickerResults_p_2_Template, 2, 1, "p", 2);
            i0.ɵɵtemplate(3, PickerResults_p_3_Template, 2, 1, "p", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.matches.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isLoading && ctx.matches.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasError);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasNonErrorMessage);
        } }, directives: [i2.NgIf, i3.NovoListElement, i2.NgForOf, i3.NovoListItemElement, i3.NovoItemContentElement, i4.NovoLoadingElement], encapsulation: 2 });
    return PickerResults;
}(BasePickerResults));
export { PickerResults };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PickerResults, [{
        type: Component,
        args: [{
                selector: 'picker-results',
                host: {
                    class: 'active',
                },
                template: "\n    <novo-list *ngIf=\"matches.length > 0\" direction=\"vertical\">\n      <novo-list-item\n        *ngFor=\"let match of matches\"\n        (click)=\"selectMatch($event)\"\n        [class.active]=\"match === activeMatch\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.disabled]=\"preselected(match)\"\n      >\n        <item-content> <span [innerHtml]=\"highlight(match.label, term)\"></span> </item-content>\n      </novo-list-item>\n      <novo-loading *ngIf=\"isLoading && matches.length > 0\" theme=\"line\"></novo-loading>\n    </novo-list>\n    <div class=\"picker-loader\" *ngIf=\"isLoading && matches.length === 0\"><novo-loading theme=\"line\"></novo-loading></div>\n    <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n    <p class=\"picker-null-results\" *ngIf=\"hasNonErrorMessage\">{{ getEmptyMessage() }}</p>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7O0lBU3ZFLHlDQU9FO0lBTEEsNE5BQTZCLG9QQUFBO0lBSzdCLG9DQUFlO0lBQUEsMEJBQXdEO0lBQUMsaUJBQWU7SUFDekYsaUJBQWlCOzs7O0lBTGYseURBQXNDLDBDQUFBO0lBSWpCLGVBQTBDO0lBQTFDLDRGQUEwQzs7O0lBRWpFLGtDQUFrRjs7O0lBVnBGLG9DQUNFO0lBQUEsZ0dBT0U7SUFFRiw0RkFBbUU7SUFDckUsaUJBQVk7OztJQVRSLGVBQTZCO0lBQTdCLHdDQUE2QjtJQVFqQixlQUF1QztJQUF2QyxvRUFBdUM7OztJQUV2RCwrQkFBcUU7SUFBQSxrQ0FBMEM7SUFBQSxpQkFBTTs7O0lBQ3JILDZCQUF5QztJQUFBLFlBQXdCO0lBQUEsaUJBQUk7OztJQUE1QixlQUF3QjtJQUF4QiwrQ0FBd0I7OztJQUNqRSw2QkFBMEQ7SUFBQSxZQUF1QjtJQUFBLGlCQUFJOzs7SUFBM0IsZUFBdUI7SUFBdkIsOENBQXVCOztBQXBCckY7SUF1Qm1DLGlDQUFpQjtJQUNsRCx1QkFBWSxPQUFtQixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFBeEYsWUFDRSxrQkFBTSxPQUFPLEVBQUUsR0FBRyxDQUFDLFNBQ3BCO1FBRnVDLFlBQU0sR0FBTixNQUFNLENBQWtCOztJQUVoRSxDQUFDO0lBRUQsc0JBQUksNkNBQWtCO2FBQXRCO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsb0NBQW9DLEVBQUUsRUFBRTtZQUM3Qyw4Q0FBOEM7WUFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUN0RjtJQUNILENBQUM7SUFFRCw0REFBb0MsR0FBcEM7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDaEgsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzhFQXhCVSxhQUFhO3NEQUFiLGFBQWE7WUFqQnRCLDBFQUNFO1lBV0YsOERBQXFFO1lBQ3JFLDBEQUF5QztZQUN6QywwREFBMEQ7O1lBZC9DLDZDQUEwQjtZQVlWLGVBQXlDO1lBQXpDLGdFQUF5QztZQUM1QyxlQUFnQjtZQUFoQixtQ0FBZ0I7WUFDVCxlQUEwQjtZQUExQiw2Q0FBMEI7O3dCQTFCN0Q7Q0FzREMsQUFoREQsQ0F1Qm1DLGlCQUFpQixHQXlCbkQ7U0F6QlksYUFBYTtrREFBYixhQUFhO2NBdkJ6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxRQUFRO2lCQUNoQjtnQkFDRCxRQUFRLEVBQUUseTJCQWdCVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGlja2VyLXJlc3VsdHMnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhY3RpdmUnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgID5cbiAgICAgICAgPGl0ZW0tY29udGVudD4gPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9zcGFuPiA8L2l0ZW0tY29udGVudD5cbiAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICA8bm92by1sb2FkaW5nICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXMubGVuZ3RoID4gMFwiIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPlxuICAgIDwvbm92by1saXN0PlxuICAgIDxkaXYgY2xhc3M9XCJwaWNrZXItbG9hZGVyXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDBcIj48bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPjwvZGl2PlxuICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFcnJvciB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cImhhc05vbkVycm9yTWVzc2FnZVwiPnt7IGdldEVtcHR5TWVzc2FnZSgpIH19PC9wPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIGdldCBoYXNOb25FcnJvck1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTG9hZGluZyAmJiAhdGhpcy5tYXRjaGVzLmxlbmd0aCAmJiAhdGhpcy5oYXNFcnJvcjtcbiAgfVxuXG4gIGdldEVtcHR5TWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5zaG91bGRTaG93TWVzc2FnZUZvclplcm9MZW5ndGhTZWFyY2goKSkge1xuICAgICAgICAvLyB0aGlzIHByb3BlcnR5IGNvbWVzIGZyb20gRmllbGQgSW50ZXJhY3Rpb25zXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbXB0eVBpY2tlck1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRlcm0gPT09ICcnID8gdGhpcy5sYWJlbHMucGlja2VyVGV4dEZpZWxkRW1wdHkgOiB0aGlzLmxhYmVscy5waWNrZXJFbXB0eTtcbiAgICB9XG4gIH1cblxuICBzaG91bGRTaG93TWVzc2FnZUZvclplcm9MZW5ndGhTZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm1pblNlYXJjaExlbmd0aCA9PT0gMCAmJiB0aGlzLnRlcm0gPT09ICcnICYmIHRoaXMuY29uZmlnLmVtcHR5UGlja2VyTWVzc2FnZTtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxufVxuIl19