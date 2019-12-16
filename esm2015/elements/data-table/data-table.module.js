/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { NovoButtonModule } from '../button/Button.module';
import { NovoDropdownModule } from '../dropdown/Dropdown.module';
import { NovoFormExtrasModule } from '../form/extras/FormExtras.module';
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoTilesModule } from '../tiles/Tiles.module';
import { NovoSearchBoxModule } from '../search/SearchBox.module';
import { NovoDatePickerModule } from '../date-picker/DatePicker.module';
import { NovoCommonModule } from '../common/common.module';
import { NovoSelectModule } from '../select/Select.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { NovoDataTable } from './data-table.component';
import { NovoDataTableCell } from './cells/data-table-cell.component';
import { NovoDataTableCheckboxCell } from './cells/data-table-checkbox-cell.component';
import { NovoDataTableExpandCell } from './cells/data-table-expand-cell.component';
import { NovoDataTableHeaderRow } from './rows/data-table-header-row.component';
import { NovoDataTableRow } from './rows/data-table-row.component';
import { NovoDataTableCellHeader } from './cell-headers/data-table-header-cell.component';
import { NovoDataTableExpandHeaderCell } from './cell-headers/data-table-expand-header-cell.component';
import { NovoDataTableCheckboxHeaderCell } from './cell-headers/data-table-checkbox-header-cell.component';
import { NovoDataTableHeaderCell } from './cell-headers/data-table-header-cell.directive';
import { NovoDataTableSortFilter } from './sort-filter/sort-filter.directive';
import { NovoDataTablePagination } from './pagination/data-table-pagination.component';
import { DataTableState } from './state/data-table-state.service';
import { DataTableInterpolatePipe, DateTableDateRendererPipe, DateTableCurrencyRendererPipe, DateTableDateTimeRendererPipe, DateTableNumberRendererPipe, DateTableTimeRendererPipe, DataTableBigDecimalRendererPipe, } from './data-table.pipes';
import { NovoDataTableExpandDirective } from './data-table-expand.directive';
import { NovoDataTableClearButton } from './data-table-clear-button.component';
export class NovoDataTableModule {
}
NovoDataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NovoDatePickerModule,
                    CdkTableModule,
                    CommonModule,
                    FormsModule,
                    NovoButtonModule,
                    NovoDropdownModule,
                    NovoFormExtrasModule,
                    NovoLoadingModule,
                    NovoTilesModule,
                    NovoSearchBoxModule,
                    NovoCommonModule,
                    NovoSelectModule,
                    NovoTooltipModule,
                ],
                declarations: [
                    DataTableInterpolatePipe,
                    DateTableDateRendererPipe,
                    DateTableCurrencyRendererPipe,
                    DateTableDateTimeRendererPipe,
                    DateTableNumberRendererPipe,
                    DateTableTimeRendererPipe,
                    DataTableBigDecimalRendererPipe,
                    NovoDataTableCellHeader,
                    NovoDataTableSortFilter,
                    NovoDataTableHeaderCell,
                    NovoDataTableCell,
                    NovoDataTableHeaderRow,
                    NovoDataTableRow,
                    NovoDataTablePagination,
                    NovoDataTableCheckboxCell,
                    NovoDataTableCheckboxHeaderCell,
                    NovoDataTableExpandCell,
                    NovoDataTableExpandHeaderCell,
                    NovoDataTable,
                    NovoDataTableExpandDirective,
                    NovoDataTableClearButton,
                ],
                providers: [DataTableState],
                exports: [
                    NovoDataTable,
                    DataTableInterpolatePipe,
                    DateTableDateRendererPipe,
                    DateTableCurrencyRendererPipe,
                    DateTableDateTimeRendererPipe,
                    DateTableNumberRendererPipe,
                    DateTableTimeRendererPipe,
                    DataTableBigDecimalRendererPipe,
                    NovoDataTableClearButton,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDekIsNkJBQTZCLEVBQzdCLDZCQUE2QixFQUM3QiwyQkFBMkIsRUFDM0IseUJBQXlCLEVBQ3pCLCtCQUErQixHQUNoQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBc0QvRSxNQUFNLE9BQU8sbUJBQW1COzs7WUFwRC9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osd0JBQXdCO29CQUN4Qix5QkFBeUI7b0JBQ3pCLDZCQUE2QjtvQkFDN0IsNkJBQTZCO29CQUM3QiwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsK0JBQStCO29CQUMvQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2QixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsK0JBQStCO29CQUMvQix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0IsYUFBYTtvQkFDYiw0QkFBNEI7b0JBQzVCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYix3QkFBd0I7b0JBQ3hCLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3Qiw2QkFBNkI7b0JBQzdCLDJCQUEyQjtvQkFDM0IseUJBQXlCO29CQUN6QiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbGVzTW9kdWxlIH0gZnJvbSAnLi4vdGlsZXMvVGlsZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuLi9zZWFyY2gvU2VhcmNoQm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc2VsZWN0L1NlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcblxuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUNlbGwgfSBmcm9tICcuL2NlbGxzL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUNoZWNrYm94Q2VsbCB9IGZyb20gJy4vY2VsbHMvZGF0YS10YWJsZS1jaGVja2JveC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlRXhwYW5kQ2VsbCB9IGZyb20gJy4vY2VsbHMvZGF0YS10YWJsZS1leHBhbmQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUhlYWRlclJvdyB9IGZyb20gJy4vcm93cy9kYXRhLXRhYmxlLWhlYWRlci1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVSb3cgfSBmcm9tICcuL3Jvd3MvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyIH0gZnJvbSAnLi9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUV4cGFuZEhlYWRlckNlbGwgfSBmcm9tICcuL2NlbGwtaGVhZGVycy9kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUNoZWNrYm94SGVhZGVyQ2VsbCB9IGZyb20gJy4vY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVIZWFkZXJDZWxsIH0gZnJvbSAnLi9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuL3NvcnQtZmlsdGVyL3NvcnQtZmlsdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlUGFnaW5hdGlvbiB9IGZyb20gJy4vcGFnaW5hdGlvbi9kYXRhLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgRGF0YVRhYmxlSW50ZXJwb2xhdGVQaXBlLFxuICBEYXRlVGFibGVEYXRlUmVuZGVyZXJQaXBlLFxuICBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZSxcbiAgRGF0ZVRhYmxlRGF0ZVRpbWVSZW5kZXJlclBpcGUsXG4gIERhdGVUYWJsZU51bWJlclJlbmRlcmVyUGlwZSxcbiAgRGF0ZVRhYmxlVGltZVJlbmRlcmVyUGlwZSxcbiAgRGF0YVRhYmxlQmlnRGVjaW1hbFJlbmRlcmVyUGlwZSxcbn0gZnJvbSAnLi9kYXRhLXRhYmxlLnBpcGVzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVFeHBhbmREaXJlY3RpdmUgfSBmcm9tICcuL2RhdGEtdGFibGUtZXhwYW5kLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlQ2xlYXJCdXR0b24gfSBmcm9tICcuL2RhdGEtdGFibGUtY2xlYXItYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOb3ZvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b0xvYWRpbmdNb2R1bGUsXG4gICAgTm92b1RpbGVzTW9kdWxlLFxuICAgIE5vdm9TZWFyY2hCb3hNb2R1bGUsXG4gICAgTm92b0NvbW1vbk1vZHVsZSxcbiAgICBOb3ZvU2VsZWN0TW9kdWxlLFxuICAgIE5vdm9Ub29sdGlwTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRhVGFibGVJbnRlcnBvbGF0ZVBpcGUsXG4gICAgRGF0ZVRhYmxlRGF0ZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVEYXRlVGltZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVOdW1iZXJSZW5kZXJlclBpcGUsXG4gICAgRGF0ZVRhYmxlVGltZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXJQaXBlLFxuICAgIE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyLFxuICAgIE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyLFxuICAgIE5vdm9EYXRhVGFibGVIZWFkZXJDZWxsLFxuICAgIE5vdm9EYXRhVGFibGVDZWxsLFxuICAgIE5vdm9EYXRhVGFibGVIZWFkZXJSb3csXG4gICAgTm92b0RhdGFUYWJsZVJvdyxcbiAgICBOb3ZvRGF0YVRhYmxlUGFnaW5hdGlvbixcbiAgICBOb3ZvRGF0YVRhYmxlQ2hlY2tib3hDZWxsLFxuICAgIE5vdm9EYXRhVGFibGVDaGVja2JveEhlYWRlckNlbGwsXG4gICAgTm92b0RhdGFUYWJsZUV4cGFuZENlbGwsXG4gICAgTm92b0RhdGFUYWJsZUV4cGFuZEhlYWRlckNlbGwsXG4gICAgTm92b0RhdGFUYWJsZSxcbiAgICBOb3ZvRGF0YVRhYmxlRXhwYW5kRGlyZWN0aXZlLFxuICAgIE5vdm9EYXRhVGFibGVDbGVhckJ1dHRvbixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbRGF0YVRhYmxlU3RhdGVdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b0RhdGFUYWJsZSxcbiAgICBEYXRhVGFibGVJbnRlcnBvbGF0ZVBpcGUsXG4gICAgRGF0ZVRhYmxlRGF0ZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVEYXRlVGltZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVOdW1iZXJSZW5kZXJlclBpcGUsXG4gICAgRGF0ZVRhYmxlVGltZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXJQaXBlLFxuICAgIE5vdm9EYXRhVGFibGVDbGVhckJ1dHRvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZU1vZHVsZSB7fVxuIl19