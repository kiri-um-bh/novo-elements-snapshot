// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
// APP
import { NovoOverlayTemplateComponent } from './Overlay';
import * as i0 from "@angular/core";
var NovoOverlayModule = /** @class */ (function () {
    function NovoOverlayModule() {
    }
    NovoOverlayModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoOverlayModule });
    NovoOverlayModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoOverlayModule_Factory(t) { return new (t || NovoOverlayModule)(); }, imports: [[CommonModule, FormsModule, OverlayModule, ScrollingModule],
            ScrollingModule] });
    return NovoOverlayModule;
}());
export { NovoOverlayModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoOverlayModule, { declarations: [NovoOverlayTemplateComponent], imports: [CommonModule, FormsModule, OverlayModule, ScrollingModule], exports: [NovoOverlayTemplateComponent, ScrollingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoOverlayModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, OverlayModule, ScrollingModule],
                declarations: [NovoOverlayTemplateComponent],
                exports: [NovoOverlayTemplateComponent, ScrollingModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvb3ZlcmxheS9PdmVybGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsTUFBTTtBQUNOLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFekQ7SUFBQTtLQUtpQzt5REFBcEIsaUJBQWlCO3FIQUFqQixpQkFBaUIsa0JBSm5CLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO1lBRTVCLGVBQWU7NEJBWnpEO0NBY2lDLEFBTGpDLElBS2lDO1NBQXBCLGlCQUFpQjt3RkFBakIsaUJBQWlCLG1CQUhiLDRCQUE0QixhQURqQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxlQUFlLGFBRXpELDRCQUE0QixFQUFFLGVBQWU7a0RBRTVDLGlCQUFpQjtjQUw3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO2dCQUNwRSxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsZUFBZSxDQUFDO2FBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9PdmVybGF5JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFNjcm9sbGluZ01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCwgU2Nyb2xsaW5nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b092ZXJsYXlNb2R1bGUge31cbiJdfQ==