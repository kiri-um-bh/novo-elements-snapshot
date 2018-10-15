/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTable } from '../data-table.component';
/**
 * @template T
 */
var NovoDataTableCheckboxHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableCheckboxHeaderCell, _super);
    function NovoDataTableCheckboxHeaderCell(columnDef, elementRef, renderer, dataTable, ref) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.dataTable = dataTable;
        _this.ref = ref;
        _this.role = 'columnheader';
        _this.checked = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-checkbox-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-checkbox-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-checkbox-header-cell');
        _this.selectionSubscription = _this.dataTable.state.selectionSource.subscribe(function () {
            _this.checked = _this.dataTable.allCurrentRowsSelected();
            _this.ref.markForCheck();
        });
        _this.paginationSubscription = _this.dataTable.state.paginationSource.subscribe(function (event) {
            if (event.isPageSizeChange) {
                _this.checked = false;
                _this.dataTable.selectRows(false);
            }
            else {
                _this.checked = _this.dataTable.allCurrentRowsSelected();
            }
            _this.ref.markForCheck();
        });
        _this.resetSubscription = _this.dataTable.state.resetSource.subscribe(function () {
            _this.checked = false;
            _this.ref.markForCheck();
        });
        return _this;
    }
    /**
     * @return {?}
     */
    NovoDataTableCheckboxHeaderCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.selectionSubscription) {
            this.selectionSubscription.unsubscribe();
        }
        if (this.paginationSubscription) {
            this.paginationSubscription.unsubscribe();
        }
        if (this.resetSubscription) {
            this.resetSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NovoDataTableCheckboxHeaderCell.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.dataTable.selectRows(!this.checked);
    };
    NovoDataTableCheckboxHeaderCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-checkbox-header-cell',
                    template: "\n    <div class=\"data-table-checkbox\" (click)=\"onClick()\">\n      <input type=\"checkbox\" [checked]=\"checked\">\n      <label>\n        <i [class.bhi-checkbox-empty]=\"!checked\"\n          [class.bhi-checkbox-filled]=\"checked\"></i>\n      </label>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoDataTableCheckboxHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NovoDataTable },
        { type: ChangeDetectorRef }
    ]; };
    NovoDataTableCheckboxHeaderCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return NovoDataTableCheckboxHeaderCell;
}(CdkHeaderCell));
export { NovoDataTableCheckboxHeaderCell };
if (false) {
    /** @type {?} */
    NovoDataTableCheckboxHeaderCell.prototype.role;
    /** @type {?} */
    NovoDataTableCheckboxHeaderCell.prototype.checked;
    /** @type {?} */
    NovoDataTableCheckboxHeaderCell.prototype.selectionSubscription;
    /** @type {?} */
    NovoDataTableCheckboxHeaderCell.prototype.paginationSubscription;
    /** @type {?} */
    NovoDataTableCheckboxHeaderCell.prototype.resetSubscription;
    /** @type {?} */
    NovoDataTableCheckboxHeaderCell.prototype.dataTable;
    /** @type {?} */
    NovoDataTableCheckboxHeaderCell.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUVULHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFeEQ7SUFhd0QsMkRBQWE7SUFTbkUseUNBQ0UsU0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxTQUEyQixFQUMzQixHQUFzQjtRQUxoQyxZQU9FLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FzQjdCO1FBekJTLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBWnpCLFVBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQWE5QixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsaUNBQStCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBd0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDdEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7UUFFcEYsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDMUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDdkQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFvQztZQUNqSCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3hEO1lBQ0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVNLHFEQUFXOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFDRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7O0lBRU0saURBQU87OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxRQUFRLEVBQUUsbVJBUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7Z0JBakJ1QixZQUFZO2dCQU5sQyxVQUFVO2dCQUNWLFNBQVM7Z0JBUUYsYUFBYTtnQkFMcEIsaUJBQWlCOzs7dUJBcUJoQixXQUFXLFNBQUMsV0FBVzs7SUFzRDFCLHNDQUFDO0NBQUEsQUFwRUQsQ0Fhd0QsYUFBYSxHQXVEcEU7U0F2RFksK0JBQStCOzs7SUFDMUMsK0NBQzZCOztJQUU3QixrREFBZ0M7O0lBQ2hDLGdFQUE0Qzs7SUFDNUMsaUVBQTZDOztJQUM3Qyw0REFBd0M7O0lBTXRDLG9EQUFtQzs7SUFDbkMsOENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrSGVhZGVyQ2VsbCwgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWNoZWNrYm94XCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImNoZWNrZWRcIj5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGkgW2NsYXNzLmJoaS1jaGVja2JveC1lbXB0eV09XCIhY2hlY2tlZFwiXG4gICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1maWxsZWRdPVwiY2hlY2tlZFwiPjwvaT5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2hlY2tib3hIZWFkZXJDZWxsPFQ+IGV4dGVuZHMgQ2RrSGVhZGVyQ2VsbCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHBhZ2luYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRhdGFUYWJsZTogTm92b0RhdGFUYWJsZTxUPixcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsJyk7XG5cbiAgICB0aGlzLnNlbGVjdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0YVRhYmxlLnN0YXRlLnNlbGVjdGlvblNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5kYXRhVGFibGUuYWxsQ3VycmVudFJvd3NTZWxlY3RlZCgpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUucGFnaW5hdGlvblNvdXJjZS5zdWJzY3JpYmUoKGV2ZW50OiB7IGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmlzUGFnZVNpemVDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0YVRhYmxlLnNlbGVjdFJvd3MoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5kYXRhVGFibGUuYWxsQ3VycmVudFJvd3NTZWxlY3RlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0YVRhYmxlLnN0YXRlLnJlc2V0U291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3Rpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2V0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVGFibGUuc2VsZWN0Um93cyghdGhpcy5jaGVja2VkKTtcbiAgfVxufVxuIl19