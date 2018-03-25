import { CdkRow } from '@angular/cdk/table';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _NovoRow: typeof CdkRow;
export declare class NovoDataTableRow extends _NovoRow {
    rowClass: string;
    role: string;
    id: any;
    dataAutomationId: any;
}
