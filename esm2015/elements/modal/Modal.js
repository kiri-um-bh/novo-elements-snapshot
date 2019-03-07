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
export class NovoModalParams {
}
/**
 * Reference to an opened dialog.
 */
export class NovoModalRef {
    /**
     * Reference to an opened dialog.
     */
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
    /** @type {?} */
    NovoModalContainerElement.prototype.modalRef;
    /** @type {?} */
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
NovoModalElement.ctorParameters = () => [
    { type: NovoModalRef }
];
if (false) {
    /** @type {?} */
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
    /** @type {?} */
    NovoModalNotificationElement.prototype.modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7OztBQU01RSxpQ0FFQztBQUNELE1BQU07Q0FBZ0Q7Ozs7QUFNdEQsTUFBTTtJQUpOOztPQUVHO0lBQ0g7UUFFRSxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVEsUUFBUSxFQUFFLENBQUM7SUF3QjlCLENBQUM7Ozs7O0lBckJDLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxNQUFZO1FBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBN0JGLFVBQVU7Ozs7SUFFVCxpQ0FBc0I7O0lBQ3RCLGtDQUF1Qjs7SUFDdkIsb0NBQXlCOztJQUN6QixnQ0FBMEI7O0lBQzFCLGlDQUE0Qjs7QUE4QjlCLE1BQU07Ozs7O0lBSUosWUFBb0IsUUFBc0IsRUFBVSxjQUE4QjtRQUE5RCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQzs7OztJQUV0RixlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9HLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7OztZQUsrQixZQUFZO1lBdERuQyxjQUFjOzs7d0JBbURwQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O0lBQWxELDhDQUM0Qjs7SUFFaEIsNkNBQThCOztJQUFFLG1EQUFzQzs7QUFtQnBGLE1BQU07Ozs7SUFDSixZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO0lBQUcsQ0FBQzs7OztJQUU5QyxLQUFLO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7O0tBTVA7YUFDSjs7O1lBRStCLFlBQVk7Ozs7SUFBOUIsb0NBQThCOztBQXlCNUMsTUFBTTs7OztJQVdKLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFKMUMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1A7YUFDSjs7O1lBWStCLFlBQVk7OzttQkFWekMsS0FBSzttQkFFTCxLQUFLO3FCQUdMLE1BQU07Ozs7SUFMUCw0Q0FDYTs7SUFDYiw0Q0FDYTs7SUFFYiw4Q0FDK0M7O0lBRS9DLGdEQUFpQjs7SUFFTCxnREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZGVmZXJyZWQvRGVmZXJyZWQnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vKipcbiAqIFBhcmFtcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIE1vZGFsXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFBhcmFtcyB7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFBhcmFtcyBpbXBsZW1lbnRzIE1vZGFsUGFyYW1zIHt9XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGFuIG9wZW5lZCBkaWFsb2cuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxSZWYge1xuICBjb21wb25lbnQ6IGFueSA9IG51bGw7XG4gIGNvbnRlbnRSZWY6IGFueSA9IG51bGw7XG4gIGNvbnRhaW5lclJlZjogYW55ID0gbnVsbDtcbiAgaXNDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX29uQ2xvc2VkOiBhbnkgPSBEZWZlcnJlZCgpO1xuXG4gIC8vIEdldHMgYSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC5cbiAgZ2V0IG9uQ2xvc2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9vbkNsb3NlZDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gIH1cblxuICBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcblxuICAgIGlmICh0aGlzLmNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMuY29udGVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25DbG9zZWQucmVzb2x2ZShyZXN1bHQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbW9kYWwtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6ICc8c3BhbiAjY29udGFpbmVyPjwvc3Bhbj4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsUmVmLmNvbnRlbnRSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRoaXMubW9kYWxSZWYuY29tcG9uZW50LCB0aGlzLmNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge31cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtY2xvc2VcIiB0aGVtZT1cImljb25cIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvYnV0dG9uPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibGFiZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1ib2R5XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImluZGljYXRvclwiIFtuZ0NsYXNzXT1cImljb25UeXBlXCIgKm5nSWY9XCJpY29uVHlwZVwiPjwvaT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbE5vdGlmaWNhdGlvbkVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpY29uVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge1xuICAgIHRoaXMubW9kYWxSZWYgPSBtb2RhbFJlZjtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNoZWNrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2F1dGlvbi1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNhdXRpb24tbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==