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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBVzs7Ozs7SUEyRDlDLFlBQVksS0FBVSxFQUFFLE9BQTBCO1FBQ2hELEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUEzRDVELHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBZWpFLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBNkN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7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LENBQUM7Q0FDRjs7O0lBclBDLDhDQUFpRTs7SUFDakUsaUNBQWdCOztJQUNoQixvQ0FBbUI7O0lBQ25CLDhCQUFZOztJQUNaLG1DQUFrQjs7SUFDbEIsbUNBQWtCOztJQUNsQiwrQ0FBOEI7O0lBQzlCLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsMENBQXdCOztJQUN4QixzQ0FBcUI7O0lBQ3JCLHlDQUF5Qjs7SUFDekIsNkNBQTZCOztJQUM3Qiw4Q0FBOEI7O0lBQzlCLHVDQUFrQjs7SUFDbEIsdUNBQXlCOztJQUN6QixxQ0FBZ0I7O0lBQ2hCLGlDQUFZOztJQUNaLG9DQUFrQjs7SUFDbEIsc0NBQW9COztJQUNwQixzQ0FBb0I7O0lBQ3BCLGtDQUFpQjs7SUFDakIsbUNBQWtCOztJQUNsQix1Q0FBa0I7O0lBQ2xCLHNDQUFvQjs7SUFDcEIsb0NBQWtCOztJQUNsQixvQ0FBa0I7O0lBQ2xCLGtDQUFvQjs7SUFDcEIsK0JBQWE7O0lBQ2Isa0NBQWdCOztJQUNoQiwrQkFBYTs7SUFDYix3Q0FBdUI7O0lBQ3ZCLHVDQUE0Qjs7SUFDNUIsdUNBQXNCOztJQUN0QiwrQ0FBNkI7O0lBQzdCLHNDQUFxQjs7SUFDckIsd0NBQXFIOztJQUNySCxtQ0FBbUI7O0lBQ25CLHFDQUFvQjs7SUFDcEIseUNBQXdCOztJQUN4QixvQ0FBMEI7O0lBQzFCLGtDQUF3Qjs7SUFDeEIsMENBQTBCOztJQUMxQixzQ0FBMEI7O0lBQzFCLDJDQUEyQjs7SUFDM0Isa0NBS0U7O0lBQ0YsbUNBQWU7O0lBQ2YsOENBQTBCOztJQUMxQix3Q0FBdUI7O0lBQ3ZCLG9EQUFvQzs7SUFDcEMsa0NBQWlCOzs7OztJQUNqQix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuL0NvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBkaXNwbGF5VmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICByZWFkT25seTogYm9vbGVhbjtcbiAgaGFzUmVxdWlyZWRWYWxpZGF0b3I6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU6IGFueTtcbiAgdmFsdWVIaXN0b3J5OiBhbnlbXSA9IFtdO1xuICB2YWxpZGF0b3JzOiBhbnk7XG4gIGNvbmZpZzogYW55O1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgY29udHJvbFR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgbWluaW1hbDogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBvcHRpb25zVHlwZTogc3RyaW5nO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW47XG4gIGludGVyYWN0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsYXlvdXRPcHRpb25zPzogeyBvcmRlcj86IHN0cmluZzsgZG93bmxvYWQ/OiBib29sZWFuOyBsYWJlbFN0eWxlPzogc3RyaW5nOyBkcmFnZ2FibGU/OiBib29sZWFuOyBpY29uU3R5bGU/OiBzdHJpbmcgfTtcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICBjdXJyZW5jeUZvcm1hdD86IHN0cmluZztcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIG1hc2tPcHRpb25zOiBJTWFza09wdGlvbnM7XG4gIGFsbG93SW52YWxpZERhdGU/OiBib29sZWFuO1xuICB0aXBXZWxsPzoge1xuICAgIHRpcDogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgYnV0dG9uPzogYm9vbGVhbjtcbiAgICBzYW5pdGl6ZT86IGJvb2xlYW47XG4gIH07XG4gIHJhd1ZhbHVlPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBjaGVja2JveExhYmVsPzogc3RyaW5nO1xuICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zPzogYm9vbGVhbjtcbiAgd2FybmluZz86IHN0cmluZztcbiAgcHJpdmF0ZSBoaXN0b3J5VGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnksIGNvbnRyb2w6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIodmFsdWUsIGNvbnRyb2wudmFsaWRhdG9ycywgY29udHJvbC5hc3luY1ZhbGlkYXRvcnMpO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbnRyb2wudmFsaWRhdG9ycztcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVIaXN0b3J5LnB1c2godmFsdWUpO1xuICAgIHRoaXMua2V5ID0gY29udHJvbC5rZXk7XG4gICAgdGhpcy5sYWJlbCA9IGNvbnRyb2wubGFiZWw7XG4gICAgdGhpcy5yZWFkT25seSA9IGNvbnRyb2wucmVhZE9ubHk7XG4gICAgdGhpcy5oaWRkZW4gPSBjb250cm9sLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IGNvbnRyb2wuZW5jcnlwdGVkO1xuICAgIHRoaXMuY29uZmlnID0gY29udHJvbC5jb25maWc7XG4gICAgdGhpcy50eXBlID0gY29udHJvbC50eXBlO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbnRyb2wuc3ViVHlwZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gY29udHJvbC5yZXF1aXJlZDtcbiAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB0aGlzLnRvb2x0aXAgPSBjb250cm9sLnRvb2x0aXA7XG4gICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSBjb250cm9sLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRvb2x0aXBTaXplID0gY29udHJvbC50b29sdGlwU2l6ZTtcbiAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29udHJvbC50b29sdGlwUHJlbGluZTtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdyA9IGNvbnRyb2wucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudG9vbHRpcEF1dG9Qb3NpdGlvbiA9IGNvbnRyb2wudG9vbHRpcEF1dG9Qb3NpdGlvbjtcbiAgICB0aGlzLmxhYmVsID0gY29udHJvbC5sYWJlbDtcbiAgICB0aGlzLm5hbWUgPSBjb250cm9sLm5hbWU7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGNvbnRyb2wucmVxdWlyZWQ7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBjb250cm9sLnNvcnRPcmRlcjtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gY29udHJvbC5jb250cm9sVHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29udHJvbC5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm1pbmltYWwgPSBjb250cm9sLm1pbmltYWw7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGNvbnRyb2wubXVsdGlwbGU7XG4gICAgdGhpcy5oZWFkZXJDb25maWcgPSBjb250cm9sLmhlYWRlckNvbmZpZztcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29udHJvbC5vcHRpb25zVHlwZTtcbiAgICB0aGlzLnJlYWRPbmx5ID0gY29udHJvbC5yZWFkT25seTtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBjb250cm9sLmxheW91dE9wdGlvbnM7XG4gICAgdGhpcy5taWxpdGFyeSA9IGNvbnRyb2wubWlsaXRhcnk7XG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29udHJvbC5kYXRlRm9ybWF0O1xuICAgIHRoaXMuY3VycmVuY3lGb3JtYXQgPSBjb250cm9sLmN1cnJlbmN5Rm9ybWF0O1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29udHJvbC5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gY29udHJvbC5lbmREYXRlO1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29udHJvbC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy50ZXh0TWFza0VuYWJsZWQgPSBjb250cm9sLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0gY29udHJvbC5tYXNrT3B0aW9ucztcbiAgICB0aGlzLmFsbG93SW52YWxpZERhdGUgPSBjb250cm9sLmFsbG93SW52YWxpZERhdGU7XG4gICAgdGhpcy5tYXhsZW5ndGggPSBjb250cm9sLm1heGxlbmd0aDtcbiAgICB0aGlzLm1pbmxlbmd0aCA9IGNvbnRyb2wubWlubGVuZ3RoO1xuICAgIHRoaXMuY2xvc2VPblNlbGVjdCA9IGNvbnRyb2wuY2xvc2VPblNlbGVjdDtcbiAgICB0aGlzLmludGVyYWN0aW9ucyA9IGNvbnRyb2wuaW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuY2hlY2tib3hMYWJlbCA9IGNvbnRyb2wuY2hlY2tib3hMYWJlbDtcbiAgICB0aGlzLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMgPSBjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5hcHBlbmRUb0JvZHkgPSBjb250cm9sLmFwcGVuZFRvQm9keTtcbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnRTY3JvbGxTZWxlY3RvciA9IGNvbnRyb2wucGFyZW50U2Nyb2xsU2VsZWN0b3I7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNvbnRyb2wuZGVzY3JpcHRpb247XG4gICAgdGhpcy5vcHRpb25zID0gY29udHJvbC5vcHRpb25zO1xuICAgIHRoaXMudGlwV2VsbCA9IGNvbnRyb2wudGlwV2VsbDtcbiAgICB0aGlzLmN1c3RvbUNvbnRyb2xDb25maWcgPSBjb250cm9sLmN1c3RvbUNvbnRyb2xDb25maWc7XG4gICAgdGhpcy53YXJuaW5nID0gY29udHJvbC53YXJuaW5nO1xuXG4gICAgLy8gUmVhY3RpdmUgRm9ybSwgbmVlZCB0byBlbmFibGUvZGlzYWJsZSwgY2FuJ3QgYmluZCB0byBbZGlzYWJsZWRdXG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWRlXG4gICAqIEBwYXJhbSBjbGVhclZhbHVlIC0gZmxhZyB0byByZXNldCB0aGUgY29udHJvbCdzIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgaGlkZShjbGVhclZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoY2xlYXJWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2hvd1xuICAgKi9cbiAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRSZXF1aXJlZFxuICAgKiBAcGFyYW0gaXNSZXF1aXJlZFxuICAgKi9cbiAgcHVibGljIHNldFJlcXVpcmVkKGlzUmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVkID0gaXNSZXF1aXJlZDtcbiAgICAvLyBVcGRhdGUgdmFsaWRhdG9ycyB0byBoYXZlIHRoZSByZXF1aXJlZFxuICAgIGlmICh0aGlzLnJlcXVpcmVkICYmICF0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAvLyBUT0RPOiBkdXBsaWNhdGVkIGJlbG93XG4gICAgICB0aGlzLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgfSBlbHNlIGlmICghdGhpcy5yZXF1aXJlZCAmJiB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdG9yczogYW55ID0gWy4uLnRoaXMudmFsaWRhdG9yc107XG4gICAgICB2YWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoKHZhbCkgPT4gdmFsICE9PSBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIC8vIFRPRE86IGR1cGxpY2F0ZWQgYWJvdmVcbiAgICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0VmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBvbmx5U2VsZlxuICAgKiBAcGFyYW0gZW1pdEV2ZW50XG4gICAqIEBwYXJhbSBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VcbiAgICogQHBhcmFtIGVtaXRWaWV3VG9Nb2RlbENoYW5nZVxuICAgKlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKFxuICAgIHZhbHVlOiBhbnksXG4gICAge1xuICAgICAgb25seVNlbGYsXG4gICAgICBlbWl0RXZlbnQsXG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsXG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UsXG4gICAgfToge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcbiAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZSwgeyBvbmx5U2VsZiwgZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSB9KTtcblxuICAgIC8vIEhpc3RvcnlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oaXN0b3J5VGltZW91dCk7XG4gICAgdGhpcy5oaXN0b3J5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZUhpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRSZWFkT25seVxuICAgKiBAcGFyYW0gaXNSZWFkT25seVxuICAgKi9cbiAgcHVibGljIHNldFJlYWRPbmx5KGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAqXG4gICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICAgKi9cbiAgcHVibGljIGRpc2FibGUob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW47IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHsgZW1pdEV2ZW50OiBmYWxzZSB9KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmVtaXRFdmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdHMuZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHN1cGVyLmRpc2FibGUob3B0cyk7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlKG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuOyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7IGVtaXRFdmVudDogZmFsc2UgfSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5lbWl0RXZlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRzLmVtaXRFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdXBlci5lbmFibGUob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbWFya0FzSW52YWxpZFxuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cbiAgbWFya0FzSW52YWxpZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5zZXRFcnJvcnMoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5lcnJvcnMsIHsgY3VzdG9tOiBtZXNzYWdlIH0pKTtcbiAgfVxufVxuIl19