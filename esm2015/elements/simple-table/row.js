/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Directive, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CdkRow, CDK_ROW_TEMPLATE, CdkRowDef, CdkHeaderRowDef } from '@angular/cdk/table';
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 * @type {?}
 */
export const _NovoHeaderRowDef = CdkHeaderRowDef;
/** @type {?} */
export const _NovoCdkRowDef = CdkRowDef;
/** @type {?} */
export const _NovoHeaderRow = CdkHeaderRow;
/** @type {?} */
export const _NovoRow = CdkRow;
export class NovoSimpleHeaderRowDef extends _NovoHeaderRowDef {
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
if (false) {
    /** @type {?} */
    NovoSimpleHeaderRowDef.prototype.columns;
}
/**
 * @template T
 */
export class NovoSimpleRowDef extends _NovoCdkRowDef {
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
if (false) {
    /** @type {?} */
    NovoSimpleRowDef.prototype.columns;
}
export class NovoSimpleHeaderRow extends _NovoHeaderRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-simple-header-row';
        this.role = 'row';
    }
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
if (false) {
    /** @type {?} */
    NovoSimpleHeaderRow.prototype.rowClass;
    /** @type {?} */
    NovoSimpleHeaderRow.prototype.role;
}
export class NovoSimpleRow extends _NovoRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-simple-row';
        this.role = 'row';
    }
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
if (false) {
    /** @type {?} */
    NovoSimpleRow.prototype.rowClass;
    /** @type {?} */
    NovoSimpleRow.prototype.role;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFHeEcsTUFBTSxPQUFPLGlCQUFpQixHQUFHLGVBQWU7O0FBQ2hELE1BQU0sT0FBTyxjQUFjLEdBQUcsU0FBUzs7QUFDdkMsTUFBTSxPQUFPLGNBQWMsR0FBRyxZQUFZOztBQUMxQyxNQUFNLE9BQU8sUUFBUSxHQUFHLE1BQU07QUFNOUIsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjs7O1lBSjVELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLENBQUM7YUFDL0U7OztzQkFFRSxLQUFLLFNBQUMsd0JBQXdCOzs7O0lBQS9CLHlDQUNROzs7OztBQU9WLE1BQU0sT0FBTyxnQkFBb0IsU0FBUSxjQUFpQjs7O1lBSnpELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7YUFDbkU7OztzQkFFRSxLQUFLLFNBQUMseUJBQXlCOzs7O0lBQWhDLG1DQUNROztBQVFWLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxjQUFjO0lBTHZEOztRQU9TLGFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUVwQyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O3VCQUVFLFdBQVcsU0FBQyxPQUFPO21CQUVuQixXQUFXLFNBQUMsV0FBVzs7OztJQUZ4Qix1Q0FDMkM7O0lBQzNDLG1DQUNvQjs7QUFRdEIsTUFBTSxPQUFPLGFBQWMsU0FBUSxRQUFRO0lBTDNDOztRQU9TLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUU3QixTQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O3VCQUVFLFdBQVcsU0FBQyxPQUFPO21CQUVuQixXQUFXLFNBQUMsV0FBVzs7OztJQUZ4QixpQ0FDb0M7O0lBQ3BDLDZCQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtIZWFkZXJSb3csIENka1JvdywgQ0RLX1JPV19URU1QTEFURSwgQ2RrUm93RGVmLCBDZGtIZWFkZXJSb3dEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG4vKiogV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc4NDkgKi9cbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlclJvd0RlZiA9IENka0hlYWRlclJvd0RlZjtcbmV4cG9ydCBjb25zdCBfTm92b0Nka1Jvd0RlZiA9IENka1Jvd0RlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlclJvdyA9IENka0hlYWRlclJvdztcbmV4cG9ydCBjb25zdCBfTm92b1JvdyA9IENka1JvdztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJSb3dEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtIZWFkZXJSb3dEZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyUm93RGVmIGV4dGVuZHMgX05vdm9IZWFkZXJSb3dEZWYge1xuICBASW5wdXQoJ25vdm9TaW1wbGVIZWFkZXJSb3dEZWYnKVxuICBjb2x1bW5zO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZVJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1Jvd0RlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVSb3dEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVSb3dEZWY8VD4gZXh0ZW5kcyBfTm92b0Nka1Jvd0RlZjxUPiB7XG4gIEBJbnB1dCgnbm92b1NpbXBsZVJvd0RlZkNvbHVtbnMnKVxuICBjb2x1bW5zO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1oZWFkZXItcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyUm93IGV4dGVuZHMgX05vdm9IZWFkZXJSb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tc2ltcGxlLWhlYWRlci1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZVJvdyBleHRlbmRzIF9Ob3ZvUm93IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyByb3dDbGFzcyA9ICdub3ZvLXNpbXBsZS1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG4iXX0=