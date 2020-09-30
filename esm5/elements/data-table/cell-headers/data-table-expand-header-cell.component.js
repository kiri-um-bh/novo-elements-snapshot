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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFVBQVUsRUFDVixTQUFTLEVBRVQsdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUV4RDtJQU9zRCx5REFBYTtJQU9qRSx1Q0FDRSxTQUF1QixFQUN2QixVQUFzQixFQUN0QixRQUFtQixFQUNYLFNBQTJCLEVBQzNCLEdBQXNCO1FBTGhDLFlBT0Usa0JBQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQVM3QjtRQVpTLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBVnpCLFVBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQVcvQixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsK0JBQTZCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQ3JJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBc0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDcEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7UUFFbEYsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBQztZQUNwRSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN4RCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFTSxtREFBVzs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OztJQUVNLGlEQUFTOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLFFBQVEsRUFBRSw4SUFFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWHVCLFlBQVk7Z0JBTmxDLFVBQVU7Z0JBQ1YsU0FBUztnQkFRRixhQUFhO2dCQUxwQixpQkFBaUI7Ozt1QkFlaEIsV0FBVyxTQUFDLFdBQVc7O0lBaUMxQixvQ0FBQztDQUFBLEFBekNELENBT3NELGFBQWEsR0FrQ2xFO1NBbENZLDZCQUE2Qjs7O0lBQ3hDLDZDQUM2Qjs7SUFFN0IsaURBQWlDOzs7OztJQUNqQywyREFBeUM7Ozs7O0lBTXZDLGtEQUFtQzs7Ozs7SUFDbkMsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrSGVhZGVyQ2VsbCwgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImJoaS1uZXh0IGRhdGEtdGFibGUtaWNvblwiIG5vdm8tZGF0YS10YWJsZS1leHBhbmRlcj1cInRydWVcIiAoY2xpY2spPVwiZXhwYW5kQWxsKClcIiBbY2xhc3MuZXhwYW5kZWRdPVwiZXhwYW5kZWRcIj48L2k+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRXhwYW5kSGVhZGVyQ2VsbDxUPiBleHRlbmRzIENka0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZXhwYW5kU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGF0YVRhYmxlOiBOb3ZvRGF0YVRhYmxlPFQ+LFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tZXhwYW5kLWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1leHBhbmQtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwnKTtcblxuICAgIHRoaXMuZXhwYW5kU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUuZXhwYW5kU291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5kYXRhVGFibGUuYWxsQ3VycmVudFJvd3NFeHBhbmRlZCgpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXhwYW5kU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVGFibGUuZXhwYW5kUm93cyghdGhpcy5leHBhbmRlZCk7XG4gIH1cbn1cbiJdfQ==