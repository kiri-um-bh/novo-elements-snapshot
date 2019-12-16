/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/month/CalendarMonthDay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CalendarEventResponse } from '../../../utils/calendar-utils/CalendarUtils';
var NovoCalendarMonthDayElement = /** @class */ (function () {
    function NovoCalendarMonthDayElement() {
        this.eventClicked = new EventEmitter();
    }
    Object.defineProperty(NovoCalendarMonthDayElement.prototype, "accepted", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.day) {
                return [];
            }
            return this.day.events.filter((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                return evt.response === CalendarEventResponse.Accepted;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoCalendarMonthDayElement.prototype, "rejected", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.day) {
                return [];
            }
            return this.day.events.filter((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                return evt.response === CalendarEventResponse.Rejected;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoCalendarMonthDayElement.prototype, "maybes", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.day) {
                return [];
            }
            return this.day.events.filter((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                return evt.response === CalendarEventResponse.Maybe;
            }));
        },
        enumerable: true,
        configurable: true
    });
    NovoCalendarMonthDayElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-month-day',
                    template: "\n    <ng-template #defaultTemplate>\n      <div class=\"calendar-day-top\">\n        <span class=\"calendar-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"calendar-day-number\">{{ day.date | dayofmonth:locale }}</span>\n      </div>\n      <div class=\"calendar-events\">\n        <div\n          class=\"calendar-event\"\n          *ngFor=\"let type of day.events | groupBy : 'type'\"\n          [style.backgroundColor]=\"type?.value[0]?.color.primary\"\n          [ngClass]=\"type?.value[0]?.cssClass\"\n          (click)=\"$event.stopPropagation(); eventClicked.emit({event:type?.value[0]})\">\n          {{type?.value.length}}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        locale: locale,\n        tooltipPosition: tooltipPosition,\n        eventClicked: eventClicked,\n        accepted: accepted,\n        rejected: rejected,\n        maybes: maybes\n      }\">\n    </ng-template>\n  ",
                    host: {
                        '[class]': '"calendar-cell calendar-day-cell " + day?.cssClass',
                        '[class.calendar-day-accepted]': 'accepted.length',
                        '[class.calendar-day-rejected]': 'rejected.length',
                        '[class.calendar-past]': 'day.isPast',
                        '[class.calendar-today]': 'day.isToday',
                        '[class.calendar-future]': 'day.isFuture',
                        '[class.calendar-weekend]': 'day.isWeekend',
                        '[class.calendar-in-month]': 'day.inMonth',
                        '[class.calendar-out-month]': '!day.inMonth',
                        '[class.calendar-has-events]': 'day.events.length > 0',
                        '[style.backgroundColor]': 'day.backgroundColor',
                    }
                }] }
    ];
    NovoCalendarMonthDayElement.propDecorators = {
        day: [{ type: Input }],
        locale: [{ type: Input }],
        tooltipPosition: [{ type: Input }],
        customTemplate: [{ type: Input }],
        eventClicked: [{ type: Output }]
    };
    return NovoCalendarMonthDayElement;
}());
export { NovoCalendarMonthDayElement };
if (false) {
    /** @type {?} */
    NovoCalendarMonthDayElement.prototype.day;
    /** @type {?} */
    NovoCalendarMonthDayElement.prototype.locale;
    /** @type {?} */
    NovoCalendarMonthDayElement.prototype.tooltipPosition;
    /** @type {?} */
    NovoCalendarMonthDayElement.prototype.customTemplate;
    /** @type {?} */
    NovoCalendarMonthDayElement.prototype.eventClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aERheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoRGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUErQixxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWpIO0lBQUE7UUE0REUsaUJBQVksR0FBMkMsSUFBSSxZQUFZLEVBQTRCLENBQUM7SUE0QnRHLENBQUM7SUExQkMsc0JBQUksaURBQVE7Ozs7UUFBWjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLEdBQUc7Z0JBQ2hDLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7WUFDekQsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFROzs7O1FBQVo7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxHQUFHO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsUUFBUSxDQUFDO1lBQ3pELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBTTs7OztRQUFWO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsR0FBRztnQkFDaEMsT0FBTyxHQUFHLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLEtBQUssQ0FBQztZQUN0RCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBOztnQkF2RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxpa0NBNkJUO29CQUNELElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsb0RBQW9EO3dCQUMvRCwrQkFBK0IsRUFBRSxpQkFBaUI7d0JBQ2xELCtCQUErQixFQUFFLGlCQUFpQjt3QkFDbEQsdUJBQXVCLEVBQUUsWUFBWTt3QkFDckMsd0JBQXdCLEVBQUUsYUFBYTt3QkFDdkMseUJBQXlCLEVBQUUsY0FBYzt3QkFDekMsMEJBQTBCLEVBQUUsZUFBZTt3QkFDM0MsMkJBQTJCLEVBQUUsYUFBYTt3QkFDMUMsNEJBQTRCLEVBQUUsY0FBYzt3QkFDNUMsNkJBQTZCLEVBQUUsdUJBQXVCO3dCQUN0RCx5QkFBeUIsRUFBRSxxQkFBcUI7cUJBQ2pEO2lCQUNGOzs7c0JBRUUsS0FBSzt5QkFHTCxLQUFLO2tDQUdMLEtBQUs7aUNBR0wsS0FBSzsrQkFHTCxNQUFNOztJQTZCVCxrQ0FBQztDQUFBLEFBeEZELElBd0ZDO1NBMUNZLDJCQUEyQjs7O0lBQ3RDLDBDQUNrQjs7SUFFbEIsNkNBQ2U7O0lBRWYsc0RBQ3dCOztJQUV4QixxREFDaUM7O0lBRWpDLG1EQUNvRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9udGhWaWV3RGF5LCBDYWxlbmRhckV2ZW50LCBDYWxlbmRhckV2ZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1tb250aC1kYXknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWRheS10b3BcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhci1kYXktYmFkZ2VcIiAqbmdJZj1cImRheS5iYWRnZVRvdGFsID4gMFwiPnt7IGRheS5iYWRnZVRvdGFsIH19PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbGVuZGFyLWRheS1udW1iZXJcIj57eyBkYXkuZGF0ZSB8IGRheW9mbW9udGg6bG9jYWxlIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZXZlbnRzXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNhbGVuZGFyLWV2ZW50XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdHlwZSBvZiBkYXkuZXZlbnRzIHwgZ3JvdXBCeSA6ICd0eXBlJ1wiXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJ0eXBlPy52YWx1ZVswXT8uY29sb3IucHJpbWFyeVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwidHlwZT8udmFsdWVbMF0/LmNzc0NsYXNzXCJcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6dHlwZT8udmFsdWVbMF19KVwiPlxuICAgICAgICAgIHt7dHlwZT8udmFsdWUubGVuZ3RofX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGRheTogZGF5LFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb24sXG4gICAgICAgIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkLFxuICAgICAgICBhY2NlcHRlZDogYWNjZXB0ZWQsXG4gICAgICAgIHJlamVjdGVkOiByZWplY3RlZCxcbiAgICAgICAgbWF5YmVzOiBtYXliZXNcbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnXCJjYWxlbmRhci1jZWxsIGNhbGVuZGFyLWRheS1jZWxsIFwiICsgZGF5Py5jc3NDbGFzcycsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci1kYXktYWNjZXB0ZWRdJzogJ2FjY2VwdGVkLmxlbmd0aCcsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci1kYXktcmVqZWN0ZWRdJzogJ3JlamVjdGVkLmxlbmd0aCcsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci1wYXN0XSc6ICdkYXkuaXNQYXN0JyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLXRvZGF5XSc6ICdkYXkuaXNUb2RheScsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci1mdXR1cmVdJzogJ2RheS5pc0Z1dHVyZScsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci13ZWVrZW5kXSc6ICdkYXkuaXNXZWVrZW5kJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWluLW1vbnRoXSc6ICdkYXkuaW5Nb250aCcsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci1vdXQtbW9udGhdJzogJyFkYXkuaW5Nb250aCcsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci1oYXMtZXZlbnRzXSc6ICdkYXkuZXZlbnRzLmxlbmd0aCA+IDAnLFxuICAgICdbc3R5bGUuYmFja2dyb3VuZENvbG9yXSc6ICdkYXkuYmFja2dyb3VuZENvbG9yJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZGF5OiBNb250aFZpZXdEYXk7XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4oKTtcblxuICBnZXQgYWNjZXB0ZWQoKTogQXJyYXk8Q2FsZW5kYXJFdmVudD4ge1xuICAgIGlmICghdGhpcy5kYXkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF5LmV2ZW50cy5maWx0ZXIoKGV2dCkgPT4ge1xuICAgICAgcmV0dXJuIGV2dC5yZXNwb25zZSA9PT0gQ2FsZW5kYXJFdmVudFJlc3BvbnNlLkFjY2VwdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHJlamVjdGVkKCk6IEFycmF5PENhbGVuZGFyRXZlbnQ+IHtcbiAgICBpZiAoIXRoaXMuZGF5KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRheS5ldmVudHMuZmlsdGVyKChldnQpID0+IHtcbiAgICAgIHJldHVybiBldnQucmVzcG9uc2UgPT09IENhbGVuZGFyRXZlbnRSZXNwb25zZS5SZWplY3RlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBtYXliZXMoKTogQXJyYXk8Q2FsZW5kYXJFdmVudD4ge1xuICAgIGlmICghdGhpcy5kYXkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF5LmV2ZW50cy5maWx0ZXIoKGV2dCkgPT4ge1xuICAgICAgcmV0dXJuIGV2dC5yZXNwb25zZSA9PT0gQ2FsZW5kYXJFdmVudFJlc3BvbnNlLk1heWJlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=