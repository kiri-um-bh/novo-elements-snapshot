import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { AsideComponent } from './aside.component';
import { NovoAsideService } from './aside.service';
import * as i0 from "@angular/core";
export class NovoAsideModule {
}
NovoAsideModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoAsideModule });
NovoAsideModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoAsideModule_Factory(t) { return new (t || NovoAsideModule)(); }, providers: [NovoAsideService], imports: [[OverlayModule, PortalModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoAsideModule, { declarations: [AsideComponent], imports: [OverlayModule, PortalModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAsideModule, [{
        type: NgModule,
        args: [{
                imports: [OverlayModule, PortalModule],
                declarations: [AsideComponent],
                providers: [NovoAsideService],
                entryComponents: [AsideComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvYXNpZGUvYXNpZGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBUW5ELE1BQU0sT0FBTyxlQUFlOzttREFBZixlQUFlOzZHQUFmLGVBQWUsbUJBSGYsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUZwQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7d0ZBSzNCLGVBQWUsbUJBSlgsY0FBYyxhQURuQixhQUFhLEVBQUUsWUFBWTtrREFLMUIsZUFBZTtjQU4zQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztnQkFDdEMsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDN0IsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9hc2lkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0FzaWRlU2VydmljZSB9IGZyb20gJy4vYXNpZGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtBc2lkZUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW05vdm9Bc2lkZVNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBc2lkZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Bc2lkZU1vZHVsZSB7fVxuIl19