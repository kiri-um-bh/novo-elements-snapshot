import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoListModule } from '../list/List.module';
import { PlacesListComponent } from './places.component';
import { GooglePlacesService } from './places.service';
import * as i0 from "@angular/core";
export class GooglePlacesModule {
}
GooglePlacesModule.ɵmod = i0.ɵɵdefineNgModule({ type: GooglePlacesModule });
GooglePlacesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GooglePlacesModule_Factory(t) { return new (t || GooglePlacesModule)(); }, providers: [GooglePlacesService], imports: [[CommonModule, HttpClientModule, FormsModule, NovoListModule]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BsYWNlcy9wbGFjZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBUXZELE1BQU0sT0FBTyxrQkFBa0I7O3NEQUFsQixrQkFBa0I7bUhBQWxCLGtCQUFrQixtQkFGbEIsQ0FBQyxtQkFBbUIsQ0FBQyxZQUZ2QixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDO3dGQUkzRCxrQkFBa0IsbUJBTGQsbUJBQW1CLGFBQ3hCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxhQUMzRCxtQkFBbUI7a0RBR2xCLGtCQUFrQjtjQU45QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDO2dCQUN0RSxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5vdm9MaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9MaXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQbGFjZXNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wbGFjZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUGxhY2VzTGlzdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvTGlzdE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtQbGFjZXNMaXN0Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbR29vZ2xlUGxhY2VzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZVBsYWNlc01vZHVsZSB7fVxuIl19