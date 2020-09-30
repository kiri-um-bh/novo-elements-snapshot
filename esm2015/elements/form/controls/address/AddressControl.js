/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// APP
import { BaseControl } from '../BaseControl';
import { FormValidators } from '../../FormValidators';
export class AddressControl extends BaseControl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super('AddressControl', config);
        this.controlType = 'address';
        this.validators.push(FormValidators.isValidAddress);
    }
}
if (false) {
    /** @type {?} */
    AddressControl.prototype.controlType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc0NvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9hZGRyZXNzL0FkZHJlc3NDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxXQUFXOzs7O0lBRTdDLFlBQVksTUFBeUI7UUFDbkMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRmxDLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBR3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7OztJQUxDLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi4vQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi9Gb3JtVmFsaWRhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGUgPSAnYWRkcmVzcyc7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignQWRkcmVzc0NvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLmlzVmFsaWRBZGRyZXNzKTtcbiAgfVxufVxuIl19