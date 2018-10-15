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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL0NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUc1RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFdkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXhFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUUzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RTtJQUFBO0lBNkNpQyxDQUFDOztnQkE3Q2pDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO29CQUM3RSxZQUFZLEVBQUU7d0JBQ1osMEJBQTBCO3dCQUMxQiw0QkFBNEI7d0JBQzVCLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3dCQUMzQiwyQkFBMkI7d0JBQzNCLDZCQUE2Qjt3QkFDN0IsNEJBQTRCO3dCQUM1QiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IsOEJBQThCO3dCQUM5Qiw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0IsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLFNBQVM7d0JBQ1QsWUFBWTt3QkFDWixRQUFRO3dCQUNSLFNBQVM7d0JBQ1Qsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsMEJBQTBCO3dCQUMxQiw0QkFBNEI7d0JBQzVCLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3dCQUMzQiwyQkFBMkI7d0JBQzNCLDZCQUE2Qjt3QkFDN0IsNEJBQTRCO3dCQUM1QiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IsOEJBQThCO3dCQUM5Qiw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0IsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLFNBQVM7d0JBQ1QsWUFBWTt3QkFDWixRQUFRO3dCQUNSLFNBQVM7d0JBQ1Qsb0JBQW9CO3FCQUNyQjtpQkFDRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQTdDbEMsSUE2Q2tDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BpcGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMvUGlwZXMubW9kdWxlJztcbi8vIENvbW1vbiBFbGVtZW50c1xuaW1wb3J0IHsgTm92b0V2ZW50VHlwZUxlZ2VuZEVsZW1lbnQgfSBmcm9tICcuL2NvbW1vbi9FdmVudFR5cGVMZWdlbmQnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQgfSBmcm9tICcuL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UnO1xuXG4vLyBNb250aCBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoVmlldyc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQgfSBmcm9tICcuL21vbnRoL0NhbGVuZGFyTW9udGhIZWFkZXInO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoRGF5Jztcbi8vIFdlZWsgVmlld1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50IH0gZnJvbSAnLi93ZWVrL0NhbGVuZGFyV2Vla1ZpZXcnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyV2Vla0hlYWRlckVsZW1lbnQgfSBmcm9tICcuL3dlZWsvQ2FsZW5kYXJXZWVrSGVhZGVyJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQgfSBmcm9tICcuL3dlZWsvQ2FsZW5kYXJXZWVrRXZlbnQnO1xuLy8gRGF5IFZpZXdcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRheVZpZXdFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJEYXlWaWV3JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFyRGF5RXZlbnQnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFySG91clNlZ21lbnRFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJIb3VyU2VnbWVudCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckFsbERheUV2ZW50Jztcbi8vIENvbW1vblxuaW1wb3J0IHsgV2Vla2RheVBpcGUgfSBmcm9tICcuL3BpcGUvV2Vla2RheS5waXBlJztcbmltcG9ydCB7IE1vbnRoUGlwZSB9IGZyb20gJy4vcGlwZS9Nb250aC5waXBlJztcbmltcG9ydCB7IE1vbnRoRGF5UGlwZSB9IGZyb20gJy4vcGlwZS9Nb250aERheS5waXBlJztcbmltcG9ydCB7IFllYXJQaXBlIH0gZnJvbSAnLi9waXBlL1llYXIucGlwZSc7XG5pbXBvcnQgeyBIb3Vyc1BpcGUgfSBmcm9tICcuL3BpcGUvSG91cnMucGlwZSc7XG5pbXBvcnQgeyBEYXlPZk1vbnRoUGlwZSB9IGZyb20gJy4vcGlwZS9EYXlPZk1vbnRoLnBpcGUnO1xuaW1wb3J0IHsgRW5kT2ZXZWVrRGlzcGxheVBpcGUgfSBmcm9tICcuL3BpcGUvRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9Ub29sdGlwTW9kdWxlLCBOb3ZvUGlwZXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQsXG4gICAgV2Vla2RheVBpcGUsXG4gICAgRGF5T2ZNb250aFBpcGUsXG4gICAgTW9udGhQaXBlLFxuICAgIE1vbnRoRGF5UGlwZSxcbiAgICBZZWFyUGlwZSxcbiAgICBIb3Vyc1BpcGUsXG4gICAgRW5kT2ZXZWVrRGlzcGxheVBpcGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQsXG4gICAgV2Vla2RheVBpcGUsXG4gICAgRGF5T2ZNb250aFBpcGUsXG4gICAgTW9udGhQaXBlLFxuICAgIE1vbnRoRGF5UGlwZSxcbiAgICBZZWFyUGlwZSxcbiAgICBIb3Vyc1BpcGUsXG4gICAgRW5kT2ZXZWVrRGlzcGxheVBpcGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhck1vZHVsZSB7fVxuIl19