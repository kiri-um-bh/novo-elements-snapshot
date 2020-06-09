import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as dateFns from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../button/Button";
import * as i3 from "../pipe/Month.pipe";
import * as i4 from "../pipe/Weekday.pipe";
function NovoCalendarMonthHeaderElement_ng_template_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "weekday");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("calendar-past", day_r4.isPast)("calendar-today", day_r4.isToday)("calendar-future", day_r4.isFuture)("calendar-weekend", day_r4.isWeekend);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 9, day_r4.date, ctx_r3.locale), " ");
} }
function NovoCalendarMonthHeaderElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵlistener("click", function NovoCalendarMonthHeaderElement_ng_template_0_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.prevMonth($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 6);
    i0.ɵɵlistener("click", function NovoCalendarMonthHeaderElement_ng_template_0_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.nextMonth($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtemplate(8, NovoCalendarMonthHeaderElement_ng_template_0_div_8_Template, 3, 12, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 2, ctx_r1.viewDate, ctx_r1.locale));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.days);
} }
function NovoCalendarMonthHeaderElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2) { return { days: a0, locale: a1, viewDate: a2 }; };
export class NovoCalendarMonthHeaderElement {
    constructor() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    prevMonth(event) {
        this.viewDateChange.emit(dateFns.subMonths(this.viewDate, 1));
    }
    nextMonth(event) {
        this.viewDateChange.emit(dateFns.addMonths(this.viewDate, 1));
    }
}
NovoCalendarMonthHeaderElement.ɵfac = function NovoCalendarMonthHeaderElement_Factory(t) { return new (t || NovoCalendarMonthHeaderElement)(); };
NovoCalendarMonthHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarMonthHeaderElement, selectors: [["novo-calendar-month-header"]], inputs: { viewDate: "viewDate", days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { viewDateChange: "viewDateChange" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "calendar-header"], [1, "calendar-header-top"], ["theme", "icon", "icon", "previous", 3, "click"], [1, "calendar-month"], ["theme", "icon", "icon", "next", 3, "click"], [1, "calendar-weekdays"], ["class", "calendar-weekday", 3, "calendar-past", "calendar-today", "calendar-future", "calendar-weekend", 4, "ngFor", "ngForOf"], [1, "calendar-weekday"]], template: function NovoCalendarMonthHeaderElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCalendarMonthHeaderElement_ng_template_0_Template, 9, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoCalendarMonthHeaderElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx.days, ctx.locale, ctx.viewDate));
    } }, directives: [i1.NgTemplateOutlet, i2.NovoButtonElement, i1.NgForOf], pipes: [i3.MonthPipe, i4.WeekdayPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarMonthHeaderElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-month-header',
                template: `
    <ng-template #defaultTemplate>
      <div class="calendar-header">
        <div class="calendar-header-top">
          <button theme="icon" icon="previous" (click)="prevMonth($event)"></button>
          <div class="calendar-month">{{ viewDate | month:locale }}</div>
          <button theme="icon" icon="next" (click)="nextMonth($event)"></button>
        </div>
        <div class="calendar-weekdays">
          <div
            class="calendar-weekday"
            *ngFor="let day of days"
            [class.calendar-past]="day.isPast"
            [class.calendar-today]="day.isToday"
            [class.calendar-future]="day.isFuture"
            [class.calendar-weekend]="day.isWeekend">
            {{ day.date | weekday:locale }}
          </div>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{days: days, locale: locale, viewDate: viewDate}">
    </ng-template>
  `,
            }]
    }], null, { viewDate: [{
            type: Input
        }], days: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], viewDateChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoSGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOzs7Ozs7O0lBYTFCLDhCQU9FO0lBQUEsWUFDRjs7SUFBQSxpQkFBTTs7OztJQUxKLDhDQUFrQyxrQ0FBQSxvQ0FBQSxzQ0FBQTtJQUlsQyxlQUNGO0lBREUsaUZBQ0Y7Ozs7SUFmSiw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsaUNBQTBFO0lBQXJDLHFOQUEyQjtJQUFDLGlCQUFTO0lBQzFFLDhCQUE0QjtJQUFBLFlBQTZCOztJQUFBLGlCQUFNO0lBQy9ELGlDQUFzRTtJQUFyQyxxTkFBMkI7SUFBQyxpQkFBUztJQUN4RSxpQkFBTTtJQUNOLDhCQUNFO0lBQUEsOEZBT0U7SUFFSixpQkFBTTtJQUNSLGlCQUFNOzs7SUFkMEIsZUFBNkI7SUFBN0IsMEVBQTZCO0lBTXZELGVBQXdCO0lBQXhCLHFDQUF3Qjs7OztBQWdCcEMsTUFBTSxPQUFPLDhCQUE4QjtJQTdCM0M7UUEwQ0U7O1dBRUc7UUFFSCxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0tBU3pEO0lBUEMsU0FBUyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OzRHQXpCVSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQTFCdkMsZ0lBQ0U7UUFtQkYsK0ZBR0E7OztRQUZFLGVBQXNEO1FBQXRELDREQUFzRCwyRkFBQTs7a0RBSy9DLDhCQUE4QjtjQTdCMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDthQUNGOztrQkFFRSxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLOztrQkFNTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWVrRGF5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1tb250aC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyLXRvcFwiPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZNb250aCgkZXZlbnQpXCI+PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLW1vbnRoXCI+e3sgdmlld0RhdGUgfCBtb250aDpsb2NhbGUgfX08L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCI+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItd2Vla2RheXNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNhbGVuZGFyLXdlZWtkYXlcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci1wYXN0XT1cImRheS5pc1Bhc3RcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLXRvZGF5XT1cImRheS5pc1RvZGF5XCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci1mdXR1cmVdPVwiZGF5LmlzRnV0dXJlXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci13ZWVrZW5kXT1cImRheS5pc1dlZWtlbmRcIj5cbiAgICAgICAgICAgIHt7IGRheS5kYXRlIHwgd2Vla2RheTpsb2NhbGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGF5czogZGF5cywgbG9jYWxlOiBsb2NhbGUsIHZpZXdEYXRlOiB2aWV3RGF0ZX1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQge1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICBASW5wdXQoKVxuICBkYXlzOiBXZWVrRGF5W107XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJldk1vbnRoKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChkYXRlRm5zLnN1Yk1vbnRocyh0aGlzLnZpZXdEYXRlLCAxKSk7XG4gIH1cblxuICBuZXh0TW9udGgoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KGRhdGVGbnMuYWRkTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKTtcbiAgfVxufVxuIl19