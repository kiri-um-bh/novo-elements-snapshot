/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        inputElement: [{ type: ViewChild, args: ['input',] }],
        listElement: [{ type: ViewChild, args: ['list',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBdUUrQyxxREFBaUI7SUFnRTlELG1DQUFZLE9BQW1CLEVBQVUsUUFBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQXJILFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUNwQjtRQUZ3QyxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUF4RHRGLHlCQUFtQixHQUFZLEtBQUssQ0FBQztRQUVyQyxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd4QixpQkFBVyxHQUE2RixJQUFJLEdBQUcsRUFHcEgsQ0FBQzs7SUFrREosQ0FBQztJQS9DRCxzQkFBSSwyQ0FBSTs7Ozs7UUFBUixVQUFTLEtBQUs7WUFBZCxpQkErQkM7WUE5QkMsbURBQW1E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U0FBUyxTQUFDLE1BQU07O0lBME1uQixnQ0FBQztDQUFBLEFBcFJELENBdUUrQyxpQkFBaUIsR0E2TS9EO1NBN01ZLHlCQUF5Qjs7Ozs7O0lBQ3BDLGlEQUNpQzs7Ozs7SUFDakMsZ0RBQ3FDOztJQUVyQyxxREFBMEQ7O0lBQzFELCtDQUEwQjs7SUFDMUIsd0RBQTRDOztJQUM1QyxzREFBaUM7O0lBQ2pDLGdEQUFnQzs7Ozs7SUFFaEMseURBQTJDOzs7OztJQUMzQyxnREFHSTs7SUFDSixzREFBOEI7Ozs7O0lBK0NHLDZDQUEyQjs7SUFBRSwyQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xpc3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vbGlzdC9MaXN0JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncm91cGVkLW11bHRpLXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWdyb3Vwc1wiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5kaXNwbGF5QWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ2FsbCcgfSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSAnYWxsJ1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImRpc3BsYXktYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBsYWJlbHMuYWxsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktbmV4dFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeShjYXRlZ29yeSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSBjYXRlZ29yeS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXRlZ29yeS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiY2F0ZWdvcnkuaWNvbkNsYXNzXCIgW2NsYXNzXT1cImNhdGVnb3J5Lmljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY2F0ZWdvcnkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1ncm91cHMtZm9vdGVyXCIgKm5nSWY9XCJjdXN0b21GaWx0ZXJFbmFibGVkXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZm9vdGVyXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXN3aXRjaCBbKG5nTW9kZWwpXT1cImN1c3RvbUZpbHRlclZhbHVlXCIgKG9uQ2hhbmdlKT1cImZpcmVDdXN0b21GaWx0ZXIoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInN3aXRjaFwiPjwvbm92by1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY3VzdG9tRmlsdGVyTGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbWF0Y2hlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWlucHV0LWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiIXNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzICNpbnB1dCBbKG5nTW9kZWwpXT1cInNlYXJjaFRlcm1cIiBbZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaW5wdXRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIi8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhc2VhcmNoVGVybVwiIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWFjaC1pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJzZWFyY2hUZXJtXCIgKGNsaWNrKT1cImNsZWFyU2VhcmNoVGVybSgkZXZlbnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInJlbW92ZS1pY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgI2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpIHx8IGlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibWF0Y2gubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbWF0Y2gubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbm8tcmVzdWx0c1wiICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiBzZWxlY3RlZENhdGVnb3J5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuZ3JvdXBlZE11bHRpUGlja2VyRW1wdHkgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbm8tY2F0ZWdvcnlcIiAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgIXNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3QtY2F0ZWdvcnktbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuZ3JvdXBlZE11bHRpUGlja2VyU2VsZWN0Q2F0ZWdvcnkgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibG9hZGluZy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdpbnB1dCcpXG4gIHByaXZhdGUgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsaXN0JylcbiAgcHJpdmF0ZSBsaXN0RWxlbWVudDogTm92b0xpc3RFbGVtZW50O1xuXG4gIHB1YmxpYyBzZWxlY3RlZENhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfTtcbiAgcHVibGljIHNlYXJjaFRlcm06IHN0cmluZztcbiAgcHVibGljIGN1c3RvbUZpbHRlckVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGN1c3RvbUZpbHRlckxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBrZXlib2FyZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGludGVybmFsTWFwOiBNYXA8c3RyaW5nLCB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIH0+ID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB9XG4gID4oKTtcbiAgcHVibGljIGN1c3RvbUZpbHRlclZhbHVlOiBhbnk7XG5cbiAgc2V0IHRlcm0odmFsdWUpIHtcbiAgICAvLyBEaXNwbGF5IGFsbCBvbmx5IHdpbGwgd29yayBmb3Igc3RhdGljIGNhdGVnb3JpZXNcbiAgICBpZiAodGhpcy5jb25maWcuZGlzcGxheUFsbCAmJiB0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1tHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzXSAtIHlvdSBjYW4gb25seSBoYXZlIGBkaXNwbGF5QWxsYCB3aXRoIGEgc3RhdGljIGBjYXRlZ29yeU1hcGAuIE5vdCBhdmFpbGFibGUgd2l0aCBgZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jYCcsXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBDdXN0b20gZmlsdGVyXG4gICAgaWYgKHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlcikge1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyTGFiZWwgPSB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubGFiZWw7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlclZhbHVlID0gISF0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIuZGVmYXVsdEZpbHRlclZhbHVlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRmlsdGVyTGFiZWwgfHwgIXRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0dyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHNdIC0gY3VzdG9tIGZpbHRlci9tYXRjaEZ1bmN0aW9uIHNldCBubyBsYWJlbCB3YXMgcHJvdmlkZWQhJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBDb25maWd1cmUgQUxMXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwgJiYgIXRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgdGhpcy5zZXRBbGxDYXRlZ29yeSgpO1xuICAgIH1cbiAgICAvLyBQbGFjZWhvbGRlclxuICAgIGlmICh0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICAvLyBGb2N1c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNhdGVnb3JpZXMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3JpZXMgfHwgdGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuY29uZmlnLmNhdGVnb3JpZXMgfHxcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC52YWx1ZXMoKSkuZmlsdGVyKChjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgIT09ICdhbGwnO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8ga2V5Ym9hcmQgZXZlbnRzIGFuZCBkZWJvdW5jZVxuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzUwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gQ2xlYW51cFxuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxDYXRlZ29yeSgpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGRpc3BsYXkgYWxsLCBzZXQgdGhlIGFsbCBjYXRlZ29yaWVzIHVwXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ2FsbCcgfTtcbiAgICAgIGxldCBhbGxJdGVtcyA9IFtdO1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC52YWx1ZXMoKSlcbiAgICAgICAgLmZpbHRlcigoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlICE9PSAnYWxsJztcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goKHY6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IGFueVtdIH0pID0+IGFsbEl0ZW1zLnB1c2goLi4udi5pdGVtcykpO1xuICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIoYWxsSXRlbXMpO1xuICAgICAgdGhpcy5jb25maWcuY2F0ZWdvcnlNYXAuc2V0KCdhbGwnLCB7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdBbGwnLCBpdGVtczogYWxsSXRlbXMgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgLy8gU2Nyb2xsIHRvIHRvcFxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5saXN0RWxlbWVudC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGxUb3AnLCAwKTtcbiAgICAvLyBTZXQgZm9jdXNcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgLy8gRmluZCBuZXcgaXRlbXNcbiAgICBsZXQga2V5OiBzdHJpbmcgPSBjYXRlZ29yeS52YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAvLyBDbGVhclxuICAgIHRoaXMubWF0Y2hlcyA9IFtdO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIC8vIE5ldyBtYXRjaGVzXG4gICAgdGhpcy5nZXROZXdNYXRjaGVzKGNhdGVnb3J5LCBrZXkpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VhcmNoVGVybShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSAnJztcbiAgICB0aGlzLnNlbGVjdENhdGVnb3J5KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZSwgbGFiZWw6IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5sYWJlbCB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXRjaChldmVudD86IE1vdXNlRXZlbnQsIGl0ZW0/OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSk6IGJvb2xlYW4ge1xuICAgIC8vIFNldCBmb2N1c1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0TWF0Y2goZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGZpcmVDdXN0b21GaWx0ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmN1c3RvbUZpbHRlclZhbHVlID0gdmFsdWU7XG4gICAgLy8gQ2xlYXIgY2FjaGUgbWFwXG4gICAgdGhpcy5pbnRlcm5hbE1hcC5jbGVhcigpO1xuICAgIC8vIE9ubHkgZmlyZSBpZiB3ZSBoYXZlIGEgc2VsZWN0ZWQgY2F0ZWdvcnlcbiAgICBpZiAodGhpcy5zZWxlY3RDYXRlZ29yeSkge1xuICAgICAgLy8gRmluZCBuZXcgaXRlbXNcbiAgICAgIGxldCBrZXk6IHN0cmluZyA9IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZTtcbiAgICAgIC8vIEdldCBuZXcgbWF0Y2hlc1xuICAgICAgdGhpcy5nZXROZXdNYXRjaGVzKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSwga2V5KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICAvLyBGb2N1c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyRGF0YSgpOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLmdldCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUpLml0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLmludGVybmFsTWFwLmdldCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUpLml0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdNYXRjaGVzKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSwga2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBHZXQgbmV3IG1hdGNoZXNcbiAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLmdldChrZXkpLml0ZW1zKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1RoZSBcImNvbmZpZ1wiIGZvciB0aGUgQ2hpcHMgbXVzdCBpbmNsdWRlIGEgZnVuY3Rpb24gXCJnZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMoY2F0ZWdvcnlLZXk6IHN0cmluZylcIiB0byByZXRyaWV2ZSB0aGUgaXRlbXMgYnkgY2F0ZWdvcnkuIE9yIGlmIHlvdSBoYXZlIHN0YXRpYyBkYXRhIHByb3ZpZGUgYSBcImNhdGVnb3J5TWFwXCInLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmludGVybmFsTWFwLmdldChrZXkpKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKGtleSwgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSkudGhlbigoaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10pID0+IHtcbiAgICAgICAgICB0aGlzLmludGVybmFsTWFwLnNldChrZXksIHsgdmFsdWU6IGNhdGVnb3J5LnZhbHVlLCBsYWJlbDogY2F0ZWdvcnkubGFiZWwsIGl0ZW1zOiBpdGVtcyB9KTtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcihpdGVtcywgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcih0aGlzLmludGVybmFsTWFwLmdldChrZXkpLml0ZW1zKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXIoXG4gICAgYXJyYXk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZmlsdGVyVmFsdWU/OiBhbnkgfVtdLFxuICAgIGlnbm9yZUN1c3RvbUZpbHRlcjogYm9vbGVhbiA9IGZhbHNlLFxuICApOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIHtcbiAgICBsZXQgbWF0Y2hlczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBmaWx0ZXJWYWx1ZT86IGFueSB9W10gPSBhcnJheTtcbiAgICBpZiAodGhpcy5zZWFyY2hUZXJtICYmIHRoaXMuc2VhcmNoVGVybS5sZW5ndGggIT09IDAgJiYgdGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBtYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSB0aGlzLnNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtKSA+IC0xIHx8IG1hdGNoLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgJiYgdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24gJiYgIWlnbm9yZUN1c3RvbUZpbHRlcikge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4gdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24obWF0Y2gsIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cbn1cbiJdfQ==