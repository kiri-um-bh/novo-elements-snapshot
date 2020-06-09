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
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../../services/date-format/DateFormat";
import * as i3 from "@angular/forms";
import * as i4 from "angular2-text-mask";
import * as i5 from "@angular/common";
import * as i6 from "../overlay/Overlay";
import * as i7 from "./TimePicker";
function NovoTimePickerInputElement_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵlistener("click", function NovoTimePickerInputElement_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.openPanel(); });
    i0.ɵɵelementEnd();
} }
function NovoTimePickerInputElement_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 7);
    i0.ɵɵlistener("click", function NovoTimePickerInputElement_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.clearValue(); });
    i0.ɵɵelementEnd();
} }
// Value accessor for the component (supports ngModel)
const DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoTimePickerInputElement),
    multi: true,
};
export class NovoTimePickerInputElement {
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
    ngOnInit() {
        this.placeholder = this.military ? this.labels.timeFormatPlaceholder24Hour : this.labels.timeFormatPlaceholderAM;
        this.maskOptions = {
            mask: this.military ? [/\d/, /\d/, ':', /\d/, /\d/] : [/\d/, /\d/, ':', /\d/, /\d/, ' ', /[aApP上下]/, /[mM午]/],
            pipe: this.military ? createAutoCorrectedDatePipe('HH:MM') : createAutoCorrectedDatePipe('mm:MM'),
            keepCharPositions: false,
            guide: true,
        };
    }
    /** BEGIN: Convenient Panel Methods. */
    openPanel() {
        if (!this.overlay.panelOpen) {
            this.overlay.openPanel();
            const hour = new Date().getHours();
            Promise.resolve(null).then(() => this.scrollToIndex(hour * 4));
        }
    }
    closePanel() {
        this.overlay.closePanel();
    }
    get panelOpen() {
        return this.overlay && this.overlay.panelOpen;
    }
    /** END: Convenient Panel Methods. */
    _handleKeydown(event) {
        if ((event.keyCode === ESCAPE || event.keyCode === ENTER || event.keyCode === TAB) && this.panelOpen) {
            this.closePanel();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
    }
    _handleInput(event) {
        if (document.activeElement === event.target) {
            // this._onChange((event.target as HTMLInputElement).value);
            const text = event.target.value;
            if (this.military ? text.replace(/_/g, '').length === 5 : text.replace(/_/g, '').length === 8) {
                const [dateTimeValue, formatted] = this.dateFormatService.parseString(text, this.military, 'time');
                this.dispatchOnChange(dateTimeValue);
            }
            else {
                this.dispatchOnChange(null);
            }
            this.openPanel();
            const num = Number(text.split(':')[0]);
            this.scrollToIndex(num * 4);
        }
    }
    _handleBlur(event) {
        this.blurEvent.emit(event);
    }
    _handleFocus(event) {
        this.openPanel();
        this.focusEvent.emit(event);
    }
    writeValue(value) {
        Promise.resolve(null).then(() => this._setTriggerValue(value));
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    dispatchOnChange(newValue, skip = false) {
        if (newValue !== this.value) {
            this._onChange(newValue);
            !skip && this.writeValue(newValue);
        }
    }
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
    setValue(event) {
        if (event && event.date) {
            this.dispatchOnChange(event.date);
        }
    }
    setValueAndClose(event) {
        this.setValue(event);
        this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    clearValue() {
        this.formattedValue = '';
        this.dispatchOnChange(null);
    }
    formatDateValue(value) {
        if (!value) {
            return '';
        }
        const format = this.labels.formatTimeWithFormat(value, {
            hour: 'numeric',
            minute: '2-digit',
            hour12: !this.military,
        });
        if (format.split(':')[0].length === 1) {
            return `0${format}`;
        }
        return format;
    }
    get hasValue() {
        return !Helpers.isEmpty(this.value);
    }
    scrollToIndex(index) {
        const element = this.overlay.overlayRef.overlayElement;
        const list = element.querySelector('.increments');
        const items = list.querySelectorAll('novo-list-item');
        const item = items[index];
        if (item) {
            list.scrollTop = item.offsetTop;
        }
    }
}
NovoTimePickerInputElement.ɵfac = function NovoTimePickerInputElement_Factory(t) { return new (t || NovoTimePickerInputElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i2.DateFormatService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoTimePickerInputElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTimePickerInputElement, selectors: [["novo-time-picker-input"]], viewQuery: function NovoTimePickerInputElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NovoOverlayTemplateComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
    } }, hostVars: 2, hostBindings: function NovoTimePickerInputElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.disabled);
    } }, inputs: { name: "name", placeholder: "placeholder", military: "military", maskOptions: "maskOptions", disabled: "disabled" }, outputs: { blurEvent: "blurEvent", focusEvent: "focusEvent" }, features: [i0.ɵɵProvidersFeature([DATE_VALUE_ACCESSOR])], decls: 6, vars: 10, consts: [["type", "text", "data-automation-id", "time-input", 3, "name", "ngModel", "textMask", "placeholder", "disabled", "ngModelChange", "focus", "keydown", "input", "blur"], ["input", ""], ["class", "bhi-clock", 3, "click", 4, "ngIf"], ["class", "bhi-times", 3, "click", 4, "ngIf"], ["position", "above-below", 3, "parent"], ["inline", "true", 3, "ngModel", "military", "onSelect"], [1, "bhi-clock", 3, "click"], [1, "bhi-times", 3, "click"]], template: function NovoTimePickerInputElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("ngModelChange", function NovoTimePickerInputElement_Template_input_ngModelChange_0_listener($event) { return ctx.formattedValue = $event; })("focus", function NovoTimePickerInputElement_Template_input_focus_0_listener($event) { return ctx._handleFocus($event); })("keydown", function NovoTimePickerInputElement_Template_input_keydown_0_listener($event) { return ctx._handleKeydown($event); })("input", function NovoTimePickerInputElement_Template_input_input_0_listener($event) { return ctx._handleInput($event); })("blur", function NovoTimePickerInputElement_Template_input_blur_0_listener($event) { return ctx._handleBlur($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, NovoTimePickerInputElement_i_2_Template, 1, 0, "i", 2);
        i0.ɵɵtemplate(3, NovoTimePickerInputElement_i_3_Template, 1, 0, "i", 3);
        i0.ɵɵelementStart(4, "novo-overlay-template", 4);
        i0.ɵɵelementStart(5, "novo-time-picker", 5);
        i0.ɵɵlistener("onSelect", function NovoTimePickerInputElement_Template_novo_time_picker_onSelect_5_listener($event) { return ctx.setValue($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("name", ctx.name)("ngModel", ctx.formattedValue)("textMask", ctx.maskOptions)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hasValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("parent", ctx.element);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.value)("military", ctx.military);
    } }, directives: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MaskedInputDirective, i5.NgIf, i6.NovoOverlayTemplateComponent, i7.NovoTimePickerElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTimePickerInputElement, [{
        type: Component,
        args: [{
                selector: 'novo-time-picker-input',
                providers: [DATE_VALUE_ACCESSOR],
                template: `
    <input
      type="text"
      [name]="name"
      [(ngModel)]="formattedValue"
      [textMask]="maskOptions"
      [placeholder]="placeholder"
      (focus)="_handleFocus($event)"
      (keydown)="_handleKeydown($event)"
      (input)="_handleInput($event)"
      (blur)="_handleBlur($event)"
      #input
      data-automation-id="time-input"
      [disabled]="disabled"
    />
    <i *ngIf="!hasValue" (click)="openPanel()" class="bhi-clock"></i> <i *ngIf="hasValue" (click)="clearValue()" class="bhi-times"></i>

    <novo-overlay-template [parent]="element" position="above-below">
      <novo-time-picker inline="true" (onSelect)="setValue($event)" [ngModel]="value" [military]="military"></novo-time-picker>
    </novo-overlay-template>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i2.DateFormatService }, { type: i0.ChangeDetectorRef }]; }, { name: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], military: [{
            type: Input
        }], maskOptions: [{
            type: Input
        }], disabled: [{
            type: HostBinding,
            args: ['class.disabled']
        }, {
            type: Input
        }], blurEvent: [{
            type: Output
        }], focusEvent: [{
            type: Output
        }], overlay: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RpbWUtcGlja2VyL1RpbWVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxTQUFTO0FBQ1QsT0FBTywyQkFBMkIsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixNQUFNO0FBQ04sT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7OztJQTJCdEUsNEJBQWlFO0lBQTVDLHNMQUFxQjtJQUFtQixpQkFBSTs7OztJQUFDLDRCQUFpRTtJQUE3Qyx1TEFBc0I7SUFBbUIsaUJBQUk7O0FBekJ2SSxzREFBc0Q7QUFDdEQsTUFBTSxtQkFBbUIsR0FBRztJQUMxQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDekQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBMkJGLE1BQU0sT0FBTywwQkFBMEI7SUE0QnJDLFlBQ1MsT0FB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LE1BQU07O2tCQUdOLFNBQVM7bUJBQUMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVOVEVSLCBFU0NBUEUsIFRBQiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG4vLyBWZW5kb3JcbmltcG9ydCBjcmVhdGVBdXRvQ29ycmVjdGVkRGF0ZVBpcGUgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZUF1dG9Db3JyZWN0ZWREYXRlUGlwZSc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtZm9ybWF0L0RhdGVGb3JtYXQnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvVGltZVBpY2tlcklucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aW1lLXBpY2tlci1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0RBVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICBbKG5nTW9kZWwpXT1cImZvcm1hdHRlZFZhbHVlXCJcbiAgICAgIFt0ZXh0TWFza109XCJtYXNrT3B0aW9uc1wiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgKGZvY3VzKT1cIl9oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cIl9oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgI2lucHV0XG4gICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0aW1lLWlucHV0XCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgLz5cbiAgICA8aSAqbmdJZj1cIiFoYXNWYWx1ZVwiIChjbGljayk9XCJvcGVuUGFuZWwoKVwiIGNsYXNzPVwiYmhpLWNsb2NrXCI+PC9pPiA8aSAqbmdJZj1cImhhc1ZhbHVlXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPlxuXG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCI+XG4gICAgICA8bm92by10aW1lLXBpY2tlciBpbmxpbmU9XCJ0cnVlXCIgKG9uU2VsZWN0KT1cInNldFZhbHVlKCRldmVudClcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIFttaWxpdGFyeV09XCJtaWxpdGFyeVwiPjwvbm92by10aW1lLXBpY2tlcj5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbWVQaWNrZXJJbnB1dEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHVibGljIHZhbHVlOiBhbnk7XG4gIHB1YmxpYyBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcyAqL1xuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIGF1dG9jb21wbGV0ZSBoYXMgYmVlbiB0b3VjaGVkICovXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1hc2tPcHRpb25zOiBhbnk7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgYmx1ckV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRlRm9ybWF0U2VydmljZTogRGF0ZUZvcm1hdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5taWxpdGFyeSA/IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlcjI0SG91ciA6IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSB7XG4gICAgICBtYXNrOiB0aGlzLm1pbGl0YXJ5ID8gWy9cXGQvLCAvXFxkLywgJzonLCAvXFxkLywgL1xcZC9dIDogWy9cXGQvLCAvXFxkLywgJzonLCAvXFxkLywgL1xcZC8sICcgJywgL1thQXBQ5LiK5LiLXS8sIC9bbU3ljYhdL10sXG4gICAgICBwaXBlOiB0aGlzLm1pbGl0YXJ5ID8gY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlKCdISDpNTScpIDogY3JlYXRlQXV0b0NvcnJlY3RlZERhdGVQaXBlKCdtbTpNTScpLFxuICAgICAga2VlcENoYXJQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgZ3VpZGU6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBCRUdJTjogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXkucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gICAgICBjb25zdCBob3VyID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5zY3JvbGxUb0luZGV4KGhvdXIgKiA0KSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cblxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSB8fCBldmVudC5rZXlDb2RlID09PSBFTlRFUiB8fCBldmVudC5rZXlDb2RlID09PSBUQUIpICYmIHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgLy8gdGhpcy5fb25DaGFuZ2UoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICBjb25zdCB0ZXh0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgIGlmICh0aGlzLm1pbGl0YXJ5ID8gdGV4dC5yZXBsYWNlKC9fL2csICcnKS5sZW5ndGggPT09IDUgOiB0ZXh0LnJlcGxhY2UoL18vZywgJycpLmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBjb25zdCBbZGF0ZVRpbWVWYWx1ZSwgZm9ybWF0dGVkXSA9IHRoaXMuZGF0ZUZvcm1hdFNlcnZpY2UucGFyc2VTdHJpbmcodGV4dCwgdGhpcy5taWxpdGFyeSwgJ3RpbWUnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGRhdGVUaW1lVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIGNvbnN0IG51bSA9IE51bWJlcih0ZXh0LnNwbGl0KCc6JylbMF0pO1xuICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KG51bSAqIDQpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ibHVyRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwYXRjaE9uQ2hhbmdlKG5ld1ZhbHVlPzogYW55LCBza2lwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICFza2lwICYmIHRoaXMud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnNldEZ1bGxZZWFyKHRoaXMudmFsdWUuZ2V0RnVsbFllYXIoKSwgdGhpcy52YWx1ZS5nZXRNb250aCgpLCB0aGlzLnZhbHVlLmdldERhdGUoKSkpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdERhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGV2ZW50LmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZShldmVudCk7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKG51bGwpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5sYWJlbHMuZm9ybWF0VGltZVdpdGhGb3JtYXQodmFsdWUsIHtcbiAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgaG91cjEyOiAhdGhpcy5taWxpdGFyeSxcbiAgICB9KTtcbiAgICBpZiAoZm9ybWF0LnNwbGl0KCc6JylbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gYDAke2Zvcm1hdH1gO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgY29uc3QgbGlzdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmluY3JlbWVudHMnKTtcbiAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnbm92by1saXN0LWl0ZW0nKTtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBsaXN0LnNjcm9sbFRvcCA9IChpdGVtIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG59XG4iXX0=