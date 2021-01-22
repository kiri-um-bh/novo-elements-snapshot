/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/NovoFormControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { notify } from '../../utils/notifier/notifier.util';
var NovoFormControl = /** @class */ (function (_super) {
    tslib_1.__extends(NovoFormControl, _super);
    function NovoFormControl(value, control) {
        var _this = _super.call(this, value, control.validators, control.asyncValidators) || this;
        _this.displayValueChanges = new EventEmitter();
        _this.valueHistory = [];
        _this.validators = control.validators;
        _this.initialValue = value;
        _this.valueHistory.push(value);
        _this.key = control.key;
        _this.label = control.label;
        _this.readOnly = control.readOnly;
        _this.hidden = control.hidden;
        _this.encrypted = control.encrypted;
        _this.config = control.config;
        _this.type = control.type;
        _this.subType = control.subType;
        _this.required = control.required;
        _this.hasRequiredValidator = _this.required;
        _this.tooltip = control.tooltip;
        _this.tooltipPosition = control.tooltipPosition;
        _this.tooltipSize = control.tooltipSize;
        _this.tooltipPreline = control.tooltipPreline;
        _this.removeTooltipArrow = control.removeTooltipArrow;
        _this.tooltipAutoPosition = control.tooltipAutoPosition;
        _this.label = control.label;
        _this.name = control.name;
        _this.required = control.required;
        _this.sortOrder = control.sortOrder;
        _this.controlType = control.controlType;
        _this.placeholder = control.placeholder;
        _this.minimal = control.minimal;
        _this.multiple = control.multiple;
        _this.headerConfig = control.headerConfig;
        _this.optionsType = control.optionsType;
        _this.readOnly = control.readOnly;
        _this.layoutOptions = control.layoutOptions;
        _this.military = control.military;
        _this.dateFormat = control.dateFormat;
        _this.currencyFormat = control.currencyFormat;
        _this.startDate = control.startDate;
        _this.endDate = control.endDate;
        _this.weekStart = control.weekStart;
        _this.textMaskEnabled = control.textMaskEnabled;
        _this.textMaskEnabled = control.textMaskEnabled;
        _this.maskOptions = control.maskOptions;
        _this.allowInvalidDate = control.allowInvalidDate;
        _this.maxlength = control.maxlength;
        _this.minlength = control.minlength;
        _this.closeOnSelect = control.closeOnSelect;
        _this.interactions = control.interactions;
        _this.checkboxLabel = control.checkboxLabel;
        _this.restrictFieldInteractions = control.restrictFieldInteractions;
        _this.appendToBody = control.appendToBody;
        if (_this.appendToBody) {
            notify("'appendToBody' has been deprecated. Please remove this attribute.");
        }
        _this.parentScrollSelector = control.parentScrollSelector;
        _this.description = control.description;
        _this.options = control.options;
        _this.tipWell = control.tipWell;
        _this.customControlConfig = control.customControlConfig;
        _this.warning = control.warning;
        _this.associatedEntity = control.associatedEntity || null;
        // Reactive Form, need to enable/disable, can't bind to [disabled]
        if (_this.readOnly) {
            _this.disable();
        }
        else {
            _this.enable();
        }
        return _this;
    }
    /**
     * @param clearValue - flag to reset the control's value
     */
    /**
     * @param {?=} clearValue - flag to reset the control's value
     * @return {?}
     */
    NovoFormControl.prototype.hide = /**
     * @param {?=} clearValue - flag to reset the control's value
     * @return {?}
     */
    function (clearValue) {
        if (clearValue === void 0) { clearValue = true; }
        this.hidden = true;
        if (clearValue) {
            this.setValue(null);
        }
    };
    /**
     * @return {?}
     */
    NovoFormControl.prototype.show = /**
     * @return {?}
     */
    function () {
        this.hidden = false;
    };
    /**
     * @param {?} isRequired
     * @return {?}
     */
    NovoFormControl.prototype.setRequired = /**
     * @param {?} isRequired
     * @return {?}
     */
    function (isRequired) {
        this.required = isRequired;
        // Update validators to have the required
        if (this.required && !this.hasRequiredValidator) {
            /** @type {?} */
            var validators = tslib_1.__spread(this.validators);
            validators.push(Validators.required);
            // TODO: duplicated below
            this.setValidators(validators);
            this.updateValueAndValidity({ emitEvent: false });
            this.hasRequiredValidator = this.required;
        }
        else if (!this.required && this.hasRequiredValidator) {
            /** @type {?} */
            var validators = tslib_1.__spread(this.validators);
            validators = validators.filter((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return val !== Validators.required; }));
            // TODO: duplicated above
            this.setValidators(validators);
            this.updateValueAndValidity({ emitEvent: false });
            this.hasRequiredValidator = this.required;
        }
    };
    /**
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    NovoFormControl.prototype.setValue = /**
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
        this.markAsDirty();
        this.markAsTouched();
        this.displayValueChanges.emit(value);
        _super.prototype.setValue.call(this, value, { onlySelf: onlySelf, emitEvent: emitEvent, emitModelToViewChange: emitModelToViewChange, emitViewToModelChange: emitViewToModelChange });
        // History
        clearTimeout(this.historyTimeout);
        this.historyTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.valueHistory.push(value);
        }), 300);
    };
    /**
     * @param {?} isReadOnly
     * @return {?}
     */
    NovoFormControl.prototype.setReadOnly = /**
     * @param {?} isReadOnly
     * @return {?}
     */
    function (isReadOnly) {
        this.readOnly = isReadOnly;
        if (this.readOnly) {
            this.disable();
        }
        else {
            this.enable();
        }
    };
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     */
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} opts
     * @return {?}
     */
    NovoFormControl.prototype.disable = /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = { emitEvent: false }; }
        if (typeof opts.emitEvent === 'undefined') {
            opts.emitEvent = false;
        }
        _super.prototype.disable.call(this, opts);
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    NovoFormControl.prototype.enable = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = { emitEvent: false }; }
        if (typeof opts.emitEvent === 'undefined') {
            opts.emitEvent = false;
        }
        _super.prototype.enable.call(this, opts);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NovoFormControl.prototype.markAsInvalid = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.markAsDirty();
        this.markAsTouched();
        this.setErrors(Object.assign({}, this.errors, { custom: message }));
    };
    return NovoFormControl;
}(FormControl));
export { NovoFormControl };
if (false) {
    /** @type {?} */
    NovoFormControl.prototype.displayValueChanges;
    /** @type {?} */
    NovoFormControl.prototype.hidden;
    /** @type {?} */
    NovoFormControl.prototype.encrypted;
    /** @type {?} */
    NovoFormControl.prototype.key;
    /** @type {?} */
    NovoFormControl.prototype.required;
    /** @type {?} */
    NovoFormControl.prototype.readOnly;
    /** @type {?} */
    NovoFormControl.prototype.hasRequiredValidator;
    /** @type {?} */
    NovoFormControl.prototype.label;
    /** @type {?} */
    NovoFormControl.prototype.tooltip;
    /** @type {?} */
    NovoFormControl.prototype.tooltipPosition;
    /** @type {?} */
    NovoFormControl.prototype.tooltipSize;
    /** @type {?} */
    NovoFormControl.prototype.tooltipPreline;
    /** @type {?} */
    NovoFormControl.prototype.removeTooltipArrow;
    /** @type {?} */
    NovoFormControl.prototype.tooltipAutoPosition;
    /** @type {?} */
    NovoFormControl.prototype.initialValue;
    /** @type {?} */
    NovoFormControl.prototype.valueHistory;
    /** @type {?} */
    NovoFormControl.prototype.validators;
    /** @type {?} */
    NovoFormControl.prototype.config;
    /** @type {?} */
    NovoFormControl.prototype.sortOrder;
    /** @type {?} */
    NovoFormControl.prototype.controlType;
    /** @type {?} */
    NovoFormControl.prototype.placeholder;
    /** @type {?} */
    NovoFormControl.prototype.minimal;
    /** @type {?} */
    NovoFormControl.prototype.multiple;
    /** @type {?} */
    NovoFormControl.prototype.headerConfig;
    /** @type {?} */
    NovoFormControl.prototype.optionsType;
    /** @type {?} */
    NovoFormControl.prototype.maxlength;
    /** @type {?} */
    NovoFormControl.prototype.minlength;
    /** @type {?} */
    NovoFormControl.prototype.options;
    /** @type {?} */
    NovoFormControl.prototype.type;
    /** @type {?} */
    NovoFormControl.prototype.subType;
    /** @type {?} */
    NovoFormControl.prototype.name;
    /** @type {?} */
    NovoFormControl.prototype.closeOnSelect;
    /** @type {?} */
    NovoFormControl.prototype.interactions;
    /** @type {?} */
    NovoFormControl.prototype.appendToBody;
    /** @type {?} */
    NovoFormControl.prototype.parentScrollSelector;
    /** @type {?} */
    NovoFormControl.prototype.description;
    /** @type {?} */
    NovoFormControl.prototype.layoutOptions;
    /** @type {?} */
    NovoFormControl.prototype.military;
    /** @type {?} */
    NovoFormControl.prototype.dateFormat;
    /** @type {?} */
    NovoFormControl.prototype.currencyFormat;
    /** @type {?} */
    NovoFormControl.prototype.startDate;
    /** @type {?} */
    NovoFormControl.prototype.endDate;
    /** @type {?} */
    NovoFormControl.prototype.weekStart;
    /** @type {?} */
    NovoFormControl.prototype.textMaskEnabled;
    /** @type {?} */
    NovoFormControl.prototype.maskOptions;
    /** @type {?} */
    NovoFormControl.prototype.allowInvalidDate;
    /** @type {?} */
    NovoFormControl.prototype.tipWell;
    /** @type {?} */
    NovoFormControl.prototype.rawValue;
    /** @type {?} */
    NovoFormControl.prototype.customControlConfig;
    /** @type {?} */
    NovoFormControl.prototype.checkboxLabel;
    /** @type {?} */
    NovoFormControl.prototype.restrictFieldInteractions;
    /** @type {?} */
    NovoFormControl.prototype.warning;
    /**
     * @type {?}
     * @private
     */
    NovoFormControl.prototype.historyTimeout;
    /** @type {?} */
    NovoFormControl.prototype.associatedEntity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVEO0lBQXFDLDJDQUFXO0lBNkQ5Qyx5QkFBWSxLQUFVLEVBQUUsT0FBMEI7UUFBbEQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLFNBa0UxRDtRQS9IRCx5QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQWVqRSxrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQStDaEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLEtBQUksQ0FB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Q25CLDBDQUEwQjs7SUFDMUIsc0NBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLGtDQUtFOztJQUNGLG1DQUFlOztJQUNmLDhDQUEwQjs7SUFDMUIsd0NBQXVCOztJQUN2QixvREFBb0M7O0lBQ3BDLGtDQUFpQjs7Ozs7SUFDakIseUNBQTRCOztJQUM1QiwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuL0NvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBkaXNwbGF5VmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICByZWFkT25seTogYm9vbGVhbjtcbiAgaGFzUmVxdWlyZWRWYWxpZGF0b3I6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU6IGFueTtcbiAgdmFsdWVIaXN0b3J5ID0gW107XG4gIHZhbGlkYXRvcnM6IGFueTtcbiAgY29uZmlnOiBhbnk7XG4gIHNvcnRPcmRlcjogbnVtYmVyO1xuICBjb250cm9sVHlwZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBtaW5pbWFsOiBib29sZWFuO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcbiAgaGVhZGVyQ29uZmlnOiBhbnk7XG4gIG9wdGlvbnNUeXBlOiBzdHJpbmc7XG4gIG1heGxlbmd0aDogbnVtYmVyO1xuICBtaW5sZW5ndGg6IG51bWJlcjtcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcbiAgdHlwZTogc3RyaW5nO1xuICBzdWJUeXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbjtcbiAgaW50ZXJhY3Rpb25zOiBBcnJheTxPYmplY3Q+O1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47IC8vIERlcHJlY2F0ZWRcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGxheW91dE9wdGlvbnM/OiB7IG9yZGVyPzogc3RyaW5nOyBkb3dubG9hZD86IGJvb2xlYW47IGxhYmVsU3R5bGU/OiBzdHJpbmc7IGRyYWdnYWJsZT86IGJvb2xlYW47IGljb25TdHlsZT86IHN0cmluZyB9O1xuICBtaWxpdGFyeT86IGJvb2xlYW47XG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIGN1cnJlbmN5Rm9ybWF0Pzogc3RyaW5nO1xuICBzdGFydERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBlbmREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgd2Vla1N0YXJ0PzogbnVtYmVyO1xuICB0ZXh0TWFza0VuYWJsZWQ/OiBib29sZWFuO1xuICBtYXNrT3B0aW9uczogSU1hc2tPcHRpb25zO1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgdGlwV2VsbD86IHtcbiAgICB0aXA6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gICAgc2FuaXRpemU/OiBib29sZWFuO1xuICB9O1xuICByYXdWYWx1ZT86IGFueTtcbiAgY3VzdG9tQ29udHJvbENvbmZpZz86IGFueTtcbiAgY2hlY2tib3hMYWJlbD86IHN0cmluZztcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG4gIHByaXZhdGUgaGlzdG9yeVRpbWVvdXQ6IGFueTtcbiAgYXNzb2NpYXRlZEVudGl0eTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnksIGNvbnRyb2w6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIodmFsdWUsIGNvbnRyb2wudmFsaWRhdG9ycywgY29udHJvbC5hc3luY1ZhbGlkYXRvcnMpO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbnRyb2wudmFsaWRhdG9ycztcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVIaXN0b3J5LnB1c2godmFsdWUpO1xuICAgIHRoaXMua2V5ID0gY29udHJvbC5rZXk7XG4gICAgdGhpcy5sYWJlbCA9IGNvbnRyb2wubGFiZWw7XG4gICAgdGhpcy5yZWFkT25seSA9IGNvbnRyb2wucmVhZE9ubHk7XG4gICAgdGhpcy5oaWRkZW4gPSBjb250cm9sLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IGNvbnRyb2wuZW5jcnlwdGVkO1xuICAgIHRoaXMuY29uZmlnID0gY29udHJvbC5jb25maWc7XG4gICAgdGhpcy50eXBlID0gY29udHJvbC50eXBlO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbnRyb2wuc3ViVHlwZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gY29udHJvbC5yZXF1aXJlZDtcbiAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB0aGlzLnRvb2x0aXAgPSBjb250cm9sLnRvb2x0aXA7XG4gICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSBjb250cm9sLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRvb2x0aXBTaXplID0gY29udHJvbC50b29sdGlwU2l6ZTtcbiAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29udHJvbC50b29sdGlwUHJlbGluZTtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdyA9IGNvbnRyb2wucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudG9vbHRpcEF1dG9Qb3NpdGlvbiA9IGNvbnRyb2wudG9vbHRpcEF1dG9Qb3NpdGlvbjtcbiAgICB0aGlzLmxhYmVsID0gY29udHJvbC5sYWJlbDtcbiAgICB0aGlzLm5hbWUgPSBjb250cm9sLm5hbWU7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGNvbnRyb2wucmVxdWlyZWQ7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBjb250cm9sLnNvcnRPcmRlcjtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gY29udHJvbC5jb250cm9sVHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29udHJvbC5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm1pbmltYWwgPSBjb250cm9sLm1pbmltYWw7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGNvbnRyb2wubXVsdGlwbGU7XG4gICAgdGhpcy5oZWFkZXJDb25maWcgPSBjb250cm9sLmhlYWRlckNvbmZpZztcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29udHJvbC5vcHRpb25zVHlwZTtcbiAgICB0aGlzLnJlYWRPbmx5ID0gY29udHJvbC5yZWFkT25seTtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBjb250cm9sLmxheW91dE9wdGlvbnM7XG4gICAgdGhpcy5taWxpdGFyeSA9IGNvbnRyb2wubWlsaXRhcnk7XG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29udHJvbC5kYXRlRm9ybWF0O1xuICAgIHRoaXMuY3VycmVuY3lGb3JtYXQgPSBjb250cm9sLmN1cnJlbmN5Rm9ybWF0O1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29udHJvbC5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gY29udHJvbC5lbmREYXRlO1xuICAgIHRoaXMud2Vla1N0YXJ0ID0gY29udHJvbC53ZWVrU3RhcnQ7XG4gICAgdGhpcy50ZXh0TWFza0VuYWJsZWQgPSBjb250cm9sLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbnRyb2wudGV4dE1hc2tFbmFibGVkO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSBjb250cm9sLm1hc2tPcHRpb25zO1xuICAgIHRoaXMuYWxsb3dJbnZhbGlkRGF0ZSA9IGNvbnRyb2wuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICB0aGlzLm1heGxlbmd0aCA9IGNvbnRyb2wubWF4bGVuZ3RoO1xuICAgIHRoaXMubWlubGVuZ3RoID0gY29udHJvbC5taW5sZW5ndGg7XG4gICAgdGhpcy5jbG9zZU9uU2VsZWN0ID0gY29udHJvbC5jbG9zZU9uU2VsZWN0O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25zID0gY29udHJvbC5pbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5jaGVja2JveExhYmVsID0gY29udHJvbC5jaGVja2JveExhYmVsO1xuICAgIHRoaXMucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucyA9IGNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucztcbiAgICB0aGlzLmFwcGVuZFRvQm9keSA9IGNvbnRyb2wuYXBwZW5kVG9Cb2R5O1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yID0gY29udHJvbC5wYXJlbnRTY3JvbGxTZWxlY3RvcjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gY29udHJvbC5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb250cm9sLm9wdGlvbnM7XG4gICAgdGhpcy50aXBXZWxsID0gY29udHJvbC50aXBXZWxsO1xuICAgIHRoaXMuY3VzdG9tQ29udHJvbENvbmZpZyA9IGNvbnRyb2wuY3VzdG9tQ29udHJvbENvbmZpZztcbiAgICB0aGlzLndhcm5pbmcgPSBjb250cm9sLndhcm5pbmc7XG4gICAgdGhpcy5hc3NvY2lhdGVkRW50aXR5ID0gY29udHJvbC5hc3NvY2lhdGVkRW50aXR5IHx8IG51bGw7XG5cbiAgICAvLyBSZWFjdGl2ZSBGb3JtLCBuZWVkIHRvIGVuYWJsZS9kaXNhYmxlLCBjYW4ndCBiaW5kIHRvIFtkaXNhYmxlZF1cbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjbGVhclZhbHVlIC0gZmxhZyB0byByZXNldCB0aGUgY29udHJvbCdzIHZhbHVlXG4gICAqL1xuICBoaWRlKGNsZWFyVmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgIGlmIChjbGVhclZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHNldFJlcXVpcmVkKGlzUmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVkID0gaXNSZXF1aXJlZDtcbiAgICAvLyBVcGRhdGUgdmFsaWRhdG9ycyB0byBoYXZlIHRoZSByZXF1aXJlZFxuICAgIGlmICh0aGlzLnJlcXVpcmVkICYmICF0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JzOiBhbnkgPSBbLi4udGhpcy52YWxpZGF0b3JzXTtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIC8vIFRPRE86IGR1cGxpY2F0ZWQgYmVsb3dcbiAgICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnJlcXVpcmVkICYmIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IpIHtcbiAgICAgIGxldCB2YWxpZGF0b3JzOiBhbnkgPSBbLi4udGhpcy52YWxpZGF0b3JzXTtcbiAgICAgIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcigodmFsKSA9PiB2YWwgIT09IFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgLy8gVE9ETzogZHVwbGljYXRlZCBhYm92ZVxuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IgPSB0aGlzLnJlcXVpcmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKFxuICAgIHZhbHVlOiBhbnksXG4gICAge1xuICAgICAgb25seVNlbGYsXG4gICAgICBlbWl0RXZlbnQsXG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsXG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UsXG4gICAgfToge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcbiAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZSwgeyBvbmx5U2VsZiwgZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSB9KTtcblxuICAgIC8vIEhpc3RvcnlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oaXN0b3J5VGltZW91dCk7XG4gICAgdGhpcy5oaXN0b3J5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZUhpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHNldFJlYWRPbmx5KGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAqXG4gICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICAgKi9cbiAgZGlzYWJsZShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbjsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0geyBlbWl0RXZlbnQ6IGZhbHNlIH0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuZW1pdEV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0cy5lbWl0RXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VwZXIuZGlzYWJsZShvcHRzKTtcbiAgfVxuXG4gIGVuYWJsZShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbjsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0geyBlbWl0RXZlbnQ6IGZhbHNlIH0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuZW1pdEV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0cy5lbWl0RXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VwZXIuZW5hYmxlKG9wdHMpO1xuICB9XG5cbiAgbWFya0FzSW52YWxpZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5zZXRFcnJvcnMoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5lcnJvcnMsIHsgY3VzdG9tOiBtZXNzYWdlIH0pKTtcbiAgfVxufVxuIl19