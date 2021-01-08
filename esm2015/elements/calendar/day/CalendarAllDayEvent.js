import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NovoCalendarAllDayEventElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r1.event.color.secondary)("border-color", ctx_r1.event.color.primary);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.event.title, " ");
} }
function NovoCalendarAllDayEventElement_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { event: a0, eventClicked: a1 }; };
export class NovoCalendarAllDayEventElement {
    constructor() {
        this.eventClicked = new EventEmitter();
    }
}
NovoCalendarAllDayEventElement.ɵfac = function NovoCalendarAllDayEventElement_Factory(t) { return new (t || NovoCalendarAllDayEventElement)(); };
NovoCalendarAllDayEventElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarAllDayEventElement, selectors: [["novo-calendar-all-day-event"]], inputs: { event: "event", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-all-day-event"]], template: function NovoCalendarAllDayEventElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCalendarAllDayEventElement_ng_template_0_Template, 2, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NovoCalendarAllDayEventElement_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, ctx.event, ctx.eventClicked));
    } }, directives: [i1.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarAllDayEventElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-all-day-event',
                template: `
    <ng-template #defaultTemplate>
      <div class="cal-all-day-event" [style.backgroundColor]="event.color.secondary" [style.borderColor]="event.color.primary">
        {{ event.title }}
        <!--<novo-calendar-event-title
          [event]="event"
          view="day"
          (click)="eventClicked.emit()">
        </novo-calendar-event-title>
        <novo-calendar-event-actions [event]="event"></novo-calendar-event-actions>-->
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        eventClicked: eventClicked
      }"
    >
    </ng-template>
  `,
            }]
    }], null, { event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJBbGxEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2RheS9DYWxlbmRhckFsbERheUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBTzlFLDhCQUNFO0lBQUEsWUFDQTtJQU1GLGlCQUFNOzs7SUFSeUIsZ0VBQStDLDRDQUFBO0lBQzVFLGVBQ0E7SUFEQSxtREFDQTs7OztBQWtCUixNQUFNLE9BQU8sOEJBQThCO0lBeEIzQztRQWdDRSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBQ3REOzs0R0FUWSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQXJCdkMsZ0lBQ0U7UUFVRiwrRkFPQTs7O1FBTkUsZUFBc0Q7UUFBdEQsNERBQXNELG9GQUFBOztrREFTL0MsOEJBQThCO2NBeEIxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDthQUNGO2dCQUdDLEtBQUs7a0JBREosS0FBSztZQUlOLGNBQWM7a0JBRGIsS0FBSztZQUlOLFlBQVk7a0JBRFgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWFsbC1kYXktZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1hbGwtZGF5LWV2ZW50XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJldmVudC5jb2xvci5zZWNvbmRhcnlcIiBbc3R5bGUuYm9yZGVyQ29sb3JdPVwiZXZlbnQuY29sb3IucHJpbWFyeVwiPlxuICAgICAgICB7eyBldmVudC50aXRsZSB9fVxuICAgICAgICA8IS0tPG5vdm8tY2FsZW5kYXItZXZlbnQtdGl0bGVcbiAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgIHZpZXc9XCJkYXlcIlxuICAgICAgICAgIChjbGljayk9XCJldmVudENsaWNrZWQuZW1pdCgpXCI+XG4gICAgICAgIDwvbm92by1jYWxlbmRhci1ldmVudC10aXRsZT5cbiAgICAgICAgPG5vdm8tY2FsZW5kYXItZXZlbnQtYWN0aW9ucyBbZXZlbnRdPVwiZXZlbnRcIj48L25vdm8tY2FsZW5kYXItZXZlbnQtYWN0aW9ucz4tLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZFxuICAgICAgfVwiXG4gICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19