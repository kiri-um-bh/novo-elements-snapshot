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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUzRTtJQXVFK0MscURBQWlCO0lBZ0U5RCxtQ0FBWSxPQUFtQixFQUFVLFFBQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUFySCxZQUNFLGtCQUFNLE9BQU8sRUFBRSxHQUFHLENBQUMsU0FDcEI7UUFGd0MsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLFlBQU0sR0FBTixNQUFNLENBQWtCO1FBeER0Rix5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFckMsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFHeEIsaUJBQVcsR0FBNkYsSUFBSSxHQUFHLEVBR3BILENBQUM7O0lBa0RKLENBQUM7SUEvQ0Qsc0JBQUksMkNBQUk7Ozs7O1FBQVIsVUFBUyxLQUFLO1lBQWQsaUJBK0JDO1lBOUJDLG1EQUFt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QUFNLEVBQUUsSUFBSSxFQUFFOzhCQUVuQyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUEwTXRDLGdDQUFDO0NBQUEsQUFwUkQsQ0F1RStDLGlCQUFpQixHQTZNL0Q7U0E3TVkseUJBQXlCOzs7Ozs7SUFDcEMsaURBQ2lDOzs7OztJQUNqQyxnREFDcUM7O0lBRXJDLHFEQUEwRDs7SUFDMUQsK0NBQTBCOztJQUMxQix3REFBNEM7O0lBQzVDLHNEQUFpQzs7SUFDakMsZ0RBQWdDOzs7OztJQUVoQyx5REFBMkM7Ozs7O0lBQzNDLGdEQUdJOztJQUNKLHNEQUE4Qjs7Ozs7SUErQ0csNkNBQTJCOztJQUFFLDJDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGlzdEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9saXN0L0xpc3QnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItZ3JvdXBzXCI+XG4gICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmRpc3BsYXlBbGxcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0Q2F0ZWdvcnkoeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnYWxsJyB9KVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRDYXRlZ29yeT8udmFsdWUgPT09ICdhbGwnXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZGlzcGxheS1hbGxcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWF1dG9tYXRpb24taWQ9XCJsYWJlbFwiPnt7IGxhYmVscy5hbGwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRDYXRlZ29yeT8udmFsdWUgPT09IGNhdGVnb3J5LnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhdGVnb3J5LmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJjYXRlZ29yeS5pY29uQ2xhc3NcIiBbY2xhc3NdPVwiY2F0ZWdvcnkuaWNvbkNsYXNzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBjYXRlZ29yeS5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW5leHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWdyb3Vwcy1mb290ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlckVuYWJsZWRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJmb290ZXJcIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tc3dpdGNoIFsobmdNb2RlbCldPVwiY3VzdG9tRmlsdGVyVmFsdWVcIiAob25DaGFuZ2UpPVwiZmlyZUN1c3RvbUZpbHRlcigkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic3dpdGNoXCI+PC9ub3ZvLXN3aXRjaD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBjdXN0b21GaWx0ZXJMYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1tYXRjaGVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItaW5wdXQtY29udGFpbmVyXCIgW2hpZGRlbl09XCIhc2VsZWN0ZWRDYXRlZ29yeVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBhdXRvZm9jdXMgI2lucHV0IFsobmdNb2RlbCldPVwic2VhcmNoVGVybVwiIFtkaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJpbnB1dFwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiLz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIiFzZWFyY2hUZXJtXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlYWNoLWljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIiAqbmdJZj1cInNlYXJjaFRlcm1cIiAoY2xpY2spPVwiY2xlYXJTZWFyY2hUZXJtKCRldmVudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicmVtb3ZlLWljb25cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiAjbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaCkgfHwgaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJtYXRjaC5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBtYXRjaC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1uby1yZXN1bHRzXCIgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA9PT0gMCAmJiAhaXNMb2FkaW5nICYmIHNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJlbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5ncm91cGVkTXVsdGlQaWNrZXJFbXB0eSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1uby1jYXRlZ29yeVwiICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiAhc2VsZWN0ZWRDYXRlZ29yeVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1jYXRlZ29yeS1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5ncm91cGVkTXVsdGlQaWNrZXJTZWxlY3RDYXRlZ29yeSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJsb2FkaW5nLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBsaXN0RWxlbWVudDogTm92b0xpc3RFbGVtZW50O1xuXG4gIHB1YmxpYyBzZWxlY3RlZENhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfTtcbiAgcHVibGljIHNlYXJjaFRlcm06IHN0cmluZztcbiAgcHVibGljIGN1c3RvbUZpbHRlckVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGN1c3RvbUZpbHRlckxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBrZXlib2FyZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGludGVybmFsTWFwOiBNYXA8c3RyaW5nLCB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIH0+ID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB9XG4gID4oKTtcbiAgcHVibGljIGN1c3RvbUZpbHRlclZhbHVlOiBhbnk7XG5cbiAgc2V0IHRlcm0odmFsdWUpIHtcbiAgICAvLyBEaXNwbGF5IGFsbCBvbmx5IHdpbGwgd29yayBmb3Igc3RhdGljIGNhdGVnb3JpZXNcbiAgICBpZiAodGhpcy5jb25maWcuZGlzcGxheUFsbCAmJiB0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1tHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzXSAtIHlvdSBjYW4gb25seSBoYXZlIGBkaXNwbGF5QWxsYCB3aXRoIGEgc3RhdGljIGBjYXRlZ29yeU1hcGAuIE5vdCBhdmFpbGFibGUgd2l0aCBgZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jYCcsXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBDdXN0b20gZmlsdGVyXG4gICAgaWYgKHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlcikge1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyTGFiZWwgPSB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubGFiZWw7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlclZhbHVlID0gISF0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIuZGVmYXVsdEZpbHRlclZhbHVlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRmlsdGVyTGFiZWwgfHwgIXRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0dyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHNdIC0gY3VzdG9tIGZpbHRlci9tYXRjaEZ1bmN0aW9uIHNldCBubyBsYWJlbCB3YXMgcHJvdmlkZWQhJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBDb25maWd1cmUgQUxMXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwgJiYgIXRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgdGhpcy5zZXRBbGxDYXRlZ29yeSgpO1xuICAgIH1cbiAgICAvLyBQbGFjZWhvbGRlclxuICAgIGlmICh0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICAvLyBGb2N1c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNhdGVnb3JpZXMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3JpZXMgfHwgdGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuY29uZmlnLmNhdGVnb3JpZXMgfHxcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC52YWx1ZXMoKSkuZmlsdGVyKChjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgIT09ICdhbGwnO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8ga2V5Ym9hcmQgZXZlbnRzIGFuZCBkZWJvdW5jZVxuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzUwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gQ2xlYW51cFxuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxDYXRlZ29yeSgpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGRpc3BsYXkgYWxsLCBzZXQgdGhlIGFsbCBjYXRlZ29yaWVzIHVwXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ2FsbCcgfTtcbiAgICAgIGNvbnN0IGFsbEl0ZW1zID0gW107XG4gICAgICBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLnZhbHVlcygpKVxuICAgICAgICAuZmlsdGVyKChjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgIT09ICdhbGwnO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgodjogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogYW55W10gfSkgPT4gYWxsSXRlbXMucHVzaCguLi52Lml0ZW1zKSk7XG4gICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcihhbGxJdGVtcyk7XG4gICAgICB0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5zZXQoJ2FsbCcsIHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ0FsbCcsIGl0ZW1zOiBhbGxJdGVtcyB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDYXRlZ29yeShjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAvLyBTY3JvbGwgdG8gdG9wXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmxpc3RFbGVtZW50LmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbFRvcCcsIDApO1xuICAgIC8vIFNldCBmb2N1c1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAvLyBGaW5kIG5ldyBpdGVtc1xuICAgIGNvbnN0IGtleTogc3RyaW5nID0gY2F0ZWdvcnkudmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgLy8gQ2xlYXJcbiAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAvLyBOZXcgbWF0Y2hlc1xuICAgIHRoaXMuZ2V0TmV3TWF0Y2hlcyhjYXRlZ29yeSwga2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlYXJjaFRlcm0oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zZWFyY2hUZXJtID0gJyc7XG4gICAgdGhpcy5zZWxlY3RDYXRlZ29yeSh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUsIGxhYmVsOiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubGFiZWwgfSk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWF0Y2goZXZlbnQ/OiBNb3VzZUV2ZW50LCBpdGVtPzogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0pOiBib29sZWFuIHtcbiAgICAvLyBTZXQgZm9jdXNcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBmaXJlQ3VzdG9tRmlsdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSA9IHZhbHVlO1xuICAgIC8vIENsZWFyIGNhY2hlIG1hcFxuICAgIHRoaXMuaW50ZXJuYWxNYXAuY2xlYXIoKTtcbiAgICAvLyBPbmx5IGZpcmUgaWYgd2UgaGF2ZSBhIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaWYgKHRoaXMuc2VsZWN0Q2F0ZWdvcnkpIHtcbiAgICAgIC8vIEZpbmQgbmV3IGl0ZW1zXG4gICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZTtcbiAgICAgIC8vIEdldCBuZXcgbWF0Y2hlc1xuICAgICAgdGhpcy5nZXROZXdNYXRjaGVzKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSwga2V5KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICAvLyBGb2N1c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyRGF0YSgpOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLmdldCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUpLml0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLmludGVybmFsTWFwLmdldCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUpLml0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdNYXRjaGVzKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSwga2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBHZXQgbmV3IG1hdGNoZXNcbiAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLmdldChrZXkpLml0ZW1zKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1RoZSBcImNvbmZpZ1wiIGZvciB0aGUgQ2hpcHMgbXVzdCBpbmNsdWRlIGEgZnVuY3Rpb24gXCJnZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMoY2F0ZWdvcnlLZXk6IHN0cmluZylcIiB0byByZXRyaWV2ZSB0aGUgaXRlbXMgYnkgY2F0ZWdvcnkuIE9yIGlmIHlvdSBoYXZlIHN0YXRpYyBkYXRhIHByb3ZpZGUgYSBcImNhdGVnb3J5TWFwXCInLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmludGVybmFsTWFwLmdldChrZXkpKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKGtleSwgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSkudGhlbigoaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10pID0+IHtcbiAgICAgICAgICB0aGlzLmludGVybmFsTWFwLnNldChrZXksIHsgdmFsdWU6IGNhdGVnb3J5LnZhbHVlLCBsYWJlbDogY2F0ZWdvcnkubGFiZWwsIGl0ZW1zIH0pO1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKGl0ZW1zLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKHRoaXMuaW50ZXJuYWxNYXAuZ2V0KGtleSkuaXRlbXMpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlcihcbiAgICBhcnJheTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBmaWx0ZXJWYWx1ZT86IGFueSB9W10sXG4gICAgaWdub3JlQ3VzdG9tRmlsdGVyOiBib29sZWFuID0gZmFsc2UsXG4gICk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10ge1xuICAgIGxldCBtYXRjaGVzOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGZpbHRlclZhbHVlPzogYW55IH1bXSA9IGFycmF5O1xuICAgIGlmICh0aGlzLnNlYXJjaFRlcm0gJiYgdGhpcy5zZWFyY2hUZXJtLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHRoaXMuc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbWF0Y2gubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0pID4gLTEgfHwgbWF0Y2gudmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0pID4gLTE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCAmJiB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubWF0Y2hGdW5jdGlvbiAmJiAhaWdub3JlQ3VzdG9tRmlsdGVyKSB7XG4gICAgICBtYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubWF0Y2hGdW5jdGlvbihtYXRjaCwgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxufVxuIl19