/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from 'rxjs';
import { Helpers } from '../../../utils/Helpers';
/**
 * @template T
 */
var /**
 * @template T
 */
StaticDataTableService = /** @class */ (function () {
    function StaticDataTableService(currentData) {
        if (currentData === void 0) { currentData = []; }
        this.currentData = currentData;
        this.originalData = tslib_1.__spread(currentData);
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
    StaticDataTableService.prototype.getTableResults = /**
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
        this.currentData = tslib_1.__spread(this.originalData);
        /** @type {?} */
        var total = this.originalData.length;
        if (this.currentData.length !== 0) {
            if (globalSearch) {
                this.currentData = this.currentData.filter(function (item) {
                    return Object.keys(item).some(function (key) { return ("" + item[key]).toLowerCase().includes(globalSearch.toLowerCase()); });
                });
                total = this.currentData.length;
            }
            if (filter) {
                this.currentData = this.filterData(this.currentData, filter);
                total = this.currentData.length;
            }
            if (sort) {
                this.currentData = this.currentData.sort(Helpers.sortByField(sort.id, sort.value === 'desc'));
                total = this.currentData.length;
            }
            if (!sort && !filter && !globalSearch && !outsideFilter) {
                this.currentData = tslib_1.__spread(this.originalData);
            }
            if (!Helpers.isBlank(page) && !Helpers.isBlank(pageSize)) {
                this.currentData = this.currentData.slice(page * pageSize, (page + 1) * pageSize);
            }
        }
        return of({ results: this.currentData, total: total });
    };
    /**
     * @param {?} currentData
     * @param {?} filter
     * @return {?}
     */
    StaticDataTableService.prototype.filterData = /**
     * @param {?} currentData
     * @param {?} filter
     * @return {?}
     */
    function (currentData, filter) {
        /** @type {?} */
        var filters = Helpers.convertToArray(filter);
        filters.forEach(function (aFilter) {
            if (Array.isArray(aFilter.value)) {
                /** @type {?} */
                var values = Helpers.convertToArray(aFilter.value).map(Helpers.escapeString);
                currentData = currentData.filter(Helpers.filterByField(aFilter.id, values));
            }
            else {
                /** @type {?} */
                var value = Helpers.escapeString(aFilter.value);
                currentData = currentData.filter(Helpers.filterByField(aFilter.id, value));
            }
        });
        return currentData;
    };
    return StaticDataTableService;
}());
/**
 * @template T
 */
