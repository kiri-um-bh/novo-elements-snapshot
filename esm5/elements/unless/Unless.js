/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        var _this = this;
        var e_1, _a;
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
    Unless.decorators = [
        { type: Directive, args: [{
                    selector: '[bhUnless]',
                },] }
    ];
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
    /** @type {?} */
    Unless.prototype.templateRef;
    /** @type {?} */
    Unless.prototype.viewContainer;
    /** @type {?} */
    Unless.prototype.security;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQ7SUFPRSxnQkFBb0IsV0FBNkIsRUFBVSxhQUErQixFQUFVLFFBQWtCO1FBQWxHLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFIdEgsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0JBQ0ksNEJBQVE7Ozs7O1FBRFosVUFDYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDOzs7T0FBQTs7OztJQUVELHNCQUFLOzs7SUFBTDtRQUFBLGlCQXNCQzs7O1lBckJLLE9BQU8sR0FBWSxLQUFLO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQy9CLEVBQUUsR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUMxQyxLQUFjLElBQUEsT0FBQSxpQkFBQSxFQUFFLENBQUEsc0JBQUEsc0NBQUU7b0JBQWIsSUFBSSxDQUFDLGVBQUE7b0JBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTt3QkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDaEI7aUJBQ0Y7Ozs7Ozs7OztTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztTQUNsRjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6RDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7OztnQkFOMEIsV0FBVztnQkFBRSxnQkFBZ0I7Z0JBRS9DLFFBQVE7OzsyQkFhZCxLQUFLOztJQTZCUixhQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FyQ1ksTUFBTTs7O0lBQ2pCLDZCQUF5Qjs7SUFDekIsNkJBQTZCOztJQUVqQiw2QkFBcUM7O0lBQUUsK0JBQXVDOztJQUFFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgU2VjdXJpdHkgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3NlY3VyaXR5L1NlY3VyaXR5JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JoVW5sZXNzXScsXG59KVxuZXhwb3J0IGNsYXNzIFVubGVzcyB7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmcgPSAnJztcbiAgaXNEaXNwbGF5ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgc2VjdXJpdHk6IFNlY3VyaXR5KSB7XG4gICAgdGhpcy5zZWN1cml0eS5zdWJzY3JpYmUodGhpcy5jaGVjay5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBiaFVubGVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHZhbHVlIHx8ICcnO1xuICAgIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNoZWNrKCk6IHZvaWQge1xuICAgIGxldCBkaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKH50aGlzLnBlcm1pc3Npb25zLmluZGV4T2YoJ3x8JykpIHtcbiAgICAgIGxldCBwczogYW55ID0gdGhpcy5wZXJtaXNzaW9ucy5zcGxpdCgnfHwnKTtcbiAgICAgIGZvciAobGV0IHAgb2YgcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VjdXJpdHkuaGFzKHAudHJpbSgpKSkge1xuICAgICAgICAgIGRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLnBlcm1pc3Npb25zLnNwbGl0KCcmJicpLmV2ZXJ5KChwKSA9PiB0aGlzLnNlY3VyaXR5LmhhcyhwLnRyaW0oKSkpO1xuICAgIH1cblxuICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNwbGF5ZWQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXllZCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuIl19