/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/week/CalendarWeekEvent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
export class NovoCalendarWeekEventElement {
    constructor() {
        this.eventClicked = new EventEmitter();
    }
}
NovoCalendarWeekEventElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-calendar-week-event',
                template: `
    <ng-template #defaultTemplate>
      <div
        class="cal-event"
        [class.cal-starts-within-week]="!weekEvent.startsBeforeWeek"
        [class.cal-ends-within-week]="!weekEvent.endsAfterWeek"
        [ngClass]="weekEvent.event?.cssClass"
        [tooltip]="weekEvent.event.description"
        [tooltipPosition]="tooltipPosition"
        (click)="eventClicked.emit({event: weekEvent.event})">
        <div class="cal-event-ribbon" [style.backgroundColor]="weekEvent.event.color.primary"></div>
        <div class="cal-event-title">{{weekEvent.event?.title}}</div>
        <div class="cal-event-description">{{weekEvent.event?.description}}</div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{weekEvent: weekEvent, tooltipPosition: tooltipPosition, eventClicked: eventClicked}">
    </ng-template>
  `
            }] }
];
NovoCalendarWeekEventElement.propDecorators = {
    weekEvent: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    customTemplate: [{ type: Input }],
    eventClicked: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvd2Vlay9DYWxlbmRhcldlZWtFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEJwRixNQUFNLE9BQU8sNEJBQTRCO0lBdkJ6QztRQWtDRSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZELENBQUM7OztZQW5DQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUO2FBQ0Y7Ozt3QkFFRSxLQUFLOzhCQUdMLEtBQUs7NkJBR0wsS0FBSzsyQkFHTCxNQUFNOzs7O0lBVFAsaURBQ3lCOztJQUV6Qix1REFDd0I7O0lBRXhCLHNEQUNpQzs7SUFFakMsb0RBQ3FEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWVrVmlld0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FsZW5kYXItd2Vlay1ldmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgW2NsYXNzLmNhbC1zdGFydHMtd2l0aGluLXdlZWtdPVwiIXdlZWtFdmVudC5zdGFydHNCZWZvcmVXZWVrXCJcbiAgICAgICAgW2NsYXNzLmNhbC1lbmRzLXdpdGhpbi13ZWVrXT1cIiF3ZWVrRXZlbnQuZW5kc0FmdGVyV2Vla1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cIndlZWtFdmVudC5ldmVudD8uY3NzQ2xhc3NcIlxuICAgICAgICBbdG9vbHRpcF09XCJ3ZWVrRXZlbnQuZXZlbnQuZGVzY3JpcHRpb25cIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIChjbGljayk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6IHdlZWtFdmVudC5ldmVudH0pXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtcmliYm9uXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJ3ZWVrRXZlbnQuZXZlbnQuY29sb3IucHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXRpdGxlXCI+e3t3ZWVrRXZlbnQuZXZlbnQ/LnRpdGxlfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC1kZXNjcmlwdGlvblwiPnt7d2Vla0V2ZW50LmV2ZW50Py5kZXNjcmlwdGlvbn19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7d2Vla0V2ZW50OiB3ZWVrRXZlbnQsIHRvb2x0aXBQb3NpdGlvbjogdG9vbHRpcFBvc2l0aW9uLCBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgd2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19