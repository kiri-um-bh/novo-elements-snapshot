import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import * as dateFns from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pipe/Month.pipe";
import * as i3 from "../pipe/Year.pipe";
import * as i4 from "../pipe/MonthDay.pipe";
import * as i5 from "../pipe/EndOfWeekDisplayPipe.pipe";
import * as i6 from "../pipe/Weekday.pipe";
import * as i7 from "../pipe/DayOfMonth.pipe";
function NovoCalendarDateChangeElement_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "month");
    i0.ɵɵpipe(3, "year");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r0.viewDate, ctx_r0.locale) + " " + i0.ɵɵpipeBind2(3, 4, ctx_r0.viewDate, ctx_r0.locale));
} }
function NovoCalendarDateChangeElement_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "monthday");
    i0.ɵɵpipe(3, "endofweekdisplay");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, ctx_r1.startOfWeek, ctx_r1.locale, "long") + " - " + i0.ɵɵpipeBind4(3, 5, ctx_r1.endOfWeek, ctx_r1.startOfWeek, ctx_r1.locale, "long"));
} }
function NovoCalendarDateChangeElement_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "weekday");
    i0.ɵɵpipe(3, "month");
    i0.ɵɵpipe(4, "dayofmonth");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, ctx_r2.viewDate, ctx_r2.locale, "long") + ", " + i0.ɵɵpipeBind2(3, 5, ctx_r2.viewDate, ctx_r2.locale) + " " + i0.ɵɵpipeBind2(4, 8, ctx_r2.viewDate, ctx_r2.locale));
} }
export class NovoCalendarDateChangeElement {
    constructor(locale) {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    subtractDate() {
        this.changeDate(-1);
    }
    addDate() {
        this.changeDate(1);
    }
    changeDate(unit) {
        const addFn = {
            day: dateFns.addDays,
            week: dateFns.addWeeks,
            month: dateFns.addMonths,
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, unit));
    }
    get startOfWeek() {
        return dateFns.startOfWeek(this.viewDate);
    }
    get endOfWeek() {
        return dateFns.endOfWeek(this.viewDate);
    }
}
NovoCalendarDateChangeElement.ɵfac = function NovoCalendarDateChangeElement_Factory(t) { return new (t || NovoCalendarDateChangeElement)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
NovoCalendarDateChangeElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarDateChangeElement, selectors: [["novo-calendar-date-change"]], inputs: { view: "view", viewDate: "viewDate", locale: "locale" }, outputs: { viewDateChange: "viewDateChange" }, decls: 7, vars: 4, consts: [[1, "cal-date-change"], [1, "bhi-arrow-left", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "bhi-arrow-right", 3, "click"]], template: function NovoCalendarDateChangeElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "i", 1);
        i0.ɵɵlistener("click", function NovoCalendarDateChangeElement_Template_i_click_1_listener() { return ctx.subtractDate(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtemplate(3, NovoCalendarDateChangeElement_span_3_Template, 4, 7, "span", 3);
        i0.ɵɵtemplate(4, NovoCalendarDateChangeElement_span_4_Template, 4, 10, "span", 3);
        i0.ɵɵtemplate(5, NovoCalendarDateChangeElement_span_5_Template, 5, 11, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "i", 4);
        i0.ɵɵlistener("click", function NovoCalendarDateChangeElement_Template_i_click_6_listener() { return ctx.addDate(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitch", ctx.view);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "month");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "week");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "day");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase], pipes: [i2.MonthPipe, i3.YearPipe, i4.MonthDayPipe, i5.EndOfWeekDisplayPipe, i6.WeekdayPipe, i7.DayOfMonthPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarDateChangeElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-date-change',
                template: `
    <div class="cal-date-change">
        <i class="bhi-arrow-left" (click)="subtractDate()" ></i>
        <span [ngSwitch]="view">
            <span *ngSwitchCase="'month'">{{ ( viewDate | month:locale ) + ' ' + ( viewDate | year:locale ) }}</span>
            <span *ngSwitchCase="'week'">{{ ( startOfWeek | monthday:locale:'long' ) + ' - ' + ( endOfWeek | endofweekdisplay:startOfWeek:locale:'long' ) }}</span>
            <span *ngSwitchCase="'day'">{{ ( viewDate | weekday:locale:'long' ) + ', ' + ( viewDate | month:locale ) + ' ' + ( viewDate | dayofmonth:locale ) }}</span>
        </span>
        <i class="bhi-arrow-right" (click)="addDate()"></i>
    </div>
  `,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { view: [{
            type: Input
        }], viewDate: [{
            type: Input
        }], locale: [{
            type: Input
        }], viewDateChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXRlQ2hhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7O0lBUXhCLDRCQUE4QjtJQUFBLFlBQW9FOzs7SUFBQSxpQkFBTzs7O0lBQTNFLGVBQW9FO0lBQXBFLHVJQUFvRTs7O0lBQ2xHLDRCQUE2QjtJQUFBLFlBQW1IOzs7SUFBQSxpQkFBTzs7O0lBQTFILGVBQW1IO0lBQW5ILGlMQUFtSDs7O0lBQ2hKLDRCQUE0QjtJQUFBLFlBQXdIOzs7O0lBQUEsaUJBQU87OztJQUEvSCxlQUF3SDtJQUF4SCw2TUFBd0g7O0FBTWhLLE1BQU0sT0FBTyw2QkFBNkI7SUFzQnhDLFlBQStCLE1BQWM7UUFON0M7O1dBRUc7UUFFSCxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixNQUFNLEtBQUssR0FBUTtZQUNqQixHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUztTQUN6QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7MEdBckRVLDZCQUE2Qix1QkFzQnBCLFNBQVM7a0VBdEJsQiw2QkFBNkI7UUFYdEMsOEJBQ0k7UUFBQSw0QkFBd0Q7UUFBOUIscUdBQVMsa0JBQWMsSUFBQztRQUFFLGlCQUFJO1FBQ3hELCtCQUNJO1FBQUEsZ0ZBQThCO1FBQzlCLGlGQUE2QjtRQUM3QixpRkFBNEI7UUFDaEMsaUJBQU87UUFDUCw0QkFBbUQ7UUFBeEIscUdBQVMsYUFBUyxJQUFDO1FBQUMsaUJBQUk7UUFDdkQsaUJBQU07O1FBTkksZUFBaUI7UUFBakIsbUNBQWlCO1FBQ2IsZUFBdUI7UUFBdkIsc0NBQXVCO1FBQ3ZCLGVBQXNCO1FBQXRCLHFDQUFzQjtRQUN0QixlQUFxQjtRQUFyQixvQ0FBcUI7O2tEQU0xQiw2QkFBNkI7Y0FkekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2FBQ0Y7O3NCQXVCYyxNQUFNO3VCQUFDLFNBQVM7O2tCQWxCNUIsS0FBSzs7a0JBTUwsS0FBSzs7a0JBR0wsS0FBSzs7a0JBTUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBMT0NBTEVfSUQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1kYXRlLWNoYW5nZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbC1kYXRlLWNoYW5nZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1sZWZ0XCIgKGNsaWNrKT1cInN1YnRyYWN0RGF0ZSgpXCIgPjwvaT5cbiAgICAgICAgPHNwYW4gW25nU3dpdGNoXT1cInZpZXdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCI+e3sgKCB2aWV3RGF0ZSB8IG1vbnRoOmxvY2FsZSApICsgJyAnICsgKCB2aWV3RGF0ZSB8IHllYXI6bG9jYWxlICkgfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ3dlZWsnXCI+e3sgKCBzdGFydE9mV2VlayB8IG1vbnRoZGF5OmxvY2FsZTonbG9uZycgKSArICcgLSAnICsgKCBlbmRPZldlZWsgfCBlbmRvZndlZWtkaXNwbGF5OnN0YXJ0T2ZXZWVrOmxvY2FsZTonbG9uZycgKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInZGF5J1wiPnt7ICggdmlld0RhdGUgfCB3ZWVrZGF5OmxvY2FsZTonbG9uZycgKSArICcsICcgKyAoIHZpZXdEYXRlIHwgbW9udGg6bG9jYWxlICkgKyAnICcgKyAoIHZpZXdEYXRlIHwgZGF5b2Ztb250aDpsb2NhbGUgKSB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1yaWdodFwiIChjbGljayk9XCJhZGREYXRlKClcIj48L2k+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50IHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXc6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzdWJ0cmFjdERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEYXRlKC0xKTtcbiAgfVxuXG4gIGFkZERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEYXRlKDEpO1xuICB9XG5cbiAgY2hhbmdlRGF0ZSh1bml0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBhZGRGbjogYW55ID0ge1xuICAgICAgZGF5OiBkYXRlRm5zLmFkZERheXMsXG4gICAgICB3ZWVrOiBkYXRlRm5zLmFkZFdlZWtzLFxuICAgICAgbW9udGg6IGRhdGVGbnMuYWRkTW9udGhzLFxuICAgIH1bdGhpcy52aWV3XTtcblxuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChhZGRGbih0aGlzLnZpZXdEYXRlLCB1bml0KSk7XG4gIH1cblxuICBnZXQgc3RhcnRPZldlZWsoKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuc3RhcnRPZldlZWsodGhpcy52aWV3RGF0ZSk7XG4gIH1cblxuICBnZXQgZW5kT2ZXZWVrKCkge1xuICAgIHJldHVybiBkYXRlRm5zLmVuZE9mV2Vlayh0aGlzLnZpZXdEYXRlKTtcbiAgfVxufVxuIl19