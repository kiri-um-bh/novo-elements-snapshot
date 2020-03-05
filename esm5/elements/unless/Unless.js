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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlEO0lBT0UsZ0JBQW9CLFdBQTZCLEVBQVUsYUFBK0IsRUFBVSxRQUFrQjtRQUFsRyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSHRILGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNCQUNJLDRCQUFROzs7OztRQURaLFVBQ2EsS0FBYTtZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7Ozs7SUFFRCxzQkFBSzs7O0lBQUw7O1FBQUEsaUJBc0JDOztZQXJCSyxPQUFPLEdBQVksS0FBSztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUM3QixFQUFFLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztnQkFDNUMsS0FBZ0IsSUFBQSxPQUFBLGlCQUFBLEVBQUUsQ0FBQSxzQkFBQSxzQ0FBRTtvQkFBZixJQUFNLENBQUMsZUFBQTtvQkFDVixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO3dCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDO3FCQUNoQjtpQkFDRjs7Ozs7Ozs7O1NBQ0Y7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFOMEIsV0FBVztnQkFBRSxnQkFBZ0I7Z0JBRS9DLFFBQVE7OzsyQkFhZCxLQUFLOztJQTZCUixhQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FyQ1ksTUFBTTs7O0lBQ2pCLDZCQUF5Qjs7SUFDekIsNkJBQTZCOzs7OztJQUVqQiw2QkFBcUM7Ozs7O0lBQUUsK0JBQXVDOzs7OztJQUFFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgU2VjdXJpdHkgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3NlY3VyaXR5L1NlY3VyaXR5JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JoVW5sZXNzXScsXG59KVxuZXhwb3J0IGNsYXNzIFVubGVzcyB7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmcgPSAnJztcbiAgaXNEaXNwbGF5ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgc2VjdXJpdHk6IFNlY3VyaXR5KSB7XG4gICAgdGhpcy5zZWN1cml0eS5zdWJzY3JpYmUodGhpcy5jaGVjay5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBiaFVubGVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHZhbHVlIHx8ICcnO1xuICAgIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNoZWNrKCk6IHZvaWQge1xuICAgIGxldCBkaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKH50aGlzLnBlcm1pc3Npb25zLmluZGV4T2YoJ3x8JykpIHtcbiAgICAgIGNvbnN0IHBzOiBhbnkgPSB0aGlzLnBlcm1pc3Npb25zLnNwbGl0KCd8fCcpO1xuICAgICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICAgIGlmICh0aGlzLnNlY3VyaXR5LmhhcyhwLnRyaW0oKSkpIHtcbiAgICAgICAgICBkaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5wZXJtaXNzaW9ucy5zcGxpdCgnJiYnKS5ldmVyeSgocCkgPT4gdGhpcy5zZWN1cml0eS5oYXMocC50cmltKCkpKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzcGxheSkge1xuICAgICAgaWYgKCF0aGlzLmlzRGlzcGxheWVkKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==