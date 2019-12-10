/**
 * @fileoverview added by tsickle
 * Generated from: novo-elements.providers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsibm92by1lbGVtZW50cy5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0lBRXhFLHVCQUF1QixHQUFHO0lBQzlCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtJQUM3RCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtJQUNqRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7SUFDekQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO0lBQy9ELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtJQUN6RCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtJQUNyRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2xELEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtJQUMvRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtJQUNyRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixtQkFBbUI7Q0FDcEI7QUFFRDtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFaUSw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLG1CQUFNLHVCQUF1QixDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sNkJBQVE7OztJQUFmO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtpQkFDWjs7SUFjRCwyQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBYlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBHb29nbGVQbGFjZXNTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9wbGFjZXMvcGxhY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGFTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYgfSBmcm9tICcuL2VsZW1lbnRzL21vZGFsL01vZGFsJztcbmltcG9ydCB7IE5vdm9Ub2FzdFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IEZpZWxkSW50ZXJhY3Rpb25BcGkgfSBmcm9tICcuL2VsZW1lbnRzL2Zvcm0vRmllbGRJbnRlcmFjdGlvbkFwaSc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxSZWYsIEJyb3dzZXJHbG9iYWxSZWYgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTZWN1cml0eSB9IGZyb20gJy4vc2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHknO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL29wdGlvbnMvT3B0aW9uc1NlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5cbmNvbnN0IE5PVk9fRUxFTUVOVFNfUFJPVklERVJTID0gW1xuICB7IHByb3ZpZGU6IE5vdm9EcmFndWxhU2VydmljZSwgdXNlQ2xhc3M6IE5vdm9EcmFndWxhU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IE5vdm9Nb2RhbFJlZiwgdXNlQ2xhc3M6IE5vdm9Nb2RhbFJlZiB9LFxuICB7IHByb3ZpZGU6IE5vdm9Nb2RhbFNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvTW9kYWxTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogR29vZ2xlUGxhY2VzU2VydmljZSwgdXNlQ2xhc3M6IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBOb3ZvVG9hc3RTZXJ2aWNlLCB1c2VDbGFzczogTm92b1RvYXN0U2VydmljZSB9LFxuICB7IHByb3ZpZGU6IENvbXBvbmVudFV0aWxzLCB1c2VDbGFzczogQ29tcG9uZW50VXRpbHMgfSxcbiAgeyBwcm92aWRlOiBHbG9iYWxSZWYsIHVzZUNsYXNzOiBCcm93c2VyR2xvYmFsUmVmIH0sXG4gIHsgcHJvdmlkZTogTG9jYWxTdG9yYWdlU2VydmljZSwgdXNlQ2xhc3M6IExvY2FsU3RvcmFnZVNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBPcHRpb25zU2VydmljZSwgdXNlQ2xhc3M6IE9wdGlvbnNTZXJ2aWNlIH0sXG4gIEZpZWxkSW50ZXJhY3Rpb25BcGksXG4gIERhdGVGb3JtYXRTZXJ2aWNlLFxuICBTZWN1cml0eSxcbiAgTm92b1RlbXBsYXRlU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRWxlbWVudFByb3ZpZGVycyB7XG4gIHN0YXRpYyBmb3JSb290KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTm92b0VsZW1lbnRQcm92aWRlcnMsXG4gICAgICBwcm92aWRlcnM6IFsuLi5OT1ZPX0VMRU1FTlRTX1BST1ZJREVSU10sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5vdm9FbGVtZW50UHJvdmlkZXJzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==