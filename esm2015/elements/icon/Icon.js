/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @type {?}
     * @private
     */
    NovoIconComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9pY29uL0ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3JJLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBc0M1QixZQUFtQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDL0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQVF4QixTQUFJLEdBQVcsS0FBSyxDQUFDO0lBd0I2QyxDQUFDOzs7OztJQXBCMUUsSUFDSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFDSSxJQUFJLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQU1NLGVBQWU7UUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztZQUFDLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7O0tBRVA7YUFDSjs7OztZQVJtQixVQUFVO1lBQThELGlCQUFpQjs7O3FCQVUxRyxXQUFXLFNBQUMsYUFBYSxjQUN6QixLQUFLO21CQUVMLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUs7b0JBRUwsV0FBVyxTQUFDLFlBQVksY0FDeEIsS0FBSztvQkFFTCxXQUFXLFNBQUMsWUFBWSxjQUN4QixLQUFLO21CQUVMLFdBQVcsU0FBQyxXQUFXO3dCQUV2QixXQUFXLFNBQUMsaUJBQWlCO2tCQUc3QixLQUFLO21CQVNMLEtBQUs7Ozs7SUExQk4sbUNBRXVCOztJQUN2QixpQ0FFK0I7O0lBQy9CLGtDQUVxQjs7SUFDckIsa0NBRXFCOztJQUNyQixpQ0FDNEI7O0lBQzVCLHNDQUN5Qjs7SUFvQnpCLHFDQUF3Qjs7SUFFWixvQ0FBMEI7Ozs7O0lBQUUsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWljb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgW2NsYXNzXT1cImljb25OYW1lXCI+PHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJhaXNlZCcpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByYWlzZWQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnYXR0ci5zaXplJylcbiAgQElucHV0KClcbiAgcHVibGljIHNpemU6IHN0cmluZyA9ICdtZWRpdW0nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGhlbWUnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgdGhlbWU6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmNvbG9yJylcbiAgQElucHV0KClcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGU6IHN0cmluZyA9ICdpbWcnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYWx0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFsdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFyaWFMYWJlbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKGljb25OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25OYW1lID0gYGJoaS0ke2ljb25OYW1lfWA7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25OYW1lO1xuICB9XG5cbiAgcHVibGljIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=