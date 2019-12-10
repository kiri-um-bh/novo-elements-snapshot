/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/common/EventTypeLegend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
var NovoEventTypeLegendElement = /** @class */ (function () {
    function NovoEventTypeLegendElement() {
        this.eventTypeClicked = new EventEmitter();
    }
    NovoEventTypeLegendElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-event-type-legend',
                    template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-event-legend\">\n        <div class=\"cal-event-type\"\n          *ngFor=\"let type of events | groupBy : 'type'\"\n          (click)=\"$event.stopPropagation(); eventTypeClicked.emit({event:type?.key})\">\n          <div class=\"cal-event-type-swatch\"></div><div>{{type?.key}}</div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{events: events, eventTypeClicked: eventTypeClicked}\">\n    </ng-template>\n  "
                }] }
    ];
    NovoEventTypeLegendElement.propDecorators = {
        events: [{ type: Input }],
        customTemplate: [{ type: Input }],
        eventTypeClicked: [{ type: Output }]
    };
    return NovoEventTypeLegendElement;
}());
export { NovoEventTypeLegendElement };
if (false) {
    /** @type {?} */
    NovoEventTypeLegendElement.prototype.events;
    /** @type {?} */
    NovoEventTypeLegendElement.prototype.customTemplate;
    /** @type {?} */
    NovoEventTypeLegendElement.prototype.eventTypeClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUeXBlTGVnZW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9FdmVudFR5cGVMZWdlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRjtJQUFBO1FBMEJFLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNELENBQUM7O2dCQTNCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLGtsQkFjVDtpQkFDRjs7O3lCQUVFLEtBQUs7aUNBR0wsS0FBSzttQ0FHTCxNQUFNOztJQUVULGlDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FUWSwwQkFBMEI7OztJQUNyQyw0Q0FDd0I7O0lBRXhCLG9EQUNpQzs7SUFFakMsc0RBQ3lEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZXZlbnQtdHlwZS1sZWdlbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1sZWdlbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC10eXBlXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdHlwZSBvZiBldmVudHMgfCBncm91cEJ5IDogJ3R5cGUnXCJcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBldmVudFR5cGVDbGlja2VkLmVtaXQoe2V2ZW50OnR5cGU/LmtleX0pXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC10eXBlLXN3YXRjaFwiPjwvZGl2PjxkaXY+e3t0eXBlPy5rZXl9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntldmVudHM6IGV2ZW50cywgZXZlbnRUeXBlQ2xpY2tlZDogZXZlbnRUeXBlQ2xpY2tlZH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudFR5cGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==