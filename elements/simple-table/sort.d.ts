import { EventEmitter, OnDestroy } from '@angular/core';
import { NovoActivityTableState } from './state';
import * as i0 from "@angular/core";
export declare class NovoSortFilter {
    private state;
    constructor(state: NovoActivityTableState);
    filter(id: string, value: any, transform: Function): void;
    sort(id: string, value: string, transform: Function): void;
    static ɵfac: i0.ɵɵFactoryDef<NovoSortFilter, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NovoSortFilter, "[novoSortFilter]", never, {}, {}, never>;
}
export declare class NovoSelection implements OnDestroy {
    state: NovoActivityTableState;
    novoSelectAllToggle: EventEmitter<boolean>;
    allRows: Map<string, object>;
    private throttleTimeout;
    constructor(state: NovoActivityTableState);
    register(id: any, row: any): void;
    deregister(id: any): void;
    ngOnDestroy(): void;
    toggle(id: string, selected: boolean, row: any): void;
    selectAll(value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<NovoSelection, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NovoSelection, "[novoSelection]", never, {}, { "novoSelectAllToggle": "novoSelectAllToggle"; }, never>;
}
