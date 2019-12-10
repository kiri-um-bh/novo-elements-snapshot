/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/week/CalendarWeekView.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { getDayViewHourGrid, getWeekView, getWeekViewHeader, } from '../../../utils/calendar-utils/CalendarUtils';
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
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * &lt;novo-calendar-week
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/novo-calendar-week&gt;
 * ```
 */
export class NovoCalendarWeekViewElement {
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
         * The placement of the event tooltip
         */
        this.tooltipPosition = 'bottom';
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
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
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * Called when a header week day is clicked
         */
        this.dayClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
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
        this.eventRows = [];
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
                this.cdr.detectChanges();
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
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
        if (changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute) {
            this.refreshHourGrid();
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
    /*
        resizeStarted(weekViewContainer: HTMLElement, weekEvent: WeekViewEvent, resizeEvent: ResizeEvent): void {
          this.currentResize = {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
          };
          const resizeHelper: CalendarResizeHelper = new CalendarResizeHelper(weekViewContainer, this.getDayColumnWidth(weekViewContainer));
          this.validateResize = ({rectangle}) => resizeHelper.validateResize({rectangle});
          this.cdr.detectChanges();
        }
    
        resizing(weekEvent: WeekViewEvent, resizeEvent: ResizeEvent, dayWidth: number): void {
          if (resizeEvent.edges.left) {
            const diff: number = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = this.currentResize.originalOffset + diff;
            weekEvent.span = this.currentResize.originalSpan - diff;
          } else if (resizeEvent.edges.right) {
            const diff: number = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = this.currentResize.originalSpan + diff;
          }
        }
    
        resizeEnded(weekEvent: WeekViewEvent): void {
    
          let daysDiff: number;
          if (this.currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - this.currentResize.originalOffset;
          } else {
            daysDiff = weekEvent.span - this.currentResize.originalSpan;
          }
    
          weekEvent.offset = this.currentResize.originalOffset;
          weekEvent.span = this.currentResize.originalSpan;
    
          let newStart: Date = weekEvent.event.start;
          let newEnd: Date = weekEvent.event.end;
          if (this.currentResize.edge === 'left') {
            newStart = addDays(newStart, daysDiff);
          } else if (newEnd) {
            newEnd = addDays(newEnd, daysDiff);
          }
    
          this.eventTimesChanged.emit({newStart, newEnd, event: weekEvent.event});
          this.currentResize = null;
    
        }
    
        eventDragged(weekEvent: WeekViewEvent, draggedByPx: number, dayWidth: number): void {
    
          const daysDragged: number = draggedByPx / dayWidth;
          const newStart: Date = addDays(weekEvent.event.start, daysDragged);
          let newEnd: Date;
          if (weekEvent.event.end) {
            newEnd = addDays(weekEvent.event.end, daysDragged);
          }
    
          this.eventTimesChanged.emit({newStart, newEnd, event: weekEvent.event});
    
        }
    
        dragStart(weekViewContainer: HTMLElement, event: HTMLElement): void {
          const dragHelper: CalendarDragHelper = new CalendarDragHelper(weekViewContainer, event);
          this.validateDrag = ({x, y}) => !this.currentResize && dragHelper.validateDrag({x, y});
          this.cdr.detectChanges();
        }
        */
    /**
     * @param {?} eventRowContainer
     * @return {?}
     */
    getDayColumnWidth(eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    }
    /**
     * @private
     * @return {?}
     */
    refreshHeader() {
        this.days = getWeekViewHeader({
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
        this.eventRows = getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            hourSegments: this.hourSegments,
            segmentHeight: SEGMENT_HEIGHT,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute,
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute,
            },
        });
    }
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
        // if (this.hourSegmentModifier) {
        //   this.hours.forEach(hour => {
        //     hour.segments.forEach(segment => this.hourSegmentModifier(segment));
        //   });
        // }
    }
    /**
     * @private
     * @return {?}
     */
    refreshAll() {
        this.refreshHeader();
        this.refreshHourGrid();
        this.refreshBody();
    }
}
NovoCalendarWeekViewElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-calendar-week',
                template: `
    <div class="cal-week-view" #weekViewContainer>
      <novo-calendar-week-header
        [days]="days"
        [locale]="locale"
        [customTemplate]="headerTemplate"
        (dayClicked)="dayClicked.emit($event)">
      </novo-calendar-week-header>
      <div *ngFor="let eventRow of eventRows" #eventRowContainer>
        <div
          class="cal-event-container"
          #event
          *ngFor="let weekEvent of eventRow.row"
          [style.width]="((100 / days.length) * weekEvent.span) + '%'"
          [style.marginTop.px]="weekEvent.top"
          [style.height.px]="weekEvent.height"
          [style.marginLeft]="((100 / days.length) * weekEvent.offset) + '%'">
          <novo-calendar-week-event
            [weekEvent]="weekEvent"
            [tooltipPosition]="tooltipPosition"
            [customTemplate]="eventTemplate"
            (eventClicked)="eventClicked.emit($event)">
          </novo-calendar-week-event>
        </div>
      </div>
      <div class="cal-hour" *ngFor="let hour of hours" [style.minWidth.px]="70">
        <novo-calendar-day-hour-segment
          *ngFor="let segment of hour.segments"
          [segment]="segment"
          [locale]="locale"
          [customTemplate]="hourSegmentTemplate"
          (click)="hourSegmentClicked.emit({date: segment.date})">
        </novo-calendar-day-hour-segment>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NovoCalendarWeekViewElement.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NovoCalendarWeekViewElement.propDecorators = {
    viewDate: [{ type: Input }],
    events: [{ type: Input }],
    excludeDays: [{ type: Input }],
    refresh: [{ type: Input }],
    locale: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    weekStartsOn: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    eventTemplate: [{ type: Input }],
    precision: [{ type: Input }],
    hourSegments: [{ type: Input }],
    dayStartHour: [{ type: Input }],
    dayStartMinute: [{ type: Input }],
    dayEndHour: [{ type: Input }],
    dayEndMinute: [{ type: Input }],
    hourSegmentTemplate: [{ type: Input }],
    hourSegmentClicked: [{ type: Output }],
    dayClicked: [{ type: Output }],
    eventClicked: [{ type: Output }],
    eventTimesChanged: [{ type: Output }]
};
if (false) {
    /**
     * The current view date
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.viewDate;
    /**
     * An array of events to display on view
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.events;
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.excludeDays;
    /**
     * An observable that when emitted on will re-render the current view
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.refresh;
    /**
     * The locale used to format dates
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.locale;
    /**
     * The placement of the event tooltip
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.tooltipPosition;
    /**
     * The start number of the week
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.weekStartsOn;
    /**
     * A custom template to use to replace the header
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.headerTemplate;
    /**
     * A custom template to use for week view events
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.eventTemplate;
    /**
     * The precision to display events.
     * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.precision;
    /**
     * The number of segments in an hour. Must be <= 6
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.hourSegments;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.dayStartHour;
    /**
     * The day start minutes. Must be 0-59
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.dayStartMinute;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.dayEndHour;
    /**
     * The day end minutes. Must be 0-59
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.dayEndMinute;
    /**
     * A custom template to use to replace the hour segment
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.hourSegmentTemplate;
    /**
     * Called when an hour segment is clicked
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.hourSegmentClicked;
    /**
     * Called when a header week day is clicked
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.dayClicked;
    /**
     * Called when the event title is clicked
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.eventClicked;
    /**
     * Called when an event is resized or dragged and dropped
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.eventTimesChanged;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.days;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.hours;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.eventRows;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.refreshSubscription;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.currentResize;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.validateDrag;
    /**
     * @hidden
     * @type {?}
     */
    NovoCalendarWeekViewElement.prototype.validateResize;
    /**
     * @type {?}
     * @private
     */
    NovoCalendarWeekViewElement.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrVmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci93ZWVrL0NhbGVuZGFyV2Vla1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBSUwsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxpQkFBaUIsR0FHbEIsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7TUFLL0MsY0FBYyxHQUFXLEVBQUU7Ozs7O01BSzNCLGVBQWUsR0FBVyxFQUFFOzs7Ozs7Ozs7OztBQWtEbEMsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBK0p0QyxZQUFvQixHQUFzQixFQUFxQixNQUFjO1FBQXpELFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBcEoxQyxXQUFNLEdBQW9CLEVBQUUsQ0FBQzs7OztRQU03QixnQkFBVyxHQUFhLEVBQUUsQ0FBQzs7OztRQWtCM0Isb0JBQWUsR0FBVyxRQUFRLENBQUM7Ozs7O1FBeUJuQyxjQUFTLEdBQXVCLE1BQU0sQ0FBQzs7OztRQUt2QyxpQkFBWSxHQUFXLENBQUMsQ0FBQzs7OztRQU16QixpQkFBWSxHQUFXLENBQUMsQ0FBQzs7OztRQU16QixtQkFBYyxHQUFXLENBQUMsQ0FBQzs7OztRQU0zQixlQUFVLEdBQVcsRUFBRSxDQUFDOzs7O1FBTXhCLGlCQUFZLEdBQVcsRUFBRSxDQUFDOzs7O1FBVTFCLHVCQUFrQixHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQzs7OztRQUt0RixlQUFVLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDOzs7O1FBTTlFLGlC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SXZDLG1EQUN5Qjs7Ozs7SUFLekIsbURBQ3lCOzs7OztJQUt6QixxREFDMkI7Ozs7O0lBSzNCLGlEQUN3Qjs7Ozs7SUFLeEIsbURBQzBCOzs7OztJQUkxQiwwREFDc0M7Ozs7O0lBSXRDLHlEQUNzRjs7Ozs7SUFJdEYsaURBQzhFOzs7OztJQUs5RSxtREFDb0c7Ozs7O0lBS3BHLHdEQUNxSDs7Ozs7SUFLckgsMkNBQWdCOzs7OztJQUloQiw0Q0FBMEI7Ozs7O0lBSzFCLGdEQUFtQzs7Ozs7SUFLbkMsMERBQWtDOzs7OztJQUtsQyxvREFJRTs7Ozs7SUFLRixtREFBdUI7Ozs7O0lBS3ZCLHFEQUF5Qjs7Ozs7SUFLYiwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIExPQ0FMRV9JRCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENhbGVuZGFyRXZlbnQsXG4gIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudCxcbiAgRGF5Vmlld0hvdXIsXG4gIGdldERheVZpZXdIb3VyR3JpZCxcbiAgZ2V0V2Vla1ZpZXcsXG4gIGdldFdlZWtWaWV3SGVhZGVyLFxuICBXZWVrRGF5LFxuICBXZWVrVmlld0V2ZW50Um93LFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IFNFR01FTlRfSEVJR0hUOiBudW1iZXIgPSAzMDtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IE1JTlVURVNfSU5fSE9VUjogbnVtYmVyID0gNjA7XG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiB3ZWVrLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICZsdDtub3ZvLWNhbGVuZGFyLXdlZWtcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCImZ3Q7XG4gKiAmbHQ7L25vdm8tY2FsZW5kYXItd2VlayZndDtcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLXdlZWsnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYWwtd2Vlay12aWV3XCIgI3dlZWtWaWV3Q29udGFpbmVyPlxuICAgICAgPG5vdm8tY2FsZW5kYXItd2Vlay1oZWFkZXJcbiAgICAgICAgW2RheXNdPVwiZGF5c1wiXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgKGRheUNsaWNrZWQpPVwiZGF5Q2xpY2tlZC5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvbm92by1jYWxlbmRhci13ZWVrLWhlYWRlcj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGV2ZW50Um93IG9mIGV2ZW50Um93c1wiICNldmVudFJvd0NvbnRhaW5lcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LWNvbnRhaW5lclwiXG4gICAgICAgICAgI2V2ZW50XG4gICAgICAgICAgKm5nRm9yPVwibGV0IHdlZWtFdmVudCBvZiBldmVudFJvdy5yb3dcIlxuICAgICAgICAgIFtzdHlsZS53aWR0aF09XCIoKDEwMCAvIGRheXMubGVuZ3RoKSAqIHdlZWtFdmVudC5zcGFuKSArICclJ1wiXG4gICAgICAgICAgW3N0eWxlLm1hcmdpblRvcC5weF09XCJ3ZWVrRXZlbnQudG9wXCJcbiAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cIndlZWtFdmVudC5oZWlnaHRcIlxuICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0XT1cIigoMTAwIC8gZGF5cy5sZW5ndGgpICogd2Vla0V2ZW50Lm9mZnNldCkgKyAnJSdcIj5cbiAgICAgICAgICA8bm92by1jYWxlbmRhci13ZWVrLWV2ZW50XG4gICAgICAgICAgICBbd2Vla0V2ZW50XT1cIndlZWtFdmVudFwiXG4gICAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KCRldmVudClcIj5cbiAgICAgICAgICA8L25vdm8tY2FsZW5kYXItd2Vlay1ldmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtaG91clwiICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzXCIgW3N0eWxlLm1pbldpZHRoLnB4XT1cIjcwXCI+XG4gICAgICAgIDxub3ZvLWNhbGVuZGFyLWRheS1ob3VyLXNlZ21lbnRcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBob3VyLnNlZ21lbnRzXCJcbiAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhvdXJTZWdtZW50VGVtcGxhdGVcIlxuICAgICAgICAgIChjbGljayk9XCJob3VyU2VnbWVudENsaWNrZWQuZW1pdCh7ZGF0ZTogc2VnbWVudC5kYXRlfSlcIj5cbiAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLWRheS1ob3VyLXNlZ21lbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBkYXkgaW5kZXhlcyAoMCA9IHN1bmRheSwgMSA9IG1vbmRheSBldGMpIHRoYXQgd2lsbCBiZSBoaWRkZW4gb24gdGhlIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV4Y2x1ZGVEYXlzOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgd2hlbiBlbWl0dGVkIG9uIHdpbGwgcmUtcmVuZGVyIHRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlZnJlc2g6IFN1YmplY3Q8YW55PjtcblxuICAvKipcbiAgICogVGhlIGxvY2FsZSB1c2VkIHRvIGZvcm1hdCBkYXRlc1xuICAgKi9cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nID0gJ2JvdHRvbSc7XG5cbiAgLyoqXG4gICAqIFRoZSBzdGFydCBudW1iZXIgb2YgdGhlIHdlZWtcbiAgICovXG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaGVhZGVyXG4gICAqL1xuICBASW5wdXQoKVxuICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB3ZWVrIHZpZXcgZXZlbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgcHJlY2lzaW9uIHRvIGRpc3BsYXkgZXZlbnRzLlxuICAgKiBgZGF5c2Agd2lsbCByb3VuZCBldmVudCBzdGFydCBhbmQgZW5kIGRhdGVzIHRvIHRoZSBuZWFyZXN0IGRheSBhbmQgYG1pbnV0ZXNgIHdpbGwgbm90IGRvIHRoaXMgcm91bmRpbmdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHByZWNpc2lvbjogJ2RheXMnIHwgJ21pbnV0ZXMnID0gJ2RheXMnO1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBzZWdtZW50cyBpbiBhbiBob3VyLiBNdXN0IGJlIDw9IDZcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50czogbnVtYmVyID0gMjtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRIb3VyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRNaW51dGU6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRIb3VyOiBudW1iZXIgPSAyMztcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRNaW51dGU6IG51bWJlciA9IDU5O1xuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhvdXIgc2VnbWVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaG91clNlZ21lbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgaG91clNlZ21lbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfT4oKTtcbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgaGVhZGVyIHdlZWsgZGF5IGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBkYXlDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGV2ZW50IHRpdGxlIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkYXlzOiBXZWVrRGF5W107XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBob3VyczogRGF5Vmlld0hvdXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBldmVudFJvd3M6IFdlZWtWaWV3RXZlbnRSb3dbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICByZWZyZXNoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGN1cnJlbnRSZXNpemU6IHtcbiAgICBvcmlnaW5hbE9mZnNldDogbnVtYmVyO1xuICAgIG9yaWdpbmFsU3BhbjogbnVtYmVyO1xuICAgIGVkZ2U6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVEcmFnOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVSZXNpemU6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZpZXdEYXRlIHx8IGNoYW5nZXMuZXhjbHVkZURheXMpIHtcbiAgICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmV2ZW50cyB8fCBjaGFuZ2VzLnZpZXdEYXRlIHx8IGNoYW5nZXMuZXhjbHVkZURheXMpIHtcbiAgICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmRheVN0YXJ0SG91ciB8fCBjaGFuZ2VzLmRheVN0YXJ0TWludXRlIHx8IGNoYW5nZXMuZGF5RW5kSG91ciB8fCBjaGFuZ2VzLmRheUVuZE1pbnV0ZSkge1xuICAgICAgdGhpcy5yZWZyZXNoSG91ckdyaWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICByZXNpemVTdGFydGVkKHdlZWtWaWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCwgd2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3VycmVudFJlc2l6ZSA9IHtcbiAgICAgICAgb3JpZ2luYWxPZmZzZXQ6IHdlZWtFdmVudC5vZmZzZXQsXG4gICAgICAgIG9yaWdpbmFsU3Bhbjogd2Vla0V2ZW50LnNwYW4sXG4gICAgICAgIGVkZ2U6IHR5cGVvZiByZXNpemVFdmVudC5lZGdlcy5sZWZ0ICE9PSAndW5kZWZpbmVkJyA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNpemVIZWxwZXI6IENhbGVuZGFyUmVzaXplSGVscGVyID0gbmV3IENhbGVuZGFyUmVzaXplSGVscGVyKHdlZWtWaWV3Q29udGFpbmVyLCB0aGlzLmdldERheUNvbHVtbldpZHRoKHdlZWtWaWV3Q29udGFpbmVyKSk7XG4gICAgICB0aGlzLnZhbGlkYXRlUmVzaXplID0gKHtyZWN0YW5nbGV9KSA9PiByZXNpemVIZWxwZXIudmFsaWRhdGVSZXNpemUoe3JlY3RhbmdsZX0pO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHJlc2l6aW5nKHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCwgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50LCBkYXlXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICBpZiAocmVzaXplRXZlbnQuZWRnZXMubGVmdCkge1xuICAgICAgICBjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLnJvdW5kKCtyZXNpemVFdmVudC5lZGdlcy5sZWZ0IC8gZGF5V2lkdGgpO1xuICAgICAgICB3ZWVrRXZlbnQub2Zmc2V0ID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0ICsgZGlmZjtcbiAgICAgICAgd2Vla0V2ZW50LnNwYW4gPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuIC0gZGlmZjtcbiAgICAgIH0gZWxzZSBpZiAocmVzaXplRXZlbnQuZWRnZXMucmlnaHQpIHtcbiAgICAgICAgY29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5yb3VuZCgrcmVzaXplRXZlbnQuZWRnZXMucmlnaHQgLyBkYXlXaWR0aCk7XG4gICAgICAgIHdlZWtFdmVudC5zcGFuID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbiArIGRpZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplRW5kZWQod2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50KTogdm9pZCB7XG5cbiAgICAgIGxldCBkYXlzRGlmZjogbnVtYmVyO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFJlc2l6ZS5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgZGF5c0RpZmYgPSB3ZWVrRXZlbnQub2Zmc2V0IC0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF5c0RpZmYgPSB3ZWVrRXZlbnQuc3BhbiAtIHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW47XG4gICAgICB9XG5cbiAgICAgIHdlZWtFdmVudC5vZmZzZXQgPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxPZmZzZXQ7XG4gICAgICB3ZWVrRXZlbnQuc3BhbiA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW47XG5cbiAgICAgIGxldCBuZXdTdGFydDogRGF0ZSA9IHdlZWtFdmVudC5ldmVudC5zdGFydDtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGUgPSB3ZWVrRXZlbnQuZXZlbnQuZW5kO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFJlc2l6ZS5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgbmV3U3RhcnQgPSBhZGREYXlzKG5ld1N0YXJ0LCBkYXlzRGlmZik7XG4gICAgICB9IGVsc2UgaWYgKG5ld0VuZCkge1xuICAgICAgICBuZXdFbmQgPSBhZGREYXlzKG5ld0VuZCwgZGF5c0RpZmYpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe25ld1N0YXJ0LCBuZXdFbmQsIGV2ZW50OiB3ZWVrRXZlbnQuZXZlbnR9KTtcbiAgICAgIHRoaXMuY3VycmVudFJlc2l6ZSA9IG51bGw7XG5cbiAgICB9XG5cbiAgICBldmVudERyYWdnZWQod2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50LCBkcmFnZ2VkQnlQeDogbnVtYmVyLCBkYXlXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGNvbnN0IGRheXNEcmFnZ2VkOiBudW1iZXIgPSBkcmFnZ2VkQnlQeCAvIGRheVdpZHRoO1xuICAgICAgY29uc3QgbmV3U3RhcnQ6IERhdGUgPSBhZGREYXlzKHdlZWtFdmVudC5ldmVudC5zdGFydCwgZGF5c0RyYWdnZWQpO1xuICAgICAgbGV0IG5ld0VuZDogRGF0ZTtcbiAgICAgIGlmICh3ZWVrRXZlbnQuZXZlbnQuZW5kKSB7XG4gICAgICAgIG5ld0VuZCA9IGFkZERheXMod2Vla0V2ZW50LmV2ZW50LmVuZCwgZGF5c0RyYWdnZWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe25ld1N0YXJ0LCBuZXdFbmQsIGV2ZW50OiB3ZWVrRXZlbnQuZXZlbnR9KTtcblxuICAgIH1cblxuICAgIGRyYWdTdGFydCh3ZWVrVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGV2ZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgY29uc3QgZHJhZ0hlbHBlcjogQ2FsZW5kYXJEcmFnSGVscGVyID0gbmV3IENhbGVuZGFyRHJhZ0hlbHBlcih3ZWVrVmlld0NvbnRhaW5lciwgZXZlbnQpO1xuICAgICAgdGhpcy52YWxpZGF0ZURyYWcgPSAoe3gsIHl9KSA9PiAhdGhpcy5jdXJyZW50UmVzaXplICYmIGRyYWdIZWxwZXIudmFsaWRhdGVEcmFnKHt4LCB5fSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgICovXG5cbiAgZ2V0RGF5Q29sdW1uV2lkdGgoZXZlbnRSb3dDb250YWluZXI6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihldmVudFJvd0NvbnRhaW5lci5vZmZzZXRXaWR0aCAvIHRoaXMuZGF5cy5sZW5ndGgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSGVhZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZGF5cyA9IGdldFdlZWtWaWV3SGVhZGVyKHtcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQm9keSgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50Um93cyA9IGdldFdlZWtWaWV3KHtcbiAgICAgIGV2ZW50czogdGhpcy5ldmVudHMsXG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICAgIGhvdXJTZWdtZW50czogdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICBzZWdtZW50SGVpZ2h0OiBTRUdNRU5UX0hFSUdIVCxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGUsXG4gICAgICB9LFxuICAgICAgZGF5RW5kOiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5RW5kSG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheUVuZE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgICAvLyBwcmVjaXNpb246IHRoaXMucHJlY2lzaW9uXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hIb3VyR3JpZCgpOiB2b2lkIHtcbiAgICB0aGlzLmhvdXJzID0gZ2V0RGF5Vmlld0hvdXJHcmlkKHtcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGUsXG4gICAgICB9LFxuICAgICAgZGF5RW5kOiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5RW5kSG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheUVuZE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gaWYgKHRoaXMuaG91clNlZ21lbnRNb2RpZmllcikge1xuICAgIC8vICAgdGhpcy5ob3Vycy5mb3JFYWNoKGhvdXIgPT4ge1xuICAgIC8vICAgICBob3VyLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB0aGlzLmhvdXJTZWdtZW50TW9kaWZpZXIoc2VnbWVudCkpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIHRoaXMucmVmcmVzaEhvdXJHcmlkKCk7XG4gICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICB9XG59XG4iXX0=