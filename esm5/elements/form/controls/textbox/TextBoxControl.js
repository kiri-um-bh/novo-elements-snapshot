/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/textbox/TextBoxControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// APP
import { BaseControl } from './../BaseControl';
import { FormValidators } from './../../FormValidators';
var TextBoxControl = /** @class */ (function (_super) {
    tslib_1.__extends(TextBoxControl, _super);
    function TextBoxControl(config) {
        var _this = _super.call(this, 'TextBoxControl', config) || this;
        _this.controlType = 'textbox';
        _this.type = _this.getTextboxType(config.type) || '';
        _this.subType = config.type || '';
        _this.setValidators(_this.subType);
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    TextBoxControl.prototype.setValidators = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case 'email':
                this.validators.push(FormValidators.isEmail);
                break;
            case 'number':
            case 'currency':
                this.validators.push(FormValidators.maxInteger);
                break;
            case 'float':
            case 'percentage':
                this.validators.push(FormValidators.maxDouble);
                break;
            case 'year':
                this.validators.push(FormValidators.minYear);
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    TextBoxControl.prototype.getTextboxType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case 'percentage':
            case 'currency':
            case 'float':
            case 'year':
                return 'number';
            default:
                return type;
        }
    };
    return TextBoxControl;
}(BaseControl));
export { TextBoxControl };
if (false) {
    /** @type {?} */
    TextBoxControl.prototype.controlType;
    /** @type {?} */
    TextBoxControl.prototype.type;
    /** @type {?} */
    TextBoxControl.prototype.subType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEJveENvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy90ZXh0Ym94L1RleHRCb3hDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFxQixNQUFNLGtCQUFrQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RDtJQUFvQywwQ0FBVztJQUs3Qyx3QkFBWSxNQUF5QjtRQUFyQyxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxTQUloQztRQVRELGlCQUFXLEdBQVcsU0FBUyxDQUFDO1FBTTlCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBQ25DLENBQUM7Ozs7O0lBRUQsc0NBQWE7Ozs7SUFBYixVQUFjLElBQUk7UUFDaEIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNO1lBQ1IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7Ozs7O0lBRUQsdUNBQWM7Ozs7SUFBZCxVQUFlLElBQUk7UUFDakIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFlBQVksQ0FBQztZQUNsQixLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssTUFBTTtnQkFDVCxPQUFPLFFBQVEsQ0FBQztZQUNsQjtnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFvQyxXQUFXLEdBNEM5Qzs7OztJQTNDQyxxQ0FBZ0M7O0lBQ2hDLDhCQUFhOztJQUNiLGlDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi8uLi9CYXNlQ29udHJvbCc7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4vLi4vLi4vRm9ybVZhbGlkYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgVGV4dEJveENvbnRyb2wgZXh0ZW5kcyBCYXNlQ29udHJvbCB7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmcgPSAndGV4dGJveCc7XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignVGV4dEJveENvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuZ2V0VGV4dGJveFR5cGUoY29uZmlnLnR5cGUpIHx8ICcnO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbmZpZy50eXBlIHx8ICcnO1xuICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh0aGlzLnN1YlR5cGUpO1xuICB9XG5cbiAgc2V0VmFsaWRhdG9ycyh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLmlzRW1haWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLm1heEludGVnZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ3BlcmNlbnRhZ2UnOlxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChGb3JtVmFsaWRhdG9ycy5tYXhEb3VibGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChGb3JtVmFsaWRhdG9ycy5taW5ZZWFyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRUZXh0Ym94VHlwZSh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdwZXJjZW50YWdlJzpcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==