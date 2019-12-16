/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/simple-table.module.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXhFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN4Qiw2QkFBNkIsRUFDN0IsNkJBQTZCLEVBQzdCLGlDQUFpQyxFQUNqQyw2QkFBNkIsR0FDOUIsTUFBTSxTQUFTLENBQUM7QUFDakIsT0FBTyxFQUNMLGNBQWMsRUFDZCxzQkFBc0IsRUFDdEIsNEJBQTRCLEVBQzVCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIseUJBQXlCLEdBQzFCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUF1RWpELE1BQU0sT0FBTyxxQkFBcUI7OztZQXJFakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxTQUFTO29CQUNULGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLDZCQUE2QjtvQkFDN0IsaUNBQWlDO29CQUNqQyxzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLHNCQUFzQjtvQkFDdEIsNEJBQTRCO29CQUM1QixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsd0JBQXdCO29CQUN4Qiw2QkFBNkI7aUJBQzlCO2dCQUNELFlBQVksRUFBRTtvQkFDWixTQUFTO29CQUNULGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLDZCQUE2QjtvQkFDN0IsaUNBQWlDO29CQUNqQyxzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLHNCQUFzQjtvQkFDdEIsNEJBQTRCO29CQUM1QixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsd0JBQXdCO29CQUN4Qiw2QkFBNkI7aUJBQzlCO2dCQUNELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybUV4dHJhc01vZHVsZSB9IGZyb20gJy4uL2Zvcm0vZXh0cmFzL0Zvcm1FeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Mb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi4vbG9hZGluZy9Mb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGlsZXNNb2R1bGUgfSBmcm9tICcuLi90aWxlcy9UaWxlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlYXJjaEJveE1vZHVsZSB9IGZyb20gJy4uL3NlYXJjaC9TZWFyY2hCb3gubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci5tb2R1bGUnO1xuXG5pbXBvcnQge1xuICBOb3ZvVGFibGUsXG4gIE5vdm9BY3Rpdml0eVRhYmxlLFxuICBOb3ZvQWN0aXZpdHlUYWJsZUFjdGlvbnMsXG4gIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tRmlsdGVyLFxuICBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSxcbiAgTm92b0FjdGl2aXR5VGFibGVOb1Jlc3VsdHNNZXNzYWdlLFxuICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUhlYWRlcixcbn0gZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQge1xuICBOb3ZvU2ltcGxlQ2VsbCxcbiAgTm92b1NpbXBsZUNoZWNrYm94Q2VsbCxcbiAgTm92b1NpbXBsZUNoZWNrYm94SGVhZGVyQ2VsbCxcbiAgTm92b1NpbXBsZUhlYWRlckNlbGwsXG4gIE5vdm9TaW1wbGVDZWxsRGVmLFxuICBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZixcbiAgTm92b1NpbXBsZUNvbHVtbkRlZixcbiAgTm92b1NpbXBsZUFjdGlvbkNlbGwsXG4gIE5vdm9TaW1wbGVFbXB0eUhlYWRlckNlbGwsXG59IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlSGVhZGVyUm93LCBOb3ZvU2ltcGxlUm93LCBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmLCBOb3ZvU2ltcGxlUm93RGVmIH0gZnJvbSAnLi9yb3cnO1xuaW1wb3J0IHsgTm92b1NpbXBsZUNlbGxIZWFkZXIsIE5vdm9TaW1wbGVGaWx0ZXJGb2N1cyB9IGZyb20gJy4vY2VsbC1oZWFkZXInO1xuaW1wb3J0IHsgTm92b1NvcnRGaWx0ZXIsIE5vdm9TZWxlY3Rpb24gfSBmcm9tICcuL3NvcnQnO1xuaW1wb3J0IHsgTm92b1NpbXBsZVRhYmxlUGFnaW5hdGlvbiB9IGZyb20gJy4vcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOb3ZvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b0xvYWRpbmdNb2R1bGUsXG4gICAgTm92b1RpbGVzTW9kdWxlLFxuICAgIE5vdm9TZWFyY2hCb3hNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvVGFibGUsXG4gICAgTm92b1NpbXBsZUNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGxEZWYsXG4gICAgTm92b1NpbXBsZUNvbHVtbkRlZixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2UsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvd0RlZixcbiAgICBOb3ZvU2ltcGxlUm93RGVmLFxuICAgIE5vdm9TaW1wbGVDZWxsSGVhZGVyLFxuICAgIE5vdm9Tb3J0RmlsdGVyLFxuICAgIE5vdm9TaW1wbGVBY3Rpb25DZWxsLFxuICAgIE5vdm9TaW1wbGVFbXB0eUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlckNlbGwsXG4gICAgTm92b1NpbXBsZUNlbGwsXG4gICAgTm92b1NpbXBsZUhlYWRlclJvdyxcbiAgICBOb3ZvU2ltcGxlUm93LFxuICAgIE5vdm9TaW1wbGVGaWx0ZXJGb2N1cyxcbiAgICBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyLFxuICAgIE5vdm9TaW1wbGVDaGVja2JveENlbGwsXG4gICAgTm92b1NpbXBsZUNoZWNrYm94SGVhZGVyQ2VsbCxcbiAgICBOb3ZvU2VsZWN0aW9uLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlLFxuICAgIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlcixcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b1RhYmxlLFxuICAgIE5vdm9TaW1wbGVDZWxsRGVmLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmLFxuICAgIE5vdm9TaW1wbGVDb2x1bW5EZWYsXG4gICAgTm92b0FjdGl2aXR5VGFibGVFbXB0eU1lc3NhZ2UsXG4gICAgTm92b0FjdGl2aXR5VGFibGVOb1Jlc3VsdHNNZXNzYWdlLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYsXG4gICAgTm92b1NpbXBsZVJvd0RlZixcbiAgICBOb3ZvU2ltcGxlQ2VsbEhlYWRlcixcbiAgICBOb3ZvU29ydEZpbHRlcixcbiAgICBOb3ZvU2ltcGxlQWN0aW9uQ2VsbCxcbiAgICBOb3ZvU2ltcGxlRW1wdHlIZWFkZXJDZWxsLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJDZWxsLFxuICAgIE5vdm9TaW1wbGVDZWxsLFxuICAgIE5vdm9TaW1wbGVIZWFkZXJSb3csXG4gICAgTm92b1NpbXBsZVJvdyxcbiAgICBOb3ZvU2ltcGxlRmlsdGVyRm9jdXMsXG4gICAgTm92b1NpbXBsZVRhYmxlUGFnaW5hdGlvbixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUhlYWRlcixcbiAgICBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsLFxuICAgIE5vdm9TaW1wbGVDaGVja2JveEhlYWRlckNlbGwsXG4gICAgTm92b1NlbGVjdGlvbixcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZSxcbiAgICBOb3ZvQWN0aXZpdHlUYWJsZUFjdGlvbnMsXG4gICAgTm92b0FjdGl2aXR5VGFibGVDdXN0b21GaWx0ZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW05vdm9BY3Rpdml0eVRhYmxlU3RhdGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlVGFibGVNb2R1bGUge31cbiJdfQ==