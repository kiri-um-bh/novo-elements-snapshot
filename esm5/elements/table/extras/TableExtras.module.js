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
import * as i0 from "@angular/core";
var NovoTableExtrasModule = /** @class */ (function () {
    function NovoTableExtrasModule() {
    }
    NovoTableExtrasModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTableExtrasModule });
    NovoTableExtrasModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTableExtrasModule_Factory(t) { return new (t || NovoTableExtrasModule)(); }, imports: [[CommonModule, FormsModule, NovoSelectModule, NovoDropdownModule, NovoButtonModule]] });
    return NovoTableExtrasModule;
}());
export { NovoTableExtrasModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTableExtrasModule, { declarations: [NovoTableHeaderElement,
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
        NovoDropdownCell], imports: [CommonModule, FormsModule, NovoSelectModule, NovoDropdownModule, NovoButtonModule], exports: [NovoTableHeaderElement,
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
        NovoDropdownCell] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTableExtrasModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVFeHRyYXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9UYWJsZUV4dHJhcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFcEU7SUFBQTtLQWtDcUM7NkRBQXhCLHFCQUFxQjs2SEFBckIscUJBQXFCLGtCQWpDdkIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO2dDQXZCOUY7Q0F3RHFDLEFBbENyQyxJQWtDcUM7U0FBeEIscUJBQXFCO3dGQUFyQixxQkFBcUIsbUJBL0I5QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsVUFBVTtRQUNWLFVBQVU7UUFDVixTQUFTO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWCxVQUFVO1FBQ1YsUUFBUTtRQUNSLGNBQWM7UUFDZCxnQkFBZ0IsYUFkUixZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixhQWlCekYsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLFVBQVU7UUFDVixVQUFVO1FBQ1YsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFFBQVE7UUFDUixjQUFjO1FBQ2QsZ0JBQWdCO2tEQUlQLHFCQUFxQjtjQWxDakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzVGLFlBQVksRUFBRTtvQkFDWixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixTQUFTO29CQUNULFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxVQUFVO29CQUNWLFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixTQUFTO29CQUNULFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxVQUFVO29CQUNWLFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxnQkFBZ0I7aUJBQ2pCO2dCQUNELGVBQWUsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7YUFDOUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9TZWxlY3RNb2R1bGUgfSBmcm9tICcuLi8uLi9zZWxlY3QvU2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL3BhZ2luYXRpb24vUGFnaW5hdGlvbic7XG5pbXBvcnQgeyBSb3dEZXRhaWxzIH0gZnJvbSAnLi9yb3ctZGV0YWlscy9Sb3dEZXRhaWxzJztcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gJy4vdGFibGUtY2VsbC9UYWJsZUNlbGwnO1xuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tICcuL3RhYmxlLWZpbHRlci9UYWJsZUZpbHRlcic7XG5pbXBvcnQgeyBUaE9yZGVyYWJsZSB9IGZyb20gJy4vdGgtb3JkZXJhYmxlL1RoT3JkZXJhYmxlJztcbmltcG9ydCB7IFRoU29ydGFibGUgfSBmcm9tICcuL3RoLXNvcnRhYmxlL1RoU29ydGFibGUnO1xuaW1wb3J0IHsgRGF0ZUNlbGwgfSBmcm9tICcuL2RhdGUtY2VsbC9EYXRlQ2VsbCc7XG5pbXBvcnQgeyBQZXJjZW50YWdlQ2VsbCB9IGZyb20gJy4vcGVyY2VudGFnZS1jZWxsL1BlcmNlbnRhZ2VDZWxsJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkNlbGwgfSBmcm9tICcuL2Ryb3Bkb3duLWNlbGwvRHJvcGRvd25DZWxsJztcbmltcG9ydCB7IE5vdm9UYWJsZUtlZXBGaWx0ZXJGb2N1cyB9IGZyb20gJy4va2VlcC1maWx0ZXItZm9jdXMvS2VlcEZpbHRlckZvY3VzJztcbmltcG9ydCB7IE5vdm9UYWJsZUFjdGlvbnNFbGVtZW50IH0gZnJvbSAnLi90YWJsZS1hY3Rpb25zL1RhYmxlQWN0aW9ucyc7XG5pbXBvcnQgeyBOb3ZvVGFibGVGb290ZXJFbGVtZW50IH0gZnJvbSAnLi90YWJsZS1mb290ZXIvVGFibGVGb290ZXInO1xuaW1wb3J0IHsgTm92b1RhYmxlSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vdGFibGUtaGVhZGVyL1RhYmxlSGVhZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9TZWxlY3RNb2R1bGUsIE5vdm9Ecm9wZG93bk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9UYWJsZUhlYWRlckVsZW1lbnQsXG4gICAgTm92b1RhYmxlRm9vdGVyRWxlbWVudCxcbiAgICBOb3ZvVGFibGVBY3Rpb25zRWxlbWVudCxcbiAgICBOb3ZvVGFibGVLZWVwRmlsdGVyRm9jdXMsXG4gICAgUGFnaW5hdGlvbixcbiAgICBSb3dEZXRhaWxzLFxuICAgIFRhYmxlQ2VsbCxcbiAgICBUYWJsZUZpbHRlcixcbiAgICBUaE9yZGVyYWJsZSxcbiAgICBUaFNvcnRhYmxlLFxuICAgIERhdGVDZWxsLFxuICAgIFBlcmNlbnRhZ2VDZWxsLFxuICAgIE5vdm9Ecm9wZG93bkNlbGwsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvVGFibGVIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9UYWJsZUZvb3RlckVsZW1lbnQsXG4gICAgTm92b1RhYmxlQWN0aW9uc0VsZW1lbnQsXG4gICAgTm92b1RhYmxlS2VlcEZpbHRlckZvY3VzLFxuICAgIFBhZ2luYXRpb24sXG4gICAgUm93RGV0YWlscyxcbiAgICBUYWJsZUNlbGwsXG4gICAgVGFibGVGaWx0ZXIsXG4gICAgVGhPcmRlcmFibGUsXG4gICAgVGhTb3J0YWJsZSxcbiAgICBEYXRlQ2VsbCxcbiAgICBQZXJjZW50YWdlQ2VsbCxcbiAgICBOb3ZvRHJvcGRvd25DZWxsLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXRlQ2VsbCwgUGVyY2VudGFnZUNlbGwsIE5vdm9Ecm9wZG93bkNlbGxdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFibGVFeHRyYXNNb2R1bGUge31cbiJdfQ==