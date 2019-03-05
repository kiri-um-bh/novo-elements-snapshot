/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
var MonthPipe = /** @class */ (function () {
    function MonthPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    MonthPipe.prototype.transform = /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'long'; }
        return new Intl.DateTimeFormat(locale, { month: method }).format(date);
    };
    MonthPipe.decorators = [
        { type: Pipe, args: [{ name: 'month' },] }
    ];
    MonthPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return MonthPipe;
}());
export { MonthPipe };
if (false) {
    /** @type {?} */
    MonthPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL01vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFFRSxtQkFBdUMsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7O0lBQ25FLDZCQUFTOzs7Ozs7SUFBVCxVQUFVLElBQVUsRUFBRSxNQUE0QixFQUFFLE1BQXVCO1FBQXJELHVCQUFBLEVBQUEsU0FBaUIsSUFBSSxDQUFDLE1BQU07UUFBRSx1QkFBQSxFQUFBLGVBQXVCO1FBQ3pFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkFMRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7NkNBRVIsTUFBTSxTQUFDLFNBQVM7O0lBSS9CLGdCQUFDO0NBQUEsQUFORCxJQU1DO1NBTFksU0FBUzs7O0lBQ1IsMkJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnbW9udGgnIH0pXG5leHBvcnQgY2xhc3MgTW9udGhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJykge31cbiAgdHJhbnNmb3JtKGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nID0gdGhpcy5sb2NhbGUsIG1ldGhvZDogc3RyaW5nID0gJ2xvbmcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IG1vbnRoOiBtZXRob2QgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iXX0=