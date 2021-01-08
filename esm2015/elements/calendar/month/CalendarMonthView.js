import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, TemplateRef, } from '@angular/core';
import * as dateFns from 'date-fns';
import { Subject } from 'rxjs';
import { getMonthView, getWeekViewHeader, } from '../../../utils/calendar-utils/CalendarUtils';
import * as i0 from "@angular/core";
import * as i1 from "./CalendarMonthHeader";
import * as i2 from "@angular/common";
import * as i3 from "./CalendarMonthDay";
function NovoCalendarMonthViewElement_div_3_novo_calendar_month_day_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-calendar-month-day", 6);
    i0.ɵɵlistener("click", function NovoCalendarMonthViewElement_div_3_novo_calendar_month_day_2_Template_novo_calendar_month_day_click_0_listener() { i0.ɵɵrestoreView(_r5); const day_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.dayClicked.emit({ day: day_r3 }); })("eventClicked", function NovoCalendarMonthViewElement_div_3_novo_calendar_month_day_2_Template_novo_calendar_month_day_eventClicked_0_listener($event) { i0.ɵɵrestoreView(_r5); const day_r3 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.eventClicked.emit({ day: day_r3, event: $event.event }); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("day", day_r3)("locale", ctx_r2.locale)("customTemplate", ctx_r2.cellTemplate);
} }
function NovoCalendarMonthViewElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtemplate(2, NovoCalendarMonthViewElement_div_3_novo_calendar_month_day_2_Template, 1, 3, "novo-calendar-month-day", 5);
    i0.ɵɵpipe(3, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rowIndex_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(3, 1, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek));
} }
/**
 * Shows all events on a given month. Example usage:
 *
 * ```
 * &lt;novo-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/novo-calendar-month-view&gt;
 * ```
 */
