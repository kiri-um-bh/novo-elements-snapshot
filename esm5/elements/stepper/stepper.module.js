/**
 * @fileoverview added by tsickle
 * Generated from: elements/stepper/stepper.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NovoButtonModule } from '../button/Button.module';
import { NovoIconModule } from '../icon/Icon.module';
import { NovoStepHeader } from './step-header.component';
import { NovoStepLabel } from './step-label.component';
import { NovoStepStatus } from './step-status.component';
import { NovoHorizontalStepper, NovoStep, NovoStepper, NovoVerticalStepper } from './stepper.component';
var NovoStepperModule = /** @class */ (function () {
    function NovoStepperModule() {
    }
    NovoStepperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, PortalModule, NovoButtonModule, CdkStepperModule, NovoIconModule, A11yModule],
                    exports: [NovoHorizontalStepper, NovoVerticalStepper, NovoStep, NovoStepLabel, NovoStepper, NovoStepHeader, NovoStepStatus],
                    declarations: [NovoHorizontalStepper, NovoVerticalStepper, NovoStep, NovoStepLabel, NovoStepper, NovoStepHeader, NovoStepStatus],
                },] }
    ];
    return NovoStepperModule;
}());
export { NovoStepperModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEc7SUFBQTtJQUtnQyxDQUFDOztnQkFMaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFVBQVUsQ0FBQztvQkFDckcsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztvQkFDM0gsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztpQkFDakk7O0lBQytCLHdCQUFDO0NBQUEsQUFMakMsSUFLaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDZGtTdGVwcGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9JY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9JY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU3RlcEhlYWRlciB9IGZyb20gJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9TdGVwTGFiZWwgfSBmcm9tICcuL3N0ZXAtbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9TdGVwU3RhdHVzIH0gZnJvbSAnLi9zdGVwLXN0YXR1cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0hvcml6b250YWxTdGVwcGVyLCBOb3ZvU3RlcCwgTm92b1N0ZXBwZXIsIE5vdm9WZXJ0aWNhbFN0ZXBwZXIgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9ydGFsTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlLCBDZGtTdGVwcGVyTW9kdWxlLCBOb3ZvSWNvbk1vZHVsZSwgQTExeU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOb3ZvSG9yaXpvbnRhbFN0ZXBwZXIsIE5vdm9WZXJ0aWNhbFN0ZXBwZXIsIE5vdm9TdGVwLCBOb3ZvU3RlcExhYmVsLCBOb3ZvU3RlcHBlciwgTm92b1N0ZXBIZWFkZXIsIE5vdm9TdGVwU3RhdHVzXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0hvcml6b250YWxTdGVwcGVyLCBOb3ZvVmVydGljYWxTdGVwcGVyLCBOb3ZvU3RlcCwgTm92b1N0ZXBMYWJlbCwgTm92b1N0ZXBwZXIsIE5vdm9TdGVwSGVhZGVyLCBOb3ZvU3RlcFN0YXR1c10sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TdGVwcGVyTW9kdWxlIHt9XG4iXX0=