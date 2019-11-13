/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        for (let key in this.controls) {
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
    /** @type {?} */
    NovoFormGroup.prototype.associatedKey;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3QyxNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQVM7SUFBNUM7O1FBQ1MsMkJBQXNCLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7SUFrQzNGLENBQUM7Ozs7SUF6QkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFNO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVNLGlCQUFpQjtRQUN0QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BELENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDdkIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JELENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7Q0FDRjs7O0lBbENDLCtDQUF5Rjs7SUFDekYsK0JBQXNCOztJQUN0Qiw2QkFBcUI7O0lBQ3JCLHNDQUE2Qjs7SUFDN0Isd0NBQStCOztJQUMvQixxQ0FBNEI7O0lBQzVCLCtCQUFtQjs7SUFDbkIsc0NBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50IH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wgfSBmcm9tICcuL05vdm9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcbiAgcHVibGljIGZpZWxkSW50ZXJhY3Rpb25FdmVudHM6IEV2ZW50RW1pdHRlcjxJRmllbGRJbnRlcmFjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxheW91dDogc3RyaW5nO1xuICBwdWJsaWMgZWRpdDogYm9vbGVhbjtcbiAgcHVibGljIGN1cnJlbnRFbnRpdHk6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRFbnRpdHlJZDogc3RyaW5nO1xuICBwdWJsaWMgYXNzb2NpYXRpb25zOiBvYmplY3Q7XG4gIHB1YmxpYyBfdmFsdWU6IGFueTtcbiAgcHVibGljIGFzc29jaWF0ZWRLZXk/OiB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3VmFsdWUoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQWxsQ29udHJvbHMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuY29udHJvbHMpIHtcbiAgICAgIGlmICgodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbHNba2V5XS5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZUFsbENvbnRyb2xzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoISh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSkge1xuICAgICAgICAodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW2tleV0uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19