// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from './../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../list/List";
function NovoTimePickerElement_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, ":");
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.hours);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.minutes);
} }
function NovoTimePickerElement_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_3_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const period_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.setPeriod($event, period_r5, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r4.meridian == period_r5);
    i0.ɵɵattribute("data-automation-id", period_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(period_r5);
} }
function NovoTimePickerElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NovoTimePickerElement_div_3_span_1_Template, 2, 4, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.MERIDIANS);
} }
function NovoTimePickerElement_div_4_novo_list_item_2_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} }
function NovoTimePickerElement_div_4_novo_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 15);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_4_novo_list_item_2_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const increment_r9 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.setValue($event, increment_r9); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoTimePickerElement_div_4_novo_list_item_2_i_3_Template, 1, 0, "i", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const increment_r9 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", increment_r9 == ctx_r8.selected);
    i0.ɵɵattribute("data-automation-id", increment_r9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(increment_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", increment_r9 == ctx_r8.selected);
} }
function NovoTimePickerElement_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "novo-list", 13);
    i0.ɵɵtemplate(2, NovoTimePickerElement_div_4_novo_list_item_2_Template, 4, 5, "novo-list-item", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.increments);
} }
const _c0 = function (a0) { return { active: a0 }; };
function NovoTimePickerElement_div_5_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_5_span_9_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const hour_r15 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.setHours($event, hour_r15, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r15 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r13.activeHour == hour_r15));
    i0.ɵɵattribute("data-automation-id", hour_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r15);
} }
function NovoTimePickerElement_div_5_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_5_span_11_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const minute_r18 = ctx.$implicit; const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.setMinutes($event, minute_r18, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r18 = ctx.$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r14.activeMinute == minute_r18));
    i0.ɵɵattribute("data-automation-id", minute_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r18);
} }
const _c1 = function (a0) { return { between: a0 }; };
function NovoTimePickerElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelement(3, "span", 21);
    i0.ɵɵelementStart(4, "span", 22);
    i0.ɵɵelement(5, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 24);
    i0.ɵɵelement(7, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 26);
    i0.ɵɵtemplate(9, NovoTimePickerElement_div_5_span_9_Template, 2, 5, "span", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 28);
    i0.ɵɵtemplate(11, NovoTimePickerElement_div_5_span_11_Template, 2, 5, "span", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r3.hoursClass);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r3.minutesClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r3.inBetween));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.HOURS);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.MINUTES);
} }
// Value accessor for the component (supports ngModel)
const TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoTimePickerElement),
    multi: true,
};
export class NovoTimePickerElement {
    constructor() {
        this.military = false;
        this.analog = false;
        this.inline = false;
        this.onSelect = new EventEmitter();
        this.hours = 12;
        this.minutes = 0;
        this.value = null;
        this.increments = [];
        this.MERIDIANS = ['am', 'pm'];
        this.MINUTES = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '00'];
        this.HOURS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this._onChange = () => { };
        this._onTouched = () => { };
    }
    flatten(arr) {
        return Array.prototype.concat(...arr);
    }
    ngOnInit() {
        if (this.military) {
            this.HOURS = ['0', ...this.HOURS, '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
            this.increments = this.flatten([...this.HOURS.map((hour) => [`${hour}:00`, `${hour}:15`, `${hour}:30`, `${hour}:45`])]);
        }
        else {
            const hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
            this.increments = this.flatten([
                ...hours.map((hour) => [`${hour}:00 AM`, `${hour}:15 AM`, `${hour}:30 AM`, `${hour}:45 AM`]),
                ...hours.map((hour) => [`${hour}:00 PM`, `${hour}:15 PM`, `${hour}:30 PM`, `${hour}:45 PM`]),
            ]);
        }
        this.ngOnChanges();
    }
    ngOnChanges(changes) {
        if (this.model) {
            this.init(this.model, false);
        }
        else {
            this.selected = null;
            this.init(new Date(), false);
        }
    }
    init(value, dispatch) {
        const _value = new Date(value);
        let hours = _value.getHours();
        let minutes = _value.getMinutes();
        if (!this.military) {
            this.meridian = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours || 12;
        }
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        this.setHours(null, hours, dispatch);
        this.setMinutes(null, minutes, dispatch);
        this.checkBetween(minutes);
    }
    checkBetween(value) {
        this.inBetween = this.MINUTES.indexOf(String(value)) < 0;
    }
    setValue(event, value) {
        Helpers.swallowEvent(event);
        this.selected = value;
        const [time, meridian] = value.split(' ');
        const [hours, minutes] = time.split(':');
        this.hours = hours;
        this.minutes = minutes;
        this.meridian = meridian;
        this.dispatchChange();
    }
    setHours(event, hours, dispatch) {
        Helpers.swallowEvent(event);
        this.hours = hours;
        this.hoursClass = `hour-${hours}`;
        this.activeHour = hours;
        if (dispatch) {
            this.dispatchChange();
        }
    }
    setMinutes(event, minutes, dispatch) {
        Helpers.swallowEvent(event);
        this.minutes = minutes;
        this.minutesClass = `min-${minutes}`;
        this.activeMinute = minutes;
        this.checkBetween(minutes);
        if (dispatch) {
            this.dispatchChange();
        }
    }
    setPeriod(event, period, dispatch) {
        Helpers.swallowEvent(event);
        this.meridian = period;
        if (dispatch) {
            this.dispatchChange();
        }
    }
    dispatchChange() {
        let hours = Number(this.hours);
        if (!this.military) {
            hours = this.meridian.toLowerCase() === 'pm' ? hours + 12 : hours;
            // Special case for 12
            if (this.meridian.toLowerCase() === 'pm' && hours === 24) {
                hours = 12;
            }
            else if (this.meridian.toLowerCase() === 'am' && hours === 12) {
                hours = 0;
            }
        }
        const value = new Date();
        value.setHours(hours);
        value.setMinutes(this.minutes);
        value.setSeconds(0);
        this.value = `${this.hours}:${this.minutes} ${this.meridian}`;
        this.onSelect.next({
            hours,
            minutes: this.minutes,
            meridian: this.meridian,
            date: value,
            text: this.value,
        });
        this._onChange(value);
    }
    // ValueAccessor Functions
    writeValue(model) {
        this.model = model;
        if (Helpers.isDate(model)) {
            this.init(model, false);
        }
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
}
NovoTimePickerElement.ɵfac = function NovoTimePickerElement_Factory(t) { return new (t || NovoTimePickerElement)(); };
NovoTimePickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTimePickerElement, selectors: [["novo-time-picker"]], hostVars: 2, hostBindings: function NovoTimePickerElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("military", ctx.military);
    } }, inputs: { military: "military", analog: "analog", inline: "inline" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([TIME_PICKER_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature], decls: 6, vars: 8, consts: [[1, "digital"], [1, "digital--inner"], ["class", "digital--clock", 4, "ngIf"], ["class", "control-block", 4, "ngIf"], ["class", "increments", 4, "ngIf"], ["class", "analog", 4, "ngIf"], [1, "digital--clock"], ["data-automation-id", "novo-time-picker-hours", 1, "hours"], ["data-automation-id", "novo-time-picker-minutes", 1, "minutes"], [1, "control-block"], ["class", "digital--period", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "digital--period", 3, "click"], [1, "increments"], ["direction", "vertical", "data-automation-id", "novo-time-picker-increments"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "bhi-check", 4, "ngIf"], [1, "bhi-check"], [1, "analog"], [1, "analog--inner"], [1, "analog--face"], [1, "analog--center"], [1, "analog--hand--hours", 3, "ngClass"], [1, "analog--ball"], [1, "analog--hand--minutes", 3, "ngClass"], [1, "analog--ball", 3, "ngClass"], [1, "analog--hours"], ["class", "analog--hour", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "analog--minutes"], ["class", "analog--minute", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "analog--hour", 3, "ngClass", "click"], [1, "analog--minute", 3, "ngClass", "click"]], template: function NovoTimePickerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, NovoTimePickerElement_span_2_Template, 6, 2, "span", 2);
        i0.ɵɵtemplate(3, NovoTimePickerElement_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, NovoTimePickerElement_div_4_Template, 3, 1, "div", 4);
        i0.ɵɵtemplate(5, NovoTimePickerElement_div_5_Template, 12, 7, "div", 5);
    } if (rf & 2) {
        i0.ɵɵclassProp("inline", ctx.inline)("military", ctx.military);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.inline);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.military);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.analog);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.analog);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.NovoListElement, i2.NovoListItemElement, i2.NovoItemContentElement, i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTimePickerElement, [{
        type: Component,
        args: [{
                selector: 'novo-time-picker',
                providers: [TIME_PICKER_VALUE_ACCESSOR],
                template: `
        <div class="digital" [class.inline]="inline" [class.military]="military">
            <div class="digital--inner">
                <span class="digital--clock" *ngIf="!inline">
                    <span class="hours" data-automation-id="novo-time-picker-hours">{{hours}}</span>:<span class="minutes" data-automation-id="novo-time-picker-minutes">{{minutes}}</span>
                </span>
                <div class="control-block" *ngIf="!military">
                    <span *ngFor="let period of MERIDIANS" class="digital--period" [class.active]="meridian==period" (click)="setPeriod($event, period, true)" [attr.data-automation-id]="period">{{period}}</span>
                </div>
            </div>
        </div>
        <div class="increments" *ngIf="!analog">
            <novo-list direction="vertical" data-automation-id="novo-time-picker-increments">
                <novo-list-item *ngFor="let increment of increments" (click)="setValue($event, increment)" [class.active]="increment==selected" [attr.data-automation-id]="increment">
                    <item-content>{{increment}}</item-content>
                    <i *ngIf="increment==selected" class="bhi-check"></i>
                </novo-list-item>
            </novo-list>
        </div>
        <div class="analog" *ngIf="analog">
            <div class="analog--inner">
                <div class="analog--face">
                    <span class="analog--center"></span>
                    <span class="analog--hand--hours" [ngClass]="hoursClass">
                        <span class="analog--ball"></span>
                    </span>
                    <span class="analog--hand--minutes" [ngClass]="minutesClass">
                        <span class="analog--ball" [ngClass]="{between: inBetween}"></span>
                    </span>
                </div>
                <div class="analog--hours">
                    <span *ngFor="let hour of HOURS" class="analog--hour" [ngClass]="{active: activeHour == hour}" (click)="setHours($event, hour, true)" [attr.data-automation-id]="hour">{{hour}}</span>
                </div>
                <div class="analog--minutes">
                    <span *ngFor="let minute of MINUTES" class="analog--minute" [ngClass]="{active: activeMinute == minute}" (click)="setMinutes($event, minute, true)" [attr.data-automation-id]="minute">{{minute}}</span>
                </div>
            </div>
        </div>
    `,
                host: {
                    '[class.military]': 'military',
                },
            }]
    }], null, { military: [{
            type: Input
        }], analog: [{
            type: Input
        }], inline: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0lBZWhDLCtCQUNJO0lBQUEsK0JBQWdFO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQUEsaUJBQUM7SUFBQSwrQkFBb0U7SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDM0ssaUJBQU87OztJQUQ2RCxlQUFTO0lBQVQsa0NBQVM7SUFBNEUsZUFBVztJQUFYLG9DQUFXOzs7O0lBR2hLLGdDQUE4SztJQUE3RSxtUEFBbUMsSUFBSSxLQUFFO0lBQW9DLFlBQVU7SUFBQSxpQkFBTzs7OztJQUFoSSxzREFBaUM7SUFBMkMsK0NBQWtDO0lBQUMsZUFBVTtJQUFWLCtCQUFVOzs7SUFENUwsOEJBQ0k7SUFBQSwrRUFBOEs7SUFDbEwsaUJBQU07OztJQURJLGVBQWdDO0lBQWhDLDBDQUFnQzs7O0lBUXRDLHdCQUFxRDs7OztJQUZ6RCwwQ0FDSTtJQURpRCxrUkFBcUM7SUFDdEYsb0NBQWM7SUFBQSxZQUFhO0lBQUEsaUJBQWU7SUFDMUMsMEZBQWlEO0lBQ3JELGlCQUFpQjs7OztJQUgwRSx5REFBb0M7SUFBQyxrREFBcUM7SUFDbkosZUFBYTtJQUFiLGtDQUFhO0lBQ3hCLGVBQTJCO0lBQTNCLHNEQUEyQjs7O0lBSjFDLCtCQUNJO0lBQUEscUNBQ0k7SUFBQSxtR0FDSTtJQUdSLGlCQUFZO0lBQ2hCLGlCQUFNOzs7SUFM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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNDUDtnQkFDSCxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsVUFBVTtpQkFDL0I7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFRJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1RpbWVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpbWUtcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRhbFwiIFtjbGFzcy5pbmxpbmVdPVwiaW5saW5lXCIgW2NsYXNzLm1pbGl0YXJ5XT1cIm1pbGl0YXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRhbC0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRpZ2l0YWwtLWNsb2NrXCIgKm5nSWY9XCIhaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91cnNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLWhvdXJzXCI+e3tob3Vyc319PC9zcGFuPjo8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLW1pbnV0ZXNcIj57e21pbnV0ZXN9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYmxvY2tcIiAqbmdJZj1cIiFtaWxpdGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgcGVyaW9kIG9mIE1FUklESUFOU1wiIGNsYXNzPVwiZGlnaXRhbC0tcGVyaW9kXCIgW2NsYXNzLmFjdGl2ZV09XCJtZXJpZGlhbj09cGVyaW9kXCIgKGNsaWNrKT1cInNldFBlcmlvZCgkZXZlbnQsIHBlcmlvZCwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwicGVyaW9kXCI+e3twZXJpb2R9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluY3JlbWVudHNcIiAqbmdJZj1cIiFhbmFsb2dcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLWluY3JlbWVudHNcIj5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGluY3JlbWVudCBvZiBpbmNyZW1lbnRzXCIgKGNsaWNrKT1cInNldFZhbHVlKCRldmVudCwgaW5jcmVtZW50KVwiIFtjbGFzcy5hY3RpdmVdPVwiaW5jcmVtZW50PT1zZWxlY3RlZFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJpbmNyZW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57e2luY3JlbWVudH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiaW5jcmVtZW50PT1zZWxlY3RlZFwiIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2dcIiAqbmdJZj1cImFuYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nLS1mYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1jZW50ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1oYW5kLS1ob3Vyc1wiIFtuZ0NsYXNzXT1cImhvdXJzQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1iYWxsXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1oYW5kLS1taW51dGVzXCIgW25nQ2xhc3NdPVwibWludXRlc0NsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tYmFsbFwiIFtuZ0NsYXNzXT1cIntiZXR3ZWVuOiBpbkJldHdlZW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0taG91cnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGhvdXIgb2YgSE9VUlNcIiBjbGFzcz1cImFuYWxvZy0taG91clwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGFjdGl2ZUhvdXIgPT0gaG91cn1cIiAoY2xpY2spPVwic2V0SG91cnMoJGV2ZW50LCBob3VyLCB0cnVlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJob3VyXCI+e3tob3VyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0tbWludXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIE1JTlVURVNcIiBjbGFzcz1cImFuYWxvZy0tbWludXRlXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogYWN0aXZlTWludXRlID09IG1pbnV0ZX1cIiAoY2xpY2spPVwic2V0TWludXRlcygkZXZlbnQsIG1pbnV0ZSwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibWludXRlXCI+e3ttaW51dGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5taWxpdGFyeV0nOiAnbWlsaXRhcnknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGltZVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBtaWxpdGFyeTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhbmFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaW5saW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaG91cnM6IG51bWJlciA9IDEyO1xuICBtaW51dGVzOiBudW1iZXIgPSAwO1xuICB2YWx1ZTogYW55ID0gbnVsbDtcbiAgbWVyaWRpYW46IHN0cmluZztcbiAgaW5CZXR3ZWVuOiBib29sZWFuO1xuICBob3Vyc0NsYXNzOiBzdHJpbmc7XG4gIGFjdGl2ZUhvdXI7XG4gIG1pbnV0ZXNDbGFzczogc3RyaW5nO1xuICBhY3RpdmVNaW51dGU7XG4gIGluY3JlbWVudHM6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkOiBzdHJpbmc7XG4gIE1FUklESUFOUzogQXJyYXk8c3RyaW5nPiA9IFsnYW0nLCAncG0nXTtcbiAgTUlOVVRFUzogQXJyYXk8c3RyaW5nPiA9IFsnMDUnLCAnMTAnLCAnMTUnLCAnMjAnLCAnMjUnLCAnMzAnLCAnMzUnLCAnNDAnLCAnNDUnLCAnNTAnLCAnNTUnLCAnMDAnXTtcbiAgSE9VUlM6IEFycmF5PHN0cmluZz4gPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ107XG4gIG1vZGVsOiBhbnk7XG4gIF9vbkNoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBmbGF0dGVuKGFycikge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmFycik7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWlsaXRhcnkpIHtcbiAgICAgIHRoaXMuSE9VUlMgPSBbJzAnLCAuLi50aGlzLkhPVVJTLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXTtcbiAgICAgIHRoaXMuaW5jcmVtZW50cyA9IHRoaXMuZmxhdHRlbihbLi4udGhpcy5IT1VSUy5tYXAoKGhvdXIpID0+IFtgJHtob3VyfTowMGAsIGAke2hvdXJ9OjE1YCwgYCR7aG91cn06MzBgLCBgJHtob3VyfTo0NWBdKV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBob3VyczogQXJyYXk8c3RyaW5nPiA9IFsnMTInLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnXTtcbiAgICAgIHRoaXMuaW5jcmVtZW50cyA9IHRoaXMuZmxhdHRlbihbXG4gICAgICAgIC4uLmhvdXJzLm1hcCgoaG91cikgPT4gW2Ake2hvdXJ9OjAwIEFNYCwgYCR7aG91cn06MTUgQU1gLCBgJHtob3VyfTozMCBBTWAsIGAke2hvdXJ9OjQ1IEFNYF0pLFxuICAgICAgICAuLi5ob3Vycy5tYXAoKGhvdXIpID0+IFtgJHtob3VyfTowMCBQTWAsIGAke2hvdXJ9OjE1IFBNYCwgYCR7aG91cn06MzAgUE1gLCBgJHtob3VyfTo0NSBQTWBdKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLmluaXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaW5pdChuZXcgRGF0ZSgpLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCh2YWx1ZSwgZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBfdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgbGV0IGhvdXJzOiBzdHJpbmcgfCBudW1iZXIgPSBfdmFsdWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlczogc3RyaW5nIHwgbnVtYmVyID0gX3ZhbHVlLmdldE1pbnV0ZXMoKTtcblxuICAgIGlmICghdGhpcy5taWxpdGFyeSkge1xuICAgICAgdGhpcy5tZXJpZGlhbiA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG4gICAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgICBob3VycyA9IGhvdXJzIHx8IDEyO1xuICAgIH1cbiAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG5cbiAgICB0aGlzLnNldEhvdXJzKG51bGwsIGhvdXJzLCBkaXNwYXRjaCk7XG4gICAgdGhpcy5zZXRNaW51dGVzKG51bGwsIG1pbnV0ZXMsIGRpc3BhdGNoKTtcbiAgICB0aGlzLmNoZWNrQmV0d2VlbihtaW51dGVzKTtcbiAgfVxuXG4gIGNoZWNrQmV0d2Vlbih2YWx1ZSkge1xuICAgIHRoaXMuaW5CZXR3ZWVuID0gdGhpcy5NSU5VVEVTLmluZGV4T2YoU3RyaW5nKHZhbHVlKSkgPCAwO1xuICB9XG5cbiAgc2V0VmFsdWUoZXZlbnQsIHZhbHVlKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICBjb25zdCBbdGltZSwgbWVyaWRpYW5dID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZS5zcGxpdCgnOicpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgIHRoaXMubWVyaWRpYW4gPSBtZXJpZGlhbjtcblxuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgfVxuXG4gIHNldEhvdXJzKGV2ZW50LCBob3VycywgZGlzcGF0Y2gpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuICAgIHRoaXMuaG91cnNDbGFzcyA9IGBob3VyLSR7aG91cnN9YDtcbiAgICB0aGlzLmFjdGl2ZUhvdXIgPSBob3VycztcblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1pbnV0ZXMoZXZlbnQsIG1pbnV0ZXMsIGRpc3BhdGNoKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG4gICAgdGhpcy5taW51dGVzQ2xhc3MgPSBgbWluLSR7bWludXRlc31gO1xuICAgIHRoaXMuYWN0aXZlTWludXRlID0gbWludXRlcztcbiAgICB0aGlzLmNoZWNrQmV0d2VlbihtaW51dGVzKTtcblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBlcmlvZChldmVudCwgcGVyaW9kLCBkaXNwYXRjaCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLm1lcmlkaWFuID0gcGVyaW9kO1xuXG4gICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGF0Y2hDaGFuZ2UoKSB7XG4gICAgbGV0IGhvdXJzID0gTnVtYmVyKHRoaXMuaG91cnMpO1xuXG4gICAgaWYgKCF0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICBob3VycyA9IHRoaXMubWVyaWRpYW4udG9Mb3dlckNhc2UoKSA9PT0gJ3BtJyA/IGhvdXJzICsgMTIgOiBob3VycztcblxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciAxMlxuICAgICAgaWYgKHRoaXMubWVyaWRpYW4udG9Mb3dlckNhc2UoKSA9PT0gJ3BtJyAmJiBob3VycyA9PT0gMjQpIHtcbiAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXJpZGlhbi50b0xvd2VyQ2FzZSgpID09PSAnYW0nICYmIGhvdXJzID09PSAxMikge1xuICAgICAgICBob3VycyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhbHVlLnNldEhvdXJzKGhvdXJzKTtcbiAgICB2YWx1ZS5zZXRNaW51dGVzKHRoaXMubWludXRlcyk7XG4gICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICB0aGlzLnZhbHVlID0gYCR7dGhpcy5ob3Vyc306JHt0aGlzLm1pbnV0ZXN9ICR7dGhpcy5tZXJpZGlhbn1gO1xuICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICBob3VycyxcbiAgICAgIG1pbnV0ZXM6IHRoaXMubWludXRlcyxcbiAgICAgIG1lcmlkaWFuOiB0aGlzLm1lcmlkaWFuLFxuICAgICAgZGF0ZTogdmFsdWUsXG4gICAgICB0ZXh0OiB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAoSGVscGVycy5pc0RhdGUobW9kZWwpKSB7XG4gICAgICB0aGlzLmluaXQobW9kZWwsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19