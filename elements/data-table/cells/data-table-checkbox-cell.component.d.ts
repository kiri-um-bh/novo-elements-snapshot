import { ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTableSelection } from '../selection/data-table-selection.directive';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoCell: typeof CdkCell;
export declare class NovoDataTableCheckboxCell extends _NovoCell implements OnDestroy, OnInit {
    columnDef: CdkColumnDef;
    _selection: NovoDataTableSelection;
    role: string;
    row: any;
    index: any;
    selected: boolean;
    private selectAllSubscription;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2, _selection: NovoDataTableSelection);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggle(value: boolean): void;
}
