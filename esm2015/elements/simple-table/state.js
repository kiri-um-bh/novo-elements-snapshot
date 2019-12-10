/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
export class NovoActivityTableState {
    constructor() {
        this.id = Math.random();
        this.sort = undefined;
        this.filter = undefined;
        this.page = 0;
        this.pageSize = undefined;
        this.globalSearch = undefined;
        this.selectedRows = new Map();
        this.updates = new EventEmitter();
        this.onReset = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get userFiltered() {
        return !!(this.filter || this.sort || this.globalSearch || this.outsideFilter);
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
        this.onReset.emit(true);
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    }
}
if (false) {
    /** @type {?} */
    NovoActivityTableState.prototype.id;
    /** @type {?} */
    NovoActivityTableState.prototype.sort;
    /** @type {?} */
    NovoActivityTableState.prototype.filter;
    /** @type {?} */
    NovoActivityTableState.prototype.page;
    /** @type {?} */
    NovoActivityTableState.prototype.pageSize;
    /** @type {?} */
    NovoActivityTableState.prototype.globalSearch;
    /** @type {?} */
    NovoActivityTableState.prototype.selectedRows;
    /** @type {?} */
    NovoActivityTableState.prototype.outsideFilter;
    /** @type {?} */
    NovoActivityTableState.prototype.updates;
    /** @type {?} */
    NovoActivityTableState.prototype.onReset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3QyxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ0UsT0FBRSxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixTQUFJLEdBQWtDLFNBQVMsQ0FBQztRQUNoRCxXQUFNLEdBQWtDLFNBQVMsQ0FBQztRQUNsRCxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFDakMsaUJBQVksR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFHOUQsWUFBTyxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUN6RixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUF1Qi9ELENBQUM7Ozs7SUFyQkMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7O0lBRU0sS0FBSyxDQUFDLGFBQXNCLElBQUksRUFBRSxrQkFBNEI7UUFDbkUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTthQUNoQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRjs7O0lBakNDLG9DQUEyQjs7SUFDM0Isc0NBQWdEOztJQUNoRCx3Q0FBa0Q7O0lBQ2xELHNDQUFpQjs7SUFDakIsMENBQTZCOztJQUM3Qiw4Q0FBaUM7O0lBQ2pDLDhDQUE4RDs7SUFDOUQsK0NBQW1COztJQUVuQix5Q0FBeUY7O0lBQ3pGLHlDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOb3ZvU2ltcGxlVGFibGVDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB7XG4gIGlkOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSA9IHVuZGVmaW5lZDtcbiAgZmlsdGVyOiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSA9IHVuZGVmaW5lZDtcbiAgcGFnZTogbnVtYmVyID0gMDtcbiAgcGFnZVNpemU6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgZ2xvYmFsU2VhcmNoOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIHNlbGVjdGVkUm93czogTWFwPHN0cmluZywgb2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KCk7XG4gIG91dHNpZGVGaWx0ZXI6IGFueTtcblxuICB1cGRhdGVzOiBFdmVudEVtaXR0ZXI8Tm92b1NpbXBsZVRhYmxlQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm92b1NpbXBsZVRhYmxlQ2hhbmdlPigpO1xuICBvblJlc2V0OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZ2V0IHVzZXJGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5maWx0ZXIgfHwgdGhpcy5zb3J0IHx8IHRoaXMuZ2xvYmFsU2VhcmNoIHx8IHRoaXMub3V0c2lkZUZpbHRlcik7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoZmlyZVVwZGF0ZTogYm9vbGVhbiA9IHRydWUsIHBlcnNpc3RVc2VyRmlsdGVycz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXBlcnNpc3RVc2VyRmlsdGVycykge1xuICAgICAgdGhpcy5zb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5nbG9iYWxTZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIHRoaXMub25SZXNldC5lbWl0KHRydWUpO1xuICAgIGlmIChmaXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXMuZW1pdCh7XG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgZ2xvYmFsU2VhcmNoOiB0aGlzLmdsb2JhbFNlYXJjaCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19