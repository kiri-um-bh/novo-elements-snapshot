/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { NgModule } from '@angular/core';
// APP
import { GooglePlacesService } from './elements/places/places.service';
import { NovoDragulaService } from './elements/dragula/DragulaService';
import { NovoModalService } from './elements/modal/ModalService';
import { NovoModalRef } from './elements/modal/Modal';
import { NovoToastService } from './elements/toast/ToastService';
import { ComponentUtils } from './utils/component-utils/ComponentUtils';
import { FieldInteractionApi } from './elements/form/FieldInteractionApi';
import { DateFormatService } from './services/date-format/DateFormat';
import { GlobalRef, BrowserGlobalRef } from './services/global/global.service';
import { LocalStorageService } from './services/storage/storage.service';
import { Security } from './services/security/Security';
import { OptionsService } from './services/options/OptionsService';
import { NovoTemplateService } from './services/template/NovoTemplateService';
/** @type {?} */
var NOVO_ELEMENTS_PROVIDERS = [
    { provide: NovoDragulaService, useClass: NovoDragulaService },
    { provide: NovoModalRef, useClass: NovoModalRef },
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
var NovoElementProviders = /** @class */ (function () {
    function NovoElementProviders() {
    }
    /**
     * @return {?}
     */
    NovoElementProviders.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NovoElementProviders,
            providers: tslib_1.__spread(NOVO_ELEMENTS_PROVIDERS),
        };
    };
    /**
     * @return {?}
     */
    NovoElementProviders.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NovoElementProviders,
        };
    };
    NovoElementProviders.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                },] }
    ];
    return NovoElementProviders;
}());
export { NovoElementProviders };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsibm92by1lbGVtZW50cy5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7SUFFeEUsdUJBQXVCLEdBQUc7SUFDOUIsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO0lBQzdELEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO0lBQ2pELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtJQUN6RCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7SUFDL0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ3pELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO0lBQ3JELEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7SUFDbEQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO0lBQy9ELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO0lBQ3JELG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLG1CQUFtQjtDQUNwQjtBQUVEO0lBQUE7SUFnQkEsQ0FBQzs7OztJQVpRLDRCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsbUJBQU0sdUJBQXVCLENBQUM7U0FDeEMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSw2QkFBUTs7O0lBQWY7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDO0lBQ0osQ0FBQzs7Z0JBZkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUFFO2lCQUNaOztJQWNELDJCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FiWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL3BsYWNlcy9wbGFjZXMuc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b01vZGFsU2VydmljZSB9IGZyb20gJy4vZWxlbWVudHMvbW9kYWwvTW9kYWxTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Nb2RhbFJlZiB9IGZyb20gJy4vZWxlbWVudHMvbW9kYWwvTW9kYWwnO1xuaW1wb3J0IHsgTm92b1RvYXN0U2VydmljZSB9IGZyb20gJy4vZWxlbWVudHMvdG9hc3QvVG9hc3RTZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgRmllbGRJbnRlcmFjdGlvbkFwaSB9IGZyb20gJy4vZWxlbWVudHMvZm9ybS9GaWVsZEludGVyYWN0aW9uQXBpJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IEdsb2JhbFJlZiwgQnJvd3Nlckdsb2JhbFJlZiB9IGZyb20gJy4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlY3VyaXR5IH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWN1cml0eS9TZWN1cml0eSc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcblxuY29uc3QgTk9WT19FTEVNRU5UU19QUk9WSURFUlMgPSBbXG4gIHsgcHJvdmlkZTogTm92b0RyYWd1bGFTZXJ2aWNlLCB1c2VDbGFzczogTm92b0RyYWd1bGFTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogTm92b01vZGFsUmVmLCB1c2VDbGFzczogTm92b01vZGFsUmVmIH0sXG4gIHsgcHJvdmlkZTogTm92b01vZGFsU2VydmljZSwgdXNlQ2xhc3M6IE5vdm9Nb2RhbFNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBHb29nbGVQbGFjZXNTZXJ2aWNlLCB1c2VDbGFzczogR29vZ2xlUGxhY2VzU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IE5vdm9Ub2FzdFNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvVG9hc3RTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogQ29tcG9uZW50VXRpbHMsIHVzZUNsYXNzOiBDb21wb25lbnRVdGlscyB9LFxuICB7IHByb3ZpZGU6IEdsb2JhbFJlZiwgdXNlQ2xhc3M6IEJyb3dzZXJHbG9iYWxSZWYgfSxcbiAgeyBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IE9wdGlvbnNTZXJ2aWNlLCB1c2VDbGFzczogT3B0aW9uc1NlcnZpY2UgfSxcbiAgRmllbGRJbnRlcmFjdGlvbkFwaSxcbiAgRGF0ZUZvcm1hdFNlcnZpY2UsXG4gIFNlY3VyaXR5LFxuICBOb3ZvVGVtcGxhdGVTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FbGVtZW50UHJvdmlkZXJzIHtcbiAgc3RhdGljIGZvclJvb3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOb3ZvRWxlbWVudFByb3ZpZGVycyxcbiAgICAgIHByb3ZpZGVyczogWy4uLk5PVk9fRUxFTUVOVFNfUFJPVklERVJTXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTm92b0VsZW1lbnRQcm92aWRlcnMsXG4gICAgfTtcbiAgfVxufVxuIl19