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
     * @return {?}
     */
    NovoFormGroup.prototype.enableAllControls = /**
     * @return {?}
     */
    function () {
        for (var key in this.controls) {
            if (((/** @type {?} */ (this.controls[key]))).readOnly) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzdDO0lBQW1DLHlDQUFTO0lBQTVDO1FBQUEscUVBa0NDO1FBakNRLDRCQUFzQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQWlDM0YsQ0FBQztJQXpCQyxzQkFBSSxnQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFFRCxVQUFVLENBQU07WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDOzs7T0FKQTs7OztJQU1NLHlDQUFpQjs7O0lBQXhCO1FBQ0UsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU0sMENBQWtCOzs7SUFBekI7UUFDRSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDckQsQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM5QjtTQUNGO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFtQyxTQUFTLEdBa0MzQzs7OztJQWpDQywrQ0FBeUY7O0lBQ3pGLCtCQUFzQjs7SUFDdEIsNkJBQXFCOztJQUNyQixzQ0FBNkI7O0lBQzdCLHdDQUErQjs7SUFDL0IscUNBQTRCOztJQUM1QiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IElGaWVsZEludGVyYWN0aW9uRXZlbnQgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4vTm92b0Zvcm1Db250cm9sJztcblxuZXhwb3J0IGNsYXNzIE5vdm9Gb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBwdWJsaWMgZmllbGRJbnRlcmFjdGlvbkV2ZW50czogRXZlbnRFbWl0dGVyPElGaWVsZEludGVyYWN0aW9uRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgbGF5b3V0OiBzdHJpbmc7XG4gIHB1YmxpYyBlZGl0OiBib29sZWFuO1xuICBwdWJsaWMgY3VycmVudEVudGl0eTogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudEVudGl0eUlkOiBzdHJpbmc7XG4gIHB1YmxpYyBhc3NvY2lhdGlvbnM6IG9iamVjdDtcbiAgcHVibGljIF92YWx1ZTogYW55O1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSYXdWYWx1ZSgpO1xuICB9XG5cbiAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGVBbGxDb250cm9scygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSkge1xuICAgICAgICAodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQWxsQ29udHJvbHMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuY29udHJvbHMpIHtcbiAgICAgIGlmICghKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5KSB7XG4gICAgICAgICh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udHJvbHNba2V5XS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=