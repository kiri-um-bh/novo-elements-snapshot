import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../tooltip/Tooltip.directive";
function NovoCalendarWeekEventElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function NovoCalendarWeekEventElement_ng_template_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.eventClicked.emit({ event: ctx_r3.weekEvent.event }); });
    i0.ɵɵelement(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
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
var _c0 = function (a0, a1, a2) { return { weekEvent: a0, tooltipPosition: a1, eventClicked: a2 }; };
var NovoCalendarWeekEventElement = /** @class */ (function () {
    function NovoCalendarWeekEventElement() {
        this.eventClicked = new EventEmitter();
    }
    NovoCalendarWeekEventElement.ɵfac = function NovoCalendarWeekEventElement_Factory(t) { return new (t || NovoCalendarWeekEventElement)(); };
    NovoCalendarWeekEventElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarWeekEventElement, selectors: [["novo-calendar-week-event"]], inputs: { weekEvent: "weekEvent", tooltipPosition: "tooltipPosition", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event", 3, "ngClass", "tooltip", "tooltipPosition", "click"], [1, "cal-event-ribbon"], [1, "cal-event-title"], [1, "cal-event-description"]], template: function NovoCalendarWeekEventElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoCalendarWeekEventElement_ng_template_0_Template, 6, 11, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NovoCalendarWeekEventElement_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx.weekEvent, ctx.tooltipPosition, ctx.eventClicked));
        } }, directives: [i1.NgTemplateOutlet, i1.NgClass, i2.TooltipDirective], encapsulation: 2 });
    return NovoCalendarWeekEventElement;
}());
export { NovoCalendarWeekEventElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarWeekEventElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-week-event',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n        [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n        [ngClass]=\"weekEvent.event?.cssClass\"\n        [tooltip]=\"weekEvent.event.description\"\n        [tooltipPosition]=\"tooltipPosition\"\n        (click)=\"eventClicked.emit({event: weekEvent.event})\">\n        <div class=\"cal-event-ribbon\" [style.backgroundColor]=\"weekEvent.event.color.primary\"></div>\n        <div class=\"cal-event-title\">{{weekEvent.event?.title}}</div>\n        <div class=\"cal-event-description\">{{weekEvent.event?.description}}</div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{weekEvent: weekEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked}\">\n    </ng-template>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvd2Vlay9DYWxlbmRhcldlZWtFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzlFLDhCQVFFO0lBREEsNEtBQVMsMkRBQTJDLElBQUM7SUFDckQseUJBQTRGO0lBQzVGLDhCQUE2QjtJQUFBLFlBQTBCO0lBQUEsaUJBQU07SUFDN0QsOEJBQW1DO0lBQUEsWUFBZ0M7SUFBQSxpQkFBTTtJQUMzRSxpQkFBTTs7O0lBVEosNEVBQTRELHlEQUFBO0lBRTVELGlHQUFxQywrQ0FBQSwyQ0FBQTtJQUlQLGVBQXVEO0lBQXZELHdFQUF1RDtJQUN4RCxlQUEwQjtJQUExQiwwRkFBMEI7SUFDcEIsZUFBZ0M7SUFBaEMsZ0dBQWdDOzs7O0FBZDNFO0lBQUE7UUFrQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUN0RDs0R0FaWSw0QkFBNEI7cUVBQTVCLDRCQUE0QjtZQXBCckMsK0hBQ0U7WUFhRiw2RkFHQTs7O1lBRkUsZUFBc0Q7WUFBdEQsNERBQXNELDZHQUFBOzt1Q0FyQjVEO0NBc0NDLEFBbkNELElBbUNDO1NBWlksNEJBQTRCO2tEQUE1Qiw0QkFBNEI7Y0F2QnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsODdCQW1CVDthQUNGOztrQkFFRSxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWVrVmlld0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItd2Vlay1ldmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgW2NsYXNzLmNhbC1zdGFydHMtd2l0aGluLXdlZWtdPVwiIXdlZWtFdmVudC5zdGFydHNCZWZvcmVXZWVrXCJcbiAgICAgICAgW2NsYXNzLmNhbC1lbmRzLXdpdGhpbi13ZWVrXT1cIiF3ZWVrRXZlbnQuZW5kc0FmdGVyV2Vla1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cIndlZWtFdmVudC5ldmVudD8uY3NzQ2xhc3NcIlxuICAgICAgICBbdG9vbHRpcF09XCJ3ZWVrRXZlbnQuZXZlbnQuZGVzY3JpcHRpb25cIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIChjbGljayk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6IHdlZWtFdmVudC5ldmVudH0pXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtcmliYm9uXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJ3ZWVrRXZlbnQuZXZlbnQuY29sb3IucHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXRpdGxlXCI+e3t3ZWVrRXZlbnQuZXZlbnQ/LnRpdGxlfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1kZXNjcmlwdGlvblwiPnt7d2Vla0V2ZW50LmV2ZW50Py5kZXNjcmlwdGlvbn19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7d2Vla0V2ZW50OiB3ZWVrRXZlbnQsIHRvb2x0aXBQb3NpdGlvbjogdG9vbHRpcFBvc2l0aW9uLCBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgd2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19