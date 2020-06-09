import { ChangeDetectionStrategy, Component, Directive, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CdkRow, CDK_ROW_TEMPLATE, CdkRowDef, CdkHeaderRowDef } from '@angular/cdk/table';
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
const ɵNovoSimpleHeaderRowDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleHeaderRowDef);
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
const ɵNovoSimpleRowDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleRowDef);
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
const ɵNovoSimpleHeaderRow_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleHeaderRow);
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
const ɵNovoSimpleRow_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleRow);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUV4RyxxRUFBcUU7QUFDckUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDO0FBQ2pELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUM7QUFDeEMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQztBQUMzQyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBTS9CLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxpQkFBaUI7OzJIQUFoRCxzQkFBc0I7MkRBQXRCLHNCQUFzQixnSkFGdEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLENBQUM7cUVBRW5FLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLENBQUM7YUFDL0U7O2tCQUlFLEtBQUs7bUJBQUMsd0JBQXdCOztBQVFqQyxNQUFNLE9BQU8sZ0JBQW9CLFNBQVEsY0FBaUI7O3lHQUE3QyxnQkFBZ0I7cURBQWhCLGdCQUFnQiwySUFGaEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7K0RBRXZELGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7YUFDbkU7O2tCQUlFLEtBQUs7bUJBQUMseUJBQXlCOztBQVNsQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYztJQUx2RDs7UUFPUyxhQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFFcEMsU0FBSSxHQUFHLEtBQUssQ0FBQztLQUNyQjs7a0hBTFksbUJBQW1CO3dEQUFuQixtQkFBbUI7Ozs7OztrRUFBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxXQUFXO21CQUFDLE9BQU87O2tCQUVuQixXQUFXO21CQUFDLFdBQVc7O0FBUzFCLE1BQU0sT0FBTyxhQUFjLFNBQVEsUUFBUTtJQUwzQzs7UUFPUyxhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFFN0IsU0FBSSxHQUFHLEtBQUssQ0FBQztLQUNyQjs7Z0dBTFksYUFBYTtrREFBYixhQUFhOzs7Ozs7NERBQWIsYUFBYTtrREFBYixhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsV0FBVzttQkFBQyxPQUFPOztrQkFFbkIsV0FBVzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0hlYWRlclJvdywgQ2RrUm93LCBDREtfUk9XX1RFTVBMQVRFLCBDZGtSb3dEZWYsIENka0hlYWRlclJvd0RlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbi8qKiBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzg0OSAqL1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyUm93RGVmID0gQ2RrSGVhZGVyUm93RGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ2RrUm93RGVmID0gQ2RrUm93RGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyUm93ID0gQ2RrSGVhZGVyUm93O1xuZXhwb3J0IGNvbnN0IF9Ob3ZvUm93ID0gQ2RrUm93O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZUhlYWRlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0hlYWRlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYgZXh0ZW5kcyBfTm92b0hlYWRlclJvd0RlZiB7XG4gIC8vIFRPRE86IGFkZCBleHBsaWNpdCBjb25zdHJ1Y3RvclxuXG4gIEBJbnB1dCgnbm92b1NpbXBsZUhlYWRlclJvd0RlZicpXG4gIGNvbHVtbnM7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlUm93RGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrUm93RGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZVJvd0RlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZVJvd0RlZjxUPiBleHRlbmRzIF9Ob3ZvQ2RrUm93RGVmPFQ+IHtcbiAgLy8gVE9ETzogYWRkIGV4cGxpY2l0IGNvbnN0cnVjdG9yXG5cbiAgQElucHV0KCdub3ZvU2ltcGxlUm93RGVmQ29sdW1ucycpXG4gIGNvbHVtbnM7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWhlYWRlci1yb3cnLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJSb3cgZXh0ZW5kcyBfTm92b0hlYWRlclJvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1zaW1wbGUtaGVhZGVyLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93Jztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlUm93IGV4dGVuZHMgX05vdm9Sb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tc2ltcGxlLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93Jztcbn1cbiJdfQ==