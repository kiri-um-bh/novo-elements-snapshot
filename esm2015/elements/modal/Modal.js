/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class NovoModalParams {
}
/**
 * Reference to an opened dialog.
 */
export class NovoModalRef {
    constructor() {
        this.component = null;
        this.contentRef = null;
        this.containerRef = null;
        this.isClosed = false;
        this._onClosed = Deferred();
    }
    // Gets a promise that is resolved when the dialog is closed.
    /**
     * @return {?}
     */
    get onClosed() {
        return this._onClosed;
    }
    /**
     * @return {?}
     */
    open() {
        document.body.classList.add('modal-open');
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        document.body.classList.remove('modal-open');
        if (this.contentRef) {
            this.contentRef.destroy();
        }
        if (this.containerRef) {
            this.containerRef.destroy();
        }
        this._onClosed.resolve(result);
    }
}
NovoModalRef.decorators = [
    { type: Injectable }
];
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
export class NovoModalContainerElement {
    /**
     * @param {?} modalRef
     * @param {?} componentUtils
     */
    constructor(modalRef, componentUtils) {
        this.modalRef = modalRef;
        this.componentUtils = componentUtils;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.modalRef.contentRef = this.componentUtils.append(this.modalRef.component, this.container);
        }));
    }
}
NovoModalContainerElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-modal-container',
                template: '<span #container></span>'
            }] }
];
/** @nocollapse */
NovoModalContainerElement.ctorParameters = () => [
    { type: NovoModalRef },
    { type: ComponentUtils }
];
NovoModalContainerElement.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }]
};
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
export class NovoModalElement {
    /**
     * @param {?} modalRef
     */
    constructor(modalRef) {
        this.modalRef = modalRef;
    }
    /**
     * @return {?}
     */
    close() {
        this.modalRef.close();
    }
}
NovoModalElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-modal',
                template: `
    <ng-content select="header"></ng-content>
    <ng-content select="section"></ng-content>
    <footer><ng-content select="button"></ng-content></footer>
  `
            }] }
];
/** @nocollapse */
NovoModalElement.ctorParameters = () => [
    { type: NovoModalRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoModalElement.prototype.modalRef;
}
export class NovoModalNotificationElement {
    /**
     * @param {?} modalRef
     */
    constructor(modalRef) {
        this.modalRef = modalRef;
        this.cancel = new EventEmitter();
        this.modalRef = modalRef;
    }
    /**
     * @return {?}
     */
    close() {
        this.cancel.emit();
        this.modalRef.close();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
                this.iconType = `bhi-${this.icon}`;
                break;
            default:
                break;
        }
    }
}
NovoModalNotificationElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-notification',
                template: `
    <button class="modal-close" theme="icon" icon="times" (click)="close()"></button>
    <header><ng-content select="label"></ng-content></header>
    <section class="notification-body">
      <i class="indicator" [ngClass]="iconType" *ngIf="iconType"></i>
      <ng-content select="h1"></ng-content>
      <ng-content select="h2"></ng-content>
      <ng-content select="p"></ng-content>
    </section>
    <footer><ng-content select="button"></ng-content></footer>
  `
            }] }
];
/** @nocollapse */
NovoModalNotificationElement.ctorParameters = () => [
    { type: NovoModalRef }
];
NovoModalNotificationElement.propDecorators = {
    type: [{ type: Input }],
    icon: [{ type: Input }],
    cancel: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7OztBQU01RSxpQ0FFQztBQUNELE1BQU0sT0FBTyxlQUFlO0NBQTBCOzs7O0FBTXRELE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRUUsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFRLFFBQVEsRUFBRSxDQUFDO0lBd0I5QixDQUFDOzs7OztJQXJCQyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsTUFBWTtRQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVks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ZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RlZmVycmVkL0RlZmVycmVkJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuLyoqXG4gKiBQYXJhbXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBNb2RhbFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQYXJhbXMge1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxQYXJhbXMgaW1wbGVtZW50cyBNb2RhbFBhcmFtcyB7fVxuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvcGVuZWQgZGlhbG9nLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b01vZGFsUmVmIHtcbiAgY29tcG9uZW50OiBhbnkgPSBudWxsO1xuICBjb250ZW50UmVmOiBhbnkgPSBudWxsO1xuICBjb250YWluZXJSZWY6IGFueSA9IG51bGw7XG4gIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIF9vbkNsb3NlZDogYW55ID0gRGVmZXJyZWQoKTtcblxuICAvLyBHZXRzIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuXG4gIGdldCBvbkNsb3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25DbG9zZWQ7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogYW55KSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG5cbiAgICBpZiAodGhpcy5jb250ZW50UmVmKSB7XG4gICAgICB0aGlzLmNvbnRlbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5jb250YWluZXJSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2xvc2VkLnJlc29sdmUocmVzdWx0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiAnPHNwYW4gI2NvbnRhaW5lcj48L3NwYW4+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbFJlZi5jb250ZW50UmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5tb2RhbFJlZi5jb21wb25lbnQsIHRoaXMuY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICA8Zm9vdGVyPjxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD48L2Zvb3Rlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge31cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIHRoZW1lPVwiaWNvblwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJjbG9zZSgpXCI+PC9idXR0b24+XG4gICAgPGhlYWRlcj48bmctY29udGVudCBzZWxlY3Q9XCJsYWJlbFwiPjwvbmctY29udGVudD48L2hlYWRlcj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1ib2R5XCI+XG4gICAgICA8aSBjbGFzcz1cImluZGljYXRvclwiIFtuZ0NsYXNzXT1cImljb25UeXBlXCIgKm5nSWY9XCJpY29uVHlwZVwiPjwvaT5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDJcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Zm9vdGVyPjxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD48L2Zvb3Rlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHR5cGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGljb25UeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmKSB7XG4gICAgdGhpcy5tb2RhbFJlZiA9IG1vZGFsUmVmO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2hlY2snO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jYXV0aW9uLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2F1dGlvbi1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19