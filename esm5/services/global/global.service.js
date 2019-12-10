/**
 * @fileoverview added by tsickle
 * Generated from: services/global/global.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @record
 */
export function Global() { }
/**
 * @abstract
 */
var /**
 * @abstract
 */
GlobalRef = /** @class */ (function () {
    function GlobalRef() {
    }
    return GlobalRef;
}());
/**
 * @abstract
 */
export { GlobalRef };
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    GlobalRef.prototype.nativeGlobal = function () { };
}
var BrowserGlobalRef = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserGlobalRef, _super);
    function BrowserGlobalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BrowserGlobalRef.prototype, "nativeGlobal", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (window));
        },
        enumerable: true,
        configurable: true
    });
    return BrowserGlobalRef;
}(GlobalRef));
export { BrowserGlobalRef };
var NodeGlobalRef = /** @class */ (function (_super) {
    tslib_1.__extends(NodeGlobalRef, _super);
    function NodeGlobalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NodeGlobalRef.prototype, "nativeGlobal", {
        get: /**
         * @return {?}
         */
        function () {
            throw new Error('global doesn\'t compile for some reason');
            // return global as Global;
        },
        enumerable: true,
        configurable: true
    });
    return NodeGlobalRef;
}(GlobalRef));
export { NodeGlobalRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRCQUEwQjs7OztBQUUxQjs7OztJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7Ozs7Ozs7SUFEQyxtREFBb0M7O0FBR3RDO0lBQXNDLDRDQUFTO0lBQS9DOztJQUlBLENBQUM7SUFIQyxzQkFBSSwwQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sbUJBQUEsTUFBTSxFQUFVLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDSCx1QkFBQztBQUFELENBQUMsQUFKRCxDQUFzQyxTQUFTLEdBSTlDOztBQUNEO0lBQW1DLHlDQUFTO0lBQTVDOztJQUtBLENBQUM7SUFKQyxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUMzRCwyQkFBMkI7UUFDN0IsQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUMsQUFMRCxDQUFtQyxTQUFTLEdBSzNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBHbG9iYWwge31cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdsb2JhbFJlZiB7XG4gIGFic3RyYWN0IGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsO1xufVxuXG5leHBvcnQgY2xhc3MgQnJvd3Nlckdsb2JhbFJlZiBleHRlbmRzIEdsb2JhbFJlZiB7XG4gIGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsIHtcbiAgICByZXR1cm4gd2luZG93IGFzIEdsb2JhbDtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVHbG9iYWxSZWYgZXh0ZW5kcyBHbG9iYWxSZWYge1xuICBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbG9iYWwgZG9lc25cXCd0IGNvbXBpbGUgZm9yIHNvbWUgcmVhc29uJyk7XG4gICAgLy8gcmV0dXJuIGdsb2JhbCBhcyBHbG9iYWw7XG4gIH1cbn1cbiJdfQ==