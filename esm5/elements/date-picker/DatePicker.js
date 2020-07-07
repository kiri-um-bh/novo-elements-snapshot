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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEdBS1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7OztJQUcvRCwwQkFBMEIsR0FBRztJQUNqQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELGdDQUdDOzs7SUFGQywrQkFBZ0I7O0lBQ2hCLDZCQUFjOzs7OztBQUloQix5QkFNQzs7O0lBTEMsbUJBQVc7O0lBQ1gsNkJBQXlCOztJQUN6QixzQkFBa0I7O0lBQ2xCLG1CQUFjOztJQUNkLHFCQUF5Qjs7QUFLM0I7SUEwSkUsK0JBQW1CLE1BQXdCLEVBQVUsT0FBbUI7UUFBckQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBN0J4RSxjQUFTLEdBQVcsQ0FBQyxDQUFDOztRQUd0QixhQUFRLEdBQXNCLElBQUksWUFBWSxDQUFDLEtB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RUFBRSxnQkFBZ0I7NkJBQzVCLENBQUMsQ0FDSDs0QkFDRCxLQUFLLENBQ0gsU0FBUyxFQUNULEtBQUssQ0FBQztnQ0FDSixTQUFTLEVBQUUsa0JBQWtCOzZCQUM5QixDQUFDLENBQ0g7NEJBQ0QsVUFBVSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDOUQsQ0FBQztxQkFDSDtvQkFDRCxRQUFRLEVBQUUsOHVJQXlEUDtpQkFDSjs7OztnQkFySVEsZ0JBQWdCO2dCQWpCdkIsVUFBVTs7OzBCQXdKVCxLQUFLOzBCQUVMLEtBQUs7d0JBRUwsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7d0JBRUwsS0FBSztrQ0FFTCxLQUFLOzRCQUVMLEtBQUs7MkJBR0wsTUFBTTs7SUEyYVQsNEJBQUM7Q0FBQSxBQTFpQkQsSUEwaUJDO1NBN2JZLHFCQUFxQjs7O0lBQ2hDLHdDQUN5Qjs7SUFDekIsd0NBQ3lCOztJQUN6QixzQ0FDWTs7SUFDWixvQ0FDVTs7SUFDVix1Q0FDZ0I7O0lBQ2hCLHNDQUNlOztJQUNmLGdEQUN5Qjs7SUFDekIsMENBQ3NCOztJQUV0Qix5Q0FDc0Q7O0lBR3RELHlDQUF3Qjs7SUFFeEIsdUNBQXNCOztJQUV0QixzQ0FBdUI7O0lBRXZCLHFDQUFzQjs7SUFDdEIsd0NBQWE7O0lBRWIsc0NBQWtCOztJQUNsQixzQ0FBWTs7SUFDWiwyQ0FBbUI7O0lBQ25CLHNDQUFXOztJQUNYLHlDQUFlOztJQUNmLDhDQUFzQjs7SUFDdEIsMENBQWdCOztJQUNoQiwrQ0FBdUI7O0lBQ3ZCLHlDQUFjOztJQUVkLGdEQUFnRDs7SUFDaEQsMENBQStCOztJQUMvQiwyQ0FBZ0M7O0lBRXBCLHVDQUErQjs7Ozs7SUFBRSx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgREFURV9QSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVBpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VNb2RhbCB7XG4gIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgZW5kRGF0ZTogRGF0ZTtcbn1cbmV4cG9ydCB0eXBlIG1vZGVsVHlwZXMgPSBEYXRlIHwgUmFuZ2VNb2RhbDtcblxuZXhwb3J0IGludGVyZmFjZSBEYXkge1xuICBkYXRlOiBEYXRlO1xuICBpc0N1cnJlbnRNb250aD86IGJvb2xlYW47XG4gIGlzVG9kYXk/OiBib29sZWFuO1xuICBuYW1lPzogc3RyaW5nO1xuICBudW1iZXI/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIHJhbmdlU2VsZWN0TW9kZXMgPSAnc3RhcnREYXRlJyB8ICdlbmREYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0RBVEVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0YXJ0RGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignZW5kRGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW5kaWNhdG9yU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignc3RhcnREYXRlIDw9PiBlbmREYXRlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItdG9wXCIgKm5nSWY9XCIhaW5saW5lICYmICFyYW5nZVwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRheVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nPy5kYXlcIj57e2hlYWRpbmc/LmRheX19PC9oND5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtb250aFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nPy5tb250aFwiPnt7aGVhZGluZz8ubW9udGh9fTwvaDI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGF0ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nPy5kYXRlXCI+e3toZWFkaW5nPy5kYXRlfX08L2gxPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInllYXJcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8ueWVhclwiPnt7aGVhZGluZz8ueWVhcn19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtcmFuZ2UtdGFic1wiICpuZ0lmPVwicmFuZ2VcIiBbY2xhc3Mud2Vlay1zZWxlY3QtbW9kZV09XCJ3ZWVrUmFuZ2VTZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlLXRhYlwiIChjbGljayk9XCJ0b2dnbGVSYW5nZVNlbGVjdCgnc3RhcnREYXRlJylcIiBbQHN0YXJ0RGF0ZVRleHRTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1zdGFydC1kYXRlXCI+e3tzZWxlY3RlZExhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZS10YWJcIiAoY2xpY2spPVwidG9nZ2xlUmFuZ2VTZWxlY3QoJ2VuZERhdGUnKVwiIFtAZW5kRGF0ZVRleHRTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1lbmQtZGF0ZVwiPnt7c2VsZWN0ZWQyTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImluZGljYXRvclwiIFtAaW5kaWNhdG9yU3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aW91c1wiIChjbGljayk9XCJwcmV2TW9udGgoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXByZXZpb3VzXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbnRoXCIgKGNsaWNrKT1cIm9wZW4oJGV2ZW50LCAnbW9udGhzJylcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJoZWFkZXItbW9udGhcIj57e21vbnRoTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ5ZWFyXCIgKGNsaWNrKT1cIm9wZW4oJGV2ZW50LCAneWVhcnMnKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImhlYWRlci15ZWFyXCI+e3ttb250aD8uZ2V0RnVsbFllYXIoKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5leHRcIiAoY2xpY2spPVwibmV4dE1vbnRoKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1uZXh0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IGRheXNcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBbaGlkZGVuXT1cIiEodmlldz09J2RheXMnKVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla2RheXNcIiB0aXRsZT1cInt7ZGF5fX1cIiBjbGFzcz1cIndlZWtkYXlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF5LnN1YnN0cigwLCAyKVwiPnt7ZGF5LnN1YnN0cigwLCAyKX19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXk6IGRheS5pc1RvZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub3Rpbm1vbnRoJzogZGF5LmRhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5tb250aC5nZXRNb250aCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbGVyOiBpc0ZpbGxlcihyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZmlsbDogaXNTdGFydEZpbGwocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRmaWxsOiBpc0VuZEZpbGwocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VsZWN0aW5nLXJhbmdlJzogaXNTZWxlY3RpbmdSYW5nZShyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIsIGhvdmVyRGF5LCByYW5nZVNlbGVjdE1vZGUsIHdlZWtSYW5nZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiAobW91c2VvdmVyKT1cInJhbmdlSG92ZXIoJGV2ZW50LCBkYXkpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGF5XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5udW1iZXJcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChkYXkuZGF0ZSwgc3RhcnQsIGVuZClcIiAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgZGF5LCB0cnVlKVwiPnt7ZGF5Lm51bWJlcn19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IG1vbnRoc1wiIFtoaWRkZW5dPVwidmlldyAhPT0gJ21vbnRocydcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtb250aCBvZiBtb250aHM7bGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZXRNb250aChpKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9udGhcIiBbbmdDbGFzc109XCJ7c2VsZWN0ZWQ6IGkgPT09IHNlbGVjdGVkPy5nZXRNb250aCgpfVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJtb250aFwiPnt7bW9udGh9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IHllYXJzXCIgW2hpZGRlbl09XCJ2aWV3ICE9PSAneWVhcnMnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgeWVhciBvZiB5ZWFyc1wiIChjbGljayk9XCJzZXRZZWFyKHllYXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiB5ZWFyID09IHNlbGVjdGVkPy5nZXRGdWxsWWVhcigpfVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJ5ZWFyXCI+e3t5ZWFyfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwic2V0VG9kYXkoKVwiIGNsYXNzPVwidG9kYXlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci10b2RheVwiPnt7IGxhYmVscy50b2RheSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3RhcnQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGVuZDogRGF0ZTtcbiAgQElucHV0KClcbiAgaW5saW5lOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByYW5nZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd2Vla1JhbmdlU2VsZWN0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICB3ZWVrU3RhcnQ6IG51bWJlciA9IDA7XG4gIC8vIFNlbGVjdCBjYWxsYmFjayBmb3Igb3V0cHV0XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAvLyBMaXN0IG9mIGFsbCB0aGUgd2Vla2RheXNcbiAgd2Vla2RheXM6IHN0cmluZ1tdID0gW107XG4gIC8vIExpc3Qgb2YgYWxsIG1vbnRoc1xuICBtb250aHM6IHN0cmluZ1tdID0gW107XG4gIC8vIExpc3Qgb2YgYWxsIHllYXJzIChnZW5lcmF0ZWQgaW4gbmdPbkluaXQpXG4gIHllYXJzOiBBcnJheTxhbnk+ID0gW107XG4gIC8vIERlZmF1bHQgdmlldyBtb2RlIChzZWxlY3QgZGF5cylcbiAgdmlldzogc3RyaW5nID0gJ2RheXMnO1xuICBoZWFkaW5nOiBhbnk7XG5cbiAgbW9kZWw6IG1vZGVsVHlwZXM7XG4gIG1vbnRoOiBEYXRlO1xuICBtb250aExhYmVsOiBzdHJpbmc7XG4gIHdlZWtzOiBhbnk7XG4gIHNlbGVjdGVkOiBEYXRlO1xuICBzZWxlY3RlZExhYmVsOiBzdHJpbmc7XG4gIHNlbGVjdGVkMjogRGF0ZTtcbiAgc2VsZWN0ZWQyTGFiZWw6IHN0cmluZztcbiAgaG92ZXJEYXk6IGFueTtcblxuICByYW5nZVNlbGVjdE1vZGU6IHJhbmdlU2VsZWN0TW9kZXMgPSAnc3RhcnREYXRlJztcbiAgX29uQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHllYXIgYXJyYXlcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5taW5ZZWFyID8gTnVtYmVyKHRoaXMubWluWWVhcikgOiBub3cuZ2V0RnVsbFllYXIoKSAtIDEwMDtcbiAgICBjb25zdCBlbmQgPSB0aGlzLm1heFllYXIgPyBOdW1iZXIodGhpcy5tYXhZZWFyKSA6IG5vdy5nZXRGdWxsWWVhcigpICsgMTA7XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIHRoaXMueWVhcnMucHVzaChpKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgd2Vla2RheXMgLyBtb250aHNcbiAgICB0aGlzLndlZWtkYXlzID0gdGhpcy5zZXR1cFdlZWtkYXlzKCk7XG4gICAgdGhpcy5tb250aHMgPSB0aGlzLmxhYmVscy5nZXRNb250aHMoKTtcblxuICAgIC8vIFNldCBsYWJlbHNcbiAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5zdGFydERhdGU7XG4gICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmVuZERhdGU7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRoaXMubW9kZWwsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ3dlZWtSYW5nZVNlbGVjdCddO1xuICAgIGlmIChcbiAgICAgIHdlZWtSYW5nZVNlbGVjdENoYW5nZSAmJlxuICAgICAgd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLnByZXZpb3VzVmFsdWUgJiZcbiAgICAgICF3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UuZmlyc3RDaGFuZ2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2xlYXJSYW5nZSgpO1xuICAgIH1cbiAgICBjb25zdCB3ZWVrU3RhcnRDaGFuZ2VzOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWyd3ZWVrU3RhcnQnXTtcbiAgICBpZiAod2Vla1N0YXJ0Q2hhbmdlcyAmJiB3ZWVrU3RhcnRDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAhPT0gd2Vla1N0YXJ0Q2hhbmdlcy5wcmV2aW91c1ZhbHVlICYmICF3ZWVrU3RhcnRDaGFuZ2VzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLndlZWtkYXlzID0gdGhpcy5zZXR1cFdlZWtkYXlzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5tb2RlbCwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBzZXR1cFdlZWtkYXlzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgd2Vla2RheXMgPSB0aGlzLmxhYmVscy5nZXRXZWVrZGF5cygpO1xuICAgIC8vIFdlZWtzdGFydCBtdXN0IGJlIDAtNiAoU3VuZGF5IC0gU2F0dXJkYXkpXG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodGhpcy53ZWVrU3RhcnQpICYmIHRoaXMud2Vla1N0YXJ0ID4gMCAmJiB0aGlzLndlZWtTdGFydCA8PSA2KSB7XG4gICAgICBjb25zdCBuZXdTdGFydCA9IHdlZWtkYXlzLnNwbGljZSh0aGlzLndlZWtTdGFydCk7XG4gICAgICB3ZWVrZGF5cyA9IFsuLi5uZXdTdGFydCwgLi4ud2Vla2RheXNdO1xuICAgIH1cbiAgICByZXR1cm4gd2Vla2RheXM7XG4gIH1cblxuICBpc1NlbGVjdGluZ1JhbmdlKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIsIGhvdmVyRGF5LCByYW5nZVNlbGVjdE1vZGUsIHdlZWtSYW5nZVNlbGVjdCkge1xuICAgIGlmIChyYW5nZSAmJiAhd2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgICBjb25zdCBpc1JhbmdlTW9kZUVuZERhdGUgPVxuICAgICAgICByYW5nZVNlbGVjdE1vZGUgPT09ICdlbmREYXRlJyAmJiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIGhvdmVyRGF5KSk7XG4gICAgICBjb25zdCBpc1JhbmdlTW9kZVN0YXJ0RGF0ZSA9XG4gICAgICAgIHJhbmdlU2VsZWN0TW9kZSA9PT0gJ3N0YXJ0RGF0ZScgJiYgKHNlbGVjdGVkICYmIHNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIGhvdmVyRGF5KSk7XG4gICAgICBjb25zdCBpc05vdFNlbGVjdGVkID0gIXNlbGVjdGVkICYmIHNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBob3ZlckRheSk7XG4gICAgICBjb25zdCBpc05vdFNlbGVjdGVkMiA9IHNlbGVjdGVkICYmICFzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBob3ZlckRheSk7XG4gICAgICByZXR1cm4gaXNOb3RTZWxlY3RlZDIgfHwgaXNOb3RTZWxlY3RlZCB8fCBpc1JhbmdlTW9kZVN0YXJ0RGF0ZSB8fCBpc1JhbmdlTW9kZUVuZERhdGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRW5kRmlsbChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuICFkYXRlRm5zLmlzU2FtZURheShzZWxlY3RlZCwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1N0YXJ0RmlsbChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuICFkYXRlRm5zLmlzU2FtZURheShzZWxlY3RlZCwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzU2FtZURheShkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQyKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNGaWxsZXIocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMikge1xuICAgIGlmIChyYW5nZSAmJiBzZWxlY3RlZDIgJiYgc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZCkgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkMikpIHx8XG4gICAgICAgIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQpIHx8XG4gICAgICAgIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQyKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTZWxlY3RlZChyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBkYXkgJiZcbiAgICAgICAgKChzZWxlY3RlZCAmJlxuICAgICAgICAgIChkYXkuZ2V0RGF0ZSgpID09PSBzZWxlY3RlZC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgIGRheS5nZXRNb250aCgpID09PSBzZWxlY3RlZC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICBkYXkuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSkpIHx8XG4gICAgICAgICAgKHNlbGVjdGVkMiAmJlxuICAgICAgICAgICAgKGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkMi5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgZGF5LmdldE1vbnRoKCkgPT09IHNlbGVjdGVkMi5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZDIuZ2V0RnVsbFllYXIoKSkpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkLmdldERhdGUoKSAmJiBkYXkuZ2V0TW9udGgoKSA9PT0gc2VsZWN0ZWQuZ2V0TW9udGgoKSAmJiBkYXkuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoZGF5LCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzdGFydCkgfHwgZGF0ZUZucy5pc0FmdGVyKGRheSwgZW5kKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoZGF0ZSwgZmlyZUV2ZW50czogYm9vbGVhbiwgbWFya2VkU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoZGF0ZSAmJiBkYXRlLnN0YXJ0RGF0ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jbGVhclJhbmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICB0aGlzLmNsZWFyUmFuZ2UoKTtcbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZTogYW55ID0gZGF0ZSA/IG5ldyBEYXRlKGRhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIHZhbHVlID0gdGhpcy5yZW1vdmVUaW1lKHZhbHVlKTtcbiAgICAgIHRoaXMubW9udGggPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICB0aGlzLm1vbnRoTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLm1vbnRoLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSk7XG4gICAgICBzdGFydC5zZXREYXRlKDEpO1xuICAgICAgdGhpcy5yZW1vdmVUaW1lKHN0YXJ0LnNldERhdGUoMSkpO1xuXG4gICAgICB0aGlzLmJ1aWxkTW9udGgoc3RhcnQsIHRoaXMubW9udGgpO1xuXG4gICAgICBpZiAobWFya2VkU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QobnVsbCwgeyBkYXRlOiB2YWx1ZSB9LCBmaXJlRXZlbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUb2RheSgpIHtcbiAgICBjb25zdCB0bXAgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIHRydWUsIHRydWUpO1xuICAgIC8vIEdvIGJhY2sgdG8gZGF5c1xuICAgIHRoaXMub3BlbihudWxsLCAnZGF5cycpO1xuICB9XG5cbiAgY2xlYXJSYW5nZSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5zdGFydERhdGU7XG4gICAgdGhpcy5zZWxlY3RlZDIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5lbmREYXRlO1xuICB9XG5cbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLm1vbnRoID8gdGhpcy5tb250aCA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG1wID0gZGF0ZUZucy5zZXRNb250aChkYXRlLCBtb250aCk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgdHJ1ZSwgZmFsc2UpO1xuICAgIC8vIEdvIGJhY2sgdG8gZGF5c1xuICAgIHRoaXMub3BlbihudWxsLCAnZGF5cycpO1xuICB9XG5cbiAgc2V0WWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5tb250aCA/IHRoaXMubW9udGggOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRtcCA9IGRhdGVGbnMuc2V0WWVhcihkYXRlLCB5ZWFyKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCBmYWxzZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ6IEV2ZW50LCBkYXk6IERheSwgZmlyZUV2ZW50czogYm9vbGVhbikge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgaWYgKHRoaXMud2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKGRheS5kYXRlLCB7IHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnQgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gZGF0ZUZucy5lbmRPZldlZWsoZGF5LmRhdGUsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydCB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0byBmaXJlIHRoaXMsIHNpbmNlIHdlIGRlZmF1bHQgdG8gdGhlIGN1cnJlbnQgd2VlayBzZWxlY3RlZCFcbiAgICAgICAgaWYgKCFmaXJlRXZlbnRzICYmIHRoaXMud2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgICAgICAgdGhpcy5maXJlUmFuZ2VTZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmdlU2VsZWN0TW9kZSA9PT0gJ3N0YXJ0RGF0ZScpIHtcbiAgICAgICAgLy8gU0VUIFNUQVJUIERBVEVcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVGbnMuc3RhcnRPZkRheShkYXkuZGF0ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheS5kYXRlLCB0aGlzLnNlbGVjdGVkMikpIHtcbiAgICAgICAgICAvLyBDTEVBUiBFTkQgREFURVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlU2VsZWN0TW9kZSA9ICdlbmREYXRlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmdlU2VsZWN0TW9kZSA9PT0gJ2VuZERhdGUnKSB7XG4gICAgICAgIC8vIFNFVCBFTkQgREFURVxuICAgICAgICB0aGlzLnNlbGVjdGVkMiA9IGRhdGVGbnMuZW5kT2ZEYXkoZGF5LmRhdGUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheS5kYXRlLCB0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgICAgIC8vIENMRUFSIFNUQVJUIERBVEVcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5zdGFydERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5yYW5nZVNlbGVjdE1vZGUgPSAnc3RhcnREYXRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZGF5LmRhdGU7XG4gICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7XG4gICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUhlYWRpbmcoKTtcbiAgICB9XG4gICAgaWYgKGZpcmVFdmVudHMgJiYgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgLy8gRW1pdCBvdXIgb3V0cHV0XG4gICAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQyKSB7XG4gICAgICAgIHRoaXMuZmlyZVJhbmdlU2VsZWN0KCk7XG4gICAgICAgIC8vIEFsc28sIHVwZGF0ZSB0aGUgbmdNb2RlbFxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh7XG4gICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgIGVuZERhdGU6IHRoaXMuc2VsZWN0ZWQyID8gdGhpcy5zZWxlY3RlZDIgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgICAgZW5kRGF0ZTogdGhpcy5zZWxlY3RlZDIgPyB0aGlzLnNlbGVjdGVkMiA6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFsc28sIHVwZGF0ZSB0aGUgbmdNb2RlbFxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmlyZVJhbmdlU2VsZWN0KCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgc3RhcnQgZGF0ZSBpcyBiZWZvcmUgdGhlIGVuZCBkYXRlXG4gICAgaWYgKGRhdGVGbnMuaXNCZWZvcmUodGhpcy5zZWxlY3RlZCwgdGhpcy5zZWxlY3RlZDIpKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZERhdGU6IHtcbiAgICAgICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkMi5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQyLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3BlbihldmVudDogRXZlbnQsIHR5cGU6IHN0cmluZykge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcblxuICAgIC8vIElmIHRoZXkgY2xpY2sgdGhlIHRvZ2dsZSB0d28gdGltZSBpbiBhIHJvdywgY2xvc2UgaXQgKGdvIGJhY2sgdG8gZGF5cylcbiAgICBpZiAodHlwZSA9PT0gdGhpcy52aWV3KSB7XG4gICAgICB0aGlzLnZpZXcgPSAnZGF5cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlldyA9IHR5cGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRvIHNjcm9sbCB0aGUgc2VsZWN0ZWQgb25lIGludG8gdmlld1xuICAgIGlmICh0aGlzLnZpZXcgPT09ICd5ZWFycycgfHwgdGhpcy52aWV3ID09PSAnbW9udGhzJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYWxlbmRhci1jb250ZW50LiR7dGhpcy52aWV3fWApO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuY2FsZW5kYXItY29udGVudC4ke3RoaXMudmlld30gLiR7dGhpcy52aWV3ID09PSAneWVhcnMnID8gJ3llYXInIDogJ21vbnRoJ30uc2VsZWN0ZWRgLFxuICAgICAgICApO1xuICAgICAgICBpZiAoY29udGFpbmVyICYmIHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzZWxlY3RlZEl0ZW0ub2Zmc2V0VG9wIC0gMTAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUhlYWRpbmcoKTtcbiAgfVxuXG4gIHByZXZNb250aChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgY29uc3QgdG1wID0gZGF0ZUZucy5zdWJNb250aHModGhpcy5tb250aCwgMSk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgY29uc3QgdG1wID0gZGF0ZUZucy5hZGRNb250aHModGhpcy5tb250aCwgMSk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIHVwZGF0ZUhlYWRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGVhZGluZyA9IHtcbiAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZC5nZXREYXRlKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRpbWUgYXNwZWN0IG9mIHRoZSBkYXRlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHdpdGggdGltZSBzdHJpcHBlZCBvdXRcbiAgICovXG4gIHJlbW92ZVRpbWUoZGF0ZTogYW55KTogRGF0ZSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgcmV0LnNldEhvdXJzKDEyKTtcbiAgICByZXQuc2V0U2Vjb25kcygwKTtcbiAgICByZXQuc2V0TWlsbGlzZWNvbmRzKDApO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBidWlsZE1vbnRoKHN0YXJ0OiBEYXRlLCBtb250aDogRGF0ZSkge1xuICAgIC8vIFJlc2V0IHRoZSB3ZWVrc1xuICAgIHRoaXMud2Vla3MgPSBbXTtcblxuICAgIC8vIEhvdXNlIGtlZXBpbmcgdmFyaWFibGVzIHRvIGtub3cgd2hlbiB3ZSBhcmUgZG9uZSBidWlsZGluZyB0aGUgbW9udGhcbiAgICBsZXQgZG9uZSA9IGZhbHNlLFxuICAgICAgZGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsoc3RhcnQsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydCB9KSxcbiAgICAgIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCksXG4gICAgICBjb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgIC8vIEJ1aWxkIHRoZSBkYXlzIGZvciB0aGUgd2Vla3NcbiAgICAgIHRoaXMud2Vla3MucHVzaCh7IGRheXM6IHRoaXMuYnVpbGRXZWVrKG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKSwgbW9udGgpIH0pO1xuXG4gICAgICAvLyBJbmNyZW1lbnQgdmFyaWFibGVzIGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGRhdGUgPSBkYXRlRm5zLmFkZERheXMoZGF0ZSwgNyk7XG4gICAgICBkb25lID0gY291bnQrKyA+IDIgJiYgbW9udGhJbmRleCAhPT0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICB9XG4gIH1cblxuICBidWlsZFdlZWsoZGF0ZTogRGF0ZSwgbW9udGg6IERhdGUpOiBBcnJheTxPYmplY3Q+IHtcbiAgICAvLyBCdWlsZCBvdXQgb2YgdGhlIGRheXMgb2YgdGhlIHdlZWtcbiAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGRheXMgb2YgdGhlIHdlZWtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgLy8gUHVzaCBhIHZhcmlhYmxlIG9uIHRoZSBkYXkgYXJyYXkgd2l0aCBsb3RzIG9mIGhlbHBlcnMgdG8gbWFrZSB0aGUgdGVtcGxhdGUgZWFzaWVyXG4gICAgICBkYXlzLnB1c2goe1xuICAgICAgICBuYW1lOiB0aGlzLndlZWtkYXlzW2ldLFxuICAgICAgICBudW1iZXI6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICBpc1RvZGF5OiBkYXRlRm5zLmlzVG9kYXkoZGF0ZSksXG4gICAgICAgIGRhdGUsXG4gICAgICB9KTtcblxuICAgICAgLy8gSW5jcmVtZW50IGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGRhdGUgPSBkYXRlRm5zLmFkZERheXMoZGF0ZSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheXM7XG4gIH1cblxuICB0b2dnbGVSYW5nZVNlbGVjdChyYW5nZTogcmFuZ2VTZWxlY3RNb2Rlcyk6IHZvaWQge1xuICAgIHRoaXMucmFuZ2VTZWxlY3RNb2RlID0gcmFuZ2U7XG4gIH1cblxuICByYW5nZUhvdmVyKGV2ZW50OiBFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyRGF5ID0gZGF5LmRhdGU7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBtb2RlbFR5cGVzKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmIChIZWxwZXJzLmlzRGF0ZShtb2RlbCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlldyhtb2RlbCwgZmFsc2UsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=