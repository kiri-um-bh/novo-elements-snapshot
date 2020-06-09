import { __extends } from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { Helpers } from '../../../../utils/Helpers';
import { NovoLabelService } from '../../../../services/novo-label-service';
// Vendor
import { from } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../../../loading/Loading";
function ChecklistPickerResults_novo_loading_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 4);
} }
function ChecklistPickerResults_ul_1_span_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var section_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(section_r5.label || section_r5.type);
} }
var _c0 = function (a0) { return { checked: a0 }; };
var _c1 = function (a0, a1, a2) { return { "bhi-checkbox-empty": a0, "bhi-checkbox-filled": a1, "bhi-checkbox-indeterminate": a2 }; };
function ChecklistPickerResults_ul_1_span_1_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function ChecklistPickerResults_ul_1_span_1_li_2_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r13); var match_r10 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.selectMatch($event, match_r10); })("mouseenter", function ChecklistPickerResults_ul_1_span_1_li_2_Template_li_mouseenter_0_listener() { i0.ɵɵrestoreView(_r13); var match_r10 = ctx.$implicit; var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.selectActive(match_r10); });
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r10 = ctx.$implicit;
    var ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", match_r10 === ctx_r8.activeMatch);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, match_r10.checked));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(7, _c1, !match_r10.checked, match_r10.checked, match_r10.indeterminate));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", match_r10.label, " ");
} }
function ChecklistPickerResults_ul_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, ChecklistPickerResults_ul_1_span_1_li_1_Template, 2, 1, "li", 6);
    i0.ɵɵtemplate(2, ChecklistPickerResults_ul_1_span_1_li_2_Template, 4, 11, "li", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var section_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", section_r5.data.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", section_r5.data);
} }
function ChecklistPickerResults_ul_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, ChecklistPickerResults_ul_1_span_1_Template, 3, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
} }
function ChecklistPickerResults_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.pickerError);
} }
function ChecklistPickerResults_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labels.pickerEmpty);
} }
/**
 * @description This is the actual list of matches that gets injected into the DOM.
 */
