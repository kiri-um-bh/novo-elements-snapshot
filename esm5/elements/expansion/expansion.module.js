/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUg7SUFBQTtJQXFCa0MsQ0FBQzs7Z0JBckJsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQztvQkFDekQsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQiwyQkFBMkI7d0JBQzNCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQiwyQkFBMkI7d0JBQzNCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLHlCQUF5QjtxQkFDMUI7aUJBQ0Y7O0lBQ2lDLDBCQUFDO0NBQUEsQUFyQm5DLElBcUJtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYWNjb3JkaW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvQWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuaW1wb3J0IHsgTm92b0V4cGFuc2lvblBhbmVsLCBOb3ZvRXhwYW5zaW9uUGFuZWxBY3Rpb25Sb3cgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbCc7XG5pbXBvcnQgeyBOb3ZvRXhwYW5zaW9uUGFuZWxDb250ZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtY29udGVudCc7XG5pbXBvcnQgeyBOb3ZvRXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbiwgTm92b0V4cGFuc2lvblBhbmVsSGVhZGVyLCBOb3ZvRXhwYW5zaW9uUGFuZWxUaXRsZSB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWhlYWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENka0FjY29yZGlvbk1vZHVsZSwgUG9ydGFsTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9BY2NvcmRpb24sXG4gICAgTm92b0V4cGFuc2lvblBhbmVsLFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbEFjdGlvblJvdyxcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIsXG4gICAgTm92b0V4cGFuc2lvblBhbmVsVGl0bGUsXG4gICAgTm92b0V4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24sXG4gICAgTm92b0V4cGFuc2lvblBhbmVsQ29udGVudCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b0FjY29yZGlvbixcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWwsXG4gICAgTm92b0V4cGFuc2lvblBhbmVsQWN0aW9uUm93LFxuICAgIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlcixcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxUaXRsZSxcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbixcbiAgICBOb3ZvRXhwYW5zaW9uUGFuZWxDb250ZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uTW9kdWxlIHt9XG4iXX0=