/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/services/static-data-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return of({ results: this.currentData, total });
    }
    /**
     * @param {?} currentData
     * @param {?} filter
     * @return {?}
     */
    filterData(currentData, filter) {
        /** @type {?} */
        const filters = Helpers.convertToArray(filter);
        filters.forEach((/**
         * @param {?} aFilter
         * @return {?}
         */
        (aFilter) => {
            if (Array.isArray(aFilter.value)) {
                /** @type {?} */
                const values = Helpers.convertToArray(aFilter.value).map(Helpers.escapeString);
                currentData = currentData.filter(Helpers.filterByField(aFilter.id, values));
            }
            else {
                /** @type {?} */
                const value = Helpers.escapeString(aFilter.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NlcnZpY2VzL3N0YXRpYy1kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVqRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQW9CLGNBQW1CLEVBQUU7UUFBckIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7Ozs7OztJQUVNLGVBQWUsQ0FDcEIsSUFBeUQsRUFDekQsTUFBNkMsRUFDN0MsT0FBZSxDQUFDLEVBQ2hCLFFBQWdCLEVBQ2hCLFlBQXFCLEVBQ3JCLGFBQW1CO1FBRW5CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7WUFDdEMsS0FBSyxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDLEVBQ25HLENBQUM7Z0JBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdELEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUNqQztZQUNELElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUYsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDbkY7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTSxVQUFVLENBQUMsV0FBZ0IsRUFBRSxNQUE2Qzs7Y0FDekUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDMUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUM5RSxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUM3RTtpQkFBTTs7c0JBQ0MsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDakQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDNUU7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7O0lBdERDLDhDQUFrQjs7Ozs7SUFFTiw2Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJRGF0YVRhYmxlRmlsdGVyLCBJRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGljRGF0YVRhYmxlU2VydmljZTxUPiBpbXBsZW1lbnRzIElEYXRhVGFibGVTZXJ2aWNlPFQ+IHtcbiAgb3JpZ2luYWxEYXRhOiBUW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50RGF0YTogVFtdID0gW10pIHtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IFsuLi5jdXJyZW50RGF0YV07XG4gIH1cblxuICBwdWJsaWMgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10sXG4gICAgcGFnZTogbnVtYmVyID0gMCxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGdsb2JhbFNlYXJjaD86IHN0cmluZyxcbiAgICBvdXRzaWRlRmlsdGVyPzogYW55LFxuICApOiBPYnNlcnZhYmxlPHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0+IHtcbiAgICB0aGlzLmN1cnJlbnREYXRhID0gWy4uLnRoaXMub3JpZ2luYWxEYXRhXTtcbiAgICBsZXQgdG90YWw6IG51bWJlciA9IHRoaXMub3JpZ2luYWxEYXRhLmxlbmd0aDtcbiAgICBpZiAodGhpcy5jdXJyZW50RGF0YS5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmIChnbG9iYWxTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLnNvbWUoKGtleSkgPT4gYCR7aXRlbVtrZXldfWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhnbG9iYWxTZWFyY2gudG9Mb3dlckNhc2UoKSkpLFxuICAgICAgICApO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5maWx0ZXJEYXRhKHRoaXMuY3VycmVudERhdGEsIGZpbHRlcik7XG4gICAgICAgIHRvdGFsID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoc29ydCkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5jdXJyZW50RGF0YS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoc29ydC5pZCwgc29ydC52YWx1ZSA9PT0gJ2Rlc2MnKSk7XG4gICAgICAgIHRvdGFsID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoIXNvcnQgJiYgIWZpbHRlciAmJiAhZ2xvYmFsU2VhcmNoICYmICFvdXRzaWRlRmlsdGVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSBbLi4udGhpcy5vcmlnaW5hbERhdGFdO1xuICAgICAgfVxuICAgICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsocGFnZSkgJiYgIUhlbHBlcnMuaXNCbGFuayhwYWdlU2l6ZSkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuc2xpY2UocGFnZSAqIHBhZ2VTaXplLCAocGFnZSArIDEpICogcGFnZVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2YoeyByZXN1bHRzOiB0aGlzLmN1cnJlbnREYXRhLCB0b3RhbCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhKGN1cnJlbnREYXRhOiBUW10sIGZpbHRlcjogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXSk6IFRbXSB7XG4gICAgY29uc3QgZmlsdGVycyA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoZmlsdGVyKTtcbiAgICBmaWx0ZXJzLmZvckVhY2goKGFGaWx0ZXIpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFGaWx0ZXIudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoYUZpbHRlci52YWx1ZSkubWFwKEhlbHBlcnMuZXNjYXBlU3RyaW5nKTtcbiAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGFGaWx0ZXIuaWQsIHZhbHVlcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBIZWxwZXJzLmVzY2FwZVN0cmluZyhhRmlsdGVyLnZhbHVlKTtcbiAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGFGaWx0ZXIuaWQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1cnJlbnREYXRhO1xuICB9XG59XG4iXX0=