/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, Input } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
export class NovoSliderElement {
    /**
     * @param {?} element
     * @param {?} labels
     */
    constructor(element, labels) {
        this.element = element;
        this.labels = labels;
        this.currentSlide = 0;
        this.start = true;
        this.end = true;
        this.currSlides = ['active'];
        this.handleKeyDownFunc = this.handleKeyDown.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        for (let i = 0; i < this.slides; i++) {
            this.currSlides[i] = i > 0 ? 'inactive' : 'active';
        }
        // Catch Tab Events
        this.element.nativeElement.addEventListener('keydown', this.handleKeyDownFunc);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('keydown', this.handleKeyDownFunc);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyDown(event) {
        if (event.keyCode === 9) {
            event.stopImmediatePropagation();
            event.preventDefault();
        }
    }
    /**
     * @param {?} direction
     * @return {?}
     */
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
NovoSliderElement.decorators = [
    { type: Component, args: [{
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
                }
            }] }
];
/** @nocollapse */
NovoSliderElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService }
];
NovoSliderElement.propDecorators = {
    slides: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoSliderElement.prototype.slides;
    /** @type {?} */
    NovoSliderElement.prototype.currentSlide;
    /** @type {?} */
    NovoSliderElement.prototype.start;
    /** @type {?} */
    NovoSliderElement.prototype.end;
    /** @type {?} */
    NovoSliderElement.prototype.currSlides;
    /** @type {?} */
    NovoSliderElement.prototype.handleKeyDownFunc;
    /** @type {?} */
    NovoSliderElement.prototype.currentClass;
    /**
     * @type {?}
     * @private
     */
    NovoSliderElement.prototype.element;
    /** @type {?} */
    NovoSliderElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NsaWRlci9TbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUVoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQXFCckUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFXNUIsWUFBb0IsT0FBbUIsRUFBUyxNQUF3QjtRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQeEUsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixRQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGVBQVUsR0FBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBS2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDcEQ7UUFDRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUN2QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFTO1FBQ25CLElBQUksU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDM0IsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlQO2dCQUNILElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsY0FBYztpQkFDMUI7YUFDRjs7OztZQXRCbUIsVUFBVTtZQUVyQixnQkFBZ0I7OztxQkFzQnRCLEtBQUs7Ozs7SUFBTixtQ0FDWTs7SUFFWix5Q0FBeUI7O0lBQ3pCLGtDQUFzQjs7SUFDdEIsZ0NBQW9COztJQUNwQix1Q0FBb0M7O0lBQ3BDLDhDQUF1Qjs7SUFDdkIseUNBQXFCOzs7OztJQUVULG9DQUEyQjs7SUFBRSxtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2xpZGVzXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbc2xpZGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFzdGFydFwiIHRoZW1lPVwiaWNvblwiIGljb249XCJwcmV2aW91c1wiIChjbGljayk9XCJjaGFuZ2VTbGlkZSgnYmFjaycpXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmRpY2F0b3ItY2lyY2xlXCIgKm5nRm9yPVwibGV0IGluZGljYXRvciBvZiBjdXJyU2xpZGVzOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwiaW5kaWNhdG9yXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhZW5kXCIgdGhlbWU9XCJwcmltYXJ5XCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwiY2hhbmdlU2xpZGUoJ25leHQnKVwiPnt7IGxhYmVscy5uZXh0IH19PC9idXR0b24+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIiAqbmdJZj1cImVuZFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2N1cnJlbnRDbGFzcycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TbGlkZXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBzbGlkZXM6IGFueTtcblxuICBjdXJyZW50U2xpZGU6IG51bWJlciA9IDA7XG4gIHN0YXJ0OiBib29sZWFuID0gdHJ1ZTtcbiAgZW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgY3VyclNsaWRlczogQXJyYXk8YW55PiA9IFsnYWN0aXZlJ107XG4gIGhhbmRsZUtleURvd25GdW5jOiBhbnk7XG4gIGN1cnJlbnRDbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuaGFuZGxlS2V5RG93bkZ1bmMgPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXM7IGkrKykge1xuICAgICAgdGhpcy5jdXJyU2xpZGVzW2ldID0gaSA+IDAgPyAnaW5hY3RpdmUnIDogJ2FjdGl2ZSc7XG4gICAgfVxuICAgIC8vIENhdGNoIFRhYiBFdmVudHNcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duRnVuYyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duRnVuYyk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTbGlkZShkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gdGhpcy5zbGlkZXMgLSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudFNsaWRlKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZS0tO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXM7IGkrKykge1xuICAgICAgdGhpcy5jdXJyU2xpZGVzW2ldID0gJ2luYWN0aXZlJztcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJTbGlkZXNbdGhpcy5jdXJyZW50U2xpZGVdID0gJ2FjdGl2ZSc7XG4gICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudFNsaWRlID09PSAwO1xuICAgIHRoaXMuZW5kID0gdGhpcy5jdXJyZW50U2xpZGUgPT09IHRoaXMuc2xpZGVzIC0gMTtcbiAgICB0aGlzLmN1cnJlbnRDbGFzcyA9IGBzbGlkZS0ke3RoaXMuY3VycmVudFNsaWRlfWA7XG4gIH1cbn1cbiJdfQ==