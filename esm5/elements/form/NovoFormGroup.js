/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @type {?} */
    NovoFormGroup.prototype.associatedKey;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLN0M7SUFBbUMseUNBQVM7SUFBNUM7UUFBQSxxRUFtQ0M7UUFsQ1EsNEJBQXNCLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7O0lBa0MzRixDQUFDO0lBekJDLHNCQUFJLGdDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7OztRQUVELFVBQVUsQ0FBTTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUpBOzs7O0lBTU0seUNBQWlCOzs7SUFBeEI7UUFDRSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BELENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFTSwwQ0FBa0I7OztJQUF6QjtRQUNFLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFtQixDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNyRCxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbkNELENBQW1DLFNBQVMsR0FtQzNDOzs7O0lBbENDLCtDQUF5Rjs7SUFDekYsK0JBQXNCOztJQUN0Qiw2QkFBcUI7O0lBQ3JCLHNDQUE2Qjs7SUFDN0Isd0NBQStCOztJQUMvQixxQ0FBNEI7O0lBQzVCLCtCQUFtQjs7SUFDbkIsc0NBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50IH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wgfSBmcm9tICcuL05vdm9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcbiAgcHVibGljIGZpZWxkSW50ZXJhY3Rpb25FdmVudHM6IEV2ZW50RW1pdHRlcjxJRmllbGRJbnRlcmFjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxheW91dDogc3RyaW5nO1xuICBwdWJsaWMgZWRpdDogYm9vbGVhbjtcbiAgcHVibGljIGN1cnJlbnRFbnRpdHk6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRFbnRpdHlJZDogc3RyaW5nO1xuICBwdWJsaWMgYXNzb2NpYXRpb25zOiBvYmplY3Q7XG4gIHB1YmxpYyBfdmFsdWU6IGFueTtcbiAgcHVibGljIGFzc29jaWF0ZWRLZXk/OiB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3VmFsdWUoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQWxsQ29udHJvbHMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuY29udHJvbHMpIHtcbiAgICAgIGlmICgodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbHNba2V5XS5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZUFsbENvbnRyb2xzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoISh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSkge1xuICAgICAgICAodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW2tleV0uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19