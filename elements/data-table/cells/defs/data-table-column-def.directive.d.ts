import { CdkColumnDef } from '@angular/cdk/table';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoColumnDef: typeof CdkColumnDef;
export declare class NovoDataTableColumnDef extends _NovoColumnDef {
    name: string;
}
