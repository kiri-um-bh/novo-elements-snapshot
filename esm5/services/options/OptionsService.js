import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// App
var OptionsService = /** @class */ (function () {
    function OptionsService() {
    }
    OptionsService.prototype.getOptionsConfig = function (http, field, config) {
        return {
            field: 'value',
            format: '$label',
            options: function (query) {
                return new Promise(function (resolve, reject) {
                    if (query && query.length) {
                        http.get(field.optionsUrl + "?filter=" + (query || '')).subscribe(resolve, reject);
                    }
                    else {
                        resolve([]);
                    }
                });
            },
        };
    };
    OptionsService.ɵfac = function OptionsService_Factory(t) { return new (t || OptionsService)(); };
    OptionsService.ɵprov = i0.ɵɵdefineInjectable({ token: OptionsService, factory: OptionsService.ɵfac });
    return OptionsService;
}());
export { OptionsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OptionsService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUMzQyxNQUFNO0FBRU47SUFFRTtJQUFnQixDQUFDO0lBRWpCLHlDQUFnQixHQUFoQixVQUFpQixJQUFnQixFQUFFLEtBQVUsRUFBRSxNQUFnRTtRQUM3RyxPQUFPO1lBQ0wsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsVUFBQyxLQUFLO2dCQUNiLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDakMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBSSxLQUFLLENBQUMsVUFBVSxpQkFBVyxLQUFLLElBQUksRUFBRSxDQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNsRjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2I7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Z0ZBakJVLGNBQWM7MERBQWQsY0FBYyxXQUFkLGNBQWM7eUJBTjNCO0NBd0JDLEFBbkJELElBbUJDO1NBbEJZLGNBQWM7a0RBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0T3B0aW9uc0NvbmZpZyhodHRwOiBIdHRwQ2xpZW50LCBmaWVsZDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaHR0cC5nZXQoYCR7ZmllbGQub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YCkuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==