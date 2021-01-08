// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoListModule } from './../list/List.module';
import { NovoTabModule } from './../tabs/Tabs.module';
// APP
import { NovoCategoryDropdownElement } from './CategoryDropdown';
import * as i0 from "@angular/core";
export class NovoCategoryDropdownModule {
}
NovoCategoryDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCategoryDropdownModule });
NovoCategoryDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCategoryDropdownModule_Factory(t) { return new (t || NovoCategoryDropdownModule)(); }, imports: [[CommonModule, NovoTabModule, NovoListModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCategoryDropdownModule, { declarations: [NovoCategoryDropdownElement], imports: [CommonModule, NovoTabModule, NovoListModule], exports: [NovoCategoryDropdownElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCategoryDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoTabModule, NovoListModule],
                declarations: [NovoCategoryDropdownElement],
                exports: [NovoCategoryDropdownElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxNQUFNO0FBQ04sT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBT2pFLE1BQU0sT0FBTywwQkFBMEI7OzhEQUExQiwwQkFBMEI7bUlBQTFCLDBCQUEwQixrQkFKNUIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQzt3RkFJM0MsMEJBQTBCLG1CQUh0QiwyQkFBMkIsYUFEaEMsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLGFBRTNDLDJCQUEyQjtrREFFMUIsMEJBQTBCO2NBTHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztnQkFDdEQsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9MaXN0TW9kdWxlIH0gZnJvbSAnLi8uLi9saXN0L0xpc3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UYWJNb2R1bGUgfSBmcm9tICcuLy4uL3RhYnMvVGFicy5tb2R1bGUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvQ2F0ZWdvcnlEcm9wZG93bkVsZW1lbnQgfSBmcm9tICcuL0NhdGVnb3J5RHJvcGRvd24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvVGFiTW9kdWxlLCBOb3ZvTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9DYXRlZ29yeURyb3Bkb3duRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvQ2F0ZWdvcnlEcm9wZG93bkVsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2F0ZWdvcnlEcm9wZG93bk1vZHVsZSB7fVxuIl19