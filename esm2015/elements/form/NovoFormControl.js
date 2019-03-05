/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
        this.textMaskEnabled = control.textMaskEnabled;
        this.userDefinedFormat = control.userDefinedFormat;
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
            let validators = [...this.validators];
            validators.push(Validators.required);
            // TODO: duplicated below
            this.setValidators(validators);
            this.updateValueAndValidity({ emitEvent: false });
            this.hasRequiredValidator = this.required;
        }
        else if (!this.required && this.hasRequiredValidator) {
            /** @type {?} */
            let validators = [...this.validators];
            validators = validators.filter((val) => val !== Validators.required);
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
        this.historyTimeout = setTimeout(() => {
            this.valueHistory.push(value);
        }, 300);
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
    NovoFormControl.prototype.userDefinedFormat;
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
    /** @type {?} */
    NovoFormControl.prototype.historyTimeout;
}
export class NovoFormGroup extends FormGroup {
    constructor() {
        super(...arguments);
        this.fieldInteractionEvents = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get value() {
        return this.getRawValue();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this._value = v;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUQsTUFBTSxzQkFBdUIsU0FBUSxXQUFXOzs7OztJQTBEOUMsWUFBWSxLQUFVLEVBQUUsT0FBMEI7UUFDaEQsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQTFENUQsd0JBQW1CLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFlakUsaUJBQVksR0FBVSxFQUFFLENBQUM7UUE0Q3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0s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Q2xCLENBQUM7Q0FDRjs7O0lBZEMsK0NBQXlGOztJQUN6RiwrQkFBc0I7O0lBQ3RCLDZCQUFxQjs7SUFDckIsc0NBQTZCOztJQUM3Qix3Q0FBK0I7O0lBQy9CLHFDQUE0Qjs7SUFDNUIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuL0NvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBkaXNwbGF5VmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICByZWFkT25seTogYm9vbGVhbjtcbiAgaGFzUmVxdWlyZWRWYWxpZGF0b3I6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU6IGFueTtcbiAgdmFsdWVIaXN0b3J5OiBhbnlbXSA9IFtdO1xuICB2YWxpZGF0b3JzOiBhbnk7XG4gIGNvbmZpZzogYW55O1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgY29udHJvbFR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBvcHRpb25zVHlwZTogc3RyaW5nO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW47XG4gIGludGVyYWN0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsYXlvdXRPcHRpb25zPzogeyBvcmRlcj86IHN0cmluZzsgZG93bmxvYWQ/OiBib29sZWFuOyBsYWJlbFN0eWxlPzogc3RyaW5nOyBkcmFnZ2FibGU/OiBib29sZWFuOyBpY29uU3R5bGU/OiBzdHJpbmcgfTtcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICBjdXJyZW5jeUZvcm1hdD86IHN0cmluZztcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIHVzZXJEZWZpbmVkRm9ybWF0PzogYm9vbGVhbjtcbiAgbWFza09wdGlvbnM6IElNYXNrT3B0aW9ucztcbiAgYWxsb3dJbnZhbGlkRGF0ZT86IGJvb2xlYW47XG4gIHRpcFdlbGw/OiB7XG4gICAgdGlwOiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBidXR0b24/OiBib29sZWFuO1xuICB9O1xuICByYXdWYWx1ZT86IGFueTtcbiAgY3VzdG9tQ29udHJvbENvbmZpZz86IGFueTtcbiAgY2hlY2tib3hMYWJlbD86IHN0cmluZztcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG4gIHByaXZhdGUgaGlzdG9yeVRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCBjb250cm9sOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKHZhbHVlLCBjb250cm9sLnZhbGlkYXRvcnMsIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3JzKTtcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBjb250cm9sLnZhbGlkYXRvcnM7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlSGlzdG9yeS5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLmtleSA9IGNvbnRyb2wua2V5O1xuICAgIHRoaXMubGFiZWwgPSBjb250cm9sLmxhYmVsO1xuICAgIHRoaXMucmVhZE9ubHkgPSBjb250cm9sLnJlYWRPbmx5O1xuICAgIHRoaXMuaGlkZGVuID0gY29udHJvbC5oaWRkZW47XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSBjb250cm9sLmVuY3J5cHRlZDtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbnRyb2wuY29uZmlnO1xuICAgIHRoaXMudHlwZSA9IGNvbnRyb2wudHlwZTtcbiAgICB0aGlzLnN1YlR5cGUgPSBjb250cm9sLnN1YlR5cGU7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGNvbnRyb2wucmVxdWlyZWQ7XG4gICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgdGhpcy50b29sdGlwID0gY29udHJvbC50b29sdGlwO1xuICAgIHRoaXMudG9vbHRpcFBvc2l0aW9uID0gY29udHJvbC50b29sdGlwUG9zaXRpb247XG4gICAgdGhpcy50b29sdGlwU2l6ZSA9IGNvbnRyb2wudG9vbHRpcFNpemU7XG4gICAgdGhpcy50b29sdGlwUHJlbGluZSA9IGNvbnRyb2wudG9vbHRpcFByZWxpbmU7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwQXJyb3cgPSBjb250cm9sLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgICB0aGlzLnRvb2x0aXBBdXRvUG9zaXRpb24gPSBjb250cm9sLnRvb2x0aXBBdXRvUG9zaXRpb247XG4gICAgdGhpcy5sYWJlbCA9IGNvbnRyb2wubGFiZWw7XG4gICAgdGhpcy5uYW1lID0gY29udHJvbC5uYW1lO1xuICAgIHRoaXMucmVxdWlyZWQgPSBjb250cm9sLnJlcXVpcmVkO1xuICAgIHRoaXMuc29ydE9yZGVyID0gY29udHJvbC5zb3J0T3JkZXI7XG4gICAgdGhpcy5jb250cm9sVHlwZSA9IGNvbnRyb2wuY29udHJvbFR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbnRyb2wucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGNvbnRyb2wubXVsdGlwbGU7XG4gICAgdGhpcy5oZWFkZXJDb25maWcgPSBjb250cm9sLmhlYWRlckNvbmZpZztcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29udHJvbC5vcHRpb25zVHlwZTtcbiAgICB0aGlzLnJlYWRPbmx5ID0gY29udHJvbC5yZWFkT25seTtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBjb250cm9sLmxheW91dE9wdGlvbnM7XG4gICAgdGhpcy5taWxpdGFyeSA9IGNvbnRyb2wubWlsaXRhcnk7XG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29udHJvbC5kYXRlRm9ybWF0O1xuICAgIHRoaXMuY3VycmVuY3lGb3JtYXQgPSBjb250cm9sLmN1cnJlbmN5Rm9ybWF0O1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29udHJvbC5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gY29udHJvbC5lbmREYXRlO1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29udHJvbC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy51c2VyRGVmaW5lZEZvcm1hdCA9IGNvbnRyb2wudXNlckRlZmluZWRGb3JtYXQ7XG4gICAgdGhpcy5tYXNrT3B0aW9ucyA9IGNvbnRyb2wubWFza09wdGlvbnM7XG4gICAgdGhpcy5hbGxvd0ludmFsaWREYXRlID0gY29udHJvbC5hbGxvd0ludmFsaWREYXRlO1xuICAgIHRoaXMubWF4bGVuZ3RoID0gY29udHJvbC5tYXhsZW5ndGg7XG4gICAgdGhpcy5taW5sZW5ndGggPSBjb250cm9sLm1pbmxlbmd0aDtcbiAgICB0aGlzLmNsb3NlT25TZWxlY3QgPSBjb250cm9sLmNsb3NlT25TZWxlY3Q7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnMgPSBjb250cm9sLmludGVyYWN0aW9ucztcbiAgICB0aGlzLmNoZWNrYm94TGFiZWwgPSBjb250cm9sLmNoZWNrYm94TGFiZWw7XG4gICAgdGhpcy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zID0gY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID0gY29udHJvbC5hcHBlbmRUb0JvZHk7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IgPSBjb250cm9sLnBhcmVudFNjcm9sbFNlbGVjdG9yO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjb250cm9sLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbnRyb2wub3B0aW9ucztcbiAgICB0aGlzLnRpcFdlbGwgPSBjb250cm9sLnRpcFdlbGw7XG4gICAgdGhpcy5jdXN0b21Db250cm9sQ29uZmlnID0gY29udHJvbC5jdXN0b21Db250cm9sQ29uZmlnO1xuICAgIHRoaXMud2FybmluZyA9IGNvbnRyb2wud2FybmluZztcblxuXG4gICAgLy8gUmVhY3RpdmUgRm9ybSwgbmVlZCB0byBlbmFibGUvZGlzYWJsZSwgY2FuJ3QgYmluZCB0byBbZGlzYWJsZWRdXG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWRlXG4gICAqIEBwYXJhbSBjbGVhclZhbHVlIC0gZmxhZyB0byByZXNldCB0aGUgY29udHJvbCdzIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgaGlkZShjbGVhclZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoY2xlYXJWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2hvd1xuICAgKi9cbiAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRSZXF1aXJlZFxuICAgKiBAcGFyYW0gaXNSZXF1aXJlZFxuICAgKi9cbiAgcHVibGljIHNldFJlcXVpcmVkKGlzUmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVkID0gaXNSZXF1aXJlZDtcbiAgICAvLyBVcGRhdGUgdmFsaWRhdG9ycyB0byBoYXZlIHRoZSByZXF1aXJlZFxuICAgIGlmICh0aGlzLnJlcXVpcmVkICYmICF0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAvLyBUT0RPOiBkdXBsaWNhdGVkIGJlbG93XG4gICAgICB0aGlzLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgfSBlbHNlIGlmICghdGhpcy5yZXF1aXJlZCAmJiB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoKHZhbCkgPT4gdmFsICE9PSBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIC8vIFRPRE86IGR1cGxpY2F0ZWQgYWJvdmVcbiAgICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0VmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBvbmx5U2VsZlxuICAgKiBAcGFyYW0gZW1pdEV2ZW50XG4gICAqIEBwYXJhbSBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VcbiAgICogQHBhcmFtIGVtaXRWaWV3VG9Nb2RlbENoYW5nZVxuICAgKlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKFxuICAgIHZhbHVlOiBhbnksXG4gICAge1xuICAgICAgb25seVNlbGYsXG4gICAgICBlbWl0RXZlbnQsXG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsXG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UsXG4gICAgfToge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcbiAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZSwgeyBvbmx5U2VsZiwgZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSB9KTtcblxuICAgIC8vIEhpc3RvcnlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oaXN0b3J5VGltZW91dCk7XG4gICAgdGhpcy5oaXN0b3J5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZUhpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRSZWFkT25seVxuICAgKiBAcGFyYW0gaXNSZWFkT25seVxuICAgKi9cbiAgcHVibGljIHNldFJlYWRPbmx5KGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAqXG4gICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICAgKi9cbiAgcHVibGljIGRpc2FibGUob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW47IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHsgZW1pdEV2ZW50OiBmYWxzZSB9KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmVtaXRFdmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdHMuZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHN1cGVyLmRpc2FibGUob3B0cyk7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlKG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuOyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7IGVtaXRFdmVudDogZmFsc2UgfSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5lbWl0RXZlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRzLmVtaXRFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdXBlci5lbmFibGUob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbWFya0FzSW52YWxpZFxuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cbiAgbWFya0FzSW52YWxpZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5zZXRFcnJvcnMoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5lcnJvcnMsIHsgY3VzdG9tOiBtZXNzYWdlIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Hcm91cCBleHRlbmRzIEZvcm1Hcm91cCB7XG4gIHB1YmxpYyBmaWVsZEludGVyYWN0aW9uRXZlbnRzOiBFdmVudEVtaXR0ZXI8SUZpZWxkSW50ZXJhY3Rpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBsYXlvdXQ6IHN0cmluZztcbiAgcHVibGljIGVkaXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjdXJyZW50RW50aXR5OiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50RW50aXR5SWQ6IHN0cmluZztcbiAgcHVibGljIGFzc29jaWF0aW9uczogb2JqZWN0O1xuICBwdWJsaWMgX3ZhbHVlOiBhbnk7XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSYXdWYWx1ZSgpO1xuICB9XG5cbiAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgfVxufVxuIl19