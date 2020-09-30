/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var NovoIconComponent = /** @class */ (function () {
    function NovoIconComponent(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.size = 'medium';
        this.role = 'img';
    }
    Object.defineProperty(NovoIconComponent.prototype, "alt", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ariaLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.ariaLabel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoIconComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconName;
        },
        set: /**
         * @param {?} iconName
         * @return {?}
         */
        function (iconName) {
            this.iconName = "bhi-" + iconName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoIconComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.element.nativeElement.textContent.trim()) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.name = _this.element.nativeElement.textContent.trim();
                _this.cdr.markForCheck();
            }));
        }
    };
    NovoIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'novo-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n        <i [class]=\"iconName\"><span><ng-content></ng-content></span></i>\n    "
                }] }
    ];
    /** @nocollapse */
    NovoIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
    return NovoIconComponent;
}());
export { NovoIconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9pY29uL0ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJJO0lBNkNFLDJCQUFtQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDL0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQVF4QixTQUFJLEdBQVcsS0FBSyxDQUFDO0lBd0I2QyxDQUFDO0lBcEIxRSxzQkFDSSxrQ0FBRzs7OztRQUlQO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBUEQsVUFDUSxLQUFhO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksbUNBQUk7Ozs7UUFJUjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQVBELFVBQ1MsUUFBZ0I7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFPLFFBQVUsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTs7OztJQVVNLDJDQUFlOzs7SUFBdEI7UUFBQSxpQkFPQztRQU5DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7WUFBQztnQkFDckIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsb0ZBRVA7aUJBQ0o7Ozs7Z0JBUm1CLFVBQVU7Z0JBQThELGlCQUFpQjs7O3lCQVUxRyxXQUFXLFNBQUMsYUFBYSxjQUN6QixLQUFLO3VCQUVMLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUs7d0JBRUwsV0FBVyxTQUFDLFlBQVksY0FDeEIsS0FBSzt3QkFFTCxXQUFXLFNBQUMsWUFBWSxjQUN4QixLQUFLO3VCQUVMLFdBQVcsU0FBQyxXQUFXOzRCQUV2QixXQUFXLFNBQUMsaUJBQWlCO3NCQUc3QixLQUFLO3VCQVNMLEtBQUs7O0lBcUJSLHdCQUFDO0NBQUEsQUF2REQsSUF1REM7U0FoRFksaUJBQWlCOzs7SUFDNUIsbUNBRXVCOztJQUN2QixpQ0FFK0I7O0lBQy9CLGtDQUVxQjs7SUFDckIsa0NBRXFCOztJQUNyQixpQ0FDNEI7O0lBQzVCLHNDQUN5Qjs7SUFvQnpCLHFDQUF3Qjs7SUFFWixvQ0FBMEI7Ozs7O0lBQUUsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWljb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgW2NsYXNzXT1cImljb25OYW1lXCI+PHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJhaXNlZCcpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByYWlzZWQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnYXR0ci5zaXplJylcbiAgQElucHV0KClcbiAgcHVibGljIHNpemU6IHN0cmluZyA9ICdtZWRpdW0nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGhlbWUnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgdGhlbWU6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmNvbG9yJylcbiAgQElucHV0KClcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGU6IHN0cmluZyA9ICdpbWcnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYWx0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFsdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFyaWFMYWJlbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKGljb25OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25OYW1lID0gYGJoaS0ke2ljb25OYW1lfWA7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25OYW1lO1xuICB9XG5cbiAgcHVibGljIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=