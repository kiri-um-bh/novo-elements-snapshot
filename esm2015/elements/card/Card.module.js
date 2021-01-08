// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoButtonModule } from '../button/Button.module';
// APP
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { CardActionsElement, CardElement } from './Card';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFPekQsTUFBTSxPQUFPLGNBQWM7O2tEQUFkLGNBQWM7MkdBQWQsY0FBYyxrQkFKaEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7d0ZBSXBFLGNBQWMsbUJBSFYsV0FBVyxFQUFFLGtCQUFrQixhQURwQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLGFBRXBFLFdBQVcsRUFBRSxrQkFBa0I7a0RBRTlCLGNBQWM7Y0FMMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDL0UsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9Ub29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkQWN0aW9uc0VsZW1lbnQsIENhcmRFbGVtZW50IH0gZnJvbSAnLi9DYXJkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZSwgTm92b0xvYWRpbmdNb2R1bGUsIE5vdm9Ub29sdGlwTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZEVsZW1lbnQsIENhcmRBY3Rpb25zRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtDYXJkRWxlbWVudCwgQ2FyZEFjdGlvbnNFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhcmRNb2R1bGUge31cbiJdfQ==