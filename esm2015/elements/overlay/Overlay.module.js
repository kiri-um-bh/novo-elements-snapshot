// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
// APP
import { NovoOverlayTemplateComponent } from './Overlay';
import * as i0 from "@angular/core";
export class NovoOverlayModule {
}
NovoOverlayModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoOverlayModule });
NovoOverlayModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoOverlayModule_Factory(t) { return new (t || NovoOverlayModule)(); }, imports: [[CommonModule, FormsModule, OverlayModule, ScrollingModule],
        ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoOverlayModule, { declarations: [NovoOverlayTemplateComponent], imports: [CommonModule, FormsModule, OverlayModule, ScrollingModule], exports: [NovoOverlayTemplateComponent, ScrollingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoOverlayModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, OverlayModule, ScrollingModule],
                declarations: [NovoOverlayTemplateComponent],
                exports: [NovoOverlayTemplateComponent, ScrollingModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvb3ZlcmxheS9PdmVybGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsTUFBTTtBQUNOLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFPekQsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQUpuQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztRQUU1QixlQUFlO3dGQUU1QyxpQkFBaUIsbUJBSGIsNEJBQTRCLGFBRGpDLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGVBQWUsYUFFekQsNEJBQTRCLEVBQUUsZUFBZTtrREFFNUMsaUJBQWlCO2NBTDdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7Z0JBQ3BFLFlBQVksRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxlQUFlLENBQUM7YUFDekQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL092ZXJsYXknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgT3ZlcmxheU1vZHVsZSwgU2Nyb2xsaW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50LCBTY3JvbGxpbmdNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvT3ZlcmxheU1vZHVsZSB7fVxuIl19