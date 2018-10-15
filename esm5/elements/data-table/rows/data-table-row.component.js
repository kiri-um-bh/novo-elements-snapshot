/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
var NovoDataTableRow = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableRow, _super);
    function NovoDataTableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-data-table-row';
        _this.role = 'row';
        return _this;
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
    return NovoDataTableRow;
}(CdkRow));
export { NovoDataTableRow };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvcm93cy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlEO0lBS3NDLDRDQUFNO0lBTDVDO1FBQUEscUVBa0JDO1FBWFEsY0FBUSxHQUFHLHFCQUFxQixDQUFDO1FBRWpDLFVBQUksR0FBRyxLQUFLLENBQUM7O0lBU3RCLENBQUM7O2dCQWxCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7MkJBRUUsV0FBVyxTQUFDLE9BQU87dUJBRW5CLFdBQVcsU0FBQyxXQUFXO3FCQUd2QixXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLO21DQUdMLFdBQVcsU0FBQyx5QkFBeUIsY0FDckMsS0FBSzs7SUFFUix1QkFBQztDQUFBLEFBbEJELENBS3NDLE1BQU0sR0FhM0M7U0FiWSxnQkFBZ0I7OztJQUMzQixvQ0FDd0M7O0lBQ3hDLGdDQUNvQjs7SUFFcEIsOEJBRUc7O0lBRUgsNENBRWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtSb3csIENES19ST1dfVEVNUExBVEUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlUm93IGV4dGVuZHMgQ2RrUm93IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyByb3dDbGFzcyA9ICdub3ZvLWRhdGEtdGFibGUtcm93JztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdyb3cnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gIEBJbnB1dCgpXG4gIGlkO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWF1dG9tYXRpb24taWQnKVxuICBASW5wdXQoKVxuICBkYXRhQXV0b21hdGlvbklkO1xufVxuIl19