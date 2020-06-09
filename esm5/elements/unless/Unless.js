import { __values } from "tslib";
// NG2
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// App
import { Security } from './../../services/security/Security';
import * as i0 from "@angular/core";
import * as i1 from "./../../services/security/Security";
var Unless = /** @class */ (function () {
    function Unless(templateRef, viewContainer, security) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.security = security;
        this.permissions = '';
        this.isDisplayed = false;
        this.security.subscribe(this.check.bind(this));
    }
    Object.defineProperty(Unless.prototype, "bhUnless", {
        set: function (value) {
            this.permissions = value || '';
            this.check();
        },
        enumerable: true,
        configurable: true
    });
    Unless.prototype.check = function () {
        var e_1, _a;
        var _this = this;
        var display = false;
        if (~this.permissions.indexOf('||')) {
            var ps = this.permissions.split('||');
            try {
                for (var ps_1 = __values(ps), ps_1_1 = ps_1.next(); !ps_1_1.done; ps_1_1 = ps_1.next()) {
                    var p = ps_1_1.value;
                    if (this.security.has(p.trim())) {
                        display = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ps_1_1 && !ps_1_1.done && (_a = ps_1.return)) _a.call(ps_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            display = this.permissions.split('&&').every(function (p) { return _this.security.has(p.trim()); });
        }
        if (display) {
            if (!this.isDisplayed) {
                this.isDisplayed = true;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
        else {
            this.isDisplayed = false;
            this.viewContainer.clear();
        }
    };
    Unless.ɵfac = function Unless_Factory(t) { return new (t || Unless)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.Security)); };
    Unless.ɵdir = i0.ɵɵdefineDirective({ type: Unless, selectors: [["", "bhUnless", ""]], inputs: { bhUnless: "bhUnless" } });
    return Unless;
}());
export { Unless };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Unless, [{
        type: Directive,
        args: [{
                selector: '[bhUnless]',
            }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.Security }]; }, { bhUnless: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBRTlEO0lBT0UsZ0JBQW9CLFdBQTZCLEVBQVUsYUFBK0IsRUFBVSxRQUFrQjtRQUFsRyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSHRILGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNCQUNJLDRCQUFRO2FBRFosVUFDYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUVELHNCQUFLLEdBQUw7O1FBQUEsaUJBc0JDO1FBckJDLElBQUksT0FBTyxHQUFZLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsSUFBTSxFQUFFLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUM3QyxLQUFnQixJQUFBLE9BQUEsU0FBQSxFQUFFLENBQUEsc0JBQUEsc0NBQUU7b0JBQWYsSUFBTSxDQUFDLGVBQUE7b0JBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTt3QkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDaEI7aUJBQ0Y7Ozs7Ozs7OztTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztTQUNsRjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6RDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztnRUFwQ1UsTUFBTTsrQ0FBTixNQUFNO2lCQVJuQjtDQTZDQyxBQXhDRCxJQXdDQztTQXJDWSxNQUFNO2tEQUFOLE1BQU07Y0FIbEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOztrQkFTRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBTZWN1cml0eSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmhVbmxlc3NdJyxcbn0pXG5leHBvcnQgY2xhc3MgVW5sZXNzIHtcbiAgcGVybWlzc2lvbnM6IHN0cmluZyA9ICcnO1xuICBpc0Rpc3BsYXllZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzZWN1cml0eTogU2VjdXJpdHkpIHtcbiAgICB0aGlzLnNlY3VyaXR5LnN1YnNjcmliZSh0aGlzLmNoZWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGJoVW5sZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gdmFsdWUgfHwgJyc7XG4gICAgdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2hlY2soKTogdm9pZCB7XG4gICAgbGV0IGRpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAofnRoaXMucGVybWlzc2lvbnMuaW5kZXhPZignfHwnKSkge1xuICAgICAgY29uc3QgcHM6IGFueSA9IHRoaXMucGVybWlzc2lvbnMuc3BsaXQoJ3x8Jyk7XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VjdXJpdHkuaGFzKHAudHJpbSgpKSkge1xuICAgICAgICAgIGRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLnBlcm1pc3Npb25zLnNwbGl0KCcmJicpLmV2ZXJ5KChwKSA9PiB0aGlzLnNlY3VyaXR5LmhhcyhwLnRyaW0oKSkpO1xuICAgIH1cblxuICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNwbGF5ZWQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXllZCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuIl19