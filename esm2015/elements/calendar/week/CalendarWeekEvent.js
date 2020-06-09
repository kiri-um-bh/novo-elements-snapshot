import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../tooltip/Tooltip.directive";
function NovoCalendarWeekEventElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function NovoCalendarWeekEventElement_ng_template_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.eventClicked.emit({ event: ctx_r3.weekEvent.event }); });
    i0.ɵɵelement(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cal-starts-within-week", !ctx_r1.weekEvent.startsBeforeWeek)("cal-ends-within-week", !ctx_r1.weekEvent.endsAfterWeek);
    i0.ɵɵproperty("ngClass", ctx_r1.weekEvent.event == null ? null : ctx_r1.weekEvent.event.cssClass)("tooltip", ctx_r1.weekEvent.event.description)("tooltipPosition", ctx_r1.tooltipPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r1.weekEvent.event.color.primary);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.weekEvent.event == null ? null : ctx_r1.weekEvent.event.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.weekEvent.event == null ? null : ctx_r1.weekEvent.event.description);
} }
function NovoCalendarWeekEventElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2) { return { weekEvent: a0, tooltipPosition: a1, eventClicked: a2 }; };
export class NovoCalendarWeekEventElement {
    constructor() {
        this.eventClicked = new EventEmitter();
    }
}
NovoCalendarWeekEventElement.ɵfac = function NovoCalendarWeekEventElement_Factory(t) { return new (t || NovoCalendarWeekEventElement)(); };
NovoCalendarWeekEventElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarWeekEventElement, selectors: [["novo-calendar-week-event"]], inputs: { weekEvent: "weekEvent", tooltipPosition: "tooltipPosition", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event", 3, "ngClass", "tooltip", "tooltipPosition", "click"], [1, "cal-event-ribbon"], [1, "cal-event-title"], [1, "cal-event-description"]], template: function NovoCalendarWeekEventElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCalendarWeekEventElement_ng_template_0_Template, 6, 11, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoCalendarWeekEventElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx.weekEvent, ctx.tooltipPosition, ctx.eventClicked));
    } }, directives: [i1.NgTemplateOutlet, i1.NgClass, i2.TooltipDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarWeekEventElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-week-event',
                template: `
    <ng-template #defaultTemplate>
      <div
        class="cal-event"
        [class.cal-starts-within-week]="!weekEvent.startsBeforeWeek"
        [class.cal-ends-within-week]="!weekEvent.endsAfterWeek"
        [ngClass]="weekEvent.event?.cssClass"
        [tooltip]="weekEvent.event.description"
        [tooltipPosition]="tooltipPosition"
        (click)="eventClicked.emit({event: weekEvent.event})">
        <div class="cal-event-ribbon" [style.backgroundColor]="weekEvent.event.color.primary"></div>
        <div class="cal-event-title">{{weekEvent.event?.title}}</div>
        <div class="cal-event-description">{{weekEvent.event?.description}}</div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{weekEvent: weekEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked}">
    </ng-template>
  `,
            }]
    }], null, { weekEvent: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvd2Vlay9DYWxlbmRhcldlZWtFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzlFLDhCQVFFO0lBREEsOEtBQVMsMkRBQTJDLElBQUM7SUFDckQseUJBQTRGO0lBQzVGLDhCQUE2QjtJQUFBLFlBQTBCO0lBQUEsaUJBQU07SUFDN0QsOEJBQW1DO0lBQUEsWUFBZ0M7SUFBQSxpQkFBTTtJQUMzRSxpQkFBTTs7O0lBVEosNEVBQTRELHlEQUFBO0lBRTVELGlHQUFxQywrQ0FBQSwyQ0FBQTtJQUlQLGVBQXVEO0lBQXZELHdFQUF1RDtJQUN4RCxlQUEwQjtJQUExQiwwRkFBMEI7SUFDcEIsZUFBZ0M7SUFBaEMsZ0dBQWdDOzs7O0FBUzNFLE1BQU0sT0FBTyw0QkFBNEI7SUF2QnpDO1FBa0NFLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FDdEQ7O3dHQVpZLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FBcEJyQywrSEFDRTtRQWFGLDZGQUdBOzs7UUFGRSxlQUFzRDtRQUF0RCw0REFBc0QsNkdBQUE7O2tEQUsvQyw0QkFBNEI7Y0F2QnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7YUFDRjs7a0JBRUUsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla1ZpZXdFdmVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLXdlZWstZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1ldmVudFwiXG4gICAgICAgIFtjbGFzcy5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrXT1cIiF3ZWVrRXZlbnQuc3RhcnRzQmVmb3JlV2Vla1wiXG4gICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4td2Vla109XCIhd2Vla0V2ZW50LmVuZHNBZnRlcldlZWtcIlxuICAgICAgICBbbmdDbGFzc109XCJ3ZWVrRXZlbnQuZXZlbnQ/LmNzc0NsYXNzXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwid2Vla0V2ZW50LmV2ZW50LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAoY2xpY2spPVwiZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OiB3ZWVrRXZlbnQuZXZlbnR9KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXJpYmJvblwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwid2Vla0V2ZW50LmV2ZW50LmNvbG9yLnByaW1hcnlcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC10aXRsZVwiPnt7d2Vla0V2ZW50LmV2ZW50Py50aXRsZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtZGVzY3JpcHRpb25cIj57e3dlZWtFdmVudC5ldmVudD8uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3dlZWtFdmVudDogd2Vla0V2ZW50LCB0b29sdGlwUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvbiwgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWR9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudDtcblxuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==