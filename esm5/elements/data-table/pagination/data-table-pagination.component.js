/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, HostBinding, } from '@angular/core';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
/** @type {?} */
var DEFAULT_PAGE_SIZE = 50;
/** @type {?} */
var MAX_PAGES_DISPLAYED = 5;
/**
 * @template T
 */
var NovoDataTablePagination = /** @class */ (function () {
    function NovoDataTablePagination(changeDetectorRef, labels, state) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this.theme = 'standard';
        this._page = 0;
        this._pageSizeOptions = [];
        this._length = 0;
        this.pageChange = new EventEmitter();
        this.resetSubscription = this.state.resetSource.subscribe((/**
         * @return {?}
         */
        function () {
            _this.page = 0;
            _this.changeDetectorRef.markForCheck();
        }));
    }
    Object.defineProperty(NovoDataTablePagination.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this._page = page;
            this.changeDetectorRef.markForCheck();
            this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
            this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
            this.state.page = this._page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTablePagination.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            this._pageSize = pageSize;
            this.updateDisplayedPageSizeOptions();
            this.state.pageSize = this._pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTablePagination.prototype, "pageSizeOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSizeOptions;
        },
        set: /**
         * @param {?} pageSizeOptions
         * @return {?}
         */
        function (pageSizeOptions) {
            this._pageSizeOptions = pageSizeOptions;
            this.updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTablePagination.prototype, "length", {
        get: /**
         * @return {?}
         */
        function () {
            return this._length;
        },
        set: /**
         * @param {?} length
         * @return {?}
         */
        function (length) {
            this._length = length;
            this.changeDetectorRef.markForCheck();
            this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
            this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
            this.totalPages = this.calculateTotalPages();
            this.pages = this.getPages(this.page, this.totalPages);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoDataTablePagination.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initialized = true;
        this.updateDisplayedPageSizeOptions();
    };
    /**
     * @return {?}
     */
    NovoDataTablePagination.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.resetSubscription.unsubscribe();
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NovoDataTablePagination.prototype.selectPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page = page;
        this.emitPageEvent();
    };
    /**
     * @return {?}
     */
    NovoDataTablePagination.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (!this.hasNextPage()) {
            return;
        }
        this.page++;
        this.pages = this.getPages(this.page, this.totalPages);
        this.emitPageEvent();
    };
    /**
     * @return {?}
     */
    NovoDataTablePagination.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        if (!this.hasPreviousPage()) {
            return;
        }
        this.page--;
        this.pages = this.getPages(this.page, this.totalPages);
        this.emitPageEvent();
    };
    /**
     * @return {?}
     */
    NovoDataTablePagination.prototype.hasPreviousPage = /**
     * @return {?}
     */
    function () {
        return this.page >= 1 && this.pageSize !== 0;
    };
    /**
     * @return {?}
     */
    NovoDataTablePagination.prototype.hasNextPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numberOfPages = Math.ceil(this.length / this.pageSize) - 1;
        return this.page < numberOfPages && this.pageSize !== 0;
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    NovoDataTablePagination.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.page = 0;
        this.pageSize = pageSize;
        this.emitPageEvent(true);
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTablePagination.prototype.updateDisplayedPageSizeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._initialized) {
            return;
        }
        if (!this.displayedPageSizeOptions) {
            this.displayedPageSizeOptions = [];
            this.pageSizeOptions.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option.hasOwnProperty('value')) {
                    _this.displayedPageSizeOptions.push(option);
                }
                else {
                    _this.displayedPageSizeOptions.push({
                        value: option,
                        label: option,
                    });
                }
            }));
        }
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @param {?=} isPageSizeChange
     * @return {?}
     */
    NovoDataTablePagination.prototype.emitPageEvent = /**
     * @private
     * @param {?=} isPageSizeChange
     * @return {?}
     */
    function (isPageSizeChange) {
        if (isPageSizeChange === void 0) { isPageSizeChange = false; }
        /** @type {?} */
        var event = {
            page: this.page,
            pageSize: this.pageSize,
            length: this.length,
            filter: this.state.filter,
            sort: this.state.sort,
        };
        this.pageChange.next(event);
        this.state.page = this.page;
        this.state.pageSize = this.pageSize;
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.state.updates.next(event);
        this.state.onPaginationChange(isPageSizeChange, this.pageSize);
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTablePagination.prototype.calculateTotalPages = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalPages = this.pageSize < 1 ? 1 : Math.ceil(this.length / this.pageSize);
        return Math.max(totalPages || 0, 1);
    };
    /**
     * @private
     * @param {?} number
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    NovoDataTablePagination.prototype.makePage = /**
     * @private
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
     * @private
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    NovoDataTablePagination.prototype.getPages = /**
     * @private
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
        var isMaxSized = MAX_PAGES_DISPLAYED < totalPages;
        // Recompute if maxPagesDisplayed
        if (isMaxSized) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2), 1);
            endPage = startPage + MAX_PAGES_DISPLAYED - 1;
            // Adjust if limit is exceeded
            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - MAX_PAGES_DISPLAYED + 1;
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
    NovoDataTablePagination.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-pagination',
                    template: "\n      <ng-container *ngIf=\"theme === 'basic' || theme === 'basic-wide'\">\n        <div class=\"novo-data-table-pagination-size\">\n            <novo-tiles *ngIf=\"displayedPageSizeOptions.length > 1\"\n                        [(ngModel)]=\"pageSize\"\n                        [options]=\"displayedPageSizeOptions\"\n                        (onChange)=\"changePageSize($event)\"\n                        data-automation-id=\"novo-data-table-pagination-tiles\">\n            </novo-tiles>\n            <div *ngIf=\"displayedPageSizeOptions.length <= 1\">{{ pageSize }}</div>\n        </div>\n\n        <div class=\"novo-data-table-range-label-long\" data-automation-id=\"novo-data-table-pagination-range-label-long\">\n            {{ longRangeLabel }}\n        </div>\n        <div class=\"novo-data-table-range-label-short\" data-automation-id=\"novo-data-table-pagination-range-label-short\">\n            {{ shortRangeLabel }}\n        </div>\n        <span class=\"spacer novo-data-table-spacer\" *ngIf=\"theme === 'basic-wide'\"></span>\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-data-table-pagination-navigation-previous\"\n                (click)=\"previousPage()\"\n                icon=\"previous\"\n                side=\"left\"\n                [disabled]=\"!hasPreviousPage()\"\n                data-automation-id=\"novo-data-table-pagination-previous\">\n            <span>{{ labels.previous }}</span>\n        </button>\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-data-table-pagination-navigation-next\"\n                (click)=\"nextPage()\"\n                icon=\"next\"\n                side=\"right\"\n                [disabled]=\"!hasNextPage()\"\n                data-automation-id=\"novo-data-table-pagination-next\">\n            <span>{{ labels.next }}</span>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"theme === 'standard'\">\n        <h5 class=\"rows\">{{ labels.itemsPerPage }}</h5>\n        <novo-select [options]=\"displayedPageSizeOptions\" [placeholder]=\"labels.select\" [(ngModel)]=\"pageSize\" (onSelect)=\"changePageSize($event.selected)\" data-automation-id=\"pager-select\"></novo-select>\n        <span class=\"spacer\"></span>\n        <ul class=\"pager\" data-automation-id=\"pager\">\n            <li class=\"page\" (click)=\"selectPage(page - 1)\" [ngClass]=\"{ 'disabled': page === 0 }\"><i class=\"bhi-previous\" data-automation-id=\"pager-previous\"></i></li>\n            <li class=\"page\" [ngClass]=\"{active: p.number === page + 1}\" *ngFor=\"let p of pages\" (click)=\"selectPage(p.number - 1)\">{{ p.text }}</li>\n            <li class=\"page\" (click)=\"selectPage(page + 1)\" [ngClass]=\"{ 'disabled': page + 1 === totalPages }\"><i class=\"bhi-next\" data-automation-id=\"pager-next\"></i></li>\n        </ul>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoDataTablePagination.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NovoLabelService },
        { type: DataTableState }
    ]; };
    NovoDataTablePagination.propDecorators = {
        theme: [{ type: HostBinding, args: ['class',] }, { type: Input }],
        page: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        length: [{ type: Input }],
        pageChange: [{ type: Output }]
    };
    return NovoDataTablePagination;
}());
export { NovoDataTablePagination };
if (false) {
    /** @type {?} */
    NovoDataTablePagination.prototype.theme;
    /** @type {?} */
    NovoDataTablePagination.prototype._page;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype._pageSize;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype._pageSizeOptions;
    /** @type {?} */
    NovoDataTablePagination.prototype._length;
    /** @type {?} */
    NovoDataTablePagination.prototype.pageChange;
    /** @type {?} */
    NovoDataTablePagination.prototype.displayedPageSizeOptions;
    /** @type {?} */
    NovoDataTablePagination.prototype.longRangeLabel;
    /** @type {?} */
    NovoDataTablePagination.prototype.shortRangeLabel;
    /** @type {?} */
    NovoDataTablePagination.prototype.pages;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype.resetSubscription;
    /** @type {?} */
    NovoDataTablePagination.prototype.totalPages;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype.changeDetectorRef;
    /** @type {?} */
    NovoDataTablePagination.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3BhZ2luYXRpb24vZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0lBRTdELGlCQUFpQixHQUFHLEVBQUU7O0lBQ3RCLG1CQUFtQixHQUFHLENBQUM7Ozs7QUFFN0I7SUFzSEUsaUNBQW9CLGlCQUFvQyxFQUFTLE1BQXdCLEVBQVUsS0FBd0I7UUFBM0gsaUJBS0M7UUFMbUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUE5RDNILFVBQUssR0FBVyxVQUFVLENBQUM7UUFhM0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQXFCVixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFjckMsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUdwQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFZekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVM7OztRQUFDO1lBQ3hELEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFD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aGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVQYWdpbmF0aW9uRXZlbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX1BBR0VfU0laRSA9IDUwO1xuY29uc3QgTUFYX1BBR0VTX0RJU1BMQVlFRCA9IDU7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aGVtZSA9PT0gJ2Jhc2ljJyB8fCB0aGVtZSA9PT0gJ2Jhc2ljLXdpZGUnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1zaXplXCI+XG4gICAgICAgICAgICA8bm92by10aWxlcyAqbmdJZj1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5sZW5ndGggPiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJjaGFuZ2VQYWdlU2l6ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXRpbGVzXCI+XG4gICAgICAgICAgICA8L25vdm8tdGlsZXM+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLmxlbmd0aCA8PSAxXCI+e3sgcGFnZVNpemUgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1yYW5nZS1sYWJlbC1sb25nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tcmFuZ2UtbGFiZWwtbG9uZ1wiPlxuICAgICAgICAgICAge3sgbG9uZ1JhbmdlTGFiZWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcmFuZ2UtbGFiZWwtc2hvcnRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1yYW5nZS1sYWJlbC1zaG9ydFwiPlxuICAgICAgICAgICAge3sgc2hvcnRSYW5nZUxhYmVsIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNwYWNlciBub3ZvLWRhdGEtdGFibGUtc3BhY2VyXCIgKm5nSWY9XCJ0aGVtZSA9PT0gJ2Jhc2ljLXdpZGUnXCI+PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLW5hdmlnYXRpb24tcHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2aW91c1BhZ2UoKVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICBzaWRlPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFoYXNQcmV2aW91c1BhZ2UoKVwiXG4gICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tcHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5wcmV2aW91cyB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tbmF2aWdhdGlvbi1uZXh0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwibmV4dFBhZ2UoKVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cIm5leHRcIlxuICAgICAgICAgICAgICAgIHNpZGU9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFoYXNOZXh0UGFnZSgpXCJcbiAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1uZXh0XCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMubmV4dCB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aGVtZSA9PT0gJ3N0YW5kYXJkJ1wiPlxuICAgICAgICA8aDUgY2xhc3M9XCJyb3dzXCI+e3sgbGFiZWxzLml0ZW1zUGVyUGFnZSB9fTwvaDU+XG4gICAgICAgIDxub3ZvLXNlbGVjdCBbb3B0aW9uc109XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnNcIiBbcGxhY2Vob2xkZXJdPVwibGFiZWxzLnNlbGVjdFwiIFsobmdNb2RlbCldPVwicGFnZVNpemVcIiAob25TZWxlY3QpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50LnNlbGVjdGVkKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXNlbGVjdFwiPjwvbm92by1zZWxlY3Q+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3BhY2VyXCI+PC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3M9XCJwYWdlclwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZSAtIDEpXCIgW25nQ2xhc3NdPVwieyAnZGlzYWJsZWQnOiBwYWdlID09PSAwIH1cIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXByZXZpb3VzXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogcC5udW1iZXIgPT09IHBhZ2UgKyAxfVwiICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VzXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocC5udW1iZXIgLSAxKVwiPnt7IHAudGV4dCB9fTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZSArIDEpXCIgW25nQ2xhc3NdPVwieyAnZGlzYWJsZWQnOiBwYWdlICsgMSA9PT0gdG90YWxQYWdlcyB9XCI+PGkgY2xhc3M9XCJiaGktbmV4dFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLW5leHRcIj48L2k+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZVBhZ2luYXRpb248VD4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJ3N0YW5kYXJkJztcblxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSBwYWdlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5fcGFnZTtcbiAgfVxuICBfcGFnZTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cbiAgc2V0IHBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMuX3BhZ2VTaXplO1xuICB9XG4gIHByaXZhdGUgX3BhZ2VTaXplOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplT3B0aW9ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplT3B0aW9ucztcbiAgfVxuICBzZXQgcGFnZVNpemVPcHRpb25zKHBhZ2VTaXplT3B0aW9uczogYW55W10pIHtcbiAgICB0aGlzLl9wYWdlU2l6ZU9wdGlvbnMgPSBwYWdlU2l6ZU9wdGlvbnM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZU9wdGlvbnM6IGFueVtdID0gW107XG5cbiAgQElucHV0KClcbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cbiAgc2V0IGxlbmd0aChsZW5ndGg6IG51bWJlcikge1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuICBfbGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gIEBPdXRwdXQoKVxuICBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUGFnaW5hdGlvbkV2ZW50PigpO1xuXG4gIHB1YmxpYyBkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG4gIHB1YmxpYyBsb25nUmFuZ2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgc2hvcnRSYW5nZUxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBwYWdlczogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfVtdO1xuXG4gIHByaXZhdGUgcmVzZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7XG4gICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUucmVzZXRTb3VyY2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuZW1pdFBhZ2VFdmVudCgpO1xuICB9XG5cbiAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGFnZSsrO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91c1BhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1ByZXZpb3VzUGFnZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGFnZS0tO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNQcmV2aW91c1BhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA+PSAxICYmIHRoaXMucGFnZVNpemUgIT09IDA7XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpIC0gMTtcbiAgICByZXR1cm4gdGhpcy5wYWdlIDwgbnVtYmVyT2ZQYWdlcyAmJiB0aGlzLnBhZ2VTaXplICE9PSAwO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zID0gW107XG4gICAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucy5mb3JFYWNoKChvcHRpb246IGFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRQYWdlRXZlbnQoaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCxcbiAgICB9O1xuICAgIHRoaXMucGFnZUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLm9uUGFnaW5hdGlvbkNoYW5nZShpc1BhZ2VTaXplQ2hhbmdlLCB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5wYWdlU2l6ZSA8IDEgPyAxIDogTWF0aC5jZWlsKHRoaXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYWdlKG51bWJlcjogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGFjdGl2ZTogaXNBY3RpdmUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfVtdIHtcbiAgICBsZXQgcGFnZXMgPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9IE1BWF9QQUdFU19ESVNQTEFZRUQgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gUmVjb21wdXRlIGlmIG1heFBhZ2VzRGlzcGxheWVkXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IoTUFYX1BBR0VTX0RJU1BMQVlFRCAvIDIpLCAxKTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBNQVhfUEFHRVNfRElTUExBWUVEIC0gMTtcblxuICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSBNQVhfUEFHRVNfRElTUExBWUVEICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW1iZXIgPSBzdGFydFBhZ2U7IG51bWJlciA8PSBlbmRQYWdlOyBudW1iZXIrKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtYmVyLCBudW1iZXIudG9TdHJpbmcoKSwgbnVtYmVyID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cbn1cbiJdfQ==