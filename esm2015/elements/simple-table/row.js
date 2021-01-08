import { CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _NovoHeaderRowDef = CdkHeaderRowDef;
export const _NovoCdkRowDef = CdkRowDef;
export const _NovoHeaderRow = CdkHeaderRow;
export const _NovoRow = CdkRow;
export class NovoSimpleHeaderRowDef extends _NovoHeaderRowDef {
}
NovoSimpleHeaderRowDef.ɵfac = function NovoSimpleHeaderRowDef_Factory(t) { return ɵNovoSimpleHeaderRowDef_BaseFactory(t || NovoSimpleHeaderRowDef); };
NovoSimpleHeaderRowDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleHeaderRowDef, selectors: [["", "novoSimpleHeaderRowDef", ""]], inputs: { columns: ["novoSimpleHeaderRowDef", "columns"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkHeaderRowDef, useExisting: NovoSimpleHeaderRowDef }]), i0.ɵɵInheritDefinitionFeature] });
const ɵNovoSimpleHeaderRowDef_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoSimpleHeaderRowDef);
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
export class NovoSimpleRowDef extends _NovoCdkRowDef {
}
NovoSimpleRowDef.ɵfac = function NovoSimpleRowDef_Factory(t) { return ɵNovoSimpleRowDef_BaseFactory(t || NovoSimpleRowDef); };
NovoSimpleRowDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleRowDef, selectors: [["", "novoSimpleRowDef", ""]], inputs: { columns: ["novoSimpleRowDefColumns", "columns"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkRowDef, useExisting: NovoSimpleRowDef }]), i0.ɵɵInheritDefinitionFeature] });
const ɵNovoSimpleRowDef_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoSimpleRowDef);
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
export class NovoSimpleHeaderRow extends _NovoHeaderRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-simple-header-row';
        this.role = 'row';
    }
}
NovoSimpleHeaderRow.ɵfac = function NovoSimpleHeaderRow_Factory(t) { return ɵNovoSimpleHeaderRow_BaseFactory(t || NovoSimpleHeaderRow); };
NovoSimpleHeaderRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleHeaderRow, selectors: [["novo-simple-header-row"]], hostVars: 3, hostBindings: function NovoSimpleHeaderRow_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role);
        i0.ɵɵclassMap(ctx.rowClass);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoSimpleHeaderRow_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
    } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
const ɵNovoSimpleHeaderRow_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoSimpleHeaderRow);
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
export class NovoSimpleRow extends _NovoRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-simple-row';
        this.role = 'row';
    }
}
NovoSimpleRow.ɵfac = function NovoSimpleRow_Factory(t) { return ɵNovoSimpleRow_BaseFactory(t || NovoSimpleRow); };
NovoSimpleRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleRow, selectors: [["novo-simple-row"]], hostVars: 3, hostBindings: function NovoSimpleRow_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role);
        i0.ɵɵclassMap(ctx.rowClass);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoSimpleRow_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
    } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
const ɵNovoSimpleRow_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoSimpleRow);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3Jvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRWxHLHFFQUFxRTtBQUNyRSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxlQUFlLENBQUM7QUFDakQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUN4QyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFNL0IsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjs7MkhBQWhELHNCQUFzQjsyREFBdEIsc0JBQXNCLGdKQUZ0QixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQzttRkFFbkUsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQzthQUMvRTtnQkFLQyxPQUFPO2tCQUROLEtBQUs7bUJBQUMsd0JBQXdCOztBQVFqQyxNQUFNLE9BQU8sZ0JBQW9CLFNBQVEsY0FBaUI7O3lHQUE3QyxnQkFBZ0I7cURBQWhCLGdCQUFnQiwySUFGaEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7NkVBRXZELGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7YUFDbkU7Z0JBS0MsT0FBTztrQkFETixLQUFLO21CQUFDLHlCQUF5Qjs7QUFTbEMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGNBQWM7SUFMdkQ7O1FBT1MsYUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBRXBDLFNBQUksR0FBRyxLQUFLLENBQUM7S0FDckI7O2tIQUxZLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7Ozs7Z0ZBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFHUSxRQUFRO2tCQURkLFdBQVc7bUJBQUMsT0FBTztZQUdiLElBQUk7a0JBRFYsV0FBVzttQkFBQyxXQUFXOztBQVMxQixNQUFNLE9BQU8sYUFBYyxTQUFRLFFBQVE7SUFMM0M7O1FBT1MsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBRTdCLFNBQUksR0FBRyxLQUFLLENBQUM7S0FDckI7O2dHQUxZLGFBQWE7a0RBQWIsYUFBYTs7Ozs7OzBFQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBR1EsUUFBUTtrQkFEZCxXQUFXO21CQUFDLE9BQU87WUFHYixJQUFJO2tCQURWLFdBQVc7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0hlYWRlclJvdywgQ2RrSGVhZGVyUm93RGVmLCBDZGtSb3csIENka1Jvd0RlZiwgQ0RLX1JPV19URU1QTEFURSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc4NDkgKi9cbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlclJvd0RlZiA9IENka0hlYWRlclJvd0RlZjtcbmV4cG9ydCBjb25zdCBfTm92b0Nka1Jvd0RlZiA9IENka1Jvd0RlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlclJvdyA9IENka0hlYWRlclJvdztcbmV4cG9ydCBjb25zdCBfTm92b1JvdyA9IENka1JvdztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJSb3dEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtIZWFkZXJSb3dEZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmIGV4dGVuZHMgX05vdm9IZWFkZXJSb3dEZWYge1xuICAvLyBUT0RPOiBhZGQgZXhwbGljaXQgY29uc3RydWN0b3JcblxuICBASW5wdXQoJ25vdm9TaW1wbGVIZWFkZXJSb3dEZWYnKVxuICBjb2x1bW5zO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZVJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1Jvd0RlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVSb3dEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVSb3dEZWY8VD4gZXh0ZW5kcyBfTm92b0Nka1Jvd0RlZjxUPiB7XG4gIC8vIFRPRE86IGFkZCBleHBsaWNpdCBjb25zdHJ1Y3RvclxuXG4gIEBJbnB1dCgnbm92b1NpbXBsZVJvd0RlZkNvbHVtbnMnKVxuICBjb2x1bW5zO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1oZWFkZXItcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyUm93IGV4dGVuZHMgX05vdm9IZWFkZXJSb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tc2ltcGxlLWhlYWRlci1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZVJvdyBleHRlbmRzIF9Ob3ZvUm93IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyByb3dDbGFzcyA9ICdub3ZvLXNpbXBsZS1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG4iXX0=