import * as dateFns from 'date-fns';
var NovoDataTableFilterUtils = /** @class */ (function () {
    function NovoDataTableFilterUtils() {
    }
    NovoDataTableFilterUtils.constructFilter = function (filter, type, multiSelect) {
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
                actualFilter = filter.map(function (filterItem) {
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
    };
    return NovoDataTableFilterUtils;
}());
export { NovoDataTableFilterUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1maWx0ZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUVwQztJQUFBO0lBK0JBLENBQUM7SUE5QlEsd0NBQWUsR0FBdEIsVUFBdUIsTUFBWSxFQUFFLElBQVUsRUFBRSxXQUFxQjtRQUNwRSxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUMzQixJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDdEMsWUFBWSxHQUFHO3dCQUNiLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO3dCQUM5QyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDckYsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxZQUFZLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDOUYsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtxQkFDM0YsQ0FBQztpQkFDSDthQUNGO1lBRUQsSUFBSSxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDeEMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxVQUFVO29CQUNuQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNwRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUM7cUJBQ3pCO29CQUNELE9BQU8sVUFBVSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9ELFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQzdCO1NBQ0Y7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMge1xuICBzdGF0aWMgY29uc3RydWN0RmlsdGVyKGZpbHRlcj86IGFueSwgdHlwZT86IGFueSwgbXVsdGlTZWxlY3Q/OiBib29sZWFuKSB7XG4gICAgbGV0IGFjdHVhbEZpbHRlciA9IGZpbHRlcjtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBpZiAodHlwZSAmJiB0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgaWYgKGZpbHRlci5zdGFydERhdGUgJiYgZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgICBhY3R1YWxGaWx0ZXIgPSB7XG4gICAgICAgICAgICBtaW46IGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuc3RhcnREYXRlLmRhdGUpLFxuICAgICAgICAgICAgbWF4OiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuZW5kRGF0ZS5kYXRlKSwgMSkpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgICAgbWluOiBmaWx0ZXIubWluID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGZpbHRlci5taW4pIDogZGF0ZUZucy5zdGFydE9mVG9kYXkoKSxcbiAgICAgICAgICAgIG1heDogZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLmVuZE9mVG9kYXkoKSwgZmlsdGVyLm1heCkgOiBkYXRlRm5zLmVuZE9mVG9kYXkoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtdWx0aVNlbGVjdCAmJiBBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0gZmlsdGVyLm1hcCgoZmlsdGVySXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXJJdGVtICYmIGZpbHRlckl0ZW0uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJJdGVtLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmlsdGVySXRlbTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGFjdHVhbEZpbHRlciAmJiBhY3R1YWxGaWx0ZXIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0gZmlsdGVyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWN0dWFsRmlsdGVyO1xuICB9XG59XG4iXX0=