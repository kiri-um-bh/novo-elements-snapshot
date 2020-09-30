/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
var NovoTooltip = /** @class */ (function () {
    function NovoTooltip() {
    }
    NovoTooltip.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tooltip',
                    template: "<div [@state]=\"noAnimate ? 'no-animation' : 'visible'\"\n  [ngClass]=\"[tooltipType, this.rounded ? 'rounded' : '', size ? size : '', this.preline? 'preline' : '', position]\">{{message}}</div>",
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
                    styles: ["novo-tooltip div{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap;text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}novo-tooltip div.error{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}novo-tooltip div.info{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}novo-tooltip div.warning{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}novo-tooltip div.success{background-color:#458746;text-shadow:0 -1px 0 #1a321a}novo-tooltip div.rounded{border-radius:4px}novo-tooltip div.extra-large,novo-tooltip div.large,novo-tooltip div.medium,novo-tooltip div.small{white-space:normal;line-height:1.4em;word-wrap:break-word}novo-tooltip div.extra-large{width:400px;font-size:1.2vh}novo-tooltip div.large{width:300px}novo-tooltip div.medium{width:150px}novo-tooltip div.small{width:80px}novo-tooltip div.preline{white-space:pre-line}novo-tooltip div.top:before{margin-bottom:-11px;left:calc(50% - 6px);bottom:0;border-top-color:#383838}novo-tooltip div.top.error:before{border-top-color:#b34e4d}novo-tooltip div.top.info:before{border-top-color:#3986ac}novo-tooltip div.top.warning:before{border-top-color:#c09854}novo-tooltip div.top.success:before{border-top-color:#458746}novo-tooltip div.top-left:before{border-top-color:#383838;margin-right:0;margin-bottom:-11px;right:0;bottom:0}novo-tooltip div.top-left.error:before{border-top-color:#b34e4d}novo-tooltip div.top-left.info:before{border-top-color:#3986ac}novo-tooltip div.top-left.warning:before{border-top-color:#c09854}novo-tooltip div.top-left.success:before{border-top-color:#458746}novo-tooltip div.top-right:before{border-top-color:#383838;margin-left:0;margin-bottom:-11px;left:0;bottom:0}novo-tooltip div.top-right.error:before{border-top-color:#b34e4d}novo-tooltip div.top-right.info:before{border-top-color:#3986ac}novo-tooltip div.top-right.warning:before{border-top-color:#c09854}novo-tooltip div.top-right.success:before{border-top-color:#458746}novo-tooltip div.bottom:before{margin-top:-11px;left:calc(50% - 6px);top:0;border-bottom-color:#383838}novo-tooltip div.bottom.error:before{border-top-color:#b34e4d}novo-tooltip div.bottom.info:before{border-top-color:#3986ac}novo-tooltip div.bottom.warning:before{border-top-color:#c09854}novo-tooltip div.bottom.success:before{border-top-color:#458746}novo-tooltip div.bottom-left:before{border-bottom-color:#383838;margin-right:0;margin-top:-11px;right:0;top:0}novo-tooltip div.bottom-left.error:before{border-bottom-color:#b34e4d}novo-tooltip div.bottom-left.info:before{border-bottom-color:#3986ac}novo-tooltip div.bottom-left.warning:before{border-bottom-color:#c09854}novo-tooltip div.bottom-left.success:before{border-bottom-color:#458746}novo-tooltip div.bottom-right:before{border-bottom-color:#383838;margin-left:0;margin-top:-11px;left:0;top:0}novo-tooltip div.bottom-right.error:before{border-bottom-color:#b34e4d}novo-tooltip div.bottom-right.info:before{border-bottom-color:#3986ac}novo-tooltip div.bottom-right.warning:before{border-bottom-color:#c09854}novo-tooltip div.bottom-right.success:before{border-bottom-color:#458746}novo-tooltip div.left:before{border-left-color:#383838;margin-right:-11px;margin-bottom:-6px;right:0;bottom:50%}novo-tooltip div.left.error:before{border-left-color:#b34e4d}novo-tooltip div.left.info:before{border-left-color:#3986ac}novo-tooltip div.left.warning:before{border-left-color:#c09854}novo-tooltip div.left.success:before{border-left-color:#458746}novo-tooltip div.right:before{left:0;bottom:50%;border-right-color:#383838;margin-left:-11px;margin-bottom:-6px}novo-tooltip div.right.error:before{border-right-color:#b34e4d}novo-tooltip div.right.info:before{border-right-color:#3986ac}novo-tooltip div.right.warning:before{border-right-color:#c09854}novo-tooltip div.right.success:before{border-right-color:#458746}novo-tooltip div:before{content:'';position:absolute;background:0 0;border:6px solid transparent;box-sizing:border-box}"]
                }] }
    ];
    return NovoTooltip;
}());
export { NovoTooltip };
if (false) {
    /** @type {?} */
    NovoTooltip.prototype.message;
    /** @type {?} */
    NovoTooltip.prototype.hidden;
    /** @type {?} */
    NovoTooltip.prototype.tooltipType;
    /** @type {?} */
    NovoTooltip.prototype.rounded;
    /** @type {?} */
    NovoTooltip.prototype.size;
    /** @type {?} */
    NovoTooltip.prototype.positionStrategy;
    /** @type {?} */
    NovoTooltip.prototype.preline;
    /** @type {?} */
    NovoTooltip.prototype.noAnimate;
    /** @type {?} */
    NovoTooltip.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRjtJQUFBO0lBb0NBLENBQUM7O2dCQXBDQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxvTUFDMkg7b0JBRXJJLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsT0FBTyxFQUFFOzRCQUNmLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs0QkFDdkQsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs0QkFDekMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQ0FDekIsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBRSxDQUFDO29DQUNWLFVBQVUsRUFBRSxTQUFTO2lDQUN0QixDQUFDO2dDQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7NkJBQ3hCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTtnQ0FDeEIsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBRSxDQUFDO29DQUNWLFVBQVUsRUFBRSxRQUFRO2lDQUNyQixDQUFDO2dDQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7NkJBQ3hCLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDs7aUJBQ0Y7O0lBV0Qsa0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQVZZLFdBQVc7OztJQUN0Qiw4QkFBdUI7O0lBQ3ZCLDZCQUF1Qjs7SUFDdkIsa0NBQTJCOztJQUMzQiw4QkFBd0I7O0lBQ3hCLDJCQUFvQjs7SUFDcEIsdUNBQTZCOztJQUM3Qiw4QkFBd0I7O0lBQ3hCLGdDQUEwQjs7SUFDMUIsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW0BzdGF0ZV09XCJub0FuaW1hdGUgPyAnbm8tYW5pbWF0aW9uJyA6ICd2aXNpYmxlJ1wiXG4gIFtuZ0NsYXNzXT1cIlt0b29sdGlwVHlwZSwgdGhpcy5yb3VuZGVkID8gJ3JvdW5kZWQnIDogJycsIHNpemUgPyBzaXplIDogJycsIHRoaXMucHJlbGluZT8gJ3ByZWxpbmUnIDogJycsIHBvc2l0aW9uXVwiPnt7bWVzc2FnZX19PC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vVG9vbHRpcC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbml0aWFsLCB2b2lkLCBoaWRkZW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSksXG4gICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdmlzaWJsZScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluJyksXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaGlkZGVuJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ub29sdGlwIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcbiAgcHVibGljIHRvb2x0aXBUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyByb3VuZGVkOiBib29sZWFuO1xuICBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuICBwdWJsaWMgcG9zaXRpb25TdHJhdGVneTogYW55O1xuICBwdWJsaWMgcHJlbGluZTogYm9vbGVhbjtcbiAgcHVibGljIG5vQW5pbWF0ZTogYm9vbGVhbjtcbiAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG59XG4iXX0=