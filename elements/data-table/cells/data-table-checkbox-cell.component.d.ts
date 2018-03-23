import { ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTableSelection } from '../selection';
export declare class NovoDataTableCheckboxCell extends CdkCell implements OnDestroy, OnInit {
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
