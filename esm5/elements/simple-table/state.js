/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
var NovoActivityTableState = /** @class */ (function () {
    function NovoActivityTableState() {
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
    Object.defineProperty(NovoActivityTableState.prototype, "userFiltered", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.filter || this.sort || this.globalSearch || this.outsideFilter);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} fireUpdate
     * @param {?=} persistUserFilters
     * @return {?}
     */
    NovoActivityTableState.prototype.reset = /**
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
        this.onReset.emit(true);
        if (fireUpdate) {
            this.updates.emit({
                sort: this.sort,
                filter: this.filter,
                globalSearch: this.globalSearch,
            });
        }
    };
    return NovoActivityTableState;
}());
export { NovoActivityTableState };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3QztJQUFBO1FBQ0UsT0FBRSxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixTQUFJLEdBQWtDLFNBQVMsQ0FBQztRQUNoRCxXQUFNLEdBQWtDLFNBQVMsQ0FBQztRQUNsRCxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFDakMsaUJBQVksR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFHOUQsWUFBTyxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUN6RixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUF1Qi9ELENBQUM7SUFyQkMsc0JBQUksZ0RBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRixDQUFDOzs7T0FBQTs7Ozs7O0lBRU0sc0NBQUs7Ozs7O0lBQVosVUFBYSxVQUEwQixFQUFFLGtCQUE0QjtRQUF4RCwyQkFBQSxFQUFBLGlCQUEwQjtRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQ2hDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7OztJQWpDQyxvQ0FBMkI7O0lBQzNCLHNDQUFnRDs7SUFDaEQsd0NBQWtEOztJQUNsRCxzQ0FBaUI7O0lBQ2pCLDBDQUE2Qjs7SUFDN0IsOENBQWlDOztJQUNqQyw4Q0FBOEQ7O0lBQzlELCtDQUFtQjs7SUFFbkIseUNBQXlGOztJQUN6Rix5Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTm92b1NpbXBsZVRhYmxlQ2hhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUge1xuICBpZDogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0gPSB1bmRlZmluZWQ7XG4gIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0gPSB1bmRlZmluZWQ7XG4gIHBhZ2U6IG51bWJlciA9IDA7XG4gIHBhZ2VTaXplOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIGdsb2JhbFNlYXJjaDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWxlY3RlZFJvd3M6IE1hcDxzdHJpbmcsIG9iamVjdD4gPSBuZXcgTWFwPHN0cmluZywgb2JqZWN0PigpO1xuICBvdXRzaWRlRmlsdGVyOiBhbnk7XG5cbiAgdXBkYXRlczogRXZlbnRFbWl0dGVyPE5vdm9TaW1wbGVUYWJsZUNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vdm9TaW1wbGVUYWJsZUNoYW5nZT4oKTtcbiAgb25SZXNldDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGdldCB1c2VyRmlsdGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuZmlsdGVyIHx8IHRoaXMuc29ydCB8fCB0aGlzLmdsb2JhbFNlYXJjaCB8fCB0aGlzLm91dHNpZGVGaWx0ZXIpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KGZpcmVVcGRhdGU6IGJvb2xlYW4gPSB0cnVlLCBwZXJzaXN0VXNlckZpbHRlcnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFwZXJzaXN0VXNlckZpbHRlcnMpIHtcbiAgICAgIHRoaXMuc29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZ2xvYmFsU2VhcmNoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLm9uUmVzZXQuZW1pdCh0cnVlKTtcbiAgICBpZiAoZmlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVzLmVtaXQoe1xuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGdsb2JhbFNlYXJjaDogdGhpcy5nbG9iYWxTZWFyY2gsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==