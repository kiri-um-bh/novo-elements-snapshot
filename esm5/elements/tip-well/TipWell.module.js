// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from './../button/Button.module';
import { NovoTipWellElement } from './TipWell';
import * as i0 from "@angular/core";
var NovoTipWellModule = /** @class */ (function () {
    function NovoTipWellModule() {
    }
    NovoTipWellModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTipWellModule });
    NovoTipWellModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTipWellModule_Factory(t) { return new (t || NovoTipWellModule)(); }, imports: [[CommonModule, NovoButtonModule]] });
    return NovoTipWellModule;
}());
export { NovoTipWellModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTipWellModule, { declarations: [NovoTipWellElement], imports: [CommonModule, NovoButtonModule], exports: [NovoTipWellElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTipWellModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoTipWellElement],
                exports: [NovoTipWellElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGlwLXdlbGwvVGlwV2VsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRS9DO0lBQUE7S0FLaUM7eURBQXBCLGlCQUFpQjtxSEFBakIsaUJBQWlCLGtCQUpuQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQzs0QkFSM0M7Q0FZaUMsQUFMakMsSUFLaUM7U0FBcEIsaUJBQWlCO3dGQUFqQixpQkFBaUIsbUJBSGIsa0JBQWtCLGFBRHZCLFlBQVksRUFBRSxnQkFBZ0IsYUFFOUIsa0JBQWtCO2tEQUVqQixpQkFBaUI7Y0FMN0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztnQkFDekMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpcFdlbGxFbGVtZW50IH0gZnJvbSAnLi9UaXBXZWxsJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9UaXBXZWxsRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvVGlwV2VsbEVsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGlwV2VsbE1vZHVsZSB7fVxuIl19