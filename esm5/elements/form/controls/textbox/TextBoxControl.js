import { __extends } from "tslib";
// APP
import { BaseControl } from './../BaseControl';
import { FormValidators } from './../../FormValidators';
var TextBoxControl = /** @class */ (function (_super) {
    __extends(TextBoxControl, _super);
    function TextBoxControl(config) {
        var _this = _super.call(this, 'TextBoxControl', config) || this;
        _this.controlType = 'textbox';
        _this.type = _this.getTextboxType(config.type) || '';
        _this.subType = config.type || '';
        _this.setValidators(_this.subType);
        return _this;
    }
    TextBoxControl.prototype.setValidators = function (type) {
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
    TextBoxControl.prototype.getTextboxType = function (type) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEJveENvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy90ZXh0Ym94L1RleHRCb3hDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQ7SUFBb0Msa0NBQVc7SUFLN0Msd0JBQVksTUFBeUI7UUFBckMsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsU0FJaEM7UUFURCxpQkFBVyxHQUFXLFNBQVMsQ0FBQztRQU05QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUNuQyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNO1lBQ1IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNqQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssWUFBWSxDQUFDO1lBQ2xCLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxNQUFNO2dCQUNULE9BQU8sUUFBUSxDQUFDO1lBQ2xCO2dCQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBNUNELENBQW9DLFdBQVcsR0E0QzlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQVBQXG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLy4uL0Jhc2VDb250cm9sJztcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi8uLi8uLi9Gb3JtVmFsaWRhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0Qm94Q29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGU6IHN0cmluZyA9ICd0ZXh0Ym94JztcbiAgdHlwZTogc3RyaW5nO1xuICBzdWJUeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKCdUZXh0Qm94Q29udHJvbCcsIGNvbmZpZyk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5nZXRUZXh0Ym94VHlwZShjb25maWcudHlwZSkgfHwgJyc7XG4gICAgdGhpcy5zdWJUeXBlID0gY29uZmlnLnR5cGUgfHwgJyc7XG4gICAgdGhpcy5zZXRWYWxpZGF0b3JzKHRoaXMuc3ViVHlwZSk7XG4gIH1cblxuICBzZXRWYWxpZGF0b3JzKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goRm9ybVZhbGlkYXRvcnMuaXNFbWFpbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goRm9ybVZhbGlkYXRvcnMubWF4SW50ZWdlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAncGVyY2VudGFnZSc6XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLm1heERvdWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLm1pblllYXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldFRleHRib3hUeXBlKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3BlcmNlbnRhZ2UnOlxuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIHJldHVybiAnbnVtYmVyJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxufVxuIl19