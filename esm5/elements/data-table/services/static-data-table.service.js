/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                /** @type {?} */
                var value = Helpers.isString(filter.value) ? filter.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : filter.value;
                this.currentData = this.currentData.filter(Helpers.filterByField(filter.id, value));
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
    return StaticDataTableService;
}());
/**
 * @template T
 */
export { StaticDataTableService };
if (false) {
    /** @type {?} */
    StaticDataTableService.prototype.originalData;
    /** @type {?} */
    StaticDataTableService.prototype.currentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NlcnZpY2VzL3N0YXRpYy1kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVqRDs7OztJQUdFLGdDQUFvQixXQUFxQjtRQUFyQiw0QkFBQSxFQUFBLGdCQUFxQjtRQUFyQixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUN2QyxJQUFJLENBQUMsWUFBWSxvQkFBTyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7Ozs7O0lBRU0sZ0RBQWU7Ozs7Ozs7OztJQUF0QixVQUNFLElBQXlELEVBQ3pELE1BQTJELEVBQzNELElBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFlBQXFCLEVBQ3JCLGFBQW1CO1FBSG5CLHFCQUFBLEVBQUEsUUFBZ0I7UUFLaEIsSUFBSSxDQUFDLFdBQVcsb0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOztZQUN0QyxLQUFLLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtvQkFDOUMsT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUEsS0FBRyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQWpFLENBQWlFLENBQUM7Z0JBQWxHLENBQWtHLENBQ25HLENBQUM7Z0JBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxNQUFNLEVBQUU7O29CQUNOLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUMvRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDakM7WUFDRCxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlGLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxXQUFXLG9CQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2FBQ25GO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7Ozs7Ozs7SUF6Q0MsOENBQWtCOztJQUVOLDZDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlPFQ+IGltcGxlbWVudHMgSURhdGFUYWJsZVNlcnZpY2U8VD4ge1xuICBvcmlnaW5hbERhdGE6IFRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnREYXRhOiBUW10gPSBbXSkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gWy4uLmN1cnJlbnREYXRhXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUYWJsZVJlc3VsdHMoXG4gICAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIHBhZ2U6IG51bWJlciA9IDAsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9PiB7XG4gICAgdGhpcy5jdXJyZW50RGF0YSA9IFsuLi50aGlzLm9yaWdpbmFsRGF0YV07XG4gICAgbGV0IHRvdGFsOiBudW1iZXIgPSB0aGlzLm9yaWdpbmFsRGF0YS5sZW5ndGg7XG4gICAgaWYgKHRoaXMuY3VycmVudERhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAoZ2xvYmFsU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5zb21lKChrZXkpID0+IGAke2l0ZW1ba2V5XX1gLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZ2xvYmFsU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSxcbiAgICAgICAgKTtcbiAgICAgICAgdG90YWwgPSB0aGlzLmN1cnJlbnREYXRhLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5pc1N0cmluZyhmaWx0ZXIudmFsdWUpID8gZmlsdGVyLnZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgOiBmaWx0ZXIudmFsdWU7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLmZpbHRlcihIZWxwZXJzLmZpbHRlckJ5RmllbGQoZmlsdGVyLmlkLCB2YWx1ZSkpO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKHNvcnQuaWQsIHNvcnQudmFsdWUgPT09ICdkZXNjJykpO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKCFzb3J0ICYmICFmaWx0ZXIgJiYgIWdsb2JhbFNlYXJjaCAmJiAhb3V0c2lkZUZpbHRlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gWy4uLnRoaXMub3JpZ2luYWxEYXRhXTtcbiAgICAgIH1cbiAgICAgIGlmICghSGVscGVycy5pc0JsYW5rKHBhZ2UpICYmICFIZWxwZXJzLmlzQmxhbmsocGFnZVNpemUpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLnNsaWNlKHBhZ2UgKiBwYWdlU2l6ZSwgKHBhZ2UgKyAxKSAqIHBhZ2VTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9mKHsgcmVzdWx0czogdGhpcy5jdXJyZW50RGF0YSwgdG90YWw6IHRvdGFsIH0pO1xuICB9XG59XG4iXX0=