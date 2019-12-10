/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/month/CalendarMonthHeader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as dateFns from 'date-fns';
var NovoCalendarMonthHeaderElement = /** @class */ (function () {
    function NovoCalendarMonthHeaderElement() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NovoCalendarMonthHeaderElement.prototype.prevMonth = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.viewDateChange.emit(dateFns.subMonths(this.viewDate, 1));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoCalendarMonthHeaderElement.prototype.nextMonth = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.viewDateChange.emit(dateFns.addMonths(this.viewDate, 1));
    };
    NovoCalendarMonthHeaderElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-month-header',
                    template: "\n    <ng-template #defaultTemplate>\n      <div class=\"calendar-header\">\n        <div class=\"calendar-header-top\">\n          <button theme=\"icon\" icon=\"previous\" (click)=\"prevMonth($event)\"></button>\n          <div class=\"calendar-month\">{{ viewDate | month:locale }}</div>\n          <button theme=\"icon\" icon=\"next\" (click)=\"nextMonth($event)\"></button>\n        </div>\n        <div class=\"calendar-weekdays\">\n          <div\n            class=\"calendar-weekday\"\n            *ngFor=\"let day of days\"\n            [class.calendar-past]=\"day.isPast\"\n            [class.calendar-today]=\"day.isToday\"\n            [class.calendar-future]=\"day.isFuture\"\n            [class.calendar-weekend]=\"day.isWeekend\">\n            {{ day.date | weekday:locale }}\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, viewDate: viewDate}\">\n    </ng-template>\n  "
                }] }
    ];
    NovoCalendarMonthHeaderElement.propDecorators = {
        viewDate: [{ type: Input }],
        days: [{ type: Input }],
        locale: [{ type: Input }],
        customTemplate: [{ type: Input }],
        viewDateChange: [{ type: Output }]
    };
    return NovoCalendarMonthHeaderElement;
}());
export { NovoCalendarMonthHeaderElement };
if (false) {
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.viewDate;
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.days;
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.locale;
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.customTemplate;
    /**
     * Called when the view date is changed
     * @type {?}
     */
    NovoCalendarMonthHeaderElement.prototype.viewDateChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoSGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFFcEM7SUFBQTs7OztRQThDRSxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUzFELENBQUM7Ozs7O0lBUEMsa0RBQVM7Ozs7SUFBVCxVQUFVLEtBQVk7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxrREFBUzs7OztJQUFULFVBQVUsS0FBWTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSw2aENBeUJUO2lCQUNGOzs7MkJBRUUsS0FBSzt1QkFHTCxLQUFLO3lCQUdMLEtBQUs7aUNBR0wsS0FBSztpQ0FNTCxNQUFNOztJQVVULHFDQUFDO0NBQUEsQUF2REQsSUF1REM7U0ExQlksOEJBQThCOzs7SUFDekMsa0RBQ2U7O0lBRWYsOENBQ2dCOztJQUVoQixnREFDZTs7SUFFZix3REFDaUM7Ozs7O0lBS2pDLHdEQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla0RheSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItbW9udGgtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlci10b3BcIj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJwcmV2aW91c1wiIChjbGljayk9XCJwcmV2TW9udGgoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1tb250aFwiPnt7IHZpZXdEYXRlIHwgbW9udGg6bG9jYWxlIH19PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwibmV4dFwiIChjbGljayk9XCJuZXh0TW9udGgoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXdlZWtkYXlzXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjYWxlbmRhci13ZWVrZGF5XCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c1wiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItcGFzdF09XCJkYXkuaXNQYXN0XCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci10b2RheV09XCJkYXkuaXNUb2RheVwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItZnV0dXJlXT1cImRheS5pc0Z1dHVyZVwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItd2Vla2VuZF09XCJkYXkuaXNXZWVrZW5kXCI+XG4gICAgICAgICAgICB7eyBkYXkuZGF0ZSB8IHdlZWtkYXk6bG9jYWxlIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2RheXM6IGRheXMsIGxvY2FsZTogbG9jYWxlLCB2aWV3RGF0ZTogdmlld0RhdGV9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdmlld0RhdGU6IERhdGU7XG5cbiAgQElucHV0KClcbiAgZGF5czogV2Vla0RheVtdO1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByZXZNb250aChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZucy5zdWJNb250aHModGhpcy52aWV3RGF0ZSwgMSkpO1xuICB9XG5cbiAgbmV4dE1vbnRoKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChkYXRlRm5zLmFkZE1vbnRocyh0aGlzLnZpZXdEYXRlLCAxKSk7XG4gIH1cbn1cbiJdfQ==