/**
 * @fileoverview added by tsickle
 * Generated from: elements/tabbed-group-picker/TabbedGroupPicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Helpers, binarySearch } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import { CdkScrollable } from '@angular/cdk/scrolling';
export class NovoTabbedGroupPickerElement {
    /**
     * @param {?} labelService
     * @param {?} ref
     */
    constructor(labelService, ref) {
        this.labelService = labelService;
        this.ref = ref;
        this.selectionChange = new EventEmitter();
        this.displayTabIndex = 0;
        this.filterText = new BehaviorSubject('');
        this.loading = true;
        this.showClearAll = false;
        // Initial height based on 13 px font rendered in chrome. Actual height retrieved onDropdownToggled.
        this.scrollViewportHeight = 351;
        this.virtualScrollItemSize = 39;
        this.getSelectedState = (/**
         * @param {?} childArray
         * @return {?}
         */
        (childArray) => {
            /** @type {?} */
            const numberOfSelectedItems = childArray.filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ selected }) => selected)).length;
            if (!numberOfSelectedItems) {
                return undefined;
            }
            return numberOfSelectedItems === childArray.length ? 'selected' : 'indeterminate';
        });
        this.filter = (/**
         * @param {?} searchTerm
         * @return {?}
         */
        (searchTerm) => {
            this.displayTabs.forEach((/**
             * @param {?} displayTab
             * @param {?} i
             * @return {?}
             */
            (displayTab, i) => (displayTab.data = this.tabs[i].data.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item[displayTab.labelField].toLowerCase().includes(searchTerm.toLowerCase()))))));
            this.ref.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    get displayTab() {
        return this.displayTabs[this.displayTabIndex];
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    set displayTab(tab) {
        this.displayTabIndex = this.tabs.map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ typeName }) => typeName)).indexOf(tab.typeName);
    }
    /**
     * @return {?}
     */
    get minBufferPx() {
        return this.scrollViewportHeight; // render at least 2x the number of items visible (viewport + min buffer)
    }
    /**
     * @return {?}
     */
    get maxBufferPx() {
        return 2 * this.scrollViewportHeight; // render at most 3x the number of items visible (viewport + max buffer)
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setupDisplayData();
        this.createChildrenReferences();
        this.initializeDescendantSelection();
        this.updateParentsAndQuickSelect();
        this.updateClearAll();
        this.loading = false;
        this.filterTextSubscription = this.filterText.pipe(debounceTime(300)).subscribe({
            next: this.filter,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.filterTextSubscription) {
            this.filterTextSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    changeTab(tab) {
        this.displayTab = tab;
        if (this.scrollableInstance) {
            this.scrollableInstance.scrollTo({ behavior: 'auto', top: 0 });
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getPixelHeight(element) {
        return Number(getComputedStyle(element, '').height.match(/(\d+(\.\d+)?)px$/)[1]);
    }
    /**
     * @return {?}
     */
    setupDisplayData() {
        // shallow copy here so that reassigning displayTabs[i].data doesn't mutate tabs[i].data
        // but both data values point to the same items
        this.displayTabs = this.tabs.map((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => (Object.assign({}, tab))));
        this.displayTab = this.tabs[0];
    }
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    /**
     * @return {?}
     */
    createChildrenReferences() {
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            // would rather filter but TypeScript still wants a type narrowing here
            if ('childTypeName' in tab) {
                /** @type {?} */
                const childTab = this.tabs.find((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ typeName }) => typeName === tab.childTypeName));
                /** @type {?} */
                const compareFunction = this.makeCompareFunction(childTab.valueField);
                /** @type {?} */
                const warnFunction = this.makeWarningFunction(tab.typeName, childTab.typeName, childTab.valueField);
                /** @type {?} */
                const sortedChildren = childTab.data.slice().sort(compareFunction);
                tab.data
                    .filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ children }) => children && children.length))
                    .forEach((/**
                 * @param {?} parent
                 * @return {?}
                 */
                (parent) => this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren, compareFunction, warnFunction)));
            }
        }));
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items
                .filter((/**
             * @param {?} parent
             * @return {?}
             */
            (parent) => 'all' in parent))
                .forEach((/**
             * @param {?} parent
             * @return {?}
             */
            (parent) => {
                parent.children = this.tabs.find((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ typeName }) => parent.childTypeName === typeName)).data;
            }));
            this.quickSelectConfig.items
                .filter((/**
             * @param {?} parent
             * @return {?}
             */
            (parent) => !('all' in parent)))
                .forEach((/**
             * @param {?} parent
             * @return {?}
             */
            (parent) => {
                /** @type {?} */
                const childTab = this.tabs.find((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ typeName }) => typeName === parent.childTypeName));
                /** @type {?} */
                const compareFunction = this.makeCompareFunction(childTab.valueField);
                /** @type {?} */
                const warnFunction = this.makeWarningFunction(parent.label, childTab.typeName, childTab.valueField);
                /** @type {?} */
                const sortedChildren = childTab.data.slice().sort(compareFunction);
                this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren, compareFunction, warnFunction);
            }));
        }
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    makeCompareFunction(key) {
        return (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const aValue = (a && a[key]) || a;
            /** @type {?} */
            const bValue = (b && b[key]) || b;
            if (aValue < bValue) {
                return -1;
            }
            else if (aValue > bValue) {
                return 1;
            }
            else if (aValue === bValue) {
                return 0;
            }
            else {
                return undefined;
            }
        });
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
            .map((/**
         * @param {?} child
         * @return {?}
         */
        (child) => binarySearch(child, sortedData, compareFunction) || warnFunction(child)))
            .filter(Boolean); // since map can return undefined, remove undefined elements
    }
    /**
     * @param {?} parentLabel
     * @param {?} childLabel
     * @param {?} childValueField
     * @return {?}
     */
    makeWarningFunction(parentLabel, childLabel, childValueField) {
        return (/**
         * @param {?} child
         * @return {?}
         */
        (child) => {
            /** @type {?} */
            const childValue = child[childValueField] || child;
            console.warn(`No ${childLabel} found with value ${childValue} for parent ${parentLabel}`);
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDropdownToggle(event) {
        if (event) {
            this.scrollViewportHeight = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement);
            this.virtualScrollItemSize = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement.querySelector('novo-list-item'));
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemToggled(item) {
        if (Array.isArray(item.children)) {
            this.updateDescendants(item.selected, item.children);
        }
        this.updateParentsAndQuickSelect();
        this.updateClearAll(item.selected);
        this.emitSelectedValues();
        this.ref.markForCheck();
    }
    /**
     * @return {?}
     */
    initializeDescendantSelection() {
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            if ('childTypeName' in tab && tab.data && tab.data.length) {
                tab.data.forEach((/**
                 * @param {?} parent
                 * @return {?}
                 */
                (parent) => {
                    if (parent.selected && parent.children && parent.children.length) {
                        parent.children.forEach((/**
                         * @param {?} child
                         * @return {?}
                         */
                        (child) => {
                            child.selected = true;
                        }));
                    }
                }));
            }
        }));
    }
    /**
     * @param {?} parentIsSelected
     * @param {?} children
     * @return {?}
     */
    updateDescendants(parentIsSelected, children) {
        children.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            parentIsSelected ? (item.selected = true) : delete item.selected;
            if (Array.isArray(item.children)) {
                this.updateDescendants(item.selected, item.children);
            }
        }));
    }
    /**
     * @param {?=} itemWasJustSelected
     * @return {?}
     */
    updateClearAll(itemWasJustSelected) {
        this.showClearAll = itemWasJustSelected
            ? true
            : this.tabs.some((/**
             * @param {?} tab
             * @return {?}
             */
            (tab) => {
                if (((/** @type {?} */ (tab))).childTypeName) {
                    return tab.data.some((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ selected, indeterminate }) => selected || indeterminate));
                }
                else {
                    return tab.data.some((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ selected }) => selected));
                }
            }));
    }
    /**
     * @return {?}
     */
    updateParentsAndQuickSelect() {
        // mutate here to avoid dereferencing the objects in displayTabs
        this.tabs
            .filter((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => 'childTypeName' in tab && !!tab.childTypeName))
            .forEach((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            /** @type {?} */
            const parents = tab.data.filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ children }) => children && children.length));
            parents.forEach((/**
             * @param {?} parent
             * @return {?}
             */
            (parent) => {
                ['indeterminate', 'selected'].forEach((/**
                 * @param {?} selectedStateOption
                 * @return {?}
                 */
                (selectedStateOption) => delete parent[selectedStateOption]));
                /** @type {?} */
                const selectedState = this.getSelectedState(parent.children);
                if (selectedState) {
                    parent[selectedState] = true;
                }
            }));
        }));
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach((/**
             * @param {?} quickSelect
             * @return {?}
             */
            (quickSelect) => {
                delete quickSelect.selected;
                /** @type {?} */
                const selectedState = this.getSelectedState((/** @type {?} */ (quickSelect.children)));
                if (selectedState) {
                    quickSelect[selectedState] = true;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    emitSelectedValues() {
        /** @type {?} */
        const selectedValues = this.tabs.map((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => (Object.assign({}, tab, { data: tab.data.filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ selected }) => selected)) }))));
        this.selectionChange.emit(selectedValues);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    deselectEverything(event) {
        Helpers.swallowEvent(event);
        this.showClearAll = false;
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach((/**
             * @param {?} quickSelect
             * @return {?}
             */
            (quickSelect) => {
                delete quickSelect.selected;
            }));
        }
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            if (((/** @type {?} */ (tab))).childTypeName) {
                tab.data.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    delete item.selected;
                    delete item.indeterminate;
                    item.children.forEach((/**
                     * @param {?} child
                     * @return {?}
                     */
                    (child) => delete child.selected));
                }));
            }
            else {
                ((/** @type {?} */ (tab))).data.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => delete item.selected));
            }
        }));
        this.emitSelectedValues();
        this.ref.markForCheck();
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
                template: "<novo-dropdown (toggled)=\"onDropdownToggle($event)\">\n  <button\n    class=\"tabbed-group-picker-button\"\n    [theme]=\"buttonConfig.theme\"\n    [side]=\"buttonConfig.side\"\n    [icon]=\"buttonConfig.icon\"\n    [loading]=\"loading\"\n  >\n    <div class=\"tabbed-group-picker-button-label\">{{ buttonConfig.label }}</div>\n  </button>\n  <div class=\"tabbed-group-picker-search\" data-automation-id=\"tabbed-group-picker-search\">\n    <input type=\"text\" [placeholder]=\"labelService.search\" [value]=\"filterText | async\" (input)=\"onFilter($event)\" />\n    <i class=\"bhi-search\" *ngIf=\"!(filterText | async)\"></i>\n    <i class=\"bhi-times\" *ngIf=\"(filterText | async)\" (click)=\"onClearFilter($event)\"></i>\n  </div>\n  <div class=\"tabbed-group-picker-column-container\">\n    <div class=\"tabbed-group-picker-column left\">\n      <novo-nav theme=\"white\" direction=\"vertical\">\n        <novo-tab *ngFor=\"let tab of displayTabs\" [attr.data-automation-id]=\"tab.typeName\" (activeChange)=\"changeTab(tab)\">\n          <span>{{ tab.typeLabel }} ({{ tab.data.length }})</span><i class=\"bhi-next\"></i>\n        </novo-tab>\n      </novo-nav>\n      <button *ngIf=\"showClearAll\" class=\"clear-all-button\" theme=\"dialogue\" icon=\"times\" side=\"right\" color=\"grapefruit\" (click)=\"deselectEverything($event)\">{{ labelService.clear }}</button>\n    </div>\n    <div class=\"tabbed-group-picker-column right\">\n      <div class=\"quick-select\" *ngIf=\"quickSelectConfig && !(filterText | async)\">\n        <div class=\"quick-select-label\">{{ quickSelectConfig.label }}</div>\n        <novo-list class=\"quick-select-list\" direction=\"vertical\">\n          <novo-list-item\n            class=\"quick-select-item\"\n            *ngFor=\"let quickSelect of quickSelectConfig.items\"\n            [attr.data-automation-id]=\"quickSelect.label\"\n            (click)=\"quickSelect.selected = !quickSelect.selected; onItemToggled(quickSelect)\"\n          >\n            <item-content>\n              <novo-checkbox\n                [label]=\"quickSelect.label\"\n                [name]=\"'selected'\"\n                [(ngModel)]=\"quickSelect.selected\"\n                (ngModelChange)=\"onItemToggled(quickSelect)\"\n              ></novo-checkbox>\n            </item-content>\n          </novo-list-item>\n        </novo-list>\n      </div>\n      <novo-list *ngIf=\"displayTab.data.length\" direction=\"vertical\">\n        <cdk-virtual-scroll-viewport\n          [itemSize]=\"virtualScrollItemSize\"\n          [maxBufferPx]=\"maxBufferPx\"\n          [minBufferPx]=\"minBufferPx\"\n          #tabbedGroupPickerVirtualScrollViewport\n        >\n          <novo-list-item\n            *cdkVirtualFor=\"let item of displayTab.data\"\n            [attr.data-automation-id]=\"item[displayTab.labelField]\"\n            (click)=\"item.selected = !item.selected; onItemToggled(item)\"\n          >\n            <item-content>\n              <novo-checkbox\n                [label]=\"item[displayTab.labelField]\"\n                [name]=\"'selected'\"\n                [indeterminate]=\"item.indeterminate\"\n                [(ngModel)]=\"item.selected\"\n                (ngModelChange)=\"onItemToggled(item)\"\n              >\n              </novo-checkbox>\n            </item-content>\n          </novo-list-item>\n        </cdk-virtual-scroll-viewport>\n      </novo-list>\n      <div class=\"tabbed-group-picker-empty-item\" *ngIf=\"!displayTab.data.length && (filterText | async)\">\n        <i class=\"{{ displayTab.icon || 'bhi-search' }}\"></i>\n        <div class=\"empty-item-main-message\">{{ labelService.tabbedGroupPickerEmpty }}</div>\n        <div class=\"empty-item-sub-message\">{{ labelService.tabbedGroupClearSuggestion(displayTab.typeLabel) }}</div>\n      </div>\n    </div>\n  </div>\n</novo-dropdown>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoTabbedGroupPickerElement.ctorParameters = () => [
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
NovoTabbedGroupPickerElement.propDecorators = {
    scrollableInstance: [{ type: ViewChild, args: ['tabbedGroupPickerVirtualScrollViewport', { static: false },] }],
    buttonConfig: [{ type: Input }],
    tabs: [{ type: Input }],
    quickSelectConfig: [{ type: Input }],
    selectionChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoTabbedGroupPickerElement.prototype.scrollableInstance;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.buttonConfig;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.tabs;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.quickSelectConfig;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.selectionChange;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.displayTabs;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.displayTabIndex;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.filterText;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.filterTextSubscription;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.loading;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.showClearAll;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.scrollViewportHeight;
    /** @type {?} */
    NovoTabbedGroupPickerElement.prototype.virtualScrollItemSize;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBZ0R2RCxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQXVCdkMsWUFBbUIsWUFBOEIsRUFDN0IsR0FBc0I7UUFEdkIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEJoQyxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3ZFLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLGVBQVUsR0FBNEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHOUQsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGlCQUFZLEdBQVksS0FBSyxDQUFDOztRQUc5Qix5QkFBb0IsR0FBVyxHQUFHLENBQUM7UUFDbkMsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBbU5uQyxxQkFBZ0I7Ozs7UUFBRyxDQUFDLFVBQTZELEVBQTRDLEVBQUU7O2tCQUN2SCxxQkFBcUIsR0FB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QUUsMEJBQTBCO2dCQUNwQyxreUhBQXVDO2dCQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWhEUSxnQkFBZ0I7WUFQdkIsaUJBQWlCOzs7aUNBeURoQixTQUFTLFNBQUMsd0NBQXdDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUdyRSxLQUFLO21CQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFFTCxNQUFNOzs7Ozs7O0lBUFAsMERBQzBDOztJQUUxQyxvREFBcUQ7O0lBQ3JELDRDQUFzQzs7SUFDdEMseURBQThDOztJQUU5Qyx1REFBdUU7O0lBRXZFLG1EQUFvQzs7SUFDcEMsdURBQTRCOztJQUU1QixrREFBOEQ7O0lBQzlELDhEQUFxQzs7SUFFckMsK0NBQWU7O0lBQ2Ysb0RBQThCOztJQUc5Qiw0REFBbUM7O0lBQ25DLDZEQUFtQzs7SUFtTm5DLHdEQU1FOztJQTBDRiw4Q0FRRTs7SUF6UVUsb0RBQXFDOzs7OztJQUNyQywyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIZWxwZXJzLCBiaW5hcnlTZWFyY2ggfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlclRhYiA9IHtcbiAgdHlwZU5hbWU6IHN0cmluZztcbiAgdHlwZUxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlRmllbGQ6IHN0cmluZztcbiAgbGFiZWxGaWVsZDogc3RyaW5nO1xuICBzY3JvbGxPZmZzZXQ/OiBudW1iZXI7XG4gIGljb24/OiBzdHJpbmc7XG59ICYgKFBhcmVudFRhYiB8IENoaWxkVGFiKTtcblxuZXhwb3J0IHR5cGUgUGFyZW50VGFiID0ge1xuICBjaGlsZFR5cGVOYW1lOiBzdHJpbmc7XG4gIGRhdGE6IEFycmF5PFBhcmVudE9wdGlvbj47XG59O1xuXG50eXBlIFBhcmVudE9wdGlvbiA9IHtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBpbmRldGVybWluYXRlPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+O1xufSAmIHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbmV4cG9ydCB0eXBlIENoaWxkVGFiID0ge1xuICBkYXRhOiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG59O1xuXG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0ID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGNoaWxkVHlwZU5hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogKCh7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgfCAobnVtYmVyKSlbXTtcbiAgYWxsPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1aWNrU2VsZWN0Q29uZmlnID0geyBsYWJlbDogc3RyaW5nOyBpdGVtczogVGFiYmVkR3JvdXBQaWNrZXJRdWlja1NlbGVjdFtdIH07XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyQnV0dG9uQ29uZmlnID0ge1xuICB0aGVtZTogc3RyaW5nO1xuICBzaWRlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiYmVkLWdyb3VwLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9UYWJiZWRHcm91cFBpY2tlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJiZWRHcm91cFBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RhYmJlZEdyb3VwUGlja2VyVmlydHVhbFNjcm9sbFZpZXdwb3J0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHByaXZhdGUgc2Nyb2xsYWJsZUluc3RhbmNlOiBDZGtTY3JvbGxhYmxlO1xuXG4gIEBJbnB1dCgpIGJ1dHRvbkNvbmZpZzogVGFiYmVkR3JvdXBQaWNrZXJCdXR0b25Db25maWc7XG4gIEBJbnB1dCgpIHRhYnM6IFRhYmJlZEdyb3VwUGlja2VyVGFiW107XG4gIEBJbnB1dCgpIHF1aWNrU2VsZWN0Q29uZmlnOiBRdWlja1NlbGVjdENvbmZpZztcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGRpc3BsYXlUYWJzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdO1xuICBkaXNwbGF5VGFiSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgZmlsdGVyVGV4dDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgZmlsdGVyVGV4dFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGxvYWRpbmcgPSB0cnVlO1xuICBzaG93Q2xlYXJBbGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBJbml0aWFsIGhlaWdodCBiYXNlZCBvbiAxMyBweCBmb250IHJlbmRlcmVkIGluIGNocm9tZS4gQWN0dWFsIGhlaWdodCByZXRyaWV2ZWQgb25Ecm9wZG93blRvZ2dsZWQuXG4gIHNjcm9sbFZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAzNTE7XG4gIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZTogbnVtYmVyID0gMzk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsU2VydmljZTogTm92b0xhYmVsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIGdldCBkaXNwbGF5VGFiKCk6IFRhYmJlZEdyb3VwUGlja2VyVGFiIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5VGFic1t0aGlzLmRpc3BsYXlUYWJJbmRleF07XG4gIH1cbiAgc2V0IGRpc3BsYXlUYWIodGFiOiBUYWJiZWRHcm91cFBpY2tlclRhYikge1xuICAgIHRoaXMuZGlzcGxheVRhYkluZGV4ID0gdGhpcy50YWJzLm1hcCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSkuaW5kZXhPZih0YWIudHlwZU5hbWUpO1xuICB9XG5cbiAgZ2V0IG1pbkJ1ZmZlclB4KCkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXdwb3J0SGVpZ2h0OyAvLyByZW5kZXIgYXQgbGVhc3QgMnggdGhlIG51bWJlciBvZiBpdGVtcyB2aXNpYmxlICh2aWV3cG9ydCArIG1pbiBidWZmZXIpXG4gIH1cblxuICBnZXQgbWF4QnVmZmVyUHgoKSB7XG4gICAgcmV0dXJuIDIgKiB0aGlzLnNjcm9sbFZpZXdwb3J0SGVpZ2h0OyAvLyByZW5kZXIgYXQgbW9zdCAzeCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHZpc2libGUgKHZpZXdwb3J0ICsgbWF4IGJ1ZmZlcilcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dXBEaXNwbGF5RGF0YSgpO1xuICAgIHRoaXMuY3JlYXRlQ2hpbGRyZW5SZWZlcmVuY2VzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplRGVzY2VuZGFudFNlbGVjdGlvbigpO1xuICAgIHRoaXMudXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk7XG4gICAgdGhpcy51cGRhdGVDbGVhckFsbCgpO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJUZXh0U3Vic2NyaXB0aW9uID0gdGhpcy5maWx0ZXJUZXh0LnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB0aGlzLmZpbHRlcixcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlclRleHRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZmlsdGVyVGV4dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVRhYih0YWI6IFRhYmJlZEdyb3VwUGlja2VyVGFiKSB7XG4gICAgdGhpcy5kaXNwbGF5VGFiID0gdGFiO1xuICAgIGlmICh0aGlzLnNjcm9sbGFibGVJbnN0YW5jZSkge1xuICAgICAgdGhpcy5zY3JvbGxhYmxlSW5zdGFuY2Uuc2Nyb2xsVG8oeyBiZWhhdmlvcjogJ2F1dG8nLCB0b3A6IDAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGl4ZWxIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpLmhlaWdodC5tYXRjaCgvKFxcZCsoXFwuXFxkKyk/KXB4JC8pWzFdKTtcbiAgfVxuXG4gIHNldHVwRGlzcGxheURhdGEoKTogdm9pZCB7XG4gICAgLy8gc2hhbGxvdyBjb3B5IGhlcmUgc28gdGhhdCByZWFzc2lnbmluZyBkaXNwbGF5VGFic1tpXS5kYXRhIGRvZXNuJ3QgbXV0YXRlIHRhYnNbaV0uZGF0YVxuICAgIC8vIGJ1dCBib3RoIGRhdGEgdmFsdWVzIHBvaW50IHRvIHRoZSBzYW1lIGl0ZW1zXG4gICAgdGhpcy5kaXNwbGF5VGFicyA9IHRoaXMudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiIH0pKTtcbiAgICB0aGlzLmRpc3BsYXlUYWIgPSB0aGlzLnRhYnNbMF07XG4gIH1cblxuICAvLyBSZXBsYWNlIGVhY2ggcGFyZW50J3MgY2hpbGQgb2JqZWN0IHdpdGggYSByZWZlcmVuY2UgdG8gdGhlIGNoaWxkIHRvIGF2b2lkXG4gIC8vIGEgY2hpbGQgbG9va3VwIGZvciBzZWxlY3RlZCBzdGF0dXM7IGxpbmtpbmcgcmVmZXJlbmNlcyBhbGxvd3MgTSB4IE5cbiAgLy8gdGltZSBjb21wbGV4aXR5IGluc3RlYWQgb2YgTSB4IE5eMlxuICBjcmVhdGVDaGlsZHJlblJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgLy8gd291bGQgcmF0aGVyIGZpbHRlciBidXQgVHlwZVNjcmlwdCBzdGlsbCB3YW50cyBhIHR5cGUgbmFycm93aW5nIGhlcmVcbiAgICAgIGlmICgnY2hpbGRUeXBlTmFtZScgaW4gdGFiKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkVGFiID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUgPT09IHRhYi5jaGlsZFR5cGVOYW1lKTtcbiAgICAgICAgY29uc3QgY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5tYWtlQ29tcGFyZUZ1bmN0aW9uKGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICBjb25zdCB3YXJuRnVuY3Rpb24gPSB0aGlzLm1ha2VXYXJuaW5nRnVuY3Rpb24odGFiLnR5cGVOYW1lLCBjaGlsZFRhYi50eXBlTmFtZSwgY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgIGNvbnN0IHNvcnRlZENoaWxkcmVuID0gY2hpbGRUYWIuZGF0YS5zbGljZSgpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcblxuICAgICAgICB0YWIuZGF0YVxuICAgICAgICAgIC5maWx0ZXIoKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICAgIC5mb3JFYWNoKChwYXJlbnQ6IHsgY2hpbGRyZW4/OiBhbnlbXSB9KSA9PlxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhwYXJlbnQgYXMgUGFyZW50T3B0aW9uLCBzb3J0ZWRDaGlsZHJlbiwgY29tcGFyZUZ1bmN0aW9uLCB3YXJuRnVuY3Rpb24pLFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXNcbiAgICAgICAgLmZpbHRlcigocGFyZW50KSA9PiAnYWxsJyBpbiBwYXJlbnQpXG4gICAgICAgIC5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSB0aGlzLnRhYnMuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiBwYXJlbnQuY2hpbGRUeXBlTmFtZSA9PT0gdHlwZU5hbWUpLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKHBhcmVudCkgPT4gISgnYWxsJyBpbiBwYXJlbnQpKVxuICAgICAgICAuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGRUYWIgPSB0aGlzLnRhYnMuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSA9PT0gcGFyZW50LmNoaWxkVHlwZU5hbWUpO1xuICAgICAgICAgIGNvbnN0IGNvbXBhcmVGdW5jdGlvbiA9IHRoaXMubWFrZUNvbXBhcmVGdW5jdGlvbihjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgICBjb25zdCB3YXJuRnVuY3Rpb24gPSB0aGlzLm1ha2VXYXJuaW5nRnVuY3Rpb24ocGFyZW50LmxhYmVsLCBjaGlsZFRhYi50eXBlTmFtZSwgY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgICAgY29uc3Qgc29ydGVkQ2hpbGRyZW4gPSBjaGlsZFRhYi5kYXRhLnNsaWNlKCkuc29ydChjb21wYXJlRnVuY3Rpb24pO1xuXG4gICAgICAgICAgdGhpcy5yZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhwYXJlbnQgYXMgUGFyZW50T3B0aW9uLCBzb3J0ZWRDaGlsZHJlbiwgY29tcGFyZUZ1bmN0aW9uLCB3YXJuRnVuY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtYWtlQ29tcGFyZUZ1bmN0aW9uPFQ+KGtleTogc3RyaW5nKTogKGE6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSwgYjogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9KSA9PiAxIHwgLTEgfCAwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKGE6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSwgYjogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9KSA9PiB7XG4gICAgICBjb25zdCBhVmFsdWU6IFQgPSAoYSAmJiBhW2tleV0pIHx8IGE7XG4gICAgICBjb25zdCBiVmFsdWU6IFQgPSAoYiAmJiBiW2tleV0pIHx8IGI7XG5cbiAgICAgIGlmIChhVmFsdWUgPCBiVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChhVmFsdWUgPiBiVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKGFWYWx1ZSA9PT0gYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMoXG4gICAgcGFyZW50OiB7IGNoaWxkcmVuOiBhbnlbXSB9LFxuICAgIHNvcnRlZERhdGE6IENoaWxkVGFiWydkYXRhJ10sXG4gICAgY29tcGFyZUZ1bmN0aW9uOiAoYSwgYikgPT4gMSB8IC0xIHwgMCxcbiAgICB3YXJuRnVuY3Rpb246IChjaGlsZCkgPT4gdm9pZCxcbiAgKTogdm9pZCB7XG4gICAgcGFyZW50LmNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuXG4gICAgICAubWFwKChjaGlsZCkgPT4gYmluYXJ5U2VhcmNoKGNoaWxkLCBzb3J0ZWREYXRhLCBjb21wYXJlRnVuY3Rpb24pIHx8IHdhcm5GdW5jdGlvbihjaGlsZCkpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pOyAvLyBzaW5jZSBtYXAgY2FuIHJldHVybiB1bmRlZmluZWQsIHJlbW92ZSB1bmRlZmluZWQgZWxlbWVudHNcbiAgfVxuXG4gIG1ha2VXYXJuaW5nRnVuY3Rpb24ocGFyZW50TGFiZWw6IHN0cmluZywgY2hpbGRMYWJlbDogc3RyaW5nLCBjaGlsZFZhbHVlRmllbGQpOiAoY2hpbGQpID0+IHZvaWQge1xuICAgIHJldHVybiAoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkVmFsdWUgPSBjaGlsZFtjaGlsZFZhbHVlRmllbGRdIHx8IGNoaWxkO1xuICAgICAgY29uc29sZS53YXJuKGBObyAke2NoaWxkTGFiZWx9IGZvdW5kIHdpdGggdmFsdWUgJHtjaGlsZFZhbHVlfSBmb3IgcGFyZW50ICR7cGFyZW50TGFiZWx9YCk7XG4gICAgfTtcbiAgfVxuXG4gIG9uRHJvcGRvd25Ub2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVmlld3BvcnRIZWlnaHQgPSB0aGlzLmdldFBpeGVsSGVpZ2h0KHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlLmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMudmlydHVhbFNjcm9sbEl0ZW1TaXplID0gdGhpcy5nZXRQaXhlbEhlaWdodCh0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QtaXRlbScpKTtcbiAgICB9XG4gIH1cblxuICBvbkl0ZW1Ub2dnbGVkKGl0ZW06IHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+IH0+IH0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgdGhpcy51cGRhdGVEZXNjZW5kYW50cyhpdGVtLnNlbGVjdGVkLCBpdGVtLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQYXJlbnRzQW5kUXVpY2tTZWxlY3QoKTtcbiAgICB0aGlzLnVwZGF0ZUNsZWFyQWxsKGl0ZW0uc2VsZWN0ZWQpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGVkVmFsdWVzKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBpbml0aWFsaXplRGVzY2VuZGFudFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAoJ2NoaWxkVHlwZU5hbWUnIGluIHRhYiAmJiB0YWIuZGF0YSAmJiB0YWIuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdGFiLmRhdGEuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHBhcmVudC5zZWxlY3RlZCAmJiBwYXJlbnQuY2hpbGRyZW4gJiYgcGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVEZXNjZW5kYW50cyhwYXJlbnRJc1NlbGVjdGVkOiBib29sZWFuLCBjaGlsZHJlbjogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW47IGNoaWxkcmVuPzogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT4gfT4pOiB2b2lkIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBwYXJlbnRJc1NlbGVjdGVkID8gKGl0ZW0uc2VsZWN0ZWQgPSB0cnVlKSA6IGRlbGV0ZSBpdGVtLnNlbGVjdGVkO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjZW5kYW50cyhpdGVtLnNlbGVjdGVkLCBpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNsZWFyQWxsKGl0ZW1XYXNKdXN0U2VsZWN0ZWQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93Q2xlYXJBbGwgPSBpdGVtV2FzSnVzdFNlbGVjdGVkXG4gICAgICA/IHRydWVcbiAgICAgIDogdGhpcy50YWJzLnNvbWUoKHRhYikgPT4ge1xuICAgICAgICAgIGlmICgodGFiIGFzIFBhcmVudFRhYikuY2hpbGRUeXBlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhYi5kYXRhLnNvbWUoKHsgc2VsZWN0ZWQsIGluZGV0ZXJtaW5hdGUgfSkgPT4gc2VsZWN0ZWQgfHwgaW5kZXRlcm1pbmF0ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YWIuZGF0YS5zb21lKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk6IHZvaWQge1xuICAgIC8vIG11dGF0ZSBoZXJlIHRvIGF2b2lkIGRlcmVmZXJlbmNpbmcgdGhlIG9iamVjdHMgaW4gZGlzcGxheVRhYnNcbiAgICB0aGlzLnRhYnNcbiAgICAgIC5maWx0ZXIoKHRhYikgPT4gJ2NoaWxkVHlwZU5hbWUnIGluIHRhYiAmJiAhIXRhYi5jaGlsZFR5cGVOYW1lKVxuICAgICAgLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRzID0gdGFiLmRhdGEuZmlsdGVyKCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBhbnlbXSB9KSA9PiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpO1xuXG4gICAgICAgIHBhcmVudHMuZm9yRWFjaCgocGFyZW50OiB7IGNoaWxkcmVuPzogeyBzZWxlY3RlZD86IGJvb2xlYW4gfVtdIH0pID0+IHtcbiAgICAgICAgICBbJ2luZGV0ZXJtaW5hdGUnLCAnc2VsZWN0ZWQnXS5mb3JFYWNoKChzZWxlY3RlZFN0YXRlT3B0aW9uKSA9PiBkZWxldGUgcGFyZW50W3NlbGVjdGVkU3RhdGVPcHRpb25dKTtcblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgcGFyZW50W3NlbGVjdGVkU3RhdGVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgcXVpY2tTZWxlY3Quc2VsZWN0ZWQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocXVpY2tTZWxlY3QuY2hpbGRyZW4gYXMgKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtdKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICBxdWlja1NlbGVjdFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkU3RhdGUgPSAoY2hpbGRBcnJheTogeyBzZWxlY3RlZD86IGJvb2xlYW47IGluZGV0ZXJtaW5hdGU/OiBib29sZWFuIH1bXSk6ICdzZWxlY3RlZCcgfCAnaW5kZXRlcm1pbmF0ZScgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IG51bWJlck9mU2VsZWN0ZWRJdGVtcyA9IGNoaWxkQXJyYXkuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKS5sZW5ndGg7XG4gICAgaWYgKCFudW1iZXJPZlNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXJPZlNlbGVjdGVkSXRlbXMgPT09IGNoaWxkQXJyYXkubGVuZ3RoID8gJ3NlbGVjdGVkJyA6ICdpbmRldGVybWluYXRlJztcbiAgfTtcblxuICBlbWl0U2VsZWN0ZWRWYWx1ZXMoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXM6IFRhYmJlZEdyb3VwUGlja2VyVGFiW10gPSB0aGlzLnRhYnMubWFwKCh0YWIpID0+ICh7XG4gICAgICAuLi50YWIsXG4gICAgICBkYXRhOiB0YWIuZGF0YS5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpLFxuICAgIH0pKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkVmFsdWVzKTtcbiAgfVxuXG4gIGRlc2VsZWN0RXZlcnl0aGluZyhldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNob3dDbGVhckFsbCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zLmZvckVhY2goKHF1aWNrU2VsZWN0KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBxdWlja1NlbGVjdC5zZWxlY3RlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAoKHRhYiBhcyBQYXJlbnRUYWIpLmNoaWxkVHlwZU5hbWUpIHtcbiAgICAgICAgdGFiLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgIGRlbGV0ZSBpdGVtLmluZGV0ZXJtaW5hdGU7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZGVsZXRlIGNoaWxkLnNlbGVjdGVkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAodGFiIGFzIENoaWxkVGFiKS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IGRlbGV0ZSBpdGVtLnNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RlZFZhbHVlcygpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25DbGVhckZpbHRlcihldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dCgnJyk7XG4gIH1cblxuICBvbkZpbHRlcihldmVudDogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9IH0pIHtcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyID0gKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xuICAgIHRoaXMuZGlzcGxheVRhYnMuZm9yRWFjaChcbiAgICAgIChkaXNwbGF5VGFiLCBpKSA9PlxuICAgICAgICAoZGlzcGxheVRhYi5kYXRhID0gdGhpcy50YWJzW2ldLmRhdGEuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICAgIGl0ZW1bZGlzcGxheVRhYi5sYWJlbEZpZWxkXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSksXG4gICAgICAgICkpLFxuICAgICk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH07XG59XG4iXX0=