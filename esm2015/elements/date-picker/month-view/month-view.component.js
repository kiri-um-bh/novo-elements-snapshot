import { __decorate, __metadata } from "tslib";
// NG2
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { addDays, isAfter, isBefore, isSameDay, isToday, startOfMonth, startOfWeek } from 'date-fns';
import { NovoLabelService } from '../../../services/novo-label-service';
import { BooleanInput } from '../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/novo-label-service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
function NovoMonthViewElement_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", day_r2);
    i0.ɵɵattribute("data-automation-id", day_r2.substr(0, 2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r2.substr(0, 2), " ");
} }
function NovoMonthViewElement_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("mouseover", function NovoMonthViewElement_div_4_div_1_Template_div_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r7); const day_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onHover($event, day_r5); });
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function NovoMonthViewElement_div_4_div_1_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r7); const day_r5 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onSelect($event, day_r5); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r4._hasOverlayType(day_r5.date));
    i0.ɵɵclassProp("today", day_r5.isToday)("notinmonth", day_r5.date.getMonth() !== ctx_r4.activeDate.getMonth())("selected", ctx_r4._isSelected(day_r5.date))("preview", ctx_r4._isPreview(day_r5.date))("overlay", ctx_r4._isOverlay(day_r5.date))("inRange", ctx_r4._isInRange(day_r5.date))("rangeStart", ctx_r4._isRangeStart(day_r5.date))("rangeEnd", ctx_r4._isRangeEnd(day_r5.date))("inPreview", ctx_r4._isInPreview(day_r5.date))("previewStart", ctx_r4._isPreviewStart(day_r5.date))("previewEnd", ctx_r4._isPreviewEnd(day_r5.date))("calendar-date", true);
    i0.ɵɵattribute("aria-label", day_r5.name)("aria-disabled", ctx_r4.isDisabled(day_r5.date))("aria-selected", ctx_r4._isSelected(day_r5.date))("data-automation-id", day_r5.number);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r4.isDisabled(day_r5.date));
    i0.ɵɵattribute("data-automation-id", day_r5.number);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r5.number, " ");
} }
function NovoMonthViewElement_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, NovoMonthViewElement_div_4_div_1_Template, 3, 33, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", week_r3.days);
} }
export class NovoMonthViewElement {
    constructor(labels, element, cdr, _sanitizer) {
        this.labels = labels;
        this.element = element;
        this.cdr = cdr;
        this._sanitizer = _sanitizer;
        this.activeDate = new Date();
        // Weekstart must be 0-6 (Sunday - Saturday)
        this.selected = [];
        this.preview = [];
        this.overlays = [];
        this.isRange = false;
        this.hideOverflowDays = false;
        this._weekStartsOn = 0;
        // Select callback for output
        this.select = new EventEmitter(false);
        // Select callback for output
        this.hover = new EventEmitter(false);
        // List of all the weekdays
        this.weekdays = this.labels.getWeekdays(this.weekStartsOn);
        // List of all months
        this.monthNames = this.labels.getMonths();
    }
    get weekStartsOn() {
        return this._weekStartsOn;
    }
    set weekStartsOn(value) {
        this._weekStartsOn = value;
        this.weekdays = this.labels.getWeekdays(value);
        this.updateView(this.activeDate);
    }
    ngOnInit() {
        // Set labels
        this.updateView(this.activeDate);
    }
    updateView(date) {
        this.monthLabel = this.labels.formatDateWithFormat(this.activeDate, { month: 'short' });
        this.buildMonth(this.activeDate);
    }
    onSelect(event, day) {
        // Helpers.swallowEvent(event);
        this.select.next({ event, day });
        this.cdr.markForCheck();
    }
    onHover(event, day) {
        this.isRange && this.hover.next({ event, day });
    }
    buildMonth(month) {
        // Reset the weeks
        this.weeks = [];
        const start = startOfMonth(month);
        // House keeping variables to know when we are done building the month
        let done = false, date = startOfWeek(start, { weekStartsOn: this.weekStartsOn }), monthIndex = date.getMonth(), count = 0;
        while (!done) {
            // Build the days for the weeks
            this.weeks.push({ days: this.buildWeek(new Date(date.getTime()), month) });
            // Increment variables for the next iteration
            date = addDays(date, 7);
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
                isToday: isToday(date),
                date,
            });
            // Increment for the next iteration
            date = addDays(date, 1);
        }
        return days;
    }
    isDisabled(day) {
        return (this.minDate && isBefore(day, this.minDate)) || (this.maxDate && isAfter(day, this.maxDate));
    }
    /** Returns whether a cell should be marked as selected. */
    _isSelected(value) {
        return this.selected && this.selected.find((d) => isSameDay(d, value));
    }
    /** Returns whether a cell should be marked as preview. */
    _isPreview(value) {
        return this.preview && this.preview.find((d) => isSameDay(d, value));
    }
    /** Returns whether a cell should be marked as an overlay. */
    _isOverlay(value) {
        return this.overlays && this.overlays.find((o) => isSameDay(o.date, value));
    }
    /** Returns whether a cell should be marked as an overlay. */
    _hasOverlayType(value) {
        let overlay = this.overlays && this.overlays.find((o) => isSameDay(o.date, value));
        return overlay ? overlay.type : null;
    }
    /** Gets whether a value is the start of the main range. */
    _isRangeStart(value) {
        return isStart(value, this.selected, this.isRange);
    }
    /** Gets whether a value is the end of the main range. */
    _isRangeEnd(value) {
        return isEnd(value, this.selected, this.isRange);
    }
    /** Gets whether a value is within the currently-selected range. */
    _isInRange(value) {
        return isInRange(value, this.selected, this.isRange);
    }
    /** Gets whether a value is the start of the preview range. */
    _isPreviewStart(value) {
        return isStart(value, this.preview, this.isRange);
    }
    /** Gets whether a value is the end of the preview range. */
    _isPreviewEnd(value) {
        return isEnd(value, this.preview, this.isRange);
    }
    /** Gets whether a value is inside the preview range. */
    _isInPreview(value) {
        return isInRange(value, this.preview, this.isRange);
    }
}
NovoMonthViewElement.ɵfac = function NovoMonthViewElement_Factory(t) { return new (t || NovoMonthViewElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
NovoMonthViewElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoMonthViewElement, selectors: [["novo-month-view"]], hostVars: 2, hostBindings: function NovoMonthViewElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("hide-overflow-days", ctx.hideOverflowDays);
    } }, inputs: { minDate: "minDate", maxDate: "maxDate", activeDate: "activeDate", selected: "selected", preview: "preview", overlays: "overlays", isRange: "isRange", hideOverflowDays: "hideOverflowDays", weekStartsOn: "weekStartsOn" }, outputs: { select: "select", hover: "hover" }, decls: 5, vars: 2, consts: [["cellspacing", "0", "cellpadding", "0", 1, "calendar-table"], [1, "calendar-thead"], ["class", "calendar-th weekday", 3, "title", 4, "ngFor", "ngForOf"], [1, "calendar-body"], ["class", "calendar-week", 4, "ngFor", "ngForOf"], [1, "calendar-th", "weekday", 3, "title"], [1, "calendar-week"], [3, "today", "notinmonth", "selected", "preview", "overlay", "class", "inRange", "rangeStart", "rangeEnd", "inPreview", "previewStart", "previewEnd", "calendar-date", "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover"], [1, "day", 3, "disabled", "click"]], template: function NovoMonthViewElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, NovoMonthViewElement_div_2_Template, 2, 3, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, NovoMonthViewElement_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.weekdays);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.weeks);
    } }, directives: [i3.NgForOf], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{background:var(--background-alt);height:-webkit-min-content;height:-moz-min-content;height:min-content;position:relative;width:100%}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]{display:table}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-thead[_ngcontent-%COMP%]{display:table-header-group}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-th[_ngcontent-%COMP%]{display:table-cell;padding:10px 0;width:30px}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]{display:table-row-group}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]{display:table-row}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date[_ngcontent-%COMP%]{display:table-cell}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%], [_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{border-radius:3px;color:#666;font-weight:400;margin:5px;overflow-x:hidden;padding:4px 15px;text-align:center;text-overflow:ellipsis}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .month.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .year.selected[_ngcontent-%COMP%]{background-color:#4a89dc;color:#fff}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]:hover{background-color:#4a89dc;color:#fff;cursor:pointer}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{background-color:transparent;border:none;border-radius:50%;box-shadow:inset 0 0 0 2px transparent;color:var(--text-main,#3d464d);font-size:1.2rem;height:3.2rem;line-height:1;padding:1px;position:relative;transition:box-shadow .14s ease-in-out;width:3.2rem}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:focus{outline:none}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:disabled{box-shadow:none!important;color:var(--text-muted,#d7d9e4);cursor:not-allowed!important}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.notinmonth[_ngcontent-%COMP%]{color:var(--text-muted,#d7d9e4)}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date[_ngcontent-%COMP%]:hover   .day[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #4a89dc;cursor:pointer}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.inRange[_ngcontent-%COMP%]:hover   .day[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #fff}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.inRange[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#4a89dc;border-radius:0;color:#fff;height:3.2rem;width:3.2rem}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.rangeStart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-radius:50%;border-top-right-radius:0;box-shadow:none!important;position:relative}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.rangeStart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{background:#4a89dc;content:\"\";height:100%;position:absolute;right:-5px;top:0;width:10px;z-index:-1}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.rangeEnd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-radius:50%;border-top-left-radius:0;box-shadow:none!important;position:relative}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.rangeEnd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{background:#4a89dc;content:\"\";height:100%;left:-5px;position:absolute;top:0;width:10px;z-index:-1}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.selected[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{background:#4a89dc;color:#fff}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.preview[_ngcontent-%COMP%]:not(.previewStart):not(.previewEnd)   .day[_ngcontent-%COMP%]{border:1px dashed #4a89dc}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.preview[_ngcontent-%COMP%]:not(.previewStart):not(.previewEnd).selected   .day[_ngcontent-%COMP%]{border:1px dashed #9dbeff}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.today[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:inset 0 0 0 2px #dbdbdb;content:\"\";height:100%;left:0;margin:0 auto;max-width:3.2rem;position:absolute;top:0;width:100%}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.today.inRange[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.today.selected[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:after{box-shadow:inset 0 0 0 2px #9dbeff}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.inPreview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom:1px dashed #4a89dc;border-radius:0;border-top:1px dashed #4a89dc}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.previewStart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-left:1px dashed #4a89dc;border-radius:50%;border-top-right-radius:0;box-shadow:none!important}[_nghost-%COMP%]   .calendar-table[_ngcontent-%COMP%]   .calendar-date.previewEnd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-radius:50%;border-right:1px dashed #4a89dc;border-top-left-radius:0;box-shadow:none!important}"], changeDetection: 0 });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoMonthViewElement.prototype, "isRange", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoMonthViewElement.prototype, "hideOverflowDays", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoMonthViewElement, [{
        type: Component,
        args: [{
                selector: 'novo-month-view',
                templateUrl: './month-view.component.html',
                styleUrls: ['./month-view.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.DomSanitizer }]; }, { minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], selected: [{
            type: Input
        }], preview: [{
            type: Input
        }], overlays: [{
            type: Input
        }], isRange: [{
            type: Input
        }], hideOverflowDays: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.hide-overflow-days']
        }], weekStartsOn: [{
            type: Input
        }], select: [{
            type: Output
        }], hover: [{
            type: Output
        }] }); })();
