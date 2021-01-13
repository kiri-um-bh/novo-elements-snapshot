import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NovoButtonModule } from '../button/Button.module';
import { NovoDropdownModule } from '../dropdown/Dropdown.module';
import { NovoIconModule } from '../icon/Icon.module';
import { NovoSearchBoxModule } from '../search/SearchBox.module';
import { BreadcrumbElement } from './Breadcrumb';
import { BreadcrumbItemElement } from './breadcrumb-item/BreadcrumbItem';
import { BreadcrumbService } from './Breadcrumb.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "../dropdown/Dropdown";
import * as i4 from "../search/SearchBox";
import * as i5 from "../button/Button";
import * as i6 from "../icon/Icon";
export class NovoBreadcrumbModule {
}
NovoBreadcrumbModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoBreadcrumbModule });
NovoBreadcrumbModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoBreadcrumbModule_Factory(t) { return new (t || NovoBreadcrumbModule)(); }, providers: [BreadcrumbService], imports: [[CommonModule, RouterModule, NovoDropdownModule, NovoSearchBoxModule, NovoButtonModule, NovoIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoBreadcrumbModule, { declarations: [BreadcrumbElement, BreadcrumbItemElement], imports: [CommonModule, RouterModule, NovoDropdownModule, NovoSearchBoxModule, NovoButtonModule, NovoIconModule], exports: [BreadcrumbElement, BreadcrumbItemElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoBreadcrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, NovoDropdownModule, NovoSearchBoxModule, NovoButtonModule, NovoIconModule],
                exports: [BreadcrumbElement, BreadcrumbItemElement],
                declarations: [BreadcrumbElement, BreadcrumbItemElement],
                providers: [BreadcrumbService],
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(BreadcrumbElement, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.RouterOutlet, i2.RouterLink, i2.RouterLinkWithHref, i2.RouterLinkActive, i2.ɵangular_packages_router_router_l, i3.NovoDropdownElement, i3.NovoItemElement, i3.NovoDropdownListElement, i3.NovoDropDownItemHeaderElement, i4.NovoSearchBoxElement, i5.NovoButtonElement, i6.NovoIconComponent, BreadcrumbElement, BreadcrumbItemElement], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9icmVhZGNydW1icy9CcmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7QUFRekQsTUFBTSxPQUFPLG9CQUFvQjs7d0RBQXBCLG9CQUFvQjt1SEFBcEIsb0JBQW9CLG1CQUZwQixDQUFDLGlCQUFpQixDQUFDLFlBSHJCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7d0ZBS3JHLG9CQUFvQixtQkFIaEIsaUJBQWlCLEVBQUUscUJBQXFCLGFBRjdDLFlBQVksRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxhQUNyRyxpQkFBaUIsRUFBRSxxQkFBcUI7a0RBSXZDLG9CQUFvQjtjQU5oQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7Z0JBQ2hILE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2dCQUNuRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDL0I7O3VCQUZnQixpQkFBaUIsNGNBQWpCLGlCQUFpQixFQUFFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0ljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL0ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuLi9zZWFyY2gvU2VhcmNoQm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iRWxlbWVudCB9IGZyb20gJy4vQnJlYWRjcnVtYic7XG5pbXBvcnQgeyBCcmVhZGNydW1iSXRlbUVsZW1lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWItaXRlbS9CcmVhZGNydW1iSXRlbSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vQnJlYWRjcnVtYi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBOb3ZvRHJvcGRvd25Nb2R1bGUsIE5vdm9TZWFyY2hCb3hNb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9JY29uTW9kdWxlXSxcbiAgZXhwb3J0czogW0JyZWFkY3J1bWJFbGVtZW50LCBCcmVhZGNydW1iSXRlbUVsZW1lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1iRWxlbWVudCwgQnJlYWRjcnVtYkl0ZW1FbGVtZW50XSxcbiAgcHJvdmlkZXJzOiBbQnJlYWRjcnVtYlNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQnJlYWRjcnVtYk1vZHVsZSB7fVxuIl19