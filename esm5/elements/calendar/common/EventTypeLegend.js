/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUeXBlTGVnZW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9FdmVudFR5cGVMZWdlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BGO0lBQUE7UUEwQkUscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Z0JBM0JBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsa2xCQWNUO2lCQUNGOzs7eUJBRUUsS0FBSztpQ0FHTCxLQUFLO21DQUdMLE1BQU07O0lBRVQsaUNBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQVRZLDBCQUEwQjs7O0lBQ3JDLDRDQUN3Qjs7SUFFeEIsb0RBQ2lDOztJQUVqQyxzREFDeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1ldmVudC10eXBlLWxlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LWxlZ2VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXR5cGVcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0eXBlIG9mIGV2ZW50cyB8IGdyb3VwQnkgOiAndHlwZSdcIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2ZW50VHlwZUNsaWNrZWQuZW1pdCh7ZXZlbnQ6dHlwZT8ua2V5fSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXR5cGUtc3dhdGNoXCI+PC9kaXY+PGRpdj57e3R5cGU/LmtleX19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2V2ZW50czogZXZlbnRzLCBldmVudFR5cGVDbGlja2VkOiBldmVudFR5cGVDbGlja2VkfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FdmVudFR5cGVMZWdlbmRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50VHlwZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19