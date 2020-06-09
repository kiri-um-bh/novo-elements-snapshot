// NG2
import { Component, ViewContainerRef, ViewChild, Input, Output, EventEmitter, Injectable } from '@angular/core';
// APP
import { Deferred } from './../../utils/deferred/Deferred';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/component-utils/ComponentUtils";
import * as i2 from "../button/Button";
import * as i3 from "@angular/common";
const _c0 = ["container"];
const _c1 = [[["header"]], [["section"]], [["button"]]];
const _c2 = ["header", "section", "button"];
function NovoModalNotificationElement_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.iconType);
} }
const _c3 = [[["label"]], [["h1"]], [["h2"]], [["p"]], [["button"]]];
const _c4 = ["label", "h1", "h2", "p", "button"];
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
    get onClosed() {
        return this._onClosed;
    }
    open() {
        document.body.classList.add('modal-open');
    }
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
NovoModalRef.ɵfac = function NovoModalRef_Factory(t) { return new (t || NovoModalRef)(); };
NovoModalRef.ɵprov = i0.ɵɵdefineInjectable({ token: NovoModalRef, factory: NovoModalRef.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalRef, [{
        type: Injectable
    }], null, null); })();
export class NovoModalContainerElement {
    constructor(modalRef, componentUtils) {
        this.modalRef = modalRef;
        this.componentUtils = componentUtils;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.modalRef.contentRef = this.componentUtils.append(this.modalRef.component, this.container);
        });
    }
}
NovoModalContainerElement.ɵfac = function NovoModalContainerElement_Factory(t) { return new (t || NovoModalContainerElement)(i0.ɵɵdirectiveInject(NovoModalRef), i0.ɵɵdirectiveInject(i1.ComponentUtils)); };
NovoModalContainerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoModalContainerElement, selectors: [["novo-modal-container"]], viewQuery: function NovoModalContainerElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, decls: 2, vars: 0, consts: [["container", ""]], template: function NovoModalContainerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", null, 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalContainerElement, [{
        type: Component,
        args: [{
                selector: 'novo-modal-container',
                template: '<span #container></span>',
            }]
    }], function () { return [{ type: NovoModalRef }, { type: i1.ComponentUtils }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef }]
        }] }); })();
export class NovoModalElement {
    constructor(modalRef) {
        this.modalRef = modalRef;
    }
    close() {
        this.modalRef.close();
    }
}
NovoModalElement.ɵfac = function NovoModalElement_Factory(t) { return new (t || NovoModalElement)(i0.ɵɵdirectiveInject(NovoModalRef)); };
NovoModalElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoModalElement, selectors: [["novo-modal"]], ngContentSelectors: _c2, decls: 4, vars: 0, template: function NovoModalElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵprojection(0);
        i0.ɵɵprojection(1, 1);
        i0.ɵɵelementStart(2, "footer");
        i0.ɵɵprojection(3, 2);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalElement, [{
        type: Component,
        args: [{
                selector: 'novo-modal',
                template: `
    <ng-content select="header"></ng-content>
    <ng-content select="section"></ng-content>
    <footer><ng-content select="button"></ng-content></footer>
  `,
            }]
    }], function () { return [{ type: NovoModalRef }]; }, null); })();
