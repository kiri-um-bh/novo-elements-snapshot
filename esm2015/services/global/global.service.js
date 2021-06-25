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
const ɵBrowserGlobalRef_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(BrowserGlobalRef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BrowserGlobalRef, [{
        type: Injectable
    }], null, null); })();
export class NodeGlobalRef extends GlobalRef {
    get nativeGlobal() {
        throw new Error('global doesn\'t compile for some reason');
        // return global as Global;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBZ0IsU0FBUztDQUU5QjtBQUdELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTO0lBQzdDLElBQUksWUFBWTtRQUNkLE9BQU8sTUFBZ0IsQ0FBQztJQUMxQixDQUFDOzt5R0FIVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7NkVBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7O0FBTVgsTUFBTSxPQUFPLGFBQWMsU0FBUSxTQUFTO0lBQzFDLElBQUksWUFBWTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUMzRCwyQkFBMkI7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWwgeyB9XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHbG9iYWxSZWYge1xuICBhYnN0cmFjdCBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb3dzZXJHbG9iYWxSZWYgZXh0ZW5kcyBHbG9iYWxSZWYge1xuICBnZXQgbmF0aXZlR2xvYmFsKCk6IEdsb2JhbCB7XG4gICAgcmV0dXJuIHdpbmRvdyBhcyBHbG9iYWw7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBOb2RlR2xvYmFsUmVmIGV4dGVuZHMgR2xvYmFsUmVmIHtcbiAgZ2V0IG5hdGl2ZUdsb2JhbCgpOiBHbG9iYWwge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2xvYmFsIGRvZXNuXFwndCBjb21waWxlIGZvciBzb21lIHJlYXNvbicpO1xuICAgIC8vIHJldHVybiBnbG9iYWwgYXMgR2xvYmFsO1xuICB9XG59XG4iXX0=