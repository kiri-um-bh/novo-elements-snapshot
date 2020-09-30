/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ActivityTableRenderers {
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    static propertyRenderer(prop) {
        /** @type {?} */
        let ret = (/**
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
        let ret = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            return data[prop] ? new Date(data[prop]).toLocaleDateString() : '';
        });
        return ret;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUksSUFBWTs7WUFDakMsR0FBRzs7OztRQUFHLENBQUMsSUFBTyxFQUFVLEVBQUU7WUFDNUIsc0NBQXNDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBSSxJQUFZOztZQUM3QixHQUFHOzs7O1FBQUcsQ0FBQyxJQUFPLEVBQVUsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JFLENBQUMsQ0FBQTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjdGl2aXR5VGFibGVSZW5kZXJlcnMge1xuICBzdGF0aWMgcHJvcGVydHlSZW5kZXJlcjxUPihwcm9wOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgbGV0IHJldCA9IChkYXRhOiBUKTogc3RyaW5nID0+IHtcbiAgICAgIC8vIFRPRE8gLSBhbGxvdyBmb3IgZG90cyBhbmQgc3ViIHByb3BzXG4gICAgICByZXR1cm4gZGF0YVtwcm9wXTtcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgZGF0ZVJlbmRlcmVyPFQ+KHByb3A6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBsZXQgcmV0ID0gKGRhdGE6IFQpOiBzdHJpbmcgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFbcHJvcF0gPyBuZXcgRGF0ZShkYXRhW3Byb3BdKS50b0xvY2FsZURhdGVTdHJpbmcoKSA6ICcnO1xuICAgIH07XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19