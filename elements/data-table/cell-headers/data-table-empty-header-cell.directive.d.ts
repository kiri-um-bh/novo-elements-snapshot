import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
import { IDataTableColumn } from '../interfaces';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoHeaderCell: typeof CdkHeaderCell;
export declare class NovoDataTableEmptyHeaderCell<T> extends _NovoHeaderCell implements OnInit {
    private elementRef;
    private renderer;
    role: string;
    column: IDataTableColumn<T>;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
