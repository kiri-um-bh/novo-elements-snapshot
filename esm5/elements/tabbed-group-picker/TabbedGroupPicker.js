/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Helpers, binarySearch } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
var NovoTabbedGroupPickerElement = /** @class */ (function () {
    function NovoTabbedGroupPickerElement(labelService, ref) {
        var _this = this;
        this.labelService = labelService;
        this.ref = ref;
        this.selectionChange = new EventEmitter();
        this.filterText = new BehaviorSubject('');
        this.searchLabel = 'Search';
        this.loading = true;
        this.getSelectedState = function (childArray) {
            /** @type {?} */
            var numberOfSelectedItems = childArray.filter(function (_a) {
                var selected = _a.selected;
                return selected;
            }).length;
            if (!numberOfSelectedItems) {
                return undefined;
            }
            return numberOfSelectedItems === childArray.length ? 'selected' : 'indeterminate';
        };
        this.filter = function (searchTerm) {
            _this.displaySchemata = _this.schemata.map(function (_a) {
                var data = _a.data, schema = tslib_1.__rest(_a, ["data"]);
                return (tslib_1.__assign({}, schema, { data: data && data.filter(function (item) { return item[schema.labelField].toLowerCase().includes(searchTerm.toLowerCase()); }) }));
            });
            _this.ref.markForCheck();
        };
    }
    Object.defineProperty(NovoTabbedGroupPickerElement.prototype, "displaySchema", {
        get: /**
         * @return {?}
         */
        function () {
            return this.displaySchemata[this.displaySchemaIndex];
        },
        set: /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            this.displaySchemaIndex = this.schemata.map(function (_a) {
                var typeName = _a.typeName;
                return typeName;
            }).indexOf(schema.typeName);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setupDisplayData();
        this.createChildrenReferences();
        this.loading = false;
        this.filterText.pipe(debounceTime(300)).subscribe({
            next: this.filter,
        });
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.setupDisplayData = /**
     * @return {?}
     */
    function () {
        this.displaySchemata = this.schemata;
        this.displaySchema = this.schemata[0];
    };
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.createChildrenReferences = 
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.schemata.forEach(function (schema) {
            // would rather filter but TypeScript still wants a type narrowing here
            if ('childTypeName' in schema) {
                /** @type {?} */
                var childSchema = _this.schemata.find(function (_a) {
                    var typeName = _a.typeName;
                    return typeName === schema.childTypeName;
                });
                /** @type {?} */
                var compareFunction_1 = _this.makeCompareFunction(childSchema.valueField);
                /** @type {?} */
                var warnFunction_1 = _this.makeWarningFunction(schema.typeName, childSchema.typeName, childSchema.valueField);
                /** @type {?} */
                var sortedChildren_1 = childSchema.data.slice().sort(compareFunction_1);
                schema.data
                    .filter(function (_a) {
                    var children = _a.children;
                    return children && children.length;
                })
                    .forEach(function (parent) {
                    return _this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren_1, compareFunction_1, warnFunction_1);
                });
            }
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items
                .filter(function (parent) { return 'all' in parent; })
                .forEach(function (parent) {
                parent.children = _this.schemata.find(function (_a) {
                    var typeName = _a.typeName;
                    return parent.childTypeName === typeName;
                }).data;
            });
            this.quickSelectConfig.items
                .filter(function (parent) { return !('all' in parent); })
                .forEach(function (parent) {
                /** @type {?} */
                var childSchema = _this.schemata.find(function (_a) {
                    var typeName = _a.typeName;
                    return typeName === parent.childTypeName;
                });
                /** @type {?} */
                var compareFunction = _this.makeCompareFunction(childSchema.valueField);
                /** @type {?} */
                var warnFunction = _this.makeWarningFunction(parent.label, childSchema.typeName, childSchema.valueField);
                /** @type {?} */
                var sortedChildren = childSchema.data.slice().sort(compareFunction);
                _this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren, compareFunction, warnFunction);
            });
        }
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.makeCompareFunction = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return function (a, b) {
            /** @type {?} */
            var value = (a && a[key]) || a;
            if (value < b[key]) {
                return -1;
            }
            else if (value > b[key]) {
                return 1;
            }
            else if (value === b[key]) {
                return 0;
            }
            else {
                return undefined;
            }
        };
    };
    /**
     * @param {?} parent
     * @param {?} sortedData
     * @param {?} compareFunction
     * @param {?} warnFunction
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.replaceChildrenWithReferences = /**
     * @param {?} parent
     * @param {?} sortedData
     * @param {?} compareFunction
     * @param {?} warnFunction
     * @return {?}
     */
    function (parent, sortedData, compareFunction, warnFunction) {
        parent.children = parent.children
            .map(function (child) { return binarySearch(child, sortedData, compareFunction) || warnFunction(child); })
            .filter(Boolean); // since map can return undefined, remove undefined elements
    };
    /**
     * @param {?} parentLabel
     * @param {?} childLabel
     * @param {?} childValueField
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.makeWarningFunction = /**
     * @param {?} parentLabel
     * @param {?} childLabel
     * @param {?} childValueField
     * @return {?}
     */
    function (parentLabel, childLabel, childValueField) {
        return function (child) {
            /** @type {?} */
            var childValue = child[childValueField] || child;
            console.warn("No " + childLabel + " found with value " + childValue + " for parent " + parentLabel);
        };
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onItemToggled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (Array.isArray(item.children)) {
            this.updateChildren(item.selected, item.children);
        }
        this.updateParents();
        this.emitSelectedValues();
        this.ref.markForCheck();
    };
    /**
     * @param {?} parentIsSelected
     * @param {?} children
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.updateChildren = /**
     * @param {?} parentIsSelected
     * @param {?} children
     * @return {?}
     */
    function (parentIsSelected, children) {
        children.forEach(function (item) { return (parentIsSelected ? (item.selected = true) : delete item.selected); });
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.updateParents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // mutate here to avoid dereferencing the objects in displaySchemata
        this.schemata
            .filter(function (schema) { return 'childTypeName' in schema && !!schema.childTypeName; })
            .forEach(function (schema) {
            /** @type {?} */
            var parents = schema.data.filter(function (_a) {
                var children = _a.children;
                return children && children.length;
            });
            parents.forEach(function (parent) {
                ['indeterminate', 'selected'].forEach(function (v) { return delete parent[v]; });
                /** @type {?} */
                var selectedState = _this.getSelectedState(parent.children);
                if (selectedState) {
                    parent[selectedState] = true;
                }
            });
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach(function (quickSelect) {
                delete quickSelect.selected;
                /** @type {?} */
                var selectedState = _this.getSelectedState((/** @type {?} */ (quickSelect.children)));
                if (selectedState) {
                    quickSelect[selectedState] = true;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.emitSelectedValues = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedValues = this.schemata.map(function (schema) { return (tslib_1.__assign({}, schema, { data: schema.data.filter(function (_a) {
                var selected = _a.selected;
                return selected;
            }) })); });
        this.selectionChange.emit(selectedValues);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onClearFilter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        this.filterText.next('');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onFilter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.filterText.next(event.target.value);
    };
    NovoTabbedGroupPickerElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tabbed-group-picker',
                    template: "<novo-dropdown>\n  <button class=\"tabbed-group-picker-button\"\n          [theme]=\"buttonConfig.theme\"\n          [side]=\"buttonConfig.side\"\n          [icon]=\"buttonConfig.icon\"\n          [loading]=\"loading\">\n    <div class=\"tabbed-group-picker-button-label\">{{ buttonConfig.label }}</div>\n  </button>\n  <div class=\"novo-category-dropdown-search\" data-automation-id=\"novo-category-dropdown-search\">\n    <input type=\"text\" [placeholder]=\"searchLabel\" [value]=\"filterText | async\" (input)=\"onFilter($event)\" />\n    <i class=\"bhi-search\" *ngIf=\"!(filterText | async)\"></i>\n    <i class=\"bhi-times\" *ngIf=\"filterText | async\" (click)=\"onClearFilter($event)\"></i>\n  </div>\n  <div class=\"tabbed-group-picker-column-container\">\n    <div class=\"tabbed-group-picker-column left\">\n      <novo-nav theme=\"white\"\n                direction=\"vertical\">\n        <novo-tab *ngFor=\"let schema of displaySchemata\"\n                  [attr.data-automation-id]=\"schema.typeName\"\n                  (activeChange)=\"displaySchema = schema\">\n          <span>{{schema.typeLabel}} ({{schema.data.length}})</span><i class=\"bhi-next\"></i>\n        </novo-tab>\n      </novo-nav>\n      <!-- todo: clear all button goes here-->\n    </div>\n    <div class=\"tabbed-group-picker-column right\">\n      <div class=\"quick-select\" *ngIf=\"quickSelectConfig && !(filterText | async)\">\n        <div class=\"quick-select-label\">{{ quickSelectConfig.label }}</div>\n        <novo-list direction=\"vertical\">\n          <novo-list-item *ngFor=\"let quickSelect of quickSelectConfig.items\"\n                          [attr.data-automation-id]=\"quickSelect.label\"\n                          (click)=\"quickSelect.selected = !quickSelect.selected; onItemToggled(quickSelect)\">\n                          <item-content>\n                            <novo-checkbox [label]=\"quickSelect.label\"\n                            [name]=\"'selected'\"\n                            [(ngModel)]=\"quickSelect.selected\"\n                            (ngModelChange)=\"onItemToggled(quickSelect)\"></novo-checkbox>\n                          </item-content>\n          </novo-list-item>\n        </novo-list>\n      </div>\n      <!-- todo: add virtual scroll-->\n      <novo-list *ngIf=\"schemata[displaySchemaIndex].data.length\"\n                 direction=\"vertical\">\n        <novo-list-item *ngFor=\"let item of displaySchema.data\"\n                        [attr.data-automation-id]=\"item[displaySchema.labelField]\"\n                        (click)=\"item.selected = !item.selected; onItemToggled(item)\">\n                        <item-content>\n                          <novo-checkbox [label]=\"item[displaySchema.labelField]\"\n                          [name]=\"'selected'\"\n                          [indeterminate]=\"item.indeterminate\"\n                          [(ngModel)]=\"item.selected\"\n                          (ngModelChange)=\"onItemToggled(item)\">\n                        </novo-checkbox>\n                      </item-content>\n        </novo-list-item>\n      </novo-list>\n      <!-- TODO: add empty result message for no data in the case of no search -->\n      <div class=\"novo-category-dropdown-empty-item\" *ngIf=\"!displaySchema.data.length && (filterText | async)\">\n        <!-- TODO: add bhi-users icon if parent-child relationship-->\n        <i class=\"bhi-user\"></i>\n        <div class=\"empty-item-main-message\">{{ labelService.tabbedGroupPickerEmpty }}</div>\n        <div class=\"empty-item-sub-message\">{{ labelService.tabbedGroupClearSuggestion(this.displaySchema.typeLabel) }}</div>\n      </div>\n    </div>\n  </div>\n</novo-dropdown>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoTabbedGroupPickerElement.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    NovoTabbedGroupPickerElement.propDecorators = {
        buttonConfig: [{ type: Input }],
        schemata: [{ type: Input }],
        quickSelectConfig: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return NovoTabbedGroupPickerElement;
}());
export { NovoTabbedGroupPickerElement };
if (false) {
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.buttonConfig;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.schemata;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.quickSelectConfig;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.displaySchemata;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.selectionChange;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.displaySchemaIndex;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.filterText;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.searchLabel;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.loading;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.getSelectedState;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.filter;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.labelService;
    /**
     * @type {?}
     * @private
     */
    NovoTabbedGroupPickerElement.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQTJCckU7SUFnQ0Usc0NBQW1CLFlBQThCLEVBQVUsR0FBc0I7UUFBakYsaUJBQXFGO1FBQWxFLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEJ2RSxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBV3ZFLGVBQVUsR0FBNEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFFL0IsWUFBTyxHQUFHLElBQUksQ0FBQztRQXFJZixxQkFBZ0IsR0FBRyxVQUFDLFVBQTZEOztnQkFDekUscUJBQXFCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQVk7b0JBQVYsc0JBQVE7Z0JBQU8sT0FBQSxRQUFRO1lBQVIsQ0FBUSxDQUFDLENBQUMsTUFBTTtZQUNsRixJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQzFCLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1lBQ0QsT0FBTyxxQkFBcUIsS0FBSyxV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IE9uSW5pdCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSGVscGVycywgYmluYXJ5U2VhcmNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgVGFiYmVkR3JvdXBQaWNrZXJTY2hlbWEgPSB7XG4gIHR5cGVOYW1lOiBzdHJpbmc7XG4gIHR5cGVMYWJlbDogc3RyaW5nO1xuICB2YWx1ZUZpZWxkOiBzdHJpbmc7XG4gIGxhYmVsRmllbGQ6IHN0cmluZztcbn0gJiAoUGFyZW50U2NoZW1hIHwgQ2hpbGRTY2hlbWEpO1xuZXhwb3J0IHR5cGUgUGFyZW50U2NoZW1hID0ge1xuICBjaGlsZFR5cGVOYW1lOiBzdHJpbmc7XG4gIGRhdGE6IEFycmF5PFBhcmVudE9wdGlvbj47XG59O1xuXG50eXBlIFBhcmVudE9wdGlvbiA9IHtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBpbmRldGVybWluYXRlPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+O1xufSAmIHsgW2tleTogc3RyaW5nXTogYW55IH07XG5leHBvcnQgdHlwZSBDaGlsZFNjaGVtYSA9IHsgZGF0YTogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfSAmIHsgW2tleTogc3RyaW5nXTogYW55IH0+IH07XG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0ID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGNoaWxkVHlwZU5hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogKCh7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgb2JqZWN0KSB8IChudW1iZXIpKVtdO1xuICBhbGw/OiBib29sZWFuO1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWJiZWQtZ3JvdXAtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL1RhYmJlZEdyb3VwUGlja2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmJlZEdyb3VwUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJ1dHRvbkNvbmZpZzoge1xuICAgIHRoZW1lOiBzdHJpbmc7XG4gICAgc2lkZTogc3RyaW5nO1xuICAgIGljb246IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICB9O1xuICBASW5wdXQoKSBzY2hlbWF0YTogVGFiYmVkR3JvdXBQaWNrZXJTY2hlbWFbXTtcbiAgQElucHV0KCkgcXVpY2tTZWxlY3RDb25maWc6IHsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IFRhYmJlZEdyb3VwUGlja2VyUXVpY2tTZWxlY3RbXSB9O1xuICBkaXNwbGF5U2NoZW1hdGE6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hW107XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkaXNwbGF5U2NoZW1hSW5kZXg6IG51bWJlcjtcblxuICBnZXQgZGlzcGxheVNjaGVtYSgpOiBUYWJiZWRHcm91cFBpY2tlclNjaGVtYSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVNjaGVtYXRhW3RoaXMuZGlzcGxheVNjaGVtYUluZGV4XTtcbiAgfVxuICBzZXQgZGlzcGxheVNjaGVtYShzY2hlbWE6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hKSB7XG4gICAgdGhpcy5kaXNwbGF5U2NoZW1hSW5kZXggPSB0aGlzLnNjaGVtYXRhLm1hcCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSkuaW5kZXhPZihzY2hlbWEudHlwZU5hbWUpO1xuICB9XG5cbiAgZmlsdGVyVGV4dDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgc2VhcmNoTGFiZWw6IHN0cmluZyA9ICdTZWFyY2gnO1xuXG4gIGxvYWRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbFNlcnZpY2U6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldHVwRGlzcGxheURhdGEoKTtcbiAgICB0aGlzLmNyZWF0ZUNoaWxkcmVuUmVmZXJlbmNlcygpO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJUZXh0LnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB0aGlzLmZpbHRlcixcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwRGlzcGxheURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5U2NoZW1hdGEgPSB0aGlzLnNjaGVtYXRhO1xuICAgIHRoaXMuZGlzcGxheVNjaGVtYSA9IHRoaXMuc2NoZW1hdGFbMF07XG4gIH1cblxuICAvLyBSZXBsYWNlIGVhY2ggcGFyZW50J3MgY2hpbGQgb2JqZWN0IHdpdGggYSByZWZlcmVuY2UgdG8gdGhlIGNoaWxkIHRvIGF2b2lkXG4gIC8vIGEgY2hpbGQgbG9va3VwIGZvciBzZWxlY3RlZCBzdGF0dXM7IGxpbmtpbmcgcmVmZXJlbmNlcyBhbGxvd3MgTSB4IE5cbiAgLy8gdGltZSBjb21wbGV4aXR5IGluc3RlYWQgb2YgTSB4IE5eMlxuICBjcmVhdGVDaGlsZHJlblJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zY2hlbWF0YS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIC8vIHdvdWxkIHJhdGhlciBmaWx0ZXIgYnV0IFR5cGVTY3JpcHQgc3RpbGwgd2FudHMgYSB0eXBlIG5hcnJvd2luZyBoZXJlXG4gICAgICBpZiAoJ2NoaWxkVHlwZU5hbWUnIGluIHNjaGVtYSkge1xuICAgICAgICBjb25zdCBjaGlsZFNjaGVtYSA9IHRoaXMuc2NoZW1hdGEuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSA9PT0gc2NoZW1hLmNoaWxkVHlwZU5hbWUpO1xuICAgICAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSB0aGlzLm1ha2VDb21wYXJlRnVuY3Rpb24oY2hpbGRTY2hlbWEudmFsdWVGaWVsZCk7XG4gICAgICAgIGNvbnN0IHdhcm5GdW5jdGlvbiA9IHRoaXMubWFrZVdhcm5pbmdGdW5jdGlvbihzY2hlbWEudHlwZU5hbWUsIGNoaWxkU2NoZW1hLnR5cGVOYW1lLCBjaGlsZFNjaGVtYS52YWx1ZUZpZWxkKTtcbiAgICAgICAgY29uc3Qgc29ydGVkQ2hpbGRyZW4gPSBjaGlsZFNjaGVtYS5kYXRhLnNsaWNlKCkuc29ydChjb21wYXJlRnVuY3Rpb24pO1xuXG4gICAgICAgIHNjaGVtYS5kYXRhXG4gICAgICAgICAgLmZpbHRlcigoeyBjaGlsZHJlbiB9KSA9PiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgICAgLmZvckVhY2goKHBhcmVudDogeyBjaGlsZHJlbj86IGFueVtdIH0pID0+XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKHBhcmVudCBhcyBQYXJlbnRPcHRpb24sIHNvcnRlZENoaWxkcmVuLCBjb21wYXJlRnVuY3Rpb24sIHdhcm5GdW5jdGlvbiksXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtc1xuICAgICAgICAuZmlsdGVyKChwYXJlbnQpID0+ICdhbGwnIGluIHBhcmVudClcbiAgICAgICAgLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IHRoaXMuc2NoZW1hdGEuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiBwYXJlbnQuY2hpbGRUeXBlTmFtZSA9PT0gdHlwZU5hbWUpLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKHBhcmVudCkgPT4gISgnYWxsJyBpbiBwYXJlbnQpKVxuICAgICAgICAuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGRTY2hlbWEgPSB0aGlzLnNjaGVtYXRhLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUgPT09IHBhcmVudC5jaGlsZFR5cGVOYW1lKTtcbiAgICAgICAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSB0aGlzLm1ha2VDb21wYXJlRnVuY3Rpb24oY2hpbGRTY2hlbWEudmFsdWVGaWVsZCk7XG4gICAgICAgICAgY29uc3Qgd2FybkZ1bmN0aW9uID0gdGhpcy5tYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudC5sYWJlbCwgY2hpbGRTY2hlbWEudHlwZU5hbWUsIGNoaWxkU2NoZW1hLnZhbHVlRmllbGQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlZENoaWxkcmVuID0gY2hpbGRTY2hlbWEuZGF0YS5zbGljZSgpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcblxuICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMocGFyZW50IGFzIFBhcmVudE9wdGlvbiwgc29ydGVkQ2hpbGRyZW4sIGNvbXBhcmVGdW5jdGlvbiwgd2FybkZ1bmN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUNvbXBhcmVGdW5jdGlvbjxUPihrZXk6IHN0cmluZyk6IChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IHsgW2tleTogc3RyaW5nXTogVCB9KSA9PiAxIHwgLTEgfCAwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKGE6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSwgYjogeyBba2V5OiBzdHJpbmddOiBUIH0pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlOiBUID0gKGEgJiYgYVtrZXldKSB8fCBhO1xuXG4gICAgICBpZiAodmFsdWUgPCBiW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKFxuICAgIHBhcmVudDogeyBjaGlsZHJlbjogYW55W10gfSxcbiAgICBzb3J0ZWREYXRhOiBDaGlsZFNjaGVtYVsnZGF0YSddLFxuICAgIGNvbXBhcmVGdW5jdGlvbjogKGEsIGIpID0+IDEgfCAtMSB8IDAsXG4gICAgd2FybkZ1bmN0aW9uOiAoY2hpbGQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIHBhcmVudC5jaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlblxuICAgICAgLm1hcCgoY2hpbGQpID0+IGJpbmFyeVNlYXJjaChjaGlsZCwgc29ydGVkRGF0YSwgY29tcGFyZUZ1bmN0aW9uKSB8fCB3YXJuRnVuY3Rpb24oY2hpbGQpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTsgLy8gc2luY2UgbWFwIGNhbiByZXR1cm4gdW5kZWZpbmVkLCByZW1vdmUgdW5kZWZpbmVkIGVsZW1lbnRzXG4gIH1cblxuICBtYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudExhYmVsOiBzdHJpbmcsIGNoaWxkTGFiZWw6IHN0cmluZywgY2hpbGRWYWx1ZUZpZWxkKTogKGNoaWxkKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFZhbHVlID0gY2hpbGRbY2hpbGRWYWx1ZUZpZWxkXSB8fCBjaGlsZDtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gJHtjaGlsZExhYmVsfSBmb3VuZCB3aXRoIHZhbHVlICR7Y2hpbGRWYWx1ZX0gZm9yIHBhcmVudCAke3BhcmVudExhYmVsfWApO1xuICAgIH07XG4gIH1cblxuICBvbkl0ZW1Ub2dnbGVkKGl0ZW06IHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+IH0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbihpdGVtLnNlbGVjdGVkLCBpdGVtLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQYXJlbnRzKCk7XG4gICAgdGhpcy5lbWl0U2VsZWN0ZWRWYWx1ZXMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuKHBhcmVudElzU2VsZWN0ZWQ6IGJvb2xlYW4sIGNoaWxkcmVuOiB7IHNlbGVjdGVkPzogYm9vbGVhbiB9W10pOiB2b2lkIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiAocGFyZW50SXNTZWxlY3RlZCA/IChpdGVtLnNlbGVjdGVkID0gdHJ1ZSkgOiBkZWxldGUgaXRlbS5zZWxlY3RlZCkpO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50cygpOiB2b2lkIHtcbiAgICAvLyBtdXRhdGUgaGVyZSB0byBhdm9pZCBkZXJlZmVyZW5jaW5nIHRoZSBvYmplY3RzIGluIGRpc3BsYXlTY2hlbWF0YVxuICAgIHRoaXMuc2NoZW1hdGFcbiAgICAgIC5maWx0ZXIoKHNjaGVtYSkgPT4gJ2NoaWxkVHlwZU5hbWUnIGluIHNjaGVtYSAmJiAhIXNjaGVtYS5jaGlsZFR5cGVOYW1lKVxuICAgICAgLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRzID0gc2NoZW1hLmRhdGEuZmlsdGVyKCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBhbnlbXSB9KSA9PiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpO1xuXG4gICAgICAgIHBhcmVudHMuZm9yRWFjaCgocGFyZW50OiB7IGNoaWxkcmVuPzogeyBzZWxlY3RlZD86IGJvb2xlYW4gfVtdIH0pID0+IHtcbiAgICAgICAgICBbJ2luZGV0ZXJtaW5hdGUnLCAnc2VsZWN0ZWQnXS5mb3JFYWNoKCh2KSA9PiBkZWxldGUgcGFyZW50W3ZdKTtcblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgcGFyZW50W3NlbGVjdGVkU3RhdGVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgcXVpY2tTZWxlY3Quc2VsZWN0ZWQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocXVpY2tTZWxlY3QuY2hpbGRyZW4gYXMgKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiBvYmplY3QpW10pO1xuICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgIHF1aWNrU2VsZWN0W3NlbGVjdGVkU3RhdGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRTdGF0ZSA9IChjaGlsZEFycmF5OiB7IHNlbGVjdGVkPzogYm9vbGVhbjsgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW4gfVtdKTogJ3NlbGVjdGVkJyB8ICdpbmRldGVybWluYXRlJyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zID0gY2hpbGRBcnJheS5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpLmxlbmd0aDtcbiAgICBpZiAoIW51bWJlck9mU2VsZWN0ZWRJdGVtcykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlck9mU2VsZWN0ZWRJdGVtcyA9PT0gY2hpbGRBcnJheS5sZW5ndGggPyAnc2VsZWN0ZWQnIDogJ2luZGV0ZXJtaW5hdGUnO1xuICB9O1xuXG4gIGVtaXRTZWxlY3RlZFZhbHVlcygpIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlczogVGFiYmVkR3JvdXBQaWNrZXJTY2hlbWFbXSA9IHRoaXMuc2NoZW1hdGEubWFwKChzY2hlbWEpID0+ICh7XG4gICAgICAuLi5zY2hlbWEsXG4gICAgICBkYXRhOiBzY2hlbWEuZGF0YS5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpLFxuICAgIH0pKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkVmFsdWVzKTtcbiAgfVxuXG4gIG9uQ2xlYXJGaWx0ZXIoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoJycpO1xuICB9XG5cbiAgb25GaWx0ZXIoZXZlbnQ6IHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHJpbmcgfSB9KSB7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlciA9IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLmRpc3BsYXlTY2hlbWF0YSA9IHRoaXMuc2NoZW1hdGEubWFwKCh7IGRhdGEsIC4uLnNjaGVtYSB9OiBUYWJiZWRHcm91cFBpY2tlclNjaGVtYSkgPT4gKHtcbiAgICAgIC4uLnNjaGVtYSxcbiAgICAgIGRhdGE6IGRhdGEgJiYgZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bc2NoZW1hLmxhYmVsRmllbGRdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSksXG4gICAgfSkpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9O1xufVxuIl19