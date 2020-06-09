import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { getDayViewHourGrid, getWeekView, getWeekViewHeader, } from '../../../utils/calendar-utils/CalendarUtils';
import * as i0 from "@angular/core";
import * as i1 from "./CalendarWeekHeader";
import * as i2 from "@angular/common";
import * as i3 from "./CalendarWeekEvent";
import * as i4 from "../day/CalendarHourSegment";
function NovoCalendarWeekViewElement_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7, 8);
    i0.ɵɵelementStart(2, "novo-calendar-week-event", 9);
    i0.ɵɵlistener("eventClicked", function NovoCalendarWeekViewElement_div_3_div_2_Template_novo_calendar_week_event_eventClicked_2_listener($event) { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.eventClicked.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var weekEvent_r6 = ctx.$implicit;
    var ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", 100 / ctx_r5.days.length * weekEvent_r6.span + "%")("margin-top", weekEvent_r6.top, "px")("height", weekEvent_r6.height, "px")("margin-left", 100 / ctx_r5.days.length * weekEvent_r6.offset + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("weekEvent", weekEvent_r6)("tooltipPosition", ctx_r5.tooltipPosition)("customTemplate", ctx_r5.eventTemplate);
} }
function NovoCalendarWeekViewElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 5);
    i0.ɵɵtemplate(2, NovoCalendarWeekViewElement_div_3_div_2_Template, 3, 11, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var eventRow_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", eventRow_r3.row);
} }
function NovoCalendarWeekViewElement_div_4_novo_calendar_day_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-calendar-day-hour-segment", 12);
    i0.ɵɵlistener("click", function NovoCalendarWeekViewElement_div_4_novo_calendar_day_hour_segment_1_Template_novo_calendar_day_hour_segment_click_0_listener() { i0.ɵɵrestoreView(_r14); var segment_r12 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.hourSegmentClicked.emit({ date: segment_r12.date }); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var segment_r12 = ctx.$implicit;
    var ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("segment", segment_r12)("locale", ctx_r11.locale)("customTemplate", ctx_r11.hourSegmentTemplate);
} }
function NovoCalendarWeekViewElement_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, NovoCalendarWeekViewElement_div_4_novo_calendar_day_hour_segment_1_Template, 1, 3, "novo-calendar-day-hour-segment", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var hour_r10 = ctx.$implicit;
    i0.ɵɵstyleProp("min-width", 70, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", hour_r10.segments);
} }
/**
 * @hidden
 */
