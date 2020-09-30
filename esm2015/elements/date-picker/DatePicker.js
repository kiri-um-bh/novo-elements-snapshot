/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ElementRef, Component, EventEmitter, forwardRef, Input, Output, ViewChild, TemplateRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
// Vendor
import * as dateFns from 'date-fns';
// APP
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const DATE_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoDatePickerElement)),
    multi: true,
};
/**
 * @record
 */
export function RangeModal() { }
if (false) {
    /** @type {?} */
    RangeModal.prototype.startDate;
    /** @type {?} */
    RangeModal.prototype.endDate;
    /** @type {?|undefined} */
    RangeModal.prototype.selectedDate;
}
/**
 * @record
 */
export function Day() { }
if (false) {
    /** @type {?} */
    Day.prototype.date;
    /** @type {?|undefined} */
    Day.prototype.isCurrentMonth;
    /** @type {?|undefined} */
    Day.prototype.isToday;
    /** @type {?|undefined} */
    Day.prototype.name;
    /** @type {?|undefined} */
    Day.prototype.number;
}
export class NovoDatePickerElement {
    /**
     * @param {?} labels
     * @param {?} element
     */
    constructor(labels, element) {
        this.labels = labels;
        this.element = element;
        this.weekStart = 0;
        // Select callback for output
        this.onSelect = new EventEmitter(false);
        // List of all the weekdays
        this.weekdays = [];
        // List of all months
        this.months = [];
        // List of all years (generated in ngOnInit)
        this.years = [];
        // Default view mode (select days)
        this.view = 'days';
        this.rangeSelectMode = 'startDate';
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Determine the year array
        /** @type {?} */
        let now = new Date();
        /** @type {?} */
        let start = this.minYear ? Number(this.minYear) : now.getFullYear() - 100;
        /** @type {?} */
        let end = this.maxYear ? Number(this.maxYear) : now.getFullYear() + 10;
        for (let i = start; i <= end; i++) {
            this.years.push(i);
        }
        // Set weekdays / months
        this.weekdays = this.setupWeekdays();
        this.months = this.labels.getMonths();
        // Set labels
        this.selectedLabel = this.labels.startDate;
        this.selected2Label = this.labels.endDate;
        this.updateView(this.model, false, true);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        let weekRangeSelectChange = changes['weekRangeSelect'];
        if (weekRangeSelectChange &&
            weekRangeSelectChange.currentValue !== weekRangeSelectChange.previousValue &&
            !weekRangeSelectChange.firstChange) {
            this.clearRange();
        }
        /** @type {?} */
        let weekStartChanges = changes['weekStart'];
        if (weekStartChanges && weekStartChanges.currentValue !== weekStartChanges.previousValue && !weekStartChanges.firstChange) {
            this.weekdays = this.setupWeekdays();
            this.updateView(this.model, false, false);
        }
    }
    /**
     * @return {?}
     */
    setupWeekdays() {
        /** @type {?} */
        let weekdays = this.labels.getWeekdays();
        // Weekstart must be 0-6 (Sunday - Saturday)
        if (!Helpers.isBlank(this.weekStart) && this.weekStart > 0 && this.weekStart <= 6) {
            /** @type {?} */
            let newStart = weekdays.splice(this.weekStart);
            weekdays = [...newStart, ...weekdays];
        }
        return weekdays;
    }
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @param {?} hoverDay
     * @param {?} rangeSelectMode
     * @param {?} weekRangeSelect
     * @return {?}
     */
    isSelectingRange(range, day, selected, selected2, hoverDay, rangeSelectMode, weekRangeSelect) {
        if (range && !weekRangeSelect) {
            /** @type {?} */
            let isRangeModeEndDate = rangeSelectMode === 'endDate' && selected && selected2 && dateFns.isAfter(day, selected2) && dateFns.isBefore(day, hoverDay);
            /** @type {?} */
            let isRangeModeStartDate = rangeSelectMode === 'startDate' && selected && selected2 && dateFns.isBefore(day, selected) && dateFns.isAfter(day, hoverDay);
            /** @type {?} */
            let isNotSelected = !selected && selected2 && dateFns.isBefore(day, selected2) && dateFns.isAfter(day, hoverDay);
            /** @type {?} */
            let isNotSelected2 = selected && !selected2 && dateFns.isAfter(day, selected) && dateFns.isBefore(day, hoverDay);
            return isNotSelected2 || isNotSelected || isRangeModeStartDate || isRangeModeEndDate;
        }
        return false;
    }
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    isEndFill(range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return !dateFns.isSameDay(selected, selected2) && dateFns.isSameDay(day, selected2) && dateFns.isAfter(day, selected);
        }
        return false;
    }
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    isStartFill(range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return !dateFns.isSameDay(selected, selected2) && dateFns.isSameDay(day, selected) && dateFns.isBefore(day, selected2);
        }
        return false;
    }
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    isFiller(range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return ((dateFns.isAfter(day, selected) && dateFns.isBefore(day, selected2)) ||
                dateFns.isSameDay(day, selected) ||
                dateFns.isSameDay(day, selected2));
        }
        return false;
    }
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    isSelected(range, day, selected, selected2) {
        if (range) {
            return (day &&
                ((selected &&
                    day.getDate() === selected.getDate() && day.getMonth() === selected.getMonth() && day.getFullYear() === selected.getFullYear()) ||
                    (selected2 &&
                        day.getDate() === selected2.getDate() &&
                        day.getMonth() === selected2.getMonth() &&
                        day.getFullYear() === selected2.getFullYear())));
        }
        return day.getDate() === selected.getDate() && day.getMonth() === selected.getMonth() && day.getFullYear() === selected.getFullYear();
    }
    /**
     * @param {?} day
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    isDisabled(day, start, end) {
        return dateFns.isBefore(day, start) || dateFns.isAfter(day, end);
    }
    /**
     * @param {?} date
     * @param {?} fireEvents
     * @param {?} markedSelected
     * @return {?}
     */
    updateView(date, fireEvents, markedSelected) {
        if (date && date.startDate === null) {
            this.clearRange();
        }
        else {
            if (!date) {
                this.clearRange();
            }
            /** @type {?} */
            let value;
            if (date && date.selectedDate) {
                value = new Date(date.selectedDate);
            }
            else {
                value = date ? new Date(date) : new Date();
            }
            value = this.removeTime(value);
            this.month = new Date(value);
            this.monthLabel = this.labels.formatDateWithFormat(this.month, { month: 'short' });
            /** @type {?} */
            let start = new Date(value.getTime());
            start.setDate(1);
            this.removeTime(start.setDate(1));
            this.buildMonth(start, this.month);
            if (markedSelected) {
                this.select(null, { date: value }, fireEvents);
            }
        }
    }
    /**
     * @return {?}
     */
    setToday() {
        /** @type {?} */
        let tmp = new Date();
        this.updateView(tmp, true, true);
        // Go back to days
        this.open(null, 'days');
    }
    /**
     * @return {?}
     */
    clearRange() {
        this.selected = null;
        this.selectedLabel = this.labels.startDate;
        this.selected2 = null;
        this.selected2Label = this.labels.endDate;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        /** @type {?} */
        let date = this.month ? this.month : new Date();
        /** @type {?} */
        let tmp = dateFns.setMonth(date, month);
        this.updateView(tmp, true, false);
        // Go back to days
        this.open(null, 'days');
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        /** @type {?} */
        let date = this.month ? this.month : new Date();
        /** @type {?} */
        let tmp = dateFns.setYear(date, year);
        this.updateView(tmp, true, false);
        // Go back to days
        this.open(null, 'days');
    }
    /**
     * @param {?} event
     * @param {?} day
     * @param {?} fireEvents
     * @return {?}
     */
    select(event, day, fireEvents) {
        Helpers.swallowEvent(event);
        if (this.range) {
            if (this.weekRangeSelect) {
                this.selected = dateFns.startOfWeek(day.date, { weekStartsOn: this.weekStart });
                this.selected2 = dateFns.endOfWeek(day.date, { weekStartsOn: this.weekStart });
                this.selectedLabel = this.labels.formatDateWithFormat(this.selected, {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                });
                this.selected2Label = this.labels.formatDateWithFormat(this.selected2, {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                });
                // Make sure to fire this, since we default to the current week selected!
                if (!fireEvents && this.weekRangeSelect) {
                    this.fireRangeSelect();
                }
            }
            else if (this.rangeSelectMode === 'startDate') {
                // SET START DATE
                this.selected = dateFns.startOfDay(day.date);
                this.selectedLabel = this.labels.formatDateWithFormat(this.selected, {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                });
                if (this.selected2 && dateFns.isAfter(day.date, this.selected2)) {
                    // CLEAR END DATE
                    this.selected2 = null;
                    this.selected2Label = this.labels.endDate;
                }
                if (event) {
                    this.rangeSelectMode = 'endDate';
                }
            }
            else if (this.rangeSelectMode === 'endDate') {
                // SET END DATE
                this.selected2 = dateFns.endOfDay(day.date);
                this.selected2Label = this.labels.formatDateWithFormat(this.selected2, {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                });
                if (this.selected && dateFns.isBefore(day.date, this.selected)) {
                    // CLEAR START DATE
                    this.selected = null;
                    this.selectedLabel = this.labels.startDate;
                }
                if (event) {
                    this.rangeSelectMode = 'startDate';
                }
            }
        }
        else {
            this.selected = day.date;
            this.selectedLabel = this.labels.formatDateWithFormat(this.selected, {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            });
            this.updateHeading();
        }
        if (fireEvents && this.selected) {
            // Emit our output
            if (this.range && this.selected && this.selected2) {
                this.fireRangeSelect();
                // Also, update the ngModel
                this._onChange({
                    startDate: this.selected,
                    endDate: this.selected2 ? this.selected2 : null,
                    selectedDate: day.date,
                });
                this.model = {
                    startDate: this.selected,
                    endDate: this.selected2 ? this.selected2 : null,
                    selectedDate: day.date,
                };
            }
            if (!this.range) {
                this.onSelect.next({
                    month: this.labels.formatDateWithFormat(this.selected, { month: 'long' }),
                    year: this.selected.getFullYear(),
                    day: this.labels.formatDateWithFormat(this.selected, { weekday: 'long' }),
                    date: this.selected,
                });
                // Also, update the ngModel
                this._onChange(this.selected);
                this.model = this.selected;
            }
        }
    }
    /**
     * @return {?}
     */
    fireRangeSelect() {
        // Make sure the start date is before the end date
        if (dateFns.isBefore(this.selected, this.selected2)) {
            this.onSelect.next({
                startDate: {
                    month: this.labels.formatDateWithFormat(this.selected, { month: 'long' }),
                    year: this.selected.getFullYear(),
                    day: this.labels.formatDateWithFormat(this.selected, { weekday: 'long' }),
                    date: this.selected,
                },
                endDate: {
                    month: this.labels.formatDateWithFormat(this.selected2, { month: 'long' }),
                    year: this.selected2.getFullYear(),
                    day: this.labels.formatDateWithFormat(this.selected2, { weekday: 'long' }),
                    date: this.selected2,
                },
            });
        }
    }
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    open(event, type) {
        Helpers.swallowEvent(event);
        // If they click the toggle two time in a row, close it (go back to days)
        if (type === this.view) {
            this.view = 'days';
        }
        else {
            this.view = type;
        }
        // Make sure to scroll the selected one into view
        if (this.view === 'years' || this.view === 'months') {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let container = this.element.nativeElement.querySelector(`.calendar-content.${this.view}`);
                /** @type {?} */
                let selectedItem = this.element.nativeElement.querySelector(`.calendar-content.${this.view} .${this.view === 'years' ? 'year' : 'month'}.selected`);
                if (container && selectedItem) {
                    container.scrollTop = selectedItem.offsetTop - 100;
                }
            }));
        }
        this.updateHeading();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    prevMonth(event) {
        Helpers.swallowEvent(event);
        /** @type {?} */
        let tmp = dateFns.subMonths(this.month, 1);
        this.updateView(tmp, false, false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nextMonth(event) {
        Helpers.swallowEvent(event);
        /** @type {?} */
        let tmp = dateFns.addMonths(this.month, 1);
        this.updateView(tmp, false, false);
    }
    /**
     * @return {?}
     */
    updateHeading() {
        if (!this.selected) {
            return;
        }
        this.heading = {
            month: this.labels.formatDateWithFormat(this.selected, { month: 'long' }),
            year: this.selected.getFullYear(),
            day: this.labels.formatDateWithFormat(this.selected, { weekday: 'long' }),
            date: this.selected.getDate(),
        };
    }
    /**
     * Remove the time aspect of the date
     * @param {?} date
     * @return {?} with time stripped out
     */
    removeTime(date) {
        /** @type {?} */
        let ret = new Date(date);
        ret.setHours(12);
        ret.setSeconds(0);
        ret.setMilliseconds(0);
        return ret;
    }
    /**
     * @param {?} start
     * @param {?} month
     * @return {?}
     */
    buildMonth(start, month) {
        // Reset the weeks
        this.weeks = [];
        // House keeping variables to know when we are done building the month
        /** @type {?} */
        let done = false;
        /** @type {?} */
        let date = dateFns.startOfWeek(start, { weekStartsOn: this.weekStart });
        /** @type {?} */
        let monthIndex = date.getMonth();
        /** @type {?} */
        let count = 0;
        while (!done) {
            // Build the days for the weeks
            this.weeks.push({ days: this.buildWeek(new Date(date.getTime()), month) });
            // Increment variables for the next iteration
            date = dateFns.addDays(date, 7);
            done = count++ > 2 && monthIndex !== date.getMonth();
            monthIndex = date.getMonth();
        }
    }
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    buildWeek(date, month) {
        // Build out of the days of the week
        /** @type {?} */
        let days = [];
        // Iterate over the days of the week
        for (let i = 0; i < 7; i++) {
            // Push a variable on the day array with lots of helpers to make the template easier
            days.push({
                name: this.weekdays[i],
                number: date.getDate(),
                isToday: dateFns.isToday(date),
                date: date,
            });
            // Increment for the next iteration
            date = dateFns.addDays(date, 1);
        }
        return days;
    }
    /**
     * @param {?} range
     * @return {?}
     */
    toggleRangeSelect(range) {
        this.rangeSelectMode = range;
    }
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    rangeHover(event, day) {
        this.hoverDay = day.date;
    }
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        if (Helpers.isDate(model)) {
            this.updateView(model, false, true);
        }
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
}
NovoDatePickerElement.decorators = [
    { type: Component, args: [{
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
    <div class="calendar">
      <div class="calendar-top" *ngIf="!inline && !range">
        <h4 class="day" [attr.data-automation-id]="heading?.day">{{ heading?.day }}</h4>
        <h2 class="month" [attr.data-automation-id]="heading?.month">{{ heading?.month }}</h2>
        <h1 class="date" [attr.data-automation-id]="heading?.date">{{ heading?.date }}</h1>
        <h3 class="year" [attr.data-automation-id]="heading?.year">{{ heading?.year }}</h3>
      </div>
      <div class="date-range-tabs" *ngIf="range" [class.week-select-mode]="weekRangeSelect">
        <span
          class="range-tab"
          (click)="toggleRangeSelect('startDate')"
          [@startDateTextState]="rangeSelectMode"
          data-automation-id="calendar-start-date"
          >{{ selectedLabel }}</span
        >
        <span
          class="range-tab"
          (click)="toggleRangeSelect('endDate')"
          [@endDateTextState]="rangeSelectMode"
          data-automation-id="calendar-end-date"
          >{{ selected2Label }}</span
        >
        <i class="indicator" [@indicatorState]="rangeSelectMode"></i>
      </div>
      <div class="calendar-header">
        <span class="previous" (click)="prevMonth($event)" data-automation-id="calendar-previous"></span>
        <span class="heading">
          <span class="month" (click)="open($event, 'months')" data-automation-id="header-month">{{ monthLabel }}</span>
          <span class="year" (click)="open($event, 'years')" data-automation-id="header-year">{{ month?.getFullYear() }}</span>
        </span>
        <span class="next" (click)="nextMonth($event)" data-automation-id="calendar-next"></span>
      </div>
      <table class="calendar-content days" cellspacing="0" cellpadding="0" [hidden]="!(view == 'days')">
        <thead>
          <tr>
            <th *ngFor="let day of weekdays" title="{{ day }}" class="weekday" [attr.data-automation-id]="day.substr(0, 2)">
              {{ day.substr(0, 2) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let week of weeks">
            <td
              *ngFor="let day of week.days"
              [ngClass]="{
                today: day.isToday,
                notinmonth: day.date.getMonth() !== this.month.getMonth(),
                selected: isSelected(range, day.date, selected, selected2),
                filler: isFiller(range, day.date, selected, selected2),
                startfill: isStartFill(range, day.date, selected, selected2),
                endfill: isEndFill(range, day.date, selected, selected2),
                'selecting-range': isSelectingRange(range, day.date, selected, selected2, hoverDay, rangeSelectMode, weekRangeSelect)
              }"
              (mouseover)="rangeHover($event, day)"
              [attr.data-automation-id]="day.number"
            >
              <button
                class="day"
                [attr.data-automation-id]="day.number"
                [disabled]="isDisabled(day.date, start, end)"
                (click)="select($event, day, true)"
              >
                {{ day.number }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <section class="calendar-content months" [hidden]="view !== 'months'">
        <div *ngFor="let month of months; let i = index" (click)="setMonth(i)">
          <div class="month" [ngClass]="{ selected: i === selected?.getMonth() }" [attr.data-automation-id]="month">{{ month }}</div>
        </div>
      </section>
      <section class="calendar-content years" [hidden]="view !== 'years'">
        <div *ngFor="let year of years" (click)="setYear(year)">
          <div class="year" [ngClass]="{ selected: year == selected?.getFullYear() }" [attr.data-automation-id]="year">{{ year }}</div>
        </div>
      </section>
      <div class="calendar-footer">
        <span (click)="setToday()" class="today" data-automation-id="calendar-today">{{ labels.today }}</span>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NovoDatePickerElement.ctorParameters = () => [
    { type: NovoLabelService },
    { type: ElementRef }
];
NovoDatePickerElement.propDecorators = {
    minYear: [{ type: Input }],
    maxYear: [{ type: Input }],
    start: [{ type: Input }],
    end: [{ type: Input }],
    inline: [{ type: Input }],
    range: [{ type: Input }],
    weekRangeSelect: [{ type: Input }],
    weekStart: [{ type: Input }],
    onSelect: [{ type: Output }],
    template: [{ type: ViewChild, args: [TemplateRef,] }]
};
if (false) {
    /** @type {?} */
    NovoDatePickerElement.prototype.minYear;
    /** @type {?} */
    NovoDatePickerElement.prototype.maxYear;
    /** @type {?} */
    NovoDatePickerElement.prototype.start;
    /** @type {?} */
    NovoDatePickerElement.prototype.end;
    /** @type {?} */
    NovoDatePickerElement.prototype.inline;
    /** @type {?} */
    NovoDatePickerElement.prototype.range;
    /** @type {?} */
    NovoDatePickerElement.prototype.weekRangeSelect;
    /** @type {?} */
    NovoDatePickerElement.prototype.weekStart;
    /** @type {?} */
    NovoDatePickerElement.prototype.onSelect;
    /** @type {?} */
    NovoDatePickerElement.prototype.template;
    /** @type {?} */
    NovoDatePickerElement.prototype.weekdays;
    /** @type {?} */
    NovoDatePickerElement.prototype.months;
    /** @type {?} */
    NovoDatePickerElement.prototype.years;
    /** @type {?} */
    NovoDatePickerElement.prototype.view;
    /** @type {?} */
    NovoDatePickerElement.prototype.heading;
    /** @type {?} */
    NovoDatePickerElement.prototype.model;
    /** @type {?} */
    NovoDatePickerElement.prototype.month;
    /** @type {?} */
    NovoDatePickerElement.prototype.monthLabel;
    /** @type {?} */
    NovoDatePickerElement.prototype.weeks;
    /** @type {?} */
    NovoDatePickerElement.prototype.selected;
    /** @type {?} */
    NovoDatePickerElement.prototype.selectedLabel;
    /** @type {?} */
    NovoDatePickerElement.prototype.selected2;
    /** @type {?} */
    NovoDatePickerElement.prototype.selected2Label;
    /** @type {?} */
    NovoDatePickerElement.prototype.hoverDay;
    /** @type {?} */
    NovoDatePickerElement.prototype.rangeSelectMode;
    /** @type {?} */
    NovoDatePickerElement.prototype._onChange;
    /** @type {?} */
    NovoDatePickerElement.prototype._onTouched;
    /** @type {?} */
    NovoDatePickerElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDatePickerElement.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxXQUFXLEdBSVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7OztNQUcvRCwwQkFBMEIsR0FBRztJQUNqQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7O0FBRUQsZ0NBSUM7OztJQUhDLCtCQUFnQjs7SUFDaEIsNkJBQWM7O0lBQ2Qsa0NBQW9COzs7OztBQUl0Qix5QkFNQzs7O0lBTEMsbUJBQVc7O0lBQ1gsNkJBQXlCOztJQUN6QixzQkFBa0I7O0lBQ2xCLG1CQUFjOztJQUNkLHFCQUF5Qjs7QUE0STNCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBK0NoQyxZQUFtQixNQUF3QixFQUFVLE9BQW1CO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQS9CeEUsY0FBUyxHQUFX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SixTQUFTLEVBQUUsa0JBQWtCO3lCQUM5QixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDOUQsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUZUO2FBQ0Y7Ozs7WUFoS1EsZ0JBQWdCO1lBbkJ2QixVQUFVOzs7c0JBcUxULEtBQUs7c0JBRUwsS0FBSztvQkFFTCxLQUFLO2tCQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLOzhCQUVMLEtBQUs7d0JBRUwsS0FBSzt1QkFHTCxNQUFNO3VCQUVOLFNBQVMsU0FBQyxXQUFXOzs7O0lBbkJ0Qix3Q0FDeUI7O0lBQ3pCLHdDQUN5Qjs7SUFDekIsc0NBQ1k7O0lBQ1osb0NBQ1U7O0lBQ1YsdUNBQ2dCOztJQUNoQixzQ0FDZTs7SUFDZixnREFDeUI7O0lBQ3pCLDBDQUNzQjs7SUFFdEIseUNBQ3NEOztJQUN0RCx5Q0FDMkI7O0lBRzNCLHlDQUF3Qjs7SUFFeEIsdUNBQXNCOztJQUV0QixzQ0FBdUI7O0lBRXZCLHFDQUFzQjs7SUFDdEIsd0NBQWE7O0lBRWIsc0NBQWtCOztJQUNsQixzQ0FBWTs7SUFDWiwyQ0FBbUI7O0lBQ25CLHNDQUFXOztJQUNYLHlDQUFlOztJQUNmLDhDQUFzQjs7SUFDdEIsMENBQWdCOztJQUNoQiwrQ0FBdUI7O0lBQ3ZCLHlDQUFjOztJQUVkLGdEQUFnRDs7SUFDaEQsMENBQStCOztJQUMvQiwyQ0FBZ0M7O0lBRXBCLHVDQUErQjs7Ozs7SUFBRSx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgREFURV9QSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVBpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VNb2RhbCB7XG4gIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgZW5kRGF0ZTogRGF0ZTtcbiAgc2VsZWN0ZWREYXRlPzogRGF0ZTtcbn1cbmV4cG9ydCB0eXBlIG1vZGVsVHlwZXMgPSBEYXRlIHwgUmFuZ2VNb2RhbDtcblxuZXhwb3J0IGludGVyZmFjZSBEYXkge1xuICBkYXRlOiBEYXRlO1xuICBpc0N1cnJlbnRNb250aD86IGJvb2xlYW47XG4gIGlzVG9kYXk/OiBib29sZWFuO1xuICBuYW1lPzogc3RyaW5nO1xuICBudW1iZXI/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIHJhbmdlU2VsZWN0TW9kZXMgPSAnc3RhcnREYXRlJyB8ICdlbmREYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0RBVEVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0YXJ0RGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignZW5kRGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW5kaWNhdG9yU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignc3RhcnREYXRlIDw9PiBlbmREYXRlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci10b3BcIiAqbmdJZj1cIiFpbmxpbmUgJiYgIXJhbmdlXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImRheVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nPy5kYXlcIj57eyBoZWFkaW5nPy5kYXkgfX08L2g0PlxuICAgICAgICA8aDIgY2xhc3M9XCJtb250aFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nPy5tb250aFwiPnt7IGhlYWRpbmc/Lm1vbnRoIH19PC9oMj5cbiAgICAgICAgPGgxIGNsYXNzPVwiZGF0ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nPy5kYXRlXCI+e3sgaGVhZGluZz8uZGF0ZSB9fTwvaDE+XG4gICAgICAgIDxoMyBjbGFzcz1cInllYXJcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8ueWVhclwiPnt7IGhlYWRpbmc/LnllYXIgfX08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1yYW5nZS10YWJzXCIgKm5nSWY9XCJyYW5nZVwiIFtjbGFzcy53ZWVrLXNlbGVjdC1tb2RlXT1cIndlZWtSYW5nZVNlbGVjdFwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwicmFuZ2UtdGFiXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlUmFuZ2VTZWxlY3QoJ3N0YXJ0RGF0ZScpXCJcbiAgICAgICAgICBbQHN0YXJ0RGF0ZVRleHRTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgID57eyBzZWxlY3RlZExhYmVsIH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cInJhbmdlLXRhYlwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVJhbmdlU2VsZWN0KCdlbmREYXRlJylcIlxuICAgICAgICAgIFtAZW5kRGF0ZVRleHRTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLWVuZC1kYXRlXCJcbiAgICAgICAgICA+e3sgc2VsZWN0ZWQyTGFiZWwgfX08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8aSBjbGFzcz1cImluZGljYXRvclwiIFtAaW5kaWNhdG9yU3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlvdXNcIiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1wcmV2aW91c1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb250aFwiIChjbGljayk9XCJvcGVuKCRldmVudCwgJ21vbnRocycpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaGVhZGVyLW1vbnRoXCI+e3sgbW9udGhMYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInllYXJcIiAoY2xpY2spPVwib3BlbigkZXZlbnQsICd5ZWFycycpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaGVhZGVyLXllYXJcIj57eyBtb250aD8uZ2V0RnVsbFllYXIoKSB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5leHRcIiAoY2xpY2spPVwibmV4dE1vbnRoKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1uZXh0XCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IGRheXNcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBbaGlkZGVuXT1cIiEodmlldyA9PSAnZGF5cycpXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrZGF5c1wiIHRpdGxlPVwie3sgZGF5IH19XCIgY2xhc3M9XCJ3ZWVrZGF5XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5zdWJzdHIoMCwgMilcIj5cbiAgICAgICAgICAgICAge3sgZGF5LnN1YnN0cigwLCAyKSB9fVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCI+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgdG9kYXk6IGRheS5pc1RvZGF5LFxuICAgICAgICAgICAgICAgIG5vdGlubW9udGg6IGRheS5kYXRlLmdldE1vbnRoKCkgIT09IHRoaXMubW9udGguZ2V0TW9udGgoKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgIGZpbGxlcjogaXNGaWxsZXIocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSxcbiAgICAgICAgICAgICAgICBzdGFydGZpbGw6IGlzU3RhcnRGaWxsKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgZW5kZmlsbDogaXNFbmRGaWxsKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgJ3NlbGVjdGluZy1yYW5nZSc6IGlzU2VsZWN0aW5nUmFuZ2UocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyLCBob3ZlckRheSwgcmFuZ2VTZWxlY3RNb2RlLCB3ZWVrUmFuZ2VTZWxlY3QpXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAobW91c2VvdmVyKT1cInJhbmdlSG92ZXIoJGV2ZW50LCBkYXkpXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5udW1iZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkYXlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkubnVtYmVyXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChkYXkuZGF0ZSwgc3RhcnQsIGVuZClcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBkYXksIHRydWUpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGRheS5udW1iZXIgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IG1vbnRoc1wiIFtoaWRkZW5dPVwidmlldyAhPT0gJ21vbnRocydcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhzOyBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNldE1vbnRoKGkpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoXCIgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogaSA9PT0gc2VsZWN0ZWQ/LmdldE1vbnRoKCkgfVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJtb250aFwiPnt7IG1vbnRoIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IHllYXJzXCIgW2hpZGRlbl09XCJ2aWV3ICE9PSAneWVhcnMnXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNcIiAoY2xpY2spPVwic2V0WWVhcih5ZWFyKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCIgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogeWVhciA9PSBzZWxlY3RlZD8uZ2V0RnVsbFllYXIoKSB9XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInllYXJcIj57eyB5ZWFyIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWZvb3RlclwiPlxuICAgICAgICA8c3BhbiAoY2xpY2spPVwic2V0VG9kYXkoKVwiIGNsYXNzPVwidG9kYXlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci10b2RheVwiPnt7IGxhYmVscy50b2RheSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3RhcnQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGVuZDogRGF0ZTtcbiAgQElucHV0KClcbiAgaW5saW5lOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByYW5nZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd2Vla1JhbmdlU2VsZWN0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICB3ZWVrU3RhcnQ6IG51bWJlciA9IDA7XG4gIC8vIFNlbGVjdCBjYWxsYmFjayBmb3Igb3V0cHV0XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZilcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gTGlzdCBvZiBhbGwgdGhlIHdlZWtkYXlzXG4gIHdlZWtkYXlzOiBzdHJpbmdbXSA9IFtdO1xuICAvLyBMaXN0IG9mIGFsbCBtb250aHNcbiAgbW9udGhzOiBzdHJpbmdbXSA9IFtdO1xuICAvLyBMaXN0IG9mIGFsbCB5ZWFycyAoZ2VuZXJhdGVkIGluIG5nT25Jbml0KVxuICB5ZWFyczogQXJyYXk8YW55PiA9IFtdO1xuICAvLyBEZWZhdWx0IHZpZXcgbW9kZSAoc2VsZWN0IGRheXMpXG4gIHZpZXc6IHN0cmluZyA9ICdkYXlzJztcbiAgaGVhZGluZzogYW55O1xuXG4gIG1vZGVsOiBtb2RlbFR5cGVzO1xuICBtb250aDogRGF0ZTtcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuICB3ZWVrczogYW55O1xuICBzZWxlY3RlZDogRGF0ZTtcbiAgc2VsZWN0ZWRMYWJlbDogc3RyaW5nO1xuICBzZWxlY3RlZDI6IERhdGU7XG4gIHNlbGVjdGVkMkxhYmVsOiBzdHJpbmc7XG4gIGhvdmVyRGF5OiBhbnk7XG5cbiAgcmFuZ2VTZWxlY3RNb2RlOiByYW5nZVNlbGVjdE1vZGVzID0gJ3N0YXJ0RGF0ZSc7XG4gIF9vbkNoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gRGV0ZXJtaW5lIHRoZSB5ZWFyIGFycmF5XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5taW5ZZWFyID8gTnVtYmVyKHRoaXMubWluWWVhcikgOiBub3cuZ2V0RnVsbFllYXIoKSAtIDEwMDtcbiAgICBsZXQgZW5kID0gdGhpcy5tYXhZZWFyID8gTnVtYmVyKHRoaXMubWF4WWVhcikgOiBub3cuZ2V0RnVsbFllYXIoKSArIDEwO1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLnllYXJzLnB1c2goaSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdlZWtkYXlzIC8gbW9udGhzXG4gICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuc2V0dXBXZWVrZGF5cygpO1xuICAgIHRoaXMubW9udGhzID0gdGhpcy5sYWJlbHMuZ2V0TW9udGhzKCk7XG5cbiAgICAvLyBTZXQgbGFiZWxzXG4gICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuc3RhcnREYXRlO1xuICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5lbmREYXRlO1xuICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLm1vZGVsLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgbGV0IHdlZWtSYW5nZVNlbGVjdENoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snd2Vla1JhbmdlU2VsZWN0J107XG4gICAgaWYgKFxuICAgICAgd2Vla1JhbmdlU2VsZWN0Q2hhbmdlICYmXG4gICAgICB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UuY3VycmVudFZhbHVlICE9PSB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UucHJldmlvdXNWYWx1ZSAmJlxuICAgICAgIXdlZWtSYW5nZVNlbGVjdENoYW5nZS5maXJzdENoYW5nZVxuICAgICkge1xuICAgICAgdGhpcy5jbGVhclJhbmdlKCk7XG4gICAgfVxuICAgIGxldCB3ZWVrU3RhcnRDaGFuZ2VzOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWyd3ZWVrU3RhcnQnXTtcbiAgICBpZiAod2Vla1N0YXJ0Q2hhbmdlcyAmJiB3ZWVrU3RhcnRDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAhPT0gd2Vla1N0YXJ0Q2hhbmdlcy5wcmV2aW91c1ZhbHVlICYmICF3ZWVrU3RhcnRDaGFuZ2VzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLndlZWtkYXlzID0gdGhpcy5zZXR1cFdlZWtkYXlzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5tb2RlbCwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBzZXR1cFdlZWtkYXlzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgd2Vla2RheXMgPSB0aGlzLmxhYmVscy5nZXRXZWVrZGF5cygpO1xuICAgIC8vIFdlZWtzdGFydCBtdXN0IGJlIDAtNiAoU3VuZGF5IC0gU2F0dXJkYXkpXG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodGhpcy53ZWVrU3RhcnQpICYmIHRoaXMud2Vla1N0YXJ0ID4gMCAmJiB0aGlzLndlZWtTdGFydCA8PSA2KSB7XG4gICAgICBsZXQgbmV3U3RhcnQgPSB3ZWVrZGF5cy5zcGxpY2UodGhpcy53ZWVrU3RhcnQpO1xuICAgICAgd2Vla2RheXMgPSBbLi4ubmV3U3RhcnQsIC4uLndlZWtkYXlzXTtcbiAgICB9XG4gICAgcmV0dXJuIHdlZWtkYXlzO1xuICB9XG5cbiAgaXNTZWxlY3RpbmdSYW5nZShyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyLCBob3ZlckRheSwgcmFuZ2VTZWxlY3RNb2RlLCB3ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICBpZiAocmFuZ2UgJiYgIXdlZWtSYW5nZVNlbGVjdCkge1xuICAgICAgbGV0IGlzUmFuZ2VNb2RlRW5kRGF0ZSA9XG4gICAgICAgIHJhbmdlU2VsZWN0TW9kZSA9PT0gJ2VuZERhdGUnICYmIHNlbGVjdGVkICYmIHNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBob3ZlckRheSk7XG4gICAgICBsZXQgaXNSYW5nZU1vZGVTdGFydERhdGUgPVxuICAgICAgICByYW5nZVNlbGVjdE1vZGUgPT09ICdzdGFydERhdGUnICYmIHNlbGVjdGVkICYmIHNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIGhvdmVyRGF5KTtcbiAgICAgIGxldCBpc05vdFNlbGVjdGVkID0gIXNlbGVjdGVkICYmIHNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBob3ZlckRheSk7XG4gICAgICBsZXQgaXNOb3RTZWxlY3RlZDIgPSBzZWxlY3RlZCAmJiAhc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgaG92ZXJEYXkpO1xuICAgICAgcmV0dXJuIGlzTm90U2VsZWN0ZWQyIHx8IGlzTm90U2VsZWN0ZWQgfHwgaXNSYW5nZU1vZGVTdGFydERhdGUgfHwgaXNSYW5nZU1vZGVFbmREYXRlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0VuZEZpbGwocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMikge1xuICAgIGlmIChyYW5nZSAmJiBzZWxlY3RlZDIgJiYgc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiAhZGF0ZUZucy5pc1NhbWVEYXkoc2VsZWN0ZWQsIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc1NhbWVEYXkoZGF5LCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIHNlbGVjdGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTdGFydEZpbGwocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMikge1xuICAgIGlmIChyYW5nZSAmJiBzZWxlY3RlZDIgJiYgc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiAhZGF0ZUZucy5pc1NhbWVEYXkoc2VsZWN0ZWQsIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc1NhbWVEYXkoZGF5LCBzZWxlY3RlZCkgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkMik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRmlsbGVyKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIpIHtcbiAgICBpZiAocmFuZ2UgJiYgc2VsZWN0ZWQyICYmIHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzZWxlY3RlZDIpKSB8fFxuICAgICAgICBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkKSB8fFxuICAgICAgICBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkMilcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMikge1xuICAgIGlmIChyYW5nZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZGF5ICYmXG4gICAgICAgICgoc2VsZWN0ZWQgJiZcbiAgICAgICAgICBkYXkuZ2V0RGF0ZSgpID09PSBzZWxlY3RlZC5nZXREYXRlKCkgJiYgZGF5LmdldE1vbnRoKCkgPT09IHNlbGVjdGVkLmdldE1vbnRoKCkgJiYgZGF5LmdldEZ1bGxZZWFyKCkgPT09IHNlbGVjdGVkLmdldEZ1bGxZZWFyKCkpIHx8XG4gICAgICAgICAgKHNlbGVjdGVkMiAmJlxuICAgICAgICAgICAgZGF5LmdldERhdGUoKSA9PT0gc2VsZWN0ZWQyLmdldERhdGUoKSAmJlxuICAgICAgICAgICAgICBkYXkuZ2V0TW9udGgoKSA9PT0gc2VsZWN0ZWQyLmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgZGF5LmdldEZ1bGxZZWFyKCkgPT09IHNlbGVjdGVkMi5nZXRGdWxsWWVhcigpKSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkYXkuZ2V0RGF0ZSgpID09PSBzZWxlY3RlZC5nZXREYXRlKCkgJiYgZGF5LmdldE1vbnRoKCkgPT09IHNlbGVjdGVkLmdldE1vbnRoKCkgJiYgZGF5LmdldEZ1bGxZZWFyKCkgPT09IHNlbGVjdGVkLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBpc0Rpc2FibGVkKGRheSwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc3RhcnQpIHx8IGRhdGVGbnMuaXNBZnRlcihkYXksIGVuZCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KGRhdGUsIGZpcmVFdmVudHM6IGJvb2xlYW4sIG1hcmtlZFNlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGRhdGUgJiYgZGF0ZS5zdGFydERhdGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2xlYXJSYW5nZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgdGhpcy5jbGVhclJhbmdlKCk7XG4gICAgICB9XG4gICAgICBsZXQgdmFsdWU6IGFueTtcbiAgICAgIGlmIChkYXRlICYmIGRhdGUuc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgIHZhbHVlID0gbmV3IERhdGUoZGF0ZS5zZWxlY3RlZERhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkYXRlID8gbmV3IERhdGUoZGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB0aGlzLnJlbW92ZVRpbWUodmFsdWUpO1xuICAgICAgdGhpcy5tb250aCA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIHRoaXMubW9udGhMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMubW9udGgsIHsgbW9udGg6ICdzaG9ydCcgfSk7XG5cbiAgICAgIGxldCBzdGFydCA9IG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSk7XG4gICAgICBzdGFydC5zZXREYXRlKDEpO1xuICAgICAgdGhpcy5yZW1vdmVUaW1lKHN0YXJ0LnNldERhdGUoMSkpO1xuXG4gICAgICB0aGlzLmJ1aWxkTW9udGgoc3RhcnQsIHRoaXMubW9udGgpO1xuXG4gICAgICBpZiAobWFya2VkU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QobnVsbCwgeyBkYXRlOiB2YWx1ZSB9LCBmaXJlRXZlbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUb2RheSgpIHtcbiAgICBsZXQgdG1wID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCB0cnVlKTtcbiAgICAvLyBHbyBiYWNrIHRvIGRheXNcbiAgICB0aGlzLm9wZW4obnVsbCwgJ2RheXMnKTtcbiAgfVxuXG4gIGNsZWFyUmFuZ2UoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuc3RhcnREYXRlO1xuICAgIHRoaXMuc2VsZWN0ZWQyID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgfVxuXG4gIHNldE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgZGF0ZSA9IHRoaXMubW9udGggPyB0aGlzLm1vbnRoIDogbmV3IERhdGUoKTtcbiAgICBsZXQgdG1wID0gZGF0ZUZucy5zZXRNb250aChkYXRlLCBtb250aCk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgdHJ1ZSwgZmFsc2UpO1xuICAgIC8vIEdvIGJhY2sgdG8gZGF5c1xuICAgIHRoaXMub3BlbihudWxsLCAnZGF5cycpO1xuICB9XG5cbiAgc2V0WWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgZGF0ZSA9IHRoaXMubW9udGggPyB0aGlzLm1vbnRoIDogbmV3IERhdGUoKTtcbiAgICBsZXQgdG1wID0gZGF0ZUZucy5zZXRZZWFyKGRhdGUsIHllYXIpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIHRydWUsIGZhbHNlKTtcbiAgICAvLyBHbyBiYWNrIHRvIGRheXNcbiAgICB0aGlzLm9wZW4obnVsbCwgJ2RheXMnKTtcbiAgfVxuXG4gIHNlbGVjdChldmVudDogRXZlbnQsIGRheTogRGF5LCBmaXJlRXZlbnRzOiBib29sZWFuKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICBpZiAodGhpcy53ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVGbnMuc3RhcnRPZldlZWsoZGF5LmRhdGUsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydCB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZDIgPSBkYXRlRm5zLmVuZE9mV2VlayhkYXkuZGF0ZSwgeyB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQyLCB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRvIGZpcmUgdGhpcywgc2luY2Ugd2UgZGVmYXVsdCB0byB0aGUgY3VycmVudCB3ZWVrIHNlbGVjdGVkIVxuICAgICAgICBpZiAoIWZpcmVFdmVudHMgJiYgdGhpcy53ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgICAgICB0aGlzLmZpcmVSYW5nZVNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2VTZWxlY3RNb2RlID09PSAnc3RhcnREYXRlJykge1xuICAgICAgICAvLyBTRVQgU1RBUlQgREFURVxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZUZucy5zdGFydE9mRGF5KGRheS5kYXRlKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LmRhdGUsIHRoaXMuc2VsZWN0ZWQyKSkge1xuICAgICAgICAgIC8vIENMRUFSIEVORCBEQVRFXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZDIgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5lbmREYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIHRoaXMucmFuZ2VTZWxlY3RNb2RlID0gJ2VuZERhdGUnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2VTZWxlY3RNb2RlID09PSAnZW5kRGF0ZScpIHtcbiAgICAgICAgLy8gU0VUIEVORCBEQVRFXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gZGF0ZUZucy5lbmRPZkRheShkYXkuZGF0ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LmRhdGUsIHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgLy8gQ0xFQVIgU1RBUlQgREFURVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlU2VsZWN0TW9kZSA9ICdzdGFydERhdGUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXkuZGF0ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHtcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudXBkYXRlSGVhZGluZygpO1xuICAgIH1cbiAgICBpZiAoZmlyZUV2ZW50cyAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAvLyBFbWl0IG91ciBvdXRwdXRcbiAgICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZDIpIHtcbiAgICAgICAgdGhpcy5maXJlUmFuZ2VTZWxlY3QoKTtcbiAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHtcbiAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgICAgZW5kRGF0ZTogdGhpcy5zZWxlY3RlZDIgPyB0aGlzLnNlbGVjdGVkMiA6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiBkYXkuZGF0ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgIGVuZERhdGU6IHRoaXMuc2VsZWN0ZWQyID8gdGhpcy5zZWxlY3RlZDIgOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogZGF5LmRhdGUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFsc28sIHVwZGF0ZSB0aGUgbmdNb2RlbFxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmlyZVJhbmdlU2VsZWN0KCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgc3RhcnQgZGF0ZSBpcyBiZWZvcmUgdGhlIGVuZCBkYXRlXG4gICAgaWYgKGRhdGVGbnMuaXNCZWZvcmUodGhpcy5zZWxlY3RlZCwgdGhpcy5zZWxlY3RlZDIpKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZERhdGU6IHtcbiAgICAgICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkMi5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQyLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3BlbihldmVudDogRXZlbnQsIHR5cGU6IHN0cmluZykge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcblxuICAgIC8vIElmIHRoZXkgY2xpY2sgdGhlIHRvZ2dsZSB0d28gdGltZSBpbiBhIHJvdywgY2xvc2UgaXQgKGdvIGJhY2sgdG8gZGF5cylcbiAgICBpZiAodHlwZSA9PT0gdGhpcy52aWV3KSB7XG4gICAgICB0aGlzLnZpZXcgPSAnZGF5cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlldyA9IHR5cGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRvIHNjcm9sbCB0aGUgc2VsZWN0ZWQgb25lIGludG8gdmlld1xuICAgIGlmICh0aGlzLnZpZXcgPT09ICd5ZWFycycgfHwgdGhpcy52aWV3ID09PSAnbW9udGhzJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuY2FsZW5kYXItY29udGVudC4ke3RoaXMudmlld31gKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5jYWxlbmRhci1jb250ZW50LiR7dGhpcy52aWV3fSAuJHt0aGlzLnZpZXcgPT09ICd5ZWFycycgPyAneWVhcicgOiAnbW9udGgnfS5zZWxlY3RlZGAsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb250YWluZXIgJiYgc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNlbGVjdGVkSXRlbS5vZmZzZXRUb3AgLSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlSGVhZGluZygpO1xuICB9XG5cbiAgcHJldk1vbnRoKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBsZXQgdG1wID0gZGF0ZUZucy5zdWJNb250aHModGhpcy5tb250aCwgMSk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgbGV0IHRtcCA9IGRhdGVGbnMuYWRkTW9udGhzKHRoaXMubW9udGgsIDEpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICB1cGRhdGVIZWFkaW5nKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhlYWRpbmcgPSB7XG4gICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF5OiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IHdlZWtkYXk6ICdsb25nJyB9KSxcbiAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQuZ2V0RGF0ZSgpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0aW1lIGFzcGVjdCBvZiB0aGUgZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB3aXRoIHRpbWUgc3RyaXBwZWQgb3V0XG4gICAqL1xuICByZW1vdmVUaW1lKGRhdGU6IGFueSk6IERhdGUge1xuICAgIGxldCByZXQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICByZXQuc2V0SG91cnMoMTIpO1xuICAgIHJldC5zZXRTZWNvbmRzKDApO1xuICAgIHJldC5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGJ1aWxkTW9udGgoc3RhcnQ6IERhdGUsIG1vbnRoOiBEYXRlKSB7XG4gICAgLy8gUmVzZXQgdGhlIHdlZWtzXG4gICAgdGhpcy53ZWVrcyA9IFtdO1xuXG4gICAgLy8gSG91c2Uga2VlcGluZyB2YXJpYWJsZXMgdG8ga25vdyB3aGVuIHdlIGFyZSBkb25lIGJ1aWxkaW5nIHRoZSBtb250aFxuICAgIGxldCBkb25lID0gZmFsc2UsXG4gICAgICBkYXRlID0gZGF0ZUZucy5zdGFydE9mV2VlayhzdGFydCwgeyB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0IH0pLFxuICAgICAgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGNvdW50ID0gMDtcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgLy8gQnVpbGQgdGhlIGRheXMgZm9yIHRoZSB3ZWVrc1xuICAgICAgdGhpcy53ZWVrcy5wdXNoKHsgZGF5czogdGhpcy5idWlsZFdlZWsobmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpLCBtb250aCkgfSk7XG5cbiAgICAgIC8vIEluY3JlbWVudCB2YXJpYWJsZXMgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgZGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhkYXRlLCA3KTtcbiAgICAgIGRvbmUgPSBjb3VudCsrID4gMiAmJiBtb250aEluZGV4ICE9PSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkV2VlayhkYXRlOiBEYXRlLCBtb250aDogRGF0ZSk6IEFycmF5PE9iamVjdD4ge1xuICAgIC8vIEJ1aWxkIG91dCBvZiB0aGUgZGF5cyBvZiB0aGUgd2Vla1xuICAgIGxldCBkYXlzID0gW107XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGRheXMgb2YgdGhlIHdlZWtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgLy8gUHVzaCBhIHZhcmlhYmxlIG9uIHRoZSBkYXkgYXJyYXkgd2l0aCBsb3RzIG9mIGhlbHBlcnMgdG8gbWFrZSB0aGUgdGVtcGxhdGUgZWFzaWVyXG4gICAgICBkYXlzLnB1c2goe1xuICAgICAgICBuYW1lOiB0aGlzLndlZWtkYXlzW2ldLFxuICAgICAgICBudW1iZXI6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICBpc1RvZGF5OiBkYXRlRm5zLmlzVG9kYXkoZGF0ZSksXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICB9KTtcblxuICAgICAgLy8gSW5jcmVtZW50IGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGRhdGUgPSBkYXRlRm5zLmFkZERheXMoZGF0ZSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheXM7XG4gIH1cblxuICB0b2dnbGVSYW5nZVNlbGVjdChyYW5nZTogcmFuZ2VTZWxlY3RNb2Rlcyk6IHZvaWQge1xuICAgIHRoaXMucmFuZ2VTZWxlY3RNb2RlID0gcmFuZ2U7XG4gIH1cblxuICByYW5nZUhvdmVyKGV2ZW50OiBFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyRGF5ID0gZGF5LmRhdGU7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBtb2RlbFR5cGVzKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmIChIZWxwZXJzLmlzRGF0ZShtb2RlbCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldyhtb2RlbCwgZmFsc2UsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=