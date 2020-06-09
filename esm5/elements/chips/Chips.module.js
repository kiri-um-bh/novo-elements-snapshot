// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipElement, NovoChipsElement } from './Chips';
import { NovoRowChipElement, NovoRowChipsElement } from './RowChips';
import * as i0 from "@angular/core";
var NovoChipsModule = /** @class */ (function () {
    function NovoChipsModule() {
    }
    NovoChipsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoChipsModule });
    NovoChipsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoChipsModule_Factory(t) { return new (t || NovoChipsModule)(); }, imports: [[CommonModule, FormsModule, NovoPickerModule]] });
    return NovoChipsModule;
}());
export { NovoChipsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoChipsModule, { declarations: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement], imports: [CommonModule, FormsModule, NovoPickerModule], exports: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoChipsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoPickerModule],
                declarations: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement],
                exports: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NoaXBzL0NoaXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFFckU7SUFBQTtLQUsrQjt1REFBbEIsZUFBZTtpSEFBZixlQUFlLGtCQUpqQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7MEJBVnhEO0NBYytCLEFBTC9CLElBSytCO1NBQWxCLGVBQWU7d0ZBQWYsZUFBZSxtQkFIWCxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLGFBRC9FLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLGFBRTNDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUI7a0RBRXpFLGVBQWU7Y0FMM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3RELFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztnQkFDMUYsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO2FBQ3RGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvUGlja2VyTW9kdWxlIH0gZnJvbSAnLi8uLi9waWNrZXIvUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2hpcEVsZW1lbnQsIE5vdm9DaGlwc0VsZW1lbnQgfSBmcm9tICcuL0NoaXBzJztcbmltcG9ydCB7IE5vdm9Sb3dDaGlwRWxlbWVudCwgTm92b1Jvd0NoaXBzRWxlbWVudCB9IGZyb20gJy4vUm93Q2hpcHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTm92b1BpY2tlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9DaGlwRWxlbWVudCwgTm92b0NoaXBzRWxlbWVudCwgTm92b1Jvd0NoaXBFbGVtZW50LCBOb3ZvUm93Q2hpcHNFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9DaGlwRWxlbWVudCwgTm92b0NoaXBzRWxlbWVudCwgTm92b1Jvd0NoaXBFbGVtZW50LCBOb3ZvUm93Q2hpcHNFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBzTW9kdWxlIHt9XG4iXX0=