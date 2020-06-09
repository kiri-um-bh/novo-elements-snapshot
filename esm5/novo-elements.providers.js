import { __read, __spread } from "tslib";
// NG2
import { NgModule } from '@angular/core';
import { NovoDragulaService } from './elements/dragula/DragulaService';
import { FieldInteractionApi } from './elements/form/FieldInteractionApi';
import { NovoModalRef } from './elements/modal/Modal';
import { NovoModalService } from './elements/modal/ModalService';
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
    NovoElementProviders.forRoot = function () {
        return {
            ngModule: NovoElementProviders,
            providers: __spread(NOVO_ELEMENTS_PROVIDERS),
        };
    };
    NovoElementProviders.forChild = function () {
        return {
            ngModule: NovoElementProviders,
        };
    };
    NovoElementProviders.ɵmod = i0.ɵɵdefineNgModule({ type: NovoElementProviders });
    NovoElementProviders.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoElementProviders_Factory(t) { return new (t || NovoElementProviders)(); }, imports: [[]] });
    return NovoElementProviders;
}());
export { NovoElementProviders };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoElementProviders, [{
        type: NgModule,
        args: [{
                imports: [],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsibm92by1lbGVtZW50cy5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUV4RSxJQUFNLHVCQUF1QixHQUFHO0lBQzlCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtJQUM3RCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtJQUNqRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7SUFDekQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO0lBQy9ELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtJQUN6RCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtJQUNyRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2xELEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtJQUMvRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtJQUNyRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGO0lBQUE7S0FnQkM7SUFaUSw0QkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxXQUFNLHVCQUF1QixDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDO0lBRU0sNkJBQVEsR0FBZjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1NBQy9CLENBQUM7SUFDSixDQUFDOzREQVpVLG9CQUFvQjsySEFBcEIsb0JBQW9CLGtCQUZ0QixFQUFFOytCQWpDYjtDQWdEQyxBQWhCRCxJQWdCQztTQWJZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBSGhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsRUFBRTthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGFTZXJ2aWNlJztcbmltcG9ydCB7IEZpZWxkSW50ZXJhY3Rpb25BcGkgfSBmcm9tICcuL2VsZW1lbnRzL2Zvcm0vRmllbGRJbnRlcmFjdGlvbkFwaSc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYgfSBmcm9tICcuL2VsZW1lbnRzL21vZGFsL01vZGFsJztcbmltcG9ydCB7IE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZSc7XG5pbXBvcnQgeyBHb29nbGVQbGFjZXNTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9wbGFjZXMvcGxhY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RvYXN0U2VydmljZSB9IGZyb20gJy4vZWxlbWVudHMvdG9hc3QvVG9hc3RTZXJ2aWNlJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IEJyb3dzZXJHbG9iYWxSZWYsIEdsb2JhbFJlZiB9IGZyb20gJy4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcbmltcG9ydCB7IFNlY3VyaXR5IH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWN1cml0eS9TZWN1cml0eSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5jb25zdCBOT1ZPX0VMRU1FTlRTX1BST1ZJREVSUyA9IFtcbiAgeyBwcm92aWRlOiBOb3ZvRHJhZ3VsYVNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBOb3ZvTW9kYWxSZWYsIHVzZUNsYXNzOiBOb3ZvTW9kYWxSZWYgfSxcbiAgeyBwcm92aWRlOiBOb3ZvTW9kYWxTZXJ2aWNlLCB1c2VDbGFzczogTm92b01vZGFsU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IEdvb2dsZVBsYWNlc1NlcnZpY2UsIHVzZUNsYXNzOiBHb29nbGVQbGFjZXNTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogTm92b1RvYXN0U2VydmljZSwgdXNlQ2xhc3M6IE5vdm9Ub2FzdFNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBDb21wb25lbnRVdGlscywgdXNlQ2xhc3M6IENvbXBvbmVudFV0aWxzIH0sXG4gIHsgcHJvdmlkZTogR2xvYmFsUmVmLCB1c2VDbGFzczogQnJvd3Nlckdsb2JhbFJlZiB9LFxuICB7IHByb3ZpZGU6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogT3B0aW9uc1NlcnZpY2UsIHVzZUNsYXNzOiBPcHRpb25zU2VydmljZSB9LFxuICBGaWVsZEludGVyYWN0aW9uQXBpLFxuICBEYXRlRm9ybWF0U2VydmljZSxcbiAgU2VjdXJpdHksXG4gIE5vdm9UZW1wbGF0ZVNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0VsZW1lbnRQcm92aWRlcnMge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5vdm9FbGVtZW50UHJvdmlkZXJzPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOb3ZvRWxlbWVudFByb3ZpZGVycyxcbiAgICAgIHByb3ZpZGVyczogWy4uLk5PVk9fRUxFTUVOVFNfUFJPVklERVJTXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tm92b0VsZW1lbnRQcm92aWRlcnM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5vdm9FbGVtZW50UHJvdmlkZXJzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==