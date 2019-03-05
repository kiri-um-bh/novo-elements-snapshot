/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
var NovoTipWellElement = /** @class */ (function () {
    function NovoTipWellElement(labels) {
        this.labels = labels;
        this.button = true;
        this.sanitize = true;
        this.confirmed = new EventEmitter();
        this.isActive = true;
        this.isActive = true;
        // Check if localStorage is enabled
        this.isLocalStorageEnabled = (function () {
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
        })();
    }
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
     * @name hideTip
     */
    /**
     * \@name hideTip
     * @return {?}
     */
    NovoTipWellElement.prototype.hideTip = /**
     * \@name hideTip
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
                    template: "\n        <div *ngIf=\"isActive\">\n            <div>\n                <i class=\"bhi-{{ icon }}\" *ngIf=\"icon\" [attr.data-automation-id]=\"'novo-tip-well-icon-' + name\"></i>\n                <p *ngIf=\"sanitize\" [attr.data-automation-id]=\"'novo-tip-well-tip-' + name\">{{ tip }}</p>\n                <p *ngIf=\"!sanitize\" [attr.data-automation-id]=\"'novo-tip-well-tip-' + name\" [innerHTML]=\"tip\"></p>\n            </div>\n            <button theme=\"dialogue\" (click)=\"hideTip()\" *ngIf=\"button\" [attr.data-automation-id]=\"'novo-tip-well-button-' + name\">{{ buttonText }}</button>\n        </div>\n    ",
                    host: {
                        '[class.active]': 'isActive',
                    }
                }] }
    ];
    NovoTipWellElement.ctorParameters = function () { return [
        { type: NovoLabelService }
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
    /** @type {?} */
    NovoTipWellElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aXAtd2VsbC9UaXBXZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFvQ0UsNEJBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBWjVDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFJdkIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBS3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQzs7Z0JBQ3hCLFNBQVMsR0FBRyxLQUFLO1lBQ3JCLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxFQUFFO2dCQUNwQyxJQUFJO29CQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNwQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsSUFBSSxDQUNWLG1OQUFtTixDQUNwTixDQUFDO2lCQUNIO2FBQ0Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUM5Qiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBVyxJQUFJLENBQUMsSUFBTSxDQUFDO1FBQzlDLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzFCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxLQUFLLEtBQUssQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvQ0FBTzs7OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRTtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDZtQkFTUDtvQkFDSCxJQUFJLEVBQUU7d0JBQ0osZ0JBQWdCLEVBQUUsVUFBVTtxQkFDN0I7aUJBQ0Y7OztnQkFqQlEsZ0JBQWdCOzs7dUJBbUJ0QixLQUFLO3NCQUVMLEtBQUs7NkJBRUwsS0FBSzt5QkFFTCxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSzs0QkFFTCxNQUFNOztJQW9EVCx5QkFBQztDQUFBLEFBakZELElBaUZDO1NBakVZLGtCQUFrQjs7O0lBQzdCLGtDQUNzQjs7SUFDdEIsaUNBQ1k7O0lBQ1osd0NBQ21COztJQUNuQixvQ0FDdUI7O0lBQ3ZCLGtDQUNhOztJQUNiLHNDQUN5Qjs7SUFDekIsdUNBQytCOztJQUUvQixzQ0FBeUI7O0lBQ3pCLG1EQUEyQjs7SUFDM0IsNkNBQXdCOztJQUVaLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aXAtd2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc0FjdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS17eyBpY29uIH19XCIgKm5nSWY9XCJpY29uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLWljb24tJyArIG5hbWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJzYW5pdGl6ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC10aXAtJyArIG5hbWVcIj57eyB0aXAgfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCIhc2FuaXRpemVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtdGlwLScgKyBuYW1lXCIgW2lubmVySFRNTF09XCJ0aXBcIj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIChjbGljayk9XCJoaWRlVGlwKClcIiAqbmdJZj1cImJ1dHRvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC1idXR0b24tJyArIG5hbWVcIj57eyBidXR0b25UZXh0IH19PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnaXNBY3RpdmUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGlwV2VsbEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpcDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgc2FuaXRpemU6IGJvb2xlYW4gPSB0cnVlO1xuICBAT3V0cHV0KClcbiAgY29uZmlybWVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNMb2NhbFN0b3JhZ2VFbmFibGVkOiBhbnk7XG4gIGxvY2FsU3RvcmFnZUtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIGlzIGVuYWJsZWRcbiAgICB0aGlzLmlzTG9jYWxTdG9yYWdlRW5hYmxlZCA9ICgoKSA9PiB7XG4gICAgICBsZXQgaXNFbmFibGVkID0gZmFsc2U7XG4gICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbHNUZXN0JywgJzEnKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbHNUZXN0Jyk7XG4gICAgICAgICAgaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICdUaGlzIHdlYiBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgc3RvcmluZyBzZXR0aW5ncyBsb2NhbGx5LiBJbiBTYWZhcmksIHRoZSBtb3N0IGNvbW1vbiBjYXVzZSBvZiB0aGlzIGlzIHVzaW5nIFwiUHJpdmF0ZSBCcm93c2luZyBNb2RlXCIuIFNvbWUgc2V0dGluZ3MgbWF5IG5vdCBzYXZlIG9yIHNvbWUgZmVhdHVyZXMgbWF5IG5vdCB3b3JrIHByb3Blcmx5IGZvciB5b3UuJyxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNFbmFibGVkO1xuICAgIH0pKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICcnO1xuICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMuYnV0dG9uVGV4dCB8fCB0aGlzLmxhYmVscy5va0dvdEl0O1xuICAgIHRoaXMuYnV0dG9uID0gdHlwZW9mIHRoaXMuYnV0dG9uID09PSAnc3RyaW5nJyA/IHRoaXMuYnV0dG9uID09PSAndHJ1ZScgOiB0aGlzLmJ1dHRvbjtcbiAgICB0aGlzLmljb24gPSB0aGlzLmljb24gfHwgbnVsbDtcbiAgICAvLyBTZXQgYSAoc2VtaSkgdW5pcXVlIG5hbWUgZm9yIHRoZSB0aXAtd2VsbFxuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5ID0gYG5vdm8tdHdfJHt0aGlzLm5hbWV9YDtcbiAgICAvLyBDaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkKSB7XG4gICAgICBsZXQgc3RvcmVkVmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KSk7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gc3RvcmVkVmFsdWUgIT09IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWRlVGlwXG4gICAqL1xuICBoaWRlVGlwKCkge1xuICAgIGlmICh0aGlzLmlzTG9jYWxTdG9yYWdlRW5hYmxlZCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XG4gICAgfVxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpcm1lZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==