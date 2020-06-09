import { __values } from "tslib";
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../utils/component-utils/ComponentUtils";
import * as i3 from "../../services/novo-label-service";
import * as i4 from "../picker/Picker";
import * as i5 from "@angular/forms";
function NovoChipElement_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} }
function NovoChipElement_i_4_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 4);
    i0.ɵɵlistener("click", function NovoChipElement_i_4_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove($event); });
    i0.ɵɵelementEnd();
} }
var _c0 = ["*"];
var _c1 = ["preview"];
function NovoChipsElement_novo_chip_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-chip", 7);
    i0.ɵɵlistener("remove", function NovoChipsElement_novo_chip_1_Template_novo_chip_remove_0_listener($event) { i0.ɵɵrestoreView(_r7); var item_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.remove($event, item_r5); })("select", function NovoChipsElement_novo_chip_1_Template_novo_chip_select_0_listener($event) { i0.ɵɵrestoreView(_r7); var item_r5 = ctx.$implicit; var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.select($event, item_r5); })("deselect", function NovoChipsElement_novo_chip_1_Template_novo_chip_deselect_0_listener($event) { i0.ɵɵrestoreView(_r7); var item_r5 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.deselect($event, item_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r5 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", item_r5 == ctx_r0.selected);
    i0.ɵɵproperty("type", ctx_r0.type || (item_r5 == null ? null : item_r5.value == null ? null : item_r5.value.searchEntity))("disabled", ctx_r0.disablePickerInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r5.label, " ");
} }
function NovoChipsElement_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "novo-picker", 9);
    i0.ɵɵlistener("ngModelChange", function NovoChipsElement_div_3_Template_novo_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.itemToAdd = $event; })("select", function NovoChipsElement_div_3_Template_novo_picker_select_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.add($event); })("keydown", function NovoChipsElement_div_3_Template_novo_picker_keydown_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onKeyDown($event); })("focus", function NovoChipsElement_div_3_Template_novo_picker_focus_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onFocus($event); })("typing", function NovoChipsElement_div_3_Template_novo_picker_typing_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onTyping($event); })("blur", function NovoChipsElement_div_3_Template_novo_picker_blur_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onTouched($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("closeOnSelect", ctx_r1.closeOnSelect)("config", ctx_r1.source)("disablePickerInput", ctx_r1.disablePickerInput)("placeholder", ctx_r1.placeholder)("ngModel", ctx_r1.itemToAdd)("selected", ctx_r1.items)("overrideElement", ctx_r1.element);
} }
function NovoChipsElement_i_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("has-value", ctx_r3.items.length);
} }
function NovoChipsElement_label_8_Template(rf, ctx) { if (rf & 1) {
    var _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 11);
    i0.ɵɵlistener("click", function NovoChipsElement_label_8_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r18); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.clearValue(); });
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "i", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r4.labels.clearAll, " ");
} }
// Value accessor for the component (supports ngModel)
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
        set: function (type) {
            this._type = type ? type.toLowerCase() : null;
        },
        enumerable: true,
        configurable: true
    });
    NovoChipElement.prototype.onRemove = function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.remove.emit(e);
        return false;
    };
    NovoChipElement.prototype.onSelect = function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.select.emit(e);
        return false;
    };
    NovoChipElement.prototype.onDeselect = function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.deselect.emit(e);
        return false;
    };
    NovoChipElement.ɵfac = function NovoChipElement_Factory(t) { return new (t || NovoChipElement)(); };
    NovoChipElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoChipElement, selectors: [["chip"], ["novo-chip"]], inputs: { type: "type", disabled: "disabled" }, outputs: { select: "select", remove: "remove", deselect: "deselect" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[3, "ngClass", "click", "mouseenter", "mouseleave"], ["class", "bhi-circle", 4, "ngIf"], ["class", "bhi-close", 3, "click", 4, "ngIf"], [1, "bhi-circle"], [1, "bhi-close", 3, "click"]], template: function NovoChipElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵlistener("click", function NovoChipElement_Template_span_click_0_listener($event) { return ctx.onSelect($event); })("mouseenter", function NovoChipElement_Template_span_mouseenter_0_listener($event) { return ctx.onSelect($event); })("mouseleave", function NovoChipElement_Template_span_mouseleave_0_listener($event) { return ctx.onDeselect($event); });
            i0.ɵɵtemplate(1, NovoChipElement_i_1_Template, 1, 0, "i", 1);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, NovoChipElement_i_4_Template, 1, 0, "i", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx._type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._type);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.disabled);
        } }, directives: [i1.NgClass, i1.NgIf], encapsulation: 2 });
    return NovoChipElement;
}());
export { NovoChipElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoChipElement, [{
        type: Component,
        args: [{
                selector: 'chip,novo-chip',
                template: "\n        <span (click)=\"onSelect($event)\" (mouseenter)=\"onSelect($event)\" (mouseleave)=\"onDeselect($event)\" [ngClass]=\"_type\">\n            <i *ngIf=\"_type\" class=\"bhi-circle\"></i>\n            <span><ng-content></ng-content></span>\n        </span>\n        <i class=\"bhi-close\" *ngIf=\"!disabled\" (click)=\"onRemove($event)\"></i>\n    ",
            }]
    }], null, { type: [{
            type: Input
        }], disabled: [{
            type: Input
        }], select: [{
            type: Output
        }], remove: [{
            type: Output
        }], deselect: [{
            type: Output
        }] }); })();
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
        get: function () {
            return this._disablePickerInput;
        },
        set: function (v) {
            this._disablePickerInput = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    NovoChipsElement.prototype.ngOnInit = function () {
        this.setItems();
    };
    Object.defineProperty(NovoChipsElement.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (selected) {
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
    NovoChipsElement.prototype.clearValue = function () {
        this.items = [];
        this._items.next(this.items);
        this.value = null;
        this.changed.emit({ value: this.value, rawValue: this.items });
        this.onModelChange(this.value);
    };
    NovoChipsElement.prototype.setItems = function () {
        var e_1, _a;
        var _this = this;
        this.items = [];
        if (this.model && Array.isArray(this.model)) {
            var noLabels = [];
            try {
                for (var _b = __values(this.model), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
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
                        for (var result_1 = __values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
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
                });
            }
        }
        this.changed.emit({ value: this.model, rawValue: this.items });
        this._items.next(this.items);
    };
    NovoChipsElement.prototype.getLabelFromOptions = function (value) {
        var id = value;
        var optLabel = this.source.options.find(function (val) { return val.value === value; });
        if (!optLabel && value.hasOwnProperty('id')) {
            optLabel = this.source.options.find(function (val) { return val.value === value.id; });
            id = value.id;
        }
        return {
            value: id,
            label: optLabel ? optLabel.label : value,
        };
    };
    NovoChipsElement.prototype.deselectAll = function (event) {
        this.selected = null;
        this.hidePreview();
    };
    NovoChipsElement.prototype.select = function (event, item) {
        this.blur.emit(event);
        this.deselectAll();
        this.selected = item;
        this.showPreview();
    };
    NovoChipsElement.prototype.deselect = function (event, item) {
        this.blur.emit(event);
        this.deselectAll();
    };
    NovoChipsElement.prototype.onTyping = function (event) {
        this.typing.emit(event);
    };
    NovoChipsElement.prototype.onFocus = function (event) {
        this.deselectAll();
        this.element.nativeElement.classList.add('selected');
        this.focus.emit(event);
    };
    NovoChipsElement.prototype.add = function (event) {
        if (event && !(event instanceof Event)) {
            this.items.push(event);
            this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map(function (i) { return i.value; });
            // Set focus on the picker
            var input = this.element.nativeElement.querySelector('novo-picker > input');
            if (input) {
                input.focus();
            }
        }
        this._items.next(this.items);
    };
    NovoChipsElement.prototype.remove = function (event, item) {
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
    NovoChipsElement.prototype.onKeyDown = function (event) {
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
    NovoChipsElement.prototype.onTouched = function (e) {
        this.element.nativeElement.classList.remove('selected');
        this.onModelTouched();
        this.blur.emit(e);
    };
    NovoChipsElement.prototype.writeValue = function (model) {
        this.model = model;
        this.setItems();
    };
    NovoChipsElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    NovoChipsElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    NovoChipsElement.prototype.setDisabledState = function (disabled) {
        this._disablePickerInput = disabled;
    };
    /**
     * @description This method creates an instance of the preview (called popup) and adds all the bindings to that
     * instance. Will reuse the popup or create a new one if it does not already exist. Will only work if there is
     * a previewTemplate given in the config.
     */
    NovoChipsElement.prototype.showPreview = function () {
        if (this.source.previewTemplate) {
            if (!this.popup) {
                this.popup = this.componentUtils.append(this.source.previewTemplate, this.preview);
            }
            this.popup.instance.match = this.selected;
        }
    };
    /**
     * @description - This method deletes the preview popup from the DOM.
     */
    NovoChipsElement.prototype.hidePreview = function () {
        if (this.popup) {
            this.popup.destroy();
            this.popup = null;
        }
    };
    NovoChipsElement.ɵfac = function NovoChipsElement_Factory(t) { return new (t || NovoChipsElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.ComponentUtils), i0.ɵɵdirectiveInject(i3.NovoLabelService)); };
    NovoChipsElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoChipsElement, selectors: [["chips"], ["novo-chips"]], viewQuery: function NovoChipsElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c1, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.preview = _t.first);
        } }, hostVars: 4, hostBindings: function NovoChipsElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("with-value", ctx.items.length > 0)("disabled", ctx.disablePickerInput);
        } }, inputs: { closeOnSelect: "closeOnSelect", placeholder: "placeholder", source: "source", maxlength: "maxlength", type: "type", disablePickerInput: "disablePickerInput", value: "value" }, outputs: { changed: "changed", focus: "focus", blur: "blur", typing: "typing" }, features: [i0.ɵɵProvidersFeature([CHIPS_VALUE_ACCESSOR])], decls: 9, vars: 6, consts: [[1, "novo-chip-container"], [3, "type", "selected", "disabled", "remove", "select", "deselect", 4, "ngFor", "ngForOf"], ["class", "chip-input-container", 4, "ngIf"], [1, "preview-container"], ["preview", ""], ["class", "bhi-search", 3, "has-value", 4, "ngIf"], ["class", "clear-all", 3, "click", 4, "ngIf"], [3, "type", "disabled", "remove", "select", "deselect"], [1, "chip-input-container"], ["clearValueOnSelect", "true", 3, "closeOnSelect", "config", "disablePickerInput", "placeholder", "ngModel", "selected", "overrideElement", "ngModelChange", "select", "keydown", "focus", "typing", "blur"], [1, "bhi-search"], [1, "clear-all", 3, "click"], [1, "bhi-times"]], template: function NovoChipsElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NovoChipsElement_novo_chip_1_Template, 2, 5, "novo-chip", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, NovoChipsElement_div_3_Template, 2, 7, "div", 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "span", null, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, NovoChipsElement_i_7_Template, 1, 2, "i", 5);
            i0.ɵɵtemplate(8, NovoChipsElement_label_8_Template, 3, 1, "label", 6);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 4, ctx._items));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.maxlength || ctx.maxlength && ctx.items.length < ctx.maxlength);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.disablePickerInput);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.items.length && !ctx.disablePickerInput);
        } }, directives: [i1.NgForOf, i1.NgIf, NovoChipElement, i4.NovoPickerElement, i5.NgControlStatus, i5.NgModel], pipes: [i1.AsyncPipe], encapsulation: 2 });
    return NovoChipsElement;
}());
export { NovoChipsElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoChipsElement, [{
        type: Component,
        args: [{
                selector: 'chips,novo-chips',
                providers: [CHIPS_VALUE_ACCESSOR],
                template: "\n        <div class=\"novo-chip-container\">\n          <novo-chip\n              *ngFor=\"let item of _items | async\"\n              [type]=\"type || item?.value?.searchEntity\"\n              [class.selected]=\"item == selected\"\n              [disabled]=\"disablePickerInput\"\n              (remove)=\"remove($event, item)\"\n              (select)=\"select($event, item)\"\n              (deselect)=\"deselect($event, item)\">\n              {{ item.label }}\n          </novo-chip>\n        </div>\n        <div class=\"chip-input-container\" *ngIf=\"!maxlength || (maxlength && items.length < maxlength)\">\n            <novo-picker\n                clearValueOnSelect=\"true\"\n                [closeOnSelect]=\"closeOnSelect\"\n                [config]=\"source\"\n                [disablePickerInput]=\"disablePickerInput\"\n                [placeholder]=\"placeholder\"\n                [(ngModel)]=\"itemToAdd\"\n                (select)=\"add($event)\"\n                (keydown)=\"onKeyDown($event)\"\n                (focus)=\"onFocus($event)\"\n                (typing)=\"onTyping($event)\"\n                (blur)=\"onTouched($event)\"\n                [selected]=\"items\"\n                [overrideElement]=\"element\">\n            </novo-picker>\n        </div>\n        <div class=\"preview-container\">\n            <span #preview></span>\n        </div>\n        <i class=\"bhi-search\" [class.has-value]=\"items.length\" *ngIf=\"!disablePickerInput\"></i>\n        <label class=\"clear-all\" *ngIf=\"items.length && !disablePickerInput\" (click)=\"clearValue()\">{{ labels.clearAll }} <i class=\"bhi-times\"></i></label>\n   ",
                host: {
                    '[class.with-value]': 'items.length > 0',
                    '[class.disabled]': 'disablePickerInput',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i2.ComponentUtils }, { type: i3.NovoLabelService }]; }, { closeOnSelect: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], source: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], type: [{
            type: Input
        }], disablePickerInput: [{
            type: Input
        }], changed: [{
            type: Output
        }], focus: [{
            type: Output
        }], blur: [{
            type: Output
        }], typing: [{
            type: Output
        }], preview: [{
            type: ViewChild,
            args: ['preview', { read: ViewContainerRef }]
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxTQUFTO0FBQ1QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7O0lBYWhFLHVCQUF3Qzs7OztJQUc1Qyw0QkFBc0U7SUFBL0Isb0xBQTBCO0lBQUMsaUJBQUk7Ozs7OztJQXVEcEUsb0NBUUk7SUFIQSwyT0FBK0IsOE5BQUEsb09BQUE7SUFHL0IsWUFDSjtJQUFBLGlCQUFZOzs7O0lBTlIsc0RBQW1DO0lBRG5DLDBIQUEwQyx1Q0FBQTtJQU0xQyxlQUNKO0lBREksOENBQ0o7Ozs7SUFFRiw4QkFDSTtJQUFBLHNDQWNjO0lBUlYsc05BQXVCLG9MQUFBLDRMQUFBLHNMQUFBLHlMQUFBLHNMQUFBO0lBUTNCLGlCQUFjO0lBQ2xCLGlCQUFNOzs7SUFiRSxlQUErQjtJQUEvQixvREFBK0IseUJBQUEsaURBQUEsbUNBQUEsNkJBQUEsMEJBQUEsbUNBQUE7OztJQWlCdkMsd0JBQXVGOzs7SUFBakUsZ0RBQWdDOzs7O0lBQ3RELGlDQUE0RjtJQUF2QixzTEFBc0I7SUFBQyxZQUFzQjtJQUFBLHdCQUF5QjtJQUFBLGlCQUFROzs7SUFBdkQsZUFBc0I7SUFBdEIsc0RBQXNCOztBQXJHMUgsc0RBQXNEO0FBQ3RELElBQU0sb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRjtJQUFBO1FBaUJFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0ErQmxEO0lBNUNDLHNCQUNJLGlDQUFJO2FBRFIsVUFDUyxJQUFZO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQWVELGtDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztrRkE1Q1UsZUFBZTt3REFBZixlQUFlOztZQVBwQiwrQkFDSTtZQURFLGdHQUFTLG9CQUFnQixJQUFDLDZGQUFlLG9CQUFnQixJQUEvQiw2RkFBK0Msc0JBQWtCLElBQWpFO1lBQzVCLDREQUFvQztZQUNwQyw0QkFBTTtZQUFBLGtCQUFZO1lBQWEsaUJBQU87WUFDMUMsaUJBQU87WUFDUCw0REFBa0U7O1lBSmlDLG1DQUFpQjtZQUM3RyxlQUFhO1lBQWIsZ0NBQWE7WUFHQyxlQUFpQjtZQUFqQixvQ0FBaUI7OzBCQTFCOUM7Q0EwRUMsQUF2REQsSUF1REM7U0E3Q1ksZUFBZTtrREFBZixlQUFlO2NBVjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsb1dBTVA7YUFDSjs7a0JBRUUsS0FBSzs7a0JBS0wsS0FBSzs7a0JBR0wsTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7QUFrQ1Q7SUF5RkUsMEJBQW1CLE9BQW1CLEVBQVUsY0FBOEIsRUFBUyxNQUF3QjtRQUE1RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUEzQy9HLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBY2pCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUc3QyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLL0MsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFJakIscUJBQXFCO1FBQ3JCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGlDQUFpQztRQUNqQyxrQkFBYSxHQUFhLGNBQU8sQ0FBQyxDQUFDO1FBQ25DLG1CQUFjLEdBQWEsY0FBTyxDQUFDLENBQUM7SUFFOEUsQ0FBQztJQWxDbkgsc0JBQ0ksZ0RBQWtCO2FBR3RCO1lBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQzthQU5ELFVBQ3VCLENBQVU7WUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBaUNELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFJLG1DQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQ1UsUUFBUTtZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQVZBO0lBWUQscUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQVEsR0FBUjs7UUFBQSxpQkErQ0M7UUE5Q0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNDLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ3BCLEtBQW9CLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTNCLElBQU0sS0FBSyxXQUFBO29CQUNkLElBQUksS0FBSyxTQUFBLENBQUM7b0JBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDdEcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3hEO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO3dCQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDZCxLQUFLLE9BQUE7NEJBQ0wsS0FBSyxPQUFBO3lCQUNOLENBQUMsQ0FBQztxQkFDSjt5QkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO3dCQUMvRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0Qjt5QkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ2xEO3lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO3dCQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ2QsS0FBSyxPQUFBOzRCQUNMLEtBQUssRUFBRSxLQUFLO3lCQUNiLENBQUMsQ0FBQztxQkFDSjtpQkFDRjs7Ozs7Ozs7O1lBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO2dCQUM5RyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNOzs7d0JBQzFDLEtBQW9CLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTs0QkFBdkIsSUFBTSxLQUFLLG1CQUFBOzRCQUNkLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQ0FDakMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0NBQ2QsS0FBSyxPQUFBO29DQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztpQ0FDbkIsQ0FBQyxDQUFDOzZCQUNKO2lDQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dDQUNwRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs2QkFDbEQ7aUNBQU07Z0NBQ0wsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ3hCO3lCQUNGOzs7Ozs7Ozs7b0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixLQUFLO1FBQ3ZCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNmLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztZQUNyRSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztTQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxLQUFNO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEtBQU0sRUFBRSxJQUFLO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxLQUFNLEVBQUUsSUFBSztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxLQUFNO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxLQUFNO1FBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDhCQUFHLEdBQUgsVUFBSSxLQUFLO1FBQ1AsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO1lBQ2pJLDBCQUEwQjtZQUMxQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM5RSxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZjtTQUNGO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sS0FBSyxFQUFFLElBQUk7UUFDaEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3hDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN4RSxJQUFJLEtBQUssRUFBRTtvQkFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELHNCQUFzQjtJQUN0QixvQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwRjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDO29GQTFQVSxnQkFBZ0I7eURBQWhCLGdCQUFnQjtzQ0E2QkcsZ0JBQWdCOzs7Ozs7eVRBdkVuQyxDQUFDLG9CQUFvQixDQUFDO1lBRTNCLDhCQUNFO1lBQUEsNkVBUUk7O1lBRU4saUJBQU07WUFDTixpRUFDSTtZQWdCSiw4QkFDSTtZQUFBLGdDQUFzQjtZQUMxQixpQkFBTTtZQUNOLDZEQUFtRjtZQUNuRixxRUFBNEY7O1lBL0J0RixlQUFtQztZQUFuQywwREFBbUM7WUFVUCxlQUE2RDtZQUE3RCwwRkFBNkQ7WUFvQnhDLGVBQTJCO1lBQTNCLDhDQUEyQjtZQUN6RCxlQUEyQztZQUEzQyxrRUFBMkM7K0NBcEYvRCxlQUFlOzJCQTdCNUI7Q0FtWEMsQUF2U0QsSUF1U0M7U0EzUFksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0E1QzVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDakMsUUFBUSxFQUFFLHVuREFtQ1I7Z0JBQ0YsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLGtCQUFrQjtvQkFDeEMsa0JBQWtCLEVBQUUsb0JBQW9CO2lCQUN6QzthQUNGOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFTTCxNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNOztrQkFHTixTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7a0JBMEIvQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwLG5vdm8tY2hpcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJvblNlbGVjdCgkZXZlbnQpXCIgKG1vdXNlZW50ZXIpPVwib25TZWxlY3QoJGV2ZW50KVwiIChtb3VzZWxlYXZlKT1cIm9uRGVzZWxlY3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIl90eXBlXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIl90eXBlXCIgY2xhc3M9XCJiaGktY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1jbG9zZVwiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBFbGVtZW50IHtcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGUgPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZW50aXR5OiBzdHJpbmc7XG4gIF90eXBlOiBzdHJpbmc7XG5cbiAgb25SZW1vdmUoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3QuZW1pdChlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRlc2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5kZXNlbGVjdC5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcyxub3ZvLWNoaXBzJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jaGlwLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxub3ZvLWNoaXBcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmNcIlxuICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlIHx8IGl0ZW0/LnZhbHVlPy5zZWFyY2hFbnRpdHlcIlxuICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgICAocmVtb3ZlKT1cInJlbW92ZSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgICAgIChkZXNlbGVjdCk9XCJkZXNlbGVjdCgkZXZlbnQsIGl0ZW0pXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICA8L25vdm8tY2hpcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiICpuZ0lmPVwiIW1heGxlbmd0aCB8fCAobWF4bGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA8IG1heGxlbmd0aClcIj5cbiAgICAgICAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgICAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW1Ub0FkZFwiXG4gICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCI+XG4gICAgICAgICAgICA8L25vdm8tcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiBbY2xhc3MuaGFzLXZhbHVlXT1cIml0ZW1zLmxlbmd0aFwiICpuZ0lmPVwiIWRpc2FibGVQaWNrZXJJbnB1dFwiPjwvaT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2xlYXItYWxsXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj57eyBsYWJlbHMuY2xlYXJBbGwgfX0gPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+PC9sYWJlbD5cbiAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVQaWNrZXJJbnB1dCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGlwc0VsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIHNvdXJjZTogYW55O1xuICBASW5wdXQoKVxuICBtYXhsZW5ndGg6IGFueTtcbiAgQElucHV0KClcbiAgdHlwZTogYW55O1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBpY2tlcklucHV0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGRpc2FibGVQaWNrZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0O1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVQaWNrZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdHlwaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdwcmV2aWV3JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHByZXZpZXc6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIG1vZGVsOiBhbnk7XG4gIGl0ZW1Ub0FkZDogYW55O1xuICBwb3B1cDogYW55O1xuICAvLyBwcml2YXRlIGRhdGEgbW9kZWxcbiAgX3ZhbHVlOiBhbnkgPSAnJztcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIHRoaXMuaXRlbVRvQWRkID0gJyc7XG4gICAgaWYgKHNlbGVjdGVkICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgaWYgKHRoaXMubW9kZWwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLm1vZGVsKSkge1xuICAgICAgY29uc3Qgbm9MYWJlbHMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5tb2RlbCkge1xuICAgICAgICBsZXQgbGFiZWw7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5mb3JtYXQgJiYgSGVscGVycy52YWxpZGF0ZUludGVycG9sYXRpb25Qcm9wcyh0aGlzLnNvdXJjZS5mb3JtYXQsIHZhbHVlKSkge1xuICAgICAgICAgIGxhYmVsID0gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLnNvdXJjZS5mb3JtYXQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3VyY2UgJiYgbGFiZWwgJiYgbGFiZWwgIT09IHRoaXMuc291cmNlLmZvcm1hdCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLmdldExhYmVscyAmJiB0eXBlb2YgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbm9MYWJlbHMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2Uub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc291cmNlLm9wdGlvbnMpKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZ2V0TGFiZWxGcm9tT3B0aW9ucyh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLmNhdGVnb3J5TWFwICYmIHRoaXMuc291cmNlLmNhdGVnb3J5TWFwLnNpemUpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vTGFiZWxzLmxlbmd0aCA+IDAgJiYgdGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzICYmIHR5cGVvZiB0aGlzLnNvdXJjZS5nZXRMYWJlbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzKG5vTGFiZWxzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdsYWJlbCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2Uub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc291cmNlLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmdldExhYmVsRnJvbU9wdGlvbnModmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgZ2V0TGFiZWxGcm9tT3B0aW9ucyh2YWx1ZSkge1xuICAgIGxldCBpZCA9IHZhbHVlO1xuICAgIGxldCBvcHRMYWJlbCA9IHRoaXMuc291cmNlLm9wdGlvbnMuZmluZCgodmFsKSA9PiB2YWwudmFsdWUgPT09IHZhbHVlKTtcbiAgICBpZiAoIW9wdExhYmVsICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdpZCcpKSB7XG4gICAgICBvcHRMYWJlbCA9IHRoaXMuc291cmNlLm9wdGlvbnMuZmluZCgodmFsKSA9PiB2YWwudmFsdWUgPT09IHZhbHVlLmlkKTtcbiAgICAgIGlkID0gdmFsdWUuaWQ7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaWQsXG4gICAgICBsYWJlbDogb3B0TGFiZWwgPyBvcHRMYWJlbC5sYWJlbCA6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBkZXNlbGVjdEFsbChldmVudD8pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLmhpZGVQcmV2aWV3KCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gICAgdGhpcy5zaG93UHJldmlldygpO1xuICB9XG5cbiAgZGVzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gIH1cblxuICBvblR5cGluZyhldmVudD8pIHtcbiAgICB0aGlzLnR5cGluZy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRm9jdXMoZXZlbnQ/KSB7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGFkZChldmVudCkge1xuICAgIGlmIChldmVudCAmJiAhKGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goZXZlbnQpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyID8gdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIodGhpcy5pdGVtcykgOiB0aGlzLml0ZW1zLm1hcCgoaSkgPT4gaS52YWx1ZSk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXBpY2tlciA+IGlucHV0Jyk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIHJlbW92ZShldmVudCwgaXRlbSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIgPyB0aGlzLnNvdXJjZS52YWx1ZUZvcm1hdHRlcih0aGlzLml0ZW1zKSA6IHRoaXMuaXRlbXMubWFwKChpKSA9PiBpLnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLmxlbmd0aCA/IHRoaXMudmFsdWUgOiAnJywgcmF3VmFsdWU6IHRoaXMuaXRlbXMgfSk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUubGVuZ3RoID8gdGhpcy52YWx1ZSA6ICcnKTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09PSAwICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShldmVudCwgdGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3QoZXZlbnQsIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcHJldmlldyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXRcbiAgICogaW5zdGFuY2UuIFdpbGwgcmV1c2UgdGhlIHBvcHVwIG9yIGNyZWF0ZSBhIG5ldyBvbmUgaWYgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC4gV2lsbCBvbmx5IHdvcmsgaWYgdGhlcmUgaXNcbiAgICogYSBwcmV2aWV3VGVtcGxhdGUgZ2l2ZW4gaW4gdGhlIGNvbmZpZy5cbiAgICovXG4gIHNob3dQcmV2aWV3KCkge1xuICAgIGlmICh0aGlzLnNvdXJjZS5wcmV2aWV3VGVtcGxhdGUpIHtcbiAgICAgIGlmICghdGhpcy5wb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5zb3VyY2UucHJldmlld1RlbXBsYXRlLCB0aGlzLnByZXZpZXcpO1xuICAgICAgfVxuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5tYXRjaCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiAtIFRoaXMgbWV0aG9kIGRlbGV0ZXMgdGhlIHByZXZpZXcgcG9wdXAgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgaGlkZVByZXZpZXcoKSB7XG4gICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgIHRoaXMucG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=