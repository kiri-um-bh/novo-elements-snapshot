import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { getDayView, getDayViewHourGrid } from '../../../utils/calendar-utils/CalendarUtils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./CalendarAllDayEvent";
import * as i3 from "./CalendarDayEvent";
import * as i4 from "./CalendarHourSegment";
function NovoCalendarDayViewElement_novo_calendar_all_day_event_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-calendar-all-day-event", 7);
    i0.ɵɵlistener("eventClicked", function NovoCalendarDayViewElement_novo_calendar_all_day_event_2_Template_novo_calendar_all_day_event_eventClicked_0_listener() { i0.ɵɵrestoreView(_r6); const event_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.eventClicked.emit({ event: event_r4 }); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("event", event_r4)("customTemplate", ctx_r1.allDayEventTemplate);
} }
function NovoCalendarDayViewElement_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8, 9);
    i0.ɵɵelementStart(2, "novo-calendar-day-event", 10);
    i0.ɵɵlistener("eventClicked", function NovoCalendarDayViewElement_div_5_Template_novo_calendar_day_event_eventClicked_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.eventClicked.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayEvent_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("margin-top", dayEvent_r7.top, "px")("height", dayEvent_r7.height, "px")("margin-left", dayEvent_r7.left + 70, "px")("width", dayEvent_r7.width - 1, "px");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("dayEvent", dayEvent_r7)("tooltipPosition", ctx_r2.tooltipPosition)("customTemplate", ctx_r2.eventTemplate);
} }
function NovoCalendarDayViewElement_div_6_novo_calendar_day_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-calendar-day-hour-segment", 13);
    i0.ɵɵlistener("click", function NovoCalendarDayViewElement_div_6_novo_calendar_day_hour_segment_1_Template_novo_calendar_day_hour_segment_click_0_listener() { i0.ɵɵrestoreView(_r15); const segment_r13 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.hourSegmentClicked.emit({ date: segment_r13.date }); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r13 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("segment", segment_r13)("locale", ctx_r12.locale)("customTemplate", ctx_r12.hourSegmentTemplate);
} }
function NovoCalendarDayViewElement_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, NovoCalendarDayViewElement_div_6_novo_calendar_day_hour_segment_1_Template, 1, 3, "novo-calendar-day-hour-segment", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("min-width", (ctx_r3.view == null ? null : ctx_r3.view.width) + 70, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", hour_r11.segments);
} }
/**
 * @hidden
 */
