/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A Promise that uses the deferred anti-pattern
 * @return {?}
 */
export function Deferred() {
    /** @type {?} */
    const temp = {};
    /** @type {?} */
    const promise = new Promise((resolve, reject) => {
        temp.resolve = resolve;
        temp.reject = reject;
    });
    promise.resolve = temp.resolve;
    promise.reject = temp.reject;
    return promise;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmZXJyZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvZGVmZXJyZWQvRGVmZXJyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxNQUFNLFVBQVUsUUFBUTs7VUFDaEIsSUFBSSxHQUFRLEVBQUU7O1VBQ2QsT0FBTyxHQUFRLElBQUksT0FBTyxDQUFDLENBQUMsT0FBWSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBQcm9taXNlIHRoYXQgdXNlcyB0aGUgZGVmZXJyZWQgYW50aS1wYXR0ZXJuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEZWZlcnJlZCgpIHtcbiAgY29uc3QgdGVtcDogYW55ID0ge307XG4gIGNvbnN0IHByb21pc2U6IGFueSA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XG4gICAgdGVtcC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB0ZW1wLnJlamVjdCA9IHJlamVjdDtcbiAgfSk7XG4gIHByb21pc2UucmVzb2x2ZSA9IHRlbXAucmVzb2x2ZTtcbiAgcHJvbWlzZS5yZWplY3QgPSB0ZW1wLnJlamVjdDtcbiAgcmV0dXJuIHByb21pc2U7XG59XG4iXX0=