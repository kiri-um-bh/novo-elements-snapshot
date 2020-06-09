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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aXAtd2VsbC9UaXBXZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7SUFPM0Qsb0JBQW9HOzs7SUFBakcsa0RBQXNCO0lBQWMseUVBQXdEOzs7SUFDL0YseUJBQTRFO0lBQUEsWUFBUztJQUFBLGlCQUFJOzs7SUFBckUsd0VBQXVEO0lBQUMsZUFBUztJQUFULGdDQUFTOzs7SUFDckYsdUJBQTZHOzs7SUFBaEMsbUVBQTJCO0lBQW5GLHdFQUF1RDs7OztJQUU5RSxpQ0FDRTtJQUR1Qiw2TEFBbUI7SUFDMUMsWUFDRjtJQUFBLGlCQUFTOzs7SUFGbUQsMkVBQTBEO0lBQ3BILGVBQ0Y7SUFERSxrREFDRjs7O0lBUkYsMkJBQ0U7SUFBQSwyQkFDRTtJQUFBLHFFQUFnRztJQUNoRyxxRUFBNEU7SUFDNUUscUVBQXlHO0lBQzNHLGlCQUFNO0lBQ04sK0VBQ0U7SUFFSixpQkFBTTs7O0lBUHdCLGVBQVk7SUFBWixrQ0FBWTtJQUNuQyxlQUFnQjtJQUFoQixzQ0FBZ0I7SUFDaEIsZUFBaUI7SUFBakIsdUNBQWlCO0lBRXVCLGVBQWM7SUFBZCxvQ0FBYzs7QUFTakUsTUFBTSxPQUFPLGtCQUFrQjtJQXVCN0IsWUFBb0IsTUFBd0IsRUFBVSxTQUF1QjtRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFmN0UsV0FBTSxHQUFZLElBQUksQ0FBQztRQUl2QixhQUFRLEdBQVks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USxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZ0JBQWdCLEVBQUUsVUFBVTtpQkFDN0I7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aXAtd2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cImlzQWN0aXZlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImJoaS17eyBpY29uIH19XCIgKm5nSWY9XCJpY29uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLWljb24tJyArIG5hbWVcIj48L2k+XG4gICAgICAgIDxwICpuZ0lmPVwic2FuaXRpemVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtdGlwLScgKyBuYW1lXCI+e3sgdGlwIH19PC9wPlxuICAgICAgICA8cCAqbmdJZj1cIiFzYW5pdGl6ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC10aXAtJyArIG5hbWVcIiBbaW5uZXJIVE1MXT1cInRpcFdpdGhTdHlsZXNcIj48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIChjbGljayk9XCJoaWRlVGlwKClcIiAqbmdJZj1cImJ1dHRvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC1idXR0b24tJyArIG5hbWVcIj5cbiAgICAgICAge3sgYnV0dG9uVGV4dCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnaXNBY3RpdmUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGlwV2VsbEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpcDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgc2FuaXRpemU6IGJvb2xlYW4gPSB0cnVlO1xuICBAT3V0cHV0KClcbiAgY29uZmlybWVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNMb2NhbFN0b3JhZ2VFbmFibGVkOiBhbnk7XG4gIGxvY2FsU3RvcmFnZUtleTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3RpcFdpdGhTdHlsZXM6IFNhZmVIdG1sO1xuICBwcml2YXRlIF9sYXN0VGlwU3R5bGVkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAvLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgZW5hYmxlZFxuICAgIHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkID0gKCgpID0+IHtcbiAgICAgIGxldCBpc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsc1Rlc3QnLCAnMScpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsc1Rlc3QnKTtcbiAgICAgICAgICBpc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBzdG9yaW5nIHNldHRpbmdzIGxvY2FsbHkuIEluIFNhZmFyaSwgdGhlIG1vc3QgY29tbW9uIGNhdXNlIG9mIHRoaXMgaXMgdXNpbmcgXCJQcml2YXRlIEJyb3dzaW5nIE1vZGVcIi4gU29tZSBzZXR0aW5ncyBtYXkgbm90IHNhdmUgb3Igc29tZSBmZWF0dXJlcyBtYXkgbm90IHdvcmsgcHJvcGVybHkgZm9yIHlvdS4nLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0VuYWJsZWQ7XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8vIFRydXN0cyB0aGUgSFRNTCBpbiBvcmRlciB0byBzaG93IENTUyBzdHlsZXNcbiAgZ2V0IHRpcFdpdGhTdHlsZXMoKTogU2FmZUh0bWwge1xuICAgIGlmICghdGhpcy5fdGlwV2l0aFN0eWxlcyB8fCB0aGlzLl9sYXN0VGlwU3R5bGVkICE9PSB0aGlzLnRpcCkge1xuICAgICAgdGhpcy5fdGlwV2l0aFN0eWxlcyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMudGlwKTtcbiAgICAgIHRoaXMuX2xhc3RUaXBTdHlsZWQgPSB0aGlzLnRpcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RpcFdpdGhTdHlsZXM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICcnO1xuICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMuYnV0dG9uVGV4dCB8fCB0aGlzLmxhYmVscy5va0dvdEl0O1xuICAgIHRoaXMuYnV0dG9uID0gdHlwZW9mIHRoaXMuYnV0dG9uID09PSAnc3RyaW5nJyA/IHRoaXMuYnV0dG9uID09PSAndHJ1ZScgOiB0aGlzLmJ1dHRvbjtcbiAgICB0aGlzLmljb24gPSB0aGlzLmljb24gfHwgbnVsbDtcbiAgICAvLyBTZXQgYSAoc2VtaSkgdW5pcXVlIG5hbWUgZm9yIHRoZSB0aXAtd2VsbFxuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5ID0gYG5vdm8tdHdfJHt0aGlzLm5hbWV9YDtcbiAgICAvLyBDaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkKSB7XG4gICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpKTtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBzdG9yZWRWYWx1ZSAhPT0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGlkZVRpcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2FsU3RvcmFnZUVuYWJsZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuICAgIH1cbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb25maXJtZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=