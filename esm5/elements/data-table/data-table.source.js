/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table.source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@angular/cdk/table';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
/**
 * @template T
 */
var /**
 * @template T
 */
DataTableSource = /** @class */ (function (_super) {
    tslib_1.__extends(DataTableSource, _super);
    function DataTableSource(tableService, state, ref) {
        var _this = _super.call(this) || this;
        _this.tableService = tableService;
        _this.state = state;
        _this.ref = ref;
        _this.total = 0;
        _this.currentTotal = 0;
        _this.current = 0;
        _this.loading = false;
        _this.pristine = true;
        _this.totalSet = false;
        return _this;
    }
    Object.defineProperty(DataTableSource.prototype, "totallyEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.total === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSource.prototype, "currentlyEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.current === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableSource.prototype.connect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var displayDataChanges = [this.state.updates];
        return merge.apply(void 0, tslib_1.__spread(displayDataChanges)).pipe(startWith(null), switchMap((/**
         * @return {?}
         */
        function () {
            _this.pristine = false;
            _this.loading = true;
            return _this.tableService.getTableResults(_this.state.sort, _this.state.filter, _this.state.page, _this.state.pageSize, _this.state.globalSearch, _this.state.outsideFilter);
        })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!_this.totalSet || _this.state.isForceRefresh) {
                _this.total = data.total;
                _this.totalSet = true;
                _this.state.isForceRefresh = false;
            }
            _this.currentTotal = data.total;
            _this.current = data.results.length;
            _this.data = data.results;
            // Clear selection
            _this.state.selectedRows.clear();
            _this.state.onSelectionChange();
            // Mark changes
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.ref.markForCheck();
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.loading = false;
                    _this.state.dataLoaded.next();
                    _this.ref.markForCheck();
                }));
            }));
            return data.results;
        })), catchError((/**
         * @param {?} err
         * @param {?} caught
         * @return {?}
         */
        function (err, caught) {
            console.error(err, caught); // tslint: disable-line
            _this.loading = false;
            return of(null);
        })));
    };
    /**
     * @return {?}
     */
    DataTableSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return DataTableSource;
}(DataSource));
/**
 * @template T
 */
export { DataTableSource };
if (false) {
    /** @type {?} */
    DataTableSource.prototype.total;
    /** @type {?} */
    DataTableSource.prototype.currentTotal;
    /** @type {?} */
    DataTableSource.prototype.current;
    /** @type {?} */
    DataTableSource.prototype.loading;
    /** @type {?} */
    DataTableSource.prototype.pristine;
    /** @type {?} */
    DataTableSource.prototype.data;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.totalSet;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.tableService;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.state;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLnNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFjLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3ZFOzs7O0lBQXdDLDJDQUFhO0lBa0JuRCx5QkFBb0IsWUFBa0MsRUFBVSxLQUF3QixFQUFVLEdBQXNCO1FBQXhILFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixrQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBVSxXQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBakJqSCxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUdmLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBWWxDLENBQUM7SUFWRCxzQkFBSSx5Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFNTSxpQ0FBTzs7O0lBQWQ7UUFBQSxpQkE2Q0M7O1lBNUNPLGtCQUFrQixHQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDcEQsT0FBTyxLQUFLLGdDQUFJLGtCQUFrQixHQUFFLElBQUksQ0FDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFNBQVM7OztRQUFDO1lBQ1IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FDdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ2pCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNmLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3pCLENBQUM7UUFDSixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxJQUFxQztZQUN4QyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtnQkFDL0MsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQ25DO1lBQ0QsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3pCLGtCQUFrQjtZQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDL0IsZUFBZTtZQUNmLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLFVBQVU7OztnQkFBQztvQkFDVCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzFCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7Ozs7UUFBQyxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1lBQ25ELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRU0sb0NBQVU7OztJQUFqQixjQUEyQixDQUFDO0lBQzlCLHNCQUFDO0FBQUQsQ0FBQyxBQXRFRCxDQUF3QyxVQUFVLEdBc0VqRDs7Ozs7OztJQXJFQyxnQ0FBaUI7O0lBQ2pCLHVDQUF3Qjs7SUFDeEIsa0NBQW1COztJQUNuQixrQ0FBdUI7O0lBQ3ZCLG1DQUF1Qjs7SUFDdkIsK0JBQWlCOzs7OztJQUVqQixtQ0FBa0M7Ozs7O0lBVXRCLHVDQUEwQzs7Ozs7SUFBRSxnQ0FBZ0M7Ozs7O0lBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IElEYXRhVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVNvdXJjZTxUPiBleHRlbmRzIERhdGFTb3VyY2U8VD4ge1xuICBwdWJsaWMgdG90YWwgPSAwO1xuICBwdWJsaWMgY3VycmVudFRvdGFsID0gMDtcbiAgcHVibGljIGN1cnJlbnQgPSAwO1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgcHJpc3RpbmUgPSB0cnVlO1xuICBwdWJsaWMgZGF0YTogVFtdO1xuXG4gIHByaXZhdGUgdG90YWxTZXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgdG90YWxseUVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvdGFsID09PSAwO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRseUVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogSURhdGFUYWJsZVNlcnZpY2U8VD4sIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkaXNwbGF5RGF0YUNoYW5nZXM6IGFueSA9IFt0aGlzLnN0YXRlLnVwZGF0ZXNdO1xuICAgIHJldHVybiBtZXJnZSguLi5kaXNwbGF5RGF0YUNoYW5nZXMpLnBpcGUoXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnByaXN0aW5lID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlU2VydmljZS5nZXRUYWJsZVJlc3VsdHMoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0LFxuICAgICAgICAgIHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2VTaXplLFxuICAgICAgICAgIHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLFxuICAgICAgICAgIHRoaXMuc3RhdGUub3V0c2lkZUZpbHRlcixcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChkYXRhOiB7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy50b3RhbFNldCB8fCB0aGlzLnN0YXRlLmlzRm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IGRhdGEudG90YWw7XG4gICAgICAgICAgdGhpcy50b3RhbFNldCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5pc0ZvcmNlUmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFRvdGFsID0gZGF0YS50b3RhbDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZGF0YS5yZXN1bHRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICAvLyBDbGVhciBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICAvLyBNYXJrIGNoYW5nZXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YUxvYWRlZC5uZXh0KCk7XG4gICAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVyciwgY2F1Z2h0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLCBjYXVnaHQpOyAvLyB0c2xpbnQ6IGRpc2FibGUtbGluZVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge31cbn1cbiJdfQ==