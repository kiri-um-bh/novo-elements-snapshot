/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, Inject, forwardRef } from '@angular/core';
import { NovoStepper } from './stepper.component';
import { NovoStepHeader } from './step-header.component';
export class NovoStepStatus {
    /**
     * @param {?} stepper
     * @param {?} step
     */
    constructor(stepper, step) { }
}
NovoStepStatus.decorators = [
    { type: Component, args: [{
                selector: 'novo-step-status',
                template: "<div class=\"novo-stepper-status-line\" [ngClass]=\"state\"></div>\n<div [ngSwitch]=\"state\" class=\"novo-stepper-status-icon\">\n  <novo-icon size=\"small\" color=\"positive\" *ngSwitchCase=\"'edit'\">check-circle</novo-icon>\n  <novo-icon size=\"small\" color=\"positive\" *ngSwitchCase=\"'done'\">check-circle-filled</novo-icon>\n  <novo-icon size=\"small\" color=\"positive\" *ngSwitchDefault>circle-o</novo-icon>\n</div>\n",
                // encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'novo-step-status',
                }
            }] }
];
/** @nocollapse */
NovoStepStatus.ctorParameters = () => [
    { type: NovoStepper, decorators: [{ type: Inject, args: [forwardRef(() => NovoStepper),] }] },
    { type: NovoStepHeader, decorators: [{ type: Inject, args: [forwardRef(() => NovoStepHeader),] }] }
];
NovoStepStatus.propDecorators = {
    state: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoStepStatus.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1zdGF0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFZekQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBSXpCLFlBQ3lDLE9BQW9CLEVBQ2pCLElBQW9CLElBQzdELENBQUM7OztZQWpCTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsd2JBQXlDOztnQkFFekMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO2lCQUMxQjthQUNGOzs7O1lBWlEsV0FBVyx1QkFrQmYsTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFqQmhDLGNBQWMsdUJBa0JsQixNQUFNLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzs7O29CQUx6QyxLQUFLOzs7O0lBQU4sK0JBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvU3RlcHBlciB9IGZyb20gJy4vc3RlcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b1N0ZXBIZWFkZXIgfSBmcm9tICcuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3RlcC1zdGF0dXMnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXAtc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgLy8gZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLXN0ZXAtc3RhdHVzJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N0ZXBTdGF0dXMge1xuICBASW5wdXQoKVxuICBzdGF0ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOb3ZvU3RlcHBlcikpIHN0ZXBwZXI6IE5vdm9TdGVwcGVyLFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOb3ZvU3RlcEhlYWRlcikpIHN0ZXA6IE5vdm9TdGVwSGVhZGVyLFxuICApIHt9XG59XG4iXX0=