/**
 * @fileoverview added by tsickle
 * Generated from: services/storage/storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalStorageService.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageService.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return localStorage.getItem(key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageService.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.decorators = [
        { type: Injectable }
    ];
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO0lBYUEsQ0FBQzs7Ozs7O0lBWEMscUNBQU87Ozs7O0lBQVAsVUFBUSxHQUFRLEVBQUUsS0FBVTtRQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELHFDQUFPOzs7O0lBQVAsVUFBUSxHQUFRO1FBQ2QsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLEdBQVE7UUFDakIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFaRixVQUFVOztJQWFYLDBCQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XG4gIHNldEl0ZW0oa2V5OiBhbnksIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0SXRlbShrZXk6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleTogYW55KTogYW55IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG4iXX0=