// NG2
import { NgModule } from '@angular/core';
import { NovoAsideService } from './elements/aside/aside.service';
import { NovoDragulaService } from './elements/dragula/DragulaService';
import { FieldInteractionApi } from './elements/form/FieldInteractionApi';
import { MENU_OPTIONS } from './elements/menu/menu.tokens';
// import { NovoAsideRef } from './elements/aside/aside-ref';
import { NovoModalService } from './elements/modal/modal.service';
// APP
import { GooglePlacesService } from './elements/places/places.service';
import { NovoToastService } from './elements/toast/ToastService';
import { DateFormatService } from './services/date-format/DateFormat';
import { BrowserGlobalRef, GlobalRef } from './services/global/global.service';
import { OptionsService } from './services/options/OptionsService';
import { Security } from './services/security/Security';
import { LocalStorageService } from './services/storage/storage.service';
import { NovoTemplateService } from './services/template/NovoTemplateService';
import { ComponentUtils } from './utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
const NOVO_ELEMENTS_PROVIDERS = [
    { provide: NovoDragulaService, useClass: NovoDragulaService },
    // { provide: NovoAsideRef, useClass: NovoAsideRef },
    { provide: NovoAsideService, useClass: NovoAsideService },
    // { provide: NovoModalRef, useClass: NovoModalRef },
    { provide: NovoModalService, useClass: NovoModalService },
    { provide: GooglePlacesService, useClass: GooglePlacesService },
    { provide: NovoToastService, useClass: NovoToastService },
    { provide: ComponentUtils, useClass: ComponentUtils },
    { provide: GlobalRef, useClass: BrowserGlobalRef },
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: OptionsService, useClass: OptionsService },
    FieldInteractionApi,
    DateFormatService,
    Security,
    NovoTemplateService,
];
export class NovoElementProviders {
    static forRoot(options) {
        return {
            ngModule: NovoElementProviders,
            providers: [
                ...NOVO_ELEMENTS_PROVIDERS,
                {
                    provide: MENU_OPTIONS,
                    useValue: options && options.menu,
                },
            ],
        };
    }
    static forChild() {
        return {
            ngModule: NovoElementProviders,
        };
    }
}
NovoElementProviders.ɵmod = i0.ɵɵdefineNgModule({ type: NovoElementProviders });
NovoElementProviders.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoElementProviders_Factory(t) { return new (t || NovoElementProviders)(); }, imports: [[]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoElementProviders, [{
        type: NgModule,
        args: [{
                imports: [],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJub3ZvLWVsZW1lbnRzLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTNELDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxNQUFNO0FBQ04sT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUV4RSxNQUFNLHVCQUF1QixHQUFHO0lBQzlCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtJQUM3RCxxREFBcUQ7SUFDckQsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ3pELHFEQUFxRDtJQUNyRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7SUFDekQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO0lBQy9ELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtJQUN6RCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtJQUNyRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2xELEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtJQUMvRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtJQUNyRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixtQkFBbUI7Q0FDcEIsQ0FBQztBQUtGLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFnQztRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyx1QkFBdUI7Z0JBQzFCO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJO2lCQUNsQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1NBQy9CLENBQUM7SUFDSixDQUFDOzt3REFsQlUsb0JBQW9CO3VIQUFwQixvQkFBb0Isa0JBRnRCLEVBQUU7a0RBRUEsb0JBQW9CO2NBSGhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsRUFBRTthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0FzaWRlU2VydmljZSB9IGZyb20gJy4vZWxlbWVudHMvYXNpZGUvYXNpZGUuc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYVNlcnZpY2UnO1xuaW1wb3J0IHsgRmllbGRJbnRlcmFjdGlvbkFwaSB9IGZyb20gJy4vZWxlbWVudHMvZm9ybS9GaWVsZEludGVyYWN0aW9uQXBpJztcbmltcG9ydCB7IE1FTlVfT1BUSU9OUyB9IGZyb20gJy4vZWxlbWVudHMvbWVudS9tZW51LnRva2Vucyc7XG5pbXBvcnQgeyBJTWVudU9wdGlvbnMgfSBmcm9tICcuL2VsZW1lbnRzL21lbnUvbWVudS50eXBlcyc7XG4vLyBpbXBvcnQgeyBOb3ZvQXNpZGVSZWYgfSBmcm9tICcuL2VsZW1lbnRzL2FzaWRlL2FzaWRlLXJlZic7XG5pbXBvcnQgeyBOb3ZvTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbi8vIEFQUFxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzU2VydmljZSB9IGZyb20gJy4vZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Ub2FzdFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZSc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBCcm93c2VyR2xvYmFsUmVmLCBHbG9iYWxSZWYgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5pbXBvcnQgeyBTZWN1cml0eSB9IGZyb20gJy4vc2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHknO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuY29uc3QgTk9WT19FTEVNRU5UU19QUk9WSURFUlMgPSBbXG4gIHsgcHJvdmlkZTogTm92b0RyYWd1bGFTZXJ2aWNlLCB1c2VDbGFzczogTm92b0RyYWd1bGFTZXJ2aWNlIH0sXG4gIC8vIHsgcHJvdmlkZTogTm92b0FzaWRlUmVmLCB1c2VDbGFzczogTm92b0FzaWRlUmVmIH0sXG4gIHsgcHJvdmlkZTogTm92b0FzaWRlU2VydmljZSwgdXNlQ2xhc3M6IE5vdm9Bc2lkZVNlcnZpY2UgfSxcbiAgLy8geyBwcm92aWRlOiBOb3ZvTW9kYWxSZWYsIHVzZUNsYXNzOiBOb3ZvTW9kYWxSZWYgfSxcbiAgeyBwcm92aWRlOiBOb3ZvTW9kYWxTZXJ2aWNlLCB1c2VDbGFzczogTm92b01vZGFsU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IEdvb2dsZVBsYWNlc1NlcnZpY2UsIHVzZUNsYXNzOiBHb29nbGVQbGFjZXNTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogTm92b1RvYXN0U2VydmljZSwgdXNlQ2xhc3M6IE5vdm9Ub2FzdFNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBDb21wb25lbnRVdGlscywgdXNlQ2xhc3M6IENvbXBvbmVudFV0aWxzIH0sXG4gIHsgcHJvdmlkZTogR2xvYmFsUmVmLCB1c2VDbGFzczogQnJvd3Nlckdsb2JhbFJlZiB9LFxuICB7IHByb3ZpZGU6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogT3B0aW9uc1NlcnZpY2UsIHVzZUNsYXNzOiBPcHRpb25zU2VydmljZSB9LFxuICBGaWVsZEludGVyYWN0aW9uQXBpLFxuICBEYXRlRm9ybWF0U2VydmljZSxcbiAgU2VjdXJpdHksXG4gIE5vdm9UZW1wbGF0ZVNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0VsZW1lbnRQcm92aWRlcnMge1xuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogeyBtZW51OiBJTWVudU9wdGlvbnMgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tm92b0VsZW1lbnRQcm92aWRlcnM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5vdm9FbGVtZW50UHJvdmlkZXJzLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLk5PVk9fRUxFTUVOVFNfUFJPVklERVJTLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTUVOVV9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zICYmIG9wdGlvbnMubWVudSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5vdm9FbGVtZW50UHJvdmlkZXJzPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOb3ZvRWxlbWVudFByb3ZpZGVycyxcbiAgICB9O1xuICB9XG59XG4iXX0=