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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsU0FBUztBQUNULE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7SUFtQnRELCtCQU9FO0lBSEEsc1BBQTBDLDhOQUFBO0lBRzFDLFlBQ0Y7SUFBQSxpQkFBTzs7OztJQUxMLHNEQUFtQztJQURuQyxtQ0FBa0I7SUFLbEIsZUFDRjtJQURFLDhDQUNGOzs7SUFHSSwwQkFBa0M7SUFBQSxZQUFvRDtJQUFBLGlCQUFLOzs7O0lBQXpELGVBQW9EO0lBQXBELDBGQUFvRDs7O0lBRjFGLDJCQUNFO0lBQUEsNkJBQ0U7SUFBQSwyRUFBa0M7SUFDcEMsaUJBQUs7SUFDUCxpQkFBTTs7O0lBRkUsZUFBNkI7SUFBN0IseUNBQTZCOzs7O0lBaUJyQyxnQ0FBcUU7SUFBdkIsNExBQXNCO0lBQUMsWUFBc0I7SUFBQSx3QkFBeUI7SUFBQSxpQkFBUTs7O0lBQXZELGVBQXNCO0lBQXRCLHNEQUFzQjs7QUE3Qy9GLHNEQUFzRDtBQUN0RCxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUE4Q0YsTUFBTSxPQUFPLHNCQUFzQjtJQStDakMsWUFBbUIsT0FBbUIsRUFBUyxNQUF3QjtRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUEzQ3ZFLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBSXRCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBa0I3QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBRyxJQUFJLGFBQWEsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUd0QyxhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFJakIscUJBQXFCO1FBQ3JCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBR25CLGtCQUFhLEdBQWEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQWEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR25DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFuQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLEtBQUssQ0FBQyxhQUFhO1FBQ3JCLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBdUJELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzlCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVELGtCQUFrQixDQUFDLE9BQU87UUFDeEIsTUFBTSxnQkFBZ0IsR0FBUTtZQUM1QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLElBQUk7U0FDckMsQ0FBQztRQUNGLGdCQUFnQixDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUNELGdCQUFnQixDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJO1FBQ3hCLE1BQU0sR0FBRyxHQUFHO1lBQ1YsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUMvRCxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUM1RyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUM3QixDQUFDO1FBQ0YsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELHFCQUFxQixDQUFDLE9BQU87UUFDM0IsTUFBTSxTQUFTLEdBQUc7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzVCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUM3QixDQUFDO1FBQ0YsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNyRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNQLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQjtZQUNELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELDBCQUEwQjtZQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM5RSxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZjtTQUNGO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFLO1FBQ1AsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBSTtRQUNyQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsTUFBTTtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQUksRUFBRSxNQUFNO1FBQzdCLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxLQUFLLENBQUM7UUFDaEMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7U0FDRjtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxLQUFLLENBQUM7Z0JBQ1YsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7b0JBQ3BFLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztpQkFDL0I7Z0JBQ0QsTUFBTSxXQUFXLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM1RSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2xEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDaEIsSUFBSSxnQkFBZ0IsQ0FBQztRQUNyQixJQUFJLEtBQUssRUFBRTtZQUNULGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO1lBQ2hDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDckQ7YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxnQkFBc0I7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFJO1FBQ2QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3hDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN4RSxJQUFJLEtBQUssRUFBRTtvQkFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQUk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU07UUFDMUIsTUFBTSxTQUFTLEdBQUcsTUFBTSxLQUFLLFFBQVEsQ0FBQztRQUN0QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzVCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNqQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxxQkFBcUI7UUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDMUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkJBQTZCLENBQUMsSUFBSTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDN0IsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDL0MsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLO1FBQ3RCLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUN0RSxDQUFDO0lBRUQsc0JBQXNCLENBQUMsSUFBSSxFQUFFLE1BQU07UUFDakMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCwrQkFBK0IsQ0FBQyxTQUFTLEVBQUUsV0FBVztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDckQsT0FBTztTQUNSO1FBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNoQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDOUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxNQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDUjtZQUNELE1BQU0sd0JBQXdCLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9ELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUNmLE9BQU87aUJBQ1I7Z0JBQ0QsR0FBRyxDQUFDLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNuRCxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdEYsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSx3QkFBd0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN2QyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ2YsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksbUJBQW1CLENBQUMsTUFBTSxLQUFLLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs0QkFDN0YsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7NEJBQ3pCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzRCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FBQzt5QkFDdEQ7cUJBQ0Y7eUJBQU07d0JBQ0wsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7cUJBQzFCO29CQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUM5RCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7NEJBQ2YsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3lCQUN0RDtxQkFDRjtpQkFDRjtxQkFBTTtvQkFDTCxHQUFHLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUNwQywrREFBK0Q7d0JBQy9ELE9BQU87cUJBQ1I7eUJBQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7d0JBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUN4QjtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUNoRjtJQUNILENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUN4QyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELHNCQUFzQixDQUFDLElBQUksRUFBRSxNQUFNO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLE1BQU0sS0FBSyxRQUFRLENBQUM7UUFDdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU87U0FDUjtRQUNELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNuQyxJQUFJLFNBQVMsRUFBRTtvQkFDYixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDbEI7Z0JBQ0QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsQ0FBQyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTTtRQUMvQixNQUFNLFNBQVMsR0FBRyxNQUFNLEtBQUssUUFBUSxDQUFDO1FBQ3RDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNkLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUJBQXlCLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxrQkFBa0I7UUFDdEUsTUFBTSxnQ0FBZ0MsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM5SCxNQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDL0csTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELG1CQUFtQixDQUFDLE1BQU0sRUFBRSxNQUFNO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLE1BQU0sS0FBSyxRQUFRLENBQUM7UUFDdEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDckIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzNCLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNsQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDckMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQjtpQkFDRjtnQkFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNO1FBQzdCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25ELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxRQUFRO1FBQzVCLElBQUkscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2YsOERBQThEO2dCQUM5RCxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xFLHFCQUFxQixHQUFHLElBQUksQ0FBQztxQkFDOUI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDaEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztnQkFDeEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNoQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7d0JBQ3ZDLGtCQUFrQixHQUFHLElBQUksQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDakQ7b0JBQ0QsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3ZDO29CQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7d0JBQy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQzNDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQzlFO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSTtRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsU0FBUyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs0RkEvakJVLHNCQUFzQjsyREFBdEIsc0JBQXNCOzttTUFwQ3RCLENBQUMsb0JBQW9CLENBQUM7UUFFL0IseUVBT0U7OztRQUVGLHVFQUNFO1FBSUYsOEJBQ0U7UUFBQSxzQ0FVYztRQU5aLGdIQUFVLHVCQUFtQixJQUFDLHFHQUNuQixxQkFBaUIsSUFERSxpR0FFckIsbUJBQWUsSUFGTSwrRkFHdEIscUJBQWlCLElBSEs7UUFNaEMsaUJBQWM7UUFDaEIsaUJBQU07UUFDTix1QkFBMkQ7UUFDM0QsMkVBQXFFOztRQTNCbkUsb0dBQTJEO1FBUXhELGVBQWlDO1FBQWpDLHdEQUFpQztRQVFsQyxlQUFpQjtRQUFqQixtQ0FBaUIsZ0NBQUEsZ0NBQUE7UUFVQyxlQUFnQztRQUFoQyw2Q0FBZ0M7UUFDN0IsZUFBb0I7UUFBcEIsdUNBQW9COztrREFNcEMsc0JBQXNCO2NBdENsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO2lCQUN6QzthQUNGOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNOztrQkFPTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5pbnRlcmZhY2UgSXRlbSB7XG4gIHR5cGU7XG4gIGxhYmVsO1xuICB2YWx1ZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXVsdGktcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxjaGlwXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoX2l0ZW1zIHwgYXN5bmMgfCBzbGljZTogMDpjaGlwc0NvdW50KVwiXG4gICAgICBbdHlwZV09XCJpdGVtLnR5cGVcIlxuICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgKHJlbW92ZSk9XCJyZW1vdmVGcm9tRGlzcGxheSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIlxuICAgID5cbiAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICA8L2NoaXA+XG4gICAgPGRpdiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IGNoaXBzQ291bnRcIj5cbiAgICAgIDx1bCBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB0eXBlIG9mIG5vdFNob3duXCI+KyB7eyB0eXBlLmNvdW50IH19IHt7IGxhYmVscy5tb3JlIH19IHt7IHR5cGUudHlwZSB9fTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIChzZWxlY3QpPVwiY2xpY2tPcHRpb24oJGV2ZW50KVwiXG4gICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcbiAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgID5cbiAgICAgIDwvbm92by1waWNrZXI+XG4gICAgPC9kaXY+XG4gICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgW2NsYXNzLmhhcy12YWx1ZV09XCJpdGVtcy5sZW5ndGhcIj48L2k+XG4gICAgPGxhYmVsIGNsYXNzPVwiY2xlYXItYWxsXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGhcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgpXCI+e3sgbGFiZWxzLmNsZWFyQWxsIH19IDxpIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPjwvbGFiZWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc291cmNlOiB7IG9wdGlvbnM6IFtdOyByZXN1bHRzVGVtcGxhdGU7IHNlbGVjdEFsbE9wdGlvbjogYm9vbGVhbjsgY2hpcHNDb3VudDsgc3RyaWN0UmVsYXRpb25zaGlwIH07XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBhbnkgPSAnJztcbiAgQElucHV0KClcbiAgdHlwZXM6IHsgdmFsdWU7IHNpbmd1bGFyOyBwbHVyYWw7IGlzUGFyZW50T2Y7IGlzQ2hpbGRPZiB9W107XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUoc2VsZWN0ZWRJdGVtcykge1xuICAgIGlmIChzZWxlY3RlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh0aGlzLl92YWx1ZVt4LnZhbHVlXSA9IHNlbGVjdGVkSXRlbXNbeC52YWx1ZV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmFsdWUgPSB7fTtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHRoaXMuX3ZhbHVlW3gudmFsdWVdID0gW10pKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoc2VsZWN0ZWRJdGVtcyk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHNlbGVjdGVkSXRlbXMpO1xuICB9XG5cbiAgaXRlbXM6IEl0ZW1bXSA9IFtdO1xuICBfaXRlbXMgPSBuZXcgUmVwbGF5U3ViamVjdDxJdGVtW10+KDEpO1xuICBvcHRpb25zOiBhbnk7XG4gIF9vcHRpb25zOiBhbnk7XG4gIHNlbGVjdGVkOiBhbnkgPSBudWxsO1xuICBjb25maWc6IGFueSA9IHt9O1xuICBjaGlwc0NvdW50OiBudW1iZXI7XG4gIHNlbGVjdEFsbE9wdGlvbjogYm9vbGVhbjtcbiAgc3RyaWN0UmVsYXRpb25zaGlwOiBib29sZWFuO1xuICAvLyBwcml2YXRlIGRhdGEgbW9kZWxcbiAgX3ZhbHVlID0ge307XG4gIG5vdFNob3duOiBhbnkgPSB7fTtcbiAgLy8gUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSA0O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxPcHRpb24gPSB0aGlzLnNvdXJjZS5zZWxlY3RBbGxPcHRpb24gfHwgZmFsc2U7XG4gICAgdGhpcy5jaGlwc0NvdW50ID0gdGhpcy5zb3VyY2UuY2hpcHNDb3VudCB8fCA0O1xuICAgIHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwID0gdGhpcy5zb3VyY2Uuc3RyaWN0UmVsYXRpb25zaGlwIHx8IGZhbHNlO1xuICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gIH1cblxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4gdGhpcy5tb2RpZnlBbGxPZlR5cGUodHlwZS52YWx1ZSwgJ3Vuc2VsZWN0JykpO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKG51bGwpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21EaXNwbGF5KGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5yZW1vdmUodHJ1ZSwgaXRlbSk7XG4gICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGZhbHNlLCBpdGVtKTtcbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNvdXJjZS5vcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbiA9IHRoaXMuc2V0dXBPcHRpb25zQnlUeXBlKG9wdGlvbik7XG4gICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChmb3JtYXR0ZWRPcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc291cmNlLm9wdGlvbnMgPSB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgc2V0dXBPcHRpb25zQnlUeXBlKHNlY3Rpb24pIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRTZWN0aW9uOiBhbnkgPSB7XG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBsYWJlbDogc2VjdGlvbi5sYWJlbCB8fCBzZWN0aW9uLnR5cGUsXG4gICAgfTtcbiAgICBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEgPSBzZWN0aW9uLmRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRPcHRpb24oc2VjdGlvbiwgaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICBjb25zdCBzZWxlY3RBbGwgPSB0aGlzLmNyZWF0ZVNlbGVjdEFsbE9wdGlvbihzZWN0aW9uKTtcbiAgICAgIGZvcm1hdHRlZFNlY3Rpb24uZGF0YS5zcGxpY2UoMCwgMCwgc2VsZWN0QWxsKTtcbiAgICB9XG4gICAgZm9ybWF0dGVkU2VjdGlvbi5vcmlnaW5hbERhdGEgPSBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEuc2xpY2UoKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkU2VjdGlvbjtcbiAgfVxuXG4gIGZvcm1hdE9wdGlvbihzZWN0aW9uLCBpdGVtKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgdmFsdWU6IHNlY3Rpb24uZmllbGQgPyBpdGVtW3NlY3Rpb24uZmllbGRdIDogaXRlbS52YWx1ZSB8fCBpdGVtLFxuICAgICAgbGFiZWw6IHNlY3Rpb24uZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZShzZWN0aW9uLmZvcm1hdCwgaXRlbSkgOiBpdGVtLmxhYmVsIHx8IFN0cmluZyhpdGVtLnZhbHVlIHx8IGl0ZW0pLFxuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgY2hlY2tlZDogdW5kZWZpbmVkLFxuICAgICAgaXNQYXJlbnRPZjogc2VjdGlvbi5pc1BhcmVudE9mLFxuICAgICAgaXNDaGlsZE9mOiBzZWN0aW9uLmlzQ2hpbGRPZixcbiAgICB9O1xuICAgIGlmIChvYmouaXNDaGlsZE9mKSB7XG4gICAgICBvYmpbc2VjdGlvbi5pc0NoaWxkT2ZdID0gaXRlbVtzZWN0aW9uLmlzQ2hpbGRPZl07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBjcmVhdGVTZWxlY3RBbGxPcHRpb24oc2VjdGlvbikge1xuICAgIGNvbnN0IHNlbGVjdEFsbCA9IHtcbiAgICAgIHZhbHVlOiAnQUxMJyxcbiAgICAgIGxhYmVsOiBgQWxsICR7c2VjdGlvbi50eXBlfWAsXG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBjaGVja2VkOiB0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoICYmIHRoaXMubW9kZWwuaW5kZXhPZignQUxMJykgIT09IC0xLFxuICAgICAgaXNQYXJlbnRPZjogc2VjdGlvbi5pc1BhcmVudE9mLFxuICAgICAgaXNDaGlsZE9mOiBzZWN0aW9uLmlzQ2hpbGRPZixcbiAgICB9O1xuICAgIGlmIChzZWN0aW9uLmlzQ2hpbGRPZikge1xuICAgICAgY29uc3QgYWxsUGFyZW50cyA9IHNlY3Rpb24uZGF0YS5yZWR1Y2UoKGFjY3VtLCBuZXh0KSA9PiB7XG4gICAgICAgIHJldHVybiBhY2N1bS5jb25jYXQobmV4dFtzZWN0aW9uLmlzQ2hpbGRPZl0pO1xuICAgICAgfSwgW10pO1xuICAgICAgc2VsZWN0QWxsW3NlY3Rpb24uaXNDaGlsZE9mXSA9IGFsbFBhcmVudHM7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RBbGw7XG4gIH1cblxuICBkZXNlbGVjdEFsbCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gIH1cblxuICBvbkZvY3VzKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMuZm9jdXMuZW1pdChlKTtcbiAgfVxuXG4gIGNsaWNrT3B0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmICEoZXZlbnQgaW5zdGFuY2VvZiBFdmVudCkpIHtcbiAgICAgIGlmIChldmVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShudWxsLCBldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZChldmVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZXZlbnQuY2hlY2tlZCwgZXZlbnQpO1xuICAgICAgLy8gU2V0IGZvY3VzIG9uIHRoZSBwaWNrZXJcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1waWNrZXIgPiBpbnB1dCcpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnZhbHVlID09PSAnQUxMJykge1xuICAgICAgdGhpcy5tb2RpZnlBbGxPZlR5cGUoZXZlbnQudHlwZSwgJ3NlbGVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhldmVudCwgJ2FkZCcpO1xuICAgICAgdGhpcy52YWx1ZVtldmVudC50eXBlXS5wdXNoKGV2ZW50LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlQWxsSXRlbVN0YXRlKGV2ZW50LnR5cGUpO1xuICAgICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQYXJlbnRPckNoaWxkcmVuKGV2ZW50LCAnc2VsZWN0Jyk7XG4gICAgdGhpcy5zZWxlY3QobnVsbCwgZXZlbnQpO1xuICB9XG5cbiAgdXBkYXRlQWxsSXRlbVN0YXRlKHR5cGUpIHtcbiAgICBjb25zdCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBjb25zdCBhbGxPZlR5cGVTZWxlY3RlZCA9IHRoaXMuYWxsSXRlbXNTZWxlY3RlZChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIGlmIChhbGxPZlR5cGVTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYWxsT2ZUeXBlLCBhbGxPZlR5cGVTZWxlY3RlZCB9O1xuICB9XG5cbiAgc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbE9mVHlwZSwgc3RhdHVzKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbGxJdGVtID0gYWxsT2ZUeXBlWzBdO1xuICAgIGFsbEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHN0YXR1cztcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlJdGVtcyhpdGVtLCBhY3Rpb24pIHtcbiAgICBjb25zdCBhZGRpbmcgPSBhY3Rpb24gPT09ICdhZGQnO1xuICAgIGlmIChhZGRpbmcpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlRGlzcGxheVRleHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlUZXh0KGl0ZW1zKSB7XG4gICAgdGhpcy5ub3RTaG93biA9IFtdO1xuICAgIGNvbnN0IG5vdFNob3duID0gaXRlbXMuc2xpY2UodGhpcy5jaGlwc0NvdW50KTtcbiAgICBpZiAobm90U2hvd24ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPZlR5cGUgPSBub3RTaG93bi5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZS52YWx1ZSk7XG4gICAgICAgIGlmIChzZWxlY3RlZE9mVHlwZS5sZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRPZlR5cGVbMF0udmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgICAgY291bnQgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlLnZhbHVlKS5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ID0gc2VsZWN0ZWRPZlR5cGUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gY291bnQgPT09IDEgPyB0eXBlLnNpbmd1bGFyIDogdHlwZS5wbHVyYWwgfHwgdHlwZS52YWx1ZTtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgIHRoaXMubm90U2hvd24ucHVzaCh7IHR5cGU6IGRpc3BsYXlUeXBlLCBjb3VudCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGV2ZW50LCBpdGVtKSB7XG4gICAgbGV0IHRyaWdnZXJlZEJ5RXZlbnQ7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0cmlnZ2VyZWRCeUV2ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gaXRlbTtcbiAgICBpZiAoaXRlbVRvUmVtb3ZlLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgdHJpZ2dlcmVkQnlFdmVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5tb2RpZnlBbGxPZlR5cGUoaXRlbVRvUmVtb3ZlLnR5cGUsICd1bnNlbGVjdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbGxPZlR5cGVTZWxlY3RlZChpdGVtVG9SZW1vdmUudHlwZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoaXRlbVRvUmVtb3ZlKTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVJdGVtKGl0ZW0sIHRyaWdnZXJlZEJ5RXZlbnQpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtLCB0cmlnZ2VyZWRCeUV2ZW50PzogYW55KSB7XG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMucmVtb3ZlVmFsdWUoaXRlbSk7XG4gICAgaWYgKGl0ZW0udmFsdWUgIT09ICdBTEwnKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oaXRlbSwgJ3Vuc2VsZWN0Jyk7XG4gICAgfVxuICAgIGlmICh0cmlnZ2VyZWRCeUV2ZW50KSB7XG4gICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZmFsc2UsIGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVZhbHVlKGl0ZW0pIHtcbiAgICBjb25zdCB1cGRhdGVkVmFsdWVzID0gdGhpcy52YWx1ZVtpdGVtLnR5cGVdLmZpbHRlcigoeCkgPT4geCAhPT0gaXRlbS52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZVtpdGVtLnR5cGVdID0gdXBkYXRlZFZhbHVlcztcbiAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGl0ZW0sICdyZW1vdmUnKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgdGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3QoZXZlbnQsIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbGxPZlR5cGVTZWxlY3RlZCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUgJiYgeC52YWx1ZSA9PT0gJ0FMTCcpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBtb2RpZnlBbGxPZlR5cGUodHlwZSwgYWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBjb25zdCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBhbGxPZlR5cGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgaXRlbS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlICE9PSB0eXBlKV07XG4gICAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgICAgdGhpcy52YWx1ZVt0eXBlXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsUGFyZW50c09yQ2hpbGRyZW4oYWxsT2ZUeXBlWzBdLCBhY3Rpb24pO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICB9XG5cbiAgdHJpZ2dlclZhbHVlVXBkYXRlKCkge1xuICAgIGNvbnN0IHVwZGF0ZWRPYmplY3QgPSB7fTtcbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh1cGRhdGVkT2JqZWN0W3gudmFsdWVdID0gdGhpcy52YWx1ZVt4LnZhbHVlXSkpO1xuICAgIHRoaXMudmFsdWUgPSB1cGRhdGVkT2JqZWN0O1xuICB9XG5cbiAgc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSkge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxsT2ZUeXBlWzBdLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IHZhbHVlcyA9IGFsbE9mVHlwZS5tYXAoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgIH0pO1xuICAgIC8vIHJlbW92ZSAnQUxMJyB2YWx1ZVxuICAgIHZhbHVlcy5zcGxpY2UoMCwgMSk7XG4gICAgdGhpcy52YWx1ZVt0eXBlXSA9IHZhbHVlcztcbiAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlICE9PSB0eXBlKTtcbiAgICB0aGlzLml0ZW1zID0gdXBkYXRlZEl0ZW1zO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGFsbE9mVHlwZVswXSwgJ2FkZCcpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoaXRlbSkge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IGl0ZW0udHlwZTtcbiAgICBjb25zdCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBjb25zdCBhbGxJdGVtID0gYWxsT2ZUeXBlWzBdO1xuICAgIHRoaXMucmVtb3ZlSXRlbShhbGxJdGVtKTtcbiAgICBhbGxJdGVtLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBhbGxPZlR5cGUuZmlsdGVyKChpKSA9PiBpLmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcywgLi4uc2VsZWN0ZWRJdGVtc107XG4gICAgY29uc3QgdmFsdWVzID0gc2VsZWN0ZWRJdGVtcy5tYXAoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbLi4udmFsdWVzXTtcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayhldmVudCkge1xuICAgIC8vIElmIHRoZSBlbGVtZW50cyBkb2Vzbid0IGNvbnRhaW4gdGhlIHRhcmdldCBlbGVtZW50LCBpdCBpcyBhbiBvdXRzaWRlIGNsaWNrXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxsT2ZUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZSlbMF0ub3JpZ2luYWxEYXRhO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50T3JDaGlsZHJlbihpdGVtLCBhY3Rpb24pIHtcbiAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbS5pc1BhcmVudE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVmFsdWUoaXRlbSwgYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uaXNDaGlsZE9mICYmIHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhcmVudFZhbHVlKGl0ZW0sIGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihzZWxlY3RpbmcsIGl0ZW1DaGFuZ2VkKSB7XG4gICAgaWYgKCFpdGVtQ2hhbmdlZC5pc0NoaWxkT2YgJiYgIWl0ZW1DaGFuZ2VkLmlzUGFyZW50T2YpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy50eXBlcy5maWx0ZXIoKHgpID0+ICEheC5pc1BhcmVudE9mKVswXTtcbiAgICBjb25zdCBwYXJlbnRUeXBlID0gcGFyZW50LnZhbHVlO1xuICAgIGNvbnN0IGFsbFBhcmVudFR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZShwYXJlbnRUeXBlKTtcbiAgICBjb25zdCBjaGlsZFR5cGUgPSBhbGxQYXJlbnRUeXBlWzBdLmlzUGFyZW50T2Y7XG4gICAgY29uc3QgYWxsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIGNvbnN0IGFsbENoZWNrZWRDaGlsZHJlbiA9IGFsbENoaWxkcmVuLmZpbHRlcigoeCkgPT4gISF4LmNoZWNrZWQpO1xuXG4gICAgYWxsUGFyZW50VHlwZS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmoudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCA9IGFsbENoZWNrZWRDaGlsZHJlbi5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIHhbcGFyZW50VHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBvYmoudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFsbENoaWxkcmVuT2ZQYXJlbnQgPSBhbGxDaGlsZHJlbi5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICByZXR1cm4geC52YWx1ZSAhPT0gJ0FMTCcgJiYgeFtwYXJlbnRUeXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IG9iai52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGFsbENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoICE9PSBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgb2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShvYmopO1xuICAgICAgICAgICAgICB0aGlzLmFkZEluZGl2aWR1YWxDaGlsZHJlbihzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtQ2hhbmdlZC50eXBlICE9PSBwYXJlbnRUeXBlKSB7XG4gICAgICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgb2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShvYmopO1xuICAgICAgICAgICAgICB0aGlzLmFkZEluZGl2aWR1YWxDaGlsZHJlbihzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChhbGxDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIGNoaWxkcmVuIGFuZCBpcyBjaGVja2VkLCBpdCBzaG91bGQgc3RheSBjaGVja2VkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtQ2hhbmdlZC50eXBlICE9PSBwYXJlbnRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCBvYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVJbmRldGVybWluYXRlU3RhdGVzKGFsbFBhcmVudFR5cGUsIGFsbENoaWxkcmVuLCBhbGxDaGVja2VkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFsbFBhcmVudHNPckNoaWxkcmVuKGFsbEl0ZW0sIGFjdGlvbikge1xuICAgIGlmIChhbGxJdGVtLmlzUGFyZW50T2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsQ2hpbGRyZW5WYWx1ZShhbGxJdGVtLCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoYWxsSXRlbS5pc0NoaWxkT2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsUGFyZW50VmFsdWUoYWxsSXRlbSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbGxDaGlsZHJlblZhbHVlKGl0ZW0sIGFjdGlvbikge1xuICAgIGNvbnN0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgY29uc3QgY2hpbGRUeXBlID0gaXRlbS5pc1BhcmVudE9mO1xuICAgIGNvbnN0IHBvdGVudGlhbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24gJiYgdGhpcy5hbGxPZlR5cGVTZWxlY3RlZChjaGlsZFR5cGUpICYmICFzZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHBvdGVudGlhbENoaWxkcmVuWzBdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG90ZW50aWFsQ2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgudmFsdWUgPT09ICdBTEwnICYmICF4LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgICAgIHguY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgeC5pbmRldGVybWluYXRlID0gc2VsZWN0aW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHguY2hlY2tlZCAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgeCk7XG4gICAgICAgIH1cbiAgICAgICAgeC5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQWxsUGFyZW50VmFsdWUoaXRlbSwgYWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBjb25zdCBwYXJlbnRUeXBlID0gaXRlbS5pc0NoaWxkT2Y7XG4gICAgY29uc3QgcG90ZW50aWFsUGFyZW50cyA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHBhcmVudFR5cGUpO1xuICAgIHBvdGVudGlhbFBhcmVudHMuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKCF4LmNoZWNrZWQpIHtcbiAgICAgICAgeC5pbmRldGVybWluYXRlID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSW5kZXRlcm1pbmF0ZVN0YXRlcyhhbGxQYXJlbnRUeXBlLCBhbGxDaGlsZHJlbiwgYWxsQ2hlY2tlZENoaWxkcmVuKSB7XG4gICAgY29uc3QgYWxsQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZVBhcmVudHMgPSBhbGxQYXJlbnRUeXBlLmZpbHRlcigoeCkgPT4gKCEheC5jaGVja2VkIHx8ICEheC5pbmRldGVybWluYXRlKSAmJiB4LnZhbHVlICE9PSAnQUxMJyk7XG4gICAgY29uc3QgaXNQYXJlbnRJbmRldGVybWluYXRlID0gISFhbGxQYXJlbnRUeXBlWzBdLmNoZWNrZWQgPyBmYWxzZSA6IGFsbENoZWNrZWRPckluZGV0ZXJtaW5hdGVQYXJlbnRzLmxlbmd0aCA+IDA7XG4gICAgY29uc3QgaXNDaGlsZEluZGV0ZXJtaW5hdGUgPSAhIWFsbENoaWxkcmVuWzBdLmNoZWNrZWQgPyBmYWxzZSA6IGFsbENoZWNrZWRDaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbFBhcmVudFR5cGUsIGlzUGFyZW50SW5kZXRlcm1pbmF0ZSk7XG4gICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUoYWxsQ2hpbGRyZW4sIGlzQ2hpbGRJbmRldGVybWluYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuVmFsdWUocGFyZW50LCBhY3Rpb24pIHtcbiAgICBjb25zdCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGNvbnN0IGNoaWxkVHlwZSA9IHBhcmVudC5pc1BhcmVudE9mO1xuICAgIGNvbnN0IHBvdGVudGlhbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBwb3RlbnRpYWxDaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHhbcGFyZW50LnR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gcGFyZW50LnZhbHVlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh4LmNoZWNrZWQgJiYgIXNlbGVjdGluZykge1xuICAgICAgICAgIHguY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGNoaWxkVHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoeCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoeCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHguY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudFZhbHVlKGNoaWxkLCBhY3Rpb24pIHtcbiAgICBjb25zdCBhbGxQYXJlbnRUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGQuaXNDaGlsZE9mKTtcbiAgICBpZiAoYWxsUGFyZW50VHlwZVswXS5jaGVja2VkICYmIGFjdGlvbiAhPT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoYWxsUGFyZW50VHlwZVswXSk7XG4gICAgfVxuICB9XG5cbiAgYWRkSW5kaXZpZHVhbENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgbGV0IHBhcmVudEFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LmlzQ2hpbGRPZikge1xuICAgICAgICAvLyBvbmx5IGFkZCBjaGlsZHJlbiBpZiB0aGVpciBwYXJlbnRzIGFyZSBub3QgYWxyZWFkeSBzZWxlY3RlZFxuICAgICAgICB4W3guaXNDaGlsZE9mXS5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZVt4LmlzQ2hpbGRPZl0uZmlsdGVyKChwKSA9PiBwID09PSBwYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcmVudEFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZhbHVlW3gudHlwZV0uZmlsdGVyKChpdGVtKSA9PiBpdGVtID09PSB4LnZhbHVlKS5sZW5ndGggPT09IDAgJiYgIXBhcmVudEFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLmFkZCh4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZShtb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnZhbHVlID0gbW9kZWwgfHwge307XG4gICAgaWYgKCF0aGlzLnR5cGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZU9iaikgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IHR5cGVPYmoudmFsdWU7XG4gICAgICBpZiAodGhpcy52YWx1ZVt0eXBlXSkge1xuICAgICAgICBsZXQgaW5kZXRlcm1pbmF0ZUlzU2V0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnVwZGF0ZUFsbEl0ZW1TdGF0ZSh0eXBlKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0J5VHlwZSA9IG9wdGlvbnMuYWxsT2ZUeXBlO1xuICAgICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IG9wdGlvbnMuYWxsT2ZUeXBlU2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMudmFsdWVbdHlwZV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmICghYWxsU2VsZWN0ZWQgJiYgIWluZGV0ZXJtaW5hdGVJc1NldCkge1xuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZUlzU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKG9wdGlvbnNCeVR5cGUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNCeVR5cGUuZmlsdGVyKCh4KSA9PiB4LnZhbHVlID09PSBpdGVtKVswXTtcbiAgICAgICAgICB2YWx1ZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoIWFsbFNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyh2YWx1ZSwgJ2FkZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgdmFsdWUuaXNQYXJlbnRPZikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblZhbHVlKHZhbHVlLCAnc2VsZWN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR5cGVPYmouaXNDaGlsZE9mKSB7XG4gICAgICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKHRydWUsIHsgdmFsdWU6IHR5cGUsIGlzQ2hpbGRPZjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZVt0eXBlXSA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWxsSXRlbXNTZWxlY3RlZChvcHRpb25zQnlUeXBlLCB0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVbdHlwZV0ubGVuZ3RoID09PSBvcHRpb25zQnlUeXBlLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUobW9kZWwpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19