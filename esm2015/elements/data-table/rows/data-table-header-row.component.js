/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/rows/data-table-header-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
export class NovoDataTableHeaderRow extends CdkHeaderRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-data-table-header-row';
        this.fixedHeader = false;
        this.role = 'row';
    }
}
NovoDataTableHeaderRow.decorators = [
    { type: Component, args: [{
                selector: 'novo-data-table-header-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NovoDataTableHeaderRow.propDecorators = {
    rowClass: [{ type: HostBinding, args: ['class',] }],
    fixedHeader: [{ type: HostBinding, args: ['class.fixed-header',] }, { type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.rowClass;
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.fixedHeader;
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.role;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3Jvd3MvZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPcEUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFlBQVk7SUFMeEQ7O1FBT1MsYUFBUSxHQUFHLDRCQUE0QixDQUFDO1FBR3hDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLFNBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7O1lBYkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7dUJBRUUsV0FBVyxTQUFDLE9BQU87MEJBRW5CLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsS0FBSzttQkFFTCxXQUFXLFNBQUMsV0FBVzs7OztJQUx4QiwwQ0FDK0M7O0lBQy9DLDZDQUVvQzs7SUFDcEMsc0NBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtIZWFkZXJSb3csIENES19ST1dfVEVNUExBVEUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUhlYWRlclJvdyBleHRlbmRzIENka0hlYWRlclJvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLWhlYWRlcicpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaXhlZEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG4iXX0=