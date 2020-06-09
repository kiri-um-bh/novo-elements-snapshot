import { __extends } from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// Vendor
import { from } from 'rxjs';
// APP
import { Helpers } from '../../../../utils/Helpers';
import { PickerResults } from '../../../picker/extras/picker-results/PickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../../../loading/Loading";
import * as i4 from "../../../list/List";
function QuickNoteResults_novo_loading_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 4);
} }
function QuickNoteResults_novo_list_1_novo_list_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 6);
    i0.ɵɵlistener("click", function QuickNoteResults_novo_list_1_novo_list_item_1_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r7); var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectMatch($event); })("mouseenter", function QuickNoteResults_novo_list_1_novo_list_item_1_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r7); var match_r5 = ctx.$implicit; var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.selectActive(match_r5); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelement(2, "p", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r5 = ctx.$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", match_r5 === ctx_r4.activeMatch);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.highlight(match_r5.label, ctx_r4.term), i0.ɵɵsanitizeHtml);
} }
function QuickNoteResults_novo_list_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list");
    i0.ɵɵtemplate(1, QuickNoteResults_novo_list_1_novo_list_item_1_Template, 3, 3, "novo-list-item", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
} }
function QuickNoteResults_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.quickNoteError);
} }
function QuickNoteResults_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labels.quickNoteEmpty);
} }
var QuickNoteResults = /** @class */ (function (_super) {
    __extends(QuickNoteResults, _super);
    function QuickNoteResults(element, labels, ref) {
        var _this = _super.call(this, element, labels, ref) || this;
        _this.labels = labels;
        // Mode that the quick note is in for tagging
        _this.taggingMode = '';
        return _this;
    }
    Object.defineProperty(QuickNoteResults.prototype, "term", {
        get: function () {
            return this._term;
        },
        set: function (value) {
            var _this = this;
            this._term = value.searchTerm;
            this.taggingMode = value.taggingMode;
            this.hasError = false;
            this.isLoading = true;
            this.search(value, this.taggingMode).subscribe(function (results) {
                _this.matches = _this.isStatic ? _this.filterData(results) : results;
                _this.isLoading = false;
            }, function () {
                _this.hasError = true;
                _this.isLoading = false;
            });
        },
        enumerable: true,
        configurable: true
    });
    QuickNoteResults.prototype.search = function (term, taggingMode) {
        var _this = this;
        var searchCall = this.config.options[taggingMode];
        return from(new Promise(function (resolve, reject) {
            // Check if there is match data
            if (searchCall) {
                // Resolve the data
                if (Array.isArray(searchCall)) {
                    _this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(_this.structureArray(searchCall));
                }
                else if ((searchCall.hasOwnProperty('reject') && searchCall.hasOwnProperty('resolve')) ||
                    Object.getPrototypeOf(searchCall).hasOwnProperty('then')) {
                    _this.isStatic = false;
                    // Promises (ES6 or Deferred) are resolved whenever they resolve
                    searchCall.then(_this.structureArray.bind(_this)).then(resolve, reject);
                }
                else if (typeof searchCall === 'function') {
                    _this.isStatic = false;
                    // Promises (ES6 or Deferred) are resolved whenever they resolve
                    searchCall(term)
                        .then(_this.structureArray.bind(_this))
                        .then(resolve, reject);
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
     * @name structureArray
     * @param collection - the data once getData resolves it
     *
     * @description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     */
    QuickNoteResults.prototype.structureArray = function (collection) {
        var _this = this;
        if (collection && (typeof collection[0] === 'string' || typeof collection[0] === 'number')) {
            return collection.map(function (item) {
                return {
                    value: item,
                    label: item,
                };
            });
        }
        return collection.map(function (data) {
            var value = _this.config.field ? data[_this.config.field[_this.taggingMode]] : data.value || data;
            var label = _this.config.format ? Helpers.interpolate(_this.config.format[_this.taggingMode], data) : data.label || String(value);
            return { value: value, label: label, data: data };
        });
    };
    /**
     * @name selectMatch
     * @param event
     *
     * @description
     */
    QuickNoteResults.prototype.selectMatch = function (event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        var selected = this.activeMatch;
        if (selected) {
            this.parent.onSelected(this.taggingMode, selected);
            this.parent.hideResults();
        }
        return false;
    };
    QuickNoteResults.ɵfac = function QuickNoteResults_Factory(t) { return new (t || QuickNoteResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    QuickNoteResults.ɵcmp = i0.ɵɵdefineComponent({ type: QuickNoteResults, selectors: [["quick-note-results"]], hostAttrs: [1, "active"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [["theme", "line", 4, "ngIf"], [4, "ngIf"], ["class", "picker-error", 4, "ngIf"], ["class", "picker-null", 4, "ngIf"], ["theme", "line"], [3, "active", "click", "mouseenter", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter"], [3, "innerHtml"], [1, "picker-error"], [1, "picker-null"]], template: function QuickNoteResults_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, QuickNoteResults_novo_loading_0_Template, 1, 0, "novo-loading", 0);
            i0.ɵɵtemplate(1, QuickNoteResults_novo_list_1_Template, 2, 1, "novo-list", 1);
            i0.ɵɵtemplate(2, QuickNoteResults_p_2_Template, 2, 1, "p", 2);
            i0.ɵɵtemplate(3, QuickNoteResults_p_3_Template, 2, 1, "p", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading && !ctx.matches.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.matches.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasError);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isLoading && !ctx.matches.length && !ctx.hasError);
        } }, directives: [i2.NgIf, i3.NovoLoadingElement, i4.NovoListElement, i2.NgForOf, i4.NovoListItemElement, i4.NovoItemContentElement], encapsulation: 2 });
    return QuickNoteResults;
}(PickerResults));
export { QuickNoteResults };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QuickNoteResults, [{
        type: Component,
        args: [{
                selector: 'quick-note-results',
                host: {
                    class: 'active',
                },
                template: "\n        <novo-loading theme=\"line\" *ngIf=\"isLoading && !matches.length\"></novo-loading>\n        <novo-list *ngIf=\"matches.length > 0\">\n            <novo-list-item\n                *ngFor=\"let match of matches\"\n                (click)=\"selectMatch($event)\"\n                [class.active]=\"match===activeMatch\"\n                (mouseenter)=\"selectActive(match)\">\n                <item-content>\n                    <p [innerHtml]=\"highlight(match.label, term)\"></p>\n                </item-content>\n            </novo-list-item>\n        </novo-list>\n        <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.quickNoteError }}</p>\n        <p class=\"picker-null\" *ngIf=\"!isLoading && !matches.length && !hasError\">{{ labels.quickNoteEmpty }}</p>\n    ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL2V4dHJhcy9xdWljay1ub3RlLXJlc3VsdHMvUXVpY2tOb3RlUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLFNBQVM7QUFDVCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7O0lBUW5FLGtDQUErRTs7OztJQUUzRSx5Q0FLSTtJQUhBLCtOQUE2Qix1UEFBQTtJQUc3QixvQ0FDSTtJQUFBLHVCQUFrRDtJQUN0RCxpQkFBZTtJQUNuQixpQkFBaUI7Ozs7SUFMYix5REFBb0M7SUFHN0IsZUFBMEM7SUFBMUMsNEZBQTBDOzs7SUFQekQsaUNBQ0k7SUFBQSxtR0FLSTtJQUlSLGlCQUFZOzs7SUFSSixlQUE2QjtJQUE3Qix3Q0FBNkI7OztJQVNyQyw0QkFBeUM7SUFBQSxZQUEyQjtJQUFBLGlCQUFJOzs7SUFBL0IsZUFBMkI7SUFBM0Isa0RBQTJCOzs7SUFDcEUsNEJBQTBFO0lBQUEsWUFBMkI7SUFBQSxpQkFBSTs7O0lBQS9CLGVBQTJCO0lBQTNCLGtEQUEyQjs7QUFuQjdHO0lBc0JzQyxvQ0FBYTtJQUlqRCwwQkFBWSxPQUFtQixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFBeEYsWUFDRSxrQkFBTSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUM1QjtRQUZ1QyxZQUFN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RUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7b0ZBM0dVLGdCQUFnQjt5REFBaEIsZ0JBQWdCO1lBaEJyQixtRkFBZ0U7WUFDaEUsNkVBQ0k7WUFVSiw2REFBeUM7WUFDekMsNkRBQTBFOztZQWIvQywyREFBb0M7WUFDcEQsZUFBMEI7WUFBMUIsNkNBQTBCO1lBV2IsZUFBZ0I7WUFBaEIsbUNBQWdCO1lBQ2pCLGVBQWtEO1lBQWxELDZFQUFrRDs7MkJBNUJqRjtDQTJJQyxBQWxJRCxDQXNCc0MsYUFBYSxHQTRHbEQ7U0E1R1ksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0F0QjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2dCQUNELFFBQVEsRUFBRSxreEJBZVA7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi8uLi8uLi9waWNrZXIvZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aWNrLW5vdGUtcmVzdWx0cycsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FjdGl2ZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaD09PWFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHAgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9wPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5xdWlja05vdGVFcnJvciB9fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbFwiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yXCI+e3sgbGFiZWxzLnF1aWNrTm90ZUVtcHR5IH19PC9wPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZVJlc3VsdHMgZXh0ZW5kcyBQaWNrZXJSZXN1bHRzIHtcbiAgLy8gTW9kZSB0aGF0IHRoZSBxdWljayBub3RlIGlzIGluIGZvciB0YWdnaW5nXG4gIHRhZ2dpbmdNb2RlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbGFiZWxzLCByZWYpO1xuICB9XG5cbiAgZ2V0IHRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm07XG4gIH1cblxuICBzZXQgdGVybSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGVybSA9IHZhbHVlLnNlYXJjaFRlcm07XG4gICAgdGhpcy50YWdnaW5nTW9kZSA9IHZhbHVlLnRhZ2dpbmdNb2RlO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zZWFyY2godmFsdWUsIHRoaXMudGFnZ2luZ01vZGUpLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuaXNTdGF0aWMgPyB0aGlzLmZpbHRlckRhdGEocmVzdWx0cykgOiByZXN1bHRzO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzZWFyY2godGVybTogc3RyaW5nLCB0YWdnaW5nTW9kZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc2VhcmNoQ2FsbCA9IHRoaXMuY29uZmlnLm9wdGlvbnNbdGFnZ2luZ01vZGVdO1xuICAgIHJldHVybiBmcm9tKFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBtYXRjaCBkYXRhXG4gICAgICAgIGlmIChzZWFyY2hDYWxsKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgZGF0YVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlYXJjaENhbGwpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgcmV0dXJuZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShzZWFyY2hDYWxsKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIChzZWFyY2hDYWxsLmhhc093blByb3BlcnR5KCdyZWplY3QnKSAmJiBzZWFyY2hDYWxsLmhhc093blByb3BlcnR5KCdyZXNvbHZlJykpIHx8XG4gICAgICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc2VhcmNoQ2FsbCkuaGFzT3duUHJvcGVydHkoJ3RoZW4nKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgc2VhcmNoQ2FsbC50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlYXJjaENhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgIHNlYXJjaENhbGwodGVybSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKGNvbGxlY3Rpb24gJiYgKHR5cGVvZiBjb2xsZWN0aW9uWzBdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY29sbGVjdGlvblswXSA9PT0gJ251bWJlcicpKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb25maWcuZmllbGQgPyBkYXRhW3RoaXMuY29uZmlnLmZpZWxkW3RoaXMudGFnZ2luZ01vZGVdXSA6IGRhdGEudmFsdWUgfHwgZGF0YTtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5jb25maWcuZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy5mb3JtYXRbdGhpcy50YWdnaW5nTW9kZV0sIGRhdGEpIDogZGF0YS5sYWJlbCB8fCBTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHsgdmFsdWUsIGxhYmVsLCBkYXRhIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0TWF0Y2hcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0TWF0Y2goZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnBhcmVudC5vblNlbGVjdGVkKHRoaXMudGFnZ2luZ01vZGUsIHNlbGVjdGVkKTtcbiAgICAgIHRoaXMucGFyZW50LmhpZGVSZXN1bHRzKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19