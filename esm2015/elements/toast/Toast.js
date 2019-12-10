/**
 * @fileoverview added by tsickle
 * Generated from: elements/toast/Toast.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBOEJuRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBK0IzQixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBN0IzQyxVQUFLLEdBQVcsUUFBUSxDQUFDO1FBRXpCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFJekIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFJN0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFNN0IsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9DLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ25CLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFPb0IsQ0FBQzs7Ozs7SUFsQi9DLElBQ0ksT0FBTyxDQUFDLENBQVM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFpQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVqQix1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssMkJBQTJCLENBQUM7WUFDM0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBdUI7UUFDakMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLDJCQUEyQixDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNwQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7O1lBN0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxZQUFZO29CQUN2QixjQUFjLEVBQUUsTUFBTTtvQkFDdEIsaUJBQWlCLEVBQUUsU0FBUztvQkFDNUIsa0JBQWtCLEVBQUUsVUFBVTtvQkFDOUIsU0FBUyxFQUFFLHNDQUFzQztpQkFDbEQ7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDthQUNKOzs7O1lBN0JRLFlBQVk7OztvQkErQmxCLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLOzBCQUVMLEtBQUs7bUJBRUwsS0FBSzswQkFFTCxLQUFLO3NCQUVMLEtBQUs7cUJBSUwsTUFBTTs7OztJQWhCUCxpQ0FDeUI7O0lBQ3pCLGdDQUN5Qjs7SUFDekIsaUNBQ2M7O0lBQ2QsdUNBQzZCOztJQUM3QixnQ0FDYTs7SUFDYix1Q0FDNkI7O0lBSzdCLGtDQUMrQzs7SUFFL0Msb0NBQW1COztJQUNuQixnQ0FBc0I7O0lBQ3RCLG1DQUF5Qjs7SUFDekIsa0NBQW1COztJQUNuQixvQ0FBMEI7O0lBQzFCLG9DQUFjOztJQUNkLGdDQUFVOztJQUNWLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQixvQ0FBYzs7Ozs7SUFFRixxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRvYXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2FsZXJ0VGhlbWUnLFxuICAgICdbY2xhc3Muc2hvd10nOiAnc2hvdycsXG4gICAgJ1tjbGFzcy5hbmltYXRlXSc6ICdhbmltYXRlJyxcbiAgICAnW2NsYXNzLmVtYmVkZGVkXSc6ICdlbWJlZGRlZCcsXG4gICAgJyhjbGljayknOiAnIWlzQ2xvc2VhYmxlICYmIGNsaWNrSGFuZGxlcigkZXZlbnQpJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWljb25cIj5cbiAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDUgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvaDU+XG4gICAgICAgICAgICA8cCAqbmdJZj1cIl9tZXNzYWdlXCIgW2NsYXNzLm1lc3NhZ2Utb25seV09XCIhdGl0bGVcIiBbaW5uZXJIdG1sXT1cIl9tZXNzYWdlXCI+PC9wPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxpbmtcIiBjbGFzcz1cImxpbmstZ2VuZXJhdGVkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImxpbmtcIiBvbmZvY3VzPVwidGhpcy5zZWxlY3QoKTtcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWljb25cIiAqbmdJZj1cImlzQ2xvc2VhYmxlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVG9hc3RFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJ2Rhbmdlcic7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZyA9ICdjYXV0aW9uJztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGFzRGlhbG9ndWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbGluazogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpc0Nsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgbWVzc2FnZShtOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwobSk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX21lc3NhZ2U6IFNhZmVIdG1sO1xuICBzaG93OiBib29sZWFuID0gZmFsc2U7XG4gIGFuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcGFyZW50OiBhbnkgPSBudWxsO1xuICBsYXVuY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3NpdGlvbjogYW55O1xuICB0aW1lOiBhbnk7XG4gIGljb25DbGFzczogc3RyaW5nO1xuICBhbGVydFRoZW1lOiBzdHJpbmc7XG4gIGVtYmVkZGVkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgIC8vIGNsZWFyIHBvc2l0aW9uIGFuZCB0aW1lXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMudGltZSA9IG51bGw7XG5cbiAgICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgICBpZiAodGhpcy5oYXNEaWFsb2d1ZSkge1xuICAgICAgICB0aGlzLmFsZXJ0VGhlbWUgKz0gJyBkaWFsb2d1ZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBzZXQgaWNvbiBhbmQgc3R5bGluZ1xuICAgIHRoaXMuaWNvbkNsYXNzID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgaWYgKHRoaXMuaGFzRGlhbG9ndWUpIHtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSArPSAnIGRpYWxvZ3VlJztcbiAgICB9XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNDbG9zZWFibGUpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCh7IGNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LmhpZGUodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=