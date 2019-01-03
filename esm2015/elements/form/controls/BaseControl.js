/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.metaType = config.metaType;
        this.placeholder = config.placeholder || '';
        this.config = config.config || null;
        this.dirty = !!config.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBRy9ELDhDQU9DOzs7SUFOQyx5Q0FBZTs7SUFDZix3Q0FBYzs7SUFDZCx1Q0FBZ0M7O0lBQ2hDLDBDQUFpQjs7SUFDakIsdUNBQVk7O0lBQ1osZ0RBQW9COztBQUd0QixNQUFNLGFBQWE7Q0EwRWxCOzs7SUF6RUMseUNBQTJCOztJQUMzQixxQ0FBc0I7O0lBQ3RCLHlDQUF5Qjs7SUFDekIsd0NBQTZCOztJQUM3QixzQ0FBc0I7O0lBQ3RCLHNDQUF1Qjs7SUFDdkIsK0JBQVk7O0lBQ1osb0NBQW9COztJQUNwQix1Q0FBdUI7O0lBQ3ZCLHNDQUFvQjs7SUFDcEIsNENBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLGlDQUFpQjs7SUFDakIsbUNBQW9COztJQUNwQixvQ0FBcUI7O0lBQ3JCLDhCQUFlOztJQUNmLGlDQUFrQjs7SUFDbEIsa0NBQW1COztJQUNuQixnQ0FBd0I7O0lBQ3hCLGtEQUFtQzs7SUFDbkMsbUNBQThCOztJQUM5QixxQ0FBa0I7O0lBQ2xCLCtCQUFnQjs7SUFDaEIscUNBQTRCOztJQUM1QixnQ0FBbUI7O0lBQ25CLDRCQUFZOztJQUNaLDhCQUFjOztJQUNkLG9DQUEyQjs7SUFDM0Isa0NBQWtCOztJQUNsQixpQ0FBaUI7O0lBQ2pCLGlDQUFtQjs7SUFDbkIsa0NBQWtCOztJQUNsQixpQ0FBa0I7O0lBQ2xC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QUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQzFDLElBQUksTUFBTSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7U0FDbkU7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUNGOzs7SUF0RkMsNkJBQStCOztJQUMvQiwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZyB9IGZyb20gJy4uL0NvbnRyb2xHcm91cCc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IElNYXNrT3B0aW9ucyB9IGZyb20gJy4uL0NvbnRyb2wnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Hcm91cGVkQ29udHJvbENvbmZpZyB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBhZGQ/OiBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnO1xuICByZW1vdmU/OiBib29sZWFuO1xuICBrZXk6IHN0cmluZztcbiAgaW5pdGlhbFZhbHVlPzoge31bXTtcbn1cblxuY2xhc3MgQ29udHJvbENvbmZpZyB7XG4gIGFsbG93SW52YWxpZERhdGU/OiBib29sZWFuO1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47IC8vIERlcHJlY2F0ZWQ7XG4gIGFzc29jaWF0ZWRFbnRpdHk6IHN0cmluZztcbiAgYXN5bmNWYWxpZGF0b3JzPzogQXJyYXk8YW55PjtcbiAgY2hlY2tib3hMYWJlbDogc3RyaW5nO1xuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuO1xuICBjb25maWc6IGFueTtcbiAgY29udHJvbFR5cGU6IHN0cmluZztcbiAgY3VycmVuY3lGb3JtYXQ6IHN0cmluZztcbiAgY3VzdG9tQ29udHJvbD86IGFueTtcbiAgY3VzdG9tQ29udHJvbENvbmZpZz86IGFueTtcbiAgZGF0YVNwZWNpYWxpemF0aW9uOiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBzdHJpbmc7XG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkaXJ0eTogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIGZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw/OiBzdHJpbmc7XG4gIGZvcmNlQ2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBoZWFkZXJDb25maWc6IGFueTtcbiAgaGlkZGVuOiBib29sZWFuO1xuICBpbnRlcmFjdGlvbnM6IEFycmF5PE9iamVjdD47XG4gIGlzRW1wdHk/OiBGdW5jdGlvbjtcbiAga2V5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG1hc2tPcHRpb25zPzogSU1hc2tPcHRpb25zO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWV0YVR5cGU6IHN0cmluZztcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBtaW5sZW5ndGg6IG51bWJlcjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcbiAgb3B0aW9uc1R5cGU6IHN0cmluZztcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcmVhZE9ubHk6IGJvb2xlYW47IC8vIFwiZGlzYWJsZWRcIiwgc28gaXQgYXBwZWFycyBpbiB0aGUgbW9kZWwgc3RpbGw7XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zPzogYm9vbGVhbjtcbiAgc29ydE9yZGVyOiBudW1iZXI7XG4gIHN0YXJ0RGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIHN0YXJ0dXBGb2N1cz86IGJvb2xlYW47XG4gIHN1YlR5cGU/OiBzdHJpbmc7XG4gIHRlbXBsYXRlPzogYW55O1xuICB0ZXh0TWFza0VuYWJsZWQ/OiBib29sZWFuO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICB0b29sdGlwQXV0b1Bvc2l0aW9uPzogYm9vbGVhbjtcbiAgdG9vbHRpcFBvc2l0aW9uPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbGlkYXRvcnM6IEFycmF5PGFueT47XG4gIHZhbHVlOiBhbnk7XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGxheW91dE9wdGlvbnM/OiB7XG4gICAgY3VzdG9tQWN0aW9ucz86IGJvb2xlYW47XG4gICAgZG93bmxvYWQ/OiBib29sZWFuO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgZWRpdD86IGJvb2xlYW47XG4gICAgaWNvblN0eWxlPzogc3RyaW5nO1xuICAgIGxhYmVsU3R5bGU/OiBzdHJpbmc7XG4gICAgb3JkZXI/OiBzdHJpbmc7XG4gICAgcmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgfTtcbiAgdGlwV2VsbD86IHtcbiAgICBidXR0b24/OiBib29sZWFuO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgdGlwOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIE5vdm9Db250cm9sQ29uZmlnID0gUGFydGlhbDxDb250cm9sQ29uZmlnPjtcblxuZXhwb3J0IGNsYXNzIEJhc2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbmZpZyB7XG4gIF9fdHlwZTogc3RyaW5nID0gJ0Jhc2VDb250cm9sJztcbiAgX19jb25maWc6IE5vdm9Db250cm9sQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZyA9ICdCYXNlQ29udHJvbCcsIGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuX19jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gY29uZmlnLnZhbGlkYXRvcnMgfHwgW107XG4gICAgdGhpcy5hc3luY1ZhbGlkYXRvcnMgPSBjb25maWcuYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgdGhpcy5rZXkgPSBjb25maWcua2V5IHx8ICcnO1xuICAgIHRoaXMubGFiZWwgPSBjb25maWcubGFiZWwgfHwgJyc7XG4gICAgdGhpcy5jaGVja2JveExhYmVsID0gY29uZmlnLmNoZWNrYm94TGFiZWw7XG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5yZXF1aXJlZCA9ICEhY29uZmlnLnJlcXVpcmVkO1xuICAgIHRoaXMuaGlkZGVuID0gISFjb25maWcuaGlkZGVuO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gISFjb25maWcuZW5jcnlwdGVkO1xuICAgIHRoaXMuc29ydE9yZGVyID0gY29uZmlnLnNvcnRPcmRlciA9PT0gdW5kZWZpbmVkID8gMSA6IGNvbmZpZy5zb3J0T3JkZXI7XG4gICAgdGhpcy5jb250cm9sVHlwZSA9IGNvbmZpZy5jb250cm9sVHlwZSB8fCAnJztcbiAgICB0aGlzLm1ldGFUeXBlID0gY29uZmlnLm1ldGFUeXBlO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjb25maWcucGxhY2Vob2xkZXIgfHwgJyc7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWcuY29uZmlnIHx8IG51bGw7XG4gICAgdGhpcy5kaXJ0eSA9ICEhY29uZmlnLnZhbHVlO1xuICAgIHRoaXMubXVsdGlwbGUgPSAhIWNvbmZpZy5tdWx0aXBsZTtcbiAgICB0aGlzLmhlYWRlckNvbmZpZyA9IGNvbmZpZy5oZWFkZXJDb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmN1cnJlbmN5Rm9ybWF0ID0gY29uZmlnLmN1cnJlbmN5Rm9ybWF0IHx8IG51bGw7XG4gICAgdGhpcy5hc3NvY2lhdGVkRW50aXR5ID0gY29uZmlnLmFzc29jaWF0ZWRFbnRpdHkgfHwgbnVsbDtcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29uZmlnLm9wdGlvbnNUeXBlIHx8IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5mb3JjZUNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMucmVhZE9ubHkgPSAhIWNvbmZpZy5yZWFkT25seSB8fCAhIWNvbmZpZy5kaXNhYmxlZDtcbiAgICB0aGlzLmRpc2FibGVkID0gISFjb25maWcuZGlzYWJsZWQ7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gY29uZmlnLmxheW91dE9wdGlvbnMgfHwge307XG4gICAgdGhpcy5taWxpdGFyeSA9ICEhY29uZmlnLm1pbGl0YXJ5O1xuICAgIHRoaXMuZGF0ZUZvcm1hdCA9IGNvbmZpZy5kYXRlRm9ybWF0O1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29uZmlnLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0gY29uZmlnLm1hc2tPcHRpb25zO1xuICAgIHRoaXMuYWxsb3dJbnZhbGlkRGF0ZSA9IGNvbmZpZy5hbGxvd0ludmFsaWREYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29uZmlnLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLmVuZERhdGUgPSBjb25maWcuZW5kRGF0ZTtcbiAgICB0aGlzLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMgPSAhIWNvbmZpZy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KGNvbmZpZy53YXJuaW5nKSkge1xuICAgICAgdGhpcy53YXJuaW5nID0gY29uZmlnLndhcm5pbmc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgIH1cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhjb25maWcubWF4bGVuZ3RoKSkge1xuICAgICAgdGhpcy5tYXhsZW5ndGggPSBjb25maWcubWF4bGVuZ3RoO1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5tYXhsZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoY29uZmlnLm1pbmxlbmd0aCkpIHtcbiAgICAgIHRoaXMubWlubGVuZ3RoID0gY29uZmlnLm1pbmxlbmd0aDtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWlubGVuZ3RoKSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPblNlbGVjdCA9ICEhY29uZmlnLmNsb3NlT25TZWxlY3Q7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnMgPSBjb25maWcuaW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuZGF0YVNwZWNpYWxpemF0aW9uID0gY29uZmlnLmRhdGFTcGVjaWFsaXphdGlvbjtcbiAgICB0aGlzLmRhdGFUeXBlID0gY29uZmlnLmRhdGFUeXBlO1xuICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID0gISFjb25maWcuYXBwZW5kVG9Cb2R5O1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yID0gY29uZmlnLnBhcmVudFNjcm9sbFNlbGVjdG9yO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgaWYgKGNvbmZpZy50b29sdGlwKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBjb25maWcudG9vbHRpcDtcbiAgICAgIHRoaXMudG9vbHRpcFBvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBQb3NpdGlvbjtcbiAgICAgIHRoaXMudG9vbHRpcFNpemUgPSBjb25maWcudG9vbHRpcFNpemU7XG4gICAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29uZmlnLnRvb2x0aXBQcmVsaW5lO1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwQXJyb3cgPSBjb25maWcucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgICAgdGhpcy50b29sdGlwQXV0b1Bvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBBdXRvUG9zaXRpb247XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgdGhpcy5jdXN0b21Db250cm9sQ29uZmlnID0gY29uZmlnLmN1c3RvbUNvbnRyb2xDb25maWc7XG4gICAgdGhpcy50aXBXZWxsID0gY29uZmlnLnRpcFdlbGw7XG4gICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICB0aGlzLnN0YXJ0dXBGb2N1cyA9ICEhY29uZmlnLnN0YXJ0dXBGb2N1cztcbiAgICBpZiAoY29uZmlnLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwpIHtcbiAgICAgIHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCA9IGNvbmZpZy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eSA9IGNvbmZpZy5pc0VtcHR5O1xuICAgIH1cbiAgfVxufVxuIl19