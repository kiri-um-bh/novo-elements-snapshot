/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/grouped-multi-picker-results/GroupedMultiPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Renderer2, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { Helpers } from '../../../../utils/Helpers';
import { NovoListElement } from '../../../list/List';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class GroupedMultiPickerResults extends BasePickerResults {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} labels
     * @param {?} ref
     */
    constructor(element, renderer, labels, ref) {
        super(element, ref);
        this.renderer = renderer;
        this.labels = labels;
        this.customFilterEnabled = false;
        this.placeholder = '';
        this.internalMap = new Map();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set term(value) {
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
        () => {
            this.inputElement.nativeElement.focus();
        }));
    }
    /**
     * @return {?}
     */
    get categories() {
        if (this.config.categories || this.config.categoryMap) {
            return (this.config.categories ||
                Array.from(this.config.categoryMap.values()).filter((/**
                 * @param {?} category
                 * @return {?}
                 */
                (category) => {
                    return category.value !== 'all';
                })));
        }
        return [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Subscribe to keyboard events and debounce
        this.keyboardSubscription = fromEvent(this.inputElement.nativeElement, 'keyup')
            .pipe(debounceTime(350), distinctUntilChanged())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.searchTerm = event.target['value'];
            this.matches = this.filterData();
            this.ref.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Cleanup
        this.keyboardSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    setAllCategory() {
        // If we have display all, set the all categories up
        if (this.config.displayAll) {
            this.selectedCategory = { value: 'all', label: 'all' };
            /** @type {?} */
            let allItems = [];
            Array.from(this.config.categoryMap.values())
                .filter((/**
             * @param {?} category
             * @return {?}
             */
            (category) => {
                return category.value !== 'all';
            }))
                .forEach((/**
             * @param {?} v
             * @return {?}
             */
            (v) => allItems.push(...v.items)));
            this.matches = this.filter(allItems);
            this.config.categoryMap.set('all', { value: 'all', label: 'All', items: allItems });
            this.ref.markForCheck();
        }
    }
    /**
     * @param {?} category
     * @return {?}
     */
    selectCategory(category) {
        // Scroll to top
        this.renderer.setProperty(this.listElement.element.nativeElement, 'scrollTop', 0);
        // Set focus
        this.inputElement.nativeElement.focus();
        // Find new items
        /** @type {?} */
        let key = category.value;
        this.selectedCategory = category;
        // Clear
        this.matches = [];
        this.ref.markForCheck();
        // New matches
        this.getNewMatches(category, key);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clearSearchTerm(event) {
        Helpers.swallowEvent(event);
        this.searchTerm = '';
        this.selectCategory({ value: this.selectedCategory.value, label: this.selectedCategory.label });
        this.ref.markForCheck();
    }
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    selectMatch(event, item) {
        // Set focus
        this.inputElement.nativeElement.focus();
        return super.selectMatch(event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    fireCustomFilter(value) {
        this.customFilterValue = value;
        // Clear cache map
        this.internalMap.clear();
        // Only fire if we have a selected category
        if (this.selectCategory) {
            // Find new items
            /** @type {?} */
            let key = this.selectedCategory.value;
            // Get new matches
            this.getNewMatches(this.selectedCategory, key);
            this.ref.markForCheck();
        }
        // Focus
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.inputElement.nativeElement.focus();
        }));
    }
    /**
     * @return {?}
     */
    filterData() {
        if (this.selectedCategory) {
            if (this.config.categoryMap) {
                return this.filter(this.config.categoryMap.get(this.selectedCategory.value).items);
            }
            else {
                return this.filter(this.internalMap.get(this.selectedCategory.value).items);
            }
        }
        return [];
    }
    /**
     * @private
     * @param {?} category
     * @param {?} key
     * @return {?}
     */
    getNewMatches(category, key) {
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
                (items) => {
                    this.internalMap.set(key, { value: category.value, label: category.label, items: items });
                    this.matches = this.filter(items, true);
                    this.isLoading = false;
                    this.ref.markForCheck();
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.inputElement.nativeElement.focus();
                    }));
                }));
            }
            else {
                this.matches = this.filter(this.internalMap.get(key).items);
                this.ref.markForCheck();
            }
        }
    }
    /**
     * @private
     * @param {?} array
     * @param {?=} ignoreCustomFilter
     * @return {?}
     */
    filter(array, ignoreCustomFilter = false) {
        /** @type {?} */
        let matches = array;
        if (this.searchTerm && this.searchTerm.length !== 0 && this.selectedCategory) {
            matches = matches.filter((/**
             * @param {?} match
             * @return {?}
             */
            (match) => {
                /** @type {?} */
                const searchTerm = this.searchTerm.toLowerCase();
                return match.label.toLowerCase().indexOf(searchTerm) > -1 || match.value.toLowerCase().indexOf(searchTerm) > -1;
            }));
        }
        if (this.customFilterEnabled && this.config.customFilter.matchFunction && !ignoreCustomFilter) {
            matches = matches.filter((/**
             * @param {?} match
             * @return {?}
             */
            (match) => this.config.customFilter.matchFunction(match, this.customFilterValue)));
        }
        return matches;
    }
}
GroupedMultiPickerResults.decorators = [
    { type: Component, args: [{
                selector: 'grouped-multi-picker-results',
                template: `
        <div class="grouped-multi-picker-groups">
            <novo-list direction="vertical">
                <novo-list-item
                    *ngIf="config.displayAll"
                    (click)="selectCategory({ value: 'all', label: 'all' })"
                    [class.active]="selectedCategory?.value === 'all'"
                    data-automation-id="display-all"
                    [class.disabled]="isLoading">
                    <item-content>
                        <span data-automation-id="label">{{ labels.all }}</span>
                    </item-content>
                    <item-end>
                        <i class="bhi-next"></i>
                    </item-end>
                </novo-list-item>
                <novo-list-item
                    *ngFor="let category of categories"
                    (click)="selectCategory(category)"
                    [class.active]="selectedCategory?.value === category.value"
                    [attr.data-automation-id]="category.label"
                    [class.disabled]="isLoading">
                    <item-content>
                        <i *ngIf="category.iconClass" [class]="category.iconClass"></i>
                        <span data-automation-id="label">{{ category.label }}</span>
                    </item-content>
                    <item-end>
                        <i class="bhi-next"></i>
                    </item-end>
                </novo-list-item>
            </novo-list>
            <footer class="grouped-multi-picker-groups-footer" *ngIf="customFilterEnabled" data-automation-id="footer" [class.disabled]="isLoading">
                <novo-switch [(ngModel)]="customFilterValue" (onChange)="fireCustomFilter($event)" data-automation-id="switch"></novo-switch>
                <label data-automation-id="label">{{ customFilterLabel }}</label>
            </footer>
        </div>
        <div class="grouped-multi-picker-matches">
            <div class="grouped-multi-picker-input-container" [hidden]="!selectedCategory" data-automation-id="input-container">
                <input autofocus #input [(ngModel)]="searchTerm" [disabled]="isLoading" data-automation-id="input" [placeholder]="placeholder"/>
                <i class="bhi-search" *ngIf="!searchTerm" [class.disabled]="isLoading" data-automation-id="seach-icon"></i>
                <i class="bhi-times" *ngIf="searchTerm" (click)="clearSearchTerm($event)" [class.disabled]="isLoading" data-automation-id="remove-icon"></i>
            </div>
            <div class="grouped-multi-picker-list-container">
                <novo-list direction="vertical" #list>
                    <novo-list-item
                        *ngFor="let match of matches"
                        (click)="selectMatch($event)"
                        [class.active]="match === activeMatch"
                        (mouseenter)="selectActive(match)"
                        [class.disabled]="preselected(match) || isLoading"
                        [attr.data-automation-id]="match.label">
                        <item-content>
                            <span>{{ match.label }}</span>
                        </item-content>
                    </novo-list-item>
                </novo-list>
                <div class="grouped-multi-picker-no-results" *ngIf="matches.length === 0 && !isLoading && selectedCategory" data-automation-id="empty-message">
                    {{ labels.groupedMultiPickerEmpty }}
                </div>
                <div class="grouped-multi-picker-no-category" *ngIf="matches.length === 0 && !isLoading && !selectedCategory" data-automation-id="select-category-message">
                    {{ labels.groupedMultiPickerSelectCategory }}
                </div>
                <div class="grouped-multi-picker-loading" *ngIf="isLoading" data-automation-id="loading-message">
                    <novo-loading theme="line"></novo-loading>
                </div>
            </div>
        </div>
    `
            }] }
];
/** @nocollapse */
GroupedMultiPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
GroupedMultiPickerResults.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['input', { static: true },] }],
    listElement: [{ type: ViewChild, args: ['list', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBeUUzRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsaUJBQWlCOzs7Ozs7O0lBZ0U5RCxZQUFZLE9BQW1CLEVBQVUsUUFBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQ25ILEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBeER0Rix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFckMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHeEIsZ0JBQVcsR0FBNkYsSUFBSSxHQUFHLEVBR3BILENBQUM7SUFrREosQ0FBQzs7Ozs7SUEvQ0QsSUFBSSxJQUFJLENBQUMsS0FBSztRQUNaLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUU7WUFDbEUsTUFBTSxJQUFJLEtBQUssQ0FDYix5SUFBeUksQ0FDMUksQ0FBQztTQUNIO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7WUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO2dCQUN0RSxNQUFNLElBQUksS0FBSyxDQUFDLHNGQUFzRixDQUFDLENBQUM7YUFDekc7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3BELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUNELGNBQWM7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDNUM7UUFDRCxRQUFRO1FBQ1IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNyRCxPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO2dCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLFFBQTJCLEVBQUUsRUFBRTtvQkFDbEYsT0FBTyxRQUFRLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7O0lBTU0sUUFBUTtRQUNiLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQzthQUM1RSxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixvQkFBb0IsRUFBRSxDQUN2QjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLFVBQVU7UUFDVixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsb0RBQW9EO1FBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7O2dCQUNuRCxRQUFRLEdBQUcsRUFBRTtZQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUN6QyxNQUFNOzs7O1lBQUMsQ0FBQyxRQUEyQixFQUFFLEVBQUU7Z0JBQ3RDLE9BQU8sUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7WUFDbEMsQ0FBQyxFQUFDO2lCQUNELE9BQU87Ozs7WUFBQyxDQUFDLENBQWlELEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsUUFBMEM7UUFDOUQsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEYsWUFBWTtRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7WUFFcEMsR0FBRyxHQUFXLFFBQVEsQ0FBQyxLQUFLO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDakMsUUFBUTtRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsY0FBYztRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLEtBQWlCO1FBQ3RDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVNLFdBQVcsQ0FBQyxLQUFrQixFQUFFLElBQXVDO1FBQzVFLFlBQVk7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxLQUFjO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0Isa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTs7O2dCQUVuQixHQUFHLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUs7WUFDN0Msa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7UUFDRCxRQUFRO1FBQ1IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0U7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUEwQyxFQUFFLEdBQVc7UUFDM0Usa0JBQWtCO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTtnQkFDekMsTUFBTSxJQUFJLEtBQUssQ0FDYiwwTEFBMEwsQ0FDM0wsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSTs7OztnQkFBQyxDQUFDLEtBQXlDLEVBQUUsRUFBRTtvQkFDbkgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQzFGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixVQUFVOzs7b0JBQUMsR0FBRyxFQUFFO3dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMxQyxDQUFDLEVBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FDWixLQUE0RCxFQUM1RCxxQkFBOEIsS0FBSzs7WUFFL0IsT0FBTyxHQUEwRCxLQUFLO1FBQzFFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzVFLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7O3NCQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEgsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzdGLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLENBQUM7U0FDNUc7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUFuUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1FUDthQUNKOzs7O1lBL0VtQixVQUFVO1lBQWdDLFNBQVM7WUFPOUQsZ0JBQWdCO1lBUGdELGlCQUFpQjs7OzJCQWlGdkYsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBRW5DLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7O0lBRnBDLGlEQUNpQzs7Ozs7SUFDakMsZ0RBQ3FDOztJQUVyQyxxREFBMEQ7O0lBQzFELCtDQUEwQjs7SUFDMUIsd0RBQTRDOztJQUM1QyxzREFBaUM7O0lBQ2pDLGdEQUFnQzs7Ozs7SUFFaEMseURBQTJDOzs7OztJQUMzQyxnREFHSTs7SUFDSixzREFBOEI7Ozs7O0lBK0NHLDZDQUEyQjs7SUFBRSwyQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xpc3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vbGlzdC9MaXN0JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncm91cGVkLW11bHRpLXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWdyb3Vwc1wiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5kaXNwbGF5QWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ2FsbCcgfSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSAnYWxsJ1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImRpc3BsYXktYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBsYWJlbHMuYWxsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktbmV4dFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeShjYXRlZ29yeSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSBjYXRlZ29yeS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXRlZ29yeS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiY2F0ZWdvcnkuaWNvbkNsYXNzXCIgW2NsYXNzXT1cImNhdGVnb3J5Lmljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY2F0ZWdvcnkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1ncm91cHMtZm9vdGVyXCIgKm5nSWY9XCJjdXN0b21GaWx0ZXJFbmFibGVkXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZm9vdGVyXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXN3aXRjaCBbKG5nTW9kZWwpXT1cImN1c3RvbUZpbHRlclZhbHVlXCIgKG9uQ2hhbmdlKT1cImZpcmVDdXN0b21GaWx0ZXIoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInN3aXRjaFwiPjwvbm92by1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY3VzdG9tRmlsdGVyTGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbWF0Y2hlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWlucHV0LWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiIXNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzICNpbnB1dCBbKG5nTW9kZWwpXT1cInNlYXJjaFRlcm1cIiBbZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaW5wdXRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIi8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhc2VhcmNoVGVybVwiIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWFjaC1pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJzZWFyY2hUZXJtXCIgKGNsaWNrKT1cImNsZWFyU2VhcmNoVGVybSgkZXZlbnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInJlbW92ZS1pY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgI2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpIHx8IGlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibWF0Y2gubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbWF0Y2gubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbm8tcmVzdWx0c1wiICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiBzZWxlY3RlZENhdGVnb3J5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuZ3JvdXBlZE11bHRpUGlja2VyRW1wdHkgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbm8tY2F0ZWdvcnlcIiAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgIXNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3QtY2F0ZWdvcnktbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuZ3JvdXBlZE11bHRpUGlja2VyU2VsZWN0Q2F0ZWdvcnkgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibG9hZGluZy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHByaXZhdGUgbGlzdEVsZW1lbnQ6IE5vdm9MaXN0RWxlbWVudDtcblxuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG4gIHB1YmxpYyBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuXG4gIHByaXZhdGUga2V5Ym9hcmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpbnRlcm5hbE1hcDogTWFwPHN0cmluZywgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB9PiA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10gfVxuICA+KCk7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJWYWx1ZTogYW55O1xuXG4gIHNldCB0ZXJtKHZhbHVlKSB7XG4gICAgLy8gRGlzcGxheSBhbGwgb25seSB3aWxsIHdvcmsgZm9yIHN0YXRpYyBjYXRlZ29yaWVzXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwgJiYgdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdbR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0c10gLSB5b3UgY2FuIG9ubHkgaGF2ZSBgZGlzcGxheUFsbGAgd2l0aCBhIHN0YXRpYyBgY2F0ZWdvcnlNYXBgLiBOb3QgYXZhaWxhYmxlIHdpdGggYGdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luY2AnLFxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIGZpbHRlclxuICAgIGlmICh0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIpIHtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckxhYmVsID0gdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLmxhYmVsO1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSA9ICEhdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLmRlZmF1bHRGaWx0ZXJWYWx1ZTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgaWYgKCF0aGlzLmN1c3RvbUZpbHRlckxhYmVsIHx8ICF0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubWF0Y2hGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzXSAtIGN1c3RvbSBmaWx0ZXIvbWF0Y2hGdW5jdGlvbiBzZXQgbm8gbGFiZWwgd2FzIHByb3ZpZGVkIScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gQ29uZmlndXJlIEFMTFxuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsICYmICF0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMuc2V0QWxsQ2F0ZWdvcnkoKTtcbiAgICB9XG4gICAgLy8gUGxhY2Vob2xkZXJcbiAgICBpZiAodGhpcy5jb25maWcucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgLy8gRm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjYXRlZ29yaWVzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jYXRlZ29yaWVzIHx8IHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmNvbmZpZy5jYXRlZ29yaWVzIHx8XG4gICAgICAgIEFycmF5LmZyb20odGhpcy5jb25maWcuY2F0ZWdvcnlNYXAudmFsdWVzKCkpLmZpbHRlcigoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlICE9PSAnYWxsJztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGtleWJvYXJkIGV2ZW50cyBhbmQgZGVib3VuY2VcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDM1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaFRlcm0gPSBldmVudC50YXJnZXRbJ3ZhbHVlJ107XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyRGF0YSgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIC8vIENsZWFudXBcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWxsQ2F0ZWdvcnkoKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBkaXNwbGF5IGFsbCwgc2V0IHRoZSBhbGwgY2F0ZWdvcmllcyB1cFxuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSB7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdhbGwnIH07XG4gICAgICBsZXQgYWxsSXRlbXMgPSBbXTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5jb25maWcuY2F0ZWdvcnlNYXAudmFsdWVzKCkpXG4gICAgICAgIC5maWx0ZXIoKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZSAhPT0gJ2FsbCc7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKCh2OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBhbnlbXSB9KSA9PiBhbGxJdGVtcy5wdXNoKC4uLnYuaXRlbXMpKTtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKGFsbEl0ZW1zKTtcbiAgICAgIHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLnNldCgnYWxsJywgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQWxsJywgaXRlbXM6IGFsbEl0ZW1zIH0pO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdENhdGVnb3J5KGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIC8vIFNjcm9sbCB0byB0b3BcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMubGlzdEVsZW1lbnQuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgMCk7XG4gICAgLy8gU2V0IGZvY3VzXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIC8vIEZpbmQgbmV3IGl0ZW1zXG4gICAgbGV0IGtleTogc3RyaW5nID0gY2F0ZWdvcnkudmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgLy8gQ2xlYXJcbiAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAvLyBOZXcgbWF0Y2hlc1xuICAgIHRoaXMuZ2V0TmV3TWF0Y2hlcyhjYXRlZ29yeSwga2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlYXJjaFRlcm0oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zZWFyY2hUZXJtID0gJyc7XG4gICAgdGhpcy5zZWxlY3RDYXRlZ29yeSh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUsIGxhYmVsOiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubGFiZWwgfSk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWF0Y2goZXZlbnQ/OiBNb3VzZUV2ZW50LCBpdGVtPzogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0pOiBib29sZWFuIHtcbiAgICAvLyBTZXQgZm9jdXNcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBmaXJlQ3VzdG9tRmlsdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSA9IHZhbHVlO1xuICAgIC8vIENsZWFyIGNhY2hlIG1hcFxuICAgIHRoaXMuaW50ZXJuYWxNYXAuY2xlYXIoKTtcbiAgICAvLyBPbmx5IGZpcmUgaWYgd2UgaGF2ZSBhIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaWYgKHRoaXMuc2VsZWN0Q2F0ZWdvcnkpIHtcbiAgICAgIC8vIEZpbmQgbmV3IGl0ZW1zXG4gICAgICBsZXQga2V5OiBzdHJpbmcgPSB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWU7XG4gICAgICAvLyBHZXQgbmV3IG1hdGNoZXNcbiAgICAgIHRoaXMuZ2V0TmV3TWF0Y2hlcyh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnksIGtleSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgLy8gRm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckRhdGEoKTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5nZXQodGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlKS5pdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIodGhpcy5pbnRlcm5hbE1hcC5nZXQodGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlKS5pdGVtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3TWF0Y2hlcyhjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0sIGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gR2V0IG5ldyBtYXRjaGVzXG4gICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcih0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5nZXQoa2V5KS5pdGVtcyk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdUaGUgXCJjb25maWdcIiBmb3IgdGhlIENoaXBzIG11c3QgaW5jbHVkZSBhIGZ1bmN0aW9uIFwiZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKGNhdGVnb3J5S2V5OiBzdHJpbmcpXCIgdG8gcmV0cmlldmUgdGhlIGl0ZW1zIGJ5IGNhdGVnb3J5LiBPciBpZiB5b3UgaGF2ZSBzdGF0aWMgZGF0YSBwcm92aWRlIGEgXCJjYXRlZ29yeU1hcFwiJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pbnRlcm5hbE1hcC5nZXQoa2V5KSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYyhrZXksIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUpLnRoZW4oKGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnRlcm5hbE1hcC5zZXQoa2V5LCB7IHZhbHVlOiBjYXRlZ29yeS52YWx1ZSwgbGFiZWw6IGNhdGVnb3J5LmxhYmVsLCBpdGVtczogaXRlbXMgfSk7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIoaXRlbXMsIHRydWUpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIodGhpcy5pbnRlcm5hbE1hcC5nZXQoa2V5KS5pdGVtcyk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyKFxuICAgIGFycmF5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGZpbHRlclZhbHVlPzogYW55IH1bXSxcbiAgICBpZ25vcmVDdXN0b21GaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB7XG4gICAgbGV0IG1hdGNoZXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZmlsdGVyVmFsdWU/OiBhbnkgfVtdID0gYXJyYXk7XG4gICAgaWYgKHRoaXMuc2VhcmNoVGVybSAmJiB0aGlzLnNlYXJjaFRlcm0ubGVuZ3RoICE9PSAwICYmIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBtYXRjaC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybSkgPiAtMSB8fCBtYXRjaC52YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkICYmIHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uICYmICFpZ25vcmVDdXN0b21GaWx0ZXIpIHtcbiAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uKG1hdGNoLCB0aGlzLmN1c3RvbUZpbHRlclZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG59XG4iXX0=