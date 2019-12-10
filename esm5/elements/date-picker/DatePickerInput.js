/**
 * @fileoverview added by tsickle
 * Generated from: elements/date-picker/DatePickerInput.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
// Value accessor for the component (supports ngModel)
/** @type {?} */
var DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoDatePickerInputElement; })),
    multi: true,
};
var NovoDatePickerInputElement = /** @class */ (function () {
    function NovoDatePickerInputElement(element, labels, _changeDetectorRef, dateFormatService) {
        this.element = element;
        this.labels = labels;
        this._changeDetectorRef = _changeDetectorRef;
        this.dateFormatService = dateFormatService;
        this.formattedValue = '';
        /**
         * View -> model callback called when value changes
         */
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        /**
         * View -> model callback called when autocomplete has been touched
         */
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this.textMaskEnabled = true;
        this.allowInvalidDate = false;
        this.disabled = false;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.placeholder = this.labels.dateFormatString().toUpperCase() || this.labels.dateFormatPlaceholder;
    }
    /**
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.openPanel = /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.overlay.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.overlay.closePanel();
    };
    Object.defineProperty(NovoDatePickerInputElement.prototype, "panelOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.overlay && this.overlay.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    /** END: Convenient Panel Methods. */
    /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._handleKeydown = /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((event.keyCode === ESCAPE || event.keyCode === ENTER || event.keyCode === TAB) && this.panelOpen) {
            this._handleEvent(event, true);
            this.closePanel();
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (document.activeElement === event.target) {
            this._handleEvent(event, false);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._handleBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.blurEvent.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._handleFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.openPanel();
        this.focusEvent.emit(event);
    };
    /**
     * @param {?} event
     * @param {?} blur
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._handleEvent = /**
     * @param {?} event
     * @param {?} blur
     * @return {?}
     */
    function (event, blur) {
        /** @type {?} */
        var value = ((/** @type {?} */ (event.target))).value;
        this.formatDate(value, blur);
        this.openPanel();
    };
    /**
     * @protected
     * @param {?} value
     * @param {?} blur
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.formatDate = /**
     * @protected
     * @param {?} value
     * @param {?} blur
     * @return {?}
     */
    function (value, blur) {
        try {
            var _a = tslib_1.__read(this.dateFormatService.parseString(value, false, 'date'), 2), dateTimeValue = _a[0], formatted = _a[1];
            if (!isNaN(dateTimeValue.getUTCDate())) {
                /** @type {?} */
                var dt = new Date(dateTimeValue);
                this.dispatchOnChange(dt, blur);
            }
            else {
                this.dispatchOnChange(null, blur);
            }
        }
        catch (err) { }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        Promise.resolve(null).then((/**
         * @return {?}
         */
        function () { return _this._setTriggerValue(value); }));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    /**
     * @param {?=} newValue
     * @param {?=} blur
     * @param {?=} skip
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.dispatchOnChange = /**
     * @param {?=} newValue
     * @param {?=} blur
     * @param {?=} skip
     * @return {?}
     */
    function (newValue, blur, skip) {
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
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._setTriggerValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._setCalendarValue(value);
        this._setFormValue(value);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._setCalendarValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Date && this.value instanceof Date) {
            value = new Date(value.setHours(this.value.getHours(), this.value.getMinutes()));
        }
        this.value = value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NovoDatePickerInputElement.prototype._setFormValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value) {
            /** @type {?} */
            var test = this.formatDateValue(this.value);
            this.formattedValue = test;
        }
    };
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.setValueAndClose = /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event.date) {
            this.dispatchOnChange(event.date, true);
        }
        this.closePanel();
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.clearValue = /**
     * Clear any previous selected option and emit a selection change event for this option
     * @return {?}
     */
    function () {
        this.formattedValue = '';
        this.dispatchOnChange(null);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoDatePickerInputElement.prototype.formatDateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return !Helpers.isEmpty(this.value);
        },
        enumerable: true,
        configurable: true
    });
    NovoDatePickerInputElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-date-picker-input',
                    providers: [DATE_VALUE_ACCESSOR],
                    template: "\n        <input type=\"text\" [name]=\"name\" [(ngModel)]=\"formattedValue\" [textMask]=\"maskOptions\" [placeholder]=\"placeholder\" (focus)=\"_handleFocus($event)\" (keydown)=\"_handleKeydown($event)\" (input)=\"_handleInput($event)\" (blur)=\"_handleBlur($event)\" #input data-automation-id=\"date-input\" [disabled]=\"disabled\"/>\n        <i *ngIf=\"!hasValue\" (click)=\"openPanel()\" class=\"bhi-calendar\"></i>\n        <i *ngIf=\"hasValue\" (click)=\"clearValue()\" class=\"bhi-times\"></i>\n        <novo-overlay-template [parent]=\"element\" position=\"above-below\">\n            <novo-date-picker [start]=\"start\" [end]=\"end\" inline=\"true\" (onSelect)=\"setValueAndClose($event)\" [ngModel]=\"value\"></novo-date-picker>\n        </novo-overlay-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoDatePickerInputElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: ChangeDetectorRef },
        { type: DateFormatService }
    ]; };
    NovoDatePickerInputElement.propDecorators = {
        name: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        placeholder: [{ type: Input }],
        maskOptions: [{ type: Input }],
        format: [{ type: Input }],
        textMaskEnabled: [{ type: Input }],
        allowInvalidDate: [{ type: Input }],
        disabled: [{ type: HostBinding, args: ['class.disabled',] }, { type: Input }],
        blurEvent: [{ type: Output }],
        focusEvent: [{ type: Output }],
        overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: false },] }]
    };
    return NovoDatePickerInputElement;
}());
export { NovoDatePickerInputElement };
if (false) {
    /** @type {?} */
    NovoDatePickerInputElement.prototype.value;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.formattedValue;
    /**
     * @type {?}
     * @private
     */
    NovoDatePickerInputElement.prototype.userDefinedFormat;
    /**
     * View -> model callback called when value changes
     * @type {?}
     */
    NovoDatePickerInputElement.prototype._onChange;
    /**
     * View -> model callback called when autocomplete has been touched
     * @type {?}
     */
    NovoDatePickerInputElement.prototype._onTouched;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.name;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.start;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.end;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.placeholder;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.maskOptions;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.format;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.textMaskEnabled;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.allowInvalidDate;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.disabled;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.blurEvent;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.focusEvent;
    /**
     * Element for the panel containing the autocomplete options.
     * @type {?}
     */
    NovoDatePickerInputElement.prototype.overlay;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.element;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDatePickerInputElement.prototype._changeDetectorRef;
    /** @type {?} */
    NovoDatePickerInputElement.prototype.dateFormatService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGUtcGlja2VyL0RhdGVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFM0QsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTywyQkFBMkIsTUFBTSxtREFBbUQsQ0FBQzs7QUFFNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7SUFHcEUsbUJBQW1CLEdBQUc7SUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLDBCQUEwQixFQUExQixDQUEwQixFQUFDO0lBQ3pELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQWtERSxvQ0FDUyxPQUFtQixFQUNuQixNQUF3QixFQUN2QixrQkFBcUMsRUFDdEMsaUJBQW9DO1FBSHBDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDdkIsdUJBQWtC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UyxTQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFpTDVELGlDQUFDO0NBQUEsQUFoT0QsSUFnT0M7U0FwTlksMEJBQTBCOzs7SUFDckMsMkNBQWtCOztJQUNsQixvREFBbUM7Ozs7O0lBQ25DLHVEQUFtQzs7Ozs7SUFHbkMsK0NBQTJDOzs7OztJQUczQyxnREFBc0I7O0lBRXRCLDBDQUNhOztJQUNiLDJDQUNZOztJQUNaLHlDQUNVOztJQUNWLGlEQUNvQjs7SUFDcEIsaURBQ2lCOztJQUNqQiw0Q0FDZTs7SUFDZixxREFDZ0M7O0lBQ2hDLHNEQUNrQzs7SUFDbEMsOENBRTBCOztJQUMxQiwrQ0FDcUU7O0lBQ3JFLGdEQUNzRTs7Ozs7SUFFdEUsNkNBQ3NDOztJQUdwQyw2Q0FBMEI7O0lBQzFCLDRDQUErQjs7Ozs7SUFDL0Isd0RBQTZDOztJQUM3Qyx1REFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVEFCLCBFTlRFUiwgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlIGZyb20gJ3RleHQtbWFzay1hZGRvbnMvZGlzdC9jcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUnO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBEQVRFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0RhdGVQaWNrZXJJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS1waWNrZXItaW5wdXQnLFxuICBwcm92aWRlcnM6IFtEQVRFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25hbWVdPVwibmFtZVwiIFsobmdNb2RlbCldPVwiZm9ybWF0dGVkVmFsdWVcIiBbdGV4dE1hc2tdPVwibWFza09wdGlvbnNcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAoZm9jdXMpPVwiX2hhbmRsZUZvY3VzKCRldmVudClcIiAoa2V5ZG93bik9XCJfaGFuZGxlS2V5ZG93bigkZXZlbnQpXCIgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCIgKGJsdXIpPVwiX2hhbmRsZUJsdXIoJGV2ZW50KVwiICNpbnB1dCBkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlLWlucHV0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIvPlxuICAgICAgICA8aSAqbmdJZj1cIiFoYXNWYWx1ZVwiIChjbGljayk9XCJvcGVuUGFuZWwoKVwiIGNsYXNzPVwiYmhpLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICA8aSAqbmdJZj1cImhhc1ZhbHVlXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPlxuICAgICAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIj5cbiAgICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyIFtzdGFydF09XCJzdGFydFwiIFtlbmRdPVwiZW5kXCIgaW5saW5lPVwidHJ1ZVwiIChvblNlbGVjdCk9XCJzZXRWYWx1ZUFuZENsb3NlKCRldmVudClcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlUGlja2VySW5wdXRFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuICBwdWJsaWMgZm9ybWF0dGVkVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIHVzZXJEZWZpbmVkRm9ybWF0OiBib29sZWFuO1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIGF1dG9jb21wbGV0ZSBoYXMgYmVlbiB0b3VjaGVkICovXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1hc2tPcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0ZXh0TWFza0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBhbGxvd0ludmFsaWREYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgYmx1ckV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIG92ZXJsYXk6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRTdHJpbmcoKS50b1VwcGVyQ2FzZSgpIHx8IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlckRlZmluZWRGb3JtYXQgPSB0aGlzLmZvcm1hdCA/ICF0aGlzLmZvcm1hdC5tYXRjaCgvXihERFxcL01NXFwvWVlZWXxNTVxcL0REXFwvWVlZWSkkL2cpIDogZmFsc2U7XG4gICAgaWYgKCF0aGlzLnVzZXJEZWZpbmVkRm9ybWF0ICYmIHRoaXMudGV4dE1hc2tFbmFibGVkICYmICF0aGlzLmFsbG93SW52YWxpZERhdGUpIHtcbiAgICAgIHRoaXMubWFza09wdGlvbnMgPSB0aGlzLm1hc2tPcHRpb25zIHx8IHtcbiAgICAgICAgbWFzazogdGhpcy5kYXRlRm9ybWF0U2VydmljZS5nZXREYXRlTWFzaygpLFxuICAgICAgICBwaXBlOiBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUodGhpcy5mb3JtYXQgfHwgdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICBrZWVwQ2hhclBvc2l0aW9uczogZmFsc2UsXG4gICAgICAgIGd1aWRlOiB0cnVlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXNrT3B0aW9ucyA9IHsgbWFzazogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5jbG9zZVBhbmVsKCk7XG4gIH1cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgfHwgZXZlbnQua2V5Q29kZSA9PT0gRU5URVIgfHwgZXZlbnQua2V5Q29kZSA9PT0gVEFCKSAmJiB0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5faGFuZGxlRXZlbnQoZXZlbnQsIHRydWUpO1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLl9oYW5kbGVFdmVudChldmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ibHVyRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIF9oYW5kbGVFdmVudChldmVudDogRXZlbnQsIGJsdXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIHRoaXMuZm9ybWF0RGF0ZSh2YWx1ZSwgYmx1cik7XG4gICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmb3JtYXREYXRlKHZhbHVlOiBzdHJpbmcsIGJsdXI6IGJvb2xlYW4pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IFtkYXRlVGltZVZhbHVlLCBmb3JtYXR0ZWRdID0gdGhpcy5kYXRlRm9ybWF0U2VydmljZS5wYXJzZVN0cmluZyh2YWx1ZSwgZmFsc2UsICdkYXRlJyk7XG4gICAgICBpZiAoIWlzTmFOKGRhdGVUaW1lVmFsdWUuZ2V0VVRDRGF0ZSgpKSkge1xuICAgICAgICBsZXQgZHQgPSBuZXcgRGF0ZShkYXRlVGltZVZhbHVlKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGR0LCBibHVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShudWxsLCBibHVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLl9zZXRUcmlnZ2VyVmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgZGlzcGF0Y2hPbkNoYW5nZShuZXdWYWx1ZT86IGFueSwgYmx1cjogYm9vbGVhbiA9IGZhbHNlLCBza2lwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIGlmIChibHVyKSB7XG4gICAgICAgICFza2lwICYmIHRoaXMud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAhc2tpcCAmJiB0aGlzLl9zZXRDYWxlbmRhclZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmlnZ2VyVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3NldENhbGVuZGFyVmFsdWUodmFsdWUpO1xuICAgIHRoaXMuX3NldEZvcm1WYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDYWxlbmRhclZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnNldEhvdXJzKHRoaXMudmFsdWUuZ2V0SG91cnMoKSwgdGhpcy52YWx1ZS5nZXRNaW51dGVzKCkpKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Rm9ybVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgbGV0IHRlc3QgPSB0aGlzLmZvcm1hdERhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB0ZXN0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjbG9zZXMgdGhlIHBhbmVsLCBhbmQgaWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQsIGFsc28gc2V0cyB0aGUgYXNzb2NpYXRlZFxuICAgKiBjb250cm9sIHRvIHRoYXQgdmFsdWUuIEl0IHdpbGwgYWxzbyBtYXJrIHRoZSBjb250cm9sIGFzIGRpcnR5IGlmIHRoaXMgaW50ZXJhY3Rpb25cbiAgICogc3RlbW1lZCBmcm9tIHRoZSB1c2VyLlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlQW5kQ2xvc2UoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGV2ZW50LmRhdGUsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbnkgcHJldmlvdXMgc2VsZWN0ZWQgb3B0aW9uIGFuZCBlbWl0IGEgc2VsZWN0aW9uIGNoYW5nZSBldmVudCBmb3IgdGhpcyBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSAnJztcbiAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy51c2VyRGVmaW5lZEZvcm1hdCAmJiBkYXRlRm5zLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBkYXRlRm5zLmZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuICAgICAgfVxuICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICghKGlzTmFOKHZhbHVlLnZhbHVlT2YoKSkgJiYgdGhpcy5hbGxvd0ludmFsaWREYXRlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodmFsdWUsIHtcbiAgICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=