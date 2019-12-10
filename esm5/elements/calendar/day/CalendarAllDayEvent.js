/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/day/CalendarAllDayEvent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
var NovoCalendarAllDayEventElement = /** @class */ (function () {
    function NovoCalendarAllDayEventElement() {
        this.eventClicked = new EventEmitter();
    }
    NovoCalendarAllDayEventElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-calendar-all-day-event',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color.secondary\"\n        [style.borderColor]=\"event.color.primary\">\n        {{event.title}}\n        <!--<novo-calendar-event-title\n          [event]=\"event\"\n          view=\"day\"\n          (click)=\"eventClicked.emit()\">\n        </novo-calendar-event-title>\n        <novo-calendar-event-actions [event]=\"event\"></novo-calendar-event-actions>-->\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    NovoCalendarAllDayEventElement.propDecorators = {
        event: [{ type: Input }],
        customTemplate: [{ type: Input }],
        eventClicked: [{ type: Output }]
    };
    return NovoCalendarAllDayEventElement;
}());
export { NovoCalendarAllDayEventElement };
if (false) {
    /** @type {?} */
    NovoCalendarAllDayEventElement.prototype.event;
    /** @type {?} */
    NovoCalendarAllDayEventElement.prototype.customTemplate;
    /** @type {?} */
    NovoCalendarAllDayEventElement.prototype.eventClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJBbGxEYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9kYXkvQ2FsZW5kYXJBbGxEYXlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BGO0lBQUE7UUFrQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztnQkFuQ0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRSxrdUJBc0JUO2lCQUNGOzs7d0JBRUUsS0FBSztpQ0FHTCxLQUFLOytCQUdMLE1BQU07O0lBRVQscUNBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQVRZLDhCQUE4Qjs7O0lBQ3pDLCtDQUNxQjs7SUFFckIsd0RBQ2lDOztJQUVqQyxzREFDcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhci1hbGwtZGF5LWV2ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtYWxsLWRheS1ldmVudFwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZXZlbnQuY29sb3Iuc2Vjb25kYXJ5XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cImV2ZW50LmNvbG9yLnByaW1hcnlcIj5cbiAgICAgICAge3tldmVudC50aXRsZX19XG4gICAgICAgIDwhLS08bm92by1jYWxlbmRhci1ldmVudC10aXRsZVxuICAgICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgICAgdmlldz1cImRheVwiXG4gICAgICAgICAgKGNsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KClcIj5cbiAgICAgICAgPC9ub3ZvLWNhbGVuZGFyLWV2ZW50LXRpdGxlPlxuICAgICAgICA8bm92by1jYWxlbmRhci1ldmVudC1hY3Rpb25zIFtldmVudF09XCJldmVudFwiPjwvbm92by1jYWxlbmRhci1ldmVudC1hY3Rpb25zPi0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkXG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=