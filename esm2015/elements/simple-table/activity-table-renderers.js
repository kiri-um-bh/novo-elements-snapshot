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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUksSUFBWTs7WUFDakMsR0FBRyxHQUFHLENBQUMsSUFBTyxFQUFVLEVBQUU7WUFDNUIsc0NBQXNDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUksSUFBWTs7WUFDN0IsR0FBRyxHQUFHLENBQUMsSUFBTyxFQUFVLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRSxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWN0aXZpdHlUYWJsZVJlbmRlcmVycyB7XG4gIHN0YXRpYyBwcm9wZXJ0eVJlbmRlcmVyPFQ+KHByb3A6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBsZXQgcmV0ID0gKGRhdGE6IFQpOiBzdHJpbmcgPT4ge1xuICAgICAgLy8gVE9ETyAtIGFsbG93IGZvciBkb3RzIGFuZCBzdWIgcHJvcHNcbiAgICAgIHJldHVybiBkYXRhW3Byb3BdO1xuICAgIH07XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBkYXRlUmVuZGVyZXI8VD4ocHJvcDogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCByZXQgPSAoZGF0YTogVCk6IHN0cmluZyA9PiB7XG4gICAgICByZXR1cm4gZGF0YVtwcm9wXSA/IG5ldyBEYXRlKGRhdGFbcHJvcF0pLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogJyc7XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=