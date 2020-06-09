// NG
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
// App
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoSelectElement } from './Select';
import * as i0 from "@angular/core";
var NovoSelectModule = /** @class */ (function () {
    function NovoSelectModule() {
    }
    NovoSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoSelectModule });
    NovoSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoSelectModule_Factory(t) { return new (t || NovoSelectModule)(); }, imports: [[CommonModule, FormsModule, A11yModule, NovoOverlayModule]] });
    return NovoSelectModule;
}());
export { NovoSelectModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoSelectModule, { declarations: [NovoSelectElement], imports: [CommonModule, FormsModule, A11yModule, NovoOverlayModule], exports: [NovoSelectElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, A11yModule, NovoOverlayModule],
                declarations: [NovoSelectElement],
                exports: [NovoSelectElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zZWxlY3QvU2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUU3QztJQUFBO0tBS2dDO3dEQUFuQixnQkFBZ0I7bUhBQWhCLGdCQUFnQixrQkFKbEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQzsyQkFWckU7Q0FjZ0MsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCO3dGQUFoQixnQkFBZ0IsbUJBSFosaUJBQWlCLGFBRHRCLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixhQUV4RCxpQkFBaUI7a0RBRWhCLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ25FLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5Jztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b092ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWxlY3RFbGVtZW50IH0gZnJvbSAnLi9TZWxlY3QnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgQTExeU1vZHVsZSwgTm92b092ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvU2VsZWN0RWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvU2VsZWN0RWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWxlY3RNb2R1bGUge31cbiJdfQ==