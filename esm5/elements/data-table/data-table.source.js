/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        _this.connectSub = _this.connect().subscribe(function () {
            if (!_this.totalSet || _this.currentTotal > _this.total) {
                _this.total = _this.currentTotal;
                _this.totalSet = true;
            }
            _this.loading = false;
            _this.ref.markForCheck();
        });
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
    DataTableSource.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.connectSub.unsubscribe();
    };
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
        return merge.apply(void 0, tslib_1.__spread(displayDataChanges)).pipe(startWith(null), switchMap(function () {
            _this.pristine = false;
            _this.loading = true;
            return _this.tableService.getTableResults(_this.state.sort, _this.state.filter, _this.state.page, _this.state.pageSize, _this.state.globalSearch, _this.state.outsideFilter);
        }), map(function (data) {
            if (_this.state.isForceRefresh) {
                _this.totalSet = false;
                _this.state.isForceRefresh = false;
            }
            _this.currentTotal = data.total;
            _this.current = data.results.length;
            _this.data = data.results;
            // Clear selection
            _this.state.selectedRows.clear();
            _this.state.onSelectionChange();
            // Mark changes
            setTimeout(function () {
                _this.ref.markForCheck();
                setTimeout(function () {
                    _this.loading = false;
                    _this.state.dataLoaded.next();
                });
            });
            return data.results;
        }), catchError(function (err, caught) {
            _this.loading = false;
            console.error(err, caught); // tslint: disable-line
            return of(null);
        }));
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
    DataTableSource.prototype.connectSub;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLnNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQWMsS0FBSyxFQUFFLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3ZFOzs7O0lBQXdDLDJDQUFhO0lBbUJuRCx5QkFBb0IsWUFBa0MsRUFBVSxLQUF3QixFQUFVLEdBQXNCO1FBQXhILFlBQ0UsaUJBQU8sU0FTUjtRQVZtQixrQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBVSxXQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEJqSCxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUlmLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFZaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0QjtZQUNELEtBQUksQ0FBQyxPQUFPLEdB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O0lBQ3hCLGtDQUFtQjs7SUFDbkIsa0NBQXVCOztJQUN2QixtQ0FBdUI7O0lBQ3ZCLCtCQUFpQjs7Ozs7SUFDakIscUNBQWlDOzs7OztJQUVqQyxtQ0FBa0M7Ozs7O0lBVXRCLHVDQUEwQzs7Ozs7SUFBRSxnQ0FBZ0M7Ozs7O0lBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtZXJnZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTb3VyY2U8VD4gZXh0ZW5kcyBEYXRhU291cmNlPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIHRvdGFsID0gMDtcbiAgcHVibGljIGN1cnJlbnRUb3RhbCA9IDA7XG4gIHB1YmxpYyBjdXJyZW50ID0gMDtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHByaXN0aW5lID0gdHJ1ZTtcbiAgcHVibGljIGRhdGE6IFRbXTtcbiAgcHJpdmF0ZSBjb25uZWN0U3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSB0b3RhbFNldDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCB0b3RhbGx5RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG90YWwgPT09IDA7XG4gIH1cblxuICBnZXQgY3VycmVudGx5RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudCA9PT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBJRGF0YVRhYmxlU2VydmljZTxUPiwgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25uZWN0U3ViID0gdGhpcy5jb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy50b3RhbFNldCB8fCB0aGlzLmN1cnJlbnRUb3RhbCA+IHRoaXMudG90YWwpIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMuY3VycmVudFRvdGFsO1xuICAgICAgICB0aGlzLnRvdGFsU2V0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbm5lY3RTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGlzcGxheURhdGFDaGFuZ2VzOiBhbnkgPSBbdGhpcy5zdGF0ZS51cGRhdGVzXTtcbiAgICByZXR1cm4gbWVyZ2UoLi4uZGlzcGxheURhdGFDaGFuZ2VzKS5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZVNlcnZpY2UuZ2V0VGFibGVSZXN1bHRzKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc29ydCxcbiAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCxcbiAgICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIsXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgoZGF0YTogeyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0ZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHRoaXMudG90YWxTZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnN0YXRlLmlzRm9yY2VSZWZyZXNoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBkYXRhLnJlc3VsdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgIC8vIENsZWFyIHNlbGVjdGlvblxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgICAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIC8vIE1hcmsgY2hhbmdlc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhTG9hZGVkLm5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVyciwgY2F1Z2h0KSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyciwgY2F1Z2h0KTsgLy8gdHNsaW50OiBkaXNhYmxlLWxpbmVcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge31cbn1cbiJdfQ==