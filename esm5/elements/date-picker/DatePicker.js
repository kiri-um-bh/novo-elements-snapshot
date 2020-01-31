/**
 * @fileoverview added by tsickle
 * Generated from: elements/date-picker/DatePicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { ElementRef, Component, EventEmitter, forwardRef, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
// Vendor
import * as dateFns from 'date-fns';
// APP
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var DATE_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoDatePickerElement; })),
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
var NovoDatePickerElement = /** @class */ (function () {
    function NovoDatePickerElement(labels, element) {
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
        function () { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    NovoDatePickerElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Determine the year array
        /** @type {?} */
        var now = new Date();
        /** @type {?} */
        var start = this.minYear ? Number(this.minYear) : now.getFullYear() - 100;
        /** @type {?} */
        var end = this.maxYear ? Number(this.maxYear) : now.getFullYear() + 10;
        for (var i = start; i <= end; i++) {
            this.years.push(i);
        }
        // Set weekdays / months
        this.weekdays = this.setupWeekdays();
        this.months = this.labels.getMonths();
        // Set labels
        this.selectedLabel = this.labels.startDate;
        this.selected2Label = this.labels.endDate;
        this.updateView(this.model, false, true);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NovoDatePickerElement.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var weekRangeSelectChange = changes['weekRangeSelect'];
        if (weekRangeSelectChange &&
            weekRangeSelectChange.currentValue !== weekRangeSelectChange.previousValue &&
            !weekRangeSelectChange.firstChange) {
            this.clearRange();
        }
        /** @type {?} */
        var weekStartChanges = changes['weekStart'];
        if (weekStartChanges && weekStartChanges.currentValue !== weekStartChanges.previousValue && !weekStartChanges.firstChange) {
            this.weekdays = this.setupWeekdays();
            this.updateView(this.model, false, false);
        }
    };
    /**
     * @return {?}
     */
    NovoDatePickerElement.prototype.setupWeekdays = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekdays = this.labels.getWeekdays();
        // Weekstart must be 0-6 (Sunday - Saturday)
        if (!Helpers.isBlank(this.weekStart) && this.weekStart > 0 && this.weekStart <= 6) {
            /** @type {?} */
            var newStart = weekdays.splice(this.weekStart);
            weekdays = tslib_1.__spread(newStart, weekdays);
        }
        return weekdays;
    };
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
    NovoDatePickerElement.prototype.isSelectingRange = /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @param {?} hoverDay
     * @param {?} rangeSelectMode
     * @param {?} weekRangeSelect
     * @return {?}
     */
    function (range, day, selected, selected2, hoverDay, rangeSelectMode, weekRangeSelect) {
        if (range && !weekRangeSelect) {
            /** @type {?} */
            var isRangeModeEndDate = rangeSelectMode === 'endDate' && (selected && selected2 && dateFns.isAfter(day, selected2) && dateFns.isBefore(day, hoverDay));
            /** @type {?} */
            var isRangeModeStartDate = rangeSelectMode === 'startDate' && (selected && selected2 && dateFns.isBefore(day, selected) && dateFns.isAfter(day, hoverDay));
            /** @type {?} */
            var isNotSelected = !selected && selected2 && dateFns.isBefore(day, selected2) && dateFns.isAfter(day, hoverDay);
            /** @type {?} */
            var isNotSelected2 = selected && !selected2 && dateFns.isAfter(day, selected) && dateFns.isBefore(day, hoverDay);
            return isNotSelected2 || isNotSelected || isRangeModeStartDate || isRangeModeEndDate;
        }
        return false;
    };
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    NovoDatePickerElement.prototype.isEndFill = /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    function (range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return !dateFns.isSameDay(selected, selected2) && dateFns.isSameDay(day, selected2) && dateFns.isAfter(day, selected);
        }
        return false;
    };
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    NovoDatePickerElement.prototype.isStartFill = /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    function (range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return !dateFns.isSameDay(selected, selected2) && dateFns.isSameDay(day, selected) && dateFns.isBefore(day, selected2);
        }
        return false;
    };
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    NovoDatePickerElement.prototype.isFiller = /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    function (range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return ((dateFns.isAfter(day, selected) && dateFns.isBefore(day, selected2)) ||
                dateFns.isSameDay(day, selected) ||
                dateFns.isSameDay(day, selected2));
        }
        return false;
    };
    /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    NovoDatePickerElement.prototype.isSelected = /**
     * @param {?} range
     * @param {?} day
     * @param {?} selected
     * @param {?} selected2
     * @return {?}
     */
    function (range, day, selected, selected2) {
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
    };
    /**
     * @param {?} day
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    NovoDatePickerElement.prototype.isDisabled = /**
     * @param {?} day
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (day, start, end) {
        return dateFns.isBefore(day, start) || dateFns.isAfter(day, end);
    };
    /**
     * @param {?} date
     * @param {?} fireEvents
     * @param {?} markedSelected
     * @return {?}
     */
    NovoDatePickerElement.prototype.updateView = /**
     * @param {?} date
     * @param {?} fireEvents
     * @param {?} markedSelected
     * @return {?}
     */
    function (date, fireEvents, markedSelected) {
        if (date && date.startDate === null) {
            this.clearRange();
        }
        else {
            if (!date) {
                this.clearRange();
            }
            /** @type {?} */
            var value = date ? new Date(date) : new Date();
            value = this.removeTime(value);
            this.month = new Date(value);
            this.monthLabel = this.labels.formatDateWithFormat(this.month, { month: 'short' });
            /** @type {?} */
            var start = new Date(value.getTime());
            start.setDate(1);
            this.removeTime(start.setDate(1));
            this.buildMonth(start, this.month);
            if (markedSelected) {
                this.select(null, { date: value }, fireEvents);
            }
        }
    };
    /**
     * @return {?}
     */
    NovoDatePickerElement.prototype.setToday = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tmp = new Date();
        this.updateView(tmp, true, true);
        // Go back to days
        this.open(null, 'days');
    };
    /**
     * @return {?}
     */
    NovoDatePickerElement.prototype.clearRange = /**
     * @return {?}
     */
    function () {
        this.selected = null;
        this.selectedLabel = this.labels.startDate;
        this.selected2 = null;
        this.selected2Label = this.labels.endDate;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NovoDatePickerElement.prototype.setMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = this.month ? this.month : new Date();
        /** @type {?} */
        var tmp = dateFns.setMonth(date, month);
        this.updateView(tmp, true, false);
        // Go back to days
        this.open(null, 'days');
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NovoDatePickerElement.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = this.month ? this.month : new Date();
        /** @type {?} */
        var tmp = dateFns.setYear(date, year);
        this.updateView(tmp, true, false);
        // Go back to days
        this.open(null, 'days');
    };
    /**
     * @param {?} event
     * @param {?} day
     * @param {?} fireEvents
     * @return {?}
     */
    NovoDatePickerElement.prototype.select = /**
     * @param {?} event
     * @param {?} day
     * @param {?} fireEvents
     * @return {?}
     */
    function (event, day, fireEvents) {
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
                });
                this.model = {
                    startDate: this.selected,
                    endDate: this.selected2 ? this.selected2 : null,
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
    };
    /**
     * @return {?}
     */
    NovoDatePickerElement.prototype.fireRangeSelect = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    NovoDatePickerElement.prototype.open = /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    function (event, type) {
        var _this = this;
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
            function () {
                /** @type {?} */
                var container = _this.element.nativeElement.querySelector(".calendar-content." + _this.view);
                /** @type {?} */
                var selectedItem = _this.element.nativeElement.querySelector(".calendar-content." + _this.view + " ." + (_this.view === 'years' ? 'year' : 'month') + ".selected");
                if (container && selectedItem) {
                    container.scrollTop = selectedItem.offsetTop - 100;
                }
            }));
        }
        this.updateHeading();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDatePickerElement.prototype.prevMonth = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        /** @type {?} */
        var tmp = dateFns.subMonths(this.month, 1);
        this.updateView(tmp, false, false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDatePickerElement.prototype.nextMonth = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        /** @type {?} */
        var tmp = dateFns.addMonths(this.month, 1);
        this.updateView(tmp, false, false);
    };
    /**
     * @return {?}
     */
    NovoDatePickerElement.prototype.updateHeading = /**
     * @return {?}
     */
    function () {
        if (!this.selected) {
            return;
        }
        this.heading = {
            month: this.labels.formatDateWithFormat(this.selected, { month: 'long' }),
            year: this.selected.getFullYear(),
            day: this.labels.formatDateWithFormat(this.selected, { weekday: 'long' }),
            date: this.selected.getDate(),
        };
    };
    /**
     * Remove the time aspect of the date
     * @param date
     * @returns with time stripped out
     */
    /**
     * Remove the time aspect of the date
     * @param {?} date
     * @return {?} with time stripped out
     */
    NovoDatePickerElement.prototype.removeTime = /**
     * Remove the time aspect of the date
     * @param {?} date
     * @return {?} with time stripped out
     */
    function (date) {
        /** @type {?} */
        var ret = new Date(date);
        ret.setHours(12);
        ret.setSeconds(0);
        ret.setMilliseconds(0);
        return ret;
    };
    /**
     * @param {?} start
     * @param {?} month
     * @return {?}
     */
    NovoDatePickerElement.prototype.buildMonth = /**
     * @param {?} start
     * @param {?} month
     * @return {?}
     */
    function (start, month) {
        // Reset the weeks
        this.weeks = [];
        // House keeping variables to know when we are done building the month
        /** @type {?} */
        var done = false;
        /** @type {?} */
        var date = dateFns.startOfWeek(start, { weekStartsOn: this.weekStart });
        /** @type {?} */
        var monthIndex = date.getMonth();
        /** @type {?} */
        var count = 0;
        while (!done) {
            // Build the days for the weeks
            this.weeks.push({ days: this.buildWeek(new Date(date.getTime()), month) });
            // Increment variables for the next iteration
            date = dateFns.addDays(date, 7);
            done = count++ > 2 && monthIndex !== date.getMonth();
            monthIndex = date.getMonth();
        }
    };
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    NovoDatePickerElement.prototype.buildWeek = /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    function (date, month) {
        // Build out of the days of the week
        /** @type {?} */
        var days = [];
        // Iterate over the days of the week
        for (var i = 0; i < 7; i++) {
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
    };
    /**
     * @param {?} range
     * @return {?}
     */
    NovoDatePickerElement.prototype.toggleRangeSelect = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        this.rangeSelectMode = range;
    };
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    NovoDatePickerElement.prototype.rangeHover = /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    function (event, day) {
        this.hoverDay = day.date;
    };
    // ValueAccessor Functions
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    NovoDatePickerElement.prototype.writeValue = 
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        if (Helpers.isDate(model)) {
            this.updateView(model, false, true);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoDatePickerElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoDatePickerElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
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
                    template: "\n        <div class=\"calendar\">\n            <div class=\"calendar-top\" *ngIf=\"!inline && !range\">\n                <h4 class=\"day\" [attr.data-automation-id]=\"heading?.day\">{{heading?.day}}</h4>\n                <h2 class=\"month\" [attr.data-automation-id]=\"heading?.month\">{{heading?.month}}</h2>\n                <h1 class=\"date\" [attr.data-automation-id]=\"heading?.date\">{{heading?.date}}</h1>\n                <h3 class=\"year\" [attr.data-automation-id]=\"heading?.year\">{{heading?.year}}</h3>\n            </div>\n            <div class=\"date-range-tabs\" *ngIf=\"range\" [class.week-select-mode]=\"weekRangeSelect\">\n                <span class=\"range-tab\" (click)=\"toggleRangeSelect('startDate')\" [@startDateTextState]=\"rangeSelectMode\" data-automation-id=\"calendar-start-date\">{{selectedLabel}}</span>\n                <span class=\"range-tab\" (click)=\"toggleRangeSelect('endDate')\" [@endDateTextState]=\"rangeSelectMode\" data-automation-id=\"calendar-end-date\">{{selected2Label}}</span>\n                <i class=\"indicator\" [@indicatorState]=\"rangeSelectMode\"></i>\n            </div>\n            <div class=\"calendar-header\">\n                <span class=\"previous\" (click)=\"prevMonth($event)\" data-automation-id=\"calendar-previous\"></span>\n                <span class=\"heading\">\n                    <span class=\"month\" (click)=\"open($event, 'months')\" data-automation-id=\"header-month\">{{monthLabel}}</span>\n                    <span class=\"year\" (click)=\"open($event, 'years')\" data-automation-id=\"header-year\">{{month?.getFullYear()}}</span>\n                </span>\n                <span class=\"next\" (click)=\"nextMonth($event)\" data-automation-id=\"calendar-next\"></span>\n            </div>\n            <table class=\"calendar-content days\" cellspacing=\"0\" cellpadding=\"0\" [hidden]=\"!(view=='days')\">\n                <thead>\n                    <tr>\n                        <th *ngFor=\"let day of weekdays\" title=\"{{day}}\" class=\"weekday\" [attr.data-automation-id]=\"day.substr(0, 2)\">{{day.substr(0, 2)}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let week of weeks\">\n                        <td *ngFor=\"let day of week.days\" [ngClass]=\"{\n                            today: day.isToday,\n                            'notinmonth': day.date.getMonth() !== this.month.getMonth(),\n                            selected: isSelected(range, day.date, selected, selected2),\n                            filler: isFiller(range, day.date, selected, selected2),\n                            startfill: isStartFill(range, day.date, selected, selected2),\n                            endfill: isEndFill(range, day.date, selected, selected2),\n                            'selecting-range': isSelectingRange(range, day.date, selected, selected2, hoverDay, rangeSelectMode, weekRangeSelect)\n                           }\" (mouseover)=\"rangeHover($event, day)\" [attr.data-automation-id]=\"day.number\">\n                            <button class=\"day\" [attr.data-automation-id]=\"day.number\" [disabled]=\"isDisabled(day.date, start, end)\" (click)=\"select($event, day, true)\">{{day.number}}</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <section class=\"calendar-content months\" [hidden]=\"view !== 'months'\">\n                <div *ngFor=\"let month of months;let i = index\" (click)=\"setMonth(i)\">\n                    <div class=\"month\" [ngClass]=\"{selected: i === selected?.getMonth()}\" [attr.data-automation-id]=\"month\">{{month}}</div>\n                </div>\n            </section>\n            <section class=\"calendar-content years\" [hidden]=\"view !== 'years'\">\n                <div *ngFor=\"let year of years\" (click)=\"setYear(year)\">\n                    <div class=\"year\" [ngClass]=\"{selected: year == selected?.getFullYear()}\" [attr.data-automation-id]=\"year\">{{year}}</div>\n                </div>\n            </section>\n            <div class=\"calendar-footer\">\n                <span (click)=\"setToday()\" class=\"today\" data-automation-id=\"calendar-today\">{{ labels.today }}</span>\n            </div>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    NovoDatePickerElement.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: ElementRef }
    ]; };
    NovoDatePickerElement.propDecorators = {
        minYear: [{ type: Input }],
        maxYear: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        inline: [{ type: Input }],
        range: [{ type: Input }],
        weekRangeSelect: [{ type: Input }],
        weekStart: [{ type: Input }],
        onSelect: [{ type: Output }]
    };
    return NovoDatePickerElement;
}());
export { NovoDatePickerElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEdBS1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7OztJQUcvRCwwQkFBMEIsR0FBRztJQUNqQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELGdDQUdDOzs7SUFGQywrQkFBZ0I7O0lBQ2hCLDZCQUFjOzs7OztBQUloQix5QkFNQzs7O0lBTEMsbUJBQVc7O0lBQ1gsNkJBQXlCOztJQUN6QixzQkFBa0I7O0lBQ2xCLG1CQUFjOztJQUNkLHFCQUF5Qjs7QUFLM0I7SUEwSkUsK0JBQW1CLE1BQXdCLEVBQVUsT0FBbUI7UUFBckQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBN0J4RSxjQUFTLEdBQThCLENBQUMsQ0FBQzs7UUFHekMsYUFBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFHdEQsYUFBUSxHQUFhLEVBQUUsQ0FBQzs7UUFFeEIsV0FBTSxHQUFhLEVBQUUsQ0FBQzs7UUFFdEIsVUFBSyxHQUFlLEVBQUUsQ0FBQzs7UUFFdkIsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQWF0QixvQkFBZSxHQUFxQixXQUFXLENBQUM7UUFDaEQsY0FBUzs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7UUFDL0IsZUFBVTs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7SUFFMkMsQ0FBQzs7OztJQUU1RSx3Q0FBUTs7O0lBQVI7OztZQUVNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRTs7WUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHOztZQUNyRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7UUFFdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUVELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEMsYUFBYTtRQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztZQUM1QixxQkFBcUIsR0FBaUIsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3BFLElBQ0UscUJBQXFCO1lBQ3JCLHFCQUFxQixDQUFDLFlBQVksS0FBSyxxQkFBcUIsQ0FBQyxhQUFhO1lBQzFFLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUNsQztZQUNBLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjs7WUFDRyxnQkFBZ0IsR0FBaUIsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN6RCxJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLFlBQVksS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7WUFDekgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7O1lBQ00sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQ3hDLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7O2dCQUM3RSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzlDLFFBQVEsb0JBQU8sUUFBUSxFQUFLLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFFRCxnREFBZ0I7Ozs7Ozs7Ozs7SUFBaEIsVUFBaUIsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZTtRQUMxRixJQUFJLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBRTs7Z0JBQ3pCLGtCQUFrQixHQUNwQixlQUFlLEtBQUssU0FBUyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQzs7Z0JBQzVILG9CQUFvQixHQUN0QixlQUFlLEtBQUssV0FBVyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQzs7Z0JBQzdILGFBQWEsR0FBRyxDQUFDLFFBQVEsSUFBSSxTQUFTLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDOztnQkFDNUcsY0FBYyxHQUFHLFFBQVEsSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7WUFDaEgsT0FBTyxjQUFjLElBQUksYUFBYSxJQUFJLG9CQUFvQixJQUFJLGtCQUFrQixDQUFDO1NBQ3RGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVELHlDQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTO1FBQ3ZDLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZIO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVELDJDQUFXOzs7Ozs7O0lBQVgsVUFBWSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTO1FBQ3pDLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hIO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVELHdDQUFROzs7Ozs7O0lBQVIsVUFBUyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTO1FBQ3RDLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDbEMsT0FBTyxDQUNMLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3BFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQ2xDLENBQUM7U0FDSDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7Ozs7SUFFRCwwQ0FBVTs7Ozs7OztJQUFWLFVBQVcsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUztRQUN4QyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sQ0FDTCxHQUFHO2dCQUNILENBQUMsQ0FBQyxRQUFRO29CQUNSLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7d0JBQ25DLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFO3dCQUN0QyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQ2hELENBQUMsU0FBUzt3QkFDUixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxTQUFTLENBQUMsT0FBTyxFQUFFOzRCQUNwQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssU0FBUyxDQUFDLFFBQVEsRUFBRTs0QkFDdkMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDdkQsQ0FBQztTQUNIO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4SSxDQUFDOzs7Ozs7O0lBRUQsMENBQVU7Ozs7OztJQUFWLFVBQVcsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7OztJQUVELDBDQUFVOzs7Ozs7SUFBVixVQUFXLElBQUksRUFBRSxVQUFtQixFQUFFLGNBQXVCO1FBQzNELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7O2dCQUNHLEtBQUssR0FBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7O2dCQUUvRSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRW5DLElBQUksY0FBYyxFQUFFO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNoRDtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjs7WUFDTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7O1lBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTs7WUFDM0MsR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsdUNBQU87Ozs7SUFBUCxVQUFRLElBQVk7O1lBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFOztZQUMzQyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7OztJQUVELHNDQUFNOzs7Ozs7SUFBTixVQUFPLEtBQVksRUFBRSxHQUFRLEVBQUUsVUFBbUI7UUFDaEQsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ25FLEtBQUssRUFBRSxPQUFPO29CQUNkLEdBQUcsRUFBRSxTQUFTO29CQUNkLElBQUksRUFBRSxTQUFTO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ3JFLEtBQUssRUFBRSxPQUFPO29CQUNkLEdBQUcsRUFBRSxTQUFTO29CQUNkLElBQUksRUFBRSxTQUFTO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gseUVBQXlFO2dCQUN6RSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxFQUFFO2dCQUMvQyxpQkFBaUI7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNuRSxLQUFLLEVBQUUsT0FBTztvQkFDZCxHQUFHLEVBQUUsU0FBUztvQkFDZCxJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMvRCxpQkFBaUI7b0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUMzQztnQkFDRCxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztpQkFDbEM7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO2dCQUM3QyxlQUFlO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNyRSxLQUFLLEVBQUUsT0FBTztvQkFDZCxHQUFHLEVBQUUsU0FBUztvQkFDZCxJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM5RCxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUM1QztnQkFDRCxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztpQkFDcEM7YUFDRjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ25FLEtBQUssRUFBRSxPQUFPO2dCQUNkLEdBQUcsRUFBRSxTQUFTO2dCQUNkLElBQUksRUFBRSxTQUFTO2FBQ2hCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0Isa0JBQWtCO1lBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsMkJBQTJCO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ2hELENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHO29CQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ2hELENBQUM7YUFDSDtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUN6RSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7b0JBQ2pDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ3pFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILDJCQUEyQjtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNFLGtEQUFrRDtRQUNsRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUN6RSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7b0JBQ2pDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ3pFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQzFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtvQkFDbEMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDMUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsb0NBQUk7Ozs7O0lBQUosVUFBSyxLQUFZLEVBQUUsSUFBWTtRQUEvQixpQkF3QkM7UUF2QkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1Qix5RUFBeUU7UUFDekUsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxpREFBaUQ7UUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuRCxVQUFVOzs7WUFBQzs7b0JBQ0wsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx1QkFBcUIsS0FBSSxDQUFDLElBQU0sQ0FBQzs7b0JBQ3RGLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQ3pELHVCQUFxQixLQUFJLENBQUMsSUFBSSxXQUFLLEtBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sZUFBVyxDQUN2RjtnQkFDRCxJQUFJLFNBQVMsSUFBSSxZQUFZLEVBQUU7b0JBQzdCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7aUJBQ3BEO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxLQUFZO1FBQ3BCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3hCLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxLQUFZO1FBQ3BCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3hCLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDekUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ2pDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDekUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1NBQzlCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0gsMENBQVU7Ozs7O0lBQVYsVUFBVyxJQUFTOztZQUNkLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFRCwwQ0FBVTs7Ozs7SUFBVixVQUFXLEtBQVcsRUFBRSxLQUFXO1FBQ2pDLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7O1lBR1osSUFBSSxHQUFHLEtBQUs7O1lBQ2QsSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7WUFDbkUsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7O1lBQzVCLEtBQUssR0FBRyxDQUFDO1FBRVgsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNaLCtCQUErQjtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUzRSw2Q0FBNkM7WUFDN0MsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRCxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQseUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFVLEVBQUUsS0FBVzs7O1lBRTNCLElBQUksR0FBRyxFQUFFO1FBRWIsb0NBQW9DO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsb0ZBQW9GO1lBQ3BGLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM5QixJQUFJLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQztZQUVILG1DQUFtQztZQUNuQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsaURBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQXVCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELDBDQUFVOzs7OztJQUFWLFVBQVcsS0FBWSxFQUFFLEdBQVE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQkFBMEI7Ozs7OztJQUMxQiwwQ0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFpQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGlEQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQXppQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUN2QyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLG9CQUFvQixFQUFFOzRCQUM1QixLQUFLLENBQ0gsV0FBVyxFQUNYLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsS0FBSzs2QkFDZixDQUFDLENBQ0g7NEJBQ0QsS0FBSyxDQUNILFNBQVMsRUFDVCxLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLEtBQUs7NkJBQ2YsQ0FBQyxDQUNIOzRCQUNELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQzlELENBQUM7d0JBQ0YsT0FBTyxDQUFDLGtCQUFrQixFQUFFOzRCQUMxQixLQUFLLENBQ0gsV0FBVyxFQUNYLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsS0FBSzs2QkFDZixDQUFDLENBQ0g7NEJBQ0QsS0FBSyxDQUNILFNBQVMsRUFDVCxLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLEtBQUs7NkJBQ2YsQ0FBQyxDQUNIOzRCQUNELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQzlELENBQUM7d0JBQ0YsT0FBTyxDQUFDLGdCQUFnQixFQUFFOzRCQUN4QixLQUFLLENBQ0gsV0FBVyxFQUNYLEtBQUssQ0FBQztnQ0FDSixTQUFTLEVBQUUsZ0JBQWdCOzZCQUM1QixDQUFDLENBQ0g7NEJBQ0QsS0FBSyxDQUNILFNBQVMsRUFDVCxLQUFLLENBQUM7Z0NBQ0osU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQyxDQUNIOzRCQUNELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQzlELENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFLDh1SUF5RFA7aUJBQ0o7Ozs7Z0JBcklRLGdCQUFnQjtnQkFqQnZCLFVBQVU7OzswQkF3SlQsS0FBSzswQkFFTCxLQUFLO3dCQUVMLEtBQUs7c0JBRUwsS0FBSzt5QkFFTCxLQUFLO3dCQUVMLEtBQUs7a0NBRUwsS0FBSzs0QkFFTCxLQUFLOzJCQUdMLE1BQU07O0lBMmFULDRCQUFDO0NBQUEsQUExaUJELElBMGlCQztTQTdiWSxxQkFBcUI7OztJQUNoQyx3Q0FDeUI7O0lBQ3pCLHdDQUN5Qjs7SUFDekIsc0NBQ1k7O0lBQ1osb0NBQ1U7O0lBQ1YsdUNBQ2dCOztJQUNoQixzQ0FDZTs7SUFDZixnREFDeUI7O0lBQ3pCLDBDQUN5Qzs7SUFFekMseUNBQ3NEOztJQUd0RCx5Q0FBd0I7O0lBRXhCLHVDQUFzQjs7SUFFdEIsc0NBQXVCOztJQUV2QixxQ0FBc0I7O0lBQ3RCLHdDQUFhOztJQUViLHNDQUFrQjs7SUFDbEIsc0NBQVk7O0lBQ1osMkNBQW1COztJQUNuQixzQ0FBVzs7SUFDWCx5Q0FBZTs7SUFDZiw4Q0FBc0I7O0lBQ3RCLDBDQUFnQjs7SUFDaEIsK0NBQXVCOztJQUN2Qix5Q0FBYzs7SUFFZCxnREFBZ0Q7O0lBQ2hELDBDQUErQjs7SUFDL0IsMkNBQWdDOztJQUVwQix1Q0FBK0I7Ozs7O0lBQUUsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0RhdGVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlTW9kYWwge1xuICBzdGFydERhdGU6IERhdGU7XG4gIGVuZERhdGU6IERhdGU7XG59XG5leHBvcnQgdHlwZSBtb2RlbFR5cGVzID0gRGF0ZSB8IFJhbmdlTW9kYWw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5IHtcbiAgZGF0ZTogRGF0ZTtcbiAgaXNDdXJyZW50TW9udGg/OiBib29sZWFuO1xuICBpc1RvZGF5PzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgbnVtYmVyPzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSByYW5nZVNlbGVjdE1vZGVzID0gJ3N0YXJ0RGF0ZScgfCAnZW5kRGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtEQVRFX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzdGFydERhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMS4wJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydERhdGUgPD0+IGVuZERhdGUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2VuZERhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydERhdGUgPD0+IGVuZERhdGUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2luZGljYXRvclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXRvcFwiICpuZ0lmPVwiIWlubGluZSAmJiAhcmFuZ2VcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkYXlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8uZGF5XCI+e3toZWFkaW5nPy5kYXl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9udGhcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8ubW9udGhcIj57e2hlYWRpbmc/Lm1vbnRofX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRhdGVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8uZGF0ZVwiPnt7aGVhZGluZz8uZGF0ZX19PC9oMT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ5ZWFyXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmc/LnllYXJcIj57e2hlYWRpbmc/LnllYXJ9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXJhbmdlLXRhYnNcIiAqbmdJZj1cInJhbmdlXCIgW2NsYXNzLndlZWstc2VsZWN0LW1vZGVdPVwid2Vla1JhbmdlU2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZS10YWJcIiAoY2xpY2spPVwidG9nZ2xlUmFuZ2VTZWxlY3QoJ3N0YXJ0RGF0ZScpXCIgW0BzdGFydERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItc3RhcnQtZGF0ZVwiPnt7c2VsZWN0ZWRMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UtdGFiXCIgKGNsaWNrKT1cInRvZ2dsZVJhbmdlU2VsZWN0KCdlbmREYXRlJylcIiBbQGVuZERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItZW5kLWRhdGVcIj57e3NlbGVjdGVkMkxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpbmRpY2F0b3JcIiBbQGluZGljYXRvclN0YXRlXT1cInJhbmdlU2VsZWN0TW9kZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlvdXNcIiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1wcmV2aW91c1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb250aFwiIChjbGljayk9XCJvcGVuKCRldmVudCwgJ21vbnRocycpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaGVhZGVyLW1vbnRoXCI+e3ttb250aExhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieWVhclwiIChjbGljayk9XCJvcGVuKCRldmVudCwgJ3llYXJzJylcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJoZWFkZXIteWVhclwiPnt7bW9udGg/LmdldEZ1bGxZZWFyKCl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItbmV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCBkYXlzXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgW2hpZGRlbl09XCIhKHZpZXc9PSdkYXlzJylcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlzXCIgdGl0bGU9XCJ7e2RheX19XCIgY2xhc3M9XCJ3ZWVrZGF5XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5zdWJzdHIoMCwgMilcIj57e2RheS5zdWJzdHIoMCwgMil9fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgd2VlayBvZiB3ZWVrc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vlay5kYXlzXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5OiBkYXkuaXNUb2RheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm90aW5tb250aCc6IGRheS5kYXRlLmdldE1vbnRoKCkgIT09IHRoaXMubW9udGguZ2V0TW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlcjogaXNGaWxsZXIocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGZpbGw6IGlzU3RhcnRGaWxsKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kZmlsbDogaXNFbmRGaWxsKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdGluZy1yYW5nZSc6IGlzU2VsZWN0aW5nUmFuZ2UocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyLCBob3ZlckRheSwgcmFuZ2VTZWxlY3RNb2RlLCB3ZWVrUmFuZ2VTZWxlY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgKG1vdXNlb3Zlcik9XCJyYW5nZUhvdmVyKCRldmVudCwgZGF5KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkubnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRheVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkubnVtYmVyXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoZGF5LmRhdGUsIHN0YXJ0LCBlbmQpXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIGRheSwgdHJ1ZSlcIj57e2RheS5udW1iZXJ9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCBtb250aHNcIiBbaGlkZGVuXT1cInZpZXcgIT09ICdtb250aHMnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhzO2xldCBpID0gaW5kZXhcIiAoY2xpY2spPVwic2V0TW9udGgoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBpID09PSBzZWxlY3RlZD8uZ2V0TW9udGgoKX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibW9udGhcIj57e21vbnRofX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCB5ZWFyc1wiIFtoaWRkZW5dPVwidmlldyAhPT0gJ3llYXJzJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNcIiAoY2xpY2spPVwic2V0WWVhcih5ZWFyKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVhclwiIFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogeWVhciA9PSBzZWxlY3RlZD8uZ2V0RnVsbFllYXIoKX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwieWVhclwiPnt7eWVhcn19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cInNldFRvZGF5KClcIiBjbGFzcz1cInRvZGF5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItdG9kYXlcIj57eyBsYWJlbHMudG9kYXkgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbWluWWVhcjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGlubGluZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcmFuZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdlZWtSYW5nZVNlbGVjdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiAwIHwgMSB8IDIgfCA2IHwgNSB8IDQgfCAzID0gMDtcbiAgLy8gU2VsZWN0IGNhbGxiYWNrIGZvciBvdXRwdXRcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIC8vIExpc3Qgb2YgYWxsIHRoZSB3ZWVrZGF5c1xuICB3ZWVrZGF5czogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgbW9udGhzXG4gIG1vbnRoczogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgeWVhcnMgKGdlbmVyYXRlZCBpbiBuZ09uSW5pdClcbiAgeWVhcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gRGVmYXVsdCB2aWV3IG1vZGUgKHNlbGVjdCBkYXlzKVxuICB2aWV3OiBzdHJpbmcgPSAnZGF5cyc7XG4gIGhlYWRpbmc6IGFueTtcblxuICBtb2RlbDogbW9kZWxUeXBlcztcbiAgbW9udGg6IERhdGU7XG4gIG1vbnRoTGFiZWw6IHN0cmluZztcbiAgd2Vla3M6IGFueTtcbiAgc2VsZWN0ZWQ6IERhdGU7XG4gIHNlbGVjdGVkTGFiZWw6IHN0cmluZztcbiAgc2VsZWN0ZWQyOiBEYXRlO1xuICBzZWxlY3RlZDJMYWJlbDogc3RyaW5nO1xuICBob3ZlckRheTogYW55O1xuXG4gIHJhbmdlU2VsZWN0TW9kZTogcmFuZ2VTZWxlY3RNb2RlcyA9ICdzdGFydERhdGUnO1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIERldGVybWluZSB0aGUgeWVhciBhcnJheVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBzdGFydCA9IHRoaXMubWluWWVhciA/IE51bWJlcih0aGlzLm1pblllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgLSAxMDA7XG4gICAgbGV0IGVuZCA9IHRoaXMubWF4WWVhciA/IE51bWJlcih0aGlzLm1heFllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgKyAxMDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xuICAgIH1cblxuICAgIC8vIFNldCB3ZWVrZGF5cyAvIG1vbnRoc1xuICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLnNldHVwV2Vla2RheXMoKTtcbiAgICB0aGlzLm1vbnRocyA9IHRoaXMubGFiZWxzLmdldE1vbnRocygpO1xuXG4gICAgLy8gU2V0IGxhYmVsc1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5tb2RlbCwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGxldCB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ3dlZWtSYW5nZVNlbGVjdCddO1xuICAgIGlmIChcbiAgICAgIHdlZWtSYW5nZVNlbGVjdENoYW5nZSAmJlxuICAgICAgd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLnByZXZpb3VzVmFsdWUgJiZcbiAgICAgICF3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UuZmlyc3RDaGFuZ2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2xlYXJSYW5nZSgpO1xuICAgIH1cbiAgICBsZXQgd2Vla1N0YXJ0Q2hhbmdlczogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snd2Vla1N0YXJ0J107XG4gICAgaWYgKHdlZWtTdGFydENoYW5nZXMgJiYgd2Vla1N0YXJ0Q2hhbmdlcy5jdXJyZW50VmFsdWUgIT09IHdlZWtTdGFydENoYW5nZXMucHJldmlvdXNWYWx1ZSAmJiAhd2Vla1N0YXJ0Q2hhbmdlcy5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuc2V0dXBXZWVrZGF5cygpO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMubW9kZWwsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBXZWVrZGF5cygpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHdlZWtkYXlzID0gdGhpcy5sYWJlbHMuZ2V0V2Vla2RheXMoKTtcbiAgICAvLyBXZWVrc3RhcnQgbXVzdCBiZSAwLTYgKFN1bmRheSAtIFNhdHVyZGF5KVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHRoaXMud2Vla1N0YXJ0KSAmJiB0aGlzLndlZWtTdGFydCA+IDAgJiYgdGhpcy53ZWVrU3RhcnQgPD0gNikge1xuICAgICAgbGV0IG5ld1N0YXJ0ID0gd2Vla2RheXMuc3BsaWNlKHRoaXMud2Vla1N0YXJ0KTtcbiAgICAgIHdlZWtkYXlzID0gWy4uLm5ld1N0YXJ0LCAuLi53ZWVrZGF5c107XG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5cztcbiAgfVxuXG4gIGlzU2VsZWN0aW5nUmFuZ2UocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiwgaG92ZXJEYXksIHJhbmdlU2VsZWN0TW9kZSwgd2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgaWYgKHJhbmdlICYmICF3ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgIGxldCBpc1JhbmdlTW9kZUVuZERhdGUgPVxuICAgICAgICByYW5nZVNlbGVjdE1vZGUgPT09ICdlbmREYXRlJyAmJiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIGhvdmVyRGF5KSk7XG4gICAgICBsZXQgaXNSYW5nZU1vZGVTdGFydERhdGUgPVxuICAgICAgICByYW5nZVNlbGVjdE1vZGUgPT09ICdzdGFydERhdGUnICYmIChzZWxlY3RlZCAmJiBzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBob3ZlckRheSkpO1xuICAgICAgbGV0IGlzTm90U2VsZWN0ZWQgPSAhc2VsZWN0ZWQgJiYgc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIGhvdmVyRGF5KTtcbiAgICAgIGxldCBpc05vdFNlbGVjdGVkMiA9IHNlbGVjdGVkICYmICFzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBob3ZlckRheSk7XG4gICAgICByZXR1cm4gaXNOb3RTZWxlY3RlZDIgfHwgaXNOb3RTZWxlY3RlZCB8fCBpc1JhbmdlTW9kZVN0YXJ0RGF0ZSB8fCBpc1JhbmdlTW9kZUVuZERhdGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRW5kRmlsbChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuICFkYXRlRm5zLmlzU2FtZURheShzZWxlY3RlZCwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1N0YXJ0RmlsbChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuICFkYXRlRm5zLmlzU2FtZURheShzZWxlY3RlZCwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQyKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNGaWxsZXIocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMikge1xuICAgIGlmIChyYW5nZSAmJiBzZWxlY3RlZDIgJiYgc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZCkgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkMikpIHx8XG4gICAgICAgIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQpIHx8XG4gICAgICAgIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQyKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTZWxlY3RlZChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBkYXkgJiZcbiAgICAgICAgKChzZWxlY3RlZCAmJlxuICAgICAgICAgIChkYXkuZ2V0RGF0ZSgpID09PSBzZWxlY3RlZC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgIGRheS5nZXRNb250aCgpID09PSBzZWxlY3RlZC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICBkYXkuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSkpIHx8XG4gICAgICAgICAgKHNlbGVjdGVkMiAmJlxuICAgICAgICAgICAgKGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkMi5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgZGF5LmdldE1vbnRoKCkgPT09IHNlbGVjdGVkMi5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZDIuZ2V0RnVsbFllYXIoKSkpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkLmdldERhdGUoKSAmJiBkYXkuZ2V0TW9udGgoKSA9PT0gc2VsZWN0ZWQuZ2V0TW9udGgoKSAmJiBkYXkuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoZGF5LCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzdGFydCkgfHwgZGF0ZUZucy5pc0FmdGVyKGRheSwgZW5kKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoZGF0ZSwgZmlyZUV2ZW50czogYm9vbGVhbiwgbWFya2VkU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoZGF0ZSAmJiBkYXRlLnN0YXJ0RGF0ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jbGVhclJhbmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICB0aGlzLmNsZWFyUmFuZ2UoKTtcbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZTogYW55ID0gZGF0ZSA/IG5ldyBEYXRlKGRhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIHZhbHVlID0gdGhpcy5yZW1vdmVUaW1lKHZhbHVlKTtcbiAgICAgIHRoaXMubW9udGggPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICB0aGlzLm1vbnRoTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLm1vbnRoLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xuICAgICAgc3RhcnQuc2V0RGF0ZSgxKTtcbiAgICAgIHRoaXMucmVtb3ZlVGltZShzdGFydC5zZXREYXRlKDEpKTtcblxuICAgICAgdGhpcy5idWlsZE1vbnRoKHN0YXJ0LCB0aGlzLm1vbnRoKTtcblxuICAgICAgaWYgKG1hcmtlZFNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KG51bGwsIHsgZGF0ZTogdmFsdWUgfSwgZmlyZUV2ZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VG9kYXkoKSB7XG4gICAgbGV0IHRtcCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBjbGVhclJhbmdlKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkMiA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmVuZERhdGU7XG4gIH1cblxuICBzZXRNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLm1vbnRoID8gdGhpcy5tb250aCA6IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRtcCA9IGRhdGVGbnMuc2V0TW9udGgoZGF0ZSwgbW9udGgpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIHRydWUsIGZhbHNlKTtcbiAgICAvLyBHbyBiYWNrIHRvIGRheXNcbiAgICB0aGlzLm9wZW4obnVsbCwgJ2RheXMnKTtcbiAgfVxuXG4gIHNldFllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLm1vbnRoID8gdGhpcy5tb250aCA6IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRtcCA9IGRhdGVGbnMuc2V0WWVhcihkYXRlLCB5ZWFyKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCBmYWxzZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ6IEV2ZW50LCBkYXk6IERheSwgZmlyZUV2ZW50czogYm9vbGVhbikge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgaWYgKHRoaXMud2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKGRheS5kYXRlLCB7IHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnQgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gZGF0ZUZucy5lbmRPZldlZWsoZGF5LmRhdGUsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydCB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0byBmaXJlIHRoaXMsIHNpbmNlIHdlIGRlZmF1bHQgdG8gdGhlIGN1cnJlbnQgd2VlayBzZWxlY3RlZCFcbiAgICAgICAgaWYgKCFmaXJlRXZlbnRzICYmIHRoaXMud2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgICAgICAgdGhpcy5maXJlUmFuZ2VTZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmdlU2VsZWN0TW9kZSA9PT0gJ3N0YXJ0RGF0ZScpIHtcbiAgICAgICAgLy8gU0VUIFNUQVJUIERBVEVcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVGbnMuc3RhcnRPZkRheShkYXkuZGF0ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheS5kYXRlLCB0aGlzLnNlbGVjdGVkMikpIHtcbiAgICAgICAgICAvLyBDTEVBUiBFTkQgREFURVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlU2VsZWN0TW9kZSA9ICdlbmREYXRlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmdlU2VsZWN0TW9kZSA9PT0gJ2VuZERhdGUnKSB7XG4gICAgICAgIC8vIFNFVCBFTkQgREFURVxuICAgICAgICB0aGlzLnNlbGVjdGVkMiA9IGRhdGVGbnMuZW5kT2ZEYXkoZGF5LmRhdGUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheS5kYXRlLCB0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgICAgIC8vIENMRUFSIFNUQVJUIERBVEVcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5zdGFydERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5yYW5nZVNlbGVjdE1vZGUgPSAnc3RhcnREYXRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZGF5LmRhdGU7XG4gICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7XG4gICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUhlYWRpbmcoKTtcbiAgICB9XG4gICAgaWYgKGZpcmVFdmVudHMgJiYgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgLy8gRW1pdCBvdXIgb3V0cHV0XG4gICAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQyKSB7XG4gICAgICAgIHRoaXMuZmlyZVJhbmdlU2VsZWN0KCk7XG4gICAgICAgIC8vIEFsc28sIHVwZGF0ZSB0aGUgbmdNb2RlbFxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh7XG4gICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgIGVuZERhdGU6IHRoaXMuc2VsZWN0ZWQyID8gdGhpcy5zZWxlY3RlZDIgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgICAgZW5kRGF0ZTogdGhpcy5zZWxlY3RlZDIgPyB0aGlzLnNlbGVjdGVkMiA6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFsc28sIHVwZGF0ZSB0aGUgbmdNb2RlbFxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmlyZVJhbmdlU2VsZWN0KCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgc3RhcnQgZGF0ZSBpcyBiZWZvcmUgdGhlIGVuZCBkYXRlXG4gICAgaWYgKGRhdGVGbnMuaXNCZWZvcmUodGhpcy5zZWxlY3RlZCwgdGhpcy5zZWxlY3RlZDIpKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZERhdGU6IHtcbiAgICAgICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkMi5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQyLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3BlbihldmVudDogRXZlbnQsIHR5cGU6IHN0cmluZykge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcblxuICAgIC8vIElmIHRoZXkgY2xpY2sgdGhlIHRvZ2dsZSB0d28gdGltZSBpbiBhIHJvdywgY2xvc2UgaXQgKGdvIGJhY2sgdG8gZGF5cylcbiAgICBpZiAodHlwZSA9PT0gdGhpcy52aWV3KSB7XG4gICAgICB0aGlzLnZpZXcgPSAnZGF5cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlldyA9IHR5cGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRvIHNjcm9sbCB0aGUgc2VsZWN0ZWQgb25lIGludG8gdmlld1xuICAgIGlmICh0aGlzLnZpZXcgPT09ICd5ZWFycycgfHwgdGhpcy52aWV3ID09PSAnbW9udGhzJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuY2FsZW5kYXItY29udGVudC4ke3RoaXMudmlld31gKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5jYWxlbmRhci1jb250ZW50LiR7dGhpcy52aWV3fSAuJHt0aGlzLnZpZXcgPT09ICd5ZWFycycgPyAneWVhcicgOiAnbW9udGgnfS5zZWxlY3RlZGAsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb250YWluZXIgJiYgc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNlbGVjdGVkSXRlbS5vZmZzZXRUb3AgLSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlSGVhZGluZygpO1xuICB9XG5cbiAgcHJldk1vbnRoKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBsZXQgdG1wID0gZGF0ZUZucy5zdWJNb250aHModGhpcy5tb250aCwgMSk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgbGV0IHRtcCA9IGRhdGVGbnMuYWRkTW9udGhzKHRoaXMubW9udGgsIDEpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICB1cGRhdGVIZWFkaW5nKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhlYWRpbmcgPSB7XG4gICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF5OiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IHdlZWtkYXk6ICdsb25nJyB9KSxcbiAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQuZ2V0RGF0ZSgpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0aW1lIGFzcGVjdCBvZiB0aGUgZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB3aXRoIHRpbWUgc3RyaXBwZWQgb3V0XG4gICAqL1xuICByZW1vdmVUaW1lKGRhdGU6IGFueSk6IERhdGUge1xuICAgIGxldCByZXQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICByZXQuc2V0SG91cnMoMTIpO1xuICAgIHJldC5zZXRTZWNvbmRzKDApO1xuICAgIHJldC5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGJ1aWxkTW9udGgoc3RhcnQ6IERhdGUsIG1vbnRoOiBEYXRlKSB7XG4gICAgLy8gUmVzZXQgdGhlIHdlZWtzXG4gICAgdGhpcy53ZWVrcyA9IFtdO1xuXG4gICAgLy8gSG91c2Uga2VlcGluZyB2YXJpYWJsZXMgdG8ga25vdyB3aGVuIHdlIGFyZSBkb25lIGJ1aWxkaW5nIHRoZSBtb250aFxuICAgIGxldCBkb25lID0gZmFsc2UsXG4gICAgICBkYXRlID0gZGF0ZUZucy5zdGFydE9mV2VlayhzdGFydCwgeyB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0IH0pLFxuICAgICAgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGNvdW50ID0gMDtcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgLy8gQnVpbGQgdGhlIGRheXMgZm9yIHRoZSB3ZWVrc1xuICAgICAgdGhpcy53ZWVrcy5wdXNoKHsgZGF5czogdGhpcy5idWlsZFdlZWsobmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpLCBtb250aCkgfSk7XG5cbiAgICAgIC8vIEluY3JlbWVudCB2YXJpYWJsZXMgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgZGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhkYXRlLCA3KTtcbiAgICAgIGRvbmUgPSBjb3VudCsrID4gMiAmJiBtb250aEluZGV4ICE9PSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkV2VlayhkYXRlOiBEYXRlLCBtb250aDogRGF0ZSk6IEFycmF5PE9iamVjdD4ge1xuICAgIC8vIEJ1aWxkIG91dCBvZiB0aGUgZGF5cyBvZiB0aGUgd2Vla1xuICAgIGxldCBkYXlzID0gW107XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGRheXMgb2YgdGhlIHdlZWtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgLy8gUHVzaCBhIHZhcmlhYmxlIG9uIHRoZSBkYXkgYXJyYXkgd2l0aCBsb3RzIG9mIGhlbHBlcnMgdG8gbWFrZSB0aGUgdGVtcGxhdGUgZWFzaWVyXG4gICAgICBkYXlzLnB1c2goe1xuICAgICAgICBuYW1lOiB0aGlzLndlZWtkYXlzW2ldLFxuICAgICAgICBudW1iZXI6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICBpc1RvZGF5OiBkYXRlRm5zLmlzVG9kYXkoZGF0ZSksXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICB9KTtcblxuICAgICAgLy8gSW5jcmVtZW50IGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGRhdGUgPSBkYXRlRm5zLmFkZERheXMoZGF0ZSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheXM7XG4gIH1cblxuICB0b2dnbGVSYW5nZVNlbGVjdChyYW5nZTogcmFuZ2VTZWxlY3RNb2Rlcyk6IHZvaWQge1xuICAgIHRoaXMucmFuZ2VTZWxlY3RNb2RlID0gcmFuZ2U7XG4gIH1cblxuICByYW5nZUhvdmVyKGV2ZW50OiBFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyRGF5ID0gZGF5LmRhdGU7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBtb2RlbFR5cGVzKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmIChIZWxwZXJzLmlzRGF0ZShtb2RlbCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldyhtb2RlbCwgZmFsc2UsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=