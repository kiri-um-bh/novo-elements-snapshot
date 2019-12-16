/**
 * @fileoverview added by tsickle
 * Generated from: elements/date-time-picker/DateTimePicker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var NovoDateTimePickerModule = /** @class */ (function () {
    function NovoDateTimePickerModule() {
    }
    NovoDateTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NovoDatePickerModule, NovoTimePickerModule, TextMaskModule, NovoOverlayModule],
                    declarations: [NovoDateTimePickerElement, NovoDateTimePickerInputElement],
                    exports: [NovoDateTimePickerElement, NovoDateTimePickerInputElement],
                },] }
    ];
    return NovoDateTimePickerModule;
}());
export { NovoDateTimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGUtdGltZS1waWNrZXIvRGF0ZVRpbWVQaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RTtJQUFBO0lBS3VDLENBQUM7O2dCQUx2QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7b0JBQ25ILFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLDhCQUE4QixDQUFDO29CQUN6RSxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSw4QkFBOEIsQ0FBQztpQkFDckU7O0lBQ3NDLCtCQUFDO0NBQUEsQUFMeEMsSUFLd0M7U0FBM0Isd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50IH0gZnJvbSAnLi9EYXRlVGltZVBpY2tlcic7XG5pbXBvcnQgeyBOb3ZvRGF0ZVRpbWVQaWNrZXJJbnB1dEVsZW1lbnQgfSBmcm9tICcuL0RhdGVUaW1lUGlja2VySW5wdXQnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL3RpbWUtcGlja2VyL1RpbWVQaWNrZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9EYXRlUGlja2VyTW9kdWxlLCBOb3ZvVGltZVBpY2tlck1vZHVsZSwgVGV4dE1hc2tNb2R1bGUsIE5vdm9PdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0RhdGVUaW1lUGlja2VyRWxlbWVudCwgTm92b0RhdGVUaW1lUGlja2VySW5wdXRFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9EYXRlVGltZVBpY2tlckVsZW1lbnQsIE5vdm9EYXRlVGltZVBpY2tlcklucHV0RWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSB7fVxuIl19