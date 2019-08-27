/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
var NovoTabbedGroupPickerElement = /** @class */ (function () {
    function NovoTabbedGroupPickerElement(labelService) {
        var _this = this;
        this.labelService = labelService;
        this.selectionChange = new EventEmitter();
        this.filterText = new BehaviorSubject('');
        this.searchLabel = 'Search';
        this.loading = true;
        this.getSelectedValues = function () {
            return _this.schemata.reduce(function (prev, _a) {
                var typeName = _a.typeName, valueField = _a.valueField;
                var _b;
                return tslib_1.__assign({}, prev, (_b = {}, _b[typeName] = _this.data[typeName].filter(function (dataItem) { return dataItem.selected; }).map(function (dataItem) { return dataItem[valueField]; }), _b));
            }, {});
        };
        this.filter = function (searchTerm) {
            return (_this.displayData = _this.schemata.reduce(function (accumulator, _a) {
                var labelField = _a.labelField, typeName = _a.typeName;
                var _b;
                return (tslib_1.__assign({}, accumulator, (_b = {}, _b[typeName] = _this.data[typeName] && _this.data[typeName].filter(function (item) { return item[labelField].toLowerCase().includes(searchTerm.toLowerCase()); }), _b)));
            }, {}));
        };
    }
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.validateData();
        this.displayData = this.data;
        if (this.quickSelectConfig) {
            this.validateQuickSelectConfig();
        }
        this.setActiveSchema(this.schemata[0]);
        this.loading = false;
        this.filterText.pipe(debounceTime(300)).subscribe({
            next: this.filter,
        });
    };
    /**
     * @param {?} newActiveSchema
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.setActiveSchema = /**
     * @param {?} newActiveSchema
     * @return {?}
     */
    function (newActiveSchema) {
        this.activeSchema = newActiveSchema;
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.validateData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var warning = '';
        this.schemata.forEach(function (schema) {
            if (_this.data[schema.typeName] === undefined) {
                warning += "Property " + schema.typeName + " is missing from data.\n";
            }
            else if (!Array.isArray(_this.data[schema.typeName])) {
                warning += "data." + schema.typeName + " is not an array.\n";
            }
            else {
                if (_this.data[schema.typeName].some(function (item) { return !(schema.valueField in item); })) {
                    warning += "At least one item in data." + schema.typeName + " is missing the " + schema.valueField + " property.\n";
                }
                if (_this.data[schema.typeName].some(function (item) { return !(schema.labelField in item); })) {
                    warning += "At least one item in data." + schema.typeName + " is missing the " + schema.labelField + " property.\n";
                }
            }
        });
        if (warning) {
            console.warn("TabbedGroupPicker data validation warning:\n" + warning);
        }
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.validateQuickSelectConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var warning = '';
        if (!('items' in this.quickSelectConfig)) {
            warning += "Invalid quick select: required field 'items' is not defined.\n";
        }
        else if (!Array.isArray(this.quickSelectConfig.items)) {
            warning += "Invalid quick select: 'items' is not an array.\n";
        }
        else if (!this.quickSelectConfig.items.length) {
            warning += "Invalid quick select: 'items' is empty.\n";
        }
        else {
            this.quickSelectConfig.items.forEach(function (quickSelect) {
                /** @type {?} */
                var quickSelectIdentifier = '(Invalid quickSelect)';
                if (!quickSelect.typeName) {
                    warning += "Invalid typeName: required field 'typeName' is not defined.\n";
                }
                else if (!quickSelect.label) {
                    warning += "Invalid label: required field 'label' is not defined.\n";
                }
                else {
                    quickSelectIdentifier = quickSelect.label + " (" + quickSelect.typeName + ")";
                }
                /** @type {?} */
                var schema = _this.schemata.find(function (schemaItem) { return quickSelect.typeName === schemaItem.typeName; });
                if (!schema) {
                    warning += "Invalid typeName for " + quickSelectIdentifier + " config: " + quickSelect.typeName + " is not present in any configured typeSchema.\n";
                }
                if ('values' in quickSelect && 'all' in quickSelect) {
                    warning += "Invalid properties for " + quickSelectIdentifier + " config: only one of 'values' and 'all' is allowed.\n";
                }
                else if (!('values' in quickSelect) && !('all' in quickSelect)) {
                    warning += "Invalid properties for " + quickSelectIdentifier + " config: either 'values' or 'all' is required.\n";
                }
                if ('values' in quickSelect) {
                    if (!Array.isArray(quickSelect.values)) {
                        warning += "Invalid values for " + quickSelectIdentifier + " config:  'values' property is not an array.\n";
                    }
                    else if (!Array.isArray(quickSelect.values)) {
                        warning += "Invalid values for " + quickSelectIdentifier + " config:  'values' property contains no values.\n";
                    }
                    else if (!quickSelect.values.every(function (quickSelectValue) {
                        return _this.data[schema.typeName].some(function (dataItem) { return dataItem[schema.valueField] === quickSelectValue; });
                    })) {
                        warning += "Invalid value for " + quickSelectIdentifier + " config: at least one value in values is not present in any item in data." + schema.typeName + "\n";
                    }
                }
            });
        }
        if (warning) {
            console.warn("TabbedGroupPicker quickSelect validation warning:\n" + warning);
        }
    };
    /**
     * @param {?} activeSchema
     * @param {?} item
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onDataListItemClicked = /**
     * @param {?} activeSchema
     * @param {?} item
     * @return {?}
     */
    function (activeSchema, item) {
        item.selected = !item.selected;
        this.onItemToggled(activeSchema);
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onItemToggled = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        if (this.quickSelectConfig) {
            this.updateQuickSelectCheckboxes(schema);
        }
        this.emitSelectedValues();
    };
    /**
     * @param {?} quickSelect
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onQuickSelectListItemClicked = /**
     * @param {?} quickSelect
     * @return {?}
     */
    function (quickSelect) {
        quickSelect.active = !quickSelect.active;
        this.onQuickSelectToggled(quickSelect);
    };
    /**
     * @param {?} quickSelect
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onQuickSelectToggled = /**
     * @param {?} quickSelect
     * @return {?}
     */
    function (quickSelect) {
        /** @type {?} */
        var schema = this.schemata.find(function (schemaItem) { return quickSelect.typeName === schemaItem.typeName; });
        /** @type {?} */
        var itemsToSelect = [];
        if (quickSelect.all) {
            itemsToSelect = this.data[schema.typeName];
        }
        else {
            itemsToSelect = this.data[schema.typeName].filter(function (item) { return quickSelect.values.includes(item[schema.valueField]); });
        }
        if (itemsToSelect && itemsToSelect.length) {
            itemsToSelect.forEach(function (itemToSelect) {
                itemToSelect.selected = !!quickSelect.active;
            });
        }
        this.onItemToggled(schema);
    };
    /**
     * @param {?} activeSchema
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.updateQuickSelectCheckboxes = /**
     * @param {?} activeSchema
     * @return {?}
     */
    function (activeSchema) {
        var _this = this;
        /** @type {?} */
        var relevantQuickSelects = this.quickSelectConfig.items.filter(function (quickSelect) { return activeSchema.typeName === quickSelect.typeName; });
        relevantQuickSelects.forEach(function (quickSelect) {
            /** @type {?} */
            var itemsToCheck = [];
            if (quickSelect.all) {
                itemsToCheck = _this.data[activeSchema.typeName];
            }
            else {
                itemsToCheck = _this.data[activeSchema.typeName].filter(function (dataItem) {
                    return quickSelect.values.includes(dataItem[activeSchema.valueField]);
                });
            }
            quickSelect.active = itemsToCheck.every(function (dataItem) { return dataItem.selected === true; });
        });
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.emitSelectedValues = /**
     * @return {?}
     */
    function () {
        this.selectionChange.emit(this.getSelectedValues());
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
        Helpers.swallowEvent(event); // dunno if this is necessary
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
                    template: "<novo-dropdown>\n  <button class=\"tabbed-group-picker-button\"\n          [theme]=\"buttonConfig.theme\"\n          [side]=\"buttonConfig.side\"\n          [icon]=\"buttonConfig.icon\"\n          [loading]=\"loading\">\n    <div class=\"tabbed-group-picker-button-label\">{{ buttonConfig.label }}</div>\n  </button>\n  <div class=\"novo-category-dropdown-search\" data-automation-id=\"novo-category-dropdown-search\">\n    <input type=\"text\" [placeholder]=\"searchLabel\" [value]=\"filterText | async\" (input)=\"onFilter($event)\" />\n    <i class=\"bhi-search\" *ngIf=\"!(filterText | async)\"></i>\n    <i class=\"bhi-times\" *ngIf=\"filterText | async\" (click)=\"onClearFilter($event)\"></i>\n  </div>\n  <div class=\"tabbed-group-picker-column-container\">\n    <div class=\"tabbed-group-picker-column left\">\n      <novo-nav theme=\"white\"\n                direction=\"vertical\">\n        <novo-tab *ngFor=\"let schema of schemata\"\n                  [attr.data-automation-id]=\"schema.typeName\"\n                  (activeChange)=\"setActiveSchema(schema)\">\n          <span>{{schema.typeLabel}} ({{displayData[schema.typeName].length}})</span><i class=\"bhi-next\"></i>\n        </novo-tab>\n      </novo-nav>\n      <!-- todo: clear all button goes here-->\n    </div>\n    <div class=\"tabbed-group-picker-column right\">\n      <div class=\"quick-select\" *ngIf=\"quickSelectConfig && !(filterText | async)\">\n        <div class=\"quick-select-label\">{{ quickSelectConfig.label }}</div>\n        <novo-list direction=\"vertical\">\n          <novo-list-item *ngFor=\"let quickSelect of quickSelectConfig.items\"\n                          [attr.data-automation-id]=\"quickSelect.label\"\n                          (click)=\"onQuickSelectListItemClicked(quickSelect)\">\n            <item-content>\n              <novo-checkbox [label]=\"quickSelect.label\"\n                             [name]=\"'active'\"\n                             [(ngModel)]=\"quickSelect.active\"\n                             (ngModelChange)=\"onQuickSelectToggled(quickSelect)\"></novo-checkbox>\n            </item-content>\n          </novo-list-item>\n        </novo-list>\n      </div>\n      <!-- todo: add virtual scroll-->\n      <novo-list *ngIf=\"displayData[activeSchema.typeName].length\"\n                 direction=\"vertical\">\n        <novo-list-item *ngFor=\"let item of displayData[activeSchema.typeName]\"\n                        [attr.data-automation-id]=\"item[activeSchema.labelField]\"\n                        (click)=\"onDataListItemClicked(activeSchema, item);\">\n          <item-content>\n            <novo-checkbox [label]=\"item[activeSchema.labelField]\"\n                           [name]=\"'selected'\"\n                           [(ngModel)]=\"item.selected\"\n                           (ngModelChange)=\"onItemToggled(activeSchema)\"></novo-checkbox>\n          </item-content>\n        </novo-list-item>\n      </novo-list>\n      <!-- TODO: add empty result message for no data in the case of no search -->\n      <div class=\"novo-category-dropdown-empty-item\" *ngIf=\"!displayData[activeSchema.typeName].length && (filterText | async)\">\n        <!-- TODO: add bhi-users icon if parent-child relationship-->\n        <i class=\"bhi-user\"></i>\n        <div class=\"empty-item-main-message\">{{ labelService.tabbedGroupPickerEmpty }}</div>\n        <div class=\"empty-item-sub-message\">{{ labelService.tabbedGroupClearSuggestion(this.activeSchema.typeLabel) }}</div>\n      </div>\n    </div>\n  </div>\n</novo-dropdown>\n"
                }] }
    ];
    /** @nocollapse */
    NovoTabbedGroupPickerElement.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    NovoTabbedGroupPickerElement.propDecorators = {
        buttonConfig: [{ type: Input }],
        schemata: [{ type: Input }],
        quickSelectConfig: [{ type: Input }],
        data: [{ type: Input }],
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
    NovoTabbedGroupPickerElement.prototype.data;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.displayData;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.selectionChange;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.activeSchema;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.filterText;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.searchLabel;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.loading;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.getSelectedValues;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.filter;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBdUJyRTtJQXdCRSxzQ0FBbUIsWUFBOEI7UUFBakQsaUJBQXFEO1FBQWxDLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQVJ2QyxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3ZFLGVBQVUsR0FBNEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFFL0IsWUFBTyxHQUFHLElBQUksQ0FBQztRQWlKZixzQkFBaUIsR0FBRztZQUNsQixPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQXdCO29CQUF0QixzQkFBUSxFQUFFLDBCQUFVOztnQkFDaEQsNEJBQ0ssSUFBSSxlQUNOLFFBQVEsSUFBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxRQUFRLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsVUFB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VUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsUUFBUSxLQUFLLElBQUksRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBQ3BGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQVVELG9EQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCwrQ0FBUTs7OztJQUFSLFVBQVMsS0FBb0M7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkF0TEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHkvR0FBdUM7aUJBQ3hDOzs7O2dCQTFCUSxnQkFBZ0I7OzsrQkE0QnRCLEtBQUs7MkJBTUwsS0FBSztvQ0FDTCxLQUFLO3VCQUNMLEtBQUs7a0NBR0wsTUFBTTs7SUFnTFQsbUNBQUM7Q0FBQSxBQWhNRCxJQWdNQztTQTVMWSw0QkFBNEI7OztJQUN2QyxvREFLRTs7SUFDRixnREFBNkM7O0lBQzdDLHlEQUFxRjs7SUFDckYsNENBQXFDOztJQUNyQyxtREFBbUM7O0lBRW5DLHVEQUF1RTs7SUFFdkUsb0RBQXNDOztJQUN0QyxrREFBOEQ7O0lBQzlELG1EQUErQjs7SUFFL0IsK0NBQWU7O0lBaUpmLHlEQU1TOztJQVdULDhDQU9LOztJQXZLTyxvREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlclNjaGVtYSA9IHtcbiAgdHlwZU5hbWU6IHN0cmluZztcbiAgdHlwZUxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlRmllbGQ6IHN0cmluZztcbiAgbGFiZWxGaWVsZDogc3RyaW5nO1xufSAmICh7IGNoaWxkVHlwZU5hbWU/OiBzdHJpbmcgfSB8IHsgcGFyZW50VHlwZU5hbWU/OiBzdHJpbmcgfSk7XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyUXVpY2tTZWxlY3QgPSB7XG4gIHR5cGVOYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGFsbD86IGJvb2xlYW47XG4gIHZhbHVlcz86IGFueVtdO1xufTtcblxuZXhwb3J0IHR5cGUgU2VsZWN0YWJsZUl0ZW0gPSB7IHNlbGVjdGVkPzogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlckRhdGEgPSB7XG4gIFtrZXk6IHN0cmluZ106IFNlbGVjdGFibGVJdGVtW107XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYmJlZC1ncm91cC1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vVGFiYmVkR3JvdXBQaWNrZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJiZWRHcm91cFBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBidXR0b25Db25maWc6IHtcbiAgICB0aGVtZTogc3RyaW5nO1xuICAgIHNpZGU6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgfTtcbiAgQElucHV0KCkgc2NoZW1hdGE6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hW107XG4gIEBJbnB1dCgpIHF1aWNrU2VsZWN0Q29uZmlnOiB7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0W10gfTtcbiAgQElucHV0KCkgZGF0YTogVGFiYmVkR3JvdXBQaWNrZXJEYXRhO1xuICBkaXNwbGF5RGF0YTogVGFiYmVkR3JvdXBQaWNrZXJEYXRhO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgYWN0aXZlU2NoZW1hOiBUYWJiZWRHcm91cFBpY2tlclNjaGVtYTtcbiAgZmlsdGVyVGV4dDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgc2VhcmNoTGFiZWw6IHN0cmluZyA9ICdTZWFyY2gnO1xuXG4gIGxvYWRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbFNlcnZpY2U6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGF0ZURhdGEoKTtcbiAgICB0aGlzLmRpc3BsYXlEYXRhID0gdGhpcy5kYXRhO1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlUXVpY2tTZWxlY3RDb25maWcoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRBY3RpdmVTY2hlbWEodGhpcy5zY2hlbWF0YVswXSk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJUZXh0LnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB0aGlzLmZpbHRlcixcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFjdGl2ZVNjaGVtYShuZXdBY3RpdmVTY2hlbWE6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hKSB7XG4gICAgdGhpcy5hY3RpdmVTY2hlbWEgPSBuZXdBY3RpdmVTY2hlbWE7XG4gIH1cblxuICB2YWxpZGF0ZURhdGEoKSB7XG4gICAgbGV0IHdhcm5pbmcgPSAnJztcbiAgICB0aGlzLnNjaGVtYXRhLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YVtzY2hlbWEudHlwZU5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2FybmluZyArPSBgUHJvcGVydHkgJHtzY2hlbWEudHlwZU5hbWV9IGlzIG1pc3NpbmcgZnJvbSBkYXRhLlxcbmA7XG4gICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuZGF0YVtzY2hlbWEudHlwZU5hbWVdKSkge1xuICAgICAgICB3YXJuaW5nICs9IGBkYXRhLiR7c2NoZW1hLnR5cGVOYW1lfSBpcyBub3QgYW4gYXJyYXkuXFxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFbc2NoZW1hLnR5cGVOYW1lXS5zb21lKChpdGVtKSA9PiAhKHNjaGVtYS52YWx1ZUZpZWxkIGluIGl0ZW0pKSkge1xuICAgICAgICAgIHdhcm5pbmcgKz0gYEF0IGxlYXN0IG9uZSBpdGVtIGluIGRhdGEuJHtzY2hlbWEudHlwZU5hbWV9IGlzIG1pc3NpbmcgdGhlICR7c2NoZW1hLnZhbHVlRmllbGR9IHByb3BlcnR5LlxcbmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YVtzY2hlbWEudHlwZU5hbWVdLnNvbWUoKGl0ZW0pID0+ICEoc2NoZW1hLmxhYmVsRmllbGQgaW4gaXRlbSkpKSB7XG4gICAgICAgICAgd2FybmluZyArPSBgQXQgbGVhc3Qgb25lIGl0ZW0gaW4gZGF0YS4ke3NjaGVtYS50eXBlTmFtZX0gaXMgbWlzc2luZyB0aGUgJHtzY2hlbWEubGFiZWxGaWVsZH0gcHJvcGVydHkuXFxuYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh3YXJuaW5nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRhYmJlZEdyb3VwUGlja2VyIGRhdGEgdmFsaWRhdGlvbiB3YXJuaW5nOlxcbiR7d2FybmluZ31gKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVF1aWNrU2VsZWN0Q29uZmlnKCkge1xuICAgIGxldCB3YXJuaW5nID0gJyc7XG4gICAgaWYgKCEoJ2l0ZW1zJyBpbiB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSkge1xuICAgICAgd2FybmluZyArPSBgSW52YWxpZCBxdWljayBzZWxlY3Q6IHJlcXVpcmVkIGZpZWxkICdpdGVtcycgaXMgbm90IGRlZmluZWQuXFxuYDtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXMpKSB7XG4gICAgICB3YXJuaW5nICs9IGBJbnZhbGlkIHF1aWNrIHNlbGVjdDogJ2l0ZW1zJyBpcyBub3QgYW4gYXJyYXkuXFxuYDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zLmxlbmd0aCkge1xuICAgICAgd2FybmluZyArPSBgSW52YWxpZCBxdWljayBzZWxlY3Q6ICdpdGVtcycgaXMgZW1wdHkuXFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBsZXQgcXVpY2tTZWxlY3RJZGVudGlmaWVyID0gJyhJbnZhbGlkIHF1aWNrU2VsZWN0KSc7XG4gICAgICAgIGlmICghcXVpY2tTZWxlY3QudHlwZU5hbWUpIHtcbiAgICAgICAgICB3YXJuaW5nICs9IGBJbnZhbGlkIHR5cGVOYW1lOiByZXF1aXJlZCBmaWVsZCAndHlwZU5hbWUnIGlzIG5vdCBkZWZpbmVkLlxcbmA7XG4gICAgICAgIH0gZWxzZSBpZiAoIXF1aWNrU2VsZWN0LmxhYmVsKSB7XG4gICAgICAgICAgd2FybmluZyArPSBgSW52YWxpZCBsYWJlbDogcmVxdWlyZWQgZmllbGQgJ2xhYmVsJyBpcyBub3QgZGVmaW5lZC5cXG5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1aWNrU2VsZWN0SWRlbnRpZmllciA9IGAke3F1aWNrU2VsZWN0LmxhYmVsfSAoJHtxdWlja1NlbGVjdC50eXBlTmFtZX0pYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYXRhLmZpbmQoKHNjaGVtYUl0ZW0pID0+IHF1aWNrU2VsZWN0LnR5cGVOYW1lID09PSBzY2hlbWFJdGVtLnR5cGVOYW1lKTtcbiAgICAgICAgaWYgKCFzY2hlbWEpIHtcbiAgICAgICAgICB3YXJuaW5nICs9IGBJbnZhbGlkIHR5cGVOYW1lIGZvciAke3F1aWNrU2VsZWN0SWRlbnRpZmllcn0gY29uZmlnOiAke1xuICAgICAgICAgICAgcXVpY2tTZWxlY3QudHlwZU5hbWVcbiAgICAgICAgICB9IGlzIG5vdCBwcmVzZW50IGluIGFueSBjb25maWd1cmVkIHR5cGVTY2hlbWEuXFxuYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3ZhbHVlcycgaW4gcXVpY2tTZWxlY3QgJiYgJ2FsbCcgaW4gcXVpY2tTZWxlY3QpIHtcbiAgICAgICAgICB3YXJuaW5nICs9IGBJbnZhbGlkIHByb3BlcnRpZXMgZm9yICR7cXVpY2tTZWxlY3RJZGVudGlmaWVyfSBjb25maWc6IG9ubHkgb25lIG9mICd2YWx1ZXMnIGFuZCAnYWxsJyBpcyBhbGxvd2VkLlxcbmA7XG4gICAgICAgIH0gZWxzZSBpZiAoISgndmFsdWVzJyBpbiBxdWlja1NlbGVjdCkgJiYgISgnYWxsJyBpbiBxdWlja1NlbGVjdCkpIHtcbiAgICAgICAgICB3YXJuaW5nICs9IGBJbnZhbGlkIHByb3BlcnRpZXMgZm9yICR7cXVpY2tTZWxlY3RJZGVudGlmaWVyfSBjb25maWc6IGVpdGhlciAndmFsdWVzJyBvciAnYWxsJyBpcyByZXF1aXJlZC5cXG5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICgndmFsdWVzJyBpbiBxdWlja1NlbGVjdCkge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShxdWlja1NlbGVjdC52YWx1ZXMpKSB7XG4gICAgICAgICAgICB3YXJuaW5nICs9IGBJbnZhbGlkIHZhbHVlcyBmb3IgJHtxdWlja1NlbGVjdElkZW50aWZpZXJ9IGNvbmZpZzogICd2YWx1ZXMnIHByb3BlcnR5IGlzIG5vdCBhbiBhcnJheS5cXG5gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkocXVpY2tTZWxlY3QudmFsdWVzKSkge1xuICAgICAgICAgICAgd2FybmluZyArPSBgSW52YWxpZCB2YWx1ZXMgZm9yICR7cXVpY2tTZWxlY3RJZGVudGlmaWVyfSBjb25maWc6ICAndmFsdWVzJyBwcm9wZXJ0eSBjb250YWlucyBubyB2YWx1ZXMuXFxuYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgIXF1aWNrU2VsZWN0LnZhbHVlcy5ldmVyeSgocXVpY2tTZWxlY3RWYWx1ZSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5kYXRhW3NjaGVtYS50eXBlTmFtZV0uc29tZSgoZGF0YUl0ZW0pID0+IGRhdGFJdGVtW3NjaGVtYS52YWx1ZUZpZWxkXSA9PT0gcXVpY2tTZWxlY3RWYWx1ZSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nICs9IGBJbnZhbGlkIHZhbHVlIGZvciAke3F1aWNrU2VsZWN0SWRlbnRpZmllcn0gY29uZmlnOiBhdCBsZWFzdCBvbmUgdmFsdWUgaW4gdmFsdWVzIGlzIG5vdCBwcmVzZW50IGluIGFueSBpdGVtIGluIGRhdGEuJHtcbiAgICAgICAgICAgICAgc2NoZW1hLnR5cGVOYW1lXG4gICAgICAgICAgICB9XFxuYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2FybmluZykge1xuICAgICAgY29uc29sZS53YXJuKGBUYWJiZWRHcm91cFBpY2tlciBxdWlja1NlbGVjdCB2YWxpZGF0aW9uIHdhcm5pbmc6XFxuJHt3YXJuaW5nfWApO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0YUxpc3RJdGVtQ2xpY2tlZChhY3RpdmVTY2hlbWE6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hLCBpdGVtOiBTZWxlY3RhYmxlSXRlbSkge1xuICAgIGl0ZW0uc2VsZWN0ZWQgPSAhaXRlbS5zZWxlY3RlZDtcbiAgICB0aGlzLm9uSXRlbVRvZ2dsZWQoYWN0aXZlU2NoZW1hKTtcbiAgfVxuXG4gIG9uSXRlbVRvZ2dsZWQoc2NoZW1hOiBUYWJiZWRHcm91cFBpY2tlclNjaGVtYSkge1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1aWNrU2VsZWN0Q2hlY2tib3hlcyhzY2hlbWEpO1xuICAgIH1cbiAgICB0aGlzLmVtaXRTZWxlY3RlZFZhbHVlcygpO1xuICB9XG5cbiAgb25RdWlja1NlbGVjdExpc3RJdGVtQ2xpY2tlZChxdWlja1NlbGVjdDogVGFiYmVkR3JvdXBQaWNrZXJRdWlja1NlbGVjdCkge1xuICAgIHF1aWNrU2VsZWN0LmFjdGl2ZSA9ICFxdWlja1NlbGVjdC5hY3RpdmU7XG4gICAgdGhpcy5vblF1aWNrU2VsZWN0VG9nZ2xlZChxdWlja1NlbGVjdCk7XG4gIH1cblxuICBvblF1aWNrU2VsZWN0VG9nZ2xlZChxdWlja1NlbGVjdDogVGFiYmVkR3JvdXBQaWNrZXJRdWlja1NlbGVjdCkge1xuICAgIGNvbnN0IHNjaGVtYTogVGFiYmVkR3JvdXBQaWNrZXJTY2hlbWEgPSB0aGlzLnNjaGVtYXRhLmZpbmQoKHNjaGVtYUl0ZW0pID0+IHF1aWNrU2VsZWN0LnR5cGVOYW1lID09PSBzY2hlbWFJdGVtLnR5cGVOYW1lKTtcbiAgICBsZXQgaXRlbXNUb1NlbGVjdDogU2VsZWN0YWJsZUl0ZW1bXSA9IFtdO1xuICAgIGlmIChxdWlja1NlbGVjdC5hbGwpIHtcbiAgICAgIGl0ZW1zVG9TZWxlY3QgPSB0aGlzLmRhdGFbc2NoZW1hLnR5cGVOYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXNUb1NlbGVjdCA9IHRoaXMuZGF0YVtzY2hlbWEudHlwZU5hbWVdLmZpbHRlcigoaXRlbSkgPT4gcXVpY2tTZWxlY3QudmFsdWVzLmluY2x1ZGVzKGl0ZW1bc2NoZW1hLnZhbHVlRmllbGRdKSk7XG4gICAgfVxuICAgIGlmIChpdGVtc1RvU2VsZWN0ICYmIGl0ZW1zVG9TZWxlY3QubGVuZ3RoKSB7XG4gICAgICBpdGVtc1RvU2VsZWN0LmZvckVhY2goKGl0ZW1Ub1NlbGVjdCkgPT4ge1xuICAgICAgICBpdGVtVG9TZWxlY3Quc2VsZWN0ZWQgPSAhIXF1aWNrU2VsZWN0LmFjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm9uSXRlbVRvZ2dsZWQoc2NoZW1hKTtcbiAgfVxuXG4gIHVwZGF0ZVF1aWNrU2VsZWN0Q2hlY2tib3hlcyhhY3RpdmVTY2hlbWE6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hKSB7XG4gICAgY29uc3QgcmVsZXZhbnRRdWlja1NlbGVjdHMgPSB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zLmZpbHRlcigocXVpY2tTZWxlY3QpID0+IGFjdGl2ZVNjaGVtYS50eXBlTmFtZSA9PT0gcXVpY2tTZWxlY3QudHlwZU5hbWUpO1xuICAgIHJlbGV2YW50UXVpY2tTZWxlY3RzLmZvckVhY2goKHF1aWNrU2VsZWN0KSA9PiB7XG4gICAgICBsZXQgaXRlbXNUb0NoZWNrOiBTZWxlY3RhYmxlSXRlbVtdID0gW107XG4gICAgICBpZiAocXVpY2tTZWxlY3QuYWxsKSB7XG4gICAgICAgIGl0ZW1zVG9DaGVjayA9IHRoaXMuZGF0YVthY3RpdmVTY2hlbWEudHlwZU5hbWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbXNUb0NoZWNrID0gdGhpcy5kYXRhW2FjdGl2ZVNjaGVtYS50eXBlTmFtZV0uZmlsdGVyKChkYXRhSXRlbSkgPT5cbiAgICAgICAgICBxdWlja1NlbGVjdC52YWx1ZXMuaW5jbHVkZXMoZGF0YUl0ZW1bYWN0aXZlU2NoZW1hLnZhbHVlRmllbGRdKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHF1aWNrU2VsZWN0LmFjdGl2ZSA9IGl0ZW1zVG9DaGVjay5ldmVyeSgoZGF0YUl0ZW0pID0+IGRhdGFJdGVtLnNlbGVjdGVkID09PSB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVtaXRTZWxlY3RlZFZhbHVlcygpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuZ2V0U2VsZWN0ZWRWYWx1ZXMoKSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZFZhbHVlcyA9ICgpID0+XG4gICAgdGhpcy5zY2hlbWF0YS5yZWR1Y2UoKHByZXYsIHsgdHlwZU5hbWUsIHZhbHVlRmllbGQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgW3R5cGVOYW1lXTogdGhpcy5kYXRhW3R5cGVOYW1lXS5maWx0ZXIoKGRhdGFJdGVtKSA9PiBkYXRhSXRlbS5zZWxlY3RlZCkubWFwKChkYXRhSXRlbSkgPT4gZGF0YUl0ZW1bdmFsdWVGaWVsZF0pLFxuICAgICAgfTtcbiAgICB9LCB7fSk7XG5cbiAgb25DbGVhckZpbHRlcihldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTsgLy8gZHVubm8gaWYgdGhpcyBpcyBuZWNlc3NhcnlcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dCgnJyk7XG4gIH1cblxuICBvbkZpbHRlcihldmVudDogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9IH0pIHtcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyID0gKHNlYXJjaFRlcm06IHN0cmluZykgPT5cbiAgICAodGhpcy5kaXNwbGF5RGF0YSA9IHRoaXMuc2NoZW1hdGEucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB7IGxhYmVsRmllbGQsIHR5cGVOYW1lIH0pID0+ICh7XG4gICAgICAgIC4uLmFjY3VtdWxhdG9yLFxuICAgICAgICBbdHlwZU5hbWVdOiB0aGlzLmRhdGFbdHlwZU5hbWVdICYmIHRoaXMuZGF0YVt0eXBlTmFtZV0uZmlsdGVyKChpdGVtKSA9PiBpdGVtW2xhYmVsRmllbGRdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSksXG4gICAgICB9KSxcbiAgICAgIHt9LFxuICAgICkpO1xufVxuIl19