// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoButtonModule } from '../button/Button.module';
import { NovoToastModule } from '../toast/Toast.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { NovoDropdownModule } from '../dropdown/Dropdown.module';
import { NovoFormModule } from '../form/Form.module';
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoDatePickerModule } from '../date-picker/DatePicker.module';
import { NovoTableExtrasModule } from './extras/TableExtras.module';
import { NovoTableElement } from './Table';
import { NovoFormExtrasModule } from '../form/extras/FormExtras.module';
import * as i0 from "@angular/core";
var NovoTableModule = /** @class */ (function () {
    function NovoTableModule() {
    }
    NovoTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTableModule });
    NovoTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTableModule_Factory(t) { return new (t || NovoTableModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                NovoFormModule,
                NovoTableExtrasModule,
                NovoToastModule,
                NovoButtonModule,
                NovoTooltipModule,
                NovoDropdownModule,
                NovoLoadingModule,
                NovoDatePickerModule,
                NovoFormExtrasModule,
                TextMaskModule,
            ]] });
    return NovoTableModule;
}());
export { NovoTableModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTableModule, { declarations: [NovoTableElement], imports: [CommonModule,
        FormsModule,
        NovoFormModule,
        NovoTableExtrasModule,
        NovoToastModule,
        NovoButtonModule,
        NovoTooltipModule,
        NovoDropdownModule,
        NovoLoadingModule,
        NovoDatePickerModule,
        NovoFormExtrasModule,
        TextMaskModule], exports: [NovoTableElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NovoFormModule,
                    NovoTableExtrasModule,
                    NovoToastModule,
                    NovoButtonModule,
                    NovoTooltipModule,
                    NovoDropdownModule,
                    NovoLoadingModule,
                    NovoDatePickerModule,
                    NovoFormExtrasModule,
                    TextMaskModule,
                ],
                declarations: [NovoTableElement],
                exports: [NovoTableElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL1RhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLFNBQVM7QUFDVCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUV4RTtJQUFBO0tBa0IrQjt1REFBbEIsZUFBZTtpSEFBZixlQUFlLGtCQWpCakI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QscUJBQXFCO2dCQUNyQixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3BCLGNBQWM7YUFDZjswQkFoQ0g7Q0FvQytCLEFBbEIvQixJQWtCK0I7U0FBbEIsZUFBZTt3RkFBZixlQUFlLG1CQUhYLGdCQUFnQixhQWI3QixZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLGNBQWMsYUFHTixnQkFBZ0I7a0RBRWYsZUFBZTtjQWxCM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub2FzdE1vZHVsZSB9IGZyb20gJy4uL3RvYXN0L1RvYXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcGRvd24vRHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Gb3JtTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9Gb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGFibGVFeHRyYXNNb2R1bGUgfSBmcm9tICcuL2V4dHJhcy9UYWJsZUV4dHJhcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RhYmxlRWxlbWVudCB9IGZyb20gJy4vVGFibGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTm92b0Zvcm1Nb2R1bGUsXG4gICAgTm92b1RhYmxlRXh0cmFzTW9kdWxlLFxuICAgIE5vdm9Ub2FzdE1vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9Ub29sdGlwTW9kdWxlLFxuICAgIE5vdm9Ecm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b1RhYmxlRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvVGFibGVFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlTW9kdWxlIHt9XG4iXX0=