var SEGMENT_HEIGHT = 30;
/**
 * @hidden
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
    NovoCalendarWeekViewElement.prototype.ngOnInit = function () {
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
    NovoCalendarWeekViewElement.prototype.ngOnChanges = function (changes) {
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
    NovoCalendarWeekViewElement.prototype.ngOnDestroy = function () {
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
    NovoCalendarWeekViewElement.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    NovoCalendarWeekViewElement.prototype.refreshHeader = function () {
        this.days = getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
        });
    };
    NovoCalendarWeekViewElement.prototype.refreshBody = function () {
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
    NovoCalendarWeekViewElement.prototype.refreshHourGrid = function () {
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
    NovoCalendarWeekViewElement.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshHourGrid();
        this.refreshBody();
    };
    NovoCalendarWeekViewElement.ɵfac = function NovoCalendarWeekViewElement_Factory(t) { return new (t || NovoCalendarWeekViewElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(LOCALE_ID)); };
    NovoCalendarWeekViewElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarWeekViewElement, selectors: [["novo-calendar-week"]], inputs: { viewDate: "viewDate", events: "events", excludeDays: "excludeDays", refresh: "refresh", locale: "locale", tooltipPosition: "tooltipPosition", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", eventTemplate: "eventTemplate", precision: "precision", hourSegments: "hourSegments", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegmentTemplate: "hourSegmentTemplate" }, outputs: { hourSegmentClicked: "hourSegmentClicked", dayClicked: "dayClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [[1, "cal-week-view"], ["weekViewContainer", ""], [3, "days", "locale", "customTemplate", "dayClicked"], [4, "ngFor", "ngForOf"], ["class", "cal-hour", 3, "minWidth", 4, "ngFor", "ngForOf"], ["eventRowContainer", ""], ["class", "cal-event-container", 3, "width", "marginTop", "height", "marginLeft", 4, "ngFor", "ngForOf"], [1, "cal-event-container"], ["event", ""], [3, "weekEvent", "tooltipPosition", "customTemplate", "eventClicked"], [1, "cal-hour"], [3, "segment", "locale", "customTemplate", "click", 4, "ngFor", "ngForOf"], [3, "segment", "locale", "customTemplate", "click"]], template: function NovoCalendarWeekViewElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelementStart(2, "novo-calendar-week-header", 2);
            i0.ɵɵlistener("dayClicked", function NovoCalendarWeekViewElement_Template_novo_calendar_week_header_dayClicked_2_listener($event) { return ctx.dayClicked.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, NovoCalendarWeekViewElement_div_3_Template, 3, 1, "div", 3);
            i0.ɵɵtemplate(4, NovoCalendarWeekViewElement_div_4_Template, 2, 3, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.eventRows);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.hours);
        } }, directives: [i1.NovoCalendarWeekHeaderElement, i2.NgForOf, i3.NovoCalendarWeekEventElement, i4.NovoCalendarHourSegmentElement], encapsulation: 2 });
    return NovoCalendarWeekViewElement;
}());
export { NovoCalendarWeekViewElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarWeekViewElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-week',
                template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <novo-calendar-week-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayClicked)=\"dayClicked.emit($event)\">\n      </novo-calendar-week-header>\n      <div *ngFor=\"let eventRow of eventRows\" #eventRowContainer>\n        <div\n          class=\"cal-event-container\"\n          #event\n          *ngFor=\"let weekEvent of eventRow.row\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginTop.px]=\"weekEvent.top\"\n          [style.height.px]=\"weekEvent.height\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\">\n          <novo-calendar-week-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPosition]=\"tooltipPosition\"\n            [customTemplate]=\"eventTemplate\"\n            (eventClicked)=\"eventClicked.emit($event)\">\n          </novo-calendar-week-event>\n        </div>\n      </div>\n      <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"70\">\n        <novo-calendar-day-hour-segment\n          *ngFor=\"let segment of hour.segments\"\n          [segment]=\"segment\"\n          [locale]=\"locale\"\n          [customTemplate]=\"hourSegmentTemplate\"\n          (click)=\"hourSegmentClicked.emit({date: segment.date})\">\n        </novo-calendar-day-hour-segment>\n      </div>\n    </div>\n  ",
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
        }], eventTemplate: [{
            type: Input
        }], precision: [{
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
        }], hourSegmentTemplate: [{
            type: Input
        }], hourSegmentClicked: [{
            type: Output
        }], dayClicked: [{
            type: Output
        }], eventClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrVmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci93ZWVrL0NhbGVuZGFyV2Vla1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUlULE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUlMLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsaUJBQWlCLEdBR2xCLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7O0lBZ0M3QyxpQ0FRRTtJQUFBLG1EQUsyQjtJQUR6QixtTkFBZ0IsZ0NBQXlCLElBQUM7SUFDNUMsaUJBQTJCO0lBQzdCLGlCQUFNOzs7O0lBVkosMkVBQTRELHNDQUFBLHFDQUFBLHFFQUFBO0lBSzFELGVBQXVCO0lBQXZCLHdDQUF1QiwyQ0FBQSx3Q0FBQTs7O0lBVjdCLG9DQUNFO0lBQUEsbUZBUUU7SUFPSixpQkFBTTs7O0lBWkYsZUFBc0M7SUFBdEMseUNBQXNDOzs7O0lBY3hDLDBEQU1pQztJQUQvQixtUUFBUywyREFBNkMsSUFBQztJQUN6RCxpQkFBaUM7Ozs7SUFKL0IscUNBQW1CLDBCQUFBLCtDQUFBOzs7SUFIdkIsK0JBQ0U7SUFBQSx5SUFNQTtJQUNGLGlCQUFNOzs7SUFSMkMscUNBQXdCO0lBRXJFLGVBQXFDO0lBQXJDLDJDQUFxQzs7QUFoRC9DOztHQUVHO0FBQ0gsSUFBTSxjQUFjLEdBQVcsRUFBRSxDQUFDO0FBRWxDOztHQUVHO0FBQ0gsSUFBTSxlQUFlLEdBQVcsRUFBRSxDQUFDO0FBQ25DOzs7Ozs7Ozs7R0FTRztBQUNIO0lBbU1FOztPQUVHO0lBQ0gscUNBQW9CLEdBQXNCLEVBQXFCLE1B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LENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzswR0FyVVUsMkJBQTJCLG1FQStKYyxTQUFTO29FQS9KbEQsMkJBQTJCO1lBcENwQyxpQ0FDRTtZQUFBLG9EQUs0QjtZQUQxQiwySUFBYywyQkFBdUIsSUFBQztZQUN4QyxpQkFBNEI7WUFDNUIsNEVBQ0U7WUFnQkYsNEVBQ0U7WUFRSixpQkFBTTs7WUEvQkYsZUFBYTtZQUFiLCtCQUFhLHNCQUFBLHNDQUFBO1lBS1YsZUFBa0M7WUFBbEMsdUNBQWtDO1lBaUJqQixlQUEwQjtZQUExQixtQ0FBMEI7O3NDQXZFdEQ7Q0F5WkMsQUE3V0QsSUE2V0M7U0F0VVksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0F2Q3ZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsNDdDQW1DVDthQUNGOztzQkFnSzhDLE1BQU07dUJBQUMsU0FBUzs7a0JBM0o1RCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFPTCxLQUFLOztrQkFLTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFNTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxNQUFNOztrQkFLTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBMT0NBTEVfSUQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQsXG4gIERheVZpZXdIb3VyLFxuICBnZXREYXlWaWV3SG91ckdyaWQsXG4gIGdldFdlZWtWaWV3LFxuICBnZXRXZWVrVmlld0hlYWRlcixcbiAgV2Vla0RheSxcbiAgV2Vla1ZpZXdFdmVudFJvdyxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBTRUdNRU5UX0hFSUdIVDogbnVtYmVyID0gMzA7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBNSU5VVEVTX0lOX0hPVVI6IG51bWJlciA9IDYwO1xuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gd2Vlay4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAmbHQ7bm92by1jYWxlbmRhci13ZWVrXG4gKiAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAqICBbZXZlbnRzXT1cImV2ZW50c1wiJmd0O1xuICogJmx0Oy9ub3ZvLWNhbGVuZGFyLXdlZWsmZ3Q7XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci13ZWVrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLXdlZWstdmlld1wiICN3ZWVrVmlld0NvbnRhaW5lcj5cbiAgICAgIDxub3ZvLWNhbGVuZGFyLXdlZWstaGVhZGVyXG4gICAgICAgIFtkYXlzXT1cImRheXNcIlxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJoZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgIChkYXlDbGlja2VkKT1cImRheUNsaWNrZWQuZW1pdCgkZXZlbnQpXCI+XG4gICAgICA8L25vdm8tY2FsZW5kYXItd2Vlay1oZWFkZXI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBldmVudFJvdyBvZiBldmVudFJvd3NcIiAjZXZlbnRSb3dDb250YWluZXI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNhbC1ldmVudC1jb250YWluZXJcIlxuICAgICAgICAgICNldmVudFxuICAgICAgICAgICpuZ0Zvcj1cImxldCB3ZWVrRXZlbnQgb2YgZXZlbnRSb3cucm93XCJcbiAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiKCgxMDAgLyBkYXlzLmxlbmd0aCkgKiB3ZWVrRXZlbnQuc3BhbikgKyAnJSdcIlxuICAgICAgICAgIFtzdHlsZS5tYXJnaW5Ub3AucHhdPVwid2Vla0V2ZW50LnRvcFwiXG4gICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJ3ZWVrRXZlbnQuaGVpZ2h0XCJcbiAgICAgICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCIoKDEwMCAvIGRheXMubGVuZ3RoKSAqIHdlZWtFdmVudC5vZmZzZXQpICsgJyUnXCI+XG4gICAgICAgICAgPG5vdm8tY2FsZW5kYXItd2Vlay1ldmVudFxuICAgICAgICAgICAgW3dlZWtFdmVudF09XCJ3ZWVrRXZlbnRcIlxuICAgICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGVtcGxhdGVcIlxuICAgICAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCgkZXZlbnQpXCI+XG4gICAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLXdlZWstZXZlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsLWhvdXJcIiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3Vyc1wiIFtzdHlsZS5taW5XaWR0aC5weF09XCI3MFwiPlxuICAgICAgICA8bm92by1jYWxlbmRhci1kYXktaG91ci1zZWdtZW50XG4gICAgICAgICAgKm5nRm9yPVwibGV0IHNlZ21lbnQgb2YgaG91ci5zZWdtZW50c1wiXG4gICAgICAgICAgW3NlZ21lbnRdPVwic2VnbWVudFwiXG4gICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgICAgICAoY2xpY2spPVwiaG91clNlZ21lbnRDbGlja2VkLmVtaXQoe2RhdGU6IHNlZ21lbnQuZGF0ZX0pXCI+XG4gICAgICAgIDwvbm92by1jYWxlbmRhci1kYXktaG91ci1zZWdtZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhcldlZWtWaWV3RWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IHdpbGwgYmUgaGlkZGVuIG9uIHRoZSB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZyA9ICdib3R0b20nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3RhcnQgbnVtYmVyIG9mIHRoZSB3ZWVrXG4gICAqL1xuICBASW5wdXQoKVxuICB3ZWVrU3RhcnRzT246IG51bWJlcjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhlYWRlclxuICAgKi9cbiAgQElucHV0KClcbiAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3Igd2VlayB2aWV3IGV2ZW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogVGhlIHByZWNpc2lvbiB0byBkaXNwbGF5IGV2ZW50cy5cbiAgICogYGRheXNgIHdpbGwgcm91bmQgZXZlbnQgc3RhcnQgYW5kIGVuZCBkYXRlcyB0byB0aGUgbmVhcmVzdCBkYXkgYW5kIGBtaW51dGVzYCB3aWxsIG5vdCBkbyB0aGlzIHJvdW5kaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBwcmVjaXNpb246ICdkYXlzJyB8ICdtaW51dGVzJyA9ICdkYXlzJztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaW4gYW4gaG91ci4gTXVzdCBiZSA8PSA2XG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudHM6IG51bWJlciA9IDI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgc3RhcnQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0SG91cjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0TWludXRlOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IGVuZCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kSG91cjogbnVtYmVyID0gMjM7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kTWludXRlOiBudW1iZXIgPSA1OTtcbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBob3VyIHNlZ21lbnQgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGhvdXJTZWdtZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGhlYWRlciB3ZWVrIGRheSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZGF5Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCBpcyByZXNpemVkIG9yIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudFRpbWVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZGF5czogV2Vla0RheVtdO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaG91cnM6IERheVZpZXdIb3VyW10gPSBbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXZlbnRSb3dzOiBXZWVrVmlld0V2ZW50Um93W10gPSBbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjdXJyZW50UmVzaXplOiB7XG4gICAgb3JpZ2luYWxPZmZzZXQ6IG51bWJlcjtcbiAgICBvcmlnaW5hbFNwYW46IG51bWJlcjtcbiAgICBlZGdlOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlRHJhZzogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlUmVzaXplOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWxsKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5ldmVudHMgfHwgY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2R5KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5kYXlTdGFydEhvdXIgfHwgY2hhbmdlcy5kYXlTdGFydE1pbnV0ZSB8fCBjaGFuZ2VzLmRheUVuZEhvdXIgfHwgY2hhbmdlcy5kYXlFbmRNaW51dGUpIHtcbiAgICAgIHRoaXMucmVmcmVzaEhvdXJHcmlkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgcmVzaXplU3RhcnRlZCh3ZWVrVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCwgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50KTogdm9pZCB7XG4gICAgICB0aGlzLmN1cnJlbnRSZXNpemUgPSB7XG4gICAgICAgIG9yaWdpbmFsT2Zmc2V0OiB3ZWVrRXZlbnQub2Zmc2V0LFxuICAgICAgICBvcmlnaW5hbFNwYW46IHdlZWtFdmVudC5zcGFuLFxuICAgICAgICBlZGdlOiB0eXBlb2YgcmVzaXplRXZlbnQuZWRnZXMubGVmdCAhPT0gJ3VuZGVmaW5lZCcgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzaXplSGVscGVyOiBDYWxlbmRhclJlc2l6ZUhlbHBlciA9IG5ldyBDYWxlbmRhclJlc2l6ZUhlbHBlcih3ZWVrVmlld0NvbnRhaW5lciwgdGhpcy5nZXREYXlDb2x1bW5XaWR0aCh3ZWVrVmlld0NvbnRhaW5lcikpO1xuICAgICAgdGhpcy52YWxpZGF0ZVJlc2l6ZSA9ICh7cmVjdGFuZ2xlfSkgPT4gcmVzaXplSGVscGVyLnZhbGlkYXRlUmVzaXplKHtyZWN0YW5nbGV9KTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICByZXNpemluZyh3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCwgZGF5V2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQpIHtcbiAgICAgICAgY29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5yb3VuZCgrcmVzaXplRXZlbnQuZWRnZXMubGVmdCAvIGRheVdpZHRoKTtcbiAgICAgICAgd2Vla0V2ZW50Lm9mZnNldCA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldCArIGRpZmY7XG4gICAgICAgIHdlZWtFdmVudC5zcGFuID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbiAtIGRpZmY7XG4gICAgICB9IGVsc2UgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLnJpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGgucm91bmQoK3Jlc2l6ZUV2ZW50LmVkZ2VzLnJpZ2h0IC8gZGF5V2lkdGgpO1xuICAgICAgICB3ZWVrRXZlbnQuc3BhbiA9IHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW4gKyBkaWZmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUVuZGVkKHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCk6IHZvaWQge1xuXG4gICAgICBsZXQgZGF5c0RpZmY6IG51bWJlcjtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIGRheXNEaWZmID0gd2Vla0V2ZW50Lm9mZnNldCAtIHRoaXMuY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRheXNEaWZmID0gd2Vla0V2ZW50LnNwYW4gLSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuO1xuICAgICAgfVxuXG4gICAgICB3ZWVrRXZlbnQub2Zmc2V0ID0gdGhpcy5jdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0O1xuICAgICAgd2Vla0V2ZW50LnNwYW4gPSB0aGlzLmN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuO1xuXG4gICAgICBsZXQgbmV3U3RhcnQ6IERhdGUgPSB3ZWVrRXZlbnQuZXZlbnQuc3RhcnQ7XG4gICAgICBsZXQgbmV3RW5kOiBEYXRlID0gd2Vla0V2ZW50LmV2ZW50LmVuZDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIG5ld1N0YXJ0ID0gYWRkRGF5cyhuZXdTdGFydCwgZGF5c0RpZmYpO1xuICAgICAgfSBlbHNlIGlmIChuZXdFbmQpIHtcbiAgICAgICAgbmV3RW5kID0gYWRkRGF5cyhuZXdFbmQsIGRheXNEaWZmKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtuZXdTdGFydCwgbmV3RW5kLCBldmVudDogd2Vla0V2ZW50LmV2ZW50fSk7XG4gICAgICB0aGlzLmN1cnJlbnRSZXNpemUgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgZXZlbnREcmFnZ2VkKHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCwgZHJhZ2dlZEJ5UHg6IG51bWJlciwgZGF5V2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBjb25zdCBkYXlzRHJhZ2dlZDogbnVtYmVyID0gZHJhZ2dlZEJ5UHggLyBkYXlXaWR0aDtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0OiBEYXRlID0gYWRkRGF5cyh3ZWVrRXZlbnQuZXZlbnQuc3RhcnQsIGRheXNEcmFnZ2VkKTtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGU7XG4gICAgICBpZiAod2Vla0V2ZW50LmV2ZW50LmVuZCkge1xuICAgICAgICBuZXdFbmQgPSBhZGREYXlzKHdlZWtFdmVudC5ldmVudC5lbmQsIGRheXNEcmFnZ2VkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtuZXdTdGFydCwgbmV3RW5kLCBldmVudDogd2Vla0V2ZW50LmV2ZW50fSk7XG5cbiAgICB9XG5cbiAgICBkcmFnU3RhcnQod2Vla1ZpZXdDb250YWluZXI6IEhUTUxFbGVtZW50LCBldmVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGRyYWdIZWxwZXI6IENhbGVuZGFyRHJhZ0hlbHBlciA9IG5ldyBDYWxlbmRhckRyYWdIZWxwZXIod2Vla1ZpZXdDb250YWluZXIsIGV2ZW50KTtcbiAgICAgIHRoaXMudmFsaWRhdGVEcmFnID0gKHt4LCB5fSkgPT4gIXRoaXMuY3VycmVudFJlc2l6ZSAmJiBkcmFnSGVscGVyLnZhbGlkYXRlRHJhZyh7eCwgeX0pO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICAqL1xuXG4gIGdldERheUNvbHVtbldpZHRoKGV2ZW50Um93Q29udGFpbmVyOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZXZlbnRSb3dDb250YWluZXIub2Zmc2V0V2lkdGggLyB0aGlzLmRheXMubGVuZ3RoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEhlYWRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRheXMgPSBnZXRXZWVrVmlld0hlYWRlcih7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEJvZHkoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFJvd3MgPSBnZXRXZWVrVmlldyh7XG4gICAgICBldmVudHM6IHRoaXMuZXZlbnRzLFxuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgICBob3VyU2VnbWVudHM6IHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgc2VnbWVudEhlaWdodDogU0VHTUVOVF9IRUlHSFQsXG4gICAgICBkYXlTdGFydDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheVN0YXJ0SG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheVN0YXJ0TWludXRlLFxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGUsXG4gICAgICB9LFxuICAgICAgLy8gcHJlY2lzaW9uOiB0aGlzLnByZWNpc2lvblxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSG91ckdyaWQoKTogdm9pZCB7XG4gICAgdGhpcy5ob3VycyA9IGdldERheVZpZXdIb3VyR3JpZCh7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIGhvdXJTZWdtZW50czogdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICBkYXlTdGFydDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheVN0YXJ0SG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheVN0YXJ0TWludXRlLFxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIGlmICh0aGlzLmhvdXJTZWdtZW50TW9kaWZpZXIpIHtcbiAgICAvLyAgIHRoaXMuaG91cnMuZm9yRWFjaChob3VyID0+IHtcbiAgICAvLyAgICAgaG91ci5zZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4gdGhpcy5ob3VyU2VnbWVudE1vZGlmaWVyKHNlZ21lbnQpKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB0aGlzLnJlZnJlc2hIb3VyR3JpZCgpO1xuICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgfVxufVxuIl19