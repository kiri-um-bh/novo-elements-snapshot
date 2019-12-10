/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Directive, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CdkRow, CDK_ROW_TEMPLATE, CdkRowDef, CdkHeaderRowDef } from '@angular/cdk/table';
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 * @type {?}
 */
export var _NovoHeaderRowDef = CdkHeaderRowDef;
/** @type {?} */
export var _NovoCdkRowDef = CdkRowDef;
/** @type {?} */
export var _NovoHeaderRow = CdkHeaderRow;
/** @type {?} */
export var _NovoRow = CdkRow;
var NovoSimpleHeaderRowDef = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleHeaderRowDef, _super);
    function NovoSimpleHeaderRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleHeaderRowDef.decorators = [
        { type: Directive, args: [{
                    selector: '[novoSimpleHeaderRowDef]',
                    providers: [{ provide: CdkHeaderRowDef, useExisting: NovoSimpleHeaderRowDef }],
                },] }
    ];
    NovoSimpleHeaderRowDef.propDecorators = {
        columns: [{ type: Input, args: ['novoSimpleHeaderRowDef',] }]
    };
    return NovoSimpleHeaderRowDef;
}(_NovoHeaderRowDef));
export { NovoSimpleHeaderRowDef };
if (false) {
    /** @type {?} */
    NovoSimpleHeaderRowDef.prototype.columns;
}
/**
 * @template T
 */
var NovoSimpleRowDef = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleRowDef, _super);
    function NovoSimpleRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleRowDef.decorators = [
        { type: Directive, args: [{
                    selector: '[novoSimpleRowDef]',
                    providers: [{ provide: CdkRowDef, useExisting: NovoSimpleRowDef }],
                },] }
    ];
    NovoSimpleRowDef.propDecorators = {
        columns: [{ type: Input, args: ['novoSimpleRowDefColumns',] }]
    };
    return NovoSimpleRowDef;
}(_NovoCdkRowDef));
export { NovoSimpleRowDef };
if (false) {
    /** @type {?} */
    NovoSimpleRowDef.prototype.columns;
}
var NovoSimpleHeaderRow = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleHeaderRow, _super);
    function NovoSimpleHeaderRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-simple-header-row';
        _this.role = 'row';
        return _this;
    }
    NovoSimpleHeaderRow.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-header-row',
                    template: CDK_ROW_TEMPLATE,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoSimpleHeaderRow.propDecorators = {
        rowClass: [{ type: HostBinding, args: ['class',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return NovoSimpleHeaderRow;
}(_NovoHeaderRow));
export { NovoSimpleHeaderRow };
if (false) {
    /** @type {?} */
    NovoSimpleHeaderRow.prototype.rowClass;
    /** @type {?} */
    NovoSimpleHeaderRow.prototype.role;
}
var NovoSimpleRow = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleRow, _super);
    function NovoSimpleRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-simple-row';
        _this.role = 'row';
        return _this;
    }
    NovoSimpleRow.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-row',
                    template: CDK_ROW_TEMPLATE,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoSimpleRow.propDecorators = {
        rowClass: [{ type: HostBinding, args: ['class',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return NovoSimpleRow;
}(_NovoRow));
export { NovoSimpleRow };
if (false) {
    /** @type {?} */
    NovoSimpleRow.prototype.rowClass;
    /** @type {?} */
    NovoSimpleRow.prototype.role;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBR3hHLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxlQUFlOztBQUNoRCxNQUFNLEtBQU8sY0FBYyxHQUFHLFNBQVM7O0FBQ3ZDLE1BQU0sS0FBTyxjQUFjLEdBQUcsWUFBWTs7QUFDMUMsTUFBTSxLQUFPLFFBQVEsR0FBRyxNQUFNO0FBRTlCO0lBSTRDLGtEQUFpQjtJQUo3RDs7SUFPQSxDQUFDOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO2lCQUMvRTs7OzBCQUVFLEtBQUssU0FBQyx3QkFBd0I7O0lBRWpDLDZCQUFDO0NBQUEsQUFQRCxDQUk0QyxpQkFBaUIsR0FHNUQ7U0FIWSxzQkFBc0I7OztJQUNqQyx5Q0FDUTs7Ozs7QUFHVjtJQUl5Qyw0Q0FBaUI7SUFKMUQ7O0lBT0EsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDbkU7OzswQkFFRSxLQUFLLFNBQUMseUJBQXlCOztJQUVsQyx1QkFBQztDQUFBLEFBUEQsQ0FJeUMsY0FBYyxHQUd0RDtTQUhZLGdCQUFnQjs7O0lBQzNCLG1DQUNROztBQUdWO0lBS3lDLCtDQUFjO0lBTHZEO1FBQUEscUVBVUM7UUFIUSxjQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFFcEMsVUFBSSxHQUFHLEtBQUssQ0FBQzs7SUFDdEIsQ0FBQzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OzJCQUVFLFdBQVcsU0FBQyxPQUFPO3VCQUVuQixXQUFXLFNBQUMsV0FBVzs7SUFFMUIsMEJBQUM7Q0FBQSxBQVZELENBS3lDLGNBQWMsR0FLdEQ7U0FMWSxtQkFBbUI7OztJQUM5Qix1Q0FDMkM7O0lBQzNDLG1DQUNvQjs7QUFHdEI7SUFLbUMseUNBQVE7SUFMM0M7UUFBQSxxRUFVQztRQUhRLGNBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUU3QixVQUFJLEdBQUcsS0FBSyxDQUFDOztJQUN0QixDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7MkJBRUUsV0FBVyxTQUFDLE9BQU87dUJBRW5CLFdBQVcsU0FBQyxXQUFXOztJQUUxQixvQkFBQztDQUFBLEFBVkQsQ0FLbUMsUUFBUSxHQUsxQztTQUxZLGFBQWE7OztJQUN4QixpQ0FDb0M7O0lBQ3BDLDZCQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtIZWFkZXJSb3csIENka1JvdywgQ0RLX1JPV19URU1QTEFURSwgQ2RrUm93RGVmLCBDZGtIZWFkZXJSb3dEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG4vKiogV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc4NDkgKi9cbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlclJvd0RlZiA9IENka0hlYWRlclJvd0RlZjtcbmV4cG9ydCBjb25zdCBfTm92b0Nka1Jvd0RlZiA9IENka1Jvd0RlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlclJvdyA9IENka0hlYWRlclJvdztcbmV4cG9ydCBjb25zdCBfTm92b1JvdyA9IENka1JvdztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJSb3dEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtIZWFkZXJSb3dEZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmIGV4dGVuZHMgX05vdm9IZWFkZXJSb3dEZWYge1xuICBASW5wdXQoJ25vdm9TaW1wbGVIZWFkZXJSb3dEZWYnKVxuICBjb2x1bW5zO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZVJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1Jvd0RlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVSb3dEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVSb3dEZWY8VD4gZXh0ZW5kcyBfTm92b0Nka1Jvd0RlZjxUPiB7XG4gIEBJbnB1dCgnbm92b1NpbXBsZVJvd0RlZkNvbHVtbnMnKVxuICBjb2x1bW5zO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1oZWFkZXItcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyUm93IGV4dGVuZHMgX05vdm9IZWFkZXJSb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tc2ltcGxlLWhlYWRlci1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZVJvdyBleHRlbmRzIF9Ob3ZvUm93IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyByb3dDbGFzcyA9ICdub3ZvLXNpbXBsZS1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG4iXX0=