import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataTableChangeEvent, IDataTableFilter } from '../interfaces';
export declare class DataTableState<T> {
    selectionSource: Subject<unknown>;
    paginationSource: Subject<unknown>;
    sortFilterSource: Subject<unknown>;
    resetSource: Subject<unknown>;
    expandSource: Subject<unknown>;
    dataLoaded: Subject<unknown>;
    sort: {
        id: string;
        value: string;
    };
    filter: IDataTableFilter | IDataTableFilter[];
    page: number;
    pageSize: number;
    globalSearch: string;
    selectedRows: Map<string, T>;
    expandedRows: Set<string>;
    outsideFilter: any;
    isForceRefresh: boolean;
    updates: EventEmitter<IDataTableChangeEvent>;
    readonly userFiltered: boolean;
    readonly userFilteredInternal: boolean;
    readonly selected: T[];
    reset(fireUpdate?: boolean, persistUserFilters?: boolean): void;
    clearSort(fireUpdate?: boolean): void;
    clearFilter(fireUpdate?: boolean): void;
    onSelectionChange(): void;
    onExpandChange(targetId?: number): void;
    onPaginationChange(isPageSizeChange: boolean, pageSize: number): void;
    onSortFilterChange(): void;
    setInitialSortFilter(preferences: any): void;
}
