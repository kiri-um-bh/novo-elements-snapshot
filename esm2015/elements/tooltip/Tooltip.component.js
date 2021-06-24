// NG2
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
export class NovoTooltip {
}
NovoTooltip.ɵfac = function NovoTooltip_Factory(t) { return new (t || NovoTooltip)(); };
NovoTooltip.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTooltip, selectors: [["novo-tooltip"]], decls: 2, vars: 9, consts: [[3, "ngClass"]], template: function NovoTooltip_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@state", ctx.noAnimate ? "no-animation" : "visible")("ngClass", i0.ɵɵpureFunction5(3, _c0, ctx.tooltipType, ctx.rounded ? "rounded" : "", ctx.size ? ctx.size : "", ctx.preline ? "preline" : "", ctx.position));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.message);
    } }, directives: [i1.NgClass], encapsulation: 2, data: { animation: [
            trigger('state', [
                state('initial, void, hidden', style({ opacity: '0' })),
                state('visible', style({ opacity: '1' })),
                transition('* => visible', [
                    style({
                        opacity: 0,
                        visibility: 'visible',
                    }),
                    animate('0.3s ease-in'),
                ]),
                transition('* => hidden', [
                    style({
                        opacity: 1,
                        visibility: 'hidden',
                    }),
                    animate('0.3s ease-in'),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTooltip, [{
        type: Component,
        args: [{
                selector: 'novo-tooltip',
                template: `
    <div [@state]="noAnimate ? 'no-animation' : 'visible'"
         [ngClass]="[tooltipType, this.rounded ? 'rounded' : '', size ? size : '', this.preline? 'preline' : '', position]">{{message}}</div>`,
                animations: [
                    trigger('state', [
                        state('initial, void, hidden', style({ opacity: '0' })),
                        state('visible', style({ opacity: '1' })),
                        transition('* => visible', [
                            style({
                                opacity: 0,
                                visibility: 'visible',
                            }),
                            animate('0.3s ease-in'),
                        ]),
                        transition('* => hidden', [
                            style({
                                opacity: 1,
                                visibility: 'hidden',
                            }),
                            animate('0.3s ease-in'),
                        ]),
                    ]),
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBNEJqRixNQUFNLE9BQU8sV0FBVzs7c0VBQVgsV0FBVztnREFBWCxXQUFXO1FBdkJwQiw4QkFDd0g7UUFBQSxZQUFXO1FBQUEsaUJBQU07O1FBRHBJLG1FQUFpRCw0SkFBQTtRQUNrRSxlQUFXO1FBQVgsaUNBQVc7d0VBQ3pIO1lBQ1YsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDZixLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3pDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7b0JBQ3pCLEtBQUssQ0FBQzt3QkFDSixPQUFPLEVBQUUsQ0FBQzt3QkFDVixVQUFVLEVBQUUsU0FBUztxQkFDdEIsQ0FBQztvQkFDRixPQUFPLENBQUMsY0FBYyxDQUFDO2lCQUN4QixDQUFDO2dCQUNGLFVBQVUsQ0FBQyxhQUFhLEVBQUU7b0JBQ3hCLEtBQUssQ0FBQzt3QkFDSixPQUFPLEVBQUUsQ0FBQzt3QkFDVixVQUFVLEVBQUUsUUFBUTtxQkFDckIsQ0FBQztvQkFDRixPQUFPLENBQUMsY0FBYyxDQUFDO2lCQUN4QixDQUFDO2FBQ0gsQ0FBQztTQUNIO2tEQUVVLFdBQVc7Y0ExQnZCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs4SUFFa0k7Z0JBQzVJLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsT0FBTyxFQUFFO3dCQUNmLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDdkQsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDekMsVUFBVSxDQUFDLGNBQWMsRUFBRTs0QkFDekIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFVBQVUsRUFBRSxTQUFTOzZCQUN0QixDQUFDOzRCQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTs0QkFDeEIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFVBQVUsRUFBRSxRQUFROzZCQUNyQixDQUFDOzRCQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW0BzdGF0ZV09XCJub0FuaW1hdGUgPyAnbm8tYW5pbWF0aW9uJyA6ICd2aXNpYmxlJ1wiXG4gICAgICAgICBbbmdDbGFzc109XCJbdG9vbHRpcFR5cGUsIHRoaXMucm91bmRlZCA/ICdyb3VuZGVkJyA6ICcnLCBzaXplID8gc2l6ZSA6ICcnLCB0aGlzLnByZWxpbmU/ICdwcmVsaW5lJyA6ICcnLCBwb3NpdGlvbl1cIj57e21lc3NhZ2V9fTwvZGl2PmAsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbml0aWFsLCB2b2lkLCBoaWRkZW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSksXG4gICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdmlzaWJsZScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluJyksXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaGlkZGVuJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ub29sdGlwIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcbiAgcHVibGljIHRvb2x0aXBUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyByb3VuZGVkOiBib29sZWFuO1xuICBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuICBwdWJsaWMgcG9zaXRpb25TdHJhdGVneTogYW55O1xuICBwdWJsaWMgcHJlbGluZTogYm9vbGVhbjtcbiAgcHVibGljIG5vQW5pbWF0ZTogYm9vbGVhbjtcbiAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG59XG4iXX0=