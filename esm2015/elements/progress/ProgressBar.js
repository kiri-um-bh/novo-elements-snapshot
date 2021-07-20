// NG2
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Inject, Input, Optional, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NOVO_PROGRESS_CONTAINER, ProgressAppearance } from './ProgressConstants';
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
NovoProgressBarElement.ɵfac = function NovoProgressBarElement_Factory(t) { return new (t || NovoProgressBarElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(NOVO_PROGRESS_CONTAINER, 8)); };
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
    } }, directives: [i1.NgIf], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:flex;height:100%}.linear[_nghost-%COMP%]{background-color:#4a89dc}.linear[color=black][_nghost-%COMP%]{background:#000;color:#fff}.linear[color=white][_nghost-%COMP%]{background:#fff;color:#000}.linear[color=gray][_nghost-%COMP%], .linear[color=grey][_nghost-%COMP%]{background:#9e9e9e;color:#000}.linear[color=bright][_nghost-%COMP%], .linear[color=offWhite][_nghost-%COMP%]{background:#f7f7f7;color:#000}.linear[color=light][_nghost-%COMP%]{background:#dbdbdb;color:#000}.linear[color=neutral][_nghost-%COMP%]{background:#4f5361;color:#fff}.linear[color=dark][_nghost-%COMP%]{background:#3d464d;color:#fff}.linear[color=orange][_nghost-%COMP%]{background:#ff6900;color:#000}.linear[color=navigation][_nghost-%COMP%]{background:#202b38;color:#fff}.linear[color=skyBlue][_nghost-%COMP%]{background:#009bdf;color:#fff}.linear[color=steel][_nghost-%COMP%]{background:#5b6770;color:#fff}.linear[color=metal][_nghost-%COMP%]{background:#637893;color:#fff}.linear[color=sand][_nghost-%COMP%]{background:#f4f4f4;color:#000}.linear[color=silver][_nghost-%COMP%]{background:#e2e2e2;color:#000}.linear[color=stone][_nghost-%COMP%]{background:#bebebe;color:#000}.linear[color=ash][_nghost-%COMP%]{background:#a0a0a0;color:#000}.linear[color=slate][_nghost-%COMP%]{background:#707070;color:#fff}.linear[color=onyx][_nghost-%COMP%]{background:#526980;color:#fff}.linear[color=charcoal][_nghost-%COMP%]{background:#282828;color:#fff}.linear[color=moonlight][_nghost-%COMP%]{background:#1a242f;color:#fff}.linear[color=midnight][_nghost-%COMP%]{background:#202b38;color:#fff}.linear[color=darkness][_nghost-%COMP%]{background:#161f27;color:#fff}.linear[color=navy][_nghost-%COMP%]{background:#0d2d42;color:#fff}.linear[color=aqua][_nghost-%COMP%]{background:#3bafda;color:#000}.linear[color=ocean][_nghost-%COMP%]{background:#4a89dc;color:#fff}.linear[color=mint][_nghost-%COMP%]{background:#37bc9b;color:#000}.linear[color=grass][_nghost-%COMP%]{background:#8cc152;color:#000}.linear[color=sunflower][_nghost-%COMP%]{background:#f6b042;color:#000}.linear[color=bittersweet][_nghost-%COMP%]{background:#eb6845;color:#fff}.linear[color=grapefruit][_nghost-%COMP%]{background:#da4453;color:#fff}.linear[color=carnation][_nghost-%COMP%]{background:#d770ad;color:#fff}.linear[color=lavender][_nghost-%COMP%]{background:#967adc;color:#fff}.linear[color=mountain][_nghost-%COMP%]{background:#9678b6;color:#fff}.linear[color=positive][_nghost-%COMP%]{background:#4a89dc;color:#fff}.linear[color=success][_nghost-%COMP%]{background:#8cc152;color:#000}.linear[color=negative][_nghost-%COMP%]{background:#da4453;color:#fff}.linear[color=warning][_nghost-%COMP%]{background:#f6b042;color:#000}.linear[color=empty][_nghost-%COMP%]{background:#cccdcc;color:#000}.linear[color=disabled][_nghost-%COMP%]{background:#bebebe;color:#000}.linear[color=background][_nghost-%COMP%]{background:#f7f7f7;color:#000}.linear[color=backgroundDark][_nghost-%COMP%]{background:#e2e2e2;color:#000}.linear[color=presentation][_nghost-%COMP%]{background:#5b6770;color:#fff}.linear[color=bullhorn][_nghost-%COMP%]{background:#ff6900;color:#000}.linear[color=pulse][_nghost-%COMP%]{background:#3bafda;color:#000}.linear[color=company][_nghost-%COMP%]{background:#39d;color:#fff}.linear[color=candidate][_nghost-%COMP%]{background:#4b7;color:#000}.linear[color=lead][_nghost-%COMP%]{background:#a69;color:#fff}.linear[color=contact][_nghost-%COMP%]{background:#fa4;color:#000}.linear[color=opportunity][_nghost-%COMP%]{background:#625;color:#fff}.linear[color=job][_nghost-%COMP%]{background:#b56;color:#fff}.linear[color=submission][_nghost-%COMP%]{background:#a9adbb;color:#000}.linear[color=sendout][_nghost-%COMP%]{background:#747884;color:#fff}.linear[color=placement][_nghost-%COMP%]{background:#0b344f;color:#fff}.linear[color=note][_nghost-%COMP%]{background:#747884;color:#fff}.linear[color=contract][_nghost-%COMP%]{background:#454ea0;color:#fff}.linear[color=billableCharge][_nghost-%COMP%], .linear[color=corporateUser][_nghost-%COMP%], .linear[color=credential][_nghost-%COMP%], .linear[color=distributionList][_nghost-%COMP%], .linear[color=earnCode][_nghost-%COMP%], .linear[color=invoiceStatement][_nghost-%COMP%], .linear[color=jobCode][_nghost-%COMP%], .linear[color=payableCharge][_nghost-%COMP%], .linear[color=person][_nghost-%COMP%], .linear[color=user][_nghost-%COMP%]{background:#696d79;color:#fff}.linear[_nghost-%COMP%]:first-child{border-radius:.2em 0 0 .2em}.linear[_nghost-%COMP%]:last-child{border-radius:0 .2em .2em 0}.linear.striped[_nghost-%COMP%]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:40px 40px}.linear.animated[_nghost-%COMP%]{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.radial[_nghost-%COMP%]{position:absolute}.radial[color=black][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#000}.radial[color=white][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fff}.radial[color=gray][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=grey][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#9e9e9e}.radial[color=bright][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=offWhite][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f7f7f7}.radial[color=light][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#dbdbdb}.radial[color=neutral][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4f5361}.radial[color=dark][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3d464d}.radial[color=orange][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ff6900}.radial[color=navigation][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#202b38}.radial[color=skyBlue][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#009bdf}.radial[color=steel][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#5b6770}.radial[color=metal][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#637893}.radial[color=sand][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f4f4f4}.radial[color=silver][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#e2e2e2}.radial[color=stone][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#bebebe}.radial[color=ash][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#a0a0a0}.radial[color=slate][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#707070}.radial[color=onyx][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#526980}.radial[color=charcoal][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#282828}.radial[color=moonlight][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#1a242f}.radial[color=midnight][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#202b38}.radial[color=darkness][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#161f27}.radial[color=navy][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#0d2d42}.radial[color=aqua][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3bafda}.radial[color=ocean][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4a89dc}.radial[color=mint][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#37bc9b}.radial[color=grass][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#8cc152}.radial[color=sunflower][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f6b042}.radial[color=bittersweet][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#eb6845}.radial[color=grapefruit][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#da4453}.radial[color=carnation][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#d770ad}.radial[color=lavender][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#967adc}.radial[color=mountain][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#9678b6}.radial[color=positive][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4a89dc}.radial[color=success][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#8cc152}.radial[color=negative][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#da4453}.radial[color=warning][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f6b042}.radial[color=empty][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#cccdcc}.radial[color=disabled][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#bebebe}.radial[color=background][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f7f7f7}.radial[color=backgroundDark][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#e2e2e2}.radial[color=presentation][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#5b6770}.radial[color=bullhorn][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ff6900}.radial[color=pulse][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3bafda}.radial[color=company][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#39d}.radial[color=candidate][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4b7}.radial[color=lead][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#a69}.radial[color=contact][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fa4}.radial[color=opportunity][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#625}.radial[color=job][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#b56}.radial[color=submission][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#a9adbb}.radial[color=sendout][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#747884}.radial[color=placement][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#0b344f}.radial[color=note][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#747884}.radial[color=contract][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#454ea0}.radial[color=billableCharge][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=corporateUser][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=credential][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=distributionList][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=earnCode][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=invoiceStatement][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=jobCode][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=payableCharge][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=person][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .radial[color=user][_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#696d79}.radial[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#4a89dc;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset .35s}.radial[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#666;font-family:sans-serif;font-size:.5em;text-anchor:middle}@-webkit-keyframes progress-bar-stripes{0%{background-position:0 0}to{background-position:40px 0}}@keyframes progress-bar-stripes{0%{background-position:0 0}to{background-position:40px 0}}"] });
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
                args: [NOVO_PROGRESS_CONTAINER]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcHJvZ3Jlc3MvUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7SUFpQjlFLHlCQUFtRDs7O0lBQ25ELG1CQUNFO0lBREYsOEJBQ0U7SUFBQSw0QkFVQTtJQUNGLGlCQUFNOzs7SUFWRixlQUF1QztJQUF2Qyx3REFBdUMsd0NBQUE7SUFFdkMsa0NBQWlCOztBQXBCekIscUNBQXFDO0FBQ3JDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUVmLHNEQUFzRDtBQUN0RCxNQUFNLDJCQUEyQixHQUFHO0lBQ2xDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUF1QkYsTUFBTSxPQUFPLHNCQUFzQjtJQWlFakMsWUFBb0IsR0FBc0IsRUFBc0QsUUFBNkI7UUFBekcsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBc0QsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFoRXJILGNBQVMsR0FBVyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUVqRCxlQUFVLEdBQXVCLGtC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QUFFO2tCQUFWLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQVFOLE9BQU87a0JBRk4sV0FBVzttQkFBQyxlQUFlOztrQkFDM0IsS0FBSztZQUtOLFFBQVE7a0JBRlAsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUM1QixLQUFLO1lBSUYsS0FBSztrQkFEUixXQUFXO21CQUFDLGFBQWE7WUFRaEIsTUFBTTtrQkFBZixNQUFNO1lBQ0csSUFBSTtrQkFBYixNQUFNO1lBQ0csS0FBSztrQkFBZCxNQUFNO1lBTU0sS0FBSztrQkFBakIsS0FBSztZQWtCRixRQUFRO2tCQUZYLEtBQUs7O2tCQUNMLFdBQVc7bUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHR5cGUgeyBOb3ZvUHJvZ3Jlc3NFbGVtZW50IH0gZnJvbSAnLi9Qcm9ncmVzcyc7XG5pbXBvcnQgeyBOT1ZPX1BST0dSRVNTX0NPTlRBSU5FUiwgUHJvZ3Jlc3NBcHBlYXJhbmNlIH0gZnJvbSAnLi9Qcm9ncmVzc0NvbnN0YW50cyc7XG5cbi8vIG1ha2UgcmFkaW8tYnV0dG9uLWdyb3VwIGlkcyB1bmlxdWVcbmxldCBuZXh0SWQgPSAwO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFBST0dSRVNTX0JBUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9Qcm9ncmVzc0JhckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcHJvZ3Jlc3MtYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vUHJvZ3Jlc3NCYXIuc2NzcyddLFxuICBwcm92aWRlcnM6IFtQUk9HUkVTU19CQVJfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJpc0xpbmVhcigpXCIgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIj48L2Rpdj5cbiAgICA8c3ZnICpuZ0lmPVwiaXNSYWRpYWwoKVwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCI+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIFtzdHlsZS5zdHJva2VEYXNoYXJyYXldPVwiY2lyY3VtZmVyZW5jZVwiXG4gICAgICAgIFtzdHlsZS5zdHJva2VEYXNob2Zmc2V0XT1cImRhc2hvZmZzZXRcIlxuICAgICAgICBbYXR0ci5yXT1cInJhZGl1c1wiXG4gICAgICAgIGN4PVwiNjBcIlxuICAgICAgICBjeT1cIjYwXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNFwiXG4gICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIGNsYXNzPVwicHJvZ3Jlc3NfX3ZhbHVlXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIDx0ZXh0IHg9XCIxOFwiIHk9XCIyMC4zNVwiIGNsYXNzPVwicGVyY2VudGFnZVwiPjMwJTwvdGV4dD4gLS0+XG4gICAgPC9zdmc+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Qcm9ncmVzc0JhckVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgcHJpdmF0ZSBfdW5pcXVlSWQ6IHN0cmluZyA9IGBub3ZvLXByb2dyZXNzLSR7KytuZXh0SWR9YDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyBhcHBlYXJhbmNlOiBQcm9ncmVzc0FwcGVhcmFuY2UgPSBQcm9ncmVzc0FwcGVhcmFuY2UuTElORUFSO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5fdW5pcXVlSWQ7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9IHRoaXMuX3VuaXF1ZUlkO1xuICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBSYWRpYWwgVmFsdWVcbiAgcHVibGljIHJhZGl1cyA9IDU0O1xuICBwdWJsaWMgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogdGhpcy5yYWRpdXM7XG4gIHB1YmxpYyBkYXNob2Zmc2V0OiBudW1iZXI7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdHJpcGVkJylcbiAgQElucHV0KClcbiAgc3RyaXBlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW5pbWF0ZWQnKVxuICBASW5wdXQoKVxuICBhbmltYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgd2lkdGgoKSB7XG4gICAgaWYgKHRoaXMuaXNSYWRpYWwoKSkge1xuICAgICAgcmV0dXJuIGAxMDAlYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3RoaXMuX3BlcmNlbnQgKiAxMDB9JWA7XG4gIH1cblxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzcykge1xuICAgICAgICB0aGlzLl9wZXJjZW50ID0gdGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MudG90YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wZXJjZW50ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLmRhc2hvZmZzZXQgPSB0aGlzLmNpcmN1bWZlcmVuY2UgKiAoMSAtIHRoaXMuX3BlcmNlbnQpO1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgLy8gRGlzYWJsZWQgU3RhdGVcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwgKHRoaXMucHJvZ3Jlc3MgIT0gbnVsbCAmJiB0aGlzLnByb2dyZXNzLmRpc2FibGVkKTtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9ICEhdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIEBJbmplY3QoTk9WT19QUk9HUkVTU19DT05UQUlORVIpIHB1YmxpYyBwcm9ncmVzczogTm92b1Byb2dyZXNzRWxlbWVudCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIHRoaXMuc3RyaXBlZCA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5wcm9ncmVzcz8udG90YWwgfHwgMTAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9ncmVzcykge1xuICAgICAgdGhpcy5fcGVyY2VudCA9IHRoaXMuX3ZhbHVlIC8gdGhpcy5wcm9ncmVzcy50b3RhbDtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IHRoaXMucHJvZ3Jlc3MuYXBwZWFyYW5jZTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoXzogYW55KSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzTGluZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGVhcmFuY2UgPT09IFByb2dyZXNzQXBwZWFyYW5jZS5MSU5FQVI7XG4gIH1cblxuICBpc1JhZGlhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlYXJhbmNlID09PSBQcm9ncmVzc0FwcGVhcmFuY2UuUkFESUFMO1xuICB9XG59XG4iXX0=