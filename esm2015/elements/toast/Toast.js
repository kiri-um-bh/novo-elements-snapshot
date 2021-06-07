// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
NovoToastElement.decorators = [
    { type: Component, args: [{
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
    `
            },] }
];
NovoToastElement.ctorParameters = () => [
    { type: DomSanitizer }
];
NovoToastElement.propDecorators = {
    theme: [{ type: Input }],
    icon: [{ type: Input }],
    title: [{ type: Input }],
    hasDialogue: [{ type: Input }],
    link: [{ type: Input }],
    isCloseable: [{ type: Input }],
    message: [{ type: Input }],
    closed: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQThCbkUsTUFBTSxPQUFPLGdCQUFnQjtJQStCM0IsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQTdCM0MsVUFBSyxHQUFXLFFBQVEsQ0FBQztRQUV6QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXpCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBSTdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBTTdCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcvQyxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFRLElBQUksQ0FBQztRQUNuQixhQUFRLEdBQVksS0FBSyxDQUFDO0lBT29CLENBQUM7SUFsQi9DLElBQ0ksT0FBTyxDQUFDLENBQVM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFpQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVqQix1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssMkJBQTJCLENBQUM7WUFDM0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF1QjtRQUNqQyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssMkJBQTJCLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDcEM7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7O1lBN0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxZQUFZO29CQUN2QixjQUFjLEVBQUUsTUFBTTtvQkFDdEIsaUJBQWlCLEVBQUUsU0FBUztvQkFDNUIsa0JBQWtCLEVBQUUsVUFBVTtvQkFDOUIsU0FBUyxFQUFFLHNDQUFzQztpQkFDbEQ7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDthQUNKOzs7WUE3QlEsWUFBWTs7O29CQStCbEIsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSzttQkFFTCxLQUFLOzBCQUVMLEtBQUs7c0JBRUwsS0FBSztxQkFJTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10b2FzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdhbGVydFRoZW1lJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJ3Nob3cnLFxuICAgICdbY2xhc3MuYW5pbWF0ZV0nOiAnYW5pbWF0ZScsXG4gICAgJ1tjbGFzcy5lbWJlZGRlZF0nOiAnZW1iZWRkZWQnLFxuICAgICcoY2xpY2spJzogJyFpc0Nsb3NlYWJsZSAmJiBjbGlja0hhbmRsZXIoJGV2ZW50KScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1pY29uXCI+XG4gICAgICAgICAgICA8aSBbbmdDbGFzc109XCJpY29uQ2xhc3NcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtY29udGVudFwiPlxuICAgICAgICAgICAgPGg1ICpuZ0lmPVwidGl0bGVcIj57e3RpdGxlfX08L2g1PlxuICAgICAgICAgICAgPHAgKm5nSWY9XCJfbWVzc2FnZVwiIFtjbGFzcy5tZXNzYWdlLW9ubHldPVwiIXRpdGxlXCIgW2lubmVySHRtbF09XCJfbWVzc2FnZVwiPjwvcD5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsaW5rXCIgY2xhc3M9XCJsaW5rLWdlbmVyYXRlZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJsaW5rXCIgb25mb2N1cz1cInRoaXMuc2VsZWN0KCk7XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9ndWVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1pY29uXCIgKm5nSWY9XCJpc0Nsb3NlYWJsZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RvYXN0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdkYW5nZXInO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmcgPSAnY2F1dGlvbic7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhhc0RpYWxvZ3VlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGxpbms6IHN0cmluZztcbiAgQElucHV0KClcbiAgaXNDbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IG1lc3NhZ2UobTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKG0pO1xuICB9XG4gIEBPdXRwdXQoKVxuICBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9tZXNzYWdlOiBTYWZlSHRtbDtcbiAgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBhbmltYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHBhcmVudDogYW55ID0gbnVsbDtcbiAgbGF1bmNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9zaXRpb246IGFueTtcbiAgdGltZTogYW55O1xuICBpY29uQ2xhc3M6IHN0cmluZztcbiAgYWxlcnRUaGVtZTogc3RyaW5nO1xuICBlbWJlZGRlZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmxhdW5jaGVkKSB7XG4gICAgICAvLyBjbGVhciBwb3NpdGlvbiBhbmQgdGltZVxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnRpbWUgPSBudWxsO1xuXG4gICAgICAvLyBzZXQgaWNvbiBhbmQgc3R5bGluZ1xuICAgICAgdGhpcy5pY29uQ2xhc3MgPSBgYmhpLSR7dGhpcy5pY29ufWA7XG4gICAgICB0aGlzLmFsZXJ0VGhlbWUgPSBgJHt0aGlzLnRoZW1lfSB0b2FzdC1jb250YWluZXIgZW1iZWRkZWRgO1xuICAgICAgaWYgKHRoaXMuaGFzRGlhbG9ndWUpIHtcbiAgICAgICAgdGhpcy5hbGVydFRoZW1lICs9ICcgZGlhbG9ndWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gc2V0IGljb24gYW5kIHN0eWxpbmdcbiAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICB0aGlzLmFsZXJ0VGhlbWUgPSBgJHt0aGlzLnRoZW1lfSB0b2FzdC1jb250YWluZXIgZW1iZWRkZWRgO1xuICAgIGlmICh0aGlzLmhhc0RpYWxvZ3VlKSB7XG4gICAgICB0aGlzLmFsZXJ0VGhlbWUgKz0gJyBkaWFsb2d1ZSc7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzQ2xvc2VhYmxlKSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaGlkZSh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VkLmVtaXQoeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlZC5lbWl0KHsgY2xvc2VkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxufVxuIl19