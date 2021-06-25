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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrRXZlbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvd2Vlay9DYWxlbmRhcldlZWtFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzlFLDhCQVFFO0lBREEsOEtBQVMsMkRBQTJDLElBQUM7SUFDckQseUJBQTRGO0lBQzVGLDhCQUE2QjtJQUFBLFlBQTBCO0lBQUEsaUJBQU07SUFDN0QsOEJBQW1DO0lBQUEsWUFBZ0M7SUFBQSxpQkFBTTtJQUMzRSxpQkFBTTs7O0lBVEosNEVBQTRELHlEQUFBO0lBRTVELGlHQUFxQywrQ0FBQSwyQ0FBQTtJQUlQLGVBQXVEO0lBQXZELHdFQUF1RDtJQUN4RCxlQUEwQjtJQUExQiwwRkFBMEI7SUFDcEIsZUFBZ0M7SUFBaEMsZ0dBQWdDOzs7O0FBUzNFLE1BQU0sT0FBTyw0QkFBNEI7SUF2QnpDO1FBa0NFLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FDdEQ7O3dHQVpZLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FBcEJyQywrSEFDRTtRQWFGLDZGQUdBOzs7UUFGRSxlQUFzRDtRQUF0RCw0REFBc0QsNkdBQUE7O2tEQUsvQyw0QkFBNEI7Y0F2QnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7YUFDRjtnQkFHQyxTQUFTO2tCQURSLEtBQUs7WUFJTixlQUFlO2tCQURkLEtBQUs7WUFJTixjQUFjO2tCQURiLEtBQUs7WUFJTixZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtWaWV3RXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci13ZWVrLWV2ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRcIlxuICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4td2Vla109XCIhd2Vla0V2ZW50LnN0YXJ0c0JlZm9yZVdlZWtcIlxuICAgICAgICBbY2xhc3MuY2FsLWVuZHMtd2l0aGluLXdlZWtdPVwiIXdlZWtFdmVudC5lbmRzQWZ0ZXJXZWVrXCJcbiAgICAgICAgW25nQ2xhc3NdPVwid2Vla0V2ZW50LmV2ZW50Py5jc3NDbGFzc1wiXG4gICAgICAgIFt0b29sdGlwXT1cIndlZWtFdmVudC5ldmVudC5kZXNjcmlwdGlvblwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgKGNsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogd2Vla0V2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1yaWJib25cIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIndlZWtFdmVudC5ldmVudC5jb2xvci5wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtdGl0bGVcIj57e3dlZWtFdmVudC5ldmVudD8udGl0bGV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LWRlc2NyaXB0aW9uXCI+e3t3ZWVrRXZlbnQuZXZlbnQ/LmRlc2NyaXB0aW9ufX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInt3ZWVrRXZlbnQ6IHdlZWtFdmVudCwgdG9vbHRpcFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb24sIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICB3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQ7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=