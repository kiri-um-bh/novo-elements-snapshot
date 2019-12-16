/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/Calendar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from '../button/Button.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { NovoPipesModule } from '../../pipes/Pipes.module';
// Common Elements
import { NovoEventTypeLegendElement } from './common/EventTypeLegend';
import { NovoCalendarDateChangeElement } from './common/CalendarDateChange';
// Month View
import { NovoCalendarMonthViewElement } from './month/CalendarMonthView';
import { NovoCalendarMonthHeaderElement } from './month/CalendarMonthHeader';
import { NovoCalendarMonthDayElement } from './month/CalendarMonthDay';
// Week View
import { NovoCalendarWeekViewElement } from './week/CalendarWeekView';
import { NovoCalendarWeekHeaderElement } from './week/CalendarWeekHeader';
import { NovoCalendarWeekEventElement } from './week/CalendarWeekEvent';
// Day View
import { NovoCalendarDayViewElement } from './day/CalendarDayView';
import { NovoCalendarDayEventElement } from './day/CalendarDayEvent';
import { NovoCalendarHourSegmentElement } from './day/CalendarHourSegment';
import { NovoCalendarAllDayEventElement } from './day/CalendarAllDayEvent';
// Common
import { WeekdayPipe } from './pipe/Weekday.pipe';
import { MonthPipe } from './pipe/Month.pipe';
import { MonthDayPipe } from './pipe/MonthDay.pipe';
import { YearPipe } from './pipe/Year.pipe';
import { HoursPipe } from './pipe/Hours.pipe';
import { DayOfMonthPipe } from './pipe/DayOfMonth.pipe';
import { EndOfWeekDisplayPipe } from './pipe/EndOfWeekDisplayPipe.pipe';
var NovoCalendarModule = /** @class */ (function () {
    function NovoCalendarModule() {
    }
    NovoCalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NovoButtonModule, NovoTooltipModule, NovoPipesModule],
                    declarations: [
                        NovoEventTypeLegendElement,
                        NovoCalendarMonthViewElement,
                        NovoCalendarMonthHeaderElement,
                        NovoCalendarMonthDayElement,
                        NovoCalendarWeekViewElement,
                        NovoCalendarWeekHeaderElement,
                        NovoCalendarWeekEventElement,
                        NovoCalendarDayViewElement,
                        NovoCalendarDayEventElement,
                        NovoCalendarHourSegmentElement,
                        NovoCalendarAllDayEventElement,
                        NovoCalendarDateChangeElement,
                        WeekdayPipe,
                        DayOfMonthPipe,
                        MonthPipe,
                        MonthDayPipe,
                        YearPipe,
                        HoursPipe,
                        EndOfWeekDisplayPipe,
                    ],
                    exports: [
                        NovoEventTypeLegendElement,
                        NovoCalendarMonthViewElement,
                        NovoCalendarMonthHeaderElement,
                        NovoCalendarMonthDayElement,
                        NovoCalendarWeekViewElement,
                        NovoCalendarWeekHeaderElement,
                        NovoCalendarWeekEventElement,
                        NovoCalendarDayViewElement,
                        NovoCalendarDayEventElement,
                        NovoCalendarHourSegmentElement,
                        NovoCalendarAllDayEventElement,
                        NovoCalendarDateChangeElement,
                        WeekdayPipe,
                        DayOfMonthPipe,
                        MonthPipe,
                        MonthDayPipe,
                        YearPipe,
                        HoursPipe,
                        EndOfWeekDisplayPipe,
                    ],
                },] }
    ];
    return NovoCalendarModule;
}());
export { NovoCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL0NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFHNUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXZFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEU7SUFBQTtJQTZDaUMsQ0FBQzs7Z0JBN0NqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztvQkFDN0UsWUFBWSxFQUFFO3dCQUNaLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1Qiw4QkFBOEI7d0JBQzlCLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3dCQUMzQiw2QkFBNkI7d0JBQzdCLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsOEJBQThCO3dCQUM5Qiw2QkFBNkI7d0JBQzdCLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxTQUFTO3dCQUNULFlBQVk7d0JBQ1osUUFBUTt3QkFDUixTQUFTO3dCQUNULG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1Qiw4QkFBOEI7d0JBQzlCLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3dCQUMzQiw2QkFBNkI7d0JBQzdCLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsOEJBQThCO3dCQUM5Qiw2QkFBNkI7d0JBQzdCLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxTQUFTO3dCQUNULFlBQVk7d0JBQ1osUUFBUTt3QkFDUixTQUFTO3dCQUNULG9CQUFvQjtxQkFDckI7aUJBQ0Y7O0lBQ2dDLHlCQUFDO0NBQUEsQUE3Q2xDLElBNkNrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IE5vdm9QaXBlc01vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzL1BpcGVzLm1vZHVsZSc7XG4vLyBDb21tb24gRWxlbWVudHNcbmltcG9ydCB7IE5vdm9FdmVudFR5cGVMZWdlbmRFbGVtZW50IH0gZnJvbSAnLi9jb21tb24vRXZlbnRUeXBlTGVnZW5kJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50IH0gZnJvbSAnLi9jb21tb24vQ2FsZW5kYXJEYXRlQ2hhbmdlJztcblxuLy8gTW9udGggVmlld1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCB9IGZyb20gJy4vbW9udGgvQ2FsZW5kYXJNb250aFZpZXcnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoSGVhZGVyJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vbnRoRGF5RWxlbWVudCB9IGZyb20gJy4vbW9udGgvQ2FsZW5kYXJNb250aERheSc7XG4vLyBXZWVrIFZpZXdcbmltcG9ydCB7IE5vdm9DYWxlbmRhcldlZWtWaWV3RWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtWaWV3JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50IH0gZnJvbSAnLi93ZWVrL0NhbGVuZGFyV2Vla0hlYWRlcic7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50IH0gZnJvbSAnLi93ZWVrL0NhbGVuZGFyV2Vla0V2ZW50Jztcbi8vIERheSBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFyRGF5Vmlldyc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckRheUV2ZW50JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFySG91clNlZ21lbnQnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJBbGxEYXlFdmVudCc7XG4vLyBDb21tb25cbmltcG9ydCB7IFdlZWtkYXlQaXBlIH0gZnJvbSAnLi9waXBlL1dlZWtkYXkucGlwZSc7XG5pbXBvcnQgeyBNb250aFBpcGUgfSBmcm9tICcuL3BpcGUvTW9udGgucGlwZSc7XG5pbXBvcnQgeyBNb250aERheVBpcGUgfSBmcm9tICcuL3BpcGUvTW9udGhEYXkucGlwZSc7XG5pbXBvcnQgeyBZZWFyUGlwZSB9IGZyb20gJy4vcGlwZS9ZZWFyLnBpcGUnO1xuaW1wb3J0IHsgSG91cnNQaXBlIH0gZnJvbSAnLi9waXBlL0hvdXJzLnBpcGUnO1xuaW1wb3J0IHsgRGF5T2ZNb250aFBpcGUgfSBmcm9tICcuL3BpcGUvRGF5T2ZNb250aC5waXBlJztcbmltcG9ydCB7IEVuZE9mV2Vla0Rpc3BsYXlQaXBlIH0gZnJvbSAnLi9waXBlL0VuZE9mV2Vla0Rpc3BsYXlQaXBlLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlLCBOb3ZvVG9vbHRpcE1vZHVsZSwgTm92b1BpcGVzTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b0V2ZW50VHlwZUxlZ2VuZEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheVZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50LFxuICAgIFdlZWtkYXlQaXBlLFxuICAgIERheU9mTW9udGhQaXBlLFxuICAgIE1vbnRoUGlwZSxcbiAgICBNb250aERheVBpcGUsXG4gICAgWWVhclBpcGUsXG4gICAgSG91cnNQaXBlLFxuICAgIEVuZE9mV2Vla0Rpc3BsYXlQaXBlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b0V2ZW50VHlwZUxlZ2VuZEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheVZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50LFxuICAgIFdlZWtkYXlQaXBlLFxuICAgIERheU9mTW9udGhQaXBlLFxuICAgIE1vbnRoUGlwZSxcbiAgICBNb250aERheVBpcGUsXG4gICAgWWVhclBpcGUsXG4gICAgSG91cnNQaXBlLFxuICAgIEVuZE9mV2Vla0Rpc3BsYXlQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb2R1bGUge31cbiJdfQ==