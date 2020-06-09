import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoButtonModule } from './../button/Button.module';
import { NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer } from './Header';
import * as i0 from "@angular/core";
var NovoHeaderModule = /** @class */ (function () {
    function NovoHeaderModule() {
    }
    NovoHeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoHeaderModule });
    NovoHeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoHeaderModule_Factory(t) { return new (t || NovoHeaderModule)(); }, imports: [[CommonModule, NovoButtonModule]] });
    return NovoHeaderModule;
}());
export { NovoHeaderModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoHeaderModule, { declarations: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer], imports: [CommonModule, NovoButtonModule], exports: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer],
                exports: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9oZWFkZXIvSGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBRTlHO0lBQUE7S0FLZ0M7d0RBQW5CLGdCQUFnQjttSEFBaEIsZ0JBQWdCLGtCQUpsQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQzsyQkFQM0M7Q0FXZ0MsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCO3dGQUFoQixnQkFBZ0IsbUJBSFosbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLGFBRHZGLFlBQVksRUFBRSxnQkFBZ0IsYUFFOUIsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCO2tEQUVqRixnQkFBZ0I7Y0FMNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztnQkFDekMsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ2xHLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO2FBQzlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9IZWFkZXJDb21wb25lbnQsIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50LCBOb3ZvVXRpbHNDb21wb25lbnQsIE5vdm9IZWFkZXJTcGFjZXIgfSBmcm9tICcuL0hlYWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvSGVhZGVyQ29tcG9uZW50LCBOb3ZvVXRpbEFjdGlvbkNvbXBvbmVudCwgTm92b1V0aWxzQ29tcG9uZW50LCBOb3ZvSGVhZGVyU3BhY2VyXSxcbiAgZXhwb3J0czogW05vdm9IZWFkZXJDb21wb25lbnQsIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50LCBOb3ZvVXRpbHNDb21wb25lbnQsIE5vdm9IZWFkZXJTcGFjZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGVhZGVyTW9kdWxlIHt9XG4iXX0=