// tslint:disable: directive-selector
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TextColorDirective {
    constructor(el) {
        this.el = el;
    }
    get hb_textColor() {
        return `txc-${this.txc}`;
    }
}
TextColorDirective.ɵfac = function TextColorDirective_Factory(t) { return new (t || TextColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
TextColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: TextColorDirective, selectors: [["", "txc", ""]], hostVars: 2, hostBindings: function TextColorDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hb_textColor);
    } }, inputs: { txc: "txc" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextColorDirective, [{
        type: Directive,
        args: [{
                selector: '[txc]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { txc: [{
            type: Input
        }], hb_textColor: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NvbW1vbi9kaXJlY3RpdmVzL2NvbG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLMUUsTUFBTSxPQUFPLGtCQUFrQjtJQVE3QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7SUFMdEMsSUFDSSxZQUFZO1FBQ2QsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOztvRkFOVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7O2tEQUFsQixrQkFBa0I7Y0FIOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2FBQ2xCOzZEQUVVLEdBQUc7a0JBQVgsS0FBSztZQUdGLFlBQVk7a0JBRGYsV0FBVzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3R4Y10nLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29sb3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSB0eGM6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhiX3RleHRDb2xvcigpIHtcbiAgICByZXR1cm4gYHR4Yy0ke3RoaXMudHhjfWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxufVxuIl19