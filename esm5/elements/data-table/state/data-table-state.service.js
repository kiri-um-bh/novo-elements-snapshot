/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Helpers } from '../../..';
import { NovoDataTableFilterUtils } from '../services/data-table-filter-utils';
/**
 * @template T
 */
var /**
 * @template T
 */
DataTableState = /** @class */ (function () {
    function DataTableState() {
        this.selectionSource = new Subject();
        this.paginationSource = new Subject();
        this.sortFilterSource = new Subject();
        this.resetSource = new Subject();
        this.expandSource = new Subject();
        this.dataLoaded = new Subject();
        this.sort = undefined;
        this.filter = undefined;
        this.page = 0;
        this.pageSize = undefined;
        this.globalSearch = undefined;
        this.selectedRows = new Map();
        this.expandedRows = new Set();
        this.isForceRefresh = false;
        this.updates = new EventEmitter();
    }
    Object.defineProperty(DataTableState.prototype, "userFiltered", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.filter || this.sort || this.globalSearch || this.outsideFilter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableState.prototype, "userFilteredInternal", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.filter || this.sort || this.globalSearch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableState.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return Array.from(this.selectedRows.values());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} fireUpdate
     * @param {?=} persistUserFilters
     * @return {?}
     */
    DataTableState.prototype.reset = /**
     * @param {?=} fireUpdate
     * @param {?=} persistUserFilters
     * @return {?}
     */
    function (fireUpdate, persistUserFilters) {
        if (fireUpdate === void 0) { fireUpdate = true; }
        if (!persistUserFilters) {
            this.sort = undefined;
            this.globalSearch = undefined;
            this.filter = undefined;
        }
        this.page = 0;
        this.selectedRows.clear();
        this.resetSource.next();
        this.onSortFilterChange();
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    };
    /**
     * @param {?=} fireUpdate
     * @return {?}
     */
    DataTableState.prototype.clearSort = /**
     * @param {?=} fireUpdate
     * @return {?}
     */
    function (fireUpdate) {
        if (fireUpdate === void 0) { fireUpdate = true; }
        this.sort = undefined;
        this.page = 0;
        this.selectedRows.clear();
        this.resetSource.next();
        this.onSortFilterChange();
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    };
    /**
     * @param {?=} fireUpdate
     * @return {?}
     */
    DataTableState.prototype.clearFilter = /**
     * @param {?=} fireUpdate
     * @return {?}
     */
    function (fireUpdate) {
        if (fireUpdate === void 0) { fireUpdate = true; }
        this.filter = undefined;
        this.globalSearch = undefined;
        this.page = 0;
        this.selectedRows.clear();
        this.resetSource.next();
        this.onSortFilterChange();
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    };
    /**
     * @return {?}
     */
    DataTableState.prototype.onSelectionChange = /**
     * @return {?}
     */
    function () {
        this.selectionSource.next();
    };
    /**
     * @param {?=} targetId
     * @return {?}
     */
    DataTableState.prototype.onExpandChange = /**
     * @param {?=} targetId
     * @return {?}
     */
    function (targetId) {
        this.expandSource.next(targetId);
    };
    /**
     * @param {?} isPageSizeChange
     * @param {?} pageSize
     * @return {?}
     */
    DataTableState.prototype.onPaginationChange = /**
     * @param {?} isPageSizeChange
     * @param {?} pageSize
     * @return {?}
     */
    function (isPageSizeChange, pageSize) {
        this.paginationSource.next({ isPageSizeChange: isPageSizeChange, pageSize: pageSize });
    };
    /**
     * @return {?}
     */
    DataTableState.prototype.onSortFilterChange = /**
     * @return {?}
     */
    function () {
        this.sortFilterSource.next({
            sort: this.sort,
            filter: this.filter,
            globalSearch: this.globalSearch,
        });
    };
    /**
     * @param {?} preferences
     * @return {?}
     */
    DataTableState.prototype.setInitialSortFilter = /**
     * @param {?} preferences
     * @return {?}
     */
    function (preferences) {
        if (preferences) {
            if (preferences.sort) {
                this.sort = preferences.sort;
            }
            if (preferences.filter) {
                /** @type {?} */
                var filters = Helpers.convertToArray(preferences.filter);
                filters.forEach(function (filter) {
                    filter.value =
                        filter.selectedOption && filter.type
                            ? NovoDataTableFilterUtils.constructFilter(filter.selectedOption, filter.type)
                            : filter.value;
                });
                this.filter = filters;
            }
        }
    };
    return DataTableState;
}());
/**
 * @template T
 */
