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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aFZpZXcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvbW9udGgvQ2FsZW5kYXJNb250aFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFHakIsU0FBUyxFQUNULE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQU1MLGlCQUFpQixFQUNqQixZQUFZLEdBQ2IsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUVwQzs7Ozs7Ozs7O0dBU0c7QUE2QkgsTUFBTSxPQUFPLDRCQUE0QjtJQWtHdkM7O09BRUc7SUFDSCxZQUFvQixHQUFzQixFQUFxQixNQUFjO1FBQXpELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBOUYxQzs7V0FFRztRQUVILFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBRTdCOztXQUVHO1FBRUgsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFlM0I7O1dBRUc7UUFFSCxXQUFNLEdBQVcsT0FBTyxDQUFDO1FBRXpCOztXQUVHO1FBRUgsb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFvQmhDOztXQUVHO1FBRUgsZUFBVSxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUU1Rjs7V0FFRztRQUVILGlCQUFZLEdBQXFELElBQUksWUFBWSxFQUFzQyxDQUFDO1FBRXhIOztXQUVHO1FBRUgsc0JBQWlCLEdBQWlELElBQUksWUFBWSxFQUFrQyxDQUFDO1FBR3JILG1CQUFjLEdBQXVCLElBQUksWUFB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RyxDQUFDLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBOU1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDthQUNGOzs7WUF4REMsaUJBQWlCO3lDQThKNEIsTUFBTSxTQUFDLFNBQVM7Ozt1QkFqRzVELEtBQUs7cUJBTUwsS0FBSzswQkFNTCxLQUFLOzBCQU9MLEtBQUs7c0JBTUwsS0FBSztxQkFNTCxLQUFLOzhCQU1MLEtBQUs7MkJBTUwsS0FBSzs2QkFNTCxLQUFLOzJCQU1MLEtBQUs7eUJBTUwsTUFBTTsyQkFNTixNQUFNO2dDQU1OLE1BQU07NkJBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbGVuZGFyRXZlbnQsXG4gIFdlZWtEYXksXG4gIE1vbnRoVmlldyxcbiAgTW9udGhWaWV3RGF5LFxuICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQsXG4gIGdldFdlZWtWaWV3SGVhZGVyLFxuICBnZXRNb250aFZpZXcsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gbW9udGguIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgXG4gKiAmbHQ7bm92by1jYWxlbmRhci1tb250aC12aWV3XG4gKiAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAqICBbZXZlbnRzXT1cImV2ZW50c1wiJmd0O1xuICogJmx0Oy9ub3ZvLWNhbGVuZGFyLW1vbnRoLXZpZXcmZ3Q7XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1tb250aCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLW1vbnRoLXZpZXdcIj5cbiAgICAgICA8bm92by1jYWxlbmRhci1tb250aC1oZWFkZXJcbiAgICAgICAgIFsodmlld0RhdGUpXT1cInZpZXdEYXRlXCJcbiAgICAgICAgIFtkYXlzXT1cImNvbHVtbkhlYWRlcnNcIlxuICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICh2aWV3RGF0ZUNoYW5nZSk9XCJyZWZyZXNoQWxsKClcIj5cbiAgICAgICA8L25vdm8tY2FsZW5kYXItbW9udGgtaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWRheXNcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcm93SW5kZXggb2Ygdmlldy5yb3dPZmZzZXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNlbGwtcm93XCI+XG4gICAgICAgICAgICA8bm92by1jYWxlbmRhci1tb250aC1kYXlcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiB2aWV3LmRheXMgfCBzbGljZSA6IHJvd0luZGV4IDogcm93SW5kZXggKyAodmlldy50b3RhbERheXNWaXNpYmxlSW5XZWVrKVwiXG4gICAgICAgICAgICAgIFtkYXldPVwiZGF5XCJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRheUNsaWNrZWQuZW1pdCh7ZGF5OiBkYXl9KVwiXG4gICAgICAgICAgICAgIChldmVudENsaWNrZWQpPVwiZXZlbnRDbGlja2VkLmVtaXQoeyBkYXk6IGRheSwgZXZlbnQ6ICRldmVudC5ldmVudH0pXCI+XG4gICAgICAgICAgICA8L25vdm8tY2FsZW5kYXItbW9udGgtZGF5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBkYXkgaW5kZXhlcyAoMCA9IHN1bmRheSwgMSA9IG1vbmRheSBldGMpIHRoYXQgd2lsbCBiZSBoaWRkZW4gb24gdGhlIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV4Y2x1ZGVEYXlzOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVhY2ggY2VsbCBpcyByZW5kZXJlZC4gVGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgY29udGFpbiB0aGUgY2FsZW5kYXIgY2VsbC5cbiAgICogSWYgeW91IGFkZCB0aGUgYGNzc0NsYXNzYCBwcm9wZXJ0eSB0byB0aGUgY2VsbCBpdCB3aWxsIGFkZCB0aGF0IGNsYXNzIHRvIHRoZSBjZWxsIGluIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5TW9kaWZpZXI6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgd2hlbiBlbWl0dGVkIG9uIHdpbGwgcmUtcmVuZGVyIHRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlZnJlc2g6IFN1YmplY3Q8YW55PjtcblxuICAvKipcbiAgICogVGhlIGxvY2FsZSB1c2VkIHRvIGZvcm1hdCBkYXRlc1xuICAgKi9cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZyA9ICd0b3AnO1xuXG4gIC8qKlxuICAgKiBUaGUgc3RhcnQgbnVtYmVyIG9mIHRoZSB3ZWVrXG4gICAqL1xuICBASW5wdXQoKVxuICB3ZWVrU3RhcnRzT246IG51bWJlcjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhlYWRlclxuICAgKi9cbiAgQElucHV0KClcbiAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBkYXkgY2VsbFxuICAgKi9cbiAgQElucHV0KClcbiAgY2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZGF5IGNlbGwgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRheUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGRheTogTW9udGhWaWV3RGF5IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRheTogTW9udGhWaWV3RGF5IH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBkYXk6IGFueTsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF5OiBhbnk7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudFRpbWVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29sdW1uSGVhZGVyczogV2Vla0RheVtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBNb250aFZpZXc7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWxsKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZpZXdEYXRlIHx8IGNoYW5nZXMuZXhjbHVkZURheXMpIHtcbiAgICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV2ZW50cyB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2R5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBldmVudERyb3BwZWQoZGF5OiBNb250aFZpZXdEYXksIGV2ZW50OiBDYWxlbmRhckV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gZGF0ZUZucy5nZXRZZWFyKGRheS5kYXRlKTtcbiAgICBjb25zdCBtb250aDogbnVtYmVyID0gZGF0ZUZucy5nZXRNb250aChkYXkuZGF0ZSk7XG4gICAgY29uc3QgZGF0ZTogbnVtYmVyID0gZGF0ZUZucy5nZXREYXRlKGRheS5kYXRlKTtcbiAgICBjb25zdCBuZXdTdGFydDogRGF0ZSA9IGRhdGVGbnMuc2V0WWVhcihkYXRlRm5zLnNldE1vbnRoKGRhdGVGbnMuc2V0RGF0ZShldmVudC5zdGFydCwgZGF0ZSksIG1vbnRoKSwgeWVhcik7XG4gICAgbGV0IG5ld0VuZDogRGF0ZTtcbiAgICBpZiAoZXZlbnQuZW5kKSB7XG4gICAgICBjb25zdCBzZWNvbmRzRGlmZjogbnVtYmVyID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5TZWNvbmRzKG5ld1N0YXJ0LCBldmVudC5zdGFydCk7XG4gICAgICBuZXdFbmQgPSBkYXRlRm5zLmFkZFNlY29uZHMoZXZlbnQuZW5kLCBzZWNvbmRzRGlmZik7XG4gICAgfVxuICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7IGV2ZW50LCBuZXdTdGFydCwgbmV3RW5kIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSGVhZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uSGVhZGVycyA9IGdldFdlZWtWaWV3SGVhZGVyKHtcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQm9keSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXcgPSBnZXRNb250aFZpZXcoe1xuICAgICAgZXZlbnRzOiB0aGlzLmV2ZW50cyxcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLmRheU1vZGlmaWVyKSB7XG4gICAgICB0aGlzLnZpZXcuZGF5cy5mb3JFYWNoKChkYXkpID0+IHRoaXMuZGF5TW9kaWZpZXIoZGF5KSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdCh0aGlzLnZpZXdEYXRlKTtcbiAgfVxufVxuIl19