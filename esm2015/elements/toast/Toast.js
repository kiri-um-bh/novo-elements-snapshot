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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7SUFnQnZELDBCQUFrQjtJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULGtDQUFTOzs7SUFDM0IsdUJBQTZFOzs7SUFBekQsNkNBQTZCO0lBQUMsOERBQXNCOzs7SUFDeEUsOEJBQ0k7SUFBQSw0QkFDSjtJQUFBLGlCQUFNOzs7SUFEaUIsZUFBYztJQUFkLG1DQUFjOzs7O0lBTXpDLCtCQUNJO0lBRHdDLHdMQUF1QjtJQUMvRCx3QkFBeUI7SUFDN0IsaUJBQU07OztBQUdkLE1BQU0sT0FBTyxnQkFBZ0I7SUErQjNCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUE3QjNDLFVBQUssR0FBVyxRQUFRLENBQUM7UUFFekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUk3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQU03QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0MsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9vQixDQUFDO0lBbEIvQyxJQUNJLE9BQU8sQ0FBQyxDQUFTO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdB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QUFLO2tCQURKLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHRixPQUFPO2tCQURWLEtBQUs7WUFLTixNQUFNO2tCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRvYXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2FsZXJ0VGhlbWUnLFxuICAgICdbY2xhc3Muc2hvd10nOiAnc2hvdycsXG4gICAgJ1tjbGFzcy5hbmltYXRlXSc6ICdhbmltYXRlJyxcbiAgICAnW2NsYXNzLmVtYmVkZGVkXSc6ICdlbWJlZGRlZCcsXG4gICAgJyhjbGljayknOiAnIWlzQ2xvc2VhYmxlICYmIGNsaWNrSGFuZGxlcigkZXZlbnQpJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWljb25cIj5cbiAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDUgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvaDU+XG4gICAgICAgICAgICA8cCAqbmdJZj1cIl9tZXNzYWdlXCIgW2NsYXNzLm1lc3NhZ2Utb25seV09XCIhdGl0bGVcIiBbaW5uZXJIdG1sXT1cIl9tZXNzYWdlXCI+PC9wPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxpbmtcIiBjbGFzcz1cImxpbmstZ2VuZXJhdGVkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImxpbmtcIiBvbmZvY3VzPVwidGhpcy5zZWxlY3QoKTtcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWljb25cIiAqbmdJZj1cImlzQ2xvc2VhYmxlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVG9hc3RFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJ2Rhbmdlcic7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZyA9ICdjYXV0aW9uJztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGFzRGlhbG9ndWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbGluazogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpc0Nsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgbWVzc2FnZShtOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwobSk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX21lc3NhZ2U6IFNhZmVIdG1sO1xuICBzaG93OiBib29sZWFuID0gZmFsc2U7XG4gIGFuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcGFyZW50OiBhbnkgPSBudWxsO1xuICBsYXVuY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3NpdGlvbjogYW55O1xuICB0aW1lOiBhbnk7XG4gIGljb25DbGFzczogc3RyaW5nO1xuICBhbGVydFRoZW1lOiBzdHJpbmc7XG4gIGVtYmVkZGVkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgIC8vIGNsZWFyIHBvc2l0aW9uIGFuZCB0aW1lXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMudGltZSA9IG51bGw7XG5cbiAgICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgICBpZiAodGhpcy5oYXNEaWFsb2d1ZSkge1xuICAgICAgICB0aGlzLmFsZXJ0VGhlbWUgKz0gJyBkaWFsb2d1ZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBzZXQgaWNvbiBhbmQgc3R5bGluZ1xuICAgIHRoaXMuaWNvbkNsYXNzID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgaWYgKHRoaXMuaGFzRGlhbG9ndWUpIHtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSArPSAnIGRpYWxvZ3VlJztcbiAgICB9XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNDbG9zZWFibGUpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCh7IGNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LmhpZGUodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=