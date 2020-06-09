// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoDateTimePickerElement } from './DateTimePicker';
import { NovoDateTimePickerInputElement } from './DateTimePickerInput';
import { NovoDatePickerModule } from '../date-picker/DatePicker.module';
import { NovoTimePickerModule } from '../time-picker/TimePicker.module';
import * as i0 from "@angular/core";
var NovoDateTimePickerModule = /** @class */ (function () {
    function NovoDateTimePickerModule() {
    }
    NovoDateTimePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoDateTimePickerModule });
    NovoDateTimePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoDateTimePickerModule_Factory(t) { return new (t || NovoDateTimePickerModule)(); }, imports: [[CommonModule, FormsModule, NovoDatePickerModule, NovoTimePickerModule, TextMaskModule, NovoOverlayModule]] });
    return NovoDateTimePickerModule;
}());
export { NovoDateTimePickerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoDateTimePickerModule, { declarations: [NovoDateTimePickerElement, NovoDateTimePickerInputElement], imports: [CommonModule, FormsModule, NovoDatePickerModule, NovoTimePickerModule, TextMaskModule, NovoOverlayModule], exports: [NovoDateTimePickerElement, NovoDateTimePickerInputElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDateTimePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoDatePickerModule, NovoTimePickerModule, TextMaskModule, NovoOverlayModule],
                declarations: [NovoDateTimePickerElement, NovoDateTimePickerInputElement],
                exports: [NovoDateTimePickerElement, NovoDateTimePickerInputElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGUtdGltZS1waWNrZXIvRGF0ZVRpbWVQaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsU0FBUztBQUNULE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRXhFO0lBQUE7S0FLd0M7Z0VBQTNCLHdCQUF3QjttSUFBeEIsd0JBQXdCLGtCQUoxQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDO21DQWRySDtDQWtCd0MsQUFMeEMsSUFLd0M7U0FBM0Isd0JBQXdCO3dGQUF4Qix3QkFBd0IsbUJBSHBCLHlCQUF5QixFQUFFLDhCQUE4QixhQUQ5RCxZQUFZLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsYUFFeEcseUJBQXlCLEVBQUUsOEJBQThCO2tEQUV4RCx3QkFBd0I7Y0FMcEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDO2dCQUNuSCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSw4QkFBOEIsQ0FBQztnQkFDekUsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUsOEJBQThCLENBQUM7YUFDckUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b092ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlVGltZVBpY2tlckVsZW1lbnQgfSBmcm9tICcuL0RhdGVUaW1lUGlja2VyJztcbmltcG9ydCB7IE5vdm9EYXRlVGltZVBpY2tlcklucHV0RWxlbWVudCB9IGZyb20gJy4vRGF0ZVRpbWVQaWNrZXJJbnB1dCc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vdGltZS1waWNrZXIvVGltZVBpY2tlci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTm92b0RhdGVQaWNrZXJNb2R1bGUsIE5vdm9UaW1lUGlja2VyTW9kdWxlLCBUZXh0TWFza01vZHVsZSwgTm92b092ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50LCBOb3ZvRGF0ZVRpbWVQaWNrZXJJbnB1dEVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b0RhdGVUaW1lUGlja2VyRWxlbWVudCwgTm92b0RhdGVUaW1lUGlja2VySW5wdXRFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVUaW1lUGlja2VyTW9kdWxlIHt9XG4iXX0=