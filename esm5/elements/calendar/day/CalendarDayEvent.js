/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJEYXlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEY7SUFBQTtRQXFDRSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZELENBQUM7O2dCQXRDQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHFqQ0FzQlQ7aUJBQ0Y7OzsyQkFFRSxLQUFLO2tDQUdMLEtBQUs7aUNBR0wsS0FBSzsrQkFHTCxNQUFNOztJQUVULGtDQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FaWSwyQkFBMkI7OztJQUN0QywrQ0FDdUI7O0lBRXZCLHNEQUN3Qjs7SUFFeEIscURBQ2lDOztJQUVqQyxtREFDcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERheVZpZXdFdmVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLWRheS1ldmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cImRheUV2ZW50LmV2ZW50LmNvbG9yLnNlY29uZGFyeVwiXG4gICAgICAgIFtjbGFzcy5jYWwtc3RhcnRzLXdpdGhpbi1kYXldPVwiIWRheUV2ZW50LnN0YXJ0c0JlZm9yZURheVwiXG4gICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4tZGF5XT1cIiFkYXlFdmVudC5lbmRzQWZ0ZXJEYXlcIlxuICAgICAgICBbbmdDbGFzc109XCJkYXlFdmVudC5ldmVudC5jc3NDbGFzc1wiXG4gICAgICAgIFt0b29sdGlwXT1cImRheUV2ZW50LmV2ZW50LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAoY2xpY2spPVwiZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OiBkYXlFdmVudC5ldmVudH0pXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1yaWJib25cIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImRheUV2ZW50LmV2ZW50LmNvbG9yLnByaW1hcnlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXRpdGxlXCI+e3tkYXlFdmVudC5ldmVudC50aXRsZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LWRlc2NyaXB0aW9uXCI+e3tkYXlFdmVudC5ldmVudD8uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2RheUV2ZW50OiBkYXlFdmVudCwgdG9vbHRpcFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb24sIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGRheUV2ZW50OiBEYXlWaWV3RXZlbnQ7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=