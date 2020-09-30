/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
export class EndOfWeekDisplayPipe {
    /**
     * @param {?=} locale
     */
    constructor(locale = 'en-US') {
        this.locale = locale;
    }
    /**
     * @param {?} endOfWeek
     * @param {?} startOfWeek
     * @param {?=} locale
     * @param {?=} method
     * @return {?}
     */
    transform(endOfWeek, startOfWeek, locale = this.locale, method = 'short') {
        if (endOfWeek.getMonth() === startOfWeek.getMonth()) {
            return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(endOfWeek);
        }
        return new Intl.DateTimeFormat(locale, { month: method, day: 'numeric' }).format(endOfWeek);
    }
}
EndOfWeekDisplayPipe.decorators = [
    { type: Pipe, args: [{ name: 'endofweekdisplay' },] }
];
/** @nocollapse */
EndOfWeekDisplayPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EndOfWeekDisplayPipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL0VuZE9mV2Vla0Rpc3BsYXlQaXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUF1QyxTQUFpQixPQUFPO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFFbkUsU0FBUyxDQUFDLFNBQWUsRUFBRSxXQUFpQixFQUFFLFNBQWlCLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBaUIsT0FBTztRQUNsRyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbkQsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFOzs7O3lDQUVuQixNQUFNLFNBQUMsU0FBUzs7Ozs7OztJQUFqQixzQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBMT0NBTEVfSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdlbmRvZndlZWtkaXNwbGF5JyB9KVxuZXhwb3J0IGNsYXNzIEVuZE9mV2Vla0Rpc3BsYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJykge31cblxuICB0cmFuc2Zvcm0oZW5kT2ZXZWVrOiBEYXRlLCBzdGFydE9mV2VlazogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnc2hvcnQnKTogU3RyaW5nIHtcbiAgICBpZiAoZW5kT2ZXZWVrLmdldE1vbnRoKCkgPT09IHN0YXJ0T2ZXZWVrLmdldE1vbnRoKCkpIHtcbiAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgZGF5OiAnbnVtZXJpYycgfSkuZm9ybWF0KGVuZE9mV2Vlayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBtb250aDogbWV0aG9kLCBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZW5kT2ZXZWVrKTtcbiAgfVxufVxuIl19