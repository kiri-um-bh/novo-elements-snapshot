/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/textbox/TextBoxControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEJveENvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy90ZXh0Ym94L1RleHRCb3hDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE1BQU0sT0FBTyxjQUFlLFNBQVEsV0FBVzs7OztJQUs3QyxZQUFZLE1BQXlCO1FBQ25DLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUxsQyxnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQU05QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQUk7UUFDaEIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNO1lBQ1IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQUk7UUFDakIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFlBQVksQ0FBQztZQUNsQixLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssTUFBTTtnQkFDVCxPQUFPLFFBQVEsQ0FBQztZQUNsQjtnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGOzs7SUEzQ0MscUNBQWdDOztJQUNoQyw4QkFBYTs7SUFDYixpQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUFBcbmltcG9ydCB7IEJhc2VDb250cm9sLCBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4vLi4vQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLy4uLy4uL0Zvcm1WYWxpZGF0b3JzJztcblxuZXhwb3J0IGNsYXNzIFRleHRCb3hDb250cm9sIGV4dGVuZHMgQmFzZUNvbnRyb2wge1xuICBjb250cm9sVHlwZTogc3RyaW5nID0gJ3RleHRib3gnO1xuICB0eXBlOiBzdHJpbmc7XG4gIHN1YlR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIoJ1RleHRCb3hDb250cm9sJywgY29uZmlnKTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmdldFRleHRib3hUeXBlKGNvbmZpZy50eXBlKSB8fCAnJztcbiAgICB0aGlzLnN1YlR5cGUgPSBjb25maWcudHlwZSB8fCAnJztcbiAgICB0aGlzLnNldFZhbGlkYXRvcnModGhpcy5zdWJUeXBlKTtcbiAgfVxuXG4gIHNldFZhbGlkYXRvcnModHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChGb3JtVmFsaWRhdG9ycy5pc0VtYWlsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChGb3JtVmFsaWRhdG9ycy5tYXhJbnRlZ2VyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICdwZXJjZW50YWdlJzpcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goRm9ybVZhbGlkYXRvcnMubWF4RG91YmxlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goRm9ybVZhbGlkYXRvcnMubWluWWVhcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGV4dGJveFR5cGUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAncGVyY2VudGFnZSc6XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG59XG4iXX0=