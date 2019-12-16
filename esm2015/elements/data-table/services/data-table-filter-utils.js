/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/services/data-table-filter-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as dateFns from 'date-fns';
export class NovoDataTableFilterUtils {
    /**
     * @param {?=} filter
     * @param {?=} type
     * @param {?=} multiSelect
     * @return {?}
     */
    static constructFilter(filter, type, multiSelect) {
        /** @type {?} */
        let actualFilter = filter;
        if (filter) {
            if (type && type === 'date') {
                if (filter.startDate && filter.endDate) {
                    actualFilter = {
                        min: dateFns.startOfDay(filter.startDate.date),
                        max: dateFns.startOfDay(dateFns.addDays(dateFns.startOfDay(filter.endDate.date), 1)),
                    };
                }
                else {
                    actualFilter = {
                        min: filter.min ? dateFns.addDays(dateFns.startOfToday(), filter.min) : dateFns.startOfToday(),
                        max: filter.max ? dateFns.addDays(dateFns.endOfToday(), filter.max) : dateFns.endOfToday(),
                    };
                }
            }
            if (multiSelect && Array.isArray(filter)) {
                actualFilter = filter.map((/**
                 * @param {?} filterItem
                 * @return {?}
                 */
                (filterItem) => {
                    if (filterItem && filterItem.hasOwnProperty('value')) {
                        return filterItem.value;
                    }
                    return filterItem;
                }));
            }
            else if (actualFilter && actualFilter.hasOwnProperty('value')) {
                actualFilter = filter.value;
            }
        }
        return actualFilter;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1maWx0ZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFDbkMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFZLEVBQUUsSUFBVSxFQUFFLFdBQXFCOztZQUNoRSxZQUFZLEdBQUcsTUFBTTtRQUN6QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUN0QyxZQUFZLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQzlDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNyRixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLFlBQVksR0FBRzt3QkFDYixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUM5RixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO3FCQUMzRixDQUFDO2lCQUNIO2FBQ0Y7WUFFRCxJQUFJLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN4QyxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDdkMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDcEQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO3FCQUN6QjtvQkFDRCxPQUFPLFVBQVUsQ0FBQztnQkFDcEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvRCxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUM3QjtTQUNGO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMge1xuICBzdGF0aWMgY29uc3RydWN0RmlsdGVyKGZpbHRlcj86IGFueSwgdHlwZT86IGFueSwgbXVsdGlTZWxlY3Q/OiBib29sZWFuKSB7XG4gICAgbGV0IGFjdHVhbEZpbHRlciA9IGZpbHRlcjtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBpZiAodHlwZSAmJiB0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgaWYgKGZpbHRlci5zdGFydERhdGUgJiYgZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgICBhY3R1YWxGaWx0ZXIgPSB7XG4gICAgICAgICAgICBtaW46IGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuc3RhcnREYXRlLmRhdGUpLFxuICAgICAgICAgICAgbWF4OiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuZW5kRGF0ZS5kYXRlKSwgMSkpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgICAgbWluOiBmaWx0ZXIubWluID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGZpbHRlci5taW4pIDogZGF0ZUZucy5zdGFydE9mVG9kYXkoKSxcbiAgICAgICAgICAgIG1heDogZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLmVuZE9mVG9kYXkoKSwgZmlsdGVyLm1heCkgOiBkYXRlRm5zLmVuZE9mVG9kYXkoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtdWx0aVNlbGVjdCAmJiBBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0gZmlsdGVyLm1hcCgoZmlsdGVySXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXJJdGVtICYmIGZpbHRlckl0ZW0uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJJdGVtLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmlsdGVySXRlbTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGFjdHVhbEZpbHRlciAmJiBhY3R1YWxGaWx0ZXIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0gZmlsdGVyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWN0dWFsRmlsdGVyO1xuICB9XG59XG4iXX0=