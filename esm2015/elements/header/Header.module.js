import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoButtonModule } from './../button/Button.module';
import { NovoHeaderComponent, NovoHeaderSpacer, NovoUtilActionComponent, NovoUtilsComponent } from './Header';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFPOUcsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGtCQUpsQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQzt3RkFJOUIsZ0JBQWdCLG1CQUhaLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixhQUR2RixZQUFZLEVBQUUsZ0JBQWdCLGFBRTlCLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQjtrREFFakYsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO2dCQUNsRyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQzthQUM5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0hlYWRlckNvbXBvbmVudCwgTm92b0hlYWRlclNwYWNlciwgTm92b1V0aWxBY3Rpb25Db21wb25lbnQsIE5vdm9VdGlsc0NvbXBvbmVudCB9IGZyb20gJy4vSGVhZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9IZWFkZXJDb21wb25lbnQsIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50LCBOb3ZvVXRpbHNDb21wb25lbnQsIE5vdm9IZWFkZXJTcGFjZXJdLFxuICBleHBvcnRzOiBbTm92b0hlYWRlckNvbXBvbmVudCwgTm92b1V0aWxBY3Rpb25Db21wb25lbnQsIE5vdm9VdGlsc0NvbXBvbmVudCwgTm92b0hlYWRlclNwYWNlcl0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9IZWFkZXJNb2R1bGUge31cbiJdfQ==