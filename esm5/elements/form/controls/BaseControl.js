/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ControlConfig = /** @class */ (function () {
    function ControlConfig() {
    }
    return ControlConfig;
}());
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
var BaseControl = /** @class */ (function (_super) {
    tslib_1.__extends(BaseControl, _super);
    function BaseControl(type, config) {
        if (type === void 0) { type = 'BaseControl'; }
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.__type = 'BaseControl';
        _this.__type = type;
        _this.__config = config;
        _this.validators = config.validators || [];
        _this.asyncValidators = config.asyncValidators || [];
        _this.value = config.value;
        _this.key = config.key || '';
        _this.label = config.label || '';
        _this.checkboxLabel = config.checkboxLabel;
        _this.name = config.name || '';
        _this.required = !!config.required;
        _this.hidden = !!config.hidden;
        _this.encrypted = !!config.encrypted;
        _this.sortOrder = config.sortOrder === undefined ? 1 : config.sortOrder;
        _this.controlType = config.controlType || '';
        _this.type = config.type;
        _this.subType = config.subType;
        _this.metaType = config.metaType;
        _this.placeholder = config.placeholder || '';
        _this.config = config.config || null;
        _this.dirty = !!config.value;
        _this.multiple = !!config.multiple;
        _this.headerConfig = config.headerConfig || null;
        _this.currencyFormat = config.currencyFormat || null;
        _this.associatedEntity = config.associatedEntity || null;
        _this.optionsType = config.optionsType || null;
        _this.options = config.options || [];
        _this.forceClear = new EventEmitter();
        _this.readOnly = !!config.readOnly || !!config.disabled;
        _this.disabled = !!config.disabled;
        _this.layoutOptions = config.layoutOptions || {};
        _this.military = !!config.military;
        _this.dateFormat = config.dateFormat;
        _this.textMaskEnabled = config.textMaskEnabled;
        _this.maskOptions = config.maskOptions;
        _this.allowInvalidDate = config.allowInvalidDate;
        _this.startDate = config.startDate;
        _this.endDate = config.endDate;
        _this.restrictFieldInteractions = !!config.restrictFieldInteractions;
        if (!Helpers.isEmpty(config.warning)) {
            _this.warning = config.warning;
        }
        if (_this.required) {
            _this.validators.push(Validators.required);
        }
        if (!Helpers.isBlank(config.maxlength)) {
            _this.maxlength = config.maxlength;
            _this.validators.push(Validators.maxLength(_this.maxlength));
        }
        if (!Helpers.isBlank(config.minlength)) {
            _this.minlength = config.minlength;
            _this.validators.push(Validators.minLength(_this.minlength));
        }
        _this.closeOnSelect = !!config.closeOnSelect;
        _this.interactions = config.interactions;
        _this.dataSpecialization = config.dataSpecialization;
        _this.dataType = config.dataType;
        _this.appendToBody = !!config.appendToBody;
        if (_this.appendToBody) {
            notify("'appendToBody' has been deprecated. Please remove this attribute.");
        }
        _this.parentScrollSelector = config.parentScrollSelector;
        _this.description = config.description;
        if (config.tooltip) {
            _this.tooltip = config.tooltip;
            _this.tooltipPosition = config.tooltipPosition;
            _this.tooltipSize = config.tooltipSize;
            _this.tooltipPreline = config.tooltipPreline;
            _this.removeTooltipArrow = config.removeTooltipArrow;
            _this.tooltipAutoPosition = config.tooltipAutoPosition;
        }
        _this.template = config.template;
        _this.customControlConfig = config.customControlConfig;
        _this.tipWell = config.tipWell;
        _this.width = config.width;
        _this.startupFocus = !!config.startupFocus;
        if (config.fileBrowserImageUploadUrl) {
            _this.fileBrowserImageUploadUrl = config.fileBrowserImageUploadUrl;
        }
        if (config.isEmpty) {
            _this.isEmpty = config.isEmpty;
        }
        return _this;
    }
    return BaseControl;
}(ControlConfig));
export { BaseControl };
if (false) {
    /** @type {?} */
    BaseControl.prototype.__type;
    /** @type {?} */
    BaseControl.prototype.__config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWpELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQUcvRCw4Q0FPQzs7O0lBTkMseUNBQWU7O0lBQ2Ysd0NBQWM7O0lBQ2QsdUNBQWdDOztJQUNoQywwQ0FBaUI7O0lBQ2pCLHVDQUFZOztJQUNaLGdEQUFvQjs7QUFHdEI7SUFBQTtJQTBFQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDOzs7SUF6RUMseUNBQTJCOztJQUMzQixxQ0FBc0I7O0lBQ3RCLHlDQUF5Qjs7SUFDekIsd0NBQTZCOztJQUM3QixzQ0FBc0I7O0lBQ3RCLHNDQUF1Qjs7SUFDdkIsK0JBQVk7O0lBQ1osb0NBQW9COztJQUNwQix1Q0FBdUI7O0lBQ3ZCLHNDQUFvQjs7SUFDcEIsNENBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLGlDQUFpQjs7SUFDakIsbUNBQW9COztJQUNwQixvQ0FBcUI7O0lBQ3JCLDhCQUFlOztJQUNmLGlDQUFrQjs7SUFDbEIsa0NBQW1COztJQUNuQixnQ0FBd0I7O0lBQ3hCLGtEQUFtQzs7SUFDbkMsbUNBQThCOztJQUM5QixxQ0FBa0I7O0lBQ2xCLCtCQUFnQjs7SUFDaEIscUNBQTRCOztJQUM1QixnQ0FBbUI7O0lBQ25CLDRCQUFZOztJQUNaLDhCQUFjOztJQUNkLG9DQUEyQjs7SUFDM0Isa0NBQWtCOztJQUNsQixpQ0FBaUI7O0lBQ2pCLGlDQUFtQjs7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bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIH0gZnJvbSAnLi4vQ29udHJvbEdyb3VwJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgSU1hc2tPcHRpb25zIH0gZnJvbSAnLi4vQ29udHJvbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0dyb3VwZWRDb250cm9sQ29uZmlnIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGFkZD86IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWc7XG4gIHJlbW92ZT86IGJvb2xlYW47XG4gIGtleTogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU/OiB7fVtdO1xufVxuXG5jbGFzcyBDb250cm9sQ29uZmlnIHtcbiAgYWxsb3dJbnZhbGlkRGF0ZT86IGJvb2xlYW47XG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbjsgLy8gRGVwcmVjYXRlZDtcbiAgYXNzb2NpYXRlZEVudGl0eTogc3RyaW5nO1xuICBhc3luY1ZhbGlkYXRvcnM/OiBBcnJheTxhbnk+O1xuICBjaGVja2JveExhYmVsOiBzdHJpbmc7XG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW47XG4gIGNvbmZpZzogYW55O1xuICBjb250cm9sVHlwZTogc3RyaW5nO1xuICBjdXJyZW5jeUZvcm1hdDogc3RyaW5nO1xuICBjdXN0b21Db250cm9sPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBkYXRhU3BlY2lhbGl6YXRpb246IHN0cmluZztcbiAgZGF0YVR5cGU6IHN0cmluZztcbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRpcnR5OiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgZW5jcnlwdGVkOiBib29sZWFuO1xuICBlbmREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybD86IHN0cmluZztcbiAgZm9yY2VDbGVhcjogRXZlbnRFbWl0dGVyPGFueT47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGludGVyYWN0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgaXNFbXB0eT86IEZ1bmN0aW9uO1xuICBrZXk6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgbWFza09wdGlvbnM/OiBJTWFza09wdGlvbnM7XG4gIG1heGxlbmd0aDogbnVtYmVyO1xuICBtZXRhVHlwZTogc3RyaW5nO1xuICBtaWxpdGFyeT86IGJvb2xlYW47XG4gIG1pbmxlbmd0aDogbnVtYmVyO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICBvcHRpb25zVHlwZTogc3RyaW5nO1xuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkT25seTogYm9vbGVhbjsgLy8gXCJkaXNhYmxlZFwiLCBzbyBpdCBhcHBlYXJzIGluIHRoZSBtb2RlbCBzdGlsbDtcbiAgcmVtb3ZlVG9vbHRpcEFycm93PzogYm9vbGVhbjtcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM/OiBib29sZWFuO1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgc3RhcnR1cEZvY3VzPzogYm9vbGVhbjtcbiAgc3ViVHlwZT86IHN0cmluZztcbiAgdGVtcGxhdGU/OiBhbnk7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICB0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG4gIHRvb2x0aXBQcmVsaW5lPzogYm9vbGVhbjtcbiAgdG9vbHRpcFNpemU/OiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsaWRhdG9yczogQXJyYXk8YW55PjtcbiAgdmFsdWU6IGFueTtcbiAgd2FybmluZz86IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgbGF5b3V0T3B0aW9ucz86IHtcbiAgICBjdXN0b21BY3Rpb25zPzogYm9vbGVhbjtcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBpY29uU3R5bGU/OiBzdHJpbmc7XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICB9O1xuICB0aXBXZWxsPzoge1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICB0aXA6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgTm92b0NvbnRyb2xDb25maWcgPSBQYXJ0aWFsPENvbnRyb2xDb25maWc+O1xuXG5leHBvcnQgY2xhc3MgQmFzZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29uZmlnIHtcbiAgX190eXBlOiBzdHJpbmcgPSAnQmFzZUNvbnRyb2wnO1xuICBfX2NvbmZpZzogTm92b0NvbnRyb2xDb25maWc7XG5cbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nID0gJ0Jhc2VDb250cm9sJywgY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBjb25maWcudmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLmFzeW5jVmFsaWRhdG9ycyA9IGNvbmZpZy5hc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcbiAgICB0aGlzLmtleSA9IGNvbmZpZy5rZXkgfHwgJyc7XG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbCB8fCAnJztcbiAgICB0aGlzLmNoZWNrYm94TGFiZWwgPSBjb25maWcuY2hlY2tib3hMYWJlbDtcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZSB8fCAnJztcbiAgICB0aGlzLnJlcXVpcmVkID0gISFjb25maWcucmVxdWlyZWQ7XG4gICAgdGhpcy5oaWRkZW4gPSAhIWNvbmZpZy5oaWRkZW47XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSAhIWNvbmZpZy5lbmNyeXB0ZWQ7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBjb25maWcuc29ydE9yZGVyID09PSB1bmRlZmluZWQgPyAxIDogY29uZmlnLnNvcnRPcmRlcjtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gY29uZmlnLmNvbnRyb2xUeXBlIHx8ICcnO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbmZpZy5zdWJUeXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBjb25maWcubWV0YVR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmRpcnR5ID0gISFjb25maWcudmFsdWU7XG4gICAgdGhpcy5tdWx0aXBsZSA9ICEhY29uZmlnLm11bHRpcGxlO1xuICAgIHRoaXMuaGVhZGVyQ29uZmlnID0gY29uZmlnLmhlYWRlckNvbmZpZyB8fCBudWxsO1xuICAgIHRoaXMuY3VycmVuY3lGb3JtYXQgPSBjb25maWcuY3VycmVuY3lGb3JtYXQgfHwgbnVsbDtcbiAgICB0aGlzLmFzc29jaWF0ZWRFbnRpdHkgPSBjb25maWcuYXNzb2NpYXRlZEVudGl0eSB8fCBudWxsO1xuICAgIHRoaXMub3B0aW9uc1R5cGUgPSBjb25maWcub3B0aW9uc1R5cGUgfHwgbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb25maWcub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLmZvcmNlQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5yZWFkT25seSA9ICEhY29uZmlnLnJlYWRPbmx5IHx8ICEhY29uZmlnLmRpc2FibGVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhIWNvbmZpZy5kaXNhYmxlZDtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBjb25maWcubGF5b3V0T3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLm1pbGl0YXJ5ID0gISFjb25maWcubWlsaXRhcnk7XG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29uZmlnLmRhdGVGb3JtYXQ7XG4gICAgdGhpcy50ZXh0TWFza0VuYWJsZWQgPSBjb25maWcudGV4dE1hc2tFbmFibGVkO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSBjb25maWcubWFza09wdGlvbnM7XG4gICAgdGhpcy5hbGxvd0ludmFsaWREYXRlID0gY29uZmlnLmFsbG93SW52YWxpZERhdGU7XG4gICAgdGhpcy5zdGFydERhdGUgPSBjb25maWcuc3RhcnREYXRlO1xuICAgIHRoaXMuZW5kRGF0ZSA9IGNvbmZpZy5lbmREYXRlO1xuICAgIHRoaXMucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucyA9ICEhY29uZmlnLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoY29uZmlnLndhcm5pbmcpKSB7XG4gICAgICB0aGlzLndhcm5pbmcgPSBjb25maWcud2FybmluZztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgfVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKGNvbmZpZy5tYXhsZW5ndGgpKSB7XG4gICAgICB0aGlzLm1heGxlbmd0aCA9IGNvbmZpZy5tYXhsZW5ndGg7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLm1heGxlbmd0aCkpO1xuICAgIH1cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhjb25maWcubWlubGVuZ3RoKSkge1xuICAgICAgdGhpcy5taW5sZW5ndGggPSBjb25maWcubWlubGVuZ3RoO1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5taW5sZW5ndGgpKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZU9uU2VsZWN0ID0gISFjb25maWcuY2xvc2VPblNlbGVjdDtcbiAgICB0aGlzLmludGVyYWN0aW9ucyA9IGNvbmZpZy5pbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5kYXRhU3BlY2lhbGl6YXRpb24gPSBjb25maWcuZGF0YVNwZWNpYWxpemF0aW9uO1xuICAgIHRoaXMuZGF0YVR5cGUgPSBjb25maWcuZGF0YVR5cGU7XG4gICAgdGhpcy5hcHBlbmRUb0JvZHkgPSAhIWNvbmZpZy5hcHBlbmRUb0JvZHk7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IgPSBjb25maWcucGFyZW50U2Nyb2xsU2VsZWN0b3I7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICBpZiAoY29uZmlnLnRvb2x0aXApIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGNvbmZpZy50b29sdGlwO1xuICAgICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSBjb25maWcudG9vbHRpcFBvc2l0aW9uO1xuICAgICAgdGhpcy50b29sdGlwU2l6ZSA9IGNvbmZpZy50b29sdGlwU2l6ZTtcbiAgICAgIHRoaXMudG9vbHRpcFByZWxpbmUgPSBjb25maWcudG9vbHRpcFByZWxpbmU7XG4gICAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdyA9IGNvbmZpZy5yZW1vdmVUb29sdGlwQXJyb3c7XG4gICAgICB0aGlzLnRvb2x0aXBBdXRvUG9zaXRpb24gPSBjb25maWcudG9vbHRpcEF1dG9Qb3NpdGlvbjtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB0aGlzLmN1c3RvbUNvbnRyb2xDb25maWcgPSBjb25maWcuY3VzdG9tQ29udHJvbENvbmZpZztcbiAgICB0aGlzLnRpcFdlbGwgPSBjb25maWcudGlwV2VsbDtcbiAgICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIHRoaXMuc3RhcnR1cEZvY3VzID0gISFjb25maWcuc3RhcnR1cEZvY3VzO1xuICAgIGlmIChjb25maWcuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCkge1xuICAgICAgdGhpcy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gY29uZmlnLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgfVxuICAgIGlmIChjb25maWcuaXNFbXB0eSkge1xuICAgICAgdGhpcy5pc0VtcHR5ID0gY29uZmlnLmlzRW1wdHk7XG4gICAgfVxuICB9XG59XG4iXX0=