/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/pagination/Pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
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
     * @param {?} number
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    Pagination.prototype.makePage = 
    // Create page object used in template
    /**
     * @param {?} number
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    function (number, text, isActive) {
        return {
            number: number,
            text: text,
            active: isActive,
        };
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
        for (var number = startPage; number <= endPage; number++) {
            /** @type {?} */
            var page = this.makePage(number, number.toString(), number === currentPage);
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
                    template: "\n        <h5 class=\"rows\">{{label}}</h5>\n        <novo-select [options]=\"rowOptions\" [placeholder]=\"labels.select\" [(ngModel)]=\"itemsPerPage\" (onSelect)=\"onPageSizeChanged($event)\" data-automation-id=\"pager-select\"></novo-select>\n        <span class=\"spacer\"></span>\n        <ul class=\"pager\" data-automation-id=\"pager\">\n            <li class=\"page\" (click)=\"selectPage(page-1)\" [ngClass]=\"{'disabled': noPrevious()}\"><i class=\"bhi-previous\" data-automation-id=\"pager-previous\"></i></li>\n            <li class=\"page\" [ngClass]=\"{active: p.number==page}\" [class.disabled]=\"disablePageSelection\" *ngFor=\"let p of pages\" (click)=\"selectPage(p.number)\">{{p.text}}</li>\n            <li class=\"page\" (click)=\"selectPage(page+1)\" [ngClass]=\"{'disabled': noNext()}\"><i class=\"bhi-next\" data-automation-id=\"pager-next\"></i></li>\n        </ul>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUzRTtJQTJDRSxvQkFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUF4QjNDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBYTFCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRCx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JELHNCQUFpQixHQUFXLENBQUMsQ0FBQztJQUlnQixDQUFDO0lBbkIvQyxzQkFDSSw0Q0FBb0I7Ozs7UUFEeEI7WUFFRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDOzs7OztRQUNELFVBQXlCLEdBQVk7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7OztPQUhBOzs7O0lBa0JELDZCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDbkUsQ0FB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VUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkF2SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwrM0JBU1Q7aUJBQ0Y7Ozs7Z0JBZFEsZ0JBQWdCOzs7dUJBZ0J0QixLQUFLOzZCQUVMLEtBQUs7K0JBRUwsS0FBSzs2QkFFTCxLQUFLO3dCQUVMLEtBQUs7dUNBRUwsS0FBSzs2QkFPTCxNQUFNO3FDQUVOLE1BQU07K0JBRU4sTUFBTTs7SUFxR1QsaUJBQUM7Q0FBQSxBQXhJRCxJQXdJQztTQTNIWSxVQUFVOzs7SUFDckIsMEJBQ2E7O0lBQ2IsZ0NBQ21COztJQUNuQixrQ0FDMEI7O0lBQzFCLGdDQUNnQjs7SUFDaEIsMkJBQ2M7O0lBUWQsZ0NBQ21EOztJQUNuRCx3Q0FDMkQ7O0lBQzNELGtDQUNxRDs7SUFFckQsd0NBQW1DOztJQUNuQyx1Q0FBOEI7O0lBQzlCLGdDQUFtQjs7SUFDbkIsMkJBQWtCOztJQUVOLDRCQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg1IGNsYXNzPVwicm93c1wiPnt7bGFiZWx9fTwvaDU+XG4gICAgICAgIDxub3ZvLXNlbGVjdCBbb3B0aW9uc109XCJyb3dPcHRpb25zXCIgW3BsYWNlaG9sZGVyXT1cImxhYmVscy5zZWxlY3RcIiBbKG5nTW9kZWwpXT1cIml0ZW1zUGVyUGFnZVwiIChvblNlbGVjdCk9XCJvblBhZ2VTaXplQ2hhbmdlZCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItc2VsZWN0XCI+PC9ub3ZvLXNlbGVjdD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2VyXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXJcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlLTEpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IG5vUHJldmlvdXMoKX1cIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXByZXZpb3VzXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogcC5udW1iZXI9PXBhZ2V9XCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVQYWdlU2VsZWN0aW9uXCIgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwLm51bWJlcilcIj57e3AudGV4dH19PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlKzEpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IG5vTmV4dCgpfVwiPjxpIGNsYXNzPVwiYmhpLW5leHRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1uZXh0XCI+PC9pPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHBhZ2U6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdG90YWxJdGVtczogbnVtYmVyO1xuICBASW5wdXQoKVxuICBpdGVtc1BlclBhZ2U6IG51bWJlciA9IDEwO1xuICBASW5wdXQoKVxuICByb3dPcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlUGFnZVNlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlU2VsZWN0RGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVQYWdlU2VsZWN0aW9uKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMucGFnZVNlbGVjdERpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgaXRlbXNQZXJQYWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uUGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHBhZ2VTZWxlY3REaXNhYmxlZDogYm9vbGVhbjtcbiAgbWF4UGFnZXNEaXNwbGF5ZWQ6IG51bWJlciA9IDU7XG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgcGFnZXM6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5sYWJlbCB8fCB0aGlzLmxhYmVscy5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy5yb3dPcHRpb25zID0gdGhpcy5yb3dPcHRpb25zIHx8IHRoaXMuZ2V0RGVmYXVsdFJvd09wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlIHx8IDE7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFJvd09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFt7IHZhbHVlOiAxMCwgbGFiZWw6ICcxMCcgfSwgeyB2YWx1ZTogMjUsIGxhYmVsOiAnMjUnIH0sIHsgdmFsdWU6IDUwLCBsYWJlbDogJzUwJyB9LCB7IHZhbHVlOiAxMDAsIGxhYmVsOiAnMTAwJyB9XTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2VkKGV2ZW50KSB7XG4gICAgdGhpcy5wYWdlID0gMTtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IGV2ZW50LnNlbGVjdGVkO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLnBhZ2UpO1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlQ2hhbmdlLmVtaXQodGhpcy5pdGVtc1BlclBhZ2UpO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdFBhZ2UocGFnZSwgZXZlbnQ/OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5wYWdlKTtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBub1ByZXZpb3VzKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG4gIH1cblxuICBub05leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcbiAgbWFrZVBhZ2UobnVtYmVyLCB0ZXh0LCBpc0FjdGl2ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBhY3RpdmU6IGlzQWN0aXZlLFxuICAgIH07XG4gIH1cblxuICBnZXRQYWdlcyhjdXJyZW50UGFnZSwgdG90YWxQYWdlcykge1xuICAgIGxldCBwYWdlcyA9IFtdO1xuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9IHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFBhZ2VzRGlzcGxheWVkXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhQYWdlc0Rpc3BsYXllZCAvIDIpLCAxKTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFBhZ2VzRGlzcGxheWVkIC0gMTtcblxuICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFBhZ2VzRGlzcGxheWVkICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW1iZXIgPSBzdGFydFBhZ2U7IG51bWJlciA8PSBlbmRQYWdlOyBudW1iZXIrKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtYmVyLCBudW1iZXIudG9TdHJpbmcoKSwgbnVtYmVyID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbFBhZ2VzKCkge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB0aGlzLml0ZW1zUGVyUGFnZSA8IDEgPyAxIDogTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxufVxuIl19