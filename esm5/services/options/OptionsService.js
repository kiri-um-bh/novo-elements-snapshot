/**
 * @fileoverview added by tsickle
 * Generated from: services/options/OptionsService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7QUFJekQ7SUFFRTtJQUFlLENBQUM7Ozs7Ozs7SUFFaEIseUNBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsSUFBZ0IsRUFBRSxLQUFVLEVBQUUsTUFBZ0U7UUFDN0csT0FBTztZQUNMLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTzs7OztZQUFFLFVBQUMsS0FBSztnQkFDYixPQUFPLElBQUksT0FBTzs7Ozs7Z0JBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDakMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBSSxLQUFLLENBQUMsVUFBVSxpQkFBVyxLQUFLLElBQUksRUFBRSxDQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNsRjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2I7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLENBQUE7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFVBQVU7Ozs7SUFtQlgscUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBBcHBcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldE9wdGlvbnNDb25maWcoaHR0cDogSHR0cENsaWVudCwgZmllbGQ6IGFueSwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgIG9wdGlvbnM6IChxdWVyeSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGh0dHAuZ2V0KGAke2ZpZWxkLm9wdGlvbnNVcmx9P2ZpbHRlcj0ke3F1ZXJ5IHx8ICcnfWApLnN1YnNjcmliZShyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=