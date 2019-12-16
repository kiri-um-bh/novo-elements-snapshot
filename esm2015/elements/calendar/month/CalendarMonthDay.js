/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/month/CalendarMonthDay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CalendarEventResponse } from '../../../utils/calendar-utils/CalendarUtils';
export class NovoCalendarMonthDayElement {
    constructor() {
        this.eventClicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get accepted() {
        if (!this.day) {
            return [];
        }
        return this.day.events.filter((/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => {
            return evt.response === CalendarEventResponse.Accepted;
        }));
    }
    /**
     * @return {?}
     */
    get rejected() {
        if (!this.day) {
            return [];
        }
        return this.day.events.filter((/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => {
            return evt.response === CalendarEventResponse.Rejected;
        }));
    }
    /**
     * @return {?}
     */
    get maybes() {
        if (!this.day) {
            return [];
        }
        return this.day.events.filter((/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => {
            return evt.response === CalendarEventResponse.Maybe;
        }));
    }
}
NovoCalendarMonthDayElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-calendar-month-day',
                template: `
    <ng-template #defaultTemplate>
      <div class="calendar-day-top">
        <span class="calendar-day-badge" *ngIf="day.badgeTotal > 0">{{ day.badgeTotal }}</span>
        <span class="calendar-day-number">{{ day.date | dayofmonth:locale }}</span>
      </div>
      <div class="calendar-events">
        <div
          class="calendar-event"
          *ngFor="let type of day.events | groupBy : 'type'"
          [style.backgroundColor]="type?.value[0]?.color.primary"
          [ngClass]="type?.value[0]?.cssClass"
          (click)="$event.stopPropagation(); eventClicked.emit({event:type?.value[0]})">
          {{type?.value.length}}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        day: day,
        locale: locale,
        tooltipPosition: tooltipPosition,
        eventClicked: eventClicked,
        accepted: accepted,
        rejected: rejected,
        maybes: maybes
      }">
    </ng-template>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aERheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoRGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUErQixxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBZ0RqSCxNQUFNLE9BQU8sMkJBQTJCO0lBOUN4QztRQTRERSxpQkFBWSxHQUEyQyxJQUFJLFlBQVksRUFBNEIsQ0FBQztJQTRCdEcsQ0FBQzs7OztJQTFCQyxJQUFJLFFBQVE7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsUUFBUSxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxHQUFHLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLG9EQUFvRDtvQkFDL0QsK0JBQStCLEVBQUUsaUJBQWlCO29CQUNsRCwrQkFBK0IsRUFBRSxpQkFBaUI7b0JBQ2xELHVCQUF1QixFQUFFLFlBQVk7b0JBQ3JDLHdCQUF3QixFQUFFLGFBQWE7b0JBQ3ZDLHlCQUF5QixFQUFFLGNBQWM7b0JBQ3pDLDBCQUEwQixFQUFFLGVBQWU7b0JBQzNDLDJCQUEyQixFQUFFLGFBQWE7b0JBQzFDLDRCQUE0QixFQUFFLGNBQWM7b0JBQzVDLDZCQUE2QixFQUFFLHVCQUF1QjtvQkFDdEQseUJBQXlCLEVBQUUscUJBQXFCO2lCQUNqRDthQUNGOzs7a0JBRUUsS0FBSztxQkFHTCxLQUFLOzhCQUdMLEtBQUs7NkJBR0wsS0FBSzsyQkFHTCxNQUFNOzs7O0lBWlAsMENBQ2tCOztJQUVsQiw2Q0FDZTs7SUFFZixzREFDd0I7O0lBRXhCLHFEQUNpQzs7SUFFakMsbURBQ29HIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb250aFZpZXdEYXksIENhbGVuZGFyRXZlbnQsIENhbGVuZGFyRXZlbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLW1vbnRoLWRheScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGF5LXRvcFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbGVuZGFyLWRheS1iYWRnZVwiICpuZ0lmPVwiZGF5LmJhZGdlVG90YWwgPiAwXCI+e3sgZGF5LmJhZGdlVG90YWwgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsZW5kYXItZGF5LW51bWJlclwiPnt7IGRheS5kYXRlIHwgZGF5b2Ztb250aDpsb2NhbGUgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ldmVudHNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXItZXZlbnRcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0eXBlIG9mIGRheS5ldmVudHMgfCBncm91cEJ5IDogJ3R5cGUnXCJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cInR5cGU/LnZhbHVlWzBdPy5jb2xvci5wcmltYXJ5XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ0eXBlPy52YWx1ZVswXT8uY3NzQ2xhc3NcIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDp0eXBlPy52YWx1ZVswXX0pXCI+XG4gICAgICAgICAge3t0eXBlPy52YWx1ZS5sZW5ndGh9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICB0b29sdGlwUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvbixcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWQsXG4gICAgICAgIGFjY2VwdGVkOiBhY2NlcHRlZCxcbiAgICAgICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxuICAgICAgICBtYXliZXM6IG1heWJlc1xuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdcImNhbGVuZGFyLWNlbGwgY2FsZW5kYXItZGF5LWNlbGwgXCIgKyBkYXk/LmNzc0NsYXNzJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWRheS1hY2NlcHRlZF0nOiAnYWNjZXB0ZWQubGVuZ3RoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWRheS1yZWplY3RlZF0nOiAncmVqZWN0ZWQubGVuZ3RoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLXBhc3RdJzogJ2RheS5pc1Bhc3QnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItdG9kYXldJzogJ2RheS5pc1RvZGF5JyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWZ1dHVyZV0nOiAnZGF5LmlzRnV0dXJlJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLXdlZWtlbmRdJzogJ2RheS5pc1dlZWtlbmQnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItaW4tbW9udGhdJzogJ2RheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLW91dC1tb250aF0nOiAnIWRheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWhhcy1ldmVudHNdJzogJ2RheS5ldmVudHMubGVuZ3RoID4gMCcsXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdJzogJ2RheS5iYWNrZ3JvdW5kQ29sb3InLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkYXk6IE1vbnRoVmlld0RheTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIGdldCBhY2NlcHRlZCgpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLmRheSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXkuZXZlbnRzLmZpbHRlcigoZXZ0KSA9PiB7XG4gICAgICByZXR1cm4gZXZ0LnJlc3BvbnNlID09PSBDYWxlbmRhckV2ZW50UmVzcG9uc2UuQWNjZXB0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmVqZWN0ZWQoKTogQXJyYXk8Q2FsZW5kYXJFdmVudD4ge1xuICAgIGlmICghdGhpcy5kYXkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF5LmV2ZW50cy5maWx0ZXIoKGV2dCkgPT4ge1xuICAgICAgcmV0dXJuIGV2dC5yZXNwb25zZSA9PT0gQ2FsZW5kYXJFdmVudFJlc3BvbnNlLlJlamVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1heWJlcygpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLmRheSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXkuZXZlbnRzLmZpbHRlcigoZXZ0KSA9PiB7XG4gICAgICByZXR1cm4gZXZ0LnJlc3BvbnNlID09PSBDYWxlbmRhckV2ZW50UmVzcG9uc2UuTWF5YmU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==