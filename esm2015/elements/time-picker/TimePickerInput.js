/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Output, ViewChild, EventEmitter, HostBinding, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENTER, ESCAPE, TAB } from '@angular/cdk/keycodes';
// Vendor
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
    useExisting: forwardRef(() => NovoTimePickerInputElement),
    multi: true,
};
export class NovoTimePickerInputElement {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} dateFormatService
     * @param {?} _changeDetectorRef
     */
    constructor(element, labels, dateFormatService, _changeDetectorRef) {
        this.element = element;
        this.labels = labels;
        this.dateFormatService = dateFormatService;
        this._changeDetectorRef = _changeDetectorRef;
        this.formattedValue = '';
        /**
         * View -> model callback called when value changes
         */
        this._onChange = () => { };
        /**
         * View -> model callback called when autocomplete has been touched
         */
        this._onTouched = () => { };
        this.military = false;
        this.disabled = false;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.placeholder = this.military ? this.labels.timeFormatPlaceholder24Hour : this.labels.timeFormatPlaceholderAM;
        this.maskOptions = {
            mask: this.military ? [/\d/, /\d/, ':', /\d/, /\d/] : [/\d/, /\d/, ':', /\d/, /\d/, ' ', /[aApP]/, /[mM]/],
            pipe: this.military ? createAutoCorrectedDatePipe('HH:MM') : createAutoCorrectedDatePipe('mm:MM'),
            keepCharPositions: false,
            guide: true,
        };
    }
    /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    openPanel() {
        if (!this.overlay.panelOpen) {
            this.overlay.openPanel();
            /** @type {?} */
            let hour = new Date().getHours();
            Promise.resolve(null).then(() => this.scrollToIndex(hour * 4));
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
            this.closePanel();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleInput(event) {
        if (document.activeElement === event.target) {
            // this._onChange((event.target as HTMLInputElement).value);
            /** @type {?} */
            let text = ((/** @type {?} */ (event.target))).value;
            if (this.military ? text.replace(/_/g, '').length === 5 : text.replace(/_/g, '').length === 8) {
                let [dateTimeValue, formatted] = this.dateFormatService.parseString(text, this.military, 'time');
                this.dispatchOnChange(dateTimeValue);
            }
            else {
                this.dispatchOnChange(null);
            }
            this.openPanel();
            /** @type {?} */
            let num = Number(text.split(':')[0]);
            this.scrollToIndex(num * 4);
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        Promise.resolve(null).then(() => this._setTriggerValue(value));
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
     * @param {?=} skip
     * @return {?}
     */
    dispatchOnChange(newValue, skip = false) {
        if (newValue !== this.value) {
            this._onChange(newValue);
            !skip && this.writeValue(newValue);
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setTriggerValue(value) {
        if (value instanceof Date && this.value instanceof Date) {
            value = new Date(value.setFullYear(this.value.getFullYear(), this.value.getMonth(), this.value.getDate()));
        }
        this.value = value;
        if (this.value) {
            this.formattedValue = this.formatDateValue(this.value);
        }
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
        if (!value) {
            return '';
        }
        /** @type {?} */
        let format = this.labels.formatDateWithFormat(value, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: !this.military,
        });
        if (format.split(':')[0].length === 1) {
            return `0${format}`;
        }
        return format;
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return !Helpers.isEmpty(this.value);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollToIndex(index) {
        /** @type {?} */
        let element = this.overlay.overlayRef.overlayElement;
        /** @type {?} */
        let list = element.querySelector('.increments');
        /** @type {?} */
        let items = list.querySelectorAll('novo-list-item');
        /** @type {?} */
        let item = items[index];
        if (item) {
            list.scrollTop = ((/** @type {?} */ (item))).offsetTop;
        }
    }
}
NovoTimePickerInputElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-time-picker-input',
                providers: [DATE_VALUE_ACCESSOR],
                template: `
    <input type="text" [name]="name" [(ngModel)]="formattedValue" [textMask]="maskOptions" [placeholder]="placeholder" (focus)="_handleFocus($event)"
           (keydown)="_handleKeydown($event)" (input)="_handleInput($event)" (blur)="_handleBlur($event)" #input data-automation-id="time-input" [disabled]="disabled"/>
    <i *ngIf="!hasValue" (click)="openPanel()" class="bhi-clock"></i>
    <i *ngIf="hasValue" (click)="clearValue()" class="bhi-times"></i>

    <novo-overlay-template [parent]="element" position="above-below">
      <novo-time-picker inline="true" (onSelect)="setValue($event)" [ngModel]="value" [military]="military"></novo-time-picker>
    </novo-overlay-template>
  `
            }] }
];
/** @nocollapse */
NovoTimePickerInputElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: DateFormatService },
    { type: ChangeDetectorRef }
];
NovoTimePickerInputElement.propDecorators = {
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    military: [{ type: Input }],
    maskOptions: [{ type: Input }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }, { type: Input }],
    blurEvent: [{ type: Output }],
    focusEvent: [{ type: Output }],
    overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent,] }]
};
if (false) {
    /** @type {?} */
    NovoTimePickerInputElement.prototype.value;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.formattedValue;
    /**
     * View -> model callback called when value changes
     * @type {?}
     */
    NovoTimePickerInputElement.prototype._onChange;
    /**
     * View -> model callback called when autocomplete has been touched
     * @type {?}
     */
    NovoTimePickerInputElement.prototype._onTouched;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.name;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.placeholder;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.military;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.maskOptions;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.disabled;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.blurEvent;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.focusEvent;
    /**
     * Element for the panel containing the autocomplete options.
     * @type {?}
     */
    NovoTimePickerInputElement.prototype.overlay;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.element;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.labels;
    /** @type {?} */
    NovoTimePickerInputElement.prototype.dateFormatService;
    /**
     * @type {?}
     * @protected
     */
    NovoTimePickerInputElement.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RpbWUtcGlja2VyL1RpbWVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTNELE9BQU8sMkJBQTJCLE1BQU0sbURBQW1ELENBQUM7O0FBRTVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O01BR3BFLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUN6RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBZ0JELE1BQU0sT0FBTywwQkFBMEI7Ozs7Ozs7SUE0QnJDLFlBQ1MsT0FBbUIsRUFDbkIsTUFBd0IsRUFDeEIsaUJBQW9DLEVBQ2pDLGtCQUFxQztRQUh4QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFD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QUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLEVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUNsRDtJQUNILENBQUM7OztZQS9MRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRjs7OztZQXZDQyxVQUFVO1lBZUgsZ0JBQWdCO1lBRWhCLGlCQUFpQjtZQW5CeEIsaUJBQWlCOzs7bUJBbURoQixLQUFLOzBCQUVMLEtBQUs7dUJBRUwsS0FBSzswQkFFTCxLQUFLO3VCQUVMLFdBQVcsU0FBQyxnQkFBZ0IsY0FDNUIsS0FBSzt3QkFFTCxNQUFNO3lCQUVOLE1BQU07c0JBR04sU0FBUyxTQUFDLDRCQUE0Qjs7OztJQXhCdkMsMkNBQWtCOztJQUNsQixvREFBbUM7Ozs7O0lBR25DLCtDQUEyQzs7Ozs7SUFFM0MsZ0RBQXNCOztJQUV0QiwwQ0FDYTs7SUFDYixpREFDb0I7O0lBQ3BCLDhDQUMwQjs7SUFDMUIsaURBQ2lCOztJQUNqQiw4Q0FFMEI7O0lBQzFCLCtDQUNxRTs7SUFDckUsZ0RBQ3NFOzs7OztJQUV0RSw2Q0FDc0M7O0lBR3BDLDZDQUEwQjs7SUFDMUIsNENBQStCOztJQUMvQix1REFBMkM7Ozs7O0lBQzNDLHdEQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFTlRFUiwgRVNDQVBFLCBUQUIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlIGZyb20gJ3RleHQtbWFzay1hZGRvbnMvZGlzdC9jcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUnO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBEQVRFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1RpbWVQaWNrZXJJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGltZS1waWNrZXItaW5wdXQnLFxuICBwcm92aWRlcnM6IFtEQVRFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmFtZV09XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJmb3JtYXR0ZWRWYWx1ZVwiIFt0ZXh0TWFza109XCJtYXNrT3B0aW9uc1wiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChmb2N1cyk9XCJfaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIiAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KCRldmVudClcIiAoYmx1cik9XCJfaGFuZGxlQmx1cigkZXZlbnQpXCIgI2lucHV0IGRhdGEtYXV0b21hdGlvbi1pZD1cInRpbWUtaW5wdXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIi8+XG4gICAgPGkgKm5nSWY9XCIhaGFzVmFsdWVcIiAoY2xpY2spPVwib3BlblBhbmVsKClcIiBjbGFzcz1cImJoaS1jbG9ja1wiPjwvaT5cbiAgICA8aSAqbmdJZj1cImhhc1ZhbHVlXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPlxuXG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCI+XG4gICAgICA8bm92by10aW1lLXBpY2tlciBpbmxpbmU9XCJ0cnVlXCIgKG9uU2VsZWN0KT1cInNldFZhbHVlKCRldmVudClcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIFttaWxpdGFyeV09XCJtaWxpdGFyeVwiPjwvbm92by10aW1lLXBpY2tlcj5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbWVQaWNrZXJJbnB1dEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHVibGljIHZhbHVlOiBhbnk7XG4gIHB1YmxpYyBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcyAqL1xuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIGF1dG9jb21wbGV0ZSBoYXMgYmVlbiB0b3VjaGVkICovXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1hc2tPcHRpb25zOiBhbnk7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgYmx1ckV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRlRm9ybWF0U2VydmljZTogRGF0ZUZvcm1hdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5taWxpdGFyeSA/IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlcjI0SG91ciA6IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSB7XG4gICAgICBtYXNrOiB0aGlzLm1pbGl0YXJ5ID8gWy9cXGQvLCAvXFxkLywgJzonLCAvXFxkLywgL1xcZC9dIDogWy9cXGQvLCAvXFxkLywgJzonLCAvXFxkLywgL1xcZC8sICcgJywgL1thQXBQXS8sIC9bbU1dL10sXG4gICAgICBwaXBlOiB0aGlzLm1pbGl0YXJ5ID8gY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlKCdISDpNTScpIDogY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlKCdtbTpNTScpLFxuICAgICAga2VlcENoYXJQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgZ3VpZGU6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBCRUdJTjogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXkucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gICAgICBsZXQgaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuc2Nyb2xsVG9JbmRleChob3VyICogNCkpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG5cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgfHwgZXZlbnQua2V5Q29kZSA9PT0gRU5URVIgfHwgZXZlbnQua2V5Q29kZSA9PT0gVEFCKSAmJiB0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIC8vIHRoaXMuX29uQ2hhbmdlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgbGV0IHRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgaWYgKHRoaXMubWlsaXRhcnkgPyB0ZXh0LnJlcGxhY2UoL18vZywgJycpLmxlbmd0aCA9PT0gNSA6IHRleHQucmVwbGFjZSgvXy9nLCAnJykubGVuZ3RoID09PSA4KSB7XG4gICAgICAgIGxldCBbZGF0ZVRpbWVWYWx1ZSwgZm9ybWF0dGVkXSA9IHRoaXMuZGF0ZUZvcm1hdFNlcnZpY2UucGFyc2VTdHJpbmcodGV4dCwgdGhpcy5taWxpdGFyeSwgJ3RpbWUnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGRhdGVUaW1lVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIGxldCBudW0gPSBOdW1iZXIodGV4dC5zcGxpdCgnOicpWzBdKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9JbmRleChudW0gKiA0KTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYmx1ckV2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgX2hhbmRsZUZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB0aGlzLmZvY3VzRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLl9zZXRUcmlnZ2VyVmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgZGlzcGF0Y2hPbkNoYW5nZShuZXdWYWx1ZT86IGFueSwgc2tpcDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAhc2tpcCAmJiB0aGlzLndyaXRlVmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiB0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS5zZXRGdWxsWWVhcih0aGlzLnZhbHVlLmdldEZ1bGxZZWFyKCksIHRoaXMudmFsdWUuZ2V0TW9udGgoKSwgdGhpcy52YWx1ZS5nZXREYXRlKCkpKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXREYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmRhdGUpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShldmVudC5kYXRlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWVBbmRDbG9zZShldmVudDogYW55IHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQpO1xuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFueSBwcmV2aW91cyBzZWxlY3RlZCBvcHRpb24gYW5kIGVtaXQgYSBzZWxlY3Rpb24gY2hhbmdlIGV2ZW50IGZvciB0aGlzIG9wdGlvblxuICAgKi9cbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXREYXRlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBmb3JtYXQgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZSwge1xuICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICBob3VyMTI6ICF0aGlzLm1pbGl0YXJ5LFxuICAgIH0pO1xuICAgIGlmIChmb3JtYXQuc3BsaXQoJzonKVswXS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBgMCR7Zm9ybWF0fWA7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgbGV0IGxpc3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmNyZW1lbnRzJyk7XG4gICAgbGV0IGl0ZW1zID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdub3ZvLWxpc3QtaXRlbScpO1xuICAgIGxldCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBsaXN0LnNjcm9sbFRvcCA9IChpdGVtIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG59XG4iXX0=