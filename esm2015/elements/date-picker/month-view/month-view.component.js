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
function NovoMonthViewElement_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", day_r2);
    i0.ɵɵattribute("data-automation-id", day_r2.substr(0, 2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r2.substr(0, 2), " ");
} }
function NovoMonthViewElement_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("mouseover", function NovoMonthViewElement_tr_5_td_1_Template_td_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r7); const day_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onHover($event, day_r5); });
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function NovoMonthViewElement_tr_5_td_1_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r7); const day_r5 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onSelect($event, day_r5); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r4._hasOverlayType(day_r5.date));
    i0.ɵɵclassProp("today", day_r5.isToday)("notinmonth", day_r5.date.getMonth() !== ctx_r4.activeDate.getMonth())("selected", ctx_r4._isSelected(day_r5.date))("preview", ctx_r4._isPreview(day_r5.date))("overlay", ctx_r4._isOverlay(day_r5.date))("inRange", ctx_r4._isInRange(day_r5.date))("rangeStart", ctx_r4._isRangeStart(day_r5.date))("rangeEnd", ctx_r4._isRangeEnd(day_r5.date))("inPreview", ctx_r4._isInPreview(day_r5.date))("previewStart", ctx_r4._isPreviewStart(day_r5.date))("previewEnd", ctx_r4._isPreviewEnd(day_r5.date));
    i0.ɵɵattribute("aria-label", day_r5.name)("aria-disabled", ctx_r4.isDisabled(day_r5.date))("aria-selected", ctx_r4._isSelected(day_r5.date))("data-automation-id", day_r5.number);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r4.isDisabled(day_r5.date));
    i0.ɵɵattribute("data-automation-id", day_r5.number);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r5.number, " ");
} }
function NovoMonthViewElement_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, NovoMonthViewElement_tr_5_td_1_Template, 3, 31, "td", 4);
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
    } }, inputs: { minDate: "minDate", maxDate: "maxDate", activeDate: "activeDate", selected: "selected", preview: "preview", overlays: "overlays", isRange: "isRange", hideOverflowDays: "hideOverflowDays", weekStartsOn: "weekStartsOn" }, outputs: { select: "select", hover: "hover" }, decls: 6, vars: 2, consts: [["cellspacing", "0", "cellpadding", "0", 1, "calendar-table"], ["class", "weekday", 3, "title", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "weekday", 3, "title"], [3, "today", "notinmonth", "selected", "preview", "overlay", "class", "inRange", "rangeStart", "rangeEnd", "inPreview", "previewStart", "previewEnd", "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover"], [1, "day", 3, "disabled", "click"]], template: function NovoMonthViewElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "tr");
        i0.ɵɵtemplate(3, NovoMonthViewElement_th_3_Template, 2, 3, "th", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "tbody");
        i0.ɵɵtemplate(5, NovoMonthViewElement_tr_5_Template, 2, 1, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.weekdays);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.weeks);
    } }, directives: [i3.NgForOf], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{height:-webkit-min-content;height:-moz-min-content;height:min-content;position:relative;width:100%}[_nghost-%COMP%], [_nghost-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#fff}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 0;width:30px}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{font-size:.9em}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%], [_nghost-%COMP%]   table[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{border-radius:3px;color:#666;font-weight:400;margin:5px;overflow-x:hidden;padding:4px 15px;text-align:center;text-overflow:ellipsis}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .month.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   table[_ngcontent-%COMP%]   .year.selected[_ngcontent-%COMP%]{background-color:#4a89dc;color:#fff}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   table[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]:hover{background-color:#4a89dc;color:#fff;cursor:pointer}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{background-color:transparent;border:none;border-radius:50%;box-shadow:inset 0 0 0 2px transparent;font-size:1rem;height:30px;line-height:27px;margin:1px;position:relative;transition:box-shadow .14s ease-in-out;width:30px}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:focus{outline:none}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:disabled{box-shadow:none!important;color:#d7d9e4;cursor:not-allowed!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.notinmonth[_ngcontent-%COMP%]{color:#d7d9e4}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover   .day[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #4a89dc;cursor:pointer}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.inRange[_ngcontent-%COMP%]:hover   .day[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #fff}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.inRange[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#4a89dc;border-radius:0;color:#fff;height:30px;width:100%}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.rangeStart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-radius:50%;border-top-right-radius:0;box-shadow:none!important;position:relative}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.rangeStart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{background:#4a89dc;content:\"\";height:100%;position:absolute;right:-5px;top:0;width:10px;z-index:-1}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.rangeEnd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-radius:50%;border-top-left-radius:0;box-shadow:none!important;position:relative}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.rangeEnd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{background:#4a89dc;content:\"\";height:100%;left:-5px;position:absolute;top:0;width:10px;z-index:-1}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.selected[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{background:#4a89dc;color:#fff}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.preview[_ngcontent-%COMP%]:not(.previewEnd)   .day[_ngcontent-%COMP%]{border:1px dashed #4a89dc}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.preview[_ngcontent-%COMP%]:not(.previewEnd).selected   .day[_ngcontent-%COMP%]{border:1px dashed #9dbeff}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.today[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:inset 0 0 0 2px #d9dadc;content:\"\";height:100%;left:0;margin:0 auto;max-width:30px;position:absolute;top:0;width:100%}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.today.inRange[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.today.selected[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:after{box-shadow:inset 0 0 0 2px #9dbeff}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.inPreview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom:1px dashed #4a89dc;border-radius:0;border-top:1px dashed #4a89dc}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.previewStart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-left:1px dashed #4a89dc;border-radius:50%;border-top-right-radius:0;box-shadow:none!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td.previewEnd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-radius:50%;border-right:1px dashed #4a89dc;border-top-left-radius:0;box-shadow:none!important}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9tb250aC12aWV3L21vbnRoLXZpZXcuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvZGF0ZS1waWNrZXIvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELFNBQVM7QUFDVCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0lDYnhDLDZCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFLOzs7SUFGNEIseUNBQWlCO0lBQWlCLHlEQUE0QztJQUM3RyxlQUNGO0lBREUsb0RBQ0Y7Ozs7SUFLQSw2QkFtQkU7SUFEQSxnUEFBa0M7SUFDbEMsaUNBS0U7SUFEQSw2T0FBK0I7SUFDL0IsWUFDRjtJQUFBLGlCQUFTO0lBQ1gsaUJBQUs7Ozs7SUFuQkgsa0RBQW1DO0lBTG5DLHVDQUEyQix1RUFBQSw2Q0FBQSwyQ0FBQSwyQ0FBQSwyQ0FBQSxpREFBQSw2Q0FBQSwrQ0FB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LEtBQUssQ0FBQyxDQUFDO0FBQzFHLENBQUM7QUFFRCxvREFBb0Q7QUFDcEQsU0FBUyxLQUFLLENBQUMsS0FBZSxFQUFFLEtBQXdCLEVBQUUsWUFBcUI7SUFDN0UsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUM7SUFDakMsT0FBTyxZQUFZLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdHLENBQUM7QUFFRCxtREFBbUQ7QUFDbkQsU0FBUyxTQUFTLENBQUMsS0FBZSxFQUFFLEtBQXdCLEVBQUUsWUFBcUI7SUFDakYsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUM7SUFDakMsT0FBTyxZQUFZLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUM7QUFDcEgsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgYWRkRGF5cywgaXNBZnRlciwgaXNCZWZvcmUsIGlzU2FtZURheSwgaXNUb2RheSwgc3RhcnRPZk1vbnRoLCBzdGFydE9mV2VlayB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZUxpa2UsIERheSwgT3ZlcmxheURhdGUgfSBmcm9tICcuLi9kYXRlLXBpY2tlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbW9udGgtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb250aC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9udGgtdmlldy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vbnRoVmlld0VsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBtaW5EYXRlOiBEYXRlO1xuICBASW5wdXQoKVxuICBtYXhEYXRlOiBEYXRlO1xuICBASW5wdXQoKVxuICBhY3RpdmVEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgLy8gV2Vla3N0YXJ0IG11c3QgYmUgMC02IChTdW5kYXkgLSBTYXR1cmRheSlcbiAgQElucHV0KClcbiAgc2VsZWN0ZWQ6IERhdGVMaWtlW10gPSBbXTtcbiAgQElucHV0KClcbiAgcHJldmlldzogRGF0ZUxpa2VbXSA9IFtdO1xuICBASW5wdXQoKVxuICBvdmVybGF5czogT3ZlcmxheURhdGVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIEBCb29sZWFuSW5wdXQoKVxuICBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZS1vdmVyZmxvdy1kYXlzJylcbiAgcHVibGljIGhpZGVPdmVyZmxvd0RheXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBfd2Vla1N0YXJ0c09uOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB3ZWVrU3RhcnRzT24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vla1N0YXJ0c09uO1xuICB9XG4gIHNldCB3ZWVrU3RhcnRzT24odmFsdWUpIHtcbiAgICB0aGlzLl93ZWVrU3RhcnRzT24gPSB2YWx1ZTtcbiAgICB0aGlzLndlZWtkYXlzID0gdGhpcy5sYWJlbHMuZ2V0V2Vla2RheXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmFjdGl2ZURhdGUpO1xuICB9XG5cbiAgLy8gU2VsZWN0IGNhbGxiYWNrIGZvciBvdXRwdXRcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcbiAgLy8gU2VsZWN0IGNhbGxiYWNrIGZvciBvdXRwdXRcbiAgQE91dHB1dCgpXG4gIGhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIC8vIExpc3Qgb2YgYWxsIHRoZSB3ZWVrZGF5c1xuICB3ZWVrZGF5czogc3RyaW5nW10gPSB0aGlzLmxhYmVscy5nZXRXZWVrZGF5cyh0aGlzLndlZWtTdGFydHNPbik7XG4gIC8vIExpc3Qgb2YgYWxsIG1vbnRoc1xuICBtb250aE5hbWVzOiBzdHJpbmdbXSA9IHRoaXMubGFiZWxzLmdldE1vbnRocygpO1xuXG4gIG1vbnRoTGFiZWw6IHN0cmluZztcbiAgd2Vla3M6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBTZXQgbGFiZWxzXG4gICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuYWN0aXZlRGF0ZSk7XG4gIH1cblxuICB1cGRhdGVWaWV3KGRhdGU6IERhdGUpIHtcbiAgICB0aGlzLm1vbnRoTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh0aGlzLmFjdGl2ZURhdGUsIHsgbW9udGg6ICdzaG9ydCcgfSk7XG4gICAgdGhpcy5idWlsZE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gIH1cblxuICBvblNlbGVjdChldmVudDogRXZlbnQsIGRheTogRGF5KSB7XG4gICAgLy8gSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoeyBldmVudCwgZGF5IH0pO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25Ib3ZlcihldmVudDogRXZlbnQsIGRheTogRGF5KTogdm9pZCB7XG4gICAgdGhpcy5pc1JhbmdlICYmIHRoaXMuaG92ZXIubmV4dCh7IGV2ZW50LCBkYXkgfSk7XG4gIH1cblxuICBidWlsZE1vbnRoKG1vbnRoOiBEYXRlKSB7XG4gICAgLy8gUmVzZXQgdGhlIHdlZWtzXG4gICAgdGhpcy53ZWVrcyA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZk1vbnRoKG1vbnRoKTtcblxuICAgIC8vIEhvdXNlIGtlZXBpbmcgdmFyaWFibGVzIHRvIGtub3cgd2hlbiB3ZSBhcmUgZG9uZSBidWlsZGluZyB0aGUgbW9udGhcbiAgICBsZXQgZG9uZSA9IGZhbHNlLFxuICAgICAgZGF0ZSA9IHN0YXJ0T2ZXZWVrKHN0YXJ0LCB7IHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24gfSksXG4gICAgICBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpLFxuICAgICAgY291bnQgPSAwO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAvLyBCdWlsZCB0aGUgZGF5cyBmb3IgdGhlIHdlZWtzXG4gICAgICB0aGlzLndlZWtzLnB1c2goeyBkYXlzOiB0aGlzLmJ1aWxkV2VlayhuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSksIG1vbnRoKSB9KTtcblxuICAgICAgLy8gSW5jcmVtZW50IHZhcmlhYmxlcyBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICBkYXRlID0gYWRkRGF5cyhkYXRlLCA3KTtcbiAgICAgIGRvbmUgPSBjb3VudCsrID4gMiAmJiBtb250aEluZGV4ICE9PSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkV2VlayhkYXRlOiBEYXRlLCBtb250aDogRGF0ZSk6IEFycmF5PE9iamVjdD4ge1xuICAgIC8vIEJ1aWxkIG91dCBvZiB0aGUgZGF5cyBvZiB0aGUgd2Vla1xuICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGRheXMgb2YgdGhlIHdlZWtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgLy8gUHVzaCBhIHZhcmlhYmxlIG9uIHRoZSBkYXkgYXJyYXkgd2l0aCBsb3RzIG9mIGhlbHBlcnMgdG8gbWFrZSB0aGUgdGVtcGxhdGUgZWFzaWVyXG4gICAgICBkYXlzLnB1c2goe1xuICAgICAgICBuYW1lOiB0aGlzLndlZWtkYXlzW2ldLFxuICAgICAgICBudW1iZXI6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICBpc1RvZGF5OiBpc1RvZGF5KGRhdGUpLFxuICAgICAgICBkYXRlLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEluY3JlbWVudCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICBkYXRlID0gYWRkRGF5cyhkYXRlLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuXG4gIGlzRGlzYWJsZWQoZGF5OiBEYXRlTGlrZSkge1xuICAgIHJldHVybiAodGhpcy5taW5EYXRlICYmIGlzQmVmb3JlKGRheSwgdGhpcy5taW5EYXRlKSkgfHwgKHRoaXMubWF4RGF0ZSAmJiBpc0FmdGVyKGRheSwgdGhpcy5tYXhEYXRlKSk7XG4gIH1cblxuICAvKiogUmV0dXJucyB3aGV0aGVyIGEgY2VsbCBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkLiAqL1xuICBfaXNTZWxlY3RlZCh2YWx1ZTogRGF0ZUxpa2UpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkLmZpbmQoKGQpID0+IGlzU2FtZURheShkLCB2YWx1ZSkpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgd2hldGhlciBhIGNlbGwgc2hvdWxkIGJlIG1hcmtlZCBhcyBwcmV2aWV3LiAqL1xuICBfaXNQcmV2aWV3KHZhbHVlOiBEYXRlTGlrZSkge1xuICAgIHJldHVybiB0aGlzLnByZXZpZXcgJiYgdGhpcy5wcmV2aWV3LmZpbmQoKGQpID0+IGlzU2FtZURheShkLCB2YWx1ZSkpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgd2hldGhlciBhIGNlbGwgc2hvdWxkIGJlIG1hcmtlZCBhcyBhbiBvdmVybGF5LiAqL1xuICBfaXNPdmVybGF5KHZhbHVlOiBEYXRlTGlrZSkge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlzICYmIHRoaXMub3ZlcmxheXMuZmluZCgobykgPT4gaXNTYW1lRGF5KG8uZGF0ZSwgdmFsdWUpKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHdoZXRoZXIgYSBjZWxsIHNob3VsZCBiZSBtYXJrZWQgYXMgYW4gb3ZlcmxheS4gKi9cbiAgX2hhc092ZXJsYXlUeXBlKHZhbHVlOiBEYXRlTGlrZSkge1xuICAgIGxldCBvdmVybGF5ID0gdGhpcy5vdmVybGF5cyAmJiB0aGlzLm92ZXJsYXlzLmZpbmQoKG8pID0+IGlzU2FtZURheShvLmRhdGUsIHZhbHVlKSk7XG4gICAgcmV0dXJuIG92ZXJsYXkgPyBvdmVybGF5LnR5cGUgOiBudWxsO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBzdGFydCBvZiB0aGUgbWFpbiByYW5nZS4gKi9cbiAgX2lzUmFuZ2VTdGFydCh2YWx1ZTogRGF0ZUxpa2UpIHtcbiAgICByZXR1cm4gaXNTdGFydCh2YWx1ZSwgdGhpcy5zZWxlY3RlZCwgdGhpcy5pc1JhbmdlKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgYSB2YWx1ZSBpcyB0aGUgZW5kIG9mIHRoZSBtYWluIHJhbmdlLiAqL1xuICBfaXNSYW5nZUVuZCh2YWx1ZTogRGF0ZUxpa2UpIHtcbiAgICByZXR1cm4gaXNFbmQodmFsdWUsIHRoaXMuc2VsZWN0ZWQsIHRoaXMuaXNSYW5nZSk7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIGEgdmFsdWUgaXMgd2l0aGluIHRoZSBjdXJyZW50bHktc2VsZWN0ZWQgcmFuZ2UuICovXG4gIF9pc0luUmFuZ2UodmFsdWU6IERhdGVMaWtlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzSW5SYW5nZSh2YWx1ZSwgdGhpcy5zZWxlY3RlZCwgdGhpcy5pc1JhbmdlKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgYSB2YWx1ZSBpcyB0aGUgc3RhcnQgb2YgdGhlIHByZXZpZXcgcmFuZ2UuICovXG4gIF9pc1ByZXZpZXdTdGFydCh2YWx1ZTogRGF0ZUxpa2UpIHtcbiAgICByZXR1cm4gaXNTdGFydCh2YWx1ZSwgdGhpcy5wcmV2aWV3LCB0aGlzLmlzUmFuZ2UpO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBlbmQgb2YgdGhlIHByZXZpZXcgcmFuZ2UuICovXG4gIF9pc1ByZXZpZXdFbmQodmFsdWU6IERhdGVMaWtlKSB7XG4gICAgcmV0dXJuIGlzRW5kKHZhbHVlLCB0aGlzLnByZXZpZXcsIHRoaXMuaXNSYW5nZSk7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIGEgdmFsdWUgaXMgaW5zaWRlIHRoZSBwcmV2aWV3IHJhbmdlLiAqL1xuICBfaXNJblByZXZpZXcodmFsdWU6IERhdGVMaWtlKSB7XG4gICAgcmV0dXJuIGlzSW5SYW5nZSh2YWx1ZSwgdGhpcy5wcmV2aWV3LCB0aGlzLmlzUmFuZ2UpO1xuICB9XG59XG5cbi8qKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIHRoZSBzdGFydCBvZiBhIHJhbmdlLiAqL1xuZnVuY3Rpb24gaXNTdGFydCh2YWx1ZTogRGF0ZUxpa2UsIHJhbmdlOiBEYXRlTGlrZVtdIHwgbnVsbCwgcmFuZ2VFbmFibGVkOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlID8/IFtdO1xuICByZXR1cm4gcmFuZ2VFbmFibGVkICYmIGVuZCAhPT0gbnVsbCAmJiAhaXNTYW1lRGF5KHN0YXJ0LCBlbmQpICYmIHZhbHVlIDwgZW5kICYmIGlzU2FtZURheSh2YWx1ZSwgc3RhcnQpO1xufVxuXG4vKiogQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyB0aGUgZW5kIG9mIGEgcmFuZ2UuICovXG5mdW5jdGlvbiBpc0VuZCh2YWx1ZTogRGF0ZUxpa2UsIHJhbmdlOiBEYXRlTGlrZVtdIHwgbnVsbCwgcmFuZ2VFbmFibGVkOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlID8/IFtdO1xuICByZXR1cm4gcmFuZ2VFbmFibGVkICYmIHN0YXJ0ICE9PSBudWxsICYmICFpc1NhbWVEYXkoc3RhcnQsIGVuZCkgJiYgdmFsdWUgPj0gc3RhcnQgJiYgaXNTYW1lRGF5KHZhbHVlLCBlbmQpO1xufVxuXG4vKiogQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBpbnNpZGUgb2YgYSByYW5nZS4gKi9cbmZ1bmN0aW9uIGlzSW5SYW5nZSh2YWx1ZTogRGF0ZUxpa2UsIHJhbmdlOiBEYXRlTGlrZVtdIHwgbnVsbCwgcmFuZ2VFbmFibGVkOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlID8/IFtdO1xuICByZXR1cm4gcmFuZ2VFbmFibGVkICYmIHN0YXJ0ICE9PSBudWxsICYmIGVuZCAhPT0gbnVsbCAmJiAhaXNTYW1lRGF5KHN0YXJ0LCBlbmQpICYmIHZhbHVlID49IHN0YXJ0ICYmIHZhbHVlIDw9IGVuZDtcbn1cbiIsIjx0YWJsZSBjbGFzcz1cImNhbGVuZGFyLXRhYmxlXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrZGF5c1wiIHRpdGxlPVwie3sgZGF5IH19XCIgY2xhc3M9XCJ3ZWVrZGF5XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5zdWJzdHIoMCwgMilcIj5cbiAgICAgICAge3sgZGF5LnN1YnN0cigwLCAyKSB9fVxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCI+XG4gICAgICA8dGRcbiAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIlxuICAgICAgICBbY2xhc3MudG9kYXldPVwiZGF5LmlzVG9kYXlcIlxuICAgICAgICBbY2xhc3Mubm90aW5tb250aF09XCJkYXkuZGF0ZS5nZXRNb250aCgpICE9PSBhY3RpdmVEYXRlLmdldE1vbnRoKClcIlxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiX2lzU2VsZWN0ZWQoZGF5LmRhdGUpXCJcbiAgICAgICAgW2NsYXNzLnByZXZpZXddPVwiX2lzUHJldmlldyhkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3Mub3ZlcmxheV09XCJfaXNPdmVybGF5KGRheS5kYXRlKVwiXG4gICAgICAgIFtjbGFzc109XCJfaGFzT3ZlcmxheVR5cGUoZGF5LmRhdGUpXCJcbiAgICAgICAgW2NsYXNzLmluUmFuZ2VdPVwiX2lzSW5SYW5nZShkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MucmFuZ2VTdGFydF09XCJfaXNSYW5nZVN0YXJ0KGRheS5kYXRlKVwiXG4gICAgICAgIFtjbGFzcy5yYW5nZUVuZF09XCJfaXNSYW5nZUVuZChkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MuaW5QcmV2aWV3XT1cIl9pc0luUHJldmlldyhkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MucHJldmlld1N0YXJ0XT1cIl9pc1ByZXZpZXdTdGFydChkYXkuZGF0ZSlcIlxuICAgICAgICBbY2xhc3MucHJldmlld0VuZF09XCJfaXNQcmV2aWV3RW5kKGRheS5kYXRlKVwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF5Lm5hbWVcIlxuICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImlzRGlzYWJsZWQoZGF5LmRhdGUpXCJcbiAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJfaXNTZWxlY3RlZChkYXkuZGF0ZSlcIlxuICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF5Lm51bWJlclwiXG4gICAgICAgIChtb3VzZW92ZXIpPVwib25Ib3ZlcigkZXZlbnQsIGRheSlcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiZGF5XCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF5Lm51bWJlclwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoZGF5LmRhdGUpXCJcbiAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoJGV2ZW50LCBkYXkpXCI+XG4gICAgICAgICAge3sgZGF5Lm51bWJlciB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+Il19