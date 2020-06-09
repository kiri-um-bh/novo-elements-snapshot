// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// APP
import { NovoButtonModule } from './../../button/Button.module';
import { NovoSelectModule } from './../../select/Select.module';
import { NovoPickerModule } from './../../picker/Picker.module';
import { NovoLoadingModule } from './../../loading/Loading.module';
import { NovoPipesModule } from './../../../pipes/Pipes.module';
import { NovoDragulaModule } from './../../dragula/Dragula.module';
import { NovoAddressElement } from './address/Address';
import { NovoCheckboxElement } from './checkbox/Checkbox';
import { NovoCheckListElement } from './checkbox/CheckList';
import { NovoFileInputElement } from './file/FileInput';
import { NovoTooltipModule } from './../../tooltip/Tooltip.module';
import * as i0 from "@angular/core";
var NovoFormExtrasModule = /** @class */ (function () {
    function NovoFormExtrasModule() {
    }
    NovoFormExtrasModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoFormExtrasModule });
    NovoFormExtrasModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoFormExtrasModule_Factory(t) { return new (t || NovoFormExtrasModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                NovoPipesModule,
                NovoButtonModule,
                NovoSelectModule,
                NovoPickerModule,
                NovoLoadingModule,
                NovoDragulaModule,
                NovoTooltipModule,
            ]] });
    return NovoFormExtrasModule;
}());
export { NovoFormExtrasModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoFormExtrasModule, { declarations: [NovoAddressElement, NovoCheckboxElement, NovoCheckListElement, NovoFileInputElement], imports: [CommonModule,
        FormsModule,
        NovoPipesModule,
        NovoButtonModule,
        NovoSelectModule,
        NovoPickerModule,
        NovoLoadingModule,
        NovoDragulaModule,
        NovoTooltipModule], exports: [NovoAddressElement, NovoCheckboxElement, NovoCheckListElement, NovoFileInputElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFormExtrasModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NovoPipesModule,
                    NovoButtonModule,
                    NovoSelectModule,
                    NovoPickerModule,
                    NovoLoadingModule,
                    NovoDragulaModule,
                    NovoTooltipModule,
                ],
                declarations: [NovoAddressElement, NovoCheckboxElement, NovoCheckListElement, NovoFileInputElement],
                exports: [NovoAddressElement, NovoCheckboxElement, NovoCheckListElement, NovoFileInputElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUV4dHJhcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvRm9ybUV4dHJhcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUVuRTtJQUFBO0tBZW9DOzREQUF2QixvQkFBb0I7MkhBQXBCLG9CQUFvQixrQkFkdEI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjthQUNsQjsrQkE1Qkg7Q0FnQ29DLEFBZnBDLElBZW9DO1NBQXZCLG9CQUFvQjt3RkFBcEIsb0JBQW9CLG1CQUhoQixrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsYUFWaEcsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUIsYUFHVCxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7a0RBRWxGLG9CQUFvQjtjQWZoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixpQkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDO2dCQUNuRyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQzthQUMvRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlbGVjdE1vZHVsZSB9IGZyb20gJy4vLi4vLi4vc2VsZWN0L1NlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vLi4vcGlja2VyL1BpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLy4uLy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BpcGVzTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9waXBlcy9QaXBlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFNb2R1bGUgfSBmcm9tICcuLy4uLy4uL2RyYWd1bGEvRHJhZ3VsYS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0FkZHJlc3NFbGVtZW50IH0gZnJvbSAnLi9hZGRyZXNzL0FkZHJlc3MnO1xuaW1wb3J0IHsgTm92b0NoZWNrYm94RWxlbWVudCB9IGZyb20gJy4vY2hlY2tib3gvQ2hlY2tib3gnO1xuaW1wb3J0IHsgTm92b0NoZWNrTGlzdEVsZW1lbnQgfSBmcm9tICcuL2NoZWNrYm94L0NoZWNrTGlzdCc7XG5pbXBvcnQgeyBOb3ZvRmlsZUlucHV0RWxlbWVudCB9IGZyb20gJy4vZmlsZS9GaWxlSW5wdXQnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLy4uLy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5vdm9QaXBlc01vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9TZWxlY3RNb2R1bGUsXG4gICAgTm92b1BpY2tlck1vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvRHJhZ3VsYU1vZHVsZSxcbiAgICBOb3ZvVG9vbHRpcE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0FkZHJlc3NFbGVtZW50LCBOb3ZvQ2hlY2tib3hFbGVtZW50LCBOb3ZvQ2hlY2tMaXN0RWxlbWVudCwgTm92b0ZpbGVJbnB1dEVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b0FkZHJlc3NFbGVtZW50LCBOb3ZvQ2hlY2tib3hFbGVtZW50LCBOb3ZvQ2hlY2tMaXN0RWxlbWVudCwgTm92b0ZpbGVJbnB1dEVsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUV4dHJhc01vZHVsZSB7fVxuIl19