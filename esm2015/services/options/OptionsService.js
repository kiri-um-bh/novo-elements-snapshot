/**
 * @fileoverview added by tsickle
 * Generated from: services/options/OptionsService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLGdCQUFnQixDQUFDOzs7Ozs7O0lBRWpCLGdCQUFnQixDQUFDLElBQWdCLEVBQUUsS0FBVSxFQUFFLE1BQWdFO1FBQzdHLE9BQU87WUFDTCxLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE9BQU87Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixPQUFPLElBQUksT0FBTzs7Ozs7Z0JBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3JDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxXQUFXLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ2xGO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDYjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFsQkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3B0aW9uc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldE9wdGlvbnNDb25maWcoaHR0cDogSHR0cENsaWVudCwgZmllbGQ6IGFueSwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgIG9wdGlvbnM6IChxdWVyeSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGh0dHAuZ2V0KGAke2ZpZWxkLm9wdGlvbnNVcmx9P2ZpbHRlcj0ke3F1ZXJ5IHx8ICcnfWApLnN1YnNjcmliZShyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=