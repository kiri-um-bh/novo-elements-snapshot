/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ViewContainerRef, ViewChild, Input, Output, EventEmitter, Injectable } from '@angular/core';
// APP
import { Deferred } from './../../utils/deferred/Deferred';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
/**
 * Params that can be passed to the Modal
 * @record
 */
export function ModalParams() { }
var NovoModalParams = /** @class */ (function () {
    function NovoModalParams() {
    }
    return NovoModalParams;
}());
export { NovoModalParams };
/**
 * Reference to an opened dialog.
 */
var NovoModalRef = /** @class */ (function () {
    function NovoModalRef() {
        this.component = null;
        this.contentRef = null;
        this.containerRef = null;
        this.isClosed = false;
        this._onClosed = Deferred();
    }
    Object.defineProperty(NovoModalRef.prototype, "onClosed", {
        // Gets a promise that is resolved when the dialog is closed.
        get: 
        // Gets a promise that is resolved when the dialog is closed.
        /**
         * @return {?}
         */
        function () {
            return this._onClosed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoModalRef.prototype.open = /**
     * @return {?}
     */
    function () {
        document.body.classList.add('modal-open');
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NovoModalRef.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        document.body.classList.remove('modal-open');
        if (this.contentRef) {
            this.contentRef.destroy();
        }
        if (this.containerRef) {
            this.containerRef.destroy();
        }
        this._onClosed.resolve(result);
    };
    NovoModalRef.decorators = [
        { type: Injectable }
    ];
    return NovoModalRef;
}());
export { NovoModalRef };
if (false) {
    /** @type {?} */
    NovoModalRef.prototype.component;
    /** @type {?} */
    NovoModalRef.prototype.contentRef;
    /** @type {?} */
    NovoModalRef.prototype.containerRef;
    /** @type {?} */
    NovoModalRef.prototype.isClosed;
    /** @type {?} */
    NovoModalRef.prototype._onClosed;
}
var NovoModalContainerElement = /** @class */ (function () {
    function NovoModalContainerElement(modalRef, componentUtils) {
        this.modalRef = modalRef;
        this.componentUtils = componentUtils;
    }
    /**
     * @return {?}
     */
    NovoModalContainerElement.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.modalRef.contentRef = _this.componentUtils.appendNextToLocation(_this.modalRef.component, _this.container);
        });
    };
    NovoModalContainerElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-modal-container',
                    template: '<span #container></span>'
                }] }
    ];
    /** @nocollapse */
    NovoModalContainerElement.ctorParameters = function () { return [
        { type: NovoModalRef },
        { type: ComponentUtils }
    ]; };
    NovoModalContainerElement.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }]
    };
    return NovoModalContainerElement;
}());
export { NovoModalContainerElement };
if (false) {
    /** @type {?} */
    NovoModalContainerElement.prototype.container;
    /**
     * @type {?}
     * @private
     */
    NovoModalContainerElement.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    NovoModalContainerElement.prototype.componentUtils;
}
var NovoModalElement = /** @class */ (function () {
    function NovoModalElement(modalRef) {
        this.modalRef = modalRef;
    }
    /**
     * @return {?}
     */
    NovoModalElement.prototype.close = /**
     * @return {?}
     */
    function () {
        this.modalRef.close();
    };
    NovoModalElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-modal',
                    template: "\n        <ng-content select=\"header\"></ng-content>\n        <ng-content select=\"section\"></ng-content>\n        <footer>\n            <ng-content select=\"button\"></ng-content>\n        </footer>\n    "
                }] }
    ];
    /** @nocollapse */
    NovoModalElement.ctorParameters = function () { return [
        { type: NovoModalRef }
    ]; };
    return NovoModalElement;
}());
export { NovoModalElement };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoModalElement.prototype.modalRef;
}
var NovoModalNotificationElement = /** @class */ (function () {
    function NovoModalNotificationElement(modalRef) {
        this.modalRef = modalRef;
        this.cancel = new EventEmitter();
        this.modalRef = modalRef;
    }
    /**
     * @return {?}
     */
    NovoModalNotificationElement.prototype.close = /**
     * @return {?}
     */
    function () {
        this.cancel.emit();
        this.modalRef.close();
    };
    /**
     * @return {?}
     */
    NovoModalNotificationElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        switch (this.type) {
            case 'success':
                this.iconType = 'bhi-check';
                break;
            case 'warning':
                this.iconType = 'bhi-caution-o';
                break;
            case 'error':
                this.iconType = 'bhi-caution-o';
                break;
            case 'custom':
                this.iconType = "bhi-" + this.icon;
                break;
            default:
                break;
        }
    };
    NovoModalNotificationElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-notification',
                    template: "\n        <button class=\"modal-close\" theme=\"icon\" icon=\"times\" (click)=\"close()\"></button>\n        <header>\n            <ng-content select=\"label\"></ng-content>\n        </header>\n        <section class=\"notification-body\">\n            <i class=\"indicator\" [ngClass]=\"iconType\" *ngIf=\"iconType\"></i>\n            <ng-content select=\"h1\"></ng-content>\n            <ng-content select=\"h2\"></ng-content>\n            <ng-content select=\"p\"></ng-content>\n        </section>\n        <footer>\n            <ng-content select=\"button\"></ng-content>\n        </footer>\n    "
                }] }
    ];
    /** @nocollapse */
    NovoModalNotificationElement.ctorParameters = function () { return [
        { type: NovoModalRef }
    ]; };
    NovoModalNotificationElement.propDecorators = {
        type: [{ type: Input }],
        icon: [{ type: Input }],
        cancel: [{ type: Output }]
    };
    return NovoModalNotificationElement;
}());
export { NovoModalNotificationElement };
if (false) {
    /** @type {?} */
    NovoModalNotificationElement.prototype.type;
    /** @type {?} */
    NovoModalNotificationElement.prototype.icon;
    /** @type {?} */
    NovoModalNotificationElement.prototype.cancel;
    /** @type {?} */
    NovoModalNotificationElement.prototype.iconType;
    /**
     * @type {?}
     * @private
     */
    NovoModalNotificationElement.prototype.modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7OztBQU01RSxpQ0FFQztBQUNEO0lBQUE7SUFBcUQsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUF0RCxJQUFzRDs7Ozs7QUFLdEQ7SUFBQTtRQUVFLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZUFBVSxHQUFRLElBQUksQ0FBQztRQUN2QixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBUSxRQUFRLEVBQUUsQ0FBQztJQXdCOUIsQ0FBQztJQXJCQyxzQkFBSSxrQ0FBUTtRQURaLDZEQUE2RDs7Ozs7O1FBQzdEO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7O0lBRUQsMkJBQUk7OztJQUFKO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLE1BQVk7UUFDaEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFD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eUJBR0wsTUFBTTs7SUFnQ1QsbUNBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXRDWSw0QkFBNEI7OztJQUN2Qyw0Q0FDYTs7SUFDYiw0Q0FDYTs7SUFFYiw4Q0FDK0M7O0lBRS9DLGdEQUFpQjs7Ozs7SUFFTCxnREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZGVmZXJyZWQvRGVmZXJyZWQnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vKipcbiAqIFBhcmFtcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIE1vZGFsXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFBhcmFtcyB7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFBhcmFtcyBpbXBsZW1lbnRzIE1vZGFsUGFyYW1zIHt9XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGFuIG9wZW5lZCBkaWFsb2cuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxSZWYge1xuICBjb21wb25lbnQ6IGFueSA9IG51bGw7XG4gIGNvbnRlbnRSZWY6IGFueSA9IG51bGw7XG4gIGNvbnRhaW5lclJlZjogYW55ID0gbnVsbDtcbiAgaXNDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX29uQ2xvc2VkOiBhbnkgPSBEZWZlcnJlZCgpO1xuXG4gIC8vIEdldHMgYSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC5cbiAgZ2V0IG9uQ2xvc2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9vbkNsb3NlZDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gIH1cblxuICBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcblxuICAgIGlmICh0aGlzLmNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMuY29udGVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25DbG9zZWQucmVzb2x2ZShyZXN1bHQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbW9kYWwtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6ICc8c3BhbiAjY29udGFpbmVyPjwvc3Bhbj4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsUmVmLmNvbnRlbnRSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRoaXMubW9kYWxSZWYuY29tcG9uZW50LCB0aGlzLmNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge31cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtY2xvc2VcIiB0aGVtZT1cImljb25cIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvYnV0dG9uPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibGFiZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1ib2R5XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImluZGljYXRvclwiIFtuZ0NsYXNzXT1cImljb25UeXBlXCIgKm5nSWY9XCJpY29uVHlwZVwiPjwvaT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbE5vdGlmaWNhdGlvbkVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpY29uVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge1xuICAgIHRoaXMubW9kYWxSZWYgPSBtb2RhbFJlZjtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNoZWNrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2F1dGlvbi1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNhdXRpb24tbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==