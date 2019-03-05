/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            display = this.permissions.split('&&').every((p) => this.security.has(p.trim()));
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
    /** @type {?} */
    Unless.prototype.templateRef;
    /** @type {?} */
    Unless.prototype.viewContainer;
    /** @type {?} */
    Unless.prototype.security;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRWhGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs5RCxNQUFNOzs7Ozs7SUFJSixZQUFvQixXQUE2QixFQUFVLGFBQStCLEVBQVUsUUFBa0I7UUFBbEcsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUh0SCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUczQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELEtBQUs7O1lBQ0MsT0FBTyxHQUFZLEtBQUs7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDL0IsRUFBRSxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMxQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtvQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDaEI7YUFDRjtTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFOMEIsV0FBVztZQUFFLGdCQUFnQjtZQUUvQyxRQUFROzs7dUJBYWQsS0FBSzs7OztJQVBOLDZCQUF5Qjs7SUFDekIsNkJBQTZCOztJQUVqQiw2QkFBcUM7O0lBQUUsK0JBQXVDOztJQUFFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgU2VjdXJpdHkgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3NlY3VyaXR5L1NlY3VyaXR5JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JoVW5sZXNzXScsXG59KVxuZXhwb3J0IGNsYXNzIFVubGVzcyB7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmcgPSAnJztcbiAgaXNEaXNwbGF5ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgc2VjdXJpdHk6IFNlY3VyaXR5KSB7XG4gICAgdGhpcy5zZWN1cml0eS5zdWJzY3JpYmUodGhpcy5jaGVjay5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBiaFVubGVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHZhbHVlIHx8ICcnO1xuICAgIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNoZWNrKCk6IHZvaWQge1xuICAgIGxldCBkaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKH50aGlzLnBlcm1pc3Npb25zLmluZGV4T2YoJ3x8JykpIHtcbiAgICAgIGxldCBwczogYW55ID0gdGhpcy5wZXJtaXNzaW9ucy5zcGxpdCgnfHwnKTtcbiAgICAgIGZvciAobGV0IHAgb2YgcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VjdXJpdHkuaGFzKHAudHJpbSgpKSkge1xuICAgICAgICAgIGRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLnBlcm1pc3Npb25zLnNwbGl0KCcmJicpLmV2ZXJ5KChwKSA9PiB0aGlzLnNlY3VyaXR5LmhhcyhwLnRyaW0oKSkpO1xuICAgIH1cblxuICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNwbGF5ZWQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXllZCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuIl19