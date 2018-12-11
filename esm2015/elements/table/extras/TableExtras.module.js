/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVFeHRyYXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9UYWJsZUV4dHJhcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFvQ3BFLE1BQU0sT0FBTyxxQkFBcUI7OztZQWxDakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzVGLFlBQVksRUFBRTtvQkFDWixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixTQUFTO29CQUNULFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxVQUFVO29CQUNWLFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixTQUFTO29CQUNULFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxVQUFVO29CQUNWLFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxnQkFBZ0I7aUJBQ2pCO2dCQUNELGVBQWUsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7YUFDOUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9TZWxlY3RNb2R1bGUgfSBmcm9tICcuLi8uLi9zZWxlY3QvU2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL3BhZ2luYXRpb24vUGFnaW5hdGlvbic7XG5pbXBvcnQgeyBSb3dEZXRhaWxzIH0gZnJvbSAnLi9yb3ctZGV0YWlscy9Sb3dEZXRhaWxzJztcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gJy4vdGFibGUtY2VsbC9UYWJsZUNlbGwnO1xuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tICcuL3RhYmxlLWZpbHRlci9UYWJsZUZpbHRlcic7XG5pbXBvcnQgeyBUaE9yZGVyYWJsZSB9IGZyb20gJy4vdGgtb3JkZXJhYmxlL1RoT3JkZXJhYmxlJztcbmltcG9ydCB7IFRoU29ydGFibGUgfSBmcm9tICcuL3RoLXNvcnRhYmxlL1RoU29ydGFibGUnO1xuaW1wb3J0IHsgRGF0ZUNlbGwgfSBmcm9tICcuL2RhdGUtY2VsbC9EYXRlQ2VsbCc7XG5pbXBvcnQgeyBQZXJjZW50YWdlQ2VsbCB9IGZyb20gJy4vcGVyY2VudGFnZS1jZWxsL1BlcmNlbnRhZ2VDZWxsJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkNlbGwgfSBmcm9tICcuL2Ryb3Bkb3duLWNlbGwvRHJvcGRvd25DZWxsJztcbmltcG9ydCB7IE5vdm9UYWJsZUtlZXBGaWx0ZXJGb2N1cyB9IGZyb20gJy4va2VlcC1maWx0ZXItZm9jdXMvS2VlcEZpbHRlckZvY3VzJztcbmltcG9ydCB7IE5vdm9UYWJsZUFjdGlvbnNFbGVtZW50IH0gZnJvbSAnLi90YWJsZS1hY3Rpb25zL1RhYmxlQWN0aW9ucyc7XG5pbXBvcnQgeyBOb3ZvVGFibGVGb290ZXJFbGVtZW50IH0gZnJvbSAnLi90YWJsZS1mb290ZXIvVGFibGVGb290ZXInO1xuaW1wb3J0IHsgTm92b1RhYmxlSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vdGFibGUtaGVhZGVyL1RhYmxlSGVhZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9TZWxlY3RNb2R1bGUsIE5vdm9Ecm9wZG93bk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9UYWJsZUhlYWRlckVsZW1lbnQsXG4gICAgTm92b1RhYmxlRm9vdGVyRWxlbWVudCxcbiAgICBOb3ZvVGFibGVBY3Rpb25zRWxlbWVudCxcbiAgICBOb3ZvVGFibGVLZWVwRmlsdGVyRm9jdXMsXG4gICAgUGFnaW5hdGlvbixcbiAgICBSb3dEZXRhaWxzLFxuICAgIFRhYmxlQ2VsbCxcbiAgICBUYWJsZUZpbHRlcixcbiAgICBUaE9yZGVyYWJsZSxcbiAgICBUaFNvcnRhYmxlLFxuICAgIERhdGVDZWxsLFxuICAgIFBlcmNlbnRhZ2VDZWxsLFxuICAgIE5vdm9Ecm9wZG93bkNlbGwsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvVGFibGVIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9UYWJsZUZvb3RlckVsZW1lbnQsXG4gICAgTm92b1RhYmxlQWN0aW9uc0VsZW1lbnQsXG4gICAgTm92b1RhYmxlS2VlcEZpbHRlckZvY3VzLFxuICAgIFBhZ2luYXRpb24sXG4gICAgUm93RGV0YWlscyxcbiAgICBUYWJsZUNlbGwsXG4gICAgVGFibGVGaWx0ZXIsXG4gICAgVGhPcmRlcmFibGUsXG4gICAgVGhTb3J0YWJsZSxcbiAgICBEYXRlQ2VsbCxcbiAgICBQZXJjZW50YWdlQ2VsbCxcbiAgICBOb3ZvRHJvcGRvd25DZWxsLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXRlQ2VsbCwgUGVyY2VudGFnZUNlbGwsIE5vdm9Ecm9wZG93bkNlbGxdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFibGVFeHRyYXNNb2R1bGUge31cbiJdfQ==