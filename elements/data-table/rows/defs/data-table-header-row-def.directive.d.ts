import { CdkHeaderRowDef } from '@angular/cdk/table';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoHeaderRowDef: typeof CdkHeaderRowDef;
export declare class NovoDataTableHeaderRowDef extends _NovoHeaderRowDef {
    columns: any;
}
