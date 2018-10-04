import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IDataTableChangeEvent } from '../interfaces';
export declare class DataTableState<T> {
    selectionSource: Subject<{}>;
    paginationSource: Subject<{}>;
    sortFilterSource: Subject<{}>;
    resetSource: Subject<{}>;
    expandSource: Subject<{}>;
    sort: {
        id: string;
        value: string;
    };
    filter: {
        id: string;
        value: string;
    };
    page: number;
    pageSize: number;
    globalSearch: string;
    selectedRows: Map<string, T>;
    expandedRows: Set<string>;
    outsideFilter: any;
    isForceRefresh: boolean;
    updates: EventEmitter<IDataTableChangeEvent>;
    readonly userFiltered: boolean;
    readonly selected: T[];
    reset(fireUpdate?: boolean, persistUserFilters?: boolean): void;
    clearSort(fireUpdate?: boolean): void;
    clearFilter(fireUpdate?: boolean): void;
    onSelectionChange(): void;
    onExpandChange(): void;
    onPaginationChange(isPageSizeChange: boolean, pageSize: number): void;
    onSortFilterChange(): void;
}
