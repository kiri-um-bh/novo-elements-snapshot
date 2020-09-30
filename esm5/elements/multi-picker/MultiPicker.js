/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.value = this.setInitialValue(null);
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
                    template: "\n        <chip\n            *ngFor=\"let item of _items | async | slice:0:chipsCount\"\n            [type]=\"item.type\"\n            [class.selected]=\"item == selected\"\n            (remove)=\"removeFromDisplay($event, item)\"\n            (select)=\"select($event, item)\">\n            {{ item.label }}\n        </chip>\n        <div *ngIf=\"items.length > chipsCount\">\n            <ul class=\"summary\">\n                <li *ngFor=\"let type of notShown\">+ {{type.count}} {{ labels.more }} {{type.type}}</li>\n            </ul>\n        </div>\n        <div class=\"chip-input-container\">\n            <novo-picker\n                clearValueOnSelect=\"true\"\n                [config]=\"source\"\n                [placeholder]=\"placeholder\"\n                (select)=\"clickOption($event)\"\n                (keydown)=\"onKeyDown($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onTouched($event)\"\n                [overrideElement]=\"element\">\n            </novo-picker>\n        </div>\n        <i class=\"bhi-search\" [class.has-value]=\"items.length\"></i>\n        <label class=\"clear-all\" *ngIf=\"items.length\" (click)=\"clearValue()\">{{ labels.clearAll }} <i class=\"bhi-times\"></i></label>\n   ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUVyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFHL0Isb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDO0lBQ3JELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQW1GRSxnQ0FBbUIsT0FBbUIsRUFBUyxNQUF3QjtRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUEzQ3ZFLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBSXRCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBa0I3QyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUc5QixhQUFR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aURBQXlCOztJQUN6QixvREFBNEI7O0lBRTVCLHdDQUFpQjs7SUFDakIsMENBQW1COztJQUVuQix1Q0FBVzs7SUFDWCwrQ0FBbUM7O0lBQ25DLGdEQUFvQzs7SUFFeEIseUNBQTBCOztJQUFFLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdWx0aS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtDSElQU19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGlwXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luYyB8IHNsaWNlOjA6Y2hpcHNDb3VudFwiXG4gICAgICAgICAgICBbdHlwZV09XCJpdGVtLnR5cGVcIlxuICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmVGcm9tRGlzcGxheSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIj5cbiAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgPC9jaGlwPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gY2hpcHNDb3VudFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdHlwZSBvZiBub3RTaG93blwiPisge3t0eXBlLmNvdW50fX0ge3sgbGFiZWxzLm1vcmUgfX0ge3t0eXBlLnR5cGV9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoaXAtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAoc2VsZWN0KT1cImNsaWNrT3B0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCI+XG4gICAgICAgICAgICA8L25vdm8tcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgW2NsYXNzLmhhcy12YWx1ZV09XCJpdGVtcy5sZW5ndGhcIj48L2k+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNsZWFyLWFsbFwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPnt7IGxhYmVscy5jbGVhckFsbCB9fSA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT48L2xhYmVsPlxuICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9NdWx0aVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzb3VyY2U6IGFueTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IGFueSA9ICcnO1xuICBASW5wdXQoKVxuICB0eXBlczogYW55O1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHNlbGVjdGVkSXRlbXMpIHtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBzZWxlY3RlZEl0ZW1zW3gudmFsdWVdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0ge307XG4gICAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh0aGlzLl92YWx1ZVt4LnZhbHVlXSA9IFtdKSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHNlbGVjdGVkSXRlbXMpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIGl0ZW1zOiBhbnkgPSBbXTtcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIG9wdGlvbnM6IGFueTtcbiAgX29wdGlvbnM6IGFueTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIGNoaXBzQ291bnQ6IG51bWJlcjtcbiAgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuO1xuICBzdHJpY3RSZWxhdGlvbnNoaXA6IGJvb2xlYW47XG4gIC8vIHByaXZhdGUgZGF0YSBtb2RlbFxuICBfdmFsdWU6IGFueSA9IHt9O1xuICBub3RTaG93bjogYW55ID0ge307XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuY2hpcHNDb3VudCA9IDQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbiA9IHRoaXMuc291cmNlLnNlbGVjdEFsbE9wdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSB0aGlzLnNvdXJjZS5jaGlwc0NvdW50IHx8IDQ7XG4gICAgdGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgPSB0aGlzLnNvdXJjZS5zdHJpY3RSZWxhdGlvbnNoaXAgfHwgZmFsc2U7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB0aGlzLm1vZGlmeUFsbE9mVHlwZSh0eXBlLnZhbHVlLCAndW5zZWxlY3QnKSk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc2V0SW5pdGlhbFZhbHVlKG51bGwpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21EaXNwbGF5KGV2ZW50LCBpdGVtKSB7XG4gICAgdGhpcy5yZW1vdmUodHJ1ZSwgaXRlbSk7XG4gICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGZhbHNlLCBpdGVtKTtcbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNvdXJjZS5vcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRPcHRpb24gPSB0aGlzLnNldHVwT3B0aW9uc0J5VHlwZShvcHRpb24pO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2goZm9ybWF0dGVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZS5vcHRpb25zID0gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIHNldHVwT3B0aW9uc0J5VHlwZShzZWN0aW9uKSB7XG4gICAgbGV0IGZvcm1hdHRlZFNlY3Rpb246IGFueSA9IHtcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGxhYmVsOiBzZWN0aW9uLmxhYmVsIHx8IHNlY3Rpb24udHlwZSxcbiAgICB9O1xuICAgIGZvcm1hdHRlZFNlY3Rpb24uZGF0YSA9IHNlY3Rpb24uZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdE9wdGlvbihzZWN0aW9uLCBpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIGxldCBzZWxlY3RBbGwgPSB0aGlzLmNyZWF0ZVNlbGVjdEFsbE9wdGlvbihzZWN0aW9uKTtcbiAgICAgIGZvcm1hdHRlZFNlY3Rpb24uZGF0YS5zcGxpY2UoMCwgMCwgc2VsZWN0QWxsKTtcbiAgICB9XG4gICAgZm9ybWF0dGVkU2VjdGlvbi5vcmlnaW5hbERhdGEgPSBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEuc2xpY2UoKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkU2VjdGlvbjtcbiAgfVxuXG4gIGZvcm1hdE9wdGlvbihzZWN0aW9uLCBpdGVtKSB7XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHZhbHVlOiBzZWN0aW9uLmZpZWxkID8gaXRlbVtzZWN0aW9uLmZpZWxkXSA6IGl0ZW0udmFsdWUgfHwgaXRlbSxcbiAgICAgIGxhYmVsOiBzZWN0aW9uLmZvcm1hdCA/IEhlbHBlcnMuaW50ZXJwb2xhdGUoc2VjdGlvbi5mb3JtYXQsIGl0ZW0pIDogaXRlbS5sYWJlbCB8fCBTdHJpbmcoaXRlbS52YWx1ZSB8fCBpdGVtKSxcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGNoZWNrZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUGFyZW50T2Y6IHNlY3Rpb24uaXNQYXJlbnRPZixcbiAgICAgIGlzQ2hpbGRPZjogc2VjdGlvbi5pc0NoaWxkT2YsXG4gICAgfTtcbiAgICBpZiAob2JqLmlzQ2hpbGRPZikge1xuICAgICAgb2JqW3NlY3Rpb24uaXNDaGlsZE9mXSA9IGl0ZW1bc2VjdGlvbi5pc0NoaWxkT2ZdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgY3JlYXRlU2VsZWN0QWxsT3B0aW9uKHNlY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0QWxsID0ge1xuICAgICAgdmFsdWU6ICdBTEwnLFxuICAgICAgbGFiZWw6IGBBbGwgJHtzZWN0aW9uLnR5cGV9YCxcbiAgICAgIHR5cGU6IHNlY3Rpb24udHlwZSxcbiAgICAgIGNoZWNrZWQ6IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggJiYgdGhpcy5tb2RlbC5pbmRleE9mKCdBTEwnKSAhPT0gLTEsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKHNlY3Rpb24uaXNDaGlsZE9mKSB7XG4gICAgICBsZXQgYWxsUGFyZW50cyA9IHNlY3Rpb24uZGF0YS5yZWR1Y2UoKGFjY3VtLCBuZXh0KSA9PiB7XG4gICAgICAgIHJldHVybiBhY2N1bS5jb25jYXQobmV4dFtzZWN0aW9uLmlzQ2hpbGRPZl0pO1xuICAgICAgfSwgW10pO1xuICAgICAgc2VsZWN0QWxsW3NlY3Rpb24uaXNDaGlsZE9mXSA9IGFsbFBhcmVudHM7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RBbGw7XG4gIH1cblxuICBkZXNlbGVjdEFsbCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gIH1cblxuICBvbkZvY3VzKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMuZm9jdXMuZW1pdChlKTtcbiAgfVxuXG4gIGNsaWNrT3B0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmICEoZXZlbnQgaW5zdGFuY2VvZiBFdmVudCkpIHtcbiAgICAgIGlmIChldmVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShudWxsLCBldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZChldmVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oZXZlbnQuY2hlY2tlZCwgZXZlbnQpO1xuICAgICAgLy8gU2V0IGZvY3VzIG9uIHRoZSBwaWNrZXJcbiAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tcGlja2VyID4gaW5wdXQnKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZChldmVudCkge1xuICAgIGlmIChldmVudC52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgIHRoaXMubW9kaWZ5QWxsT2ZUeXBlKGV2ZW50LnR5cGUsICdzZWxlY3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoZXZlbnQsICdhZGQnKTtcbiAgICAgIHRoaXMudmFsdWVbZXZlbnQudHlwZV0ucHVzaChldmVudC52YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZUFsbEl0ZW1TdGF0ZShldmVudC50eXBlKTtcbiAgICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGFyZW50T3JDaGlsZHJlbihldmVudCwgJ3NlbGVjdCcpO1xuICAgIHRoaXMuc2VsZWN0KG51bGwsIGV2ZW50KTtcbiAgfVxuXG4gIHVwZGF0ZUFsbEl0ZW1TdGF0ZSh0eXBlKSB7XG4gICAgbGV0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGxldCBhbGxPZlR5cGVTZWxlY3RlZCA9IHRoaXMuYWxsSXRlbXNTZWxlY3RlZChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIGlmIChhbGxPZlR5cGVTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYWxsT2ZUeXBlLCBhbGxPZlR5cGVTZWxlY3RlZCB9O1xuICB9XG5cbiAgc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbE9mVHlwZSwgc3RhdHVzKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYWxsSXRlbSA9IGFsbE9mVHlwZVswXTtcbiAgICBhbGxJdGVtLmluZGV0ZXJtaW5hdGUgPSBzdGF0dXM7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5SXRlbXMoaXRlbSwgYWN0aW9uKSB7XG4gICAgbGV0IGFkZGluZyA9IGFjdGlvbiA9PT0gJ2FkZCc7XG4gICAgaWYgKGFkZGluZykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pID4gLTEpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VGV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVRleHQoaXRlbXMpIHtcbiAgICB0aGlzLm5vdFNob3duID0gW107XG4gICAgbGV0IG5vdFNob3duID0gaXRlbXMuc2xpY2UodGhpcy5jaGlwc0NvdW50KTtcbiAgICBpZiAobm90U2hvd24ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudDtcbiAgICAgICAgbGV0IHNlbGVjdGVkT2ZUeXBlID0gbm90U2hvd24uZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUudmFsdWUpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRPZlR5cGUubGVuZ3RoID09PSAxICYmIHNlbGVjdGVkT2ZUeXBlWzBdLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICAgIGNvdW50ID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZS52YWx1ZSkubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCA9IHNlbGVjdGVkT2ZUeXBlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlzcGxheVR5cGUgPSBjb3VudCA9PT0gMSA/IHR5cGUuc2luZ3VsYXIgOiB0eXBlLnBsdXJhbCB8fCB0eXBlLnZhbHVlO1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5ub3RTaG93bi5wdXNoKHsgdHlwZTogZGlzcGxheVR5cGUsIGNvdW50OiBjb3VudCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGV2ZW50LCBpdGVtKSB7XG4gICAgbGV0IHRyaWdnZXJlZEJ5RXZlbnQ7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0cmlnZ2VyZWRCeUV2ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IGl0ZW1Ub1JlbW92ZSA9IGl0ZW07XG4gICAgaWYgKGl0ZW1Ub1JlbW92ZS52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgIHRyaWdnZXJlZEJ5RXZlbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubW9kaWZ5QWxsT2ZUeXBlKGl0ZW1Ub1JlbW92ZS50eXBlLCAndW5zZWxlY3QnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoaXRlbVRvUmVtb3ZlLnR5cGUpKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGl0ZW1Ub1JlbW92ZSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlSXRlbShpdGVtLCB0cmlnZ2VyZWRCeUV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaXRlbSwgdHJpZ2dlcmVkQnlFdmVudD86IGFueSkge1xuICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnJlbW92ZVZhbHVlKGl0ZW0pO1xuICAgIGlmIChpdGVtLnZhbHVlICE9PSAnQUxMJykge1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRPckNoaWxkcmVuKGl0ZW0sICd1bnNlbGVjdCcpO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlcmVkQnlFdmVudCkge1xuICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGZhbHNlLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVWYWx1ZShpdGVtKSB7XG4gICAgbGV0IHVwZGF0ZWRWYWx1ZXMgPSB0aGlzLnZhbHVlW2l0ZW0udHlwZV0uZmlsdGVyKCh4KSA9PiB4ICE9PSBpdGVtLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlW2l0ZW0udHlwZV0gPSB1cGRhdGVkVmFsdWVzO1xuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoaXRlbSwgJ3JlbW92ZScpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09PSAwICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdChldmVudCwgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFsbE9mVHlwZVNlbGVjdGVkKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZSAmJiB4LnZhbHVlID09PSAnQUxMJykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG1vZGlmeUFsbE9mVHlwZSh0eXBlLCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgYWxsT2ZUeXBlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSAhPT0gdHlwZSldO1xuICAgICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFsbFBhcmVudHNPckNoaWxkcmVuKGFsbE9mVHlwZVswXSwgYWN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyVmFsdWVVcGRhdGUoKTtcbiAgfVxuXG4gIHRyaWdnZXJWYWx1ZVVwZGF0ZSgpIHtcbiAgICBsZXQgdXBkYXRlZE9iamVjdCA9IHt9O1xuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHVwZGF0ZWRPYmplY3RbeC52YWx1ZV0gPSB0aGlzLnZhbHVlW3gudmFsdWVdKSk7XG4gICAgdGhpcy52YWx1ZSA9IHVwZGF0ZWRPYmplY3Q7XG4gIH1cblxuICBzZWxlY3RBbGwoYWxsT2ZUeXBlLCB0eXBlKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbGxPZlR5cGVbMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgbGV0IHZhbHVlcyA9IGFsbE9mVHlwZS5tYXAoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgIH0pO1xuICAgIC8vIHJlbW92ZSAnQUxMJyB2YWx1ZVxuICAgIHZhbHVlcy5zcGxpY2UoMCwgMSk7XG4gICAgdGhpcy52YWx1ZVt0eXBlXSA9IHZhbHVlcztcbiAgICBsZXQgdXBkYXRlZEl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKHgpID0+IHgudHlwZSAhPT0gdHlwZSk7XG4gICAgdGhpcy5pdGVtcyA9IHVwZGF0ZWRJdGVtcztcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyhhbGxPZlR5cGVbMF0sICdhZGQnKTtcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGl0ZW0pIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0eXBlID0gaXRlbS50eXBlO1xuICAgIGxldCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBsZXQgYWxsSXRlbSA9IGFsbE9mVHlwZVswXTtcbiAgICB0aGlzLnJlbW92ZUl0ZW0oYWxsSXRlbSk7XG4gICAgYWxsSXRlbS5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICBsZXQgc2VsZWN0ZWRJdGVtcyA9IGFsbE9mVHlwZS5maWx0ZXIoKGkpID0+IGkuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCAuLi5zZWxlY3RlZEl0ZW1zXTtcbiAgICBsZXQgdmFsdWVzID0gc2VsZWN0ZWRJdGVtcy5tYXAoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMudmFsdWVbdHlwZV0gPSBbLi4udmFsdWVzXTtcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayhldmVudCkge1xuICAgIC8vIElmIHRoZSBlbGVtZW50cyBkb2Vzbid0IGNvbnRhaW4gdGhlIHRhcmdldCBlbGVtZW50LCBpdCBpcyBhbiBvdXRzaWRlIGNsaWNrXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxsT2ZUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5maWx0ZXIoKHgpID0+IHgudHlwZSA9PT0gdHlwZSlbMF0ub3JpZ2luYWxEYXRhO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50T3JDaGlsZHJlbihpdGVtLCBhY3Rpb24pIHtcbiAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgaXRlbS5pc1BhcmVudE9mKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVmFsdWUoaXRlbSwgYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uaXNDaGlsZE9mICYmIHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhcmVudFZhbHVlKGl0ZW0sIGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihzZWxlY3RpbmcsIGl0ZW1DaGFuZ2VkKSB7XG4gICAgaWYgKCFpdGVtQ2hhbmdlZC5pc0NoaWxkT2YgJiYgIWl0ZW1DaGFuZ2VkLmlzUGFyZW50T2YpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBhcmVudCA9IHRoaXMudHlwZXMuZmlsdGVyKCh4KSA9PiAhIXguaXNQYXJlbnRPZilbMF07XG4gICAgbGV0IHBhcmVudFR5cGUgPSBwYXJlbnQudmFsdWU7XG4gICAgbGV0IGFsbFBhcmVudFR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZShwYXJlbnRUeXBlKTtcbiAgICBsZXQgY2hpbGRUeXBlID0gYWxsUGFyZW50VHlwZVswXS5pc1BhcmVudE9mO1xuICAgIGxldCBhbGxDaGlsZHJlbiA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkVHlwZSk7XG4gICAgbGV0IGFsbENoZWNrZWRDaGlsZHJlbiA9IGFsbENoaWxkcmVuLmZpbHRlcigoeCkgPT4gISF4LmNoZWNrZWQpO1xuXG4gICAgYWxsUGFyZW50VHlwZS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmoudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQgPSBhbGxDaGVja2VkQ2hpbGRyZW4uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgIHJldHVybiB4W3BhcmVudFR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gb2JqLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzZWxlY3RpbmcpIHtcbiAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9iai5pbmRldGVybWluYXRlID0gc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA+IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYWxsQ2hpbGRyZW5PZlBhcmVudCA9IGFsbENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LnZhbHVlICE9PSAnQUxMJyAmJiB4W3BhcmVudFR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gb2JqLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKG9iai5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgYWxsQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggIT09IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgb2JqLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgICAgICBvYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5kaXZpZHVhbENoaWxkcmVuKHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGFsbENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBpdCBoYXMgbm8gY2hpbGRyZW4gYW5kIGlzIGNoZWNrZWQsIGl0IHNob3VsZCBzdGF5IGNoZWNrZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW1DaGFuZ2VkLnR5cGUgIT09IHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKG51bGwsIG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUluZGV0ZXJtaW5hdGVTdGF0ZXMoYWxsUGFyZW50VHlwZSwgYWxsQ2hpbGRyZW4sIGFsbENoZWNrZWRDaGlsZHJlbik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWxsUGFyZW50c09yQ2hpbGRyZW4oYWxsSXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKGFsbEl0ZW0uaXNQYXJlbnRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxDaGlsZHJlblZhbHVlKGFsbEl0ZW0sIGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChhbGxJdGVtLmlzQ2hpbGRPZikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRWYWx1ZShhbGxJdGVtLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFsbENoaWxkcmVuVmFsdWUoaXRlbSwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IGNoaWxkVHlwZSA9IGl0ZW0uaXNQYXJlbnRPZjtcbiAgICBsZXQgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbiAmJiB0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGNoaWxkVHlwZSkgJiYgIXNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW1vdmUobnVsbCwgcG90ZW50aWFsQ2hpbGRyZW5bMF0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3RlbnRpYWxDaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC52YWx1ZSA9PT0gJ0FMTCcgJiYgIXguY2hlY2tlZCkge1xuICAgICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeC5jaGVja2VkICYmICFzZWxlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCB4KTtcbiAgICAgICAgfVxuICAgICAgICB4LmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBbGxQYXJlbnRWYWx1ZShpdGVtLCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgcGFyZW50VHlwZSA9IGl0ZW0uaXNDaGlsZE9mO1xuICAgIGxldCBwb3RlbnRpYWxQYXJlbnRzID0gdGhpcy5nZXRBbGxPZlR5cGUocGFyZW50VHlwZSk7XG4gICAgcG90ZW50aWFsUGFyZW50cy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoIXguY2hlY2tlZCkge1xuICAgICAgICB4LmluZGV0ZXJtaW5hdGUgPSBzZWxlY3Rpbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJbmRldGVybWluYXRlU3RhdGVzKGFsbFBhcmVudFR5cGUsIGFsbENoaWxkcmVuLCBhbGxDaGVja2VkQ2hpbGRyZW4pIHtcbiAgICBsZXQgYWxsQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZVBhcmVudHMgPSBhbGxQYXJlbnRUeXBlLmZpbHRlcigoeCkgPT4gKCEheC5jaGVja2VkIHx8ICEheC5pbmRldGVybWluYXRlKSAmJiB4LnZhbHVlICE9PSAnQUxMJyk7XG4gICAgbGV0IGlzUGFyZW50SW5kZXRlcm1pbmF0ZSA9ICEhYWxsUGFyZW50VHlwZVswXS5jaGVja2VkID8gZmFsc2UgOiBhbGxDaGVja2VkT3JJbmRldGVybWluYXRlUGFyZW50cy5sZW5ndGggPiAwO1xuICAgIGxldCBpc0NoaWxkSW5kZXRlcm1pbmF0ZSA9ICEhYWxsQ2hpbGRyZW5bMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZENoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUoYWxsUGFyZW50VHlwZSwgaXNQYXJlbnRJbmRldGVybWluYXRlKTtcbiAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxDaGlsZHJlbiwgaXNDaGlsZEluZGV0ZXJtaW5hdGUpO1xuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5WYWx1ZShwYXJlbnQsIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBjaGlsZFR5cGUgPSBwYXJlbnQuaXNQYXJlbnRPZjtcbiAgICBsZXQgcG90ZW50aWFsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIHBvdGVudGlhbENoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoeFtwYXJlbnQudHlwZV0uZmlsdGVyKCh5KSA9PiB5ID09PSBwYXJlbnQudmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHguY2hlY2tlZCAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICAgICAgeC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuYWxsT2ZUeXBlU2VsZWN0ZWQoY2hpbGRUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZCh4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSh4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeC5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFyZW50VmFsdWUoY2hpbGQsIGFjdGlvbikge1xuICAgIGxldCBhbGxQYXJlbnRUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGQuaXNDaGlsZE9mKTtcbiAgICBpZiAoYWxsUGFyZW50VHlwZVswXS5jaGVja2VkICYmIGFjdGlvbiAhPT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoYWxsUGFyZW50VHlwZVswXSk7XG4gICAgfVxuICB9XG5cbiAgYWRkSW5kaXZpZHVhbENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgbGV0IHBhcmVudEFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4LmlzQ2hpbGRPZikge1xuICAgICAgICAvLyBvbmx5IGFkZCBjaGlsZHJlbiBpZiB0aGVpciBwYXJlbnRzIGFyZSBub3QgYWxyZWFkeSBzZWxlY3RlZFxuICAgICAgICB4W3guaXNDaGlsZE9mXS5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZVt4LmlzQ2hpbGRPZl0uZmlsdGVyKChwKSA9PiBwID09PSBwYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcmVudEFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZhbHVlW3gudHlwZV0uZmlsdGVyKChpdGVtKSA9PiBpdGVtID09PSB4LnZhbHVlKS5sZW5ndGggPT09IDAgJiYgIXBhcmVudEFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLmFkZCh4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZShtb2RlbCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnZhbHVlID0gbW9kZWwgfHwge307XG4gICAgaWYgKCF0aGlzLnR5cGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZU9iaikgPT4ge1xuICAgICAgbGV0IHR5cGUgPSB0eXBlT2JqLnZhbHVlO1xuICAgICAgaWYgKHRoaXMudmFsdWVbdHlwZV0pIHtcbiAgICAgICAgbGV0IGluZGV0ZXJtaW5hdGVJc1NldCA9IGZhbHNlO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMudXBkYXRlQWxsSXRlbVN0YXRlKHR5cGUpO1xuICAgICAgICBsZXQgb3B0aW9uc0J5VHlwZSA9IG9wdGlvbnMuYWxsT2ZUeXBlO1xuICAgICAgICBsZXQgYWxsU2VsZWN0ZWQgPSBvcHRpb25zLmFsbE9mVHlwZVNlbGVjdGVkO1xuICAgICAgICB0aGlzLnZhbHVlW3R5cGVdLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWFsbFNlbGVjdGVkICYmICFpbmRldGVybWluYXRlSXNTZXQpIHtcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVJc1NldCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGVTdGF0ZShvcHRpb25zQnlUeXBlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uc0J5VHlwZS5maWx0ZXIoKHgpID0+IHgudmFsdWUgPT09IGl0ZW0pWzBdO1xuICAgICAgICAgIHZhbHVlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghYWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKHZhbHVlLCAnYWRkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiB2YWx1ZS5pc1BhcmVudE9mKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVmFsdWUodmFsdWUsICdzZWxlY3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZU9iai5pc0NoaWxkT2YpIHtcbiAgICAgICAgICB0aGlzLm1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4odHJ1ZSwgeyB2YWx1ZTogdHlwZSwgaXNDaGlsZE9mOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhbGxJdGVtc1NlbGVjdGVkKG9wdGlvbnNCeVR5cGUsIHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVt0eXBlXS5sZW5ndGggPT09IG9wdGlvbnNCeVR5cGUubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZShtb2RlbCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=