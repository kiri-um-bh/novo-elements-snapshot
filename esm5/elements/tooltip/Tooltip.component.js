// NG2
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
var NovoTooltip = /** @class */ (function () {
    function NovoTooltip() {
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
        } }, directives: [i1.NgClass], styles: ["novo-tooltip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap;text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}novo-tooltip[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}novo-tooltip[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}novo-tooltip[_ngcontent-%COMP%]   div.warning[_ngcontent-%COMP%]{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}novo-tooltip[_ngcontent-%COMP%]   div.success[_ngcontent-%COMP%]{background-color:#458746;text-shadow:0 -1px 0 #1a321a}novo-tooltip[_ngcontent-%COMP%]   div.rounded[_ngcontent-%COMP%]{border-radius:4px}novo-tooltip[_ngcontent-%COMP%]   div.extra-large[_ngcontent-%COMP%], novo-tooltip[_ngcontent-%COMP%]   div.large[_ngcontent-%COMP%], novo-tooltip[_ngcontent-%COMP%]   div.medium[_ngcontent-%COMP%], novo-tooltip[_ngcontent-%COMP%]   div.small[_ngcontent-%COMP%]{white-space:normal;line-height:1.4em;word-wrap:break-word}novo-tooltip[_ngcontent-%COMP%]   div.extra-large[_ngcontent-%COMP%]{width:400px;font-size:1.2vh}novo-tooltip[_ngcontent-%COMP%]   div.large[_ngcontent-%COMP%]{width:300px}novo-tooltip[_ngcontent-%COMP%]   div.medium[_ngcontent-%COMP%]{width:150px}novo-tooltip[_ngcontent-%COMP%]   div.small[_ngcontent-%COMP%]{width:80px}novo-tooltip[_ngcontent-%COMP%]   div.preline[_ngcontent-%COMP%]{white-space:pre-line}novo-tooltip[_ngcontent-%COMP%]   div.top[_ngcontent-%COMP%]:before{margin-bottom:-11px;left:calc(50% - 6px);bottom:0;border-top-color:#383838}novo-tooltip[_ngcontent-%COMP%]   div.top.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.top.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.top.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.top.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.top-left[_ngcontent-%COMP%]:before{border-top-color:#383838;margin-right:0;margin-bottom:-11px;right:0;bottom:0}novo-tooltip[_ngcontent-%COMP%]   div.top-left.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.top-left.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.top-left.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.top-left.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.top-right[_ngcontent-%COMP%]:before{border-top-color:#383838;margin-left:0;margin-bottom:-11px;left:0;bottom:0}novo-tooltip[_ngcontent-%COMP%]   div.top-right.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.top-right.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.top-right.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.top-right.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.bottom[_ngcontent-%COMP%]:before{margin-top:-11px;left:calc(50% - 6px);top:0;border-bottom-color:#383838}novo-tooltip[_ngcontent-%COMP%]   div.bottom.error[_ngcontent-%COMP%]:before{border-top-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.bottom.info[_ngcontent-%COMP%]:before{border-top-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.bottom.warning[_ngcontent-%COMP%]:before{border-top-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.bottom.success[_ngcontent-%COMP%]:before{border-top-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left[_ngcontent-%COMP%]:before{border-bottom-color:#383838;margin-right:0;margin-top:-11px;right:0;top:0}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.error[_ngcontent-%COMP%]:before{border-bottom-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.info[_ngcontent-%COMP%]:before{border-bottom-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.warning[_ngcontent-%COMP%]:before{border-bottom-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.bottom-left.success[_ngcontent-%COMP%]:before{border-bottom-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right[_ngcontent-%COMP%]:before{border-bottom-color:#383838;margin-left:0;margin-top:-11px;left:0;top:0}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.error[_ngcontent-%COMP%]:before{border-bottom-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.info[_ngcontent-%COMP%]:before{border-bottom-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.warning[_ngcontent-%COMP%]:before{border-bottom-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.bottom-right.success[_ngcontent-%COMP%]:before{border-bottom-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]:before{border-left-color:#383838;margin-right:-11px;margin-bottom:-6px;right:0;bottom:50%}novo-tooltip[_ngcontent-%COMP%]   div.left.error[_ngcontent-%COMP%]:before{border-left-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.left.info[_ngcontent-%COMP%]:before{border-left-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.left.warning[_ngcontent-%COMP%]:before{border-left-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.left.success[_ngcontent-%COMP%]:before{border-left-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]:before{left:0;bottom:50%;border-right-color:#383838;margin-left:-11px;margin-bottom:-6px}novo-tooltip[_ngcontent-%COMP%]   div.right.error[_ngcontent-%COMP%]:before{border-right-color:#b34e4d}novo-tooltip[_ngcontent-%COMP%]   div.right.info[_ngcontent-%COMP%]:before{border-right-color:#3986ac}novo-tooltip[_ngcontent-%COMP%]   div.right.warning[_ngcontent-%COMP%]:before{border-right-color:#c09854}novo-tooltip[_ngcontent-%COMP%]   div.right.success[_ngcontent-%COMP%]:before{border-right-color:#458746}novo-tooltip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before{content:\"\";position:absolute;background:0 0;border:6px solid transparent;box-sizing:border-box}"], data: { animation: [
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
    return NovoTooltip;
}());
export { NovoTooltip };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTooltip, [{
        type: Component,
        args: [{
                selector: 'novo-tooltip',
                template: "<div [@state]=\"noAnimate ? 'no-animation' : 'visible'\"\n  [ngClass]=\"[tooltipType, this.rounded ? 'rounded' : '', size ? size : '', this.preline? 'preline' : '', position]\">{{message}}</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRWpGO0lBQUE7S0FvQ0M7MEVBVlksV0FBVztvREFBWCxXQUFXO1lBeEJYLDhCQUN3RztZQUFBLFlBQVc7WUFBQSxpQkFBTTs7WUFEcEgsbUVBQWlELDRKQUFBO1lBQ2tELGVBQVc7WUFBWCxpQ0FBVzt3c01BRWxIO2dCQUNWLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxVQUFVLENBQUMsY0FBYyxFQUFFO3dCQUN6QixLQUFLLENBQUM7NEJBQ0osT0FBTyxFQUFFLENBQUM7NEJBQ1YsVUFBVSxFQUFFLFNBQVM7eUJBQ3RCLENBQUM7d0JBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQztxQkFDeEIsQ0FBQztvQkFDRixVQUFVLENBQUMsYUFBYSxFQUFFO3dCQUN4QixLQUFLLENBQUM7NEJBQ0osT0FBTyxFQUFFLENBQUM7NEJBQ1YsVUFBVSxFQUFFLFFBQVE7eUJBQ3JCLENBQUM7d0JBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQztxQkFDeEIsQ0FBQztpQkFDSCxDQUFDO2FBQ0g7c0JBNUJIO0NBd0NDLEFBcENELElBb0NDO1NBVlksV0FBVztrREFBWCxXQUFXO2NBMUJ2QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxvTUFDMkg7Z0JBQ3JJLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUM3QixVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLE9BQU8sRUFBRTt3QkFDZixLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3ZELEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3pDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7NEJBQ3pCLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixVQUFVLEVBQUUsU0FBUzs2QkFDdEIsQ0FBQzs0QkFDRixPQUFPLENBQUMsY0FBYyxDQUFDO3lCQUN4QixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxhQUFhLEVBQUU7NEJBQ3hCLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixVQUFVLEVBQUUsUUFBUTs2QkFDckIsQ0FBQzs0QkFDRixPQUFPLENBQUMsY0FBYyxDQUFDO3lCQUN4QixDQUFDO3FCQUNILENBQUM7aUJBQ0g7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10b29sdGlwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtAc3RhdGVdPVwibm9BbmltYXRlID8gJ25vLWFuaW1hdGlvbicgOiAndmlzaWJsZSdcIlxuICBbbmdDbGFzc109XCJbdG9vbHRpcFR5cGUsIHRoaXMucm91bmRlZCA/ICdyb3VuZGVkJyA6ICcnLCBzaXplID8gc2l6ZSA6ICcnLCB0aGlzLnByZWxpbmU/ICdwcmVsaW5lJyA6ICcnLCBwb3NpdGlvbl1cIj57e21lc3NhZ2V9fTwvZGl2PmAsXG4gIHN0eWxlVXJsczogWycuL1Rvb2x0aXAuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5pdGlhbCwgdm9pZCwgaGlkZGVuJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpLFxuICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZpc2libGUnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicpLFxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGhpZGRlbicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVG9vbHRpcCB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG4gIHB1YmxpYyB0b29sdGlwVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgcm91bmRlZDogYm9vbGVhbjtcbiAgcHVibGljIHNpemU6IHN0cmluZztcbiAgcHVibGljIHBvc2l0aW9uU3RyYXRlZ3k6IGFueTtcbiAgcHVibGljIHByZWxpbmU6IGJvb2xlYW47XG4gIHB1YmxpYyBub0FuaW1hdGU6IGJvb2xlYW47XG4gIHB1YmxpYyBwb3NpdGlvbjogc3RyaW5nO1xufVxuIl19