var ChecklistPickerResults = /** @class */ (function (_super) {
    __extends(ChecklistPickerResults, _super);
    function ChecklistPickerResults(element, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.labels = labels;
        return _this;
    }
    ChecklistPickerResults.prototype.search = function () {
        var _this = this;
        var options = this.config.options;
        // only set this the first time
        return from(new Promise(function (resolve, reject) {
            // Check if there is match data
            if (options) {
                // Resolve the data
                if (Array.isArray(options)) {
                    _this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(options);
                }
                else {
                    // All other kinds of data are rejected
                    reject('The data provided is not an array or a promise');
                    throw new Error('The data provided is not an array or a promise');
                }
            }
            else {
                // No data gets rejected
                reject('error');
            }
        }));
    };
    /**
     * @param matches - Collection of objects=
     *
     * @description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     */
    ChecklistPickerResults.prototype.filterData = function (matches) {
        var _this = this;
        if (this.term && matches) {
            this.filteredMatches = matches.map(function (section) {
                var items = section.originalData.filter(function (match) {
                    return ~String(match.label)
                        .toLowerCase()
                        .indexOf(_this.term.toLowerCase());
                });
                section.data = items;
                return section;
            }, this);
            return this.filteredMatches;
        }
        else if (this.term === '') {
            matches.forEach(function (section) {
                section.data = section.originalData;
            });
            return matches;
        }
        // Show no recent results template
        return matches;
    };
    ChecklistPickerResults.prototype.selectMatch = function (event, item) {
        Helpers.swallowEvent(event);
        if (item.indeterminate) {
            item.indeterminate = false;
            item.checked = true;
        }
        else {
            item.checked = !item.checked;
        }
        var selected = this.activeMatch;
        if (selected) {
            this.parent.value = selected;
        }
        this.ref.markForCheck();
        return false;
    };
    ChecklistPickerResults.ɵfac = function ChecklistPickerResults_Factory(t) { return new (t || ChecklistPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    ChecklistPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: ChecklistPickerResults, selectors: [["checklist-picker-results"]], hostAttrs: [1, "active", "picker-results"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [["theme", "line", 4, "ngIf"], [4, "ngIf"], ["class", "picker-error", 4, "ngIf"], ["class", "picker-null-results", 4, "ngIf"], ["theme", "line"], [4, "ngFor", "ngForOf"], ["class", "header caption", 4, "ngIf"], [3, "ngClass", "active", "click", "mouseenter", 4, "ngFor", "ngForOf"], [1, "header", "caption"], [3, "ngClass", "click", "mouseenter"], [3, "ngClass"], [1, "picker-error"], [1, "picker-null-results"]], template: function ChecklistPickerResults_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ChecklistPickerResults_novo_loading_0_Template, 1, 0, "novo-loading", 0);
            i0.ɵɵtemplate(1, ChecklistPickerResults_ul_1_Template, 2, 1, "ul", 1);
            i0.ɵɵtemplate(2, ChecklistPickerResults_p_2_Template, 2, 1, "p", 2);
            i0.ɵɵtemplate(3, ChecklistPickerResults_p_3_Template, 2, 1, "p", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading && !ctx.matches.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.matches.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasError);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isLoading && !ctx.matches.length && !ctx.hasError && ctx.term !== "");
        } }, directives: [i2.NgIf, i3.NovoLoadingElement, i2.NgForOf, i2.NgClass], encapsulation: 2 });
    return ChecklistPickerResults;
}(BasePickerResults));
export { ChecklistPickerResults };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChecklistPickerResults, [{
        type: Component,
        args: [{
                selector: 'checklist-picker-results',
                host: {
                    class: 'active picker-results',
                },
                template: "\n    <novo-loading theme=\"line\" *ngIf=\"isLoading && !matches.length\"></novo-loading>\n    <ul *ngIf=\"matches.length > 0\">\n      <span *ngFor=\"let section of matches; let i = index\">\n        <li class=\"header caption\" *ngIf=\"section.data.length > 0\">{{ section.label || section.type }}</li>\n        <li\n          *ngFor=\"let match of section.data; let i = index\"\n          [ngClass]=\"{ checked: match.checked }\"\n          (click)=\"selectMatch($event, match)\"\n          [class.active]=\"match === activeMatch\"\n          (mouseenter)=\"selectActive(match)\"\n        >\n          <label>\n            <i\n              [ngClass]=\"{\n                'bhi-checkbox-empty': !match.checked,\n                'bhi-checkbox-filled': match.checked,\n                'bhi-checkbox-indeterminate': match.indeterminate\n              }\"\n            ></i>\n            {{ match.label }}\n          </label>\n        </li>\n      </span>\n    </ul>\n    <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n    <p class=\"picker-null-results\" *ngIf=\"!isLoading && !matches.length && !hasError && term !== ''\">{{ labels.pickerEmpty }}</p>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tsaXN0UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2NoZWNrbGlzdC1waWNrZXItcmVzdWx0cy9DaGVja2xpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxTQUFTO0FBQ1QsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lBV3BDLGtDQUErRTs7O0lBRzNFLDZCQUEyRDtJQUFBLFlBQW1DO0lBQUEsaUJBQUs7OztJQUF4QyxlQUFtQztJQUFuQyx5REFBbUM7Ozs7OztJQUM5Riw2QkFPRTtJQUpBLDBQQUFvQywwT0FBQTtJQUlwQyw2QkFDRTtJQUFBLHdCQU1LO0lBQ0wsWUFDRjtJQUFBLGlCQUFRO0lBQ1YsaUJBQUs7Ozs7SUFiSCwwREFBc0M7SUFGdEMsdUVBQXNDO0lBT2xDLGVBSUU7SUFKRixvSEFJRTtJQUVKLGVBQ0Y7SUFERSxnREFDRjs7O0lBbEJKLDRCQUNFO0lBQUEsaUZBQTJEO0lBQzNELGtGQU9FO0lBV0osaUJBQU87OztJQW5Cc0IsZUFBK0I7SUFBL0IsaURBQStCO0lBRXhELGVBQWlEO0lBQWpELHlDQUFpRDs7O0lBSnZELDBCQUNFO0lBQUEsOEVBQ0U7SUFvQkosaUJBQUs7OztJQXJCRyxlQUE4QztJQUE5Qyx3Q0FBOEM7OztJQXNCdEQsNkJBQXlDO0lBQUEsWUFBd0I7SUFB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QUMsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztnR0EzRVUsc0JBQXNCOytEQUF0QixzQkFBc0I7WUE1Qi9CLHlGQUFnRTtZQUNoRSxxRUFDRTtZQXNCRixtRUFBeUM7WUFDekMsbUVBQWlHOztZQXpCdEUsMkRBQW9DO1lBQzNELGVBQTBCO1lBQTFCLDZDQUEwQjtZQXVCTixlQUFnQjtZQUFoQixtQ0FBZ0I7WUFDVCxlQUFpRTtZQUFqRSxnR0FBaUU7O2lDQTNDcEc7Q0EwSEMsQUE5R0QsQ0FrQzRDLGlCQUFpQixHQTRFNUQ7U0E1RVksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FsQ2xDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHVCQUF1QjtpQkFDL0I7Z0JBQ0QsUUFBUSxFQUFFLGdxQ0EyQlQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyB0aGUgYWN0dWFsIGxpc3Qgb2YgbWF0Y2hlcyB0aGF0IGdldHMgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2xpc3QtcGlja2VyLXJlc3VsdHMnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhY3RpdmUgcGlja2VyLXJlc3VsdHMnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPHVsICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCI+XG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBtYXRjaGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRlciBjYXB0aW9uXCIgKm5nSWY9XCJzZWN0aW9uLmRhdGEubGVuZ3RoID4gMFwiPnt7IHNlY3Rpb24ubGFiZWwgfHwgc2VjdGlvbi50eXBlIH19PC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIHNlY3Rpb24uZGF0YTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyBjaGVja2VkOiBtYXRjaC5jaGVja2VkIH1cIlxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQsIG1hdGNoKVwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICdiaGktY2hlY2tib3gtZW1wdHknOiAhbWF0Y2guY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAnYmhpLWNoZWNrYm94LWZpbGxlZCc6IG1hdGNoLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgJ2JoaS1jaGVja2JveC1pbmRldGVybWluYXRlJzogbWF0Y2guaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICB7eyBtYXRjaC5sYWJlbCB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3NwYW4+XG4gICAgPC91bD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiICpuZ0lmPVwiaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRXJyb3IgfX08L3A+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbC1yZXN1bHRzXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3IgJiYgdGVybSAhPT0gJydcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdFBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIGZpbHRlcmVkTWF0Y2hlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgc2VhcmNoKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnLm9wdGlvbnM7XG4gICAgLy8gb25seSBzZXQgdGhpcyB0aGUgZmlyc3QgdGltZVxuICAgIHJldHVybiBmcm9tKFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBtYXRjaCBkYXRhXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgZGF0YVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgcmV0dXJuZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHJlc29sdmUob3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFsbCBvdGhlciBraW5kcyBvZiBkYXRhIGFyZSByZWplY3RlZFxuICAgICAgICAgICAgcmVqZWN0KCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm8gZGF0YSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBtYXRjaGVzIC0gQ29sbGVjdGlvbiBvZiBvYmplY3RzPVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBsb29wcyB0aHJvdWdoIHRoZSBwaWNrZXIgb3B0aW9ucyBhbmQgY3JlYXRlcyBhIGZpbHRlcmVkIGxpc3Qgb2Ygb2JqZWN0cyB0aGF0IGNvbnRhaW5cbiAgICogdGhlIG5ld1NlYXJjaC5cbiAgICovXG4gIGZpbHRlckRhdGEobWF0Y2hlcyk6IGFueSB7XG4gICAgaWYgKHRoaXMudGVybSAmJiBtYXRjaGVzKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkTWF0Y2hlcyA9IG1hdGNoZXMubWFwKChzZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gc2VjdGlvbi5vcmlnaW5hbERhdGEuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICAgIHJldHVybiB+U3RyaW5nKG1hdGNoLmxhYmVsKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmRleE9mKHRoaXMudGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IGl0ZW1zO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRNYXRjaGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtID09PSAnJykge1xuICAgICAgbWF0Y2hlcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IHNlY3Rpb24ub3JpZ2luYWxEYXRhO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgLy8gU2hvdyBubyByZWNlbnQgcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc2VsZWN0TWF0Y2goZXZlbnQsIGl0ZW0pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKGl0ZW0uaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgaXRlbS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5hY3RpdmVNYXRjaDtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucGFyZW50LnZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19