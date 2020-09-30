/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var ret = function (data) {
            // TODO - allow for dots and sub props
            return data[prop];
        };
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
        var ret = function (data) {
            return data[prop] ? new Date(data[prop]).toLocaleDateString() : '';
        };
        return ret;
    };
    return ActivityTableRenderers;
}());
export { ActivityTableRenderers };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQUE7SUFlQSxDQUFDOzs7Ozs7SUFkUSx1Q0FBZ0I7Ozs7O0lBQXZCLFVBQTJCLElBQVk7O1lBQ2pDLEdBQUcsR0FBRyxVQUFDLElBQU87WUFDaEIsc0NBQXNDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVNLG1DQUFZOzs7OztJQUFuQixVQUF1QixJQUFZOztZQUM3QixHQUFHLEdBQUcsVUFBQyxJQUFPO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckUsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWN0aXZpdHlUYWJsZVJlbmRlcmVycyB7XG4gIHN0YXRpYyBwcm9wZXJ0eVJlbmRlcmVyPFQ+KHByb3A6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBsZXQgcmV0ID0gKGRhdGE6IFQpOiBzdHJpbmcgPT4ge1xuICAgICAgLy8gVE9ETyAtIGFsbG93IGZvciBkb3RzIGFuZCBzdWIgcHJvcHNcbiAgICAgIHJldHVybiBkYXRhW3Byb3BdO1xuICAgIH07XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBkYXRlUmVuZGVyZXI8VD4ocHJvcDogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCByZXQgPSAoZGF0YTogVCk6IHN0cmluZyA9PiB7XG4gICAgICByZXR1cm4gZGF0YVtwcm9wXSA/IG5ldyBEYXRlKGRhdGFbcHJvcF0pLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogJyc7XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=