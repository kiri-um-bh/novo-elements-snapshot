/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/table-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@angular/cdk/table';
import { of, merge } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { Helpers } from '../../utils/Helpers';
/**
 * @record
 * @template T
 */
export function ActivityTableService() { }
if (false) {
    /**
     * @param {?} sort
     * @param {?} filter
     * @param {?} page
     * @param {?} pageSize
     * @param {?=} globalSearch
     * @param {?=} outsideFilter
     * @return {?}
     */
    ActivityTableService.prototype.getTableResults = function (sort, filter, page, pageSize, globalSearch, outsideFilter) { };
}
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
RemoteActivityTableService = /** @class */ (function () {
    function RemoteActivityTableService() {
    }
    return RemoteActivityTableService;
}());
/**
 * @abstract
 * @template T
 */
export { RemoteActivityTableService };
if (false) {
    /**
     * @abstract
     * @param {?} sort
     * @param {?} filter
     * @param {?} page
     * @param {?} pageSize
     * @param {?=} globalSearch
     * @param {?=} outsideFilter
     * @return {?}
     */
    RemoteActivityTableService.prototype.getTableResults = function (sort, filter, page, pageSize, globalSearch, outsideFilter) { };
}
/**
 * @template T
 */
var /**
 * @template T
 */
StaticActivityTableService = /** @class */ (function () {
    function StaticActivityTableService(data) {
        if (data === void 0) { data = []; }
        this.data = data;
    }
    /**
     * @param {?} sort
     * @param {?} filter
     * @param {?=} page
     * @param {?=} pageSize
     * @param {?=} globalSearch
     * @param {?=} outsideFilter
     * @return {?}
     */
    StaticActivityTableService.prototype.getTableResults = /**
     * @param {?} sort
     * @param {?} filter
     * @param {?=} page
     * @param {?=} pageSize
     * @param {?=} globalSearch
     * @param {?=} outsideFilter
     * @return {?}
     */
    function (sort, filter, page, pageSize, globalSearch, outsideFilter) {
        if (page === void 0) { page = 0; }
        /** @type {?} */
        var ret = Helpers.deepClone(this.data);
        if (ret.length !== 0) {
            if (globalSearch) {
                ret = ret.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return Object.keys(item).some((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return ("" + item[key]).toLowerCase().includes(globalSearch.toLowerCase()); })); }));
            }
            if (filter) {
                /** @type {?} */
                var value = Helpers.isString(filter.value) ? filter.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : filter.value;
                ret = ret.filter(Helpers.filterByField(filter.id, value));
            }
            if (sort) {
                ret = ret.sort(Helpers.sortByField(sort.id, sort.value === 'desc'));
            }
            if (!Helpers.isBlank(page) && !Helpers.isBlank(pageSize)) {
                ret = ret.slice(page * pageSize, (page + 1) * pageSize);
            }
        }
        return of({ results: ret, total: this.data.length });
    };
    return StaticActivityTableService;
}());
/**
 * @template T
 */
export { StaticActivityTableService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StaticActivityTableService.prototype.data;
}
/**
 * @template T
 */
var /**
 * @template T
 */
ActivityTableDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(ActivityTableDataSource, _super);
    function ActivityTableDataSource(tableService, state, ref) {
        var _this = _super.call(this) || this;
        _this.tableService = tableService;
        _this.state = state;
        _this.ref = ref;
        _this.total = 0;
        _this.current = 0;
        _this.loading = false;
        _this.pristine = true;
        return _this;
    }
    Object.defineProperty(ActivityTableDataSource.prototype, "totallyEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.total === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityTableDataSource.prototype, "currentlyEmpty", {
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
    ActivityTableDataSource.prototype.connect = /**
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
            _this.loading = false;
            _this.total = data.total;
            _this.current = data.results.length;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.ref.markForCheck();
            }));
            return data.results;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.error(error); // tslint: disable-line
            _this.loading = false;
            return of(null);
        })));
    };
    /**
     * @return {?}
     */
    ActivityTableDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ActivityTableDataSource;
}(DataSource));
/**
 * @template T
 */
