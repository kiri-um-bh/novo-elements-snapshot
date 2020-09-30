/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.value = this.setInitialValue(null);
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
            *ngFor="let item of _items | async | slice:0:chipsCount"
            [type]="item.type"
            [class.selected]="item == selected"
            (remove)="removeFromDisplay($event, item)"
            (select)="select($event, item)">
            {{ item.label }}
        </chip>
        <div *ngIf="items.length > chipsCount">
            <ul class="summary">
                <li *ngFor="let type of notShown">+ {{type.count}} {{ labels.more }} {{type.type}}</li>
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
                [overrideElement]="element">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7OztNQUcvQixvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBc0NELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBK0NqQyxZQUFtQixPQUFtQixFQUFTLE1BQXdCO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQTNDdkUsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFJdEIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFrQjdDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzlCLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFLakIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBR25CLGtCQUFhOzs7UUFBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDbkMsbUJBQWM7OztRQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztRQUdsQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBbkNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLGFBQWE7UUFDckIsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUF1QkQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7O29CQUMxQixlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztnQkFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxPQUFPOztZQUNwQixnQkFBZ0IsR0FBUTtZQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLElBQUk7U0FDckM7UUFDRCxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFOztnQkFDcEIsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7WUFDbkQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5RCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSTs7WUFDcEIsR0FBRyxHQUFHO1lBQ1IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUMvRCxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUM1RyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUM3QjtRQUNELElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNqQixHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBTzs7WUFDdkIsU0FBUyxHQUFHO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzVCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUM3QjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTs7Z0JBQ2pCLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxHQUFFLEVBQUUsQ0FBQztZQUNOLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakI7WUFDRCxJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzs7O2dCQUV2RCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFLO1FBQ1AsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQUk7O1lBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzs7WUFDbkMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDOUQsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsTUFBTTtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7O1lBQ0csT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU07O1lBQ3pCLE1BQU0sR0FBRyxNQUFNLEtBQUssS0FBSztRQUM3QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoRDtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztZQUNmLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFOztvQkFDdEIsS0FBSzs7b0JBQ0wsY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ2xFLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7b0JBQ3BFLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztpQkFDL0I7O29CQUNHLFdBQVcsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLO2dCQUN6RSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUN6RDtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUk7O1lBQ1osZ0JBQWdCO1FBQ3BCLElBQUksS0FBSyxFQUFFO1lBQ1QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ3pCOztZQUNHLFlBQVksR0FBRyxJQUFJO1FBQ3ZCLElBQUksWUFBWSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDaEMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNyRDthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsNkJBQTZCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxJQUFJLEVBQUUsZ0JBQXNCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLCtCQUErQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQUk7O1lBQ1YsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3hDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN4RSxJQUFJLEtBQUssRUFBRTtvQkFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU07O1lBQ3RCLFNBQVMsR0FBRyxNQUFNLEtBQUssUUFBUTs7WUFDL0IsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGtCQUFrQjs7WUFDWixhQUFhLEdBQUcsRUFBRTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUk7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1lBQ3hCLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBQztRQUNGLHFCQUFxQjtRQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsNkJBQTZCLENBQUMsSUFBSTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7O1lBQ0csSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJOztZQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQ25DLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7O1lBQ3pCLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksRUFBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUM7O1lBQzNDLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsS0FBSztRQUN0Qiw2RUFBNkU7UUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBSTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVELHNCQUFzQixDQUFDLElBQUksRUFBRSxNQUFNO1FBQ2pDLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4QzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCwrQkFBK0IsQ0FBQyxTQUFTLEVBQUUsV0FBVztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDckQsT0FBTztTQUNSOztZQUNHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3BELFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSzs7WUFDekIsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDOztZQUM3QyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7O1lBQ3ZDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7WUFDMUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUM7UUFFL0QsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDUjs7Z0JBQ0csd0JBQXdCLEdBQUcsa0JBQWtCLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU07Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQUM7WUFFRixJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsT0FBTztpQkFDUjtnQkFDRCxHQUFHLENBQUMsYUFBYSxHQUFHLHdCQUF3QixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDekQ7aUJBQU07O29CQUNELG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2pELE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU07Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdEYsQ0FBQyxFQUFDO2dCQUNGLElBQUksd0JBQXdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdkMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLG1CQUFtQixDQUFDLE1BQU0sS0FBSyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7NEJBQzdGLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOzRCQUN6QixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs0QkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLENBQUM7eUJBQ3REO3FCQUNGO3lCQUFNO3dCQUNMLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3FCQUMxQjtvQkFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTt3QkFDOUQsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFOzRCQUNmLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzRCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FBQzt5QkFDdEQ7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLElBQUksbUJBQW1CLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDcEMsK0RBQStEO3dCQUMvRCxPQUFPO3FCQUNSO3lCQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDeEI7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7Ozs7SUFFRCwwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUN4QyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsc0JBQXNCLENBQUMsSUFBSSxFQUFFLE1BQU07O1lBQzdCLFNBQVMsR0FBRyxNQUFNLEtBQUssUUFBUTs7WUFDL0IsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVOztZQUMzQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTztTQUNSO1FBQ0QsaUJBQWlCLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25DLElBQUksU0FBUyxFQUFFO29CQUNiLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjtnQkFDRCxDQUFDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzthQUN2QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU07O1lBQzNCLFNBQVMsR0FBRyxNQUFNLEtBQUssUUFBUTs7WUFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTOztZQUMzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUNwRCxnQkFBZ0IsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDZCxDQUFDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzthQUM3QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELHlCQUF5QixDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsa0JBQWtCOztZQUNsRSxnQ0FBZ0MsR0FBRyxhQUFhLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUM7O1lBQ3ZILHFCQUFxQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sR0FBRyxDQUFDOztZQUN4RyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUMzRixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLE1BQU0sRUFBRSxNQUFNOztZQUM1QixTQUFTLEdBQUcsTUFBTSxLQUFLLFFBQVE7O1lBQy9CLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVTs7WUFDN0IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDcEQsaUJBQWlCLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDckIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzNCLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNsQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDckMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQjtpQkFDRjtnQkFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzthQUN2QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU07O1lBQ3pCLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDbkQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxRQUFROztZQUN4QixxQkFBcUIsR0FBRyxLQUFLO1FBQ2pDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2YsOERBQThEO2dCQUM5RCxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEUscUJBQXFCLEdBQUcsSUFBSSxDQUFDO3FCQUM5QjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUNoRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7Z0JBQ3pCLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSztZQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7O29CQUNoQixrQkFBa0IsR0FBRyxLQUFLOztvQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7O29CQUN2QyxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVM7O29CQUNqQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGlCQUFpQjtnQkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxrQkFBa0IsRUFBRTt3QkFDdkMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNqRDs7d0JBQ0csS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3ZDO29CQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7d0JBQy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQzNDO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQzlFO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFubUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCUjtnQkFDRixJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO2lCQUN6QzthQUNGOzs7O1lBcERxRCxVQUFVO1lBTXZELGdCQUFnQjs7O3FCQWdEdEIsS0FBSzswQkFFTCxLQUFLO29CQUVMLEtBQUs7c0JBRUwsTUFBTTtvQkFFTixNQUFNO21CQUVOLE1BQU07b0JBT04sS0FBSzs7OztJQWpCTix3Q0FDWTs7SUFDWiw2Q0FDc0I7O0lBQ3RCLHVDQUNXOztJQUNYLHlDQUNnRDs7SUFDaEQsdUNBQzhDOztJQUM5QyxzQ0FDNkM7O0lBa0I3Qyx1Q0FBZ0I7O0lBQ2hCLHdDQUE4Qjs7SUFDOUIseUNBQWE7O0lBQ2IsMENBQWM7O0lBQ2QsMENBQXFCOztJQUNyQix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsaURBQXlCOztJQUN6QixvREFBNEI7O0lBRTVCLHdDQUFpQjs7SUFDakIsMENBQW1COztJQUVuQix1Q0FBVzs7SUFDWCwrQ0FBbUM7O0lBQ25DLGdEQUFvQzs7SUFFeEIseUNBQTBCOztJQUFFLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdWx0aS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtDSElQU19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGlwXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luYyB8IHNsaWNlOjA6Y2hpcHNDb3VudFwiXG4gICAgICAgICAgICBbdHlwZV09XCJpdGVtLnR5cGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmVGcm9tRGlzcGxheSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIj5cbiAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgPC9jaGlwPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gY2hpcHNDb3VudFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdHlwZSBvZiBub3RTaG93blwiPisge3t0eXBlLmNvdW50fX0ge3sgbGFiZWxzLm1vcmUgfX0ge3t0eXBlLnR5cGV9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoaXAtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAoc2VsZWN0KT1cImNsaWNrT3B0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCI+XG4gICAgICAgICAgICA8L25vdm8tcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgW2NsYXNzLmhhcy12YWx1ZV09XCJpdGVtcy5sZW5ndGhcIj48L2k+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNsZWFyLWFsbFwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPnt7IGxhYmVscy5jbGVhckFsbCB9fSA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT48L2xhYmVsPlxuICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9NdWx0aVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzb3VyY2U6IGFueTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IGFueSA9ICcnO1xuICBASW5wdXQoKVxuICB0eXBlczogYW55O1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHNlbGVjdGVkSXRlbXMpIHtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBzZWxlY3RlZEl0ZW1zW3gudmFsdWVdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0ge307XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh0aGlzLl92YWx1ZVt4LnZhbHVlXSA9IFtdKSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHNlbGVjdGVkSXRlbXMpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIGl0ZW1zOiBhbnkgPSBbXTtcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIG9wdGlvbnM6IGFueTtcbiAgX29wdGlvbnM6IGFueTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIGNoaXBzQ291bnQ6IG51bWJlcjtcbiAgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuO1xuICBzdHJpY3RSZWxhdGlvbnNoaXA6IGJvb2xlYW47XG4gIC8vIHByaXZhdGUgZGF0YSBtb2RlbFxuICBfdmFsdWU6IGFueSA9IHt9O1xuICBub3RTaG93bjogYW55ID0ge307XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IDQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbiA9IHRoaXMuc291cmNlLnNlbGVjdEFsbE9wdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSB0aGlzLnNvdXJjZS5jaGlwc0NvdW50IHx8IDQ7XG4gICAgdGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgPSB0aGlzLnNvdXJjZS5zdHJpY3RSZWxhdGlvbnNoaXAgfHwgZmFsc2U7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB0aGlzLm1vZGlmeUFsbE9mVHlwZSh0eXBlLnZhbHVlLCAndW5zZWxlY3QnKSk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc2V0SW5pdGlhbFZhbHVlKG51bGwpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21EaXNwbGF5KGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5yZW1vdmUodHJ1ZSwgaXRlbSk7XG4gICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGZhbHNlLCBpdGVtKTtcbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNvdXJjZS5vcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRPcHRpb24gPSB0aGlzLnNldHVwT3B0aW9uc0J5VHlwZShvcHRpb24pO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2goZm9ybWF0dGVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZS5vcHRpb25zID0gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIHNldHVwT3B0aW9uc0J5VHlwZShzZWN0aW9uKSB7XG4gICAgbGV0IGZvcm1hdHRlZFNlY3Rpb246IGFueSA9IHtcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGxhYmVsOiBzZWN0aW9uLmxhYmVsIHx8IHNlY3Rpb24udHlwZSxcbiAgICB9O1xuICAgIGZvcm1hdHRlZFNlY3Rpb24uZGF0YSA9IHNlY3Rpb24uZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdE9wdGlvbihzZWN0aW9uLCBpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIGxldCBzZWxlY3RBbGwgPSB0aGlzLmNyZWF0ZVNlbGVjdEFsbE9wdGlvbihzZWN0aW9uKTtcbiAgICAgIGZvcm1hdHRlZFNlY3Rpb24uZGF0YS5zcGxpY2UoMCwgMCwgc2VsZWN0QWxsKTtcbiAgICB9XG4gICAgZm9ybWF0dGVkU2VjdGlvbi5vcmlnaW5hbERhdGEgPSBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEuc2xpY2UoKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkU2VjdGlvbjtcbiAgfVxuXG4gIGZvcm1hdE9wdGlvbihzZWN0aW9uLCBpdGVtKSB7XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHZhbHVlOiBzZWN0aW9uLmZpZWxkID8gaXRlbVtzZWN0aW9uLmZpZWxkXSA6IGl0ZW0udmFsdWUgfHwgaXRlbSxcbiAgICAgIGxhYmVsOiBzZWN0aW9uLmZvcm1hdCA/IEhlbHBlcnMuaW50ZXJwb2xhdGUoc2VjdGlvbi5mb3JtYXQsIGl0ZW0pIDogaXRlbS5sYWJlbCB8fCBTdHJpbmcoaXRlbS52YWx1ZSB8fCBpdGVtKSxcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGNoZWNrZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUGFyZW50T2Y6IHNlY3Rpb24uaXNQYXJlbnRPZixcbiAgICAgIGlzQ2hpbGRPZjogc2VjdGlvbi5pc0NoaWxkT2YsXG4gICAgfTtcbiAgICBpZiAob2JqLmlzQ2hpbGRPZikge1xuICAgICAgb2JqW3NlY3Rpb24uaXNDaGlsZE9mXSA9IGl0ZW1bc2VjdGlvbi5pc0NoaWxkT2ZdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgY3JlYXRlU2VsZWN0QWxsT3B0aW9uKHNlY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0QWxsID0ge1xuICAgICAgdmFsdWU6ICdBTEwnLFxuICAgICAgbGFiZWw6IGBBbGwgJHtzZWN0aW9uLnR5cGV9YCxcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGNoZWNrZWQ6IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggJiYgdGhpcy5tb2RlbC5pbmRleE9mKCdBTEwnKSAhPT0gLTEsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKHNlY3Rpb24uaXNDaGlsZE9mKSB7XG4gICAgICBsZXQgYWxsUGFyZW50cyA9IHNlY3Rpb24uZGF0YS5yZWR1Y2UoKGFjY3VtLCBuZXh0KSA9PiB7XG4gICAgICAgIHJldHVybiBhY2N1bS5jb25jYXQobmV4dFtzZWN0aW9uLmlzQ2hpbGRPZl0pO1xuICAgICAgfSwgW10pO1xuICAgICAgc2VsZWN0QWxsW3NlY3Rpb24uaXNDaGlsZE9mXSA9IGFsbFBhcmVudHM7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RBbGw7XG4gIH1cblxuICBkZXNlbGVjdEFsbCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gIH1cblxuICBvbkZvY3VzKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMuZm9jdXMuZW1pdChlKTtcbiAgfVxuXG4gIGNsaWNrT3B0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmICEoZXZlbnQgaW5zdGFuY2VvZiBFdmVudCkpIHtcbiAgICAgIGlmIChldmVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShudWxsLCBldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZChldmVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZXZlbnQuY2hlY2tlZCwgZXZlbnQpO1xuICAgICAgLy8gU2V0IGZvY3VzIG9uIHRoZSBwaWNrZXJcbiAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tcGlja2VyID4gaW5wdXQnKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZChldmVudCkge1xuICAgIGlmIChldmVudC52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgIHRoaXMubW9kaWZ5QWxsT2ZUeXBlKGV2ZW50LnR5cGUsICdzZWxlY3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoZXZlbnQsICdhZGQnKTtcbiAgICAgIHRoaXMudmFsdWVbZXZlbnQudHlwZV0ucHVzaChldmVudC52YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZUFsbEl0ZW1TdGF0ZShldmVudC50eXBlKTtcbiAgICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGFyZW50T3JDaGlsZHJlbihldmVudCwgJ3NlbGVjdCcpO1xuICAgIHRoaXMuc2VsZWN0KG51bGwsIGV2ZW50KTtcbiAgfVxuXG4gIHVwZGF0ZUFsbEl0ZW1TdGF0ZSh0eXBlKSB7XG4gICAgbGV0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGxldCBhbGxPZlR5cGVTZWxlY3RlZCA9IHRoaXMuYWxsSXRlbXNTZWxlY3RlZChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIGlmIChhbGxPZlR5cGVTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYWxsT2ZUeXBlLCBhbGxPZlR5cGVTZWxlY3RlZCB9O1xuICB9XG5cbiAgc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbE9mVHlwZSwgc3RhdHVzKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYWxsSXRlbSA9IGFsbE9mVHlwZVswXTtcbiAgICBhbGxJdGVtLmluZGV0ZXJtaW5hdGUgPSBzdGF0dXM7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5SXRlbXMoaXRlbSwgYWN0aW9uKSB7XG4gICAgbGV0IGFkZGluZyA9IGFjdGlvbiA9PT0gJ2FkZCc7XG4gICAgaWYgKGFkZGluZykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pID4gLTEpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VGV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVRleHQoaXRlbXMpIHtcbiAgICB0aGlzLm5vdFNob3duID0gW107XG4gICAgbGV0IG5vdFNob3duID0gaXRlbXMuc2xpY2UodGhpcy5jaGlwc0NvdW50KTtcbiAgICBpZiAobm90U2hvd24ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudDtcbiAgICAgICAgbGV0IHNlbGVjdGVkT2ZUeXBlID0gbm90U2hvd24uZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUudmFsdWUpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRPZlR5cGUubGVuZ3RoID09PSAxICYmIHNlbGVjdGVkT2ZUeXBlWzBdLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICAgIGNvdW50ID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZS52YWx1ZSkubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCA9IHNlbGVjdGVkT2ZUeXBlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlzcGxheVR5cGUgPSBjb3VudCA9PT0gMSA/IHR5cGUuc2luZ3VsYXIgOiB0eXBlLnBsdXJhbCB8fCB0eXBlLnZhbHVlO1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5ub3RTaG93bi5wdXNoKHsgdHlwZTogZGlzcGxheVR5cGUsIGNvdW50OiBjb3VudCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGV2ZW50LCBpdGVtKSB7XG4gICAgbGV0IHRyaWdnZXJlZEJ5RXZlbnQ7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0cmlnZ2VyZWRCeUV2ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IGl0ZW1Ub1JlbW92ZSA9IGl0ZW07XG4gICAgaWYgKGl0ZW1Ub1JlbW92ZS52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgIHRyaWdnZXJlZEJ5RXZlbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubW9kaWZ5QWxsT2ZUeXBlKGl0ZW1Ub1JlbW92ZS50eXBlLCAndW5zZWxlY3QnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoaXRlbVRvUmVtb3ZlLnR5cGUpKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGl0ZW1Ub1JlbW92ZSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlSXRlbShpdGVtLCB0cmlnZ2VyZWRCeUV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaXRlbSwgdHJpZ2dlcmVkQnlFdmVudD86IGFueSkge1xuICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnJlbW92ZVZhbHVlKGl0ZW0pO1xuICAgIGlmIChpdGVtLnZhbHVlICE9PSAnQUxMJykge1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRPckNoaWxkcmVuKGl0ZW0sICd1bnNlbGVjdCcpO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlcmVkQnlFdmVudCkge1xuICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGZhbHNlLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVWYWx1ZShpdGVtKSB7XG4gICAgbGV0IHVwZGF0ZWRWYWx1ZXMgPSB0aGlzLnZhbHVlW2l0ZW0udHlwZV0uZmlsdGVyKCh4KSA9PiB4ICE9PSBpdGVtLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlW2l0ZW0udHlwZV0gPSB1cGRhdGVkVmFsdWVzO1xuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoaXRlbSwgJ3JlbW92ZScpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09PSAwICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdChldmVudCwgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFsbE9mVHlwZVNlbGVjdGVkKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZSAmJiB4LnZhbHVlID09PSAnQUxMJykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG1vZGlmeUFsbE9mVHlwZSh0eXBlLCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgYWxsT2ZUeXBlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSAhPT0gdHlwZSldO1xuICAgICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbFBhcmVudHNPckNoaWxkcmVuKGFsbE9mVHlwZVswXSwgYWN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgfVxuXG4gIHRyaWdnZXJWYWx1ZVVwZGF0ZSgpIHtcbiAgICBsZXQgdXBkYXRlZE9iamVjdCA9IHt9O1xuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHVwZGF0ZWRPYmplY3RbeC52YWx1ZV0gPSB0aGlzLnZhbHVlW3gudmFsdWVdKSk7XG4gICAgdGhpcy52YWx1ZSA9IHVwZGF0ZWRPYmplY3Q7XG4gIH1cblxuICBzZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbGxPZlR5cGVbMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgbGV0IHZhbHVlcyA9IGFsbE9mVHlwZS5tYXAoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgIH0pO1xuICAgIC8vIHJlbW92ZSAnQUxMJyB2YWx1ZVxuICAgIHZhbHVlcy5zcGxpY2UoMCwgMSk7XG4gICAgdGhpcy52YWx1ZVt0eXBlXSA9IHZhbHVlcztcbiAgICBsZXQgdXBkYXRlZEl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSAhPT0gdHlwZSk7XG4gICAgdGhpcy5pdGVtcyA9IHVwZGF0ZWRJdGVtcztcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhhbGxPZlR5cGVbMF0sICdhZGQnKTtcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGl0ZW0pIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0eXBlID0gaXRlbS50eXBlO1xuICAgIGxldCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBsZXQgYWxsSXRlbSA9IGFsbE9mVHlwZVswXTtcbiAgICB0aGlzLnJlbW92ZUl0ZW0oYWxsSXRlbSk7XG4gICAgYWxsSXRlbS5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICBsZXQgc2VsZWN0ZWRJdGVtcyA9IGFsbE9mVHlwZS5maWx0ZXIoKGkpID0+IGkuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCAuLi5zZWxlY3RlZEl0ZW1zXTtcbiAgICBsZXQgdmFsdWVzID0gc2VsZWN0ZWRJdGVtcy5tYXAoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbLi4udmFsdWVzXTtcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayhldmVudCkge1xuICAgIC8vIElmIHRoZSBlbGVtZW50cyBkb2Vzbid0IGNvbnRhaW4gdGhlIHRhcmdldCBlbGVtZW50LCBpdCBpcyBhbiBvdXRzaWRlIGNsaWNrXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxsT2ZUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZSlbMF0ub3JpZ2luYWxEYXRhO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50T3JDaGlsZHJlbihpdGVtLCBhY3Rpb24pIHtcbiAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbS5pc1BhcmVudE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVmFsdWUoaXRlbSwgYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uaXNDaGlsZE9mICYmIHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhcmVudFZhbHVlKGl0ZW0sIGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihzZWxlY3RpbmcsIGl0ZW1DaGFuZ2VkKSB7XG4gICAgaWYgKCFpdGVtQ2hhbmdlZC5pc0NoaWxkT2YgJiYgIWl0ZW1DaGFuZ2VkLmlzUGFyZW50T2YpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBhcmVudCA9IHRoaXMudHlwZXMuZmlsdGVyKCh4KSA9PiAhIXguaXNQYXJlbnRPZilbMF07XG4gICAgbGV0IHBhcmVudFR5cGUgPSBwYXJlbnQudmFsdWU7XG4gICAgbGV0IGFsbFBhcmVudFR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZShwYXJlbnRUeXBlKTtcbiAgICBsZXQgY2hpbGRUeXBlID0gYWxsUGFyZW50VHlwZVswXS5pc1BhcmVudE9mO1xuICAgIGxldCBhbGxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgbGV0IGFsbENoZWNrZWRDaGlsZHJlbiA9IGFsbENoaWxkcmVuLmZpbHRlcigoeCkgPT4gISF4LmNoZWNrZWQpO1xuXG4gICAgYWxsUGFyZW50VHlwZS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmoudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQgPSBhbGxDaGVja2VkQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgIHJldHVybiB4W3BhcmVudFR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gb2JqLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9iai5pbmRldGVybWluYXRlID0gc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA+IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYWxsQ2hpbGRyZW5PZlBhcmVudCA9IGFsbENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LnZhbHVlICE9PSAnQUxMJyAmJiB4W3BhcmVudFR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gb2JqLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgYWxsQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggIT09IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGFsbENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBpdCBoYXMgbm8gY2hpbGRyZW4gYW5kIGlzIGNoZWNrZWQsIGl0IHNob3VsZCBzdGF5IGNoZWNrZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUluZGV0ZXJtaW5hdGVTdGF0ZXMoYWxsUGFyZW50VHlwZSwgYWxsQ2hpbGRyZW4sIGFsbENoZWNrZWRDaGlsZHJlbik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWxsUGFyZW50c09yQ2hpbGRyZW4oYWxsSXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKGFsbEl0ZW0uaXNQYXJlbnRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxDaGlsZHJlblZhbHVlKGFsbEl0ZW0sIGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChhbGxJdGVtLmlzQ2hpbGRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRWYWx1ZShhbGxJdGVtLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFsbENoaWxkcmVuVmFsdWUoaXRlbSwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IGNoaWxkVHlwZSA9IGl0ZW0uaXNQYXJlbnRPZjtcbiAgICBsZXQgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbiAmJiB0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGNoaWxkVHlwZSkgJiYgIXNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW1vdmUobnVsbCwgcG90ZW50aWFsQ2hpbGRyZW5bMF0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3RlbnRpYWxDaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC52YWx1ZSA9PT0gJ0FMTCcgJiYgIXguY2hlY2tlZCkge1xuICAgICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeC5jaGVja2VkICYmICFzZWxlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB4KTtcbiAgICAgICAgfVxuICAgICAgICB4LmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBbGxQYXJlbnRWYWx1ZShpdGVtLCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgcGFyZW50VHlwZSA9IGl0ZW0uaXNDaGlsZE9mO1xuICAgIGxldCBwb3RlbnRpYWxQYXJlbnRzID0gdGhpcy5nZXRBbGxPZlR5cGUocGFyZW50VHlwZSk7XG4gICAgcG90ZW50aWFsUGFyZW50cy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoIXguY2hlY2tlZCkge1xuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJbmRldGVybWluYXRlU3RhdGVzKGFsbFBhcmVudFR5cGUsIGFsbENoaWxkcmVuLCBhbGxDaGVja2VkQ2hpbGRyZW4pIHtcbiAgICBsZXQgYWxsQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZVBhcmVudHMgPSBhbGxQYXJlbnRUeXBlLmZpbHRlcigoeCkgPT4gKCEheC5jaGVja2VkIHx8ICEheC5pbmRldGVybWluYXRlKSAmJiB4LnZhbHVlICE9PSAnQUxMJyk7XG4gICAgbGV0IGlzUGFyZW50SW5kZXRlcm1pbmF0ZSA9ICEhYWxsUGFyZW50VHlwZVswXS5jaGVja2VkID8gZmFsc2UgOiBhbGxDaGVja2VkT3JJbmRldGVybWluYXRlUGFyZW50cy5sZW5ndGggPiAwO1xuICAgIGxldCBpc0NoaWxkSW5kZXRlcm1pbmF0ZSA9ICEhYWxsQ2hpbGRyZW5bMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZENoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUoYWxsUGFyZW50VHlwZSwgaXNQYXJlbnRJbmRldGVybWluYXRlKTtcbiAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxDaGlsZHJlbiwgaXNDaGlsZEluZGV0ZXJtaW5hdGUpO1xuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5WYWx1ZShwYXJlbnQsIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBjaGlsZFR5cGUgPSBwYXJlbnQuaXNQYXJlbnRPZjtcbiAgICBsZXQgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIHBvdGVudGlhbENoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoeFtwYXJlbnQudHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBwYXJlbnQudmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHguY2hlY2tlZCAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoY2hpbGRUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZCh4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSh4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeC5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50VmFsdWUoY2hpbGQsIGFjdGlvbikge1xuICAgIGxldCBhbGxQYXJlbnRUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGQuaXNDaGlsZE9mKTtcbiAgICBpZiAoYWxsUGFyZW50VHlwZVswXS5jaGVja2VkICYmIGFjdGlvbiAhPT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoYWxsUGFyZW50VHlwZVswXSk7XG4gICAgfVxuICB9XG5cbiAgYWRkSW5kaXZpZHVhbENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgbGV0IHBhcmVudEFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LmlzQ2hpbGRPZikge1xuICAgICAgICAvLyBvbmx5IGFkZCBjaGlsZHJlbiBpZiB0aGVpciBwYXJlbnRzIGFyZSBub3QgYWxyZWFkeSBzZWxlY3RlZFxuICAgICAgICB4W3guaXNDaGlsZE9mXS5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZVt4LmlzQ2hpbGRPZl0uZmlsdGVyKChwKSA9PiBwID09PSBwYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcmVudEFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZhbHVlW3gudHlwZV0uZmlsdGVyKChpdGVtKSA9PiBpdGVtID09PSB4LnZhbHVlKS5sZW5ndGggPT09IDAgJiYgIXBhcmVudEFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLmFkZCh4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZShtb2RlbCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnZhbHVlID0gbW9kZWwgfHwge307XG4gICAgaWYgKCF0aGlzLnR5cGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZU9iaikgPT4ge1xuICAgICAgbGV0IHR5cGUgPSB0eXBlT2JqLnZhbHVlO1xuICAgICAgaWYgKHRoaXMudmFsdWVbdHlwZV0pIHtcbiAgICAgICAgbGV0IGluZGV0ZXJtaW5hdGVJc1NldCA9IGZhbHNlO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMudXBkYXRlQWxsSXRlbVN0YXRlKHR5cGUpO1xuICAgICAgICBsZXQgb3B0aW9uc0J5VHlwZSA9IG9wdGlvbnMuYWxsT2ZUeXBlO1xuICAgICAgICBsZXQgYWxsU2VsZWN0ZWQgPSBvcHRpb25zLmFsbE9mVHlwZVNlbGVjdGVkO1xuICAgICAgICB0aGlzLnZhbHVlW3R5cGVdLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWFsbFNlbGVjdGVkICYmICFpbmRldGVybWluYXRlSXNTZXQpIHtcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVJc1NldCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShvcHRpb25zQnlUeXBlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uc0J5VHlwZS5maWx0ZXIoKHgpID0+IHgudmFsdWUgPT09IGl0ZW0pWzBdO1xuICAgICAgICAgIHZhbHVlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghYWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKHZhbHVlLCAnYWRkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiB2YWx1ZS5pc1BhcmVudE9mKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVmFsdWUodmFsdWUsICdzZWxlY3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZU9iai5pc0NoaWxkT2YpIHtcbiAgICAgICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4odHJ1ZSwgeyB2YWx1ZTogdHlwZSwgaXNDaGlsZE9mOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhbGxJdGVtc1NlbGVjdGVkKG9wdGlvbnNCeVR5cGUsIHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVt0eXBlXS5sZW5ndGggPT09IG9wdGlvbnNCeVR5cGUubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZShtb2RlbCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=