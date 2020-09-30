/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
            var isRangeModeEndDate = rangeSelectMode === 'endDate' && selected && selected2 && dateFns.isAfter(day, selected2) && dateFns.isBefore(day, hoverDay);
            /** @type {?} */
            var isRangeModeStartDate = rangeSelectMode === 'startDate' && selected && selected2 && dateFns.isBefore(day, selected) && dateFns.isAfter(day, hoverDay);
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
                    day.getDate() === selected.getDate() && day.getMonth() === selected.getMonth() && day.getFullYear() === selected.getFullYear()) ||
                    (selected2 &&
                        day.getDate() === selected2.getDate() &&
                        day.getMonth() === selected2.getMonth() &&
                        day.getFullYear() === selected2.getFullYear())));
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
            var value = void 0;
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
                    template: "\n    <div class=\"calendar\">\n      <div class=\"calendar-top\" *ngIf=\"!inline && !range\">\n        <h4 class=\"day\" [attr.data-automation-id]=\"heading?.day\">{{ heading?.day }}</h4>\n        <h2 class=\"month\" [attr.data-automation-id]=\"heading?.month\">{{ heading?.month }}</h2>\n        <h1 class=\"date\" [attr.data-automation-id]=\"heading?.date\">{{ heading?.date }}</h1>\n        <h3 class=\"year\" [attr.data-automation-id]=\"heading?.year\">{{ heading?.year }}</h3>\n      </div>\n      <div class=\"date-range-tabs\" *ngIf=\"range\" [class.week-select-mode]=\"weekRangeSelect\">\n        <span\n          class=\"range-tab\"\n          (click)=\"toggleRangeSelect('startDate')\"\n          [@startDateTextState]=\"rangeSelectMode\"\n          data-automation-id=\"calendar-start-date\"\n          >{{ selectedLabel }}</span\n        >\n        <span\n          class=\"range-tab\"\n          (click)=\"toggleRangeSelect('endDate')\"\n          [@endDateTextState]=\"rangeSelectMode\"\n          data-automation-id=\"calendar-end-date\"\n          >{{ selected2Label }}</span\n        >\n        <i class=\"indicator\" [@indicatorState]=\"rangeSelectMode\"></i>\n      </div>\n      <div class=\"calendar-header\">\n        <span class=\"previous\" (click)=\"prevMonth($event)\" data-automation-id=\"calendar-previous\"></span>\n        <span class=\"heading\">\n          <span class=\"month\" (click)=\"open($event, 'months')\" data-automation-id=\"header-month\">{{ monthLabel }}</span>\n          <span class=\"year\" (click)=\"open($event, 'years')\" data-automation-id=\"header-year\">{{ month?.getFullYear() }}</span>\n        </span>\n        <span class=\"next\" (click)=\"nextMonth($event)\" data-automation-id=\"calendar-next\"></span>\n      </div>\n      <table class=\"calendar-content days\" cellspacing=\"0\" cellpadding=\"0\" [hidden]=\"!(view == 'days')\">\n        <thead>\n          <tr>\n            <th *ngFor=\"let day of weekdays\" title=\"{{ day }}\" class=\"weekday\" [attr.data-automation-id]=\"day.substr(0, 2)\">\n              {{ day.substr(0, 2) }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let week of weeks\">\n            <td\n              *ngFor=\"let day of week.days\"\n              [ngClass]=\"{\n                today: day.isToday,\n                notinmonth: day.date.getMonth() !== this.month.getMonth(),\n                selected: isSelected(range, day.date, selected, selected2),\n                filler: isFiller(range, day.date, selected, selected2),\n                startfill: isStartFill(range, day.date, selected, selected2),\n                endfill: isEndFill(range, day.date, selected, selected2),\n                'selecting-range': isSelectingRange(range, day.date, selected, selected2, hoverDay, rangeSelectMode, weekRangeSelect)\n              }\"\n              (mouseover)=\"rangeHover($event, day)\"\n              [attr.data-automation-id]=\"day.number\"\n            >\n              <button\n                class=\"day\"\n                [attr.data-automation-id]=\"day.number\"\n                [disabled]=\"isDisabled(day.date, start, end)\"\n                (click)=\"select($event, day, true)\"\n              >\n                {{ day.number }}\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <section class=\"calendar-content months\" [hidden]=\"view !== 'months'\">\n        <div *ngFor=\"let month of months; let i = index\" (click)=\"setMonth(i)\">\n          <div class=\"month\" [ngClass]=\"{ selected: i === selected?.getMonth() }\" [attr.data-automation-id]=\"month\">{{ month }}</div>\n        </div>\n      </section>\n      <section class=\"calendar-content years\" [hidden]=\"view !== 'years'\">\n        <div *ngFor=\"let year of years\" (click)=\"setYear(year)\">\n          <div class=\"year\" [ngClass]=\"{ selected: year == selected?.getFullYear() }\" [attr.data-automation-id]=\"year\">{{ year }}</div>\n        </div>\n      </section>\n      <div class=\"calendar-footer\">\n        <span (click)=\"setToday()\" class=\"today\" data-automation-id=\"calendar-today\">{{ labels.today }}</span>\n      </div>\n    </div>\n  "
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
        onSelect: [{ type: Output }],
        template: [{ type: ViewChild, args: [TemplateRef,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsV0FBVyxHQUlaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVqRixPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7QUFFcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7SUFHL0QsMEJBQTBCLEdBQUc7SUFDakMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDO0lBQ3BELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7QUFFRCxnQ0FJQzs7O0lBSEMsK0JBQWdCOztJQUNoQiw2QkFBYzs7SUFDZCxrQ0FBb0I7Ozs7O0FBSXRCLHlCQU1DOzs7SUFMQyxtQkFBVzs7SUFDWCw2QkFBeUI7O0lBQ3pCLHNCQUFrQjs7SUFDbEIsbUJBQWM7O0lBQ2QscUJBQXlCOztBQUszQjtJQXNMRSwrQkFBbUIsTUFBd0IsRUFBVSxPQUFtQjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUEvQnhFLGNBQVMsR0FBVyxDQUFDLENBQUM7O1FB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K0NBQXVCOztJQUN2Qix5Q0FBYzs7SUFFZCxnREFBZ0Q7O0lBQ2hELDBDQUErQjs7SUFDL0IsMkNBQWdDOztJQUVwQix1Q0FBK0I7Ozs7O0lBQUUsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0RhdGVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlTW9kYWwge1xuICBzdGFydERhdGU6IERhdGU7XG4gIGVuZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkRGF0ZT86IERhdGU7XG59XG5leHBvcnQgdHlwZSBtb2RlbFR5cGVzID0gRGF0ZSB8IFJhbmdlTW9kYWw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5IHtcbiAgZGF0ZTogRGF0ZTtcbiAgaXNDdXJyZW50TW9udGg/OiBib29sZWFuO1xuICBpc1RvZGF5PzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgbnVtYmVyPzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSByYW5nZVNlbGVjdE1vZGVzID0gJ3N0YXJ0RGF0ZScgfCAnZW5kRGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtEQVRFX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzdGFydERhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMS4wJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydERhdGUgPD0+IGVuZERhdGUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2VuZERhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydERhdGUgPD0+IGVuZERhdGUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2luZGljYXRvclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3N0YXJ0RGF0ZSA8PT4gZW5kRGF0ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItdG9wXCIgKm5nSWY9XCIhaW5saW5lICYmICFyYW5nZVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJkYXlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8uZGF5XCI+e3sgaGVhZGluZz8uZGF5IH19PC9oND5cbiAgICAgICAgPGgyIGNsYXNzPVwibW9udGhcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8ubW9udGhcIj57eyBoZWFkaW5nPy5tb250aCB9fTwvaDI+XG4gICAgICAgIDxoMSBjbGFzcz1cImRhdGVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZz8uZGF0ZVwiPnt7IGhlYWRpbmc/LmRhdGUgfX08L2gxPlxuICAgICAgICA8aDMgY2xhc3M9XCJ5ZWFyXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmc/LnllYXJcIj57eyBoZWFkaW5nPy55ZWFyIH19PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtcmFuZ2UtdGFic1wiICpuZ0lmPVwicmFuZ2VcIiBbY2xhc3Mud2Vlay1zZWxlY3QtbW9kZV09XCJ3ZWVrUmFuZ2VTZWxlY3RcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cInJhbmdlLXRhYlwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVJhbmdlU2VsZWN0KCdzdGFydERhdGUnKVwiXG4gICAgICAgICAgW0BzdGFydERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1zdGFydC1kYXRlXCJcbiAgICAgICAgICA+e3sgc2VsZWN0ZWRMYWJlbCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJyYW5nZS10YWJcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVSYW5nZVNlbGVjdCgnZW5kRGF0ZScpXCJcbiAgICAgICAgICBbQGVuZERhdGVUZXh0U3RhdGVdPVwicmFuZ2VTZWxlY3RNb2RlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1lbmQtZGF0ZVwiXG4gICAgICAgICAgPnt7IHNlbGVjdGVkMkxhYmVsIH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpbmRpY2F0b3JcIiBbQGluZGljYXRvclN0YXRlXT1cInJhbmdlU2VsZWN0TW9kZVwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItcHJldmlvdXNcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9udGhcIiAoY2xpY2spPVwib3BlbigkZXZlbnQsICdtb250aHMnKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImhlYWRlci1tb250aFwiPnt7IG1vbnRoTGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ5ZWFyXCIgKGNsaWNrKT1cIm9wZW4oJGV2ZW50LCAneWVhcnMnKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImhlYWRlci15ZWFyXCI+e3sgbW9udGg/LmdldEZ1bGxZZWFyKCkgfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItbmV4dFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCBkYXlzXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgW2hpZGRlbl09XCIhKHZpZXcgPT0gJ2RheXMnKVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla2RheXNcIiB0aXRsZT1cInt7IGRheSB9fVwiIGNsYXNzPVwid2Vla2RheVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkuc3Vic3RyKDAsIDIpXCI+XG4gICAgICAgICAgICAgIHt7IGRheS5zdWJzdHIoMCwgMikgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgd2VlayBvZiB3ZWVrc1wiPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vlay5kYXlzXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgIHRvZGF5OiBkYXkuaXNUb2RheSxcbiAgICAgICAgICAgICAgICBub3Rpbm1vbnRoOiBkYXkuZGF0ZS5nZXRNb250aCgpICE9PSB0aGlzLm1vbnRoLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSxcbiAgICAgICAgICAgICAgICBmaWxsZXI6IGlzRmlsbGVyKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgc3RhcnRmaWxsOiBpc1N0YXJ0RmlsbChyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgIGVuZGZpbGw6IGlzRW5kRmlsbChyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgICdzZWxlY3RpbmctcmFuZ2UnOiBpc1NlbGVjdGluZ1JhbmdlKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiwgaG92ZXJEYXksIHJhbmdlU2VsZWN0TW9kZSwgd2Vla1JhbmdlU2VsZWN0KVxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgKG1vdXNlb3Zlcik9XCJyYW5nZUhvdmVyKCRldmVudCwgZGF5KVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkubnVtYmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGF5XCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF5Lm51bWJlclwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoZGF5LmRhdGUsIHN0YXJ0LCBlbmQpXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgZGF5LCB0cnVlKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBkYXkubnVtYmVyIH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCBtb250aHNcIiBbaGlkZGVuXT1cInZpZXcgIT09ICdtb250aHMnXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG1vbnRoIG9mIG1vbnRoczsgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZXRNb250aChpKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb250aFwiIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IGkgPT09IHNlbGVjdGVkPy5nZXRNb250aCgpIH1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibW9udGhcIj57eyBtb250aCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCB5ZWFyc1wiIFtoaWRkZW5dPVwidmlldyAhPT0gJ3llYXJzJ1wiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHllYXJzXCIgKGNsaWNrKT1cInNldFllYXIoeWVhcilcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVhclwiIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHllYXIgPT0gc2VsZWN0ZWQ/LmdldEZ1bGxZZWFyKCkgfVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJ5ZWFyXCI+e3sgeWVhciB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1mb290ZXJcIj5cbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cInNldFRvZGF5KClcIiBjbGFzcz1cInRvZGF5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItdG9kYXlcIj57eyBsYWJlbHMudG9kYXkgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbWluWWVhcjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBEYXRlO1xuICBASW5wdXQoKVxuICBlbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGlubGluZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcmFuZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdlZWtSYW5nZVNlbGVjdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiBudW1iZXIgPSAwO1xuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIExpc3Qgb2YgYWxsIHRoZSB3ZWVrZGF5c1xuICB3ZWVrZGF5czogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgbW9udGhzXG4gIG1vbnRoczogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgeWVhcnMgKGdlbmVyYXRlZCBpbiBuZ09uSW5pdClcbiAgeWVhcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gRGVmYXVsdCB2aWV3IG1vZGUgKHNlbGVjdCBkYXlzKVxuICB2aWV3OiBzdHJpbmcgPSAnZGF5cyc7XG4gIGhlYWRpbmc6IGFueTtcblxuICBtb2RlbDogbW9kZWxUeXBlcztcbiAgbW9udGg6IERhdGU7XG4gIG1vbnRoTGFiZWw6IHN0cmluZztcbiAgd2Vla3M6IGFueTtcbiAgc2VsZWN0ZWQ6IERhdGU7XG4gIHNlbGVjdGVkTGFiZWw6IHN0cmluZztcbiAgc2VsZWN0ZWQyOiBEYXRlO1xuICBzZWxlY3RlZDJMYWJlbDogc3RyaW5nO1xuICBob3ZlckRheTogYW55O1xuXG4gIHJhbmdlU2VsZWN0TW9kZTogcmFuZ2VTZWxlY3RNb2RlcyA9ICdzdGFydERhdGUnO1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIERldGVybWluZSB0aGUgeWVhciBhcnJheVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBzdGFydCA9IHRoaXMubWluWWVhciA/IE51bWJlcih0aGlzLm1pblllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgLSAxMDA7XG4gICAgbGV0IGVuZCA9IHRoaXMubWF4WWVhciA/IE51bWJlcih0aGlzLm1heFllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgKyAxMDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xuICAgIH1cblxuICAgIC8vIFNldCB3ZWVrZGF5cyAvIG1vbnRoc1xuICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLnNldHVwV2Vla2RheXMoKTtcbiAgICB0aGlzLm1vbnRocyA9IHRoaXMubGFiZWxzLmdldE1vbnRocygpO1xuXG4gICAgLy8gU2V0IGxhYmVsc1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5tb2RlbCwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGxldCB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ3dlZWtSYW5nZVNlbGVjdCddO1xuICAgIGlmIChcbiAgICAgIHdlZWtSYW5nZVNlbGVjdENoYW5nZSAmJlxuICAgICAgd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gd2Vla1JhbmdlU2VsZWN0Q2hhbmdlLnByZXZpb3VzVmFsdWUgJiZcbiAgICAgICF3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UuZmlyc3RDaGFuZ2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2xlYXJSYW5nZSgpO1xuICAgIH1cbiAgICBsZXQgd2Vla1N0YXJ0Q2hhbmdlczogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snd2Vla1N0YXJ0J107XG4gICAgaWYgKHdlZWtTdGFydENoYW5nZXMgJiYgd2Vla1N0YXJ0Q2hhbmdlcy5jdXJyZW50VmFsdWUgIT09IHdlZWtTdGFydENoYW5nZXMucHJldmlvdXNWYWx1ZSAmJiAhd2Vla1N0YXJ0Q2hhbmdlcy5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuc2V0dXBXZWVrZGF5cygpO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMubW9kZWwsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBXZWVrZGF5cygpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHdlZWtkYXlzID0gdGhpcy5sYWJlbHMuZ2V0V2Vla2RheXMoKTtcbiAgICAvLyBXZWVrc3RhcnQgbXVzdCBiZSAwLTYgKFN1bmRheSAtIFNhdHVyZGF5KVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHRoaXMud2Vla1N0YXJ0KSAmJiB0aGlzLndlZWtTdGFydCA+IDAgJiYgdGhpcy53ZWVrU3RhcnQgPD0gNikge1xuICAgICAgbGV0IG5ld1N0YXJ0ID0gd2Vla2RheXMuc3BsaWNlKHRoaXMud2Vla1N0YXJ0KTtcbiAgICAgIHdlZWtkYXlzID0gWy4uLm5ld1N0YXJ0LCAuLi53ZWVrZGF5c107XG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5cztcbiAgfVxuXG4gIGlzU2VsZWN0aW5nUmFuZ2UocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiwgaG92ZXJEYXksIHJhbmdlU2VsZWN0TW9kZSwgd2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgaWYgKHJhbmdlICYmICF3ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgIGxldCBpc1JhbmdlTW9kZUVuZERhdGUgPVxuICAgICAgICByYW5nZVNlbGVjdE1vZGUgPT09ICdlbmREYXRlJyAmJiBzZWxlY3RlZCAmJiBzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgaG92ZXJEYXkpO1xuICAgICAgbGV0IGlzUmFuZ2VNb2RlU3RhcnREYXRlID1cbiAgICAgICAgcmFuZ2VTZWxlY3RNb2RlID09PSAnc3RhcnREYXRlJyAmJiBzZWxlY3RlZCAmJiBzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBob3ZlckRheSk7XG4gICAgICBsZXQgaXNOb3RTZWxlY3RlZCA9ICFzZWxlY3RlZCAmJiBzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIHNlbGVjdGVkMikgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgaG92ZXJEYXkpO1xuICAgICAgbGV0IGlzTm90U2VsZWN0ZWQyID0gc2VsZWN0ZWQgJiYgIXNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZCkgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIGhvdmVyRGF5KTtcbiAgICAgIHJldHVybiBpc05vdFNlbGVjdGVkMiB8fCBpc05vdFNlbGVjdGVkIHx8IGlzUmFuZ2VNb2RlU3RhcnREYXRlIHx8IGlzUmFuZ2VNb2RlRW5kRGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNFbmRGaWxsKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIpIHtcbiAgICBpZiAocmFuZ2UgJiYgc2VsZWN0ZWQyICYmIHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gIWRhdGVGbnMuaXNTYW1lRGF5KHNlbGVjdGVkLCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU3RhcnRGaWxsKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIpIHtcbiAgICBpZiAocmFuZ2UgJiYgc2VsZWN0ZWQyICYmIHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gIWRhdGVGbnMuaXNTYW1lRGF5KHNlbGVjdGVkLCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzZWxlY3RlZDIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0ZpbGxlcihyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGRhdGVGbnMuaXNBZnRlcihkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQyKSkgfHxcbiAgICAgICAgZGF0ZUZucy5pc1NhbWVEYXkoZGF5LCBzZWxlY3RlZCkgfHxcbiAgICAgICAgZGF0ZUZucy5pc1NhbWVEYXkoZGF5LCBzZWxlY3RlZDIpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1NlbGVjdGVkKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIpIHtcbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGRheSAmJlxuICAgICAgICAoKHNlbGVjdGVkICYmXG4gICAgICAgICAgZGF5LmdldERhdGUoKSA9PT0gc2VsZWN0ZWQuZ2V0RGF0ZSgpICYmIGRheS5nZXRNb250aCgpID09PSBzZWxlY3RlZC5nZXRNb250aCgpICYmIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZC5nZXRGdWxsWWVhcigpKSB8fFxuICAgICAgICAgIChzZWxlY3RlZDIgJiZcbiAgICAgICAgICAgIGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkMi5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgZGF5LmdldE1vbnRoKCkgPT09IHNlbGVjdGVkMi5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZDIuZ2V0RnVsbFllYXIoKSkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGF5LmdldERhdGUoKSA9PT0gc2VsZWN0ZWQuZ2V0RGF0ZSgpICYmIGRheS5nZXRNb250aCgpID09PSBzZWxlY3RlZC5nZXRNb250aCgpICYmIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZC5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgaXNEaXNhYmxlZChkYXksIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5pc0JlZm9yZShkYXksIHN0YXJ0KSB8fCBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBlbmQpO1xuICB9XG5cbiAgdXBkYXRlVmlldyhkYXRlLCBmaXJlRXZlbnRzOiBib29sZWFuLCBtYXJrZWRTZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChkYXRlICYmIGRhdGUuc3RhcnREYXRlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmNsZWFyUmFuZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSYW5nZSgpO1xuICAgICAgfVxuICAgICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgICBpZiAoZGF0ZSAmJiBkYXRlLnNlbGVjdGVkRGF0ZSkge1xuICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKGRhdGUuc2VsZWN0ZWREYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGF0ZSA/IG5ldyBEYXRlKGRhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdGhpcy5yZW1vdmVUaW1lKHZhbHVlKTtcbiAgICAgIHRoaXMubW9udGggPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICB0aGlzLm1vbnRoTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLm1vbnRoLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xuICAgICAgc3RhcnQuc2V0RGF0ZSgxKTtcbiAgICAgIHRoaXMucmVtb3ZlVGltZShzdGFydC5zZXREYXRlKDEpKTtcblxuICAgICAgdGhpcy5idWlsZE1vbnRoKHN0YXJ0LCB0aGlzLm1vbnRoKTtcblxuICAgICAgaWYgKG1hcmtlZFNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KG51bGwsIHsgZGF0ZTogdmFsdWUgfSwgZmlyZUV2ZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VG9kYXkoKSB7XG4gICAgbGV0IHRtcCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBjbGVhclJhbmdlKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkMiA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmVuZERhdGU7XG4gIH1cblxuICBzZXRNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLm1vbnRoID8gdGhpcy5tb250aCA6IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRtcCA9IGRhdGVGbnMuc2V0TW9udGgoZGF0ZSwgbW9udGgpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIHRydWUsIGZhbHNlKTtcbiAgICAvLyBHbyBiYWNrIHRvIGRheXNcbiAgICB0aGlzLm9wZW4obnVsbCwgJ2RheXMnKTtcbiAgfVxuXG4gIHNldFllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLm1vbnRoID8gdGhpcy5tb250aCA6IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRtcCA9IGRhdGVGbnMuc2V0WWVhcihkYXRlLCB5ZWFyKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCBmYWxzZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ6IEV2ZW50LCBkYXk6IERheSwgZmlyZUV2ZW50czogYm9vbGVhbikge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgaWYgKHRoaXMud2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKGRheS5kYXRlLCB7IHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnQgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gZGF0ZUZucy5lbmRPZldlZWsoZGF5LmRhdGUsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydCB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0byBmaXJlIHRoaXMsIHNpbmNlIHdlIGRlZmF1bHQgdG8gdGhlIGN1cnJlbnQgd2VlayBzZWxlY3RlZCFcbiAgICAgICAgaWYgKCFmaXJlRXZlbnRzICYmIHRoaXMud2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgICAgICAgdGhpcy5maXJlUmFuZ2VTZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmdlU2VsZWN0TW9kZSA9PT0gJ3N0YXJ0RGF0ZScpIHtcbiAgICAgICAgLy8gU0VUIFNUQVJUIERBVEVcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVGbnMuc3RhcnRPZkRheShkYXkuZGF0ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheS5kYXRlLCB0aGlzLnNlbGVjdGVkMikpIHtcbiAgICAgICAgICAvLyBDTEVBUiBFTkQgREFURVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlU2VsZWN0TW9kZSA9ICdlbmREYXRlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmdlU2VsZWN0TW9kZSA9PT0gJ2VuZERhdGUnKSB7XG4gICAgICAgIC8vIFNFVCBFTkQgREFURVxuICAgICAgICB0aGlzLnNlbGVjdGVkMiA9IGRhdGVGbnMuZW5kT2ZEYXkoZGF5LmRhdGUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZDIsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheS5kYXRlLCB0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgICAgIC8vIENMRUFSIFNUQVJUIERBVEVcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5zdGFydERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5yYW5nZVNlbGVjdE1vZGUgPSAnc3RhcnREYXRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZGF5LmRhdGU7XG4gICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7XG4gICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUhlYWRpbmcoKTtcbiAgICB9XG4gICAgaWYgKGZpcmVFdmVudHMgJiYgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgLy8gRW1pdCBvdXIgb3V0cHV0XG4gICAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQyKSB7XG4gICAgICAgIHRoaXMuZmlyZVJhbmdlU2VsZWN0KCk7XG4gICAgICAgIC8vIEFsc28sIHVwZGF0ZSB0aGUgbmdNb2RlbFxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh7XG4gICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgIGVuZERhdGU6IHRoaXMuc2VsZWN0ZWQyID8gdGhpcy5zZWxlY3RlZDIgOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogZGF5LmRhdGUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgICBlbmREYXRlOiB0aGlzLnNlbGVjdGVkMiA/IHRoaXMuc2VsZWN0ZWQyIDogbnVsbCxcbiAgICAgICAgICBzZWxlY3RlZERhdGU6IGRheS5kYXRlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdC5uZXh0KHtcbiAgICAgICAgICBtb250aDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgd2Vla2RheTogJ2xvbmcnIH0pLFxuICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBbHNvLCB1cGRhdGUgdGhlIG5nTW9kZWxcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpcmVSYW5nZVNlbGVjdCgpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHN0YXJ0IGRhdGUgaXMgYmVmb3JlIHRoZSBlbmQgZGF0ZVxuICAgIGlmIChkYXRlRm5zLmlzQmVmb3JlKHRoaXMuc2VsZWN0ZWQsIHRoaXMuc2VsZWN0ZWQyKSkge1xuICAgICAgdGhpcy5vblNlbGVjdC5uZXh0KHtcbiAgICAgICAgc3RhcnREYXRlOiB7XG4gICAgICAgICAgbW9udGg6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgZGF5OiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IHdlZWtkYXk6ICdsb25nJyB9KSxcbiAgICAgICAgICBkYXRlOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICB9LFxuICAgICAgICBlbmREYXRlOiB7XG4gICAgICAgICAgbW9udGg6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQyLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZDIuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICBkYXk6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQyLCB7IHdlZWtkYXk6ICdsb25nJyB9KSxcbiAgICAgICAgICBkYXRlOiB0aGlzLnNlbGVjdGVkMixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oZXZlbnQ6IEV2ZW50LCB0eXBlOiBzdHJpbmcpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG5cbiAgICAvLyBJZiB0aGV5IGNsaWNrIHRoZSB0b2dnbGUgdHdvIHRpbWUgaW4gYSByb3csIGNsb3NlIGl0IChnbyBiYWNrIHRvIGRheXMpXG4gICAgaWYgKHR5cGUgPT09IHRoaXMudmlldykge1xuICAgICAgdGhpcy52aWV3ID0gJ2RheXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXcgPSB0eXBlO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0byBzY3JvbGwgdGhlIHNlbGVjdGVkIG9uZSBpbnRvIHZpZXdcbiAgICBpZiAodGhpcy52aWV3ID09PSAneWVhcnMnIHx8IHRoaXMudmlldyA9PT0gJ21vbnRocycpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmNhbGVuZGFyLWNvbnRlbnQuJHt0aGlzLnZpZXd9YCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuY2FsZW5kYXItY29udGVudC4ke3RoaXMudmlld30gLiR7dGhpcy52aWV3ID09PSAneWVhcnMnID8gJ3llYXInIDogJ21vbnRoJ30uc2VsZWN0ZWRgLFxuICAgICAgICApO1xuICAgICAgICBpZiAoY29udGFpbmVyICYmIHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzZWxlY3RlZEl0ZW0ub2Zmc2V0VG9wIC0gMTAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUhlYWRpbmcoKTtcbiAgfVxuXG4gIHByZXZNb250aChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgbGV0IHRtcCA9IGRhdGVGbnMuc3ViTW9udGhzKHRoaXMubW9udGgsIDEpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBuZXh0TW9udGgoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGxldCB0bXAgPSBkYXRlRm5zLmFkZE1vbnRocyh0aGlzLm1vbnRoLCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgdXBkYXRlSGVhZGluZygpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oZWFkaW5nID0ge1xuICAgICAgbW9udGg6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICBkYXRlOiB0aGlzLnNlbGVjdGVkLmdldERhdGUoKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdGltZSBhc3BlY3Qgb2YgdGhlIGRhdGVcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgd2l0aCB0aW1lIHN0cmlwcGVkIG91dFxuICAgKi9cbiAgcmVtb3ZlVGltZShkYXRlOiBhbnkpOiBEYXRlIHtcbiAgICBsZXQgcmV0ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgcmV0LnNldEhvdXJzKDEyKTtcbiAgICByZXQuc2V0U2Vjb25kcygwKTtcbiAgICByZXQuc2V0TWlsbGlzZWNvbmRzKDApO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBidWlsZE1vbnRoKHN0YXJ0OiBEYXRlLCBtb250aDogRGF0ZSkge1xuICAgIC8vIFJlc2V0IHRoZSB3ZWVrc1xuICAgIHRoaXMud2Vla3MgPSBbXTtcblxuICAgIC8vIEhvdXNlIGtlZXBpbmcgdmFyaWFibGVzIHRvIGtub3cgd2hlbiB3ZSBhcmUgZG9uZSBidWlsZGluZyB0aGUgbW9udGhcbiAgICBsZXQgZG9uZSA9IGZhbHNlLFxuICAgICAgZGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsoc3RhcnQsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydCB9KSxcbiAgICAgIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCksXG4gICAgICBjb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgIC8vIEJ1aWxkIHRoZSBkYXlzIGZvciB0aGUgd2Vla3NcbiAgICAgIHRoaXMud2Vla3MucHVzaCh7IGRheXM6IHRoaXMuYnVpbGRXZWVrKG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKSwgbW9udGgpIH0pO1xuXG4gICAgICAvLyBJbmNyZW1lbnQgdmFyaWFibGVzIGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGRhdGUgPSBkYXRlRm5zLmFkZERheXMoZGF0ZSwgNyk7XG4gICAgICBkb25lID0gY291bnQrKyA+IDIgJiYgbW9udGhJbmRleCAhPT0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICB9XG4gIH1cblxuICBidWlsZFdlZWsoZGF0ZTogRGF0ZSwgbW9udGg6IERhdGUpOiBBcnJheTxPYmplY3Q+IHtcbiAgICAvLyBCdWlsZCBvdXQgb2YgdGhlIGRheXMgb2YgdGhlIHdlZWtcbiAgICBsZXQgZGF5cyA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBkYXlzIG9mIHRoZSB3ZWVrXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIC8vIFB1c2ggYSB2YXJpYWJsZSBvbiB0aGUgZGF5IGFycmF5IHdpdGggbG90cyBvZiBoZWxwZXJzIHRvIG1ha2UgdGhlIHRlbXBsYXRlIGVhc2llclxuICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogdGhpcy53ZWVrZGF5c1tpXSxcbiAgICAgICAgbnVtYmVyOiBkYXRlLmdldERhdGUoKSxcbiAgICAgICAgaXNUb2RheTogZGF0ZUZucy5pc1RvZGF5KGRhdGUpLFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEluY3JlbWVudCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICBkYXRlID0gZGF0ZUZucy5hZGREYXlzKGRhdGUsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlzO1xuICB9XG5cbiAgdG9nZ2xlUmFuZ2VTZWxlY3QocmFuZ2U6IHJhbmdlU2VsZWN0TW9kZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJhbmdlU2VsZWN0TW9kZSA9IHJhbmdlO1xuICB9XG5cbiAgcmFuZ2VIb3ZlcihldmVudDogRXZlbnQsIGRheTogRGF5KTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlckRheSA9IGRheS5kYXRlO1xuICB9XG5cbiAgLy8gVmFsdWVBY2Nlc3NvciBGdW5jdGlvbnNcbiAgd3JpdGVWYWx1ZShtb2RlbDogbW9kZWxUeXBlcyk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAoSGVscGVycy5pc0RhdGUobW9kZWwpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcobW9kZWwsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19