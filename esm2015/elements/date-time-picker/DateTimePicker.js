// NG2
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import * as dateFns from 'date-fns';
import { NovoLabelService } from '../../services/novo-label-service';
// APP
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../date-picker/DatePicker";
import * as i4 from "@angular/forms";
import * as i5 from "../time-picker/TimePicker";
function NovoDateTimePickerElement_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.meridian, "");
} }
// Value accessor for the component (supports ngModel)
const DATE_TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoDateTimePickerElement),
    multi: true,
};
export class NovoDateTimePickerElement {
    constructor(labels, element) {
        this.labels = labels;
        this.element = element;
        this.weekStart = 0;
        // Select callback for output
        this.onSelect = new EventEmitter(false);
        this.componentTabState = 'date';
        this.datePickerValue = new Date();
        this.timePickerValue = new Date();
        this._onChange = () => { };
        this._onTouched = () => { };
    }
    toggleView(tab) {
        this.componentTabState = tab;
    }
    setDateLabels(value) {
        this.selectedLabel = this.labels.formatDateWithFormat(value, {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    }
    setTimeLabels(value) {
        let hours = value.getHours();
        const minutes = value.getMinutes();
        this.meridian = value.toLocaleTimeString().slice(-2);
        if (!this.military) {
            hours = this.meridian === 'PM' && hours > 12 ? hours - 12 : hours;
            // Special case for 12
            if (this.meridian === 'PM' && hours === 24) {
                hours = 12;
            }
            else if (this.meridian === 'AM' && hours === 0) {
                hours = 12;
            }
        }
        this.hours = hours.toString();
        this.minutes = minutes.toString().length === 1 ? `0${minutes.toString()}` : minutes.toString();
    }
    onDateSelected(event) {
        this.datePickerValue = event.date;
        this.model = this.createFullDateValue(this.datePickerValue, this.timePickerValue);
        this.setDateLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
        this.toggleView('time');
    }
    onTimeSelected(event) {
        this.timePickerValue = event.date;
        this.model = this.createFullDateValue(this.model, this.timePickerValue);
        this.setTimeLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
    }
    createFullDateValue(datePickerValue, timePickerValue) {
        return dateFns.setMilliseconds(dateFns.setSeconds(dateFns.setMinutes(dateFns.setHours(datePickerValue, dateFns.getHours(timePickerValue)), dateFns.getMinutes(timePickerValue)), dateFns.getSeconds(timePickerValue)), dateFns.getMilliseconds(timePickerValue));
    }
    // ValueAccessor Functions
    writeValue(model) {
        this.model = model;
        if (Helpers.isEmpty(model)) {
            this.model = new Date();
        }
        else if (!isNaN(model)) {
            this.model = new Date(model);
        }
        this.datePickerValue = this.model;
        this.timePickerValue = this.model;
        if (Helpers.isDate(this.model)) {
            this.setDateLabels(this.model);
            this.setTimeLabels(this.model);
        }
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
}
NovoDateTimePickerElement.ɵfac = function NovoDateTimePickerElement_Factory(t) { return new (t || NovoDateTimePickerElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
NovoDateTimePickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDateTimePickerElement, selectors: [["novo-date-time-picker"]], inputs: { minYear: "minYear", maxYear: "maxYear", start: "start", end: "end", military: "military", weekStart: "weekStart" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([DATE_TIME_PICKER_VALUE_ACCESSOR])], decls: 17, vars: 16, consts: [[1, "date-time-container"], [1, "date-time-tabs"], ["data-automation-id", "novo-date-time-date-tab", 1, "date-tab", 3, "click"], ["data-automation-id", "novo-date-time-time-tab", 1, "time-tab", 3, "click"], ["data-automation-id", "novo-time-picker-hours", 1, "hours"], ["data-automation-id", "novo-time-picker-minutes", 1, "minutes"], ["class", "meridian", 4, "ngIf"], [1, "date-time-indicator"], [1, "view-container"], [1, "calendar"], ["inline", "true", 3, "ngModel", "minYear", "maxYear", "start", "end", "weekStart", "onSelect", "ngModelChange"], [1, "time-picker"], ["inline", "true", 3, "ngModel", "military", "onSelect", "ngModelChange"], [1, "meridian"]], template: function NovoDateTimePickerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵlistener("click", function NovoDateTimePickerElement_Template_span_click_2_listener() { return ctx.toggleView("date"); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵlistener("click", function NovoDateTimePickerElement_Template_span_click_4_listener() { return ctx.toggleView("time"); });
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(7, ":");
        i0.ɵɵelementStart(8, "span", 5);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, NovoDateTimePickerElement_span_10_Template, 2, 1, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "i", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 8);
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelementStart(14, "novo-date-picker", 10);
        i0.ɵɵlistener("onSelect", function NovoDateTimePickerElement_Template_novo_date_picker_onSelect_14_listener($event) { return ctx.onDateSelected($event); })("ngModelChange", function NovoDateTimePickerElement_Template_novo_date_picker_ngModelChange_14_listener($event) { return ctx.model = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 11);
        i0.ɵɵelementStart(16, "novo-time-picker", 12);
        i0.ɵɵlistener("onSelect", function NovoDateTimePickerElement_Template_novo_time_picker_onSelect_16_listener($event) { return ctx.onTimeSelected($event); })("ngModelChange", function NovoDateTimePickerElement_Template_novo_time_picker_ngModelChange_16_listener($event) { return ctx.model = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@dateTextState", ctx.componentTabState);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.selectedLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@timeTextState", ctx.componentTabState);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.hours);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.minutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.military);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@indicatorState", ctx.componentTabState);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@containerState", ctx.componentTabState);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.model)("minYear", ctx.minYear)("maxYear", ctx.maxYear)("start", ctx.start)("end", ctx.end)("weekStart", ctx.weekStart);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.model)("military", ctx.military);
    } }, directives: [i2.NgIf, i3.NovoDatePickerElement, i4.NgControlStatus, i4.NgModel, i5.NovoTimePickerElement], encapsulation: 2, data: { animation: [
            trigger('dateTextState', [
                state('date', style({
                    opacity: '1.0',
                })),
                state('time', style({
                    opacity: '0.6',
                })),
                transition('date <=> time', animate('200ms ease-in')),
            ]),
            trigger('timeTextState', [
                state('date', style({
                    opacity: '0.6',
                })),
                state('time', style({
                    opacity: '1.0',
                })),
                transition('date <=> time', animate('200ms ease-in')),
            ]),
            trigger('indicatorState', [
                state('date', style({
                    transform: 'translateX(0%)',
                })),
                state('time', style({
                    transform: 'translateX(100%)',
                })),
                transition('date <=> time', animate('200ms ease-in')),
            ]),
            trigger('containerState', [
                state('date', style({
                    transform: 'translateX(0%)',
                })),
                state('time', style({
                    transform: 'translateX(-100%)',
                })),
                transition('date <=> time', animate('200ms ease-in')),
            ]),
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDateTimePickerElement, [{
        type: Component,
        args: [{
                selector: 'novo-date-time-picker',
                providers: [DATE_TIME_PICKER_VALUE_ACCESSOR],
                animations: [
                    trigger('dateTextState', [
                        state('date', style({
                            opacity: '1.0',
                        })),
                        state('time', style({
                            opacity: '0.6',
                        })),
                        transition('date <=> time', animate('200ms ease-in')),
                    ]),
                    trigger('timeTextState', [
                        state('date', style({
                            opacity: '0.6',
                        })),
                        state('time', style({
                            opacity: '1.0',
                        })),
                        transition('date <=> time', animate('200ms ease-in')),
                    ]),
                    trigger('indicatorState', [
                        state('date', style({
                            transform: 'translateX(0%)',
                        })),
                        state('time', style({
                            transform: 'translateX(100%)',
                        })),
                        transition('date <=> time', animate('200ms ease-in')),
                    ]),
                    trigger('containerState', [
                        state('date', style({
                            transform: 'translateX(0%)',
                        })),
                        state('time', style({
                            transform: 'translateX(-100%)',
                        })),
                        transition('date <=> time', animate('200ms ease-in')),
                    ]),
                ],
                template: `
    <div class="date-time-container">
      <div class="date-time-tabs">
        <span
          class="date-tab"
          (click)="toggleView('date')"
          [@dateTextState]="componentTabState"
          data-automation-id="novo-date-time-date-tab"
          >{{ selectedLabel }}</span
        >
        <span
          class="time-tab"
          (click)="toggleView('time')"
          [@timeTextState]="componentTabState"
          data-automation-id="novo-date-time-time-tab"
        >
          <span class="hours" data-automation-id="novo-time-picker-hours">{{ hours }}</span
          >:<span class="minutes" data-automation-id="novo-time-picker-minutes">{{ minutes }}</span>
          <span *ngIf="!military" class="meridian"> {{ meridian }}</span>
        </span>
        <i class="date-time-indicator" [@indicatorState]="componentTabState"></i>
      </div>
      <div class="view-container" [@containerState]="componentTabState">
        <div class="calendar">
          <novo-date-picker
            (onSelect)="onDateSelected($event)"
            [(ngModel)]="model"
            inline="true"
            [minYear]="minYear"
            [maxYear]="maxYear"
            [start]="start"
            [end]="end"
            [weekStart]="weekStart"
          ></novo-date-picker>
        </div>
        <div class="time-picker">
          <novo-time-picker (onSelect)="onTimeSelected($event)" [(ngModel)]="model" [military]="military" inline="true"></novo-time-picker>
        </div>
      </div>
    </div>
  `,
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i0.ElementRef }]; }, { minYear: [{
            type: Input
        }], maxYear: [{
            type: Input
        }], start: [{
            type: Input
        }], end: [{
            type: Input
        }], military: [{
            type: Input
        }], weekStart: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsU0FBUztBQUNULE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7O0lBNEZwQyxnQ0FBMEM7SUFBQSxZQUFjO0lBQUEsaUJBQU87OztJQUFyQixlQUFjO0lBQWQsK0NBQWM7O0FBMUZsRSxzREFBc0Q7QUFDdEQsTUFBTSwrQkFBK0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBNkdGLE1BQU0sT0FBTyx5QkFBeUI7SUE4QnBDLFlBQW1CLE1BQXdCLEVBQVUsT0FBbUI7UUFBckQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBbEJ4RSxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLDZCQUE2QjtRQUU3QixhQUFRLEdBQXNCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRELHNCQUFpQixHQUFXLE1BQU0sQ0FBQztRQUtuQyxvQkFBZSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkMsb0JBQWUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBR25DLGNBQVMsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDL0IsZUFBVSxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUUyQyxDQUFDO0lBRTVFLFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFXO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUU7WUFDM0QsS0FBSyxFQUFFLE9BQU87WUFDZCxHQUFHLEVBQUUsU0FBUztZQUNkLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVztRQUN2QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUVsRSxzQkFBc0I7WUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUMxQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ1o7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNoRCxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ1o7U0FDRjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqRyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQTBEO1FBQ3ZFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBMEY7UUFDdkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxlQUFxQixFQUFFLGVBQXFCO1FBQzlELE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FDNUIsT0FBTyxDQUFDLFVBQVUsQ0FDaEIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUM3SCxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUNwQyxFQUNELE9BQU8sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDekI7YUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOztrR0FsSFUseUJBQXlCOzhEQUF6Qix5QkFBeUIsNE9Bekd6QixDQUFDLCtCQUErQixDQUFDO1FBZ0UxQyw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsK0JBS0c7UUFIRCxvR0FBUyxlQUFXLE1BQU0sQ0FBQyxJQUFDO1FBRzNCLFlBQW1CO1FBQUEsaUJBQ3JCO1FBQ0QsK0JBTUU7UUFKQSxvR0FBUyxlQUFXLE1BQU0sQ0FBQyxJQUFDO1FBSTVCLCtCQUFnRTtRQUFBLFlBQVc7UUFBQSxpQkFDMUU7UUFBQSxpQkFBQztRQUFBLCtCQUFvRTtRQUFBLFlBQWE7UUFBQSxpQkFBTztRQUMxRiw4RUFBMEM7UUFDNUMsaUJBQU87UUFDUCx3QkFBeUU7UUFDM0UsaUJBQU07UUFDTiwrQkFDRTtRQUFBLCtCQUNFO1FBQUEsNkNBU29CO1FBUmxCLDZIQUFZLDBCQUFzQixJQUFDLGdKQUFBO1FBUXBDLGlCQUFtQjtRQUN0QixpQkFBTTtRQUNOLGdDQUNFO1FBQUEsNkNBQWlJO1FBQS9HLDZIQUFZLDBCQUFzQixJQUFDLGdKQUFBO1FBQXlELGlCQUFtQjtRQUNuSSxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBakNBLGVBQW9DO1FBQXBDLHNEQUFvQztRQUVuQyxlQUFtQjtRQUFuQix1Q0FBbUI7UUFLcEIsZUFBb0M7UUFBcEMsc0RBQW9DO1FBRzRCLGVBQVc7UUFBWCwrQkFBVztRQUNMLGVBQWE7UUFBYixpQ0FBYTtRQUM3RSxlQUFpQjtRQUFqQixvQ0FBaUI7UUFFTSxlQUFxQztRQUFyQyx1REFBcUM7UUFFMUMsZUFBcUM7UUFBckMsdURBQXFDO1FBSTNELGVBQW1CO1FBQW5CLG1DQUFtQix3QkFBQSx3QkFBQSxvQkFBQSxnQkFBQSw0QkFBQTtRQVVpQyxlQUFtQjtRQUFuQixtQ0FBbUIsMEJBQUE7eUpBbEdyRTtZQUNWLE9BQU8sQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO29CQUNKLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FDSDtnQkFDRCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztvQkFDSixPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQ0g7Z0JBQ0QsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEQsQ0FBQztZQUNGLE9BQU8sQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO29CQUNKLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FDSDtnQkFDRCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztvQkFDSixPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQ0g7Z0JBQ0QsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEQsQ0FBQztZQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDeEIsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7b0JBQ0osU0FBUyxFQUFFLGdCQUFnQjtpQkFDNUIsQ0FBQyxDQUNIO2dCQUNELEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO29CQUNKLFNBQVMsRUFBRSxrQkFBa0I7aUJBQzlCLENBQUMsQ0FDSDtnQkFDRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN0RCxDQUFDO1lBQ0YsT0FBTyxDQUFDLGdCQUFnQixFQUFFO2dCQUN4QixLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztvQkFDSixTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QixDQUFDLENBQ0g7Z0JBQ0QsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7b0JBQ0osU0FBUyxFQUFFLG1CQUFtQjtpQkFDL0IsQ0FBQyxDQUNIO2dCQUNELFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3RELENBQUM7U0FDSDtrREEyQ1UseUJBQXlCO2NBM0dyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsZUFBZSxFQUFFO3dCQUN2QixLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQzs0QkFDSixPQUFPLEVBQUUsS0FBSzt5QkFDZixDQUFDLENBQ0g7d0JBQ0QsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7NEJBQ0osT0FBTyxFQUFFLEtBQUs7eUJBQ2YsQ0FBQyxDQUNIO3dCQUNELFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUN0RCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxlQUFlLEVBQUU7d0JBQ3ZCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDOzRCQUNKLE9BQU8sRUFBRSxLQUFLO3lCQUNmLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQzs0QkFDSixPQUFPLEVBQUUsS0FBSzt5QkFDZixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ3RELENBQUM7b0JBQ0YsT0FBTyxDQUFDLGdCQUFnQixFQUFFO3dCQUN4QixLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQzs0QkFDSixTQUFTLEVBQUUsZ0JBQWdCO3lCQUM1QixDQUFDLENBQ0g7d0JBQ0QsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7NEJBQ0osU0FBUyxFQUFFLGtCQUFrQjt5QkFDOUIsQ0FBQyxDQUNIO3dCQUNELFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUN0RCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDeEIsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7NEJBQ0osU0FBUyxFQUFFLGdCQUFnQjt5QkFDNUIsQ0FBQyxDQUNIO3dCQUNELEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxtQkFBbUI7eUJBQy9CLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDdEQsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q1Q7YUFDRjs0RkFHQyxPQUFPO2tCQUROLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFLTixRQUFRO2tCQURQLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGUtdGltZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtEQVRFX1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcigndGltZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdpbmRpY2F0b3JTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29udGFpbmVyU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZS10aW1lLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtdGltZS10YWJzXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJkYXRlLXRhYlwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVZpZXcoJ2RhdGUnKVwiXG4gICAgICAgICAgW0BkYXRlVGV4dFN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGUtdGltZS1kYXRlLXRhYlwiXG4gICAgICAgICAgPnt7IHNlbGVjdGVkTGFiZWwgfX08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwidGltZS10YWJcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVWaWV3KCd0aW1lJylcIlxuICAgICAgICAgIFtAdGltZVRleHRTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRlLXRpbWUtdGltZS10YWJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Vyc1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tdGltZS1waWNrZXItaG91cnNcIj57eyBob3VycyB9fTwvc3BhblxuICAgICAgICAgID46PHNwYW4gY2xhc3M9XCJtaW51dGVzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1taW51dGVzXCI+e3sgbWludXRlcyB9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFtaWxpdGFyeVwiIGNsYXNzPVwibWVyaWRpYW5cIj4ge3sgbWVyaWRpYW4gfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGkgY2xhc3M9XCJkYXRlLXRpbWUtaW5kaWNhdG9yXCIgW0BpbmRpY2F0b3JTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInZpZXctY29udGFpbmVyXCIgW0Bjb250YWluZXJTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgICA8bm92by1kYXRlLXBpY2tlclxuICAgICAgICAgICAgKG9uU2VsZWN0KT1cIm9uRGF0ZVNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbFwiXG4gICAgICAgICAgICBpbmxpbmU9XCJ0cnVlXCJcbiAgICAgICAgICAgIFttaW5ZZWFyXT1cIm1pblllYXJcIlxuICAgICAgICAgICAgW21heFllYXJdPVwibWF4WWVhclwiXG4gICAgICAgICAgICBbc3RhcnRdPVwic3RhcnRcIlxuICAgICAgICAgICAgW2VuZF09XCJlbmRcIlxuICAgICAgICAgICAgW3dlZWtTdGFydF09XCJ3ZWVrU3RhcnRcIlxuICAgICAgICAgID48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1waWNrZXJcIj5cbiAgICAgICAgICA8bm92by10aW1lLXBpY2tlciAob25TZWxlY3QpPVwib25UaW1lU2VsZWN0ZWQoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibW9kZWxcIiBbbWlsaXRhcnldPVwibWlsaXRhcnlcIiBpbmxpbmU9XCJ0cnVlXCI+PC9ub3ZvLXRpbWUtcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IGFueTtcbiAgQElucHV0KClcbiAgc3RhcnQ6IGFueTtcbiAgQElucHV0KClcbiAgZW5kOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydDogbnVtYmVyID0gMDtcblxuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgY29tcG9uZW50VGFiU3RhdGU6IHN0cmluZyA9ICdkYXRlJztcbiAgc2VsZWN0ZWRMYWJlbDogc3RyaW5nO1xuICBob3Vyczogc3RyaW5nO1xuICBtaW51dGVzOiBzdHJpbmc7XG4gIG1lcmlkaWFuOiBzdHJpbmc7XG4gIGRhdGVQaWNrZXJWYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHRpbWVQaWNrZXJWYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgbW9kZWw6IGFueTtcbiAgX29uQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICB0b2dnbGVWaWV3KHRhYjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnRUYWJTdGF0ZSA9IHRhYjtcbiAgfVxuXG4gIHNldERhdGVMYWJlbHModmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZSwge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRpbWVMYWJlbHModmFsdWU6IERhdGUpIHtcbiAgICBsZXQgaG91cnMgPSB2YWx1ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XG5cbiAgICB0aGlzLm1lcmlkaWFuID0gdmFsdWUudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc2xpY2UoLTIpO1xuXG4gICAgaWYgKCF0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICBob3VycyA9IHRoaXMubWVyaWRpYW4gPT09ICdQTScgJiYgaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycztcblxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciAxMlxuICAgICAgaWYgKHRoaXMubWVyaWRpYW4gPT09ICdQTScgJiYgaG91cnMgPT09IDI0KSB7XG4gICAgICAgIGhvdXJzID0gMTI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVyaWRpYW4gPT09ICdBTScgJiYgaG91cnMgPT09IDApIHtcbiAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhvdXJzID0gaG91cnMudG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxID8gYDAke21pbnV0ZXMudG9TdHJpbmcoKX1gIDogbWludXRlcy50b1N0cmluZygpO1xuICB9XG5cbiAgb25EYXRlU2VsZWN0ZWQoZXZlbnQ6IHsgbW9udGg/OiBhbnk7IHllYXI/OiBhbnk7IGRheT86IGFueTsgZGF0ZT86IERhdGUgfSkge1xuICAgIHRoaXMuZGF0ZVBpY2tlclZhbHVlID0gZXZlbnQuZGF0ZTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5jcmVhdGVGdWxsRGF0ZVZhbHVlKHRoaXMuZGF0ZVBpY2tlclZhbHVlLCB0aGlzLnRpbWVQaWNrZXJWYWx1ZSk7XG4gICAgdGhpcy5zZXREYXRlTGFiZWxzKHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IGRhdGU6IHRoaXMubW9kZWwgfSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgdGhpcy50b2dnbGVWaWV3KCd0aW1lJyk7XG4gIH1cblxuICBvblRpbWVTZWxlY3RlZChldmVudDogeyBob3Vycz86IG51bWJlcjsgbWludXRlcz86IG51bWJlcjsgbWVyaWRpYW4/OiBzdHJpbmc7IGRhdGU/OiBEYXRlOyB0ZXh0Pzogc3RyaW5nIH0pIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJWYWx1ZSA9IGV2ZW50LmRhdGU7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuY3JlYXRlRnVsbERhdGVWYWx1ZSh0aGlzLm1vZGVsLCB0aGlzLnRpbWVQaWNrZXJWYWx1ZSk7XG4gICAgdGhpcy5zZXRUaW1lTGFiZWxzKHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IGRhdGU6IHRoaXMubW9kZWwgfSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICBjcmVhdGVGdWxsRGF0ZVZhbHVlKGRhdGVQaWNrZXJWYWx1ZTogRGF0ZSwgdGltZVBpY2tlclZhbHVlOiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuc2V0TWlsbGlzZWNvbmRzKFxuICAgICAgZGF0ZUZucy5zZXRTZWNvbmRzKFxuICAgICAgICBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlUGlja2VyVmFsdWUsIGRhdGVGbnMuZ2V0SG91cnModGltZVBpY2tlclZhbHVlKSksIGRhdGVGbnMuZ2V0TWludXRlcyh0aW1lUGlja2VyVmFsdWUpKSxcbiAgICAgICAgZGF0ZUZucy5nZXRTZWNvbmRzKHRpbWVQaWNrZXJWYWx1ZSksXG4gICAgICApLFxuICAgICAgZGF0ZUZucy5nZXRNaWxsaXNlY29uZHModGltZVBpY2tlclZhbHVlKSxcbiAgICApO1xuICB9XG5cbiAgLy8gVmFsdWVBY2Nlc3NvciBGdW5jdGlvbnNcbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkobW9kZWwpKSB7XG4gICAgICB0aGlzLm1vZGVsID0gbmV3IERhdGUoKTtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihtb2RlbCkpIHtcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGF0ZShtb2RlbCk7XG4gICAgfVxuICAgIHRoaXMuZGF0ZVBpY2tlclZhbHVlID0gdGhpcy5tb2RlbDtcbiAgICB0aGlzLnRpbWVQaWNrZXJWYWx1ZSA9IHRoaXMubW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKHRoaXMubW9kZWwpKSB7XG4gICAgICB0aGlzLnNldERhdGVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLnNldFRpbWVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==