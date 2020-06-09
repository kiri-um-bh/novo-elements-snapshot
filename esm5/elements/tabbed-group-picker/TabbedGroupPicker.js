import { __assign } from "tslib";
import { CdkScrollable } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NovoLabelService } from '../../services/novo-label-service';
import { binarySearch, Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../dropdown/Dropdown";
import * as i3 from "../button/Button";
import * as i4 from "@angular/common";
import * as i5 from "../tabs/Tabs";
import * as i6 from "../list/List";
import * as i7 from "../form/extras/checkbox/Checkbox";
import * as i8 from "@angular/forms";
import * as i9 from "@angular/cdk/scrolling";
var _c0 = ["tabbedGroupPickerVirtualScrollViewport"];
function NovoTabbedGroupPickerElement_i_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
function NovoTabbedGroupPickerElement_i_9_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 17);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_i_9_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onClearFilter($event); });
    i0.ɵɵelementEnd();
} }
function NovoTabbedGroupPickerElement_novo_tab_14_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-tab", 18);
    i0.ɵɵlistener("activeChange", function NovoTabbedGroupPickerElement_novo_tab_14_Template_novo_tab_activeChange_0_listener() { i0.ɵɵrestoreView(_r11); var tab_r9 = ctx.$implicit; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.changeTab(tab_r9); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r9 = ctx.$implicit;
    i0.ɵɵattribute("data-automation-id", tab_r9.typeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", tab_r9.typeLabel, " (", tab_r9.data.length, ")");
} }
function NovoTabbedGroupPickerElement_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_button_15_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.deselectEverything($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labelService.clear);
} }
function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 25);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r17); var quickSelect_r15 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(2); quickSelect_r15.selected = !quickSelect_r15.selected; return ctx_r16.onItemToggled(quickSelect_r15); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelementStart(2, "novo-checkbox", 26);
    i0.ɵɵlistener("ngModelChange", function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template_novo_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r17); var quickSelect_r15 = ctx.$implicit; return quickSelect_r15.selected = $event; })("ngModelChange", function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template_novo_checkbox_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r17); var quickSelect_r15 = ctx.$implicit; var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.onItemToggled(quickSelect_r15); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var quickSelect_r15 = ctx.$implicit;
    i0.ɵɵattribute("data-automation-id", quickSelect_r15.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", quickSelect_r15.label)("name", "selected")("ngModel", quickSelect_r15.selected);
} }
function NovoTabbedGroupPickerElement_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "novo-list", 23);
    i0.ɵɵtemplate(4, NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template, 3, 4, "novo-list-item", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.quickSelectConfig.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.quickSelectConfig.items);
} }
function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template(rf, ctx) { if (rf & 1) {
    var _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 31);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r24); var item_r22 = ctx.$implicit; var ctx_r23 = i0.ɵɵnextContext(2); item_r22.selected = !item_r22.selected; return ctx_r23.onItemToggled(item_r22); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelementStart(2, "novo-checkbox", 32);
    i0.ɵɵlistener("ngModelChange", function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template_novo_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r24); var item_r22 = ctx.$implicit; return item_r22.selected = $event; })("ngModelChange", function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template_novo_checkbox_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r24); var item_r22 = ctx.$implicit; var ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onItemToggled(item_r22); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r22 = ctx.$implicit;
    var ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", item_r22[ctx_r21.displayTab.labelField]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", item_r22[ctx_r21.displayTab.labelField])("name", "selected")("indeterminate", item_r22.indeterminate)("ngModel", item_r22.selected);
} }
function NovoTabbedGroupPickerElement_novo_list_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list", 27);
    i0.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 28, 29);
    i0.ɵɵtemplate(3, NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template, 3, 5, "novo-list-item", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("itemSize", ctx_r5.virtualScrollItemSize)("maxBufferPx", ctx_r5.maxBufferPx)("minBufferPx", ctx_r5.minBufferPx);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkVirtualForOf", ctx_r5.displayTab.data);
} }
function NovoTabbedGroupPickerElement_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementStart(2, "div", 34);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r6.displayTab.icon || "bhi-search");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.labelService.tabbedGroupPickerEmpty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.labelService.tabbedGroupClearSuggestion(ctx_r6.displayTab.typeLabel));
} }
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
        get: function () {
            return this.displayTabs[this.displayTabIndex];
        },
        set: function (tab) {
            this.displayTabIndex = this.tabs.map(function (_a) {
                var typeName = _a.typeName;
                return typeName;
            }).indexOf(tab.typeName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTabbedGroupPickerElement.prototype, "minBufferPx", {
        get: function () {
            return this.scrollViewportHeight; // render at least 2x the number of items visible (viewport + min buffer)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTabbedGroupPickerElement.prototype, "maxBufferPx", {
        get: function () {
            return 2 * this.scrollViewportHeight; // render at most 3x the number of items visible (viewport + max buffer)
        },
        enumerable: true,
        configurable: true
    });
    NovoTabbedGroupPickerElement.prototype.ngOnInit = function () {
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
    NovoTabbedGroupPickerElement.prototype.ngOnDestroy = function () {
        if (this.filterTextSubscription) {
            this.filterTextSubscription.unsubscribe();
        }
    };
    NovoTabbedGroupPickerElement.prototype.changeTab = function (tab) {
        this.displayTab = tab;
        if (this.scrollableInstance) {
            this.scrollableInstance.scrollTo({ behavior: 'auto', top: 0 });
        }
    };
    NovoTabbedGroupPickerElement.prototype.getPixelHeight = function (element) {
        return Number(getComputedStyle(element, '').height.match(/(\d+(\.\d+)?)px$/)[1]);
    };
    NovoTabbedGroupPickerElement.prototype.setupDisplayData = function () {
        // shallow copy here so that reassigning displayTabs[i].data doesn't mutate tabs[i].data
        // but both data values point to the same items
        this.displayTabs = this.tabs.map(function (tab) { return (__assign({}, tab)); });
        this.displayTab = this.tabs[0];
    };
    // Replace each parent's child object with a reference to the child to avoid
    // a child lookup for selected status; linking references allows M x N
    // time complexity instead of M x N^2
    NovoTabbedGroupPickerElement.prototype.createChildrenReferences = function () {
        var _this = this;
        this.tabs.forEach(function (tab) {
            // would rather filter but TypeScript still wants a type narrowing here
            if ('childTypeName' in tab) {
                var childTab = _this.tabs.find(function (_a) {
                    var typeName = _a.typeName;
                    return typeName === tab.childTypeName;
                });
                var compareFunction_1 = _this.makeCompareFunction(childTab.valueField);
                var warnFunction_1 = _this.makeWarningFunction(tab.typeName, childTab.typeName, childTab.valueField);
                var sortedChildren_1 = childTab.data.slice().sort(compareFunction_1);
                tab.data
                    .filter(function (_a) {
                    var children = _a.children;
                    return children && children.length;
                })
                    .forEach(function (parent) {
                    return _this.replaceChildrenWithReferences(parent, sortedChildren_1, compareFunction_1, warnFunction_1);
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
                var childTab = _this.tabs.find(function (_a) {
                    var typeName = _a.typeName;
                    return typeName === parent.childTypeName;
                });
                var compareFunction = _this.makeCompareFunction(childTab.valueField);
                var warnFunction = _this.makeWarningFunction(parent.label, childTab.typeName, childTab.valueField);
                var sortedChildren = childTab.data.slice().sort(compareFunction);
                _this.replaceChildrenWithReferences(parent, sortedChildren, compareFunction, warnFunction);
            });
        }
    };
    NovoTabbedGroupPickerElement.prototype.makeCompareFunction = function (key) {
        return function (a, b) {
            var aValue = (a && a[key]) || a;
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
    NovoTabbedGroupPickerElement.prototype.replaceChildrenWithReferences = function (parent, sortedData, compareFunction, warnFunction) {
        parent.children = parent.children
            .map(function (child) { return binarySearch(child, sortedData, compareFunction) || warnFunction(child); })
            .filter(Boolean); // since map can return undefined, remove undefined elements
    };
    NovoTabbedGroupPickerElement.prototype.makeWarningFunction = function (parentLabel, childLabel, childValueField) {
        return function (child) {
            var childValue = child[childValueField] || child;
            console.warn("No " + childLabel + " found with value " + childValue + " for parent " + parentLabel);
        };
    };
    NovoTabbedGroupPickerElement.prototype.onDropdownToggle = function (event) {
        if (event) {
            this.scrollViewportHeight = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement);
            this.virtualScrollItemSize = this.getPixelHeight(this.scrollableInstance.getElementRef().nativeElement.querySelector('novo-list-item'));
        }
    };
    NovoTabbedGroupPickerElement.prototype.onItemToggled = function (item) {
        if (Array.isArray(item.children)) {
            this.updateDescendants(item.selected, item.children);
        }
        this.updateParentsAndQuickSelect();
        this.updateClearAll(item.selected);
        this.emitSelectedValues();
        this.ref.markForCheck();
    };
    NovoTabbedGroupPickerElement.prototype.initializeDescendantSelection = function () {
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
    NovoTabbedGroupPickerElement.prototype.updateDescendants = function (parentIsSelected, children) {
        var _this = this;
        children.forEach(function (item) {
            parentIsSelected ? (item.selected = true) : delete item.selected;
            if (Array.isArray(item.children)) {
                _this.updateDescendants(item.selected, item.children);
            }
        });
    };
    NovoTabbedGroupPickerElement.prototype.updateClearAll = function (itemWasJustSelected) {
        this.showClearAll = itemWasJustSelected
            ? true
            : this.tabs.some(function (tab) {
                if (tab.childTypeName) {
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
    NovoTabbedGroupPickerElement.prototype.updateParentsAndQuickSelect = function () {
        var _this = this;
        // mutate here to avoid dereferencing the objects in displayTabs
        this.tabs
            .filter(function (tab) { return 'childTypeName' in tab && !!tab.childTypeName; })
            .forEach(function (tab) {
            var parents = tab.data.filter(function (_a) {
                var children = _a.children;
                return children && children.length;
            });
            parents.forEach(function (parent) {
                ['indeterminate', 'selected'].forEach(function (selectedStateOption) { return delete parent[selectedStateOption]; });
                var selectedState = _this.getSelectedState(parent.children);
                if (selectedState) {
                    parent[selectedState] = true;
                }
            });
        });
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach(function (quickSelect) {
                delete quickSelect.selected;
                var selectedState = _this.getSelectedState(quickSelect.children);
                if (selectedState) {
                    quickSelect[selectedState] = true;
                }
            });
        }
    };
    NovoTabbedGroupPickerElement.prototype.emitSelectedValues = function () {
        var selectedValues = this.tabs.map(function (tab) { return (__assign(__assign({}, tab), { data: tab.data.filter(function (_a) {
                var selected = _a.selected;
                return selected;
            }) })); });
        this.selectionChange.emit(selectedValues);
    };
    NovoTabbedGroupPickerElement.prototype.deselectEverything = function (event) {
        Helpers.swallowEvent(event);
        this.showClearAll = false;
        if (this.quickSelectConfig) {
            this.quickSelectConfig.items.forEach(function (quickSelect) {
                delete quickSelect.selected;
            });
        }
        this.tabs.forEach(function (tab) {
            if (tab.childTypeName) {
                tab.data.forEach(function (item) {
                    delete item.selected;
                    delete item.indeterminate;
                    item.children.forEach(function (child) { return delete child.selected; });
                });
            }
            else {
                tab.data.forEach(function (item) { return delete item.selected; });
            }
        });
        this.emitSelectedValues();
        this.ref.markForCheck();
    };
    NovoTabbedGroupPickerElement.prototype.onClearFilter = function (event) {
        Helpers.swallowEvent(event);
        this.filterText.next('');
    };
    NovoTabbedGroupPickerElement.prototype.onFilter = function (event) {
        this.filterText.next(event.target.value);
    };
    NovoTabbedGroupPickerElement.ɵfac = function NovoTabbedGroupPickerElement_Factory(t) { return new (t || NovoTabbedGroupPickerElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    NovoTabbedGroupPickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabbedGroupPickerElement, selectors: [["novo-tabbed-group-picker"]], viewQuery: function NovoTabbedGroupPickerElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.scrollableInstance = _t.first);
        } }, inputs: { buttonConfig: "buttonConfig", tabs: "tabs", quickSelectConfig: "quickSelectConfig" }, outputs: { selectionChange: "selectionChange" }, decls: 22, vars: 24, consts: [[3, "toggled"], [1, "tabbed-group-picker-button", 3, "theme", "side", "icon", "loading"], [1, "tabbed-group-picker-button-label"], ["data-automation-id", "tabbed-group-picker-search", 1, "tabbed-group-picker-search"], ["type", "text", 3, "placeholder", "value", "input"], ["class", "bhi-search", 4, "ngIf"], ["class", "bhi-times", 3, "click", 4, "ngIf"], [1, "tabbed-group-picker-column-container"], [1, "tabbed-group-picker-column", "left"], ["theme", "white", "direction", "vertical"], [3, "activeChange", 4, "ngFor", "ngForOf"], ["class", "clear-all-button", "theme", "dialogue", "icon", "times", "side", "right", "color", "grapefruit", 3, "click", 4, "ngIf"], [1, "tabbed-group-picker-column", "right"], ["class", "quick-select", 4, "ngIf"], ["direction", "vertical", 4, "ngIf"], ["class", "tabbed-group-picker-empty-item", 4, "ngIf"], [1, "bhi-search"], [1, "bhi-times", 3, "click"], [3, "activeChange"], [1, "bhi-next"], ["theme", "dialogue", "icon", "times", "side", "right", "color", "grapefruit", 1, "clear-all-button", 3, "click"], [1, "quick-select"], [1, "quick-select-label"], ["direction", "vertical", 1, "quick-select-list"], ["class", "quick-select-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-select-item", 3, "click"], [3, "label", "name", "ngModel", "ngModelChange"], ["direction", "vertical"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["tabbedGroupPickerVirtualScrollViewport", ""], [3, "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "click"], [3, "label", "name", "indeterminate", "ngModel", "ngModelChange"], [1, "tabbed-group-picker-empty-item"], [1, "empty-item-main-message"], [1, "empty-item-sub-message"]], template: function NovoTabbedGroupPickerElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "novo-dropdown", 0);
            i0.ɵɵlistener("toggled", function NovoTabbedGroupPickerElement_Template_novo_dropdown_toggled_0_listener($event) { return ctx.onDropdownToggle($event); });
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "input", 4);
            i0.ɵɵlistener("input", function NovoTabbedGroupPickerElement_Template_input_input_5_listener($event) { return ctx.onFilter($event); });
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, NovoTabbedGroupPickerElement_i_7_Template, 1, 0, "i", 5);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, NovoTabbedGroupPickerElement_i_9_Template, 1, 0, "i", 6);
            i0.ɵɵpipe(10, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 7);
            i0.ɵɵelementStart(12, "div", 8);
            i0.ɵɵelementStart(13, "novo-nav", 9);
            i0.ɵɵtemplate(14, NovoTabbedGroupPickerElement_novo_tab_14_Template, 4, 3, "novo-tab", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, NovoTabbedGroupPickerElement_button_15_Template, 2, 1, "button", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 12);
            i0.ɵɵtemplate(17, NovoTabbedGroupPickerElement_div_17_Template, 5, 2, "div", 13);
            i0.ɵɵpipe(18, "async");
            i0.ɵɵtemplate(19, NovoTabbedGroupPickerElement_novo_list_19_Template, 4, 4, "novo-list", 14);
            i0.ɵɵtemplate(20, NovoTabbedGroupPickerElement_div_20_Template, 6, 5, "div", 15);
            i0.ɵɵpipe(21, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("theme", ctx.buttonConfig.theme)("side", ctx.buttonConfig.side)("icon", ctx.buttonConfig.icon)("loading", ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.buttonConfig.label);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("placeholder", ctx.labelService.search)("value", i0.ɵɵpipeBind1(6, 14, ctx.filterText));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(8, 16, ctx.filterText));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(10, 18, ctx.filterText));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.displayTabs);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showClearAll);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.quickSelectConfig && !i0.ɵɵpipeBind1(18, 20, ctx.filterText));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.displayTab.data.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.displayTab.data.length && i0.ɵɵpipeBind1(21, 22, ctx.filterText));
        } }, directives: [i2.NovoDropdownElement, i3.NovoButtonElement, i4.NgIf, i5.NovoNavElement, i4.NgForOf, i5.NovoTabElement, i6.NovoListElement, i6.NovoListItemElement, i6.NovoItemContentElement, i7.NovoCheckboxElement, i8.NgControlStatus, i8.NgModel, i9.CdkVirtualScrollViewport, i9.CdkFixedSizeVirtualScroll, i9.CdkVirtualForOf], pipes: [i4.AsyncPipe], encapsulation: 2, changeDetection: 0 });
    return NovoTabbedGroupPickerElement;
}());
export { NovoTabbedGroupPickerElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabbedGroupPickerElement, [{
        type: Component,
        args: [{
                selector: 'novo-tabbed-group-picker',
                templateUrl: './TabbedGroupPicker.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { scrollableInstance: [{
            type: ViewChild,
            args: ['tabbedGroupPickerVirtualScrollViewport']
        }], buttonConfig: [{
            type: Input
        }], tabs: [{
            type: Input
        }], quickSelectConfig: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyIsImVsZW1lbnRzL3RhYmJlZC1ncm91cC1waWNrZXIvVGFiYmVkR3JvdXBQaWNrZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ094RCx3QkFBd0Q7Ozs7SUFDeEQsNkJBQXNGO0lBQXBDLHNNQUErQjtJQUFDLGlCQUFJOzs7O0lBS2xGLG9DQUNFO0lBRGlGLHdQQUErQjtJQUNoSCw0QkFBTTtJQUFBLFlBQTJDO0lBQUEsaUJBQU87SUFBQSx3QkFBd0I7SUFDbEYsaUJBQVc7OztJQUYrQixxREFBd0M7SUFDMUUsZUFBMkM7SUFBM0MsMEVBQTJDOzs7O0lBR3JELGtDQUF5SjtJQUFyQyx5TkFBb0M7SUFBQyxZQUF3QjtJQUFBLGlCQUFTOzs7SUFBakMsZUFBd0I7SUFBeEIsK0NBQXdCOzs7O0lBTTdLLDBDQU1FO0lBRkEseVVBQWtGO0lBRWxGLG9DQUNFO0lBQUEseUNBS2lCO0lBRmYsZ1FBQWtDLHFSQUFBO0lBRW5DLGlCQUFn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U0M7U0FqU1ksNEJBQTRCO2tEQUE1Qiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxTQUFTO21CQUFDLHdDQUF3Qzs7a0JBR2xELEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtTY3JvbGxhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBiaW5hcnlTZWFyY2gsIEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuZXhwb3J0IHR5cGUgVGFiYmVkR3JvdXBQaWNrZXJUYWIgPSB7XG4gIHR5cGVOYW1lOiBzdHJpbmc7XG4gIHR5cGVMYWJlbDogc3RyaW5nO1xuICB2YWx1ZUZpZWxkOiBzdHJpbmc7XG4gIGxhYmVsRmllbGQ6IHN0cmluZztcbiAgc2Nyb2xsT2Zmc2V0PzogbnVtYmVyO1xuICBpY29uPzogc3RyaW5nO1xufSAmIChQYXJlbnRUYWIgfCBDaGlsZFRhYik7XG5cbmV4cG9ydCB0eXBlIFBhcmVudFRhYiA9IHtcbiAgY2hpbGRUeXBlTmFtZTogc3RyaW5nO1xuICBkYXRhOiBBcnJheTxQYXJlbnRPcHRpb24+O1xufTtcblxudHlwZSBQYXJlbnRPcHRpb24gPSB7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9Pjtcbn0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG5leHBvcnQgdHlwZSBDaGlsZFRhYiA9IHtcbiAgZGF0YTogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfSAmIHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xufTtcblxuZXhwb3J0IHR5cGUgVGFiYmVkR3JvdXBQaWNrZXJRdWlja1NlbGVjdCA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBjaGlsZFR5cGVOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbj86ICgoeyBzZWxlY3RlZD86IGJvb2xlYW4gfSAmIHsgW2tleTogc3RyaW5nXTogYW55IH0pIHwgKG51bWJlcikpW107XG4gIGFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBRdWlja1NlbGVjdENvbmZpZyA9IHsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IFRhYmJlZEdyb3VwUGlja2VyUXVpY2tTZWxlY3RbXSB9O1xuXG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlckJ1dHRvbkNvbmZpZyA9IHtcbiAgdGhlbWU6IHN0cmluZztcbiAgc2lkZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYmJlZC1ncm91cC1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vVGFiYmVkR3JvdXBQaWNrZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiYmVkR3JvdXBQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBAVmlld0NoaWxkKCd0YWJiZWRHcm91cFBpY2tlclZpcnR1YWxTY3JvbGxWaWV3cG9ydCcpXG4gIHByaXZhdGUgc2Nyb2xsYWJsZUluc3RhbmNlOiBDZGtTY3JvbGxhYmxlO1xuXG4gIEBJbnB1dCgpIGJ1dHRvbkNvbmZpZzogVGFiYmVkR3JvdXBQaWNrZXJCdXR0b25Db25maWc7XG4gIEBJbnB1dCgpIHRhYnM6IFRhYmJlZEdyb3VwUGlja2VyVGFiW107XG4gIEBJbnB1dCgpIHF1aWNrU2VsZWN0Q29uZmlnOiBRdWlja1NlbGVjdENvbmZpZztcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGRpc3BsYXlUYWJzOiBUYWJiZWRHcm91cFBpY2tlclRhYltdO1xuICBkaXNwbGF5VGFiSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgZmlsdGVyVGV4dDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgZmlsdGVyVGV4dFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGxvYWRpbmcgPSB0cnVlO1xuICBzaG93Q2xlYXJBbGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBJbml0aWFsIGhlaWdodCBiYXNlZCBvbiAxMyBweCBmb250IHJlbmRlcmVkIGluIGNocm9tZS4gQWN0dWFsIGhlaWdodCByZXRyaWV2ZWQgb25Ecm9wZG93blRvZ2dsZWQuXG4gIHNjcm9sbFZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAzNTE7XG4gIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZTogbnVtYmVyID0gMzk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsU2VydmljZTogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIGdldCBkaXNwbGF5VGFiKCk6IFRhYmJlZEdyb3VwUGlja2VyVGFiIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5VGFic1t0aGlzLmRpc3BsYXlUYWJJbmRleF07XG4gIH1cbiAgc2V0IGRpc3BsYXlUYWIodGFiOiBUYWJiZWRHcm91cFBpY2tlclRhYikge1xuICAgIHRoaXMuZGlzcGxheVRhYkluZGV4ID0gdGhpcy50YWJzLm1hcCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSkuaW5kZXhPZih0YWIudHlwZU5hbWUpO1xuICB9XG5cbiAgZ2V0IG1pbkJ1ZmZlclB4KCkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXdwb3J0SGVpZ2h0OyAvLyByZW5kZXIgYXQgbGVhc3QgMnggdGhlIG51bWJlciBvZiBpdGVtcyB2aXNpYmxlICh2aWV3cG9ydCArIG1pbiBidWZmZXIpXG4gIH1cblxuICBnZXQgbWF4QnVmZmVyUHgoKSB7XG4gICAgcmV0dXJuIDIgKiB0aGlzLnNjcm9sbFZpZXdwb3J0SGVpZ2h0OyAvLyByZW5kZXIgYXQgbW9zdCAzeCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHZpc2libGUgKHZpZXdwb3J0ICsgbWF4IGJ1ZmZlcilcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dXBEaXNwbGF5RGF0YSgpO1xuICAgIHRoaXMuY3JlYXRlQ2hpbGRyZW5SZWZlcmVuY2VzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplRGVzY2VuZGFudFNlbGVjdGlvbigpO1xuICAgIHRoaXMudXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk7XG4gICAgdGhpcy51cGRhdGVDbGVhckFsbCgpO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJUZXh0U3Vic2NyaXB0aW9uID0gdGhpcy5maWx0ZXJUZXh0LnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB0aGlzLmZpbHRlcixcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlclRleHRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZmlsdGVyVGV4dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVRhYih0YWI6IFRhYmJlZEdyb3VwUGlja2VyVGFiKSB7XG4gICAgdGhpcy5kaXNwbGF5VGFiID0gdGFiO1xuICAgIGlmICh0aGlzLnNjcm9sbGFibGVJbnN0YW5jZSkge1xuICAgICAgdGhpcy5zY3JvbGxhYmxlSW5zdGFuY2Uuc2Nyb2xsVG8oeyBiZWhhdmlvcjogJ2F1dG8nLCB0b3A6IDAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGl4ZWxIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpLmhlaWdodC5tYXRjaCgvKFxcZCsoXFwuXFxkKyk/KXB4JC8pWzFdKTtcbiAgfVxuXG4gIHNldHVwRGlzcGxheURhdGEoKTogdm9pZCB7XG4gICAgLy8gc2hhbGxvdyBjb3B5IGhlcmUgc28gdGhhdCByZWFzc2lnbmluZyBkaXNwbGF5VGFic1tpXS5kYXRhIGRvZXNuJ3QgbXV0YXRlIHRhYnNbaV0uZGF0YVxuICAgIC8vIGJ1dCBib3RoIGRhdGEgdmFsdWVzIHBvaW50IHRvIHRoZSBzYW1lIGl0ZW1zXG4gICAgdGhpcy5kaXNwbGF5VGFicyA9IHRoaXMudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiIH0pKTtcbiAgICB0aGlzLmRpc3BsYXlUYWIgPSB0aGlzLnRhYnNbMF07XG4gIH1cblxuICAvLyBSZXBsYWNlIGVhY2ggcGFyZW50J3MgY2hpbGQgb2JqZWN0IHdpdGggYSByZWZlcmVuY2UgdG8gdGhlIGNoaWxkIHRvIGF2b2lkXG4gIC8vIGEgY2hpbGQgbG9va3VwIGZvciBzZWxlY3RlZCBzdGF0dXM7IGxpbmtpbmcgcmVmZXJlbmNlcyBhbGxvd3MgTSB4IE5cbiAgLy8gdGltZSBjb21wbGV4aXR5IGluc3RlYWQgb2YgTSB4IE5eMlxuICBjcmVhdGVDaGlsZHJlblJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgLy8gd291bGQgcmF0aGVyIGZpbHRlciBidXQgVHlwZVNjcmlwdCBzdGlsbCB3YW50cyBhIHR5cGUgbmFycm93aW5nIGhlcmVcbiAgICAgIGlmICgnY2hpbGRUeXBlTmFtZScgaW4gdGFiKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkVGFiID0gdGhpcy50YWJzLmZpbmQoKHsgdHlwZU5hbWUgfSkgPT4gdHlwZU5hbWUgPT09IHRhYi5jaGlsZFR5cGVOYW1lKTtcbiAgICAgICAgY29uc3QgY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5tYWtlQ29tcGFyZUZ1bmN0aW9uKGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICBjb25zdCB3YXJuRnVuY3Rpb24gPSB0aGlzLm1ha2VXYXJuaW5nRnVuY3Rpb24odGFiLnR5cGVOYW1lLCBjaGlsZFRhYi50eXBlTmFtZSwgY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgIGNvbnN0IHNvcnRlZENoaWxkcmVuID0gY2hpbGRUYWIuZGF0YS5zbGljZSgpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcblxuICAgICAgICB0YWIuZGF0YVxuICAgICAgICAgIC5maWx0ZXIoKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICAgIC5mb3JFYWNoKChwYXJlbnQ6IHsgY2hpbGRyZW4/OiBhbnlbXSB9KSA9PlxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhwYXJlbnQgYXMgUGFyZW50T3B0aW9uLCBzb3J0ZWRDaGlsZHJlbiwgY29tcGFyZUZ1bmN0aW9uLCB3YXJuRnVuY3Rpb24pLFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXNcbiAgICAgICAgLmZpbHRlcigocGFyZW50KSA9PiAnYWxsJyBpbiBwYXJlbnQpXG4gICAgICAgIC5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSB0aGlzLnRhYnMuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiBwYXJlbnQuY2hpbGRUeXBlTmFtZSA9PT0gdHlwZU5hbWUpLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKHBhcmVudCkgPT4gISgnYWxsJyBpbiBwYXJlbnQpKVxuICAgICAgICAuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGRUYWIgPSB0aGlzLnRhYnMuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSA9PT0gcGFyZW50LmNoaWxkVHlwZU5hbWUpO1xuICAgICAgICAgIGNvbnN0IGNvbXBhcmVGdW5jdGlvbiA9IHRoaXMubWFrZUNvbXBhcmVGdW5jdGlvbihjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgICBjb25zdCB3YXJuRnVuY3Rpb24gPSB0aGlzLm1ha2VXYXJuaW5nRnVuY3Rpb24ocGFyZW50LmxhYmVsLCBjaGlsZFRhYi50eXBlTmFtZSwgY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgICAgY29uc3Qgc29ydGVkQ2hpbGRyZW4gPSBjaGlsZFRhYi5kYXRhLnNsaWNlKCkuc29ydChjb21wYXJlRnVuY3Rpb24pO1xuXG4gICAgICAgICAgdGhpcy5yZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhwYXJlbnQgYXMgUGFyZW50T3B0aW9uLCBzb3J0ZWRDaGlsZHJlbiwgY29tcGFyZUZ1bmN0aW9uLCB3YXJuRnVuY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtYWtlQ29tcGFyZUZ1bmN0aW9uPFQ+KGtleTogc3RyaW5nKTogKGE6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSwgYjogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9KSA9PiAxIHwgLTEgfCAwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKGE6IFQgfCB7IFtrZXk6IHN0cmluZ106IFQgfSwgYjogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9KSA9PiB7XG4gICAgICBjb25zdCBhVmFsdWU6IFQgPSAoYSAmJiBhW2tleV0pIHx8IGE7XG4gICAgICBjb25zdCBiVmFsdWU6IFQgPSAoYiAmJiBiW2tleV0pIHx8IGI7XG5cbiAgICAgIGlmIChhVmFsdWUgPCBiVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChhVmFsdWUgPiBiVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKGFWYWx1ZSA9PT0gYlZhbHVlKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkcmVuV2l0aFJlZmVyZW5jZXMoXG4gICAgcGFyZW50OiB7IGNoaWxkcmVuOiBhbnlbXSB9LFxuICAgIHNvcnRlZERhdGE6IENoaWxkVGFiWydkYXRhJ10sXG4gICAgY29tcGFyZUZ1bmN0aW9uOiAoYSwgYikgPT4gMSB8IC0xIHwgMCxcbiAgICB3YXJuRnVuY3Rpb246IChjaGlsZCkgPT4gdm9pZCxcbiAgKTogdm9pZCB7XG4gICAgcGFyZW50LmNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuXG4gICAgICAubWFwKChjaGlsZCkgPT4gYmluYXJ5U2VhcmNoKGNoaWxkLCBzb3J0ZWREYXRhLCBjb21wYXJlRnVuY3Rpb24pIHx8IHdhcm5GdW5jdGlvbihjaGlsZCkpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pOyAvLyBzaW5jZSBtYXAgY2FuIHJldHVybiB1bmRlZmluZWQsIHJlbW92ZSB1bmRlZmluZWQgZWxlbWVudHNcbiAgfVxuXG4gIG1ha2VXYXJuaW5nRnVuY3Rpb24ocGFyZW50TGFiZWw6IHN0cmluZywgY2hpbGRMYWJlbDogc3RyaW5nLCBjaGlsZFZhbHVlRmllbGQpOiAoY2hpbGQpID0+IHZvaWQge1xuICAgIHJldHVybiAoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkVmFsdWUgPSBjaGlsZFtjaGlsZFZhbHVlRmllbGRdIHx8IGNoaWxkO1xuICAgICAgY29uc29sZS53YXJuKGBObyAke2NoaWxkTGFiZWx9IGZvdW5kIHdpdGggdmFsdWUgJHtjaGlsZFZhbHVlfSBmb3IgcGFyZW50ICR7cGFyZW50TGFiZWx9YCk7XG4gICAgfTtcbiAgfVxuXG4gIG9uRHJvcGRvd25Ub2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVmlld3BvcnRIZWlnaHQgPSB0aGlzLmdldFBpeGVsSGVpZ2h0KHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlLmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMudmlydHVhbFNjcm9sbEl0ZW1TaXplID0gdGhpcy5nZXRQaXhlbEhlaWdodCh0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QtaXRlbScpKTtcbiAgICB9XG4gIH1cblxuICBvbkl0ZW1Ub2dnbGVkKGl0ZW06IHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+IH0+IH0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgdGhpcy51cGRhdGVEZXNjZW5kYW50cyhpdGVtLnNlbGVjdGVkLCBpdGVtLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQYXJlbnRzQW5kUXVpY2tTZWxlY3QoKTtcbiAgICB0aGlzLnVwZGF0ZUNsZWFyQWxsKGl0ZW0uc2VsZWN0ZWQpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGVkVmFsdWVzKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBpbml0aWFsaXplRGVzY2VuZGFudFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAoJ2NoaWxkVHlwZU5hbWUnIGluIHRhYiAmJiB0YWIuZGF0YSAmJiB0YWIuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdGFiLmRhdGEuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHBhcmVudC5zZWxlY3RlZCAmJiBwYXJlbnQuY2hpbGRyZW4gJiYgcGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVEZXNjZW5kYW50cyhwYXJlbnRJc1NlbGVjdGVkOiBib29sZWFuLCBjaGlsZHJlbjogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW47IGNoaWxkcmVuPzogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT4gfT4pOiB2b2lkIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBwYXJlbnRJc1NlbGVjdGVkID8gKGl0ZW0uc2VsZWN0ZWQgPSB0cnVlKSA6IGRlbGV0ZSBpdGVtLnNlbGVjdGVkO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjZW5kYW50cyhpdGVtLnNlbGVjdGVkLCBpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNsZWFyQWxsKGl0ZW1XYXNKdXN0U2VsZWN0ZWQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93Q2xlYXJBbGwgPSBpdGVtV2FzSnVzdFNlbGVjdGVkXG4gICAgICA/IHRydWVcbiAgICAgIDogdGhpcy50YWJzLnNvbWUoKHRhYikgPT4ge1xuICAgICAgICBpZiAoKHRhYiBhcyBQYXJlbnRUYWIpLmNoaWxkVHlwZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdGFiLmRhdGEuc29tZSgoeyBzZWxlY3RlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PiBzZWxlY3RlZCB8fCBpbmRldGVybWluYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGFiLmRhdGEuc29tZSgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk6IHZvaWQge1xuICAgIC8vIG11dGF0ZSBoZXJlIHRvIGF2b2lkIGRlcmVmZXJlbmNpbmcgdGhlIG9iamVjdHMgaW4gZGlzcGxheVRhYnNcbiAgICB0aGlzLnRhYnNcbiAgICAgIC5maWx0ZXIoKHRhYikgPT4gJ2NoaWxkVHlwZU5hbWUnIGluIHRhYiAmJiAhIXRhYi5jaGlsZFR5cGVOYW1lKVxuICAgICAgLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRzID0gdGFiLmRhdGEuZmlsdGVyKCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBhbnlbXSB9KSA9PiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpO1xuXG4gICAgICAgIHBhcmVudHMuZm9yRWFjaCgocGFyZW50OiB7IGNoaWxkcmVuPzogeyBzZWxlY3RlZD86IGJvb2xlYW4gfVtdIH0pID0+IHtcbiAgICAgICAgICBbJ2luZGV0ZXJtaW5hdGUnLCAnc2VsZWN0ZWQnXS5mb3JFYWNoKChzZWxlY3RlZFN0YXRlT3B0aW9uKSA9PiBkZWxldGUgcGFyZW50W3NlbGVjdGVkU3RhdGVPcHRpb25dKTtcblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgcGFyZW50W3NlbGVjdGVkU3RhdGVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgcXVpY2tTZWxlY3Quc2VsZWN0ZWQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocXVpY2tTZWxlY3QuY2hpbGRyZW4gYXMgKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtdKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICBxdWlja1NlbGVjdFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkU3RhdGUgPSAoY2hpbGRBcnJheTogeyBzZWxlY3RlZD86IGJvb2xlYW47IGluZGV0ZXJtaW5hdGU/OiBib29sZWFuIH1bXSk6ICdzZWxlY3RlZCcgfCAnaW5kZXRlcm1pbmF0ZScgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IG51bWJlck9mU2VsZWN0ZWRJdGVtcyA9IGNoaWxkQXJyYXkuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKS5sZW5ndGg7XG4gICAgaWYgKCFudW1iZXJPZlNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXJPZlNlbGVjdGVkSXRlbXMgPT09IGNoaWxkQXJyYXkubGVuZ3RoID8gJ3NlbGVjdGVkJyA6ICdpbmRldGVybWluYXRlJztcbiAgfTtcblxuICBlbWl0U2VsZWN0ZWRWYWx1ZXMoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXM6IFRhYmJlZEdyb3VwUGlja2VyVGFiW10gPSB0aGlzLnRhYnMubWFwKCh0YWIpID0+ICh7XG4gICAgICAuLi50YWIsXG4gICAgICBkYXRhOiB0YWIuZGF0YS5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpLFxuICAgIH0pKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkVmFsdWVzKTtcbiAgfVxuXG4gIGRlc2VsZWN0RXZlcnl0aGluZyhldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNob3dDbGVhckFsbCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zLmZvckVhY2goKHF1aWNrU2VsZWN0KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBxdWlja1NlbGVjdC5zZWxlY3RlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAoKHRhYiBhcyBQYXJlbnRUYWIpLmNoaWxkVHlwZU5hbWUpIHtcbiAgICAgICAgdGFiLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgIGRlbGV0ZSBpdGVtLmluZGV0ZXJtaW5hdGU7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZGVsZXRlIGNoaWxkLnNlbGVjdGVkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAodGFiIGFzIENoaWxkVGFiKS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IGRlbGV0ZSBpdGVtLnNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RlZFZhbHVlcygpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25DbGVhckZpbHRlcihldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dCgnJyk7XG4gIH1cblxuICBvbkZpbHRlcihldmVudDogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9IH0pIHtcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyID0gKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xuICAgIHRoaXMuZGlzcGxheVRhYnMuZm9yRWFjaChcbiAgICAgIChkaXNwbGF5VGFiLCBpKSA9PlxuICAgICAgICAoZGlzcGxheVRhYi5kYXRhID0gdGhpcy50YWJzW2ldLmRhdGEuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICAgIGl0ZW1bZGlzcGxheVRhYi5sYWJlbEZpZWxkXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSksXG4gICAgICAgICkpLFxuICAgICk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH07XG59XG4iLCI8bm92by1kcm9wZG93biAodG9nZ2xlZCk9XCJvbkRyb3Bkb3duVG9nZ2xlKCRldmVudClcIj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1idXR0b25cIlxuICAgIFt0aGVtZV09XCJidXR0b25Db25maWcudGhlbWVcIlxuICAgIFtzaWRlXT1cImJ1dHRvbkNvbmZpZy5zaWRlXCJcbiAgICBbaWNvbl09XCJidXR0b25Db25maWcuaWNvblwiXG4gICAgW2xvYWRpbmddPVwibG9hZGluZ1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1idXR0b24tbGFiZWxcIj57eyBidXR0b25Db25maWcubGFiZWwgfX08L2Rpdj5cbiAgPC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLXNlYXJjaFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRhYmJlZC1ncm91cC1waWNrZXItc2VhcmNoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cImxhYmVsU2VydmljZS5zZWFyY2hcIiBbdmFsdWVdPVwiZmlsdGVyVGV4dCB8IGFzeW5jXCIgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudClcIiAvPlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiICpuZ0lmPVwiIShmaWx0ZXJUZXh0IHwgYXN5bmMpXCI+PC9pPlxuICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCIoZmlsdGVyVGV4dCB8IGFzeW5jKVwiIChjbGljayk9XCJvbkNsZWFyRmlsdGVyKCRldmVudClcIj48L2k+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1jb2x1bW4tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhYmJlZC1ncm91cC1waWNrZXItY29sdW1uIGxlZnRcIj5cbiAgICAgIDxub3ZvLW5hdiB0aGVtZT1cIndoaXRlXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgPG5vdm8tdGFiICpuZ0Zvcj1cImxldCB0YWIgb2YgZGlzcGxheVRhYnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwidGFiLnR5cGVOYW1lXCIgKGFjdGl2ZUNoYW5nZSk9XCJjaGFuZ2VUYWIodGFiKVwiPlxuICAgICAgICAgIDxzcGFuPnt7IHRhYi50eXBlTGFiZWwgfX0gKHt7IHRhYi5kYXRhLmxlbmd0aCB9fSk8L3NwYW4+PGkgY2xhc3M9XCJiaGktbmV4dFwiPjwvaT5cbiAgICAgICAgPC9ub3ZvLXRhYj5cbiAgICAgIDwvbm92by1uYXY+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0NsZWFyQWxsXCIgY2xhc3M9XCJjbGVhci1hbGwtYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIGljb249XCJ0aW1lc1wiIHNpZGU9XCJyaWdodFwiIGNvbG9yPVwiZ3JhcGVmcnVpdFwiIChjbGljayk9XCJkZXNlbGVjdEV2ZXJ5dGhpbmcoJGV2ZW50KVwiPnt7IGxhYmVsU2VydmljZS5jbGVhciB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLWNvbHVtbiByaWdodFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLXNlbGVjdFwiICpuZ0lmPVwicXVpY2tTZWxlY3RDb25maWcgJiYgIShmaWx0ZXJUZXh0IHwgYXN5bmMpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1zZWxlY3QtbGFiZWxcIj57eyBxdWlja1NlbGVjdENvbmZpZy5sYWJlbCB9fTwvZGl2PlxuICAgICAgICA8bm92by1saXN0IGNsYXNzPVwicXVpY2stc2VsZWN0LWxpc3RcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgY2xhc3M9XCJxdWljay1zZWxlY3QtaXRlbVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgcXVpY2tTZWxlY3Qgb2YgcXVpY2tTZWxlY3RDb25maWcuaXRlbXNcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInF1aWNrU2VsZWN0LmxhYmVsXCJcbiAgICAgICAgICAgIChjbGljayk9XCJxdWlja1NlbGVjdC5zZWxlY3RlZCA9ICFxdWlja1NlbGVjdC5zZWxlY3RlZDsgb25JdGVtVG9nZ2xlZChxdWlja1NlbGVjdClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cInF1aWNrU2VsZWN0LmxhYmVsXCJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInc2VsZWN0ZWQnXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInF1aWNrU2VsZWN0LnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkl0ZW1Ub2dnbGVkKHF1aWNrU2VsZWN0KVwiXG4gICAgICAgICAgICAgID48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5vdm8tbGlzdCAqbmdJZj1cImRpc3BsYXlUYWIuZGF0YS5sZW5ndGhcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XG4gICAgICAgICAgW2l0ZW1TaXplXT1cInZpcnR1YWxTY3JvbGxJdGVtU2l6ZVwiXG4gICAgICAgICAgW21heEJ1ZmZlclB4XT1cIm1heEJ1ZmZlclB4XCJcbiAgICAgICAgICBbbWluQnVmZmVyUHhdPVwibWluQnVmZmVyUHhcIlxuICAgICAgICAgICN0YWJiZWRHcm91cFBpY2tlclZpcnR1YWxTY3JvbGxWaWV3cG9ydFxuICAgICAgICA+XG4gICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGRpc3BsYXlUYWIuZGF0YVwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaXRlbVtkaXNwbGF5VGFiLmxhYmVsRmllbGRdXCJcbiAgICAgICAgICAgIChjbGljayk9XCJpdGVtLnNlbGVjdGVkID0gIWl0ZW0uc2VsZWN0ZWQ7IG9uSXRlbVRvZ2dsZWQoaXRlbSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cIml0ZW1bZGlzcGxheVRhYi5sYWJlbEZpZWxkXVwiXG4gICAgICAgICAgICAgICAgW25hbWVdPVwiJ3NlbGVjdGVkJ1wiXG4gICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiaXRlbS5pbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0uc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSXRlbVRvZ2dsZWQoaXRlbSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvbm92by1jaGVja2JveD5cbiAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1lbXB0eS1pdGVtXCIgKm5nSWY9XCIhZGlzcGxheVRhYi5kYXRhLmxlbmd0aCAmJiAoZmlsdGVyVGV4dCB8IGFzeW5jKVwiPlxuICAgICAgICA8aSBjbGFzcz1cInt7IGRpc3BsYXlUYWIuaWNvbiB8fCAnYmhpLXNlYXJjaCcgfX1cIj48L2k+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS1pdGVtLW1haW4tbWVzc2FnZVwiPnt7IGxhYmVsU2VydmljZS50YWJiZWRHcm91cFBpY2tlckVtcHR5IH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS1pdGVtLXN1Yi1tZXNzYWdlXCI+e3sgbGFiZWxTZXJ2aWNlLnRhYmJlZEdyb3VwQ2xlYXJTdWdnZXN0aW9uKGRpc3BsYXlUYWIudHlwZUxhYmVsKSB9fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9ub3ZvLWRyb3Bkb3duPlxuIl19