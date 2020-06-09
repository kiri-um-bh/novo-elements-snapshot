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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cal-hour-start", ctx_r1.segment.isStart)("cal-after-hour-start", !ctx_r1.segment.isStart);
    i0.ɵɵproperty("ngClass", ctx_r1.segment.cssClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 6, ctx_r1.segment.date, ctx_r1.locale), " ");
} }
function NovoCalendarHourSegmentElement_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0, a1) { return { segment: a0, locale: a1 }; };
var NovoCalendarHourSegmentElement = /** @class */ (function () {
    function NovoCalendarHourSegmentElement() {
    }
    NovoCalendarHourSegmentElement.ɵfac = function NovoCalendarHourSegmentElement_Factory(t) { return new (t || NovoCalendarHourSegmentElement)(); };
    NovoCalendarHourSegmentElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarHourSegmentElement, selectors: [["novo-calendar-day-hour-segment"]], inputs: { segment: "segment", locale: "locale", customTemplate: "customTemplate" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], [1, "cal-time"]], template: function NovoCalendarHourSegmentElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoCalendarHourSegmentElement_ng_template_0_Template, 4, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NovoCalendarHourSegmentElement_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, ctx.segment, ctx.locale));
        } }, directives: [i1.NgTemplateOutlet, i1.NgClass], pipes: [i2.HoursPipe], encapsulation: 2 });
    return NovoCalendarHourSegmentElement;
}());
export { NovoCalendarHourSegmentElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarHourSegmentElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-day-hour-segment',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-hour-segment\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | hours:locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  ",
            }]
    }], null, { segment: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJIb3VyU2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJIb3VyU2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBT3hELDhCQUtFO0lBQUEsOEJBQ0U7SUFBQSxZQUNGOztJQUFBLGlCQUFNO0lBQ1IsaUJBQU07OztJQU5KLHdEQUF3QyxpREFBQTtJQUV4QyxpREFBNEI7SUFFMUIsZUFDRjtJQURFLHlGQUNGOzs7O0FBWFI7SUFBQTtLQWdDQztnSEFUWSw4QkFBOEI7dUVBQTlCLDhCQUE4QjtZQXBCdkMsZ0lBQ0U7WUFVRiwrRkFNQTs7O1lBTEUsZUFBc0Q7WUFBdEQsNERBQXNELGdGQUFBOzt5Q0FsQjVEO0NBbUNDLEFBaENELElBZ0NDO1NBVFksOEJBQThCO2tEQUE5Qiw4QkFBOEI7Y0F2QjFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUUsNmpCQW1CVDthQUNGOztrQkFFRSxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERheVZpZXdIb3VyU2VnbWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRheS1ob3VyLXNlZ21lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1ob3VyLXNlZ21lbnRcIlxuICAgICAgICBbY2xhc3MuY2FsLWhvdXItc3RhcnRdPVwic2VnbWVudC5pc1N0YXJ0XCJcbiAgICAgICAgW2NsYXNzLmNhbC1hZnRlci1ob3VyLXN0YXJ0XT1cIiFzZWdtZW50LmlzU3RhcnRcIlxuICAgICAgICBbbmdDbGFzc109XCJzZWdtZW50LmNzc0NsYXNzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtdGltZVwiPlxuICAgICAgICAgIHt7IHNlZ21lbnQuZGF0ZSB8IGhvdXJzOmxvY2FsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgc2VnbWVudDogc2VnbWVudCxcbiAgICAgICAgbG9jYWxlOiBsb2NhbGVcbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBzZWdtZW50OiBEYXlWaWV3SG91clNlZ21lbnQ7XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iXX0=