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
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function NovoToastElement_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 8);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("message-only", !ctx_r1.title);
    i0.ɵɵproperty("innerHtml", ctx_r1._message, i0.ɵɵsanitizeHtml);
} }
function NovoToastElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "input", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r2.link);
} }
function NovoToastElement_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function NovoToastElement_div_8_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.close($event); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementEnd();
} }
var _c0 = ["*"];
var NovoToastElement = /** @class */ (function () {
    function NovoToastElement(sanitizer) {
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
    Object.defineProperty(NovoToastElement.prototype, "message", {
        set: function (m) {
            this._message = this.sanitizer.bypassSecurityTrustHtml(m);
        },
        enumerable: true,
        configurable: true
    });
    NovoToastElement.prototype.ngOnInit = function () {
        if (!this.launched) {
            // clear position and time
            this.position = null;
            this.time = null;
            // set icon and styling
            this.iconClass = "bhi-" + this.icon;
            this.alertTheme = this.theme + " toast-container embedded";
            if (this.hasDialogue) {
                this.alertTheme += ' dialogue';
            }
        }
    };
    NovoToastElement.prototype.ngOnChanges = function (changes) {
        // set icon and styling
        this.iconClass = "bhi-" + this.icon;
        this.alertTheme = this.theme + " toast-container embedded";
        if (this.hasDialogue) {
            this.alertTheme += ' dialogue';
        }
    };
    NovoToastElement.prototype.clickHandler = function (event) {
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
    };
    NovoToastElement.prototype.close = function (event) {
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
    };
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
    return NovoToastElement;
}());
export { NovoToastElement };
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
                template: "\n        <div class=\"toast-icon\">\n            <i [ngClass]=\"iconClass\"></i>\n        </div>\n        <div class=\"toast-content\">\n            <h5 *ngIf=\"title\">{{title}}</h5>\n            <p *ngIf=\"_message\" [class.message-only]=\"!title\" [innerHtml]=\"_message\"></p>\n            <div *ngIf=\"link\" class=\"link-generated\">\n                <input type=\"text\" [value]=\"link\" onfocus=\"this.select();\"/>\n            </div>\n            <div class=\"dialogue\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"close-icon\" *ngIf=\"isCloseable\" (click)=\"close($event)\">\n            <i class=\"bhi-times\"></i>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7SUFnQnZELDBCQUFrQjtJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULGtDQUFTOzs7SUFDM0IsdUJBQTZFOzs7SUFBekQsNkNBQTZCO0lBQUMsOERBQXNCOzs7SUFDeEUsOEJBQ0k7SUFBQSw0QkFDSjtJQUFBLGlCQUFNOzs7SUFEaUIsZUFBYztJQUFkLG1DQUFjOzs7O0lBTXpDLCtCQUNJO0lBRHdDLHNMQUF1QjtJQUMvRCx3QkFBeUI7SUFDN0IsaUJBQU07OztBQXpCZDtJQTJERSwwQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQTdCM0MsVUFBSyxHQUFXLFFBQVEsQ0FBQztRQUV6QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXpCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBSTdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBTTdCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcvQyxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFRLElBQUksQ0FBQztRQUNuQixhQUFRLEdBQVksS0FBSyxDQUFDO0lBT29CLENBQUM7SUFsQi9DLHNCQUNJLHFDQUFPO2FBRFgsVUFDWSxDQUFTO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDOzs7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OztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFJTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10b2FzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdhbGVydFRoZW1lJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJ3Nob3cnLFxuICAgICdbY2xhc3MuYW5pbWF0ZV0nOiAnYW5pbWF0ZScsXG4gICAgJ1tjbGFzcy5lbWJlZGRlZF0nOiAnZW1iZWRkZWQnLFxuICAgICcoY2xpY2spJzogJyFpc0Nsb3NlYWJsZSAmJiBjbGlja0hhbmRsZXIoJGV2ZW50KScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1pY29uXCI+XG4gICAgICAgICAgICA8aSBbbmdDbGFzc109XCJpY29uQ2xhc3NcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtY29udGVudFwiPlxuICAgICAgICAgICAgPGg1ICpuZ0lmPVwidGl0bGVcIj57e3RpdGxlfX08L2g1PlxuICAgICAgICAgICAgPHAgKm5nSWY9XCJfbWVzc2FnZVwiIFtjbGFzcy5tZXNzYWdlLW9ubHldPVwiIXRpdGxlXCIgW2lubmVySHRtbF09XCJfbWVzc2FnZVwiPjwvcD5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsaW5rXCIgY2xhc3M9XCJsaW5rLWdlbmVyYXRlZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJsaW5rXCIgb25mb2N1cz1cInRoaXMuc2VsZWN0KCk7XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9ndWVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1pY29uXCIgKm5nSWY9XCJpc0Nsb3NlYWJsZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RvYXN0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdkYW5nZXInO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmcgPSAnY2F1dGlvbic7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhhc0RpYWxvZ3VlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGxpbms6IHN0cmluZztcbiAgQElucHV0KClcbiAgaXNDbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IG1lc3NhZ2UobTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKG0pO1xuICB9XG4gIEBPdXRwdXQoKVxuICBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9tZXNzYWdlOiBTYWZlSHRtbDtcbiAgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBhbmltYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHBhcmVudDogYW55ID0gbnVsbDtcbiAgbGF1bmNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9zaXRpb246IGFueTtcbiAgdGltZTogYW55O1xuICBpY29uQ2xhc3M6IHN0cmluZztcbiAgYWxlcnRUaGVtZTogc3RyaW5nO1xuICBlbWJlZGRlZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmxhdW5jaGVkKSB7XG4gICAgICAvLyBjbGVhciBwb3NpdGlvbiBhbmQgdGltZVxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnRpbWUgPSBudWxsO1xuXG4gICAgICAvLyBzZXQgaWNvbiBhbmQgc3R5bGluZ1xuICAgICAgdGhpcy5pY29uQ2xhc3MgPSBgYmhpLSR7dGhpcy5pY29ufWA7XG4gICAgICB0aGlzLmFsZXJ0VGhlbWUgPSBgJHt0aGlzLnRoZW1lfSB0b2FzdC1jb250YWluZXIgZW1iZWRkZWRgO1xuICAgICAgaWYgKHRoaXMuaGFzRGlhbG9ndWUpIHtcbiAgICAgICAgdGhpcy5hbGVydFRoZW1lICs9ICcgZGlhbG9ndWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gc2V0IGljb24gYW5kIHN0eWxpbmdcbiAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICB0aGlzLmFsZXJ0VGhlbWUgPSBgJHt0aGlzLnRoZW1lfSB0b2FzdC1jb250YWluZXIgZW1iZWRkZWRgO1xuICAgIGlmICh0aGlzLmhhc0RpYWxvZ3VlKSB7XG4gICAgICB0aGlzLmFsZXJ0VGhlbWUgKz0gJyBkaWFsb2d1ZSc7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzQ2xvc2VhYmxlKSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaGlkZSh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VkLmVtaXQoeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlZC5lbWl0KHsgY2xvc2VkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxufVxuIl19