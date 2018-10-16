/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
     * Reference to an opened dialog.
     */
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
    /** @type {?} */
    NovoModalContainerElement.prototype.modalRef;
    /** @type {?} */
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
    NovoModalElement.ctorParameters = function () { return [
        { type: NovoModalRef }
    ]; };
    return NovoModalElement;
}());
export { NovoModalElement };
if (false) {
    /** @type {?} */
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
    /** @type {?} */
    NovoModalNotificationElement.prototype.modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7OztBQU01RSxpQ0FFQztBQUNEO0lBQUE7SUFBcUQsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUF0RCxJQUFzRDs7Ozs7QUFLdEQ7SUFIQTs7T0FFRztJQUNIO1FBRUUsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFRLFFBQVEsRUFBRSxDQUFDO0lBd0I5QixDQUFDO0lBckJDLHNCQUFJLGtDQUFRO1FBRFosNkRBQTZEOzs7Ozs7UUFDN0Q7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7SUFFRCwyQkFBSTs7O0lBQUo7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCw0QkFBSzs7OztJQUFMLFVBQU0sTUFBWTtRQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FB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QkFHTCxNQUFNOztJQWdDVCxtQ0FBQztDQUFBLEFBeERELElBd0RDO1NBdENZLDRCQUE0Qjs7O0lBQ3ZDLDRDQUNhOztJQUNiLDRDQUNhOztJQUViLDhDQUMrQzs7SUFFL0MsZ0RBQWlCOztJQUVMLGdEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kZWZlcnJlZC9EZWZlcnJlZCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8qKlxuICogUGFyYW1zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgTW9kYWxcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUGFyYW1zIHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5leHBvcnQgY2xhc3MgTm92b01vZGFsUGFyYW1zIGltcGxlbWVudHMgTW9kYWxQYXJhbXMge31cblxuLyoqXG4gKiBSZWZlcmVuY2UgdG8gYW4gb3BlbmVkIGRpYWxvZy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFJlZiB7XG4gIGNvbXBvbmVudDogYW55ID0gbnVsbDtcbiAgY29udGVudFJlZjogYW55ID0gbnVsbDtcbiAgY29udGFpbmVyUmVmOiBhbnkgPSBudWxsO1xuICBpc0Nsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBfb25DbG9zZWQ6IGFueSA9IERlZmVycmVkKCk7XG5cbiAgLy8gR2V0cyBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2xvc2VkLlxuICBnZXQgb25DbG9zZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uQ2xvc2VkO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IGFueSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuXG4gICAgaWYgKHRoaXMuY29udGVudFJlZikge1xuICAgICAgdGhpcy5jb250ZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkNsb3NlZC5yZXNvbHZlKHJlc3VsdCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1tb2RhbC1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogJzxzcGFuICNjb250YWluZXI+PC9zcGFuPicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxSZWYuY29udGVudFJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kTmV4dFRvTG9jYXRpb24odGhpcy5tb2RhbFJlZi5jb21wb25lbnQsIHRoaXMuY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJzZWN0aW9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmKSB7fVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5vdGlmaWNhdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIHRoZW1lPVwiaWNvblwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJjbG9zZSgpXCI+PC9idXR0b24+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJsYWJlbFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibm90aWZpY2F0aW9uLWJvZHlcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaW5kaWNhdG9yXCIgW25nQ2xhc3NdPVwiaWNvblR5cGVcIiAqbmdJZj1cImljb25UeXBlXCI+PC9pPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDFcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoMlwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInBcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHR5cGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGljb25UeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmKSB7XG4gICAgdGhpcy5tb2RhbFJlZiA9IG1vZGFsUmVmO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2hlY2snO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jYXV0aW9uLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2F1dGlvbi1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19