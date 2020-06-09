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
export class NovoTableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL1RhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLFNBQVM7QUFDVCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQW9CeEUsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxrQkFqQmpCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixjQUFjO1NBQ2Y7d0ZBSVUsZUFBZSxtQkFIWCxnQkFBZ0IsYUFiN0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixjQUFjLGFBR04sZ0JBQWdCO2tEQUVmLGVBQWU7Y0FsQjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QscUJBQXFCO29CQUNyQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9hc3RNb2R1bGUgfSBmcm9tICcuLi90b2FzdC9Ub2FzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybU1vZHVsZSB9IGZyb20gJy4uL2Zvcm0vRm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RhYmxlRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi9leHRyYXMvVGFibGVFeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UYWJsZUVsZW1lbnQgfSBmcm9tICcuL1RhYmxlJztcbmltcG9ydCB7IE5vdm9Gb3JtRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9leHRyYXMvRm9ybUV4dHJhcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5vdm9Gb3JtTW9kdWxlLFxuICAgIE5vdm9UYWJsZUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvVG9hc3RNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvVG9vbHRpcE1vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b0xvYWRpbmdNb2R1bGUsXG4gICAgTm92b0RhdGVQaWNrZXJNb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9UYWJsZUVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b1RhYmxlRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZU1vZHVsZSB7fVxuIl19