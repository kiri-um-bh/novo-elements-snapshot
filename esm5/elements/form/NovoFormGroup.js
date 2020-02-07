/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/NovoFormGroup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
var NovoFormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(NovoFormGroup, _super);
    function NovoFormGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldInteractionEvents = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NovoFormGroup.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getRawValue();
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} overrides
     * @return {?}
     */
    NovoFormGroup.prototype.enableAllControls = /**
     * @param {?=} overrides
     * @return {?}
     */
    function (overrides) {
        for (var key in this.controls) {
            if (((/** @type {?} */ (this.controls[key]))).readOnly && (!overrides || (overrides && !overrides.includes(key)))) {
                ((/** @type {?} */ (this.controls[key]))).readOnly = false;
                this.controls[key].enable();
            }
        }
    };
    /**
     * @return {?}
     */
    NovoFormGroup.prototype.disableAllControls = /**
     * @return {?}
     */
    function () {
        for (var key in this.controls) {
            if (!((/** @type {?} */ (this.controls[key]))).readOnly) {
                ((/** @type {?} */ (this.controls[key]))).readOnly = true;
                this.controls[key].disable();
            }
        }
    };
    return NovoFormGroup;
}(FormGroup));
export { NovoFormGroup };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzdDO0lBQW1DLHlDQUFTO0lBQTVDO1FBQUEscUVBa0NDO1FBakNRLDRCQUFzQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQWlDM0YsQ0FBQztJQXpCQyxzQkFBSSxnQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFFRCxVQUFVLENBQU07WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDOzs7T0FKQTs7Ozs7SUFNTSx5Q0FBaUI7Ozs7SUFBeEIsVUFBeUIsU0FBb0I7UUFDM0MsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0csQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLDBDQUFrQjs7O0lBQXpCO1FBQ0UsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JELENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBbUMsU0FBUyxHQWtDM0M7Ozs7SUFqQ0MsK0NBQXlGOztJQUN6RiwrQkFBc0I7O0lBQ3RCLDZCQUFxQjs7SUFDckIsc0NBQTZCOztJQUM3Qix3Q0FBK0I7O0lBQy9CLHFDQUE0Qjs7SUFDNUIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50IH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wgfSBmcm9tICcuL05vdm9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcbiAgcHVibGljIGZpZWxkSW50ZXJhY3Rpb25FdmVudHM6IEV2ZW50RW1pdHRlcjxJRmllbGRJbnRlcmFjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxheW91dDogc3RyaW5nO1xuICBwdWJsaWMgZWRpdDogYm9vbGVhbjtcbiAgcHVibGljIGN1cnJlbnRFbnRpdHk6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRFbnRpdHlJZDogc3RyaW5nO1xuICBwdWJsaWMgYXNzb2NpYXRpb25zOiBvYmplY3Q7XG4gIHB1YmxpYyBfdmFsdWU6IGFueTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3VmFsdWUoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQWxsQ29udHJvbHMob3ZlcnJpZGVzPzogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSAmJiAoIW92ZXJyaWRlcyB8fCAob3ZlcnJpZGVzICYmICFvdmVycmlkZXMuaW5jbHVkZXMoa2V5KSkpKSB7XG4gICAgICAgICh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW2tleV0uZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2FibGVBbGxDb250cm9scygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCEodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==