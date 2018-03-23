import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { IDataTableColumn } from '../interfaces';
import { NovoLabelService } from '../../../services/novo-label-service';
export declare class NovoDataTableActionCell<T> extends CdkCell implements OnInit {
    private elementRef;
    private renderer;
    labels: NovoLabelService;
    role: string;
    row: T;
    column: IDataTableColumn<T>;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2, labels: NovoLabelService);
    ngOnInit(): void;
    isDisabled(check: any, row: T): boolean;
}
