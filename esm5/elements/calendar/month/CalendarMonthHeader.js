/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoSGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRixPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUVwQztJQUFBO1FBMENFOztXQUVHO1FBRUgsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVMxRCxDQUFDOzs7OztJQVBDLGtEQUFTOzs7O0lBQVQsVUFBVSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsa0RBQVM7Ozs7SUFBVCxVQUFVLEtBQVk7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsNmhDQXlCVDtpQkFDRjs7OzJCQUVFLEtBQUs7dUJBR0wsS0FBSzt5QkFHTCxLQUFLO2lDQUdMLEtBQUs7aUNBTUwsTUFBTTs7SUFVVCxxQ0FBQztDQUFBLEFBdkRELElBdURDO1NBMUJZLDhCQUE4Qjs7O0lBQ3pDLGtEQUNlOztJQUVmLDhDQUNnQjs7SUFFaEIsZ0RBQ2U7O0lBRWYsd0RBQ2lDOzs7OztJQUtqQyx3REFDd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtEYXkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLW1vbnRoLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkZXItdG9wXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwicHJldmlvdXNcIiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIj48L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItbW9udGhcIj57eyB2aWV3RGF0ZSB8IG1vbnRoOmxvY2FsZSB9fTwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwibmV4dE1vbnRoKCRldmVudClcIj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci13ZWVrZGF5c1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXItd2Vla2RheVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLXBhc3RdPVwiZGF5LmlzUGFzdFwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItdG9kYXldPVwiZGF5LmlzVG9kYXlcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLWZ1dHVyZV09XCJkYXkuaXNGdXR1cmVcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLXdlZWtlbmRdPVwiZGF5LmlzV2Vla2VuZFwiPlxuICAgICAgICAgICAge3sgZGF5LmRhdGUgfCB3ZWVrZGF5OmxvY2FsZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXlzOiBkYXlzLCBsb2NhbGU6IGxvY2FsZSwgdmlld0RhdGU6IHZpZXdEYXRlfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGRheXM6IFdlZWtEYXlbXTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcmV2TW9udGgoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KGRhdGVGbnMuc3ViTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZucy5hZGRNb250aHModGhpcy52aWV3RGF0ZSwgMSkpO1xuICB9XG59XG4iXX0=