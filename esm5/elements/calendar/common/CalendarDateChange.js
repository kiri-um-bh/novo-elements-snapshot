/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import * as dateFns from 'date-fns';
var NovoCalendarDateChangeElement = /** @class */ (function () {
    function NovoCalendarDateChangeElement(locale) {
        /**
         * Called when the view date is changed
         */
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
    NovoCalendarDateChangeElement.prototype.subtractDate = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.changeDate(-1);
    };
    /**
     * @return {?}
     */
    NovoCalendarDateChangeElement.prototype.addDate = /**
     * @return {?}
     */
    function () {
        this.changeDate(1);
    };
    /**
     * @param {?} unit
     * @return {?}
     */
    NovoCalendarDateChangeElement.prototype.changeDate = /**
     * @param {?} unit
     * @return {?}
     */
    function (unit) {
        /** @type {?} */
        var addFn = {
            day: dateFns.addDays,
            week: dateFns.addWeeks,
            month: dateFns.addMonths,
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, unit));
    };
    Object.defineProperty(NovoCalendarDateChangeElement.prototype, "startOfWeek", {
        get: /**
         * @return {?}
         */
        function () {
            return dateFns.startOfWeek(this.viewDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoCalendarDateChangeElement.prototype, "endOfWeek", {
        get: /**
         * @return {?}
         */
        function () {
            return dateFns.endOfWeek(this.viewDate);
        },
        enumerable: true,
        configurable: true
    });
    NovoCalendarDateChangeElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-date-change',
                    template: "\n    <div class=\"cal-date-change\">\n        <i class=\"bhi-arrow-left\" (click)=\"subtractDate()\" ></i>\n        <span [ngSwitch]=\"view\">\n            <span *ngSwitchCase=\"'month'\">{{ ( viewDate | month:locale ) + ' ' + ( viewDate | year:locale ) }}</span>\n            <span *ngSwitchCase=\"'week'\">{{ ( startOfWeek | monthday:locale:'long' ) + ' - ' + ( endOfWeek | endofweekdisplay:startOfWeek:locale:'long' ) }}</span>\n            <span *ngSwitchCase=\"'day'\">{{ ( viewDate | weekday:locale:'long' ) + ', ' + ( viewDate | month:locale ) + ' ' + ( viewDate | dayofmonth:locale ) }}</span>\n        </span>\n        <i class=\"bhi-arrow-right\" (click)=\"addDate()\"></i>\n    </div>\n  "
                }] }
    ];
    NovoCalendarDateChangeElement.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NovoCalendarDateChangeElement.propDecorators = {
        view: [{ type: Input }],
        viewDate: [{ type: Input }],
        locale: [{ type: Input }],
        viewDateChange: [{ type: Output }]
    };
    return NovoCalendarDateChangeElement;
}());
export { NovoCalendarDateChangeElement };
if (false) {
    /**
     * The current view
     * @type {?}
     */
    NovoCalendarDateChangeElement.prototype.view;
    /**
     * The current view date
     * @type {?}
     */
    NovoCalendarDateChangeElement.prototype.viewDate;
    /** @type {?} */
    NovoCalendarDateChangeElement.prototype.locale;
    /**
     * Called when the view date is changed
     * @type {?}
     */
    NovoCalendarDateChangeElement.prototype.viewDateChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXRlQ2hhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUVwQztJQW9DRSx1Q0FBK0IsTUFBYztRQU43Qzs7V0FFRztRQUVILG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9EQUFZOzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELCtDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxrREFBVTs7OztJQUFWLFVBQVcsSUFBWTs7WUFDZixLQUFLLEdBQVE7WUFDakIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDekIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRVosSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsc0JBQUksc0RBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBUzs7OztRQUFiO1lBQ0UsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsOHJCQVVUO2lCQUNGOzs7NkNBdUJjLE1BQU0sU0FBQyxTQUFTOzs7dUJBbEI1QixLQUFLOzJCQU1MLEtBQUs7eUJBR0wsS0FBSztpQ0FNTCxNQUFNOztJQW1DVCxvQ0FBQztDQUFBLEFBcEVELElBb0VDO1NBdERZLDZCQUE2Qjs7Ozs7O0lBSXhDLDZDQUNhOzs7OztJQUtiLGlEQUNlOztJQUVmLCtDQUNlOzs7OztJQUtmLHVEQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBMT0NBTEVfSUQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1kYXRlLWNoYW5nZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbC1kYXRlLWNoYW5nZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1sZWZ0XCIgKGNsaWNrKT1cInN1YnRyYWN0RGF0ZSgpXCIgPjwvaT5cbiAgICAgICAgPHNwYW4gW25nU3dpdGNoXT1cInZpZXdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCI+e3sgKCB2aWV3RGF0ZSB8IG1vbnRoOmxvY2FsZSApICsgJyAnICsgKCB2aWV3RGF0ZSB8IHllYXI6bG9jYWxlICkgfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ3dlZWsnXCI+e3sgKCBzdGFydE9mV2VlayB8IG1vbnRoZGF5OmxvY2FsZTonbG9uZycgKSArICcgLSAnICsgKCBlbmRPZldlZWsgfCBlbmRvZndlZWtkaXNwbGF5OnN0YXJ0T2ZXZWVrOmxvY2FsZTonbG9uZycgKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInZGF5J1wiPnt7ICggdmlld0RhdGUgfCB3ZWVrZGF5OmxvY2FsZTonbG9uZycgKSArICcsICcgKyAoIHZpZXdEYXRlIHwgbW9udGg6bG9jYWxlICkgKyAnICcgKyAoIHZpZXdEYXRlIHwgZGF5b2Ztb250aDpsb2NhbGUgKSB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1yaWdodFwiIChjbGljayk9XCJhZGREYXRlKClcIj48L2k+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50IHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXc6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzdWJ0cmFjdERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEYXRlKC0xKTtcbiAgfVxuXG4gIGFkZERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEYXRlKDEpO1xuICB9XG5cbiAgY2hhbmdlRGF0ZSh1bml0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBhZGRGbjogYW55ID0ge1xuICAgICAgZGF5OiBkYXRlRm5zLmFkZERheXMsXG4gICAgICB3ZWVrOiBkYXRlRm5zLmFkZFdlZWtzLFxuICAgICAgbW9udGg6IGRhdGVGbnMuYWRkTW9udGhzLFxuICAgIH1bdGhpcy52aWV3XTtcblxuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChhZGRGbih0aGlzLnZpZXdEYXRlLCB1bml0KSk7XG4gIH1cblxuICBnZXQgc3RhcnRPZldlZWsoKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuc3RhcnRPZldlZWsodGhpcy52aWV3RGF0ZSk7XG4gIH1cblxuICBnZXQgZW5kT2ZXZWVrKCkge1xuICAgIHJldHVybiBkYXRlRm5zLmVuZE9mV2Vlayh0aGlzLnZpZXdEYXRlKTtcbiAgfVxufVxuIl19