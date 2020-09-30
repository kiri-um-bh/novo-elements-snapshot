/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// App
var OptionsService = /** @class */ (function () {
    function OptionsService() {
    }
    /**
     * @param {?} http
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    OptionsService.prototype.getOptionsConfig = /**
     * @param {?} http
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    function (http, field, config) {
        return {
            field: 'value',
            format: '$label',
            options: (/**
             * @param {?} query
             * @return {?}
             */
            function (query) {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                function (resolve, reject) {
                    if (query && query.length) {
                        http.get(field.optionsUrl + "?filter=" + (query || '')).subscribe(resolve, reject);
                    }
                    else {
                        resolve([]);
                    }
                }));
            }),
        };
    };
    OptionsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OptionsService.ctorParameters = function () { return []; };
    return OptionsService;
}());
export { OptionsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUl6RDtJQUVFO0lBQWUsQ0FBQzs7Ozs7OztJQUVoQix5Q0FBZ0I7Ozs7OztJQUFoQixVQUFpQixJQUFnQixFQUFFLEtBQVUsRUFBRSxNQUFnRTtRQUM3RyxPQUFPO1lBQ0wsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPOzs7O1lBQUUsVUFBQyxLQUFLO2dCQUNiLE9BQU8sSUFBSSxPQUFPOzs7OztnQkFBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUN6QixJQUFJLENBQUMsR0FBRyxDQUFJLEtBQUssQ0FBQyxVQUFVLGlCQUFXLEtBQUssSUFBSSxFQUFFLENBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ2xGO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDYjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFsQkYsVUFBVTs7OztJQW1CWCxxQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbEJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIEFwcFxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3B0aW9uc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0T3B0aW9uc0NvbmZpZyhodHRwOiBIdHRwQ2xpZW50LCBmaWVsZDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaHR0cC5nZXQoYCR7ZmllbGQub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YCkuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==