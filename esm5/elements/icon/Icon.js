/**
 * @fileoverview added by tsickle
 * Generated from: elements/icon/Icon.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9pY29uL0ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySTtJQTZDRSwyQkFBbUIsT0FBbUIsRUFBVSxHQUFzQjtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQy9ELFNBQUksR0FBVyxRQUFRLENBQUM7UUFReEIsU0FBSSxHQUFXLEtBQUssQ0FBQztJQXdCNkMsQ0FBQztJQXBCMUUsc0JBQ0ksa0NBQUc7Ozs7UUFJUDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQVBELFVBQ1EsS0FBYTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLG1DQUFJOzs7O1FBSVI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFQRCxVQUNTLFFBQWdCO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBTyxRQUFVLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7Ozs7SUFVTSwyQ0FBZTs7O0lBQXRCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1lBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxRCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLG9GQUVQO2lCQUNKOzs7O2dCQVJtQixVQUFVO2dCQUE4RCxpQkFBaUI7Ozt5QkFVMUcsV0FBVyxTQUFDLGFBQWEsY0FDekIsS0FBSzt1QkFFTCxXQUFXLFNBQUMsV0FBVyxjQUN2QixLQUFLO3dCQUVMLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLEtBQUs7d0JBRUwsV0FBVyxTQUFDLFlBQVksY0FDeEIsS0FBSzt1QkFFTCxXQUFXLFNBQUMsV0FBVzs0QkFFdkIsV0FBVyxTQUFDLGlCQUFpQjtzQkFHN0IsS0FBSzt1QkFTTCxLQUFLOztJQXFCUix3QkFBQztDQUFBLEFBdkRELElBdURDO1NBaERZLGlCQUFpQjs7O0lBQzVCLG1DQUV1Qjs7SUFDdkIsaUNBRStCOztJQUMvQixrQ0FFcUI7O0lBQ3JCLGtDQUVxQjs7SUFDckIsaUNBQzRCOztJQUM1QixzQ0FDeUI7O0lBb0J6QixxQ0FBd0I7O0lBRVosb0NBQTBCOzs7OztJQUFFLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1pY29uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIFtjbGFzc109XCJpY29uTmFtZVwiPjxzcGFuPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+PC9pPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JY29uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yYWlzZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgcmFpc2VkOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuc2l6ZScpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaXplOiBzdHJpbmcgPSAnbWVkaXVtJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRoZW1lJylcbiAgQElucHV0KClcbiAgcHVibGljIHRoZW1lOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5jb2xvcicpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlOiBzdHJpbmcgPSAnaW1nJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGFsdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hcmlhTGFiZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhbHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhTGFiZWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uTmFtZSA9IGBiaGktJHtpY29uTmFtZX1gO1xuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBpY29uTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19