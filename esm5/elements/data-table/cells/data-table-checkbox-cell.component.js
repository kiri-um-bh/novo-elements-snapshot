/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, Input, Renderer2, HostBinding, Component, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { NovoDataTable } from '../data-table.component';
/**
 * @template T
 */
var NovoDataTableCheckboxCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableCheckboxCell, _super);
    function NovoDataTableCheckboxCell(columnDef, elementRef, renderer, dataTable, ref) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.columnDef = columnDef;
        _this.dataTable = dataTable;
        _this.ref = ref;
        _this.role = 'gridcell';
        _this.checked = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-checkbox-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-checkbox-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-checkbox-cell');
        _this.selectionSubscription = _this.dataTable.state.selectionSource.subscribe(function () {
            _this.checked = _this.dataTable.isSelected(_this.row);
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
    NovoDataTableCheckboxCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.checked = this.dataTable.isSelected(this.row);
    };
    /**
     * @return {?}
     */
    NovoDataTableCheckboxCell.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.dataTable.selectRow(this.row);
    };
    /**
     * @return {?}
     */
    NovoDataTableCheckboxCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.selectionSubscription) {
            this.selectionSubscription.unsubscribe();
        }
        if (this.resetSubscription) {
            this.resetSubscription.unsubscribe();
        }
    };
    NovoDataTableCheckboxCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-checkbox-cell',
                    template: "\n    <div class=\"data-table-checkbox\" (click)=\"onClick()\">\n      <input type=\"checkbox\" [checked]=\"checked\">\n      <label>\n        <i [class.bhi-checkbox-empty]=\"!checked\"\n          [class.bhi-checkbox-filled]=\"checked\"></i>\n      </label>\n    </div>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoDataTableCheckboxCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NovoDataTable },
        { type: ChangeDetectorRef }
    ]; };
    NovoDataTableCheckboxCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        row: [{ type: Input }]
    };
    return NovoDataTableCheckboxCell;
}(CdkCell));
export { NovoDataTableCheckboxCell };
if (false) {
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.role;
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.row;
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.checked;
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.selectionSubscription;
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.resetSubscription;
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.columnDef;
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.dataTable;
    /** @type {?} */
    NovoDataTableCheckboxCell.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jaGVja2JveC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2NlbGxzL2RhdGEtdGFibGUtY2hlY2tib3gtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFHVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBR3hEO0lBYWtELHFEQUFPO0lBWXZELG1DQUNTLFNBQXVCLEVBQzlCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1osU0FBMkIsRUFDMUIsR0FBc0I7UUFMaEMsWUFPRSxrQkFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBYTdCO1FBbkJRLGVBQVMsR0FBVCxTQUFTLENBQWM7UUFHdkIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFmekIsVUFBSSxHQUFHLFVBQVUsQ0FBQztRQUtsQixhQUFPLEdBQVksS0FBSyxDQUFDO1FBYTlCLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSwwQkFBd0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDaEksUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDBCQUF3QixTQUFTLENBQUMsb0JBQXNCLENBQUMsQ0FBQztRQUN0RyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUU3RSxLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUMxRSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDbEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7O0lBRU0sNENBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVNLDJDQUFPOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sK0NBQVc7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLHFSQVFQO29CQUNILGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7O2dCQWxCaUIsWUFBWTtnQkFWNUIsVUFBVTtnQkFFVixTQUFTO2dCQVdGLGFBQWE7Z0JBTnBCLGlCQUFpQjs7O3VCQXVCaEIsV0FBVyxTQUFDLFdBQVc7c0JBR3ZCLEtBQUs7O0lBOENSLGdDQUFDO0NBQUEsQUEvREQsQ0Fha0QsT0FBTyxHQWtEeEQ7U0FsRFkseUJBQXlCOzs7SUFDcEMseUNBQ3lCOztJQUV6Qix3Q0FDYzs7SUFFZCw0Q0FBZ0M7O0lBRWhDLDBEQUE0Qzs7SUFDNUMsc0RBQXdDOztJQUd0Qyw4Q0FBOEI7O0lBRzlCLDhDQUFrQzs7SUFDbEMsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgSG9zdEJpbmRpbmcsXG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtDZWxsLCBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5vdm9EYXRhVGFibGUgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1jaGVja2JveFwiIChjbGljayk9XCJvbkNsaWNrKClcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJjaGVja2VkXCI+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxpIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIWNoZWNrZWRcIlxuICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZmlsbGVkXT1cImNoZWNrZWRcIj48L2k+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2hlY2tib3hDZWxsPFQ+IGV4dGVuZHMgQ2RrQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogVDtcblxuICBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc2VsZWN0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVzZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBkYXRhVGFibGU6IE5vdm9EYXRhVGFibGU8VD4sXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUuc2VsZWN0aW9uU291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRhdGFUYWJsZS5pc1NlbGVjdGVkKHRoaXMucm93KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFUYWJsZS5zdGF0ZS5yZXNldFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRhdGFUYWJsZS5pc1NlbGVjdGVkKHRoaXMucm93KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVRhYmxlLnNlbGVjdFJvdyh0aGlzLnJvdyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19