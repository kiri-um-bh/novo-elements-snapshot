import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CdkRow, CDK_ROW_TEMPLATE, CdkRowDef, CdkHeaderRowDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
/** Workaround for https://github.com/angular/angular/issues/17849 */
export var _NovoHeaderRowDef = CdkHeaderRowDef;
export var _NovoCdkRowDef = CdkRowDef;
export var _NovoHeaderRow = CdkHeaderRow;
export var _NovoRow = CdkRow;
var NovoSimpleHeaderRowDef = /** @class */ (function (_super) {
    __extends(NovoSimpleHeaderRowDef, _super);
    function NovoSimpleHeaderRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleHeaderRowDef.ɵfac = function NovoSimpleHeaderRowDef_Factory(t) { return ɵNovoSimpleHeaderRowDef_BaseFactory(t || NovoSimpleHeaderRowDef); };
    NovoSimpleHeaderRowDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleHeaderRowDef, selectors: [["", "novoSimpleHeaderRowDef", ""]], inputs: { columns: ["novoSimpleHeaderRowDef", "columns"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkHeaderRowDef, useExisting: NovoSimpleHeaderRowDef }]), i0.ɵɵInheritDefinitionFeature] });
    return NovoSimpleHeaderRowDef;
}(_NovoHeaderRowDef));
export { NovoSimpleHeaderRowDef };
var ɵNovoSimpleHeaderRowDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleHeaderRowDef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleHeaderRowDef, [{
        type: Directive,
        args: [{
                selector: '[novoSimpleHeaderRowDef]',
                providers: [{ provide: CdkHeaderRowDef, useExisting: NovoSimpleHeaderRowDef }],
            }]
    }], null, { columns: [{
            type: Input,
            args: ['novoSimpleHeaderRowDef']
        }] }); })();
var NovoSimpleRowDef = /** @class */ (function (_super) {
    __extends(NovoSimpleRowDef, _super);
    function NovoSimpleRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleRowDef.ɵfac = function NovoSimpleRowDef_Factory(t) { return ɵNovoSimpleRowDef_BaseFactory(t || NovoSimpleRowDef); };
    NovoSimpleRowDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleRowDef, selectors: [["", "novoSimpleRowDef", ""]], inputs: { columns: ["novoSimpleRowDefColumns", "columns"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkRowDef, useExisting: NovoSimpleRowDef }]), i0.ɵɵInheritDefinitionFeature] });
    return NovoSimpleRowDef;
}(_NovoCdkRowDef));
export { NovoSimpleRowDef };
var ɵNovoSimpleRowDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleRowDef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleRowDef, [{
        type: Directive,
        args: [{
                selector: '[novoSimpleRowDef]',
                providers: [{ provide: CdkRowDef, useExisting: NovoSimpleRowDef }],
            }]
    }], null, { columns: [{
            type: Input,
            args: ['novoSimpleRowDefColumns']
        }] }); })();
