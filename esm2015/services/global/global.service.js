/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw0QkFBMEI7Ozs7QUFFMUIsTUFBTSxPQUFnQixTQUFTO0NBRTlCOzs7Ozs7SUFEQyxtREFBb0M7O0FBR3RDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTOzs7O0lBQzdDLElBQUksWUFBWTtRQUNkLE9BQU8sbUJBQUEsTUFBTSxFQUFVLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGFBQWMsU0FBUSxTQUFTOzs7O0lBQzFDLElBQUksWUFBWTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUMzRCwyQkFBMkI7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBHbG9iYWwge31cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdsb2JhbFJlZiB7XG4gIGFic3RyYWN0IGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsO1xufVxuXG5leHBvcnQgY2xhc3MgQnJvd3Nlckdsb2JhbFJlZiBleHRlbmRzIEdsb2JhbFJlZiB7XG4gIGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsIHtcbiAgICByZXR1cm4gd2luZG93IGFzIEdsb2JhbDtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVHbG9iYWxSZWYgZXh0ZW5kcyBHbG9iYWxSZWYge1xuICBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbG9iYWwgZG9lc25cXCd0IGNvbXBpbGUgZm9yIHNvbWUgcmVhc29uJyk7XG4gICAgLy8gcmV0dXJuIGdsb2JhbCBhcyBHbG9iYWw7XG4gIH1cbn1cbiJdfQ==