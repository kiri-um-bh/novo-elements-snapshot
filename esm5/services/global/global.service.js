import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var GlobalRef = /** @class */ (function () {
    function GlobalRef() {
    }
    return GlobalRef;
}());
export { GlobalRef };
var BrowserGlobalRef = /** @class */ (function (_super) {
    __extends(BrowserGlobalRef, _super);
    function BrowserGlobalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BrowserGlobalRef.prototype, "nativeGlobal", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    BrowserGlobalRef.ɵfac = function BrowserGlobalRef_Factory(t) { return ɵBrowserGlobalRef_BaseFactory(t || BrowserGlobalRef); };
    BrowserGlobalRef.ɵprov = i0.ɵɵdefineInjectable({ token: BrowserGlobalRef, factory: BrowserGlobalRef.ɵfac });
    return BrowserGlobalRef;
}(GlobalRef));
export { BrowserGlobalRef };
var ɵBrowserGlobalRef_BaseFactory = i0.ɵɵgetInheritedFactory(BrowserGlobalRef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BrowserGlobalRef, [{
        type: Injectable
    }], null, null); })();
var NodeGlobalRef = /** @class */ (function (_super) {
    __extends(NodeGlobalRef, _super);
    function NodeGlobalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NodeGlobalRef.prototype, "nativeGlobal", {
        get: function () {
            throw new Error('global doesn\'t compile for some reason');
            // return global as Global;
        },
        enumerable: true,
        configurable: true
    });
    return NodeGlobalRef;
}(GlobalRef));
export { NodeGlobalRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQztJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQ7SUFDc0Msb0NBQVM7SUFEL0M7O0tBS0M7SUFIQyxzQkFBSSwwQ0FBWTthQUFoQjtZQUNFLE9BQU8sTUFBZ0IsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs2R0FIVSxnQkFBZ0I7NERBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7MkJBUjdCO0NBWUMsQUFMRCxDQUNzQyxTQUFTLEdBSTlDO1NBSlksZ0JBQWdCOzZEQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixVQUFVOztBQU1YO0lBQW1DLGlDQUFTO0lBQTVDOztJQUtBLENBQUM7SUFKQyxzQkFBSSx1Q0FBWTthQUFoQjtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUMzRCwyQkFBMkI7UUFDN0IsQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUMsQUFMRCxDQUFtQyxTQUFTLEdBSzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWwge31cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdsb2JhbFJlZiB7XG4gIGFic3RyYWN0IGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3Nlckdsb2JhbFJlZiBleHRlbmRzIEdsb2JhbFJlZiB7XG4gIGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsIHtcbiAgICByZXR1cm4gd2luZG93IGFzIEdsb2JhbDtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVHbG9iYWxSZWYgZXh0ZW5kcyBHbG9iYWxSZWYge1xuICBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbG9iYWwgZG9lc25cXCd0IGNvbXBpbGUgZm9yIHNvbWUgcmVhc29uJyk7XG4gICAgLy8gcmV0dXJuIGdsb2JhbCBhcyBHbG9iYWw7XG4gIH1cbn1cbiJdfQ==