/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class NovoToastElement {
    /**
     * @param {?} sanitizer
     */
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
    /**
     * @param {?} m
     * @return {?}
     */
    set message(m) {
        this._message = this.sanitizer.bypassSecurityTrustHtml(m);
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // set icon and styling
        this.iconClass = `bhi-${this.icon}`;
        this.alertTheme = `${this.theme} toast-container embedded`;
        if (this.hasDialogue) {
            this.alertTheme += ' dialogue';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} event
     * @return {?}
     */
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
            }] }
];
/** @nocollapse */
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
if (false) {
    /** @type {?} */
    NovoToastElement.prototype.theme;
    /** @type {?} */
    NovoToastElement.prototype.icon;
    /** @type {?} */
    NovoToastElement.prototype.title;
    /** @type {?} */
    NovoToastElement.prototype.hasDialogue;
    /** @type {?} */
    NovoToastElement.prototype.link;
    /** @type {?} */
    NovoToastElement.prototype.isCloseable;
    /** @type {?} */
    NovoToastElement.prototype.closed;
    /** @type {?} */
    NovoToastElement.prototype._message;
    /** @type {?} */
    NovoToastElement.prototype.show;
    /** @type {?} */
    NovoToastElement.prototype.animate;
    /** @type {?} */
    NovoToastElement.prototype.parent;
    /** @type {?} */
    NovoToastElement.prototype.launched;
    /** @type {?} */
    NovoToastElement.prototype.position;
    /** @type {?} */
    NovoToastElement.prototype.time;
    /** @type {?} */
    NovoToastElement.prototype.iconClass;
    /** @type {?} */
    NovoToastElement.prototype.alertTheme;
    /** @type {?} */
    NovoToastElement.prototype.embedded;
    /**
     * @type {?}
     * @private
     */
    NovoToastElement.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUE4Qm5FLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUErQjNCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUE3QjNDLFVBQUssR0FBVyxRQUFRLENBQUM7UUFFekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUk3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQU03QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0MsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9vQixDQUFDOzs7OztJQWxCL0MsSUFDSSxPQUFPLENBQUMsQ0FBUztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQWlCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWpCLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSywyQkFBMkIsQ0FBQztZQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUF1QjtRQUNqQyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssMkJBQTJCLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUE3R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLGNBQWMsRUFBRSxNQUFNO29CQUN0QixpQkFBaUIsRUFBRSxTQUFTO29CQUM1QixrQkFBa0IsRUFBRSxVQUFVO29CQUM5QixTQUFTLEVBQUUsc0NBQXNDO2lCQUNsRDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJQO2FBQ0o7Ozs7WUE3QlEsWUFBWTs7O29CQStCbEIsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSzttQkFFTCxLQUFLOzBCQUVMLEtBQUs7c0JBRUwsS0FBSztxQkFJTCxNQUFNOzs7O0lBaEJQLGlDQUN5Qjs7SUFDekIsZ0NBQ3lCOztJQUN6QixpQ0FDYzs7SUFDZCx1Q0FDNkI7O0lBQzdCLGdDQUNhOztJQUNiLHVDQUM2Qjs7SUFLN0Isa0NBQytDOztJQUUvQyxvQ0FBbUI7O0lBQ25CLGdDQUFzQjs7SUFDdEIsbUNBQXlCOztJQUN6QixrQ0FBbUI7O0lBQ25CLG9DQUEwQjs7SUFDMUIsb0NBQWM7O0lBQ2QsZ0NBQVU7O0lBQ1YscUNBQWtCOztJQUNsQixzQ0FBbUI7O0lBQ25CLG9DQUFjOzs7OztJQUVGLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdG9hc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnYWxlcnRUaGVtZScsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICdzaG93JyxcbiAgICAnW2NsYXNzLmFuaW1hdGVdJzogJ2FuaW1hdGUnLFxuICAgICdbY2xhc3MuZW1iZWRkZWRdJzogJ2VtYmVkZGVkJyxcbiAgICAnKGNsaWNrKSc6ICchaXNDbG9zZWFibGUgJiYgY2xpY2tIYW5kbGVyKCRldmVudCknLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtaWNvblwiPlxuICAgICAgICAgICAgPGkgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoNSAqbmdJZj1cInRpdGxlXCI+e3t0aXRsZX19PC9oNT5cbiAgICAgICAgICAgIDxwICpuZ0lmPVwiX21lc3NhZ2VcIiBbY2xhc3MubWVzc2FnZS1vbmx5XT1cIiF0aXRsZVwiIFtpbm5lckh0bWxdPVwiX21lc3NhZ2VcIj48L3A+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibGlua1wiIGNsYXNzPVwibGluay1nZW5lcmF0ZWRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibGlua1wiIG9uZm9jdXM9XCJ0aGlzLnNlbGVjdCgpO1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ3VlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtaWNvblwiICpuZ0lmPVwiaXNDbG9zZWFibGVcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ub2FzdEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnZGFuZ2VyJztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nID0gJ2NhdXRpb24nO1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoYXNEaWFsb2d1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBsaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGlzQ2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBtZXNzYWdlKG06IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChtKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgY2xvc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfbWVzc2FnZTogU2FmZUh0bWw7XG4gIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYW5pbWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwYXJlbnQ6IGFueSA9IG51bGw7XG4gIGxhdW5jaGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHBvc2l0aW9uOiBhbnk7XG4gIHRpbWU6IGFueTtcbiAgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIGFsZXJ0VGhlbWU6IHN0cmluZztcbiAgZW1iZWRkZWQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5sYXVuY2hlZCkge1xuICAgICAgLy8gY2xlYXIgcG9zaXRpb24gYW5kIHRpbWVcbiAgICAgIHRoaXMucG9zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy50aW1lID0gbnVsbDtcblxuICAgICAgLy8gc2V0IGljb24gYW5kIHN0eWxpbmdcbiAgICAgIHRoaXMuaWNvbkNsYXNzID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgICAgdGhpcy5hbGVydFRoZW1lID0gYCR7dGhpcy50aGVtZX0gdG9hc3QtY29udGFpbmVyIGVtYmVkZGVkYDtcbiAgICAgIGlmICh0aGlzLmhhc0RpYWxvZ3VlKSB7XG4gICAgICAgIHRoaXMuYWxlcnRUaGVtZSArPSAnIGRpYWxvZ3VlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgdGhpcy5pY29uQ2xhc3MgPSBgYmhpLSR7dGhpcy5pY29ufWA7XG4gICAgdGhpcy5hbGVydFRoZW1lID0gYCR7dGhpcy50aGVtZX0gdG9hc3QtY29udGFpbmVyIGVtYmVkZGVkYDtcbiAgICBpZiAodGhpcy5oYXNEaWFsb2d1ZSkge1xuICAgICAgdGhpcy5hbGVydFRoZW1lICs9ICcgZGlhbG9ndWUnO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Nsb3NlYWJsZSkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50LmhpZGUodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KHsgY2xvc2VkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQuaGlkZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZWQuZW1pdCh7IGNsb3NlZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==