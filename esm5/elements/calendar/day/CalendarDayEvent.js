import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../tooltip/Tooltip.directive";
function NovoCalendarDayEventElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function NovoCalendarDayEventElement_ng_template_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.eventClicked.emit({ event: ctx_r3.dayEvent.event }); });
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
    var ctx_r1 = i0.ɵɵnextContext();
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
var _c0 = function (a0, a1, a2) { return { dayEvent: a0, tooltipPosition: a1, eventClicked: a2 }; };
var NovoCalendarDayEventElement = /** @class */ (function () {
    function NovoCalendarDayEventElement() {
        this.eventClicked = new EventEmitter();
    }
    NovoCalendarDayEventElement.ɵfac = function NovoCalendarDayEventElement_Factory(t) { return new (t || NovoCalendarDayEventElement)(); };
    NovoCalendarDayEventElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarDayEventElement, selectors: [["novo-calendar-day-event"]], inputs: { dayEvent: "dayEvent", tooltipPosition: "tooltipPosition", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event", 3, "ngClass", "tooltip", "tooltipPosition", "click"], [1, "cal-event-ribbon"], [1, "cal-event-group"], [1, "cal-event-title"], [1, "cal-event-description"]], template: function NovoCalendarDayEventElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoCalendarDayEventElement_ng_template_0_Template, 7, 13, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NovoCalendarDayEventElement_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx.dayEvent, ctx.tooltipPosition, ctx.eventClicked));
        } }, directives: [i1.NgTemplateOutlet, i1.NgClass, i2.TooltipDirective], encapsulation: 2 });
    return NovoCalendarDayEventElement;
}());
export { NovoCalendarDayEventElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarDayEventElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-day-event',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [style.borderColor]=\"dayEvent.event.color.secondary\"\n        [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n        [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n        [ngClass]=\"dayEvent.event.cssClass\"\n        [tooltip]=\"dayEvent.event.description\"\n        [tooltipPosition]=\"tooltipPosition\"\n        (click)=\"eventClicked.emit({event: dayEvent.event})\">\n          <div class=\"cal-event-ribbon\" [style.backgroundColor]=\"dayEvent.event.color.primary\"></div>\n          <div class=\"cal-event-group\">\n            <div class=\"cal-event-title\">{{dayEvent.event.title}}</div>\n            <div class=\"cal-event-description\">{{dayEvent.event?.description}}</div>\n          </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{dayEvent: dayEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked}\">\n    </ng-template>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJEYXlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzlFLDhCQVNJO0lBREYsMktBQVMsMERBQTBDLElBQUM7SUFDbEQseUJBQTJGO0lBQzNGLDhCQUNFO0lBQUEsOEJBQTZCO0lBQUEsWUFBd0I7SUFBQSxpQkFBTTtJQUMzRCw4QkFBbUM7SUFBQSxZQUErQjtJQUFBLGlCQUFNO0lBQzFFLGlCQUFNO0lBQ1YsaUJBQU07OztJQVpKLHFFQUFvRDtJQUNwRCx5RUFBeUQsc0RBQUE7SUFFekQsd0RBQW1DLDhDQUFBLDJDQUFBO0lBSUgsZUFBc0Q7SUFBdEQsdUVBQXNEO0lBRXJELGVBQXdCO0lBQXhCLGlEQUF3QjtJQUNsQixlQUErQjtJQUEvQiw4RkFBK0I7Ozs7QUFoQjlFO0lBQUE7UUFxQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUN0RDswR0FaWSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQXZCcEMsOEhBQ0U7WUFnQkYsNEZBR0E7OztZQUZFLGVBQXNEO1lBQXRELDREQUFzRCw0R0FBQTs7c0NBeEI1RDtDQXlDQyxBQXRDRCxJQXNDQztTQVpZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBMUJ2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLHFqQ0FzQlQ7YUFDRjs7a0JBRUUsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF5Vmlld0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItZGF5LWV2ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRcIlxuICAgICAgICBbc3R5bGUuYm9yZGVyQ29sb3JdPVwiZGF5RXZlbnQuZXZlbnQuY29sb3Iuc2Vjb25kYXJ5XCJcbiAgICAgICAgW2NsYXNzLmNhbC1zdGFydHMtd2l0aGluLWRheV09XCIhZGF5RXZlbnQuc3RhcnRzQmVmb3JlRGF5XCJcbiAgICAgICAgW2NsYXNzLmNhbC1lbmRzLXdpdGhpbi1kYXldPVwiIWRheUV2ZW50LmVuZHNBZnRlckRheVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImRheUV2ZW50LmV2ZW50LmNzc0NsYXNzXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiZGF5RXZlbnQuZXZlbnQuZGVzY3JpcHRpb25cIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIChjbGljayk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6IGRheUV2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXJpYmJvblwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZGF5RXZlbnQuZXZlbnQuY29sb3IucHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtdGl0bGVcIj57e2RheUV2ZW50LmV2ZW50LnRpdGxlfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtZGVzY3JpcHRpb25cIj57e2RheUV2ZW50LmV2ZW50Py5kZXNjcmlwdGlvbn19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGF5RXZlbnQ6IGRheUV2ZW50LCB0b29sdGlwUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvbiwgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWR9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZGF5RXZlbnQ6IERheVZpZXdFdmVudDtcblxuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==