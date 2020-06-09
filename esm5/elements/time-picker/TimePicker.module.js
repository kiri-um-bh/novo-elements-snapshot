// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoListModule } from '../list/List.module';
import { NovoTimePickerElement } from './TimePicker';
import { NovoTimePickerInputElement } from './TimePickerInput';
import * as i0 from "@angular/core";
var NovoTimePickerModule = /** @class */ (function () {
    function NovoTimePickerModule() {
    }
    NovoTimePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTimePickerModule });
    NovoTimePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTimePickerModule_Factory(t) { return new (t || NovoTimePickerModule)(); }, imports: [[CommonModule, FormsModule, TextMaskModule, NovoOverlayModule, NovoListModule]] });
    return NovoTimePickerModule;
}());
export { NovoTimePickerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTimePickerModule, { declarations: [NovoTimePickerElement, NovoTimePickerInputElement], imports: [CommonModule, FormsModule, TextMaskModule, NovoOverlayModule, NovoListModule], exports: [NovoTimePickerElement, NovoTimePickerInputElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTimePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, TextMaskModule, NovoOverlayModule, NovoListModule],
                declarations: [NovoTimePickerElement, NovoTimePickerInputElement],
                exports: [NovoTimePickerElement, NovoTimePickerInputElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGltZS1waWNrZXIvVGltZVBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxTQUFTO0FBQ1QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE1BQU07QUFDTixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUUvRDtJQUFBO0tBS29DOzREQUF2QixvQkFBb0I7MkhBQXBCLG9CQUFvQixrQkFKdEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUM7K0JBYnpGO0NBaUJvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkFIaEIscUJBQXFCLEVBQUUsMEJBQTBCLGFBRHRELFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsYUFFNUUscUJBQXFCLEVBQUUsMEJBQTBCO2tEQUVoRCxvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztnQkFDdkYsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ2pFLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO2FBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbWVQaWNrZXJFbGVtZW50IH0gZnJvbSAnLi9UaW1lUGlja2VyJztcbmltcG9ydCB7IE5vdm9UaW1lUGlja2VySW5wdXRFbGVtZW50IH0gZnJvbSAnLi9UaW1lUGlja2VySW5wdXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgVGV4dE1hc2tNb2R1bGUsIE5vdm9PdmVybGF5TW9kdWxlLCBOb3ZvTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9UaW1lUGlja2VyRWxlbWVudCwgTm92b1RpbWVQaWNrZXJJbnB1dEVsZW1lbnRdLFxuICBleHBvcnRzOiBbTm92b1RpbWVQaWNrZXJFbGVtZW50LCBOb3ZvVGltZVBpY2tlcklucHV0RWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaW1lUGlja2VyTW9kdWxlIHt9XG4iXX0=