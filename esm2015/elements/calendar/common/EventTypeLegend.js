/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/common/EventTypeLegend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
export class NovoEventTypeLegendElement {
    constructor() {
        this.eventTypeClicked = new EventEmitter();
    }
}
NovoEventTypeLegendElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-event-type-legend',
                template: `
    <ng-template #defaultTemplate>
      <div class="cal-event-legend">
        <div class="cal-event-type"
          *ngFor="let type of events | groupBy : 'type'"
          (click)="$event.stopPropagation(); eventTypeClicked.emit({event:type?.key})">
          <div class="cal-event-type-swatch"></div><div>{{type?.key}}</div>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{events: events, eventTypeClicked: eventTypeClicked}">
    </ng-template>
  `
            }] }
];
NovoEventTypeLegendElement.propDecorators = {
    events: [{ type: Input }],
    customTemplate: [{ type: Input }],
    eventTypeClicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoEventTypeLegendElement.prototype.events;
    /** @type {?} */
    NovoEventTypeLegendElement.prototype.customTemplate;
    /** @type {?} */
    NovoEventTypeLegendElement.prototype.eventTypeClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUeXBlTGVnZW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL2NvbW1vbi9FdmVudFR5cGVMZWdlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCcEYsTUFBTSxPQUFPLDBCQUEwQjtJQWxCdkM7UUEwQkUscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7O1lBM0JBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7YUFDRjs7O3FCQUVFLEtBQUs7NkJBR0wsS0FBSzsrQkFHTCxNQUFNOzs7O0lBTlAsNENBQ3dCOztJQUV4QixvREFDaUM7O0lBRWpDLHNEQUN5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWV2ZW50LXR5cGUtbGVnZW5kJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtbGVnZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtdHlwZVwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHR5cGUgb2YgZXZlbnRzIHwgZ3JvdXBCeSA6ICd0eXBlJ1wiXG4gICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgZXZlbnRUeXBlQ2xpY2tlZC5lbWl0KHtldmVudDp0eXBlPy5rZXl9KVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtdHlwZS1zd2F0Y2hcIj48L2Rpdj48ZGl2Pnt7dHlwZT8ua2V5fX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZXZlbnRzOiBldmVudHMsIGV2ZW50VHlwZUNsaWNrZWQ6IGV2ZW50VHlwZUNsaWNrZWR9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0V2ZW50VHlwZUxlZ2VuZEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRUeXBlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=