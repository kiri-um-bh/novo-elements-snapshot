// NG2
import { NgModule } from '@angular/core';
// APP
import { NovoDropdownElement, NovoItemElement, NovoDropDownItemHeaderElement, NovoDropdownListElement } from './Dropdown';
import { NovoOverlayModule } from '../overlay/Overlay.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSw2QkFBNkIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGtCQUFrQjs7c0RBQWxCLGtCQUFrQjttSEFBbEIsa0JBQWtCLGtCQUpwQixDQUFDLGlCQUFpQixDQUFDO3dGQUlqQixrQkFBa0IsbUJBSGQsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLDZCQUE2QixhQURqRyxpQkFBaUIsYUFFakIsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLDZCQUE2QjtrREFFM0Ysa0JBQWtCO2NBTDlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLDZCQUE2QixDQUFDO2dCQUM1RyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLENBQUM7YUFDeEciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkVsZW1lbnQsIE5vdm9JdGVtRWxlbWVudCwgTm92b0Ryb3BEb3duSXRlbUhlYWRlckVsZW1lbnQsIE5vdm9Ecm9wZG93bkxpc3RFbGVtZW50IH0gZnJvbSAnLi9Ecm9wZG93bic7XG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTm92b092ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvRHJvcGRvd25FbGVtZW50LCBOb3ZvSXRlbUVsZW1lbnQsIE5vdm9Ecm9wZG93bkxpc3RFbGVtZW50LCBOb3ZvRHJvcERvd25JdGVtSGVhZGVyRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvRHJvcGRvd25FbGVtZW50LCBOb3ZvSXRlbUVsZW1lbnQsIE5vdm9Ecm9wZG93bkxpc3RFbGVtZW50LCBOb3ZvRHJvcERvd25JdGVtSGVhZGVyRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ecm9wZG93bk1vZHVsZSB7IH1cbiJdfQ==