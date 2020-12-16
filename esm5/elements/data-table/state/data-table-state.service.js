/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/state/data-table-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Helpers } from '../../../utils/Helpers';
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
        this.advancedFilter = undefined;
        this.isForceRefresh = false;
        this.updates = new EventEmitter();
    }
    Object.defineProperty(DataTableState.prototype, "userFiltered", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.filter || this.sort || this.globalSearch || this.outsideFilter || this.advancedFilter);
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
                filters.forEach((/**
                 * @param {?} filter
                 * @return {?}
                 */
                function (filter) {
                    filter.value =
                        filter.selectedOption && filter.type
                            ? NovoDataTableFilterUtils.constructFilter(filter.selectedOption, filter.type)
                            : filter.value;
                }));
                this.filter = filters;
            }
            if (preferences.advancedFilter) {
                /** @type {?} */
                var advancedFilters = Helpers.convertToArray(preferences.advancedFilter);
                advancedFilters.forEach((/**
                 * @param {?} filter
                 * @return {?}
                 */
                function (filter) {
                    filter.value =
                        filter.selectedOption && filter.type
                            ? NovoDataTableFilterUtils.constructFilter(filter.selectedOption, filter.type)
                            : filter.value;
                }));
                this.advancedFilter = advancedFilters;
            }
            if (preferences.globalSearch) {
                this.globalSearch = preferences.globalSearch;
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
    DataTableState.prototype.advancedFilter;
    /** @type {?} */
    DataTableState.prototype.isForceRefresh;
    /** @type {?} */
    DataTableState.prototype.updates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUUvRTs7OztJQUFBO1FBQ1Msb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWxDLFNBQUksR0FBbUIsU0FBUyxDQUFDO1FBQ2pDLFdBQU0sR0FBMEMsU0FBUyxDQUFDO1FBQzFELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUM3QixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUNqQyxpQkFBWSxHQUFtQixJQUFJLEdBQUcsRUFBYSxDQUFDO1FBQ3BELGlCQUFZLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7UUFFOUMsbUJBQWMsR0FBdUIsU0FBUyxDQUFDO1FBQy9DLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLFlBQU8sR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7SUFxSDNGLENB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QUFnQzs7SUFFaEMsaUNBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDaGFuZ2VFdmVudCwgSURhdGFUYWJsZUZpbHRlciwgSURhdGFUYWJsZVNvcnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscyB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZmlsdGVyLXV0aWxzJztcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVN0YXRlPFQ+IHtcbiAgcHVibGljIHNlbGVjdGlvblNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBwYWdpbmF0aW9uU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHNvcnRGaWx0ZXJTb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcmVzZXRTb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgZXhwYW5kU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGRhdGFMb2FkZWQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIHNvcnQ6IElEYXRhVGFibGVTb3J0ID0gdW5kZWZpbmVkO1xuICBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10gPSB1bmRlZmluZWQ7XG4gIHBhZ2U6IG51bWJlciA9IDA7XG4gIHBhZ2VTaXplOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIGdsb2JhbFNlYXJjaDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWxlY3RlZFJvd3M6IE1hcDxzdHJpbmcsIFQ+ID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gIGV4cGFuZGVkUm93czogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgb3V0c2lkZUZpbHRlcjogYW55O1xuICBhZHZhbmNlZEZpbHRlcjogSURhdGFUYWJsZUZpbHRlcltdID0gdW5kZWZpbmVkO1xuICBpc0ZvcmNlUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHVwZGF0ZXM6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IHVzZXJGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5maWx0ZXIgfHwgdGhpcy5zb3J0IHx8IHRoaXMuZ2xvYmFsU2VhcmNoIHx8IHRoaXMub3V0c2lkZUZpbHRlciB8fCB0aGlzLmFkdmFuY2VkRmlsdGVyKTtcbiAgfVxuXG4gIGdldCB1c2VyRmlsdGVyZWRJbnRlcm5hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5maWx0ZXIgfHwgdGhpcy5zb3J0IHx8IHRoaXMuZ2xvYmFsU2VhcmNoKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBUW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRSb3dzLnZhbHVlcygpKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldChmaXJlVXBkYXRlOiBib29sZWFuID0gdHJ1ZSwgcGVyc2lzdFVzZXJGaWx0ZXJzPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghcGVyc2lzdFVzZXJGaWx0ZXJzKSB7XG4gICAgICB0aGlzLnNvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmdsb2JhbFNlYXJjaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgdGhpcy5yZXNldFNvdXJjZS5uZXh0KCk7XG4gICAgdGhpcy5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgICBpZiAoZmlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVzLmVtaXQoe1xuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTb3J0KGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnJlc2V0U291cmNlLm5leHQoKTtcbiAgICB0aGlzLm9uU29ydEZpbHRlckNoYW5nZSgpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcihmaXJlVXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnJlc2V0U291cmNlLm5leHQoKTtcbiAgICB0aGlzLm9uU29ydEZpbHRlckNoYW5nZSgpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGlvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgb25FeHBhbmRDaGFuZ2UodGFyZ2V0SWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZFNvdXJjZS5uZXh0KHRhcmdldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBvblBhZ2luYXRpb25DaGFuZ2UoaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbiwgcGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFnaW5hdGlvblNvdXJjZS5uZXh0KHsgaXNQYWdlU2l6ZUNoYW5nZSwgcGFnZVNpemUgfSk7XG4gIH1cblxuICBwdWJsaWMgb25Tb3J0RmlsdGVyQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc29ydEZpbHRlclNvdXJjZS5uZXh0KHtcbiAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldEluaXRpYWxTb3J0RmlsdGVyKHByZWZlcmVuY2VzKTogdm9pZCB7XG4gICAgaWYgKHByZWZlcmVuY2VzKSB7XG4gICAgICBpZiAocHJlZmVyZW5jZXMuc29ydCkge1xuICAgICAgICB0aGlzLnNvcnQgPSBwcmVmZXJlbmNlcy5zb3J0O1xuICAgICAgfVxuXG4gICAgICBpZiAocHJlZmVyZW5jZXMuZmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHByZWZlcmVuY2VzLmZpbHRlcik7XG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID1cbiAgICAgICAgICAgIGZpbHRlci5zZWxlY3RlZE9wdGlvbiAmJiBmaWx0ZXIudHlwZVxuICAgICAgICAgICAgICA/IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscy5jb25zdHJ1Y3RGaWx0ZXIoZmlsdGVyLnNlbGVjdGVkT3B0aW9uLCBmaWx0ZXIudHlwZSlcbiAgICAgICAgICAgICAgOiBmaWx0ZXIudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlcnM7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmVmZXJlbmNlcy5hZHZhbmNlZEZpbHRlcikge1xuICAgICAgICBjb25zdCBhZHZhbmNlZEZpbHRlcnMgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHByZWZlcmVuY2VzLmFkdmFuY2VkRmlsdGVyKTtcbiAgICAgICAgYWR2YW5jZWRGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9XG4gICAgICAgICAgICBmaWx0ZXIuc2VsZWN0ZWRPcHRpb24gJiYgZmlsdGVyLnR5cGVcbiAgICAgICAgICAgICAgPyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMuY29uc3RydWN0RmlsdGVyKGZpbHRlci5zZWxlY3RlZE9wdGlvbiwgZmlsdGVyLnR5cGUpXG4gICAgICAgICAgICAgIDogZmlsdGVyLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZHZhbmNlZEZpbHRlciA9IGFkdmFuY2VkRmlsdGVycztcbiAgICAgIH1cblxuICAgICAgaWYgKHByZWZlcmVuY2VzLmdsb2JhbFNlYXJjaCkge1xuICAgICAgICB0aGlzLmdsb2JhbFNlYXJjaCA9IHByZWZlcmVuY2VzLmdsb2JhbFNlYXJjaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==