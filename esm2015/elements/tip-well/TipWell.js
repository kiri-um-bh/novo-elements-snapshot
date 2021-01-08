// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RpcC13ZWxsL1RpcFdlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7OztJQU83RCxvQkFBb0c7OztJQUFqRyxrREFBc0I7SUFBYyx5RUFBd0Q7OztJQUMvRix5QkFBNEU7SUFBQSxZQUFTO0lBQUEsaUJBQUk7OztJQUFyRSx3RUFBdUQ7SUFBQyxlQUFTO0lBQVQsZ0NBQVM7OztJQUNyRix1QkFBNkc7OztJQUFoQyxtRUFBMkI7SUFBbkYsd0VBQXVEOzs7O0lBRTlFLGlDQUNFO0lBRHVCLDZMQUFtQjtJQUMxQyxZQUNGO0lBQUEsaUJBQVM7OztJQUZtRCwyRUFBMEQ7SUFDcEgsZUFDRjtJQURFLGtEQUNGOzs7SUFSRiwyQkFDRTtJQUFBLDJCQUNFO0lBQUEscUVBQWdHO0lBQ2hHLHFFQUE0RTtJQUM1RSxxRUFBeUc7SUFDM0csaUJBQU07SUFDTiwrRUFDRTtJQUVKLGlCQUFNOzs7SUFQd0IsZUFBWTtJQUFaLGtDQUFZO0lBQ25DLGVBQWdCO0lBQWhCLHNDQUFnQjtJQUNoQixlQUFpQjtJQUFqQix1Q0FBaUI7SUFFdUIsZUFBYztJQUFkLG9DQUFjOztBQVNqRSxNQUFNLE9BQU8sa0JBQWtCO0lBdUI3QixZQUFvQixNQUF3QixFQUFVLFNBQXVCO1FBQXpELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsY0FBUyxHQUFULFNB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REcsbUNBQWdCOztrREFlWixrQkFBa0I7Y0FsQjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQUNELElBQUksRUFBRTtvQkFDSixnQkFBZ0IsRUFBRSxVQUFVO2lCQUM3QjthQUNGOzhGQUdDLElBQUk7a0JBREgsS0FBSztZQUdOLEdBQUc7a0JBREYsS0FBSztZQUdOLFVBQVU7a0JBRFQsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLFNBQVM7a0JBRFIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aXAtd2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cImlzQWN0aXZlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImJoaS17eyBpY29uIH19XCIgKm5nSWY9XCJpY29uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLWljb24tJyArIG5hbWVcIj48L2k+XG4gICAgICAgIDxwICpuZ0lmPVwic2FuaXRpemVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtdGlwLScgKyBuYW1lXCI+e3sgdGlwIH19PC9wPlxuICAgICAgICA8cCAqbmdJZj1cIiFzYW5pdGl6ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC10aXAtJyArIG5hbWVcIiBbaW5uZXJIVE1MXT1cInRpcFdpdGhTdHlsZXNcIj48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIChjbGljayk9XCJoaWRlVGlwKClcIiAqbmdJZj1cImJ1dHRvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC1idXR0b24tJyArIG5hbWVcIj5cbiAgICAgICAge3sgYnV0dG9uVGV4dCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnaXNBY3RpdmUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGlwV2VsbEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpcDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgc2FuaXRpemU6IGJvb2xlYW4gPSB0cnVlO1xuICBAT3V0cHV0KClcbiAgY29uZmlybWVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNMb2NhbFN0b3JhZ2VFbmFibGVkOiBhbnk7XG4gIGxvY2FsU3RvcmFnZUtleTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3RpcFdpdGhTdHlsZXM6IFNhZmVIdG1sO1xuICBwcml2YXRlIF9sYXN0VGlwU3R5bGVkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAvLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgZW5hYmxlZFxuICAgIHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkID0gKCgpID0+IHtcbiAgICAgIGxldCBpc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsc1Rlc3QnLCAnMScpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsc1Rlc3QnKTtcbiAgICAgICAgICBpc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBzdG9yaW5nIHNldHRpbmdzIGxvY2FsbHkuIEluIFNhZmFyaSwgdGhlIG1vc3QgY29tbW9uIGNhdXNlIG9mIHRoaXMgaXMgdXNpbmcgXCJQcml2YXRlIEJyb3dzaW5nIE1vZGVcIi4gU29tZSBzZXR0aW5ncyBtYXkgbm90IHNhdmUgb3Igc29tZSBmZWF0dXJlcyBtYXkgbm90IHdvcmsgcHJvcGVybHkgZm9yIHlvdS4nLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0VuYWJsZWQ7XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8vIFRydXN0cyB0aGUgSFRNTCBpbiBvcmRlciB0byBzaG93IENTUyBzdHlsZXNcbiAgZ2V0IHRpcFdpdGhTdHlsZXMoKTogU2FmZUh0bWwge1xuICAgIGlmICghdGhpcy5fdGlwV2l0aFN0eWxlcyB8fCB0aGlzLl9sYXN0VGlwU3R5bGVkICE9PSB0aGlzLnRpcCkge1xuICAgICAgdGhpcy5fdGlwV2l0aFN0eWxlcyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMudGlwKTtcbiAgICAgIHRoaXMuX2xhc3RUaXBTdHlsZWQgPSB0aGlzLnRpcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RpcFdpdGhTdHlsZXM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICcnO1xuICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMuYnV0dG9uVGV4dCB8fCB0aGlzLmxhYmVscy5va0dvdEl0O1xuICAgIHRoaXMuYnV0dG9uID0gdHlwZW9mIHRoaXMuYnV0dG9uID09PSAnc3RyaW5nJyA/IHRoaXMuYnV0dG9uID09PSAndHJ1ZScgOiB0aGlzLmJ1dHRvbjtcbiAgICB0aGlzLmljb24gPSB0aGlzLmljb24gfHwgbnVsbDtcbiAgICAvLyBTZXQgYSAoc2VtaSkgdW5pcXVlIG5hbWUgZm9yIHRoZSB0aXAtd2VsbFxuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5ID0gYG5vdm8tdHdfJHt0aGlzLm5hbWV9YDtcbiAgICAvLyBDaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkKSB7XG4gICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpKTtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBzdG9yZWRWYWx1ZSAhPT0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGlkZVRpcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2FsU3RvcmFnZUVuYWJsZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuICAgIH1cbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb25maXJtZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=