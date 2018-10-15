/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.currentData = this.currentData.filter((item) => Object.keys(item).some((key) => `${item[key]}`.toLowerCase().includes(globalSearch.toLowerCase())));
                total = this.currentData.length;
            }
            if (filter) {
                /** @type {?} */
                let value = Helpers.isString(filter.value) ? filter.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : filter.value;
                this.currentData = this.currentData.filter(Helpers.filterByField(filter.id, value));
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
}
if (false) {
    /** @type {?} */
    StaticDataTableService.prototype.originalData;
    /** @type {?} */
    StaticDataTableService.prototype.currentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NlcnZpY2VzL3N0YXRpYy1kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWpELE1BQU07Ozs7SUFHSixZQUFvQixjQUFtQixFQUFFO1FBQXJCLGdCQUFXLEdBQVgsV0FBVyxDQUFVO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7Ozs7SUFFTSxlQUFlLENBQ3BCLElBQXlELEVBQ3pELE1BQTJELEVBQzNELE9BQWUsQ0FBQyxFQUNoQixRQUFnQixFQUNoQixZQUFxQixFQUNyQixhQUFtQjtRQUVuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O1lBQ3RDLEtBQUssR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FDbkcsQ0FBQztnQkFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDakM7WUFDRCxJQUFJLE1BQU0sRUFBRTs7b0JBQ04sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQy9HLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUNqQztZQUNELElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUYsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDbkY7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGOzs7SUF6Q0MsOENBQWtCOztJQUVOLDZDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlPFQ+IGltcGxlbWVudHMgSURhdGFUYWJsZVNlcnZpY2U8VD4ge1xuICBvcmlnaW5hbERhdGE6IFRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnREYXRhOiBUW10gPSBbXSkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gWy4uLmN1cnJlbnREYXRhXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUYWJsZVJlc3VsdHMoXG4gICAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIHBhZ2U6IG51bWJlciA9IDAsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9PiB7XG4gICAgdGhpcy5jdXJyZW50RGF0YSA9IFsuLi50aGlzLm9yaWdpbmFsRGF0YV07XG4gICAgbGV0IHRvdGFsOiBudW1iZXIgPSB0aGlzLm9yaWdpbmFsRGF0YS5sZW5ndGg7XG4gICAgaWYgKHRoaXMuY3VycmVudERhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAoZ2xvYmFsU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5zb21lKChrZXkpID0+IGAke2l0ZW1ba2V5XX1gLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZ2xvYmFsU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSxcbiAgICAgICAgKTtcbiAgICAgICAgdG90YWwgPSB0aGlzLmN1cnJlbnREYXRhLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5pc1N0cmluZyhmaWx0ZXIudmFsdWUpID8gZmlsdGVyLnZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgOiBmaWx0ZXIudmFsdWU7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLmZpbHRlcihIZWxwZXJzLmZpbHRlckJ5RmllbGQoZmlsdGVyLmlkLCB2YWx1ZSkpO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuY3VycmVudERhdGEuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKHNvcnQuaWQsIHNvcnQudmFsdWUgPT09ICdkZXNjJykpO1xuICAgICAgICB0b3RhbCA9IHRoaXMuY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKCFzb3J0ICYmICFmaWx0ZXIgJiYgIWdsb2JhbFNlYXJjaCAmJiAhb3V0c2lkZUZpbHRlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gWy4uLnRoaXMub3JpZ2luYWxEYXRhXTtcbiAgICAgIH1cbiAgICAgIGlmICghSGVscGVycy5pc0JsYW5rKHBhZ2UpICYmICFIZWxwZXJzLmlzQmxhbmsocGFnZVNpemUpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmN1cnJlbnREYXRhLnNsaWNlKHBhZ2UgKiBwYWdlU2l6ZSwgKHBhZ2UgKyAxKSAqIHBhZ2VTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9mKHsgcmVzdWx0czogdGhpcy5jdXJyZW50RGF0YSwgdG90YWw6IHRvdGFsIH0pO1xuICB9XG59XG4iXX0=