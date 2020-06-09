import { __read } from "tslib";
// NG
import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Output, ViewChild, EventEmitter, HostBinding, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TAB, ENTER, ESCAPE } from '@angular/cdk/keycodes';
// Vendor
import * as dateFns from 'date-fns';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
// App
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { DateFormatService } from '../../services/date-format/DateFormat';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../../services/date-format/DateFormat";
import * as i3 from "@angular/forms";
import * as i4 from "angular2-text-mask";
import * as i5 from "@angular/common";
import * as i6 from "../overlay/Overlay";
import * as i7 from "./DatePicker";
function NovoDatePickerInputElement_i_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵlistener("click", function NovoDatePickerInputElement_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.openPanel(); });
    i0.ɵɵelementEnd();
} }
function NovoDatePickerInputElement_i_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 7);
    i0.ɵɵlistener("click", function NovoDatePickerInputElement_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.clearValue(); });
    i0.ɵɵelementEnd();
} }
// Value accessor for the component (supports ngModel)
var DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoDatePickerInputElement; }),
    multi: true,
};
var NovoDatePickerInputElement = /** @class */ (function () {
    function NovoDatePickerInputElement(element, labels, _changeDetectorRef, dateFormatService) {
        this.element = element;
        this.labels = labels;
        this._changeDetectorRef = _changeDetectorRef;
        this.dateFormatService = dateFormatService;
        this.formattedValue = '';
        /** View -> model callback called when value changes */
        this._onChange = function () { };
        /** View -> model callback called when autocomplete has been touched */
        this._onTouched = function () { };
        this.textMaskEnabled = true;
        this.allowInvalidDate = false;
        this.disabled = false;
        this.weekStart = 0;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.placeholder = this.labels.dateFormatString().toUpperCase() || this.labels.dateFormatPlaceholder;
    }
    NovoDatePickerInputElement.prototype.ngOnInit = function () {
        this.userDefinedFormat = this.format ? !this.format.match(/^(DD\/MM\/YYYY|MM\/DD\/YYYY)$/g) : false;
        if (!this.userDefinedFormat && this.textMaskEnabled && !this.allowInvalidDate) {
            this.maskOptions = this.maskOptions || {
                mask: this.dateFormatService.getDateMask(),
                pipe: createAutoCorrectedDatePipe(this.format || this.labels.dateFormatString().toLowerCase()),
                keepCharPositions: false,
                guide: true,
            };
        }
        else {
            this.maskOptions = { mask: false };
        }
    };
    /** BEGIN: Convenient Panel Methods. */
    NovoDatePickerInputElement.prototype.openPanel = function () {
        if (!this.disabled) {
            this.overlay.openPanel();
        }
    };
    NovoDatePickerInputElement.prototype.closePanel = function () {
        this.overlay.closePanel();
    };
    Object.defineProperty(NovoDatePickerInputElement.prototype, "panelOpen", {
        get: function () {
            return this.overlay && this.overlay.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    /** END: Convenient Panel Methods. */
    NovoDatePickerInputElement.prototype._handleKeydown = function (event) {
        if ((event.keyCode === ESCAPE || event.keyCode === ENTER || event.keyCode === TAB) && this.panelOpen) {
            this._handleEvent(event, true);
            this.closePanel();
            event.stopPropagation();
        }
    };
    NovoDatePickerInputElement.prototype._handleInput = function (event) {
        if (document.activeElement === event.target) {
            this._handleEvent(event, false);
        }
    };
    NovoDatePickerInputElement.prototype._handleBlur = function (event) {
        this.blurEvent.emit(event);
    };
    NovoDatePickerInputElement.prototype._handleFocus = function (event) {
        this.openPanel();
        this.focusEvent.emit(event);
    };
    NovoDatePickerInputElement.prototype._handleEvent = function (event, blur) {
        var value = event.target.value;
        if (value === '') {
            this.clearValue();
            this.closePanel();
        }
        else {
            this.formatDate(value, blur);
            this.openPanel();
        }
    };
    NovoDatePickerInputElement.prototype.formatDate = function (value, blur) {
        try {
            var _a = __read(this.dateFormatService.parseString(value, false, 'date'), 2), dateTimeValue = _a[0], formatted = _a[1];
            if (!isNaN(dateTimeValue.getUTCDate())) {
                var dt = new Date(dateTimeValue);
                this.dispatchOnChange(dt, blur);
            }
            else {
                this.dispatchOnChange(null, blur);
            }
        }
        catch (err) { }
    };
    NovoDatePickerInputElement.prototype.writeValue = function (value) {
        var _this = this;
        Promise.resolve(null).then(function () { return _this._setTriggerValue(value); });
    };
    NovoDatePickerInputElement.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NovoDatePickerInputElement.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NovoDatePickerInputElement.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    NovoDatePickerInputElement.prototype.dispatchOnChange = function (newValue, blur, skip) {
        if (blur === void 0) { blur = false; }
        if (skip === void 0) { skip = false; }
        if (newValue !== this.value) {
            this._onChange(newValue);
            if (blur) {
                !skip && this.writeValue(newValue);
            }
            else {
                !skip && this._setCalendarValue(newValue);
            }
        }
    };
    NovoDatePickerInputElement.prototype._setTriggerValue = function (value) {
        this._setCalendarValue(value);
        this._setFormValue(value);
        this._changeDetectorRef.markForCheck();
    };
    NovoDatePickerInputElement.prototype._setCalendarValue = function (value) {
        if (value instanceof Date && this.value instanceof Date) {
            value = new Date(value.setHours(this.value.getHours(), this.value.getMinutes()));
        }
        this.value = value;
    };
    NovoDatePickerInputElement.prototype._setFormValue = function (value) {
        if (this.value) {
            var test = this.formatDateValue(this.value);
            this.formattedValue = test;
        }
    };
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    NovoDatePickerInputElement.prototype.setValueAndClose = function (event) {
        if (event && event.date) {
            this.dispatchOnChange(event.date, true);
        }
        this.closePanel();
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    NovoDatePickerInputElement.prototype.clearValue = function () {
        this.formattedValue = '';
        this.dispatchOnChange(null);
    };
    NovoDatePickerInputElement.prototype.formatDateValue = function (value) {
        var originalValue = value;
        try {
            if (!value) {
                return '';
            }
            if (this.userDefinedFormat && dateFns.isValid(value)) {
                return dateFns.format(value, this.format);
            }
            if (!(value instanceof Date)) {
                value = new Date(value);
            }
            if (!(isNaN(value.valueOf()) && this.allowInvalidDate)) {
                return this.labels.formatDateWithFormat(value, {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                });
            }
            else {
                return originalValue;
            }
        }
        catch (err) {
            return '';
        }
    };
    Object.defineProperty(NovoDatePickerInputElement.prototype, "hasValue", {
        get: function () {
            return !Helpers.isEmpty(this.value);
        },
        enumerable: true,
        configurable: true
    });
    NovoDatePickerInputElement.ɵfac = function NovoDatePickerInputElement_Factory(t) { return new (t || NovoDatePickerInputElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DateFormatService)); };
    NovoDatePickerInputElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDatePickerInputElement, selectors: [["novo-date-picker-input"]], viewQuery: function NovoDatePickerInputElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NovoOverlayTemplateComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
        } }, hostVars: 2, hostBindings: function NovoDatePickerInputElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("disabled", ctx.disabled);
        } }, inputs: { name: "name", start: "start", end: "end", placeholder: "placeholder", maskOptions: "maskOptions", format: "format", textMaskEnabled: "textMaskEnabled", allowInvalidDate: "allowInvalidDate", disabled: "disabled", weekStart: "weekStart" }, outputs: { blurEvent: "blurEvent", focusEvent: "focusEvent" }, features: [i0.ɵɵProvidersFeature([DATE_VALUE_ACCESSOR])], decls: 6, vars: 12, consts: [["type", "text", "data-automation-id", "date-input", 3, "name", "ngModel", "textMask", "placeholder", "disabled", "ngModelChange", "focus", "keydown", "input", "blur"], ["input", ""], ["class", "bhi-calendar", 3, "click", 4, "ngIf"], ["class", "bhi-times", 3, "click", 4, "ngIf"], ["position", "above-below", 3, "parent"], ["inline", "true", 3, "start", "end", "ngModel", "weekStart", "onSelect"], [1, "bhi-calendar", 3, "click"], [1, "bhi-times", 3, "click"]], template: function NovoDatePickerInputElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("ngModelChange", function NovoDatePickerInputElement_Template_input_ngModelChange_0_listener($event) { return ctx.formattedValue = $event; })("focus", function NovoDatePickerInputElement_Template_input_focus_0_listener($event) { return ctx._handleFocus($event); })("keydown", function NovoDatePickerInputElement_Template_input_keydown_0_listener($event) { return ctx._handleKeydown($event); })("input", function NovoDatePickerInputElement_Template_input_input_0_listener($event) { return ctx._handleInput($event); })("blur", function NovoDatePickerInputElement_Template_input_blur_0_listener($event) { return ctx._handleBlur($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, NovoDatePickerInputElement_i_2_Template, 1, 0, "i", 2);
            i0.ɵɵtemplate(3, NovoDatePickerInputElement_i_3_Template, 1, 0, "i", 3);
            i0.ɵɵelementStart(4, "novo-overlay-template", 4);
            i0.ɵɵelementStart(5, "novo-date-picker", 5);
            i0.ɵɵlistener("onSelect", function NovoDatePickerInputElement_Template_novo_date_picker_onSelect_5_listener($event) { return ctx.setValueAndClose($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("ngModel", ctx.formattedValue)("textMask", ctx.maskOptions)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hasValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("parent", ctx.element);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("start", ctx.start)("end", ctx.end)("ngModel", ctx.value)("weekStart", ctx.weekStart);
        } }, directives: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MaskedInputDirective, i5.NgIf, i6.NovoOverlayTemplateComponent, i7.NovoDatePickerElement], encapsulation: 2 });
    return NovoDatePickerInputElement;
}());
export { NovoDatePickerInputElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDatePickerInputElement, [{
        type: Component,
        args: [{
                selector: 'novo-date-picker-input',
                providers: [DATE_VALUE_ACCESSOR],
                template: "\n    <input\n      type=\"text\"\n      [name]=\"name\"\n      [(ngModel)]=\"formattedValue\"\n      [textMask]=\"maskOptions\"\n      [placeholder]=\"placeholder\"\n      (focus)=\"_handleFocus($event)\"\n      (keydown)=\"_handleKeydown($event)\"\n      (input)=\"_handleInput($event)\"\n      (blur)=\"_handleBlur($event)\"\n      #input\n      data-automation-id=\"date-input\"\n      [disabled]=\"disabled\"\n    />\n    <i *ngIf=\"!hasValue\" (click)=\"openPanel()\" class=\"bhi-calendar\"></i>\n    <i *ngIf=\"hasValue\" (click)=\"clearValue()\" class=\"bhi-times\"></i>\n    <novo-overlay-template [parent]=\"element\" position=\"above-below\">\n      <novo-date-picker\n        [start]=\"start\"\n        [end]=\"end\"\n        inline=\"true\"\n        (onSelect)=\"setValueAndClose($event)\"\n        [ngModel]=\"value\"\n        [weekStart]=\"weekStart\"\n      ></novo-date-picker>\n    </novo-overlay-template>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }, { type: i2.DateFormatService }]; }, { name: [{
            type: Input
        }], start: [{
            type: Input
        }], end: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], maskOptions: [{
            type: Input
        }], format: [{
            type: Input
        }], textMaskEnabled: [{
            type: Input
        }], allowInvalidDate: [{
            type: Input
        }], disabled: [{
            type: HostBinding,
            args: ['class.disabled']
        }, {
            type: Input
        }], weekStart: [{
            type: Input
        }], blurEvent: [{
            type: Output
        }], focusEvent: [{
            type: Output
        }], overlay: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGUtcGlja2VyL0RhdGVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsS0FBSztBQUNMLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsU0FBUztBQUNULE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sMkJBQTJCLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsTUFBTTtBQUNOLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7Ozs7SUEyQnRFLDRCQUFvRTtJQUEvQyxvTEFBcUI7SUFBc0IsaUJBQUk7Ozs7SUFDcEUsNEJBQWlFO0lBQTdDLHFMQUFzQjtJQUFtQixpQkFBSTs7QUExQnJFLHNEQUFzRDtBQUN0RCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMEJBQTBCLEVBQTFCLENBQTBCLENBQUM7SUFDekQsS0FBSyxFQUFFLElBQUk7Q0FD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QUFBLHVFQUFnRTtZQUNoRSx1RUFBNkQ7WUFDN0QsZ0RBQ0U7WUFBQSwyQ0FPb0I7WUFIbEIsNkhBQVksNEJBQXdCLElBQUM7WUFHdEMsaUJBQW1CO1lBQ3RCLGlCQUF3Qjs7WUF2QnRCLCtCQUFhLCtCQUFBLDZCQUFBLGdDQUFBLDBCQUFBO1lBWVosZUFBaUI7WUFBakIsb0NBQWlCO1lBQ2pCLGVBQWdCO1lBQWhCLG1DQUFnQjtZQUNJLGVBQWtCO1lBQWxCLG9DQUFrQjtZQUVyQyxlQUFlO1lBQWYsaUNBQWUsZ0JBQUEsc0JBQUEsNEJBQUE7O3FDQXJEdkI7Q0EwUkMsQUEzUEQsSUEyUEM7U0EzTlksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FoQ3RDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDaEMsUUFBUSxFQUFFLGs2QkEyQlQ7YUFDRjs7a0JBWUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUM1QixLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxNQUFNOztrQkFFTixNQUFNOztrQkFHTixTQUFTO21CQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUQUIsIEVOVEVSLCBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtZm9ybWF0L0RhdGVGb3JtYXQnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXBpY2tlci1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0RBVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICBbKG5nTW9kZWwpXT1cImZvcm1hdHRlZFZhbHVlXCJcbiAgICAgIFt0ZXh0TWFza109XCJtYXNrT3B0aW9uc1wiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgKGZvY3VzKT1cIl9oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cIl9oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgI2lucHV0XG4gICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlLWlucHV0XCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgLz5cbiAgICA8aSAqbmdJZj1cIiFoYXNWYWx1ZVwiIChjbGljayk9XCJvcGVuUGFuZWwoKVwiIGNsYXNzPVwiYmhpLWNhbGVuZGFyXCI+PC9pPlxuICAgIDxpICpuZ0lmPVwiaGFzVmFsdWVcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgpXCIgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+XG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCI+XG4gICAgICA8bm92by1kYXRlLXBpY2tlclxuICAgICAgICBbc3RhcnRdPVwic3RhcnRcIlxuICAgICAgICBbZW5kXT1cImVuZFwiXG4gICAgICAgIGlubGluZT1cInRydWVcIlxuICAgICAgICAob25TZWxlY3QpPVwic2V0VmFsdWVBbmRDbG9zZSgkZXZlbnQpXCJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICBbd2Vla1N0YXJ0XT1cIndlZWtTdGFydFwiXG4gICAgICA+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSB1c2VyRGVmaW5lZEZvcm1hdDogYm9vbGVhbjtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdGFydDogRGF0ZTtcbiAgQElucHV0KClcbiAgZW5kOiBEYXRlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXNrT3B0aW9uczogYW55O1xuICBASW5wdXQoKVxuICBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGV4dE1hc2tFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgYWxsb3dJbnZhbGlkRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiBudW1iZXIgPSAwO1xuICBAT3V0cHV0KClcbiAgYmx1ckV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgZGF0ZUZvcm1hdFNlcnZpY2U6IERhdGVGb3JtYXRTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpLnRvVXBwZXJDYXNlKCkgfHwgdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFBsYWNlaG9sZGVyO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyRGVmaW5lZEZvcm1hdCA9IHRoaXMuZm9ybWF0ID8gIXRoaXMuZm9ybWF0Lm1hdGNoKC9eKEREXFwvTU1cXC9ZWVlZfE1NXFwvRERcXC9ZWVlZKSQvZykgOiBmYWxzZTtcbiAgICBpZiAoIXRoaXMudXNlckRlZmluZWRGb3JtYXQgJiYgdGhpcy50ZXh0TWFza0VuYWJsZWQgJiYgIXRoaXMuYWxsb3dJbnZhbGlkRGF0ZSkge1xuICAgICAgdGhpcy5tYXNrT3B0aW9ucyA9IHRoaXMubWFza09wdGlvbnMgfHwge1xuICAgICAgICBtYXNrOiB0aGlzLmRhdGVGb3JtYXRTZXJ2aWNlLmdldERhdGVNYXNrKCksXG4gICAgICAgIHBpcGU6IGNyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSh0aGlzLmZvcm1hdCB8fCB0aGlzLmxhYmVscy5kYXRlRm9ybWF0U3RyaW5nKCkudG9Mb3dlckNhc2UoKSksXG4gICAgICAgIGtlZXBDaGFyUG9zaXRpb25zOiBmYWxzZSxcbiAgICAgICAgZ3VpZGU6IHRydWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hc2tPcHRpb25zID0geyBtYXNrOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKiBCRUdJTjogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gICAgfVxuICB9XG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LmNsb3NlUGFuZWwoKTtcbiAgfVxuICBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5LnBhbmVsT3BlbjtcbiAgfVxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSB8fCBldmVudC5rZXlDb2RlID09PSBFTlRFUiB8fCBldmVudC5rZXlDb2RlID09PSBUQUIpICYmIHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9oYW5kbGVFdmVudChldmVudCwgdHJ1ZSk7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUV2ZW50KGV2ZW50LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXJFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIF9oYW5kbGVGb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgX2hhbmRsZUV2ZW50KGV2ZW50OiBFdmVudCwgYmx1cjogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1hdERhdGUodmFsdWUsIGJsdXIpO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZm9ybWF0RGF0ZSh2YWx1ZTogc3RyaW5nLCBibHVyOiBib29sZWFuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFtkYXRlVGltZVZhbHVlLCBmb3JtYXR0ZWRdID0gdGhpcy5kYXRlRm9ybWF0U2VydmljZS5wYXJzZVN0cmluZyh2YWx1ZSwgZmFsc2UsICdkYXRlJyk7XG4gICAgICBpZiAoIWlzTmFOKGRhdGVUaW1lVmFsdWUuZ2V0VVRDRGF0ZSgpKSkge1xuICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKGRhdGVUaW1lVmFsdWUpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UoZHQsIGJsdXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwsIGJsdXIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwYXRjaE9uQ2hhbmdlKG5ld1ZhbHVlPzogYW55LCBibHVyOiBib29sZWFuID0gZmFsc2UsIHNraXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgaWYgKGJsdXIpIHtcbiAgICAgICAgIXNraXAgJiYgdGhpcy53cml0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICFza2lwICYmIHRoaXMuX3NldENhbGVuZGFyVmFsdWUobmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fc2V0Q2FsZW5kYXJWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5fc2V0Rm9ybVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldENhbGVuZGFyVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgdGhpcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUuc2V0SG91cnModGhpcy52YWx1ZS5nZXRIb3VycygpLCB0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKSkpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGb3JtVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICBjb25zdCB0ZXN0ID0gdGhpcy5mb3JtYXREYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gdGVzdDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBwYW5lbCwgYW5kIGlmIGEgdmFsdWUgaXMgc3BlY2lmaWVkLCBhbHNvIHNldHMgdGhlIGFzc29jaWF0ZWRcbiAgICogY29udHJvbCB0byB0aGF0IHZhbHVlLiBJdCB3aWxsIGFsc28gbWFyayB0aGUgY29udHJvbCBhcyBkaXJ0eSBpZiB0aGlzIGludGVyYWN0aW9uXG4gICAqIHN0ZW1tZWQgZnJvbSB0aGUgdXNlci5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmRhdGUpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShldmVudC5kYXRlLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGVWYWx1ZSh2YWx1ZSkge1xuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy51c2VyRGVmaW5lZEZvcm1hdCAmJiBkYXRlRm5zLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBkYXRlRm5zLmZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuICAgICAgfVxuICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICghKGlzTmFOKHZhbHVlLnZhbHVlT2YoKSkgJiYgdGhpcy5hbGxvd0ludmFsaWREYXRlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodmFsdWUsIHtcbiAgICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=