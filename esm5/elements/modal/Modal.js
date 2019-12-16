/**
 * @fileoverview added by tsickle
 * Generated from: elements/modal/Modal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.modalRef.contentRef = _this.componentUtils.append(_this.modalRef.component, _this.container);
        }));
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
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7QUFNNUUsaUNBRUM7QUFDRDtJQUFBO0lBQXFELENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBdEQsSUFBc0Q7Ozs7O0FBS3REO0lBQUE7UUFFRSxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVEsUUFBUSxFQUFFLENBQUM7SUF3QjlCLENBQUM7SUFyQkMsc0JBQUksa0NBQVE7UUFEWiw2REFBNkQ7Ozs7OztRQUM3RDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7OztJQUVELDJCQUFJOzs7SUFBSjtRQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELDRCQUFLOzs7O0lBQUwsVUFBTSxNQUFZO1FBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FB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QyxLQUFLO3VCQUVMLEtBQUs7eUJBR0wsTUFBTTs7SUFnQ1QsbUNBQUM7Q0FBQSxBQXBERCxJQW9EQztTQXRDWSw0QkFBNEI7OztJQUN2Qyw0Q0FDYTs7SUFDYiw0Q0FDYTs7SUFFYiw4Q0FDK0M7O0lBRS9DLGdEQUFpQjs7Ozs7SUFFTCxnREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZGVmZXJyZWQvRGVmZXJyZWQnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vKipcbiAqIFBhcmFtcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIE1vZGFsXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFBhcmFtcyB7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFBhcmFtcyBpbXBsZW1lbnRzIE1vZGFsUGFyYW1zIHt9XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGFuIG9wZW5lZCBkaWFsb2cuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxSZWYge1xuICBjb21wb25lbnQ6IGFueSA9IG51bGw7XG4gIGNvbnRlbnRSZWY6IGFueSA9IG51bGw7XG4gIGNvbnRhaW5lclJlZjogYW55ID0gbnVsbDtcbiAgaXNDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX29uQ2xvc2VkOiBhbnkgPSBEZWZlcnJlZCgpO1xuXG4gIC8vIEdldHMgYSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC5cbiAgZ2V0IG9uQ2xvc2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9vbkNsb3NlZDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gIH1cblxuICBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcblxuICAgIGlmICh0aGlzLmNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMuY29udGVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25DbG9zZWQucmVzb2x2ZShyZXN1bHQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbW9kYWwtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6ICc8c3BhbiAjY29udGFpbmVyPjwvc3Bhbj4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsUmVmLmNvbnRlbnRSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLm1vZGFsUmVmLmNvbXBvbmVudCwgdGhpcy5jb250YWluZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJzZWN0aW9uXCI+PC9uZy1jb250ZW50PlxuICAgIDxmb290ZXI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PjwvZm9vdGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmKSB7fVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5vdGlmaWNhdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cImNsb3NlKClcIj48L2J1dHRvbj5cbiAgICA8aGVhZGVyPjxuZy1jb250ZW50IHNlbGVjdD1cImxhYmVsXCI+PC9uZy1jb250ZW50PjwvaGVhZGVyPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwibm90aWZpY2F0aW9uLWJvZHlcIj5cbiAgICAgIDxpIGNsYXNzPVwiaW5kaWNhdG9yXCIgW25nQ2xhc3NdPVwiaWNvblR5cGVcIiAqbmdJZj1cImljb25UeXBlXCI+PC9pPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDFcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoMlwiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInBcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxmb290ZXI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PjwvZm9vdGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxOb3RpZmljYXRpb25FbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaWNvblR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYpIHtcbiAgICB0aGlzLm1vZGFsUmVmID0gbW9kYWxSZWY7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNhbmNlbC5lbWl0KCk7XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jaGVjayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNhdXRpb24tbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jYXV0aW9uLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSBgYmhpLSR7dGhpcy5pY29ufWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=