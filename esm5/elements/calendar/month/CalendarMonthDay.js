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
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.day.badgeTotal);
} }
function NovoCalendarMonthDayElement_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function NovoCalendarMonthDayElement_ng_template_0_div_6_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r7); var type_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); $event.stopPropagation(); return ctx_r6.eventClicked.emit({ event: type_r5 == null ? null : type_r5.value[0] }); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var type_r5 = ctx.$implicit;
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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.day.badgeTotal > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 3, ctx_r1.day.date, ctx_r1.locale));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(7, 6, ctx_r1.day.events, "type"));
} }
function NovoCalendarMonthDayElement_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { day: a0, locale: a1, tooltipPosition: a2, eventClicked: a3, accepted: a4, rejected: a5, maybes: a6 }; };
var NovoCalendarMonthDayElement = /** @class */ (function () {
    function NovoCalendarMonthDayElement() {
        this.eventClicked = new EventEmitter();
    }
    Object.defineProperty(NovoCalendarMonthDayElement.prototype, "accepted", {
        get: function () {
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
        get: function () {
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
        get: function () {
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
    NovoCalendarMonthDayElement.ɵfac = function NovoCalendarMonthDayElement_Factory(t) { return new (t || NovoCalendarMonthDayElement)(); };
    NovoCalendarMonthDayElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarMonthDayElement, selectors: [["novo-calendar-month-day"]], hostVars: 22, hostBindings: function NovoCalendarMonthDayElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("calendar-cell calendar-day-cell " + (ctx.day == null ? null : ctx.day.cssClass));
            i0.ɵɵstyleProp("background-color", ctx.day.backgroundColor);
            i0.ɵɵclassProp("calendar-day-accepted", ctx.accepted.length)("calendar-day-rejected", ctx.rejected.length)("calendar-past", ctx.day.isPast)("calendar-today", ctx.day.isToday)("calendar-future", ctx.day.isFuture)("calendar-weekend", ctx.day.isWeekend)("calendar-in-month", ctx.day.inMonth)("calendar-out-month", !ctx.day.inMonth)("calendar-has-events", ctx.day.events.length > 0);
        } }, inputs: { day: "day", locale: "locale", tooltipPosition: "tooltipPosition", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 10, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "calendar-day-top"], ["class", "calendar-day-badge", 4, "ngIf"], [1, "calendar-day-number"], [1, "calendar-events"], ["class", "calendar-event", 3, "backgroundColor", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "calendar-day-badge"], [1, "calendar-event", 3, "ngClass", "click"]], template: function NovoCalendarMonthDayElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoCalendarMonthDayElement_ng_template_0_Template, 8, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NovoCalendarMonthDayElement_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction7(2, _c0, ctx.day, ctx.locale, ctx.tooltipPosition, ctx.eventClicked, ctx.accepted, ctx.rejected, ctx.maybes));
        } }, directives: [i1.NgTemplateOutlet, i1.NgIf, i1.NgForOf, i1.NgClass], pipes: [i2.DayOfMonthPipe, i3.GroupByPipe], encapsulation: 2 });
    return NovoCalendarMonthDayElement;
}());
export { NovoCalendarMonthDayElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarMonthDayElement, [{
        type: Component,
        args: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aERheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoRGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBK0IscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7O0lBT3pHLCtCQUE0RDtJQUFBLFlBQW9CO0lBQUEsaUJBQU87OztJQUEzQixlQUFvQjtJQUFwQiwyQ0FBb0I7Ozs7SUFJaEYsOEJBTUU7SUFEQSw4TUFBUyx3QkFBd0IsU0FBRSx5RUFBcUMsQ0FBQyxJQUFHLElBQUM7SUFDN0UsWUFDRjtJQUFBLGlCQUFNOzs7SUFKSiw2SEFBdUQ7SUFDdkQsOEdBQW9DO0lBRXBDLGVBQ0Y7SUFERSw4RUFDRjs7O0lBWkYsOEJBQ0U7SUFBQSw0RkFBNEQ7SUFDNUQsK0JBQWtDO0lBQUEsWUFBa0M7O0lBQUEsaUJBQU87SUFDN0UsaUJBQU07SUFDTiw4QkFDRTtJQUFBLDBGQU1FOztJQUVKLGlCQUFNOzs7SUFaNkIsZUFBMEI7SUFBMUIsZ0RBQTBCO0lBQ3pCLGVBQWtDO0lBQWxDLDBFQUFrQztJQUtsRSxlQUFrRDtJQUFsRCx5RUFBa0Q7Ozs7QUFYNUQ7SUFBQTtRQTRERSxpQkFBWSxHQUEyQyxJQUFJLFlBQVksRUFBNEIsQ0FBQztLQTRCckc7SUExQkMsc0JBQUksaURBQVE7YUFBWjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUc7Z0JBQ2hDLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFRO2FBQVo7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsUUFBUSxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBTTthQUFWO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRztnQkFDaEMsT0FBTyxHQUFHLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLEtBQUssQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBOzBHQXpDVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7Ozs7WUEzQ3BDLDZIQUNFO1lBZUYsNEZBV0E7OztZQVZFLGVBQXNEO1lBQXRELDREQUFzRCwySkFBQTs7c0NBdkI1RDtDQTJGQyxBQXhGRCxJQXdGQztTQTFDWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQTlDdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRSxpa0NBNkJUO2dCQUNELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsb0RBQW9EO29CQUMvRCwrQkFBK0IsRUFBRSxpQkFBaUI7b0JBQ2xELCtCQUErQixFQUFFLGlCQUFpQjtvQkFDbEQsdUJBQXVCLEVBQUUsWUFBWTtvQkFDckMsd0JBQXdCLEVBQUUsYUFBYTtvQkFDdkMseUJBQXlCLEVBQUUsY0FBYztvQkFDekMsMEJBQTBCLEVBQUUsZUFBZTtvQkFDM0MsMkJBQTJCLEVBQUUsYUFBYTtvQkFDMUMsNEJBQTRCLEVBQUUsY0FBYztvQkFDNUMsNkJBQTZCLEVBQUUsdUJBQXVCO29CQUN0RCx5QkFBeUIsRUFBRSxxQkFBcUI7aUJBQ2pEO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vbnRoVmlld0RheSwgQ2FsZW5kYXJFdmVudCwgQ2FsZW5kYXJFdmVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItbW9udGgtZGF5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1kYXktdG9wXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsZW5kYXItZGF5LWJhZGdlXCIgKm5nSWY9XCJkYXkuYmFkZ2VUb3RhbCA+IDBcIj57eyBkYXkuYmFkZ2VUb3RhbCB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhci1kYXktbnVtYmVyXCI+e3sgZGF5LmRhdGUgfCBkYXlvZm1vbnRoOmxvY2FsZSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWV2ZW50c1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWxlbmRhci1ldmVudFwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHR5cGUgb2YgZGF5LmV2ZW50cyB8IGdyb3VwQnkgOiAndHlwZSdcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwidHlwZT8udmFsdWVbMF0/LmNvbG9yLnByaW1hcnlcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInR5cGU/LnZhbHVlWzBdPy5jc3NDbGFzc1wiXG4gICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OnR5cGU/LnZhbHVlWzBdfSlcIj5cbiAgICAgICAgICB7e3R5cGU/LnZhbHVlLmxlbmd0aH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogdG9vbHRpcFBvc2l0aW9uLFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZCxcbiAgICAgICAgYWNjZXB0ZWQ6IGFjY2VwdGVkLFxuICAgICAgICByZWplY3RlZDogcmVqZWN0ZWQsXG4gICAgICAgIG1heWJlczogbWF5YmVzXG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ1wiY2FsZW5kYXItY2VsbCBjYWxlbmRhci1kYXktY2VsbCBcIiArIGRheT8uY3NzQ2xhc3MnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItZGF5LWFjY2VwdGVkXSc6ICdhY2NlcHRlZC5sZW5ndGgnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItZGF5LXJlamVjdGVkXSc6ICdyZWplY3RlZC5sZW5ndGgnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItcGFzdF0nOiAnZGF5LmlzUGFzdCcsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci10b2RheV0nOiAnZGF5LmlzVG9kYXknLFxuICAgICdbY2xhc3MuY2FsZW5kYXItZnV0dXJlXSc6ICdkYXkuaXNGdXR1cmUnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItd2Vla2VuZF0nOiAnZGF5LmlzV2Vla2VuZCcsXG4gICAgJ1tjbGFzcy5jYWxlbmRhci1pbi1tb250aF0nOiAnZGF5LmluTW9udGgnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItb3V0LW1vbnRoXSc6ICchZGF5LmluTW9udGgnLFxuICAgICdbY2xhc3MuY2FsZW5kYXItaGFzLWV2ZW50c10nOiAnZGF5LmV2ZW50cy5sZW5ndGggPiAwJyxcbiAgICAnW3N0eWxlLmJhY2tncm91bmRDb2xvcl0nOiAnZGF5LmJhY2tncm91bmRDb2xvcicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhck1vbnRoRGF5RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGRheTogTW9udGhWaWV3RGF5O1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+KCk7XG5cbiAgZ2V0IGFjY2VwdGVkKCk6IEFycmF5PENhbGVuZGFyRXZlbnQ+IHtcbiAgICBpZiAoIXRoaXMuZGF5KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRheS5ldmVudHMuZmlsdGVyKChldnQpID0+IHtcbiAgICAgIHJldHVybiBldnQucmVzcG9uc2UgPT09IENhbGVuZGFyRXZlbnRSZXNwb25zZS5BY2NlcHRlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCByZWplY3RlZCgpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLmRheSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXkuZXZlbnRzLmZpbHRlcigoZXZ0KSA9PiB7XG4gICAgICByZXR1cm4gZXZ0LnJlc3BvbnNlID09PSBDYWxlbmRhckV2ZW50UmVzcG9uc2UuUmVqZWN0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbWF5YmVzKCk6IEFycmF5PENhbGVuZGFyRXZlbnQ+IHtcbiAgICBpZiAoIXRoaXMuZGF5KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRheS5ldmVudHMuZmlsdGVyKChldnQpID0+IHtcbiAgICAgIHJldHVybiBldnQucmVzcG9uc2UgPT09IENhbGVuZGFyRXZlbnRSZXNwb25zZS5NYXliZTtcbiAgICB9KTtcbiAgfVxufVxuIl19