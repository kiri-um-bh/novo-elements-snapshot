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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL0NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxrQkFBa0I7QUFDbEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUUsYUFBYTtBQUNiLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZFLFlBQVk7QUFDWixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RSxXQUFXO0FBQ1gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsU0FBUztBQUNULE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBK0N4RSxNQUFNLE9BQU8sa0JBQWtCOzs7WUE3QzlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2dCQUM3RSxZQUFZLEVBQUU7b0JBQ1osMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtvQkFDN0IsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsV0FBVztvQkFDWCxjQUFjO29CQUNkLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixRQUFRO29CQUNSLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtvQkFDN0IsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsV0FBVztvQkFDWCxjQUFjO29CQUNkLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixRQUFRO29CQUNSLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9Ub29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlwZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9QaXBlcy5tb2R1bGUnO1xuLy8gQ29tbW9uIEVsZW1lbnRzXG5pbXBvcnQgeyBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCB9IGZyb20gJy4vY29tbW9uL0V2ZW50VHlwZUxlZ2VuZCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJEYXRlQ2hhbmdlRWxlbWVudCB9IGZyb20gJy4vY29tbW9uL0NhbGVuZGFyRGF0ZUNoYW5nZSc7XG5cbi8vIE1vbnRoIFZpZXdcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vbnRoVmlld0VsZW1lbnQgfSBmcm9tICcuL21vbnRoL0NhbGVuZGFyTW9udGhWaWV3JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vbW9udGgvQ2FsZW5kYXJNb250aEhlYWRlcic7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQgfSBmcm9tICcuL21vbnRoL0NhbGVuZGFyTW9udGhEYXknO1xuLy8gV2VlayBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQgfSBmcm9tICcuL3dlZWsvQ2FsZW5kYXJXZWVrVmlldyc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtIZWFkZXInO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtFdmVudCc7XG4vLyBEYXkgVmlld1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckRheVZpZXcnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJEYXlFdmVudCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckhvdXJTZWdtZW50JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFyQWxsRGF5RXZlbnQnO1xuLy8gQ29tbW9uXG5pbXBvcnQgeyBXZWVrZGF5UGlwZSB9IGZyb20gJy4vcGlwZS9XZWVrZGF5LnBpcGUnO1xuaW1wb3J0IHsgTW9udGhQaXBlIH0gZnJvbSAnLi9waXBlL01vbnRoLnBpcGUnO1xuaW1wb3J0IHsgTW9udGhEYXlQaXBlIH0gZnJvbSAnLi9waXBlL01vbnRoRGF5LnBpcGUnO1xuaW1wb3J0IHsgWWVhclBpcGUgfSBmcm9tICcuL3BpcGUvWWVhci5waXBlJztcbmltcG9ydCB7IEhvdXJzUGlwZSB9IGZyb20gJy4vcGlwZS9Ib3Vycy5waXBlJztcbmltcG9ydCB7IERheU9mTW9udGhQaXBlIH0gZnJvbSAnLi9waXBlL0RheU9mTW9udGgucGlwZSc7XG5pbXBvcnQgeyBFbmRPZldlZWtEaXNwbGF5UGlwZSB9IGZyb20gJy4vcGlwZS9FbmRPZldlZWtEaXNwbGF5UGlwZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZSwgTm92b1Rvb2x0aXBNb2R1bGUsIE5vdm9QaXBlc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9FdmVudFR5cGVMZWdlbmRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoRGF5RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0hlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFySG91clNlZ21lbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXRlQ2hhbmdlRWxlbWVudCxcbiAgICBXZWVrZGF5UGlwZSxcbiAgICBEYXlPZk1vbnRoUGlwZSxcbiAgICBNb250aFBpcGUsXG4gICAgTW9udGhEYXlQaXBlLFxuICAgIFllYXJQaXBlLFxuICAgIEhvdXJzUGlwZSxcbiAgICBFbmRPZldlZWtEaXNwbGF5UGlwZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9FdmVudFR5cGVMZWdlbmRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoRGF5RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0hlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFySG91clNlZ21lbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckFsbERheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJEYXRlQ2hhbmdlRWxlbWVudCxcbiAgICBXZWVrZGF5UGlwZSxcbiAgICBEYXlPZk1vbnRoUGlwZSxcbiAgICBNb250aFBpcGUsXG4gICAgTW9udGhEYXlQaXBlLFxuICAgIFllYXJQaXBlLFxuICAgIEhvdXJzUGlwZSxcbiAgICBFbmRPZldlZWtEaXNwbGF5UGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhbGVuZGFyTW9kdWxlIHt9XG4iXX0=