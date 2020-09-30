/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */
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
    /**
     * @type {?}
     * @private
     */
    NovoToastElement.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkU7SUEyREUsMEJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUE3QjNDLFVBQUssR0FBVyxRQUFRLENBQUM7UUFFekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUk3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQU03QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0MsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9vQixDQUFDO0lBbEIvQyxzQkFDSSxxQ0FBTzs7Ozs7UUFEWCxVQUNZLENBQVM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7OztPQUFBOzs7O0lBaUJELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVqQix1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFPLElBQUksQ0FBQyxJQUFNLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBTSxJQUFJLENBQUMsS0FBSyw4QkFBMkIsQ0FBQztZQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxPQUF1QjtRQUNqQyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFPLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBTSxJQUFJLENBQUMsS0FBSyw4QkFBMkIsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsSUFBSSxXQUFXLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDcEM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsZ0NBQUs7Ozs7SUFBTCxVQUFNLEtBQUs7UUFDVCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQTdHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsWUFBWTt3QkFDdkIsY0FBYyxFQUFFLE1BQU07d0JBQ3RCLGlCQUFpQixFQUFFLFNBQVM7d0JBQzVCLGtCQUFrQixFQUFFLFVBQVU7d0JBQzlCLFNBQVMsRUFBRSxzQ0FBc0M7cUJBQ2xEO29CQUNELFFBQVEsRUFBRSxzc0JBaUJQO2lCQUNKOzs7O2dCQTdCUSxZQUFZOzs7d0JBK0JsQixLQUFLO3VCQUVMLEtBQUs7d0JBRUwsS0FBSzs4QkFFTCxLQUFLO3VCQUVMLEtBQUs7OEJBRUwsS0FBSzswQkFFTCxLQUFLO3lCQUlMLE1BQU07O0lBaUVULHVCQUFDO0NBQUEsQUE5R0QsSUE4R0M7U0FsRlksZ0JBQWdCOzs7SUFDM0IsaUNBQ3lCOztJQUN6QixnQ0FDeUI7O0lBQ3pCLGlDQUNjOztJQUNkLHVDQUM2Qjs7SUFDN0IsZ0NBQ2E7O0lBQ2IsdUNBQzZCOztJQUs3QixrQ0FDK0M7O0lBRS9DLG9DQUFtQjs7SUFDbkIsZ0NBQXNCOztJQUN0QixtQ0FBeUI7O0lBQ3pCLGtDQUFtQjs7SUFDbkIsb0NBQTBCOztJQUMxQixvQ0FBYzs7SUFDZCxnQ0FBVTs7SUFDVixxQ0FBa0I7O0lBQ2xCLHNDQUFtQjs7SUFDbkIsb0NBQWM7Ozs7O0lBRUYscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10b2FzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdhbGVydFRoZW1lJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJ3Nob3cnLFxuICAgICdbY2xhc3MuYW5pbWF0ZV0nOiAnYW5pbWF0ZScsXG4gICAgJ1tjbGFzcy5lbWJlZGRlZF0nOiAnZW1iZWRkZWQnLFxuICAgICcoY2xpY2spJzogJyFpc0Nsb3NlYWJsZSAmJiBjbGlja0hhbmRsZXIoJGV2ZW50KScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1pY29uXCI+XG4gICAgICAgICAgICA8aSBbbmdDbGFzc109XCJpY29uQ2xhc3NcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtY29udGVudFwiPlxuICAgICAgICAgICAgPGg1ICpuZ0lmPVwidGl0bGVcIj57e3RpdGxlfX08L2g1PlxuICAgICAgICAgICAgPHAgKm5nSWY9XCJfbWVzc2FnZVwiIFtjbGFzcy5tZXNzYWdlLW9ubHldPVwiIXRpdGxlXCIgW2lubmVySHRtbF09XCJfbWVzc2FnZVwiPjwvcD5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsaW5rXCIgY2xhc3M9XCJsaW5rLWdlbmVyYXRlZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJsaW5rXCIgb25mb2N1cz1cInRoaXMuc2VsZWN0KCk7XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9ndWVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1pY29uXCIgKm5nSWY9XCJpc0Nsb3NlYWJsZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RvYXN0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdkYW5nZXInO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmcgPSAnY2F1dGlvbic7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhhc0RpYWxvZ3VlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGxpbms6IHN0cmluZztcbiAgQElucHV0KClcbiAgaXNDbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IG1lc3NhZ2UobTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKG0pO1xuICB9XG4gIEBPdXRwdXQoKVxuICBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9tZXNzYWdlOiBTYWZlSHRtbDtcbiAgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBhbmltYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHBhcmVudDogYW55ID0gbnVsbDtcbiAgbGF1bmNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9zaXRpb246IGFueTtcbiAgdGltZTogYW55O1xuICBpY29uQ2xhc3M6IHN0cmluZztcbiAgYWxlcnRUaGVtZTogc3RyaW5nO1xuICBlbWJlZGRlZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmxhdW5jaGVkKSB7XG4gICAgICAvLyBjbGVhciBwb3NpdGlvbiBhbmQgdGltZVxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnRpbWUgPSBudWxsO1xuXG4gICAgICAvLyBzZXQgaWNvbiBhbmQgc3R5bGluZ1xuICAgICAgdGhpcy5pY29uQ2xhc3MgPSBgYmhpLSR7dGhpcy5pY29ufWA7XG4gICAgICB0aGlzLmFsZXJ0VGhlbWUgPSBgJHt0aGlzLnRoZW1lfSB0b2FzdC1jb250YWluZXIgZW1iZWRkZWRgO1xuICAgICAgaWYgKHRoaXMuaGFzRGlhbG9ndWUpIHtcbiAgICAgICAgdGhpcy5hbGVydFRoZW1lICs9ICcgZGlhbG9ndWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gc2V0IGljb24gYW5kIHN0eWxpbmdcbiAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICB0aGlzLmFsZXJ0VGhlbWUgPSBgJHt0aGlzLnRoZW1lfSB0b2FzdC1jb250YWluZXIgZW1iZWRkZWRgO1xuICAgIGlmICh0aGlzLmhhc0RpYWxvZ3VlKSB7XG4gICAgICB0aGlzLmFsZXJ0VGhlbWUgKz0gJyBkaWFsb2d1ZSc7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzQ2xvc2VhYmxlKSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaGlkZSh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VkLmVtaXQoeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlZC5lbWl0KHsgY2xvc2VkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxufVxuIl19