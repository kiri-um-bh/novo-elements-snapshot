/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { Helpers } from '../../../utils/Helpers';
/**
 * @template T
 */
export class StaticDataTableService {
    /**
     * @param {?=} currentData
     */
    constructor(currentData = []) {
        this.currentData = currentData;
        this.originalData = [...currentData];
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
    getTableResults(sort, filter, page = 0, pageSize, globalSearch, outsideFilter) {
        this.currentData = [...this.originalData];
        /** @type {?} */
        let total = this.originalData.length;
        if (this.currentData.length !== 0) {
            if (globalSearch) {
                this.currentData = this.currentData.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => Object.keys(item).some((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => `${item[key]}`.toLowerCase().includes(globalSearch.toLowerCase())))));
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
                this.currentData = [...this.originalData];
            }
            if (!Helpers.isBlank(page) && !Helpers.isBlank(pageSize)) {
                this.currentData = this.currentData.slice(page * pageSize, (page + 1) * pageSize);
            }
        }
        return of({ results: this.currentData, total: total });
    }
    /**
     * @param {?} currentData
     * @param {?} filter
     * @return {?}
     */
    filterData(currentData, filter) {
        /** @type {?} */
        let filters = Helpers.convertToArray(filter);
        filters.forEach((/**
         * @param {?} aFilter
         * @return {?}
         */
        (aFilter) => {
            if (Array.isArray(aFilter.value)) {
                /** @type {?} */
                let values = Helpers.convertToArray(aFilter.value).map(Helpers.escapeString);
                currentData = currentData.filter(Helpers.filterByField(aFilter.id, values));
            }
            else {
                /** @type {?} */
                let value = Helpers.escapeString(aFilter.value);
                currentData = currentData.filter(Helpers.filterByField(aFilter.id, value));
            }
        }));
        return currentData;
    }
}
if (false) {
    /** @type {?} */
    StaticDataTableService.prototype.originalData;
    /**
     * @type {?}
     * @private
     */
    StaticDataTableService.prototype.currentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NlcnZpY2VzL3N0YXRpYy1kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWpELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFHakMsWUFBb0IsY0FBbUIsRUFBRTtRQUFyQixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7Ozs7O0lBRU0sZUFBZSxDQUNwQixJQUF5RCxFQUN6RCxNQUE2QyxFQUM3QyxPQUFlLENBQUMsRUFDaEIsUUFBZ0IsRUFDaEIsWUFBcUIsRUFDckIsYUFBbUI7UUFFbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOztZQUN0QyxLQUFLLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7OztnQkFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsRUFDbkcsQ0FBQztnQkFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDakM7WUFDRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUNuRjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTSxVQUFVLENBQUMsV0FBZ0IsRUFBRSxNQUE2Qzs7WUFDM0UsT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDNUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUM1RSxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUM3RTtpQkFBTTs7b0JBQ0QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDL0MsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDNUU7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7O0lBdERDLDhDQUFrQjs7Ozs7SUFFTiw2Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJRGF0YVRhYmxlRmlsdGVyLCBJRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGljRGF0YVRhYmxlU2VydmljZTxUPiBpbXBsZW1lbnRzIElEYXRhVGFibGVTZXJ2aWNlPFQ+IHtcbiAgb3JpZ2luYWxEYXRhOiBUW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50RGF0YTogVFtdID0gW10pIHtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IFsuLi5jdXJyZW50RGF0YV07XG4gIH1cblxuICBwdWJsaWMgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10sXG4gICAgcGFnZTogbnVtYmVyID0gMCxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGdsb2JhbFNlYXJjaD86IHN0cmluZyxcbiAgICBvdXRzaWRlRmlsdGVyPzogYW55LFxuICApOiBPYnNlcnZhYmxlPHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0+IHtcbiAgICB0aGlzLmN1cnJlbnREYXRhID0gWy4uLnRoaXMub3JpZ2luYWxEYXRhXTtcbiAgICBsZXQgdG90YWw6IG51bWJlciA9IHRoaXMub3JpZ2luYWxEYXRhLmxlbmd0aDtcbiAgICBpZiAodGhpcy5jdXJyZW50RGF0YS5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmIChnbG9iYWxTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLnNvbWUoKGtleSkgPT4gYCR7aXRlbVtrZXldfWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhnbG9iYWxTZWFyY2gudG9Mb3dlckNhc2UoKSkpLFxuICAgICAgICApO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5maWx0ZXJEYXRhKHRoaXMuY3VycmVudERhdGEsIGZpbHRlcik7XG4gICAgICAgIHRvdGFsID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoc29ydCkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5jdXJyZW50RGF0YS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoc29ydC5pZCwgc29ydC52YWx1ZSA9PT0gJ2Rlc2MnKSk7XG4gICAgICAgIHRvdGFsID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoIXNvcnQgJiYgIWZpbHRlciAmJiAhZ2xvYmFsU2VhcmNoICYmICFvdXRzaWRlRmlsdGVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSBbLi4udGhpcy5vcmlnaW5hbERhdGFdO1xuICAgICAgfVxuICAgICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsocGFnZSkgJiYgIUhlbHBlcnMuaXNCbGFuayhwYWdlU2l6ZSkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuc2xpY2UocGFnZSAqIHBhZ2VTaXplLCAocGFnZSArIDEpICogcGFnZVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2YoeyByZXN1bHRzOiB0aGlzLmN1cnJlbnREYXRhLCB0b3RhbDogdG90YWwgfSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShjdXJyZW50RGF0YTogVFtdLCBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10pOiBUW10ge1xuICAgIGxldCBmaWx0ZXJzID0gSGVscGVycy5jb252ZXJ0VG9BcnJheShmaWx0ZXIpO1xuICAgIGZpbHRlcnMuZm9yRWFjaCgoYUZpbHRlcikgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYUZpbHRlci52YWx1ZSkpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoYUZpbHRlci52YWx1ZSkubWFwKEhlbHBlcnMuZXNjYXBlU3RyaW5nKTtcbiAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGFGaWx0ZXIuaWQsIHZhbHVlcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5lc2NhcGVTdHJpbmcoYUZpbHRlci52YWx1ZSk7XG4gICAgICAgIGN1cnJlbnREYXRhID0gY3VycmVudERhdGEuZmlsdGVyKEhlbHBlcnMuZmlsdGVyQnlGaWVsZChhRmlsdGVyLmlkLCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjdXJyZW50RGF0YTtcbiAgfVxufVxuIl19