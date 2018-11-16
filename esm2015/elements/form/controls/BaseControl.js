/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
/**
 * @record
 */
export function NovoControlConfig() { }
if (false) {
    /** @type {?|undefined} */
    NovoControlConfig.prototype.validators;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.asyncValidators;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.value;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.key;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.label;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.checkboxLabel;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.required;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.hidden;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.encrypted;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.sortOrder;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.controlType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.placeholder;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.config;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dirty;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.multiple;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.headerConfig;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.currencyFormat;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.associatedEntity;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.optionsType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.forceClear;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.disabled;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.maxlength;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.minlength;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.options;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.type;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.subType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.name;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.readOnly;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.closeOnSelect;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.interactions;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dataSpecialization;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dataType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.metaType;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.appendToBody;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.parentScrollSelector;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.description;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltip;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipPosition;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipSize;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipPreline;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.removeTooltipArrow;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tooltipAutoPosition;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.layoutOptions;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.template;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.customControlConfig;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.customControl;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.military;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.dateFormat;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.textMaskEnabled;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.maskOptions;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.allowInvalidDate;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.tipWell;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.width;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.startupFocus;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.fileBrowserImageUploadUrl;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.isEmpty;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.startDate;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.endDate;
    /** @type {?|undefined} */
    NovoControlConfig.prototype.restrictFieldInteractions;
}
export class BaseControl {
    /**
     * @param {?=} type
     * @param {?=} config
     */
    constructor(type = 'BaseControl', config = {}) {
        this.__type = 'BaseControl';
        this.__type = type;
        this.__config = config;
        this.validators = config.validators || [];
        this.asyncValidators = config.asyncValidators || [];
        this.value = config.value;
        this.key = config.key || '';
        this.label = config.label || '';
        this.checkboxLabel = config.checkboxLabel;
        this.name = config.name || '';
        this.required = !!config.required;
        this.hidden = !!config.hidden;
        this.encrypted = !!config.encrypted;
        this.sortOrder = config.sortOrder === undefined ? 1 : config.sortOrder;
        this.controlType = config.controlType || '';
        this.metaType = config.metaType;
        this.placeholder = config.placeholder || '';
        this.config = config.config || null;
        this.dirty = !!config.value;
        this.multiple = !!config.multiple;
        this.headerConfig = config.headerConfig || null;
        this.currencyFormat = config.currencyFormat || null;
        this.associatedEntity = config.associatedEntity || null;
        this.optionsType = config.optionsType || null;
        this.options = config.options || [];
        this.forceClear = new EventEmitter();
        this.readOnly = !!config.readOnly || !!config.disabled;
        this.disabled = !!config.disabled;
        this.layoutOptions = config.layoutOptions || {};
        this.military = !!config.military;
        this.dateFormat = config.dateFormat;
        this.textMaskEnabled = config.textMaskEnabled;
        this.maskOptions = config.maskOptions;
        this.allowInvalidDate = config.allowInvalidDate;
        this.startDate = config.startDate;
        this.endDate = config.endDate;
        this.restrictFieldInteractions = !!config.restrictFieldInteractions;
        if (this.required) {
            this.validators.push(Validators.required);
        }
        if (!Helpers.isBlank(config.maxlength)) {
            this.maxlength = config.maxlength;
            this.validators.push(Validators.maxLength(this.maxlength));
        }
        if (!Helpers.isBlank(config.minlength)) {
            this.minlength = config.minlength;
            this.validators.push(Validators.minLength(this.minlength));
        }
        this.closeOnSelect = !!config.closeOnSelect;
        this.interactions = config.interactions;
        this.dataSpecialization = config.dataSpecialization;
        this.dataType = config.dataType;
        this.appendToBody = !!config.appendToBody;
        if (this.appendToBody) {
            notify(`'appendToBody' has been deprecated. Please remove this attribute.`);
        }
        this.parentScrollSelector = config.parentScrollSelector;
        this.description = config.description;
        if (config.tooltip) {
            this.tooltip = config.tooltip;
            this.tooltipPosition = config.tooltipPosition;
            this.tooltipSize = config.tooltipSize;
            this.tooltipPreline = config.tooltipPreline;
            this.removeTooltipArrow = config.removeTooltipArrow;
            this.tooltipAutoPosition = config.tooltipAutoPosition;
        }
        this.template = config.template;
        this.customControlConfig = config.customControlConfig;
        this.tipWell = config.tipWell;
        this.width = config.width;
        this.startupFocus = !!config.startupFocus;
        if (config.fileBrowserImageUploadUrl) {
            this.fileBrowserImageUploadUrl = config.fileBrowserImageUploadUrl;
        }
        if (config.isEmpty) {
            this.isEmpty = config.isEmpty;
        }
    }
}
if (false) {
    /** @type {?} */
    BaseControl.prototype.__type;
    /** @type {?} */
    BaseControl.prototype.__config;
    /** @type {?} */
    BaseControl.prototype.validators;
    /** @type {?} */
    BaseControl.prototype.asyncValidators;
    /** @type {?} */
    BaseControl.prototype.value;
    /** @type {?} */
    BaseControl.prototype.key;
    /** @type {?} */
    BaseControl.prototype.label;
    /** @type {?} */
    BaseControl.prototype.checkboxLabel;
    /** @type {?} */
    BaseControl.prototype.required;
    /** @type {?} */
    BaseControl.prototype.hidden;
    /** @type {?} */
    BaseControl.prototype.encrypted;
    /** @type {?} */
    BaseControl.prototype.sortOrder;
    /** @type {?} */
    BaseControl.prototype.controlType;
    /** @type {?} */
    BaseControl.prototype.metaType;
    /** @type {?} */
    BaseControl.prototype.placeholder;
    /** @type {?} */
    BaseControl.prototype.config;
    /** @type {?} */
    BaseControl.prototype.dirty;
    /** @type {?} */
    BaseControl.prototype.multiple;
    /** @type {?} */
    BaseControl.prototype.headerConfig;
    /** @type {?} */
    BaseControl.prototype.currencyFormat;
    /** @type {?} */
    BaseControl.prototype.associatedEntity;
    /** @type {?} */
    BaseControl.prototype.optionsType;
    /** @type {?} */
    BaseControl.prototype.forceClear;
    /** @type {?} */
    BaseControl.prototype.maxlength;
    /** @type {?} */
    BaseControl.prototype.minlength;
    /** @type {?} */
    BaseControl.prototype.options;
    /** @type {?} */
    BaseControl.prototype.type;
    /** @type {?} */
    BaseControl.prototype.subType;
    /** @type {?} */
    BaseControl.prototype.name;
    /** @type {?} */
    BaseControl.prototype.disabled;
    /** @type {?} */
    BaseControl.prototype.readOnly;
    /** @type {?} */
    BaseControl.prototype.closeOnSelect;
    /** @type {?} */
    BaseControl.prototype.interactions;
    /** @type {?} */
    BaseControl.prototype.dataSpecialization;
    /** @type {?} */
    BaseControl.prototype.dataType;
    /** @type {?} */
    BaseControl.prototype.appendToBody;
    /** @type {?} */
    BaseControl.prototype.parentScrollSelector;
    /** @type {?} */
    BaseControl.prototype.description;
    /** @type {?} */
    BaseControl.prototype.tooltip;
    /** @type {?} */
    BaseControl.prototype.tooltipPosition;
    /** @type {?} */
    BaseControl.prototype.tooltipSize;
    /** @type {?} */
    BaseControl.prototype.tooltipPreline;
    /** @type {?} */
    BaseControl.prototype.removeTooltipArrow;
    /** @type {?} */
    BaseControl.prototype.tooltipAutoPosition;
    /** @type {?} */
    BaseControl.prototype.layoutOptions;
    /** @type {?} */
    BaseControl.prototype.template;
    /** @type {?} */
    BaseControl.prototype.customControlConfig;
    /** @type {?} */
    BaseControl.prototype.military;
    /** @type {?} */
    BaseControl.prototype.dateFormat;
    /** @type {?} */
    BaseControl.prototype.textMaskEnabled;
    /** @type {?} */
    BaseControl.prototype.maskOptions;
    /** @type {?} */
    BaseControl.prototype.allowInvalidDate;
    /** @type {?} */
    BaseControl.prototype.tipWell;
    /** @type {?} */
    BaseControl.prototype.width;
    /** @type {?} */
    BaseControl.prototype.startupFocus;
    /** @type {?} */
    BaseControl.prototype.fileBrowserImageUploadUrl;
    /** @type {?} */
    BaseControl.prototype.isEmpty;
    /** @type {?} */
    BaseControl.prototype.startDate;
    /** @type {?} */
    BaseControl.prototype.endDate;
    /** @type {?} */
    BaseControl.prototype.restrictFieldInteractions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBRy9ELDhDQU9DOzs7SUFOQyx5Q0FBZTs7SUFDZix3Q0FBYzs7SUFDZCx1Q0FBZ0M7O0lBQ2hDLDBDQUFpQjs7SUFDakIsdUNBQVk7O0lBQ1osZ0RBQW9COzs7OztBQUd0Qix1Q0F5RUM7OztJQXhFQyx1Q0FBd0I7O0lBQ3hCLDRDQUE2Qjs7SUFDN0Isa0NBQVk7O0lBQ1osZ0NBQWE7O0lBQ2Isa0NBQWU7O0lBQ2YsMENBQXVCOztJQUN2QixxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsc0NBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLHdDQUFxQjs7SUFDckIsd0NBQXFCOztJQUNyQixtQ0FBYTs7SUFDYixrQ0FBZ0I7O0lBQ2hCLHFDQUFtQjs7SUFDbkIseUNBQW1COztJQUNuQiwyQ0FBd0I7O0lBQ3hCLDZDQUEwQjs7SUFDMUIsd0NBQXFCOztJQUNyQix1Q0FBK0I7O0lBQy9CLHFDQUFtQjs7SUFDbkIsc0NBQW1COztJQUNuQixzQ0FBbUI7O0lBQ25CLG9DQUFxQjs7SUFDckIsaUNBQWM7O0lBQ2Qsb0NBQWlCOztJQUNqQixpQ0FBYzs7SUFDZCxxQ0FBbUI7O0lBQ25CLDBDQUF3Qjs7SUFDeEIseUNBQTZCOztJQUM3QiwrQ0FBNEI7O0lBQzVCLHFDQUFrQjs7SUFDbEIscUNBQWtCOztJQUNsQix5Q0FBdUI7O0lBQ3ZCLGlEQUE4Qjs7SUFDOUIsd0NBQXFCOztJQUNyQixvQ0FBaUI7O0lBQ2pCLDRDQUF5Qjs7SUFDekIsd0NBQXFCOztJQUNyQiwyQ0FBeUI7O0lBQ3pCLCtDQUE2Qjs7SUFDN0IsZ0RBQThCOztJQUM5QiwwQ0FTRTs7SUFDRixxQ0FBZTs7SUFDZixnREFBMEI7O0lBQzFCLDBDQUFvQjs7SUFDcEIscUNBQW1COztJQUNuQix1Q0FBb0I7O0lBQ3BCLDRDQUEwQjs7SUFDMUIsd0NBQTJCOztJQUMzQiw2Q0FBMkI7O0lBQzNCLG9DQUlFOztJQUNGLGtDQUFlOztJQUNmLHlDQUF1Qjs7SUFDdkIsc0RBQW1DOztJQUNuQyxvQ0FBbUI7O0lBQ25CLHNDQUEwQjs7SUFDMUIsb0NBQXdCOztJQUN4QixzREFBb0M7O0FBR3RDLE1BQU07Ozs7O0lBMEVKLFlBQVksT0FBZSxhQUFhLEVBQUUsU0FBNEIsRUFBRTtRQXpFeEUsV0FBTSxHQUFXLGFBQWEsQ0FBQztRQTBFN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFFcEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxNQUFNLENBQUMseUJBQXlCLEVBQUU7WUFDcEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztTQUNuRTtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7OztJQXhKQyw2QkFBK0I7O0lBQy9CLCtCQUE0Qjs7SUFFNUIsaUNBQXVCOztJQUN2QixzQ0FBNkI7O0lBQzdCLDRCQUFXOztJQUNYLDBCQUFZOztJQUNaLDRCQUFjOztJQUNkLG9DQUFzQjs7SUFDdEIsK0JBQWtCOztJQUNsQiw2QkFBZ0I7O0lBQ2hCLGdDQUFtQjs7SUFDbkIsZ0NBQWtCOztJQUNsQixrQ0FBb0I7O0lBQ3BCLCtCQUFpQjs7SUFDakIsa0NBQW9COztJQUNwQiw2QkFBWTs7SUFDWiw0QkFBZTs7SUFDZiwrQkFBa0I7O0lBQ2xCLG1DQUFrQjs7SUFDbEIscUNBQXVCOztJQUN2Qix1Q0FBeUI7O0lBQ3pCLGtDQUFvQjs7SUFDcEIsaUNBQThCOztJQUM5QixnQ0FBa0I7O0lBQ2xCLGdDQUFrQjs7SUFDbEIsOEJBQW9COztJQUNwQiwyQkFBYTs7SUFDYiw4QkFBaUI7O0lBQ2pCLDJCQUFhOztJQUNiLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztJQUNsQixvQ0FBdUI7O0lBQ3ZCLG1DQUE0Qjs7SUFDNUIseUNBQTJCOztJQUMzQiwrQkFBaUI7O0lBQ2pCLG1DQUFzQjs7SUFDdEIsMkNBQTZCOztJQUM3QixrQ0FBcUI7O0lBQ3JCLDhCQUFpQjs7SUFDakIsc0NBQXlCOztJQUN6QixrQ0FBcUI7O0lBQ3JCLHFDQUF5Qjs7SUFDekIseUNBQTZCOztJQUM3QiwwQ0FBOEI7O0lBQzlCLG9DQU9FOztJQUNGLCtCQUFlOztJQUNmLDBDQUEwQjs7SUFDMUIsK0JBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLHNDQUEwQjs7SUFDMUIsa0NBQTJCOztJQUMzQix1Q0FBMkI7O0lBQzNCLDhCQUlFOztJQUNGLDRCQUFjOztJQUNkLG1DQUF1Qjs7SUFDdkIsZ0RBQW1DOztJQUNuQyw4QkFBbUI7O0lBQ25CLGdDQUEwQjs7SUFDMUIsOEJBQXdCOztJQUN4QixnREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZyB9IGZyb20gJy4uL0NvbnRyb2xHcm91cCc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IElNYXNrT3B0aW9ucyB9IGZyb20gJy4uL0NvbnRyb2wnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Hcm91cGVkQ29udHJvbENvbmZpZyB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBhZGQ/OiBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnO1xuICByZW1vdmU/OiBib29sZWFuO1xuICBrZXk6IHN0cmluZztcbiAgaW5pdGlhbFZhbHVlPzoge31bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbENvbmZpZyB7XG4gIHZhbGlkYXRvcnM/OiBBcnJheTxhbnk+O1xuICBhc3luY1ZhbGlkYXRvcnM/OiBBcnJheTxhbnk+O1xuICB2YWx1ZT86IGFueTtcbiAga2V5Pzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgY2hlY2tib3hMYWJlbD86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICBzb3J0T3JkZXI/OiBudW1iZXI7XG4gIGNvbnRyb2xUeXBlPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgY29uZmlnPzogYW55O1xuICBkaXJ0eT86IGJvb2xlYW47XG4gIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgaGVhZGVyQ29uZmlnPzogYW55O1xuICBjdXJyZW5jeUZvcm1hdD86IHN0cmluZztcbiAgYXNzb2NpYXRlZEVudGl0eT86IHN0cmluZztcbiAgb3B0aW9uc1R5cGU/OiBzdHJpbmc7XG4gIGZvcmNlQ2xlYXI/OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBtYXhsZW5ndGg/OiBudW1iZXI7XG4gIG1pbmxlbmd0aD86IG51bWJlcjtcbiAgb3B0aW9ucz86IEFycmF5PGFueT47XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHN1YlR5cGU/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW47XG4gIGludGVyYWN0aW9ucz86IEFycmF5PE9iamVjdD47XG4gIGRhdGFTcGVjaWFsaXphdGlvbj86IHN0cmluZztcbiAgZGF0YVR5cGU/OiBzdHJpbmc7XG4gIG1ldGFUeXBlPzogc3RyaW5nO1xuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgdG9vbHRpcFBvc2l0aW9uPzogc3RyaW5nO1xuICB0b29sdGlwU2l6ZT86IHN0cmluZztcbiAgdG9vbHRpcFByZWxpbmU/OiBib29sZWFuO1xuICByZW1vdmVUb29sdGlwQXJyb3c/OiBib29sZWFuO1xuICB0b29sdGlwQXV0b1Bvc2l0aW9uPzogYm9vbGVhbjtcbiAgbGF5b3V0T3B0aW9ucz86IHtcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZWRpdD86IGJvb2xlYW47XG4gICAgY3VzdG9tQWN0aW9ucz86IGJvb2xlYW47XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGljb25TdHlsZT86IHN0cmluZztcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICB9O1xuICB0ZW1wbGF0ZT86IGFueTtcbiAgY3VzdG9tQ29udHJvbENvbmZpZz86IGFueTtcbiAgY3VzdG9tQ29udHJvbD86IGFueTtcbiAgbWlsaXRhcnk/OiBib29sZWFuO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICB0ZXh0TWFza0VuYWJsZWQ/OiBib29sZWFuO1xuICBtYXNrT3B0aW9ucz86IElNYXNrT3B0aW9ucztcbiAgYWxsb3dJbnZhbGlkRGF0ZT86IGJvb2xlYW47XG4gIHRpcFdlbGw/OiB7XG4gICAgdGlwOiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBidXR0b24/OiBib29sZWFuO1xuICB9O1xuICB3aWR0aD86IG51bWJlcjtcbiAgc3RhcnR1cEZvY3VzPzogYm9vbGVhbjtcbiAgZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybD86IHN0cmluZztcbiAgaXNFbXB0eT86IEZ1bmN0aW9uO1xuICBzdGFydERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBlbmREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29udHJvbCB7XG4gIF9fdHlwZTogc3RyaW5nID0gJ0Jhc2VDb250cm9sJztcbiAgX19jb25maWc6IE5vdm9Db250cm9sQ29uZmlnO1xuXG4gIHZhbGlkYXRvcnM6IEFycmF5PGFueT47XG4gIGFzeW5jVmFsaWRhdG9ycz86IEFycmF5PGFueT47XG4gIHZhbHVlOiBhbnk7XG4gIGtleTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGVja2JveExhYmVsOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIGVuY3J5cHRlZDogYm9vbGVhbjtcbiAgc29ydE9yZGVyOiBudW1iZXI7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmc7XG4gIG1ldGFUeXBlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIGNvbmZpZzogYW55O1xuICBkaXJ0eTogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBjdXJyZW5jeUZvcm1hdDogc3RyaW5nO1xuICBhc3NvY2lhdGVkRW50aXR5OiBzdHJpbmc7XG4gIG9wdGlvbnNUeXBlOiBzdHJpbmc7XG4gIGZvcmNlQ2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIHR5cGU6IHN0cmluZztcbiAgc3ViVHlwZT86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcmVhZE9ubHk6IGJvb2xlYW47IC8vIFwiZGlzYWJsZWRcIiwgc28gaXQgYXBwZWFycyBpbiB0aGUgbW9kZWwgc3RpbGxcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbjtcbiAgaW50ZXJhY3Rpb25zOiBBcnJheTxPYmplY3Q+O1xuICBkYXRhU3BlY2lhbGl6YXRpb246IHN0cmluZztcbiAgZGF0YVR5cGU6IHN0cmluZztcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICB0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG4gIHRvb2x0aXBTaXplPzogc3RyaW5nO1xuICB0b29sdGlwUHJlbGluZT86IGJvb2xlYW47XG4gIHJlbW92ZVRvb2x0aXBBcnJvdz86IGJvb2xlYW47XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICBsYXlvdXRPcHRpb25zPzoge1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgaWNvblN0eWxlPzogc3RyaW5nO1xuICAgIHJlbW92YWJsZT86IGJvb2xlYW47XG4gIH07XG4gIHRlbXBsYXRlPzogYW55O1xuICBjdXN0b21Db250cm9sQ29uZmlnPzogYW55O1xuICBtaWxpdGFyeT86IGJvb2xlYW47XG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIG1hc2tPcHRpb25zPzogSU1hc2tPcHRpb25zO1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgdGlwV2VsbD86IHtcbiAgICB0aXA6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gIH07XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0YXJ0dXBGb2N1cz86IGJvb2xlYW47XG4gIGZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw/OiBzdHJpbmc7XG4gIGlzRW1wdHk/OiBGdW5jdGlvbjtcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgZW5kRGF0ZT86IERhdGUgfCBOdW1iZXI7XG4gIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZyA9ICdCYXNlQ29udHJvbCcsIGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcgPSB7fSkge1xuICAgIHRoaXMuX190eXBlID0gdHlwZTtcbiAgICB0aGlzLl9fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbmZpZy52YWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMuYXN5bmNWYWxpZGF0b3JzID0gY29uZmlnLmFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIHRoaXMua2V5ID0gY29uZmlnLmtleSB8fCAnJztcbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsIHx8ICcnO1xuICAgIHRoaXMuY2hlY2tib3hMYWJlbCA9IGNvbmZpZy5jaGVja2JveExhYmVsO1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8ICcnO1xuICAgIHRoaXMucmVxdWlyZWQgPSAhIWNvbmZpZy5yZXF1aXJlZDtcbiAgICB0aGlzLmhpZGRlbiA9ICEhY29uZmlnLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9ICEhY29uZmlnLmVuY3J5cHRlZDtcbiAgICB0aGlzLnNvcnRPcmRlciA9IGNvbmZpZy5zb3J0T3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiBjb25maWcuc29ydE9yZGVyO1xuICAgIHRoaXMuY29udHJvbFR5cGUgPSBjb25maWcuY29udHJvbFR5cGUgfHwgJyc7XG4gICAgdGhpcy5tZXRhVHlwZSA9IGNvbmZpZy5tZXRhVHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyIHx8ICcnO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnLmNvbmZpZyB8fCBudWxsO1xuICAgIHRoaXMuZGlydHkgPSAhIWNvbmZpZy52YWx1ZTtcbiAgICB0aGlzLm11bHRpcGxlID0gISFjb25maWcubXVsdGlwbGU7XG4gICAgdGhpcy5oZWFkZXJDb25maWcgPSBjb25maWcuaGVhZGVyQ29uZmlnIHx8IG51bGw7XG4gICAgdGhpcy5jdXJyZW5jeUZvcm1hdCA9IGNvbmZpZy5jdXJyZW5jeUZvcm1hdCB8fCBudWxsO1xuICAgIHRoaXMuYXNzb2NpYXRlZEVudGl0eSA9IGNvbmZpZy5hc3NvY2lhdGVkRW50aXR5IHx8IG51bGw7XG4gICAgdGhpcy5vcHRpb25zVHlwZSA9IGNvbmZpZy5vcHRpb25zVHlwZSB8fCBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuZm9yY2VDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnJlYWRPbmx5ID0gISFjb25maWcucmVhZE9ubHkgfHwgISFjb25maWcuZGlzYWJsZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEhY29uZmlnLmRpc2FibGVkO1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IGNvbmZpZy5sYXlvdXRPcHRpb25zIHx8IHt9O1xuICAgIHRoaXMubWlsaXRhcnkgPSAhIWNvbmZpZy5taWxpdGFyeTtcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb25maWcuZGF0ZUZvcm1hdDtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbmZpZy50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy5tYXNrT3B0aW9ucyA9IGNvbmZpZy5tYXNrT3B0aW9ucztcbiAgICB0aGlzLmFsbG93SW52YWxpZERhdGUgPSBjb25maWcuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGNvbmZpZy5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gY29uZmlnLmVuZERhdGU7XG4gICAgdGhpcy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zID0gISFjb25maWcucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucztcblxuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICB9XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoY29uZmlnLm1heGxlbmd0aCkpIHtcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gY29uZmlnLm1heGxlbmd0aDtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHRoaXMubWF4bGVuZ3RoKSk7XG4gICAgfVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKGNvbmZpZy5taW5sZW5ndGgpKSB7XG4gICAgICB0aGlzLm1pbmxlbmd0aCA9IGNvbmZpZy5taW5sZW5ndGg7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLm1pbmxlbmd0aCkpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlT25TZWxlY3QgPSAhIWNvbmZpZy5jbG9zZU9uU2VsZWN0O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25zID0gY29uZmlnLmludGVyYWN0aW9ucztcbiAgICB0aGlzLmRhdGFTcGVjaWFsaXphdGlvbiA9IGNvbmZpZy5kYXRhU3BlY2lhbGl6YXRpb247XG4gICAgdGhpcy5kYXRhVHlwZSA9IGNvbmZpZy5kYXRhVHlwZTtcbiAgICB0aGlzLmFwcGVuZFRvQm9keSA9ICEhY29uZmlnLmFwcGVuZFRvQm9keTtcbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnRTY3JvbGxTZWxlY3RvciA9IGNvbmZpZy5wYXJlbnRTY3JvbGxTZWxlY3RvcjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIGlmIChjb25maWcudG9vbHRpcCkge1xuICAgICAgdGhpcy50b29sdGlwID0gY29uZmlnLnRvb2x0aXA7XG4gICAgICB0aGlzLnRvb2x0aXBQb3NpdGlvbiA9IGNvbmZpZy50b29sdGlwUG9zaXRpb247XG4gICAgICB0aGlzLnRvb2x0aXBTaXplID0gY29uZmlnLnRvb2x0aXBTaXplO1xuICAgICAgdGhpcy50b29sdGlwUHJlbGluZSA9IGNvbmZpZy50b29sdGlwUHJlbGluZTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcEFycm93ID0gY29uZmlnLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgICAgIHRoaXMudG9vbHRpcEF1dG9Qb3NpdGlvbiA9IGNvbmZpZy50b29sdGlwQXV0b1Bvc2l0aW9uO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIHRoaXMuY3VzdG9tQ29udHJvbENvbmZpZyA9IGNvbmZpZy5jdXN0b21Db250cm9sQ29uZmlnO1xuICAgIHRoaXMudGlwV2VsbCA9IGNvbmZpZy50aXBXZWxsO1xuICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgdGhpcy5zdGFydHVwRm9jdXMgPSAhIWNvbmZpZy5zdGFydHVwRm9jdXM7XG4gICAgaWYgKGNvbmZpZy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsKSB7XG4gICAgICB0aGlzLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwgPSBjb25maWcuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybDtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5pc0VtcHR5KSB7XG4gICAgICB0aGlzLmlzRW1wdHkgPSBjb25maWcuaXNFbXB0eTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==