import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, MonthView, MonthViewDay, WeekDay } from '../../../utils/calendar-utils/CalendarUtils';
import * as i0 from "@angular/core";
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
export declare class NovoCalendarMonthViewElement implements OnChanges, OnInit, OnDestroy {
    private cdr;
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * An array of events to display on view
     */
    events: CalendarEvent[];
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */
    excludeDays: number[];
    /**
     * A function that will be called before each cell is rendered. The first argument will contain the calendar cell.
     * If you add the `cssClass` property to the cell it will add that class to the cell in the template
     */
    dayModifier: Function;
    /**
     * An observable that when emitted on will re-render the current view
     */
    refresh: Subject<any>;
    /**
     * The locale used to format dates
     */
    locale: string;
    /**
     * The placement of the event tooltip
     */
    tooltipPosition: string;
    /**
     * The start number of the week
     */
    weekStartsOn: number;
    /**
     * A custom template to use to replace the header
     */
    headerTemplate: TemplateRef<any>;
    /**
     * A custom template to use to replace the day cell
     */
    cellTemplate: TemplateRef<any>;
    /**
     * Called when the day cell is clicked
     */
    dayClicked: EventEmitter<{
        day: MonthViewDay;
    }>;
    /**
     * Called when the event title is clicked
     */
    eventClicked: EventEmitter<{
        day: any;
        event: CalendarEvent;
    }>;
    /**
     * Called when an event is dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent>;
    viewDateChange: EventEmitter<Date>;
    /**
     * @hidden
     */
    columnHeaders: WeekDay[];
    /**
     * @hidden
     */
    view: MonthView;
    /**
     * @hidden
     */
    refreshSubscription: Subscription;
    /**
     * @hidden
     */
    constructor(cdr: ChangeDetectorRef, locale: string);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    eventDropped(day: MonthViewDay, event: CalendarEvent): void;
    private refreshHeader;
    private refreshBody;
    refreshAll(): void;
    static ɵfac: i0.ɵɵFactoryDef<NovoCalendarMonthViewElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoCalendarMonthViewElement, "novo-calendar-month", never, { "viewDate": "viewDate"; "events": "events"; "excludeDays": "excludeDays"; "dayModifier": "dayModifier"; "refresh": "refresh"; "locale": "locale"; "tooltipPosition": "tooltipPosition"; "weekStartsOn": "weekStartsOn"; "headerTemplate": "headerTemplate"; "cellTemplate": "cellTemplate"; }, { "dayClicked": "dayClicked"; "eventClicked": "eventClicked"; "eventTimesChanged": "eventTimesChanged"; "viewDateChange": "viewDateChange"; }, never, never>;
}
