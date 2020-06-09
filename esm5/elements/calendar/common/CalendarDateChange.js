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
    var ctx_r0 = i0.ɵɵnextContext();
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
    var ctx_r1 = i0.ɵɵnextContext();
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
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, ctx_r2.viewDate, ctx_r2.locale, "long") + ", " + i0.ɵɵpipeBind2(3, 5, ctx_r2.viewDate, ctx_r2.locale) + " " + i0.ɵɵpipeBind2(4, 8, ctx_r2.viewDate, ctx_r2.locale));
} }
var NovoCalendarDateChangeElement = /** @class */ (function () {
    function NovoCalendarDateChangeElement(locale) {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    NovoCalendarDateChangeElement.prototype.subtractDate = function () {
        this.changeDate(-1);
    };
    NovoCalendarDateChangeElement.prototype.addDate = function () {
        this.changeDate(1);
    };
    NovoCalendarDateChangeElement.prototype.changeDate = function (unit) {
        var addFn = {
            day: dateFns.addDays,
            week: dateFns.addWeeks,
            month: dateFns.addMonths,
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, unit));
    };
    Object.defineProperty(NovoCalendarDateChangeElement.prototype, "startOfWeek", {
        get: function () {
            return dateFns.startOfWeek(this.viewDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoCalendarDateChangeElement.prototype, "endOfWeek", {
        get: function () {
            return dateFns.endOfWeek(this.viewDate);
        },
        enumerable: true,
        configurable: true
    });
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
    return NovoCalendarDateChangeElement;
}());
export { NovoCalendarDateChangeElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarDateChangeElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-date-change',
                template: "\n    <div class=\"cal-date-change\">\n        <i class=\"bhi-arrow-left\" (click)=\"subtractDate()\" ></i>\n        <span [ngSwitch]=\"view\">\n            <span *ngSwitchCase=\"'month'\">{{ ( viewDate | month:locale ) + ' ' + ( viewDate | year:locale ) }}</span>\n            <span *ngSwitchCase=\"'week'\">{{ ( startOfWeek | monthday:locale:'long' ) + ' - ' + ( endOfWeek | endofweekdisplay:startOfWeek:locale:'long' ) }}</span>\n            <span *ngSwitchCase=\"'day'\">{{ ( viewDate | weekday:locale:'long' ) + ', ' + ( viewDate | month:locale ) + ' ' + ( viewDate | dayofmonth:locale ) }}</span>\n        </span>\n        <i class=\"bhi-arrow-right\" (click)=\"addDate()\"></i>\n    </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXRlQ2hhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7O0lBUXhCLDRCQUE4QjtJQUFBLFlBQW9FOzs7SUFBQSxpQkFBTzs7O0lBQTNFLGVBQW9FO0lBQXBFLHVJQUFvRTs7O0lBQ2xHLDRCQUE2QjtJQUFBLFlBQW1IOzs7SUFBQSxpQkFBTzs7O0lBQTFILGVBQW1IO0lBQW5ILGlMQUFtSDs7O0lBQ2hKLDRCQUE0QjtJQUFBLFlBQXdIOzs7O0lBQUEsaUJBQU87OztJQUEvSCxlQUF3SDtJQUF4SCw2TUFBd0g7O0FBUmhLO0lBb0NFLHVDQUErQixNQUFjO1FBTjdDOztXQUVHO1FBRUgsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxvREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0RBQVUsR0FBVixVQUFXLElBQVk7UUFDckIsSUFBTSxLQUFLLEdBQVE7WUFDakIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDekIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxzQkFBSSxzREFBVzthQUFmO1lBQ0UsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFTO2FBQWI7WUFDRSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUFBOzhHQXJEVSw2QkFBNkIsdUJBc0JwQixTQUFTO3NFQXRCbEIsNkJBQTZCO1lBWHRDLDhCQUNJO1lBQUEsNEJBQXdEO1lBQTlCLHFHQUFTLGtCQUFjLElBQUM7WUFBRSxpQkFBSTtZQUN4RCwrQkFDSTtZQUFBLGdGQUE4QjtZQUM5QixpRkFBNkI7WUFDN0IsaUZBQTRCO1lBQ2hDLGlCQUFPO1lBQ1AsNEJBQW1EO1lBQXhCLHFHQUFTLGFBQVMsSUFBQztZQUFDLGlCQUFJO1lBQ3ZELGlCQUFNOztZQU5JLGVBQWlCO1lBQWpCLG1DQUFpQjtZQUNiLGVBQXVCO1lBQXZCLHNDQUF1QjtZQUN2QixlQUFzQjtZQUF0QixxQ0FBc0I7WUFDdEIsZUFBcUI7WUFBckIsb0NBQXFCOzt3Q0FadkM7Q0F3RUMsQUFwRUQsSUFvRUM7U0F0RFksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FkekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSw4ckJBVVQ7YUFDRjs7c0JBdUJjLE1BQU07dUJBQUMsU0FBUzs7a0JBbEI1QixLQUFLOztrQkFNTCxLQUFLOztrQkFHTCxLQUFLOztrQkFNTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIExPQ0FMRV9JRCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRhdGUtY2hhbmdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLWRhdGUtY2hhbmdlXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LWxlZnRcIiAoY2xpY2spPVwic3VidHJhY3REYXRlKClcIiA+PC9pPlxuICAgICAgICA8c3BhbiBbbmdTd2l0Y2hdPVwidmlld1wiPlxuICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIj57eyAoIHZpZXdEYXRlIHwgbW9udGg6bG9jYWxlICkgKyAnICcgKyAoIHZpZXdEYXRlIHwgeWVhcjpsb2NhbGUgKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIj57eyAoIHN0YXJ0T2ZXZWVrIHwgbW9udGhkYXk6bG9jYWxlOidsb25nJyApICsgJyAtICcgKyAoIGVuZE9mV2VlayB8IGVuZG9md2Vla2Rpc3BsYXk6c3RhcnRPZldlZWs6bG9jYWxlOidsb25nJyApIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidkYXknXCI+e3sgKCB2aWV3RGF0ZSB8IHdlZWtkYXk6bG9jYWxlOidsb25nJyApICsgJywgJyArICggdmlld0RhdGUgfCBtb250aDpsb2NhbGUgKSArICcgJyArICggdmlld0RhdGUgfCBkYXlvZm1vbnRoOmxvY2FsZSApIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LXJpZ2h0XCIgKGNsaWNrKT1cImFkZERhdGUoKVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgdmlldzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHN1YnRyYWN0RGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURhdGUoLTEpO1xuICB9XG5cbiAgYWRkRGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURhdGUoMSk7XG4gIH1cblxuICBjaGFuZ2VEYXRlKHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGFkZEZuOiBhbnkgPSB7XG4gICAgICBkYXk6IGRhdGVGbnMuYWRkRGF5cyxcbiAgICAgIHdlZWs6IGRhdGVGbnMuYWRkV2Vla3MsXG4gICAgICBtb250aDogZGF0ZUZucy5hZGRNb250aHMsXG4gICAgfVt0aGlzLnZpZXddO1xuXG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KGFkZEZuKHRoaXMudmlld0RhdGUsIHVuaXQpKTtcbiAgfVxuXG4gIGdldCBzdGFydE9mV2VlaygpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5zdGFydE9mV2Vlayh0aGlzLnZpZXdEYXRlKTtcbiAgfVxuXG4gIGdldCBlbmRPZldlZWsoKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuZW5kT2ZXZWVrKHRoaXMudmlld0RhdGUpO1xuICB9XG59XG4iXX0=