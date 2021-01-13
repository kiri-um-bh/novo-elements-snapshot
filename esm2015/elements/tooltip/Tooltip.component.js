// NG2
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
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
    } }, directives: [i1.NgClass], styles: ["novo-tooltip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:#383838;box-shadow:4px 4px 8px rgba(0,0,0,.3);color:#fff;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:12px;padding:8px 10px;text-shadow:0 -1px 0 #000;white-space:nowrap}novo-tooltip[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}novo-tooltip[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}novo-tooltip[_ngcontent-%COMP%]   div.warning[_ngcontent-%COMP%]{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}novo-tooltip[_ngcontent-%COMP%]   div.success[_ngcontent-%COMP%]{background-color:#458746;text-shadow:0 -1px 0 #1a321a}novo-tooltip[_ngcontent-%COMP%]   div.rounded[_ngcontent-%COMP%]{border-radius:4px}novo-tooltip[_ngcontent-%COMP%]   div.extra-large[_ngcontent-%COMP%], novo-tooltip[_ngcontent-%COMP%]   div.large[_ngcontent-%COMP%], novo-tooltip[_ngcontent-%COMP%]   div.medium[_ngcontent-%COMP%], novo-tooltip[_ngcontent-%COMP%]   div.small[_ngcontent-%COMP%]{line-height:1.4em;white-space:normal;word-wrap:break-word}novo-tooltip[_ngcontent-%COMP%]   div.extra-large[_ngcontent-%COMP%]{font-size:1.2vh;width:400px}novo-tooltip[_ngcontent-%COMP%]   div.large[_ngcontent-%COMP%]{width:300px}novo-tooltip[_ngcontent-%COMP%]   div.medium[_ngcontent-%COMP%]{width:150px}novo-tooltip[_ngcontent-%COMP%]   div.small[_ngcontent-%COMP%]{width:80px}novo-tooltip[_ngcontent-%COMP%]   div.preline[_ngcontent-%COMP%]{white-space:pre-line}novo-tooltip[_ngcontent-%COMP%]   div.top[_ngcontent-%COMP%]:before{border-top-color:#383838;bottom:0;left:calc(50% - 6px);margin-bottom:-11px}novo-tooltip[_ngcontent-%COMP%]   div.top.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.top.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.top.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.top.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.top-left[_ngcontent-%COMP%]:before{border-top-color:#383838;bottom:0;margin-bottom:-11px;margin-right:0;right:0}novo-tooltip[_ngcontent-%COMP%]   div.top-left.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.top-left.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.top-left.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.top-left.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.top-right[_ngcontent-%COMP%]:before{border-top-color:#383838;bottom:0;left:0;margin-bottom:-11px;margin-left:0}novo-tooltip[_ngcontent-%COMP%]   div.top-right.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.top-right.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.top-right.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.top-right.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.bottom[_ngcontent-%COMP%]:before{border-bottom-color:#383838;left:calc(50% - 6px);margin-top:-11px;top:0}novo-tooltip[_ngcontent-%COMP%]   div.bottom.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.bottom.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.bottom.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.bottom.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left[_ngcontent-%COMP%]:before{border-bottom-color:#383838;margin-right:0;margin-top:-11px;right:0;top:0}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.error[_ngcontent-%COMP%]:before{border-bottom-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.info[_ngcontent-%COMP%]:before{border-bottom-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.warning[_ngcontent-%COMP%]:before{border-bottom-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.success[_ngcontent-%COMP%]:before{border-bottom-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right[_ngcontent-%COMP%]:before{border-bottom-color:#383838;left:0;margin-left:0;margin-top:-11px;top:0}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.error[_ngcontent-%COMP%]:before{border-bottom-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.info[_ngcontent-%COMP%]:before{border-bottom-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.warning[_ngcontent-%COMP%]:before{border-bottom-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.success[_ngcontent-%COMP%]:before{border-bottom-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]:before{border-left-color:#383838;bottom:50%;margin-bottom:-6px;margin-right:-11px;right:0}novo-tooltip[_ngcontent-%COMP%]   div.left.error[_ngcontent-%COMP%]:before{border-left-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.left.info[_ngcontent-%COMP%]:before{border-left-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.left.warning[_ngcontent-%COMP%]:before{border-left-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.left.success[_ngcontent-%COMP%]:before{border-left-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]:before{border-right-color:#383838;bottom:50%;left:0;margin-bottom:-6px;margin-left:-11px}novo-tooltip[_ngcontent-%COMP%]   div.right.error[_ngcontent-%COMP%]:before{border-right-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.right.info[_ngcontent-%COMP%]:before{border-right-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.right.warning[_ngcontent-%COMP%]:before{border-right-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.right.success[_ngcontent-%COMP%]:before{border-right-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before{background:0 0;border:6px solid transparent;box-sizing:border-box;content:\"\";position:absolute}"], data: { animation: [
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
                templateUrl: './Tooltip.html',
                styleUrls: ['./Tooltip.scss'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90b29sdGlwL1Rvb2x0aXAuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQTJCMUMsTUFBTSxPQUFPLFdBQVc7O3NFQUFYLFdBQVc7Z0RBQVgsV0FBVztRQzdCeEIsOEJBQ3FIO1FBQUEsWUFBVztRQUFBLGlCQUFNOztRQURqSSxtRUFBaUQsNEpBQUE7UUFDK0QsZUFBVztRQUFYLGlDQUFXO2dzTURPbEg7WUFDVixPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNmLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDdkQsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDekMsVUFBVSxDQUFDLGNBQWMsRUFBRTtvQkFDekIsS0FBSyxDQUFDO3dCQUNKLE9BQU8sRUFBRSxDQUFDO3dCQUNWLFVBQVUsRUFBRSxTQUFTO3FCQUN0QixDQUFDO29CQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7aUJBQ3hCLENBQUM7Z0JBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTtvQkFDeEIsS0FBSyxDQUFDO3dCQUNKLE9BQU8sRUFBRSxDQUFDO3dCQUNWLFVBQVUsRUFBRSxRQUFRO3FCQUNyQixDQUFDO29CQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7aUJBQ3hCLENBQUM7YUFDSCxDQUFDO1NBQ0g7a0RBRVUsV0FBVztjQXpCdkIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsZ0JBQWdCO2dCQUM3QixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDN0IsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxPQUFPLEVBQUU7d0JBQ2YsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxVQUFVLENBQUMsY0FBYyxFQUFFOzRCQUN6QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7Z0NBQ1YsVUFBVSxFQUFFLFNBQVM7NkJBQ3RCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQzt3QkFDRixVQUFVLENBQUMsYUFBYSxFQUFFOzRCQUN4QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7Z0NBQ1YsVUFBVSxFQUFFLFFBQVE7NkJBQ3JCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9Ub29sdGlwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9Ub29sdGlwLnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luaXRpYWwsIHZvaWQsIGhpZGRlbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKSxcbiAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoeyBvcGFjaXR5OiAnMScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2aXNpYmxlJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKSxcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBoaWRkZW4nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluJyksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Rvb2x0aXAge1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xuICBwdWJsaWMgdG9vbHRpcFR5cGU6IHN0cmluZztcbiAgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBzaXplOiBzdHJpbmc7XG4gIHB1YmxpYyBwb3NpdGlvblN0cmF0ZWd5OiBhbnk7XG4gIHB1YmxpYyBwcmVsaW5lOiBib29sZWFuO1xuICBwdWJsaWMgbm9BbmltYXRlOiBib29sZWFuO1xuICBwdWJsaWMgcG9zaXRpb246IHN0cmluZztcbn1cbiIsIjxkaXYgW0BzdGF0ZV09XCJub0FuaW1hdGUgPyAnbm8tYW5pbWF0aW9uJyA6ICd2aXNpYmxlJ1wiXG4gIFtuZ0NsYXNzXT1cIlt0b29sdGlwVHlwZSwgdGhpcy5yb3VuZGVkID8gJ3JvdW5kZWQnIDogJycsIHNpemUgPyBzaXplIDogJycsIHRoaXMucHJlbGluZT8gJ3ByZWxpbmUnIDogJycsIHBvc2l0aW9uXVwiPnt7bWVzc2FnZX19PC9kaXY+Il19