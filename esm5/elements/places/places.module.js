import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoListModule } from '../list/List.module';
import { PlacesListComponent } from './places.component';
import { GooglePlacesService } from './places.service';
import * as i0 from "@angular/core";
var GooglePlacesModule = /** @class */ (function () {
    function GooglePlacesModule() {
    }
    GooglePlacesModule.ɵmod = i0.ɵɵdefineNgModule({ type: GooglePlacesModule });
    GooglePlacesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GooglePlacesModule_Factory(t) { return new (t || GooglePlacesModule)(); }, providers: [GooglePlacesService], imports: [[CommonModule, HttpClientModule, FormsModule, NovoListModule]] });
    return GooglePlacesModule;
}());
export { GooglePlacesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GooglePlacesModule, { declarations: [PlacesListComponent], imports: [CommonModule, HttpClientModule, FormsModule, NovoListModule], exports: [PlacesListComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GooglePlacesModule, [{
        type: NgModule,
        args: [{
                declarations: [PlacesListComponent],
                imports: [CommonModule, HttpClientModule, FormsModule, NovoListModule],
                exports: [PlacesListComponent],
                providers: [GooglePlacesService],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wbGFjZXMvcGxhY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUV2RDtJQUFBO0tBTW1DOzBEQUF0QixrQkFBa0I7dUhBQWxCLGtCQUFrQixtQkFGbEIsQ0FBQyxtQkFBbUIsQ0FBQyxZQUZ2QixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDOzZCQVZ4RTtDQWNtQyxBQU5uQyxJQU1tQztTQUF0QixrQkFBa0I7d0ZBQWxCLGtCQUFrQixtQkFMZCxtQkFBbUIsYUFDeEIsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxjQUFjLGFBQzNELG1CQUFtQjtrREFHbEIsa0JBQWtCO2NBTjlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUM7Z0JBQ3RFLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTm92b0xpc3RNb2R1bGUgfSBmcm9tICcuLi9saXN0L0xpc3QubW9kdWxlJztcbmltcG9ydCB7IFBsYWNlc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BsYWNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR29vZ2xlUGxhY2VzU2VydmljZSB9IGZyb20gJy4vcGxhY2VzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtQbGFjZXNMaXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9MaXN0TW9kdWxlXSxcbiAgZXhwb3J0czogW1BsYWNlc0xpc3RDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtHb29nbGVQbGFjZXNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlUGxhY2VzTW9kdWxlIHsgfVxuIl19