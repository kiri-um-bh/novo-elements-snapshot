import { Directionality } from '@angular/cdk/bidi';
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, Directive, forwardRef, Inject, Input, Optional, QueryList, ViewChildren } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NovoIconComponent } from '../icon/Icon';
import { NovoStepHeader } from './step-header.component';
import { NovoStepLabel } from './step-label.component';
import { novoStepperAnimations } from './stepper.animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
import * as i2 from "@angular/common";
import * as i3 from "./step-header.component";
import * as i4 from "@angular/cdk/bidi";
function NovoStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
function NovoHorizontalStepper_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "novo-step-header", 6);
    i0.ɵɵlistener("click", function NovoHorizontalStepper_ng_container_2_Template_novo_step_header_click_1_listener() { const step_r2 = ctx.$implicit; return step_r2.select(); })("keydown", function NovoHorizontalStepper_ng_container_2_Template_novo_step_header_keydown_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6._onKeydown($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("theme", step_r2.theme)("color", step_r2.color)("icon", step_r2.icon)("state", ctx_r0.getIndicatorType(i_r3))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("iconOverrides", ctx_r0._iconOverrides);
    i0.ɵɵattribute("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3);
} }
function NovoHorizontalStepper_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@stepTransition", ctx_r1._getAnimationDirection(i_r9))("id", ctx_r1._getStepContentId(i_r9));
    i0.ɵɵattribute("aria-labelledby", ctx_r1._getStepLabelId(i_r9))("aria-expanded", ctx_r1.selectedIndex === i_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", step_r8.content);
} }
function NovoVerticalStepper_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "novo-step-header", 2);
    i0.ɵɵlistener("click", function NovoVerticalStepper_div_0_Template_novo_step_header_click_1_listener() { const step_r1 = ctx.$implicit; return step_r1.select(); })("keydown", function NovoVerticalStepper_div_0_Template_novo_step_header_keydown_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5._onKeydown($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementContainer(5, 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const isLast_r3 = ctx.last;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("theme", step_r1.theme)("color", step_r1.color)("icon", step_r1.icon)("state", ctx_r0.getIndicatorType(i_r2))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("iconOverrides", ctx_r0._iconOverrides);
    i0.ɵɵattribute("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("novo-stepper-vertical-line", !isLast_r3);
    i0.ɵɵproperty("ngClass", ctx_r0.getIndicatorType(i_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));
    i0.ɵɵattribute("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", step_r1.content);
} }
export const _NovoStep = CdkStep;
export const _NovoStepper = CdkStepper;
export class NovoStep extends CdkStep {
    constructor(stepper) {
        super(stepper);
    }
}
NovoStep.ɵfac = function NovoStep_Factory(t) { return new (t || NovoStep)(i0.ɵɵdirectiveInject(forwardRef(() => NovoStepper))); };
NovoStep.ɵcmp = i0.ɵɵdefineComponent({ type: NovoStep, selectors: [["novo-step"]], contentQueries: function NovoStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoStepLabel, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
    } }, inputs: { theme: "theme", color: "color", icon: "icon" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoStep_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NovoStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoStep, [{
        type: Component,
        args: [{
                selector: 'novo-step',
                templateUrl: 'step.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CdkStepper, decorators: [{
                type: Inject,
                args: [forwardRef(() => NovoStepper)]
            }] }]; }, { stepLabel: [{
            type: ContentChild,
            args: [NovoStepLabel]
        }], theme: [{
            type: Input
        }], color: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
export class NovoStepper extends CdkStepper {
    constructor() {
        super(...arguments);
        /** Consumer-specified template-refs to be used to override the header icons. */
        this._iconOverrides = {};
    }
    get completed() {
        try {
            const steps = this._steps.toArray();
            const length = steps.length - 1;
            return steps[length].completed && length === this.selectedIndex;
        }
        catch (err) {
            return false;
        }
    }
    ngAfterContentInit() {
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this._stateChanged());
    }
    complete() {
        try {
            const steps = this._steps.toArray();
            steps[this.selectedIndex].completed = true;
            this.next();
            this._stateChanged();
        }
        catch (err) {
            // do nothing
        }
    }
    getIndicatorType(index) {
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
NovoStepper.ɵfac = function NovoStepper_Factory(t) { return ɵNovoStepper_BaseFactory(t || NovoStepper); };
NovoStepper.ɵdir = i0.ɵɵdefineDirective({ type: NovoStepper, selectors: [["", "novoStepper", ""]], contentQueries: function NovoStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoStep, false);
        i0.ɵɵcontentQuery(dirIndex, NovoIconComponent, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._steps = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._icons = _t);
    } }, viewQuery: function NovoStepper_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NovoStepHeader, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
    } }, features: [i0.ɵɵInheritDefinitionFeature] });
const ɵNovoStepper_BaseFactory = i0.ɵɵgetInheritedFactory(NovoStepper);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoStepper, [{
        type: Directive,
        args: [{
                selector: '[novoStepper]',
            }]
    }], null, { _stepHeader: [{
            type: ViewChildren,
            args: [NovoStepHeader]
        }], _steps: [{
            type: ContentChildren,
            args: [NovoStep]
        }], _icons: [{
            type: ContentChildren,
            args: [NovoIconComponent]
        }] }); })();
export class NovoHorizontalStepper extends NovoStepper {
}
NovoHorizontalStepper.ɵfac = function NovoHorizontalStepper_Factory(t) { return ɵNovoHorizontalStepper_BaseFactory(t || NovoHorizontalStepper); };
NovoHorizontalStepper.ɵcmp = i0.ɵɵdefineComponent({ type: NovoHorizontalStepper, selectors: [["novo-horizontal-stepper"]], hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "novo-stepper-horizontal"], inputs: { selectedIndex: "selectedIndex" }, features: [i0.ɵɵProvidersFeature([{ provide: NovoStepper, useExisting: NovoHorizontalStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 4, consts: [[1, "novo-horizontal-stepper-header-container"], [1, "novo-stepper-horizontal-line", "complete"], [4, "ngFor", "ngForOf"], [1, "novo-stepper-horizontal-line"], [1, "novo-horizontal-content-container"], ["class", "novo-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "novo-horizontal-stepper-header", 3, "tabIndex", "id", "index", "theme", "color", "icon", "state", "label", "selected", "active", "optional", "iconOverrides", "click", "keydown"], ["role", "tabpanel", 1, "novo-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]], template: function NovoHorizontalStepper_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵtemplate(2, NovoHorizontalStepper_ng_container_2_Template, 2, 14, "ng-container", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, NovoHorizontalStepper_div_5_Template, 2, 5, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx._steps);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("complete", ctx.completed);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx._steps);
    } }, directives: [i2.NgForOf, i3.NovoStepHeader, i2.NgTemplateOutlet], styles: ["@-webkit-keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}.novo-stepper-horizontal[_ngcontent-%COMP%], .novo-stepper-vertical[_ngcontent-%COMP%]{display:block}.novo-horizontal-stepper-header-container[_ngcontent-%COMP%]{white-space:nowrap;display:flex;align-items:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line[_ngcontent-%COMP%]{border-bottom:1px solid #d9dadc;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete[_ngcontent-%COMP%]{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]{display:flex;height:80px;flex-flow:column;overflow:visible;align-items:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line[_ngcontent-%COMP%]{width:100%;position:absolute}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line[_ngcontent-%COMP%]:before{content:\"\";display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line[_ngcontent-%COMP%]:after{content:\"\";display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line.done[_ngcontent-%COMP%]:before, .novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line.edit[_ngcontent-%COMP%]:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line.done[_ngcontent-%COMP%]:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-icon[_ngcontent-%COMP%]{position:relative}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-icon[_ngcontent-%COMP%]:before{content:\"\";display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-icon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:1}.novo-vertical-stepper-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon[_ngcontent-%COMP%], .novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon-not-touched[_ngcontent-%COMP%]{margin-right:12px}[dir=rtl][_ngcontent-%COMP%]   .novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon-not-touched[_ngcontent-%COMP%]{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content[_ngcontent-%COMP%]{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false][_ngcontent-%COMP%]{height:0}.novo-horizontal-content-container[_ngcontent-%COMP%]{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container[_ngcontent-%COMP%]{margin-left:36px;border:0;position:relative}[dir=rtl][_ngcontent-%COMP%]   .novo-vertical-content-container[_ngcontent-%COMP%]{margin-left:0;margin-right:36px}.novo-stepper-vertical-line[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl][_ngcontent-%COMP%]   .novo-stepper-vertical-line[_ngcontent-%COMP%]:before{left:auto;right:0}.novo-stepper-vertical-line.done[_ngcontent-%COMP%]:after, .novo-stepper-vertical-line.done[_ngcontent-%COMP%]:before, .novo-stepper-vertical-line.edit[_ngcontent-%COMP%]:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical[_ngcontent-%COMP%]   novo-step-status[_ngcontent-%COMP%]{position:absolute;left:35px;top:25px;transform:scale(.8)}.novo-vertical-stepper-content[_ngcontent-%COMP%]{overflow:hidden}.novo-vertical-content[_ngcontent-%COMP%]{padding:0 24px 24px}.novo-step[_ngcontent-%COMP%]:last-child   .novo-vertical-content-container[_ngcontent-%COMP%]{border:none}"], data: { animation: [novoStepperAnimations.horizontalStepTransition] }, changeDetection: 0 });
const ɵNovoHorizontalStepper_BaseFactory = i0.ɵɵgetInheritedFactory(NovoHorizontalStepper);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHorizontalStepper, [{
        type: Component,
        args: [{
                selector: 'novo-horizontal-stepper',
                templateUrl: 'stepper-horizontal.html',
                styleUrls: ['stepper.component.scss'],
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
            }]
    }], null, { selectedIndex: [{
            type: Input
        }] }); })();
export class NovoVerticalStepper extends NovoStepper {
    constructor(dir, changeDetectorRef) {
        super(dir, changeDetectorRef);
        this._orientation = 'vertical';
    }
}
NovoVerticalStepper.ɵfac = function NovoVerticalStepper_Factory(t) { return new (t || NovoVerticalStepper)(i0.ɵɵdirectiveInject(i4.Directionality, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoVerticalStepper.ɵcmp = i0.ɵɵdefineComponent({ type: NovoVerticalStepper, selectors: [["novo-vertical-stepper"]], hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "novo-stepper-vertical"], inputs: { selectedIndex: "selectedIndex" }, features: [i0.ɵɵProvidersFeature([{ provide: NovoStepper, useExisting: NovoVerticalStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "novo-step", 4, "ngFor", "ngForOf"], [1, "novo-step"], [1, "novo-vertical-stepper-header", 3, "tabIndex", "id", "index", "theme", "color", "icon", "state", "label", "selected", "active", "optional", "iconOverrides", "click", "keydown"], [1, "novo-vertical-content-container", 3, "ngClass"], ["role", "tabpanel", 1, "novo-vertical-stepper-content", 3, "id"], [1, "novo-vertical-content"], [3, "ngTemplateOutlet"]], template: function NovoVerticalStepper_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoVerticalStepper_div_0_Template, 6, 22, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx._steps);
    } }, directives: [i2.NgForOf, i3.NovoStepHeader, i2.NgClass, i2.NgTemplateOutlet], styles: ["@-webkit-keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}.novo-stepper-horizontal[_ngcontent-%COMP%], .novo-stepper-vertical[_ngcontent-%COMP%]{display:block}.novo-horizontal-stepper-header-container[_ngcontent-%COMP%]{white-space:nowrap;display:flex;align-items:center;justify-content:center;margin-bottom:1em;background:#f4f4f4}.novo-stepper-horizontal-line[_ngcontent-%COMP%]{border-bottom:1px solid #d9dadc;flex:auto;min-width:0;height:80px}.novo-stepper-horizontal-line.complete[_ngcontent-%COMP%]{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]{display:flex;height:80px;flex-flow:column;overflow:visible;align-items:center;justify-content:center;padding:0 24px}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;align-items:center;position:absolute;height:1px;bottom:0}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line[_ngcontent-%COMP%]{width:100%;position:absolute}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line[_ngcontent-%COMP%]:before{content:\"\";display:block;width:calc(50% - 8px);margin-right:8px;border-bottom:1px solid #d9dadc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line[_ngcontent-%COMP%]:after{content:\"\";display:block;width:calc(50% - 8px);margin-left:calc(50% + 8px);margin-top:-1px;border-top:1px solid #d9dadc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line.done[_ngcontent-%COMP%]:before, .novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line.edit[_ngcontent-%COMP%]:before{border-bottom:1px solid #4a89dc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-line.done[_ngcontent-%COMP%]:after{border-top:1px solid #4a89dc}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-icon[_ngcontent-%COMP%]{position:relative}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-icon[_ngcontent-%COMP%]:before{content:\"\";display:block;background:#fff;border-radius:50%;position:absolute;z-index:0;top:1px;left:1px;bottom:1px;right:1px}.novo-horizontal-stepper-header[_ngcontent-%COMP%]   .novo-step-status[_ngcontent-%COMP%]   .novo-stepper-status-icon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:1}.novo-vertical-stepper-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:24px;max-height:24px}.novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon[_ngcontent-%COMP%], .novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon-not-touched[_ngcontent-%COMP%]{margin-right:12px}[dir=rtl][_ngcontent-%COMP%]   .novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .novo-vertical-stepper-header[_ngcontent-%COMP%]   .novo-step-icon-not-touched[_ngcontent-%COMP%]{margin-right:0;margin-left:12px}.novo-horizontal-stepper-content[_ngcontent-%COMP%]{overflow:hidden}.novo-horizontal-stepper-content[aria-expanded=false][_ngcontent-%COMP%]{height:0}.novo-horizontal-content-container[_ngcontent-%COMP%]{overflow:hidden;padding:0 24px 24px}.novo-vertical-content-container[_ngcontent-%COMP%]{margin-left:36px;border:0;position:relative}[dir=rtl][_ngcontent-%COMP%]   .novo-vertical-content-container[_ngcontent-%COMP%]{margin-left:0;margin-right:36px}.novo-stepper-vertical-line[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;z-index:-1;border-left:1px solid #d9dadc}[dir=rtl][_ngcontent-%COMP%]   .novo-stepper-vertical-line[_ngcontent-%COMP%]:before{left:auto;right:0}.novo-stepper-vertical-line.done[_ngcontent-%COMP%]:after, .novo-stepper-vertical-line.done[_ngcontent-%COMP%]:before, .novo-stepper-vertical-line.edit[_ngcontent-%COMP%]:before{border-left-color:1px solid #4a89dc}.novo-stepper-vertical[_ngcontent-%COMP%]   novo-step-status[_ngcontent-%COMP%]{position:absolute;left:35px;top:25px;transform:scale(.8)}.novo-vertical-stepper-content[_ngcontent-%COMP%]{overflow:hidden}.novo-vertical-content[_ngcontent-%COMP%]{padding:0 24px 24px}.novo-step[_ngcontent-%COMP%]:last-child   .novo-vertical-content-container[_ngcontent-%COMP%]{border:none}"], data: { animation: [novoStepperAnimations.verticalStepTransition] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoVerticalStepper, [{
        type: Component,
        args: [{
                selector: 'novo-vertical-stepper',
                templateUrl: 'stepper-vertical.html',
                styleUrls: ['stepper.component.scss'],
                host: {
                    class: 'novo-stepper-vertical',
                    'aria-orientation': 'vertical',
                    role: 'tablist',
                },
                animations: [novoStepperAnimations.verticalStepTransition],
                providers: [{ provide: NovoStepper, useExisting: NovoVerticalStepper }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i4.Directionality, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef }]; }, { selectedIndex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyIsImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQuaHRtbCIsImVsZW1lbnRzL3N0ZXBwZXIvc3RlcHBlci1ob3Jpem9udGFsLmh0bWwiLCJlbGVtZW50cy9zdGVwcGVyL3N0ZXBwZXItdmVydGljYWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQW9CLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFlLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3TixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7SUNSaEQsa0JBQVk7Ozs7O0lDRXZCLDZCQUNFO0lBQUEsMkNBaUJtQjtJQWhCRiwwSkFBUyxnQkFBYSxJQUFDLCtNQUFBO0lBZ0J4QyxpQkFBbUI7SUFDckIsMEJBQWU7Ozs7O0lBZkksZUFBNEM7SUFBNUMsdUVBQTRDLG9DQUFBLGVBQUEsd0JBQUEsd0JBQUEsc0JB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QUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx1QkFBdUI7b0JBQzlCLGtCQUFrQixFQUFFLFVBQVU7b0JBQzlCLElBQUksRUFBRSxTQUFTO2lCQUNoQjtnQkFDRCxVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDMUQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO2dCQUN2RSxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBS2MsUUFBUTs7a0JBSHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c2FibGVPcHRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENka1N0ZXAsIENka1N0ZXBwZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5qZWN0LCBJbnB1dCwgT3B0aW9uYWwsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTm92b0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9pY29uL0ljb24nO1xuaW1wb3J0IHsgTm92b1N0ZXBIZWFkZXIgfSBmcm9tICcuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvU3RlcExhYmVsIH0gZnJvbSAnLi9zdGVwLWxhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBub3ZvU3RlcHBlckFuaW1hdGlvbnMgfSBmcm9tICcuL3N0ZXBwZXIuYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBfTm92b1N0ZXAgPSBDZGtTdGVwO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvU3RlcHBlciA9IENka1N0ZXBwZXI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N0ZXAgZXh0ZW5kcyBDZGtTdGVwIHtcbiAgLyoqIENvbnRlbnQgZm9yIHN0ZXAgbGFiZWwgZ2l2ZW4gYnkgYDxuZy10ZW1wbGF0ZSBub3ZvU3RlcExhYmVsPmAuICovXG4gIEBDb250ZW50Q2hpbGQoTm92b1N0ZXBMYWJlbClcbiAgc3RlcExhYmVsOiBOb3ZvU3RlcExhYmVsO1xuXG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTm92b1N0ZXBwZXIpKSBzdGVwcGVyOiBDZGtTdGVwcGVyKSB7XG4gICAgc3VwZXIoc3RlcHBlcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TdGVwcGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TdGVwcGVyIGV4dGVuZHMgQ2RrU3RlcHBlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAvKiogVGhlIGxpc3Qgb2Ygc3RlcCBoZWFkZXJzIG9mIHRoZSBzdGVwcyBpbiB0aGUgc3RlcHBlci4gKi9cbiAgQFZpZXdDaGlsZHJlbihOb3ZvU3RlcEhlYWRlcilcbiAgX3N0ZXBIZWFkZXI6IFF1ZXJ5TGlzdDxGb2N1c2FibGVPcHRpb24+O1xuXG4gIC8qKiBTdGVwcyB0aGF0IHRoZSBzdGVwcGVyIGhvbGRzLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9TdGVwKVxuICBfc3RlcHM6IFF1ZXJ5TGlzdDxOb3ZvU3RlcD47XG5cbiAgLyoqIEN1c3RvbSBpY29uIG92ZXJyaWRlcyBwYXNzZWQgaW4gYnkgdGhlIGNvbnN1bWVyLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9JY29uQ29tcG9uZW50KVxuICBfaWNvbnM6IFF1ZXJ5TGlzdDxOb3ZvSWNvbkNvbXBvbmVudD47XG5cbiAgLyoqIENvbnN1bWVyLXNwZWNpZmllZCB0ZW1wbGF0ZS1yZWZzIHRvIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGhlYWRlciBpY29ucy4gKi9cbiAgX2ljb25PdmVycmlkZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG5cbiAgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgICBjb25zdCBsZW5ndGggPSBzdGVwcy5sZW5ndGggLSAxO1xuICAgICAgcmV0dXJuIHN0ZXBzW2xlbmd0aF0uY29tcGxldGVkICYmIGxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBNYXJrIHRoZSBjb21wb25lbnQgZm9yIGNoYW5nZSBkZXRlY3Rpb24gd2hlbmV2ZXIgdGhlIGNvbnRlbnQgY2hpbGRyZW4gcXVlcnkgY2hhbmdlc1xuICAgIHRoaXMuX3N0ZXBzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0YXRlQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGVwcyA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAgIHN0ZXBzW3RoaXMuc2VsZWN0ZWRJbmRleF0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgdGhpcy5fc3RhdGVDaGFuZ2VkKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG5cbiAgZ2V0SW5kaWNhdG9yVHlwZShpbmRleDogbnVtYmVyKTogJ25vbmUnIHwgJycgfCAnZWRpdCcgfCAnZG9uZScge1xuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICBpZiAoc3RlcHNbaW5kZXhdICYmIGluZGV4ID09PSBzdGVwcy5sZW5ndGggLSAxICYmIHN0ZXBzW2luZGV4XS5jb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuICdkb25lJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnZWRpdCc7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgcmV0dXJuICdkb25lJztcbiAgICB9XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWhvcml6b250YWwtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1ob3Jpem9udGFsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLXN0ZXBwZXItaG9yaXpvbnRhbCcsXG4gICAgJ2FyaWEtb3JpZW50YXRpb24nOiAnaG9yaXpvbnRhbCcsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICB9LFxuICBhbmltYXRpb25zOiBbbm92b1N0ZXBwZXJBbmltYXRpb25zLmhvcml6b250YWxTdGVwVHJhbnNpdGlvbl0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTm92b1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBOb3ZvSG9yaXpvbnRhbFN0ZXBwZXIgfV0sXG4gIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hvcml6b250YWxTdGVwcGVyIGV4dGVuZHMgTm92b1N0ZXBwZXIge1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdmVydGljYWwtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci12ZXJ0aWNhbC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1zdGVwcGVyLXZlcnRpY2FsJyxcbiAgICAnYXJpYS1vcmllbnRhdGlvbic6ICd2ZXJ0aWNhbCcsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICB9LFxuICBhbmltYXRpb25zOiBbbm92b1N0ZXBwZXJBbmltYXRpb25zLnZlcnRpY2FsU3RlcFRyYW5zaXRpb25dLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5vdm9TdGVwcGVyLCB1c2VFeGlzdGluZzogTm92b1ZlcnRpY2FsU3RlcHBlciB9XSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVmVydGljYWxTdGVwcGVyIGV4dGVuZHMgTm92b1N0ZXBwZXIge1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZGlyLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgdGhpcy5fb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG4iLCI8ZGl2IGNsYXNzPVwibm92by1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIGNvbXBsZXRlXCI+PC9kaXY+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN0ZXAgb2YgX3N0ZXBzOyBsZXQgaSA9IGluZGV4OyBsZXQgaXNMYXN0ID0gbGFzdFwiPlxuICAgIDxub3ZvLXN0ZXAtaGVhZGVyICBjbGFzcz1cIm5vdm8taG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic3RlcC5zZWxlY3QoKVwiXG4gICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJfb25LZXlkb3duKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgW3RhYkluZGV4XT1cIl9nZXRGb2N1c0luZGV4KCkgPT09IGkgPyAwIDogLTFcIlxuICAgICAgICAgICAgICAgICAgICAgW2lkXT1cIl9nZXRTdGVwTGFiZWxJZChpKVwiXG4gICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIl9nZXRTdGVwQ29udGVudElkKGkpXCJcbiAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwic2VsZWN0ZWRJbmRleCA9PSBpXCJcbiAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgIFt0aGVtZV09XCJzdGVwLnRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJzdGVwLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgIFtpY29uXT1cInN0ZXAuaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICBbc3RhdGVdPVwiZ2V0SW5kaWNhdG9yVHlwZShpKVwiXG4gICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwic3RlcC5zdGVwTGFiZWwgfHwgc3RlcC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cInN0ZXAuY29tcGxldGVkIHx8IHNlbGVjdGVkSW5kZXggPT09IGkgfHwgIWxpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICBbb3B0aW9uYWxdPVwic3RlcC5vcHRpb25hbFwiXG4gICAgICAgICAgICAgICAgICAgICBbaWNvbk92ZXJyaWRlc109XCJfaWNvbk92ZXJyaWRlc1wiPlxuICAgIDwvbm92by1zdGVwLWhlYWRlcj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxkaXYgY2xhc3M9XCJub3ZvLXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lXCIgW2NsYXNzLmNvbXBsZXRlXT1cImNvbXBsZXRlZFwiPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJub3ZvLWhvcml6b250YWwtY29udGVudC1jb250YWluZXJcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBfc3RlcHM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgIGNsYXNzPVwibm92by1ob3Jpem9udGFsLXN0ZXBwZXItY29udGVudFwiIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgW0BzdGVwVHJhbnNpdGlvbl09XCJfZ2V0QW5pbWF0aW9uRGlyZWN0aW9uKGkpXCJcbiAgICAgICBbaWRdPVwiX2dldFN0ZXBDb250ZW50SWQoaSlcIlxuICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJfZ2V0U3RlcExhYmVsSWQoaSlcIlxuICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiPlxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwic3RlcC5jb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8ZGl2IGNsYXNzPVwibm92by1zdGVwXCIgKm5nRm9yPVwibGV0IHN0ZXAgb2YgX3N0ZXBzOyBsZXQgaSA9IGluZGV4OyBsZXQgaXNMYXN0ID0gbGFzdFwiPlxuICAgIDxub3ZvLXN0ZXAtaGVhZGVyICBjbGFzcz1cIm5vdm8tdmVydGljYWwtc3RlcHBlci1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInN0ZXAuc2VsZWN0KClcIlxuICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24pPVwiX29uS2V5ZG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgIFt0YWJJbmRleF09XCJfZ2V0Rm9jdXNJbmRleCgpID09IGkgPyAwIDogLTFcIlxuICAgICAgICAgICAgICAgICAgICAgW2lkXT1cIl9nZXRTdGVwTGFiZWxJZChpKVwiXG4gICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIl9nZXRTdGVwQ29udGVudElkKGkpXCJcbiAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICBbdGhlbWVdPVwic3RlcC50aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwic3RlcC5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICBbaWNvbl09XCJzdGVwLmljb25cIlxuICAgICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cImdldEluZGljYXRvclR5cGUoaSlcIlxuICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cInN0ZXAuc3RlcExhYmVsIHx8IHN0ZXAubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJzdGVwLmNvbXBsZXRlZCB8fCBzZWxlY3RlZEluZGV4ID09PSBpIHx8ICFsaW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgW29wdGlvbmFsXT1cInN0ZXAub3B0aW9uYWxcIlxuICAgICAgICAgICAgICAgICAgICAgW2ljb25PdmVycmlkZXNdPVwiX2ljb25PdmVycmlkZXNcIj5cbiAgICA8L25vdm8tc3RlcC1oZWFkZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwibm92by12ZXJ0aWNhbC1jb250ZW50LWNvbnRhaW5lclwiIFtjbGFzcy5ub3ZvLXN0ZXBwZXItdmVydGljYWwtbGluZV09XCIhaXNMYXN0XCIgW25nQ2xhc3NdPVwiZ2V0SW5kaWNhdG9yVHlwZShpKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tdmVydGljYWwtc3RlcHBlci1jb250ZW50XCIgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgW0BzdGVwVHJhbnNpdGlvbl09XCJfZ2V0QW5pbWF0aW9uRGlyZWN0aW9uKGkpXCJcbiAgICAgICAgICAgW2lkXT1cIl9nZXRTdGVwQ29udGVudElkKGkpXCJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIl9nZXRTdGVwTGFiZWxJZChpKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by12ZXJ0aWNhbC1jb250ZW50XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJzdGVwLmNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4iXX0=