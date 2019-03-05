/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class ActivityTableRenderers {
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    static propertyRenderer(prop) {
        /** @type {?} */
        let ret = (data) => {
            // TODO - allow for dots and sub props
            return data[prop];
        };
        return ret;
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    static dateRenderer(prop) {
        /** @type {?} */
        let ret = (data) => {
            return data[prop] ? new Date(data[prop]).toLocaleDateString() : '';
        };
        return ret;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07Ozs7OztJQUNKLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBSSxJQUFZOztZQUNqQyxHQUFHLEdBQUcsQ0FBQyxJQUFPLEVBQVUsRUFBRTtZQUM1QixzQ0FBc0M7WUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBSSxJQUFZOztZQUM3QixHQUFHLEdBQUcsQ0FBQyxJQUFPLEVBQVUsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JFLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpdml0eVRhYmxlUmVuZGVyZXJzIHtcbiAgc3RhdGljIHByb3BlcnR5UmVuZGVyZXI8VD4ocHJvcDogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCByZXQgPSAoZGF0YTogVCk6IHN0cmluZyA9PiB7XG4gICAgICAvLyBUT0RPIC0gYWxsb3cgZm9yIGRvdHMgYW5kIHN1YiBwcm9wc1xuICAgICAgcmV0dXJuIGRhdGFbcHJvcF07XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIGRhdGVSZW5kZXJlcjxUPihwcm9wOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgbGV0IHJldCA9IChkYXRhOiBUKTogc3RyaW5nID0+IHtcbiAgICAgIHJldHVybiBkYXRhW3Byb3BdID8gbmV3IERhdGUoZGF0YVtwcm9wXSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiAnJztcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==