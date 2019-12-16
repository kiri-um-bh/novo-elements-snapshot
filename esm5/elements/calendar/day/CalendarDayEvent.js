/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/day/CalendarDayEvent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
var NovoCalendarDayEventElement = /** @class */ (function () {
    function NovoCalendarDayEventElement() {
        this.eventClicked = new EventEmitter();
    }
    NovoCalendarDayEventElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-day-event',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [style.borderColor]=\"dayEvent.event.color.secondary\"\n        [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n        [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n        [ngClass]=\"dayEvent.event.cssClass\"\n        [tooltip]=\"dayEvent.event.description\"\n        [tooltipPosition]=\"tooltipPosition\"\n        (click)=\"eventClicked.emit({event: dayEvent.event})\">\n          <div class=\"cal-event-ribbon\" [style.backgroundColor]=\"dayEvent.event.color.primary\"></div>\n          <div class=\"cal-event-group\">\n            <div class=\"cal-event-title\">{{dayEvent.event.title}}</div>\n            <div class=\"cal-event-description\">{{dayEvent.event?.description}}</div>\n          </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{dayEvent: dayEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked}\">\n    </ng-template>\n  "
                }] }
    ];
    NovoCalendarDayEventElement.propDecorators = {
        dayEvent: [{ type: Input }],
        tooltipPosition: [{ type: Input }],
        customTemplate: [{ type: Input }],
        eventClicked: [{ type: Output }]
    };
    return NovoCalendarDayEventElement;
}());
export { NovoCalendarDayEventElement };
if (false) {
    /** @type {?} */
    NovoCalendarDayEventElement.prototype.dayEvent;
    /** @type {?} */
    NovoCalendarDayEventElement.prototype.tooltipPosition;
    /** @type {?} */
    NovoCalendarDayEventElement.prototype.customTemplate;
    /** @type {?} */
    NovoCalendarDayEventElement.prototype.eventClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJEYXlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BGO0lBQUE7UUFxQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztnQkF0Q0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxxakNBc0JUO2lCQUNGOzs7MkJBRUUsS0FBSztrQ0FHTCxLQUFLO2lDQUdMLEtBQUs7K0JBR0wsTUFBTTs7SUFFVCxrQ0FBQztDQUFBLEFBdENELElBc0NDO1NBWlksMkJBQTJCOzs7SUFDdEMsK0NBQ3VCOztJQUV2QixzREFDd0I7O0lBRXhCLHFEQUNpQzs7SUFFakMsbURBQ3FEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXlWaWV3RXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1kYXktZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1ldmVudFwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJkYXlFdmVudC5ldmVudC5jb2xvci5zZWNvbmRhcnlcIlxuICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4tZGF5XT1cIiFkYXlFdmVudC5zdGFydHNCZWZvcmVEYXlcIlxuICAgICAgICBbY2xhc3MuY2FsLWVuZHMtd2l0aGluLWRheV09XCIhZGF5RXZlbnQuZW5kc0FmdGVyRGF5XCJcbiAgICAgICAgW25nQ2xhc3NdPVwiZGF5RXZlbnQuZXZlbnQuY3NzQ2xhc3NcIlxuICAgICAgICBbdG9vbHRpcF09XCJkYXlFdmVudC5ldmVudC5kZXNjcmlwdGlvblwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgKGNsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogZGF5RXZlbnQuZXZlbnR9KVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtcmliYm9uXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJkYXlFdmVudC5ldmVudC5jb2xvci5wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1ncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC10aXRsZVwiPnt7ZGF5RXZlbnQuZXZlbnQudGl0bGV9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1kZXNjcmlwdGlvblwiPnt7ZGF5RXZlbnQuZXZlbnQ/LmRlc2NyaXB0aW9ufX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXlFdmVudDogZGF5RXZlbnQsIHRvb2x0aXBQb3NpdGlvbjogdG9vbHRpcFBvc2l0aW9uLCBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkYXlFdmVudDogRGF5Vmlld0V2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19