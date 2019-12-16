/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/Table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var NovoTableModule = /** @class */ (function () {
    function NovoTableModule() {
    }
    NovoTableModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return NovoTableModule;
}());
export { NovoTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL1RhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEU7SUFBQTtJQWtCOEIsQ0FBQzs7Z0JBbEI5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7O0lBQzZCLHNCQUFDO0NBQUEsQUFsQi9CLElBa0IrQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9hc3RNb2R1bGUgfSBmcm9tICcuLi90b2FzdC9Ub2FzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybU1vZHVsZSB9IGZyb20gJy4uL2Zvcm0vRm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RhYmxlRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi9leHRyYXMvVGFibGVFeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UYWJsZUVsZW1lbnQgfSBmcm9tICcuL1RhYmxlJztcbmltcG9ydCB7IE5vdm9Gb3JtRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9leHRyYXMvRm9ybUV4dHJhcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5vdm9Gb3JtTW9kdWxlLFxuICAgIE5vdm9UYWJsZUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvVG9hc3RNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvVG9vbHRpcE1vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b0xvYWRpbmdNb2R1bGUsXG4gICAgTm92b0RhdGVQaWNrZXJNb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9UYWJsZUVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b1RhYmxlRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZU1vZHVsZSB7fVxuIl19