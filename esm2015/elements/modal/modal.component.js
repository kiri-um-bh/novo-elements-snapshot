// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NovoModalRef } from './modal-ref';
import * as i0 from "@angular/core";
import * as i1 from "./modal-ref";
import * as i2 from "../button/Button";
import * as i3 from "@angular/common";
const _c0 = [[["header"]], [["section"]], [["button"]]];
const _c1 = ["header", "section", "button"];
function NovoModalNotificationElement_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.iconType);
} }
const _c2 = [[["label"]], [["h1"]], [["h2"]], [["p"]], [["button"]]];
const _c3 = ["label", "h1", "h2", "p", "button"];
export class NovoModalElement {
    constructor(modalRef) {
        this.modalRef = modalRef;
    }
}
NovoModalElement.ɵfac = function NovoModalElement_Factory(t) { return new (t || NovoModalElement)(i0.ɵɵdirectiveInject(i1.NovoModalRef)); };
NovoModalElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoModalElement, selectors: [["novo-modal"]], ngContentSelectors: _c1, decls: 4, vars: 0, template: function NovoModalElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
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
    }], function () { return [{ type: i1.NovoModalRef }]; }, null); })();
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
NovoModalNotificationElement.ɵfac = function NovoModalNotificationElement_Factory(t) { return new (t || NovoModalNotificationElement)(i0.ɵɵdirectiveInject(i1.NovoModalRef)); };
NovoModalNotificationElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoModalNotificationElement, selectors: [["novo-notification"]], inputs: { type: "type", icon: "icon" }, outputs: { cancel: "cancel" }, ngContentSelectors: _c3, decls: 10, vars: 1, consts: [["theme", "icon", "icon", "times", 1, "modal-close", 3, "click"], [1, "notification-body"], ["class", "indicator", 3, "ngClass", 4, "ngIf"], [1, "indicator", 3, "ngClass"]], template: function NovoModalNotificationElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
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
    }], function () { return [{ type: i1.NovoModalRef }]; }, { type: [{
            type: Input
        }], icon: [{
            type: Input
        }], cancel: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7O0lBb0JyQyx1QkFBK0Q7OztJQUExQyx5Q0FBb0I7Ozs7QUFWL0MsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO0lBQUcsQ0FBQzs7Z0ZBRG5DLGdCQUFnQjtxREFBaEIsZ0JBQWdCOztRQUx6QixrQkFBNEI7UUFDNUIscUJBQTZCO1FBQzdCLDhCQUFRO1FBQUEscUJBQTRCO1FBQWEsaUJBQVM7O2tEQUdqRCxnQkFBZ0I7Y0FSNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOztBQW1CRCxNQUFNLE9BQU8sNEJBQTRCO0lBV3ZDLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFKMUMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxRQUFRO1FBQ04sUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7d0dBckNVLDRCQUE0QjtpRUFBNUIsNEJBQTRCOztRQVhyQyxpQ0FBaUY7UUFBM0IseUdBQVMsV0FBTyxJQUFDO1FBQUMsaUJBQVM7UUFDakYsOEJBQVE7UUFBQSxrQkFBMkI7UUFBYSxpQkFBUztRQUN6RCxrQ0FDRTtRQUFBLHlFQUEyRDtRQUMzRCxxQkFBd0I7UUFDeEIscUJBQXdCO1FBQ3hCLHFCQUF1QjtRQUN6QixpQkFBVTtRQUNWLDhCQUFRO1FBQUEscUJBQTRCO1FBQWEsaUJBQVM7O1FBTGQsZUFBZ0I7UUFBaEIsbUNBQWdCOztrREFRbkQsNEJBQTRCO2NBZHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDthQUNGOytEQUdDLElBQUk7a0JBREgsS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSztZQUlOLE1BQU07a0JBREwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b01vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJoZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICA8Zm9vdGVyPjxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD48L2Zvb3Rlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZikge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIHRoZW1lPVwiaWNvblwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJjbG9zZSgpXCI+PC9idXR0b24+XG4gICAgPGhlYWRlcj48bmctY29udGVudCBzZWxlY3Q9XCJsYWJlbFwiPjwvbmctY29udGVudD48L2hlYWRlcj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1ib2R5XCI+XG4gICAgICA8aSBjbGFzcz1cImluZGljYXRvclwiIFtuZ0NsYXNzXT1cImljb25UeXBlXCIgKm5nSWY9XCJpY29uVHlwZVwiPjwvaT5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImgxXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDJcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Zm9vdGVyPjxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD48L2Zvb3Rlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vZGFsTm90aWZpY2F0aW9uRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHR5cGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGljb25UeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmKSB7XG4gICAgdGhpcy5tb2RhbFJlZiA9IG1vZGFsUmVmO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2hlY2snO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2JoaS1jYXV0aW9uLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdiaGktY2F1dGlvbi1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gYGJoaS0ke3RoaXMuaWNvbn1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19