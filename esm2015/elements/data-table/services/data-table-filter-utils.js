/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1maWx0ZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFFcEMsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQUNuQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQVksRUFBRSxJQUFVLEVBQUUsV0FBcUI7O1lBQ2hFLFlBQVksR0FBRyxNQUFNO1FBQ3pCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ3RDLFlBQVksR0FBRzt3QkFDYixHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDOUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsWUFBWSxHQUFHO3dCQUNiLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQzlGLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7cUJBQzNGLENBQUM7aUJBQ0g7YUFDRjtZQUVELElBQUksV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3hDLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO29CQUN2QyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNwRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUM7cUJBQ3pCO29CQUNELE9BQU8sVUFBVSxDQUFDO2dCQUNwQixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9ELFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQzdCO1NBQ0Y7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscyB7XG4gIHN0YXRpYyBjb25zdHJ1Y3RGaWx0ZXIoZmlsdGVyPzogYW55LCB0eXBlPzogYW55LCBtdWx0aVNlbGVjdD86IGJvb2xlYW4pIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gZmlsdGVyO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIGlmICh0eXBlICYmIHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICBpZiAoZmlsdGVyLnN0YXJ0RGF0ZSAmJiBmaWx0ZXIuZW5kRGF0ZSkge1xuICAgICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICAgIG1pbjogZGF0ZUZucy5zdGFydE9mRGF5KGZpbHRlci5zdGFydERhdGUuZGF0ZSksXG4gICAgICAgICAgICBtYXg6IGRhdGVGbnMuc3RhcnRPZkRheShkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mRGF5KGZpbHRlci5lbmREYXRlLmRhdGUpLCAxKSksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3R1YWxGaWx0ZXIgPSB7XG4gICAgICAgICAgICBtaW46IGZpbHRlci5taW4gPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgZmlsdGVyLm1pbikgOiBkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLFxuICAgICAgICAgICAgbWF4OiBmaWx0ZXIubWF4ID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuZW5kT2ZUb2RheSgpLCBmaWx0ZXIubWF4KSA6IGRhdGVGbnMuZW5kT2ZUb2RheSgpLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG11bHRpU2VsZWN0ICYmIEFycmF5LmlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXIubWFwKChmaWx0ZXJJdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlckl0ZW0gJiYgZmlsdGVySXRlbS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckl0ZW0udmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmaWx0ZXJJdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0dWFsRmlsdGVyICYmIGFjdHVhbEZpbHRlci5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXIudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhY3R1YWxGaWx0ZXI7XG4gIH1cbn1cbiJdfQ==