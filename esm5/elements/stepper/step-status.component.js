/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, Inject, forwardRef } from '@angular/core';
import { NovoStepper } from './stepper.component';
import { NovoStepHeader } from './step-header.component';
var NovoStepStatus = /** @class */ (function () {
    function NovoStepStatus(stepper, step) {
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
    NovoStepStatus.ctorParameters = function () { return [
        { type: NovoStepper, decorators: [{ type: Inject, args: [forwardRef(function () { return NovoStepper; }),] }] },
        { type: NovoStepHeader, decorators: [{ type: Inject, args: [forwardRef(function () { return NovoStepHeader; }),] }] }
    ]; };
    NovoStepStatus.propDecorators = {
        state: [{ type: Input }]
    };
    return NovoStepStatus;
}());
export { NovoStepStatus };
if (false) {
    /** @type {?} */
    NovoStepStatus.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1zdGF0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQ7SUFjRSx3QkFDeUMsT0FBb0IsRUFDakIsSUFBb0I7SUFDN0QsQ0FBQzs7Z0JBakJMLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix3YkFBeUM7O29CQUV6QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxrQkFBa0I7cUJBQzFCO2lCQUNGOzs7Z0JBWlEsV0FBVyx1QkFrQmYsTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsV0FBVyxFQUFYLENBQVcsQ0FBQztnQkFqQmhDLGNBQWMsdUJBa0JsQixNQUFNLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxDQUFDOzs7d0JBTHpDLEtBQUs7O0lBT1IscUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVJZLGNBQWM7OztJQUN6QiwrQkFDYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9TdGVwcGVyIH0gZnJvbSAnLi9zdGVwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvU3RlcEhlYWRlciB9IGZyb20gJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zdGVwLXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC1zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tc3RlcC1zdGF0dXMnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcFN0YXR1cyB7XG4gIEBJbnB1dCgpXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwcGVyKSkgc3RlcHBlcjogTm92b1N0ZXBwZXIsXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwSGVhZGVyKSkgc3RlcDogTm92b1N0ZXBIZWFkZXIsXG4gICkge31cbn1cbiJdfQ==