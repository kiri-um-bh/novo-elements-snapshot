/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { getDayViewHourGrid, getWeekView, getWeekViewHeader, } from '../../../utils/calendar-utils/CalendarUtils';
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
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * &lt;novo-calendar-week
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/novo-calendar-week&gt;
 * ```
 */
var NovoCalendarWeekViewElement = /** @class */ (function () {
    /**
     * @hidden
     */
    function NovoCalendarWeekViewElement(cdr, locale) {
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
     */
    /**
     * @hidden
     * @return {?}
     */
    NovoCalendarWeekViewElement.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.detectChanges();
            });
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
    NovoCalendarWeekViewElement.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate || changes.excludeDays) {
            this.refreshHeader();
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
        if (changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute) {
            this.refreshHourGrid();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    NovoCalendarWeekViewElement.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
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
    NovoCalendarWeekViewElement.prototype.getDayColumnWidth = /*
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
    function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @return {?}
     */
    NovoCalendarWeekViewElement.prototype.refreshHeader = /**
     * @return {?}
     */
    function () {
        this.days = getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
        });
    };
    /**
     * @return {?}
     */
    NovoCalendarWeekViewElement.prototype.refreshBody = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NovoCalendarWeekViewElement.prototype.refreshHourGrid = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NovoCalendarWeekViewElement.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshHourGrid();
        this.refreshBody();
    };
    NovoCalendarWeekViewElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-week',
                    template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <novo-calendar-week-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayClicked)=\"dayClicked.emit($event)\">\n      </novo-calendar-week-header>\n      <div *ngFor=\"let eventRow of eventRows\" #eventRowContainer>\n        <div\n          class=\"cal-event-container\"\n          #event\n          *ngFor=\"let weekEvent of eventRow.row\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginTop.px]=\"weekEvent.top\"\n          [style.height.px]=\"weekEvent.height\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\">\n          <novo-calendar-week-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPosition]=\"tooltipPosition\"\n            [customTemplate]=\"eventTemplate\"\n            (eventClicked)=\"eventClicked.emit($event)\">\n          </novo-calendar-week-event>\n        </div>\n      </div>\n      <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"70\">\n        <novo-calendar-day-hour-segment\n          *ngFor=\"let segment of hour.segments\"\n          [segment]=\"segment\"\n          [locale]=\"locale\"\n          [customTemplate]=\"hourSegmentTemplate\"\n          (click)=\"hourSegmentClicked.emit({date: segment.date})\">\n        </novo-calendar-day-hour-segment>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoCalendarWeekViewElement.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
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
    return NovoCalendarWeekViewElement;
}());
export { NovoCalendarWeekViewElement };
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
    /** @type {?} */
    NovoCalendarWeekViewElement.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrVmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci93ZWVrL0NhbGVuZGFyV2Vla1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFJVCxNQUFNLEVBQ04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFJTCxrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGlCQUFpQixHQUdsQixNQUFNLDZDQUE2QyxDQUFDOzs7OztJQUsvQyxjQUFjLEdBQVcsRUFBRTs7Ozs7SUFLM0IsZUFBZSxHQUFXLEVBQUU7Ozs7Ozs7Ozs7O0FBV2xDO0lBbU1FOztPQUVHO0lBQ0gscUNBQW9CLEdBQXNCLEVBQXFCLE1BQWM7UUFBekQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUFwSjFDLFdBQU0sR0FBb0IsRUFBRSxDQUFDOzs7O1FBTTdCLGdCQUFXLEdBQWEsRUFBRSxDQUFDOzs7O1FBa0IzQixvQkFBZSxHQUFXLFFBQVEsQ0FBQzs7Ozs7UUF5Qm5DLGNBQVMsR0FBdUIsTUFBTSxDQUFDOzs7O1FBS3ZDLGlCQUFZLEdBQVcsQ0FBQyxDQUFDOzs7O1FBTXpCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDOzs7O1FBTXpCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDOzs7O1FBTTNCLGVBQVUsR0FBVyxFQUFFLENBQUM7Ozs7UUFNeEIsaUJBQVksR0FBVyxFQUFFLENBQUM7Ozs7UUFVMUIsdUJBQWtCLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDOzs7O1FBS3RGLGVBQVUsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7Ozs7UUFNOUUsaUJBQVksR0FBMkMsSUFB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K0JBTU4sTUFBTTtvQ0FNTixNQUFNOztJQW1OVCxrQ0FBQztDQUFBLEFBN1dELElBNldDO1NBdFVZLDJCQUEyQjs7Ozs7O0lBSXRDLCtDQUNlOzs7OztJQUtmLDZDQUM2Qjs7Ozs7SUFLN0Isa0RBQzJCOzs7OztJQUszQiw4Q0FDc0I7Ozs7O0lBS3RCLDZDQUNlOzs7OztJQUtmLHNEQUNtQzs7Ozs7SUFLbkMsbURBQ3FCOzs7OztJQUtyQixxREFDaUM7Ozs7O0lBS2pDLG9EQUNnQzs7Ozs7O0lBTWhDLGdEQUN1Qzs7Ozs7SUFJdkMsbURBQ3lCOzs7OztJQUt6QixtREFDeUI7Ozs7O0lBS3pCLHFEQUMyQjs7Ozs7SUFLM0IsaURBQ3dCOzs7OztJQUt4QixtREFDMEI7Ozs7O0lBSTFCLDBEQUNzQzs7Ozs7SUFJdEMseURBQ3NGOzs7OztJQUl0RixpREFDOEU7Ozs7O0lBSzlFLG1EQUNvRzs7Ozs7SUFLcEcsd0RBQ3FIOzs7OztJQUtySCwyQ0FBZ0I7Ozs7O0lBSWhCLDRDQUEwQjs7Ozs7SUFLMUIsZ0RBQW1DOzs7OztJQUtuQywwREFBa0M7Ozs7O0lBS2xDLG9EQUlFOzs7OztJQUtGLG1EQUF1Qjs7Ozs7SUFLdkIscURBQXlCOztJQUtiLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTE9DQUxFX0lELFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50LFxuICBEYXlWaWV3SG91cixcbiAgZ2V0RGF5Vmlld0hvdXJHcmlkLFxuICBnZXRXZWVrVmlldyxcbiAgZ2V0V2Vla1ZpZXdIZWFkZXIsXG4gIFdlZWtEYXksXG4gIFdlZWtWaWV3RXZlbnRSb3csXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgU0VHTUVOVF9IRUlHSFQ6IG51bWJlciA9IDMwO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgTUlOVVRFU19JTl9IT1VSOiBudW1iZXIgPSA2MDtcbi8qKlxuICogU2hvd3MgYWxsIGV2ZW50cyBvbiBhIGdpdmVuIHdlZWsuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogJmx0O25vdm8tY2FsZW5kYXItd2Vla1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIiZndDtcbiAqICZsdDsvbm92by1jYWxlbmRhci13ZWVrJmd0O1xuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItd2VlaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbC13ZWVrLXZpZXdcIiAjd2Vla1ZpZXdDb250YWluZXI+XG4gICAgICA8bm92by1jYWxlbmRhci13ZWVrLWhlYWRlclxuICAgICAgICBbZGF5c109XCJkYXlzXCJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAoZGF5Q2xpY2tlZCk9XCJkYXlDbGlja2VkLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC9ub3ZvLWNhbGVuZGFyLXdlZWstaGVhZGVyPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZXZlbnRSb3cgb2YgZXZlbnRSb3dzXCIgI2V2ZW50Um93Q29udGFpbmVyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtY29udGFpbmVyXCJcbiAgICAgICAgICAjZXZlbnRcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgd2Vla0V2ZW50IG9mIGV2ZW50Um93LnJvd1wiXG4gICAgICAgICAgW3N0eWxlLndpZHRoXT1cIigoMTAwIC8gZGF5cy5sZW5ndGgpICogd2Vla0V2ZW50LnNwYW4pICsgJyUnXCJcbiAgICAgICAgICBbc3R5bGUubWFyZ2luVG9wLnB4XT1cIndlZWtFdmVudC50b3BcIlxuICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwid2Vla0V2ZW50LmhlaWdodFwiXG4gICAgICAgICAgW3N0eWxlLm1hcmdpbkxlZnRdPVwiKCgxMDAgLyBkYXlzLmxlbmd0aCkgKiB3ZWVrRXZlbnQub2Zmc2V0KSArICclJ1wiPlxuICAgICAgICAgIDxub3ZvLWNhbGVuZGFyLXdlZWstZXZlbnRcbiAgICAgICAgICAgIFt3ZWVrRXZlbnRdPVwid2Vla0V2ZW50XCJcbiAgICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgIChldmVudENsaWNrZWQpPVwiZXZlbnRDbGlja2VkLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgICAgIDwvbm92by1jYWxlbmRhci13ZWVrLWV2ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1ob3VyXCIgKm5nRm9yPVwibGV0IGhvdXIgb2YgaG91cnNcIiBbc3R5bGUubWluV2lkdGgucHhdPVwiNzBcIj5cbiAgICAgICAgPG5vdm8tY2FsZW5kYXItZGF5LWhvdXItc2VnbWVudFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50IG9mIGhvdXIuc2VnbWVudHNcIlxuICAgICAgICAgIFtzZWdtZW50XT1cInNlZ21lbnRcIlxuICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiaG91clNlZ21lbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImhvdXJTZWdtZW50Q2xpY2tlZC5lbWl0KHtkYXRlOiBzZWdtZW50LmRhdGV9KVwiPlxuICAgICAgICA8L25vdm8tY2FsZW5kYXItZGF5LWhvdXItc2VnbWVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgdmlld0RhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IG9uIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCB3aWxsIGJlIGhpZGRlbiBvbiB0aGUgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXhjbHVkZURheXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCB3aGVuIGVtaXR0ZWQgb24gd2lsbCByZS1yZW5kZXIgdGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgcmVmcmVzaDogU3ViamVjdDxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIHVzZWQgdG8gZm9ybWF0IGRhdGVzXG4gICAqL1xuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmcgPSAnYm90dG9tJztcblxuICAvKipcbiAgICogVGhlIHN0YXJ0IG51bWJlciBvZiB0aGUgd2Vla1xuICAgKi9cbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBoZWFkZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHdlZWsgdmlldyBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBwcmVjaXNpb24gdG8gZGlzcGxheSBldmVudHMuXG4gICAqIGBkYXlzYCB3aWxsIHJvdW5kIGV2ZW50IHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdG8gdGhlIG5lYXJlc3QgZGF5IGFuZCBgbWludXRlc2Agd2lsbCBub3QgZG8gdGhpcyByb3VuZGluZ1xuICAgKi9cbiAgQElucHV0KClcbiAgcHJlY2lzaW9uOiAnZGF5cycgfCAnbWludXRlcycgPSAnZGF5cyc7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIHNlZ21lbnRzIGluIGFuIGhvdXIuIE11c3QgYmUgPD0gNlxuICAgKi9cbiAgQElucHV0KClcbiAgaG91clNlZ21lbnRzOiBudW1iZXIgPSAyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlTdGFydEhvdXI6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgc3RhcnQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlTdGFydE1pbnV0ZTogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheUVuZEhvdXI6IG51bWJlciA9IDIzO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IGVuZCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheUVuZE1pbnV0ZTogbnVtYmVyID0gNTk7XG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaG91ciBzZWdtZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gaG91ciBzZWdtZW50IGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBob3VyU2VnbWVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PigpO1xuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBoZWFkZXIgd2VlayBkYXkgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRheUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gZXZlbnQgaXMgcmVzaXplZCBvciBkcmFnZ2VkIGFuZCBkcm9wcGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRUaW1lc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRheXM6IFdlZWtEYXlbXTtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGhvdXJzOiBEYXlWaWV3SG91cltdID0gW107XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGV2ZW50Um93czogV2Vla1ZpZXdFdmVudFJvd1tdID0gW107XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY3VycmVudFJlc2l6ZToge1xuICAgIG9yaWdpbmFsT2Zmc2V0OiBudW1iZXI7XG4gICAgb3JpZ2luYWxTcGFuOiBudW1iZXI7XG4gICAgZWRnZTogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2YWxpZGF0ZURyYWc6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2YWxpZGF0ZVJlc2l6ZTogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaCkge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaEFsbCgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5leGNsdWRlRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZXZlbnRzIHx8IGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5leGNsdWRlRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnZpZXdEYXRlIHx8IGNoYW5nZXMuZGF5U3RhcnRIb3VyIHx8IGNoYW5nZXMuZGF5U3RhcnRNaW51dGUgfHwgY2hhbmdlcy5kYXlFbmRIb3VyIHx8IGNoYW5nZXMuZGF5RW5kTWludXRlKSB7XG4gICAgICB0aGlzLnJlZnJlc2hIb3VyR3JpZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIHJlc2l6ZVN0YXJ0ZWQod2Vla1ZpZXdDb250YWluZXI6IEhUTUxFbGVtZW50LCB3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy5jdXJyZW50UmVzaXplID0ge1xuICAgICAgICBvcmlnaW5hbE9mZnNldDogd2Vla0V2ZW50Lm9mZnNldCxcbiAgICAgICAgb3JpZ2luYWxTcGFuOiB3ZWVrRXZlbnQuc3BhbixcbiAgICAgICAgZWRnZTogdHlwZW9mIHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgIT09ICd1bmRlZmluZWQnID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc2l6ZUhlbHBlcjogQ2FsZW5kYXJSZXNpemVIZWxwZXIgPSBuZXcgQ2FsZW5kYXJSZXNpemVIZWxwZXIod2Vla1ZpZXdDb250YWluZXIsIHRoaXMuZ2V0RGF5Q29sdW1uV2lkdGgod2Vla1ZpZXdDb250YWluZXIpKTtcbiAgICAgIHRoaXMudmFsaWRhdGVSZXNpemUgPSAoe3JlY3RhbmdsZX0pID0+IHJlc2l6ZUhlbHBlci52YWxpZGF0ZVJlc2l6ZSh7cmVjdGFuZ2xlfSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcmVzaXppbmcod2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQsIGRheVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlmIChyZXNpemVFdmVudC5lZGdlcy5sZWZ0KSB7XG4gICAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGgucm91bmQoK3Jlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgLyBkYXlXaWR0aCk7XG4gICAgICAgIHdlZWtFdmVudC5vZmZzZXQgPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxPZmZzZXQgKyBkaWZmO1xuICAgICAgICB3ZWVrRXZlbnQuc3BhbiA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW4gLSBkaWZmO1xuICAgICAgfSBlbHNlIGlmIChyZXNpemVFdmVudC5lZGdlcy5yaWdodCkge1xuICAgICAgICBjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLnJvdW5kKCtyZXNpemVFdmVudC5lZGdlcy5yaWdodCAvIGRheVdpZHRoKTtcbiAgICAgICAgd2Vla0V2ZW50LnNwYW4gPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuICsgZGlmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemVFbmRlZCh3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQpOiB2b2lkIHtcblxuICAgICAgbGV0IGRheXNEaWZmOiBudW1iZXI7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UmVzaXplLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICBkYXlzRGlmZiA9IHdlZWtFdmVudC5vZmZzZXQgLSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxPZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXlzRGlmZiA9IHdlZWtFdmVudC5zcGFuIC0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbjtcbiAgICAgIH1cblxuICAgICAgd2Vla0V2ZW50Lm9mZnNldCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldDtcbiAgICAgIHdlZWtFdmVudC5zcGFuID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbjtcblxuICAgICAgbGV0IG5ld1N0YXJ0OiBEYXRlID0gd2Vla0V2ZW50LmV2ZW50LnN0YXJ0O1xuICAgICAgbGV0IG5ld0VuZDogRGF0ZSA9IHdlZWtFdmVudC5ldmVudC5lbmQ7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UmVzaXplLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICBuZXdTdGFydCA9IGFkZERheXMobmV3U3RhcnQsIGRheXNEaWZmKTtcbiAgICAgIH0gZWxzZSBpZiAobmV3RW5kKSB7XG4gICAgICAgIG5ld0VuZCA9IGFkZERheXMobmV3RW5kLCBkYXlzRGlmZik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7bmV3U3RhcnQsIG5ld0VuZCwgZXZlbnQ6IHdlZWtFdmVudC5ldmVudH0pO1xuICAgICAgdGhpcy5jdXJyZW50UmVzaXplID0gbnVsbDtcblxuICAgIH1cblxuICAgIGV2ZW50RHJhZ2dlZCh3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQsIGRyYWdnZWRCeVB4OiBudW1iZXIsIGRheVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgY29uc3QgZGF5c0RyYWdnZWQ6IG51bWJlciA9IGRyYWdnZWRCeVB4IC8gZGF5V2lkdGg7XG4gICAgICBjb25zdCBuZXdTdGFydDogRGF0ZSA9IGFkZERheXMod2Vla0V2ZW50LmV2ZW50LnN0YXJ0LCBkYXlzRHJhZ2dlZCk7XG4gICAgICBsZXQgbmV3RW5kOiBEYXRlO1xuICAgICAgaWYgKHdlZWtFdmVudC5ldmVudC5lbmQpIHtcbiAgICAgICAgbmV3RW5kID0gYWRkRGF5cyh3ZWVrRXZlbnQuZXZlbnQuZW5kLCBkYXlzRHJhZ2dlZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7bmV3U3RhcnQsIG5ld0VuZCwgZXZlbnQ6IHdlZWtFdmVudC5ldmVudH0pO1xuXG4gICAgfVxuXG4gICAgZHJhZ1N0YXJ0KHdlZWtWaWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCwgZXZlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBjb25zdCBkcmFnSGVscGVyOiBDYWxlbmRhckRyYWdIZWxwZXIgPSBuZXcgQ2FsZW5kYXJEcmFnSGVscGVyKHdlZWtWaWV3Q29udGFpbmVyLCBldmVudCk7XG4gICAgICB0aGlzLnZhbGlkYXRlRHJhZyA9ICh7eCwgeX0pID0+ICF0aGlzLmN1cnJlbnRSZXNpemUgJiYgZHJhZ0hlbHBlci52YWxpZGF0ZURyYWcoe3gsIHl9KTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgKi9cblxuICBnZXREYXlDb2x1bW5XaWR0aChldmVudFJvd0NvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGV2ZW50Um93Q29udGFpbmVyLm9mZnNldFdpZHRoIC8gdGhpcy5kYXlzLmxlbmd0aCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hIZWFkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kYXlzID0gZ2V0V2Vla1ZpZXdIZWFkZXIoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hCb2R5KCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRSb3dzID0gZ2V0V2Vla1ZpZXcoe1xuICAgICAgZXZlbnRzOiB0aGlzLmV2ZW50cyxcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIHNlZ21lbnRIZWlnaHQ6IFNFR01FTlRfSEVJR0hULFxuICAgICAgZGF5U3RhcnQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlTdGFydEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlTdGFydE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgICBkYXlFbmQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlFbmRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5RW5kTWludXRlLFxuICAgICAgfSxcbiAgICAgIC8vIHByZWNpc2lvbjogdGhpcy5wcmVjaXNpb25cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEhvdXJHcmlkKCk6IHZvaWQge1xuICAgIHRoaXMuaG91cnMgPSBnZXREYXlWaWV3SG91ckdyaWQoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICBob3VyU2VnbWVudHM6IHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgZGF5U3RhcnQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlTdGFydEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlTdGFydE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgICBkYXlFbmQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlFbmRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5RW5kTWludXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyBpZiAodGhpcy5ob3VyU2VnbWVudE1vZGlmaWVyKSB7XG4gICAgLy8gICB0aGlzLmhvdXJzLmZvckVhY2goaG91ciA9PiB7XG4gICAgLy8gICAgIGhvdXIuc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHRoaXMuaG91clNlZ21lbnRNb2RpZmllcihzZWdtZW50KSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgdGhpcy5yZWZyZXNoSG91ckdyaWQoKTtcbiAgICB0aGlzLnJlZnJlc2hCb2R5KCk7XG4gIH1cbn1cbiJdfQ==