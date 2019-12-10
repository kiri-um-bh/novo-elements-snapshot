/**
 * @fileoverview added by tsickle
 * Generated from: utils/notifier/notifier.util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpZXIudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFcEMsYUFBYSxHQUErQixFQUFFOzs7OztBQUVwRCxNQUFNLFVBQVUsTUFBTSxDQUFDLE9BQWU7SUFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLE9BQU8sSUFBSSxhQUFhLEVBQUU7UUFDNUMsT0FBTztLQUNSO0lBQ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQXNCO0FBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3Qgbm90aWZpY2F0aW9uczogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFpc0Rldk1vZGUoKSB8fCBtZXNzYWdlIGluIG5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbm90aWZpY2F0aW9uc1ttZXNzYWdlXSA9IHRydWU7XG4gIGNvbnNvbGUud2FybihtZXNzYWdlKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxufVxuIl19