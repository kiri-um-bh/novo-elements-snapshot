import { __extends } from "tslib";
// NG
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
var NovoFormGroup = /** @class */ (function (_super) {
    __extends(NovoFormGroup, _super);
    function NovoFormGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldInteractionEvents = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NovoFormGroup.prototype, "value", {
        get: function () {
            return this.getRawValue();
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    NovoFormGroup.prototype.enableAllControls = function () {
        for (var key in this.controls) {
            if (this.controls[key].readOnly) {
                this.controls[key].readOnly = false;
                this.controls[key].enable();
            }
        }
    };
    NovoFormGroup.prototype.disableAllControls = function () {
        for (var key in this.controls) {
            if (!this.controls[key].readOnly) {
                this.controls[key].readOnly = true;
                this.controls[key].disable();
            }
        }
    };
    return NovoFormGroup;
}(FormGroup));
export { NovoFormGroup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEtBQUs7QUFDTCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3QztJQUFtQyxpQ0FBUztJQUE1QztRQUFBLHFFQWtDQztRQWpDUSw0QkFBc0IsR0FBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFpQzNGLENBQUM7SUF6QkMsc0JBQUksZ0NBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDOzs7T0FKQTtJQU1NLHlDQUFpQixHQUF4QjtRQUNFLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFxQixDQUFDLFFBQVEsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUNFLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbENELENBQW1DLFNBQVMsR0FrQzNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50IH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wgfSBmcm9tICcuL05vdm9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcbiAgcHVibGljIGZpZWxkSW50ZXJhY3Rpb25FdmVudHM6IEV2ZW50RW1pdHRlcjxJRmllbGRJbnRlcmFjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxheW91dDogc3RyaW5nO1xuICBwdWJsaWMgZWRpdDogYm9vbGVhbjtcbiAgcHVibGljIGN1cnJlbnRFbnRpdHk6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRFbnRpdHlJZDogc3RyaW5nO1xuICBwdWJsaWMgYXNzb2NpYXRpb25zOiBvYmplY3Q7XG4gIHB1YmxpYyBfdmFsdWU6IGFueTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3VmFsdWUoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQWxsQ29udHJvbHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSkge1xuICAgICAgICAodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQWxsQ29udHJvbHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCEodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==