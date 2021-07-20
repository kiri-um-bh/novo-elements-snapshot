import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NovoButtonModule } from '../button/Button.module';
import { NovoOptionModule } from '../common';
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
import * as i7 from "../common/option/option.component";
import * as i8 from "../common/option/optgroup.component";
export class NovoBreadcrumbModule {
}
NovoBreadcrumbModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoBreadcrumbModule });
NovoBreadcrumbModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoBreadcrumbModule_Factory(t) { return new (t || NovoBreadcrumbModule)(); }, providers: [BreadcrumbService], imports: [[CommonModule, RouterModule, NovoDropdownModule, NovoSearchBoxModule, NovoButtonModule, NovoIconModule, NovoOptionModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoBreadcrumbModule, { declarations: [BreadcrumbElement, BreadcrumbItemElement], imports: [CommonModule, RouterModule, NovoDropdownModule, NovoSearchBoxModule, NovoButtonModule, NovoIconModule, NovoOptionModule], exports: [BreadcrumbElement, BreadcrumbItemElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoBreadcrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, NovoDropdownModule, NovoSearchBoxModule, NovoButtonModule, NovoIconModule, NovoOptionModule],
                exports: [BreadcrumbElement, BreadcrumbItemElement],
                declarations: [BreadcrumbElement, BreadcrumbItemElement],
                providers: [BreadcrumbService],
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(BreadcrumbElement, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.RouterOutlet, i2.RouterLink, i2.RouterLinkWithHref, i2.RouterLinkActive, i2.ɵangular_packages_router_router_l, i3.NovoDropdownElement, i3.NovoItemElement, i3.NovoDropdownListElement, i3.NovoDropDownItemHeaderElement, i4.NovoSearchBoxElement, i5.NovoButtonElement, i6.NovoIconComponent, i7.NovoOption, i8.NovoOptgroup, BreadcrumbElement, BreadcrumbItemElement], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvYnJlYWRjcnVtYnMvQnJlYWRjcnVtYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7O0FBUXpELE1BQU0sT0FBTyxvQkFBb0I7O3dEQUFwQixvQkFBb0I7dUhBQXBCLG9CQUFvQixtQkFGcEIsQ0FBQyxpQkFBaUIsQ0FBQyxZQUhyQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO3dGQUt2SCxvQkFBb0IsbUJBSGhCLGlCQUFpQixFQUFFLHFCQUFxQixhQUY3QyxZQUFZLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsYUFDdkgsaUJBQWlCLEVBQUUscUJBQXFCO2tEQUl2QyxvQkFBb0I7Y0FOaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO2dCQUNsSSxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDbkQsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQy9COzt1QkFGZ0IsaUJBQWlCLDRlQUFqQixpQkFBaUIsRUFBRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b09wdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0ljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL0ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuLi9zZWFyY2gvU2VhcmNoQm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iRWxlbWVudCB9IGZyb20gJy4vQnJlYWRjcnVtYic7XG5pbXBvcnQgeyBCcmVhZGNydW1iSXRlbUVsZW1lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWItaXRlbS9CcmVhZGNydW1iSXRlbSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vQnJlYWRjcnVtYi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBOb3ZvRHJvcGRvd25Nb2R1bGUsIE5vdm9TZWFyY2hCb3hNb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9JY29uTW9kdWxlLCBOb3ZvT3B0aW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0JyZWFkY3J1bWJFbGVtZW50LCBCcmVhZGNydW1iSXRlbUVsZW1lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1iRWxlbWVudCwgQnJlYWRjcnVtYkl0ZW1FbGVtZW50XSxcbiAgcHJvdmlkZXJzOiBbQnJlYWRjcnVtYlNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQnJlYWRjcnVtYk1vZHVsZSB7fVxuIl19