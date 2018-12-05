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
    NovoControlConfig.prototype.metaType;
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
    /** @type {?|undefined} */
    NovoControlConfig.prototype.warning;
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
    BaseControl.prototype.metaType;
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
    /** @type {?} */
    BaseControl.prototype.warning;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBRy9ELDhDQU9DOzs7SUFOQyx5Q0FBZTs7SUFDZix3Q0FBYzs7SUFDZCx1Q0FBZ0M7O0lBQ2hDLDBDQUFpQjs7SUFDakIsdUNBQVk7O0lBQ1osZ0RBQW9COzs7OztBQUd0Qix1Q0EwRUM7OztJQXpFQyx1Q0FBd0I7O0lBQ3hCLDRDQUE2Qjs7SUFDN0Isa0NBQVk7O0lBQ1osZ0NBQWE7O0lBQ2Isa0NBQWU7O0lBQ2YsMENBQXVCOztJQUN2QixxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsc0NBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLHdDQUFxQjs7SUFDckIsd0NBQXFCOztJQUNyQixtQ0FBYTs7SUFDYixrQ0FBZ0I7O0lBQ2hCLHFDQUFtQjs7SUFDbkIseUNBQW1COztJQUNuQiwyQ0FBd0I7O0lBQ3hCLDZDQUEwQjs7SUFDMUIsd0NBQXFCOztJQUNyQix1Q0FBK0I7O0lBQy9CLHFDQUFtQjs7SUFDbkIsc0NBQW1COztJQUNuQixzQ0FBbUI7O0lBQ25CLG9DQUFxQjs7SUFDckIsaUNBQWM7O0lBQ2Qsb0NBQWlCOztJQUNqQixpQ0FBYzs7SUFDZCxxQ0FBbUI7O0lBQ25CLDBDQUF3Qjs7SUFDeEIseUNBQTZCOztJQUM3QiwrQ0FBNEI7O0lBQzVCLHFDQUFrQjs7SUFDbEIscUNBQWtCOztJQUNsQix5Q0FBdUI7O0lB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a0I7O0lBQ2xCLGdDQUFrQjs7SUFDbEIsOEJBQW9COztJQUNwQiwyQkFBYTs7SUFDYiw4QkFBaUI7O0lBQ2pCLDJCQUFhOztJQUNiLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztJQUNsQixvQ0FBdUI7O0lBQ3ZCLG1DQUE0Qjs7SUFDNUIseUNBQTJCOztJQUMzQiwrQkFBaUI7O0lBQ2pCLG1DQUFzQjs7SUFDdEIsMkNBQTZCOztJQUM3QixrQ0FBcUI7O0lBQ3JCLDhCQUFpQjs7SUFDakIsc0NBQXlCOztJQUN6QixrQ0FBcUI7O0lBQ3JCLHFDQUF5Qjs7SUFDekIseUNBQTZCOztJQUM3QiwwQ0FBOEI7O0lBQzlCLG9DQU9FOztJQUNGLCtCQUFlOztJQUNmLDBDQUEwQjs7SUFDMUIsK0JBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLHNDQUEwQjs7SUFDMUIsa0NBQTJCOztJQUMzQix1Q0FBMkI7O0lBQzNCLDhCQUlFOztJQUNGLDRCQUFjOztJQUNkLG1DQUF1Qjs7SUFDdkIsZ0RBQW1DOztJQUNuQyw4QkFBbUI7O0lBQ25CLGdDQUEwQjs7SUFDMUIsOEJBQXdCOztJQUN4QixnREFBb0M7O0lBQ3BDLDhCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIH0gZnJvbSAnLi4vQ29udHJvbEdyb3VwJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgSU1hc2tPcHRpb25zIH0gZnJvbSAnLi4vQ29udHJvbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0dyb3VwZWRDb250cm9sQ29uZmlnIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGFkZD86IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWc7XG4gIHJlbW92ZT86IGJvb2xlYW47XG4gIGtleTogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU/OiB7fVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sQ29uZmlnIHtcbiAgdmFsaWRhdG9ycz86IEFycmF5PGFueT47XG4gIGFzeW5jVmFsaWRhdG9ycz86IEFycmF5PGFueT47XG4gIHZhbHVlPzogYW55O1xuICBrZXk/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjaGVja2JveExhYmVsPzogc3RyaW5nO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gIHNvcnRPcmRlcj86IG51bWJlcjtcbiAgY29udHJvbFR5cGU/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBjb25maWc/OiBhbnk7XG4gIGRpcnR5PzogYm9vbGVhbjtcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICBoZWFkZXJDb25maWc/OiBhbnk7XG4gIGN1cnJlbmN5Rm9ybWF0Pzogc3RyaW5nO1xuICBhc3NvY2lhdGVkRW50aXR5Pzogc3RyaW5nO1xuICBvcHRpb25zVHlwZT86IHN0cmluZztcbiAgZm9yY2VDbGVhcj86IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG1heGxlbmd0aD86IG51bWJlcjtcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuICBvcHRpb25zPzogQXJyYXk8YW55PjtcbiAgdHlwZT86IHN0cmluZztcbiAgc3ViVHlwZT86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBjbG9zZU9uU2VsZWN0PzogYm9vbGVhbjtcbiAgaW50ZXJhY3Rpb25zPzogQXJyYXk8T2JqZWN0PjtcbiAgZGF0YVNwZWNpYWxpemF0aW9uPzogc3RyaW5nO1xuICBkYXRhVHlwZT86IHN0cmluZztcbiAgbWV0YVR5cGU/OiBzdHJpbmc7XG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47IC8vIERlcHJlY2F0ZWRcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICB0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBsYXlvdXRPcHRpb25zPzoge1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBjdXN0b21BY3Rpb25zPzogYm9vbGVhbjtcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgaWNvblN0eWxlPzogc3RyaW5nO1xuICAgIHJlbW92YWJsZT86IGJvb2xlYW47XG4gIH07XG4gIHRlbXBsYXRlPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBjdXN0b21Db250cm9sPzogYW55O1xuICBtaWxpdGFyeT86IGJvb2xlYW47XG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIG1hc2tPcHRpb25zPzogSU1hc2tPcHRpb25zO1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgdGlwV2VsbD86IHtcbiAgICB0aXA6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gIH07XG4gIHdpZHRoPzogbnVtYmVyO1xuICBzdGFydHVwRm9jdXM/OiBib29sZWFuO1xuICBmaWxlQnJvd3NlckltYWdlVXBsb2FkVXJsPzogc3RyaW5nO1xuICBpc0VtcHR5PzogRnVuY3Rpb247XG4gIHN0YXJ0RGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIGVuZERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zPzogYm9vbGVhbjtcbiAgd2FybmluZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VDb250cm9sIHtcbiAgX190eXBlOiBzdHJpbmcgPSAnQmFzZUNvbnRyb2wnO1xuICBfX2NvbmZpZzogTm92b0NvbnRyb2xDb25maWc7XG5cbiAgdmFsaWRhdG9yczogQXJyYXk8YW55PjtcbiAgYXN5bmNWYWxpZGF0b3JzPzogQXJyYXk8YW55PjtcbiAgdmFsdWU6IGFueTtcbiAga2V5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoZWNrYm94TGFiZWw6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgZW5jcnlwdGVkOiBib29sZWFuO1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgY29udHJvbFR5cGU6IHN0cmluZztcbiAgbWV0YVR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgY29uZmlnOiBhbnk7XG4gIGRpcnR5OiBib29sZWFuO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcbiAgaGVhZGVyQ29uZmlnOiBhbnk7XG4gIGN1cnJlbmN5Rm9ybWF0OiBzdHJpbmc7XG4gIGFzc29jaWF0ZWRFbnRpdHk6IHN0cmluZztcbiAgb3B0aW9uc1R5cGU6IHN0cmluZztcbiAgZm9yY2VDbGVhcjogRXZlbnRFbWl0dGVyPGFueT47XG4gIG1heGxlbmd0aDogbnVtYmVyO1xuICBtaW5sZW5ndGg6IG51bWJlcjtcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcbiAgdHlwZTogc3RyaW5nO1xuICBzdWJUeXBlPzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICByZWFkT25seTogYm9vbGVhbjsgLy8gXCJkaXNhYmxlZFwiLCBzbyBpdCBhcHBlYXJzIGluIHRoZSBtb2RlbCBzdGlsbFxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuO1xuICBpbnRlcmFjdGlvbnM6IEFycmF5PE9iamVjdD47XG4gIGRhdGFTcGVjaWFsaXphdGlvbjogc3RyaW5nO1xuICBkYXRhVHlwZTogc3RyaW5nO1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47IC8vIERlcHJlY2F0ZWRcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIHRvb2x0aXBQb3NpdGlvbj86IHN0cmluZztcbiAgdG9vbHRpcFNpemU/OiBzdHJpbmc7XG4gIHRvb2x0aXBQcmVsaW5lPzogYm9vbGVhbjtcbiAgcmVtb3ZlVG9vbHRpcEFycm93PzogYm9vbGVhbjtcbiAgdG9vbHRpcEF1dG9Qb3NpdGlvbj86IGJvb2xlYW47XG4gIGxheW91dE9wdGlvbnM/OiB7XG4gICAgb3JkZXI/OiBzdHJpbmc7XG4gICAgZG93bmxvYWQ/OiBib29sZWFuO1xuICAgIGxhYmVsU3R5bGU/OiBzdHJpbmc7XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBpY29uU3R5bGU/OiBzdHJpbmc7XG4gICAgcmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgfTtcbiAgdGVtcGxhdGU/OiBhbnk7XG4gIGN1c3RvbUNvbnRyb2xDb25maWc/OiBhbnk7XG4gIG1pbGl0YXJ5PzogYm9vbGVhbjtcbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgdGV4dE1hc2tFbmFibGVkPzogYm9vbGVhbjtcbiAgbWFza09wdGlvbnM/OiBJTWFza09wdGlvbnM7XG4gIGFsbG93SW52YWxpZERhdGU/OiBib29sZWFuO1xuICB0aXBXZWxsPzoge1xuICAgIHRpcDogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgYnV0dG9uPzogYm9vbGVhbjtcbiAgfTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgc3RhcnR1cEZvY3VzPzogYm9vbGVhbjtcbiAgZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybD86IHN0cmluZztcbiAgaXNFbXB0eT86IEZ1bmN0aW9uO1xuICBzdGFydERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBlbmREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nID0gJ0Jhc2VDb250cm9sJywgY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5fX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuX19jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gY29uZmlnLnZhbGlkYXRvcnMgfHwgW107XG4gICAgdGhpcy5hc3luY1ZhbGlkYXRvcnMgPSBjb25maWcuYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgdGhpcy5rZXkgPSBjb25maWcua2V5IHx8ICcnO1xuICAgIHRoaXMubGFiZWwgPSBjb25maWcubGFiZWwgfHwgJyc7XG4gICAgdGhpcy5jaGVja2JveExhYmVsID0gY29uZmlnLmNoZWNrYm94TGFiZWw7XG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5yZXF1aXJlZCA9ICEhY29uZmlnLnJlcXVpcmVkO1xuICAgIHRoaXMuaGlkZGVuID0gISFjb25maWcuaGlkZGVuO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gISFjb25maWcuZW5jcnlwdGVkO1xuICAgIHRoaXMuc29ydE9yZGVyID0gY29uZmlnLnNvcnRPcmRlciA9PT0gdW5kZWZpbmVkID8gMSA6IGNvbmZpZy5zb3J0T3JkZXI7XG4gICAgdGhpcy5jb250cm9sVHlwZSA9IGNvbmZpZy5jb250cm9sVHlwZSB8fCAnJztcbiAgICB0aGlzLm1ldGFUeXBlID0gY29uZmlnLm1ldGFUeXBlO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjb25maWcucGxhY2Vob2xkZXIgfHwgJyc7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWcuY29uZmlnIHx8IG51bGw7XG4gICAgdGhpcy5kaXJ0eSA9ICEhY29uZmlnLnZhbHVlO1xuICAgIHRoaXMubXVsdGlwbGUgPSAhIWNvbmZpZy5tdWx0aXBsZTtcbiAgICB0aGlzLmhlYWRlckNvbmZpZyA9IGNvbmZpZy5oZWFkZXJDb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmN1cnJlbmN5Rm9ybWF0ID0gY29uZmlnLmN1cnJlbmN5Rm9ybWF0IHx8IG51bGw7XG4gICAgdGhpcy5hc3NvY2lhdGVkRW50aXR5ID0gY29uZmlnLmFzc29jaWF0ZWRFbnRpdHkgfHwgbnVsbDtcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29uZmlnLm9wdGlvbnNUeXBlIHx8IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5mb3JjZUNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMucmVhZE9ubHkgPSAhIWNvbmZpZy5yZWFkT25seSB8fCAhIWNvbmZpZy5kaXNhYmxlZDtcbiAgICB0aGlzLmRpc2FibGVkID0gISFjb25maWcuZGlzYWJsZWQ7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gY29uZmlnLmxheW91dE9wdGlvbnMgfHwge307XG4gICAgdGhpcy5taWxpdGFyeSA9ICEhY29uZmlnLm1pbGl0YXJ5O1xuICAgIHRoaXMuZGF0ZUZvcm1hdCA9IGNvbmZpZy5kYXRlRm9ybWF0O1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29uZmlnLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0gY29uZmlnLm1hc2tPcHRpb25zO1xuICAgIHRoaXMuYWxsb3dJbnZhbGlkRGF0ZSA9IGNvbmZpZy5hbGxvd0ludmFsaWREYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29uZmlnLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLmVuZERhdGUgPSBjb25maWcuZW5kRGF0ZTtcbiAgICB0aGlzLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMgPSAhIWNvbmZpZy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KGNvbmZpZy53YXJuaW5nKSkge1xuICAgICAgdGhpcy53YXJuaW5nID0gY29uZmlnLndhcm5pbmc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgIH1cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhjb25maWcubWF4bGVuZ3RoKSkge1xuICAgICAgdGhpcy5tYXhsZW5ndGggPSBjb25maWcubWF4bGVuZ3RoO1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5tYXhsZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoY29uZmlnLm1pbmxlbmd0aCkpIHtcbiAgICAgIHRoaXMubWlubGVuZ3RoID0gY29uZmlnLm1pbmxlbmd0aDtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWlubGVuZ3RoKSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPblNlbGVjdCA9ICEhY29uZmlnLmNsb3NlT25TZWxlY3Q7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnMgPSBjb25maWcuaW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuZGF0YVNwZWNpYWxpemF0aW9uID0gY29uZmlnLmRhdGFTcGVjaWFsaXphdGlvbjtcbiAgICB0aGlzLmRhdGFUeXBlID0gY29uZmlnLmRhdGFUeXBlO1xuICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID0gISFjb25maWcuYXBwZW5kVG9Cb2R5O1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yID0gY29uZmlnLnBhcmVudFNjcm9sbFNlbGVjdG9yO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgaWYgKGNvbmZpZy50b29sdGlwKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBjb25maWcudG9vbHRpcDtcbiAgICAgIHRoaXMudG9vbHRpcFBvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBQb3NpdGlvbjtcbiAgICAgIHRoaXMudG9vbHRpcFNpemUgPSBjb25maWcudG9vbHRpcFNpemU7XG4gICAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29uZmlnLnRvb2x0aXBQcmVsaW5lO1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwQXJyb3cgPSBjb25maWcucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgICAgdGhpcy50b29sdGlwQXV0b1Bvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBBdXRvUG9zaXRpb247XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgdGhpcy5jdXN0b21Db250cm9sQ29uZmlnID0gY29uZmlnLmN1c3RvbUNvbnRyb2xDb25maWc7XG4gICAgdGhpcy50aXBXZWxsID0gY29uZmlnLnRpcFdlbGw7XG4gICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICB0aGlzLnN0YXJ0dXBGb2N1cyA9ICEhY29uZmlnLnN0YXJ0dXBGb2N1cztcbiAgICBpZiAoY29uZmlnLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwpIHtcbiAgICAgIHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCA9IGNvbmZpZy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eSA9IGNvbmZpZy5pc0VtcHR5O1xuICAgIH1cbiAgfVxufVxuIl19