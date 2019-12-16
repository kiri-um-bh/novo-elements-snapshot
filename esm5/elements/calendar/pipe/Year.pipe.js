/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/pipe/Year.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
var YearPipe = /** @class */ (function () {
    function YearPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    YearPipe.prototype.transform = /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'numeric'; }
        return new Intl.DateTimeFormat(locale, { year: method }).format(date);
    };
    YearPipe.decorators = [
        { type: Pipe, args: [{ name: 'year' },] }
    ];
    /** @nocollapse */
    YearPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return YearPipe;
}());
export { YearPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    YearPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvWWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQUVFLGtCQUF1QyxNQUF3QjtRQUF4Qix1QkFBQSxFQUFBLGdCQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7Ozs7SUFDbkUsNEJBQVM7Ozs7OztJQUFULFVBQVUsSUFBVSxFQUFFLE1BQTRCLEVBQUUsTUFBMEI7UUFBeEQsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsTUFBTTtRQUFFLHVCQUFBLEVBQUEsa0JBQTBCO1FBQzVFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFMRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7OzZDQUVQLE1BQU0sU0FBQyxTQUFTOztJQUkvQixlQUFDO0NBQUEsQUFORCxJQU1DO1NBTFksUUFBUTs7Ozs7O0lBQ1AsMEJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAneWVhcicgfSlcbmV4cG9ydCBjbGFzcyBZZWFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdudW1lcmljJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyB5ZWFyOiBtZXRob2QgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iXX0=