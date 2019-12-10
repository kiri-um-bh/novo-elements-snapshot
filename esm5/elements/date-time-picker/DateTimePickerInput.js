/**
 * @fileoverview added by tsickle
 * Generated from: elements/date-time-picker/DateTimePickerInput.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { parse, isDate } from 'date-fns';
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
                /** @type {?} */
                var newDt = new Date(this.datePart.getFullYear(), this.datePart.getMonth(), this.datePart.getDate(), this.timePart.getHours(), this.timePart.getMinutes());
                this.dispatchOnChange(newDt);
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
                    template: "\n        <novo-date-picker-input [ngModel]=\"datePart\" (ngModelChange)=\"updateDate($event)\" [start]=\"start\" [end]=\"end\" [maskOptions]=\"maskOptions\" (blurEvent)=\"handleBlur($event)\" (focusEvent)=\"handleFocus($event)\" [disabled]=\"disabled\"></novo-date-picker-input>\n        <novo-time-picker-input [ngModel]=\"timePart\" (ngModelChange)=\"updateTime($event)\" [military]=\"military\" (blurEvent)=\"handleBlur($event)\" (focusEvent)=\"handleFocus($event)\" [disabled]=\"disabled\"></novo-time-picker-input>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VySW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFRLEtBQUssRUFBRSxNQUFNLEVBQXFCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0lBR3hDLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSw4QkFBOEIsRUFBOUIsQ0FBOEIsRUFBQztJQUM3RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUF3Q0Usd0NBQW1CLE9BQW1CLEVBQVMsTUFBd0IsRUFBVSxrQkFBcUM7UUFBbkcsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjs7OztRQTFCdEgsY0FBUzs7O1FBQXlCLGNBQU8sQ0FBQyxFQUFDOzs7O1FBRzNDLGVBQVU7OztRQUFHLGNBQU8sQ0FBQyxFQUFDO1FBYXRCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUkxQixjQUFTLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFFckUsZUFBVSxHQUE2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REFBc0I7O0lBRXRCLDhDQUNhOztJQUNiLCtDQUNZOztJQUNaLDZDQUNVOztJQUNWLHFEQUNvQjs7SUFDcEIscURBQ2lCOztJQUNqQixrREFDMEI7O0lBQzFCLGtEQUMwQjs7SUFDMUIsZ0RBQ2U7O0lBQ2YsbURBQ3FFOztJQUNyRSxvREFDc0U7O0lBRTFELGlEQUEwQjs7SUFBRSxnREFBK0I7Ozs7O0lBQUUsNERBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3QsIElucHV0LCBPdXRwdXQsIEluamVjdCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRBQiwgRU5URVIsIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IHBhcnNlLCBpc0RhdGUgfSBmcm9tICdkYXRlLWZucyc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9EYXRlVGltZVBpY2tlckVsZW1lbnQgfSBmcm9tICcuL0RhdGVUaW1lUGlja2VyJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVRpbWVQaWNrZXJJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS10aW1lLXBpY2tlci1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0RBVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1kYXRlLXBpY2tlci1pbnB1dCBbbmdNb2RlbF09XCJkYXRlUGFydFwiIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZURhdGUoJGV2ZW50KVwiIFtzdGFydF09XCJzdGFydFwiIFtlbmRdPVwiZW5kXCIgW21hc2tPcHRpb25zXT1cIm1hc2tPcHRpb25zXCIgKGJsdXJFdmVudCk9XCJoYW5kbGVCbHVyKCRldmVudClcIiAoZm9jdXNFdmVudCk9XCJoYW5kbGVGb2N1cygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9ub3ZvLWRhdGUtcGlja2VyLWlucHV0PlxuICAgICAgICA8bm92by10aW1lLXBpY2tlci1pbnB1dCBbbmdNb2RlbF09XCJ0aW1lUGFydFwiIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZVRpbWUoJGV2ZW50KVwiIFttaWxpdGFyeV09XCJtaWxpdGFyeVwiIChibHVyRXZlbnQpPVwiaGFuZGxlQmx1cigkZXZlbnQpXCIgKGZvY3VzRXZlbnQpPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvbm92by10aW1lLXBpY2tlci1pbnB1dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVUaW1lUGlja2VySW5wdXRFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIGRhdGVQYXJ0OiBhbnk7XG4gIHB1YmxpYyB0aW1lUGFydDogYW55O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIGF1dG9jb21wbGV0ZSBoYXMgYmVlbiB0b3VjaGVkICovXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1hc2tPcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgYmx1ckV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVQYXJ0ID0gaXNEYXRlKHZhbHVlKSA/IHBhcnNlKHZhbHVlKSA6IHZhbHVlO1xuICAgIHRoaXMudGltZVBhcnQgPSBpc0RhdGUodmFsdWUpID8gcGFyc2UodmFsdWUpIDogdmFsdWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5fc2V0VHJpZ2dlclZhbHVlKHZhbHVlKSk7XG4gIH1cbiAgdXBkYXRlRGF0ZShldmVudCkge1xuICAgIHRoaXMuZGF0ZVBhcnQgPSBldmVudDtcbiAgICB0aGlzLmNoZWNrUGFydHMoKTtcbiAgfVxuICB1cGRhdGVUaW1lKGV2ZW50KSB7XG4gICAgdGhpcy50aW1lUGFydCA9IGV2ZW50O1xuICAgIHRoaXMuY2hlY2tQYXJ0cygpO1xuICB9XG5cbiAgaGFuZGxlQmx1cihldmVudCkge1xuICAgIHRoaXMuYmx1ckV2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBjaGVja1BhcnRzKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5kYXRlUGFydCBpbnN0YW5jZW9mIERhdGUgJiYgdGhpcy50aW1lUGFydCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgbGV0IG5ld0R0ID0gbmV3IERhdGUoXG4gICAgICAgICAgdGhpcy5kYXRlUGFydC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIHRoaXMuZGF0ZVBhcnQuZ2V0TW9udGgoKSxcbiAgICAgICAgICB0aGlzLmRhdGVQYXJ0LmdldERhdGUoKSxcbiAgICAgICAgICB0aGlzLnRpbWVQYXJ0LmdldEhvdXJzKCksXG4gICAgICAgICAgdGhpcy50aW1lUGFydC5nZXRNaW51dGVzKCksXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShuZXdEdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBEYXRlIG5vdCB2YWxpZFxuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgZGlzcGF0Y2hPbkNoYW5nZShuZXdWYWx1ZT86IGFueSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgdGhpcy5fc2V0VHJpZ2dlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGV2ZW50LmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZShldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=