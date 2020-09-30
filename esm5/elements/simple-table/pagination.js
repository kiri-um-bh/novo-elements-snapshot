/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoActivityTableState } from './state';
/** @type {?} */
var DEFAULT_PAGE_SIZE = 50;
var NovoSimpleTablePagination = /** @class */ (function () {
    function NovoSimpleTablePagination(changeDetectorRef, labels, state) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this._page = 0;
        this._length = 0;
        this._pageSizeOptions = [];
        this.pageChange = new EventEmitter();
        if (state && state.onReset) {
            this.resetSubscription = this.state.onReset.subscribe((/**
             * @param {?} clear
             * @return {?}
             */
            function (clear) {
                if (clear) {
                    _this.page = 0;
                    _this.changeDetectorRef.markForCheck();
                }
            }));
        }
    }
    Object.defineProperty(NovoSimpleTablePagination.prototype, "page", {
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
    Object.defineProperty(NovoSimpleTablePagination.prototype, "length", {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoSimpleTablePagination.prototype, "pageSize", {
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
    Object.defineProperty(NovoSimpleTablePagination.prototype, "pageSizeOptions", {
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
    /**
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initialized = true;
        this.updateDisplayedPageSizeOptions();
    };
    /**
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.resetSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (!this.hasNextPage()) {
            return;
        }
        this.page++;
        this.emitPageEvent();
    };
    /**
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        if (!this.hasPreviousPage()) {
            return;
        }
        this.page--;
        this.emitPageEvent();
    };
    /**
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.hasPreviousPage = /**
     * @return {?}
     */
    function () {
        return this.page >= 1 && this.pageSize !== 0;
    };
    /**
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.hasNextPage = /**
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
    NovoSimpleTablePagination.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.page = 0;
        this.pageSize = pageSize;
        this.emitPageEvent();
    };
    /**
     * @private
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.updateDisplayedPageSizeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._initialized) {
            return;
        }
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length !== 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
        }
        this.displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this.displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this.displayedPageSizeOptions.push(this.pageSize);
        }
        this.displayedPageSizeOptions.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a - b; }));
        this.changeDetectorRef.markForCheck();
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
    };
    /**
     * @private
     * @return {?}
     */
    NovoSimpleTablePagination.prototype.emitPageEvent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = {
            page: this.page,
            pageSize: this.pageSize,
            length: this.length,
        };
        this.pageChange.next(event);
        this.state.page = this.page;
        this.state.pageSize = this.pageSize;
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.state.updates.next(event);
    };
    NovoSimpleTablePagination.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-table-pagination',
                    template: "\n        <div class=\"novo-simple-table-pagination-size\">\n            <novo-tiles *ngIf=\"displayedPageSizeOptions.length > 1\"\n                        [(ngModel)]=\"pageSize\"\n                        [options]=\"displayedPageSizeOptions\"\n                        (onChange)=\"changePageSize($event)\"\n                        data-automation-id=\"novo-simple-table-pagination-tiles\">\n            </novo-tiles>\n            <div *ngIf=\"displayedPageSizeOptions.length <= 1\">{{ pageSize }}</div>\n        </div>\n\n        <div class=\"novo-simple-table-range-label-long\"data-automation-id=\"novo-simple-table-pagination-range-label-long\">\n            {{ longRangeLabel }}\n        </div>\n        <div class=\"novo-simple-table-range-label-short\"data-automation-id=\"novo-simple-table-pagination-range-label-short\">\n            {{ shortRangeLabel }}\n        </div>\n\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-simple-table-pagination-navigation-previous\"\n                (click)=\"previousPage()\"\n                icon=\"previous\"\n                side=\"left\"\n                [disabled]=\"!hasPreviousPage()\"\n                data-automation-id=\"novo-simple-table-pagination-previous\">\n            <span>{{ labels.previous }}</span>\n        </button>\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-simple-table-pagination-navigation-next\"\n                (click)=\"nextPage()\"\n                icon=\"next\"\n                side=\"right\"\n                [disabled]=\"!hasNextPage()\"\n                data-automation-id=\"novo-simple-table-pagination-next\">\n            <span>{{ labels.next }}</span>\n        </button>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoSimpleTablePagination.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NovoLabelService },
        { type: NovoActivityTableState }
    ]; };
    NovoSimpleTablePagination.propDecorators = {
        page: [{ type: Input }],
        length: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        pageChange: [{ type: Output }]
    };
    return NovoSimpleTablePagination;
}());
export { NovoSimpleTablePagination };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype._initialized;
    /** @type {?} */
    NovoSimpleTablePagination.prototype._page;
    /** @type {?} */
    NovoSimpleTablePagination.prototype._length;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype._pageSize;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype._pageSizeOptions;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.pageChange;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.displayedPageSizeOptions;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.longRangeLabel;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.shortRangeLabel;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype.resetSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype.changeDetectorRef;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvcGFnaW5hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDOztJQUUzQyxpQkFBaUIsR0FBRyxFQUFFO0FBRTVCO0lBbUdFLG1DQUFvQixpQkFBb0MsRUFBUyxNQUF3QixFQUFVLEtBQTZCO1FBQWhJLGlCQVNDO1FBVG1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBNUNoSSxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBWWxCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFxQloscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBR3hDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQVN6RCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxLQUFjO2dCQUNuRSxJQUFJLEtBQUssRUFBRTtvQkFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDZCxLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFoRUQsc0JBQ0ksMkNBQUk7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QyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFuTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSwwc0RBb0NQO29CQUNILGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFqRGlDLGlCQUFpQjtnQkFJMUMsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Ozt1QkFnRDVCLEtBQUs7eUJBYUwsS0FBSzsyQkFZTCxLQUFLO2tDQVdMLEtBQUs7NkJBVUwsTUFBTTs7SUEwRlQsZ0NBQUM7Q0FBQSxBQXBMRCxJQW9MQztTQTNJWSx5QkFBeUI7Ozs7OztJQUNwQyxpREFBOEI7O0lBYTlCLDBDQUFrQjs7SUFZbEIsNENBQW9COzs7OztJQVdwQiw4Q0FBMEI7Ozs7O0lBVTFCLHFEQUF3Qzs7SUFFeEMsK0NBQzJEOztJQUUzRCw2REFBMEM7O0lBQzFDLG1EQUE4Qjs7SUFDOUIsb0RBQStCOzs7OztJQUUvQixzREFBd0M7Ozs7O0lBRTVCLHNEQUE0Qzs7SUFBRSwyQ0FBK0I7Ozs7O0lBQUUsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOb3ZvU2ltcGxlUGFnaW5hdGlvbkV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuXG5jb25zdCBERUZBVUxUX1BBR0VfU0laRSA9IDUwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tc2l6ZVwiPlxuICAgICAgICAgICAgPG5vdm8tdGlsZXMgKm5nSWY9XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMubGVuZ3RoID4gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXNpbXBsZS10YWJsZS1wYWdpbmF0aW9uLXRpbGVzXCI+XG4gICAgICAgICAgICA8L25vdm8tdGlsZXM+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLmxlbmd0aCA8PSAxXCI+e3sgcGFnZVNpemUgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc2ltcGxlLXRhYmxlLXJhbmdlLWxhYmVsLWxvbmdcImRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tcmFuZ2UtbGFiZWwtbG9uZ1wiPlxuICAgICAgICAgICAge3sgbG9uZ1JhbmdlTGFiZWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXNpbXBsZS10YWJsZS1yYW5nZS1sYWJlbC1zaG9ydFwiZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbi1yYW5nZS1sYWJlbC1zaG9ydFwiPlxuICAgICAgICAgICAge3sgc2hvcnRSYW5nZUxhYmVsIH19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGljb249XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaGFzUHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tcHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5wcmV2aW91cyB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLW5leHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0UGFnZSgpXCJcbiAgICAgICAgICAgICAgICBpY29uPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWhhc05leHRQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tbmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLm5leHQgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSBwYWdlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5fcGFnZTtcbiAgfVxuICBfcGFnZTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuICBzZXQgbGVuZ3RoKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gIH1cbiAgX2xlbmd0aDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cbiAgc2V0IHBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMuX3BhZ2VTaXplO1xuICB9XG4gIHByaXZhdGUgX3BhZ2VTaXplOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplT3B0aW9ucygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplT3B0aW9ucztcbiAgfVxuICBzZXQgcGFnZVNpemVPcHRpb25zKHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9wYWdlU2l6ZU9wdGlvbnMgPSBwYWdlU2l6ZU9wdGlvbnM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gW107XG5cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdm9TaW1wbGVQYWdpbmF0aW9uRXZlbnQ+KCk7XG5cbiAgcHVibGljIGRpc3BsYXllZFBhZ2VTaXplT3B0aW9uczogbnVtYmVyW107XG4gIHB1YmxpYyBsb25nUmFuZ2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgc2hvcnRSYW5nZUxhYmVsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlKSB7XG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLm9uUmVzZXQpIHtcbiAgICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLm9uUmVzZXQuc3Vic2NyaWJlKChjbGVhcjogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoY2xlYXIpIHtcbiAgICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc05leHRQYWdlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYWdlKys7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgcHJldmlvdXNQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UtLTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNQcmV2aW91c1BhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA+PSAxICYmIHRoaXMucGFnZVNpemUgIT09IDA7XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpIC0gMTtcbiAgICByZXR1cm4gdGhpcy5wYWdlIDwgbnVtYmVyT2ZQYWdlcyAmJiB0aGlzLnBhZ2VTaXplICE9PSAwO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLl9wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemVPcHRpb25zLmxlbmd0aCAhPT0gMCA/IHRoaXMucGFnZVNpemVPcHRpb25zWzBdIDogREVGQVVMVF9QQUdFX1NJWkU7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zID0gdGhpcy5wYWdlU2l6ZU9wdGlvbnMuc2xpY2UoKTtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMuaW5kZXhPZih0aGlzLnBhZ2VTaXplKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2godGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0UGFnZUV2ZW50KCk6IHZvaWQge1xuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcbiAgICB9O1xuICAgIHRoaXMucGFnZUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoZXZlbnQpO1xuICB9XG59XG4iXX0=