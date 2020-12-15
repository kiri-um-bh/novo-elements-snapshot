/**
 * @fileoverview added by tsickle
 * Generated from: elements/header/Header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.movable = true;
        this.resizable = true;
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
    /**
     * @return {?}
     */
    NovoHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elmnt = (/** @type {?} */ (document.getElementsByTagName('novo-modal')[0]));
        if (elmnt) {
            if (this.resizable) {
                elmnt.classList.add('resizable');
            }
        }
        else {
            this.movable = false;
        }
    };
    /**
     * @return {?}
     */
    NovoHeaderComponent.prototype.dragModal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elmnt = (/** @type {?} */ (document.getElementsByTagName('novo-modal')[0]));
        if (elmnt) {
            /** @type {?} */
            var pos1_1 = 0;
            /** @type {?} */
            var pos2_1 = 0;
            /** @type {?} */
            var pos3_1 = 0;
            /** @type {?} */
            var pos4_1 = 0;
            document.getElementById('dragger').onmousedown = dragMouseDown;
            /**
             * @param {?} e
             * @return {?}
             */
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup
                pos3_1 = e.clientX;
                pos4_1 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }
            /**
             * @param {?} e
             * @return {?}
             */
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position
                pos1_1 = pos3_1 - e.clientX;
                pos2_1 = pos4_1 - e.clientY;
                pos3_1 = e.clientX;
                pos4_1 = e.clientY;
                // set the element's new position
                elmnt.style.top = elmnt.offsetTop - pos2_1 + 'px';
                elmnt.style.left = elmnt.offsetLeft - pos1_1 + 'px';
                elmnt.style.resize = 'both';
            }
            /**
             * @return {?}
             */
            function closeDragElement() {
                // stop moving when mouse button is released
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    };
    NovoHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header[theme]',
                    template: "\n    <section>\n      <div class=\"header-title\">\n        <ng-container *ngIf=\"title\">\n          <i *ngIf=\"movable\" class=\"header-icon\" class=\"bhi-move\" id=\"dragger\" (mouseenter)=\"dragModal()\"></i>\n          <i *ngIf=\"icon\" class=\"header-icon\" [ngClass]=\"icon\"></i>\n          <div class=\"header-titles\">\n            <h1>{{ title }}</h1>\n            <small *ngIf=\"subTitle\">{{ subTitle }}</small>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"!title\">\n          <ng-content select=\"novo-icon, [novo-icon]\"></ng-content>\n          <div class=\"header-titles\">\n            <ng-content select=\"h1, h2, h3, h4, h5, h6, small, [novo-title], [novo-subtitle]\"></ng-content>\n          </div>\n        </ng-container>\n      </div>\n      <ng-content select=\"section\"></ng-content>\n      <span flex></span>\n      <ng-content select=\"utils\"></ng-content>\n      <ng-content select=\"novo-action\"></ng-content>\n    </section>\n    <ng-content></ng-content>\n  "
                }] }
    ];
    NovoHeaderComponent.propDecorators = {
        headerClass: [{ type: HostBinding, args: ['class',] }],
        condensed: [{ type: HostBinding, args: ['class.condensed',] }, { type: Input }],
        title: [{ type: Input }],
        subTitle: [{ type: Input }],
        movable: [{ type: Input }],
        resizable: [{ type: Input }],
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
    NovoHeaderComponent.prototype.movable;
    /** @type {?} */
    NovoHeaderComponent.prototype.resizable;
    /** @type {?} */
    NovoHeaderComponent.prototype.inverse;
    /**
     * @type {?}
     * @private
     */
    NovoHeaderComponent.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    NovoHeaderComponent.prototype._icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFdEU7SUFBQTtJQU0rQixDQUFDOztnQkFOL0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7O0lBQzhCLHVCQUFDO0NBQUEsQUFOaEMsSUFNZ0M7U0FBbkIsZ0JBQWdCO0FBRTdCO0lBQUE7SUFNaUMsQ0FBQzs7Z0JBTmpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOztJQUNnQyx5QkFBQztDQUFBLEFBTmxDLElBTWtDO1NBQXJCLGtCQUFrQjtBQUUvQjtJQUFBO0lBZUEsQ0FBQzs7Z0JBZkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxzSkFJVDtpQkFDRjs7O3VCQUVFLEtBQUs7MEJBRUwsS0FBSzsyQkFFTCxLQUFLOztJQUVSLDhCQUFDO0NBQUEsQUFmRCxJQWVDO1NBUFksdUJBQXVCOzs7SUFDbEMsdUNBQ29COztJQUNwQiwwQ0FDd0I7O0lBQ3hCLDJDQUN5Qjs7QUFHM0I7SUFBQTtRQThCUyxnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUdwQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBTTNCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixZQUFPLEdBQVcsU0FBUyxDQUFDO0lBMkVyQyxDQUFDO0lBekVDLHNCQUVJLHNDQUFLOzs7O1FBS1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFURCxV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QkFwSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsa2dDQXdCVDtpQkFDRjs7OzhCQUVFLFdBQVcsU0FBQyxPQUFPOzRCQUVuQixXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxLQUFLOzBCQUVMLEtBQUs7NEJBRUwsS0FBSzt3QkFJTCxXQUFXLFNBQUMsWUFBWSxjQUN4QixLQUFLO3VCQVVMLEtBQUs7O0lBOERSLDBCQUFDO0NBQUEsQUFySEQsSUFxSEM7U0F6RlksbUJBQW1COzs7SUFDOUIsMENBQzJDOztJQUMzQyx3Q0FFa0M7O0lBQ2xDLG9DQUNxQjs7SUFDckIsdUNBQ3dCOztJQUN4QixzQ0FDK0I7O0lBQy9CLHdDQUNpQzs7SUFDakMsc0NBQW1DOzs7OztJQXNCbkMscUNBQXVCOzs7OztJQUN2QixvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlci1zcGFjZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hlYWRlclNwYWNlciB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1dGlscycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVXRpbHNDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXRpbC1hY3Rpb24sIG5vdm8tYWN0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIFtpY29uXT1cImljb25cIiBbYXR0ci5pbnZlcnNlXT1cImludmVyc2VcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1V0aWxBY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFkZXJbdGhlbWVdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRpdGxlXCI+XG4gICAgICAgICAgPGkgKm5nSWY9XCJtb3ZhYmxlXCIgY2xhc3M9XCJoZWFkZXItaWNvblwiIGNsYXNzPVwiYmhpLW1vdmVcIiBpZD1cImRyYWdnZXJcIiAobW91c2VlbnRlcik9XCJkcmFnTW9kYWwoKVwiPjwvaT5cbiAgICAgICAgICA8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cImhlYWRlci1pY29uXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlc1wiPlxuICAgICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cInN1YlRpdGxlXCI+e3sgc3ViVGl0bGUgfX08L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8taWNvbiwgW25vdm8taWNvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZXNcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHNtYWxsLCBbbm92by10aXRsZV0sIFtub3ZvLXN1YnRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInNlY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8c3BhbiBmbGV4Pjwvc3Bhbj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInV0aWxzXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1hY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgaGVhZGVyQ2xhc3M6IHN0cmluZyA9ICdub3ZvLWhlYWRlcic7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29uZGVuc2VkJylcbiAgQElucHV0KClcbiAgcHVibGljIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIHN1YlRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtb3ZhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHJlc2l6YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpbnZlcnNlOiBzdHJpbmcgPSAnaW52ZXJzZSc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRoZW1lJylcbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuaW52ZXJzZSA9IHRoZW1lID09PSAnd2hpdGUnIHx8IHRoZW1lID09PSAnb2ZmLXdoaXRlJyB8fCB0aGVtZSA9PT0gJ2xpZ2h0JyA/IHVuZGVmaW5lZCA6ICdpbnZlcnNlJztcbiAgfVxuXG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKGljb246IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSBgYmhpLSR7aWNvbn1gO1xuICB9XG5cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZWxtbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ25vdm8tbW9kYWwnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZWxtbnQpIHtcbiAgICAgIGlmICh0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICBlbG1udC5jbGFzc0xpc3QuYWRkKCdyZXNpemFibGUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZhYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZHJhZ01vZGFsKCkge1xuICAgIGxldCBlbG1udDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbm92by1tb2RhbCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChlbG1udCkge1xuICAgICAgbGV0IHBvczEgPSAwLFxuICAgICAgICBwb3MyID0gMCxcbiAgICAgICAgcG9zMyA9IDAsXG4gICAgICAgIHBvczQgPSAwO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYWdnZXInKS5vbm1vdXNlZG93biA9IGRyYWdNb3VzZURvd247XG4gICAgICBmdW5jdGlvbiBkcmFnTW91c2VEb3duKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGdldCB0aGUgbW91c2UgY3Vyc29yIHBvc2l0aW9uIGF0IHN0YXJ0dXBcbiAgICAgICAgcG9zMyA9IGUuY2xpZW50WDtcbiAgICAgICAgcG9zNCA9IGUuY2xpZW50WTtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gY2xvc2VEcmFnRWxlbWVudDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBlbGVtZW50RHJhZztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZWxlbWVudERyYWcoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgY3Vyc29yIHBvc2l0aW9uXG4gICAgICAgIHBvczEgPSBwb3MzIC0gZS5jbGllbnRYO1xuICAgICAgICBwb3MyID0gcG9zNCAtIGUuY2xpZW50WTtcbiAgICAgICAgcG9zMyA9IGUuY2xpZW50WDtcbiAgICAgICAgcG9zNCA9IGUuY2xpZW50WTtcbiAgICAgICAgLy8gc2V0IHRoZSBlbGVtZW50J3MgbmV3IHBvc2l0aW9uXG4gICAgICAgIGVsbW50LnN0eWxlLnRvcCA9IGVsbW50Lm9mZnNldFRvcCAtIHBvczIgKyAncHgnO1xuICAgICAgICBlbG1udC5zdHlsZS5sZWZ0ID0gZWxtbnQub2Zmc2V0TGVmdCAtIHBvczEgKyAncHgnO1xuICAgICAgICBlbG1udC5zdHlsZS5yZXNpemUgPSAnYm90aCc7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsb3NlRHJhZ0VsZW1lbnQoKSB7XG4gICAgICAgIC8vIHN0b3AgbW92aW5nIHdoZW4gbW91c2UgYnV0dG9uIGlzIHJlbGVhc2VkXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==