export class NovoModalNotificationElement {
    constructor(modalRef) {
        this.modalRef = modalRef;
        this.cancel = new EventEmitter();
        this.modalRef = modalRef;
    }
    close() {
        this.cancel.emit();
        this.modalRef.close();
    }
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
NovoModalNotificationElement.ɵfac = function NovoModalNotificationElement_Factory(t) { return new (t || NovoModalNotificationElement)(i0.ɵɵdirectiveInject(NovoModalRef)); };
NovoModalNotificationElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoModalNotificationElement, selectors: [["novo-notification"]], inputs: { type: "type", icon: "icon" }, outputs: { cancel: "cancel" }, ngContentSelectors: _c4, decls: 10, vars: 1, consts: [["theme", "icon", "icon", "times", 1, "modal-close", 3, "click"], [1, "notification-body"], ["class", "indicator", 3, "ngClass", 4, "ngIf"], [1, "indicator", 3, "ngClass"]], template: function NovoModalNotificationElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function NovoModalNotificationElement_Template_button_click_0_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "header");
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "section", 1);
        i0.ɵɵtemplate(4, NovoModalNotificationElement_i_4_Template, 1, 1, "i", 2);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵprojection(6, 2);
        i0.ɵɵprojection(7, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "footer");
        i0.ɵɵprojection(9, 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.iconType);
    } }, directives: [i2.NovoButtonElement, i3.NgIf, i3.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalNotificationElement, [{
        type: Component,
        args: [{
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
  `,
            }]
    }], function () { return [{ type: NovoModalRef }]; }, { type: [{
            type: Input
        }], icon: [{
            type: Input
        }], cancel: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkksTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7OztJQXFGdEUsdUJBQStEOzs7SUFBMUMseUNBQW9COzs7O0FBNUUvQyxNQUFNLE9BQU8sZUFBZTtDQUEwQjtBQUV0RDs7R0FFRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRUUsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFRLFFBQVEsRUFBRSxDQUFDO0tBd0I3QjtJQXRCQyw2REFBNkQ7SUFDN0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJO1FBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBWTtRQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJ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QXdCO1FBQ3hCLHFCQUF3QjtRQUN4QixxQkFBdUI7UUFDekIsaUJBQVU7UUFDViw4QkFBUTtRQUFBLHFCQUE0QjtRQUFhLGlCQUFTOztRQUxkLGVBQWdCO1FBQWhCLG1DQUFnQjs7a0RBUW5ELDRCQUE0QjtjQWR4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7YUFDRjtzQ0FZK0IsWUFBWTtrQkFWekMsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kZWZlcnJlZC9EZWZlcnJlZCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8qKlxuICogUGFyYW1zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgTW9kYWxcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUGFyYW1zIHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5leHBvcnQgY2xhc3MgTm92b01vZGFsUGFyYW1zIGltcGxlbWVudHMgTW9kYWxQYXJhbXMge31cblxuLyoqXG4gKiBSZWZlcmVuY2UgdG8gYW4gb3BlbmVkIGRpYWxvZy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFJlZiB7XG4gIGNvbXBvbmVudDogYW55ID0gbnVsbDtcbiAgY29udGVudFJlZjogYW55ID0gbnVsbDtcbiAgY29udGFpbmVyUmVmOiBhbnkgPSBudWxsO1xuICBpc0Nsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBfb25DbG9zZWQ6IGFueSA9IERlZmVycmVkKCk7XG5cbiAgLy8gR2V0cyBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2xvc2VkLlxuICBnZXQgb25DbG9zZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uQ2xvc2VkO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IGFueSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuXG4gICAgaWYgKHRoaXMuY29udGVudFJlZikge1xuICAgICAgdGhpcy5jb250ZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkNsb3NlZC5yZXNvbHZlKHJlc3VsdCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1tb2RhbC1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogJzxzcGFuICNjb250YWluZXI+PC9zcGFuPicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxSZWYuY29udGVudFJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMubW9kYWxSZWYuY29tcG9uZW50LCB0aGlzLmNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInNlY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgPGZvb3Rlcj48bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIj48L25nLWNvbnRlbnQ+PC9mb290ZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYpIHt9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbm90aWZpY2F0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtY2xvc2VcIiB0aGVtZT1cImljb25cIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvYnV0dG9uPlxuICAgIDxoZWFkZXI+PG5nLWNvbnRlbnQgc2VsZWN0PVwibGFiZWxcIj48L25nLWNvbnRlbnQ+PC9oZWFkZXI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJub3RpZmljYXRpb24tYm9keVwiPlxuICAgICAgPGkgY2xhc3M9XCJpbmRpY2F0b3JcIiBbbmdDbGFzc109XCJpY29uVHlwZVwiICpuZ0lmPVwiaWNvblR5cGVcIj48L2k+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoMVwiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgyXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicFwiPjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGZvb3Rlcj48bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIj48L25nLWNvbnRlbnQ+PC9mb290ZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbE5vdGlmaWNhdGlvbkVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpY29uVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge1xuICAgIHRoaXMubW9kYWxSZWYgPSBtb2RhbFJlZjtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNoZWNrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2F1dGlvbi1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnYmhpLWNhdXRpb24tbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==