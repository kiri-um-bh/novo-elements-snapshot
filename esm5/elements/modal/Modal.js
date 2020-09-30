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
            _this.modalRef.contentRef = _this.componentUtils.append(_this.modalRef.component, _this.container);
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
                    template: "\n    <ng-content select=\"header\"></ng-content>\n    <ng-content select=\"section\"></ng-content>\n    <footer><ng-content select=\"button\"></ng-content></footer>\n  "
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
                    template: "\n    <button class=\"modal-close\" theme=\"icon\" icon=\"times\" (click)=\"close()\"></button>\n    <header><ng-content select=\"label\"></ng-content></header>\n    <section class=\"notification-body\">\n      <i class=\"indicator\" [ngClass]=\"iconType\" *ngIf=\"iconType\"></i>\n      <ng-content select=\"h1\"></ng-content>\n      <ng-content select=\"h2\"></ng-content>\n      <ng-content select=\"p\"></ng-content>\n    </section>\n    <footer><ng-content select=\"button\"></ng-content></footer>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7OztBQU01RSxpQ0FFQztBQUNEO0lBQUE7SUFBcUQsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUF0RCxJQUFzRDs7Ozs7QUFLdEQ7SUFBQTtRQUVFLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZUFBVSxHQUFRLElBQUksQ0FBQztRQUN2QixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBUSxRQUFRLEVBQUUsQ0FBQztJQXdCOUIsQ0FBQztJQXJCQyxzQkFBSSxrQ0FBUTtRQURaLDZEQUE2RDs7Ozs7O1FBQzdEO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7O0lBRUQsMkJBQUk7OztJQUFKO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLE1BQVk7UUFDaEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFD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LE1BQU07O0lBZ0NULG1DQUFDO0NBQUEsQUFwREQsSUFvREM7U0F0Q1ksNEJBQTRCOzs7SUFDdkMsNENBQ2E7O0lBQ2IsNENBQ2E7O0lBRWIsOENBQytDOztJQUUvQyxnREFBaUI7Ozs7O0lBRUwsZ0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RlZmVycmVkL0RlZmVycmVkJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuLyoqXG4gKiBQYXJhbXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBNb2RhbFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQYXJhbXMge1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxQYXJhbXMgaW1wbGVtZW50cyBNb2RhbFBhcmFtcyB7fVxuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvcGVuZWQgZGlhbG9nLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b01vZGFsUmVmIHtcbiAgY29tcG9uZW50OiBhbnkgPSBudWxsO1xuICBjb250ZW50UmVmOiBhbnkgPSBudWxsO1xuICBjb250YWluZXJSZWY6IGFueSA9IG51bGw7XG4gIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIF9vbkNsb3NlZDogYW55ID0gRGVmZXJyZWQoKTtcblxuICAvLyBHZXRzIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuXG4gIGdldCBvbkNsb3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25DbG9zZWQ7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogYW55KSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG5cbiAgICBpZiAodGhpcy5jb250ZW50UmVmKSB7XG4gICAgICB0aGlzLmNvbnRlbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5jb250YWluZXJSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2xvc2VkLnJlc29sdmUocmVzdWx0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiAnPHNwYW4gI2NvbnRhaW5lcj48L3NwYW4+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbFJlZi5jb250ZW50UmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5tb2RhbFJlZi5jb21wb25lbnQsIHRoaXMuY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICA8Zm9vdGVyPjxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD48L2Zvb3Rlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge31cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIHRoZW1lPVwiaWNvblwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJjbG9zZSgpXCI+PC9idXR0b24+XG4gICAgPGhlYWRlcj48bmctY29udGVudCBzZWxlY3Q9XCJsYWJlbFwiPjwvbmctY29udGVudD48L2hlYWRlcj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1ib2R5XCI+XG4gICAgICA8aSBjbGFzcz1cImluZGljYXRvclwiIFtuZ0NsYXNzXT1cImljb25UeXBlXCIgKm5nSWY9XCJpY29uVHlwZVwiPjwvaT5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDJcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Zm9vdGVyPjxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD48L2Zvb3Rlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHR5cGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGljb25UeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmKSB7XG4gICAgdGhpcy5tb2RhbFJlZiA9IG1vZGFsUmVmO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2hlY2snO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jYXV0aW9uLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2F1dGlvbi1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19