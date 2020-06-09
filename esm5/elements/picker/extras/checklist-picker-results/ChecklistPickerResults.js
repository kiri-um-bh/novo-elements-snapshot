/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/checklist-picker-results/ChecklistPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { Helpers } from '../../../../utils/Helpers';
import { NovoLabelService } from '../../../../services/novo-label-service';
// Vendor
import { from } from 'rxjs';
/**
 * \@description This is the actual list of matches that gets injected into the DOM.
 */
var ChecklistPickerResults = /** @class */ (function (_super) {
    tslib_1.__extends(ChecklistPickerResults, _super);
    function ChecklistPickerResults(element, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.labels = labels;
        return _this;
    }
    /**
     * @return {?}
     */
    ChecklistPickerResults.prototype.search = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = this.config.options;
        // only set this the first time
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
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
        })));
    };
    /**
     * @param matches - Collection of objects=
     *
     * @description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     */
    /**
     * \@description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     * @param {?} matches - Collection of objects=
     *
     * @return {?}
     */
    ChecklistPickerResults.prototype.filterData = /**
     * \@description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     * @param {?} matches - Collection of objects=
     *
     * @return {?}
     */
    function (matches) {
        var _this = this;
        if (this.term && matches) {
            this.filteredMatches = matches.map((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                /** @type {?} */
                var items = section.originalData.filter((/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) {
                    return ~String(match.label)
                        .toLowerCase()
                        .indexOf(_this.term.toLowerCase());
                }));
                section.data = items;
                return section;
            }), this);
            return this.filteredMatches;
        }
        else if (this.term === '') {
            matches.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                section.data = section.originalData;
            }));
            return matches;
        }
        // Show no recent results template
        return matches;
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    ChecklistPickerResults.prototype.selectMatch = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        Helpers.swallowEvent(event);
        if (item.indeterminate) {
            item.indeterminate = false;
            item.checked = true;
        }
        else {
            item.checked = !item.checked;
        }
        /** @type {?} */
        var selected = this.activeMatch;
        if (selected) {
            this.parent.value = selected;
        }
        this.ref.markForCheck();
        return false;
    };
    ChecklistPickerResults.decorators = [
        { type: Component, args: [{
                    selector: 'checklist-picker-results',
                    host: {
                        class: 'active picker-results',
                    },
                    template: "\n    <novo-loading theme=\"line\" *ngIf=\"isLoading && !matches.length\"></novo-loading>\n    <ul *ngIf=\"matches.length > 0\">\n      <span *ngFor=\"let section of matches; let i = index\">\n        <li class=\"header caption\" *ngIf=\"section.data.length > 0\">{{ section.label || section.type }}</li>\n        <li\n          *ngFor=\"let match of section.data; let i = index\"\n          [ngClass]=\"{ checked: match.checked }\"\n          (click)=\"selectMatch($event, match)\"\n          [class.active]=\"match === activeMatch\"\n          (mouseenter)=\"selectActive(match)\"\n        >\n          <label>\n            <i\n              [ngClass]=\"{\n                'bhi-checkbox-empty': !match.checked,\n                'bhi-checkbox-filled': match.checked,\n                'bhi-checkbox-indeterminate': match.indeterminate\n              }\"\n            ></i>\n            {{ match.label }}\n          </label>\n        </li>\n      </span>\n    </ul>\n    <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n    <p class=\"picker-null-results\" *ngIf=\"!isLoading && !matches.length && !hasError && term !== ''\">{{ labels.pickerEmpty }}</p>\n  "
                }] }
    ];
    /** @nocollapse */
    ChecklistPickerResults.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    return ChecklistPickerResults;
}(BasePickerResults));
export { ChecklistPickerResults };
if (false) {
    /** @type {?} */
    ChecklistPickerResults.prototype.filteredMatches;
    /** @type {?} */
    ChecklistPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tsaXN0UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2NoZWNrbGlzdC1waWNrZXItcmVzdWx0cy9DaGVja2xpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQUUzRSxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBS3hDO0lBa0M0QyxrREFBaUI7SUFHM0QsZ0NBQVksT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQXhGLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUNwQjtRQUZ1QyxZQUFNLEdBQU4sTUFBTSxDQUFrQjs7SUFFaEUsQ0FBQzs7OztJQUVELHVDQUFNOzs7SUFBTjtRQUFBLGlCQXVCQzs7WUF0Qk8sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNuQywrQkFBK0I7UUFDL0IsT0FBTyxJQUFJLENBQ1QsSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDMUIsK0JBQStCO1lBQy9CLElBQUksT0FBTyxFQUFFO2dCQUNYLG1CQUFtQjtnQkFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsa0NBQWtDO29CQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNMLHVDQUF1QztvQkFDdkMsTUFBTSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7b0JBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztpQkFDbkU7YUFDRjtpQkFBTTtnQkFDTCx3QkFBd0I7Z0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsMkNBQVU7Ozs7Ozs7SUFBVixVQUFXLE9BQU87UUFBbEIsaUJBb0JDO1FBbkJDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsT0FBTzs7b0JBQ25DLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxLQUFLO29CQUM5QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7eUJBQ3hCLFdBQVcsRUFBRTt5QkFDYixPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLEVBQUM7Z0JBQ0YsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDM0IsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE9BQU87Z0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN0QyxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0Qsa0NBQWtDO1FBQ2xDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVELDRDQUFXOzs7OztJQUFYLFVBQVksS0FBSyxFQUFFLElBQUk7UUFDckIsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlCOztZQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVztRQUNqQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkE3R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsdUJBQXVCO3FCQUMvQjtvQkFDRCxRQUFRLEVBQUUsZ3FDQTJCVDtpQkFDRjs7OztnQkE1Q21CLFVBQVU7Z0JBSXJCLGdCQUFnQjtnQkFKTyxpQkFBaUI7O0lBeUhqRCw2QkFBQztDQUFBLEFBOUdELENBa0M0QyxpQkFBaUIsR0E0RTVEO1NBNUVZLHNCQUFzQjs7O0lBQ2pDLGlEQUFxQjs7SUFFWSx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGFjdHVhbCBsaXN0IG9mIG1hdGNoZXMgdGhhdCBnZXRzIGluamVjdGVkIGludG8gdGhlIERPTS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tsaXN0LXBpY2tlci1yZXN1bHRzJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYWN0aXZlIHBpY2tlci1yZXN1bHRzJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDx1bCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHNlY3Rpb24gb2YgbWF0Y2hlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXIgY2FwdGlvblwiICpuZ0lmPVwic2VjdGlvbi5kYXRhLmxlbmd0aCA+IDBcIj57eyBzZWN0aW9uLmxhYmVsIHx8IHNlY3Rpb24udHlwZSB9fTwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBzZWN0aW9uLmRhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgY2hlY2tlZDogbWF0Y2guY2hlY2tlZCB9XCJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50LCBtYXRjaClcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAnYmhpLWNoZWNrYm94LWVtcHR5JzogIW1hdGNoLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgJ2JoaS1jaGVja2JveC1maWxsZWQnOiBtYXRjaC5jaGVja2VkLFxuICAgICAgICAgICAgICAgICdiaGktY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc6IG1hdGNoLmluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAge3sgbWF0Y2gubGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdWw+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yICYmIHRlcm0gIT09ICcnXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2xpc3RQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBmaWx0ZXJlZE1hdGNoZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIHNlYXJjaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIC8vIG9ubHkgc2V0IHRoaXMgdGhlIGZpcnN0IHRpbWVcbiAgICByZXR1cm4gZnJvbShcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgbWF0Y2ggZGF0YVxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGFcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICAvLyBBcnJheXMgYXJlIHJldHVybmVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbWF0Y2hlcyAtIENvbGxlY3Rpb24gb2Ygb2JqZWN0cz1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCB0aGUgcGlja2VyIG9wdGlvbnMgYW5kIGNyZWF0ZXMgYSBmaWx0ZXJlZCBsaXN0IG9mIG9iamVjdHMgdGhhdCBjb250YWluXG4gICAqIHRoZSBuZXdTZWFyY2guXG4gICAqL1xuICBmaWx0ZXJEYXRhKG1hdGNoZXMpOiBhbnkge1xuICAgIGlmICh0aGlzLnRlcm0gJiYgbWF0Y2hlcykge1xuICAgICAgdGhpcy5maWx0ZXJlZE1hdGNoZXMgPSBtYXRjaGVzLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHNlY3Rpb24ub3JpZ2luYWxEYXRhLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgICByZXR1cm4gflN0cmluZyhtYXRjaC5sYWJlbClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5kZXhPZih0aGlzLnRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWN0aW9uLmRhdGEgPSBpdGVtcztcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkTWF0Y2hlcztcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybSA9PT0gJycpIHtcbiAgICAgIG1hdGNoZXMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBzZWN0aW9uLmRhdGEgPSBzZWN0aW9uLm9yaWdpbmFsRGF0YTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfVxuICAgIC8vIFNob3cgbm8gcmVjZW50IHJlc3VsdHMgdGVtcGxhdGVcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmIChpdGVtLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnBhcmVudC52YWx1ZSA9IHNlbGVjdGVkO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==