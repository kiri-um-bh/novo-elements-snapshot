// NG
import { ENTER, ESCAPE, TAB } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import * as dateFns from 'date-fns';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { DateFormatService } from '../../services/date-format/DateFormat';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
// App
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../../services/date-format/DateFormat";
import * as i3 from "@angular/forms";
import * as i4 from "angular2-text-mask";
import * as i5 from "@angular/common";
import * as i6 from "../overlay/Overlay";
import * as i7 from "./DatePicker";
import * as i8 from "../icon/Icon";
function NovoDateRangeInputElement_novo_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-icon", 10);
    i0.ɵɵlistener("click", function NovoDateRangeInputElement_novo_icon_3_Template_novo_icon_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.openPanel(); });
    i0.ɵɵtext(1, "calendar");
    i0.ɵɵelementEnd();
} }
function NovoDateRangeInputElement_novo_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-icon", 11);
    i0.ɵɵlistener("click", function NovoDateRangeInputElement_novo_icon_4_Template_novo_icon_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.clearStartValue(); });
    i0.ɵɵtext(1, "times");
    i0.ɵɵelementEnd();
} }
function NovoDateRangeInputElement_novo_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-icon", 10);
    i0.ɵɵlistener("click", function NovoDateRangeInputElement_novo_icon_10_Template_novo_icon_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.openPanel(); });
    i0.ɵɵtext(1, "calendar");
    i0.ɵɵelementEnd();
} }
function NovoDateRangeInputElement_novo_icon_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-icon", 11);
    i0.ɵɵlistener("click", function NovoDateRangeInputElement_novo_icon_11_Template_novo_icon_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.clearEndValue(); });
    i0.ɵɵtext(1, "times");
    i0.ɵɵelementEnd();
} }
// Value accessor for the component (supports ngModel)
const DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoDateRangeInputElement),
    multi: true,
};
export class NovoDateRangeInputElement {
    constructor(element, labels, cdr, dateFormatService) {
        this.element = element;
        this.labels = labels;
        this.cdr = cdr;
        this.dateFormatService = dateFormatService;
        this.formattedStartDate = '';
        this.formattedEndDate = '';
        this.weekRangeSelect = false;
        this.textMaskEnabled = true;
        this.allowInvalidDate = false;
        this.weekStart = 0;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this._value = { startDate: null, endDate: null };
        this._disabled = false;
        this.onChangeCallback = (_) => {
            // placeholder
        };
        this.onTouchedCallback = () => {
            // placeholder
        };
        this.placeholder = this.labels.dateFormatString().toUpperCase() || this.labels.dateFormatPlaceholder;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this.value !== value) {
            this._value = value;
            this._setFormValue(value);
            this.onChangeCallback(this._value);
        }
    }
    // Disabled State
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = !!value;
    }
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
    /** BEGIN: Convenient Panel Methods. */
    openPanel() {
        if (!this.disabled) {
            this.overlay.openPanel();
        }
    }
    closePanel() {
        this.overlay && this.overlay.closePanel();
    }
    get panelOpen() {
        return this.overlay && this.overlay.panelOpen;
    }
    /** END: Convenient Panel Methods. */
    _handleKeydown(event) {
        if ((event.keyCode === ESCAPE || event.keyCode === ENTER || event.keyCode === TAB) && this.panelOpen) {
            this.closePanel();
            event.stopPropagation();
        }
    }
    _handleBlur(event) {
        this.blurEvent.emit(event);
    }
    _handleFocus(event) {
        this.openPanel();
        this.focusEvent.emit(event);
    }
    formatDate(value) {
        try {
            const [dateTimeValue] = this.dateFormatService.parseString(value, false, 'date');
            return new Date(dateTimeValue);
        }
        catch (err) {
            return null;
        }
    }
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    _onStartInputChange(event) {
        this._handleKeydown(event);
        if (document.activeElement === event.target) {
            event.stopPropagation();
            const startDate = this.formatDate(event.target.value);
            if (startDate) {
                this.value = Object.assign(Object.assign({}, this.value), { startDate });
                this.change.emit(this.value);
            }
        }
    }
    _onEndInputChange(event) {
        this._handleKeydown(event);
        if (document.activeElement === event.target) {
            event.stopPropagation();
            const endDate = this.formatDate(event.target.value);
            if (endDate) {
                this.value = Object.assign(Object.assign({}, this.value), { endDate });
                this.change.emit(this.value);
            }
        }
    }
    _setFormValue(value) {
        if (this.value) {
            this.formattedStartDate = this.formatDateValue(this.value.startDate);
            this.formattedEndDate = this.formatDateValue(this.value.endDate);
        }
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    setValueAndClose(event) {
        if (event && event.startDate && event.endDate) {
            const startDate = event.startDate.date;
            const endDate = event.endDate.date;
            this.value = { startDate, endDate };
            this.change.emit(this.value);
        }
        this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    clearStartValue() {
        this.formattedStartDate = '';
        this.value = Object.assign(Object.assign({}, this.value), { startDate: null });
        this.change.emit(this.value);
    }
    clearEndValue() {
        this.formattedEndDate = '';
        this.value = Object.assign(Object.assign({}, this.value), { endDate: null });
        this.change.emit(this.value);
    }
    formatDateValue(value) {
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
    get hasStartValue() {
        var _a;
        return !Helpers.isEmpty((_a = this.value) === null || _a === void 0 ? void 0 : _a.startDate);
    }
    get hasEndValue() {
        var _a;
        return !Helpers.isEmpty((_a = this.value) === null || _a === void 0 ? void 0 : _a.endDate);
    }
}
NovoDateRangeInputElement.ɵfac = function NovoDateRangeInputElement_Factory(t) { return new (t || NovoDateRangeInputElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DateFormatService)); };
NovoDateRangeInputElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDateRangeInputElement, selectors: [["novo-date-range-input"]], viewQuery: function NovoDateRangeInputElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NovoOverlayTemplateComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
    } }, hostVars: 2, hostBindings: function NovoDateRangeInputElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.disabled);
    } }, inputs: { name: "name", start: "start", end: "end", weekRangeSelect: "weekRangeSelect", placeholder: "placeholder", maskOptions: "maskOptions", format: "format", textMaskEnabled: "textMaskEnabled", allowInvalidDate: "allowInvalidDate", weekStart: "weekStart", value: "value", disabled: "disabled" }, outputs: { blurEvent: "blurEvent", focusEvent: "focusEvent", change: "change", blur: "blur", focus: "focus" }, features: [i0.ɵɵProvidersFeature([DATE_VALUE_ACCESSOR])], decls: 14, vars: 20, consts: [[1, "date-range-input-container"], ["type", "text", "data-automation-id", "date-range-input-start", 3, "name", "ngModel", "textMask", "placeholder", "disabled", "ngModelChange", "keydown", "input", "focus", "blur"], ["startDate", ""], [3, "click", 4, "ngIf"], ["size", "small", 3, "click", 4, "ngIf"], [1, "date-range-input-divider"], ["type", "text", "data-automation-id", "date-range-input-end", 3, "name", "ngModel", "textMask", "placeholder", "disabled", "ngModelChange", "keydown", "input", "focus", "blur"], ["endDate", ""], ["position", "above-below", 3, "parent"], ["range", "true", "inline", "true", 3, "start", "end", "weekRangeSelect", "ngModel", "weekStart", "onSelect"], [3, "click"], ["size", "small", 3, "click"]], template: function NovoDateRangeInputElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("ngModelChange", function NovoDateRangeInputElement_Template_input_ngModelChange_1_listener($event) { return ctx.formattedStartDate = $event; })("keydown", function NovoDateRangeInputElement_Template_input_keydown_1_listener($event) { return ctx._onStartInputChange($event); })("input", function NovoDateRangeInputElement_Template_input_input_1_listener($event) { return ctx._onStartInputChange($event); })("focus", function NovoDateRangeInputElement_Template_input_focus_1_listener($event) { return ctx._handleFocus($event); })("blur", function NovoDateRangeInputElement_Template_input_blur_1_listener($event) { return ctx._handleBlur($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, NovoDateRangeInputElement_novo_icon_3_Template, 2, 0, "novo-icon", 3);
        i0.ɵɵtemplate(4, NovoDateRangeInputElement_novo_icon_4_Template, 2, 0, "novo-icon", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtext(6, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 0);
        i0.ɵɵelementStart(8, "input", 6, 7);
        i0.ɵɵlistener("ngModelChange", function NovoDateRangeInputElement_Template_input_ngModelChange_8_listener($event) { return ctx.formattedEndDate = $event; })("keydown", function NovoDateRangeInputElement_Template_input_keydown_8_listener($event) { return ctx._onEndInputChange($event); })("input", function NovoDateRangeInputElement_Template_input_input_8_listener($event) { return ctx._onEndInputChange($event); })("focus", function NovoDateRangeInputElement_Template_input_focus_8_listener($event) { return ctx._handleFocus($event); })("blur", function NovoDateRangeInputElement_Template_input_blur_8_listener($event) { return ctx._handleBlur($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, NovoDateRangeInputElement_novo_icon_10_Template, 2, 0, "novo-icon", 3);
        i0.ɵɵtemplate(11, NovoDateRangeInputElement_novo_icon_11_Template, 2, 0, "novo-icon", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "novo-overlay-template", 8);
        i0.ɵɵelementStart(13, "novo-date-picker", 9);
        i0.ɵɵlistener("onSelect", function NovoDateRangeInputElement_Template_novo_date_picker_onSelect_13_listener($event) { return ctx.setValueAndClose($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("name", ctx.name)("ngModel", ctx.formattedStartDate)("textMask", ctx.maskOptions)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hasStartValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasStartValue);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("name", ctx.name)("ngModel", ctx.formattedEndDate)("textMask", ctx.maskOptions)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hasEndValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasEndValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("parent", ctx.element);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("start", ctx.start)("end", ctx.end)("weekRangeSelect", ctx.weekRangeSelect)("ngModel", ctx.value)("weekStart", ctx.weekStart);
    } }, directives: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MaskedInputDirective, i5.NgIf, i6.NovoOverlayTemplateComponent, i7.NovoDatePickerElement, i8.NovoIconComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDateRangeInputElement, [{
        type: Component,
        args: [{
                selector: 'novo-date-range-input',
                providers: [DATE_VALUE_ACCESSOR],
                template: `
    <div class="date-range-input-container">
      <input
        type="text"
        [name]="name"
        [(ngModel)]="formattedStartDate"
        [textMask]="maskOptions"
        [placeholder]="placeholder"
        (keydown)="_onStartInputChange($event)"
        (input)="_onStartInputChange($event)"
        (focus)="_handleFocus($event)"
        (blur)="_handleBlur($event)"
        #startDate
        data-automation-id="date-range-input-start"
        [disabled]="disabled"
      />
      <novo-icon *ngIf="!hasStartValue" (click)="openPanel()">calendar</novo-icon>
      <novo-icon *ngIf="hasStartValue" size="small" (click)="clearStartValue()">times</novo-icon>
    </div>
    <div class="date-range-input-divider">-</div>
    <div class="date-range-input-container">
      <input
        type="text"
        [name]="name"
        [(ngModel)]="formattedEndDate"
        [textMask]="maskOptions"
        [placeholder]="placeholder"
        (keydown)="_onEndInputChange($event)"
        (input)="_onEndInputChange($event)"
        (focus)="_handleFocus($event)"
        (blur)="_handleBlur($event)"
        #endDate
        data-automation-id="date-range-input-end"
        [disabled]="disabled"
      />
      <novo-icon *ngIf="!hasEndValue" (click)="openPanel()">calendar</novo-icon>
      <novo-icon *ngIf="hasEndValue" size="small" (click)="clearEndValue()">times</novo-icon>
    </div>
    <novo-overlay-template [parent]="element" position="above-below">
      <novo-date-picker
        [start]="start"
        [end]="end"
        [weekRangeSelect]="weekRangeSelect"
        range="true"
        inline="true"
        (onSelect)="setValueAndClose($event)"
        [ngModel]="value"
        [weekStart]="weekStart"
      ></novo-date-picker>
    </novo-overlay-template>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }, { type: i2.DateFormatService }]; }, { name: [{
            type: Input
        }], start: [{
            type: Input
        }], end: [{
            type: Input
        }], weekRangeSelect: [{
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
        }], weekStart: [{
            type: Input
        }], blurEvent: [{
            type: Output
        }], focusEvent: [{
            type: Output
        }], overlay: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent]
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVJhbmdlSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUmFuZ2VJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxTQUFTO0FBQ1QsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTywyQkFBMkIsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsTUFBTTtBQUNOLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7SUE2QjVELHFDQUF3RDtJQUF0QixxTUFBcUI7SUFBQyx3QkFBUTtJQUFBLGlCQUFZOzs7O0lBQzVFLHFDQUEwRTtJQUE1QiwyTUFBMkI7SUFBQyxxQkFBSztJQUFBLGlCQUFZOzs7O0lBa0IzRixxQ0FBc0Q7SUFBdEIseU1BQXFCO0lBQUMsd0JBQVE7SUFBQSxpQkFBWTs7OztJQUMxRSxxQ0FBc0U7SUFBMUIsNk1B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QWQsTUFBTTtZQUtNLEtBQUs7a0JBQWpCLEtBQUs7WUFjRixRQUFRO2tCQUZYLEtBQUs7O2tCQUNMLFdBQVc7bUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEVOVEVSLCBFU0NBUEUsIFRBQiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGNyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5pbXBvcnQgeyBSYW5nZU1vZGVsIH0gZnJvbSAnLi9kYXRlLXBpY2tlci50eXBlcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgREFURV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9EYXRlUmFuZ2VJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS1yYW5nZS1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0RBVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkYXRlLXJhbmdlLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZm9ybWF0dGVkU3RhcnREYXRlXCJcbiAgICAgICAgW3RleHRNYXNrXT1cIm1hc2tPcHRpb25zXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgKGtleWRvd24pPVwiX29uU3RhcnRJbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKGlucHV0KT1cIl9vblN0YXJ0SW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJfaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgIChibHVyKT1cIl9oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAjc3RhcnREYXRlXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImRhdGUtcmFuZ2UtaW5wdXQtc3RhcnRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgLz5cbiAgICAgIDxub3ZvLWljb24gKm5nSWY9XCIhaGFzU3RhcnRWYWx1ZVwiIChjbGljayk9XCJvcGVuUGFuZWwoKVwiPmNhbGVuZGFyPC9ub3ZvLWljb24+XG4gICAgICA8bm92by1pY29uICpuZ0lmPVwiaGFzU3RhcnRWYWx1ZVwiIHNpemU9XCJzbWFsbFwiIChjbGljayk9XCJjbGVhclN0YXJ0VmFsdWUoKVwiPnRpbWVzPC9ub3ZvLWljb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGUtcmFuZ2UtaW5wdXQtZGl2aWRlclwiPi08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1yYW5nZS1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImZvcm1hdHRlZEVuZERhdGVcIlxuICAgICAgICBbdGV4dE1hc2tdPVwibWFza09wdGlvbnNcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAoa2V5ZG93bik9XCJfb25FbmRJbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKGlucHV0KT1cIl9vbkVuZElucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAoZm9jdXMpPVwiX2hhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJfaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgI2VuZERhdGVcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZGF0ZS1yYW5nZS1pbnB1dC1lbmRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgLz5cbiAgICAgIDxub3ZvLWljb24gKm5nSWY9XCIhaGFzRW5kVmFsdWVcIiAoY2xpY2spPVwib3BlblBhbmVsKClcIj5jYWxlbmRhcjwvbm92by1pY29uPlxuICAgICAgPG5vdm8taWNvbiAqbmdJZj1cImhhc0VuZFZhbHVlXCIgc2l6ZT1cInNtYWxsXCIgKGNsaWNrKT1cImNsZWFyRW5kVmFsdWUoKVwiPnRpbWVzPC9ub3ZvLWljb24+XG4gICAgPC9kaXY+XG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCI+XG4gICAgICA8bm92by1kYXRlLXBpY2tlclxuICAgICAgICBbc3RhcnRdPVwic3RhcnRcIlxuICAgICAgICBbZW5kXT1cImVuZFwiXG4gICAgICAgIFt3ZWVrUmFuZ2VTZWxlY3RdPVwid2Vla1JhbmdlU2VsZWN0XCJcbiAgICAgICAgcmFuZ2U9XCJ0cnVlXCJcbiAgICAgICAgaW5saW5lPVwidHJ1ZVwiXG4gICAgICAgIChvblNlbGVjdCk9XCJzZXRWYWx1ZUFuZENsb3NlKCRldmVudClcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIFt3ZWVrU3RhcnRdPVwid2Vla1N0YXJ0XCJcbiAgICAgID48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlUmFuZ2VJbnB1dEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHVibGljIGZvcm1hdHRlZFN0YXJ0RGF0ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBmb3JtYXR0ZWRFbmREYXRlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSB1c2VyRGVmaW5lZEZvcm1hdDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHdlZWtSYW5nZVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXNrT3B0aW9uczogYW55O1xuICBASW5wdXQoKVxuICBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGV4dE1hc2tFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgYWxsb3dJbnZhbGlkRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICB3ZWVrU3RhcnQ6IG51bWJlciA9IDA7XG4gIEBPdXRwdXQoKVxuICBibHVyRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBvdmVybGF5OiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IFJhbmdlTW9kZWwgPSB7IHN0YXJ0RGF0ZTogbnVsbCwgZW5kRGF0ZTogbnVsbCB9O1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGdldCB2YWx1ZSgpOiBSYW5nZU1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fc2V0Rm9ybVZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZWQgU3RhdGVcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRTdHJpbmcoKS50b1VwcGVyQ2FzZSgpIHx8IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlckRlZmluZWRGb3JtYXQgPSB0aGlzLmZvcm1hdCA/ICF0aGlzLmZvcm1hdC5tYXRjaCgvXihERFxcL01NXFwvWVlZWXxNTVxcL0REXFwvWVlZWSkkL2cpIDogZmFsc2U7XG4gICAgaWYgKCF0aGlzLnVzZXJEZWZpbmVkRm9ybWF0ICYmIHRoaXMudGV4dE1hc2tFbmFibGVkICYmICF0aGlzLmFsbG93SW52YWxpZERhdGUpIHtcbiAgICAgIHRoaXMubWFza09wdGlvbnMgPSB0aGlzLm1hc2tPcHRpb25zIHx8IHtcbiAgICAgICAgbWFzazogdGhpcy5kYXRlRm9ybWF0U2VydmljZS5nZXREYXRlTWFzaygpLFxuICAgICAgICBwaXBlOiBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUodGhpcy5mb3JtYXQgfHwgdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICBrZWVwQ2hhclBvc2l0aW9uczogZmFsc2UsXG4gICAgICAgIGd1aWRlOiB0cnVlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXNrT3B0aW9ucyA9IHsgbWFzazogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG4gIC8qKiBFTkQ6IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cblxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFIHx8IGV2ZW50LmtleUNvZGUgPT09IEVOVEVSIHx8IGV2ZW50LmtleUNvZGUgPT09IFRBQikgJiYgdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXJFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIF9oYW5kbGVGb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZvcm1hdERhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbZGF0ZVRpbWVWYWx1ZV0gPSB0aGlzLmRhdGVGb3JtYXRTZXJ2aWNlLnBhcnNlU3RyaW5nKHZhbHVlLCBmYWxzZSwgJ2RhdGUnKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlVGltZVZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoXzogYW55KSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgX29uU3RhcnRJbnB1dENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpO1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5mb3JtYXREYXRlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0ge1xuICAgICAgICAgIC4uLnRoaXMudmFsdWUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbkVuZElucHV0Q2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCk7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBlbmREYXRlID0gdGhpcy5mb3JtYXREYXRlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgaWYgKGVuZERhdGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHtcbiAgICAgICAgICAuLi50aGlzLnZhbHVlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Rm9ybVZhbHVlKHZhbHVlOiBSYW5nZU1vZGVsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybWF0dGVkU3RhcnREYXRlID0gdGhpcy5mb3JtYXREYXRlVmFsdWUodGhpcy52YWx1ZS5zdGFydERhdGUpO1xuICAgICAgdGhpcy5mb3JtYXR0ZWRFbmREYXRlID0gdGhpcy5mb3JtYXREYXRlVmFsdWUodGhpcy52YWx1ZS5lbmREYXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBwYW5lbCwgYW5kIGlmIGEgdmFsdWUgaXMgc3BlY2lmaWVkLCBhbHNvIHNldHMgdGhlIGFzc29jaWF0ZWRcbiAgICogY29udHJvbCB0byB0aGF0IHZhbHVlLiBJdCB3aWxsIGFsc28gbWFyayB0aGUgY29udHJvbCBhcyBkaXJ0eSBpZiB0aGlzIGludGVyYWN0aW9uXG4gICAqIHN0ZW1tZWQgZnJvbSB0aGUgdXNlci5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0YXJ0RGF0ZSAmJiBldmVudC5lbmREYXRlKSB7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSBldmVudC5zdGFydERhdGUuZGF0ZTtcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBldmVudC5lbmREYXRlLmRhdGU7XG4gICAgICB0aGlzLnZhbHVlID0geyBzdGFydERhdGUsIGVuZERhdGUgfTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFueSBwcmV2aW91cyBzZWxlY3RlZCBvcHRpb24gYW5kIGVtaXQgYSBzZWxlY3Rpb24gY2hhbmdlIGV2ZW50IGZvciB0aGlzIG9wdGlvblxuICAgKi9cbiAgcHVibGljIGNsZWFyU3RhcnRWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm1hdHRlZFN0YXJ0RGF0ZSA9ICcnO1xuICAgIHRoaXMudmFsdWUgPSB7IC4uLnRoaXMudmFsdWUsIHN0YXJ0RGF0ZTogbnVsbCB9O1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFyRW5kVmFsdWUoKSB7XG4gICAgdGhpcy5mb3JtYXR0ZWRFbmREYXRlID0gJyc7XG4gICAgdGhpcy52YWx1ZSA9IHsgLi4udGhpcy52YWx1ZSwgZW5kRGF0ZTogbnVsbCB9O1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnVzZXJEZWZpbmVkRm9ybWF0ICYmIGRhdGVGbnMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICB9XG4gICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKCEoaXNOYU4odmFsdWUudmFsdWVPZigpKSAmJiB0aGlzLmFsbG93SW52YWxpZERhdGUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZSwge1xuICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzU3RhcnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLnZhbHVlPy5zdGFydERhdGUpO1xuICB9XG4gIHB1YmxpYyBnZXQgaGFzRW5kVmFsdWUoKSB7XG4gICAgcmV0dXJuICFIZWxwZXJzLmlzRW1wdHkodGhpcy52YWx1ZT8uZW5kRGF0ZSk7XG4gIH1cbn1cbiJdfQ==