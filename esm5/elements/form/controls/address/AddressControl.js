/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// APP
import { BaseControl } from '../BaseControl';
import { FormValidators } from '../../FormValidators';
var AddressControl = /** @class */ (function (_super) {
    tslib_1.__extends(AddressControl, _super);
    function AddressControl(config) {
        var _this = _super.call(this, 'AddressControl', config) || this;
        _this.controlType = 'address';
        _this.validators.push(FormValidators.isValidAddress);
        return _this;
    }
    return AddressControl;
}(BaseControl));
export { AddressControl };
if (false) {
    /** @type {?} */
    AddressControl.prototype.controlType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc0NvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9hZGRyZXNzL0FkZHJlc3NDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQXFCLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXREO0lBQW9DLDBDQUFXO0lBRTdDLHdCQUFZLE1BQXlCO1FBQXJDLFlBQ0Usa0JBQU0sZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFNBRWhDO1FBSkQsaUJBQVcsR0FBRyxTQUFTLENBQUM7UUFHdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztJQUN0RCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBb0MsV0FBVyxHQU05Qzs7OztJQUxDLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi4vQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi9Gb3JtVmFsaWRhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGUgPSAnYWRkcmVzcyc7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignQWRkcmVzc0NvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLmlzVmFsaWRBZGRyZXNzKTtcbiAgfVxufVxuIl19