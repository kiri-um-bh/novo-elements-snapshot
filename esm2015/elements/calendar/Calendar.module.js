// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoPipesModule } from '../../pipes/Pipes.module';
// APP
import { NovoButtonModule } from '../button/Button.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { NovoCalendarDateChangeElement } from './common/CalendarDateChange';
// Common Elements
import { NovoEventTypeLegendElement } from './common/EventTypeLegend';
import { NovoCalendarAllDayEventElement } from './day/CalendarAllDayEvent';
import { NovoCalendarDayEventElement } from './day/CalendarDayEvent';
// Day View
import { NovoCalendarDayViewElement } from './day/CalendarDayView';
import { NovoCalendarHourSegmentElement } from './day/CalendarHourSegment';
import { NovoCalendarMonthDayElement } from './month/CalendarMonthDay';
import { NovoCalendarMonthHeaderElement } from './month/CalendarMonthHeader';
// Month View
import { NovoCalendarMonthViewElement } from './month/CalendarMonthView';
import { DayOfMonthPipe } from './pipe/DayOfMonth.pipe';
import { EndOfWeekDisplayPipe } from './pipe/EndOfWeekDisplayPipe.pipe';
import { HoursPipe } from './pipe/Hours.pipe';
import { MonthPipe } from './pipe/Month.pipe';
import { MonthDayPipe } from './pipe/MonthDay.pipe';
// Common
import { WeekdayPipe } from './pipe/Weekday.pipe';
import { YearPipe } from './pipe/Year.pipe';
import { NovoCalendarWeekEventElement } from './week/CalendarWeekEvent';
import { NovoCalendarWeekHeaderElement } from './week/CalendarWeekHeader';
// Week View
import { NovoCalendarWeekViewElement } from './week/CalendarWeekView';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvQ2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLGtCQUFrQjtBQUNsQixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxXQUFXO0FBQ1gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0UsYUFBYTtBQUNiLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRSxZQUFZO0FBQ1osT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBK0N0RSxNQUFNLE9BQU8sa0JBQWtCOztzREFBbEIsa0JBQWtCO21IQUFsQixrQkFBa0Isa0JBNUNwQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7d0ZBNENsRSxrQkFBa0IsbUJBMUMzQiwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsY0FBYztRQUNkLFNBQVM7UUFDVCxZQUFZO1FBQ1osUUFBUTtRQUNSLFNBQVM7UUFDVCxvQkFBb0IsYUFwQlosWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsYUF1QjFFLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLFdBQVc7UUFDWCxjQUFjO1FBQ2QsU0FBUztRQUNULFlBQVk7UUFDWixRQUFRO1FBQ1IsU0FBUztRQUNULG9CQUFvQjtrREFHWCxrQkFBa0I7Y0E3QzlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2dCQUM3RSxZQUFZLEVBQUU7b0JBQ1osMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtvQkFDN0IsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsV0FBVztvQkFDWCxjQUFjO29CQUNkLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixRQUFRO29CQUNSLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtvQkFDN0IsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsV0FBVztvQkFDWCxjQUFjO29CQUNkLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixRQUFRO29CQUNSLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9QaXBlc01vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzL1BpcGVzLm1vZHVsZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQgfSBmcm9tICcuL2NvbW1vbi9DYWxlbmRhckRhdGVDaGFuZ2UnO1xuLy8gQ29tbW9uIEVsZW1lbnRzXG5pbXBvcnQgeyBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCB9IGZyb20gJy4vY29tbW9uL0V2ZW50VHlwZUxlZ2VuZCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckFsbERheUV2ZW50JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFyRGF5RXZlbnQnO1xuLy8gRGF5IFZpZXdcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRheVZpZXdFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJEYXlWaWV3JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFySG91clNlZ21lbnQnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoRGF5JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vbW9udGgvQ2FsZW5kYXJNb250aEhlYWRlcic7XG4vLyBNb250aCBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoVmlldyc7XG5pbXBvcnQgeyBEYXlPZk1vbnRoUGlwZSB9IGZyb20gJy4vcGlwZS9EYXlPZk1vbnRoLnBpcGUnO1xuaW1wb3J0IHsgRW5kT2ZXZWVrRGlzcGxheVBpcGUgfSBmcm9tICcuL3BpcGUvRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZSc7XG5pbXBvcnQgeyBIb3Vyc1BpcGUgfSBmcm9tICcuL3BpcGUvSG91cnMucGlwZSc7XG5pbXBvcnQgeyBNb250aFBpcGUgfSBmcm9tICcuL3BpcGUvTW9udGgucGlwZSc7XG5pbXBvcnQgeyBNb250aERheVBpcGUgfSBmcm9tICcuL3BpcGUvTW9udGhEYXkucGlwZSc7XG4vLyBDb21tb25cbmltcG9ydCB7IFdlZWtkYXlQaXBlIH0gZnJvbSAnLi9waXBlL1dlZWtkYXkucGlwZSc7XG5pbXBvcnQgeyBZZWFyUGlwZSB9IGZyb20gJy4vcGlwZS9ZZWFyLnBpcGUnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyV2Vla0V2ZW50RWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtFdmVudCc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtIZWFkZXInO1xuLy8gV2VlayBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrVmlld0VsZW1lbnQgfSBmcm9tICcuL3dlZWsvQ2FsZW5kYXJXZWVrVmlldyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9Ub29sdGlwTW9kdWxlLCBOb3ZvUGlwZXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQsXG4gICAgV2Vla2RheVBpcGUsXG4gICAgRGF5T2ZNb250aFBpcGUsXG4gICAgTW9udGhQaXBlLFxuICAgIE1vbnRoRGF5UGlwZSxcbiAgICBZZWFyUGlwZSxcbiAgICBIb3Vyc1BpcGUsXG4gICAgRW5kT2ZXZWVrRGlzcGxheVBpcGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvRXZlbnRUeXBlTGVnZW5kRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aFZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aERheUVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyV2Vla1ZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5Vmlld0VsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJBbGxEYXlFdmVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRGF0ZUNoYW5nZUVsZW1lbnQsXG4gICAgV2Vla2RheVBpcGUsXG4gICAgRGF5T2ZNb250aFBpcGUsXG4gICAgTW9udGhQaXBlLFxuICAgIE1vbnRoRGF5UGlwZSxcbiAgICBZZWFyUGlwZSxcbiAgICBIb3Vyc1BpcGUsXG4gICAgRW5kT2ZXZWVrRGlzcGxheVBpcGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhck1vZHVsZSB7fVxuIl19