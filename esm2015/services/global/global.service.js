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
        throw new Error(`global doesn't compile for some reason`);
        // return global as Global;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9nbG9iYWwvZ2xvYmFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFnQixTQUFTO0NBRTlCO0FBR0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQVM7SUFDN0MsSUFBSSxZQUFZO1FBQ2QsT0FBTyxNQUFnQixDQUFDO0lBQzFCLENBQUM7O3lHQUhVLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjs2RUFBaEIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTs7QUFNWCxNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQVM7SUFDMUMsSUFBSSxZQUFZO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQzFELDJCQUEyQjtJQUM3QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbCB7fVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2xvYmFsUmVmIHtcbiAgYWJzdHJhY3QgZ2V0IG5hdGl2ZUdsb2JhbCgpOiBHbG9iYWw7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm93c2VyR2xvYmFsUmVmIGV4dGVuZHMgR2xvYmFsUmVmIHtcbiAgZ2V0IG5hdGl2ZUdsb2JhbCgpOiBHbG9iYWwge1xuICAgIHJldHVybiB3aW5kb3cgYXMgR2xvYmFsO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTm9kZUdsb2JhbFJlZiBleHRlbmRzIEdsb2JhbFJlZiB7XG4gIGdldCBuYXRpdmVHbG9iYWwoKTogR2xvYmFsIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGdsb2JhbCBkb2Vzbid0IGNvbXBpbGUgZm9yIHNvbWUgcmVhc29uYCk7XG4gICAgLy8gcmV0dXJuIGdsb2JhbCBhcyBHbG9iYWw7XG4gIH1cbn1cbiJdfQ==