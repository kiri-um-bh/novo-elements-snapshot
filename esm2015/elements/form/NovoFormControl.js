/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/NovoFormControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { notify } from '../../utils/notifier/notifier.util';
export class NovoFormControl extends FormControl {
    /**
     * @param {?} value
     * @param {?} control
     */
    constructor(value, control) {
        super(value, control.validators, control.asyncValidators);
        this.displayValueChanges = new EventEmitter();
        this.valueHistory = [];
        this.validators = control.validators;
        this.initialValue = value;
        this.valueHistory.push(value);
        this.key = control.key;
        this.label = control.label;
        this.readOnly = control.readOnly;
        this.hidden = control.hidden;
        this.encrypted = control.encrypted;
        this.config = control.config;
        this.type = control.type;
        this.subType = control.subType;
        this.required = control.required;
        this.hasRequiredValidator = this.required;
        this.tooltip = control.tooltip;
        this.tooltipPosition = control.tooltipPosition;
        this.tooltipSize = control.tooltipSize;
        this.tooltipPreline = control.tooltipPreline;
        this.removeTooltipArrow = control.removeTooltipArrow;
        this.tooltipAutoPosition = control.tooltipAutoPosition;
        this.label = control.label;
        this.name = control.name;
        this.required = control.required;
        this.sortOrder = control.sortOrder;
        this.controlType = control.controlType;
        this.placeholder = control.placeholder;
        this.minimal = control.minimal;
        this.multiple = control.multiple;
        this.headerConfig = control.headerConfig;
        this.optionsType = control.optionsType;
        this.readOnly = control.readOnly;
        this.layoutOptions = control.layoutOptions;
        this.military = control.military;
        this.dateFormat = control.dateFormat;
        this.currencyFormat = control.currencyFormat;
        this.startDate = control.startDate;
        this.endDate = control.endDate;
        this.weekStart = control.weekStart;
        this.textMaskEnabled = control.textMaskEnabled;
        this.textMaskEnabled = control.textMaskEnabled;
        this.maskOptions = control.maskOptions;
        this.allowInvalidDate = control.allowInvalidDate;
        this.maxlength = control.maxlength;
        this.minlength = control.minlength;
        this.closeOnSelect = control.closeOnSelect;
        this.interactions = control.interactions;
        this.checkboxLabel = control.checkboxLabel;
        this.restrictFieldInteractions = control.restrictFieldInteractions;
        this.appendToBody = control.appendToBody;
        if (this.appendToBody) {
            notify(`'appendToBody' has been deprecated. Please remove this attribute.`);
        }
        this.parentScrollSelector = control.parentScrollSelector;
        this.description = control.description;
        this.options = control.options;
        this.tipWell = control.tipWell;
        this.customControlConfig = control.customControlConfig;
        this.warning = control.warning;
        // Reactive Form, need to enable/disable, can't bind to [disabled]
        if (this.readOnly) {
            this.disable();
        }
        else {
            this.enable();
        }
    }
    /**
     * \@name hide
     * @param {?=} clearValue - flag to reset the control's value
     * @return {?}
     */
    hide(clearValue = true) {
        this.hidden = true;
        if (clearValue) {
            this.setValue(null);
        }
    }
    /**
     * \@name show
     * @return {?}
     */
    show() {
        this.hidden = false;
    }
    /**
     * \@name setRequired
     * @param {?} isRequired
     * @return {?}
     */
    setRequired(isRequired) {
        this.required = isRequired;
        // Update validators to have the required
        if (this.required && !this.hasRequiredValidator) {
            /** @type {?} */
            const validators = [...this.validators];
            validators.push(Validators.required);
            // TODO: duplicated below
            this.setValidators(validators);
            this.updateValueAndValidity({ emitEvent: false });
            this.hasRequiredValidator = this.required;
        }
        else if (!this.required && this.hasRequiredValidator) {
            /** @type {?} */
            let validators = [...this.validators];
            validators = validators.filter((/**
             * @param {?} val
             * @return {?}
             */
            (val) => val !== Validators.required));
            // TODO: duplicated above
            this.setValidators(validators);
            this.updateValueAndValidity({ emitEvent: false });
            this.hasRequiredValidator = this.required;
        }
    }
    /**
     * \@name setValue
     *
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    setValue(value, { onlySelf, emitEvent, emitModelToViewChange, emitViewToModelChange, } = {}) {
        this.markAsDirty();
        this.markAsTouched();
        this.displayValueChanges.emit(value);
        super.setValue(value, { onlySelf, emitEvent, emitModelToViewChange, emitViewToModelChange });
        // History
        clearTimeout(this.historyTimeout);
        this.historyTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.valueHistory.push(value);
        }), 300);
    }
    /**
     * \@name setReadOnly
     * @param {?} isReadOnly
     * @return {?}
     */
    setReadOnly(isReadOnly) {
        this.readOnly = isReadOnly;
        if (this.readOnly) {
            this.disable();
        }
        else {
            this.enable();
        }
    }
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} opts
     * @return {?}
     */
    disable(opts = { emitEvent: false }) {
        if (typeof opts.emitEvent === 'undefined') {
            opts.emitEvent = false;
        }
        super.disable(opts);
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    enable(opts = { emitEvent: false }) {
        if (typeof opts.emitEvent === 'undefined') {
            opts.emitEvent = false;
        }
        super.enable(opts);
    }
    /**
     * \@name markAsInvalid
     * @param {?} message
     * @return {?}
     */
    markAsInvalid(message) {
        this.markAsDirty();
        this.markAsTouched();
        this.setErrors(Object.assign({}, this.errors, { custom: message }));
    }
}
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBVzs7Ozs7SUE0RDlDLFlBQVksS0FBVSxFQUFFLE9BQTBCO1FBQ2hELEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUE1RDVELHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBZWpFLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBOEN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7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LEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0Y7OztJQXZQQyw4Q0FBaUU7O0lBQ2pFLGlDQUFnQjs7SUFDaEIsb0NBQW1COztJQUNuQiw4QkFBWTs7SUFDWixtQ0FBa0I7O0lBQ2xCLG1DQUFrQjs7SUFDbEIsK0NBQThCOztJQUM5QixnQ0FBYzs7SUFDZCxrQ0FBZ0I7O0lBQ2hCLDBDQUF3Qjs7SUFDeEIsc0NBQXFCOztJQUNyQix5Q0FBeUI7O0lBQ3pCLDZDQUE2Qjs7SUFDN0IsOENBQThCOztJQUM5Qix1Q0FBa0I7O0lBQ2xCLHVDQUF5Qjs7SUFDekIscUNBQWdCOztJQUNoQixpQ0FBWTs7SUFDWixvQ0FBa0I7O0lBQ2xCLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixrQ0FBaUI7O0lBQ2pCLG1DQUFrQjs7SUFDbEIsdUNBQWtCOztJQUNsQixzQ0FBb0I7O0lBQ3BCLG9DQUFrQjs7SUFDbEIsb0NBQWtCOztJQUNsQixrQ0FBb0I7O0lBQ3BCLCtCQUFhOztJQUNiLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2Isd0NBQXVCOztJQUN2Qix1Q0FBNEI7O0lBQzVCLHVDQUFzQjs7SUFDdEIsK0NBQTZCOztJQUM3QixzQ0FBcUI7O0lBQ3JCLHdDQUFxSDs7SUFDckgsbUNBQW1COztJQUNuQixxQ0FBb0I7O0lBQ3BCLHlDQUF3Qjs7SUFDeEIsb0NBQTBCOztJQUMxQixrQ0FBd0I7O0lBQ3hCLG9DQUFtQjs7SUFDbkIsMENBQTBCOztJQUMxQixzQ0FBMEI7O0lBQzFCLDJDQUEyQjs7SUFDM0Isa0NBS0U7O0lBQ0YsbUNBQWU7O0lBQ2YsOENBQTBCOztJQUMxQix3Q0FBdUI7O0lBQ3ZCLG9EQUFvQzs7SUFDcEMsa0NBQWlCOzs7OztJQUNqQix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuL0NvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBkaXNwbGF5VmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICByZWFkT25seTogYm9vbGVhbjtcbiAgaGFzUmVxdWlyZWRWYWxpZGF0b3I6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU6IGFueTtcbiAgdmFsdWVIaXN0b3J5OiBhbnlbXSA9IFtdO1xuICB2YWxpZGF0b3JzOiBhbnk7XG4gIGNvbmZpZzogYW55O1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgY29udHJvbFR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgbWluaW1hbDogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBvcHRpb25zVHlwZTogc3RyaW5nO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW47XG4gIGludGVyYWN0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsYXlvdXRPcHRpb25zPzogeyBvcmRlcj86IHN0cmluZzsgZG93bmxvYWQ/OiBib29sZWFuOyBsYWJlbFN0eWxlPzogc3RyaW5nOyBkcmFnZ2FibGU/OiBib29sZWFuOyBpY29uU3R5bGU/OiBzdHJpbmcgfTtcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICBjdXJyZW5jeUZvcm1hdD86IHN0cmluZztcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIHdlZWtTdGFydD86IG51bWJlcjtcbiAgdGV4dE1hc2tFbmFibGVkPzogYm9vbGVhbjtcbiAgbWFza09wdGlvbnM6IElNYXNrT3B0aW9ucztcbiAgYWxsb3dJbnZhbGlkRGF0ZT86IGJvb2xlYW47XG4gIHRpcFdlbGw/OiB7XG4gICAgdGlwOiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBidXR0b24/OiBib29sZWFuO1xuICAgIHNhbml0aXplPzogYm9vbGVhbjtcbiAgfTtcbiAgcmF3VmFsdWU/OiBhbnk7XG4gIGN1c3RvbUNvbnRyb2xDb25maWc/OiBhbnk7XG4gIGNoZWNrYm94TGFiZWw/OiBzdHJpbmc7XG4gIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM/OiBib29sZWFuO1xuICB3YXJuaW5nPzogc3RyaW5nO1xuICBwcml2YXRlIGhpc3RvcnlUaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSwgY29udHJvbDogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcih2YWx1ZSwgY29udHJvbC52YWxpZGF0b3JzLCBjb250cm9sLmFzeW5jVmFsaWRhdG9ycyk7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gY29udHJvbC52YWxpZGF0b3JzO1xuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUhpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5rZXkgPSBjb250cm9sLmtleTtcbiAgICB0aGlzLmxhYmVsID0gY29udHJvbC5sYWJlbDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gY29udHJvbC5yZWFkT25seTtcbiAgICB0aGlzLmhpZGRlbiA9IGNvbnRyb2wuaGlkZGVuO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gY29udHJvbC5lbmNyeXB0ZWQ7XG4gICAgdGhpcy5jb25maWcgPSBjb250cm9sLmNvbmZpZztcbiAgICB0aGlzLnR5cGUgPSBjb250cm9sLnR5cGU7XG4gICAgdGhpcy5zdWJUeXBlID0gY29udHJvbC5zdWJUeXBlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBjb250cm9sLnJlcXVpcmVkO1xuICAgIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IgPSB0aGlzLnJlcXVpcmVkO1xuICAgIHRoaXMudG9vbHRpcCA9IGNvbnRyb2wudG9vbHRpcDtcbiAgICB0aGlzLnRvb2x0aXBQb3NpdGlvbiA9IGNvbnRyb2wudG9vbHRpcFBvc2l0aW9uO1xuICAgIHRoaXMudG9vbHRpcFNpemUgPSBjb250cm9sLnRvb2x0aXBTaXplO1xuICAgIHRoaXMudG9vbHRpcFByZWxpbmUgPSBjb250cm9sLnRvb2x0aXBQcmVsaW5lO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcEFycm93ID0gY29udHJvbC5yZW1vdmVUb29sdGlwQXJyb3c7XG4gICAgdGhpcy50b29sdGlwQXV0b1Bvc2l0aW9uID0gY29udHJvbC50b29sdGlwQXV0b1Bvc2l0aW9uO1xuICAgIHRoaXMubGFiZWwgPSBjb250cm9sLmxhYmVsO1xuICAgIHRoaXMubmFtZSA9IGNvbnRyb2wubmFtZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gY29udHJvbC5yZXF1aXJlZDtcbiAgICB0aGlzLnNvcnRPcmRlciA9IGNvbnRyb2wuc29ydE9yZGVyO1xuICAgIHRoaXMuY29udHJvbFR5cGUgPSBjb250cm9sLmNvbnRyb2xUeXBlO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjb250cm9sLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMubWluaW1hbCA9IGNvbnRyb2wubWluaW1hbDtcbiAgICB0aGlzLm11bHRpcGxlID0gY29udHJvbC5tdWx0aXBsZTtcbiAgICB0aGlzLmhlYWRlckNvbmZpZyA9IGNvbnRyb2wuaGVhZGVyQ29uZmlnO1xuICAgIHRoaXMub3B0aW9uc1R5cGUgPSBjb250cm9sLm9wdGlvbnNUeXBlO1xuICAgIHRoaXMucmVhZE9ubHkgPSBjb250cm9sLnJlYWRPbmx5O1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IGNvbnRyb2wubGF5b3V0T3B0aW9ucztcbiAgICB0aGlzLm1pbGl0YXJ5ID0gY29udHJvbC5taWxpdGFyeTtcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb250cm9sLmRhdGVGb3JtYXQ7XG4gICAgdGhpcy5jdXJyZW5jeUZvcm1hdCA9IGNvbnRyb2wuY3VycmVuY3lGb3JtYXQ7XG4gICAgdGhpcy5zdGFydERhdGUgPSBjb250cm9sLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLmVuZERhdGUgPSBjb250cm9sLmVuZERhdGU7XG4gICAgdGhpcy53ZWVrU3RhcnQgPSBjb250cm9sLndlZWtTdGFydDtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbnRyb2wudGV4dE1hc2tFbmFibGVkO1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29udHJvbC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy5tYXNrT3B0aW9ucyA9IGNvbnRyb2wubWFza09wdGlvbnM7XG4gICAgdGhpcy5hbGxvd0ludmFsaWREYXRlID0gY29udHJvbC5hbGxvd0ludmFsaWREYXRlO1xuICAgIHRoaXMubWF4bGVuZ3RoID0gY29udHJvbC5tYXhsZW5ndGg7XG4gICAgdGhpcy5taW5sZW5ndGggPSBjb250cm9sLm1pbmxlbmd0aDtcbiAgICB0aGlzLmNsb3NlT25TZWxlY3QgPSBjb250cm9sLmNsb3NlT25TZWxlY3Q7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnMgPSBjb250cm9sLmludGVyYWN0aW9ucztcbiAgICB0aGlzLmNoZWNrYm94TGFiZWwgPSBjb250cm9sLmNoZWNrYm94TGFiZWw7XG4gICAgdGhpcy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zID0gY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID0gY29udHJvbC5hcHBlbmRUb0JvZHk7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IgPSBjb250cm9sLnBhcmVudFNjcm9sbFNlbGVjdG9yO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjb250cm9sLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbnRyb2wub3B0aW9ucztcbiAgICB0aGlzLnRpcFdlbGwgPSBjb250cm9sLnRpcFdlbGw7XG4gICAgdGhpcy5jdXN0b21Db250cm9sQ29uZmlnID0gY29udHJvbC5jdXN0b21Db250cm9sQ29uZmlnO1xuICAgIHRoaXMud2FybmluZyA9IGNvbnRyb2wud2FybmluZztcblxuICAgIC8vIFJlYWN0aXZlIEZvcm0sIG5lZWQgdG8gZW5hYmxlL2Rpc2FibGUsIGNhbid0IGJpbmQgdG8gW2Rpc2FibGVkXVxuICAgIGlmICh0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlkZVxuICAgKiBAcGFyYW0gY2xlYXJWYWx1ZSAtIGZsYWcgdG8gcmVzZXQgdGhlIGNvbnRyb2wncyB2YWx1ZVxuICAgKi9cbiAgcHVibGljIGhpZGUoY2xlYXJWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgaWYgKGNsZWFyVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dcbiAgICovXG4gIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0UmVxdWlyZWRcbiAgICogQHBhcmFtIGlzUmVxdWlyZWRcbiAgICovXG4gIHB1YmxpYyBzZXRSZXF1aXJlZChpc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGlzUmVxdWlyZWQ7XG4gICAgLy8gVXBkYXRlIHZhbGlkYXRvcnMgdG8gaGF2ZSB0aGUgcmVxdWlyZWRcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvcikge1xuICAgICAgY29uc3QgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAvLyBUT0RPOiBkdXBsaWNhdGVkIGJlbG93XG4gICAgICB0aGlzLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgfSBlbHNlIGlmICghdGhpcy5yZXF1aXJlZCAmJiB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoKHZhbCkgPT4gdmFsICE9PSBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIC8vIFRPRE86IGR1cGxpY2F0ZWQgYWJvdmVcbiAgICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0VmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBvbmx5U2VsZlxuICAgKiBAcGFyYW0gZW1pdEV2ZW50XG4gICAqIEBwYXJhbSBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VcbiAgICogQHBhcmFtIGVtaXRWaWV3VG9Nb2RlbENoYW5nZVxuICAgKlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKFxuICAgIHZhbHVlOiBhbnksXG4gICAge1xuICAgICAgb25seVNlbGYsXG4gICAgICBlbWl0RXZlbnQsXG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsXG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UsXG4gICAgfToge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcbiAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZSwgeyBvbmx5U2VsZiwgZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSB9KTtcblxuICAgIC8vIEhpc3RvcnlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oaXN0b3J5VGltZW91dCk7XG4gICAgdGhpcy5oaXN0b3J5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZUhpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRSZWFkT25seVxuICAgKiBAcGFyYW0gaXNSZWFkT25seVxuICAgKi9cbiAgcHVibGljIHNldFJlYWRPbmx5KGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAqXG4gICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICAgKi9cbiAgcHVibGljIGRpc2FibGUob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW47IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHsgZW1pdEV2ZW50OiBmYWxzZSB9KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmVtaXRFdmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdHMuZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHN1cGVyLmRpc2FibGUob3B0cyk7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlKG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuOyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7IGVtaXRFdmVudDogZmFsc2UgfSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5lbWl0RXZlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRzLmVtaXRFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdXBlci5lbmFibGUob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbWFya0FzSW52YWxpZFxuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cbiAgbWFya0FzSW52YWxpZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5zZXRFcnJvcnMoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5lcnJvcnMsIHsgY3VzdG9tOiBtZXNzYWdlIH0pKTtcbiAgfVxufVxuIl19