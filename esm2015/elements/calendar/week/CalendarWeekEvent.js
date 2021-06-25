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
            },] }
];
NovoCalendarWeekEventElement.propDecorators = {
    weekEvent: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    customTemplate: [{ type: Input }],
    eventClicked: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJXZWVrRXZlbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvd2Vlay9DYWxlbmRhcldlZWtFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTBCcEYsTUFBTSxPQUFPLDRCQUE0QjtJQXZCekM7UUFrQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7WUFuQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDthQUNGOzs7d0JBRUUsS0FBSzs4QkFHTCxLQUFLOzZCQUdMLEtBQUs7MkJBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla1ZpZXdFdmVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGVuZGFyLXV0aWxzL0NhbGVuZGFyVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLXdlZWstZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1ldmVudFwiXG4gICAgICAgIFtjbGFzcy5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrXT1cIiF3ZWVrRXZlbnQuc3RhcnRzQmVmb3JlV2Vla1wiXG4gICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4td2Vla109XCIhd2Vla0V2ZW50LmVuZHNBZnRlcldlZWtcIlxuICAgICAgICBbbmdDbGFzc109XCJ3ZWVrRXZlbnQuZXZlbnQ/LmNzc0NsYXNzXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwid2Vla0V2ZW50LmV2ZW50LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAoY2xpY2spPVwiZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OiB3ZWVrRXZlbnQuZXZlbnR9KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50LXJpYmJvblwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwid2Vla0V2ZW50LmV2ZW50LmNvbG9yLnByaW1hcnlcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudC10aXRsZVwiPnt7d2Vla0V2ZW50LmV2ZW50Py50aXRsZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnQtZGVzY3JpcHRpb25cIj57e3dlZWtFdmVudC5ldmVudD8uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3dlZWtFdmVudDogd2Vla0V2ZW50LCB0b29sdGlwUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvbiwgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWR9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudDtcblxuICBASW5wdXQoKVxuICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==