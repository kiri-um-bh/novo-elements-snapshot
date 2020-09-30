/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
var EndOfWeekDisplayPipe = /** @class */ (function () {
    function EndOfWeekDisplayPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    /**
     * @param {?} endOfWeek
     * @param {?} startOfWeek
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    EndOfWeekDisplayPipe.prototype.transform = /**
     * @param {?} endOfWeek
     * @param {?} startOfWeek
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    function (endOfWeek, startOfWeek, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'short'; }
        if (endOfWeek.getMonth() === startOfWeek.getMonth()) {
            return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(endOfWeek);
        }
        return new Intl.DateTimeFormat(locale, { month: method, day: 'numeric' }).format(endOfWeek);
    };
    EndOfWeekDisplayPipe.decorators = [
        { type: Pipe, args: [{ name: 'endofweekdisplay' },] }
    ];
    /** @nocollapse */
    EndOfWeekDisplayPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return EndOfWeekDisplayPipe;
}());
export { EndOfWeekDisplayPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EndOfWeekDisplayPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL0VuZE9mV2Vla0Rpc3BsYXlQaXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFFRSw4QkFBdUMsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7OztJQUVuRSx3Q0FBUzs7Ozs7OztJQUFULFVBQVUsU0FBZSxFQUFFLFdBQWlCLEVBQUUsTUFBNEIsRUFBRSxNQUF3QjtRQUF0RCx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxNQUFNO1FBQUUsdUJBQUEsRUFBQSxnQkFBd0I7UUFDbEcsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ25ELE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5RTtRQUVELE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O2dCQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTs7Ozs2Q0FFbkIsTUFBTSxTQUFDLFNBQVM7O0lBUy9CLDJCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksb0JBQW9COzs7Ozs7SUFDbkIsc0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnZW5kb2Z3ZWVrZGlzcGxheScgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZldlZWtEaXNwbGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG5cbiAgdHJhbnNmb3JtKGVuZE9mV2VlazogRGF0ZSwgc3RhcnRPZldlZWs6IERhdGUsIGxvY2FsZTogc3RyaW5nID0gdGhpcy5sb2NhbGUsIG1ldGhvZDogc3RyaW5nID0gJ3Nob3J0Jyk6IFN0cmluZyB7XG4gICAgaWYgKGVuZE9mV2Vlay5nZXRNb250aCgpID09PSBzdGFydE9mV2Vlay5nZXRNb250aCgpKSB7XG4gICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IGRheTogJ251bWVyaWMnIH0pLmZvcm1hdChlbmRPZldlZWspO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgbW9udGg6IG1ldGhvZCwgZGF5OiAnbnVtZXJpYycgfSkuZm9ybWF0KGVuZE9mV2Vlayk7XG4gIH1cbn1cbiJdfQ==