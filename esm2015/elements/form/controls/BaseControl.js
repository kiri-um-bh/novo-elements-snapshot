/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/BaseControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
// APP
import { Helpers } from '../../../utils/Helpers';
import { notify } from '../../../utils/notifier/notifier.util';
/**
 * @record
 */
export function NovoGroupedControlConfig() { }
if (false) {
    /** @type {?|undefined} */
    NovoGroupedControlConfig.prototype.label;
    /** @type {?|undefined} */
    NovoGroupedControlConfig.prototype.icon;
    /** @type {?|undefined} */
    NovoGroupedControlConfig.prototype.add;
    /** @type {?|undefined} */
    NovoGroupedControlConfig.prototype.remove;
    /** @type {?} */
    NovoGroupedControlConfig.prototype.key;
    /** @type {?|undefined} */
    NovoGroupedControlConfig.prototype.initialValue;
}
class ControlConfig {
}
if (false) {
    /** @type {?} */
    ControlConfig.prototype.allowInvalidDate;
    /** @type {?} */
    ControlConfig.prototype.appendToBody;
    /** @type {?} */
    ControlConfig.prototype.associatedEntity;
    /** @type {?} */
    ControlConfig.prototype.asyncValidators;
    /** @type {?} */
    ControlConfig.prototype.checkboxLabel;
    /** @type {?} */
    ControlConfig.prototype.closeOnSelect;
    /** @type {?} */
    ControlConfig.prototype.config;
    /** @type {?} */
    ControlConfig.prototype.controlType;
    /** @type {?} */
    ControlConfig.prototype.currencyFormat;
    /** @type {?} */
    ControlConfig.prototype.customControl;
    /** @type {?} */
    ControlConfig.prototype.customControlConfig;
    /** @type {?} */
    ControlConfig.prototype.dataSpecialization;
    /** @type {?} */
    ControlConfig.prototype.dataType;
    /** @type {?} */
    ControlConfig.prototype.dateFormat;
    /** @type {?} */
    ControlConfig.prototype.description;
    /** @type {?} */
    ControlConfig.prototype.dirty;
    /** @type {?} */
    ControlConfig.prototype.disabled;
    /** @type {?} */
    ControlConfig.prototype.encrypted;
    /** @type {?} */
    ControlConfig.prototype.endDate;
    /** @type {?} */
    ControlConfig.prototype.fileBrowserImageUploadUrl;
    /** @type {?} */
    ControlConfig.prototype.forceClear;
    /** @type {?} */
    ControlConfig.prototype.headerConfig;
    /** @type {?} */
    ControlConfig.prototype.hidden;
    /** @type {?} */
    ControlConfig.prototype.interactions;
    /** @type {?} */
    ControlConfig.prototype.isEmpty;
    /** @type {?} */
    ControlConfig.prototype.key;
    /** @type {?} */
    ControlConfig.prototype.label;
    /** @type {?} */
    ControlConfig.prototype.maskOptions;
    /** @type {?} */
    ControlConfig.prototype.maxlength;
    /** @type {?} */
    ControlConfig.prototype.metaType;
    /** @type {?} */
    ControlConfig.prototype.military;
    /** @type {?} */
    ControlConfig.prototype.minlength;
    /** @type {?} */
    ControlConfig.prototype.multiple;
    /** @type {?} */
    ControlConfig.prototype.name;
    /** @type {?} */
    ControlConfig.prototype.options;
    /** @type {?} */
    ControlConfig.prototype.optionsType;
    /** @type {?} */
    ControlConfig.prototype.parentScrollSelector;
    /** @type {?} */
    ControlConfig.prototype.placeholder;
    /** @type {?} */
    ControlConfig.prototype.readOnly;
    /** @type {?} */
    ControlConfig.prototype.removeTooltipArrow;
    /** @type {?} */
    ControlConfig.prototype.required;
    /** @type {?} */
    ControlConfig.prototype.restrictFieldInteractions;
    /** @type {?} */
    ControlConfig.prototype.sortOrder;
    /** @type {?} */
    ControlConfig.prototype.startDate;
    /** @type {?} */
    ControlConfig.prototype.startupFocus;
    /** @type {?} */
    ControlConfig.prototype.subType;
    /** @type {?} */
    ControlConfig.prototype.template;
    /** @type {?} */
    ControlConfig.prototype.textMaskEnabled;
    /** @type {?} */
    ControlConfig.prototype.tooltip;
    /** @type {?} */
    ControlConfig.prototype.tooltipAutoPosition;
    /** @type {?} */
    ControlConfig.prototype.tooltipPosition;
    /** @type {?} */
    ControlConfig.prototype.tooltipPreline;
    /** @type {?} */
    ControlConfig.prototype.tooltipSize;
    /** @type {?} */
    ControlConfig.prototype.type;
    /** @type {?} */
    ControlConfig.prototype.validators;
    /** @type {?} */
    ControlConfig.prototype.value;
    /** @type {?} */
    ControlConfig.prototype.warning;
    /** @type {?} */
    ControlConfig.prototype.width;
    /** @type {?} */
    ControlConfig.prototype.layoutOptions;
    /** @type {?} */
    ControlConfig.prototype.tipWell;
}
export class BaseControl extends ControlConfig {
    /**
     * @param {?=} type
     * @param {?=} config
     */
    constructor(type = 'BaseControl', config = {}) {
        super();
        this.__type = 'BaseControl';
        this.__type = type;
        this.__config = config;
        this.validators = config.validators || [];
        this.asyncValidators = config.asyncValidators || [];
        this.value = config.value;
        this.key = config.key || '';
        this.label = config.label || '';
        this.checkboxLabel = config.checkboxLabel;
        this.name = config.name || '';
        this.required = !!config.required;
        this.hidden = !!config.hidden;
        this.encrypted = !!config.encrypted;
        this.sortOrder = config.sortOrder === undefined ? 1 : config.sortOrder;
        this.controlType = config.controlType || '';
        this.type = config.type;
        this.subType = config.subType;
        this.metaType = config.metaType;
        this.placeholder = config.placeholder || '';
        this.config = config.config || null;
        this.dirty = !!(config.value !== undefined && config.value !== null);
        this.multiple = !!config.multiple;
        this.headerConfig = config.headerConfig || null;
        this.currencyFormat = config.currencyFormat || null;
        this.associatedEntity = config.associatedEntity || null;
        this.optionsType = config.optionsType || null;
        this.options = config.options || [];
        this.forceClear = new EventEmitter();
        this.readOnly = !!config.readOnly || !!config.disabled;
        this.disabled = !!config.disabled;
        this.layoutOptions = config.layoutOptions || {};
        this.military = !!config.military;
        this.dateFormat = config.dateFormat;
        this.textMaskEnabled = config.textMaskEnabled;
        this.maskOptions = config.maskOptions;
        this.allowInvalidDate = config.allowInvalidDate;
        this.startDate = config.startDate;
        this.endDate = config.endDate;
        this.restrictFieldInteractions = !!config.restrictFieldInteractions;
        if (!Helpers.isEmpty(config.warning)) {
            this.warning = config.warning;
        }
        if (this.required) {
            this.validators.push(Validators.required);
        }
        if (!Helpers.isBlank(config.maxlength)) {
            this.maxlength = config.maxlength;
            this.validators.push(Validators.maxLength(this.maxlength));
        }
        if (!Helpers.isBlank(config.minlength)) {
            this.minlength = config.minlength;
            this.validators.push(Validators.minLength(this.minlength));
        }
        this.closeOnSelect = !!config.closeOnSelect;
        this.interactions = config.interactions;
        this.dataSpecialization = config.dataSpecialization;
        this.dataType = config.dataType;
        this.appendToBody = !!config.appendToBody;
        if (this.appendToBody) {
            notify(`'appendToBody' has been deprecated. Please remove this attribute.`);
        }
        this.parentScrollSelector = config.parentScrollSelector;
        this.description = config.description;
        if (config.tooltip) {
            this.tooltip = config.tooltip;
            this.tooltipPosition = config.tooltipPosition;
            this.tooltipSize = config.tooltipSize;
            this.tooltipPreline = config.tooltipPreline;
            this.removeTooltipArrow = config.removeTooltipArrow;
            this.tooltipAutoPosition = config.tooltipAutoPosition;
        }
        this.template = config.template;
        this.customControlConfig = config.customControlConfig;
        this.tipWell = config.tipWell;
        this.width = config.width;
        this.startupFocus = !!config.startupFocus;
        if (config.fileBrowserImageUploadUrl) {
            this.fileBrowserImageUploadUrl = config.fileBrowserImageUploadUrl;
        }
        if (config.isEmpty) {
            this.isEmpty = config.isEmpty;
        }
    }
}
if (false) {
    /** @type {?} */
    BaseControl.prototype.__type;
    /** @type {?} */
    BaseControl.prototype.__config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWpELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQUcvRCw4Q0FPQzs7O0lBTkMseUNBQWU7O0lBQ2Ysd0NBQWM7O0lBQ2QsdUNBQWdDOztJQUNoQywwQ0FBaUI7O0lBQ2pCLHVDQUFZOztJQUNaLGdEQUFvQjs7QUFHdEIsTUFBTSxhQUFhO0NBNEVsQjs7O0lBM0VDLHlDQUEyQjs7SUFDM0IscUNBQXNCOztJQUN0Qix5Q0FBeUI7O0lBQ3pCLHdDQUE2Qjs7SUFDN0Isc0NBQXNCOztJQUN0QixzQ0FBdUI7O0lBQ3ZCLCtCQUFZOztJQUNaLG9DQUFvQjs7SUFDcEIsdUNBQXVCOztJQUN2QixzQ0FBb0I7O0lBQ3BCLDRDQUEwQjs7SUFDMUIsMkNBQTJCOztJQUMzQixpQ0FBaUI7O0lBQ2pCLG1DQUFvQjs7SUFDcEIsb0NBQXFCOztJQUNyQiw4QkFBZTs7SUFDZixpQ0FBa0I7O0lBQ2xCLGtDQUFtQjs7SUFDbkIsZ0NBQXdCOztJQUN4QixrREFBbUM7O0lBQ25DLG1DQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQiwrQkFBZ0I7O0lBQ2hCLHFDQUE0Qjs7SUFDNUIsZ0NBQW1COztJQUNuQiw0QkFBWTs7SUFDWiw4QkFBYzs7SUFDZCxvQ0FBMkI7O0lBQzNCLGtDQUFrQjs7SUFDbEIsaUNBQWlCOztJQUNqQixpQ0FBbUI7O0lBQ25CLGtDQUFrQjs7SUFDbEIsaUNBQWtCOztJQUNs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QyxXQUFXLENBQUM7UUFDdEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxNQUFNLENBQUMseUJBQXlCLEVBQUU7WUFDcEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztTQUNuRTtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7OztJQXhGQyw2QkFBK0I7O0lBQy9CLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIH0gZnJvbSAnLi4vQ29udHJvbEdyb3VwJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgSU1hc2tPcHRpb25zIH0gZnJvbSAnLi4vQ29udHJvbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0dyb3VwZWRDb250cm9sQ29uZmlnIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGFkZD86IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWc7XG4gIHJlbW92ZT86IGJvb2xlYW47XG4gIGtleTogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU/OiB7fVtdO1xufVxuXG5jbGFzcyBDb250cm9sQ29uZmlnIHtcbiAgYWxsb3dJbnZhbGlkRGF0ZT86IGJvb2xlYW47XG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbjsgLy8gRGVwcmVjYXRlZDtcbiAgYXNzb2NpYXRlZEVudGl0eTogc3RyaW5nO1xuICBhc3luY1ZhbGlkYXRvcnM/OiBBcnJheTxhbnk+O1xuICBjaGVja2JveExhYmVsOiBzdHJpbmc7XG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW47XG4gIGNvbmZpZzogYW55O1xuICBjb250cm9sVHlwZTogc3RyaW5nO1xuICBjdXJyZW5jeUZvcm1hdDogc3RyaW5nO1xuICBjdXN0b21Db250cm9sPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBkYXRhU3BlY2lhbGl6YXRpb246IHN0cmluZztcbiAgZGF0YVR5cGU6IHN0cmluZztcbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRpcnR5OiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgZW5jcnlwdGVkOiBib29sZWFuO1xuICBlbmREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybD86IHN0cmluZztcbiAgZm9yY2VDbGVhcjogRXZlbnRFbWl0dGVyPGFueT47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGludGVyYWN0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgaXNFbXB0eT86IEZ1bmN0aW9uO1xuICBrZXk6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgbWFza09wdGlvbnM/OiBJTWFza09wdGlvbnM7XG4gIG1heGxlbmd0aDogbnVtYmVyO1xuICBtZXRhVHlwZTogc3RyaW5nO1xuICBtaWxpdGFyeT86IGJvb2xlYW47XG4gIG1pbmxlbmd0aDogbnVtYmVyO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICBvcHRpb25zVHlwZTogc3RyaW5nO1xuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkT25seTogYm9vbGVhbjsgLy8gXCJkaXNhYmxlZFwiLCBzbyBpdCBhcHBlYXJzIGluIHRoZSBtb2RlbCBzdGlsbDtcbiAgcmVtb3ZlVG9vbHRpcEFycm93PzogYm9vbGVhbjtcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM/OiBib29sZWFuO1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgc3RhcnR1cEZvY3VzPzogYm9vbGVhbjtcbiAgc3ViVHlwZT86IHN0cmluZztcbiAgdGVtcGxhdGU/OiBhbnk7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICB0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG4gIHRvb2x0aXBQcmVsaW5lPzogYm9vbGVhbjtcbiAgdG9vbHRpcFNpemU/OiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsaWRhdG9yczogQXJyYXk8YW55PjtcbiAgdmFsdWU6IGFueTtcbiAgd2FybmluZz86IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgbGF5b3V0T3B0aW9ucz86IHtcbiAgICBjdXN0b21BY3Rpb25zPzogYm9vbGVhbjtcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBpY29uU3R5bGU/OiBzdHJpbmc7XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbVZhbGlkYXRpb24/OiB7IGFjdGlvbjogc3RyaW5nOyBmbjogRnVuY3Rpb24gfVtdO1xuICAgIHJlbW92YWJsZVdoZW5OZXc/OiBib29sZWFuO1xuICB9O1xuICB0aXBXZWxsPzoge1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICB0aXA6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgTm92b0NvbnRyb2xDb25maWcgPSBQYXJ0aWFsPENvbnRyb2xDb25maWc+O1xuXG5leHBvcnQgY2xhc3MgQmFzZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29uZmlnIHtcbiAgX190eXBlOiBzdHJpbmcgPSAnQmFzZUNvbnRyb2wnO1xuICBfX2NvbmZpZzogTm92b0NvbnRyb2xDb25maWc7XG5cbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nID0gJ0Jhc2VDb250cm9sJywgY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBjb25maWcudmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLmFzeW5jVmFsaWRhdG9ycyA9IGNvbmZpZy5hc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcbiAgICB0aGlzLmtleSA9IGNvbmZpZy5rZXkgfHwgJyc7XG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbCB8fCAnJztcbiAgICB0aGlzLmNoZWNrYm94TGFiZWwgPSBjb25maWcuY2hlY2tib3hMYWJlbDtcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZSB8fCAnJztcbiAgICB0aGlzLnJlcXVpcmVkID0gISFjb25maWcucmVxdWlyZWQ7XG4gICAgdGhpcy5oaWRkZW4gPSAhIWNvbmZpZy5oaWRkZW47XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSAhIWNvbmZpZy5lbmNyeXB0ZWQ7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBjb25maWcuc29ydE9yZGVyID09PSB1bmRlZmluZWQgPyAxIDogY29uZmlnLnNvcnRPcmRlcjtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gY29uZmlnLmNvbnRyb2xUeXBlIHx8ICcnO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbmZpZy5zdWJUeXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBjb25maWcubWV0YVR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmRpcnR5ID0gISEoY29uZmlnLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnZhbHVlICE9PSBudWxsKTtcbiAgICB0aGlzLm11bHRpcGxlID0gISFjb25maWcubXVsdGlwbGU7XG4gICAgdGhpcy5oZWFkZXJDb25maWcgPSBjb25maWcuaGVhZGVyQ29uZmlnIHx8IG51bGw7XG4gICAgdGhpcy5jdXJyZW5jeUZvcm1hdCA9IGNvbmZpZy5jdXJyZW5jeUZvcm1hdCB8fCBudWxsO1xuICAgIHRoaXMuYXNzb2NpYXRlZEVudGl0eSA9IGNvbmZpZy5hc3NvY2lhdGVkRW50aXR5IHx8IG51bGw7XG4gICAgdGhpcy5vcHRpb25zVHlwZSA9IGNvbmZpZy5vcHRpb25zVHlwZSB8fCBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuZm9yY2VDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnJlYWRPbmx5ID0gISFjb25maWcucmVhZE9ubHkgfHwgISFjb25maWcuZGlzYWJsZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEhY29uZmlnLmRpc2FibGVkO1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IGNvbmZpZy5sYXlvdXRPcHRpb25zIHx8IHt9O1xuICAgIHRoaXMubWlsaXRhcnkgPSAhIWNvbmZpZy5taWxpdGFyeTtcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb25maWcuZGF0ZUZvcm1hdDtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbmZpZy50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy5tYXNrT3B0aW9ucyA9IGNvbmZpZy5tYXNrT3B0aW9ucztcbiAgICB0aGlzLmFsbG93SW52YWxpZERhdGUgPSBjb25maWcuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGNvbmZpZy5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gY29uZmlnLmVuZERhdGU7XG4gICAgdGhpcy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zID0gISFjb25maWcucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucztcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShjb25maWcud2FybmluZykpIHtcbiAgICAgIHRoaXMud2FybmluZyA9IGNvbmZpZy53YXJuaW5nO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICB9XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoY29uZmlnLm1heGxlbmd0aCkpIHtcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gY29uZmlnLm1heGxlbmd0aDtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHRoaXMubWF4bGVuZ3RoKSk7XG4gICAgfVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKGNvbmZpZy5taW5sZW5ndGgpKSB7XG4gICAgICB0aGlzLm1pbmxlbmd0aCA9IGNvbmZpZy5taW5sZW5ndGg7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLm1pbmxlbmd0aCkpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlT25TZWxlY3QgPSAhIWNvbmZpZy5jbG9zZU9uU2VsZWN0O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25zID0gY29uZmlnLmludGVyYWN0aW9ucztcbiAgICB0aGlzLmRhdGFTcGVjaWFsaXphdGlvbiA9IGNvbmZpZy5kYXRhU3BlY2lhbGl6YXRpb247XG4gICAgdGhpcy5kYXRhVHlwZSA9IGNvbmZpZy5kYXRhVHlwZTtcbiAgICB0aGlzLmFwcGVuZFRvQm9keSA9ICEhY29uZmlnLmFwcGVuZFRvQm9keTtcbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnRTY3JvbGxTZWxlY3RvciA9IGNvbmZpZy5wYXJlbnRTY3JvbGxTZWxlY3RvcjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIGlmIChjb25maWcudG9vbHRpcCkge1xuICAgICAgdGhpcy50b29sdGlwID0gY29uZmlnLnRvb2x0aXA7XG4gICAgICB0aGlzLnRvb2x0aXBQb3NpdGlvbiA9IGNvbmZpZy50b29sdGlwUG9zaXRpb247XG4gICAgICB0aGlzLnRvb2x0aXBTaXplID0gY29uZmlnLnRvb2x0aXBTaXplO1xuICAgICAgdGhpcy50b29sdGlwUHJlbGluZSA9IGNvbmZpZy50b29sdGlwUHJlbGluZTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcEFycm93ID0gY29uZmlnLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgICAgIHRoaXMudG9vbHRpcEF1dG9Qb3NpdGlvbiA9IGNvbmZpZy50b29sdGlwQXV0b1Bvc2l0aW9uO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIHRoaXMuY3VzdG9tQ29udHJvbENvbmZpZyA9IGNvbmZpZy5jdXN0b21Db250cm9sQ29uZmlnO1xuICAgIHRoaXMudGlwV2VsbCA9IGNvbmZpZy50aXBXZWxsO1xuICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgdGhpcy5zdGFydHVwRm9jdXMgPSAhIWNvbmZpZy5zdGFydHVwRm9jdXM7XG4gICAgaWYgKGNvbmZpZy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsKSB7XG4gICAgICB0aGlzLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwgPSBjb25maWcuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybDtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5pc0VtcHR5KSB7XG4gICAgICB0aGlzLmlzRW1wdHkgPSBjb25maWcuaXNFbXB0eTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==