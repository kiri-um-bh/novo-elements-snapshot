/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return this.day.events.filter(function (evt) {
                return evt.response === CalendarEventResponse.Accepted;
            });
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
            return this.day.events.filter(function (evt) {
                return evt.response === CalendarEventResponse.Rejected;
            });
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
            return this.day.events.filter(function (evt) {
                return evt.response === CalendarEventResponse.Maybe;
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aERheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoRGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQStCLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFakg7SUFBQTtRQTRERSxpQkFBWSxHQUEyQyxJQUFJLFlBQVksRUFBNEIsQ0FBQztJQTRCdEcsQ0FBQztJQTFCQyxzQkFBSSxpREFBUTs7OztRQUFaO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRztnQkFDaEMsT0FBTyxHQUFHLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaURBQVE7Ozs7UUFBWjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUc7Z0JBQ2hDLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFNOzs7O1FBQVY7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsS0FBSyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGlrQ0E2QlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxvREFBb0Q7d0JBQy9ELCtCQUErQixFQUFFLGlCQUFpQjt3QkFDbEQsK0JBQStCLEVBQUUsaUJBQWlCO3dCQUNsRCx1QkFBdUIsRUFBRSxZQUFZO3dCQUNyQyx3QkFBd0IsRUFBRSxhQUFhO3dCQUN2Qyx5QkFBeUIsRUFBRSxjQUFjO3dCQUN6QywwQkFBMEIsRUFBRSxlQUFlO3dCQUMzQywyQkFBMkIsRUFBRSxhQUFhO3dCQUMxQyw0QkFBNEIsRUFBRSxjQUFjO3dCQUM1Qyw2QkFBNkIsRUFBRSx1QkFBdUI7d0JBQ3RELHlCQUF5QixFQUFFLHFCQUFxQjtxQkFDakQ7aUJBQ0Y7OztzQkFFRSxLQUFLO3lCQUdMLEtBQUs7a0NBR0wsS0FBSztpQ0FHTCxLQUFLOytCQUdMLE1BQU07O0lBNkJULGtDQUFDO0NBQUEsQUF4RkQsSUF3RkM7U0ExQ1ksMkJBQTJCOzs7SUFDdEMsMENBQ2tCOztJQUVsQiw2Q0FDZTs7SUFFZixzREFDd0I7O0lBRXhCLHFEQUNpQzs7SUFFakMsbURBQ29HIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb250aFZpZXdEYXksIENhbGVuZGFyRXZlbnQsIENhbGVuZGFyRXZlbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLW1vbnRoLWRheScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGF5LXRvcFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbGVuZGFyLWRheS1iYWRnZVwiICpuZ0lmPVwiZGF5LmJhZGdlVG90YWwgPiAwXCI+e3sgZGF5LmJhZGdlVG90YWwgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsZW5kYXItZGF5LW51bWJlclwiPnt7IGRheS5kYXRlIHwgZGF5b2Ztb250aDpsb2NhbGUgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ldmVudHNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXItZXZlbnRcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0eXBlIG9mIGRheS5ldmVudHMgfCBncm91cEJ5IDogJ3R5cGUnXCJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cInR5cGU/LnZhbHVlWzBdPy5jb2xvci5wcmltYXJ5XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ0eXBlPy52YWx1ZVswXT8uY3NzQ2xhc3NcIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDp0eXBlPy52YWx1ZVswXX0pXCI+XG4gICAgICAgICAge3t0eXBlPy52YWx1ZS5sZW5ndGh9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICB0b29sdGlwUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvbixcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWQsXG4gICAgICAgIGFjY2VwdGVkOiBhY2NlcHRlZCxcbiAgICAgICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxuICAgICAgICBtYXliZXM6IG1heWJlc1xuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdcImNhbGVuZGFyLWNlbGwgY2FsZW5kYXItZGF5LWNlbGwgXCIgKyBkYXk/LmNzc0NsYXNzJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWRheS1hY2NlcHRlZF0nOiAnYWNjZXB0ZWQubGVuZ3RoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWRheS1yZWplY3RlZF0nOiAncmVqZWN0ZWQubGVuZ3RoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLXBhc3RdJzogJ2RheS5pc1Bhc3QnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItdG9kYXldJzogJ2RheS5pc1RvZGF5JyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWZ1dHVyZV0nOiAnZGF5LmlzRnV0dXJlJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLXdlZWtlbmRdJzogJ2RheS5pc1dlZWtlbmQnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItaW4tbW9udGhdJzogJ2RheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLW91dC1tb250aF0nOiAnIWRheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWhhcy1ldmVudHNdJzogJ2RheS5ldmVudHMubGVuZ3RoID4gMCcsXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdJzogJ2RheS5iYWNrZ3JvdW5kQ29sb3InLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkYXk6IE1vbnRoVmlld0RheTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIGdldCBhY2NlcHRlZCgpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLmRheSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXkuZXZlbnRzLmZpbHRlcigoZXZ0KSA9PiB7XG4gICAgICByZXR1cm4gZXZ0LnJlc3BvbnNlID09PSBDYWxlbmRhckV2ZW50UmVzcG9uc2UuQWNjZXB0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmVqZWN0ZWQoKTogQXJyYXk8Q2FsZW5kYXJFdmVudD4ge1xuICAgIGlmICghdGhpcy5kYXkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF5LmV2ZW50cy5maWx0ZXIoKGV2dCkgPT4ge1xuICAgICAgcmV0dXJuIGV2dC5yZXNwb25zZSA9PT0gQ2FsZW5kYXJFdmVudFJlc3BvbnNlLlJlamVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1heWJlcygpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLmRheSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXkuZXZlbnRzLmZpbHRlcigoZXZ0KSA9PiB7XG4gICAgICByZXR1cm4gZXZ0LnJlc3BvbnNlID09PSBDYWxlbmRhckV2ZW50UmVzcG9uc2UuTWF5YmU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==