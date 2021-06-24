// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipElement, NovoChipsElement } from './Chips';
import { NovoRowChipElement, NovoRowChipsElement } from './RowChips';
import * as i0 from "@angular/core";
export class NovoChipsModule {
}
NovoChipsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoChipsModule });
NovoChipsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoChipsModule_Factory(t) { return new (t || NovoChipsModule)(); }, imports: [[CommonModule, FormsModule, NovoPickerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoChipsModule, { declarations: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement], imports: [CommonModule, FormsModule, NovoPickerModule], exports: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoChipsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoPickerModule],
                declarations: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement],
                exports: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NoaXBzL0NoaXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFPckUsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxrQkFKakIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO3dGQUkzQyxlQUFlLG1CQUhYLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsYUFEL0UsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsYUFFM0MsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQjtrREFFekUsZUFBZTtjQUwzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDdEQsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO2dCQUMxRixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7YUFDdEYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9QaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL3BpY2tlci9QaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwRWxlbWVudCwgTm92b0NoaXBzRWxlbWVudCB9IGZyb20gJy4vQ2hpcHMnO1xuaW1wb3J0IHsgTm92b1Jvd0NoaXBFbGVtZW50LCBOb3ZvUm93Q2hpcHNFbGVtZW50IH0gZnJvbSAnLi9Sb3dDaGlwcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvUGlja2VyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50LCBOb3ZvUm93Q2hpcEVsZW1lbnQsIE5vdm9Sb3dDaGlwc0VsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50LCBOb3ZvUm93Q2hpcEVsZW1lbnQsIE5vdm9Sb3dDaGlwc0VsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2hpcHNNb2R1bGUge31cbiJdfQ==