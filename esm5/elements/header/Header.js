/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
var NovoHeaderSpacer = /** @class */ (function () {
    function NovoHeaderSpacer() {
    }
    NovoHeaderSpacer.decorators = [
        { type: Component, args: [{
                    selector: 'header-spacer',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    return NovoHeaderSpacer;
}());
export { NovoHeaderSpacer };
var NovoUtilsComponent = /** @class */ (function () {
    function NovoUtilsComponent() {
    }
    NovoUtilsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'utils',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    return NovoUtilsComponent;
}());
export { NovoUtilsComponent };
var NovoUtilActionComponent = /** @class */ (function () {
    function NovoUtilActionComponent() {
    }
    NovoUtilActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'util-action, novo-action',
                    template: "\n    <button theme=\"icon\" [icon]=\"icon\" [attr.inverse]=\"inverse\" [disabled]=\"disabled\">\n      <ng-content></ng-content>\n    </button>\n  "
                }] }
    ];
    NovoUtilActionComponent.propDecorators = {
        icon: [{ type: Input }],
        inverse: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return NovoUtilActionComponent;
}());
export { NovoUtilActionComponent };
if (false) {
    /** @type {?} */
    NovoUtilActionComponent.prototype.icon;
    /** @type {?} */
    NovoUtilActionComponent.prototype.inverse;
    /** @type {?} */
    NovoUtilActionComponent.prototype.disabled;
}
var NovoHeaderComponent = /** @class */ (function () {
    function NovoHeaderComponent() {
        this.headerClass = 'novo-header';
        this.condensed = false;
        this.inverse = 'inverse';
    }
    Object.defineProperty(NovoHeaderComponent.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._theme;
        },
        set: /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this._theme = theme;
            this.inverse = theme === 'white' || theme === 'off-white' || theme === 'light' ? undefined : 'inverse';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoHeaderComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} icon
         * @return {?}
         */
        function (icon) {
            this._icon = "bhi-" + icon;
        },
        enumerable: true,
        configurable: true
    });
    NovoHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header[theme]',
                    template: "\n    <section>\n      <div class=\"header-title\">\n        <ng-container *ngIf=\"title\">\n          <i *ngIf=\"icon\" class=\"header-icon\" [ngClass]=\"icon\"></i>\n          <div class=\"header-titles\">\n            <h1>{{ title }}</h1>\n            <small *ngIf=\"subTitle\">{{ subTitle }}</small>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"!title\">\n          <ng-content select=\"novo-icon, [novo-icon]\"></ng-content>\n          <div class=\"header-titles\">\n            <ng-content select=\"h1, h2, h3, h4, h5, h6, small, [novo-title], [novo-subtitle]\"></ng-content>\n          </div>\n        </ng-container>\n      </div>\n      <ng-content select=\"section\"></ng-content>\n      <span flex></span>\n      <ng-content select=\"utils\"></ng-content>\n      <ng-content select=\"novo-action\"></ng-content>\n    </section>\n    <ng-content></ng-content>\n  "
                }] }
    ];
    NovoHeaderComponent.propDecorators = {
        headerClass: [{ type: HostBinding, args: ['class',] }],
        condensed: [{ type: HostBinding, args: ['class.condensed',] }, { type: Input }],
        title: [{ type: Input }],
        subTitle: [{ type: Input }],
        theme: [{ type: HostBinding, args: ['attr.theme',] }, { type: Input }],
        icon: [{ type: Input }]
    };
    return NovoHeaderComponent;
}());
export { NovoHeaderComponent };
if (false) {
    /** @type {?} */
    NovoHeaderComponent.prototype.headerClass;
    /** @type {?} */
    NovoHeaderComponent.prototype.condensed;
    /** @type {?} */
    NovoHeaderComponent.prototype.title;
    /** @type {?} */
    NovoHeaderComponent.prototype.subTitle;
    /** @type {?} */
    NovoHeaderComponent.prototype.inverse;
    /** @type {?} */
    NovoHeaderComponent.prototype._theme;
    /** @type {?} */
    NovoHeaderComponent.prototype._icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RDtJQUFBO0lBTStCLENBQUM7O2dCQU4vQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7SUFDOEIsdUJBQUM7Q0FBQSxBQU5oQyxJQU1nQztTQUFuQixnQkFBZ0I7QUFFN0I7SUFBQTtJQU1pQyxDQUFDOztnQkFOakMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7O0lBQ2dDLHlCQUFDO0NBQUEsQUFObEMsSUFNa0M7U0FBckIsa0JBQWtCO0FBRS9CO0lBQUE7SUFlQSxDQUFDOztnQkFmQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLHNKQUlUO2lCQUNGOzs7dUJBRUUsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7O0lBRVIsOEJBQUM7Q0FBQSxBQWZELElBZUM7U0FQWSx1QkFBdUI7OztJQUNsQyx1Q0FDb0I7O0lBQ3BCLDBDQUN3Qjs7SUFDeEIsMkNBQ3lCOztBQUczQjtJQUFBO1FBNkJTLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBR3BDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFLM0IsWUFBTyxHQUFXLFNBQVMsQ0FBQztJQXdCckMsQ0FBQztJQXRCQyxzQkFFSSxzQ0FBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBVEQsVUFFVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pHLENBQUM7OztPQUFBO0lBTUQsc0JBQ0kscUNBQUk7Ozs7UUFJUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQVBELFVBQ1MsSUFBWTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQU8sSUFBTSxDQUFDO1FBQzdCLENBQUM7OztPQUFBOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsdzRCQXVCVDtpQkFDRjs7OzhCQUVFLFdBQVcsU0FBQyxPQUFPOzRCQUVuQixXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxLQUFLO3dCQUlMLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLEtBQUs7dUJBVUwsS0FBSzs7SUFXUiwwQkFBQztDQUFBLEFBN0RELElBNkRDO1NBbENZLG1CQUFtQjs7O0lBQzlCLDBDQUMyQzs7SUFDM0Msd0NBRWtDOztJQUNsQyxvQ0FDcUI7O0lBQ3JCLHVDQUN3Qjs7SUFDeEIsc0NBQW1DOztJQXNCbkMscUNBQXVCOztJQUN2QixvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFkZXItc3BhY2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9IZWFkZXJTcGFjZXIge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXRpbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1V0aWxzQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V0aWwtYWN0aW9uLCBub3ZvLWFjdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBbaWNvbl09XCJpY29uXCIgW2F0dHIuaW52ZXJzZV09XCJpbnZlcnNlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9idXR0b24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9VdGlsQWN0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyW3RoZW1lXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwiaGVhZGVyLWljb25cIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVzXCI+XG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwic3ViVGl0bGVcIj57eyBzdWJUaXRsZSB9fTwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRpdGxlXCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1pY29uLCBbbm92by1pY29uXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgc21hbGwsIFtub3ZvLXRpdGxlXSwgW25vdm8tc3VidGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICAgIDxzcGFuIGZsZXg+PC9zcGFuPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidXRpbHNcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWFjdGlvblwiPjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGVhZGVyQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyBoZWFkZXJDbGFzczogc3RyaW5nID0gJ25vdm8taGVhZGVyJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb25kZW5zZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3ViVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGludmVyc2U6IHN0cmluZyA9ICdpbnZlcnNlJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGhlbWUnKVxuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5pbnZlcnNlID0gdGhlbWUgPT09ICd3aGl0ZScgfHwgdGhlbWUgPT09ICdvZmYtd2hpdGUnIHx8IHRoZW1lID09PSAnbGlnaHQnID8gdW5kZWZpbmVkIDogJ2ludmVyc2UnO1xuICB9XG5cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IGBiaGktJHtpY29ufWA7XG4gIH1cblxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xufVxuIl19