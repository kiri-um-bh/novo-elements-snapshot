/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoTimePickerInputElement)),
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
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.placeholder = this.military ? this.labels.timeFormatPlaceholder24Hour : this.labels.timeFormatPlaceholderAM;
        this.maskOptions = {
            mask: this.military ? [/\d/, /\d/, ':', /\d/, /\d/] : [/\d/, /\d/, ':', /\d/, /\d/, ' ', /[aApP上下]/, /[mM午]/],
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
            Promise.resolve(null).then((/**
             * @return {?}
             */
            () => this.scrollToIndex(hour * 4)));
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
        let format = this.labels.formatTimeWithFormat(value, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RpbWUtcGlja2VyL1RpbWVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTNELE9BQU8sMkJBQTJCLE1BQU0sbURBQW1ELENBQUM7O0FBRTVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O01BR3BFLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixFQUFDO0lBQ3pELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFnQkQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7OztJQTRCckMsWUFDUyxPQUFtQixFQUNuQixNQUF3QixFQUN4QixpQkFBb0MsRUFDakMsa0JBQXFDO1FBSHhDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtR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QUU7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsbUJBQUEsSUFBSSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7WUEvTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2FBQ0Y7Ozs7WUF2Q0MsVUFBVTtZQWVILGdCQUFnQjtZQUVoQixpQkFBaUI7WUFuQnhCLGlCQUFpQjs7O21CQW1EaEIsS0FBSzswQkFFTCxLQUFLO3VCQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLEtBQUs7d0JBRUwsTUFBTTt5QkFFTixNQUFNO3NCQUdOLFNBQVMsU0FBQyw0QkFBNEI7Ozs7SUF4QnZDLDJDQUFrQjs7SUFDbEIsb0RBQW1DOzs7OztJQUduQywrQ0FBMkM7Ozs7O0lBRTNDLGdEQUFzQjs7SUFFdEIsMENBQ2E7O0lBQ2IsaURBQ29COztJQUNwQiw4Q0FDMEI7O0lBQzFCLGlEQUNpQjs7SUFDakIsOENBRTBCOztJQUMxQiwrQ0FDcUU7O0lBQ3JFLGdEQUNzRTs7Ozs7SUFFdEUsNkNBQ3NDOztJQUdwQyw2Q0FBMEI7O0lBQzFCLDRDQUErQjs7SUFDL0IsdURBQTJDOzs7OztJQUMzQyx3REFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRU5URVIsIEVTQ0FQRSwgVEFCIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbi8vIFZlbmRvclxuaW1wb3J0IGNyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgREFURV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9UaW1lUGlja2VySW5wdXRFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpbWUtcGlja2VyLWlucHV0JyxcbiAgcHJvdmlkZXJzOiBbREFURV9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25hbWVdPVwibmFtZVwiIFsobmdNb2RlbCldPVwiZm9ybWF0dGVkVmFsdWVcIiBbdGV4dE1hc2tdPVwibWFza09wdGlvbnNcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAoZm9jdXMpPVwiX2hhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAoa2V5ZG93bik9XCJfaGFuZGxlS2V5ZG93bigkZXZlbnQpXCIgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCIgKGJsdXIpPVwiX2hhbmRsZUJsdXIoJGV2ZW50KVwiICNpbnB1dCBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0aW1lLWlucHV0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIvPlxuICAgIDxpICpuZ0lmPVwiIWhhc1ZhbHVlXCIgKGNsaWNrKT1cIm9wZW5QYW5lbCgpXCIgY2xhc3M9XCJiaGktY2xvY2tcIj48L2k+XG4gICAgPGkgKm5nSWY9XCJoYXNWYWx1ZVwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIiBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT5cblxuICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgW3BhcmVudF09XCJlbGVtZW50XCIgcG9zaXRpb249XCJhYm92ZS1iZWxvd1wiPlxuICAgICAgPG5vdm8tdGltZS1waWNrZXIgaW5saW5lPVwidHJ1ZVwiIChvblNlbGVjdCk9XCJzZXRWYWx1ZSgkZXZlbnQpXCIgW25nTW9kZWxdPVwidmFsdWVcIiBbbWlsaXRhcnldPVwibWlsaXRhcnlcIj48L25vdm8tdGltZS1waWNrZXI+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaW1lUGlja2VySW5wdXRFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuICBwdWJsaWMgZm9ybWF0dGVkVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtaWxpdGFyeTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBtYXNrT3B0aW9uczogYW55O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGJsdXJFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXNFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICAvKiogRWxlbWVudCBmb3IgdGhlIHBhbmVsIGNvbnRhaW5pbmcgdGhlIGF1dG9jb21wbGV0ZSBvcHRpb25zLiAqL1xuICBAVmlld0NoaWxkKE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIG92ZXJsYXk6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZUZvcm1hdFNlcnZpY2U6IERhdGVGb3JtYXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubWlsaXRhcnkgPyB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXIyNEhvdXIgOiB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXJBTTtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0ge1xuICAgICAgbWFzazogdGhpcy5taWxpdGFyeSA/IFsvXFxkLywgL1xcZC8sICc6JywgL1xcZC8sIC9cXGQvXSA6IFsvXFxkLywgL1xcZC8sICc6JywgL1xcZC8sIC9cXGQvLCAnICcsIC9bYUFwUOS4iuS4i10vLCAvW21N5Y2IXS9dLFxuICAgICAgcGlwZTogdGhpcy5taWxpdGFyeSA/IGNyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSgnSEg6TU0nKSA6IGNyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSgnbW06TU0nKSxcbiAgICAgIGtlZXBDaGFyUG9zaXRpb25zOiBmYWxzZSxcbiAgICAgIGd1aWRlOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vdmVybGF5LnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICAgICAgbGV0IGhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLnNjcm9sbFRvSW5kZXgoaG91ciAqIDQpKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5LnBhbmVsT3BlbjtcbiAgfVxuXG4gIC8qKiBFTkQ6IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cblxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFIHx8IGV2ZW50LmtleUNvZGUgPT09IEVOVEVSIHx8IGV2ZW50LmtleUNvZGUgPT09IFRBQikgJiYgdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAvLyB0aGlzLl9vbkNoYW5nZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgIGxldCB0ZXh0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgIGlmICh0aGlzLm1pbGl0YXJ5ID8gdGV4dC5yZXBsYWNlKC9fL2csICcnKS5sZW5ndGggPT09IDUgOiB0ZXh0LnJlcGxhY2UoL18vZywgJycpLmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBsZXQgW2RhdGVUaW1lVmFsdWUsIGZvcm1hdHRlZF0gPSB0aGlzLmRhdGVGb3JtYXRTZXJ2aWNlLnBhcnNlU3RyaW5nKHRleHQsIHRoaXMubWlsaXRhcnksICd0aW1lJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShkYXRlVGltZVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hPbkNoYW5nZShudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgICBsZXQgbnVtID0gTnVtYmVyKHRleHQuc3BsaXQoJzonKVswXSk7XG4gICAgICB0aGlzLnNjcm9sbFRvSW5kZXgobnVtICogNCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXJFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIF9oYW5kbGVGb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5fc2V0VHJpZ2dlclZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgcHVibGljIGRpc3BhdGNoT25DaGFuZ2UobmV3VmFsdWU/OiBhbnksIHNraXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgIXNraXAgJiYgdGhpcy53cml0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmlnZ2VyVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgdGhpcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUuc2V0RnVsbFllYXIodGhpcy52YWx1ZS5nZXRGdWxsWWVhcigpLCB0aGlzLnZhbHVlLmdldE1vbnRoKCksIHRoaXMudmFsdWUuZ2V0RGF0ZSgpKSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0RGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZShldmVudDogYW55IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChldmVudCAmJiBldmVudC5kYXRlKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UoZXZlbnQuZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFZhbHVlQW5kQ2xvc2UoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKGV2ZW50KTtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbnkgcHJldmlvdXMgc2VsZWN0ZWQgb3B0aW9uIGFuZCBlbWl0IGEgc2VsZWN0aW9uIGNoYW5nZSBldmVudCBmb3IgdGhpcyBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSAnJztcbiAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5sYWJlbHMuZm9ybWF0VGltZVdpdGhGb3JtYXQodmFsdWUsIHtcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgaG91cjEyOiAhdGhpcy5taWxpdGFyeSxcbiAgICB9KTtcbiAgICBpZiAoZm9ybWF0LnNwbGl0KCc6JylbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gYDAke2Zvcm1hdH1gO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgIGxldCBsaXN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW5jcmVtZW50cycpO1xuICAgIGxldCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnbm92by1saXN0LWl0ZW0nKTtcbiAgICBsZXQgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgbGlzdC5zY3JvbGxUb3AgPSAoaXRlbSBhcyBIVE1MRWxlbWVudCkub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxufVxuIl19