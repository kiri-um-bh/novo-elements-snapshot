/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as dateFns from 'date-fns';
var NovoDataTableFilterUtils = /** @class */ (function () {
    function NovoDataTableFilterUtils() {
    }
    /**
     * @param {?=} filter
     * @param {?=} type
     * @param {?=} multiSelect
     * @return {?}
     */
    NovoDataTableFilterUtils.constructFilter = /**
     * @param {?=} filter
     * @param {?=} type
     * @param {?=} multiSelect
     * @return {?}
     */
    function (filter, type, multiSelect) {
        /** @type {?} */
        var actualFilter = filter;
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
                function (filterItem) {
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
    };
    return NovoDataTableFilterUtils;
}());
export { NovoDataTableFilterUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1maWx0ZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFFcEM7SUFBQTtJQStCQSxDQUFDOzs7Ozs7O0lBOUJRLHdDQUFlOzs7Ozs7SUFBdEIsVUFBdUIsTUFBWSxFQUFFLElBQVUsRUFBRSxXQUFxQjs7WUFDaEUsWUFBWSxHQUFHLE1BQU07UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUMzQixJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDdEMsWUFBWSxHQUFHO3dCQUNiLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO3dCQUM5QyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDckYsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxZQUFZLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDOUYsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtxQkFDM0YsQ0FBQztpQkFDSDthQUNGO1lBRUQsSUFBSSxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDeEMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUMsVUFBVTtvQkFDbkMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDcEQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO3FCQUN6QjtvQkFDRCxPQUFPLFVBQVUsQ0FBQztnQkFDcEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvRCxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUM3QjtTQUNGO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzIHtcbiAgc3RhdGljIGNvbnN0cnVjdEZpbHRlcihmaWx0ZXI/OiBhbnksIHR5cGU/OiBhbnksIG11bHRpU2VsZWN0PzogYm9vbGVhbikge1xuICAgIGxldCBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgaWYgKHR5cGUgJiYgdHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIGlmIChmaWx0ZXIuc3RhcnREYXRlICYmIGZpbHRlci5lbmREYXRlKSB7XG4gICAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgICAgbWluOiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZmlsdGVyLnN0YXJ0RGF0ZS5kYXRlKSxcbiAgICAgICAgICAgIG1heDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZEYXkoZmlsdGVyLmVuZERhdGUuZGF0ZSksIDEpKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICAgIG1pbjogZmlsdGVyLm1pbiA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBmaWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgICBtYXg6IGZpbHRlci5tYXggPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5lbmRPZlRvZGF5KCksIGZpbHRlci5tYXgpIDogZGF0ZUZucy5lbmRPZlRvZGF5KCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobXVsdGlTZWxlY3QgJiYgQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IGZpbHRlci5tYXAoKGZpbHRlckl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVySXRlbSAmJiBmaWx0ZXJJdGVtLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySXRlbS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZpbHRlckl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChhY3R1YWxGaWx0ZXIgJiYgYWN0dWFsRmlsdGVyLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IGZpbHRlci52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjdHVhbEZpbHRlcjtcbiAgfVxufVxuIl19