import { __decorate, __metadata } from "tslib";
// NG2
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { isDate, isValid, parse, startOfDay } from 'date-fns';
import { NovoLabelService } from '../../services/novo-label-service';
import { BooleanInput } from '../../utils';
// APP
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "./calendar/calendar.component";
import * as i5 from "../button/Button";
function NovoDatePickerElement_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵlistener("click", function NovoDatePickerElement_div_1_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.toggleRangeSelect("startDate"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 7);
    i0.ɵɵlistener("click", function NovoDatePickerElement_div_1_Template_span_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.toggleRangeSelect("endDate"); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("week-select-mode", ctx_r0.weekRangeSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@startDateTextState", ctx_r0.rangeSelectMode);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.startDateLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@endDateTextState", ctx_r0.rangeSelectMode);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.endDateLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@indicatorState", ctx_r0.rangeSelectMode);
} }
// Value accessor for the component (supports ngModel)
const DATE_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoDatePickerElement),
    multi: true,
};
export class NovoDatePickerElement {
    constructor(labels, element, cdr, _sanitizer) {
        this.labels = labels;
        this.element = element;
        this.cdr = cdr;
        this._sanitizer = _sanitizer;
        /**
         * Day of the week the calendar should display first, Sunday=0...Saturday=6
         **/
        this.weekStart = 0;
        /**
         * Certain dates that are already selected.
         **/
        this.preselected = [];
        /**
         * Whether the days for the previous and next month should be hidden.
         **/
        this.hideOverflowDays = false;
        /**
         * Whether the footer which contains `today` button should be hidden.
         **/
        this.hideFooter = false;
        // Select callback for output
        this.onSelect = new EventEmitter(false);
        this._mode = 'single';
        this._numberOfMonths = [0];
        this._selection = [];
        this.preview = [];
        this.rangeSelectMode = 'startDate';
        this._onChange = () => { };
        this._onTouched = () => { };
    }
    /**
     * Number of months to display at once.
     * @default 1
     **/
    get numberOfMonths() {
        return this._numberOfMonths.length;
    }
    set numberOfMonths(value) {
        this._numberOfMonths = Array.from(Array(Number(value)).keys());
    }
    /**
     * How the date selection should work.
     * @default single
     **/
    get mode() {
        return this._mode;
    }
    set mode(value) {
        if (this._mode !== value) {
            this._mode = value;
        }
    }
    /**
     * **deprecated** please use `mode="range"`.
     **/
    get range() {
        return ['range', 'week'].includes(this.mode) || this._range;
    }
    set range(value) {
        console.warn(`'range' property is deprecated, please use 'mode="range"'.`);
        if (this._range !== value) {
            this._range = value;
            this.mode = 'range';
        }
    }
    /**
     * **deprecated** please use `mode="week"`.
     **/
    get weekRangeSelect() {
        return this._mode === 'week' || this._weekRangeSelect;
    }
    set weekRangeSelect(value) {
        console.warn(`'weekRangeSelect' property is deprecated, please use 'mode="week"'.`);
        if (this._weekRangeSelect !== value) {
            this._weekRangeSelect = value;
            this.mode = 'week';
        }
    }
    get selection() {
        return this._selection;
    }
    set selection(value) {
        this._selection = value ? value.filter(isDate).map((d) => startOfDay(d)) : [];
    }
    ngOnInit() {
        // Determine the year array
        const now = new Date();
        // Set labels
        if (this.model) {
            this.modelToSelection(this.model);
        }
        if (this.selection && this.selection.length) {
            this.updateView(this.selection[0]);
        }
    }
    updateView(date) {
        const value = date ? new Date(date) : new Date();
        this.activeDate = new Date(value);
    }
    updateSelection(selected, fireEvents = true) {
        // Helpers.swallowEvent(event);
        this.selection = selected;
        this.startDateLabel = this.labels.formatDateWithFormat(this.selection[0], {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
        this.endDateLabel = this.labels.formatDateWithFormat(this.selection[1], {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
        if (fireEvents) {
            switch (this.mode) {
                case 'multiple':
                    this.fireSelect();
                    // Also, update the ngModel
                    this._onChange(this.selection);
                    this.model = this.selection;
                    break;
                case 'range':
                case 'week':
                    if (this.selection.filter(Boolean).length === 2) {
                        this.fireRangeSelect();
                        // Also, update the ngModel
                        const model = {
                            startDate: this.selection[0],
                            endDate: this.selection[1],
                        };
                        this._onChange(model);
                        this.model = model;
                    }
                    break;
                case 'single':
                default:
                    this.fireSelect();
                    // Also, update the ngModel
                    this._onChange(this.selection[0]);
                    this.model = this.selection[0];
                    break;
            }
        }
        this.cdr.markForCheck();
    }
    eventData(date) {
        return {
            year: date.getFullYear(),
            month: this.labels.formatDateWithFormat(date, { month: 'long' }),
            day: this.labels.formatDateWithFormat(date, { weekday: 'long' }),
            date,
        };
    }
    fireSelect() {
        if (this.mode === 'multiple') {
            this.onSelect.next(this.selection);
        }
        else {
            this.onSelect.next(this.eventData(this.selection[0]));
        }
    }
    fireRangeSelect() {
        // Make sure the start date is before the end date
        if (this.selection.filter(Boolean).length === 2) {
            const [start, end] = this.selection;
            this.onSelect.next({
                startDate: this.eventData(start),
                endDate: this.eventData(end),
            });
        }
    }
    setToday() {
        const tmp = new Date();
        this.updateView(tmp);
    }
    toggleRangeSelect(range) {
        this.rangeSelectMode = range;
        if (range === 'startDate' && this.selection.length) {
            this.updateView(this.selection[0]);
        }
        if (range === 'endDate' && this.selection.length === 2) {
            this.updateView(this.selection[1]);
        }
    }
    modelToSelection(model) {
        // this.selection = this._strategy.selectionFinished();
        switch (this.mode) {
            case 'multiple':
                this.selection = model;
                break;
            case 'range':
            case 'week':
                const range = this.model;
                this.selection = [range.startDate, range.endDate].filter(Boolean);
                break;
            case 'single':
            default:
                this.selection = [model];
                break;
        }
    }
    // ValueAccessor Functions
    writeValue(model) {
        this.model = model;
        if (this.mode === 'multiple') {
            this.selection = this.model;
        }
        if (Helpers.isDate(model)) {
            this.updateView(model);
            this.modelToSelection(model);
        }
        else if (Helpers.isString(model)) {
            const date = parse(model);
            if (isValid(date)) {
                this.updateView(date);
                this.modelToSelection(date);
            }
        }
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
}
NovoDatePickerElement.ɵfac = function NovoDatePickerElement_Factory(t) { return new (t || NovoDatePickerElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
NovoDatePickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDatePickerElement, selectors: [["novo-date-picker"]], hostVars: 2, hostBindings: function NovoDatePickerElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("hide-overflow-days", ctx.hideOverflowDays);
    } }, inputs: { minYear: "minYear", maxYear: "maxYear", start: "start", end: "end", inline: "inline", weekStart: "weekStart", preselected: "preselected", hideOverflowDays: "hideOverflowDays", hideFooter: "hideFooter", numberOfMonths: "numberOfMonths", mode: "mode", range: "range", weekRangeSelect: "weekRangeSelect" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([DATE_PICKER_VALUE_ACCESSOR])], decls: 6, vars: 8, consts: [[1, "date-picker-container"], ["class", "date-range-tabs", 3, "week-select-mode", 4, "ngIf"], [3, "activeDate", "selected", "mode", "numberOfMonths", "weekStartsOn", "selectedChange"], [1, "calendar-footer", 3, "hidden"], ["size", "small", "data-automation-id", "calendar-today", 1, "today", 3, "click"], [1, "date-range-tabs"], ["data-automation-id", "calendar-start-date", 1, "range-tab", 3, "click"], ["data-automation-id", "calendar-end-date", 1, "range-tab", 3, "click"], [1, "indicator"]], template: function NovoDatePickerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NovoDatePickerElement_div_1_Template, 6, 7, "div", 1);
        i0.ɵɵelementStart(2, "novo-calendar", 2);
        i0.ɵɵlistener("selectedChange", function NovoDatePickerElement_Template_novo_calendar_selectedChange_2_listener($event) { return ctx.selection = $event; })("selectedChange", function NovoDatePickerElement_Template_novo_calendar_selectedChange_2_listener($event) { return ctx.updateSelection($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "novo-button", 4);
        i0.ɵɵlistener("click", function NovoDatePickerElement_Template_novo_button_click_4_listener() { return ctx.setToday(); });
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.range);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("activeDate", ctx.activeDate)("selected", ctx.selection)("mode", ctx.mode)("numberOfMonths", ctx.numberOfMonths)("weekStartsOn", ctx.weekStart);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", ctx.hideFooter);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.labels.today);
    } }, directives: [i3.NgIf, i4.NovoCalendarElement, i5.NovoButtonElement], encapsulation: 2, data: { animation: [
            trigger('startDateTextState', [
                state('startDate', style({
                    opacity: '1.0',
                })),
                state('endDate', style({
                    opacity: '0.6',
                })),
                transition('startDate <=> endDate', animate('200ms ease-in')),
            ]),
            trigger('endDateTextState', [
                state('startDate', style({
                    opacity: '0.6',
                })),
                state('endDate', style({
                    opacity: '1.0',
                })),
                transition('startDate <=> endDate', animate('200ms ease-in')),
            ]),
            trigger('indicatorState', [
                state('startDate', style({
                    transform: 'translateX(0%)',
                })),
                state('endDate', style({
                    transform: 'translateX(100%)',
                })),
                transition('startDate <=> endDate', animate('200ms ease-in')),
            ]),
        ] } });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoDatePickerElement.prototype, "inline", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoDatePickerElement.prototype, "hideOverflowDays", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoDatePickerElement.prototype, "hideFooter", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDatePickerElement, [{
        type: Component,
        args: [{
                selector: 'novo-date-picker',
                providers: [DATE_PICKER_VALUE_ACCESSOR],
                animations: [
                    trigger('startDateTextState', [
                        state('startDate', style({
                            opacity: '1.0',
                        })),
                        state('endDate', style({
                            opacity: '0.6',
                        })),
                        transition('startDate <=> endDate', animate('200ms ease-in')),
                    ]),
                    trigger('endDateTextState', [
                        state('startDate', style({
                            opacity: '0.6',
                        })),
                        state('endDate', style({
                            opacity: '1.0',
                        })),
                        transition('startDate <=> endDate', animate('200ms ease-in')),
                    ]),
                    trigger('indicatorState', [
                        state('startDate', style({
                            transform: 'translateX(0%)',
                        })),
                        state('endDate', style({
                            transform: 'translateX(100%)',
                        })),
                        transition('startDate <=> endDate', animate('200ms ease-in')),
                    ]),
                ],
                template: `
    <div class="date-picker-container">
      <div class="date-range-tabs" *ngIf="range" [class.week-select-mode]="weekRangeSelect">
        <span
          class="range-tab"
          (click)="toggleRangeSelect('startDate')"
          [@startDateTextState]="rangeSelectMode"
          data-automation-id="calendar-start-date"
          >{{ startDateLabel }}</span
        >
        <span
          class="range-tab"
          (click)="toggleRangeSelect('endDate')"
          [@endDateTextState]="rangeSelectMode"
          data-automation-id="calendar-end-date"
          >{{ endDateLabel }}</span
        >
        <i class="indicator" [@indicatorState]="rangeSelectMode"></i>
      </div>

      <novo-calendar
        [activeDate]="activeDate"
        [(selected)]="selection"
        (selectedChange)="updateSelection($event)"
        [mode]="mode"
        [numberOfMonths]="numberOfMonths"
        [weekStartsOn]="weekStart"
      ></novo-calendar>

      <div class="calendar-footer" [hidden]="hideFooter">
        <novo-button (click)="setToday()" class="today" size="small" data-automation-id="calendar-today">{{ labels.today }}</novo-button>
      </div>
    </div>
  `,
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.DomSanitizer }]; }, { minYear: [{
            type: Input
        }], maxYear: [{
            type: Input
        }], start: [{
            type: Input
        }], end: [{
            type: Input
        }], inline: [{
            type: Input
        }], weekStart: [{
            type: Input
        }], preselected: [{
            type: Input
        }], hideOverflowDays: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.hide-overflow-days']
        }], hideFooter: [{
            type: Input
        }], onSelect: [{
            type: Output
        }], numberOfMonths: [{
            type: Input
        }], mode: [{
            type: Input
        }], range: [{
            type: Input
        }], weekRangeSelect: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsU0FBUztBQUNULE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7SUE4RHhDLDhCQUNFO0lBQUEsK0JBS0c7SUFIRCx5TEFBMkIsV0FBVyxLQUFFO0lBR3ZDLFlBQW9CO0lBQUEsaUJBQ3RCO0lBQ0QsK0JBS0c7SUFIRCx5TEFBMkIsU0FBUyxLQUFFO0lBR3JDLFlBQWtCO0lBQUEsaUJBQ3BCO0lBQ0QsdUJBQTZEO0lBQy9ELGlCQUFNOzs7SUFoQnFDLDBEQUEwQztJQUlqRixlQUF1QztJ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RCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDeEIsS0FBSyxDQUNILFdBQVcsRUFDWCxLQUFLLENBQUM7NEJBQ0osU0FBUyxFQUFFLGdCQUFnQjt5QkFDNUIsQ0FBQyxDQUNIO3dCQUNELEtBQUssQ0FDSCxTQUFTLEVBQ1QsS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUM5RCxDQUFDO2lCQUNIO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNUO2FBQ0Y7dUpBTUMsT0FBTztrQkFETixLQUFLO1lBTU4sT0FBTztrQkFETixLQUFLO1lBTU4sS0FBSztrQkFESixLQUFLO1lBTU4sR0FBRztrQkFERixLQUFLO1lBT04sTUFBTTtrQkFGTCxLQUFLO1lBT04sU0FBUztrQkFEUixLQUFLO1lBTU4sV0FBVztrQkFEVixLQUFLO1lBUUMsZ0JBQWdCO2tCQUh0QixLQUFLOztrQkFFTCxXQUFXO21CQUFDLDBCQUEwQjtZQU9oQyxVQUFVO2tCQUZoQixLQUFLO1lBTU4sUUFBUTtrQkFEUCxNQUFNO1lBYUgsY0FBYztrQkFEakIsS0FBSztZQWFGLElBQUk7a0JBRFAsS0FBSztZQWFGLEtBQUs7a0JBRFIsS0FBSztZQWVGLGVBQWU7a0JBRGxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgaXNEYXRlLCBpc1ZhbGlkLCBwYXJzZSwgc3RhcnRPZkRheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VsZWN0TW9kZXMsIG1vZGVsVHlwZXMsIFJhbmdlTW9kZWwsIHJhbmdlU2VsZWN0TW9kZXMgfSBmcm9tICcuL2RhdGUtcGlja2VyLnR5cGVzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBEQVRFX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9EYXRlUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0RBVEVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0YXJ0RGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignZW5kRGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW5kaWNhdG9yU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignc3RhcnREYXRlIDw9PiBlbmREYXRlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1yYW5nZS10YWJzXCIgKm5nSWY9XCJyYW5nZVwiIFtjbGFzcy53ZWVrLXNlbGVjdC1tb2RlXT1cIndlZWtSYW5nZVNlbGVjdFwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwicmFuZ2UtdGFiXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlUmFuZ2VTZWxlY3QoJ3N0YXJ0RGF0ZScpXCJcbiAgICAgICAgICBbQHN0YXJ0RGF0ZVRleHRTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgID57eyBzdGFydERhdGVMYWJlbCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJyYW5nZS10YWJcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVSYW5nZVNlbGVjdCgnZW5kRGF0ZScpXCJcbiAgICAgICAgICBbQGVuZERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1lbmQtZGF0ZVwiXG4gICAgICAgICAgPnt7IGVuZERhdGVMYWJlbCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiaW5kaWNhdG9yXCIgW0BpbmRpY2F0b3JTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIj48L2k+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG5vdm8tY2FsZW5kYXJcbiAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgIFsoc2VsZWN0ZWQpXT1cInNlbGVjdGlvblwiXG4gICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJ1cGRhdGVTZWxlY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICBbbnVtYmVyT2ZNb250aHNdPVwibnVtYmVyT2ZNb250aHNcIlxuICAgICAgICBbd2Vla1N0YXJ0c09uXT1cIndlZWtTdGFydFwiXG4gICAgICA+PC9ub3ZvLWNhbGVuZGFyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZm9vdGVyXCIgW2hpZGRlbl09XCJoaWRlRm9vdGVyXCI+XG4gICAgICAgIDxub3ZvLWJ1dHRvbiAoY2xpY2spPVwic2V0VG9kYXkoKVwiIGNsYXNzPVwidG9kYXlcIiBzaXplPVwic21hbGxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci10b2RheVwiPnt7IGxhYmVscy50b2RheSB9fTwvbm92by1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSB5ZWFyIHRvIGFsbG93IHNlbGVjdGVkIGluIHllYXIgc2VsZWN0IHZpZXdcbiAgICoqL1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB5ZWFyIHRvIGFsbG93IHNlbGVjdGVkIGluIHllYXIgc2VsZWN0IHZpZXdcbiAgICoqL1xuICBASW5wdXQoKVxuICBtYXhZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLlxuICAgKiovXG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICAvKipcbiAgICogVGhlIG1heGltdW0gZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC5cbiAgICoqL1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIC8qKlxuICAgKiAqKkRlcHJlY2F0ZWQqKiBXaGV0aGVyIHRoZSBkYXRlLXBpY2tlciBpcyB1c2VkIG91dHNpZGUgb2YgYW4gb3ZlcmxheS5cbiAgICoqL1xuICBASW5wdXQoKVxuICBAQm9vbGVhbklucHV0KClcbiAgaW5saW5lOiBib29sZWFuO1xuICAvKipcbiAgICogRGF5IG9mIHRoZSB3ZWVrIHRoZSBjYWxlbmRhciBzaG91bGQgZGlzcGxheSBmaXJzdCwgU3VuZGF5PTAuLi5TYXR1cmRheT02XG4gICAqKi9cbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiBudW1iZXIgPSAwO1xuICAvKipcbiAgICogQ2VydGFpbiBkYXRlcyB0aGF0IGFyZSBhbHJlYWR5IHNlbGVjdGVkLlxuICAgKiovXG4gIEBJbnB1dCgpXG4gIHByZXNlbGVjdGVkOiBEYXRlW10gPSBbXTtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRheXMgZm9yIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBtb250aCBzaG91bGQgYmUgaGlkZGVuLlxuICAgKiovXG4gIEBJbnB1dCgpXG4gIEBCb29sZWFuSW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhpZGUtb3ZlcmZsb3ctZGF5cycpXG4gIHB1YmxpYyBoaWRlT3ZlcmZsb3dEYXlzOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmb290ZXIgd2hpY2ggY29udGFpbnMgYHRvZGF5YCBidXR0b24gc2hvdWxkIGJlIGhpZGRlbi5cbiAgICoqL1xuICBASW5wdXQoKVxuICBAQm9vbGVhbklucHV0KClcbiAgcHVibGljIGhpZGVGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgX21vZGU6IERhdGVQaWNrZXJTZWxlY3RNb2RlcyA9ICdzaW5nbGUnO1xuICBfcmFuZ2U6IGJvb2xlYW47XG4gIF93ZWVrUmFuZ2VTZWxlY3Q6IGJvb2xlYW47XG4gIF9udW1iZXJPZk1vbnRoczogbnVtYmVyW10gPSBbMF07XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBtb250aHMgdG8gZGlzcGxheSBhdCBvbmNlLlxuICAgKiBAZGVmYXVsdCAxXG4gICAqKi9cbiAgQElucHV0KClcbiAgZ2V0IG51bWJlck9mTW9udGhzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mTW9udGhzLmxlbmd0aDtcbiAgfVxuICBzZXQgbnVtYmVyT2ZNb250aHModmFsdWUpIHtcbiAgICB0aGlzLl9udW1iZXJPZk1vbnRocyA9IEFycmF5LmZyb20oQXJyYXkoTnVtYmVyKHZhbHVlKSkua2V5cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3cgdGhlIGRhdGUgc2VsZWN0aW9uIHNob3VsZCB3b3JrLlxuICAgKiBAZGVmYXVsdCBzaW5nbGVcbiAgICoqL1xuICBASW5wdXQoKVxuICBnZXQgbW9kZSgpOiBEYXRlUGlja2VyU2VsZWN0TW9kZXMge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHNldCBtb2RlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX21vZGUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiAqKmRlcHJlY2F0ZWQqKiBwbGVhc2UgdXNlIGBtb2RlPVwicmFuZ2VcImAuXG4gICAqKi9cbiAgQElucHV0KClcbiAgZ2V0IHJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBbJ3JhbmdlJywgJ3dlZWsnXS5pbmNsdWRlcyh0aGlzLm1vZGUpIHx8IHRoaXMuX3JhbmdlO1xuICB9XG4gIHNldCByYW5nZSh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybihgJ3JhbmdlJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlICdtb2RlPVwicmFuZ2VcIicuYCk7XG4gICAgaWYgKHRoaXMuX3JhbmdlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fcmFuZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiAqKmRlcHJlY2F0ZWQqKiBwbGVhc2UgdXNlIGBtb2RlPVwid2Vla1wiYC5cbiAgICoqL1xuICBASW5wdXQoKVxuICBnZXQgd2Vla1JhbmdlU2VsZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSAnd2VlaycgfHwgdGhpcy5fd2Vla1JhbmdlU2VsZWN0O1xuICB9XG4gIHNldCB3ZWVrUmFuZ2VTZWxlY3QodmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oYCd3ZWVrUmFuZ2VTZWxlY3QnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgJ21vZGU9XCJ3ZWVrXCInLmApO1xuICAgIGlmICh0aGlzLl93ZWVrUmFuZ2VTZWxlY3QgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl93ZWVrUmFuZ2VTZWxlY3QgPSB2YWx1ZTtcbiAgICAgIHRoaXMubW9kZSA9ICd3ZWVrJztcbiAgICB9XG4gIH1cblxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgLy8gZ2V0IGhiX3dpZHRoKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGAke3RoaXMubnVtYmVyT2ZNb250aHMgKiAyMjh9cHhgKTtcbiAgLy8gfVxuXG4gIG1vZGVsOiBtb2RlbFR5cGVzO1xuICBhY3RpdmVEYXRlOiBEYXRlO1xuXG4gIF9zZWxlY3Rpb246IERhdGVbXSA9IFtdO1xuICBwcmV2aWV3OiBEYXRlW10gPSBbXTtcbiAgc3RhcnREYXRlTGFiZWw6IHN0cmluZztcbiAgZW5kRGF0ZUxhYmVsOiBzdHJpbmc7XG5cbiAgcmFuZ2VTZWxlY3RNb2RlOiByYW5nZVNlbGVjdE1vZGVzID0gJ3N0YXJ0RGF0ZSc7XG4gIF9vbkNoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBnZXQgc2VsZWN0aW9uKCk6IERhdGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gdmFsdWUgPyB2YWx1ZS5maWx0ZXIoaXNEYXRlKS5tYXAoKGQpID0+IHN0YXJ0T2ZEYXkoZCkpIDogW107XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHllYXIgYXJyYXlcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIFNldCBsYWJlbHNcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5tb2RlbFRvU2VsZWN0aW9uKHRoaXMubW9kZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZpZXcoZGF0ZSkge1xuICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBkYXRlID8gbmV3IERhdGUoZGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZDogRGF0ZVtdLCBmaXJlRXZlbnRzID0gdHJ1ZSkge1xuICAgIC8vIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGVkO1xuXG4gICAgdGhpcy5zdGFydERhdGVMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0aW9uWzBdLCB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5lbmREYXRlTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGlvblsxXSwge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICB9KTtcblxuICAgIGlmIChmaXJlRXZlbnRzKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlICdtdWx0aXBsZSc6XG4gICAgICAgICAgdGhpcy5maXJlU2VsZWN0KCk7XG4gICAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24uZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5maXJlUmFuZ2VTZWxlY3QoKTtcbiAgICAgICAgICAgIC8vIEFsc28sIHVwZGF0ZSB0aGUgbmdNb2RlbFxuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB7XG4gICAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zZWxlY3Rpb25bMF0sXG4gICAgICAgICAgICAgIGVuZERhdGU6IHRoaXMuc2VsZWN0aW9uWzFdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NpbmdsZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5maXJlU2VsZWN0KCk7XG4gICAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy5zZWxlY3Rpb25bMF0pO1xuICAgICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLnNlbGVjdGlvblswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGV2ZW50RGF0YShkYXRlOiBEYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChkYXRlLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KGRhdGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgZGF0ZSxcbiAgICB9O1xuICB9XG5cbiAgZmlyZVNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Lm5leHQodGhpcy5zZWxlY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Lm5leHQodGhpcy5ldmVudERhdGEodGhpcy5zZWxlY3Rpb25bMF0pKTtcbiAgICB9XG4gIH1cblxuICBmaXJlUmFuZ2VTZWxlY3QoKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBzdGFydCBkYXRlIGlzIGJlZm9yZSB0aGUgZW5kIGRhdGVcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24uZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICBzdGFydERhdGU6IHRoaXMuZXZlbnREYXRhKHN0YXJ0KSxcbiAgICAgICAgZW5kRGF0ZTogdGhpcy5ldmVudERhdGEoZW5kKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFRvZGF5KCkge1xuICAgIGNvbnN0IHRtcCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCk7XG4gIH1cblxuICB0b2dnbGVSYW5nZVNlbGVjdChyYW5nZTogcmFuZ2VTZWxlY3RNb2Rlcyk6IHZvaWQge1xuICAgIHRoaXMucmFuZ2VTZWxlY3RNb2RlID0gcmFuZ2U7XG4gICAgaWYgKHJhbmdlID09PSAnc3RhcnREYXRlJyAmJiB0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGlmIChyYW5nZSA9PT0gJ2VuZERhdGUnICYmIHRoaXMuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuc2VsZWN0aW9uWzFdKTtcbiAgICB9XG4gIH1cblxuICBtb2RlbFRvU2VsZWN0aW9uKG1vZGVsOiBtb2RlbFR5cGVzKSB7XG4gICAgLy8gdGhpcy5zZWxlY3Rpb24gPSB0aGlzLl9zdHJhdGVneS5zZWxlY3Rpb25GaW5pc2hlZCgpO1xuICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICBjYXNlICdtdWx0aXBsZSc6XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbW9kZWwgYXMgRGF0ZVtdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMubW9kZWwgYXMgUmFuZ2VNb2RlbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbcmFuZ2Uuc3RhcnREYXRlLCByYW5nZS5lbmREYXRlXS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW21vZGVsIGFzIERhdGVdO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBtb2RlbFR5cGVzKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5tb2RlbCBhcyBEYXRlW107XG4gICAgfVxuICAgIGlmIChIZWxwZXJzLmlzRGF0ZShtb2RlbCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldyhtb2RlbCk7XG4gICAgICB0aGlzLm1vZGVsVG9TZWxlY3Rpb24obW9kZWwpO1xuICAgIH0gZWxzZSBpZiAoSGVscGVycy5pc1N0cmluZyhtb2RlbCkpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZShtb2RlbCBhcyBhbnkpO1xuICAgICAgaWYgKGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KGRhdGUpO1xuICAgICAgICB0aGlzLm1vZGVsVG9TZWxlY3Rpb24oZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==