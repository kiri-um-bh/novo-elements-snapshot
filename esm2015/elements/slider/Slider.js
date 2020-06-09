// NG2
import { Component, ElementRef, Input } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../button/Button";
function NovoSliderElement_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function NovoSliderElement_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changeSlide("back"); });
    i0.ɵɵelementEnd();
} }
function NovoSliderElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const indicator_r6 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", indicator_r6);
} }
function NovoSliderElement_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function NovoSliderElement_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.changeSlide("next"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.next);
} }
function NovoSliderElement_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "end"]);
} }
const _c0 = [[["div", "slide", ""]], [["button"]]];
const _c1 = ["div[slide]", "button"];
export class NovoSliderElement {
    constructor(element, labels) {
        this.element = element;
        this.labels = labels;
        this.currentSlide = 0;
        this.start = true;
        this.end = true;
        this.currSlides = ['active'];
        this.handleKeyDownFunc = this.handleKeyDown.bind(this);
    }
    ngOnInit() {
        for (let i = 0; i < this.slides; i++) {
            this.currSlides[i] = i > 0 ? 'inactive' : 'active';
        }
        // Catch Tab Events
        this.element.nativeElement.addEventListener('keydown', this.handleKeyDownFunc);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('keydown', this.handleKeyDownFunc);
    }
    handleKeyDown(event) {
        if (event.keyCode === 9) {
            event.stopImmediatePropagation();
            event.preventDefault();
        }
    }
    changeSlide(direction) {
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
        for (let i = 0; i < this.slides; i++) {
            this.currSlides[i] = 'inactive';
        }
        this.currSlides[this.currentSlide] = 'active';
        this.start = this.currentSlide === 0;
        this.end = this.currentSlide === this.slides - 1;
        this.currentClass = `slide-${this.currentSlide}`;
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSliderElement, [{
        type: Component,
        args: [{
                selector: 'novo-slider',
                template: `
        <section class="slides">
            <ng-content select="div[slide]"></ng-content>
        </section>
        <div class="controls">
            <button *ngIf="!start" theme="icon" icon="previous" (click)="changeSlide('back')"></button>
            <div class="indicators">
                <div class="indicator-circle" *ngFor="let indicator of currSlides; let i = index" [ngClass]="indicator"></div>
            </div>
            <button *ngIf="!end" theme="primary" icon="next" (click)="changeSlide('next')">{{ labels.next }}</button>
            <ng-content select="button" *ngIf="end"></ng-content>
        </div>
    `,
                host: {
                    '[class]': 'currentClass',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }]; }, { slides: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NsaWRlci9TbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7O0lBU3pELGlDQUEyRjtJQUF2QyxvTEFBcUIsTUFBTSxLQUFFO0lBQUMsaUJBQVM7OztJQUV2Rix5QkFBOEc7OztJQUE1QixzQ0FBcUI7Ozs7SUFFM0csaUNBQStFO0lBQTlCLG9MQUFxQixNQUFNLEtBQUU7SUFBQyxZQUFpQjtJQUFBLGlCQUFTOzs7SUFBMUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7SUFDaEcsdUNBQXdDOzs7O0FBT3BELE1BQU0sT0FBTyxpQkFBaUI7SUFXNUIsWUFBb0IsT0FBbUIsRUFBUyxNQUF3QjtRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQeEUsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixRQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGVBQVUsR0FBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBS2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsUUFBUTtRQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDcEQ7UUFDRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsU0FBUztRQUNuQixJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7a0ZBdkRVLGlCQUFpQjtzREFBakIsaUJBQWlCOzs7O1FBaEJ0QixrQ0FDSTtRQUFBLGtCQUFnQztRQUNwQyxpQkFBVTtRQUNWLDhCQUNJO1FBQUEsd0VBQWtGO1FBQ2xGLDhCQUNJO1FBQUEsa0VBQXdHO1FBQzVHLGlCQUFNO1FBQ04sd0VBQStFO1FBQy9FLGtFQUF3QztRQUM1QyxpQkFBTTs7UUFOTSxlQUFjO1FBQWQsaUNBQWM7UUFFWSxlQUFtRDtRQUFuRCx3Q0FBbUQ7UUFFN0UsZUFBWTtRQUFaLCtCQUFZO1FBQ1EsZUFBVztRQUFYLDhCQUFXOztrREFPdEMsaUJBQWlCO2NBbkI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0tBWVA7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxjQUFjO2lCQUMxQjthQUNGOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNsaWRlc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZGl2W3NsaWRlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhc3RhcnRcIiB0aGVtZT1cImljb25cIiBpY29uPVwicHJldmlvdXNcIiAoY2xpY2spPVwiY2hhbmdlU2xpZGUoJ2JhY2snKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yLWNpcmNsZVwiICpuZ0Zvcj1cImxldCBpbmRpY2F0b3Igb2YgY3VyclNsaWRlczsgbGV0IGkgPSBpbmRleFwiIFtuZ0NsYXNzXT1cImluZGljYXRvclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWVuZFwiIHRoZW1lPVwicHJpbWFyeVwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cImNoYW5nZVNsaWRlKCduZXh0JylcIj57eyBsYWJlbHMubmV4dCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCIgKm5nSWY9XCJlbmRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdjdXJyZW50Q2xhc3MnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2xpZGVyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgc2xpZGVzOiBhbnk7XG5cbiAgY3VycmVudFNsaWRlOiBudW1iZXIgPSAwO1xuICBzdGFydDogYm9vbGVhbiA9IHRydWU7XG4gIGVuZDogYm9vbGVhbiA9IHRydWU7XG4gIGN1cnJTbGlkZXM6IEFycmF5PGFueT4gPSBbJ2FjdGl2ZSddO1xuICBoYW5kbGVLZXlEb3duRnVuYzogYW55O1xuICBjdXJyZW50Q2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmhhbmRsZUtleURvd25GdW5jID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzOyBpKyspIHtcbiAgICAgIHRoaXMuY3VyclNsaWRlc1tpXSA9IGkgPiAwID8gJ2luYWN0aXZlJyA6ICdhY3RpdmUnO1xuICAgIH1cbiAgICAvLyBDYXRjaCBUYWIgRXZlbnRzXG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bkZ1bmMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bkZ1bmMpO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU2xpZGUoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IHRoaXMuc2xpZGVzIC0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50U2xpZGUtLTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzOyBpKyspIHtcbiAgICAgIHRoaXMuY3VyclNsaWRlc1tpXSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyU2xpZGVzW3RoaXMuY3VycmVudFNsaWRlXSA9ICdhY3RpdmUnO1xuICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMDtcbiAgICB0aGlzLmVuZCA9IHRoaXMuY3VycmVudFNsaWRlID09PSB0aGlzLnNsaWRlcyAtIDE7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBgc2xpZGUtJHt0aGlzLmN1cnJlbnRTbGlkZX1gO1xuICB9XG59XG4iXX0=