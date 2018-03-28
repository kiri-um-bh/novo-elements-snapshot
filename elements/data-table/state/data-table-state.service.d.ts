import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IDataTableChangeEvent } from '../interfaces';
export declare class DataTableState<T> {
    selectionSource: Subject<{}>;
    paginationSource: Subject<{}>;
    sortFilterSource: Subject<{}>;
    resetSource: Subject<{}>;
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
    outsideFilter: any;
    updates: EventEmitter<IDataTableChangeEvent>;
    readonly userFiltered: boolean;
    readonly selected: T[];
    reset(fireUpdate?: boolean, persistUserFilters?: boolean): void;
    onSelectionChange(): void;
    onPaginationChange(): void;
    onSortFilterChange(): void;
}