export { StaticDataTableService };
if (false) {
    /** @type {?} */
    StaticDataTableService.prototype.originalData;
    /**
     * @type {?}
     * @private
     */
    StaticDataTableService.prototype.currentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NlcnZpY2VzL3N0YXRpYy1kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVqRDs7OztJQUdFLGdDQUFvQixXQUFxQjtRQUFyQiw0QkFBQSxFQUFBLGdCQUFxQjtRQUFyQixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUN2QyxJQUFJLENBQUMsWUFBWSxvQkFBTyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7Ozs7O0lBRU0sZ0RBQWU7Ozs7Ozs7OztJQUF0QixVQUNFLElBQXlELEVBQ3pELE1BQTZDLEVBQzdDLElBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFlBQXFCLEVBQ3JCLGFBQW1CO1FBSG5CLHFCQUFBLEVBQUEsUUFBZ0I7UUFLaEIsSUFBSSxDQUFDLFdBQVcsb0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOztZQUN0QyxLQUFLLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtvQkFDOUMsT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUEsS0FBRyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQWpFLENBQWlFLENBQUM7Z0JBQWxHLENBQWtHLENBQ25HLENBQUM7Z0JBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdELEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUNqQztZQUNELElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUYsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFdBQVcsb0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDbkY7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU0sMkNBQVU7Ozs7O0lBQWpCLFVBQWtCLFdBQWdCLEVBQUUsTUFBNkM7O1lBQzNFLE9BQU8sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN0QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDNUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUM1RSxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUM3RTtpQkFBTTs7b0JBQ0QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDL0MsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDNUU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7Ozs7SUF0REMsOENBQWtCOzs7OztJQUVOLDZDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVGaWx0ZXIsIElEYXRhVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlPFQ+IGltcGxlbWVudHMgSURhdGFUYWJsZVNlcnZpY2U8VD4ge1xuICBvcmlnaW5hbERhdGE6IFRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnREYXRhOiBUW10gPSBbXSkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gWy4uLmN1cnJlbnREYXRhXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUYWJsZVJlc3VsdHMoXG4gICAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIGZpbHRlcjogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXSxcbiAgICBwYWdlOiBudW1iZXIgPSAwLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgZ2xvYmFsU2VhcmNoPzogc3RyaW5nLFxuICAgIG91dHNpZGVGaWx0ZXI/OiBhbnksXG4gICk6IE9ic2VydmFibGU8eyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfT4ge1xuICAgIHRoaXMuY3VycmVudERhdGEgPSBbLi4udGhpcy5vcmlnaW5hbERhdGFdO1xuICAgIGxldCB0b3RhbDogbnVtYmVyID0gdGhpcy5vcmlnaW5hbERhdGEubGVuZ3RoO1xuICAgIGlmICh0aGlzLmN1cnJlbnREYXRhLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKGdsb2JhbFNlYXJjaCkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5jdXJyZW50RGF0YS5maWx0ZXIoKGl0ZW0pID0+XG4gICAgICAgICAgT2JqZWN0LmtleXMoaXRlbSkuc29tZSgoa2V5KSA9PiBgJHtpdGVtW2tleV19YC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGdsb2JhbFNlYXJjaC50b0xvd2VyQ2FzZSgpKSksXG4gICAgICAgICk7XG4gICAgICAgIHRvdGFsID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmZpbHRlckRhdGEodGhpcy5jdXJyZW50RGF0YSwgZmlsdGVyKTtcbiAgICAgICAgdG90YWwgPSB0aGlzLmN1cnJlbnREYXRhLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChzb3J0LmlkLCBzb3J0LnZhbHVlID09PSAnZGVzYycpKTtcbiAgICAgICAgdG90YWwgPSB0aGlzLmN1cnJlbnREYXRhLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmICghc29ydCAmJiAhZmlsdGVyICYmICFnbG9iYWxTZWFyY2ggJiYgIW91dHNpZGVGaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IFsuLi50aGlzLm9yaWdpbmFsRGF0YV07XG4gICAgICB9XG4gICAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhwYWdlKSAmJiAhSGVscGVycy5pc0JsYW5rKHBhZ2VTaXplKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5jdXJyZW50RGF0YS5zbGljZShwYWdlICogcGFnZVNpemUsIChwYWdlICsgMSkgKiBwYWdlU2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvZih7IHJlc3VsdHM6IHRoaXMuY3VycmVudERhdGEsIHRvdGFsOiB0b3RhbCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhKGN1cnJlbnREYXRhOiBUW10sIGZpbHRlcjogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXSk6IFRbXSB7XG4gICAgbGV0IGZpbHRlcnMgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KGZpbHRlcik7XG4gICAgZmlsdGVycy5mb3JFYWNoKChhRmlsdGVyKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhRmlsdGVyLnZhbHVlKSkge1xuICAgICAgICBsZXQgdmFsdWVzID0gSGVscGVycy5jb252ZXJ0VG9BcnJheShhRmlsdGVyLnZhbHVlKS5tYXAoSGVscGVycy5lc2NhcGVTdHJpbmcpO1xuICAgICAgICBjdXJyZW50RGF0YSA9IGN1cnJlbnREYXRhLmZpbHRlcihIZWxwZXJzLmZpbHRlckJ5RmllbGQoYUZpbHRlci5pZCwgdmFsdWVzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmVzY2FwZVN0cmluZyhhRmlsdGVyLnZhbHVlKTtcbiAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGFGaWx0ZXIuaWQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1cnJlbnREYXRhO1xuICB9XG59XG4iXX0=