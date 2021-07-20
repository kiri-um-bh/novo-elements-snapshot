import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { IDataTableColumn } from '../interfaces';
import * as i0 from "@angular/core";
export declare class NovoDataTableCell<T> extends CdkCell implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    role: string;
    row: T;
    template: TemplateRef<any>;
    column: IDataTableColumn<T>;
    resized: EventEmitter<IDataTableColumn<T>>;
    private subscriptions;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private calculateWidths;
    static ɵfac: i0.ɵɵFactoryDef<NovoDataTableCell<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoDataTableCell<any>, "novo-data-table-cell", never, { "row": "row"; "template": "template"; "column": "column"; "resized": "resized"; }, {}, never, never>;
}
