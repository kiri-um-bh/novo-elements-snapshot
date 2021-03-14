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
     * @return {?}
     */
    show() {
        this.hidden = false;
    }
    /**
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
     * @param {?} message
     * @return {?}
     */
    markAsInvalid(message) {
        this.markAsDirty();
        this.markAsTouched();
        this.setErrors(Object.assign({}, this.errors, { custom: message }));
    }
    /**
     * @return {?}
     */
    markAsValid() {
        this.setErrors(null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBVzs7Ozs7SUE0RDlDLFlBQVksS0FBVSxFQUFFLE9BQTBCO1FBQ2hELEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUE1RDVELHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBZWpFLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBOENoQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7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ZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuL0NvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBkaXNwbGF5VmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICByZWFkT25seTogYm9vbGVhbjtcbiAgaGFzUmVxdWlyZWRWYWxpZGF0b3I6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU6IGFueTtcbiAgdmFsdWVIaXN0b3J5ID0gW107XG4gIHZhbGlkYXRvcnM6IGFueTtcbiAgY29uZmlnOiBhbnk7XG4gIHNvcnRPcmRlcjogbnVtYmVyO1xuICBjb250cm9sVHlwZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBtaW5pbWFsOiBib29sZWFuO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcbiAgaGVhZGVyQ29uZmlnOiBhbnk7XG4gIG9wdGlvbnNUeXBlOiBzdHJpbmc7XG4gIG1heGxlbmd0aDogbnVtYmVyO1xuICBtaW5sZW5ndGg6IG51bWJlcjtcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcbiAgdHlwZTogc3RyaW5nO1xuICBzdWJUeXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbjtcbiAgaW50ZXJhY3Rpb25zOiBBcnJheTxPYmplY3Q+O1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47IC8vIERlcHJlY2F0ZWRcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGxheW91dE9wdGlvbnM/OiB7IG9yZGVyPzogc3RyaW5nOyBkb3dubG9hZD86IGJvb2xlYW47IGxhYmVsU3R5bGU/OiBzdHJpbmc7IGRyYWdnYWJsZT86IGJvb2xlYW47IGljb25TdHlsZT86IHN0cmluZyB9O1xuICBtaWxpdGFyeT86IGJvb2xlYW47XG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIGN1cnJlbmN5Rm9ybWF0Pzogc3RyaW5nO1xuICBzdGFydERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBlbmREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgd2Vla1N0YXJ0PzogbnVtYmVyO1xuICB0ZXh0TWFza0VuYWJsZWQ/OiBib29sZWFuO1xuICBtYXNrT3B0aW9uczogSU1hc2tPcHRpb25zO1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgdGlwV2VsbD86IHtcbiAgICB0aXA6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gICAgc2FuaXRpemU/OiBib29sZWFuO1xuICB9O1xuICByYXdWYWx1ZT86IGFueTtcbiAgY3VzdG9tQ29udHJvbENvbmZpZz86IGFueTtcbiAgY2hlY2tib3hMYWJlbD86IHN0cmluZztcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG4gIHByaXZhdGUgaGlzdG9yeVRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCBjb250cm9sOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKHZhbHVlLCBjb250cm9sLnZhbGlkYXRvcnMsIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3JzKTtcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBjb250cm9sLnZhbGlkYXRvcnM7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlSGlzdG9yeS5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLmtleSA9IGNvbnRyb2wua2V5O1xuICAgIHRoaXMubGFiZWwgPSBjb250cm9sLmxhYmVsO1xuICAgIHRoaXMucmVhZE9ubHkgPSBjb250cm9sLnJlYWRPbmx5O1xuICAgIHRoaXMuaGlkZGVuID0gY29udHJvbC5oaWRkZW47XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSBjb250cm9sLmVuY3J5cHRlZDtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbnRyb2wuY29uZmlnO1xuICAgIHRoaXMudHlwZSA9IGNvbnRyb2wudHlwZTtcbiAgICB0aGlzLnN1YlR5cGUgPSBjb250cm9sLnN1YlR5cGU7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGNvbnRyb2wucmVxdWlyZWQ7XG4gICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgdGhpcy50b29sdGlwID0gY29udHJvbC50b29sdGlwO1xuICAgIHRoaXMudG9vbHRpcFBvc2l0aW9uID0gY29udHJvbC50b29sdGlwUG9zaXRpb247XG4gICAgdGhpcy50b29sdGlwU2l6ZSA9IGNvbnRyb2wudG9vbHRpcFNpemU7XG4gICAgdGhpcy50b29sdGlwUHJlbGluZSA9IGNvbnRyb2wudG9vbHRpcFByZWxpbmU7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwQXJyb3cgPSBjb250cm9sLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgICB0aGlzLnRvb2x0aXBBdXRvUG9zaXRpb24gPSBjb250cm9sLnRvb2x0aXBBdXRvUG9zaXRpb247XG4gICAgdGhpcy5sYWJlbCA9IGNvbnRyb2wubGFiZWw7XG4gICAgdGhpcy5uYW1lID0gY29udHJvbC5uYW1lO1xuICAgIHRoaXMucmVxdWlyZWQgPSBjb250cm9sLnJlcXVpcmVkO1xuICAgIHRoaXMuc29ydE9yZGVyID0gY29udHJvbC5zb3J0T3JkZXI7XG4gICAgdGhpcy5jb250cm9sVHlwZSA9IGNvbnRyb2wuY29udHJvbFR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbnRyb2wucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5taW5pbWFsID0gY29udHJvbC5taW5pbWFsO1xuICAgIHRoaXMubXVsdGlwbGUgPSBjb250cm9sLm11bHRpcGxlO1xuICAgIHRoaXMuaGVhZGVyQ29uZmlnID0gY29udHJvbC5oZWFkZXJDb25maWc7XG4gICAgdGhpcy5vcHRpb25zVHlwZSA9IGNvbnRyb2wub3B0aW9uc1R5cGU7XG4gICAgdGhpcy5yZWFkT25seSA9IGNvbnRyb2wucmVhZE9ubHk7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gY29udHJvbC5sYXlvdXRPcHRpb25zO1xuICAgIHRoaXMubWlsaXRhcnkgPSBjb250cm9sLm1pbGl0YXJ5O1xuICAgIHRoaXMuZGF0ZUZvcm1hdCA9IGNvbnRyb2wuZGF0ZUZvcm1hdDtcbiAgICB0aGlzLmN1cnJlbmN5Rm9ybWF0ID0gY29udHJvbC5jdXJyZW5jeUZvcm1hdDtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGNvbnRyb2wuc3RhcnREYXRlO1xuICAgIHRoaXMuZW5kRGF0ZSA9IGNvbnRyb2wuZW5kRGF0ZTtcbiAgICB0aGlzLndlZWtTdGFydCA9IGNvbnRyb2wud2Vla1N0YXJ0O1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29udHJvbC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy50ZXh0TWFza0VuYWJsZWQgPSBjb250cm9sLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0gY29udHJvbC5tYXNrT3B0aW9ucztcbiAgICB0aGlzLmFsbG93SW52YWxpZERhdGUgPSBjb250cm9sLmFsbG93SW52YWxpZERhdGU7XG4gICAgdGhpcy5tYXhsZW5ndGggPSBjb250cm9sLm1heGxlbmd0aDtcbiAgICB0aGlzLm1pbmxlbmd0aCA9IGNvbnRyb2wubWlubGVuZ3RoO1xuICAgIHRoaXMuY2xvc2VPblNlbGVjdCA9IGNvbnRyb2wuY2xvc2VPblNlbGVjdDtcbiAgICB0aGlzLmludGVyYWN0aW9ucyA9IGNvbnRyb2wuaW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuY2hlY2tib3hMYWJlbCA9IGNvbnRyb2wuY2hlY2tib3hMYWJlbDtcbiAgICB0aGlzLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMgPSBjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5hcHBlbmRUb0JvZHkgPSBjb250cm9sLmFwcGVuZFRvQm9keTtcbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnRTY3JvbGxTZWxlY3RvciA9IGNvbnRyb2wucGFyZW50U2Nyb2xsU2VsZWN0b3I7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNvbnRyb2wuZGVzY3JpcHRpb247XG4gICAgdGhpcy5vcHRpb25zID0gY29udHJvbC5vcHRpb25zO1xuICAgIHRoaXMudGlwV2VsbCA9IGNvbnRyb2wudGlwV2VsbDtcbiAgICB0aGlzLmN1c3RvbUNvbnRyb2xDb25maWcgPSBjb250cm9sLmN1c3RvbUNvbnRyb2xDb25maWc7XG4gICAgdGhpcy53YXJuaW5nID0gY29udHJvbC53YXJuaW5nO1xuXG4gICAgLy8gUmVhY3RpdmUgRm9ybSwgbmVlZCB0byBlbmFibGUvZGlzYWJsZSwgY2FuJ3QgYmluZCB0byBbZGlzYWJsZWRdXG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY2xlYXJWYWx1ZSAtIGZsYWcgdG8gcmVzZXQgdGhlIGNvbnRyb2wncyB2YWx1ZVxuICAgKi9cbiAgaGlkZShjbGVhclZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoY2xlYXJWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBzZXRSZXF1aXJlZChpc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGlzUmVxdWlyZWQ7XG4gICAgLy8gVXBkYXRlIHZhbGlkYXRvcnMgdG8gaGF2ZSB0aGUgcmVxdWlyZWRcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvcikge1xuICAgICAgY29uc3QgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAvLyBUT0RPOiBkdXBsaWNhdGVkIGJlbG93XG4gICAgICB0aGlzLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgfSBlbHNlIGlmICghdGhpcy5yZXF1aXJlZCAmJiB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoKHZhbCkgPT4gdmFsICE9PSBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIC8vIFRPRE86IGR1cGxpY2F0ZWQgYWJvdmVcbiAgICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZShcbiAgICB2YWx1ZTogYW55LFxuICAgIHtcbiAgICAgIG9ubHlTZWxmLFxuICAgICAgZW1pdEV2ZW50LFxuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLFxuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlLFxuICAgIH06IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMubWFya0FzRGlydHkoKTtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZUNoYW5nZXMuZW1pdCh2YWx1ZSk7XG4gICAgc3VwZXIuc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGYsIGVtaXRFdmVudCwgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UgfSk7XG5cbiAgICAvLyBIaXN0b3J5XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlzdG9yeVRpbWVvdXQpO1xuICAgIHRoaXMuaGlzdG9yeVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWVIaXN0b3J5LnB1c2godmFsdWUpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBzZXRSZWFkT25seShpc1JlYWRPbmx5OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgKiBleGNsdWRlZCBmcm9tIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgYW55IHBhcmVudC4gSXRzIHN0YXR1cyBpcyBgRElTQUJMRURgLlxuICAgKlxuICAgKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGRpc2FibGVkIHRvIG1haW50YWluIHRoZSBtb2RlbC5cbiAgICovXG4gIGRpc2FibGUob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW47IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHsgZW1pdEV2ZW50OiBmYWxzZSB9KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmVtaXRFdmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdHMuZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHN1cGVyLmRpc2FibGUob3B0cyk7XG4gIH1cblxuICBlbmFibGUob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW47IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHsgZW1pdEV2ZW50OiBmYWxzZSB9KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmVtaXRFdmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdHMuZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHN1cGVyLmVuYWJsZShvcHRzKTtcbiAgfVxuXG4gIG1hcmtBc0ludmFsaWQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0RXJyb3JzKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXJyb3JzLCB7IGN1c3RvbTogbWVzc2FnZSB9KSk7XG4gIH1cblxuICBtYXJrQXNWYWxpZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEVycm9ycyhudWxsKTtcbiAgfVxufVxuIl19