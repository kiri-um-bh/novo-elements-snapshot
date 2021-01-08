// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoButtonModule } from '../button/Button.module';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoErrorElement } from './error/error';
import { NovoFieldElement, NovoFieldPrefixDirective, NovoFieldSuffixDirective } from './field';
import { NovoFieldsElement } from './fieldset';
import { NovoDateFormatDirective } from './formats/date-format';
import { NovoTimeFormatDirective } from './formats/time-format';
import { NovoHintElement } from './hint/hint';
import { NovoInput } from './input';
import { NovoLabelElement } from './label/label';
import { NovoPickerDirective } from './picker.directive';
import { NovoPickerToggleElement } from './toggle/picker-toggle.component';
import * as i0 from "@angular/core";
export class NovoFieldModule {
}
NovoFieldModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoFieldModule });
NovoFieldModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoFieldModule_Factory(t) { return new (t || NovoFieldModule)(); }, imports: [[CommonModule, NovoButtonModule, NovoOverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoFieldModule, { declarations: [NovoFieldElement,
        NovoLabelElement,
        NovoHintElement,
        NovoErrorElement,
        NovoInput,
        NovoFieldPrefixDirective,
        NovoFieldSuffixDirective,
        NovoFieldsElement,
        NovoTimeFormatDirective,
        NovoDateFormatDirective,
        NovoPickerToggleElement,
        NovoPickerDirective], imports: [CommonModule, NovoButtonModule, NovoOverlayModule], exports: [NovoFieldElement,
        NovoLabelElement,
        NovoHintElement,
        NovoErrorElement,
        NovoInput,
        NovoFieldPrefixDirective,
        NovoFieldSuffixDirective,
        NovoFieldsElement,
        NovoTimeFormatDirective,
        NovoDateFormatDirective,
        NovoPickerToggleElement,
        NovoPickerDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFieldModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule, NovoOverlayModule],
                declarations: [
                    NovoFieldElement,
                    NovoLabelElement,
                    NovoHintElement,
                    NovoErrorElement,
                    NovoInput,
                    NovoFieldPrefixDirective,
                    NovoFieldSuffixDirective,
                    NovoFieldsElement,
                    NovoTimeFormatDirective,
                    NovoDateFormatDirective,
                    NovoPickerToggleElement,
                    NovoPickerDirective,
                ],
                exports: [
                    NovoFieldElement,
                    NovoLabelElement,
                    NovoHintElement,
                    NovoErrorElement,
                    NovoInput,
                    NovoFieldPrefixDirective,
                    NovoFieldSuffixDirective,
                    NovoFieldsElement,
                    NovoTimeFormatDirective,
                    NovoDateFormatDirective,
                    NovoPickerToggleElement,
                    NovoPickerDirective,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZmllbGQvZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFnQzNFLE1BQU0sT0FBTyxlQUFlOzttREFBZixlQUFlOzZHQUFmLGVBQWUsa0JBOUJqQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQzt3RkE4QmpELGVBQWUsbUJBNUJ4QixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsU0FBUztRQUNULHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQixhQWJYLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsYUFnQnpELGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1Qsd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsbUJBQW1CO2tEQUdWLGVBQWU7Y0EvQjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzVELFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLFNBQVM7b0JBQ1Qsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Vycm9yRWxlbWVudCB9IGZyb20gJy4vZXJyb3IvZXJyb3InO1xuaW1wb3J0IHsgTm92b0ZpZWxkRWxlbWVudCwgTm92b0ZpZWxkUHJlZml4RGlyZWN0aXZlLCBOb3ZvRmllbGRTdWZmaXhEaXJlY3RpdmUgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IE5vdm9GaWVsZHNFbGVtZW50IH0gZnJvbSAnLi9maWVsZHNldCc7XG5pbXBvcnQgeyBOb3ZvRGF0ZUZvcm1hdERpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybWF0cy9kYXRlLWZvcm1hdCc7XG5pbXBvcnQgeyBOb3ZvVGltZUZvcm1hdERpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybWF0cy90aW1lLWZvcm1hdCc7XG5pbXBvcnQgeyBOb3ZvSGludEVsZW1lbnQgfSBmcm9tICcuL2hpbnQvaGludCc7XG5pbXBvcnQgeyBOb3ZvSW5wdXQgfSBmcm9tICcuL2lucHV0JztcbmltcG9ydCB7IE5vdm9MYWJlbEVsZW1lbnQgfSBmcm9tICcuL2xhYmVsL2xhYmVsJztcbmltcG9ydCB7IE5vdm9QaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm92b1BpY2tlclRvZ2dsZUVsZW1lbnQgfSBmcm9tICcuL3RvZ2dsZS9waWNrZXItdG9nZ2xlLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlLCBOb3ZvT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9GaWVsZEVsZW1lbnQsXG4gICAgTm92b0xhYmVsRWxlbWVudCxcbiAgICBOb3ZvSGludEVsZW1lbnQsXG4gICAgTm92b0Vycm9yRWxlbWVudCxcbiAgICBOb3ZvSW5wdXQsXG4gICAgTm92b0ZpZWxkUHJlZml4RGlyZWN0aXZlLFxuICAgIE5vdm9GaWVsZFN1ZmZpeERpcmVjdGl2ZSxcbiAgICBOb3ZvRmllbGRzRWxlbWVudCxcbiAgICBOb3ZvVGltZUZvcm1hdERpcmVjdGl2ZSxcbiAgICBOb3ZvRGF0ZUZvcm1hdERpcmVjdGl2ZSxcbiAgICBOb3ZvUGlja2VyVG9nZ2xlRWxlbWVudCxcbiAgICBOb3ZvUGlja2VyRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b0ZpZWxkRWxlbWVudCxcbiAgICBOb3ZvTGFiZWxFbGVtZW50LFxuICAgIE5vdm9IaW50RWxlbWVudCxcbiAgICBOb3ZvRXJyb3JFbGVtZW50LFxuICAgIE5vdm9JbnB1dCxcbiAgICBOb3ZvRmllbGRQcmVmaXhEaXJlY3RpdmUsXG4gICAgTm92b0ZpZWxkU3VmZml4RGlyZWN0aXZlLFxuICAgIE5vdm9GaWVsZHNFbGVtZW50LFxuICAgIE5vdm9UaW1lRm9ybWF0RGlyZWN0aXZlLFxuICAgIE5vdm9EYXRlRm9ybWF0RGlyZWN0aXZlLFxuICAgIE5vdm9QaWNrZXJUb2dnbGVFbGVtZW50LFxuICAgIE5vdm9QaWNrZXJEaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZE1vZHVsZSB7fVxuIl19