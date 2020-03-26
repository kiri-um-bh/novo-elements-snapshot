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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VySW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFRLEtBQUssRUFBRSxNQUFNLEVBQXFCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0lBR3hDLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSw4QkFBOEIsRUFBOUIsQ0FBOEIsRUFBQztJQUM3RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUEyREUsd0NBQW1CLE9BQW1CLEVBQVMsTUFBd0IsRUFBVSxrQkFBcUM7UUFBbkcsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjs7OztRQTVCdEgsY0FBUzs7O1FBQXlCLGNBQU8sQ0FBQyxFQUFDOzs7O1FBRzNDLGVBQVU7OztRQUFHLGNBQU8sQ0FBQyxFQUFDO1FBYXRCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUkxQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGNBQVMsR0FBNkIsSUFBSSxZQUFZ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O1lBQ0UsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBOztnQkE3SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxRQUFRLEVBQUUscXBCQW9CVDtpQkFDRjs7OztnQkF6Q3NDLFVBQVU7Z0JBT3hDLGdCQUFnQjtnQkFQaEIsaUJBQWlCOzs7dUJBcUR2QixLQUFLO3dCQUVMLEtBQUs7c0JBRUwsS0FBSzs4QkFFTCxLQUFLOzhCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLEtBQUs7NEJBRUwsS0FBSzs0QkFFTCxNQUFNOzZCQUVOLE1BQU07O0lBc0dULHFDQUFDO0NBQUEsQUE5SkQsSUE4SkM7U0FySVksOEJBQThCOzs7SUFDekMsK0NBQWtCOztJQUNsQixrREFBcUI7O0lBQ3JCLGtEQUFxQjs7Ozs7SUFHckIsbURBQTJDOzs7OztJQUczQyxvREFBc0I7O0lBRXRCLDhDQUNhOztJQUNiLCtDQUNZOztJQUNaLDZDQUNVOztJQUNWLHFEQUNvQjs7SUFDcEIscURBQ2lCOztJQUNqQixrREFDMEI7O0lBQzFCLGtEQUMwQjs7SUFDMUIsZ0RBQ2U7O0lBQ2YsbURBQ3NCOztJQUN0QixtREFDcUU7O0lBQ3JFLG9EQUNzRTs7SUFFMUQsaURBQTBCOztJQUFFLGdEQUErQjs7Ozs7SUFBRSw0REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE91dHB1dCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVEFCLCBFTlRFUiwgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgcGFyc2UsIGlzRGF0ZSB9IGZyb20gJ2RhdGUtZm5zJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0RhdGVUaW1lUGlja2VyRWxlbWVudCB9IGZyb20gJy4vRGF0ZVRpbWVQaWNrZXInO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgREFURV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9EYXRlVGltZVBpY2tlcklucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXRpbWUtcGlja2VyLWlucHV0JyxcbiAgcHJvdmlkZXJzOiBbREFURV9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tZGF0ZS1waWNrZXItaW5wdXRcbiAgICAgIFtuZ01vZGVsXT1cImRhdGVQYXJ0XCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZURhdGUoJGV2ZW50KVwiXG4gICAgICBbc3RhcnRdPVwic3RhcnRcIlxuICAgICAgW2VuZF09XCJlbmRcIlxuICAgICAgW21hc2tPcHRpb25zXT1cIm1hc2tPcHRpb25zXCJcbiAgICAgIChibHVyRXZlbnQpPVwiaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgIChmb2N1c0V2ZW50KT1cImhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFt3ZWVrU3RhcnRdPVwid2Vla1N0YXJ0XCJcbiAgICA+PC9ub3ZvLWRhdGUtcGlja2VyLWlucHV0PlxuICAgIDxub3ZvLXRpbWUtcGlja2VyLWlucHV0XG4gICAgICBbbmdNb2RlbF09XCJ0aW1lUGFydFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVUaW1lKCRldmVudClcIlxuICAgICAgW21pbGl0YXJ5XT1cIm1pbGl0YXJ5XCJcbiAgICAgIChibHVyRXZlbnQpPVwiaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgIChmb2N1c0V2ZW50KT1cImhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICA+PC9ub3ZvLXRpbWUtcGlja2VyLWlucHV0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVRpbWVQaWNrZXJJbnB1dEVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuICBwdWJsaWMgZGF0ZVBhcnQ6IGFueTtcbiAgcHVibGljIHRpbWVQYXJ0OiBhbnk7XG5cbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcyAqL1xuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYXV0b2NvbXBsZXRlIGhhcyBiZWVuIHRvdWNoZWQgKi9cbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3RhcnQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGVuZDogRGF0ZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWFza09wdGlvbnM6IGFueTtcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydDogbnVtYmVyID0gMDtcbiAgQE91dHB1dCgpXG4gIGJsdXJFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXNFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kYXRlUGFydCA9IGlzRGF0ZSh2YWx1ZSkgPyBwYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB0aGlzLnRpbWVQYXJ0ID0gaXNEYXRlKHZhbHVlKSA/IHBhcnNlKHZhbHVlKSA6IHZhbHVlO1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZSkpO1xuICB9XG4gIHVwZGF0ZURhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmRhdGVQYXJ0ID0gZXZlbnQ7XG4gICAgdGhpcy5jaGVja1BhcnRzKCk7XG4gIH1cbiAgdXBkYXRlVGltZShldmVudCkge1xuICAgIHRoaXMudGltZVBhcnQgPSBldmVudDtcbiAgICB0aGlzLmNoZWNrUGFydHMoKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgY2hlY2tQYXJ0cygpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZGF0ZVBhcnQgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMudGltZVBhcnQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShcbiAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBhcnQuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBhcnQuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBhcnQuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy50aW1lUGFydC5nZXRIb3VycygpLFxuICAgICAgICAgICAgdGhpcy50aW1lUGFydC5nZXRNaW51dGVzKCksXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRlUGFydCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdGhpcy50aW1lUGFydCA9IG5ldyBEYXRlKHRoaXMuZGF0ZVBhcnQuZ2V0RnVsbFllYXIoKSwgdGhpcy5kYXRlUGFydC5nZXRNb250aCgpLCB0aGlzLmRhdGVQYXJ0LmdldERhdGUoKSwgMTIsIDApO1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UoXG4gICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICB0aGlzLmRhdGVQYXJ0LmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICB0aGlzLmRhdGVQYXJ0LmdldE1vbnRoKCksXG4gICAgICAgICAgICB0aGlzLmRhdGVQYXJ0LmdldERhdGUoKSxcbiAgICAgICAgICAgIHRoaXMudGltZVBhcnQuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIHRoaXMudGltZVBhcnQuZ2V0TWludXRlcygpLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBEYXRlIG5vdCB2YWxpZFxuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgZGlzcGF0Y2hPbkNoYW5nZShuZXdWYWx1ZT86IGFueSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgdGhpcy5fc2V0VHJpZ2dlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGV2ZW50LmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZShldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=