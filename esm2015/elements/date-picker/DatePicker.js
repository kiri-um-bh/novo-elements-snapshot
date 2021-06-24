// NG2
import { ElementRef, Component, EventEmitter, forwardRef, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
// Vendor
import * as dateFns from 'date-fns';
// APP
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
function NovoDatePickerElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "h4", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 21);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r0.heading == null ? null : ctx_r0.heading.day);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.heading == null ? null : ctx_r0.heading.day);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r0.heading == null ? null : ctx_r0.heading.month);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.heading == null ? null : ctx_r0.heading.month);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r0.heading == null ? null : ctx_r0.heading.date);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.heading == null ? null : ctx_r0.heading.date);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r0.heading == null ? null : ctx_r0.heading.year);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.heading == null ? null : ctx_r0.heading.year);
} }
function NovoDatePickerElement_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "span", 23);
    i0.ɵɵlistener("click", function NovoDatePickerElement_div_2_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.toggleRangeSelect("startDate"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵlistener("click", function NovoDatePickerElement_div_2_Template_span_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleRangeSelect("endDate"); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "i", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("week-select-mode", ctx_r1.weekRangeSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@startDateTextState", ctx_r1.rangeSelectMode);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.selectedLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@endDateTextState", ctx_r1.rangeSelectMode);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.selected2Label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@indicatorState", ctx_r1.rangeSelectMode);
} }
function NovoDatePickerElement_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r9 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", day_r9);
    i0.ɵɵattribute("data-automation-id", day_r9.substr(0, 2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(day_r9.substr(0, 2));
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { today: a0, "notinmonth": a1, selected: a2, filler: a3, startfill: a4, endfill: a5, "selecting-range": a6 }; };
function NovoDatePickerElement_tr_16_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵlistener("mouseover", function NovoDatePickerElement_tr_16_td_1_Template_td_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r14); const day_r12 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.rangeHover($event, day_r12); });
    i0.ɵɵelementStart(1, "button", 29);
    i0.ɵɵlistener("click", function NovoDatePickerElement_tr_16_td_1_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r14); const day_r12 = ctx.$implicit; const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.select($event, day_r12, true); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r12 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction7(5, _c0, day_r12.isToday, day_r12.date.getMonth() !== ctx_r11.month.getMonth(), ctx_r11.isSelected(ctx_r11.range, day_r12.date, ctx_r11.selected, ctx_r11.selected2), ctx_r11.isFiller(ctx_r11.range, day_r12.date, ctx_r11.selected, ctx_r11.selected2), ctx_r11.isStartFill(ctx_r11.range, day_r12.date, ctx_r11.selected, ctx_r11.selected2), ctx_r11.isEndFill(ctx_r11.range, day_r12.date, ctx_r11.selected, ctx_r11.selected2), ctx_r11.isSelectingRange(ctx_r11.range, day_r12.date, ctx_r11.selected, ctx_r11.selected2, ctx_r11.hoverDay, ctx_r11.rangeSelectMode, ctx_r11.weekRangeSelect)));
    i0.ɵɵattribute("data-automation-id", day_r12.number);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r11.isDisabled(day_r12.date, ctx_r11.start, ctx_r11.end));
    i0.ɵɵattribute("data-automation-id", day_r12.number);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(day_r12.number);
} }
function NovoDatePickerElement_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, NovoDatePickerElement_tr_16_td_1_Template, 3, 13, "td", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", week_r10.days);
} }
const _c1 = function (a0) { return { selected: a0 }; };
function NovoDatePickerElement_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵlistener("click", function NovoDatePickerElement_div_18_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r19); const i_r17 = ctx.index; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.setMonth(i_r17); });
    i0.ɵɵelementStart(1, "div", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, i_r17 === (ctx_r4.selected == null ? null : ctx_r4.selected.getMonth())));
    i0.ɵɵattribute("data-automation-id", month_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(month_r16);
} }
function NovoDatePickerElement_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵlistener("click", function NovoDatePickerElement_div_20_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r22); const year_r20 = ctx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.setYear(year_r20); });
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r20 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, year_r20 == (ctx_r5.selected == null ? null : ctx_r5.selected.getFullYear())));
    i0.ɵɵattribute("data-automation-id", year_r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r20);
} }
// Value accessor for the component (supports ngModel)
const DATE_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoDatePickerElement),
    multi: true,
};
export class NovoDatePickerElement {
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
    ngOnInit() {
        // Determine the year array
        const now = new Date();
        const start = this.minYear ? Number(this.minYear) : now.getFullYear() - 100;
        const end = this.maxYear ? Number(this.maxYear) : now.getFullYear() + 10;
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
    ngOnChanges(changes) {
        const weekRangeSelectChange = changes['weekRangeSelect'];
        if (weekRangeSelectChange &&
            weekRangeSelectChange.currentValue !== weekRangeSelectChange.previousValue &&
            !weekRangeSelectChange.firstChange) {
            this.clearRange();
        }
        const weekStartChanges = changes['weekStart'];
        if (weekStartChanges && weekStartChanges.currentValue !== weekStartChanges.previousValue && !weekStartChanges.firstChange) {
            this.weekdays = this.setupWeekdays();
            this.updateView(this.model, false, false);
        }
    }
    setupWeekdays() {
        let weekdays = this.labels.getWeekdays();
        // Weekstart must be 0-6 (Sunday - Saturday)
        if (!Helpers.isBlank(this.weekStart) && this.weekStart > 0 && this.weekStart <= 6) {
            const newStart = weekdays.splice(this.weekStart);
            weekdays = [...newStart, ...weekdays];
        }
        return weekdays;
    }
    isSelectingRange(range, day, selected, selected2, hoverDay, rangeSelectMode, weekRangeSelect) {
        if (range && !weekRangeSelect) {
            const isRangeModeEndDate = rangeSelectMode === 'endDate' && (selected && selected2 && dateFns.isAfter(day, selected2) && dateFns.isBefore(day, hoverDay));
            const isRangeModeStartDate = rangeSelectMode === 'startDate' && (selected && selected2 && dateFns.isBefore(day, selected) && dateFns.isAfter(day, hoverDay));
            const isNotSelected = !selected && selected2 && dateFns.isBefore(day, selected2) && dateFns.isAfter(day, hoverDay);
            const isNotSelected2 = selected && !selected2 && dateFns.isAfter(day, selected) && dateFns.isBefore(day, hoverDay);
            return isNotSelected2 || isNotSelected || isRangeModeStartDate || isRangeModeEndDate;
        }
        return false;
    }
    isEndFill(range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return !dateFns.isSameDay(selected, selected2) && dateFns.isSameDay(day, selected2) && dateFns.isAfter(day, selected);
        }
        return false;
    }
    isStartFill(range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return !dateFns.isSameDay(selected, selected2) && dateFns.isSameDay(day, selected) && dateFns.isBefore(day, selected2);
        }
        return false;
    }
    isFiller(range, day, selected, selected2) {
        if (range && selected2 && selected) {
            return ((dateFns.isAfter(day, selected) && dateFns.isBefore(day, selected2)) ||
                dateFns.isSameDay(day, selected) ||
                dateFns.isSameDay(day, selected2));
        }
        return false;
    }
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
    isDisabled(day, start, end) {
        return dateFns.isBefore(day, start) || dateFns.isAfter(day, end);
    }
    updateView(date, fireEvents, markedSelected) {
        if (date && date.startDate === null) {
            this.clearRange();
        }
        else {
            if (!date) {
                this.clearRange();
            }
            let value = date ? new Date(date) : new Date();
            value = this.removeTime(value);
            this.month = new Date(value);
            this.monthLabel = this.labels.formatDateWithFormat(this.month, { month: 'short' });
            const start = new Date(value.getTime());
            start.setDate(1);
            this.removeTime(start.setDate(1));
            this.buildMonth(start, this.month);
            if (markedSelected) {
                this.select(null, { date: value }, fireEvents);
            }
        }
    }
    setToday() {
        const tmp = new Date();
        this.updateView(tmp, true, true);
        // Go back to days
        this.open(null, 'days');
    }
    clearRange() {
        this.selected = null;
        this.selectedLabel = this.labels.startDate;
        this.selected2 = null;
        this.selected2Label = this.labels.endDate;
    }
    setMonth(month) {
        const date = this.month ? this.month : new Date();
        const tmp = dateFns.setMonth(date, month);
        this.updateView(tmp, true, false);
        // Go back to days
        this.open(null, 'days');
    }
    setYear(year) {
        const date = this.month ? this.month : new Date();
        const tmp = dateFns.setYear(date, year);
        this.updateView(tmp, true, false);
        // Go back to days
        this.open(null, 'days');
    }
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
    }
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
                const container = this.element.nativeElement.querySelector(`.calendar-content.${this.view}`);
                const selectedItem = this.element.nativeElement.querySelector(`.calendar-content.${this.view} .${this.view === 'years' ? 'year' : 'month'}.selected`);
                if (container && selectedItem) {
                    container.scrollTop = selectedItem.offsetTop - 100;
                }
            });
        }
        this.updateHeading();
    }
    prevMonth(event) {
        Helpers.swallowEvent(event);
        const tmp = dateFns.subMonths(this.month, 1);
        this.updateView(tmp, false, false);
    }
    nextMonth(event) {
        Helpers.swallowEvent(event);
        const tmp = dateFns.addMonths(this.month, 1);
        this.updateView(tmp, false, false);
    }
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
     * @returns with time stripped out
     */
    removeTime(date) {
        const ret = new Date(date);
        ret.setHours(12);
        ret.setSeconds(0);
        ret.setMilliseconds(0);
        return ret;
    }
    buildMonth(start, month) {
        // Reset the weeks
        this.weeks = [];
        // House keeping variables to know when we are done building the month
        let done = false;
        let date = dateFns.startOfWeek(start, { weekStartsOn: this.weekStart });
        let monthIndex = date.getMonth();
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
    buildWeek(date, month) {
        // Build out of the days of the week
        const days = [];
        // Iterate over the days of the week
        for (let i = 0; i < 7; i++) {
            // Push a variable on the day array with lots of helpers to make the template easier
            days.push({
                name: this.weekdays[i],
                number: date.getDate(),
                isToday: dateFns.isToday(date),
                date,
            });
            // Increment for the next iteration
            date = dateFns.addDays(date, 1);
        }
        return days;
    }
    toggleRangeSelect(range) {
        this.rangeSelectMode = range;
    }
    rangeHover(event, day) {
        this.hoverDay = day.date;
    }
    // ValueAccessor Functions
    writeValue(model) {
        this.model = model;
        if (Helpers.isDate(model)) {
            this.updateView(model, false, true);
        }
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
}
NovoDatePickerElement.ɵfac = function NovoDatePickerElement_Factory(t) { return new (t || NovoDatePickerElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
NovoDatePickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDatePickerElement, selectors: [["novo-date-picker"]], inputs: { minYear: "minYear", maxYear: "maxYear", start: "start", end: "end", inline: "inline", range: "range", weekRangeSelect: "weekRangeSelect", weekStart: "weekStart" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([DATE_PICKER_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature], decls: 24, vars: 12, consts: [[1, "calendar"], ["class", "calendar-top", 4, "ngIf"], ["class", "date-range-tabs", 3, "week-select-mode", 4, "ngIf"], [1, "calendar-header"], ["data-automation-id", "calendar-previous", 1, "previous", 3, "click"], [1, "heading"], ["data-automation-id", "header-month", 1, "month", 3, "click"], ["data-automation-id", "header-year", 1, "year", 3, "click"], ["data-automation-id", "calendar-next", 1, "next", 3, "click"], ["cellspacing", "0", "cellpadding", "0", 1, "calendar-content", "days", 3, "hidden"], ["class", "weekday", 3, "title", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "calendar-content", "months", 3, "hidden"], [3, "click", 4, "ngFor", "ngForOf"], [1, "calendar-content", "years", 3, "hidden"], [1, "calendar-footer"], ["data-automation-id", "calendar-today", 1, "today", 3, "click"], [1, "calendar-top"], [1, "day"], [1, "month"], [1, "date"], [1, "year"], [1, "date-range-tabs"], ["data-automation-id", "calendar-start-date", 1, "range-tab", 3, "click"], ["data-automation-id", "calendar-end-date", 1, "range-tab", 3, "click"], [1, "indicator"], [1, "weekday", 3, "title"], [3, "ngClass", "mouseover", 4, "ngFor", "ngForOf"], [3, "ngClass", "mouseover"], [1, "day", 3, "disabled", "click"], [3, "click"], [1, "month", 3, "ngClass"], [1, "year", 3, "ngClass"]], template: function NovoDatePickerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NovoDatePickerElement_div_1_Template, 9, 8, "div", 1);
        i0.ɵɵtemplate(2, NovoDatePickerElement_div_2_Template, 6, 7, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵlistener("click", function NovoDatePickerElement_Template_span_click_4_listener($event) { return ctx.prevMonth($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 5);
        i0.ɵɵelementStart(6, "span", 6);
        i0.ɵɵlistener("click", function NovoDatePickerElement_Template_span_click_6_listener($event) { return ctx.open($event, "months"); });
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "span", 7);
        i0.ɵɵlistener("click", function NovoDatePickerElement_Template_span_click_8_listener($event) { return ctx.open($event, "years"); });
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "span", 8);
        i0.ɵɵlistener("click", function NovoDatePickerElement_Template_span_click_10_listener($event) { return ctx.nextMonth($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "table", 9);
        i0.ɵɵelementStart(12, "thead");
        i0.ɵɵelementStart(13, "tr");
        i0.ɵɵtemplate(14, NovoDatePickerElement_th_14_Template, 2, 3, "th", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "tbody");
        i0.ɵɵtemplate(16, NovoDatePickerElement_tr_16_Template, 2, 1, "tr", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "section", 12);
        i0.ɵɵtemplate(18, NovoDatePickerElement_div_18_Template, 3, 5, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "section", 14);
        i0.ɵɵtemplate(20, NovoDatePickerElement_div_20_Template, 3, 5, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 15);
        i0.ɵɵelementStart(22, "span", 16);
        i0.ɵɵlistener("click", function NovoDatePickerElement_Template_span_click_22_listener() { return ctx.setToday(); });
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.inline && !ctx.range);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.range);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.monthLabel);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.month == null ? null : ctx.month.getFullYear());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", !(ctx.view == "days"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.weekdays);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.weeks);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", ctx.view !== "months");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.months);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", ctx.view !== "years");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.years);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.labels.today);
    } }, directives: [i2.NgIf, i2.NgForOf, i2.NgClass], encapsulation: 2, data: { animation: [
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
        }], inline: [{
            type: Input
        }], range: [{
            type: Input
        }], weekRangeSelect: [{
            type: Input
        }], weekStart: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEdBS1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsU0FBUztBQUNULE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0lBNkV6RCwrQkFDSTtJQUFBLDhCQUF5RDtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDOUUsOEJBQTZEO0lBQUEsWUFBa0I7SUFBQSxpQkFBSztJQUNwRiw4QkFBMkQ7SUFBQSxZQUFpQjtJQUFBLGlCQUFLO0lBQ2pGLDhCQUEyRDtJQUFBLFlBQWlCO0lBQUEsaUJBQUs7SUFDckYsaUJBQU07OztJQUpjLGVBQXdDO0lBQXhDLHdGQUF3QztJQUFDLGVBQWdCO0lBQWhCLHdFQUFnQjtJQUN2RCxlQUEwQztJQUExQywwRkFBMEM7SUFBQyxlQUFrQjtJQUFsQiwwRUFBa0I7SUFDOUQsZUFBeUM7SUFBekMseUZBQXlDO0lBQUMsZUFBaUI7SUFBakIseUVBQWlCO0lBQzNELGVBQXlDO0lB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Q0FBQzs0QkFDSixPQUFPLEVBQUUsS0FBSzt5QkFDZixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDOUQsQ0FBQztvQkFDRixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3hCLEtBQUssQ0FDSCxXQUFXLEVBQ1gsS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxnQkFBZ0I7eUJBQzVCLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQ0gsU0FBUyxFQUNULEtBQUssQ0FBQzs0QkFDSixTQUFTLEVBQUUsa0JBQWtCO3lCQUM5QixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDOUQsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlEUDthQUNKOzRGQUdDLE9BQU87a0JBRE4sS0FBSztZQUdOLE9BQU87a0JBRE4sS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLEdBQUc7a0JBREYsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLGVBQWU7a0JBRGQsS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSztZQUlOLFFBQVE7a0JBRFAsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBEQVRFX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9EYXRlUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZU1vZGFsIHtcbiAgc3RhcnREYXRlOiBEYXRlO1xuICBlbmREYXRlOiBEYXRlO1xufVxuZXhwb3J0IHR5cGUgbW9kZWxUeXBlcyA9IERhdGUgfCBSYW5nZU1vZGFsO1xuXG5leHBvcnQgaW50ZXJmYWNlIERheSB7XG4gIGRhdGU6IERhdGU7XG4gIGlzQ3VycmVudE1vbnRoPzogYm9vbGVhbjtcbiAgaXNUb2RheT86IGJvb2xlYW47XG4gIG5hbWU/OiBzdHJpbmc7XG4gIG51bWJlcj86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgcmFuZ2VTZWxlY3RNb2RlcyA9ICdzdGFydERhdGUnIHwgJ2VuZERhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGUtcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbREFURV9QSUNLRVJfVkFMVUVfQUNDRVNTT1JdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc3RhcnREYXRlVGV4dFN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignc3RhcnREYXRlIDw9PiBlbmREYXRlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdlbmREYXRlVGV4dFN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMS4wJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignc3RhcnREYXRlIDw9PiBlbmREYXRlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdpbmRpY2F0b3JTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydERhdGUgPD0+IGVuZERhdGUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci10b3BcIiAqbmdJZj1cIiFpbmxpbmUgJiYgIXJhbmdlXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGF5XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmc/LmRheVwiPnt7aGVhZGluZz8uZGF5fX08L2g0PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vbnRoXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmc/Lm1vbnRoXCI+e3toZWFkaW5nPy5tb250aH19PC9oMj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJkYXRlXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmc/LmRhdGVcIj57e2hlYWRpbmc/LmRhdGV9fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwieWVhclwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nPy55ZWFyXCI+e3toZWFkaW5nPy55ZWFyfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1yYW5nZS10YWJzXCIgKm5nSWY9XCJyYW5nZVwiIFtjbGFzcy53ZWVrLXNlbGVjdC1tb2RlXT1cIndlZWtSYW5nZVNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UtdGFiXCIgKGNsaWNrKT1cInRvZ2dsZVJhbmdlU2VsZWN0KCdzdGFydERhdGUnKVwiIFtAc3RhcnREYXRlVGV4dFN0YXRlXT1cInJhbmdlU2VsZWN0TW9kZVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXN0YXJ0LWRhdGVcIj57e3NlbGVjdGVkTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlLXRhYlwiIChjbGljayk9XCJ0b2dnbGVSYW5nZVNlbGVjdCgnZW5kRGF0ZScpXCIgW0BlbmREYXRlVGV4dFN0YXRlXT1cInJhbmdlU2VsZWN0TW9kZVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLWVuZC1kYXRlXCI+e3tzZWxlY3RlZDJMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaW5kaWNhdG9yXCIgW0BpbmRpY2F0b3JTdGF0ZV09XCJyYW5nZVNlbGVjdE1vZGVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItcHJldmlvdXNcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9udGhcIiAoY2xpY2spPVwib3BlbigkZXZlbnQsICdtb250aHMnKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImhlYWRlci1tb250aFwiPnt7bW9udGhMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInllYXJcIiAoY2xpY2spPVwib3BlbigkZXZlbnQsICd5ZWFycycpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaGVhZGVyLXllYXJcIj57e21vbnRoPy5nZXRGdWxsWWVhcigpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmV4dFwiIChjbGljayk9XCJuZXh0TW9udGgoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLW5leHRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImNhbGVuZGFyLWNvbnRlbnQgZGF5c1wiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIFtoaWRkZW5dPVwiISh2aWV3PT0nZGF5cycpXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrZGF5c1wiIHRpdGxlPVwie3tkYXl9fVwiIGNsYXNzPVwid2Vla2RheVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkuc3Vic3RyKDAsIDIpXCI+e3tkYXkuc3Vic3RyKDAsIDIpfX08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWsuZGF5c1wiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RheTogZGF5LmlzVG9kYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vdGlubW9udGgnOiBkYXkuZGF0ZS5nZXRNb250aCgpICE9PSB0aGlzLm1vbnRoLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQocmFuZ2UsIGRheS5kYXRlLCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsZXI6IGlzRmlsbGVyKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRmaWxsOiBpc1N0YXJ0RmlsbChyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZGZpbGw6IGlzRW5kRmlsbChyYW5nZSwgZGF5LmRhdGUsIHNlbGVjdGVkLCBzZWxlY3RlZDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3RpbmctcmFuZ2UnOiBpc1NlbGVjdGluZ1JhbmdlKHJhbmdlLCBkYXkuZGF0ZSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiwgaG92ZXJEYXksIHJhbmdlU2VsZWN0TW9kZSwgd2Vla1JhbmdlU2VsZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIChtb3VzZW92ZXIpPVwicmFuZ2VIb3ZlcigkZXZlbnQsIGRheSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF5Lm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkYXlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF5Lm51bWJlclwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKGRheS5kYXRlLCBzdGFydCwgZW5kKVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBkYXksIHRydWUpXCI+e3tkYXkubnVtYmVyfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhbGVuZGFyLWNvbnRlbnQgbW9udGhzXCIgW2hpZGRlbl09XCJ2aWV3ICE9PSAnbW9udGhzJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG1vbnRoIG9mIG1vbnRocztsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNldE1vbnRoKGkpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb250aFwiIFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogaSA9PT0gc2VsZWN0ZWQ/LmdldE1vbnRoKCl9XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm1vbnRoXCI+e3ttb250aH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhbGVuZGFyLWNvbnRlbnQgeWVhcnNcIiBbaGlkZGVuXT1cInZpZXcgIT09ICd5ZWFycydcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHllYXJzXCIgKGNsaWNrKT1cInNldFllYXIoeWVhcilcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInllYXJcIiBbbmdDbGFzc109XCJ7c2VsZWN0ZWQ6IHllYXIgPT0gc2VsZWN0ZWQ/LmdldEZ1bGxZZWFyKCl9XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInllYXJcIj57e3llYXJ9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJzZXRUb2RheSgpXCIgY2xhc3M9XCJ0b2RheVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXRvZGF5XCI+e3sgbGFiZWxzLnRvZGF5IH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIG1pblllYXI6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4WWVhcjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICBzdGFydDogRGF0ZTtcbiAgQElucHV0KClcbiAgZW5kOiBEYXRlO1xuICBASW5wdXQoKVxuICBpbmxpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJhbmdlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB3ZWVrUmFuZ2VTZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydDogbnVtYmVyID0gMDtcbiAgLy8gU2VsZWN0IGNhbGxiYWNrIGZvciBvdXRwdXRcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIC8vIExpc3Qgb2YgYWxsIHRoZSB3ZWVrZGF5c1xuICB3ZWVrZGF5czogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgbW9udGhzXG4gIG1vbnRoczogc3RyaW5nW10gPSBbXTtcbiAgLy8gTGlzdCBvZiBhbGwgeWVhcnMgKGdlbmVyYXRlZCBpbiBuZ09uSW5pdClcbiAgeWVhcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gRGVmYXVsdCB2aWV3IG1vZGUgKHNlbGVjdCBkYXlzKVxuICB2aWV3OiBzdHJpbmcgPSAnZGF5cyc7XG4gIGhlYWRpbmc6IGFueTtcblxuICBtb2RlbDogbW9kZWxUeXBlcztcbiAgbW9udGg6IERhdGU7XG4gIG1vbnRoTGFiZWw6IHN0cmluZztcbiAgd2Vla3M6IGFueTtcbiAgc2VsZWN0ZWQ6IERhdGU7XG4gIHNlbGVjdGVkTGFiZWw6IHN0cmluZztcbiAgc2VsZWN0ZWQyOiBEYXRlO1xuICBzZWxlY3RlZDJMYWJlbDogc3RyaW5nO1xuICBob3ZlckRheTogYW55O1xuXG4gIHJhbmdlU2VsZWN0TW9kZTogcmFuZ2VTZWxlY3RNb2RlcyA9ICdzdGFydERhdGUnO1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIERldGVybWluZSB0aGUgeWVhciBhcnJheVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLm1pblllYXIgPyBOdW1iZXIodGhpcy5taW5ZZWFyKSA6IG5vdy5nZXRGdWxsWWVhcigpIC0gMTAwO1xuICAgIGNvbnN0IGVuZCA9IHRoaXMubWF4WWVhciA/IE51bWJlcih0aGlzLm1heFllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgKyAxMDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xuICAgIH1cblxuICAgIC8vIFNldCB3ZWVrZGF5cyAvIG1vbnRoc1xuICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLnNldHVwV2Vla2RheXMoKTtcbiAgICB0aGlzLm1vbnRocyA9IHRoaXMubGFiZWxzLmdldE1vbnRocygpO1xuXG4gICAgLy8gU2V0IGxhYmVsc1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkMkxhYmVsID0gdGhpcy5sYWJlbHMuZW5kRGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5tb2RlbCwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHdlZWtSYW5nZVNlbGVjdENoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snd2Vla1JhbmdlU2VsZWN0J107XG4gICAgaWYgKFxuICAgICAgd2Vla1JhbmdlU2VsZWN0Q2hhbmdlICYmXG4gICAgICB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UuY3VycmVudFZhbHVlICE9PSB3ZWVrUmFuZ2VTZWxlY3RDaGFuZ2UucHJldmlvdXNWYWx1ZSAmJlxuICAgICAgIXdlZWtSYW5nZVNlbGVjdENoYW5nZS5maXJzdENoYW5nZVxuICAgICkge1xuICAgICAgdGhpcy5jbGVhclJhbmdlKCk7XG4gICAgfVxuICAgIGNvbnN0IHdlZWtTdGFydENoYW5nZXM6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ3dlZWtTdGFydCddO1xuICAgIGlmICh3ZWVrU3RhcnRDaGFuZ2VzICYmIHdlZWtTdGFydENoYW5nZXMuY3VycmVudFZhbHVlICE9PSB3ZWVrU3RhcnRDaGFuZ2VzLnByZXZpb3VzVmFsdWUgJiYgIXdlZWtTdGFydENoYW5nZXMuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLnNldHVwV2Vla2RheXMoKTtcbiAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLm1vZGVsLCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwV2Vla2RheXMoKTogc3RyaW5nW10ge1xuICAgIGxldCB3ZWVrZGF5cyA9IHRoaXMubGFiZWxzLmdldFdlZWtkYXlzKCk7XG4gICAgLy8gV2Vla3N0YXJ0IG11c3QgYmUgMC02IChTdW5kYXkgLSBTYXR1cmRheSlcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh0aGlzLndlZWtTdGFydCkgJiYgdGhpcy53ZWVrU3RhcnQgPiAwICYmIHRoaXMud2Vla1N0YXJ0IDw9IDYpIHtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gd2Vla2RheXMuc3BsaWNlKHRoaXMud2Vla1N0YXJ0KTtcbiAgICAgIHdlZWtkYXlzID0gWy4uLm5ld1N0YXJ0LCAuLi53ZWVrZGF5c107XG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5cztcbiAgfVxuXG4gIGlzU2VsZWN0aW5nUmFuZ2UocmFuZ2UsIGRheSwgc2VsZWN0ZWQsIHNlbGVjdGVkMiwgaG92ZXJEYXksIHJhbmdlU2VsZWN0TW9kZSwgd2Vla1JhbmdlU2VsZWN0KSB7XG4gICAgaWYgKHJhbmdlICYmICF3ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgIGNvbnN0IGlzUmFuZ2VNb2RlRW5kRGF0ZSA9XG4gICAgICAgIHJhbmdlU2VsZWN0TW9kZSA9PT0gJ2VuZERhdGUnICYmIChzZWxlY3RlZCAmJiBzZWxlY3RlZDIgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgaG92ZXJEYXkpKTtcbiAgICAgIGNvbnN0IGlzUmFuZ2VNb2RlU3RhcnREYXRlID1cbiAgICAgICAgcmFuZ2VTZWxlY3RNb2RlID09PSAnc3RhcnREYXRlJyAmJiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzZWxlY3RlZCkgJiYgZGF0ZUZucy5pc0FmdGVyKGRheSwgaG92ZXJEYXkpKTtcbiAgICAgIGNvbnN0IGlzTm90U2VsZWN0ZWQgPSAhc2VsZWN0ZWQgJiYgc2VsZWN0ZWQyICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNBZnRlcihkYXksIGhvdmVyRGF5KTtcbiAgICAgIGNvbnN0IGlzTm90U2VsZWN0ZWQyID0gc2VsZWN0ZWQgJiYgIXNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZCkgJiYgZGF0ZUZucy5pc0JlZm9yZShkYXksIGhvdmVyRGF5KTtcbiAgICAgIHJldHVybiBpc05vdFNlbGVjdGVkMiB8fCBpc05vdFNlbGVjdGVkIHx8IGlzUmFuZ2VNb2RlU3RhcnREYXRlIHx8IGlzUmFuZ2VNb2RlRW5kRGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNFbmRGaWxsKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIpIHtcbiAgICBpZiAocmFuZ2UgJiYgc2VsZWN0ZWQyICYmIHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gIWRhdGVGbnMuaXNTYW1lRGF5KHNlbGVjdGVkLCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQyKSAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBzZWxlY3RlZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU3RhcnRGaWxsKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIpIHtcbiAgICBpZiAocmFuZ2UgJiYgc2VsZWN0ZWQyICYmIHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gIWRhdGVGbnMuaXNTYW1lRGF5KHNlbGVjdGVkLCBzZWxlY3RlZDIpICYmIGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWQpICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LCBzZWxlY3RlZDIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0ZpbGxlcihyYW5nZSwgZGF5LCBzZWxlY3RlZCwgc2VsZWN0ZWQyKSB7XG4gICAgaWYgKHJhbmdlICYmIHNlbGVjdGVkMiAmJiBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGRhdGVGbnMuaXNBZnRlcihkYXksIHNlbGVjdGVkKSAmJiBkYXRlRm5zLmlzQmVmb3JlKGRheSwgc2VsZWN0ZWQyKSkgfHxcbiAgICAgICAgZGF0ZUZucy5pc1NhbWVEYXkoZGF5LCBzZWxlY3RlZCkgfHxcbiAgICAgICAgZGF0ZUZucy5pc1NhbWVEYXkoZGF5LCBzZWxlY3RlZDIpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1NlbGVjdGVkKHJhbmdlLCBkYXksIHNlbGVjdGVkLCBzZWxlY3RlZDIpIHtcbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGRheSAmJlxuICAgICAgICAoKHNlbGVjdGVkICYmXG4gICAgICAgICAgKGRheS5nZXREYXRlKCkgPT09IHNlbGVjdGVkLmdldERhdGUoKSAmJlxuICAgICAgICAgICAgZGF5LmdldE1vbnRoKCkgPT09IHNlbGVjdGVkLmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZC5nZXRGdWxsWWVhcigpKSkgfHxcbiAgICAgICAgICAoc2VsZWN0ZWQyICYmXG4gICAgICAgICAgICAoZGF5LmdldERhdGUoKSA9PT0gc2VsZWN0ZWQyLmdldERhdGUoKSAmJlxuICAgICAgICAgICAgICBkYXkuZ2V0TW9udGgoKSA9PT0gc2VsZWN0ZWQyLmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgZGF5LmdldEZ1bGxZZWFyKCkgPT09IHNlbGVjdGVkMi5nZXRGdWxsWWVhcigpKSkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGF5LmdldERhdGUoKSA9PT0gc2VsZWN0ZWQuZ2V0RGF0ZSgpICYmIGRheS5nZXRNb250aCgpID09PSBzZWxlY3RlZC5nZXRNb250aCgpICYmIGRheS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZC5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgaXNEaXNhYmxlZChkYXksIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5pc0JlZm9yZShkYXksIHN0YXJ0KSB8fCBkYXRlRm5zLmlzQWZ0ZXIoZGF5LCBlbmQpO1xuICB9XG5cbiAgdXBkYXRlVmlldyhkYXRlLCBmaXJlRXZlbnRzOiBib29sZWFuLCBtYXJrZWRTZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChkYXRlICYmIGRhdGUuc3RhcnREYXRlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmNsZWFyUmFuZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSYW5nZSgpO1xuICAgICAgfVxuICAgICAgbGV0IHZhbHVlOiBhbnkgPSBkYXRlID8gbmV3IERhdGUoZGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgdmFsdWUgPSB0aGlzLnJlbW92ZVRpbWUodmFsdWUpO1xuICAgICAgdGhpcy5tb250aCA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIHRoaXMubW9udGhMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMubW9udGgsIHsgbW9udGg6ICdzaG9ydCcgfSk7XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpKTtcbiAgICAgIHN0YXJ0LnNldERhdGUoMSk7XG4gICAgICB0aGlzLnJlbW92ZVRpbWUoc3RhcnQuc2V0RGF0ZSgxKSk7XG5cbiAgICAgIHRoaXMuYnVpbGRNb250aChzdGFydCwgdGhpcy5tb250aCk7XG5cbiAgICAgIGlmIChtYXJrZWRTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdChudWxsLCB7IGRhdGU6IHZhbHVlIH0sIGZpcmVFdmVudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRvZGF5KCkge1xuICAgIGNvbnN0IHRtcCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBjbGVhclJhbmdlKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkMiA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmVuZERhdGU7XG4gIH1cblxuICBzZXRNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMubW9udGggPyB0aGlzLm1vbnRoIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCB0bXAgPSBkYXRlRm5zLnNldE1vbnRoKGRhdGUsIG1vbnRoKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCBmYWxzZSk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gIH1cblxuICBzZXRZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLm1vbnRoID8gdGhpcy5tb250aCA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG1wID0gZGF0ZUZucy5zZXRZZWFyKGRhdGUsIHllYXIpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIHRydWUsIGZhbHNlKTtcbiAgICAvLyBHbyBiYWNrIHRvIGRheXNcbiAgICB0aGlzLm9wZW4obnVsbCwgJ2RheXMnKTtcbiAgfVxuXG4gIHNlbGVjdChldmVudDogRXZlbnQsIGRheTogRGF5LCBmaXJlRXZlbnRzOiBib29sZWFuKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICBpZiAodGhpcy53ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVGbnMuc3RhcnRPZldlZWsoZGF5LmRhdGUsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydCB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZDIgPSBkYXRlRm5zLmVuZE9mV2VlayhkYXkuZGF0ZSwgeyB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZDJMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQyLCB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRvIGZpcmUgdGhpcywgc2luY2Ugd2UgZGVmYXVsdCB0byB0aGUgY3VycmVudCB3ZWVrIHNlbGVjdGVkIVxuICAgICAgICBpZiAoIWZpcmVFdmVudHMgJiYgdGhpcy53ZWVrUmFuZ2VTZWxlY3QpIHtcbiAgICAgICAgICB0aGlzLmZpcmVSYW5nZVNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2VTZWxlY3RNb2RlID09PSAnc3RhcnREYXRlJykge1xuICAgICAgICAvLyBTRVQgU1RBUlQgREFURVxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZUZucy5zdGFydE9mRGF5KGRheS5kYXRlKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMiAmJiBkYXRlRm5zLmlzQWZ0ZXIoZGF5LmRhdGUsIHRoaXMuc2VsZWN0ZWQyKSkge1xuICAgICAgICAgIC8vIENMRUFSIEVORCBEQVRFXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZDIgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5lbmREYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIHRoaXMucmFuZ2VTZWxlY3RNb2RlID0gJ2VuZERhdGUnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2VTZWxlY3RNb2RlID09PSAnZW5kRGF0ZScpIHtcbiAgICAgICAgLy8gU0VUIEVORCBEQVRFXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyID0gZGF0ZUZucy5lbmRPZkRheShkYXkuZGF0ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQyTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIGRhdGVGbnMuaXNCZWZvcmUoZGF5LmRhdGUsIHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgLy8gQ0xFQVIgU1RBUlQgREFURVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLnN0YXJ0RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlU2VsZWN0TW9kZSA9ICdzdGFydERhdGUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXkuZGF0ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHtcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudXBkYXRlSGVhZGluZygpO1xuICAgIH1cbiAgICBpZiAoZmlyZUV2ZW50cyAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAvLyBFbWl0IG91ciBvdXRwdXRcbiAgICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZDIpIHtcbiAgICAgICAgdGhpcy5maXJlUmFuZ2VTZWxlY3QoKTtcbiAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHtcbiAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgICAgZW5kRGF0ZTogdGhpcy5zZWxlY3RlZDIgPyB0aGlzLnNlbGVjdGVkMiA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgICBlbmREYXRlOiB0aGlzLnNlbGVjdGVkMiA/IHRoaXMuc2VsZWN0ZWQyIDogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICAgICAgbW9udGg6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgZGF5OiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IHdlZWtkYXk6ICdsb25nJyB9KSxcbiAgICAgICAgICBkYXRlOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaXJlUmFuZ2VTZWxlY3QoKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBzdGFydCBkYXRlIGlzIGJlZm9yZSB0aGUgZW5kIGRhdGVcbiAgICBpZiAoZGF0ZUZucy5pc0JlZm9yZSh0aGlzLnNlbGVjdGVkLCB0aGlzLnNlbGVjdGVkMikpIHtcbiAgICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICAgIHN0YXJ0RGF0ZToge1xuICAgICAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgfSxcbiAgICAgICAgZW5kRGF0ZToge1xuICAgICAgICAgIG1vbnRoOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQyLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgZGF5OiB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLnNlbGVjdGVkMiwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICAgICAgZGF0ZTogdGhpcy5zZWxlY3RlZDIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvcGVuKGV2ZW50OiBFdmVudCwgdHlwZTogc3RyaW5nKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuXG4gICAgLy8gSWYgdGhleSBjbGljayB0aGUgdG9nZ2xlIHR3byB0aW1lIGluIGEgcm93LCBjbG9zZSBpdCAoZ28gYmFjayB0byBkYXlzKVxuICAgIGlmICh0eXBlID09PSB0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMudmlldyA9ICdkYXlzJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3ID0gdHlwZTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgdG8gc2Nyb2xsIHRoZSBzZWxlY3RlZCBvbmUgaW50byB2aWV3XG4gICAgaWYgKHRoaXMudmlldyA9PT0gJ3llYXJzJyB8fCB0aGlzLnZpZXcgPT09ICdtb250aHMnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmNhbGVuZGFyLWNvbnRlbnQuJHt0aGlzLnZpZXd9YCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5jYWxlbmRhci1jb250ZW50LiR7dGhpcy52aWV3fSAuJHt0aGlzLnZpZXcgPT09ICd5ZWFycycgPyAneWVhcicgOiAnbW9udGgnfS5zZWxlY3RlZGAsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb250YWluZXIgJiYgc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNlbGVjdGVkSXRlbS5vZmZzZXRUb3AgLSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlSGVhZGluZygpO1xuICB9XG5cbiAgcHJldk1vbnRoKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBjb25zdCB0bXAgPSBkYXRlRm5zLnN1Yk1vbnRocyh0aGlzLm1vbnRoLCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbmV4dE1vbnRoKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBjb25zdCB0bXAgPSBkYXRlRm5zLmFkZE1vbnRocyh0aGlzLm1vbnRoLCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgdXBkYXRlSGVhZGluZygpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oZWFkaW5nID0ge1xuICAgICAgbW9udGg6IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuc2VsZWN0ZWQsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRheTogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodGhpcy5zZWxlY3RlZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSksXG4gICAgICBkYXRlOiB0aGlzLnNlbGVjdGVkLmdldERhdGUoKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdGltZSBhc3BlY3Qgb2YgdGhlIGRhdGVcbiAgICogQHJldHVybnMgd2l0aCB0aW1lIHN0cmlwcGVkIG91dFxuICAgKi9cbiAgcmVtb3ZlVGltZShkYXRlOiBhbnkpOiBEYXRlIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICByZXQuc2V0SG91cnMoMTIpO1xuICAgIHJldC5zZXRTZWNvbmRzKDApO1xuICAgIHJldC5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGJ1aWxkTW9udGgoc3RhcnQ6IERhdGUsIG1vbnRoOiBEYXRlKSB7XG4gICAgLy8gUmVzZXQgdGhlIHdlZWtzXG4gICAgdGhpcy53ZWVrcyA9IFtdO1xuXG4gICAgLy8gSG91c2Uga2VlcGluZyB2YXJpYWJsZXMgdG8ga25vdyB3aGVuIHdlIGFyZSBkb25lIGJ1aWxkaW5nIHRoZSBtb250aFxuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgbGV0IGRhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKHN0YXJ0LCB7IHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnQgfSk7XG4gICAgbGV0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgLy8gQnVpbGQgdGhlIGRheXMgZm9yIHRoZSB3ZWVrc1xuICAgICAgdGhpcy53ZWVrcy5wdXNoKHsgZGF5czogdGhpcy5idWlsZFdlZWsobmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpLCBtb250aCkgfSk7XG5cbiAgICAgIC8vIEluY3JlbWVudCB2YXJpYWJsZXMgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgZGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhkYXRlLCA3KTtcbiAgICAgIGRvbmUgPSBjb3VudCsrID4gMiAmJiBtb250aEluZGV4ICE9PSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkV2VlayhkYXRlOiBEYXRlLCBtb250aDogRGF0ZSk6IEFycmF5PE9iamVjdD4ge1xuICAgIC8vIEJ1aWxkIG91dCBvZiB0aGUgZGF5cyBvZiB0aGUgd2Vla1xuICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgZGF5cyBvZiB0aGUgd2Vla1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAvLyBQdXNoIGEgdmFyaWFibGUgb24gdGhlIGRheSBhcnJheSB3aXRoIGxvdHMgb2YgaGVscGVycyB0byBtYWtlIHRoZSB0ZW1wbGF0ZSBlYXNpZXJcbiAgICAgIGRheXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHRoaXMud2Vla2RheXNbaV0sXG4gICAgICAgIG51bWJlcjogZGF0ZS5nZXREYXRlKCksXG4gICAgICAgIGlzVG9kYXk6IGRhdGVGbnMuaXNUb2RheShkYXRlKSxcbiAgICAgICAgZGF0ZSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJbmNyZW1lbnQgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgZGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhkYXRlLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuXG4gIHRvZ2dsZVJhbmdlU2VsZWN0KHJhbmdlOiByYW5nZVNlbGVjdE1vZGVzKTogdm9pZCB7XG4gICAgdGhpcy5yYW5nZVNlbGVjdE1vZGUgPSByYW5nZTtcbiAgfVxuXG4gIHJhbmdlSG92ZXIoZXZlbnQ6IEV2ZW50LCBkYXk6IERheSk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJEYXkgPSBkYXkuZGF0ZTtcbiAgfVxuXG4gIC8vIFZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gIHdyaXRlVmFsdWUobW9kZWw6IG1vZGVsVHlwZXMpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKG1vZGVsKSkge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KG1vZGVsLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==