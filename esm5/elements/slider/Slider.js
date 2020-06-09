// NG2
import { Component, ElementRef, Input } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../button/Button";
function NovoSliderElement_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function NovoSliderElement_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changeSlide("back"); });
    i0.ɵɵelementEnd();
} }
function NovoSliderElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    var indicator_r6 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", indicator_r6);
} }
function NovoSliderElement_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function NovoSliderElement_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.changeSlide("next"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.next);
} }
function NovoSliderElement_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "end"]);
} }
var _c0 = [[["div", "slide", ""]], [["button"]]];
var _c1 = ["div[slide]", "button"];
var NovoSliderElement = /** @class */ (function () {
    function NovoSliderElement(element, labels) {
        this.element = element;
        this.labels = labels;
        this.currentSlide = 0;
        this.start = true;
        this.end = true;
        this.currSlides = ['active'];
        this.handleKeyDownFunc = this.handleKeyDown.bind(this);
    }
    NovoSliderElement.prototype.ngOnInit = function () {
        for (var i = 0; i < this.slides; i++) {
            this.currSlides[i] = i > 0 ? 'inactive' : 'active';
        }
        // Catch Tab Events
        this.element.nativeElement.addEventListener('keydown', this.handleKeyDownFunc);
    };
    NovoSliderElement.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('keydown', this.handleKeyDownFunc);
    };
    NovoSliderElement.prototype.handleKeyDown = function (event) {
        if (event.keyCode === 9) {
            event.stopImmediatePropagation();
            event.preventDefault();
        }
    };
    NovoSliderElement.prototype.changeSlide = function (direction) {
        if (direction === 'next') {
            if (this.currentSlide === this.slides - 1) {
                return;
            }
            this.currentSlide++;
        }
        else {
            if (this.currentSlide === 0) {
                return;
            }
            this.currentSlide--;
        }
        for (var i = 0; i < this.slides; i++) {
            this.currSlides[i] = 'inactive';
        }
        this.currSlides[this.currentSlide] = 'active';
        this.start = this.currentSlide === 0;
        this.end = this.currentSlide === this.slides - 1;
        this.currentClass = "slide-" + this.currentSlide;
    };
    NovoSliderElement.ɵfac = function NovoSliderElement_Factory(t) { return new (t || NovoSliderElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    NovoSliderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSliderElement, selectors: [["novo-slider"]], hostVars: 2, hostBindings: function NovoSliderElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.currentClass);
        } }, inputs: { slides: "slides" }, ngContentSelectors: _c1, decls: 8, vars: 4, consts: [[1, "slides"], [1, "controls"], ["theme", "icon", "icon", "previous", 3, "click", 4, "ngIf"], [1, "indicators"], ["class", "indicator-circle", 3, "ngClass", 4, "ngFor", "ngForOf"], ["theme", "primary", "icon", "next", 3, "click", 4, "ngIf"], [4, "ngIf"], ["theme", "icon", "icon", "previous", 3, "click"], [1, "indicator-circle", 3, "ngClass"], ["theme", "primary", "icon", "next", 3, "click"]], template: function NovoSliderElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵtemplate(3, NovoSliderElement_button_3_Template, 1, 0, "button", 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵtemplate(5, NovoSliderElement_div_5_Template, 1, 1, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, NovoSliderElement_button_6_Template, 2, 1, "button", 5);
            i0.ɵɵtemplate(7, NovoSliderElement_7_Template, 1, 0, undefined, 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.start);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.currSlides);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.end);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.end);
        } }, directives: [i2.NgIf, i2.NgForOf, i3.NovoButtonElement, i2.NgClass], encapsulation: 2 });
    return NovoSliderElement;
}());
export { NovoSliderElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSliderElement, [{
        type: Component,
        args: [{
                selector: 'novo-slider',
                template: "\n        <section class=\"slides\">\n            <ng-content select=\"div[slide]\"></ng-content>\n        </section>\n        <div class=\"controls\">\n            <button *ngIf=\"!start\" theme=\"icon\" icon=\"previous\" (click)=\"changeSlide('back')\"></button>\n            <div class=\"indicators\">\n                <div class=\"indicator-circle\" *ngFor=\"let indicator of currSlides; let i = index\" [ngClass]=\"indicator\"></div>\n            </div>\n            <button *ngIf=\"!end\" theme=\"primary\" icon=\"next\" (click)=\"changeSlide('next')\">{{ labels.next }}</button>\n            <ng-content select=\"button\" *ngIf=\"end\"></ng-content>\n        </div>\n    ",
                host: {
                    '[class]': 'currentClass',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }]; }, { slides: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NsaWRlci9TbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7O0lBU3pELGlDQUEyRjtJQUF2QyxrTEFBcUIsTUFBTSxLQUFFO0lBQUMsaUJBQVM7OztJQUV2Rix5QkFBOEc7OztJQUE1QixzQ0FBcUI7Ozs7SUFFM0csaUNBQStFO0lBQTlCLGtMQUFxQixNQUFNLEtBQUU7SUFBQyxZQUFpQjtJQUFBLGlCQUFTOzs7SUFBMUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7SUFDaEcsdUNBQXdDOzs7O0FBWnBEO0lBOEJFLDJCQUFvQixPQUFtQixFQUFTLE1BQXdCO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVB4RSxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFFBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsZUFBVSxHQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFLbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNwRDtRQUNELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDdkIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxTQUFTO1FBQ25CLElBQUksU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDM0IsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFTLElBQUksQ0FBQyxZQUFjLENBQUM7SUFDbkQsQ0FBQztzRkF2RFUsaUJBQWlCOzBEQUFqQixpQkFBaUI7Ozs7WUFoQnRCLGtDQUNJO1lBQUEsa0JBQWdDO1lBQ3BDLGlCQUFVO1lBQ1YsOEJBQ0k7WUFBQSx3RUFBa0Y7WUFDbEYsOEJBQ0k7WUFBQSxrRUFBd0c7WUFDNUcsaUJBQU07WUFDTix3RUFBK0U7WUFDL0Usa0VBQXdDO1lBQzVDLGlCQUFNOztZQU5NLGVBQWM7WUFBZCxpQ0FBYztZQUVZLGVBQW1EO1lBQW5ELHdDQUFtRDtZQUU3RSxlQUFZO1lBQVosK0JBQVk7WUFDUSxlQUFXO1lBQVgsOEJBQVc7OzRCQWpCbkQ7Q0FnRkMsQUEzRUQsSUEyRUM7U0F4RFksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FuQjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHdxQkFZUDtnQkFDSCxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLGNBQWM7aUJBQzFCO2FBQ0Y7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2xpZGVzXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbc2xpZGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFzdGFydFwiIHRoZW1lPVwiaWNvblwiIGljb249XCJwcmV2aW91c1wiIChjbGljayk9XCJjaGFuZ2VTbGlkZSgnYmFjaycpXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmRpY2F0b3ItY2lyY2xlXCIgKm5nRm9yPVwibGV0IGluZGljYXRvciBvZiBjdXJyU2xpZGVzOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwiaW5kaWNhdG9yXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhZW5kXCIgdGhlbWU9XCJwcmltYXJ5XCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwiY2hhbmdlU2xpZGUoJ25leHQnKVwiPnt7IGxhYmVscy5uZXh0IH19PC9idXR0b24+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIiAqbmdJZj1cImVuZFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2N1cnJlbnRDbGFzcycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TbGlkZXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBzbGlkZXM6IGFueTtcblxuICBjdXJyZW50U2xpZGU6IG51bWJlciA9IDA7XG4gIHN0YXJ0OiBib29sZWFuID0gdHJ1ZTtcbiAgZW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgY3VyclNsaWRlczogQXJyYXk8YW55PiA9IFsnYWN0aXZlJ107XG4gIGhhbmRsZUtleURvd25GdW5jOiBhbnk7XG4gIGN1cnJlbnRDbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuaGFuZGxlS2V5RG93bkZ1bmMgPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXM7IGkrKykge1xuICAgICAgdGhpcy5jdXJyU2xpZGVzW2ldID0gaSA+IDAgPyAnaW5hY3RpdmUnIDogJ2FjdGl2ZSc7XG4gICAgfVxuICAgIC8vIENhdGNoIFRhYiBFdmVudHNcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duRnVuYyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duRnVuYyk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTbGlkZShkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gdGhpcy5zbGlkZXMgLSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudFNsaWRlKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZS0tO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXM7IGkrKykge1xuICAgICAgdGhpcy5jdXJyU2xpZGVzW2ldID0gJ2luYWN0aXZlJztcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJTbGlkZXNbdGhpcy5jdXJyZW50U2xpZGVdID0gJ2FjdGl2ZSc7XG4gICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudFNsaWRlID09PSAwO1xuICAgIHRoaXMuZW5kID0gdGhpcy5jdXJyZW50U2xpZGUgPT09IHRoaXMuc2xpZGVzIC0gMTtcbiAgICB0aGlzLmN1cnJlbnRDbGFzcyA9IGBzbGlkZS0ke3RoaXMuY3VycmVudFNsaWRlfWA7XG4gIH1cbn1cbiJdfQ==