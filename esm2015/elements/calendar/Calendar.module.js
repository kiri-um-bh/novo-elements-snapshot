/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
export class NovoCalendarModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL0NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUc1RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFdkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXhFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUUzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQStDeEUsTUFBTTs7O1lBN0NMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2dCQUM3RSxZQUFZLEVBQUU7b0JBQ1osMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtvQkFDN0IsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsV0FBVztvQkFDWCxjQUFjO29CQUNkLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixRQUFRO29CQUNSLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtvQkFDN0IsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsV0FBVztvQkFDWCxjQUFjO29CQUNkLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixRQUFRO29CQUNSLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9Ub29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlwZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9QaXBlcy5tb2R1bGUnO1xuLy8gQ29tbW9uIEVsZW1lbnRzXG5pbXBvcnQgeyBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCB9IGZyb20gJy4vY29tbW9uL0V2ZW50VHlwZUxlZ2VuZCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJEYXRlQ2hhbmdlRWxlbWVudCB9IGZyb20gJy4vY29tbW9uL0NhbGVuZGFyRGF0ZUNoYW5nZSc7XG5cbi8vIE1vbnRoIFZpZXdcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vbnRoVmlld0VsZW1lbnQgfSBmcm9tICcuL21vbnRoL0NhbGVuZGFyTW9udGhWaWV3JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vbW9udGgvQ2FsZW5kYXJNb250aEhlYWRlcic7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQgfSBmcm9tICcuL21vbnRoL0NhbGVuZGFyTW9udGhEYXknO1xuLy8gV2VlayBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQgfSBmcm9tICcuL3dlZWsvQ2FsZW5kYXJXZWVrVmlldyc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtIZWFkZXInO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtFdmVudCc7XG4vLyBEYXkgVmlld1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckRheVZpZXcnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJEYXlFdmVudCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckhvdXJTZWdtZW50JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFyQWxsRGF5RXZlbnQnO1xuLy8gQ29tbW9uXG5pbXBvcnQgeyBXZWVrZGF5UGlwZSB9IGZyb20gJy4vcGlwZS9XZWVrZGF5LnBpcGUnO1xuaW1wb3J0IHsgTW9udGhQaXBlIH0gZnJvbSAnLi9waXBlL01vbnRoLnBpcGUnO1xuaW1wb3J0IHsgTW9udGhEYXlQaXBlIH0gZnJvbSAnLi9waXBlL01vbnRoRGF5LnBpcGUnO1xuaW1wb3J0IHsgWWVhclBpcGUgfSBmcm9tICcuL3BpcGUvWWVhci5waXBlJztcbmltcG9ydCB7IEhvdXJzUGlwZSB9IGZyb20gJy4vcGlwZS9Ib3Vycy5waXBlJztcbmltcG9ydCB7IERheU9mTW9udGhQaXBlIH0gZnJvbSAnLi9waXBlL0RheU9mTW9udGgucGlwZSc7XG5pbXBvcnQgeyBFbmRPZldlZWtEaXNwbGF5UGlwZSB9IGZyb20gJy4vcGlwZS9FbmRPZldlZWtEaXNwbGF5UGlwZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZSwgTm92b1Rvb2x0aXBNb2R1bGUsIE5vdm9QaXBlc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9FdmVudFR5cGVMZWdlbmRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoRGF5RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0hlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFySG91clNlZ21lbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXRlQ2hhbmdlRWxlbWVudCxcbiAgICBXZWVrZGF5UGlwZSxcbiAgICBEYXlPZk1vbnRoUGlwZSxcbiAgICBNb250aFBpcGUsXG4gICAgTW9udGhEYXlQaXBlLFxuICAgIFllYXJQaXBlLFxuICAgIEhvdXJzUGlwZSxcbiAgICBFbmRPZldlZWtEaXNwbGF5UGlwZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9FdmVudFR5cGVMZWdlbmRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoRGF5RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0hlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFySG91clNlZ21lbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXRlQ2hhbmdlRWxlbWVudCxcbiAgICBXZWVrZGF5UGlwZSxcbiAgICBEYXlPZk1vbnRoUGlwZSxcbiAgICBNb250aFBpcGUsXG4gICAgTW9udGhEYXlQaXBlLFxuICAgIFllYXJQaXBlLFxuICAgIEhvdXJzUGlwZSxcbiAgICBFbmRPZldlZWtEaXNwbGF5UGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyTW9kdWxlIHt9XG4iXX0=