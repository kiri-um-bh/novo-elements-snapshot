// NG2
import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NovoFlexElement {
    constructor() {
        this.direction = 'row';
        this.align = 'center';
        this.justify = 'flex-start';
        this.wrap = 'nowrap';
    }
    get display() {
        return 'flex';
    }
}
NovoFlexElement.ɵfac = function NovoFlexElement_Factory(t) { return new (t || NovoFlexElement)(); };
NovoFlexElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoFlexElement, selectors: [["novo-flex"], ["novo-row"]], hostVars: 12, hostBindings: function NovoFlexElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.display)("flex-direction", ctx.direction)("align-items", ctx.align)("justify-content", ctx.justify)("flex-wrap", ctx.wrap)("gap", ctx.gap);
    } }, inputs: { direction: "direction", align: "align", justify: "justify", wrap: "wrap", gap: "gap" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoFlexElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFlexElement, [{
        type: Component,
        args: [{
                selector: 'novo-flex,novo-row',
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
export class NovoStackElement extends NovoFlexElement {
    constructor() {
        super(...arguments);
        this.direction = 'column';
        this.align = 'start';
    }
}
NovoStackElement.ɵfac = function NovoStackElement_Factory(t) { return ɵNovoStackElement_BaseFactory(t || NovoStackElement); };
NovoStackElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoStackElement, selectors: [["novo-stack"], ["novo-column"]], hostVars: 4, hostBindings: function NovoStackElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("flex-direction", ctx.direction)("align-items", ctx.align);
    } }, inputs: { direction: "direction", align: "align" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoStackElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
const ɵNovoStackElement_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoStackElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoStackElement, [{
        type: Component,
        args: [{
                selector: 'novo-stack,novo-column',
                template: ` <ng-content></ng-content> `,
            }]
    }], null, { direction: [{
            type: HostBinding,
            args: ['style.flex-direction']
        }, {
            type: Input
        }], align: [{
            type: HostBinding,
            args: ['style.align-items']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mbGV4L0ZsZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTlELE1BQU0sT0FBTyxlQUFlO0lBSjVCO1FBWUUsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUkxQixVQUFLLEdBQVcsUUFBUSxDQUFDO1FBSXpCLFlBQU8sR0FBVyxZQUFZLENBQUM7UUFJL0IsU0FBSSxHQUFXLFFBQVEsQ0FBQztLQVN6QjtJQTVCQyxJQUNJLE9BQU87UUFDVCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs4RUFKVSxlQUFlO29EQUFmLGVBQWU7Ozs7UUFGZCxrQkFBWTs7a0RBRWIsZUFBZTtjQUozQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLDZCQUE2QjthQUN4QztnQkFHSyxPQUFPO2tCQURWLFdBQVc7bUJBQUMsZUFBZTtZQU81QixTQUFTO2tCQUZSLFdBQVc7bUJBQUMsc0JBQXNCOztrQkFDbEMsS0FBSztZQUtOLEtBQUs7a0JBRkosV0FBVzttQkFBQyxtQkFBbUI7O2tCQUMvQixLQUFLO1lBS04sT0FBTztrQkFGTixXQUFXO21CQUFDLHVCQUF1Qjs7a0JBQ25DLEtBQUs7WUFLTixJQUFJO2tCQUZILFdBQVc7bUJBQUMsaUJBQWlCOztrQkFDN0IsS0FBSztZQUtOLEdBQUc7a0JBRkYsV0FBVzttQkFBQyxXQUFXOztrQkFDdkIsS0FBSzs7QUFZUixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBZTtJQUpyRDs7UUFPRSxjQUFTLEdBQVcsUUFBUSxDQUFDO1FBSTdCLFVBQUssR0FBVyxPQUFPLENBQUM7S0FDekI7O3lHQVJZLGdCQUFnQjtxREFBaEIsZ0JBQWdCOzs7O1FBRmYsa0JBQVk7OzZFQUViLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDO2dCQUlDLFNBQVM7a0JBRlIsV0FBVzttQkFBQyxzQkFBc0I7O2tCQUNsQyxLQUFLO1lBS04sS0FBSztrQkFGSixXQUFXO21CQUFDLG1CQUFtQjs7a0JBQy9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmxleCxub3ZvLXJvdycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZsZXhFbGVtZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2ZsZXgnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4LWRpcmVjdGlvbicpXG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nID0gJ3Jvdyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5hbGlnbi1pdGVtcycpXG4gIEBJbnB1dCgpXG4gIGFsaWduOiBzdHJpbmcgPSAnY2VudGVyJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmp1c3RpZnktY29udGVudCcpXG4gIEBJbnB1dCgpXG4gIGp1c3RpZnk6IHN0cmluZyA9ICdmbGV4LXN0YXJ0JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtd3JhcCcpXG4gIEBJbnB1dCgpXG4gIHdyYXA6IHN0cmluZyA9ICdub3dyYXAnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZ2FwJylcbiAgQElucHV0KClcbiAgZ2FwOiBzdHJpbmc7XG5cbiAgLy8gZ2V0IGhiX2dyaWRDb2xzKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGByZXBlYXQoJHt0aGlzLmNvbHVtbnN9LCAke1Jlc291cmNlU2V0dGluZ3MuZXZlbnRXaWR0aH0pYCk7XG4gIC8vIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zdGFjayxub3ZvLWNvbHVtbicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N0YWNrRWxlbWVudCBleHRlbmRzIE5vdm9GbGV4RWxlbWVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC1kaXJlY3Rpb24nKVxuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZyA9ICdjb2x1bW4nO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYWxpZ24taXRlbXMnKVxuICBASW5wdXQoKVxuICBhbGlnbjogc3RyaW5nID0gJ3N0YXJ0Jztcbn1cbiJdfQ==