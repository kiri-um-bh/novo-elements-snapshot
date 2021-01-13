import { CdkAccordionModule } from '@angular/cdk/accordion';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoAccordion } from './accordion';
import { NovoExpansionPanel, NovoExpansionPanelActionRow } from './expansion-panel';
import { NovoExpansionPanelContent } from './expansion-panel-content';
import { NovoExpansionPanelDescription, NovoExpansionPanelHeader, NovoExpansionPanelTitle } from './expansion-panel-header';
import * as i0 from "@angular/core";
export class NovoExpansionModule {
}
NovoExpansionModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoExpansionModule });
NovoExpansionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoExpansionModule_Factory(t) { return new (t || NovoExpansionModule)(); }, imports: [[CommonModule, CdkAccordionModule, PortalModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoExpansionModule, { declarations: [NovoAccordion,
        NovoExpansionPanel,
        NovoExpansionPanelActionRow,
        NovoExpansionPanelHeader,
        NovoExpansionPanelTitle,
        NovoExpansionPanelDescription,
        NovoExpansionPanelContent], imports: [CommonModule, CdkAccordionModule, PortalModule], exports: [NovoAccordion,
        NovoExpansionPanel,
        NovoExpansionPanelActionRow,
        NovoExpansionPanelHeader,
        NovoExpansionPanelTitle,
        NovoExpansionPanelDescription,
        NovoExpansionPanelContent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoExpansionModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQXVCNUgsTUFBTSxPQUFPLG1CQUFtQjs7dURBQW5CLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGtCQXBCckIsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO3dGQW9COUMsbUJBQW1CLG1CQVQ1QixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3Qix5QkFBeUIsYUFqQmpCLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLGFBRXRELGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLHlCQUF5QjtrREFZaEIsbUJBQW1CO2NBckIvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQztnQkFDekQsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQiwyQkFBMkI7b0JBQzNCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQiwyQkFBMkI7b0JBQzNCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLHlCQUF5QjtpQkFDMUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0FjY29yZGlvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9BY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBOb3ZvRXhwYW5zaW9uUGFuZWwsIE5vdm9FeHBhbnNpb25QYW5lbEFjdGlvblJvdyB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsJztcbmltcG9ydCB7IE5vdm9FeHBhbnNpb25QYW5lbENvbnRlbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1jb250ZW50JztcbmltcG9ydCB7IE5vdm9FeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uLCBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIsIE5vdm9FeHBhbnNpb25QYW5lbFRpdGxlIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtaGVhZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2RrQWNjb3JkaW9uTW9kdWxlLCBQb3J0YWxNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b0FjY29yZGlvbixcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWwsXG4gICAgTm92b0V4cGFuc2lvblBhbmVsQWN0aW9uUm93LFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlcixcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxUaXRsZSxcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbixcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxDb250ZW50LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvQWNjb3JkaW9uLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbCxcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxBY3Rpb25Sb3csXG4gICAgTm92b0V4cGFuc2lvblBhbmVsSGVhZGVyLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbFRpdGxlLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbENvbnRlbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FeHBhbnNpb25Nb2R1bGUge31cbiJdfQ==