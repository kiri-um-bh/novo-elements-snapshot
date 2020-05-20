/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cells/data-table-expand-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { NovoDataTable } from '../data-table.component';
/**
 * @template T
 */
export class NovoDataTableExpandCell extends CdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} dataTable
     * @param {?} ref
     */
    constructor(columnDef, elementRef, renderer, dataTable, ref) {
        super(columnDef, elementRef);
        this.columnDef = columnDef;
        this.dataTable = dataTable;
        this.ref = ref;
        this.role = 'gridcell';
        this.expanded = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-expand-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-expand-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-expand-cell');
        this.expandSubscription = this.dataTable.state.expandSource.subscribe((/**
         * @return {?}
         */
        () => {
            this.expanded = this.dataTable.isExpanded(this.row);
            this.ref.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.expanded = this.dataTable.isExpanded(this.row);
    }
    /**
     * @return {?}
     */
    onClick() {
        this.dataTable.expandRow(this.row);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.expandSubscription) {
            this.expandSubscription.unsubscribe();
        }
    }
}
NovoDataTableExpandCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-data-table-expand-cell',
                template: `
    <i class="bhi-next data-table-icon" novo-data-table-expander="true" [class.expanded]="expanded"></i>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoDataTableExpandCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NovoDataTable },
    { type: ChangeDetectorRef }
];
NovoDataTableExpandCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    row: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoDataTableExpandCell.prototype.role;
    /** @type {?} */
    NovoDataTableExpandCell.prototype.row;
    /** @type {?} */
    NovoDataTableExpandCell.prototype.expanded;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandCell.prototype.expandSubscription;
    /** @type {?} */
    NovoDataTableExpandCell.prototype.columnDef;
    /** @type {?} */
    NovoDataTableExpandCell.prototype.dataTable;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandCell.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxscy9kYXRhLXRhYmxlLWV4cGFuZC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQVV4RCxNQUFNLE9BQU8sdUJBQTJCLFNBQVEsT0FBTzs7Ozs7Ozs7SUFXckQsWUFDUyxTQUF1QixFQUM5QixVQUFzQixFQUN0QixRQUFtQixFQUNaLFNBQTJCLEVBQzFCLEdBQXNCO1FBRTlCLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFOdEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUd2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWR6QixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBS2xCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFZL0IsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQzlILFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUNwRyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVppQixZQUFZO1lBQ2tDLFVBQVU7WUFBeUMsU0FBUztZQUVuSCxhQUFhO1lBRlksaUJBQWlCOzs7bUJBYWhELFdBQVcsU0FBQyxXQUFXO2tCQUd2QixLQUFLOzs7O0lBSE4sdUNBQ3lCOztJQUV6QixzQ0FDYzs7SUFFZCwyQ0FBaUM7Ozs7O0lBRWpDLHFEQUF5Qzs7SUFHdkMsNENBQThCOztJQUc5Qiw0Q0FBa0M7Ozs7O0lBQ2xDLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NlbGwsIENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGUgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWV4cGFuZC1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImJoaS1uZXh0IGRhdGEtdGFibGUtaWNvblwiIG5vdm8tZGF0YS10YWJsZS1leHBhbmRlcj1cInRydWVcIiBbY2xhc3MuZXhwYW5kZWRdPVwiZXhwYW5kZWRcIj48L2k+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRXhwYW5kQ2VsbDxUPiBleHRlbmRzIENka0NlbGwgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IFQ7XG5cbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBleHBhbmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBkYXRhVGFibGU6IE5vdm9EYXRhVGFibGU8VD4sXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1leHBhbmQtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tZXhwYW5kLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWNlbGwnKTtcblxuICAgIHRoaXMuZXhwYW5kU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUuZXhwYW5kU291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5kYXRhVGFibGUuaXNFeHBhbmRlZCh0aGlzLnJvdyk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5kYXRhVGFibGUuaXNFeHBhbmRlZCh0aGlzLnJvdyk7XG4gIH1cblxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5leHBhbmRSb3codGhpcy5yb3cpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5leHBhbmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==