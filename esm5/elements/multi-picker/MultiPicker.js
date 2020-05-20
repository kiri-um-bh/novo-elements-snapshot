/**
 * @fileoverview added by tsickle
 * Generated from: elements/multi-picker/MultiPicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoMultiPickerElement; })),
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
var NovoMultiPickerElement = /** @class */ (function () {
    function NovoMultiPickerElement(element, labels) {
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
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
        this.chipsCount = 4;
    }
    Object.defineProperty(NovoMultiPickerElement.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} selectedItems
         * @return {?}
         */
        function (selectedItems) {
            var _this = this;
            if (selectedItems) {
                this.types.forEach((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return (_this._value[x.value] = selectedItems[x.value]); }));
            }
            else {
                this._value = {};
                this.types.forEach((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return (_this._value[x.value] = []); }));
            }
            this.changed.emit(selectedItems);
            this.onModelChange(selectedItems);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoMultiPickerElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectAllOption = this.source.selectAllOption || false;
        this.chipsCount = this.source.chipsCount || 4;
        this.strictRelationship = this.source.strictRelationship || false;
        this.setupOptions();
    };
    /**
     * @return {?}
     */
    NovoMultiPickerElement.prototype.clearValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.types.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) { return _this.modifyAllOfType(type.value, 'unselect'); }));
        this.items = [];
        this._items.next(this.items);
        this.setInitialValue(null);
        this.onModelChange(this.value);
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    NovoMultiPickerElement.prototype.removeFromDisplay = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        this.remove(true, item);
        this.modifyAffectedParentsOrChildren(false, item);
    };
    /**
     * @return {?}
     */
    NovoMultiPickerElement.prototype.setupOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.options = this.source.options || [];
        this._options = [];
        if (this.options) {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var formattedOption = _this.setupOptionsByType(option);
                _this._options.push(formattedOption);
            }));
        }
        this.source.options = this._options;
    };
    /**
     * @param {?} section
     * @return {?}
     */
    NovoMultiPickerElement.prototype.setupOptionsByType = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        var _this = this;
        /** @type {?} */
        var formattedSection = {
            type: section.type,
            label: section.label || section.type,
        };
        formattedSection.data = section.data.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return _this.formatOption(section, item);
        }));
        if (this.selectAllOption) {
            /** @type {?} */
            var selectAll = this.createSelectAllOption(section);
            formattedSection.data.splice(0, 0, selectAll);
        }
        formattedSection.originalData = formattedSection.data.slice();
        return formattedSection;
    };
    /**
     * @param {?} section
     * @param {?} item
     * @return {?}
     */
    NovoMultiPickerElement.prototype.formatOption = /**
     * @param {?} section
     * @param {?} item
     * @return {?}
     */
    function (section, item) {
        /** @type {?} */
        var obj = {
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
    };
    /**
     * @param {?} section
     * @return {?}
     */
    NovoMultiPickerElement.prototype.createSelectAllOption = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var selectAll = {
            value: 'ALL',
            label: "All " + section.type,
            type: section.type,
            checked: this.model && this.model.length && this.model.indexOf('ALL') !== -1,
            isParentOf: section.isParentOf,
            isChildOf: section.isChildOf,
        };
        if (section.isChildOf) {
            /** @type {?} */
            var allParents = section.data.reduce((/**
             * @param {?} accum
             * @param {?} next
             * @return {?}
             */
            function (accum, next) {
                return accum.concat(next[section.isChildOf]);
            }), []);
            selectAll[section.isChildOf] = allParents;
        }
        return selectAll;
    };
    /**
     * @return {?}
     */
    NovoMultiPickerElement.prototype.deselectAll = /**
     * @return {?}
     */
    function () {
        this.selected = null;
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    NovoMultiPickerElement.prototype.select = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        this.blur.emit(event);
        this.deselectAll();
        this.selected = item;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NovoMultiPickerElement.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.element.nativeElement.classList.add('selected');
        this.focus.emit(e);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoMultiPickerElement.prototype.clickOption = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
            var input = this.element.nativeElement.querySelector('novo-picker > input');
            if (input) {
                input.focus();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoMultiPickerElement.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateAllItemState = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var allOfType = this.getAllOfType(type);
        /** @type {?} */
        var allOfTypeSelected = this.allItemsSelected(allOfType, type);
        if (allOfTypeSelected) {
            this.selectAll(allOfType, type);
        }
        return { allOfType: allOfType, allOfTypeSelected: allOfTypeSelected };
    };
    /**
     * @param {?} allOfType
     * @param {?} status
     * @return {?}
     */
    NovoMultiPickerElement.prototype.setIndeterminateState = /**
     * @param {?} allOfType
     * @param {?} status
     * @return {?}
     */
    function (allOfType, status) {
        if (!this.selectAllOption) {
            return;
        }
        /** @type {?} */
        var allItem = allOfType[0];
        allItem.indeterminate = status;
    };
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateDisplayItems = /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    function (item, action) {
        /** @type {?} */
        var adding = action === 'add';
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
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateDisplayText = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this.notShown = [];
        /** @type {?} */
        var notShown = items.slice(this.chipsCount);
        if (notShown.length > 0) {
            this.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                /** @type {?} */
                var count;
                /** @type {?} */
                var selectedOfType = notShown.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.type === type.value; }));
                if (selectedOfType.length === 1 && selectedOfType[0].value === 'ALL') {
                    count = _this.getAllOfType(type.value).length - 1;
                }
                else {
                    count = selectedOfType.length;
                }
                /** @type {?} */
                var displayType = count === 1 ? type.singular : type.plural || type.value;
                if (count > 0) {
                    _this.notShown.push({ type: displayType, count: count });
                }
            }));
        }
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    NovoMultiPickerElement.prototype.remove = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        /** @type {?} */
        var triggeredByEvent;
        if (event) {
            triggeredByEvent = true;
        }
        /** @type {?} */
        var itemToRemove = item;
        if (itemToRemove.value === 'ALL') {
            triggeredByEvent = false;
            this.modifyAllOfType(itemToRemove.type, 'unselect');
        }
        else if (this.allOfTypeSelected(itemToRemove.type)) {
            this.handleRemoveItemIfAllSelected(itemToRemove);
        }
        this.removeItem(item, triggeredByEvent);
    };
    /**
     * @param {?} item
     * @param {?=} triggeredByEvent
     * @return {?}
     */
    NovoMultiPickerElement.prototype.removeItem = /**
     * @param {?} item
     * @param {?=} triggeredByEvent
     * @return {?}
     */
    function (item, triggeredByEvent) {
        item.checked = false;
        this.deselectAll();
        this.removeValue(item);
        if (item.value !== 'ALL') {
            this.updateParentOrChildren(item, 'unselect');
        }
        if (triggeredByEvent) {
            this.modifyAffectedParentsOrChildren(false, item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NovoMultiPickerElement.prototype.removeValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var updatedValues = this.value[item.type].filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== item.value; }));
        this.value[item.type] = updatedValues;
        this.triggerValueUpdate();
        this.updateDisplayItems(item, 'remove');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoMultiPickerElement.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NovoMultiPickerElement.prototype.allOfTypeSelected = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.items.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === type && x.value === 'ALL'; })).length > 0;
    };
    /**
     * @param {?} type
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.modifyAllOfType = /**
     * @param {?} type
     * @param {?} action
     * @return {?}
     */
    function (type, action) {
        /** @type {?} */
        var selecting = action === 'select';
        /** @type {?} */
        var allOfType = this.getAllOfType(type);
        allOfType.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.checked = selecting;
            item.indeterminate = false;
        }));
        if (selecting) {
            this.selectAll(allOfType, type);
        }
        else {
            this.items = tslib_1.__spread(this.items.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.type !== type; })));
            this._items.next(this.items);
            this.value[type] = [];
        }
        if (this.selectAllOption) {
            this.updateAllParentsOrChildren(allOfType[0], action);
        }
        this.triggerValueUpdate();
    };
    /**
     * @return {?}
     */
    NovoMultiPickerElement.prototype.triggerValueUpdate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var updatedObject = {};
        this.types.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return (updatedObject[x.value] = _this.value[x.value]); }));
        this.value = updatedObject;
    };
    /**
     * @param {?} allOfType
     * @param {?} type
     * @return {?}
     */
    NovoMultiPickerElement.prototype.selectAll = /**
     * @param {?} allOfType
     * @param {?} type
     * @return {?}
     */
    function (allOfType, type) {
        if (!this.selectAllOption) {
            return;
        }
        allOfType[0].checked = true;
        /** @type {?} */
        var values = allOfType.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return i.value;
        }));
        // remove 'ALL' value
        values.splice(0, 1);
        this.value[type] = values;
        /** @type {?} */
        var updatedItems = this.items.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type !== type; }));
        this.items = updatedItems;
        this.updateDisplayItems(allOfType[0], 'add');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NovoMultiPickerElement.prototype.handleRemoveItemIfAllSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this.selectAllOption) {
            return;
        }
        /** @type {?} */
        var type = item.type;
        /** @type {?} */
        var allOfType = this.getAllOfType(type);
        /** @type {?} */
        var allItem = allOfType[0];
        this.removeItem(allItem);
        allItem.indeterminate = true;
        /** @type {?} */
        var selectedItems = allOfType.filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.checked === true; }));
        this.items = tslib_1.__spread(this.items, selectedItems);
        /** @type {?} */
        var values = selectedItems.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return i.value;
        }));
        this.value[type] = tslib_1.__spread(values);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoMultiPickerElement.prototype.handleOutsideClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // If the elements doesn't contain the target element, it is an outside click
        if (!this.element.nativeElement.contains(event.target)) {
            this.blur.emit(event);
            this.deselectAll();
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NovoMultiPickerElement.prototype.getAllOfType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._options.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === type; }))[0].originalData;
    };
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateParentOrChildren = /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    function (item, action) {
        if (this.strictRelationship && item.isParentOf) {
            this.updateChildrenValue(item, action);
        }
        else if (item.isChildOf && this.selectAllOption) {
            this.updateParentValue(item, action);
        }
    };
    /**
     * @param {?} selecting
     * @param {?} itemChanged
     * @return {?}
     */
    NovoMultiPickerElement.prototype.modifyAffectedParentsOrChildren = /**
     * @param {?} selecting
     * @param {?} itemChanged
     * @return {?}
     */
    function (selecting, itemChanged) {
        var _this = this;
        if (!itemChanged.isChildOf && !itemChanged.isParentOf) {
            return;
        }
        /** @type {?} */
        var parent = this.types.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !!x.isParentOf; }))[0];
        /** @type {?} */
        var parentType = parent.value;
        /** @type {?} */
        var allParentType = this.getAllOfType(parentType);
        /** @type {?} */
        var childType = allParentType[0].isParentOf;
        /** @type {?} */
        var allChildren = this.getAllOfType(childType);
        /** @type {?} */
        var allCheckedChildren = allChildren.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !!x.checked; }));
        allParentType.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj.value === 'ALL') {
                return;
            }
            /** @type {?} */
            var selectedChildrenOfParent = allCheckedChildren.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                return x[parentType].filter((/**
                 * @param {?} y
                 * @return {?}
                 */
                function (y) { return y === obj.value; })).length > 0;
            }));
            if (selecting) {
                if (obj.checked) {
                    return;
                }
                obj.indeterminate = selectedChildrenOfParent.length > 0;
            }
            else {
                /** @type {?} */
                var allChildrenOfParent = allChildren.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.value !== 'ALL' && x[parentType].filter((/**
                     * @param {?} y
                     * @return {?}
                     */
                    function (y) { return y === obj.value; })).length > 0;
                }));
                if (selectedChildrenOfParent.length > 0) {
                    if (obj.checked) {
                        if (_this.strictRelationship && allChildrenOfParent.length !== selectedChildrenOfParent.length) {
                            obj.indeterminate = true;
                            obj.checked = false;
                            _this.removeValue(obj);
                            _this.addIndividualChildren(selectedChildrenOfParent);
                        }
                    }
                    else {
                        obj.indeterminate = true;
                    }
                    if (_this.strictRelationship && itemChanged.type !== parentType) {
                        if (obj.checked) {
                            obj.checked = false;
                            _this.removeValue(obj);
                            _this.addIndividualChildren(selectedChildrenOfParent);
                        }
                    }
                }
                else {
                    obj.indeterminate = false;
                    if (allChildrenOfParent.length === 0) {
                        // if it has no children and is checked, it should stay checked
                        return;
                    }
                    else if (_this.strictRelationship && itemChanged.type !== parentType) {
                        _this.remove(null, obj);
                    }
                }
            }
        }));
        if (this.selectAllOption) {
            this.updateIndeterminateStates(allParentType, allChildren, allCheckedChildren);
        }
    };
    /**
     * @param {?} allItem
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateAllParentsOrChildren = /**
     * @param {?} allItem
     * @param {?} action
     * @return {?}
     */
    function (allItem, action) {
        if (allItem.isParentOf) {
            this.updateAllChildrenValue(allItem, action);
        }
        else if (allItem.isChildOf) {
            this.updateAllParentValue(allItem, action);
        }
    };
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateAllChildrenValue = /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    function (item, action) {
        var _this = this;
        /** @type {?} */
        var selecting = action === 'select';
        /** @type {?} */
        var childType = item.isParentOf;
        /** @type {?} */
        var potentialChildren = this.getAllOfType(childType);
        if (this.selectAllOption && this.allOfTypeSelected(childType) && !selecting) {
            this.remove(null, potentialChildren[0]);
            return;
        }
        potentialChildren.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (x.value === 'ALL' && !x.checked) {
                if (selecting) {
                    x.checked = true;
                }
                x.indeterminate = selecting;
            }
            else {
                if (x.checked && !selecting) {
                    _this.remove(null, x);
                }
                x.checked = selecting;
            }
        }));
    };
    /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateAllParentValue = /**
     * @param {?} item
     * @param {?} action
     * @return {?}
     */
    function (item, action) {
        /** @type {?} */
        var selecting = action === 'select';
        /** @type {?} */
        var parentType = item.isChildOf;
        /** @type {?} */
        var potentialParents = this.getAllOfType(parentType);
        potentialParents.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (!x.checked) {
                x.indeterminate = selecting;
            }
        }));
    };
    /**
     * @param {?} allParentType
     * @param {?} allChildren
     * @param {?} allCheckedChildren
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateIndeterminateStates = /**
     * @param {?} allParentType
     * @param {?} allChildren
     * @param {?} allCheckedChildren
     * @return {?}
     */
    function (allParentType, allChildren, allCheckedChildren) {
        /** @type {?} */
        var allCheckedOrIndeterminateParents = allParentType.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return (!!x.checked || !!x.indeterminate) && x.value !== 'ALL'; }));
        /** @type {?} */
        var isParentIndeterminate = !!allParentType[0].checked ? false : allCheckedOrIndeterminateParents.length > 0;
        /** @type {?} */
        var isChildIndeterminate = !!allChildren[0].checked ? false : allCheckedChildren.length > 0;
        this.setIndeterminateState(allParentType, isParentIndeterminate);
        this.setIndeterminateState(allChildren, isChildIndeterminate);
    };
    /**
     * @param {?} parent
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateChildrenValue = /**
     * @param {?} parent
     * @param {?} action
     * @return {?}
     */
    function (parent, action) {
        var _this = this;
        /** @type {?} */
        var selecting = action === 'select';
        /** @type {?} */
        var childType = parent.isParentOf;
        /** @type {?} */
        var potentialChildren = this.getAllOfType(childType);
        potentialChildren.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (x.value === 'ALL') {
                return;
            }
            if (x[parent.type].filter((/**
             * @param {?} y
             * @return {?}
             */
            function (y) { return y === parent.value; })).length > 0) {
                if (x.checked && !selecting) {
                    x.checked = false;
                    if (_this.allOfTypeSelected(childType)) {
                        _this.handleRemoveItemIfAllSelected(x);
                    }
                    else {
                        _this.removeValue(x);
                    }
                }
                x.checked = selecting;
            }
        }));
    };
    /**
     * @param {?} child
     * @param {?} action
     * @return {?}
     */
    NovoMultiPickerElement.prototype.updateParentValue = /**
     * @param {?} child
     * @param {?} action
     * @return {?}
     */
    function (child, action) {
        /** @type {?} */
        var allParentType = this.getAllOfType(child.isChildOf);
        if (allParentType[0].checked && action !== 'select') {
            this.handleRemoveItemIfAllSelected(allParentType[0]);
        }
    };
    /**
     * @param {?} children
     * @return {?}
     */
    NovoMultiPickerElement.prototype.addIndividualChildren = /**
     * @param {?} children
     * @return {?}
     */
    function (children) {
        var _this = this;
        /** @type {?} */
        var parentAlreadySelected = false;
        children.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (x.isChildOf) {
                // only add children if their parents are not already selected
                x[x.isChildOf].forEach((/**
                 * @param {?} parent
                 * @return {?}
                 */
                function (parent) {
                    if (_this.value[x.isChildOf].filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return p === parent; })).length > 0) {
                        parentAlreadySelected = true;
                    }
                }));
            }
            if (_this.value[x.type].filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item === x.value; })).length === 0 && !parentAlreadySelected) {
                _this.add(x);
            }
        }));
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoMultiPickerElement.prototype.setInitialValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        this.items = [];
        this.value = model || {};
        if (!this.types) {
            return;
        }
        this.types.forEach((/**
         * @param {?} typeObj
         * @return {?}
         */
        function (typeObj) {
            /** @type {?} */
            var type = typeObj.value;
            if (_this.value[type]) {
                /** @type {?} */
                var indeterminateIsSet_1 = false;
                /** @type {?} */
                var options = _this.updateAllItemState(type);
                /** @type {?} */
                var optionsByType_1 = options.allOfType;
                /** @type {?} */
                var allSelected_1 = options.allOfTypeSelected;
                _this.value[type].forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (!allSelected_1 && !indeterminateIsSet_1) {
                        indeterminateIsSet_1 = true;
                        _this.setIndeterminateState(optionsByType_1, true);
                    }
                    /** @type {?} */
                    var value = optionsByType_1.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.value === item; }))[0];
                    value.checked = true;
                    if (!allSelected_1) {
                        _this.updateDisplayItems(value, 'add');
                    }
                    if (_this.strictRelationship && value.isParentOf) {
                        _this.updateChildrenValue(value, 'select');
                    }
                }));
                if (typeObj.isChildOf) {
                    _this.modifyAffectedParentsOrChildren(true, { value: type, isChildOf: true });
                }
            }
            else {
                _this.value[type] = [];
            }
        }));
    };
    /**
     * @param {?} optionsByType
     * @param {?} type
     * @return {?}
     */
    NovoMultiPickerElement.prototype.allItemsSelected = /**
     * @param {?} optionsByType
     * @param {?} type
     * @return {?}
     */
    function (optionsByType, type) {
        return this.value[type].length === optionsByType.length - 1;
    };
    // Set touched on blur
    // Set touched on blur
    /**
     * @param {?} e
     * @return {?}
     */
    NovoMultiPickerElement.prototype.onTouched = 
    // Set touched on blur
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.element.nativeElement.classList.remove('selected');
        this.onModelTouched();
        this.blur.emit(e);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoMultiPickerElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        this.setInitialValue(model);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoMultiPickerElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoMultiPickerElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    NovoMultiPickerElement.decorators = [
        { type: Component, args: [{
                    selector: 'multi-picker',
                    providers: [CHIPS_VALUE_ACCESSOR],
                    template: "\n    <chip\n      *ngFor=\"let item of (_items | async | slice: 0:chipsCount)\"\n      [type]=\"item.type\"\n      [class.selected]=\"item == selected\"\n      (remove)=\"removeFromDisplay($event, item)\"\n      (select)=\"select($event, item)\"\n    >\n      {{ item.label }}\n    </chip>\n    <div *ngIf=\"items.length > chipsCount\">\n      <ul class=\"summary\">\n        <li *ngFor=\"let type of notShown\">+ {{ type.count }} {{ labels.more }} {{ type.type }}</li>\n      </ul>\n    </div>\n    <div class=\"chip-input-container\">\n      <novo-picker\n        clearValueOnSelect=\"true\"\n        [config]=\"source\"\n        [placeholder]=\"placeholder\"\n        (select)=\"clickOption($event)\"\n        (keydown)=\"onKeyDown($event)\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onTouched($event)\"\n        [overrideElement]=\"element\"\n      >\n      </novo-picker>\n    </div>\n    <i class=\"bhi-search\" [class.has-value]=\"items.length\"></i>\n    <label class=\"clear-all\" *ngIf=\"items.length\" (click)=\"clearValue()\">{{ labels.clearAll }} <i class=\"bhi-times\"></i></label>\n  ",
                    host: {
                        '[class.with-value]': 'items.length > 0',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoMultiPickerElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService }
    ]; };
    NovoMultiPickerElement.propDecorators = {
        source: [{ type: Input }],
        placeholder: [{ type: Input }],
        types: [{ type: Input }],
        changed: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        value: [{ type: Input }]
    };
    return NovoMultiPickerElement;
}());
export { NovoMultiPickerElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0lBR3BELG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7O0FBRUQsbUJBSUM7OztJQUhDLG9CQUFLOztJQUNMLHFCQUFNOztJQUNOLHFCQUFNOztBQUdSO0lBcUZFLGdDQUFtQixPQUFtQixFQUFTLE1BQXdCO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQTNDdkUsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFJdEIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFrQjdDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFHLElBQUksYUFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBR3RDLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFLakIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFHbkIsa0JBQWE7OztRQUFhLGNBQVEsQ0FBQyxFQUFDO1FBQ3BDLG1CQUFjOzs7UUFBYSxjQUFRLENBQUMsRUFBQztRQUduQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBbkNELHNCQUFJLHlDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFFRCxVQUNVLGFBQWE7WUFEdkIsaUJBVUM7WUFSQyxJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQS9DLENBQStDLEVBQUMsQ0FBQzthQUM1RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO2FBQ3hEO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FaQTs7OztJQW1DRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsa0RBQWlCOzs7OztJQUFqQixVQUFrQixLQUFLLEVBQUUsSUFBSTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCw2Q0FBWTs7O0lBQVo7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE1BQU07O29CQUNwQixlQUFlLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztnQkFDdkQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxtREFBa0I7Ozs7SUFBbEIsVUFBbUIsT0FBTztRQUExQixpQkFjQzs7WUFiTyxnQkFBZ0IsR0FBUTtZQUM1QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLElBQUk7U0FDckM7UUFDRCxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxJQUFJO1lBQzVDLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7O2dCQUNsQixTQUFTLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztZQUNyRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDL0M7UUFDRCxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsNkNBQVk7Ozs7O0lBQVosVUFBYSxPQUFPLEVBQUUsSUFBSTs7WUFDbEIsR0FBRyxHQUFHO1lBQ1YsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUMvRCxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUM1RyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUM3QjtRQUNELElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNqQixHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQsc0RBQXFCOzs7O0lBQXJCLFVBQXNCLE9BQU87O1lBQ3JCLFNBQVMsR0FBRztZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxTQUFPLE9BQU8sQ0FBQyxJQUFNO1lBQzVCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUM3QjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTs7Z0JBQ2YsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7WUFBQyxVQUFDLEtBQUssRUFBRSxJQUFJO2dCQUNqRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsR0FBRSxFQUFFLENBQUM7WUFDTixTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztTQUMzQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCx1Q0FBTTs7Ozs7SUFBTixVQUFPLEtBQUssRUFBRSxJQUFJO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxDQUFDO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7OztnQkFFckQsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztZQUM3RSxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxvQ0FBRzs7OztJQUFILFVBQUksS0FBSztRQUNQLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxtREFBa0I7Ozs7SUFBbEIsVUFBbUIsSUFBSTs7WUFDZixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQ25DLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1FBQ2hFLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLEVBQUUsU0FBUyxXQUFBLEVBQUUsaUJBQWlCLG1CQUFBLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxzREFBcUI7Ozs7O0lBQXJCLFVBQXNCLFNBQVMsRUFBRSxNQUFNO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU87U0FDUjs7WUFDSyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFRCxtREFBa0I7Ozs7O0lBQWxCLFVBQW1CLElBQUksRUFBRSxNQUFNOztZQUN2QixNQUFNLEdBQUcsTUFBTSxLQUFLLEtBQUs7UUFDL0IsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7U0FDRjtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsa0RBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQUs7UUFBdkIsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztZQUNiLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLElBQUk7O29CQUNsQixLQUFLOztvQkFDSCxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQXJCLENBQXFCLEVBQUM7Z0JBQ3BFLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7b0JBQ3BFLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztpQkFDL0I7O29CQUNLLFdBQVcsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLO2dCQUMzRSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsdUNBQU07Ozs7O0lBQU4sVUFBTyxLQUFLLEVBQUUsSUFBSTs7WUFDWixnQkFBZ0I7UUFDcEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDekI7O1lBQ0ssWUFBWSxHQUFHLElBQUk7UUFDekIsSUFBSSxZQUFZLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUNoQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsMkNBQVU7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsZ0JBQXNCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLCtCQUErQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLElBQUk7O1lBQ1IsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFoQixDQUFnQixFQUFDO1FBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7UUFDYixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN4QyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDeEUsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3hCO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsa0RBQWlCOzs7O0lBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFwQyxDQUFvQyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCxnREFBZTs7Ozs7SUFBZixVQUFnQixJQUFJLEVBQUUsTUFBTTs7WUFDcEIsU0FBUyxHQUFHLE1BQU0sS0FBSyxRQUFROztZQUMvQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDekMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQUk7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxvQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFmLENBQWUsRUFBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsbURBQWtCOzs7SUFBbEI7UUFBQSxpQkFJQzs7WUFITyxhQUFhLEdBQUcsRUFBRTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQsMENBQVM7Ozs7O0lBQVQsVUFBVSxTQUFTLEVBQUUsSUFBSTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7WUFDdEIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLEVBQUM7UUFDRixxQkFBcUI7UUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7O1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFmLENBQWUsRUFBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsOERBQTZCOzs7O0lBQTdCLFVBQThCLElBQUk7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTztTQUNSOztZQUNLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOztZQUNuQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOztZQUN2QixhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFsQixDQUFrQixFQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLG9CQUFPLElBQUksQ0FBQyxLQUFLLEVBQUssYUFBYSxDQUFDLENBQUM7O1lBQ3pDLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQU8sTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxtREFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBSztRQUN0Qiw2RUFBNkU7UUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsSUFBSTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBZixDQUFlLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRUQsdURBQXNCOzs7OztJQUF0QixVQUF1QixJQUFJLEVBQUUsTUFBTTtRQUNqQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDeEM7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsZ0VBQStCOzs7OztJQUEvQixVQUFnQyxTQUFTLEVBQUUsV0FBVztRQUF0RCxpQkE0REM7UUEzREMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQ3JELE9BQU87U0FDUjs7WUFDSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBZCxDQUFjLEVBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3BELFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSzs7WUFDekIsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDOztZQUM3QyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7O1lBQ3ZDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7WUFDMUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFYLENBQVcsRUFBQztRQUVqRSxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsR0FBRztZQUN4QixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUN2QixPQUFPO2FBQ1I7O2dCQUNLLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLENBQUM7Z0JBQzNELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssRUFBZixDQUFlLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBQztZQUVGLElBQUksU0FBUyxFQUFFO2dCQUNiLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDZixPQUFPO2lCQUNSO2dCQUNELEdBQUcsQ0FBQyxhQUFhLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUN6RDtpQkFBTTs7b0JBQ0MsbUJBQW1CLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxDQUFDO29CQUMvQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQWYsQ0FBZSxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdEYsQ0FBQyxFQUFDO2dCQUNGLElBQUksd0JBQXdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdkMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNmLElBQUksS0FBSSxDQUFDLGtCQUFrQixJQUFJLG1CQUFtQixDQUFDLE1BQU0sS0FBSyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7NEJBQzdGLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOzRCQUN6QixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs0QkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdEIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLENBQUM7eUJBQ3REO3FCQUNGO3lCQUFNO3dCQUNMLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3FCQUMxQjtvQkFDRCxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTt3QkFDOUQsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFOzRCQUNmLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzRCQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN0QixLQUFJLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FBQzt5QkFDdEQ7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLElBQUksbUJBQW1CLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDcEMsK0RBQStEO3dCQUMvRCxPQUFPO3FCQUNSO3lCQUFNLElBQUksS0FBSSxDQUFDLGtCQUFrQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUNyRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDeEI7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7Ozs7SUFFRCwyREFBMEI7Ozs7O0lBQTFCLFVBQTJCLE9BQU8sRUFBRSxNQUFNO1FBQ3hDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCx1REFBc0I7Ozs7O0lBQXRCLFVBQXVCLElBQUksRUFBRSxNQUFNO1FBQW5DLGlCQXFCQzs7WUFwQk8sU0FBUyxHQUFHLE1BQU0sS0FBSyxRQUFROztZQUMvQixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVU7O1lBQzNCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxPQUFPO1NBQ1I7UUFDRCxpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNuQyxJQUFJLFNBQVMsRUFBRTtvQkFDYixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDbEI7Z0JBQ0QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsQ0FBQyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7YUFDdkI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELHFEQUFvQjs7Ozs7SUFBcEIsVUFBcUIsSUFBSSxFQUFFLE1BQU07O1lBQ3pCLFNBQVMsR0FBRyxNQUFNLEtBQUssUUFBUTs7WUFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTOztZQUMzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUN0RCxnQkFBZ0IsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNkLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsMERBQXlCOzs7Ozs7SUFBekIsVUFBMEIsYUFBYSxFQUFFLFdBQVcsRUFBRSxrQkFBa0I7O1lBQ2hFLGdDQUFnQyxHQUFHLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQXZELENBQXVELEVBQUM7O1lBQ3ZILHFCQUFxQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sR0FBRyxDQUFDOztZQUN4RyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUM3RixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELG9EQUFtQjs7Ozs7SUFBbkIsVUFBb0IsTUFBTSxFQUFFLE1BQU07UUFBbEMsaUJBb0JDOztZQW5CTyxTQUFTLEdBQUcsTUFBTSxLQUFLLFFBQVE7O1lBQy9CLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVTs7WUFDN0IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDdEQsaUJBQWlCLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUNyQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQWxCLENBQWtCLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzNCLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNsQixJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDckMsS0FBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQjtpQkFDRjtnQkFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzthQUN2QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsa0RBQWlCOzs7OztJQUFqQixVQUFrQixLQUFLLEVBQUUsTUFBTTs7WUFDdkIsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUNuRCxJQUFJLENBQUMsNkJBQTZCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7OztJQUVELHNEQUFxQjs7OztJQUFyQixVQUFzQixRQUFRO1FBQTlCLGlCQWVDOztZQWRLLHFCQUFxQixHQUFHLEtBQUs7UUFDakMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUNmLDhEQUE4RDtnQkFDOUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsTUFBTTtvQkFDNUIsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLE1BQU0sRUFBWixDQUFZLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsRSxxQkFBcUIsR0FBRyxJQUFJLENBQUM7cUJBQzlCO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFoQixDQUFnQixFQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUNoRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZ0RBQWU7Ozs7SUFBZixVQUFnQixLQUFLO1FBQXJCLGlCQWtDQztRQWpDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87O2dCQUNuQixJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUs7WUFDMUIsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOztvQkFDaEIsb0JBQWtCLEdBQUcsS0FBSzs7b0JBQ3hCLE9BQU8sR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDOztvQkFDdkMsZUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTOztvQkFDakMsYUFBVyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUI7Z0JBQzdDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzVCLElBQUksQ0FBQyxhQUFXLElBQUksQ0FBQyxvQkFBa0IsRUFBRTt3QkFDdkMsb0JBQWtCLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixLQUFJLENBQUMscUJBQXFCLENBQUMsZUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNqRDs7d0JBQ0ssS0FBSyxHQUFHLGVBQWEsQ0FBQyxNQUFNOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQWhCLENBQWdCLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlELEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsYUFBVyxFQUFFO3dCQUNoQixLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO3dCQUMvQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUMzQztnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ3JCLEtBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUM5RTthQUNGO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxpREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLGFBQWEsRUFBRSxJQUFJO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHNCQUFzQjs7Ozs7O0lBQ3RCLDBDQUFTOzs7Ozs7SUFBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDJDQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxpREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGtEQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXJtQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDakMsUUFBUSxFQUFFLDJsQ0E4QlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLG9CQUFvQixFQUFFLGtCQUFrQjtxQkFDekM7aUJBQ0Y7Ozs7Z0JBMURtQixVQUFVO2dCQUlyQixnQkFBZ0I7Ozt5QkF3RHRCLEtBQUs7OEJBRUwsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLE1BQU07d0JBRU4sTUFBTTt1QkFFTixNQUFNO3dCQU9OLEtBQUs7O0lBOGlCUiw2QkFBQztDQUFBLEFBdG1CRCxJQXNtQkM7U0Foa0JZLHNCQUFzQjs7O0lBQ2pDLHdDQUNtRzs7SUFDbkcsNkNBQ3NCOztJQUN0Qix1Q0FDNEQ7O0lBQzVELHlDQUNnRDs7SUFDaEQsdUNBQzhDOztJQUM5QyxzQ0FDNkM7O0lBa0I3Qyx1Q0FBbUI7O0lBQ25CLHdDQUFzQzs7SUFDdEMseUNBQWE7O0lBQ2IsMENBQWM7O0lBQ2QsMENBQXFCOztJQUNyQix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsaURBQXlCOztJQUN6QixvREFBNEI7O0lBRTVCLHdDQUFZOztJQUNaLDBDQUFtQjs7SUFFbkIsdUNBQVc7O0lBQ1gsK0NBQW9DOztJQUNwQyxnREFBcUM7O0lBRXpCLHlDQUEwQjs7SUFBRSx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBDSElQU19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9NdWx0aVBpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmludGVyZmFjZSBJdGVtIHtcbiAgdHlwZTtcbiAgbGFiZWw7XG4gIHZhbHVlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdWx0aS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtDSElQU19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNoaXBcbiAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIChfaXRlbXMgfCBhc3luYyB8IHNsaWNlOiAwOmNoaXBzQ291bnQpXCJcbiAgICAgIFt0eXBlXT1cIml0ZW0udHlwZVwiXG4gICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAocmVtb3ZlKT1cInJlbW92ZUZyb21EaXNwbGF5KCRldmVudCwgaXRlbSlcIlxuICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiXG4gICAgPlxuICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgIDwvY2hpcD5cbiAgICA8ZGl2ICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gY2hpcHNDb3VudFwiPlxuICAgICAgPHVsIGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHR5cGUgb2Ygbm90U2hvd25cIj4rIHt7IHR5cGUuY291bnQgfX0ge3sgbGFiZWxzLm1vcmUgfX0ge3sgdHlwZS50eXBlIH19PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNoaXAtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICA8bm92by1waWNrZXJcbiAgICAgICAgY2xlYXJWYWx1ZU9uU2VsZWN0PVwidHJ1ZVwiXG4gICAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgKHNlbGVjdCk9XCJjbGlja09wdGlvbigkZXZlbnQpXCJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICBbb3ZlcnJpZGVFbGVtZW50XT1cImVsZW1lbnRcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICA8L2Rpdj5cbiAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiBbY2xhc3MuaGFzLXZhbHVlXT1cIml0ZW1zLmxlbmd0aFwiPjwvaT5cbiAgICA8bGFiZWwgY2xhc3M9XCJjbGVhci1hbGxcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aFwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj57eyBsYWJlbHMuY2xlYXJBbGwgfX0gPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+PC9sYWJlbD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9NdWx0aVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzb3VyY2U6IHsgb3B0aW9uczogW107IHJlc3VsdHNUZW1wbGF0ZTsgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuOyBjaGlwc0NvdW50OyBzdHJpY3RSZWxhdGlvbnNoaXAgfTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IGFueSA9ICcnO1xuICBASW5wdXQoKVxuICB0eXBlczogeyB2YWx1ZTsgc2luZ3VsYXI7IHBsdXJhbDsgaXNQYXJlbnRPZjsgaXNDaGlsZE9mIH1bXTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShzZWxlY3RlZEl0ZW1zKSB7XG4gICAgaWYgKHNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHRoaXMuX3ZhbHVlW3gudmFsdWVdID0gc2VsZWN0ZWRJdGVtc1t4LnZhbHVlXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHt9O1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBbXSkpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQuZW1pdChzZWxlY3RlZEl0ZW1zKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2Uoc2VsZWN0ZWRJdGVtcyk7XG4gIH1cblxuICBpdGVtczogSXRlbVtdID0gW107XG4gIF9pdGVtcyA9IG5ldyBSZXBsYXlTdWJqZWN0PEl0ZW1bXT4oMSk7XG4gIG9wdGlvbnM6IGFueTtcbiAgX29wdGlvbnM6IGFueTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIGNoaXBzQ291bnQ6IG51bWJlcjtcbiAgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuO1xuICBzdHJpY3RSZWxhdGlvbnNoaXA6IGJvb2xlYW47XG4gIC8vIHByaXZhdGUgZGF0YSBtb2RlbFxuICBfdmFsdWUgPSB7fTtcbiAgbm90U2hvd246IGFueSA9IHt9O1xuICAvLyBQbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3NcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IDQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbiA9IHRoaXMuc291cmNlLnNlbGVjdEFsbE9wdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSB0aGlzLnNvdXJjZS5jaGlwc0NvdW50IHx8IDQ7XG4gICAgdGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgPSB0aGlzLnNvdXJjZS5zdHJpY3RSZWxhdGlvbnNoaXAgfHwgZmFsc2U7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB0aGlzLm1vZGlmeUFsbE9mVHlwZSh0eXBlLnZhbHVlLCAndW5zZWxlY3QnKSk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUobnVsbCk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpc3BsYXkoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLnJlbW92ZSh0cnVlLCBpdGVtKTtcbiAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZmFsc2UsIGl0ZW0pO1xuICB9XG5cbiAgc2V0dXBPcHRpb25zKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc291cmNlLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkT3B0aW9uID0gdGhpcy5zZXR1cE9wdGlvbnNCeVR5cGUob3B0aW9uKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGZvcm1hdHRlZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2Uub3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBzZXR1cE9wdGlvbnNCeVR5cGUoc2VjdGlvbikge1xuICAgIGNvbnN0IGZvcm1hdHRlZFNlY3Rpb246IGFueSA9IHtcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGxhYmVsOiBzZWN0aW9uLmxhYmVsIHx8IHNlY3Rpb24udHlwZSxcbiAgICB9O1xuICAgIGZvcm1hdHRlZFNlY3Rpb24uZGF0YSA9IHNlY3Rpb24uZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdE9wdGlvbihzZWN0aW9uLCBpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIGNvbnN0IHNlbGVjdEFsbCA9IHRoaXMuY3JlYXRlU2VsZWN0QWxsT3B0aW9uKHNlY3Rpb24pO1xuICAgICAgZm9ybWF0dGVkU2VjdGlvbi5kYXRhLnNwbGljZSgwLCAwLCBzZWxlY3RBbGwpO1xuICAgIH1cbiAgICBmb3JtYXR0ZWRTZWN0aW9uLm9yaWdpbmFsRGF0YSA9IGZvcm1hdHRlZFNlY3Rpb24uZGF0YS5zbGljZSgpO1xuICAgIHJldHVybiBmb3JtYXR0ZWRTZWN0aW9uO1xuICB9XG5cbiAgZm9ybWF0T3B0aW9uKHNlY3Rpb24sIGl0ZW0pIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICB2YWx1ZTogc2VjdGlvbi5maWVsZCA/IGl0ZW1bc2VjdGlvbi5maWVsZF0gOiBpdGVtLnZhbHVlIHx8IGl0ZW0sXG4gICAgICBsYWJlbDogc2VjdGlvbi5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHNlY3Rpb24uZm9ybWF0LCBpdGVtKSA6IGl0ZW0ubGFiZWwgfHwgU3RyaW5nKGl0ZW0udmFsdWUgfHwgaXRlbSksXG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBjaGVja2VkOiB1bmRlZmluZWQsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKG9iai5pc0NoaWxkT2YpIHtcbiAgICAgIG9ialtzZWN0aW9uLmlzQ2hpbGRPZl0gPSBpdGVtW3NlY3Rpb24uaXNDaGlsZE9mXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGNyZWF0ZVNlbGVjdEFsbE9wdGlvbihzZWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0QWxsID0ge1xuICAgICAgdmFsdWU6ICdBTEwnLFxuICAgICAgbGFiZWw6IGBBbGwgJHtzZWN0aW9uLnR5cGV9YCxcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGNoZWNrZWQ6IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggJiYgdGhpcy5tb2RlbC5pbmRleE9mKCdBTEwnKSAhPT0gLTEsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKHNlY3Rpb24uaXNDaGlsZE9mKSB7XG4gICAgICBjb25zdCBhbGxQYXJlbnRzID0gc2VjdGlvbi5kYXRhLnJlZHVjZSgoYWNjdW0sIG5leHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY3VtLmNvbmNhdChuZXh0W3NlY3Rpb24uaXNDaGlsZE9mXSk7XG4gICAgICB9LCBbXSk7XG4gICAgICBzZWxlY3RBbGxbc2VjdGlvbi5pc0NoaWxkT2ZdID0gYWxsUGFyZW50cztcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdEFsbDtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXRlbTtcbiAgfVxuXG4gIG9uRm9jdXMoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGUpO1xuICB9XG5cbiAgY2xpY2tPcHRpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgIShldmVudCBpbnN0YW5jZW9mIEV2ZW50KSkge1xuICAgICAgaWYgKGV2ZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihldmVudC5jaGVja2VkLCBldmVudCk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXBpY2tlciA+IGlucHV0Jyk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShldmVudC50eXBlLCAnc2VsZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGV2ZW50LCAnYWRkJyk7XG4gICAgICB0aGlzLnZhbHVlW2V2ZW50LnR5cGVdLnB1c2goZXZlbnQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVBbGxJdGVtU3RhdGUoZXZlbnQudHlwZSk7XG4gICAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oZXZlbnQsICdzZWxlY3QnKTtcbiAgICB0aGlzLnNlbGVjdChudWxsLCBldmVudCk7XG4gIH1cblxuICB1cGRhdGVBbGxJdGVtU3RhdGUodHlwZSkge1xuICAgIGNvbnN0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGFsbE9mVHlwZVNlbGVjdGVkID0gdGhpcy5hbGxJdGVtc1NlbGVjdGVkKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgaWYgKGFsbE9mVHlwZVNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4geyBhbGxPZlR5cGUsIGFsbE9mVHlwZVNlbGVjdGVkIH07XG4gIH1cblxuICBzZXRJbmRldGVybWluYXRlU3RhdGUoYWxsT2ZUeXBlLCBzdGF0dXMpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgYWxsSXRlbS5pbmRldGVybWluYXRlID0gc3RhdHVzO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheUl0ZW1zKGl0ZW0sIGFjdGlvbikge1xuICAgIGNvbnN0IGFkZGluZyA9IGFjdGlvbiA9PT0gJ2FkZCc7XG4gICAgaWYgKGFkZGluZykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pID4gLTEpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VGV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVRleHQoaXRlbXMpIHtcbiAgICB0aGlzLm5vdFNob3duID0gW107XG4gICAgY29uc3Qgbm90U2hvd24gPSBpdGVtcy5zbGljZSh0aGlzLmNoaXBzQ291bnQpO1xuICAgIGlmIChub3RTaG93bi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IGNvdW50O1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9mVHlwZSA9IG5vdFNob3duLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlLnZhbHVlKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkT2ZUeXBlLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZE9mVHlwZVswXS52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgICBjb3VudCA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUudmFsdWUpLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnQgPSBzZWxlY3RlZE9mVHlwZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzcGxheVR5cGUgPSBjb3VudCA9PT0gMSA/IHR5cGUuc2luZ3VsYXIgOiB0eXBlLnBsdXJhbCB8fCB0eXBlLnZhbHVlO1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5ub3RTaG93bi5wdXNoKHsgdHlwZTogZGlzcGxheVR5cGUsIGNvdW50IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZXZlbnQsIGl0ZW0pIHtcbiAgICBsZXQgdHJpZ2dlcmVkQnlFdmVudDtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRyaWdnZXJlZEJ5RXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpdGVtVG9SZW1vdmUgPSBpdGVtO1xuICAgIGlmIChpdGVtVG9SZW1vdmUudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0cmlnZ2VyZWRCeUV2ZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShpdGVtVG9SZW1vdmUudHlwZSwgJ3Vuc2VsZWN0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGl0ZW1Ub1JlbW92ZS50eXBlKSkge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtVG9SZW1vdmUpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUl0ZW0oaXRlbSwgdHJpZ2dlcmVkQnlFdmVudCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGl0ZW0sIHRyaWdnZXJlZEJ5RXZlbnQ/OiBhbnkpIHtcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5yZW1vdmVWYWx1ZShpdGVtKTtcbiAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ0FMTCcpIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50T3JDaGlsZHJlbihpdGVtLCAndW5zZWxlY3QnKTtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXJlZEJ5RXZlbnQpIHtcbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihmYWxzZSwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaXRlbSkge1xuICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZXMgPSB0aGlzLnZhbHVlW2l0ZW0udHlwZV0uZmlsdGVyKCh4KSA9PiB4ICE9PSBpdGVtLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlW2l0ZW0udHlwZV0gPSB1cGRhdGVkVmFsdWVzO1xuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoaXRlbSwgJ3JlbW92ZScpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09PSAwICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdChldmVudCwgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFsbE9mVHlwZVNlbGVjdGVkKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZSAmJiB4LnZhbHVlID09PSAnQUxMJykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG1vZGlmeUFsbE9mVHlwZSh0eXBlLCBhY3Rpb24pIHtcbiAgICBjb25zdCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGNvbnN0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGFsbE9mVHlwZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpXTtcbiAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRzT3JDaGlsZHJlbihhbGxPZlR5cGVbMF0sIGFjdGlvbik7XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gIH1cblxuICB0cmlnZ2VyVmFsdWVVcGRhdGUoKSB7XG4gICAgY29uc3QgdXBkYXRlZE9iamVjdCA9IHt9O1xuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHVwZGF0ZWRPYmplY3RbeC52YWx1ZV0gPSB0aGlzLnZhbHVlW3gudmFsdWVdKSk7XG4gICAgdGhpcy52YWx1ZSA9IHVwZGF0ZWRPYmplY3Q7XG4gIH1cblxuICBzZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbGxPZlR5cGVbMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgY29uc3QgdmFsdWVzID0gYWxsT2ZUeXBlLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgLy8gcmVtb3ZlICdBTEwnIHZhbHVlXG4gICAgdmFsdWVzLnNwbGljZSgwLCAxKTtcbiAgICB0aGlzLnZhbHVlW3R5cGVdID0gdmFsdWVzO1xuICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpO1xuICAgIHRoaXMuaXRlbXMgPSB1cGRhdGVkSXRlbXM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoYWxsT2ZUeXBlWzBdLCAnYWRkJyk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gaXRlbS50eXBlO1xuICAgIGNvbnN0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgdGhpcy5yZW1vdmVJdGVtKGFsbEl0ZW0pO1xuICAgIGFsbEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IGFsbE9mVHlwZS5maWx0ZXIoKGkpID0+IGkuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCAuLi5zZWxlY3RlZEl0ZW1zXTtcbiAgICBjb25zdCB2YWx1ZXMgPSBzZWxlY3RlZEl0ZW1zLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZVt0eXBlXSA9IFsuLi52YWx1ZXNdO1xuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnRzIGRvZXNuJ3QgY29udGFpbiB0aGUgdGFyZ2V0IGVsZW1lbnQsIGl0IGlzIGFuIG91dHNpZGUgY2xpY2tcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxPZlR5cGUodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlKVswXS5vcmlnaW5hbERhdGE7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRPckNoaWxkcmVuKGl0ZW0sIGFjdGlvbikge1xuICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtLmlzUGFyZW50T2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5WYWx1ZShpdGVtLCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pc0NoaWxkT2YgJiYgdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50VmFsdWUoaXRlbSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKHNlbGVjdGluZywgaXRlbUNoYW5nZWQpIHtcbiAgICBpZiAoIWl0ZW1DaGFuZ2VkLmlzQ2hpbGRPZiAmJiAhaXRlbUNoYW5nZWQuaXNQYXJlbnRPZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnR5cGVzLmZpbHRlcigoeCkgPT4gISF4LmlzUGFyZW50T2YpWzBdO1xuICAgIGNvbnN0IHBhcmVudFR5cGUgPSBwYXJlbnQudmFsdWU7XG4gICAgY29uc3QgYWxsUGFyZW50VHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHBhcmVudFR5cGUpO1xuICAgIGNvbnN0IGNoaWxkVHlwZSA9IGFsbFBhcmVudFR5cGVbMF0uaXNQYXJlbnRPZjtcbiAgICBjb25zdCBhbGxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgY29uc3QgYWxsQ2hlY2tlZENoaWxkcmVuID0gYWxsQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiAhIXguY2hlY2tlZCk7XG5cbiAgICBhbGxQYXJlbnRUeXBlLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50ID0gYWxsQ2hlY2tlZENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICByZXR1cm4geFtwYXJlbnRUeXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IG9iai52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYWxsQ2hpbGRyZW5PZlBhcmVudCA9IGFsbENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LnZhbHVlICE9PSAnQUxMJyAmJiB4W3BhcmVudFR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gb2JqLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgYWxsQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggIT09IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGFsbENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBpdCBoYXMgbm8gY2hpbGRyZW4gYW5kIGlzIGNoZWNrZWQsIGl0IHNob3VsZCBzdGF5IGNoZWNrZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUluZGV0ZXJtaW5hdGVTdGF0ZXMoYWxsUGFyZW50VHlwZSwgYWxsQ2hpbGRyZW4sIGFsbENoZWNrZWRDaGlsZHJlbik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWxsUGFyZW50c09yQ2hpbGRyZW4oYWxsSXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKGFsbEl0ZW0uaXNQYXJlbnRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxDaGlsZHJlblZhbHVlKGFsbEl0ZW0sIGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChhbGxJdGVtLmlzQ2hpbGRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRWYWx1ZShhbGxJdGVtLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFsbENoaWxkcmVuVmFsdWUoaXRlbSwgYWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBjb25zdCBjaGlsZFR5cGUgPSBpdGVtLmlzUGFyZW50T2Y7XG4gICAgY29uc3QgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbiAmJiB0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGNoaWxkVHlwZSkgJiYgIXNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW1vdmUobnVsbCwgcG90ZW50aWFsQ2hpbGRyZW5bMF0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3RlbnRpYWxDaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC52YWx1ZSA9PT0gJ0FMTCcgJiYgIXguY2hlY2tlZCkge1xuICAgICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeC5jaGVja2VkICYmICFzZWxlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB4KTtcbiAgICAgICAgfVxuICAgICAgICB4LmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBbGxQYXJlbnRWYWx1ZShpdGVtLCBhY3Rpb24pIHtcbiAgICBjb25zdCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGNvbnN0IHBhcmVudFR5cGUgPSBpdGVtLmlzQ2hpbGRPZjtcbiAgICBjb25zdCBwb3RlbnRpYWxQYXJlbnRzID0gdGhpcy5nZXRBbGxPZlR5cGUocGFyZW50VHlwZSk7XG4gICAgcG90ZW50aWFsUGFyZW50cy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoIXguY2hlY2tlZCkge1xuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJbmRldGVybWluYXRlU3RhdGVzKGFsbFBhcmVudFR5cGUsIGFsbENoaWxkcmVuLCBhbGxDaGVja2VkQ2hpbGRyZW4pIHtcbiAgICBjb25zdCBhbGxDaGVja2VkT3JJbmRldGVybWluYXRlUGFyZW50cyA9IGFsbFBhcmVudFR5cGUuZmlsdGVyKCh4KSA9PiAoISF4LmNoZWNrZWQgfHwgISF4LmluZGV0ZXJtaW5hdGUpICYmIHgudmFsdWUgIT09ICdBTEwnKTtcbiAgICBjb25zdCBpc1BhcmVudEluZGV0ZXJtaW5hdGUgPSAhIWFsbFBhcmVudFR5cGVbMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZVBhcmVudHMubGVuZ3RoID4gMDtcbiAgICBjb25zdCBpc0NoaWxkSW5kZXRlcm1pbmF0ZSA9ICEhYWxsQ2hpbGRyZW5bMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZENoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUoYWxsUGFyZW50VHlwZSwgaXNQYXJlbnRJbmRldGVybWluYXRlKTtcbiAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxDaGlsZHJlbiwgaXNDaGlsZEluZGV0ZXJtaW5hdGUpO1xuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5WYWx1ZShwYXJlbnQsIGFjdGlvbikge1xuICAgIGNvbnN0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgY29uc3QgY2hpbGRUeXBlID0gcGFyZW50LmlzUGFyZW50T2Y7XG4gICAgY29uc3QgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIHBvdGVudGlhbENoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoeFtwYXJlbnQudHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBwYXJlbnQudmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHguY2hlY2tlZCAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoY2hpbGRUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZCh4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSh4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeC5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50VmFsdWUoY2hpbGQsIGFjdGlvbikge1xuICAgIGNvbnN0IGFsbFBhcmVudFR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZC5pc0NoaWxkT2YpO1xuICAgIGlmIChhbGxQYXJlbnRUeXBlWzBdLmNoZWNrZWQgJiYgYWN0aW9uICE9PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChhbGxQYXJlbnRUeXBlWzBdKTtcbiAgICB9XG4gIH1cblxuICBhZGRJbmRpdmlkdWFsQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBsZXQgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gZmFsc2U7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHguaXNDaGlsZE9mKSB7XG4gICAgICAgIC8vIG9ubHkgYWRkIGNoaWxkcmVuIGlmIHRoZWlyIHBhcmVudHMgYXJlIG5vdCBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgIHhbeC5pc0NoaWxkT2ZdLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlW3guaXNDaGlsZE9mXS5maWx0ZXIoKHApID0+IHAgPT09IHBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmFsdWVbeC50eXBlXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPT09IHgudmFsdWUpLmxlbmd0aCA9PT0gMCAmJiAhcGFyZW50QWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuYWRkKHgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlKG1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBtb2RlbCB8fCB7fTtcbiAgICBpZiAoIXRoaXMudHlwZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlT2JqKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gdHlwZU9iai52YWx1ZTtcbiAgICAgIGlmICh0aGlzLnZhbHVlW3R5cGVdKSB7XG4gICAgICAgIGxldCBpbmRldGVybWluYXRlSXNTZXQgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudXBkYXRlQWxsSXRlbVN0YXRlKHR5cGUpO1xuICAgICAgICBjb25zdCBvcHRpb25zQnlUeXBlID0gb3B0aW9ucy5hbGxPZlR5cGU7XG4gICAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gb3B0aW9ucy5hbGxPZlR5cGVTZWxlY3RlZDtcbiAgICAgICAgdGhpcy52YWx1ZVt0eXBlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCAmJiAhaW5kZXRlcm1pbmF0ZUlzU2V0KSB7XG4gICAgICAgICAgICBpbmRldGVybWluYXRlSXNTZXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUob3B0aW9uc0J5VHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc0J5VHlwZS5maWx0ZXIoKHgpID0+IHgudmFsdWUgPT09IGl0ZW0pWzBdO1xuICAgICAgICAgIHZhbHVlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghYWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKHZhbHVlLCAnYWRkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiB2YWx1ZS5pc1BhcmVudE9mKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVmFsdWUodmFsdWUsICdzZWxlY3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZU9iai5pc0NoaWxkT2YpIHtcbiAgICAgICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4odHJ1ZSwgeyB2YWx1ZTogdHlwZSwgaXNDaGlsZE9mOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhbGxJdGVtc1NlbGVjdGVkKG9wdGlvbnNCeVR5cGUsIHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVt0eXBlXS5sZW5ndGggPT09IG9wdGlvbnNCeVR5cGUubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZShtb2RlbCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=