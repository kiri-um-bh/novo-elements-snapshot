/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';
import { Component, ContentChild, ContentChildren, Directive, forwardRef, Inject, QueryList, ViewChildren, ChangeDetectorRef, ChangeDetectionStrategy, Optional, Input, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NovoStepHeader } from './step-header.component';
import { NovoStepLabel } from './step-label.component';
import { novoStepperAnimations } from './stepper.animations';
import { NovoIconComponent } from '../icon/Icon';
/** @type {?} */
export const _NovoStep = CdkStep;
/** @type {?} */
export const _NovoStepper = CdkStepper;
export class NovoStep extends CdkStep {
    /**
     * @param {?} stepper
     */
    constructor(stepper) {
        super(stepper);
    }
}
NovoStep.decorators = [
    { type: Component, args: [{
                selector: 'novo-step',
                template: "<ng-template><ng-content></ng-content></ng-template>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoStep.ctorParameters = () => [
    { type: CdkStepper, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NovoStepper)),] }] }
];
NovoStep.propDecorators = {
    stepLabel: [{ type: ContentChild, args: [NovoStepLabel,] }],
    theme: [{ type: Input }],
    color: [{ type: Input }],
    icon: [{ type: Input }]
};
if (false) {
    /**
     * Content for step label given by `<ng-template novoStepLabel>`.
     * @type {?}
     */
    NovoStep.prototype.stepLabel;
    /** @type {?} */
    NovoStep.prototype.theme;
    /** @type {?} */
    NovoStep.prototype.color;
    /** @type {?} */
    NovoStep.prototype.icon;
}
export class NovoStepper extends CdkStepper {
    constructor() {
        super(...arguments);
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        this._iconOverrides = {};
    }
    /**
     * @return {?}
     */
    get completed() {
        try {
            /** @type {?} */
            let steps = this._steps.toArray();
            /** @type {?} */
            let length = steps.length - 1;
            return steps[length].completed && length === this.selectedIndex;
        }
        catch (err) {
            return false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => this._stateChanged()));
    }
    /**
     * @return {?}
     */
    complete() {
        try {
            /** @type {?} */
            let steps = this._steps.toArray();
            steps[this.selectedIndex].completed = true;
            this.next();
            this._stateChanged();
        }
        catch (err) {
            // do nothing
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getIndicatorType(index) {
        /** @type {?} */
        let steps = this._steps.toArray();
        if (index === this.selectedIndex) {
            if (steps[index] && index === steps.length - 1 && steps[index].completed) {
                return 'done';
            }
            return 'edit';
        }
        if (index < this.selectedIndex) {
            return 'done';
        }
        return 'none';
    }
}
NovoStepper.decorators = [
    { type: Directive, args: [{
                selector: '[novoStepper]',
            },] }
];
NovoStepper.propDecorators = {
    _stepHeader: [{ type: ViewChildren, args: [NovoStepHeader,] }],
    _steps: [{ type: ContentChildren, args: [NovoStep,] }],
    _icons: [{ type: ContentChildren, args: [NovoIconComponent,] }]
};
if (false) {
    /**
     * The list of step headers of the steps in the stepper.
     * @type {?}
     */
    NovoStepper.prototype._stepHeader;
    /**
     * Steps that the stepper holds.
     * @type {?}
     */
    NovoStepper.prototype._steps;
    /**
     * Custom icon overrides passed in by the consumer.
     * @type {?}
     */
    NovoStepper.prototype._icons;
    /**
     * Consumer-specified template-refs to be used to override the header icons.
     * @type {?}
     */
    NovoStepper.prototype._iconOverrides;
}
export class NovoHorizontalStepper extends NovoStepper {
}
NovoHorizontalStepper.decorators = [
    { type: Component, args: [{
                selector: 'novo-horizontal-stepper',
                template: "<div class=\"novo-horizontal-stepper-header-container\">\n    <div class=\"novo-stepper-horizontal-line complete\"></div>\n  <ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\">\n    <novo-step-header  class=\"novo-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [index]=\"i\"\n                     [theme]=\"step.theme\"\n                     [color]=\"step.color\"\n                     [icon]=\"step.icon\"\n                     [state]=\"getIndicatorType(i)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [iconOverrides]=\"_iconOverrides\">\n    </novo-step-header>\n  </ng-container>\n  <div class=\"novo-stepper-horizontal-line\" [class.complete]=\"completed\"></div>\n</div>\n\n<div class=\"novo-horizontal-content-container\">\n  <div *ngFor=\"let step of _steps; let i = index\"\n       class=\"novo-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
                host: {
                    class: 'novo-stepper-horizontal',
                    'aria-orientation': 'horizontal',
                    role: 'tablist',
                },
                animations: [novoStepperAnimations.horizontalStepTransition],
                providers: [{ provide: NovoStepper, useExisting: NovoHorizontalStepper }],
                // encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@-webkit-keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:flex;height:80px;flex-flow:column;overflow:visible;align-items:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:flex;width:100%;justify-content:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
            }] }
];
NovoHorizontalStepper.propDecorators = {
    selectedIndex: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoHorizontalStepper.prototype.selectedIndex;
}
export class NovoVerticalStepper extends NovoStepper {
    /**
     * @param {?} dir
     * @param {?} changeDetectorRef
     */
    constructor(dir, changeDetectorRef) {
        super(dir, changeDetectorRef);
        this._orientation = 'vertical';
    }
}
NovoVerticalStepper.decorators = [
    { type: Component, args: [{
                selector: 'novo-vertical-stepper',
                template: "<div class=\"novo-step\" *ngFor=\"let step of _steps; let i = index; let isLast = last\">\n    <novo-step-header  class=\"novo-vertical-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex === i\"\n                     [index]=\"i\"\n                     [theme]=\"step.theme\"\n                     [color]=\"step.color\"\n                     [icon]=\"step.icon\"\n                     [state]=\"getIndicatorType(i)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [iconOverrides]=\"_iconOverrides\">\n    </novo-step-header>\n\n    <div class=\"novo-vertical-content-container\" [class.novo-stepper-vertical-line]=\"!isLast\" [ngClass]=\"getIndicatorType(i)\">\n      <div class=\"novo-vertical-stepper-content\" role=\"tabpanel\"\n           [@stepTransition]=\"_getAnimationDirection(i)\"\n           [id]=\"_getStepContentId(i)\"\n           [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n           [attr.aria-expanded]=\"selectedIndex === i\">\n        <div class=\"novo-vertical-content\">\n          <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n",
                host: {
                    class: 'novo-stepper-vertical',
                    'aria-orientation': 'vertical',
                    role: 'tablist',
                },
                animations: [novoStepperAnimations.verticalStepTransition],
                providers: [{ provide: NovoStepper, useExisting: NovoVerticalStepper }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@-webkit-keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:flex;height:80px;flex-flow:column;overflow:visible;align-items:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:flex;width:100%;justify-content:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
            }] }
];
/** @nocollapse */
NovoVerticalStepper.ctorParameters = () => [
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
NovoVerticalStepper.propDecorators = {
    selectedIndex: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoVerticalStepper.prototype.selectedIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixRQUFRLEVBRVIsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFakQsTUFBTSxPQUFPLFNBQVMsR0FBRyxPQUFPOztBQUNoQyxNQUFNLE9BQU8sWUFBWSxHQUFHLFVBQVU7QUFRdEMsTUFBTSxPQUFPLFFBQVMsU0FBUSxPQUFPOzs7O0lBWW5DLFlBQW1ELE9BQW1CO1FBQ3BFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixrRUFBa0M7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hE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RSxDQUFDOztnQkFFekUsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7NEJBRUUsS0FBSzs7OztJQUFOLDhDQUNzQjs7QUFpQnhCLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxXQUFXOzs7OztJQUlsRCxZQUF3QixHQUFtQixFQUFFLGlCQUFvQztRQUMvRSxLQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxtcERBQW9DO2dCQUVwQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHVCQUF1QjtvQkFDOUIsa0JBQWtCLEVBQUUsVUFBVTtvQkFDOUIsSUFBSSxFQUFFLFNBQVM7aUJBQ2hCO2dCQUNELFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDO2dCQUMxRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3ZFLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQS9JUSxjQUFjLHVCQW9KUixRQUFRO1lBeElyQixpQkFBaUI7Ozs0QkFxSWhCLEtBQUs7Ozs7SUFBTiw0Q0FDc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtTdGVwLCBDZGtTdGVwcGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBGb2N1c2FibGVPcHRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3B0aW9uYWwsXG4gIFRlbXBsYXRlUmVmLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOb3ZvU3RlcEhlYWRlciB9IGZyb20gJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9TdGVwTGFiZWwgfSBmcm9tICcuL3N0ZXAtbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IG5vdm9TdGVwcGVyQW5pbWF0aW9ucyB9IGZyb20gJy4vc3RlcHBlci5hbmltYXRpb25zJztcbmltcG9ydCB7IE5vdm9JY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi9JY29uJztcblxuZXhwb3J0IGNvbnN0IF9Ob3ZvU3RlcCA9IENka1N0ZXA7XG5leHBvcnQgY29uc3QgX05vdm9TdGVwcGVyID0gQ2RrU3RlcHBlcjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcCBleHRlbmRzIENka1N0ZXAge1xuICAvKiogQ29udGVudCBmb3Igc3RlcCBsYWJlbCBnaXZlbiBieSBgPG5nLXRlbXBsYXRlIG5vdm9TdGVwTGFiZWw+YC4gKi9cbiAgQENvbnRlbnRDaGlsZChOb3ZvU3RlcExhYmVsKVxuICBzdGVwTGFiZWw6IE5vdm9TdGVwTGFiZWw7XG5cbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOb3ZvU3RlcHBlcikpIHN0ZXBwZXI6IENka1N0ZXBwZXIpIHtcbiAgICBzdXBlcihzdGVwcGVyKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1N0ZXBwZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKiBUaGUgbGlzdCBvZiBzdGVwIGhlYWRlcnMgb2YgdGhlIHN0ZXBzIGluIHRoZSBzdGVwcGVyLiAqL1xuICBAVmlld0NoaWxkcmVuKE5vdm9TdGVwSGVhZGVyKVxuICBfc3RlcEhlYWRlcjogUXVlcnlMaXN0PEZvY3VzYWJsZU9wdGlvbj47XG5cbiAgLyoqIFN0ZXBzIHRoYXQgdGhlIHN0ZXBwZXIgaG9sZHMuICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1N0ZXApXG4gIF9zdGVwczogUXVlcnlMaXN0PE5vdm9TdGVwPjtcblxuICAvKiogQ3VzdG9tIGljb24gb3ZlcnJpZGVzIHBhc3NlZCBpbiBieSB0aGUgY29uc3VtZXIuICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b0ljb25Db21wb25lbnQpXG4gIF9pY29uczogUXVlcnlMaXN0PE5vdm9JY29uQ29tcG9uZW50PjtcblxuICAvKiogQ29uc3VtZXItc3BlY2lmaWVkIHRlbXBsYXRlLXJlZnMgdG8gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgaGVhZGVyIGljb25zLiAqL1xuICBfaWNvbk92ZXJyaWRlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcblxuICBnZXQgY29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgc3RlcHMgPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgICBsZXQgbGVuZ3RoID0gc3RlcHMubGVuZ3RoIC0gMTtcbiAgICAgIHJldHVybiBzdGVwc1tsZW5ndGhdLmNvbXBsZXRlZCAmJiBsZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gTWFyayB0aGUgY29tcG9uZW50IGZvciBjaGFuZ2UgZGV0ZWN0aW9uIHdoZW5ldmVyIHRoZSBjb250ZW50IGNoaWxkcmVuIHF1ZXJ5IGNoYW5nZXNcbiAgICB0aGlzLl9zdGVwcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdGF0ZUNoYW5nZWQoKSk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHN0ZXBzID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgICAgc3RlcHNbdGhpcy5zZWxlY3RlZEluZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB0aGlzLl9zdGF0ZUNoYW5nZWQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cblxuICBnZXRJbmRpY2F0b3JUeXBlKGluZGV4OiBudW1iZXIpOiAnbm9uZScgfCAnJyB8ICdlZGl0JyB8ICdkb25lJyB7XG4gICAgbGV0IHN0ZXBzID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICBpZiAoc3RlcHNbaW5kZXhdICYmIGluZGV4ID09PSBzdGVwcy5sZW5ndGggLSAxICYmIHN0ZXBzW2luZGV4XS5jb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuICdkb25lJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnZWRpdCc7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgcmV0dXJuICdkb25lJztcbiAgICB9XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWhvcml6b250YWwtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1ob3Jpem9udGFsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLXN0ZXBwZXItaG9yaXpvbnRhbCcsXG4gICAgJ2FyaWEtb3JpZW50YXRpb24nOiAnaG9yaXpvbnRhbCcsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICB9LFxuICBhbmltYXRpb25zOiBbbm92b1N0ZXBwZXJBbmltYXRpb25zLmhvcml6b250YWxTdGVwVHJhbnNpdGlvbl0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTm92b1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBOb3ZvSG9yaXpvbnRhbFN0ZXBwZXIgfV0sXG4gIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hvcml6b250YWxTdGVwcGVyIGV4dGVuZHMgTm92b1N0ZXBwZXIge1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdmVydGljYWwtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci12ZXJ0aWNhbC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1zdGVwcGVyLXZlcnRpY2FsJyxcbiAgICAnYXJpYS1vcmllbnRhdGlvbic6ICd2ZXJ0aWNhbCcsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICB9LFxuICBhbmltYXRpb25zOiBbbm92b1N0ZXBwZXJBbmltYXRpb25zLnZlcnRpY2FsU3RlcFRyYW5zaXRpb25dLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5vdm9TdGVwcGVyLCB1c2VFeGlzdGluZzogTm92b1ZlcnRpY2FsU3RlcHBlciB9XSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVmVydGljYWxTdGVwcGVyIGV4dGVuZHMgTm92b1N0ZXBwZXIge1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZGlyLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgdGhpcy5fb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9XG59XG4iXX0=