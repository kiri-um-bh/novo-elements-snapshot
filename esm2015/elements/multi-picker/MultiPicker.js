/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef(() => NovoMultiPickerElement),
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
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
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
            this.types.forEach((x) => (this._value[x.value] = selectedItems[x.value]));
        }
        else {
            this._value = {};
            this.types.forEach((x) => (this._value[x.value] = []));
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
        this.types.forEach((type) => this.modifyAllOfType(type.value, 'unselect'));
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
            this.options.forEach((option) => {
                /** @type {?} */
                let formattedOption = this.setupOptionsByType(option);
                this._options.push(formattedOption);
            });
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
        formattedSection.data = section.data.map((item) => {
            return this.formatOption(section, item);
        });
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
            let allParents = section.data.reduce((accum, next) => {
                return accum.concat(next[section.isChildOf]);
            }, []);
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
            this.types.forEach((type) => {
                /** @type {?} */
                let count;
                /** @type {?} */
                let selectedOfType = notShown.filter((x) => x.type === type.value);
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
            });
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
        let updatedValues = this.value[item.type].filter((x) => x !== item.value);
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
        return this.items.filter((x) => x.type === type && x.value === 'ALL').length > 0;
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
    /**
     * @return {?}
     */
    triggerValueUpdate() {
        /** @type {?} */
        let updatedObject = {};
        this.types.forEach((x) => (updatedObject[x.value] = this.value[x.value]));
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
        let values = allOfType.map((i) => {
            return i.value;
        });
        // remove 'ALL' value
        values.splice(0, 1);
        this.value[type] = values;
        /** @type {?} */
        let updatedItems = this.items.filter((x) => x.type !== type);
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
        let selectedItems = allOfType.filter((i) => i.checked === true);
        this.items = [...this.items, ...selectedItems];
        /** @type {?} */
        let values = selectedItems.map((i) => {
            return i.value;
        });
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
        return this._options.filter((x) => x.type === type)[0].originalData;
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
        let parent = this.types.filter((x) => !!x.isParentOf)[0];
        /** @type {?} */
        let parentType = parent.value;
        /** @type {?} */
        let allParentType = this.getAllOfType(parentType);
        /** @type {?} */
        let childType = allParentType[0].isParentOf;
        /** @type {?} */
        let allChildren = this.getAllOfType(childType);
        /** @type {?} */
        let allCheckedChildren = allChildren.filter((x) => !!x.checked);
        allParentType.forEach((obj) => {
            if (obj.value === 'ALL') {
                return;
            }
            /** @type {?} */
            let selectedChildrenOfParent = allCheckedChildren.filter((x) => {
                return x[parentType].filter((y) => y === obj.value).length > 0;
            });
            if (selecting) {
                if (obj.checked) {
                    return;
                }
                obj.indeterminate = selectedChildrenOfParent.length > 0;
            }
            else {
                /** @type {?} */
                let allChildrenOfParent = allChildren.filter((x) => {
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
        potentialParents.forEach((x) => {
            if (!x.checked) {
                x.indeterminate = selecting;
            }
        });
    }
    /**
     * @param {?} allParentType
     * @param {?} allChildren
     * @param {?} allCheckedChildren
     * @return {?}
     */
    updateIndeterminateStates(allParentType, allChildren, allCheckedChildren) {
        /** @type {?} */
        let allCheckedOrIndeterminateParents = allParentType.filter((x) => (!!x.checked || !!x.indeterminate) && x.value !== 'ALL');
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
        this.types.forEach((typeObj) => {
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
                this.value[type].forEach((item) => {
                    if (!allSelected && !indeterminateIsSet) {
                        indeterminateIsSet = true;
                        this.setIndeterminateState(optionsByType, true);
                    }
                    /** @type {?} */
                    let value = optionsByType.filter((x) => x.value === item)[0];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7OztNQUcvQixvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELG1CQUlDOzs7SUFIQyxvQkFBSzs7SUFDTCxxQkFBTTs7SUFDTixxQkFBTTs7QUF5Q1IsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUErQ2pDLFlBQW1CLE9BQW1CLEVBQVMsTUFBd0I7UUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBM0N2RSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUl0QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWtCN0MsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFHdEMsYUFBUSxHQUFRLElBQUksQ0FBQztRQUNyQixXQUFNLEdBQVEsRUFBRSxDQUFDOztRQUtqQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUduQixrQkFBYSxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUdsQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBbkNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLGFBQWE7UUFDckIsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUF1QkQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLCtCQUErQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFOztvQkFDMUIsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBTzs7WUFDcEIsZ0JBQWdCLEdBQVE7WUFDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxJQUFJO1NBQ3JDO1FBQ0QsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTs7Z0JBQ3BCLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO1lBQ25ELGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUNELGdCQUFnQixDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUk7O1lBQ3BCLEdBQUcsR0FBRztZQUNSLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7WUFDL0QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7WUFDNUcsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDN0I7UUFDRCxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDakIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLE9BQU87O1lBQ3ZCLFNBQVMsR0FBRztZQUNkLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVFLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDN0I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O2dCQUNqQixVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakI7WUFDRCxJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzs7O2dCQUV2RCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFLO1FBQ1AsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQUk7O1lBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzs7WUFDbkMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDOUQsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsTUFBTTtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7O1lBQ0csT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU07O1lBQ3pCLE1BQU0sR0FBRyxNQUFNLEtBQUssS0FBSztRQUM3QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoRDtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztZQUNmLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOztvQkFDdEIsS0FBSzs7b0JBQ0wsY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbEUsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtvQkFDcEUsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO2lCQUMvQjs7b0JBQ0csV0FBVyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQ3pFLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ3pEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSTs7WUFDWixnQkFBZ0I7UUFDcEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDekI7O1lBQ0csWUFBWSxHQUFHLElBQUk7UUFDdkIsSUFBSSxZQUFZLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUNoQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxnQkFBc0I7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBSTs7WUFDVixhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDeEMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hFLElBQUksS0FBSyxFQUFFO29CQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2RDthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLElBQUk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxJQUFJLEVBQUUsTUFBTTs7WUFDdEIsU0FBUyxHQUFHLE1BQU0sS0FBSyxRQUFROztZQUMvQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxrQkFBa0I7O1lBQ1osYUFBYSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztZQUN4QixNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixxQkFBcUI7UUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7O1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELDZCQUE2QixDQUFDLElBQUk7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTztTQUNSOztZQUNHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOztZQUNuQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOztZQUN6QixhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFDOztZQUMzQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQUs7UUFDdEIsNkVBQTZFO1FBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsTUFBTTtRQUNqQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDeEM7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsK0JBQStCLENBQUMsU0FBUyxFQUFFLFdBQVc7UUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQ3JELE9BQU87U0FDUjs7WUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNwRCxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUs7O1lBQ3pCLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQzs7WUFDN0MsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVOztZQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7O1lBQzFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRS9ELGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUN2QixPQUFPO2FBQ1I7O2dCQUNHLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM3RCxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUM7WUFFRixJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsT0FBTztpQkFDUjtnQkFDRCxHQUFHLENBQUMsYUFBYSxHQUFHLHdCQUF3QixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDekQ7aUJBQU07O29CQUNELG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDakQsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3RGLENBQUMsQ0FBQztnQkFDRixJQUFJLHdCQUF3QixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTt3QkFDZixJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEtBQUssd0JBQXdCLENBQUMsTUFBTSxFQUFFOzRCQUM3RixHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs0QkFDekIsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3lCQUN0RDtxQkFDRjt5QkFBTTt3QkFDTCxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztxQkFDMUI7b0JBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7d0JBQzlELElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTs0QkFDZixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs0QkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLENBQUM7eUJBQ3REO3FCQUNGO2lCQUNGO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUMxQixJQUFJLG1CQUFtQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ3BDLCtEQUErRDt3QkFDL0QsT0FBTztxQkFDUjt5QkFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTt3QkFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3hCO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsMEJBQTBCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDeEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7OztJQUVELHNCQUFzQixDQUFDLElBQUksRUFBRSxNQUFNOztZQUM3QixTQUFTLEdBQUcsTUFBTSxLQUFLLFFBQVE7O1lBQy9CLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVTs7WUFDM0IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU87U0FDUjtRQUNELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNuQyxJQUFJLFNBQVMsRUFBRTtvQkFDYixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDbEI7Z0JBQ0QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsQ0FBQyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELG9CQUFvQixDQUFDLElBQUksRUFBRSxNQUFNOztZQUMzQixTQUFTLEdBQUcsTUFBTSxLQUFLLFFBQVE7O1lBQy9CLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUzs7WUFDM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDcEQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFrQjs7WUFDbEUsZ0NBQWdDLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDOztZQUN2SCxxQkFBcUIsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFDeEcsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDM0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTTs7WUFDNUIsU0FBUyxHQUFHLE1BQU0sS0FBSyxRQUFROztZQUMvQixTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVU7O1lBQzdCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3BELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7Z0JBQ3JCLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUMzQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDbEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckI7aUJBQ0Y7Z0JBQ0QsQ0FBQyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNOztZQUN6QixhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25ELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsUUFBUTs7WUFDeEIscUJBQXFCLEdBQUcsS0FBSztRQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUNmLDhEQUE4RDtnQkFDOUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsRSxxQkFBcUIsR0FBRyxJQUFJLENBQUM7cUJBQzlCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2hHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFOztnQkFDekIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLO1lBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7b0JBQ2hCLGtCQUFrQixHQUFHLEtBQUs7O29CQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQzs7b0JBQ3ZDLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUzs7b0JBQ2pDLFdBQVcsR0FBRyxPQUFPLENBQUMsaUJBQWlCO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNoQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7d0JBQ3ZDLGtCQUFrQixHQUFHLElBQUksQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDakQ7O3dCQUNHLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3ZDO29CQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7d0JBQy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQzNDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQzlFO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFybUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUO2dCQUNELElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxrQkFBa0I7aUJBQ3pDO2FBQ0Y7Ozs7WUE1RHFELFVBQVU7WUFNdkQsZ0JBQWdCOzs7cUJBd0R0QixLQUFLOzBCQUVMLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxNQUFNO29CQUVOLE1BQU07bUJBRU4sTUFBTTtvQkFPTixLQUFLOzs7O0lBakJOLHdDQUNtRzs7SUFDbkcsNkNBQ3NCOztJQUN0Qix1Q0FDNEQ7O0lBQzVELHlDQUNnRDs7SUFDaEQsdUNBQzhDOztJQUM5QyxzQ0FDNkM7O0lBa0I3Qyx1Q0FBbUI7O0lBQ25CLHdDQUFzQzs7SUFDdEMseUNBQWE7O0lBQ2IsMENBQWM7O0lBQ2QsMENBQXFCOztJQUNyQix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsaURBQXlCOztJQUN6QixvREFBNEI7O0lBRTVCLHdDQUFZOztJQUNaLDBDQUFtQjs7SUFFbkIsdUNBQVc7O0lBQ1gsK0NBQW1DOztJQUNuQyxnREFBb0M7O0lBRXhCLHlDQUEwQjs7SUFBRSx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENISVBTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b011bHRpUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuaW50ZXJmYWNlIEl0ZW0ge1xuICB0eXBlO1xuICBsYWJlbDtcbiAgdmFsdWU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ211bHRpLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y2hpcFxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKF9pdGVtcyB8IGFzeW5jIHwgc2xpY2U6IDA6Y2hpcHNDb3VudClcIlxuICAgICAgW3R5cGVdPVwiaXRlbS50eXBlXCJcbiAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtID09IHNlbGVjdGVkXCJcbiAgICAgIChyZW1vdmUpPVwicmVtb3ZlRnJvbURpc3BsYXkoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCJcbiAgICA+XG4gICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgPC9jaGlwPlxuICAgIDxkaXYgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiBjaGlwc0NvdW50XCI+XG4gICAgICA8dWwgY2xhc3M9XCJzdW1tYXJ5XCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdHlwZSBvZiBub3RTaG93blwiPisge3sgdHlwZS5jb3VudCB9fSB7eyBsYWJlbHMubW9yZSB9fSB7eyB0eXBlLnR5cGUgfX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpcC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAoc2VsZWN0KT1cImNsaWNrT3B0aW9uKCRldmVudClcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICA+XG4gICAgICA8L25vdm8tcGlja2VyPlxuICAgIDwvZGl2PlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiIFtjbGFzcy5oYXMtdmFsdWVdPVwiaXRlbXMubGVuZ3RoXCI+PC9pPlxuICAgIDxsYWJlbCBjbGFzcz1cImNsZWFyLWFsbFwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPnt7IGxhYmVscy5jbGVhckFsbCB9fSA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT48L2xhYmVsPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy53aXRoLXZhbHVlXSc6ICdpdGVtcy5sZW5ndGggPiAwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b011bHRpUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHNvdXJjZTogeyBvcHRpb25zOiBbXTsgcmVzdWx0c1RlbXBsYXRlOyBzZWxlY3RBbGxPcHRpb246IGJvb2xlYW47IGNoaXBzQ291bnQ7IHN0cmljdFJlbGF0aW9uc2hpcCB9O1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogYW55ID0gJyc7XG4gIEBJbnB1dCgpXG4gIHR5cGVzOiB7IHZhbHVlOyBzaW5ndWxhcjsgcGx1cmFsOyBpc1BhcmVudE9mOyBpc0NoaWxkT2YgfVtdO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHNlbGVjdGVkSXRlbXMpIHtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBzZWxlY3RlZEl0ZW1zW3gudmFsdWVdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0ge307XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh0aGlzLl92YWx1ZVt4LnZhbHVlXSA9IFtdKSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHNlbGVjdGVkSXRlbXMpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIGl0ZW1zOiBJdGVtW10gPSBbXTtcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3Q8SXRlbVtdPigxKTtcbiAgb3B0aW9uczogYW55O1xuICBfb3B0aW9uczogYW55O1xuICBzZWxlY3RlZDogYW55ID0gbnVsbDtcbiAgY29uZmlnOiBhbnkgPSB7fTtcbiAgY2hpcHNDb3VudDogbnVtYmVyO1xuICBzZWxlY3RBbGxPcHRpb246IGJvb2xlYW47XG4gIHN0cmljdFJlbGF0aW9uc2hpcDogYm9vbGVhbjtcbiAgLy8gcHJpdmF0ZSBkYXRhIG1vZGVsXG4gIF92YWx1ZSA9IHt9O1xuICBub3RTaG93bjogYW55ID0ge307XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IDQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbiA9IHRoaXMuc291cmNlLnNlbGVjdEFsbE9wdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSB0aGlzLnNvdXJjZS5jaGlwc0NvdW50IHx8IDQ7XG4gICAgdGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgPSB0aGlzLnNvdXJjZS5zdHJpY3RSZWxhdGlvbnNoaXAgfHwgZmFsc2U7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB0aGlzLm1vZGlmeUFsbE9mVHlwZSh0eXBlLnZhbHVlLCAndW5zZWxlY3QnKSk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUobnVsbCk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpc3BsYXkoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLnJlbW92ZSh0cnVlLCBpdGVtKTtcbiAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZmFsc2UsIGl0ZW0pO1xuICB9XG5cbiAgc2V0dXBPcHRpb25zKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc291cmNlLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZE9wdGlvbiA9IHRoaXMuc2V0dXBPcHRpb25zQnlUeXBlKG9wdGlvbik7XG4gICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChmb3JtYXR0ZWRPcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc291cmNlLm9wdGlvbnMgPSB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgc2V0dXBPcHRpb25zQnlUeXBlKHNlY3Rpb24pIHtcbiAgICBsZXQgZm9ybWF0dGVkU2VjdGlvbjogYW55ID0ge1xuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgbGFiZWw6IHNlY3Rpb24ubGFiZWwgfHwgc2VjdGlvbi50eXBlLFxuICAgIH07XG4gICAgZm9ybWF0dGVkU2VjdGlvbi5kYXRhID0gc2VjdGlvbi5kYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0T3B0aW9uKHNlY3Rpb24sIGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgbGV0IHNlbGVjdEFsbCA9IHRoaXMuY3JlYXRlU2VsZWN0QWxsT3B0aW9uKHNlY3Rpb24pO1xuICAgICAgZm9ybWF0dGVkU2VjdGlvbi5kYXRhLnNwbGljZSgwLCAwLCBzZWxlY3RBbGwpO1xuICAgIH1cbiAgICBmb3JtYXR0ZWRTZWN0aW9uLm9yaWdpbmFsRGF0YSA9IGZvcm1hdHRlZFNlY3Rpb24uZGF0YS5zbGljZSgpO1xuICAgIHJldHVybiBmb3JtYXR0ZWRTZWN0aW9uO1xuICB9XG5cbiAgZm9ybWF0T3B0aW9uKHNlY3Rpb24sIGl0ZW0pIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdmFsdWU6IHNlY3Rpb24uZmllbGQgPyBpdGVtW3NlY3Rpb24uZmllbGRdIDogaXRlbS52YWx1ZSB8fCBpdGVtLFxuICAgICAgbGFiZWw6IHNlY3Rpb24uZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZShzZWN0aW9uLmZvcm1hdCwgaXRlbSkgOiBpdGVtLmxhYmVsIHx8IFN0cmluZyhpdGVtLnZhbHVlIHx8IGl0ZW0pLFxuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgY2hlY2tlZDogdW5kZWZpbmVkLFxuICAgICAgaXNQYXJlbnRPZjogc2VjdGlvbi5pc1BhcmVudE9mLFxuICAgICAgaXNDaGlsZE9mOiBzZWN0aW9uLmlzQ2hpbGRPZixcbiAgICB9O1xuICAgIGlmIChvYmouaXNDaGlsZE9mKSB7XG4gICAgICBvYmpbc2VjdGlvbi5pc0NoaWxkT2ZdID0gaXRlbVtzZWN0aW9uLmlzQ2hpbGRPZl07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBjcmVhdGVTZWxlY3RBbGxPcHRpb24oc2VjdGlvbikge1xuICAgIGxldCBzZWxlY3RBbGwgPSB7XG4gICAgICB2YWx1ZTogJ0FMTCcsXG4gICAgICBsYWJlbDogYEFsbCAke3NlY3Rpb24udHlwZX1gLFxuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgY2hlY2tlZDogdGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCAmJiB0aGlzLm1vZGVsLmluZGV4T2YoJ0FMTCcpICE9PSAtMSxcbiAgICAgIGlzUGFyZW50T2Y6IHNlY3Rpb24uaXNQYXJlbnRPZixcbiAgICAgIGlzQ2hpbGRPZjogc2VjdGlvbi5pc0NoaWxkT2YsXG4gICAgfTtcbiAgICBpZiAoc2VjdGlvbi5pc0NoaWxkT2YpIHtcbiAgICAgIGxldCBhbGxQYXJlbnRzID0gc2VjdGlvbi5kYXRhLnJlZHVjZSgoYWNjdW0sIG5leHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY3VtLmNvbmNhdChuZXh0W3NlY3Rpb24uaXNDaGlsZE9mXSk7XG4gICAgICB9LCBbXSk7XG4gICAgICBzZWxlY3RBbGxbc2VjdGlvbi5pc0NoaWxkT2ZdID0gYWxsUGFyZW50cztcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdEFsbDtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXRlbTtcbiAgfVxuXG4gIG9uRm9jdXMoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGUpO1xuICB9XG5cbiAgY2xpY2tPcHRpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgIShldmVudCBpbnN0YW5jZW9mIEV2ZW50KSkge1xuICAgICAgaWYgKGV2ZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihldmVudC5jaGVja2VkLCBldmVudCk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgbGV0IGlucHV0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1waWNrZXIgPiBpbnB1dCcpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnZhbHVlID09PSAnQUxMJykge1xuICAgICAgdGhpcy5tb2RpZnlBbGxPZlR5cGUoZXZlbnQudHlwZSwgJ3NlbGVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhldmVudCwgJ2FkZCcpO1xuICAgICAgdGhpcy52YWx1ZVtldmVudC50eXBlXS5wdXNoKGV2ZW50LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlQWxsSXRlbVN0YXRlKGV2ZW50LnR5cGUpO1xuICAgICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQYXJlbnRPckNoaWxkcmVuKGV2ZW50LCAnc2VsZWN0Jyk7XG4gICAgdGhpcy5zZWxlY3QobnVsbCwgZXZlbnQpO1xuICB9XG5cbiAgdXBkYXRlQWxsSXRlbVN0YXRlKHR5cGUpIHtcbiAgICBsZXQgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgbGV0IGFsbE9mVHlwZVNlbGVjdGVkID0gdGhpcy5hbGxJdGVtc1NlbGVjdGVkKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgaWYgKGFsbE9mVHlwZVNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4geyBhbGxPZlR5cGUsIGFsbE9mVHlwZVNlbGVjdGVkIH07XG4gIH1cblxuICBzZXRJbmRldGVybWluYXRlU3RhdGUoYWxsT2ZUeXBlLCBzdGF0dXMpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhbGxJdGVtID0gYWxsT2ZUeXBlWzBdO1xuICAgIGFsbEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHN0YXR1cztcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlJdGVtcyhpdGVtLCBhY3Rpb24pIHtcbiAgICBsZXQgYWRkaW5nID0gYWN0aW9uID09PSAnYWRkJztcbiAgICBpZiAoYWRkaW5nKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkgPiAtMSkge1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlUZXh0KHRoaXMuaXRlbXMpO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5VGV4dChpdGVtcykge1xuICAgIHRoaXMubm90U2hvd24gPSBbXTtcbiAgICBsZXQgbm90U2hvd24gPSBpdGVtcy5zbGljZSh0aGlzLmNoaXBzQ291bnQpO1xuICAgIGlmIChub3RTaG93bi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IGNvdW50O1xuICAgICAgICBsZXQgc2VsZWN0ZWRPZlR5cGUgPSBub3RTaG93bi5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZS52YWx1ZSk7XG4gICAgICAgIGlmIChzZWxlY3RlZE9mVHlwZS5sZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRPZlR5cGVbMF0udmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgICAgY291bnQgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlLnZhbHVlKS5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ID0gc2VsZWN0ZWRPZlR5cGUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkaXNwbGF5VHlwZSA9IGNvdW50ID09PSAxID8gdHlwZS5zaW5ndWxhciA6IHR5cGUucGx1cmFsIHx8IHR5cGUudmFsdWU7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICB0aGlzLm5vdFNob3duLnB1c2goeyB0eXBlOiBkaXNwbGF5VHlwZSwgY291bnQ6IGNvdW50IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZXZlbnQsIGl0ZW0pIHtcbiAgICBsZXQgdHJpZ2dlcmVkQnlFdmVudDtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRyaWdnZXJlZEJ5RXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgaXRlbVRvUmVtb3ZlID0gaXRlbTtcbiAgICBpZiAoaXRlbVRvUmVtb3ZlLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgdHJpZ2dlcmVkQnlFdmVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5tb2RpZnlBbGxPZlR5cGUoaXRlbVRvUmVtb3ZlLnR5cGUsICd1bnNlbGVjdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbGxPZlR5cGVTZWxlY3RlZChpdGVtVG9SZW1vdmUudHlwZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoaXRlbVRvUmVtb3ZlKTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVJdGVtKGl0ZW0sIHRyaWdnZXJlZEJ5RXZlbnQpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtLCB0cmlnZ2VyZWRCeUV2ZW50PzogYW55KSB7XG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMucmVtb3ZlVmFsdWUoaXRlbSk7XG4gICAgaWYgKGl0ZW0udmFsdWUgIT09ICdBTEwnKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oaXRlbSwgJ3Vuc2VsZWN0Jyk7XG4gICAgfVxuICAgIGlmICh0cmlnZ2VyZWRCeUV2ZW50KSB7XG4gICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZmFsc2UsIGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVZhbHVlKGl0ZW0pIHtcbiAgICBsZXQgdXBkYXRlZFZhbHVlcyA9IHRoaXMudmFsdWVbaXRlbS50eXBlXS5maWx0ZXIoKHgpID0+IHggIT09IGl0ZW0udmFsdWUpO1xuICAgIHRoaXMudmFsdWVbaXRlbS50eXBlXSA9IHVwZGF0ZWRWYWx1ZXM7XG4gICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhpdGVtLCAncmVtb3ZlJyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQkFDS1NQQUNFKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDAgJiYgdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0KGV2ZW50LCB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxsT2ZUeXBlU2VsZWN0ZWQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlICYmIHgudmFsdWUgPT09ICdBTEwnKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbW9kaWZ5QWxsT2ZUeXBlKHR5cGUsIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBhbGxPZlR5cGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgaXRlbS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlICE9PSB0eXBlKV07XG4gICAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgICAgdGhpcy52YWx1ZVt0eXBlXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsUGFyZW50c09yQ2hpbGRyZW4oYWxsT2ZUeXBlWzBdLCBhY3Rpb24pO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICB9XG5cbiAgdHJpZ2dlclZhbHVlVXBkYXRlKCkge1xuICAgIGxldCB1cGRhdGVkT2JqZWN0ID0ge307XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodXBkYXRlZE9iamVjdFt4LnZhbHVlXSA9IHRoaXMudmFsdWVbeC52YWx1ZV0pKTtcbiAgICB0aGlzLnZhbHVlID0gdXBkYXRlZE9iamVjdDtcbiAgfVxuXG4gIHNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFsbE9mVHlwZVswXS5jaGVja2VkID0gdHJ1ZTtcbiAgICBsZXQgdmFsdWVzID0gYWxsT2ZUeXBlLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgLy8gcmVtb3ZlICdBTEwnIHZhbHVlXG4gICAgdmFsdWVzLnNwbGljZSgwLCAxKTtcbiAgICB0aGlzLnZhbHVlW3R5cGVdID0gdmFsdWVzO1xuICAgIGxldCB1cGRhdGVkSXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlICE9PSB0eXBlKTtcbiAgICB0aGlzLml0ZW1zID0gdXBkYXRlZEl0ZW1zO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGFsbE9mVHlwZVswXSwgJ2FkZCcpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoaXRlbSkge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBpdGVtLnR5cGU7XG4gICAgbGV0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGxldCBhbGxJdGVtID0gYWxsT2ZUeXBlWzBdO1xuICAgIHRoaXMucmVtb3ZlSXRlbShhbGxJdGVtKTtcbiAgICBhbGxJdGVtLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIGxldCBzZWxlY3RlZEl0ZW1zID0gYWxsT2ZUeXBlLmZpbHRlcigoaSkgPT4gaS5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMsIC4uLnNlbGVjdGVkSXRlbXNdO1xuICAgIGxldCB2YWx1ZXMgPSBzZWxlY3RlZEl0ZW1zLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZVt0eXBlXSA9IFsuLi52YWx1ZXNdO1xuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnRzIGRvZXNuJ3QgY29udGFpbiB0aGUgdGFyZ2V0IGVsZW1lbnQsIGl0IGlzIGFuIG91dHNpZGUgY2xpY2tcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxPZlR5cGUodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlKVswXS5vcmlnaW5hbERhdGE7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRPckNoaWxkcmVuKGl0ZW0sIGFjdGlvbikge1xuICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtLmlzUGFyZW50T2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5WYWx1ZShpdGVtLCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pc0NoaWxkT2YgJiYgdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50VmFsdWUoaXRlbSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKHNlbGVjdGluZywgaXRlbUNoYW5nZWQpIHtcbiAgICBpZiAoIWl0ZW1DaGFuZ2VkLmlzQ2hpbGRPZiAmJiAhaXRlbUNoYW5nZWQuaXNQYXJlbnRPZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcGFyZW50ID0gdGhpcy50eXBlcy5maWx0ZXIoKHgpID0+ICEheC5pc1BhcmVudE9mKVswXTtcbiAgICBsZXQgcGFyZW50VHlwZSA9IHBhcmVudC52YWx1ZTtcbiAgICBsZXQgYWxsUGFyZW50VHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHBhcmVudFR5cGUpO1xuICAgIGxldCBjaGlsZFR5cGUgPSBhbGxQYXJlbnRUeXBlWzBdLmlzUGFyZW50T2Y7XG4gICAgbGV0IGFsbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBsZXQgYWxsQ2hlY2tlZENoaWxkcmVuID0gYWxsQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiAhIXguY2hlY2tlZCk7XG5cbiAgICBhbGxQYXJlbnRUeXBlLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCA9IGFsbENoZWNrZWRDaGlsZHJlbi5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIHhbcGFyZW50VHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBvYmoudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhbGxDaGlsZHJlbk9mUGFyZW50ID0gYWxsQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgudmFsdWUgIT09ICdBTEwnICYmIHhbcGFyZW50VHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBvYmoudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBhbGxDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCAhPT0gc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIG9iai5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUob2JqKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbmRpdmlkdWFsQ2hpbGRyZW4oc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbUNoYW5nZWQudHlwZSAhPT0gcGFyZW50VHlwZSkge1xuICAgICAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIG9iai5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUob2JqKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbmRpdmlkdWFsQ2hpbGRyZW4oc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoYWxsQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIGl0IGhhcyBubyBjaGlsZHJlbiBhbmQgaXMgY2hlY2tlZCwgaXQgc2hvdWxkIHN0YXkgY2hlY2tlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbUNoYW5nZWQudHlwZSAhPT0gcGFyZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgb2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlSW5kZXRlcm1pbmF0ZVN0YXRlcyhhbGxQYXJlbnRUeXBlLCBhbGxDaGlsZHJlbiwgYWxsQ2hlY2tlZENoaWxkcmVuKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbGxQYXJlbnRzT3JDaGlsZHJlbihhbGxJdGVtLCBhY3Rpb24pIHtcbiAgICBpZiAoYWxsSXRlbS5pc1BhcmVudE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbENoaWxkcmVuVmFsdWUoYWxsSXRlbSwgYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGFsbEl0ZW0uaXNDaGlsZE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbFBhcmVudFZhbHVlKGFsbEl0ZW0sIGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWxsQ2hpbGRyZW5WYWx1ZShpdGVtLCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgY2hpbGRUeXBlID0gaXRlbS5pc1BhcmVudE9mO1xuICAgIGxldCBwb3RlbnRpYWxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uICYmIHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoY2hpbGRUeXBlKSAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnJlbW92ZShudWxsLCBwb3RlbnRpYWxDaGlsZHJlblswXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvdGVudGlhbENoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LnZhbHVlID09PSAnQUxMJyAmJiAheC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgICAgICB4LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHguaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh4LmNoZWNrZWQgJiYgIXNlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHgpO1xuICAgICAgICB9XG4gICAgICAgIHguY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUFsbFBhcmVudFZhbHVlKGl0ZW0sIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBwYXJlbnRUeXBlID0gaXRlbS5pc0NoaWxkT2Y7XG4gICAgbGV0IHBvdGVudGlhbFBhcmVudHMgPSB0aGlzLmdldEFsbE9mVHlwZShwYXJlbnRUeXBlKTtcbiAgICBwb3RlbnRpYWxQYXJlbnRzLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICgheC5jaGVja2VkKSB7XG4gICAgICAgIHguaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUluZGV0ZXJtaW5hdGVTdGF0ZXMoYWxsUGFyZW50VHlwZSwgYWxsQ2hpbGRyZW4sIGFsbENoZWNrZWRDaGlsZHJlbikge1xuICAgIGxldCBhbGxDaGVja2VkT3JJbmRldGVybWluYXRlUGFyZW50cyA9IGFsbFBhcmVudFR5cGUuZmlsdGVyKCh4KSA9PiAoISF4LmNoZWNrZWQgfHwgISF4LmluZGV0ZXJtaW5hdGUpICYmIHgudmFsdWUgIT09ICdBTEwnKTtcbiAgICBsZXQgaXNQYXJlbnRJbmRldGVybWluYXRlID0gISFhbGxQYXJlbnRUeXBlWzBdLmNoZWNrZWQgPyBmYWxzZSA6IGFsbENoZWNrZWRPckluZGV0ZXJtaW5hdGVQYXJlbnRzLmxlbmd0aCA+IDA7XG4gICAgbGV0IGlzQ2hpbGRJbmRldGVybWluYXRlID0gISFhbGxDaGlsZHJlblswXS5jaGVja2VkID8gZmFsc2UgOiBhbGxDaGVja2VkQ2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxQYXJlbnRUeXBlLCBpc1BhcmVudEluZGV0ZXJtaW5hdGUpO1xuICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbENoaWxkcmVuLCBpc0NoaWxkSW5kZXRlcm1pbmF0ZSk7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlblZhbHVlKHBhcmVudCwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IGNoaWxkVHlwZSA9IHBhcmVudC5pc1BhcmVudE9mO1xuICAgIGxldCBwb3RlbnRpYWxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgcG90ZW50aWFsQ2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh4W3BhcmVudC50eXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IHBhcmVudC52YWx1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoeC5jaGVja2VkICYmICFzZWxlY3RpbmcpIHtcbiAgICAgICAgICB4LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5hbGxPZlR5cGVTZWxlY3RlZChjaGlsZFR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKHgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4LmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRWYWx1ZShjaGlsZCwgYWN0aW9uKSB7XG4gICAgbGV0IGFsbFBhcmVudFR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZC5pc0NoaWxkT2YpO1xuICAgIGlmIChhbGxQYXJlbnRUeXBlWzBdLmNoZWNrZWQgJiYgYWN0aW9uICE9PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChhbGxQYXJlbnRUeXBlWzBdKTtcbiAgICB9XG4gIH1cblxuICBhZGRJbmRpdmlkdWFsQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBsZXQgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gZmFsc2U7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHguaXNDaGlsZE9mKSB7XG4gICAgICAgIC8vIG9ubHkgYWRkIGNoaWxkcmVuIGlmIHRoZWlyIHBhcmVudHMgYXJlIG5vdCBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgIHhbeC5pc0NoaWxkT2ZdLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlW3guaXNDaGlsZE9mXS5maWx0ZXIoKHApID0+IHAgPT09IHBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmFsdWVbeC50eXBlXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPT09IHgudmFsdWUpLmxlbmd0aCA9PT0gMCAmJiAhcGFyZW50QWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuYWRkKHgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlKG1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBtb2RlbCB8fCB7fTtcbiAgICBpZiAoIXRoaXMudHlwZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlT2JqKSA9PiB7XG4gICAgICBsZXQgdHlwZSA9IHR5cGVPYmoudmFsdWU7XG4gICAgICBpZiAodGhpcy52YWx1ZVt0eXBlXSkge1xuICAgICAgICBsZXQgaW5kZXRlcm1pbmF0ZUlzU2V0ID0gZmFsc2U7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy51cGRhdGVBbGxJdGVtU3RhdGUodHlwZSk7XG4gICAgICAgIGxldCBvcHRpb25zQnlUeXBlID0gb3B0aW9ucy5hbGxPZlR5cGU7XG4gICAgICAgIGxldCBhbGxTZWxlY3RlZCA9IG9wdGlvbnMuYWxsT2ZUeXBlU2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMudmFsdWVbdHlwZV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmICghYWxsU2VsZWN0ZWQgJiYgIWluZGV0ZXJtaW5hdGVJc1NldCkge1xuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZUlzU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKG9wdGlvbnNCeVR5cGUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zQnlUeXBlLmZpbHRlcigoeCkgPT4geC52YWx1ZSA9PT0gaXRlbSlbMF07XG4gICAgICAgICAgdmFsdWUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXModmFsdWUsICdhZGQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIHZhbHVlLmlzUGFyZW50T2YpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5WYWx1ZSh2YWx1ZSwgJ3NlbGVjdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0eXBlT2JqLmlzQ2hpbGRPZikge1xuICAgICAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbih0cnVlLCB7IHZhbHVlOiB0eXBlLCBpc0NoaWxkT2Y6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFsbEl0ZW1zU2VsZWN0ZWQob3B0aW9uc0J5VHlwZSwgdHlwZSkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlW3R5cGVdLmxlbmd0aCA9PT0gb3B0aW9uc0J5VHlwZS5sZW5ndGggLSAxO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKG1vZGVsKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==