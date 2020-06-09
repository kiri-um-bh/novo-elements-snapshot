// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
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
    i0.ɵɵelement(0, "p", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("message-only", !ctx_r1.title);
    i0.ɵɵproperty("innerHtml", ctx_r1._message, i0.ɵɵsanitizeHtml);
} }
function NovoToastElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "input", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r2.link);
} }
function NovoToastElement_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function NovoToastElement_div_8_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.close($event); });
    i0.ɵɵelement(1, "i", 12);
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
}
NovoToastElement.ɵfac = function NovoToastElement_Factory(t) { return new (t || NovoToastElement)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
NovoToastElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoToastElement, selectors: [["novo-toast"]], hostVars: 8, hostBindings: function NovoToastElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoToastElement_click_HostBindingHandler($event) { return !ctx.isCloseable && ctx.clickHandler($event); });
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.alertTheme);
        i0.ɵɵclassProp("show", ctx.show)("animate", ctx.animate)("embedded", ctx.embedded);
    } }, inputs: { theme: "theme", icon: "icon", title: "title", hasDialogue: "hasDialogue", link: "link", isCloseable: "isCloseable", message: "message" }, outputs: { closed: "closed" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 9, vars: 5, consts: [[1, "toast-icon"], [3, "ngClass"], [1, "toast-content"], [4, "ngIf"], [3, "message-only", "innerHtml", 4, "ngIf"], ["class", "link-generated", 4, "ngIf"], [1, "dialogue"], ["class", "close-icon", 3, "click", 4, "ngIf"], [3, "innerHtml"], [1, "link-generated"], ["type", "text", "onfocus", "this.select();", 3, "value"], [1, "close-icon", 3, "click"], [1, "bhi-times"]], template: function NovoToastElement_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, NovoToastElement_div_8_Template, 2, 0, "div", 7);
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
        i0.ɵɵproperty("ngIf", ctx.isCloseable);
    } }, directives: [i2.NgClass, i2.NgIf], encapsulation: 2 });
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
            <h5 *ngIf="title">{{title}}</h5>
            <p *ngIf="_message" [class.message-only]="!title" [innerHtml]="_message"></p>
            <div *ngIf="link" class="link-generated">
                <input type="text" [value]="link" onfocus="this.select();"/>
            </div>
            <div class="dialogue">
                <ng-content></ng-content>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7SUFnQnZELDBCQUFrQjtJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULGtDQUFTOzs7SUFDM0IsdUJBQTZFOzs7SUFBekQsNkNBQTZCO0lBQUMsOERBQXNCOzs7SUFDeEUsOEJBQ0k7SUFBQSw0QkFDSjtJQUFBLGlCQUFNOzs7SUFEaUIsZUFBYztJQUFkLG1DQUFjOzs7O0lBTXpDLCtCQUNJO0lBRHdDLHdMQUF1QjtJQUMvRCx3QkFBeUI7SUFDN0IsaUJBQU07OztBQUdkLE1BQU0sT0FBTyxnQkFBZ0I7SUErQjNCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUE3QjNDLFVBQUssR0FBVyxRQUFRLENBQUM7UUFFekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUk3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQU03QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0MsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9vQixDQUFDO0lBbEIvQyxJQUNJLE9BQU8sQ0FBQyxDQUFTO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1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a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBSUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdG9hc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnYWxlcnRUaGVtZScsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICdzaG93JyxcbiAgICAnW2NsYXNzLmFuaW1hdGVdJzogJ2FuaW1hdGUnLFxuICAgICdbY2xhc3MuZW1iZWRkZWRdJzogJ2VtYmVkZGVkJyxcbiAgICAnKGNsaWNrKSc6ICchaXNDbG9zZWFibGUgJiYgY2xpY2tIYW5kbGVyKCRldmVudCknLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtaWNvblwiPlxuICAgICAgICAgICAgPGkgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoNSAqbmdJZj1cInRpdGxlXCI+e3t0aXRsZX19PC9oNT5cbiAgICAgICAgICAgIDxwICpuZ0lmPVwiX21lc3NhZ2VcIiBbY2xhc3MubWVzc2FnZS1vbmx5XT1cIiF0aXRsZVwiIFtpbm5lckh0bWxdPVwiX21lc3NhZ2VcIj48L3A+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibGlua1wiIGNsYXNzPVwibGluay1nZW5lcmF0ZWRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibGlua1wiIG9uZm9jdXM9XCJ0aGlzLnNlbGVjdCgpO1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ3VlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtaWNvblwiICpuZ0lmPVwiaXNDbG9zZWFibGVcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ub2FzdEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnZGFuZ2VyJztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nID0gJ2NhdXRpb24nO1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoYXNEaWFsb2d1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBsaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGlzQ2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBtZXNzYWdlKG06IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChtKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgY2xvc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfbWVzc2FnZTogU2FmZUh0bWw7XG4gIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYW5pbWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwYXJlbnQ6IGFueSA9IG51bGw7XG4gIGxhdW5jaGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHBvc2l0aW9uOiBhbnk7XG4gIHRpbWU6IGFueTtcbiAgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIGFsZXJ0VGhlbWU6IHN0cmluZztcbiAgZW1iZWRkZWQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5sYXVuY2hlZCkge1xuICAgICAgLy8gY2xlYXIgcG9zaXRpb24gYW5kIHRpbWVcbiAgICAgIHRoaXMucG9zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy50aW1lID0gbnVsbDtcblxuICAgICAgLy8gc2V0IGljb24gYW5kIHN0eWxpbmdcbiAgICAgIHRoaXMuaWNvbkNsYXNzID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgICAgdGhpcy5hbGVydFRoZW1lID0gYCR7dGhpcy50aGVtZX0gdG9hc3QtY29udGFpbmVyIGVtYmVkZGVkYDtcbiAgICAgIGlmICh0aGlzLmhhc0RpYWxvZ3VlKSB7XG4gICAgICAgIHRoaXMuYWxlcnRUaGVtZSArPSAnIGRpYWxvZ3VlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgdGhpcy5pY29uQ2xhc3MgPSBgYmhpLSR7dGhpcy5pY29ufWA7XG4gICAgdGhpcy5hbGVydFRoZW1lID0gYCR7dGhpcy50aGVtZX0gdG9hc3QtY29udGFpbmVyIGVtYmVkZGVkYDtcbiAgICBpZiAodGhpcy5oYXNEaWFsb2d1ZSkge1xuICAgICAgdGhpcy5hbGVydFRoZW1lICs9ICcgZGlhbG9ndWUnO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Nsb3NlYWJsZSkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50LmhpZGUodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KHsgY2xvc2VkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQuaGlkZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZWQuZW1pdCh7IGNsb3NlZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==