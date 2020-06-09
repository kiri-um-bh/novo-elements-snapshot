import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
var NovoDataTableHeaderRow = /** @class */ (function (_super) {
    __extends(NovoDataTableHeaderRow, _super);
    function NovoDataTableHeaderRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-data-table-header-row';
        _this.fixedHeader = false;
        _this.role = 'row';
        return _this;
    }
    NovoDataTableHeaderRow.ɵfac = function NovoDataTableHeaderRow_Factory(t) { return ɵNovoDataTableHeaderRow_BaseFactory(t || NovoDataTableHeaderRow); };
    NovoDataTableHeaderRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableHeaderRow, selectors: [["novo-data-table-header-row"]], hostVars: 5, hostBindings: function NovoDataTableHeaderRow_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
            i0.ɵɵclassMap(ctx.rowClass);
            i0.ɵɵclassProp("fixed-header", ctx.fixedHeader);
        } }, inputs: { fixedHeader: "fixedHeader" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoDataTableHeaderRow_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 0);
        } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
    return NovoDataTableHeaderRow;
}(CdkHeaderRow));
export { NovoDataTableHeaderRow };
var ɵNovoDataTableHeaderRow_BaseFactory = i0.ɵɵgetInheritedFactory(NovoDataTableHeaderRow);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableHeaderRow, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-header-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { rowClass: [{
            type: HostBinding,
            args: ['class']
        }], fixedHeader: [{
            type: HostBinding,
            args: ['class.fixed-header']
        }, {
            type: Input
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3Jvd3MvZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRXBFO0lBSzRDLDBDQUFZO0lBTHhEO1FBQUEscUVBYUM7UUFOUSxjQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFHeEMsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsVUFBSSxHQUFHLEtBQUssQ0FBQzs7S0FDckI7K0hBUlksc0JBQXNCOytEQUF0QixzQkFBc0I7Ozs7Ozs7aUNBUm5DO0NBZ0JDLEFBYkQsQ0FLNEMsWUFBWSxHQVF2RDtTQVJZLHNCQUFzQjttRUFBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxXQUFXO21CQUFDLE9BQU87O2tCQUVuQixXQUFXO21CQUFDLG9CQUFvQjs7a0JBQ2hDLEtBQUs7O2tCQUVMLFdBQVc7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrSGVhZGVyUm93LCBDREtfUk9XX1RFTVBMQVRFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3cnLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVIZWFkZXJSb3cgZXh0ZW5kcyBDZGtIZWFkZXJSb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93JztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC1oZWFkZXInKVxuICBASW5wdXQoKVxuICBwdWJsaWMgZml4ZWRIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdyb3cnO1xufVxuIl19