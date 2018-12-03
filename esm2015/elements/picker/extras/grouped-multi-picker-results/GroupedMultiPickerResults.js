/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        });
    }
    /**
     * @return {?}
     */
    get categories() {
        if (this.config.categories || this.config.categoryMap) {
            return (this.config.categories ||
                Array.from(this.config.categoryMap.values()).filter((category) => {
                    return category.value !== 'all';
                }));
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
            .subscribe((event) => {
            this.searchTerm = event.target['value'];
            this.matches = this.filterData();
            this.ref.markForCheck();
        });
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
                .filter((category) => {
                return category.value !== 'all';
            })
                .forEach((v) => allItems.push(...v.items));
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
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        });
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
                this.config.getItemsForCategoryAsync(key, this.customFilterValue).then((items) => {
                    this.internalMap.set(key, { value: category.value, label: category.label, items: items });
                    this.matches = this.filter(items, true);
                    this.isLoading = false;
                    this.ref.markForCheck();
                    setTimeout(() => {
                        this.inputElement.nativeElement.focus();
                    });
                });
            }
            else {
                this.matches = this.filter(this.internalMap.get(key).items);
                this.ref.markForCheck();
            }
        }
    }
    /**
     * @param {?} array
     * @param {?=} ignoreCustomFilter
     * @return {?}
     */
    filter(array, ignoreCustomFilter = false) {
        /** @type {?} */
        let matches = array;
        if (this.searchTerm && this.searchTerm.length !== 0 && this.selectedCategory) {
            matches = matches.filter((match) => {
                /** @type {?} */
                const searchTerm = this.searchTerm.toLowerCase();
                return match.label.toLowerCase().indexOf(searchTerm) > -1 || match.value.toLowerCase().indexOf(searchTerm) > -1;
            });
        }
        if (this.customFilterEnabled && this.config.customFilter.matchFunction && !ignoreCustomFilter) {
            matches = matches.filter((match) => this.config.customFilter.matchFunction(match, this.customFilterValue));
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
GroupedMultiPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
GroupedMultiPickerResults.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['input',] }],
    listElement: [{ type: ViewChild, args: ['list',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUF5RTNFLE1BQU0sZ0NBQWlDLFNBQVEsaUJBQWlCOzs7Ozs7O0lBZ0U5RCxZQUFZLE9BQW1CLEVBQVUsUUFBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQ25ILEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBeER0Rix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFckMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHeEIsZ0JBQVcsR0FBNkYsSUFBSSxHQUFHLEVBR3BILENBQUM7SUFrREosQ0FBQzs7Ozs7SUEvQ0QsSUFBSSxJQUFJLENBQUMsS0FBSztRQUNaLG1EQUFtRDtRQUNuRCxJ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Qzs7SUFFaEMseURBQTJDOztJQUMzQyxnREFHSTs7SUFDSixzREFBOEI7O0lBK0NHLDZDQUEyQjs7SUFBRSwyQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xpc3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vbGlzdC9MaXN0JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncm91cGVkLW11bHRpLXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWdyb3Vwc1wiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5kaXNwbGF5QWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ2FsbCcgfSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSAnYWxsJ1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImRpc3BsYXktYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBsYWJlbHMuYWxsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktbmV4dFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeShjYXRlZ29yeSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSBjYXRlZ29yeS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXRlZ29yeS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiY2F0ZWdvcnkuaWNvbkNsYXNzXCIgW2NsYXNzXT1cImNhdGVnb3J5Lmljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY2F0ZWdvcnkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1ncm91cHMtZm9vdGVyXCIgKm5nSWY9XCJjdXN0b21GaWx0ZXJFbmFibGVkXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZm9vdGVyXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXN3aXRjaCBbKG5nTW9kZWwpXT1cImN1c3RvbUZpbHRlclZhbHVlXCIgKG9uQ2hhbmdlKT1cImZpcmVDdXN0b21GaWx0ZXIoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInN3aXRjaFwiPjwvbm92by1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY3VzdG9tRmlsdGVyTGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbWF0Y2hlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWlucHV0LWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiIXNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzICNpbnB1dCBbKG5nTW9kZWwpXT1cInNlYXJjaFRlcm1cIiBbZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaW5wdXRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIi8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhc2VhcmNoVGVybVwiIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWFjaC1pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJzZWFyY2hUZXJtXCIgKGNsaWNrKT1cImNsZWFyU2VhcmNoVGVybSgkZXZlbnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInJlbW92ZS1pY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgI2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpIHx8IGlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibWF0Y2gubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbWF0Y2gubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbm8tcmVzdWx0c1wiICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiBzZWxlY3RlZENhdGVnb3J5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuZ3JvdXBlZE11bHRpUGlja2VyRW1wdHkgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbm8tY2F0ZWdvcnlcIiAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgIXNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3QtY2F0ZWdvcnktbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuZ3JvdXBlZE11bHRpUGlja2VyU2VsZWN0Q2F0ZWdvcnkgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibG9hZGluZy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdpbnB1dCcpXG4gIHByaXZhdGUgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsaXN0JylcbiAgcHJpdmF0ZSBsaXN0RWxlbWVudDogTm92b0xpc3RFbGVtZW50O1xuXG4gIHB1YmxpYyBzZWxlY3RlZENhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfTtcbiAgcHVibGljIHNlYXJjaFRlcm06IHN0cmluZztcbiAgcHVibGljIGN1c3RvbUZpbHRlckVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGN1c3RvbUZpbHRlckxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBrZXlib2FyZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGludGVybmFsTWFwOiBNYXA8c3RyaW5nLCB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIH0+ID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB9XG4gID4oKTtcbiAgcHVibGljIGN1c3RvbUZpbHRlclZhbHVlOiBhbnk7XG5cbiAgc2V0IHRlcm0odmFsdWUpIHtcbiAgICAvLyBEaXNwbGF5IGFsbCBvbmx5IHdpbGwgd29yayBmb3Igc3RhdGljIGNhdGVnb3JpZXNcbiAgICBpZiAodGhpcy5jb25maWcuZGlzcGxheUFsbCAmJiB0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1tHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzXSAtIHlvdSBjYW4gb25seSBoYXZlIGBkaXNwbGF5QWxsYCB3aXRoIGEgc3RhdGljIGBjYXRlZ29yeU1hcGAuIE5vdCBhdmFpbGFibGUgd2l0aCBgZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jYCcsXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBDdXN0b20gZmlsdGVyXG4gICAgaWYgKHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlcikge1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyTGFiZWwgPSB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubGFiZWw7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlclZhbHVlID0gISF0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIuZGVmYXVsdEZpbHRlclZhbHVlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRmlsdGVyTGFiZWwgfHwgIXRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0dyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHNdIC0gY3VzdG9tIGZpbHRlci9tYXRjaEZ1bmN0aW9uIHNldCBubyBsYWJlbCB3YXMgcHJvdmlkZWQhJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBDb25maWd1cmUgQUxMXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwgJiYgIXRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgdGhpcy5zZXRBbGxDYXRlZ29yeSgpO1xuICAgIH1cbiAgICAvLyBQbGFjZWhvbGRlclxuICAgIGlmICh0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICAvLyBGb2N1c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNhdGVnb3JpZXMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3JpZXMgfHwgdGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuY29uZmlnLmNhdGVnb3JpZXMgfHxcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC52YWx1ZXMoKSkuZmlsdGVyKChjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgIT09ICdhbGwnO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8ga2V5Ym9hcmQgZXZlbnRzIGFuZCBkZWJvdW5jZVxuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzUwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gQ2xlYW51cFxuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxDYXRlZ29yeSgpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGRpc3BsYXkgYWxsLCBzZXQgdGhlIGFsbCBjYXRlZ29yaWVzIHVwXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ2FsbCcgfTtcbiAgICAgIGxldCBhbGxJdGVtcyA9IFtdO1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC52YWx1ZXMoKSlcbiAgICAgICAgLmZpbHRlcigoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlICE9PSAnYWxsJztcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goKHY6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IGFueVtdIH0pID0+IGFsbEl0ZW1zLnB1c2goLi4udi5pdGVtcykpO1xuICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIoYWxsSXRlbXMpO1xuICAgICAgdGhpcy5jb25maWcuY2F0ZWdvcnlNYXAuc2V0KCdhbGwnLCB7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdBbGwnLCBpdGVtczogYWxsSXRlbXMgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgLy8gU2Nyb2xsIHRvIHRvcFxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5saXN0RWxlbWVudC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGxUb3AnLCAwKTtcbiAgICAvLyBTZXQgZm9jdXNcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgLy8gRmluZCBuZXcgaXRlbXNcbiAgICBsZXQga2V5OiBzdHJpbmcgPSBjYXRlZ29yeS52YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAvLyBDbGVhclxuICAgIHRoaXMubWF0Y2hlcyA9IFtdO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIC8vIE5ldyBtYXRjaGVzXG4gICAgdGhpcy5nZXROZXdNYXRjaGVzKGNhdGVnb3J5LCBrZXkpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VhcmNoVGVybShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSAnJztcbiAgICB0aGlzLnNlbGVjdENhdGVnb3J5KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZSwgbGFiZWw6IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5sYWJlbCB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXRjaChldmVudD86IE1vdXNlRXZlbnQsIGl0ZW0/OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSk6IGJvb2xlYW4ge1xuICAgIC8vIFNldCBmb2N1c1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0TWF0Y2goZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGZpcmVDdXN0b21GaWx0ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmN1c3RvbUZpbHRlclZhbHVlID0gdmFsdWU7XG4gICAgLy8gQ2xlYXIgY2FjaGUgbWFwXG4gICAgdGhpcy5pbnRlcm5hbE1hcC5jbGVhcigpO1xuICAgIC8vIE9ubHkgZmlyZSBpZiB3ZSBoYXZlIGEgc2VsZWN0ZWQgY2F0ZWdvcnlcbiAgICBpZiAodGhpcy5zZWxlY3RDYXRlZ29yeSkge1xuICAgICAgLy8gRmluZCBuZXcgaXRlbXNcbiAgICAgIGxldCBrZXk6IHN0cmluZyA9IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZTtcbiAgICAgIC8vIEdldCBuZXcgbWF0Y2hlc1xuICAgICAgdGhpcy5nZXROZXdNYXRjaGVzKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSwga2V5KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICAvLyBGb2N1c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyRGF0YSgpOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLmdldCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUpLml0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLmludGVybmFsTWFwLmdldCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUpLml0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdNYXRjaGVzKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSwga2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBHZXQgbmV3IG1hdGNoZXNcbiAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcnlNYXApIHtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLmdldChrZXkpLml0ZW1zKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1RoZSBcImNvbmZpZ1wiIGZvciB0aGUgQ2hpcHMgbXVzdCBpbmNsdWRlIGEgZnVuY3Rpb24gXCJnZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMoY2F0ZWdvcnlLZXk6IHN0cmluZylcIiB0byByZXRyaWV2ZSB0aGUgaXRlbXMgYnkgY2F0ZWdvcnkuIE9yIGlmIHlvdSBoYXZlIHN0YXRpYyBkYXRhIHByb3ZpZGUgYSBcImNhdGVnb3J5TWFwXCInLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmludGVybmFsTWFwLmdldChrZXkpKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKGtleSwgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSkudGhlbigoaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10pID0+IHtcbiAgICAgICAgICB0aGlzLmludGVybmFsTWFwLnNldChrZXksIHsgdmFsdWU6IGNhdGVnb3J5LnZhbHVlLCBsYWJlbDogY2F0ZWdvcnkubGFiZWwsIGl0ZW1zOiBpdGVtcyB9KTtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcihpdGVtcywgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcih0aGlzLmludGVybmFsTWFwLmdldChrZXkpLml0ZW1zKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXIoXG4gICAgYXJyYXk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZmlsdGVyVmFsdWU/OiBhbnkgfVtdLFxuICAgIGlnbm9yZUN1c3RvbUZpbHRlcjogYm9vbGVhbiA9IGZhbHNlLFxuICApOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIHtcbiAgICBsZXQgbWF0Y2hlczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBmaWx0ZXJWYWx1ZT86IGFueSB9W10gPSBhcnJheTtcbiAgICBpZiAodGhpcy5zZWFyY2hUZXJtICYmIHRoaXMuc2VhcmNoVGVybS5sZW5ndGggIT09IDAgJiYgdGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBtYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSB0aGlzLnNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtKSA+IC0xIHx8IG1hdGNoLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgJiYgdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24gJiYgIWlnbm9yZUN1c3RvbUZpbHRlcikge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4gdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24obWF0Y2gsIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cbn1cbiJdfQ==