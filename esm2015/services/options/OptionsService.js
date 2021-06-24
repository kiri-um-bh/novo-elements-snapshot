import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// App
export class OptionsService {
    constructor() { }
    getOptionsConfig(http, field, config) {
        return {
            field: 'value',
            format: '$label',
            options: (query) => {
                return new Promise((resolve, reject) => {
                    if (query && query.length) {
                        http.get(`${field.optionsUrl}?filter=${query || ''}`).subscribe(resolve, reject);
                    }
                    else {
                        resolve([]);
                    }
                });
            },
        };
    }
}
OptionsService.ɵfac = function OptionsService_Factory(t) { return new (t || OptionsService)(); };
OptionsService.ɵprov = i0.ɵɵdefineInjectable({ token: OptionsService, factory: OptionsService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OptionsService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUMzQyxNQUFNO0FBR04sTUFBTSxPQUFPLGNBQWM7SUFDekIsZ0JBQWdCLENBQUM7SUFFakIsZ0JBQWdCLENBQUMsSUFBZ0IsRUFBRSxLQUFVLEVBQUUsTUFBZ0U7UUFDN0csT0FBTztZQUNMLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3JDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxXQUFXLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ2xGO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDYjtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7NEVBakJVLGNBQWM7c0RBQWQsY0FBYyxXQUFkLGNBQWM7a0RBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0T3B0aW9uc0NvbmZpZyhodHRwOiBIdHRwQ2xpZW50LCBmaWVsZDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaHR0cC5nZXQoYCR7ZmllbGQub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YCkuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==