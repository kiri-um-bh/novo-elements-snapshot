import { OnDestroy, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTable } from '../data-table.component';
export declare class NovoDataTableCheckboxHeaderCell<T> extends CdkHeaderCell implements OnDestroy {
    private dataTable;
    private ref;
    role: string;
    checked: boolean;
    private selectionSubscription;
    private paginationSubscription;
    private resetSubscription;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2, dataTable: NovoDataTable<T>, ref: ChangeDetectorRef);
    ngOnDestroy(): void;
    onClick(): void;
}
