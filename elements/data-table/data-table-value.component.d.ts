import { OnInit } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { IDataTableColumn, IDataTableCell } from './interfaces';
export declare class NovoDataTableValue<T> implements OnInit, IDataTableCell<T> {
    private labels;
    isClickable: boolean;
    onClick(event: MouseEvent): void;
    column: IDataTableColumn<T>;
    row: T;
    value: string;
    constructor(labels: NovoLabelService);
    ngOnInit(): void;
    private interpolateCell(row, col);
}
