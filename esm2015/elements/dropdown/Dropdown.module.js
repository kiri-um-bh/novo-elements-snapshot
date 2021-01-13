// NG2
import { NgModule } from '@angular/core';
import { NovoOverlayModule } from '../overlay/Overlay.module';
// APP
import { NovoDropdownElement, NovoDropDownItemHeaderElement, NovoDropdownListElement, NovoItemElement } from './Dropdown';
import * as i0 from "@angular/core";
export class NovoDropdownModule {
}
NovoDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoDropdownModule });
NovoDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoDropdownModule_Factory(t) { return new (t || NovoDropdownModule)(); }, imports: [[NovoOverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoDropdownModule, { declarations: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement], imports: [NovoOverlayModule], exports: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [NovoOverlayModule],
                declarations: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement],
                exports: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJvcGRvd24vRHJvcGRvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE1BQU07QUFDTixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsNkJBQTZCLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDOztBQU8xSCxNQUFNLE9BQU8sa0JBQWtCOztzREFBbEIsa0JBQWtCO21IQUFsQixrQkFBa0Isa0JBSnBCLENBQUMsaUJBQWlCLENBQUM7d0ZBSWpCLGtCQUFrQixtQkFIZCxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLGFBRGpHLGlCQUFpQixhQUVqQixtQkFBbUIsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCO2tEQUUzRixrQkFBa0I7Y0FMOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLENBQUM7Z0JBQzVHLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsQ0FBQzthQUN4RyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkVsZW1lbnQsIE5vdm9Ecm9wRG93bkl0ZW1IZWFkZXJFbGVtZW50LCBOb3ZvRHJvcGRvd25MaXN0RWxlbWVudCwgTm92b0l0ZW1FbGVtZW50IH0gZnJvbSAnLi9Ecm9wZG93bic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOb3ZvT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9Ecm9wZG93bkVsZW1lbnQsIE5vdm9JdGVtRWxlbWVudCwgTm92b0Ryb3Bkb3duTGlzdEVsZW1lbnQsIE5vdm9Ecm9wRG93bkl0ZW1IZWFkZXJFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9Ecm9wZG93bkVsZW1lbnQsIE5vdm9JdGVtRWxlbWVudCwgTm92b0Ryb3Bkb3duTGlzdEVsZW1lbnQsIE5vdm9Ecm9wRG93bkl0ZW1IZWFkZXJFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3Bkb3duTW9kdWxlIHt9XG4iXX0=