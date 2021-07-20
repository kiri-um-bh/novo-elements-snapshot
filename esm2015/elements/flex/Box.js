// NG2
import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NovoBoxElement {
    constructor() {
        this.direction = 'row';
        this.align = 'center';
        this.justify = 'flex-start';
        this.wrap = 'nowrap';
        this.gap = 'nowrap';
    }
    get display() {
        return 'block';
    }
}
NovoBoxElement.ɵfac = function NovoBoxElement_Factory(t) { return new (t || NovoBoxElement)(); };
NovoBoxElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoBoxElement, selectors: [["novo-box"]], hostVars: 12, hostBindings: function NovoBoxElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.display)("flex-direction", ctx.direction)("align-items", ctx.align)("justify-content", ctx.justify)("flex-wrap", ctx.wrap)("gap", ctx.gap);
    } }, inputs: { direction: "direction", align: "align", justify: "justify", wrap: "wrap", gap: "gap" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoBoxElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoBoxElement, [{
        type: Component,
        args: [{
                selector: 'novo-box',
                template: ` <ng-content></ng-content> `,
            }]
    }], null, { display: [{
            type: HostBinding,
            args: ['style.display']
        }], direction: [{
            type: HostBinding,
            args: ['style.flex-direction']
        }, {
            type: Input
        }], align: [{
            type: HostBinding,
            args: ['style.align-items']
        }, {
            type: Input
        }], justify: [{
            type: HostBinding,
            args: ['style.justify-content']
        }, {
            type: Input
        }], wrap: [{
            type: HostBinding,
            args: ['style.flex-wrap']
        }, {
            type: Input
        }], gap: [{
            type: HostBinding,
            args: ['style.gap']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm94LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2ZsZXgvQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU05RCxNQUFNLE9BQU8sY0FBYztJQUozQjtRQVlFLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFJMUIsVUFBSyxHQUFXLFFBQVEsQ0FBQztRQUl6QixZQUFPLEdBQVcsWUFBWSxDQUFDO1FBSS9CLFNBQUksR0FBVyxRQUFRLENBQUM7UUFJeEIsUUFBRyxHQUFXLFFBQVEsQ0FBQztLQUt4QjtJQTVCQyxJQUNJLE9BQU87UUFDVCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs0RUFKVSxjQUFjO21EQUFkLGNBQWM7Ozs7UUFGYixrQkFBWTs7a0RBRWIsY0FBYztjQUoxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Z0JBR0ssT0FBTztrQkFEVixXQUFXO21CQUFDLGVBQWU7WUFPNUIsU0FBUztrQkFGUixXQUFXO21CQUFDLHNCQUFzQjs7a0JBQ2xDLEtBQUs7WUFLTixLQUFLO2tCQUZKLFdBQVc7bUJBQUMsbUJBQW1COztrQkFDL0IsS0FBSztZQUtOLE9BQU87a0JBRk4sV0FBVzttQkFBQyx1QkFBdUI7O2tCQUNuQyxLQUFLO1lBS04sSUFBSTtrQkFGSCxXQUFXO21CQUFDLGlCQUFpQjs7a0JBQzdCLEtBQUs7WUFLTixHQUFHO2tCQUZGLFdBQVc7bUJBQUMsV0FBVzs7a0JBQ3ZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYm94JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQm94RWxlbWVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBkaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdibG9jayc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtZGlyZWN0aW9uJylcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmcgPSAncm93JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmFsaWduLWl0ZW1zJylcbiAgQElucHV0KClcbiAgYWxpZ246IHN0cmluZyA9ICdjZW50ZXInO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuanVzdGlmeS1jb250ZW50JylcbiAgQElucHV0KClcbiAganVzdGlmeTogc3RyaW5nID0gJ2ZsZXgtc3RhcnQnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC13cmFwJylcbiAgQElucHV0KClcbiAgd3JhcDogc3RyaW5nID0gJ25vd3JhcCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5nYXAnKVxuICBASW5wdXQoKVxuICBnYXA6IHN0cmluZyA9ICdub3dyYXAnO1xuXG4gIC8vIGdldCBoYl9ncmlkQ29scygpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgcmVwZWF0KCR7dGhpcy5jb2x1bW5zfSwgJHtSZXNvdXJjZVNldHRpbmdzLmV2ZW50V2lkdGh9KWApO1xuICAvLyB9XG59XG4iXX0=