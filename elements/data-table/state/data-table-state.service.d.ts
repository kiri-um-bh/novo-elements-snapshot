import { EventEmitter } from '@angular/core';
import { IDataTableChangeEvent } from '../interfaces';
export declare class DataTableState {
    id: number;
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
    selectedRows: Map<string, object>;
    outsideFilter: any;
    updates: EventEmitter<IDataTableChangeEvent>;
    onReset: EventEmitter<boolean>;
    readonly userFiltered: boolean;
    reset(fireUpdate?: boolean, persistUserFilters?: boolean): void;
}
