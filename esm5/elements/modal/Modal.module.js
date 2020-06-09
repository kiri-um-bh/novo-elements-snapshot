// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from './../button/Button.module';
import { NovoModalContainerElement, NovoModalElement, NovoModalNotificationElement } from './Modal';
import * as i0 from "@angular/core";
var NovoModalModule = /** @class */ (function () {
    function NovoModalModule() {
    }
    NovoModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoModalModule });
    NovoModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoModalModule_Factory(t) { return new (t || NovoModalModule)(); }, imports: [[CommonModule, NovoButtonModule]] });
    return NovoModalModule;
}());
export { NovoModalModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFcEc7SUFBQTtLQU0rQjt1REFBbEIsZUFBZTtpSEFBZixlQUFlLGtCQUxqQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQzswQkFSM0M7Q0FhK0IsQUFOL0IsSUFNK0I7U0FBbEIsZUFBZTt3RkFBZixlQUFlLG1CQUpYLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLDRCQUE0QixhQUQ5RSxZQUFZLEVBQUUsZ0JBQWdCLGFBRTlCLGdCQUFnQixFQUFFLDRCQUE0QjtrREFHN0MsZUFBZTtjQU4zQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDekYsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQ3pELGVBQWUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgTm92b01vZGFsRWxlbWVudCwgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudCB9IGZyb20gJy4vTW9kYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgTm92b01vZGFsRWxlbWVudCwgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvTW9kYWxFbGVtZW50LCBOb3ZvTW9kYWxOb3RpZmljYXRpb25FbGVtZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTm92b01vZGFsQ29udGFpbmVyRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbE1vZHVsZSB7fVxuIl19