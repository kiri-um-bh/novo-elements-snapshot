/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/common/CalendarDateChange.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import * as dateFns from 'date-fns';
export class NovoCalendarDateChangeElement {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
        this.locale = locale;
    }
    /**
     * @hidden
     * @return {?}
     */
    subtractDate() {
        this.changeDate(-1);
    }
    /**
     * @return {?}
     */
    addDate() {
        this.changeDate(1);
    }
    /**
     * @param {?} unit
     * @return {?}
     */
    changeDate(unit) {
        /** @type {?} */
        const addFn = {
            day: dateFns.addDays,
            week: dateFns.addWeeks,
            month: dateFns.addMonths,
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, unit));
    }
    /**
     * @return {?}
     */
    get startOfWeek() {
        return dateFns.startOfWeek(this.viewDate);
    }
    /**
     * @return {?}
     */
    get endOfWeek() {
        return dateFns.endOfWeek(this.viewDate);
    }
}
NovoCalendarDateChangeElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-calendar-date-change',
                template: `
    <div class="cal-date-change">
        <i class="bhi-arrow-left" (click)="subtractDate()" ></i>
        <span [ngSwitch]="view">
            <span *ngSwitchCase="'month'">{{ ( viewDate | month:locale ) + ' ' + ( viewDate | year:locale ) }}</span>
            <span *ngSwitchCase="'week'">{{ ( startOfWeek | monthday:locale:'long' ) + ' - ' + ( endOfWeek | endofweekdisplay:startOfWeek:locale:'long' ) }}</span>
            <span *ngSwitchCase="'day'">{{ ( viewDate | weekday:locale:'long' ) + ', ' + ( viewDate | month:locale ) + ' ' + ( viewDate | dayofmonth:locale ) }}</span>
        </span>
        <i class="bhi-arrow-right" (click)="addDate()"></i>
    </div>
  `
            }] }
];
/** @nocollapse */
NovoCalendarDateChangeElement.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NovoCalendarDateChangeElement.propDecorators = {
    view: [{ type: Input }],
    viewDate: [{ type: Input }],
    locale: [{ type: Input }],
    viewDateChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXRlQ2hhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFnQnBDLE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFzQnhDLFlBQStCLE1BQWM7Ozs7UUFGN0MsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUtELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7O2NBQ2YsS0FBSyxHQUFRO1lBQ2pCLEdBQUcsRUFBRSxPQUFPLENBQUMsT0FBTztZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1NBQ3pCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDthQUNGOzs7O3lDQXVCYyxNQUFNLFNBQUMsU0FBUzs7O21CQWxCNUIsS0FBSzt1QkFNTCxLQUFLO3FCQUdMLEtBQUs7NkJBTUwsTUFBTTs7Ozs7OztJQWZQLDZDQUNhOzs7OztJQUtiLGlEQUNlOztJQUVmLCtDQUNlOzs7OztJQUtmLHVEQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBMT0NBTEVfSUQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1kYXRlLWNoYW5nZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbC1kYXRlLWNoYW5nZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1sZWZ0XCIgKGNsaWNrKT1cInN1YnRyYWN0RGF0ZSgpXCIgPjwvaT5cbiAgICAgICAgPHNwYW4gW25nU3dpdGNoXT1cInZpZXdcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCI+e3sgKCB2aWV3RGF0ZSB8IG1vbnRoOmxvY2FsZSApICsgJyAnICsgKCB2aWV3RGF0ZSB8IHllYXI6bG9jYWxlICkgfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ3dlZWsnXCI+e3sgKCBzdGFydE9mV2VlayB8IG1vbnRoZGF5OmxvY2FsZTonbG9uZycgKSArICcgLSAnICsgKCBlbmRPZldlZWsgfCBlbmRvZndlZWtkaXNwbGF5OnN0YXJ0T2ZXZWVrOmxvY2FsZTonbG9uZycgKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInZGF5J1wiPnt7ICggdmlld0RhdGUgfCB3ZWVrZGF5OmxvY2FsZTonbG9uZycgKSArICcsICcgKyAoIHZpZXdEYXRlIHwgbW9udGg6bG9jYWxlICkgKyAnICcgKyAoIHZpZXdEYXRlIHwgZGF5b2Ztb250aDpsb2NhbGUgKSB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1yaWdodFwiIChjbGljayk9XCJhZGREYXRlKClcIj48L2k+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50IHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXc6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzdWJ0cmFjdERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEYXRlKC0xKTtcbiAgfVxuXG4gIGFkZERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEYXRlKDEpO1xuICB9XG5cbiAgY2hhbmdlRGF0ZSh1bml0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBhZGRGbjogYW55ID0ge1xuICAgICAgZGF5OiBkYXRlRm5zLmFkZERheXMsXG4gICAgICB3ZWVrOiBkYXRlRm5zLmFkZFdlZWtzLFxuICAgICAgbW9udGg6IGRhdGVGbnMuYWRkTW9udGhzLFxuICAgIH1bdGhpcy52aWV3XTtcblxuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChhZGRGbih0aGlzLnZpZXdEYXRlLCB1bml0KSk7XG4gIH1cblxuICBnZXQgc3RhcnRPZldlZWsoKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuc3RhcnRPZldlZWsodGhpcy52aWV3RGF0ZSk7XG4gIH1cblxuICBnZXQgZW5kT2ZXZWVrKCkge1xuICAgIHJldHVybiBkYXRlRm5zLmVuZE9mV2Vlayh0aGlzLnZpZXdEYXRlKTtcbiAgfVxufVxuIl19