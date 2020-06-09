// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoCategoryDropdownElement } from './CategoryDropdown';
import { NovoTabModule } from './../tabs/Tabs.module';
import { NovoListModule } from './../list/List.module';
import * as i0 from "@angular/core";
var NovoCategoryDropdownModule = /** @class */ (function () {
    function NovoCategoryDropdownModule() {
    }
    NovoCategoryDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCategoryDropdownModule });
    NovoCategoryDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCategoryDropdownModule_Factory(t) { return new (t || NovoCategoryDropdownModule)(); }, imports: [[CommonModule, NovoTabModule, NovoListModule]] });
    return NovoCategoryDropdownModule;
}());
export { NovoCategoryDropdownModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCategoryDropdownModule, { declarations: [NovoCategoryDropdownElement], imports: [CommonModule, NovoTabModule, NovoListModule], exports: [NovoCategoryDropdownElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCategoryDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoTabModule, NovoListModule],
                declarations: [NovoCategoryDropdownElement],
                exports: [NovoCategoryDropdownElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2F0ZWdvcnktZHJvcGRvd24vQ2F0ZWdvcnlEcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE1BQU07QUFDTixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUV2RDtJQUFBO0tBSzBDO2tFQUE3QiwwQkFBMEI7dUlBQTFCLDBCQUEwQixrQkFKNUIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztxQ0FUeEQ7Q0FhMEMsQUFMMUMsSUFLMEM7U0FBN0IsMEJBQTBCO3dGQUExQiwwQkFBMEIsbUJBSHRCLDJCQUEyQixhQURoQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsYUFFM0MsMkJBQTJCO2tEQUUxQiwwQkFBMEI7Y0FMdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDO2dCQUN0RCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvQ2F0ZWdvcnlEcm9wZG93bkVsZW1lbnQgfSBmcm9tICcuL0NhdGVnb3J5RHJvcGRvd24nO1xuaW1wb3J0IHsgTm92b1RhYk1vZHVsZSB9IGZyb20gJy4vLi4vdGFicy9UYWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4vLi4vbGlzdC9MaXN0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9UYWJNb2R1bGUsIE5vdm9MaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0NhdGVnb3J5RHJvcGRvd25FbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9DYXRlZ29yeURyb3Bkb3duRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYXRlZ29yeURyb3Bkb3duTW9kdWxlIHt9XG4iXX0=