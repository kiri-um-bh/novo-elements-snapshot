/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// APP
import { BaseControl } from './../BaseControl';
// export class GroupedControl implements NovoGroupedControlConfig {
//   public __type: string;
//   key: string;
//   constructor(config: NovoGroupedControlConfig) {
//     this.__type = 'GroupedControl';
//     Object.keys(config).forEach((key) => (this[key] = config[key]));
//   }
// }
export class GroupedControl extends BaseControl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super('GroupedControl', config);
        this.controlType = 'grouped';
        this.key = config.key || '';
    }
}
if (false) {
    /** @type {?} */
    GroupedControl.prototype.controlType;
    /** @type {?} */
    GroupedControl.prototype.key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZENvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9ncm91cGVkL0dyb3VwZWRDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUE0QixXQUFXLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7OztBQVk1RixNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQVc7Ozs7SUFJN0MsWUFBWSxNQUF5QjtRQUNuQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFKbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFLdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7OztJQVBDLHFDQUF3Qjs7SUFDeEIsNkJBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUFBcbmltcG9ydCB7IE5vdm9Hcm91cGVkQ29udHJvbENvbmZpZywgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi8uLi9CYXNlQ29udHJvbCc7XG5cbi8vIGV4cG9ydCBjbGFzcyBHcm91cGVkQ29udHJvbCBpbXBsZW1lbnRzIE5vdm9Hcm91cGVkQ29udHJvbENvbmZpZyB7XG4vLyAgIHB1YmxpYyBfX3R5cGU6IHN0cmluZztcbi8vICAga2V5OiBzdHJpbmc7XG5cbi8vICAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvR3JvdXBlZENvbnRyb2xDb25maWcpIHtcbi8vICAgICB0aGlzLl9fdHlwZSA9ICdHcm91cGVkQ29udHJvbCc7XG4vLyAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBjb25maWdba2V5XSkpO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBHcm91cGVkQ29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGUgPSAnZ3JvdXBlZCc7XG4gIGtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignR3JvdXBlZENvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMua2V5ID0gY29uZmlnLmtleSB8fCAnJztcbiAgfVxufVxuIl19