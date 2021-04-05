import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoButtonModule } from '../button/Button.module';
import { NovoDatePickerModule } from '../date-picker/DatePicker.module';
import { NovoDropdownModule } from '../dropdown/Dropdown.module';
import { NovoFormExtrasModule } from '../form/extras/FormExtras.module';
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoSearchBoxModule } from '../search/SearchBox.module';
import { NovoTilesModule } from '../tiles/Tiles.module';
import { NovoSimpleActionCell, NovoSimpleCell, NovoSimpleCellDef, NovoSimpleCheckboxCell, NovoSimpleCheckboxHeaderCell, NovoSimpleColumnDef, NovoSimpleEmptyHeaderCell, NovoSimpleHeaderCell, NovoSimpleHeaderCellDef, } from './cell';
import { NovoSimpleCellHeader, NovoSimpleFilterFocus } from './cell-header';
import { NovoSimpleTablePagination } from './pagination';
import { NovoSimpleHeaderRow, NovoSimpleHeaderRowDef, NovoSimpleRow, NovoSimpleRowDef } from './row';
import { NovoSelection, NovoSortFilter } from './sort';
import { NovoActivityTableState } from './state';
import { NovoActivityTable, NovoActivityTableActions, NovoActivityTableCustomFilter, NovoActivityTableCustomHeader, NovoActivityTableEmptyMessage, NovoActivityTableNoResultsMessage, NovoTable, } from './table';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9zaW1wbGUtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsNEJBQTRCLEVBQzVCLG1CQUFtQixFQUNuQix5QkFBeUIsRUFDekIsb0JBQW9CLEVBQ3BCLHVCQUF1QixHQUN4QixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUs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LHdCQUF3QjtvQkFDeEIsNkJBQTZCO2lCQUM5QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osU0FBUztvQkFDVCxpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLGlDQUFpQztvQkFDakMsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3QixzQkFBc0I7b0JBQ3RCLDRCQUE0QjtvQkFDNUIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHdCQUF3QjtvQkFDeEIsNkJBQTZCO2lCQUM5QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlYXJjaEJveE1vZHVsZSB9IGZyb20gJy4uL3NlYXJjaC9TZWFyY2hCb3gubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaWxlc01vZHVsZSB9IGZyb20gJy4uL3RpbGVzL1RpbGVzLm1vZHVsZSc7XG5pbXBvcnQge1xuICBOb3ZvU2ltcGxlQWN0aW9uQ2VsbCxcbiAgTm92b1NpbXBsZUNlbGwsXG4gIE5vdm9TaW1wbGVDZWxsRGVmLFxuICBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsLFxuICBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsLFxuICBOb3ZvU2ltcGxlQ29sdW1uRGVmLFxuICBOb3ZvU2ltcGxlRW1wdHlIZWFkZXJDZWxsLFxuICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbCxcbiAgTm92b1NpbXBsZUhlYWRlckNlbGxEZWYsXG59IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlQ2VsbEhlYWRlciwgTm92b1NpbXBsZUZpbHRlckZvY3VzIH0gZnJvbSAnLi9jZWxsLWhlYWRlcic7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uJztcbmltcG9ydCB7IE5vdm9TaW1wbGVIZWFkZXJSb3csIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYsIE5vdm9TaW1wbGVSb3csIE5vdm9TaW1wbGVSb3dEZWYgfSBmcm9tICcuL3Jvdyc7XG5pbXBvcnQgeyBOb3ZvU2VsZWN0aW9uLCBOb3ZvU29ydEZpbHRlciB9IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgeyBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQge1xuICBOb3ZvQWN0aXZpdHlUYWJsZSxcbiAgTm92b0FjdGl2aXR5VGFibGVBY3Rpb25zLFxuICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlcixcbiAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21IZWFkZXIsXG4gIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlLFxuICBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2UsXG4gIE5vdm9UYWJsZSxcbn0gZnJvbSAnLi90YWJsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOb3ZvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b0xvYWRpbmdNb2R1bGUsXG4gICAgTm92b1RpbGVzTW9kdWxlLFxuICAgIE5vdm9TZWFyY2hCb3hNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvVGFibGUsXG4gICAgTm92b1NpbXBsZUNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUNvbHVtbkRlZixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2UsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvd0RlZixcbiAgICBOb3ZvU2ltcGxlUm93RGVmLFxuICAgIE5vdm9TaW1wbGVDZWxsSGVhZGVyLFxuICAgIE5vdm9Tb3J0RmlsdGVyLFxuICAgIE5vdm9TaW1wbGVBY3Rpb25DZWxsLFxuICAgIE5vdm9TaW1wbGVFbXB0eUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvdyxcbiAgICBOb3ZvU2ltcGxlUm93LFxuICAgIE5vdm9TaW1wbGVGaWx0ZXJGb2N1cyxcbiAgICBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyLFxuICAgIE5vdm9TaW1wbGVDaGVja2JveENlbGwsXG4gICAgTm92b1NpbXBsZUNoZWNrYm94SGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2VsZWN0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlcixcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b1RhYmxlLFxuICAgIE5vdm9TaW1wbGVDZWxsRGVmLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmLFxuICAgIE5vdm9TaW1wbGVDb2x1bW5EZWYsXG4gICAgTm92b0FjdGl2aXR5VGFibGVFbXB0eU1lc3NhZ2UsXG4gICAgTm92b0FjdGl2aXR5VGFibGVOb1Jlc3VsdHNNZXNzYWdlLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYsXG4gICAgTm92b1NpbXBsZVJvd0RlZixcbiAgICBOb3ZvU2ltcGxlQ2VsbEhlYWRlcixcbiAgICBOb3ZvU29ydEZpbHRlcixcbiAgICBOb3ZvU2ltcGxlQWN0aW9uQ2VsbCxcbiAgICBOb3ZvU2ltcGxlRW1wdHlIZWFkZXJDZWxsLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJDZWxsLFxuICAgIE5vdm9TaW1wbGVDZWxsLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJSb3csXG4gICAgTm92b1NpbXBsZVJvdyxcbiAgICBOb3ZvU2ltcGxlRmlsdGVyRm9jdXMsXG4gICAgTm92b1NpbXBsZVRhYmxlUGFnaW5hdGlvbixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUhlYWRlcixcbiAgICBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsLFxuICAgIE5vdm9TaW1wbGVDaGVja2JveEhlYWRlckNlbGwsXG4gICAgTm92b1NlbGVjdGlvbixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZSxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUFjdGlvbnMsXG4gICAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21GaWx0ZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW05vdm9BY3Rpdml0eVRhYmxlU3RhdGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlVGFibGVNb2R1bGUge31cbiJdfQ==