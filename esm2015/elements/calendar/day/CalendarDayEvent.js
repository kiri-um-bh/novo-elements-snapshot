import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../tooltip/Tooltip.directive";
function NovoCalendarDayEventElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function NovoCalendarDayEventElement_ng_template_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.eventClicked.emit({ event: ctx_r3.dayEvent.event }); });
    i0.ɵɵelement(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("border-color", ctx_r1.dayEvent.event.color.secondary);
    i0.ɵɵclassProp("cal-starts-within-day", !ctx_r1.dayEvent.startsBeforeDay)("cal-ends-within-day", !ctx_r1.dayEvent.endsAfterDay);
    i0.ɵɵproperty("ngClass", ctx_r1.dayEvent.event.cssClass)("tooltip", ctx_r1.dayEvent.event.description)("tooltipPosition", ctx_r1.tooltipPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r1.dayEvent.event.color.primary);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.dayEvent.event.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.dayEvent.event == null ? null : ctx_r1.dayEvent.event.description);
} }
function NovoCalendarDayEventElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2) { return { dayEvent: a0, tooltipPosition: a1, eventClicked: a2 }; };
export class NovoCalendarDayEventElement {
    constructor() {
        this.eventClicked = new EventEmitter();
    }
}
NovoCalendarDayEventElement.ɵfac = function NovoCalendarDayEventElement_Factory(t) { return new (t || NovoCalendarDayEventElement)(); };
NovoCalendarDayEventElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarDayEventElement, selectors: [["novo-calendar-day-event"]], inputs: { dayEvent: "dayEvent", tooltipPosition: "tooltipPosition", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event", 3, "ngClass", "tooltip", "tooltipPosition", "click"], [1, "cal-event-ribbon"], [1, "cal-event-group"], [1, "cal-event-title"], [1, "cal-event-description"]], template: function NovoCalendarDayEventElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCalendarDayEventElement_ng_template_0_Template, 7, 13, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoCalendarDayEventElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx.dayEvent, ctx.tooltipPosition, ctx.eventClicked));
    } }, directives: [i1.NgTemplateOutlet, i1.NgClass, i2.TooltipDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarDayEventElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-day-event',
                template: `
    <ng-template #defaultTemplate>
      <div
        class="cal-event"
        [style.borderColor]="dayEvent.event.color.secondary"
        [class.cal-starts-within-day]="!dayEvent.startsBeforeDay"
        [class.cal-ends-within-day]="!dayEvent.endsAfterDay"
        [ngClass]="dayEvent.event.cssClass"
        [tooltip]="dayEvent.event.description"
        [tooltipPosition]="tooltipPosition"
        (click)="eventClicked.emit({event: dayEvent.event})">
          <div class="cal-event-ribbon" [style.backgroundColor]="dayEvent.event.color.primary"></div>
          <div class="cal-event-group">
            <div class="cal-event-title">{{dayEvent.event.title}}</div>
            <div class="cal-event-description">{{dayEvent.event?.description}}</div>
          </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{dayEvent: dayEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked}">
    </ng-template>
  `,
            }]
    }], null, { dayEvent: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJEYXlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzlFLDhCQVNJO0lBREYsNktBQVMsMERBQTBDLElBQUM7SUFDbEQseUJBQTJGO0lBQzNGLDhCQUNFO0lBQUEsOEJBQTZCO0lBQUEsWUFBd0I7SUFBQSxpQkFBTTtJQUMzRCw4QkFBbUM7SUFBQSxZQUErQjtJQUFBLGlCQUFNO0lBQzFFLGlCQUFNO0lBQ1YsaUJBQU07OztJQVpKLHFFQUFvRDtJQUNwRCx5RUFBeUQsc0RBQUE7SUFFekQsd0RBQW1DLDhDQUFBLDJDQUFBO0lBSUgsZUFBc0Q7SUFBdEQsdUVBQXNEO0lBRXJELGVBQXdCO0lBQXhCLGlEQUF3QjtJQUNsQixlQUErQjtJQUEvQiw4RkFBK0I7Ozs7QUFVOUUsTUFBTSxPQUFPLDJCQUEyQjtJQTFCeEM7UUFxQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUN0RDs7c0dBWlksMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUF2QnBDLDhIQUNFO1FBZ0JGLDRGQUdBOzs7UUFGRSxlQUFzRDtRQUF0RCw0REFBc0QsNEdBQUE7O2tEQUsvQywyQkFBMkI7Y0ExQnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7YUFDRjtnQkFHQyxRQUFRO2tCQURQLEtBQUs7WUFJTixlQUFlO2tCQURkLEtBQUs7WUFJTixjQUFjO2tCQURiLEtBQUs7WUFJTixZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERheVZpZXdFdmVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRheS1ldmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cImRheUV2ZW50LmV2ZW50LmNvbG9yLnNlY29uZGFyeVwiXG4gICAgICAgIFtjbGFzcy5jYWwtc3RhcnRzLXdpdGhpbi1kYXldPVwiIWRheUV2ZW50LnN0YXJ0c0JlZm9yZURheVwiXG4gICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4tZGF5XT1cIiFkYXlFdmVudC5lbmRzQWZ0ZXJEYXlcIlxuICAgICAgICBbbmdDbGFzc109XCJkYXlFdmVudC5ldmVudC5jc3NDbGFzc1wiXG4gICAgICAgIFt0b29sdGlwXT1cImRheUV2ZW50LmV2ZW50LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAoY2xpY2spPVwiZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OiBkYXlFdmVudC5ldmVudH0pXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1yaWJib25cIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImRheUV2ZW50LmV2ZW50LmNvbG9yLnByaW1hcnlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXRpdGxlXCI+e3tkYXlFdmVudC5ldmVudC50aXRsZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LWRlc2NyaXB0aW9uXCI+e3tkYXlFdmVudC5ldmVudD8uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2RheUV2ZW50OiBkYXlFdmVudCwgdG9vbHRpcFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb24sIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGRheUV2ZW50OiBEYXlWaWV3RXZlbnQ7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=