/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/pagination/Pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
/**
 * @record
 */
function Page() { }
if (false) {
    /** @type {?} */
    Page.prototype.num;
    /** @type {?} */
    Page.prototype.text;
    /** @type {?} */
    Page.prototype.active;
}
var Pagination = /** @class */ (function () {
    function Pagination(labels) {
        this.labels = labels;
        this.itemsPerPage = 10;
        this.pageChange = new EventEmitter();
        this.itemsPerPageChange = new EventEmitter();
        this.onPageChange = new EventEmitter();
        this.maxPagesDisplayed = 5;
    }
    Object.defineProperty(Pagination.prototype, "disablePageSelection", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pageSelectDisabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.pageSelectDisabled = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Pagination.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.label = this.label || this.labels.itemsPerPage;
        this.rowOptions = this.rowOptions || this.getDefaultRowOptions();
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    Pagination.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        this.page = this.page || 1;
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @return {?}
     */
    Pagination.prototype.getDefaultRowOptions = /**
     * @return {?}
     */
    function () {
        return [{ value: 10, label: '10' }, { value: 25, label: '25' }, { value: 50, label: '50' }, { value: 100, label: '100' }];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Pagination.prototype.onPageSizeChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.page = 1;
        this.itemsPerPage = event.selected;
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.pageChange.emit(this.page);
        this.itemsPerPageChange.emit(this.itemsPerPage);
        this.onPageChange.emit({
            page: this.page,
            itemsPerPage: this.itemsPerPage,
        });
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    Pagination.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        this.page = page;
        this.pages = this.getPages(this.page, this.totalPages);
        this.pageChange.emit(this.page);
        this.onPageChange.emit({
            page: this.page,
            itemsPerPage: this.itemsPerPage,
        });
    };
    /**
     * @return {?}
     */
    Pagination.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    Pagination.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    // Create page object used in template
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    Pagination.prototype.makePage = 
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    function (num, text, isActive) {
        return (/** @type {?} */ ({ num: num, text: text, active: isActive, }));
    };
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    Pagination.prototype.getPages = /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        /** @type {?} */
        var pages = [];
        // Default page limits
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = totalPages;
        /** @type {?} */
        var isMaxSized = this.maxPagesDisplayed < totalPages;
        // recompute if maxPagesDisplayed
        if (isMaxSized) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(this.maxPagesDisplayed / 2), 1);
            endPage = startPage + this.maxPagesDisplayed - 1;
            // Adjust if limit is exceeded
            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - this.maxPagesDisplayed + 1;
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        return pages;
    };
    /**
     * @return {?}
     */
    Pagination.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    Pagination.decorators = [
        { type: Component, args: [{
                    selector: 'novo-pagination',
                    template: "\n        <h5 class=\"rows\">{{label}}</h5>\n        <novo-select [options]=\"rowOptions\" [placeholder]=\"labels.select\" [(ngModel)]=\"itemsPerPage\" (onSelect)=\"onPageSizeChanged($event)\" data-automation-id=\"pager-select\"></novo-select>\n        <span class=\"spacer\"></span>\n        <ul class=\"pager\" data-automation-id=\"pager\">\n            <li class=\"page\" (click)=\"selectPage(page-1)\" [ngClass]=\"{'disabled': noPrevious()}\"><i class=\"bhi-previous\" data-automation-id=\"pager-previous\"></i></li>\n            <li class=\"page\" [ngClass]=\"{active: p.active}\" [class.disabled]=\"disablePageSelection\" *ngFor=\"let p of pages\" (click)=\"selectPage(p.num, $event)\">{{p.text}}</li>\n            <li class=\"page\" (click)=\"selectPage(page+1)\" [ngClass]=\"{'disabled': noNext()}\"><i class=\"bhi-next\" data-automation-id=\"pager-next\"></i></li>\n        </ul>\n  "
                }] }
    ];
    /** @nocollapse */
    Pagination.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    Pagination.propDecorators = {
        page: [{ type: Input }],
        totalItems: [{ type: Input }],
        itemsPerPage: [{ type: Input }],
        rowOptions: [{ type: Input }],
        label: [{ type: Input }],
        disablePageSelection: [{ type: Input }],
        pageChange: [{ type: Output }],
        itemsPerPageChange: [{ type: Output }],
        onPageChange: [{ type: Output }]
    };
    return Pagination;
}());
export { Pagination };
if (false) {
    /** @type {?} */
    Pagination.prototype.page;
    /** @type {?} */
    Pagination.prototype.totalItems;
    /** @type {?} */
    Pagination.prototype.itemsPerPage;
    /** @type {?} */
    Pagination.prototype.rowOptions;
    /** @type {?} */
    Pagination.prototype.label;
    /** @type {?} */
    Pagination.prototype.pageChange;
    /** @type {?} */
    Pagination.prototype.itemsPerPageChange;
    /** @type {?} */
    Pagination.prototype.onPageChange;
    /** @type {?} */
    Pagination.prototype.pageSelectDisabled;
    /** @type {?} */
    Pagination.prototype.maxPagesDisplayed;
    /** @type {?} */
    Pagination.prototype.totalPages;
    /** @type {?} */
    Pagination.prototype.pages;
    /** @type {?} */
    Pagination.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFekcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7QUFFM0UsbUJBSUM7OztJQUhDLG1CQUFZOztJQUNaLG9CQUFhOztJQUNiLHNCQUFnQjs7QUFFbEI7SUEyQ0Usb0JBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBeEIzQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQWFsQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdsQyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFJeUIsQ0FBQztJQW5CaEQsc0JBQ0ksNENBQW9COzs7O1FBRHhCO1lBRUUsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzs7Ozs7UUFDRCxVQUF5QixHQUFZO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FIQTs7OztJQWtCRCw2QkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJ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QVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdGLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQW5JRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDgzQkFTVDtpQkFDRjs7OztnQkFuQlEsZ0JBQWdCOzs7dUJBcUJ0QixLQUFLOzZCQUVMLEtBQUs7K0JBRUwsS0FBSzs2QkFFTCxLQUFLO3dCQUVMLEtBQUs7dUNBRUwsS0FBSzs2QkFPTCxNQUFNO3FDQUVOLE1BQU07K0JBRU4sTUFBTTs7SUFpR1QsaUJBQUM7Q0FBQSxBQXBJRCxJQW9JQztTQXZIWSxVQUFVOzs7SUFDckIsMEJBQ2E7O0lBQ2IsZ0NBQ21COztJQUNuQixrQ0FDa0I7O0lBQ2xCLGdDQUNXOztJQUNYLDJCQUNjOztJQVFkLGdDQUNnQzs7SUFDaEMsd0NBQ3dDOztJQUN4QyxrQ0FDa0M7O0lBRWxDLHdDQUFtQzs7SUFDbkMsdUNBQXNCOztJQUN0QixnQ0FBbUI7O0lBQ25CLDJCQUFtQjs7SUFFUCw0QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbmludGVyZmFjZSBQYWdlIHtcbiAgbnVtOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg1IGNsYXNzPVwicm93c1wiPnt7bGFiZWx9fTwvaDU+XG4gICAgICAgIDxub3ZvLXNlbGVjdCBbb3B0aW9uc109XCJyb3dPcHRpb25zXCIgW3BsYWNlaG9sZGVyXT1cImxhYmVscy5zZWxlY3RcIiBbKG5nTW9kZWwpXT1cIml0ZW1zUGVyUGFnZVwiIChvblNlbGVjdCk9XCJvblBhZ2VTaXplQ2hhbmdlZCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItc2VsZWN0XCI+PC9ub3ZvLXNlbGVjdD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2VyXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXJcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlLTEpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IG5vUHJldmlvdXMoKX1cIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXByZXZpb3VzXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogcC5hY3RpdmV9XCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVQYWdlU2VsZWN0aW9uXCIgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwLm51bSwgJGV2ZW50KVwiPnt7cC50ZXh0fX08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UrMSlcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogbm9OZXh0KCl9XCI+PGkgY2xhc3M9XCJiaGktbmV4dFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLW5leHRcIj48L2k+PC9saT5cbiAgICAgICAgPC91bD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcGFnZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0b3RhbEl0ZW1zOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGl0ZW1zUGVyUGFnZSA9IDEwO1xuICBASW5wdXQoKVxuICByb3dPcHRpb25zO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZVBhZ2VTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZVNlbGVjdERpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlUGFnZVNlbGVjdGlvbih2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnBhZ2VTZWxlY3REaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgaXRlbXNQZXJQYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25QYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBwYWdlU2VsZWN0RGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1heFBhZ2VzRGlzcGxheWVkID0gNTtcbiAgdG90YWxQYWdlczogbnVtYmVyO1xuICBwYWdlczogQXJyYXk8UGFnZT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMubGFiZWwgfHwgdGhpcy5sYWJlbHMuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMucm93T3B0aW9ucyA9IHRoaXMucm93T3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRSb3dPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSB8fCAxO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIGdldERlZmF1bHRSb3dPcHRpb25zKCkge1xuICAgIHJldHVybiBbeyB2YWx1ZTogMTAsIGxhYmVsOiAnMTAnIH0sIHsgdmFsdWU6IDI1LCBsYWJlbDogJzI1JyB9LCB7IHZhbHVlOiA1MCwgbGFiZWw6ICc1MCcgfSwgeyB2YWx1ZTogMTAwLCBsYWJlbDogJzEwMCcgfV07XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlZChldmVudCkge1xuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBldmVudC5zZWxlY3RlZDtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5wYWdlKTtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZUNoYW5nZS5lbWl0KHRoaXMuaXRlbXNQZXJQYWdlKTtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHRoaXMucGFnZSk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbm9QcmV2aW91cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuICB9XG5cbiAgbm9OZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXG4gIG1ha2VQYWdlKG51bTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHsgbnVtLCB0ZXh0LCBhY3RpdmU6IGlzQWN0aXZlLCB9IGFzIFBhZ2U7XG4gIH1cblxuICBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWdlczogQXJyYXk8UGFnZT4gPSBbXTtcbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPSB0aGlzLm1heFBhZ2VzRGlzcGxheWVkIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhQYWdlc0Rpc3BsYXllZFxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xuICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgLyAyKSwgMSk7XG4gICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCAtIDE7XG5cbiAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5pdGVtc1BlclBhZ2UgPCAxID8gMSA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbn1cbiJdfQ==