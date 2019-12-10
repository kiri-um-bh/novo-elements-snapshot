/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/activity-table-renderers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUFBO0lBZUEsQ0FBQzs7Ozs7O0lBZFEsdUNBQWdCOzs7OztJQUF2QixVQUEyQixJQUFZOztZQUNqQyxHQUFHOzs7O1FBQUcsVUFBQyxJQUFPO1lBQ2hCLHNDQUFzQztZQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUE7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVNLG1DQUFZOzs7OztJQUFuQixVQUF1QixJQUFZOztZQUM3QixHQUFHOzs7O1FBQUcsVUFBQyxJQUFPO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckUsQ0FBQyxDQUFBO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpdml0eVRhYmxlUmVuZGVyZXJzIHtcbiAgc3RhdGljIHByb3BlcnR5UmVuZGVyZXI8VD4ocHJvcDogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCByZXQgPSAoZGF0YTogVCk6IHN0cmluZyA9PiB7XG4gICAgICAvLyBUT0RPIC0gYWxsb3cgZm9yIGRvdHMgYW5kIHN1YiBwcm9wc1xuICAgICAgcmV0dXJuIGRhdGFbcHJvcF07XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIGRhdGVSZW5kZXJlcjxUPihwcm9wOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgbGV0IHJldCA9IChkYXRhOiBUKTogc3RyaW5nID0+IHtcbiAgICAgIHJldHVybiBkYXRhW3Byb3BdID8gbmV3IERhdGUoZGF0YVtwcm9wXSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiAnJztcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==