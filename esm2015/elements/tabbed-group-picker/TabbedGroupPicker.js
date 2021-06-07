import { CdkScrollable } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NovoLabelService } from '../../services/novo-label-service';
import { binarySearch, Helpers } from '../../utils/Helpers';
export class NovoTabbedGroupPickerElement {
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
    get displayTab() {
        return this.displayTabs[this.displayTabIndex];
    }
    set displayTab(tab) {
        this.displayTabIndex = this.tabs.map(({ typeName }) => typeName).indexOf(tab.typeName);
    }
    get minBufferPx() {
        return this.scrollViewportHeight; // render at least 2x the number of items visible (viewport + min buffer)
    }
    get maxBufferPx() {
        return 2 * this.scrollViewportHeight; // render at most 3x the number of items visible (viewport + max buffer)
    }
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
    ngOnDestroy() {
        if (this.filterTextSubscription) {
            this.filterTextSubscription.unsubscribe();
        }
    }
    changeTab(tab) {
        this.displayTab = tab;
        if (this.scrollableInstance) {
            this.scrollableInstance.scrollTo({ behavior: 'auto', top: 0 });
        }
    }
    getPixelHeight(element) {
        return Number(getComputedStyle(element, '').height.match(/(\d+(\.\d+)?)px$/)[1]);
    }
    setupDisplayData() {
        // shallow copy here so that reassigning displayTabs[i].data doesn't mutate tabs[i].data
        // but both data values point to the same items
        this.displayTabs = this.tabs.map((tab) => (Object.assign({}, tab)));
        this.displayTab = this.tabs[0];
    }
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    createChildrenReferences() {
        this.tabs.forEach((tab) => {
            // would rather filter but TypeScript still wants a type narrowing here
            if ('childTypeName' in tab) {
                const childTab = this.tabs.find(({ typeName }) => typeName === tab.childTypeName);
                const compareFunction = this.makeCompareFunction(childTab.valueField);
                const warnFunction = this.makeWarningFunction(tab.typeName, childTab.typeName, childTab.valueField);
                const sortedChildren = childTab.data.slice().sort(compareFunction);
                tab.data
                    .filter(({ children }) => children && children.length)
                    .forEach((parent) => this.replaceChildrenWithReferences(parent, sortedChildren, compareFunction, warnFunction));
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
                const childTab = this.tabs.find(({ typeName }) => typeName === parent.childTypeName);
                const compareFunction = this.makeCompareFunction(childTab.valueField);
                const warnFunction = this.makeWarningFunction(parent.label, childTab.typeName, childTab.valueField);
                const sortedChildren = childTab.data.slice().sort(compareFunction);
                this.replaceChildrenWithReferences(parent, sortedChildren, compareFunction, warnFunction);
            });
        }
    }
    makeCompareFunction(key) {
        return (a, b) => {
            const aValue = (a && a[key]) || a;
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
    replaceChildrenWithReferences(parent, sortedData, compareFunction, warnFunction) {
        parent.children = parent.children
            .map((child) => binarySearch(child, sortedData, compareFunction) || warnFunction(child))
            .filter(Boolean); // since map can return undefined, remove undefined elements
    }
    makeWarningFunction(parentLabel, childLabel, childValueField) {
        return (child) => {
            const childValue = child[childValueField] || child;
            console.warn(`No ${childLabel} found with value ${childValue} for parent ${parentLabel}`);
        };
    }
    onDropdownToggle(event) {
        if (event) {
            this.scrollViewportHeight = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement);
            this.virtualScrollItemSize = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement.querySelector('novo-list-item'));
        }
    }
    onItemToggled(item) {
        if (Array.isArray(item.children)) {
            this.updateDescendants(item.selected, item.children);
        }
        this.updateParentsAndQuickSelect();
        this.updateClearAll(item.selected);
        this.emitSelectedValues();
        this.ref.markForCheck();
    }
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
    updateDescendants(parentIsSelected, children) {
        children.forEach((item) => {
            parentIsSelected ? (item.selected = true) : delete item.selected;
            if (Array.isArray(item.children)) {
                this.updateDescendants(item.selected, item.children);
            }
        });
    }
    updateClearAll(itemWasJustSelected) {
        this.showClearAll = itemWasJustSelected
            ? true
            : this.tabs.some((tab) => {
                if (tab.childTypeName) {
                    return tab.data.some(({ selected, indeterminate }) => selected || indeterminate);
                }
                else {
                    return tab.data.some(({ selected }) => selected);
                }
            });
    }
    updateParentsAndQuickSelect() {
        // mutate here to avoid dereferencing the objects in displayTabs
        this.tabs
            .filter((tab) => 'childTypeName' in tab && !!tab.childTypeName)
            .forEach((tab) => {
            const parents = tab.data.filter(({ children }) => children && children.length);
            parents.forEach((parent) => {
                ['indeterminate', 'selected'].forEach((selectedStateOption) => delete parent[selectedStateOption]);
                const selectedState = this.getSelectedState(parent.children);
                if (selectedState) {
                    parent[selectedState] = true;
                }
            });
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach((quickSelect) => {
                delete quickSelect.selected;
                const selectedState = this.getSelectedState(quickSelect.children);
                if (selectedState) {
                    quickSelect[selectedState] = true;
                }
            });
        }
    }
    emitSelectedValues() {
        const selectedValues = this.tabs.map((tab) => (Object.assign(Object.assign({}, tab), { data: tab.data.filter(({ selected }) => selected) })));
        this.selectionChange.emit(selectedValues);
    }
    deselectEverything(event) {
        Helpers.swallowEvent(event);
        this.showClearAll = false;
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach((quickSelect) => {
                delete quickSelect.selected;
            });
        }
        this.tabs.forEach((tab) => {
            if (tab.childTypeName) {
                tab.data.forEach((item) => {
                    delete item.selected;
                    delete item.indeterminate;
                    item.children.forEach((child) => delete child.selected);
                });
            }
            else {
                tab.data.forEach((item) => delete item.selected);
            }
        });
        this.emitSelectedValues();
        this.ref.markForCheck();
    }
    onClearFilter(event) {
        Helpers.swallowEvent(event);
        this.filterText.next('');
    }
    onFilter(event) {
        this.filterText.next(event.target.value);
    }
}
NovoTabbedGroupPickerElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-tabbed-group-picker',
                template: "<novo-dropdown (toggled)=\"onDropdownToggle($event)\">\n  <button\n    class=\"tabbed-group-picker-button\"\n    [theme]=\"buttonConfig.theme\"\n    [side]=\"buttonConfig.side\"\n    [icon]=\"buttonConfig.icon\"\n    [loading]=\"loading\"\n  >\n    <div class=\"tabbed-group-picker-button-label\">{{ buttonConfig.label }}</div>\n  </button>\n  <div class=\"tabbed-group-picker-search\" data-automation-id=\"tabbed-group-picker-search\">\n    <input type=\"text\" [placeholder]=\"labelService.search\" [value]=\"filterText | async\" (input)=\"onFilter($event)\" />\n    <i class=\"bhi-search\" *ngIf=\"!(filterText | async)\"></i>\n    <i class=\"bhi-times\" *ngIf=\"(filterText | async)\" (click)=\"onClearFilter($event)\"></i>\n  </div>\n  <div class=\"tabbed-group-picker-column-container\">\n    <div class=\"tabbed-group-picker-column left\">\n      <novo-nav theme=\"white\" direction=\"vertical\">\n        <novo-tab *ngFor=\"let tab of displayTabs\" [attr.data-automation-id]=\"tab.typeName\" (activeChange)=\"changeTab(tab)\">\n          <span>{{ tab.typeLabel }} ({{ tab.data.length }})</span><i class=\"bhi-next\"></i>\n        </novo-tab>\n      </novo-nav>\n      <button *ngIf=\"showClearAll\" class=\"clear-all-button\" theme=\"dialogue\" icon=\"times\" side=\"right\" color=\"grapefruit\" (click)=\"deselectEverything($event)\">{{ labelService.clear }}</button>\n    </div>\n    <div class=\"tabbed-group-picker-column right\">\n      <div class=\"quick-select\" *ngIf=\"quickSelectConfig && !(filterText | async)\">\n        <div class=\"quick-select-label\">{{ quickSelectConfig.label }}</div>\n        <novo-list class=\"quick-select-list\" direction=\"vertical\">\n          <novo-list-item\n            class=\"quick-select-item\"\n            *ngFor=\"let quickSelect of quickSelectConfig.items\"\n            [attr.data-automation-id]=\"quickSelect.label\"\n            (click)=\"quickSelect.selected = !quickSelect.selected; onItemToggled(quickSelect)\"\n          >\n            <item-content>\n              <novo-checkbox\n                [label]=\"quickSelect.label\"\n                [name]=\"'selected'\"\n                [(ngModel)]=\"quickSelect.selected\"\n                (ngModelChange)=\"onItemToggled(quickSelect)\"\n              ></novo-checkbox>\n            </item-content>\n          </novo-list-item>\n        </novo-list>\n      </div>\n      <novo-list *ngIf=\"displayTab.data.length\" direction=\"vertical\">\n        <cdk-virtual-scroll-viewport\n          [itemSize]=\"virtualScrollItemSize\"\n          [maxBufferPx]=\"maxBufferPx\"\n          [minBufferPx]=\"minBufferPx\"\n          #tabbedGroupPickerVirtualScrollViewport\n        >\n          <novo-list-item\n            *cdkVirtualFor=\"let item of displayTab.data\"\n            [attr.data-automation-id]=\"item[displayTab.labelField]\"\n            (click)=\"item.selected = !item.selected; onItemToggled(item)\"\n          >\n            <item-content>\n              <novo-checkbox\n                [label]=\"item[displayTab.labelField]\"\n                [name]=\"'selected'\"\n                [indeterminate]=\"item.indeterminate\"\n                [(ngModel)]=\"item.selected\"\n                (ngModelChange)=\"onItemToggled(item)\"\n              >\n              </novo-checkbox>\n            </item-content>\n          </novo-list-item>\n        </cdk-virtual-scroll-viewport>\n      </novo-list>\n      <div class=\"tabbed-group-picker-empty-item\" *ngIf=\"!displayTab.data.length && (filterText | async)\">\n        <i class=\"{{ displayTab.icon || 'bhi-search' }}\"></i>\n        <div class=\"empty-item-main-message\">{{ labelService.tabbedGroupPickerEmpty }}</div>\n        <div class=\"empty-item-sub-message\">{{ labelService.tabbedGroupClearSuggestion(displayTab.typeLabel) }}</div>\n      </div>\n    </div>\n  </div>\n</novo-dropdown>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pKLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0Q1RCxNQUFNLE9BQU8sNEJBQTRCO0lBdUJ2QyxZQUFtQixZQUE4QixFQUN2QyxHQUFzQjtRQURiLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUN2QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCdEIsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd2RSxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUU1QixlQUFVLEdBQTRCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRzlELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixvR0FBb0c7UUFDcEcseUJBQW9CLEdBQVcsR0FBRyxDQUFDO1FBQ25DLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztRQW1ObkMs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aUJBQWlCOzs7aUNBcURoRCxTQUFTLFNBQUMsd0NBQXdDOzJCQUdsRCxLQUFLO21CQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgYmluYXJ5U2VhcmNoLCBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyVGFiID0ge1xuICB0eXBlTmFtZTogc3RyaW5nO1xuICB0eXBlTGFiZWw6IHN0cmluZztcbiAgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBsYWJlbEZpZWxkOiBzdHJpbmc7XG4gIHNjcm9sbE9mZnNldD86IG51bWJlcjtcbiAgaWNvbj86IHN0cmluZztcbn0gJiAoUGFyZW50VGFiIHwgQ2hpbGRUYWIpO1xuXG5leHBvcnQgdHlwZSBQYXJlbnRUYWIgPSB7XG4gIGNoaWxkVHlwZU5hbWU6IHN0cmluZztcbiAgZGF0YTogQXJyYXk8UGFyZW50T3B0aW9uPjtcbn07XG5cbnR5cGUgUGFyZW50T3B0aW9uID0ge1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xuICBjaGlsZHJlbjogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT47XG59ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuZXhwb3J0IHR5cGUgQ2hpbGRUYWIgPSB7XG4gIGRhdGE6IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyUXVpY2tTZWxlY3QgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgY2hpbGRUeXBlTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiAoKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB8IChudW1iZXIpKVtdO1xuICBhbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUXVpY2tTZWxlY3RDb25maWcgPSB7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0W10gfTtcblxuZXhwb3J0IHR5cGUgVGFiYmVkR3JvdXBQaWNrZXJCdXR0b25Db25maWcgPSB7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIHNpZGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWJiZWQtZ3JvdXAtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL1RhYmJlZEdyb3VwUGlja2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmJlZEdyb3VwUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgndGFiYmVkR3JvdXBQaWNrZXJWaXJ0dWFsU2Nyb2xsVmlld3BvcnQnKVxuICBwcml2YXRlIHNjcm9sbGFibGVJbnN0YW5jZTogQ2RrU2Nyb2xsYWJsZTtcblxuICBASW5wdXQoKSBidXR0b25Db25maWc6IFRhYmJlZEdyb3VwUGlja2VyQnV0dG9uQ29uZmlnO1xuICBASW5wdXQoKSB0YWJzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdO1xuICBASW5wdXQoKSBxdWlja1NlbGVjdENvbmZpZzogUXVpY2tTZWxlY3RDb25maWc7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkaXNwbGF5VGFiczogVGFiYmVkR3JvdXBQaWNrZXJUYWJbXTtcbiAgZGlzcGxheVRhYkluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGZpbHRlclRleHQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIGZpbHRlclRleHRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBsb2FkaW5nID0gdHJ1ZTtcbiAgc2hvd0NsZWFyQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gSW5pdGlhbCBoZWlnaHQgYmFzZWQgb24gMTMgcHggZm9udCByZW5kZXJlZCBpbiBjaHJvbWUuIEFjdHVhbCBoZWlnaHQgcmV0cmlldmVkIG9uRHJvcGRvd25Ub2dnbGVkLlxuICBzY3JvbGxWaWV3cG9ydEhlaWdodDogbnVtYmVyID0gMzUxO1xuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IG51bWJlciA9IDM5O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbFNlcnZpY2U6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBnZXQgZGlzcGxheVRhYigpOiBUYWJiZWRHcm91cFBpY2tlclRhYiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVRhYnNbdGhpcy5kaXNwbGF5VGFiSW5kZXhdO1xuICB9XG4gIHNldCBkaXNwbGF5VGFiKHRhYjogVGFiYmVkR3JvdXBQaWNrZXJUYWIpIHtcbiAgICB0aGlzLmRpc3BsYXlUYWJJbmRleCA9IHRoaXMudGFicy5tYXAoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUpLmluZGV4T2YodGFiLnR5cGVOYW1lKTtcbiAgfVxuXG4gIGdldCBtaW5CdWZmZXJQeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodDsgLy8gcmVuZGVyIGF0IGxlYXN0IDJ4IHRoZSBudW1iZXIgb2YgaXRlbXMgdmlzaWJsZSAodmlld3BvcnQgKyBtaW4gYnVmZmVyKVxuICB9XG5cbiAgZ2V0IG1heEJ1ZmZlclB4KCkge1xuICAgIHJldHVybiAyICogdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodDsgLy8gcmVuZGVyIGF0IG1vc3QgM3ggdGhlIG51bWJlciBvZiBpdGVtcyB2aXNpYmxlICh2aWV3cG9ydCArIG1heCBidWZmZXIpXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldHVwRGlzcGxheURhdGEoKTtcbiAgICB0aGlzLmNyZWF0ZUNoaWxkcmVuUmVmZXJlbmNlcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZURlc2NlbmRhbnRTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnVwZGF0ZVBhcmVudHNBbmRRdWlja1NlbGVjdCgpO1xuICAgIHRoaXMudXBkYXRlQ2xlYXJBbGwoKTtcblxuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyVGV4dFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsdGVyVGV4dC5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdGhpcy5maWx0ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJUZXh0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmZpbHRlclRleHRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUYWIodGFiOiBUYWJiZWRHcm91cFBpY2tlclRhYikge1xuICAgIHRoaXMuZGlzcGxheVRhYiA9IHRhYjtcbiAgICBpZiAodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlLnNjcm9sbFRvKHsgYmVoYXZpb3I6ICdhdXRvJywgdG9wOiAwIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFBpeGVsSGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICcnKS5oZWlnaHQubWF0Y2goLyhcXGQrKFxcLlxcZCspPylweCQvKVsxXSk7XG4gIH1cblxuICBzZXR1cERpc3BsYXlEYXRhKCk6IHZvaWQge1xuICAgIC8vIHNoYWxsb3cgY29weSBoZXJlIHNvIHRoYXQgcmVhc3NpZ25pbmcgZGlzcGxheVRhYnNbaV0uZGF0YSBkb2Vzbid0IG11dGF0ZSB0YWJzW2ldLmRhdGFcbiAgICAvLyBidXQgYm90aCBkYXRhIHZhbHVlcyBwb2ludCB0byB0aGUgc2FtZSBpdGVtc1xuICAgIHRoaXMuZGlzcGxheVRhYnMgPSB0aGlzLnRhYnMubWFwKCh0YWIpID0+ICh7IC4uLnRhYiB9KSk7XG4gICAgdGhpcy5kaXNwbGF5VGFiID0gdGhpcy50YWJzWzBdO1xuICB9XG5cbiAgLy8gUmVwbGFjZSBlYWNoIHBhcmVudCdzIGNoaWxkIG9iamVjdCB3aXRoIGEgcmVmZXJlbmNlIHRvIHRoZSBjaGlsZCB0byBhdm9pZFxuICAvLyBhIGNoaWxkIGxvb2t1cCBmb3Igc2VsZWN0ZWQgc3RhdHVzOyBsaW5raW5nIHJlZmVyZW5jZXMgYWxsb3dzIE0geCBOXG4gIC8vIHRpbWUgY29tcGxleGl0eSBpbnN0ZWFkIG9mIE0geCBOXjJcbiAgY3JlYXRlQ2hpbGRyZW5SZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIC8vIHdvdWxkIHJhdGhlciBmaWx0ZXIgYnV0IFR5cGVTY3JpcHQgc3RpbGwgd2FudHMgYSB0eXBlIG5hcnJvd2luZyBoZXJlXG4gICAgICBpZiAoJ2NoaWxkVHlwZU5hbWUnIGluIHRhYikge1xuICAgICAgICBjb25zdCBjaGlsZFRhYiA9IHRoaXMudGFicy5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lID09PSB0YWIuY2hpbGRUeXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbXBhcmVGdW5jdGlvbiA9IHRoaXMubWFrZUNvbXBhcmVGdW5jdGlvbihjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgY29uc3Qgd2FybkZ1bmN0aW9uID0gdGhpcy5tYWtlV2FybmluZ0Z1bmN0aW9uKHRhYi50eXBlTmFtZSwgY2hpbGRUYWIudHlwZU5hbWUsIGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IGNoaWxkVGFiLmRhdGEuc2xpY2UoKS5zb3J0KGNvbXBhcmVGdW5jdGlvbik7XG5cbiAgICAgICAgdGFiLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKCh7IGNoaWxkcmVuIH0pID0+IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgICAuZm9yRWFjaCgocGFyZW50OiB7IGNoaWxkcmVuPzogYW55W10gfSkgPT5cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMocGFyZW50IGFzIFBhcmVudE9wdGlvbiwgc29ydGVkQ2hpbGRyZW4sIGNvbXBhcmVGdW5jdGlvbiwgd2FybkZ1bmN0aW9uKSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKHBhcmVudCkgPT4gJ2FsbCcgaW4gcGFyZW50KVxuICAgICAgICAuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gcGFyZW50LmNoaWxkVHlwZU5hbWUgPT09IHR5cGVOYW1lKS5kYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtc1xuICAgICAgICAuZmlsdGVyKChwYXJlbnQpID0+ICEoJ2FsbCcgaW4gcGFyZW50KSlcbiAgICAgICAgLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkVGFiID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUgPT09IHBhcmVudC5jaGlsZFR5cGVOYW1lKTtcbiAgICAgICAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSB0aGlzLm1ha2VDb21wYXJlRnVuY3Rpb24oY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgICAgY29uc3Qgd2FybkZ1bmN0aW9uID0gdGhpcy5tYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudC5sYWJlbCwgY2hpbGRUYWIudHlwZU5hbWUsIGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlZENoaWxkcmVuID0gY2hpbGRUYWIuZGF0YS5zbGljZSgpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcblxuICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMocGFyZW50IGFzIFBhcmVudE9wdGlvbiwgc29ydGVkQ2hpbGRyZW4sIGNvbXBhcmVGdW5jdGlvbiwgd2FybkZ1bmN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUNvbXBhcmVGdW5jdGlvbjxUPihrZXk6IHN0cmluZyk6IChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSkgPT4gMSB8IC0xIHwgMCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSkgPT4ge1xuICAgICAgY29uc3QgYVZhbHVlOiBUID0gKGEgJiYgYVtrZXldKSB8fCBhO1xuICAgICAgY29uc3QgYlZhbHVlOiBUID0gKGIgJiYgYltrZXldKSB8fCBiO1xuXG4gICAgICBpZiAoYVZhbHVlIDwgYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYVZhbHVlID4gYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmIChhVmFsdWUgPT09IGJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKFxuICAgIHBhcmVudDogeyBjaGlsZHJlbjogYW55W10gfSxcbiAgICBzb3J0ZWREYXRhOiBDaGlsZFRhYlsnZGF0YSddLFxuICAgIGNvbXBhcmVGdW5jdGlvbjogKGEsIGIpID0+IDEgfCAtMSB8IDAsXG4gICAgd2FybkZ1bmN0aW9uOiAoY2hpbGQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIHBhcmVudC5jaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlblxuICAgICAgLm1hcCgoY2hpbGQpID0+IGJpbmFyeVNlYXJjaChjaGlsZCwgc29ydGVkRGF0YSwgY29tcGFyZUZ1bmN0aW9uKSB8fCB3YXJuRnVuY3Rpb24oY2hpbGQpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTsgLy8gc2luY2UgbWFwIGNhbiByZXR1cm4gdW5kZWZpbmVkLCByZW1vdmUgdW5kZWZpbmVkIGVsZW1lbnRzXG4gIH1cblxuICBtYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudExhYmVsOiBzdHJpbmcsIGNoaWxkTGFiZWw6IHN0cmluZywgY2hpbGRWYWx1ZUZpZWxkKTogKGNoaWxkKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFZhbHVlID0gY2hpbGRbY2hpbGRWYWx1ZUZpZWxkXSB8fCBjaGlsZDtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gJHtjaGlsZExhYmVsfSBmb3VuZCB3aXRoIHZhbHVlICR7Y2hpbGRWYWx1ZX0gZm9yIHBhcmVudCAke3BhcmVudExhYmVsfWApO1xuICAgIH07XG4gIH1cblxuICBvbkRyb3Bkb3duVG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbEhlaWdodCh0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9IHRoaXMuZ2V0UGl4ZWxIZWlnaHQodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0LWl0ZW0nKSk7XG4gICAgfVxuICB9XG5cbiAgb25JdGVtVG9nZ2xlZChpdGVtOiB7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9PiB9PiB9KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgIHRoaXMudXBkYXRlRGVzY2VuZGFudHMoaXRlbS5zZWxlY3RlZCwgaXRlbS5jaGlsZHJlbik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk7XG4gICAgdGhpcy51cGRhdGVDbGVhckFsbChpdGVtLnNlbGVjdGVkKTtcbiAgICB0aGlzLmVtaXRTZWxlY3RlZFZhbHVlcygpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURlc2NlbmRhbnRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKCdjaGlsZFR5cGVOYW1lJyBpbiB0YWIgJiYgdGFiLmRhdGEgJiYgdGFiLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRhYi5kYXRhLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmIChwYXJlbnQuc2VsZWN0ZWQgJiYgcGFyZW50LmNoaWxkcmVuICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGVzY2VuZGFudHMocGFyZW50SXNTZWxlY3RlZDogYm9vbGVhbiwgY2hpbGRyZW46IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+IH0+KTogdm9pZCB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgcGFyZW50SXNTZWxlY3RlZCA/IChpdGVtLnNlbGVjdGVkID0gdHJ1ZSkgOiBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGVzY2VuZGFudHMoaXRlbS5zZWxlY3RlZCwgaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDbGVhckFsbChpdGVtV2FzSnVzdFNlbGVjdGVkPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd0NsZWFyQWxsID0gaXRlbVdhc0p1c3RTZWxlY3RlZFxuICAgICAgPyB0cnVlXG4gICAgICA6IHRoaXMudGFicy5zb21lKCh0YWIpID0+IHtcbiAgICAgICAgaWYgKCh0YWIgYXMgUGFyZW50VGFiKS5jaGlsZFR5cGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRhYi5kYXRhLnNvbWUoKHsgc2VsZWN0ZWQsIGluZGV0ZXJtaW5hdGUgfSkgPT4gc2VsZWN0ZWQgfHwgaW5kZXRlcm1pbmF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRhYi5kYXRhLnNvbWUoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudHNBbmRRdWlja1NlbGVjdCgpOiB2b2lkIHtcbiAgICAvLyBtdXRhdGUgaGVyZSB0byBhdm9pZCBkZXJlZmVyZW5jaW5nIHRoZSBvYmplY3RzIGluIGRpc3BsYXlUYWJzXG4gICAgdGhpcy50YWJzXG4gICAgICAuZmlsdGVyKCh0YWIpID0+ICdjaGlsZFR5cGVOYW1lJyBpbiB0YWIgJiYgISF0YWIuY2hpbGRUeXBlTmFtZSlcbiAgICAgIC5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IHRhYi5kYXRhLmZpbHRlcigoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55W10gfSkgPT4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKTtcblxuICAgICAgICBwYXJlbnRzLmZvckVhY2goKHBhcmVudDogeyBjaGlsZHJlbj86IHsgc2VsZWN0ZWQ/OiBib29sZWFuIH1bXSB9KSA9PiB7XG4gICAgICAgICAgWydpbmRldGVybWluYXRlJywgJ3NlbGVjdGVkJ10uZm9yRWFjaCgoc2VsZWN0ZWRTdGF0ZU9wdGlvbikgPT4gZGVsZXRlIHBhcmVudFtzZWxlY3RlZFN0YXRlT3B0aW9uXSk7XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHBhcmVudC5jaGlsZHJlbik7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHBhcmVudFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXMuZm9yRWFjaCgocXVpY2tTZWxlY3QpID0+IHtcbiAgICAgICAgZGVsZXRlIHF1aWNrU2VsZWN0LnNlbGVjdGVkO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHF1aWNrU2VsZWN0LmNoaWxkcmVuIGFzICh7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlbXSk7XG4gICAgICAgIGlmIChzZWxlY3RlZFN0YXRlKSB7XG4gICAgICAgICAgcXVpY2tTZWxlY3Rbc2VsZWN0ZWRTdGF0ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZFN0YXRlID0gKGNoaWxkQXJyYXk6IHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBpbmRldGVybWluYXRlPzogYm9vbGVhbiB9W10pOiAnc2VsZWN0ZWQnIHwgJ2luZGV0ZXJtaW5hdGUnIHwgdW5kZWZpbmVkID0+IHtcbiAgICBjb25zdCBudW1iZXJPZlNlbGVjdGVkSXRlbXMgPSBjaGlsZEFycmF5LmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCkubGVuZ3RoO1xuICAgIGlmICghbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zID09PSBjaGlsZEFycmF5Lmxlbmd0aCA/ICdzZWxlY3RlZCcgOiAnaW5kZXRlcm1pbmF0ZSc7XG4gIH07XG5cbiAgZW1pdFNlbGVjdGVkVmFsdWVzKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdID0gdGhpcy50YWJzLm1hcCgodGFiKSA9PiAoe1xuICAgICAgLi4udGFiLFxuICAgICAgZGF0YTogdGFiLmRhdGEuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSxcbiAgICB9KSk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlcyk7XG4gIH1cblxuICBkZXNlbGVjdEV2ZXJ5dGhpbmcoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zaG93Q2xlYXJBbGwgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgcXVpY2tTZWxlY3Quc2VsZWN0ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKCh0YWIgYXMgUGFyZW50VGFiKS5jaGlsZFR5cGVOYW1lKSB7XG4gICAgICAgIHRhYi5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICBkZWxldGUgaXRlbS5pbmRldGVybWluYXRlO1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGRlbGV0ZSBjaGlsZC5zZWxlY3RlZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRhYiBhcyBDaGlsZFRhYikuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiBkZWxldGUgaXRlbS5zZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0U2VsZWN0ZWRWYWx1ZXMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uQ2xlYXJGaWx0ZXIoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoJycpO1xuICB9XG5cbiAgb25GaWx0ZXIoZXZlbnQ6IHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHJpbmcgfSB9KSB7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlciA9IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLmRpc3BsYXlUYWJzLmZvckVhY2goXG4gICAgICAoZGlzcGxheVRhYiwgaSkgPT5cbiAgICAgICAgKGRpc3BsYXlUYWIuZGF0YSA9IHRoaXMudGFic1tpXS5kYXRhLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgICAgICBpdGVtW2Rpc3BsYXlUYWIubGFiZWxGaWVsZF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICApKSxcbiAgICApO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9O1xufVxuIl19