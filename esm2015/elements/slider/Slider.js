// NG2
import { Component, ElementRef, Input } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
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
            },] }
];
NovoSliderElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService }
];
NovoSliderElement.propDecorators = {
    slides: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NsaWRlci9TbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBcUJyRSxNQUFNLE9BQU8saUJBQWlCO0lBVzVCLFlBQW9CLE9BQW1CLEVBQVMsTUFBd0I7UUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUHhFLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsUUFBRyxHQUFZLElBQUksQ0FBQztRQUNwQixlQUFVLEdBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUtsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFFBQVE7UUFDTixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ3BEO1FBQ0QsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUN2QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLFNBQVM7UUFDbkIsSUFBSSxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekMsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25ELENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0tBWVA7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxjQUFjO2lCQUMxQjthQUNGOzs7WUF0Qm1CLFVBQVU7WUFFckIsZ0JBQWdCOzs7cUJBc0J0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNsaWRlc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZGl2W3NsaWRlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhc3RhcnRcIiB0aGVtZT1cImljb25cIiBpY29uPVwicHJldmlvdXNcIiAoY2xpY2spPVwiY2hhbmdlU2xpZGUoJ2JhY2snKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yLWNpcmNsZVwiICpuZ0Zvcj1cImxldCBpbmRpY2F0b3Igb2YgY3VyclNsaWRlczsgbGV0IGkgPSBpbmRleFwiIFtuZ0NsYXNzXT1cImluZGljYXRvclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWVuZFwiIHRoZW1lPVwicHJpbWFyeVwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cImNoYW5nZVNsaWRlKCduZXh0JylcIj57eyBsYWJlbHMubmV4dCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCIgKm5nSWY9XCJlbmRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdjdXJyZW50Q2xhc3MnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2xpZGVyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgc2xpZGVzOiBhbnk7XG5cbiAgY3VycmVudFNsaWRlOiBudW1iZXIgPSAwO1xuICBzdGFydDogYm9vbGVhbiA9IHRydWU7XG4gIGVuZDogYm9vbGVhbiA9IHRydWU7XG4gIGN1cnJTbGlkZXM6IEFycmF5PGFueT4gPSBbJ2FjdGl2ZSddO1xuICBoYW5kbGVLZXlEb3duRnVuYzogYW55O1xuICBjdXJyZW50Q2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmhhbmRsZUtleURvd25GdW5jID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzOyBpKyspIHtcbiAgICAgIHRoaXMuY3VyclNsaWRlc1tpXSA9IGkgPiAwID8gJ2luYWN0aXZlJyA6ICdhY3RpdmUnO1xuICAgIH1cbiAgICAvLyBDYXRjaCBUYWIgRXZlbnRzXG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bkZ1bmMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bkZ1bmMpO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU2xpZGUoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IHRoaXMuc2xpZGVzIC0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50U2xpZGUtLTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzOyBpKyspIHtcbiAgICAgIHRoaXMuY3VyclNsaWRlc1tpXSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyU2xpZGVzW3RoaXMuY3VycmVudFNsaWRlXSA9ICdhY3RpdmUnO1xuICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMDtcbiAgICB0aGlzLmVuZCA9IHRoaXMuY3VycmVudFNsaWRlID09PSB0aGlzLnNsaWRlcyAtIDE7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBgc2xpZGUtJHt0aGlzLmN1cnJlbnRTbGlkZX1gO1xuICB9XG59XG4iXX0=