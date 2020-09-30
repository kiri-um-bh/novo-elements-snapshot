/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.currentData = this.currentData.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return Object.keys(item).some((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return ("" + item[key]).toLowerCase().includes(globalSearch.toLowerCase()); }));
                }));
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
        filters.forEach((/**
         * @param {?} aFilter
         * @return {?}
         */
        function (aFilter) {
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
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NlcnZpY2VzL3N0YXRpYy1kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVqRDs7OztJQUdFLGdDQUFvQixXQUFxQjtRQUFyQiw0QkFBQSxFQUFBLGdCQUFxQjtRQUFyQixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUN2QyxJQUFJLENBQUMsWUFBWSxvQkFBTyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7Ozs7O0lBRU0sZ0RBQWU7Ozs7Ozs7OztJQUF0QixVQUNFLElBQXlELEVBQ3pELE1BQTZDLEVBQzdDLElBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFlBQXFCLEVBQ3JCLGFBQW1CO1FBSG5CLHFCQUFBLEVBQUEsUUFBZ0I7UUFLaEIsSUFBSSxDQUFDLFdBQVcsb0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOztZQUN0QyxLQUFLLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzlDLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7O29CQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQSxLQUFHLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBakUsQ0FBaUUsRUFBQztnQkFBbEcsQ0FBa0csRUFDbkcsQ0FBQztnQkFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDakM7WUFDRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsV0FBVyxvQkFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUNuRjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTSwyQ0FBVTs7Ozs7SUFBakIsVUFBa0IsV0FBZ0IsRUFBRSxNQUE2Qzs7WUFDM0UsT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3RCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O29CQUM1QixNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQzVFLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzdFO2lCQUFNOztvQkFDRCxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUMvQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM1RTtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQzs7Ozs7OztJQXREQyw4Q0FBa0I7Ozs7O0lBRU4sNkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZUZpbHRlciwgSURhdGFUYWJsZVNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIFN0YXRpY0RhdGFUYWJsZVNlcnZpY2U8VD4gaW1wbGVtZW50cyBJRGF0YVRhYmxlU2VydmljZTxUPiB7XG4gIG9yaWdpbmFsRGF0YTogVFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudERhdGE6IFRbXSA9IFtdKSB7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSBbLi4uY3VycmVudERhdGFdO1xuICB9XG5cbiAgcHVibGljIGdldFRhYmxlUmVzdWx0cyhcbiAgICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgZmlsdGVyOiBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdLFxuICAgIHBhZ2U6IG51bWJlciA9IDAsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9PiB7XG4gICAgdGhpcy5jdXJyZW50RGF0YSA9IFsuLi50aGlzLm9yaWdpbmFsRGF0YV07XG4gICAgbGV0IHRvdGFsOiBudW1iZXIgPSB0aGlzLm9yaWdpbmFsRGF0YS5sZW5ndGg7XG4gICAgaWYgKHRoaXMuY3VycmVudERhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAoZ2xvYmFsU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5zb21lKChrZXkpID0+IGAke2l0ZW1ba2V5XX1gLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZ2xvYmFsU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSxcbiAgICAgICAgKTtcbiAgICAgICAgdG90YWwgPSB0aGlzLmN1cnJlbnREYXRhLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuZmlsdGVyRGF0YSh0aGlzLmN1cnJlbnREYXRhLCBmaWx0ZXIpO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKHNvcnQuaWQsIHNvcnQudmFsdWUgPT09ICdkZXNjJykpO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKCFzb3J0ICYmICFmaWx0ZXIgJiYgIWdsb2JhbFNlYXJjaCAmJiAhb3V0c2lkZUZpbHRlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gWy4uLnRoaXMub3JpZ2luYWxEYXRhXTtcbiAgICAgIH1cbiAgICAgIGlmICghSGVscGVycy5pc0JsYW5rKHBhZ2UpICYmICFIZWxwZXJzLmlzQmxhbmsocGFnZVNpemUpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLnNsaWNlKHBhZ2UgKiBwYWdlU2l6ZSwgKHBhZ2UgKyAxKSAqIHBhZ2VTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9mKHsgcmVzdWx0czogdGhpcy5jdXJyZW50RGF0YSwgdG90YWw6IHRvdGFsIH0pO1xuICB9XG5cbiAgcHVibGljIGZpbHRlckRhdGEoY3VycmVudERhdGE6IFRbXSwgZmlsdGVyOiBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdKTogVFtdIHtcbiAgICBsZXQgZmlsdGVycyA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoZmlsdGVyKTtcbiAgICBmaWx0ZXJzLmZvckVhY2goKGFGaWx0ZXIpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFGaWx0ZXIudmFsdWUpKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KGFGaWx0ZXIudmFsdWUpLm1hcChIZWxwZXJzLmVzY2FwZVN0cmluZyk7XG4gICAgICAgIGN1cnJlbnREYXRhID0gY3VycmVudERhdGEuZmlsdGVyKEhlbHBlcnMuZmlsdGVyQnlGaWVsZChhRmlsdGVyLmlkLCB2YWx1ZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuZXNjYXBlU3RyaW5nKGFGaWx0ZXIudmFsdWUpO1xuICAgICAgICBjdXJyZW50RGF0YSA9IGN1cnJlbnREYXRhLmZpbHRlcihIZWxwZXJzLmZpbHRlckJ5RmllbGQoYUZpbHRlci5pZCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY3VycmVudERhdGE7XG4gIH1cbn1cbiJdfQ==