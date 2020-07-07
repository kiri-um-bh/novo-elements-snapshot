/**
 * @fileoverview added by tsickle
 * Generated from: services/options/OptionsService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// App
export class OptionsService {
    constructor() { }
    /**
     * @param {?} http
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    getOptionsConfig(http, field, config) {
        return {
            field: 'value',
            format: '$label',
            options: (/**
             * @param {?} query
             * @return {?}
             */
            (query) => {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    if (query && query.length) {
                        http.get(`${field.optionsUrl}?filter=${query || ''}`).subscribe(resolve, reject);
                    }
                    else {
                        resolve([]);
                    }
                }));
            }),
        };
    }
}
OptionsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OptionsService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7QUFLekQsTUFBTSxPQUFPLGNBQWM7SUFDekIsZ0JBQWUsQ0FBQzs7Ozs7OztJQUVoQixnQkFBZ0IsQ0FBQyxJQUFnQixFQUFFLEtBQVUsRUFBRSxNQUFnRTtRQUM3RyxPQUFPO1lBQ0wsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPOzs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxJQUFJLE9BQU87Ozs7O2dCQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO29CQUNyQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsV0FBVyxLQUFLLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNsRjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2I7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLENBQUE7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbEJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIEFwcFxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3B0aW9uc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0T3B0aW9uc0NvbmZpZyhodHRwOiBIdHRwQ2xpZW50LCBmaWVsZDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaHR0cC5nZXQoYCR7ZmllbGQub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YCkuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==