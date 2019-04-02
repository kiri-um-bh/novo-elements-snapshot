/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, EventEmitter, Input, Output, forwardRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { ReplaySubject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoChipsElement; }),
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
                    template: "\n    <span (click)=\"onSelect($event)\" (mouseenter)=\"onSelect($event)\" (mouseleave)=\"onDeselect($event)\" [ngClass]=\"_type\">\n      <i *ngIf=\"_type\" class=\"bhi-circle\"></i>\n      <span><ng-content></ng-content></span>\n    </span>\n    <i class=\"bhi-close\" *ngIf=\"!disabled\" (click)=\"onRemove($event)\"></i>\n  "
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
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
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
        var _this = this;
        var e_1, _a;
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
                this.source.getLabels(noLabels).then(function (result) {
                    var e_2, _a;
                    try {
                        for (var result_1 = tslib_1.__values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                            var value = result_1_1.value;
                            if (value.hasOwnProperty('label') && value.hasOwnProperty('value')) {
                                _this.items.push({
                                    value: value.value,
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
                });
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
        var optLabel = this.source.options.find(function (val) { return val.value === value; });
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
            this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map(function (i) { return i.value; });
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
        this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map(function (i) { return i.value; });
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
                this.popup = this.componentUtils.appendNextToLocation(this.source.previewTemplate, this.preview);
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
                    template: "\n    <div class=\"novo-chip-container\">\n      <novo-chip\n        *ngFor=\"let item of (_items | async)\"\n        [type]=\"type || item?.value?.searchEntity\"\n        [class.selected]=\"item == selected\"\n        [disabled]=\"disablePickerInput\"\n        (remove)=\"remove($event, item)\"\n        (select)=\"select($event, item)\"\n        (deselect)=\"deselect($event, item)\"\n      >\n        {{ item.label }}\n      </novo-chip>\n    </div>\n    <div class=\"chip-input-container\" *ngIf=\"!maxlength || (maxlength && items.length < maxlength)\">\n      <novo-picker\n        clearValueOnSelect=\"true\"\n        [closeOnSelect]=\"closeOnSelect\"\n        [config]=\"source\"\n        [disablePickerInput]=\"disablePickerInput\"\n        [placeholder]=\"placeholder\"\n        [(ngModel)]=\"itemToAdd\"\n        (select)=\"add($event)\"\n        (keydown)=\"onKeyDown($event)\"\n        (focus)=\"onFocus($event)\"\n        (typing)=\"onTyping($event)\"\n        (blur)=\"onTouched($event)\"\n        [selected]=\"items\"\n        [overrideElement]=\"element\"\n      >\n      </novo-picker>\n    </div>\n    <div class=\"preview-container\">\n      <span #preview></span>\n    </div>\n    <i class=\"bhi-search\" [class.has-value]=\"items.length\" *ngIf=\"!disablePickerInput\"></i>\n    <label class=\"clear-all\" *ngIf=\"items.length && !disablePickerInput\" (click)=\"clearValue()\"\n      >{{ labels.clearAll }} <i class=\"bhi-times\"></i\n    ></label>\n  ",
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
        preview: [{ type: ViewChild, args: ['preview', { read: ViewContainerRef },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7OztJQUd0RSxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUFBO1FBaUJFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUErQm5ELENBQUM7SUE1Q0Msc0JBQ0ksaUNBQUk7Ozs7O1FBRFIsVUFDUyxJQUFZO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdB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LEtBQUs7cUNBRUwsS0FBSzswQkFTTCxNQUFNO3dCQUVOLE1BQU07dUJBRU4sTUFBTTt5QkFFTixNQUFNOzBCQUdOLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBMEIvQyxLQUFLOztJQW1NUix1QkFBQztDQUFBLEFBMVNELElBMFNDO1NBMVBZLGdCQUFnQjs7O0lBQzNCLHlDQUMrQjs7SUFDL0IsdUNBQ3lCOztJQUN6QixrQ0FDWTs7SUFDWixxQ0FDZTs7SUFDZixnQ0FDVTs7Ozs7SUFRViwrQ0FBNkM7O0lBRTdDLG1DQUNnRDs7SUFDaEQsaUNBQzhDOztJQUM5QyxnQ0FDNkM7O0lBQzdDLGtDQUMrQzs7SUFFL0MsbUNBQzBCOztJQUUxQixpQ0FBdUI7O0lBQ3ZCLG9DQUFxQjs7SUFDckIsa0NBQWlCOztJQUNqQixpQ0FBVzs7SUFDWCxxQ0FBZTs7SUFDZixpQ0FBVzs7SUFFWCxrQ0FBaUI7O0lBQ2pCLGtDQUE4Qjs7SUFFOUIseUNBQW1DOztJQUNuQywwQ0FBb0M7O0lBRXhCLG1DQUEwQjs7Ozs7SUFBRSwwQ0FBc0M7O0lBQUUsa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgT3V0c2lkZUNsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwLG5vdm8tY2hpcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gKGNsaWNrKT1cIm9uU2VsZWN0KCRldmVudClcIiAobW91c2VlbnRlcik9XCJvblNlbGVjdCgkZXZlbnQpXCIgKG1vdXNlbGVhdmUpPVwib25EZXNlbGVjdCgkZXZlbnQpXCIgW25nQ2xhc3NdPVwiX3R5cGVcIj5cbiAgICAgIDxpICpuZ0lmPVwiX3R5cGVcIiBjbGFzcz1cImJoaS1jaXJjbGVcIj48L2k+XG4gICAgICA8c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8aSBjbGFzcz1cImJoaS1jbG9zZVwiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGlwRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlID8gdHlwZS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGVudGl0eTogc3RyaW5nO1xuICBfdHlwZTogc3RyaW5nO1xuXG4gIG9uUmVtb3ZlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmUuZW1pdChlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvblNlbGVjdChlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0LmVtaXQoZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25EZXNlbGVjdChlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMuZGVzZWxlY3QuZW1pdChlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMsbm92by1jaGlwcycsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibm92by1jaGlwLWNvbnRhaW5lclwiPlxuICAgICAgPG5vdm8tY2hpcFxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoX2l0ZW1zIHwgYXN5bmMpXCJcbiAgICAgICAgW3R5cGVdPVwidHlwZSB8fCBpdGVtPy52YWx1ZT8uc2VhcmNoRW50aXR5XCJcbiAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmUoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIlxuICAgICAgICAoZGVzZWxlY3QpPVwiZGVzZWxlY3QoJGV2ZW50LCBpdGVtKVwiXG4gICAgICA+XG4gICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgIDwvbm92by1jaGlwPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiICpuZ0lmPVwiIW1heGxlbmd0aCB8fCAobWF4bGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA8IG1heGxlbmd0aClcIj5cbiAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgICAgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW1Ub0FkZFwiXG4gICAgICAgIChzZWxlY3QpPVwiYWRkKCRldmVudClcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAodHlwaW5nKT1cIm9uVHlwaW5nKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJpdGVtc1wiXG4gICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICA+XG4gICAgICA8L25vdm8tcGlja2VyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgPHNwYW4gI3ByZXZpZXc+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiIFtjbGFzcy5oYXMtdmFsdWVdPVwiaXRlbXMubGVuZ3RoXCIgKm5nSWY9XCIhZGlzYWJsZVBpY2tlcklucHV0XCI+PC9pPlxuICAgIDxsYWJlbCBjbGFzcz1cImNsZWFyLWFsbFwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoICYmICFkaXNhYmxlUGlja2VySW5wdXRcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgpXCJcbiAgICAgID57eyBsYWJlbHMuY2xlYXJBbGwgfX0gPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2lcbiAgICA+PC9sYWJlbD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZVBpY2tlcklucHV0JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBzRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgc291cmNlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1heGxlbmd0aDogYW55O1xuICBASW5wdXQoKVxuICB0eXBlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGlja2VySW5wdXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZGlzYWJsZVBpY2tlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQ7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZVBpY2tlcklucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB0eXBpbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ByZXZpZXcnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgcHJldmlldzogVmlld0NvbnRhaW5lclJlZjtcblxuICBpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuICBzZWxlY3RlZDogYW55ID0gbnVsbDtcbiAgY29uZmlnOiBhbnkgPSB7fTtcbiAgbW9kZWw6IGFueTtcbiAgaXRlbVRvQWRkOiBhbnk7XG4gIHBvcHVwOiBhbnk7XG4gIC8vIHByaXZhdGUgZGF0YSBtb2RlbFxuICBfdmFsdWU6IGFueSA9ICcnO1xuICBfaXRlbXMgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgLy8gUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscywgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEl0ZW1zKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5pdGVtVG9BZGQgPSAnJztcbiAgICBpZiAoc2VsZWN0ZWQgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogc2VsZWN0ZWQsIHJhd1ZhbHVlOiB0aGlzLml0ZW1zIH0pO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHRoaXMudmFsdWUsIHJhd1ZhbHVlOiB0aGlzLml0ZW1zIH0pO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICBpZiAodGhpcy5tb2RlbCAmJiBBcnJheS5pc0FycmF5KHRoaXMubW9kZWwpKSB7XG4gICAgICBsZXQgbm9MYWJlbHMgPSBbXTtcbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIHRoaXMubW9kZWwpIHtcbiAgICAgICAgbGV0IGxhYmVsO1xuICAgICAgICBpZiAodGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UuZm9ybWF0ICYmIEhlbHBlcnMudmFsaWRhdGVJbnRlcnBvbGF0aW9uUHJvcHModGhpcy5zb3VyY2UuZm9ybWF0LCB2YWx1ZSkpIHtcbiAgICAgICAgICBsYWJlbCA9IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5zb3VyY2UuZm9ybWF0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc291cmNlICYmIGxhYmVsICYmIGxhYmVsICE9PSB0aGlzLnNvdXJjZS5mb3JtYXQpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZS5nZXRMYWJlbHMgJiYgdHlwZW9mIHRoaXMuc291cmNlLmdldExhYmVscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG5vTGFiZWxzLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnNvdXJjZS5vcHRpb25zKSkge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmdldExhYmVsRnJvbU9wdGlvbnModmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZS5jYXRlZ29yeU1hcCAmJiB0aGlzLnNvdXJjZS5jYXRlZ29yeU1hcC5zaXplKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogdmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub0xhYmVscy5sZW5ndGggPiAwICYmIHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLmdldExhYmVscyAmJiB0eXBlb2YgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuc291cmNlLmdldExhYmVscyhub0xhYmVscykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2Uub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc291cmNlLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmdldExhYmVsRnJvbU9wdGlvbnModmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgZ2V0TGFiZWxGcm9tT3B0aW9ucyh2YWx1ZSkge1xuICAgIGxldCBvcHRMYWJlbCA9IHRoaXMuc291cmNlLm9wdGlvbnMuZmluZCgodmFsKSA9PiB2YWwudmFsdWUgPT09IHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbDogb3B0TGFiZWwgPyBvcHRMYWJlbC5sYWJlbCA6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBkZXNlbGVjdEFsbChldmVudD8pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLmhpZGVQcmV2aWV3KCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gICAgdGhpcy5zaG93UHJldmlldygpO1xuICB9XG5cbiAgZGVzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gIH1cblxuICBvblR5cGluZyhldmVudD8pIHtcbiAgICB0aGlzLnR5cGluZy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRm9jdXMoZXZlbnQ/KSB7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGFkZChldmVudCkge1xuICAgIGlmIChldmVudCAmJiAhKGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goZXZlbnQpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyID8gdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIodGhpcy5pdGVtcykgOiB0aGlzLml0ZW1zLm1hcCgoaSkgPT4gaS52YWx1ZSk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgbGV0IGlucHV0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1waWNrZXIgPiBpbnB1dCcpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICByZW1vdmUoZXZlbnQsIGl0ZW0pIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyID8gdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIodGhpcy5pdGVtcykgOiB0aGlzLml0ZW1zLm1hcCgoaSkgPT4gaS52YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZS5sZW5ndGggPyB0aGlzLnZhbHVlIDogJycsIHJhd1ZhbHVlOiB0aGlzLml0ZW1zIH0pO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlLmxlbmd0aCA/IHRoaXMudmFsdWUgOiAnJyk7XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoZXZlbnQsIHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0KGV2ZW50LCB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuc2V0SXRlbXMoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2hvd1ByZXZpZXdcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHByZXZpZXcgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0XG4gICAqIGluc3RhbmNlLiBXaWxsIHJldXNlIHRoZSBwb3B1cCBvciBjcmVhdGUgYSBuZXcgb25lIGlmIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuIFdpbGwgb25seSB3b3JrIGlmIHRoZXJlIGlzXG4gICAqIGEgcHJldmlld1RlbXBsYXRlIGdpdmVuIGluIHRoZSBjb25maWcuXG4gICAqL1xuICBzaG93UHJldmlldygpIHtcbiAgICBpZiAodGhpcy5zb3VyY2UucHJldmlld1RlbXBsYXRlKSB7XG4gICAgICBpZiAoIXRoaXMucG9wdXApIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kTmV4dFRvTG9jYXRpb24odGhpcy5zb3VyY2UucHJldmlld1RlbXBsYXRlLCB0aGlzLnByZXZpZXcpO1xuICAgICAgfVxuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5tYXRjaCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZGVQcmV2aWV3XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiAtIFRoaXMgbWV0aG9kIGRlbGV0ZXMgdGhlIHByZXZpZXcgcG9wdXAgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgaGlkZVByZXZpZXcoKSB7XG4gICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgIHRoaXMucG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=