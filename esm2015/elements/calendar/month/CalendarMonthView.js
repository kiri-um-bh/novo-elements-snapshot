/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/month/CalendarMonthView.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, LOCALE_ID, Inject, TemplateRef, } from '@angular/core';
import { getWeekViewHeader, getMonthView, } from '../../../utils/calendar-utils/CalendarUtils';
import { Subject } from 'rxjs';
import * as dateFns from 'date-fns';
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
     * @param {?} cdr
     * @param {?} locale
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
     * @return {?}
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            () => {
                this.refreshAll();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
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
     * @return {?}
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
     * @param {?} day
     * @param {?} event
     * @return {?}
     */
    eventDropped(day, event) {
        /** @type {?} */
        const year = dateFns.getYear(day.date);
        /** @type {?} */
        const month = dateFns.getMonth(day.date);
        /** @type {?} */
        const date = dateFns.getDate(day.date);
        /** @type {?} */
        const newStart = dateFns.setYear(dateFns.setMonth(dateFns.setDate(event.start, date), month), year);
        /** @type {?} */
        let newEnd;
        if (event.end) {
            /** @type {?} */
            const secondsDiff = dateFns.differenceInSeconds(newStart, event.start);
            newEnd = dateFns.addSeconds(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event, newStart, newEnd });
    }
    /**
     * @private
     * @return {?}
     */
    refreshHeader() {
        this.columnHeaders = getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
        });
    }
    /**
     * @private
     * @return {?}
     */
    refreshBody() {
        this.view = getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
        });
        if (this.dayModifier) {
            this.view.days.forEach((/**
             * @param {?} day
             * @return {?}
             */
            (day) => this.dayModifier(day)));
        }
    }
    /**
     * @return {?}
     */
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.viewDateChange.emit(this.viewDate);
    }
}
NovoCalendarMonthViewElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-calendar-month',
                template: `
    <div class="calendar-month-view">
       <novo-calendar-month-header
         [(viewDate)]="viewDate"
         [days]="columnHeaders"
         [locale]="locale"
         [customTemplate]="headerTemplate"
         (viewDateChange)="refreshAll()">
       </novo-calendar-month-header>
      <div class="calendar-days">
        <div *ngFor="let rowIndex of view.rowOffsets">
          <div class="calendar-cell-row">
            <novo-calendar-month-day
              *ngFor="let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)"
              [day]="day"
              [locale]="locale"
              [customTemplate]="cellTemplate"
              (click)="dayClicked.emit({day: day})"
              (eventClicked)="eventClicked.emit({ day: day, event: $event.event})">
            </novo-calendar-month-day>
          </div>
        </div>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NovoCalendarMonthViewElement.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NovoCalendarMonthViewElement.propDecorators = {
    viewDate: [{ type: Input }],
    events: [{ type: Input }],
    excludeDays: [{ type: Input }],
    dayModifier: [{ type: Input }],
    refresh: [{ type: Input }],
    locale: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    weekStartsOn: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    cellTemplate: [{ type: Input }],
    dayClicked: [{ type: Output }],
    eventClicked: [{ type: Output }],
    eventTimesChanged: [{ type: Output }],
    viewDateChange: [{ type: Output }]
};
if (false) {
    /**
     * The current view date
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.viewDate;
    /**
     * An array of events to display on view
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.events;
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.excludeDays;
    /**
     * A function that will be called before each cell is rendered. The first argument will contain the calendar cell.
     * If you add the `cssClass` property to the cell it will add that class to the cell in the template
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.dayModifier;
    /**
     * An observable that when emitted on will re-render the current view
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.refresh;
    /**
     * The locale used to format dates
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.locale;
    /**
     * The placement of the event tooltip
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.tooltipPosition;
    /**
     * The start number of the week
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.weekStartsOn;
    /**
     * A custom template to use to replace the header
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.headerTemplate;
    /**
     * A custom template to use to replace the day cell
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.cellTemplate;
    /**
     * Called when the day cell is clicked
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.dayClicked;
    /**
     * Called when the event title is clicked
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.eventClicked;
    /**
     * Called when an event is dragged and dropped
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.eventTimesChanged;
    /** @type {?} */
    NovoCalendarMonthViewElement.prototype.viewDateChange;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.columnHeaders;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.view;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarMonthViewElement.prototype.refreshSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoCalendarMonthViewElement.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aFZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvbW9udGgvQ2FsZW5kYXJNb250aFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUdqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBTUwsaUJBQWlCLEVBQ2pCLFlBQVksR0FDYixNQUFNLDZDQUE2QyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQXdDcEMsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7O0lBcUd2QyxZQUFvQixHQUFzQixFQUFxQixNQUFjO1FBQXpELFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBMUYxQyxXQUFNLEdBQW9CLEVBQUUsQ0FBQzs7OztRQU03QixnQkFBVyxHQUFhLEVBQUUsQ0FBQzs7OztRQW1CM0IsV0FBTSxHQUFXLE9BQU8sQ0FBQzs7OztRQU16QixvQkFBZSxHQUFXLEtBQUssQ0FBQzs7OztRQXdCaEMsZUFBVSxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQzs7OztRQU01RixpQkFBWSxHQUFxRCxJQUFJLFlBQVksRUFBc0MsQ0FBQzs7OztRQU14SCxzQkFBaUIsR0FBaUQsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFHckgsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQXFCNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FB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OU1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDthQUNGOzs7O1lBeERDLGlCQUFpQjt5Q0E4SjRCLE1BQU0sU0FBQyxTQUFTOzs7dUJBakc1RCxLQUFLO3FCQU1MLEtBQUs7MEJBTUwsS0FBSzswQkFPTCxLQUFLO3NCQU1MLEtBQUs7cUJBTUwsS0FBSzs4QkFNTCxLQUFLOzJCQU1MLEtBQUs7NkJBTUwsS0FBSzsyQkFNTCxLQUFLO3lCQU1MLE1BQU07MkJBTU4sTUFBTTtnQ0FNTixNQUFNOzZCQUdOLE1BQU07Ozs7Ozs7SUE1RVAsZ0RBQ2U7Ozs7O0lBS2YsOENBQzZCOzs7OztJQUs3QixtREFDMkI7Ozs7OztJQU0zQixtREFDc0I7Ozs7O0lBS3RCLCtDQUNzQjs7Ozs7SUFLdEIsOENBQ3lCOzs7OztJQUt6Qix1REFDZ0M7Ozs7O0lBS2hDLG9EQUNxQjs7Ozs7SUFLckIsc0RBQ2lDOzs7OztJQUtqQyxvREFDK0I7Ozs7O0lBSy9CLGtEQUM0Rjs7Ozs7SUFLNUYsb0RBQ3dIOzs7OztJQUt4SCx5REFDcUg7O0lBRXJILHNEQUM4RDs7Ozs7SUFLOUQscURBQXlCOzs7OztJQUt6Qiw0Q0FBZ0I7Ozs7O0lBS2hCLDJEQUFrQzs7Ozs7SUFLdEIsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBMT0NBTEVfSUQsXG4gIEluamVjdCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgV2Vla0RheSxcbiAgTW9udGhWaWV3LFxuICBNb250aFZpZXdEYXksXG4gIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudCxcbiAgZ2V0V2Vla1ZpZXdIZWFkZXIsXG4gIGdldE1vbnRoVmlldyxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiBtb250aC4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGBcbiAqICZsdDtub3ZvLWNhbGVuZGFyLW1vbnRoLXZpZXdcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCImZ3Q7XG4gKiAmbHQ7L25vdm8tY2FsZW5kYXItbW9udGgtdmlldyZndDtcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLW1vbnRoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItbW9udGgtdmlld1wiPlxuICAgICAgIDxub3ZvLWNhbGVuZGFyLW1vbnRoLWhlYWRlclxuICAgICAgICAgWyh2aWV3RGF0ZSldPVwidmlld0RhdGVcIlxuICAgICAgICAgW2RheXNdPVwiY29sdW1uSGVhZGVyc1wiXG4gICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgKHZpZXdEYXRlQ2hhbmdlKT1cInJlZnJlc2hBbGwoKVwiPlxuICAgICAgIDwvbm92by1jYWxlbmRhci1tb250aC1oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGF5c1wiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCByb3dJbmRleCBvZiB2aWV3LnJvd09mZnNldHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY2VsbC1yb3dcIj5cbiAgICAgICAgICAgIDxub3ZvLWNhbGVuZGFyLW1vbnRoLWRheVxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIHZpZXcuZGF5cyB8IHNsaWNlIDogcm93SW5kZXggOiByb3dJbmRleCArICh2aWV3LnRvdGFsRGF5c1Zpc2libGVJbldlZWspXCJcbiAgICAgICAgICAgICAgW2RheV09XCJkYXlcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJjZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZGF5Q2xpY2tlZC5lbWl0KHtkYXk6IGRheX0pXCJcbiAgICAgICAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCh7IGRheTogZGF5LCBldmVudDogJGV2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgICAgIDwvbm92by1jYWxlbmRhci1tb250aC1kYXk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhck1vbnRoVmlld0VsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgdmlld0RhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IG9uIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCB3aWxsIGJlIGhpZGRlbiBvbiB0aGUgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXhjbHVkZURheXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgZWFjaCBjZWxsIGlzIHJlbmRlcmVkLiBUaGUgZmlyc3QgYXJndW1lbnQgd2lsbCBjb250YWluIHRoZSBjYWxlbmRhciBjZWxsLlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIHRoZSBjZWxsIGl0IHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGNlbGwgaW4gdGhlIHRlbXBsYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlNb2RpZmllcjogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCB3aGVuIGVtaXR0ZWQgb24gd2lsbCByZS1yZW5kZXIgdGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgcmVmcmVzaDogU3ViamVjdDxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIHVzZWQgdG8gZm9ybWF0IGRhdGVzXG4gICAqL1xuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUyc7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIFRoZSBzdGFydCBudW1iZXIgb2YgdGhlIHdlZWtcbiAgICovXG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaGVhZGVyXG4gICAqL1xuICBASW5wdXQoKVxuICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGRheSBjZWxsXG4gICAqL1xuICBASW5wdXQoKVxuICBjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBkYXkgY2VsbCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZGF5Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF5OiBNb250aFZpZXdEYXkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF5OiBNb250aFZpZXdEYXkgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGV2ZW50IHRpdGxlIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGRheTogYW55OyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXk6IGFueTsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gZXZlbnQgaXMgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb2x1bW5IZWFkZXJzOiBXZWVrRGF5W107XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZpZXc6IE1vbnRoVmlldztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5leGNsdWRlRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnZpZXdEYXRlIHx8IGNoYW5nZXMuZXZlbnRzIHx8IGNoYW5nZXMuZXhjbHVkZURheXMpIHtcbiAgICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGV2ZW50RHJvcHBlZChkYXk6IE1vbnRoVmlld0RheSwgZXZlbnQ6IENhbGVuZGFyRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBkYXRlRm5zLmdldFllYXIoZGF5LmRhdGUpO1xuICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBkYXRlRm5zLmdldE1vbnRoKGRheS5kYXRlKTtcbiAgICBjb25zdCBkYXRlOiBudW1iZXIgPSBkYXRlRm5zLmdldERhdGUoZGF5LmRhdGUpO1xuICAgIGNvbnN0IG5ld1N0YXJ0OiBEYXRlID0gZGF0ZUZucy5zZXRZZWFyKGRhdGVGbnMuc2V0TW9udGgoZGF0ZUZucy5zZXREYXRlKGV2ZW50LnN0YXJ0LCBkYXRlKSwgbW9udGgpLCB5ZWFyKTtcbiAgICBsZXQgbmV3RW5kOiBEYXRlO1xuICAgIGlmIChldmVudC5lbmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZHNEaWZmOiBudW1iZXIgPSBkYXRlRm5zLmRpZmZlcmVuY2VJblNlY29uZHMobmV3U3RhcnQsIGV2ZW50LnN0YXJ0KTtcbiAgICAgIG5ld0VuZCA9IGRhdGVGbnMuYWRkU2Vjb25kcyhldmVudC5lbmQsIHNlY29uZHNEaWZmKTtcbiAgICB9XG4gICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHsgZXZlbnQsIG5ld1N0YXJ0LCBuZXdFbmQgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hIZWFkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5IZWFkZXJzID0gZ2V0V2Vla1ZpZXdIZWFkZXIoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hCb2R5KCk6IHZvaWQge1xuICAgIHRoaXMudmlldyA9IGdldE1vbnRoVmlldyh7XG4gICAgICBldmVudHM6IHRoaXMuZXZlbnRzLFxuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuZGF5TW9kaWZpZXIpIHtcbiAgICAgIHRoaXMudmlldy5kYXlzLmZvckVhY2goKGRheSkgPT4gdGhpcy5kYXlNb2RpZmllcihkYXkpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB0aGlzLnJlZnJlc2hCb2R5KCk7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KHRoaXMudmlld0RhdGUpO1xuICB9XG59XG4iXX0=