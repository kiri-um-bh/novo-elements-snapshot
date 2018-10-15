/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
export class WeekdayPipe {
    /**
     * @param {?=} locale
     */
    constructor(locale = 'en-US') {
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    transform(date, locale = this.locale, method = 'short') {
        return new Intl.DateTimeFormat(locale, { weekday: method }).format(date);
    }
}
WeekdayPipe.decorators = [
    { type: Pipe, args: [{ name: 'weekday' },] }
];
WeekdayPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /** @type {?} */
    WeekdayPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vla2RheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvV2Vla2RheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFLE1BQU07Ozs7SUFDSixZQUF1QyxTQUFpQixPQUFPO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7OztJQUNuRSxTQUFTLENBQUMsSUFBVSxFQUFFLFNBQWlCLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBaUIsT0FBTztRQUMxRSxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7O1lBTEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7O3lDQUVWLE1BQU0sU0FBQyxTQUFTOzs7O0lBQWpCLDZCQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3dlZWtkYXknIH0pXG5leHBvcnQgY2xhc3MgV2Vla2RheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnc2hvcnQnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6IG1ldGhvZCB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cbn1cbiJdfQ==