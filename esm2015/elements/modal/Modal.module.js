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
                entryComponents: [NovoModalContainerElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFRcEcsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxrQkFMakIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0ZBSzlCLGVBQWUsbUJBSlgseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLGFBRDlFLFlBQVksRUFBRSxnQkFBZ0IsYUFFOUIsZ0JBQWdCLEVBQUUsNEJBQTRCO2tEQUc3QyxlQUFlO2NBTjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLDRCQUE0QixDQUFDO2dCQUN6RixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDekQsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi8uLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50LCBOb3ZvTW9kYWxFbGVtZW50LCBOb3ZvTW9kYWxOb3RpZmljYXRpb25FbGVtZW50IH0gZnJvbSAnLi9Nb2RhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50LCBOb3ZvTW9kYWxFbGVtZW50LCBOb3ZvTW9kYWxOb3RpZmljYXRpb25FbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9Nb2RhbEVsZW1lbnQsIE5vdm9Nb2RhbE5vdGlmaWNhdGlvbkVsZW1lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsTW9kdWxlIHt9XG4iXX0=