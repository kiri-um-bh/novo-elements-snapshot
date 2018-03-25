import { OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTableSelection } from '../selection/data-table-selection.directive';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoHeaderCell: typeof CdkHeaderCell;
export declare class NovoDataTableCheckboxHeaderCell extends _NovoHeaderCell implements OnDestroy {
    private _selection;
    role: string;
    selectAll: boolean;
    private selectAllSubscription;
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef, renderer: Renderer2, _selection: NovoDataTableSelection);
    ngOnDestroy(): void;
    toggle(value: boolean): void;
}
