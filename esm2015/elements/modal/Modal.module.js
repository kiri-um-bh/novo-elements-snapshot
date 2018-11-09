/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from './../button/Button.module';
import { NovoModalContainerElement, NovoModalElement, NovoModalNotificationElement } from './Modal';
export class NovoModalModule {
}
NovoModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoModalContainerElement, NovoModalElement, NovoModalNotificationElement],
                exports: [NovoModalElement, NovoModalNotificationElement],
                entryComponents: [NovoModalContainerElement],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFRcEcsTUFBTSxPQUFPLGVBQWU7OztZQU4zQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDekYsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQ3pELGVBQWUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgTm92b01vZGFsRWxlbWVudCwgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudCB9IGZyb20gJy4vTW9kYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgTm92b01vZGFsRWxlbWVudCwgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvTW9kYWxFbGVtZW50LCBOb3ZvTW9kYWxOb3RpZmljYXRpb25FbGVtZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTm92b01vZGFsQ29udGFpbmVyRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbE1vZHVsZSB7fVxuIl19