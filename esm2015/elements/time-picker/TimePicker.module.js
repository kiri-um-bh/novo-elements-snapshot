// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMaskDirectiveModule } from 'angular-imask';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
import { NovoListModule } from '../list/List.module';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoTimePickerElement } from './TimePicker';
import { NovoTimePickerInputElement } from './TimePickerInput';
import * as i0 from "@angular/core";
export class NovoTimePickerModule {
}
NovoTimePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTimePickerModule });
NovoTimePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTimePickerModule_Factory(t) { return new (t || NovoTimePickerModule)(); }, imports: [[CommonModule, FormsModule, IMaskDirectiveModule, TextMaskModule, NovoOverlayModule, NovoListModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTimePickerModule, { declarations: [NovoTimePickerElement, NovoTimePickerInputElement], imports: [CommonModule, FormsModule, IMaskDirectiveModule, TextMaskModule, NovoOverlayModule, NovoListModule], exports: [NovoTimePickerElement, NovoTimePickerInputElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTimePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, IMaskDirectiveModule, TextMaskModule, NovoOverlayModule, NovoListModule],
                declarations: [NovoTimePickerElement, NovoTimePickerInputElement],
                exports: [NovoTimePickerElement, NovoTimePickerInputElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxTQUFTO0FBQ1QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQU8vRCxNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0Isa0JBSnRCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO3dGQUlsRyxvQkFBb0IsbUJBSGhCLHFCQUFxQixFQUFFLDBCQUEwQixhQUR0RCxZQUFZLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLGFBRWxHLHFCQUFxQixFQUFFLDBCQUEwQjtrREFFaEQsb0JBQW9CO2NBTGhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUM7Z0JBQzdHLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO2dCQUNqRSxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQzthQUM3RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElNYXNrRGlyZWN0aXZlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbWFzayc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbmltcG9ydCB7IE5vdm9MaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9MaXN0Lm1vZHVsZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGltZVBpY2tlckVsZW1lbnQgfSBmcm9tICcuL1RpbWVQaWNrZXInO1xuaW1wb3J0IHsgTm92b1RpbWVQaWNrZXJJbnB1dEVsZW1lbnQgfSBmcm9tICcuL1RpbWVQaWNrZXJJbnB1dCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBJTWFza0RpcmVjdGl2ZU1vZHVsZSwgVGV4dE1hc2tNb2R1bGUsIE5vdm9PdmVybGF5TW9kdWxlLCBOb3ZvTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9UaW1lUGlja2VyRWxlbWVudCwgTm92b1RpbWVQaWNrZXJJbnB1dEVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b1RpbWVQaWNrZXJFbGVtZW50LCBOb3ZvVGltZVBpY2tlcklucHV0RWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaW1lUGlja2VyTW9kdWxlIHt9XG4iXX0=