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
function NovoSliderElement_ng_content_7_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(7, NovoSliderElement_ng_content_7_Template, 1, 0, "ng-content", 6);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NsaWRlci9TbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7O0lBU3pELGlDQUEyRjtJQUF2QyxvTEFBcUIsTUFBTSxLQUFFO0lBQUMsaUJBQVM7OztJQUV2Rix5QkFBOEc7OztJQUE1QixzQ0FBcUI7Ozs7SUFFM0csaUNBQStFO0lBQTlCLG9MQUFxQixNQUFNLEtBQUU7SUFBQyxZQUFpQjtJQUFBLGlCQUFTOzs7SUFBMUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7SUFDaEcsdUNBQXdDOzs7O0FBT3BELE1BQU0sT0FBTyxpQkFBaUI7SUFXNUIsWUFBb0IsT0FBbUIsRUFBUyxNQUF3QjtRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQeEUsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixRQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGVBQVUsR0FBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBS2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsUUFBUTtRQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDcEQ7UUFDRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsU0FBUztRQUNuQixJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7a0ZBdkRVLGlCQUFpQjtzREFBakIsaUJBQWlCOzs7O1FBaEJ0QixrQ0FDSTtRQUFBLGtCQUFnQztRQUNwQyxpQkFBVTtRQUNWLDhCQUNJO1FBQUEsd0VBQWtGO1FBQ2xGLDhCQUNJO1FBQUEsa0VBQXdHO1FBQzVHLGlCQUFNO1FBQ04sd0VBQStFO1FBQy9FLGdGQUF3QztRQUM1QyxpQkFBTTs7UUFOTSxlQUFjO1FBQWQsaUNBQWM7UUFFWSxlQUFtRDtRQUFuRCx3Q0FBbUQ7UUFFN0UsZUFBWTtRQUFaLCtCQUFZO1FBQ1EsZUFBVztRQUFYLDhCQUFXOztrREFPdEMsaUJBQWlCO2NBbkI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0tBWVA7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxjQUFjO2lCQUMxQjthQUNGOzRGQUdDLE1BQU07a0JBREwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzbGlkZXNcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltzbGlkZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIXN0YXJ0XCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cInByZXZpb3VzXCIgKGNsaWNrKT1cImNoYW5nZVNsaWRlKCdiYWNrJylcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmRpY2F0b3JzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZGljYXRvci1jaXJjbGVcIiAqbmdGb3I9XCJsZXQgaW5kaWNhdG9yIG9mIGN1cnJTbGlkZXM7IGxldCBpID0gaW5kZXhcIiBbbmdDbGFzc109XCJpbmRpY2F0b3JcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFlbmRcIiB0aGVtZT1cInByaW1hcnlcIiBpY29uPVwibmV4dFwiIChjbGljayk9XCJjaGFuZ2VTbGlkZSgnbmV4dCcpXCI+e3sgbGFiZWxzLm5leHQgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiICpuZ0lmPVwiZW5kXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnY3VycmVudENsYXNzJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NsaWRlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHNsaWRlczogYW55O1xuXG4gIGN1cnJlbnRTbGlkZTogbnVtYmVyID0gMDtcbiAgc3RhcnQ6IGJvb2xlYW4gPSB0cnVlO1xuICBlbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBjdXJyU2xpZGVzOiBBcnJheTxhbnk+ID0gWydhY3RpdmUnXTtcbiAgaGFuZGxlS2V5RG93bkZ1bmM6IGFueTtcbiAgY3VycmVudENsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duRnVuYyA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlczsgaSsrKSB7XG4gICAgICB0aGlzLmN1cnJTbGlkZXNbaV0gPSBpID4gMCA/ICdpbmFjdGl2ZScgOiAnYWN0aXZlJztcbiAgICB9XG4gICAgLy8gQ2F0Y2ggVGFiIEV2ZW50c1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd25GdW5jKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd25GdW5jKTtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkge1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVNsaWRlKGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSB0aGlzLnNsaWRlcyAtIDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50U2xpZGUrKztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudFNsaWRlLS07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlczsgaSsrKSB7XG4gICAgICB0aGlzLmN1cnJTbGlkZXNbaV0gPSAnaW5hY3RpdmUnO1xuICAgIH1cblxuICAgIHRoaXMuY3VyclNsaWRlc1t0aGlzLmN1cnJlbnRTbGlkZV0gPSAnYWN0aXZlJztcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5jdXJyZW50U2xpZGUgPT09IDA7XG4gICAgdGhpcy5lbmQgPSB0aGlzLmN1cnJlbnRTbGlkZSA9PT0gdGhpcy5zbGlkZXMgLSAxO1xuICAgIHRoaXMuY3VycmVudENsYXNzID0gYHNsaWRlLSR7dGhpcy5jdXJyZW50U2xpZGV9YDtcbiAgfVxufVxuIl19