/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/activity-table-renderers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ActivityTableRenderers {
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    static propertyRenderer(prop) {
        /** @type {?} */
        const ret = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            // TODO - allow for dots and sub props
            return data[prop];
        });
        return ret;
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    static dateRenderer(prop) {
        /** @type {?} */
        const ret = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            return data[prop] ? new Date(data[prop]).toLocaleDateString() : '';
        });
        return ret;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFDakMsTUFBTSxDQUFDLGdCQUFnQixDQUFJLElBQVk7O2NBQy9CLEdBQUc7Ozs7UUFBRyxDQUFDLElBQU8sRUFBVSxFQUFFO1lBQzlCLHNDQUFzQztZQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUE7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUksSUFBWTs7Y0FDM0IsR0FBRzs7OztRQUFHLENBQUMsSUFBTyxFQUFVLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRSxDQUFDLENBQUE7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpdml0eVRhYmxlUmVuZGVyZXJzIHtcbiAgc3RhdGljIHByb3BlcnR5UmVuZGVyZXI8VD4ocHJvcDogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IHJldCA9IChkYXRhOiBUKTogc3RyaW5nID0+IHtcbiAgICAgIC8vIFRPRE8gLSBhbGxvdyBmb3IgZG90cyBhbmQgc3ViIHByb3BzXG4gICAgICByZXR1cm4gZGF0YVtwcm9wXTtcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgZGF0ZVJlbmRlcmVyPFQ+KHByb3A6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBjb25zdCByZXQgPSAoZGF0YTogVCk6IHN0cmluZyA9PiB7XG4gICAgICByZXR1cm4gZGF0YVtwcm9wXSA/IG5ldyBEYXRlKGRhdGFbcHJvcF0pLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogJyc7XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=