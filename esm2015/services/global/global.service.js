/**
 * @fileoverview added by tsickle
 * Generated from: services/global/global.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Global() { }
/**
 * @abstract
 */
export class GlobalRef {
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    GlobalRef.prototype.nativeGlobal = function () { };
}
export class BrowserGlobalRef extends GlobalRef {
    /**
     * @return {?}
     */
    get nativeGlobal() {
        return (/** @type {?} */ (window));
    }
}
export class NodeGlobalRef extends GlobalRef {
    /**
     * @return {?}
     */
    get nativeGlobal() {
        throw new Error('global doesn\'t compile for some reason');
        // return global as Global;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNEJBQTBCOzs7O0FBRTFCLE1BQU0sT0FBZ0IsU0FBUztDQUU5Qjs7Ozs7O0lBREMsbURBQW9DOztBQUd0QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBUzs7OztJQUM3QyxJQUFJLFlBQVk7UUFDZCxPQUFPLG1CQUFBLE1BQU0sRUFBVSxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxhQUFjLFNBQVEsU0FBUzs7OztJQUMxQyxJQUFJLFlBQVk7UUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDM0QsMkJBQTJCO0lBQzdCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsIHt9XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHbG9iYWxSZWYge1xuICBhYnN0cmFjdCBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbDtcbn1cblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJHbG9iYWxSZWYgZXh0ZW5kcyBHbG9iYWxSZWYge1xuICBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbCB7XG4gICAgcmV0dXJuIHdpbmRvdyBhcyBHbG9iYWw7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBOb2RlR2xvYmFsUmVmIGV4dGVuZHMgR2xvYmFsUmVmIHtcbiAgZ2V0IG5hdGl2ZUdsb2JhbCgpOiBHbG9iYWwge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2xvYmFsIGRvZXNuXFwndCBjb21waWxlIGZvciBzb21lIHJlYXNvbicpO1xuICAgIC8vIHJldHVybiBnbG9iYWwgYXMgR2xvYmFsO1xuICB9XG59XG4iXX0=