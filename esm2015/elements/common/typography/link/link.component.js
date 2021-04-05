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
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}:host{display:inline;font-family:Roboto,san-serif;font-size:1em;font-weight:400;line-height:1em}:host::ng-deep novo-icon{font-size:1em;vertical-align:top}:host.text-size-default{font-size:1em}:host.text-size-small{font-size:.8em}:host.text-size-large{font-size:1.2em}:host.text-color-company{color:#39d}:host.text-color-candidate{color:#4b7}:host.text-color-navigation{color:#2f384f}:host.text-color-lead{color:#a69}:host.text-color-contact{color:#fa4}:host.text-color-opportunity{color:#625}:host.text-color-job{color:#b56}:host.text-color-earnCode,:host.text-color-jobCode{color:#696d79}:host.text-color-sendout{color:#747884}:host.text-color-placement{color:#0b344f}:host.text-color-corporateuser,:host.text-color-credential,:host.text-color-distributionList,:host.text-color-task,:host.text-color-user{color:#4f5361}:host.text-color-aqua{color:#3bafda}:host.text-color-ocean{color:#4a89dc}:host.text-color-mint{color:#37bc9b}:host.text-color-grass{color:#8cc152}:host.text-color-sunflower{color:#f6b042}:host.text-color-bittersweet{color:#eb6845}:host.text-color-grapefruit{color:#da4453}:host.text-color-carnation{color:#d770ad}:host.text-color-lavender{color:#967adc}:host.text-color-positive{color:#4a89dc}:host.text-color-success{color:#8cc152}:host.text-color-negative{color:#da4453}:host.text-color-warning{color:#f6b042}:host.text-color-black{color:#000}:host.text-color-dark{color:#3d464d}:host.text-color-pulse{color:#3bafda}:host.text-color-neutral{color:#4f5361}:host.text-color-navy{color:#0d2d42}:host.text-color-contract{color:#454ea0}:host.text-color-mountain{color:#9678b6}:host.text-color-billableCharge,:host.text-color-invoiceStatement,:host.text-color-payableCharge{color:#696d79}:host.text-color-submission{color:#a9adbb}:host.text-color-note{color:#747884}:host.text-color-ash{color:#a0a0a0}:host.text-color-slate{color:#707070}:host.text-color-charcoal{color:#282828}:host.text-color-midnight{color:#0b0f1a}:host.text-color-background{color:#f4f4f4}:host.text-color-background-dark{color:#e2e2e2}:host.text-color-white{color:#fff}:host.text-color-grey{color:#999}:host.text-color-off-white{color:#f4f4f4}:host.text-color-light{color:#d9dadc}:host.text-color-empty{color:#cccdcc}:host.text-color-disabled{color:#bebebe}:host.text-color-sand{color:#f4f4f4}:host.text-color-silver{color:#e2e2e2}:host.text-color-stone{color:#bebebe}:host.text-weight-thin{font-weight:200}:host.text-weight-default{font-weight:400}:host.text-weight-medium{font-weight:500}:host.text-weight-bold{font-weight:700}:host.margin-before{margin-top:1em}:host.margin-after{margin-bottom:1em}"], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jb21tb24vdHlwb2dyYXBoeS9saW5rL2xpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRWxFOzs7Ozs7Ozs7R0FTRztBQVFILE1BQU0sT0FBTyxRQUFTLFNBQVEsbUJBQW1COztpRkFBcEMsUUFBUTs2Q0FBUixRQUFROztRQUpSLHlCQUFzQjtRQUFBLGtCQUFZO1FBQWEsaUJBQUk7O1FBQWhELGtEQUFrQjs7cUVBSXJCLFFBQVE7a0RBQVIsUUFBUTtjQU5wQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxxREFBcUQ7Z0JBQy9ELFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Z0JBR0MsSUFBSTtrQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0Jhc2VUZXh0RWxlbWVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS10ZXh0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGFnIEV4YW1wbGVcbiAqIDxub3ZvLXRleHQgc2l6ZT1cInNtYWxsXCIgZGlzYWJsZWQ+TGFiZWw8L25vdm8tdGV4dFxuICogPG5vdm8tdGV4dCBzbWFsbCBkaXNhYmxlZD5MYWJlbDwvbm92by10ZXh0PlxuICogPG5vdm8tdGV4dCBsYXJnZSBkaXNhYmxlZD5MYWJlbDwvbm92by10ZXh0PlxuICogPG5vdm8tdGV4dCBlcnJvcj5MYWJlbDwvbm92by10ZXh0PlxuICogPG5vdm8tdGV4dCBtdXRlZD5MYWJlbDwvbm92by10ZXh0PlxuICogPG5vdm8tdGV4dCBjbGFzcz1cInRjLWdyYXBlZnJ1aXRcIj5MYWJlbDwvbm92by10ZXh0PlxuICogPG5vdm8tdGV4dCBjb2xvcj1cImdyYXBlZnJ1aXRcIj5MYWJlbDwvbm92by10ZXh0PlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbGluaycsXG4gIHRlbXBsYXRlOiBgPGEgW2F0dHIuaHJlZl09XCJocmVmXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYT5gLFxuICBzdHlsZVVybHM6IFsnLi9saW5rLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpbmsgZXh0ZW5kcyBOb3ZvQmFzZVRleHRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgaHJlZjogc3RyaW5nO1xufVxuIl19