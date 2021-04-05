import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../pipes/group-by/GroupBy";
function NovoEventTypeLegendElement_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function NovoEventTypeLegendElement_ng_template_0_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const type_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); $event.stopPropagation(); return ctx_r5.eventTypeClicked.emit({ event: type_r4 == null ? null : type_r4.key }); });
    i0.ɵɵelement(1, "div", 5);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(type_r4 == null ? null : type_r4.key);
} }
function NovoEventTypeLegendElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, NovoEventTypeLegendElement_ng_template_0_div_1_Template, 4, 1, "div", 3);
    i0.ɵɵpipe(2, "groupBy");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, ctx_r1.events, "type"));
} }
function NovoEventTypeLegendElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { events: a0, eventTypeClicked: a1 }; };
export class NovoEventTypeLegendElement {
    constructor() {
        this.eventTypeClicked = new EventEmitter();
    }
}
NovoEventTypeLegendElement.ɵfac = function NovoEventTypeLegendElement_Factory(t) { return new (t || NovoEventTypeLegendElement)(); };
NovoEventTypeLegendElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoEventTypeLegendElement, selectors: [["novo-event-type-legend"]], inputs: { events: "events", customTemplate: "customTemplate" }, outputs: { eventTypeClicked: "eventTypeClicked" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-legend"], ["class", "cal-event-type", 3, "click", 4, "ngFor", "ngForOf"], [1, "cal-event-type", 3, "click"], [1, "cal-event-type-swatch"]], template: function NovoEventTypeLegendElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoEventTypeLegendElement_ng_template_0_Template, 3, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoEventTypeLegendElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, ctx.events, ctx.eventTypeClicked));
    } }, directives: [i1.NgTemplateOutlet, i1.NgForOf], pipes: [i2.GroupByPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoEventTypeLegendElement, [{
        type: Component,
        args: [{
                selector: 'novo-event-type-legend',
                template: `
    <ng-template #defaultTemplate>
      <div class="cal-event-legend">
        <div
          class="cal-event-type"
          *ngFor="let type of events | groupBy: 'type'"
          (click)="$event.stopPropagation(); eventTypeClicked.emit({ event: type?.key })"
        >
          <div class="cal-event-type-swatch"></div>
          <div>{{ type?.key }}</div>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{ events: events, eventTypeClicked: eventTypeClicked }"
    >
    </ng-template>
  `,
            }]
    }], null, { events: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventTypeClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUeXBlTGVnZW5kLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvY29tbW9uL0V2ZW50VHlwZUxlZ2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBUTVFLDhCQUtFO0lBRkEsaU5BQVMsd0JBQXdCLFNBQUUsNkVBQTJDLElBQUM7SUFFL0UseUJBQXlDO0lBQ3pDLDJCQUFLO0lBQUEsWUFBZTtJQUFBLGlCQUFNO0lBQzVCLGlCQUFNOzs7SUFEQyxlQUFlO0lBQWYsMERBQWU7OztJQVB4Qiw4QkFDRTtJQUFBLHlGQUtFOztJQUdKLGlCQUFNOzs7SUFORixlQUE2QztJQUE3QyxxRUFBNkM7Ozs7QUFldkQsTUFBTSxPQUFPLDBCQUEwQjtJQXRCdkM7UUE4QkUscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FDMUQ7O29HQVRZLDBCQUEwQjsrREFBMUIsMEJBQTBCO1FBbkJuQyw0SEFDRTtRQVdGLDJGQUlBOzs7UUFIRSxlQUFzRDtRQUF0RCw0REFBc0QseUZBQUE7O2tEQU0vQywwQkFBMEI7Y0F0QnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDthQUNGO2dCQUdDLE1BQU07a0JBREwsS0FBSztZQUlOLGNBQWM7a0JBRGIsS0FBSztZQUlOLGdCQUFnQjtrQkFEZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZXZlbnQtdHlwZS1sZWdlbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1sZWdlbmRcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LXR5cGVcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0eXBlIG9mIGV2ZW50cyB8IGdyb3VwQnk6ICd0eXBlJ1wiXG4gICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgZXZlbnRUeXBlQ2xpY2tlZC5lbWl0KHsgZXZlbnQ6IHR5cGU/LmtleSB9KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXR5cGUtc3dhdGNoXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdj57eyB0eXBlPy5rZXkgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGV2ZW50czogZXZlbnRzLCBldmVudFR5cGVDbGlja2VkOiBldmVudFR5cGVDbGlja2VkIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudFR5cGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==