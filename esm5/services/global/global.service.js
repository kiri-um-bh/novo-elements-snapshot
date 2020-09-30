/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNEJBQTBCOzs7O0FBRTFCOzs7O0lBQUE7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7Ozs7Ozs7OztJQURDLG1EQUFvQzs7QUFHdEM7SUFBc0MsNENBQVM7SUFBL0M7O0lBSUEsQ0FBQztJQUhDLHNCQUFJLDBDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxtQkFBQSxNQUFNLEVBQVUsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXNDLFNBQVMsR0FJOUM7O0FBQ0Q7SUFBbUMseUNBQVM7SUFBNUM7O0lBS0EsQ0FBQztJQUpDLHNCQUFJLHVDQUFZOzs7O1FBQWhCO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQzNELDJCQUEyQjtRQUM3QixDQUFDOzs7T0FBQTtJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQUxELENBQW1DLFNBQVMsR0FLM0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEdsb2JhbCB7fVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2xvYmFsUmVmIHtcbiAgYWJzdHJhY3QgZ2V0IG5hdGl2ZUdsb2JhbCgpOiBHbG9iYWw7XG59XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyR2xvYmFsUmVmIGV4dGVuZHMgR2xvYmFsUmVmIHtcbiAgZ2V0IG5hdGl2ZUdsb2JhbCgpOiBHbG9iYWwge1xuICAgIHJldHVybiB3aW5kb3cgYXMgR2xvYmFsO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTm9kZUdsb2JhbFJlZiBleHRlbmRzIEdsb2JhbFJlZiB7XG4gIGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsb2JhbCBkb2VzblxcJ3QgY29tcGlsZSBmb3Igc29tZSByZWFzb24nKTtcbiAgICAvLyByZXR1cm4gZ2xvYmFsIGFzIEdsb2JhbDtcbiAgfVxufVxuIl19