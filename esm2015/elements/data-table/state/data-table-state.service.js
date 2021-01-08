import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Helpers } from '../../../utils/Helpers';
import { NovoDataTableFilterUtils } from '../services/data-table-filter-utils';
import * as i0 from "@angular/core";
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
    get userFiltered() {
        return !!(this.filter || this.sort || this.globalSearch || this.outsideFilter);
    }
    get userFilteredInternal() {
        return !!(this.filter || this.sort || this.globalSearch);
    }
    get selected() {
        return Array.from(this.selectedRows.values());
    }
    reset(fireUpdate = true, persistUserFilters) {
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
    }
    clearSort(fireUpdate = true) {
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
    }
    clearFilter(fireUpdate = true) {
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
    }
    onSelectionChange() {
        this.selectionSource.next();
    }
    onExpandChange(targetId) {
        this.expandSource.next(targetId);
    }
    onPaginationChange(isPageSizeChange, pageSize) {
        this.paginationSource.next({ isPageSizeChange, pageSize });
    }
    onSortFilterChange() {
        this.sortFilterSource.next({
            sort: this.sort,
            filter: this.filter,
            globalSearch: this.globalSearch,
        });
    }
    setInitialSortFilter(preferences) {
        if (preferences) {
            if (preferences.sort) {
                this.sort = preferences.sort;
            }
            if (preferences.filter) {
                const filters = Helpers.convertToArray(preferences.filter);
                filters.forEach((filter) => {
                    filter.value =
                        filter.selectedOption && filter.type
                            ? NovoDataTableFilterUtils.constructFilter(filter.selectedOption, filter.type)
                            : filter.value;
                });
                this.filter = filters;
            }
        }
    }
}
DataTableState.ɵfac = function DataTableState_Factory(t) { return new (t || DataTableState)(); };
DataTableState.ɵprov = i0.ɵɵdefineInjectable({ token: DataTableState, factory: DataTableState.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableState, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBRy9FLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRVMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWxDLFNBQUksR0FBbUIsU0FBUyxDQUFDO1FBQ2pDLFdBQU0sR0FBMEMsU0FBUyxDQUFDO1FBQzFELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUM3QixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUNqQyxpQkFBWSxHQUFtQixJQUFJLEdBQUcsRUFBYSxDQUFDO1FBQ3BELGlCQUFZLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7UUFFOUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsWUFB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c0RBQWQsY0FBYyxXQUFkLGNBQWM7a0RBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQsIElEYXRhVGFibGVGaWx0ZXIsIElEYXRhVGFibGVTb3J0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTdGF0ZTxUPiB7XG4gIHB1YmxpYyBzZWxlY3Rpb25Tb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcGFnaW5hdGlvblNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBzb3J0RmlsdGVyU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHJlc2V0U291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGV4cGFuZFNvdXJjZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBkYXRhTG9hZGVkID0gbmV3IFN1YmplY3QoKTtcblxuICBzb3J0OiBJRGF0YVRhYmxlU29ydCA9IHVuZGVmaW5lZDtcbiAgZmlsdGVyOiBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdID0gdW5kZWZpbmVkO1xuICBwYWdlOiBudW1iZXIgPSAwO1xuICBwYWdlU2l6ZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBnbG9iYWxTZWFyY2g6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgc2VsZWN0ZWRSb3dzOiBNYXA8c3RyaW5nLCBUPiA9IG5ldyBNYXA8c3RyaW5nLCBUPigpO1xuICBleHBhbmRlZFJvd3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIG91dHNpZGVGaWx0ZXI6IGFueTtcbiAgaXNGb3JjZVJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICB1cGRhdGVzOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCB1c2VyRmlsdGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuZmlsdGVyIHx8IHRoaXMuc29ydCB8fCB0aGlzLmdsb2JhbFNlYXJjaCB8fCB0aGlzLm91dHNpZGVGaWx0ZXIpO1xuICB9XG5cbiAgZ2V0IHVzZXJGaWx0ZXJlZEludGVybmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmZpbHRlciB8fCB0aGlzLnNvcnQgfHwgdGhpcy5nbG9iYWxTZWFyY2gpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCk6IFRbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlLCBwZXJzaXN0VXNlckZpbHRlcnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFwZXJzaXN0VXNlckZpbHRlcnMpIHtcbiAgICAgIHRoaXMuc29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZ2xvYmFsU2VhcmNoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnJlc2V0U291cmNlLm5leHQoKTtcbiAgICB0aGlzLm9uU29ydEZpbHRlckNoYW5nZSgpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNvcnQoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIHRoaXMub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMucmVzZXRTb3VyY2UubmV4dCgpO1xuICAgIHRoaXMub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gICAgaWYgKGZpcmVVcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlcy5lbWl0KHtcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IHRoaXMuZ2xvYmFsU2VhcmNoLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0aW9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkV4cGFuZENoYW5nZSh0YXJnZXRJZD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kU291cmNlLm5leHQodGFyZ2V0SWQpO1xuICB9XG5cbiAgcHVibGljIG9uUGFnaW5hdGlvbkNoYW5nZShpc1BhZ2VTaXplQ2hhbmdlOiBib29sZWFuLCBwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdpbmF0aW9uU291cmNlLm5leHQoeyBpc1BhZ2VTaXplQ2hhbmdlLCBwYWdlU2l6ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNvcnRGaWx0ZXJDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0RmlsdGVyU291cmNlLm5leHQoe1xuICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdGlhbFNvcnRGaWx0ZXIocHJlZmVyZW5jZXMpOiB2b2lkIHtcbiAgICBpZiAocHJlZmVyZW5jZXMpIHtcbiAgICAgIGlmIChwcmVmZXJlbmNlcy5zb3J0KSB7XG4gICAgICAgIHRoaXMuc29ydCA9IHByZWZlcmVuY2VzLnNvcnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmVmZXJlbmNlcy5maWx0ZXIpIHtcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkocHJlZmVyZW5jZXMuZmlsdGVyKTtcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPVxuICAgICAgICAgICAgZmlsdGVyLnNlbGVjdGVkT3B0aW9uICYmIGZpbHRlci50eXBlXG4gICAgICAgICAgICAgID8gTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzLmNvbnN0cnVjdEZpbHRlcihmaWx0ZXIuc2VsZWN0ZWRPcHRpb24sIGZpbHRlci50eXBlKVxuICAgICAgICAgICAgICA6IGZpbHRlci52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmlsdGVycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==