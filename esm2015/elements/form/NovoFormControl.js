/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * \@name markAsValid
     * @return {?}
     */
    markAsValid() {
        this.markAsDirty();
        this.markAsTouched();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUc1RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxXQUFXOzs7OztJQXlEOUMsWUFBWSxLQUFVLEVBQUUsT0FBMEI7UUFDaEQsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQXpENUQsd0JBQW1CLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFlakUsaUJBQVksR0FBVSxFQUFFLENBQUM7UUEyQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztR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Q25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7O0lBNVBDLDhDQUFpRTs7SUFDakUsaUNBQWdCOztJQUNoQixvQ0FBbUI7O0lBQ25CLDhCQUFZOztJQUNaLG1DQUFrQjs7SUFDbEIsbUNBQWtCOztJQUNsQiwrQ0FBOEI7O0lBQzlCLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsMENBQXdCOztJQUN4QixzQ0FBcUI7O0lBQ3JCLHlDQUF5Qjs7SUFDekIsNkNBQTZCOztJQUM3Qiw4Q0FBOEI7O0lBQzlCLHVDQUFrQjs7SUFDbEIsdUNBQXlCOztJQUN6QixxQ0FBZ0I7O0lBQ2hCLGlDQUFZOztJQUNaLG9DQUFrQjs7SUFDbEIsc0NBQW9COztJQUNwQixzQ0FBb0I7O0lBQ3BCLG1DQUFrQjs7SUFDbEIsdUNBQWtCOztJQUNsQixzQ0FBb0I7O0lBQ3BCLG9DQUFrQjs7SUFDbEIsb0NBQWtCOztJQUNsQixrQ0FBb0I7O0lBQ3BCLCtCQUFhOztJQUNiLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2Isd0NBQXVCOztJQUN2Qix1Q0FBNEI7O0lBQzVCLHVDQUFzQjs7SUFDdEIsK0NBQTZCOztJQUM3QixzQ0FBcUI7O0lBQ3JCLHdDQUFxSDs7SUFDckgsbUNBQW1COztJQUNuQixxQ0FBb0I7O0lBQ3BCLHlDQUF3Qjs7SUFDeEIsb0NBQTBCOztJQUMxQixrQ0FBd0I7O0lBQ3hCLDBDQUEwQjs7SUFDMUIsc0NBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLGtDQUlFOztJQUNGLG1DQUFlOztJQUNmLDhDQUEwQjs7SUFDMUIsd0NBQXVCOztJQUN2QixvREFBb0M7O0lBQ3BDLGtDQUFpQjs7Ozs7SUFDakIseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuL0NvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBkaXNwbGF5VmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICByZWFkT25seTogYm9vbGVhbjtcbiAgaGFzUmVxdWlyZWRWYWxpZGF0b3I6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBpbml0aWFsVmFsdWU6IGFueTtcbiAgdmFsdWVIaXN0b3J5OiBhbnlbXSA9IFtdO1xuICB2YWxpZGF0b3JzOiBhbnk7XG4gIGNvbmZpZzogYW55O1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgY29udHJvbFR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBvcHRpb25zVHlwZTogc3RyaW5nO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW47XG4gIGludGVyYWN0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsYXlvdXRPcHRpb25zPzogeyBvcmRlcj86IHN0cmluZzsgZG93bmxvYWQ/OiBib29sZWFuOyBsYWJlbFN0eWxlPzogc3RyaW5nOyBkcmFnZ2FibGU/OiBib29sZWFuOyBpY29uU3R5bGU/OiBzdHJpbmcgfTtcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICBjdXJyZW5jeUZvcm1hdD86IHN0cmluZztcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIG1hc2tPcHRpb25zOiBJTWFza09wdGlvbnM7XG4gIGFsbG93SW52YWxpZERhdGU/OiBib29sZWFuO1xuICB0aXBXZWxsPzoge1xuICAgIHRpcDogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgYnV0dG9uPzogYm9vbGVhbjtcbiAgfTtcbiAgcmF3VmFsdWU/OiBhbnk7XG4gIGN1c3RvbUNvbnRyb2xDb25maWc/OiBhbnk7XG4gIGNoZWNrYm94TGFiZWw/OiBzdHJpbmc7XG4gIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM/OiBib29sZWFuO1xuICB3YXJuaW5nPzogc3RyaW5nO1xuICBwcml2YXRlIGhpc3RvcnlUaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSwgY29udHJvbDogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcih2YWx1ZSwgY29udHJvbC52YWxpZGF0b3JzLCBjb250cm9sLmFzeW5jVmFsaWRhdG9ycyk7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gY29udHJvbC52YWxpZGF0b3JzO1xuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUhpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5rZXkgPSBjb250cm9sLmtleTtcbiAgICB0aGlzLmxhYmVsID0gY29udHJvbC5sYWJlbDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gY29udHJvbC5yZWFkT25seTtcbiAgICB0aGlzLmhpZGRlbiA9IGNvbnRyb2wuaGlkZGVuO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gY29udHJvbC5lbmNyeXB0ZWQ7XG4gICAgdGhpcy5jb25maWcgPSBjb250cm9sLmNvbmZpZztcbiAgICB0aGlzLnR5cGUgPSBjb250cm9sLnR5cGU7XG4gICAgdGhpcy5zdWJUeXBlID0gY29udHJvbC5zdWJUeXBlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBjb250cm9sLnJlcXVpcmVkO1xuICAgIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IgPSB0aGlzLnJlcXVpcmVkO1xuICAgIHRoaXMudG9vbHRpcCA9IGNvbnRyb2wudG9vbHRpcDtcbiAgICB0aGlzLnRvb2x0aXBQb3NpdGlvbiA9IGNvbnRyb2wudG9vbHRpcFBvc2l0aW9uO1xuICAgIHRoaXMudG9vbHRpcFNpemUgPSBjb250cm9sLnRvb2x0aXBTaXplO1xuICAgIHRoaXMudG9vbHRpcFByZWxpbmUgPSBjb250cm9sLnRvb2x0aXBQcmVsaW5lO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcEFycm93ID0gY29udHJvbC5yZW1vdmVUb29sdGlwQXJyb3c7XG4gICAgdGhpcy50b29sdGlwQXV0b1Bvc2l0aW9uID0gY29udHJvbC50b29sdGlwQXV0b1Bvc2l0aW9uO1xuICAgIHRoaXMubGFiZWwgPSBjb250cm9sLmxhYmVsO1xuICAgIHRoaXMubmFtZSA9IGNvbnRyb2wubmFtZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gY29udHJvbC5yZXF1aXJlZDtcbiAgICB0aGlzLnNvcnRPcmRlciA9IGNvbnRyb2wuc29ydE9yZGVyO1xuICAgIHRoaXMuY29udHJvbFR5cGUgPSBjb250cm9sLmNvbnRyb2xUeXBlO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjb250cm9sLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMubXVsdGlwbGUgPSBjb250cm9sLm11bHRpcGxlO1xuICAgIHRoaXMuaGVhZGVyQ29uZmlnID0gY29udHJvbC5oZWFkZXJDb25maWc7XG4gICAgdGhpcy5vcHRpb25zVHlwZSA9IGNvbnRyb2wub3B0aW9uc1R5cGU7XG4gICAgdGhpcy5yZWFkT25seSA9IGNvbnRyb2wucmVhZE9ubHk7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gY29udHJvbC5sYXlvdXRPcHRpb25zO1xuICAgIHRoaXMubWlsaXRhcnkgPSBjb250cm9sLm1pbGl0YXJ5O1xuICAgIHRoaXMuZGF0ZUZvcm1hdCA9IGNvbnRyb2wuZGF0ZUZvcm1hdDtcbiAgICB0aGlzLmN1cnJlbmN5Rm9ybWF0ID0gY29udHJvbC5jdXJyZW5jeUZvcm1hdDtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGNvbnRyb2wuc3RhcnREYXRlO1xuICAgIHRoaXMuZW5kRGF0ZSA9IGNvbnRyb2wuZW5kRGF0ZTtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbnRyb2wudGV4dE1hc2tFbmFibGVkO1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29udHJvbC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy5tYXNrT3B0aW9ucyA9IGNvbnRyb2wubWFza09wdGlvbnM7XG4gICAgdGhpcy5hbGxvd0ludmFsaWREYXRlID0gY29udHJvbC5hbGxvd0ludmFsaWREYXRlO1xuICAgIHRoaXMubWF4bGVuZ3RoID0gY29udHJvbC5tYXhsZW5ndGg7XG4gICAgdGhpcy5taW5sZW5ndGggPSBjb250cm9sLm1pbmxlbmd0aDtcbiAgICB0aGlzLmNsb3NlT25TZWxlY3QgPSBjb250cm9sLmNsb3NlT25TZWxlY3Q7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnMgPSBjb250cm9sLmludGVyYWN0aW9ucztcbiAgICB0aGlzLmNoZWNrYm94TGFiZWwgPSBjb250cm9sLmNoZWNrYm94TGFiZWw7XG4gICAgdGhpcy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zID0gY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID0gY29udHJvbC5hcHBlbmRUb0JvZHk7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IgPSBjb250cm9sLnBhcmVudFNjcm9sbFNlbGVjdG9yO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjb250cm9sLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbnRyb2wub3B0aW9ucztcbiAgICB0aGlzLnRpcFdlbGwgPSBjb250cm9sLnRpcFdlbGw7XG4gICAgdGhpcy5jdXN0b21Db250cm9sQ29uZmlnID0gY29udHJvbC5jdXN0b21Db250cm9sQ29uZmlnO1xuICAgIHRoaXMud2FybmluZyA9IGNvbnRyb2wud2FybmluZztcblxuICAgIC8vIFJlYWN0aXZlIEZvcm0sIG5lZWQgdG8gZW5hYmxlL2Rpc2FibGUsIGNhbid0IGJpbmQgdG8gW2Rpc2FibGVkXVxuICAgIGlmICh0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlkZVxuICAgKiBAcGFyYW0gY2xlYXJWYWx1ZSAtIGZsYWcgdG8gcmVzZXQgdGhlIGNvbnRyb2wncyB2YWx1ZVxuICAgKi9cbiAgcHVibGljIGhpZGUoY2xlYXJWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgaWYgKGNsZWFyVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dcbiAgICovXG4gIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0UmVxdWlyZWRcbiAgICogQHBhcmFtIGlzUmVxdWlyZWRcbiAgICovXG4gIHB1YmxpYyBzZXRSZXF1aXJlZChpc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGlzUmVxdWlyZWQ7XG4gICAgLy8gVXBkYXRlIHZhbGlkYXRvcnMgdG8gaGF2ZSB0aGUgcmVxdWlyZWRcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvcikge1xuICAgICAgbGV0IHZhbGlkYXRvcnM6IGFueSA9IFsuLi50aGlzLnZhbGlkYXRvcnNdO1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgLy8gVE9ETzogZHVwbGljYXRlZCBiZWxvd1xuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaGFzUmVxdWlyZWRWYWxpZGF0b3IgPSB0aGlzLnJlcXVpcmVkO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucmVxdWlyZWQgJiYgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvcikge1xuICAgICAgbGV0IHZhbGlkYXRvcnM6IGFueSA9IFsuLi50aGlzLnZhbGlkYXRvcnNdO1xuICAgICAgdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKCh2YWwpID0+IHZhbCAhPT0gVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAvLyBUT0RPOiBkdXBsaWNhdGVkIGFib3ZlXG4gICAgICB0aGlzLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYXNSZXF1aXJlZFZhbGlkYXRvciA9IHRoaXMucmVxdWlyZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNldFZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gb25seVNlbGZcbiAgICogQHBhcmFtIGVtaXRFdmVudFxuICAgKiBAcGFyYW0gZW1pdE1vZGVsVG9WaWV3Q2hhbmdlXG4gICAqIEBwYXJhbSBlbWl0Vmlld1RvTW9kZWxDaGFuZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZShcbiAgICB2YWx1ZTogYW55LFxuICAgIHtcbiAgICAgIG9ubHlTZWxmLFxuICAgICAgZW1pdEV2ZW50LFxuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLFxuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlLFxuICAgIH06IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMubWFya0FzRGlydHkoKTtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZUNoYW5nZXMuZW1pdCh2YWx1ZSk7XG4gICAgc3VwZXIuc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGYsIGVtaXRFdmVudCwgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UgfSk7XG5cbiAgICAvLyBIaXN0b3J5XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlzdG9yeVRpbWVvdXQpO1xuICAgIHRoaXMuaGlzdG9yeVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWVIaXN0b3J5LnB1c2godmFsdWUpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0UmVhZE9ubHlcbiAgICogQHBhcmFtIGlzUmVhZE9ubHlcbiAgICovXG4gIHB1YmxpYyBzZXRSZWFkT25seShpc1JlYWRPbmx5OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgKiBleGNsdWRlZCBmcm9tIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgYW55IHBhcmVudC4gSXRzIHN0YXR1cyBpcyBgRElTQUJMRURgLlxuICAgKlxuICAgKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGRpc2FibGVkIHRvIG1haW50YWluIHRoZSBtb2RlbC5cbiAgICovXG4gIHB1YmxpYyBkaXNhYmxlKG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuOyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7IGVtaXRFdmVudDogZmFsc2UgfSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5lbWl0RXZlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRzLmVtaXRFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdXBlci5kaXNhYmxlKG9wdHMpO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbjsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0geyBlbWl0RXZlbnQ6IGZhbHNlIH0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuZW1pdEV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0cy5lbWl0RXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VwZXIuZW5hYmxlKG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG1hcmtBc0ludmFsaWRcbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICovXG4gIG1hcmtBc0ludmFsaWQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0RXJyb3JzKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXJyb3JzLCB7IGN1c3RvbTogbWVzc2FnZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbWFya0FzVmFsaWRcbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICovXG4gIG1hcmtBc1ZhbGlkKCk6IHZvaWQge1xuICAgIHRoaXMubWFya0FzRGlydHkoKTtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLnNldEVycm9ycyhudWxsKTtcbiAgfVxufVxuIl19