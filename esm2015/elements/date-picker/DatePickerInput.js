/**
 * @fileoverview added by tsickle
 * Generated from: elements/date-picker/DatePickerInput.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoDatePickerInputElement)),
    multi: true,
};
export class NovoDatePickerInputElement {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} _changeDetectorRef
     * @param {?} dateFormatService
     */
    constructor(element, labels, _changeDetectorRef, dateFormatService) {
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
        () => { });
        /**
         * View -> model callback called when autocomplete has been touched
         */
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this.textMaskEnabled = true;
        this.allowInvalidDate = false;
        this.disabled = false;
        this.weekStart = 0;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.placeholder = this.labels.dateFormatString().toUpperCase() || this.labels.dateFormatPlaceholder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    openPanel() {
        if (!this.disabled) {
            this.overlay.openPanel();
        }
    }
    /**
     * @return {?}
     */
    closePanel() {
        this.overlay.closePanel();
    }
    /**
     * @return {?}
     */
    get panelOpen() {
        return this.overlay && this.overlay.panelOpen;
    }
    /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if ((event.keyCode === ESCAPE || event.keyCode === ENTER || event.keyCode === TAB) && this.panelOpen) {
            this._handleEvent(event, true);
            this.closePanel();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleInput(event) {
        if (document.activeElement === event.target) {
            this._handleEvent(event, false);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleBlur(event) {
        this.blurEvent.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleFocus(event) {
        this.openPanel();
        this.focusEvent.emit(event);
    }
    /**
     * @param {?} event
     * @param {?} blur
     * @return {?}
     */
    _handleEvent(event, blur) {
        /** @type {?} */
        let value = ((/** @type {?} */ (event.target))).value;
        if (value === '') {
            this.clearValue();
            this.closePanel();
        }
        else {
            this.formatDate(value, blur);
            this.openPanel();
        }
    }
    /**
     * @protected
     * @param {?} value
     * @param {?} blur
     * @return {?}
     */
    formatDate(value, blur) {
        try {
            const [dateTimeValue, formatted] = this.dateFormatService.parseString(value, false, 'date');
            if (!isNaN(dateTimeValue.getUTCDate())) {
                /** @type {?} */
                const dt = new Date(dateTimeValue);
                this.dispatchOnChange(dt, blur);
            }
            else {
                this.dispatchOnChange(null, blur);
            }
        }
        catch (err) { }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        Promise.resolve(null).then((/**
         * @return {?}
         */
        () => this._setTriggerValue(value)));
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
     * @param {?=} blur
     * @param {?=} skip
     * @return {?}
     */
    dispatchOnChange(newValue, blur = false, skip = false) {
        if (newValue !== this.value) {
            this._onChange(newValue);
            if (blur) {
                !skip && this.writeValue(newValue);
            }
            else {
                !skip && this._setCalendarValue(newValue);
            }
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setTriggerValue(value) {
        this._setCalendarValue(value);
        this._setFormValue(value);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setCalendarValue(value) {
        if (value instanceof Date && this.value instanceof Date) {
            value = new Date(value.setHours(this.value.getHours(), this.value.getMinutes()));
        }
        this.value = value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setFormValue(value) {
        if (this.value) {
            /** @type {?} */
            const test = this.formatDateValue(this.value);
            this.formattedValue = test;
        }
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    setValueAndClose(event) {
        if (event && event.date) {
            this.dispatchOnChange(event.date, true);
        }
        this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @return {?}
     */
    clearValue() {
        this.formattedValue = '';
        this.dispatchOnChange(null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatDateValue(value) {
        /** @type {?} */
        const originalValue = value;
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
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return !Helpers.isEmpty(this.value);
    }
}
NovoDatePickerInputElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-date-picker-input',
                providers: [DATE_VALUE_ACCESSOR],
                template: `
        <input type="text" [name]="name" [(ngModel)]="formattedValue" [textMask]="maskOptions" [placeholder]="placeholder" (focus)="_handleFocus($event)" (keydown)="_handleKeydown($event)" (input)="_handleInput($event)" (blur)="_handleBlur($event)" #input data-automation-id="date-input" [disabled]="disabled"/>
        <i *ngIf="!hasValue" (click)="openPanel()" class="bhi-calendar"></i>
        <i *ngIf="hasValue" (click)="clearValue()" class="bhi-times"></i>
        <novo-overlay-template [parent]="element" position="above-below">
            <novo-date-picker [start]="start" [end]="end" inline="true" (onSelect)="setValueAndClose($event)" [ngModel]="value" [weekStart]="weekStart"></novo-date-picker>
        </novo-overlay-template>
  `
            }] }
];
/** @nocollapse */
NovoDatePickerInputElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef },
    { type: DateFormatService }
];
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
    weekStart: [{ type: Input }],
    blurEvent: [{ type: Output }],
    focusEvent: [{ type: Output }],
    overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: false },] }]
};
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
    NovoDatePickerInputElement.prototype.weekStart;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGUtcGlja2VyL0RhdGVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUzRCxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLDJCQUEyQixNQUFNLG1EQUFtRCxDQUFDOztBQUU1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7OztNQUdwRSxtQkFBbUIsR0FBRztJQUMxQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQywwQkFBMEIsRUFBQztJQUN6RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBY0QsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7OztJQXdDckMsWUFDUyxPQUFtQixFQUNuQixNQUF3QixFQUN2QixrQkFBcUMsRUFDdEMsaUJBQW9DO1FBSHBDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FB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bkMsK0NBQTJDOzs7OztJQUczQyxnREFBc0I7O0lBRXRCLDBDQUNhOztJQUNiLDJDQUNZOztJQUNaLHlDQUNVOztJQUNWLGlEQUNvQjs7SUFDcEIsaURBQ2lCOztJQUNqQiw0Q0FDZTs7SUFDZixxREFDZ0M7O0lBQ2hDLHNEQUNrQzs7SUFDbEMsOENBRTBCOztJQUMxQiwrQ0FDc0I7O0lBQ3RCLCtDQUNxRTs7SUFDckUsZ0RBQ3NFOzs7OztJQUV0RSw2Q0FDc0M7O0lBR3BDLDZDQUEwQjs7SUFDMUIsNENBQStCOzs7OztJQUMvQix3REFBNkM7O0lBQzdDLHVEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUQUIsIEVOVEVSLCBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtZm9ybWF0L0RhdGVGb3JtYXQnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXBpY2tlci1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0RBVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmFtZV09XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJmb3JtYXR0ZWRWYWx1ZVwiIFt0ZXh0TWFza109XCJtYXNrT3B0aW9uc1wiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChmb2N1cyk9XCJfaGFuZGxlRm9jdXMoJGV2ZW50KVwiIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIiAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KCRldmVudClcIiAoYmx1cik9XCJfaGFuZGxlQmx1cigkZXZlbnQpXCIgI2lucHV0IGRhdGEtYXV0b21hdGlvbi1pZD1cImRhdGUtaW5wdXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIi8+XG4gICAgICAgIDxpICpuZ0lmPVwiIWhhc1ZhbHVlXCIgKGNsaWNrKT1cIm9wZW5QYW5lbCgpXCIgY2xhc3M9XCJiaGktY2FsZW5kYXJcIj48L2k+XG4gICAgICAgIDxpICpuZ0lmPVwiaGFzVmFsdWVcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgpXCIgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+XG4gICAgICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgW3BhcmVudF09XCJlbGVtZW50XCIgcG9zaXRpb249XCJhYm92ZS1iZWxvd1wiPlxuICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgW3N0YXJ0XT1cInN0YXJ0XCIgW2VuZF09XCJlbmRcIiBpbmxpbmU9XCJ0cnVlXCIgKG9uU2VsZWN0KT1cInNldFZhbHVlQW5kQ2xvc2UoJGV2ZW50KVwiIFtuZ01vZGVsXT1cInZhbHVlXCIgW3dlZWtTdGFydF09XCJ3ZWVrU3RhcnRcIj48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSB1c2VyRGVmaW5lZEZvcm1hdDogYm9vbGVhbjtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdGFydDogRGF0ZTtcbiAgQElucHV0KClcbiAgZW5kOiBEYXRlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXNrT3B0aW9uczogYW55O1xuICBASW5wdXQoKVxuICBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGV4dE1hc2tFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgYWxsb3dJbnZhbGlkRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiBudW1iZXIgPSAwO1xuICBAT3V0cHV0KClcbiAgYmx1ckV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIG92ZXJsYXk6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRTdHJpbmcoKS50b1VwcGVyQ2FzZSgpIHx8IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlckRlZmluZWRGb3JtYXQgPSB0aGlzLmZvcm1hdCA/ICF0aGlzLmZvcm1hdC5tYXRjaCgvXihERFxcL01NXFwvWVlZWXxNTVxcL0REXFwvWVlZWSkkL2cpIDogZmFsc2U7XG4gICAgaWYgKCF0aGlzLnVzZXJEZWZpbmVkRm9ybWF0ICYmIHRoaXMudGV4dE1hc2tFbmFibGVkICYmICF0aGlzLmFsbG93SW52YWxpZERhdGUpIHtcbiAgICAgIHRoaXMubWFza09wdGlvbnMgPSB0aGlzLm1hc2tPcHRpb25zIHx8IHtcbiAgICAgICAgbWFzazogdGhpcy5kYXRlRm9ybWF0U2VydmljZS5nZXREYXRlTWFzaygpLFxuICAgICAgICBwaXBlOiBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUodGhpcy5mb3JtYXQgfHwgdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICBrZWVwQ2hhclBvc2l0aW9uczogZmFsc2UsXG4gICAgICAgIGd1aWRlOiB0cnVlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXNrT3B0aW9ucyA9IHsgbWFzazogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5jbG9zZVBhbmVsKCk7XG4gIH1cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgfHwgZXZlbnQua2V5Q29kZSA9PT0gRU5URVIgfHwgZXZlbnQua2V5Q29kZSA9PT0gVEFCKSAmJiB0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5faGFuZGxlRXZlbnQoZXZlbnQsIHRydWUpO1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLl9oYW5kbGVFdmVudChldmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ibHVyRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIF9oYW5kbGVFdmVudChldmVudDogRXZlbnQsIGJsdXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybWF0RGF0ZSh2YWx1ZSwgYmx1cik7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmb3JtYXREYXRlKHZhbHVlOiBzdHJpbmcsIGJsdXI6IGJvb2xlYW4pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW2RhdGVUaW1lVmFsdWUsIGZvcm1hdHRlZF0gPSB0aGlzLmRhdGVGb3JtYXRTZXJ2aWNlLnBhcnNlU3RyaW5nKHZhbHVlLCBmYWxzZSwgJ2RhdGUnKTtcbiAgICAgIGlmICghaXNOYU4oZGF0ZVRpbWVWYWx1ZS5nZXRVVENEYXRlKCkpKSB7XG4gICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoZGF0ZVRpbWVWYWx1ZSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShkdCwgYmx1cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCwgYmx1cik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5fc2V0VHJpZ2dlclZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgcHVibGljIGRpc3BhdGNoT25DaGFuZ2UobmV3VmFsdWU/OiBhbnksIGJsdXI6IGJvb2xlYW4gPSBmYWxzZSwgc2tpcDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICBpZiAoYmx1cikge1xuICAgICAgICAhc2tpcCAmJiB0aGlzLndyaXRlVmFsdWUobmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIXNraXAgJiYgdGhpcy5fc2V0Q2FsZW5kYXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRDYWxlbmRhclZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLl9zZXRGb3JtVmFsdWUodmFsdWUpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Q2FsZW5kYXJWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiB0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS5zZXRIb3Vycyh0aGlzLnZhbHVlLmdldEhvdXJzKCksIHRoaXMudmFsdWUuZ2V0TWludXRlcygpKSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZvcm1WYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIGNvbnN0IHRlc3QgPSB0aGlzLmZvcm1hdERhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB0ZXN0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjbG9zZXMgdGhlIHBhbmVsLCBhbmQgaWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQsIGFsc28gc2V0cyB0aGUgYXNzb2NpYXRlZFxuICAgKiBjb250cm9sIHRvIHRoYXQgdmFsdWUuIEl0IHdpbGwgYWxzbyBtYXJrIHRoZSBjb250cm9sIGFzIGRpcnR5IGlmIHRoaXMgaW50ZXJhY3Rpb25cbiAgICogc3RlbW1lZCBmcm9tIHRoZSB1c2VyLlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlQW5kQ2xvc2UoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGV2ZW50LmRhdGUsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbnkgcHJldmlvdXMgc2VsZWN0ZWQgb3B0aW9uIGFuZCBlbWl0IGEgc2VsZWN0aW9uIGNoYW5nZSBldmVudCBmb3IgdGhpcyBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSAnJztcbiAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnVzZXJEZWZpbmVkRm9ybWF0ICYmIGRhdGVGbnMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICB9XG4gICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKCEoaXNOYU4odmFsdWUudmFsdWVPZigpKSAmJiB0aGlzLmFsbG93SW52YWxpZERhdGUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZSwge1xuICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzVmFsdWUoKSB7XG4gICAgcmV0dXJuICFIZWxwZXJzLmlzRW1wdHkodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==