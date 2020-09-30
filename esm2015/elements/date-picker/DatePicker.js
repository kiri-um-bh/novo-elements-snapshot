/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef(() => NovoDatePickerElement),
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
        this._onChange = () => { };
        this._onTouched = () => { };
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
            let isRangeModeEndDate = rangeSelectMode === 'endDate' && (selected && selected2 && dateFns.isAfter(day, selected2) && dateFns.isBefore(day, hoverDay));
            /** @type {?} */
            let isRangeModeStartDate = rangeSelectMode === 'startDate' && (selected && selected2 && dateFns.isBefore(day, selected) && dateFns.isAfter(day, hoverDay));
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
                    (day.getDate() === selected.getDate() &&
                        day.getMonth() === selected.getMonth() &&
                        day.getFullYear() === selected.getFullYear())) ||
                    (selected2 &&
                        (day.getDate() === selected2.getDate() &&
                            day.getMonth() === selected2.getMonth() &&
                            day.getFullYear() === selected2.getFullYear()))));
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
            setTimeout(() => {
                /** @type {?} */
                let container = this.element.nativeElement.querySelector(`.calendar-content.${this.view}`);
                /** @type {?} */
                let selectedItem = this.element.nativeElement.querySelector(`.calendar-content.${this.view} .${this.view === 'years' ? 'year' : 'month'}.selected`);
                if (container && selectedItem) {
                    container.scrollTop = selectedItem.offsetTop - 100;
                }
            });
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
                <h4 class="day" [attr.data-automation-id]="heading?.day">{{heading?.day}}</h4>
                <h2 class="month" [attr.data-automation-id]="heading?.month">{{heading?.month}}</h2>
                <h1 class="date" [attr.data-automation-id]="heading?.date">{{heading?.date}}</h1>
                <h3 class="year" [attr.data-automation-id]="heading?.year">{{heading?.year}}</h3>
            </div>
            <div class="date-range-tabs" *ngIf="range" [class.week-select-mode]="weekRangeSelect">
                <span class="range-tab" (click)="toggleRangeSelect('startDate')" [@startDateTextState]="rangeSelectMode" data-automation-id="calendar-start-date">{{selectedLabel}}</span>
                <span class="range-tab" (click)="toggleRangeSelect('endDate')" [@endDateTextState]="rangeSelectMode" data-automation-id="calendar-end-date">{{selected2Label}}</span>
                <i class="indicator" [@indicatorState]="rangeSelectMode"></i>
            </div>
            <div class="calendar-header">
                <span class="previous" (click)="prevMonth($event)" data-automation-id="calendar-previous"></span>
                <span class="heading">
                    <span class="month" (click)="open($event, 'months')" data-automation-id="header-month">{{monthLabel}}</span>
                    <span class="year" (click)="open($event, 'years')" data-automation-id="header-year">{{month?.getFullYear()}}</span>
                </span>
                <span class="next" (click)="nextMonth($event)" data-automation-id="calendar-next"></span>
            </div>
            <table class="calendar-content days" cellspacing="0" cellpadding="0" [hidden]="!(view=='days')">
                <thead>
                    <tr>
                        <th *ngFor="let day of weekdays" title="{{day}}" class="weekday" [attr.data-automation-id]="day.substr(0, 2)">{{day.substr(0, 2)}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let week of weeks">
                        <td *ngFor="let day of week.days" [ngClass]="{
                            today: day.isToday,
                            'notinmonth': day.date.getMonth() !== this.month.getMonth(),
                            selected: isSelected(range, day.date, selected, selected2),
                            filler: isFiller(range, day.date, selected, selected2),
                            startfill: isStartFill(range, day.date, selected, selected2),
                            endfill: isEndFill(range, day.date, selected, selected2),
                            'selecting-range': isSelectingRange(range, day.date, selected, selected2, hoverDay, rangeSelectMode, weekRangeSelect)
                           }" (mouseover)="rangeHover($event, day)" [attr.data-automation-id]="day.number">
                            <button class="day" [attr.data-automation-id]="day.number" [disabled]="isDisabled(day.date, start, end)" (click)="select($event, day, true)">{{day.number}}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <section class="calendar-content months" [hidden]="view !== 'months'">
                <div *ngFor="let month of months;let i = index" (click)="setMonth(i)">
                    <div class="month" [ngClass]="{selected: i === selected?.getMonth()}" [attr.data-automation-id]="month">{{month}}</div>
                </div>
            </section>
            <section class="calendar-content years" [hidden]="view !== 'years'">
                <div *ngFor="let year of years" (click)="setYear(year)">
                    <div class="year" [ngClass]="{selected: year == selected?.getFullYear()}" [attr.data-automation-id]="year">{{year}}</div>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxXQUFXLEdBSVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7OztNQUcvRCwwQkFBMEIsR0FBRztJQUNqQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELGdDQUlDOzs7SUFIQywrQkFBZ0I7O0lBQ2hCLDZCQUFjOztJQUNkLGtDQUFvQjs7Ozs7QUFJdEIseUJBTUM7OztJQUxDLG1CQUFXOztJQUNYLDZCQUF5Qjs7SUFDekIsc0JBQWtCOztJQUNsQixtQkFBYzs7SUFDZCxxQkFBeUI7O0FBa0gzQixNQUFNLE9BQU8scUJBQXFCOzs7OztJQStDaEMsWUFBbUIsTUFBd0IsRUFBVSxPQUFtQjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUEvQnhFLGNBQVMsR0FBVyxD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RCxLQUFLLENBQ0gsU0FBUyxFQUNULEtBQUssQ0FBQzs0QkFDSixTQUFTLEVBQUUsa0JBQWtCO3lCQUM5QixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDOUQsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlEUDthQUNKOzs7O1lBdElRLGdCQUFnQjtZQW5CdkIsVUFBVTs7O3NCQTJKVCxLQUFLO3NCQUVMLEtBQUs7b0JBRUwsS0FBSztrQkFFTCxLQUFLO3FCQUVMLEtBQUs7b0JBRUwsS0FBSzs4QkFFTCxLQUFLO3dCQUVMLEtBQUs7dUJBR0wsTUFBTTt1QkFFTixTQUFTLFNBQUMsV0FBVzs7OztJQW5CdEIsd0NBQ3lCOztJQUN6Qix3Q0FDeUI7O0lBQ3pCLHNDQUNZOztJQUNaLG9DQUNVOztJQUNWLHVDQUNnQjs7SUFDaEIsc0NBQ2U7O0lBQ2YsZ0RBQ3lCOztJQUN6QiwwQ0FDc0I7O0lBRXRCLHlDQUNzRDs7SUFDdEQseUNBQzJCOztJQUczQix5Q0FBd0I7O0lBRXhCLHVDQUFzQjs7SUFFdEIsc0NBQXVCOztJQUV2QixxQ0FBc0I7O0lBQ3RCLHdDQUFhOztJQUViLHNDQUFrQjs7SUFDbEIsc0NBQVk7O0lBQ1osMkNBQW1COztJQUNuQixzQ0FBVzs7SUFDWCx5Q0FBZTs7SUFDZiw4Q0FBc0I7O0lBQ3RCLDBDQUFnQjs7SUFDaEIsK0NBQXVCOztJQUN2Qix5Q0FBYzs7SUFFZCxnREFBZ0Q7O0lBQ2hELDBDQUErQjs7SUFDL0IsMkNBQWdDOztJQUVwQix1Q0FBK0I7Ozs7O0lBQUUsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0RhdGVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlTW9kYWwge1xuICBzdGFydERhdGU6IERhdGU7XG4gIGVuZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkRGF0ZT86IERhdGU7XG59XG5leHBvcnQgdHlwZSBtb2RlbFR5cGVzID0gRGF0ZSB8IFJhbmdlTW9kYWw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5IHtcbiAgZGF0ZTogRGF0ZTtcbiAgaXNDdXJyZW50TW9udGg/OiBib29sZWFuO1xuICBpc1RvZGF5PzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgbnVtYmVyPzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSByYW5nZVNlbGVjdE1vZGVzID0gJ3N0YXJ0RGF0ZScgfCAnZW5kRGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtEQVRFX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzdGFydERhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMS4wJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydERhdGUgPD0+IGVuZERhdGUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2VuZERhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydERhdGUgPD0+IGVuZERhdGUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2luZGljYXRvclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXRvcFwiICpuZ0lmPVwiIWlubGluZSAmJiAhcmFuZ2VcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkYXlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8uZGF5XCI+e3toZWFkaW5nPy5kYXl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9udGhcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8ubW9udGhcIj57e2hlYWRpbmc/Lm1vbnRofX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRhdGVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8uZGF0ZVwiPnt7aGVhZGluZz8uZGF0ZX19PC9oMT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ5ZWFyXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmc/LnllYXJcIj57e2hlYWRpbmc/LnllYXJ9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXJhbmdlLXRhYnNcIiAqbmdJZj1cInJhbmdlXCIgW2NsYXNzLndlZWstc2VsZWN0LW1vZGVdPVwid2Vla1JhbmdlU2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZS10YWJcIiAoY2xpY2spPVwidG9nZ2xlUmFuZ2VTZWxlY3QoJ3N0YXJ0RGF0ZScpXCIgW0BzdGFydERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItc3RhcnQtZGF0ZVwiPnt7c2VsZWN0ZWRMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UtdGFiXCIgKGNsaWNrKT1cInRvZ2dsZVJhbmdlU2VsZWN0KCdlbmREYXRlJylcIiBbQGVuZERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItZW5kLWRhdGVcIj57e3NlbGVjdGVkMkxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpbmRpY2F0b3JcIiBbQGluZGljYXRvclN0YXRlXT1cInJhbmdlU2VsZWN0TW9kZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlvdXNcIiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1wcmV2aW91c1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb250aFwiIChjbGljayk9XCJvcGVuKCRldmVudCwgJ21vbnRocycpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaGVhZGVyLW1vbnRoXCI+e3ttb250aExhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieWVhclwiIChjbGljayk9XCJvcGVuKCRldmVudCwgJ3llYXJzJylcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJoZWFkZXIteWVhclwiPnt7bW9udGg/LmdldEZ1bGxZZWFyKCl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItbmV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCBkYXlzXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgW2hpZGRlbl09XCIhKHZpZXc9PSdkYXlzJylcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlzXCIgdGl0bGU9XCJ7e2RheX19XCIgY2xhc3M9XCJ3ZWVrZGF5XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5zdWJzdHIoMCwgMilcIj57e2RheS5zdWJzdHIoMCwgMil9fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgd2VlayBvZiB3ZWVrc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vlay5kYXlzXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5OiBkYXkuaXNUb2RheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm90aW5tb250aCc6IGRheS5kYXRlLmdldE1vbnRoKCkgIT09IHRoaXMubW9udGguZ2V0TW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlcjogaXNGaWxsZXIocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGZpbGw6IGlzU3RhcnRGaWxsKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kZmlsbDogaXNFbmRGaWxsKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdGluZy1yYW5nZSc6IGlzU2VsZWN0aW5nUmFuZ2UocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyLCBob3ZlckRheSwgcmFuZ2VTZWxlY3RNb2RlLCB3ZWVrUmFuZ2VTZWxlY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgKG1vdXNlb3Zlcik9XCJyYW5nZUhvdmVyKCRldmVudCwgZGF5KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkubnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRheVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkubnVtYmVyXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoZGF5LmRhdGUsIHN0YXJ0LCBlbmQpXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIGRheSwgdHJ1ZSlcIj57e2RheS5udW1iZXJ9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCBtb250aHNcIiBbaGlkZGVuXT1cInZpZXcgIT09ICdtb250aHMnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhzO2xldCBpID0gaW5kZXhcIiAoY2xpY2spPVwic2V0TW9udGgoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBpID09PSBzZWxlY3RlZD8uZ2V0TW9udGgoKX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibW9udGhcIj57e21vbnRofX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCB5ZWFyc1wiIFtoaWRkZW5dPVwidmlldyAhPT0gJ3llYXJzJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNcIiAoY2xpY2spPVwic2V0WWVhcih5ZWFyKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVhclwiIFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogeWVhciA9PSBzZWxlY3RlZD8uZ2V0RnVsbFllYXIoKX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwieWVhclwiPnt7eWVhcn19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cInNldFRvZGF5KClcIiBjbGFzcz1cInRvZGF5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItdG9kYXlcIj57eyBsYWJlbHMudG9kYXkgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbWluWWVhcjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGlubGluZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcmFuZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdlZWtSYW5nZVNlbGVjdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiBudW1iZXIgPSAwO1xuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIExpc3Qgb2YgYWxsIHRoZSB3ZWVrZGF5c1xuICB3ZWVrZGF5czogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgbW9udGhzXG4gIG1vbnRoczogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgeWVhcnMgKGdlbmVyYXRlZCBpbiBuZ09uSW5pdClcbiAgeWVhcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gRGVmYXVsdCB2aWV3IG1vZGUgKHNlbGVjdCBkYXlzKVxuICB2aWV3OiBzdHJpbmcgPSAnZGF5cyc7XG4gIGhlYWRpbmc6IGFueTtcblxuICBtb2RlbDogbW9kZWxUeXBlcztcbiAgbW9udGg6IERhdGU7XG4gIG1vbnRoTGFiZWw6IHN0cmluZztcbiAgd2Vla3M6IGFueTtcbiAgc2VsZWN0ZWQ6IERhdGU7XG4gIHNlbGVjdGVkTGFiZWw6IHN0cmluZztcbiAgc2VsZWN0ZWQyOiBEYXRlO1xuICBzZWxlY3RlZDJMYWJlbDogc3RyaW5nO1xuICBob3ZlckRheTogYW55O1xuXG4gIHJhbmdlU2VsZWN0TW9kZTogcmFuZ2VTZWxlY3RNb2RlcyA9ICdzdGFydERhdGUnO1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIERldGVybWluZSB0aGUgeWVhciBhcnJheVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBzdGFydCA9IHRoaXMubWluWWVhciA/IE51bWJlcih0aGlzLm1pblllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgLSAxMDA7XG4gICAgbGV0IGVuZCA9IHRoaXMubWF4WWVhciA/IE51bWJlcih0aGlzLm1heFllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgKyAxMDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xuICAgIH1cblxuICAgIC8vIFNldCB3ZWVrZGF5cyAvIG1vbnRoc1xuICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLnNldHVwV2Vla2RheXMoKTtcbiAgICB0aGlzLm1vbnRocyA9IHRoaXMubGFiZWxzLmdldE1vbnRocygpO1xuXG4gICAgLy8gU2V0IGxhYmVsc1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5tb2RlbCwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGxldCB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ3dlZWtSYW5nZVNlbGVjdCddO1xuICAgIGlmIChcbiAgICAgIHdlZWtSYW5nZVNlbGVjdENoYW5nZSAmJlxuICAgICAgd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLnByZXZpb3VzVmFsdWUgJiZcbiAgICAgICF3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UuZmlyc3RDaGFuZ2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2xlYXJSYW5nZSgpO1xuICAgIH1cbiAgICBsZXQgd2Vla1N0YXJ0Q2hhbmdlczogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snd2Vla1N0YXJ0J107XG4gICAgaWYgKHdlZWtTdGFydENoYW5nZXMgJiYgd2Vla1N0YXJ0Q2hhbmdlcy5jdXJyZW50VmFsdWUgIT09IHdlZWtTdGFydENoYW5nZXMucHJldmlvdXNWYWx1ZSAmJiAhd2Vla1N0YXJ0Q2hhbmdlcy5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuc2V0dXBXZWVrZGF5cygpO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMubW9kZWwsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBXZWVrZGF5cygpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHdlZWtkYXlzID0gdGhpcy5sYWJlbHMuZ2V0V2Vla2RheXMoKTtcbiAgICAvLyBXZWVrc3RhcnQgbXVzdCBiZSAwLTYgKFN1bmRheSAtIFNhdHVyZGF5KVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHRoaXMud2Vla1N0YXJ0KSAmJiB0aGlzLndlZWtTdGFydCA+IDAgJiYgdGhpcy53ZWVrU3RhcnQgPD0gNikge1xuICAgICAgbGV0IG5ld1N0YXJ0ID0gd2Vla2RheXMuc3BsaWNlKHRoaXMud2Vla1N0YXJ0KTtcbiAgICAgIHdlZWtkYXlzID0gWy4uLm5ld1N0YXJ0LCAuLi53ZWVrZGF5c107XG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5cztcbiAgfVxuXG4gIGlzU2VsZWN0aW5nUmFuZ2UocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiwgaG92ZXJEYXksIHJhbmdlU2VsZWN0TW9kZSwgd2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgaWYgKHJhbmdlICYmICF3ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgIGxldCBpc1JhbmdlTW9kZUVuZERhdGUgPVxuICAgICAgICByYW5nZVNlbGVjdE1vZGUgPT09ICdlbmREYXRlJyAmJiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIGhvdmVyRGF5KSk7XG4gICAgICBsZXQgaXNSYW5nZU1vZGVTdGFydERhdGUgPVxuICAgICAgICByYW5nZVNlbGVjdE1vZGUgPT09ICdzdGFydERhdGUnICYmIChzZWxlY3RlZCAmJiBzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBob3ZlckRheSkpO1xuICAgICAgbGV0IGlzTm90U2VsZWN0ZWQgPSAhc2VsZWN0ZWQgJiYgc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIGhvdmVyRGF5KTtcbiAgICAgIGxldCBpc05vdFNlbGVjdGVkMiA9IHNlbGVjdGVkICYmICFzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBob3ZlckRheSk7XG4gICAgICByZXR1cm4gaXNOb3RTZWxlY3RlZDIgfHwgaXNOb3RTZWxlY3RlZCB8fCBpc1JhbmdlTW9kZVN0YXJ0RGF0ZSB8fCBpc1JhbmdlTW9kZUVuZERhdGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRW5kRmlsbChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuICFkYXRlRm5zLmlzU2FtZURheShzZWxlY3RlZCwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1N0YXJ0RmlsbChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuICFkYXRlRm5zLmlzU2FtZURheShzZWxlY3RlZCwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQyKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNGaWxsZXIocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMikge1xuICAgIGlmIChyYW5nZSAmJiBzZWxlY3RlZDIgJiYgc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZCkgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkMikpIHx8XG4gICAgICAgIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQpIHx8XG4gICAgICAgIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQyKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTZWxlY3RlZChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBkYXkgJiZcbiAgICAgICAgKChzZWxlY3RlZCAmJlxuICAgICAgICAgIChkYXkuZ2V0RGF0ZSgpID09PSBzZWxlY3RlZC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgIGRheS5nZXRNb250aCgpID09PSBzZWxlY3RlZC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICBkYXkuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSkpIHx8XG4gICAgICAgICAgKHNlbGVjdGVkMiAmJlxuICAgICAgICAgICAgKGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkMi5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgZGF5LmdldE1vbnRoKCkgPT09IHNlbGVjdGVkMi5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZDIuZ2V0RnVsbFllYXIoKSkpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkLmdldERhdGUoKSAmJiBkYXkuZ2V0TW9udGgoKSA9PT0gc2VsZWN0ZWQuZ2V0TW9udGgoKSAmJiBkYXkuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoZGF5LCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzdGFydCkgfHwgZGF0ZUZucy5pc0FmdGVyKGRheSwgZW5kKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoZGF0ZSwgZmlyZUV2ZW50czogYm9vbGVhbiwgbWFya2VkU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoZGF0ZSAmJiBkYXRlLnN0YXJ0RGF0ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jbGVhclJhbmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICB0aGlzLmNsZWFyUmFuZ2UoKTtcbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZTogYW55O1xuICAgICAgaWYgKGRhdGUgJiYgZGF0ZS5zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZShkYXRlLnNlbGVjdGVkRGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRhdGUgPyBuZXcgRGF0ZShkYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlVGltZSh2YWx1ZSk7XG4gICAgICB0aGlzLm1vbnRoID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgdGhpcy5tb250aExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5tb250aCwgeyBtb250aDogJ3Nob3J0JyB9KTtcblxuICAgICAgbGV0IHN0YXJ0ID0gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpKTtcbiAgICAgIHN0YXJ0LnNldERhdGUoMSk7XG4gICAgICB0aGlzLnJlbW92ZVRpbWUoc3RhcnQuc2V0RGF0ZSgxKSk7XG5cbiAgICAgIHRoaXMuYnVpbGRNb250aChzdGFydCwgdGhpcy5tb250aCk7XG5cbiAgICAgIGlmIChtYXJrZWRTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdChudWxsLCB7IGRhdGU6IHZhbHVlIH0sIGZpcmVFdmVudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRvZGF5KCkge1xuICAgIGxldCB0bXAgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIHRydWUsIHRydWUpO1xuICAgIC8vIEdvIGJhY2sgdG8gZGF5c1xuICAgIHRoaXMub3BlbihudWxsLCAnZGF5cycpO1xuICB9XG5cbiAgY2xlYXJSYW5nZSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5zdGFydERhdGU7XG4gICAgdGhpcy5zZWxlY3RlZDIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5lbmREYXRlO1xuICB9XG5cbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBkYXRlID0gdGhpcy5tb250aCA/IHRoaXMubW9udGggOiBuZXcgRGF0ZSgpO1xuICAgIGxldCB0bXAgPSBkYXRlRm5zLnNldE1vbnRoKGRhdGUsIG1vbnRoKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCBmYWxzZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBzZXRZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBkYXRlID0gdGhpcy5tb250aCA/IHRoaXMubW9udGggOiBuZXcgRGF0ZSgpO1xuICAgIGxldCB0bXAgPSBkYXRlRm5zLnNldFllYXIoZGF0ZSwgeWVhcik7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgdHJ1ZSwgZmFsc2UpO1xuICAgIC8vIEdvIGJhY2sgdG8gZGF5c1xuICAgIHRoaXMub3BlbihudWxsLCAnZGF5cycpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50OiBFdmVudCwgZGF5OiBEYXksIGZpcmVFdmVudHM6IGJvb2xlYW4pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLndlZWtSYW5nZVNlbGVjdCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZUZucy5zdGFydE9mV2VlayhkYXkuZGF0ZSwgeyB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkMiA9IGRhdGVGbnMuZW5kT2ZXZWVrKGRheS5kYXRlLCB7IHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnQgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBNYWtlIHN1cmUgdG8gZmlyZSB0aGlzLCBzaW5jZSB3ZSBkZWZhdWx0IHRvIHRoZSBjdXJyZW50IHdlZWsgc2VsZWN0ZWQhXG4gICAgICAgIGlmICghZmlyZUV2ZW50cyAmJiB0aGlzLndlZWtSYW5nZVNlbGVjdCkge1xuICAgICAgICAgIHRoaXMuZmlyZVJhbmdlU2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5nZVNlbGVjdE1vZGUgPT09ICdzdGFydERhdGUnKSB7XG4gICAgICAgIC8vIFNFVCBTVEFSVCBEQVRFXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlRm5zLnN0YXJ0T2ZEYXkoZGF5LmRhdGUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNBZnRlcihkYXkuZGF0ZSwgdGhpcy5zZWxlY3RlZDIpKSB7XG4gICAgICAgICAgLy8gQ0xFQVIgRU5EIERBVEVcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkMiA9IG51bGw7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmVuZERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5yYW5nZVNlbGVjdE1vZGUgPSAnZW5kRGF0ZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5nZVNlbGVjdE1vZGUgPT09ICdlbmREYXRlJykge1xuICAgICAgICAvLyBTRVQgRU5EIERBVEVcbiAgICAgICAgdGhpcy5zZWxlY3RlZDIgPSBkYXRlRm5zLmVuZE9mRGF5KGRheS5kYXRlKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQyLCB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXkuZGF0ZSwgdGhpcy5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAvLyBDTEVBUiBTVEFSVCBEQVRFXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuc3RhcnREYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIHRoaXMucmFuZ2VTZWxlY3RNb2RlID0gJ3N0YXJ0RGF0ZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGRheS5kYXRlO1xuICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwge1xuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy51cGRhdGVIZWFkaW5nKCk7XG4gICAgfVxuICAgIGlmIChmaXJlRXZlbnRzICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIC8vIEVtaXQgb3VyIG91dHB1dFxuICAgICAgaWYgKHRoaXMucmFuZ2UgJiYgdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkMikge1xuICAgICAgICB0aGlzLmZpcmVSYW5nZVNlbGVjdCgpO1xuICAgICAgICAvLyBBbHNvLCB1cGRhdGUgdGhlIG5nTW9kZWxcbiAgICAgICAgdGhpcy5fb25DaGFuZ2Uoe1xuICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgICBlbmREYXRlOiB0aGlzLnNlbGVjdGVkMiA/IHRoaXMuc2VsZWN0ZWQyIDogbnVsbCxcbiAgICAgICAgICBzZWxlY3RlZERhdGU6IGRheS5kYXRlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgICAgZW5kRGF0ZTogdGhpcy5zZWxlY3RlZDIgPyB0aGlzLnNlbGVjdGVkMiA6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiBkYXkuZGF0ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICAgICAgbW9udGg6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgZGF5OiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IHdlZWtkYXk6ICdsb25nJyB9KSxcbiAgICAgICAgICBkYXRlOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaXJlUmFuZ2VTZWxlY3QoKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBzdGFydCBkYXRlIGlzIGJlZm9yZSB0aGUgZW5kIGRhdGVcbiAgICBpZiAoZGF0ZUZucy5pc0JlZm9yZSh0aGlzLnNlbGVjdGVkLCB0aGlzLnNlbGVjdGVkMikpIHtcbiAgICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICAgIHN0YXJ0RGF0ZToge1xuICAgICAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgfSxcbiAgICAgICAgZW5kRGF0ZToge1xuICAgICAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQyLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgZGF5OiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZDIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvcGVuKGV2ZW50OiBFdmVudCwgdHlwZTogc3RyaW5nKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuXG4gICAgLy8gSWYgdGhleSBjbGljayB0aGUgdG9nZ2xlIHR3byB0aW1lIGluIGEgcm93LCBjbG9zZSBpdCAoZ28gYmFjayB0byBkYXlzKVxuICAgIGlmICh0eXBlID09PSB0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMudmlldyA9ICdkYXlzJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3ID0gdHlwZTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgdG8gc2Nyb2xsIHRoZSBzZWxlY3RlZCBvbmUgaW50byB2aWV3XG4gICAgaWYgKHRoaXMudmlldyA9PT0gJ3llYXJzJyB8fCB0aGlzLnZpZXcgPT09ICdtb250aHMnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYWxlbmRhci1jb250ZW50LiR7dGhpcy52aWV3fWApO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmNhbGVuZGFyLWNvbnRlbnQuJHt0aGlzLnZpZXd9IC4ke3RoaXMudmlldyA9PT0gJ3llYXJzJyA/ICd5ZWFyJyA6ICdtb250aCd9LnNlbGVjdGVkYCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2VsZWN0ZWRJdGVtLm9mZnNldFRvcCAtIDEwMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVIZWFkaW5nKCk7XG4gIH1cblxuICBwcmV2TW9udGgoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGxldCB0bXAgPSBkYXRlRm5zLnN1Yk1vbnRocyh0aGlzLm1vbnRoLCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbmV4dE1vbnRoKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBsZXQgdG1wID0gZGF0ZUZucy5hZGRNb250aHModGhpcy5tb250aCwgMSk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIHVwZGF0ZUhlYWRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGVhZGluZyA9IHtcbiAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZC5nZXREYXRlKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRpbWUgYXNwZWN0IG9mIHRoZSBkYXRlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHdpdGggdGltZSBzdHJpcHBlZCBvdXRcbiAgICovXG4gIHJlbW92ZVRpbWUoZGF0ZTogYW55KTogRGF0ZSB7XG4gICAgbGV0IHJldCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIHJldC5zZXRIb3VycygxMik7XG4gICAgcmV0LnNldFNlY29uZHMoMCk7XG4gICAgcmV0LnNldE1pbGxpc2Vjb25kcygwKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgYnVpbGRNb250aChzdGFydDogRGF0ZSwgbW9udGg6IERhdGUpIHtcbiAgICAvLyBSZXNldCB0aGUgd2Vla3NcbiAgICB0aGlzLndlZWtzID0gW107XG5cbiAgICAvLyBIb3VzZSBrZWVwaW5nIHZhcmlhYmxlcyB0byBrbm93IHdoZW4gd2UgYXJlIGRvbmUgYnVpbGRpbmcgdGhlIG1vbnRoXG4gICAgbGV0IGRvbmUgPSBmYWxzZSxcbiAgICAgIGRhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKHN0YXJ0LCB7IHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnQgfSksXG4gICAgICBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpLFxuICAgICAgY291bnQgPSAwO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAvLyBCdWlsZCB0aGUgZGF5cyBmb3IgdGhlIHdlZWtzXG4gICAgICB0aGlzLndlZWtzLnB1c2goeyBkYXlzOiB0aGlzLmJ1aWxkV2VlayhuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSksIG1vbnRoKSB9KTtcblxuICAgICAgLy8gSW5jcmVtZW50IHZhcmlhYmxlcyBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICBkYXRlID0gZGF0ZUZucy5hZGREYXlzKGRhdGUsIDcpO1xuICAgICAgZG9uZSA9IGNvdW50KysgPiAyICYmIG1vbnRoSW5kZXggIT09IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRXZWVrKGRhdGU6IERhdGUsIG1vbnRoOiBEYXRlKTogQXJyYXk8T2JqZWN0PiB7XG4gICAgLy8gQnVpbGQgb3V0IG9mIHRoZSBkYXlzIG9mIHRoZSB3ZWVrXG4gICAgbGV0IGRheXMgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgZGF5cyBvZiB0aGUgd2Vla1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAvLyBQdXNoIGEgdmFyaWFibGUgb24gdGhlIGRheSBhcnJheSB3aXRoIGxvdHMgb2YgaGVscGVycyB0byBtYWtlIHRoZSB0ZW1wbGF0ZSBlYXNpZXJcbiAgICAgIGRheXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHRoaXMud2Vla2RheXNbaV0sXG4gICAgICAgIG51bWJlcjogZGF0ZS5nZXREYXRlKCksXG4gICAgICAgIGlzVG9kYXk6IGRhdGVGbnMuaXNUb2RheShkYXRlKSxcbiAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJbmNyZW1lbnQgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgZGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhkYXRlLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuXG4gIHRvZ2dsZVJhbmdlU2VsZWN0KHJhbmdlOiByYW5nZVNlbGVjdE1vZGVzKTogdm9pZCB7XG4gICAgdGhpcy5yYW5nZVNlbGVjdE1vZGUgPSByYW5nZTtcbiAgfVxuXG4gIHJhbmdlSG92ZXIoZXZlbnQ6IEV2ZW50LCBkYXk6IERheSk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJEYXkgPSBkYXkuZGF0ZTtcbiAgfVxuXG4gIC8vIFZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gIHdyaXRlVmFsdWUobW9kZWw6IG1vZGVsVHlwZXMpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKG1vZGVsKSkge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KG1vZGVsLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==