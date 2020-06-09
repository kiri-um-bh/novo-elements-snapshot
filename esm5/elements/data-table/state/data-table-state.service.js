import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Helpers } from '../../../utils/Helpers';
import { NovoDataTableFilterUtils } from '../services/data-table-filter-utils';
import * as i0 from "@angular/core";
var DataTableState = /** @class */ (function () {
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
        get: function () {
            return !!(this.filter || this.sort || this.globalSearch || this.outsideFilter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableState.prototype, "userFilteredInternal", {
        get: function () {
            return !!(this.filter || this.sort || this.globalSearch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableState.prototype, "selected", {
        get: function () {
            return Array.from(this.selectedRows.values());
        },
        enumerable: true,
        configurable: true
    });
    DataTableState.prototype.reset = function (fireUpdate, persistUserFilters) {
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
    DataTableState.prototype.clearSort = function (fireUpdate) {
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
    DataTableState.prototype.clearFilter = function (fireUpdate) {
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
    DataTableState.prototype.onSelectionChange = function () {
        this.selectionSource.next();
    };
    DataTableState.prototype.onExpandChange = function (targetId) {
        this.expandSource.next(targetId);
    };
    DataTableState.prototype.onPaginationChange = function (isPageSizeChange, pageSize) {
        this.paginationSource.next({ isPageSizeChange: isPageSizeChange, pageSize: pageSize });
    };
    DataTableState.prototype.onSortFilterChange = function () {
        this.sortFilterSource.next({
            sort: this.sort,
            filter: this.filter,
            globalSearch: this.globalSearch,
        });
    };
    DataTableState.prototype.setInitialSortFilter = function (preferences) {
        if (preferences) {
            if (preferences.sort) {
                this.sort = preferences.sort;
            }
            if (preferences.filter) {
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
    DataTableState.ɵfac = function DataTableState_Factory(t) { return new (t || DataTableState)(); };
    DataTableState.ɵprov = i0.ɵɵdefineInjectable({ token: DataTableState, factory: DataTableState.ɵfac });
    return DataTableState;
}());
export { DataTableState };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableState, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUUvRTtJQUFBO1FBRVMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWxDLFNBQUksR0FBbUIsU0FBUyxDQUFDO1FBQ2pDLFdBQU0sR0FBMEMsU0FBUyxDQUFDO1FBQzFELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUM3QixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUNqQyxpQkFBWSxHQUFtQixJQUFJLEdBQUcsRUFBYSxDQUFDO1FBQ3BELGlCQUFZLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7UUFFOUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsWUFBTyxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztLQXNHMUY7SUFwR0Msc0JBQUksd0NBQVk7YUFBaEI7WUFDRSxP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ckIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7Z0ZBdkhVLGNBQWM7MERBQWQsY0FBYyxXQUFkLGNBQWM7eUJBUjNCO0NBZ0lDLEFBekhELElBeUhDO1NBeEhZLGNBQWM7a0RBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDaGFuZ2VFdmVudCwgSURhdGFUYWJsZUZpbHRlciwgSURhdGFUYWJsZVNvcnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscyB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZmlsdGVyLXV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVN0YXRlPFQ+IHtcbiAgcHVibGljIHNlbGVjdGlvblNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBwYWdpbmF0aW9uU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHNvcnRGaWx0ZXJTb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcmVzZXRTb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgZXhwYW5kU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGRhdGFMb2FkZWQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIHNvcnQ6IElEYXRhVGFibGVTb3J0ID0gdW5kZWZpbmVkO1xuICBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10gPSB1bmRlZmluZWQ7XG4gIHBhZ2U6IG51bWJlciA9IDA7XG4gIHBhZ2VTaXplOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIGdsb2JhbFNlYXJjaDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWxlY3RlZFJvd3M6IE1hcDxzdHJpbmcsIFQ+ID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gIGV4cGFuZGVkUm93czogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgb3V0c2lkZUZpbHRlcjogYW55O1xuICBpc0ZvcmNlUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHVwZGF0ZXM6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IHVzZXJGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5maWx0ZXIgfHwgdGhpcy5zb3J0IHx8IHRoaXMuZ2xvYmFsU2VhcmNoIHx8IHRoaXMub3V0c2lkZUZpbHRlcik7XG4gIH1cblxuICBnZXQgdXNlckZpbHRlcmVkSW50ZXJuYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuZmlsdGVyIHx8IHRoaXMuc29ydCB8fCB0aGlzLmdsb2JhbFNlYXJjaCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKTogVFtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkUm93cy52YWx1ZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUsIHBlcnNpc3RVc2VyRmlsdGVycz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXBlcnNpc3RVc2VyRmlsdGVycykge1xuICAgICAgdGhpcy5zb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIHRoaXMub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyU29ydChmaXJlVXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuc29ydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgdGhpcy5yZXNldFNvdXJjZS5uZXh0KCk7XG4gICAgdGhpcy5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgICBpZiAoZmlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVzLmVtaXQoe1xuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXIoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdsb2JhbFNlYXJjaCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgdGhpcy5yZXNldFNvdXJjZS5uZXh0KCk7XG4gICAgdGhpcy5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgICBpZiAoZmlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVzLmVtaXQoe1xuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3Rpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIG9uRXhwYW5kQ2hhbmdlKHRhcmdldElkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRTb3VyY2UubmV4dCh0YXJnZXRJZCk7XG4gIH1cblxuICBwdWJsaWMgb25QYWdpbmF0aW9uQ2hhbmdlKGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW4sIHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2luYXRpb25Tb3VyY2UubmV4dCh7IGlzUGFnZVNpemVDaGFuZ2UsIHBhZ2VTaXplIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU29ydEZpbHRlckNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRGaWx0ZXJTb3VyY2UubmV4dCh7XG4gICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0aWFsU29ydEZpbHRlcihwcmVmZXJlbmNlcyk6IHZvaWQge1xuICAgIGlmIChwcmVmZXJlbmNlcykge1xuICAgICAgaWYgKHByZWZlcmVuY2VzLnNvcnQpIHtcbiAgICAgICAgdGhpcy5zb3J0ID0gcHJlZmVyZW5jZXMuc29ydDtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZWZlcmVuY2VzLmZpbHRlcikge1xuICAgICAgICBjb25zdCBmaWx0ZXJzID0gSGVscGVycy5jb252ZXJ0VG9BcnJheShwcmVmZXJlbmNlcy5maWx0ZXIpO1xuICAgICAgICBmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9XG4gICAgICAgICAgICBmaWx0ZXIuc2VsZWN0ZWRPcHRpb24gJiYgZmlsdGVyLnR5cGVcbiAgICAgICAgICAgICAgPyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMuY29uc3RydWN0RmlsdGVyKGZpbHRlci5zZWxlY3RlZE9wdGlvbiwgZmlsdGVyLnR5cGUpXG4gICAgICAgICAgICAgIDogZmlsdGVyLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19