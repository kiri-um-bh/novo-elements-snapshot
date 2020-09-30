/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
export class NovoTipWellElement {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
        this.button = true;
        this.sanitize = true;
        this.confirmed = new EventEmitter();
        this.isActive = true;
        this.isActive = true;
        // Check if localStorage is enabled
        this.isLocalStorageEnabled = ((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let isEnabled = false;
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tip = this.tip || '';
        this.buttonText = this.buttonText || this.labels.okGotIt;
        this.button = typeof this.button === 'string' ? this.button === 'true' : this.button;
        this.icon = this.icon || null;
        // Set a (semi) unique name for the tip-well
        this.name = this.name || Math.round(Math.random() * 100);
        this.localStorageKey = `novo-tw_${this.name}`;
        // Check localStorage for state
        if (this.isLocalStorageEnabled) {
            /** @type {?} */
            let storedValue = JSON.parse(localStorage.getItem(this.localStorageKey));
            this.isActive = storedValue !== false;
        }
    }
    /**
     * \@name hideTip
     * @return {?}
     */
    hideTip() {
        if (this.isLocalStorageEnabled) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(false));
        }
        this.isActive = false;
        this.confirmed.emit();
    }
}
NovoTipWellElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-tip-well',
                template: `
        <div *ngIf="isActive">
            <div>
                <i class="bhi-{{ icon }}" *ngIf="icon" [attr.data-automation-id]="'novo-tip-well-icon-' + name"></i>
                <p *ngIf="sanitize" [attr.data-automation-id]="'novo-tip-well-tip-' + name">{{ tip }}</p>
                <p *ngIf="!sanitize" [attr.data-automation-id]="'novo-tip-well-tip-' + name" [innerHTML]="tip"></p>
            </div>
            <button theme="dialogue" (click)="hideTip()" *ngIf="button" [attr.data-automation-id]="'novo-tip-well-button-' + name">{{ buttonText }}</button>
        </div>
    `,
                host: {
                    '[class.active]': 'isActive',
                }
            }] }
];
/** @nocollapse */
NovoTipWellElement.ctorParameters = () => [
    { type: NovoLabelService }
];
NovoTipWellElement.propDecorators = {
    name: [{ type: Input }],
    tip: [{ type: Input }],
    buttonText: [{ type: Input }],
    button: [{ type: Input }],
    icon: [{ type: Input }],
    sanitize: [{ type: Input }],
    confirmed: [{ type: Output }]
};
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
    NovoTipWellElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aXAtd2VsbC9UaXBXZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFrQnJFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFvQjdCLFlBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBWjVDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFJdkIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBS3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUc7OztRQUFDLEdBQUcsRUFBRTs7Z0JBQzdCLFNBQVMsR0FBRyxLQUFLO1lBQ3JCLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxFQUFFO2dCQUNwQyxJQUFJO29CQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNwQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsSUFBSSxDQUNWLG1OQUFtTixDQUNwTixDQUFDO2lCQUNIO2FBQ0Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDOUIsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzFCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxLQUFLLEtBQUssQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBS0QsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7O0tBU1A7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLGdCQUFnQixFQUFFLFVBQVU7aUJBQzdCO2FBQ0Y7Ozs7WUFqQlEsZ0JBQWdCOzs7bUJBbUJ0QixLQUFLO2tCQUVMLEtBQUs7eUJBRUwsS0FBSztxQkFFTCxLQUFLO21CQUVMLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxNQUFNOzs7O0lBWlAsa0NBQ3NCOztJQUN0QixpQ0FDWTs7SUFDWix3Q0FDbUI7O0lBQ25CLG9DQUN1Qjs7SUFDdkIsa0NBQ2E7O0lBQ2Isc0NBQ3lCOztJQUN6Qix1Q0FDK0I7O0lBRS9CLHNDQUF5Qjs7SUFDekIsbURBQTJCOztJQUMzQiw2Q0FBd0I7Ozs7O0lBRVosb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpcC13ZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImlzQWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXt7IGljb24gfX1cIiAqbmdJZj1cImljb25cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtaWNvbi0nICsgbmFtZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cInNhbml0aXplXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLXRpcC0nICsgbmFtZVwiPnt7IHRpcCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIiFzYW5pdGl6ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC10aXAtJyArIG5hbWVcIiBbaW5uZXJIVE1MXT1cInRpcFwiPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgKGNsaWNrKT1cImhpZGVUaXAoKVwiICpuZ0lmPVwiYnV0dG9uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLWJ1dHRvbi0nICsgbmFtZVwiPnt7IGJ1dHRvblRleHQgfX08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdpc0FjdGl2ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaXBXZWxsRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzYW5pdGl6ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKVxuICBjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBpc0xvY2FsU3RvcmFnZUVuYWJsZWQ6IGFueTtcbiAgbG9jYWxTdG9yYWdlS2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAvLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgZW5hYmxlZFxuICAgIHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkID0gKCgpID0+IHtcbiAgICAgIGxldCBpc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsc1Rlc3QnLCAnMScpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsc1Rlc3QnKTtcbiAgICAgICAgICBpc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBzdG9yaW5nIHNldHRpbmdzIGxvY2FsbHkuIEluIFNhZmFyaSwgdGhlIG1vc3QgY29tbW9uIGNhdXNlIG9mIHRoaXMgaXMgdXNpbmcgXCJQcml2YXRlIEJyb3dzaW5nIE1vZGVcIi4gU29tZSBzZXR0aW5ncyBtYXkgbm90IHNhdmUgb3Igc29tZSBmZWF0dXJlcyBtYXkgbm90IHdvcmsgcHJvcGVybHkgZm9yIHlvdS4nLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0VuYWJsZWQ7XG4gICAgfSkoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJyc7XG4gICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5idXR0b25UZXh0IHx8IHRoaXMubGFiZWxzLm9rR290SXQ7XG4gICAgdGhpcy5idXR0b24gPSB0eXBlb2YgdGhpcy5idXR0b24gPT09ICdzdHJpbmcnID8gdGhpcy5idXR0b24gPT09ICd0cnVlJyA6IHRoaXMuYnV0dG9uO1xuICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbiB8fCBudWxsO1xuICAgIC8vIFNldCBhIChzZW1pKSB1bmlxdWUgbmFtZSBmb3IgdGhlIHRpcC13ZWxsXG4gICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkgPSBgbm92by10d18ke3RoaXMubmFtZX1gO1xuICAgIC8vIENoZWNrIGxvY2FsU3RvcmFnZSBmb3Igc3RhdGVcbiAgICBpZiAodGhpcy5pc0xvY2FsU3RvcmFnZUVuYWJsZWQpIHtcbiAgICAgIGxldCBzdG9yZWRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpKTtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBzdG9yZWRWYWx1ZSAhPT0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZGVUaXBcbiAgICovXG4gIGhpZGVUaXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NhbFN0b3JhZ2VFbmFibGVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKTtcbiAgICB9XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY29uZmlybWVkLmVtaXQoKTtcbiAgfVxufVxuIl19