// NG2
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NovoBaseTextElement } from '../base/base-text.component';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * Tag Example
 * <novo-text size="small" disabled>Label</novo-text
 * <novo-text small disabled>Label</novo-text>
 * <novo-text large disabled>Label</novo-text>
 * <novo-text error>Label</novo-text>
 * <novo-text muted>Label</novo-text>
 * <novo-text class="tc-grapefruit">Label</novo-text>
 * <novo-text color="grapefruit">Label</novo-text>
 */
export class NovoLink extends NovoBaseTextElement {
}
NovoLink.ɵfac = function NovoLink_Factory(t) { return ɵNovoLink_BaseFactory(t || NovoLink); };
NovoLink.ɵcmp = i0.ɵɵdefineComponent({ type: NovoLink, selectors: [["novo-link"]], inputs: { href: "href" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, template: function NovoLink_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "a");
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("href", ctx.href, i0.ɵɵsanitizeUrl);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}:host{display:inline;font-family:Roboto,sans-serif;font-size:1em;font-weight:400;line-height:inherit}:host::ng-deep novo-icon{font-size:1em;vertical-align:top}:host.text-size-default{font-size:1em}:host.text-size-small{font-size:.8em}:host.text-size-large{font-size:1.2em}:host.text-color-black{color:#000}:host.text-color-white{color:#fff}:host.text-color-gray,:host.text-color-grey{color:#9e9e9e}:host.text-color-bright,:host.text-color-offWhite{color:#f7f7f7}:host.text-color-light{color:#dbdbdb}:host.text-color-neutral{color:#4f5361}:host.text-color-dark{color:#3d464d}:host.text-color-orange{color:#ff6900}:host.text-color-navigation{color:#202b38}:host.text-color-skyBlue{color:#009bdf}:host.text-color-steel{color:#5b6770}:host.text-color-metal{color:#637893}:host.text-color-sand{color:#f4f4f4}:host.text-color-silver{color:#e2e2e2}:host.text-color-stone{color:#bebebe}:host.text-color-ash{color:#a0a0a0}:host.text-color-slate{color:#707070}:host.text-color-onyx{color:#526980}:host.text-color-charcoal{color:#282828}:host.text-color-moonlight{color:#1a242f}:host.text-color-midnight{color:#202b38}:host.text-color-darkness{color:#161f27}:host.text-color-navy{color:#0d2d42}:host.text-color-aqua{color:#3bafda}:host.text-color-ocean{color:#4a89dc}:host.text-color-mint{color:#37bc9b}:host.text-color-grass{color:#8cc152}:host.text-color-sunflower{color:#f6b042}:host.text-color-bittersweet{color:#eb6845}:host.text-color-grapefruit{color:#da4453}:host.text-color-carnation{color:#d770ad}:host.text-color-lavender{color:#967adc}:host.text-color-mountain{color:#9678b6}:host.text-color-positive{color:#4a89dc}:host.text-color-success{color:#8cc152}:host.text-color-negative{color:#da4453}:host.text-color-warning{color:#f6b042}:host.text-color-empty{color:#cccdcc}:host.text-color-disabled{color:#bebebe}:host.text-color-background{color:#f7f7f7}:host.text-color-backgroundDark{color:#e2e2e2}:host.text-color-presentation{color:#5b6770}:host.text-color-bullhorn{color:#ff6900}:host.text-color-pulse{color:#3bafda}:host.text-color-company{color:#39d}:host.text-color-candidate{color:#4b7}:host.text-color-lead{color:#a69}:host.text-color-contact{color:#fa4}:host.text-color-opportunity{color:#625}:host.text-color-job{color:#b56}:host.text-color-submission{color:#a9adbb}:host.text-color-sendout{color:#747884}:host.text-color-placement{color:#0b344f}:host.text-color-note{color:#747884}:host.text-color-contract{color:#454ea0}:host.text-color-billableCharge,:host.text-color-corporateUser,:host.text-color-credential,:host.text-color-distributionList,:host.text-color-earnCode,:host.text-color-invoiceStatement,:host.text-color-jobCode,:host.text-color-payableCharge,:host.text-color-person,:host.text-color-user{color:#696d79}:host.text-weight-thin{font-weight:200}:host.text-weight-default{font-weight:400}:host.text-weight-medium{font-weight:500}:host.text-weight-bold{font-weight:700}:host.margin-before{margin-top:.4rem}:host.margin-after{margin-bottom:.8rem}"], encapsulation: 2 });
const ɵNovoLink_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoLink);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLink, [{
        type: Component,
        args: [{
                selector: 'novo-link',
                template: `<a [attr.href]="href"><ng-content></ng-content></a>`,
                styleUrls: ['./link.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { href: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY29tbW9uL3R5cG9ncmFwaHkvbGluay9saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUVsRTs7Ozs7Ozs7O0dBU0c7QUFRSCxNQUFNLE9BQU8sUUFBUyxTQUFRLG1CQUFtQjs7aUZBQXBDLFFBQVE7NkNBQVIsUUFBUTs7UUFKUix5QkFBc0I7UUFBQSxrQkFBWTtRQUFhLGlCQUFJOztRQUFoRCxrREFBa0I7O3FFQUlyQixRQUFRO2tEQUFSLFFBQVE7Y0FOcEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUscURBQXFEO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDO2dCQUdDLElBQUk7a0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9CYXNlVGV4dEVsZW1lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UtdGV4dC5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRhZyBFeGFtcGxlXG4gKiA8bm92by10ZXh0IHNpemU9XCJzbWFsbFwiIGRpc2FibGVkPkxhYmVsPC9ub3ZvLXRleHRcbiAqIDxub3ZvLXRleHQgc21hbGwgZGlzYWJsZWQ+TGFiZWw8L25vdm8tdGV4dD5cbiAqIDxub3ZvLXRleHQgbGFyZ2UgZGlzYWJsZWQ+TGFiZWw8L25vdm8tdGV4dD5cbiAqIDxub3ZvLXRleHQgZXJyb3I+TGFiZWw8L25vdm8tdGV4dD5cbiAqIDxub3ZvLXRleHQgbXV0ZWQ+TGFiZWw8L25vdm8tdGV4dD5cbiAqIDxub3ZvLXRleHQgY2xhc3M9XCJ0Yy1ncmFwZWZydWl0XCI+TGFiZWw8L25vdm8tdGV4dD5cbiAqIDxub3ZvLXRleHQgY29sb3I9XCJncmFwZWZydWl0XCI+TGFiZWw8L25vdm8tdGV4dD5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxpbmsnLFxuICB0ZW1wbGF0ZTogYDxhIFthdHRyLmhyZWZdPVwiaHJlZlwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2E+YCxcbiAgc3R5bGVVcmxzOiBbJy4vbGluay5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaW5rIGV4dGVuZHMgTm92b0Jhc2VUZXh0RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGhyZWY6IHN0cmluZztcbn1cbiJdfQ==