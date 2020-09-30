/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLnNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQWMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLdkU7Ozs7SUFBd0MsMkNBQWE7SUFrQm5ELHlCQUFvQixZQUFrQyxFQUFVLEtBQXdCLEVBQVUsR0FBc0I7UUFBeEgsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGtCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFVLFdBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQmpILFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBR2YsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUFZbEMsQ0FBQztJQVZELHNCQUFJLHlDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7OztJQU1NLGlDQUFPOzs7SUFBZDtRQUFBLGlCQTZDQzs7WUE1Q08sa0JBQWtCLEdBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNwRCxPQUFPLEtBQUssZ0NBQUksa0JBQWtCLEdBQUUsSUFBSSxDQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUzs7O1FBQUM7WUFDUixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDZixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDakIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FDekIsQ0FBQztRQUNKLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLElBQXFDO1lBQ3hDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO2dCQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7YUFDbkM7WUFDRCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNuQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDekIsa0JBQWtCO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMvQixlQUFlO1lBQ2YsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsVUFBVTs7O2dCQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDN0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDLEVBQUMsRUFDRixVQUFVOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7WUFDbkQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSxvQ0FBVTs7O0lBQWpCLGNBQTJCLENBQUM7SUFDOUIsc0JBQUM7QUFBRCxDQUFDLEFBdEVELENBQXdDLFVBQVUsR0FzRWpEOzs7Ozs7O0lBckVDLGdDQUFpQjs7SUFDakIsdUNBQXdCOztJQUN4QixrQ0FBbUI7O0lBQ25CLGtDQUF1Qjs7SUFDdkIsbUNBQXVCOztJQUN2QiwrQkFBaUI7Ozs7O0lBRWpCLG1DQUFrQzs7Ozs7SUFVdEIsdUNBQTBDOzs7OztJQUFFLGdDQUFnQzs7Ozs7SUFBRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtZXJnZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSURhdGFUYWJsZVNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlU291cmNlPFQ+IGV4dGVuZHMgRGF0YVNvdXJjZTxUPiB7XG4gIHB1YmxpYyB0b3RhbCA9IDA7XG4gIHB1YmxpYyBjdXJyZW50VG90YWwgPSAwO1xuICBwdWJsaWMgY3VycmVudCA9IDA7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBwcmlzdGluZSA9IHRydWU7XG4gIHB1YmxpYyBkYXRhOiBUW107XG5cbiAgcHJpdmF0ZSB0b3RhbFNldDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCB0b3RhbGx5RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG90YWwgPT09IDA7XG4gIH1cblxuICBnZXQgY3VycmVudGx5RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudCA9PT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBJRGF0YVRhYmxlU2VydmljZTxUPiwgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRpc3BsYXlEYXRhQ2hhbmdlczogYW55ID0gW3RoaXMuc3RhdGUudXBkYXRlc107XG4gICAgcmV0dXJuIG1lcmdlKC4uLmRpc3BsYXlEYXRhQ2hhbmdlcykucGlwZShcbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVTZXJ2aWNlLmdldFRhYmxlUmVzdWx0cyhcbiAgICAgICAgICB0aGlzLnN0YXRlLnNvcnQsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgIHRoaXMuc3RhdGUucGFnZVNpemUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyLFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKGRhdGE6IHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnRvdGFsU2V0IHx8IHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gZGF0YS50b3RhbDtcbiAgICAgICAgICB0aGlzLnRvdGFsU2V0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0YXRlLmlzRm9yY2VSZWZyZXNoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBkYXRhLnJlc3VsdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgIC8vIENsZWFyIHNlbGVjdGlvblxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgICAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIC8vIE1hcmsgY2hhbmdlc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhTG9hZGVkLm5leHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cztcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyLCBjYXVnaHQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIsIGNhdWdodCk7IC8vIHRzbGludDogZGlzYWJsZS1saW5lXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QoKTogdm9pZCB7fVxufVxuIl19