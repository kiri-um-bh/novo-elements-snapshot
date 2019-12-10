/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cell-headers/data-table-header-cell.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
/**
 * @template T
 */
var NovoDataTableHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableHeaderCell, _super);
    function NovoDataTableHeaderCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-header-cell');
        return _this;
    }
    /**
     * @return {?}
     */
    NovoDataTableHeaderCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.column.width + "px");
        }
    };
    NovoDataTableHeaderCell.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-data-table-header-cell',
                },] }
    ];
    /** @nocollapse */
    NovoDataTableHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NovoDataTableHeaderCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        column: [{ type: Input }]
    };
    return NovoDataTableHeaderCell;
}(CdkHeaderCell));
export { NovoDataTableHeaderCell };
if (false) {
    /** @type {?} */
    NovoDataTableHeaderCell.prototype.role;
    /** @type {?} */
    NovoDataTableHeaderCell.prototype.column;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableHeaderCell.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableHeaderCell.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUlqRTtJQUdnRCxtREFBYTtJQU8zRCxpQ0FBWSxTQUF1QixFQUFVLFVBQXNCLEVBQVUsUUFBbUI7UUFBaEcsWUFDRSxrQkFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBSTdCO1FBTDRDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUx6RixVQUFJLEdBQUcsY0FBYyxDQUFDO1FBTzNCLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSx3QkFBc0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDOUgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFlLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQzdGLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDOztJQUM3RSxDQUFDOzs7O0lBRU0sMENBQVE7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztTQUMxRjtJQUNILENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7Ozs7Z0JBTnVCLFlBQVk7Z0JBRFIsVUFBVTtnQkFBRSxTQUFTOzs7dUJBUzlDLFdBQVcsU0FBQyxXQUFXO3lCQUd2QixLQUFLOztJQWlCUiw4QkFBQztDQUFBLEFBeEJELENBR2dELGFBQWEsR0FxQjVEO1NBckJZLHVCQUF1Qjs7O0lBQ2xDLHVDQUM2Qjs7SUFFN0IseUNBQ21DOzs7OztJQUVFLDZDQUE4Qjs7Ozs7SUFBRSwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0hlYWRlckNlbGwsIENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDb2x1bW4gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUhlYWRlckNlbGw8VD4gZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWNlbGwnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ud2lkdGgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgIH1cbiAgfVxufVxuIl19