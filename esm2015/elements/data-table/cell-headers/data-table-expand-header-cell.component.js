/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cell-headers/data-table-expand-header-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkColumnDef, CdkHeaderCell } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { NovoDataTable } from '../data-table.component';
/**
 * @template T
 */
export class NovoDataTableExpandHeaderCell extends CdkHeaderCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} dataTable
     * @param {?} ref
     */
    constructor(columnDef, elementRef, renderer, dataTable, ref) {
        super(columnDef, elementRef);
        this.dataTable = dataTable;
        this.ref = ref;
        this.role = 'columnheader';
        this.expanded = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-expand-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-expand-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-expand-header-cell');
        this.expandSubscription = this.dataTable.state.expandSource.subscribe((/**
         * @return {?}
         */
        () => {
            this.expanded = this.dataTable.allCurrentRowsExpanded();
            this.ref.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.expandSubscription) {
            this.expandSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    expandAll() {
        this.dataTable.expandRows(!this.expanded);
    }
}
NovoDataTableExpandHeaderCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-data-table-expand-header-cell',
                template: `
    <i class="bhi-next data-table-icon" novo-data-table-expander="true" (click)="expandAll()" [class.expanded]="expanded"></i>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoDataTableExpandHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NovoDataTable },
    { type: ChangeDetectorRef }
];
NovoDataTableExpandHeaderCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /** @type {?} */
    NovoDataTableExpandHeaderCell.prototype.role;
    /** @type {?} */
    NovoDataTableExpandHeaderCell.prototype.expanded;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandHeaderCell.prototype.expandSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandHeaderCell.prototype.dataTable;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandHeaderCell.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFVeEQsTUFBTSxPQUFPLDZCQUFpQyxTQUFRLGFBQWE7Ozs7Ozs7O0lBT2pFLFlBQ0UsU0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxTQUEyQixFQUMzQixHQUFzQjtRQUU5QixLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSHJCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVnpCLFNBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVcvQixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsNkJBQTZCLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDckksUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNCQUFzQixTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7O0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsUUFBUSxFQUFFOztHQUVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWlEsWUFBWTtZQUMyQyxVQUFVO1lBQTBCLFNBQVM7WUFFcEcsYUFBYTtZQUZZLGlCQUFpQjs7O21CQWFoRCxXQUFXLFNBQUMsV0FBVzs7OztJQUF4Qiw2Q0FDNkI7O0lBRTdCLGlEQUFpQzs7Ozs7SUFDakMsMkRBQXlDOzs7OztJQU12QyxrREFBbUM7Ozs7O0lBQ25DLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NvbHVtbkRlZiwgQ2RrSGVhZGVyQ2VsbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGUgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGktbmV4dCBkYXRhLXRhYmxlLWljb25cIiBub3ZvLWRhdGEtdGFibGUtZXhwYW5kZXI9XCJ0cnVlXCIgKGNsaWNrKT1cImV4cGFuZEFsbCgpXCIgW2NsYXNzLmV4cGFuZGVkXT1cImV4cGFuZGVkXCI+PC9pPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUV4cGFuZEhlYWRlckNlbGw8VD4gZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGV4cGFuZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRhdGFUYWJsZTogTm92b0RhdGFUYWJsZTxUPixcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWV4cGFuZC1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tZXhwYW5kLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsJyk7XG5cbiAgICB0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0YVRhYmxlLnN0YXRlLmV4cGFuZFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IHRoaXMuZGF0YVRhYmxlLmFsbEN1cnJlbnRSb3dzRXhwYW5kZWQoKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5leHBhbmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVRhYmxlLmV4cGFuZFJvd3MoIXRoaXMuZXhwYW5kZWQpO1xuICB9XG59XG4iXX0=