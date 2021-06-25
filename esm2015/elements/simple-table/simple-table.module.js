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
import { NovoTable, NovoActivityTable, NovoActivityTableActions, NovoActivityTableCustomFilter, NovoActivityTableEmptyMessage, NovoActivityTableNoResultsMessage, NovoActivityTableCustomHeader, } from './table';
import { NovoSimpleCell, NovoSimpleCheckboxCell, NovoSimpleCheckboxHeaderCell, NovoSimpleHeaderCell, NovoSimpleCellDef, NovoSimpleHeaderCellDef, NovoSimpleColumnDef, NovoSimpleActionCell, NovoSimpleEmptyHeaderCell, } from './cell';
import { NovoSimpleHeaderRow, NovoSimpleRow, NovoSimpleHeaderRowDef, NovoSimpleRowDef } from './row';
import { NovoSimpleCellHeader, NovoSimpleFilterFocus } from './cell-header';
import { NovoSortFilter, NovoSelection } from './sort';
import { NovoSimpleTablePagination } from './pagination';
import { NovoActivityTableState } from './state';
export class NovoSimpleTableModule {
}
NovoSimpleTableModule.decorators = [
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
                ],
                exports: [
                    NovoTable,
                    NovoSimpleCellDef,
                    NovoSimpleHeaderCellDef,
                    NovoSimpleColumnDef,
                    NovoActivityTableEmptyMessage,
                    NovoActivityTableNoResultsMessage,
                    NovoSimpleHeaderRowDef,
                    NovoSimpleRowDef,
                    NovoSimpleCellHeader,
                    NovoSortFilter,
                    NovoSimpleActionCell,
                    NovoSimpleEmptyHeaderCell,
                    NovoSimpleHeaderCell,
                    NovoSimpleCell,
                    NovoSimpleHeaderRow,
                    NovoSimpleRow,
                    NovoSimpleFilterFocus,
                    NovoSimpleTablePagination,
                    NovoActivityTableCustomHeader,
                    NovoSimpleCheckboxCell,
                    NovoSimpleCheckboxHeaderCell,
                    NovoSelection,
                    NovoActivityTable,
                    NovoActivityTableActions,
                    NovoActivityTableCustomFilter,
                ],
                declarations: [
                    NovoTable,
                    NovoSimpleCellDef,
                    NovoSimpleHeaderCellDef,
                    NovoSimpleColumnDef,
                    NovoActivityTableEmptyMessage,
                    NovoActivityTableNoResultsMessage,
                    NovoSimpleHeaderRowDef,
                    NovoSimpleRowDef,
                    NovoSimpleCellHeader,
                    NovoSortFilter,
                    NovoSimpleActionCell,
                    NovoSimpleEmptyHeaderCell,
                    NovoSimpleHeaderCell,
                    NovoSimpleCell,
                    NovoSimpleHeaderRow,
                    NovoSimpleRow,
                    NovoSimpleFilterFocus,
                    NovoSimpleTablePagination,
                    NovoActivityTableCustomHeader,
                    NovoSimpleCheckboxCell,
                    NovoSimpleCheckboxHeaderCell,
                    NovoSelection,
                    NovoActivityTable,
                    NovoActivityTableActions,
                    NovoActivityTableCustomFilter,
                ],
                providers: [NovoActivityTableState],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsNkJBQTZCLEVBQzdCLDZCQUE2QixFQUM3QixpQ0FBaUMsRUFDakMsNkJBQTZCLEdBQzlCLE1BQU0sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsc0JBQXNCLEVBQ3RCLDRCQUE0QixFQUM1QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLHlCQUF5QixHQUMxQixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBdUVqRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFyRWpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsU0FBUztvQkFDVCxpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLGlDQUFpQztvQkFDakMsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3QixzQkFBc0I7b0JBQ3RCLDRCQUE0QjtvQkFDNUIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHdCQUF3QjtvQkFDeEIsNkJBQTZCO2lCQUM5QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osU0FBUztvQkFDVCxpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLGlDQUFpQztvQkFDakMsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3QixzQkFBc0I7b0JBQ3RCLDRCQUE0QjtvQkFDNUIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHdCQUF3QjtvQkFDeEIsNkJBQTZCO2lCQUM5QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbGVzTW9kdWxlIH0gZnJvbSAnLi4vdGlsZXMvVGlsZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuLi9zZWFyY2gvU2VhcmNoQm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIubW9kdWxlJztcblxuaW1wb3J0IHtcbiAgTm92b1RhYmxlLFxuICBOb3ZvQWN0aXZpdHlUYWJsZSxcbiAgTm92b0FjdGl2aXR5VGFibGVBY3Rpb25zLFxuICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlcixcbiAgTm92b0FjdGl2aXR5VGFibGVFbXB0eU1lc3NhZ2UsXG4gIE5vdm9BY3Rpdml0eVRhYmxlTm9SZXN1bHRzTWVzc2FnZSxcbiAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21IZWFkZXIsXG59IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHtcbiAgTm92b1NpbXBsZUNlbGwsXG4gIE5vdm9TaW1wbGVDaGVja2JveENlbGwsXG4gIE5vdm9TaW1wbGVDaGVja2JveEhlYWRlckNlbGwsXG4gIE5vdm9TaW1wbGVIZWFkZXJDZWxsLFxuICBOb3ZvU2ltcGxlQ2VsbERlZixcbiAgTm92b1NpbXBsZUhlYWRlckNlbGxEZWYsXG4gIE5vdm9TaW1wbGVDb2x1bW5EZWYsXG4gIE5vdm9TaW1wbGVBY3Rpb25DZWxsLFxuICBOb3ZvU2ltcGxlRW1wdHlIZWFkZXJDZWxsLFxufSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgTm92b1NpbXBsZUhlYWRlclJvdywgTm92b1NpbXBsZVJvdywgTm92b1NpbXBsZUhlYWRlclJvd0RlZiwgTm92b1NpbXBsZVJvd0RlZiB9IGZyb20gJy4vcm93JztcbmltcG9ydCB7IE5vdm9TaW1wbGVDZWxsSGVhZGVyLCBOb3ZvU2ltcGxlRmlsdGVyRm9jdXMgfSBmcm9tICcuL2NlbGwtaGVhZGVyJztcbmltcG9ydCB7IE5vdm9Tb3J0RmlsdGVyLCBOb3ZvU2VsZWN0aW9uIH0gZnJvbSAnLi9zb3J0JztcbmltcG9ydCB7IE5vdm9TaW1wbGVUYWJsZVBhZ2luYXRpb24gfSBmcm9tICcuL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTm92b0RhdGVQaWNrZXJNb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5vdm9CdXR0b25Nb2R1bGUsXG4gICAgTm92b0Ryb3Bkb3duTW9kdWxlLFxuICAgIE5vdm9Gb3JtRXh0cmFzTW9kdWxlLFxuICAgIE5vdm9Mb2FkaW5nTW9kdWxlLFxuICAgIE5vdm9UaWxlc01vZHVsZSxcbiAgICBOb3ZvU2VhcmNoQm94TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b1RhYmxlLFxuICAgIE5vdm9TaW1wbGVDZWxsRGVmLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmLFxuICAgIE5vdm9TaW1wbGVDb2x1bW5EZWYsXG4gICAgTm92b0FjdGl2aXR5VGFibGVFbXB0eU1lc3NhZ2UsXG4gICAgTm92b0FjdGl2aXR5VGFibGVOb1Jlc3VsdHNNZXNzYWdlLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYsXG4gICAgTm92b1NpbXBsZVJvd0RlZixcbiAgICBOb3ZvU2ltcGxlQ2VsbEhlYWRlcixcbiAgICBOb3ZvU29ydEZpbHRlcixcbiAgICBOb3ZvU2ltcGxlQWN0aW9uQ2VsbCxcbiAgICBOb3ZvU2ltcGxlRW1wdHlIZWFkZXJDZWxsLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJDZWxsLFxuICAgIE5vdm9TaW1wbGVDZWxsLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJSb3csXG4gICAgTm92b1NpbXBsZVJvdyxcbiAgICBOb3ZvU2ltcGxlRmlsdGVyRm9jdXMsXG4gICAgTm92b1NpbXBsZVRhYmxlUGFnaW5hdGlvbixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUhlYWRlcixcbiAgICBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsLFxuICAgIE5vdm9TaW1wbGVDaGVja2JveEhlYWRlckNlbGwsXG4gICAgTm92b1NlbGVjdGlvbixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZSxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUFjdGlvbnMsXG4gICAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21GaWx0ZXIsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9UYWJsZSxcbiAgICBOb3ZvU2ltcGxlQ2VsbERlZixcbiAgICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZixcbiAgICBOb3ZvU2ltcGxlQ29sdW1uRGVmLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlTm9SZXN1bHRzTWVzc2FnZSxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmLFxuICAgIE5vdm9TaW1wbGVSb3dEZWYsXG4gICAgTm92b1NpbXBsZUNlbGxIZWFkZXIsXG4gICAgTm92b1NvcnRGaWx0ZXIsXG4gICAgTm92b1NpbXBsZUFjdGlvbkNlbGwsXG4gICAgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2ltcGxlQ2VsbCxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyUm93LFxuICAgIE5vdm9TaW1wbGVSb3csXG4gICAgTm92b1NpbXBsZUZpbHRlckZvY3VzLFxuICAgIE5vdm9TaW1wbGVUYWJsZVBhZ2luYXRpb24sXG4gICAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21IZWFkZXIsXG4gICAgTm92b1NpbXBsZUNoZWNrYm94Q2VsbCxcbiAgICBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsLFxuICAgIE5vdm9TZWxlY3Rpb24sXG4gICAgTm92b0FjdGl2aXR5VGFibGUsXG4gICAgTm92b0FjdGl2aXR5VGFibGVBY3Rpb25zLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tRmlsdGVyLFxuICBdLFxuICBwcm92aWRlcnM6IFtOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZVRhYmxlTW9kdWxlIHt9XG4iXX0=