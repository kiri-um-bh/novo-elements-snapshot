/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                actualFilter = filter.map((filterItem) => {
                    if (filterItem && filterItem.hasOwnProperty('value')) {
                        return filterItem.value;
                    }
                    return filterItem;
                });
            }
            else if (actualFilter && actualFilter.hasOwnProperty('value')) {
                actualFilter = filter.value;
            }
        }
        return actualFilter;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1maWx0ZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFFcEMsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQUNuQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQVksRUFBRSxJQUFVLEVBQUUsV0FBcUI7O1lBQ2hFLFlBQVksR0FBRyxNQUFNO1FBQ3pCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ3RDLFlBQVksR0FBRzt3QkFDYixHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDOUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsWUFBWSxHQUFHO3dCQUNiLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQzlGLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7cUJBQzNGLENBQUM7aUJBQ0g7YUFDRjtZQUVELElBQUksV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3hDLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7b0JBQ3ZDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ3BELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztxQkFDekI7b0JBQ0QsT0FBTyxVQUFVLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDL0QsWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDN0I7U0FDRjtRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzIHtcbiAgc3RhdGljIGNvbnN0cnVjdEZpbHRlcihmaWx0ZXI/OiBhbnksIHR5cGU/OiBhbnksIG11bHRpU2VsZWN0PzogYm9vbGVhbikge1xuICAgIGxldCBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgaWYgKHR5cGUgJiYgdHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIGlmIChmaWx0ZXIuc3RhcnREYXRlICYmIGZpbHRlci5lbmREYXRlKSB7XG4gICAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgICAgbWluOiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZmlsdGVyLnN0YXJ0RGF0ZS5kYXRlKSxcbiAgICAgICAgICAgIG1heDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZEYXkoZmlsdGVyLmVuZERhdGUuZGF0ZSksIDEpKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICAgIG1pbjogZmlsdGVyLm1pbiA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBmaWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgICBtYXg6IGZpbHRlci5tYXggPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5lbmRPZlRvZGF5KCksIGZpbHRlci5tYXgpIDogZGF0ZUZucy5lbmRPZlRvZGF5KCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobXVsdGlTZWxlY3QgJiYgQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IGZpbHRlci5tYXAoKGZpbHRlckl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVySXRlbSAmJiBmaWx0ZXJJdGVtLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySXRlbS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZpbHRlckl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChhY3R1YWxGaWx0ZXIgJiYgYWN0dWFsRmlsdGVyLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IGZpbHRlci52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjdHVhbEZpbHRlcjtcbiAgfVxufVxuIl19