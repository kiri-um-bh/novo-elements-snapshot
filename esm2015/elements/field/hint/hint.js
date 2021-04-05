// NG2
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const _c0 = ["*"];
export class NovoHintElement {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() { }
}
NovoHintElement.ɵfac = function NovoHintElement_Factory(t) { return new (t || NovoHintElement)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
NovoHintElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoHintElement, selectors: [["novo-hint"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoHintElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{color:#999;display:flex;flex:1;font-size:.8em;padding-bottom:.4rem;padding-top:.4rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoHintElement, [{
        type: Component,
        args: [{
                selector: 'novo-hint',
                templateUrl: './hint.html',
                styleUrls: ['./hint.scss'],
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2ZpZWxkL2hpbnQvaGludC50cyIsImVsZW1lbnRzL2ZpZWxkL2hpbnQvaGludC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQztJQUUvQyxRQUFRLEtBQVMsQ0FBQzs7OEVBSFAsZUFBZTtvREFBZixlQUFlOztRQ1Q1QixrQkFBWTs7a0REU0MsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSxhQUFhO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1oaW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hpbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hpbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGludEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IGFueSB7fVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==