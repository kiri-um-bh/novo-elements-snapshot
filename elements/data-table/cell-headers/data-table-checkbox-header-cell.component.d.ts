import { OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTableSelection } from '../selection/data-table-selection.directive';
export declare class NovoDataTableCheckboxHeaderCell extends CdkHeaderCell implements OnDestroy {
    private _selection;
    role: string;
    selectAll: boolean;
    private selectAllSubscription;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2, _selection: NovoDataTableSelection);
    ngOnDestroy(): void;
    toggle(value: boolean): void;
}
