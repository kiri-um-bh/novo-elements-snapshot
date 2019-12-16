/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/address/AddressControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc0NvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9hZGRyZXNzL0FkZHJlc3NDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQXFCLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE1BQU0sT0FBTyxjQUFlLFNBQVEsV0FBVzs7OztJQUU3QyxZQUFZLE1BQXlCO1FBQ25DLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUZsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUd0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGOzs7SUFMQyxxQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUFBcbmltcG9ydCB7IEJhc2VDb250cm9sLCBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL0Jhc2VDb250cm9sJztcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vRm9ybVZhbGlkYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbnRyb2wgZXh0ZW5kcyBCYXNlQ29udHJvbCB7XG4gIGNvbnRyb2xUeXBlID0gJ2FkZHJlc3MnO1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIoJ0FkZHJlc3NDb250cm9sJywgY29uZmlnKTtcbiAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChGb3JtVmFsaWRhdG9ycy5pc1ZhbGlkQWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==