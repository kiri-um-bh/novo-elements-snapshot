/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/month/CalendarMonthHeader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as dateFns from 'date-fns';
export class NovoCalendarMonthHeaderElement {
    constructor() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    prevMonth(event) {
        this.viewDateChange.emit(dateFns.subMonths(this.viewDate, 1));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nextMonth(event) {
        this.viewDateChange.emit(dateFns.addMonths(this.viewDate, 1));
    }
}
NovoCalendarMonthHeaderElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-calendar-month-header',
                template: `
    <ng-template #defaultTemplate>
      <div class="calendar-header">
        <div class="calendar-header-top">
          <button theme="icon" icon="previous" (click)="prevMonth($event)"></button>
          <div class="calendar-month">{{ viewDate | month:locale }}</div>
          <button theme="icon" icon="next" (click)="nextMonth($event)"></button>
        </div>
        <div class="calendar-weekdays">
          <div
            class="calendar-weekday"
            *ngFor="let day of days"
            [class.calendar-past]="day.isPast"
            [class.calendar-today]="day.isToday"
            [class.calendar-future]="day.isFuture"
            [class.calendar-weekend]="day.isWeekend">
            {{ day.date | weekday:locale }}
          </div>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{days: days, locale: locale, viewDate: viewDate}">
    </ng-template>
  `
            }] }
];
NovoCalendarMonthHeaderElement.propDecorators = {
    viewDate: [{ type: Input }],
    days: [{ type: Input }],
    locale: [{ type: Input }],
    customTemplate: [{ type: Input }],
    viewDateChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.viewDate;
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.days;
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.locale;
    /** @type {?} */
    NovoCalendarMonthHeaderElement.prototype.customTemplate;
    /**
     * Called when the view date is changed
     * @type {?}
     */
    NovoCalendarMonthHeaderElement.prototype.viewDateChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoSGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUErQnBDLE1BQU0sT0FBTyw4QkFBOEI7SUE3QjNDOzs7O1FBOENFLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFTMUQsQ0FBQzs7Ozs7SUFQQyxTQUFTLENBQUMsS0FBWTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0Y7Ozt1QkFFRSxLQUFLO21CQUdMLEtBQUs7cUJBR0wsS0FBSzs2QkFHTCxLQUFLOzZCQU1MLE1BQU07Ozs7SUFmUCxrREFDZTs7SUFFZiw4Q0FDZ0I7O0lBRWhCLGdEQUNlOztJQUVmLHdEQUNpQzs7Ozs7SUFLakMsd0RBQ3dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWVrRGF5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsZW5kYXItdXRpbHMvQ2FsZW5kYXJVdGlscyc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1tb250aC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyLXRvcFwiPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZNb250aCgkZXZlbnQpXCI+PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLW1vbnRoXCI+e3sgdmlld0RhdGUgfCBtb250aDpsb2NhbGUgfX08L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCI+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItd2Vla2RheXNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNhbGVuZGFyLXdlZWtkYXlcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci1wYXN0XT1cImRheS5pc1Bhc3RcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLXRvZGF5XT1cImRheS5pc1RvZGF5XCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci1mdXR1cmVdPVwiZGF5LmlzRnV0dXJlXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWxlbmRhci13ZWVrZW5kXT1cImRheS5pc1dlZWtlbmRcIj5cbiAgICAgICAgICAgIHt7IGRheS5kYXRlIHwgd2Vla2RheTpsb2NhbGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGF5czogZGF5cywgbG9jYWxlOiBsb2NhbGUsIHZpZXdEYXRlOiB2aWV3RGF0ZX1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQge1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICBASW5wdXQoKVxuICBkYXlzOiBXZWVrRGF5W107XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJldk1vbnRoKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChkYXRlRm5zLnN1Yk1vbnRocyh0aGlzLnZpZXdEYXRlLCAxKSk7XG4gIH1cblxuICBuZXh0TW9udGgoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KGRhdGVGbnMuYWRkTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKTtcbiAgfVxufVxuIl19