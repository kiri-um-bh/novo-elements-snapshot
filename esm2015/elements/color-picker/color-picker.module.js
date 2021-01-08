// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoPipesModule } from '../../pipes/Pipes.module';
import { NovoChipsModule } from '../chips/Chips.module';
import { NovoFieldModule } from '../field/field.module';
import { NovoIconModule } from '../icon/Icon.module';
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoColorInputElement } from './color-input.component';
import { NovoColorPickerComponent } from './color-picker.component';
import { NovoColorSwatchComponent } from './color-swatch.component';
import * as i0 from "@angular/core";
export class NovoColorPickerModule {
}
NovoColorPickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoColorPickerModule });
NovoColorPickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoColorPickerModule_Factory(t) { return new (t || NovoColorPickerModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            NovoPipesModule,
            NovoFieldModule,
            NovoOverlayModule,
            TextMaskModule,
            NovoIconModule,
            NovoChipsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoColorPickerModule, { declarations: [NovoColorPickerComponent, NovoColorInputElement, NovoColorSwatchComponent], imports: [CommonModule,
        FormsModule,
        NovoPipesModule,
        NovoFieldModule,
        NovoOverlayModule,
        TextMaskModule,
        NovoIconModule,
        NovoChipsModule], exports: [NovoColorPickerComponent, NovoColorInputElement, NovoColorSwatchComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoColorPickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NovoPipesModule,
                    NovoFieldModule,
                    NovoOverlayModule,
                    TextMaskModule,
                    NovoIconModule,
                    NovoChipsModule,
                ],
                declarations: [NovoColorPickerComponent, NovoColorInputElement, NovoColorSwatchComponent],
                exports: [NovoColorPickerComponent, NovoColorInputElement, NovoColorSwatchComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsU0FBUztBQUNULE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQWdCcEUsTUFBTSxPQUFPLHFCQUFxQjs7eURBQXJCLHFCQUFxQjt5SEFBckIscUJBQXFCLGtCQWJ2QjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGNBQWM7WUFDZCxlQUFlO1NBQ2hCO3dGQUlVLHFCQUFxQixtQkFIakIsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLGFBVHRGLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlLGFBR1Asd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCO2tEQUV4RSxxQkFBcUI7Y0FkakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDO2dCQUN6RixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsQ0FBQzthQUNyRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvUGlwZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9QaXBlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NoaXBzTW9kdWxlIH0gZnJvbSAnLi4vY2hpcHMvQ2hpcHMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9GaWVsZE1vZHVsZSB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vSWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b092ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Db2xvcklucHV0RWxlbWVudCB9IGZyb20gJy4vY29sb3ItaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9Db2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvQ29sb3JTd2F0Y2hDb21wb25lbnQgfSBmcm9tICcuL2NvbG9yLXN3YXRjaC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5vdm9QaXBlc01vZHVsZSxcbiAgICBOb3ZvRmllbGRNb2R1bGUsXG4gICAgTm92b092ZXJsYXlNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgTm92b0ljb25Nb2R1bGUsXG4gICAgTm92b0NoaXBzTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvQ29sb3JQaWNrZXJDb21wb25lbnQsIE5vdm9Db2xvcklucHV0RWxlbWVudCwgTm92b0NvbG9yU3dhdGNoQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05vdm9Db2xvclBpY2tlckNvbXBvbmVudCwgTm92b0NvbG9ySW5wdXRFbGVtZW50LCBOb3ZvQ29sb3JTd2F0Y2hDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29sb3JQaWNrZXJNb2R1bGUge31cbiJdfQ==