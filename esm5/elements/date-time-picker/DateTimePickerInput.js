/**
 * @fileoverview added by tsickle
 * Generated from: elements/date-time-picker/DateTimePickerInput.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { isDate, parse } from 'date-fns';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoDateTimePickerInputElement; })),
    multi: true,
};
var NovoDateTimePickerInputElement = /** @class */ (function () {
    function NovoDateTimePickerInputElement(element, labels, _changeDetectorRef) {
        this.element = element;
        this.labels = labels;
        this._changeDetectorRef = _changeDetectorRef;
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
        this.military = false;
        this.disabled = false;
        this.weekStart = 0;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.datePart = isDate(value) ? parse(value) : value;
        this.timePart = isDate(value) ? parse(value) : value;
        Promise.resolve(null).then((/**
         * @return {?}
         */
        function () { return _this._setTriggerValue(value); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.updateDate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.datePart = event;
        this.checkParts();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.updateTime = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.timePart = event;
        this.checkParts();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.handleBlur = /**
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
    NovoDateTimePickerInputElement.prototype.handleFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focusEvent.emit(event);
    };
    /**
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.checkParts = /**
     * @return {?}
     */
    function () {
        try {
            if (this.datePart instanceof Date && this.timePart instanceof Date) {
                this.dispatchOnChange(new Date(this.datePart.getFullYear(), this.datePart.getMonth(), this.datePart.getDate(), this.timePart.getHours(), this.timePart.getMinutes()));
            }
            else if (this.datePart instanceof Date) {
                this.timePart = new Date(this.datePart.getFullYear(), this.datePart.getMonth(), this.datePart.getDate(), 12, 0);
                this.dispatchOnChange(new Date(this.datePart.getFullYear(), this.datePart.getMonth(), this.datePart.getDate(), this.timePart.getHours(), this.timePart.getMinutes()));
            }
            else {
                this.dispatchOnChange(null);
            }
        }
        catch (err) {
            // Date not valid
            this.dispatchOnChange(null);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.registerOnChange = /**
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
    NovoDateTimePickerInputElement.prototype.registerOnTouched = /**
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
    NovoDateTimePickerInputElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    /**
     * @param {?=} newValue
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.dispatchOnChange = /**
     * @param {?=} newValue
     * @return {?}
     */
    function (newValue) {
        if (newValue !== this.value) {
            this._onChange(newValue);
            this._setTriggerValue(newValue);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype._setTriggerValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.setValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event.date) {
            this.dispatchOnChange(event.date);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.setValueAndClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setValue(event);
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @return {?}
     */
    NovoDateTimePickerInputElement.prototype.clearValue = /**
     * Clear any previous selected option and emit a selection change event for this option
     * @return {?}
     */
    function () {
        this.dispatchOnChange(null);
    };
    Object.defineProperty(NovoDateTimePickerInputElement.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return !Helpers.isEmpty(this.value);
        },
        enumerable: true,
        configurable: true
    });
    NovoDateTimePickerInputElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-date-time-picker-input',
                    providers: [DATE_VALUE_ACCESSOR],
                    template: "\n    <novo-date-picker-input\n      [ngModel]=\"datePart\"\n      (ngModelChange)=\"updateDate($event)\"\n      [start]=\"start\"\n      [end]=\"end\"\n      [maskOptions]=\"maskOptions\"\n      (blurEvent)=\"handleBlur($event)\"\n      (focusEvent)=\"handleFocus($event)\"\n      [disabled]=\"disabled\"\n      [weekStart]=\"weekStart\"\n    ></novo-date-picker-input>\n    <novo-time-picker-input\n      [ngModel]=\"timePart\"\n      (ngModelChange)=\"updateTime($event)\"\n      [military]=\"military\"\n      (blurEvent)=\"handleBlur($event)\"\n      (focusEvent)=\"handleFocus($event)\"\n      [disabled]=\"disabled\"\n    ></novo-time-picker-input>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoDateTimePickerInputElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    NovoDateTimePickerInputElement.propDecorators = {
        name: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        placeholder: [{ type: Input }],
        maskOptions: [{ type: Input }],
        military: [{ type: Input }],
        disabled: [{ type: Input }],
        format: [{ type: Input }],
        weekStart: [{ type: Input }],
        blurEvent: [{ type: Output }],
        focusEvent: [{ type: Output }]
    };
    return NovoDateTimePickerInputElement;
}());
export { NovoDateTimePickerInputElement };
if (false) {
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.value;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.datePart;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.timePart;
    /**
     * View -> model callback called when value changes
     * @type {?}
     */
    NovoDateTimePickerInputElement.prototype._onChange;
    /**
     * View -> model callback called when autocomplete has been touched
     * @type {?}
     */
    NovoDateTimePickerInputElement.prototype._onTouched;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.name;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.start;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.end;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.placeholder;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.maskOptions;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.military;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.disabled;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.format;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.weekStart;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.blurEvent;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.focusEvent;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.element;
    /** @type {?} */
    NovoDateTimePickerInputElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDateTimePickerInputElement.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VySW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7SUFHeEMsbUJBQW1CLEdBQUc7SUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLDhCQUE4QixFQUE5QixDQUE4QixFQUFDO0lBQzdELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQTJERSx3Q0FBbUIsT0FBbUIsRUFBUyxNQUF3QixFQUFVLGtCQUFxQztRQUFuRyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1COzs7O1FBNUJ0SCxjQUFTOzs7UUFBeUIsY0FBUSxDQUFDLEVBQUM7Ozs7UUFHNUMsZUFBVTs7O1FBQUcsY0FBUSxDQUFDLEVBQUM7UUFhdkIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSTFCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsY0FBUyxHQUE2QixJQUFJLFlBQVks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WUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7O2dCQTdKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ2hDLFFBQVEsRUFBRSxxcEJBb0JUO2lCQUNGOzs7O2dCQXRDc0MsVUFBVTtnQkFJeEMsZ0JBQWdCO2dCQUpoQixpQkFBaUI7Ozt1QkFrRHZCLEtBQUs7d0JBRUwsS0FBSztzQkFFTCxLQUFLOzhCQUVMLEtBQUs7OEJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7eUJBRUwsS0FBSzs0QkFFTCxLQUFLOzRCQUVMLE1BQU07NkJBRU4sTUFBTTs7SUFzR1QscUNBQUM7Q0FBQSxBQTlKRCxJQThKQztTQXJJWSw4QkFBOEI7OztJQUN6QywrQ0FBa0I7O0lBQ2xCLGtEQUFxQjs7SUFDckIsa0RBQXFCOzs7OztJQUdyQixtREFBNEM7Ozs7O0lBRzVDLG9EQUF1Qjs7SUFFdkIsOENBQ2E7O0lBQ2IsK0NBQ1k7O0lBQ1osNkNBQ1U7O0lBQ1YscURBQ29COztJQUNwQixxREFDaUI7O0lBQ2pCLGtEQUMwQjs7SUFDMUIsa0RBQzBCOztJQUMxQixnREFDZTs7SUFDZixtREFDc0I7O0lBQ3RCLG1EQUNxRTs7SUFDckUsb0RBQ3NFOztJQUUxRCxpREFBMEI7O0lBQUUsZ0RBQStCOzs7OztJQUFFLDREQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgaXNEYXRlLCBwYXJzZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVRpbWVQaWNrZXJJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS10aW1lLXBpY2tlci1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0RBVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWRhdGUtcGlja2VyLWlucHV0XG4gICAgICBbbmdNb2RlbF09XCJkYXRlUGFydFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVEYXRlKCRldmVudClcIlxuICAgICAgW3N0YXJ0XT1cInN0YXJ0XCJcbiAgICAgIFtlbmRdPVwiZW5kXCJcbiAgICAgIFttYXNrT3B0aW9uc109XCJtYXNrT3B0aW9uc1wiXG4gICAgICAoYmx1ckV2ZW50KT1cImhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAoZm9jdXNFdmVudCk9XCJoYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbd2Vla1N0YXJ0XT1cIndlZWtTdGFydFwiXG4gICAgPjwvbm92by1kYXRlLXBpY2tlci1pbnB1dD5cbiAgICA8bm92by10aW1lLXBpY2tlci1pbnB1dFxuICAgICAgW25nTW9kZWxdPVwidGltZVBhcnRcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlVGltZSgkZXZlbnQpXCJcbiAgICAgIFttaWxpdGFyeV09XCJtaWxpdGFyeVwiXG4gICAgICAoYmx1ckV2ZW50KT1cImhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAoZm9jdXNFdmVudCk9XCJoYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgPjwvbm92by10aW1lLXBpY2tlci1pbnB1dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVUaW1lUGlja2VySW5wdXRFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIGRhdGVQYXJ0OiBhbnk7XG4gIHB1YmxpYyB0aW1lUGFydDogYW55O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3RhcnQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGVuZDogRGF0ZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWFza09wdGlvbnM6IGFueTtcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydDogbnVtYmVyID0gMDtcbiAgQE91dHB1dCgpXG4gIGJsdXJFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXNFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVBhcnQgPSBpc0RhdGUodmFsdWUpID8gcGFyc2UodmFsdWUpIDogdmFsdWU7XG4gICAgdGhpcy50aW1lUGFydCA9IGlzRGF0ZSh2YWx1ZSkgPyBwYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLl9zZXRUcmlnZ2VyVmFsdWUodmFsdWUpKTtcbiAgfVxuICB1cGRhdGVEYXRlKGV2ZW50KSB7XG4gICAgdGhpcy5kYXRlUGFydCA9IGV2ZW50O1xuICAgIHRoaXMuY2hlY2tQYXJ0cygpO1xuICB9XG4gIHVwZGF0ZVRpbWUoZXZlbnQpIHtcbiAgICB0aGlzLnRpbWVQYXJ0ID0gZXZlbnQ7XG4gICAgdGhpcy5jaGVja1BhcnRzKCk7XG4gIH1cblxuICBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGNoZWNrUGFydHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmRhdGVQYXJ0IGluc3RhbmNlb2YgRGF0ZSAmJiB0aGlzLnRpbWVQYXJ0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UoXG4gICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICB0aGlzLmRhdGVQYXJ0LmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICB0aGlzLmRhdGVQYXJ0LmdldE1vbnRoKCksXG4gICAgICAgICAgICB0aGlzLmRhdGVQYXJ0LmdldERhdGUoKSxcbiAgICAgICAgICAgIHRoaXMudGltZVBhcnQuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIHRoaXMudGltZVBhcnQuZ2V0TWludXRlcygpLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0ZVBhcnQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRoaXMudGltZVBhcnQgPSBuZXcgRGF0ZSh0aGlzLmRhdGVQYXJ0LmdldEZ1bGxZZWFyKCksIHRoaXMuZGF0ZVBhcnQuZ2V0TW9udGgoKSwgdGhpcy5kYXRlUGFydC5nZXREYXRlKCksIDEyLCAwKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKFxuICAgICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgICAgdGhpcy5kYXRlUGFydC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgdGhpcy5kYXRlUGFydC5nZXRNb250aCgpLFxuICAgICAgICAgICAgdGhpcy5kYXRlUGFydC5nZXREYXRlKCksXG4gICAgICAgICAgICB0aGlzLnRpbWVQYXJ0LmdldEhvdXJzKCksXG4gICAgICAgICAgICB0aGlzLnRpbWVQYXJ0LmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gRGF0ZSBub3QgdmFsaWRcbiAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgcHVibGljIGRpc3BhdGNoT25DaGFuZ2UobmV3VmFsdWU/OiBhbnkpIHtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuX3NldFRyaWdnZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmRhdGUpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShldmVudC5kYXRlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWVBbmRDbG9zZShldmVudDogYW55IHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFueSBwcmV2aW91cyBzZWxlY3RlZCBvcHRpb24gYW5kIGVtaXQgYSBzZWxlY3Rpb24gY2hhbmdlIGV2ZW50IGZvciB0aGlzIG9wdGlvblxuICAgKi9cbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19