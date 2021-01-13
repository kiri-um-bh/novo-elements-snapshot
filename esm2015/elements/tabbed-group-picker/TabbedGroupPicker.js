import { CdkScrollable } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJiZWQtZ3JvdXAtcGlja2VyL1RhYmJlZEdyb3VwUGlja2VyLnRzIiwiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDSHhELHdCQUF3RDs7OztJQUN4RCw2QkFBc0Y7SUFBcEMsd01BQStCO0lBQUMsaUJBQUk7Ozs7SUFLbEYsb0NBQ0U7SUFEaUYsNFBBQStCO0lBQ2hILDRCQUFNO0lBQUEsWUFBMkM7SUFBQSxpQkFBTztJQUFBLHdCQUF3QjtJQUNsRixpQkFBVzs7O0lBRitCLHFEQUF3QztJQUMxRSxlQUEyQztJQUEzQywwRUFBMkM7Ozs7SUFHckQsa0NBQXlKO0lBQXJDLDJOQUFvQztJQUFDLFlBQXdCO0lBQUEsaUJBQVM7OztJQUFqQyxlQUF3QjtJQUF4QiwrQ0FBd0I7Ozs7SUFNN0ssMENBTUU7SUFGQSw2VUFBa0Y7SUFF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QUcxQyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBRUksZUFBZTtrQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1Njcm9sbGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgYmluYXJ5U2VhcmNoLCBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyVGFiID0ge1xuICB0eXBlTmFtZTogc3RyaW5nO1xuICB0eXBlTGFiZWw6IHN0cmluZztcbiAgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBsYWJlbEZpZWxkOiBzdHJpbmc7XG4gIHNjcm9sbE9mZnNldD86IG51bWJlcjtcbiAgaWNvbj86IHN0cmluZztcbn0gJiAoUGFyZW50VGFiIHwgQ2hpbGRUYWIpO1xuXG5leHBvcnQgdHlwZSBQYXJlbnRUYWIgPSB7XG4gIGNoaWxkVHlwZU5hbWU6IHN0cmluZztcbiAgZGF0YTogQXJyYXk8UGFyZW50T3B0aW9uPjtcbn07XG5cbnR5cGUgUGFyZW50T3B0aW9uID0ge1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xuICBjaGlsZHJlbjogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT47XG59ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuZXhwb3J0IHR5cGUgQ2hpbGRUYWIgPSB7XG4gIGRhdGE6IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyUXVpY2tTZWxlY3QgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgY2hpbGRUeXBlTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiAoKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB8IG51bWJlcilbXTtcbiAgYWxsPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1aWNrU2VsZWN0Q29uZmlnID0geyBsYWJlbDogc3RyaW5nOyBpdGVtczogVGFiYmVkR3JvdXBQaWNrZXJRdWlja1NlbGVjdFtdIH07XG5cbmV4cG9ydCB0eXBlIFRhYmJlZEdyb3VwUGlja2VyQnV0dG9uQ29uZmlnID0ge1xuICB0aGVtZTogc3RyaW5nO1xuICBzaWRlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiYmVkLWdyb3VwLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9UYWJiZWRHcm91cFBpY2tlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJiZWRHcm91cFBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RhYmJlZEdyb3VwUGlja2VyVmlydHVhbFNjcm9sbFZpZXdwb3J0JylcbiAgcHJpdmF0ZSBzY3JvbGxhYmxlSW5zdGFuY2U6IENka1Njcm9sbGFibGU7XG5cbiAgQElucHV0KCkgYnV0dG9uQ29uZmlnOiBUYWJiZWRHcm91cFBpY2tlckJ1dHRvbkNvbmZpZztcbiAgQElucHV0KCkgdGFiczogVGFiYmVkR3JvdXBQaWNrZXJUYWJbXTtcbiAgQElucHV0KCkgcXVpY2tTZWxlY3RDb25maWc6IFF1aWNrU2VsZWN0Q29uZmlnO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZGlzcGxheVRhYnM6IFRhYmJlZEdyb3VwUGlja2VyVGFiW107XG4gIGRpc3BsYXlUYWJJbmRleDogbnVtYmVyID0gMDtcblxuICBmaWx0ZXJUZXh0OiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBmaWx0ZXJUZXh0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgbG9hZGluZyA9IHRydWU7XG4gIHNob3dDbGVhckFsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEluaXRpYWwgaGVpZ2h0IGJhc2VkIG9uIDEzIHB4IGZvbnQgcmVuZGVyZWQgaW4gY2hyb21lLiBBY3R1YWwgaGVpZ2h0IHJldHJpZXZlZCBvbkRyb3Bkb3duVG9nZ2xlZC5cbiAgc2Nyb2xsVmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IDM1MTtcbiAgdmlydHVhbFNjcm9sbEl0ZW1TaXplOiBudW1iZXIgPSAzOTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxTZXJ2aWNlOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgZ2V0IGRpc3BsYXlUYWIoKTogVGFiYmVkR3JvdXBQaWNrZXJUYWIge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXlUYWJzW3RoaXMuZGlzcGxheVRhYkluZGV4XTtcbiAgfVxuICBzZXQgZGlzcGxheVRhYih0YWI6IFRhYmJlZEdyb3VwUGlja2VyVGFiKSB7XG4gICAgdGhpcy5kaXNwbGF5VGFiSW5kZXggPSB0aGlzLnRhYnMubWFwKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lKS5pbmRleE9mKHRhYi50eXBlTmFtZSk7XG4gIH1cblxuICBnZXQgbWluQnVmZmVyUHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsVmlld3BvcnRIZWlnaHQ7IC8vIHJlbmRlciBhdCBsZWFzdCAyeCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHZpc2libGUgKHZpZXdwb3J0ICsgbWluIGJ1ZmZlcilcbiAgfVxuXG4gIGdldCBtYXhCdWZmZXJQeCgpIHtcbiAgICByZXR1cm4gMiAqIHRoaXMuc2Nyb2xsVmlld3BvcnRIZWlnaHQ7IC8vIHJlbmRlciBhdCBtb3N0IDN4IHRoZSBudW1iZXIgb2YgaXRlbXMgdmlzaWJsZSAodmlld3BvcnQgKyBtYXggYnVmZmVyKVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXR1cERpc3BsYXlEYXRhKCk7XG4gICAgdGhpcy5jcmVhdGVDaGlsZHJlblJlZmVyZW5jZXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVEZXNjZW5kYW50U2VsZWN0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVQYXJlbnRzQW5kUXVpY2tTZWxlY3QoKTtcbiAgICB0aGlzLnVwZGF0ZUNsZWFyQWxsKCk7XG5cbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlclRleHRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbHRlclRleHQucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHRoaXMuZmlsdGVyLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVyVGV4dFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5maWx0ZXJUZXh0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVGFiKHRhYjogVGFiYmVkR3JvdXBQaWNrZXJUYWIpIHtcbiAgICB0aGlzLmRpc3BsYXlUYWIgPSB0YWI7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYWJsZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5zY3JvbGxUbyh7IGJlaGF2aW9yOiAnYXV0bycsIHRvcDogMCB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRQaXhlbEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJykuaGVpZ2h0Lm1hdGNoKC8oXFxkKyhcXC5cXGQrKT8pcHgkLylbMV0pO1xuICB9XG5cbiAgc2V0dXBEaXNwbGF5RGF0YSgpOiB2b2lkIHtcbiAgICAvLyBzaGFsbG93IGNvcHkgaGVyZSBzbyB0aGF0IHJlYXNzaWduaW5nIGRpc3BsYXlUYWJzW2ldLmRhdGEgZG9lc24ndCBtdXRhdGUgdGFic1tpXS5kYXRhXG4gICAgLy8gYnV0IGJvdGggZGF0YSB2YWx1ZXMgcG9pbnQgdG8gdGhlIHNhbWUgaXRlbXNcbiAgICB0aGlzLmRpc3BsYXlUYWJzID0gdGhpcy50YWJzLm1hcCgodGFiKSA9PiAoeyAuLi50YWIgfSkpO1xuICAgIHRoaXMuZGlzcGxheVRhYiA9IHRoaXMudGFic1swXTtcbiAgfVxuXG4gIC8vIFJlcGxhY2UgZWFjaCBwYXJlbnQncyBjaGlsZCBvYmplY3Qgd2l0aCBhIHJlZmVyZW5jZSB0byB0aGUgY2hpbGQgdG8gYXZvaWRcbiAgLy8gYSBjaGlsZCBsb29rdXAgZm9yIHNlbGVjdGVkIHN0YXR1czsgbGlua2luZyByZWZlcmVuY2VzIGFsbG93cyBNIHggTlxuICAvLyB0aW1lIGNvbXBsZXhpdHkgaW5zdGVhZCBvZiBNIHggTl4yXG4gIGNyZWF0ZUNoaWxkcmVuUmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAvLyB3b3VsZCByYXRoZXIgZmlsdGVyIGJ1dCBUeXBlU2NyaXB0IHN0aWxsIHdhbnRzIGEgdHlwZSBuYXJyb3dpbmcgaGVyZVxuICAgICAgaWYgKCdjaGlsZFR5cGVOYW1lJyBpbiB0YWIpIHtcbiAgICAgICAgY29uc3QgY2hpbGRUYWIgPSB0aGlzLnRhYnMuZmluZCgoeyB0eXBlTmFtZSB9KSA9PiB0eXBlTmFtZSA9PT0gdGFiLmNoaWxkVHlwZU5hbWUpO1xuICAgICAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSB0aGlzLm1ha2VDb21wYXJlRnVuY3Rpb24oY2hpbGRUYWIudmFsdWVGaWVsZCk7XG4gICAgICAgIGNvbnN0IHdhcm5GdW5jdGlvbiA9IHRoaXMubWFrZVdhcm5pbmdGdW5jdGlvbih0YWIudHlwZU5hbWUsIGNoaWxkVGFiLnR5cGVOYW1lLCBjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgY29uc3Qgc29ydGVkQ2hpbGRyZW4gPSBjaGlsZFRhYi5kYXRhLnNsaWNlKCkuc29ydChjb21wYXJlRnVuY3Rpb24pO1xuXG4gICAgICAgIHRhYi5kYXRhXG4gICAgICAgICAgLmZpbHRlcigoeyBjaGlsZHJlbiB9KSA9PiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgICAgLmZvckVhY2goKHBhcmVudDogeyBjaGlsZHJlbj86IGFueVtdIH0pID0+XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKHBhcmVudCBhcyBQYXJlbnRPcHRpb24sIHNvcnRlZENoaWxkcmVuLCBjb21wYXJlRnVuY3Rpb24sIHdhcm5GdW5jdGlvbiksXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtc1xuICAgICAgICAuZmlsdGVyKChwYXJlbnQpID0+ICdhbGwnIGluIHBhcmVudClcbiAgICAgICAgLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IHRoaXMudGFicy5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHBhcmVudC5jaGlsZFR5cGVOYW1lID09PSB0eXBlTmFtZSkuZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMucXVpY2tTZWxlY3RDb25maWcuaXRlbXNcbiAgICAgICAgLmZpbHRlcigocGFyZW50KSA9PiAhKCdhbGwnIGluIHBhcmVudCkpXG4gICAgICAgIC5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZFRhYiA9IHRoaXMudGFicy5maW5kKCh7IHR5cGVOYW1lIH0pID0+IHR5cGVOYW1lID09PSBwYXJlbnQuY2hpbGRUeXBlTmFtZSk7XG4gICAgICAgICAgY29uc3QgY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5tYWtlQ29tcGFyZUZ1bmN0aW9uKGNoaWxkVGFiLnZhbHVlRmllbGQpO1xuICAgICAgICAgIGNvbnN0IHdhcm5GdW5jdGlvbiA9IHRoaXMubWFrZVdhcm5pbmdGdW5jdGlvbihwYXJlbnQubGFiZWwsIGNoaWxkVGFiLnR5cGVOYW1lLCBjaGlsZFRhYi52YWx1ZUZpZWxkKTtcbiAgICAgICAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IGNoaWxkVGFiLmRhdGEuc2xpY2UoKS5zb3J0KGNvbXBhcmVGdW5jdGlvbik7XG5cbiAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbldpdGhSZWZlcmVuY2VzKHBhcmVudCBhcyBQYXJlbnRPcHRpb24sIHNvcnRlZENoaWxkcmVuLCBjb21wYXJlRnVuY3Rpb24sIHdhcm5GdW5jdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VDb21wYXJlRnVuY3Rpb248VD4oa2V5OiBzdHJpbmcpOiAoYTogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9LCBiOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0pID0+IDEgfCAtMSB8IDAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAoYTogVCB8IHsgW2tleTogc3RyaW5nXTogVCB9LCBiOiBUIHwgeyBba2V5OiBzdHJpbmddOiBUIH0pID0+IHtcbiAgICAgIGNvbnN0IGFWYWx1ZTogVCA9IChhICYmIGFba2V5XSkgfHwgYTtcbiAgICAgIGNvbnN0IGJWYWx1ZTogVCA9IChiICYmIGJba2V5XSkgfHwgYjtcblxuICAgICAgaWYgKGFWYWx1ZSA8IGJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGFWYWx1ZSA+IGJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAoYVZhbHVlID09PSBiVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXBsYWNlQ2hpbGRyZW5XaXRoUmVmZXJlbmNlcyhcbiAgICBwYXJlbnQ6IHsgY2hpbGRyZW46IGFueVtdIH0sXG4gICAgc29ydGVkRGF0YTogQ2hpbGRUYWJbJ2RhdGEnXSxcbiAgICBjb21wYXJlRnVuY3Rpb246IChhLCBiKSA9PiAxIHwgLTEgfCAwLFxuICAgIHdhcm5GdW5jdGlvbjogKGNoaWxkKSA9PiB2b2lkLFxuICApOiB2b2lkIHtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW5cbiAgICAgIC5tYXAoKGNoaWxkKSA9PiBiaW5hcnlTZWFyY2goY2hpbGQsIHNvcnRlZERhdGEsIGNvbXBhcmVGdW5jdGlvbikgfHwgd2FybkZ1bmN0aW9uKGNoaWxkKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbik7IC8vIHNpbmNlIG1hcCBjYW4gcmV0dXJuIHVuZGVmaW5lZCwgcmVtb3ZlIHVuZGVmaW5lZCBlbGVtZW50c1xuICB9XG5cbiAgbWFrZVdhcm5pbmdGdW5jdGlvbihwYXJlbnRMYWJlbDogc3RyaW5nLCBjaGlsZExhYmVsOiBzdHJpbmcsIGNoaWxkVmFsdWVGaWVsZCk6IChjaGlsZCkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRWYWx1ZSA9IGNoaWxkW2NoaWxkVmFsdWVGaWVsZF0gfHwgY2hpbGQ7XG4gICAgICBjb25zb2xlLndhcm4oYE5vICR7Y2hpbGRMYWJlbH0gZm91bmQgd2l0aCB2YWx1ZSAke2NoaWxkVmFsdWV9IGZvciBwYXJlbnQgJHtwYXJlbnRMYWJlbH1gKTtcbiAgICB9O1xuICB9XG5cbiAgb25Ecm9wZG93blRvZ2dsZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5zY3JvbGxWaWV3cG9ydEhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxIZWlnaHQodGhpcy5zY3JvbGxhYmxlSW5zdGFuY2UuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPSB0aGlzLmdldFBpeGVsSGVpZ2h0KFxuICAgICAgICB0aGlzLnNjcm9sbGFibGVJbnN0YW5jZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QtaXRlbScpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbkl0ZW1Ub2dnbGVkKGl0ZW06IHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuOyBjaGlsZHJlbj86IEFycmF5PHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+IH0+IH0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgdGhpcy51cGRhdGVEZXNjZW5kYW50cyhpdGVtLnNlbGVjdGVkLCBpdGVtLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQYXJlbnRzQW5kUXVpY2tTZWxlY3QoKTtcbiAgICB0aGlzLnVwZGF0ZUNsZWFyQWxsKGl0ZW0uc2VsZWN0ZWQpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGVkVmFsdWVzKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBpbml0aWFsaXplRGVzY2VuZGFudFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAoJ2NoaWxkVHlwZU5hbWUnIGluIHRhYiAmJiB0YWIuZGF0YSAmJiB0YWIuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdGFiLmRhdGEuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHBhcmVudC5zZWxlY3RlZCAmJiBwYXJlbnQuY2hpbGRyZW4gJiYgcGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVEZXNjZW5kYW50cyhwYXJlbnRJc1NlbGVjdGVkOiBib29sZWFuLCBjaGlsZHJlbjogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW47IGNoaWxkcmVuPzogQXJyYXk8eyBzZWxlY3RlZD86IGJvb2xlYW4gfT4gfT4pOiB2b2lkIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBwYXJlbnRJc1NlbGVjdGVkID8gKGl0ZW0uc2VsZWN0ZWQgPSB0cnVlKSA6IGRlbGV0ZSBpdGVtLnNlbGVjdGVkO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjZW5kYW50cyhpdGVtLnNlbGVjdGVkLCBpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNsZWFyQWxsKGl0ZW1XYXNKdXN0U2VsZWN0ZWQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93Q2xlYXJBbGwgPSBpdGVtV2FzSnVzdFNlbGVjdGVkXG4gICAgICA/IHRydWVcbiAgICAgIDogdGhpcy50YWJzLnNvbWUoKHRhYikgPT4ge1xuICAgICAgICAgIGlmICgodGFiIGFzIFBhcmVudFRhYikuY2hpbGRUeXBlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhYi5kYXRhLnNvbWUoKHsgc2VsZWN0ZWQsIGluZGV0ZXJtaW5hdGUgfSkgPT4gc2VsZWN0ZWQgfHwgaW5kZXRlcm1pbmF0ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YWIuZGF0YS5zb21lKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50c0FuZFF1aWNrU2VsZWN0KCk6IHZvaWQge1xuICAgIC8vIG11dGF0ZSBoZXJlIHRvIGF2b2lkIGRlcmVmZXJlbmNpbmcgdGhlIG9iamVjdHMgaW4gZGlzcGxheVRhYnNcbiAgICB0aGlzLnRhYnNcbiAgICAgIC5maWx0ZXIoKHRhYikgPT4gJ2NoaWxkVHlwZU5hbWUnIGluIHRhYiAmJiAhIXRhYi5jaGlsZFR5cGVOYW1lKVxuICAgICAgLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRzID0gdGFiLmRhdGEuZmlsdGVyKCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBhbnlbXSB9KSA9PiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpO1xuXG4gICAgICAgIHBhcmVudHMuZm9yRWFjaCgocGFyZW50OiB7IGNoaWxkcmVuPzogeyBzZWxlY3RlZD86IGJvb2xlYW4gfVtdIH0pID0+IHtcbiAgICAgICAgICBbJ2luZGV0ZXJtaW5hdGUnLCAnc2VsZWN0ZWQnXS5mb3JFYWNoKChzZWxlY3RlZFN0YXRlT3B0aW9uKSA9PiBkZWxldGUgcGFyZW50W3NlbGVjdGVkU3RhdGVPcHRpb25dKTtcblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgcGFyZW50W3NlbGVjdGVkU3RhdGVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5xdWlja1NlbGVjdENvbmZpZykge1xuICAgICAgdGhpcy5xdWlja1NlbGVjdENvbmZpZy5pdGVtcy5mb3JFYWNoKChxdWlja1NlbGVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgcXVpY2tTZWxlY3Quc2VsZWN0ZWQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB0aGlzLmdldFNlbGVjdGVkU3RhdGUocXVpY2tTZWxlY3QuY2hpbGRyZW4gYXMgKHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0gJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtdKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICBxdWlja1NlbGVjdFtzZWxlY3RlZFN0YXRlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkU3RhdGUgPSAoY2hpbGRBcnJheTogeyBzZWxlY3RlZD86IGJvb2xlYW47IGluZGV0ZXJtaW5hdGU/OiBib29sZWFuIH1bXSk6ICdzZWxlY3RlZCcgfCAnaW5kZXRlcm1pbmF0ZScgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IG51bWJlck9mU2VsZWN0ZWRJdGVtcyA9IGNoaWxkQXJyYXkuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKS5sZW5ndGg7XG4gICAgaWYgKCFudW1iZXJPZlNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXJPZlNlbGVjdGVkSXRlbXMgPT09IGNoaWxkQXJyYXkubGVuZ3RoID8gJ3NlbGVjdGVkJyA6ICdpbmRldGVybWluYXRlJztcbiAgfTtcblxuICBlbWl0U2VsZWN0ZWRWYWx1ZXMoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXM6IFRhYmJlZEdyb3VwUGlja2VyVGFiW10gPSB0aGlzLnRhYnMubWFwKCh0YWIpID0+ICh7XG4gICAgICAuLi50YWIsXG4gICAgICBkYXRhOiB0YWIuZGF0YS5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpLFxuICAgIH0pKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkVmFsdWVzKTtcbiAgfVxuXG4gIGRlc2VsZWN0RXZlcnl0aGluZyhldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNob3dDbGVhckFsbCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnF1aWNrU2VsZWN0Q29uZmlnKSB7XG4gICAgICB0aGlzLnF1aWNrU2VsZWN0Q29uZmlnLml0ZW1zLmZvckVhY2goKHF1aWNrU2VsZWN0KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBxdWlja1NlbGVjdC5zZWxlY3RlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAoKHRhYiBhcyBQYXJlbnRUYWIpLmNoaWxkVHlwZU5hbWUpIHtcbiAgICAgICAgdGFiLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgIGRlbGV0ZSBpdGVtLmluZGV0ZXJtaW5hdGU7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZGVsZXRlIGNoaWxkLnNlbGVjdGVkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAodGFiIGFzIENoaWxkVGFiKS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IGRlbGV0ZSBpdGVtLnNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RlZFZhbHVlcygpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25DbGVhckZpbHRlcihldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dCgnJyk7XG4gIH1cblxuICBvbkZpbHRlcihldmVudDogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9IH0pIHtcbiAgICB0aGlzLmZpbHRlclRleHQubmV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyID0gKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xuICAgIHRoaXMuZGlzcGxheVRhYnMuZm9yRWFjaChcbiAgICAgIChkaXNwbGF5VGFiLCBpKSA9PlxuICAgICAgICAoZGlzcGxheVRhYi5kYXRhID0gdGhpcy50YWJzW2ldLmRhdGEuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICAgIGl0ZW1bZGlzcGxheVRhYi5sYWJlbEZpZWxkXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSksXG4gICAgICAgICkpLFxuICAgICk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH07XG59XG4iLCI8bm92by1kcm9wZG93biAodG9nZ2xlZCk9XCJvbkRyb3Bkb3duVG9nZ2xlKCRldmVudClcIj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1idXR0b25cIlxuICAgIFt0aGVtZV09XCJidXR0b25Db25maWcudGhlbWVcIlxuICAgIFtzaWRlXT1cImJ1dHRvbkNvbmZpZy5zaWRlXCJcbiAgICBbaWNvbl09XCJidXR0b25Db25maWcuaWNvblwiXG4gICAgW2xvYWRpbmddPVwibG9hZGluZ1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1idXR0b24tbGFiZWxcIj57eyBidXR0b25Db25maWcubGFiZWwgfX08L2Rpdj5cbiAgPC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLXNlYXJjaFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRhYmJlZC1ncm91cC1waWNrZXItc2VhcmNoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cImxhYmVsU2VydmljZS5zZWFyY2hcIiBbdmFsdWVdPVwiZmlsdGVyVGV4dCB8IGFzeW5jXCIgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudClcIiAvPlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiICpuZ0lmPVwiIShmaWx0ZXJUZXh0IHwgYXN5bmMpXCI+PC9pPlxuICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCIoZmlsdGVyVGV4dCB8IGFzeW5jKVwiIChjbGljayk9XCJvbkNsZWFyRmlsdGVyKCRldmVudClcIj48L2k+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1jb2x1bW4tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhYmJlZC1ncm91cC1waWNrZXItY29sdW1uIGxlZnRcIj5cbiAgICAgIDxub3ZvLW5hdiB0aGVtZT1cIndoaXRlXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgPG5vdm8tdGFiICpuZ0Zvcj1cImxldCB0YWIgb2YgZGlzcGxheVRhYnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwidGFiLnR5cGVOYW1lXCIgKGFjdGl2ZUNoYW5nZSk9XCJjaGFuZ2VUYWIodGFiKVwiPlxuICAgICAgICAgIDxzcGFuPnt7IHRhYi50eXBlTGFiZWwgfX0gKHt7IHRhYi5kYXRhLmxlbmd0aCB9fSk8L3NwYW4+PGkgY2xhc3M9XCJiaGktbmV4dFwiPjwvaT5cbiAgICAgICAgPC9ub3ZvLXRhYj5cbiAgICAgIDwvbm92by1uYXY+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0NsZWFyQWxsXCIgY2xhc3M9XCJjbGVhci1hbGwtYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIGljb249XCJ0aW1lc1wiIHNpZGU9XCJyaWdodFwiIGNvbG9yPVwiZ3JhcGVmcnVpdFwiIChjbGljayk9XCJkZXNlbGVjdEV2ZXJ5dGhpbmcoJGV2ZW50KVwiPnt7IGxhYmVsU2VydmljZS5jbGVhciB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWQtZ3JvdXAtcGlja2VyLWNvbHVtbiByaWdodFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLXNlbGVjdFwiICpuZ0lmPVwicXVpY2tTZWxlY3RDb25maWcgJiYgIShmaWx0ZXJUZXh0IHwgYXN5bmMpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1zZWxlY3QtbGFiZWxcIj57eyBxdWlja1NlbGVjdENvbmZpZy5sYWJlbCB9fTwvZGl2PlxuICAgICAgICA8bm92by1saXN0IGNsYXNzPVwicXVpY2stc2VsZWN0LWxpc3RcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgY2xhc3M9XCJxdWljay1zZWxlY3QtaXRlbVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgcXVpY2tTZWxlY3Qgb2YgcXVpY2tTZWxlY3RDb25maWcuaXRlbXNcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInF1aWNrU2VsZWN0LmxhYmVsXCJcbiAgICAgICAgICAgIChjbGljayk9XCJxdWlja1NlbGVjdC5zZWxlY3RlZCA9ICFxdWlja1NlbGVjdC5zZWxlY3RlZDsgb25JdGVtVG9nZ2xlZChxdWlja1NlbGVjdClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cInF1aWNrU2VsZWN0LmxhYmVsXCJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInc2VsZWN0ZWQnXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInF1aWNrU2VsZWN0LnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkl0ZW1Ub2dnbGVkKHF1aWNrU2VsZWN0KVwiXG4gICAgICAgICAgICAgID48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5vdm8tbGlzdCAqbmdJZj1cImRpc3BsYXlUYWIuZGF0YS5sZW5ndGhcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XG4gICAgICAgICAgW2l0ZW1TaXplXT1cInZpcnR1YWxTY3JvbGxJdGVtU2l6ZVwiXG4gICAgICAgICAgW21heEJ1ZmZlclB4XT1cIm1heEJ1ZmZlclB4XCJcbiAgICAgICAgICBbbWluQnVmZmVyUHhdPVwibWluQnVmZmVyUHhcIlxuICAgICAgICAgICN0YWJiZWRHcm91cFBpY2tlclZpcnR1YWxTY3JvbGxWaWV3cG9ydFxuICAgICAgICA+XG4gICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGRpc3BsYXlUYWIuZGF0YVwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaXRlbVtkaXNwbGF5VGFiLmxhYmVsRmllbGRdXCJcbiAgICAgICAgICAgIChjbGljayk9XCJpdGVtLnNlbGVjdGVkID0gIWl0ZW0uc2VsZWN0ZWQ7IG9uSXRlbVRvZ2dsZWQoaXRlbSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cIml0ZW1bZGlzcGxheVRhYi5sYWJlbEZpZWxkXVwiXG4gICAgICAgICAgICAgICAgW25hbWVdPVwiJ3NlbGVjdGVkJ1wiXG4gICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiaXRlbS5pbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0uc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSXRlbVRvZ2dsZWQoaXRlbSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvbm92by1jaGVja2JveD5cbiAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFiYmVkLWdyb3VwLXBpY2tlci1lbXB0eS1pdGVtXCIgKm5nSWY9XCIhZGlzcGxheVRhYi5kYXRhLmxlbmd0aCAmJiAoZmlsdGVyVGV4dCB8IGFzeW5jKVwiPlxuICAgICAgICA8aSBjbGFzcz1cInt7IGRpc3BsYXlUYWIuaWNvbiB8fCAnYmhpLXNlYXJjaCcgfX1cIj48L2k+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS1pdGVtLW1haW4tbWVzc2FnZVwiPnt7IGxhYmVsU2VydmljZS50YWJiZWRHcm91cFBpY2tlckVtcHR5IH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS1pdGVtLXN1Yi1tZXNzYWdlXCI+e3sgbGFiZWxTZXJ2aWNlLnRhYmJlZEdyb3VwQ2xlYXJTdWdnZXN0aW9uKGRpc3BsYXlUYWIudHlwZUxhYmVsKSB9fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9ub3ZvLWRyb3Bkb3duPlxuIl19