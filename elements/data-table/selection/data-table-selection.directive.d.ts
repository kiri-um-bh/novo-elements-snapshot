import { EventEmitter, OnDestroy } from '@angular/core';
import { DataTableState } from '../state';
export declare class NovoDataTableSelection implements OnDestroy {
    state: DataTableState;
    novoSelectAllToggle: EventEmitter<boolean>;
    allRows: Map<string, object>;
    private throttleTimeout;
    constructor(state: DataTableState);
    register(id: any, row: any): void;
    deregister(id: any): void;
    ngOnDestroy(): void;
    toggle(id: string, selected: boolean, row: any): void;
    selectAll(value: boolean): void;
}
