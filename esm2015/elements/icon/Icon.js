/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
export class NovoIconComponent {
    /**
     * @param {?} element
     * @param {?} cdr
     */
    constructor(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.size = 'medium';
        this.role = 'img';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set alt(value) {
        this.ariaLabel = value;
    }
    /**
     * @return {?}
     */
    get alt() {
        return this.ariaLabel;
    }
    /**
     * @param {?} iconName
     * @return {?}
     */
    set name(iconName) {
        this.iconName = `bhi-${iconName}`;
    }
    /**
     * @return {?}
     */
    get name() {
        return this.iconName;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.element.nativeElement.textContent.trim()) {
            Promise.resolve().then(() => {
                this.name = this.element.nativeElement.textContent.trim();
                this.cdr.markForCheck();
            });
        }
    }
}
NovoIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'novo-icon',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
        <i [class]="iconName"><span><ng-content></ng-content></span></i>
    `
            }] }
];
NovoIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NovoIconComponent.propDecorators = {
    raised: [{ type: HostBinding, args: ['attr.raised',] }, { type: Input }],
    size: [{ type: HostBinding, args: ['attr.size',] }, { type: Input }],
    theme: [{ type: HostBinding, args: ['attr.theme',] }, { type: Input }],
    color: [{ type: HostBinding, args: ['attr.color',] }, { type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    ariaLabel: [{ type: HostBinding, args: ['attr.aria-label',] }],
    alt: [{ type: Input }],
    name: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoIconComponent.prototype.raised;
    /** @type {?} */
    NovoIconComponent.prototype.size;
    /** @type {?} */
    NovoIconComponent.prototype.theme;
    /** @type {?} */
    NovoIconComponent.prototype.color;
    /** @type {?} */
    NovoIconComponent.prototype.role;
    /** @type {?} */
    NovoIconComponent.prototype.ariaLabel;
    /** @type {?} */
    NovoIconComponent.prototype.iconName;
    /** @type {?} */
    NovoIconComponent.prototype.element;
    /** @type {?} */
    NovoIconComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9pY29uL0ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3JJLE1BQU07Ozs7O0lBc0NKLFlBQW1CLE9BQW1CLEVBQVUsR0FBc0I7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEMvRCxTQUFJLEdBQVcsUUFBUSxDQUFDO1FBUXhCLFNBQUksR0FBVyxLQUFLLENBQUM7SUF3QjZDLENBQUM7Ozs7O0lBcEIxRSxJQUNJLEdBQUcsQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLElBQUksQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBTU0sZUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7O0tBRVA7YUFDSjs7O1lBUm1CLFVBQVU7WUFBOEQsaUJBQWlCOzs7cUJBVTFHLFdBQVcsU0FBQyxhQUFhLGNBQ3pCLEtBQUs7bUJBRUwsV0FBVyxTQUFDLFdBQVcsY0FDdkIsS0FBSztvQkFFTCxXQUFXLFNBQUMsWUFBWSxjQUN4QixLQUFLO29CQUVMLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLEtBQUs7bUJBRUwsV0FBVyxTQUFDLFdBQVc7d0JBRXZCLFdBQVcsU0FBQyxpQkFBaUI7a0JBRzdCLEtBQUs7bUJBU0wsS0FBSzs7OztJQTFCTixtQ0FFdUI7O0lBQ3ZCLGlDQUUrQjs7SUFDL0Isa0NBRXFCOztJQUNyQixrQ0FFcUI7O0lBQ3JCLGlDQUM0Qjs7SUFDNUIsc0NBQ3lCOztJQW9CekIscUNBQXdCOztJQUVaLG9DQUEwQjs7SUFBRSxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8taWNvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBbY2xhc3NdPVwiaWNvbk5hbWVcIj48c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPjwvaT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucmFpc2VkJylcbiAgQElucHV0KClcbiAgcHVibGljIHJhaXNlZDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnNpemUnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2l6ZTogc3RyaW5nID0gJ21lZGl1bSc7XG4gIEBIb3N0QmluZGluZygnYXR0ci50aGVtZScpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuY29sb3InKVxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZTogc3RyaW5nID0gJ2ltZyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhbHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYXJpYUxhYmVsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYWx0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXJpYUxhYmVsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5hbWUoaWNvbk5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuaWNvbk5hbWUgPSBgYmhpLSR7aWNvbk5hbWV9YDtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbk5hbWU7XG4gIH1cblxuICBwdWJsaWMgaWNvbk5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==