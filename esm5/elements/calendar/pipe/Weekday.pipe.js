/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    WeekdayPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return WeekdayPipe;
}());
export { WeekdayPipe };
if (false) {
    /** @type {?} */
    WeekdayPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vla2RheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvV2Vla2RheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBRUUscUJBQXVDLE1BQXdCO1FBQXhCLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7OztJQUNuRSwrQkFBUzs7Ozs7O0lBQVQsVUFBVSxJQUFVLEVBQUUsTUFBNEIsRUFBRSxNQUF3QjtRQUF0RCx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxNQUFNO1FBQUUsdUJBQUEsRUFBQSxnQkFBd0I7UUFDMUUsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7O2dCQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7Ozs2Q0FFVixNQUFNLFNBQUMsU0FBUzs7SUFJL0Isa0JBQUM7Q0FBQSxBQU5ELElBTUM7U0FMWSxXQUFXOzs7SUFDViw2QkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBMT0NBTEVfSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICd3ZWVrZGF5JyB9KVxuZXhwb3J0IGNsYXNzIFdlZWtkYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJykge31cbiAgdHJhbnNmb3JtKGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nID0gdGhpcy5sb2NhbGUsIG1ldGhvZDogc3RyaW5nID0gJ3Nob3J0Jyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyB3ZWVrZGF5OiBtZXRob2QgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iXX0=