export class NovoCalendarMonthViewElement {
    /**
     * @hidden
     */
    constructor(cdr, locale) {
        this.cdr = cdr;
        /**
         * An array of events to display on view
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The locale used to format dates
         */
        this.locale = 'en-US';
        /**
         * The placement of the event tooltip
         */
        this.tooltipPosition = 'top';
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        this.viewDateChange = new EventEmitter();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        if (changes.viewDate || changes.excludeDays) {
            this.refreshHeader();
        }
        if (changes.viewDate || changes.events || changes.excludeDays) {
            this.refreshBody();
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
     */
    eventDropped(day, event) {
        const year = dateFns.getYear(day.date);
        const month = dateFns.getMonth(day.date);
        const date = dateFns.getDate(day.date);
        const newStart = dateFns.setYear(dateFns.setMonth(dateFns.setDate(event.start, date), month), year);
        let newEnd;
        if (event.end) {
            const secondsDiff = dateFns.differenceInSeconds(newStart, event.start);
            newEnd = dateFns.addSeconds(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event, newStart, newEnd });
    }
    refreshHeader() {
        this.columnHeaders = getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
        });
    }
    refreshBody() {
        this.view = getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
        });
        if (this.dayModifier) {
            this.view.days.forEach((day) => this.dayModifier(day));
        }
    }
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.viewDateChange.emit(this.viewDate);
    }
}
NovoCalendarMonthViewElement.ɵfac = function NovoCalendarMonthViewElement_Factory(t) { return new (t || NovoCalendarMonthViewElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(LOCALE_ID)); };
NovoCalendarMonthViewElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarMonthViewElement, selectors: [["novo-calendar-month"]], inputs: { viewDate: "viewDate", events: "events", excludeDays: "excludeDays", dayModifier: "dayModifier", refresh: "refresh", locale: "locale", tooltipPosition: "tooltipPosition", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", cellTemplate: "cellTemplate" }, outputs: { dayClicked: "dayClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged", viewDateChange: "viewDateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [[1, "calendar-month-view"], [3, "viewDate", "days", "locale", "customTemplate", "viewDateChange"], [1, "calendar-days"], [4, "ngFor", "ngForOf"], [1, "calendar-cell-row"], [3, "day", "locale", "customTemplate", "click", "eventClicked", 4, "ngFor", "ngForOf"], [3, "day", "locale", "customTemplate", "click", "eventClicked"]], template: function NovoCalendarMonthViewElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "novo-calendar-month-header", 1);
        i0.ɵɵlistener("viewDateChange", function NovoCalendarMonthViewElement_Template_novo_calendar_month_header_viewDateChange_1_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function NovoCalendarMonthViewElement_Template_novo_calendar_month_header_viewDateChange_1_listener() { return ctx.refreshAll(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, NovoCalendarMonthViewElement_div_3_Template, 4, 5, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("viewDate", ctx.viewDate)("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.view.rowOffsets);
    } }, directives: [i1.NovoCalendarMonthHeaderElement, i2.NgForOf, i3.NovoCalendarMonthDayElement], pipes: [i2.SlicePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarMonthViewElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-month',
                template: `
    <div class="calendar-month-view">
      <novo-calendar-month-header
        [(viewDate)]="viewDate"
        [days]="columnHeaders"
        [locale]="locale"
        [customTemplate]="headerTemplate"
        (viewDateChange)="refreshAll()"
      >
      </novo-calendar-month-header>
      <div class="calendar-days">
        <div *ngFor="let rowIndex of view.rowOffsets">
          <div class="calendar-cell-row">
            <novo-calendar-month-day
              *ngFor="let day of view.days | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek"
              [day]="day"
              [locale]="locale"
              [customTemplate]="cellTemplate"
              (click)="dayClicked.emit({ day: day })"
              (eventClicked)="eventClicked.emit({ day: day, event: $event.event })"
            >
            </novo-calendar-month-day>
          </div>
        </div>
      </div>
    </div>
  `,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { viewDate: [{
            type: Input
        }], events: [{
            type: Input
        }], excludeDays: [{
            type: Input
        }], dayModifier: [{
            type: Input
        }], refresh: [{
            type: Input
        }], locale: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], weekStartsOn: [{
            type: Input
        }], headerTemplate: [{
            type: Input
        }], cellTemplate: [{
            type: Input
        }], dayClicked: [{
            type: Output
        }], eventClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }], viewDateChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aFZpZXcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBR0wsWUFBWSxFQUNaLGlCQUFpQixHQUlsQixNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7O0lBMkJ6QyxrREFRMEI7SUFIeEIsbVBBQVMsdUNBQTZCLElBQUMsMFBBQ3ZCLDhEQUFvRCxJQUQ3QjtJQUd6QyxpQkFBMEI7Ozs7SUFOeEIsNEJBQVcseUJBQUEsdUNBQUE7OztJQUpqQiwyQkFDRTtJQUFBLDhCQUNFO0lBQUEsMkhBUUE7O0lBQ0YsaUJBQU07SUFDUixpQkFBTTs7OztJQVRBLGVBQXNGO0lBQXRGLCtIQUFzRjs7QUExQnBHOzs7Ozs7Ozs7R0FTRztBQStCSCxNQUFNLE9BQU8sNEJBQTRCO0lBa0d2Qzs7T0FFRztJQUNILFlBQW9CLEdBQXNCLEVBQXFCLE1BQWM7UUFBekQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE5RjFDOztXQUVHO1FBRUgsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFFN0I7O1dBRUc7UUFFSCxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQWUzQjs7V0FFRztRQUVILFdBQU0sR0FBVyxPQUFPLENBQUM7UUFFekI7O1dBRUc7UUFFSCxvQkFBZSxHQUFX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QWM7a0JBRGIsS0FBSztZQU9OLFlBQVk7a0JBRFgsS0FBSztZQU9OLFVBQVU7a0JBRFQsTUFBTTtZQU9QLFlBQVk7a0JBRFgsTUFBTTtZQU9QLGlCQUFpQjtrQkFEaEIsTUFBTTtZQUlQLGNBQWM7a0JBRGIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTE9DQUxFX0lELFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQsXG4gIGdldE1vbnRoVmlldyxcbiAgZ2V0V2Vla1ZpZXdIZWFkZXIsXG4gIE1vbnRoVmlldyxcbiAgTW9udGhWaWV3RGF5LFxuICBXZWVrRGF5LFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gbW9udGguIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgXG4gKiAmbHQ7bm92by1jYWxlbmRhci1tb250aC12aWV3XG4gKiAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAqICBbZXZlbnRzXT1cImV2ZW50c1wiJmd0O1xuICogJmx0Oy9ub3ZvLWNhbGVuZGFyLW1vbnRoLXZpZXcmZ3Q7XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1tb250aCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLW1vbnRoLXZpZXdcIj5cbiAgICAgIDxub3ZvLWNhbGVuZGFyLW1vbnRoLWhlYWRlclxuICAgICAgICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiXG4gICAgICAgIFtkYXlzXT1cImNvbHVtbkhlYWRlcnNcIlxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJoZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICh2aWV3RGF0ZUNoYW5nZSk9XCJyZWZyZXNoQWxsKClcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLWNhbGVuZGFyLW1vbnRoLWhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1kYXlzXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHJvd0luZGV4IG9mIHZpZXcucm93T2Zmc2V0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jZWxsLXJvd1wiPlxuICAgICAgICAgICAgPG5vdm8tY2FsZW5kYXItbW9udGgtZGF5XG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2Ygdmlldy5kYXlzIHwgc2xpY2U6IHJvd0luZGV4OnJvd0luZGV4ICsgdmlldy50b3RhbERheXNWaXNpYmxlSW5XZWVrXCJcbiAgICAgICAgICAgICAgW2RheV09XCJkYXlcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJjZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZGF5Q2xpY2tlZC5lbWl0KHsgZGF5OiBkYXkgfSlcIlxuICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHsgZGF5OiBkYXksIGV2ZW50OiAkZXZlbnQuZXZlbnQgfSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLW1vbnRoLWRheT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IHdpbGwgYmUgaGlkZGVuIG9uIHRoZSB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBlYWNoIGNlbGwgaXMgcmVuZGVyZWQuIFRoZSBmaXJzdCBhcmd1bWVudCB3aWxsIGNvbnRhaW4gdGhlIGNhbGVuZGFyIGNlbGwuXG4gICAqIElmIHlvdSBhZGQgdGhlIGBjc3NDbGFzc2AgcHJvcGVydHkgdG8gdGhlIGNlbGwgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgY2VsbCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheU1vZGlmaWVyOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmcgPSAndG9wJztcblxuICAvKipcbiAgICogVGhlIHN0YXJ0IG51bWJlciBvZiB0aGUgd2Vla1xuICAgKi9cbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBoZWFkZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgZGF5IGNlbGxcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGRheSBjZWxsIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBkYXlDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBkYXk6IE1vbnRoVmlld0RheSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXk6IE1vbnRoVmlld0RheSB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF5OiBhbnk7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRheTogYW55OyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCBpcyBkcmFnZ2VkIGFuZCBkcm9wcGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRUaW1lc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbHVtbkhlYWRlcnM6IFdlZWtEYXlbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmlldzogTW9udGhWaWV3O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICByZWZyZXNoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaCkge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaEFsbCgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5ldmVudHMgfHwgY2hhbmdlcy5leGNsdWRlRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXZlbnREcm9wcGVkKGRheTogTW9udGhWaWV3RGF5LCBldmVudDogQ2FsZW5kYXJFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IGRhdGVGbnMuZ2V0WWVhcihkYXkuZGF0ZSk7XG4gICAgY29uc3QgbW9udGg6IG51bWJlciA9IGRhdGVGbnMuZ2V0TW9udGgoZGF5LmRhdGUpO1xuICAgIGNvbnN0IGRhdGU6IG51bWJlciA9IGRhdGVGbnMuZ2V0RGF0ZShkYXkuZGF0ZSk7XG4gICAgY29uc3QgbmV3U3RhcnQ6IERhdGUgPSBkYXRlRm5zLnNldFllYXIoZGF0ZUZucy5zZXRNb250aChkYXRlRm5zLnNldERhdGUoZXZlbnQuc3RhcnQsIGRhdGUpLCBtb250aCksIHllYXIpO1xuICAgIGxldCBuZXdFbmQ6IERhdGU7XG4gICAgaWYgKGV2ZW50LmVuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kc0RpZmY6IG51bWJlciA9IGRhdGVGbnMuZGlmZmVyZW5jZUluU2Vjb25kcyhuZXdTdGFydCwgZXZlbnQuc3RhcnQpO1xuICAgICAgbmV3RW5kID0gZGF0ZUZucy5hZGRTZWNvbmRzKGV2ZW50LmVuZCwgc2Vjb25kc0RpZmYpO1xuICAgIH1cbiAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoeyBldmVudCwgbmV3U3RhcnQsIG5ld0VuZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEhlYWRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbkhlYWRlcnMgPSBnZXRXZWVrVmlld0hlYWRlcih7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEJvZHkoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gZ2V0TW9udGhWaWV3KHtcbiAgICAgIGV2ZW50czogdGhpcy5ldmVudHMsXG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5kYXlNb2RpZmllcikge1xuICAgICAgdGhpcy52aWV3LmRheXMuZm9yRWFjaCgoZGF5KSA9PiB0aGlzLmRheU1vZGlmaWVyKGRheSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gIH1cbn1cbiJdfQ==