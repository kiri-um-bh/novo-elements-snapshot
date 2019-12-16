/**
 * @fileoverview added by tsickle
 * Generated from: elements/multi-picker/MultiPicker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipsModule } from './../chips/Chips.module';
import { NovoMultiPickerElement } from './MultiPicker';
var NovoMultiPickerModule = /** @class */ (function () {
    function NovoMultiPickerModule() {
    }
    NovoMultiPickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NovoPickerModule, NovoChipsModule],
                    declarations: [NovoMultiPickerElement],
                    exports: [NovoMultiPickerElement],
                },] }
    ];
    return NovoMultiPickerModule;
}());
export { NovoMultiPickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL211bHRpLXBpY2tlci9NdWx0aVBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZEO0lBQUE7SUFLb0MsQ0FBQzs7Z0JBTHBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztvQkFDdkUsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQzs7SUFDbUMsNEJBQUM7Q0FBQSxBQUxyQyxJQUtxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9QaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL3BpY2tlci9QaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwc01vZHVsZSB9IGZyb20gJy4vLi4vY2hpcHMvQ2hpcHMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9NdWx0aVBpY2tlckVsZW1lbnQgfSBmcm9tICcuL011bHRpUGlja2VyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9QaWNrZXJNb2R1bGUsIE5vdm9DaGlwc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9NdWx0aVBpY2tlckVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b011bHRpUGlja2VyRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9NdWx0aVBpY2tlck1vZHVsZSB7fVxuIl19