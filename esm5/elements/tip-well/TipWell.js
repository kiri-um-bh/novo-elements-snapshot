/**
 * @fileoverview added by tsickle
 * Generated from: elements/tip-well/TipWell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { DomSanitizer } from '@angular/platform-browser';
var NovoTipWellElement = /** @class */ (function () {
    function NovoTipWellElement(labels, sanitizer) {
        this.labels = labels;
        this.sanitizer = sanitizer;
        this.button = true;
        this.sanitize = true;
        this.confirmed = new EventEmitter();
        this.isActive = true;
        this.isActive = true;
        // Check if localStorage is enabled
        this.isLocalStorageEnabled = ((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isEnabled = false;
            if (typeof localStorage === 'object') {
                try {
                    localStorage.setItem('lsTest', '1');
                    localStorage.removeItem('lsTest');
                    isEnabled = true;
                }
                catch (e) {
                    console.warn('This web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
                }
            }
            return isEnabled;
        }))();
    }
    Object.defineProperty(NovoTipWellElement.prototype, "tipWithStyles", {
        // Trusts the HTML in order to show CSS styles
        get: 
        // Trusts the HTML in order to show CSS styles
        /**
         * @return {?}
         */
        function () {
            if (!this._tipWithStyles || this._lastTipStyled !== this.tip) {
                this._tipWithStyles = this.sanitizer.bypassSecurityTrustHtml(this.tip);
                this._lastTipStyled = this.tip;
            }
            return this._tipWithStyles;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoTipWellElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tip = this.tip || '';
        this.buttonText = this.buttonText || this.labels.okGotIt;
        this.button = typeof this.button === 'string' ? this.button === 'true' : this.button;
        this.icon = this.icon || null;
        // Set a (semi) unique name for the tip-well
        this.name = this.name || Math.round(Math.random() * 100);
        this.localStorageKey = "novo-tw_" + this.name;
        // Check localStorage for state
        if (this.isLocalStorageEnabled) {
            /** @type {?} */
            var storedValue = JSON.parse(localStorage.getItem(this.localStorageKey));
            this.isActive = storedValue !== false;
        }
    };
    /**
     * @return {?}
     */
    NovoTipWellElement.prototype.hideTip = /**
     * @return {?}
     */
    function () {
        if (this.isLocalStorageEnabled) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(false));
        }
        this.isActive = false;
        this.confirmed.emit();
    };
    NovoTipWellElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tip-well',
                    template: "\n    <div *ngIf=\"isActive\">\n      <div>\n        <i class=\"bhi-{{ icon }}\" *ngIf=\"icon\" [attr.data-automation-id]=\"'novo-tip-well-icon-' + name\"></i>\n        <p *ngIf=\"sanitize\" [attr.data-automation-id]=\"'novo-tip-well-tip-' + name\">{{ tip }}</p>\n        <p *ngIf=\"!sanitize\" [attr.data-automation-id]=\"'novo-tip-well-tip-' + name\" [innerHTML]=\"tipWithStyles\"></p>\n      </div>\n      <button theme=\"dialogue\" (click)=\"hideTip()\" *ngIf=\"button\" [attr.data-automation-id]=\"'novo-tip-well-button-' + name\">\n        {{ buttonText }}\n      </button>\n    </div>\n  ",
                    host: {
                        '[class.active]': 'isActive',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoTipWellElement.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: DomSanitizer }
    ]; };
    NovoTipWellElement.propDecorators = {
        name: [{ type: Input }],
        tip: [{ type: Input }],
        buttonText: [{ type: Input }],
        button: [{ type: Input }],
        icon: [{ type: Input }],
        sanitize: [{ type: Input }],
        confirmed: [{ type: Output }]
    };
    return NovoTipWellElement;
}());
export { NovoTipWellElement };
if (false) {
    /** @type {?} */
    NovoTipWellElement.prototype.name;
    /** @type {?} */
    NovoTipWellElement.prototype.tip;
    /** @type {?} */
    NovoTipWellElement.prototype.buttonText;
    /** @type {?} */
    NovoTipWellElement.prototype.button;
    /** @type {?} */
    NovoTipWellElement.prototype.icon;
    /** @type {?} */
    NovoTipWellElement.prototype.sanitize;
    /** @type {?} */
    NovoTipWellElement.prototype.confirmed;
    /** @type {?} */
    NovoTipWellElement.prototype.isActive;
    /** @type {?} */
    NovoTipWellElement.prototype.isLocalStorageEnabled;
    /** @type {?} */
    NovoTipWellElement.prototype.localStorageKey;
    /**
     * @type {?}
     * @private
     */
    NovoTipWellElement.prototype._tipWithStyles;
    /**
     * @type {?}
     * @private
     */
    NovoTipWellElement.prototype._lastTipStyled;
    /**
     * @type {?}
     * @private
     */
    NovoTipWellElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoTipWellElement.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aXAtd2VsbC9UaXBXZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUVuRTtJQXlDRSw0QkFBb0IsTUFBd0IsRUFBVSxTQUF1QjtRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFmN0UsV0FBTSxHQUFZLElBQUksQ0FBQztRQUl2QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9CLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFRdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxxQkFBcUIsR0FBRzs7O1FBQUM7O2dCQUN4QixTQUFTLEdBQUcsS0FBSztZQUNyQixJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsSUFBSTtvQkFDRixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDcEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDbEI7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FDVixtTkFBbU4sQ0FDcE4sQ0FBQztpQkFDSDthQUNGO1lBQ0QsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUNQLENBQUM7SUFHRCxzQkFBSSw2Q0FBYTtRQURqQiw4Q0FBOEM7Ozs7OztRQUM5QztZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQzlCLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFXLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDOUMsK0JBQStCO1FBQy9CLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFOztnQkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLEtBQUssS0FBSyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQTNGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxxbEJBV1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGdCQUFnQixFQUFFLFVBQVU7cUJBQzdCO2lCQUNGOzs7O2dCQXBCUSxnQkFBZ0I7Z0JBQ2hCLFlBQVk7Ozt1QkFxQmxCLEtBQUs7c0JBRUwsS0FBSzs2QkFFTCxLQUFLO3lCQUVMLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLOzRCQUVMLE1BQU07O0lBNkRULHlCQUFDO0NBQUEsQUE1RkQsSUE0RkM7U0ExRVksa0JBQWtCOzs7SUFDN0Isa0NBQ3NCOztJQUN0QixpQ0FDWTs7SUFDWix3Q0FDbUI7O0lBQ25CLG9DQUN1Qjs7SUFDdkIsa0NBQ2E7O0lBQ2Isc0NBQ3lCOztJQUN6Qix1Q0FDK0I7O0lBRS9CLHNDQUF5Qjs7SUFDekIsbURBQTJCOztJQUMzQiw2Q0FBd0I7Ozs7O0lBRXhCLDRDQUFpQzs7Ozs7SUFDakMsNENBQStCOzs7OztJQUVuQixvQ0FBZ0M7Ozs7O0lBQUUsdUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpcC13ZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiaXNBY3RpdmVcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLXt7IGljb24gfX1cIiAqbmdJZj1cImljb25cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtaWNvbi0nICsgbmFtZVwiPjwvaT5cbiAgICAgICAgPHAgKm5nSWY9XCJzYW5pdGl6ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC10aXAtJyArIG5hbWVcIj57eyB0aXAgfX08L3A+XG4gICAgICAgIDxwICpuZ0lmPVwiIXNhbml0aXplXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLXRpcC0nICsgbmFtZVwiIFtpbm5lckhUTUxdPVwidGlwV2l0aFN0eWxlc1wiPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgKGNsaWNrKT1cImhpZGVUaXAoKVwiICpuZ0lmPVwiYnV0dG9uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLWJ1dHRvbi0nICsgbmFtZVwiPlxuICAgICAgICB7eyBidXR0b25UZXh0IH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdpc0FjdGl2ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaXBXZWxsRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzYW5pdGl6ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKVxuICBjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBpc0xvY2FsU3RvcmFnZUVuYWJsZWQ6IGFueTtcbiAgbG9jYWxTdG9yYWdlS2V5OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdGlwV2l0aFN0eWxlczogU2FmZUh0bWw7XG4gIHByaXZhdGUgX2xhc3RUaXBTdHlsZWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIC8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyBlbmFibGVkXG4gICAgdGhpcy5pc0xvY2FsU3RvcmFnZUVuYWJsZWQgPSAoKCkgPT4ge1xuICAgICAgbGV0IGlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xzVGVzdCcsICcxJyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xzVGVzdCcpO1xuICAgICAgICAgIGlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAnVGhpcyB3ZWIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHN0b3Jpbmcgc2V0dGluZ3MgbG9jYWxseS4gSW4gU2FmYXJpLCB0aGUgbW9zdCBjb21tb24gY2F1c2Ugb2YgdGhpcyBpcyB1c2luZyBcIlByaXZhdGUgQnJvd3NpbmcgTW9kZVwiLiBTb21lIHNldHRpbmdzIG1heSBub3Qgc2F2ZSBvciBzb21lIGZlYXR1cmVzIG1heSBub3Qgd29yayBwcm9wZXJseSBmb3IgeW91LicsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRW5hYmxlZDtcbiAgICB9KSgpO1xuICB9XG5cbiAgLy8gVHJ1c3RzIHRoZSBIVE1MIGluIG9yZGVyIHRvIHNob3cgQ1NTIHN0eWxlc1xuICBnZXQgdGlwV2l0aFN0eWxlcygpOiBTYWZlSHRtbCB7XG4gICAgaWYgKCF0aGlzLl90aXBXaXRoU3R5bGVzIHx8IHRoaXMuX2xhc3RUaXBTdHlsZWQgIT09IHRoaXMudGlwKSB7XG4gICAgICB0aGlzLl90aXBXaXRoU3R5bGVzID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy50aXApO1xuICAgICAgdGhpcy5fbGFzdFRpcFN0eWxlZCA9IHRoaXMudGlwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGlwV2l0aFN0eWxlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJyc7XG4gICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5idXR0b25UZXh0IHx8IHRoaXMubGFiZWxzLm9rR290SXQ7XG4gICAgdGhpcy5idXR0b24gPSB0eXBlb2YgdGhpcy5idXR0b24gPT09ICdzdHJpbmcnID8gdGhpcy5idXR0b24gPT09ICd0cnVlJyA6IHRoaXMuYnV0dG9uO1xuICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbiB8fCBudWxsO1xuICAgIC8vIFNldCBhIChzZW1pKSB1bmlxdWUgbmFtZSBmb3IgdGhlIHRpcC13ZWxsXG4gICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkgPSBgbm92by10d18ke3RoaXMubmFtZX1gO1xuICAgIC8vIENoZWNrIGxvY2FsU3RvcmFnZSBmb3Igc3RhdGVcbiAgICBpZiAodGhpcy5pc0xvY2FsU3RvcmFnZUVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSkpO1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHN0b3JlZFZhbHVlICE9PSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoaWRlVGlwKCkge1xuICAgIGlmICh0aGlzLmlzTG9jYWxTdG9yYWdlRW5hYmxlZCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XG4gICAgfVxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpcm1lZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==