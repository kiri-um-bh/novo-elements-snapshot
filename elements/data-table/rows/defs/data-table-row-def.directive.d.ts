import { CdkRowDef } from '@angular/cdk/table';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoCdkRowDef: typeof CdkRowDef;
export declare class NovoDataTableRowDef<T> extends _NovoCdkRowDef<T> {
    columns: any;
}
