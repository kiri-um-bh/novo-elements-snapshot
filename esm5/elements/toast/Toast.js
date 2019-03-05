/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
        set: /**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            this._message = this.sanitizer.bypassSecurityTrustHtml(m);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoToastElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @param {?=} changes
     * @return {?}
     */
    NovoToastElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        // set icon and styling
        this.iconClass = "bhi-" + this.icon;
        this.alertTheme = this.theme + " toast-container embedded";
        if (this.hasDialogue) {
            this.alertTheme += ' dialogue';
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoToastElement.prototype.clickHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    /**
     * @param {?} event
     * @return {?}
     */
    NovoToastElement.prototype.close = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
                    template: "\n        <div class=\"toast-icon\">\n            <i [ngClass]=\"iconClass\"></i>\n        </div>\n        <div class=\"toast-content\">\n            <h5 *ngIf=\"title\">{{title}}</h5>\n            <p *ngIf=\"_message\" [class.message-only]=\"!title\" [innerHtml]=\"_message\"></p>\n            <div *ngIf=\"link\" class=\"link-generated\">\n                <input type=\"text\" [value]=\"link\" onfocus=\"this.select();\"/>\n            </div>\n            <div class=\"dialogue\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"close-icon\" *ngIf=\"isCloseable\" (click)=\"close($event)\">\n            <i class=\"bhi-times\"></i>\n        </div>\n    "
                }] }
    ];
    NovoToastElement.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
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
    return NovoToastElement;
}());
export { NovoToastElement };
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
    /** @type {?} */
    NovoToastElement.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkU7SUEyREUsMEJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUE3QjNDLFVBQUssR0FBVyxRQUFRLENBQUM7UUFFekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUk3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQU03QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0MsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9vQixDQUFDO0lBbEIvQyxzQkFDSSxxQ0FBTzs7Ozs7UUFEWCxVQUNZLENBQVM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7OztPQUFBOzs7O0lBaUJELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVqQix1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFPLElBQUksQ0FBQyxJQUFNLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBTSxJQUFJLENBQUMsS0FBSyw4QkFBMkIsQ0FBQztZQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxPQUF1QjtRQUNqQyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFPLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBTSxJQUFJLENBQUMsS0FBSyw4QkFBMkIsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsSUFBSSxXQUFXLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDcEM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsZ0NBQUs7Ozs7SUFBTCxVQUFNLEtBQUs7UUFDVCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQTdHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsWUFBWTt3QkFDdkIsY0FBYyxFQUFFLE1BQU07d0JBQ3RCLGlCQUFpQixFQUFFLFNBQVM7d0JBQzVCLGtCQUFrQixFQUFFLFVBQVU7d0JBQzlCLFNBQVMsRUFBRSxzQ0FBc0M7cUJBQ2xEO29CQUNELFFBQVEsRUFBRSxzc0JBaUJQO2lCQUNKOzs7Z0JBN0JRLFlBQVk7Ozt3QkErQmxCLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLOzhCQUVMLEtBQUs7dUJBRUwsS0FBSzs4QkFFTCxLQUFLOzBCQUVMLEtBQUs7eUJBSUwsTUFBTTs7SUFpRVQsdUJBQUM7Q0FBQSxBQTlHRCxJQThHQztTQWxGWSxnQkFBZ0I7OztJQUMzQixpQ0FDeUI7O0lBQ3pCLGdDQUN5Qjs7SUFDekIsaUNBQ2M7O0lBQ2QsdUNBQzZCOztJQUM3QixnQ0FDYTs7SUFDYix1Q0FDNkI7O0lBSzdCLGtDQUMrQzs7SUFFL0Msb0NBQW1COztJQUNuQixnQ0FBc0I7O0lBQ3RCLG1DQUF5Qjs7SUFDekIsa0NBQW1COztJQUNuQixvQ0FBMEI7O0lBQzFCLG9DQUFjOztJQUNkLGdDQUFVOztJQUNWLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQixvQ0FBYzs7SUFFRixxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRvYXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2FsZXJ0VGhlbWUnLFxuICAgICdbY2xhc3Muc2hvd10nOiAnc2hvdycsXG4gICAgJ1tjbGFzcy5hbmltYXRlXSc6ICdhbmltYXRlJyxcbiAgICAnW2NsYXNzLmVtYmVkZGVkXSc6ICdlbWJlZGRlZCcsXG4gICAgJyhjbGljayknOiAnIWlzQ2xvc2VhYmxlICYmIGNsaWNrSGFuZGxlcigkZXZlbnQpJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWljb25cIj5cbiAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDUgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvaDU+XG4gICAgICAgICAgICA8cCAqbmdJZj1cIl9tZXNzYWdlXCIgW2NsYXNzLm1lc3NhZ2Utb25seV09XCIhdGl0bGVcIiBbaW5uZXJIdG1sXT1cIl9tZXNzYWdlXCI+PC9wPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxpbmtcIiBjbGFzcz1cImxpbmstZ2VuZXJhdGVkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImxpbmtcIiBvbmZvY3VzPVwidGhpcy5zZWxlY3QoKTtcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWljb25cIiAqbmdJZj1cImlzQ2xvc2VhYmxlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVG9hc3RFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJ2Rhbmdlcic7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZyA9ICdjYXV0aW9uJztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGFzRGlhbG9ndWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbGluazogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpc0Nsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgbWVzc2FnZShtOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwobSk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX21lc3NhZ2U6IFNhZmVIdG1sO1xuICBzaG93OiBib29sZWFuID0gZmFsc2U7XG4gIGFuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcGFyZW50OiBhbnkgPSBudWxsO1xuICBsYXVuY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3NpdGlvbjogYW55O1xuICB0aW1lOiBhbnk7XG4gIGljb25DbGFzczogc3RyaW5nO1xuICBhbGVydFRoZW1lOiBzdHJpbmc7XG4gIGVtYmVkZGVkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgIC8vIGNsZWFyIHBvc2l0aW9uIGFuZCB0aW1lXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMudGltZSA9IG51bGw7XG5cbiAgICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgICBpZiAodGhpcy5oYXNEaWFsb2d1ZSkge1xuICAgICAgICB0aGlzLmFsZXJ0VGhlbWUgKz0gJyBkaWFsb2d1ZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBzZXQgaWNvbiBhbmQgc3R5bGluZ1xuICAgIHRoaXMuaWNvbkNsYXNzID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgaWYgKHRoaXMuaGFzRGlhbG9ndWUpIHtcbiAgICAgIHRoaXMuYWxlcnRUaGVtZSArPSAnIGRpYWxvZ3VlJztcbiAgICB9XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNDbG9zZWFibGUpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCh7IGNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LmhpZGUodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=