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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrVmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci93ZWVrL0NhbGVuZGFyV2Vla1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBSUwsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxpQkFBaUIsR0FHbEIsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7TUFLL0MsY0FBYyxHQUFXLEVBQUU7Ozs7O01BSzNCLGVBQWUsR0FBVyxFQUFFOzs7Ozs7Ozs7OztBQWtEbEMsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBK0p0QyxZQUFvQixHQUFzQixFQUFxQixNQUFjO1FBQXpELFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBcEoxQyxXQUFNLEdBQW9CLEVBQUUsQ0FBQzs7OztRQU03QixnQkFBVyxHQUFhLEVBQUUsQ0FBQzs7OztRQWtCM0Isb0JBQWUsR0FBVyxRQUFRLENBQUM7Ozs7O1FBeUJuQyxjQUFTLEdBQXVCLE1BQU0sQ0FBQzs7OztRQUt2QyxpQkFBWSxHQUFXLENBQUMsQ0FBQzs7OztRQU16QixpQkFBWSxHQUFXLENBQUMsQ0FBQzs7OztRQU16QixtQkFBYyxHQUFXLENBQUMsQ0FBQzs7OztRQU0zQixlQUFVLEdBQVcsRUFBRSxDQUFDOzs7O1FBTXhCLGlCQUFZLEdBQVcsRUFBRSxDQUFDOzs7O1FBVTFCLHVCQUFrQixHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQzs7OztRQUt0RixlQUFVLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDOzs7O1FBTTlFLGlCQUFZLEdBQTJDLElBQUksWUFBWSxFQUE0QixDQUFDOzs7O1FBTXBHLHNCQUFpQixHQUFpRCxJQUFJLFlBQVksRUFBa0MsQ0FBQzs7OztRQVNySCxVQUFLLEdBQWtCLEVBQUUsQ0FBQzs7OztRQUsxQixjQUFTLEdBQXVCLEVBQUUsQ0FBQztRQThCakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFLRCxXQUFXLENBQUMsT0FBWTtRQUN0QixJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQzdELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtRQUVELElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3BILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBS0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNFRCxpQkFBaUIsQ0FBQyxpQkFBOEI7UUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDMUIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxjQUFjO1lBQzdCLFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYzthQUM1QjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTthQUMxQjtTQUVGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1lBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQzVCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQzFCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsa0NBQWtDO1FBQ2xDLGlDQUFpQztRQUNqQywyRUFBMkU7UUFDM0UsUUFBUTtRQUNSLElBQUk7SUFDTixDQUFDOzs7OztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBNVdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUO2FBQ0Y7Ozs7WUFqRkMsaUJBQWlCO3lDQWlQNEIsTUFBTSxTQUFDLFNBQVM7Ozt1QkEzSjVELEtBQUs7cUJBTUwsS0FBSzswQkFNTCxLQUFLO3NCQU1MLEtBQUs7cUJBTUwsS0FBSzs4QkFNTCxLQUFLOzJCQU1MLEtBQUs7NkJBTUwsS0FBSzs0QkFNTCxLQUFLO3dCQU9MLEtBQUs7MkJBS0wsS0FBSzsyQkFNTCxLQUFLOzZCQU1MLEtBQUs7eUJBTUwsS0FBSzsyQkFNTCxLQUFLO2tDQUtMLEtBQUs7aUNBS0wsTUFBTTt5QkFLTixNQUFNOzJCQU1OLE1BQU07Z0NBTU4sTUFBTTs7Ozs7OztJQS9HUCwrQ0FDZTs7Ozs7SUFLZiw2Q0FDNkI7Ozs7O0lBSzdCLGtEQUMyQjs7Ozs7SUFLM0IsOENBQ3NCOzs7OztJQUt0Qiw2Q0FDZTs7Ozs7SUFLZixzREFDbUM7Ozs7O0lBS25DLG1EQUN3Qzs7Ozs7SUFLeEMscURBQ2lDOzs7OztJQUtqQyxvREFDZ0M7Ozs7OztJQU1oQyxnREFDdUM7Ozs7O0lBSXZDLG1EQUN5Qjs7Ozs7SUFLekIsbURBQ3lCOzs7OztJQUt6QixxREFDMkI7Ozs7O0lBSzNCLGlEQUN3Qjs7Ozs7SUFLeEIsbURBQzBCOzs7OztJQUkxQiwwREFDc0M7Ozs7O0lBSXRDLHlEQUNzRjs7Ozs7SUFJdEYsaURBQzhFOzs7OztJQUs5RSxtREFDb0c7Ozs7O0lBS3BHLHdEQUNxSDs7Ozs7SUFLckgsMkNBQWdCOzs7OztJQUloQiw0Q0FBMEI7Ozs7O0lBSzFCLGdEQUFtQzs7Ozs7SUFLbkMsMERBQWtDOzs7OztJQUtsQyxvREFJRTs7Ozs7SUFLRixtREFBdUI7Ozs7O0lBS3ZCLHFEQUF5Qjs7Ozs7SUFLYiwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIExPQ0FMRV9JRCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENhbGVuZGFyRXZlbnQsXG4gIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudCxcbiAgRGF5Vmlld0hvdXIsXG4gIGdldERheVZpZXdIb3VyR3JpZCxcbiAgZ2V0V2Vla1ZpZXcsXG4gIGdldFdlZWtWaWV3SGVhZGVyLFxuICBXZWVrRGF5LFxuICBXZWVrVmlld0V2ZW50Um93LFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IFNFR01FTlRfSEVJR0hUOiBudW1iZXIgPSAzMDtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IE1JTlVURVNfSU5fSE9VUjogbnVtYmVyID0gNjA7XG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiB3ZWVrLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICZsdDtub3ZvLWNhbGVuZGFyLXdlZWtcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCImZ3Q7XG4gKiAmbHQ7L25vdm8tY2FsZW5kYXItd2VlayZndDtcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLXdlZWsnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYWwtd2Vlay12aWV3XCIgI3dlZWtWaWV3Q29udGFpbmVyPlxuICAgICAgPG5vdm8tY2FsZW5kYXItd2Vlay1oZWFkZXJcbiAgICAgICAgW2RheXNdPVwiZGF5c1wiXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgKGRheUNsaWNrZWQpPVwiZGF5Q2xpY2tlZC5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvbm92by1jYWxlbmRhci13ZWVrLWhlYWRlcj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGV2ZW50Um93IG9mIGV2ZW50Um93c1wiICNldmVudFJvd0NvbnRhaW5lcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LWNvbnRhaW5lclwiXG4gICAgICAgICAgI2V2ZW50XG4gICAgICAgICAgKm5nRm9yPVwibGV0IHdlZWtFdmVudCBvZiBldmVudFJvdy5yb3dcIlxuICAgICAgICAgIFtzdHlsZS53aWR0aF09XCIoKDEwMCAvIGRheXMubGVuZ3RoKSAqIHdlZWtFdmVudC5zcGFuKSArICclJ1wiXG4gICAgICAgICAgW3N0eWxlLm1hcmdpblRvcC5weF09XCJ3ZWVrRXZlbnQudG9wXCJcbiAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cIndlZWtFdmVudC5oZWlnaHRcIlxuICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0XT1cIigoMTAwIC8gZGF5cy5sZW5ndGgpICogd2Vla0V2ZW50Lm9mZnNldCkgKyAnJSdcIj5cbiAgICAgICAgICA8bm92by1jYWxlbmRhci13ZWVrLWV2ZW50XG4gICAgICAgICAgICBbd2Vla0V2ZW50XT1cIndlZWtFdmVudFwiXG4gICAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KCRldmVudClcIj5cbiAgICAgICAgICA8L25vdm8tY2FsZW5kYXItd2Vlay1ldmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtaG91clwiICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzXCIgW3N0eWxlLm1pbldpZHRoLnB4XT1cIjcwXCI+XG4gICAgICAgIDxub3ZvLWNhbGVuZGFyLWRheS1ob3VyLXNlZ21lbnRcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBob3VyLnNlZ21lbnRzXCJcbiAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhvdXJTZWdtZW50VGVtcGxhdGVcIlxuICAgICAgICAgIChjbGljayk9XCJob3VyU2VnbWVudENsaWNrZWQuZW1pdCh7ZGF0ZTogc2VnbWVudC5kYXRlfSlcIj5cbiAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLWRheS1ob3VyLXNlZ21lbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBkYXkgaW5kZXhlcyAoMCA9IHN1bmRheSwgMSA9IG1vbmRheSBldGMpIHRoYXQgd2lsbCBiZSBoaWRkZW4gb24gdGhlIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV4Y2x1ZGVEYXlzOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgd2hlbiBlbWl0dGVkIG9uIHdpbGwgcmUtcmVuZGVyIHRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlZnJlc2g6IFN1YmplY3Q8YW55PjtcblxuICAvKipcbiAgICogVGhlIGxvY2FsZSB1c2VkIHRvIGZvcm1hdCBkYXRlc1xuICAgKi9cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nID0gJ2JvdHRvbSc7XG5cbiAgLyoqXG4gICAqIFRoZSBzdGFydCBudW1iZXIgb2YgdGhlIHdlZWtcbiAgICovXG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydHNPbjogMCB8IDEgfCAyIHwgNiB8IDUgfCA0IHwgMztcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhlYWRlclxuICAgKi9cbiAgQElucHV0KClcbiAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3Igd2VlayB2aWV3IGV2ZW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogVGhlIHByZWNpc2lvbiB0byBkaXNwbGF5IGV2ZW50cy5cbiAgICogYGRheXNgIHdpbGwgcm91bmQgZXZlbnQgc3RhcnQgYW5kIGVuZCBkYXRlcyB0byB0aGUgbmVhcmVzdCBkYXkgYW5kIGBtaW51dGVzYCB3aWxsIG5vdCBkbyB0aGlzIHJvdW5kaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBwcmVjaXNpb246ICdkYXlzJyB8ICdtaW51dGVzJyA9ICdkYXlzJztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaW4gYW4gaG91ci4gTXVzdCBiZSA8PSA2XG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudHM6IG51bWJlciA9IDI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgc3RhcnQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0SG91cjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0TWludXRlOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IGVuZCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kSG91cjogbnVtYmVyID0gMjM7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kTWludXRlOiBudW1iZXIgPSA1OTtcbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBob3VyIHNlZ21lbnQgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGhvdXJTZWdtZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGhlYWRlciB3ZWVrIGRheSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZGF5Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCBpcyByZXNpemVkIG9yIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudFRpbWVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZGF5czogV2Vla0RheVtdO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaG91cnM6IERheVZpZXdIb3VyW10gPSBbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXZlbnRSb3dzOiBXZWVrVmlld0V2ZW50Um93W10gPSBbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjdXJyZW50UmVzaXplOiB7XG4gICAgb3JpZ2luYWxPZmZzZXQ6IG51bWJlcjtcbiAgICBvcmlnaW5hbFNwYW46IG51bWJlcjtcbiAgICBlZGdlOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlRHJhZzogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlUmVzaXplOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWxsKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5ldmVudHMgfHwgY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2R5KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5kYXlTdGFydEhvdXIgfHwgY2hhbmdlcy5kYXlTdGFydE1pbnV0ZSB8fCBjaGFuZ2VzLmRheUVuZEhvdXIgfHwgY2hhbmdlcy5kYXlFbmRNaW51dGUpIHtcbiAgICAgIHRoaXMucmVmcmVzaEhvdXJHcmlkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgcmVzaXplU3RhcnRlZCh3ZWVrVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCwgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50KTogdm9pZCB7XG4gICAgICB0aGlzLmN1cnJlbnRSZXNpemUgPSB7XG4gICAgICAgIG9yaWdpbmFsT2Zmc2V0OiB3ZWVrRXZlbnQub2Zmc2V0LFxuICAgICAgICBvcmlnaW5hbFNwYW46IHdlZWtFdmVudC5zcGFuLFxuICAgICAgICBlZGdlOiB0eXBlb2YgcmVzaXplRXZlbnQuZWRnZXMubGVmdCAhPT0gJ3VuZGVmaW5lZCcgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzaXplSGVscGVyOiBDYWxlbmRhclJlc2l6ZUhlbHBlciA9IG5ldyBDYWxlbmRhclJlc2l6ZUhlbHBlcih3ZWVrVmlld0NvbnRhaW5lciwgdGhpcy5nZXREYXlDb2x1bW5XaWR0aCh3ZWVrVmlld0NvbnRhaW5lcikpO1xuICAgICAgdGhpcy52YWxpZGF0ZVJlc2l6ZSA9ICh7cmVjdGFuZ2xlfSkgPT4gcmVzaXplSGVscGVyLnZhbGlkYXRlUmVzaXplKHtyZWN0YW5nbGV9KTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICByZXNpemluZyh3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCwgZGF5V2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQpIHtcbiAgICAgICAgY29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5yb3VuZCgrcmVzaXplRXZlbnQuZWRnZXMubGVmdCAvIGRheVdpZHRoKTtcbiAgICAgICAgd2Vla0V2ZW50Lm9mZnNldCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldCArIGRpZmY7XG4gICAgICAgIHdlZWtFdmVudC5zcGFuID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbiAtIGRpZmY7XG4gICAgICB9IGVsc2UgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLnJpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGgucm91bmQoK3Jlc2l6ZUV2ZW50LmVkZ2VzLnJpZ2h0IC8gZGF5V2lkdGgpO1xuICAgICAgICB3ZWVrRXZlbnQuc3BhbiA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW4gKyBkaWZmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUVuZGVkKHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCk6IHZvaWQge1xuXG4gICAgICBsZXQgZGF5c0RpZmY6IG51bWJlcjtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIGRheXNEaWZmID0gd2Vla0V2ZW50Lm9mZnNldCAtIHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRheXNEaWZmID0gd2Vla0V2ZW50LnNwYW4gLSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuO1xuICAgICAgfVxuXG4gICAgICB3ZWVrRXZlbnQub2Zmc2V0ID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0O1xuICAgICAgd2Vla0V2ZW50LnNwYW4gPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuO1xuXG4gICAgICBsZXQgbmV3U3RhcnQ6IERhdGUgPSB3ZWVrRXZlbnQuZXZlbnQuc3RhcnQ7XG4gICAgICBsZXQgbmV3RW5kOiBEYXRlID0gd2Vla0V2ZW50LmV2ZW50LmVuZDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIG5ld1N0YXJ0ID0gYWRkRGF5cyhuZXdTdGFydCwgZGF5c0RpZmYpO1xuICAgICAgfSBlbHNlIGlmIChuZXdFbmQpIHtcbiAgICAgICAgbmV3RW5kID0gYWRkRGF5cyhuZXdFbmQsIGRheXNEaWZmKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtuZXdTdGFydCwgbmV3RW5kLCBldmVudDogd2Vla0V2ZW50LmV2ZW50fSk7XG4gICAgICB0aGlzLmN1cnJlbnRSZXNpemUgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgZXZlbnREcmFnZ2VkKHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCwgZHJhZ2dlZEJ5UHg6IG51bWJlciwgZGF5V2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBjb25zdCBkYXlzRHJhZ2dlZDogbnVtYmVyID0gZHJhZ2dlZEJ5UHggLyBkYXlXaWR0aDtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0OiBEYXRlID0gYWRkRGF5cyh3ZWVrRXZlbnQuZXZlbnQuc3RhcnQsIGRheXNEcmFnZ2VkKTtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGU7XG4gICAgICBpZiAod2Vla0V2ZW50LmV2ZW50LmVuZCkge1xuICAgICAgICBuZXdFbmQgPSBhZGREYXlzKHdlZWtFdmVudC5ldmVudC5lbmQsIGRheXNEcmFnZ2VkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtuZXdTdGFydCwgbmV3RW5kLCBldmVudDogd2Vla0V2ZW50LmV2ZW50fSk7XG5cbiAgICB9XG5cbiAgICBkcmFnU3RhcnQod2Vla1ZpZXdDb250YWluZXI6IEhUTUxFbGVtZW50LCBldmVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGRyYWdIZWxwZXI6IENhbGVuZGFyRHJhZ0hlbHBlciA9IG5ldyBDYWxlbmRhckRyYWdIZWxwZXIod2Vla1ZpZXdDb250YWluZXIsIGV2ZW50KTtcbiAgICAgIHRoaXMudmFsaWRhdGVEcmFnID0gKHt4LCB5fSkgPT4gIXRoaXMuY3VycmVudFJlc2l6ZSAmJiBkcmFnSGVscGVyLnZhbGlkYXRlRHJhZyh7eCwgeX0pO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICAqL1xuXG4gIGdldERheUNvbHVtbldpZHRoKGV2ZW50Um93Q29udGFpbmVyOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZXZlbnRSb3dDb250YWluZXIub2Zmc2V0V2lkdGggLyB0aGlzLmRheXMubGVuZ3RoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEhlYWRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRheXMgPSBnZXRXZWVrVmlld0hlYWRlcih7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEJvZHkoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFJvd3MgPSBnZXRXZWVrVmlldyh7XG4gICAgICBldmVudHM6IHRoaXMuZXZlbnRzLFxuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgICBob3VyU2VnbWVudHM6IHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgc2VnbWVudEhlaWdodDogU0VHTUVOVF9IRUlHSFQsXG4gICAgICBkYXlTdGFydDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheVN0YXJ0SG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheVN0YXJ0TWludXRlLFxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGUsXG4gICAgICB9LFxuICAgICAgLy8gcHJlY2lzaW9uOiB0aGlzLnByZWNpc2lvblxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSG91ckdyaWQoKTogdm9pZCB7XG4gICAgdGhpcy5ob3VycyA9IGdldERheVZpZXdIb3VyR3JpZCh7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIGhvdXJTZWdtZW50czogdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICBkYXlTdGFydDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheVN0YXJ0SG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheVN0YXJ0TWludXRlLFxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIGlmICh0aGlzLmhvdXJTZWdtZW50TW9kaWZpZXIpIHtcbiAgICAvLyAgIHRoaXMuaG91cnMuZm9yRWFjaChob3VyID0+IHtcbiAgICAvLyAgICAgaG91ci5zZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4gdGhpcy5ob3VyU2VnbWVudE1vZGlmaWVyKHNlZ21lbnQpKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB0aGlzLnJlZnJlc2hIb3VyR3JpZCgpO1xuICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgfVxufVxuIl19