import { ElementRef, Renderer2, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTable } from '../data-table.component';
import * as i0 from "@angular/core";
export declare class NovoDataTableCheckboxCell<T> extends CdkCell implements OnInit, OnDestroy {
    columnDef: CdkColumnDef;
    dataTable: NovoDataTable<T>;
    private ref;
    role: string;
    row: T;
    checked: boolean;
    private selectionSubscription;
    private resetSubscription;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2, dataTable: NovoDataTable<T>, ref: ChangeDetectorRef);
    ngOnInit(): void;
    onClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NovoDataTableCheckboxCell<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoDataTableCheckboxCell<any>, "novo-data-table-checkbox-cell", never, { "row": "row"; }, {}, never, never>;
}