/** Checks whether a value is the start of a range. */
function isStart(value, range, rangeEnabled) {
    const [start, end] = range !== null && range !== void 0 ? range : [];
    return rangeEnabled && end !== null && !isSameDay(start, end) && value < end && isSameDay(value, start);
}
/** Checks whether a value is the end of a range. */
function isEnd(value, range, rangeEnabled) {
    const [start, end] = range !== null && range !== void 0 ? range : [];
    return rangeEnabled && start !== null && !isSameDay(start, end) && value >= start && isSameDay(value, end);
}
/** Checks whether a value is inside of a range. */
function isInRange(value, range, rangeEnabled) {
    const [start, end] = range !== null && range !== void 0 ? range : [];
    return rangeEnabled && start !== null && end !== null && !isSameDay(start, end) && value >= start && value <= end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS1waWNrZXIvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC50cyIsImVsZW1lbnRzL2RhdGUtcGlja2VyL21vbnRoLXZpZXcvbW9udGgtdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxTQUFTO0FBQ1QsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ2QxQyw4QkFFRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBSHdELHlDQUFpQjtJQUM3RSx5REFBNEM7SUFDNUMsZUFDRjtJQURFLG9EQUNGOzs7O0lBSUUsOEJBbUJFO0lBREEsbVBBQWtDO0lBQ2xDLGlDQUtFO0lBREEsK09BQStCO0lBQy9CLFlBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFNOzs7O0lBcEJKLGtEQUFtQztJQUxuQyx1Q0FBMkIsdUVBQUEsNkNBQUEsMkNBQUEsMkNBQUEsMkNBQUEsaURBQUEsNkNBQUEs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LENBQUM7QUFDMUcsQ0FBQztBQUVELG9EQUFvRDtBQUNwRCxTQUFTLEtBQUssQ0FBQyxLQUFlLEVBQUUsS0FBd0IsRUFBRSxZQUFxQjtJQUM3RSxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQztJQUNqQyxPQUFPLFlBQVksSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0csQ0FBQztBQUVELG1EQUFtRDtBQUNuRCxTQUFTLFNBQVMsQ0FBQyxLQUFlLEVBQUUsS0FBd0IsRUFBRSxZQUFxQjtJQUNqRixNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQztJQUNqQyxPQUFPLFlBQVksSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQztBQUNwSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBhZGREYXlzLCBpc0FmdGVyLCBpc0JlZm9yZSwgaXNTYW1lRGF5LCBpc1RvZGF5LCBzdGFydE9mTW9udGgsIHN0YXJ0T2ZXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgeyBEYXRlTGlrZSwgRGF5LCBPdmVybGF5RGF0ZSB9IGZyb20gJy4uL2RhdGUtcGlja2VyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1tb250aC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb250aC12aWV3LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9udGhWaWV3RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1pbkRhdGU6IERhdGU7XG4gIEBJbnB1dCgpXG4gIG1heERhdGU6IERhdGU7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAvLyBXZWVrc3RhcnQgbXVzdCBiZSAwLTYgKFN1bmRheSAtIFNhdHVyZGF5KVxuICBASW5wdXQoKVxuICBzZWxlY3RlZDogRGF0ZUxpa2VbXSA9IFtdO1xuICBASW5wdXQoKVxuICBwcmV2aWV3OiBEYXRlTGlrZVtdID0gW107XG4gIEBJbnB1dCgpXG4gIG92ZXJsYXlzOiBPdmVybGF5RGF0ZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAQm9vbGVhbklucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWRlLW92ZXJmbG93LWRheXMnKVxuICBwdWJsaWMgaGlkZU92ZXJmbG93RGF5czogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIF93ZWVrU3RhcnRzT246IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHdlZWtTdGFydHNPbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93ZWVrU3RhcnRzT247XG4gIH1cbiAgc2V0IHdlZWtTdGFydHNPbih2YWx1ZSkge1xuICAgIHRoaXMuX3dlZWtTdGFydHNPbiA9IHZhbHVlO1xuICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLmxhYmVscy5nZXRXZWVrZGF5cyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuYWN0aXZlRGF0ZSk7XG4gIH1cblxuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgaG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgLy8gTGlzdCBvZiBhbGwgdGhlIHdlZWtkYXlzXG4gIHdlZWtkYXlzOiBzdHJpbmdbXSA9IHRoaXMubGFiZWxzLmdldFdlZWtkYXlzKHRoaXMud2Vla1N0YXJ0c09uKTtcbiAgLy8gTGlzdCBvZiBhbGwgbW9udGhzXG4gIG1vbnRoTmFtZXM6IHN0cmluZ1tdID0gdGhpcy5sYWJlbHMuZ2V0TW9udGhzKCk7XG5cbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuICB3ZWVrczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFNldCBsYWJlbHNcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMubW9udGhMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHRoaXMuYWN0aXZlRGF0ZSwgeyBtb250aDogJ3Nob3J0JyB9KTtcbiAgICB0aGlzLmJ1aWxkTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGV2ZW50OiBFdmVudCwgZGF5OiBEYXkpIHtcbiAgICAvLyBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zZWxlY3QubmV4dCh7IGV2ZW50LCBkYXkgfSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkhvdmVyKGV2ZW50OiBFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcbiAgICB0aGlzLmlzUmFuZ2UgJiYgdGhpcy5ob3Zlci5uZXh0KHsgZXZlbnQsIGRheSB9KTtcbiAgfVxuXG4gIGJ1aWxkTW9udGgobW9udGg6IERhdGUpIHtcbiAgICAvLyBSZXNldCB0aGUgd2Vla3NcbiAgICB0aGlzLndlZWtzID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgobW9udGgpO1xuXG4gICAgLy8gSG91c2Uga2VlcGluZyB2YXJpYWJsZXMgdG8ga25vdyB3aGVuIHdlIGFyZSBkb25lIGJ1aWxkaW5nIHRoZSBtb250aFxuICAgIGxldCBkb25lID0gZmFsc2UsXG4gICAgICBkYXRlID0gc3RhcnRPZldlZWsoc3RhcnQsIHsgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbiB9KSxcbiAgICAgIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCksXG4gICAgICBjb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgIC8vIEJ1aWxkIHRoZSBkYXlzIGZvciB0aGUgd2Vla3NcbiAgICAgIHRoaXMud2Vla3MucHVzaCh7IGRheXM6IHRoaXMuYnVpbGRXZWVrKG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKSwgbW9udGgpIH0pO1xuXG4gICAgICAvLyBJbmNyZW1lbnQgdmFyaWFibGVzIGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGRhdGUgPSBhZGREYXlzKGRhdGUsIDcpO1xuICAgICAgZG9uZSA9IGNvdW50KysgPiAyICYmIG1vbnRoSW5kZXggIT09IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRXZWVrKGRhdGU6IERhdGUsIG1vbnRoOiBEYXRlKTogQXJyYXk8T2JqZWN0PiB7XG4gICAgLy8gQnVpbGQgb3V0IG9mIHRoZSBkYXlzIG9mIHRoZSB3ZWVrXG4gICAgY29uc3QgZGF5cyA9IFtdO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgZGF5cyBvZiB0aGUgd2Vla1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAvLyBQdXNoIGEgdmFyaWFibGUgb24gdGhlIGRheSBhcnJheSB3aXRoIGxvdHMgb2YgaGVscGVycyB0byBtYWtlIHRoZSB0ZW1wbGF0ZSBlYXNpZXJcbiAgICAgIGRheXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHRoaXMud2Vla2RheXNbaV0sXG4gICAgICAgIG51bWJlcjogZGF0ZS5nZXREYXRlKCksXG4gICAgICAgIGlzVG9kYXk6IGlzVG9kYXkoZGF0ZSksXG4gICAgICAgIGRhdGUsXG4gICAgICB9KTtcblxuICAgICAgLy8gSW5jcmVtZW50IGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGRhdGUgPSBhZGREYXlzKGRhdGUsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlzO1xuICB9XG5cbiAgaXNEaXNhYmxlZChkYXk6IERhdGVMaWtlKSB7XG4gICAgcmV0dXJuICh0aGlzLm1pbkRhdGUgJiYgaXNCZWZvcmUoZGF5LCB0aGlzLm1pbkRhdGUpKSB8fCAodGhpcy5tYXhEYXRlICYmIGlzQWZ0ZXIoZGF5LCB0aGlzLm1heERhdGUpKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHdoZXRoZXIgYSBjZWxsIHNob3VsZCBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQuICovXG4gIF9pc1NlbGVjdGVkKHZhbHVlOiBEYXRlTGlrZSkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQuZmluZCgoZCkgPT4gaXNTYW1lRGF5KGQsIHZhbHVlKSk7XG4gIH1cblxuICAvKiogUmV0dXJucyB3aGV0aGVyIGEgY2VsbCBzaG91bGQgYmUgbWFya2VkIGFzIHByZXZpZXcuICovXG4gIF9pc1ByZXZpZXcodmFsdWU6IERhdGVMaWtlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJldmlldyAmJiB0aGlzLnByZXZpZXcuZmluZCgoZCkgPT4gaXNTYW1lRGF5KGQsIHZhbHVlKSk7XG4gIH1cblxuICAvKiogUmV0dXJucyB3aGV0aGVyIGEgY2VsbCBzaG91bGQgYmUgbWFya2VkIGFzIGFuIG92ZXJsYXkuICovXG4gIF9pc092ZXJsYXkodmFsdWU6IERhdGVMaWtlKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheXMgJiYgdGhpcy5vdmVybGF5cy5maW5kKChvKSA9PiBpc1NhbWVEYXkoby5kYXRlLCB2YWx1ZSkpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgd2hldGhlciBhIGNlbGwgc2hvdWxkIGJlIG1hcmtlZCBhcyBhbiBvdmVybGF5LiAqL1xuICBfaGFzT3ZlcmxheVR5cGUodmFsdWU6IERhdGVMaWtlKSB7XG4gICAgbGV0IG92ZXJsYXkgPSB0aGlzLm92ZXJsYXlzICYmIHRoaXMub3ZlcmxheXMuZmluZCgobykgPT4gaXNTYW1lRGF5KG8uZGF0ZSwgdmFsdWUpKTtcbiAgICByZXR1cm4gb3ZlcmxheSA/IG92ZXJsYXkudHlwZSA6IG51bGw7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdGhlIHN0YXJ0IG9mIHRoZSBtYWluIHJhbmdlLiAqL1xuICBfaXNSYW5nZVN0YXJ0KHZhbHVlOiBEYXRlTGlrZSkge1xuICAgIHJldHVybiBpc1N0YXJ0KHZhbHVlLCB0aGlzLnNlbGVjdGVkLCB0aGlzLmlzUmFuZ2UpO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBlbmQgb2YgdGhlIG1haW4gcmFuZ2UuICovXG4gIF9pc1JhbmdlRW5kKHZhbHVlOiBEYXRlTGlrZSkge1xuICAgIHJldHVybiBpc0VuZCh2YWx1ZSwgdGhpcy5zZWxlY3RlZCwgdGhpcy5pc1JhbmdlKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgYSB2YWx1ZSBpcyB3aXRoaW4gdGhlIGN1cnJlbnRseS1zZWxlY3RlZCByYW5nZS4gKi9cbiAgX2lzSW5SYW5nZSh2YWx1ZTogRGF0ZUxpa2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNJblJhbmdlKHZhbHVlLCB0aGlzLnNlbGVjdGVkLCB0aGlzLmlzUmFuZ2UpO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBzdGFydCBvZiB0aGUgcHJldmlldyByYW5nZS4gKi9cbiAgX2lzUHJldmlld1N0YXJ0KHZhbHVlOiBEYXRlTGlrZSkge1xuICAgIHJldHVybiBpc1N0YXJ0KHZhbHVlLCB0aGlzLnByZXZpZXcsIHRoaXMuaXNSYW5nZSk7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdGhlIGVuZCBvZiB0aGUgcHJldmlldyByYW5nZS4gKi9cbiAgX2lzUHJldmlld0VuZCh2YWx1ZTogRGF0ZUxpa2UpIHtcbiAgICByZXR1cm4gaXNFbmQodmFsdWUsIHRoaXMucHJldmlldywgdGhpcy5pc1JhbmdlKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgYSB2YWx1ZSBpcyBpbnNpZGUgdGhlIHByZXZpZXcgcmFuZ2UuICovXG4gIF9pc0luUHJldmlldyh2YWx1ZTogRGF0ZUxpa2UpIHtcbiAgICByZXR1cm4gaXNJblJhbmdlKHZhbHVlLCB0aGlzLnByZXZpZXcsIHRoaXMuaXNSYW5nZSk7XG4gIH1cbn1cblxuLyoqIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgdGhlIHN0YXJ0IG9mIGEgcmFuZ2UuICovXG5mdW5jdGlvbiBpc1N0YXJ0KHZhbHVlOiBEYXRlTGlrZSwgcmFuZ2U6IERhdGVMaWtlW10gfCBudWxsLCByYW5nZUVuYWJsZWQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2UgPz8gW107XG4gIHJldHVybiByYW5nZUVuYWJsZWQgJiYgZW5kICE9PSBudWxsICYmICFpc1NhbWVEYXkoc3RhcnQsIGVuZCkgJiYgdmFsdWUgPCBlbmQgJiYgaXNTYW1lRGF5KHZhbHVlLCBzdGFydCk7XG59XG5cbi8qKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBlbmQgb2YgYSByYW5nZS4gKi9cbmZ1bmN0aW9uIGlzRW5kKHZhbHVlOiBEYXRlTGlrZSwgcmFuZ2U6IERhdGVMaWtlW10gfCBudWxsLCByYW5nZUVuYWJsZWQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2UgPz8gW107XG4gIHJldHVybiByYW5nZUVuYWJsZWQgJiYgc3RhcnQgIT09IG51bGwgJiYgIWlzU2FtZURheShzdGFydCwgZW5kKSAmJiB2YWx1ZSA+PSBzdGFydCAmJiBpc1NhbWVEYXkodmFsdWUsIGVuZCk7XG59XG5cbi8qKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIGluc2lkZSBvZiBhIHJhbmdlLiAqL1xuZnVuY3Rpb24gaXNJblJhbmdlKHZhbHVlOiBEYXRlTGlrZSwgcmFuZ2U6IERhdGVMaWtlW10gfCBudWxsLCByYW5nZUVuYWJsZWQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2UgPz8gW107XG4gIHJldHVybiByYW5nZUVuYWJsZWQgJiYgc3RhcnQgIT09IG51bGwgJiYgZW5kICE9PSBudWxsICYmICFpc1NhbWVEYXkoc3RhcnQsIGVuZCkgJiYgdmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZW5kO1xufVxuIiwiPGRpdiBjbGFzcz1cImNhbGVuZGFyLXRhYmxlXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCI+XG4gIDxkaXYgY2xhc3M9XCJjYWxlbmRhci10aGVhZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci10aCB3ZWVrZGF5XCIgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrZGF5c1wiIHRpdGxlPVwie3sgZGF5IH19XCJcbiAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXkuc3Vic3RyKDAsIDIpXCI+XG4gICAgICB7eyBkYXkuc3Vic3RyKDAsIDIpIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci13ZWVrXCIgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIlxuICAgICAgICBbY2xhc3MudG9kYXldPVwiZGF5LmlzVG9kYXlcIlxuICAgICAgICBbY2xhc3Mubm90aW5tb250aF09XCJkYXkuZGF0ZS5nZXRNb250aCgpICE9PSBhY3RpdmVEYXRlLmdldE1vbnRoKClcIlxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiX2lzU2VsZWN0ZWQoZGF5LmRhdGUpXCJcbiAgICAgICAgW2NsYXNzLnByZXZpZXddPVwiX2lzUHJldmlldyhkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3Mub3ZlcmxheV09XCJfaXNPdmVybGF5KGRheS5kYXRlKVwiXG4gICAgICAgIFtjbGFzc109XCJfaGFzT3ZlcmxheVR5cGUoZGF5LmRhdGUpXCJcbiAgICAgICAgW2NsYXNzLmluUmFuZ2VdPVwiX2lzSW5SYW5nZShkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MucmFuZ2VTdGFydF09XCJfaXNSYW5nZVN0YXJ0KGRheS5kYXRlKVwiXG4gICAgICAgIFtjbGFzcy5yYW5nZUVuZF09XCJfaXNSYW5nZUVuZChkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MuaW5QcmV2aWV3XT1cIl9pc0luUHJldmlldyhkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MucHJldmlld1N0YXJ0XT1cIl9pc1ByZXZpZXdTdGFydChkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MucHJldmlld0VuZF09XCJfaXNQcmV2aWV3RW5kKGRheS5kYXRlKVwiXG4gICAgICAgIFtjbGFzcy5jYWxlbmRhci1kYXRlXT1cInRydWVcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRheS5uYW1lXCJcbiAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJpc0Rpc2FibGVkKGRheS5kYXRlKVwiXG4gICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiX2lzU2VsZWN0ZWQoZGF5LmRhdGUpXCJcbiAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5udW1iZXJcIlxuICAgICAgICAobW91c2VvdmVyKT1cIm9uSG92ZXIoJGV2ZW50LCBkYXkpXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImRheVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5udW1iZXJcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKGRheS5kYXRlKVwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KCRldmVudCwgZGF5KVwiPlxuICAgICAgICAgIHt7IGRheS5udW1iZXIgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=