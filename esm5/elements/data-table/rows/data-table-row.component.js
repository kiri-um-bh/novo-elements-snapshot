import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
var NovoDataTableRow = /** @class */ (function (_super) {
    __extends(NovoDataTableRow, _super);
    function NovoDataTableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-data-table-row';
        _this.role = 'row';
        return _this;
    }
    NovoDataTableRow.ɵfac = function NovoDataTableRow_Factory(t) { return ɵNovoDataTableRow_BaseFactory(t || NovoDataTableRow); };
    NovoDataTableRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableRow, selectors: [["novo-data-table-row"]], hostVars: 5, hostBindings: function NovoDataTableRow_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role)("id", ctx.id)("data-automation-id", ctx.dataAutomationId);
            i0.ɵɵclassMap(ctx.rowClass);
        } }, inputs: { id: "id", dataAutomationId: "dataAutomationId" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoDataTableRow_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 0);
        } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
    return NovoDataTableRow;
}(CdkRow));
export { NovoDataTableRow };
var ɵNovoDataTableRow_BaseFactory = i0.ɵɵgetInheritedFactory(NovoDataTableRow);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableRow, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { rowClass: [{
            type: HostBinding,
            args: ['class']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }, {
            type: Input
        }], dataAutomationId: [{
            type: HostBinding,
            args: ['attr.data-automation-id']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvcm93cy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUU5RDtJQUtzQyxvQ0FBTTtJQUw1QztRQUFBLHFFQWtCQztRQVhRLGNBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUVqQyxVQUFJLEdBQUcsS0FBSyxDQUFDOztLQVNyQjs2R0FiWSxnQkFBZ0I7eURBQWhCLGdCQUFnQjs7Ozs7OzJCQVI3QjtDQXFCQyxBQWxCRCxDQUtzQyxNQUFNLEdBYTNDO1NBYlksZ0JBQWdCOzZEQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLFdBQVc7bUJBQUMsT0FBTzs7a0JBRW5CLFdBQVc7bUJBQUMsV0FBVzs7a0JBR3ZCLFdBQVc7bUJBQUMsU0FBUzs7a0JBQ3JCLEtBQUs7O2tCQUdMLFdBQVc7bUJBQUMseUJBQXlCOztrQkFDckMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrUm93LCBDREtfUk9XX1RFTVBMQVRFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZVJvdyBleHRlbmRzIENka1JvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1kYXRhLXRhYmxlLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93JztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICBASW5wdXQoKVxuICBpZDtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkJylcbiAgQElucHV0KClcbiAgZGF0YUF1dG9tYXRpb25JZDtcbn1cbiJdfQ==