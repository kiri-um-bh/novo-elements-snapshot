// NG2
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { ReplaySubject } from 'rxjs';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../picker/Picker";
import * as i4 from "../chips/Chips";
function NovoMultiPickerElement_chip_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "chip", 6);
    i0.ɵɵlistener("remove", function NovoMultiPickerElement_chip_0_Template_chip_remove_0_listener($event) { i0.ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.removeFromDisplay($event, item_r3); })("select", function NovoMultiPickerElement_chip_0_Template_chip_select_0_listener($event) { i0.ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.select($event, item_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", item_r3 == ctx_r0.selected);
    i0.ɵɵproperty("type", item_r3.type);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
function NovoMultiPickerElement_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate3("+ ", type_r8.count, " ", ctx_r7.labels.more, " ", type_r8.type, "");
} }
function NovoMultiPickerElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "ul", 7);
    i0.ɵɵtemplate(2, NovoMultiPickerElement_div_3_li_2_Template, 2, 3, "li", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.notShown);
} }
function NovoMultiPickerElement_label_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 9);
    i0.ɵɵlistener("click", function NovoMultiPickerElement_label_7_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.clearValue(); });
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.clearAll, " ");
} }
// Value accessor for the component (supports ngModel)
const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoMultiPickerElement),
    multi: true,
};
export class NovoMultiPickerElement {
    constructor(element, labels) {
        this.element = element;
        this.labels = labels;
        this.placeholder = '';
        this.changed = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.items = [];
        this._items = new ReplaySubject(1);
        this.selected = null;
        this.config = {};
        // private data model
        this._value = {};
        this.notShown = {};
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.chipsCount = 4;
    }
    get value() {
        return this._value;
    }
    set value(selectedItems) {
        if (selectedItems) {
            this.types.forEach((x) => (this._value[x.value] = selectedItems[x.value]));
        }
        else {
            this._value = {};
            this.types.forEach((x) => (this._value[x.value] = []));
        }
        this.changed.emit(selectedItems);
        this.onModelChange(selectedItems);
    }
    ngOnInit() {
        this.selectAllOption = this.source.selectAllOption || false;
        this.chipsCount = this.source.chipsCount || 4;
        this.strictRelationship = this.source.strictRelationship || false;
        this.setupOptions();
    }
    clearValue() {
        this.types.forEach((type) => this.modifyAllOfType(type.value, 'unselect'));
        this.items = [];
        this._items.next(this.items);
        this.setInitialValue(null);
        this.onModelChange(this.value);
    }
    removeFromDisplay(event, item) {
        this.remove(true, item);
        this.modifyAffectedParentsOrChildren(false, item);
    }
    setupOptions() {
        this.options = this.source.options || [];
        this._options = [];
        if (this.options) {
            this.options.forEach((option) => {
                const formattedOption = this.setupOptionsByType(option);
                this._options.push(formattedOption);
            });
        }
        this.source.options = this._options;
    }
    setupOptionsByType(section) {
        const formattedSection = {
            type: section.type,
            label: section.label || section.type,
        };
        formattedSection.data = section.data.map((item) => {
            return this.formatOption(section, item);
        });
        if (this.selectAllOption) {
            const selectAll = this.createSelectAllOption(section);
            formattedSection.data.splice(0, 0, selectAll);
        }
        formattedSection.originalData = formattedSection.data.slice();
        return formattedSection;
    }
    formatOption(section, item) {
        const obj = {
            value: section.field ? item[section.field] : item.value || item,
            label: section.format ? Helpers.interpolate(section.format, item) : item.label || String(item.value || item),
            type: section.type,
            checked: undefined,
            isParentOf: section.isParentOf,
            isChildOf: section.isChildOf,
        };
        if (obj.isChildOf) {
            obj[section.isChildOf] = item[section.isChildOf];
        }
        return obj;
    }
    createSelectAllOption(section) {
        const selectAll = {
            value: 'ALL',
            label: `All ${section.type}`,
            type: section.type,
            checked: this.model && this.model.length && this.model.indexOf('ALL') !== -1,
            isParentOf: section.isParentOf,
            isChildOf: section.isChildOf,
        };
        if (section.isChildOf) {
            const allParents = section.data.reduce((accum, next) => {
                return accum.concat(next[section.isChildOf]);
            }, []);
            selectAll[section.isChildOf] = allParents;
        }
        return selectAll;
    }
    deselectAll() {
        this.selected = null;
    }
    select(event, item) {
        this.blur.emit(event);
        this.deselectAll();
        this.selected = item;
    }
    onFocus(e) {
        this.element.nativeElement.classList.add('selected');
        this.focus.emit(e);
    }
    clickOption(event) {
        if (event && !(event instanceof Event)) {
            if (event.checked === false) {
                this.remove(null, event);
            }
            else {
                this.add(event);
            }
            this.modifyAffectedParentsOrChildren(event.checked, event);
            // Set focus on the picker
            const input = this.element.nativeElement.querySelector('novo-picker > input');
            if (input) {
                input.focus();
            }
        }
    }
    add(event) {
        if (event.value === 'ALL') {
            this.modifyAllOfType(event.type, 'select');
        }
        else {
            this.updateDisplayItems(event, 'add');
            this.value[event.type].push(event.value);
            this.updateAllItemState(event.type);
            this.triggerValueUpdate();
        }
        this.updateParentOrChildren(event, 'select');
        this.select(null, event);
    }
    updateAllItemState(type) {
        const allOfType = this.getAllOfType(type);
        const allOfTypeSelected = this.allItemsSelected(allOfType, type);
        if (allOfTypeSelected) {
            this.selectAll(allOfType, type);
        }
        return { allOfType, allOfTypeSelected };
    }
    setIndeterminateState(allOfType, status) {
        if (!this.selectAllOption) {
            return;
        }
        const allItem = allOfType[0];
        allItem.indeterminate = status;
    }
    updateDisplayItems(item, action) {
        const adding = action === 'add';
        if (adding) {
            this.items.push(item);
        }
        else {
            if (this.items.indexOf(item) > -1) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
        this.updateDisplayText(this.items);
        this._items.next(this.items);
    }
    updateDisplayText(items) {
        this.notShown = [];
        const notShown = items.slice(this.chipsCount);
        if (notShown.length > 0) {
            this.types.forEach((type) => {
                let count;
                const selectedOfType = notShown.filter((x) => x.type === type.value);
                if (selectedOfType.length === 1 && selectedOfType[0].value === 'ALL') {
                    count = this.getAllOfType(type.value).length - 1;
                }
                else {
                    count = selectedOfType.length;
                }
                const displayType = count === 1 ? type.singular : type.plural || type.value;
                if (count > 0) {
                    this.notShown.push({ type: displayType, count });
                }
            });
        }
    }
    remove(event, item) {
        let triggeredByEvent;
        if (event) {
            triggeredByEvent = true;
        }
        const itemToRemove = item;
        if (itemToRemove.value === 'ALL') {
            triggeredByEvent = false;
            this.modifyAllOfType(itemToRemove.type, 'unselect');
        }
        else if (this.allOfTypeSelected(itemToRemove.type)) {
            this.handleRemoveItemIfAllSelected(itemToRemove);
        }
        this.removeItem(item, triggeredByEvent);
    }
    removeItem(item, triggeredByEvent) {
        item.checked = false;
        this.deselectAll();
        this.removeValue(item);
        if (item.value !== 'ALL') {
            this.updateParentOrChildren(item, 'unselect');
        }
        if (triggeredByEvent) {
            this.modifyAffectedParentsOrChildren(false, item);
        }
    }
    removeValue(item) {
        const updatedValues = this.value[item.type].filter((x) => x !== item.value);
        this.value[item.type] = updatedValues;
        this.triggerValueUpdate();
        this.updateDisplayItems(item, 'remove');
    }
    onKeyDown(event) {
        if (event.keyCode === KeyCodes.BACKSPACE) {
            if (event.target && event.target.value.length === 0 && this.items.length) {
                if (event) {
                    event.stopPropagation();
                    event.preventDefault();
                }
                if (this.selected) {
                    this.remove(null, this.selected);
                }
                else {
                    this.select(event, this.items[this.items.length - 1]);
                }
            }
        }
    }
    allOfTypeSelected(type) {
        return this.items.filter((x) => x.type === type && x.value === 'ALL').length > 0;
    }
    modifyAllOfType(type, action) {
        const selecting = action === 'select';
        const allOfType = this.getAllOfType(type);
        allOfType.forEach((item) => {
            item.checked = selecting;
            item.indeterminate = false;
        });
        if (selecting) {
            this.selectAll(allOfType, type);
        }
        else {
            this.items = [...this.items.filter((x) => x.type !== type)];
            this._items.next(this.items);
            this.value[type] = [];
        }
        if (this.selectAllOption) {
            this.updateAllParentsOrChildren(allOfType[0], action);
        }
        this.triggerValueUpdate();
    }
    triggerValueUpdate() {
        const updatedObject = {};
        this.types.forEach((x) => (updatedObject[x.value] = this.value[x.value]));
        this.value = updatedObject;
    }
    selectAll(allOfType, type) {
        if (!this.selectAllOption) {
            return;
        }
        allOfType[0].checked = true;
        const values = allOfType.map((i) => {
            return i.value;
        });
        // remove 'ALL' value
        values.splice(0, 1);
        this.value[type] = values;
        const updatedItems = this.items.filter((x) => x.type !== type);
        this.items = updatedItems;
        this.updateDisplayItems(allOfType[0], 'add');
    }
    handleRemoveItemIfAllSelected(item) {
        if (!this.selectAllOption) {
            return;
        }
        const type = item.type;
        const allOfType = this.getAllOfType(type);
        const allItem = allOfType[0];
        this.removeItem(allItem);
        allItem.indeterminate = true;
        const selectedItems = allOfType.filter((i) => i.checked === true);
        this.items = [...this.items, ...selectedItems];
        const values = selectedItems.map((i) => {
            return i.value;
        });
        this.value[type] = [...values];
    }
    handleOutsideClick(event) {
        // If the elements doesn't contain the target element, it is an outside click
        if (!this.element.nativeElement.contains(event.target)) {
            this.blur.emit(event);
            this.deselectAll();
        }
    }
    getAllOfType(type) {
        return this._options.filter((x) => x.type === type)[0].originalData;
    }
    updateParentOrChildren(item, action) {
        if (this.strictRelationship && item.isParentOf) {
            this.updateChildrenValue(item, action);
        }
        else if (item.isChildOf && this.selectAllOption) {
            this.updateParentValue(item, action);
        }
    }
    modifyAffectedParentsOrChildren(selecting, itemChanged) {
        if (!itemChanged.isChildOf && !itemChanged.isParentOf) {
            return;
        }
        const parent = this.types.filter((x) => !!x.isParentOf)[0];
        const parentType = parent.value;
        const allParentType = this.getAllOfType(parentType);
        const childType = allParentType[0].isParentOf;
        const allChildren = this.getAllOfType(childType);
        const allCheckedChildren = allChildren.filter((x) => !!x.checked);
        allParentType.forEach((obj) => {
            if (obj.value === 'ALL') {
                return;
            }
            const selectedChildrenOfParent = allCheckedChildren.filter((x) => {
                return x[parentType].filter((y) => y === obj.value).length > 0;
            });
            if (selecting) {
                if (obj.checked) {
                    return;
                }
                obj.indeterminate = selectedChildrenOfParent.length > 0;
            }
            else {
                const allChildrenOfParent = allChildren.filter((x) => {
                    return x.value !== 'ALL' && x[parentType].filter((y) => y === obj.value).length > 0;
                });
                if (selectedChildrenOfParent.length > 0) {
                    if (obj.checked) {
                        if (this.strictRelationship && allChildrenOfParent.length !== selectedChildrenOfParent.length) {
                            obj.indeterminate = true;
                            obj.checked = false;
                            this.removeValue(obj);
                            this.addIndividualChildren(selectedChildrenOfParent);
                        }
                    }
                    else {
                        obj.indeterminate = true;
                    }
                    if (this.strictRelationship && itemChanged.type !== parentType) {
                        if (obj.checked) {
                            obj.checked = false;
                            this.removeValue(obj);
                            this.addIndividualChildren(selectedChildrenOfParent);
                        }
                    }
                }
                else {
                    obj.indeterminate = false;
                    if (allChildrenOfParent.length === 0) {
                        // if it has no children and is checked, it should stay checked
                        return;
                    }
                    else if (this.strictRelationship && itemChanged.type !== parentType) {
                        this.remove(null, obj);
                    }
                }
            }
        });
        if (this.selectAllOption) {
            this.updateIndeterminateStates(allParentType, allChildren, allCheckedChildren);
        }
    }
    updateAllParentsOrChildren(allItem, action) {
        if (allItem.isParentOf) {
            this.updateAllChildrenValue(allItem, action);
        }
        else if (allItem.isChildOf) {
            this.updateAllParentValue(allItem, action);
        }
    }
    updateAllChildrenValue(item, action) {
        const selecting = action === 'select';
        const childType = item.isParentOf;
        const potentialChildren = this.getAllOfType(childType);
        if (this.selectAllOption && this.allOfTypeSelected(childType) && !selecting) {
            this.remove(null, potentialChildren[0]);
            return;
        }
        potentialChildren.forEach((x) => {
            if (x.value === 'ALL' && !x.checked) {
                if (selecting) {
                    x.checked = true;
                }
                x.indeterminate = selecting;
            }
            else {
                if (x.checked && !selecting) {
                    this.remove(null, x);
                }
                x.checked = selecting;
            }
        });
    }
    updateAllParentValue(item, action) {
        const selecting = action === 'select';
        const parentType = item.isChildOf;
        const potentialParents = this.getAllOfType(parentType);
        potentialParents.forEach((x) => {
            if (!x.checked) {
                x.indeterminate = selecting;
            }
        });
    }
    updateIndeterminateStates(allParentType, allChildren, allCheckedChildren) {
        const allCheckedOrIndeterminateParents = allParentType.filter((x) => (!!x.checked || !!x.indeterminate) && x.value !== 'ALL');
        const isParentIndeterminate = !!allParentType[0].checked ? false : allCheckedOrIndeterminateParents.length > 0;
        const isChildIndeterminate = !!allChildren[0].checked ? false : allCheckedChildren.length > 0;
        this.setIndeterminateState(allParentType, isParentIndeterminate);
        this.setIndeterminateState(allChildren, isChildIndeterminate);
    }
    updateChildrenValue(parent, action) {
        const selecting = action === 'select';
        const childType = parent.isParentOf;
        const potentialChildren = this.getAllOfType(childType);
        potentialChildren.forEach((x) => {
            if (x.value === 'ALL') {
                return;
            }
            if (x[parent.type].filter((y) => y === parent.value).length > 0) {
                if (x.checked && !selecting) {
                    x.checked = false;
                    if (this.allOfTypeSelected(childType)) {
                        this.handleRemoveItemIfAllSelected(x);
                    }
                    else {
                        this.removeValue(x);
                    }
                }
                x.checked = selecting;
            }
        });
    }
    updateParentValue(child, action) {
        const allParentType = this.getAllOfType(child.isChildOf);
        if (allParentType[0].checked && action !== 'select') {
            this.handleRemoveItemIfAllSelected(allParentType[0]);
        }
    }
    addIndividualChildren(children) {
        let parentAlreadySelected = false;
        children.forEach((x) => {
            if (x.isChildOf) {
                // only add children if their parents are not already selected
                x[x.isChildOf].forEach((parent) => {
                    if (this.value[x.isChildOf].filter((p) => p === parent).length > 0) {
                        parentAlreadySelected = true;
                    }
                });
            }
            if (this.value[x.type].filter((item) => item === x.value).length === 0 && !parentAlreadySelected) {
                this.add(x);
            }
        });
    }
    setInitialValue(model) {
        this.items = [];
        this.value = model || {};
        if (!this.types) {
            return;
        }
        this.types.forEach((typeObj) => {
            const type = typeObj.value;
            if (this.value[type]) {
                let indeterminateIsSet = false;
                const options = this.updateAllItemState(type);
                const optionsByType = options.allOfType;
                const allSelected = options.allOfTypeSelected;
                this.value[type].forEach((item) => {
                    if (!allSelected && !indeterminateIsSet) {
                        indeterminateIsSet = true;
                        this.setIndeterminateState(optionsByType, true);
                    }
                    const value = optionsByType.filter((x) => x.value === item)[0];
                    value.checked = true;
                    if (!allSelected) {
                        this.updateDisplayItems(value, 'add');
                    }
                    if (this.strictRelationship && value.isParentOf) {
                        this.updateChildrenValue(value, 'select');
                    }
                });
                if (typeObj.isChildOf) {
                    this.modifyAffectedParentsOrChildren(true, { value: type, isChildOf: true });
                }
            }
            else {
                this.value[type] = [];
            }
        });
    }
    allItemsSelected(optionsByType, type) {
        return this.value[type].length === optionsByType.length - 1;
    }
    // Set touched on blur
    onTouched(e) {
        this.element.nativeElement.classList.remove('selected');
        this.onModelTouched();
        this.blur.emit(e);
    }
    writeValue(model) {
        this.model = model;
        this.setInitialValue(model);
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
}
NovoMultiPickerElement.ɵfac = function NovoMultiPickerElement_Factory(t) { return new (t || NovoMultiPickerElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
NovoMultiPickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoMultiPickerElement, selectors: [["multi-picker"]], hostVars: 2, hostBindings: function NovoMultiPickerElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("with-value", ctx.items.length > 0);
    } }, inputs: { source: "source", placeholder: "placeholder", types: "types", value: "value" }, outputs: { changed: "changed", focus: "focus", blur: "blur" }, features: [i0.ɵɵProvidersFeature([CHIPS_VALUE_ACCESSOR])], decls: 8, vars: 14, consts: [[3, "type", "selected", "remove", "select", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "chip-input-container"], ["clearValueOnSelect", "true", 3, "config", "placeholder", "overrideElement", "select", "keydown", "focus", "blur"], [1, "bhi-search"], ["class", "clear-all", 3, "click", 4, "ngIf"], [3, "type", "remove", "select"], [1, "summary"], [4, "ngFor", "ngForOf"], [1, "clear-all", 3, "click"], [1, "bhi-times"]], template: function NovoMultiPickerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoMultiPickerElement_chip_0_Template, 2, 4, "chip", 0);
        i0.ɵɵpipe(1, "slice");
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtemplate(3, NovoMultiPickerElement_div_3_Template, 3, 1, "div", 1);
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "novo-picker", 3);
        i0.ɵɵlistener("select", function NovoMultiPickerElement_Template_novo_picker_select_5_listener($event) { return ctx.clickOption($event); })("keydown", function NovoMultiPickerElement_Template_novo_picker_keydown_5_listener($event) { return ctx.onKeyDown($event); })("focus", function NovoMultiPickerElement_Template_novo_picker_focus_5_listener($event) { return ctx.onFocus($event); })("blur", function NovoMultiPickerElement_Template_novo_picker_blur_5_listener($event) { return ctx.onTouched($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "i", 4);
        i0.ɵɵtemplate(7, NovoMultiPickerElement_label_7_Template, 3, 1, "label", 5);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(1, 8, i0.ɵɵpipeBind1(2, 12, ctx._items), 0, ctx.chipsCount));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.items.length > ctx.chipsCount);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("config", ctx.source)("placeholder", ctx.placeholder)("overrideElement", ctx.element);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("has-value", ctx.items.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.items.length);
    } }, directives: [i2.NgForOf, i2.NgIf, i3.NovoPickerElement, i4.NovoChipElement], pipes: [i2.SlicePipe, i2.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoMultiPickerElement, [{
        type: Component,
        args: [{
                selector: 'multi-picker',
                providers: [CHIPS_VALUE_ACCESSOR],
                template: `
    <chip
      *ngFor="let item of (_items | async | slice: 0:chipsCount)"
      [type]="item.type"
      [class.selected]="item == selected"
      (remove)="removeFromDisplay($event, item)"
      (select)="select($event, item)"
    >
      {{ item.label }}
    </chip>
    <div *ngIf="items.length > chipsCount">
      <ul class="summary">
        <li *ngFor="let type of notShown">+ {{ type.count }} {{ labels.more }} {{ type.type }}</li>
      </ul>
    </div>
    <div class="chip-input-container">
      <novo-picker
        clearValueOnSelect="true"
        [config]="source"
        [placeholder]="placeholder"
        (select)="clickOption($event)"
        (keydown)="onKeyDown($event)"
        (focus)="onFocus($event)"
        (blur)="onTouched($event)"
        [overrideElement]="element"
      >
      </novo-picker>
    </div>
    <i class="bhi-search" [class.has-value]="items.length"></i>
    <label class="clear-all" *ngIf="items.length" (click)="clearValue()">{{ labels.clearAll }} <i class="bhi-times"></i></label>
  `,
                host: {
                    '[class.with-value]': 'items.length > 0',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }]; }, { source: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], types: [{
            type: Input
        }], changed: [{
            type: Output
        }], focus: [{
            type: Output
        }], blur: [{
            type: Output
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsU0FBUztBQUNULE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7SUFtQnRELCtCQU9FO0lBSEEsc1BBQTBDLDhOQUFBO0lBRzFDLFlBQ0Y7SUFBQSxpQkFBTzs7OztJQUxMLHNEQUFtQztJQURuQyxtQ0FBa0I7SUFLbEIsZUFDRjtJQURFLDhDQUNGOzs7SUFHSSwwQkFBa0M7SUFBQSxZQUFvRDtJQUFBLGlCQUFLOzs7O0lBQXpELGVBQW9EO0lBQXBELDBGQUFvRDs7O0lBRjFGLDJCQUNFO0lBQUEsNkJBQ0U7SUFBQSwyRUFBa0M7SUFDcEMsaUJBQUs7SUFDUCxpQkFBTTs7O0lBRkUsZUFBNkI7SUFBN0IseUNBQTZCOzs7O0lBaUJyQyxnQ0FBcUU7SUFBdkIsNExBQXNCO0lBQUMsWUFBc0I7SUFBQSx3QkFBeUI7SUFBQSxpQkFBUTs7O0lBQXZELGVBQXNCO0lBQXRCLHNEQUFzQjs7QUE3Qy9GLHNEQUFzRDtBQUN0RCxN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Z0M7UUFDN0IsZUFBb0I7UUFBcEIsdUNBQW9COztrREFNcEMsc0JBQXNCO2NBdENsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO2lCQUN6QzthQUNGOzRGQUdDLE1BQU07a0JBREwsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLE9BQU87a0JBRE4sTUFBTTtZQUdQLEtBQUs7a0JBREosTUFBTTtZQUdQLElBQUk7a0JBREgsTUFBTTtZQVFILEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENISVBTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b011bHRpUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuaW50ZXJmYWNlIEl0ZW0ge1xuICB0eXBlO1xuICBsYWJlbDtcbiAgdmFsdWU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ211bHRpLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y2hpcFxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKF9pdGVtcyB8IGFzeW5jIHwgc2xpY2U6IDA6Y2hpcHNDb3VudClcIlxuICAgICAgW3R5cGVdPVwiaXRlbS50eXBlXCJcbiAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtID09IHNlbGVjdGVkXCJcbiAgICAgIChyZW1vdmUpPVwicmVtb3ZlRnJvbURpc3BsYXkoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCJcbiAgICA+XG4gICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgPC9jaGlwPlxuICAgIDxkaXYgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiBjaGlwc0NvdW50XCI+XG4gICAgICA8dWwgY2xhc3M9XCJzdW1tYXJ5XCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdHlwZSBvZiBub3RTaG93blwiPisge3sgdHlwZS5jb3VudCB9fSB7eyBsYWJlbHMubW9yZSB9fSB7eyB0eXBlLnR5cGUgfX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpcC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAoc2VsZWN0KT1cImNsaWNrT3B0aW9uKCRldmVudClcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICA+XG4gICAgICA8L25vdm8tcGlja2VyPlxuICAgIDwvZGl2PlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiIFtjbGFzcy5oYXMtdmFsdWVdPVwiaXRlbXMubGVuZ3RoXCI+PC9pPlxuICAgIDxsYWJlbCBjbGFzcz1cImNsZWFyLWFsbFwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPnt7IGxhYmVscy5jbGVhckFsbCB9fSA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT48L2xhYmVsPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy53aXRoLXZhbHVlXSc6ICdpdGVtcy5sZW5ndGggPiAwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b011bHRpUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHNvdXJjZTogeyBvcHRpb25zOiBbXTsgcmVzdWx0c1RlbXBsYXRlOyBzZWxlY3RBbGxPcHRpb246IGJvb2xlYW47IGNoaXBzQ291bnQ7IHN0cmljdFJlbGF0aW9uc2hpcCB9O1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogYW55ID0gJyc7XG4gIEBJbnB1dCgpXG4gIHR5cGVzOiB7IHZhbHVlOyBzaW5ndWxhcjsgcGx1cmFsOyBpc1BhcmVudE9mOyBpc0NoaWxkT2YgfVtdO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHNlbGVjdGVkSXRlbXMpIHtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBzZWxlY3RlZEl0ZW1zW3gudmFsdWVdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0ge307XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh0aGlzLl92YWx1ZVt4LnZhbHVlXSA9IFtdKSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHNlbGVjdGVkSXRlbXMpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIGl0ZW1zOiBJdGVtW10gPSBbXTtcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3Q8SXRlbVtdPigxKTtcbiAgb3B0aW9uczogYW55O1xuICBfb3B0aW9uczogYW55O1xuICBzZWxlY3RlZDogYW55ID0gbnVsbDtcbiAgY29uZmlnOiBhbnkgPSB7fTtcbiAgY2hpcHNDb3VudDogbnVtYmVyO1xuICBzZWxlY3RBbGxPcHRpb246IGJvb2xlYW47XG4gIHN0cmljdFJlbGF0aW9uc2hpcDogYm9vbGVhbjtcbiAgLy8gcHJpdmF0ZSBkYXRhIG1vZGVsXG4gIF92YWx1ZSA9IHt9O1xuICBub3RTaG93bjogYW55ID0ge307XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgdGhpcy5jaGlwc0NvdW50ID0gNDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VsZWN0QWxsT3B0aW9uID0gdGhpcy5zb3VyY2Uuc2VsZWN0QWxsT3B0aW9uIHx8IGZhbHNlO1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IHRoaXMuc291cmNlLmNoaXBzQ291bnQgfHwgNDtcbiAgICB0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCA9IHRoaXMuc291cmNlLnN0cmljdFJlbGF0aW9uc2hpcCB8fCBmYWxzZTtcbiAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHRoaXMubW9kaWZ5QWxsT2ZUeXBlKHR5cGUudmFsdWUsICd1bnNlbGVjdCcpKTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZShudWxsKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICByZW1vdmVGcm9tRGlzcGxheShldmVudCwgaXRlbSkge1xuICAgIHRoaXMucmVtb3ZlKHRydWUsIGl0ZW0pO1xuICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihmYWxzZSwgaXRlbSk7XG4gIH1cblxuICBzZXR1cE9wdGlvbnMoKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zb3VyY2Uub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb24gPSB0aGlzLnNldHVwT3B0aW9uc0J5VHlwZShvcHRpb24pO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2goZm9ybWF0dGVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZS5vcHRpb25zID0gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIHNldHVwT3B0aW9uc0J5VHlwZShzZWN0aW9uKSB7XG4gICAgY29uc3QgZm9ybWF0dGVkU2VjdGlvbjogYW55ID0ge1xuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgbGFiZWw6IHNlY3Rpb24ubGFiZWwgfHwgc2VjdGlvbi50eXBlLFxuICAgIH07XG4gICAgZm9ybWF0dGVkU2VjdGlvbi5kYXRhID0gc2VjdGlvbi5kYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0T3B0aW9uKHNlY3Rpb24sIGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5jcmVhdGVTZWxlY3RBbGxPcHRpb24oc2VjdGlvbik7XG4gICAgICBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEuc3BsaWNlKDAsIDAsIHNlbGVjdEFsbCk7XG4gICAgfVxuICAgIGZvcm1hdHRlZFNlY3Rpb24ub3JpZ2luYWxEYXRhID0gZm9ybWF0dGVkU2VjdGlvbi5kYXRhLnNsaWNlKCk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFNlY3Rpb247XG4gIH1cblxuICBmb3JtYXRPcHRpb24oc2VjdGlvbiwgaXRlbSkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHZhbHVlOiBzZWN0aW9uLmZpZWxkID8gaXRlbVtzZWN0aW9uLmZpZWxkXSA6IGl0ZW0udmFsdWUgfHwgaXRlbSxcbiAgICAgIGxhYmVsOiBzZWN0aW9uLmZvcm1hdCA/IEhlbHBlcnMuaW50ZXJwb2xhdGUoc2VjdGlvbi5mb3JtYXQsIGl0ZW0pIDogaXRlbS5sYWJlbCB8fCBTdHJpbmcoaXRlbS52YWx1ZSB8fCBpdGVtKSxcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGNoZWNrZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUGFyZW50T2Y6IHNlY3Rpb24uaXNQYXJlbnRPZixcbiAgICAgIGlzQ2hpbGRPZjogc2VjdGlvbi5pc0NoaWxkT2YsXG4gICAgfTtcbiAgICBpZiAob2JqLmlzQ2hpbGRPZikge1xuICAgICAgb2JqW3NlY3Rpb24uaXNDaGlsZE9mXSA9IGl0ZW1bc2VjdGlvbi5pc0NoaWxkT2ZdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgY3JlYXRlU2VsZWN0QWxsT3B0aW9uKHNlY3Rpb24pIHtcbiAgICBjb25zdCBzZWxlY3RBbGwgPSB7XG4gICAgICB2YWx1ZTogJ0FMTCcsXG4gICAgICBsYWJlbDogYEFsbCAke3NlY3Rpb24udHlwZX1gLFxuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgY2hlY2tlZDogdGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCAmJiB0aGlzLm1vZGVsLmluZGV4T2YoJ0FMTCcpICE9PSAtMSxcbiAgICAgIGlzUGFyZW50T2Y6IHNlY3Rpb24uaXNQYXJlbnRPZixcbiAgICAgIGlzQ2hpbGRPZjogc2VjdGlvbi5pc0NoaWxkT2YsXG4gICAgfTtcbiAgICBpZiAoc2VjdGlvbi5pc0NoaWxkT2YpIHtcbiAgICAgIGNvbnN0IGFsbFBhcmVudHMgPSBzZWN0aW9uLmRhdGEucmVkdWNlKChhY2N1bSwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjdW0uY29uY2F0KG5leHRbc2VjdGlvbi5pc0NoaWxkT2ZdKTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIHNlbGVjdEFsbFtzZWN0aW9uLmlzQ2hpbGRPZl0gPSBhbGxQYXJlbnRzO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0QWxsO1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBpdGVtO1xuICB9XG5cbiAgb25Gb2N1cyhlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZSk7XG4gIH1cblxuICBjbGlja09wdGlvbihldmVudCkge1xuICAgIGlmIChldmVudCAmJiAhKGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICBpZiAoZXZlbnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGQoZXZlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGV2ZW50LmNoZWNrZWQsIGV2ZW50KTtcbiAgICAgIC8vIFNldCBmb2N1cyBvbiB0aGUgcGlja2VyXG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tcGlja2VyID4gaW5wdXQnKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZChldmVudCkge1xuICAgIGlmIChldmVudC52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgIHRoaXMubW9kaWZ5QWxsT2ZUeXBlKGV2ZW50LnR5cGUsICdzZWxlY3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoZXZlbnQsICdhZGQnKTtcbiAgICAgIHRoaXMudmFsdWVbZXZlbnQudHlwZV0ucHVzaChldmVudC52YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZUFsbEl0ZW1TdGF0ZShldmVudC50eXBlKTtcbiAgICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGFyZW50T3JDaGlsZHJlbihldmVudCwgJ3NlbGVjdCcpO1xuICAgIHRoaXMuc2VsZWN0KG51bGwsIGV2ZW50KTtcbiAgfVxuXG4gIHVwZGF0ZUFsbEl0ZW1TdGF0ZSh0eXBlKSB7XG4gICAgY29uc3QgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgY29uc3QgYWxsT2ZUeXBlU2VsZWN0ZWQgPSB0aGlzLmFsbEl0ZW1zU2VsZWN0ZWQoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICBpZiAoYWxsT2ZUeXBlU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiB7IGFsbE9mVHlwZSwgYWxsT2ZUeXBlU2VsZWN0ZWQgfTtcbiAgfVxuXG4gIHNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxPZlR5cGUsIHN0YXR1cykge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWxsSXRlbSA9IGFsbE9mVHlwZVswXTtcbiAgICBhbGxJdGVtLmluZGV0ZXJtaW5hdGUgPSBzdGF0dXM7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5SXRlbXMoaXRlbSwgYWN0aW9uKSB7XG4gICAgY29uc3QgYWRkaW5nID0gYWN0aW9uID09PSAnYWRkJztcbiAgICBpZiAoYWRkaW5nKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkgPiAtMSkge1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlUZXh0KHRoaXMuaXRlbXMpO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5VGV4dChpdGVtcykge1xuICAgIHRoaXMubm90U2hvd24gPSBbXTtcbiAgICBjb25zdCBub3RTaG93biA9IGl0ZW1zLnNsaWNlKHRoaXMuY2hpcHNDb3VudCk7XG4gICAgaWYgKG5vdFNob3duLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBsZXQgY291bnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT2ZUeXBlID0gbm90U2hvd24uZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUudmFsdWUpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRPZlR5cGUubGVuZ3RoID09PSAxICYmIHNlbGVjdGVkT2ZUeXBlWzBdLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICAgIGNvdW50ID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZS52YWx1ZSkubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCA9IHNlbGVjdGVkT2ZUeXBlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXNwbGF5VHlwZSA9IGNvdW50ID09PSAxID8gdHlwZS5zaW5ndWxhciA6IHR5cGUucGx1cmFsIHx8IHR5cGUudmFsdWU7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICB0aGlzLm5vdFNob3duLnB1c2goeyB0eXBlOiBkaXNwbGF5VHlwZSwgY291bnQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShldmVudCwgaXRlbSkge1xuICAgIGxldCB0cmlnZ2VyZWRCeUV2ZW50O1xuICAgIGlmIChldmVudCkge1xuICAgICAgdHJpZ2dlcmVkQnlFdmVudCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IGl0ZW07XG4gICAgaWYgKGl0ZW1Ub1JlbW92ZS52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgIHRyaWdnZXJlZEJ5RXZlbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubW9kaWZ5QWxsT2ZUeXBlKGl0ZW1Ub1JlbW92ZS50eXBlLCAndW5zZWxlY3QnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoaXRlbVRvUmVtb3ZlLnR5cGUpKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGl0ZW1Ub1JlbW92ZSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlSXRlbShpdGVtLCB0cmlnZ2VyZWRCeUV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaXRlbSwgdHJpZ2dlcmVkQnlFdmVudD86IGFueSkge1xuICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnJlbW92ZVZhbHVlKGl0ZW0pO1xuICAgIGlmIChpdGVtLnZhbHVlICE9PSAnQUxMJykge1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRPckNoaWxkcmVuKGl0ZW0sICd1bnNlbGVjdCcpO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlcmVkQnlFdmVudCkge1xuICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGZhbHNlLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVWYWx1ZShpdGVtKSB7XG4gICAgY29uc3QgdXBkYXRlZFZhbHVlcyA9IHRoaXMudmFsdWVbaXRlbS50eXBlXS5maWx0ZXIoKHgpID0+IHggIT09IGl0ZW0udmFsdWUpO1xuICAgIHRoaXMudmFsdWVbaXRlbS50eXBlXSA9IHVwZGF0ZWRWYWx1ZXM7XG4gICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhpdGVtLCAncmVtb3ZlJyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQkFDS1NQQUNFKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDAgJiYgdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0KGV2ZW50LCB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxsT2ZUeXBlU2VsZWN0ZWQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlICYmIHgudmFsdWUgPT09ICdBTEwnKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbW9kaWZ5QWxsT2ZUeXBlKHR5cGUsIGFjdGlvbikge1xuICAgIGNvbnN0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgY29uc3QgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgYWxsT2ZUeXBlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSAhPT0gdHlwZSldO1xuICAgICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbFBhcmVudHNPckNoaWxkcmVuKGFsbE9mVHlwZVswXSwgYWN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgfVxuXG4gIHRyaWdnZXJWYWx1ZVVwZGF0ZSgpIHtcbiAgICBjb25zdCB1cGRhdGVkT2JqZWN0ID0ge307XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodXBkYXRlZE9iamVjdFt4LnZhbHVlXSA9IHRoaXMudmFsdWVbeC52YWx1ZV0pKTtcbiAgICB0aGlzLnZhbHVlID0gdXBkYXRlZE9iamVjdDtcbiAgfVxuXG4gIHNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFsbE9mVHlwZVswXS5jaGVja2VkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWx1ZXMgPSBhbGxPZlR5cGUubWFwKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICB9KTtcbiAgICAvLyByZW1vdmUgJ0FMTCcgdmFsdWVcbiAgICB2YWx1ZXMuc3BsaWNlKDAsIDEpO1xuICAgIHRoaXMudmFsdWVbdHlwZV0gPSB2YWx1ZXM7XG4gICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSAhPT0gdHlwZSk7XG4gICAgdGhpcy5pdGVtcyA9IHVwZGF0ZWRJdGVtcztcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhhbGxPZlR5cGVbMF0sICdhZGQnKTtcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGl0ZW0pIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSBpdGVtLnR5cGU7XG4gICAgY29uc3QgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgY29uc3QgYWxsSXRlbSA9IGFsbE9mVHlwZVswXTtcbiAgICB0aGlzLnJlbW92ZUl0ZW0oYWxsSXRlbSk7XG4gICAgYWxsSXRlbS5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gYWxsT2ZUeXBlLmZpbHRlcigoaSkgPT4gaS5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMsIC4uLnNlbGVjdGVkSXRlbXNdO1xuICAgIGNvbnN0IHZhbHVlcyA9IHNlbGVjdGVkSXRlbXMubWFwKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnZhbHVlW3R5cGVdID0gWy4uLnZhbHVlc107XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudHMgZG9lc24ndCBjb250YWluIHRoZSB0YXJnZXQgZWxlbWVudCwgaXQgaXMgYW4gb3V0c2lkZSBjbGlja1xuICAgIGlmICghdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbE9mVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUpWzBdLm9yaWdpbmFsRGF0YTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oaXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW0uaXNQYXJlbnRPZikge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblZhbHVlKGl0ZW0sIGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChpdGVtLmlzQ2hpbGRPZiAmJiB0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRWYWx1ZShpdGVtLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIG1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oc2VsZWN0aW5nLCBpdGVtQ2hhbmdlZCkge1xuICAgIGlmICghaXRlbUNoYW5nZWQuaXNDaGlsZE9mICYmICFpdGVtQ2hhbmdlZC5pc1BhcmVudE9mKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMudHlwZXMuZmlsdGVyKCh4KSA9PiAhIXguaXNQYXJlbnRPZilbMF07XG4gICAgY29uc3QgcGFyZW50VHlwZSA9IHBhcmVudC52YWx1ZTtcbiAgICBjb25zdCBhbGxQYXJlbnRUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUocGFyZW50VHlwZSk7XG4gICAgY29uc3QgY2hpbGRUeXBlID0gYWxsUGFyZW50VHlwZVswXS5pc1BhcmVudE9mO1xuICAgIGNvbnN0IGFsbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBjb25zdCBhbGxDaGVja2VkQ2hpbGRyZW4gPSBhbGxDaGlsZHJlbi5maWx0ZXIoKHgpID0+ICEheC5jaGVja2VkKTtcblxuICAgIGFsbFBhcmVudFR5cGUuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQgPSBhbGxDaGVja2VkQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgIHJldHVybiB4W3BhcmVudFR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gb2JqLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9iai5pbmRldGVybWluYXRlID0gc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA+IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhbGxDaGlsZHJlbk9mUGFyZW50ID0gYWxsQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgudmFsdWUgIT09ICdBTEwnICYmIHhbcGFyZW50VHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBvYmoudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBhbGxDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCAhPT0gc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIG9iai5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUob2JqKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbmRpdmlkdWFsQ2hpbGRyZW4oc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbUNoYW5nZWQudHlwZSAhPT0gcGFyZW50VHlwZSkge1xuICAgICAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIG9iai5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUob2JqKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbmRpdmlkdWFsQ2hpbGRyZW4oc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoYWxsQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIGl0IGhhcyBubyBjaGlsZHJlbiBhbmQgaXMgY2hlY2tlZCwgaXQgc2hvdWxkIHN0YXkgY2hlY2tlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbUNoYW5nZWQudHlwZSAhPT0gcGFyZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgb2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlSW5kZXRlcm1pbmF0ZVN0YXRlcyhhbGxQYXJlbnRUeXBlLCBhbGxDaGlsZHJlbiwgYWxsQ2hlY2tlZENoaWxkcmVuKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbGxQYXJlbnRzT3JDaGlsZHJlbihhbGxJdGVtLCBhY3Rpb24pIHtcbiAgICBpZiAoYWxsSXRlbS5pc1BhcmVudE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbENoaWxkcmVuVmFsdWUoYWxsSXRlbSwgYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGFsbEl0ZW0uaXNDaGlsZE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbFBhcmVudFZhbHVlKGFsbEl0ZW0sIGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWxsQ2hpbGRyZW5WYWx1ZShpdGVtLCBhY3Rpb24pIHtcbiAgICBjb25zdCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGNvbnN0IGNoaWxkVHlwZSA9IGl0ZW0uaXNQYXJlbnRPZjtcbiAgICBjb25zdCBwb3RlbnRpYWxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uICYmIHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoY2hpbGRUeXBlKSAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnJlbW92ZShudWxsLCBwb3RlbnRpYWxDaGlsZHJlblswXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvdGVudGlhbENoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LnZhbHVlID09PSAnQUxMJyAmJiAheC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgICAgICB4LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHguaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh4LmNoZWNrZWQgJiYgIXNlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHgpO1xuICAgICAgICB9XG4gICAgICAgIHguY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUFsbFBhcmVudFZhbHVlKGl0ZW0sIGFjdGlvbikge1xuICAgIGNvbnN0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgY29uc3QgcGFyZW50VHlwZSA9IGl0ZW0uaXNDaGlsZE9mO1xuICAgIGNvbnN0IHBvdGVudGlhbFBhcmVudHMgPSB0aGlzLmdldEFsbE9mVHlwZShwYXJlbnRUeXBlKTtcbiAgICBwb3RlbnRpYWxQYXJlbnRzLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICgheC5jaGVja2VkKSB7XG4gICAgICAgIHguaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUluZGV0ZXJtaW5hdGVTdGF0ZXMoYWxsUGFyZW50VHlwZSwgYWxsQ2hpbGRyZW4sIGFsbENoZWNrZWRDaGlsZHJlbikge1xuICAgIGNvbnN0IGFsbENoZWNrZWRPckluZGV0ZXJtaW5hdGVQYXJlbnRzID0gYWxsUGFyZW50VHlwZS5maWx0ZXIoKHgpID0+ICghIXguY2hlY2tlZCB8fCAhIXguaW5kZXRlcm1pbmF0ZSkgJiYgeC52YWx1ZSAhPT0gJ0FMTCcpO1xuICAgIGNvbnN0IGlzUGFyZW50SW5kZXRlcm1pbmF0ZSA9ICEhYWxsUGFyZW50VHlwZVswXS5jaGVja2VkID8gZmFsc2UgOiBhbGxDaGVja2VkT3JJbmRldGVybWluYXRlUGFyZW50cy5sZW5ndGggPiAwO1xuICAgIGNvbnN0IGlzQ2hpbGRJbmRldGVybWluYXRlID0gISFhbGxDaGlsZHJlblswXS5jaGVja2VkID8gZmFsc2UgOiBhbGxDaGVja2VkQ2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxQYXJlbnRUeXBlLCBpc1BhcmVudEluZGV0ZXJtaW5hdGUpO1xuICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbENoaWxkcmVuLCBpc0NoaWxkSW5kZXRlcm1pbmF0ZSk7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlblZhbHVlKHBhcmVudCwgYWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBjb25zdCBjaGlsZFR5cGUgPSBwYXJlbnQuaXNQYXJlbnRPZjtcbiAgICBjb25zdCBwb3RlbnRpYWxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgcG90ZW50aWFsQ2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh4W3BhcmVudC50eXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IHBhcmVudC52YWx1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoeC5jaGVja2VkICYmICFzZWxlY3RpbmcpIHtcbiAgICAgICAgICB4LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5hbGxPZlR5cGVTZWxlY3RlZChjaGlsZFR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKHgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4LmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRWYWx1ZShjaGlsZCwgYWN0aW9uKSB7XG4gICAgY29uc3QgYWxsUGFyZW50VHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkLmlzQ2hpbGRPZik7XG4gICAgaWYgKGFsbFBhcmVudFR5cGVbMF0uY2hlY2tlZCAmJiBhY3Rpb24gIT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGFsbFBhcmVudFR5cGVbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEluZGl2aWR1YWxDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGxldCBwYXJlbnRBbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC5pc0NoaWxkT2YpIHtcbiAgICAgICAgLy8gb25seSBhZGQgY2hpbGRyZW4gaWYgdGhlaXIgcGFyZW50cyBhcmUgbm90IGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgeFt4LmlzQ2hpbGRPZl0uZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVbeC5pc0NoaWxkT2ZdLmZpbHRlcigocCkgPT4gcCA9PT0gcGFyZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJlbnRBbHJlYWR5U2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YWx1ZVt4LnR5cGVdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSA9PT0geC52YWx1ZSkubGVuZ3RoID09PSAwICYmICFwYXJlbnRBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5hZGQoeCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWUobW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy52YWx1ZSA9IG1vZGVsIHx8IHt9O1xuICAgIGlmICghdGhpcy50eXBlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGVPYmopID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2JqLnZhbHVlO1xuICAgICAgaWYgKHRoaXMudmFsdWVbdHlwZV0pIHtcbiAgICAgICAgbGV0IGluZGV0ZXJtaW5hdGVJc1NldCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy51cGRhdGVBbGxJdGVtU3RhdGUodHlwZSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNCeVR5cGUgPSBvcHRpb25zLmFsbE9mVHlwZTtcbiAgICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSBvcHRpb25zLmFsbE9mVHlwZVNlbGVjdGVkO1xuICAgICAgICB0aGlzLnZhbHVlW3R5cGVdLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWFsbFNlbGVjdGVkICYmICFpbmRldGVybWluYXRlSXNTZXQpIHtcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVJc1NldCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShvcHRpb25zQnlUeXBlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zQnlUeXBlLmZpbHRlcigoeCkgPT4geC52YWx1ZSA9PT0gaXRlbSlbMF07XG4gICAgICAgICAgdmFsdWUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXModmFsdWUsICdhZGQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIHZhbHVlLmlzUGFyZW50T2YpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5WYWx1ZSh2YWx1ZSwgJ3NlbGVjdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0eXBlT2JqLmlzQ2hpbGRPZikge1xuICAgICAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbih0cnVlLCB7IHZhbHVlOiB0eXBlLCBpc0NoaWxkT2Y6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFsbEl0ZW1zU2VsZWN0ZWQob3B0aW9uc0J5VHlwZSwgdHlwZSkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlW3R5cGVdLmxlbmd0aCA9PT0gb3B0aW9uc0J5VHlwZS5sZW5ndGggLSAxO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKG1vZGVsKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==