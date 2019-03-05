/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** View -> model callback called when value changes */
        this._onChange = () => { };
        /** View -> model callback called when autocomplete has been touched */
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
    /** @type {?} */
    NovoTimePickerInputElement.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RpbWUtcGlja2VyL1RpbWVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTNELE9BQU8sMkJBQTJCLE1BQU0sbURBQW1ELENBQUM7O0FBRTVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O01BR3BFLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUN6RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBZ0JELE1BQU07Ozs7Ozs7SUE0QkosWUFDUyxPQUFtQixFQUNuQixNQUF3QixFQUN4QixpQkFBb0MsRUFDakMsa0JBQXFDO1FBSHhDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNqQyx1QkFBa0IsR0FB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QUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLEVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUNsRDtJQUNILENBQUM7OztZQS9MRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRjs7O1lBdkNDLFVBQVU7WUFlSCxnQkFBZ0I7WUFFaEIsaUJBQWlCO1lBbkJ4QixpQkFBaUI7OzttQkFtRGhCLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLOzBCQUVMLEtBQUs7dUJBRUwsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLO3dCQUVMLE1BQU07eUJBRU4sTUFBTTtzQkFHTixTQUFTLFNBQUMsNEJBQTRCOzs7O0lBeEJ2QywyQ0FBa0I7O0lBQ2xCLG9EQUFtQzs7Ozs7SUFHbkMsK0NBQTJDOzs7OztJQUUzQyxnREFBc0I7O0lBRXRCLDBDQUNhOztJQUNiLGlEQUNvQjs7SUFDcEIsOENBQzBCOztJQUMxQixpREFDaUI7O0lBQ2pCLDhDQUUwQjs7SUFDMUIsK0NBQ3FFOztJQUNyRSxnREFDc0U7Ozs7O0lBRXRFLDZDQUNzQzs7SUFHcEMsNkNBQTBCOztJQUMxQiw0Q0FBK0I7O0lBQy9CLHVEQUEyQzs7SUFDM0Msd0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVOVEVSLCBFU0NBUEUsIFRBQiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG4vLyBWZW5kb3JcbmltcG9ydCBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtZm9ybWF0L0RhdGVGb3JtYXQnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvVGltZVBpY2tlcklucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aW1lLXBpY2tlci1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0RBVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtuYW1lXT1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cImZvcm1hdHRlZFZhbHVlXCIgW3RleHRNYXNrXT1cIm1hc2tPcHRpb25zXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgKGZvY3VzKT1cIl9oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgKGtleWRvd24pPVwiX2hhbmRsZUtleWRvd24oJGV2ZW50KVwiIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQoJGV2ZW50KVwiIChibHVyKT1cIl9oYW5kbGVCbHVyKCRldmVudClcIiAjaW5wdXQgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGltZS1pbnB1dFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiLz5cbiAgICA8aSAqbmdJZj1cIiFoYXNWYWx1ZVwiIChjbGljayk9XCJvcGVuUGFuZWwoKVwiIGNsYXNzPVwiYmhpLWNsb2NrXCI+PC9pPlxuICAgIDxpICpuZ0lmPVwiaGFzVmFsdWVcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgpXCIgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+XG5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIj5cbiAgICAgIDxub3ZvLXRpbWUtcGlja2VyIGlubGluZT1cInRydWVcIiAob25TZWxlY3QpPVwic2V0VmFsdWUoJGV2ZW50KVwiIFtuZ01vZGVsXT1cInZhbHVlXCIgW21pbGl0YXJ5XT1cIm1pbGl0YXJ5XCI+PC9ub3ZvLXRpbWUtcGlja2VyPlxuICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGltZVBpY2tlcklucHV0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYXV0b2NvbXBsZXRlIGhhcyBiZWVuIHRvdWNoZWQgKi9cbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbWFza09wdGlvbnM6IGFueTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBibHVyRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBvdmVybGF5OiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHVibGljIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm1pbGl0YXJ5ID8gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyIDogdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU07XG4gICAgdGhpcy5tYXNrT3B0aW9ucyA9IHtcbiAgICAgIG1hc2s6IHRoaXMubWlsaXRhcnkgPyBbL1xcZC8sIC9cXGQvLCAnOicsIC9cXGQvLCAvXFxkL10gOiBbL1xcZC8sIC9cXGQvLCAnOicsIC9cXGQvLCAvXFxkLywgJyAnLCAvW2FBcFBdLywgL1ttTV0vXSxcbiAgICAgIHBpcGU6IHRoaXMubWlsaXRhcnkgPyBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUoJ0hIOk1NJykgOiBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUoJ21tOk1NJyksXG4gICAgICBrZWVwQ2hhclBvc2l0aW9uczogZmFsc2UsXG4gICAgICBndWlkZTogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEJFR0lOOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheS5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMub3ZlcmxheS5vcGVuUGFuZWwoKTtcbiAgICAgIGxldCBob3VyID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5zY3JvbGxUb0luZGV4KGhvdXIgKiA0KSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cblxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSB8fCBldmVudC5rZXlDb2RlID09PSBFTlRFUiB8fCBldmVudC5rZXlDb2RlID09PSBUQUIpICYmIHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgLy8gdGhpcy5fb25DaGFuZ2UoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICBsZXQgdGV4dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICBpZiAodGhpcy5taWxpdGFyeSA/IHRleHQucmVwbGFjZSgvXy9nLCAnJykubGVuZ3RoID09PSA1IDogdGV4dC5yZXBsYWNlKC9fL2csICcnKS5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgbGV0IFtkYXRlVGltZVZhbHVlLCBmb3JtYXR0ZWRdID0gdGhpcy5kYXRlRm9ybWF0U2VydmljZS5wYXJzZVN0cmluZyh0ZXh0LCB0aGlzLm1pbGl0YXJ5LCAndGltZScpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UoZGF0ZVRpbWVWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgbGV0IG51bSA9IE51bWJlcih0ZXh0LnNwbGl0KCc6JylbMF0pO1xuICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KG51bSAqIDQpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ibHVyRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwYXRjaE9uQ2hhbmdlKG5ld1ZhbHVlPzogYW55LCBza2lwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICFza2lwICYmIHRoaXMud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnNldEZ1bGxZZWFyKHRoaXMudmFsdWUuZ2V0RnVsbFllYXIoKSwgdGhpcy52YWx1ZS5nZXRNb250aCgpLCB0aGlzLnZhbHVlLmdldERhdGUoKSkpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdERhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGV2ZW50LmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZShldmVudCk7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGZvcm1hdCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHZhbHVlLCB7XG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIGhvdXIxMjogIXRoaXMubWlsaXRhcnksXG4gICAgfSk7XG4gICAgaWYgKGZvcm1hdC5zcGxpdCgnOicpWzBdLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGAwJHtmb3JtYXR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzVmFsdWUoKSB7XG4gICAgcmV0dXJuICFIZWxwZXJzLmlzRW1wdHkodGhpcy52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcbiAgICBsZXQgbGlzdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmluY3JlbWVudHMnKTtcbiAgICBsZXQgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ25vdm8tbGlzdC1pdGVtJyk7XG4gICAgbGV0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGxpc3Quc2Nyb2xsVG9wID0gKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==