const SEGMENT_HEIGHT = 30;
/**
 * @hidden
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
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
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
    refreshAll() {
        this.refreshHourGrid();
        this.refreshView();
    }
}
NovoCalendarDayViewElement.ɵfac = function NovoCalendarDayViewElement_Factory(t) { return new (t || NovoCalendarDayViewElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(LOCALE_ID)); };
NovoCalendarDayViewElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarDayViewElement, selectors: [["novo-calendar-day"]], inputs: { viewDate: "viewDate", events: "events", hourSegments: "hourSegments", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", eventWidth: "eventWidth", refresh: "refresh", locale: "locale", hourSegmentModifier: "hourSegmentModifier", eventSnapSize: "eventSnapSize", tooltipPosition: "tooltipPosition", hourSegmentTemplate: "hourSegmentTemplate", allDayEventTemplate: "allDayEventTemplate", eventTemplate: "eventTemplate" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [[1, "cal-day-view"], ["dayViewContainer", ""], [3, "event", "customTemplate", "eventClicked", 4, "ngFor", "ngForOf"], [1, "cal-hour-rows"], [1, "cal-events"], ["class", "cal-event-container", 3, "marginTop", "height", "marginLeft", "width", 4, "ngFor", "ngForOf"], ["class", "cal-hour", 3, "minWidth", 4, "ngFor", "ngForOf"], [3, "event", "customTemplate", "eventClicked"], [1, "cal-event-container"], ["event", ""], [3, "dayEvent", "tooltipPosition", "customTemplate", "eventClicked"], [1, "cal-hour"], [3, "segment", "locale", "customTemplate", "click", 4, "ngFor", "ngForOf"], [3, "segment", "locale", "customTemplate", "click"]], template: function NovoCalendarDayViewElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, NovoCalendarDayViewElement_novo_calendar_all_day_event_2_Template, 1, 2, "novo-calendar-all-day-event", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, NovoCalendarDayViewElement_div_5_Template, 3, 11, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, NovoCalendarDayViewElement_div_6_Template, 2, 3, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.view.allDayEvents);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.view == null ? null : ctx.view.events);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.hours);
    } }, directives: [i1.NgForOf, i2.NovoCalendarAllDayEventElement, i3.NovoCalendarDayEventElement, i4.NovoCalendarHourSegmentElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarDayViewElement, [{
        type: Component,
        args: [{
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
  `,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { viewDate: [{
            type: Input
        }], events: [{
            type: Input
        }], hourSegments: [{
            type: Input
        }], dayStartHour: [{
            type: Input
        }], dayStartMinute: [{
            type: Input
        }], dayEndHour: [{
            type: Input
        }], dayEndMinute: [{
            type: Input
        }], eventWidth: [{
            type: Input
        }], refresh: [{
            type: Input
        }], locale: [{
            type: Input
        }], hourSegmentModifier: [{
            type: Input
        }], eventSnapSize: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], hourSegmentTemplate: [{
            type: Input
        }], allDayEventTemplate: [{
            type: Input
        }], eventTemplate: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }], hourSegmentClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlWaWV3LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2RheS9DYWxlbmRhckRheVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWdDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEosT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUF1RSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7SUEwQjVKLHNEQUs4QjtJQUQ1QixrUUFBZ0IsNkNBQWlDLElBQUM7SUFDcEQsaUJBQThCOzs7O0lBSDVCLGdDQUFlLDhDQUFBOzs7O0lBTWIsaUNBUUU7SUFBQSxtREFLMEI7SUFEeEIsNk1BQWdCLGdDQUF5QixJQUFDO0lBQzVDLGlCQUEwQjtJQUM1QixpQkFBTTs7OztJQVZKLG1EQUFtQyxvQ0FBQSw0Q0FBQSxzQ0FBQTtJQUtqQyxlQUFxQjtJQUFyQixzQ0FBcUIsMkNBQUEsd0NBQUE7Ozs7SUFRekIsMERBTWlDO0lBRC9CLHNRQUFTLDJEQUE2QyxJQUFDO0lBQ3pELGlCQUFpQzs7OztJQUovQixxQ0FBbUIsMEJBQUEsK0NBQUE7OztJQUh2QiwrQkFDRTtJQUFBLHdJQU1BO0lBQ0YsaUJBQU07Ozs7SUFSMkMsd0ZBQXNDO0lBRW5GLGVBQXFDO0lBQXJDLDJDQUFxQzs7QUFsRGpEOztHQUVHO0FBQ0gsTUFBTSxjQUFjLEdBQVcsRUFBRSxDQUFDO0FBRWxDOztHQUVHO0FBQ0gsTUFBTSxlQUFlLEdBQVcsRUFBRSxDQUFDO0FBRW5DOzs7Ozs7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cUM7UUFjbkIsZUFBMEI7UUFBMUIsbUNBQTBCOztrREFhM0MsMEJBQTBCO2NBekN0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNUO2FBQ0Y7O3NCQStKOEMsTUFBTTt1QkFBQyxTQUFTO3dCQXpKN0QsUUFBUTtrQkFEUCxLQUFLO1lBT04sTUFBTTtrQkFETCxLQUFLO1lBT04sWUFBWTtrQkFEWCxLQUFLO1lBT04sWUFBWTtrQkFEWCxLQUFLO1lBT04sY0FBYztrQkFEYixLQUFLO1lBT04sVUFBVTtrQkFEVCxLQUFLO1lBT04sWUFBWTtrQkFEWCxLQUFLO1lBT04sVUFBVTtrQkFEVCxLQUFLO1lBT04sT0FBTztrQkFETixLQUFLO1lBT04sTUFBTTtrQkFETCxLQUFLO1lBUU4sbUJBQW1CO2tCQURsQixLQUFLO1lBT04sYUFBYTtrQkFEWixLQUFLO1lBT04sZUFBZTtrQkFEZCxLQUFLO1lBT04sbUJBQW1CO2tCQURsQixLQUFLO1lBT04sbUJBQW1CO2tCQURsQixLQUFLO1lBT04sYUFBYTtrQkFEWixLQUFLO1lBT04sWUFBWTtrQkFEWCxNQUFNO1lBT1Asa0JBQWtCO2tCQURqQixNQUFNO1lBT1AsaUJBQWlCO2tCQURoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBMT0NBTEVfSUQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCwgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50LCBEYXlWaWV3LCBEYXlWaWV3SG91ciwgZ2V0RGF5VmlldywgZ2V0RGF5Vmlld0hvdXJHcmlkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBTRUdNRU5UX0hFSUdIVDogbnVtYmVyID0gMzA7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBNSU5VVEVTX0lOX0hPVVI6IG51bWJlciA9IDYwO1xuXG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiBkYXkuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogJmx0O25vdm8tY2FsZW5kYXItZGF5XG4gKiAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAqICBbZXZlbnRzXT1cImV2ZW50c1wiJmd0O1xuICogJmx0Oy9ub3ZvLWNhbGVuZGFyLWRheSZndDtcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRheScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbC1kYXktdmlld1wiICNkYXlWaWV3Q29udGFpbmVyPlxuICAgICAgPG5vdm8tY2FsZW5kYXItYWxsLWRheS1ldmVudFxuICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2Ygdmlldy5hbGxEYXlFdmVudHNcIlxuICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiYWxsRGF5RXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgIChldmVudENsaWNrZWQpPVwiZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OiBldmVudH0pXCI+XG4gICAgICA8L25vdm8tY2FsZW5kYXItYWxsLWRheS1ldmVudD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtaG91ci1yb3dzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnRzXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgI2V2ZW50XG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5RXZlbnQgb2Ygdmlldz8uZXZlbnRzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LWNvbnRhaW5lclwiXG4gICAgICAgICAgICBbc3R5bGUubWFyZ2luVG9wLnB4XT1cImRheUV2ZW50LnRvcFwiXG4gICAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImRheUV2ZW50LmhlaWdodFwiXG4gICAgICAgICAgICBbc3R5bGUubWFyZ2luTGVmdC5weF09XCJkYXlFdmVudC5sZWZ0ICsgNzBcIlxuICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImRheUV2ZW50LndpZHRoIC0gMVwiPlxuICAgICAgICAgICAgPG5vdm8tY2FsZW5kYXItZGF5LWV2ZW50XG4gICAgICAgICAgICAgIFtkYXlFdmVudF09XCJkYXlFdmVudFwiXG4gICAgICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KCRldmVudClcIj5cbiAgICAgICAgICAgIDwvbm92by1jYWxlbmRhci1kYXktZXZlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWhvdXJcIiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3Vyc1wiIFtzdHlsZS5taW5XaWR0aC5weF09XCJ2aWV3Py53aWR0aCArIDcwXCI+XG4gICAgICAgICAgPG5vdm8tY2FsZW5kYXItZGF5LWhvdXItc2VnbWVudFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IHNlZ21lbnQgb2YgaG91ci5zZWdtZW50c1wiXG4gICAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJob3VyU2VnbWVudENsaWNrZWQuZW1pdCh7ZGF0ZTogc2VnbWVudC5kYXRlfSlcIj5cbiAgICAgICAgICA8L25vdm8tY2FsZW5kYXItZGF5LWhvdXItc2VnbWVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgdmlld0RhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IG9uIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaW4gYW4gaG91ci4gTXVzdCBiZSA8PSA2XG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudHM6IG51bWJlciA9IDI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgc3RhcnQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0SG91cjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0TWludXRlOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IGVuZCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kSG91cjogbnVtYmVyID0gMjM7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kTWludXRlOiBudW1iZXIgPSA1OTtcblxuICAvKipcbiAgICogVGhlIHdpZHRoIGluIHBpeGVscyBvZiBlYWNoIGV2ZW50IG9uIHRoZSB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudFdpZHRoOiBudW1iZXIgPSAxNTA7XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCB3aGVuIGVtaXR0ZWQgb24gd2lsbCByZS1yZW5kZXIgdGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgcmVmcmVzaDogU3ViamVjdDxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIHVzZWQgdG8gZm9ybWF0IGRhdGVzXG4gICAqL1xuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBlYWNoIGhvdXIgc2VnbWVudCBpcyBjYWxsZWQuIFRoZSBmaXJzdCBhcmd1bWVudCB3aWxsIGNvbnRhaW4gdGhlIGhvdXIgc2VnbWVudC5cbiAgICogSWYgeW91IGFkZCB0aGUgYGNzc0NsYXNzYCBwcm9wZXJ0eSB0byB0aGUgc2VnbWVudCBpdCB3aWxsIGFkZCB0aGF0IGNsYXNzIHRvIHRoZSBob3VyIHNlZ21lbnQgaW4gdGhlIHRlbXBsYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudE1vZGlmaWVyOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogVGhlIGdyaWQgc2l6ZSB0byBzbmFwIHJlc2l6aW5nIGFuZCBkcmFnZ2luZyBvZiBldmVudHMgdG9cbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50U25hcFNpemU6IG51bWJlciA9IDMwO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZyA9ICd0b3AnO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaG91ciBzZWdtZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIGFsbCBkYXkgZXZlbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBhbGxEYXlFdmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIGRheSB2aWV3IGV2ZW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gaG91ciBzZWdtZW50IGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBob3VyU2VnbWVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCBpcyByZXNpemVkIG9yIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudFRpbWVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaG91cnM6IERheVZpZXdIb3VyW10gPSBbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmlldzogRGF5VmlldztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgd2lkdGg6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY3VycmVudFJlc2l6ZToge1xuICAgIG9yaWdpbmFsVG9wOiBudW1iZXI7XG4gICAgb3JpZ2luYWxIZWlnaHQ6IG51bWJlcjtcbiAgICBlZGdlOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlRHJhZzogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlUmVzaXplOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWxsKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5kYXlTdGFydEhvdXIgfHwgY2hhbmdlcy5kYXlTdGFydE1pbnV0ZSB8fCBjaGFuZ2VzLmRheUVuZEhvdXIgfHwgY2hhbmdlcy5kYXlFbmRNaW51dGUpIHtcbiAgICAgIHRoaXMucmVmcmVzaEhvdXJHcmlkKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy52aWV3RGF0ZSB8fFxuICAgICAgY2hhbmdlcy5ldmVudHMgfHxcbiAgICAgIGNoYW5nZXMuZGF5U3RhcnRIb3VyIHx8XG4gICAgICBjaGFuZ2VzLmRheVN0YXJ0TWludXRlIHx8XG4gICAgICBjaGFuZ2VzLmRheUVuZEhvdXIgfHxcbiAgICAgIGNoYW5nZXMuZGF5RW5kTWludXRlIHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50V2lkdGhcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIGV2ZW50RHJvcHBlZChkcm9wRXZlbnQ6IHtkcm9wRGF0YT86IHtldmVudD86IENhbGVuZGFyRXZlbnR9fSwgc2VnbWVudDogRGF5Vmlld0hvdXJTZWdtZW50KTogdm9pZCB7XG4gICAgICBpZiAoZHJvcEV2ZW50LmRyb3BEYXRhICYmIGRyb3BFdmVudC5kcm9wRGF0YS5ldmVudCkge1xuICAgICAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe2V2ZW50OiBkcm9wRXZlbnQuZHJvcERhdGEuZXZlbnQsIG5ld1N0YXJ0OiBzZWdtZW50LmRhdGV9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemVTdGFydGVkKGV2ZW50OiBEYXlWaWV3RXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCwgZGF5Vmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3VycmVudFJlc2l6ZSA9IHtcbiAgICAgICAgb3JpZ2luYWxUb3A6IGV2ZW50LnRvcCxcbiAgICAgICAgb3JpZ2luYWxIZWlnaHQ6IGV2ZW50LmhlaWdodCxcbiAgICAgICAgZWRnZTogdHlwZW9mIHJlc2l6ZUV2ZW50LmVkZ2VzLnRvcCAhPT0gJ3VuZGVmaW5lZCcgPyAndG9wJyA6ICdib3R0b20nXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzaXplSGVscGVyOiBDYWxlbmRhclJlc2l6ZUhlbHBlciA9IG5ldyBDYWxlbmRhclJlc2l6ZUhlbHBlcihkYXlWaWV3Q29udGFpbmVyKTtcbiAgICAgIHRoaXMudmFsaWRhdGVSZXNpemUgPSAoe3JlY3RhbmdsZX0pID0+IHJlc2l6ZUhlbHBlci52YWxpZGF0ZVJlc2l6ZSh7cmVjdGFuZ2xlfSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcmVzaXppbmcoZXZlbnQ6IERheVZpZXdFdmVudCwgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAocmVzaXplRXZlbnQuZWRnZXMudG9wKSB7XG4gICAgICAgIGV2ZW50LnRvcCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFRvcCArICtyZXNpemVFdmVudC5lZGdlcy50b3A7XG4gICAgICAgIGV2ZW50LmhlaWdodCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodCAtICtyZXNpemVFdmVudC5lZGdlcy50b3A7XG4gICAgICB9IGVsc2UgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLmJvdHRvbSkge1xuICAgICAgICBldmVudC5oZWlnaHQgPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxIZWlnaHQgKyArcmVzaXplRXZlbnQuZWRnZXMuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUVuZGVkKGRheUV2ZW50OiBEYXlWaWV3RXZlbnQpOiB2b2lkIHtcblxuICAgICAgbGV0IHBpeGVsc01vdmVkOiBudW1iZXI7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UmVzaXplLmVkZ2UgPT09ICd0b3AnKSB7XG4gICAgICAgIHBpeGVsc01vdmVkID0gKGRheUV2ZW50LnRvcCAtIHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFRvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwaXhlbHNNb3ZlZCA9IChkYXlFdmVudC5oZWlnaHQgLSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBkYXlFdmVudC50b3AgPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxUb3A7XG4gICAgICBkYXlFdmVudC5oZWlnaHQgPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHBpeGVsQW1vdW50SW5NaW51dGVzOiBudW1iZXIgPSBNSU5VVEVTX0lOX0hPVVIgLyAodGhpcy5ob3VyU2VnbWVudHMgKiBTRUdNRU5UX0hFSUdIVCk7XG4gICAgICBjb25zdCBtaW51dGVzTW92ZWQ6IG51bWJlciA9IHBpeGVsc01vdmVkICogcGl4ZWxBbW91bnRJbk1pbnV0ZXM7XG4gICAgICBsZXQgbmV3U3RhcnQ6IERhdGUgPSBkYXlFdmVudC5ldmVudC5zdGFydDtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGUgPSBkYXlFdmVudC5ldmVudC5lbmQ7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UmVzaXplLmVkZ2UgPT09ICd0b3AnKSB7XG4gICAgICAgIG5ld1N0YXJ0ID0gYWRkTWludXRlcyhuZXdTdGFydCwgbWludXRlc01vdmVkKTtcbiAgICAgIH0gZWxzZSBpZiAobmV3RW5kKSB7XG4gICAgICAgIG5ld0VuZCA9IGFkZE1pbnV0ZXMobmV3RW5kLCBtaW51dGVzTW92ZWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe25ld1N0YXJ0LCBuZXdFbmQsIGV2ZW50OiBkYXlFdmVudC5ldmVudH0pO1xuICAgICAgdGhpcy5jdXJyZW50UmVzaXplID0gbnVsbDtcblxuICAgIH1cblxuICAgIGRyYWdTdGFydChldmVudDogSFRNTEVsZW1lbnQsIGRheVZpZXdDb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBjb25zdCBkcmFnSGVscGVyOiBDYWxlbmRhckRyYWdIZWxwZXIgPSBuZXcgQ2FsZW5kYXJEcmFnSGVscGVyKGRheVZpZXdDb250YWluZXIsIGV2ZW50KTtcbiAgICAgIHRoaXMudmFsaWRhdGVEcmFnID0gKHt4LCB5fSkgPT4gIXRoaXMuY3VycmVudFJlc2l6ZSAmJiBkcmFnSGVscGVyLnZhbGlkYXRlRHJhZyh7eCwgeX0pO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGV2ZW50RHJhZ2dlZChkYXlFdmVudDogRGF5Vmlld0V2ZW50LCBkcmFnZ2VkSW5QaXhlbHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgY29uc3QgcGl4ZWxBbW91bnRJbk1pbnV0ZXM6IG51bWJlciA9IE1JTlVURVNfSU5fSE9VUiAvICh0aGlzLmhvdXJTZWdtZW50cyAqIFNFR01FTlRfSEVJR0hUKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZDogbnVtYmVyID0gZHJhZ2dlZEluUGl4ZWxzICogcGl4ZWxBbW91bnRJbk1pbnV0ZXM7XG4gICAgICBjb25zdCBuZXdTdGFydDogRGF0ZSA9IGFkZE1pbnV0ZXMoZGF5RXZlbnQuZXZlbnQuc3RhcnQsIG1pbnV0ZXNNb3ZlZCk7XG4gICAgICBsZXQgbmV3RW5kOiBEYXRlO1xuICAgICAgaWYgKGRheUV2ZW50LmV2ZW50LmVuZCkge1xuICAgICAgICBuZXdFbmQgPSBhZGRNaW51dGVzKGRheUV2ZW50LmV2ZW50LmVuZCwgbWludXRlc01vdmVkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7bmV3U3RhcnQsIG5ld0VuZCwgZXZlbnQ6IGRheUV2ZW50LmV2ZW50fSk7XG4gICAgfVxuICAgICovXG5cbiAgcHJpdmF0ZSByZWZyZXNoSG91ckdyaWQoKTogdm9pZCB7XG4gICAgdGhpcy5ob3VycyA9IGdldERheVZpZXdIb3VyR3JpZCh7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIGhvdXJTZWdtZW50czogdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICBkYXlTdGFydDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheVN0YXJ0SG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheVN0YXJ0TWludXRlLFxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmICh0aGlzLmhvdXJTZWdtZW50TW9kaWZpZXIpIHtcbiAgICAgIHRoaXMuaG91cnMuZm9yRWFjaCgoaG91cikgPT4ge1xuICAgICAgICBob3VyLnNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQpID0+IHRoaXMuaG91clNlZ21lbnRNb2RpZmllcihzZWdtZW50KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMudmlldyA9IGdldERheVZpZXcoe1xuICAgICAgZXZlbnRzOiB0aGlzLmV2ZW50cyxcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGUsXG4gICAgICB9LFxuICAgICAgZGF5RW5kOiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5RW5kSG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheUVuZE1pbnV0ZSxcbiAgICAgIH0sXG4gICAgICBldmVudFdpZHRoOiB0aGlzLmV2ZW50V2lkdGgsXG4gICAgICBzZWdtZW50SGVpZ2h0OiBTRUdNRU5UX0hFSUdIVCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hIb3VyR3JpZCgpO1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxufVxuIl19