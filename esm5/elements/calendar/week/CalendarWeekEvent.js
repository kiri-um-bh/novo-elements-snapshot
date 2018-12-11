/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
var NovoCalendarWeekEventElement = /** @class */ (function () {
    function NovoCalendarWeekEventElement() {
        this.eventClicked = new EventEmitter();
    }
    NovoCalendarWeekEventElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-week-event',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n        [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n        [ngClass]=\"weekEvent.event?.cssClass\"\n        [tooltip]=\"weekEvent.event.description\"\n        [tooltipPosition]=\"tooltipPosition\"\n        (click)=\"eventClicked.emit({event: weekEvent.event})\">\n        <div class=\"cal-event-ribbon\" [style.backgroundColor]=\"weekEvent.event.color.primary\"></div>\n        <div class=\"cal-event-title\">{{weekEvent.event?.title}}</div>\n        <div class=\"cal-event-description\">{{weekEvent.event?.description}}</div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{weekEvent: weekEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked}\">\n    </ng-template>\n  "
                }] }
    ];
    NovoCalendarWeekEventElement.propDecorators = {
        weekEvent: [{ type: Input }],
        tooltipPosition: [{ type: Input }],
        customTemplate: [{ type: Input }],
        eventClicked: [{ type: Output }]
    };
    return NovoCalendarWeekEventElement;
}());
export { NovoCalendarWeekEventElement };
if (false) {
    /** @type {?} */
    NovoCalendarWeekEventElement.prototype.weekEvent;
    /** @type {?} */
    NovoCalendarWeekEventElement.prototype.tooltipPosition;
    /** @type {?} */
    NovoCalendarWeekEventElement.prototype.customTemplate;
    /** @type {?} */
    NovoCalendarWeekEventElement.prototype.eventClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvd2Vlay9DYWxlbmRhcldlZWtFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEY7SUFBQTtRQWtDRSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZELENBQUM7O2dCQW5DQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLDg3QkFtQlQ7aUJBQ0Y7Ozs0QkFFRSxLQUFLO2tDQUdMLEtBQUs7aUNBR0wsS0FBSzsrQkFHTCxNQUFNOztJQUVULG1DQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FaWSw0QkFBNEI7OztJQUN2QyxpREFDeUI7O0lBRXpCLHVEQUN3Qjs7SUFFeEIsc0RBQ2lDOztJQUVqQyxvREFDcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtWaWV3RXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci13ZWVrLWV2ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRcIlxuICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4td2Vla109XCIhd2Vla0V2ZW50LnN0YXJ0c0JlZm9yZVdlZWtcIlxuICAgICAgICBbY2xhc3MuY2FsLWVuZHMtd2l0aGluLXdlZWtdPVwiIXdlZWtFdmVudC5lbmRzQWZ0ZXJXZWVrXCJcbiAgICAgICAgW25nQ2xhc3NdPVwid2Vla0V2ZW50LmV2ZW50Py5jc3NDbGFzc1wiXG4gICAgICAgIFt0b29sdGlwXT1cIndlZWtFdmVudC5ldmVudC5kZXNjcmlwdGlvblwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgKGNsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogd2Vla0V2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1yaWJib25cIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIndlZWtFdmVudC5ldmVudC5jb2xvci5wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtdGl0bGVcIj57e3dlZWtFdmVudC5ldmVudD8udGl0bGV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LWRlc2NyaXB0aW9uXCI+e3t3ZWVrRXZlbnQuZXZlbnQ/LmRlc2NyaXB0aW9ufX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInt3ZWVrRXZlbnQ6IHdlZWtFdmVudCwgdG9vbHRpcFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb24sIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICB3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQ7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=