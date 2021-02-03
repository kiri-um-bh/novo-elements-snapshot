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
const DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoDateTimePickerInputElement)),
    multi: true,
};
export class NovoDateTimePickerInputElement {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} _changeDetectorRef
     */
    constructor(element, labels, _changeDetectorRef) {
        this.element = element;
        this.labels = labels;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * View -> model callback called when value changes
         */
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        /**
         * View -> model callback called when autocomplete has been touched
         */
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this.military = false;
        this.disabled = false;
        this.weekStart = 0;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.changeEvent = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.datePart = isDate(value) ? parse(value) : value;
        this.timePart = isDate(value) ? parse(value) : value;
        Promise.resolve(null).then((/**
         * @return {?}
         */
        () => this._setTriggerValue(value)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateDate(event) {
        this.datePart = event;
        this.checkParts();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateTime(event) {
        this.timePart = event;
        this.checkParts();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleBlur(event) {
        this.blurEvent.emit(event);
        this.changeEvent.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleFocus(event) {
        this.focusEvent.emit(event);
    }
    /**
     * @return {?}
     */
    checkParts() {
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    /**
     * @param {?=} newValue
     * @return {?}
     */
    dispatchOnChange(newValue) {
        if (newValue !== this.value) {
            this._onChange(newValue);
            this._setTriggerValue(newValue);
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setTriggerValue(value) {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setValue(event) {
        if (event && event.date) {
            this.dispatchOnChange(event.date);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setValueAndClose(event) {
        this.setValue(event);
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @return {?}
     */
    clearValue() {
        this.dispatchOnChange(null);
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return !Helpers.isEmpty(this.value);
    }
}
NovoDateTimePickerInputElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-date-time-picker-input',
                providers: [DATE_VALUE_ACCESSOR],
                template: `
    <novo-date-picker-input
      [ngModel]="datePart"
      (ngModelChange)="updateDate($event)"
      [start]="start"
      [end]="end"
      [maskOptions]="maskOptions"
      (blurEvent)="handleBlur($event)"
      (focusEvent)="handleFocus($event)"
      [disabled]="disabled"
      [weekStart]="weekStart"
    ></novo-date-picker-input>
    <novo-time-picker-input
      [ngModel]="timePart"
      (ngModelChange)="updateTime($event)"
      [military]="military"
      (blurEvent)="handleBlur($event)"
      (focusEvent)="handleFocus($event)"
      [disabled]="disabled"
    ></novo-time-picker-input>
  `
            }] }
];
/** @nocollapse */
NovoDateTimePickerInputElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
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
    focusEvent: [{ type: Output }],
    changeEvent: [{ type: Output }]
};
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
    NovoDateTimePickerInputElement.prototype.changeEvent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VySW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7TUFHeEMsbUJBQW1CLEdBQUc7SUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLEVBQUM7SUFDN0QsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQTJCRCxNQUFNLE9BQU8sOEJBQThCOzs7Ozs7SUFvQ3pDLFlBQW1CLE9BQW1CLEVBQVMsTUFBd0IsRUFBVSxrQkFBcUM7UUFBbkcsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjs7OztRQTlCdEgsY0FBUzs7O1FBQXlCLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQzs7OztRQUc1QyxlQUFVOzs7UUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFhdkIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSTFCLGNBQVMsR0FBVyxD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S0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBaEtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDthQUNGOzs7O1lBdENzQyxVQUFVO1lBSXhDLGdCQUFnQjtZQUpoQixpQkFBaUI7OzttQkFrRHZCLEtBQUs7b0JBRUwsS0FBSztrQkFFTCxLQUFLOzBCQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLE1BQU07eUJBRU4sTUFBTTswQkFFTixNQUFNOzs7O0lBaENQLCtDQUFrQjs7SUFDbEIsa0RBQXFCOztJQUNyQixrREFBcUI7Ozs7O0lBR3JCLG1EQUE0Qzs7Ozs7SUFHNUMsb0RBQXVCOztJQUV2Qiw4Q0FDYTs7SUFDYiwrQ0FDWTs7SUFDWiw2Q0FDVTs7SUFDVixxREFDb0I7O0lBQ3BCLHFEQUNpQjs7SUFDakIsa0RBQzBCOztJQUMxQixrREFDMEI7O0lBQzFCLGdEQUNlOztJQUNmLG1EQUNzQjs7SUFDdEIsbURBQ3FFOztJQUNyRSxvREFDc0U7O0lBQ3RFLHFEQUN1RTs7SUFFM0QsaURBQTBCOztJQUFFLGdEQUErQjs7Ozs7SUFBRSw0REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGlzRGF0ZSwgcGFyc2UgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBEQVRFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0RhdGVUaW1lUGlja2VySW5wdXRFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGUtdGltZS1waWNrZXItaW5wdXQnLFxuICBwcm92aWRlcnM6IFtEQVRFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1kYXRlLXBpY2tlci1pbnB1dFxuICAgICAgW25nTW9kZWxdPVwiZGF0ZVBhcnRcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlRGF0ZSgkZXZlbnQpXCJcbiAgICAgIFtzdGFydF09XCJzdGFydFwiXG4gICAgICBbZW5kXT1cImVuZFwiXG4gICAgICBbbWFza09wdGlvbnNdPVwibWFza09wdGlvbnNcIlxuICAgICAgKGJsdXJFdmVudCk9XCJoYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgKGZvY3VzRXZlbnQpPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW3dlZWtTdGFydF09XCJ3ZWVrU3RhcnRcIlxuICAgID48L25vdm8tZGF0ZS1waWNrZXItaW5wdXQ+XG4gICAgPG5vdm8tdGltZS1waWNrZXItaW5wdXRcbiAgICAgIFtuZ01vZGVsXT1cInRpbWVQYXJ0XCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZVRpbWUoJGV2ZW50KVwiXG4gICAgICBbbWlsaXRhcnldPVwibWlsaXRhcnlcIlxuICAgICAgKGJsdXJFdmVudCk9XCJoYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgKGZvY3VzRXZlbnQpPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgID48L25vdm8tdGltZS1waWNrZXItaW5wdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlVGltZVBpY2tlcklucHV0RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHVibGljIHZhbHVlOiBhbnk7XG4gIHB1YmxpYyBkYXRlUGFydDogYW55O1xuICBwdWJsaWMgdGltZVBhcnQ6IGFueTtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYXV0b2NvbXBsZXRlIGhhcyBiZWVuIHRvdWNoZWQgKi9cbiAgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1hc2tPcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB3ZWVrU3RhcnQ6IG51bWJlciA9IDA7XG4gIEBPdXRwdXQoKVxuICBibHVyRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZUV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kYXRlUGFydCA9IGlzRGF0ZSh2YWx1ZSkgPyBwYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB0aGlzLnRpbWVQYXJ0ID0gaXNEYXRlKHZhbHVlKSA/IHBhcnNlKHZhbHVlKSA6IHZhbHVlO1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZSkpO1xuICB9XG4gIHVwZGF0ZURhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmRhdGVQYXJ0ID0gZXZlbnQ7XG4gICAgdGhpcy5jaGVja1BhcnRzKCk7XG4gIH1cbiAgdXBkYXRlVGltZShldmVudCkge1xuICAgIHRoaXMudGltZVBhcnQgPSBldmVudDtcbiAgICB0aGlzLmNoZWNrUGFydHMoKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJFdmVudC5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBjaGVja1BhcnRzKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5kYXRlUGFydCBpbnN0YW5jZW9mIERhdGUgJiYgdGhpcy50aW1lUGFydCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKFxuICAgICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgICAgdGhpcy5kYXRlUGFydC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgdGhpcy5kYXRlUGFydC5nZXRNb250aCgpLFxuICAgICAgICAgICAgdGhpcy5kYXRlUGFydC5nZXREYXRlKCksXG4gICAgICAgICAgICB0aGlzLnRpbWVQYXJ0LmdldEhvdXJzKCksXG4gICAgICAgICAgICB0aGlzLnRpbWVQYXJ0LmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGVQYXJ0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLnRpbWVQYXJ0ID0gbmV3IERhdGUodGhpcy5kYXRlUGFydC5nZXRGdWxsWWVhcigpLCB0aGlzLmRhdGVQYXJ0LmdldE1vbnRoKCksIHRoaXMuZGF0ZVBhcnQuZ2V0RGF0ZSgpLCAxMiwgMCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShcbiAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBhcnQuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBhcnQuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBhcnQuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy50aW1lUGFydC5nZXRIb3VycygpLFxuICAgICAgICAgICAgdGhpcy50aW1lUGFydC5nZXRNaW51dGVzKCksXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShudWxsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIERhdGUgbm90IHZhbGlkXG4gICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwYXRjaE9uQ2hhbmdlKG5ld1ZhbHVlPzogYW55KSB7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICB0aGlzLl9zZXRUcmlnZ2VyVmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zZXRUcmlnZ2VyVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZShldmVudDogYW55IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChldmVudCAmJiBldmVudC5kYXRlKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UoZXZlbnQuZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFZhbHVlQW5kQ2xvc2UoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbnkgcHJldmlvdXMgc2VsZWN0ZWQgb3B0aW9uIGFuZCBlbWl0IGEgc2VsZWN0aW9uIGNoYW5nZSBldmVudCBmb3IgdGhpcyBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzVmFsdWUoKSB7XG4gICAgcmV0dXJuICFIZWxwZXJzLmlzRW1wdHkodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==