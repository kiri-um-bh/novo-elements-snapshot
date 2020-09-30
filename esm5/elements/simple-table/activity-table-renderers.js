/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ActivityTableRenderers = /** @class */ (function () {
    function ActivityTableRenderers() {
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    ActivityTableRenderers.propertyRenderer = /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var ret = (/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            // TODO - allow for dots and sub props
            return data[prop];
        });
        return ret;
    };
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    ActivityTableRenderers.dateRenderer = /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var ret = (/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data[prop] ? new Date(data[prop]).toLocaleDateString() : '';
        });
        return ret;
    };
    return ActivityTableRenderers;
}());
export { ActivityTableRenderers };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQUE7SUFlQSxDQUFDOzs7Ozs7SUFkUSx1Q0FBZ0I7Ozs7O0lBQXZCLFVBQTJCLElBQVk7O1lBQ2pDLEdBQUc7Ozs7UUFBRyxVQUFDLElBQU87WUFDaEIsc0NBQXNDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRU0sbUNBQVk7Ozs7O0lBQW5CLFVBQXVCLElBQVk7O1lBQzdCLEdBQUc7Ozs7UUFBRyxVQUFDLElBQU87WUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRSxDQUFDLENBQUE7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFmRCxJQWVDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjdGl2aXR5VGFibGVSZW5kZXJlcnMge1xuICBzdGF0aWMgcHJvcGVydHlSZW5kZXJlcjxUPihwcm9wOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgbGV0IHJldCA9IChkYXRhOiBUKTogc3RyaW5nID0+IHtcbiAgICAgIC8vIFRPRE8gLSBhbGxvdyBmb3IgZG90cyBhbmQgc3ViIHByb3BzXG4gICAgICByZXR1cm4gZGF0YVtwcm9wXTtcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgZGF0ZVJlbmRlcmVyPFQ+KHByb3A6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBsZXQgcmV0ID0gKGRhdGE6IFQpOiBzdHJpbmcgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFbcHJvcF0gPyBuZXcgRGF0ZShkYXRhW3Byb3BdKS50b0xvY2FsZURhdGVTdHJpbmcoKSA6ICcnO1xuICAgIH07XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19