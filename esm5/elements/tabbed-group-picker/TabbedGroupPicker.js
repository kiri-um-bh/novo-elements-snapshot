/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Helpers, binarySearch } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import { CdkScrollable } from '@angular/cdk/scrolling';
var NovoTabbedGroupPickerElement = /** @class */ (function () {
    function NovoTabbedGroupPickerElement(labelService, ref) {
        var _this = this;
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
        this.getSelectedState = function (childArray) {
            /** @type {?} */
            var numberOfSelectedItems = childArray.filter(function (_a) {
                var selected = _a.selected;
                return selected;
            }).length;
            if (!numberOfSelectedItems) {
                return undefined;
            }
            return numberOfSelectedItems === childArray.length ? 'selected' : 'indeterminate';
        };
        this.filter = function (searchTerm) {
            _this.displayTabs.forEach(function (displayTab, i) {
                return (displayTab.data = _this.tabs[i].data.filter(function (item) {
                    return item[displayTab.labelField].toLowerCase().includes(searchTerm.toLowerCase());
                }));
            });
            _this.ref.markForCheck();
        };
    }
    Object.defineProperty(NovoTabbedGroupPickerElement.prototype, "displayTab", {
        get: /**
         * @return {?}
         */
        function () {
            return this.displayTabs[this.displayTabIndex];
        },
        set: /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            this.displayTabIndex = this.tabs.map(function (_a) {
                var typeName = _a.typeName;
                return typeName;
            }).indexOf(tab.typeName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTabbedGroupPickerElement.prototype, "minBufferPx", {
        get: /**
         * @return {?}
         */
        function () {
            return this.scrollViewportHeight; // render at least 2x the number of items visible (viewport + min buffer)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTabbedGroupPickerElement.prototype, "maxBufferPx", {
        get: /**
         * @return {?}
         */
        function () {
            return 2 * this.scrollViewportHeight; // render at most 3x the number of items visible (viewport + max buffer)
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setupDisplayData();
        this.createChildrenReferences();
        this.initializeDescendantSelection();
        this.updateParentsAndQuickSelect();
        this.updateClearAll();
        this.loading = false;
        this.filterTextSubscription = this.filterText.pipe(debounceTime(300)).subscribe({
            next: this.filter,
        });
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.filterTextSubscription) {
            this.filterTextSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.changeTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.displayTab = tab;
        if (this.scrollableInstance) {
            this.scrollableInstance.scrollTo({ behavior: 'auto', top: 0 });
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.getPixelHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return Number(getComputedStyle(element, '').height.match(/(\d+(\.\d+)?)px$/)[1]);
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.setupDisplayData = /**
     * @return {?}
     */
    function () {
        // shallow copy here so that reassigning displayTabs[i].data doesn't mutate tabs[i].data
        // but both data values point to the same items
        this.displayTabs = this.tabs.map(function (tab) { return (tslib_1.__assign({}, tab)); });
        this.displayTab = this.tabs[0];
    };
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.createChildrenReferences = 
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tabs.forEach(function (tab) {
            // would rather filter but TypeScript still wants a type narrowing here
            if ('childTypeName' in tab) {
                /** @type {?} */
                var childTab = _this.tabs.find(function (_a) {
                    var typeName = _a.typeName;
                    return typeName === tab.childTypeName;
                });
                /** @type {?} */
                var compareFunction_1 = _this.makeCompareFunction(childTab.valueField);
                /** @type {?} */
                var warnFunction_1 = _this.makeWarningFunction(tab.typeName, childTab.typeName, childTab.valueField);
                /** @type {?} */
                var sortedChildren_1 = childTab.data.slice().sort(compareFunction_1);
                tab.data
                    .filter(function (_a) {
                    var children = _a.children;
                    return children && children.length;
                })
                    .forEach(function (parent) {
                    return _this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren_1, compareFunction_1, warnFunction_1);
                });
            }
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items
                .filter(function (parent) { return 'all' in parent; })
                .forEach(function (parent) {
                parent.children = _this.tabs.find(function (_a) {
                    var typeName = _a.typeName;
                    return parent.childTypeName === typeName;
                }).data;
            });
            this.quickSelectConfig.items
                .filter(function (parent) { return !('all' in parent); })
                .forEach(function (parent) {
                /** @type {?} */
                var childTab = _this.tabs.find(function (_a) {
                    var typeName = _a.typeName;
                    return typeName === parent.childTypeName;
                });
                /** @type {?} */
                var compareFunction = _this.makeCompareFunction(childTab.valueField);
                /** @type {?} */
                var warnFunction = _this.makeWarningFunction(parent.label, childTab.typeName, childTab.valueField);
                /** @type {?} */
                var sortedChildren = childTab.data.slice().sort(compareFunction);
                _this.replaceChildrenWithReferences((/** @type {?} */ (parent)), sortedChildren, compareFunction, warnFunction);
            });
        }
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.makeCompareFunction = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return function (a, b) {
            /** @type {?} */
            var aValue = (a && a[key]) || a;
            /** @type {?} */
            var bValue = (b && b[key]) || b;
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
    };
    /**
     * @param {?} parent
     * @param {?} sortedData
     * @param {?} compareFunction
     * @param {?} warnFunction
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.replaceChildrenWithReferences = /**
     * @param {?} parent
     * @param {?} sortedData
     * @param {?} compareFunction
     * @param {?} warnFunction
     * @return {?}
     */
    function (parent, sortedData, compareFunction, warnFunction) {
        parent.children = parent.children
            .map(function (child) { return binarySearch(child, sortedData, compareFunction) || warnFunction(child); })
            .filter(Boolean); // since map can return undefined, remove undefined elements
    };
    /**
     * @param {?} parentLabel
     * @param {?} childLabel
     * @param {?} childValueField
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.makeWarningFunction = /**
     * @param {?} parentLabel
     * @param {?} childLabel
     * @param {?} childValueField
     * @return {?}
     */
    function (parentLabel, childLabel, childValueField) {
        return function (child) {
            /** @type {?} */
            var childValue = child[childValueField] || child;
            console.warn("No " + childLabel + " found with value " + childValue + " for parent " + parentLabel);
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onDropdownToggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            this.scrollViewportHeight = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement);
            this.virtualScrollItemSize = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement.querySelector('novo-list-item'));
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onItemToggled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (Array.isArray(item.children)) {
            this.updateDescendants(item.selected, item.children);
        }
        this.updateParentsAndQuickSelect();
        this.updateClearAll(item.selected);
        this.emitSelectedValues();
        this.ref.markForCheck();
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.initializeDescendantSelection = /**
     * @return {?}
     */
    function () {
        this.tabs.forEach(function (tab) {
            if ('childTypeName' in tab && tab.data && tab.data.length) {
                tab.data.forEach(function (parent) {
                    if (parent.selected && parent.children && parent.children.length) {
                        parent.children.forEach(function (child) {
                            child.selected = true;
                        });
                    }
                });
            }
        });
    };
    /**
     * @param {?} parentIsSelected
     * @param {?} children
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.updateDescendants = /**
     * @param {?} parentIsSelected
     * @param {?} children
     * @return {?}
     */
    function (parentIsSelected, children) {
        var _this = this;
        children.forEach(function (item) {
            parentIsSelected ? (item.selected = true) : delete item.selected;
            if (Array.isArray(item.children)) {
                _this.updateDescendants(item.selected, item.children);
            }
        });
    };
    /**
     * @param {?=} itemWasJustSelected
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.updateClearAll = /**
     * @param {?=} itemWasJustSelected
     * @return {?}
     */
    function (itemWasJustSelected) {
        this.showClearAll = itemWasJustSelected
            ? true
            : this.tabs.some(function (tab) {
                if (((/** @type {?} */ (tab))).childTypeName) {
                    return tab.data.some(function (_a) {
                        var selected = _a.selected, indeterminate = _a.indeterminate;
                        return selected || indeterminate;
                    });
                }
                else {
                    return tab.data.some(function (_a) {
                        var selected = _a.selected;
                        return selected;
                    });
                }
            });
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.updateParentsAndQuickSelect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // mutate here to avoid dereferencing the objects in displayTabs
        this.tabs
            .filter(function (tab) { return 'childTypeName' in tab && !!tab.childTypeName; })
            .forEach(function (tab) {
            /** @type {?} */
            var parents = tab.data.filter(function (_a) {
                var children = _a.children;
                return children && children.length;
            });
            parents.forEach(function (parent) {
                ['indeterminate', 'selected'].forEach(function (selectedStateOption) { return delete parent[selectedStateOption]; });
                /** @type {?} */
                var selectedState = _this.getSelectedState(parent.children);
                if (selectedState) {
                    parent[selectedState] = true;
                }
            });
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach(function (quickSelect) {
                delete quickSelect.selected;
                /** @type {?} */
                var selectedState = _this.getSelectedState((/** @type {?} */ (quickSelect.children)));
                if (selectedState) {
                    quickSelect[selectedState] = true;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.emitSelectedValues = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedValues = this.tabs.map(function (tab) { return (tslib_1.__assign({}, tab, { data: tab.data.filter(function (_a) {
                var selected = _a.selected;
                return selected;
            }) })); });
        this.selectionChange.emit(selectedValues);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.deselectEverything = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        this.showClearAll = false;
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach(function (quickSelect) {
                delete quickSelect.selected;
            });
        }
        this.tabs.forEach(function (tab) {
            if (((/** @type {?} */ (tab))).childTypeName) {
                tab.data.forEach(function (item) {
                    delete item.selected;
                    delete item.indeterminate;
                    item.children.forEach(function (child) { return delete child.selected; });
                });
            }
            else {
                ((/** @type {?} */ (tab))).data.forEach(function (item) { return delete item.selected; });
            }
        });
        this.emitSelectedValues();
        this.ref.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onClearFilter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        this.filterText.next('');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoTabbedGroupPickerElement.prototype.onFilter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.filterText.next(event.target.value);
    };
    NovoTabbedGroupPickerElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tabbed-group-picker',
                    template: "<novo-dropdown (toggled)=\"onDropdownToggle($event)\">\n  <button\n    class=\"tabbed-group-picker-button\"\n    [theme]=\"buttonConfig.theme\"\n    [side]=\"buttonConfig.side\"\n    [icon]=\"buttonConfig.icon\"\n    [loading]=\"loading\"\n  >\n    <div class=\"tabbed-group-picker-button-label\">{{ buttonConfig.label }}</div>\n  </button>\n  <div class=\"tabbed-group-picker-search\" data-automation-id=\"tabbed-group-picker-search\">\n    <input type=\"text\" [placeholder]=\"labelService.search\" [value]=\"filterText | async\" (input)=\"onFilter($event)\" />\n    <i class=\"bhi-search\" *ngIf=\"!(filterText | async)\"></i>\n    <i class=\"bhi-times\" *ngIf=\"(filterText | async)\" (click)=\"onClearFilter($event)\"></i>\n  </div>\n  <div class=\"tabbed-group-picker-column-container\">\n    <div class=\"tabbed-group-picker-column left\">\n      <novo-nav theme=\"white\" direction=\"vertical\">\n        <novo-tab *ngFor=\"let tab of displayTabs\" [attr.data-automation-id]=\"tab.typeName\" (activeChange)=\"changeTab(tab)\">\n          <span>{{ tab.typeLabel }} ({{ tab.data.length }})</span><i class=\"bhi-next\"></i>\n        </novo-tab>\n      </novo-nav>\n      <button *ngIf=\"showClearAll\" class=\"clear-all-button\" theme=\"dialogue\" icon=\"times\" side=\"right\" color=\"grapefruit\" (click)=\"deselectEverything($event)\">{{ labelService.clear }}</button>\n    </div>\n    <div class=\"tabbed-group-picker-column right\">\n      <div class=\"quick-select\" *ngIf=\"quickSelectConfig && !(filterText | async)\">\n        <div class=\"quick-select-label\">{{ quickSelectConfig.label }}</div>\n        <novo-list class=\"quick-select-list\" direction=\"vertical\">\n          <novo-list-item\n            class=\"quick-select-item\"\n            *ngFor=\"let quickSelect of quickSelectConfig.items\"\n            [attr.data-automation-id]=\"quickSelect.label\"\n            (click)=\"quickSelect.selected = !quickSelect.selected; onItemToggled(quickSelect)\"\n          >\n            <item-content>\n              <novo-checkbox\n                [label]=\"quickSelect.label\"\n                [name]=\"'selected'\"\n                [(ngModel)]=\"quickSelect.selected\"\n                (ngModelChange)=\"onItemToggled(quickSelect)\"\n              ></novo-checkbox>\n            </item-content>\n          </novo-list-item>\n        </novo-list>\n      </div>\n      <novo-list *ngIf=\"displayTab.data.length\" direction=\"vertical\">\n        <cdk-virtual-scroll-viewport\n          [itemSize]=\"virtualScrollItemSize\"\n          [maxBufferPx]=\"maxBufferPx\"\n          [minBufferPx]=\"minBufferPx\"\n          #tabbedGroupPickerVirtualScrollViewport\n        >\n          <novo-list-item\n            *cdkVirtualFor=\"let item of displayTab.data\"\n            [attr.data-automation-id]=\"item[displayTab.labelField]\"\n            (click)=\"item.selected = !item.selected; onItemToggled(item)\"\n          >\n            <item-content>\n              <novo-checkbox\n                [label]=\"item[displayTab.labelField]\"\n                [name]=\"'selected'\"\n                [indeterminate]=\"item.indeterminate\"\n                [(ngModel)]=\"item.selected\"\n                (ngModelChange)=\"onItemToggled(item)\"\n              >\n              </novo-checkbox>\n            </item-content>\n          </novo-list-item>\n        </cdk-virtual-scroll-viewport>\n      </novo-list>\n      <div class=\"tabbed-group-picker-empty-item\" *ngIf=\"!displayTab.data.length && (filterText | async)\">\n        <i class=\"{{ displayTab.icon || 'bhi-search' }}\"></i>\n        <div class=\"empty-item-main-message\">{{ labelService.tabbedGroupPickerEmpty }}</div>\n        <div class=\"empty-item-sub-message\">{{ labelService.tabbedGroupClearSuggestion(displayTab.typeLabel) }}</div>\n      </div>\n    </div>\n  </div>\n</novo-dropdown>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoTabbedGroupPickerElement.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    NovoTabbedGroupPickerElement.propDecorators = {
        scrollableInstance: [{ type: ViewChild, args: ['tabbedGroupPickerVirtualScrollViewport',] }],
        buttonConfig: [{ type: Input }],
        tabs: [{ type: Input }],
        quickSelectConfig: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return NovoTabbedGroupPickerElement;
}());
export { NovoTabbedGroupPickerElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBMkN2RDtJQTRCRSxzQ0FBbUIsWUFBOEIsRUFDN0IsR0FBc0I7UUFEMUMsaUJBQzhDO1FBRDNCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM3QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCaEMsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd2RSxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUU1QixlQUFVLEdBQTRCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRzlELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixpQkFBWSxHQUFZLEtBQUssQ0FBQzs7UUFHOUIseUJBQW9CLEdBQVcsR0FBRyxDQUFDO1FBQ25DLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztRQW1ObkMscUJBQWdCLEdBQUcsVUFBQyxVQUE2RDs7Z0JBQ3pFLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMs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OztJQUVELCtDQUFROzs7O0lBQVIsVUFBUyxLQUFvQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQTNSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsa3lIQUF1QztvQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWhEUSxnQkFBZ0I7Z0JBUHZCLGlCQUFpQjs7O3FDQXlEaEIsU0FBUyxTQUFDLHdDQUF3QzsrQkFHbEQsS0FBSzt1QkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBRUwsTUFBTTs7SUF5UlQsbUNBQUM7Q0FBQSxBQXRTRCxJQXNTQztTQWpTWSw0QkFBNEI7Ozs7OztJQUN2QywwREFDMEM7O0lBRTFDLG9EQUFxRDs7SUFDckQsNENBQXNDOztJQUN0Qyx5REFBOEM7O0lBRTlDLHVEQUF1RTs7SUFFdkUsbURBQW9DOztJQUNwQyx1REFBNEI7O0lBRTVCLGtEQUE4RDs7SUFDOUQsOERBQXFDOztJQUVyQywrQ0FBZTs7SUFDZixvREFBOEI7O0lBRzlCLDREQUFtQzs7SUFDbkMsNkRBQW1DOztJQW1ObkMsd0RBTUU7O0lBMENGLDhDQVFFOztJQXpRVSxvREFBcUM7Ozs7O0lBQ3JDLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEhlbHBlcnMsIGJpbmFyeVNlYXJjaCB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDZGtTY3JvbGxhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyVGFiID0ge1xuICB0eXBlTmFtZTogc3RyaW5nO1xuICB0eXBlTGFiZWw6IHN0cmluZztcbiAgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBsYWJlbEZpZWxkOiBzdHJpbmc7XG4gIHNjcm9sbE9mZnNldD86IG51bWJlcjtcbiAgaWNvbj86IHN0cmluZztcbn0gJiAoUGFyZW50VGFiIHwgQ2hpbGRUYWIpO1xuXG5leHBvcnQgdHlwZSBQYXJlbnRUYWIgPSB7XG4gIGNoaWxkVHlwZU5hbWU6IHN0cmluZztcbiAgZGF0YTogQXJyYXk8UGFyZW50T3B0aW9uPjtcbn07XG5cbnR5cGUgUGFyZW50T3B0aW9uID0ge1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xuICBjaGlsZHJlbjogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT47XG59ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuZXhwb3J0IHR5cGUgQ2hpbGRUYWIgPSB7XG4gIGRhdGE6IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyUXVpY2tTZWxlY3QgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgY2hpbGRUeXBlTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiAoKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB8IChudW1iZXIpKVtdO1xuICBhbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUXVpY2tTZWxlY3RDb25maWcgPSB7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0W10gfTtcblxuZXhwb3J0IHR5cGUgVGFiYmVkR3JvdXBQaWNrZXJCdXR0b25Db25maWcgPSB7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIHNpZGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWJiZWQtZ3JvdXAtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL1RhYmJlZEdyb3VwUGlja2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmJlZEdyb3VwUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgndGFiYmVkR3JvdXBQaWNrZXJWaXJ0dWFsU2Nyb2xsVmlld3BvcnQnKVxuICBwcml2YXRlIHNjcm9sbGFibGVJbnN0YW5jZTogQ2RrU2Nyb2xsYWJsZTtcblxuICBASW5wdXQoKSBidXR0b25Db25maWc6IFRhYmJlZEdyb3VwUGlja2VyQnV0dG9uQ29uZmlnO1xuICBASW5wdXQoKSB0YWJzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdO1xuICBASW5wdXQoKSBxdWlja1NlbGVjdENvbmZpZzogUXVpY2tTZWxlY3RDb25maWc7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkaXNwbGF5VGFiczogVGFiYmVkR3JvdXBQaWNrZXJUYWJbXTtcbiAgZGlzcGxheVRhYkluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGZpbHRlclRleHQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIGZpbHRlclRleHRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBsb2FkaW5nID0gdHJ1ZTtcbiAgc2hvd0NsZWFyQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gSW5pdGlhbCBoZWlnaHQgYmFzZWQgb24gMTMgcHggZm9udCByZW5kZXJlZCBpbiBjaHJvbWUuIEFjdHVhbCBoZWlnaHQgcmV0cmlldmVkIG9uRHJvcGRvd25Ub2dnbGVkLlxuICBzY3JvbGxWaWV3cG9ydEhlaWdodDogbnVtYmVyID0gMzUxO1xuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IG51bWJlciA9IDM5O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbFNlcnZpY2U6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBnZXQgZGlzcGxheVRhYigpOiBUYWJiZWRHcm91cFBpY2tlclRhYiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVRhYnNbdGhpcy5kaXNwbGF5VGFiSW5kZXhdO1xuICB9XG4gIHNldCBkaXNwbGF5VGFiKHRhYjogVGFiYmVkR3JvdXBQaWNrZXJUYWIpIHtcbiAgICB0aGlzLmRpc3BsYXlUYWJJbmRleCA9IHRoaXMudGFicy5tYXAoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUpLmluZGV4T2YodGFiLnR5cGVOYW1lKTtcbiAgfVxuXG4gIGdldCBtaW5CdWZmZXJQeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodDsgLy8gcmVuZGVyIGF0IGxlYXN0IDJ4IHRoZSBudW1iZXIgb2YgaXRlbXMgdmlzaWJsZSAodmlld3BvcnQgKyBtaW4gYnVmZmVyKVxuICB9XG5cbiAgZ2V0IG1heEJ1ZmZlclB4KCkge1xuICAgIHJldHVybiAyICogdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodDsgLy8gcmVuZGVyIGF0IG1vc3QgM3ggdGhlIG51bWJlciBvZiBpdGVtcyB2aXNpYmxlICh2aWV3cG9ydCArIG1heCBidWZmZXIpXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldHVwRGlzcGxheURhdGEoKTtcbiAgICB0aGlzLmNyZWF0ZUNoaWxkcmVuUmVmZXJlbmNlcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZURlc2NlbmRhbnRTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnVwZGF0ZVBhcmVudHNBbmRRdWlja1NlbGVjdCgpO1xuICAgIHRoaXMudXBkYXRlQ2xlYXJBbGwoKTtcblxuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyVGV4dFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsdGVyVGV4dC5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdGhpcy5maWx0ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJUZXh0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmZpbHRlclRleHRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUYWIodGFiOiBUYWJiZWRHcm91cFBpY2tlclRhYikge1xuICAgIHRoaXMuZGlzcGxheVRhYiA9IHRhYjtcbiAgICBpZiAodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlLnNjcm9sbFRvKHsgYmVoYXZpb3I6ICdhdXRvJywgdG9wOiAwIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFBpeGVsSGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICcnKS5oZWlnaHQubWF0Y2goLyhcXGQrKFxcLlxcZCspPylweCQvKVsxXSk7XG4gIH1cblxuICBzZXR1cERpc3BsYXlEYXRhKCk6IHZvaWQge1xuICAgIC8vIHNoYWxsb3cgY29weSBoZXJlIHNvIHRoYXQgcmVhc3NpZ25pbmcgZGlzcGxheVRhYnNbaV0uZGF0YSBkb2Vzbid0IG11dGF0ZSB0YWJzW2ldLmRhdGFcbiAgICAvLyBidXQgYm90aCBkYXRhIHZhbHVlcyBwb2ludCB0byB0aGUgc2FtZSBpdGVtc1xuICAgIHRoaXMuZGlzcGxheVRhYnMgPSB0aGlzLnRhYnMubWFwKCh0YWIpID0+ICh7IC4uLnRhYiB9KSk7XG4gICAgdGhpcy5kaXNwbGF5VGFiID0gdGhpcy50YWJzWzBdO1xuICB9XG5cbiAgLy8gUmVwbGFjZSBlYWNoIHBhcmVudCdzIGNoaWxkIG9iamVjdCB3aXRoIGEgcmVmZXJlbmNlIHRvIHRoZSBjaGlsZCB0byBhdm9pZFxuICAvLyBhIGNoaWxkIGxvb2t1cCBmb3Igc2VsZWN0ZWQgc3RhdHVzOyBsaW5raW5nIHJlZmVyZW5jZXMgYWxsb3dzIE0geCBOXG4gIC8vIHRpbWUgY29tcGxleGl0eSBpbnN0ZWFkIG9mIE0geCBOXjJcbiAgY3JlYXRlQ2hpbGRyZW5SZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIC8vIHdvdWxkIHJhdGhlciBmaWx0ZXIgYnV0IFR5cGVTY3JpcHQgc3RpbGwgd2FudHMgYSB0eXBlIG5hcnJvd2luZyBoZXJlXG4gICAgICBpZiAoJ2NoaWxkVHlwZU5hbWUnIGluIHRhYikge1xuICAgICAgICBjb25zdCBjaGlsZFRhYiA9IHRoaXMudGFicy5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lID09PSB0YWIuY2hpbGRUeXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbXBhcmVGdW5jdGlvbiA9IHRoaXMubWFrZUNvbXBhcmVGdW5jdGlvbihjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgY29uc3Qgd2FybkZ1bmN0aW9uID0gdGhpcy5tYWtlV2FybmluZ0Z1bmN0aW9uKHRhYi50eXBlTmFtZSwgY2hpbGRUYWIudHlwZU5hbWUsIGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IGNoaWxkVGFiLmRhdGEuc2xpY2UoKS5zb3J0KGNvbXBhcmVGdW5jdGlvbik7XG5cbiAgICAgICAgdGFiLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKCh7IGNoaWxkcmVuIH0pID0+IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgICAuZm9yRWFjaCgocGFyZW50OiB7IGNoaWxkcmVuPzogYW55W10gfSkgPT5cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMocGFyZW50IGFzIFBhcmVudE9wdGlvbiwgc29ydGVkQ2hpbGRyZW4sIGNvbXBhcmVGdW5jdGlvbiwgd2FybkZ1bmN0aW9uKSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKHBhcmVudCkgPT4gJ2FsbCcgaW4gcGFyZW50KVxuICAgICAgICAuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gcGFyZW50LmNoaWxkVHlwZU5hbWUgPT09IHR5cGVOYW1lKS5kYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtc1xuICAgICAgICAuZmlsdGVyKChwYXJlbnQpID0+ICEoJ2FsbCcgaW4gcGFyZW50KSlcbiAgICAgICAgLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkVGFiID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUgPT09IHBhcmVudC5jaGlsZFR5cGVOYW1lKTtcbiAgICAgICAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSB0aGlzLm1ha2VDb21wYXJlRnVuY3Rpb24oY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgICAgY29uc3Qgd2FybkZ1bmN0aW9uID0gdGhpcy5tYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudC5sYWJlbCwgY2hpbGRUYWIudHlwZU5hbWUsIGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlZENoaWxkcmVuID0gY2hpbGRUYWIuZGF0YS5zbGljZSgpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcblxuICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMocGFyZW50IGFzIFBhcmVudE9wdGlvbiwgc29ydGVkQ2hpbGRyZW4sIGNvbXBhcmVGdW5jdGlvbiwgd2FybkZ1bmN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUNvbXBhcmVGdW5jdGlvbjxUPihrZXk6IHN0cmluZyk6IChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSkgPT4gMSB8IC0xIHwgMCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIChhOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0sIGI6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSkgPT4ge1xuICAgICAgY29uc3QgYVZhbHVlOiBUID0gKGEgJiYgYVtrZXldKSB8fCBhO1xuICAgICAgY29uc3QgYlZhbHVlOiBUID0gKGIgJiYgYltrZXldKSB8fCBiO1xuXG4gICAgICBpZiAoYVZhbHVlIDwgYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYVZhbHVlID4gYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmIChhVmFsdWUgPT09IGJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKFxuICAgIHBhcmVudDogeyBjaGlsZHJlbjogYW55W10gfSxcbiAgICBzb3J0ZWREYXRhOiBDaGlsZFRhYlsnZGF0YSddLFxuICAgIGNvbXBhcmVGdW5jdGlvbjogKGEsIGIpID0+IDEgfCAtMSB8IDAsXG4gICAgd2FybkZ1bmN0aW9uOiAoY2hpbGQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIHBhcmVudC5jaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlblxuICAgICAgLm1hcCgoY2hpbGQpID0+IGJpbmFyeVNlYXJjaChjaGlsZCwgc29ydGVkRGF0YSwgY29tcGFyZUZ1bmN0aW9uKSB8fCB3YXJuRnVuY3Rpb24oY2hpbGQpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTsgLy8gc2luY2UgbWFwIGNhbiByZXR1cm4gdW5kZWZpbmVkLCByZW1vdmUgdW5kZWZpbmVkIGVsZW1lbnRzXG4gIH1cblxuICBtYWtlV2FybmluZ0Z1bmN0aW9uKHBhcmVudExhYmVsOiBzdHJpbmcsIGNoaWxkTGFiZWw6IHN0cmluZywgY2hpbGRWYWx1ZUZpZWxkKTogKGNoaWxkKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFZhbHVlID0gY2hpbGRbY2hpbGRWYWx1ZUZpZWxkXSB8fCBjaGlsZDtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gJHtjaGlsZExhYmVsfSBmb3VuZCB3aXRoIHZhbHVlICR7Y2hpbGRWYWx1ZX0gZm9yIHBhcmVudCAke3BhcmVudExhYmVsfWApO1xuICAgIH07XG4gIH1cblxuICBvbkRyb3Bkb3duVG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbEhlaWdodCh0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9IHRoaXMuZ2V0UGl4ZWxIZWlnaHQodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0LWl0ZW0nKSk7XG4gICAgfVxuICB9XG5cbiAgb25JdGVtVG9nZ2xlZChpdGVtOiB7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9PiB9PiB9KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgIHRoaXMudXBkYXRlRGVzY2VuZGFudHMoaXRlbS5zZWxlY3RlZCwgaXRlbS5jaGlsZHJlbik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk7XG4gICAgdGhpcy51cGRhdGVDbGVhckFsbChpdGVtLnNlbGVjdGVkKTtcbiAgICB0aGlzLmVtaXRTZWxlY3RlZFZhbHVlcygpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURlc2NlbmRhbnRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKCdjaGlsZFR5cGVOYW1lJyBpbiB0YWIgJiYgdGFiLmRhdGEgJiYgdGFiLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRhYi5kYXRhLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmIChwYXJlbnQuc2VsZWN0ZWQgJiYgcGFyZW50LmNoaWxkcmVuICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGVzY2VuZGFudHMocGFyZW50SXNTZWxlY3RlZDogYm9vbGVhbiwgY2hpbGRyZW46IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+IH0+KTogdm9pZCB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgcGFyZW50SXNTZWxlY3RlZCA/IChpdGVtLnNlbGVjdGVkID0gdHJ1ZSkgOiBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGVzY2VuZGFudHMoaXRlbS5zZWxlY3RlZCwgaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDbGVhckFsbChpdGVtV2FzSnVzdFNlbGVjdGVkPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd0NsZWFyQWxsID0gaXRlbVdhc0p1c3RTZWxlY3RlZFxuICAgICAgPyB0cnVlXG4gICAgICA6IHRoaXMudGFicy5zb21lKCh0YWIpID0+IHtcbiAgICAgICAgICBpZiAoKHRhYiBhcyBQYXJlbnRUYWIpLmNoaWxkVHlwZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWIuZGF0YS5zb21lKCh7IHNlbGVjdGVkLCBpbmRldGVybWluYXRlIH0pID0+IHNlbGVjdGVkIHx8IGluZGV0ZXJtaW5hdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFiLmRhdGEuc29tZSgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudHNBbmRRdWlja1NlbGVjdCgpOiB2b2lkIHtcbiAgICAvLyBtdXRhdGUgaGVyZSB0byBhdm9pZCBkZXJlZmVyZW5jaW5nIHRoZSBvYmplY3RzIGluIGRpc3BsYXlUYWJzXG4gICAgdGhpcy50YWJzXG4gICAgICAuZmlsdGVyKCh0YWIpID0+ICdjaGlsZFR5cGVOYW1lJyBpbiB0YWIgJiYgISF0YWIuY2hpbGRUeXBlTmFtZSlcbiAgICAgIC5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IHRhYi5kYXRhLmZpbHRlcigoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55W10gfSkgPT4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKTtcblxuICAgICAgICBwYXJlbnRzLmZvckVhY2goKHBhcmVudDogeyBjaGlsZHJlbj86IHsgc2VsZWN0ZWQ/OiBib29sZWFuIH1bXSB9KSA9PiB7XG4gICAgICAgICAgWydpbmRldGVybWluYXRlJywgJ3NlbGVjdGVkJ10uZm9yRWFjaCgoc2VsZWN0ZWRTdGF0ZU9wdGlvbikgPT4gZGVsZXRlIHBhcmVudFtzZWxlY3RlZFN0YXRlT3B0aW9uXSk7XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHBhcmVudC5jaGlsZHJlbik7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHBhcmVudFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXMuZm9yRWFjaCgocXVpY2tTZWxlY3QpID0+IHtcbiAgICAgICAgZGVsZXRlIHF1aWNrU2VsZWN0LnNlbGVjdGVkO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdGhpcy5nZXRTZWxlY3RlZFN0YXRlKHF1aWNrU2VsZWN0LmNoaWxkcmVuIGFzICh7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlbXSk7XG4gICAgICAgIGlmIChzZWxlY3RlZFN0YXRlKSB7XG4gICAgICAgICAgcXVpY2tTZWxlY3Rbc2VsZWN0ZWRTdGF0ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZFN0YXRlID0gKGNoaWxkQXJyYXk6IHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBpbmRldGVybWluYXRlPzogYm9vbGVhbiB9W10pOiAnc2VsZWN0ZWQnIHwgJ2luZGV0ZXJtaW5hdGUnIHwgdW5kZWZpbmVkID0+IHtcbiAgICBjb25zdCBudW1iZXJPZlNlbGVjdGVkSXRlbXMgPSBjaGlsZEFycmF5LmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCkubGVuZ3RoO1xuICAgIGlmICghbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zID09PSBjaGlsZEFycmF5Lmxlbmd0aCA/ICdzZWxlY3RlZCcgOiAnaW5kZXRlcm1pbmF0ZSc7XG4gIH07XG5cbiAgZW1pdFNlbGVjdGVkVmFsdWVzKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdID0gdGhpcy50YWJzLm1hcCgodGFiKSA9PiAoe1xuICAgICAgLi4udGFiLFxuICAgICAgZGF0YTogdGFiLmRhdGEuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSxcbiAgICB9KSk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlcyk7XG4gIH1cblxuICBkZXNlbGVjdEV2ZXJ5dGhpbmcoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zaG93Q2xlYXJBbGwgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgcXVpY2tTZWxlY3Quc2VsZWN0ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKCh0YWIgYXMgUGFyZW50VGFiKS5jaGlsZFR5cGVOYW1lKSB7XG4gICAgICAgIHRhYi5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICBkZWxldGUgaXRlbS5pbmRldGVybWluYXRlO1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGRlbGV0ZSBjaGlsZC5zZWxlY3RlZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRhYiBhcyBDaGlsZFRhYikuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiBkZWxldGUgaXRlbS5zZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0U2VsZWN0ZWRWYWx1ZXMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uQ2xlYXJGaWx0ZXIoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoJycpO1xuICB9XG5cbiAgb25GaWx0ZXIoZXZlbnQ6IHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHJpbmcgfSB9KSB7XG4gICAgdGhpcy5maWx0ZXJUZXh0Lm5leHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlciA9IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLmRpc3BsYXlUYWJzLmZvckVhY2goXG4gICAgICAoZGlzcGxheVRhYiwgaSkgPT5cbiAgICAgICAgKGRpc3BsYXlUYWIuZGF0YSA9IHRoaXMudGFic1tpXS5kYXRhLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgICAgICBpdGVtW2Rpc3BsYXlUYWIubGFiZWxGaWVsZF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICApKSxcbiAgICApO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9O1xufVxuIl19