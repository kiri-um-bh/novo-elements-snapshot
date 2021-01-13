import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
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
        (click)="eventClicked.emit({ event: dayEvent.event })"
      >
        <div class="cal-event-ribbon" [style.backgroundColor]="dayEvent.event.color.primary"></div>
        <div class="cal-event-group">
          <div class="cal-event-title">{{ dayEvent.event.title }}</div>
          <div class="cal-event-description">{{ dayEvent.event?.description }}</div>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{ dayEvent: dayEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked }"
    >
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2RheS9DYWxlbmRhckRheUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFPOUUsOEJBVUU7SUFGQSw2S0FBUywwREFBNEMsSUFBQztJQUV0RCx5QkFBMkY7SUFDM0YsOEJBQ0U7SUFBQSw4QkFBNkI7SUFBQSxZQUEwQjtJQUFBLGlCQUFNO0lBQzdELDhCQUFtQztJQUFBLFlBQWlDO0lBQUEsaUJBQU07SUFDNUUsaUJBQU07SUFDUixpQkFBTTs7O0lBYkoscUVBQW9EO0lBQ3BELHlFQUF5RCxzREFBQTtJQUV6RCx3REFBbUMsOENBQUEsMkNBQUE7SUFLTCxlQUFzRDtJQUF0RCx1RUFBc0Q7SUFFckQsZUFBMEI7SUFBMUIsaURBQTBCO0lBQ3BCLGVBQWlDO0lBQWpDLDhGQUFpQzs7OztBQVc5RSxNQUFNLE9BQU8sMkJBQTJCO0lBNUJ4QztRQXVDRSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBQ3REOztzR0FaWSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjtRQXpCcEMsOEhBQ0U7UUFpQkYsNEZBSUE7OztRQUhFLGVBQXNEO1FBQXRELDREQUFzRCw0R0FBQTs7a0RBTS9DLDJCQUEyQjtjQTVCdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUO2FBQ0Y7Z0JBR0MsUUFBUTtrQkFEUCxLQUFLO1lBSU4sZUFBZTtrQkFEZCxLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLO1lBSU4sWUFBWTtrQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXlWaWV3RXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1kYXktZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1ldmVudFwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJkYXlFdmVudC5ldmVudC5jb2xvci5zZWNvbmRhcnlcIlxuICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4tZGF5XT1cIiFkYXlFdmVudC5zdGFydHNCZWZvcmVEYXlcIlxuICAgICAgICBbY2xhc3MuY2FsLWVuZHMtd2l0aGluLWRheV09XCIhZGF5RXZlbnQuZW5kc0FmdGVyRGF5XCJcbiAgICAgICAgW25nQ2xhc3NdPVwiZGF5RXZlbnQuZXZlbnQuY3NzQ2xhc3NcIlxuICAgICAgICBbdG9vbHRpcF09XCJkYXlFdmVudC5ldmVudC5kZXNjcmlwdGlvblwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgKGNsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHsgZXZlbnQ6IGRheUV2ZW50LmV2ZW50IH0pXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1yaWJib25cIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImRheUV2ZW50LmV2ZW50LmNvbG9yLnByaW1hcnlcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtdGl0bGVcIj57eyBkYXlFdmVudC5ldmVudC50aXRsZSB9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtZGVzY3JpcHRpb25cIj57eyBkYXlFdmVudC5ldmVudD8uZGVzY3JpcHRpb24gfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRheUV2ZW50OiBkYXlFdmVudCwgdG9vbHRpcFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb24sIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkYXlFdmVudDogRGF5Vmlld0V2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19