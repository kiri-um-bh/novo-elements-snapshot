// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoChipsModule } from './../chips/Chips.module';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoMultiPickerElement } from './MultiPicker';
import * as i0 from "@angular/core";
export class NovoMultiPickerModule {
}
NovoMultiPickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoMultiPickerModule });
NovoMultiPickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoMultiPickerModule_Factory(t) { return new (t || NovoMultiPickerModule)(); }, imports: [[CommonModule, FormsModule, NovoPickerModule, NovoChipsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoMultiPickerModule, { declarations: [NovoMultiPickerElement], imports: [CommonModule, FormsModule, NovoPickerModule, NovoChipsModule], exports: [NovoMultiPickerElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoMultiPickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoPickerModule, NovoChipsModule],
                declarations: [NovoMultiPickerElement],
                exports: [NovoMultiPickerElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlQaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU92RCxNQUFNLE9BQU8scUJBQXFCOzt5REFBckIscUJBQXFCO3lIQUFyQixxQkFBcUIsa0JBSnZCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7d0ZBSTVELHFCQUFxQixtQkFIakIsc0JBQXNCLGFBRDNCLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxhQUU1RCxzQkFBc0I7a0RBRXJCLHFCQUFxQjtjQUxqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7Z0JBQ3ZFLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5vdm9DaGlwc01vZHVsZSB9IGZyb20gJy4vLi4vY2hpcHMvQ2hpcHMubW9kdWxlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1BpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vcGlja2VyL1BpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b011bHRpUGlja2VyRWxlbWVudCB9IGZyb20gJy4vTXVsdGlQaWNrZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTm92b1BpY2tlck1vZHVsZSwgTm92b0NoaXBzTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b011bHRpUGlja2VyRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvTXVsdGlQaWNrZXJFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b011bHRpUGlja2VyTW9kdWxlIHt9XG4iXX0=