/**
 * @fileoverview added by tsickle
 * Generated from: elements/multi-picker/MultiPicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBRy9CLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7O0FBRUQsbUJBSUM7OztJQUhDLG9CQUFLOztJQUNMLHFCQUFNOztJQUNOLHFCQUFNOztBQUdSO0lBcUZFLGdDQUFtQixPQUFtQixFQUFTLE1BQXdCO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQTNDdkUsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFJdEIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFrQjdDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFD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OztJQUNyQix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsaURBQXlCOztJQUN6QixvREFBNEI7O0lBRTVCLHdDQUFZOztJQUNaLDBDQUFtQjs7SUFFbkIsdUNBQVc7O0lBQ1gsK0NBQW1DOztJQUNuQyxnREFBb0M7O0lBRXhCLHlDQUEwQjs7SUFBRSx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENISVBTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b011bHRpUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuaW50ZXJmYWNlIEl0ZW0ge1xuICB0eXBlO1xuICBsYWJlbDtcbiAgdmFsdWU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ211bHRpLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y2hpcFxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKF9pdGVtcyB8IGFzeW5jIHwgc2xpY2U6IDA6Y2hpcHNDb3VudClcIlxuICAgICAgW3R5cGVdPVwiaXRlbS50eXBlXCJcbiAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtID09IHNlbGVjdGVkXCJcbiAgICAgIChyZW1vdmUpPVwicmVtb3ZlRnJvbURpc3BsYXkoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCJcbiAgICA+XG4gICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgPC9jaGlwPlxuICAgIDxkaXYgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiBjaGlwc0NvdW50XCI+XG4gICAgICA8dWwgY2xhc3M9XCJzdW1tYXJ5XCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdHlwZSBvZiBub3RTaG93blwiPisge3sgdHlwZS5jb3VudCB9fSB7eyBsYWJlbHMubW9yZSB9fSB7eyB0eXBlLnR5cGUgfX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpcC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAoc2VsZWN0KT1cImNsaWNrT3B0aW9uKCRldmVudClcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICA+XG4gICAgICA8L25vdm8tcGlja2VyPlxuICAgIDwvZGl2PlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiIFtjbGFzcy5oYXMtdmFsdWVdPVwiaXRlbXMubGVuZ3RoXCI+PC9pPlxuICAgIDxsYWJlbCBjbGFzcz1cImNsZWFyLWFsbFwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPnt7IGxhYmVscy5jbGVhckFsbCB9fSA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT48L2xhYmVsPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy53aXRoLXZhbHVlXSc6ICdpdGVtcy5sZW5ndGggPiAwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b011bHRpUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHNvdXJjZTogeyBvcHRpb25zOiBbXTsgcmVzdWx0c1RlbXBsYXRlOyBzZWxlY3RBbGxPcHRpb246IGJvb2xlYW47IGNoaXBzQ291bnQ7IHN0cmljdFJlbGF0aW9uc2hpcCB9O1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogYW55ID0gJyc7XG4gIEBJbnB1dCgpXG4gIHR5cGVzOiB7IHZhbHVlOyBzaW5ndWxhcjsgcGx1cmFsOyBpc1BhcmVudE9mOyBpc0NoaWxkT2YgfVtdO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHNlbGVjdGVkSXRlbXMpIHtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBzZWxlY3RlZEl0ZW1zW3gudmFsdWVdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0ge307XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh0aGlzLl92YWx1ZVt4LnZhbHVlXSA9IFtdKSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHNlbGVjdGVkSXRlbXMpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIGl0ZW1zOiBJdGVtW10gPSBbXTtcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3Q8SXRlbVtdPigxKTtcbiAgb3B0aW9uczogYW55O1xuICBfb3B0aW9uczogYW55O1xuICBzZWxlY3RlZDogYW55ID0gbnVsbDtcbiAgY29uZmlnOiBhbnkgPSB7fTtcbiAgY2hpcHNDb3VudDogbnVtYmVyO1xuICBzZWxlY3RBbGxPcHRpb246IGJvb2xlYW47XG4gIHN0cmljdFJlbGF0aW9uc2hpcDogYm9vbGVhbjtcbiAgLy8gcHJpdmF0ZSBkYXRhIG1vZGVsXG4gIF92YWx1ZSA9IHt9O1xuICBub3RTaG93bjogYW55ID0ge307XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IDQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbiA9IHRoaXMuc291cmNlLnNlbGVjdEFsbE9wdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSB0aGlzLnNvdXJjZS5jaGlwc0NvdW50IHx8IDQ7XG4gICAgdGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgPSB0aGlzLnNvdXJjZS5zdHJpY3RSZWxhdGlvbnNoaXAgfHwgZmFsc2U7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB0aGlzLm1vZGlmeUFsbE9mVHlwZSh0eXBlLnZhbHVlLCAndW5zZWxlY3QnKSk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUobnVsbCk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpc3BsYXkoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLnJlbW92ZSh0cnVlLCBpdGVtKTtcbiAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZmFsc2UsIGl0ZW0pO1xuICB9XG5cbiAgc2V0dXBPcHRpb25zKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc291cmNlLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZE9wdGlvbiA9IHRoaXMuc2V0dXBPcHRpb25zQnlUeXBlKG9wdGlvbik7XG4gICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChmb3JtYXR0ZWRPcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc291cmNlLm9wdGlvbnMgPSB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgc2V0dXBPcHRpb25zQnlUeXBlKHNlY3Rpb24pIHtcbiAgICBsZXQgZm9ybWF0dGVkU2VjdGlvbjogYW55ID0ge1xuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgbGFiZWw6IHNlY3Rpb24ubGFiZWwgfHwgc2VjdGlvbi50eXBlLFxuICAgIH07XG4gICAgZm9ybWF0dGVkU2VjdGlvbi5kYXRhID0gc2VjdGlvbi5kYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0T3B0aW9uKHNlY3Rpb24sIGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgbGV0IHNlbGVjdEFsbCA9IHRoaXMuY3JlYXRlU2VsZWN0QWxsT3B0aW9uKHNlY3Rpb24pO1xuICAgICAgZm9ybWF0dGVkU2VjdGlvbi5kYXRhLnNwbGljZSgwLCAwLCBzZWxlY3RBbGwpO1xuICAgIH1cbiAgICBmb3JtYXR0ZWRTZWN0aW9uLm9yaWdpbmFsRGF0YSA9IGZvcm1hdHRlZFNlY3Rpb24uZGF0YS5zbGljZSgpO1xuICAgIHJldHVybiBmb3JtYXR0ZWRTZWN0aW9uO1xuICB9XG5cbiAgZm9ybWF0T3B0aW9uKHNlY3Rpb24sIGl0ZW0pIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdmFsdWU6IHNlY3Rpb24uZmllbGQgPyBpdGVtW3NlY3Rpb24uZmllbGRdIDogaXRlbS52YWx1ZSB8fCBpdGVtLFxuICAgICAgbGFiZWw6IHNlY3Rpb24uZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZShzZWN0aW9uLmZvcm1hdCwgaXRlbSkgOiBpdGVtLmxhYmVsIHx8IFN0cmluZyhpdGVtLnZhbHVlIHx8IGl0ZW0pLFxuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgY2hlY2tlZDogdW5kZWZpbmVkLFxuICAgICAgaXNQYXJlbnRPZjogc2VjdGlvbi5pc1BhcmVudE9mLFxuICAgICAgaXNDaGlsZE9mOiBzZWN0aW9uLmlzQ2hpbGRPZixcbiAgICB9O1xuICAgIGlmIChvYmouaXNDaGlsZE9mKSB7XG4gICAgICBvYmpbc2VjdGlvbi5pc0NoaWxkT2ZdID0gaXRlbVtzZWN0aW9uLmlzQ2hpbGRPZl07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBjcmVhdGVTZWxlY3RBbGxPcHRpb24oc2VjdGlvbikge1xuICAgIGxldCBzZWxlY3RBbGwgPSB7XG4gICAgICB2YWx1ZTogJ0FMTCcsXG4gICAgICBsYWJlbDogYEFsbCAke3NlY3Rpb24udHlwZX1gLFxuICAgICAgdHlwZTogc2VjdGlvbi50eXBlLFxuICAgICAgY2hlY2tlZDogdGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCAmJiB0aGlzLm1vZGVsLmluZGV4T2YoJ0FMTCcpICE9PSAtMSxcbiAgICAgIGlzUGFyZW50T2Y6IHNlY3Rpb24uaXNQYXJlbnRPZixcbiAgICAgIGlzQ2hpbGRPZjogc2VjdGlvbi5pc0NoaWxkT2YsXG4gICAgfTtcbiAgICBpZiAoc2VjdGlvbi5pc0NoaWxkT2YpIHtcbiAgICAgIGxldCBhbGxQYXJlbnRzID0gc2VjdGlvbi5kYXRhLnJlZHVjZSgoYWNjdW0sIG5leHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY3VtLmNvbmNhdChuZXh0W3NlY3Rpb24uaXNDaGlsZE9mXSk7XG4gICAgICB9LCBbXSk7XG4gICAgICBzZWxlY3RBbGxbc2VjdGlvbi5pc0NoaWxkT2ZdID0gYWxsUGFyZW50cztcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdEFsbDtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXRlbTtcbiAgfVxuXG4gIG9uRm9jdXMoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGUpO1xuICB9XG5cbiAgY2xpY2tPcHRpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgIShldmVudCBpbnN0YW5jZW9mIEV2ZW50KSkge1xuICAgICAgaWYgKGV2ZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihldmVudC5jaGVja2VkLCBldmVudCk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgbGV0IGlucHV0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1waWNrZXIgPiBpbnB1dCcpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnZhbHVlID09PSAnQUxMJykge1xuICAgICAgdGhpcy5tb2RpZnlBbGxPZlR5cGUoZXZlbnQudHlwZSwgJ3NlbGVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhldmVudCwgJ2FkZCcpO1xuICAgICAgdGhpcy52YWx1ZVtldmVudC50eXBlXS5wdXNoKGV2ZW50LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlQWxsSXRlbVN0YXRlKGV2ZW50LnR5cGUpO1xuICAgICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQYXJlbnRPckNoaWxkcmVuKGV2ZW50LCAnc2VsZWN0Jyk7XG4gICAgdGhpcy5zZWxlY3QobnVsbCwgZXZlbnQpO1xuICB9XG5cbiAgdXBkYXRlQWxsSXRlbVN0YXRlKHR5cGUpIHtcbiAgICBsZXQgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgbGV0IGFsbE9mVHlwZVNlbGVjdGVkID0gdGhpcy5hbGxJdGVtc1NlbGVjdGVkKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgaWYgKGFsbE9mVHlwZVNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4geyBhbGxPZlR5cGUsIGFsbE9mVHlwZVNlbGVjdGVkIH07XG4gIH1cblxuICBzZXRJbmRldGVybWluYXRlU3RhdGUoYWxsT2ZUeXBlLCBzdGF0dXMpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhbGxJdGVtID0gYWxsT2ZUeXBlWzBdO1xuICAgIGFsbEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHN0YXR1cztcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlJdGVtcyhpdGVtLCBhY3Rpb24pIHtcbiAgICBsZXQgYWRkaW5nID0gYWN0aW9uID09PSAnYWRkJztcbiAgICBpZiAoYWRkaW5nKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkgPiAtMSkge1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlUZXh0KHRoaXMuaXRlbXMpO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5VGV4dChpdGVtcykge1xuICAgIHRoaXMubm90U2hvd24gPSBbXTtcbiAgICBsZXQgbm90U2hvd24gPSBpdGVtcy5zbGljZSh0aGlzLmNoaXBzQ291bnQpO1xuICAgIGlmIChub3RTaG93bi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IGNvdW50O1xuICAgICAgICBsZXQgc2VsZWN0ZWRPZlR5cGUgPSBub3RTaG93bi5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZS52YWx1ZSk7XG4gICAgICAgIGlmIChzZWxlY3RlZE9mVHlwZS5sZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRPZlR5cGVbMF0udmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgICAgY291bnQgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlLnZhbHVlKS5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ID0gc2VsZWN0ZWRPZlR5cGUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkaXNwbGF5VHlwZSA9IGNvdW50ID09PSAxID8gdHlwZS5zaW5ndWxhciA6IHR5cGUucGx1cmFsIHx8IHR5cGUudmFsdWU7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICB0aGlzLm5vdFNob3duLnB1c2goeyB0eXBlOiBkaXNwbGF5VHlwZSwgY291bnQ6IGNvdW50IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZXZlbnQsIGl0ZW0pIHtcbiAgICBsZXQgdHJpZ2dlcmVkQnlFdmVudDtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRyaWdnZXJlZEJ5RXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgaXRlbVRvUmVtb3ZlID0gaXRlbTtcbiAgICBpZiAoaXRlbVRvUmVtb3ZlLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgdHJpZ2dlcmVkQnlFdmVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5tb2RpZnlBbGxPZlR5cGUoaXRlbVRvUmVtb3ZlLnR5cGUsICd1bnNlbGVjdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbGxPZlR5cGVTZWxlY3RlZChpdGVtVG9SZW1vdmUudHlwZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoaXRlbVRvUmVtb3ZlKTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVJdGVtKGl0ZW0sIHRyaWdnZXJlZEJ5RXZlbnQpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtLCB0cmlnZ2VyZWRCeUV2ZW50PzogYW55KSB7XG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMucmVtb3ZlVmFsdWUoaXRlbSk7XG4gICAgaWYgKGl0ZW0udmFsdWUgIT09ICdBTEwnKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oaXRlbSwgJ3Vuc2VsZWN0Jyk7XG4gICAgfVxuICAgIGlmICh0cmlnZ2VyZWRCeUV2ZW50KSB7XG4gICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZmFsc2UsIGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVZhbHVlKGl0ZW0pIHtcbiAgICBsZXQgdXBkYXRlZFZhbHVlcyA9IHRoaXMudmFsdWVbaXRlbS50eXBlXS5maWx0ZXIoKHgpID0+IHggIT09IGl0ZW0udmFsdWUpO1xuICAgIHRoaXMudmFsdWVbaXRlbS50eXBlXSA9IHVwZGF0ZWRWYWx1ZXM7XG4gICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhpdGVtLCAncmVtb3ZlJyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQkFDS1NQQUNFKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDAgJiYgdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0KGV2ZW50LCB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxsT2ZUeXBlU2VsZWN0ZWQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlICYmIHgudmFsdWUgPT09ICdBTEwnKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbW9kaWZ5QWxsT2ZUeXBlKHR5cGUsIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBhbGxPZlR5cGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgaXRlbS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlICE9PSB0eXBlKV07XG4gICAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgICAgdGhpcy52YWx1ZVt0eXBlXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsUGFyZW50c09yQ2hpbGRyZW4oYWxsT2ZUeXBlWzBdLCBhY3Rpb24pO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICB9XG5cbiAgdHJpZ2dlclZhbHVlVXBkYXRlKCkge1xuICAgIGxldCB1cGRhdGVkT2JqZWN0ID0ge307XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodXBkYXRlZE9iamVjdFt4LnZhbHVlXSA9IHRoaXMudmFsdWVbeC52YWx1ZV0pKTtcbiAgICB0aGlzLnZhbHVlID0gdXBkYXRlZE9iamVjdDtcbiAgfVxuXG4gIHNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFsbE9mVHlwZVswXS5jaGVja2VkID0gdHJ1ZTtcbiAgICBsZXQgdmFsdWVzID0gYWxsT2ZUeXBlLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgLy8gcmVtb3ZlICdBTEwnIHZhbHVlXG4gICAgdmFsdWVzLnNwbGljZSgwLCAxKTtcbiAgICB0aGlzLnZhbHVlW3R5cGVdID0gdmFsdWVzO1xuICAgIGxldCB1cGRhdGVkSXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoeCkgPT4geC50eXBlICE9PSB0eXBlKTtcbiAgICB0aGlzLml0ZW1zID0gdXBkYXRlZEl0ZW1zO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGFsbE9mVHlwZVswXSwgJ2FkZCcpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoaXRlbSkge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBpdGVtLnR5cGU7XG4gICAgbGV0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGxldCBhbGxJdGVtID0gYWxsT2ZUeXBlWzBdO1xuICAgIHRoaXMucmVtb3ZlSXRlbShhbGxJdGVtKTtcbiAgICBhbGxJdGVtLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIGxldCBzZWxlY3RlZEl0ZW1zID0gYWxsT2ZUeXBlLmZpbHRlcigoaSkgPT4gaS5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMsIC4uLnNlbGVjdGVkSXRlbXNdO1xuICAgIGxldCB2YWx1ZXMgPSBzZWxlY3RlZEl0ZW1zLm1hcCgoaSkgPT4ge1xuICAgICAgcmV0dXJuIGkudmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZVt0eXBlXSA9IFsuLi52YWx1ZXNdO1xuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnRzIGRvZXNuJ3QgY29udGFpbiB0aGUgdGFyZ2V0IGVsZW1lbnQsIGl0IGlzIGFuIG91dHNpZGUgY2xpY2tcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxPZlR5cGUodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlKVswXS5vcmlnaW5hbERhdGE7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRPckNoaWxkcmVuKGl0ZW0sIGFjdGlvbikge1xuICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtLmlzUGFyZW50T2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5WYWx1ZShpdGVtLCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pc0NoaWxkT2YgJiYgdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50VmFsdWUoaXRlbSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKHNlbGVjdGluZywgaXRlbUNoYW5nZWQpIHtcbiAgICBpZiAoIWl0ZW1DaGFuZ2VkLmlzQ2hpbGRPZiAmJiAhaXRlbUNoYW5nZWQuaXNQYXJlbnRPZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcGFyZW50ID0gdGhpcy50eXBlcy5maWx0ZXIoKHgpID0+ICEheC5pc1BhcmVudE9mKVswXTtcbiAgICBsZXQgcGFyZW50VHlwZSA9IHBhcmVudC52YWx1ZTtcbiAgICBsZXQgYWxsUGFyZW50VHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHBhcmVudFR5cGUpO1xuICAgIGxldCBjaGlsZFR5cGUgPSBhbGxQYXJlbnRUeXBlWzBdLmlzUGFyZW50T2Y7XG4gICAgbGV0IGFsbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBsZXQgYWxsQ2hlY2tlZENoaWxkcmVuID0gYWxsQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiAhIXguY2hlY2tlZCk7XG5cbiAgICBhbGxQYXJlbnRUeXBlLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCA9IGFsbENoZWNrZWRDaGlsZHJlbi5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIHhbcGFyZW50VHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBvYmoudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhbGxDaGlsZHJlbk9mUGFyZW50ID0gYWxsQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgudmFsdWUgIT09ICdBTEwnICYmIHhbcGFyZW50VHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBvYmoudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBhbGxDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCAhPT0gc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIG9iai5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUob2JqKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbmRpdmlkdWFsQ2hpbGRyZW4oc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbUNoYW5nZWQudHlwZSAhPT0gcGFyZW50VHlwZSkge1xuICAgICAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIG9iai5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUob2JqKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbmRpdmlkdWFsQ2hpbGRyZW4oc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoYWxsQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIGl0IGhhcyBubyBjaGlsZHJlbiBhbmQgaXMgY2hlY2tlZCwgaXQgc2hvdWxkIHN0YXkgY2hlY2tlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbUNoYW5nZWQudHlwZSAhPT0gcGFyZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgb2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlSW5kZXRlcm1pbmF0ZVN0YXRlcyhhbGxQYXJlbnRUeXBlLCBhbGxDaGlsZHJlbiwgYWxsQ2hlY2tlZENoaWxkcmVuKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbGxQYXJlbnRzT3JDaGlsZHJlbihhbGxJdGVtLCBhY3Rpb24pIHtcbiAgICBpZiAoYWxsSXRlbS5pc1BhcmVudE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbENoaWxkcmVuVmFsdWUoYWxsSXRlbSwgYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGFsbEl0ZW0uaXNDaGlsZE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbFBhcmVudFZhbHVlKGFsbEl0ZW0sIGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWxsQ2hpbGRyZW5WYWx1ZShpdGVtLCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgY2hpbGRUeXBlID0gaXRlbS5pc1BhcmVudE9mO1xuICAgIGxldCBwb3RlbnRpYWxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uICYmIHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoY2hpbGRUeXBlKSAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnJlbW92ZShudWxsLCBwb3RlbnRpYWxDaGlsZHJlblswXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvdGVudGlhbENoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LnZhbHVlID09PSAnQUxMJyAmJiAheC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgICAgICB4LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHguaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh4LmNoZWNrZWQgJiYgIXNlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHgpO1xuICAgICAgICB9XG4gICAgICAgIHguY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUFsbFBhcmVudFZhbHVlKGl0ZW0sIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBwYXJlbnRUeXBlID0gaXRlbS5pc0NoaWxkT2Y7XG4gICAgbGV0IHBvdGVudGlhbFBhcmVudHMgPSB0aGlzLmdldEFsbE9mVHlwZShwYXJlbnRUeXBlKTtcbiAgICBwb3RlbnRpYWxQYXJlbnRzLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICgheC5jaGVja2VkKSB7XG4gICAgICAgIHguaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUluZGV0ZXJtaW5hdGVTdGF0ZXMoYWxsUGFyZW50VHlwZSwgYWxsQ2hpbGRyZW4sIGFsbENoZWNrZWRDaGlsZHJlbikge1xuICAgIGxldCBhbGxDaGVja2VkT3JJbmRldGVybWluYXRlUGFyZW50cyA9IGFsbFBhcmVudFR5cGUuZmlsdGVyKCh4KSA9PiAoISF4LmNoZWNrZWQgfHwgISF4LmluZGV0ZXJtaW5hdGUpICYmIHgudmFsdWUgIT09ICdBTEwnKTtcbiAgICBsZXQgaXNQYXJlbnRJbmRldGVybWluYXRlID0gISFhbGxQYXJlbnRUeXBlWzBdLmNoZWNrZWQgPyBmYWxzZSA6IGFsbENoZWNrZWRPckluZGV0ZXJtaW5hdGVQYXJlbnRzLmxlbmd0aCA+IDA7XG4gICAgbGV0IGlzQ2hpbGRJbmRldGVybWluYXRlID0gISFhbGxDaGlsZHJlblswXS5jaGVja2VkID8gZmFsc2UgOiBhbGxDaGVja2VkQ2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxQYXJlbnRUeXBlLCBpc1BhcmVudEluZGV0ZXJtaW5hdGUpO1xuICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbENoaWxkcmVuLCBpc0NoaWxkSW5kZXRlcm1pbmF0ZSk7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlblZhbHVlKHBhcmVudCwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IGNoaWxkVHlwZSA9IHBhcmVudC5pc1BhcmVudE9mO1xuICAgIGxldCBwb3RlbnRpYWxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgcG90ZW50aWFsQ2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh4W3BhcmVudC50eXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IHBhcmVudC52YWx1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoeC5jaGVja2VkICYmICFzZWxlY3RpbmcpIHtcbiAgICAgICAgICB4LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5hbGxPZlR5cGVTZWxlY3RlZChjaGlsZFR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKHgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4LmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQYXJlbnRWYWx1ZShjaGlsZCwgYWN0aW9uKSB7XG4gICAgbGV0IGFsbFBhcmVudFR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZC5pc0NoaWxkT2YpO1xuICAgIGlmIChhbGxQYXJlbnRUeXBlWzBdLmNoZWNrZWQgJiYgYWN0aW9uICE9PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChhbGxQYXJlbnRUeXBlWzBdKTtcbiAgICB9XG4gIH1cblxuICBhZGRJbmRpdmlkdWFsQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBsZXQgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gZmFsc2U7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHguaXNDaGlsZE9mKSB7XG4gICAgICAgIC8vIG9ubHkgYWRkIGNoaWxkcmVuIGlmIHRoZWlyIHBhcmVudHMgYXJlIG5vdCBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgIHhbeC5pc0NoaWxkT2ZdLmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlW3guaXNDaGlsZE9mXS5maWx0ZXIoKHApID0+IHAgPT09IHBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFyZW50QWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmFsdWVbeC50eXBlXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPT09IHgudmFsdWUpLmxlbmd0aCA9PT0gMCAmJiAhcGFyZW50QWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuYWRkKHgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlKG1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBtb2RlbCB8fCB7fTtcbiAgICBpZiAoIXRoaXMudHlwZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlT2JqKSA9PiB7XG4gICAgICBsZXQgdHlwZSA9IHR5cGVPYmoudmFsdWU7XG4gICAgICBpZiAodGhpcy52YWx1ZVt0eXBlXSkge1xuICAgICAgICBsZXQgaW5kZXRlcm1pbmF0ZUlzU2V0ID0gZmFsc2U7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy51cGRhdGVBbGxJdGVtU3RhdGUodHlwZSk7XG4gICAgICAgIGxldCBvcHRpb25zQnlUeXBlID0gb3B0aW9ucy5hbGxPZlR5cGU7XG4gICAgICAgIGxldCBhbGxTZWxlY3RlZCA9IG9wdGlvbnMuYWxsT2ZUeXBlU2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMudmFsdWVbdHlwZV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmICghYWxsU2VsZWN0ZWQgJiYgIWluZGV0ZXJtaW5hdGVJc1NldCkge1xuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZUlzU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKG9wdGlvbnNCeVR5cGUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zQnlUeXBlLmZpbHRlcigoeCkgPT4geC52YWx1ZSA9PT0gaXRlbSlbMF07XG4gICAgICAgICAgdmFsdWUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXModmFsdWUsICdhZGQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIHZhbHVlLmlzUGFyZW50T2YpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5WYWx1ZSh2YWx1ZSwgJ3NlbGVjdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0eXBlT2JqLmlzQ2hpbGRPZikge1xuICAgICAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbih0cnVlLCB7IHZhbHVlOiB0eXBlLCBpc0NoaWxkT2Y6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFsbEl0ZW1zU2VsZWN0ZWQob3B0aW9uc0J5VHlwZSwgdHlwZSkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlW3R5cGVdLmxlbmd0aCA9PT0gb3B0aW9uc0J5VHlwZS5sZW5ndGggLSAxO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKG1vZGVsKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==