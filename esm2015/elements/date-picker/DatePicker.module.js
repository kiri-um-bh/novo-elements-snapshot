// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoPipesModule } from '../../pipes/Pipes.module';
import { NovoIconModule } from '../icon/Icon.module';
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoChipsModule } from './../chips/Chips.module';
import { NovoCalendarElement } from './calendar/calendar.component';
import { NovoDatePickerElement } from './DatePicker';
import { NovoDatePickerInputElement } from './DatePickerInput';
import { NovoDateRangeInputElement } from './DateRangeInput';
import { NovoMonthSelectElement } from './month-select/month-select.component';
import { NovoMonthViewElement } from './month-view/month-view.component';
import { NovoMultiDateInputElement } from './MultiDateInput';
import { NovoYearSelectElement } from './year-select/year-select.component';
import * as i0 from "@angular/core";
export class NovoDatePickerModule {
}
NovoDatePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoDatePickerModule });
NovoDatePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoDatePickerModule_Factory(t) { return new (t || NovoDatePickerModule)(); }, imports: [[CommonModule, FormsModule, NovoPipesModule, NovoOverlayModule, TextMaskModule, NovoIconModule, NovoChipsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoDatePickerModule, { declarations: [NovoDatePickerElement,
        NovoDatePickerInputElement,
        NovoDateRangeInputElement,
        NovoMultiDateInputElement,
        NovoMonthViewElement,
        NovoMonthSelectElement,
        NovoYearSelectElement,
        NovoCalendarElement], imports: [CommonModule, FormsModule, NovoPipesModule, NovoOverlayModule, TextMaskModule, NovoIconModule, NovoChipsModule], exports: [NovoDatePickerElement,
        NovoDatePickerInputElement,
        NovoDateRangeInputElement,
        NovoMultiDateInputElement,
        NovoMonthViewElement,
        NovoMonthSelectElement,
        NovoYearSelectElement,
        NovoCalendarElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoPipesModule, NovoOverlayModule, TextMaskModule, NovoIconModule, NovoChipsModule],
                declarations: [
                    NovoDatePickerElement,
                    NovoDatePickerInputElement,
                    NovoDateRangeInputElement,
                    NovoMultiDateInputElement,
                    NovoMonthViewElement,
                    NovoMonthSelectElement,
                    NovoYearSelectElement,
                    NovoCalendarElement,
                ],
                exports: [
                    NovoDatePickerElement,
                    NovoDatePickerInputElement,
                    NovoDateRangeInputElement,
                    NovoMultiDateInputElement,
                    NovoMonthViewElement,
                    NovoMonthSelectElement,
                    NovoYearSelectElement,
                    NovoCalendarElement,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLFNBQVM7QUFDVCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsTUFBTTtBQUNOLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUF5QjVFLE1BQU0sT0FBTyxvQkFBb0I7O3dEQUFwQixvQkFBb0I7dUhBQXBCLG9CQUFvQixrQkF0QnRCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7d0ZBc0I5RyxvQkFBb0IsbUJBcEI3QixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsbUJBQW1CLGFBVFgsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLGFBWXRILHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixtQkFBbUI7a0RBR1Ysb0JBQW9CO2NBdkJoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7Z0JBQ3pILFlBQVksRUFBRTtvQkFDWixxQkFBcUI7b0JBQ3JCLDBCQUEwQjtvQkFDMUIseUJBQXlCO29CQUN6Qix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsMEJBQTBCO29CQUMxQix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9QaXBlc01vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzL1BpcGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vSWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b092ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwc01vZHVsZSB9IGZyb20gJy4vLi4vY2hpcHMvQ2hpcHMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhckVsZW1lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlckVsZW1lbnQgfSBmcm9tICcuL0RhdGVQaWNrZXInO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJJbnB1dEVsZW1lbnQgfSBmcm9tICcuL0RhdGVQaWNrZXJJbnB1dCc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVJhbmdlSW5wdXRFbGVtZW50IH0gZnJvbSAnLi9EYXRlUmFuZ2VJbnB1dCc7XG5pbXBvcnQgeyBOb3ZvTW9udGhTZWxlY3RFbGVtZW50IH0gZnJvbSAnLi9tb250aC1zZWxlY3QvbW9udGgtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvTW9udGhWaWV3RWxlbWVudCB9IGZyb20gJy4vbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvTXVsdGlEYXRlSW5wdXRFbGVtZW50IH0gZnJvbSAnLi9NdWx0aURhdGVJbnB1dCc7XG5pbXBvcnQgeyBOb3ZvWWVhclNlbGVjdEVsZW1lbnQgfSBmcm9tICcuL3llYXItc2VsZWN0L3llYXItc2VsZWN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvUGlwZXNNb2R1bGUsIE5vdm9PdmVybGF5TW9kdWxlLCBUZXh0TWFza01vZHVsZSwgTm92b0ljb25Nb2R1bGUsIE5vdm9DaGlwc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9EYXRlUGlja2VyRWxlbWVudCxcbiAgICBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudCxcbiAgICBOb3ZvRGF0ZVJhbmdlSW5wdXRFbGVtZW50LFxuICAgIE5vdm9NdWx0aURhdGVJbnB1dEVsZW1lbnQsXG4gICAgTm92b01vbnRoVmlld0VsZW1lbnQsXG4gICAgTm92b01vbnRoU2VsZWN0RWxlbWVudCxcbiAgICBOb3ZvWWVhclNlbGVjdEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRWxlbWVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9EYXRlUGlja2VyRWxlbWVudCxcbiAgICBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudCxcbiAgICBOb3ZvRGF0ZVJhbmdlSW5wdXRFbGVtZW50LFxuICAgIE5vdm9NdWx0aURhdGVJbnB1dEVsZW1lbnQsXG4gICAgTm92b01vbnRoVmlld0VsZW1lbnQsXG4gICAgTm92b01vbnRoU2VsZWN0RWxlbWVudCxcbiAgICBOb3ZvWWVhclNlbGVjdEVsZW1lbnQsXG4gICAgTm92b0NhbGVuZGFyRWxlbWVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVQaWNrZXJNb2R1bGUge31cbiJdfQ==