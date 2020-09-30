/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
/** @type {?} */
var notifications = {};
/**
 * @param {?} message
 * @return {?}
 */
export function notify(message) {
    if (!isDevMode() || message in notifications) {
        return;
    }
    notifications[message] = true;
    console.warn(message); // tslint:disable-line
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpZXIudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUVwQyxhQUFhLEdBQStCLEVBQUU7Ozs7O0FBRXBELE1BQU0sVUFBVSxNQUFNLENBQUMsT0FBZTtJQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksT0FBTyxJQUFJLGFBQWEsRUFBRTtRQUM1QyxPQUFPO0tBQ1I7SUFDRCxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDL0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBub3RpZmljYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzRGV2TW9kZSgpIHx8IG1lc3NhZ2UgaW4gbm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybjtcbiAgfVxuICBub3RpZmljYXRpb25zW21lc3NhZ2VdID0gdHJ1ZTtcbiAgY29uc29sZS53YXJuKG1lc3NhZ2UpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG59XG4iXX0=