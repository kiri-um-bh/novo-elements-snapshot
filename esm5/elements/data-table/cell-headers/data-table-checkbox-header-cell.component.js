/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        _this.selectionSubscription = _this.dataTable.state.selectionSource.subscribe((/**
         * @return {?}
         */
        function () {
            _this.checked = _this.dataTable.allCurrentRowsSelected();
            _this.ref.markForCheck();
        }));
        _this.paginationSubscription = _this.dataTable.state.paginationSource.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.isPageSizeChange) {
                _this.checked = false;
                _this.dataTable.selectRows(false);
            }
            else {
                _this.checked = _this.dataTable.allCurrentRowsSelected();
            }
            _this.ref.markForCheck();
        }));
        _this.resetSubscription = _this.dataTable.state.resetSource.subscribe((/**
         * @return {?}
         */
        function () {
            _this.checked = false;
            _this.ref.markForCheck();
        }));
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
    /** @nocollapse */
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
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCheckboxHeaderCell.prototype.selectionSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCheckboxHeaderCell.prototype.paginationSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCheckboxHeaderCell.prototype.resetSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCheckboxHeaderCell.prototype.dataTable;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCheckboxHeaderCell.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUVULHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFeEQ7SUFhd0QsMkRBQWE7SUFTbkUseUNBQ0UsU0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxTQUEyQixFQUMzQixHQUFzQjtRQUxoQyxZQU9FLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FzQjdCO1FBekJTLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBWnpCLFVBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQWE5QixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsaUNBQStCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBd0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDdEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7UUFFcEYsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7UUFBQztZQUMxRSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN2RCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQW9DO1lBQ2pILElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDeEQ7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7UUFBQztZQUNsRSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFTSxxREFBVzs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVNLGlEQUFPOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQW5FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsUUFBUSxFQUFFLG1SQVFUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFqQnVCLFlBQVk7Z0JBTmxDLFVBQVU7Z0JBQ1YsU0FBUztnQkFRRixhQUFhO2dCQUxwQixpQkFBaUI7Ozt1QkFxQmhCLFdBQVcsU0FBQyxXQUFXOztJQXNEMUIsc0NBQUM7Q0FBQSxBQXBFRCxDQWF3RCxhQUFhLEdBdURwRTtTQXZEWSwrQkFBK0I7OztJQUMxQywrQ0FDNkI7O0lBRTdCLGtEQUFnQzs7Ozs7SUFDaEMsZ0VBQTRDOzs7OztJQUM1QyxpRUFBNkM7Ozs7O0lBQzdDLDREQUF3Qzs7Ozs7SUFNdEMsb0RBQW1DOzs7OztJQUNuQyw4Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT3B0aW9uYWwsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtIZWFkZXJDZWxsLCBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5vdm9EYXRhVGFibGUgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtY2hlY2tib3hcIiAoY2xpY2spPVwib25DbGljaygpXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiPlxuICAgICAgPGxhYmVsPlxuICAgICAgICA8aSBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFjaGVja2VkXCJcbiAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWZpbGxlZF09XCJjaGVja2VkXCI+PC9pPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVDaGVja2JveEhlYWRlckNlbGw8VD4gZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcGFnaW5hdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlc2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGF0YVRhYmxlOiBOb3ZvRGF0YVRhYmxlPFQ+LFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY2hlY2tib3gtY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUuc2VsZWN0aW9uU291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRhdGFUYWJsZS5hbGxDdXJyZW50Um93c1NlbGVjdGVkKCk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnBhZ2luYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFUYWJsZS5zdGF0ZS5wYWdpbmF0aW9uU291cmNlLnN1YnNjcmliZSgoZXZlbnQ6IHsgaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuaXNQYWdlU2l6ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhVGFibGUuc2VsZWN0Um93cyhmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRhdGFUYWJsZS5hbGxDdXJyZW50Um93c1NlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUucmVzZXRTb3VyY2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVzZXRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5zZWxlY3RSb3dzKCF0aGlzLmNoZWNrZWQpO1xuICB9XG59XG4iXX0=