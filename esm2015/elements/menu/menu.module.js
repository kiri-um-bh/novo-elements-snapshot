import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoCommonModule } from '../common/common.module';
import { NovoIconModule } from '../icon/Icon.module';
import { MenuContentComponent } from './menu-content.component';
import { MenuItemDirective } from './menu-item.directive';
import { MenuComponent } from './menu.component';
import { MenuDirective } from './menu.directive';
import { NovoMenuService } from './menu.service';
import { MENU_OPTIONS } from './menu.tokens';
import * as i0 from "@angular/core";
export class NovoMenuModule {
    static forRoot(options) {
        return {
            ngModule: NovoMenuModule,
            providers: [
                NovoMenuService,
                {
                    provide: MENU_OPTIONS,
                    useValue: options,
                },
                { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
            ],
        };
    }
}
NovoMenuModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoMenuModule });
NovoMenuModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoMenuModule_Factory(t) { return new (t || NovoMenuModule)(); }, imports: [[CommonModule, OverlayModule, NovoCommonModule, NovoIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoMenuModule, { declarations: [MenuDirective, MenuComponent, MenuContentComponent, MenuItemDirective], imports: [CommonModule, OverlayModule, NovoCommonModule, NovoIconModule], exports: [MenuDirective, MenuComponent, MenuItemDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoMenuModule, [{
        type: NgModule,
        args: [{
                declarations: [MenuDirective, MenuComponent, MenuContentComponent, MenuItemDirective],
                entryComponents: [MenuContentComponent],
                exports: [MenuDirective, MenuComponent, MenuItemDirective],
                imports: [CommonModule, OverlayModule, NovoCommonModule, NovoIconModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9tZW51L21lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUzdDLE1BQU0sT0FBTyxjQUFjO0lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBc0I7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFO2FBQ3BFO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2tEQWJVLGNBQWM7MkdBQWQsY0FBYyxrQkFGaEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzt3RkFFN0QsY0FBYyxtQkFMVixhQUFhLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixhQUcxRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsYUFEN0QsYUFBYSxFQUFFLGFBQWEsRUFBRSxpQkFBaUI7a0RBRzlDLGNBQWM7Y0FOMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3JGLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixDQUFDO2dCQUMxRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzthQUN6RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bGxzY3JlZW5PdmVybGF5Q29udGFpbmVyLCBPdmVybGF5Q29udGFpbmVyLCBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0ljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL0ljb24ubW9kdWxlJztcbmltcG9ydCB7IE1lbnVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL21lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9NZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IE1FTlVfT1BUSU9OUyB9IGZyb20gJy4vbWVudS50b2tlbnMnO1xuaW1wb3J0IHsgSU1lbnVPcHRpb25zIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVudURpcmVjdGl2ZSwgTWVudUNvbXBvbmVudCwgTWVudUNvbnRlbnRDb21wb25lbnQsIE1lbnVJdGVtRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTWVudUNvbnRlbnRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTWVudURpcmVjdGl2ZSwgTWVudUNvbXBvbmVudCwgTWVudUl0ZW1EaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOb3ZvQ29tbW9uTW9kdWxlLCBOb3ZvSWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9NZW51TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KG9wdGlvbnM/OiBJTWVudU9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5vdm9NZW51TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOb3ZvTWVudU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOb3ZvTWVudVNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNRU5VX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIHsgcHJvdmlkZTogT3ZlcmxheUNvbnRhaW5lciwgdXNlQ2xhc3M6IEZ1bGxzY3JlZW5PdmVybGF5Q29udGFpbmVyIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==