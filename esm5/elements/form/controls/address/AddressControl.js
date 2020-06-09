import { __extends } from "tslib";
// APP
import { BaseControl } from '../BaseControl';
import { FormValidators } from '../../FormValidators';
var AddressControl = /** @class */ (function (_super) {
    __extends(AddressControl, _super);
    function AddressControl(config) {
        var _this = _super.call(this, 'AddressControl', config) || this;
        _this.controlType = 'address';
        _this.validators.push(FormValidators.isValidAddress);
        return _this;
    }
    return AddressControl;
}(BaseControl));
export { AddressControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc0NvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9hZGRyZXNzL0FkZHJlc3NDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQ7SUFBb0Msa0NBQVc7SUFFN0Msd0JBQVksTUFBeUI7UUFBckMsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsU0FFaEM7UUFKRCxpQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUd0QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7O0lBQ3RELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFORCxDQUFvQyxXQUFXLEdBTTlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQVBQXG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLi9CYXNlQ29udHJvbCc7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uL0Zvcm1WYWxpZGF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDb250cm9sIGV4dGVuZHMgQmFzZUNvbnRyb2wge1xuICBjb250cm9sVHlwZSA9ICdhZGRyZXNzJztcbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKCdBZGRyZXNzQ29udHJvbCcsIGNvbmZpZyk7XG4gICAgdGhpcy52YWxpZGF0b3JzLnB1c2goRm9ybVZhbGlkYXRvcnMuaXNWYWxpZEFkZHJlc3MpO1xuICB9XG59XG4iXX0=