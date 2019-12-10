/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/grouped-multi-picker-results/GroupedMultiPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild, Renderer2, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { Helpers } from '../../../../utils/Helpers';
import { NovoListElement } from '../../../list/List';
import { NovoLabelService } from '../../../../services/novo-label-service';
var GroupedMultiPickerResults = /** @class */ (function (_super) {
    tslib_1.__extends(GroupedMultiPickerResults, _super);
    function GroupedMultiPickerResults(element, renderer, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.renderer = renderer;
        _this.labels = labels;
        _this.customFilterEnabled = false;
        _this.placeholder = '';
        _this.internalMap = new Map();
        return _this;
    }
    Object.defineProperty(GroupedMultiPickerResults.prototype, "term", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            // Display all only will work for static categories
            if (this.config.displayAll && this.config.getItemsForCategoryAsync) {
                throw new Error('[GroupedMultiPickerResults] - you can only have `displayAll` with a static `categoryMap`. Not available with `getItemsForCategoryAsync`');
            }
            // Custom filter
            if (this.config.customFilter) {
                this.customFilterEnabled = true;
                this.customFilterLabel = this.config.customFilter.label;
                this.customFilterValue = !!this.config.customFilter.defaultFilterValue;
                this.ref.markForCheck();
                if (!this.customFilterLabel || !this.config.customFilter.matchFunction) {
                    throw new Error('[GroupedMultiPickerResults] - custom filter/matchFunction set no label was provided!');
                }
            }
            else {
                this.customFilterEnabled = false;
            }
            // Configure ALL
            if (this.config.displayAll && !this.selectedCategory) {
                this.setAllCategory();
            }
            // Placeholder
            if (this.config.placeholder) {
                this.placeholder = this.config.placeholder;
            }
            // Focus
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.inputElement.nativeElement.focus();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedMultiPickerResults.prototype, "categories", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.config.categories || this.config.categoryMap) {
                return (this.config.categories ||
                    Array.from(this.config.categoryMap.values()).filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    function (category) {
                        return category.value !== 'all';
                    })));
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe to keyboard events and debounce
        this.keyboardSubscription = fromEvent(this.inputElement.nativeElement, 'keyup')
            .pipe(debounceTime(350), distinctUntilChanged())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.searchTerm = event.target['value'];
            _this.matches = _this.filterData();
            _this.ref.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // Cleanup
        this.keyboardSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.setAllCategory = /**
     * @return {?}
     */
    function () {
        // If we have display all, set the all categories up
        if (this.config.displayAll) {
            this.selectedCategory = { value: 'all', label: 'all' };
            /** @type {?} */
            var allItems_1 = [];
            Array.from(this.config.categoryMap.values())
                .filter((/**
             * @param {?} category
             * @return {?}
             */
            function (category) {
                return category.value !== 'all';
            }))
                .forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return allItems_1.push.apply(allItems_1, tslib_1.__spread(v.items)); }));
            this.matches = this.filter(allItems_1);
            this.config.categoryMap.set('all', { value: 'all', label: 'All', items: allItems_1 });
            this.ref.markForCheck();
        }
    };
    /**
     * @param {?} category
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.selectCategory = /**
     * @param {?} category
     * @return {?}
     */
    function (category) {
        // Scroll to top
        this.renderer.setProperty(this.listElement.element.nativeElement, 'scrollTop', 0);
        // Set focus
        this.inputElement.nativeElement.focus();
        // Find new items
        /** @type {?} */
        var key = category.value;
        this.selectedCategory = category;
        // Clear
        this.matches = [];
        this.ref.markForCheck();
        // New matches
        this.getNewMatches(category, key);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.clearSearchTerm = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        this.searchTerm = '';
        this.selectCategory({ value: this.selectedCategory.value, label: this.selectedCategory.label });
        this.ref.markForCheck();
    };
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.selectMatch = /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    function (event, item) {
        // Set focus
        this.inputElement.nativeElement.focus();
        return _super.prototype.selectMatch.call(this, event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.fireCustomFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.customFilterValue = value;
        // Clear cache map
        this.internalMap.clear();
        // Only fire if we have a selected category
        if (this.selectCategory) {
            // Find new items
            /** @type {?} */
            var key = this.selectedCategory.value;
            // Get new matches
            this.getNewMatches(this.selectedCategory, key);
            this.ref.markForCheck();
        }
        // Focus
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.inputElement.nativeElement.focus();
        }));
    };
    /**
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.filterData = /**
     * @return {?}
     */
    function () {
        if (this.selectedCategory) {
            if (this.config.categoryMap) {
                return this.filter(this.config.categoryMap.get(this.selectedCategory.value).items);
            }
            else {
                return this.filter(this.internalMap.get(this.selectedCategory.value).items);
            }
        }
        return [];
    };
    /**
     * @private
     * @param {?} category
     * @param {?} key
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.getNewMatches = /**
     * @private
     * @param {?} category
     * @param {?} key
     * @return {?}
     */
    function (category, key) {
        var _this = this;
        // Get new matches
        if (this.config.categoryMap) {
            this.matches = this.filter(this.config.categoryMap.get(key).items);
            this.ref.markForCheck();
        }
        else {
            if (!this.config.getItemsForCategoryAsync) {
                throw new Error('The "config" for the Chips must include a function "getItemsForCategoryAsync(categoryKey: string)" to retrieve the items by category. Or if you have static data provide a "categoryMap"');
            }
            if (!this.internalMap.get(key)) {
                this.isLoading = true;
                this.config.getItemsForCategoryAsync(key, this.customFilterValue).then((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) {
                    _this.internalMap.set(key, { value: category.value, label: category.label, items: items });
                    _this.matches = _this.filter(items, true);
                    _this.isLoading = false;
                    _this.ref.markForCheck();
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.inputElement.nativeElement.focus();
                    }));
                }));
            }
            else {
                this.matches = this.filter(this.internalMap.get(key).items);
                this.ref.markForCheck();
            }
        }
    };
    /**
     * @private
     * @param {?} array
     * @param {?=} ignoreCustomFilter
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.filter = /**
     * @private
     * @param {?} array
     * @param {?=} ignoreCustomFilter
     * @return {?}
     */
    function (array, ignoreCustomFilter) {
        var _this = this;
        if (ignoreCustomFilter === void 0) { ignoreCustomFilter = false; }
        /** @type {?} */
        var matches = array;
        if (this.searchTerm && this.searchTerm.length !== 0 && this.selectedCategory) {
            matches = matches.filter((/**
             * @param {?} match
             * @return {?}
             */
            function (match) {
                /** @type {?} */
                var searchTerm = _this.searchTerm.toLowerCase();
                return match.label.toLowerCase().indexOf(searchTerm) > -1 || match.value.toLowerCase().indexOf(searchTerm) > -1;
            }));
        }
        if (this.customFilterEnabled && this.config.customFilter.matchFunction && !ignoreCustomFilter) {
            matches = matches.filter((/**
             * @param {?} match
             * @return {?}
             */
            function (match) { return _this.config.customFilter.matchFunction(match, _this.customFilterValue); }));
        }
        return matches;
    };
    GroupedMultiPickerResults.decorators = [
        { type: Component, args: [{
                    selector: 'grouped-multi-picker-results',
                    template: "\n        <div class=\"grouped-multi-picker-groups\">\n            <novo-list direction=\"vertical\">\n                <novo-list-item\n                    *ngIf=\"config.displayAll\"\n                    (click)=\"selectCategory({ value: 'all', label: 'all' })\"\n                    [class.active]=\"selectedCategory?.value === 'all'\"\n                    data-automation-id=\"display-all\"\n                    [class.disabled]=\"isLoading\">\n                    <item-content>\n                        <span data-automation-id=\"label\">{{ labels.all }}</span>\n                    </item-content>\n                    <item-end>\n                        <i class=\"bhi-next\"></i>\n                    </item-end>\n                </novo-list-item>\n                <novo-list-item\n                    *ngFor=\"let category of categories\"\n                    (click)=\"selectCategory(category)\"\n                    [class.active]=\"selectedCategory?.value === category.value\"\n                    [attr.data-automation-id]=\"category.label\"\n                    [class.disabled]=\"isLoading\">\n                    <item-content>\n                        <i *ngIf=\"category.iconClass\" [class]=\"category.iconClass\"></i>\n                        <span data-automation-id=\"label\">{{ category.label }}</span>\n                    </item-content>\n                    <item-end>\n                        <i class=\"bhi-next\"></i>\n                    </item-end>\n                </novo-list-item>\n            </novo-list>\n            <footer class=\"grouped-multi-picker-groups-footer\" *ngIf=\"customFilterEnabled\" data-automation-id=\"footer\" [class.disabled]=\"isLoading\">\n                <novo-switch [(ngModel)]=\"customFilterValue\" (onChange)=\"fireCustomFilter($event)\" data-automation-id=\"switch\"></novo-switch>\n                <label data-automation-id=\"label\">{{ customFilterLabel }}</label>\n            </footer>\n        </div>\n        <div class=\"grouped-multi-picker-matches\">\n            <div class=\"grouped-multi-picker-input-container\" [hidden]=\"!selectedCategory\" data-automation-id=\"input-container\">\n                <input autofocus #input [(ngModel)]=\"searchTerm\" [disabled]=\"isLoading\" data-automation-id=\"input\" [placeholder]=\"placeholder\"/>\n                <i class=\"bhi-search\" *ngIf=\"!searchTerm\" [class.disabled]=\"isLoading\" data-automation-id=\"seach-icon\"></i>\n                <i class=\"bhi-times\" *ngIf=\"searchTerm\" (click)=\"clearSearchTerm($event)\" [class.disabled]=\"isLoading\" data-automation-id=\"remove-icon\"></i>\n            </div>\n            <div class=\"grouped-multi-picker-list-container\">\n                <novo-list direction=\"vertical\" #list>\n                    <novo-list-item\n                        *ngFor=\"let match of matches\"\n                        (click)=\"selectMatch($event)\"\n                        [class.active]=\"match === activeMatch\"\n                        (mouseenter)=\"selectActive(match)\"\n                        [class.disabled]=\"preselected(match) || isLoading\"\n                        [attr.data-automation-id]=\"match.label\">\n                        <item-content>\n                            <span>{{ match.label }}</span>\n                        </item-content>\n                    </novo-list-item>\n                </novo-list>\n                <div class=\"grouped-multi-picker-no-results\" *ngIf=\"matches.length === 0 && !isLoading && selectedCategory\" data-automation-id=\"empty-message\">\n                    {{ labels.groupedMultiPickerEmpty }}\n                </div>\n                <div class=\"grouped-multi-picker-no-category\" *ngIf=\"matches.length === 0 && !isLoading && !selectedCategory\" data-automation-id=\"select-category-message\">\n                    {{ labels.groupedMultiPickerSelectCategory }}\n                </div>\n                <div class=\"grouped-multi-picker-loading\" *ngIf=\"isLoading\" data-automation-id=\"loading-message\">\n                    <novo-loading theme=\"line\"></novo-loading>\n                </div>\n            </div>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    GroupedMultiPickerResults.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    GroupedMultiPickerResults.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['input', { static: true },] }],
        listElement: [{ type: ViewChild, args: ['list', { static: false },] }]
    };
    return GroupedMultiPickerResults;
}(BasePickerResults));
export { GroupedMultiPickerResults };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GroupedMultiPickerResults.prototype.inputElement;
    /**
     * @type {?}
     * @private
     */
    GroupedMultiPickerResults.prototype.listElement;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.selectedCategory;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.searchTerm;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.customFilterEnabled;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.customFilterLabel;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.placeholder;
    /**
     * @type {?}
     * @private
     */
    GroupedMultiPickerResults.prototype.keyboardSubscription;
    /**
     * @type {?}
     * @private
     */
    GroupedMultiPickerResults.prototype.internalMap;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.customFilterValue;
    /**
     * @type {?}
     * @private
     */
    GroupedMultiPickerResults.prototype.renderer;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUzRTtJQXVFK0MscURBQWlCO0lBZ0U5RCxtQ0FBWSxPQUFtQixFQUFVLFFBQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUFySCxZQUNFLGtCQUFNLE9BQU8sRUFBRSxHQUFHLENBQUMsU0FDcEI7UUFGd0MsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLFlBQU0sR0FBTixNQUFNLENBQWtCO1FBeER0Rix5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFckMsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFHeEIsaUJBQVcsR0FBNkYsSUFBSSxHQUFHLEVBR3BILENBQUM7O0lBa0RKLENBQUM7SUEvQ0Qsc0JBQUksMkNBQUk7Ozs7O1FBQVIsVUFBUyxLQUFLO1lBQWQsaUJBK0JDO1lBOUJDLG1EQUFt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QUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBRW5DLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTBNdEMsZ0NBQUM7Q0FBQSxBQXBSRCxDQXVFK0MsaUJBQWlCLEdBNk0vRDtTQTdNWSx5QkFBeUI7Ozs7OztJQUNwQyxpREFDaUM7Ozs7O0lBQ2pDLGdEQUNxQzs7SUFFckMscURBQTBEOztJQUMxRCwrQ0FBMEI7O0lBQzFCLHdEQUE0Qzs7SUFDNUMsc0RBQWlDOztJQUNqQyxnREFBZ0M7Ozs7O0lBRWhDLHlEQUEyQzs7Ozs7SUFDM0MsZ0RBR0k7O0lBQ0osc0RBQThCOzs7OztJQStDRyw2Q0FBMkI7O0lBQUUsMkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgT25EZXN0cm95LCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MaXN0RWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL2xpc3QvTGlzdCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JvdXBlZC1tdWx0aS1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1ncm91cHNcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuZGlzcGxheUFsbFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeSh7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdhbGwnIH0pXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZENhdGVnb3J5Py52YWx1ZSA9PT0gJ2FsbCdcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJkaXNwbGF5LWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgbGFiZWxzLmFsbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW5leHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZENhdGVnb3J5Py52YWx1ZSA9PT0gY2F0ZWdvcnkudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2F0ZWdvcnkubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImNhdGVnb3J5Lmljb25DbGFzc1wiIFtjbGFzc109XCJjYXRlZ29yeS5pY29uQ2xhc3NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWF1dG9tYXRpb24taWQ9XCJsYWJlbFwiPnt7IGNhdGVnb3J5LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktbmV4dFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItZ3JvdXBzLWZvb3RlclwiICpuZ0lmPVwiY3VzdG9tRmlsdGVyRW5hYmxlZFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImZvb3RlclwiIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8bm92by1zd2l0Y2ggWyhuZ01vZGVsKV09XCJjdXN0b21GaWx0ZXJWYWx1ZVwiIChvbkNoYW5nZSk9XCJmaXJlQ3VzdG9tRmlsdGVyKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzd2l0Y2hcIj48L25vdm8tc3dpdGNoPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWF1dG9tYXRpb24taWQ9XCJsYWJlbFwiPnt7IGN1c3RvbUZpbHRlckxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLW1hdGNoZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1pbnB1dC1jb250YWluZXJcIiBbaGlkZGVuXT1cIiFzZWxlY3RlZENhdGVnb3J5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGF1dG9mb2N1cyAjaW5wdXQgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXJtXCIgW2Rpc2FibGVkXT1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cImlucHV0XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIvPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiICpuZ0lmPVwiIXNlYXJjaFRlcm1cIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VhY2gtaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS10aW1lc1wiICpuZ0lmPVwic2VhcmNoVGVybVwiIChjbGljayk9XCJjbGVhclNlYXJjaFRlcm0oJGV2ZW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJyZW1vdmUtaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiICNsaXN0PlxuICAgICAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKSB8fCBpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm1hdGNoLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IG1hdGNoLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLW5vLXJlc3VsdHNcIiAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgc2VsZWN0ZWRDYXRlZ29yeVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLmdyb3VwZWRNdWx0aVBpY2tlckVtcHR5IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLW5vLWNhdGVnb3J5XCIgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA9PT0gMCAmJiAhaXNMb2FkaW5nICYmICFzZWxlY3RlZENhdGVnb3J5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VsZWN0LWNhdGVnb3J5LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLmdyb3VwZWRNdWx0aVBpY2tlclNlbGVjdENhdGVnb3J5IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWxvYWRpbmdcIiAqbmdJZj1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cImxvYWRpbmctbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwcml2YXRlIGxpc3RFbGVtZW50OiBOb3ZvTGlzdEVsZW1lbnQ7XG5cbiAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9O1xuICBwdWJsaWMgc2VhcmNoVGVybTogc3RyaW5nO1xuICBwdWJsaWMgY3VzdG9tRmlsdGVyRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY3VzdG9tRmlsdGVyTGFiZWw6IHN0cmluZztcbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcblxuICBwcml2YXRlIGtleWJvYXJkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaW50ZXJuYWxNYXA6IE1hcDxzdHJpbmcsIHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10gfT4gPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIH1cbiAgPigpO1xuICBwdWJsaWMgY3VzdG9tRmlsdGVyVmFsdWU6IGFueTtcblxuICBzZXQgdGVybSh2YWx1ZSkge1xuICAgIC8vIERpc3BsYXkgYWxsIG9ubHkgd2lsbCB3b3JrIGZvciBzdGF0aWMgY2F0ZWdvcmllc1xuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsICYmIHRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnW0dyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHNdIC0geW91IGNhbiBvbmx5IGhhdmUgYGRpc3BsYXlBbGxgIHdpdGggYSBzdGF0aWMgYGNhdGVnb3J5TWFwYC4gTm90IGF2YWlsYWJsZSB3aXRoIGBnZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmNgJyxcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIEN1c3RvbSBmaWx0ZXJcbiAgICBpZiAodGhpcy5jb25maWcuY3VzdG9tRmlsdGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJMYWJlbCA9IHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5sYWJlbDtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUgPSAhIXRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5kZWZhdWx0RmlsdGVyVmFsdWU7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIGlmICghdGhpcy5jdXN0b21GaWx0ZXJMYWJlbCB8fCAhdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0c10gLSBjdXN0b20gZmlsdGVyL21hdGNoRnVuY3Rpb24gc2V0IG5vIGxhYmVsIHdhcyBwcm92aWRlZCEnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIENvbmZpZ3VyZSBBTExcbiAgICBpZiAodGhpcy5jb25maWcuZGlzcGxheUFsbCAmJiAhdGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICB0aGlzLnNldEFsbENhdGVnb3J5KCk7XG4gICAgfVxuICAgIC8vIFBsYWNlaG9sZGVyXG4gICAgaWYgKHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcucGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIC8vIEZvY3VzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY2F0ZWdvcmllcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcmllcyB8fCB0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5jb25maWcuY2F0ZWdvcmllcyB8fFxuICAgICAgICBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLnZhbHVlcygpKS5maWx0ZXIoKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZSAhPT0gJ2FsbCc7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIFN1YnNjcmliZSB0byBrZXlib2FyZCBldmVudHMgYW5kIGRlYm91bmNlXG4gICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAna2V5dXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzNTApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtID0gZXZlbnQudGFyZ2V0Wyd2YWx1ZSddO1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlckRhdGEoKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBDbGVhbnVwXG4gICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHNldEFsbENhdGVnb3J5KCkge1xuICAgIC8vIElmIHdlIGhhdmUgZGlzcGxheSBhbGwsIHNldCB0aGUgYWxsIGNhdGVnb3JpZXMgdXBcbiAgICBpZiAodGhpcy5jb25maWcuZGlzcGxheUFsbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0geyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnYWxsJyB9O1xuICAgICAgbGV0IGFsbEl0ZW1zID0gW107XG4gICAgICBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLnZhbHVlcygpKVxuICAgICAgICAuZmlsdGVyKChjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgIT09ICdhbGwnO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgodjogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogYW55W10gfSkgPT4gYWxsSXRlbXMucHVzaCguLi52Lml0ZW1zKSk7XG4gICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcihhbGxJdGVtcyk7XG4gICAgICB0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5zZXQoJ2FsbCcsIHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ0FsbCcsIGl0ZW1zOiBhbGxJdGVtcyB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDYXRlZ29yeShjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAvLyBTY3JvbGwgdG8gdG9wXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmxpc3RFbGVtZW50LmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbFRvcCcsIDApO1xuICAgIC8vIFNldCBmb2N1c1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAvLyBGaW5kIG5ldyBpdGVtc1xuICAgIGxldCBrZXk6IHN0cmluZyA9IGNhdGVnb3J5LnZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIC8vIENsZWFyXG4gICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgLy8gTmV3IG1hdGNoZXNcbiAgICB0aGlzLmdldE5ld01hdGNoZXMoY2F0ZWdvcnksIGtleSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZWFyY2hUZXJtKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2VhcmNoVGVybSA9ICcnO1xuICAgIHRoaXMuc2VsZWN0Q2F0ZWdvcnkoeyB2YWx1ZTogdGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlLCBsYWJlbDogdGhpcy5zZWxlY3RlZENhdGVnb3J5LmxhYmVsIH0pO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hdGNoKGV2ZW50PzogTW91c2VFdmVudCwgaXRlbT86IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KTogYm9vbGVhbiB7XG4gICAgLy8gU2V0IGZvY3VzXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RNYXRjaChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgZmlyZUN1c3RvbUZpbHRlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUgPSB2YWx1ZTtcbiAgICAvLyBDbGVhciBjYWNoZSBtYXBcbiAgICB0aGlzLmludGVybmFsTWFwLmNsZWFyKCk7XG4gICAgLy8gT25seSBmaXJlIGlmIHdlIGhhdmUgYSBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGlmICh0aGlzLnNlbGVjdENhdGVnb3J5KSB7XG4gICAgICAvLyBGaW5kIG5ldyBpdGVtc1xuICAgICAgbGV0IGtleTogc3RyaW5nID0gdGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlO1xuICAgICAgLy8gR2V0IG5ldyBtYXRjaGVzXG4gICAgICB0aGlzLmdldE5ld01hdGNoZXModGhpcy5zZWxlY3RlZENhdGVnb3J5LCBrZXkpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIC8vIEZvY3VzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJEYXRhKCk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10ge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIodGhpcy5jb25maWcuY2F0ZWdvcnlNYXAuZ2V0KHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZSkuaXRlbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHRoaXMuaW50ZXJuYWxNYXAuZ2V0KHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZSkuaXRlbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcml2YXRlIGdldE5ld01hdGNoZXMoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9LCBrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEdldCBuZXcgbWF0Y2hlc1xuICAgIGlmICh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcCkge1xuICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIodGhpcy5jb25maWcuY2F0ZWdvcnlNYXAuZ2V0KGtleSkuaXRlbXMpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVGhlIFwiY29uZmlnXCIgZm9yIHRoZSBDaGlwcyBtdXN0IGluY2x1ZGUgYSBmdW5jdGlvbiBcImdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYyhjYXRlZ29yeUtleTogc3RyaW5nKVwiIHRvIHJldHJpZXZlIHRoZSBpdGVtcyBieSBjYXRlZ29yeS4gT3IgaWYgeW91IGhhdmUgc3RhdGljIGRhdGEgcHJvdmlkZSBhIFwiY2F0ZWdvcnlNYXBcIicsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW50ZXJuYWxNYXAuZ2V0KGtleSkpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMoa2V5LCB0aGlzLmN1c3RvbUZpbHRlclZhbHVlKS50aGVuKChpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSkgPT4ge1xuICAgICAgICAgIHRoaXMuaW50ZXJuYWxNYXAuc2V0KGtleSwgeyB2YWx1ZTogY2F0ZWdvcnkudmFsdWUsIGxhYmVsOiBjYXRlZ29yeS5sYWJlbCwgaXRlbXM6IGl0ZW1zIH0pO1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKGl0ZW1zLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKHRoaXMuaW50ZXJuYWxNYXAuZ2V0KGtleSkuaXRlbXMpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlcihcbiAgICBhcnJheTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBmaWx0ZXJWYWx1ZT86IGFueSB9W10sXG4gICAgaWdub3JlQ3VzdG9tRmlsdGVyOiBib29sZWFuID0gZmFsc2UsXG4gICk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10ge1xuICAgIGxldCBtYXRjaGVzOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGZpbHRlclZhbHVlPzogYW55IH1bXSA9IGFycmF5O1xuICAgIGlmICh0aGlzLnNlYXJjaFRlcm0gJiYgdGhpcy5zZWFyY2hUZXJtLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHRoaXMuc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbWF0Y2gubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0pID4gLTEgfHwgbWF0Y2gudmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0pID4gLTE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCAmJiB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubWF0Y2hGdW5jdGlvbiAmJiAhaWdub3JlQ3VzdG9tRmlsdGVyKSB7XG4gICAgICBtYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubWF0Y2hGdW5jdGlvbihtYXRjaCwgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxufVxuIl19