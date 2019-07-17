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
            if (_this.state.isForceRefresh) {
                _this.loading = true;
            }
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
                    _this.state.dataLoaded.next();
                });
            });
            return data.results;
        }), catchError(function (err, caught) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLnNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQWEsS0FBSyxFQUFFLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLdkU7Ozs7SUFBd0MsMkNBQWE7SUFtQm5ELHlCQUFvQixZQUFrQyxFQUFVLEtBQXdCLEVBQVUsR0FBc0I7UUFBeEgsWUFDRSxpQkFBTyxTQVNSO1FBVm1CLGtCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFVLFdBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFsQmpILFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBSWYsY0FBUSxHQUFZLEtBQUssQ0FBQztRQVloQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNwRCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FB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OztJQUN2QixtQ0FBdUI7O0lBQ3ZCLCtCQUFpQjs7Ozs7SUFDakIscUNBQWlDOzs7OztJQUVqQyxtQ0FBa0M7Ozs7O0lBVXRCLHVDQUEwQzs7Ozs7SUFBRSxnQ0FBZ0M7Ozs7O0lBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBtZXJnZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IElEYXRhVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVNvdXJjZTxUPiBleHRlbmRzIERhdGFTb3VyY2U8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwdWJsaWMgdG90YWwgPSAwO1xuICBwdWJsaWMgY3VycmVudFRvdGFsID0gMDtcbiAgcHVibGljIGN1cnJlbnQgPSAwO1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgcHJpc3RpbmUgPSB0cnVlO1xuICBwdWJsaWMgZGF0YTogVFtdO1xuICBwcml2YXRlIGNvbm5lY3RTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIHRvdGFsU2V0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IHRvdGFsbHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbCA9PT0gMDtcbiAgfVxuXG4gIGdldCBjdXJyZW50bHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50ID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IElEYXRhVGFibGVTZXJ2aWNlPFQ+LCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbm5lY3RTdWIgPSB0aGlzLmNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnRvdGFsU2V0IHx8IHRoaXMuY3VycmVudFRvdGFsID4gdGhpcy50b3RhbCkge1xuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5jdXJyZW50VG90YWw7XG4gICAgICAgIHRoaXMudG90YWxTZXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29ubmVjdFN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkaXNwbGF5RGF0YUNoYW5nZXM6IGFueSA9IFt0aGlzLnN0YXRlLnVwZGF0ZXNdO1xuICAgIHJldHVybiBtZXJnZSguLi5kaXNwbGF5RGF0YUNoYW5nZXMpLnBpcGUoXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnByaXN0aW5lID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YWJsZVNlcnZpY2UuZ2V0VGFibGVSZXN1bHRzKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc29ydCxcbiAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCxcbiAgICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIsXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgoZGF0YTogeyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0ZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHRoaXMudG90YWxTZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnN0YXRlLmlzRm9yY2VSZWZyZXNoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBkYXRhLnJlc3VsdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgIC8vIENsZWFyIHNlbGVjdGlvblxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgICAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIC8vIE1hcmsgY2hhbmdlc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YUxvYWRlZC5uZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIsIGNhdWdodCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyciwgY2F1Z2h0KTsgLy8gdHNsaW50OiBkaXNhYmxlLWxpbmVcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge31cbn1cbiJdfQ==