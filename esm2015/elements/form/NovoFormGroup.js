/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3QyxNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQVM7SUFBNUM7O1FBQ1MsMkJBQXNCLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7SUFpQzNGLENBQUM7Ozs7SUF6QkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFNO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVNLGlCQUFpQjtRQUN0QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BELENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDdkIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JELENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7Q0FDRjs7O0lBakNDLCtDQUF5Rjs7SUFDekYsK0JBQXNCOztJQUN0Qiw2QkFBcUI7O0lBQ3JCLHNDQUE2Qjs7SUFDN0Isd0NBQStCOztJQUMvQixxQ0FBNEI7O0lBQzVCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi9Ob3ZvRm9ybUNvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Hcm91cCBleHRlbmRzIEZvcm1Hcm91cCB7XG4gIHB1YmxpYyBmaWVsZEludGVyYWN0aW9uRXZlbnRzOiBFdmVudEVtaXR0ZXI8SUZpZWxkSW50ZXJhY3Rpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBsYXlvdXQ6IHN0cmluZztcbiAgcHVibGljIGVkaXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjdXJyZW50RW50aXR5OiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50RW50aXR5SWQ6IHN0cmluZztcbiAgcHVibGljIGFzc29jaWF0aW9uczogb2JqZWN0O1xuICBwdWJsaWMgX3ZhbHVlOiBhbnk7XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJhd1ZhbHVlKCk7XG4gIH1cblxuICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICB9XG5cbiAgcHVibGljIGVuYWJsZUFsbENvbnRyb2xzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5KSB7XG4gICAgICAgICh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW2tleV0uZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2FibGVBbGxDb250cm9scygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCEodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==