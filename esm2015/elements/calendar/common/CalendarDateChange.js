/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXRlQ2hhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQWdCcEMsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQXNCeEMsWUFBK0IsTUFBYzs7OztRQUY3QyxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBS0QsWUFBWTtRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTs7Y0FDZixLQUFLLEdBQVE7WUFDakIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDekIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRVosSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2FBQ0Y7Ozs7eUNBdUJjLE1BQU0sU0FBQyxTQUFTOzs7bUJBbEI1QixLQUFLO3VCQU1MLEtBQUs7cUJBR0wsS0FBSzs2QkFNTCxNQUFNOzs7Ozs7O0lBZlAsNkNBQ2E7Ozs7O0lBS2IsaURBQ2U7O0lBRWYsK0NBQ2U7Ozs7O0lBS2YsdURBQ3dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIExPQ0FMRV9JRCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRhdGUtY2hhbmdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLWRhdGUtY2hhbmdlXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LWxlZnRcIiAoY2xpY2spPVwic3VidHJhY3REYXRlKClcIiA+PC9pPlxuICAgICAgICA8c3BhbiBbbmdTd2l0Y2hdPVwidmlld1wiPlxuICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIj57eyAoIHZpZXdEYXRlIHwgbW9udGg6bG9jYWxlICkgKyAnICcgKyAoIHZpZXdEYXRlIHwgeWVhcjpsb2NhbGUgKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIj57eyAoIHN0YXJ0T2ZXZWVrIHwgbW9udGhkYXk6bG9jYWxlOidsb25nJyApICsgJyAtICcgKyAoIGVuZE9mV2VlayB8IGVuZG9md2Vla2Rpc3BsYXk6c3RhcnRPZldlZWs6bG9jYWxlOidsb25nJyApIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidkYXknXCI+e3sgKCB2aWV3RGF0ZSB8IHdlZWtkYXk6bG9jYWxlOidsb25nJyApICsgJywgJyArICggdmlld0RhdGUgfCBtb250aDpsb2NhbGUgKSArICcgJyArICggdmlld0RhdGUgfCBkYXlvZm1vbnRoOmxvY2FsZSApIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LXJpZ2h0XCIgKGNsaWNrKT1cImFkZERhdGUoKVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgdmlldzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHN1YnRyYWN0RGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURhdGUoLTEpO1xuICB9XG5cbiAgYWRkRGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURhdGUoMSk7XG4gIH1cblxuICBjaGFuZ2VEYXRlKHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGFkZEZuOiBhbnkgPSB7XG4gICAgICBkYXk6IGRhdGVGbnMuYWRkRGF5cyxcbiAgICAgIHdlZWs6IGRhdGVGbnMuYWRkV2Vla3MsXG4gICAgICBtb250aDogZGF0ZUZucy5hZGRNb250aHMsXG4gICAgfVt0aGlzLnZpZXddO1xuXG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KGFkZEZuKHRoaXMudmlld0RhdGUsIHVuaXQpKTtcbiAgfVxuXG4gIGdldCBzdGFydE9mV2VlaygpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5zdGFydE9mV2Vlayh0aGlzLnZpZXdEYXRlKTtcbiAgfVxuXG4gIGdldCBlbmRPZldlZWsoKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuZW5kT2ZXZWVrKHRoaXMudmlld0RhdGUpO1xuICB9XG59XG4iXX0=