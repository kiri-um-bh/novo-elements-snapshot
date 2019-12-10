/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/rows/data-table-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvcm93cy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RDtJQUtzQyw0Q0FBTTtJQUw1QztRQUFBLHFFQWtCQztRQVhRLGNBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUVqQyxVQUFJLEdBQUcsS0FBSyxDQUFDOztJQVN0QixDQUFDOztnQkFsQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OzJCQUVFLFdBQVcsU0FBQyxPQUFPO3VCQUVuQixXQUFXLFNBQUMsV0FBVztxQkFHdkIsV0FBVyxTQUFDLFNBQVMsY0FDckIsS0FBSzttQ0FHTCxXQUFXLFNBQUMseUJBQXlCLGNBQ3JDLEtBQUs7O0lBRVIsdUJBQUM7Q0FBQSxBQWxCRCxDQUtzQyxNQUFNLEdBYTNDO1NBYlksZ0JBQWdCOzs7SUFDM0Isb0NBQ3dDOztJQUN4QyxnQ0FDb0I7O0lBRXBCLDhCQUVHOztJQUVILDRDQUVpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrUm93LCBDREtfUk9XX1RFTVBMQVRFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZVJvdyBleHRlbmRzIENka1JvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1kYXRhLXRhYmxlLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93JztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICBASW5wdXQoKVxuICBpZDtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkJylcbiAgQElucHV0KClcbiAgZGF0YUF1dG9tYXRpb25JZDtcbn1cbiJdfQ==