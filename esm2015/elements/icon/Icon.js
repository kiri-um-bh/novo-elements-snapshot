/**
 * @fileoverview added by tsickle
 * Generated from: elements/icon/Icon.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.shape = 'box';
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
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.name = this.element.nativeElement.textContent.trim();
                this.cdr.markForCheck();
            }));
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
/** @nocollapse */
NovoIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NovoIconComponent.propDecorators = {
    raised: [{ type: HostBinding, args: ['attr.raised',] }, { type: Input }],
    size: [{ type: HostBinding, args: ['attr.size',] }, { type: Input }],
    theme: [{ type: HostBinding, args: ['attr.theme',] }, { type: Input }],
    shape: [{ type: HostBinding, args: ['attr.shape',] }, { type: Input }],
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
    NovoIconComponent.prototype.shape;
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
    /**
     * @type {?}
     * @private
     */
    NovoIconComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9pY29uL0ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNySSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQXlDNUIsWUFBbUIsT0FBbUIsRUFBVSxHQUFzQjtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuQy9ELFNBQUksR0FBVyxRQUFRLENBQUM7UUFNeEIsVUFBSyxHQUFXLEtBQUssQ0FBQztRQUt0QixTQUFJLEdBQVcsS0FBSyxDQUFDO0lBd0I2QyxDQUFDOzs7OztJQXBCMUUsSUFDSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFDSSxJQUFJLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQU1NLGVBQWU7UUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztZQUFDLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7O0tBRVA7YUFDSjs7OztZQVJtQixVQUFVO1lBQThELGlCQUFpQjs7O3FCQVUxRyxXQUFXLFNBQUMsYUFBYSxjQUN6QixLQUFLO21CQUVMLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUs7b0JBRUwsV0FBVyxTQUFDLFlBQVksY0FDeEIsS0FBSztvQkFFTCxXQUFXLFNBQUMsWUFBWSxjQUN4QixLQUFLO29CQUVMLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLEtBQUs7bUJBRUwsV0FBVyxTQUFDLFdBQVc7d0JBRXZCLFdBQVcsU0FBQyxpQkFBaUI7a0JBRzdCLEtBQUs7bUJBU0wsS0FBSzs7OztJQTdCTixtQ0FFdUI7O0lBQ3ZCLGlDQUUrQjs7SUFDL0Isa0NBRXFCOztJQUNyQixrQ0FFNkI7O0lBQzdCLGtDQUVxQjs7SUFDckIsaUNBQzRCOztJQUM1QixzQ0FDeUI7O0lBb0J6QixxQ0FBd0I7O0lBRVosb0NBQTBCOzs7OztJQUFFLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1pY29uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIFtjbGFzc109XCJpY29uTmFtZVwiPjxzcGFuPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+PC9pPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JY29uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yYWlzZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgcmFpc2VkOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuc2l6ZScpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaXplOiBzdHJpbmcgPSAnbWVkaXVtJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRoZW1lJylcbiAgQElucHV0KClcbiAgcHVibGljIHRoZW1lOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5zaGFwZScpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaGFwZTogc3RyaW5nID0gJ2JveCc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5jb2xvcicpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlOiBzdHJpbmcgPSAnaW1nJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGFsdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hcmlhTGFiZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhbHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhTGFiZWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uTmFtZSA9IGBiaGktJHtpY29uTmFtZX1gO1xuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBpY29uTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19