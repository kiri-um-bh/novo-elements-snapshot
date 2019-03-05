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
import { NovoTable, NovoActivityTable, NovoActivityTableActions, NovoActivityTableCustomFilter, NovoActivityTableEmptyMessage, NovoActivityTableNoResultsMessage, NovoActivityTableCustomHeader, } from './table';
import { NovoSimpleCell, NovoSimpleCheckboxCell, NovoSimpleCheckboxHeaderCell, NovoSimpleHeaderCell, NovoSimpleCellDef, NovoSimpleHeaderCellDef, NovoSimpleColumnDef, NovoSimpleActionCell, NovoSimpleEmptyHeaderCell, } from './cell';
import { NovoSimpleHeaderRow, NovoSimpleRow, NovoSimpleHeaderRowDef, NovoSimpleRowDef } from './row';
import { NovoSimpleCellHeader, NovoSimpleFilterFocus } from './cell-header';
import { NovoSortFilter, NovoSelection } from './sort';
import { NovoSimpleTablePagination } from './pagination';
import { NovoActivityTableState } from './state';
var NovoSimpleTableModule = /** @class */ (function () {
    function NovoSimpleTableModule() {
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
    return NovoSimpleTableModule;
}());
export { NovoSimpleTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEUsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3hCLDZCQUE2QixFQUM3Qiw2QkFBNkIsRUFDN0IsaUNBQWlDLEVBQ2pDLDZCQUE2QixHQUM5QixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQ0wsY0FBYyxFQUNkLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQix5QkFBeUIsR0FDMUIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVqRDtJQUFBO0lBcUVvQyxDQUFDOztnQkFyRXBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsU0FBUzt3QkFDVCxpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQiw2QkFBNkI7d0JBQzdCLGlDQUFpQzt3QkFDakMsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLDRCQUE0Qjt3QkFDNUIsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsNkJBQTZCO3FCQUM5QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osU0FBUzt3QkFDVCxpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQiw2QkFBNkI7d0JBQzdCLGlDQUFpQzt3QkFDakMsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLDRCQUE0Qjt3QkFDNUIsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsNkJBQTZCO3FCQUM5QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDcEM7O0lBQ21DLDRCQUFDO0NBQUEsQUFyRXJDLElBcUVxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcGRvd24vRHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Gb3JtRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9leHRyYXMvRm9ybUV4dHJhcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaWxlc01vZHVsZSB9IGZyb20gJy4uL3RpbGVzL1RpbGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2VhcmNoQm94TW9kdWxlIH0gZnJvbSAnLi4vc2VhcmNoL1NlYXJjaEJveC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5cbmltcG9ydCB7XG4gIE5vdm9UYWJsZSxcbiAgTm92b0FjdGl2aXR5VGFibGUsXG4gIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyxcbiAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21GaWx0ZXIsXG4gIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlLFxuICBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2UsXG4gIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyLFxufSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCB7XG4gIE5vdm9TaW1wbGVDZWxsLFxuICBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsLFxuICBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsLFxuICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbCxcbiAgTm92b1NpbXBsZUNlbGxEZWYsXG4gIE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmLFxuICBOb3ZvU2ltcGxlQ29sdW1uRGVmLFxuICBOb3ZvU2ltcGxlQWN0aW9uQ2VsbCxcbiAgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCxcbn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IE5vdm9TaW1wbGVIZWFkZXJSb3csIE5vdm9TaW1wbGVSb3csIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYsIE5vdm9TaW1wbGVSb3dEZWYgfSBmcm9tICcuL3Jvdyc7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlQ2VsbEhlYWRlciwgTm92b1NpbXBsZUZpbHRlckZvY3VzIH0gZnJvbSAnLi9jZWxsLWhlYWRlcic7XG5pbXBvcnQgeyBOb3ZvU29ydEZpbHRlciwgTm92b1NlbGVjdGlvbiB9IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5vdm9EYXRlUGlja2VyTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9Ecm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvVGlsZXNNb2R1bGUsXG4gICAgTm92b1NlYXJjaEJveE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9UYWJsZSxcbiAgICBOb3ZvU2ltcGxlQ2VsbERlZixcbiAgICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZixcbiAgICBOb3ZvU2ltcGxlQ29sdW1uRGVmLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlTm9SZXN1bHRzTWVzc2FnZSxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmLFxuICAgIE5vdm9TaW1wbGVSb3dEZWYsXG4gICAgTm92b1NpbXBsZUNlbGxIZWFkZXIsXG4gICAgTm92b1NvcnRGaWx0ZXIsXG4gICAgTm92b1NpbXBsZUFjdGlvbkNlbGwsXG4gICAgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2ltcGxlQ2VsbCxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyUm93LFxuICAgIE5vdm9TaW1wbGVSb3csXG4gICAgTm92b1NpbXBsZUZpbHRlckZvY3VzLFxuICAgIE5vdm9TaW1wbGVUYWJsZVBhZ2luYXRpb24sXG4gICAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21IZWFkZXIsXG4gICAgTm92b1NpbXBsZUNoZWNrYm94Q2VsbCxcbiAgICBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsLFxuICAgIE5vdm9TZWxlY3Rpb24sXG4gICAgTm92b0FjdGl2aXR5VGFibGUsXG4gICAgTm92b0FjdGl2aXR5VGFibGVBY3Rpb25zLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tRmlsdGVyLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvVGFibGUsXG4gICAgTm92b1NpbXBsZUNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUNvbHVtbkRlZixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2UsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvd0RlZixcbiAgICBOb3ZvU2ltcGxlUm93RGVmLFxuICAgIE5vdm9TaW1wbGVDZWxsSGVhZGVyLFxuICAgIE5vdm9Tb3J0RmlsdGVyLFxuICAgIE5vdm9TaW1wbGVBY3Rpb25DZWxsLFxuICAgIE5vdm9TaW1wbGVFbXB0eUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvdyxcbiAgICBOb3ZvU2ltcGxlUm93LFxuICAgIE5vdm9TaW1wbGVGaWx0ZXJGb2N1cyxcbiAgICBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyLFxuICAgIE5vdm9TaW1wbGVDaGVja2JveENlbGwsXG4gICAgTm92b1NpbXBsZUNoZWNrYm94SGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2VsZWN0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlcixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTm92b0FjdGl2aXR5VGFibGVTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVUYWJsZU1vZHVsZSB7fVxuIl19