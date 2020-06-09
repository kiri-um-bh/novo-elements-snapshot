// NG2
import { NgModule } from '@angular/core';
// APP
import { NovoDropdownElement, NovoItemElement, NovoDropDownItemHeaderElement, NovoDropdownListElement } from './Dropdown';
import { NovoOverlayModule } from '../overlay/Overlay.module';
import * as i0 from "@angular/core";
var NovoDropdownModule = /** @class */ (function () {
    function NovoDropdownModule() {
    }
    NovoDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoDropdownModule });
    NovoDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoDropdownModule_Factory(t) { return new (t || NovoDropdownModule)(); }, imports: [[NovoOverlayModule]] });
    return NovoDropdownModule;
}());
export { NovoDropdownModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoDropdownModule, { declarations: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement], imports: [NovoOverlayModule], exports: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [NovoOverlayModule],
                declarations: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement],
                exports: [NovoDropdownElement, NovoItemElement, NovoDropdownListElement, NovoDropDownItemHeaderElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSw2QkFBNkIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFOUQ7SUFBQTtLQUttQzswREFBdEIsa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBSnBCLENBQUMsaUJBQWlCLENBQUM7NkJBUDlCO0NBV21DLEFBTG5DLElBS21DO1NBQXRCLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQUhkLG1CQUFtQixFQUFFLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsYUFEakcsaUJBQWlCLGFBRWpCLG1CQUFtQixFQUFFLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkI7a0RBRTNGLGtCQUFrQjtjQUw5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsQ0FBQztnQkFDNUcsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLDZCQUE2QixDQUFDO2FBQ3hHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25FbGVtZW50LCBOb3ZvSXRlbUVsZW1lbnQsIE5vdm9Ecm9wRG93bkl0ZW1IZWFkZXJFbGVtZW50LCBOb3ZvRHJvcGRvd25MaXN0RWxlbWVudCB9IGZyb20gJy4vRHJvcGRvd24nO1xuaW1wb3J0IHsgTm92b092ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXkubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05vdm9PdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0Ryb3Bkb3duRWxlbWVudCwgTm92b0l0ZW1FbGVtZW50LCBOb3ZvRHJvcGRvd25MaXN0RWxlbWVudCwgTm92b0Ryb3BEb3duSXRlbUhlYWRlckVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b0Ryb3Bkb3duRWxlbWVudCwgTm92b0l0ZW1FbGVtZW50LCBOb3ZvRHJvcGRvd25MaXN0RWxlbWVudCwgTm92b0Ryb3BEb3duSXRlbUhlYWRlckVsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHJvcGRvd25Nb2R1bGUgeyB9XG4iXX0=