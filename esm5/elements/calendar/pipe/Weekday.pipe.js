/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/pipe/Weekday.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
var WeekdayPipe = /** @class */ (function () {
    function WeekdayPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    WeekdayPipe.prototype.transform = /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'short'; }
        return new Intl.DateTimeFormat(locale, { weekday: method }).format(date);
    };
    WeekdayPipe.decorators = [
        { type: Pipe, args: [{ name: 'weekday' },] }
    ];
    /** @nocollapse */
    WeekdayPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return WeekdayPipe;
}());
export { WeekdayPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WeekdayPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vla2RheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvV2Vla2RheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQUVFLHFCQUF1QyxNQUF3QjtRQUF4Qix1QkFBQSxFQUFBLGdCQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7Ozs7SUFDbkUsK0JBQVM7Ozs7OztJQUFULFVBQVUsSUFBVSxFQUFFLE1BQTRCLEVBQUUsTUFBd0I7UUFBdEQsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsTUFBTTtRQUFFLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQzFFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkFMRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzs7OzZDQUVWLE1BQU0sU0FBQyxTQUFTOztJQUkvQixrQkFBQztDQUFBLEFBTkQsSUFNQztTQUxZLFdBQVc7Ozs7OztJQUNWLDZCQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3dlZWtkYXknIH0pXG5leHBvcnQgY2xhc3MgV2Vla2RheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnc2hvcnQnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6IG1ldGhvZCB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cbn1cbiJdfQ==