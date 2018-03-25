import { ElementRef, Renderer2, OnInit, TemplateRef } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { IDataTableColumn } from '../interfaces';
export declare class NovoDataTableCell<T> extends CdkCell implements OnInit {
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
