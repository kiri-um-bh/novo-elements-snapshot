// NG2
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const _c0 = ["*"];
export class NovoLabelElement {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() { }
}
NovoLabelElement.ɵfac = function NovoLabelElement_Factory(t) { return new (t || NovoLabelElement)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
NovoLabelElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoLabelElement, selectors: [["novo-label"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoLabelElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{color:#3d464d;display:flex;flex:1;font-size:.9em;font-weight:500;overflow-wrap:break-word;text-transform:uppercase;transition:.2s ease-out;word-break:word-break}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLabelElement, [{
        type: Component,
        args: [{
                selector: 'novo-label',
                templateUrl: './label.html',
                styleUrls: ['./label.scss'],
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9maWVsZC9sYWJlbC9sYWJlbC50cyIsImVsZW1lbnRzL2ZpZWxkL2xhYmVsL2xhYmVsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFHLENBQUM7SUFFL0MsUUFBUSxLQUFTLENBQUM7O2dGQUhQLGdCQUFnQjtxREFBaEIsZ0JBQWdCOztRQ1Q3QixrQkFBWTs7a0REU0MsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhYmVsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYWJlbC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MYWJlbEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IGFueSB7fVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==