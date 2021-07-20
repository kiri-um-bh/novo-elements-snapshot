// NG
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { format, parse } from 'date-fns';
import * as IMask from 'imask';
import { DateFormatService } from '../../services/date-format/DateFormat';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
// App
import { NovoOverlayTemplateComponent } from '../common/overlay/Overlay';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../../services/date-format/DateFormat";
import * as i3 from "@angular/forms";
import * as i4 from "angular-imask";
import * as i5 from "@angular/common";
import * as i6 from "../common/overlay/Overlay";
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
        const timeFormat = this.military ? 'HH:mm' : 'hh:mm A';
        const amFormat = this.labels.timeFormatAM.toUpperCase();
        const pmFormat = this.labels.timeFormatPM.toUpperCase();
        this.maskOptions = {
            mask: Date,
            pattern: this.military ? 'HH:mm' : 'hh:mm aa',
            overwrite: true,
            autofix: true,
            lazy: false,
            min: new Date(1970, 0, 1),
            max: new Date(2030, 0, 1),
            prepare(str) {
                return str.toUpperCase();
            },
            format(date) {
                return format(date, timeFormat);
            },
            parse: (str) => {
                const time = this.military ? str : this.convertTime12to24(str);
                return parse(`${format(Date.now(), 'YYYY-MM-DD')}T${time}`);
            },
            blocks: {
                HH: {
                    mask: IMask.MaskedRange,
                    placeholderChar: 'H',
                    maxLength: 2,
                    from: 0,
                    to: 23,
                },
                hh: {
                    mask: IMask.MaskedRange,
                    placeholderChar: 'h',
                    maxLength: 2,
                    from: 1,
                    to: 12,
                },
                mm: {
                    mask: IMask.MaskedRange,
                    placeholderChar: 'm',
                    maxLength: 2,
                    from: 0,
                    to: 59,
                },
                aa: {
                    mask: IMask.MaskedEnum,
                    placeholderChar: 'x',
                    enum: ['AM', 'PM', 'am', 'pm', amFormat, pmFormat],
                },
            },
        };
    }
    onComplete(dt) {
        if (this.value !== dt) {
            this.dispatchOnChange(dt);
        }
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
        const input = event.target;
        let inputArr = input.value.split('');
        if ((event.key === "Escape" /* Escape */ || event.key === "Enter" /* Enter */ || event.key === "Tab" /* Tab */) && this.panelOpen) {
            this.closePanel();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
        if (event.key === "Backspace" /* Backspace */ && input.selectionStart === input.value.length) {
            inputArr[inputArr.length - 2] = 'x';
            inputArr[inputArr.length - 1] = 'x';
            event.target.value = inputArr.join('');
        }
    }
    _handleInput(event) {
        if (document.activeElement === event.target) {
            const text = event.target.value;
            this.openPanel();
            if ((this.military && Number(text[0]) > 2) || (!this.military && Number(text[0]) > 1)) {
                event.preventDefault();
                event.target.value = `0${text}`;
            }
            if (!this.military) {
                const test = text.substr(5, 4).replace(/x/g, '').trim().slice(0, 2);
                const timePeriod = this.maskOptions.blocks.aa.enum.find((it) => it[0] === test[0]);
                if (timePeriod) {
                    event.target.value = `${text.slice(0, 5)} ${timePeriod}`;
                }
            }
        }
    }
    _handleBlur(event) {
        const text = event.target.value;
        if (!this.military) {
            const test = text.substr(5, 4).replace(/x/g, '').trim().slice(0, 2);
            const timePeriod = this.maskOptions.blocks.aa.enum.find((it) => it[0] === test[0]);
            if (!timePeriod) {
                event.target.value = `${text.slice(0, 5)}`;
            }
        }
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
        this.dispatchOnChange(null);
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
    convertTime12to24(time12h) {
        const pmFormat = this.labels.timeFormatPM.toUpperCase();
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (['PM', pmFormat].includes(modifier)) {
            hours = `${parseInt(hours, 10) + 12}`.padStart(2, '0');
        }
        return `${hours}:${minutes}`;
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
    } }, inputs: { name: "name", placeholder: "placeholder", military: "military", maskOptions: "maskOptions", disabled: "disabled" }, outputs: { blurEvent: "blurEvent", focusEvent: "focusEvent" }, features: [i0.ɵɵProvidersFeature([DATE_VALUE_ACCESSOR])], decls: 6, vars: 11, consts: [["type", "text", "data-automation-id", "time-input", 3, "name", "ngModel", "imask", "unmask", "placeholder", "disabled", "ngModelChange", "complete", "focus", "keydown", "input", "blur"], ["input", ""], ["class", "bhi-clock", 3, "click", 4, "ngIf"], ["class", "bhi-times", 3, "click", 4, "ngIf"], ["position", "above-below", 3, "parent"], ["inline", "true", 3, "ngModel", "military", "onSelect"], [1, "bhi-clock", 3, "click"], [1, "bhi-times", 3, "click"]], template: function NovoTimePickerInputElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("ngModelChange", function NovoTimePickerInputElement_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("complete", function NovoTimePickerInputElement_Template_input_complete_0_listener($event) { return ctx.onComplete($event); })("focus", function NovoTimePickerInputElement_Template_input_focus_0_listener($event) { return ctx._handleFocus($event); })("keydown", function NovoTimePickerInputElement_Template_input_keydown_0_listener($event) { return ctx._handleKeydown($event); })("input", function NovoTimePickerInputElement_Template_input_input_0_listener($event) { return ctx._handleInput($event); })("blur", function NovoTimePickerInputElement_Template_input_blur_0_listener($event) { return ctx._handleBlur($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, NovoTimePickerInputElement_i_2_Template, 1, 0, "i", 2);
        i0.ɵɵtemplate(3, NovoTimePickerInputElement_i_3_Template, 1, 0, "i", 3);
        i0.ɵɵelementStart(4, "novo-overlay-template", 4);
        i0.ɵɵelementStart(5, "novo-time-picker", 5);
        i0.ɵɵlistener("onSelect", function NovoTimePickerInputElement_Template_novo_time_picker_onSelect_5_listener($event) { return ctx.setValue($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("name", ctx.name)("ngModel", ctx.value)("imask", ctx.maskOptions)("unmask", "typed")("placeholder", ctx.placeholder)("disabled", ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hasValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("parent", ctx.element);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.value)("military", ctx.military);
    } }, directives: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.IMaskDirective, i5.NgIf, i6.NovoOverlayTemplateComponent, i7.NovoTimePickerElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTimePickerInputElement, [{
        type: Component,
        args: [{
                selector: 'novo-time-picker-input',
                providers: [DATE_VALUE_ACCESSOR],
                template: `
    <input
      type="text"
      [name]="name"
      [(ngModel)]="value"
      [imask]="maskOptions"
      [unmask]="'typed'"
      (complete)="onComplete($event)"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlcklucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RpbWUtcGlja2VyL1RpbWVQaWNrZXJJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsTUFBTTtBQUNOLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7OztJQTZCckUsNEJBQWlFO0lBQTVDLHNMQUFxQjtJQUFtQixpQkFBSTs7OztJQUFDLDRCQUFpRTtJQUE3Qyx1TEFBc0I7SUFBbUIsaUJBQUk7O0FBM0J2SSxzREFBc0Q7QUFDdEQsTUFBTSxtQkFBbUIsR0FBRztJQUMxQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDekQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBNkJG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UiwwQkFBc0IsSUFOZCwrRkFPVix3QkFBb0IsSUFQViw2RkFRWCx1QkFBbUIsSUFSUjtRQUhyQixpQkFnQkE7UUFBQSx1RUFBNkQ7UUFBSyx1RUFBNkQ7UUFFL0gsZ0RBQ0U7UUFBQSwyQ0FBeUg7UUFBekYsNkhBQVksb0JBQWdCLElBQUM7UUFBeUMsaUJBQW1CO1FBQzNILGlCQUF3Qjs7UUFsQnRCLCtCQUFhLHNCQUFBLDBCQUFBLG1CQUFBLGdDQUFBLDBCQUFBO1FBY1osZUFBaUI7UUFBakIsb0NBQWlCO1FBQWlELGVBQWdCO1FBQWhCLG1DQUFnQjtRQUU5RCxlQUFrQjtRQUFsQixvQ0FBa0I7UUFDdUIsZUFBaUI7UUFBakIsbUNBQWlCLDBCQUFBOztrREFJeEUsMEJBQTBCO2NBM0J0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDthQUNGOzRKQVVDLElBQUk7a0JBREgsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUlOLFFBQVE7a0JBRlAsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUM1QixLQUFLO1lBR04sU0FBUztrQkFEUixNQUFNO1lBR1AsVUFBVTtrQkFEVCxNQUFNO1lBSVAsT0FBTztrQkFETixTQUFTO21CQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICogYXMgSU1hc2sgZnJvbSAnaW1hc2snO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL292ZXJsYXkvT3ZlcmxheSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgREFURV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9UaW1lUGlja2VySW5wdXRFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpbWUtcGlja2VyLWlucHV0JyxcbiAgcHJvdmlkZXJzOiBbREFURV9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgW2ltYXNrXT1cIm1hc2tPcHRpb25zXCJcbiAgICAgIFt1bm1hc2tdPVwiJ3R5cGVkJ1wiXG4gICAgICAoY29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAoZm9jdXMpPVwiX2hhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgKGtleWRvd24pPVwiX2hhbmRsZUtleWRvd24oJGV2ZW50KVwiXG4gICAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KCRldmVudClcIlxuICAgICAgKGJsdXIpPVwiX2hhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAjaW5wdXRcbiAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cInRpbWUtaW5wdXRcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAvPlxuICAgIDxpICpuZ0lmPVwiIWhhc1ZhbHVlXCIgKGNsaWNrKT1cIm9wZW5QYW5lbCgpXCIgY2xhc3M9XCJiaGktY2xvY2tcIj48L2k+IDxpICpuZ0lmPVwiaGFzVmFsdWVcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgpXCIgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+XG5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIj5cbiAgICAgIDxub3ZvLXRpbWUtcGlja2VyIGlubGluZT1cInRydWVcIiAob25TZWxlY3QpPVwic2V0VmFsdWUoJGV2ZW50KVwiIFtuZ01vZGVsXT1cInZhbHVlXCIgW21pbGl0YXJ5XT1cIm1pbGl0YXJ5XCI+PC9ub3ZvLXRpbWUtcGlja2VyPlxuICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGltZVBpY2tlcklucHV0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwdWJsaWMgdmFsdWU6IGFueTtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYXV0b2NvbXBsZXRlIGhhcyBiZWVuIHRvdWNoZWQgKi9cbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbWFza09wdGlvbnM6IGFueTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBibHVyRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBvdmVybGF5OiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHVibGljIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm1pbGl0YXJ5ID8gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyIDogdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU07XG4gICAgY29uc3QgdGltZUZvcm1hdCA9IHRoaXMubWlsaXRhcnkgPyAnSEg6bW0nIDogJ2hoOm1tIEEnO1xuICAgIGNvbnN0IGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE0udG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0ge1xuICAgICAgbWFzazogRGF0ZSxcbiAgICAgIHBhdHRlcm46IHRoaXMubWlsaXRhcnkgPyAnSEg6bW0nIDogJ2hoOm1tIGFhJyxcbiAgICAgIG92ZXJ3cml0ZTogdHJ1ZSxcbiAgICAgIGF1dG9maXg6IHRydWUsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIG1pbjogbmV3IERhdGUoMTk3MCwgMCwgMSksXG4gICAgICBtYXg6IG5ldyBEYXRlKDIwMzAsIDAsIDEpLFxuICAgICAgcHJlcGFyZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSxcbiAgICAgIGZvcm1hdChkYXRlKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgdGltZUZvcm1hdCk7XG4gICAgICB9LFxuICAgICAgcGFyc2U6IChzdHIpID0+IHtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMubWlsaXRhcnkgPyBzdHIgOiB0aGlzLmNvbnZlcnRUaW1lMTJ0bzI0KHN0cik7XG4gICAgICAgIHJldHVybiBwYXJzZShgJHtmb3JtYXQoRGF0ZS5ub3coKSwgJ1lZWVktTU0tREQnKX1UJHt0aW1lfWApO1xuICAgICAgfSxcbiAgICAgIGJsb2Nrczoge1xuICAgICAgICBISDoge1xuICAgICAgICAgIG1hc2s6IElNYXNrLk1hc2tlZFJhbmdlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogJ0gnLFxuICAgICAgICAgIG1heExlbmd0aDogMixcbiAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgIHRvOiAyMyxcbiAgICAgICAgfSxcbiAgICAgICAgaGg6IHtcbiAgICAgICAgICBtYXNrOiBJTWFzay5NYXNrZWRSYW5nZSxcbiAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6ICdoJyxcbiAgICAgICAgICBtYXhMZW5ndGg6IDIsXG4gICAgICAgICAgZnJvbTogMSxcbiAgICAgICAgICB0bzogMTIsXG4gICAgICAgIH0sXG4gICAgICAgIG1tOiB7XG4gICAgICAgICAgbWFzazogSU1hc2suTWFza2VkUmFuZ2UsXG4gICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiAnbScsXG4gICAgICAgICAgbWF4TGVuZ3RoOiAyLFxuICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgdG86IDU5LFxuICAgICAgICB9LFxuICAgICAgICBhYToge1xuICAgICAgICAgIG1hc2s6IElNYXNrLk1hc2tlZEVudW0sXG4gICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiAneCcsXG4gICAgICAgICAgZW51bTogWydBTScsICdQTScsICdhbScsICdwbScsIGFtRm9ybWF0LCBwbUZvcm1hdF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBvbkNvbXBsZXRlKGR0KSB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IGR0KSB7XG4gICAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UoZHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBCRUdJTjogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXkucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gICAgICBjb25zdCBob3VyID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5zY3JvbGxUb0luZGV4KGhvdXIgKiA0KSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cblxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGxldCBpbnB1dEFyciA9IGlucHV0LnZhbHVlLnNwbGl0KCcnKTtcbiAgICBpZiAoKGV2ZW50LmtleSA9PT0gS2V5LkVzY2FwZSB8fCBldmVudC5rZXkgPT09IEtleS5FbnRlciB8fCBldmVudC5rZXkgPT09IEtleS5UYWIpICYmIHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS2V5LkJhY2tzcGFjZSAmJiBpbnB1dC5zZWxlY3Rpb25TdGFydCA9PT0gaW5wdXQudmFsdWUubGVuZ3RoKSB7XG4gICAgICBpbnB1dEFycltpbnB1dEFyci5sZW5ndGggLSAyXSA9ICd4JztcbiAgICAgIGlucHV0QXJyW2lucHV0QXJyLmxlbmd0aCAtIDFdID0gJ3gnO1xuICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IGlucHV0QXJyLmpvaW4oJycpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIGNvbnN0IHRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIGlmICgodGhpcy5taWxpdGFyeSAmJiBOdW1iZXIodGV4dFswXSkgPiAyKSB8fCAoIXRoaXMubWlsaXRhcnkgJiYgTnVtYmVyKHRleHRbMF0pID4gMSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IGAwJHt0ZXh0fWA7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IHRleHQuc3Vic3RyKDUsIDQpLnJlcGxhY2UoL3gvZywgJycpLnRyaW0oKS5zbGljZSgwLCAyKTtcbiAgICAgICAgY29uc3QgdGltZVBlcmlvZCA9IHRoaXMubWFza09wdGlvbnMuYmxvY2tzLmFhLmVudW0uZmluZCgoaXQpID0+IGl0WzBdID09PSB0ZXN0WzBdKTtcbiAgICAgICAgaWYgKHRpbWVQZXJpb2QpIHtcbiAgICAgICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gYCR7dGV4dC5zbGljZSgwLCA1KX0gJHt0aW1lUGVyaW9kfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGlmICghdGhpcy5taWxpdGFyeSkge1xuICAgICAgY29uc3QgdGVzdCA9IHRleHQuc3Vic3RyKDUsIDQpLnJlcGxhY2UoL3gvZywgJycpLnRyaW0oKS5zbGljZSgwLCAyKTtcbiAgICAgIGNvbnN0IHRpbWVQZXJpb2QgPSB0aGlzLm1hc2tPcHRpb25zLmJsb2Nrcy5hYS5lbnVtLmZpbmQoKGl0KSA9PiBpdFswXSA9PT0gdGVzdFswXSk7XG4gICAgICBpZiAoIXRpbWVQZXJpb2QpIHtcbiAgICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IGAke3RleHQuc2xpY2UoMCwgNSl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX3NldFRyaWdnZXJWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwYXRjaE9uQ2hhbmdlKG5ld1ZhbHVlPzogYW55LCBza2lwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICFza2lwICYmIHRoaXMud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnNldEZ1bGxZZWFyKHRoaXMudmFsdWUuZ2V0RnVsbFllYXIoKSwgdGhpcy52YWx1ZS5nZXRNb250aCgpLCB0aGlzLnZhbHVlLmdldERhdGUoKSkpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaE9uQ2hhbmdlKGV2ZW50LmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZShldmVudCk7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmRpc3BhdGNoT25DaGFuZ2UobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcbiAgICBjb25zdCBsaXN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW5jcmVtZW50cycpO1xuICAgIGNvbnN0IGl0ZW1zID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdub3ZvLWxpc3QtaXRlbScpO1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGxpc3Quc2Nyb2xsVG9wID0gKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0VGltZTEydG8yNCh0aW1lMTJoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgY29uc3QgW3RpbWUsIG1vZGlmaWVyXSA9IHRpbWUxMmguc3BsaXQoJyAnKTtcbiAgICBsZXQgW2hvdXJzLCBtaW51dGVzXSA9IHRpbWUuc3BsaXQoJzonKTtcbiAgICBpZiAoaG91cnMgPT09ICcxMicpIHtcbiAgICAgIGhvdXJzID0gJzAwJztcbiAgICB9XG4gICAgaWYgKFsnUE0nLCBwbUZvcm1hdF0uaW5jbHVkZXMobW9kaWZpZXIpKSB7XG4gICAgICBob3VycyA9IGAke3BhcnNlSW50KGhvdXJzLCAxMCkgKyAxMn1gLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgfVxuICAgIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gIH1cbn1cbiJdfQ==