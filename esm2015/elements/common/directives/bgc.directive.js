// tslint:disable: directive-selector
import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BackgroundColorDirective {
    get background() {
        return `bgc-${this.bgc}`;
    }
}
BackgroundColorDirective.ɵfac = function BackgroundColorDirective_Factory(t) { return new (t || BackgroundColorDirective)(); };
BackgroundColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: BackgroundColorDirective, selectors: [["", "bgc", ""]], hostVars: 2, hostBindings: function BackgroundColorDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.background);
    } }, inputs: { bgc: "bgc" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BackgroundColorDirective, [{
        type: Directive,
        args: [{
                selector: '[bgc]',
            }]
    }], null, { bgc: [{
            type: Input
        }], background: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmdjLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jb21tb24vZGlyZWN0aXZlcy9iZ2MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlELE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsSUFDSSxVQUFVO1FBQ1osT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnR0FOVSx3QkFBd0I7NkRBQXhCLHdCQUF3Qjs7O2tEQUF4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2FBQ2xCO2dCQUVVLEdBQUc7a0JBQVgsS0FBSztZQUdGLFVBQVU7a0JBRGIsV0FBVzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JnY10nLFxufSlcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kQ29sb3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSBiZ2M6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIGBiZ2MtJHt0aGlzLmJnY31gO1xuICB9XG59XG4iXX0=