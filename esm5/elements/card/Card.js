// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../tooltip/Tooltip.directive";
import * as i4 from "../loading/Loading";
import * as i5 from "../button/Button";
var _c0 = ["*"];
function CardElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "novo-loading", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r0.cardAutomationId + "-loading");
} }
function CardElement_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", ctx_r1.cardAutomationId + "-move");
} }
function CardElement_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.iconClass);
} }
function CardElement_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function CardElement_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleRefresh(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r3.labels.refresh);
    i0.ɵɵattribute("data-automation-id", ctx_r3.cardAutomationId + "-refresh");
} }
function CardElement_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function CardElement_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.toggleClose(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r4.labels.close);
    i0.ɵɵattribute("data-automation-id", ctx_r4.cardAutomationId + "-close");
} }
function CardElement_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!(loading || config.loading) && !(message || config.message)"]);
} }
function CardElement_p_16_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    var ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r12.messageIconClass);
} }
function CardElement_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtemplate(1, CardElement_p_16_i_1_Template, 1, 1, "i", 6);
    i0.ɵɵelement(2, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", ctx_r6.cardAutomationId + "-message");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.messageIconClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r6.message || ctx_r6.config.message, i0.ɵɵsanitizeHtml);
} }
function CardElement_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!(loading || config.loading) && !(message || config.message)"]);
} }
var _c1 = [[["novo-card-actions"]], "*", [["footer"]]];
var _c2 = function (a0) { return { "no-padding": a0 }; };
var _c3 = ["novo-card-actions", "*", "footer"];
var CardActionsElement = /** @class */ (function () {
    function CardActionsElement() {
    }
    CardActionsElement.ɵfac = function CardActionsElement_Factory(t) { return new (t || CardActionsElement)(); };
    CardActionsElement.ɵcmp = i0.ɵɵdefineComponent({ type: CardActionsElement, selectors: [["novo-card-actions"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CardActionsElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return CardActionsElement;
}());
export { CardActionsElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardActionsElement, [{
        type: Component,
        args: [{
                selector: 'novo-card-actions',
                template: '<ng-content></ng-content>',
            }]
    }], null, null); })();
var CardElement = /** @class */ (function () {
    function CardElement(labels) {
        this.padding = true;
        this.config = {};
        this.onClose = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.labels = labels;
    }
    CardElement.prototype.ngOnInit = function () {
        this.config = this.config || {};
    };
    CardElement.prototype.ngOnChanges = function (changes) {
        this.config = this.config || {};
        this.cardAutomationId = (this.title || this.config.title || 'no-title').toLowerCase().replace(/\s/g, '-') + "-card";
        var newIcon = this.icon || this.config.icon;
        var newMessageIcon = this.messageIcon || this.config.messageIcon;
        this.iconClass = newIcon ? "bhi-" + newIcon : null;
        this.messageIconClass = newMessageIcon ? "bhi-" + newMessageIcon : null;
    };
    CardElement.prototype.toggleClose = function () {
        if (!this.config.onClose) {
            this.onClose.next();
        }
        else {
            this.config.onClose();
        }
    };
    CardElement.prototype.toggleRefresh = function () {
        if (!this.config.onRefresh) {
            this.onRefresh.next();
        }
        else {
            this.config.onRefresh();
        }
    };
    CardElement.ɵfac = function CardElement_Factory(t) { return new (t || CardElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    CardElement.ɵcmp = i0.ɵɵdefineComponent({ type: CardElement, selectors: [["novo-card"]], inputs: { padding: "padding", config: "config", title: "title", message: "message", messageIcon: "messageIcon", icon: "icon", iconTooltip: "iconTooltip", refresh: "refresh", close: "close", move: "move", loading: "loading" }, outputs: { onClose: "onClose", onRefresh: "onRefresh" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 18, vars: 19, consts: [[1, "novo-card", 3, "ngClass"], ["class", "card-loading-container", 4, "ngIf"], [1, "title"], ["tooltipPosition", "bottom-right", 3, "tooltip"], ["class", "bhi-move", 4, "ngIf"], ["tooltipPosition", "right", 3, "tooltip"], [3, "ngClass", 4, "ngIf"], [1, "actions"], ["theme", "icon", "icon", "refresh", "tooltipPosition", "bottom-left", 3, "tooltip", "click", 4, "ngIf"], ["theme", "icon", "icon", "close-o", "tooltipPosition", "bottom-left", 3, "tooltip", "click", 4, "ngIf"], [4, "ngIf"], ["class", "card-message", 4, "ngIf"], [1, "card-loading-container"], ["theme", "line"], [1, "bhi-move"], [3, "ngClass"], ["theme", "icon", "icon", "refresh", "tooltipPosition", "bottom-left", 3, "tooltip", "click"], ["theme", "icon", "icon", "close-o", "tooltipPosition", "bottom-left", 3, "tooltip", "click"], [1, "card-message"], [3, "innerHtml"]], template: function CardElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CardElement_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementStart(2, "header");
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtemplate(5, CardElement_i_5_Template, 1, 1, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h3");
            i0.ɵɵelementStart(7, "span", 5);
            i0.ɵɵtemplate(8, CardElement_i_8_Template, 1, 1, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 7);
            i0.ɵɵprojection(11);
            i0.ɵɵtemplate(12, CardElement_button_12_Template, 1, 2, "button", 8);
            i0.ɵɵtemplate(13, CardElement_button_13_Template, 1, 2, "button", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "main");
            i0.ɵɵtemplate(15, CardElement_15_Template, 1, 0, undefined, 10);
            i0.ɵɵtemplate(16, CardElement_p_16_Template, 3, 3, "p", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, CardElement_17_Template, 1, 0, undefined, 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("loading", ctx.loading || ctx.config.loading);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c2, !ctx.padding));
            i0.ɵɵattribute("data-automation-id", ctx.cardAutomationId);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.loading || ctx.config.loading);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("tooltip", ctx.labels.move);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.move || ctx.config.move);
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("data-automation-id", ctx.cardAutomationId + "-title");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("tooltip", ctx.iconTooltip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.title || ctx.config.title, "");
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("data-automation-id", ctx.cardAutomationId + "-actions");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.refresh || ctx.config.refresh);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.close || ctx.config.close);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !(ctx.loading || ctx.config.loading) && !(ctx.message || ctx.config.message));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx.loading || ctx.config.loading) && (ctx.message || ctx.config.message));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx.loading || ctx.config.loading) && !(ctx.message || ctx.config.message));
        } }, directives: [i2.NgClass, i2.NgIf, i3.TooltipDirective, i4.NovoLoadingElement, i5.NovoButtonElement], encapsulation: 2 });
    return CardElement;
}());
export { CardElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardElement, [{
        type: Component,
        args: [{
                selector: 'novo-card',
                template: "\n        <div class=\"novo-card\" [attr.data-automation-id]=\"cardAutomationId\" [ngClass]=\"{'no-padding': !padding}\" [class.loading]=\"loading || config.loading\">\n            <!--Loading-->\n            <div class=\"card-loading-container\" *ngIf=\"loading || config.loading\">\n                <novo-loading theme=\"line\" [attr.data-automation-id]=\"cardAutomationId + '-loading'\"></novo-loading>\n            </div>\n            <!--Card Header-->\n            <header>\n                <div class=\"title\">\n                    <!--Grabber Icon-->\n                    <span tooltip=\"{{ labels.move }}\" tooltipPosition=\"bottom-right\"><i *ngIf=\"move || config.move\" class=\"bhi-move\" [attr.data-automation-id]=\"cardAutomationId + '-move'\"></i></span>\n                    <!--Card Title-->\n                    <h3 [attr.data-automation-id]=\"cardAutomationId + '-title'\"><span [tooltip]=\"iconTooltip\" tooltipPosition=\"right\"><i *ngIf=\"icon\" [ngClass]=\"iconClass\"></i></span> {{title || config.title}}</h3>\n                </div>\n                <!--Card Actions-->\n                <div class=\"actions\" [attr.data-automation-id]=\"cardAutomationId + '-actions'\">\n                    <ng-content select=\"novo-card-actions\"></ng-content>\n                    <button theme=\"icon\" icon=\"refresh\"  (click)=\"toggleRefresh()\" *ngIf=\"refresh || config.refresh\" [attr.data-automation-id]=\"cardAutomationId + '-refresh'\" tooltip=\"{{ labels.refresh }}\" tooltipPosition=\"bottom-left\"></button>\n                    <button theme=\"icon\" icon=\"close-o\" (click)=\"toggleClose()\" *ngIf=\"close || config.close\" [attr.data-automation-id]=\"cardAutomationId + '-close'\" tooltip=\"{{ labels.close }}\" tooltipPosition=\"bottom-left\"></button>\n                </div>\n            </header>\n            <!--Card Main-->\n            <main>\n                <!--Content (transcluded)-->\n                <ng-content *ngIf=\"!(loading || config.loading) && !(message || config.message)\"></ng-content>\n                <!--Error/Empty Message-->\n                <p class=\"card-message\" *ngIf=\"!(loading || config.loading) && (message || config.message)\" [attr.data-automation-id]=\"cardAutomationId + '-message'\"><i *ngIf=\"messageIconClass\" [ngClass]=\"messageIconClass\"></i> <span [innerHtml]=\"message || config.message\"></span></p>\n            </main>\n            <!--Card Footer-->\n            <ng-content *ngIf=\"!(loading || config.loading) && !(message || config.message)\" select=\"footer\"></ng-content>\n        </div>\n    ",
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { padding: [{
            type: Input
        }], config: [{
            type: Input
        }], title: [{
            type: Input
        }], message: [{
            type: Input
        }], messageIcon: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconTooltip: [{
            type: Input
        }], refresh: [{
            type: Input
        }], close: [{
            type: Input
        }], move: [{
            type: Input
        }], loading: [{
            type: Input
        }], onClose: [{
            type: Output
        }], onRefresh: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7O0lBYXpELCtCQUNJO0lBQUEsbUNBQW9HO0lBQ3hHLGlCQUFNOzs7SUFEeUIsZUFBeUQ7SUFBekQsMEVBQXlEOzs7SUFNZix3QkFBMkc7OztJQUEzRCx1RUFBc0Q7OztJQUVyRCx3QkFBMEM7OztJQUExQiwwQ0FBcUI7Ozs7SUFLdkosa0NBQWlPO0lBQTVMLG9MQUF5QjtJQUEwSixpQkFBUzs7O0lBQXRFLDBEQUE4QjtJQUF4RiwwRUFBeUQ7Ozs7SUFDMUosa0NBQXNOO0lBQWxMLHFMQUF1QjtJQUFrSixpQkFBUzs7O0lBQXBFLHdEQUE0QjtJQUFwRix3RUFBdUQ7OztJQU1ySixnR0FBaUY7OztJQUVxRSx3QkFBNkQ7OztJQUFqQyxrREFBNEI7OztJQUE5TSw2QkFBc0o7SUFBQSw2REFBeUQ7SUFBSywyQkFBcUQ7SUFBQSxpQkFBSTs7O0lBQWpMLDBFQUF5RDtJQUFJLGVBQXdCO0lBQXhCLDhDQUF3QjtJQUF5QyxlQUF1QztJQUF2QyxzRkFBdUM7OztJQUdyUSxnR0FBaUc7Ozs7O0FBckM3RztJQUFBO0tBSWtDO3dGQUFyQixrQkFBa0I7MkRBQWxCLGtCQUFrQjs7WUFGbEIsa0JBQVk7OzZCQVB6QjtDQVNrQyxBQUpsQyxJQUlrQztTQUFyQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7QUFHRDtJQXFFRSxx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RTtZQUV4RCxlQUFtRTtZQUFuRSxrR0FBbUU7WUFHbkYsZUFBb0U7WUFBcEUsbUdBQW9FOztzQkExQzVGO0NBaUhDLEFBdEdELElBc0dDO1NBbkVZLFdBQVc7a0RBQVgsV0FBVztjQW5DdkIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsNmhGQStCUDthQUNKOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FyZC1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEFjdGlvbnNFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FyZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhcmRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZFwiIFtuZ0NsYXNzXT1cInsnbm8tcGFkZGluZyc6ICFwYWRkaW5nfVwiIFtjbGFzcy5sb2FkaW5nXT1cImxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmdcIj5cbiAgICAgICAgICAgIDwhLS1Mb2FkaW5nLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sb2FkaW5nLWNvbnRhaW5lclwiICpuZ0lmPVwibG9hZGluZyB8fCBjb25maWcubG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWxvYWRpbmcnXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEhlYWRlci0tPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUdyYWJiZXIgSWNvbi0tPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0b29sdGlwPVwie3sgbGFiZWxzLm1vdmUgfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tcmlnaHRcIj48aSAqbmdJZj1cIm1vdmUgfHwgY29uZmlnLm1vdmVcIiBjbGFzcz1cImJoaS1tb3ZlXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLW1vdmUnXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUNhcmQgVGl0bGUtLT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy10aXRsZSdcIj48c3BhbiBbdG9vbHRpcF09XCJpY29uVG9vbHRpcFwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCI+PGkgKm5nSWY9XCJpY29uXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPjwvc3Bhbj4ge3t0aXRsZSB8fCBjb25maWcudGl0bGV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLUNhcmQgQWN0aW9ucy0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWFjdGlvbnMnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tY2FyZC1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJyZWZyZXNoXCIgIChjbGljayk9XCJ0b2dnbGVSZWZyZXNoKClcIiAqbmdJZj1cInJlZnJlc2ggfHwgY29uZmlnLnJlZnJlc2hcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctcmVmcmVzaCdcIiB0b29sdGlwPVwie3sgbGFiZWxzLnJlZnJlc2ggfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJjbG9zZS1vXCIgKGNsaWNrKT1cInRvZ2dsZUNsb3NlKClcIiAqbmdJZj1cImNsb3NlIHx8IGNvbmZpZy5jbG9zZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1jbG9zZSdcIiB0b29sdGlwPVwie3sgbGFiZWxzLmNsb3NlIH19XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPCEtLUNhcmQgTWFpbi0tPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPCEtLUNvbnRlbnQgKHRyYW5zY2x1ZGVkKS0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAhKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwhLS1FcnJvci9FbXB0eSBNZXNzYWdlLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLW1lc3NhZ2VcIiAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLW1lc3NhZ2UnXCI+PGkgKm5nSWY9XCJtZXNzYWdlSWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwibWVzc2FnZUljb25DbGFzc1wiPjwvaT4gPHNwYW4gW2lubmVySHRtbF09XCJtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEZvb3Rlci0tPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmICEobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtZXNzYWdlSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb25Ub29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJlZnJlc2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNsb3NlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtb3ZlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2FyZEF1dG9tYXRpb25JZDogc3RyaW5nO1xuICBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2U7XG4gIGljb25DbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgbWVzc2FnZUljb25DbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmNhcmRBdXRvbWF0aW9uSWQgPSBgJHsodGhpcy50aXRsZSB8fCB0aGlzLmNvbmZpZy50aXRsZSB8fCAnbm8tdGl0bGUnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnLScpfS1jYXJkYDtcblxuICAgIGNvbnN0IG5ld0ljb246IHN0cmluZyA9IHRoaXMuaWNvbiB8fCB0aGlzLmNvbmZpZy5pY29uO1xuICAgIGNvbnN0IG5ld01lc3NhZ2VJY29uOiBzdHJpbmcgPSB0aGlzLm1lc3NhZ2VJY29uIHx8IHRoaXMuY29uZmlnLm1lc3NhZ2VJY29uO1xuICAgIHRoaXMuaWNvbkNsYXNzID0gbmV3SWNvbiA/IGBiaGktJHtuZXdJY29ufWAgOiBudWxsO1xuICAgIHRoaXMubWVzc2FnZUljb25DbGFzcyA9IG5ld01lc3NhZ2VJY29uID8gYGJoaS0ke25ld01lc3NhZ2VJY29ufWAgOiBudWxsO1xuICB9XG5cbiAgdG9nZ2xlQ2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLm9uQ2xvc2UubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUmVmcmVzaCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9uUmVmcmVzaCkge1xuICAgICAgdGhpcy5vblJlZnJlc2gubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5vblJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==