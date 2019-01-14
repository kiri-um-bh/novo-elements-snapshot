/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @template T
 */
export class DataTableState {
    constructor() {
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
    /**
     * @return {?}
     */
    get userFiltered() {
        return !!(this.filter || this.sort || this.globalSearch || this.outsideFilter);
    }
    /**
     * @return {?}
     */
    get selected() {
        return Array.from(this.selectedRows.values());
    }
    /**
     * @param {?=} fireUpdate
     * @param {?=} persistUserFilters
     * @return {?}
     */
    reset(fireUpdate = true, persistUserFilters) {
        if (!persistUserFilters) {
            this.sort = undefined;
            this.globalSearch = undefined;
            this.filter = undefined;
        }
        this.page = 0;
        this.selectedRows.clear();
        this.resetSource.next();
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    }
    /**
     * @param {?=} fireUpdate
     * @return {?}
     */
    clearSort(fireUpdate = true) {
        this.sort = undefined;
        this.page = 0;
        this.selectedRows.clear();
        this.resetSource.next();
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    }
    /**
     * @param {?=} fireUpdate
     * @return {?}
     */
    clearFilter(fireUpdate = true) {
        this.filter = undefined;
        this.globalSearch = undefined;
        this.page = 0;
        this.selectedRows.clear();
        this.resetSource.next();
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    }
    /**
     * @return {?}
     */
    onSelectionChange() {
        this.selectionSource.next();
    }
    /**
     * @param {?=} targetId
     * @return {?}
     */
    onExpandChange(targetId) {
        this.expandSource.next(targetId);
    }
    /**
     * @param {?} isPageSizeChange
     * @param {?} pageSize
     * @return {?}
     */
    onPaginationChange(isPageSizeChange, pageSize) {
        this.paginationSource.next({ isPageSizeChange, pageSize });
    }
    /**
     * @return {?}
     */
    onSortFilterChange() {
        this.sortFilterSource.next();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJL0IsTUFBTSxPQUFPLGNBQWM7SUFBM0I7UUFDUyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFbEMsU0FBSSxHQUFrQyxTQUFTLENBQUM7UUFDaEQsV0FBTSxHQUFrQyxTQUFTLENBQUM7UUFDbEQsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBQzdCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLGlCQUFZLEdBQW1CLElBQUksR0FBRyxFQUFhLENBQUM7UUFDcEQsaUJBQVksR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUU5QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxZQUFPLEdBQXdDLElBQUksWUFBWSxFQUF5QixDQUFDO0lBd0UzRixDQUFDOzs7O0lBdEVDLElBQUksWUFBWTtRQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElB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QUNuQyxzQ0FBb0M7O0lBQ3BDLG9DQUFrQzs7SUFFbEMsOEJBQWdEOztJQUNoRCxnQ0FBa0Q7O0lBQ2xELDhCQUFpQjs7SUFDakIsa0NBQTZCOztJQUM3QixzQ0FBaUM7O0lBQ2pDLHNDQUFvRDs7SUFDcEQsc0NBQThDOztJQUM5Qyx1Q0FBbUI7O0lBQ25CLHdDQUFnQzs7SUFFaEMsaUNBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDaGFuZ2VFdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlU3RhdGU8VD4ge1xuICBwdWJsaWMgc2VsZWN0aW9uU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHBhZ2luYXRpb25Tb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc29ydEZpbHRlclNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyByZXNldFNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBleHBhbmRTb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgZGF0YUxvYWRlZCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0gPSB1bmRlZmluZWQ7XG4gIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0gPSB1bmRlZmluZWQ7XG4gIHBhZ2U6IG51bWJlciA9IDA7XG4gIHBhZ2VTaXplOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIGdsb2JhbFNlYXJjaDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWxlY3RlZFJvd3M6IE1hcDxzdHJpbmcsIFQ+ID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gIGV4cGFuZGVkUm93czogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgb3V0c2lkZUZpbHRlcjogYW55O1xuICBpc0ZvcmNlUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHVwZGF0ZXM6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IHVzZXJGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5maWx0ZXIgfHwgdGhpcy5zb3J0IHx8IHRoaXMuZ2xvYmFsU2VhcmNoIHx8IHRoaXMub3V0c2lkZUZpbHRlcik7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKTogVFtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkUm93cy52YWx1ZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUsIHBlcnNpc3RVc2VyRmlsdGVycz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXBlcnNpc3RVc2VyRmlsdGVycykge1xuICAgICAgdGhpcy5zb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNvcnQoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcihmaXJlVXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnJlc2V0U291cmNlLm5leHQoKTtcbiAgICBpZiAoZmlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVzLmVtaXQoe1xuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3Rpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIG9uRXhwYW5kQ2hhbmdlKHRhcmdldElkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRTb3VyY2UubmV4dCh0YXJnZXRJZCk7XG4gIH1cblxuICBwdWJsaWMgb25QYWdpbmF0aW9uQ2hhbmdlKGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW4sIHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2luYXRpb25Tb3VyY2UubmV4dCh7IGlzUGFnZVNpemVDaGFuZ2UsIHBhZ2VTaXplIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU29ydEZpbHRlckNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRGaWx0ZXJTb3VyY2UubmV4dCgpO1xuICB9XG59XG4iXX0=