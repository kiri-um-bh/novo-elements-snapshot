/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    useExisting: forwardRef(function () { return NovoMultiPickerElement; }),
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
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
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
                this.types.forEach(function (x) { return (_this._value[x.value] = selectedItems[x.value]); });
            }
            else {
                this._value = {};
                this.types.forEach(function (x) { return (_this._value[x.value] = []); });
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
        this.types.forEach(function (type) { return _this.modifyAllOfType(type.value, 'unselect'); });
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
            this.options.forEach(function (option) {
                /** @type {?} */
                var formattedOption = _this.setupOptionsByType(option);
                _this._options.push(formattedOption);
            });
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
        formattedSection.data = section.data.map(function (item) {
            return _this.formatOption(section, item);
        });
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
            var allParents = section.data.reduce(function (accum, next) {
                return accum.concat(next[section.isChildOf]);
            }, []);
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
            this.types.forEach(function (type) {
                /** @type {?} */
                var count;
                /** @type {?} */
                var selectedOfType = notShown.filter(function (x) { return x.type === type.value; });
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
            });
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
        var updatedValues = this.value[item.type].filter(function (x) { return x !== item.value; });
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
        return this.items.filter(function (x) { return x.type === type && x.value === 'ALL'; }).length > 0;
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
        allOfType.forEach(function (item) {
            item.checked = selecting;
            item.indeterminate = false;
        });
        if (selecting) {
            this.selectAll(allOfType, type);
        }
        else {
            this.items = tslib_1.__spread(this.items.filter(function (x) { return x.type !== type; }));
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
        this.types.forEach(function (x) { return (updatedObject[x.value] = _this.value[x.value]); });
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
        var values = allOfType.map(function (i) {
            return i.value;
        });
        // remove 'ALL' value
        values.splice(0, 1);
        this.value[type] = values;
        /** @type {?} */
        var updatedItems = this.items.filter(function (x) { return x.type !== type; });
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
        var selectedItems = allOfType.filter(function (i) { return i.checked === true; });
        this.items = tslib_1.__spread(this.items, selectedItems);
        /** @type {?} */
        var values = selectedItems.map(function (i) {
            return i.value;
        });
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
        return this._options.filter(function (x) { return x.type === type; })[0].originalData;
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
        var parent = this.types.filter(function (x) { return !!x.isParentOf; })[0];
        /** @type {?} */
        var parentType = parent.value;
        /** @type {?} */
        var allParentType = this.getAllOfType(parentType);
        /** @type {?} */
        var childType = allParentType[0].isParentOf;
        /** @type {?} */
        var allChildren = this.getAllOfType(childType);
        /** @type {?} */
        var allCheckedChildren = allChildren.filter(function (x) { return !!x.checked; });
        allParentType.forEach(function (obj) {
            if (obj.value === 'ALL') {
                return;
            }
            /** @type {?} */
            var selectedChildrenOfParent = allCheckedChildren.filter(function (x) {
                return x[parentType].filter(function (y) { return y === obj.value; }).length > 0;
            });
            if (selecting) {
                if (obj.checked) {
                    return;
                }
                obj.indeterminate = selectedChildrenOfParent.length > 0;
            }
            else {
                /** @type {?} */
                var allChildrenOfParent = allChildren.filter(function (x) {
                    return x.value !== 'ALL' && x[parentType].filter(function (y) { return y === obj.value; }).length > 0;
                });
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
        });
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
        potentialChildren.forEach(function (x) {
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
        });
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
        potentialParents.forEach(function (x) {
            if (!x.checked) {
                x.indeterminate = selecting;
            }
        });
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
        var allCheckedOrIndeterminateParents = allParentType.filter(function (x) { return (!!x.checked || !!x.indeterminate) && x.value !== 'ALL'; });
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
        potentialChildren.forEach(function (x) {
            if (x.value === 'ALL') {
                return;
            }
            if (x[parent.type].filter(function (y) { return y === parent.value; }).length > 0) {
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
        });
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
        children.forEach(function (x) {
            if (x.isChildOf) {
                // only add children if their parents are not already selected
                x[x.isChildOf].forEach(function (parent) {
                    if (_this.value[x.isChildOf].filter(function (p) { return p === parent; }).length > 0) {
                        parentAlreadySelected = true;
                    }
                });
            }
            if (_this.value[x.type].filter(function (item) { return item === x.value; }).length === 0 && !parentAlreadySelected) {
                _this.add(x);
            }
        });
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
        this.types.forEach(function (typeObj) {
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
                _this.value[type].forEach(function (item) {
                    if (!allSelected_1 && !indeterminateIsSet_1) {
                        indeterminateIsSet_1 = true;
                        _this.setIndeterminateState(optionsByType_1, true);
                    }
                    /** @type {?} */
                    var value = optionsByType_1.filter(function (x) { return x.value === item; })[0];
                    value.checked = true;
                    if (!allSelected_1) {
                        _this.updateDisplayItems(value, 'add');
                    }
                    if (_this.strictRelationship && value.isParentOf) {
                        _this.updateChildrenValue(value, 'select');
                    }
                });
                if (typeObj.isChildOf) {
                    _this.modifyAffectedParentsOrChildren(true, { value: type, isChildOf: true });
                }
            }
            else {
                _this.value[type] = [];
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUVyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFHL0Isb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFtRkUsZ0NBQW1CLE9BQW1CLEVBQVMsTUFBd0I7UUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBM0N2RSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUl0QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWtCN0MsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHOUIsYUFBUSxH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dGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENISVBTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b011bHRpUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXVsdGktcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hpcFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmMgfCBzbGljZTowOmNoaXBzQ291bnRcIlxuICAgICAgICAgICAgW3R5cGVdPVwiaXRlbS50eXBlXCJcbiAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtID09IHNlbGVjdGVkXCJcbiAgICAgICAgICAgIChyZW1vdmUpPVwicmVtb3ZlRnJvbURpc3BsYXkoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCI+XG4gICAgICAgICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgICAgIDwvY2hpcD5cbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IGNoaXBzQ291bnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHR5cGUgb2Ygbm90U2hvd25cIj4rIHt7dHlwZS5jb3VudH19IHt7IGxhYmVscy5tb3JlIH19IHt7dHlwZS50eXBlfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgICAgICAgICAgY2xlYXJWYWx1ZU9uU2VsZWN0PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJjbGlja09wdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiPlxuICAgICAgICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiIFtjbGFzcy5oYXMtdmFsdWVdPVwiaXRlbXMubGVuZ3RoXCI+PC9pPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjbGVhci1hbGxcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aFwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj57eyBsYWJlbHMuY2xlYXJBbGwgfX0gPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+PC9sYWJlbD5cbiAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc291cmNlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBhbnkgPSAnJztcbiAgQElucHV0KClcbiAgdHlwZXM6IGFueTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShzZWxlY3RlZEl0ZW1zKSB7XG4gICAgaWYgKHNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgoeCkgPT4gKHRoaXMuX3ZhbHVlW3gudmFsdWVdID0gc2VsZWN0ZWRJdGVtc1t4LnZhbHVlXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHt9O1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKCh4KSA9PiAodGhpcy5fdmFsdWVbeC52YWx1ZV0gPSBbXSkpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQuZW1pdChzZWxlY3RlZEl0ZW1zKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2Uoc2VsZWN0ZWRJdGVtcyk7XG4gIH1cblxuICBpdGVtczogYW55ID0gW107XG4gIF9pdGVtcyA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICBvcHRpb25zOiBhbnk7XG4gIF9vcHRpb25zOiBhbnk7XG4gIHNlbGVjdGVkOiBhbnkgPSBudWxsO1xuICBjb25maWc6IGFueSA9IHt9O1xuICBjaGlwc0NvdW50OiBudW1iZXI7XG4gIHNlbGVjdEFsbE9wdGlvbjogYm9vbGVhbjtcbiAgc3RyaWN0UmVsYXRpb25zaGlwOiBib29sZWFuO1xuICAvLyBwcml2YXRlIGRhdGEgbW9kZWxcbiAgX3ZhbHVlOiBhbnkgPSB7fTtcbiAgbm90U2hvd246IGFueSA9IHt9O1xuICAvLyBQbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3NcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmNoaXBzQ291bnQgPSA0O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxPcHRpb24gPSB0aGlzLnNvdXJjZS5zZWxlY3RBbGxPcHRpb24gfHwgZmFsc2U7XG4gICAgdGhpcy5jaGlwc0NvdW50ID0gdGhpcy5zb3VyY2UuY2hpcHNDb3VudCB8fCA0O1xuICAgIHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwID0gdGhpcy5zb3VyY2Uuc3RyaWN0UmVsYXRpb25zaGlwIHx8IGZhbHNlO1xuICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gIH1cblxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4gdGhpcy5tb2RpZnlBbGxPZlR5cGUodHlwZS52YWx1ZSwgJ3Vuc2VsZWN0JykpO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnNldEluaXRpYWxWYWx1ZShudWxsKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICByZW1vdmVGcm9tRGlzcGxheShldmVudCwgaXRlbSkge1xuICAgIHRoaXMucmVtb3ZlKHRydWUsIGl0ZW0pO1xuICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihmYWxzZSwgaXRlbSk7XG4gIH1cblxuICBzZXR1cE9wdGlvbnMoKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zb3VyY2Uub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBsZXQgZm9ybWF0dGVkT3B0aW9uID0gdGhpcy5zZXR1cE9wdGlvbnNCeVR5cGUob3B0aW9uKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGZvcm1hdHRlZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2Uub3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBzZXR1cE9wdGlvbnNCeVR5cGUoc2VjdGlvbikge1xuICAgIGxldCBmb3JtYXR0ZWRTZWN0aW9uOiBhbnkgPSB7XG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBsYWJlbDogc2VjdGlvbi5sYWJlbCB8fCBzZWN0aW9uLnR5cGUsXG4gICAgfTtcbiAgICBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEgPSBzZWN0aW9uLmRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRPcHRpb24oc2VjdGlvbiwgaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICBsZXQgc2VsZWN0QWxsID0gdGhpcy5jcmVhdGVTZWxlY3RBbGxPcHRpb24oc2VjdGlvbik7XG4gICAgICBmb3JtYXR0ZWRTZWN0aW9uLmRhdGEuc3BsaWNlKDAsIDAsIHNlbGVjdEFsbCk7XG4gICAgfVxuICAgIGZvcm1hdHRlZFNlY3Rpb24ub3JpZ2luYWxEYXRhID0gZm9ybWF0dGVkU2VjdGlvbi5kYXRhLnNsaWNlKCk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFNlY3Rpb247XG4gIH1cblxuICBmb3JtYXRPcHRpb24oc2VjdGlvbiwgaXRlbSkge1xuICAgIGxldCBvYmogPSB7XG4gICAgICB2YWx1ZTogc2VjdGlvbi5maWVsZCA/IGl0ZW1bc2VjdGlvbi5maWVsZF0gOiBpdGVtLnZhbHVlIHx8IGl0ZW0sXG4gICAgICBsYWJlbDogc2VjdGlvbi5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHNlY3Rpb24uZm9ybWF0LCBpdGVtKSA6IGl0ZW0ubGFiZWwgfHwgU3RyaW5nKGl0ZW0udmFsdWUgfHwgaXRlbSksXG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBjaGVja2VkOiB1bmRlZmluZWQsXG4gICAgICBpc1BhcmVudE9mOiBzZWN0aW9uLmlzUGFyZW50T2YsXG4gICAgICBpc0NoaWxkT2Y6IHNlY3Rpb24uaXNDaGlsZE9mLFxuICAgIH07XG4gICAgaWYgKG9iai5pc0NoaWxkT2YpIHtcbiAgICAgIG9ialtzZWN0aW9uLmlzQ2hpbGRPZl0gPSBpdGVtW3NlY3Rpb24uaXNDaGlsZE9mXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGNyZWF0ZVNlbGVjdEFsbE9wdGlvbihzZWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdEFsbCA9IHtcbiAgICAgIHZhbHVlOiAnQUxMJyxcbiAgICAgIGxhYmVsOiBgQWxsICR7c2VjdGlvbi50eXBlfWAsXG4gICAgICB0eXBlOiBzZWN0aW9uLnR5cGUsXG4gICAgICBjaGVja2VkOiB0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoICYmIHRoaXMubW9kZWwuaW5kZXhPZignQUxMJykgIT09IC0xLFxuICAgICAgaXNQYXJlbnRPZjogc2VjdGlvbi5pc1BhcmVudE9mLFxuICAgICAgaXNDaGlsZE9mOiBzZWN0aW9uLmlzQ2hpbGRPZixcbiAgICB9O1xuICAgIGlmIChzZWN0aW9uLmlzQ2hpbGRPZikge1xuICAgICAgbGV0IGFsbFBhcmVudHMgPSBzZWN0aW9uLmRhdGEucmVkdWNlKChhY2N1bSwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjdW0uY29uY2F0KG5leHRbc2VjdGlvbi5pc0NoaWxkT2ZdKTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIHNlbGVjdEFsbFtzZWN0aW9uLmlzQ2hpbGRPZl0gPSBhbGxQYXJlbnRzO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0QWxsO1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBpdGVtO1xuICB9XG5cbiAgb25Gb2N1cyhlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZSk7XG4gIH1cblxuICBjbGlja09wdGlvbihldmVudCkge1xuICAgIGlmIChldmVudCAmJiAhKGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICBpZiAoZXZlbnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGQoZXZlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKGV2ZW50LmNoZWNrZWQsIGV2ZW50KTtcbiAgICAgIC8vIFNldCBmb2N1cyBvbiB0aGUgcGlja2VyXG4gICAgICBsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXBpY2tlciA+IGlucHV0Jyk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShldmVudC50eXBlLCAnc2VsZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGV2ZW50LCAnYWRkJyk7XG4gICAgICB0aGlzLnZhbHVlW2V2ZW50LnR5cGVdLnB1c2goZXZlbnQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVBbGxJdGVtU3RhdGUoZXZlbnQudHlwZSk7XG4gICAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oZXZlbnQsICdzZWxlY3QnKTtcbiAgICB0aGlzLnNlbGVjdChudWxsLCBldmVudCk7XG4gIH1cblxuICB1cGRhdGVBbGxJdGVtU3RhdGUodHlwZSkge1xuICAgIGxldCBhbGxPZlR5cGUgPSB0aGlzLmdldEFsbE9mVHlwZSh0eXBlKTtcbiAgICBsZXQgYWxsT2ZUeXBlU2VsZWN0ZWQgPSB0aGlzLmFsbEl0ZW1zU2VsZWN0ZWQoYWxsT2ZUeXBlLCB0eXBlKTtcbiAgICBpZiAoYWxsT2ZUeXBlU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiB7IGFsbE9mVHlwZSwgYWxsT2ZUeXBlU2VsZWN0ZWQgfTtcbiAgfVxuXG4gIHNldEluZGV0ZXJtaW5hdGVTdGF0ZShhbGxPZlR5cGUsIHN0YXR1cykge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgYWxsSXRlbS5pbmRldGVybWluYXRlID0gc3RhdHVzO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheUl0ZW1zKGl0ZW0sIGFjdGlvbikge1xuICAgIGxldCBhZGRpbmcgPSBhY3Rpb24gPT09ICdhZGQnO1xuICAgIGlmIChhZGRpbmcpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlRGlzcGxheVRleHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlUZXh0KGl0ZW1zKSB7XG4gICAgdGhpcy5ub3RTaG93biA9IFtdO1xuICAgIGxldCBub3RTaG93biA9IGl0ZW1zLnNsaWNlKHRoaXMuY2hpcHNDb3VudCk7XG4gICAgaWYgKG5vdFNob3duLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBsZXQgY291bnQ7XG4gICAgICAgIGxldCBzZWxlY3RlZE9mVHlwZSA9IG5vdFNob3duLmZpbHRlcigoeCkgPT4geC50eXBlID09PSB0eXBlLnZhbHVlKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkT2ZUeXBlLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZE9mVHlwZVswXS52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgICBjb3VudCA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUudmFsdWUpLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnQgPSBzZWxlY3RlZE9mVHlwZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpc3BsYXlUeXBlID0gY291bnQgPT09IDEgPyB0eXBlLnNpbmd1bGFyIDogdHlwZS5wbHVyYWwgfHwgdHlwZS52YWx1ZTtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgIHRoaXMubm90U2hvd24ucHVzaCh7IHR5cGU6IGRpc3BsYXlUeXBlLCBjb3VudDogY291bnQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShldmVudCwgaXRlbSkge1xuICAgIGxldCB0cmlnZ2VyZWRCeUV2ZW50O1xuICAgIGlmIChldmVudCkge1xuICAgICAgdHJpZ2dlcmVkQnlFdmVudCA9IHRydWU7XG4gICAgfVxuICAgIGxldCBpdGVtVG9SZW1vdmUgPSBpdGVtO1xuICAgIGlmIChpdGVtVG9SZW1vdmUudmFsdWUgPT09ICdBTEwnKSB7XG4gICAgICB0cmlnZ2VyZWRCeUV2ZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLm1vZGlmeUFsbE9mVHlwZShpdGVtVG9SZW1vdmUudHlwZSwgJ3Vuc2VsZWN0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGl0ZW1Ub1JlbW92ZS50eXBlKSkge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtVG9SZW1vdmUpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUl0ZW0oaXRlbSwgdHJpZ2dlcmVkQnlFdmVudCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGl0ZW0sIHRyaWdnZXJlZEJ5RXZlbnQ/OiBhbnkpIHtcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5yZW1vdmVWYWx1ZShpdGVtKTtcbiAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ0FMTCcpIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50T3JDaGlsZHJlbihpdGVtLCAndW5zZWxlY3QnKTtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXJlZEJ5RXZlbnQpIHtcbiAgICAgIHRoaXMubW9kaWZ5QWZmZWN0ZWRQYXJlbnRzT3JDaGlsZHJlbihmYWxzZSwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaXRlbSkge1xuICAgIGxldCB1cGRhdGVkVmFsdWVzID0gdGhpcy52YWx1ZVtpdGVtLnR5cGVdLmZpbHRlcigoeCkgPT4geCAhPT0gaXRlbS52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZVtpdGVtLnR5cGVdID0gdXBkYXRlZFZhbHVlcztcbiAgICB0aGlzLnRyaWdnZXJWYWx1ZVVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUl0ZW1zKGl0ZW0sICdyZW1vdmUnKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgdGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3QoZXZlbnQsIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbGxPZlR5cGVTZWxlY3RlZCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUgJiYgeC52YWx1ZSA9PT0gJ0FMTCcpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBtb2RpZnlBbGxPZlR5cGUodHlwZSwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IGFsbE9mVHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHR5cGUpO1xuICAgIGFsbE9mVHlwZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBzZWxlY3Rpbmc7XG4gICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChhbGxPZlR5cGUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpXTtcbiAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLnZhbHVlW3R5cGVdID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVBbGxQYXJlbnRzT3JDaGlsZHJlbihhbGxPZlR5cGVbMF0sIGFjdGlvbik7XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlclZhbHVlVXBkYXRlKCk7XG4gIH1cblxuICB0cmlnZ2VyVmFsdWVVcGRhdGUoKSB7XG4gICAgbGV0IHVwZGF0ZWRPYmplY3QgPSB7fTtcbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHgpID0+ICh1cGRhdGVkT2JqZWN0W3gudmFsdWVdID0gdGhpcy52YWx1ZVt4LnZhbHVlXSkpO1xuICAgIHRoaXMudmFsdWUgPSB1cGRhdGVkT2JqZWN0O1xuICB9XG5cbiAgc2VsZWN0QWxsKGFsbE9mVHlwZSwgdHlwZSkge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxsT2ZUeXBlWzBdLmNoZWNrZWQgPSB0cnVlO1xuICAgIGxldCB2YWx1ZXMgPSBhbGxPZlR5cGUubWFwKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICB9KTtcbiAgICAvLyByZW1vdmUgJ0FMTCcgdmFsdWVcbiAgICB2YWx1ZXMuc3BsaWNlKDAsIDEpO1xuICAgIHRoaXMudmFsdWVbdHlwZV0gPSB2YWx1ZXM7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IHR5cGUpO1xuICAgIHRoaXMuaXRlbXMgPSB1cGRhdGVkSXRlbXM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5SXRlbXMoYWxsT2ZUeXBlWzBdLCAnYWRkJyk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmVJdGVtSWZBbGxTZWxlY3RlZChpdGVtKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGl0ZW0udHlwZTtcbiAgICBsZXQgYWxsT2ZUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUodHlwZSk7XG4gICAgbGV0IGFsbEl0ZW0gPSBhbGxPZlR5cGVbMF07XG4gICAgdGhpcy5yZW1vdmVJdGVtKGFsbEl0ZW0pO1xuICAgIGFsbEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgbGV0IHNlbGVjdGVkSXRlbXMgPSBhbGxPZlR5cGUuZmlsdGVyKChpKSA9PiBpLmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcywgLi4uc2VsZWN0ZWRJdGVtc107XG4gICAgbGV0IHZhbHVlcyA9IHNlbGVjdGVkSXRlbXMubWFwKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnZhbHVlW3R5cGVdID0gWy4uLnZhbHVlc107XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudHMgZG9lc24ndCBjb250YWluIHRoZSB0YXJnZXQgZWxlbWVudCwgaXQgaXMgYW4gb3V0c2lkZSBjbGlja1xuICAgIGlmICghdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbE9mVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09IHR5cGUpWzBdLm9yaWdpbmFsRGF0YTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudE9yQ2hpbGRyZW4oaXRlbSwgYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGl0ZW0uaXNQYXJlbnRPZikge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblZhbHVlKGl0ZW0sIGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChpdGVtLmlzQ2hpbGRPZiAmJiB0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRWYWx1ZShpdGVtLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIG1vZGlmeUFmZmVjdGVkUGFyZW50c09yQ2hpbGRyZW4oc2VsZWN0aW5nLCBpdGVtQ2hhbmdlZCkge1xuICAgIGlmICghaXRlbUNoYW5nZWQuaXNDaGlsZE9mICYmICFpdGVtQ2hhbmdlZC5pc1BhcmVudE9mKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXJlbnQgPSB0aGlzLnR5cGVzLmZpbHRlcigoeCkgPT4gISF4LmlzUGFyZW50T2YpWzBdO1xuICAgIGxldCBwYXJlbnRUeXBlID0gcGFyZW50LnZhbHVlO1xuICAgIGxldCBhbGxQYXJlbnRUeXBlID0gdGhpcy5nZXRBbGxPZlR5cGUocGFyZW50VHlwZSk7XG4gICAgbGV0IGNoaWxkVHlwZSA9IGFsbFBhcmVudFR5cGVbMF0uaXNQYXJlbnRPZjtcbiAgICBsZXQgYWxsQ2hpbGRyZW4gPSB0aGlzLmdldEFsbE9mVHlwZShjaGlsZFR5cGUpO1xuICAgIGxldCBhbGxDaGVja2VkQ2hpbGRyZW4gPSBhbGxDaGlsZHJlbi5maWx0ZXIoKHgpID0+ICEheC5jaGVja2VkKTtcblxuICAgIGFsbFBhcmVudFR5cGUuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnZhbHVlID09PSAnQUxMJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0ZWRDaGlsZHJlbk9mUGFyZW50ID0gYWxsQ2hlY2tlZENoaWxkcmVuLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICByZXR1cm4geFtwYXJlbnRUeXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IG9iai52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2VsZWN0aW5nKSB7XG4gICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGVkQ2hpbGRyZW5PZlBhcmVudC5sZW5ndGggPiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGFsbENoaWxkcmVuT2ZQYXJlbnQgPSBhbGxDaGlsZHJlbi5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICByZXR1cm4geC52YWx1ZSAhPT0gJ0FMTCcgJiYgeFtwYXJlbnRUeXBlXS5maWx0ZXIoKHkpID0+IHkgPT09IG9iai52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChvYmouY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0UmVsYXRpb25zaGlwICYmIGFsbENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoICE9PSBzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIG9iai5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgb2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShvYmopO1xuICAgICAgICAgICAgICB0aGlzLmFkZEluZGl2aWR1YWxDaGlsZHJlbihzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtQ2hhbmdlZC50eXBlICE9PSBwYXJlbnRUeXBlKSB7XG4gICAgICAgICAgICBpZiAob2JqLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgb2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShvYmopO1xuICAgICAgICAgICAgICB0aGlzLmFkZEluZGl2aWR1YWxDaGlsZHJlbihzZWxlY3RlZENoaWxkcmVuT2ZQYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmouaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChhbGxDaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIGNoaWxkcmVuIGFuZCBpcyBjaGVja2VkLCBpdCBzaG91bGQgc3RheSBjaGVja2VkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmljdFJlbGF0aW9uc2hpcCAmJiBpdGVtQ2hhbmdlZC50eXBlICE9PSBwYXJlbnRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShudWxsLCBvYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVJbmRldGVybWluYXRlU3RhdGVzKGFsbFBhcmVudFR5cGUsIGFsbENoaWxkcmVuLCBhbGxDaGVja2VkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFsbFBhcmVudHNPckNoaWxkcmVuKGFsbEl0ZW0sIGFjdGlvbikge1xuICAgIGlmIChhbGxJdGVtLmlzUGFyZW50T2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsQ2hpbGRyZW5WYWx1ZShhbGxJdGVtLCBhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoYWxsSXRlbS5pc0NoaWxkT2YpIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsUGFyZW50VmFsdWUoYWxsSXRlbSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbGxDaGlsZHJlblZhbHVlKGl0ZW0sIGFjdGlvbikge1xuICAgIGxldCBzZWxlY3RpbmcgPSBhY3Rpb24gPT09ICdzZWxlY3QnO1xuICAgIGxldCBjaGlsZFR5cGUgPSBpdGVtLmlzUGFyZW50T2Y7XG4gICAgbGV0IHBvdGVudGlhbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24gJiYgdGhpcy5hbGxPZlR5cGVTZWxlY3RlZChjaGlsZFR5cGUpICYmICFzZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG51bGwsIHBvdGVudGlhbENoaWxkcmVuWzBdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG90ZW50aWFsQ2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgudmFsdWUgPT09ICdBTEwnICYmICF4LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGluZykge1xuICAgICAgICAgIHguY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgeC5pbmRldGVybWluYXRlID0gc2VsZWN0aW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHguY2hlY2tlZCAmJiAhc2VsZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUobnVsbCwgeCk7XG4gICAgICAgIH1cbiAgICAgICAgeC5jaGVja2VkID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQWxsUGFyZW50VmFsdWUoaXRlbSwgYWN0aW9uKSB7XG4gICAgbGV0IHNlbGVjdGluZyA9IGFjdGlvbiA9PT0gJ3NlbGVjdCc7XG4gICAgbGV0IHBhcmVudFR5cGUgPSBpdGVtLmlzQ2hpbGRPZjtcbiAgICBsZXQgcG90ZW50aWFsUGFyZW50cyA9IHRoaXMuZ2V0QWxsT2ZUeXBlKHBhcmVudFR5cGUpO1xuICAgIHBvdGVudGlhbFBhcmVudHMuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKCF4LmNoZWNrZWQpIHtcbiAgICAgICAgeC5pbmRldGVybWluYXRlID0gc2VsZWN0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSW5kZXRlcm1pbmF0ZVN0YXRlcyhhbGxQYXJlbnRUeXBlLCBhbGxDaGlsZHJlbiwgYWxsQ2hlY2tlZENoaWxkcmVuKSB7XG4gICAgbGV0IGFsbENoZWNrZWRPckluZGV0ZXJtaW5hdGVQYXJlbnRzID0gYWxsUGFyZW50VHlwZS5maWx0ZXIoKHgpID0+ICghIXguY2hlY2tlZCB8fCAhIXguaW5kZXRlcm1pbmF0ZSkgJiYgeC52YWx1ZSAhPT0gJ0FMTCcpO1xuICAgIGxldCBpc1BhcmVudEluZGV0ZXJtaW5hdGUgPSAhIWFsbFBhcmVudFR5cGVbMF0uY2hlY2tlZCA/IGZhbHNlIDogYWxsQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZVBhcmVudHMubGVuZ3RoID4gMDtcbiAgICBsZXQgaXNDaGlsZEluZGV0ZXJtaW5hdGUgPSAhIWFsbENoaWxkcmVuWzBdLmNoZWNrZWQgPyBmYWxzZSA6IGFsbENoZWNrZWRDaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZVN0YXRlKGFsbFBhcmVudFR5cGUsIGlzUGFyZW50SW5kZXRlcm1pbmF0ZSk7XG4gICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUoYWxsQ2hpbGRyZW4sIGlzQ2hpbGRJbmRldGVybWluYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuVmFsdWUocGFyZW50LCBhY3Rpb24pIHtcbiAgICBsZXQgc2VsZWN0aW5nID0gYWN0aW9uID09PSAnc2VsZWN0JztcbiAgICBsZXQgY2hpbGRUeXBlID0gcGFyZW50LmlzUGFyZW50T2Y7XG4gICAgbGV0IHBvdGVudGlhbENoaWxkcmVuID0gdGhpcy5nZXRBbGxPZlR5cGUoY2hpbGRUeXBlKTtcbiAgICBwb3RlbnRpYWxDaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC52YWx1ZSA9PT0gJ0FMTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHhbcGFyZW50LnR5cGVdLmZpbHRlcigoeSkgPT4geSA9PT0gcGFyZW50LnZhbHVlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh4LmNoZWNrZWQgJiYgIXNlbGVjdGluZykge1xuICAgICAgICAgIHguY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmFsbE9mVHlwZVNlbGVjdGVkKGNoaWxkVHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSXRlbUlmQWxsU2VsZWN0ZWQoeCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoeCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHguY2hlY2tlZCA9IHNlbGVjdGluZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhcmVudFZhbHVlKGNoaWxkLCBhY3Rpb24pIHtcbiAgICBsZXQgYWxsUGFyZW50VHlwZSA9IHRoaXMuZ2V0QWxsT2ZUeXBlKGNoaWxkLmlzQ2hpbGRPZik7XG4gICAgaWYgKGFsbFBhcmVudFR5cGVbMF0uY2hlY2tlZCAmJiBhY3Rpb24gIT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUl0ZW1JZkFsbFNlbGVjdGVkKGFsbFBhcmVudFR5cGVbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEluZGl2aWR1YWxDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGxldCBwYXJlbnRBbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeC5pc0NoaWxkT2YpIHtcbiAgICAgICAgLy8gb25seSBhZGQgY2hpbGRyZW4gaWYgdGhlaXIgcGFyZW50cyBhcmUgbm90IGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgeFt4LmlzQ2hpbGRPZl0uZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVbeC5pc0NoaWxkT2ZdLmZpbHRlcigocCkgPT4gcCA9PT0gcGFyZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJlbnRBbHJlYWR5U2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YWx1ZVt4LnR5cGVdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSA9PT0geC52YWx1ZSkubGVuZ3RoID09PSAwICYmICFwYXJlbnRBbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5hZGQoeCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWUobW9kZWwpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy52YWx1ZSA9IG1vZGVsIHx8IHt9O1xuICAgIGlmICghdGhpcy50eXBlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGVPYmopID0+IHtcbiAgICAgIGxldCB0eXBlID0gdHlwZU9iai52YWx1ZTtcbiAgICAgIGlmICh0aGlzLnZhbHVlW3R5cGVdKSB7XG4gICAgICAgIGxldCBpbmRldGVybWluYXRlSXNTZXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLnVwZGF0ZUFsbEl0ZW1TdGF0ZSh0eXBlKTtcbiAgICAgICAgbGV0IG9wdGlvbnNCeVR5cGUgPSBvcHRpb25zLmFsbE9mVHlwZTtcbiAgICAgICAgbGV0IGFsbFNlbGVjdGVkID0gb3B0aW9ucy5hbGxPZlR5cGVTZWxlY3RlZDtcbiAgICAgICAgdGhpcy52YWx1ZVt0eXBlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCAmJiAhaW5kZXRlcm1pbmF0ZUlzU2V0KSB7XG4gICAgICAgICAgICBpbmRldGVybWluYXRlSXNTZXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlU3RhdGUob3B0aW9uc0J5VHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbnNCeVR5cGUuZmlsdGVyKCh4KSA9PiB4LnZhbHVlID09PSBpdGVtKVswXTtcbiAgICAgICAgICB2YWx1ZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoIWFsbFNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXlJdGVtcyh2YWx1ZSwgJ2FkZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdHJpY3RSZWxhdGlvbnNoaXAgJiYgdmFsdWUuaXNQYXJlbnRPZikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblZhbHVlKHZhbHVlLCAnc2VsZWN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR5cGVPYmouaXNDaGlsZE9mKSB7XG4gICAgICAgICAgdGhpcy5tb2RpZnlBZmZlY3RlZFBhcmVudHNPckNoaWxkcmVuKHRydWUsIHsgdmFsdWU6IHR5cGUsIGlzQ2hpbGRPZjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZVt0eXBlXSA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWxsSXRlbXNTZWxlY3RlZChvcHRpb25zQnlUeXBlLCB0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVbdHlwZV0ubGVuZ3RoID09PSBvcHRpb25zQnlUeXBlLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUobW9kZWwpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19