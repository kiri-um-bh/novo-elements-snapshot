import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoButtonModule } from './../button/Button.module';
import { NovoCommonModule } from './../common/common.module';
import { NovoIconModule } from './../icon/Icon.module';
import { NovoHeaderComponent, NovoHeaderSpacer, NovoUtilActionComponent, NovoUtilsComponent } from './Header';
import * as i0 from "@angular/core";
export class NovoHeaderModule {
}
NovoHeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoHeaderModule });
NovoHeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoHeaderModule_Factory(t) { return new (t || NovoHeaderModule)(); }, imports: [[CommonModule, NovoCommonModule, NovoIconModule, NovoButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoHeaderModule, { declarations: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer], imports: [CommonModule, NovoCommonModule, NovoIconModule, NovoButtonModule], exports: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoCommonModule, NovoIconModule, NovoButtonModule],
                declarations: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer],
                exports: [NovoHeaderComponent, NovoUtilActionComponent, NovoUtilsComponent, NovoHeaderSpacer],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBTzlHLE1BQU0sT0FBTyxnQkFBZ0I7O29EQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixrQkFKbEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO3dGQUloRSxnQkFBZ0IsbUJBSFosbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLGFBRHZGLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLGFBRWhFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQjtrREFFakYsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO2dCQUMzRSxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDbEcsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7YUFDOUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuLy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9JY29uTW9kdWxlIH0gZnJvbSAnLi8uLi9pY29uL0ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9IZWFkZXJDb21wb25lbnQsIE5vdm9IZWFkZXJTcGFjZXIsIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50LCBOb3ZvVXRpbHNDb21wb25lbnQgfSBmcm9tICcuL0hlYWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9Db21tb25Nb2R1bGUsIE5vdm9JY29uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0hlYWRlckNvbXBvbmVudCwgTm92b1V0aWxBY3Rpb25Db21wb25lbnQsIE5vdm9VdGlsc0NvbXBvbmVudCwgTm92b0hlYWRlclNwYWNlcl0sXG4gIGV4cG9ydHM6IFtOb3ZvSGVhZGVyQ29tcG9uZW50LCBOb3ZvVXRpbEFjdGlvbkNvbXBvbmVudCwgTm92b1V0aWxzQ29tcG9uZW50LCBOb3ZvSGVhZGVyU3BhY2VyXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hlYWRlck1vZHVsZSB7fVxuIl19