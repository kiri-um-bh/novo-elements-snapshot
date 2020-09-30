/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS90YWJsZS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFFOUMsMENBU0M7Ozs7Ozs7Ozs7O0lBUkMsMEhBTytDOzs7Ozs7QUFHakQ7Ozs7O0lBQUE7SUFTQSxDQUFDO0lBQUQsaUNBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFSQyxnSUFPK0M7Ozs7O0FBR2pEOzs7O0lBQ0Usb0NBQW9CLElBQWM7UUFBZCxxQkFBQSxFQUFBLFNBQWM7UUFBZCxTQUFJLEdBQUosSUFBSSxDQUFVO0lBQUcsQ0FBQzs7Ozs7Ozs7OztJQUUvQixvREFBZTs7Ozs7Ozs7O0lBQXRCLFVBQ0UsSUFBeUQsRUFDekQsTUFBMkQsRUFDM0QsSUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsWUFBcUIsRUFDckIsYUFBbUI7UUFIbkIscUJBQUEsRUFBQSxRQUFnQjs7WUFLWixHQUFHLEdBQVEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTTs7OztnQkFBQyxVQUFDLElBQUksSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENB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QUFDLEtBQUssQ0FBQyxRQUFRLEVBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FDekIsQ0FBQztRQUNKLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLElBQXFDO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ25DLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLFVBQUMsS0FBSztZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7WUFDN0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSw0Q0FBVTs7O0lBQWpCLGNBQTJCLENBQUM7SUFDOUIsOEJBQUM7QUFBRCxDQUFDLEFBcERELENBQWdELFVBQVUsR0FvRHpEOzs7Ozs7O0lBbkRDLHdDQUFpQjs7SUFDakIsMENBQW1COztJQUNuQiwwQ0FBdUI7O0lBQ3ZCLDJDQUF1Qjs7Ozs7SUFVWCwrQ0FBNkM7Ozs7O0lBQUUsd0NBQXFDOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5VGFibGVTZXJ2aWNlPFQ+IHtcbiAgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBmaWx0ZXI6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBwYWdlOiBudW1iZXIsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9Pjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbW90ZUFjdGl2aXR5VGFibGVTZXJ2aWNlPFQ+IGltcGxlbWVudHMgQWN0aXZpdHlUYWJsZVNlcnZpY2U8VD4ge1xuICBhYnN0cmFjdCBnZXRUYWJsZVJlc3VsdHMoXG4gICAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIHBhZ2U6IG51bWJlcixcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGdsb2JhbFNlYXJjaD86IHN0cmluZyxcbiAgICBvdXRzaWRlRmlsdGVyPzogYW55LFxuICApOiBPYnNlcnZhYmxlPHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0+O1xufVxuXG5leHBvcnQgY2xhc3MgU3RhdGljQWN0aXZpdHlUYWJsZVNlcnZpY2U8VD4gaW1wbGVtZW50cyBBY3Rpdml0eVRhYmxlU2VydmljZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVFtdID0gW10pIHt9XG5cbiAgcHVibGljIGdldFRhYmxlUmVzdWx0cyhcbiAgICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgZmlsdGVyOiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgcGFnZTogbnVtYmVyID0gMCxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGdsb2JhbFNlYXJjaD86IHN0cmluZyxcbiAgICBvdXRzaWRlRmlsdGVyPzogYW55LFxuICApOiBPYnNlcnZhYmxlPHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0+IHtcbiAgICBsZXQgcmV0OiBUW10gPSBIZWxwZXJzLmRlZXBDbG9uZSh0aGlzLmRhdGEpO1xuICAgIGlmIChyZXQubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAoZ2xvYmFsU2VhcmNoKSB7XG4gICAgICAgIHJldCA9IHJldC5maWx0ZXIoKGl0ZW0pID0+IE9iamVjdC5rZXlzKGl0ZW0pLnNvbWUoKGtleSkgPT4gYCR7aXRlbVtrZXldfWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhnbG9iYWxTZWFyY2gudG9Mb3dlckNhc2UoKSkpKTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5pc1N0cmluZyhmaWx0ZXIudmFsdWUpID8gZmlsdGVyLnZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgOiBmaWx0ZXIudmFsdWU7XG4gICAgICAgIHJldCA9IHJldC5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGZpbHRlci5pZCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgIHJldCA9IHJldC5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoc29ydC5pZCwgc29ydC52YWx1ZSA9PT0gJ2Rlc2MnKSk7XG4gICAgICB9XG4gICAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhwYWdlKSAmJiAhSGVscGVycy5pc0JsYW5rKHBhZ2VTaXplKSkge1xuICAgICAgICByZXQgPSByZXQuc2xpY2UocGFnZSAqIHBhZ2VTaXplLCAocGFnZSArIDEpICogcGFnZVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2YoeyByZXN1bHRzOiByZXQsIHRvdGFsOiB0aGlzLmRhdGEubGVuZ3RoIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpdml0eVRhYmxlRGF0YVNvdXJjZTxUPiBleHRlbmRzIERhdGFTb3VyY2U8VD4ge1xuICBwdWJsaWMgdG90YWwgPSAwO1xuICBwdWJsaWMgY3VycmVudCA9IDA7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBwcmlzdGluZSA9IHRydWU7XG5cbiAgZ2V0IHRvdGFsbHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbCA9PT0gMDtcbiAgfVxuXG4gIGdldCBjdXJyZW50bHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50ID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IEFjdGl2aXR5VGFibGVTZXJ2aWNlPFQ+LCBwcml2YXRlIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGRpc3BsYXlEYXRhQ2hhbmdlczogYW55ID0gW3RoaXMuc3RhdGUudXBkYXRlc107XG4gICAgcmV0dXJuIG1lcmdlKC4uLmRpc3BsYXlEYXRhQ2hhbmdlcykucGlwZShcbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVTZXJ2aWNlLmdldFRhYmxlUmVzdWx0cyhcbiAgICAgICAgICB0aGlzLnN0YXRlLnNvcnQsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgIHRoaXMuc3RhdGUucGFnZVNpemUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyLFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKGRhdGE6IHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBkYXRhLnJlc3VsdHMubGVuZ3RoO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyB0c2xpbnQ6IGRpc2FibGUtbGluZVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge31cbn1cbiJdfQ==