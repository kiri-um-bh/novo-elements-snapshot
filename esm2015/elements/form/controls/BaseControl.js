/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
class ControlConfig {
}
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
}
export class BaseControl extends ControlConfig {
    /**
     * @param {?=} type
     * @param {?=} config
     */
    constructor(type = 'BaseControl', config = {}) {
        super();
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
        this.type = config.type;
        this.subType = config.subType;
        this.metaType = config.metaType;
        this.placeholder = config.placeholder || '';
        this.config = config.config || null;
        this.dirty = !!(config.value !== undefined && config.value !== null);
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
        if (!Helpers.isEmpty(config.warning)) {
            this.warning = config.warning;
        }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBRy9ELDhDQU9DOzs7SUFOQyx5Q0FBZTs7SUFDZix3Q0FBYzs7SUFDZCx1Q0FBZ0M7O0lBQ2hDLDBDQUFpQjs7SUFDakIsdUNBQVk7O0lBQ1osZ0RBQW9COztBQUd0QixNQUFNLGFBQWE7Q0E0RWxCOzs7SUEzRUMseUNBQTJCOztJQUMzQixxQ0FBc0I7O0lBQ3RCLHlDQUF5Qjs7SUFDekIsd0NBQTZCOztJQUM3QixzQ0FBc0I7O0lBQ3RCLHNDQUF1Qjs7SUFDdkIsK0JBQVk7O0lBQ1osb0NBQW9COztJQUNwQix1Q0FBdUI7O0lBQ3ZCLHNDQUFvQjs7SUFDcEIsNENBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLGlDQUFpQjs7SUFDakIsbUNBQW9COztJQUNwQixvQ0FBcUI7O0lBQ3JCLDhCQUFlOztJQUNmLGlDQUFrQjs7SUFDbEIsa0NBQW1COztJQUNuQixnQ0FBd0I7O0lBQ3hCLGtEQUFtQzs7SUFDbkMsbUNBQThCOztJQUM5QixxQ0FBa0I7O0lBQ2xCLCtCQUFnQjs7SUFDaEIscUNBQTRCOztJQUM1QixnQ0FBbUI7O0lBQ25CLDRCQUFZOztJQUNaLDhCQUFjOztJQUNkLG9DQUEyQjs7SUFDM0Isa0NBQWtCOztJQUNsQixpQ0FBaUI7O0lBQ2pCLGlDQUFtQjs7SUFDbkIsa0NBQWtCOztJQUNsQixpQ0FBa0I7O0lBQ2xCLDZCQUFhOztJQUNiLGdDQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQiw2Q0FBNkI7O0lBQzdCLG9DQUFvQjs7SUFDcEIsaUNBQWtCOztJQUNsQiwyQ0FBNkI7O0lBQzdCLGlDQUFrQjs7SUFDbEIsa0RBQW9DOztJQUNwQyxrQ0FBa0I7O0lBQ2xCLGtDQUEwQjs7SUFDMUIscUNBQXVCOztJQUN2QixnQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLHdDQUEwQjs7SUFDMUIsZ0NBQWlCOztJQUNqQiw0Q0FBOEI7O0lBQzlCLHdDQUF5Qjs7SUFDekIsdUNBQXlCOztJQUN6QixvQ0FBcUI7O0lBQ3JCLDZCQUFhOztJQUNiLG1DQUF1Qjs7SUFDdkIsOEJBQVc7O0lBQ1gsZ0NBQWlCOztJQUNqQiw4QkFBYzs7SUFDZCxzQ0FXRTs7SUFDRixnQ0FJRTs7QUFLSixNQUFNLE9BQU8sV0FBWSxTQUFRLGFBQWE7Ozs7O0lBSTVDLFlBQVksT0FBZSxhQUFhLEVBQUUsU0FBNEIsRUFBRTtRQUN0RSxLQUFLLEVBQUUsQ0FBQztRQUpWLFdBQU0sR0FBVyxhQUFhLENBQUM7UUFLN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsTUFBTSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7U0FDN0U7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDcEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRTtZQUNwQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1NBQ25FO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRjs7O0lBeEZDLDZCQUErQjs7SUFDL0IsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWcgfSBmcm9tICcuLi9Db250cm9sR3JvdXAnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuLi9Db250cm9sJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvR3JvdXBlZENvbnRyb2xDb25maWcge1xuICBsYWJlbD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgYWRkPzogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgcmVtb3ZlPzogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIGluaXRpYWxWYWx1ZT86IHt9W107XG59XG5cbmNsYXNzIENvbnRyb2xDb25maWcge1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkO1xuICBhc3NvY2lhdGVkRW50aXR5OiBzdHJpbmc7XG4gIGFzeW5jVmFsaWRhdG9ycz86IEFycmF5PGFueT47XG4gIGNoZWNrYm94TGFiZWw6IHN0cmluZztcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbjtcbiAgY29uZmlnOiBhbnk7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmc7XG4gIGN1cnJlbmN5Rm9ybWF0OiBzdHJpbmc7XG4gIGN1c3RvbUNvbnRyb2w/OiBhbnk7XG4gIGN1c3RvbUNvbnRyb2xDb25maWc/OiBhbnk7XG4gIGRhdGFTcGVjaWFsaXphdGlvbjogc3RyaW5nO1xuICBkYXRhVHlwZTogc3RyaW5nO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZGlydHk6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBlbmNyeXB0ZWQ6IGJvb2xlYW47XG4gIGVuZERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBmaWxlQnJvd3NlckltYWdlVXBsb2FkVXJsPzogc3RyaW5nO1xuICBmb3JjZUNsZWFyOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgaGVhZGVyQ29uZmlnOiBhbnk7XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgaW50ZXJhY3Rpb25zOiBBcnJheTxPYmplY3Q+O1xuICBpc0VtcHR5PzogRnVuY3Rpb247XG4gIGtleTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBtYXNrT3B0aW9ucz86IElNYXNrT3B0aW9ucztcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIG1ldGFUeXBlOiBzdHJpbmc7XG4gIG1pbGl0YXJ5PzogYm9vbGVhbjtcbiAgbWlubGVuZ3RoOiBudW1iZXI7XG4gIG11bHRpcGxlOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIG9wdGlvbnNUeXBlOiBzdHJpbmc7XG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRPbmx5OiBib29sZWFuOyAvLyBcImRpc2FibGVkXCIsIHNvIGl0IGFwcGVhcnMgaW4gdGhlIG1vZGVsIHN0aWxsO1xuICByZW1vdmVUb29sdGlwQXJyb3c/OiBib29sZWFuO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucz86IGJvb2xlYW47XG4gIHNvcnRPcmRlcjogbnVtYmVyO1xuICBzdGFydERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBzdGFydHVwRm9jdXM/OiBib29sZWFuO1xuICBzdWJUeXBlPzogc3RyaW5nO1xuICB0ZW1wbGF0ZT86IGFueTtcbiAgdGV4dE1hc2tFbmFibGVkPzogYm9vbGVhbjtcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgdG9vbHRpcEF1dG9Qb3NpdGlvbj86IGJvb2xlYW47XG4gIHRvb2x0aXBQb3NpdGlvbj86IHN0cmluZztcbiAgdG9vbHRpcFByZWxpbmU/OiBib29sZWFuO1xuICB0b29sdGlwU2l6ZT86IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB2YWxpZGF0b3JzOiBBcnJheTxhbnk+O1xuICB2YWx1ZTogYW55O1xuICB3YXJuaW5nPzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBsYXlvdXRPcHRpb25zPzoge1xuICAgIGN1c3RvbUFjdGlvbnM/OiBib29sZWFuO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGVkaXQ/OiBib29sZWFuO1xuICAgIGljb25TdHlsZT86IHN0cmluZztcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIHJlbW92YWJsZT86IGJvb2xlYW47XG4gICAgY3VzdG9tVmFsaWRhdGlvbj86IHsgYWN0aW9uOiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W107XG4gICAgcmVtb3ZhYmxlV2hlbk5ldz86IGJvb2xlYW47XG4gIH07XG4gIHRpcFdlbGw/OiB7XG4gICAgYnV0dG9uPzogYm9vbGVhbjtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHRpcDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBOb3ZvQ29udHJvbENvbmZpZyA9IFBhcnRpYWw8Q29udHJvbENvbmZpZz47XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb25maWcge1xuICBfX3R5cGU6IHN0cmluZyA9ICdCYXNlQ29udHJvbCc7XG4gIF9fY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcgPSAnQmFzZUNvbnRyb2wnLCBjb25maWc6IE5vdm9Db250cm9sQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX190eXBlID0gdHlwZTtcbiAgICB0aGlzLl9fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IGNvbmZpZy52YWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMuYXN5bmNWYWxpZGF0b3JzID0gY29uZmlnLmFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIHRoaXMua2V5ID0gY29uZmlnLmtleSB8fCAnJztcbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsIHx8ICcnO1xuICAgIHRoaXMuY2hlY2tib3hMYWJlbCA9IGNvbmZpZy5jaGVja2JveExhYmVsO1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8ICcnO1xuICAgIHRoaXMucmVxdWlyZWQgPSAhIWNvbmZpZy5yZXF1aXJlZDtcbiAgICB0aGlzLmhpZGRlbiA9ICEhY29uZmlnLmhpZGRlbjtcbiAgICB0aGlzLmVuY3J5cHRlZCA9ICEhY29uZmlnLmVuY3J5cHRlZDtcbiAgICB0aGlzLnNvcnRPcmRlciA9IGNvbmZpZy5zb3J0T3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiBjb25maWcuc29ydE9yZGVyO1xuICAgIHRoaXMuY29udHJvbFR5cGUgPSBjb25maWcuY29udHJvbFR5cGUgfHwgJyc7XG4gICAgdGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG4gICAgdGhpcy5zdWJUeXBlID0gY29uZmlnLnN1YlR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IGNvbmZpZy5tZXRhVHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyIHx8ICcnO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnLmNvbmZpZyB8fCBudWxsO1xuICAgIHRoaXMuZGlydHkgPSAhIShjb25maWcudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcudmFsdWUgIT09IG51bGwpO1xuICAgIHRoaXMubXVsdGlwbGUgPSAhIWNvbmZpZy5tdWx0aXBsZTtcbiAgICB0aGlzLmhlYWRlckNvbmZpZyA9IGNvbmZpZy5oZWFkZXJDb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmN1cnJlbmN5Rm9ybWF0ID0gY29uZmlnLmN1cnJlbmN5Rm9ybWF0IHx8IG51bGw7XG4gICAgdGhpcy5hc3NvY2lhdGVkRW50aXR5ID0gY29uZmlnLmFzc29jaWF0ZWRFbnRpdHkgfHwgbnVsbDtcbiAgICB0aGlzLm9wdGlvbnNUeXBlID0gY29uZmlnLm9wdGlvbnNUeXBlIHx8IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5mb3JjZUNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMucmVhZE9ubHkgPSAhIWNvbmZpZy5yZWFkT25seSB8fCAhIWNvbmZpZy5kaXNhYmxlZDtcbiAgICB0aGlzLmRpc2FibGVkID0gISFjb25maWcuZGlzYWJsZWQ7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gY29uZmlnLmxheW91dE9wdGlvbnMgfHwge307XG4gICAgdGhpcy5taWxpdGFyeSA9ICEhY29uZmlnLm1pbGl0YXJ5O1xuICAgIHRoaXMuZGF0ZUZvcm1hdCA9IGNvbmZpZy5kYXRlRm9ybWF0O1xuICAgIHRoaXMudGV4dE1hc2tFbmFibGVkID0gY29uZmlnLnRleHRNYXNrRW5hYmxlZDtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0gY29uZmlnLm1hc2tPcHRpb25zO1xuICAgIHRoaXMuYWxsb3dJbnZhbGlkRGF0ZSA9IGNvbmZpZy5hbGxvd0ludmFsaWREYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gY29uZmlnLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLmVuZERhdGUgPSBjb25maWcuZW5kRGF0ZTtcbiAgICB0aGlzLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMgPSAhIWNvbmZpZy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KGNvbmZpZy53YXJuaW5nKSkge1xuICAgICAgdGhpcy53YXJuaW5nID0gY29uZmlnLndhcm5pbmc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgIH1cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhjb25maWcubWF4bGVuZ3RoKSkge1xuICAgICAgdGhpcy5tYXhsZW5ndGggPSBjb25maWcubWF4bGVuZ3RoO1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5tYXhsZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoY29uZmlnLm1pbmxlbmd0aCkpIHtcbiAgICAgIHRoaXMubWlubGVuZ3RoID0gY29uZmlnLm1pbmxlbmd0aDtcbiAgICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWlubGVuZ3RoKSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPblNlbGVjdCA9ICEhY29uZmlnLmNsb3NlT25TZWxlY3Q7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnMgPSBjb25maWcuaW50ZXJhY3Rpb25zO1xuICAgIHRoaXMuZGF0YVNwZWNpYWxpemF0aW9uID0gY29uZmlnLmRhdGFTcGVjaWFsaXphdGlvbjtcbiAgICB0aGlzLmRhdGFUeXBlID0gY29uZmlnLmRhdGFUeXBlO1xuICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID0gISFjb25maWcuYXBwZW5kVG9Cb2R5O1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yID0gY29uZmlnLnBhcmVudFNjcm9sbFNlbGVjdG9yO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgaWYgKGNvbmZpZy50b29sdGlwKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBjb25maWcudG9vbHRpcDtcbiAgICAgIHRoaXMudG9vbHRpcFBvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBQb3NpdGlvbjtcbiAgICAgIHRoaXMudG9vbHRpcFNpemUgPSBjb25maWcudG9vbHRpcFNpemU7XG4gICAgICB0aGlzLnRvb2x0aXBQcmVsaW5lID0gY29uZmlnLnRvb2x0aXBQcmVsaW5lO1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwQXJyb3cgPSBjb25maWcucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgICAgdGhpcy50b29sdGlwQXV0b1Bvc2l0aW9uID0gY29uZmlnLnRvb2x0aXBBdXRvUG9zaXRpb247XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgdGhpcy5jdXN0b21Db250cm9sQ29uZmlnID0gY29uZmlnLmN1c3RvbUNvbnRyb2xDb25maWc7XG4gICAgdGhpcy50aXBXZWxsID0gY29uZmlnLnRpcFdlbGw7XG4gICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICB0aGlzLnN0YXJ0dXBGb2N1cyA9ICEhY29uZmlnLnN0YXJ0dXBGb2N1cztcbiAgICBpZiAoY29uZmlnLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwpIHtcbiAgICAgIHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCA9IGNvbmZpZy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eSA9IGNvbmZpZy5pc0VtcHR5O1xuICAgIH1cbiAgfVxufVxuIl19