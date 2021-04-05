// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoButtonModule } from '../button/Button.module';
// APP
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { CardActionsElement, CardContentElement, CardElement, CardFooterElement, CardHeaderElement } from './Card';
import * as i0 from "@angular/core";
export class NovoCardModule {
}
NovoCardModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCardModule });
NovoCardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCardModule_Factory(t) { return new (t || NovoCardModule)(); }, imports: [[CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCardModule, { declarations: [CardElement, CardActionsElement, CardContentElement, CardHeaderElement, CardFooterElement], imports: [CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule], exports: [CardElement, CardActionsElement, CardContentElement, CardHeaderElement, CardFooterElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule],
                declarations: [CardElement, CardActionsElement, CardContentElement, CardHeaderElement, CardFooterElement],
                exports: [CardElement, CardActionsElement, CardContentElement, CardHeaderElement, CardFooterElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFPbkgsTUFBTSxPQUFPLGNBQWM7O2tEQUFkLGNBQWM7MkdBQWQsY0FBYyxrQkFKaEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7d0ZBSXBFLGNBQWMsbUJBSFYsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixhQUQ5RixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLGFBRXBFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUI7a0RBRXhGLGNBQWM7Y0FMMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDL0UsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO2dCQUN6RyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7YUFDckciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9Ub29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkQWN0aW9uc0VsZW1lbnQsIENhcmRDb250ZW50RWxlbWVudCwgQ2FyZEVsZW1lbnQsIENhcmRGb290ZXJFbGVtZW50LCBDYXJkSGVhZGVyRWxlbWVudCB9IGZyb20gJy4vQ2FyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9Mb2FkaW5nTW9kdWxlLCBOb3ZvVG9vbHRpcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NhcmRFbGVtZW50LCBDYXJkQWN0aW9uc0VsZW1lbnQsIENhcmRDb250ZW50RWxlbWVudCwgQ2FyZEhlYWRlckVsZW1lbnQsIENhcmRGb290ZXJFbGVtZW50XSxcbiAgZXhwb3J0czogW0NhcmRFbGVtZW50LCBDYXJkQWN0aW9uc0VsZW1lbnQsIENhcmRDb250ZW50RWxlbWVudCwgQ2FyZEhlYWRlckVsZW1lbnQsIENhcmRGb290ZXJFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhcmRNb2R1bGUge31cbiJdfQ==