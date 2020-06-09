import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NovoCalendarAllDayEventElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r1.event.color.secondary)("border-color", ctx_r1.event.color.primary);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.event.title, " ");
} }
function NovoCalendarAllDayEventElement_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0, a1) { return { event: a0, eventClicked: a1 }; };
var NovoCalendarAllDayEventElement = /** @class */ (function () {
    function NovoCalendarAllDayEventElement() {
        this.eventClicked = new EventEmitter();
    }
    NovoCalendarAllDayEventElement.ɵfac = function NovoCalendarAllDayEventElement_Factory(t) { return new (t || NovoCalendarAllDayEventElement)(); };
    NovoCalendarAllDayEventElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarAllDayEventElement, selectors: [["novo-calendar-all-day-event"]], inputs: { event: "event", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-all-day-event"]], template: function NovoCalendarAllDayEventElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoCalendarAllDayEventElement_ng_template_0_Template, 2, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NovoCalendarAllDayEventElement_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, ctx.event, ctx.eventClicked));
        } }, directives: [i1.NgTemplateOutlet], encapsulation: 2 });
    return NovoCalendarAllDayEventElement;
}());
export { NovoCalendarAllDayEventElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarAllDayEventElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-all-day-event',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color.secondary\"\n        [style.borderColor]=\"event.color.primary\">\n        {{event.title}}\n        <!--<novo-calendar-event-title\n          [event]=\"event\"\n          view=\"day\"\n          (click)=\"eventClicked.emit()\">\n        </novo-calendar-event-title>\n        <novo-calendar-event-actions [event]=\"event\"></novo-calendar-event-actions>-->\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  ",
            }]
    }], null, { event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJBbGxEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJBbGxEYXlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQU85RSw4QkFJRTtJQUFBLFlBQ0E7SUFNRixpQkFBTTs7O0lBVEosZ0VBQStDLDRDQUFBO0lBRS9DLGVBQ0E7SUFEQSxtREFDQTs7OztBQVRSO0lBQUE7UUFrQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUN0RDtnSEFUWSw4QkFBOEI7dUVBQTlCLDhCQUE4QjtZQXZCdkMsZ0lBQ0U7WUFhRiwrRkFNQTs7O1lBTEUsZUFBc0Q7WUFBdEQsNERBQXNELG9GQUFBOzt5Q0FyQjVEO0NBc0NDLEFBbkNELElBbUNDO1NBVFksOEJBQThCO2tEQUE5Qiw4QkFBOEI7Y0ExQjFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUUsa3VCQXNCVDthQUNGOztrQkFFRSxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItYWxsLWRheS1ldmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWFsbC1kYXktZXZlbnRcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImV2ZW50LmNvbG9yLnNlY29uZGFyeVwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJldmVudC5jb2xvci5wcmltYXJ5XCI+XG4gICAgICAgIHt7ZXZlbnQudGl0bGV9fVxuICAgICAgICA8IS0tPG5vdm8tY2FsZW5kYXItZXZlbnQtdGl0bGVcbiAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgIHZpZXc9XCJkYXlcIlxuICAgICAgICAgIChjbGljayk9XCJldmVudENsaWNrZWQuZW1pdCgpXCI+XG4gICAgICAgIDwvbm92by1jYWxlbmRhci1ldmVudC10aXRsZT5cbiAgICAgICAgPG5vdm8tY2FsZW5kYXItZXZlbnQtYWN0aW9ucyBbZXZlbnRdPVwiZXZlbnRcIj48L25vdm8tY2FsZW5kYXItZXZlbnQtYWN0aW9ucz4tLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZFxuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19