/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/services/static-data-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NlcnZpY2VzL3N0YXRpYy1kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFakQ7Ozs7SUFHRSxnQ0FBb0IsV0FBcUI7UUFBckIsNEJBQUEsRUFBQSxnQkFBcUI7UUFBckIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFDdkMsSUFBSSxDQUFDLFlBQVksb0JBQU8sV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7Ozs7OztJQUVNLGdEQUFlOzs7Ozs7Ozs7SUFBdEIsVUFDRSxJQUF5RCxFQUN6RCxNQUE2QyxFQUM3QyxJQUFnQixFQUNoQixRQUFnQixFQUNoQixZQUFxQixFQUNyQixhQUFtQjtRQUhuQixxQkFBQSxFQUFBLFFBQWdCO1FBS2hCLElBQUksQ0FBQyxXQUFXLG9CQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7WUFDdEMsS0FBSyxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxJQUFJO29CQUM5QyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7OztvQkFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUEsS0FBRyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQWpFLENBQWlFLEVBQUM7Z0JBQWxHLENBQWtHLEVBQ25HLENBQUM7Z0JBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdELEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUNqQztZQUNELElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUYsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFdBQVcsb0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDbkY7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVNLDJDQUFVOzs7OztJQUFqQixVQUFrQixXQUFnQixFQUFFLE1BQTZDOztZQUN6RSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDOUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDdEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7b0JBQzFCLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztnQkFDOUUsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDN0U7aUJBQU07O29CQUNDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pELFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzVFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDOzs7Ozs7O0lBdERDLDhDQUFrQjs7Ozs7SUFFTiw2Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJRGF0YVRhYmxlRmlsdGVyLCBJRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGljRGF0YVRhYmxlU2VydmljZTxUPiBpbXBsZW1lbnRzIElEYXRhVGFibGVTZXJ2aWNlPFQ+IHtcbiAgb3JpZ2luYWxEYXRhOiBUW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50RGF0YTogVFtdID0gW10pIHtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IFsuLi5jdXJyZW50RGF0YV07XG4gIH1cblxuICBwdWJsaWMgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10sXG4gICAgcGFnZTogbnVtYmVyID0gMCxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGdsb2JhbFNlYXJjaD86IHN0cmluZyxcbiAgICBvdXRzaWRlRmlsdGVyPzogYW55LFxuICApOiBPYnNlcnZhYmxlPHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0+IHtcbiAgICB0aGlzLmN1cnJlbnREYXRhID0gWy4uLnRoaXMub3JpZ2luYWxEYXRhXTtcbiAgICBsZXQgdG90YWw6IG51bWJlciA9IHRoaXMub3JpZ2luYWxEYXRhLmxlbmd0aDtcbiAgICBpZiAodGhpcy5jdXJyZW50RGF0YS5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmIChnbG9iYWxTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLnNvbWUoKGtleSkgPT4gYCR7aXRlbVtrZXldfWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhnbG9iYWxTZWFyY2gudG9Mb3dlckNhc2UoKSkpLFxuICAgICAgICApO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5maWx0ZXJEYXRhKHRoaXMuY3VycmVudERhdGEsIGZpbHRlcik7XG4gICAgICAgIHRvdGFsID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoc29ydCkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5jdXJyZW50RGF0YS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoc29ydC5pZCwgc29ydC52YWx1ZSA9PT0gJ2Rlc2MnKSk7XG4gICAgICAgIHRvdGFsID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoIXNvcnQgJiYgIWZpbHRlciAmJiAhZ2xvYmFsU2VhcmNoICYmICFvdXRzaWRlRmlsdGVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSBbLi4udGhpcy5vcmlnaW5hbERhdGFdO1xuICAgICAgfVxuICAgICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsocGFnZSkgJiYgIUhlbHBlcnMuaXNCbGFuayhwYWdlU2l6ZSkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuc2xpY2UocGFnZSAqIHBhZ2VTaXplLCAocGFnZSArIDEpICogcGFnZVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2YoeyByZXN1bHRzOiB0aGlzLmN1cnJlbnREYXRhLCB0b3RhbCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhKGN1cnJlbnREYXRhOiBUW10sIGZpbHRlcjogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXSk6IFRbXSB7XG4gICAgY29uc3QgZmlsdGVycyA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoZmlsdGVyKTtcbiAgICBmaWx0ZXJzLmZvckVhY2goKGFGaWx0ZXIpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFGaWx0ZXIudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoYUZpbHRlci52YWx1ZSkubWFwKEhlbHBlcnMuZXNjYXBlU3RyaW5nKTtcbiAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGFGaWx0ZXIuaWQsIHZhbHVlcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBIZWxwZXJzLmVzY2FwZVN0cmluZyhhRmlsdGVyLnZhbHVlKTtcbiAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGFGaWx0ZXIuaWQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1cnJlbnREYXRhO1xuICB9XG59XG4iXX0=