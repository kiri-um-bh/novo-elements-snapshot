/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/pagination/data-table-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, HostBinding, } from '@angular/core';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
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
                    template: "\n      <ng-container *ngIf=\"theme === 'basic' || theme === 'basic-wide'\">\n        <div class=\"novo-data-table-pagination-size\">\n            <novo-tiles *ngIf=\"displayedPageSizeOptions.length > 1\"\n                        [(ngModel)]=\"pageSize\"\n                        [options]=\"displayedPageSizeOptions\"\n                        (onChange)=\"changePageSize($event)\"\n                        data-automation-id=\"novo-data-table-pagination-tiles\">\n            </novo-tiles>\n            <div *ngIf=\"displayedPageSizeOptions.length <= 1\">{{ pageSize }}</div>\n        </div>\n\n        <div class=\"novo-data-table-range-label-long\" data-automation-id=\"novo-data-table-pagination-range-label-long\">\n            {{ longRangeLabel }}\n        </div>\n        <div class=\"novo-data-table-range-label-short\" data-automation-id=\"novo-data-table-pagination-range-label-short\">\n            {{ shortRangeLabel }}\n        </div>\n        <span class=\"spacer novo-data-table-spacer\" *ngIf=\"theme === 'basic-wide'\"></span>\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-data-table-pagination-navigation-previous\"\n                (click)=\"previousPage()\"\n                icon=\"previous\"\n                side=\"left\"\n                [disabled]=\"!hasPreviousPage()\"\n                data-automation-id=\"novo-data-table-pagination-previous\">\n            <span>{{ labels.previous }}</span>\n        </button>\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-data-table-pagination-navigation-next\"\n                (click)=\"nextPage()\"\n                icon=\"next\"\n                side=\"right\"\n                [disabled]=\"!hasNextPage()\"\n                data-automation-id=\"novo-data-table-pagination-next\">\n            <span>{{ labels.next }}</span>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"theme === 'standard'\">\n        <h5 class=\"rows\">{{ labels.itemsPerPage }}</h5>\n        <novo-select\n          [options]=\"displayedPageSizeOptions\"\n          [placeholder]=\"labels.select\"\n          [(ngModel)]=\"pageSize\"\n          (onSelect)=\"changePageSize($event.selected)\"\n          data-automation-id=\"pager-select\"\n          [attr.data-feature-id]=\"dataFeatureId\">\n        </novo-select>\n        <span class=\"spacer\"></span>\n        <ul class=\"pager\" data-automation-id=\"pager\">\n            <li class=\"page\" (click)=\"selectPage(page - 1)\" [ngClass]=\"{ 'disabled': page === 0 }\"><i class=\"bhi-previous\" data-automation-id=\"pager-previous\"></i></li>\n            <li class=\"page\" [ngClass]=\"{active: p.number === page + 1}\" *ngFor=\"let p of pages\" (click)=\"selectPage(p.number - 1)\">{{ p.text }}</li>\n            <li class=\"page\" (click)=\"selectPage(page + 1)\" [ngClass]=\"{ 'disabled': page + 1 === totalPages }\"><i class=\"bhi-next\" data-automation-id=\"pager-next\"></i></li>\n        </ul>\n      </ng-container>\n  ",
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
        dataFeatureId: [{ type: Input }],
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
    /** @type {?} */
    NovoDataTablePagination.prototype.dataFeatureId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3BhZ2luYXRpb24vZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQUU3RCxtQkFBbUIsR0FBRyxDQUFDOzs7O0FBRTdCO0lBNkhFLGlDQUFvQixpQkFBb0MsRUFBUyxNQUF3QixFQUFVLEtBQXdCO1FBQTNILGlCQUtDO1FBTG1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBOUQzSCxVQUFLLEdBQVcsVUFBVSxDQUFDO1FBYTNCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFzQlYscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBY3JDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFVixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFZbkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVM7OztRQUFDO1lBQ3hELEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQWpFRCxzQkFDSSx5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Y3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVQYWdpbmF0aW9uRXZlbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuXG5jb25zdCBNQVhfUEFHRVNfRElTUExBWUVEID0gNTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoZW1lID09PSAnYmFzaWMnIHx8IHRoZW1lID09PSAnYmFzaWMtd2lkZSdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXNpemVcIj5cbiAgICAgICAgICAgIDxub3ZvLXRpbGVzICpuZ0lmPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLmxlbmd0aCA+IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImNoYW5nZVBhZ2VTaXplKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tdGlsZXNcIj5cbiAgICAgICAgICAgIDwvbm92by10aWxlcz5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMubGVuZ3RoIDw9IDFcIj57eyBwYWdlU2l6ZSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXJhbmdlLWxhYmVsLWxvbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1yYW5nZS1sYWJlbC1sb25nXCI+XG4gICAgICAgICAgICB7eyBsb25nUmFuZ2VMYWJlbCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1yYW5nZS1sYWJlbC1zaG9ydFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXJhbmdlLWxhYmVsLXNob3J0XCI+XG4gICAgICAgICAgICB7eyBzaG9ydFJhbmdlTGFiZWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3BhY2VyIG5vdm8tZGF0YS10YWJsZS1zcGFjZXJcIiAqbmdJZj1cInRoZW1lID09PSAnYmFzaWMtd2lkZSdcIj48L3NwYW4+XG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tbmF2aWdhdGlvbi1wcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzUGFnZSgpXCJcbiAgICAgICAgICAgICAgICBpY29uPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIHNpZGU9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWhhc1ByZXZpb3VzUGFnZSgpXCJcbiAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLnByZXZpb3VzIH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLW5leHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0UGFnZSgpXCJcbiAgICAgICAgICAgICAgICBpY29uPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWhhc05leHRQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLW5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5uZXh0IH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoZW1lID09PSAnc3RhbmRhcmQnXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cInJvd3NcIj57eyBsYWJlbHMuaXRlbXNQZXJQYWdlIH19PC9oNT5cbiAgICAgICAgPG5vdm8tc2VsZWN0XG4gICAgICAgICAgW29wdGlvbnNdPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwibGFiZWxzLnNlbGVjdFwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgKG9uU2VsZWN0KT1cImNoYW5nZVBhZ2VTaXplKCRldmVudC5zZWxlY3RlZClcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXNlbGVjdFwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cImRhdGFGZWF0dXJlSWRcIj5cbiAgICAgICAgPC9ub3ZvLXNlbGVjdD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2VyXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXJcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlIC0gMSlcIiBbbmdDbGFzc109XCJ7ICdkaXNhYmxlZCc6IHBhZ2UgPT09IDAgfVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItcHJldmlvdXNcIj48L2k+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBwLm51bWJlciA9PT0gcGFnZSArIDF9XCIgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwLm51bWJlciAtIDEpXCI+e3sgcC50ZXh0IH19PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlICsgMSlcIiBbbmdDbGFzc109XCJ7ICdkaXNhYmxlZCc6IHBhZ2UgKyAxID09PSB0b3RhbFBhZ2VzIH1cIj48aSBjbGFzcz1cImJoaS1uZXh0XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItbmV4dFwiPjwvaT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlUGFnaW5hdGlvbjxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnc3RhbmRhcmQnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLl9wYWdlO1xuICB9XG4gIF9wYWdlOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuICBzZXQgcGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5fcGFnZVNpemU7XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZVNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YUZlYXR1cmVJZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlU2l6ZU9wdGlvbnMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZU9wdGlvbnM7XG4gIH1cbiAgc2V0IHBhZ2VTaXplT3B0aW9ucyhwYWdlU2l6ZU9wdGlvbnM6IGFueVtdKSB7XG4gICAgdGhpcy5fcGFnZVNpemVPcHRpb25zID0gcGFnZVNpemVPcHRpb25zO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZVNpemVPcHRpb25zOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICB9XG4gIHNldCBsZW5ndGgobGVuZ3RoOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gIH1cbiAgX2xlbmd0aDogbnVtYmVyID0gMDtcblxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZVBhZ2luYXRpb25FdmVudD4oKTtcblxuICBwdWJsaWMgZGlzcGxheWVkUGFnZVNpemVPcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdO1xuICBwdWJsaWMgbG9uZ1JhbmdlTGFiZWw6IHN0cmluZztcbiAgcHVibGljIHNob3J0UmFuZ2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgcGFnZXM6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH1bXTtcblxuICBwcml2YXRlIHJlc2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPikge1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnJlc2V0U291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UGFnZShwYWdlKSB7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzTmV4dFBhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UrKztcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgcHJldmlvdXNQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UtLTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgaGFzUHJldmlvdXNQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPj0gMSAmJiB0aGlzLnBhZ2VTaXplICE9PSAwO1xuICB9XG5cbiAgcHVibGljIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKSAtIDE7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA8IG51bWJlck9mUGFnZXMgJiYgdGhpcy5wYWdlU2l6ZSAhPT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zKSB7XG4gICAgICB0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICBsYWJlbDogb3B0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0UGFnZUV2ZW50KGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCxcbiAgICB9O1xuICAgIHRoaXMucGFnZUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLm9uUGFnaW5hdGlvbkNoYW5nZShpc1BhZ2VTaXplQ2hhbmdlLCB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5wYWdlU2l6ZSA8IDEgPyAxIDogTWF0aC5jZWlsKHRoaXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYWdlKG51bWJlcjogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bWJlcixcbiAgICAgIHRleHQsXG4gICAgICBhY3RpdmU6IGlzQWN0aXZlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH1bXSB7XG4gICAgY29uc3QgcGFnZXMgPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9IE1BWF9QQUdFU19ESVNQTEFZRUQgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gUmVjb21wdXRlIGlmIG1heFBhZ2VzRGlzcGxheWVkXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IoTUFYX1BBR0VTX0RJU1BMQVlFRCAvIDIpLCAxKTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBNQVhfUEFHRVNfRElTUExBWUVEIC0gMTtcblxuICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSBNQVhfUEFHRVNfRElTUExBWUVEICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW1iZXIgPSBzdGFydFBhZ2U7IG51bWJlciA8PSBlbmRQYWdlOyBudW1iZXIrKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtYmVyLCBudW1iZXIudG9TdHJpbmcoKSwgbnVtYmVyID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cbn1cbiJdfQ==