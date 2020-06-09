// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipsModule } from './../chips/Chips.module';
import { NovoMultiPickerElement } from './MultiPicker';
import * as i0 from "@angular/core";
var NovoMultiPickerModule = /** @class */ (function () {
    function NovoMultiPickerModule() {
    }
    NovoMultiPickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoMultiPickerModule });
    NovoMultiPickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoMultiPickerModule_Factory(t) { return new (t || NovoMultiPickerModule)(); }, imports: [[CommonModule, FormsModule, NovoPickerModule, NovoChipsModule]] });
    return NovoMultiPickerModule;
}());
export { NovoMultiPickerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoMultiPickerModule, { declarations: [NovoMultiPickerElement], imports: [CommonModule, FormsModule, NovoPickerModule, NovoChipsModule], exports: [NovoMultiPickerElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoMultiPickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoPickerModule, NovoChipsModule],
                declarations: [NovoMultiPickerElement],
                exports: [NovoMultiPickerElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL211bHRpLXBpY2tlci9NdWx0aVBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkQ7SUFBQTtLQUtxQzs2REFBeEIscUJBQXFCOzZIQUFyQixxQkFBcUIsa0JBSnZCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7Z0NBVnpFO0NBY3FDLEFBTHJDLElBS3FDO1NBQXhCLHFCQUFxQjt3RkFBckIscUJBQXFCLG1CQUhqQixzQkFBc0IsYUFEM0IsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLGFBRTVELHNCQUFzQjtrREFFckIscUJBQXFCO2NBTGpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztnQkFDdkUsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvUGlja2VyTW9kdWxlIH0gZnJvbSAnLi8uLi9waWNrZXIvUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2hpcHNNb2R1bGUgfSBmcm9tICcuLy4uL2NoaXBzL0NoaXBzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTXVsdGlQaWNrZXJFbGVtZW50IH0gZnJvbSAnLi9NdWx0aVBpY2tlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvUGlja2VyTW9kdWxlLCBOb3ZvQ2hpcHNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvTXVsdGlQaWNrZXJFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9NdWx0aVBpY2tlckVsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTXVsdGlQaWNrZXJNb2R1bGUge31cbiJdfQ==