/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// APP
import { BaseControl } from './../BaseControl';
import { FormValidators } from './../../FormValidators';
export class TextBoxControl extends BaseControl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super('TextBoxControl', config);
        this.controlType = 'textbox';
        this.type = this.getTextboxType(config.type) || '';
        this.subType = config.type || '';
        this.setValidators(this.subType);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setValidators(type) {
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
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getTextboxType(type) {
        switch (type) {
            case 'percentage':
            case 'currency':
            case 'float':
            case 'year':
                return 'number';
            default:
                return type;
        }
    }
}
if (false) {
    /** @type {?} */
    TextBoxControl.prototype.controlType;
    /** @type {?} */
    TextBoxControl.prototype.type;
    /** @type {?} */
    TextBoxControl.prototype.subType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEJveENvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy90ZXh0Ym94L1RleHRCb3hDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxXQUFXOzs7O0lBSzdDLFlBQVksTUFBeUI7UUFDbkMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBTGxDLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBTTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBSTtRQUNoQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hELE1BQU07WUFDUixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9DLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUNqQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssWUFBWSxDQUFDO1lBQ2xCLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxNQUFNO2dCQUNULE9BQU8sUUFBUSxDQUFDO1lBQ2xCO2dCQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7OztJQTNDQyxxQ0FBZ0M7O0lBQ2hDLDhCQUFhOztJQUNiLGlDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi8uLi9CYXNlQ29udHJvbCc7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4vLi4vLi4vRm9ybVZhbGlkYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgVGV4dEJveENvbnRyb2wgZXh0ZW5kcyBCYXNlQ29udHJvbCB7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmcgPSAndGV4dGJveCc7XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignVGV4dEJveENvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuZ2V0VGV4dGJveFR5cGUoY29uZmlnLnR5cGUpIHx8ICcnO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbmZpZy50eXBlIHx8ICcnO1xuICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh0aGlzLnN1YlR5cGUpO1xuICB9XG5cbiAgc2V0VmFsaWRhdG9ycyh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLmlzRW1haWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKEZvcm1WYWxpZGF0b3JzLm1heEludGVnZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ3BlcmNlbnRhZ2UnOlxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChGb3JtVmFsaWRhdG9ycy5tYXhEb3VibGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChGb3JtVmFsaWRhdG9ycy5taW5ZZWFyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRUZXh0Ym94VHlwZSh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdwZXJjZW50YWdlJzpcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==