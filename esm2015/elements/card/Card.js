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
const _c0 = ["*"];
function CardElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "novo-loading", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r0.cardAutomationId + "-loading");
} }
function CardElement_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", ctx_r1.cardAutomationId + "-move");
} }
function CardElement_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.iconClass);
} }
function CardElement_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function CardElement_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleRefresh(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r3.labels.refresh);
    i0.ɵɵattribute("data-automation-id", ctx_r3.cardAutomationId + "-refresh");
} }
function CardElement_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function CardElement_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.toggleClose(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r4.labels.close);
    i0.ɵɵattribute("data-automation-id", ctx_r4.cardAutomationId + "-close");
} }
function CardElement_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!(loading || config.loading) && !(message || config.message)"]);
} }
function CardElement_p_16_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r12.messageIconClass);
} }
function CardElement_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtemplate(1, CardElement_p_16_i_1_Template, 1, 1, "i", 6);
    i0.ɵɵelement(2, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", ctx_r6.cardAutomationId + "-message");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.messageIconClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r6.message || ctx_r6.config.message, i0.ɵɵsanitizeHtml);
} }
function CardElement_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!(loading || config.loading) && !(message || config.message)"]);
} }
const _c1 = [[["novo-card-actions"]], "*", [["footer"]]];
const _c2 = function (a0) { return { "no-padding": a0 }; };
const _c3 = ["novo-card-actions", "*", "footer"];
export class CardActionsElement {
}
CardActionsElement.ɵfac = function CardActionsElement_Factory(t) { return new (t || CardActionsElement)(); };
CardActionsElement.ɵcmp = i0.ɵɵdefineComponent({ type: CardActionsElement, selectors: [["novo-card-actions"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CardActionsElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardActionsElement, [{
        type: Component,
        args: [{
                selector: 'novo-card-actions',
                template: '<ng-content></ng-content>',
            }]
    }], null, null); })();
export class CardElement {
    constructor(labels) {
        this.padding = true;
        this.config = {};
        this.onClose = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.labels = labels;
    }
    ngOnInit() {
        this.config = this.config || {};
    }
    ngOnChanges(changes) {
        this.config = this.config || {};
        this.cardAutomationId = `${(this.title || this.config.title || 'no-title').toLowerCase().replace(/\s/g, '-')}-card`;
        const newIcon = this.icon || this.config.icon;
        const newMessageIcon = this.messageIcon || this.config.messageIcon;
        this.iconClass = newIcon ? `bhi-${newIcon}` : null;
        this.messageIconClass = newMessageIcon ? `bhi-${newMessageIcon}` : null;
    }
    toggleClose() {
        if (!this.config.onClose) {
            this.onClose.next();
        }
        else {
            this.config.onClose();
        }
    }
    toggleRefresh() {
        if (!this.config.onRefresh) {
            this.onRefresh.next();
        }
        else {
            this.config.onRefresh();
        }
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardElement, [{
        type: Component,
        args: [{
                selector: 'novo-card',
                template: `
        <div class="novo-card" [attr.data-automation-id]="cardAutomationId" [ngClass]="{'no-padding': !padding}" [class.loading]="loading || config.loading">
            <!--Loading-->
            <div class="card-loading-container" *ngIf="loading || config.loading">
                <novo-loading theme="line" [attr.data-automation-id]="cardAutomationId + '-loading'"></novo-loading>
            </div>
            <!--Card Header-->
            <header>
                <div class="title">
                    <!--Grabber Icon-->
                    <span tooltip="{{ labels.move }}" tooltipPosition="bottom-right"><i *ngIf="move || config.move" class="bhi-move" [attr.data-automation-id]="cardAutomationId + '-move'"></i></span>
                    <!--Card Title-->
                    <h3 [attr.data-automation-id]="cardAutomationId + '-title'"><span [tooltip]="iconTooltip" tooltipPosition="right"><i *ngIf="icon" [ngClass]="iconClass"></i></span> {{title || config.title}}</h3>
                </div>
                <!--Card Actions-->
                <div class="actions" [attr.data-automation-id]="cardAutomationId + '-actions'">
                    <ng-content select="novo-card-actions"></ng-content>
                    <button theme="icon" icon="refresh"  (click)="toggleRefresh()" *ngIf="refresh || config.refresh" [attr.data-automation-id]="cardAutomationId + '-refresh'" tooltip="{{ labels.refresh }}" tooltipPosition="bottom-left"></button>
                    <button theme="icon" icon="close-o" (click)="toggleClose()" *ngIf="close || config.close" [attr.data-automation-id]="cardAutomationId + '-close'" tooltip="{{ labels.close }}" tooltipPosition="bottom-left"></button>
                </div>
            </header>
            <!--Card Main-->
            <main>
                <!--Content (transcluded)-->
                <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)"></ng-content>
                <!--Error/Empty Message-->
                <p class="card-message" *ngIf="!(loading || config.loading) && (message || config.message)" [attr.data-automation-id]="cardAutomationId + '-message'"><i *ngIf="messageIconClass" [ngClass]="messageIconClass"></i> <span [innerHtml]="message || config.message"></span></p>
            </main>
            <!--Card Footer-->
            <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)" select="footer"></ng-content>
        </div>
    `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7O0lBYXpELCtCQUNJO0lBQUEsbUNBQW9HO0lBQ3hHLGlCQUFNOzs7SUFEeUIsZUFBeUQ7SUFBekQsMEVBQXlEOzs7SUFNZix3QkFBMkc7OztJQUEzRCx1RUFBc0Q7OztJQUVyRCx3QkFBMEM7OztJQUExQiwwQ0FBcUI7Ozs7SUFLdkosa0NBQWlPO0lBQTVMLHNMQUF5QjtJQUEwSixpQkFBUzs7O0lBQXRFLDBEQUE4QjtJQUF4RiwwRUFBeUQ7Ozs7SUFDMUosa0NBQXNOO0lBQWxMLHVMQUF1QjtJQUFrSixpQkFBUzs7O0lBQXBFLHdEQUE0QjtJQUFwRix3RUFBdUQ7OztJQU1ySixnR0FBaUY7OztJQUVxRSx3QkFBNkQ7OztJQUFqQyxrREFBNEI7OztJQUE5TSw2QkFBc0o7SUFBQSw2REFBeUQ7SUFBSywyQkFBcUQ7SUFBQSxpQkFBSTs7O0lBQWpMLDBFQUF5RDtJQUFJLGVBQXdCO0lBQXhCLDhDQUF3QjtJQUF5QyxlQUF1QztJQUF2QyxzRkFBdUM7OztJQUdyUSxnR0FBaUc7Ozs7O0FBakM3RyxNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FBRmxCLGtCQUFZOztrREFFWixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7O0FBc0NELE1BQU0sT0FBTyxXQUFXO0lBa0N0QixZQUFZLE1BQXdCO1FBaENwQyxZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFxQmpCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFRaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBdUI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRXBILE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEQsTUFBTSxjQUFjLEdBQVcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7O3NFQWxFVSxXQUFXO2dEQUFYLFdBQVc7O1FBaENoQiw4QkFDSTtRQUNBLDREQUNJO1FBR0osOEJBQ0k7UUFBQSw4QkFDSTtRQUNBLCtCQUFpRTtRQUFBLHdEQUF1RztRQUFJLGlCQUFPO1FBRW5MLDBCQUE0RDtRQUFBLCtCQUFzRDtRQUFBLHdEQUFzQztRQUFJLGlCQUFPO1FBQUMsWUFBeUI7UUFBQSxpQkFBSztRQUN0TSxpQkFBTTtRQUVOLCtCQUNJO1FBQUEsbUJBQXVDO1FBQ3ZDLG9FQUF3TjtRQUN4TixvRUFBNk07UUFDak4saUJBQU07UUFDVixpQkFBUztRQUVULDZCQUNJO1FBQ0EsK0RBQWlGO1FBRWpGLDJEQUFzSjtRQUMxSixpQkFBTztRQUVQLCtEQUFpRztRQUNyRyxpQkFBTTs7UUE3Qm1HLDREQUEyQztRQUFoRixtRUFBb0M7UUFBakYsMERBQTRDO1FBRTNCLGVBQWlDO1FBQWpDLHdEQUFpQztRQU92RCxlQUEyQjtRQUEzQixvREFBMkI7UUFBbUMsZUFBMkI7UUFBM0Isa0RBQTJCO1FBRTNGLGVBQXVEO1FBQXZELHFFQUF1RDtRQUFPLGVBQXVCO1FBQXZCLHlDQUF1QjtRQUE0QixlQUFZO1FBQVosK0JBQVk7UUFBbUMsZUFBeUI7UUFBekIsNkRBQXlCO1FBRzVLLGVBQXlEO1FBQXpELHVFQUF5RDtRQUVYLGVBQWlDO1FBQWpDLHdEQUFpQztRQUNwQyxlQUE2QjtRQUE3QixvREFBNkI7UUFNakYsZUFBb0U7UUFBcEUsbUdBQW9FO1FBRXhELGVBQW1FO1FBQW5FLGtHQUFtRTtRQUduRixlQUFvRTtRQUFwRSxtR0FBb0U7O2tEQUkvRSxXQUFXO2NBbkN2QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCUDthQUNKOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FyZC1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEFjdGlvbnNFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FyZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhcmRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZFwiIFtuZ0NsYXNzXT1cInsnbm8tcGFkZGluZyc6ICFwYWRkaW5nfVwiIFtjbGFzcy5sb2FkaW5nXT1cImxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmdcIj5cbiAgICAgICAgICAgIDwhLS1Mb2FkaW5nLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sb2FkaW5nLWNvbnRhaW5lclwiICpuZ0lmPVwibG9hZGluZyB8fCBjb25maWcubG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWxvYWRpbmcnXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEhlYWRlci0tPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUdyYWJiZXIgSWNvbi0tPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0b29sdGlwPVwie3sgbGFiZWxzLm1vdmUgfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tcmlnaHRcIj48aSAqbmdJZj1cIm1vdmUgfHwgY29uZmlnLm1vdmVcIiBjbGFzcz1cImJoaS1tb3ZlXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLW1vdmUnXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUNhcmQgVGl0bGUtLT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy10aXRsZSdcIj48c3BhbiBbdG9vbHRpcF09XCJpY29uVG9vbHRpcFwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCI+PGkgKm5nSWY9XCJpY29uXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPjwvc3Bhbj4ge3t0aXRsZSB8fCBjb25maWcudGl0bGV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLUNhcmQgQWN0aW9ucy0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWFjdGlvbnMnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tY2FyZC1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJyZWZyZXNoXCIgIChjbGljayk9XCJ0b2dnbGVSZWZyZXNoKClcIiAqbmdJZj1cInJlZnJlc2ggfHwgY29uZmlnLnJlZnJlc2hcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctcmVmcmVzaCdcIiB0b29sdGlwPVwie3sgbGFiZWxzLnJlZnJlc2ggfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJjbG9zZS1vXCIgKGNsaWNrKT1cInRvZ2dsZUNsb3NlKClcIiAqbmdJZj1cImNsb3NlIHx8IGNvbmZpZy5jbG9zZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1jbG9zZSdcIiB0b29sdGlwPVwie3sgbGFiZWxzLmNsb3NlIH19XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPCEtLUNhcmQgTWFpbi0tPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPCEtLUNvbnRlbnQgKHRyYW5zY2x1ZGVkKS0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAhKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwhLS1FcnJvci9FbXB0eSBNZXNzYWdlLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLW1lc3NhZ2VcIiAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLW1lc3NhZ2UnXCI+PGkgKm5nSWY9XCJtZXNzYWdlSWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwibWVzc2FnZUljb25DbGFzc1wiPjwvaT4gPHNwYW4gW2lubmVySHRtbF09XCJtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEZvb3Rlci0tPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmICEobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtZXNzYWdlSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb25Ub29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJlZnJlc2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNsb3NlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtb3ZlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2FyZEF1dG9tYXRpb25JZDogc3RyaW5nO1xuICBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2U7XG4gIGljb25DbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgbWVzc2FnZUljb25DbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmNhcmRBdXRvbWF0aW9uSWQgPSBgJHsodGhpcy50aXRsZSB8fCB0aGlzLmNvbmZpZy50aXRsZSB8fCAnbm8tdGl0bGUnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnLScpfS1jYXJkYDtcblxuICAgIGNvbnN0IG5ld0ljb246IHN0cmluZyA9IHRoaXMuaWNvbiB8fCB0aGlzLmNvbmZpZy5pY29uO1xuICAgIGNvbnN0IG5ld01lc3NhZ2VJY29uOiBzdHJpbmcgPSB0aGlzLm1lc3NhZ2VJY29uIHx8IHRoaXMuY29uZmlnLm1lc3NhZ2VJY29uO1xuICAgIHRoaXMuaWNvbkNsYXNzID0gbmV3SWNvbiA/IGBiaGktJHtuZXdJY29ufWAgOiBudWxsO1xuICAgIHRoaXMubWVzc2FnZUljb25DbGFzcyA9IG5ld01lc3NhZ2VJY29uID8gYGJoaS0ke25ld01lc3NhZ2VJY29ufWAgOiBudWxsO1xuICB9XG5cbiAgdG9nZ2xlQ2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLm9uQ2xvc2UubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUmVmcmVzaCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9uUmVmcmVzaCkge1xuICAgICAgdGhpcy5vblJlZnJlc2gubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5vblJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==