export { ActivityTableDataSource };
if (false) {
    /** @type {?} */
    ActivityTableDataSource.prototype.total;
    /** @type {?} */
    ActivityTableDataSource.prototype.current;
    /** @type {?} */
    ActivityTableDataSource.prototype.loading;
    /** @type {?} */
    ActivityTableDataSource.prototype.pristine;
    /**
     * @type {?}
     * @private
     */
    ActivityTableDataSource.prototype.tableService;
    /**
     * @type {?}
     * @private
     */
    ActivityTableDataSource.prototype.state;
    /**
     * @type {?}
     * @private
     */
    ActivityTableDataSource.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS90YWJsZS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRTlDLDBDQVNDOzs7Ozs7Ozs7OztJQVJDLDBIQU8rQzs7Ozs7O0FBR2pEOzs7OztJQUFBO0lBU0EsQ0FBQztJQUFELGlDQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUkMsZ0lBTytDOzs7OztBQUdqRDs7OztJQUNFLG9DQUFvQixJQUFjO1FBQWQscUJBQUEsRUFBQSxTQUFjO1FBQWQsU0FBSSxHQUFKLElBQUksQ0FBVTtJQUFHLENBQUM7Ozs7Ozs7Ozs7SUFFL0Isb0RBQWU7Ozs7Ozs7OztJQUF0QixVQUNFLElBQXlELEVBQ3pELE1BQTJELEVBQzNELElBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFlBQXFCLEVBQ3JCLGFBQW1CO1FBSG5CLHFCQUFBLEVBQUEsUUFBZ0I7O1lBS1osR0FBRyxHQUFRLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksWUFBWSxFQUFFO2dCQUNoQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxD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Q0FBQyxLQUFLLENBQUMsUUFBUSxFQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3pCLENBQUM7UUFDSixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxJQUFxQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNuQyxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1lBQzdDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRU0sNENBQVU7OztJQUFqQixjQUEyQixDQUFDO0lBQzlCLDhCQUFDO0FBQUQsQ0FBQyxBQXBERCxDQUFnRCxVQUFVLEdBb0R6RDs7Ozs7OztJQW5EQyx3Q0FBaUI7O0lBQ2pCLDBDQUFtQjs7SUFDbkIsMENBQXVCOztJQUN2QiwyQ0FBdUI7Ozs7O0lBVVgsK0NBQTZDOzs7OztJQUFFLHdDQUFxQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eVRhYmxlU2VydmljZTxUPiB7XG4gIGdldFRhYmxlUmVzdWx0cyhcbiAgICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgZmlsdGVyOiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgZ2xvYmFsU2VhcmNoPzogc3RyaW5nLFxuICAgIG91dHNpZGVGaWx0ZXI/OiBhbnksXG4gICk6IE9ic2VydmFibGU8eyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfT47XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW1vdGVBY3Rpdml0eVRhYmxlU2VydmljZTxUPiBpbXBsZW1lbnRzIEFjdGl2aXR5VGFibGVTZXJ2aWNlPFQ+IHtcbiAgYWJzdHJhY3QgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBmaWx0ZXI6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBwYWdlOiBudW1iZXIsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRpY0FjdGl2aXR5VGFibGVTZXJ2aWNlPFQ+IGltcGxlbWVudHMgQWN0aXZpdHlUYWJsZVNlcnZpY2U8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFRbXSA9IFtdKSB7fVxuXG4gIHB1YmxpYyBnZXRUYWJsZVJlc3VsdHMoXG4gICAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIHBhZ2U6IG51bWJlciA9IDAsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9PiB7XG4gICAgbGV0IHJldDogVFtdID0gSGVscGVycy5kZWVwQ2xvbmUodGhpcy5kYXRhKTtcbiAgICBpZiAocmV0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKGdsb2JhbFNlYXJjaCkge1xuICAgICAgICByZXQgPSByZXQuZmlsdGVyKChpdGVtKSA9PiBPYmplY3Qua2V5cyhpdGVtKS5zb21lKChrZXkpID0+IGAke2l0ZW1ba2V5XX1gLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZ2xvYmFsU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gSGVscGVycy5pc1N0cmluZyhmaWx0ZXIudmFsdWUpID8gZmlsdGVyLnZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgOiBmaWx0ZXIudmFsdWU7XG4gICAgICAgIHJldCA9IHJldC5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGZpbHRlci5pZCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgIHJldCA9IHJldC5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoc29ydC5pZCwgc29ydC52YWx1ZSA9PT0gJ2Rlc2MnKSk7XG4gICAgICB9XG4gICAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhwYWdlKSAmJiAhSGVscGVycy5pc0JsYW5rKHBhZ2VTaXplKSkge1xuICAgICAgICByZXQgPSByZXQuc2xpY2UocGFnZSAqIHBhZ2VTaXplLCAocGFnZSArIDEpICogcGFnZVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2YoeyByZXN1bHRzOiByZXQsIHRvdGFsOiB0aGlzLmRhdGEubGVuZ3RoIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpdml0eVRhYmxlRGF0YVNvdXJjZTxUPiBleHRlbmRzIERhdGFTb3VyY2U8VD4ge1xuICBwdWJsaWMgdG90YWwgPSAwO1xuICBwdWJsaWMgY3VycmVudCA9IDA7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBwcmlzdGluZSA9IHRydWU7XG5cbiAgZ2V0IHRvdGFsbHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbCA9PT0gMDtcbiAgfVxuXG4gIGdldCBjdXJyZW50bHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50ID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IEFjdGl2aXR5VGFibGVTZXJ2aWNlPFQ+LCBwcml2YXRlIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGRpc3BsYXlEYXRhQ2hhbmdlczogYW55ID0gW3RoaXMuc3RhdGUudXBkYXRlc107XG4gICAgcmV0dXJuIG1lcmdlKC4uLmRpc3BsYXlEYXRhQ2hhbmdlcykucGlwZShcbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVTZXJ2aWNlLmdldFRhYmxlUmVzdWx0cyhcbiAgICAgICAgICB0aGlzLnN0YXRlLnNvcnQsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgIHRoaXMuc3RhdGUucGFnZVNpemUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyLFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKGRhdGE6IHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBkYXRhLnJlc3VsdHMubGVuZ3RoO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyB0c2xpbnQ6IGRpc2FibGUtbGluZVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge31cbn1cbiJdfQ==