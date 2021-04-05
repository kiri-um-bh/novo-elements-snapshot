// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Deferred } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "../button/Button";
function NovoToastElement_h5_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function NovoToastElement_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("message-only", !ctx_r1.title);
    i0.ɵɵproperty("innerHtml", ctx_r1._message, i0.ɵɵsanitizeHtml);
} }
function NovoToastElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "input", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r2.link);
} }
function NovoToastElement_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵlistener("click", function NovoToastElement_div_8_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.actionHandler($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.action);
} }
function NovoToastElement_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function NovoToastElement_div_9_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.close($event); });
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class NovoToastElement {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.theme = 'danger';
        this.icon = 'caution';
        this.hasDialogue = false;
        this.isCloseable = false;
        this.closed = new EventEmitter();
        this.show = false;
        this.animate = false;
        this.parent = null;
        this.launched = false;
        this.onActionPromise = Deferred();
    }
    set message(m) {
        this._message = this.sanitizer.bypassSecurityTrustHtml(m);
    }
    ngOnInit() {
        if (!this.launched) {
            // clear position and time
            this.position = null;
            this.time = null;
            // set icon and styling
            this.iconClass = `bhi-${this.icon}`;
            this.alertTheme = `${this.theme} toast-container embedded`;
            if (this.hasDialogue) {
                this.alertTheme += ' dialogue';
            }
        }
    }
    ngOnChanges(changes) {
        // set icon and styling
        this.iconClass = `bhi-${this.icon}`;
        this.alertTheme = `${this.theme} toast-container embedded`;
        if (this.hasDialogue) {
            this.alertTheme += ' dialogue';
        }
    }
    clickHandler(event) {
        if (!this.isCloseable) {
            if (event) {
                event.stopPropagation();
                event.preventDefault();
            }
            if (this.parent) {
                this.parent.hide(this);
            }
            else {
                this.closed.emit({ closed: true });
            }
        }
    }
    close(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (this.parent) {
            this.parent.hide(this);
        }
        else {
            this.closed.emit({ closed: true });
        }
    }
    actionHandler(event) {
        this.onActionPromise.resolve(event);
    }
    onAction(fn) {
        return this.onActionPromise.then(fn);
    }
}
NovoToastElement.ɵfac = function NovoToastElement_Factory(t) { return new (t || NovoToastElement)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
NovoToastElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoToastElement, selectors: [["novo-toast"]], hostVars: 8, hostBindings: function NovoToastElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoToastElement_click_HostBindingHandler($event) { return !ctx.isCloseable && ctx.clickHandler($event); });
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.alertTheme);
        i0.ɵɵclassProp("show", ctx.show)("animate", ctx.animate)("embedded", ctx.embedded);
    } }, inputs: { theme: "theme", icon: "icon", title: "title", action: "action", hasDialogue: "hasDialogue", link: "link", isCloseable: "isCloseable", message: "message" }, outputs: { closed: "closed" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 10, vars: 6, consts: [[1, "toast-icon"], [3, "ngClass"], [1, "toast-content"], [4, "ngIf"], [3, "message-only", "innerHtml", 4, "ngIf"], ["class", "link-generated", 4, "ngIf"], [1, "dialogue"], ["class", "action", 4, "ngIf"], ["class", "close-icon", 3, "click", 4, "ngIf"], [3, "innerHtml"], [1, "link-generated"], ["type", "text", "onfocus", "this.select();", 3, "value"], [1, "action"], ["theme", "dialogue", "color", "white", 3, "click"], [1, "close-icon", 3, "click"], [1, "bhi-times"]], template: function NovoToastElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, NovoToastElement_h5_3_Template, 2, 1, "h5", 3);
        i0.ɵɵtemplate(4, NovoToastElement_p_4_Template, 1, 3, "p", 4);
        i0.ɵɵtemplate(5, NovoToastElement_div_5_Template, 2, 1, "div", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵprojection(7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, NovoToastElement_div_8_Template, 3, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, NovoToastElement_div_9_Template, 2, 0, "div", 8);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.iconClass);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.link);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.action);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isCloseable);
    } }, directives: [i2.NgClass, i2.NgIf, i3.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoToastElement, [{
        type: Component,
        args: [{
                selector: 'novo-toast',
                host: {
                    '[class]': 'alertTheme',
                    '[class.show]': 'show',
                    '[class.animate]': 'animate',
                    '[class.embedded]': 'embedded',
                    '(click)': '!isCloseable && clickHandler($event)',
                },
                template: `
    <div class="toast-icon">
      <i [ngClass]="iconClass"></i>
    </div>
    <div class="toast-content">
      <h5 *ngIf="title">{{ title }}</h5>
      <p *ngIf="_message" [class.message-only]="!title" [innerHtml]="_message"></p>
      <div *ngIf="link" class="link-generated">
        <input type="text" [value]="link" onfocus="this.select();" />
      </div>
      <div class="dialogue">
        <ng-content></ng-content>
      </div>
      <div *ngIf="action" class="action">
        <button theme="dialogue" color="white" (click)="actionHandler($event)">{{ action }}</button>
      </div>
    </div>
    <div class="close-icon" *ngIf="isCloseable" (click)="close($event)">
      <i class="bhi-times"></i>
    </div>
  `,
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { theme: [{
            type: Input
        }], icon: [{
            type: Input
        }], title: [{
            type: Input
        }], action: [{
            type: Input
        }], hasDialogue: [{
            type: Input
        }], link: [{
            type: Input
        }], isCloseable: [{
            type: Input
        }], message: [{
            type: Input
        }], closed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90b2FzdC9Ub2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFtQixNQUFNLGFBQWEsQ0FBQzs7Ozs7O0lBZ0JsRCwwQkFBa0I7SUFBQSxZQUFXO0lBQUEsaUJBQUs7OztJQUFoQixlQUFXO0lBQVgsa0NBQVc7OztJQUM3Qix1QkFBNkU7OztJQUF6RCw2Q0FBNkI7SUFBQyw4REFBc0I7OztJQUN4RSwrQkFDRTtJQUFBLDRCQUNGO0lBQUEsaUJBQU07OztJQURlLGVBQWM7SUFBZCxtQ0FBYzs7OztJQUtuQywrQkFDRTtJQUFBLGtDQUF1RTtJQUFoQyxtTUFBK0I7SUFBQyxZQUFZO0lBQUEsaUJBQVM7SUFDOUYsaUJBQU07OztJQURtRSxlQUFZO0lBQVosbUNBQVk7Ozs7SUFHdkYsK0JBQ0U7SUFEMEMsd0xBQXVCO0lBQ2pFLHdCQUF5QjtJQUMzQixpQkFBTTs7O0FBR1YsTUFBTSxPQUFPLGdCQUFnQjtJQWtDM0IsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQWhDM0MsVUFBSyxHQUFXLFFBQVEsQ0FBQztRQUV6QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBTXpCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBSTdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBTTdCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcvQyxTQUFJLEdBQVksS0FBSyxDQUFDO1FB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cUI7UUFBckIsdUNBQXFCO1FBR3BCLGVBQWE7UUFBYixnQ0FBYTtRQUNkLGVBQWdCO1FBQWhCLG1DQUFnQjtRQUNkLGVBQVk7UUFBWiwrQkFBWTtRQU1aLGVBQWM7UUFBZCxpQ0FBYztRQUlHLGVBQW1CO1FBQW5CLHNDQUFtQjs7a0RBS2xDLGdCQUFnQjtjQS9CNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLGNBQWMsRUFBRSxNQUFNO29CQUN0QixpQkFBaUIsRUFBRSxTQUFTO29CQUM1QixrQkFBa0IsRUFBRSxVQUFVO29CQUM5QixTQUFTLEVBQUUsc0NBQXNDO2lCQUNsRDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO2FBQ0Y7K0RBR0MsS0FBSztrQkFESixLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR0YsT0FBTztrQkFEVixLQUFLO1lBS04sTUFBTTtrQkFETCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERlZmVycmVkLCBEZWZlcnJlZFByb21pc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdG9hc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnYWxlcnRUaGVtZScsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICdzaG93JyxcbiAgICAnW2NsYXNzLmFuaW1hdGVdJzogJ2FuaW1hdGUnLFxuICAgICdbY2xhc3MuZW1iZWRkZWRdJzogJ2VtYmVkZGVkJyxcbiAgICAnKGNsaWNrKSc6ICchaXNDbG9zZWFibGUgJiYgY2xpY2tIYW5kbGVyKCRldmVudCknLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1pY29uXCI+XG4gICAgICA8aSBbbmdDbGFzc109XCJpY29uQ2xhc3NcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRvYXN0LWNvbnRlbnRcIj5cbiAgICAgIDxoNSAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2g1PlxuICAgICAgPHAgKm5nSWY9XCJfbWVzc2FnZVwiIFtjbGFzcy5tZXNzYWdlLW9ubHldPVwiIXRpdGxlXCIgW2lubmVySHRtbF09XCJfbWVzc2FnZVwiPjwvcD5cbiAgICAgIDxkaXYgKm5nSWY9XCJsaW5rXCIgY2xhc3M9XCJsaW5rLWdlbmVyYXRlZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibGlua1wiIG9uZm9jdXM9XCJ0aGlzLnNlbGVjdCgpO1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJhY3Rpb25cIiBjbGFzcz1cImFjdGlvblwiPlxuICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIndoaXRlXCIgKGNsaWNrKT1cImFjdGlvbkhhbmRsZXIoJGV2ZW50KVwiPnt7IGFjdGlvbiB9fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNsb3NlLWljb25cIiAqbmdJZj1cImlzQ2xvc2VhYmxlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj5cbiAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVG9hc3RFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJ2Rhbmdlcic7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZyA9ICdjYXV0aW9uJztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhhc0RpYWxvZ3VlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGxpbms6IHN0cmluZztcbiAgQElucHV0KClcbiAgaXNDbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IG1lc3NhZ2UobTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKG0pO1xuICB9XG4gIEBPdXRwdXQoKVxuICBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9tZXNzYWdlOiBTYWZlSHRtbDtcbiAgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBhbmltYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHBhcmVudDogYW55ID0gbnVsbDtcbiAgbGF1bmNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9zaXRpb246IGFueTtcbiAgdGltZTogYW55O1xuICBpY29uQ2xhc3M6IHN0cmluZztcbiAgYWxlcnRUaGVtZTogc3RyaW5nO1xuICBlbWJlZGRlZDogYW55O1xuICBvbkFjdGlvblByb21pc2U6IERlZmVycmVkUHJvbWlzZSA9IERlZmVycmVkKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgIC8vIGNsZWFyIHBvc2l0aW9uIGFuZCB0aW1lXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMudGltZSA9IG51bGw7XG5cbiAgICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgICBpZiAodGhpcy5oYXNEaWFsb2d1ZSkge1xuICAgICAgICB0aGlzLmFsZXJ0VGhlbWUgKz0gJyBkaWFsb2d1ZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBzZXQgaWNvbiBhbmQgc3R5bGluZ1xuICAgIHRoaXMuaWNvbkNsYXNzID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgaWYgKHRoaXMuaGFzRGlhbG9ndWUpIHtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSArPSAnIGRpYWxvZ3VlJztcbiAgICB9XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNDbG9zZWFibGUpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCh7IGNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LmhpZGUodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgYWN0aW9uSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMub25BY3Rpb25Qcm9taXNlLnJlc29sdmUoZXZlbnQpO1xuICB9XG5cbiAgb25BY3Rpb24oZm46ICgpID0+IHZvaWQpIHtcbiAgICByZXR1cm4gdGhpcy5vbkFjdGlvblByb21pc2UudGhlbihmbik7XG4gIH1cbn1cbiJdfQ==