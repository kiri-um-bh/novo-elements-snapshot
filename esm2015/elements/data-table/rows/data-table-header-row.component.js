/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
export class NovoDataTableHeaderRow extends CdkHeaderRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-data-table-header-row';
        this.fixedHeader = false;
        this.role = 'row';
    }
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
if (false) {
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.rowClass;
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.fixedHeader;
    /** @type {?} */
    NovoDataTableHeaderRow.prototype.role;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3Jvd3MvZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9wRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsWUFBWTtJQUx4RDs7UUFPUyxhQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFHeEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7WUFiQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozt1QkFFRSxXQUFXLFNBQUMsT0FBTzswQkFFbkIsV0FBVyxTQUFDLG9CQUFvQixjQUNoQyxLQUFLO21CQUVMLFdBQVcsU0FBQyxXQUFXOzs7O0lBTHhCLDBDQUMrQzs7SUFDL0MsNkNBRW9DOztJQUNwQyxzQ0FDb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0hlYWRlclJvdywgQ0RLX1JPV19URU1QTEFURSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93JyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlSGVhZGVyUm93IGV4dGVuZHMgQ2RrSGVhZGVyUm93IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyByb3dDbGFzcyA9ICdub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvdyc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQtaGVhZGVyJylcbiAgQElucHV0KClcbiAgcHVibGljIGZpeGVkSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAncm93Jztcbn1cbiJdfQ==