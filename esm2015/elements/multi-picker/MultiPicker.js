/**
 * @fileoverview added by tsickle
 * Generated from: elements/multi-picker/MultiPicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { ReplaySubject } from 'rxjs';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoMultiPickerElement)),
    multi: true,
};
/**
 * @record
 */
function Item() { }
if (false) {
    /** @type {?} */
    Item.prototype.type;
    /** @type {?} */
    Item.prototype.label;
    /** @type {?} */
    Item.prototype.value;
}
export class NovoMultiPickerElement {
    /**
     * @param {?} element
     * @param {?} labels
     */
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
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
        this.chipsCount = 4;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} selectedItems
     * @return {?}
     */
    set value(selectedItems) {
        if (selectedItems) {
            this.types.forEach((/**
             * @param {?} x
             * @return {?}
             */
            (x) => (this._value[x.value] = selectedItems[x.value])));
        }
        else {
            this._value = {};
            this.types.forEach((/**
             * @param {?} x
             * @return {?}
             */
            (x) => (this._value[x.value] = [])));
        }
        this.changed.emit(selectedItems);
        this.onModelChange(selectedItems);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectAllOption = this.source.selectAllOption || false;
        this.chipsCount = this.source.chipsCount || 4;
        this.strictRelationship = this.source.strictRelationship || false;
        this.setupOptions();
    }
    /**
     * @return {?}
     */
    clearValue() {
        this.types.forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => this.modifyAllOfType(type.value, 'unselect')));
        this.items = [];
        this._items.next(this.items);
        this.setInitialValue(null);
        this.onModelChange(this.value);
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    removeFromDisplay(event, item) {
        this.remove(true, item);
        this.modifyAffectedParentsOrChildren(false, item);
    }
    /**
     * @return {?}
     */
    setupOptions() {
        this.options = this.source.options || [];
        this._options = [];
        if (this.options) {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                /** @type {?} */
                const formattedOption = this.setupOptionsByType(option);
                this._options.push(formattedOption);
            }));
        }
        this.source.options = this._options;
    }
    /**
     * @param {?} section
     * @return {?}
     */
    setupOptionsByType(section) {
        /** @type {?} */
        const formattedSection = {
            type: section.type,
            label: section.label || section.type,
        };
        formattedSection.data = section.data.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            return this.formatOption(section, item);
        }));
        if (this.selectAllOption) {
            /** @type {?} */
            const selectAll = this.createSelectAllOption(section);
            formattedSection.data.splice(0, 0, selectAll);
        }
        formattedSection.originalData = formattedSection.data.slice();
        return formattedSection;
    }
    /**
     * @param {?} section
     * @param {?} item
     * @return {?}
     */
    formatOption(section, item) {
        /** @type {?} */
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
    /**
     * @param {?} section
     * @return {?}
     */
    createSelectAllOption(section) {
        /** @type {?} */
        const selectAll = {
            value: 'ALL',
            label: `All ${section.type}`,
            type: section.type,
            checked: this.model && this.model.length && this.model.indexOf('ALL') !== -1,
            isParentOf: section.isParentOf,
            isChildOf: section.isChildOf,
        };
        if (section.isChildOf) {
            /** @type {?} */
            const allParents = section.data.reduce((/**
             * @param {?} accum
             * @param {?} next
             * @return {?}
             */
            (accum, next) => {
                return accum.concat(next[section.isChildOf]);
            }), []);
            selectAll[section.isChildOf] = allParents;
        }
        return selectAll;
    }
    /**
     * @return {?}
     */
    deselectAll() {
        this.selected = null;
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    select(event, item) {
        this.blur.emit(event);
        this.deselectAll();
        this.selected = item;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus(e) {
        this.element.nativeElement.classList.add('selected');
        this.focus.emit(e);
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
            /** @type {?} */
            const input = this.element.nativeElement.querySelector('novo-picker > input');
            if (input) {
                input.focus();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} type
     * @return {?}
     */
    updateAllItemState(type) {
        /** @type {?} */
        const allOfType = this.getAllOfType(type);
        /** @type {?} */
        const allOfTypeSelected = this.allItemsSelected(allOfType, type);
        if (allOfTypeSelected) {
            this.selectAll(allOfType, type);
        }
        return { allOfType, allOfTypeSelected };
    }
    /**
     * @param {?} allOfType
     * @param {?} status
     * @return {?}
     */
    setIndeterminateState(allOfType, status) {
        if (!this.selectAllOption) {
            return;
        }
        /** @type {?} */
        const allItem = allOfType[0];
        allItem.indeterminate = status;
    }
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    updateDisplayItems(item, action) {
        /** @type {?} */
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
    /**
     * @param {?} items
     * @return {?}
     */
    updateDisplayText(items) {
        this.notShown = [];
        /** @type {?} */
        const notShown = items.slice(this.chipsCount);
        if (notShown.length > 0) {
            this.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            (type) => {
                /** @type {?} */
                let count;
                /** @type {?} */
                const selectedOfType = notShown.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => x.type === type.value));
                if (selectedOfType.length === 1 && selectedOfType[0].value === 'ALL') {
                    count = this.getAllOfType(type.value).length - 1;
                }
                else {
                    count = selectedOfType.length;
                }
                /** @type {?} */
                const displayType = count === 1 ? type.singular : type.plural || type.value;
                if (count > 0) {
                    this.notShown.push({ type: displayType, count });
                }
            }));
        }
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    remove(event, item) {
        /** @type {?} */
        let triggeredByEvent;
        if (event) {
            triggeredByEvent = true;
        }
        /** @type {?} */
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
    /**
     * @param {?} item
     * @param {?=} triggeredByEvent
     * @return {?}
     */
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
    /**
     * @param {?} item
     * @return {?}
     */
    removeValue(item) {
        /** @type {?} */
        const updatedValues = this.value[item.type].filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x !== item.value));
        this.value[item.type] = updatedValues;
        this.triggerValueUpdate();
        this.updateDisplayItems(item, 'remove');
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} type
     * @return {?}
     */
    allOfTypeSelected(type) {
        return this.items.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.type === type && x.value === 'ALL')).length > 0;
    }
    /**
     * @param {?} type
     * @param {?} action
     * @return {?}
     */
    modifyAllOfType(type, action) {
        /** @type {?} */
        const selecting = action === 'select';
        /** @type {?} */
        const allOfType = this.getAllOfType(type);
        allOfType.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            item.checked = selecting;
            item.indeterminate = false;
        }));
        if (selecting) {
            this.selectAll(allOfType, type);
        }
        else {
            this.items = [...this.items.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => x.type !== type))];
            this._items.next(this.items);
            this.value[type] = [];
        }
        if (this.selectAllOption) {
            this.updateAllParentsOrChildren(allOfType[0], action);
        }
        this.triggerValueUpdate();
    }
    /**
     * @return {?}
     */
    triggerValueUpdate() {
        /** @type {?} */
        const updatedObject = {};
        this.types.forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => (updatedObject[x.value] = this.value[x.value])));
        this.value = updatedObject;
    }
    /**
     * @param {?} allOfType
     * @param {?} type
     * @return {?}
     */
    selectAll(allOfType, type) {
        if (!this.selectAllOption) {
            return;
        }
        allOfType[0].checked = true;
        /** @type {?} */
        const values = allOfType.map((/**
         * @param {?} i
         * @return {?}
         */
        (i) => {
            return i.value;
        }));
        // remove 'ALL' value
        values.splice(0, 1);
        this.value[type] = values;
        /** @type {?} */
        const updatedItems = this.items.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.type !== type));
        this.items = updatedItems;
        this.updateDisplayItems(allOfType[0], 'add');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    handleRemoveItemIfAllSelected(item) {
        if (!this.selectAllOption) {
            return;
        }
        /** @type {?} */
        const type = item.type;
        /** @type {?} */
        const allOfType = this.getAllOfType(type);
        /** @type {?} */
        const allItem = allOfType[0];
        this.removeItem(allItem);
        allItem.indeterminate = true;
        /** @type {?} */
        const selectedItems = allOfType.filter((/**
         * @param {?} i
         * @return {?}
         */
        (i) => i.checked === true));
        this.items = [...this.items, ...selectedItems];
        /** @type {?} */
        const values = selectedItems.map((/**
         * @param {?} i
         * @return {?}
         */
        (i) => {
            return i.value;
        }));
        this.value[type] = [...values];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleOutsideClick(event) {
        // If the elements doesn't contain the target element, it is an outside click
        if (!this.element.nativeElement.contains(event.target)) {
            this.blur.emit(event);
            this.deselectAll();
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getAllOfType(type) {
        return this._options.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.type === type))[0].originalData;
    }
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    updateParentOrChildren(item, action) {
        if (this.strictRelationship && item.isParentOf) {
            this.updateChildrenValue(item, action);
        }
        else if (item.isChildOf && this.selectAllOption) {
            this.updateParentValue(item, action);
        }
    }
    /**
     * @param {?} selecting
     * @param {?} itemChanged
     * @return {?}
     */
    modifyAffectedParentsOrChildren(selecting, itemChanged) {
        if (!itemChanged.isChildOf && !itemChanged.isParentOf) {
            return;
        }
        /** @type {?} */
        const parent = this.types.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => !!x.isParentOf))[0];
        /** @type {?} */
        const parentType = parent.value;
        /** @type {?} */
        const allParentType = this.getAllOfType(parentType);
        /** @type {?} */
        const childType = allParentType[0].isParentOf;
        /** @type {?} */
        const allChildren = this.getAllOfType(childType);
        /** @type {?} */
        const allCheckedChildren = allChildren.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => !!x.checked));
        allParentType.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            if (obj.value === 'ALL') {
                return;
            }
            /** @type {?} */
            const selectedChildrenOfParent = allCheckedChildren.filter((/**
             * @param {?} x
             * @return {?}
             */
            (x) => {
                return x[parentType].filter((/**
                 * @param {?} y
                 * @return {?}
                 */
                (y) => y === obj.value)).length > 0;
            }));
            if (selecting) {
                if (obj.checked) {
                    return;
                }
                obj.indeterminate = selectedChildrenOfParent.length > 0;
            }
            else {
                /** @type {?} */
                const allChildrenOfParent = allChildren.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.value !== 'ALL' && x[parentType].filter((/**
                     * @param {?} y
                     * @return {?}
                     */
                    (y) => y === obj.value)).length > 0;
                }));
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
        }));
        if (this.selectAllOption) {
            this.updateIndeterminateStates(allParentType, allChildren, allCheckedChildren);
        }
    }
    /**
     * @param {?} allItem
     * @param {?} action
     * @return {?}
     */
    updateAllParentsOrChildren(allItem, action) {
        if (allItem.isParentOf) {
            this.updateAllChildrenValue(allItem, action);
        }
        else if (allItem.isChildOf) {
            this.updateAllParentValue(allItem, action);
        }
    }
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    updateAllChildrenValue(item, action) {
        /** @type {?} */
        const selecting = action === 'select';
        /** @type {?} */
        const childType = item.isParentOf;
        /** @type {?} */
        const potentialChildren = this.getAllOfType(childType);
        if (this.selectAllOption && this.allOfTypeSelected(childType) && !selecting) {
            this.remove(null, potentialChildren[0]);
            return;
        }
        potentialChildren.forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
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
        }));
    }
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    updateAllParentValue(item, action) {
        /** @type {?} */
        const selecting = action === 'select';
        /** @type {?} */
        const parentType = item.isChildOf;
        /** @type {?} */
        const potentialParents = this.getAllOfType(parentType);
        potentialParents.forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (!x.checked) {
                x.indeterminate = selecting;
            }
        }));
    }
    /**
     * @param {?} allParentType
     * @param {?} allChildren
     * @param {?} allCheckedChildren
     * @return {?}
     */
    updateIndeterminateStates(allParentType, allChildren, allCheckedChildren) {
        /** @type {?} */
        const allCheckedOrIndeterminateParents = allParentType.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => (!!x.checked || !!x.indeterminate) && x.value !== 'ALL'));
        /** @type {?} */
        const isParentIndeterminate = !!allParentType[0].checked ? false : allCheckedOrIndeterminateParents.length > 0;
        /** @type {?} */
        const isChildIndeterminate = !!allChildren[0].checked ? false : allCheckedChildren.length > 0;
        this.setIndeterminateState(allParentType, isParentIndeterminate);
        this.setIndeterminateState(allChildren, isChildIndeterminate);
    }
    /**
     * @param {?} parent
     * @param {?} action
     * @return {?}
     */
    updateChildrenValue(parent, action) {
        /** @type {?} */
        const selecting = action === 'select';
        /** @type {?} */
        const childType = parent.isParentOf;
        /** @type {?} */
        const potentialChildren = this.getAllOfType(childType);
        potentialChildren.forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (x.value === 'ALL') {
                return;
            }
            if (x[parent.type].filter((/**
             * @param {?} y
             * @return {?}
             */
            (y) => y === parent.value)).length > 0) {
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
        }));
    }
    /**
     * @param {?} child
     * @param {?} action
     * @return {?}
     */
    updateParentValue(child, action) {
        /** @type {?} */
        const allParentType = this.getAllOfType(child.isChildOf);
        if (allParentType[0].checked && action !== 'select') {
            this.handleRemoveItemIfAllSelected(allParentType[0]);
        }
    }
    /**
     * @param {?} children
     * @return {?}
     */
    addIndividualChildren(children) {
        /** @type {?} */
        let parentAlreadySelected = false;
        children.forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (x.isChildOf) {
                // only add children if their parents are not already selected
                x[x.isChildOf].forEach((/**
                 * @param {?} parent
                 * @return {?}
                 */
                (parent) => {
                    if (this.value[x.isChildOf].filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    (p) => p === parent)).length > 0) {
                        parentAlreadySelected = true;
                    }
                }));
            }
            if (this.value[x.type].filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item === x.value)).length === 0 && !parentAlreadySelected) {
                this.add(x);
            }
        }));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    setInitialValue(model) {
        this.items = [];
        this.value = model || {};
        if (!this.types) {
            return;
        }
        this.types.forEach((/**
         * @param {?} typeObj
         * @return {?}
         */
        (typeObj) => {
            /** @type {?} */
            const type = typeObj.value;
            if (this.value[type]) {
                /** @type {?} */
                let indeterminateIsSet = false;
                /** @type {?} */
                const options = this.updateAllItemState(type);
                /** @type {?} */
                const optionsByType = options.allOfType;
                /** @type {?} */
                const allSelected = options.allOfTypeSelected;
                this.value[type].forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (!allSelected && !indeterminateIsSet) {
                        indeterminateIsSet = true;
                        this.setIndeterminateState(optionsByType, true);
                    }
                    /** @type {?} */
                    const value = optionsByType.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    (x) => x.value === item))[0];
                    value.checked = true;
                    if (!allSelected) {
                        this.updateDisplayItems(value, 'add');
                    }
                    if (this.strictRelationship && value.isParentOf) {
                        this.updateChildrenValue(value, 'select');
                    }
                }));
                if (typeObj.isChildOf) {
                    this.modifyAffectedParentsOrChildren(true, { value: type, isChildOf: true });
                }
            }
            else {
                this.value[type] = [];
            }
        }));
    }
    /**
     * @param {?} optionsByType
     * @param {?} type
     * @return {?}
     */
    allItemsSelected(optionsByType, type) {
        return this.value[type].length === optionsByType.length - 1;
    }
    // Set touched on blur
    /**
     * @param {?} e
     * @return {?}
     */
    onTouched(e) {
        this.element.nativeElement.classList.remove('selected');
        this.onModelTouched();
        this.blur.emit(e);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        this.setInitialValue(model);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
}
NovoMultiPickerElement.decorators = [
    { type: Component, args: [{
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
                }
            }] }
];
/** @nocollapse */
NovoMultiPickerElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService }
];
NovoMultiPickerElement.propDecorators = {
    source: [{ type: Input }],
    placeholder: [{ type: Input }],
    types: [{ type: Input }],
    changed: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoMultiPickerElement.prototype.source;
    /** @type {?} */
    NovoMultiPickerElement.prototype.placeholder;
    /** @type {?} */
    NovoMultiPickerElement.prototype.types;
    /** @type {?} */
    NovoMultiPickerElement.prototype.changed;
    /** @type {?} */
    NovoMultiPickerElement.prototype.focus;
    /** @type {?} */
    NovoMultiPickerElement.prototype.blur;
    /** @type {?} */
    NovoMultiPickerElement.prototype.items;
    /** @type {?} */
    NovoMultiPickerElement.prototype._items;
    /** @type {?} */
    NovoMultiPickerElement.prototype.options;
    /** @type {?} */
    NovoMultiPickerElement.prototype._options;
    /** @type {?} */
    NovoMultiPickerElement.prototype.selected;
    /** @type {?} */
    NovoMultiPickerElement.prototype.config;
    /** @type {?} */
    NovoMultiPickerElement.prototype.chipsCount;
    /** @type {?} */
    NovoMultiPickerElement.prototype.selectAllOption;
    /** @type {?} */
    NovoMultiPickerElement.prototype.strictRelationship;
    /** @type {?} */
    NovoMultiPickerElement.prototype._value;
    /** @type {?} */
    NovoMultiPickerElement.prototype.notShown;
    /** @type {?} */
    NovoMultiPickerElement.prototype.model;
    /** @type {?} */
    NovoMultiPickerElement.prototype.onModelChange;
    /** @type {?} */
    NovoMultiPickerElement.prototype.onModelTouched;
    /** @type {?} */
    NovoMultiPickerElement.prototype.element;
    /** @type {?} */
    NovoMultiPickerElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7TUFHcEQsb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELG1CQUlDOzs7SUFIQyxvQkFBSzs7SUFDTCxxQkFBTTs7SUFDTixxQkFBTTs7QUF5Q1IsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUErQ2pDLFlBQW1CLE9BQW1CLEVBQVMsTUFBd0I7UUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBM0N2RSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUl0QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWtCN0MsVUFBSyxHQUFX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YztnQkFDeEIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUO2dCQUNELElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxrQkFBa0I7aUJBQ3pDO2FBQ0Y7Ozs7WUExRG1CLFVBQVU7WUFJckIsZ0JBQWdCOzs7cUJBd0R0QixLQUFLOzBCQUVMLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxNQUFNO29CQUVOLE1BQU07bUJBRU4sTUFBTTtvQkFPTixLQUFLOzs7O0lBakJOLHdDQUNtRzs7SUFDbkcsNkNBQ3NCOztJQUN0Qix1Q0FDNEQ7O0lBQzVELHlDQUNnRDs7SUFDaEQsdUNBQzhDOztJQUM5QyxzQ0FDNkM7O0lBa0I3Qyx1Q0FBbUI7O0lBQ25CLHdDQUFzQzs7SUFDdEMseUNBQWE7O0lBQ2IsMENBQWM7O0lBQ2QsMENBQXFCOztJQUNyQix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsaURBQXlCOztJQUN6QixvREFBNEI7O0lBRTVCLHdDQUFZOztJQUNaLDBDQUFtQjs7SUFFbkIsdUNBQVc7O0lBQ1gsK0NBQW9DOztJQUNwQyxnREFBcUM7O0lBRXpCLHlDQUEwQjs7SUFBRSx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBDSElQU19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9NdWx0aVBpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmludGVyZmFjZSBJdGVtIHtcbiAgdHlwZTtcbiAgbGFiZWw7XG4gIHZhbHVlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdWx0aS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtDSElQU19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNoaXBcbiAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIChfaXRlbXMgfCBhc3luYyB8IHNsaWNlOiAwOmNoaXBzQ291bnQpXCJcbiAgICAgIFt0eXBlXT1cIml0ZW0udHlwZVwiXG4gICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAocmVtb3ZlKT1cInJlbW92ZUZyb21EaXNwbGF5KCRldmVudCwgaXRlbSlcIlxuICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiXG4gICAgPlxuICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgIDwvY2hpcD5cbiAgICA8ZGl2ICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gY2hpcHNDb3VudFwiPlxuICAgICAgPHVsIGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHR5cGUgb2Ygbm90U2hvd25cIj4rIHt7IHR5cGUuY291bnQgfX0ge3sgbGFiZWxzLm1vcmUgfX0ge3sgdHlwZS50eXBlIH19PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNoaXAtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICA8bm92by1waWNrZXJcbiAgICAgICAgY2xlYXJWYWx1ZU9uU2VsZWN0PVwidHJ1ZVwiXG4gICAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgKHNlbGVjdCk9XCJjbGlja09wdGlvbigkZXZlbnQpXCJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICBbb3ZlcnJpZGVFbGVtZW50XT1cImVsZW1lbnRcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICA8L2Rpdj5cbiAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiBbY2xhc3MuaGFzLXZhbHVlXT1cIml0ZW1zLmxlbmd0aFwiPjwvaT5cbiAgICA8bGFiZWwgY2xhc3M9XCJjbGVhci1hbGxcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aFwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj57eyBsYWJlbHMuY2xlYXJBbGwgfX0gPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+PC9sYWJlbD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9NdWx0aVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzb3VyY2U6IHsgb3B0aW9uczogW107IHJlc3VsdHNUZW1wbGF0ZTsgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuOyBjaGlwc0NvdW50OyBzdHJpY3RSZWxhdGlvbnNoaXAgfTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IGFueSA9ICcnO1xuICBASW5wdXQoKVxuICB0eXBlczogeyB2YWx1ZTsgc2luZ3VsYXI7IHBsdXJhbDsgaXNQYXJlbnRPZjsgaXNDaGlsZE9mIH1bXTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShzZWxlY3RlZEl0ZW1zKSB7XG4gICAgaWYgKHNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHRoaXMuX3ZhbHVlW3gudmFsdWVdID0gc2VsZWN0ZWRJdGVtc1t4LnZhbHVlXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHt9O1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBbXSkpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQuZW1pdChzZWxlY3RlZEl0ZW1zKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2Uoc2VsZWN0ZWRJdGVtcyk7XG4gIH1cblxuICBpdGVtczogSXRlbVtdID0gW107XG4gIF9pdGVtcyA9IG5ldyBSZXBsYXlTdWJqZWN0PEl0ZW1bXT4oMSk7XG4gIG9wdGlvbnM6IGFueTtcbiAgX29wdGlvbnM6IGFueTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIGNoaXBzQ291bnQ6IG51bWJlcjtcbiAgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuO1xuICBzdHJpY3RSZWxhdGlvbnNoaXA6IGJvb2xlYW47XG4gIC8vIHByaXZhdGUgZGF0YSBtb2RlbFxuICBfdmFsdWUgPSB7fTtcbiAgbm90U2hvd246IGFueSA9IHt9O1xuICAvLyBQbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3NcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IDQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbiA9IHRoaXMuc291cmNlLnNlbGVjdEFsbE9wdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSB0aGlzLnNvdXJjZS5jaGlwc0NvdW50IHx8IDQ7XG4gICAgdGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgPSB0aGlzLnNvdXJjZS5zdHJpY3RSZWxhdGlvbnNoaXAgfHwgZmFsc2U7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB0aGlzLm1vZGlmeUFsbE9mVHlwZSh0eXBlLnZhbHVlLCAndW5zZWxlY3QnKSk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUobnVsbCk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpc3BsYXkoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLnJlbW92ZSh0cnVlLCBpdGVtKTtcbiAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZmFsc2UsIGl0ZW0pO1xuICB9XG5cbiAgc2V0dXBPcHRpb25zKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc291cmNlLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkT3B0aW9uID0gdGhpcy5zZXR1cE9wdGlvbnNCeVR5cGUob3B0aW9uKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGZvcm1hdHRlZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2Uub3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBzZXR1cE9wdGlvbnNCeVR5cGUoc2VjdGlvbikge1xuICAgIGNvbnN0IGZvcm1hdHRlZFNlY3Rpb246IGFueSA9IHtcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGxhYmVsOiBzZWN0aW9uLmxhYmVsIHx8IHNlY3Rpb24udHlwZSxcbiAgICB9O1xuICAgIGZvcm1hdHRlZFNlY3Rpb24uZGF0YSA9IHNlY3Rpb24uZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdE9wdGlvbihzZWN0aW9uLCBpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIGNvbnN0IHNlbGVjdEFsbCA9IHRoaXMuY3JlYXRlU2VsZWN0QWxsT3B0aW9uKHNlY3Rpb24pO1xuICAgICAgZm9ybWF0dGVkU2VjdGlvbi5kYXRhLnNwbGljZSgwLCAwLCBzZWxlY3RBbGwpO1xuICAgIH1cbiAgICBmb3JtYXR0ZWRTZWN0aW9uLm9yaWdpbmFsRGF0YSA9IGZvcm1hdHRlZFNlY3Rpb24uZGF0YS5zbGljZSgpO1xuICAgIHJldHVybiBmb3JtYXR0ZWRTZWN0aW9uO1xuICB9XG5cbiAgZm9ybWF0T3B0aW9uKHNlY3Rpb24sIGl0ZW0pIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICB2YWx1ZTogc2VjdGlvbi5maWVsZCA/IGl0ZW1bc2VjdGlvbi5maWVsZF0gOiBpdGVtLnZhbHVlIHx8IGl0ZW0sXG4gICAgICBsYWJlbDogc2VjdGlvbi5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHNlY3Rpb24uZm9ybWF0LCBpdGVtKSA6IGl0ZW0ubGFiZWwgfHwgU3RyaW5nKGl0ZW0udmFsdWUgfHwgaXRlbSksXG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBjaGVja2VkOiB1bmRlZmluZWQsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKG9iai5pc0NoaWxkT2YpIHtcbiAgICAgIG9ialtzZWN0aW9uLmlzQ2hpbGRPZl0gPSBpdGVtW3NlY3Rpb24uaXNDaGlsZE9mXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGNyZWF0ZVNlbGVjdEFsbE9wdGlvbihzZWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0QWxsID0ge1xuICAgICAgdmFsdWU6ICdBTEwnLFxuICAgICAgbGFiZWw6IGBBbGwgJHtzZWN0aW9uLnR5cGV9YCxcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGNoZWNrZWQ6IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggJiYgdGhpcy5tb2RlbC5pbmRleE9mKCdBTEwnKSAhPT0gLTEsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKHNlY3Rpb24uaXNDaGlsZE9mKSB7XG4gICAgICBjb25zdCBhbGxQYXJlbnRzID0gc2VjdGlvbi5kYXRhLnJlZHVjZSgoYWNjdW0sIG5leHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY3VtLmNvbmNhdChuZXh0W3NlY3Rpb24uaXNDaGlsZE9mXSk7XG4gICAgICB9LCBbXSk7XG4gICAgICBzZWxlY3RBbGxbc2VjdGlvbi5pc0NoaWxkT2ZdID0gYWxsUGFyZW50cztcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdEFsbDtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXRlbTtcbiAgfVxuXG4gIG9uRm9jdXMoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGUpO1xuICB9XG5cbiAgY2xpY2tPcHRpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgIShldmVudCBpbnN0YW5jZW9mIEV2ZW50KSkge1xuICAgICAgaWYgKGV2ZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihldmVudC5jaGVja2VkLCBldmVudCk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXBpY2tlciA+IGlucHV0Jyk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShldmVudC50eXBlLCAnc2VsZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGV2ZW50LCAnYWRkJyk7XG4gICAgICB0aGlzLnZhbHVlW2V2ZW50LnR5cGVdLnB1c2goZXZlbnQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVBbGxJdGVtU3RhdGUoZXZlbnQudHlwZSk7XG4gICAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oZXZlbnQsICdzZWxlY3QnKTtcbiAgICB0aGlzLnNlbGVjdChudWxsLCBldmVudCk7XG4gIH1cblxuICB1cGRhdGVBbGxJdGVtU3RhdGUodHlwZSkge1xuICAgIGNvbnN0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGFsbE9mVHlwZVNlbGVjdGVkID0gdGhpcy5hbGxJdGVtc1NlbGVjdGVkKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgaWYgKGFsbE9mVHlwZVNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4geyBhbGxPZlR5cGUsIGFsbE9mVHlwZVNlbGVjdGVkIH07XG4gIH1cblxuICBzZXRJbmRldGVybWluYXRlU3RhdGUoYWxsT2ZUeXBlLCBzdGF0dXMpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgYWxsSXRlbS5pbmRldGVybWluYXRlID0gc3RhdHVzO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheUl0ZW1zKGl0ZW0sIGFjdGlvbikge1xuICAgIGNvbnN0IGFkZGluZyA9IGFjdGlvbiA9PT0gJ2FkZCc7XG4gICAgaWYgKGFkZGluZykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pID4gLTEpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VGV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVRleHQoaXRlbXMpIHtcbiAgICB0aGlzLm5vdFNob3duID0gW107XG4gICAgY29uc3Qgbm90U2hvd24gPSBpdGVtcy5zbGljZSh0aGlzLmNoaXBzQ291bnQpO1xuICAgIGlmIChub3RTaG93bi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IGNvdW50O1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9mVHlwZSA9IG5vdFNob3duLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlLnZhbHVlKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkT2ZUeXBlLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZE9mVHlwZVswXS52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgICBjb3VudCA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUudmFsdWUpLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnQgPSBzZWxlY3RlZE9mVHlwZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzcGxheVR5cGUgPSBjb3VudCA9PT0gMSA/IHR5cGUuc2luZ3VsYXIgOiB0eXBlLnBsdXJhbCB8fCB0eXBlLnZhbHVlO1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5ub3RTaG93bi5wdXNoKHsgdHlwZTogZGlzcGxheVR5cGUsIGNvdW50IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZXZlbnQsIGl0ZW0pIHtcbiAgICBsZXQgdHJpZ2dlcmVkQnlFdmVudDtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRyaWdnZXJlZEJ5RXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpdGVtVG9SZW1vdmUgPSBpdGVtO1xuICAgIGlmIChpdGVtVG9SZW1vdmUudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0cmlnZ2VyZWRCeUV2ZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShpdGVtVG9SZW1vdmUudHlwZSwgJ3Vuc2VsZWN0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGl0ZW1Ub1JlbW92ZS50eXBlKSkge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtVG9SZW1vdmUpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUl0ZW0oaXRlbSwgdHJpZ2dlcmVkQnlFdmVudCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGl0ZW0sIHRyaWdnZXJlZEJ5RXZlbnQ/OiBhbnkpIHtcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5yZW1vdmVWYWx1ZShpdGVtKTtcbiAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ0FMTCcpIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50T3JDaGlsZHJlbihpdGVtLCAndW5zZWxlY3QnKTtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXJlZEJ5RXZlbnQpIHtcbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihmYWxzZSwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaXRlbSkge1xuICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZXMgPSB0aGlzLnZhbHVlW2l0ZW0udHlwZV0uZmlsdGVyKCh4KSA9PiB4ICE9PSBpdGVtLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlW2l0ZW0udHlwZV0gPSB1cGRhdGVkVmFsdWVzO1xuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoaXRlbSwgJ3JlbW92ZScpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09PSAwICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdChldmVudCwgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFsbE9mVHlwZVNlbGVjdGVkKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZSAmJiB4LnZhbHVlID09PSAnQUxMJykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG1vZGlmeUFsbE9mVHlwZSh0eXBlLCBhY3Rpb24pIHtcbiAgICBjb25zdCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGNvbnN0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGFsbE9mVHlwZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpXTtcbiAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRzT3JDaGlsZHJlbihhbGxPZlR5cGVbMF0sIGFjdGlvbik7XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gIH1cblxuICB0cmlnZ2VyVmFsdWVVcGRhdGUoKSB7XG4gICAgY29uc3QgdXBkYXRlZE9iamVjdCA9IHt9O1xuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHVwZGF0ZWRPYmplY3RbeC52YWx1ZV0gPSB0aGlzLnZhbHVlW3gudmFsdWVdKSk7XG4gICAgdGhpcy52YWx1ZSA9IHVwZGF0ZWRPYmplY3Q7XG4gIH1cblxuICBzZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbGxPZlR5cGVbMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgY29uc3QgdmFsdWVzID0gYWxsT2ZUeXBlLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgLy8gcmVtb3ZlICdBTEwnIHZhbHVlXG4gICAgdmFsdWVzLnNwbGljZSgwLCAxKTtcbiAgICB0aGlzLnZhbHVlW3R5cGVdID0gdmFsdWVzO1xuICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpO1xuICAgIHRoaXMuaXRlbXMgPSB1cGRhdGVkSXRlbXM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoYWxsT2ZUeXBlWzBdLCAnYWRkJyk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gaXRlbS50eXBlO1xuICAgIGNvbnN0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgdGhpcy5yZW1vdmVJdGVtKGFsbEl0ZW0pO1xuICAgIGFsbEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IGFsbE9mVHlwZS5maWx0ZXIoKGkpID0+IGkuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCAuLi5zZWxlY3RlZEl0ZW1zXTtcbiAgICBjb25zdCB2YWx1ZXMgPSBzZWxlY3RlZEl0ZW1zLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZVt0eXBlXSA9IFsuLi52YWx1ZXNdO1xuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnRzIGRvZXNuJ3QgY29udGFpbiB0aGUgdGFyZ2V0IGVsZW1lbnQsIGl0IGlzIGFuIG91dHNpZGUgY2xpY2tcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxPZlR5cGUodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlKVswXS5vcmlnaW5hbERhdGE7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRPckNoaWxkcmVuKGl0ZW0sIGFjdGlvbikge1xuICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtLmlzUGFyZW50T2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5WYWx1ZShpdGVtLCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pc0NoaWxkT2YgJiYgdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50VmFsdWUoaXRlbSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKHNlbGVjdGluZywgaXRlbUNoYW5nZWQpIHtcbiAgICBpZiAoIWl0ZW1DaGFuZ2VkLmlzQ2hpbGRPZiAmJiAhaXRlbUNoYW5nZWQuaXNQYXJlbnRPZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnR5cGVzLmZpbHRlcigoeCkgPT4gISF4LmlzUGFyZW50T2YpWzBdO1xuICAgIGNvbnN0IHBhcmVudFR5cGUgPSBwYXJlbnQudmFsdWU7XG4gICAgY29uc3QgYWxsUGFyZW50VHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHBhcmVudFR5cGUpO1xuICAgIGNvbnN0IGNoaWxkVHlwZSA9IGFsbFBhcmVudFR5cGVbMF0uaXNQYXJlbnRPZjtcbiAgICBjb25zdCBhbGxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgY29uc3QgYWxsQ2hlY2tlZENoaWxkcmVuID0gYWxsQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiAhIXguY2hlY2tlZCk7XG5cbiAgICBhbGxQYXJlbnRUeXBlLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50ID0gYWxsQ2hlY2tlZENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICByZXR1cm4geFtwYXJlbnRUeXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IG9iai52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYWxsQ2hpbGRyZW5PZlBhcmVudCA9IGFsbENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LnZhbHVlICE9PSAnQUxMJyAmJiB4W3BhcmVudFR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gb2JqLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgYWxsQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggIT09IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGFsbENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBpdCBoYXMgbm8gY2hpbGRyZW4gYW5kIGlzIGNoZWNrZWQsIGl0IHNob3VsZCBzdGF5IGNoZWNrZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUluZGV0ZXJtaW5hdGVTdGF0ZXMoYWxsUGFyZW50VHlwZSwgYWxsQ2hpbGRyZW4sIGFsbENoZWNrZWRDaGlsZHJlbik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWxsUGFyZW50c09yQ2hpbGRyZW4oYWxsSXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKGFsbEl0ZW0uaXNQYXJlbnRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxDaGlsZHJlblZhbHVlKGFsbEl0ZW0sIGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChhbGxJdGVtLmlzQ2hpbGRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRWYWx1ZShhbGxJdGVtLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFsbENoaWxkcmVuVmFsdWUoaXRlbSwgYWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBjb25zdCBjaGlsZFR5cGUgPSBpdGVtLmlzUGFyZW50T2Y7XG4gICAgY29uc3QgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbiAmJiB0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGNoaWxkVHlwZSkgJiYgIXNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW1vdmUobnVsbCwgcG90ZW50aWFsQ2hpbGRyZW5bMF0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3RlbnRpYWxDaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC52YWx1ZSA9PT0gJ0FMTCcgJiYgIXguY2hlY2tlZCkge1xuICAgICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeC5jaGVja2VkICYmICFzZWxlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB4KTtcbiAgICAgICAgfVxuICAgICAgICB4LmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBbGxQYXJlbnRWYWx1ZShpdGVtLCBhY3Rpb24pIHtcbiAgICBjb25zdCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGNvbnN0IHBhcmVudFR5cGUgPSBpdGVtLmlzQ2hpbGRPZjtcbiAgICBjb25zdCBwb3RlbnRpYWxQYXJlbnRzID0gdGhpcy5nZXRBbGxPZlR5cGUocGFyZW50VHlwZSk7XG4gICAgcG90ZW50aWFsUGFyZW50cy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoIXguY2hlY2tlZCkge1xuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJbmRldGVybWluYXRlU3RhdGVzKGFsbFBhcmVudFR5cGUsIGFsbENoaWxkcmVuLCBhbGxDaGVja2VkQ2hpbGRyZW4pIHtcbiAgICBjb25zdCBhbGxDaGVja2VkT3JJbmRldGVybWluYXRlUGFyZW50cyA9IGFsbFBhcmVudFR5cGUuZmlsdGVyKCh4KSA9PiAoISF4LmNoZWNrZWQgfHwgISF4LmluZGV0ZXJtaW5hdGUpICYmIHgudmFsdWUgIT09ICdBTEwnKTtcbiAgICBjb25zdCBpc1BhcmVudEluZGV0ZXJtaW5hdGUgPSAhIWFsbFBhcmVudFR5cGVbMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZVBhcmVudHMubGVuZ3RoID4gMDtcbiAgICBjb25zdCBpc0NoaWxkSW5kZXRlcm1pbmF0ZSA9ICEhYWxsQ2hpbGRyZW5bMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZENoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUoYWxsUGFyZW50VHlwZSwgaXNQYXJlbnRJbmRldGVybWluYXRlKTtcbiAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxDaGlsZHJlbiwgaXNDaGlsZEluZGV0ZXJtaW5hdGUpO1xuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5WYWx1ZShwYXJlbnQsIGFjdGlvbikge1xuICAgIGNvbnN0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgY29uc3QgY2hpbGRUeXBlID0gcGFyZW50LmlzUGFyZW50T2Y7XG4gICAgY29uc3QgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIHBvdGVudGlhbENoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoeFtwYXJlbnQudHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBwYXJlbnQudmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHguY2hlY2tlZCAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoY2hpbGRUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZCh4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSh4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeC5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50VmFsdWUoY2hpbGQsIGFjdGlvbikge1xuICAgIGNvbnN0IGFsbFBhcmVudFR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZC5pc0NoaWxkT2YpO1xuICAgIGlmIChhbGxQYXJlbnRUeXBlWzBdLmNoZWNrZWQgJiYgYWN0aW9uICE9PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChhbGxQYXJlbnRUeXBlWzBdKTtcbiAgICB9XG4gIH1cblxuICBhZGRJbmRpdmlkdWFsQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBsZXQgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gZmFsc2U7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHguaXNDaGlsZE9mKSB7XG4gICAgICAgIC8vIG9ubHkgYWRkIGNoaWxkcmVuIGlmIHRoZWlyIHBhcmVudHMgYXJlIG5vdCBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgIHhbeC5pc0NoaWxkT2ZdLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlW3guaXNDaGlsZE9mXS5maWx0ZXIoKHApID0+IHAgPT09IHBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmFsdWVbeC50eXBlXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPT09IHgudmFsdWUpLmxlbmd0aCA9PT0gMCAmJiAhcGFyZW50QWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuYWRkKHgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlKG1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBtb2RlbCB8fCB7fTtcbiAgICBpZiAoIXRoaXMudHlwZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlT2JqKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gdHlwZU9iai52YWx1ZTtcbiAgICAgIGlmICh0aGlzLnZhbHVlW3R5cGVdKSB7XG4gICAgICAgIGxldCBpbmRldGVybWluYXRlSXNTZXQgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudXBkYXRlQWxsSXRlbVN0YXRlKHR5cGUpO1xuICAgICAgICBjb25zdCBvcHRpb25zQnlUeXBlID0gb3B0aW9ucy5hbGxPZlR5cGU7XG4gICAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gb3B0aW9ucy5hbGxPZlR5cGVTZWxlY3RlZDtcbiAgICAgICAgdGhpcy52YWx1ZVt0eXBlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCAmJiAhaW5kZXRlcm1pbmF0ZUlzU2V0KSB7XG4gICAgICAgICAgICBpbmRldGVybWluYXRlSXNTZXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUob3B0aW9uc0J5VHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc0J5VHlwZS5maWx0ZXIoKHgpID0+IHgudmFsdWUgPT09IGl0ZW0pWzBdO1xuICAgICAgICAgIHZhbHVlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghYWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKHZhbHVlLCAnYWRkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiB2YWx1ZS5pc1BhcmVudE9mKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVmFsdWUodmFsdWUsICdzZWxlY3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZU9iai5pc0NoaWxkT2YpIHtcbiAgICAgICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4odHJ1ZSwgeyB2YWx1ZTogdHlwZSwgaXNDaGlsZE9mOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhbGxJdGVtc1NlbGVjdGVkKG9wdGlvbnNCeVR5cGUsIHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVt0eXBlXS5sZW5ndGggPT09IG9wdGlvbnNCeVR5cGUubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZShtb2RlbCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=