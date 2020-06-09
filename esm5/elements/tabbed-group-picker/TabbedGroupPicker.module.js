// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
// APP
import { NovoTabbedGroupPickerElement } from './TabbedGroupPicker';
import { NovoTabModule } from '../tabs/Tabs.module';
import { NovoListModule } from '../list/List.module';
import { NovoFormExtrasModule } from '../form/extras/FormExtras.module';
import { NovoButtonModule } from '../button/Button.module';
import { NovoDropdownModule } from '../dropdown/Dropdown.module';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
var NovoTabbedGroupPickerModule = /** @class */ (function () {
    function NovoTabbedGroupPickerModule() {
    }
    NovoTabbedGroupPickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTabbedGroupPickerModule });
    NovoTabbedGroupPickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTabbedGroupPickerModule_Factory(t) { return new (t || NovoTabbedGroupPickerModule)(); }, providers: [NovoLabelService], imports: [[
                CommonModule,
                FormsModule,
                ScrollingModule,
                NovoTabModule,
                NovoListModule,
                NovoFormExtrasModule,
                NovoButtonModule,
                NovoDropdownModule,
            ]] });
    return NovoTabbedGroupPickerModule;
}());
export { NovoTabbedGroupPickerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTabbedGroupPickerModule, { declarations: [NovoTabbedGroupPickerElement], imports: [CommonModule,
        FormsModule,
        ScrollingModule,
        NovoTabModule,
        NovoListModule,
        NovoFormExtrasModule,
        NovoButtonModule,
        NovoDropdownModule], exports: [NovoTabbedGroupPickerElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabbedGroupPickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ScrollingModule,
                    NovoTabModule,
                    NovoListModule,
                    NovoFormExtrasModule,
                    NovoButtonModule,
                    NovoDropdownModule,
                ],
                providers: [NovoLabelService],
                declarations: [NovoTabbedGroupPickerElement],
                exports: [NovoTabbedGroupPickerElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmJlZC1ncm91cC1waWNrZXIvVGFiYmVkR3JvdXBQaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE1BQU07QUFDTixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUVyRTtJQUFBO0tBZTJDO21FQUE5QiwyQkFBMkI7eUlBQTNCLDJCQUEyQixtQkFKM0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQVZwQjtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjthQUNuQjtzQ0F4Qkg7Q0E2QjJDLEFBZjNDLElBZTJDO1NBQTlCLDJCQUEyQjt3RkFBM0IsMkJBQTJCLG1CQUh2Qiw0QkFBNEIsYUFWekMsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixhQUlWLDRCQUE0QjtrREFFM0IsMkJBQTJCO2NBZnZDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixrQkFBa0I7aUJBQ25CO2dCQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUM3QixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1RhYmJlZEdyb3VwUGlja2VyRWxlbWVudCB9IGZyb20gJy4vVGFiYmVkR3JvdXBQaWNrZXInO1xuaW1wb3J0IHsgTm92b1RhYk1vZHVsZSB9IGZyb20gJy4uL3RhYnMvVGFicy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xpc3RNb2R1bGUgfSBmcm9tICcuLi9saXN0L0xpc3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Gb3JtRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9leHRyYXMvRm9ybUV4dHJhcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBTY3JvbGxpbmdNb2R1bGUsXG4gICAgTm92b1RhYk1vZHVsZSxcbiAgICBOb3ZvTGlzdE1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9Ecm9wZG93bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTm92b0xhYmVsU2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9UYWJiZWRHcm91cFBpY2tlckVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b1RhYmJlZEdyb3VwUGlja2VyRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJiZWRHcm91cFBpY2tlck1vZHVsZSB7fVxuIl19