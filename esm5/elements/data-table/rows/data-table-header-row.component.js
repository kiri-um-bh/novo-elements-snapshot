/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/rows/data-table-header-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
var NovoDataTableHeaderRow = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableHeaderRow, _super);
    function NovoDataTableHeaderRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-data-table-header-row';
        _this.fixedHeader = false;
        _this.role = 'row';
        return _this;
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
    return NovoDataTableHeaderRow;
}(CdkHeaderRow));
export { NovoDataTableHeaderRow };
if (false) {
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.rowClass;
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.fixedHeader;
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.role;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3Jvd3MvZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBFO0lBSzRDLGtEQUFZO0lBTHhEO1FBQUEscUVBYUM7UUFOUSxjQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFHeEMsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsVUFBSSxHQUFHLEtBQUssQ0FBQzs7SUFDdEIsQ0FBQzs7Z0JBYkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OzJCQUVFLFdBQVcsU0FBQyxPQUFPOzhCQUVuQixXQUFXLFNBQUMsb0JBQW9CLGNBQ2hDLEtBQUs7dUJBRUwsV0FBVyxTQUFDLFdBQVc7O0lBRTFCLDZCQUFDO0NBQUEsQUFiRCxDQUs0QyxZQUFZLEdBUXZEO1NBUlksc0JBQXNCOzs7SUFDakMsMENBQytDOztJQUMvQyw2Q0FFb0M7O0lBQ3BDLHNDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrSGVhZGVyUm93LCBDREtfUk9XX1RFTVBMQVRFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3cnLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVIZWFkZXJSb3cgZXh0ZW5kcyBDZGtIZWFkZXJSb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93JztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC1oZWFkZXInKVxuICBASW5wdXQoKVxuICBwdWJsaWMgZml4ZWRIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdyb3cnO1xufVxuIl19