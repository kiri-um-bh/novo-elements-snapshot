/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/day/CalendarDayView.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { getDayView, getDayViewHourGrid } from '../../../utils/calendar-utils/CalendarUtils';
/**
 * @hidden
 * @type {?}
 */
var SEGMENT_HEIGHT = 30;
/**
 * @hidden
 * @type {?}
 */
var MINUTES_IN_HOUR = 60;
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
var NovoCalendarDayViewElement = /** @class */ (function () {
    /**
     * @hidden
     */
    function NovoCalendarDayViewElement(cdr, locale) {
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
     */
    /**
     * @hidden
     * @return {?}
     */
    NovoCalendarDayViewElement.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshAll();
                _this.cdr.detectChanges();
            }));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    NovoCalendarDayViewElement.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    NovoCalendarDayViewElement.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
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
    NovoCalendarDayViewElement.prototype.refreshHourGrid = /*
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
    function () {
        var _this = this;
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
            this.hours.forEach((/**
             * @param {?} hour
             * @return {?}
             */
            function (hour) {
                hour.segments.forEach((/**
                 * @param {?} segment
                 * @return {?}
                 */
                function (segment) { return _this.hourSegmentModifier(segment); }));
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NovoCalendarDayViewElement.prototype.refreshView = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    NovoCalendarDayViewElement.prototype.refreshAll = /**
     * @private
     * @return {?}
     */
    function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    NovoCalendarDayViewElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-day',
                    template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <novo-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </novo-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events\"\n            class=\"cal-event-container\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <novo-calendar-day-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPosition]=\"tooltipPosition\"\n              [customTemplate]=\"eventTemplate\"\n              (eventClicked)=\"eventClicked.emit($event)\">\n            </novo-calendar-day-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <novo-calendar-day-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [segment]=\"segment\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (click)=\"hourSegmentClicked.emit({date: segment.date})\">\n          </novo-calendar-day-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoCalendarDayViewElement.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
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
    return NovoCalendarDayViewElement;
}());
export { NovoCalendarDayViewElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlWaWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2RheS9DYWxlbmRhckRheVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBZ0MsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQXVFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7OztJQUs1SixjQUFjLEdBQVcsRUFBRTs7Ozs7SUFLM0IsZUFBZSxHQUFXLEVBQUU7Ozs7Ozs7Ozs7O0FBWWxDO0lBb01FOztPQUVHO0lBQ0gsb0NBQW9CLEdBQXNCLEVBQXFCLE1BQWM7UUFBekQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUFuSjFDLFdBQU0sR0FBb0IsRUFBRSxDQUFDOzs7O1FBTTdCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDOzs7O1FBTXpCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDOzs7O1FBTXpCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDOzs7O1FBTTNCLGVBQVUsR0FBVyxFQUFFLENBQUM7Ozs7UUFNeEIsaUJBQVksR0FBVyxFQUFFLENBQUM7Ozs7UUFNMUIsZUFBVSxHQUFXLEdBQUcsQ0FBQzs7OztRQXlCekIsa0JBQWEsR0FBVyxFQUFFLENBQUM7Ozs7UUFNM0Isb0JBQWUsR0FBVyxLQUFLLENBQUM7Ozs7UUF3QmhDLGlCQUFZLEdBQTJDLElBQUksWUFBWSxFQUE0QixDQUFDOzs7O1FBTXBHLHVCQUFrQixHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQzs7OztRQU10RixzQkFBaUIsR0FBaUQsSUFBSSxZQUFZLEVBQWtDLENB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O0lBSzlCLG1EQUMyQjs7Ozs7SUFLM0IscURBQ2dDOzs7OztJQUtoQyx5REFDc0M7Ozs7O0lBS3RDLHlEQUNzQzs7Ozs7SUFLdEMsbURBQ2dDOzs7OztJQUtoQyxrREFDb0c7Ozs7O0lBS3BHLHdEQUNzRjs7Ozs7SUFLdEYsdURBQ3FIOzs7OztJQUtySCwyQ0FBMEI7Ozs7O0lBSzFCLDBDQUFjOzs7OztJQUtkLDJDQUFrQjs7Ozs7SUFLbEIseURBQWtDOzs7OztJQUtsQyxtREFJRTs7Ozs7SUFLRixrREFBdUI7Ozs7O0lBS3ZCLG9EQUF5Qjs7Ozs7SUFLYix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIExPQ0FMRV9JRCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50LCBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQsIERheVZpZXcsIERheVZpZXdIb3VyLCBnZXREYXlWaWV3LCBnZXREYXlWaWV3SG91ckdyaWQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IFNFR01FTlRfSEVJR0hUOiBudW1iZXIgPSAzMDtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IE1JTlVURVNfSU5fSE9VUjogbnVtYmVyID0gNjA7XG5cbi8qKlxuICogU2hvd3MgYWxsIGV2ZW50cyBvbiBhIGdpdmVuIGRheS4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAmbHQ7bm92by1jYWxlbmRhci1kYXlcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCImZ3Q7XG4gKiAmbHQ7L25vdm8tY2FsZW5kYXItZGF5Jmd0O1xuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItZGF5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLWRheS12aWV3XCIgI2RheVZpZXdDb250YWluZXI+XG4gICAgICA8bm92by1jYWxlbmRhci1hbGwtZGF5LWV2ZW50XG4gICAgICAgICpuZ0Zvcj1cImxldCBldmVudCBvZiB2aWV3LmFsbERheUV2ZW50c1wiXG4gICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJhbGxEYXlFdmVudFRlbXBsYXRlXCJcbiAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6IGV2ZW50fSlcIj5cbiAgICAgIDwvbm92by1jYWxlbmRhci1hbGwtZGF5LWV2ZW50PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1ob3VyLXJvd3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudHNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAjZXZlbnRcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXlFdmVudCBvZiB2aWV3Py5ldmVudHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5Ub3AucHhdPVwiZGF5RXZlbnQudG9wXCJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZGF5RXZlbnQuaGVpZ2h0XCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0LnB4XT1cImRheUV2ZW50LmxlZnQgKyA3MFwiXG4gICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiZGF5RXZlbnQud2lkdGggLSAxXCI+XG4gICAgICAgICAgICA8bm92by1jYWxlbmRhci1kYXktZXZlbnRcbiAgICAgICAgICAgICAgW2RheUV2ZW50XT1cImRheUV2ZW50XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIChldmVudENsaWNrZWQpPVwiZXZlbnRDbGlja2VkLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLWRheS1ldmVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtaG91clwiICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzXCIgW3N0eWxlLm1pbldpZHRoLnB4XT1cInZpZXc/LndpZHRoICsgNzBcIj5cbiAgICAgICAgICA8bm92by1jYWxlbmRhci1kYXktaG91ci1zZWdtZW50XG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBob3VyLnNlZ21lbnRzXCJcbiAgICAgICAgICAgIFtzZWdtZW50XT1cInNlZ21lbnRcIlxuICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhvdXJTZWdtZW50VGVtcGxhdGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImhvdXJTZWdtZW50Q2xpY2tlZC5lbWl0KHtkYXRlOiBzZWdtZW50LmRhdGV9KVwiPlxuICAgICAgICAgIDwvbm92by1jYWxlbmRhci1kYXktaG91ci1zZWdtZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBzZWdtZW50cyBpbiBhbiBob3VyLiBNdXN0IGJlIDw9IDZcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50czogbnVtYmVyID0gMjtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRIb3VyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRNaW51dGU6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRIb3VyOiBudW1iZXIgPSAyMztcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRNaW51dGU6IG51bWJlciA9IDU5O1xuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggaW4gcGl4ZWxzIG9mIGVhY2ggZXZlbnQgb24gdGhlIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50V2lkdGg6IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVhY2ggaG91ciBzZWdtZW50IGlzIGNhbGxlZC4gVGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgY29udGFpbiB0aGUgaG91ciBzZWdtZW50LlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIHRoZSBzZWdtZW50IGl0IHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGhvdXIgc2VnbWVudCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50TW9kaWZpZXI6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgZ3JpZCBzaXplIHRvIHNuYXAgcmVzaXppbmcgYW5kIGRyYWdnaW5nIG9mIGV2ZW50cyB0b1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRTbmFwU2l6ZTogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgYWxsIGRheSBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFsbERheUV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZGF5IHZpZXcgZXZlbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBob3VyIHNlZ21lbnQgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGhvdXJTZWdtZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBob3VyczogRGF5Vmlld0hvdXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBEYXlWaWV3O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB3aWR0aDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjdXJyZW50UmVzaXplOiB7XG4gICAgb3JpZ2luYWxUb3A6IG51bWJlcjtcbiAgICBvcmlnaW5hbEhlaWdodDogbnVtYmVyO1xuICAgIGVkZ2U6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVEcmFnOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVSZXNpemU6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmRheVN0YXJ0SG91ciB8fCBjaGFuZ2VzLmRheVN0YXJ0TWludXRlIHx8IGNoYW5nZXMuZGF5RW5kSG91ciB8fCBjaGFuZ2VzLmRheUVuZE1pbnV0ZSkge1xuICAgICAgdGhpcy5yZWZyZXNoSG91ckdyaWQoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5kYXlTdGFydEhvdXIgfHxcbiAgICAgIGNoYW5nZXMuZGF5U3RhcnRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZGF5RW5kSG91ciB8fFxuICAgICAgY2hhbmdlcy5kYXlFbmRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZXZlbnRXaWR0aFxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgZXZlbnREcm9wcGVkKGRyb3BFdmVudDoge2Ryb3BEYXRhPzoge2V2ZW50PzogQ2FsZW5kYXJFdmVudH19LCBzZWdtZW50OiBEYXlWaWV3SG91clNlZ21lbnQpOiB2b2lkIHtcbiAgICAgIGlmIChkcm9wRXZlbnQuZHJvcERhdGEgJiYgZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50KSB7XG4gICAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7ZXZlbnQ6IGRyb3BFdmVudC5kcm9wRGF0YS5ldmVudCwgbmV3U3RhcnQ6IHNlZ21lbnQuZGF0ZX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZVN0YXJ0ZWQoZXZlbnQ6IERheVZpZXdFdmVudCwgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50LCBkYXlWaWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgdGhpcy5jdXJyZW50UmVzaXplID0ge1xuICAgICAgICBvcmlnaW5hbFRvcDogZXZlbnQudG9wLFxuICAgICAgICBvcmlnaW5hbEhlaWdodDogZXZlbnQuaGVpZ2h0LFxuICAgICAgICBlZGdlOiB0eXBlb2YgcmVzaXplRXZlbnQuZWRnZXMudG9wICE9PSAndW5kZWZpbmVkJyA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNpemVIZWxwZXI6IENhbGVuZGFyUmVzaXplSGVscGVyID0gbmV3IENhbGVuZGFyUmVzaXplSGVscGVyKGRheVZpZXdDb250YWluZXIpO1xuICAgICAgdGhpcy52YWxpZGF0ZVJlc2l6ZSA9ICh7cmVjdGFuZ2xlfSkgPT4gcmVzaXplSGVscGVyLnZhbGlkYXRlUmVzaXplKHtyZWN0YW5nbGV9KTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICByZXNpemluZyhldmVudDogRGF5Vmlld0V2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChyZXNpemVFdmVudC5lZGdlcy50b3ApIHtcbiAgICAgICAgZXZlbnQudG9wID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsVG9wICsgK3Jlc2l6ZUV2ZW50LmVkZ2VzLnRvcDtcbiAgICAgICAgZXZlbnQuaGVpZ2h0ID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsSGVpZ2h0IC0gK3Jlc2l6ZUV2ZW50LmVkZ2VzLnRvcDtcbiAgICAgIH0gZWxzZSBpZiAocmVzaXplRXZlbnQuZWRnZXMuYm90dG9tKSB7XG4gICAgICAgIGV2ZW50LmhlaWdodCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodCArICtyZXNpemVFdmVudC5lZGdlcy5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplRW5kZWQoZGF5RXZlbnQ6IERheVZpZXdFdmVudCk6IHZvaWQge1xuXG4gICAgICBsZXQgcGl4ZWxzTW92ZWQ6IG51bWJlcjtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgcGl4ZWxzTW92ZWQgPSAoZGF5RXZlbnQudG9wIC0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsVG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpeGVsc01vdmVkID0gKGRheUV2ZW50LmhlaWdodCAtIHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGRheUV2ZW50LnRvcCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFRvcDtcbiAgICAgIGRheUV2ZW50LmhlaWdodCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodDtcblxuICAgICAgY29uc3QgcGl4ZWxBbW91bnRJbk1pbnV0ZXM6IG51bWJlciA9IE1JTlVURVNfSU5fSE9VUiAvICh0aGlzLmhvdXJTZWdtZW50cyAqIFNFR01FTlRfSEVJR0hUKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZDogbnVtYmVyID0gcGl4ZWxzTW92ZWQgKiBwaXhlbEFtb3VudEluTWludXRlcztcbiAgICAgIGxldCBuZXdTdGFydDogRGF0ZSA9IGRheUV2ZW50LmV2ZW50LnN0YXJ0O1xuICAgICAgbGV0IG5ld0VuZDogRGF0ZSA9IGRheUV2ZW50LmV2ZW50LmVuZDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgbmV3U3RhcnQgPSBhZGRNaW51dGVzKG5ld1N0YXJ0LCBtaW51dGVzTW92ZWQpO1xuICAgICAgfSBlbHNlIGlmIChuZXdFbmQpIHtcbiAgICAgICAgbmV3RW5kID0gYWRkTWludXRlcyhuZXdFbmQsIG1pbnV0ZXNNb3ZlZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7bmV3U3RhcnQsIG5ld0VuZCwgZXZlbnQ6IGRheUV2ZW50LmV2ZW50fSk7XG4gICAgICB0aGlzLmN1cnJlbnRSZXNpemUgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgZHJhZ1N0YXJ0KGV2ZW50OiBIVE1MRWxlbWVudCwgZGF5Vmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGRyYWdIZWxwZXI6IENhbGVuZGFyRHJhZ0hlbHBlciA9IG5ldyBDYWxlbmRhckRyYWdIZWxwZXIoZGF5Vmlld0NvbnRhaW5lciwgZXZlbnQpO1xuICAgICAgdGhpcy52YWxpZGF0ZURyYWcgPSAoe3gsIHl9KSA9PiAhdGhpcy5jdXJyZW50UmVzaXplICYmIGRyYWdIZWxwZXIudmFsaWRhdGVEcmFnKHt4LCB5fSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZXZlbnREcmFnZ2VkKGRheUV2ZW50OiBEYXlWaWV3RXZlbnQsIGRyYWdnZWRJblBpeGVsczogbnVtYmVyKTogdm9pZCB7XG4gICAgICBjb25zdCBwaXhlbEFtb3VudEluTWludXRlczogbnVtYmVyID0gTUlOVVRFU19JTl9IT1VSIC8gKHRoaXMuaG91clNlZ21lbnRzICogU0VHTUVOVF9IRUlHSFQpO1xuICAgICAgY29uc3QgbWludXRlc01vdmVkOiBudW1iZXIgPSBkcmFnZ2VkSW5QaXhlbHMgKiBwaXhlbEFtb3VudEluTWludXRlcztcbiAgICAgIGNvbnN0IG5ld1N0YXJ0OiBEYXRlID0gYWRkTWludXRlcyhkYXlFdmVudC5ldmVudC5zdGFydCwgbWludXRlc01vdmVkKTtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGU7XG4gICAgICBpZiAoZGF5RXZlbnQuZXZlbnQuZW5kKSB7XG4gICAgICAgIG5ld0VuZCA9IGFkZE1pbnV0ZXMoZGF5RXZlbnQuZXZlbnQuZW5kLCBtaW51dGVzTW92ZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtuZXdTdGFydCwgbmV3RW5kLCBldmVudDogZGF5RXZlbnQuZXZlbnR9KTtcbiAgICB9XG4gICAgKi9cblxuICBwcml2YXRlIHJlZnJlc2hIb3VyR3JpZCgpOiB2b2lkIHtcbiAgICB0aGlzLmhvdXJzID0gZ2V0RGF5Vmlld0hvdXJHcmlkKHtcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGUsXG4gICAgICB9LFxuICAgICAgZGF5RW5kOiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5RW5kSG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheUVuZE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuaG91clNlZ21lbnRNb2RpZmllcikge1xuICAgICAgdGhpcy5ob3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICAgIGhvdXIuc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudCkgPT4gdGhpcy5ob3VyU2VnbWVudE1vZGlmaWVyKHNlZ21lbnQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gZ2V0RGF5Vmlldyh7XG4gICAgICBldmVudHM6IHRoaXMuZXZlbnRzLFxuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICBob3VyU2VnbWVudHM6IHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgZGF5U3RhcnQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlTdGFydEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlTdGFydE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgICBkYXlFbmQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlFbmRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5RW5kTWludXRlLFxuICAgICAgfSxcbiAgICAgIGV2ZW50V2lkdGg6IHRoaXMuZXZlbnRXaWR0aCxcbiAgICAgIHNlZ21lbnRIZWlnaHQ6IFNFR01FTlRfSEVJR0hULFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaEhvdXJHcmlkKCk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG59XG4iXX0=