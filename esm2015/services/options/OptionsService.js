/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUt6RCxNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZSxDQUFDOzs7Ozs7O0lBRWhCLGdCQUFnQixDQUFDLElBQWdCLEVBQUUsS0FBVSxFQUFFLE1BQWdFO1FBQzdHLE9BQU87WUFDTCxLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE9BQU87Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixPQUFPLElBQUksT0FBTzs7Ozs7Z0JBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3JDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxXQUFXLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ2xGO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDYjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFsQkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gQXBwXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRPcHRpb25zQ29uZmlnKGh0dHA6IEh0dHBDbGllbnQsIGZpZWxkOiBhbnksIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0pOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICBvcHRpb25zOiAocXVlcnkpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICBodHRwLmdldChgJHtmaWVsZC5vcHRpb25zVXJsfT9maWx0ZXI9JHtxdWVyeSB8fCAnJ31gKS5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19