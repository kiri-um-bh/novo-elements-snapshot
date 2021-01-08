// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// APP
import { NovoLayoutContainer } from './container/layout-container.component';
import { NovoLayoutContent } from './content/layout-content.component';
import { NovoSidenavComponent } from './sidenav/sidenav.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NovoLayoutModule {
}
NovoLayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoLayoutModule });
NovoLayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoLayoutModule_Factory(t) { return new (t || NovoLayoutModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoLayoutModule, { declarations: [NovoLayoutContainer, NovoLayoutContent, NovoSidenavComponent], imports: [CommonModule], exports: [NovoLayoutContainer, NovoLayoutContent, NovoSidenavComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLayoutModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NovoLayoutContainer, NovoLayoutContent, NovoSidenavComponent],
                exports: [NovoLayoutContainer, NovoLayoutContent, NovoSidenavComponent],
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NovoLayoutContainer, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, NovoLayoutContainer, NovoLayoutContent, NovoSidenavComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQU9uRSxNQUFNLE9BQU8sZ0JBQWdCOztvREFBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0Isa0JBSmxCLENBQUMsWUFBWSxDQUFDO3dGQUlaLGdCQUFnQixtQkFIWixtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsYUFEakUsWUFBWSxhQUVaLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQjtrREFFM0QsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDO2dCQUM1RSxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQzthQUN4RTs7dUJBRmdCLG1CQUFtQiwyS0FBbkIsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xheW91dENvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVyL2xheW91dC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9MYXlvdXRDb250ZW50IH0gZnJvbSAnLi9jb250ZW50L2xheW91dC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvU2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4vc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvTGF5b3V0Q29udGFpbmVyLCBOb3ZvTGF5b3V0Q29udGVudCwgTm92b1NpZGVuYXZDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTm92b0xheW91dENvbnRhaW5lciwgTm92b0xheW91dENvbnRlbnQsIE5vdm9TaWRlbmF2Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xheW91dE1vZHVsZSB7fVxuIl19