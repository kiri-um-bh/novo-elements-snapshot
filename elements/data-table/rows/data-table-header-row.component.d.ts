import { CdkHeaderRow } from '@angular/cdk/table';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoHeaderRow: typeof CdkHeaderRow;
export declare class NovoDataTableHeaderRow extends _NovoHeaderRow {
    rowClass: string;
    role: string;
}
