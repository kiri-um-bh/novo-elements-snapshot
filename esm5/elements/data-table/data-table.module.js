/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return NovoDataTableModule;
}());
export { NovoDataTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHlCQUF5QixFQUN6Qiw2QkFBNkIsRUFDN0IsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUMzQix5QkFBeUIsRUFDekIsK0JBQStCLEdBQ2hDLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFL0U7SUFBQTtJQW9Ea0MsQ0FBQzs7Z0JBcERsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6Qiw2QkFBNkI7d0JBQzdCLDZCQUE2Qjt3QkFDN0IsMkJBQTJCO3dCQUMzQix5QkFBeUI7d0JBQ3pCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLGFBQWE7d0JBQ2IsNEJBQTRCO3dCQUM1Qix3QkFBd0I7cUJBQ3pCO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0IsNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsK0JBQStCO3dCQUMvQix3QkFBd0I7cUJBQ3pCO2lCQUNGOztJQUNpQywwQkFBQztDQUFBLEFBcERuQyxJQW9EbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybUV4dHJhc01vZHVsZSB9IGZyb20gJy4uL2Zvcm0vZXh0cmFzL0Zvcm1FeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Mb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi4vbG9hZGluZy9Mb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGlsZXNNb2R1bGUgfSBmcm9tICcuLi90aWxlcy9UaWxlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlYXJjaEJveE1vZHVsZSB9IGZyb20gJy4uL3NlYXJjaC9TZWFyY2hCb3gubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWxlY3RNb2R1bGUgfSBmcm9tICcuLi9zZWxlY3QvU2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlIH0gZnJvbSAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlQ2VsbCB9IGZyb20gJy4vY2VsbHMvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlQ2hlY2tib3hDZWxsIH0gZnJvbSAnLi9jZWxscy9kYXRhLXRhYmxlLWNoZWNrYm94LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVFeHBhbmRDZWxsIH0gZnJvbSAnLi9jZWxscy9kYXRhLXRhYmxlLWV4cGFuZC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlSGVhZGVyUm93IH0gZnJvbSAnLi9yb3dzL2RhdGEtdGFibGUtaGVhZGVyLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVJvdyB9IGZyb20gJy4vcm93cy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUNlbGxIZWFkZXIgfSBmcm9tICcuL2NlbGwtaGVhZGVycy9kYXRhLXRhYmxlLWhlYWRlci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlRXhwYW5kSGVhZGVyQ2VsbCB9IGZyb20gJy4vY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlQ2hlY2tib3hIZWFkZXJDZWxsIH0gZnJvbSAnLi9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUhlYWRlckNlbGwgfSBmcm9tICcuL2NlbGwtaGVhZGVycy9kYXRhLXRhYmxlLWhlYWRlci1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlciB9IGZyb20gJy4vc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uL2RhdGEtdGFibGUtcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQge1xuICBEYXRhVGFibGVJbnRlcnBvbGF0ZVBpcGUsXG4gIERhdGVUYWJsZURhdGVSZW5kZXJlclBpcGUsXG4gIERhdGVUYWJsZUN1cnJlbmN5UmVuZGVyZXJQaXBlLFxuICBEYXRlVGFibGVEYXRlVGltZVJlbmRlcmVyUGlwZSxcbiAgRGF0ZVRhYmxlTnVtYmVyUmVuZGVyZXJQaXBlLFxuICBEYXRlVGFibGVUaW1lUmVuZGVyZXJQaXBlLFxuICBEYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXJQaXBlLFxufSBmcm9tICcuL2RhdGEtdGFibGUucGlwZXMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUV4cGFuZERpcmVjdGl2ZSB9IGZyb20gJy4vZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVDbGVhckJ1dHRvbiB9IGZyb20gJy4vZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5vdm9EYXRlUGlja2VyTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9Ecm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvVGlsZXNNb2R1bGUsXG4gICAgTm92b1NlYXJjaEJveE1vZHVsZSxcbiAgICBOb3ZvQ29tbW9uTW9kdWxlLFxuICAgIE5vdm9TZWxlY3RNb2R1bGUsXG4gICAgTm92b1Rvb2x0aXBNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGFUYWJsZUludGVycG9sYXRlUGlwZSxcbiAgICBEYXRlVGFibGVEYXRlUmVuZGVyZXJQaXBlLFxuICAgIERhdGVUYWJsZUN1cnJlbmN5UmVuZGVyZXJQaXBlLFxuICAgIERhdGVUYWJsZURhdGVUaW1lUmVuZGVyZXJQaXBlLFxuICAgIERhdGVUYWJsZU51bWJlclJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVUaW1lUmVuZGVyZXJQaXBlLFxuICAgIERhdGFUYWJsZUJpZ0RlY2ltYWxSZW5kZXJlclBpcGUsXG4gICAgTm92b0RhdGFUYWJsZUNlbGxIZWFkZXIsXG4gICAgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIsXG4gICAgTm92b0RhdGFUYWJsZUhlYWRlckNlbGwsXG4gICAgTm92b0RhdGFUYWJsZUNlbGwsXG4gICAgTm92b0RhdGFUYWJsZUhlYWRlclJvdyxcbiAgICBOb3ZvRGF0YVRhYmxlUm93LFxuICAgIE5vdm9EYXRhVGFibGVQYWdpbmF0aW9uLFxuICAgIE5vdm9EYXRhVGFibGVDaGVja2JveENlbGwsXG4gICAgTm92b0RhdGFUYWJsZUNoZWNrYm94SGVhZGVyQ2VsbCxcbiAgICBOb3ZvRGF0YVRhYmxlRXhwYW5kQ2VsbCxcbiAgICBOb3ZvRGF0YVRhYmxlRXhwYW5kSGVhZGVyQ2VsbCxcbiAgICBOb3ZvRGF0YVRhYmxlLFxuICAgIE5vdm9EYXRhVGFibGVFeHBhbmREaXJlY3RpdmUsXG4gICAgTm92b0RhdGFUYWJsZUNsZWFyQnV0dG9uLFxuICBdLFxuICBwcm92aWRlcnM6IFtEYXRhVGFibGVTdGF0ZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvRGF0YVRhYmxlLFxuICAgIERhdGFUYWJsZUludGVycG9sYXRlUGlwZSxcbiAgICBEYXRlVGFibGVEYXRlUmVuZGVyZXJQaXBlLFxuICAgIERhdGVUYWJsZUN1cnJlbmN5UmVuZGVyZXJQaXBlLFxuICAgIERhdGVUYWJsZURhdGVUaW1lUmVuZGVyZXJQaXBlLFxuICAgIERhdGVUYWJsZU51bWJlclJlbmRlcmVyUGlwZSxcbiAgICBEYXRlVGFibGVUaW1lUmVuZGVyZXJQaXBlLFxuICAgIERhdGFUYWJsZUJpZ0RlY2ltYWxSZW5kZXJlclBpcGUsXG4gICAgTm92b0RhdGFUYWJsZUNsZWFyQnV0dG9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlTW9kdWxlIHt9XG4iXX0=