import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoButtonModule } from './../button/Button.module';
import { NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer } from './Header';
import * as i0 from "@angular/core";
export class NovoHeaderModule {
}
NovoHeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoHeaderModule });
NovoHeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoHeaderModule_Factory(t) { return new (t || NovoHeaderModule)(); }, imports: [[CommonModule, NovoButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoHeaderModule, { declarations: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer], imports: [CommonModule, NovoButtonModule], exports: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer],
                exports: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9oZWFkZXIvSGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBTzlHLE1BQU0sT0FBTyxnQkFBZ0I7O29EQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixrQkFKbEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0ZBSTlCLGdCQUFnQixtQkFIWixtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsYUFEdkYsWUFBWSxFQUFFLGdCQUFnQixhQUU5QixtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0I7a0RBRWpGLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDbEcsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7YUFDOUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0hlYWRlckNvbXBvbmVudCwgTm92b1V0aWxBY3Rpb25Db21wb25lbnQsIE5vdm9VdGlsc0NvbXBvbmVudCwgTm92b0hlYWRlclNwYWNlciB9IGZyb20gJy4vSGVhZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9IZWFkZXJDb21wb25lbnQsIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50LCBOb3ZvVXRpbHNDb21wb25lbnQsIE5vdm9IZWFkZXJTcGFjZXJdLFxuICBleHBvcnRzOiBbTm92b0hlYWRlckNvbXBvbmVudCwgTm92b1V0aWxBY3Rpb25Db21wb25lbnQsIE5vdm9VdGlsc0NvbXBvbmVudCwgTm92b0hlYWRlclNwYWNlcl0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9IZWFkZXJNb2R1bGUge31cbiJdfQ==