/**
 * @fileoverview added by tsickle
 * Generated from: elements/calendar/pipe/Month.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */
    MonthPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return MonthPipe;
}());
export { MonthPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MonthPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL01vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBRUUsbUJBQXVDLE1BQXdCO1FBQXhCLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7OztJQUNuRSw2QkFBUzs7Ozs7O0lBQVQsVUFBVSxJQUFVLEVBQUUsTUFBNEIsRUFBRSxNQUF1QjtRQUFyRCx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxNQUFNO1FBQUUsdUJBQUEsRUFBQSxlQUF1QjtRQUN6RSxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBTEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7Ozs2Q0FFUixNQUFNLFNBQUMsU0FBUzs7SUFJL0IsZ0JBQUM7Q0FBQSxBQU5ELElBTUM7U0FMWSxTQUFTOzs7Ozs7SUFDUiwyQkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBMT0NBTEVfSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdtb250aCcgfSlcbmV4cG9ydCBjbGFzcyBNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnbG9uZycpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgbW9udGg6IG1ldGhvZCB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cbn1cbiJdfQ==