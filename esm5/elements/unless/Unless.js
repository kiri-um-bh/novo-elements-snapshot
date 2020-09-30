/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQ7SUFPRSxnQkFBb0IsV0FBNkIsRUFBVSxhQUErQixFQUFVLFFBQWtCO1FBQWxHLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFIdEgsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0JBQ0ksNEJBQVE7Ozs7O1FBRFosVUFDYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDOzs7T0FBQTs7OztJQUVELHNCQUFLOzs7SUFBTDtRQUFBLGlCQXNCQzs7O1lBckJLLE9BQU8sR0FBWSxLQUFLO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQy9CLEVBQUUsR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUMxQyxLQUFjLElBQUEsT0FBQSxpQkFBQSxFQUFFLENBQUEsc0JBQUEsc0NBQUU7b0JBQWIsSUFBSSxDQUFDLGVBQUE7b0JBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTt3QkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDaEI7aUJBQ0Y7Ozs7Ozs7OztTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSzs7OztZQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztTQUNsRjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6RDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBTjBCLFdBQVc7Z0JBQUUsZ0JBQWdCO2dCQUUvQyxRQUFROzs7MkJBYWQsS0FBSzs7SUE2QlIsYUFBQztDQUFBLEFBeENELElBd0NDO1NBckNZLE1BQU07OztJQUNqQiw2QkFBeUI7O0lBQ3pCLDZCQUE2Qjs7Ozs7SUFFakIsNkJBQXFDOzs7OztJQUFFLCtCQUF1Qzs7Ozs7SUFBRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IFNlY3VyaXR5IH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zZWN1cml0eS9TZWN1cml0eSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiaFVubGVzc10nLFxufSlcbmV4cG9ydCBjbGFzcyBVbmxlc3Mge1xuICBwZXJtaXNzaW9uczogc3RyaW5nID0gJyc7XG4gIGlzRGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHNlY3VyaXR5OiBTZWN1cml0eSkge1xuICAgIHRoaXMuc2VjdXJpdHkuc3Vic2NyaWJlKHRoaXMuY2hlY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYmhVbmxlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSB2YWx1ZSB8fCAnJztcbiAgICB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjaGVjaygpOiB2b2lkIHtcbiAgICBsZXQgZGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh+dGhpcy5wZXJtaXNzaW9ucy5pbmRleE9mKCd8fCcpKSB7XG4gICAgICBsZXQgcHM6IGFueSA9IHRoaXMucGVybWlzc2lvbnMuc3BsaXQoJ3x8Jyk7XG4gICAgICBmb3IgKGxldCBwIG9mIHBzKSB7XG4gICAgICAgIGlmICh0aGlzLnNlY3VyaXR5LmhhcyhwLnRyaW0oKSkpIHtcbiAgICAgICAgICBkaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5wZXJtaXNzaW9ucy5zcGxpdCgnJiYnKS5ldmVyeSgocCkgPT4gdGhpcy5zZWN1cml0eS5oYXMocC50cmltKCkpKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzcGxheSkge1xuICAgICAgaWYgKCF0aGlzLmlzRGlzcGxheWVkKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==