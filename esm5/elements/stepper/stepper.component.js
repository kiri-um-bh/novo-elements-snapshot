/**
 * @fileoverview added by tsickle
 * Generated from: elements/stepper/stepper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */
    NovoStep.ctorParameters = function () { return [
        { type: CdkStepper, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return NovoStepper; })),] }] }
    ]; };
    NovoStep.propDecorators = {
        stepLabel: [{ type: ContentChild, args: [NovoStepLabel, { static: false },] }],
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
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
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
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () { return _this._stateChanged(); }));
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
                    styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;-webkit-box-flex:1;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:-webkit-box;display:flex;height:80px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;overflow:visible;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;-webkit-transform:scale(.8);transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
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
                    styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-stepper-horizontal,.novo-stepper-vertical{display:block}.novo-horizontal-stepper-header-container{white-space:nowrap;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line{border-bottom:1px solid #d9dadc;-webkit-box-flex:1;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header{display:-webkit-box;display:flex;height:80px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;overflow:visible;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header .novo-step-status{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line{width:100%;position:absolute}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:before{content:'';display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line:after{content:'';display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:before,.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.edit:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-line.done:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon{position:relative}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon:before{content:'';display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header .novo-step-status .novo-stepper-status-icon>*{position:relative;z-index:1}.novo-vertical-stepper-header{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header .novo-step-icon,.novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:12px}[dir=rtl] .novo-vertical-stepper-header .novo-step-icon,[dir=rtl] .novo-vertical-stepper-header .novo-step-icon-not-touched{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false]{height:0}.novo-horizontal-content-container{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .novo-vertical-content-container{margin-left:0;margin-right:36px}.novo-stepper-vertical-line:before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl] .novo-stepper-vertical-line:before{left:auto;right:0}.novo-stepper-vertical-line.done:after,.novo-stepper-vertical-line.done:before,.novo-stepper-vertical-line.edit:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical novo-step-status{position:absolute;left:35px;top:25px;-webkit-transform:scale(.8);transform:scale(.8)}.novo-vertical-stepper-content{overflow:hidden}.novo-vertical-content{padding:0 24px 24px}.novo-step:last-child .novo-vertical-content-container{border:none}"]
                }] }
    ];
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFFBQVEsRUFFUixLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVqRCxNQUFNLEtBQU8sU0FBUyxHQUFHLE9BQU87O0FBQ2hDLE1BQU0sS0FBTyxZQUFZLEdBQUcsVUFBVTtBQUV0QztJQU04QixvQ0FBTztJQVluQyxrQkFBbUQsT0FBbUI7ZUFDcEUsa0JBQU0sT0FBTyxDQUFDO0lBQ2hCLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGtFQUFrQztvQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWpDaUIsVUFBVSx1QkE4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R0FRbkQ7U0FSWSxtQkFBbUI7OztJQUM5Qiw0Q0FDc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtTdGVwLCBDZGtTdGVwcGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBGb2N1c2FibGVPcHRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3B0aW9uYWwsXG4gIFRlbXBsYXRlUmVmLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOb3ZvU3RlcEhlYWRlciB9IGZyb20gJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9TdGVwTGFiZWwgfSBmcm9tICcuL3N0ZXAtbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IG5vdm9TdGVwcGVyQW5pbWF0aW9ucyB9IGZyb20gJy4vc3RlcHBlci5hbmltYXRpb25zJztcbmltcG9ydCB7IE5vdm9JY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi9JY29uJztcblxuZXhwb3J0IGNvbnN0IF9Ob3ZvU3RlcCA9IENka1N0ZXA7XG5leHBvcnQgY29uc3QgX05vdm9TdGVwcGVyID0gQ2RrU3RlcHBlcjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcCBleHRlbmRzIENka1N0ZXAge1xuICAvKiogQ29udGVudCBmb3Igc3RlcCBsYWJlbCBnaXZlbiBieSBgPG5nLXRlbXBsYXRlIG5vdm9TdGVwTGFiZWw+YC4gKi9cbiAgQENvbnRlbnRDaGlsZChOb3ZvU3RlcExhYmVsLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc3RlcExhYmVsOiBOb3ZvU3RlcExhYmVsO1xuXG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTm92b1N0ZXBwZXIpKSBzdGVwcGVyOiBDZGtTdGVwcGVyKSB7XG4gICAgc3VwZXIoc3RlcHBlcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TdGVwcGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TdGVwcGVyIGV4dGVuZHMgQ2RrU3RlcHBlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAvKiogVGhlIGxpc3Qgb2Ygc3RlcCBoZWFkZXJzIG9mIHRoZSBzdGVwcyBpbiB0aGUgc3RlcHBlci4gKi9cbiAgQFZpZXdDaGlsZHJlbihOb3ZvU3RlcEhlYWRlcilcbiAgX3N0ZXBIZWFkZXI6IFF1ZXJ5TGlzdDxGb2N1c2FibGVPcHRpb24+O1xuXG4gIC8qKiBTdGVwcyB0aGF0IHRoZSBzdGVwcGVyIGhvbGRzLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9TdGVwKVxuICBfc3RlcHM6IFF1ZXJ5TGlzdDxOb3ZvU3RlcD47XG5cbiAgLyoqIEN1c3RvbSBpY29uIG92ZXJyaWRlcyBwYXNzZWQgaW4gYnkgdGhlIGNvbnN1bWVyLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9JY29uQ29tcG9uZW50KVxuICBfaWNvbnM6IFF1ZXJ5TGlzdDxOb3ZvSWNvbkNvbXBvbmVudD47XG5cbiAgLyoqIENvbnN1bWVyLXNwZWNpZmllZCB0ZW1wbGF0ZS1yZWZzIHRvIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGhlYWRlciBpY29ucy4gKi9cbiAgX2ljb25PdmVycmlkZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG5cbiAgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgICBjb25zdCBsZW5ndGggPSBzdGVwcy5sZW5ndGggLSAxO1xuICAgICAgcmV0dXJuIHN0ZXBzW2xlbmd0aF0uY29tcGxldGVkICYmIGxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBNYXJrIHRoZSBjb21wb25lbnQgZm9yIGNoYW5nZSBkZXRlY3Rpb24gd2hlbmV2ZXIgdGhlIGNvbnRlbnQgY2hpbGRyZW4gcXVlcnkgY2hhbmdlc1xuICAgIHRoaXMuX3N0ZXBzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0YXRlQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGVwcyA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAgIHN0ZXBzW3RoaXMuc2VsZWN0ZWRJbmRleF0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgdGhpcy5fc3RhdGVDaGFuZ2VkKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG5cbiAgZ2V0SW5kaWNhdG9yVHlwZShpbmRleDogbnVtYmVyKTogJ25vbmUnIHwgJycgfCAnZWRpdCcgfCAnZG9uZScge1xuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICBpZiAoc3RlcHNbaW5kZXhdICYmIGluZGV4ID09PSBzdGVwcy5sZW5ndGggLSAxICYmIHN0ZXBzW2luZGV4XS5jb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuICdkb25lJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnZWRpdCc7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgcmV0dXJuICdkb25lJztcbiAgICB9XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWhvcml6b250YWwtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1ob3Jpem9udGFsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLXN0ZXBwZXItaG9yaXpvbnRhbCcsXG4gICAgJ2FyaWEtb3JpZW50YXRpb24nOiAnaG9yaXpvbnRhbCcsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICB9LFxuICBhbmltYXRpb25zOiBbbm92b1N0ZXBwZXJBbmltYXRpb25zLmhvcml6b250YWxTdGVwVHJhbnNpdGlvbl0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTm92b1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBOb3ZvSG9yaXpvbnRhbFN0ZXBwZXIgfV0sXG4gIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hvcml6b250YWxTdGVwcGVyIGV4dGVuZHMgTm92b1N0ZXBwZXIge1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdmVydGljYWwtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci12ZXJ0aWNhbC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1zdGVwcGVyLXZlcnRpY2FsJyxcbiAgICAnYXJpYS1vcmllbnRhdGlvbic6ICd2ZXJ0aWNhbCcsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICB9LFxuICBhbmltYXRpb25zOiBbbm92b1N0ZXBwZXJBbmltYXRpb25zLnZlcnRpY2FsU3RlcFRyYW5zaXRpb25dLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5vdm9TdGVwcGVyLCB1c2VFeGlzdGluZzogTm92b1ZlcnRpY2FsU3RlcHBlciB9XSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVmVydGljYWxTdGVwcGVyIGV4dGVuZHMgTm92b1N0ZXBwZXIge1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZGlyLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgdGhpcy5fb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9XG59XG4iXX0=