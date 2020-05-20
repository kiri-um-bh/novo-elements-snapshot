/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cells/data-table-expand-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { NovoDataTable } from '../data-table.component';
/**
 * @template T
 */
var NovoDataTableExpandCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableExpandCell, _super);
    function NovoDataTableExpandCell(columnDef, elementRef, renderer, dataTable, ref) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.columnDef = columnDef;
        _this.dataTable = dataTable;
        _this.ref = ref;
        _this.role = 'gridcell';
        _this.expanded = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-expand-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-expand-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-expand-cell');
        _this.expandSubscription = _this.dataTable.state.expandSource.subscribe((/**
         * @return {?}
         */
        function () {
            _this.expanded = _this.dataTable.isExpanded(_this.row);
            _this.ref.markForCheck();
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    NovoDataTableExpandCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.expanded = this.dataTable.isExpanded(this.row);
    };
    /**
     * @return {?}
     */
    NovoDataTableExpandCell.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.dataTable.expandRow(this.row);
    };
    /**
     * @return {?}
     */
    NovoDataTableExpandCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.expandSubscription) {
            this.expandSubscription.unsubscribe();
        }
    };
    NovoDataTableExpandCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-expand-cell',
                    template: "\n    <i class=\"bhi-next data-table-icon\" novo-data-table-expander=\"true\" [class.expanded]=\"expanded\"></i>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoDataTableExpandCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NovoDataTable },
        { type: ChangeDetectorRef }
    ]; };
    NovoDataTableExpandCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        row: [{ type: Input }]
    };
    return NovoDataTableExpandCell;
}(CdkCell));
export { NovoDataTableExpandCell };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxscy9kYXRhLXRhYmxlLWV4cGFuZC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHeEQ7SUFPZ0QsbURBQU87SUFXckQsaUNBQ1MsU0FBdUIsRUFDOUIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWixTQUEyQixFQUMxQixHQUFzQjtRQUxoQyxZQU9FLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FTN0I7UUFmUSxlQUFTLEdBQVQsU0FBUyxDQUFjO1FBR3ZCLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzFCLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBZHpCLFVBQUksR0FBRyxVQUFVLENBQUM7UUFLbEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQVkvQixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsd0JBQXNCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQzlILFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBc0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDcEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFFM0UsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBQztZQUNwRSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFTSwwQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRU0seUNBQU87OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFTSw2Q0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUsc0hBRVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVppQixZQUFZO2dCQUNrQyxVQUFVO2dCQUF5QyxTQUFTO2dCQUVuSCxhQUFhO2dCQUZZLGlCQUFpQjs7O3VCQWFoRCxXQUFXLFNBQUMsV0FBVztzQkFHdkIsS0FBSzs7SUFzQ1IsOEJBQUM7Q0FBQSxBQWpERCxDQU9nRCxPQUFPLEdBMEN0RDtTQTFDWSx1QkFBdUI7OztJQUNsQyx1Q0FDeUI7O0lBRXpCLHNDQUNjOztJQUVkLDJDQUFpQzs7Ozs7SUFFakMscURBQXlDOztJQUd2Qyw0Q0FBOEI7O0lBRzlCLDRDQUFrQzs7Ozs7SUFDbEMsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ2VsbCwgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiYmhpLW5leHQgZGF0YS10YWJsZS1pY29uXCIgbm92by1kYXRhLXRhYmxlLWV4cGFuZGVyPVwidHJ1ZVwiIFtjbGFzcy5leHBhbmRlZF09XCJleHBhbmRlZFwiPjwvaT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVFeHBhbmRDZWxsPFQ+IGV4dGVuZHMgQ2RrQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogVDtcblxuICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGV4cGFuZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGRhdGFUYWJsZTogTm92b0RhdGFUYWJsZTxUPixcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWV4cGFuZC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1leHBhbmQtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tZGF0YS10YWJsZS1leHBhbmQtY2VsbCcpO1xuXG4gICAgdGhpcy5leHBhbmRTdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFUYWJsZS5zdGF0ZS5leHBhbmRTb3VyY2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSB0aGlzLmRhdGFUYWJsZS5pc0V4cGFuZGVkKHRoaXMucm93KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWQgPSB0aGlzLmRhdGFUYWJsZS5pc0V4cGFuZGVkKHRoaXMucm93KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVRhYmxlLmV4cGFuZFJvdyh0aGlzLnJvdyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXhwYW5kU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19