/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
export class NovoDataTableRow extends CdkRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-data-table-row';
        this.role = 'row';
    }
}
NovoDataTableRow.decorators = [
    { type: Component, args: [{
                selector: 'novo-data-table-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NovoDataTableRow.propDecorators = {
    rowClass: [{ type: HostBinding, args: ['class',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    dataAutomationId: [{ type: HostBinding, args: ['attr.data-automation-id',] }, { type: Input }]
};
if (false) {
    /** @type {?} */
    NovoDataTableRow.prototype.rowClass;
    /** @type {?} */
    NovoDataTableRow.prototype.role;
    /** @type {?} */
    NovoDataTableRow.prototype.id;
    /** @type {?} */
    NovoDataTableRow.prototype.dataAutomationId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvcm93cy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPOUQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLE1BQU07SUFMNUM7O1FBT1MsYUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBRWpDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFTdEIsQ0FBQzs7O1lBbEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O3VCQUVFLFdBQVcsU0FBQyxPQUFPO21CQUVuQixXQUFXLFNBQUMsV0FBVztpQkFHdkIsV0FBVyxTQUFDLFNBQVMsY0FDckIsS0FBSzsrQkFHTCxXQUFXLFNBQUMseUJBQXlCLGNBQ3JDLEtBQUs7Ozs7SUFWTixvQ0FDd0M7O0lBQ3hDLGdDQUNvQjs7SUFFcEIsOEJBRUc7O0lBRUgsNENBRWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtSb3csIENES19ST1dfVEVNUExBVEUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlUm93IGV4dGVuZHMgQ2RrUm93IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyByb3dDbGFzcyA9ICdub3ZvLWRhdGEtdGFibGUtcm93JztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdyb3cnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gIEBJbnB1dCgpXG4gIGlkO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWF1dG9tYXRpb24taWQnKVxuICBASW5wdXQoKVxuICBkYXRhQXV0b21hdGlvbklkO1xufVxuIl19