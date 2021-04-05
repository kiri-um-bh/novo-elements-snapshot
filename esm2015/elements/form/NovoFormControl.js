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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBVzs7Ozs7SUE0RDlDLFlBQVksS0FBVSxFQUFFLE9BQTBCO1FBQ2hELEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUE1RDVELHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBZWpFLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBOENoQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7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QUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Q0FDRjs7O0lBN05DLDhDQUFpRTs7SUFDakUsaUNBQWdCOztJQUNoQixvQ0FBbUI7O0lBQ25CLDhCQUFZOztJQUNaLG1DQUFrQjs7SUFDbEIsbUNBQWtCOztJQUNsQiwrQ0FBOEI7O0lBQzlCLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsMENBQXdCOztJQUN4QixzQ0FBcUI7O0lBQ3JCLHlDQUF5Qjs7SUFDekIsNkNBQTZCOztJQUM3Qiw4Q0FBOEI7O0lBQzlCLHVDQUFrQjs7SUFDbEIsdUNBQWtCOztJQUNsQixxQ0FBZ0I7O0lBQ2hCLGlDQUFZOztJQUNaLG9DQUFrQjs7SUFDbEIsc0NBQW9COztJQUNwQixzQ0FBb0I7O0lBQ3BCLGtDQUFpQjs7SUFDakIsbUNBQWtCOztJQUNsQix1Q0FBa0I7O0lBQ2xCLHNDQUFvQjs7SUFDcEIsb0NBQWtCOztJQUNsQixvQ0FBa0I7O0lBQ2xCLGtDQUFvQjs7SUFDcEIsK0JBQWE7O0lBQ2Isa0NBQWdCOztJQUNoQiwrQkFBYTs7SUFDYix3Q0FBdUI7O0lBQ3ZCLHVDQUE0Qjs7SUFDNUIsdUNBQXNCOztJQUN0QiwrQ0FBNkI7O0lBQzdCLHNDQUFxQjs7SUFDckIsd0NBQXFIOztJQUNySCxtQ0FBbUI7O0lBQ25CLHFDQUFvQjs7SUFDcEIseUNBQXdCOztJQUN4QixvQ0FBMEI7O0lBQzFCLGtDQUF3Qjs7SUFDeEIsb0NBQW1COztJQUNuQiwwQ0FBMEI7O0lBQzFCLHNDQUEwQjs7SUFDMUIsMkNBQTJCOztJQUMzQixrQ0FLRTs7SUFDRixtQ0FBZTs7SUFDZiw4Q0FBMEI7O0lBQzFCLHdDQUF1Qjs7SUFDdkIsb0RBQW9DOztJQUNwQyxrQ0FBaUI7Ozs7O0lBQ2pCLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IElNYXNrT3B0aW9ucyB9IGZyb20gJy4vQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUNvbnRyb2wgZXh0ZW5kcyBGb3JtQ29udHJvbCB7XG4gIGRpc3BsYXlWYWx1ZUNoYW5nZXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgZW5jcnlwdGVkOiBib29sZWFuO1xuICBrZXk6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHJlYWRPbmx5OiBib29sZWFuO1xuICBoYXNSZXF1aXJlZFZhbGlkYXRvcjogYm9vbGVhbjtcbiAgbGFiZWw6IHN0cmluZztcbiAgdG9vbHRpcDogc3RyaW5nO1xuICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcbiAgdG9vbHRpcFNpemU/OiBzdHJpbmc7XG4gIHRvb2x0aXBQcmVsaW5lPzogYm9vbGVhbjtcbiAgcmVtb3ZlVG9vbHRpcEFycm93PzogYm9vbGVhbjtcbiAgdG9vbHRpcEF1dG9Qb3NpdGlvbj86IGJvb2xlYW47XG4gIGluaXRpYWxWYWx1ZTogYW55O1xuICB2YWx1ZUhpc3RvcnkgPSBbXTtcbiAgdmFsaWRhdG9yczogYW55O1xuICBjb25maWc6IGFueTtcbiAgc29ydE9yZGVyOiBudW1iZXI7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG1pbmltYWw6IGJvb2xlYW47XG4gIG11bHRpcGxlOiBib29sZWFuO1xuICBoZWFkZXJDb25maWc6IGFueTtcbiAgb3B0aW9uc1R5cGU6IHN0cmluZztcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIG1pbmxlbmd0aDogbnVtYmVyO1xuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICB0eXBlOiBzdHJpbmc7XG4gIHN1YlR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuO1xuICBpbnRlcmFjdGlvbnM6IEFycmF5PE9iamVjdD47XG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbjsgLy8gRGVwcmVjYXRlZFxuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbGF5b3V0T3B0aW9ucz86IHsgb3JkZXI/OiBzdHJpbmc7IGRvd25sb2FkPzogYm9vbGVhbjsgbGFiZWxTdHlsZT86IHN0cmluZzsgZHJhZ2dhYmxlPzogYm9vbGVhbjsgaWNvblN0eWxlPzogc3RyaW5nIH07XG4gIG1pbGl0YXJ5PzogYm9vbGVhbjtcbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgY3VycmVuY3lGb3JtYXQ/OiBzdHJpbmc7XG4gIHN0YXJ0RGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIGVuZERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICB3ZWVrU3RhcnQ/OiBudW1iZXI7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIG1hc2tPcHRpb25zOiBJTWFza09wdGlvbnM7XG4gIGFsbG93SW52YWxpZERhdGU/OiBib29sZWFuO1xuICB0aXBXZWxsPzoge1xuICAgIHRpcDogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgYnV0dG9uPzogYm9vbGVhbjtcbiAgICBzYW5pdGl6ZT86IGJvb2xlYW47XG4gIH07XG4gIHJhd1ZhbHVlPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBjaGVja2JveExhYmVsPzogc3RyaW5nO1xuICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zPzogYm9vbGVhbjtcbiAgd2FybmluZz86IHN0cmluZztcbiAgcHJpdmF0ZSBoaXN0b3J5VGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnksIGNvbnRyb2w6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIodmFsdWUsIGNvbnRyb2wudmFsaWRhdG9ycywgY29udHJvbC5hc3luY1ZhbGlkYXRvcnMpO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbnRyb2wudmFsaWRhdG9ycztcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVIaXN0b3J5LnB1c2godmFsdWUpO1xuICAgIHRoaXMua2V5ID0gY29udHJvbC5rZXk7XG4gICAgdGhpcy5sYWJlbCA9IGNvbnRyb2wubGFiZWw7XG4gICAgdGhpcy5yZWFkT25seSA9IGNvbnRyb2wucmVhZE9ubHk7XG4gICAgdGhpcy5oaWRkZW4gPSBjb250cm9sLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IGNvbnRyb2wuZW5jcnlwdGVkO1xuICAgIHRoaXMuY29uZmlnID0gY29udHJvbC5jb25maWc7XG4gICAgdGhpcy50eXBlID0gY29udHJvbC50eXBlO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbnRyb2wuc3ViVHlwZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gY29udHJvbC5yZXF1aXJlZDtcbiAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB0aGlzLnRvb2x0aXAgPSBjb250cm9sLnRvb2x0aXA7XG4gICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSBjb250cm9sLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRvb2x0aXBTaXplID0gY29udHJvbC50b29sdGlwU2l6ZTtcbiAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29udHJvbC50b29sdGlwUHJlbGluZTtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdyA9IGNvbnRyb2wucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudG9vbHRpcEF1dG9Qb3NpdGlvbiA9IGNvbnRyb2wudG9vbHRpcEF1dG9Qb3NpdGlvbjtcbiAgICB0aGlzLmxhYmVsID0gY29udHJvbC5sYWJlbDtcbiAgICB0aGlzLm5hbWUgPSBjb250cm9sLm5hbWU7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGNvbnRyb2wucmVxdWlyZWQ7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBjb250cm9sLnNvcnRPcmRlcjtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gY29udHJvbC5jb250cm9sVHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29udHJvbC5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm1pbmltYWwgPSBjb250cm9sLm1pbmltYWw7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGNvbnRyb2wubXVsdGlwbGU7XG4gICAgdGhpcy5oZWFkZXJDb25maWcgPSBjb250cm9sLmhlYWRlckNvbmZpZztcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29udHJvbC5vcHRpb25zVHlwZTtcbiAgICB0aGlzLnJlYWRPbmx5ID0gY29udHJvbC5yZWFkT25seTtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBjb250cm9sLmxheW91dE9wdGlvbnM7XG4gICAgdGhpcy5taWxpdGFyeSA9IGNvbnRyb2wubWlsaXRhcnk7XG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29udHJvbC5kYXRlRm9ybWF0O1xuICAgIHRoaXMuY3VycmVuY3lGb3JtYXQgPSBjb250cm9sLmN1cnJlbmN5Rm9ybWF0O1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29udHJvbC5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gY29udHJvbC5lbmREYXRlO1xuICAgIHRoaXMud2Vla1N0YXJ0ID0gY29udHJvbC53ZWVrU3RhcnQ7XG4gICAgdGhpcy50ZXh0TWFza0VuYWJsZWQgPSBjb250cm9sLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbnRyb2wudGV4dE1hc2tFbmFibGVkO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSBjb250cm9sLm1hc2tPcHRpb25zO1xuICAgIHRoaXMuYWxsb3dJbnZhbGlkRGF0ZSA9IGNvbnRyb2wuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICB0aGlzLm1heGxlbmd0aCA9IGNvbnRyb2wubWF4bGVuZ3RoO1xuICAgIHRoaXMubWlubGVuZ3RoID0gY29udHJvbC5taW5sZW5ndGg7XG4gICAgdGhpcy5jbG9zZU9uU2VsZWN0ID0gY29udHJvbC5jbG9zZU9uU2VsZWN0O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25zID0gY29udHJvbC5pbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5jaGVja2JveExhYmVsID0gY29udHJvbC5jaGVja2JveExhYmVsO1xuICAgIHRoaXMucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucyA9IGNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucztcbiAgICB0aGlzLmFwcGVuZFRvQm9keSA9IGNvbnRyb2wuYXBwZW5kVG9Cb2R5O1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yID0gY29udHJvbC5wYXJlbnRTY3JvbGxTZWxlY3RvcjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gY29udHJvbC5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb250cm9sLm9wdGlvbnM7XG4gICAgdGhpcy50aXBXZWxsID0gY29udHJvbC50aXBXZWxsO1xuICAgIHRoaXMuY3VzdG9tQ29udHJvbENvbmZpZyA9IGNvbnRyb2wuY3VzdG9tQ29udHJvbENvbmZpZztcbiAgICB0aGlzLndhcm5pbmcgPSBjb250cm9sLndhcm5pbmc7XG5cbiAgICAvLyBSZWFjdGl2ZSBGb3JtLCBuZWVkIHRvIGVuYWJsZS9kaXNhYmxlLCBjYW4ndCBiaW5kIHRvIFtkaXNhYmxlZF1cbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjbGVhclZhbHVlIC0gZmxhZyB0byByZXNldCB0aGUgY29udHJvbCdzIHZhbHVlXG4gICAqL1xuICBoaWRlKGNsZWFyVmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgIGlmIChjbGVhclZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHNldFJlcXVpcmVkKGlzUmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVkID0gaXNSZXF1aXJlZDtcbiAgICAvLyBVcGRhdGUgdmFsaWRhdG9ycyB0byBoYXZlIHRoZSByZXF1aXJlZFxuICAgIGlmICh0aGlzLnJlcXVpcmVkICYmICF0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JzOiBhbnkgPSBbLi4udGhpcy52YWxpZGF0b3JzXTtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIC8vIFRPRE86IGR1cGxpY2F0ZWQgYmVsb3dcbiAgICAgIHRoaXMuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhc1JlcXVpcmVkVmFsaWRhdG9yID0gdGhpcy5yZXF1aXJlZDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnJlcXVpcmVkICYmIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IpIHtcbiAgICAgIGxldCB2YWxpZGF0b3JzOiBhbnkgPSBbLi4udGhpcy52YWxpZGF0b3JzXTtcbiAgICAgIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcigodmFsKSA9PiB2YWwgIT09IFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgLy8gVE9ETzogZHVwbGljYXRlZCBhYm92ZVxuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IgPSB0aGlzLnJlcXVpcmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKFxuICAgIHZhbHVlOiBhbnksXG4gICAge1xuICAgICAgb25seVNlbGYsXG4gICAgICBlbWl0RXZlbnQsXG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsXG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UsXG4gICAgfToge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcbiAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZSwgeyBvbmx5U2VsZiwgZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSB9KTtcblxuICAgIC8vIEhpc3RvcnlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oaXN0b3J5VGltZW91dCk7XG4gICAgdGhpcy5oaXN0b3J5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZUhpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHNldFJlYWRPbmx5KGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAqXG4gICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICAgKi9cbiAgZGlzYWJsZShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbjsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0geyBlbWl0RXZlbnQ6IGZhbHNlIH0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuZW1pdEV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0cy5lbWl0RXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VwZXIuZGlzYWJsZShvcHRzKTtcbiAgfVxuXG4gIGVuYWJsZShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbjsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0geyBlbWl0RXZlbnQ6IGZhbHNlIH0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuZW1pdEV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0cy5lbWl0RXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VwZXIuZW5hYmxlKG9wdHMpO1xuICB9XG5cbiAgbWFya0FzSW52YWxpZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5zZXRFcnJvcnMoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5lcnJvcnMsIHsgY3VzdG9tOiBtZXNzYWdlIH0pKTtcbiAgfVxufVxuIl19