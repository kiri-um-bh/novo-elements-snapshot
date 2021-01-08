import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pipe/Hours.pipe";
function NovoCalendarHourSegmentElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cal-hour-start", ctx_r1.segment.isStart)("cal-after-hour-start", !ctx_r1.segment.isStart);
    i0.ɵɵproperty("ngClass", ctx_r1.segment.cssClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 6, ctx_r1.segment.date, ctx_r1.locale), " ");
} }
function NovoCalendarHourSegmentElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { segment: a0, locale: a1 }; };
export class NovoCalendarHourSegmentElement {
}
NovoCalendarHourSegmentElement.ɵfac = function NovoCalendarHourSegmentElement_Factory(t) { return new (t || NovoCalendarHourSegmentElement)(); };
NovoCalendarHourSegmentElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarHourSegmentElement, selectors: [["novo-calendar-day-hour-segment"]], inputs: { segment: "segment", locale: "locale", customTemplate: "customTemplate" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], [1, "cal-time"]], template: function NovoCalendarHourSegmentElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCalendarHourSegmentElement_ng_template_0_Template, 4, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoCalendarHourSegmentElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, ctx.segment, ctx.locale));
    } }, directives: [i1.NgTemplateOutlet, i1.NgClass], pipes: [i2.HoursPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarHourSegmentElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-day-hour-segment',
                template: `
    <ng-template #defaultTemplate>
      <div
        class="cal-hour-segment"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass"
      >
        <div class="cal-time">
          {{ segment.date | hours: locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale
      }"
    >
    </ng-template>
  `,
            }]
    }], null, { segment: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJIb3VyU2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2RheS9DYWxlbmRhckhvdXJTZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFPeEQsOEJBTUU7SUFBQSw4QkFDRTtJQUFBLFlBQ0Y7O0lBQUEsaUJBQU07SUFDUixpQkFBTTs7O0lBUEosd0RBQXdDLGlEQUFBO0lBRXhDLGlEQUE0QjtJQUcxQixlQUNGO0lBREUseUZBQ0Y7Ozs7QUFhUixNQUFNLE9BQU8sOEJBQThCOzs0R0FBOUIsOEJBQThCO21FQUE5Qiw4QkFBOEI7UUF0QnZDLGdJQUNFO1FBV0YsK0ZBT0E7OztRQU5FLGVBQXNEO1FBQXRELDREQUFzRCxnRkFBQTs7a0RBUy9DLDhCQUE4QjtjQXpCMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO2FBQ0Y7Z0JBR0MsT0FBTztrQkFETixLQUFLO1lBSU4sTUFBTTtrQkFETCxLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERheVZpZXdIb3VyU2VnbWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRheS1ob3VyLXNlZ21lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1ob3VyLXNlZ21lbnRcIlxuICAgICAgICBbY2xhc3MuY2FsLWhvdXItc3RhcnRdPVwic2VnbWVudC5pc1N0YXJ0XCJcbiAgICAgICAgW2NsYXNzLmNhbC1hZnRlci1ob3VyLXN0YXJ0XT1cIiFzZWdtZW50LmlzU3RhcnRcIlxuICAgICAgICBbbmdDbGFzc109XCJzZWdtZW50LmNzc0NsYXNzXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC10aW1lXCI+XG4gICAgICAgICAge3sgc2VnbWVudC5kYXRlIHwgaG91cnM6IGxvY2FsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgc2VnbWVudDogc2VnbWVudCxcbiAgICAgICAgbG9jYWxlOiBsb2NhbGVcbiAgICAgIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBzZWdtZW50OiBEYXlWaWV3SG91clNlZ21lbnQ7XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iXX0=