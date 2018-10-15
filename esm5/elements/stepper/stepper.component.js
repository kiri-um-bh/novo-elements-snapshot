/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';
import { Component, ContentChild, ContentChildren, Directive, forwardRef, Inject, QueryList, ViewChildren, ChangeDetectorRef, ChangeDetectionStrategy, Optional, Input, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NovoStepHeader } from './step-header.component';
import { NovoStepLabel } from './step-label.component';
import { novoStepperAnimations } from './stepper.animations';
import { NovoIconComponent } from '../icon/Icon';
/** @type {?} */
export var _NovoStep = CdkStep;
/** @type {?} */
export var _NovoStepper = CdkStepper;
var NovoStep = /** @class */ (function (_super) {
    tslib_1.__extends(NovoStep, _super);
    function NovoStep(stepper) {
        return _super.call(this, stepper) || this;
    }
    NovoStep.decorators = [
        { type: Component, args: [{
                    selector: 'novo-step',
                    template: "<ng-template><ng-content></ng-content></ng-template>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoStep.ctorParameters = function () { return [
        { type: CdkStepper, decorators: [{ type: Inject, args: [forwardRef(function () { return NovoStepper; }),] }] }
    ]; };
    NovoStep.propDecorators = {
        stepLabel: [{ type: ContentChild, args: [NovoStepLabel,] }],
        theme: [{ type: Input }],
        color: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return NovoStep;
}(CdkStep));
export { NovoStep };
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
var NovoStepper = /** @class */ (function (_super) {
    tslib_1.__extends(NovoStepper, _super);
    function NovoStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Consumer-specified template-refs to be used to override the header icons. */
        _this._iconOverrides = {};
        return _this;
    }
    Object.defineProperty(NovoStepper.prototype, "completed", {
        get: /**
         * @return {?}
         */
        function () {
            try {
                /** @type {?} */
                var steps = this._steps.toArray();
                /** @type {?} */
                var length_1 = steps.length - 1;
                return steps[length_1].completed && length_1 === this.selectedIndex;
            }
            catch (err) {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoStepper.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe(function () { return _this._stateChanged(); });
    };
    /**
     * @return {?}
     */
    NovoStepper.prototype.complete = /**
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var steps = this._steps.toArray();
            steps[this.selectedIndex].completed = true;
            this.next();
            this._stateChanged();
        }
        catch (err) {
            // do nothing
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NovoStepper.prototype.getIndicatorType = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var steps = this._steps.toArray();
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
    };
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
    return NovoStepper;
}(CdkStepper));
export { NovoStepper };
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
var NovoHorizontalStepper = /** @class */ (function (_super) {
    tslib_1.__extends(NovoHorizontalStepper, _super);
    function NovoHorizontalStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
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
                    styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:flex;height:80px;flex-flow:column;overflow:visible;align-items:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:flex;width:100%;justify-content:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;-webkit-transform:scale(.8);transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
                }] }
    ];
    NovoHorizontalStepper.propDecorators = {
        selectedIndex: [{ type: Input }]
    };
    return NovoHorizontalStepper;
}(NovoStepper));
export { NovoHorizontalStepper };
if (false) {
    /** @type {?} */
    NovoHorizontalStepper.prototype.selectedIndex;
}
var NovoVerticalStepper = /** @class */ (function (_super) {
    tslib_1.__extends(NovoVerticalStepper, _super);
    function NovoVerticalStepper(dir, changeDetectorRef) {
        var _this = _super.call(this, dir, changeDetectorRef) || this;
        _this._orientation = 'vertical';
        return _this;
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
                    styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:flex;height:80px;flex-flow:column;overflow:visible;align-items:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:flex;width:100%;justify-content:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;-webkit-transform:scale(.8);transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
                }] }
    ];
    NovoVerticalStepper.ctorParameters = function () { return [
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
    NovoVerticalStepper.propDecorators = {
        selectedIndex: [{ type: Input }]
    };
    return NovoVerticalStepper;
}(NovoStepper));
export { NovoVerticalStepper };
if (false) {
    /** @type {?} */
    NovoVerticalStepper.prototype.selectedIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVQsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsUUFBUSxFQUVSLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWpELE1BQU0sS0FBTyxTQUFTLEdBQUcsT0FBTzs7QUFDaEMsTUFBTSxLQUFPLFlBQVksR0FBRyxVQUFVO0FBRXRDO0lBTThCLG9DQUFPO0lBWW5DLGtCQUFtRCxPQUFtQjtlQUNwRSxrQkFBTSxPQUFPLENBQUM7SUFDaEIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsa0VBQWtDO29CQUNsQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OztnQkFuQ2lCLFVBQVUsdUJBZ0RiLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUM7Ozs0QkFWaEQsWUFBWSxTQUFDLGFBQWE7d0JBRzFCLEtBQUs7d0JBRUwsS0FBSzt1QkFFTCxLQUFLOztJQU1SLGVBQUM7Q0FBQSxBQXJCRCxDQU04QixPQUFPLEdBZXBDO1NBZlksUUFBUTs7Ozs7O0lBRW5CLDZCQUN5Qjs7SUFFekIseUJBQ2M7O0lBQ2QseUJBQ2M7O0lBQ2Qsd0JBQ2E7O0FBT2Y7SUFHaUMsdUNBQVU7SUFIM0M7UUFBQSxxRUEwREM7UUExQ0MsZ0ZBQWdGO1FBQ2hGLG9CQUFjLEdBQXdDLEVBQUUsQ0FBQzs7SUF5QzNELENBQUM7SUF2Q0Msc0JBQUksa0NBQVM7Ozs7UUFBYjtZQUNFLElBQUk7O29CQUNFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTs7b0JBQzdCLFFBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDLFFBQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFNLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNqRTtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUVELHdDQUFrQjs7O0lBQWxCO1FBQUEsaUJBR0M7UUFGQyxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDRSxJQUFJOztnQkFDRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osYUFBYTtTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxzQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYTs7WUFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2pDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3hFLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5QixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs4QkFHRSxZQUFZLFNBQUMsY0FBYzt5QkFJM0IsZUFBZSxTQUFDLFFBQVE7eUJBSXhCLGVBQWUsU0FBQyxpQkFBaUI7O0lBNkNwQyxrQkFBQztDQUFBLEFBMURELENBR2lDLFVBQVUsR0F1RDFDO1NBdkRZLFdBQVc7Ozs7OztJQUV0QixrQ0FDd0M7Ozs7O0lBR3hDLDZCQUM0Qjs7Ozs7SUFHNUIsNkJBQ3FDOzs7OztJQUdyQyxxQ0FBeUQ7O0FBMkMzRDtJQWUyQyxpREFBVztJQWZ0RDs7SUFrQkEsQ0FBQzs7Z0JBbEJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxndkRBQXNDO29CQUV0QyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLHlCQUF5Qjt3QkFDaEMsa0JBQWtCLEVBQUUsWUFBWTt3QkFDaEMsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDO29CQUM1RCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLENBQUM7O29CQUV6RSxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7Z0NBRUUsS0FBSzs7SUFFUiw0QkFBQztDQUFBLEFBbEJELENBZTJDLFdBQVcsR0FHckQ7U0FIWSxxQkFBcUI7OztJQUNoQyw4Q0FDc0I7O0FBR3hCO0lBY3lDLCtDQUFXO0lBSWxELDZCQUF3QixHQUFtQixFQUFFLGlCQUFvQztRQUFqRixZQUNFLGtCQUFNLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxTQUU5QjtRQURDLEtBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDOztJQUNqQyxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1wREFBb0M7b0JBRXBDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsdUJBQXVCO3dCQUM5QixrQkFBa0IsRUFBRSxVQUFVO3dCQUM5QixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0QsVUFBVSxFQUFFLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUM7b0JBQzFELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztvQkFDdkUsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7O2dCQWpKUSxjQUFjLHVCQXNKUixRQUFRO2dCQXpJckIsaUJBQWlCOzs7Z0NBc0loQixLQUFLOztJQU9SLDBCQUFDO0NBQUEsQUF0QkQsQ0FjeUMsV0FBVyxHQVFuRDtTQVJZLG1CQUFtQjs7O0lBQzlCLDRDQUNzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1N0ZXAsIENka1N0ZXBwZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IEZvY3VzYWJsZU9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5vdm9TdGVwSGVhZGVyIH0gZnJvbSAnLi9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b1N0ZXBMYWJlbCB9IGZyb20gJy4vc3RlcC1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgbm92b1N0ZXBwZXJBbmltYXRpb25zIH0gZnJvbSAnLi9zdGVwcGVyLmFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTm92b0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9pY29uL0ljb24nO1xuXG5leHBvcnQgY29uc3QgX05vdm9TdGVwID0gQ2RrU3RlcDtcbmV4cG9ydCBjb25zdCBfTm92b1N0ZXBwZXIgPSBDZGtTdGVwcGVyO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TdGVwIGV4dGVuZHMgQ2RrU3RlcCB7XG4gIC8qKiBDb250ZW50IGZvciBzdGVwIGxhYmVsIGdpdmVuIGJ5IGA8bmctdGVtcGxhdGUgbm92b1N0ZXBMYWJlbD5gLiAqL1xuICBAQ29udGVudENoaWxkKE5vdm9TdGVwTGFiZWwpXG4gIHN0ZXBMYWJlbDogTm92b1N0ZXBMYWJlbDtcblxuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5vdm9TdGVwcGVyKSkgc3RlcHBlcjogQ2RrU3RlcHBlcikge1xuICAgIHN1cGVyKHN0ZXBwZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU3RlcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcHBlciBleHRlbmRzIENka1N0ZXBwZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqIFRoZSBsaXN0IG9mIHN0ZXAgaGVhZGVycyBvZiB0aGUgc3RlcHMgaW4gdGhlIHN0ZXBwZXIuICovXG4gIEBWaWV3Q2hpbGRyZW4oTm92b1N0ZXBIZWFkZXIpXG4gIF9zdGVwSGVhZGVyOiBRdWVyeUxpc3Q8Rm9jdXNhYmxlT3B0aW9uPjtcblxuICAvKiogU3RlcHMgdGhhdCB0aGUgc3RlcHBlciBob2xkcy4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvU3RlcClcbiAgX3N0ZXBzOiBRdWVyeUxpc3Q8Tm92b1N0ZXA+O1xuXG4gIC8qKiBDdXN0b20gaWNvbiBvdmVycmlkZXMgcGFzc2VkIGluIGJ5IHRoZSBjb25zdW1lci4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvSWNvbkNvbXBvbmVudClcbiAgX2ljb25zOiBRdWVyeUxpc3Q8Tm92b0ljb25Db21wb25lbnQ+O1xuXG4gIC8qKiBDb25zdW1lci1zcGVjaWZpZWQgdGVtcGxhdGUtcmVmcyB0byBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBoZWFkZXIgaWNvbnMuICovXG4gIF9pY29uT3ZlcnJpZGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuXG4gIGdldCBjb21wbGV0ZWQoKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBzdGVwcyA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAgIGxldCBsZW5ndGggPSBzdGVwcy5sZW5ndGggLSAxO1xuICAgICAgcmV0dXJuIHN0ZXBzW2xlbmd0aF0uY29tcGxldGVkICYmIGxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBNYXJrIHRoZSBjb21wb25lbnQgZm9yIGNoYW5nZSBkZXRlY3Rpb24gd2hlbmV2ZXIgdGhlIGNvbnRlbnQgY2hpbGRyZW4gcXVlcnkgY2hhbmdlc1xuICAgIHRoaXMuX3N0ZXBzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0YXRlQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgc3RlcHMgPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgICBzdGVwc1t0aGlzLnNlbGVjdGVkSW5kZXhdLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIHRoaXMuX3N0YXRlQ2hhbmdlZCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgfVxuXG4gIGdldEluZGljYXRvclR5cGUoaW5kZXg6IG51bWJlcik6ICdub25lJyB8ICcnIHwgJ2VkaXQnIHwgJ2RvbmUnIHtcbiAgICBsZXQgc3RlcHMgPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIGlmIChzdGVwc1tpbmRleF0gJiYgaW5kZXggPT09IHN0ZXBzLmxlbmd0aCAtIDEgJiYgc3RlcHNbaW5kZXhdLmNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm4gJ2RvbmUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdlZGl0JztcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICByZXR1cm4gJ2RvbmUnO1xuICAgIH1cbiAgICByZXR1cm4gJ25vbmUnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8taG9yaXpvbnRhbC1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWhvcml6b250YWwuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tc3RlcHBlci1ob3Jpem9udGFsJyxcbiAgICAnYXJpYS1vcmllbnRhdGlvbic6ICdob3Jpem9udGFsJyxcbiAgICByb2xlOiAndGFibGlzdCcsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtub3ZvU3RlcHBlckFuaW1hdGlvbnMuaG9yaXpvbnRhbFN0ZXBUcmFuc2l0aW9uXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOb3ZvU3RlcHBlciwgdXNlRXhpc3Rpbmc6IE5vdm9Ib3Jpem9udGFsU3RlcHBlciB9XSxcbiAgLy8gZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSG9yaXpvbnRhbFN0ZXBwZXIgZXh0ZW5kcyBOb3ZvU3RlcHBlciB7XG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by12ZXJ0aWNhbC1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLXZlcnRpY2FsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLXN0ZXBwZXItdmVydGljYWwnLFxuICAgICdhcmlhLW9yaWVudGF0aW9uJzogJ3ZlcnRpY2FsJyxcbiAgICByb2xlOiAndGFibGlzdCcsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtub3ZvU3RlcHBlckFuaW1hdGlvbnMudmVydGljYWxTdGVwVHJhbnNpdGlvbl0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTm92b1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBOb3ZvVmVydGljYWxTdGVwcGVyIH1dLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9WZXJ0aWNhbFN0ZXBwZXIgZXh0ZW5kcyBOb3ZvU3RlcHBlciB7XG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBkaXI6IERpcmVjdGlvbmFsaXR5LCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihkaXIsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgICB0aGlzLl9vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH1cbn1cbiJdfQ==