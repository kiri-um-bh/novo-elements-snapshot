/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A Promise that uses the deferred anti-pattern
 * @return {?}
 */
export function Deferred() {
    /** @type {?} */
    var temp = {};
    /** @type {?} */
    var promise = new Promise(function (resolve, reject) {
        temp.resolve = resolve;
        temp.reject = reject;
    });
    promise.resolve = temp.resolve;
    promise.reject = temp.reject;
    return promise;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmZXJyZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvZGVmZXJyZWQvRGVmZXJyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxNQUFNLFVBQVUsUUFBUTs7UUFDaEIsSUFBSSxHQUFRLEVBQUU7O1FBQ2QsT0FBTyxHQUFRLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBWSxFQUFFLE1BQVc7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIFByb21pc2UgdGhhdCB1c2VzIHRoZSBkZWZlcnJlZCBhbnRpLXBhdHRlcm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERlZmVycmVkKCkge1xuICBjb25zdCB0ZW1wOiBhbnkgPSB7fTtcbiAgY29uc3QgcHJvbWlzZTogYW55ID0gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICB0ZW1wLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIHRlbXAucmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcbiAgcHJvbWlzZS5yZXNvbHZlID0gdGVtcC5yZXNvbHZlO1xuICBwcm9taXNlLnJlamVjdCA9IHRlbXAucmVqZWN0O1xuICByZXR1cm4gcHJvbWlzZTtcbn1cbiJdfQ==