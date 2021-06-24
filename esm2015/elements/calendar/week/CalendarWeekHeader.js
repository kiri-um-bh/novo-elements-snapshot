import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pipe/Weekday.pipe";
import * as i3 from "../pipe/MonthDay.pipe";
function NovoCalendarWeekHeaderElement_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function NovoCalendarWeekHeaderElement_ng_template_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const day_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.dayClicked.emit({ date: day_r4.date }); })("dragEnter", function NovoCalendarWeekHeaderElement_ng_template_0_div_1_Template_div_dragEnter_0_listener() { const day_r4 = ctx.$implicit; return day_r4.dragOver = true; })("dragLeave", function NovoCalendarWeekHeaderElement_ng_template_0_div_1_Template_div_dragLeave_0_listener() { const day_r4 = ctx.$implicit; return day_r4.dragOver = false; })("drop", function NovoCalendarWeekHeaderElement_ng_template_0_div_1_Template_div_drop_0_listener($event) { i0.ɵɵrestoreView(_r6); const day_r4 = ctx.$implicit; const ctx_r9 = i0.ɵɵnextContext(2); day_r4.dragOver = false; return ctx_r9.eventDropped.emit({ event: $event.dropData.event, newStart: day_r4.date }); });
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "weekday");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "br");
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "monthday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cal-past", day_r4.isPast)("cal-today", day_r4.isToday)("cal-future", day_r4.isFuture)("cal-weekend", day_r4.isWeekend)("cal-drag-over", day_r4.dragOver);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(3, 12, day_r4.date, ctx_r3.locale, "long"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 16, day_r4.date, ctx_r3.locale));
} }
function NovoCalendarWeekHeaderElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, NovoCalendarWeekHeaderElement_ng_template_0_div_1_Template, 8, 19, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.days);
} }
function NovoCalendarWeekHeaderElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3) { return { days: a0, locale: a1, dayClicked: a2, eventDropped: a3 }; };
export class NovoCalendarWeekHeaderElement {
    constructor() {
        this.dayClicked = new EventEmitter();
        this.eventDropped = new EventEmitter();
    }
}
NovoCalendarWeekHeaderElement.ɵfac = function NovoCalendarWeekHeaderElement_Factory(t) { return new (t || NovoCalendarWeekHeaderElement)(); };
NovoCalendarWeekHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarWeekHeaderElement, selectors: [["novo-calendar-week-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayClicked: "dayClicked", eventDropped: "eventDropped" }, decls: 3, vars: 7, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "cal-drag-over", "click", "dragEnter", "dragLeave", "drop", 4, "ngFor", "ngForOf"], ["mwlDroppable", "", 1, "cal-header", 3, "click", "dragEnter", "dragLeave", "drop"]], template: function NovoCalendarWeekHeaderElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCalendarWeekHeaderElement_ng_template_0_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoCalendarWeekHeaderElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, ctx.days, ctx.locale, ctx.dayClicked, ctx.eventDropped));
    } }, directives: [i1.NgTemplateOutlet, i1.NgForOf], pipes: [i2.WeekdayPipe, i3.MonthDayPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarWeekHeaderElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-week-header',
                template: `
    <ng-template #defaultTemplate>
      <div class="cal-day-headers">
        <div
          class="cal-header"
          *ngFor="let day of days"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          [class.cal-drag-over]="day.dragOver"
          (click)="dayClicked.emit({date: day.date})"
          mwlDroppable
          (dragEnter)="day.dragOver = true"
          (dragLeave)="day.dragOver = false"
          (drop)="day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})">
          <b>{{ day.date | weekday:locale:'long'}}</b><br>
          <span>{{ day.date | monthday:locale }}</span>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{days: days, locale: locale, dayClicked: dayClicked, eventDropped: eventDropped}">
    </ng-template>
  `,
            }]
    }], null, { days: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], dayClicked: [{
            type: Output
        }], eventDropped: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3dlZWsvQ2FsZW5kYXJXZWVrSGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBUTVFLDhCQWFFO0lBTEEsb05BQVMsNkNBQWlDLElBQUMsc0tBRWYsSUFBSSxJQUZXLHNLQUdmLEtBQUssSUFIVSxzTkFJcEIsS0FBSyxTQUFFLGlGQUFxRSxJQUp4RDtJQUszQyx5QkFBRztJQUFBLFlBQXFDOztJQUFBLGlCQUFJO0lBQUEscUJBQzVDO0lBQUEsNEJBQU07SUFBQSxZQUFnQzs7SUFBQSxpQkFBTztJQUMvQyxpQkFBTTs7OztJQVpKLHlDQUE2Qiw2QkFBQSwrQkFBQSxpQ0FBQSxrQ0FBQTtJQVUxQixlQUFxQztJQUFyQywrRUFBcUM7SUFDbEMsZUFBZ0M7SUFBaEMsdUVBQWdDOzs7SUFmMUMsOEJBQ0U7SUFBQSw2RkFhRTtJQUdKLGlCQUFNOzs7SUFkRixlQUF3QjtJQUF4QixxQ0FBd0I7Ozs7QUFzQmxDLE1BQU0sT0FBTyw2QkFBNkI7SUE3QjFDO1FBd0NFLGVBQVUsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFHOUUsaUJBQVksR0FBMkQsSUFBSSxZQUFZLEVBQTRDLENBQUM7S0FDckk7OzBHQWZZLDZCQUE2QjtrRUFBN0IsNkJBQTZCO1FBMUJ0QywrSEFDRTtRQW1CRiw4RkFHQTs7O1FBRkUsZUFBc0Q7UUFBdEQsNERBQXNELCtHQUFBOztrREFLL0MsNkJBQTZCO2NBN0J6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0Y7Z0JBR0MsSUFBSTtrQkFESCxLQUFLO1lBSU4sTUFBTTtrQkFETCxLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLO1lBSU4sVUFBVTtrQkFEVCxNQUFNO1lBSVAsWUFBWTtrQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50LCBXZWVrRGF5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItd2Vlay1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1kYXktaGVhZGVyc1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtaGVhZGVyXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtcGFzdF09XCJkYXkuaXNQYXN0XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXRvZGF5XT1cImRheS5pc1RvZGF5XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLWZ1dHVyZV09XCJkYXkuaXNGdXR1cmVcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtd2Vla2VuZF09XCJkYXkuaXNXZWVrZW5kXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLWRyYWctb3Zlcl09XCJkYXkuZHJhZ092ZXJcIlxuICAgICAgICAgIChjbGljayk9XCJkYXlDbGlja2VkLmVtaXQoe2RhdGU6IGRheS5kYXRlfSlcIlxuICAgICAgICAgIG13bERyb3BwYWJsZVxuICAgICAgICAgIChkcmFnRW50ZXIpPVwiZGF5LmRyYWdPdmVyID0gdHJ1ZVwiXG4gICAgICAgICAgKGRyYWdMZWF2ZSk9XCJkYXkuZHJhZ092ZXIgPSBmYWxzZVwiXG4gICAgICAgICAgKGRyb3ApPVwiZGF5LmRyYWdPdmVyID0gZmFsc2U7IGV2ZW50RHJvcHBlZC5lbWl0KHtldmVudDogJGV2ZW50LmRyb3BEYXRhLmV2ZW50LCBuZXdTdGFydDogZGF5LmRhdGV9KVwiPlxuICAgICAgICAgIDxiPnt7IGRheS5kYXRlIHwgd2Vla2RheTpsb2NhbGU6J2xvbmcnfX08L2I+PGJyPlxuICAgICAgICAgIDxzcGFuPnt7IGRheS5kYXRlIHwgbW9udGhkYXk6bG9jYWxlIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXlzOiBkYXlzLCBsb2NhbGU6IGxvY2FsZSwgZGF5Q2xpY2tlZDogZGF5Q2xpY2tlZCwgZXZlbnREcm9wcGVkOiBldmVudERyb3BwZWR9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyV2Vla0hlYWRlckVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkYXlzOiBXZWVrRGF5W107XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGRheUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBldmVudERyb3BwZWQ6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50OyBuZXdTdGFydDogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudDsgbmV3U3RhcnQ6IERhdGUgfT4oKTtcbn1cbiJdfQ==