// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoDatePickerElement } from './DatePicker';
import { NovoDatePickerInputElement } from './DatePickerInput';
import * as i0 from "@angular/core";
var NovoDatePickerModule = /** @class */ (function () {
    function NovoDatePickerModule() {
    }
    NovoDatePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoDatePickerModule });
    NovoDatePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoDatePickerModule_Factory(t) { return new (t || NovoDatePickerModule)(); }, imports: [[CommonModule, FormsModule, NovoOverlayModule, TextMaskModule]] });
    return NovoDatePickerModule;
}());
export { NovoDatePickerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoDatePickerModule, { declarations: [NovoDatePickerElement, NovoDatePickerInputElement], imports: [CommonModule, FormsModule, NovoOverlayModule, TextMaskModule], exports: [NovoDatePickerElement, NovoDatePickerInputElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoOverlayModule, TextMaskModule],
                declarations: [NovoDatePickerElement, NovoDatePickerInputElement],
                exports: [NovoDatePickerElement, NovoDatePickerInputElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxTQUFTO0FBQ1QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE1BQU07QUFDTixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRS9EO0lBQUE7S0FLb0M7NERBQXZCLG9CQUFvQjsySEFBcEIsb0JBQW9CLGtCQUp0QixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDOytCQVp6RTtDQWdCb0MsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CO3dGQUFwQixvQkFBb0IsbUJBSGhCLHFCQUFxQixFQUFFLDBCQUEwQixhQUR0RCxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsYUFFNUQscUJBQXFCLEVBQUUsMEJBQTBCO2tEQUVoRCxvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO2dCQUN2RSxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztnQkFDakUsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7YUFDN0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b092ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyRWxlbWVudCB9IGZyb20gJy4vRGF0ZVBpY2tlcic7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudCB9IGZyb20gJy4vRGF0ZVBpY2tlcklucHV0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9PdmVybGF5TW9kdWxlLCBUZXh0TWFza01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9EYXRlUGlja2VyRWxlbWVudCwgTm92b0RhdGVQaWNrZXJJbnB1dEVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b0RhdGVQaWNrZXJFbGVtZW50LCBOb3ZvRGF0ZVBpY2tlcklucHV0RWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlUGlja2VyTW9kdWxlIHt9XG4iXX0=