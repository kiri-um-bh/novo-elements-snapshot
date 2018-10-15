/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            setTimeout(function () {
                _this.inputElement.nativeElement.focus();
            });
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
                    Array.from(this.config.categoryMap.values()).filter(function (category) {
                        return category.value !== 'all';
                    }));
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
            .subscribe(function (event) {
            _this.searchTerm = event.target['value'];
            _this.matches = _this.filterData();
            _this.ref.markForCheck();
        });
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
                .filter(function (category) {
                return category.value !== 'all';
            })
                .forEach(function (v) { return allItems_1.push.apply(allItems_1, tslib_1.__spread(v.items)); });
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
        return _super.prototype.selectMatch.call(this, event, item);
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
        setTimeout(function () {
            _this.inputElement.nativeElement.focus();
        });
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
     * @param {?} category
     * @param {?} key
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.getNewMatches = /**
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
                this.config.getItemsForCategoryAsync(key, this.customFilterValue).then(function (items) {
                    _this.internalMap.set(key, { value: category.value, label: category.label, items: items });
                    _this.matches = _this.filter(items, true);
                    _this.isLoading = false;
                    _this.ref.markForCheck();
                    setTimeout(function () {
                        _this.inputElement.nativeElement.focus();
                    });
                });
            }
            else {
                this.matches = this.filter(this.internalMap.get(key).items);
                this.ref.markForCheck();
            }
        }
    };
    /**
     * @param {?} array
     * @param {?=} ignoreCustomFilter
     * @return {?}
     */
    GroupedMultiPickerResults.prototype.filter = /**
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
            matches = matches.filter(function (match) {
                return ~String(match.label)
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase());
            });
        }
        if (this.customFilterEnabled && this.config.customFilter.matchFunction && !ignoreCustomFilter) {
            matches = matches.filter(function (match) {
                return _this.config.customFilter.matchFunction(match, _this.customFilterValue);
            });
        }
        return matches;
    };
    GroupedMultiPickerResults.decorators = [
        { type: Component, args: [{
                    selector: 'grouped-multi-picker-results',
                    template: "\n        <div class=\"grouped-multi-picker-groups\">\n            <novo-list direction=\"vertical\">\n                <novo-list-item\n                    *ngIf=\"config.displayAll\"\n                    (click)=\"selectCategory({ value: 'all', label: 'all' })\"\n                    [class.active]=\"selectedCategory?.value === 'all'\"\n                    data-automation-id=\"display-all\"\n                    [class.disabled]=\"isLoading\">\n                    <item-content>\n                        <span data-automation-id=\"label\">{{ labels.all }}</span>\n                    </item-content>\n                    <item-end>\n                        <i class=\"bhi-next\"></i>\n                    </item-end>\n                </novo-list-item>\n                <novo-list-item\n                    *ngFor=\"let category of categories\"\n                    (click)=\"selectCategory(category)\"\n                    [class.active]=\"selectedCategory?.value === category.value\"\n                    [attr.data-automation-id]=\"category.label\"\n                    [class.disabled]=\"isLoading\">\n                    <item-content>\n                        <span data-automation-id=\"label\">{{ category.label }}</span>\n                    </item-content>\n                    <item-end>\n                        <i class=\"bhi-next\"></i>\n                    </item-end>\n                </novo-list-item>\n            </novo-list>\n            <footer class=\"grouped-multi-picker-groups-footer\" *ngIf=\"customFilterEnabled\" data-automation-id=\"footer\" [class.disabled]=\"isLoading\">\n                <novo-switch [(ngModel)]=\"customFilterValue\" (onChange)=\"fireCustomFilter($event)\" data-automation-id=\"switch\"></novo-switch>\n                <label data-automation-id=\"label\">{{ customFilterLabel }}</label>\n            </footer>\n        </div>\n        <div class=\"grouped-multi-picker-matches\">\n            <div class=\"grouped-multi-picker-input-container\" [hidden]=\"!selectedCategory\" data-automation-id=\"input-container\">\n                <input autofocus #input [(ngModel)]=\"searchTerm\" [disabled]=\"isLoading\" data-automation-id=\"input\" [placeholder]=\"placeholder\"/>\n                <i class=\"bhi-search\" *ngIf=\"!searchTerm\" [class.disabled]=\"isLoading\" data-automation-id=\"seach-icon\"></i>\n                <i class=\"bhi-times\" *ngIf=\"searchTerm\" (click)=\"clearSearchTerm($event)\" [class.disabled]=\"isLoading\" data-automation-id=\"remove-icon\"></i>\n            </div>\n            <div class=\"grouped-multi-picker-list-container\">\n                <novo-list direction=\"vertical\" #list>\n                    <novo-list-item\n                        *ngFor=\"let match of matches\"\n                        (click)=\"selectMatch($event)\"\n                        [class.active]=\"match === activeMatch\"\n                        (mouseenter)=\"selectActive(match)\"\n                        [class.disabled]=\"preselected(match)\"\n                        [attr.data-automation-id]=\"match.label\"\n                        [class.disabled]=\"isLoading\">\n                        <item-content>\n                            <span>{{ match.label }}</span>\n                        </item-content>\n                    </novo-list-item>\n                </novo-list>\n                <div class=\"grouped-multi-picker-no-results\" *ngIf=\"matches.length === 0 && !isLoading && selectedCategory\" data-automation-id=\"empty-message\">\n                    {{ labels.groupedMultiPickerEmpty }}\n                </div>\n                <div class=\"grouped-multi-picker-no-category\" *ngIf=\"matches.length === 0 && !isLoading && !selectedCategory\" data-automation-id=\"select-category-message\">\n                    {{ labels.groupedMultiPickerSelectCategory }}\n                </div>\n                <div class=\"grouped-multi-picker-loading\" *ngIf=\"isLoading\" data-automation-id=\"loading-message\">\n                    <novo-loading theme=\"line\"></novo-loading>\n                </div>\n            </div>\n        </div>\n    "
                }] }
    ];
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
    /** @type {?} */
    GroupedMultiPickerResults.prototype.inputElement;
    /** @type {?} */
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
    /** @type {?} */
    GroupedMultiPickerResults.prototype.keyboardSubscription;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.internalMap;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.customFilterValue;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.renderer;
    /** @type {?} */
    GroupedMultiPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBdUUrQyxxREFBaUI7SUFnRTlELG1DQUFZLE9BQW1CLEVBQVUsUUFBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQXJILFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUNwQjtRQUZ3QyxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUF4RHRGLHlCQUFtQixHQUFZLEtBQUssQ0FBQztRQUVyQyxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd4QixpQkFBVyxHQUE2RixJQUFJLEdBQUcsRUFHcEgsQ0FBQzs7SUFrREosQ0FBQztJQS9DRCxzQkFBSSwyQ0FBSTs7Ozs7UUFBUixVQUFTLEtBQUs7WUFBZCxpQkErQkM7WUE5QkMsbURBQW1E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QyxxREFBMEQ7O0lBQzFELCtDQUEwQjs7SUFDMUIsd0RBQTRDOztJQUM1QyxzREFBaUM7O0lBQ2pDLGdEQUFnQzs7SUFFaEMseURBQTJDOztJQUMzQyxnREFHSTs7SUFDSixzREFBOEI7O0lBK0NHLDZDQUEyQjs7SUFBRSwyQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xpc3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vbGlzdC9MaXN0JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncm91cGVkLW11bHRpLXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWdyb3Vwc1wiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5kaXNwbGF5QWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ2FsbCcgfSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSAnYWxsJ1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImRpc3BsYXktYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBsYWJlbHMuYWxsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktbmV4dFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeShjYXRlZ29yeSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSBjYXRlZ29yeS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXRlZ29yeS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY2F0ZWdvcnkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1ncm91cHMtZm9vdGVyXCIgKm5nSWY9XCJjdXN0b21GaWx0ZXJFbmFibGVkXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZm9vdGVyXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXN3aXRjaCBbKG5nTW9kZWwpXT1cImN1c3RvbUZpbHRlclZhbHVlXCIgKG9uQ2hhbmdlKT1cImZpcmVDdXN0b21GaWx0ZXIoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInN3aXRjaFwiPjwvbm92by1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY3VzdG9tRmlsdGVyTGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbWF0Y2hlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWlucHV0LWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiIXNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzICNpbnB1dCBbKG5nTW9kZWwpXT1cInNlYXJjaFRlcm1cIiBbZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaW5wdXRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIi8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhc2VhcmNoVGVybVwiIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWFjaC1pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJzZWFyY2hUZXJtXCIgKGNsaWNrKT1cImNsZWFyU2VhcmNoVGVybSgkZXZlbnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInJlbW92ZS1pY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgI2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJtYXRjaC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IG1hdGNoLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLW5vLXJlc3VsdHNcIiAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgc2VsZWN0ZWRDYXRlZ29yeVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLmdyb3VwZWRNdWx0aVBpY2tlckVtcHR5IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLW5vLWNhdGVnb3J5XCIgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA9PT0gMCAmJiAhaXNMb2FkaW5nICYmICFzZWxlY3RlZENhdGVnb3J5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VsZWN0LWNhdGVnb3J5LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLmdyb3VwZWRNdWx0aVBpY2tlclNlbGVjdENhdGVnb3J5IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWxvYWRpbmdcIiAqbmdJZj1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cImxvYWRpbmctbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxuICBwcml2YXRlIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGlzdCcpXG4gIHByaXZhdGUgbGlzdEVsZW1lbnQ6IE5vdm9MaXN0RWxlbWVudDtcblxuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG4gIHB1YmxpYyBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuXG4gIHByaXZhdGUga2V5Ym9hcmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpbnRlcm5hbE1hcDogTWFwPHN0cmluZywgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB9PiA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10gfVxuICA+KCk7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJWYWx1ZTogYW55O1xuXG4gIHNldCB0ZXJtKHZhbHVlKSB7XG4gICAgLy8gRGlzcGxheSBhbGwgb25seSB3aWxsIHdvcmsgZm9yIHN0YXRpYyBjYXRlZ29yaWVzXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwgJiYgdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdbR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0c10gLSB5b3UgY2FuIG9ubHkgaGF2ZSBgZGlzcGxheUFsbGAgd2l0aCBhIHN0YXRpYyBgY2F0ZWdvcnlNYXBgLiBOb3QgYXZhaWxhYmxlIHdpdGggYGdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luY2AnLFxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIGZpbHRlclxuICAgIGlmICh0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIpIHtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckxhYmVsID0gdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLmxhYmVsO1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSA9ICEhdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLmRlZmF1bHRGaWx0ZXJWYWx1ZTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgaWYgKCF0aGlzLmN1c3RvbUZpbHRlckxhYmVsIHx8ICF0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubWF0Y2hGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzXSAtIGN1c3RvbSBmaWx0ZXIvbWF0Y2hGdW5jdGlvbiBzZXQgbm8gbGFiZWwgd2FzIHByb3ZpZGVkIScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gQ29uZmlndXJlIEFMTFxuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsICYmICF0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMuc2V0QWxsQ2F0ZWdvcnkoKTtcbiAgICB9XG4gICAgLy8gUGxhY2Vob2xkZXJcbiAgICBpZiAodGhpcy5jb25maWcucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgLy8gRm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjYXRlZ29yaWVzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jYXRlZ29yaWVzIHx8IHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmNvbmZpZy5jYXRlZ29yaWVzIHx8XG4gICAgICAgIEFycmF5LmZyb20odGhpcy5jb25maWcuY2F0ZWdvcnlNYXAudmFsdWVzKCkpLmZpbHRlcigoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlICE9PSAnYWxsJztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGtleWJvYXJkIGV2ZW50cyBhbmQgZGVib3VuY2VcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDM1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaFRlcm0gPSBldmVudC50YXJnZXRbJ3ZhbHVlJ107XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyRGF0YSgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIC8vIENsZWFudXBcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWxsQ2F0ZWdvcnkoKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBkaXNwbGF5IGFsbCwgc2V0IHRoZSBhbGwgY2F0ZWdvcmllcyB1cFxuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSB7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdhbGwnIH07XG4gICAgICBsZXQgYWxsSXRlbXMgPSBbXTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5jb25maWcuY2F0ZWdvcnlNYXAudmFsdWVzKCkpXG4gICAgICAgIC5maWx0ZXIoKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZSAhPT0gJ2FsbCc7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKCh2OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBhbnlbXSB9KSA9PiBhbGxJdGVtcy5wdXNoKC4uLnYuaXRlbXMpKTtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKGFsbEl0ZW1zKTtcbiAgICAgIHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLnNldCgnYWxsJywgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQWxsJywgaXRlbXM6IGFsbEl0ZW1zIH0pO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdENhdGVnb3J5KGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIC8vIFNjcm9sbCB0byB0b3BcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMubGlzdEVsZW1lbnQuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgMCk7XG4gICAgLy8gU2V0IGZvY3VzXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIC8vIEZpbmQgbmV3IGl0ZW1zXG4gICAgbGV0IGtleTogc3RyaW5nID0gY2F0ZWdvcnkudmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgLy8gQ2xlYXJcbiAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAvLyBOZXcgbWF0Y2hlc1xuICAgIHRoaXMuZ2V0TmV3TWF0Y2hlcyhjYXRlZ29yeSwga2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlYXJjaFRlcm0oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zZWFyY2hUZXJtID0gJyc7XG4gICAgdGhpcy5zZWxlY3RDYXRlZ29yeSh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUsIGxhYmVsOiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubGFiZWwgfSk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWF0Y2goZXZlbnQ/OiBNb3VzZUV2ZW50LCBpdGVtPzogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0pOiBib29sZWFuIHtcbiAgICAvLyBTZXQgZm9jdXNcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBmaXJlQ3VzdG9tRmlsdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSA9IHZhbHVlO1xuICAgIC8vIENsZWFyIGNhY2hlIG1hcFxuICAgIHRoaXMuaW50ZXJuYWxNYXAuY2xlYXIoKTtcbiAgICAvLyBPbmx5IGZpcmUgaWYgd2UgaGF2ZSBhIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaWYgKHRoaXMuc2VsZWN0Q2F0ZWdvcnkpIHtcbiAgICAgIC8vIEZpbmQgbmV3IGl0ZW1zXG4gICAgICBsZXQga2V5OiBzdHJpbmcgPSB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWU7XG4gICAgICAvLyBHZXQgbmV3IG1hdGNoZXNcbiAgICAgIHRoaXMuZ2V0TmV3TWF0Y2hlcyh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnksIGtleSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgLy8gRm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckRhdGEoKTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5nZXQodGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlKS5pdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIodGhpcy5pbnRlcm5hbE1hcC5nZXQodGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlKS5pdGVtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3TWF0Y2hlcyhjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0sIGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gR2V0IG5ldyBtYXRjaGVzXG4gICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcih0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5nZXQoa2V5KS5pdGVtcyk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdUaGUgXCJjb25maWdcIiBmb3IgdGhlIENoaXBzIG11c3QgaW5jbHVkZSBhIGZ1bmN0aW9uIFwiZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKGNhdGVnb3J5S2V5OiBzdHJpbmcpXCIgdG8gcmV0cmlldmUgdGhlIGl0ZW1zIGJ5IGNhdGVnb3J5LiBPciBpZiB5b3UgaGF2ZSBzdGF0aWMgZGF0YSBwcm92aWRlIGEgXCJjYXRlZ29yeU1hcFwiJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pbnRlcm5hbE1hcC5nZXQoa2V5KSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYyhrZXksIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUpLnRoZW4oKGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnRlcm5hbE1hcC5zZXQoa2V5LCB7IHZhbHVlOiBjYXRlZ29yeS52YWx1ZSwgbGFiZWw6IGNhdGVnb3J5LmxhYmVsLCBpdGVtczogaXRlbXMgfSk7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIoaXRlbXMsIHRydWUpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIodGhpcy5pbnRlcm5hbE1hcC5nZXQoa2V5KS5pdGVtcyk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyKFxuICAgIGFycmF5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGZpbHRlclZhbHVlPzogYW55IH1bXSxcbiAgICBpZ25vcmVDdXN0b21GaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB7XG4gICAgbGV0IG1hdGNoZXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZmlsdGVyVmFsdWU/OiBhbnkgfVtdID0gYXJyYXk7XG4gICAgaWYgKHRoaXMuc2VhcmNoVGVybSAmJiB0aGlzLnNlYXJjaFRlcm0ubGVuZ3RoICE9PSAwICYmIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gflN0cmluZyhtYXRjaC5sYWJlbClcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5pbmRleE9mKHRoaXMuc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkICYmIHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uICYmICFpZ25vcmVDdXN0b21GaWx0ZXIpIHtcbiAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uKG1hdGNoLCB0aGlzLmN1c3RvbUZpbHRlclZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxufVxuIl19