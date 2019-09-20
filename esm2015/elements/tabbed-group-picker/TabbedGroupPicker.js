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
export class NovoTabbedGroupPickerElement {
    /**
     * @param {?} labelService
     * @param {?} ref
     */
    constructor(labelService, ref) {
        this.labelService = labelService;
        this.ref = ref;
        this.selectionChange = new EventEmitter();
        this.filterText = new BehaviorSubject('');
        this.searchLabel = 'Search';
        this.loading = true;
        this.getSelectedState = (childArray) => {
            /** @type {?} */
            const numberOfSelectedItems = childArray.filter(({ selected }) => selected).length;
            if (!numberOfSelectedItems) {
                return undefined;
            }
            return numberOfSelectedItems === childArray.length ? 'selected' : 'indeterminate';
        };
        this.filter = (searchTerm) => {
            this.displaySchemata = this.schemata.map((_a) => {
                var { data } = _a, schema = tslib_1.__rest(_a, ["data"]);
                return (Object.assign({}, schema, { data: data && data.filter((item) => item[schema.labelField].toLowerCase().includes(searchTerm.toLowerCase())) }));
            });
            this.ref.markForCheck();
        };
    }
    /**
     * @return {?}
     */
    get displaySchema() {
        return this.displaySchemata[this.displaySchemaIndex];
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    set displaySchema(schema) {
        this.displaySchemaIndex = this.schemata.map(({ typeName }) => typeName).indexOf(schema.typeName);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setupDisplayData();
        this.createChildrenReferences();
        this.loading = false;
        this.filterText.pipe(debounceTime(300)).subscribe({
            next: this.filter,
        });
    }
    /**
     * @return {?}
     */
    setupDisplayData() {
        this.displaySchemata = this.schemata;
        this.displaySchema = this.schemata[0];
    }
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    /**
     * @return {?}
     */
    createChildrenReferences() {
        this.schemata.forEach((schema) => {
            // would rather filter but TypeScript still wants a type narrowing here
            if ('childTypeName' in schema) {
                /** @type {?} */
                const childSchema = this.schemata.find(({ typeName }) => typeName === schema.childTypeName);
                /** @type {?} */
                const compareFunction = this.makeCompareFunction(childSchema.valueField);
                /** @type {?} */
                const warnFunction = this.makeWarningFunction(schema.typeName, childSchema.typeName, childSchema.valueField);
                /** @type {?} */
                const sortedChildren = childSchema.data.slice().sort(compareFunction);
                schema.data
                    .filter(({ children }) => children && children.length)
                    .forEach((parent) => this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren, compareFunction, warnFunction));
            }
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items
                .filter((parent) => 'all' in parent)
                .forEach((parent) => {
                parent.children = this.schemata.find(({ typeName }) => parent.childTypeName === typeName).data;
            });
            this.quickSelectConfig.items
                .filter((parent) => !('all' in parent))
                .forEach((parent) => {
                /** @type {?} */
                const childSchema = this.schemata.find(({ typeName }) => typeName === parent.childTypeName);
                /** @type {?} */
                const compareFunction = this.makeCompareFunction(childSchema.valueField);
                /** @type {?} */
                const warnFunction = this.makeWarningFunction(parent.label, childSchema.typeName, childSchema.valueField);
                /** @type {?} */
                const sortedChildren = childSchema.data.slice().sort(compareFunction);
                this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren, compareFunction, warnFunction);
            });
        }
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    makeCompareFunction(key) {
        return (a, b) => {
            /** @type {?} */
            const value = (a && a[key]) || a;
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
    }
    /**
     * @param {?} parent
     * @param {?} sortedData
     * @param {?} compareFunction
     * @param {?} warnFunction
     * @return {?}
     */
    replaceChildrenWithReferences(parent, sortedData, compareFunction, warnFunction) {
        parent.children = parent.children
            .map((child) => binarySearch(child, sortedData, compareFunction) || warnFunction(child))
            .filter(Boolean); // since map can return undefined, remove undefined elements
    }
    /**
     * @param {?} parentLabel
     * @param {?} childLabel
     * @param {?} childValueField
     * @return {?}
     */
    makeWarningFunction(parentLabel, childLabel, childValueField) {
        return (child) => {
            /** @type {?} */
            const childValue = child[childValueField] || child;
            console.warn(`No ${childLabel} found with value ${childValue} for parent ${parentLabel}`);
        };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemToggled(item) {
        if (Array.isArray(item.children)) {
            this.updateChildren(item.selected, item.children);
        }
        this.updateParents();
        this.emitSelectedValues();
        this.ref.markForCheck();
    }
    /**
     * @param {?} parentIsSelected
     * @param {?} children
     * @return {?}
     */
    updateChildren(parentIsSelected, children) {
        children.forEach((item) => (parentIsSelected ? (item.selected = true) : delete item.selected));
    }
    /**
     * @return {?}
     */
    updateParents() {
        // mutate here to avoid dereferencing the objects in displaySchemata
        this.schemata
            .filter((schema) => 'childTypeName' in schema && !!schema.childTypeName)
            .forEach((schema) => {
            /** @type {?} */
            const parents = schema.data.filter(({ children }) => children && children.length);
            parents.forEach((parent) => {
                ['indeterminate', 'selected'].forEach((v) => delete parent[v]);
                /** @type {?} */
                const selectedState = this.getSelectedState(parent.children);
                if (selectedState) {
                    parent[selectedState] = true;
                }
            });
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach((quickSelect) => {
                delete quickSelect.selected;
                /** @type {?} */
                const selectedState = this.getSelectedState((/** @type {?} */ (quickSelect.children)));
                if (selectedState) {
                    quickSelect[selectedState] = true;
                }
            });
        }
    }
    /**
     * @return {?}
     */
    emitSelectedValues() {
        /** @type {?} */
        const selectedValues = this.schemata.map((schema) => (Object.assign({}, schema, { data: schema.data.filter(({ selected }) => selected) })));
        this.selectionChange.emit(selectedValues);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClearFilter(event) {
        Helpers.swallowEvent(event);
        this.filterText.next('');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFilter(event) {
        this.filterText.next(event.target.value);
    }
}
NovoTabbedGroupPickerElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-tabbed-group-picker',
                template: "<novo-dropdown>\n  <button class=\"tabbed-group-picker-button\"\n          [theme]=\"buttonConfig.theme\"\n          [side]=\"buttonConfig.side\"\n          [icon]=\"buttonConfig.icon\"\n          [loading]=\"loading\">\n    <div class=\"tabbed-group-picker-button-label\">{{ buttonConfig.label }}</div>\n  </button>\n  <div class=\"novo-category-dropdown-search\" data-automation-id=\"novo-category-dropdown-search\">\n    <input type=\"text\" [placeholder]=\"searchLabel\" [value]=\"filterText | async\" (input)=\"onFilter($event)\" />\n    <i class=\"bhi-search\" *ngIf=\"!(filterText | async)\"></i>\n    <i class=\"bhi-times\" *ngIf=\"filterText | async\" (click)=\"onClearFilter($event)\"></i>\n  </div>\n  <div class=\"tabbed-group-picker-column-container\">\n    <div class=\"tabbed-group-picker-column left\">\n      <novo-nav theme=\"white\"\n                direction=\"vertical\">\n        <novo-tab *ngFor=\"let schema of displaySchemata\"\n                  [attr.data-automation-id]=\"schema.typeName\"\n                  (activeChange)=\"displaySchema = schema\">\n          <span>{{schema.typeLabel}} ({{schema.data.length}})</span><i class=\"bhi-next\"></i>\n        </novo-tab>\n      </novo-nav>\n      <!-- todo: clear all button goes here-->\n    </div>\n    <div class=\"tabbed-group-picker-column right\">\n      <div class=\"quick-select\" *ngIf=\"quickSelectConfig && !(filterText | async)\">\n        <div class=\"quick-select-label\">{{ quickSelectConfig.label }}</div>\n        <novo-list direction=\"vertical\">\n          <novo-list-item *ngFor=\"let quickSelect of quickSelectConfig.items\"\n                          [attr.data-automation-id]=\"quickSelect.label\"\n                          (click)=\"quickSelect.selected = !quickSelect.selected; onItemToggled(quickSelect)\">\n                          <item-content>\n                            <novo-checkbox [label]=\"quickSelect.label\"\n                            [name]=\"'selected'\"\n                            [(ngModel)]=\"quickSelect.selected\"\n                            (ngModelChange)=\"onItemToggled(quickSelect)\"></novo-checkbox>\n                          </item-content>\n          </novo-list-item>\n        </novo-list>\n      </div>\n      <!-- todo: add virtual scroll-->\n      <novo-list *ngIf=\"schemata[displaySchemaIndex].data.length\"\n                 direction=\"vertical\">\n        <novo-list-item *ngFor=\"let item of displaySchema.data\"\n                        [attr.data-automation-id]=\"item[displaySchema.labelField]\"\n                        (click)=\"item.selected = !item.selected; onItemToggled(item)\">\n                        <item-content>\n                          <novo-checkbox [label]=\"item[displaySchema.labelField]\"\n                          [name]=\"'selected'\"\n                          [indeterminate]=\"item.indeterminate\"\n                          [(ngModel)]=\"item.selected\"\n                          (ngModelChange)=\"onItemToggled(item)\">\n                        </novo-checkbox>\n                      </item-content>\n        </novo-list-item>\n      </novo-list>\n      <!-- TODO: add empty result message for no data in the case of no search -->\n      <div class=\"novo-category-dropdown-empty-item\" *ngIf=\"!displaySchema.data.length && (filterText | async)\">\n        <!-- TODO: add bhi-users icon if parent-child relationship-->\n        <i class=\"bhi-user\"></i>\n        <div class=\"empty-item-main-message\">{{ labelService.tabbedGroupPickerEmpty }}</div>\n        <div class=\"empty-item-sub-message\">{{ labelService.tabbedGroupClearSuggestion(this.displaySchema.typeLabel) }}</div>\n      </div>\n    </div>\n  </div>\n</novo-dropdown>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoTabbedGroupPickerElement.ctorParameters = () => [
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
NovoTabbedGroupPickerElement.propDecorators = {
    buttonConfig: [{ type: Input }],
    schemata: [{ type: Input }],
    quickSelectConfig: [{ type: Input }],
    selectionChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWdDckUsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUEyQnZDLFlBQW1CLFlBQThCLEVBQVUsR0FBc0I7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQnZFLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFXdkUsZUFBVSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUUvQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBcUlmLHFCQUFnQixHQUFHLENBQUMsVUFBNkQsRUFBNEMsRUFBRTs7a0JBQ3ZILHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNO1lBQ2xGLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDMUIsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFDRCxPQUFPLHFC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Q0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQW9DO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBMUxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxxcEhBQXVDO2dCQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQS9CUSxnQkFBZ0I7WUFKeUQsaUJBQWlCOzs7MkJBcUNoRyxLQUFLO3VCQU1MLEtBQUs7Z0NBQ0wsS0FBSzs4QkFHTCxNQUFNOzs7O0lBVlAsb0RBS0U7O0lBQ0YsZ0RBQTZDOztJQUM3Qyx5REFBcUY7O0lBQ3JGLHVEQUEyQzs7SUFFM0MsdURBQXVFOztJQUV2RSwwREFBMkI7O0lBUzNCLGtEQUE4RDs7SUFDOUQsbURBQStCOztJQUUvQiwrQ0FBZTs7SUFxSWYsd0RBTUU7O0lBbUJGLDhDQU1FOztJQWxLVSxvREFBcUM7Ozs7O0lBQUUsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEhlbHBlcnMsIGJpbmFyeVNlYXJjaCB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hID0ge1xuICB0eXBlTmFtZTogc3RyaW5nO1xuICB0eXBlTGFiZWw6IHN0cmluZztcbiAgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBsYWJlbEZpZWxkOiBzdHJpbmc7XG59ICYgKFBhcmVudFNjaGVtYSB8IENoaWxkU2NoZW1hKTtcbmV4cG9ydCB0eXBlIFBhcmVudFNjaGVtYSA9IHtcbiAgY2hpbGRUeXBlTmFtZTogc3RyaW5nO1xuICBkYXRhOiBBcnJheTxQYXJlbnRPcHRpb24+O1xufTtcblxudHlwZSBQYXJlbnRPcHRpb24gPSB7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9Pjtcbn0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuZXhwb3J0IHR5cGUgQ2hpbGRTY2hlbWEgPSB7IGRhdGE6IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9PiB9O1xuZXhwb3J0IHR5cGUgVGFiYmVkR3JvdXBQaWNrZXJRdWlja1NlbGVjdCA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBjaGlsZFR5cGVOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbj86ICgoeyBzZWxlY3RlZD86IGJvb2xlYW4gfSAmIG9iamVjdCkgfCAobnVtYmVyKSlbXTtcbiAgYWxsPzogYm9vbGVhbjtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiYmVkLWdyb3VwLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9UYWJiZWRHcm91cFBpY2tlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJiZWRHcm91cFBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBidXR0b25Db25maWc6IHtcbiAgICB0aGVtZTogc3RyaW5nO1xuICAgIHNpZGU6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgfTtcbiAgQElucHV0KCkgc2NoZW1hdGE6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hW107XG4gIEBJbnB1dCgpIHF1aWNrU2VsZWN0Q29uZmlnOiB7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0W10gfTtcbiAgZGlzcGxheVNjaGVtYXRhOiBUYWJiZWRHcm91cFBpY2tlclNjaGVtYVtdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZGlzcGxheVNjaGVtYUluZGV4OiBudW1iZXI7XG5cbiAgZ2V0IGRpc3BsYXlTY2hlbWEoKTogVGFiYmVkR3JvdXBQaWNrZXJTY2hlbWEge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXlTY2hlbWF0YVt0aGlzLmRpc3BsYXlTY2hlbWFJbmRleF07XG4gIH1cbiAgc2V0IGRpc3BsYXlTY2hlbWEoc2NoZW1hOiBUYWJiZWRHcm91cFBpY2tlclNjaGVtYSkge1xuICAgIHRoaXMuZGlzcGxheVNjaGVtYUluZGV4ID0gdGhpcy5zY2hlbWF0YS5tYXAoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUpLmluZGV4T2Yoc2NoZW1hLnR5cGVOYW1lKTtcbiAgfVxuXG4gIGZpbHRlclRleHQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHNlYXJjaExhYmVsOiBzdHJpbmcgPSAnU2VhcmNoJztcblxuICBsb2FkaW5nID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxTZXJ2aWNlOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXR1cERpc3BsYXlEYXRhKCk7XG4gICAgdGhpcy5jcmVhdGVDaGlsZHJlblJlZmVyZW5jZXMoKTtcblxuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyVGV4dC5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdGhpcy5maWx0ZXIsXG4gICAgfSk7XG4gIH1cblxuICBzZXR1cERpc3BsYXlEYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheVNjaGVtYXRhID0gdGhpcy5zY2hlbWF0YTtcbiAgICB0aGlzLmRpc3BsYXlTY2hlbWEgPSB0aGlzLnNjaGVtYXRhWzBdO1xuICB9XG5cbiAgLy8gUmVwbGFjZSBlYWNoIHBhcmVudCdzIGNoaWxkIG9iamVjdCB3aXRoIGEgcmVmZXJlbmNlIHRvIHRoZSBjaGlsZCB0byBhdm9pZFxuICAvLyBhIGNoaWxkIGxvb2t1cCBmb3Igc2VsZWN0ZWQgc3RhdHVzOyBsaW5raW5nIHJlZmVyZW5jZXMgYWxsb3dzIE0geCBOXG4gIC8vIHRpbWUgY29tcGxleGl0eSBpbnN0ZWFkIG9mIE0geCBOXjJcbiAgY3JlYXRlQ2hpbGRyZW5SZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2NoZW1hdGEuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAvLyB3b3VsZCByYXRoZXIgZmlsdGVyIGJ1dCBUeXBlU2NyaXB0IHN0aWxsIHdhbnRzIGEgdHlwZSBuYXJyb3dpbmcgaGVyZVxuICAgICAgaWYgKCdjaGlsZFR5cGVOYW1lJyBpbiBzY2hlbWEpIHtcbiAgICAgICAgY29uc3QgY2hpbGRTY2hlbWEgPSB0aGlzLnNjaGVtYXRhLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUgPT09IHNjaGVtYS5jaGlsZFR5cGVOYW1lKTtcbiAgICAgICAgY29uc3QgY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5tYWtlQ29tcGFyZUZ1bmN0aW9uKGNoaWxkU2NoZW1hLnZhbHVlRmllbGQpO1xuICAgICAgICBjb25zdCB3YXJuRnVuY3Rpb24gPSB0aGlzLm1ha2VXYXJuaW5nRnVuY3Rpb24oc2NoZW1hLnR5cGVOYW1lLCBjaGlsZFNjaGVtYS50eXBlTmFtZSwgY2hpbGRTY2hlbWEudmFsdWVGaWVsZCk7XG4gICAgICAgIGNvbnN0IHNvcnRlZENoaWxkcmVuID0gY2hpbGRTY2hlbWEuZGF0YS5zbGljZSgpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcblxuICAgICAgICBzY2hlbWEuZGF0YVxuICAgICAgICAgIC5maWx0ZXIoKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICAgIC5mb3JFYWNoKChwYXJlbnQ6IHsgY2hpbGRyZW4/OiBhbnlbXSB9KSA9PlxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhwYXJlbnQgYXMgUGFyZW50T3B0aW9uLCBzb3J0ZWRDaGlsZHJlbiwgY29tcGFyZUZ1bmN0aW9uLCB3YXJuRnVuY3Rpb24pLFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXNcbiAgICAgICAgLmZpbHRlcigocGFyZW50KSA9PiAnYWxsJyBpbiBwYXJlbnQpXG4gICAgICAgIC5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSB0aGlzLnNjaGVtYXRhLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gcGFyZW50LmNoaWxkVHlwZU5hbWUgPT09IHR5cGVOYW1lKS5kYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtc1xuICAgICAgICAuZmlsdGVyKChwYXJlbnQpID0+ICEoJ2FsbCcgaW4gcGFyZW50KSlcbiAgICAgICAgLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkU2NoZW1hID0gdGhpcy5zY2hlbWF0YS5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lID09PSBwYXJlbnQuY2hpbGRUeXBlTmFtZSk7XG4gICAgICAgICAgY29uc3QgY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5tYWtlQ29tcGFyZUZ1bmN0aW9uKGNoaWxkU2NoZW1hLnZhbHVlRmllbGQpO1xuICAgICAgICAgIGNvbnN0IHdhcm5GdW5jdGlvbiA9IHRoaXMubWFrZVdhcm5pbmdGdW5jdGlvbihwYXJlbnQubGFiZWwsIGNoaWxkU2NoZW1hLnR5cGVOYW1lLCBjaGlsZFNjaGVtYS52YWx1ZUZpZWxkKTtcbiAgICAgICAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IGNoaWxkU2NoZW1hLmRhdGEuc2xpY2UoKS5zb3J0KGNvbXBhcmVGdW5jdGlvbik7XG5cbiAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKHBhcmVudCBhcyBQYXJlbnRPcHRpb24sIHNvcnRlZENoaWxkcmVuLCBjb21wYXJlRnVuY3Rpb24sIHdhcm5GdW5jdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VDb21wYXJlRnVuY3Rpb248VD4oa2V5OiBzdHJpbmcpOiAoYTogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9LCBiOiB7IFtrZXk6IHN0cmluZ106IFQgfSkgPT4gMSB8IC0xIHwgMCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IHsgW2tleTogc3RyaW5nXTogVCB9KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZTogVCA9IChhICYmIGFba2V5XSkgfHwgYTtcblxuICAgICAgaWYgKHZhbHVlIDwgYltrZXldKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBiW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBiW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhcbiAgICBwYXJlbnQ6IHsgY2hpbGRyZW46IGFueVtdIH0sXG4gICAgc29ydGVkRGF0YTogQ2hpbGRTY2hlbWFbJ2RhdGEnXSxcbiAgICBjb21wYXJlRnVuY3Rpb246IChhLCBiKSA9PiAxIHwgLTEgfCAwLFxuICAgIHdhcm5GdW5jdGlvbjogKGNoaWxkKSA9PiB2b2lkLFxuICApOiB2b2lkIHtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW5cbiAgICAgIC5tYXAoKGNoaWxkKSA9PiBiaW5hcnlTZWFyY2goY2hpbGQsIHNvcnRlZERhdGEsIGNvbXBhcmVGdW5jdGlvbikgfHwgd2FybkZ1bmN0aW9uKGNoaWxkKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbik7IC8vIHNpbmNlIG1hcCBjYW4gcmV0dXJuIHVuZGVmaW5lZCwgcmVtb3ZlIHVuZGVmaW5lZCBlbGVtZW50c1xuICB9XG5cbiAgbWFrZVdhcm5pbmdGdW5jdGlvbihwYXJlbnRMYWJlbDogc3RyaW5nLCBjaGlsZExhYmVsOiBzdHJpbmcsIGNoaWxkVmFsdWVGaWVsZCk6IChjaGlsZCkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRWYWx1ZSA9IGNoaWxkW2NoaWxkVmFsdWVGaWVsZF0gfHwgY2hpbGQ7XG4gICAgICBjb25zb2xlLndhcm4oYE5vICR7Y2hpbGRMYWJlbH0gZm91bmQgd2l0aCB2YWx1ZSAke2NoaWxkVmFsdWV9IGZvciBwYXJlbnQgJHtwYXJlbnRMYWJlbH1gKTtcbiAgICB9O1xuICB9XG5cbiAgb25JdGVtVG9nZ2xlZChpdGVtOiB7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9PiB9KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oaXRlbS5zZWxlY3RlZCwgaXRlbS5jaGlsZHJlbik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGFyZW50cygpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGVkVmFsdWVzKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlbihwYXJlbnRJc1NlbGVjdGVkOiBib29sZWFuLCBjaGlsZHJlbjogeyBzZWxlY3RlZD86IGJvb2xlYW4gfVtdKTogdm9pZCB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4gKHBhcmVudElzU2VsZWN0ZWQgPyAoaXRlbS5zZWxlY3RlZCA9IHRydWUpIDogZGVsZXRlIGl0ZW0uc2VsZWN0ZWQpKTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudHMoKTogdm9pZCB7XG4gICAgLy8gbXV0YXRlIGhlcmUgdG8gYXZvaWQgZGVyZWZlcmVuY2luZyB0aGUgb2JqZWN0cyBpbiBkaXNwbGF5U2NoZW1hdGFcbiAgICB0aGlzLnNjaGVtYXRhXG4gICAgICAuZmlsdGVyKChzY2hlbWEpID0+ICdjaGlsZFR5cGVOYW1lJyBpbiBzY2hlbWEgJiYgISFzY2hlbWEuY2hpbGRUeXBlTmFtZSlcbiAgICAgIC5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IHNjaGVtYS5kYXRhLmZpbHRlcigoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55W10gfSkgPT4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKTtcblxuICAgICAgICBwYXJlbnRzLmZvckVhY2goKHBhcmVudDogeyBjaGlsZHJlbj86IHsgc2VsZWN0ZWQ/OiBib29sZWFuIH1bXSB9KSA9PiB7XG4gICAgICAgICAgWydpbmRldGVybWluYXRlJywgJ3NlbGVjdGVkJ10uZm9yRWFjaCgodikgPT4gZGVsZXRlIHBhcmVudFt2XSk7XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHBhcmVudC5jaGlsZHJlbik7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHBhcmVudFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXMuZm9yRWFjaCgocXVpY2tTZWxlY3QpID0+IHtcbiAgICAgICAgZGVsZXRlIHF1aWNrU2VsZWN0LnNlbGVjdGVkO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHF1aWNrU2VsZWN0LmNoaWxkcmVuIGFzICh7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgb2JqZWN0KVtdKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICBxdWlja1NlbGVjdFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkU3RhdGUgPSAoY2hpbGRBcnJheTogeyBzZWxlY3RlZD86IGJvb2xlYW47IGluZGV0ZXJtaW5hdGU/OiBib29sZWFuIH1bXSk6ICdzZWxlY3RlZCcgfCAnaW5kZXRlcm1pbmF0ZScgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IG51bWJlck9mU2VsZWN0ZWRJdGVtcyA9IGNoaWxkQXJyYXkuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKS5sZW5ndGg7XG4gICAgaWYgKCFudW1iZXJPZlNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXJPZlNlbGVjdGVkSXRlbXMgPT09IGNoaWxkQXJyYXkubGVuZ3RoID8gJ3NlbGVjdGVkJyA6ICdpbmRldGVybWluYXRlJztcbiAgfTtcblxuICBlbWl0U2VsZWN0ZWRWYWx1ZXMoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXM6IFRhYmJlZEdyb3VwUGlja2VyU2NoZW1hW10gPSB0aGlzLnNjaGVtYXRhLm1hcCgoc2NoZW1hKSA9PiAoe1xuICAgICAgLi4uc2NoZW1hLFxuICAgICAgZGF0YTogc2NoZW1hLmRhdGEuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSxcbiAgICB9KSk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlcyk7XG4gIH1cblxuICBvbkNsZWFyRmlsdGVyKGV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuZmlsdGVyVGV4dC5uZXh0KCcnKTtcbiAgfVxuXG4gIG9uRmlsdGVyKGV2ZW50OiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH0gfSkge1xuICAgIHRoaXMuZmlsdGVyVGV4dC5uZXh0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmaWx0ZXIgPSAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5U2NoZW1hdGEgPSB0aGlzLnNjaGVtYXRhLm1hcCgoeyBkYXRhLCAuLi5zY2hlbWEgfTogVGFiYmVkR3JvdXBQaWNrZXJTY2hlbWEpID0+ICh7XG4gICAgICAuLi5zY2hlbWEsXG4gICAgICBkYXRhOiBkYXRhICYmIGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtW3NjaGVtYS5sYWJlbEZpZWxkXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpLFxuICAgIH0pKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfTtcbn1cbiJdfQ==