/**
 * @fileoverview added by tsickle
 * Generated from: elements/chips/Chips.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, EventEmitter, Input, Output, forwardRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { ReplaySubject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
// APP
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoChipsElement; })),
    multi: true,
};
var NovoChipElement = /** @class */ (function () {
    function NovoChipElement() {
        this.disabled = false;
        this.select = new EventEmitter();
        this.remove = new EventEmitter();
        this.deselect = new EventEmitter();
    }
    Object.defineProperty(NovoChipElement.prototype, "type", {
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._type = type ? type.toLowerCase() : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    NovoChipElement.prototype.onRemove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.remove.emit(e);
        return false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NovoChipElement.prototype.onSelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.select.emit(e);
        return false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NovoChipElement.prototype.onDeselect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.deselect.emit(e);
        return false;
    };
    NovoChipElement.decorators = [
        { type: Component, args: [{
                    selector: 'chip,novo-chip',
                    template: "\n        <span (click)=\"onSelect($event)\" (mouseenter)=\"onSelect($event)\" (mouseleave)=\"onDeselect($event)\" [ngClass]=\"_type\">\n            <i *ngIf=\"_type\" class=\"bhi-circle\"></i>\n            <span><ng-content></ng-content></span>\n        </span>\n        <i class=\"bhi-close\" *ngIf=\"!disabled\" (click)=\"onRemove($event)\"></i>\n    "
                }] }
    ];
    NovoChipElement.propDecorators = {
        type: [{ type: Input }],
        disabled: [{ type: Input }],
        select: [{ type: Output }],
        remove: [{ type: Output }],
        deselect: [{ type: Output }]
    };
    return NovoChipElement;
}());
export { NovoChipElement };
if (false) {
    /** @type {?} */
    NovoChipElement.prototype.disabled;
    /** @type {?} */
    NovoChipElement.prototype.select;
    /** @type {?} */
    NovoChipElement.prototype.remove;
    /** @type {?} */
    NovoChipElement.prototype.deselect;
    /** @type {?} */
    NovoChipElement.prototype.entity;
    /** @type {?} */
    NovoChipElement.prototype._type;
}
var NovoChipsElement = /** @class */ (function () {
    function NovoChipsElement(element, componentUtils, labels) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.labels = labels;
        this.closeOnSelect = false;
        this.placeholder = '';
        this._disablePickerInput = false;
        this.changed = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.typing = new EventEmitter();
        this.items = [];
        this.selected = null;
        this.config = {};
        // private data model
        this._value = '';
        this._items = new ReplaySubject(1);
        // Placeholders for the callbacks
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(NovoChipsElement.prototype, "disablePickerInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disablePickerInput;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._disablePickerInput = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoChipsElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setItems();
    };
    Object.defineProperty(NovoChipsElement.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this.itemToAdd = '';
            if (selected !== this._value) {
                this._value = selected;
                this.changed.emit({ value: selected, rawValue: this.items });
                this.onModelChange(selected);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoChipsElement.prototype.clearValue = /**
     * @return {?}
     */
    function () {
        this.items = [];
        this._items.next(this.items);
        this.value = null;
        this.changed.emit({ value: this.value, rawValue: this.items });
        this.onModelChange(this.value);
    };
    /**
     * @return {?}
     */
    NovoChipsElement.prototype.setItems = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var _this = this;
        this.items = [];
        if (this.model && Array.isArray(this.model)) {
            /** @type {?} */
            var noLabels = [];
            try {
                for (var _b = tslib_1.__values(this.model), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
                    /** @type {?} */
                    var label = void 0;
                    if (this.source && this.source.format && Helpers.validateInterpolationProps(this.source.format, value)) {
                        label = Helpers.interpolate(this.source.format, value);
                    }
                    if (this.source && label && label !== this.source.format) {
                        this.items.push({
                            value: value,
                            label: label,
                        });
                    }
                    else if (this.source.getLabels && typeof this.source.getLabels === 'function') {
                        noLabels.push(value);
                    }
                    else if (this.source.options && Array.isArray(this.source.options)) {
                        this.items.push(this.getLabelFromOptions(value));
                    }
                    else if (this.source.categoryMap && this.source.categoryMap.size) {
                        this.items.push(value);
                    }
                    else {
                        this.items.push({
                            value: value,
                            label: value,
                        });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (noLabels.length > 0 && this.source && this.source.getLabels && typeof this.source.getLabels === 'function') {
                this.source.getLabels(noLabels).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    var e_2, _a;
                    try {
                        for (var result_1 = tslib_1.__values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                            var value = result_1_1.value;
                            if (value.hasOwnProperty('label')) {
                                _this.items.push({
                                    value: value,
                                    label: value.label,
                                });
                            }
                            else if (_this.source.options && Array.isArray(_this.source.options)) {
                                _this.items.push(_this.getLabelFromOptions(value));
                            }
                            else {
                                _this.items.push(value);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    _this._items.next(_this.items);
                }));
            }
        }
        this.changed.emit({ value: this.model, rawValue: this.items });
        this._items.next(this.items);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoChipsElement.prototype.getLabelFromOptions = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var optLabel = this.source.options.find((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return val.value === value; }));
        return {
            value: value,
            label: optLabel ? optLabel.label : value,
        };
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NovoChipsElement.prototype.deselectAll = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.selected = null;
        this.hidePreview();
    };
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    NovoChipsElement.prototype.select = /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    function (event, item) {
        this.blur.emit(event);
        this.deselectAll();
        this.selected = item;
        this.showPreview();
    };
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    NovoChipsElement.prototype.deselect = /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    function (event, item) {
        this.blur.emit(event);
        this.deselectAll();
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NovoChipsElement.prototype.onTyping = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.typing.emit(event);
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NovoChipsElement.prototype.onFocus = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.deselectAll();
        this.element.nativeElement.classList.add('selected');
        this.focus.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoChipsElement.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && !(event instanceof Event)) {
            this.items.push(event);
            this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.value; }));
            // Set focus on the picker
            /** @type {?} */
            var input = this.element.nativeElement.querySelector('novo-picker > input');
            if (input) {
                input.focus();
            }
        }
        this._items.next(this.items);
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    NovoChipsElement.prototype.remove = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.items.splice(this.items.indexOf(item), 1);
        this.deselectAll();
        this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.value; }));
        this.changed.emit({ value: this.value.length ? this.value : '', rawValue: this.items });
        this.onModelChange(this.value.length ? this.value : '');
        this._items.next(this.items);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoChipsElement.prototype.onKeyDown = /**
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
                    this.remove(event, this.selected);
                }
                else {
                    this.select(event, this.items[this.items.length - 1]);
                }
            }
        }
    };
    // Set touched on blur
    // Set touched on blur
    /**
     * @param {?} e
     * @return {?}
     */
    NovoChipsElement.prototype.onTouched = 
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
    NovoChipsElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        this.setItems();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoChipsElement.prototype.registerOnChange = /**
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
    NovoChipsElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoChipsElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this._disablePickerInput = disabled;
    };
    /**
     * @name showPreview
     *
     * @description This method creates an instance of the preview (called popup) and adds all the bindings to that
     * instance. Will reuse the popup or create a new one if it does not already exist. Will only work if there is
     * a previewTemplate given in the config.
     */
    /**
     * \@name showPreview
     *
     * \@description This method creates an instance of the preview (called popup) and adds all the bindings to that
     * instance. Will reuse the popup or create a new one if it does not already exist. Will only work if there is
     * a previewTemplate given in the config.
     * @return {?}
     */
    NovoChipsElement.prototype.showPreview = /**
     * \@name showPreview
     *
     * \@description This method creates an instance of the preview (called popup) and adds all the bindings to that
     * instance. Will reuse the popup or create a new one if it does not already exist. Will only work if there is
     * a previewTemplate given in the config.
     * @return {?}
     */
    function () {
        if (this.source.previewTemplate) {
            if (!this.popup) {
                this.popup = this.componentUtils.append(this.source.previewTemplate, this.preview);
            }
            this.popup.instance.match = this.selected;
        }
    };
    /**
     * @name hidePreview
     *
     * @description - This method deletes the preview popup from the DOM.
     */
    /**
     * \@name hidePreview
     *
     * \@description - This method deletes the preview popup from the DOM.
     * @return {?}
     */
    NovoChipsElement.prototype.hidePreview = /**
     * \@name hidePreview
     *
     * \@description - This method deletes the preview popup from the DOM.
     * @return {?}
     */
    function () {
        if (this.popup) {
            this.popup.destroy();
            this.popup = null;
        }
    };
    NovoChipsElement.decorators = [
        { type: Component, args: [{
                    selector: 'chips,novo-chips',
                    providers: [CHIPS_VALUE_ACCESSOR],
                    template: "\n        <div class=\"novo-chip-container\">\n          <novo-chip\n              *ngFor=\"let item of _items | async\"\n              [type]=\"type || item?.value?.searchEntity\"\n              [class.selected]=\"item == selected\"\n              [disabled]=\"disablePickerInput\"\n              (remove)=\"remove($event, item)\"\n              (select)=\"select($event, item)\"\n              (deselect)=\"deselect($event, item)\">\n              {{ item.label }}\n          </novo-chip>\n        </div>\n        <div class=\"chip-input-container\" *ngIf=\"!maxlength || (maxlength && items.length < maxlength)\">\n            <novo-picker\n                clearValueOnSelect=\"true\"\n                [closeOnSelect]=\"closeOnSelect\"\n                [config]=\"source\"\n                [disablePickerInput]=\"disablePickerInput\"\n                [placeholder]=\"placeholder\"\n                [(ngModel)]=\"itemToAdd\"\n                (select)=\"add($event)\"\n                (keydown)=\"onKeyDown($event)\"\n                (focus)=\"onFocus($event)\"\n                (typing)=\"onTyping($event)\"\n                (blur)=\"onTouched($event)\"\n                [selected]=\"items\"\n                [overrideElement]=\"element\">\n            </novo-picker>\n        </div>\n        <div class=\"preview-container\">\n            <span #preview></span>\n        </div>\n        <i class=\"bhi-search\" [class.has-value]=\"items.length\" *ngIf=\"!disablePickerInput\"></i>\n        <label class=\"clear-all\" *ngIf=\"items.length && !disablePickerInput\" (click)=\"clearValue()\">{{ labels.clearAll }} <i class=\"bhi-times\"></i></label>\n   ",
                    host: {
                        '[class.with-value]': 'items.length > 0',
                        '[class.disabled]': 'disablePickerInput',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoChipsElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentUtils },
        { type: NovoLabelService }
    ]; };
    NovoChipsElement.propDecorators = {
        closeOnSelect: [{ type: Input }],
        placeholder: [{ type: Input }],
        source: [{ type: Input }],
        maxlength: [{ type: Input }],
        type: [{ type: Input }],
        disablePickerInput: [{ type: Input }],
        changed: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        typing: [{ type: Output }],
        preview: [{ type: ViewChild, args: ['preview', { read: ViewContainerRef, static: false },] }],
        value: [{ type: Input }]
    };
    return NovoChipsElement;
}());
export { NovoChipsElement };
if (false) {
    /** @type {?} */
    NovoChipsElement.prototype.closeOnSelect;
    /** @type {?} */
    NovoChipsElement.prototype.placeholder;
    /** @type {?} */
    NovoChipsElement.prototype.source;
    /** @type {?} */
    NovoChipsElement.prototype.maxlength;
    /** @type {?} */
    NovoChipsElement.prototype.type;
    /**
     * @type {?}
     * @private
     */
    NovoChipsElement.prototype._disablePickerInput;
    /** @type {?} */
    NovoChipsElement.prototype.changed;
    /** @type {?} */
    NovoChipsElement.prototype.focus;
    /** @type {?} */
    NovoChipsElement.prototype.blur;
    /** @type {?} */
    NovoChipsElement.prototype.typing;
    /** @type {?} */
    NovoChipsElement.prototype.preview;
    /** @type {?} */
    NovoChipsElement.prototype.items;
    /** @type {?} */
    NovoChipsElement.prototype.selected;
    /** @type {?} */
    NovoChipsElement.prototype.config;
    /** @type {?} */
    NovoChipsElement.prototype.model;
    /** @type {?} */
    NovoChipsElement.prototype.itemToAdd;
    /** @type {?} */
    NovoChipsElement.prototype.popup;
    /** @type {?} */
    NovoChipsElement.prototype._value;
    /** @type {?} */
    NovoChipsElement.prototype._items;
    /** @type {?} */
    NovoChipsElement.prototype.onModelChange;
    /** @type {?} */
    NovoChipsElement.prototype.onModelTouched;
    /** @type {?} */
    NovoChipsElement.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NovoChipsElement.prototype.componentUtils;
    /** @type {?} */
    NovoChipsElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0lBR3RFLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsRUFBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFBQTtRQWlCRSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0MsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBK0JuRCxDQUFDO0lBNUNDLHNCQUNJLGlDQUFJOzs7OztRQURSLFVBQ1MsSUFBWTtZQUNuQixJQUFJLENBQUMsS0FB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TixNQUFNO3VCQUVOLE1BQU07eUJBRU4sTUFBTTswQkFHTixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBMEI5RCxLQUFLOztJQW1NUix1QkFBQztDQUFBLEFBdFNELElBc1NDO1NBMVBZLGdCQUFnQjs7O0lBQzNCLHlDQUMrQjs7SUFDL0IsdUNBQ3lCOztJQUN6QixrQ0FDWTs7SUFDWixxQ0FDZTs7SUFDZixnQ0FDVTs7Ozs7SUFRViwrQ0FBNkM7O0lBRTdDLG1DQUNnRDs7SUFDaEQsaUNBQzhDOztJQUM5QyxnQ0FDNkM7O0lBQzdDLGtDQUMrQzs7SUFFL0MsbUNBQzBCOztJQUUxQixpQ0FBdUI7O0lBQ3ZCLG9DQUFxQjs7SUFDckIsa0NBQWlCOztJQUNqQixpQ0FBVzs7SUFDWCxxQ0FBZTs7SUFDZixpQ0FBVzs7SUFFWCxrQ0FBaUI7O0lBQ2pCLGtDQUE4Qjs7SUFFOUIseUNBQW1DOztJQUNuQywwQ0FBb0M7O0lBRXhCLG1DQUEwQjs7Ozs7SUFBRSwwQ0FBc0M7O0lBQUUsa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwLG5vdm8tY2hpcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJvblNlbGVjdCgkZXZlbnQpXCIgKG1vdXNlZW50ZXIpPVwib25TZWxlY3QoJGV2ZW50KVwiIChtb3VzZWxlYXZlKT1cIm9uRGVzZWxlY3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIl90eXBlXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIl90eXBlXCIgY2xhc3M9XCJiaGktY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1jbG9zZVwiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBFbGVtZW50IHtcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGUgPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZW50aXR5OiBzdHJpbmc7XG4gIF90eXBlOiBzdHJpbmc7XG5cbiAgb25SZW1vdmUoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3QuZW1pdChlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRlc2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5kZXNlbGVjdC5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcyxub3ZvLWNoaXBzJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jaGlwLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxub3ZvLWNoaXBcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmNcIlxuICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlIHx8IGl0ZW0/LnZhbHVlPy5zZWFyY2hFbnRpdHlcIlxuICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgICAocmVtb3ZlKT1cInJlbW92ZSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgICAgIChkZXNlbGVjdCk9XCJkZXNlbGVjdCgkZXZlbnQsIGl0ZW0pXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICA8L25vdm8tY2hpcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiICpuZ0lmPVwiIW1heGxlbmd0aCB8fCAobWF4bGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA8IG1heGxlbmd0aClcIj5cbiAgICAgICAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgICAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW1Ub0FkZFwiXG4gICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCI+XG4gICAgICAgICAgICA8L25vdm8tcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiBbY2xhc3MuaGFzLXZhbHVlXT1cIml0ZW1zLmxlbmd0aFwiICpuZ0lmPVwiIWRpc2FibGVQaWNrZXJJbnB1dFwiPjwvaT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2xlYXItYWxsXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj57eyBsYWJlbHMuY2xlYXJBbGwgfX0gPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+PC9sYWJlbD5cbiAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVQaWNrZXJJbnB1dCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGlwc0VsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIHNvdXJjZTogYW55O1xuICBASW5wdXQoKVxuICBtYXhsZW5ndGg6IGFueTtcbiAgQElucHV0KClcbiAgdHlwZTogYW55O1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBpY2tlcklucHV0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGRpc2FibGVQaWNrZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0O1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVQaWNrZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdHlwaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdwcmV2aWV3JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG4gIHByZXZpZXc6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIG1vZGVsOiBhbnk7XG4gIGl0ZW1Ub0FkZDogYW55O1xuICBwb3B1cDogYW55O1xuICAvLyBwcml2YXRlIGRhdGEgbW9kZWxcbiAgX3ZhbHVlOiBhbnkgPSAnJztcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIHRoaXMuaXRlbVRvQWRkID0gJyc7XG4gICAgaWYgKHNlbGVjdGVkICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgaWYgKHRoaXMubW9kZWwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLm1vZGVsKSkge1xuICAgICAgbGV0IG5vTGFiZWxzID0gW107XG4gICAgICBmb3IgKGxldCB2YWx1ZSBvZiB0aGlzLm1vZGVsKSB7XG4gICAgICAgIGxldCBsYWJlbDtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLmZvcm1hdCAmJiBIZWxwZXJzLnZhbGlkYXRlSW50ZXJwb2xhdGlvblByb3BzKHRoaXMuc291cmNlLmZvcm1hdCwgdmFsdWUpKSB7XG4gICAgICAgICAgbGFiZWwgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuc291cmNlLmZvcm1hdCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSAmJiBsYWJlbCAmJiBsYWJlbCAhPT0gdGhpcy5zb3VyY2UuZm9ybWF0KSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UuZ2V0TGFiZWxzICYmIHR5cGVvZiB0aGlzLnNvdXJjZS5nZXRMYWJlbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBub0xhYmVscy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZS5vcHRpb25zICYmIEFycmF5LmlzQXJyYXkodGhpcy5zb3VyY2Uub3B0aW9ucykpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5nZXRMYWJlbEZyb21PcHRpb25zKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UuY2F0ZWdvcnlNYXAgJiYgdGhpcy5zb3VyY2UuY2F0ZWdvcnlNYXAuc2l6ZSkge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbGFiZWw6IHZhbHVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm9MYWJlbHMubGVuZ3RoID4gMCAmJiB0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5nZXRMYWJlbHMgJiYgdHlwZW9mIHRoaXMuc291cmNlLmdldExhYmVscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnNvdXJjZS5nZXRMYWJlbHMobm9MYWJlbHMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdsYWJlbCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2Uub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc291cmNlLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmdldExhYmVsRnJvbU9wdGlvbnModmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgZ2V0TGFiZWxGcm9tT3B0aW9ucyh2YWx1ZSkge1xuICAgIGxldCBvcHRMYWJlbCA9IHRoaXMuc291cmNlLm9wdGlvbnMuZmluZCgodmFsKSA9PiB2YWwudmFsdWUgPT09IHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbDogb3B0TGFiZWwgPyBvcHRMYWJlbC5sYWJlbCA6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBkZXNlbGVjdEFsbChldmVudD8pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLmhpZGVQcmV2aWV3KCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gICAgdGhpcy5zaG93UHJldmlldygpO1xuICB9XG5cbiAgZGVzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gIH1cblxuICBvblR5cGluZyhldmVudD8pIHtcbiAgICB0aGlzLnR5cGluZy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRm9jdXMoZXZlbnQ/KSB7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGFkZChldmVudCkge1xuICAgIGlmIChldmVudCAmJiAhKGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goZXZlbnQpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyID8gdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIodGhpcy5pdGVtcykgOiB0aGlzLml0ZW1zLm1hcCgoaSkgPT4gaS52YWx1ZSk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgbGV0IGlucHV0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1waWNrZXIgPiBpbnB1dCcpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICByZW1vdmUoZXZlbnQsIGl0ZW0pIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyID8gdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIodGhpcy5pdGVtcykgOiB0aGlzLml0ZW1zLm1hcCgoaSkgPT4gaS52YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZS5sZW5ndGggPyB0aGlzLnZhbHVlIDogJycsIHJhd1ZhbHVlOiB0aGlzLml0ZW1zIH0pO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlLmxlbmd0aCA/IHRoaXMudmFsdWUgOiAnJyk7XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoZXZlbnQsIHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0KGV2ZW50LCB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuc2V0SXRlbXMoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2hvd1ByZXZpZXdcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHByZXZpZXcgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0XG4gICAqIGluc3RhbmNlLiBXaWxsIHJldXNlIHRoZSBwb3B1cCBvciBjcmVhdGUgYSBuZXcgb25lIGlmIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuIFdpbGwgb25seSB3b3JrIGlmIHRoZXJlIGlzXG4gICAqIGEgcHJldmlld1RlbXBsYXRlIGdpdmVuIGluIHRoZSBjb25maWcuXG4gICAqL1xuICBzaG93UHJldmlldygpIHtcbiAgICBpZiAodGhpcy5zb3VyY2UucHJldmlld1RlbXBsYXRlKSB7XG4gICAgICBpZiAoIXRoaXMucG9wdXApIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMuc291cmNlLnByZXZpZXdUZW1wbGF0ZSwgdGhpcy5wcmV2aWV3KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UubWF0Y2ggPSB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWRlUHJldmlld1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gLSBUaGlzIG1ldGhvZCBkZWxldGVzIHRoZSBwcmV2aWV3IHBvcHVwIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGhpZGVQcmV2aWV3KCkge1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICB0aGlzLnBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19