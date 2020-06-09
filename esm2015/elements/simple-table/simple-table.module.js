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
import * as i0 from "@angular/core";
export class NovoSimpleTableModule {
}
NovoSimpleTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoSimpleTableModule });
NovoSimpleTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoSimpleTableModule_Factory(t) { return new (t || NovoSimpleTableModule)(); }, providers: [NovoActivityTableState], imports: [[
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoSimpleTableModule, { declarations: [NovoTable,
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
        NovoActivityTableCustomFilter], imports: [NovoDatePickerModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        NovoButtonModule,
        NovoDropdownModule,
        NovoFormExtrasModule,
        NovoLoadingModule,
        NovoTilesModule,
        NovoSearchBoxModule], exports: [NovoTable,
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
        NovoActivityTableCustomFilter] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleTableModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsNkJBQTZCLEVBQzdCLDZCQUE2QixFQUM3QixpQ0FBaUMsRUFDakMsNkJBQTZCLEdBQzlCLE1BQU0sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsc0JBQXNCLEVBQ3RCLDRCQUE0QixFQUM1QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLHlCQUF5QixHQUMxQixNQUFNLFFB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LFNBQVM7b0JBQ1QsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsNkJBQTZCO29CQUM3QixpQ0FBaUM7b0JBQ2pDLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQix5QkFBeUI7b0JBQ3pCLDZCQUE2QjtvQkFDN0Isc0JBQXNCO29CQUN0Qiw0QkFBNEI7b0JBQzVCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix3QkFBd0I7b0JBQ3hCLDZCQUE2QjtpQkFDOUI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcGRvd24vRHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Gb3JtRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9leHRyYXMvRm9ybUV4dHJhcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaWxlc01vZHVsZSB9IGZyb20gJy4uL3RpbGVzL1RpbGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2VhcmNoQm94TW9kdWxlIH0gZnJvbSAnLi4vc2VhcmNoL1NlYXJjaEJveC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5cbmltcG9ydCB7XG4gIE5vdm9UYWJsZSxcbiAgTm92b0FjdGl2aXR5VGFibGUsXG4gIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyxcbiAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21GaWx0ZXIsXG4gIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlLFxuICBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2UsXG4gIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyLFxufSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCB7XG4gIE5vdm9TaW1wbGVDZWxsLFxuICBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsLFxuICBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsLFxuICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbCxcbiAgTm92b1NpbXBsZUNlbGxEZWYsXG4gIE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmLFxuICBOb3ZvU2ltcGxlQ29sdW1uRGVmLFxuICBOb3ZvU2ltcGxlQWN0aW9uQ2VsbCxcbiAgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCxcbn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IE5vdm9TaW1wbGVIZWFkZXJSb3csIE5vdm9TaW1wbGVSb3csIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYsIE5vdm9TaW1wbGVSb3dEZWYgfSBmcm9tICcuL3Jvdyc7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlQ2VsbEhlYWRlciwgTm92b1NpbXBsZUZpbHRlckZvY3VzIH0gZnJvbSAnLi9jZWxsLWhlYWRlcic7XG5pbXBvcnQgeyBOb3ZvU29ydEZpbHRlciwgTm92b1NlbGVjdGlvbiB9IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5vdm9EYXRlUGlja2VyTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9Ecm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvVGlsZXNNb2R1bGUsXG4gICAgTm92b1NlYXJjaEJveE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9UYWJsZSxcbiAgICBOb3ZvU2ltcGxlQ2VsbERlZixcbiAgICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZixcbiAgICBOb3ZvU2ltcGxlQ29sdW1uRGVmLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlTm9SZXN1bHRzTWVzc2FnZSxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmLFxuICAgIE5vdm9TaW1wbGVSb3dEZWYsXG4gICAgTm92b1NpbXBsZUNlbGxIZWFkZXIsXG4gICAgTm92b1NvcnRGaWx0ZXIsXG4gICAgTm92b1NpbXBsZUFjdGlvbkNlbGwsXG4gICAgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2ltcGxlQ2VsbCxcbiAgICBOb3ZvU2ltcGxlSGVhZGVyUm93LFxuICAgIE5vdm9TaW1wbGVSb3csXG4gICAgTm92b1NpbXBsZUZpbHRlckZvY3VzLFxuICAgIE5vdm9TaW1wbGVUYWJsZVBhZ2luYXRpb24sXG4gICAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21IZWFkZXIsXG4gICAgTm92b1NpbXBsZUNoZWNrYm94Q2VsbCxcbiAgICBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsLFxuICAgIE5vdm9TZWxlY3Rpb24sXG4gICAgTm92b0FjdGl2aXR5VGFibGUsXG4gICAgTm92b0FjdGl2aXR5VGFibGVBY3Rpb25zLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tRmlsdGVyLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvVGFibGUsXG4gICAgTm92b1NpbXBsZUNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUNvbHVtbkRlZixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2UsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvd0RlZixcbiAgICBOb3ZvU2ltcGxlUm93RGVmLFxuICAgIE5vdm9TaW1wbGVDZWxsSGVhZGVyLFxuICAgIE5vdm9Tb3J0RmlsdGVyLFxuICAgIE5vdm9TaW1wbGVBY3Rpb25DZWxsLFxuICAgIE5vdm9TaW1wbGVFbXB0eUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvdyxcbiAgICBOb3ZvU2ltcGxlUm93LFxuICAgIE5vdm9TaW1wbGVGaWx0ZXJGb2N1cyxcbiAgICBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyLFxuICAgIE5vdm9TaW1wbGVDaGVja2JveENlbGwsXG4gICAgTm92b1NpbXBsZUNoZWNrYm94SGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2VsZWN0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlcixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTm92b0FjdGl2aXR5VGFibGVTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVUYWJsZU1vZHVsZSB7fVxuIl19