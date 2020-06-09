// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { TooltipDirective } from './Tooltip.directive';
import { NovoTooltip } from './Tooltip.component';
import * as i0 from "@angular/core";
var NovoTooltipModule = /** @class */ (function () {
    function NovoTooltipModule() {
    }
    NovoTooltipModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTooltipModule });
    NovoTooltipModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTooltipModule_Factory(t) { return new (t || NovoTooltipModule)(); }, imports: [[CommonModule]] });
    return NovoTooltipModule;
}());
export { NovoTooltipModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTooltipModule, { declarations: [TooltipDirective, NovoTooltip], imports: [CommonModule], exports: [TooltipDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTooltipModule, [{
        type: NgModule,
        args: [{
                declarations: [TooltipDirective, NovoTooltip],
                exports: [TooltipDirective],
                entryComponents: [NovoTooltip],
                imports: [CommonModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbEQ7SUFBQTtLQU1pQzt5REFBcEIsaUJBQWlCO3FIQUFqQixpQkFBaUIsa0JBRm5CLENBQUMsWUFBWSxDQUFDOzRCQVh6QjtDQWFpQyxBQU5qQyxJQU1pQztTQUFwQixpQkFBaUI7d0ZBQWpCLGlCQUFpQixtQkFMYixnQkFBZ0IsRUFBRSxXQUFXLGFBR2xDLFlBQVksYUFGWixnQkFBZ0I7a0RBSWYsaUJBQWlCO2NBTjdCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixlQUFlLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL1Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Rvb2x0aXBEaXJlY3RpdmUsIE5vdm9Ub29sdGlwXSxcbiAgZXhwb3J0czogW1Rvb2x0aXBEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOb3ZvVG9vbHRpcF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVG9vbHRpcE1vZHVsZSB7fVxuIl19