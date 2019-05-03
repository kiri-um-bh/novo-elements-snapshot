/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
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
        this.setState();
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
        this.setState();
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
        this.setState();
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
        this.sortFilterSource.next();
    };
    /**
     * @return {?}
     */
    DataTableState.prototype.setState = /**
     * @return {?}
     */
    function () {
        if (this.tableName) {
            /** @type {?} */
            var stickyState = {
                filter: this.filter,
                sort: this.sort,
                globalSearch: this.globalSearch,
            };
            window.localStorage.setItem(this.tableName, JSON.stringify(stickyState));
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DataTableState.prototype.getInitialFilterSortState = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.tableName = name;
        /** @type {?} */
        var stickyState = JSON.parse(window.localStorage.getItem(name));
        if (stickyState !== null && stickyState !== undefined) {
            this.filter = stickyState.filter;
            this.sort = stickyState.sort;
            this.globalSearch = stickyState.globalSearch;
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
    DataTableState.prototype.tableName;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJL0I7Ozs7SUFBQTtRQUNTLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdsQyxTQUFJLEdBQWtDLFNBQVMsQ0FBQztRQUNoRCxXQUFNLEdBQTZDLFNBQVMsQ0FBQztRQUM3RCxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFDakMsaUJBQVksR0FBbUIsSUFBSSxHQUFHLEVBQWEsQ0FBQztRQUNwRCxpQkFBWSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBRTlDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLFlBQU8sR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7SUFnRzNGLENBQUM7SUE5RkMsc0JBQUksd0NBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElB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O0lBQ3hDLHFDQUFtQzs7SUFDbkMsc0NBQW9DOztJQUNwQyxvQ0FBa0M7O0lBRWxDLG1DQUFrQjs7SUFDbEIsOEJBQWdEOztJQUNoRCxnQ0FBNkQ7O0lBQzdELDhCQUFpQjs7SUFDakIsa0NBQTZCOztJQUM3QixzQ0FBaUM7O0lBQ2pDLHNDQUFvRDs7SUFDcEQsc0NBQThDOztJQUM5Qyx1Q0FBbUI7O0lBQ25CLHdDQUFnQzs7SUFFaEMsaUNBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDaGFuZ2VFdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlU3RhdGU8VD4ge1xuICBwdWJsaWMgc2VsZWN0aW9uU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHBhZ2luYXRpb25Tb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc29ydEZpbHRlclNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyByZXNldFNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBleHBhbmRTb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgZGF0YUxvYWRlZCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgdGFibGVOYW1lOiBzdHJpbmc7XG4gIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9ID0gdW5kZWZpbmVkO1xuICBmaWx0ZXI6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB1bmRlZmluZWQ7XG4gIHBhZ2U6IG51bWJlciA9IDA7XG4gIHBhZ2VTaXplOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIGdsb2JhbFNlYXJjaDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWxlY3RlZFJvd3M6IE1hcDxzdHJpbmcsIFQ+ID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gIGV4cGFuZGVkUm93czogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgb3V0c2lkZUZpbHRlcjogYW55O1xuICBpc0ZvcmNlUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHVwZGF0ZXM6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IHVzZXJGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5maWx0ZXIgfHwgdGhpcy5zb3J0IHx8IHRoaXMuZ2xvYmFsU2VhcmNoIHx8IHRoaXMub3V0c2lkZUZpbHRlcik7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKTogVFtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkUm93cy52YWx1ZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUsIHBlcnNpc3RVc2VyRmlsdGVycz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXBlcnNpc3RVc2VyRmlsdGVycykge1xuICAgICAgdGhpcy5zb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICBpZiAoZmlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVzLmVtaXQoe1xuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTb3J0KGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnJlc2V0U291cmNlLm5leHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICBpZiAoZmlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVzLmVtaXQoe1xuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3Rpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIG9uRXhwYW5kQ2hhbmdlKHRhcmdldElkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRTb3VyY2UubmV4dCh0YXJnZXRJZCk7XG4gIH1cblxuICBwdWJsaWMgb25QYWdpbmF0aW9uQ2hhbmdlKGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW4sIHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2luYXRpb25Tb3VyY2UubmV4dCh7IGlzUGFnZVNpemVDaGFuZ2UsIHBhZ2VTaXplIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU29ydEZpbHRlckNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRGaWx0ZXJTb3VyY2UubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHNldFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYmxlTmFtZSkge1xuICAgICAgY29uc3Qgc3RpY2t5U3RhdGUgPSB7XG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH07XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50YWJsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHN0aWNreVN0YXRlKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEluaXRpYWxGaWx0ZXJTb3J0U3RhdGUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy50YWJsZU5hbWUgPSBuYW1lO1xuICAgIGNvbnN0IHN0aWNreVN0YXRlID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuICAgIGlmIChzdGlja3lTdGF0ZSAhPT0gbnVsbCAmJiBzdGlja3lTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZpbHRlciA9IHN0aWNreVN0YXRlLmZpbHRlcjtcbiAgICAgIHRoaXMuc29ydCA9IHN0aWNreVN0YXRlLnNvcnQ7XG4gICAgICB0aGlzLmdsb2JhbFNlYXJjaCA9IHN0aWNreVN0YXRlLmdsb2JhbFNlYXJjaDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==