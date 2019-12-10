/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/TableExtras.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// APP
import { NovoSelectModule } from '../../select/Select.module';
import { NovoDropdownModule } from '../../dropdown/Dropdown.module';
import { NovoButtonModule } from '../../button/Button.module';
import { Pagination } from './pagination/Pagination';
import { RowDetails } from './row-details/RowDetails';
import { TableCell } from './table-cell/TableCell';
import { TableFilter } from './table-filter/TableFilter';
import { ThOrderable } from './th-orderable/ThOrderable';
import { ThSortable } from './th-sortable/ThSortable';
import { DateCell } from './date-cell/DateCell';
import { PercentageCell } from './percentage-cell/PercentageCell';
import { NovoDropdownCell } from './dropdown-cell/DropdownCell';
import { NovoTableKeepFilterFocus } from './keep-filter-focus/KeepFilterFocus';
import { NovoTableActionsElement } from './table-actions/TableActions';
import { NovoTableFooterElement } from './table-footer/TableFooter';
import { NovoTableHeaderElement } from './table-header/TableHeader';
export class NovoTableExtrasModule {
}
NovoTableExtrasModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NovoSelectModule, NovoDropdownModule, NovoButtonModule],
                declarations: [
                    NovoTableHeaderElement,
                    NovoTableFooterElement,
                    NovoTableActionsElement,
                    NovoTableKeepFilterFocus,
                    Pagination,
                    RowDetails,
                    TableCell,
                    TableFilter,
                    ThOrderable,
                    ThSortable,
                    DateCell,
                    PercentageCell,
                    NovoDropdownCell,
                ],
                exports: [
                    NovoTableHeaderElement,
                    NovoTableFooterElement,
                    NovoTableActionsElement,
                    NovoTableKeepFilterFocus,
                    Pagination,
                    RowDetails,
                    TableCell,
                    TableFilter,
                    ThOrderable,
                    ThSortable,
                    DateCell,
                    PercentageCell,
                    NovoDropdownCell,
                ],
                entryComponents: [DateCell, PercentageCell, NovoDropdownCell],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVFeHRyYXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9UYWJsZUV4dHJhcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBb0NwRSxNQUFNLE9BQU8scUJBQXFCOzs7WUFsQ2pDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO2dCQUM1RixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4QixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixRQUFRO29CQUNSLGNBQWM7b0JBQ2QsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4QixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixRQUFRO29CQUNSLGNBQWM7b0JBQ2QsZ0JBQWdCO2lCQUNqQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO2FBQzlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vc2VsZWN0L1NlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vRHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi8uLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uL1BhZ2luYXRpb24nO1xuaW1wb3J0IHsgUm93RGV0YWlscyB9IGZyb20gJy4vcm93LWRldGFpbHMvUm93RGV0YWlscyc7XG5pbXBvcnQgeyBUYWJsZUNlbGwgfSBmcm9tICcuL3RhYmxlLWNlbGwvVGFibGVDZWxsJztcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSAnLi90YWJsZS1maWx0ZXIvVGFibGVGaWx0ZXInO1xuaW1wb3J0IHsgVGhPcmRlcmFibGUgfSBmcm9tICcuL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZSc7XG5pbXBvcnQgeyBUaFNvcnRhYmxlIH0gZnJvbSAnLi90aC1zb3J0YWJsZS9UaFNvcnRhYmxlJztcbmltcG9ydCB7IERhdGVDZWxsIH0gZnJvbSAnLi9kYXRlLWNlbGwvRGF0ZUNlbGwnO1xuaW1wb3J0IHsgUGVyY2VudGFnZUNlbGwgfSBmcm9tICcuL3BlcmNlbnRhZ2UtY2VsbC9QZXJjZW50YWdlQ2VsbCc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25DZWxsIH0gZnJvbSAnLi9kcm9wZG93bi1jZWxsL0Ryb3Bkb3duQ2VsbCc7XG5pbXBvcnQgeyBOb3ZvVGFibGVLZWVwRmlsdGVyRm9jdXMgfSBmcm9tICcuL2tlZXAtZmlsdGVyLWZvY3VzL0tlZXBGaWx0ZXJGb2N1cyc7XG5pbXBvcnQgeyBOb3ZvVGFibGVBY3Rpb25zRWxlbWVudCB9IGZyb20gJy4vdGFibGUtYWN0aW9ucy9UYWJsZUFjdGlvbnMnO1xuaW1wb3J0IHsgTm92b1RhYmxlRm9vdGVyRWxlbWVudCB9IGZyb20gJy4vdGFibGUtZm9vdGVyL1RhYmxlRm9vdGVyJztcbmltcG9ydCB7IE5vdm9UYWJsZUhlYWRlckVsZW1lbnQgfSBmcm9tICcuL3RhYmxlLWhlYWRlci9UYWJsZUhlYWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvU2VsZWN0TW9kdWxlLCBOb3ZvRHJvcGRvd25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvVGFibGVIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9UYWJsZUZvb3RlckVsZW1lbnQsXG4gICAgTm92b1RhYmxlQWN0aW9uc0VsZW1lbnQsXG4gICAgTm92b1RhYmxlS2VlcEZpbHRlckZvY3VzLFxuICAgIFBhZ2luYXRpb24sXG4gICAgUm93RGV0YWlscyxcbiAgICBUYWJsZUNlbGwsXG4gICAgVGFibGVGaWx0ZXIsXG4gICAgVGhPcmRlcmFibGUsXG4gICAgVGhTb3J0YWJsZSxcbiAgICBEYXRlQ2VsbCxcbiAgICBQZXJjZW50YWdlQ2VsbCxcbiAgICBOb3ZvRHJvcGRvd25DZWxsLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b1RhYmxlSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvVGFibGVGb290ZXJFbGVtZW50LFxuICAgIE5vdm9UYWJsZUFjdGlvbnNFbGVtZW50LFxuICAgIE5vdm9UYWJsZUtlZXBGaWx0ZXJGb2N1cyxcbiAgICBQYWdpbmF0aW9uLFxuICAgIFJvd0RldGFpbHMsXG4gICAgVGFibGVDZWxsLFxuICAgIFRhYmxlRmlsdGVyLFxuICAgIFRoT3JkZXJhYmxlLFxuICAgIFRoU29ydGFibGUsXG4gICAgRGF0ZUNlbGwsXG4gICAgUGVyY2VudGFnZUNlbGwsXG4gICAgTm92b0Ryb3Bkb3duQ2VsbCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF0ZUNlbGwsIFBlcmNlbnRhZ2VDZWxsLCBOb3ZvRHJvcGRvd25DZWxsXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlRXh0cmFzTW9kdWxlIHt9XG4iXX0=