export { DataTableState };
if (false) {
    /** @type {?} */
    DataTableState.prototype.selectionSource;
    /** @type {?} */
    DataTableState.prototype.paginationSource;
    /** @type {?} */
    DataTableState.prototype.sortFilterSource;
    /** @type {?} */
    DataTableState.prototype.resetSource;
    /** @type {?} */
    DataTableState.prototype.expandSource;
    /** @type {?} */
    DataTableState.prototype.dataLoaded;
    /** @type {?} */
    DataTableState.prototype.sort;
    /** @type {?} */
    DataTableState.prototype.filter;
    /** @type {?} */
    DataTableState.prototype.page;
    /** @type {?} */
    DataTableState.prototype.pageSize;
    /** @type {?} */
    DataTableState.prototype.globalSearch;
    /** @type {?} */
    DataTableState.prototype.selectedRows;
    /** @type {?} */
    DataTableState.prototype.expandedRows;
    /** @type {?} */
    DataTableState.prototype.outsideFilter;
    /** @type {?} */
    DataTableState.prototype.isForceRefresh;
    /** @type {?} */
    DataTableState.prototype.updates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUUvRTs7OztJQUFBO1FBQ1Msb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWxDLFNBQUksR0FBa0MsU0FBUyxDQUFDO1FBQ2hELFdBQU0sR0FBMEMsU0FBUyxDQUFDO1FBQzFELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUM3QixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUNqQyxpQkFBWSxHQUFtQixJQUFJLEdBQUcsRUFBYSxDQUFDO1FBQ3BELGlCQUFZLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7UUFFOUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsWUFBTyxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztJQXNHM0YsQ0FBQztJQXBHQyxzQkFBSSx3Q0FBWTs7OztRQUFoQjtZ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TSxDQUFDLElBQUksQ0FBQzs0QkFDOUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBeEhELElBd0hDOzs7Ozs7O0lBdkhDLHlDQUF1Qzs7SUFDdkMsMENBQXdDOztJQUN4QywwQ0FBd0M7O0lBQ3hDLHFDQUFtQzs7SUFDbkMsc0NBQW9DOztJQUNwQyxvQ0FBa0M7O0lBRWxDLDhCQUFnRDs7SUFDaEQsZ0NBQTBEOztJQUMxRCw4QkFBaUI7O0lBQ2pCLGtDQUE2Qjs7SUFDN0Isc0NBQWlDOztJQUNqQyxzQ0FBb0Q7O0lBQ3BELHNDQUE4Qzs7SUFDOUMsdUNBQW1COztJQUNuQix3Q0FBZ0M7O0lBRWhDLGlDQUF5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQsIElEYXRhVGFibGVGaWx0ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLic7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTdGF0ZTxUPiB7XG4gIHB1YmxpYyBzZWxlY3Rpb25Tb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcGFnaW5hdGlvblNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBzb3J0RmlsdGVyU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHJlc2V0U291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGV4cGFuZFNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBkYXRhTG9hZGVkID0gbmV3IFN1YmplY3QoKTtcblxuICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSA9IHVuZGVmaW5lZDtcbiAgZmlsdGVyOiBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdID0gdW5kZWZpbmVkO1xuICBwYWdlOiBudW1iZXIgPSAwO1xuICBwYWdlU2l6ZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBnbG9iYWxTZWFyY2g6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgc2VsZWN0ZWRSb3dzOiBNYXA8c3RyaW5nLCBUPiA9IG5ldyBNYXA8c3RyaW5nLCBUPigpO1xuICBleHBhbmRlZFJvd3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIG91dHNpZGVGaWx0ZXI6IGFueTtcbiAgaXNGb3JjZVJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICB1cGRhdGVzOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCB1c2VyRmlsdGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuZmlsdGVyIHx8IHRoaXMuc29ydCB8fCB0aGlzLmdsb2JhbFNlYXJjaCB8fCB0aGlzLm91dHNpZGVGaWx0ZXIpO1xuICB9XG5cbiAgZ2V0IHVzZXJGaWx0ZXJlZEludGVybmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmZpbHRlciB8fCB0aGlzLnNvcnQgfHwgdGhpcy5nbG9iYWxTZWFyY2gpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCk6IFRbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlLCBwZXJzaXN0VXNlckZpbHRlcnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFwZXJzaXN0VXNlckZpbHRlcnMpIHtcbiAgICAgIHRoaXMuc29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZ2xvYmFsU2VhcmNoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnJlc2V0U291cmNlLm5leHQoKTtcbiAgICB0aGlzLm9uU29ydEZpbHRlckNoYW5nZSgpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNvcnQoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIHRoaXMub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIHRoaXMub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0aW9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkV4cGFuZENoYW5nZSh0YXJnZXRJZD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kU291cmNlLm5leHQodGFyZ2V0SWQpO1xuICB9XG5cbiAgcHVibGljIG9uUGFnaW5hdGlvbkNoYW5nZShpc1BhZ2VTaXplQ2hhbmdlOiBib29sZWFuLCBwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdpbmF0aW9uU291cmNlLm5leHQoeyBpc1BhZ2VTaXplQ2hhbmdlLCBwYWdlU2l6ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNvcnRGaWx0ZXJDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0RmlsdGVyU291cmNlLm5leHQoe1xuICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdGlhbFNvcnRGaWx0ZXIocHJlZmVyZW5jZXMpOiB2b2lkIHtcbiAgICBpZiAocHJlZmVyZW5jZXMpIHtcbiAgICAgIGlmIChwcmVmZXJlbmNlcy5zb3J0KSB7XG4gICAgICAgIHRoaXMuc29ydCA9IHByZWZlcmVuY2VzLnNvcnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmVmZXJlbmNlcy5maWx0ZXIpIHtcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHByZWZlcmVuY2VzLmZpbHRlcik7XG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID1cbiAgICAgICAgICAgIGZpbHRlci5zZWxlY3RlZE9wdGlvbiAmJiBmaWx0ZXIudHlwZVxuICAgICAgICAgICAgICA/IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscy5jb25zdHJ1Y3RGaWx0ZXIoZmlsdGVyLnNlbGVjdGVkT3B0aW9uLCBmaWx0ZXIudHlwZSlcbiAgICAgICAgICAgICAgOiBmaWx0ZXIudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlcnM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=