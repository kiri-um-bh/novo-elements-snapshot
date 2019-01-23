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
     * @return {?}
     */
    onExpandChange() {
        this.expandSource.next();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJL0IsTUFBTSxPQUFPLGNBQWM7SUFBM0I7UUFDUyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFbEMsU0FBSSxHQUFrQyxTQUFTLENBQUM7UUFDaEQsV0FBTSxHQUFrQyxTQUFTLENBQUM7UUFDbEQsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBQzdCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLGlCQUFZLEdBQW1CLElBQUksR0FBRyxFQUFhLENBQUM7UUFDcEQsaUJBQVksR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUU5QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxZQUFPLEdBQXdDLElBQUksWUFBWSxFQUF5QixDQUFDO0lBd0UzRixDQUFDOzs7O0lBdEVDLElBQUksWUFBWTtRQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElB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QWtDOztJQUVsQyw4QkFBZ0Q7O0lBQ2hELGdDQUFrRDs7SUFDbEQsOEJBQWlCOztJQUNqQixrQ0FBNkI7O0lBQzdCLHNDQUFpQzs7SUFDakMsc0NBQW9EOztJQUNwRCxzQ0FBOEM7O0lBQzlDLHVDQUFtQjs7SUFDbkIsd0NBQWdDOztJQUVoQyxpQ0FBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZUNoYW5nZUV2ZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTdGF0ZTxUPiB7XG4gIHB1YmxpYyBzZWxlY3Rpb25Tb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcGFnaW5hdGlvblNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBzb3J0RmlsdGVyU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHJlc2V0U291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGV4cGFuZFNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBkYXRhTG9hZGVkID0gbmV3IFN1YmplY3QoKTtcblxuICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSA9IHVuZGVmaW5lZDtcbiAgZmlsdGVyOiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSA9IHVuZGVmaW5lZDtcbiAgcGFnZTogbnVtYmVyID0gMDtcbiAgcGFnZVNpemU6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgZ2xvYmFsU2VhcmNoOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIHNlbGVjdGVkUm93czogTWFwPHN0cmluZywgVD4gPSBuZXcgTWFwPHN0cmluZywgVD4oKTtcbiAgZXhwYW5kZWRSb3dzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBvdXRzaWRlRmlsdGVyOiBhbnk7XG4gIGlzRm9yY2VSZWZyZXNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgdXBkYXRlczogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDaGFuZ2VFdmVudD4oKTtcblxuICBnZXQgdXNlckZpbHRlcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmZpbHRlciB8fCB0aGlzLnNvcnQgfHwgdGhpcy5nbG9iYWxTZWFyY2ggfHwgdGhpcy5vdXRzaWRlRmlsdGVyKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBUW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRSb3dzLnZhbHVlcygpKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldChmaXJlVXBkYXRlOiBib29sZWFuID0gdHJ1ZSwgcGVyc2lzdFVzZXJGaWx0ZXJzPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghcGVyc2lzdFVzZXJGaWx0ZXJzKSB7XG4gICAgICB0aGlzLnNvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmdsb2JhbFNlYXJjaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgdGhpcy5yZXNldFNvdXJjZS5uZXh0KCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyU29ydChmaXJlVXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuc29ydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgdGhpcy5yZXNldFNvdXJjZS5uZXh0KCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGlvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgb25FeHBhbmRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRTb3VyY2UubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIG9uUGFnaW5hdGlvbkNoYW5nZShpc1BhZ2VTaXplQ2hhbmdlOiBib29sZWFuLCBwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdpbmF0aW9uU291cmNlLm5leHQoeyBpc1BhZ2VTaXplQ2hhbmdlLCBwYWdlU2l6ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNvcnRGaWx0ZXJDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0RmlsdGVyU291cmNlLm5leHQoKTtcbiAgfVxufVxuIl19