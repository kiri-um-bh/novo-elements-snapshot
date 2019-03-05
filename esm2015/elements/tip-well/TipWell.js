/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.isLocalStorageEnabled = (() => {
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
        })();
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
    /** @type {?} */
    NovoTipWellElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwV2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aXAtd2VsbC9UaXBXZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFrQnJFLE1BQU07Ozs7SUFvQkosWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFaNUMsV0FBTSxHQUFZLElBQUksQ0FBQztRQUl2QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9CLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFLdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLEdBQUcsRUFBRTs7Z0JBQzdCLFNBQVMsR0FBRyxLQUFLO1lBQ3JCLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxFQUFFO2dCQUNwQyxJQUFJO29CQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNwQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsSUFBSSxDQUNWLG1OQUFtTixDQUNwTixDQUFDO2lCQUNIO2FBQ0Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDOUIsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzFCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxLQUFLLEtBQUssQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBS0QsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7O0tBU1A7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLGdCQUFnQixFQUFFLFVBQVU7aUJBQzdCO2FBQ0Y7OztZQWpCUSxnQkFBZ0I7OzttQkFtQnRCLEtBQUs7a0JBRUwsS0FBSzt5QkFFTCxLQUFLO3FCQUVMLEtBQUs7bUJBRUwsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLE1BQU07Ozs7SUFaUCxrQ0FDc0I7O0lBQ3RCLGlDQUNZOztJQUNaLHdDQUNtQjs7SUFDbkIsb0NBQ3VCOztJQUN2QixrQ0FDYTs7SUFDYixzQ0FDeUI7O0lBQ3pCLHVDQUMrQjs7SUFFL0Isc0NBQXlCOztJQUN6QixtREFBMkI7O0lBQzNCLDZDQUF3Qjs7SUFFWixvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGlwLXdlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNBY3RpdmVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGkte3sgaWNvbiB9fVwiICpuZ0lmPVwiaWNvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by10aXAtd2VsbC1pY29uLScgKyBuYW1lXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwic2FuaXRpemVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtdGlwLScgKyBuYW1lXCI+e3sgdGlwIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiIXNhbml0aXplXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLXRpcC13ZWxsLXRpcC0nICsgbmFtZVwiIFtpbm5lckhUTUxdPVwidGlwXCI+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiAoY2xpY2spPVwiaGlkZVRpcCgpXCIgKm5nSWY9XCJidXR0b25cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tdGlwLXdlbGwtYnV0dG9uLScgKyBuYW1lXCI+e3sgYnV0dG9uVGV4dCB9fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2lzQWN0aXZlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpcFdlbGxFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aXA6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNhbml0aXplOiBib29sZWFuID0gdHJ1ZTtcbiAgQE91dHB1dCgpXG4gIGNvbmZpcm1lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIGlzTG9jYWxTdG9yYWdlRW5hYmxlZDogYW55O1xuICBsb2NhbFN0b3JhZ2VLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIC8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyBlbmFibGVkXG4gICAgdGhpcy5pc0xvY2FsU3RvcmFnZUVuYWJsZWQgPSAoKCkgPT4ge1xuICAgICAgbGV0IGlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xzVGVzdCcsICcxJyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xzVGVzdCcpO1xuICAgICAgICAgIGlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAnVGhpcyB3ZWIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHN0b3Jpbmcgc2V0dGluZ3MgbG9jYWxseS4gSW4gU2FmYXJpLCB0aGUgbW9zdCBjb21tb24gY2F1c2Ugb2YgdGhpcyBpcyB1c2luZyBcIlByaXZhdGUgQnJvd3NpbmcgTW9kZVwiLiBTb21lIHNldHRpbmdzIG1heSBub3Qgc2F2ZSBvciBzb21lIGZlYXR1cmVzIG1heSBub3Qgd29yayBwcm9wZXJseSBmb3IgeW91LicsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRW5hYmxlZDtcbiAgICB9KSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAnJztcbiAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLmJ1dHRvblRleHQgfHwgdGhpcy5sYWJlbHMub2tHb3RJdDtcbiAgICB0aGlzLmJ1dHRvbiA9IHR5cGVvZiB0aGlzLmJ1dHRvbiA9PT0gJ3N0cmluZycgPyB0aGlzLmJ1dHRvbiA9PT0gJ3RydWUnIDogdGhpcy5idXR0b247XG4gICAgdGhpcy5pY29uID0gdGhpcy5pY29uIHx8IG51bGw7XG4gICAgLy8gU2V0IGEgKHNlbWkpIHVuaXF1ZSBuYW1lIGZvciB0aGUgdGlwLXdlbGxcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSA9IGBub3ZvLXR3XyR7dGhpcy5uYW1lfWA7XG4gICAgLy8gQ2hlY2sgbG9jYWxTdG9yYWdlIGZvciBzdGF0ZVxuICAgIGlmICh0aGlzLmlzTG9jYWxTdG9yYWdlRW5hYmxlZCkge1xuICAgICAgbGV0IHN0b3JlZFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSkpO1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHN0b3JlZFZhbHVlICE9PSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlkZVRpcFxuICAgKi9cbiAgaGlkZVRpcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2FsU3RvcmFnZUVuYWJsZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuICAgIH1cbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb25maXJtZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=