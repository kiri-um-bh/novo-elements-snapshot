/**
 * @fileoverview added by tsickle
 * Generated from: elements/unless/Unless.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// App
import { Security } from './../../services/security/Security';
export class Unless {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} security
     */
    constructor(templateRef, viewContainer, security) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.security = security;
        this.permissions = '';
        this.isDisplayed = false;
        this.security.subscribe(this.check.bind(this));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set bhUnless(value) {
        this.permissions = value || '';
        this.check();
    }
    /**
     * @return {?}
     */
    check() {
        /** @type {?} */
        let display = false;
        if (~this.permissions.indexOf('||')) {
            /** @type {?} */
            let ps = this.permissions.split('||');
            for (let p of ps) {
                if (this.security.has(p.trim())) {
                    display = true;
                }
            }
        }
        else {
            display = this.permissions.split('&&').every((/**
             * @param {?} p
             * @return {?}
             */
            (p) => this.security.has(p.trim())));
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
    }
}
Unless.decorators = [
    { type: Directive, args: [{
                selector: '[bhUnless]',
            },] }
];
/** @nocollapse */
Unless.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: Security }
];
Unless.propDecorators = {
    bhUnless: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLOUQsTUFBTSxPQUFPLE1BQU07Ozs7OztJQUlqQixZQUFvQixXQUE2QixFQUFVLGFBQStCLEVBQVUsUUFBa0I7UUFBbEcsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUh0SCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUczQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELEtBQUs7O1lBQ0MsT0FBTyxHQUFZLEtBQUs7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDL0IsRUFBRSxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMxQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtvQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDaEI7YUFDRjtTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBTjBCLFdBQVc7WUFBRSxnQkFBZ0I7WUFFL0MsUUFBUTs7O3VCQWFkLEtBQUs7Ozs7SUFQTiw2QkFBeUI7O0lBQ3pCLDZCQUE2Qjs7Ozs7SUFFakIsNkJBQXFDOzs7OztJQUFFLCtCQUF1Qzs7Ozs7SUFBRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IFNlY3VyaXR5IH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zZWN1cml0eS9TZWN1cml0eSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiaFVubGVzc10nLFxufSlcbmV4cG9ydCBjbGFzcyBVbmxlc3Mge1xuICBwZXJtaXNzaW9uczogc3RyaW5nID0gJyc7XG4gIGlzRGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHNlY3VyaXR5OiBTZWN1cml0eSkge1xuICAgIHRoaXMuc2VjdXJpdHkuc3Vic2NyaWJlKHRoaXMuY2hlY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYmhVbmxlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSB2YWx1ZSB8fCAnJztcbiAgICB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjaGVjaygpOiB2b2lkIHtcbiAgICBsZXQgZGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh+dGhpcy5wZXJtaXNzaW9ucy5pbmRleE9mKCd8fCcpKSB7XG4gICAgICBsZXQgcHM6IGFueSA9IHRoaXMucGVybWlzc2lvbnMuc3BsaXQoJ3x8Jyk7XG4gICAgICBmb3IgKGxldCBwIG9mIHBzKSB7XG4gICAgICAgIGlmICh0aGlzLnNlY3VyaXR5LmhhcyhwLnRyaW0oKSkpIHtcbiAgICAgICAgICBkaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5wZXJtaXNzaW9ucy5zcGxpdCgnJiYnKS5ldmVyeSgocCkgPT4gdGhpcy5zZWN1cml0eS5oYXMocC50cmltKCkpKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzcGxheSkge1xuICAgICAgaWYgKCF0aGlzLmlzRGlzcGxheWVkKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==