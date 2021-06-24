// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "../button/Button";
function NovoTipWellElement_div_0_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("bhi-", ctx_r1.icon, "");
    i0.ɵɵattribute("data-automation-id", "novo-tip-well-icon-" + ctx_r1.name);
} }
function NovoTipWellElement_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", "novo-tip-well-tip-" + ctx_r2.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.tip);
} }
function NovoTipWellElement_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 4);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r3.tipWithStyles, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("data-automation-id", "novo-tip-well-tip-" + ctx_r3.name);
} }
function NovoTipWellElement_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function NovoTipWellElement_div_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.hideTip(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", "novo-tip-well-button-" + ctx_r4.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.buttonText, " ");
} }
function NovoTipWellElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, NovoTipWellElement_div_0_i_2_Template, 1, 4, "i", 1);
    i0.ɵɵtemplate(3, NovoTipWellElement_div_0_p_3_Template, 2, 2, "p", 0);
    i0.ɵɵtemplate(4, NovoTipWellElement_div_0_p_4_Template, 1, 2, "p", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NovoTipWellElement_div_0_button_5_Template, 2, 2, "button", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.sanitize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.sanitize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.button);
} }
export class NovoTipWellElement {
    constructor(labels, sanitizer) {
        this.labels = labels;
        this.sanitizer = sanitizer;
        this.button = true;
        this.sanitize = true;
        this.confirmed = new EventEmitter();
        this.isActive = true;
        this.isActive = true;
        // Check if localStorage is enabled
        this.isLocalStorageEnabled = (() => {
            let isEnabled = false;
            if (typeof localStorage === 'object') {
                try {
                    localStorage.setItem('lsTest', '1');
                    localStorage.removeItem('lsTest');
                    isEnabled = true;
                }
                catch (e) {
                    console.warn('This web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
                }
            }
            return isEnabled;
        })();
    }
    // Trusts the HTML in order to show CSS styles
    get tipWithStyles() {
        if (!this._tipWithStyles || this._lastTipStyled !== this.tip) {
            this._tipWithStyles = this.sanitizer.bypassSecurityTrustHtml(this.tip);
            this._lastTipStyled = this.tip;
        }
        return this._tipWithStyles;
    }
    ngOnInit() {
        this.tip = this.tip || '';
        this.buttonText = this.buttonText || this.labels.okGotIt;
        this.button = typeof this.button === 'string' ? this.button === 'true' : this.button;
        this.icon = this.icon || null;
        // Set a (semi) unique name for the tip-well
        this.name = this.name || Math.round(Math.random() * 100);
        this.localStorageKey = `novo-tw_${this.name}`;
        // Check localStorage for state
        if (this.isLocalStorageEnabled) {
            const storedValue = JSON.parse(localStorage.getItem(this.localStorageKey));
            this.isActive = storedValue !== false;
        }
    }
    hideTip() {
        if (this.isLocalStorageEnabled) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(false));
        }
        this.isActive = false;
        this.confirmed.emit();
    }
}
NovoTipWellElement.ɵfac = function NovoTipWellElement_Factory(t) { return new (t || NovoTipWellElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
NovoTipWellElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTipWellElement, selectors: [["novo-tip-well"]], hostVars: 2, hostBindings: function NovoTipWellElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.isActive);
    } }, inputs: { name: "name", tip: "tip", buttonText: "buttonText", button: "button", icon: "icon", sanitize: "sanitize" }, outputs: { confirmed: "confirmed" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["theme", "dialogue", 3, "click", 4, "ngIf"], [3, "innerHTML"], ["theme", "dialogue", 3, "click"]], template: function NovoTipWellElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoTipWellElement_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isActive);
    } }, directives: [i3.NgIf, i4.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTipWellElement, [{
        type: Component,
        args: [{
                selector: 'novo-tip-well',
                template: `
    <div *ngIf="isActive">
      <div>
        <i class="bhi-{{ icon }}" *ngIf="icon" [attr.data-automation-id]="'novo-tip-well-icon-' + name"></i>
        <p *ngIf="sanitize" [attr.data-automation-id]="'novo-tip-well-tip-' + name">{{ tip }}</p>
        <p *ngIf="!sanitize" [attr.data-automation-id]="'novo-tip-well-tip-' + name" [innerHTML]="tipWithStyles"></p>
      </div>
      <button theme="dialogue" (click)="hideTip()" *ngIf="button" [attr.data-automation-id]="'novo-tip-well-button-' + name">
        {{ buttonText }}
      </button>
    </div>
  `,
                host: {
                    '[class.active]': 'isActive',
                },
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i2.DomSanitizer }]; }, { name: [{
            type: Input
        }], tip: [{
            type: Input
        }], buttonText: [{
            type: Input
        }], button: [{
            type: Input
        }], icon: [{
            type: Input
        }], sanitize: [{
            type: Input
        }], confirmed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aXAtd2VsbC9UaXBXZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7SUFPM0Qsb0JBQW9HOzs7SUFBakcsa0RBQXNCO0lBQWMseUVBQXdEOzs7SUFDL0YseUJBQTRFO0lBQUEsWUFBUztJQUFBLGlCQUFJOzs7SUFBckUsd0VBQXVEO0lBQUMsZUFBUztJQUFULGdDQUFTOzs7SUFDckYsdUJBQTZHOzs7SUFBaEMsbUVBQTJCO0lBQW5GLHdFQUF1RDs7OztJQUU5RSxpQ0FDRTtJQUR1Qiw2TEFBbUI7SUFDMUMsWUFDRjtJQUFBLGlCQUFTOzs7SUFGbUQsMkVBQTBEO0lBQ3BILGVBQ0Y7SUFERSxrREFDRjs7O0lBUkYsMkJBQ0U7SUFBQSwyQkFDRTtJQUFBLHFFQUFnRztJQUNoRyxxRUFBNEU7SUFDNUUscUVBQXlHO0lBQzNHLGlCQUFNO0lBQ04sK0VBQ0U7SUFFSixpQkFBTTs7O0lBUHdCLGVBQVk7SUFBWixrQ0FBWTtJQUNuQyxlQUFnQjtJQUFoQixzQ0FBZ0I7SUFDaEIsZUFBaUI7SUFBakIsdUNBQWlCO0lBRXVCLGVBQWM7SUFBZCxvQ0FBYzs7QUFTakUsTUFBTSxPQUFPLGtCQUFrQjtJQXVCN0IsWUFBb0IsTUFBd0IsRUFBVSxTQUF1QjtRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGNBQVMsR0FB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OztRQURHLG1DQUFnQjs7a0RBZVosa0JBQWtCO2NBbEI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZ0JBQWdCLEVBQUUsVUFBVTtpQkFDN0I7YUFDRjs4RkFHQyxJQUFJO2tCQURILEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixVQUFVO2tCQURULEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixTQUFTO2tCQURSLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGlwLXdlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJpc0FjdGl2ZVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGkgY2xhc3M9XCJiaGkte3sgaWNvbiB9fVwiICpuZ0lmPVwiaWNvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC1pY29uLScgKyBuYW1lXCI+PC9pPlxuICAgICAgICA8cCAqbmdJZj1cInNhbml0aXplXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLXRpcC0nICsgbmFtZVwiPnt7IHRpcCB9fTwvcD5cbiAgICAgICAgPHAgKm5nSWY9XCIhc2FuaXRpemVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtdGlwLScgKyBuYW1lXCIgW2lubmVySFRNTF09XCJ0aXBXaXRoU3R5bGVzXCI+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiAoY2xpY2spPVwiaGlkZVRpcCgpXCIgKm5nSWY9XCJidXR0b25cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtYnV0dG9uLScgKyBuYW1lXCI+XG4gICAgICAgIHt7IGJ1dHRvblRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2lzQWN0aXZlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpcFdlbGxFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aXA6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNhbml0aXplOiBib29sZWFuID0gdHJ1ZTtcbiAgQE91dHB1dCgpXG4gIGNvbmZpcm1lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIGlzTG9jYWxTdG9yYWdlRW5hYmxlZDogYW55O1xuICBsb2NhbFN0b3JhZ2VLZXk6IHN0cmluZztcblxuICBwcml2YXRlIF90aXBXaXRoU3R5bGVzOiBTYWZlSHRtbDtcbiAgcHJpdmF0ZSBfbGFzdFRpcFN0eWxlZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIGlzIGVuYWJsZWRcbiAgICB0aGlzLmlzTG9jYWxTdG9yYWdlRW5hYmxlZCA9ICgoKSA9PiB7XG4gICAgICBsZXQgaXNFbmFibGVkID0gZmFsc2U7XG4gICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbHNUZXN0JywgJzEnKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbHNUZXN0Jyk7XG4gICAgICAgICAgaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICdUaGlzIHdlYiBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgc3RvcmluZyBzZXR0aW5ncyBsb2NhbGx5LiBJbiBTYWZhcmksIHRoZSBtb3N0IGNvbW1vbiBjYXVzZSBvZiB0aGlzIGlzIHVzaW5nIFwiUHJpdmF0ZSBCcm93c2luZyBNb2RlXCIuIFNvbWUgc2V0dGluZ3MgbWF5IG5vdCBzYXZlIG9yIHNvbWUgZmVhdHVyZXMgbWF5IG5vdCB3b3JrIHByb3Blcmx5IGZvciB5b3UuJyxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNFbmFibGVkO1xuICAgIH0pKCk7XG4gIH1cblxuICAvLyBUcnVzdHMgdGhlIEhUTUwgaW4gb3JkZXIgdG8gc2hvdyBDU1Mgc3R5bGVzXG4gIGdldCB0aXBXaXRoU3R5bGVzKCk6IFNhZmVIdG1sIHtcbiAgICBpZiAoIXRoaXMuX3RpcFdpdGhTdHlsZXMgfHwgdGhpcy5fbGFzdFRpcFN0eWxlZCAhPT0gdGhpcy50aXApIHtcbiAgICAgIHRoaXMuX3RpcFdpdGhTdHlsZXMgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRpcCk7XG4gICAgICB0aGlzLl9sYXN0VGlwU3R5bGVkID0gdGhpcy50aXA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aXBXaXRoU3R5bGVzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAnJztcbiAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLmJ1dHRvblRleHQgfHwgdGhpcy5sYWJlbHMub2tHb3RJdDtcbiAgICB0aGlzLmJ1dHRvbiA9IHR5cGVvZiB0aGlzLmJ1dHRvbiA9PT0gJ3N0cmluZycgPyB0aGlzLmJ1dHRvbiA9PT0gJ3RydWUnIDogdGhpcy5idXR0b247XG4gICAgdGhpcy5pY29uID0gdGhpcy5pY29uIHx8IG51bGw7XG4gICAgLy8gU2V0IGEgKHNlbWkpIHVuaXF1ZSBuYW1lIGZvciB0aGUgdGlwLXdlbGxcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSA9IGBub3ZvLXR3XyR7dGhpcy5uYW1lfWA7XG4gICAgLy8gQ2hlY2sgbG9jYWxTdG9yYWdlIGZvciBzdGF0ZVxuICAgIGlmICh0aGlzLmlzTG9jYWxTdG9yYWdlRW5hYmxlZCkge1xuICAgICAgY29uc3Qgc3RvcmVkVmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KSk7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gc3RvcmVkVmFsdWUgIT09IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVUaXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKTtcbiAgICB9XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY29uZmlybWVkLmVtaXQoKTtcbiAgfVxufVxuIl19