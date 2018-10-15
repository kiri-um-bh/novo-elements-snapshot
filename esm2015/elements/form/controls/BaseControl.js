/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/**
 * @record
 */
export function NovoControlConfig() { }
if (false) {
    /** @type {?|undefined} */
    NovoControlConfig.prototype.validators;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.asyncValidators;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.value;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.key;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.label;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.checkboxLabel;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.required;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.hidden;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.encrypted;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.sortOrder;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.controlType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.placeholder;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.config;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dirty;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.multiple;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.headerConfig;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.currencyFormat;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.associatedEntity;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.optionsType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.forceClear;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.disabled;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.maxlength;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.minlength;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.options;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.type;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.subType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.name;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.readOnly;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.closeOnSelect;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.interactions;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dataSpecialization;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dataType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.appendToBody;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.parentScrollSelector;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.description;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltip;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipPosition;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipSize;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipPreline;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.removeTooltipArrow;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipAutoPosition;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.layoutOptions;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.template;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.customControlConfig;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.customControl;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.military;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dateFormat;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.textMaskEnabled;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.maskOptions;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.allowInvalidDate;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tipWell;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.width;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.startupFocus;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.fileBrowserImageUploadUrl;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.isEmpty;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.startDate;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.endDate;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.restrictFieldInteractions;
}
export class BaseControl {
    /**
     * @param {?=} type
     * @param {?=} config
     */
    constructor(type = 'BaseControl', config = {}) {
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
    /** @type {?} */
    BaseControl.prototype.validators;
    /** @type {?} */
    BaseControl.prototype.asyncValidators;
    /** @type {?} */
    BaseControl.prototype.value;
    /** @type {?} */
    BaseControl.prototype.key;
    /** @type {?} */
    BaseControl.prototype.label;
    /** @type {?} */
    BaseControl.prototype.checkboxLabel;
    /** @type {?} */
    BaseControl.prototype.required;
    /** @type {?} */
    BaseControl.prototype.hidden;
    /** @type {?} */
    BaseControl.prototype.encrypted;
    /** @type {?} */
    BaseControl.prototype.sortOrder;
    /** @type {?} */
    BaseControl.prototype.controlType;
    /** @type {?} */
    BaseControl.prototype.placeholder;
    /** @type {?} */
    BaseControl.prototype.config;
    /** @type {?} */
    BaseControl.prototype.dirty;
    /** @type {?} */
    BaseControl.prototype.multiple;
    /** @type {?} */
    BaseControl.prototype.headerConfig;
    /** @type {?} */
    BaseControl.prototype.currencyFormat;
    /** @type {?} */
    BaseControl.prototype.associatedEntity;
    /** @type {?} */
    BaseControl.prototype.optionsType;
    /** @type {?} */
    BaseControl.prototype.forceClear;
    /** @type {?} */
    BaseControl.prototype.maxlength;
    /** @type {?} */
    BaseControl.prototype.minlength;
    /** @type {?} */
    BaseControl.prototype.options;
    /** @type {?} */
    BaseControl.prototype.type;
    /** @type {?} */
    BaseControl.prototype.subType;
    /** @type {?} */
    BaseControl.prototype.name;
    /** @type {?} */
    BaseControl.prototype.disabled;
    /** @type {?} */
    BaseControl.prototype.readOnly;
    /** @type {?} */
    BaseControl.prototype.closeOnSelect;
    /** @type {?} */
    BaseControl.prototype.interactions;
    /** @type {?} */
    BaseControl.prototype.dataSpecialization;
    /** @type {?} */
    BaseControl.prototype.dataType;
    /** @type {?} */
    BaseControl.prototype.appendToBody;
    /** @type {?} */
    BaseControl.prototype.parentScrollSelector;
    /** @type {?} */
    BaseControl.prototype.description;
    /** @type {?} */
    BaseControl.prototype.tooltip;
    /** @type {?} */
    BaseControl.prototype.tooltipPosition;
    /** @type {?} */
    BaseControl.prototype.tooltipSize;
    /** @type {?} */
    BaseControl.prototype.tooltipPreline;
    /** @type {?} */
    BaseControl.prototype.removeTooltipArrow;
    /** @type {?} */
    BaseControl.prototype.tooltipAutoPosition;
    /** @type {?} */
    BaseControl.prototype.layoutOptions;
    /** @type {?} */
    BaseControl.prototype.template;
    /** @type {?} */
    BaseControl.prototype.customControlConfig;
    /** @type {?} */
    BaseControl.prototype.military;
    /** @type {?} */
    BaseControl.prototype.dateFormat;
    /** @type {?} */
    BaseControl.prototype.textMaskEnabled;
    /** @type {?} */
    BaseControl.prototype.maskOptions;
    /** @type {?} */
    BaseControl.prototype.allowInvalidDate;
    /** @type {?} */
    BaseControl.prototype.tipWell;
    /** @type {?} */
    BaseControl.prototype.width;
    /** @type {?} */
    BaseControl.prototype.startupFocus;
    /** @type {?} */
    BaseControl.prototype.fileBrowserImageUploadUrl;
    /** @type {?} */
    BaseControl.prototype.isEmpty;
    /** @type {?} */
    BaseControl.prototype.startDate;
    /** @type {?} */
    BaseControl.prototype.endDate;
    /** @type {?} */
    BaseControl.prototype.restrictFieldInteractions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBRy9ELDhDQU9DOzs7SUFOQyx5Q0FBZTs7SUFDZix3Q0FBYzs7SUFDZCx1Q0FBZ0M7O0lBQ2hDLDBDQUFpQjs7SUFDakIsdUNBQVk7O0lBQ1osZ0RBQW9COzs7OztBQUd0Qix1Q0F3RUM7OztJQXZFQyx1Q0FBd0I7O0lBQ3hCLDRDQUE2Qjs7SUFDN0Isa0NBQVk7O0lBQ1osZ0NBQWE7O0lBQ2Isa0NBQWU7O0lBQ2YsMENBQXVCOztJQUN2QixxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsc0NBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLHdDQUFxQjs7SUFDckIsd0NBQXFCOztJQUNyQixtQ0FBYTs7SUFDYixrQ0FBZ0I7O0lBQ2hCLHFDQUFtQjs7SUFDbkIseUNBQW1COztJQUNuQiwyQ0FBd0I7O0lBQ3hCLDZDQUEwQjs7SUFDMUIsd0NBQXFCOztJQUNyQix1Q0FBK0I7O0lBQy9CLHFDQUFtQjs7SUFDbkIsc0NBQW1COztJQUNuQixzQ0FBbUI7O0lBQ25CLG9DQUFxQjs7SUFDckIsaUNBQWM7O0lBQ2Qsb0NBQWlCOztJQUNqQixpQ0FBYzs7SUFDZCxxQ0FBbUI7O0lBQ25CLDBDQUF3Qjs7SUFDeEIseUNBQTZCOztJQUM3QiwrQ0FBNEI7O0lBQzVCLHFDQUFrQjs7SUFDbEIseUNBQXVCOztJQUN2QixpREFBOEI7O0lB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Qiw4QkFBaUI7O0lBQ2pCLHNDQUF5Qjs7SUFDekIsa0NBQXFCOztJQUNyQixxQ0FBeUI7O0lBQ3pCLHlDQUE2Qjs7SUFDN0IsMENBQThCOztJQUM5QixvQ0FPRTs7SUFDRiwrQkFBZTs7SUFDZiwwQ0FBMEI7O0lBQzFCLCtCQUFtQjs7SUFDbkIsaUNBQW9COztJQUNwQixzQ0FBMEI7O0lBQzFCLGtDQUEyQjs7SUFDM0IsdUNBQTJCOztJQUMzQiw4QkFJRTs7SUFDRiw0QkFBYzs7SUFDZCxtQ0FBdUI7O0lBQ3ZCLGdEQUFtQzs7SUFDbkMsOEJBQW1COztJQUNuQixnQ0FBMEI7O0lBQzFCLDhCQUF3Qjs7SUFDeEIsZ0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWcgfSBmcm9tICcuLi9Db250cm9sR3JvdXAnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuLi9Db250cm9sJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvR3JvdXBlZENvbnRyb2xDb25maWcge1xuICBsYWJlbD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgYWRkPzogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgcmVtb3ZlPzogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIGluaXRpYWxWYWx1ZT86IHt9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0NvbnRyb2xDb25maWcge1xuICB2YWxpZGF0b3JzPzogQXJyYXk8YW55PjtcbiAgYXN5bmNWYWxpZGF0b3JzPzogQXJyYXk8YW55PjtcbiAgdmFsdWU/OiBhbnk7XG4gIGtleT86IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGNoZWNrYm94TGFiZWw/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgc29ydE9yZGVyPzogbnVtYmVyO1xuICBjb250cm9sVHlwZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGNvbmZpZz86IGFueTtcbiAgZGlydHk/OiBib29sZWFuO1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIGhlYWRlckNvbmZpZz86IGFueTtcbiAgY3VycmVuY3lGb3JtYXQ/OiBzdHJpbmc7XG4gIGFzc29jaWF0ZWRFbnRpdHk/OiBzdHJpbmc7XG4gIG9wdGlvbnNUeXBlPzogc3RyaW5nO1xuICBmb3JjZUNsZWFyPzogRXZlbnRFbWl0dGVyPGFueT47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuICBtaW5sZW5ndGg/OiBudW1iZXI7XG4gIG9wdGlvbnM/OiBBcnJheTxhbnk+O1xuICB0eXBlPzogc3RyaW5nO1xuICBzdWJUeXBlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGNsb3NlT25TZWxlY3Q/OiBib29sZWFuO1xuICBpbnRlcmFjdGlvbnM/OiBBcnJheTxPYmplY3Q+O1xuICBkYXRhU3BlY2lhbGl6YXRpb24/OiBzdHJpbmc7XG4gIGRhdGFUeXBlPzogc3RyaW5nO1xuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uPzogc3RyaW5nO1xuICB0b29sdGlwU2l6ZT86IHN0cmluZztcbiAgdG9vbHRpcFByZWxpbmU/OiBib29sZWFuO1xuICByZW1vdmVUb29sdGlwQXJyb3c/OiBib29sZWFuO1xuICB0b29sdGlwQXV0b1Bvc2l0aW9uPzogYm9vbGVhbjtcbiAgbGF5b3V0T3B0aW9ucz86IHtcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZWRpdD86IGJvb2xlYW47XG4gICAgY3VzdG9tQWN0aW9ucz86IGJvb2xlYW47XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGljb25TdHlsZT86IHN0cmluZztcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICB9O1xuICB0ZW1wbGF0ZT86IGFueTtcbiAgY3VzdG9tQ29udHJvbENvbmZpZz86IGFueTtcbiAgY3VzdG9tQ29udHJvbD86IGFueTtcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICB0ZXh0TWFza0VuYWJsZWQ/OiBib29sZWFuO1xuICBtYXNrT3B0aW9ucz86IElNYXNrT3B0aW9ucztcbiAgYWxsb3dJbnZhbGlkRGF0ZT86IGJvb2xlYW47XG4gIHRpcFdlbGw/OiB7XG4gICAgdGlwOiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBidXR0b24/OiBib29sZWFuO1xuICB9O1xuICB3aWR0aD86IG51bWJlcjtcbiAgc3RhcnR1cEZvY3VzPzogYm9vbGVhbjtcbiAgZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybD86IHN0cmluZztcbiAgaXNFbXB0eT86IEZ1bmN0aW9uO1xuICBzdGFydERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBlbmREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29udHJvbCB7XG4gIF9fdHlwZTogc3RyaW5nID0gJ0Jhc2VDb250cm9sJztcbiAgX19jb25maWc6IE5vdm9Db250cm9sQ29uZmlnO1xuXG4gIHZhbGlkYXRvcnM6IEFycmF5PGFueT47XG4gIGFzeW5jVmFsaWRhdG9ycz86IEFycmF5PGFueT47XG4gIHZhbHVlOiBhbnk7XG4gIGtleTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGVja2JveExhYmVsOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAgc29ydE9yZGVyOiBudW1iZXI7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIGNvbmZpZzogYW55O1xuICBkaXJ0eTogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBjdXJyZW5jeUZvcm1hdDogc3RyaW5nO1xuICBhc3NvY2lhdGVkRW50aXR5OiBzdHJpbmc7XG4gIG9wdGlvbnNUeXBlOiBzdHJpbmc7XG4gIGZvcmNlQ2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZT86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcmVhZE9ubHk6IGJvb2xlYW47IC8vIFwiZGlzYWJsZWRcIiwgc28gaXQgYXBwZWFycyBpbiB0aGUgbW9kZWwgc3RpbGxcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbjtcbiAgaW50ZXJhY3Rpb25zOiBBcnJheTxPYmplY3Q+O1xuICBkYXRhU3BlY2lhbGl6YXRpb246IHN0cmluZztcbiAgZGF0YVR5cGU6IHN0cmluZztcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICB0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBsYXlvdXRPcHRpb25zPzoge1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgaWNvblN0eWxlPzogc3RyaW5nO1xuICAgIHJlbW92YWJsZT86IGJvb2xlYW47XG4gIH07XG4gIHRlbXBsYXRlPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBtaWxpdGFyeT86IGJvb2xlYW47XG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIG1hc2tPcHRpb25zPzogSU1hc2tPcHRpb25zO1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgdGlwV2VsbD86IHtcbiAgICB0aXA6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gIH07XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0YXJ0dXBGb2N1cz86IGJvb2xlYW47XG4gIGZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw/OiBzdHJpbmc7XG4gIGlzRW1wdHk/OiBGdW5jdGlvbjtcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZyA9ICdCYXNlQ29udHJvbCcsIGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcgPSB7fSkge1xuICAgIHRoaXMuX190eXBlID0gdHlwZTtcbiAgICB0aGlzLl9fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbmZpZy52YWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMuYXN5bmNWYWxpZGF0b3JzID0gY29uZmlnLmFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIHRoaXMua2V5ID0gY29uZmlnLmtleSB8fCAnJztcbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsIHx8ICcnO1xuICAgIHRoaXMuY2hlY2tib3hMYWJlbCA9IGNvbmZpZy5jaGVja2JveExhYmVsO1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8ICcnO1xuICAgIHRoaXMucmVxdWlyZWQgPSAhIWNvbmZpZy5yZXF1aXJlZDtcbiAgICB0aGlzLmhpZGRlbiA9ICEhY29uZmlnLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9ICEhY29uZmlnLmVuY3J5cHRlZDtcbiAgICB0aGlzLnNvcnRPcmRlciA9IGNvbmZpZy5zb3J0T3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiBjb25maWcuc29ydE9yZGVyO1xuICAgIHRoaXMuY29udHJvbFR5cGUgPSBjb25maWcuY29udHJvbFR5cGUgfHwgJyc7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmRpcnR5ID0gISFjb25maWcudmFsdWU7XG4gICAgdGhpcy5tdWx0aXBsZSA9ICEhY29uZmlnLm11bHRpcGxlO1xuICAgIHRoaXMuaGVhZGVyQ29uZmlnID0gY29uZmlnLmhlYWRlckNvbmZpZyB8fCBudWxsO1xuICAgIHRoaXMuY3VycmVuY3lGb3JtYXQgPSBjb25maWcuY3VycmVuY3lGb3JtYXQgfHwgbnVsbDtcbiAgICB0aGlzLmFzc29jaWF0ZWRFbnRpdHkgPSBjb25maWcuYXNzb2NpYXRlZEVudGl0eSB8fCBudWxsO1xuICAgIHRoaXMub3B0aW9uc1R5cGUgPSBjb25maWcub3B0aW9uc1R5cGUgfHwgbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb25maWcub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLmZvcmNlQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5yZWFkT25seSA9ICEhY29uZmlnLnJlYWRPbmx5IHx8ICEhY29uZmlnLmRpc2FibGVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhIWNvbmZpZy5kaXNhYmxlZDtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBjb25maWcubGF5b3V0T3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLm1pbGl0YXJ5ID0gISFjb25maWcubWlsaXRhcnk7XG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29uZmlnLmRhdGVGb3JtYXQ7XG4gICAgdGhpcy50ZXh0TWFza0VuYWJsZWQgPSBjb25maWcudGV4dE1hc2tFbmFibGVkO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSBjb25maWcubWFza09wdGlvbnM7XG4gICAgdGhpcy5hbGxvd0ludmFsaWREYXRlID0gY29uZmlnLmFsbG93SW52YWxpZERhdGU7XG4gICAgdGhpcy5zdGFydERhdGUgPSBjb25maWcuc3RhcnREYXRlO1xuICAgIHRoaXMuZW5kRGF0ZSA9IGNvbmZpZy5lbmREYXRlO1xuICAgIHRoaXMucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucyA9ICEhY29uZmlnLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM7XG5cbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgfVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKGNvbmZpZy5tYXhsZW5ndGgpKSB7XG4gICAgICB0aGlzLm1heGxlbmd0aCA9IGNvbmZpZy5tYXhsZW5ndGg7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLm1heGxlbmd0aCkpO1xuICAgIH1cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhjb25maWcubWlubGVuZ3RoKSkge1xuICAgICAgdGhpcy5taW5sZW5ndGggPSBjb25maWcubWlubGVuZ3RoO1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5taW5sZW5ndGgpKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZU9uU2VsZWN0ID0gISFjb25maWcuY2xvc2VPblNlbGVjdDtcbiAgICB0aGlzLmludGVyYWN0aW9ucyA9IGNvbmZpZy5pbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5kYXRhU3BlY2lhbGl6YXRpb24gPSBjb25maWcuZGF0YVNwZWNpYWxpemF0aW9uO1xuICAgIHRoaXMuZGF0YVR5cGUgPSBjb25maWcuZGF0YVR5cGU7XG4gICAgdGhpcy5hcHBlbmRUb0JvZHkgPSAhIWNvbmZpZy5hcHBlbmRUb0JvZHk7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IgPSBjb25maWcucGFyZW50U2Nyb2xsU2VsZWN0b3I7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICBpZiAoY29uZmlnLnRvb2x0aXApIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGNvbmZpZy50b29sdGlwO1xuICAgICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSBjb25maWcudG9vbHRpcFBvc2l0aW9uO1xuICAgICAgdGhpcy50b29sdGlwU2l6ZSA9IGNvbmZpZy50b29sdGlwU2l6ZTtcbiAgICAgIHRoaXMudG9vbHRpcFByZWxpbmUgPSBjb25maWcudG9vbHRpcFByZWxpbmU7XG4gICAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdyA9IGNvbmZpZy5yZW1vdmVUb29sdGlwQXJyb3c7XG4gICAgICB0aGlzLnRvb2x0aXBBdXRvUG9zaXRpb24gPSBjb25maWcudG9vbHRpcEF1dG9Qb3NpdGlvbjtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB0aGlzLmN1c3RvbUNvbnRyb2xDb25maWcgPSBjb25maWcuY3VzdG9tQ29udHJvbENvbmZpZztcbiAgICB0aGlzLnRpcFdlbGwgPSBjb25maWcudGlwV2VsbDtcbiAgICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIHRoaXMuc3RhcnR1cEZvY3VzID0gISFjb25maWcuc3RhcnR1cEZvY3VzO1xuICAgIGlmIChjb25maWcuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCkge1xuICAgICAgdGhpcy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gY29uZmlnLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgfVxuICAgIGlmIChjb25maWcuaXNFbXB0eSkge1xuICAgICAgdGhpcy5pc0VtcHR5ID0gY29uZmlnLmlzRW1wdHk7XG4gICAgfVxuICB9XG59XG4iXX0=