// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from './../button/Button.module';
import { NovoModalContainerElement, NovoModalElement, NovoModalNotificationElement } from './Modal';
import * as i0 from "@angular/core";
export class NovoModalModule {
}
NovoModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoModalModule });
NovoModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoModalModule_Factory(t) { return new (t || NovoModalModule)(); }, imports: [[CommonModule, NovoButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoModalModule, { declarations: [NovoModalContainerElement, NovoModalElement, NovoModalNotificationElement], imports: [CommonModule, NovoButtonModule], exports: [NovoModalElement, NovoModalNotificationElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoModalContainerElement, NovoModalElement, NovoModalNotificationElement],
                exports: [NovoModalElement, NovoModalNotificationElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFPcEcsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxrQkFKakIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0ZBSTlCLGVBQWUsbUJBSFgseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLGFBRDlFLFlBQVksRUFBRSxnQkFBZ0IsYUFFOUIsZ0JBQWdCLEVBQUUsNEJBQTRCO2tEQUU3QyxlQUFlO2NBTDNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLDRCQUE0QixDQUFDO2dCQUN6RixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSw0QkFBNEIsQ0FBQzthQUMxRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQsIE5vdm9Nb2RhbEVsZW1lbnQsIE5vdm9Nb2RhbE5vdGlmaWNhdGlvbkVsZW1lbnQgfSBmcm9tICcuL01vZGFsJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQsIE5vdm9Nb2RhbEVsZW1lbnQsIE5vdm9Nb2RhbE5vdGlmaWNhdGlvbkVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b01vZGFsRWxlbWVudCwgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbE1vZHVsZSB7IH1cbiJdfQ==