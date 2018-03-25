import { ElementRef, Renderer2, OnInit, TemplateRef } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { IDataTableColumn } from '../interfaces';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoCell: typeof CdkCell;
export declare class NovoDataTableCell<T> extends _NovoCell implements OnInit {
    private elementRef;
    private renderer;
    role: string;
    row: T;
    template: TemplateRef<any>;
    column: IDataTableColumn<T>;
    templateName: string;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
