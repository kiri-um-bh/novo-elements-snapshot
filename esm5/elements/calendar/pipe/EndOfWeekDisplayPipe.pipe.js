/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/pipe/EndOfWeekDisplayPipe.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL0VuZE9mV2Vla0Rpc3BsYXlQaXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBRUUsOEJBQXVDLE1BQXdCO1FBQXhCLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFFbkUsd0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLFNBQWUsRUFBRSxXQUFpQixFQUFFLE1BQTRCLEVBQUUsTUFBd0I7UUFBdEQsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsTUFBTTtRQUFFLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQ2xHLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNuRCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUU7UUFFRCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RixDQUFDOztnQkFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7Ozs7NkNBRW5CLE1BQU0sU0FBQyxTQUFTOztJQVMvQiwyQkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLG9CQUFvQjs7Ozs7O0lBQ25CLHNDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2VuZG9md2Vla2Rpc3BsYXknIH0pXG5leHBvcnQgY2xhc3MgRW5kT2ZXZWVrRGlzcGxheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuXG4gIHRyYW5zZm9ybShlbmRPZldlZWs6IERhdGUsIHN0YXJ0T2ZXZWVrOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdzaG9ydCcpOiBTdHJpbmcge1xuICAgIGlmIChlbmRPZldlZWsuZ2V0TW9udGgoKSA9PT0gc3RhcnRPZldlZWsuZ2V0TW9udGgoKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZW5kT2ZXZWVrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IG1vbnRoOiBtZXRob2QsIGRheTogJ251bWVyaWMnIH0pLmZvcm1hdChlbmRPZldlZWspO1xuICB9XG59XG4iXX0=