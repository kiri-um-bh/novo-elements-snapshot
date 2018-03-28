import { DataTableState } from '../state/data-table-state.service';
export declare class NovoDataTableSortFilter<T> {
    private state;
    constructor(state: DataTableState<T>);
    filter(id: string, value: any, transform: Function): void;
    sort(id: string, value: string, transform: Function): void;
}
