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
     * @param {?=} overrides
     * @return {?}
     */
    enableAllControls(overrides) {
        for (let key in this.controls) {
            if (((/** @type {?} */ (this.controls[key]))).readOnly && (!overrides || (overrides && !overrides.includes(key)))) {
                ((/** @type {?} */ (this.controls[key]))).readOnly = false;
                this.controls[key].enable();
            }
        }
    }
    /**
     * @return {?}
     */
    disableAllControls() {
        for (let key in this.controls) {
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
    NovoFormGroup.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLN0MsTUFBTSxPQUFPLGFBQWMsU0FBUSxTQUFTO0lBQTVDOztRQUNTLDJCQUFzQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBaUMzRixDQUFDOzs7O0lBekJDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsQ0FBTTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsU0FBb0I7UUFDM0MsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0csQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLGtCQUFrQjtRQUN2QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDckQsQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM5QjtTQUNGO0lBQ0gsQ0FBQztDQUNGOzs7SUFqQ0MsK0NBQXlGOztJQUN6RiwrQkFBc0I7O0lBQ3RCLDZCQUFxQjs7SUFDckIsc0NBQTZCOztJQUM3Qix3Q0FBK0I7O0lBQy9CLHFDQUE0Qjs7SUFDNUIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50IH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wgfSBmcm9tICcuL05vdm9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcbiAgcHVibGljIGZpZWxkSW50ZXJhY3Rpb25FdmVudHM6IEV2ZW50RW1pdHRlcjxJRmllbGRJbnRlcmFjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxheW91dDogc3RyaW5nO1xuICBwdWJsaWMgZWRpdDogYm9vbGVhbjtcbiAgcHVibGljIGN1cnJlbnRFbnRpdHk6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRFbnRpdHlJZDogc3RyaW5nO1xuICBwdWJsaWMgYXNzb2NpYXRpb25zOiBvYmplY3Q7XG4gIHB1YmxpYyBfdmFsdWU6IGFueTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3VmFsdWUoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQWxsQ29udHJvbHMob3ZlcnJpZGVzPzogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSAmJiAoIW92ZXJyaWRlcyB8fCAob3ZlcnJpZGVzICYmICFvdmVycmlkZXMuaW5jbHVkZXMoa2V5KSkpKSB7XG4gICAgICAgICh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW2tleV0uZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2FibGVBbGxDb250cm9scygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCEodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==