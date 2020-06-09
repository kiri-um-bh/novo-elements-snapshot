import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GlobalRef {
}
export class BrowserGlobalRef extends GlobalRef {
    get nativeGlobal() {
        return window;
    }
}
BrowserGlobalRef.ɵfac = function BrowserGlobalRef_Factory(t) { return ɵBrowserGlobalRef_BaseFactory(t || BrowserGlobalRef); };
BrowserGlobalRef.ɵprov = i0.ɵɵdefineInjectable({ token: BrowserGlobalRef, factory: BrowserGlobalRef.ɵfac });
const ɵBrowserGlobalRef_BaseFactory = i0.ɵɵgetInheritedFactory(BrowserGlobalRef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BrowserGlobalRef, [{
        type: Injectable
    }], null, null); })();
export class NodeGlobalRef extends GlobalRef {
    get nativeGlobal() {
        throw new Error('global doesn\'t compile for some reason');
        // return global as Global;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBZ0IsU0FBUztDQUU5QjtBQUdELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTO0lBQzdDLElBQUksWUFBWTtRQUNkLE9BQU8sTUFBZ0IsQ0FBQztJQUMxQixDQUFDOzt5R0FIVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7K0RBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7O0FBTVgsTUFBTSxPQUFPLGFBQWMsU0FBUSxTQUFTO0lBQzFDLElBQUksWUFBWTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUMzRCwyQkFBMkI7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWwge31cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdsb2JhbFJlZiB7XG4gIGFic3RyYWN0IGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3Nlckdsb2JhbFJlZiBleHRlbmRzIEdsb2JhbFJlZiB7XG4gIGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsIHtcbiAgICByZXR1cm4gd2luZG93IGFzIEdsb2JhbDtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVHbG9iYWxSZWYgZXh0ZW5kcyBHbG9iYWxSZWYge1xuICBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbG9iYWwgZG9lc25cXCd0IGNvbXBpbGUgZm9yIHNvbWUgcmVhc29uJyk7XG4gICAgLy8gcmV0dXJuIGdsb2JhbCBhcyBHbG9iYWw7XG4gIH1cbn1cbiJdfQ==