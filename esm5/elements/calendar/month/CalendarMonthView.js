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
var NovoCalendarMonthViewElement = /** @class */ (function () {
    /**
     * @hidden
     */
    function NovoCalendarMonthViewElement(cdr, locale) {
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
    /**
     * @hidden
     * @return {?}
     */
    NovoCalendarMonthViewElement.prototype.ngOnInit = /**
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
                _this.cdr.markForCheck();
            }));
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
    NovoCalendarMonthViewElement.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate || changes.excludeDays) {
            this.refreshHeader();
        }
        if (changes.viewDate || changes.events || changes.excludeDays) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    NovoCalendarMonthViewElement.prototype.ngOnDestroy = /**
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
     * @param {?} day
     * @param {?} event
     * @return {?}
     */
    NovoCalendarMonthViewElement.prototype.eventDropped = /**
     * @hidden
     * @param {?} day
     * @param {?} event
     * @return {?}
     */
    function (day, event) {
        /** @type {?} */
        var year = dateFns.getYear(day.date);
        /** @type {?} */
        var month = dateFns.getMonth(day.date);
        /** @type {?} */
        var date = dateFns.getDate(day.date);
        /** @type {?} */
        var newStart = dateFns.setYear(dateFns.setMonth(dateFns.setDate(event.start, date), month), year);
        /** @type {?} */
        var newEnd;
        if (event.end) {
            /** @type {?} */
            var secondsDiff = dateFns.differenceInSeconds(newStart, event.start);
            newEnd = dateFns.addSeconds(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd });
    };
    /**
     * @private
     * @return {?}
     */
    NovoCalendarMonthViewElement.prototype.refreshHeader = /**
     * @private
     * @return {?}
     */
    function () {
        this.columnHeaders = getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
        });
    };
    /**
     * @private
     * @return {?}
     */
    NovoCalendarMonthViewElement.prototype.refreshBody = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (day) { return _this.dayModifier(day); }));
        }
    };
    /**
     * @return {?}
     */
    NovoCalendarMonthViewElement.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshBody();
        this.viewDateChange.emit(this.viewDate);
    };
    NovoCalendarMonthViewElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-month',
                    template: "\n    <div class=\"calendar-month-view\">\n       <novo-calendar-month-header\n         [(viewDate)]=\"viewDate\"\n         [days]=\"columnHeaders\"\n         [locale]=\"locale\"\n         [customTemplate]=\"headerTemplate\"\n         (viewDateChange)=\"refreshAll()\">\n       </novo-calendar-month-header>\n      <div class=\"calendar-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"calendar-cell-row\">\n            <novo-calendar-month-day\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)\"\n              [day]=\"day\"\n              [locale]=\"locale\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"dayClicked.emit({day: day})\"\n              (eventClicked)=\"eventClicked.emit({ day: day, event: $event.event})\">\n            </novo-calendar-month-day>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoCalendarMonthViewElement.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
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
    return NovoCalendarMonthViewElement;
}());
export { NovoCalendarMonthViewElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aFZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvbW9udGgvQ2FsZW5kYXJNb250aFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUdqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBTUwsaUJBQWlCLEVBQ2pCLFlBQVksR0FDYixNQUFNLDZDQUE2QyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVlwQztJQThIRTs7T0FFRztJQUNILHNDQUFvQixHQUFzQixFQUFxQixNQUFjO1FBQXpELFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBMUYxQyxXQUFNLEdBQW9CLEVBQUUsQ0FBQzs7OztRQU03QixnQkFBVyxHQUFhLEVBQUUsQ0FBQzs7OztRQW1CM0IsV0FBTSxHQUFXLE9BQU8sQ0FBQzs7OztRQU16QixvQkFBZSxHQUFXLEtBQUssQ0FBQzs7OztRQXdCaEMsZUFBVSxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQzs7OztRQU01RixpQkFBWSxHQUFxRCxJQUFJLFlBQVksRUFBc0MsQ0FBQzs7OztRQU14SCxzQkFBaUIsR0FBaUQsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFHckgsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQXFCNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILCtDQUFROzs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksSUFBSSxDQUFDLE9BQU8s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SUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBOU1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMjdCQXdCVDtpQkFDRjs7OztnQkF4REMsaUJBQWlCOzZDQThKNEIsTUFBTSxTQUFDLFNBQVM7OzsyQkFqRzVELEtBQUs7eUJBTUwsS0FBSzs4QkFNTCxLQUFLOzhCQU9MLEtBQUs7MEJBTUwsS0FBSzt5QkFNTCxLQUFLO2tDQU1MLEtBQUs7K0JBTUwsS0FBSztpQ0FNTCxLQUFLOytCQU1MLEtBQUs7NkJBTUwsTUFBTTsrQkFNTixNQUFNO29DQU1OLE1BQU07aUNBR04sTUFBTTs7SUFtR1QsbUNBQUM7Q0FBQSxBQS9NRCxJQStNQztTQW5MWSw0QkFBNEI7Ozs7OztJQUl2QyxnREFDZTs7Ozs7SUFLZiw4Q0FDNkI7Ozs7O0lBSzdCLG1EQUMyQjs7Ozs7O0lBTTNCLG1EQUNzQjs7Ozs7SUFLdEIsK0NBQ3NCOzs7OztJQUt0Qiw4Q0FDeUI7Ozs7O0lBS3pCLHVEQUNnQzs7Ozs7SUFLaEMsb0RBQ3FCOzs7OztJQUtyQixzREFDaUM7Ozs7O0lBS2pDLG9EQUMrQjs7Ozs7SUFLL0Isa0RBQzRGOzs7OztJQUs1RixvREFDd0g7Ozs7O0lBS3hILHlEQUNxSDs7SUFFckgsc0RBQzhEOzs7OztJQUs5RCxxREFBeUI7Ozs7O0lBS3pCLDRDQUFnQjs7Ozs7SUFLaEIsMkRBQWtDOzs7OztJQUt0QiwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBXZWVrRGF5LFxuICBNb250aFZpZXcsXG4gIE1vbnRoVmlld0RheSxcbiAgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50LFxuICBnZXRXZWVrVmlld0hlYWRlcixcbiAgZ2V0TW9udGhWaWV3LFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbi8qKlxuICogU2hvd3MgYWxsIGV2ZW50cyBvbiBhIGdpdmVuIG1vbnRoLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYFxuICogJmx0O25vdm8tY2FsZW5kYXItbW9udGgtdmlld1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIiZndDtcbiAqICZsdDsvbm92by1jYWxlbmRhci1tb250aC12aWV3Jmd0O1xuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItbW9udGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1tb250aC12aWV3XCI+XG4gICAgICAgPG5vdm8tY2FsZW5kYXItbW9udGgtaGVhZGVyXG4gICAgICAgICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiXG4gICAgICAgICBbZGF5c109XCJjb2x1bW5IZWFkZXJzXCJcbiAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJoZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAodmlld0RhdGVDaGFuZ2UpPVwicmVmcmVzaEFsbCgpXCI+XG4gICAgICAgPC9ub3ZvLWNhbGVuZGFyLW1vbnRoLWhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1kYXlzXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHJvd0luZGV4IG9mIHZpZXcucm93T2Zmc2V0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jZWxsLXJvd1wiPlxuICAgICAgICAgICAgPG5vdm8tY2FsZW5kYXItbW9udGgtZGF5XG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2Ygdmlldy5kYXlzIHwgc2xpY2UgOiByb3dJbmRleCA6IHJvd0luZGV4ICsgKHZpZXcudG90YWxEYXlzVmlzaWJsZUluV2VlaylcIlxuICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJkYXlDbGlja2VkLmVtaXQoe2RheTogZGF5fSlcIlxuICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHsgZGF5OiBkYXksIGV2ZW50OiAkZXZlbnQuZXZlbnR9KVwiPlxuICAgICAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLW1vbnRoLWRheT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IHdpbGwgYmUgaGlkZGVuIG9uIHRoZSB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBlYWNoIGNlbGwgaXMgcmVuZGVyZWQuIFRoZSBmaXJzdCBhcmd1bWVudCB3aWxsIGNvbnRhaW4gdGhlIGNhbGVuZGFyIGNlbGwuXG4gICAqIElmIHlvdSBhZGQgdGhlIGBjc3NDbGFzc2AgcHJvcGVydHkgdG8gdGhlIGNlbGwgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgY2VsbCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheU1vZGlmaWVyOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmcgPSAndG9wJztcblxuICAvKipcbiAgICogVGhlIHN0YXJ0IG51bWJlciBvZiB0aGUgd2Vla1xuICAgKi9cbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBoZWFkZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgZGF5IGNlbGxcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGRheSBjZWxsIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBkYXlDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBkYXk6IE1vbnRoVmlld0RheSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXk6IE1vbnRoVmlld0RheSB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZGF5OiBhbnk7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRheTogYW55OyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCBpcyBkcmFnZ2VkIGFuZCBkcm9wcGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRUaW1lc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbHVtbkhlYWRlcnM6IFdlZWtEYXlbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmlldzogTW9udGhWaWV3O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICByZWZyZXNoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaCkge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaEFsbCgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5ldmVudHMgfHwgY2hhbmdlcy5leGNsdWRlRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXZlbnREcm9wcGVkKGRheTogTW9udGhWaWV3RGF5LCBldmVudDogQ2FsZW5kYXJFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IGRhdGVGbnMuZ2V0WWVhcihkYXkuZGF0ZSk7XG4gICAgY29uc3QgbW9udGg6IG51bWJlciA9IGRhdGVGbnMuZ2V0TW9udGgoZGF5LmRhdGUpO1xuICAgIGNvbnN0IGRhdGU6IG51bWJlciA9IGRhdGVGbnMuZ2V0RGF0ZShkYXkuZGF0ZSk7XG4gICAgY29uc3QgbmV3U3RhcnQ6IERhdGUgPSBkYXRlRm5zLnNldFllYXIoZGF0ZUZucy5zZXRNb250aChkYXRlRm5zLnNldERhdGUoZXZlbnQuc3RhcnQsIGRhdGUpLCBtb250aCksIHllYXIpO1xuICAgIGxldCBuZXdFbmQ6IERhdGU7XG4gICAgaWYgKGV2ZW50LmVuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kc0RpZmY6IG51bWJlciA9IGRhdGVGbnMuZGlmZmVyZW5jZUluU2Vjb25kcyhuZXdTdGFydCwgZXZlbnQuc3RhcnQpO1xuICAgICAgbmV3RW5kID0gZGF0ZUZucy5hZGRTZWNvbmRzKGV2ZW50LmVuZCwgc2Vjb25kc0RpZmYpO1xuICAgIH1cbiAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoeyBldmVudCwgbmV3U3RhcnQsIG5ld0VuZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEhlYWRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbkhlYWRlcnMgPSBnZXRXZWVrVmlld0hlYWRlcih7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEJvZHkoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gZ2V0TW9udGhWaWV3KHtcbiAgICAgIGV2ZW50czogdGhpcy5ldmVudHMsXG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5kYXlNb2RpZmllcikge1xuICAgICAgdGhpcy52aWV3LmRheXMuZm9yRWFjaCgoZGF5KSA9PiB0aGlzLmRheU1vZGlmaWVyKGRheSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gIH1cbn1cbiJdfQ==