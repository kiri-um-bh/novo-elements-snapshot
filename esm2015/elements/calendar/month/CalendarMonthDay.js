import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CalendarEventResponse } from '../../../utils/calendar-utils/CalendarUtils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pipe/DayOfMonth.pipe";
import * as i3 from "../../../pipes/group-by/GroupBy";
function NovoCalendarMonthDayElement_ng_template_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.day.badgeTotal);
} }
function NovoCalendarMonthDayElement_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function NovoCalendarMonthDayElement_ng_template_0_div_6_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const type_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); $event.stopPropagation(); return ctx_r6.eventClicked.emit({ event: type_r5 == null ? null : type_r5.value[0] }); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", type_r5 == null ? null : type_r5.value[0] == null ? null : type_r5.value[0].color.primary);
    i0.ɵɵproperty("ngClass", type_r5 == null ? null : type_r5.value[0] == null ? null : type_r5.value[0].cssClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", type_r5 == null ? null : type_r5.value.length, " ");
} }
function NovoCalendarMonthDayElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, NovoCalendarMonthDayElement_ng_template_0_span_1_Template, 2, 1, "span", 3);
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "dayofmonth");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtemplate(6, NovoCalendarMonthDayElement_ng_template_0_div_6_Template, 2, 4, "div", 6);
    i0.ɵɵpipe(7, "groupBy");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.day.badgeTotal > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 3, ctx_r1.day.date, ctx_r1.locale));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(7, 6, ctx_r1.day.events, "type"));
} }
function NovoCalendarMonthDayElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { day: a0, locale: a1, tooltipPosition: a2, eventClicked: a3, accepted: a4, rejected: a5, maybes: a6 }; };
export class NovoCalendarMonthDayElement {
    constructor() {
        this.eventClicked = new EventEmitter();
    }
    get accepted() {
        if (!this.day) {
            return [];
        }
        return this.day.events.filter((evt) => {
            return evt.response === CalendarEventResponse.Accepted;
        });
    }
    get rejected() {
        if (!this.day) {
            return [];
        }
        return this.day.events.filter((evt) => {
            return evt.response === CalendarEventResponse.Rejected;
        });
    }
    get maybes() {
        if (!this.day) {
            return [];
        }
        return this.day.events.filter((evt) => {
            return evt.response === CalendarEventResponse.Maybe;
        });
    }
}
NovoCalendarMonthDayElement.ɵfac = function NovoCalendarMonthDayElement_Factory(t) { return new (t || NovoCalendarMonthDayElement)(); };
NovoCalendarMonthDayElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarMonthDayElement, selectors: [["novo-calendar-month-day"]], hostVars: 22, hostBindings: function NovoCalendarMonthDayElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap("calendar-cell calendar-day-cell " + (ctx.day == null ? null : ctx.day.cssClass));
        i0.ɵɵstyleProp("background-color", ctx.day.backgroundColor);
        i0.ɵɵclassProp("calendar-day-accepted", ctx.accepted.length)("calendar-day-rejected", ctx.rejected.length)("calendar-past", ctx.day.isPast)("calendar-today", ctx.day.isToday)("calendar-future", ctx.day.isFuture)("calendar-weekend", ctx.day.isWeekend)("calendar-in-month", ctx.day.inMonth)("calendar-out-month", !ctx.day.inMonth)("calendar-has-events", ctx.day.events.length > 0);
    } }, inputs: { day: "day", locale: "locale", tooltipPosition: "tooltipPosition", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 10, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "calendar-day-top"], ["class", "calendar-day-badge", 4, "ngIf"], [1, "calendar-day-number"], [1, "calendar-events"], ["class", "calendar-event", 3, "backgroundColor", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "calendar-day-badge"], [1, "calendar-event", 3, "ngClass", "click"]], template: function NovoCalendarMonthDayElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCalendarMonthDayElement_ng_template_0_Template, 8, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoCalendarMonthDayElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction7(2, _c0, ctx.day, ctx.locale, ctx.tooltipPosition, ctx.eventClicked, ctx.accepted, ctx.rejected, ctx.maybes));
    } }, directives: [i1.NgTemplateOutlet, i1.NgIf, i1.NgForOf, i1.NgClass], pipes: [i2.DayOfMonthPipe, i3.GroupByPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarMonthDayElement, [{
        type: Component,
        args: [{
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
                },
            }]
    }], null, { day: [{
            type: Input
        }], locale: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aERheS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoRGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBK0IscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7O0lBT3pHLCtCQUE0RDtJQUFBLFlBQW9CO0lBQUEsaUJBQU87OztJQUEzQixlQUFvQjtJQUFwQiwyQ0FBb0I7Ozs7SUFJaEYsOEJBTUU7SUFEQSxrTkFBUyx3QkFBd0IsU0FBRSx5RUFBcUMsQ0FBQyxJQUFHLElBQUM7SUFDN0UsWUFDRjtJQUFBLGlCQUFNOzs7SUFKSiw2SEFBdUQ7SUFDdkQsOEdBQW9DO0lBRXBDLGVBQ0Y7SUFERSw4RUFDRjs7O0lBWkYsOEJBQ0U7SUFBQSw0RkFBNEQ7SUFDNUQsK0JBQWtDO0lBQUEsWUFBa0M7O0lBQUEsaUJBQU87SUFDN0UsaUJBQU07SUFDTiw4QkFDRTtJQUFBLDBGQU1FOztJQUVKLGlCQUFNOzs7SUFaNkIsZUFBMEI7SUFBMUIsZ0RBQTBCO0lBQ3pCLGVBQWtDO0lBQWxDLDBFQUFrQztJQUtsRSxlQUFrRDtJQUFsRCx5RUFBa0Q7Ozs7QUFtQzVELE1BQU0sT0FBTywyQkFBMkI7SUE5Q3hDO1FBNERFLGlCQUFZLEdBQTJDLElBQUksWUFBWSxFQUE0QixDQUFDO0tBNEJyRztJQTFCQyxJQUFJLFFBQVE7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsUUFBUSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxHQUFHLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3NHQXpDVSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjs7Ozs7UUEzQ3BDLDZIQUNFO1FBZUYsNEZBV0E7OztRQVZFLGVBQXNEO1FBQXRELDREQUFzRCwySkFBQTs7a0RBMEIvQywyQkFBMkI7Y0E5Q3ZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJUO2dCQUNELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsb0RBQW9EO29CQUMvRCwrQkFBK0IsRUFBRSxpQkFBaUI7b0JBQ2xELCtCQUErQixFQUFFLGlCQUFpQjtvQkFDbEQsdUJBQXVCLEVBQUUsWUFBWTtvQkFDckMsd0JBQXdCLEVBQUUsYUFBYTtvQkFDdkMseUJBQXlCLEVBQUUsY0FBYztvQkFDekMsMEJBQTBCLEVBQUUsZUFBZTtvQkFDM0MsMkJBQTJCLEVBQUUsYUFBYTtvQkFDMUMsNEJBQTRCLEVBQUUsY0FBYztvQkFDNUMsNkJBQTZCLEVBQUUsdUJBQXVCO29CQUN0RCx5QkFBeUIsRUFBRSxxQkFBcUI7aUJBQ2pEO2FBQ0Y7Z0JBR0MsR0FBRztrQkFERixLQUFLO1lBSU4sTUFBTTtrQkFETCxLQUFLO1lBSU4sZUFBZTtrQkFEZCxLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLO1lBSU4sWUFBWTtrQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb250aFZpZXdEYXksIENhbGVuZGFyRXZlbnQsIENhbGVuZGFyRXZlbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLW1vbnRoLWRheScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGF5LXRvcFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbGVuZGFyLWRheS1iYWRnZVwiICpuZ0lmPVwiZGF5LmJhZGdlVG90YWwgPiAwXCI+e3sgZGF5LmJhZGdlVG90YWwgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsZW5kYXItZGF5LW51bWJlclwiPnt7IGRheS5kYXRlIHwgZGF5b2Ztb250aDpsb2NhbGUgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ldmVudHNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXItZXZlbnRcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0eXBlIG9mIGRheS5ldmVudHMgfCBncm91cEJ5IDogJ3R5cGUnXCJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cInR5cGU/LnZhbHVlWzBdPy5jb2xvci5wcmltYXJ5XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ0eXBlPy52YWx1ZVswXT8uY3NzQ2xhc3NcIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDp0eXBlPy52YWx1ZVswXX0pXCI+XG4gICAgICAgICAge3t0eXBlPy52YWx1ZS5sZW5ndGh9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICB0b29sdGlwUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvbixcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWQsXG4gICAgICAgIGFjY2VwdGVkOiBhY2NlcHRlZCxcbiAgICAgICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxuICAgICAgICBtYXliZXM6IG1heWJlc1xuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdcImNhbGVuZGFyLWNlbGwgY2FsZW5kYXItZGF5LWNlbGwgXCIgKyBkYXk/LmNzc0NsYXNzJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWRheS1hY2NlcHRlZF0nOiAnYWNjZXB0ZWQubGVuZ3RoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWRheS1yZWplY3RlZF0nOiAncmVqZWN0ZWQubGVuZ3RoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLXBhc3RdJzogJ2RheS5pc1Bhc3QnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItdG9kYXldJzogJ2RheS5pc1RvZGF5JyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWZ1dHVyZV0nOiAnZGF5LmlzRnV0dXJlJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLXdlZWtlbmRdJzogJ2RheS5pc1dlZWtlbmQnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItaW4tbW9udGhdJzogJ2RheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLW91dC1tb250aF0nOiAnIWRheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbGVuZGFyLWhhcy1ldmVudHNdJzogJ2RheS5ldmVudHMubGVuZ3RoID4gMCcsXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdJzogJ2RheS5iYWNrZ3JvdW5kQ29sb3InLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkYXk6IE1vbnRoVmlld0RheTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PigpO1xuXG4gIGdldCBhY2NlcHRlZCgpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLmRheSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXkuZXZlbnRzLmZpbHRlcigoZXZ0KSA9PiB7XG4gICAgICByZXR1cm4gZXZ0LnJlc3BvbnNlID09PSBDYWxlbmRhckV2ZW50UmVzcG9uc2UuQWNjZXB0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmVqZWN0ZWQoKTogQXJyYXk8Q2FsZW5kYXJFdmVudD4ge1xuICAgIGlmICghdGhpcy5kYXkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF5LmV2ZW50cy5maWx0ZXIoKGV2dCkgPT4ge1xuICAgICAgcmV0dXJuIGV2dC5yZXNwb25zZSA9PT0gQ2FsZW5kYXJFdmVudFJlc3BvbnNlLlJlamVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1heWJlcygpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLmRheSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXkuZXZlbnRzLmZpbHRlcigoZXZ0KSA9PiB7XG4gICAgICByZXR1cm4gZXZ0LnJlc3BvbnNlID09PSBDYWxlbmRhckV2ZW50UmVzcG9uc2UuTWF5YmU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==