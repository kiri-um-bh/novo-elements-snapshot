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
const _c0 = ["tabbedGroupPickerVirtualScrollViewport"];
function NovoTabbedGroupPickerElement_i_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
function NovoTabbedGroupPickerElement_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 17);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_i_9_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onClearFilter($event); });
    i0.ɵɵelementEnd();
} }
function NovoTabbedGroupPickerElement_novo_tab_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-tab", 18);
    i0.ɵɵlistener("activeChange", function NovoTabbedGroupPickerElement_novo_tab_14_Template_novo_tab_activeChange_0_listener() { i0.ɵɵrestoreView(_r11); const tab_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.changeTab(tab_r9); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    i0.ɵɵattribute("data-automation-id", tab_r9.typeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", tab_r9.typeLabel, " (", tab_r9.data.length, ")");
} }
function NovoTabbedGroupPickerElement_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_button_15_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.deselectEverything($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labelService.clear);
} }
function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 25);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r17); const quickSelect_r15 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); quickSelect_r15.selected = !quickSelect_r15.selected; return ctx_r16.onItemToggled(quickSelect_r15); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelementStart(2, "novo-checkbox", 26);
    i0.ɵɵlistener("ngModelChange", function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template_novo_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r17); const quickSelect_r15 = ctx.$implicit; return quickSelect_r15.selected = $event; })("ngModelChange", function NovoTabbedGroupPickerElement_div_17_novo_list_item_4_Template_novo_checkbox_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r17); const quickSelect_r15 = ctx.$implicit; const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.onItemToggled(quickSelect_r15); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quickSelect_r15 = ctx.$implicit;
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
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.quickSelectConfig.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.quickSelectConfig.items);
} }
function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 31);
    i0.ɵɵlistener("click", function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r24); const item_r22 = ctx.$implicit; const ctx_r23 = i0.ɵɵnextContext(2); item_r22.selected = !item_r22.selected; return ctx_r23.onItemToggled(item_r22); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelementStart(2, "novo-checkbox", 32);
    i0.ɵɵlistener("ngModelChange", function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template_novo_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r24); const item_r22 = ctx.$implicit; return item_r22.selected = $event; })("ngModelChange", function NovoTabbedGroupPickerElement_novo_list_19_novo_list_item_3_Template_novo_checkbox_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r24); const item_r22 = ctx.$implicit; const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onItemToggled(item_r22); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
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
    const ctx_r5 = i0.ɵɵnextContext();
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
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r6.displayTab.icon || "bhi-search");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.labelService.tabbedGroupPickerEmpty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.labelService.tabbedGroupClearSuggestion(ctx_r6.displayTab.typeLabel));
} }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci50cyIsImVsZW1lbnRzL3RhYmJlZC1ncm91cC1waWNrZXIvVGFiYmVkR3JvdXBQaWNrZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pKLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDT3hELHdCQUF3RDs7OztJQUN4RCw2QkFBc0Y7SUFBcEMsd01BQStCO0lBQUMsaUJBQUk7Ozs7SUFLbEYsb0NBQ0U7SUFEaUYsNFBBQStCO0lBQ2hILDRCQUFNO0lBQUEsWUFBMkM7SUFBQSxpQkFBTztJQUFBLHdCQUF3QjtJQUNsRixpQkFBVzs7O0lBRitCLHFEQUF3QztJQUMxRSxlQUEyQztJQUEzQywwRUFBMkM7Ozs7SUFHckQsa0NBQXlKO0lBQXJDLDJOQUFvQztJQUFDLFlBQXdCO0lBQUEsaUJBQVM7OztJQUFqQyxlQUF3QjtJQUF4QiwrQ0FBd0I7Ozs7SUFNN0ssMENBTUU7SUFGQSw2VUFBa0Y7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QUF3QztZQUcxQyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBRUksZUFBZTtrQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1Njcm9sbGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IGJpbmFyeVNlYXJjaCwgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlclRhYiA9IHtcbiAgdHlwZU5hbWU6IHN0cmluZztcbiAgdHlwZUxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlRmllbGQ6IHN0cmluZztcbiAgbGFiZWxGaWVsZDogc3RyaW5nO1xuICBzY3JvbGxPZmZzZXQ/OiBudW1iZXI7XG4gIGljb24/OiBzdHJpbmc7XG59ICYgKFBhcmVudFRhYiB8IENoaWxkVGFiKTtcblxuZXhwb3J0IHR5cGUgUGFyZW50VGFiID0ge1xuICBjaGlsZFR5cGVOYW1lOiBzdHJpbmc7XG4gIGRhdGE6IEFycmF5PFBhcmVudE9wdGlvbj47XG59O1xuXG50eXBlIFBhcmVudE9wdGlvbiA9IHtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBpbmRldGVybWluYXRlPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+O1xufSAmIHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbmV4cG9ydCB0eXBlIENoaWxkVGFiID0ge1xuICBkYXRhOiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG59O1xuXG5leHBvcnQgdHlwZSBUYWJiZWRHcm91cFBpY2tlclF1aWNrU2VsZWN0ID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGNoaWxkVHlwZU5hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogKCh7IHNlbGVjdGVkPzogYm9vbGVhbiB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgfCAobnVtYmVyKSlbXTtcbiAgYWxsPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1aWNrU2VsZWN0Q29uZmlnID0geyBsYWJlbDogc3RyaW5nOyBpdGVtczogVGFiYmVkR3JvdXBQaWNrZXJRdWlja1NlbGVjdFtdIH07XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyQnV0dG9uQ29uZmlnID0ge1xuICB0aGVtZTogc3RyaW5nO1xuICBzaWRlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiYmVkLWdyb3VwLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9UYWJiZWRHcm91cFBpY2tlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJiZWRHcm91cFBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RhYmJlZEdyb3VwUGlja2VyVmlydHVhbFNjcm9sbFZpZXdwb3J0JylcbiAgcHJpdmF0ZSBzY3JvbGxhYmxlSW5zdGFuY2U6IENka1Njcm9sbGFibGU7XG5cbiAgQElucHV0KCkgYnV0dG9uQ29uZmlnOiBUYWJiZWRHcm91cFBpY2tlckJ1dHRvbkNvbmZpZztcbiAgQElucHV0KCkgdGFiczogVGFiYmVkR3JvdXBQaWNrZXJUYWJbXTtcbiAgQElucHV0KCkgcXVpY2tTZWxlY3RDb25maWc6IFF1aWNrU2VsZWN0Q29uZmlnO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZGlzcGxheVRhYnM6IFRhYmJlZEdyb3VwUGlja2VyVGFiW107XG4gIGRpc3BsYXlUYWJJbmRleDogbnVtYmVyID0gMDtcblxuICBmaWx0ZXJUZXh0OiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBmaWx0ZXJUZXh0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgbG9hZGluZyA9IHRydWU7XG4gIHNob3dDbGVhckFsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEluaXRpYWwgaGVpZ2h0IGJhc2VkIG9uIDEzIHB4IGZvbnQgcmVuZGVyZWQgaW4gY2hyb21lLiBBY3R1YWwgaGVpZ2h0IHJldHJpZXZlZCBvbkRyb3Bkb3duVG9nZ2xlZC5cbiAgc2Nyb2xsVmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IDM1MTtcbiAgdmlydHVhbFNjcm9sbEl0ZW1TaXplOiBudW1iZXIgPSAzOTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxTZXJ2aWNlOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgZ2V0IGRpc3BsYXlUYWIoKTogVGFiYmVkR3JvdXBQaWNrZXJUYWIge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXlUYWJzW3RoaXMuZGlzcGxheVRhYkluZGV4XTtcbiAgfVxuICBzZXQgZGlzcGxheVRhYih0YWI6IFRhYmJlZEdyb3VwUGlja2VyVGFiKSB7XG4gICAgdGhpcy5kaXNwbGF5VGFiSW5kZXggPSB0aGlzLnRhYnMubWFwKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lKS5pbmRleE9mKHRhYi50eXBlTmFtZSk7XG4gIH1cblxuICBnZXQgbWluQnVmZmVyUHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsVmlld3BvcnRIZWlnaHQ7IC8vIHJlbmRlciBhdCBsZWFzdCAyeCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHZpc2libGUgKHZpZXdwb3J0ICsgbWluIGJ1ZmZlcilcbiAgfVxuXG4gIGdldCBtYXhCdWZmZXJQeCgpIHtcbiAgICByZXR1cm4gMiAqIHRoaXMuc2Nyb2xsVmlld3BvcnRIZWlnaHQ7IC8vIHJlbmRlciBhdCBtb3N0IDN4IHRoZSBudW1iZXIgb2YgaXRlbXMgdmlzaWJsZSAodmlld3BvcnQgKyBtYXggYnVmZmVyKVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXR1cERpc3BsYXlEYXRhKCk7XG4gICAgdGhpcy5jcmVhdGVDaGlsZHJlblJlZmVyZW5jZXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVEZXNjZW5kYW50U2VsZWN0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVQYXJlbnRzQW5kUXVpY2tTZWxlY3QoKTtcbiAgICB0aGlzLnVwZGF0ZUNsZWFyQWxsKCk7XG5cbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlclRleHRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbHRlclRleHQucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHRoaXMuZmlsdGVyLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVyVGV4dFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5maWx0ZXJUZXh0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVGFiKHRhYjogVGFiYmVkR3JvdXBQaWNrZXJUYWIpIHtcbiAgICB0aGlzLmRpc3BsYXlUYWIgPSB0YWI7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5zY3JvbGxUbyh7IGJlaGF2aW9yOiAnYXV0bycsIHRvcDogMCB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRQaXhlbEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJykuaGVpZ2h0Lm1hdGNoKC8oXFxkKyhcXC5cXGQrKT8pcHgkLylbMV0pO1xuICB9XG5cbiAgc2V0dXBEaXNwbGF5RGF0YSgpOiB2b2lkIHtcbiAgICAvLyBzaGFsbG93IGNvcHkgaGVyZSBzbyB0aGF0IHJlYXNzaWduaW5nIGRpc3BsYXlUYWJzW2ldLmRhdGEgZG9lc24ndCBtdXRhdGUgdGFic1tpXS5kYXRhXG4gICAgLy8gYnV0IGJvdGggZGF0YSB2YWx1ZXMgcG9pbnQgdG8gdGhlIHNhbWUgaXRlbXNcbiAgICB0aGlzLmRpc3BsYXlUYWJzID0gdGhpcy50YWJzLm1hcCgodGFiKSA9PiAoeyAuLi50YWIgfSkpO1xuICAgIHRoaXMuZGlzcGxheVRhYiA9IHRoaXMudGFic1swXTtcbiAgfVxuXG4gIC8vIFJlcGxhY2UgZWFjaCBwYXJlbnQncyBjaGlsZCBvYmplY3Qgd2l0aCBhIHJlZmVyZW5jZSB0byB0aGUgY2hpbGQgdG8gYXZvaWRcbiAgLy8gYSBjaGlsZCBsb29rdXAgZm9yIHNlbGVjdGVkIHN0YXR1czsgbGlua2luZyByZWZlcmVuY2VzIGFsbG93cyBNIHggTlxuICAvLyB0aW1lIGNvbXBsZXhpdHkgaW5zdGVhZCBvZiBNIHggTl4yXG4gIGNyZWF0ZUNoaWxkcmVuUmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAvLyB3b3VsZCByYXRoZXIgZmlsdGVyIGJ1dCBUeXBlU2NyaXB0IHN0aWxsIHdhbnRzIGEgdHlwZSBuYXJyb3dpbmcgaGVyZVxuICAgICAgaWYgKCdjaGlsZFR5cGVOYW1lJyBpbiB0YWIpIHtcbiAgICAgICAgY29uc3QgY2hpbGRUYWIgPSB0aGlzLnRhYnMuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSA9PT0gdGFiLmNoaWxkVHlwZU5hbWUpO1xuICAgICAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSB0aGlzLm1ha2VDb21wYXJlRnVuY3Rpb24oY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgIGNvbnN0IHdhcm5GdW5jdGlvbiA9IHRoaXMubWFrZVdhcm5pbmdGdW5jdGlvbih0YWIudHlwZU5hbWUsIGNoaWxkVGFiLnR5cGVOYW1lLCBjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgY29uc3Qgc29ydGVkQ2hpbGRyZW4gPSBjaGlsZFRhYi5kYXRhLnNsaWNlKCkuc29ydChjb21wYXJlRnVuY3Rpb24pO1xuXG4gICAgICAgIHRhYi5kYXRhXG4gICAgICAgICAgLmZpbHRlcigoeyBjaGlsZHJlbiB9KSA9PiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgICAgLmZvckVhY2goKHBhcmVudDogeyBjaGlsZHJlbj86IGFueVtdIH0pID0+XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKHBhcmVudCBhcyBQYXJlbnRPcHRpb24sIHNvcnRlZENoaWxkcmVuLCBjb21wYXJlRnVuY3Rpb24sIHdhcm5GdW5jdGlvbiksXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtc1xuICAgICAgICAuZmlsdGVyKChwYXJlbnQpID0+ICdhbGwnIGluIHBhcmVudClcbiAgICAgICAgLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IHRoaXMudGFicy5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHBhcmVudC5jaGlsZFR5cGVOYW1lID09PSB0eXBlTmFtZSkuZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXNcbiAgICAgICAgLmZpbHRlcigocGFyZW50KSA9PiAhKCdhbGwnIGluIHBhcmVudCkpXG4gICAgICAgIC5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZFRhYiA9IHRoaXMudGFicy5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lID09PSBwYXJlbnQuY2hpbGRUeXBlTmFtZSk7XG4gICAgICAgICAgY29uc3QgY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5tYWtlQ29tcGFyZUZ1bmN0aW9uKGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICAgIGNvbnN0IHdhcm5GdW5jdGlvbiA9IHRoaXMubWFrZVdhcm5pbmdGdW5jdGlvbihwYXJlbnQubGFiZWwsIGNoaWxkVGFiLnR5cGVOYW1lLCBjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IGNoaWxkVGFiLmRhdGEuc2xpY2UoKS5zb3J0KGNvbXBhcmVGdW5jdGlvbik7XG5cbiAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKHBhcmVudCBhcyBQYXJlbnRPcHRpb24sIHNvcnRlZENoaWxkcmVuLCBjb21wYXJlRnVuY3Rpb24sIHdhcm5GdW5jdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VDb21wYXJlRnVuY3Rpb248VD4oa2V5OiBzdHJpbmcpOiAoYTogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9LCBiOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0pID0+IDEgfCAtMSB8IDAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAoYTogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9LCBiOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0pID0+IHtcbiAgICAgIGNvbnN0IGFWYWx1ZTogVCA9IChhICYmIGFba2V5XSkgfHwgYTtcbiAgICAgIGNvbnN0IGJWYWx1ZTogVCA9IChiICYmIGJba2V5XSkgfHwgYjtcblxuICAgICAgaWYgKGFWYWx1ZSA8IGJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGFWYWx1ZSA+IGJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAoYVZhbHVlID09PSBiVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhcbiAgICBwYXJlbnQ6IHsgY2hpbGRyZW46IGFueVtdIH0sXG4gICAgc29ydGVkRGF0YTogQ2hpbGRUYWJbJ2RhdGEnXSxcbiAgICBjb21wYXJlRnVuY3Rpb246IChhLCBiKSA9PiAxIHwgLTEgfCAwLFxuICAgIHdhcm5GdW5jdGlvbjogKGNoaWxkKSA9PiB2b2lkLFxuICApOiB2b2lkIHtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW5cbiAgICAgIC5tYXAoKGNoaWxkKSA9PiBiaW5hcnlTZWFyY2goY2hpbGQsIHNvcnRlZERhdGEsIGNvbXBhcmVGdW5jdGlvbikgfHwgd2FybkZ1bmN0aW9uKGNoaWxkKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbik7IC8vIHNpbmNlIG1hcCBjYW4gcmV0dXJuIHVuZGVmaW5lZCwgcmVtb3ZlIHVuZGVmaW5lZCBlbGVtZW50c1xuICB9XG5cbiAgbWFrZVdhcm5pbmdGdW5jdGlvbihwYXJlbnRMYWJlbDogc3RyaW5nLCBjaGlsZExhYmVsOiBzdHJpbmcsIGNoaWxkVmFsdWVGaWVsZCk6IChjaGlsZCkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRWYWx1ZSA9IGNoaWxkW2NoaWxkVmFsdWVGaWVsZF0gfHwgY2hpbGQ7XG4gICAgICBjb25zb2xlLndhcm4oYE5vICR7Y2hpbGRMYWJlbH0gZm91bmQgd2l0aCB2YWx1ZSAke2NoaWxkVmFsdWV9IGZvciBwYXJlbnQgJHtwYXJlbnRMYWJlbH1gKTtcbiAgICB9O1xuICB9XG5cbiAgb25Ecm9wZG93blRvZ2dsZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxIZWlnaHQodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPSB0aGlzLmdldFBpeGVsSGVpZ2h0KHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlLmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdC1pdGVtJykpO1xuICAgIH1cbiAgfVxuXG4gIG9uSXRlbVRvZ2dsZWQoaXRlbTogeyBzZWxlY3RlZD86IGJvb2xlYW47IGNoaWxkcmVuPzogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW47IGNoaWxkcmVuPzogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT4gfT4gfSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICB0aGlzLnVwZGF0ZURlc2NlbmRhbnRzKGl0ZW0uc2VsZWN0ZWQsIGl0ZW0uY2hpbGRyZW4pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBhcmVudHNBbmRRdWlja1NlbGVjdCgpO1xuICAgIHRoaXMudXBkYXRlQ2xlYXJBbGwoaXRlbS5zZWxlY3RlZCk7XG4gICAgdGhpcy5lbWl0U2VsZWN0ZWRWYWx1ZXMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGluaXRpYWxpemVEZXNjZW5kYW50U2VsZWN0aW9uKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGlmICgnY2hpbGRUeXBlTmFtZScgaW4gdGFiICYmIHRhYi5kYXRhICYmIHRhYi5kYXRhLmxlbmd0aCkge1xuICAgICAgICB0YWIuZGF0YS5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBpZiAocGFyZW50LnNlbGVjdGVkICYmIHBhcmVudC5jaGlsZHJlbiAmJiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgY2hpbGQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURlc2NlbmRhbnRzKHBhcmVudElzU2VsZWN0ZWQ6IGJvb2xlYW4sIGNoaWxkcmVuOiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbjsgY2hpbGRyZW4/OiBBcnJheTx7IHNlbGVjdGVkPzogYm9vbGVhbiB9PiB9Pik6IHZvaWQge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHBhcmVudElzU2VsZWN0ZWQgPyAoaXRlbS5zZWxlY3RlZCA9IHRydWUpIDogZGVsZXRlIGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZURlc2NlbmRhbnRzKGl0ZW0uc2VsZWN0ZWQsIGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ2xlYXJBbGwoaXRlbVdhc0p1c3RTZWxlY3RlZD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dDbGVhckFsbCA9IGl0ZW1XYXNKdXN0U2VsZWN0ZWRcbiAgICAgID8gdHJ1ZVxuICAgICAgOiB0aGlzLnRhYnMuc29tZSgodGFiKSA9PiB7XG4gICAgICAgIGlmICgodGFiIGFzIFBhcmVudFRhYikuY2hpbGRUeXBlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0YWIuZGF0YS5zb21lKCh7IHNlbGVjdGVkLCBpbmRldGVybWluYXRlIH0pID0+IHNlbGVjdGVkIHx8IGluZGV0ZXJtaW5hdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0YWIuZGF0YS5zb21lKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRzQW5kUXVpY2tTZWxlY3QoKTogdm9pZCB7XG4gICAgLy8gbXV0YXRlIGhlcmUgdG8gYXZvaWQgZGVyZWZlcmVuY2luZyB0aGUgb2JqZWN0cyBpbiBkaXNwbGF5VGFic1xuICAgIHRoaXMudGFic1xuICAgICAgLmZpbHRlcigodGFiKSA9PiAnY2hpbGRUeXBlTmFtZScgaW4gdGFiICYmICEhdGFiLmNoaWxkVHlwZU5hbWUpXG4gICAgICAuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudHMgPSB0YWIuZGF0YS5maWx0ZXIoKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbj86IGFueVtdIH0pID0+IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCk7XG5cbiAgICAgICAgcGFyZW50cy5mb3JFYWNoKChwYXJlbnQ6IHsgY2hpbGRyZW4/OiB7IHNlbGVjdGVkPzogYm9vbGVhbiB9W10gfSkgPT4ge1xuICAgICAgICAgIFsnaW5kZXRlcm1pbmF0ZScsICdzZWxlY3RlZCddLmZvckVhY2goKHNlbGVjdGVkU3RhdGVPcHRpb24pID0+IGRlbGV0ZSBwYXJlbnRbc2VsZWN0ZWRTdGF0ZU9wdGlvbl0pO1xuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRTdGF0ZShwYXJlbnQuY2hpbGRyZW4pO1xuICAgICAgICAgIGlmIChzZWxlY3RlZFN0YXRlKSB7XG4gICAgICAgICAgICBwYXJlbnRbc2VsZWN0ZWRTdGF0ZV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zLmZvckVhY2goKHF1aWNrU2VsZWN0KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBxdWlja1NlbGVjdC5zZWxlY3RlZDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRTdGF0ZShxdWlja1NlbGVjdC5jaGlsZHJlbiBhcyAoeyBzZWxlY3RlZD86IGJvb2xlYW4gfSAmIHsgW2tleTogc3RyaW5nXTogYW55IH0pW10pO1xuICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgIHF1aWNrU2VsZWN0W3NlbGVjdGVkU3RhdGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRTdGF0ZSA9IChjaGlsZEFycmF5OiB7IHNlbGVjdGVkPzogYm9vbGVhbjsgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW4gfVtdKTogJ3NlbGVjdGVkJyB8ICdpbmRldGVybWluYXRlJyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgbnVtYmVyT2ZTZWxlY3RlZEl0ZW1zID0gY2hpbGRBcnJheS5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpLmxlbmd0aDtcbiAgICBpZiAoIW51bWJlck9mU2VsZWN0ZWRJdGVtcykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlck9mU2VsZWN0ZWRJdGVtcyA9PT0gY2hpbGRBcnJheS5sZW5ndGggPyAnc2VsZWN0ZWQnIDogJ2luZGV0ZXJtaW5hdGUnO1xuICB9O1xuXG4gIGVtaXRTZWxlY3RlZFZhbHVlcygpIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlczogVGFiYmVkR3JvdXBQaWNrZXJUYWJbXSA9IHRoaXMudGFicy5tYXAoKHRhYikgPT4gKHtcbiAgICAgIC4uLnRhYixcbiAgICAgIGRhdGE6IHRhYi5kYXRhLmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCksXG4gICAgfSkpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoc2VsZWN0ZWRWYWx1ZXMpO1xuICB9XG5cbiAgZGVzZWxlY3RFdmVyeXRoaW5nKGV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2hvd0NsZWFyQWxsID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucXVpY2tTZWxlY3RDb25maWcpIHtcbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXMuZm9yRWFjaCgocXVpY2tTZWxlY3QpID0+IHtcbiAgICAgICAgZGVsZXRlIHF1aWNrU2VsZWN0LnNlbGVjdGVkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGlmICgodGFiIGFzIFBhcmVudFRhYikuY2hpbGRUeXBlTmFtZSkge1xuICAgICAgICB0YWIuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgICAgZGVsZXRlIGl0ZW0uaW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBkZWxldGUgY2hpbGQuc2VsZWN0ZWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICh0YWIgYXMgQ2hpbGRUYWIpLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4gZGVsZXRlIGl0ZW0uc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdFNlbGVjdGVkVmFsdWVzKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkNsZWFyRmlsdGVyKGV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuZmlsdGVyVGV4dC5uZXh0KCcnKTtcbiAgfVxuXG4gIG9uRmlsdGVyKGV2ZW50OiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH0gfSkge1xuICAgIHRoaXMuZmlsdGVyVGV4dC5uZXh0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmaWx0ZXIgPSAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5VGFicy5mb3JFYWNoKFxuICAgICAgKGRpc3BsYXlUYWIsIGkpID0+XG4gICAgICAgIChkaXNwbGF5VGFiLmRhdGEgPSB0aGlzLnRhYnNbaV0uZGF0YS5maWx0ZXIoKGl0ZW0pID0+XG4gICAgICAgICAgaXRlbVtkaXNwbGF5VGFiLmxhYmVsRmllbGRdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgKSksXG4gICAgKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfTtcbn1cbiIsIjxub3ZvLWRyb3Bkb3duICh0b2dnbGVkKT1cIm9uRHJvcGRvd25Ub2dnbGUoJGV2ZW50KVwiPlxuICA8YnV0dG9uXG4gICAgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLWJ1dHRvblwiXG4gICAgW3RoZW1lXT1cImJ1dHRvbkNvbmZpZy50aGVtZVwiXG4gICAgW3NpZGVdPVwiYnV0dG9uQ29uZmlnLnNpZGVcIlxuICAgIFtpY29uXT1cImJ1dHRvbkNvbmZpZy5pY29uXCJcbiAgICBbbG9hZGluZ109XCJsb2FkaW5nXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLWJ1dHRvbi1sYWJlbFwiPnt7IGJ1dHRvbkNvbmZpZy5sYWJlbCB9fTwvZGl2PlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cInRhYmJlZC1ncm91cC1waWNrZXItc2VhcmNoXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGFiYmVkLWdyb3VwLXBpY2tlci1zZWFyY2hcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwibGFiZWxTZXJ2aWNlLnNlYXJjaFwiIFt2YWx1ZV09XCJmaWx0ZXJUZXh0IHwgYXN5bmNcIiAoaW5wdXQpPVwib25GaWx0ZXIoJGV2ZW50KVwiIC8+XG4gICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhKGZpbHRlclRleHQgfCBhc3luYylcIj48L2k+XG4gICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIiAqbmdJZj1cIihmaWx0ZXJUZXh0IHwgYXN5bmMpXCIgKGNsaWNrKT1cIm9uQ2xlYXJGaWx0ZXIoJGV2ZW50KVwiPjwvaT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLWNvbHVtbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1jb2x1bW4gbGVmdFwiPlxuICAgICAgPG5vdm8tbmF2IHRoZW1lPVwid2hpdGVcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICA8bm92by10YWIgKm5nRm9yPVwibGV0IHRhYiBvZiBkaXNwbGF5VGFic1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJ0YWIudHlwZU5hbWVcIiAoYWN0aXZlQ2hhbmdlKT1cImNoYW5nZVRhYih0YWIpXCI+XG4gICAgICAgICAgPHNwYW4+e3sgdGFiLnR5cGVMYWJlbCB9fSAoe3sgdGFiLmRhdGEubGVuZ3RoIH19KTwvc3Bhbj48aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICA8L25vdm8tdGFiPlxuICAgICAgPC9ub3ZvLW5hdj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93Q2xlYXJBbGxcIiBjbGFzcz1cImNsZWFyLWFsbC1idXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cInRpbWVzXCIgc2lkZT1cInJpZ2h0XCIgY29sb3I9XCJncmFwZWZydWl0XCIgKGNsaWNrKT1cImRlc2VsZWN0RXZlcnl0aGluZygkZXZlbnQpXCI+e3sgbGFiZWxTZXJ2aWNlLmNsZWFyIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhYmJlZC1ncm91cC1waWNrZXItY29sdW1uIHJpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicXVpY2stc2VsZWN0XCIgKm5nSWY9XCJxdWlja1NlbGVjdENvbmZpZyAmJiAhKGZpbHRlclRleHQgfCBhc3luYylcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLXNlbGVjdC1sYWJlbFwiPnt7IHF1aWNrU2VsZWN0Q29uZmlnLmxhYmVsIH19PC9kaXY+XG4gICAgICAgIDxub3ZvLWxpc3QgY2xhc3M9XCJxdWljay1zZWxlY3QtbGlzdFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICBjbGFzcz1cInF1aWNrLXNlbGVjdC1pdGVtXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBxdWlja1NlbGVjdCBvZiBxdWlja1NlbGVjdENvbmZpZy5pdGVtc1wiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwicXVpY2tTZWxlY3QubGFiZWxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInF1aWNrU2VsZWN0LnNlbGVjdGVkID0gIXF1aWNrU2VsZWN0LnNlbGVjdGVkOyBvbkl0ZW1Ub2dnbGVkKHF1aWNrU2VsZWN0KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgPG5vdm8tY2hlY2tib3hcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwicXVpY2tTZWxlY3QubGFiZWxcIlxuICAgICAgICAgICAgICAgIFtuYW1lXT1cIidzZWxlY3RlZCdcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwicXVpY2tTZWxlY3Quc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSXRlbVRvZ2dsZWQocXVpY2tTZWxlY3QpXCJcbiAgICAgICAgICAgICAgPjwvbm92by1jaGVja2JveD5cbiAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8bm92by1saXN0ICpuZ0lmPVwiZGlzcGxheVRhYi5kYXRhLmxlbmd0aFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnRcbiAgICAgICAgICBbaXRlbVNpemVdPVwidmlydHVhbFNjcm9sbEl0ZW1TaXplXCJcbiAgICAgICAgICBbbWF4QnVmZmVyUHhdPVwibWF4QnVmZmVyUHhcIlxuICAgICAgICAgIFttaW5CdWZmZXJQeF09XCJtaW5CdWZmZXJQeFwiXG4gICAgICAgICAgI3RhYmJlZEdyb3VwUGlja2VyVmlydHVhbFNjcm9sbFZpZXdwb3J0XG4gICAgICAgID5cbiAgICAgICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgICAgICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgZGlzcGxheVRhYi5kYXRhXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJpdGVtW2Rpc3BsYXlUYWIubGFiZWxGaWVsZF1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIml0ZW0uc2VsZWN0ZWQgPSAhaXRlbS5zZWxlY3RlZDsgb25JdGVtVG9nZ2xlZChpdGVtKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgPG5vdm8tY2hlY2tib3hcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwiaXRlbVtkaXNwbGF5VGFiLmxhYmVsRmllbGRdXCJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInc2VsZWN0ZWQnXCJcbiAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpdGVtLmluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JdGVtVG9nZ2xlZChpdGVtKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9ub3ZvLWNoZWNrYm94PlxuICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgICA8L25vdm8tbGlzdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLWVtcHR5LWl0ZW1cIiAqbmdJZj1cIiFkaXNwbGF5VGFiLmRhdGEubGVuZ3RoICYmIChmaWx0ZXJUZXh0IHwgYXN5bmMpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwie3sgZGlzcGxheVRhYi5pY29uIHx8ICdiaGktc2VhcmNoJyB9fVwiPjwvaT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5LWl0ZW0tbWFpbi1tZXNzYWdlXCI+e3sgbGFiZWxTZXJ2aWNlLnRhYmJlZEdyb3VwUGlja2VyRW1wdHkgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5LWl0ZW0tc3ViLW1lc3NhZ2VcIj57eyBsYWJlbFNlcnZpY2UudGFiYmVkR3JvdXBDbGVhclN1Z2dlc3Rpb24oZGlzcGxheVRhYi50eXBlTGFiZWwpIH19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25vdm8tZHJvcGRvd24+XG4iXX0=