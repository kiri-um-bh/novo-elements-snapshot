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
var NovoCalendarModule = /** @class */ (function () {
    function NovoCalendarModule() {
    }
    NovoCalendarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCalendarModule });
    NovoCalendarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCalendarModule_Factory(t) { return new (t || NovoCalendarModule)(); }, imports: [[CommonModule, NovoButtonModule, NovoTooltipModule, NovoPipesModule]] });
    return NovoCalendarModule;
}());
export { NovoCalendarModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL0NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxrQkFBa0I7QUFDbEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUUsYUFBYTtBQUNiLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZFLFlBQVk7QUFDWixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RSxXQUFXO0FBQ1gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsU0FBUztBQUNULE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUV4RTtJQUFBO0tBNkNrQzswREFBckIsa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBNUNwQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7NkJBbEMvRTtDQThFa0MsQUE3Q2xDLElBNkNrQztTQUFyQixrQkFBa0I7d0ZBQWxCLGtCQUFrQixtQkExQzNCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLFdBQVc7UUFDWCxjQUFjO1FBQ2QsU0FBUztRQUNULFlBQVk7UUFDWixRQUFRO1FBQ1IsU0FBUztRQUNULG9CQUFvQixhQXBCWixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxhQXVCMUUsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsV0FBVztRQUNYLGNBQWM7UUFDZCxTQUFTO1FBQ1QsWUFBWTtRQUNaLFFBQVE7UUFDUixTQUFTO1FBQ1Qsb0JBQW9CO2tEQUdYLGtCQUFrQjtjQTdDOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7Z0JBQzdFLFlBQVksRUFBRTtvQkFDWiwwQkFBMEI7b0JBQzFCLDRCQUE0QjtvQkFDNUIsOEJBQThCO29CQUM5QiwyQkFBMkI7b0JBQzNCLDJCQUEyQjtvQkFDM0IsNkJBQTZCO29CQUM3Qiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQiw4QkFBOEI7b0JBQzlCLDhCQUE4QjtvQkFDOUIsNkJBQTZCO29CQUM3QixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsU0FBUztvQkFDVCxZQUFZO29CQUNaLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCwwQkFBMEI7b0JBQzFCLDRCQUE0QjtvQkFDNUIsOEJBQThCO29CQUM5QiwyQkFBMkI7b0JBQzNCLDJCQUEyQjtvQkFDM0IsNkJBQTZCO29CQUM3Qiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQiw4QkFBOEI7b0JBQzlCLDhCQUE4QjtvQkFDOUIsNkJBQTZCO29CQUM3QixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsU0FBUztvQkFDVCxZQUFZO29CQUNaLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxvQkFBb0I7aUJBQ3JCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IE5vdm9QaXBlc01vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzL1BpcGVzLm1vZHVsZSc7XG4vLyBDb21tb24gRWxlbWVudHNcbmltcG9ydCB7IE5vdm9FdmVudFR5cGVMZWdlbmRFbGVtZW50IH0gZnJvbSAnLi9jb21tb24vRXZlbnRUeXBlTGVnZW5kJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50IH0gZnJvbSAnLi9jb21tb24vQ2FsZW5kYXJEYXRlQ2hhbmdlJztcblxuLy8gTW9udGggVmlld1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCB9IGZyb20gJy4vbW9udGgvQ2FsZW5kYXJNb250aFZpZXcnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9udGhIZWFkZXJFbGVtZW50IH0gZnJvbSAnLi9tb250aC9DYWxlbmRhck1vbnRoSGVhZGVyJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vbnRoRGF5RWxlbWVudCB9IGZyb20gJy4vbW9udGgvQ2FsZW5kYXJNb250aERheSc7XG4vLyBXZWVrIFZpZXdcbmltcG9ydCB7IE5vdm9DYWxlbmRhcldlZWtWaWV3RWxlbWVudCB9IGZyb20gJy4vd2Vlay9DYWxlbmRhcldlZWtWaWV3JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhcldlZWtIZWFkZXJFbGVtZW50IH0gZnJvbSAnLi93ZWVrL0NhbGVuZGFyV2Vla0hlYWRlcic7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50IH0gZnJvbSAnLi93ZWVrL0NhbGVuZGFyV2Vla0V2ZW50Jztcbi8vIERheSBWaWV3XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJEYXlWaWV3RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFyRGF5Vmlldyc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJEYXlFdmVudEVsZW1lbnQgfSBmcm9tICcuL2RheS9DYWxlbmRhckRheUV2ZW50JztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckhvdXJTZWdtZW50RWxlbWVudCB9IGZyb20gJy4vZGF5L0NhbGVuZGFySG91clNlZ21lbnQnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50IH0gZnJvbSAnLi9kYXkvQ2FsZW5kYXJBbGxEYXlFdmVudCc7XG4vLyBDb21tb25cbmltcG9ydCB7IFdlZWtkYXlQaXBlIH0gZnJvbSAnLi9waXBlL1dlZWtkYXkucGlwZSc7XG5pbXBvcnQgeyBNb250aFBpcGUgfSBmcm9tICcuL3BpcGUvTW9udGgucGlwZSc7XG5pbXBvcnQgeyBNb250aERheVBpcGUgfSBmcm9tICcuL3BpcGUvTW9udGhEYXkucGlwZSc7XG5pbXBvcnQgeyBZZWFyUGlwZSB9IGZyb20gJy4vcGlwZS9ZZWFyLnBpcGUnO1xuaW1wb3J0IHsgSG91cnNQaXBlIH0gZnJvbSAnLi9waXBlL0hvdXJzLnBpcGUnO1xuaW1wb3J0IHsgRGF5T2ZNb250aFBpcGUgfSBmcm9tICcuL3BpcGUvRGF5T2ZNb250aC5waXBlJztcbmltcG9ydCB7IEVuZE9mV2Vla0Rpc3BsYXlQaXBlIH0gZnJvbSAnLi9waXBlL0VuZE9mV2Vla0Rpc3BsYXlQaXBlLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlLCBOb3ZvVG9vbHRpcE1vZHVsZSwgTm92b1BpcGVzTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b0V2ZW50VHlwZUxlZ2VuZEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheVZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50LFxuICAgIFdlZWtkYXlQaXBlLFxuICAgIERheU9mTW9udGhQaXBlLFxuICAgIE1vbnRoUGlwZSxcbiAgICBNb250aERheVBpcGUsXG4gICAgWWVhclBpcGUsXG4gICAgSG91cnNQaXBlLFxuICAgIEVuZE9mV2Vla0Rpc3BsYXlQaXBlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b0V2ZW50VHlwZUxlZ2VuZEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJNb250aEhlYWRlckVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyTW9udGhEYXlFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhcldlZWtWaWV3RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJXZWVrRXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheVZpZXdFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRheUV2ZW50RWxlbWVudCxcbiAgICBOb3ZvQ2FsZW5kYXJIb3VyU2VnbWVudEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyQWxsRGF5RXZlbnRFbGVtZW50LFxuICAgIE5vdm9DYWxlbmRhckRhdGVDaGFuZ2VFbGVtZW50LFxuICAgIFdlZWtkYXlQaXBlLFxuICAgIERheU9mTW9udGhQaXBlLFxuICAgIE1vbnRoUGlwZSxcbiAgICBNb250aERheVBpcGUsXG4gICAgWWVhclBpcGUsXG4gICAgSG91cnNQaXBlLFxuICAgIEVuZE9mV2Vla0Rpc3BsYXlQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FsZW5kYXJNb2R1bGUge31cbiJdfQ==