/**
 * @fileoverview added by tsickle
 * Generated from: elements/multi-picker/MultiPicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, ElementRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
// Vendor
import { ReplaySubject } from 'rxjs';
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
                let formattedOption = this.setupOptionsByType(option);
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
        let formattedSection = {
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
            let selectAll = this.createSelectAllOption(section);
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
        let obj = {
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
        let selectAll = {
            value: 'ALL',
            label: `All ${section.type}`,
            type: section.type,
            checked: this.model && this.model.length && this.model.indexOf('ALL') !== -1,
            isParentOf: section.isParentOf,
            isChildOf: section.isChildOf,
        };
        if (section.isChildOf) {
            /** @type {?} */
            let allParents = section.data.reduce((/**
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
            let input = this.element.nativeElement.querySelector('novo-picker > input');
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
        let allOfType = this.getAllOfType(type);
        /** @type {?} */
        let allOfTypeSelected = this.allItemsSelected(allOfType, type);
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
        let allItem = allOfType[0];
        allItem.indeterminate = status;
    }
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    updateDisplayItems(item, action) {
        /** @type {?} */
        let adding = action === 'add';
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
        let notShown = items.slice(this.chipsCount);
        if (notShown.length > 0) {
            this.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            (type) => {
                /** @type {?} */
                let count;
                /** @type {?} */
                let selectedOfType = notShown.filter((/**
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
                let displayType = count === 1 ? type.singular : type.plural || type.value;
                if (count > 0) {
                    this.notShown.push({ type: displayType, count: count });
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
        let itemToRemove = item;
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
        let updatedValues = this.value[item.type].filter((/**
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
        let selecting = action === 'select';
        /** @type {?} */
        let allOfType = this.getAllOfType(type);
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
        let updatedObject = {};
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
        let values = allOfType.map((/**
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
        let updatedItems = this.items.filter((/**
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
        let type = item.type;
        /** @type {?} */
        let allOfType = this.getAllOfType(type);
        /** @type {?} */
        let allItem = allOfType[0];
        this.removeItem(allItem);
        allItem.indeterminate = true;
        /** @type {?} */
        let selectedItems = allOfType.filter((/**
         * @param {?} i
         * @return {?}
         */
        (i) => i.checked === true));
        this.items = [...this.items, ...selectedItems];
        /** @type {?} */
        let values = selectedItems.map((/**
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
        let parent = this.types.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => !!x.isParentOf))[0];
        /** @type {?} */
        let parentType = parent.value;
        /** @type {?} */
        let allParentType = this.getAllOfType(parentType);
        /** @type {?} */
        let childType = allParentType[0].isParentOf;
        /** @type {?} */
        let allChildren = this.getAllOfType(childType);
        /** @type {?} */
        let allCheckedChildren = allChildren.filter((/**
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
            let selectedChildrenOfParent = allCheckedChildren.filter((/**
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
                let allChildrenOfParent = allChildren.filter((/**
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
        let selecting = action === 'select';
        /** @type {?} */
        let childType = item.isParentOf;
        /** @type {?} */
        let potentialChildren = this.getAllOfType(childType);
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
        let selecting = action === 'select';
        /** @type {?} */
        let parentType = item.isChildOf;
        /** @type {?} */
        let potentialParents = this.getAllOfType(parentType);
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
        let allCheckedOrIndeterminateParents = allParentType.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => (!!x.checked || !!x.indeterminate) && x.value !== 'ALL'));
        /** @type {?} */
        let isParentIndeterminate = !!allParentType[0].checked ? false : allCheckedOrIndeterminateParents.length > 0;
        /** @type {?} */
        let isChildIndeterminate = !!allChildren[0].checked ? false : allCheckedChildren.length > 0;
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
        let selecting = action === 'select';
        /** @type {?} */
        let childType = parent.isParentOf;
        /** @type {?} */
        let potentialChildren = this.getAllOfType(childType);
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
        let allParentType = this.getAllOfType(child.isChildOf);
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
            let type = typeObj.value;
            if (this.value[type]) {
                /** @type {?} */
                let indeterminateIsSet = false;
                /** @type {?} */
                let options = this.updateAllItemState(type);
                /** @type {?} */
                let optionsByType = options.allOfType;
                /** @type {?} */
                let allSelected = options.allOfTypeSelected;
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
                    let value = optionsByType.filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUVyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7TUFHL0Isb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELG1CQUlDOzs7SUFIQyxvQkFBSzs7SUFDTCxxQkFBTTs7SUFDTixxQkFBTTs7QUF5Q1IsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUErQ2pDLFlBQW1CLE9BQW1CLEVBQVMsTUFBd0I7UUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBM0N2RSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUl0QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWtCN0MsVUFBSyxHQUFX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QVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QlQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLGtCQUFrQjtpQkFDekM7YUFDRjs7OztZQTVEcUQsVUFBVTtZQU12RCxnQkFBZ0I7OztxQkF3RHRCLEtBQUs7MEJBRUwsS0FBSztvQkFFTCxLQUFLO3NCQUVMLE1BQU07b0JBRU4sTUFBTTttQkFFTixNQUFNO29CQU9OLEtBQUs7Ozs7SUFqQk4sd0NBQ21HOztJQUNuRyw2Q0FDc0I7O0lBQ3RCLHVDQUM0RDs7SUFDNUQseUNBQ2dEOztJQUNoRCx1Q0FDOEM7O0lBQzlDLHNDQUM2Qzs7SUFrQjdDLHVDQUFtQjs7SUFDbkIsd0NBQXNDOztJQUN0Qyx5Q0FBYTs7SUFDYiwwQ0FBYzs7SUFDZCwwQ0FBcUI7O0lBQ3JCLHdDQUFpQjs7SUFDakIsNENBQW1COztJQUNuQixpREFBeUI7O0lBQ3pCLG9EQUE0Qjs7SUFFNUIsd0NBQVk7O0lBQ1osMENBQW1COztJQUVuQix1Q0FBVzs7SUFDWCwrQ0FBbUM7O0lBQ25DLGdEQUFvQzs7SUFFeEIseUNBQTBCOztJQUFFLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5pbnRlcmZhY2UgSXRlbSB7XG4gIHR5cGU7XG4gIGxhYmVsO1xuICB2YWx1ZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXVsdGktcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxjaGlwXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoX2l0ZW1zIHwgYXN5bmMgfCBzbGljZTogMDpjaGlwc0NvdW50KVwiXG4gICAgICBbdHlwZV09XCJpdGVtLnR5cGVcIlxuICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgKHJlbW92ZSk9XCJyZW1vdmVGcm9tRGlzcGxheSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIlxuICAgID5cbiAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICA8L2NoaXA+XG4gICAgPGRpdiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IGNoaXBzQ291bnRcIj5cbiAgICAgIDx1bCBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB0eXBlIG9mIG5vdFNob3duXCI+KyB7eyB0eXBlLmNvdW50IH19IHt7IGxhYmVscy5tb3JlIH19IHt7IHR5cGUudHlwZSB9fTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIChzZWxlY3QpPVwiY2xpY2tPcHRpb24oJGV2ZW50KVwiXG4gICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcbiAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgID5cbiAgICAgIDwvbm92by1waWNrZXI+XG4gICAgPC9kaXY+XG4gICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgW2NsYXNzLmhhcy12YWx1ZV09XCJpdGVtcy5sZW5ndGhcIj48L2k+XG4gICAgPGxhYmVsIGNsYXNzPVwiY2xlYXItYWxsXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGhcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgpXCI+e3sgbGFiZWxzLmNsZWFyQWxsIH19IDxpIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPjwvbGFiZWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc291cmNlOiB7IG9wdGlvbnM6IFtdOyByZXN1bHRzVGVtcGxhdGU7IHNlbGVjdEFsbE9wdGlvbjogYm9vbGVhbjsgY2hpcHNDb3VudDsgc3RyaWN0UmVsYXRpb25zaGlwIH07XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBhbnkgPSAnJztcbiAgQElucHV0KClcbiAgdHlwZXM6IHsgdmFsdWU7IHNpbmd1bGFyOyBwbHVyYWw7IGlzUGFyZW50T2Y7IGlzQ2hpbGRPZiB9W107XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUoc2VsZWN0ZWRJdGVtcykge1xuICAgIGlmIChzZWxlY3RlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh0aGlzLl92YWx1ZVt4LnZhbHVlXSA9IHNlbGVjdGVkSXRlbXNbeC52YWx1ZV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmFsdWUgPSB7fTtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHRoaXMuX3ZhbHVlW3gudmFsdWVdID0gW10pKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoc2VsZWN0ZWRJdGVtcyk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHNlbGVjdGVkSXRlbXMpO1xuICB9XG5cbiAgaXRlbXM6IEl0ZW1bXSA9IFtdO1xuICBfaXRlbXMgPSBuZXcgUmVwbGF5U3ViamVjdDxJdGVtW10+KDEpO1xuICBvcHRpb25zOiBhbnk7XG4gIF9vcHRpb25zOiBhbnk7XG4gIHNlbGVjdGVkOiBhbnkgPSBudWxsO1xuICBjb25maWc6IGFueSA9IHt9O1xuICBjaGlwc0NvdW50OiBudW1iZXI7XG4gIHNlbGVjdEFsbE9wdGlvbjogYm9vbGVhbjtcbiAgc3RyaWN0UmVsYXRpb25zaGlwOiBib29sZWFuO1xuICAvLyBwcml2YXRlIGRhdGEgbW9kZWxcbiAgX3ZhbHVlID0ge307XG4gIG5vdFNob3duOiBhbnkgPSB7fTtcbiAgLy8gUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgdGhpcy5jaGlwc0NvdW50ID0gNDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VsZWN0QWxsT3B0aW9uID0gdGhpcy5zb3VyY2Uuc2VsZWN0QWxsT3B0aW9uIHx8IGZhbHNlO1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IHRoaXMuc291cmNlLmNoaXBzQ291bnQgfHwgNDtcbiAgICB0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCA9IHRoaXMuc291cmNlLnN0cmljdFJlbGF0aW9uc2hpcCB8fCBmYWxzZTtcbiAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHRoaXMubW9kaWZ5QWxsT2ZUeXBlKHR5cGUudmFsdWUsICd1bnNlbGVjdCcpKTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZShudWxsKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICByZW1vdmVGcm9tRGlzcGxheShldmVudCwgaXRlbSkge1xuICAgIHRoaXMucmVtb3ZlKHRydWUsIGl0ZW0pO1xuICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihmYWxzZSwgaXRlbSk7XG4gIH1cblxuICBzZXR1cE9wdGlvbnMoKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zb3VyY2Uub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBsZXQgZm9ybWF0dGVkT3B0aW9uID0gdGhpcy5zZXR1cE9wdGlvbnNCeVR5cGUob3B0aW9uKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGZvcm1hdHRlZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2Uub3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBzZXR1cE9wdGlvbnNCeVR5cGUoc2VjdGlvbikge1xuICAgIGxldCBmb3JtYXR0ZWRTZWN0aW9uOiBhbnkgPSB7XG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBsYWJlbDogc2VjdGlvbi5sYWJlbCB8fCBzZWN0aW9uLnR5cGUsXG4gICAgfTtcbiAgICBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEgPSBzZWN0aW9uLmRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRPcHRpb24oc2VjdGlvbiwgaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICBsZXQgc2VsZWN0QWxsID0gdGhpcy5jcmVhdGVTZWxlY3RBbGxPcHRpb24oc2VjdGlvbik7XG4gICAgICBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEuc3BsaWNlKDAsIDAsIHNlbGVjdEFsbCk7XG4gICAgfVxuICAgIGZvcm1hdHRlZFNlY3Rpb24ub3JpZ2luYWxEYXRhID0gZm9ybWF0dGVkU2VjdGlvbi5kYXRhLnNsaWNlKCk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFNlY3Rpb247XG4gIH1cblxuICBmb3JtYXRPcHRpb24oc2VjdGlvbiwgaXRlbSkge1xuICAgIGxldCBvYmogPSB7XG4gICAgICB2YWx1ZTogc2VjdGlvbi5maWVsZCA/IGl0ZW1bc2VjdGlvbi5maWVsZF0gOiBpdGVtLnZhbHVlIHx8IGl0ZW0sXG4gICAgICBsYWJlbDogc2VjdGlvbi5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHNlY3Rpb24uZm9ybWF0LCBpdGVtKSA6IGl0ZW0ubGFiZWwgfHwgU3RyaW5nKGl0ZW0udmFsdWUgfHwgaXRlbSksXG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBjaGVja2VkOiB1bmRlZmluZWQsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKG9iai5pc0NoaWxkT2YpIHtcbiAgICAgIG9ialtzZWN0aW9uLmlzQ2hpbGRPZl0gPSBpdGVtW3NlY3Rpb24uaXNDaGlsZE9mXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGNyZWF0ZVNlbGVjdEFsbE9wdGlvbihzZWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdEFsbCA9IHtcbiAgICAgIHZhbHVlOiAnQUxMJyxcbiAgICAgIGxhYmVsOiBgQWxsICR7c2VjdGlvbi50eXBlfWAsXG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBjaGVja2VkOiB0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoICYmIHRoaXMubW9kZWwuaW5kZXhPZignQUxMJykgIT09IC0xLFxuICAgICAgaXNQYXJlbnRPZjogc2VjdGlvbi5pc1BhcmVudE9mLFxuICAgICAgaXNDaGlsZE9mOiBzZWN0aW9uLmlzQ2hpbGRPZixcbiAgICB9O1xuICAgIGlmIChzZWN0aW9uLmlzQ2hpbGRPZikge1xuICAgICAgbGV0IGFsbFBhcmVudHMgPSBzZWN0aW9uLmRhdGEucmVkdWNlKChhY2N1bSwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjdW0uY29uY2F0KG5leHRbc2VjdGlvbi5pc0NoaWxkT2ZdKTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIHNlbGVjdEFsbFtzZWN0aW9uLmlzQ2hpbGRPZl0gPSBhbGxQYXJlbnRzO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0QWxsO1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBpdGVtO1xuICB9XG5cbiAgb25Gb2N1cyhlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZSk7XG4gIH1cblxuICBjbGlja09wdGlvbihldmVudCkge1xuICAgIGlmIChldmVudCAmJiAhKGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICBpZiAoZXZlbnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGQoZXZlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGV2ZW50LmNoZWNrZWQsIGV2ZW50KTtcbiAgICAgIC8vIFNldCBmb2N1cyBvbiB0aGUgcGlja2VyXG4gICAgICBsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXBpY2tlciA+IGlucHV0Jyk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShldmVudC50eXBlLCAnc2VsZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGV2ZW50LCAnYWRkJyk7XG4gICAgICB0aGlzLnZhbHVlW2V2ZW50LnR5cGVdLnB1c2goZXZlbnQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVBbGxJdGVtU3RhdGUoZXZlbnQudHlwZSk7XG4gICAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oZXZlbnQsICdzZWxlY3QnKTtcbiAgICB0aGlzLnNlbGVjdChudWxsLCBldmVudCk7XG4gIH1cblxuICB1cGRhdGVBbGxJdGVtU3RhdGUodHlwZSkge1xuICAgIGxldCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBsZXQgYWxsT2ZUeXBlU2VsZWN0ZWQgPSB0aGlzLmFsbEl0ZW1zU2VsZWN0ZWQoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICBpZiAoYWxsT2ZUeXBlU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiB7IGFsbE9mVHlwZSwgYWxsT2ZUeXBlU2VsZWN0ZWQgfTtcbiAgfVxuXG4gIHNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxPZlR5cGUsIHN0YXR1cykge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgYWxsSXRlbS5pbmRldGVybWluYXRlID0gc3RhdHVzO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheUl0ZW1zKGl0ZW0sIGFjdGlvbikge1xuICAgIGxldCBhZGRpbmcgPSBhY3Rpb24gPT09ICdhZGQnO1xuICAgIGlmIChhZGRpbmcpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlRGlzcGxheVRleHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlUZXh0KGl0ZW1zKSB7XG4gICAgdGhpcy5ub3RTaG93biA9IFtdO1xuICAgIGxldCBub3RTaG93biA9IGl0ZW1zLnNsaWNlKHRoaXMuY2hpcHNDb3VudCk7XG4gICAgaWYgKG5vdFNob3duLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBsZXQgY291bnQ7XG4gICAgICAgIGxldCBzZWxlY3RlZE9mVHlwZSA9IG5vdFNob3duLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlLnZhbHVlKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkT2ZUeXBlLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZE9mVHlwZVswXS52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgICBjb3VudCA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUudmFsdWUpLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnQgPSBzZWxlY3RlZE9mVHlwZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpc3BsYXlUeXBlID0gY291bnQgPT09IDEgPyB0eXBlLnNpbmd1bGFyIDogdHlwZS5wbHVyYWwgfHwgdHlwZS52YWx1ZTtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgIHRoaXMubm90U2hvd24ucHVzaCh7IHR5cGU6IGRpc3BsYXlUeXBlLCBjb3VudDogY291bnQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShldmVudCwgaXRlbSkge1xuICAgIGxldCB0cmlnZ2VyZWRCeUV2ZW50O1xuICAgIGlmIChldmVudCkge1xuICAgICAgdHJpZ2dlcmVkQnlFdmVudCA9IHRydWU7XG4gICAgfVxuICAgIGxldCBpdGVtVG9SZW1vdmUgPSBpdGVtO1xuICAgIGlmIChpdGVtVG9SZW1vdmUudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0cmlnZ2VyZWRCeUV2ZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShpdGVtVG9SZW1vdmUudHlwZSwgJ3Vuc2VsZWN0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGl0ZW1Ub1JlbW92ZS50eXBlKSkge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtVG9SZW1vdmUpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUl0ZW0oaXRlbSwgdHJpZ2dlcmVkQnlFdmVudCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGl0ZW0sIHRyaWdnZXJlZEJ5RXZlbnQ/OiBhbnkpIHtcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5yZW1vdmVWYWx1ZShpdGVtKTtcbiAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ0FMTCcpIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50T3JDaGlsZHJlbihpdGVtLCAndW5zZWxlY3QnKTtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXJlZEJ5RXZlbnQpIHtcbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihmYWxzZSwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaXRlbSkge1xuICAgIGxldCB1cGRhdGVkVmFsdWVzID0gdGhpcy52YWx1ZVtpdGVtLnR5cGVdLmZpbHRlcigoeCkgPT4geCAhPT0gaXRlbS52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZVtpdGVtLnR5cGVdID0gdXBkYXRlZFZhbHVlcztcbiAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGl0ZW0sICdyZW1vdmUnKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgdGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3QoZXZlbnQsIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbGxPZlR5cGVTZWxlY3RlZCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUgJiYgeC52YWx1ZSA9PT0gJ0FMTCcpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBtb2RpZnlBbGxPZlR5cGUodHlwZSwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGFsbE9mVHlwZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpXTtcbiAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRzT3JDaGlsZHJlbihhbGxPZlR5cGVbMF0sIGFjdGlvbik7XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gIH1cblxuICB0cmlnZ2VyVmFsdWVVcGRhdGUoKSB7XG4gICAgbGV0IHVwZGF0ZWRPYmplY3QgPSB7fTtcbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh1cGRhdGVkT2JqZWN0W3gudmFsdWVdID0gdGhpcy52YWx1ZVt4LnZhbHVlXSkpO1xuICAgIHRoaXMudmFsdWUgPSB1cGRhdGVkT2JqZWN0O1xuICB9XG5cbiAgc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSkge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxsT2ZUeXBlWzBdLmNoZWNrZWQgPSB0cnVlO1xuICAgIGxldCB2YWx1ZXMgPSBhbGxPZlR5cGUubWFwKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICB9KTtcbiAgICAvLyByZW1vdmUgJ0FMTCcgdmFsdWVcbiAgICB2YWx1ZXMuc3BsaWNlKDAsIDEpO1xuICAgIHRoaXMudmFsdWVbdHlwZV0gPSB2YWx1ZXM7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpO1xuICAgIHRoaXMuaXRlbXMgPSB1cGRhdGVkSXRlbXM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoYWxsT2ZUeXBlWzBdLCAnYWRkJyk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGl0ZW0udHlwZTtcbiAgICBsZXQgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgbGV0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgdGhpcy5yZW1vdmVJdGVtKGFsbEl0ZW0pO1xuICAgIGFsbEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgbGV0IHNlbGVjdGVkSXRlbXMgPSBhbGxPZlR5cGUuZmlsdGVyKChpKSA9PiBpLmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcywgLi4uc2VsZWN0ZWRJdGVtc107XG4gICAgbGV0IHZhbHVlcyA9IHNlbGVjdGVkSXRlbXMubWFwKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnZhbHVlW3R5cGVdID0gWy4uLnZhbHVlc107XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudHMgZG9lc24ndCBjb250YWluIHRoZSB0YXJnZXQgZWxlbWVudCwgaXQgaXMgYW4gb3V0c2lkZSBjbGlja1xuICAgIGlmICghdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbE9mVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUpWzBdLm9yaWdpbmFsRGF0YTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oaXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW0uaXNQYXJlbnRPZikge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblZhbHVlKGl0ZW0sIGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChpdGVtLmlzQ2hpbGRPZiAmJiB0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRWYWx1ZShpdGVtLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIG1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oc2VsZWN0aW5nLCBpdGVtQ2hhbmdlZCkge1xuICAgIGlmICghaXRlbUNoYW5nZWQuaXNDaGlsZE9mICYmICFpdGVtQ2hhbmdlZC5pc1BhcmVudE9mKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXJlbnQgPSB0aGlzLnR5cGVzLmZpbHRlcigoeCkgPT4gISF4LmlzUGFyZW50T2YpWzBdO1xuICAgIGxldCBwYXJlbnRUeXBlID0gcGFyZW50LnZhbHVlO1xuICAgIGxldCBhbGxQYXJlbnRUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUocGFyZW50VHlwZSk7XG4gICAgbGV0IGNoaWxkVHlwZSA9IGFsbFBhcmVudFR5cGVbMF0uaXNQYXJlbnRPZjtcbiAgICBsZXQgYWxsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIGxldCBhbGxDaGVja2VkQ2hpbGRyZW4gPSBhbGxDaGlsZHJlbi5maWx0ZXIoKHgpID0+ICEheC5jaGVja2VkKTtcblxuICAgIGFsbFBhcmVudFR5cGUuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50ID0gYWxsQ2hlY2tlZENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICByZXR1cm4geFtwYXJlbnRUeXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IG9iai52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGFsbENoaWxkcmVuT2ZQYXJlbnQgPSBhbGxDaGlsZHJlbi5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICByZXR1cm4geC52YWx1ZSAhPT0gJ0FMTCcgJiYgeFtwYXJlbnRUeXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IG9iai52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGFsbENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoICE9PSBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgb2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShvYmopO1xuICAgICAgICAgICAgICB0aGlzLmFkZEluZGl2aWR1YWxDaGlsZHJlbihzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtQ2hhbmdlZC50eXBlICE9PSBwYXJlbnRUeXBlKSB7XG4gICAgICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgb2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShvYmopO1xuICAgICAgICAgICAgICB0aGlzLmFkZEluZGl2aWR1YWxDaGlsZHJlbihzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChhbGxDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIGNoaWxkcmVuIGFuZCBpcyBjaGVja2VkLCBpdCBzaG91bGQgc3RheSBjaGVja2VkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtQ2hhbmdlZC50eXBlICE9PSBwYXJlbnRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCBvYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVJbmRldGVybWluYXRlU3RhdGVzKGFsbFBhcmVudFR5cGUsIGFsbENoaWxkcmVuLCBhbGxDaGVja2VkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFsbFBhcmVudHNPckNoaWxkcmVuKGFsbEl0ZW0sIGFjdGlvbikge1xuICAgIGlmIChhbGxJdGVtLmlzUGFyZW50T2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsQ2hpbGRyZW5WYWx1ZShhbGxJdGVtLCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoYWxsSXRlbS5pc0NoaWxkT2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsUGFyZW50VmFsdWUoYWxsSXRlbSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbGxDaGlsZHJlblZhbHVlKGl0ZW0sIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBjaGlsZFR5cGUgPSBpdGVtLmlzUGFyZW50T2Y7XG4gICAgbGV0IHBvdGVudGlhbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24gJiYgdGhpcy5hbGxPZlR5cGVTZWxlY3RlZChjaGlsZFR5cGUpICYmICFzZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHBvdGVudGlhbENoaWxkcmVuWzBdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG90ZW50aWFsQ2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgudmFsdWUgPT09ICdBTEwnICYmICF4LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgICAgIHguY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgeC5pbmRldGVybWluYXRlID0gc2VsZWN0aW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHguY2hlY2tlZCAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgeCk7XG4gICAgICAgIH1cbiAgICAgICAgeC5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQWxsUGFyZW50VmFsdWUoaXRlbSwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IHBhcmVudFR5cGUgPSBpdGVtLmlzQ2hpbGRPZjtcbiAgICBsZXQgcG90ZW50aWFsUGFyZW50cyA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHBhcmVudFR5cGUpO1xuICAgIHBvdGVudGlhbFBhcmVudHMuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKCF4LmNoZWNrZWQpIHtcbiAgICAgICAgeC5pbmRldGVybWluYXRlID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSW5kZXRlcm1pbmF0ZVN0YXRlcyhhbGxQYXJlbnRUeXBlLCBhbGxDaGlsZHJlbiwgYWxsQ2hlY2tlZENoaWxkcmVuKSB7XG4gICAgbGV0IGFsbENoZWNrZWRPckluZGV0ZXJtaW5hdGVQYXJlbnRzID0gYWxsUGFyZW50VHlwZS5maWx0ZXIoKHgpID0+ICghIXguY2hlY2tlZCB8fCAhIXguaW5kZXRlcm1pbmF0ZSkgJiYgeC52YWx1ZSAhPT0gJ0FMTCcpO1xuICAgIGxldCBpc1BhcmVudEluZGV0ZXJtaW5hdGUgPSAhIWFsbFBhcmVudFR5cGVbMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZVBhcmVudHMubGVuZ3RoID4gMDtcbiAgICBsZXQgaXNDaGlsZEluZGV0ZXJtaW5hdGUgPSAhIWFsbENoaWxkcmVuWzBdLmNoZWNrZWQgPyBmYWxzZSA6IGFsbENoZWNrZWRDaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbFBhcmVudFR5cGUsIGlzUGFyZW50SW5kZXRlcm1pbmF0ZSk7XG4gICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUoYWxsQ2hpbGRyZW4sIGlzQ2hpbGRJbmRldGVybWluYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuVmFsdWUocGFyZW50LCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgY2hpbGRUeXBlID0gcGFyZW50LmlzUGFyZW50T2Y7XG4gICAgbGV0IHBvdGVudGlhbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBwb3RlbnRpYWxDaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHhbcGFyZW50LnR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gcGFyZW50LnZhbHVlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh4LmNoZWNrZWQgJiYgIXNlbGVjdGluZykge1xuICAgICAgICAgIHguY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGNoaWxkVHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoeCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoeCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHguY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudFZhbHVlKGNoaWxkLCBhY3Rpb24pIHtcbiAgICBsZXQgYWxsUGFyZW50VHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkLmlzQ2hpbGRPZik7XG4gICAgaWYgKGFsbFBhcmVudFR5cGVbMF0uY2hlY2tlZCAmJiBhY3Rpb24gIT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGFsbFBhcmVudFR5cGVbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEluZGl2aWR1YWxDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGxldCBwYXJlbnRBbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC5pc0NoaWxkT2YpIHtcbiAgICAgICAgLy8gb25seSBhZGQgY2hpbGRyZW4gaWYgdGhlaXIgcGFyZW50cyBhcmUgbm90IGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgeFt4LmlzQ2hpbGRPZl0uZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVbeC5pc0NoaWxkT2ZdLmZpbHRlcigocCkgPT4gcCA9PT0gcGFyZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJlbnRBbHJlYWR5U2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YWx1ZVt4LnR5cGVdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSA9PT0geC52YWx1ZSkubGVuZ3RoID09PSAwICYmICFwYXJlbnRBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5hZGQoeCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWUobW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy52YWx1ZSA9IG1vZGVsIHx8IHt9O1xuICAgIGlmICghdGhpcy50eXBlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGVPYmopID0+IHtcbiAgICAgIGxldCB0eXBlID0gdHlwZU9iai52YWx1ZTtcbiAgICAgIGlmICh0aGlzLnZhbHVlW3R5cGVdKSB7XG4gICAgICAgIGxldCBpbmRldGVybWluYXRlSXNTZXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLnVwZGF0ZUFsbEl0ZW1TdGF0ZSh0eXBlKTtcbiAgICAgICAgbGV0IG9wdGlvbnNCeVR5cGUgPSBvcHRpb25zLmFsbE9mVHlwZTtcbiAgICAgICAgbGV0IGFsbFNlbGVjdGVkID0gb3B0aW9ucy5hbGxPZlR5cGVTZWxlY3RlZDtcbiAgICAgICAgdGhpcy52YWx1ZVt0eXBlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCAmJiAhaW5kZXRlcm1pbmF0ZUlzU2V0KSB7XG4gICAgICAgICAgICBpbmRldGVybWluYXRlSXNTZXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUob3B0aW9uc0J5VHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbnNCeVR5cGUuZmlsdGVyKCh4KSA9PiB4LnZhbHVlID09PSBpdGVtKVswXTtcbiAgICAgICAgICB2YWx1ZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoIWFsbFNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyh2YWx1ZSwgJ2FkZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgdmFsdWUuaXNQYXJlbnRPZikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblZhbHVlKHZhbHVlLCAnc2VsZWN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR5cGVPYmouaXNDaGlsZE9mKSB7XG4gICAgICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKHRydWUsIHsgdmFsdWU6IHR5cGUsIGlzQ2hpbGRPZjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZVt0eXBlXSA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWxsSXRlbXNTZWxlY3RlZChvcHRpb25zQnlUeXBlLCB0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVbdHlwZV0ubGVuZ3RoID09PSBvcHRpb25zQnlUeXBlLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUobW9kZWwpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19