/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cell-headers/data-table-expand-header-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTable } from '../data-table.component';
/**
 * @template T
 */
var NovoDataTableExpandHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableExpandHeaderCell, _super);
    function NovoDataTableExpandHeaderCell(columnDef, elementRef, renderer, dataTable, ref) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.dataTable = dataTable;
        _this.ref = ref;
        _this.role = 'columnheader';
        _this.expanded = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-expand-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-expand-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-expand-header-cell');
        _this.expandSubscription = _this.dataTable.state.expandSource.subscribe((/**
         * @return {?}
         */
        function () {
            _this.expanded = _this.dataTable.allCurrentRowsExpanded();
            _this.ref.markForCheck();
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    NovoDataTableExpandHeaderCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.expandSubscription) {
            this.expandSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NovoDataTableExpandHeaderCell.prototype.expandAll = /**
     * @return {?}
     */
    function () {
        this.dataTable.expandRows(!this.expanded);
    };
    NovoDataTableExpandHeaderCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-expand-header-cell',
                    template: "\n    <i class=\"bhi-next data-table-icon\" novo-data-table-expander=\"true\" (click)=\"expandAll()\" [class.expanded]=\"expanded\"></i>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoDataTableExpandHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NovoDataTable },
        { type: ChangeDetectorRef }
    ]; };
    NovoDataTableExpandHeaderCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return NovoDataTableExpandHeaderCell;
}(CdkHeaderCell));
export { NovoDataTableExpandHeaderCell };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUVULHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFeEQ7SUFPc0QseURBQWE7SUFPakUsdUNBQ0UsU0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxTQUEyQixFQUMzQixHQUFzQjtRQUxoQyxZQU9FLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FTN0I7UUFaUyxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVZ6QixVQUFJLEdBQUcsY0FBYyxDQUFDO1FBRXRCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFXL0IsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLCtCQUE2QixTQUFTLENBQUMsb0JBQXNCLENBQUMsQ0FBQztRQUNySSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXNCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQ3BHLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO1FBRWxGLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUzs7O1FBQUM7WUFDcEUsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDeEQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7O0lBRU0sbURBQVc7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFFTSxpREFBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxRQUFRLEVBQUUsOElBRVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVh1QixZQUFZO2dCQU5sQyxVQUFVO2dCQUNWLFNBQVM7Z0JBUUYsYUFBYTtnQkFMcEIsaUJBQWlCOzs7dUJBZWhCLFdBQVcsU0FBQyxXQUFXOztJQWlDMUIsb0NBQUM7Q0FBQSxBQXpDRCxDQU9zRCxhQUFhLEdBa0NsRTtTQWxDWSw2QkFBNkI7OztJQUN4Qyw2Q0FDNkI7O0lBRTdCLGlEQUFpQzs7Ozs7SUFDakMsMkRBQXlDOzs7OztJQU12QyxrREFBbUM7Ozs7O0lBQ25DLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0hlYWRlckNlbGwsIENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGktbmV4dCBkYXRhLXRhYmxlLWljb25cIiBub3ZvLWRhdGEtdGFibGUtZXhwYW5kZXI9XCJ0cnVlXCIgKGNsaWNrKT1cImV4cGFuZEFsbCgpXCIgW2NsYXNzLmV4cGFuZGVkXT1cImV4cGFuZGVkXCI+PC9pPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUV4cGFuZEhlYWRlckNlbGw8VD4gZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGV4cGFuZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRhdGFUYWJsZTogTm92b0RhdGFUYWJsZTxUPixcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWV4cGFuZC1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tZXhwYW5kLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsJyk7XG5cbiAgICB0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0YVRhYmxlLnN0YXRlLmV4cGFuZFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IHRoaXMuZGF0YVRhYmxlLmFsbEN1cnJlbnRSb3dzRXhwYW5kZWQoKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5leHBhbmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVRhYmxlLmV4cGFuZFJvd3MoIXRoaXMuZXhwYW5kZWQpO1xuICB9XG59XG4iXX0=