import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
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
          <div class="calendar-month">{{ viewDate | month: locale }}</div>
          <button theme="icon" icon="next" (click)="nextMonth($event)"></button>
        </div>
        <div class="calendar-weekdays">
          <div
            class="calendar-weekday"
            *ngFor="let day of days"
            [class.calendar-past]="day.isPast"
            [class.calendar-today]="day.isToday"
            [class.calendar-future]="day.isFuture"
            [class.calendar-weekend]="day.isWeekend"
          >
            {{ day.date | weekday: locale }}
          </div>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{ days: days, locale: locale, viewDate: viewDate }"
    >
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL21vbnRoL0NhbGVuZGFyTW9udGhIZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7Ozs7Ozs7SUFjMUIsOEJBUUU7SUFBQSxZQUNGOztJQUFBLGlCQUFNOzs7O0lBTkosOENBQWtDLGtDQUFBLG9DQUFBLHNDQUFBO0lBS2xDLGVBQ0Y7SUFERSxpRkFDRjs7OztJQWhCSiw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsaUNBQTBFO0lBQXJDLHFOQUEyQjtJQUFDLGlCQUFTO0lBQzFFLDhCQUE0QjtJQUFBLFlBQThCOztJQUFBLGlCQUFNO0lBQ2hFLGlDQUFzRTtJQUFyQyxxTkFBMkI7SUFBQyxpQkFBUztJQUN4RSxpQkFBTTtJQUNOLDhCQUNFO0lBQUEsOEZBUUU7SUFFSixpQkFBTTtJQUNSLGlCQUFNOzs7SUFmMEIsZUFBOEI7SUFBOUIsMEVBQThCO0lBTXhELGVBQXdCO0lBQXhCLHFDQUF3Qjs7OztBQWtCcEMsTUFBTSxPQUFPLDhCQUE4QjtJQS9CM0M7UUE0Q0U7O1dBRUc7UUFFSCxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0tBU3pEO0lBUEMsU0FBUyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OzRHQXpCVSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQTVCdkMsZ0lBQ0U7UUFvQkYsK0ZBSUE7OztRQUhFLGVBQXNEO1FBQXRELDREQUFzRCwyRkFBQTs7a0RBTS9DLDhCQUE4QjtjQS9CMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2FBQ0Y7Z0JBR0MsUUFBUTtrQkFEUCxLQUFLO1lBSU4sSUFBSTtrQkFESCxLQUFLO1lBSU4sTUFBTTtrQkFETCxLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLO1lBT04sY0FBYztrQkFEYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFdlZWtEYXkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1tb250aC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyLXRvcFwiPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZNb250aCgkZXZlbnQpXCI+PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLW1vbnRoXCI+e3sgdmlld0RhdGUgfCBtb250aDogbG9jYWxlIH19PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwibmV4dFwiIChjbGljayk9XCJuZXh0TW9udGgoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXdlZWtkYXlzXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjYWxlbmRhci13ZWVrZGF5XCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c1wiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItcGFzdF09XCJkYXkuaXNQYXN0XCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci10b2RheV09XCJkYXkuaXNUb2RheVwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItZnV0dXJlXT1cImRheS5pc0Z1dHVyZVwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItd2Vla2VuZF09XCJkYXkuaXNXZWVrZW5kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBkYXkuZGF0ZSB8IHdlZWtkYXk6IGxvY2FsZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZGF5czogZGF5cywgbG9jYWxlOiBsb2NhbGUsIHZpZXdEYXRlOiB2aWV3RGF0ZSB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdmlld0RhdGU6IERhdGU7XG5cbiAgQElucHV0KClcbiAgZGF5czogV2Vla0RheVtdO1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByZXZNb250aChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZucy5zdWJNb250aHModGhpcy52aWV3RGF0ZSwgMSkpO1xuICB9XG5cbiAgbmV4dE1vbnRoKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChkYXRlRm5zLmFkZE1vbnRocyh0aGlzLnZpZXdEYXRlLCAxKSk7XG4gIH1cbn1cbiJdfQ==