/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
import { DataTableInterpolatePipe, DateTableDateRendererPipe, DateTableCurrencyRendererPipe, DateTableDateTimeRendererPipe, DateTableNumberRendererPipe, DateTableTimeRendererPipe, } from './data-table.pipes';
import { NovoDataTableExpandDirective } from './data-table-expand.directive';
import { NovoDataTableClearButton } from './data-table-clear-button.component';
var NovoDataTableModule = /** @class */ (function () {
    function NovoDataTableModule() {
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
                        NovoDataTableClearButton,
                    ],
                },] }
    ];
    return NovoDataTableModule;
}());
export { NovoDataTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHlCQUF5QixFQUN6Qiw2QkFBNkIsRUFDN0IsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUMzQix5QkFBeUIsR0FDMUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUvRTtJQUFBO0lBa0RrQyxDQUFDOztnQkFsRGxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3FCQUNsQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0IsNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLGFBQWE7d0JBQ2IsNEJBQTRCO3dCQUM1Qix3QkFBd0I7cUJBQ3pCO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0IsNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3FCQUN6QjtpQkFDRjs7SUFDaUMsMEJBQUM7Q0FBQSxBQWxEbkMsSUFrRG1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbGVzTW9kdWxlIH0gZnJvbSAnLi4vdGlsZXMvVGlsZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuLi9zZWFyY2gvU2VhcmNoQm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc2VsZWN0L1NlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcblxuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUNlbGwgfSBmcm9tICcuL2NlbGxzL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUNoZWNrYm94Q2VsbCB9IGZyb20gJy4vY2VsbHMvZGF0YS10YWJsZS1jaGVja2JveC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlRXhwYW5kQ2VsbCB9IGZyb20gJy4vY2VsbHMvZGF0YS10YWJsZS1leHBhbmQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUhlYWRlclJvdyB9IGZyb20gJy4vcm93cy9kYXRhLXRhYmxlLWhlYWRlci1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVSb3cgfSBmcm9tICcuL3Jvd3MvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyIH0gZnJvbSAnLi9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUV4cGFuZEhlYWRlckNlbGwgfSBmcm9tICcuL2NlbGwtaGVhZGVycy9kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUNoZWNrYm94SGVhZGVyQ2VsbCB9IGZyb20gJy4vY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVIZWFkZXJDZWxsIH0gZnJvbSAnLi9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuL3NvcnQtZmlsdGVyL3NvcnQtZmlsdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlUGFnaW5hdGlvbiB9IGZyb20gJy4vcGFnaW5hdGlvbi9kYXRhLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgRGF0YVRhYmxlSW50ZXJwb2xhdGVQaXBlLFxuICBEYXRlVGFibGVEYXRlUmVuZGVyZXJQaXBlLFxuICBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZSxcbiAgRGF0ZVRhYmxlRGF0ZVRpbWVSZW5kZXJlclBpcGUsXG4gIERhdGVUYWJsZU51bWJlclJlbmRlcmVyUGlwZSxcbiAgRGF0ZVRhYmxlVGltZVJlbmRlcmVyUGlwZSxcbn0gZnJvbSAnLi9kYXRhLXRhYmxlLnBpcGVzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVFeHBhbmREaXJlY3RpdmUgfSBmcm9tICcuL2RhdGEtdGFibGUtZXhwYW5kLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlQ2xlYXJCdXR0b24gfSBmcm9tICcuL2RhdGEtdGFibGUtY2xlYXItYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOb3ZvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b0xvYWRpbmdNb2R1bGUsXG4gICAgTm92b1RpbGVzTW9kdWxlLFxuICAgIE5vdm9TZWFyY2hCb3hNb2R1bGUsXG4gICAgTm92b0NvbW1vbk1vZHVsZSxcbiAgICBOb3ZvU2VsZWN0TW9kdWxlLFxuICAgIE5vdm9Ub29sdGlwTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRhVGFibGVJbnRlcnBvbGF0ZVBpcGUsXG4gICAgRGF0ZVRhYmxlRGF0ZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVEYXRlVGltZVJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVOdW1iZXJSZW5kZXJlclBpcGUsXG4gICAgRGF0ZVRhYmxlVGltZVJlbmRlcmVyUGlwZSxcbiAgICBOb3ZvRGF0YVRhYmxlQ2VsbEhlYWRlcixcbiAgICBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcixcbiAgICBOb3ZvRGF0YVRhYmxlSGVhZGVyQ2VsbCxcbiAgICBOb3ZvRGF0YVRhYmxlQ2VsbCxcbiAgICBOb3ZvRGF0YVRhYmxlSGVhZGVyUm93LFxuICAgIE5vdm9EYXRhVGFibGVSb3csXG4gICAgTm92b0RhdGFUYWJsZVBhZ2luYXRpb24sXG4gICAgTm92b0RhdGFUYWJsZUNoZWNrYm94Q2VsbCxcbiAgICBOb3ZvRGF0YVRhYmxlQ2hlY2tib3hIZWFkZXJDZWxsLFxuICAgIE5vdm9EYXRhVGFibGVFeHBhbmRDZWxsLFxuICAgIE5vdm9EYXRhVGFibGVFeHBhbmRIZWFkZXJDZWxsLFxuICAgIE5vdm9EYXRhVGFibGUsXG4gICAgTm92b0RhdGFUYWJsZUV4cGFuZERpcmVjdGl2ZSxcbiAgICBOb3ZvRGF0YVRhYmxlQ2xlYXJCdXR0b24sXG4gIF0sXG4gIHByb3ZpZGVyczogW0RhdGFUYWJsZVN0YXRlXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9EYXRhVGFibGUsXG4gICAgRGF0YVRhYmxlSW50ZXJwb2xhdGVQaXBlLFxuICAgIERhdGVUYWJsZURhdGVSZW5kZXJlclBpcGUsXG4gICAgRGF0ZVRhYmxlQ3VycmVuY3lSZW5kZXJlclBpcGUsXG4gICAgRGF0ZVRhYmxlRGF0ZVRpbWVSZW5kZXJlclBpcGUsXG4gICAgRGF0ZVRhYmxlTnVtYmVyUmVuZGVyZXJQaXBlLFxuICAgIERhdGVUYWJsZVRpbWVSZW5kZXJlclBpcGUsXG4gICAgTm92b0RhdGFUYWJsZUNsZWFyQnV0dG9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlTW9kdWxlIHt9XG4iXX0=