/**
 * @fileoverview added by tsickle
 * Generated from: elements/stepper/stepper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    stepLabel: [{ type: ContentChild, args: [NovoStepLabel, { static: false },] }],
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
            const steps = this._steps.toArray();
            /** @type {?} */
            const length = steps.length - 1;
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
            const steps = this._steps.toArray();
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
        const steps = this._steps.toArray();
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
                styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;-webkit-box-flex:1;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:-webkit-box;display:flex;height:80px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;overflow:visible;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;-webkit-transform:scale(.8);transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
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
                styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;-webkit-box-flex:1;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:-webkit-box;display:flex;height:80px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;overflow:visible;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;-webkit-transform:scale(.8);transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsUUFBUSxFQUVSLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWpELE1BQU0sT0FBTyxTQUFTLEdBQUcsT0FBTzs7QUFDaEMsTUFBTSxPQUFPLFlBQVksR0FBRyxVQUFVO0FBUXRDLE1BQU0sT0FBTyxRQUFTLFNBQVEsT0FBTzs7OztJQVluQyxZQUFtRCxPQUFtQjtRQUNwRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsa0VBQWtDO2dCQUNsQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWpDaUIsVUFBVSx1QkE4Q2IsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUM7Ozt3QkFWaEQsWUFBWSxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBRzdDLEtBQUs7b0JBRUwsS0FBSzttQkFFTCxLQUFLOzs7Ozs7O0lBUE4sNkJBQ3lCOztJQUV6Qix5QkFDYzs7SUFDZCx5QkFDYzs7SUFDZCx3QkFDYTs7QUFVZixNQUFNLE9BQU8sV0FBWSxTQUFRLFVBQVU7SUFIM0M7Ozs7O1FBaUJFLG1CQUFjLEdBQXdDLEVBQUUsQ0FBQztJQXlDM0QsQ0FBQzs7OztJQXZDQyxJQUFJLFNBQVM7UUFDWCxJQUFJOztrQkFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7O2tCQUM3QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQy9CLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNqRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQUM7SUFDN0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJOztrQkFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osYUFBYTtTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhOztjQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbkMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRTtnQkFDeEUsT0FBTyxNQUFNLENBQUM7YUFDZjtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7MEJBR0UsWUFBWSxTQUFDLGNBQWM7cUJBSTNCLGVBQWUsU0FBQyxRQUFRO3FCQUl4QixlQUFlLFNBQUMsaUJBQWlCOzs7Ozs7O0lBUmxDLGtDQUN3Qzs7Ozs7SUFHeEMsNkJBQzRCOzs7OztJQUc1Qiw2QkFDcUM7Ozs7O0lBR3JDLHFDQUF5RDs7QUEwRDNELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxXQUFXOzs7WUFmckQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGd2REFBc0M7Z0JBRXRDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUseUJBQXlCO29CQUNoQyxrQkFBa0IsRUFBRSxZQUFZO29CQUNoQyxJQUFJLEVBQUUsU0FBUztpQkFDaEI7Z0JBQ0QsVUFBVSxFQUFFLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUM7Z0JBQzVELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsQ0FBQzs7Z0JBRXpFLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OzRCQUVFLEtBQUs7Ozs7SUFBTiw4Q0FDc0I7O0FBaUJ4QixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsV0FBVzs7Ozs7SUFJbEQsWUFBd0IsR0FBbUIsRUFBRSxpQkFBb0M7UUFDL0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbXBEQUFvQztnQkFFcEMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx1QkFBdUI7b0JBQzlCLGtCQUFrQixFQUFFLFVBQVU7b0JBQzlCLElBQUksRUFBRSxTQUFTO2lCQUNoQjtnQkFDRCxVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDMUQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO2dCQUN2RSxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUEvSVEsY0FBYyx1QkFvSlIsUUFBUTtZQXhJckIsaUJBQWlCOzs7NEJBcUloQixLQUFLOzs7O0lBQU4sNENBQ3NCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrU3RlcCwgQ2RrU3RlcHBlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRm9jdXNhYmxlT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9wdGlvbmFsLFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTm92b1N0ZXBIZWFkZXIgfSBmcm9tICcuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvU3RlcExhYmVsIH0gZnJvbSAnLi9zdGVwLWxhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBub3ZvU3RlcHBlckFuaW1hdGlvbnMgfSBmcm9tICcuL3N0ZXBwZXIuYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOb3ZvSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2ljb24vSWNvbic7XG5cbmV4cG9ydCBjb25zdCBfTm92b1N0ZXAgPSBDZGtTdGVwO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvU3RlcHBlciA9IENka1N0ZXBwZXI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N0ZXAgZXh0ZW5kcyBDZGtTdGVwIHtcbiAgLyoqIENvbnRlbnQgZm9yIHN0ZXAgbGFiZWwgZ2l2ZW4gYnkgYDxuZy10ZW1wbGF0ZSBub3ZvU3RlcExhYmVsPmAuICovXG4gIEBDb250ZW50Q2hpbGQoTm92b1N0ZXBMYWJlbCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHN0ZXBMYWJlbDogTm92b1N0ZXBMYWJlbDtcblxuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwcGVyKSkgc3RlcHBlcjogQ2RrU3RlcHBlcikge1xuICAgIHN1cGVyKHN0ZXBwZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU3RlcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcHBlciBleHRlbmRzIENka1N0ZXBwZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqIFRoZSBsaXN0IG9mIHN0ZXAgaGVhZGVycyBvZiB0aGUgc3RlcHMgaW4gdGhlIHN0ZXBwZXIuICovXG4gIEBWaWV3Q2hpbGRyZW4oTm92b1N0ZXBIZWFkZXIpXG4gIF9zdGVwSGVhZGVyOiBRdWVyeUxpc3Q8Rm9jdXNhYmxlT3B0aW9uPjtcblxuICAvKiogU3RlcHMgdGhhdCB0aGUgc3RlcHBlciBob2xkcy4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvU3RlcClcbiAgX3N0ZXBzOiBRdWVyeUxpc3Q8Tm92b1N0ZXA+O1xuXG4gIC8qKiBDdXN0b20gaWNvbiBvdmVycmlkZXMgcGFzc2VkIGluIGJ5IHRoZSBjb25zdW1lci4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvSWNvbkNvbXBvbmVudClcbiAgX2ljb25zOiBRdWVyeUxpc3Q8Tm92b0ljb25Db21wb25lbnQ+O1xuXG4gIC8qKiBDb25zdW1lci1zcGVjaWZpZWQgdGVtcGxhdGUtcmVmcyB0byBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBoZWFkZXIgaWNvbnMuICovXG4gIF9pY29uT3ZlcnJpZGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuXG4gIGdldCBjb21wbGV0ZWQoKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgICAgY29uc3QgbGVuZ3RoID0gc3RlcHMubGVuZ3RoIC0gMTtcbiAgICAgIHJldHVybiBzdGVwc1tsZW5ndGhdLmNvbXBsZXRlZCAmJiBsZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gTWFyayB0aGUgY29tcG9uZW50IGZvciBjaGFuZ2UgZGV0ZWN0aW9uIHdoZW5ldmVyIHRoZSBjb250ZW50IGNoaWxkcmVuIHF1ZXJ5IGNoYW5nZXNcbiAgICB0aGlzLl9zdGVwcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdGF0ZUNoYW5nZWQoKSk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgICBzdGVwc1t0aGlzLnNlbGVjdGVkSW5kZXhdLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIHRoaXMuX3N0YXRlQ2hhbmdlZCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgfVxuXG4gIGdldEluZGljYXRvclR5cGUoaW5kZXg6IG51bWJlcik6ICdub25lJyB8ICcnIHwgJ2VkaXQnIHwgJ2RvbmUnIHtcbiAgICBjb25zdCBzdGVwcyA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgaWYgKHN0ZXBzW2luZGV4XSAmJiBpbmRleCA9PT0gc3RlcHMubGVuZ3RoIC0gMSAmJiBzdGVwc1tpbmRleF0uY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybiAnZG9uZSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2VkaXQnO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHJldHVybiAnZG9uZSc7XG4gICAgfVxuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1ob3Jpem9udGFsLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItaG9yaXpvbnRhbC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1zdGVwcGVyLWhvcml6b250YWwnLFxuICAgICdhcmlhLW9yaWVudGF0aW9uJzogJ2hvcml6b250YWwnLFxuICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgfSxcbiAgYW5pbWF0aW9uczogW25vdm9TdGVwcGVyQW5pbWF0aW9ucy5ob3Jpem9udGFsU3RlcFRyYW5zaXRpb25dLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5vdm9TdGVwcGVyLCB1c2VFeGlzdGluZzogTm92b0hvcml6b250YWxTdGVwcGVyIH1dLFxuICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ib3Jpem9udGFsU3RlcHBlciBleHRlbmRzIE5vdm9TdGVwcGVyIHtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXZlcnRpY2FsLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItdmVydGljYWwuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tc3RlcHBlci12ZXJ0aWNhbCcsXG4gICAgJ2FyaWEtb3JpZW50YXRpb24nOiAndmVydGljYWwnLFxuICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgfSxcbiAgYW5pbWF0aW9uczogW25vdm9TdGVwcGVyQW5pbWF0aW9ucy52ZXJ0aWNhbFN0ZXBUcmFuc2l0aW9uXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOb3ZvU3RlcHBlciwgdXNlRXhpc3Rpbmc6IE5vdm9WZXJ0aWNhbFN0ZXBwZXIgfV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1ZlcnRpY2FsU3RlcHBlciBleHRlbmRzIE5vdm9TdGVwcGVyIHtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGRpcjogRGlyZWN0aW9uYWxpdHksIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGRpciwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIHRoaXMuX29yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxufVxuIl19