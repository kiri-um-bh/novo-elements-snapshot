/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/BaseControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.isEmbedded = false;
        this.isInlineEmbedded = false;
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
    ControlConfig.prototype.minimal;
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
    /** @type {?} */
    ControlConfig.prototype.isEmbedded;
    /** @type {?} */
    ControlConfig.prototype.isInlineEmbedded;
    /** @type {?} */
    ControlConfig.prototype.weekStart;
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
        _this.dirty = !!(config.value !== undefined && config.value !== null);
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
        _this.weekStart = config.weekStart || 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFHL0QsOENBT0M7OztJQU5DLHlDQUFlOztJQUNmLHdDQUFjOztJQUNkLHVDQUFnQzs7SUFDaEMsMENBQWlCOztJQUNqQix1Q0FBWTs7SUFDWixnREFBb0I7O0FBR3RCO0lBQUE7UUE2RUUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFFM0IsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQWhGRCxJQWdGQzs7O0lBL0VDLHlDQUEyQjs7SUFDM0IscUNBQXNCOztJQUN0Qix5Q0FBeUI7O0lBQ3pCLHdDQUE2Qjs7SUFDN0Isc0NBQXNCOztJQUN0QixzQ0FBdUI7O0lBQ3ZCLCtCQUFZOztJQUNaLG9DQUFvQjs7SUFDcEIsdUNBQXVCOztJQUN2QixzQ0FBb0I7O0lBQ3BCLDRDQUEwQjs7SUFDMUIsMkNBQTJCOztJQUMzQixpQ0FBaUI7O0lBQ2pCLG1DQUFvQjs7SUFDcEIsb0NBQXFCOztJQUNyQiw4QkFBZTs7SUFDZixpQ0FBa0I7O0lBQ2xCLGtDQUFtQjs7SUFDbkIsZ0NBQXdCOztJQUN4QixrREFBbUM7O0lBQ25DLG1DQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQiwrQkFBZ0I7O0lBQ2hCLHFDQUE0Qjs7SUFDNUIsZ0NBQW1COztJQUNuQiw0QkFBWTs7SUFDWiw4QkFBYzs7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QU8sQ0FBQztTQUMvQjtRQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7O0lBQ3pDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUExRkQsQ0FBaUMsYUFBYSxHQTBGN0M7Ozs7SUF6RkMsNkJBQStCOztJQUMvQiwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZyB9IGZyb20gJy4uL0NvbnRyb2xHcm91cCc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IElNYXNrT3B0aW9ucyB9IGZyb20gJy4uL0NvbnRyb2wnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Hcm91cGVkQ29udHJvbENvbmZpZyB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBhZGQ/OiBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnO1xuICByZW1vdmU/OiBib29sZWFuO1xuICBrZXk6IHN0cmluZztcbiAgaW5pdGlhbFZhbHVlPzoge31bXTtcbn1cblxuY2xhc3MgQ29udHJvbENvbmZpZyB7XG4gIGFsbG93SW52YWxpZERhdGU/OiBib29sZWFuO1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47IC8vIERlcHJlY2F0ZWQ7XG4gIGFzc29jaWF0ZWRFbnRpdHk6IHN0cmluZztcbiAgYXN5bmNWYWxpZGF0b3JzPzogQXJyYXk8YW55PjtcbiAgY2hlY2tib3hMYWJlbDogc3RyaW5nO1xuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuO1xuICBjb25maWc6IGFueTtcbiAgY29udHJvbFR5cGU6IHN0cmluZztcbiAgY3VycmVuY3lGb3JtYXQ6IHN0cmluZztcbiAgY3VzdG9tQ29udHJvbD86IGFueTtcbiAgY3VzdG9tQ29udHJvbENvbmZpZz86IGFueTtcbiAgZGF0YVNwZWNpYWxpemF0aW9uOiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBzdHJpbmc7XG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkaXJ0eTogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIGZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw/OiBzdHJpbmc7XG4gIGZvcmNlQ2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBoZWFkZXJDb25maWc6IGFueTtcbiAgaGlkZGVuOiBib29sZWFuO1xuICBpbnRlcmFjdGlvbnM6IEFycmF5PE9iamVjdD47XG4gIGlzRW1wdHk/OiBGdW5jdGlvbjtcbiAga2V5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG1hc2tPcHRpb25zPzogSU1hc2tPcHRpb25zO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWV0YVR5cGU6IHN0cmluZztcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBtaW5pbWFsPzogYm9vbGVhbjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG11bHRpcGxlOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIG9wdGlvbnNUeXBlOiBzdHJpbmc7XG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRPbmx5OiBib29sZWFuOyAvLyBcImRpc2FibGVkXCIsIHNvIGl0IGFwcGVhcnMgaW4gdGhlIG1vZGVsIHN0aWxsO1xuICByZW1vdmVUb29sdGlwQXJyb3c/OiBib29sZWFuO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG4gIHNvcnRPcmRlcjogbnVtYmVyO1xuICBzdGFydERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBzdGFydHVwRm9jdXM/OiBib29sZWFuO1xuICBzdWJUeXBlPzogc3RyaW5nO1xuICB0ZW1wbGF0ZT86IGFueTtcbiAgdGV4dE1hc2tFbmFibGVkPzogYm9vbGVhbjtcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgdG9vbHRpcEF1dG9Qb3NpdGlvbj86IGJvb2xlYW47XG4gIHRvb2x0aXBQb3NpdGlvbj86IHN0cmluZztcbiAgdG9vbHRpcFByZWxpbmU/OiBib29sZWFuO1xuICB0b29sdGlwU2l6ZT86IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB2YWxpZGF0b3JzOiBBcnJheTxhbnk+O1xuICB2YWx1ZTogYW55O1xuICB3YXJuaW5nPzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBsYXlvdXRPcHRpb25zPzoge1xuICAgIGN1c3RvbUFjdGlvbnM/OiBib29sZWFuO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGVkaXQ/OiBib29sZWFuO1xuICAgIGljb25TdHlsZT86IHN0cmluZztcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIHJlbW92YWJsZT86IGJvb2xlYW47XG4gICAgY3VzdG9tVmFsaWRhdGlvbj86IHsgYWN0aW9uOiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W107XG4gICAgcmVtb3ZhYmxlV2hlbk5ldz86IGJvb2xlYW47XG4gIH07XG4gIHRpcFdlbGw/OiB7XG4gICAgYnV0dG9uPzogYm9vbGVhbjtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHRpcDogc3RyaW5nO1xuICB9O1xuICBpc0VtYmVkZGVkID0gZmFsc2U7XG4gIGlzSW5saW5lRW1iZWRkZWQgPSBmYWxzZTtcbiAgd2Vla1N0YXJ0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBOb3ZvQ29udHJvbENvbmZpZyA9IFBhcnRpYWw8Q29udHJvbENvbmZpZz47XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb25maWcge1xuICBfX3R5cGU6IHN0cmluZyA9ICdCYXNlQ29udHJvbCc7XG4gIF9fY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcgPSAnQmFzZUNvbnRyb2wnLCBjb25maWc6IE5vdm9Db250cm9sQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX190eXBlID0gdHlwZTtcbiAgICB0aGlzLl9fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbmZpZy52YWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMuYXN5bmNWYWxpZGF0b3JzID0gY29uZmlnLmFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIHRoaXMua2V5ID0gY29uZmlnLmtleSB8fCAnJztcbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsIHx8ICcnO1xuICAgIHRoaXMuY2hlY2tib3hMYWJlbCA9IGNvbmZpZy5jaGVja2JveExhYmVsO1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8ICcnO1xuICAgIHRoaXMucmVxdWlyZWQgPSAhIWNvbmZpZy5yZXF1aXJlZDtcbiAgICB0aGlzLmhpZGRlbiA9ICEhY29uZmlnLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9ICEhY29uZmlnLmVuY3J5cHRlZDtcbiAgICB0aGlzLnNvcnRPcmRlciA9IGNvbmZpZy5zb3J0T3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiBjb25maWcuc29ydE9yZGVyO1xuICAgIHRoaXMuY29udHJvbFR5cGUgPSBjb25maWcuY29udHJvbFR5cGUgfHwgJyc7XG4gICAgdGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG4gICAgdGhpcy5zdWJUeXBlID0gY29uZmlnLnN1YlR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IGNvbmZpZy5tZXRhVHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyIHx8ICcnO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnLmNvbmZpZyB8fCBudWxsO1xuICAgIHRoaXMuZGlydHkgPSAhIShjb25maWcudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcudmFsdWUgIT09IG51bGwpO1xuICAgIHRoaXMubXVsdGlwbGUgPSAhIWNvbmZpZy5tdWx0aXBsZTtcbiAgICB0aGlzLmhlYWRlckNvbmZpZyA9IGNvbmZpZy5oZWFkZXJDb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmN1cnJlbmN5Rm9ybWF0ID0gY29uZmlnLmN1cnJlbmN5Rm9ybWF0IHx8IG51bGw7XG4gICAgdGhpcy5hc3NvY2lhdGVkRW50aXR5ID0gY29uZmlnLmFzc29jaWF0ZWRFbnRpdHkgfHwgbnVsbDtcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29uZmlnLm9wdGlvbnNUeXBlIHx8IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5mb3JjZUNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMucmVhZE9ubHkgPSAhIWNvbmZpZy5yZWFkT25seSB8fCAhIWNvbmZpZy5kaXNhYmxlZDtcbiAgICB0aGlzLmRpc2FibGVkID0gISFjb25maWcuZGlzYWJsZWQ7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gY29uZmlnLmxheW91dE9wdGlvbnMgfHwge307XG4gICAgdGhpcy5taWxpdGFyeSA9ICEhY29uZmlnLm1pbGl0YXJ5O1xuICAgIHRoaXMuZGF0ZUZvcm1hdCA9IGNvbmZpZy5kYXRlRm9ybWF0O1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29uZmlnLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0gY29uZmlnLm1hc2tPcHRpb25zO1xuICAgIHRoaXMuYWxsb3dJbnZhbGlkRGF0ZSA9IGNvbmZpZy5hbGxvd0ludmFsaWREYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29uZmlnLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLmVuZERhdGUgPSBjb25maWcuZW5kRGF0ZTtcbiAgICB0aGlzLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMgPSAhIWNvbmZpZy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KGNvbmZpZy53YXJuaW5nKSkge1xuICAgICAgdGhpcy53YXJuaW5nID0gY29uZmlnLndhcm5pbmc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgIH1cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhjb25maWcubWF4bGVuZ3RoKSkge1xuICAgICAgdGhpcy5tYXhsZW5ndGggPSBjb25maWcubWF4bGVuZ3RoO1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5tYXhsZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoY29uZmlnLm1pbmxlbmd0aCkpIHtcbiAgICAgIHRoaXMubWlubGVuZ3RoID0gY29uZmlnLm1pbmxlbmd0aDtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWlubGVuZ3RoKSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPblNlbGVjdCA9ICEhY29uZmlnLmNsb3NlT25TZWxlY3Q7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnMgPSBjb25maWcuaW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuZGF0YVNwZWNpYWxpemF0aW9uID0gY29uZmlnLmRhdGFTcGVjaWFsaXphdGlvbjtcbiAgICB0aGlzLmRhdGFUeXBlID0gY29uZmlnLmRhdGFUeXBlO1xuICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID0gISFjb25maWcuYXBwZW5kVG9Cb2R5O1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yID0gY29uZmlnLnBhcmVudFNjcm9sbFNlbGVjdG9yO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgaWYgKGNvbmZpZy50b29sdGlwKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBjb25maWcudG9vbHRpcDtcbiAgICAgIHRoaXMudG9vbHRpcFBvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBQb3NpdGlvbjtcbiAgICAgIHRoaXMudG9vbHRpcFNpemUgPSBjb25maWcudG9vbHRpcFNpemU7XG4gICAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29uZmlnLnRvb2x0aXBQcmVsaW5lO1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwQXJyb3cgPSBjb25maWcucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgICAgdGhpcy50b29sdGlwQXV0b1Bvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBBdXRvUG9zaXRpb247XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgdGhpcy5jdXN0b21Db250cm9sQ29uZmlnID0gY29uZmlnLmN1c3RvbUNvbnRyb2xDb25maWc7XG4gICAgdGhpcy50aXBXZWxsID0gY29uZmlnLnRpcFdlbGw7XG4gICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICB0aGlzLnN0YXJ0dXBGb2N1cyA9ICEhY29uZmlnLnN0YXJ0dXBGb2N1cztcbiAgICBpZiAoY29uZmlnLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwpIHtcbiAgICAgIHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCA9IGNvbmZpZy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eSA9IGNvbmZpZy5pc0VtcHR5O1xuICAgIH1cbiAgICB0aGlzLndlZWtTdGFydCA9IGNvbmZpZy53ZWVrU3RhcnQgfHwgMDtcbiAgfVxufVxuIl19