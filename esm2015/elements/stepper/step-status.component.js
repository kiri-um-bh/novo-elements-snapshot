/**
 * @fileoverview added by tsickle
 * Generated from: elements/stepper/step-status.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    { type: NovoStepper, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NovoStepper)),] }] },
    { type: NovoStepHeader, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NovoStepHeader)),] }] }
];
NovoStepStatus.propDecorators = {
    state: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoStepStatus.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1zdGF0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWXpELE1BQU0sT0FBTyxjQUFjOzs7OztJQUl6QixZQUN5QyxPQUFvQixFQUNqQixJQUFvQixJQUM3RCxDQUFDOzs7WUFqQkwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHdiQUF5Qzs7Z0JBRXpDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtpQkFDMUI7YUFDRjs7OztZQVpRLFdBQVcsdUJBa0JmLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFDO1lBakJoQyxjQUFjLHVCQWtCbEIsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUM7OztvQkFMekMsS0FBSzs7OztJQUFOLCtCQUNjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1N0ZXBwZXIgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9TdGVwSGVhZGVyIH0gZnJvbSAnLi9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXN0ZXAtc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwLXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1zdGVwLXN0YXR1cycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TdGVwU3RhdHVzIHtcbiAgQElucHV0KClcbiAgc3RhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTm92b1N0ZXBwZXIpKSBzdGVwcGVyOiBOb3ZvU3RlcHBlcixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTm92b1N0ZXBIZWFkZXIpKSBzdGVwOiBOb3ZvU3RlcEhlYWRlcixcbiAgKSB7fVxufVxuIl19