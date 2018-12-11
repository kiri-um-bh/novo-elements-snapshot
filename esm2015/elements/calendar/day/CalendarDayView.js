/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, LOCALE_ID, Inject, TemplateRef, } from '@angular/core';
import { getDayView, getDayViewHourGrid, } from '../../../utils/calendar-utils/CalendarUtils';
import { Subject } from 'rxjs';
/**
 * @hidden
 * @type {?}
 */
const SEGMENT_HEIGHT = 30;
/**
 * @hidden
 * @type {?}
 */
const MINUTES_IN_HOUR = 60;
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * &lt;novo-calendar-day
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/novo-calendar-day&gt;
 * ```
 */
export class NovoCalendarDayViewElement {
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
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = 30;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPosition = 'top';
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        this.locale = locale;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.detectChanges();
            });
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
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute) {
            this.refreshHourGrid();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    }
    /*
        eventDropped(dropEvent: {dropData?: {event?: CalendarEvent}}, segment: DayViewHourSegment): void {
          if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({event: dropEvent.dropData.event, newStart: segment.date});
          }
        }
    
        resizeStarted(event: DayViewEvent, resizeEvent: ResizeEvent, dayViewContainer: HTMLElement): void {
          this.currentResize = {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
          };
          const resizeHelper: CalendarResizeHelper = new CalendarResizeHelper(dayViewContainer);
          this.validateResize = ({rectangle}) => resizeHelper.validateResize({rectangle});
          this.cdr.detectChanges();
        }
    
        resizing(event: DayViewEvent, resizeEvent: ResizeEvent): void {
          if (resizeEvent.edges.top) {
            event.top = this.currentResize.originalTop + +resizeEvent.edges.top;
            event.height = this.currentResize.originalHeight - +resizeEvent.edges.top;
          } else if (resizeEvent.edges.bottom) {
            event.height = this.currentResize.originalHeight + +resizeEvent.edges.bottom;
          }
        }
    
        resizeEnded(dayEvent: DayViewEvent): void {
    
          let pixelsMoved: number;
          if (this.currentResize.edge === 'top') {
            pixelsMoved = (dayEvent.top - this.currentResize.originalTop);
          } else {
            pixelsMoved = (dayEvent.height - this.currentResize.originalHeight);
          }
    
          dayEvent.top = this.currentResize.originalTop;
          dayEvent.height = this.currentResize.originalHeight;
    
          const pixelAmountInMinutes: number = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
          const minutesMoved: number = pixelsMoved * pixelAmountInMinutes;
          let newStart: Date = dayEvent.event.start;
          let newEnd: Date = dayEvent.event.end;
          if (this.currentResize.edge === 'top') {
            newStart = addMinutes(newStart, minutesMoved);
          } else if (newEnd) {
            newEnd = addMinutes(newEnd, minutesMoved);
          }
    
          this.eventTimesChanged.emit({newStart, newEnd, event: dayEvent.event});
          this.currentResize = null;
    
        }
    
        dragStart(event: HTMLElement, dayViewContainer: HTMLElement): void {
          const dragHelper: CalendarDragHelper = new CalendarDragHelper(dayViewContainer, event);
          this.validateDrag = ({x, y}) => !this.currentResize && dragHelper.validateDrag({x, y});
          this.cdr.detectChanges();
        }
    
        eventDragged(dayEvent: DayViewEvent, draggedInPixels: number): void {
          const pixelAmountInMinutes: number = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
          const minutesMoved: number = draggedInPixels * pixelAmountInMinutes;
          const newStart: Date = addMinutes(dayEvent.event.start, minutesMoved);
          let newEnd: Date;
          if (dayEvent.event.end) {
            newEnd = addMinutes(dayEvent.event.end, minutesMoved);
          }
          this.eventTimesChanged.emit({newStart, newEnd, event: dayEvent.event});
        }
        */
    /**
     * @private
     * @return {?}
     */
    refreshHourGrid() {
        this.hours = getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute,
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute,
            },
        });
        if (this.hourSegmentModifier) {
            this.hours.forEach((hour) => {
                hour.segments.forEach((segment) => this.hourSegmentModifier(segment));
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    refreshView() {
        this.view = getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute,
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute,
            },
            eventWidth: this.eventWidth,
            segmentHeight: SEGMENT_HEIGHT,
        });
    }
    /**
     * @private
     * @return {?}
     */
    refreshAll() {
        this.refreshHourGrid();
        this.refreshView();
    }
}
NovoCalendarDayViewElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-calendar-day',
                template: `
    <div class="cal-day-view" #dayViewContainer>
      <novo-calendar-all-day-event
        *ngFor="let event of view.allDayEvents"
        [event]="event"
        [customTemplate]="allDayEventTemplate"
        (eventClicked)="eventClicked.emit({event: event})">
      </novo-calendar-all-day-event>
      <div class="cal-hour-rows">
        <div class="cal-events">
          <div
            #event
            *ngFor="let dayEvent of view?.events"
            class="cal-event-container"
            [style.marginTop.px]="dayEvent.top"
            [style.height.px]="dayEvent.height"
            [style.marginLeft.px]="dayEvent.left + 70"
            [style.width.px]="dayEvent.width - 1">
            <novo-calendar-day-event
              [dayEvent]="dayEvent"
              [tooltipPosition]="tooltipPosition"
              [customTemplate]="eventTemplate"
              (eventClicked)="eventClicked.emit($event)">
            </novo-calendar-day-event>
          </div>
        </div>
        <div class="cal-hour" *ngFor="let hour of hours" [style.minWidth.px]="view?.width + 70">
          <novo-calendar-day-hour-segment
            *ngFor="let segment of hour.segments"
            [segment]="segment"
            [locale]="locale"
            [customTemplate]="hourSegmentTemplate"
            (click)="hourSegmentClicked.emit({date: segment.date})">
          </novo-calendar-day-hour-segment>
        </div>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NovoCalendarDayViewElement.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NovoCalendarDayViewElement.propDecorators = {
    viewDate: [{ type: Input }],
    events: [{ type: Input }],
    hourSegments: [{ type: Input }],
    dayStartHour: [{ type: Input }],
    dayStartMinute: [{ type: Input }],
    dayEndHour: [{ type: Input }],
    dayEndMinute: [{ type: Input }],
    eventWidth: [{ type: Input }],
    refresh: [{ type: Input }],
    locale: [{ type: Input }],
    hourSegmentModifier: [{ type: Input }],
    eventSnapSize: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    hourSegmentTemplate: [{ type: Input }],
    allDayEventTemplate: [{ type: Input }],
    eventTemplate: [{ type: Input }],
    eventClicked: [{ type: Output }],
    hourSegmentClicked: [{ type: Output }],
    eventTimesChanged: [{ type: Output }]
};
if (false) {
    /**
     * The current view date
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.viewDate;
    /**
     * An array of events to display on view
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.events;
    /**
     * The number of segments in an hour. Must be <= 6
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.hourSegments;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.dayStartHour;
    /**
     * The day start minutes. Must be 0-59
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.dayStartMinute;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.dayEndHour;
    /**
     * The day end minutes. Must be 0-59
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.dayEndMinute;
    /**
     * The width in pixels of each event on the view
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.eventWidth;
    /**
     * An observable that when emitted on will re-render the current view
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.refresh;
    /**
     * The locale used to format dates
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.locale;
    /**
     * A function that will be called before each hour segment is called. The first argument will contain the hour segment.
     * If you add the `cssClass` property to the segment it will add that class to the hour segment in the template
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.hourSegmentModifier;
    /**
     * The grid size to snap resizing and dragging of events to
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.eventSnapSize;
    /**
     * The placement of the event tooltip
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.tooltipPosition;
    /**
     * A custom template to use to replace the hour segment
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.hourSegmentTemplate;
    /**
     * A custom template to use for all day events
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.allDayEventTemplate;
    /**
     * A custom template to use for day view events
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.eventTemplate;
    /**
     * Called when an event title is clicked
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.eventClicked;
    /**
     * Called when an hour segment is clicked
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.hourSegmentClicked;
    /**
     * Called when an event is resized or dragged and dropped
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.eventTimesChanged;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.hours;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.view;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.width;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.refreshSubscription;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.currentResize;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.validateDrag;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarDayViewElement.prototype.validateResize;
    /**
     * @type {?}
     * @private
     */
    NovoCalendarDayViewElement.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlWaWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2RheS9DYWxlbmRhckRheVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBR04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFPTCxVQUFVLEVBQ1Ysa0JBQWtCLEdBQ25CLE1BQU0sNkNBQTZDLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7Ozs7O01BS3ZDLGNBQWMsR0FBVyxFQUFFOzs7OztNQUszQixlQUFlLEdBQVcsRUFBRTs7Ozs7Ozs7Ozs7QUFxRGxDLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQThKckMsWUFBb0IsR0FBc0IsRUFBcUIsTUFBYztRQUF6RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQW5KMUMsV0FBTSxHQUFvQixFQUFFLENBQUM7Ozs7UUFNN0IsaUJBQVksR0FBVyxDQUFDLENBQUM7Ozs7UUFNekIsaUJBQVksR0FBVyxDQUFDLENBQUM7Ozs7UUFNekIsbUJBQWMsR0FBVyxDQUFDLENBQUM7Ozs7UUFNM0IsZUFBVSxHQUFXLEVBQUUsQ0FBQzs7OztRQU14QixpQkFBWSxHQUFXLEVBQUUsQ0FBQzs7OztRQU0xQixlQUFVLEdBQVcsR0FBRyxDQUFDOzs7O1FBeUJ6QixrQkFBYSxHQUFXLEVBQUUsQ0FBQzs7OztRQU0zQixvQkFBZSxHQUFXLEtBQUssQ0FBQzs7OztRQXdCaEMsaUJBQVksR0FBMkMsSUFBSSxZQUFZLEVBQTRCLENBQUM7Ozs7UUFNcEcsdUJBQWtCLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDOzs7O1FBTXRGLHNCQUFpQixHQUFpRCxJQUFJLFlB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eUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgRGF5VmlldyxcbiAgRGF5Vmlld0hvdXIsXG4gIERheVZpZXdIb3VyU2VnbWVudCxcbiAgRGF5Vmlld0V2ZW50LFxuICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQsXG4gIGdldERheVZpZXcsXG4gIGdldERheVZpZXdIb3VyR3JpZCxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IFNFR01FTlRfSEVJR0hUOiBudW1iZXIgPSAzMDtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IE1JTlVURVNfSU5fSE9VUjogbnVtYmVyID0gNjA7XG5cbi8qKlxuICogU2hvd3MgYWxsIGV2ZW50cyBvbiBhIGdpdmVuIGRheS4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAmbHQ7bm92by1jYWxlbmRhci1kYXlcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCImZ3Q7XG4gKiAmbHQ7L25vdm8tY2FsZW5kYXItZGF5Jmd0O1xuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItZGF5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLWRheS12aWV3XCIgI2RheVZpZXdDb250YWluZXI+XG4gICAgICA8bm92by1jYWxlbmRhci1hbGwtZGF5LWV2ZW50XG4gICAgICAgICpuZ0Zvcj1cImxldCBldmVudCBvZiB2aWV3LmFsbERheUV2ZW50c1wiXG4gICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJhbGxEYXlFdmVudFRlbXBsYXRlXCJcbiAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6IGV2ZW50fSlcIj5cbiAgICAgIDwvbm92by1jYWxlbmRhci1hbGwtZGF5LWV2ZW50PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1ob3VyLXJvd3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudHNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAjZXZlbnRcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXlFdmVudCBvZiB2aWV3Py5ldmVudHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5Ub3AucHhdPVwiZGF5RXZlbnQudG9wXCJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZGF5RXZlbnQuaGVpZ2h0XCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0LnB4XT1cImRheUV2ZW50LmxlZnQgKyA3MFwiXG4gICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiZGF5RXZlbnQud2lkdGggLSAxXCI+XG4gICAgICAgICAgICA8bm92by1jYWxlbmRhci1kYXktZXZlbnRcbiAgICAgICAgICAgICAgW2RheUV2ZW50XT1cImRheUV2ZW50XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIChldmVudENsaWNrZWQpPVwiZXZlbnRDbGlja2VkLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLWRheS1ldmVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtaG91clwiICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzXCIgW3N0eWxlLm1pbldpZHRoLnB4XT1cInZpZXc/LndpZHRoICsgNzBcIj5cbiAgICAgICAgICA8bm92by1jYWxlbmRhci1kYXktaG91ci1zZWdtZW50XG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBob3VyLnNlZ21lbnRzXCJcbiAgICAgICAgICAgIFtzZWdtZW50XT1cInNlZ21lbnRcIlxuICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhvdXJTZWdtZW50VGVtcGxhdGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImhvdXJTZWdtZW50Q2xpY2tlZC5lbWl0KHtkYXRlOiBzZWdtZW50LmRhdGV9KVwiPlxuICAgICAgICAgIDwvbm92by1jYWxlbmRhci1kYXktaG91ci1zZWdtZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBzZWdtZW50cyBpbiBhbiBob3VyLiBNdXN0IGJlIDw9IDZcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50czogbnVtYmVyID0gMjtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRIb3VyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRNaW51dGU6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRIb3VyOiBudW1iZXIgPSAyMztcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRNaW51dGU6IG51bWJlciA9IDU5O1xuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggaW4gcGl4ZWxzIG9mIGVhY2ggZXZlbnQgb24gdGhlIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50V2lkdGg6IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVhY2ggaG91ciBzZWdtZW50IGlzIGNhbGxlZC4gVGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgY29udGFpbiB0aGUgaG91ciBzZWdtZW50LlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIHRoZSBzZWdtZW50IGl0IHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGhvdXIgc2VnbWVudCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50TW9kaWZpZXI6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgZ3JpZCBzaXplIHRvIHNuYXAgcmVzaXppbmcgYW5kIGRyYWdnaW5nIG9mIGV2ZW50cyB0b1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRTbmFwU2l6ZTogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgYWxsIGRheSBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFsbERheUV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZGF5IHZpZXcgZXZlbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBob3VyIHNlZ21lbnQgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGhvdXJTZWdtZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBob3VyczogRGF5Vmlld0hvdXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBEYXlWaWV3O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB3aWR0aDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjdXJyZW50UmVzaXplOiB7XG4gICAgb3JpZ2luYWxUb3A6IG51bWJlcjtcbiAgICBvcmlnaW5hbEhlaWdodDogbnVtYmVyO1xuICAgIGVkZ2U6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVEcmFnOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVSZXNpemU6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmRheVN0YXJ0SG91ciB8fCBjaGFuZ2VzLmRheVN0YXJ0TWludXRlIHx8IGNoYW5nZXMuZGF5RW5kSG91ciB8fCBjaGFuZ2VzLmRheUVuZE1pbnV0ZSkge1xuICAgICAgdGhpcy5yZWZyZXNoSG91ckdyaWQoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5kYXlTdGFydEhvdXIgfHxcbiAgICAgIGNoYW5nZXMuZGF5U3RhcnRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZGF5RW5kSG91ciB8fFxuICAgICAgY2hhbmdlcy5kYXlFbmRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZXZlbnRXaWR0aFxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgZXZlbnREcm9wcGVkKGRyb3BFdmVudDoge2Ryb3BEYXRhPzoge2V2ZW50PzogQ2FsZW5kYXJFdmVudH19LCBzZWdtZW50OiBEYXlWaWV3SG91clNlZ21lbnQpOiB2b2lkIHtcbiAgICAgIGlmIChkcm9wRXZlbnQuZHJvcERhdGEgJiYgZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50KSB7XG4gICAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7ZXZlbnQ6IGRyb3BFdmVudC5kcm9wRGF0YS5ldmVudCwgbmV3U3RhcnQ6IHNlZ21lbnQuZGF0ZX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZVN0YXJ0ZWQoZXZlbnQ6IERheVZpZXdFdmVudCwgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50LCBkYXlWaWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgdGhpcy5jdXJyZW50UmVzaXplID0ge1xuICAgICAgICBvcmlnaW5hbFRvcDogZXZlbnQudG9wLFxuICAgICAgICBvcmlnaW5hbEhlaWdodDogZXZlbnQuaGVpZ2h0LFxuICAgICAgICBlZGdlOiB0eXBlb2YgcmVzaXplRXZlbnQuZWRnZXMudG9wICE9PSAndW5kZWZpbmVkJyA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNpemVIZWxwZXI6IENhbGVuZGFyUmVzaXplSGVscGVyID0gbmV3IENhbGVuZGFyUmVzaXplSGVscGVyKGRheVZpZXdDb250YWluZXIpO1xuICAgICAgdGhpcy52YWxpZGF0ZVJlc2l6ZSA9ICh7cmVjdGFuZ2xlfSkgPT4gcmVzaXplSGVscGVyLnZhbGlkYXRlUmVzaXplKHtyZWN0YW5nbGV9KTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICByZXNpemluZyhldmVudDogRGF5Vmlld0V2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChyZXNpemVFdmVudC5lZGdlcy50b3ApIHtcbiAgICAgICAgZXZlbnQudG9wID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsVG9wICsgK3Jlc2l6ZUV2ZW50LmVkZ2VzLnRvcDtcbiAgICAgICAgZXZlbnQuaGVpZ2h0ID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsSGVpZ2h0IC0gK3Jlc2l6ZUV2ZW50LmVkZ2VzLnRvcDtcbiAgICAgIH0gZWxzZSBpZiAocmVzaXplRXZlbnQuZWRnZXMuYm90dG9tKSB7XG4gICAgICAgIGV2ZW50LmhlaWdodCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodCArICtyZXNpemVFdmVudC5lZGdlcy5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplRW5kZWQoZGF5RXZlbnQ6IERheVZpZXdFdmVudCk6IHZvaWQge1xuXG4gICAgICBsZXQgcGl4ZWxzTW92ZWQ6IG51bWJlcjtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgcGl4ZWxzTW92ZWQgPSAoZGF5RXZlbnQudG9wIC0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsVG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpeGVsc01vdmVkID0gKGRheUV2ZW50LmhlaWdodCAtIHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGRheUV2ZW50LnRvcCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFRvcDtcbiAgICAgIGRheUV2ZW50LmhlaWdodCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodDtcblxuICAgICAgY29uc3QgcGl4ZWxBbW91bnRJbk1pbnV0ZXM6IG51bWJlciA9IE1JTlVURVNfSU5fSE9VUiAvICh0aGlzLmhvdXJTZWdtZW50cyAqIFNFR01FTlRfSEVJR0hUKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZDogbnVtYmVyID0gcGl4ZWxzTW92ZWQgKiBwaXhlbEFtb3VudEluTWludXRlcztcbiAgICAgIGxldCBuZXdTdGFydDogRGF0ZSA9IGRheUV2ZW50LmV2ZW50LnN0YXJ0O1xuICAgICAgbGV0IG5ld0VuZDogRGF0ZSA9IGRheUV2ZW50LmV2ZW50LmVuZDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgbmV3U3RhcnQgPSBhZGRNaW51dGVzKG5ld1N0YXJ0LCBtaW51dGVzTW92ZWQpO1xuICAgICAgfSBlbHNlIGlmIChuZXdFbmQpIHtcbiAgICAgICAgbmV3RW5kID0gYWRkTWludXRlcyhuZXdFbmQsIG1pbnV0ZXNNb3ZlZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7bmV3U3RhcnQsIG5ld0VuZCwgZXZlbnQ6IGRheUV2ZW50LmV2ZW50fSk7XG4gICAgICB0aGlzLmN1cnJlbnRSZXNpemUgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgZHJhZ1N0YXJ0KGV2ZW50OiBIVE1MRWxlbWVudCwgZGF5Vmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGRyYWdIZWxwZXI6IENhbGVuZGFyRHJhZ0hlbHBlciA9IG5ldyBDYWxlbmRhckRyYWdIZWxwZXIoZGF5Vmlld0NvbnRhaW5lciwgZXZlbnQpO1xuICAgICAgdGhpcy52YWxpZGF0ZURyYWcgPSAoe3gsIHl9KSA9PiAhdGhpcy5jdXJyZW50UmVzaXplICYmIGRyYWdIZWxwZXIudmFsaWRhdGVEcmFnKHt4LCB5fSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZXZlbnREcmFnZ2VkKGRheUV2ZW50OiBEYXlWaWV3RXZlbnQsIGRyYWdnZWRJblBpeGVsczogbnVtYmVyKTogdm9pZCB7XG4gICAgICBjb25zdCBwaXhlbEFtb3VudEluTWludXRlczogbnVtYmVyID0gTUlOVVRFU19JTl9IT1VSIC8gKHRoaXMuaG91clNlZ21lbnRzICogU0VHTUVOVF9IRUlHSFQpO1xuICAgICAgY29uc3QgbWludXRlc01vdmVkOiBudW1iZXIgPSBkcmFnZ2VkSW5QaXhlbHMgKiBwaXhlbEFtb3VudEluTWludXRlcztcbiAgICAgIGNvbnN0IG5ld1N0YXJ0OiBEYXRlID0gYWRkTWludXRlcyhkYXlFdmVudC5ldmVudC5zdGFydCwgbWludXRlc01vdmVkKTtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGU7XG4gICAgICBpZiAoZGF5RXZlbnQuZXZlbnQuZW5kKSB7XG4gICAgICAgIG5ld0VuZCA9IGFkZE1pbnV0ZXMoZGF5RXZlbnQuZXZlbnQuZW5kLCBtaW51dGVzTW92ZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtuZXdTdGFydCwgbmV3RW5kLCBldmVudDogZGF5RXZlbnQuZXZlbnR9KTtcbiAgICB9XG4gICAgKi9cblxuICBwcml2YXRlIHJlZnJlc2hIb3VyR3JpZCgpOiB2b2lkIHtcbiAgICB0aGlzLmhvdXJzID0gZ2V0RGF5Vmlld0hvdXJHcmlkKHtcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGUsXG4gICAgICB9LFxuICAgICAgZGF5RW5kOiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5RW5kSG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheUVuZE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuaG91clNlZ21lbnRNb2RpZmllcikge1xuICAgICAgdGhpcy5ob3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICAgIGhvdXIuc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudCkgPT4gdGhpcy5ob3VyU2VnbWVudE1vZGlmaWVyKHNlZ21lbnQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gZ2V0RGF5Vmlldyh7XG4gICAgICBldmVudHM6IHRoaXMuZXZlbnRzLFxuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICBob3VyU2VnbWVudHM6IHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgZGF5U3RhcnQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlTdGFydEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlTdGFydE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgICBkYXlFbmQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlFbmRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5RW5kTWludXRlLFxuICAgICAgfSxcbiAgICAgIGV2ZW50V2lkdGg6IHRoaXMuZXZlbnRXaWR0aCxcbiAgICAgIHNlZ21lbnRIZWlnaHQ6IFNFR01FTlRfSEVJR0hULFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaEhvdXJHcmlkKCk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG59XG4iXX0=