var NovoSimpleHeaderRow = /** @class */ (function (_super) {
    __extends(NovoSimpleHeaderRow, _super);
    function NovoSimpleHeaderRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-simple-header-row';
        _this.role = 'row';
        return _this;
    }
    NovoSimpleHeaderRow.ɵfac = function NovoSimpleHeaderRow_Factory(t) { return ɵNovoSimpleHeaderRow_BaseFactory(t || NovoSimpleHeaderRow); };
    NovoSimpleHeaderRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleHeaderRow, selectors: [["novo-simple-header-row"]], hostVars: 3, hostBindings: function NovoSimpleHeaderRow_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
            i0.ɵɵclassMap(ctx.rowClass);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoSimpleHeaderRow_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 0);
        } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
    return NovoSimpleHeaderRow;
}(_NovoHeaderRow));
export { NovoSimpleHeaderRow };
var ɵNovoSimpleHeaderRow_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleHeaderRow);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleHeaderRow, [{
        type: Component,
        args: [{
                selector: 'novo-simple-header-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { rowClass: [{
            type: HostBinding,
            args: ['class']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
var NovoSimpleRow = /** @class */ (function (_super) {
    __extends(NovoSimpleRow, _super);
    function NovoSimpleRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowClass = 'novo-simple-row';
        _this.role = 'row';
        return _this;
    }
    NovoSimpleRow.ɵfac = function NovoSimpleRow_Factory(t) { return ɵNovoSimpleRow_BaseFactory(t || NovoSimpleRow); };
    NovoSimpleRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleRow, selectors: [["novo-simple-row"]], hostVars: 3, hostBindings: function NovoSimpleRow_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
            i0.ɵɵclassMap(ctx.rowClass);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoSimpleRow_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 0);
        } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
    return NovoSimpleRow;
}(_NovoRow));
export { NovoSimpleRow };
var ɵNovoSimpleRow_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleRow);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleRow, [{
        type: Component,
        args: [{
                selector: 'novo-simple-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { rowClass: [{
            type: HostBinding,
            args: ['class']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFFeEcscUVBQXFFO0FBQ3JFLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztBQUNqRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFDM0MsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUUvQjtJQUk0QywwQ0FBaUI7SUFKN0Q7O0tBU0M7K0hBTFksc0JBQXNCOytEQUF0QixzQkFBc0IsZ0pBRnRCLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO2lDQVhoRjtDQWtCQyxBQVRELENBSTRDLGlCQUFpQixHQUs1RDtTQUxZLHNCQUFzQjttRUFBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQzthQUMvRTs7a0JBSUUsS0FBSzttQkFBQyx3QkFBd0I7O0FBSWpDO0lBSXlDLG9DQUFpQjtJQUoxRDs7S0FTQzs2R0FMWSxnQkFBZ0I7eURBQWhCLGdCQUFnQiwySUFGaEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7MkJBdEJwRTtDQTZCQyxBQVRELENBSXlDLGNBQWMsR0FLdEQ7U0FMWSxnQkFBZ0I7NkRBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7YUFDbkU7O2tCQUlFLEtBQUs7bUJBQUMseUJBQXlCOztBQUlsQztJQUt5Qyx1Q0FBYztJQUx2RDtRQUFBLHFFQVVDO1FBSFEsY0FBUSxHQUFHLHdCQUF3QixDQUFDO1FBRXBDLFVBQUksR0FBRyxLQUFLLENBQUM7O0tBQ3JCO3NIQUxZLG1CQUFtQjs0REFBbkIsbUJBQW1COzs7Ozs7OEJBcENoQztDQXlDQyxBQVZELENBS3lDLGNBQWMsR0FLdEQ7U0FMWSxtQkFBbUI7Z0VBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsV0FBVzttQkFBQyxPQUFPOztrQkFFbkIsV0FBVzttQkFBQyxXQUFXOztBQUkxQjtJQUttQyxpQ0FBUTtJQUwzQztRQUFBLHFFQVVDO1FBSFEsY0FBUSxHQUFHLGlCQUFpQixDQUFDO1FBRTdCLFVBQUksR0FBRyxLQUFLLENBQUM7O0tBQ3JCO29HQUxZLGFBQWE7c0RBQWIsYUFBYTs7Ozs7O3dCQWhEMUI7Q0FxREMsQUFWRCxDQUttQyxRQUFRLEdBSzFDO1NBTFksYUFBYTswREFBYixhQUFhO2tEQUFiLGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxXQUFXO21CQUFDLE9BQU87O2tCQUVuQixXQUFXO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrSGVhZGVyUm93LCBDZGtSb3csIENES19ST1dfVEVNUExBVEUsIENka1Jvd0RlZiwgQ2RrSGVhZGVyUm93RGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9IZWFkZXJSb3dEZWYgPSBDZGtIZWFkZXJSb3dEZWY7XG5leHBvcnQgY29uc3QgX05vdm9DZGtSb3dEZWYgPSBDZGtSb3dEZWY7XG5leHBvcnQgY29uc3QgX05vdm9IZWFkZXJSb3cgPSBDZGtIZWFkZXJSb3c7XG5leHBvcnQgY29uc3QgX05vdm9Sb3cgPSBDZGtSb3c7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlSGVhZGVyUm93RGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyUm93RGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZUhlYWRlclJvd0RlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUhlYWRlclJvd0RlZiBleHRlbmRzIF9Ob3ZvSGVhZGVyUm93RGVmIHtcbiAgLy8gVE9ETzogYWRkIGV4cGxpY2l0IGNvbnN0cnVjdG9yXG5cbiAgQElucHV0KCdub3ZvU2ltcGxlSGVhZGVyUm93RGVmJylcbiAgY29sdW1ucztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVSb3dEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtSb3dEZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlUm93RGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlUm93RGVmPFQ+IGV4dGVuZHMgX05vdm9DZGtSb3dEZWY8VD4ge1xuICAvLyBUT0RPOiBhZGQgZXhwbGljaXQgY29uc3RydWN0b3JcblxuICBASW5wdXQoJ25vdm9TaW1wbGVSb3dEZWZDb2x1bW5zJylcbiAgY29sdW1ucztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtaGVhZGVyLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUhlYWRlclJvdyBleHRlbmRzIF9Ob3ZvSGVhZGVyUm93IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyByb3dDbGFzcyA9ICdub3ZvLXNpbXBsZS1oZWFkZXItcm93JztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdyb3cnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1yb3cnLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVSb3cgZXh0ZW5kcyBfTm92b1JvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1zaW1wbGUtcm93JztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdyb3cnO1xufVxuIl19