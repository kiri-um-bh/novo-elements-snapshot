/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, Input, Renderer2, HostBinding, Component, ChangeDetectionStrategy, TemplateRef, EventEmitter, } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
/**
 * @template T
 */
var NovoDataTableCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableCell, _super);
    function NovoDataTableCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.role = 'gridcell';
        _this.subscriptions = [];
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-cell');
        return _this;
    }
    /**
     * @return {?}
     */
    NovoDataTableCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.column.cellClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.column.cellClass(this.row));
        }
        if (this.column.rightAlignCellContent) {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-data-table-cell-align-right');
        }
        this.calculateWidths();
        this.subscriptions.push(this.resized.subscribe(function (column) {
            if (column === _this.column) {
                _this.calculateWidths();
            }
        }));
    };
    /**
     * @return {?}
     */
    NovoDataTableCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTableCell.prototype.calculateWidths = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.column.width + "px");
        }
    };
    NovoDataTableCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-cell',
                    template: "\n    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: row, col: column}\"></ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoDataTableCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NovoDataTableCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        row: [{ type: Input }],
        template: [{ type: Input }],
        column: [{ type: Input }],
        resized: [{ type: Input }]
    };
    return NovoDataTableCell;
}(CdkCell));
export { NovoDataTableCell };
if (false) {
    /** @type {?} */
    NovoDataTableCell.prototype.role;
    /** @type {?} */
    NovoDataTableCell.prototype.row;
    /** @type {?} */
    NovoDataTableCell.prototype.template;
    /** @type {?} */
    NovoDataTableCell.prototype.column;
    /** @type {?} */
    NovoDataTableCell.prototype.resized;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCell.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCell.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCell.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2NlbGxzL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCx1QkFBdUIsRUFFdkIsV0FBVyxFQUNYLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBSzNEO0lBTzBDLDZDQUFPO0lBYy9DLDJCQUFZLFNBQXVCLEVBQVUsVUFBc0IsRUFBVSxRQUFtQjtRQUFoRyxZQUNFLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FJN0I7UUFMNEMsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBWnpGLFVBQUksR0FBRyxVQUFVLENBQUM7UUFVakIsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBSXpDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxpQkFBZSxTQUFTLENBQUMsb0JBQXNCLENBQUMsQ0FBQztRQUN2SCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWUsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDN0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLENBQUM7O0lBQ3RFLENBQUM7Ozs7SUFFTSxvQ0FBUTs7O0lBQWY7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4RjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1NBQzNGO1FBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQTJCO1lBQ2pELElBQUksTUFBTSxLQUFLLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRU0sdUNBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBMEI7WUFDcEQsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTywyQ0FBZTs7OztJQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxnSEFFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWGlCLFlBQVk7Z0JBWDVCLFVBQVU7Z0JBRVYsU0FBUzs7O3VCQXNCUixXQUFXLFNBQUMsV0FBVztzQkFHdkIsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLEtBQUs7MEJBRUwsS0FBSzs7SUEyQ1Isd0JBQUM7Q0FBQSxBQTVERCxDQU8wQyxPQUFPLEdBcURoRDtTQXJEWSxpQkFBaUI7OztJQUM1QixpQ0FDeUI7O0lBRXpCLGdDQUNjOztJQUNkLHFDQUNrQzs7SUFDbEMsbUNBQ21DOztJQUNuQyxvQ0FDa0Q7Ozs7O0lBQ2xELDBDQUEyQzs7Ozs7SUFFTix1Q0FBOEI7Ozs7O0lBQUUscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgSG9zdEJpbmRpbmcsXG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0NlbGwsIENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDb2x1bW4gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiByb3csIGNvbDogY29sdW1ufVwiPjwvbmctY29udGFpbmVyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNlbGw8VD4gZXh0ZW5kcyBDZGtDZWxsIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBUO1xuICBASW5wdXQoKVxuICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD47XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZXNpemVkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNvbHVtbjxUPj47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1kYXRhLXRhYmxlLWNlbGwnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4uY2VsbENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNvbHVtbi5jZWxsQ2xhc3ModGhpcy5yb3cpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2x1bW4ucmlnaHRBbGlnbkNlbGxDb250ZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1kYXRhLXRhYmxlLWNlbGwtYWxpZ24tcmlnaHQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5yZXNpemVkLnN1YnNjcmliZSgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4gPT09IHRoaXMuY29sdW1uKSB7XG4gICAgICAgICAgdGhpcy5jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVXaWR0aHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLndpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==