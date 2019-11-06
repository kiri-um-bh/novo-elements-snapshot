/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.getSelectedState = (childArray) => {
            /** @type {?} */
            const numberOfSelectedItems = childArray.filter(({ selected }) => selected).length;
            if (!numberOfSelectedItems) {
                return undefined;
            }
            return numberOfSelectedItems === childArray.length ? 'selected' : 'indeterminate';
        };
        this.filter = (searchTerm) => {
            this.displayTabs.forEach((displayTab, i) => (displayTab.data = this.tabs[i].data.filter((item) => item[displayTab.labelField].toLowerCase().includes(searchTerm.toLowerCase()))));
            this.ref.markForCheck();
        };
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
        this.displayTabIndex = this.tabs.map(({ typeName }) => typeName).indexOf(tab.typeName);
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
        this.displayTabs = this.tabs.map((tab) => (Object.assign({}, tab)));
        this.displayTab = this.tabs[0];
    }
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    /**
     * @return {?}
     */
    createChildrenReferences() {
        this.tabs.forEach((tab) => {
            // would rather filter but TypeScript still wants a type narrowing here
            if ('childTypeName' in tab) {
                /** @type {?} */
                const childTab = this.tabs.find(({ typeName }) => typeName === tab.childTypeName);
                /** @type {?} */
                const compareFunction = this.makeCompareFunction(childTab.valueField);
                /** @type {?} */
                const warnFunction = this.makeWarningFunction(tab.typeName, childTab.typeName, childTab.valueField);
                /** @type {?} */
                const sortedChildren = childTab.data.slice().sort(compareFunction);
                tab.data
                    .filter(({ children }) => children && children.length)
                    .forEach((parent) => this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren, compareFunction, warnFunction));
            }
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items
                .filter((parent) => 'all' in parent)
                .forEach((parent) => {
                parent.children = this.tabs.find(({ typeName }) => parent.childTypeName === typeName).data;
            });
            this.quickSelectConfig.items
                .filter((parent) => !('all' in parent))
                .forEach((parent) => {
                /** @type {?} */
                const childTab = this.tabs.find(({ typeName }) => typeName === parent.childTypeName);
                /** @type {?} */
                const compareFunction = this.makeCompareFunction(childTab.valueField);
                /** @type {?} */
                const warnFunction = this.makeWarningFunction(parent.label, childTab.typeName, childTab.valueField);
                /** @type {?} */
                const sortedChildren = childTab.data.slice().sort(compareFunction);
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
        this.tabs.forEach((tab) => {
            if ('childTypeName' in tab && tab.data && tab.data.length) {
                tab.data.forEach((parent) => {
                    if (parent.selected && parent.children && parent.children.length) {
                        parent.children.forEach((child) => {
                            child.selected = true;
                        });
                    }
                });
            }
        });
    }
    /**
     * @param {?} parentIsSelected
     * @param {?} children
     * @return {?}
     */
    updateDescendants(parentIsSelected, children) {
        children.forEach((item) => {
            parentIsSelected ? (item.selected = true) : delete item.selected;
            if (Array.isArray(item.children)) {
                this.updateDescendants(item.selected, item.children);
            }
        });
    }
    /**
     * @param {?=} itemWasJustSelected
     * @return {?}
     */
    updateClearAll(itemWasJustSelected) {
        this.showClearAll = itemWasJustSelected
            ? true
            : this.tabs.some((tab) => {
                if (((/** @type {?} */ (tab))).childTypeName) {
                    return tab.data.some(({ selected, indeterminate }) => selected || indeterminate);
                }
                else {
                    return tab.data.some(({ selected }) => selected);
                }
            });
    }
    /**
     * @return {?}
     */
    updateParentsAndQuickSelect() {
        // mutate here to avoid dereferencing the objects in displayTabs
        this.tabs
            .filter((tab) => 'childTypeName' in tab && !!tab.childTypeName)
            .forEach((tab) => {
            /** @type {?} */
            const parents = tab.data.filter(({ children }) => children && children.length);
            parents.forEach((parent) => {
                ['indeterminate', 'selected'].forEach((selectedStateOption) => delete parent[selectedStateOption]);
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
        const selectedValues = this.tabs.map((tab) => (Object.assign({}, tab, { data: tab.data.filter(({ selected }) => selected) })));
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
            this.quickSelectConfig.items.forEach((quickSelect) => {
                delete quickSelect.selected;
            });
        }
        this.tabs.forEach((tab) => {
            if (((/** @type {?} */ (tab))).childTypeName) {
                tab.data.forEach((item) => {
                    delete item.selected;
                    delete item.indeterminate;
                    item.children.forEach((child) => delete child.selected);
                });
            }
            else {
                ((/** @type {?} */ (tab))).data.forEach((item) => delete item.selected);
            }
        });
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
    scrollableInstance: [{ type: ViewChild, args: ['tabbedGroupPickerVirtualScrollViewport',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFnRHZELE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBdUJ2QyxZQUFtQixZQUE4QixFQUM3QixHQUFzQjtRQUR2QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQmhDLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHdkUsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsZUFBVSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUc5RCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsaUJBQVksR0FBWSxLQUFLLENBQUM7O1FBRzlCLHlCQUFvQixHQUFXLEdBQUcsQ0FBQztRQUNuQywwQkFBcUIsR0FBVyxFQUFFLENBQUM7UUFtTm5DLHFCQUFnQixHQUFHLENBQUMsVUFBNkQsRUFBNEMsRUFBRTs7a0JBQ3ZILHFCQUFxQixHQUFHLFVB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Q0wsS0FBSztnQ0FDTCxLQUFLOzhCQUVMLE1BQU07Ozs7Ozs7SUFQUCwwREFDMEM7O0lBRTFDLG9EQUFxRDs7SUFDckQsNENBQXNDOztJQUN0Qyx5REFBOEM7O0lBRTlDLHVEQUF1RTs7SUFFdkUsbURBQW9DOztJQUNwQyx1REFBNEI7O0lBRTVCLGtEQUE4RDs7SUFDOUQsOERBQXFDOztJQUVyQywrQ0FBZTs7SUFDZixvREFBOEI7O0lBRzlCLDREQUFtQzs7SUFDbkMsNkRBQW1DOztJQW1ObkMsd0RBTUU7O0lBMENGLDhDQVFFOztJQXpRVSxvREFBcUM7Ozs7O0lBQ3JDLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEhlbHBlcnMsIGJpbmFyeVNlYXJjaCB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDZGtTY3JvbGxhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyVGFiID0ge1xuICB0eXBlTmFtZTogc3RyaW5nO1xuICB0eXBlTGFiZWw6IHN0cmluZztcbiAgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBsYWJlbEZpZWxkOiBzdHJpbmc7XG4gIHNjcm9sbE9mZnNldD86IG51bWJlcjtcbiAgaWNvbj86IHN0cmluZztcbn0gJiAoUGFyZW50VGFiIHwgQ2hpbGRUYWIpO1xuXG5leHBvcnQgdHlwZSBQYXJlbnRUYWIgPSB7XG4gIGNoaWxkVHlwZU5hbWU6IHN0cmluZztcbiAgZGF0YTogQXJyYXk8UGFyZW50T3B0aW9uPjtcbn07XG5cbnR5cGUgUGFyZW50T3B0aW9uID0ge1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xuICBjaGlsZHJlbjogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT47XG59ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuZXhwb3J0IHR5cGUgQ2hpbGRUYWIgPSB7XG4gIGRhdGE6IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyUXVpY2tTZWxlY3QgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgY2hpbGRUeXBlTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiAoKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB8IChudW1iZXIpKVtdO1xuICBhbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUXVpY2tTZWxlY3RDb25maWcgPSB7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0W10gfTtcblxuZXhwb3J0IHR5cGUgVGFiYmVkR3JvdXBQaWNrZXJCdXR0b25Db25maWcgPSB7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIHNpZGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWJiZWQtZ3JvdXAtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL1RhYmJlZEdyb3VwUGlja2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmJlZEdyb3VwUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgndGFiYmVkR3JvdXBQaWNrZXJWaXJ0dWFsU2Nyb2xsVmlld3BvcnQnKVxuICBwcml2YXRlIHNjcm9sbGFibGVJbnN0YW5jZTogQ2RrU2Nyb2xsYWJsZTtcblxuICBASW5wdXQoKSBidXR0b25Db25maWc6IFRhYmJlZEdyb3VwUGlja2VyQnV0dG9uQ29uZmlnO1xuICBASW5wdXQoKSB0YWJzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdO1xuICBASW5wdXQoKSBxdWlja1NlbGVjdENvbmZpZzogUXVpY2tTZWxlY3RDb25maWc7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkaXNwbGF5VGFiczogVGFiYmVkR3JvdXBQaWNrZXJUYWJbXTtcbiAgZGlzcGxheVRhYkluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGZpbHRlclRleHQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIGZpbHRlclRleHRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBsb2FkaW5nID0gdHJ1ZTtcbiAgc2hvd0NsZWFyQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gSW5pdGlhbCBoZWlnaHQgYmFzZWQgb24gMTMgcHggZm9udCByZW5kZXJlZCBpbiBjaHJvbWUuIEFjdHVhbCBoZWlnaHQgcmV0cmlldmVkIG9uRHJvcGRvd25Ub2dnbGVkLlxuICBzY3JvbGxWaWV3cG9ydEhlaWdodDogbnVtYmVyID0gMzUxO1xuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IG51bWJlciA9IDM5O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbFNlcnZpY2U6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBnZXQgZGlzcGxheVRhYigpOiBUYWJiZWRHcm91cFBpY2tlclRhYiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVRhYnNbdGhpcy5kaXNwbGF5VGFiSW5kZXhdO1xuICB9XG4gIHNldCBkaXNwbGF5VGFiKHRhYjogVGFiYmVkR3JvdXBQaWNrZXJUYWIpIHtcbiAgICB0aGlzLmRpc3BsYXlUYWJJbmRleCA9IHRoaXMudGFicy5tYXAoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUpLmluZGV4T2YodGFiLnR5cGVOYW1lKTtcbiAgfVxuXG4gIGdldCBtaW5CdWZmZXJQeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodDsgLy8gcmVuZGVyIGF0IGxlYXN0IDJ4IHRoZSBudW1iZXIgb2YgaXRlbXMgdmlzaWJsZSAodmlld3BvcnQgKyBtaW4gYnVmZmVyKVxuICB9XG5cbiAgZ2V0IG1heEJ1ZmZlclB4KCkge1xuICAgIHJldHVybiAyICogdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodDsgLy8gcmVuZGVyIGF0IG1vc3QgM3ggdGhlIG51bWJlciBvZiBpdGVtcyB2aXNpYmxlICh2aWV3cG9ydCArIG1heCBidWZmZXIpXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldHVwRGlzcGxheURhdGEoKTtcbiAgICB0aGlzLmNyZWF0ZUNoaWxkcmVuUmVmZXJlbmNlcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZURlc2NlbmRhbnRTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnVwZGF0ZVBhcmVudHNBbmRRdWlja1NlbGVjdCgpO1xuICAgIHRoaXMudXBkYXRlQ2xlYXJBbGwoKTtcblxuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyVGV4dFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsdGVyVGV4dC5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdGhpcy5maWx0ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJUZXh0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmZpbHRlclRleHRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUYWIodGFiOiBUYWJiZWRHcm91cFBpY2tlclRhYikge1xuICAgIHRoaXMuZGlzcGxheVRhYiA9IHRhYjtcbiAgICBpZiAodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlLnNjcm9sbFRvKHsgYmVoYXZpb3I6ICdhdXRvJywgdG9wOiAwIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFBpeGVsSGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICcnKS5oZWlnaHQubWF0Y2goLyhcXGQrKFxcLlxcZCspPylweCQvKVsxXSk7XG4gIH1cblxuICBzZXR1cERpc3BsYXlEYXRhKCk6IHZvaWQge1xuICAgIC8vIHNoYWxsb3cgY29weSBoZXJlIHNvIHRoYXQgcmVhc3NpZ25pbmcgZGlzcGxheVRhYnNbaV0uZGF0YSBkb2Vzbid0IG11dGF0ZSB0YWJzW2ldLmRhdGFcbiAgICAvLyBidXQgYm90aCBkYXRhIHZhbHVlcyBwb2ludCB0byB0aGUgc2FtZSBpdGVtc1xuICAgIHRoaXMuZGlzcGxheVRhYnMgPSB0aGlzLnRhYnMubWFwKCh0YWIpID0+ICh7IC4uLnRhYiB9KSk7XG4gICAgdGhpcy5kaXNwbGF5VGFiID0gdGhpcy50YWJzWzBdO1xuICB9XG5cbiAgLy8gUmVwbGFjZSBlYWNoIHBhcmVudCdzIGNoaWxkIG9iamVjdCB3aXRoIGEgcmVmZXJlbmNlIHRvIHRoZSBjaGlsZCB0byBhdm9pZFxuICAvLyBhIGNoaWxkIGxvb2t1cCBmb3Igc2VsZWN0ZWQgc3RhdHVzOyBsaW5raW5nIHJlZmVyZW5jZXMgYWxsb3dzIE0geCBOXG4gIC8vIHRpbWUgY29tcGxleGl0eSBpbnN0ZWFkIG9mIE0geCBOXjJcbiAgY3JlYXRlQ2hpbGRyZW5SZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIC8vIHdvdWxkIHJhdGhlciBmaWx0ZXIgYnV0IFR5cGVTY3JpcHQgc3RpbGwgd2FudHMgYSB0eXBlIG5hcnJvd2luZyBoZXJlXG4gICAgICBpZiAoJ2NoaWxkVHlwZU5hbWUnIGluIHRhYikge1xuICAgICAgICBjb25zdCBjaGlsZFRhYiA9IHRoaXMudGFicy5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lID09PSB0YWIuY2hpbGRUeXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbXBhcmVGdW5jdGlvbiA9IHRoaXMubWFrZUNvbXBhcmVGdW5jdGlvbihjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgY29uc3Qgd2FybkZ1bmN0aW9uID0gdGhpcy5tYWtlV2FybmluZ0Z1bmN0aW9uKHRhYi50eXBlTmFtZSwgY2hpbGRUYWIudHlwZU5hbWUsIGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IGNoaWxkVGFiLmRhdGEuc2xpY2UoKS5zb3J0KGNvbXBhcmVGdW5jdGlvbik7XG5cbiAgICAgICAgdGFiLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKCh7IGNoaWxkcmVuIH0pID0+IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgICAuZm9yRWFjaCgocGFyZW50OiB7IGNoaWxkcmVuPzogYW55W10gfSkgPT5cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMocGFyZW50IGFzIFBhcmVudE9wdGlvbiwgc29ydGVkQ2hpbGRyZW4sIGNvbXBhcmVGdW5jdGlvbiwgd2FybkZ1bmN0aW9uKSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKHBhcmVudCkgPT4gJ2FsbCcgaW4gcGFyZW50KVxuICAgICAgICAuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gcGFyZW50LmNoaWxkVHlwZU5hbWUgPT09IHR5cGVOYW1lKS5kYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtc1xuICAgICAgICAuZmlsdGVyKChwYXJlbnQpID0+ICEoJ2FsbCcgaW4gcGFyZW50KSlcbiAgICAgICAgLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkVGFiID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUgPT09IHBhcmVudC5jaGlsZFR5cGVOYW1lKTtcbiAgICAgICAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSB0aGlzLm1ha2VDb21wYXJlRnVuY3Rpb24oY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgICAgY29uc3Qgd2FybkZ1bmN0aW9uID0gdGhpcy5tYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudC5sYWJlbCwgY2hpbGRUYWIudHlwZU5hbWUsIGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlZENoaWxkcmVuID0gY2hpbGRUYWIuZGF0YS5zbGljZSgpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcblxuICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMocGFyZW50IGFzIFBhcmVudE9wdGlvbiwgc29ydGVkQ2hpbGRyZW4sIGNvbXBhcmVGdW5jdGlvbiwgd2FybkZ1bmN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUNvbXBhcmVGdW5jdGlvbjxUPihrZXk6IHN0cmluZyk6IChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSkgPT4gMSB8IC0xIHwgMCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSkgPT4ge1xuICAgICAgY29uc3QgYVZhbHVlOiBUID0gKGEgJiYgYVtrZXldKSB8fCBhO1xuICAgICAgY29uc3QgYlZhbHVlOiBUID0gKGIgJiYgYltrZXldKSB8fCBiO1xuXG4gICAgICBpZiAoYVZhbHVlIDwgYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYVZhbHVlID4gYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmIChhVmFsdWUgPT09IGJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKFxuICAgIHBhcmVudDogeyBjaGlsZHJlbjogYW55W10gfSxcbiAgICBzb3J0ZWREYXRhOiBDaGlsZFRhYlsnZGF0YSddLFxuICAgIGNvbXBhcmVGdW5jdGlvbjogKGEsIGIpID0+IDEgfCAtMSB8IDAsXG4gICAgd2FybkZ1bmN0aW9uOiAoY2hpbGQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIHBhcmVudC5jaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlblxuICAgICAgLm1hcCgoY2hpbGQpID0+IGJpbmFyeVNlYXJjaChjaGlsZCwgc29ydGVkRGF0YSwgY29tcGFyZUZ1bmN0aW9uKSB8fCB3YXJuRnVuY3Rpb24oY2hpbGQpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTsgLy8gc2luY2UgbWFwIGNhbiByZXR1cm4gdW5kZWZpbmVkLCByZW1vdmUgdW5kZWZpbmVkIGVsZW1lbnRzXG4gIH1cblxuICBtYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudExhYmVsOiBzdHJpbmcsIGNoaWxkTGFiZWw6IHN0cmluZywgY2hpbGRWYWx1ZUZpZWxkKTogKGNoaWxkKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFZhbHVlID0gY2hpbGRbY2hpbGRWYWx1ZUZpZWxkXSB8fCBjaGlsZDtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gJHtjaGlsZExhYmVsfSBmb3VuZCB3aXRoIHZhbHVlICR7Y2hpbGRWYWx1ZX0gZm9yIHBhcmVudCAke3BhcmVudExhYmVsfWApO1xuICAgIH07XG4gIH1cblxuICBvbkRyb3Bkb3duVG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbEhlaWdodCh0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9IHRoaXMuZ2V0UGl4ZWxIZWlnaHQodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0LWl0ZW0nKSk7XG4gICAgfVxuICB9XG5cbiAgb25JdGVtVG9nZ2xlZChpdGVtOiB7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9PiB9PiB9KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgIHRoaXMudXBkYXRlRGVzY2VuZGFudHMoaXRlbS5zZWxlY3RlZCwgaXRlbS5jaGlsZHJlbik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk7XG4gICAgdGhpcy51cGRhdGVDbGVhckFsbChpdGVtLnNlbGVjdGVkKTtcbiAgICB0aGlzLmVtaXRTZWxlY3RlZFZhbHVlcygpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURlc2NlbmRhbnRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKCdjaGlsZFR5cGVOYW1lJyBpbiB0YWIgJiYgdGFiLmRhdGEgJiYgdGFiLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRhYi5kYXRhLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmIChwYXJlbnQuc2VsZWN0ZWQgJiYgcGFyZW50LmNoaWxkcmVuICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGVzY2VuZGFudHMocGFyZW50SXNTZWxlY3RlZDogYm9vbGVhbiwgY2hpbGRyZW46IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+IH0+KTogdm9pZCB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgcGFyZW50SXNTZWxlY3RlZCA/IChpdGVtLnNlbGVjdGVkID0gdHJ1ZSkgOiBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGVzY2VuZGFudHMoaXRlbS5zZWxlY3RlZCwgaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDbGVhckFsbChpdGVtV2FzSnVzdFNlbGVjdGVkPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd0NsZWFyQWxsID0gaXRlbVdhc0p1c3RTZWxlY3RlZFxuICAgICAgPyB0cnVlXG4gICAgICA6IHRoaXMudGFicy5zb21lKCh0YWIpID0+IHtcbiAgICAgICAgICBpZiAoKHRhYiBhcyBQYXJlbnRUYWIpLmNoaWxkVHlwZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWIuZGF0YS5zb21lKCh7IHNlbGVjdGVkLCBpbmRldGVybWluYXRlIH0pID0+IHNlbGVjdGVkIHx8IGluZGV0ZXJtaW5hdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFiLmRhdGEuc29tZSgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudHNBbmRRdWlja1NlbGVjdCgpOiB2b2lkIHtcbiAgICAvLyBtdXRhdGUgaGVyZSB0byBhdm9pZCBkZXJlZmVyZW5jaW5nIHRoZSBvYmplY3RzIGluIGRpc3BsYXlUYWJzXG4gICAgdGhpcy50YWJzXG4gICAgICAuZmlsdGVyKCh0YWIpID0+ICdjaGlsZFR5cGVOYW1lJyBpbiB0YWIgJiYgISF0YWIuY2hpbGRUeXBlTmFtZSlcbiAgICAgIC5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IHRhYi5kYXRhLmZpbHRlcigoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55W10gfSkgPT4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKTtcblxuICAgICAgICBwYXJlbnRzLmZvckVhY2goKHBhcmVudDogeyBjaGlsZHJlbj86IHsgc2VsZWN0ZWQ/OiBib29sZWFuIH1bXSB9KSA9PiB7XG4gICAgICAgICAgWydpbmRldGVybWluYXRlJywgJ3NlbGVjdGVkJ10uZm9yRWFjaCgoc2VsZWN0ZWRTdGF0ZU9wdGlvbikgPT4gZGVsZXRlIHBhcmVudFtzZWxlY3RlZFN0YXRlT3B0aW9uXSk7XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHBhcmVudC5jaGlsZHJlbik7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHBhcmVudFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXMuZm9yRWFjaCgocXVpY2tTZWxlY3QpID0+IHtcbiAgICAgICAgZGVsZXRlIHF1aWNrU2VsZWN0LnNlbGVjdGVkO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHF1aWNrU2VsZWN0LmNoaWxkcmVuIGFzICh7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlbXSk7XG4gICAgICAgIGlmIChzZWxlY3RlZFN0YXRlKSB7XG4gICAgICAgICAgcXVpY2tTZWxlY3Rbc2VsZWN0ZWRTdGF0ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZFN0YXRlID0gKGNoaWxkQXJyYXk6IHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBpbmRldGVybWluYXRlPzogYm9vbGVhbiB9W10pOiAnc2VsZWN0ZWQnIHwgJ2luZGV0ZXJtaW5hdGUnIHwgdW5kZWZpbmVkID0+IHtcbiAgICBjb25zdCBudW1iZXJPZlNlbGVjdGVkSXRlbXMgPSBjaGlsZEFycmF5LmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCkubGVuZ3RoO1xuICAgIGlmICghbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zID09PSBjaGlsZEFycmF5Lmxlbmd0aCA/ICdzZWxlY3RlZCcgOiAnaW5kZXRlcm1pbmF0ZSc7XG4gIH07XG5cbiAgZW1pdFNlbGVjdGVkVmFsdWVzKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdID0gdGhpcy50YWJzLm1hcCgodGFiKSA9PiAoe1xuICAgICAgLi4udGFiLFxuICAgICAgZGF0YTogdGFiLmRhdGEuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSxcbiAgICB9KSk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlcyk7XG4gIH1cblxuICBkZXNlbGVjdEV2ZXJ5dGhpbmcoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zaG93Q2xlYXJBbGwgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgcXVpY2tTZWxlY3Quc2VsZWN0ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKCh0YWIgYXMgUGFyZW50VGFiKS5jaGlsZFR5cGVOYW1lKSB7XG4gICAgICAgIHRhYi5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICBkZWxldGUgaXRlbS5pbmRldGVybWluYXRlO1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGRlbGV0ZSBjaGlsZC5zZWxlY3RlZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRhYiBhcyBDaGlsZFRhYikuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiBkZWxldGUgaXRlbS5zZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0U2VsZWN0ZWRWYWx1ZXMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uQ2xlYXJGaWx0ZXIoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoJycpO1xuICB9XG5cbiAgb25GaWx0ZXIoZXZlbnQ6IHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHJpbmcgfSB9KSB7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlciA9IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLmRpc3BsYXlUYWJzLmZvckVhY2goXG4gICAgICAoZGlzcGxheVRhYiwgaSkgPT5cbiAgICAgICAgKGRpc3BsYXlUYWIuZGF0YSA9IHRoaXMudGFic1tpXS5kYXRhLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgICAgICBpdGVtW2Rpc3BsYXlUYWIubGFiZWxGaWVsZF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICApKSxcbiAgICApO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9O1xufVxuIl19