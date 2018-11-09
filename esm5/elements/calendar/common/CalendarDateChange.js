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
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXRlQ2hhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUVwQztJQW9DRSx1Q0FBK0IsTUFBYzs7OztRQUY3QyxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvREFBWTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwrQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsa0RBQVU7Ozs7SUFBVixVQUFXLElBQVk7O1lBQ2YsS0FBSyxHQUFRO1lBQ2pCLEdBQUcsRUFBRSxPQUFPLENBQUMsT0FBTztZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1NBQ3pCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHNCQUFJLHNEQUFXOzs7O1FBQWY7WUFDRSxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0RBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7O2dCQW5FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLDhyQkFVVDtpQkFDRjs7Ozs2Q0F1QmMsTUFBTSxTQUFDLFNBQVM7Ozt1QkFsQjVCLEtBQUs7MkJBTUwsS0FBSzt5QkFHTCxLQUFLO2lDQU1MLE1BQU07O0lBbUNULG9DQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0F0RFksNkJBQTZCOzs7Ozs7SUFJeEMsNkNBQ2E7Ozs7O0lBS2IsaURBQ2U7O0lBRWYsK0NBQ2U7Ozs7O0lBS2YsdURBQ3dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIExPQ0FMRV9JRCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRhdGUtY2hhbmdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLWRhdGUtY2hhbmdlXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LWxlZnRcIiAoY2xpY2spPVwic3VidHJhY3REYXRlKClcIiA+PC9pPlxuICAgICAgICA8c3BhbiBbbmdTd2l0Y2hdPVwidmlld1wiPlxuICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIj57eyAoIHZpZXdEYXRlIHwgbW9udGg6bG9jYWxlICkgKyAnICcgKyAoIHZpZXdEYXRlIHwgeWVhcjpsb2NhbGUgKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIj57eyAoIHN0YXJ0T2ZXZWVrIHwgbW9udGhkYXk6bG9jYWxlOidsb25nJyApICsgJyAtICcgKyAoIGVuZE9mV2VlayB8IGVuZG9md2Vla2Rpc3BsYXk6c3RhcnRPZldlZWs6bG9jYWxlOidsb25nJyApIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidkYXknXCI+e3sgKCB2aWV3RGF0ZSB8IHdlZWtkYXk6bG9jYWxlOidsb25nJyApICsgJywgJyArICggdmlld0RhdGUgfCBtb250aDpsb2NhbGUgKSArICcgJyArICggdmlld0RhdGUgfCBkYXlvZm1vbnRoOmxvY2FsZSApIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LXJpZ2h0XCIgKGNsaWNrKT1cImFkZERhdGUoKVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgdmlldzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHN1YnRyYWN0RGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURhdGUoLTEpO1xuICB9XG5cbiAgYWRkRGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURhdGUoMSk7XG4gIH1cblxuICBjaGFuZ2VEYXRlKHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGFkZEZuOiBhbnkgPSB7XG4gICAgICBkYXk6IGRhdGVGbnMuYWRkRGF5cyxcbiAgICAgIHdlZWs6IGRhdGVGbnMuYWRkV2Vla3MsXG4gICAgICBtb250aDogZGF0ZUZucy5hZGRNb250aHMsXG4gICAgfVt0aGlzLnZpZXddO1xuXG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KGFkZEZuKHRoaXMudmlld0RhdGUsIHVuaXQpKTtcbiAgfVxuXG4gIGdldCBzdGFydE9mV2VlaygpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5zdGFydE9mV2Vlayh0aGlzLnZpZXdEYXRlKTtcbiAgfVxuXG4gIGdldCBlbmRPZldlZWsoKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuZW5kT2ZXZWVrKHRoaXMudmlld0RhdGUpO1xuICB9XG59XG4iXX0=