/**
 * @fileoverview added by tsickle
 * Generated from: elements/unless/Unless.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// App
import { Security } from './../../services/security/Security';
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
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.permissions = value || '';
            this.check();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Unless.prototype.check = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var _this = this;
        /** @type {?} */
        var display = false;
        if (~this.permissions.indexOf('||')) {
            /** @type {?} */
            var ps = this.permissions.split('||');
            try {
                for (var ps_1 = tslib_1.__values(ps), ps_1_1 = ps_1.next(); !ps_1_1.done; ps_1_1 = ps_1.next()) {
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
            display = this.permissions.split('&&').every((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return _this.security.has(p.trim()); }));
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
    Unless.decorators = [
        { type: Directive, args: [{
                    selector: '[bhUnless]',
                },] }
    ];
    /** @nocollapse */
    Unless.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: Security }
    ]; };
    Unless.propDecorators = {
        bhUnless: [{ type: Input }]
    };
    return Unless;
}());
export { Unless };
if (false) {
    /** @type {?} */
    Unless.prototype.permissions;
    /** @type {?} */
    Unless.prototype.isDisplayed;
    /**
     * @type {?}
     * @private
     */
    Unless.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    Unless.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    Unless.prototype.security;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlEO0lBT0UsZ0JBQW9CLFdBQTZCLEVBQVUsYUFBK0IsRUFBVSxRQUFrQjtRQUFsRyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSHRILGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNCQUNJLDRCQUFROzs7OztRQURaLFVBQ2EsS0FBYTtZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7Ozs7SUFFRCxzQkFBSzs7O0lBQUw7O1FBQUEsaUJBc0JDOztZQXJCSyxPQUFPLEdBQVksS0FBSztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUMvQixFQUFFLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztnQkFDMUMsS0FBYyxJQUFBLE9BQUEsaUJBQUEsRUFBRSxDQUFBLHNCQUFBLHNDQUFFO29CQUFiLElBQUksQ0FBQyxlQUFBO29CQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7d0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUM7cUJBQ2hCO2lCQUNGOzs7Ozs7Ozs7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7Ozs7WUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQUM7U0FDbEY7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQU4wQixXQUFXO2dCQUFFLGdCQUFnQjtnQkFFL0MsUUFBUTs7OzJCQWFkLEtBQUs7O0lBNkJSLGFBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXJDWSxNQUFNOzs7SUFDakIsNkJBQXlCOztJQUN6Qiw2QkFBNkI7Ozs7O0lBRWpCLDZCQUFxQzs7Ozs7SUFBRSwrQkFBdUM7Ozs7O0lBQUUsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBTZWN1cml0eSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmhVbmxlc3NdJyxcbn0pXG5leHBvcnQgY2xhc3MgVW5sZXNzIHtcbiAgcGVybWlzc2lvbnM6IHN0cmluZyA9ICcnO1xuICBpc0Rpc3BsYXllZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzZWN1cml0eTogU2VjdXJpdHkpIHtcbiAgICB0aGlzLnNlY3VyaXR5LnN1YnNjcmliZSh0aGlzLmNoZWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGJoVW5sZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gdmFsdWUgfHwgJyc7XG4gICAgdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2hlY2soKTogdm9pZCB7XG4gICAgbGV0IGRpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAofnRoaXMucGVybWlzc2lvbnMuaW5kZXhPZignfHwnKSkge1xuICAgICAgbGV0IHBzOiBhbnkgPSB0aGlzLnBlcm1pc3Npb25zLnNwbGl0KCd8fCcpO1xuICAgICAgZm9yIChsZXQgcCBvZiBwcykge1xuICAgICAgICBpZiAodGhpcy5zZWN1cml0eS5oYXMocC50cmltKCkpKSB7XG4gICAgICAgICAgZGlzcGxheSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheSA9IHRoaXMucGVybWlzc2lvbnMuc3BsaXQoJyYmJykuZXZlcnkoKHApID0+IHRoaXMuc2VjdXJpdHkuaGFzKHAudHJpbSgpKSk7XG4gICAgfVxuXG4gICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rpc3BsYXllZCkge1xuICAgICAgICB0aGlzLmlzRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0Rpc3BsYXllZCA9IGZhbHNlO1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=