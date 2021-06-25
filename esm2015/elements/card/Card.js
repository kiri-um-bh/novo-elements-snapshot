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
function CardElement_ng_content_15_Template(rf, ctx) { if (rf & 1) {
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
function CardElement_ng_content_17_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(15, CardElement_ng_content_15_Template, 1, 0, "ng-content", 10);
        i0.ɵɵtemplate(16, CardElement_p_16_Template, 3, 3, "p", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, CardElement_ng_content_17_Template, 1, 0, "ng-content", 10);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7O0lBYXpELCtCQUNJO0lBQUEsbUNBQW9HO0lBQ3hHLGlCQUFNOzs7SUFEeUIsZUFBeUQ7SUFBekQsMEVBQXlEOzs7SUFNZix3QkFBMkc7OztJQUEzRCx1RUFBc0Q7OztJQUVyRCx3QkFBMEM7OztJQUExQiwwQ0FBcUI7Ozs7SUFLdkosa0NBQWlPO0lBQTVMLHNMQUF5QjtJQUEwSixpQkFBUzs7O0lBQXRFLDBEQUE4QjtJQUF4RiwwRUFBeUQ7Ozs7SUFDMUosa0NBQXNOO0lBQWxMLHVMQUF1QjtJQUFrSixpQkFBUzs7O0lBQXBFLHdEQUE0QjtJQUFwRix3RUFBdUQ7OztJQU1ySixnR0FBaUY7OztJQUVxRSx3QkFBNkQ7OztJQUFqQyxrREFBNEI7OztJQUE5TSw2QkFBc0o7SUFBQSw2REFBeUQ7SUFBSywyQkFBcUQ7SUFBQSxpQkFBSTs7O0lBQWpMLDBFQUF5RDtJQUFJLGVBQXdCO0lBQXhCLDhDQUF3QjtJQUF5QyxlQUF1QztJQUF2QyxzRkFBdUM7OztJQUdyUSxnR0FBaUc7Ozs7O0FBakM3RyxNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FBRmxCLGtCQUFZOztrREFFWixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSwyQkFB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REFBNkI7UUFNakYsZUFBb0U7UUFBcEUsbUdBQW9FO1FBRXhELGVBQW1FO1FBQW5FLGtHQUFtRTtRQUduRixlQUFvRTtRQUFwRSxtR0FBb0U7O2tEQUkvRSxXQUFXO2NBbkN2QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCUDthQUNKO21FQUdDLE9BQU87a0JBRE4sS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLE9BQU87a0JBRE4sS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLE9BQU87a0JBRE4sS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSztZQUdOLE9BQU87a0JBRE4sS0FBSztZQUlOLE9BQU87a0JBRE4sTUFBTTtZQUdQLFNBQVM7a0JBRFIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhcmQtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRBY3Rpb25zRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jYXJkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWRcIiBbbmdDbGFzc109XCJ7J25vLXBhZGRpbmcnOiAhcGFkZGluZ31cIiBbY2xhc3MubG9hZGluZ109XCJsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nXCI+XG4gICAgICAgICAgICA8IS0tTG9hZGluZy0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbG9hZGluZy1jb250YWluZXJcIiAqbmdJZj1cImxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1sb2FkaW5nJ1wiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tQ2FyZCBIZWFkZXItLT5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1HcmFiYmVyIEljb24tLT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdG9vbHRpcD1cInt7IGxhYmVscy5tb3ZlIH19XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCI+PGkgKm5nSWY9XCJtb3ZlIHx8IGNvbmZpZy5tb3ZlXCIgY2xhc3M9XCJiaGktbW92ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1tb3ZlJ1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1DYXJkIFRpdGxlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctdGl0bGUnXCI+PHNwYW4gW3Rvb2x0aXBdPVwiaWNvblRvb2x0aXBcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiPjxpICpuZ0lmPVwiaWNvblwiIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT48L3NwYW4+IHt7dGl0bGUgfHwgY29uZmlnLnRpdGxlfX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS1DYXJkIEFjdGlvbnMtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1hY3Rpb25zJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWNhcmQtYWN0aW9uc1wiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwicmVmcmVzaFwiICAoY2xpY2spPVwidG9nZ2xlUmVmcmVzaCgpXCIgKm5nSWY9XCJyZWZyZXNoIHx8IGNvbmZpZy5yZWZyZXNoXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLXJlZnJlc2gnXCIgdG9vbHRpcD1cInt7IGxhYmVscy5yZWZyZXNoIH19XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwiY2xvc2Utb1wiIChjbGljayk9XCJ0b2dnbGVDbG9zZSgpXCIgKm5nSWY9XCJjbG9zZSB8fCBjb25maWcuY2xvc2VcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctY2xvc2UnXCIgdG9vbHRpcD1cInt7IGxhYmVscy5jbG9zZSB9fVwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbS1sZWZ0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwhLS1DYXJkIE1haW4tLT5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDwhLS1Db250ZW50ICh0cmFuc2NsdWRlZCktLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgIShtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8IS0tRXJyb3IvRW1wdHkgTWVzc2FnZS0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1tZXNzYWdlXCIgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmIChtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1tZXNzYWdlJ1wiPjxpICpuZ0lmPVwibWVzc2FnZUljb25DbGFzc1wiIFtuZ0NsYXNzXT1cIm1lc3NhZ2VJY29uQ2xhc3NcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwibWVzc2FnZSB8fCBjb25maWcubWVzc2FnZVwiPjwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8IS0tQ2FyZCBGb290ZXItLT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAhKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCIgc2VsZWN0PVwiZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcGFkZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWVzc2FnZUljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uVG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjbG9zZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbW92ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9hZGluZzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNhcmRBdXRvbWF0aW9uSWQ6IHN0cmluZztcbiAgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlO1xuICBpY29uQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIG1lc3NhZ2VJY29uQ2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG4gICAgdGhpcy5jYXJkQXV0b21hdGlvbklkID0gYCR7KHRoaXMudGl0bGUgfHwgdGhpcy5jb25maWcudGl0bGUgfHwgJ25vLXRpdGxlJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJy0nKX0tY2FyZGA7XG5cbiAgICBjb25zdCBuZXdJY29uOiBzdHJpbmcgPSB0aGlzLmljb24gfHwgdGhpcy5jb25maWcuaWNvbjtcbiAgICBjb25zdCBuZXdNZXNzYWdlSWNvbjogc3RyaW5nID0gdGhpcy5tZXNzYWdlSWNvbiB8fCB0aGlzLmNvbmZpZy5tZXNzYWdlSWNvbjtcbiAgICB0aGlzLmljb25DbGFzcyA9IG5ld0ljb24gPyBgYmhpLSR7bmV3SWNvbn1gIDogbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VJY29uQ2xhc3MgPSBuZXdNZXNzYWdlSWNvbiA/IGBiaGktJHtuZXdNZXNzYWdlSWNvbn1gIDogbnVsbDtcbiAgfVxuXG4gIHRvZ2dsZUNsb3NlKCkge1xuICAgIGlmICghdGhpcy5jb25maWcub25DbG9zZSkge1xuICAgICAgdGhpcy5vbkNsb3NlLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcub25DbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVJlZnJlc2goKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vblJlZnJlc2gpIHtcbiAgICAgIHRoaXMub25SZWZyZXNoLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcub25SZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iXX0=