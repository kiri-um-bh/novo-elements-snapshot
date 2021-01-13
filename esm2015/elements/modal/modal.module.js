// NG2
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// APP
import { NovoButtonModule } from '../button/Button.module';
import { NovoModalContainerComponent } from './modal-container.component';
import { NovoModalElement, NovoModalNotificationElement } from './modal.component';
import { NovoModalService } from './modal.service';
import * as i0 from "@angular/core";
export class NovoModalModule {
}
NovoModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoModalModule });
NovoModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoModalModule_Factory(t) { return new (t || NovoModalModule)(); }, providers: [NovoModalService], imports: [[OverlayModule, PortalModule, CommonModule, NovoButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoModalModule, { declarations: [NovoModalContainerComponent, NovoModalElement, NovoModalNotificationElement], imports: [OverlayModule, PortalModule, CommonModule, NovoButtonModule], exports: [NovoModalElement, NovoModalNotificationElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalModule, [{
        type: NgModule,
        args: [{
                imports: [OverlayModule, PortalModule, CommonModule, NovoButtonModule],
                declarations: [NovoModalContainerComponent, NovoModalElement, NovoModalNotificationElement],
                exports: [NovoModalElement, NovoModalNotificationElement],
                providers: [NovoModalService],
                entryComponents: [NovoModalContainerComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFTbkQsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxtQkFIZixDQUFDLGdCQUFnQixDQUFDLFlBSHBCLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0ZBTTNELGVBQWUsbUJBTFgsMkJBQTJCLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLGFBRGhGLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixhQUUzRCxnQkFBZ0IsRUFBRSw0QkFBNEI7a0RBSTdDLGVBQWU7Y0FQM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN0RSxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDM0YsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUM3QixlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b01vZGFsRWxlbWVudCwgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbT3ZlcmxheU1vZHVsZSwgUG9ydGFsTW9kdWxlLCBDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvTW9kYWxDb250YWluZXJDb21wb25lbnQsIE5vdm9Nb2RhbEVsZW1lbnQsIE5vdm9Nb2RhbE5vdGlmaWNhdGlvbkVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b01vZGFsRWxlbWVudCwgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudF0sXG4gIHByb3ZpZGVyczogW05vdm9Nb2RhbFNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOb3ZvTW9kYWxDb250YWluZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxNb2R1bGUge31cbiJdfQ==