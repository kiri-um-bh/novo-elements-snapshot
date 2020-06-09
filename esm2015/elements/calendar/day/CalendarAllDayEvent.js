import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
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
      <div
        class="cal-all-day-event"
        [style.backgroundColor]="event.color.secondary"
        [style.borderColor]="event.color.primary">
        {{event.title}}
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
      }">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJBbGxEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJBbGxEYXlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQU85RSw4QkFJRTtJQUFBLFlBQ0E7SUFNRixpQkFBTTs7O0lBVEosZ0VBQStDLDRDQUFBO0lBRS9DLGVBQ0E7SUFEQSxtREFDQTs7OztBQWlCUixNQUFNLE9BQU8sOEJBQThCO0lBMUIzQztRQWtDRSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBQ3REOzs0R0FUWSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQXZCdkMsZ0lBQ0U7UUFhRiwrRkFNQTs7O1FBTEUsZUFBc0Q7UUFBdEQsNERBQXNELG9GQUFBOztrREFRL0MsOEJBQThCO2NBMUIxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1hbGwtZGF5LWV2ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtYWxsLWRheS1ldmVudFwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZXZlbnQuY29sb3Iuc2Vjb25kYXJ5XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cImV2ZW50LmNvbG9yLnByaW1hcnlcIj5cbiAgICAgICAge3tldmVudC50aXRsZX19XG4gICAgICAgIDwhLS08bm92by1jYWxlbmRhci1ldmVudC10aXRsZVxuICAgICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgICAgdmlldz1cImRheVwiXG4gICAgICAgICAgKGNsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KClcIj5cbiAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLWV2ZW50LXRpdGxlPlxuICAgICAgICA8bm92by1jYWxlbmRhci1ldmVudC1hY3Rpb25zIFtldmVudF09XCJldmVudFwiPjwvbm92by1jYWxlbmRhci1ldmVudC1hY3Rpb25zPi0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkXG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=