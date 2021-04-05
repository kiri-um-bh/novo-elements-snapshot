// NG2
import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../loading/Loading";
import * as i4 from "../tooltip/Tooltip.directive";
import * as i5 from "../button/Button";
const _c0 = ["*"];
const _c1 = [[["novo-avatar"], ["", "novo-avatar", ""], ["novo-icon"]], [["novo-title"], ["", "novo-title", ""], ["novo-text"], ["novo-label"], ["novo-caption"]], "*", [["novo-action"]]];
const _c2 = ["novo-avatar, [novo-avatar], novo-icon", "novo-title, [novo-title], novo-text, novo-label, novo-caption", "*", "novo-action"];
function CardElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "novo-loading", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r0.cardAutomationId + "-loading");
} }
function CardElement_header_2_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", ctx_r5.cardAutomationId + "-move");
} }
function CardElement_header_2_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r6.iconClass);
} }
function CardElement_header_2_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function CardElement_header_2_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.toggleRefresh(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r7.labels.refresh);
    i0.ɵɵattribute("data-automation-id", ctx_r7.cardAutomationId + "-refresh");
} }
function CardElement_header_2_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function CardElement_header_2_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.toggleClose(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r8.labels.close);
    i0.ɵɵattribute("data-automation-id", ctx_r8.cardAutomationId + "-close");
} }
function CardElement_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header");
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵtemplate(3, CardElement_header_2_i_3_Template, 1, 1, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵelementStart(5, "span", 9);
    i0.ɵɵtemplate(6, CardElement_header_2_i_6_Template, 1, 1, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 11);
    i0.ɵɵprojection(9);
    i0.ɵɵtemplate(10, CardElement_header_2_button_10_Template, 1, 2, "button", 12);
    i0.ɵɵtemplate(11, CardElement_header_2_button_11_Template, 1, 2, "button", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r1.labels.move);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.move || ctx_r1.config.move);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r1.cardAutomationId + "-title");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tooltip", ctx_r1.iconTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.title || ctx_r1.config.title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", ctx_r1.cardAutomationId + "-actions");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.refresh || ctx_r1.config.refresh);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.close || ctx_r1.config.close);
} }
function CardElement_ng_content_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!(loading || config.loading) && !(message || config.message)"]);
} }
function CardElement_p_5_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r13.messageIconClass);
} }
function CardElement_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtemplate(1, CardElement_p_5_i_1_Template, 1, 1, "i", 10);
    i0.ɵɵelement(2, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", ctx_r3.cardAutomationId + "-message");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.messageIconClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r3.message || ctx_r3.config.message, i0.ɵɵsanitizeHtml);
} }
function CardElement_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!(loading || config.loading) && !(message || config.message)"]);
} }
const _c3 = [[["novo-card-actions"]], "*", [["footer"]]];
const _c4 = function (a0) { return { "no-padding": a0 }; };
const _c5 = ["novo-card-actions", "*", "footer"];
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
/**
 * Content of a card, needed as it's used as a selector in the API.
 */
export class CardContentElement {
}
CardContentElement.ɵfac = function CardContentElement_Factory(t) { return new (t || CardContentElement)(); };
CardContentElement.ɵdir = i0.ɵɵdefineDirective({ type: CardContentElement, selectors: [["novo-card-content"], ["", "novo-card-content", ""], ["", "novoCardContent", ""]], hostAttrs: [1, "novo-card-content"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardContentElement, [{
        type: Directive,
        args: [{
                selector: 'novo-card-content, [novo-card-content], [novoCardContent]',
                host: { class: 'novo-card-content' },
            }]
    }], null, null); })();
/**
 * Content of a card, needed as it's used as a selector in the API.
 */
