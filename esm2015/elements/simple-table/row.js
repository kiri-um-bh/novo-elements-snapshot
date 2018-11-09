/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUd4RyxNQUFNLE9BQU8saUJBQWlCLEdBQUcsZUFBZTs7QUFDaEQsTUFBTSxPQUFPLGNBQWMsR0FBRyxTQUFTOztBQUN2QyxNQUFNLE9BQU8sY0FBYyxHQUFHLFlBQVk7O0FBQzFDLE1BQU0sT0FBTyxRQUFRLEdBQUcsTUFBTTtBQU05QixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQWlCOzs7WUFKNUQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQzthQUMvRTs7O3NCQUVFLEtBQUssU0FBQyx3QkFBd0I7Ozs7SUFBL0IseUNBQ1E7Ozs7O0FBT1YsTUFBTSxPQUFPLGdCQUFvQixTQUFRLGNBQWlCOzs7WUFKekQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzthQUNuRTs7O3NCQUVFLEtBQUssU0FBQyx5QkFBeUI7Ozs7SUFBaEMsbUNBQ1E7O0FBUVYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGNBQWM7SUFMdkQ7O1FBT1MsYUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBRXBDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7dUJBRUUsV0FBVyxTQUFDLE9BQU87bUJBRW5CLFdBQVcsU0FBQyxXQUFXOzs7O0lBRnhCLHVDQUMyQzs7SUFDM0MsbUNBQ29COztBQVF0QixNQUFNLE9BQU8sYUFBYyxTQUFRLFFBQVE7SUFMM0M7O1FBT1MsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBRTdCLFNBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7dUJBRUUsV0FBVyxTQUFDLE9BQU87bUJBRW5CLFdBQVcsU0FBQyxXQUFXOzs7O0lBRnhCLGlDQUNvQzs7SUFDcEMsNkJBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0hlYWRlclJvdywgQ2RrUm93LCBDREtfUk9XX1RFTVBMQVRFLCBDZGtSb3dEZWYsIENka0hlYWRlclJvd0RlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbi8qKiBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzg0OSAqL1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyUm93RGVmID0gQ2RrSGVhZGVyUm93RGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ2RrUm93RGVmID0gQ2RrUm93RGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyUm93ID0gQ2RrSGVhZGVyUm93O1xuZXhwb3J0IGNvbnN0IF9Ob3ZvUm93ID0gQ2RrUm93O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZUhlYWRlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0hlYWRlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJSb3dEZWYgZXh0ZW5kcyBfTm92b0hlYWRlclJvd0RlZiB7XG4gIEBJbnB1dCgnbm92b1NpbXBsZUhlYWRlclJvd0RlZicpXG4gIGNvbHVtbnM7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlUm93RGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrUm93RGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZVJvd0RlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZVJvd0RlZjxUPiBleHRlbmRzIF9Ob3ZvQ2RrUm93RGVmPFQ+IHtcbiAgQElucHV0KCdub3ZvU2ltcGxlUm93RGVmQ29sdW1ucycpXG4gIGNvbHVtbnM7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWhlYWRlci1yb3cnLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJSb3cgZXh0ZW5kcyBfTm92b0hlYWRlclJvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1zaW1wbGUtaGVhZGVyLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93Jztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlUm93IGV4dGVuZHMgX05vdm9Sb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tc2ltcGxlLXJvdyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93Jztcbn1cbiJdfQ==