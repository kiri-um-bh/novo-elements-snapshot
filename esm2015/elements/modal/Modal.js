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
        setTimeout(() => {
            this.modalRef.contentRef = this.componentUtils.appendNextToLocation(this.modalRef.component, this.container);
        });
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
        <footer>
            <ng-content select="button"></ng-content>
        </footer>
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
        <header>
            <ng-content select="label"></ng-content>
        </header>
        <section class="notification-body">
            <i class="indicator" [ngClass]="iconType" *ngIf="iconType"></i>
            <ng-content select="h1"></ng-content>
            <ng-content select="h2"></ng-content>
            <ng-content select="p"></ng-content>
        </section>
        <footer>
            <ng-content select="button"></ng-content>
        </footer>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7OztBQU01RSxpQ0FFQztBQUNELE1BQU0sT0FBTyxlQUFlO0NBQTBCOzs7O0FBTXRELE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRUUsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFRLFFBQVEsRUFBRSxDQUFDO0lBd0I5QixDQUFDOzs7OztJQXJCQyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsTUFBWTtRQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVks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YWluZXJSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RlZmVycmVkL0RlZmVycmVkJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuLyoqXG4gKiBQYXJhbXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBNb2RhbFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQYXJhbXMge1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxQYXJhbXMgaW1wbGVtZW50cyBNb2RhbFBhcmFtcyB7fVxuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvcGVuZWQgZGlhbG9nLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b01vZGFsUmVmIHtcbiAgY29tcG9uZW50OiBhbnkgPSBudWxsO1xuICBjb250ZW50UmVmOiBhbnkgPSBudWxsO1xuICBjb250YWluZXJSZWY6IGFueSA9IG51bGw7XG4gIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIF9vbkNsb3NlZDogYW55ID0gRGVmZXJyZWQoKTtcblxuICAvLyBHZXRzIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuXG4gIGdldCBvbkNsb3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25DbG9zZWQ7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogYW55KSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG5cbiAgICBpZiAodGhpcy5jb250ZW50UmVmKSB7XG4gICAgICB0aGlzLmNvbnRlbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5jb250YWluZXJSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2xvc2VkLnJlc29sdmUocmVzdWx0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiAnPHNwYW4gI2NvbnRhaW5lcj48L3NwYW4+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbFJlZi5jb250ZW50UmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmROZXh0VG9Mb2NhdGlvbih0aGlzLm1vZGFsUmVmLmNvbXBvbmVudCwgdGhpcy5jb250YWluZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInNlY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYpIHt9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbm90aWZpY2F0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cImNsb3NlKClcIj48L2J1dHRvbj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImxhYmVsXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJub3RpZmljYXRpb24tYm9keVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJpbmRpY2F0b3JcIiBbbmdDbGFzc109XCJpY29uVHlwZVwiICpuZ0lmPVwiaWNvblR5cGVcIj48L2k+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoMVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxOb3RpZmljYXRpb25FbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaWNvblR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYpIHtcbiAgICB0aGlzLm1vZGFsUmVmID0gbW9kYWxSZWY7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNhbmNlbC5lbWl0KCk7XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jaGVjayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNhdXRpb24tbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jYXV0aW9uLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSBgYmhpLSR7dGhpcy5pY29ufWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=