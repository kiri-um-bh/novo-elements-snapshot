// APP
import { BaseControl } from '../BaseControl';
import { FormValidators } from '../../FormValidators';
export class AddressControl extends BaseControl {
    constructor(config) {
        super('AddressControl', config);
        this.controlType = 'address';
        this.validators.push(FormValidators.isValidAddress);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc0NvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9hZGRyZXNzL0FkZHJlc3NDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsV0FBVyxFQUFxQixNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQVc7SUFFN0MsWUFBWSxNQUF5QjtRQUNuQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFHdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi4vQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi9Gb3JtVmFsaWRhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGUgPSAnYWRkcmVzcyc7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignQWRkcmVzc0NvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLmlzVmFsaWRBZGRyZXNzKTtcbiAgfVxufVxuIl19