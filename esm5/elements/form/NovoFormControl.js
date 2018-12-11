/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
     * @name hide
     * @param clearValue - flag to reset the control's value
     */
    /**
     * \@name hide
     * @param {?=} clearValue - flag to reset the control's value
     * @return {?}
     */
    NovoFormControl.prototype.hide = /**
     * \@name hide
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
     * @name show
     */
    /**
     * \@name show
     * @return {?}
     */
    NovoFormControl.prototype.show = /**
     * \@name show
     * @return {?}
     */
    function () {
        this.hidden = false;
    };
    /**
     * @name setRequired
     * @param isRequired
     */
    /**
     * \@name setRequired
     * @param {?} isRequired
     * @return {?}
     */
    NovoFormControl.prototype.setRequired = /**
     * \@name setRequired
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
            validators = validators.filter(function (val) { return val !== Validators.required; });
            // TODO: duplicated above
            this.setValidators(validators);
            this.updateValueAndValidity({ emitEvent: false });
            this.hasRequiredValidator = this.required;
        }
    };
    /**
     * @name setValue
     *
     * @param value
     * @param onlySelf
     * @param emitEvent
     * @param emitModelToViewChange
     * @param emitViewToModelChange
     *
     */
    /**
     * \@name setValue
     *
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    NovoFormControl.prototype.setValue = /**
     * \@name setValue
     *
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
        this.historyTimeout = setTimeout(function () {
            _this.valueHistory.push(value);
        }, 300);
    };
    /**
     * @name setReadOnly
     * @param isReadOnly
     */
    /**
     * \@name setReadOnly
     * @param {?} isReadOnly
     * @return {?}
     */
    NovoFormControl.prototype.setReadOnly = /**
     * \@name setReadOnly
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
     * @name markAsInvalid
     * @param message
     */
    /**
     * \@name markAsInvalid
     * @param {?} message
     * @return {?}
     */
    NovoFormControl.prototype.markAsInvalid = /**
     * \@name markAsInvalid
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
}
var NovoFormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(NovoFormGroup, _super);
    function NovoFormGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldInteractionEvents = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NovoFormGroup.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getRawValue();
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    return NovoFormGroup;
}(FormGroup));
export { NovoFormGroup };
if (false) {
    /** @type {?} */
    NovoFormGroup.prototype.fieldInteractionEvents;
    /** @type {?} */
    NovoFormGroup.prototype.layout;
    /** @type {?} */
    NovoFormGroup.prototype.edit;
    /** @type {?} */
    NovoFormGroup.prototype.currentEntity;
    /** @type {?} */
    NovoFormGroup.prototype.currentEntityId;
    /** @type {?} */
    NovoFormGroup.prototype.associations;
    /** @type {?} */
    NovoFormGroup.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVEO0lBQXFDLDJDQUFXO0lBeUQ5Qyx5QkFBWSxLQUFVLEVBQUUsT0FBMEI7UUFBbEQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLFNBZ0UxRDtRQXpIRCx5QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQWVqRSxrQkFBWSxHQUFVLEVBQUUsQ0FBQztRQTJDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdC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SUFDdkIsb0RBQW9DOztJQUNwQyxrQ0FBaUI7Ozs7O0lBQ2pCLHlDQUE0Qjs7QUErTDlCO0lBQW1DLHlDQUFTO0lBQTVDO1FBQUEscUVBZUM7UUFkUSw0QkFBc0IsR0FBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFjM0YsQ0FBQztJQVBDLHNCQUFJLGdDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7OztRQUVELFVBQVUsQ0FBTTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUpBO0lBS0gsb0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBbUMsU0FBUyxHQWUzQzs7OztJQWRDLCtDQUF5Rjs7SUFDekYsK0JBQXNCOztJQUN0Qiw2QkFBcUI7O0lBQ3JCLHNDQUE2Qjs7SUFDN0Isd0NBQStCOztJQUMvQixxQ0FBNEI7O0lBQzVCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IElGaWVsZEludGVyYWN0aW9uRXZlbnQgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgSU1hc2tPcHRpb25zIH0gZnJvbSAnLi9Db250cm9sJztcblxuZXhwb3J0IGNsYXNzIE5vdm9Gb3JtQ29udHJvbCBleHRlbmRzIEZvcm1Db250cm9sIHtcbiAgZGlzcGxheVZhbHVlQ2hhbmdlczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgaGlkZGVuOiBib29sZWFuO1xuICBlbmNyeXB0ZWQ6IGJvb2xlYW47XG4gIGtleTogc3RyaW5nO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgcmVhZE9ubHk6IGJvb2xlYW47XG4gIGhhc1JlcXVpcmVkVmFsaWRhdG9yOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xuICB0b29sdGlwOiBzdHJpbmc7XG4gIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xuICB0b29sdGlwU2l6ZT86IHN0cmluZztcbiAgdG9vbHRpcFByZWxpbmU/OiBib29sZWFuO1xuICByZW1vdmVUb29sdGlwQXJyb3c/OiBib29sZWFuO1xuICB0b29sdGlwQXV0b1Bvc2l0aW9uPzogYm9vbGVhbjtcbiAgaW5pdGlhbFZhbHVlOiBhbnk7XG4gIHZhbHVlSGlzdG9yeTogYW55W10gPSBbXTtcbiAgdmFsaWRhdG9yczogYW55O1xuICBjb25maWc6IGFueTtcbiAgc29ydE9yZGVyOiBudW1iZXI7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG11bHRpcGxlOiBib29sZWFuO1xuICBoZWFkZXJDb25maWc6IGFueTtcbiAgb3B0aW9uc1R5cGU6IHN0cmluZztcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIG1pbmxlbmd0aDogbnVtYmVyO1xuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICB0eXBlOiBzdHJpbmc7XG4gIHN1YlR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuO1xuICBpbnRlcmFjdGlvbnM6IEFycmF5PE9iamVjdD47XG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbjsgLy8gRGVwcmVjYXRlZFxuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbGF5b3V0T3B0aW9ucz86IHsgb3JkZXI/OiBzdHJpbmc7IGRvd25sb2FkPzogYm9vbGVhbjsgbGFiZWxTdHlsZT86IHN0cmluZzsgZHJhZ2dhYmxlPzogYm9vbGVhbjsgaWNvblN0eWxlPzogc3RyaW5nIH07XG4gIG1pbGl0YXJ5PzogYm9vbGVhbjtcbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgY3VycmVuY3lGb3JtYXQ/OiBzdHJpbmc7XG4gIHN0YXJ0RGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIGVuZERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICB0ZXh0TWFza0VuYWJsZWQ/OiBib29sZWFuO1xuICBtYXNrT3B0aW9uczogSU1hc2tPcHRpb25zO1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgdGlwV2VsbD86IHtcbiAgICB0aXA6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gIH07XG4gIHJhd1ZhbHVlPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBjaGVja2JveExhYmVsPzogc3RyaW5nO1xuICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zPzogYm9vbGVhbjtcbiAgd2FybmluZz86IHN0cmluZztcbiAgcHJpdmF0ZSBoaXN0b3J5VGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnksIGNvbnRyb2w6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIodmFsdWUsIGNvbnRyb2wudmFsaWRhdG9ycywgY29udHJvbC5hc3luY1ZhbGlkYXRvcnMpO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbnRyb2wudmFsaWRhdG9ycztcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVIaXN0b3J5LnB1c2godmFsdWUpO1xuICAgIHRoaXMua2V5ID0gY29udHJvbC5rZXk7XG4gICAgdGhpcy5sYWJlbCA9IGNvbnRyb2wubGFiZWw7XG4gICAgdGhpcy5yZWFkT25seSA9IGNvbnRyb2wucmVhZE9ubHk7XG4gICAgdGhpcy5oaWRkZW4gPSBjb250cm9sLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IGNvbnRyb2wuZW5jcnlwdGVkO1xuICAgIHRoaXMuY29uZmlnID0gY29udHJvbC5jb25maWc7XG4gICAgdGhpcy50eXBlID0gY29udHJvbC50eXBlO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbnRyb2wuc3ViVHlwZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gY29udHJvbC5yZXF1aXJlZDtcbiAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB0aGlzLnRvb2x0aXAgPSBjb250cm9sLnRvb2x0aXA7XG4gICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSBjb250cm9sLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRvb2x0aXBTaXplID0gY29udHJvbC50b29sdGlwU2l6ZTtcbiAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29udHJvbC50b29sdGlwUHJlbGluZTtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdyA9IGNvbnRyb2wucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudG9vbHRpcEF1dG9Qb3NpdGlvbiA9IGNvbnRyb2wudG9vbHRpcEF1dG9Qb3NpdGlvbjtcbiAgICB0aGlzLmxhYmVsID0gY29udHJvbC5sYWJlbDtcbiAgICB0aGlzLm5hbWUgPSBjb250cm9sLm5hbWU7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGNvbnRyb2wucmVxdWlyZWQ7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBjb250cm9sLnNvcnRPcmRlcjtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gY29udHJvbC5jb250cm9sVHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29udHJvbC5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm11bHRpcGxlID0gY29udHJvbC5tdWx0aXBsZTtcbiAgICB0aGlzLmhlYWRlckNvbmZpZyA9IGNvbnRyb2wuaGVhZGVyQ29uZmlnO1xuICAgIHRoaXMub3B0aW9uc1R5cGUgPSBjb250cm9sLm9wdGlvbnNUeXBlO1xuICAgIHRoaXMucmVhZE9ubHkgPSBjb250cm9sLnJlYWRPbmx5O1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IGNvbnRyb2wubGF5b3V0T3B0aW9ucztcbiAgICB0aGlzLm1pbGl0YXJ5ID0gY29udHJvbC5taWxpdGFyeTtcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb250cm9sLmRhdGVGb3JtYXQ7XG4gICAgdGhpcy5jdXJyZW5jeUZvcm1hdCA9IGNvbnRyb2wuY3VycmVuY3lGb3JtYXQ7XG4gICAgdGhpcy5zdGFydERhdGUgPSBjb250cm9sLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLmVuZERhdGUgPSBjb250cm9sLmVuZERhdGU7XG4gICAgdGhpcy50ZXh0TWFza0VuYWJsZWQgPSBjb250cm9sLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbnRyb2wudGV4dE1hc2tFbmFibGVkO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSBjb250cm9sLm1hc2tPcHRpb25zO1xuICAgIHRoaXMuYWxsb3dJbnZhbGlkRGF0ZSA9IGNvbnRyb2wuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICB0aGlzLm1heGxlbmd0aCA9IGNvbnRyb2wubWF4bGVuZ3RoO1xuICAgIHRoaXMubWlubGVuZ3RoID0gY29udHJvbC5taW5sZW5ndGg7XG4gICAgdGhpcy5jbG9zZU9uU2VsZWN0ID0gY29udHJvbC5jbG9zZU9uU2VsZWN0O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25zID0gY29udHJvbC5pbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5jaGVja2JveExhYmVsID0gY29udHJvbC5jaGVja2JveExhYmVsO1xuICAgIHRoaXMucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucyA9IGNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucztcbiAgICB0aGlzLmFwcGVuZFRvQm9keSA9IGNvbnRyb2wuYXBwZW5kVG9Cb2R5O1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yID0gY29udHJvbC5wYXJlbnRTY3JvbGxTZWxlY3RvcjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gY29udHJvbC5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb250cm9sLm9wdGlvbnM7XG4gICAgdGhpcy50aXBXZWxsID0gY29udHJvbC50aXBXZWxsO1xuICAgIHRoaXMuY3VzdG9tQ29udHJvbENvbmZpZyA9IGNvbnRyb2wuY3VzdG9tQ29udHJvbENvbmZpZztcbiAgICB0aGlzLndhcm5pbmcgPSBjb250cm9sLndhcm5pbmc7XG5cblxuICAgIC8vIFJlYWN0aXZlIEZvcm0sIG5lZWQgdG8gZW5hYmxlL2Rpc2FibGUsIGNhbid0IGJpbmQgdG8gW2Rpc2FibGVkXVxuICAgIGlmICh0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlkZVxuICAgKiBAcGFyYW0gY2xlYXJWYWx1ZSAtIGZsYWcgdG8gcmVzZXQgdGhlIGNvbnRyb2wncyB2YWx1ZVxuICAgKi9cbiAgcHVibGljIGhpZGUoY2xlYXJWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgaWYgKGNsZWFyVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dcbiAgICovXG4gIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0UmVxdWlyZWRcbiAgICogQHBhcmFtIGlzUmVxdWlyZWRcbiAgICovXG4gIHB1YmxpYyBzZXRSZXF1aXJlZChpc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGlzUmVxdWlyZWQ7XG4gICAgLy8gVXBkYXRlIHZhbGlkYXRvcnMgdG8gaGF2ZSB0aGUgcmVxdWlyZWRcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvcikge1xuICAgICAgbGV0IHZhbGlkYXRvcnM6IGFueSA9IFsuLi50aGlzLnZhbGlkYXRvcnNdO1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgLy8gVE9ETzogZHVwbGljYXRlZCBiZWxvd1xuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IgPSB0aGlzLnJlcXVpcmVkO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucmVxdWlyZWQgJiYgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvcikge1xuICAgICAgbGV0IHZhbGlkYXRvcnM6IGFueSA9IFsuLi50aGlzLnZhbGlkYXRvcnNdO1xuICAgICAgdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKCh2YWwpID0+IHZhbCAhPT0gVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAvLyBUT0RPOiBkdXBsaWNhdGVkIGFib3ZlXG4gICAgICB0aGlzLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNldFZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gb25seVNlbGZcbiAgICogQHBhcmFtIGVtaXRFdmVudFxuICAgKiBAcGFyYW0gZW1pdE1vZGVsVG9WaWV3Q2hhbmdlXG4gICAqIEBwYXJhbSBlbWl0Vmlld1RvTW9kZWxDaGFuZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZShcbiAgICB2YWx1ZTogYW55LFxuICAgIHtcbiAgICAgIG9ubHlTZWxmLFxuICAgICAgZW1pdEV2ZW50LFxuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLFxuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlLFxuICAgIH06IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMubWFya0FzRGlydHkoKTtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZUNoYW5nZXMuZW1pdCh2YWx1ZSk7XG4gICAgc3VwZXIuc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGYsIGVtaXRFdmVudCwgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UgfSk7XG5cbiAgICAvLyBIaXN0b3J5XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlzdG9yeVRpbWVvdXQpO1xuICAgIHRoaXMuaGlzdG9yeVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWVIaXN0b3J5LnB1c2godmFsdWUpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0UmVhZE9ubHlcbiAgICogQHBhcmFtIGlzUmVhZE9ubHlcbiAgICovXG4gIHB1YmxpYyBzZXRSZWFkT25seShpc1JlYWRPbmx5OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgKiBleGNsdWRlZCBmcm9tIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgYW55IHBhcmVudC4gSXRzIHN0YXR1cyBpcyBgRElTQUJMRURgLlxuICAgKlxuICAgKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGRpc2FibGVkIHRvIG1haW50YWluIHRoZSBtb2RlbC5cbiAgICovXG4gIHB1YmxpYyBkaXNhYmxlKG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuOyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7IGVtaXRFdmVudDogZmFsc2UgfSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5lbWl0RXZlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRzLmVtaXRFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdXBlci5kaXNhYmxlKG9wdHMpO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbjsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0geyBlbWl0RXZlbnQ6IGZhbHNlIH0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuZW1pdEV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0cy5lbWl0RXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VwZXIuZW5hYmxlKG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG1hcmtBc0ludmFsaWRcbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICovXG4gIG1hcmtBc0ludmFsaWQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0RXJyb3JzKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXJyb3JzLCB7IGN1c3RvbTogbWVzc2FnZSB9KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdm9Gb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBwdWJsaWMgZmllbGRJbnRlcmFjdGlvbkV2ZW50czogRXZlbnRFbWl0dGVyPElGaWVsZEludGVyYWN0aW9uRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgbGF5b3V0OiBzdHJpbmc7XG4gIHB1YmxpYyBlZGl0OiBib29sZWFuO1xuICBwdWJsaWMgY3VycmVudEVudGl0eTogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudEVudGl0eUlkOiBzdHJpbmc7XG4gIHB1YmxpYyBhc3NvY2lhdGlvbnM6IG9iamVjdDtcbiAgcHVibGljIF92YWx1ZTogYW55O1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3VmFsdWUoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cbn1cbiJdfQ==