/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFHeEcsTUFBTSxLQUFPLGlCQUFpQixHQUFHLGVBQWU7O0FBQ2hELE1BQU0sS0FBTyxjQUFjLEdBQUcsU0FBUzs7QUFDdkMsTUFBTSxLQUFPLGNBQWMsR0FBRyxZQUFZOztBQUMxQyxNQUFNLEtBQU8sUUFBUSxHQUFHLE1BQU07QUFFOUI7SUFJNEMsa0RBQWlCO0lBSjdEOztJQU9BLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLENBQUM7aUJBQy9FOzs7MEJBRUUsS0FBSyxTQUFDLHdCQUF3Qjs7SUFFakMsNkJBQUM7Q0FBQSxBQVBELENBSTRDLGlCQUFpQixHQUc1RDtTQUhZLHNCQUFzQjs7O0lBQ2pDLHlDQUNROzs7OztBQUdWO0lBSXlDLDRDQUFpQjtJQUoxRDs7SUFPQSxDQUFDOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO2lCQUNuRTs7OzBCQUVFLEtBQUssU0FBQyx5QkFBeUI7O0lBRWxDLHVCQUFDO0NBQUEsQUFQRCxDQUl5QyxjQUFjLEdBR3REO1NBSFksZ0JBQWdCOzs7SUFDM0IsbUNBQ1E7O0FBR1Y7SUFLeUMsK0NBQWM7SUFMdkQ7UUFBQSxxRUFVQztRQUhRLGNBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUVwQyxVQUFJLEdBQUcsS0FBSyxDQUFDOztJQUN0QixDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7MkJBRUUsV0FBVyxTQUFDLE9BQU87dUJBRW5CLFdBQVcsU0FBQyxXQUFXOztJQUUxQiwwQkFBQztDQUFBLEFBVkQsQ0FLeUMsY0FBYyxHQUt0RDtTQUxZLG1CQUFtQjs7O0lBQzlCLHVDQUMyQzs7SUFDM0MsbUNBQ29COztBQUd0QjtJQUttQyx5Q0FBUTtJQUwzQztRQUFBLHFFQVVDO1FBSFEsY0FBUSxHQUFHLGlCQUFpQixDQUFDO1FBRTdCLFVBQUksR0FBRyxLQUFLLENBQUM7O0lBQ3RCLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzsyQkFFRSxXQUFXLFNBQUMsT0FBTzt1QkFFbkIsV0FBVyxTQUFDLFdBQVc7O0lBRTFCLG9CQUFDO0NBQUEsQUFWRCxDQUttQyxRQUFRLEdBSzFDO1NBTFksYUFBYTs7O0lBQ3hCLGlDQUNvQzs7SUFDcEMsNkJBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0hlYWRlclJvdywgQ2RrUm93LCBDREtfUk9XX1RFTVBMQVRFLCBDZGtSb3dEZWYsIENka0hlYWRlclJvd0RlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbi8qKiBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzg0OSAqL1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyUm93RGVmID0gQ2RrSGVhZGVyUm93RGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ2RrUm93RGVmID0gQ2RrUm93RGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyUm93ID0gQ2RrSGVhZGVyUm93O1xuZXhwb3J0IGNvbnN0IF9Ob3ZvUm93ID0gQ2RrUm93O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZUhlYWRlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0hlYWRlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYgZXh0ZW5kcyBfTm92b0hlYWRlclJvd0RlZiB7XG4gIEBJbnB1dCgnbm92b1NpbXBsZUhlYWRlclJvd0RlZicpXG4gIGNvbHVtbnM7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlUm93RGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrUm93RGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZVJvd0RlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZVJvd0RlZjxUPiBleHRlbmRzIF9Ob3ZvQ2RrUm93RGVmPFQ+IHtcbiAgQElucHV0KCdub3ZvU2ltcGxlUm93RGVmQ29sdW1ucycpXG4gIGNvbHVtbnM7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWhlYWRlci1yb3cnLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJSb3cgZXh0ZW5kcyBfTm92b0hlYWRlclJvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1zaW1wbGUtaGVhZGVyLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93Jztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlUm93IGV4dGVuZHMgX05vdm9Sb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tc2ltcGxlLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93Jztcbn1cbiJdfQ==