// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoButtonModule } from '../button/Button.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { CardElement, CardActionsElement } from './Card';
import * as i0 from "@angular/core";
var NovoCardModule = /** @class */ (function () {
    function NovoCardModule() {
    }
    NovoCardModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCardModule });
    NovoCardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCardModule_Factory(t) { return new (t || NovoCardModule)(); }, imports: [[CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule]] });
    return NovoCardModule;
}());
export { NovoCardModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCardModule, { declarations: [CardElement, CardActionsElement], imports: [CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule], exports: [CardElement, CardActionsElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule, NovoLoadingModule, NovoTooltipModule],
                declarations: [CardElement, CardActionsElement],
                exports: [CardElement, CardActionsElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FyZC9DYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBRXpEO0lBQUE7S0FLOEI7c0RBQWpCLGNBQWM7K0dBQWQsY0FBYyxrQkFKaEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7eUJBVmpGO0NBYzhCLEFBTDlCLElBSzhCO1NBQWpCLGNBQWM7d0ZBQWQsY0FBYyxtQkFIVixXQUFXLEVBQUUsa0JBQWtCLGFBRHBDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsYUFFcEUsV0FBVyxFQUFFLGtCQUFrQjtrREFFOUIsY0FBYztjQUwxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO2dCQUMvRSxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUM7Z0JBQy9DLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Mb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi4vbG9hZGluZy9Mb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IENhcmRFbGVtZW50LCBDYXJkQWN0aW9uc0VsZW1lbnQgfSBmcm9tICcuL0NhcmQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlLCBOb3ZvTG9hZGluZ01vZHVsZSwgTm92b1Rvb2x0aXBNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJkRWxlbWVudCwgQ2FyZEFjdGlvbnNFbGVtZW50XSxcbiAgZXhwb3J0czogW0NhcmRFbGVtZW50LCBDYXJkQWN0aW9uc0VsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2FyZE1vZHVsZSB7fVxuIl19