import { ChangeDetectorRef, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { IDataTableSortFilter, IDataTableColumn, IDataTableColumnFilterConfig } from '../interfaces';
import { NovoDataTableSortFilter } from '../sort-filter/sort-filter.directive';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
export declare class NovoDataTableCellHeader<T> implements IDataTableSortFilter, OnInit, OnDestroy {
    private changeDetectorRef;
    labels: NovoLabelService;
    private state;
    _sort: NovoDataTableSortFilter<T>;
    _cdkColumnDef: CdkColumnDef;
    filterInput: ElementRef;
    defaultSort: {
        id: string;
        value: string;
    };
    column: IDataTableColumn<T>;
    private _rerenderSubscription;
    private changeTimeout;
    label: string;
    icon: string;
    id: string;
    filter: any;
    direction: string;
    filterActive: boolean;
    sortActive: boolean;
    showCustomRange: boolean;
    activeDateFilter: string;
    config: {
        sortable: boolean;
        filterable: boolean;
        transforms?: {
            filter?: Function;
            sort?: Function;
        };
        filterConfig?: IDataTableColumnFilterConfig;
    };
    constructor(changeDetectorRef: ChangeDetectorRef, labels: NovoLabelService, state: DataTableState<T>, _sort: NovoDataTableSortFilter<T>, _cdkColumnDef: CdkColumnDef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    focusInput(): void;
    sort(): void;
    filterData(filter?: any): void;
    clearFilter(): void;
    private getNextSortDirection(direction);
    private getDefaultDateFilterOptions();
}
