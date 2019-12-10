/**
 * @fileoverview added by tsickle
 * Generated from: elements/expansion/expansion.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoAccordion } from './accordion';
import { NovoExpansionPanel, NovoExpansionPanelActionRow } from './expansion-panel';
import { NovoExpansionPanelContent } from './expansion-panel-content';
import { NovoExpansionPanelDescription, NovoExpansionPanelHeader, NovoExpansionPanelTitle } from './expansion-panel-header';
var NovoExpansionModule = /** @class */ (function () {
    function NovoExpansionModule() {
    }
    NovoExpansionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, CdkAccordionModule, PortalModule],
                    exports: [
                        NovoAccordion,
                        NovoExpansionPanel,
                        NovoExpansionPanelActionRow,
                        NovoExpansionPanelHeader,
                        NovoExpansionPanelTitle,
                        NovoExpansionPanelDescription,
                        NovoExpansionPanelContent,
                    ],
                    declarations: [
                        NovoAccordion,
                        NovoExpansionPanel,
                        NovoExpansionPanelActionRow,
                        NovoExpansionPanelHeader,
                        NovoExpansionPanelTitle,
                        NovoExpansionPanelDescription,
                        NovoExpansionPanelContent,
                    ],
                },] }
    ];
    return NovoExpansionModule;
}());
export { NovoExpansionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVIO0lBQUE7SUFxQmtDLENBQUM7O2dCQXJCbEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUM7b0JBQ3pELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsMkJBQTJCO3dCQUMzQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsNkJBQTZCO3dCQUM3Qix5QkFBeUI7cUJBQzFCO29CQUNELFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsMkJBQTJCO3dCQUMzQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsNkJBQTZCO3dCQUM3Qix5QkFBeUI7cUJBQzFCO2lCQUNGOztJQUNpQywwQkFBQztDQUFBLEFBckJuQyxJQXFCbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2FjY29yZGlvbic7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0FjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IE5vdm9FeHBhbnNpb25QYW5lbCwgTm92b0V4cGFuc2lvblBhbmVsQWN0aW9uUm93IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwnO1xuaW1wb3J0IHsgTm92b0V4cGFuc2lvblBhbmVsQ29udGVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnO1xuaW1wb3J0IHsgTm92b0V4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24sIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlciwgTm92b0V4cGFuc2lvblBhbmVsVGl0bGUgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDZGtBY2NvcmRpb25Nb2R1bGUsIFBvcnRhbE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvQWNjb3JkaW9uLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbCxcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxBY3Rpb25Sb3csXG4gICAgTm92b0V4cGFuc2lvblBhbmVsSGVhZGVyLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbFRpdGxlLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbENvbnRlbnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9BY2NvcmRpb24sXG4gICAgTm92b0V4cGFuc2lvblBhbmVsLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbEFjdGlvblJvdyxcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIsXG4gICAgTm92b0V4cGFuc2lvblBhbmVsVGl0bGUsXG4gICAgTm92b0V4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24sXG4gICAgTm92b0V4cGFuc2lvblBhbmVsQ29udGVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0V4cGFuc2lvbk1vZHVsZSB7fVxuIl19