// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoButtonModule } from '../button/Button.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { CardElement, CardActionsElement } from './Card';
import * as i0 from "@angular/core";
export class NovoCardModule {
}
NovoCardModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCardModule });
NovoCardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCardModule_Factory(t) { return new (t || NovoCardModule)(); }, imports: [[CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCardModule, { declarations: [CardElement, CardActionsElement], imports: [CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule], exports: [CardElement, CardActionsElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule],
                declarations: [CardElement, CardActionsElement],
                exports: [CardElement, CardActionsElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FyZC9DYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBT3pELE1BQU0sT0FBTyxjQUFjOztrREFBZCxjQUFjOzJHQUFkLGNBQWMsa0JBSmhCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO3dGQUlwRSxjQUFjLG1CQUhWLFdBQVcsRUFBRSxrQkFBa0IsYUFEcEMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixhQUVwRSxXQUFXLEVBQUUsa0JBQWtCO2tEQUU5QixjQUFjO2NBTDFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQy9FLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztnQkFDL0MsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIENhcmRBY3Rpb25zRWxlbWVudCB9IGZyb20gJy4vQ2FyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9Mb2FkaW5nTW9kdWxlLCBOb3ZvVG9vbHRpcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NhcmRFbGVtZW50LCBDYXJkQWN0aW9uc0VsZW1lbnRdLFxuICBleHBvcnRzOiBbQ2FyZEVsZW1lbnQsIENhcmRBY3Rpb25zRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYXJkTW9kdWxlIHt9XG4iXX0=