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
        this.weekStart = 0;
        this.preselected = [];
        this.hideOverflowDays = false;
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
    get numberOfMonths() {
        return this._numberOfMonths.length;
    }
    set numberOfMonths(value) {
        this._numberOfMonths = Array.from(Array(Number(value)).keys());
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        if (this._mode !== value) {
            this._mode = value;
        }
    }
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
    } }, inputs: { minYear: "minYear", maxYear: "maxYear", start: "start", end: "end", inline: "inline", weekStart: "weekStart", preselected: "preselected", hideOverflowDays: "hideOverflowDays", hideFooter: "hideFooter", numberOfMonths: "numberOfMonths", mode: "mode", range: "range", weekRangeSelect: "weekRangeSelect" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([DATE_PICKER_VALUE_ACCESSOR])], decls: 6, vars: 8, consts: [[1, "date-picker-container"], ["class", "date-range-tabs", 3, "week-select-mode", 4, "ngIf"], [3, "activeDate", "selected", "mode", "numberOfMonths", "weekStartsOn", "selectedChange"], [1, "calendar-footer", 3, "hidden"], ["data-automation-id", "calendar-today", 1, "today", 3, "click"], [1, "date-range-tabs"], ["data-automation-id", "calendar-start-date", 1, "range-tab", 3, "click"], ["data-automation-id", "calendar-end-date", 1, "range-tab", 3, "click"], [1, "indicator"]], template: function NovoDatePickerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NovoDatePickerElement_div_1_Template, 6, 7, "div", 1);
        i0.ɵɵelementStart(2, "novo-calendar", 2);
        i0.ɵɵlistener("selectedChange", function NovoDatePickerElement_Template_novo_calendar_selectedChange_2_listener($event) { return ctx.selection = $event; })("selectedChange", function NovoDatePickerElement_Template_novo_calendar_selectedChange_2_listener($event) { return ctx.updateSelection($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵlistener("click", function NovoDatePickerElement_Template_span_click_4_listener() { return ctx.setToday(); });
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
    } }, directives: [i3.NgIf, i4.NovoCalendarElement], encapsulation: 2, data: { animation: [
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
        <span (click)="setToday()" class="today" data-automation-id="calendar-today">{{ labels.today }}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxTQUFTO0FBQ1QsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7O0lBOER4Qyw4QkFDRTtJQUFBLCtCQUtHO0lBSEQseUxBQTJCLFdBQVcsS0FBRTtJQUd2QyxZQUFvQjtJQUFBLGlCQUN0QjtJQUNELCtCQUtHO0lBSEQseUxBQTJCLFNBQVMsS0FBRTtJQUdyQyxZQUFrQjtJQUFBLGlCQUNwQjtJQUNELHVCQUE2RDtJQUMvRCxpQkFBTTs7O0lBaEJxQywwREFBMEM7SUFJakYsZUFBdUM7SUFBdkMs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QkFDNUIsQ0FBQyxDQUNIO3dCQUNELEtBQUssQ0FDSCxTQUFTLEVBQ1QsS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUM5RCxDQUFDO2lCQUNIO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNUO2FBQ0Y7dUpBR0MsT0FBTztrQkFETixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sR0FBRztrQkFERixLQUFLO1lBSU4sTUFBTTtrQkFGTCxLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBTUMsZ0JBQWdCO2tCQUh0QixLQUFLOztrQkFFTCxXQUFXO21CQUFDLDBCQUEwQjtZQUtoQyxVQUFVO2tCQUZoQixLQUFLO1lBTU4sUUFBUTtrQkFEUCxNQUFNO1lBU0gsY0FBYztrQkFEakIsS0FBSztZQVNGLElBQUk7a0JBRFAsS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSztZQVlGLGVBQWU7a0JBRGxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgaXNEYXRlLCBpc1ZhbGlkLCBwYXJzZSwgc3RhcnRPZkRheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VsZWN0TW9kZXMsIG1vZGVsVHlwZXMsIFJhbmdlTW9kZWwsIHJhbmdlU2VsZWN0TW9kZXMgfSBmcm9tICcuL2RhdGUtcGlja2VyLnR5cGVzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBEQVRFX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9EYXRlUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0RBVEVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0YXJ0RGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignZW5kRGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW5kaWNhdG9yU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignc3RhcnREYXRlIDw9PiBlbmREYXRlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1yYW5nZS10YWJzXCIgKm5nSWY9XCJyYW5nZVwiIFtjbGFzcy53ZWVrLXNlbGVjdC1tb2RlXT1cIndlZWtSYW5nZVNlbGVjdFwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwicmFuZ2UtdGFiXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlUmFuZ2VTZWxlY3QoJ3N0YXJ0RGF0ZScpXCJcbiAgICAgICAgICBbQHN0YXJ0RGF0ZVRleHRTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgID57eyBzdGFydERhdGVMYWJlbCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJyYW5nZS10YWJcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVSYW5nZVNlbGVjdCgnZW5kRGF0ZScpXCJcbiAgICAgICAgICBbQGVuZERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1lbmQtZGF0ZVwiXG4gICAgICAgICAgPnt7IGVuZERhdGVMYWJlbCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiaW5kaWNhdG9yXCIgW0BpbmRpY2F0b3JTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIj48L2k+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG5vdm8tY2FsZW5kYXJcbiAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgIFsoc2VsZWN0ZWQpXT1cInNlbGVjdGlvblwiXG4gICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJ1cGRhdGVTZWxlY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICBbbnVtYmVyT2ZNb250aHNdPVwibnVtYmVyT2ZNb250aHNcIlxuICAgICAgICBbd2Vla1N0YXJ0c09uXT1cIndlZWtTdGFydFwiXG4gICAgICA+PC9ub3ZvLWNhbGVuZGFyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZm9vdGVyXCIgW2hpZGRlbl09XCJoaWRlRm9vdGVyXCI+XG4gICAgICAgIDxzcGFuIChjbGljayk9XCJzZXRUb2RheSgpXCIgY2xhc3M9XCJ0b2RheVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXRvZGF5XCI+e3sgbGFiZWxzLnRvZGF5IH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3RhcnQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGVuZDogRGF0ZTtcbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIGlubGluZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKVxuICBwcmVzZWxlY3RlZDogRGF0ZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZS1vdmVyZmxvdy1kYXlzJylcbiAgcHVibGljIGhpZGVPdmVyZmxvd0RheXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAQm9vbGVhbklucHV0KClcbiAgcHVibGljIGhpZGVGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgX21vZGU6IERhdGVQaWNrZXJTZWxlY3RNb2RlcyA9ICdzaW5nbGUnO1xuICBfcmFuZ2U6IGJvb2xlYW47XG4gIF93ZWVrUmFuZ2VTZWxlY3Q6IGJvb2xlYW47XG4gIF9udW1iZXJPZk1vbnRoczogbnVtYmVyW10gPSBbMF07XG5cbiAgQElucHV0KClcbiAgZ2V0IG51bWJlck9mTW9udGhzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mTW9udGhzLmxlbmd0aDtcbiAgfVxuICBzZXQgbnVtYmVyT2ZNb250aHModmFsdWUpIHtcbiAgICB0aGlzLl9udW1iZXJPZk1vbnRocyA9IEFycmF5LmZyb20oQXJyYXkoTnVtYmVyKHZhbHVlKSkua2V5cygpKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBtb2RlKCk6IERhdGVQaWNrZXJTZWxlY3RNb2RlcyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgc2V0IG1vZGUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fbW9kZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBbJ3JhbmdlJywgJ3dlZWsnXS5pbmNsdWRlcyh0aGlzLm1vZGUpIHx8IHRoaXMuX3JhbmdlO1xuICB9XG4gIHNldCByYW5nZSh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybihgJ3JhbmdlJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlICdtb2RlPVwicmFuZ2VcIicuYCk7XG4gICAgaWYgKHRoaXMuX3JhbmdlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fcmFuZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCB3ZWVrUmFuZ2VTZWxlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgPT09ICd3ZWVrJyB8fCB0aGlzLl93ZWVrUmFuZ2VTZWxlY3Q7XG4gIH1cbiAgc2V0IHdlZWtSYW5nZVNlbGVjdCh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybihgJ3dlZWtSYW5nZVNlbGVjdCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAnbW9kZT1cIndlZWtcIicuYCk7XG4gICAgaWYgKHRoaXMuX3dlZWtSYW5nZVNlbGVjdCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3dlZWtSYW5nZVNlbGVjdCA9IHZhbHVlO1xuICAgICAgdGhpcy5tb2RlID0gJ3dlZWsnO1xuICAgIH1cbiAgfVxuXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICAvLyBnZXQgaGJfd2lkdGgoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYCR7dGhpcy5udW1iZXJPZk1vbnRocyAqIDIyOH1weGApO1xuICAvLyB9XG5cbiAgbW9kZWw6IG1vZGVsVHlwZXM7XG4gIGFjdGl2ZURhdGU6IERhdGU7XG5cbiAgX3NlbGVjdGlvbjogRGF0ZVtdID0gW107XG4gIHByZXZpZXc6IERhdGVbXSA9IFtdO1xuICBzdGFydERhdGVMYWJlbDogc3RyaW5nO1xuICBlbmREYXRlTGFiZWw6IHN0cmluZztcblxuICByYW5nZVNlbGVjdE1vZGU6IHJhbmdlU2VsZWN0TW9kZXMgPSAnc3RhcnREYXRlJztcbiAgX29uQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGdldCBzZWxlY3Rpb24oKTogRGF0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uO1xuICB9XG4gIHNldCBzZWxlY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24gPSB2YWx1ZSA/IHZhbHVlLmZpbHRlcihpc0RhdGUpLm1hcCgoZCkgPT4gc3RhcnRPZkRheShkKSkgOiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIERldGVybWluZSB0aGUgeWVhciBhcnJheVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgLy8gU2V0IGxhYmVsc1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLm1vZGVsVG9TZWxlY3Rpb24odGhpcy5tb2RlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGlvbiAmJiB0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmlldyhkYXRlKSB7XG4gICAgY29uc3QgdmFsdWU6IGFueSA9IGRhdGUgPyBuZXcgRGF0ZShkYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkOiBEYXRlW10sIGZpcmVFdmVudHMgPSB0cnVlKSB7XG4gICAgLy8gSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0ZWQ7XG5cbiAgICB0aGlzLnN0YXJ0RGF0ZUxhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3Rpb25bMF0sIHtcbiAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVuZERhdGVMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0aW9uWzFdLCB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pO1xuXG4gICAgaWYgKGZpcmVFdmVudHMpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ211bHRpcGxlJzpcbiAgICAgICAgICB0aGlzLmZpcmVTZWxlY3QoKTtcbiAgICAgICAgICAvLyBBbHNvLCB1cGRhdGUgdGhlIG5nTW9kZWxcbiAgICAgICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5maWx0ZXIoQm9vbGVhbikubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVSYW5nZVNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IHtcbiAgICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnNlbGVjdGlvblswXSxcbiAgICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zZWxlY3Rpb25bMV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmZpcmVTZWxlY3QoKTtcbiAgICAgICAgICAvLyBBbHNvLCB1cGRhdGUgdGhlIG5nTW9kZWxcbiAgICAgICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnNlbGVjdGlvblswXSk7XG4gICAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2VsZWN0aW9uWzBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZXZlbnREYXRhKGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgbW9udGg6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KGRhdGUsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQoZGF0ZSwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICBkYXRlLFxuICAgIH07XG4gIH1cblxuICBmaXJlU2VsZWN0KCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgIHRoaXMub25TZWxlY3QubmV4dCh0aGlzLnNlbGVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25TZWxlY3QubmV4dCh0aGlzLmV2ZW50RGF0YSh0aGlzLnNlbGVjdGlvblswXSkpO1xuICAgIH1cbiAgfVxuXG4gIGZpcmVSYW5nZVNlbGVjdCgpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHN0YXJ0IGRhdGUgaXMgYmVmb3JlIHRoZSBlbmQgZGF0ZVxuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5maWx0ZXIoQm9vbGVhbikubGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5ldmVudERhdGEoc3RhcnQpLFxuICAgICAgICBlbmREYXRlOiB0aGlzLmV2ZW50RGF0YShlbmQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9kYXkoKSB7XG4gICAgY29uc3QgdG1wID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wKTtcbiAgfVxuXG4gIHRvZ2dsZVJhbmdlU2VsZWN0KHJhbmdlOiByYW5nZVNlbGVjdE1vZGVzKTogdm9pZCB7XG4gICAgdGhpcy5yYW5nZVNlbGVjdE1vZGUgPSByYW5nZTtcbiAgICBpZiAocmFuZ2UgPT09ICdzdGFydERhdGUnICYmIHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgaWYgKHJhbmdlID09PSAnZW5kRGF0ZScgJiYgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5zZWxlY3Rpb25bMV0pO1xuICAgIH1cbiAgfVxuXG4gIG1vZGVsVG9TZWxlY3Rpb24obW9kZWw6IG1vZGVsVHlwZXMpIHtcbiAgICAvLyB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuX3N0cmF0ZWd5LnNlbGVjdGlvbkZpbmlzaGVkKCk7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ211bHRpcGxlJzpcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBtb2RlbCBhcyBEYXRlW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tb2RlbCBhcyBSYW5nZU1vZGVsO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtyYW5nZS5zdGFydERhdGUsIHJhbmdlLmVuZERhdGVdLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzaW5nbGUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbbW9kZWwgYXMgRGF0ZV07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gIHdyaXRlVmFsdWUobW9kZWw6IG1vZGVsVHlwZXMpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm1vZGVsIGFzIERhdGVbXTtcbiAgICB9XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKG1vZGVsKSkge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KG1vZGVsKTtcbiAgICAgIHRoaXMubW9kZWxUb1NlbGVjdGlvbihtb2RlbCk7XG4gICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzU3RyaW5nKG1vZGVsKSkge1xuICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlKG1vZGVsIGFzIGFueSk7XG4gICAgICBpZiAoaXNWYWxpZChkYXRlKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoZGF0ZSk7XG4gICAgICAgIHRoaXMubW9kZWxUb1NlbGVjdGlvbihkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19