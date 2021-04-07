/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/NovoFormGroup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export class NovoFormGroup extends FormGroup {
    constructor() {
        super(...arguments);
        this.fieldInteractionEvents = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get value() {
        return this.getRawValue();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this._value = v;
    }
    /**
     * @return {?}
     */
    enableAllControls() {
        for (const key in this.controls) {
            if (((/** @type {?} */ (this.controls[key]))).readOnly) {
                ((/** @type {?} */ (this.controls[key]))).readOnly = false;
                this.controls[key].enable();
            }
        }
    }
    /**
     * @return {?}
     */
    disableAllControls() {
        for (const key in this.controls) {
            if (!((/** @type {?} */ (this.controls[key]))).readOnly) {
                ((/** @type {?} */ (this.controls[key]))).readOnly = true;
                this.controls[key].disable();
            }
        }
    }
}
if (false) {
    /** @type {?} */
    NovoFormGroup.prototype.fieldInteractionEvents;
    /** @type {?} */
    NovoFormGroup.prototype.layout;
    /** @type {?} */
    NovoFormGroup.prototype.edit;
    /** @type {?} */
    NovoFormGroup.prototype.currentEntity;
    /** @type {?} */
    NovoFormGroup.prototype.currentEntityId;
    /** @type {?} */
    NovoFormGroup.prototype.associations;
    /** @type {?} */
    NovoFormGroup.prototype.fieldsets;
    /** @type {?} */
    NovoFormGroup.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLN0MsTUFBTSxPQUFPLGFBQWMsU0FBUSxTQUFTO0lBQTVDOztRQUNTLDJCQUFzQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBa0MzRixDQUFDOzs7O0lBekJDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsQ0FBTTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFTSxpQkFBaUI7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3ZCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNyRCxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7OztJQWxDQywrQ0FBeUY7O0lBQ3pGLCtCQUFzQjs7SUFDdEIsNkJBQXFCOztJQUNyQixzQ0FBNkI7O0lBQzdCLHdDQUErQjs7SUFDL0IscUNBQTRCOztJQUM1QixrQ0FBd0I7O0lBQ3hCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi9Ob3ZvRm9ybUNvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Hcm91cCBleHRlbmRzIEZvcm1Hcm91cCB7XG4gIHB1YmxpYyBmaWVsZEludGVyYWN0aW9uRXZlbnRzOiBFdmVudEVtaXR0ZXI8SUZpZWxkSW50ZXJhY3Rpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBsYXlvdXQ6IHN0cmluZztcbiAgcHVibGljIGVkaXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjdXJyZW50RW50aXR5OiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50RW50aXR5SWQ6IHN0cmluZztcbiAgcHVibGljIGFzc29jaWF0aW9uczogb2JqZWN0O1xuICBwdWJsaWMgZmllbGRzZXRzOiBhbnlbXTtcbiAgcHVibGljIF92YWx1ZTogYW55O1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSYXdWYWx1ZSgpO1xuICB9XG5cbiAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGVBbGxDb250cm9scygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5KSB7XG4gICAgICAgICh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW2tleV0uZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2FibGVBbGxDb250cm9scygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoISh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSkge1xuICAgICAgICAodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW2tleV0uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19