export class CardHeaderElement {
}
CardHeaderElement.ɵfac = function CardHeaderElement_Factory(t) { return new (t || CardHeaderElement)(); };
CardHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: CardHeaderElement, selectors: [["novo-card-header"], ["", "novo-card-header", ""], ["", "novoCardHeader", ""]], hostAttrs: [1, "novo-card-header"], ngContentSelectors: _c2, decls: 6, vars: 0, consts: [[1, "novo-card-header-text"], [1, "novo-card-header-actions"]], template: function CardHeaderElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵprojection(0);
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵprojection(2, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(3, 2);
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵprojection(5, 3);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardHeaderElement, [{
        type: Component,
        args: [{
                selector: 'novo-card-header, [novo-card-header], [novoCardHeader]',
                host: { class: 'novo-card-header' },
                template: `
    <ng-content select="novo-avatar, [novo-avatar], novo-icon"></ng-content>
    <div class="novo-card-header-text">
      <ng-content select="novo-title, [novo-title], novo-text, novo-label, novo-caption"></ng-content>
    </div>
    <ng-content></ng-content>
    <div class="novo-card-header-actions">
      <ng-content select="novo-action"></ng-content>
    </div>
  `,
            }]
    }], null, null); })();
export class CardFooterElement {
}
CardFooterElement.ɵfac = function CardFooterElement_Factory(t) { return new (t || CardFooterElement)(); };
CardFooterElement.ɵdir = i0.ɵɵdefineDirective({ type: CardFooterElement, selectors: [["novo-card-footer"], ["", "novo-card-footer", ""], ["", "novoCardFooter", ""]], hostAttrs: [1, "novo-card-footer"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardFooterElement, [{
        type: Directive,
        args: [{
                selector: 'novo-card-footer, [novo-card-footer], [novoCardFooter]',
                host: { class: 'novo-card-footer' },
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
CardElement.ɵcmp = i0.ɵɵdefineComponent({ type: CardElement, selectors: [["novo-card"]], inputs: { padding: "padding", config: "config", title: "title", message: "message", messageIcon: "messageIcon", icon: "icon", iconTooltip: "iconTooltip", refresh: "refresh", close: "close", move: "move", loading: "loading" }, outputs: { onClose: "onClose", onRefresh: "onRefresh" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 7, vars: 11, consts: [[1, "novo-card", 3, "ngClass"], ["class", "card-loading-container", 4, "ngIf"], [4, "ngIf"], ["class", "card-message", 4, "ngIf"], [1, "card-loading-container"], ["theme", "line"], [1, "title"], ["tooltipPosition", "bottom-right", 3, "tooltip"], ["class", "bhi-move", 4, "ngIf"], ["tooltipPosition", "right", 3, "tooltip"], [3, "ngClass", 4, "ngIf"], [1, "actions"], ["theme", "icon", "icon", "refresh", "tooltipPosition", "bottom-left", 3, "tooltip", "click", 4, "ngIf"], ["theme", "icon", "icon", "close-o", "tooltipPosition", "bottom-left", 3, "tooltip", "click", 4, "ngIf"], [1, "bhi-move"], [3, "ngClass"], ["theme", "icon", "icon", "refresh", "tooltipPosition", "bottom-left", 3, "tooltip", "click"], ["theme", "icon", "icon", "close-o", "tooltipPosition", "bottom-left", 3, "tooltip", "click"], [1, "card-message"], [3, "innerHtml"]], template: function CardElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CardElement_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵtemplate(2, CardElement_header_2_Template, 12, 9, "header", 2);
        i0.ɵɵelementStart(3, "main");
        i0.ɵɵtemplate(4, CardElement_ng_content_4_Template, 1, 0, "ng-content", 2);
        i0.ɵɵtemplate(5, CardElement_p_5_Template, 3, 3, "p", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CardElement_ng_content_6_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("loading", ctx.loading || ctx.config.loading);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c4, !ctx.padding));
        i0.ɵɵattribute("data-automation-id", ctx.cardAutomationId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading || ctx.config.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title || ctx.config.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !(ctx.loading || ctx.config.loading) && !(ctx.message || ctx.config.message));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.loading || ctx.config.loading) && (ctx.message || ctx.config.message));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.loading || ctx.config.loading) && !(ctx.message || ctx.config.message));
    } }, directives: [i2.NgClass, i2.NgIf, i3.NovoLoadingElement, i4.TooltipDirective, i5.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardElement, [{
        type: Component,
        args: [{
                selector: 'novo-card',
                template: `
    <div
      class="novo-card"
      [attr.data-automation-id]="cardAutomationId"
      [ngClass]="{ 'no-padding': !padding }"
      [class.loading]="loading || config.loading"
    >
      <!--Loading-->
      <div class="card-loading-container" *ngIf="loading || config.loading">
        <novo-loading theme="line" [attr.data-automation-id]="cardAutomationId + '-loading'"></novo-loading>
      </div>
      <!--Card Header-->
      <header *ngIf="title || config.title">
        <div class="title">
          <!--Grabber Icon-->
          <span tooltip="{{ labels.move }}" tooltipPosition="bottom-right"
            ><i *ngIf="move || config.move" class="bhi-move" [attr.data-automation-id]="cardAutomationId + '-move'"></i
          ></span>
          <!--Card Title-->
          <h3 [attr.data-automation-id]="cardAutomationId + '-title'">
            <span [tooltip]="iconTooltip" tooltipPosition="right"><i *ngIf="icon" [ngClass]="iconClass"></i></span>
            {{ title || config.title }}
          </h3>
        </div>
        <!--Card Actions-->
        <div class="actions" [attr.data-automation-id]="cardAutomationId + '-actions'">
          <ng-content select="novo-card-actions"></ng-content>
          <button
            theme="icon"
            icon="refresh"
            (click)="toggleRefresh()"
            *ngIf="refresh || config.refresh"
            [attr.data-automation-id]="cardAutomationId + '-refresh'"
            tooltip="{{ labels.refresh }}"
            tooltipPosition="bottom-left"
          ></button>
          <button
            theme="icon"
            icon="close-o"
            (click)="toggleClose()"
            *ngIf="close || config.close"
            [attr.data-automation-id]="cardAutomationId + '-close'"
            tooltip="{{ labels.close }}"
            tooltipPosition="bottom-left"
          ></button>
        </div>
      </header>
      <!--Card Main-->
      <main>
        <!--Content (transcluded)-->
        <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)"></ng-content>
        <!--Error/Empty Message-->
        <p
          class="card-message"
          *ngIf="!(loading || config.loading) && (message || config.message)"
          [attr.data-automation-id]="cardAutomationId + '-message'"
        >
          <i *ngIf="messageIconClass" [ngClass]="messageIconClass"></i> <span [innerHtml]="message || config.message"></span>
        </p>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhcmQvQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwSCxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7O0lBb0QvRCw4QkFDRTtJQUFBLGtDQUFvRztJQUN0RyxpQkFBTTs7O0lBRHVCLGVBQXlEO0lBQXpELDBFQUF5RDs7O0lBTy9FLHdCQUNGOzs7SUFEa0QsdUVBQXNEOzs7SUFJakQsd0JBQTBDOzs7SUFBMUIsMENBQXFCOzs7O0lBTzdGLGtDQVFVO0lBTFIsaU1BQXlCO0lBSzFCLGlCQUFTOzs7SUFGUiwwREFBOEI7SUFEOUIsMEVBQXlEOzs7O0lBSTNELGtDQVFVO0lBTFIsaU1BQXVCO0lBS3hCLGlCQUFTOzs7SUFGUix3REFBNEI7SUFENUIsd0VBQXVEOzs7SUE3QjdELDhCQUNFO0lBQUEsOEJBQ0U7SUFDQSwrQkFDRztJQUFBLGlFQUF1RztJQUN6RyxpQkFBTztJQUVSLDBCQUNFO0lBQUEsK0JBQXNEO0lBQUEsa0VBQXNDO0lBQUksaUJBQU87SUFDdkcsWUFDRjtJQUFBLGlCQUFLO0lBQ1AsaUJBQU07SUFFTiwrQkFDRTtJQUFBLGtCQUF1QztJQUN2Qyw4RUFRQztJQUNELDhFQVFDO0lBQ0gsaUJBQU07SUFDUixpQkFBUzs7O0lBL0JDLGVBQTJCO0lBQTNCLHVEQUEyQjtJQUMzQixlQUEyQjtJQUEzQix3REFBMkI7SUFHN0IsZUFBdUQ7SUFBdkQsd0VBQXVEO0lBQ25ELGVBQXVCO0lBQXZCLDRDQUF1QjtJQUE0QixlQUFZO0lBQVosa0NBQVk7SUFDckUsZUFDRjtJQURFLG9FQUNGO0lBR21CLGVBQXlEO0lBQXpELDBFQUF5RDtJQU0xRSxlQUFpQztJQUFqQyw4REFBaUM7SUFTakMsZUFBNkI7SUFBN0IsMERBQTZCOzs7SUFVakMsZ0dBQWlGOzs7SUFPL0Usd0JBQTZEOzs7SUFBakMsa0RBQTRCOzs7SUFMMUQsNkJBS0U7SUFBQSw2REFBeUQ7SUFBSywyQkFBcUQ7SUFDckgsaUJBQUk7OztJQUhGLDBFQUF5RDtJQUV0RCxlQUF3QjtJQUF4Qiw4Q0FBd0I7SUFBeUMsZUFBdUM7SUFBdkMsc0ZBQXVDOzs7SUFJL0csZ0dBQWlHOzs7OztBQW5HdkcsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjt1REFBbEIsa0JBQWtCOztRQUZsQixrQkFBWTs7a0RBRVosa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztBQUdEOztHQUVHO0FBS0gsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjt1REFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyREFBMkQ7Z0JBQ3JFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTthQUNyQzs7QUFHRDs7R0FFRztBQWVILE1BQU0sT0FBTyxpQkFBaUI7O2tGQUFqQixpQkFBaUI7c0RBQWpCLGlCQUFpQjs7UUFWMUIsa0JBQTJEO1FBQzNELDhCQUNFO1FBQUEscUJBQW1GO1FBQ3JGLGlCQUFNO1FBQ04scUJBQVk7UUFDWiw4QkFDRTtRQUFBLHFCQUFpQztRQUNuQyxpQkFBTTs7a0RBR0csaUJBQWlCO2NBZDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0RBQXdEO2dCQUNsRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRjs7QUFPRCxNQUFNLE9BQU8saUJBQWlCOztrRkFBakIsaUJBQWlCO3NEQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUo3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdEQUF3RDtnQkFDbEUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFO2FBQ3BDOztBQXNFRCxNQUFNLE9BQU8sV0FBVztJQWtDdEIsWUFBWSxNQUF3QjtRQWhDcEMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBcUJqQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBUWhELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXVCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUVwSCxNQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RELE1BQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxPQUFPLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOztzRUFsRVUsV0FBVztnREFBWCxXQUFXOztRQWhFcEIsOEJBTUU7UUFDQSw0REFDRTtRQUdGLG1FQUNFO1FBbUNGLDRCQUNFO1FBQ0EsMEVBQWlGO1FBRWpGLHdEQUtFO1FBRUosaUJBQU87UUFFUCwwRUFBaUc7UUFDbkcsaUJBQU07O1FBekRKLDREQUEyQztRQUQzQyxrRUFBc0M7UUFEdEMsMERBQTRDO1FBS1IsZUFBaUM7UUFBakMsd0RBQWlDO1FBSTdELGVBQTZCO1FBQTdCLG9EQUE2QjtRQXNDdkIsZUFBb0U7UUFBcEUsbUdBQW9FO1FBSTlFLGVBQW1FO1FBQW5FLGtHQUFtRTtRQU8zRCxlQUFvRTtRQUFwRSxtR0FBb0U7O2tEQUl6RSxXQUFXO2NBbkV2QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0RUO2FBQ0Y7bUVBR0MsT0FBTztrQkFETixLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBSU4sT0FBTztrQkFETixNQUFNO1lBR1AsU0FBUztrQkFEUixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXJkLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQWN0aW9uc0VsZW1lbnQge31cblxuLyoqXG4gKiBDb250ZW50IG9mIGEgY2FyZCwgbmVlZGVkIGFzIGl0J3MgdXNlZCBhcyBhIHNlbGVjdG9yIGluIHRoZSBBUEkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FyZC1jb250ZW50LCBbbm92by1jYXJkLWNvbnRlbnRdLCBbbm92b0NhcmRDb250ZW50XScsXG4gIGhvc3Q6IHsgY2xhc3M6ICdub3ZvLWNhcmQtY29udGVudCcgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbnRlbnRFbGVtZW50IHt9XG5cbi8qKlxuICogQ29udGVudCBvZiBhIGNhcmQsIG5lZWRlZCBhcyBpdCdzIHVzZWQgYXMgYSBzZWxlY3RvciBpbiB0aGUgQVBJLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhcmQtaGVhZGVyLCBbbm92by1jYXJkLWhlYWRlcl0sIFtub3ZvQ2FyZEhlYWRlcl0nLFxuICBob3N0OiB7IGNsYXNzOiAnbm92by1jYXJkLWhlYWRlcicgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWF2YXRhciwgW25vdm8tYXZhdGFyXSwgbm92by1pY29uXCI+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhcmQtaGVhZGVyLXRleHRcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGl0bGUsIFtub3ZvLXRpdGxlXSwgbm92by10ZXh0LCBub3ZvLWxhYmVsLCBub3ZvLWNhcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhcmQtaGVhZGVyLWFjdGlvbnNcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tYWN0aW9uXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGVhZGVyRWxlbWVudCB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhcmQtZm9vdGVyLCBbbm92by1jYXJkLWZvb3Rlcl0sIFtub3ZvQ2FyZEZvb3Rlcl0nLFxuICBob3N0OiB7IGNsYXNzOiAnbm92by1jYXJkLWZvb3RlcicgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEZvb3RlckVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5vdm8tY2FyZFwiXG4gICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZFwiXG4gICAgICBbbmdDbGFzc109XCJ7ICduby1wYWRkaW5nJzogIXBhZGRpbmcgfVwiXG4gICAgICBbY2xhc3MubG9hZGluZ109XCJsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nXCJcbiAgICA+XG4gICAgICA8IS0tTG9hZGluZy0tPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbG9hZGluZy1jb250YWluZXJcIiAqbmdJZj1cImxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmdcIj5cbiAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbG9hZGluZydcIj48L25vdm8tbG9hZGluZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLUNhcmQgSGVhZGVyLS0+XG4gICAgICA8aGVhZGVyICpuZ0lmPVwidGl0bGUgfHwgY29uZmlnLnRpdGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgIDwhLS1HcmFiYmVyIEljb24tLT5cbiAgICAgICAgICA8c3BhbiB0b29sdGlwPVwie3sgbGFiZWxzLm1vdmUgfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxuICAgICAgICAgICAgPjxpICpuZ0lmPVwibW92ZSB8fCBjb25maWcubW92ZVwiIGNsYXNzPVwiYmhpLW1vdmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbW92ZSdcIj48L2lcbiAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgIDwhLS1DYXJkIFRpdGxlLS0+XG4gICAgICAgICAgPGgzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy10aXRsZSdcIj5cbiAgICAgICAgICAgIDxzcGFuIFt0b29sdGlwXT1cImljb25Ub29sdGlwXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj48aSAqbmdJZj1cImljb25cIiBbbmdDbGFzc109XCJpY29uQ2xhc3NcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAge3sgdGl0bGUgfHwgY29uZmlnLnRpdGxlIH19XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS1DYXJkIEFjdGlvbnMtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctYWN0aW9ucydcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWNhcmQtYWN0aW9uc1wiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgaWNvbj1cInJlZnJlc2hcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVJlZnJlc2goKVwiXG4gICAgICAgICAgICAqbmdJZj1cInJlZnJlc2ggfHwgY29uZmlnLnJlZnJlc2hcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLXJlZnJlc2gnXCJcbiAgICAgICAgICAgIHRvb2x0aXA9XCJ7eyBsYWJlbHMucmVmcmVzaCB9fVwiXG4gICAgICAgICAgICB0b29sdGlwUG9zaXRpb249XCJib3R0b20tbGVmdFwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICBpY29uPVwiY2xvc2Utb1wiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ2xvc2UoKVwiXG4gICAgICAgICAgICAqbmdJZj1cImNsb3NlIHx8IGNvbmZpZy5jbG9zZVwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctY2xvc2UnXCJcbiAgICAgICAgICAgIHRvb2x0aXA9XCJ7eyBsYWJlbHMuY2xvc2UgfX1cIlxuICAgICAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIlxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDwhLS1DYXJkIE1haW4tLT5cbiAgICAgIDxtYWluPlxuICAgICAgICA8IS0tQ29udGVudCAodHJhbnNjbHVkZWQpLS0+XG4gICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAhKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8IS0tRXJyb3IvRW1wdHkgTWVzc2FnZS0tPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzPVwiY2FyZC1tZXNzYWdlXCJcbiAgICAgICAgICAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbWVzc2FnZSdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGkgKm5nSWY9XCJtZXNzYWdlSWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwibWVzc2FnZUljb25DbGFzc1wiPjwvaT4gPHNwYW4gW2lubmVySHRtbF09XCJtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG4gICAgICA8IS0tQ2FyZCBGb290ZXItLT5cbiAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAhKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCIgc2VsZWN0PVwiZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcGFkZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWVzc2FnZUljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uVG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjbG9zZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbW92ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9hZGluZzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNhcmRBdXRvbWF0aW9uSWQ6IHN0cmluZztcbiAgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlO1xuICBpY29uQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIG1lc3NhZ2VJY29uQ2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG4gICAgdGhpcy5jYXJkQXV0b21hdGlvbklkID0gYCR7KHRoaXMudGl0bGUgfHwgdGhpcy5jb25maWcudGl0bGUgfHwgJ25vLXRpdGxlJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJy0nKX0tY2FyZGA7XG5cbiAgICBjb25zdCBuZXdJY29uOiBzdHJpbmcgPSB0aGlzLmljb24gfHwgdGhpcy5jb25maWcuaWNvbjtcbiAgICBjb25zdCBuZXdNZXNzYWdlSWNvbjogc3RyaW5nID0gdGhpcy5tZXNzYWdlSWNvbiB8fCB0aGlzLmNvbmZpZy5tZXNzYWdlSWNvbjtcbiAgICB0aGlzLmljb25DbGFzcyA9IG5ld0ljb24gPyBgYmhpLSR7bmV3SWNvbn1gIDogbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VJY29uQ2xhc3MgPSBuZXdNZXNzYWdlSWNvbiA/IGBiaGktJHtuZXdNZXNzYWdlSWNvbn1gIDogbnVsbDtcbiAgfVxuXG4gIHRvZ2dsZUNsb3NlKCkge1xuICAgIGlmICghdGhpcy5jb25maWcub25DbG9zZSkge1xuICAgICAgdGhpcy5vbkNsb3NlLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcub25DbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVJlZnJlc2goKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vblJlZnJlc2gpIHtcbiAgICAgIHRoaXMub25SZWZyZXNoLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcub25SZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iXX0=