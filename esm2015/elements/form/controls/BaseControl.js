// NG2
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
// APP
import { Helpers } from '../../../utils/Helpers';
import { notify } from '../../../utils/notifier/notifier.util';
class ControlConfig {
    constructor() {
        this.isEmbedded = false;
        this.isInlineEmbedded = false;
        this.highlighted = false;
    }
}
export class BaseControl extends ControlConfig {
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
        this.highlighted = !!config.highlighted;
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
        this.weekStart = config.weekStart || 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9CYXNlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFZL0QsTUFBTSxhQUFhO0lBQW5CO1FBNkVFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FBQTtBQUlELE1BQU0sT0FBTyxXQUFZLFNBQVEsYUFBYTtJQUk1QyxZQUFZLE9BQWUsYUFBYSxFQUFFLFNBQTRCLEVBQUU7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFKVixXQUFNLEdBQVcsYUFBYSxDQUFDO1FBSzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLEVB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LElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWcgfSBmcm9tICcuLi9Db250cm9sR3JvdXAnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBJTWFza09wdGlvbnMgfSBmcm9tICcuLi9Db250cm9sJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvR3JvdXBlZENvbnRyb2xDb25maWcge1xuICBsYWJlbD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgYWRkPzogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgcmVtb3ZlPzogYm9vbGVhbjtcbiAga2V5OiBzdHJpbmc7XG4gIGluaXRpYWxWYWx1ZT86IHt9W107XG59XG5cbmNsYXNzIENvbnRyb2xDb25maWcge1xuICBhbGxvd0ludmFsaWREYXRlPzogYm9vbGVhbjtcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuOyAvLyBEZXByZWNhdGVkO1xuICBhc3NvY2lhdGVkRW50aXR5OiBzdHJpbmc7XG4gIGFzeW5jVmFsaWRhdG9ycz86IEFycmF5PGFueT47XG4gIGNoZWNrYm94TGFiZWw6IHN0cmluZztcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbjtcbiAgY29uZmlnOiBhbnk7XG4gIGNvbnRyb2xUeXBlOiBzdHJpbmc7XG4gIGN1cnJlbmN5Rm9ybWF0OiBzdHJpbmc7XG4gIGN1c3RvbUNvbnRyb2w/OiBhbnk7XG4gIGN1c3RvbUNvbnRyb2xDb25maWc/OiBhbnk7XG4gIGRhdGFTcGVjaWFsaXphdGlvbjogc3RyaW5nO1xuICBkYXRhVHlwZTogc3RyaW5nO1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZGlydHk6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBlbmNyeXB0ZWQ6IGJvb2xlYW47XG4gIGVuZERhdGU/OiBEYXRlIHwgTnVtYmVyO1xuICBmaWxlQnJvd3NlckltYWdlVXBsb2FkVXJsPzogc3RyaW5nO1xuICBmb3JjZUNsZWFyOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgaGVhZGVyQ29uZmlnOiBhbnk7XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgaW50ZXJhY3Rpb25zOiBBcnJheTx7IGV2ZW50PzogJ2NoYW5nZScgfCAnZm9jdXMnIHwgc3RyaW5nLCBpbnZva2VPbkluaXQ/OiBib29sZWFuLCBzY3JpcHQ/IH0+O1xuICBpc0VtcHR5PzogRnVuY3Rpb247XG4gIGtleTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBtYXNrT3B0aW9ucz86IElNYXNrT3B0aW9ucztcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIG1ldGFUeXBlOiBzdHJpbmc7XG4gIG1pbGl0YXJ5PzogYm9vbGVhbjtcbiAgbWluaW1hbD86IGJvb2xlYW47XG4gIG1pbmxlbmd0aDogbnVtYmVyO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICBvcHRpb25zVHlwZTogc3RyaW5nO1xuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkT25seTogYm9vbGVhbjsgLy8gXCJkaXNhYmxlZFwiLCBzbyBpdCBhcHBlYXJzIGluIHRoZSBtb2RlbCBzdGlsbDtcbiAgcmVtb3ZlVG9vbHRpcEFycm93PzogYm9vbGVhbjtcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM/OiBib29sZWFuO1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgc3RhcnREYXRlPzogRGF0ZSB8IE51bWJlcjtcbiAgc3RhcnR1cEZvY3VzPzogYm9vbGVhbjtcbiAgc3ViVHlwZT86IHN0cmluZztcbiAgdGVtcGxhdGU/OiBhbnk7XG4gIHRleHRNYXNrRW5hYmxlZD86IGJvb2xlYW47XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIHRvb2x0aXBBdXRvUG9zaXRpb24/OiBib29sZWFuO1xuICB0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG4gIHRvb2x0aXBQcmVsaW5lPzogYm9vbGVhbjtcbiAgdG9vbHRpcFNpemU/OiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsaWRhdG9yczogQXJyYXk8YW55PjtcbiAgdmFsdWU6IGFueTtcbiAgd2FybmluZz86IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgbGF5b3V0T3B0aW9ucz86IHtcbiAgICBjdXN0b21BY3Rpb25zPzogYm9vbGVhbjtcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBpY29uU3R5bGU/OiBzdHJpbmc7XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbVZhbGlkYXRpb24/OiB7IGFjdGlvbjogc3RyaW5nOyBmbjogRnVuY3Rpb24gfVtdO1xuICAgIHJlbW92YWJsZVdoZW5OZXc/OiBib29sZWFuO1xuICB9O1xuICB0aXBXZWxsPzoge1xuICAgIGJ1dHRvbj86IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICB0aXA6IHN0cmluZztcbiAgfTtcbiAgaXNFbWJlZGRlZCA9IGZhbHNlO1xuICBpc0lubGluZUVtYmVkZGVkID0gZmFsc2U7XG4gIHdlZWtTdGFydD86IG51bWJlcjtcbiAgaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbn1cblxuZXhwb3J0IHR5cGUgTm92b0NvbnRyb2xDb25maWcgPSBQYXJ0aWFsPENvbnRyb2xDb25maWc+O1xuXG5leHBvcnQgY2xhc3MgQmFzZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29uZmlnIHtcbiAgX190eXBlOiBzdHJpbmcgPSAnQmFzZUNvbnRyb2wnO1xuICBfX2NvbmZpZzogTm92b0NvbnRyb2xDb25maWc7XG5cbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nID0gJ0Jhc2VDb250cm9sJywgY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBjb25maWcudmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLmFzeW5jVmFsaWRhdG9ycyA9IGNvbmZpZy5hc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcbiAgICB0aGlzLmtleSA9IGNvbmZpZy5rZXkgfHwgJyc7XG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbCB8fCAnJztcbiAgICB0aGlzLmNoZWNrYm94TGFiZWwgPSBjb25maWcuY2hlY2tib3hMYWJlbDtcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZSB8fCAnJztcbiAgICB0aGlzLnJlcXVpcmVkID0gISFjb25maWcucmVxdWlyZWQ7XG4gICAgdGhpcy5oaWRkZW4gPSAhIWNvbmZpZy5oaWRkZW47XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSAhIWNvbmZpZy5lbmNyeXB0ZWQ7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBjb25maWcuc29ydE9yZGVyID09PSB1bmRlZmluZWQgPyAxIDogY29uZmlnLnNvcnRPcmRlcjtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gY29uZmlnLmNvbnRyb2xUeXBlIHx8ICcnO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuc3ViVHlwZSA9IGNvbmZpZy5zdWJUeXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBjb25maWcubWV0YVR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWcgfHwgbnVsbDtcbiAgICB0aGlzLmRpcnR5ID0gISEoY29uZmlnLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnZhbHVlICE9PSBudWxsKTtcbiAgICB0aGlzLm11bHRpcGxlID0gISFjb25maWcubXVsdGlwbGU7XG4gICAgdGhpcy5oZWFkZXJDb25maWcgPSBjb25maWcuaGVhZGVyQ29uZmlnIHx8IG51bGw7XG4gICAgdGhpcy5jdXJyZW5jeUZvcm1hdCA9IGNvbmZpZy5jdXJyZW5jeUZvcm1hdCB8fCBudWxsO1xuICAgIHRoaXMuYXNzb2NpYXRlZEVudGl0eSA9IGNvbmZpZy5hc3NvY2lhdGVkRW50aXR5IHx8IG51bGw7XG4gICAgdGhpcy5vcHRpb25zVHlwZSA9IGNvbmZpZy5vcHRpb25zVHlwZSB8fCBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuZm9yY2VDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnJlYWRPbmx5ID0gISFjb25maWcucmVhZE9ubHkgfHwgISFjb25maWcuZGlzYWJsZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEhY29uZmlnLmRpc2FibGVkO1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IGNvbmZpZy5sYXlvdXRPcHRpb25zIHx8IHt9O1xuICAgIHRoaXMubWlsaXRhcnkgPSAhIWNvbmZpZy5taWxpdGFyeTtcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb25maWcuZGF0ZUZvcm1hdDtcbiAgICB0aGlzLnRleHRNYXNrRW5hYmxlZCA9IGNvbmZpZy50ZXh0TWFza0VuYWJsZWQ7XG4gICAgdGhpcy5tYXNrT3B0aW9ucyA9IGNvbmZpZy5tYXNrT3B0aW9ucztcbiAgICB0aGlzLmFsbG93SW52YWxpZERhdGUgPSBjb25maWcuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGNvbmZpZy5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gY29uZmlnLmVuZERhdGU7XG4gICAgdGhpcy5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zID0gISFjb25maWcucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucztcbiAgICB0aGlzLmhpZ2hsaWdodGVkID0gISFjb25maWcuaGlnaGxpZ2h0ZWQ7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoY29uZmlnLndhcm5pbmcpKSB7XG4gICAgICB0aGlzLndhcm5pbmcgPSBjb25maWcud2FybmluZztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgfVxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKGNvbmZpZy5tYXhsZW5ndGgpKSB7XG4gICAgICB0aGlzLm1heGxlbmd0aCA9IGNvbmZpZy5tYXhsZW5ndGg7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLm1heGxlbmd0aCkpO1xuICAgIH1cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhjb25maWcubWlubGVuZ3RoKSkge1xuICAgICAgdGhpcy5taW5sZW5ndGggPSBjb25maWcubWlubGVuZ3RoO1xuICAgICAgdGhpcy52YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5taW5sZW5ndGgpKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZU9uU2VsZWN0ID0gISFjb25maWcuY2xvc2VPblNlbGVjdDtcbiAgICB0aGlzLmludGVyYWN0aW9ucyA9IGNvbmZpZy5pbnRlcmFjdGlvbnM7XG4gICAgdGhpcy5kYXRhU3BlY2lhbGl6YXRpb24gPSBjb25maWcuZGF0YVNwZWNpYWxpemF0aW9uO1xuICAgIHRoaXMuZGF0YVR5cGUgPSBjb25maWcuZGF0YVR5cGU7XG4gICAgdGhpcy5hcHBlbmRUb0JvZHkgPSAhIWNvbmZpZy5hcHBlbmRUb0JvZHk7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IgPSBjb25maWcucGFyZW50U2Nyb2xsU2VsZWN0b3I7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICBpZiAoY29uZmlnLnRvb2x0aXApIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGNvbmZpZy50b29sdGlwO1xuICAgICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSBjb25maWcudG9vbHRpcFBvc2l0aW9uO1xuICAgICAgdGhpcy50b29sdGlwU2l6ZSA9IGNvbmZpZy50b29sdGlwU2l6ZTtcbiAgICAgIHRoaXMudG9vbHRpcFByZWxpbmUgPSBjb25maWcudG9vbHRpcFByZWxpbmU7XG4gICAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdyA9IGNvbmZpZy5yZW1vdmVUb29sdGlwQXJyb3c7XG4gICAgICB0aGlzLnRvb2x0aXBBdXRvUG9zaXRpb24gPSBjb25maWcudG9vbHRpcEF1dG9Qb3NpdGlvbjtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB0aGlzLmN1c3RvbUNvbnRyb2xDb25maWcgPSBjb25maWcuY3VzdG9tQ29udHJvbENvbmZpZztcbiAgICB0aGlzLnRpcFdlbGwgPSBjb25maWcudGlwV2VsbDtcbiAgICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIHRoaXMuc3RhcnR1cEZvY3VzID0gISFjb25maWcuc3RhcnR1cEZvY3VzO1xuICAgIGlmIChjb25maWcuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCkge1xuICAgICAgdGhpcy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gY29uZmlnLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgfVxuICAgIGlmIChjb25maWcuaXNFbXB0eSkge1xuICAgICAgdGhpcy5pc0VtcHR5ID0gY29uZmlnLmlzRW1wdHk7XG4gICAgfVxuICAgIHRoaXMud2Vla1N0YXJ0ID0gY29uZmlnLndlZWtTdGFydCB8fCAwO1xuICB9XG59XG4iXX0=