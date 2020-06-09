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
import * as i0 from "@angular/core";
export class NovoCalendarModule {
}
NovoCalendarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCalendarModule });
NovoCalendarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCalendarModule_Factory(t) { return new (t || NovoCalendarModule)(); }, imports: [[CommonModule, NovoButtonModule, NovoTooltipModule, NovoPipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCalendarModule, { declarations: [NovoEventTypeLegendElement,
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
        EndOfWeekDisplayPipe], imports: [CommonModule, NovoButtonModule, NovoTooltipModule, NovoPipesModule], exports: [NovoEventTypeLegendElement,
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
        EndOfWeekDisplayPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL0NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxrQkFBa0I7QUFDbEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUUsYUFBYTtBQUNiLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZFLFlBQVk7QUFDWixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RSxXQUFXO0FBQ1gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsU0FBUztBQUNULE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQStDeEUsTUFBTSxPQUFPLGtCQUFrQjs7c0RBQWxCLGtCQUFrQjttSEFBbEIsa0JBQWtCLGtCQTVDcEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO3dGQTRDbEUsa0JBQWtCLG1CQTFDM0IsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsV0FBVztRQUNYLGNBQWM7UUFDZCxTQUFTO1FBQ1QsWUFBWTtRQUNaLFFBQVE7UUFDUixTQUFTO1FBQ1Qsb0JBQW9CLGFBcEJaLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLGFBdUIxRSwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsY0FBYztRQUNkLFNBQVM7UUFDVCxZQUFZO1FBQ1osUUFBUTtRQUNSLFNBQVM7UUFDVCxvQkFBb0I7a0RBR1gsa0JBQWtCO2NBN0M5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztnQkFDN0UsWUFBWSxFQUFFO29CQUNaLDBCQUEwQjtvQkFDMUIsNEJBQTRCO29CQUM1Qiw4QkFBOEI7b0JBQzlCLDJCQUEyQjtvQkFDM0IsMkJBQTJCO29CQUMzQiw2QkFBNkI7b0JBQzdCLDRCQUE0QjtvQkFDNUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLDhCQUE4QjtvQkFDOUIsOEJBQThCO29CQUM5Qiw2QkFBNkI7b0JBQzdCLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxTQUFTO29CQUNULFlBQVk7b0JBQ1osUUFBUTtvQkFDUixTQUFTO29CQUNULG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDBCQUEwQjtvQkFDMUIsNEJBQTRCO29CQUM1Qiw4QkFBOEI7b0JBQzlCLDJCQUEyQjtvQkFDM0IsMkJBQTJCO29CQUMzQiw2QkFBNkI7b0JBQzdCLDRCQUE0QjtvQkFDNUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLDhCQUE4QjtvQkFDOUIsOEJBQThCO29CQUM5Qiw2QkFBNkI7b0JBQzdCLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxTQUFTO29CQUNULFlBQVk7b0JBQ1osUUFBUTtvQkFDUixTQUFTO29CQUNULG9CQUFvQjtpQkFDckI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BpcGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMvUGlwZXMubW9kdWxlJztcbi8vIENvbW1vbiBFbGVtZW50c1xuaW1wb3J0IHsgTm92b0V2ZW50VHlwZUxlZ2VuZEVsZW1lbnQgfSBmcm9tICcuL2NvbW1vbi9FdmVudFR5cGVMZWdlbmQnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQgfSBmcm9tICcuL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UnO1xuXG4vLyBNb250aCBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoVmlldyc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQgfSBmcm9tICcuL21vbnRoL0NhbGVuZGFyTW9udGhIZWFkZXInO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoRGF5Jztcbi8vIFdlZWsgVmlld1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50IH0gZnJvbSAnLi93ZWVrL0NhbGVuZGFyV2Vla1ZpZXcnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyV2Vla0hlYWRlckVsZW1lbnQgfSBmcm9tICcuL3dlZWsvQ2FsZW5kYXJXZWVrSGVhZGVyJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQgfSBmcm9tICcuL3dlZWsvQ2FsZW5kYXJXZWVrRXZlbnQnO1xuLy8gRGF5IFZpZXdcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRheVZpZXdFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJEYXlWaWV3JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFyRGF5RXZlbnQnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFySG91clNlZ21lbnRFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJIb3VyU2VnbWVudCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckFsbERheUV2ZW50Jztcbi8vIENvbW1vblxuaW1wb3J0IHsgV2Vla2RheVBpcGUgfSBmcm9tICcuL3BpcGUvV2Vla2RheS5waXBlJztcbmltcG9ydCB7IE1vbnRoUGlwZSB9IGZyb20gJy4vcGlwZS9Nb250aC5waXBlJztcbmltcG9ydCB7IE1vbnRoRGF5UGlwZSB9IGZyb20gJy4vcGlwZS9Nb250aERheS5waXBlJztcbmltcG9ydCB7IFllYXJQaXBlIH0gZnJvbSAnLi9waXBlL1llYXIucGlwZSc7XG5pbXBvcnQgeyBIb3Vyc1BpcGUgfSBmcm9tICcuL3BpcGUvSG91cnMucGlwZSc7XG5pbXBvcnQgeyBEYXlPZk1vbnRoUGlwZSB9IGZyb20gJy4vcGlwZS9EYXlPZk1vbnRoLnBpcGUnO1xuaW1wb3J0IHsgRW5kT2ZXZWVrRGlzcGxheVBpcGUgfSBmcm9tICcuL3BpcGUvRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9Ub29sdGlwTW9kdWxlLCBOb3ZvUGlwZXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQsXG4gICAgV2Vla2RheVBpcGUsXG4gICAgRGF5T2ZNb250aFBpcGUsXG4gICAgTW9udGhQaXBlLFxuICAgIE1vbnRoRGF5UGlwZSxcbiAgICBZZWFyUGlwZSxcbiAgICBIb3Vyc1BpcGUsXG4gICAgRW5kT2ZXZWVrRGlzcGxheVBpcGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQsXG4gICAgV2Vla2RheVBpcGUsXG4gICAgRGF5T2ZNb250aFBpcGUsXG4gICAgTW9udGhQaXBlLFxuICAgIE1vbnRoRGF5UGlwZSxcbiAgICBZZWFyUGlwZSxcbiAgICBIb3Vyc1BpcGUsXG4gICAgRW5kT2ZXZWVrRGlzcGxheVBpcGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhck1vZHVsZSB7fVxuIl19