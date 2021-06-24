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
        [ngClass]="segment.cssClass">
        <div class="cal-time">
          {{ segment.date | hours:locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale
      }">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJIb3VyU2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJIb3VyU2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBT3hELDhCQUtFO0lBQUEsOEJBQ0U7SUFBQSxZQUNGOztJQUFBLGlCQUFNO0lBQ1IsaUJBQU07OztJQU5KLHdEQUF3QyxpREFBQTtJQUV4QyxpREFBNEI7SUFFMUIsZUFDRjtJQURFLHlGQUNGOzs7O0FBWVIsTUFBTSxPQUFPLDhCQUE4Qjs7NEdBQTlCLDhCQUE4QjttRUFBOUIsOEJBQThCO1FBcEJ2QyxnSUFDRTtRQVVGLCtGQU1BOzs7UUFMRSxlQUFzRDtRQUF0RCw0REFBc0QsZ0ZBQUE7O2tEQVEvQyw4QkFBOEI7Y0F2QjFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7YUFDRjtnQkFHQyxPQUFPO2tCQUROLEtBQUs7WUFJTixNQUFNO2tCQURMLEtBQUs7WUFJTixjQUFjO2tCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF5Vmlld0hvdXJTZWdtZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItZGF5LWhvdXItc2VnbWVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWhvdXItc2VnbWVudFwiXG4gICAgICAgIFtjbGFzcy5jYWwtaG91ci1zdGFydF09XCJzZWdtZW50LmlzU3RhcnRcIlxuICAgICAgICBbY2xhc3MuY2FsLWFmdGVyLWhvdXItc3RhcnRdPVwiIXNlZ21lbnQuaXNTdGFydFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInNlZ21lbnQuY3NzQ2xhc3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC10aW1lXCI+XG4gICAgICAgICAge3sgc2VnbWVudC5kYXRlIHwgaG91cnM6bG9jYWxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBzZWdtZW50OiBzZWdtZW50LFxuICAgICAgICBsb2NhbGU6IGxvY2FsZVxuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHNlZ21lbnQ6IERheVZpZXdIb3VyU2VnbWVudDtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbiJdfQ==