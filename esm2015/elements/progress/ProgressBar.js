// NG2
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Inject, Input, Optional, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NovoProgressElement, ProgressAppearance } from './Progress';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NovoProgressBarElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} }
function NovoProgressBarElement__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "circle", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("stroke-dasharray", ctx_r1.circumference)("stroke-dashoffset", ctx_r1.dashoffset);
    i0.ɵɵattribute("r", ctx_r1.radius);
} }
// make radio-button-group ids unique
let nextId = 0;
// Value accessor for the component (supports ngModel)
const PROGRESS_BAR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoProgressBarElement),
    multi: true,
};
export class NovoProgressBarElement {
    constructor(ref, progress) {
        this.ref = ref;
        this.progress = progress;
        this._uniqueId = `novo-progress-${++nextId}`;
        this.appearance = ProgressAppearance.LINEAR;
        this.id = this._uniqueId;
        this.name = this._uniqueId;
        this.tabindex = 0;
        this.indeterminate = false;
        // Radial Value
        this.radius = 54;
        this.circumference = 2 * Math.PI * this.radius;
        this.striped = false;
        this.animated = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this._percent = 0;
        this._value = 0;
        this._disabled = false;
        this.onChangeCallback = (_) => {
            // placeholder
        };
        this.onTouchedCallback = () => {
            // placeholder
        };
        this.progress = progress;
    }
    get width() {
        if (this.isRadial()) {
            return `100%`;
        }
        return `${this._percent * 100}%`;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this.value !== value) {
            this._value = value;
            if (this.progress) {
                this._percent = this.value / this.progress.total;
            }
            else {
                this._percent = value;
            }
            this.dashoffset = this.circumference * (1 - this._percent);
            this.onChangeCallback(this._value);
        }
    }
    // Disabled State
    get disabled() {
        return this._disabled || (this.progress != null && this.progress.disabled);
    }
    set disabled(value) {
        this._disabled = !!value;
    }
    ngOnInit() {
        var _a;
        if (this.indeterminate) {
            this.striped = true;
            this.animated = true;
            this._value = ((_a = this.progress) === null || _a === void 0 ? void 0 : _a.total) || 100;
        }
        if (this.progress) {
            this._percent = this._value / this.progress.total;
            this.appearance = this.progress.appearance;
        }
    }
    writeValue(value) {
        this.value = value;
        this.ref.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    isLinear() {
        return this.appearance === ProgressAppearance.LINEAR;
    }
    isRadial() {
        return this.appearance === ProgressAppearance.RADIAL;
    }
}
NovoProgressBarElement.ɵfac = function NovoProgressBarElement_Factory(t) { return new (t || NovoProgressBarElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(forwardRef(() => NovoProgressElement), 8)); };
NovoProgressBarElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoProgressBarElement, selectors: [["novo-progress-bar"]], hostVars: 10, hostBindings: function NovoProgressBarElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.appearance);
        i0.ɵɵstyleProp("width", ctx.width);
        i0.ɵɵclassProp("striped", ctx.striped)("animated", ctx.animated)("disabled", ctx.disabled);
    } }, inputs: { id: "id", name: "name", tabindex: "tabindex", label: "label", theme: "theme", color: "color", indeterminate: "indeterminate", striped: "striped", animated: "animated", value: "value", disabled: "disabled" }, outputs: { change: "change", blur: "blur", focus: "focus" }, features: [i0.ɵɵProvidersFeature([PROGRESS_BAR_VALUE_ACCESSOR])], decls: 2, vars: 2, consts: [["class", "progress-bar", 4, "ngIf"], ["width", "120", "height", "120", 4, "ngIf"], [1, "progress-bar"], ["width", "120", "height", "120"], ["cx", "60", "cy", "60", "stroke-width", "4", "fill", "transparent", 1, "progress__value"]], template: function NovoProgressBarElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoProgressBarElement_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵtemplate(1, NovoProgressBarElement__svg_svg_1_Template, 2, 5, "svg", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isLinear());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isRadial());
    } }, directives: [i1.NgIf], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:flex;height:100%}.linear[_nghost-%COMP%]{background-color:#4a89dc}.linear[_nghost-%COMP%]:first-child{border-radius:.2em 0 0 .2em}.linear[_nghost-%COMP%]:last-child{border-radius:0 .2em .2em 0}.linear.striped[_nghost-%COMP%]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:40px 40px}.linear.animated[_nghost-%COMP%]{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.linear[color=company][_nghost-%COMP%]{background-color:#39d}.linear[color=candidate][_nghost-%COMP%]{background-color:#4b7}.linear[color=navigation][_nghost-%COMP%]{background-color:#2f384f}.linear[color=lead][_nghost-%COMP%]{background-color:#a69}.linear[color=contact][_nghost-%COMP%]{background-color:#fa4}.linear[color=opportunity][_nghost-%COMP%]{background-color:#625}.linear[color=job][_nghost-%COMP%]{background-color:#b56}.linear[color=earnCode][_nghost-%COMP%], .linear[color=jobCode][_nghost-%COMP%]{background-color:#696d79}.linear[color=sendout][_nghost-%COMP%]{background-color:#747884}.linear[color=placement][_nghost-%COMP%]{background-color:#0b344f}.linear[color=corporateuser][_nghost-%COMP%], .linear[color=credential][_nghost-%COMP%], .linear[color=distributionList][_nghost-%COMP%], .linear[color=task][_nghost-%COMP%], .linear[color=user][_nghost-%COMP%]{background-color:#4f5361}.linear[color=aqua][_nghost-%COMP%]{background-color:#3bafda}.linear[color=ocean][_nghost-%COMP%]{background-color:#4a89dc}.linear[color=mint][_nghost-%COMP%]{background-color:#37bc9b}.linear[color=grass][_nghost-%COMP%]{background-color:#8cc152}.linear[color=sunflower][_nghost-%COMP%]{background-color:#f6b042}.linear[color=bittersweet][_nghost-%COMP%]{background-color:#eb6845}.linear[color=grapefruit][_nghost-%COMP%]{background-color:#da4453}.linear[color=carnation][_nghost-%COMP%]{background-color:#d770ad}.linear[color=lavender][_nghost-%COMP%]{background-color:#967adc}.linear[color=positive][_nghost-%COMP%]{background-color:#4a89dc}.linear[color=success][_nghost-%COMP%]{background-color:#8cc152}.linear[color=negative][_nghost-%COMP%]{background-color:#da4453}.linear[color=warning][_nghost-%COMP%]{background-color:#f6b042}.linear[color=black][_nghost-%COMP%]{background-color:#000}.linear[color=dark][_nghost-%COMP%]{background-color:#3d464d}.linear[color=pulse][_nghost-%COMP%]{background-color:#3bafda}.linear[color=neutral][_nghost-%COMP%]{background-color:#4f5361}.linear[color=navy][_nghost-%COMP%]{background-color:#0d2d42}.linear[color=contract][_nghost-%COMP%]{background-color:#454ea0}.linear[color=mountain][_nghost-%COMP%]{background-color:#9678b6}.linear[color=billableCharge][_nghost-%COMP%], .linear[color=invoiceStatement][_nghost-%COMP%], .linear[color=payableCharge][_nghost-%COMP%]{background-color:#696d79}.linear[color=submission][_nghost-%COMP%]{background-color:#a9adbb}.linear[color=note][_nghost-%COMP%]{background-color:#747884}.linear[color=ash][_nghost-%COMP%]{background-color:#a0a0a0}.linear[color=slate][_nghost-%COMP%]{background-color:#707070}.linear[color=charcoal][_nghost-%COMP%]{background-color:#282828}.linear[color=midnight][_nghost-%COMP%]{background-color:#0b0f1a}.linear[color=background][_nghost-%COMP%]{background-color:#f4f4f4}.linear[color=background-dark][_nghost-%COMP%]{background-color:#e2e2e2}.linear[color=white][_nghost-%COMP%]{background-color:#fff}.linear[color=grey][_nghost-%COMP%]{background-color:#999}.linear[color=off-white][_nghost-%COMP%]{background-color:#f4f4f4}.linear[color=light][_nghost-%COMP%]{background-color:#d9dadc}.linear[color=empty][_nghost-%COMP%]{background-color:#cccdcc}.linear[color=disabled][_nghost-%COMP%]{background-color:#bebebe}.linear[color=sand][_nghost-%COMP%]{background-color:#f4f4f4}.linear[color=silver][_nghost-%COMP%]{background-color:#e2e2e2}.linear[color=stone][_nghost-%COMP%]{background-color:#bebebe}.radial[_nghost-%COMP%]{position:absolute}.radial[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4a89dc;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset .35s}.radial[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#666;font-family:sans-serif;font-size:.5em;text-anchor:middle}.radial[color=company][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#39d}.radial[color=candidate][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4b7}.radial[color=navigation][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#2f384f}.radial[color=lead][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#a69}.radial[color=contact][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fa4}.radial[color=opportunity][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#625}.radial[color=job][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#b56}.radial[color=earnCode][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=jobCode][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#696d79}.radial[color=sendout][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#747884}.radial[color=placement][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#0b344f}.radial[color=corporateuser][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=credential][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=distributionList][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=task][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=user][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4f5361}.radial[color=aqua][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3bafda}.radial[color=ocean][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4a89dc}.radial[color=mint][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#37bc9b}.radial[color=grass][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#8cc152}.radial[color=sunflower][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f6b042}.radial[color=bittersweet][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#eb6845}.radial[color=grapefruit][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#da4453}.radial[color=carnation][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#d770ad}.radial[color=lavender][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#967adc}.radial[color=positive][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4a89dc}.radial[color=success][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#8cc152}.radial[color=negative][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#da4453}.radial[color=warning][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f6b042}.radial[color=black][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#000}.radial[color=dark][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3d464d}.radial[color=pulse][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3bafda}.radial[color=neutral][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4f5361}.radial[color=navy][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#0d2d42}.radial[color=contract][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#454ea0}.radial[color=mountain][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#9678b6}.radial[color=billableCharge][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=invoiceStatement][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=payableCharge][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#696d79}.radial[color=submission][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#a9adbb}.radial[color=note][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#747884}.radial[color=ash][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#a0a0a0}.radial[color=slate][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#707070}.radial[color=charcoal][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#282828}.radial[color=midnight][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#0b0f1a}.radial[color=background][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f4f4f4}.radial[color=background-dark][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#e2e2e2}.radial[color=white][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fff}.radial[color=grey][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#999}.radial[color=off-white][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f4f4f4}.radial[color=light][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#d9dadc}.radial[color=empty][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#cccdcc}.radial[color=disabled][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#bebebe}.radial[color=sand][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f4f4f4}.radial[color=silver][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#e2e2e2}.radial[color=stone][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#bebebe}@-webkit-keyframes progress-bar-stripes{0%{background-position:0 0}to{background-position:40px 0}}@keyframes progress-bar-stripes{0%{background-position:0 0}to{background-position:40px 0}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoProgressBarElement, [{
        type: Component,
        args: [{
                selector: 'novo-progress-bar',
                styleUrls: ['./ProgressBar.scss'],
                providers: [PROGRESS_BAR_VALUE_ACCESSOR],
                template: `
    <div *ngIf="isLinear()" class="progress-bar"></div>
    <svg *ngIf="isRadial()" width="120" height="120">
      <circle
        [style.strokeDasharray]="circumference"
        [style.strokeDashoffset]="dashoffset"
        [attr.r]="radius"
        cx="60"
        cy="60"
        stroke-width="4"
        fill="transparent"
        class="progress__value"
      />
      <!-- <text x="18" y="20.35" class="percentage">30%</text> -->
    </svg>
  `,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [forwardRef(() => NovoProgressElement)]
            }] }]; }, { appearance: [{
            type: HostBinding,
            args: ['class']
        }], id: [{
            type: Input
        }], name: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], label: [{
            type: Input
        }], theme: [{
            type: Input
        }], color: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], striped: [{
            type: HostBinding,
            args: ['class.striped']
        }, {
            type: Input
        }], animated: [{
            type: HostBinding,
            args: ['class.animated']
        }, {
            type: Input
        }], width: [{
            type: HostBinding,
            args: ['style.width']
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wcm9ncmVzcy9Qcm9ncmVzc0Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7SUFpQmpFLHlCQUFtRDs7O0lBQ25ELG1CQUNFO0lBREYsOEJBQ0U7SUFBQSw0QkFVQTtJQUNGLGlCQUFNOzs7SUFWRixlQUF1QztJQUF2Qyx3REFBdUMsd0NBQUE7SUFFdkMsa0NBQWlCOztBQXBCekIscUNBQXFDO0FBQ3JDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUVmLHNEQUFzRDtBQUN0RCxNQUFNLDJCQUEyQixHQUFHO0lBQ2xDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUF1QkYsTUFBTSxPQUFPLHNCQUFzQjtJQWlFakMsWUFBb0IsR0FBc0IsRUFBb0UsUUFBUTtRQUFsRyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFvRSxhQUFRLEdBQVIsUUFBUSxDQUFBO1FBaEU5RyxjQUFTLEdBQVcsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFakQsZUFBVSxHQUF1QixrQkFBa0IsQ0FB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QUFtQixDQUFDO3dCQTlEOUYsVUFBVTtrQkFEaEIsV0FBVzttQkFBQyxPQUFPO1lBRVgsRUFBRTtrQkFBVixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFRTixPQUFPO2tCQUZOLFdBQVc7bUJBQUMsZUFBZTs7a0JBQzNCLEtBQUs7WUFLTixRQUFRO2tCQUZQLFdBQVc7bUJBQUMsZ0JBQWdCOztrQkFDNUIsS0FBSztZQUlGLEtBQUs7a0JBRFIsV0FBVzttQkFBQyxhQUFhO1lBUWhCLE1BQU07a0JBQWYsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLEtBQUs7a0JBQWQsTUFBTTtZQU1NLEtBQUs7a0JBQWpCLEtBQUs7WUFrQkYsUUFBUTtrQkFGWCxLQUFLOztrQkFDTCxXQUFXO21CQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5vdm9Qcm9ncmVzc0VsZW1lbnQsIFByb2dyZXNzQXBwZWFyYW5jZSB9IGZyb20gJy4vUHJvZ3Jlc3MnO1xuXG4vLyBtYWtlIHJhZGlvLWJ1dHRvbi1ncm91cCBpZHMgdW5pcXVlXG5sZXQgbmV4dElkID0gMDtcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBQUk9HUkVTU19CQVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUHJvZ3Jlc3NCYXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXByb2dyZXNzLWJhcicsXG4gIHN0eWxlVXJsczogWycuL1Byb2dyZXNzQmFyLnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbUFJPR1JFU1NfQkFSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiaXNMaW5lYXIoKVwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCI+PC9kaXY+XG4gICAgPHN2ZyAqbmdJZj1cImlzUmFkaWFsKClcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiPlxuICAgICAgPGNpcmNsZVxuICAgICAgICBbc3R5bGUuc3Ryb2tlRGFzaGFycmF5XT1cImNpcmN1bWZlcmVuY2VcIlxuICAgICAgICBbc3R5bGUuc3Ryb2tlRGFzaG9mZnNldF09XCJkYXNob2Zmc2V0XCJcbiAgICAgICAgW2F0dHIucl09XCJyYWRpdXNcIlxuICAgICAgICBjeD1cIjYwXCJcbiAgICAgICAgY3k9XCI2MFwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjRcIlxuICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBjbGFzcz1cInByb2dyZXNzX192YWx1ZVwiXG4gICAgICAvPlxuICAgICAgPCEtLSA8dGV4dCB4PVwiMThcIiB5PVwiMjAuMzVcIiBjbGFzcz1cInBlcmNlbnRhZ2VcIj4zMCU8L3RleHQ+IC0tPlxuICAgIDwvc3ZnPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUHJvZ3Jlc3NCYXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIHByaXZhdGUgX3VuaXF1ZUlkOiBzdHJpbmcgPSBgbm92by1wcm9ncmVzcy0keysrbmV4dElkfWA7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgYXBwZWFyYW5jZTogUHJvZ3Jlc3NBcHBlYXJhbmNlID0gUHJvZ3Jlc3NBcHBlYXJhbmNlLkxJTkVBUjtcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuX3VuaXF1ZUlkO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSB0aGlzLl91bmlxdWVJZDtcbiAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gUmFkaWFsIFZhbHVlXG4gIHB1YmxpYyByYWRpdXMgPSA1NDtcbiAgcHVibGljIGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIHRoaXMucmFkaXVzO1xuICBwdWJsaWMgZGFzaG9mZnNldDogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RyaXBlZCcpXG4gIEBJbnB1dCgpXG4gIHN0cmlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFuaW1hdGVkJylcbiAgQElucHV0KClcbiAgYW5pbWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgZ2V0IHdpZHRoKCkge1xuICAgIGlmICh0aGlzLmlzUmFkaWFsKCkpIHtcbiAgICAgIHJldHVybiBgMTAwJWA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLl9wZXJjZW50ICogMTAwfSVgO1xuICB9XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5fcGVyY2VudCA9IHRoaXMudmFsdWUgLyB0aGlzLnByb2dyZXNzLnRvdGFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGVyY2VudCA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXNob2Zmc2V0ID0gdGhpcy5jaXJjdW1mZXJlbmNlICogKDEgLSB0aGlzLl9wZXJjZW50KTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG4gIC8vIERpc2FibGVkIFN0YXRlXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8ICh0aGlzLnByb2dyZXNzICE9IG51bGwgJiYgdGhpcy5wcm9ncmVzcy5kaXNhYmxlZCk7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTm92b1Byb2dyZXNzRWxlbWVudCkpIHB1YmxpYyBwcm9ncmVzcykge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIHRoaXMuc3RyaXBlZCA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5wcm9ncmVzcz8udG90YWwgfHwgMTAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9ncmVzcykge1xuICAgICAgdGhpcy5fcGVyY2VudCA9IHRoaXMuX3ZhbHVlIC8gdGhpcy5wcm9ncmVzcy50b3RhbDtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IHRoaXMucHJvZ3Jlc3MuYXBwZWFyYW5jZTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoXzogYW55KSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzTGluZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGVhcmFuY2UgPT09IFByb2dyZXNzQXBwZWFyYW5jZS5MSU5FQVI7XG4gIH1cblxuICBpc1JhZGlhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlYXJhbmNlID09PSBQcm9ncmVzc0FwcGVhcmFuY2UuUkFESUFMO1xuICB9XG59XG4iXX0=